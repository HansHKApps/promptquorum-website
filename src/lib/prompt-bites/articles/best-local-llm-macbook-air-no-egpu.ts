import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-en.webp',
    title: 'Best Local LLM for a MacBook Air Without an eGPU in 2026',
    seoTitle: 'Best Local LLM for MacBook Air (No eGPU) 2026',
    metaDescription: 'The M5 MacBook Air is one of the best portable local-LLM laptops without an eGPU. For local AI, choose 24GB or 32GB unified memory — not the 16GB base model.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 14B'],
    current_hardware_mentioned: ['MacBook Air M5'],
    educationalLevel: 'Beginner',
    audience: 'MacBook Air buyers deciding how much unified memory to configure for local LLMs, some of whom assume they need an eGPU to run them',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>The M5 MacBook Air is one of the best portable local-LLM laptops you can buy without needing an eGPU — for local AI, configure 24GB or 32GB unified memory, not the 16GB base model.</strong> Apple Silicon has no PCIe path to an external GPU, so the missing eGPU option is not a workaround you need — unified memory capacity is the actual lever, and it cannot be added after purchase.',
    toc: [
      { label: 'Best Configuration for Local LLMs', anchor: '#best-pick' },
      { label: '24 GB vs 32 GB MacBook Air', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best MacBook Air configuration for local LLMs?',
        answer: 'The M5 MacBook Air with 32 GB unified memory is the best configuration for local AI use; 24 GB is the best-value pick if budget matters more. Skip the 16 GB base model if local LLMs are a primary reason you\'re buying. An eGPU cannot help on Apple Silicon — buy on memory, not on an upgrade path that doesn\'t exist.',
        bullets: [
          'M5 MacBook Air ships with 16 GB unified memory standard, configurable to 24 GB or 32 GB',
          'M5 brings 153 GB/s of memory bandwidth (28% faster than M4) and dedicated Neural Accelerators Apple markets specifically for on-device LLMs',
          '24 GB is the best-value pick for 7B-14B class models; 32 GB is the best configuration if local AI is a primary use case',
          'No eGPU upgrade path exists on Apple Silicon — unified memory bought at purchase time is the only lever',
          'MacBook Air pricing varies by configuration and retailer — check current price rather than trusting a fixed figure',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'M5 MacBook Air: 24 GB unified memory is the best-value configuration for local LLMs; 32 GB is the best configuration if local AI is a primary reason you\'re buying',
          'Skip the 16 GB base model if local AI matters to you — unified memory cannot be upgraded after purchase',
          'No eGPU upgrade path exists on Apple Silicon — this isn\'t a workaround you\'re missing, unified memory is the actual lever',
          'M5\'s 153 GB/s memory bandwidth and Neural Accelerators are a real generational step up from M4 for on-device inference',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best MacBook Air Configuration for Local LLMs',
        content: [
          '<strong>If local AI is one of the main reasons you\'re buying an M5 MacBook Air, configure it with 32 GB of unified memory.</strong> Apple Silicon shares memory between CPU and GPU, so the unified-memory figure on the spec sheet — not a separate VRAM number — is what determines which models fit. 32 GB gives comfortable headroom for 14B-class models and room to experiment with larger quantized models.',
          'If budget matters more than maximum headroom, 24 GB is the practical sweet spot: enough for 7B-14B class models with room left for macOS and a browser, at a real price step down from 32 GB. Skip the 16 GB base configuration if local LLMs are a genuine reason you\'re buying the Air — it handles small models fine, but memory can\'t be added after purchase, so buying too little now is a decision you\'re stuck with.',
          'M5 itself is a real upgrade for this, not just a name change: Apple\'s M5 GPU adds a Neural Accelerator to every core, and Apple markets the chip specifically around running large language models on-device, backed by 153 GB/s of memory bandwidth — about 28% faster than M4.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Air+M5+24GB',
            productName: 'MacBook Air M5 (24GB unified memory)',
            productCategory: 'laptop',
            label: 'Check MacBook Air M5 24GB current price',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Air+M5+32GB',
            productName: 'MacBook Air M5 (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Check MacBook Air M5 32GB current price',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '24 GB vs 32 GB MacBook Air for Local LLMs',
        content: [
          'The 16 GB base configuration is the practical minimum only if local AI is a minor, occasional use case — it runs 7B-class models but leaves little room for anything else. Since unified memory can\'t be upgraded after purchase, match your configuration to your actual use case now rather than planning to "upgrade later" — that option doesn\'t exist on a MacBook Air.',
          'An eGPU won\'t extend any of these ceilings, either. Apple Silicon has no PCIe path to an external GPU regardless of configuration, so don\'t factor a future eGPU purchase into this decision at all.',
        ],
        columns: ['Model size', 'On 24GB', 'On 32GB'],
        rows: [
          { '0': '7B-8B', '1': '🟢 Excellent', '2': '🟢 Excellent' },
          { '0': '13B-14B', '1': '🟢 Comfortable', '2': '🟢 Plenty of room' },
          { '0': '20B-30B', '1': '🟡 Tight, quant-dependent', '2': '🟢 Comfortable at Q4' },
          { '0': '70B', '1': '🔴 Not realistic', '2': '🔴 Not what to buy this for' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I add an eGPU to a MacBook Air, MacBook Pro, or iMac for local LLMs?',
            a: 'No, not for acceleration on any current Apple Silicon Mac — MacBook Air, MacBook Pro, or an Apple Silicon iMac. Apple Silicon has no PCIe path to an external GPU, and even where an eGPU is physically connected (only possible on older Intel Macs, not Apple Silicon), macOS and tools like Ollama only dispatch inference to Apple\'s own Metal backend. If your workflow depends on NVIDIA CUDA and an upgradeable GPU, a Windows or Linux machine is the more practical choice, not an eGPU-equipped Mac.',
          },
          {
            q: 'Is the 16 GB base MacBook Air enough for local LLMs?',
            a: 'It can run 7B-class models at Q4 comfortably, so it isn\'t useless. But local AI isn\'t the use case that configuration was built for — memory can\'t be added after purchase, so if running larger local models matters to you, configure at least 24 GB at checkout rather than planning to upgrade later.',
          },
          {
            q: 'Does the MacBook Air throttle during long LLM inference?',
            a: 'It can. The MacBook Air is fanless, so sustained heavy workloads — including long inference sessions — may trigger mild thermal throttling after 10-15 minutes. Short chat interactions are unaffected; continuous batch processing is where it shows up.',
          },
          {
            q: 'Should I buy a MacBook Pro instead for local LLMs?',
            a: 'Only if you need active cooling for sustained workloads or want unified-memory configurations above 32 GB — the MacBook Pro lineup goes up to 64 GB with M5 Pro or 128 GB with M5 Max, ceilings the MacBook Air doesn\'t offer.',
          },
          {
            q: 'Does Ollama or MLX run better on a MacBook Air?',
            a: 'Both use the same Metal acceleration underneath; MLX is Apple\'s own framework and can be marginally faster for some model architectures, while Ollama offers a simpler setup experience. Either is a reasonable default.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Can You Run Local LLMs with an eGPU on a MacBook?](/prompt-bites/best-egpu-ollama-macbook) — why eGPUs don\'t work on Apple Silicon',
          '[Is the Mac Mini M4 Good for Local LLMs?](/prompt-bites/mac-mini-m4-local-llm) — a desktop alternative with more memory headroom',
          '[Best Local LLM for a 32 GB Unified Memory Mac](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — the same memory tier, desktop form factor',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-ar.webp',
    title: 'أفضل LLM محلي لجهاز MacBook Air بدون بطاقة رسومات خارجية (eGPU)؟',
    seoTitle: 'أفضل LLM محلي لـ MacBook Air (بدون eGPU) 2026',
    metaDescription: 'أفضل LLM محلي لجهاز MacBook Air: نماذج 7B-8B بدقة Q4 على ذاكرة موحدة 16GB، و13-14B على 24GB. لا تعمل أي eGPU على Apple Silicon — الذاكرة الموحدة هي الرافعة الوحيدة.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'مالكو أجهزة MacBook Air الذين يفترضون أنهم بحاجة إلى eGPU لتشغيل LLM محليًا',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>أفضل LLM محلي لجهاز MacBook Air هو نموذج 8B — Qwen3 8B أو Llama 3.3 8B — بتكميم Q4 على ذاكرة موحدة سعة 16 GB، أو نموذج 13-14B على تكوين 24 GB.</strong> لن تساعد بطاقة eGPU: لا يمتلك Apple Silicon أي مسار PCIe إلى بطاقات رسومات خارجية، لذا فإن سعة الذاكرة الموحدة هي الرافعة الحقيقية الوحيدة المتاحة لمشتري MacBook Air.',
    toc: [
      { label: 'أفضل اختيار: نماذج 8B على 16 GB، و13-14B على 24 GB', anchor: '#best-pick' },
      { label: '16 GB مقابل 24 GB في MacBook Air لتشغيل LLM محليًا', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل LLM محلي لجهاز MacBook Air؟',
        answer: 'نموذج Qwen3 8B أو Llama 3.3 8B بدقة Q4 هو أفضل LLM محلي لجهاز MacBook Air بذاكرة موحدة 16GB. مع 24GB، انتقل إلى نموذج 13-14B. لا يمكن لأي eGPU المساعدة على Apple Silicon.',
        bullets: [
          'MacBook Air بذاكرة 16 GB: شغّل نماذج 8B (Qwen3 8B، Llama 3.3 8B) بدقة Q4_K_M عبر Ollama أو MLX.',
          'MacBook Air بذاكرة 24 GB: انتقل إلى نماذج 13-14B بدقة Q4 مع هامش مريح.',
          'لا تعمل أي eGPU على Apple Silicon — يسرّع Ollama فقط عبر واجهة Metal الخاصة بآبل، وليس بطاقات GPU من جهات خارجية.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBook Air بذاكرة 16 GB: شغّل Qwen3 8B أو Llama 3.3 8B بدقة Q4 — النقطة المثلى لهذه الفئة',
          'MacBook Air بذاكرة 24 GB: انتقل إلى نموذج 13-14B بدقة Q4 مع هامش حقيقي',
          'لا تعمل أي eGPU على Apple Silicon — يسرّع Ollama فقط عبر Metal، والذاكرة الموحدة هي رافعة الترقية الوحيدة',
          'جهاز MacBook Air خالٍ من المروحة — توقع خنقًا حراريًا طفيفًا في جلسات استدلال طويلة ومستمرة',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: نماذج 8B على 16 GB، و13-14B على 24 GB',
        content: [
          '<strong>على جهاز MacBook Air بذاكرة 16 GB، أفضل LLM محلي هو نموذج 8B — Qwen3 8B أو Llama 3.3 8B — بتكميم Q4_K_M، الذي يحتاج حوالي 5-6 GB ويترك هامشًا مريحًا لنظام macOS والمتصفح.</strong> يعمل كلا النموذجين جيدًا عبر Ollama أو إطار عمل MLX الخاص بآبل، المحسّن تحديدًا لبنية الذاكرة الموحدة في Apple Silicon.',
          'إذا كان جهاز MacBook Air لديك مزوّدًا بذاكرة موحدة سعة 24 GB، انتقل إلى نموذج 13-14B بدقة Q4 — حوالي 9-10 GB — مع مساحة إضافية متبقية. الذاكرة الموحدة تعني عدم وجود سقف VRAM منفصل: تُشترك ذاكرة RAM بين CPU وGPU، لذا فإن رقم الذاكرة على ورقة المواصفات هو الرقم المهم لتحديد حجم LLM.',
          'لن تغيّر بطاقة eGPU أيًا من الحسابين. لا يعرض Apple Silicon أي مسار PCIe إلى بطاقة GPU خارجية، وحتى حيث تُوصَل بطاقة eGPU فعليًا (ممكن فقط على أجهزة Mac القديمة بمعالج Intel، وليس Apple Silicon)، لا يوجّه Ollama الاستدلال إلا إلى واجهة Metal الخاصة بآبل. الرافعة الحقيقية الوحيدة للترقية على MacBook Air هي شراء ذاكرة موحدة أكبر عند الشراء — لا يمكن إضافتها لاحقًا.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'تحقق من تكوين MacBook Air M4 24GB على أمازون',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '16 GB مقابل 24 GB في MacBook Air لتشغيل LLM محليًا',
        content: [
          'التكوين بذاكرة 16 GB هو الحد الأدنى العملي لاستدلال 8B مريح إلى جانب الاستخدام اليومي العادي. يضاعف تكوين 24 GB تقريبًا سقف حجم النموذج القابل للاستخدام إلى 13-14B، بعلاوة سعرية حقيقية مقابل ترقية الذاكرة.',
          'بما أن الذاكرة الموحدة لا يمكن ترقيتها بعد الشراء، اشترِ التكوين المطابق لحجم النموذج المستهدف الآن بدلًا من التخطيط "للترقية لاحقًا" — هذا الخيار غير موجود في MacBook Air.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يخنق MacBook Air حراريًا أثناء استدلال LLM الطويل؟',
            a: 'يمكن ذلك. جهاز MacBook Air خالٍ من المروحة، لذا فإن أحمال العمل الثقيلة المستمرة — بما فيها جلسات الاستدلال الطويلة — قد تحفّز خنقًا حراريًا طفيفًا بعد 10-15 دقيقة. تفاعلات الدردشة القصيرة غير متأثرة؛ المعالجة الدفعية المستمرة هي حيث يظهر هذا الأثر.',
          },
          {
            q: 'هل ذاكرة موحدة سعة 8 GB كافية لأي LLM محلي؟',
            a: 'فقط النماذج الصغيرة جدًا (3B وأقل بدقة Q4) تستوعب بارتياح إلى جانب macOS على جهاز Mac بذاكرة 8 GB. للاستخدام العام لـ LLM محلي، 16 GB هي الحد الأدنى الواقعي.',
          },
          {
            q: 'هل يجب أن أشتري MacBook Pro بدلًا من ذلك لتشغيل LLM محليًا؟',
            a: 'فقط إذا احتجت تبريدًا فعالًا لأحمال العمل المستمرة أو أردت أسقف ذاكرة موحدة أعلى (تصل إلى 128 GB في تكوينات M4 Max) لا تقدمها سلسلة MacBook Air.',
          },
          {
            q: 'هل يعمل Ollama أو MLX بشكل أفضل على MacBook Air؟',
            a: 'يستخدم كلاهما نفس تسريع Metal تحته؛ MLX هو إطار عمل آبل الخاص ويمكن أن يكون أسرع قليلًا لبعض بنى النماذج، بينما يوفر Ollama تجربة إعداد أبسط. كلاهما خيار افتراضي معقول.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[هل يمكن تشغيل LLM محليًا بواسطة eGPU على MacBook؟](/prompt-bites/best-egpu-ollama-macbook) — لماذا لا تعمل بطاقات eGPU على Apple Silicon',
          '[هل Mac Mini M4 جيد لتشغيل LLM محليًا؟](/prompt-bites/mac-mini-m4-local-llm) — بديل سطح مكتب بهامش ذاكرة أكبر',
          '[أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32 GB](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — الفئة الأعلى التالية',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-de.webp',
    title: 'Bestes lokales LLM für ein MacBook Air ohne eGPU im Jahr 2026',
    seoTitle: 'Bestes lokales LLM für MacBook Air (ohne eGPU) 2026',
    metaDescription: 'Das MacBook Air M5 zählt zu den besten tragbaren Laptops für lokale LLMs ohne eGPU. Wählen Sie 24 GB oder 32 GB Unified Memory, nicht die 16-GB-Basis.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 14B'],
    current_hardware_mentioned: ['MacBook Air M5'],
    educationalLevel: 'Beginner',
    audience: 'MacBook-Air-Käufer, die entscheiden müssen, wie viel Unified Memory sie für lokale LLMs konfigurieren sollen, von denen manche annehmen, sie bräuchten dafür eine eGPU',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Das MacBook Air M5 gehört zu den besten tragbaren Laptops für lokale LLMs, die Sie ohne eGPU kaufen können — für lokale KI konfigurieren Sie 24 GB oder 32 GB Unified Memory, nicht das 16-GB-Basismodell.</strong> Apple Silicon hat keinen PCIe-Pfad zu einer externen GPU, daher ist die fehlende eGPU-Option kein Workaround, den Sie brauchen — die Kapazität des Unified Memory ist der eigentliche Hebel, und sie lässt sich nach dem Kauf nicht mehr nachrüsten.',
    toc: [
      { label: 'Beste Konfiguration für lokale LLMs', anchor: '#best-pick' },
      { label: '24 GB vs. 32 GB MacBook Air', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste MacBook-Air-Konfiguration für lokale LLMs?',
        answer: 'Das MacBook Air M5 mit 32 GB Unified Memory ist die beste Konfiguration für den lokalen KI-Einsatz; 24 GB ist die beste Preis-Leistungs-Wahl, wenn das Budget wichtiger ist. Überspringen Sie das 16-GB-Basismodell, wenn lokale LLMs ein Hauptgrund für Ihren Kauf sind. Eine eGPU hilft auf Apple Silicon nicht — kaufen Sie nach Speicher, nicht nach einem Aufrüstpfad, den es gar nicht gibt.',
        bullets: [
          'Das MacBook Air M5 kommt standardmäßig mit 16 GB Unified Memory, konfigurierbar auf 24 GB oder 32 GB',
          'M5 bringt 153 GB/s Speicherbandbreite (28 % schneller als M4) und dedizierte Neural Accelerators, die Apple gezielt für On-Device-LLMs bewirbt',
          '24 GB ist die beste Preis-Leistungs-Wahl für Modelle der 7B-14B-Klasse; 32 GB ist die beste Konfiguration, wenn lokale KI ein Hauptanwendungsfall ist',
          'Auf Apple Silicon gibt es keinen eGPU-Aufrüstpfad — beim Kauf erworbenes Unified Memory ist der einzige Hebel',
          'Die Preise für das MacBook Air variieren je nach Konfiguration und Händler — aktuellen Preis prüfen statt sich auf eine feste Zahl zu verlassen',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBook Air M5: 24 GB Unified Memory ist die beste Preis-Leistungs-Konfiguration für lokale LLMs; 32 GB ist die beste Wahl, wenn lokale KI ein Hauptgrund für Ihren Kauf ist',
          'Überspringen Sie das 16-GB-Basismodell, wenn Ihnen lokale KI wichtig ist — Unified Memory lässt sich nach dem Kauf nicht mehr aufrüsten',
          'Auf Apple Silicon gibt es keinen eGPU-Aufrüstpfad — das ist kein fehlender Workaround, sondern Unified Memory ist der eigentliche Hebel',
          'Die 153-GB/s-Speicherbandbreite und die Neural Accelerators des M5 sind ein echter Generationssprung gegenüber dem M4 für On-Device-Inferenz',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste MacBook-Air-Konfiguration für lokale LLMs',
        content: [
          '<strong>Wenn lokale KI einer der Hauptgründe für den Kauf eines MacBook Air M5 ist, konfigurieren Sie es mit 32 GB Unified Memory.</strong> Apple Silicon teilt den Speicher zwischen CPU und GPU, daher entscheidet die Unified-Memory-Zahl auf dem Datenblatt — nicht eine separate VRAM-Angabe — darüber, welche Modelle passen. 32 GB bieten komfortablen Spielraum für Modelle der 14B-Klasse und Raum, um mit größeren quantisierten Modellen zu experimentieren.',
          'Wenn das Budget wichtiger ist als maximaler Spielraum, ist 24 GB der praktische Sweet Spot: ausreichend für Modelle der 7B-14B-Klasse mit Reserve für macOS und einen Browser, bei einem echten Preisschritt unter 32 GB. Überspringen Sie die 16-GB-Basiskonfiguration, wenn lokale LLMs ein echter Grund für den Kauf des Air sind — sie bewältigt kleine Modelle problemlos, aber Speicher lässt sich nach dem Kauf nicht nachrüsten, sodass eine zu knapp bemessene Entscheidung jetzt eine bleibende Einschränkung ist.',
          'Der M5 selbst ist hierfür ein echtes Upgrade, nicht nur eine Namensänderung: Apples M5-GPU fügt jedem Kern einen Neural Accelerator hinzu, und Apple bewirbt den Chip gezielt für das Ausführen großer Sprachmodelle direkt auf dem Gerät, unterstützt von 153 GB/s Speicherbandbreite — rund 28 % schneller als M4.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=MacBook+Air+M5+24GB',
            productName: 'MacBook Air M5 (24GB unified memory)',
            productCategory: 'laptop',
            label: 'Aktuellen Preis für MacBook Air M5 24GB prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=MacBook+Air+M5+32GB',
            productName: 'MacBook Air M5 (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Aktuellen Preis für MacBook Air M5 32GB prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '24 GB vs. 32 GB MacBook Air für lokale LLMs',
        content: [
          'Die 16-GB-Basiskonfiguration ist nur dann das praktische Minimum, wenn lokale KI ein untergeordneter, gelegentlicher Anwendungsfall ist — sie führt Modelle der 7B-Klasse aus, lässt aber wenig Raum für alles andere. Da sich Unified Memory nach dem Kauf nicht aufrüsten lässt, wählen Sie die Konfiguration jetzt passend zu Ihrem tatsächlichen Anwendungsfall, statt ein „späteres Upgrade" einzuplanen — diese Option gibt es beim MacBook Air nicht.',
          'Auch eine eGPU würde keine dieser Obergrenzen erweitern. Apple Silicon hat unabhängig von der Konfiguration keinen PCIe-Pfad zu einer externen GPU — planen Sie einen zukünftigen eGPU-Kauf also gar nicht erst in diese Entscheidung ein.',
        ],
        columns: ['Modellgröße', 'Bei 24GB', 'Bei 32GB'],
        rows: [
          { '0': '7B-8B', '1': '🟢 Hervorragend', '2': '🟢 Hervorragend' },
          { '0': '13B-14B', '1': '🟢 Komfortabel', '2': '🟢 Viel Spielraum' },
          { '0': '20B-30B', '1': '🟡 Knapp, je nach Quant', '2': '🟢 Komfortabel bei Q4' },
          { '0': '70B', '1': '🔴 Unrealistisch', '2': '🔴 Dafür nicht geeignet' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich an ein MacBook Air, MacBook Pro oder einen iMac eine eGPU für lokale LLMs anschließen?',
            a: 'Nein, nicht zur Beschleunigung auf einem aktuellen Apple-Silicon-Mac — weder MacBook Air, MacBook Pro noch ein Apple-Silicon-iMac. Apple Silicon hat keinen PCIe-Pfad zu einer externen GPU, und selbst dort, wo eine eGPU physisch angeschlossen ist (nur bei älteren Intel-Macs möglich, nicht bei Apple Silicon), leiten macOS und Tools wie Ollama die Inferenz ausschließlich an Apples eigenes Metal-Backend weiter. Wenn Ihr Workflow auf NVIDIA CUDA und eine aufrüstbare GPU angewiesen ist, ist ein Windows- oder Linux-Rechner die praktikablere Wahl — nicht ein Mac mit eGPU.',
          },
          {
            q: 'Reicht das 16-GB-Basismodell des MacBook Air für lokale LLMs?',
            a: 'Es kann Modelle der 7B-Klasse bei Q4 problemlos ausführen, ist also nicht nutzlos. Aber lokale KI ist nicht der Anwendungsfall, für den diese Konfiguration gebaut wurde — Speicher lässt sich nach dem Kauf nicht nachrüsten. Wenn Ihnen größere lokale Modelle wichtig sind, konfigurieren Sie beim Kauf mindestens 24 GB, statt ein späteres Upgrade einzuplanen.',
          },
          {
            q: 'Drosselt das MacBook Air bei langer LLM-Inferenz?',
            a: 'Das kann passieren. Das MacBook Air ist lüfterlos, daher können anhaltend hohe Lasten — einschließlich langer Inferenz-Sessions — nach 10-15 Minuten leichtes Thermal-Throttling auslösen. Kurze Chat-Interaktionen sind davon nicht betroffen; bei kontinuierlicher Batch-Verarbeitung zeigt sich dieser Effekt.',
          },
          {
            q: 'Sollte ich stattdessen ein MacBook Pro für lokale LLMs kaufen?',
            a: 'Nur wenn Sie aktive Kühlung für anhaltende Workloads brauchen oder Unified-Memory-Konfigurationen über 32 GB wollen — die MacBook-Pro-Reihe reicht bis 64 GB mit M5 Pro oder 128 GB mit M5 Max, Obergrenzen, die das MacBook Air nicht bietet.',
          },
          {
            q: 'Läuft Ollama oder MLX besser auf einem MacBook Air?',
            a: 'Beide nutzen darunter dieselbe Metal-Beschleunigung; MLX ist Apples eigenes Framework und kann bei manchen Modellarchitekturen marginal schneller sein, während Ollama eine einfachere Einrichtung bietet. Beide sind eine vertretbare Standardwahl.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Kann man lokale LLMs mit einer eGPU auf einem MacBook betreiben?](/de/prompt-bites/best-egpu-ollama-macbook) — warum eGPUs auf Apple Silicon nicht funktionieren',
          '[Ist das Mac Mini M4 gut für lokale LLMs?](/de/prompt-bites/mac-mini-m4-local-llm) — eine Desktop-Alternative mit mehr Speicherreserve',
          '[Bestes lokales LLM für einen Mac mit 32 GB Unified Memory](/de/prompt-bites/best-local-llm-32gb-unified-memory-mac) — dieselbe Speicherstufe, Desktop-Formfaktor',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-es.webp',
    title: 'El Mejor LLM Local para un MacBook Air sin eGPU en 2026',
    seoTitle: 'Mejor LLM Local para MacBook Air (Sin eGPU) 2026',
    metaDescription: 'El MacBook Air M5 es una de las mejores laptops portátiles para LLM local sin eGPU. Para IA local, elige 24GB o 32GB de memoria unificada — no el modelo base de 16GB.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 14B'],
    current_hardware_mentioned: ['MacBook Air M5'],
    educationalLevel: 'Beginner',
    audience: 'Compradores de MacBook Air que deciden cuánta memoria unificada configurar para LLMs locales, algunos de los cuales asumen que necesitan una eGPU para ejecutarlos',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>El MacBook Air M5 es una de las mejores laptops portátiles para LLM local que puedes comprar sin necesitar una eGPU — para IA local, configura 24 GB o 32 GB de memoria unificada, no el modelo base de 16 GB.</strong> Apple Silicon no tiene una ruta PCIe hacia una GPU externa, así que la ausencia de eGPU no es una solución alternativa que necesites — la capacidad de memoria unificada es la palanca real, y no se puede añadir después de la compra.',
    toc: [
      { label: 'Mejor Configuración para LLMs Locales', anchor: '#best-pick' },
      { label: '24 GB vs 32 GB en un MacBook Air', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor configuración de MacBook Air para LLMs locales?',
        answer: 'El MacBook Air M5 con 32 GB de memoria unificada es la mejor configuración para uso de IA local; 24 GB es la mejor opción en relación calidad-precio si el presupuesto importa más. Evita el modelo base de 16 GB si los LLMs locales son una razón principal de tu compra. Una eGPU no puede ayudar en Apple Silicon — compra según la memoria, no según una ruta de mejora que no existe.',
        bullets: [
          'El MacBook Air M5 viene con 16 GB de memoria unificada de serie, configurable a 24 GB o 32 GB',
          'El M5 aporta 153 GB/s de ancho de banda de memoria (28% más rápido que el M4) y Neural Accelerators dedicados que Apple comercializa específicamente para LLMs on-device',
          '24 GB es la mejor opción en relación calidad-precio para modelos de clase 7B-14B; 32 GB es la mejor configuración si la IA local es un caso de uso principal',
          'No existe ninguna ruta de mejora con eGPU en Apple Silicon — la memoria unificada comprada en el momento de la compra es la única palanca',
          'El precio del MacBook Air varía según la configuración y el vendedor — consulta el precio actual en vez de confiar en una cifra fija',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBook Air M5: 24 GB de memoria unificada es la mejor configuración en relación calidad-precio para LLMs locales; 32 GB es la mejor configuración si la IA local es una razón principal de tu compra',
          'Evita el modelo base de 16 GB si la IA local te importa — la memoria unificada no se puede mejorar después de la compra',
          'No existe ninguna ruta de mejora con eGPU en Apple Silicon — esto no es una solución alternativa que te falte, la memoria unificada es la palanca real',
          'El ancho de banda de memoria de 153 GB/s del M5 y sus Neural Accelerators son un salto generacional real respecto al M4 para inferencia on-device',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Configuración de MacBook Air para LLMs Locales',
        content: [
          '<strong>Si la IA local es una de las razones principales por las que compras un MacBook Air M5, configúralo con 32 GB de memoria unificada.</strong> Apple Silicon comparte la memoria entre CPU y GPU, así que la cifra de memoria unificada en la ficha técnica — no un número de VRAM separado — es lo que determina qué modelos caben. 32 GB da margen cómodo para modelos de clase 14B y espacio para experimentar con modelos cuantizados más grandes.',
          'Si el presupuesto importa más que el margen máximo, 24 GB es el punto óptimo práctico: suficiente para modelos de clase 7B-14B con margen para macOS y un navegador, a un precio real más bajo que 32 GB. Evita la configuración base de 16 GB si los LLMs locales son una razón genuina de tu compra del Air — maneja bien modelos pequeños, pero la memoria no se puede añadir después de la compra, así que comprar poca memoria ahora es una decisión de la que no podrás salir después.',
          'El M5 en sí es una mejora real para esto, no solo un cambio de nombre: la GPU M5 de Apple añade un Neural Accelerator a cada núcleo, y Apple comercializa el chip específicamente en torno a ejecutar modelos de lenguaje grandes on-device, respaldado por 153 GB/s de ancho de banda de memoria — alrededor de un 28% más rápido que el M4.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=MacBook+Air+M5+24GB',
            productName: 'MacBook Air M5 (24GB unified memory)',
            productCategory: 'laptop',
            label: 'Consulta el precio actual del MacBook Air M5 24GB',
          },
          {
            url: 'https://www.amazon.es/s?k=MacBook+Air+M5+32GB',
            productName: 'MacBook Air M5 (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Consulta el precio actual del MacBook Air M5 32GB',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '24 GB vs 32 GB en un MacBook Air para LLMs Locales',
        content: [
          'La configuración base de 16 GB es el mínimo práctico solo si la IA local es un caso de uso menor y ocasional — ejecuta modelos de clase 7B pero deja poco margen para cualquier otra cosa. Como la memoria unificada no se puede mejorar después de la compra, ajusta tu configuración a tu caso de uso real ahora en vez de planear "mejorarla más tarde" — esa opción no existe en un MacBook Air.',
          'Una eGPU tampoco ampliará ninguno de estos límites. Apple Silicon no tiene ninguna ruta PCIe hacia una GPU externa sin importar la configuración, así que no incluyas una futura compra de eGPU en esta decisión en absoluto.',
        ],
        columns: ['Tamaño de modelo', 'Con 24GB', 'Con 32GB'],
        rows: [
          { '0': '7B-8B', '1': '🟢 Excelente', '2': '🟢 Excelente' },
          { '0': '13B-14B', '1': '🟢 Cómodo', '2': '🟢 Amplio margen' },
          { '0': '20B-30B', '1': '🟡 Ajustado, según quant', '2': '🟢 Cómodo en Q4' },
          { '0': '70B', '1': '🔴 No es realista', '2': '🔴 No es para esto' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Puedo añadir una eGPU a un MacBook Air, MacBook Pro o iMac para LLMs locales?',
            a: 'No, no para aceleración en ningún Mac Apple Silicon actual — MacBook Air, MacBook Pro o un iMac con Apple Silicon. Apple Silicon no tiene ninguna ruta PCIe hacia una GPU externa, e incluso donde una eGPU está físicamente conectada (solo posible en Macs Intel más antiguos, no en Apple Silicon), macOS y herramientas como Ollama solo despachan la inferencia al propio backend Metal de Apple. Si tu flujo de trabajo depende de NVIDIA CUDA y una GPU mejorable, un equipo con Windows o Linux es la opción más práctica, no un Mac equipado con eGPU.',
          },
          {
            q: '¿Es suficiente el MacBook Air base de 16 GB para LLMs locales?',
            a: 'Puede ejecutar modelos de clase 7B en Q4 cómodamente, así que no es inútil. Pero la IA local no es el caso de uso para el que se construyó esa configuración — la memoria no se puede añadir después de la compra, así que si ejecutar modelos locales más grandes te importa, configura al menos 24 GB al comprar en vez de planear mejorarlo más tarde.',
          },
          {
            q: '¿El MacBook Air se limita térmicamente durante una inferencia de LLM larga?',
            a: 'Puede hacerlo. El MacBook Air no tiene ventilador, por lo que las cargas de trabajo sostenidas y pesadas — incluidas las sesiones de inferencia largas — pueden provocar una limitación térmica leve después de 10-15 minutos. Las interacciones de chat cortas no se ven afectadas; el procesamiento por lotes continuo es donde aparece.',
          },
          {
            q: '¿Debería comprar un MacBook Pro en su lugar para LLMs locales?',
            a: 'Solo si necesitas refrigeración activa para cargas de trabajo sostenidas o quieres configuraciones de memoria unificada por encima de 32 GB — la línea MacBook Pro llega hasta 64 GB con el M5 Pro o 128 GB con el M5 Max, límites que el MacBook Air no ofrece.',
          },
          {
            q: '¿Rinde mejor Ollama o MLX en un MacBook Air?',
            a: 'Ambos usan la misma aceleración Metal por debajo; MLX es el propio framework de Apple y puede ser marginalmente más rápido para algunas arquitecturas de modelo, mientras que Ollama ofrece una experiencia de configuración más simple. Cualquiera es una opción razonable por defecto.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Puedes Ejecutar LLMs Locales con una eGPU en un MacBook?](/es/prompt-bites/best-egpu-ollama-macbook) — por qué las eGPU no funcionan en Apple Silicon',
          '[¿Es Bueno el Mac Mini M4 para LLMs Locales?](/es/prompt-bites/mac-mini-m4-local-llm) — una alternativa de escritorio con más margen de memoria',
          '[Mejor LLM Local para un Mac con 32 GB de Memoria Unificada](/es/prompt-bites/best-local-llm-32gb-unified-memory-mac) — el mismo nivel de memoria, formato de escritorio',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-fr.webp',
    title: 'Meilleur LLM local pour un MacBook Air sans eGPU en 2026',
    seoTitle: 'Meilleur LLM local pour MacBook Air (sans eGPU) 2026',
    metaDescription: 'Le MacBook Air M5 est l\'un des meilleurs portables pour LLM local sans eGPU. Pour l\'IA locale, choisissez 24 Go ou 32 Go de mémoire unifiée — pas le modèle 16 Go de base.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 14B'],
    current_hardware_mentioned: ['MacBook Air M5'],
    educationalLevel: 'Beginner',
    audience: 'Acheteurs de MacBook Air décidant de la quantité de mémoire unifiée à configurer pour des LLM locaux, dont certains pensent avoir besoin d\'un eGPU pour les exécuter',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Le MacBook Air M5 est l\'un des meilleurs portables pour LLM local que vous puissiez acheter sans eGPU — pour l\'IA locale, configurez 24 Go ou 32 Go de mémoire unifiée, pas le modèle 16 Go de base.</strong> Apple Silicon n\'offre aucun chemin PCIe vers un GPU externe : l\'absence d\'option eGPU n\'est donc pas une contrainte à contourner — la capacité de mémoire unifiée est le véritable levier, et elle ne peut pas être ajoutée après l\'achat.',
    toc: [
      { label: 'Meilleure Configuration pour les LLM Locaux', anchor: '#best-pick' },
      { label: 'MacBook Air 24 Go vs 32 Go', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures connexes', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure configuration de MacBook Air pour les LLM locaux ?',
        answer: 'Le MacBook Air M5 avec 32 Go de mémoire unifiée est la meilleure configuration pour l\'IA locale ; 24 Go reste le meilleur rapport qualité-prix si le budget compte davantage. Évitez le modèle 16 Go de base si les LLM locaux sont l\'une des principales raisons de votre achat. Un eGPU n\'aide en rien sur Apple Silicon — achetez en fonction de la mémoire, pas d\'une voie de mise à niveau qui n\'existe pas.',
        bullets: [
          'Le MacBook Air M5 est livré avec 16 Go de mémoire unifiée en standard, configurable jusqu\'à 24 Go ou 32 Go',
          'Le M5 apporte 153 Go/s de bande passante mémoire (28 % plus rapide que le M4) et des Neural Accelerators dédiés qu\'Apple présente spécifiquement pour les LLM sur l\'appareil',
          '24 Go offre le meilleur rapport qualité-prix pour les modèles de classe 7B-14B ; 32 Go est la meilleure configuration si l\'IA locale est un usage principal',
          'Aucune voie de mise à niveau eGPU n\'existe sur Apple Silicon — la mémoire unifiée choisie à l\'achat est le seul levier',
          'Le prix du MacBook Air varie selon la configuration et le revendeur — vérifiez le prix actuel plutôt que de vous fier à un chiffre fixe',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBook Air M5 : 24 Go de mémoire unifiée est la configuration au meilleur rapport qualité-prix pour les LLM locaux ; 32 Go est la meilleure configuration si l\'IA locale est l\'une des principales raisons de votre achat',
          'Évitez le modèle 16 Go de base si l\'IA locale compte pour vous — la mémoire unifiée ne peut pas être mise à niveau après l\'achat',
          'Aucune voie de mise à niveau eGPU n\'existe sur Apple Silicon — ce n\'est pas une option qui vous manque, la mémoire unifiée est le véritable levier',
          'La bande passante mémoire de 153 Go/s et les Neural Accelerators du M5 représentent une vraie avancée générationnelle par rapport au M4 pour l\'inférence sur l\'appareil',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleure Configuration de MacBook Air pour les LLM Locaux',
        content: [
          '<strong>Si l\'IA locale est l\'une des principales raisons pour lesquelles vous achetez un MacBook Air M5, configurez-le avec 32 Go de mémoire unifiée.</strong> Apple Silicon partage la mémoire entre le CPU et le GPU : c\'est donc le chiffre de mémoire unifiée sur la fiche technique — et non un chiffre de VRAM distinct — qui détermine les modèles qui tiennent en mémoire. 32 Go offre une marge confortable pour les modèles de classe 14B et de la place pour expérimenter avec des modèles quantifiés plus grands.',
          'Si le budget compte plus que la marge maximale, 24 Go est le point d\'équilibre pratique : suffisant pour les modèles de classe 7B-14B avec de la place pour macOS et un navigateur, à un prix réellement inférieur à celui du 32 Go. Évitez la configuration 16 Go de base si les LLM locaux sont une vraie raison d\'acheter l\'Air — elle fait bien tourner les petits modèles, mais la mémoire ne peut pas être ajoutée après l\'achat, donc acheter trop peu maintenant est une décision définitive.',
          'Le M5 lui-même constitue une réelle amélioration sur ce plan, pas seulement un changement de nom : le GPU M5 d\'Apple ajoute un Neural Accelerator à chaque cœur, et Apple présente la puce spécifiquement pour l\'exécution de grands modèles de langage sur l\'appareil, avec 153 Go/s de bande passante mémoire à l\'appui — environ 28 % plus rapide que le M4.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=MacBook+Air+M5+24GB',
            productName: 'MacBook Air M5 (24GB unified memory)',
            productCategory: 'laptop',
            label: 'Vérifier le prix actuel du MacBook Air M5 24 Go',
          },
          {
            url: 'https://www.amazon.fr/s?k=MacBook+Air+M5+32GB',
            productName: 'MacBook Air M5 (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Vérifier le prix actuel du MacBook Air M5 32 Go',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'MacBook Air 24 Go vs 32 Go pour les LLM Locaux',
        content: [
          'La configuration 16 Go de base reste un minimum viable uniquement si l\'IA locale est un usage secondaire et occasionnel — elle fait tourner des modèles de classe 7B, mais laisse peu de place pour le reste. La mémoire unifiée ne pouvant pas être mise à niveau après l\'achat, choisissez dès maintenant la configuration adaptée à votre usage réel plutôt que de prévoir une « mise à niveau ultérieure » — cette option n\'existe pas sur un MacBook Air.',
          'Un eGPU ne repousse aucun de ces plafonds non plus. Apple Silicon n\'offre aucun chemin PCIe vers un GPU externe, quelle que soit la configuration — n\'intégrez donc pas un futur achat d\'eGPU dans cette décision.',
        ],
        columns: ['Taille du modèle', 'Sur 24 Go', 'Sur 32 Go'],
        rows: [
          { '0': '7B-8B', '1': '🟢 Excellent', '2': '🟢 Excellent' },
          { '0': '13B-14B', '1': '🟢 Confortable', '2': '🟢 Large marge' },
          { '0': '20B-30B', '1': '🟡 Juste, selon quant.', '2': '🟢 Confortable en Q4' },
          { '0': '70B', '1': '🔴 Pas réaliste', '2': '🔴 Pas fait pour ça' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions Fréquentes',
        faqs: [
          {
            q: 'Peut-on ajouter un eGPU à un MacBook Air, un MacBook Pro ou un iMac pour des LLM locaux ?',
            a: 'Non, pas pour l\'accélération sur un Mac Apple Silicon actuel — MacBook Air, MacBook Pro ou iMac Apple Silicon. Apple Silicon n\'offre aucun chemin PCIe vers un GPU externe, et même lorsqu\'un eGPU est physiquement connecté (possible uniquement sur d\'anciens Mac Intel, pas sur Apple Silicon), macOS et des outils comme Ollama ne dispatchent l\'inférence que vers le backend Metal propre à Apple. Si votre usage dépend de CUDA de NVIDIA et d\'un GPU évolutif, une machine Windows ou Linux est le choix le plus pratique, pas un Mac équipé d\'un eGPU.',
          },
          {
            q: 'Le MacBook Air 16 Go de base suffit-il pour des LLM locaux ?',
            a: 'Il peut faire tourner confortablement des modèles de classe 7B en Q4, donc il n\'est pas inutile. Mais l\'IA locale n\'est pas l\'usage pour lequel cette configuration a été conçue — la mémoire ne peut pas être ajoutée après l\'achat, donc si des modèles locaux plus grands vous intéressent, configurez au moins 24 Go à l\'achat plutôt que de prévoir une mise à niveau ultérieure.',
          },
          {
            q: 'Le MacBook Air chauffe-t-il et ralentit-il lors d\'une inférence LLM prolongée ?',
            a: 'Oui, cela peut arriver. Le MacBook Air étant sans ventilateur, une charge soutenue — y compris de longues sessions d\'inférence — peut déclencher une légère limitation thermique après 10 à 15 minutes. Les interactions de chat courtes ne sont pas concernées ; c\'est le traitement par lots continu qui révèle ce phénomène.',
          },
          {
            q: 'Faut-il plutôt acheter un MacBook Pro pour les LLM locaux ?',
            a: 'Seulement si vous avez besoin d\'un refroidissement actif pour des charges soutenues, ou si vous souhaitez des configurations de mémoire unifiée supérieures à 32 Go — la gamme MacBook Pro monte jusqu\'à 64 Go avec le M5 Pro ou 128 Go avec le M5 Max, des plafonds que le MacBook Air n\'offre pas.',
          },
          {
            q: 'Ollama ou MLX fonctionne-t-il mieux sur un MacBook Air ?',
            a: 'Les deux s\'appuient sur la même accélération Metal en arrière-plan ; MLX, le framework propre d\'Apple, peut être marginalement plus rapide pour certaines architectures de modèles, tandis qu\'Ollama offre une mise en place plus simple. Les deux constituent un choix par défaut raisonnable.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures connexes',
        items: [
          '[Peut-on exécuter des LLM locaux avec un eGPU sur un MacBook ?](/fr/prompt-bites/best-egpu-ollama-macbook) — pourquoi les eGPU ne fonctionnent pas sur Apple Silicon',
          '[Le Mac Mini M4 est-il adapté aux LLM locaux ?](/fr/prompt-bites/mac-mini-m4-local-llm) — une alternative de bureau avec plus de marge mémoire',
          '[Meilleur LLM local pour un Mac à 32 Go de mémoire unifiée](/fr/prompt-bites/best-local-llm-32gb-unified-memory-mac) — le même palier de mémoire, en format bureau',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-ja.webp',
    title: '2026年版 eGPUなしのMacBook Airに最適なローカルLLM構成',
    seoTitle: '2026年版 MacBook Air(eGPUなし)に最適なローカルLLM',
    metaDescription: 'M5 MacBook Airは、eGPUなしでも使えるポータブルローカルLLM向けノートPCとして優れた選択肢です。ローカルAI用途では16GBベースモデルではなく、24GBか32GBの統合メモリを選んでください。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 14B'],
    current_hardware_mentioned: ['MacBook Air M5'],
    educationalLevel: 'Beginner',
    audience: 'ローカルAI用にどれだけ統合メモリを搭載すべきか検討しているMacBook Air購入者(eGPUが必要だと思い込んでいる人も含む)',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>M5 MacBook Airは、eGPUなしで買える最良のポータブルローカルLLM向けノートPCの一つです。ローカルAI用途では16GBベースモデルではなく、24GBか32GBの統合メモリを選んでください。</strong>Apple SiliconにはPCIe経由の外部GPUへの経路がないため、eGPUがないことは回避すべき弱点ではありません。実質的なレバーは統合メモリの容量であり、購入後に追加することはできません。',
    toc: [
      { label: 'ローカルLLMに最適な構成', anchor: '#best-pick' },
      { label: '24GB vs 32GB MacBook Air', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'MacBook AirでローカルLLMに最適な構成は?',
        answer: '32GB統合メモリのM5 MacBook Airは、ローカルAI用途に最適な構成です。予算を優先するなら24GBがベストバリューです。ローカルLLMが購入の主な理由なら、16GBベースモデルは避けてください。Apple SiliconではeGPUは役に立ちません — 存在しないアップグレードパスを気にするのではなく、メモリで選んでください。',
        bullets: [
          'M5 MacBook Airは16GB統合メモリが標準構成で、24GBまたは32GBにカスタマイズ可能です',
          'M5は153GB/sのメモリ帯域幅(M4比28%高速)と、Appleがオンデバイスローカルモデル向けに訴求する専用Neural Acceleratorを搭載します',
          '24GBは7B-14Bクラスのモデルに最適なベストバリュー構成、32GBはローカルAIが主な用途なら最適な構成です',
          'Apple SiliconにはeGPUのアップグレードパスが存在しません — 購入時に選んだ統合メモリだけが唯一のレバーです',
          'MacBook Airの価格は構成と販売店によって異なります — 固定価格を鵜呑みにせず、現在の価格を確認してください',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'M5 MacBook Air: ローカルLLMには24GB統合メモリがベストバリュー構成。ローカルAIが購入の主な理由なら32GBが最適です',
          'ローカルAIが重要なら16GBベースモデルは避けてください — 統合メモリは購入後にアップグレードできません',
          'Apple SiliconにはeGPUのアップグレードパスが存在しません — これは見逃している回避策ではなく、統合メモリこそが実質的なレバーです',
          'M5の153GB/sメモリ帯域幅とNeural Acceleratorは、オンデバイス推論においてM4からの実質的な世代進化です',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ローカルLLMに最適なMacBook Air構成',
        content: [
          '<strong>ローカルAIがM5 MacBook Air購入の主な理由の一つなら、32GBの統合メモリで構成してください。</strong>Apple SiliconはCPUとGPUでメモリを共有するため、別個のVRAM数値ではなく、スペックシート上の統合メモリの数値がどのモデルが動くかを左右します。32GBは14Bクラスのモデルに余裕を持たせ、より大きな量子化モデルを試す余地も残します。',
          '予算のほうが最大の余裕より重要なら、24GBが現実的なスイートスポットです。7B-14Bクラスのモデルには十分で、macOSとブラウザの分の余裕も残しつつ、32GBより実質的に価格を抑えられます。ローカルLLMが本当にAirを買う理由なら、16GBベース構成は避けてください — 小さいモデルなら問題なく動きますが、購入後にメモリを追加することはできないため、今メモリを少なく買うと後で取り返しがつきません。',
          'M5自体も名称変更だけではない、実質的なアップグレードです。AppleのM5 GPUは各コアにNeural Acceleratorを追加し、Appleはこのチップを大規模言語モデルのオンデバイス実行向けに明確に訴求しています。153GB/sのメモリ帯域幅に支えられており、これはM4よりおよそ28%高速です。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook+Air+M5+24GB',
            productName: 'MacBook Air M5 (24GB unified memory)',
            productCategory: 'laptop',
            label: 'AmazonでMacBook Air M5 24GBの現在の価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook+Air+M5+32GB',
            productName: 'MacBook Air M5 (32GB unified memory)',
            productCategory: 'laptop',
            label: 'AmazonでMacBook Air M5 32GBの現在の価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '24GB vs 32GB MacBook Air(ローカルLLM向け)',
        content: [
          '16GB構成は、ローカルAIが軽い用途である場合にのみ現実的な最低ラインです — 7Bクラスのモデルは動きますが、それ以外にはほとんど余裕がありません。統合メモリは購入後にアップグレードできないため、「後でアップグレードする」計画を立てるのではなく、今の実際の用途に合った構成を選んでください — MacBook Airにはその選択肢自体が存在しません。',
          'eGPUもこれらの上限を広げることはありません。構成に関わらず、Apple SiliconにはPCIe経由の外部GPUへの経路がないため、将来のeGPU購入をこの判断材料に含めるべきではありません。',
        ],
        columns: ['モデルサイズ', '24GBの場合', '32GBの場合'],
        rows: [
          { '0': '7B-8B', '1': '🟢 優秀', '2': '🟢 優秀' },
          { '0': '13B-14B', '1': '🟢 快適', '2': '🟢 余裕あり' },
          { '0': '20B-30B', '1': '🟡 やや厳しい(量子化次第)', '2': '🟢 Q4で快適' },
          { '0': '70B', '1': '🔴 現実的でない', '2': '🔴 用途外' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MacBook Air、MacBook Pro、iMacにeGPUを追加してローカルLLMに使えますか?',
            a: 'いいえ、現行のApple Siliconモデル(MacBook Air、MacBook Pro、Apple Silicon搭載iMac)ではアクセラレーション用途には使えません。Apple SiliconにはPCIe経由の外部GPUへの経路がなく、物理的にeGPUを接続できる場合でも(Apple SiliconではなくIntel Mac世代でのみ可能)、macOSやOllamaなどのツールはApple独自のMetalバックエンドにのみ推論をディスパッチします。ワークフローがNVIDIA CUDAとアップグレード可能なGPUに依存している場合は、eGPU搭載Macではなく、WindowsまたはLinuxマシンのほうが現実的な選択肢です。',
          },
          {
            q: '16GBベースのMacBook AirはローカルLLMに十分ですか?',
            a: 'Q4なら7Bクラスのモデルを快適に動かせるので、まったく使えないわけではありません。ただし、ローカルAIはこの構成が想定している用途ではありません。メモリは購入後に追加できないため、より大きなローカルモデルを動かしたいなら、後でアップグレードする計画ではなく、購入時に少なくとも24GBを選んでください。',
          },
          {
            q: 'MacBook Airは長時間のLLM推論中にスロットリングしますか?',
            a: 'する可能性があります。MacBook Airはファンレスなので、長時間の推論セッションを含む持続的な高負荷ワークロードは、10-15分後に軽度のサーマルスロットリングを引き起こすことがあります。短いチャットのやり取りは影響を受けませんが、連続的なバッチ処理ではこの現象が現れます。',
          },
          {
            q: 'ローカルLLM用にMacBook Proを代わりに買うべきですか?',
            a: '持続的なワークロード向けのアクティブ冷却が必要な場合、または32GBを超える統合メモリ構成が欲しい場合のみです。MacBook Proラインナップは、M5 Proで最大64GB、M5 Maxで最大128GBまで対応しており、これはMacBook Airにはない上限です。',
          },
          {
            q: 'MacBook AirではOllamaとMLXどちらが良く動きますか?',
            a: 'どちらも同じMetalアクセラレーションを基盤としています。MLXはApple独自のフレームワークで、一部のモデルアーキテクチャではわずかに高速な場合があり、Ollamaはよりシンプルなセットアップ体験を提供します。どちらも妥当なデフォルト選択です。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[MacBookでeGPUを使ってローカルLLMを動かせますか?](/ja/prompt-bites/best-egpu-ollama-macbook) — Apple SiliconでeGPUが機能しない理由',
          '[Mac Mini M4はローカルLLMに向いていますか?](/ja/prompt-bites/mac-mini-m4-local-llm) — メモリ余裕のあるデスクトップ代替案',
          '[32GB統合メモリMacに最適なローカルLLM](/ja/prompt-bites/best-local-llm-32gb-unified-memory-mac) — 同じメモリ層、デスクトップ形状',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-ko.webp',
    title: 'eGPU 없는 MacBook Air를 위한 최적의 로컬 LLM은? (2026년)',
    seoTitle: 'eGPU 없는 MacBook Air 최적 로컬 LLM (2026)',
    metaDescription: 'M5 MacBook Air는 eGPU 없이도 최고 수준의 휴대용 로컬 LLM 노트북입니다. 로컬 AI용으로는 16GB 기본 모델 대신 24GB 또는 32GB 통합 메모리를 선택하십시오.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 14B'],
    current_hardware_mentioned: ['MacBook Air M5'],
    educationalLevel: 'Beginner',
    audience: '로컬 LLM을 위해 얼마나 많은 통합 메모리를 구성해야 할지 결정하는 MacBook Air 구매자, 그중 일부는 eGPU가 필요하다고 생각함',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>M5 MacBook Air는 eGPU 없이 구매할 수 있는 최고 수준의 휴대용 로컬 LLM 노트북 중 하나입니다 — 로컬 AI용으로는 16GB 기본 모델이 아니라 24GB 또는 32GB 통합 메모리로 구성하십시오.</strong> Apple Silicon에는 외장 GPU로 가는 PCIe 경로가 없으므로, 빠진 eGPU 옵션은 필요한 대안이 아닙니다 — 실질적인 수단은 통합 메모리 용량이며, 이는 구매 후 추가할 수 없습니다.',
    toc: [
      { label: '로컬 LLM을 위한 최적의 구성', anchor: '#best-pick' },
      { label: 'MacBook Air 24GB 대 32GB', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM을 위한 최적의 MacBook Air 구성은 무엇입니까?',
        answer: '로컬 AI 용도로는 32GB 통합 메모리를 탑재한 M5 MacBook Air가 최적의 구성입니다. 예산이 더 중요하다면 24GB가 가성비 최고의 선택입니다. 로컬 LLM이 구매의 주된 이유 중 하나라면 16GB 기본 모델은 피하십시오. Apple Silicon에서는 eGPU가 도움이 되지 않으므로, 존재하지 않는 업그레이드 경로가 아니라 메모리를 기준으로 구매하십시오.',
        bullets: [
          'M5 MacBook Air는 기본 16GB 통합 메모리로 출시되며, 24GB 또는 32GB로 구성 가능합니다',
          'M5는 153GB/s의 메모리 대역폭(M4보다 28% 향상)과 Apple이 온디바이스 LLM을 위해 특별히 마케팅하는 전용 Neural Accelerator를 제공합니다',
          '24GB는 7B-14B급 모델에 가성비가 가장 좋은 선택이며, 로컬 AI가 주요 사용 사례라면 32GB가 최적의 구성입니다',
          'Apple Silicon에는 eGPU 업그레이드 경로가 존재하지 않습니다 — 구매 시점에 산 통합 메모리가 유일한 수단입니다',
          'MacBook Air 가격은 구성과 판매처에 따라 다릅니다 — 고정된 수치를 신뢰하지 말고 현재 가격을 확인하십시오',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'M5 MacBook Air: 24GB 통합 메모리가 로컬 LLM에 가성비가 가장 좋은 구성이며, 로컬 AI가 구매의 주된 이유라면 32GB가 최적의 구성입니다',
          '로컬 AI가 중요하다면 16GB 기본 모델은 피하십시오 — 통합 메모리는 구매 후 업그레이드할 수 없습니다',
          'Apple Silicon에는 eGPU 업그레이드 경로가 존재하지 않습니다 — 이는 놓치고 있는 대안이 아니라, 통합 메모리가 실질적인 수단이라는 뜻입니다',
          'M5의 153GB/s 메모리 대역폭과 Neural Accelerator는 온디바이스 추론 측면에서 M4 대비 실질적인 세대 진보입니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '로컬 LLM을 위한 최적의 MacBook Air 구성',
        content: [
          '<strong>로컬 AI가 M5 MacBook Air를 구매하는 주된 이유 중 하나라면 32GB 통합 메모리로 구성하십시오.</strong> Apple Silicon은 CPU와 GPU 간에 메모리를 공유하므로, 별도의 VRAM 수치가 아니라 사양표에 적힌 통합 메모리 수치가 어떤 모델이 들어맞는지를 결정합니다. 32GB는 14B급 모델에 여유로운 공간을 제공하며, 더 큰 양자화 모델을 실험할 여지도 있습니다.',
          '최대 여유보다 예산이 더 중요하다면, 24GB가 실용적인 최적점입니다. macOS와 브라우저를 위한 공간을 남기면서 7B-14B급 모델에 충분하며, 32GB보다 실질적으로 저렴합니다. 로컬 LLM이 Air를 구매하는 진짜 이유라면 16GB 기본 구성은 피하십시오 — 작은 모델은 문제없이 돌아가지만, 메모리는 구매 후 추가할 수 없으므로 지금 너무 적게 사면 나중에 되돌릴 수 없는 선택이 됩니다.',
          'M5 자체도 이름만 바뀐 것이 아니라 실질적인 업그레이드입니다. Apple의 M5 GPU는 모든 코어에 Neural Accelerator를 추가했고, Apple은 이 칩을 온디바이스 대규모 언어 모델 실행에 특화된 제품으로 마케팅하며, 153GB/s의 메모리 대역폭 — M4보다 약 28% 빠름 — 이 이를 뒷받침합니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Air+M5+24GB',
            productName: 'MacBook Air M5 (24GB unified memory)',
            productCategory: 'laptop',
            label: 'MacBook Air M5 24GB 현재 가격 확인하기',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Air+M5+32GB',
            productName: 'MacBook Air M5 (32GB unified memory)',
            productCategory: 'laptop',
            label: 'MacBook Air M5 32GB 현재 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '로컬 LLM을 위한 MacBook Air 24GB 대 32GB',
        content: [
          '16GB 기본 구성은 로컬 AI가 부수적이고 가끔 쓰는 용도일 때만 실질적인 최소치입니다 — 7B급 모델은 돌아가지만 다른 작업을 위한 여유는 거의 없습니다. 통합 메모리는 구매 후 업그레이드할 수 없으므로, "나중에 업그레이드"할 계획을 세우기보다 지금 실제 사용 사례에 맞는 구성을 선택하십시오 — MacBook Air에는 그런 선택지가 존재하지 않습니다.',
          'eGPU도 이 한계들을 넓혀주지 않습니다. Apple Silicon은 구성과 관계없이 외장 GPU로 가는 PCIe 경로를 전혀 제공하지 않으므로, 미래의 eGPU 구매를 이 결정에 전혀 반영하지 마십시오.',
        ],
        columns: ['모델 크기', '24GB에서', '32GB에서'],
        rows: [
          { '0': '7B-8B', '1': '🟢 우수', '2': '🟢 우수' },
          { '0': '13B-14B', '1': '🟢 여유로움', '2': '🟢 충분한 여유' },
          { '0': '20B-30B', '1': '🟡 빠듯함, 양자화 의존', '2': '🟢 Q4에서 여유로움' },
          { '0': '70B', '1': '🔴 비현실적', '2': '🔴 이 용도로는 비추천' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MacBook Air, MacBook Pro, iMac에 로컬 LLM용 eGPU를 추가할 수 있습니까?',
            a: '아니요, 현재의 어떤 Apple Silicon Mac — MacBook Air, MacBook Pro, Apple Silicon iMac — 에서도 가속용으로는 불가능합니다. Apple Silicon에는 외장 GPU로 가는 PCIe 경로가 없으며, eGPU가 물리적으로 연결되는 경우(구형 Intel Mac에서만 가능하며 Apple Silicon에서는 불가능)에도 macOS와 Ollama 같은 도구는 오직 Apple 자체의 Metal 백엔드로만 추론을 전달합니다. 워크플로가 NVIDIA CUDA와 업그레이드 가능한 GPU에 의존한다면, eGPU를 장착한 Mac이 아니라 Windows나 Linux 머신이 더 실용적인 선택입니다.',
          },
          {
            q: '16GB 기본 MacBook Air는 로컬 LLM에 충분합니까?',
            a: 'Q4에서 7B급 모델은 편안하게 구동할 수 있으므로 쓸모없지는 않습니다. 하지만 로컬 AI는 그 구성이 겨냥한 용도가 아닙니다 — 메모리는 구매 후 추가할 수 없으므로, 더 큰 로컬 모델 실행이 중요하다면 나중에 업그레이드할 계획을 세우기보다 결제 시점에 최소 24GB로 구성하십시오.',
          },
          {
            q: 'MacBook Air는 긴 LLM 추론 중에 스로틀링됩니까?',
            a: '그럴 수 있습니다. MacBook Air는 팬리스이므로, 긴 추론 세션을 포함한 지속적인 고강도 워크로드는 10-15분 후 약간의 열 스로틀링을 유발할 수 있습니다. 짧은 채팅 상호작용은 영향을 받지 않으며, 지속적인 배치 처리에서 이 문제가 드러납니다.',
          },
          {
            q: '로컬 LLM을 위해 대신 MacBook Pro를 구매해야 합니까?',
            a: '지속적인 워크로드를 위한 능동 냉각이 필요하거나 32GB를 넘는 통합 메모리 구성을 원하는 경우에만 그렇습니다 — MacBook Pro 라인업은 M5 Pro로 최대 64GB, M5 Max로 최대 128GB까지 제공하며, 이는 MacBook Air가 제공하지 않는 한계치입니다.',
          },
          {
            q: 'MacBook Air에서는 Ollama와 MLX 중 어느 것이 더 잘 작동합니까?',
            a: '둘 다 동일한 Metal 가속을 기반으로 합니다. MLX는 Apple 자체 프레임워크로 일부 모델 아키텍처에서 소폭 더 빠를 수 있으며, Ollama는 더 간단한 설정 경험을 제공합니다. 어느 쪽이든 합리적인 기본 선택입니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[MacBook에서 eGPU로 로컬 LLM을 구동할 수 있는가?](/ko/prompt-bites/best-egpu-ollama-macbook) — Apple Silicon에서 eGPU가 작동하지 않는 이유',
          '[Mac Mini M4는 로컬 LLM에 좋은가?](/ko/prompt-bites/mac-mini-m4-local-llm) — 더 많은 메모리 여유를 가진 데스크톱 대안',
          '[32GB 통합 메모리 Mac을 위한 최적의 로컬 LLM](/ko/prompt-bites/best-local-llm-32gb-unified-memory-mac) — 같은 메모리 등급의 데스크톱 폼팩터',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-pt.webp',
    title: 'Qual o Melhor LLM Local para um MacBook Air Sem eGPU?',
    seoTitle: 'Melhor LLM Local para MacBook Air (Sem eGPU) 2026',
    metaDescription: 'Melhor LLM local para MacBook Air: 7B-8B em Q4 (16GB), 13-14B com 24GB de memória unificada. eGPU não funciona no Apple Silicon — única alavanca.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'Donos de MacBook Air que presumem precisar de uma eGPU para rodar LLMs locais',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O melhor LLM local para um MacBook Air é um modelo de 8B — Qwen3 8B ou Llama 3.3 8B — em quantização Q4 com 16 GB de memória unificada, ou um modelo de 13-14B na configuração de 24 GB.</strong> Uma eGPU não vai ajudar: o Apple Silicon não tem caminho PCIe para GPUs externas, então a capacidade de memória unificada é a única alavanca real que um comprador de MacBook Air tem.',
    toc: [
      { label: 'Melhor Escolha: Modelos de 8B com 16 GB, 13-14B com 24 GB', anchor: '#best-pick' },
      { label: '16 GB vs 24 GB de MacBook Air para LLMs Locais', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM local para um MacBook Air?',
        answer: 'Qwen3 8B ou Llama 3.3 8B em Q4 é o melhor LLM local para um MacBook Air com 16GB de memória unificada. Com 24GB, suba para um modelo de 13-14B. Uma eGPU não ajuda no Apple Silicon.',
        bullets: [
          'MacBook Air de 16 GB: rode modelos de 8B (Qwen3 8B, Llama 3.3 8B) em Q4_K_M via Ollama ou MLX.',
          'MacBook Air de 24 GB: suba para modelos de 13-14B em Q4 com espaço confortável.',
          'Nenhuma eGPU funciona no Apple Silicon — o Ollama só acelera via backend Metal próprio da Apple, não GPUs de terceiros.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBook Air de 16 GB: rode o Qwen3 8B ou o Llama 3.3 8B em Q4 — o ponto ideal para essa faixa',
          'MacBook Air de 24 GB: suba para um modelo de 13-14B em Q4 com folga real',
          'Nenhuma eGPU funciona no Apple Silicon — o Ollama acelera apenas via Metal, memória unificada é a única alavanca de upgrade',
          'O MacBook Air é sem ventoinha — espere leve throttling térmico em sessões de inferência longas e sustentadas',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Modelos de 8B com 16 GB, 13-14B com 24 GB',
        content: [
          '<strong>Em um MacBook Air de 16 GB, o melhor LLM local é um modelo de 8B — Qwen3 8B ou Llama 3.3 8B — em quantização Q4_K_M, que precisa de aproximadamente 5-6 GB e deixa espaço confortável para o macOS e um navegador.</strong> Ambos os modelos rodam bem via Ollama ou o framework MLX da Apple, otimizado especificamente para a arquitetura de memória unificada do Apple Silicon.',
          'Se você configurou seu MacBook Air com 24 GB de memória unificada, suba para um modelo de 13-14B em Q4 — aproximadamente 9-10 GB — com bastante espaço restante. Memória unificada significa que não há um teto de VRAM separado: a RAM é compartilhada entre CPU e GPU, então o número na ficha técnica é o que importa para dimensionar o LLM.',
          'Uma eGPU não muda nenhum dos cálculos. O Apple Silicon não expõe caminho PCIe para uma GPU externa, e mesmo onde uma eGPU está fisicamente conectada (só possível em Macs Intel mais antigos, não Apple Silicon), o Ollama só despacha inferência para o próprio backend Metal da Apple. A única alavanca real de upgrade em um MacBook Air é comprar mais memória unificada no momento da compra — ela não pode ser adicionada depois.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'Confira a configuração do MacBook Air M4 24GB na Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '16 GB vs 24 GB de MacBook Air para LLMs Locais',
        content: [
          'A configuração de 16 GB é o mínimo prático para inferência confortável de 8B junto do uso diário normal. A configuração de 24 GB praticamente dobra seu teto usável de tamanho de modelo para 13-14B, a um preço real premium pela atualização de memória.',
          'Já que a memória unificada não pode ser atualizada após a compra, compre a configuração compatível com o tamanho de modelo que você almeja agora, em vez de planejar "atualizar depois" — essa opção não existe em um MacBook Air.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O MacBook Air sofre throttling durante inferência longa de LLM?',
            a: 'Pode sofrer. O MacBook Air é sem ventoinha, então cargas de trabalho pesadas e sustentadas — incluindo sessões de inferência longas — podem provocar leve throttling térmico após 10-15 minutos. Interações curtas de chat não são afetadas; é no processamento contínuo em lote que isso aparece.',
          },
          {
            q: '8 GB de memória unificada é suficiente para algum LLM local?',
            a: 'Apenas modelos muito pequenos (3B ou menos em Q4) cabem confortavelmente junto do macOS em um Mac de 8 GB. Para uso geral de LLM local, 16 GB é o mínimo realista.',
          },
          {
            q: 'Devo comprar um MacBook Pro em vez disso para LLMs locais?',
            a: 'Apenas se você precisar de resfriamento ativo para cargas de trabalho sustentadas ou quiser tetos de memória unificada mais altos (até 128 GB em configurações M4 Max) que a linha MacBook Air não oferece.',
          },
          {
            q: 'O Ollama ou o MLX roda melhor em um MacBook Air?',
            a: 'Ambos usam a mesma aceleração Metal por baixo; o MLX é o framework próprio da Apple e pode ser marginalmente mais rápido para algumas arquiteturas de modelo, enquanto o Ollama oferece uma configuração mais simples. Qualquer um dos dois é uma escolha padrão razoável.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[É Possível Rodar LLMs Locais com uma eGPU em um MacBook?](/prompt-bites/best-egpu-ollama-macbook) — por que eGPUs não funcionam no Apple Silicon',
          '[O Mac Mini M4 É Bom para LLMs Locais?](/prompt-bites/mac-mini-m4-local-llm) — uma alternativa desktop com mais espaço de memória',
          '[Melhor LLM Local para um Mac com 32 GB de Memória Unificada](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — a próxima faixa acima',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-macbook-air-no-egpu-overview-hero-zh.webp',
    title: '2026 年无 eGPU MacBook Air 的最佳本地 LLM',
    seoTitle: '2026 年 MacBook Air（无 eGPU）最佳本地 LLM',
    metaDescription: 'M5 MacBook Air 是无需 eGPU 的最佳便携本地 LLM 笔记本电脑之一。本地 AI 场景请选择 24GB 或 32GB 统一内存，而非 16GB 基础版。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 14B'],
    current_hardware_mentioned: ['MacBook Air M5'],
    educationalLevel: 'Beginner',
    audience: '正在决定本地 LLM 所需统一内存容量的 MacBook Air 买家，其中一些人误以为需要 eGPU 才能运行',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>M5 MacBook Air 是无需 eGPU 也能买到的最佳便携本地 LLM 笔记本电脑之一——如果用于本地 AI，请选择 24GB 或 32GB 统一内存配置，而不是 16GB 基础版。</strong>Apple Silicon 没有通往外接 GPU 的 PCIe 通路，因此缺少 eGPU 选项并不是需要绕开的限制——统一内存容量才是真正的杠杆，而且购买后无法加装。',
    toc: [
      { label: '本地 LLM 的最佳配置', anchor: '#best-pick' },
      { label: '24GB 对比 32GB MacBook Air', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: 'MacBook Air 本地 LLM 的最佳配置是什么？',
        answer: '32GB 统一内存的 M5 MacBook Air 是本地 AI 使用的最佳配置；如果预算更重要，24GB 是性价比最高的选择。如果本地 LLM 是你购买的主要原因，请跳过 16GB 基础版。eGPU 在 Apple Silicon 上无法提供帮助——按内存购买，而不是指望一条并不存在的升级路径。',
        bullets: [
          'M5 MacBook Air 标准配置为 16GB 统一内存，可选配 24GB 或 32GB',
          'M5 带来 153GB/s 的内存带宽（比 M4 快 28%），并配备苹果专门针对设备端 LLM 宣传的神经加速器（Neural Accelerators）',
          '24GB 是 7B-14B 级别模型的性价比之选；如果本地 AI 是主要用途，32GB 是最佳配置',
          'Apple Silicon 上不存在 eGPU 升级路径——购买时选定的统一内存容量是唯一的杠杆',
          'MacBook Air 的价格因配置和零售商而异——请查看当前价格，而不要依赖固定数字',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'M5 MacBook Air：24GB 统一内存是本地 LLM 性价比最高的配置；如果本地 AI 是你购买的主要原因，32GB 是最佳配置',
          '如果本地 AI 对你很重要，请跳过 16GB 基础版——统一内存购买后无法升级',
          'Apple Silicon 上不存在 eGPU 升级路径——这不是你错过的变通方案，统一内存才是真正的杠杆',
          'M5 的 153GB/s 内存带宽和神经加速器相较 M4 是设备端推理的真正代际提升',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '本地 LLM 的最佳 MacBook Air 配置',
        content: [
          '<strong>如果本地 AI 是你购买 M5 MacBook Air 的主要原因之一，请选择 32GB 统一内存配置。</strong>Apple Silicon 在 CPU 和 GPU 之间共享内存，因此规格表上的统一内存数字——而非独立的显存数字——决定了哪些模型能够运行。32GB 为 14B 级别模型提供舒适的余量，也留有空间尝试更大的量化模型。',
          '如果预算比最大余量更重要，24GB 是实用的甜蜜点：足以运行 7B-14B 级别模型，同时为 macOS 和浏览器留有空间，价格也比 32GB 版本实实在在地便宜一档。如果本地 LLM 确实是你购买 Air 的原因，请跳过 16GB 基础配置——它能应付小模型，但内存购买后无法加装，现在买少了就只能将就。',
          'M5 本身是一次真正的升级，而不只是换了个名字：苹果的 M5 GPU 为每个核心都增加了神经加速器，苹果也专门围绕设备端运行大语言模型来宣传这颗芯片，背后是 153GB/s 的内存带宽——比 M4 快约 28%。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Air+M5+24GB',
            productName: 'MacBook Air M5（24GB 统一内存）',
            productCategory: 'laptop',
            label: '查看 MacBook Air M5 24GB 当前价格',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Air+M5+32GB',
            productName: 'MacBook Air M5（32GB 统一内存）',
            productCategory: 'laptop',
            label: '查看 MacBook Air M5 32GB 当前价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '本地 LLM：24GB 对比 32GB MacBook Air',
        content: [
          '只有当本地 AI 是次要、偶尔使用的场景时，16GB 基础配置才算实用的最低要求——它能运行 7B 级别模型，但几乎没有余地做其他事情。由于统一内存购买后无法升级，请现在就根据实际用途选择配置，而不要指望"以后再升级"——MacBook Air 不存在这个选项。',
          'eGPU 同样无法提升这些上限。无论选择哪种配置，Apple Silicon 都没有通往外接 GPU 的 PCIe 通路，因此完全不必将未来购买 eGPU 纳入这次决策的考虑。',
        ],
        columns: ['模型规模', '24GB', '32GB'],
        rows: [
          { '0': '7B-8B', '1': '🟢 优秀', '2': '🟢 优秀' },
          { '0': '13B-14B', '1': '🟢 舒适', '2': '🟢 空间充裕' },
          { '0': '20B-30B', '1': '🟡 紧张，视量化而定', '2': '🟢 Q4 下舒适' },
          { '0': '70B', '1': '🔴 不现实', '2': '🔴 非该配置的目标场景' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '能给 MacBook Air、MacBook Pro 或 iMac 加装 eGPU 来运行本地 LLM 吗？',
            a: '不能，目前任何 Apple Silicon Mac——无论是 MacBook Air、MacBook Pro 还是 Apple Silicon iMac——都无法通过 eGPU 获得加速。Apple Silicon 没有通往外接 GPU 的 PCIe 通路，即使在物理上能连接 eGPU 的场合（这只在较老的 Intel Mac 上可行，Apple Silicon 上不行），macOS 和 Ollama 等工具也只会将推理任务分派给苹果自家的 Metal 后端。如果你的工作流依赖 NVIDIA CUDA 和可升级的 GPU，Windows 或 Linux 电脑才是更实际的选择，而不是配备 eGPU 的 Mac。',
          },
          {
            q: '16GB 基础版 MacBook Air 够用于本地 LLM 吗？',
            a: '它能舒适地以 Q4 运行 7B 级别模型，所以并非毫无用处。但本地 AI 并不是这个配置的设计目标——内存购买后无法加装，所以如果运行更大的本地模型对你很重要，请在结账时至少选择 24GB，而不要指望以后升级。',
          },
          {
            q: 'MacBook Air 在长时间 LLM 推理时会降频吗？',
            a: '可能会。MacBook Air 无风扇，因此持续的重负载工作——包括长时间的推理会话——可能在 10-15 分钟后触发轻微的热降频。短暂的聊天交互不受影响；持续的批量处理才会显现这一问题。',
          },
          {
            q: '我应该改买 MacBook Pro 用于本地 LLM 吗？',
            a: '只有在你需要主动散热来支持持续负载，或需要超过 32GB 的统一内存配置时才值得——MacBook Pro 系列最高可配备 M5 Pro 的 64GB 或 M5 Max 的 128GB，这是 MacBook Air 不提供的上限。',
          },
          {
            q: 'Ollama 还是 MLX 在 MacBook Air 上运行得更好？',
            a: '两者底层都使用相同的 Metal 加速；MLX 是苹果自家框架，在某些模型架构上可能略快，而 Ollama 提供更简单的配置体验。两者都是合理的默认选择。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[MacBook 能用 eGPU 运行本地 LLM 吗？](/zh/prompt-bites/best-egpu-ollama-macbook) — 为什么 eGPU 在 Apple Silicon 上不起作用',
          '[Mac Mini M4 适合本地 LLM 吗？](/zh/prompt-bites/mac-mini-m4-local-llm) — 内存余量更大的桌面替代方案',
          '[32GB 统一内存 Mac 的最佳本地 LLM](/zh/prompt-bites/best-local-llm-32gb-unified-memory-mac) — 相同内存档位的桌面机型',
        ],
      },
    },
  },
}
