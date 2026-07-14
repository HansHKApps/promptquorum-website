import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best Local LLM for a MacBook Air Without an eGPU?',
    seoTitle: 'Best Local LLM for MacBook Air (No eGPU) 2026',
    metaDescription: 'Best local LLM for a MacBook Air: 7B-8B models at Q4 on 16GB unified memory, 13-14B on 24GB. No eGPU on Apple Silicon — unified memory is the only lever.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'MacBook Air owners who assume they need an eGPU to run local LLMs',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>The best local LLM for a MacBook Air is an 8B model — Qwen3 8B or Llama 3.3 8B — at Q4 quantization on 16 GB of unified memory, or a 13-14B model on the 24 GB configuration.</strong> An eGPU will not help: Apple Silicon has no PCIe path to external GPUs, so unified memory capacity is the only real lever a MacBook Air buyer has.',
    toc: [
      { label: 'Best Pick: 8B Models on 16 GB, 13-14B on 24 GB', anchor: '#best-pick' },
      { label: '16 GB vs 24 GB MacBook Air for Local LLMs', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for a MacBook Air?',
        answer: 'Qwen3 8B or Llama 3.3 8B at Q4 is the best local LLM for a MacBook Air with 16GB unified memory. With 24GB, step up to a 13-14B model. An eGPU cannot help on Apple Silicon.',
        bullets: [
          '16 GB MacBook Air: run 8B models (Qwen3 8B, Llama 3.3 8B) at Q4_K_M via Ollama or MLX.',
          '24 GB MacBook Air: step up to 13-14B models at Q4 with comfortable headroom.',
          'No eGPU works on Apple Silicon — Ollama only accelerates via Apple\'s own Metal backend, not third-party GPUs.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '16 GB MacBook Air: run Qwen3 8B or Llama 3.3 8B at Q4 — the sweet spot for this tier',
          '24 GB MacBook Air: step up to a 13-14B model at Q4 with real headroom',
          'No eGPU works on Apple Silicon — Ollama accelerates only through Metal, unified memory is the only upgrade lever',
          'The MacBook Air is fanless — expect mild thermal throttling on long, sustained inference sessions',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: 8B Models on 16 GB, 13-14B on 24 GB',
        content: [
          '<strong>On a 16 GB MacBook Air, the best local LLM is an 8B model — Qwen3 8B or Llama 3.3 8B — at Q4_K_M quantization, which needs roughly 5-6 GB and leaves comfortable headroom for macOS and a browser.</strong> Both models run well through Ollama or Apple\'s MLX framework, which is optimized specifically for Apple Silicon\'s unified memory architecture.',
          'If you configured your MacBook Air with 24 GB of unified memory, step up to a 13-14B model at Q4 — roughly 9-10 GB — with plenty of room left over. Unified memory means there is no separate VRAM ceiling: RAM is shared between CPU and GPU, so the memory figure on the spec sheet is the number that matters for LLM sizing.',
          'An eGPU will not change either calculation. Apple Silicon exposes no PCIe path to an external GPU, and even where an eGPU is physically connected (only possible on older Intel Macs, not Apple Silicon), Ollama only dispatches inference to Apple\'s own Metal backend. The only real upgrade lever on a MacBook Air is buying more unified memory at purchase time — it cannot be added later.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'Check MacBook Air M4 24GB config on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '16 GB vs 24 GB MacBook Air for Local LLMs',
        content: [
          'The 16 GB configuration is the practical minimum for comfortable 8B inference alongside normal daily use. The 24 GB configuration roughly doubles your usable model-size ceiling to 13-14B, at a real price premium for the memory upgrade.',
          'Since unified memory cannot be upgraded after purchase, buy the configuration matched to your target model size now rather than planning to "upgrade later" — that option does not exist on a MacBook Air.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does the MacBook Air throttle during long LLM inference?',
            a: 'It can. The MacBook Air is fanless, so sustained heavy workloads — including long inference sessions — may trigger mild thermal throttling after 10-15 minutes. Short chat interactions are unaffected; continuous batch processing is where it shows up.',
          },
          {
            q: 'Is 8 GB unified memory enough for any local LLM?',
            a: 'Only very small models (3B and under at Q4) fit comfortably alongside macOS on an 8 GB Mac. For general-purpose local LLM use, 16 GB is the realistic minimum.',
          },
          {
            q: 'Should I buy a MacBook Pro instead for local LLMs?',
            a: 'Only if you need active cooling for sustained workloads or want the higher unified-memory ceilings (up to 128 GB on M4 Max configurations) that the MacBook Air lineup does not offer.',
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
          '[Best Local LLM for a 32 GB Unified Memory Mac](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — the next tier up',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
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
    title: 'Das beste lokale LLM für ein MacBook Air ohne eGPU?',
    seoTitle: 'Bestes lokales LLM für MacBook Air (ohne eGPU) 2026',
    metaDescription: 'Bestes lokales LLM für ein MacBook Air: 7B-8B bei Q4 (16 GB), 13-14B bei 24 GB Unified Memory. Keine eGPU auf Apple Silicon — einziger Hebel.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'MacBook-Air-Besitzer, die annehmen, sie bräuchten eine eGPU für lokale LLMs',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Das beste lokale LLM für ein MacBook Air ist ein 8B-Modell — Qwen3 8B oder Llama 3.3 8B — bei Q4-Quantisierung auf 16 GB Unified Memory, oder ein 13-14B-Modell auf der 24-GB-Konfiguration.</strong> Eine eGPU hilft nicht: Apple Silicon hat keinen PCIe-Pfad zu externen GPUs, daher ist die Unified-Memory-Kapazität der einzige echte Hebel, den ein MacBook-Air-Käufer hat.',
    toc: [
      { label: 'Beste Wahl: 8B-Modelle auf 16 GB, 13-14B auf 24 GB', anchor: '#best-pick' },
      { label: '16 GB vs. 24 GB MacBook Air für lokale LLMs', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste lokale LLM für ein MacBook Air?',
        answer: 'Qwen3 8B oder Llama 3.3 8B bei Q4 ist das beste lokale LLM für ein MacBook Air mit 16 GB Unified Memory. Mit 24 GB steigen Sie auf ein 13-14B-Modell um. Eine eGPU kann auf Apple Silicon nicht helfen.',
        bullets: [
          '16-GB-MacBook-Air: 8B-Modelle (Qwen3 8B, Llama 3.3 8B) bei Q4_K_M via Ollama oder MLX betreiben.',
          '24-GB-MacBook-Air: Umstieg auf 13-14B-Modelle bei Q4 mit komfortabler Reserve.',
          'Keine eGPU funktioniert auf Apple Silicon — Ollama beschleunigt nur über Apples eigenes Metal-Backend, nicht über GPUs von Drittanbietern.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '16-GB-MacBook-Air: Qwen3 8B oder Llama 3.3 8B bei Q4 betreiben — der Sweet Spot dieser Stufe',
          '24-GB-MacBook-Air: Umstieg auf ein 13-14B-Modell bei Q4 mit echter Reserve',
          'Keine eGPU funktioniert auf Apple Silicon — Ollama beschleunigt nur über Metal, Unified Memory ist der einzige Upgrade-Hebel',
          'Das MacBook Air ist lüfterlos — bei langen, durchgehenden Inferenz-Sessions ist mit leichtem Thermal-Throttling zu rechnen',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: 8B-Modelle auf 16 GB, 13-14B auf 24 GB',
        content: [
          '<strong>Auf einem 16-GB-MacBook-Air ist das beste lokale LLM ein 8B-Modell — Qwen3 8B oder Llama 3.3 8B — bei Q4_K_M-Quantisierung, das etwa 5-6 GB benötigt und komfortable Reserve für macOS und einen Browser lässt.</strong> Beide Modelle laufen gut über Ollama oder Apples MLX-Framework, das speziell für die Unified-Memory-Architektur von Apple Silicon optimiert ist.',
          'Wenn Sie Ihr MacBook Air mit 24 GB Unified Memory konfiguriert haben, steigen Sie auf ein 13-14B-Modell bei Q4 um — etwa 9-10 GB — mit reichlich Reserve. Unified Memory bedeutet, dass es keine separate VRAM-Obergrenze gibt: RAM wird zwischen CPU und GPU geteilt, daher ist die Speicherzahl auf dem Datenblatt die Zahl, die für die LLM-Größenwahl zählt.',
          'Eine eGPU ändert an keiner der beiden Rechnungen etwas. Apple Silicon bietet keinen PCIe-Pfad zu einer externen GPU, und selbst dort, wo eine eGPU physisch angeschlossen ist (nur bei älteren Intel-Macs möglich, nicht bei Apple Silicon), leitet Ollama Inferenz nur an Apples eigenes Metal-Backend weiter. Der einzige echte Upgrade-Hebel beim MacBook Air ist der Kauf von mehr Unified Memory zum Kaufzeitpunkt — nachträglich lässt es sich nicht hinzufügen.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'MacBook Air M4 24GB Konfiguration bei Amazon prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '16 GB vs. 24 GB MacBook Air für lokale LLMs',
        content: [
          'Die 16-GB-Konfiguration ist das praktische Minimum für komfortable 8B-Inferenz neben normaler täglicher Nutzung. Die 24-GB-Konfiguration verdoppelt die nutzbare Modellgrößen-Obergrenze auf 13-14B, bei einem echten Preisaufschlag für das Speicher-Upgrade.',
          'Da Unified Memory nach dem Kauf nicht nachgerüstet werden kann, kaufen Sie jetzt die zur Zielmodellgröße passende Konfiguration, statt ein späteres „Upgrade" zu planen — diese Option gibt es beim MacBook Air nicht.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Drosselt das MacBook Air bei langer LLM-Inferenz?',
            a: 'Das kann passieren. Das MacBook Air ist lüfterlos, daher können anhaltend hohe Lasten — einschließlich langer Inferenz-Sessions — nach 10-15 Minuten leichtes Thermal-Throttling auslösen. Kurze Chat-Interaktionen sind davon nicht betroffen; bei kontinuierlicher Batch-Verarbeitung zeigt es sich.',
          },
          {
            q: 'Reichen 8 GB Unified Memory für irgendein lokales LLM?',
            a: 'Nur sehr kleine Modelle (3B und darunter bei Q4) passen neben macOS komfortabel auf einen 8-GB-Mac. Für allgemeine lokale LLM-Nutzung sind 16 GB das realistische Minimum.',
          },
          {
            q: 'Sollte ich stattdessen ein MacBook Pro für lokale LLMs kaufen?',
            a: 'Nur wenn Sie aktive Kühlung für anhaltende Workloads brauchen oder die höheren Unified-Memory-Obergrenzen (bis 128 GB bei M4-Max-Konfigurationen) wollen, die das MacBook-Air-Lineup nicht bietet.',
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
          '[Kann man lokale LLMs mit einer eGPU auf einem MacBook betreiben?](/prompt-bites/best-egpu-ollama-macbook) — warum eGPUs auf Apple Silicon nicht funktionieren',
          '[Ist das Mac Mini M4 gut für lokale LLMs?](/prompt-bites/mac-mini-m4-local-llm) — eine Desktop-Alternative mit mehr Speicherreserve',
          '[Bestes lokales LLM für einen Mac mit 32 GB Unified Memory](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — die nächste Stufe',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Cuál es el Mejor LLM Local para un MacBook Air sin eGPU?',
    seoTitle: 'Mejor LLM Local para MacBook Air (Sin eGPU) 2026',
    metaDescription: 'Mejor LLM local para un MacBook Air: 7B-8B en Q4 (16GB), 13-14B con 24GB de memoria unificada. Ninguna eGPU en Apple Silicon — única palanca.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'Propietarios de MacBook Air que asumen que necesitan una eGPU para ejecutar LLMs locales',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>El mejor LLM local para un MacBook Air es un modelo de 8B — Qwen3 8B o Llama 3.3 8B — con cuantización Q4 en 16 GB de memoria unificada, o un modelo de 13-14B en la configuración de 24 GB.</strong> Una eGPU no ayudará: Apple Silicon no tiene una ruta PCIe hacia GPUs externas, por lo que la capacidad de memoria unificada es la única palanca real que tiene un comprador de MacBook Air.',
    toc: [
      { label: 'Mejor Opción: Modelos de 8B en 16 GB, 13-14B en 24 GB', anchor: '#best-pick' },
      { label: '16 GB vs 24 GB en un MacBook Air para LLMs Locales', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM local para un MacBook Air?',
        answer: 'Qwen3 8B o Llama 3.3 8B en Q4 es el mejor LLM local para un MacBook Air con 16GB de memoria unificada. Con 24GB, sube a un modelo de 13-14B. Ninguna eGPU puede ayudar en Apple Silicon.',
        bullets: [
          'MacBook Air de 16 GB: ejecuta modelos de 8B (Qwen3 8B, Llama 3.3 8B) en Q4_K_M vía Ollama o MLX.',
          'MacBook Air de 24 GB: sube a modelos de 13-14B en Q4 con margen cómodo.',
          'Ninguna eGPU funciona en Apple Silicon — Ollama solo acelera mediante el propio backend Metal de Apple, no GPUs de terceros.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBook Air de 16 GB: ejecuta Qwen3 8B o Llama 3.3 8B en Q4 — el punto ideal para este nivel',
          'MacBook Air de 24 GB: sube a un modelo de 13-14B en Q4 con margen real',
          'Ninguna eGPU funciona en Apple Silicon — Ollama acelera solo mediante Metal, la memoria unificada es la única palanca de mejora',
          'El MacBook Air no tiene ventilador — espera una limitación térmica leve en sesiones de inferencia largas y sostenidas',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Modelos de 8B en 16 GB, 13-14B en 24 GB',
        content: [
          '<strong>En un MacBook Air de 16 GB, el mejor LLM local es un modelo de 8B — Qwen3 8B o Llama 3.3 8B — con cuantización Q4_K_M, que necesita aproximadamente 5-6 GB y deja margen cómodo para macOS y un navegador.</strong> Ambos modelos funcionan bien a través de Ollama o el framework MLX de Apple, optimizado específicamente para la arquitectura de memoria unificada de Apple Silicon.',
          'Si configuraste tu MacBook Air con 24 GB de memoria unificada, sube a un modelo de 13-14B en Q4 — aproximadamente 9-10 GB — con bastante margen restante. La memoria unificada significa que no hay un límite separado de VRAM: la RAM se comparte entre CPU y GPU, por lo que la cifra de memoria en la ficha técnica es el número que importa para dimensionar el LLM.',
          'Una eGPU no cambiará ninguno de estos cálculos. Apple Silicon no expone ninguna ruta PCIe hacia una GPU externa, e incluso donde una eGPU está físicamente conectada (posible solo en Macs Intel más antiguos, no en Apple Silicon), Ollama solo despacha la inferencia al propio backend Metal de Apple. La única palanca de mejora real en un MacBook Air es comprar más memoria unificada al momento de la compra — no se puede añadir después.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'Consulta la configuración MacBook Air M4 24GB en Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '16 GB vs 24 GB en un MacBook Air para LLMs Locales',
        content: [
          'La configuración de 16 GB es el mínimo práctico para una inferencia cómoda de 8B junto al uso diario normal. La configuración de 24 GB prácticamente duplica tu techo de tamaño de modelo utilizable a 13-14B, a un precio real más alto por la mejora de memoria.',
          'Dado que la memoria unificada no se puede actualizar después de la compra, elige la configuración que coincida con el tamaño de modelo objetivo ahora, en lugar de planear "actualizar después" — esa opción no existe en un MacBook Air.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Se limita térmicamente el MacBook Air durante una inferencia de LLM larga?',
            a: 'Puede hacerlo. El MacBook Air no tiene ventilador, por lo que las cargas de trabajo sostenidas y pesadas — incluidas las sesiones de inferencia largas — pueden provocar una limitación térmica leve después de 10-15 minutos. Las interacciones de chat cortas no se ven afectadas; el procesamiento por lotes continuo es donde aparece.',
          },
          {
            q: '¿Son 8 GB de memoria unificada suficientes para algún LLM local?',
            a: 'Solo los modelos muy pequeños (3B o menos en Q4) caben cómodamente junto a macOS en un Mac de 8 GB. Para uso general de LLM local, 16 GB es el mínimo realista.',
          },
          {
            q: '¿Debería comprar un MacBook Pro en su lugar para LLMs locales?',
            a: 'Solo si necesitas refrigeración activa para cargas de trabajo sostenidas o quieres los techos de memoria unificada más altos (hasta 128 GB en configuraciones M4 Max) que la línea MacBook Air no ofrece.',
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
          '[¿Puedes Ejecutar LLMs Locales con una eGPU en un MacBook?](/prompt-bites/best-egpu-ollama-macbook) — por qué las eGPU no funcionan en Apple Silicon',
          '[¿Es Bueno el Mac Mini M4 para LLMs Locales?](/prompt-bites/mac-mini-m4-local-llm) — una alternativa de escritorio con más margen de memoria',
          '[Mejor LLM Local para un Mac con 32 GB de Memoria Unificada](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — el siguiente nivel',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Quel est le meilleur LLM local pour un MacBook Air sans eGPU ?',
    seoTitle: 'Meilleur LLM local pour MacBook Air (sans eGPU) 2026',
    metaDescription: 'Meilleur LLM local pour MacBook Air : 7B-8B en Q4 (16 Go), 13-14B (24 Go) de mémoire unifiée. Aucun eGPU sur Apple Silicon — seul levier possible.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'Propriétaires de MacBook Air pensant avoir besoin d\'un eGPU pour exécuter des LLM locaux',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Le meilleur LLM local pour un MacBook Air est un modèle 8B — Qwen3 8B ou Llama 3.3 8B — en quantification Q4 sur 16 Go de mémoire unifiée, ou un modèle 13-14B sur la configuration 24 Go.</strong> Un eGPU ne changera rien : Apple Silicon n\'offre aucun chemin PCIe vers un GPU externe, si bien que la capacité de mémoire unifiée est le seul véritable levier dont dispose un acheteur de MacBook Air.',
    toc: [
      { label: 'Meilleur choix : modèles 8B sur 16 Go, 13-14B sur 24 Go', anchor: '#best-pick' },
      { label: '16 Go vs 24 Go de MacBook Air pour les LLM locaux', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures connexes', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour un MacBook Air ?',
        answer: 'Qwen3 8B ou Llama 3.3 8B en Q4 est le meilleur LLM local pour un MacBook Air avec 16 Go de mémoire unifiée. Avec 24 Go, passez à un modèle 13-14B. Un eGPU ne peut rien apporter sur Apple Silicon.',
        bullets: [
          'MacBook Air 16 Go : exécutez des modèles 8B (Qwen3 8B, Llama 3.3 8B) en Q4_K_M via Ollama ou MLX.',
          'MacBook Air 24 Go : passez à des modèles 13-14B en Q4 avec une marge confortable.',
          'Aucun eGPU ne fonctionne sur Apple Silicon — Ollama n\'accélère que via le backend Metal propre à Apple, pas via des GPU tiers.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBook Air 16 Go : exécutez Qwen3 8B ou Llama 3.3 8B en Q4 — le point d\'équilibre idéal pour ce palier',
          'MacBook Air 24 Go : passez à un modèle 13-14B en Q4 avec une réelle marge de manœuvre',
          'Aucun eGPU ne fonctionne sur Apple Silicon — Ollama n\'accélère que via Metal, la mémoire unifiée est le seul levier d\'amélioration',
          'Le MacBook Air est sans ventilateur — attendez-vous à une légère limitation thermique lors de sessions d\'inférence longues et soutenues',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : modèles 8B sur 16 Go, 13-14B sur 24 Go',
        content: [
          '<strong>Sur un MacBook Air 16 Go, le meilleur LLM local est un modèle 8B — Qwen3 8B ou Llama 3.3 8B — en quantification Q4_K_M, qui nécessite environ 5-6 Go et laisse une marge confortable pour macOS et un navigateur.</strong> Les deux modèles fonctionnent bien via Ollama ou le framework MLX d\'Apple, spécifiquement optimisé pour l\'architecture à mémoire unifiée d\'Apple Silicon.',
          'Si vous avez configuré votre MacBook Air avec 24 Go de mémoire unifiée, passez à un modèle 13-14B en Q4 — environ 9-10 Go — avec une marge encore confortable. La mémoire unifiée signifie qu\'il n\'existe pas de plafond de VRAM distinct : la RAM est partagée entre le CPU et le GPU, si bien que le chiffre de mémoire indiqué sur la fiche technique est celui qui compte pour dimensionner un LLM.',
          'Un eGPU ne change aucun de ces calculs. Apple Silicon n\'expose aucun chemin PCIe vers un GPU externe, et même lorsqu\'un eGPU est physiquement connecté (uniquement possible sur les anciens Mac Intel, pas sur Apple Silicon), Ollama ne dispatche l\'inférence que vers le backend Metal propre à Apple. Le seul véritable levier d\'amélioration sur un MacBook Air consiste à acheter davantage de mémoire unifiée à l\'achat — elle ne peut pas être ajoutée par la suite.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'Voir la configuration MacBook Air M4 24 Go sur Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '16 Go vs 24 Go de MacBook Air pour les LLM locaux',
        content: [
          'La configuration 16 Go est le minimum pratique pour une inférence 8B confortable en parallèle d\'un usage quotidien normal. La configuration 24 Go double approximativement le plafond de taille de modèle utilisable, jusqu\'à 13-14B, moyennant une réelle prime tarifaire pour la mise à niveau mémoire.',
          'La mémoire unifiée ne pouvant pas être mise à niveau après l\'achat, choisissez dès maintenant la configuration adaptée à la taille de modèle visée plutôt que de prévoir une « mise à niveau ultérieure » — cette option n\'existe pas sur un MacBook Air.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Le MacBook Air chauffe-t-il et ralentit-il lors d\'une inférence LLM prolongée ?',
            a: 'Oui, cela peut arriver. Le MacBook Air étant sans ventilateur, une charge soutenue — y compris de longues sessions d\'inférence — peut déclencher une légère limitation thermique après 10 à 15 minutes. Les interactions de chat courtes ne sont pas concernées ; c\'est le traitement par lots continu qui révèle ce phénomène.',
          },
          {
            q: '8 Go de mémoire unifiée suffisent-ils pour un LLM local ?',
            a: 'Seuls les très petits modèles (3B et moins, en Q4) tiennent confortablement aux côtés de macOS sur un Mac à 8 Go. Pour un usage général de LLM local, 16 Go constituent le minimum réaliste.',
          },
          {
            q: 'Faut-il plutôt acheter un MacBook Pro pour les LLM locaux ?',
            a: 'Seulement si vous avez besoin d\'un refroidissement actif pour des charges soutenues, ou si vous souhaitez des plafonds de mémoire unifiée plus élevés (jusqu\'à 128 Go sur les configurations M4 Max) que la gamme MacBook Air ne propose pas.',
          },
          {
            q: 'Ollama ou MLX fonctionne-t-il mieux sur un MacBook Air ?',
            a: 'Les deux s\'appuient sur la même accélération Metal en arrière-plan ; MLX, le framework propre d\'Apple, peut être marginalement plus rapide pour certaines architectures de modèles, tandis qu\'Ollama offre une mise en place plus simple. Les deux constituent un choix par défaut raisonnable.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Peut-on exécuter des LLM locaux avec un eGPU sur un MacBook ?](/prompt-bites/best-egpu-ollama-macbook) — pourquoi les eGPU ne fonctionnent pas sur Apple Silicon',
          '[Le Mac Mini M4 est-il adapté aux LLM locaux ?](/prompt-bites/mac-mini-m4-local-llm) — une alternative de bureau avec plus de marge mémoire',
          '[Meilleur LLM local pour un Mac à 32 Go de mémoire unifiée](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — le palier supérieur',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: 'eGPUなしのMacBook Airに最適なローカルLLMは?',
    seoTitle: '2026年版 MacBook Air(eGPUなし)に最適なローカルLLM',
    metaDescription: 'MacBook Airに最適なローカルLLM: 16GB統合メモリで7B-8BモデルをQ4、24GBで13-14B。Apple SiliconではeGPUは使えず、統合メモリだけが唯一のレバーです。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'ローカルLLMを動かすにはeGPUが必要だと思い込んでいるMacBook Airの所有者',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>MacBook Airに最適なローカルLLMは8Bモデル — Qwen3 8BかLlama 3.3 8B — で、16GB統合メモリではQ4量子化、24GB構成なら13-14Bモデルです。</strong>eGPUは役に立ちません。Apple SiliconにはPCIe経由の外部GPUへの経路がないため、統合メモリの容量がMacBook Air購入者にとって唯一の実質的なレバーです。',
    toc: [
      { label: 'ベストピック: 16GBで8Bモデル、24GBで13-14B', anchor: '#best-pick' },
      { label: 'ローカルLLM向け16GB vs 24GB MacBook Air', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'MacBook Airに最適なローカルLLMは?',
        answer: '16GB統合メモリのMacBook Airに最適なローカルLLMは、Q4のQwen3 8BかLlama 3.3 8Bです。24GBなら13-14Bモデルにステップアップしてください。Apple SiliconではeGPUは役に立ちません。',
        bullets: [
          '16GB MacBook Air: OllamaかMLX経由でQ4_K_Mの8Bモデル(Qwen3 8B、Llama 3.3 8B)を動かす。',
          '24GB MacBook Air: 余裕を持ってQ4の13-14Bモデルにステップアップ。',
          'Apple SiliconではeGPUは使えません — Ollamaはサードパーティ製GPUではなくApple独自のMetalバックエンドでのみアクセラレートします。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '16GB MacBook Air: Qwen3 8BかLlama 3.3 8BをQ4で動かす — この層のスイートスポット',
          '24GB MacBook Air: 実質的な余裕を持ってQ4の13-14Bモデルにステップアップ',
          'Apple SiliconではeGPUは使えません — Ollamaは Metal経由でのみアクセラレートし、統合メモリだけが唯一のアップグレードレバー',
          'MacBook Airはファンレス — 長時間持続する推論セッションでは軽度のサーマルスロットリングを想定してください',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: 16GBで8Bモデル、24GBで13-14B',
        content: [
          '<strong>16GBのMacBook Airでは、最適なローカルLLMは8Bモデル — Qwen3 8BかLlama 3.3 8B — をQ4_K_M量子化で動かすことで、約5-6GBが必要で、macOSとブラウザに快適な余裕を残します。</strong>どちらのモデルもOllamaかApple独自のMLXフレームワーク経由でよく動作し、MLXはApple Siliconの統合メモリアーキテクチャに特化して最適化されています。',
          'MacBook Airを24GBの統合メモリで構成した場合は、Q4の13-14Bモデル(約9-10GB)にステップアップしてください。かなりの余裕が残ります。統合メモリには別個のVRAM上限がありません。RAMはCPUとGPUで共有されるため、スペックシートに記載されたメモリの数値がLLMのサイズ設定にとって重要な数字です。',
          'eGPUはどちらの計算にも影響しません。Apple SiliconはPCIe経由の外部GPUへの経路を一切公開しておらず、たとえeGPUが物理的に接続されていても(Apple SiliconではなくIntel Mac世代でのみ可能)、Ollamaは Apple独自のMetalバックエンドにのみ推論をディスパッチします。MacBook Airにおける唯一の実質的なアップグレードレバーは購入時により多くの統合メモリを選ぶことで、後から追加することはできません。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'AmazonでMacBook Air M4 24GB構成を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'ローカルLLM向け16GB vs 24GB MacBook Air',
        content: [
          '16GB構成は、日常使用と並行して快適に8B推論を行うための現実的な最低ラインです。24GB構成は使用可能なモデルサイズの上限をおよそ13-14Bまで倍増させますが、メモリアップグレードには実質的な価格プレミアムが伴います。',
          '統合メモリは購入後にアップグレードできないため、「後でアップグレードする」計画を立てるのではなく、目標のモデルサイズに合った構成を今買ってください — MacBook Airにその選択肢はありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MacBook Airは長時間のLLM推論中にスロットリングしますか?',
            a: 'する可能性があります。MacBook Airはファンレスなので、長時間の推論セッションを含む持続的な高負荷ワークロードは、10-15分後に軽度のサーマルスロットリングを引き起こすことがあります。短いチャットのやり取りは影響を受けませんが、連続的なバッチ処理ではこの現象が現れます。',
          },
          {
            q: '8GBの統合メモリでもローカルLLMに十分ですか?',
            a: '非常に小さいモデル(Q4で3B以下)のみが8GBのMacでmacOSと並行して快適に収まります。一般的なローカルLLM用途では、16GBが現実的な最低ラインです。',
          },
          {
            q: 'ローカルLLM用にMacBook Proを代わりに買うべきですか?',
            a: '持続的なワークロード向けのアクティブ冷却が必要な場合、またはMacBook Airラインナップにはない、より高い統合メモリ上限(M4 Max構成で最大128GB)が欲しい場合のみです。',
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
          '[MacBookでeGPUを使ってローカルLLMを動かせますか?](/prompt-bites/best-egpu-ollama-macbook) — Apple SiliconでeGPUが機能しない理由',
          '[Mac Mini M4はローカルLLMに向いていますか?](/prompt-bites/mac-mini-m4-local-llm) — メモリ余裕のあるデスクトップ代替案',
          '[32GB統合メモリMacに最適なローカルLLM](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — 一つ上の層',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    title: 'eGPU 없는 MacBook Air를 위한 최적의 로컬 LLM은?',
    seoTitle: 'eGPU 없는 MacBook Air 최적 로컬 LLM 2026',
    metaDescription: 'MacBook Air 최적 로컬 LLM: 16GB에서 Q4 7B-8B, 24GB에서 13-14B. Apple Silicon은 eGPU 미지원, 통합 메모리가 유일한 수단.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: 'eGPU가 로컬 LLM 구동에 필요하다고 생각하는 MacBook Air 소유자',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>MacBook Air를 위한 최적의 로컬 LLM은 16GB 통합 메모리에서 Q4 양자화로 구동하는 8B 모델 — Qwen3 8B나 Llama 3.3 8B — 이며, 24GB 구성에서는 13-14B 모델입니다.</strong> eGPU는 도움이 되지 않습니다. Apple Silicon에는 외장 GPU로 가는 PCIe 경로가 없으므로, 통합 메모리 용량이 MacBook Air 구매자가 가진 유일한 실질적인 수단입니다.',
    toc: [
      { label: '최적의 선택: 16GB에서는 8B 모델, 24GB에서는 13-14B 모델', anchor: '#best-pick' },
      { label: '로컬 LLM을 위한 16GB 대 24GB MacBook Air', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'MacBook Air를 위한 최적의 로컬 LLM은 무엇입니까?',
        answer: 'Qwen3 8B나 Llama 3.3 8B를 Q4에서 구동하는 것이 16GB 통합 메모리를 가진 MacBook Air를 위한 최적의 로컬 LLM입니다. 24GB에서는 13-14B 모델로 넘어가십시오. Apple Silicon에서는 eGPU가 도움이 되지 않습니다.',
        bullets: [
          '16GB MacBook Air: Ollama나 MLX를 통해 8B 모델(Qwen3 8B, Llama 3.3 8B)을 Q4_K_M에서 구동하십시오.',
          '24GB MacBook Air: 편안한 여유와 함께 13-14B 모델을 Q4에서 구동하는 단계로 넘어가십시오.',
          'Apple Silicon에서는 eGPU가 작동하지 않습니다 — Ollama는 서드파티 GPU가 아니라 Apple 자체의 Metal 백엔드를 통해서만 가속됩니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '16GB MacBook Air: Qwen3 8B나 Llama 3.3 8B를 Q4에서 구동하십시오 — 이 등급의 최적 지점입니다',
          '24GB MacBook Air: 실질적인 여유와 함께 13-14B 모델로 넘어가십시오',
          'Apple Silicon에서는 eGPU가 작동하지 않습니다 — Ollama는 Metal을 통해서만 가속되며, 통합 메모리가 유일한 업그레이드 수단입니다',
          'MacBook Air는 팬리스입니다 — 길고 지속적인 추론 세션에서는 약간의 열 스로틀링을 예상하십시오',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: 16GB에서는 8B 모델, 24GB에서는 13-14B 모델',
        content: [
          '<strong>16GB MacBook Air에서 최적의 로컬 LLM은 Q4_K_M 양자화의 8B 모델 — Qwen3 8B나 Llama 3.3 8B — 이며, 약 5-6GB가 필요해 macOS와 브라우저를 위한 편안한 여유 공간이 남습니다.</strong> 두 모델 모두 Ollama나 Apple 자체의 MLX 프레임워크를 통해 잘 구동되며, MLX는 Apple Silicon의 통합 메모리 아키텍처에 특화되어 최적화되어 있습니다.',
          'MacBook Air를 24GB 통합 메모리로 구성했다면, Q4에서 약 9-10GB가 필요한 13-14B 모델로 넘어가면서도 상당한 여유 공간을 확보하십시오. 통합 메모리는 별도의 VRAM 한계가 없다는 의미입니다. RAM이 CPU와 GPU 간에 공유되므로, 사양표의 메모리 수치가 LLM 크기 산정에 중요한 숫자입니다.',
          'eGPU는 어느 쪽 계산도 바꾸지 않습니다. Apple Silicon은 외장 GPU로 가는 PCIe 경로를 노출하지 않으며, eGPU가 물리적으로 연결되는 경우(Apple Silicon이 아닌 구형 Intel Mac에서만 가능)에도 Ollama는 Apple 자체의 Metal 백엔드로만 추론을 전달합니다. MacBook Air의 유일한 실질적인 업그레이드 수단은 구매 시점에 더 많은 통합 메모리를 구매하는 것입니다 — 이후에는 추가할 수 없습니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4 (24GB unified memory)',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: 'Amazon에서 MacBook Air M4 24GB 구성 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '로컬 LLM을 위한 16GB 대 24GB MacBook Air',
        content: [
          '16GB 구성은 일상적인 사용과 함께 편안한 8B 추론을 위한 실질적인 최소치입니다. 24GB 구성은 사용 가능한 모델 크기 한계를 13-14B로 거의 두 배 늘리며, 메모리 업그레이드에는 실질적인 가격 프리미엄이 붙습니다.',
          '통합 메모리는 구매 후 업그레이드할 수 없으므로, "나중에 업그레이드"할 계획을 세우기보다 지금 목표 모델 크기에 맞는 구성을 구매하십시오 — MacBook Air에는 그런 옵션이 존재하지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MacBook Air는 긴 LLM 추론 중에 스로틀링됩니까?',
            a: '그럴 수 있습니다. MacBook Air는 팬리스이므로, 긴 추론 세션을 포함한 지속적인 고강도 워크로드는 10-15분 후 약간의 열 스로틀링을 유발할 수 있습니다. 짧은 채팅 상호작용은 영향을 받지 않으며, 지속적인 배치 처리에서 이 문제가 드러납니다.',
          },
          {
            q: '8GB 통합 메모리로 로컬 LLM을 구동하기에 충분합니까?',
            a: '매우 작은 모델(Q4에서 3B 이하)만 8GB Mac에서 macOS와 함께 편안하게 맞습니다. 일반적인 로컬 LLM 사용에는 16GB가 현실적인 최소치입니다.',
          },
          {
            q: '로컬 LLM을 위해 대신 MacBook Pro를 구매해야 합니까?',
            a: '지속적인 워크로드를 위한 능동 냉각이 필요하거나 MacBook Air 라인업이 제공하지 않는 더 높은 통합 메모리 한계(M4 Max 구성에서 최대 128GB)를 원하는 경우에만 그렇습니다.',
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
          '[MacBook에서 eGPU로 로컬 LLM을 구동할 수 있는가?](/prompt-bites/best-egpu-ollama-macbook) — Apple Silicon에서 eGPU가 작동하지 않는 이유',
          '[Mac Mini M4는 로컬 LLM에 좋은가?](/prompt-bites/mac-mini-m4-local-llm) — 더 많은 메모리 여유를 가진 데스크톱 대안',
          '[32GB 통합 메모리 Mac을 위한 최적의 로컬 LLM](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — 다음 등급',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
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
    title: '没有 eGPU 的 MacBook Air 最佳本地 LLM 是什么？',
    seoTitle: '2026 年 MacBook Air（无 eGPU）最佳本地 LLM',
    metaDescription: 'MacBook Air 最佳本地 LLM：16GB 统一内存下 Q4 的 7B-8B 模型，24GB 下可运行 13-14B。Apple Silicon 上 eGPU 无效——统一内存是唯一的升级杠杆。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 8B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['MacBook Air M3', 'MacBook Air M4'],
    educationalLevel: 'Beginner',
    audience: '误以为需要 eGPU 才能在本地运行 LLM 的 MacBook Air 用户',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-egpu-ollama-macbook', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>MacBook Air 的最佳本地 LLM 是 8B 模型——Qwen3 8B 或 Llama 3.3 8B——在 16 GB 统一内存下以 Q4 量化运行，或在 24 GB 配置下运行 13-14B 模型。</strong>eGPU 帮不上忙：Apple Silicon 没有通往外接 GPU 的 PCIe 通路，因此统一内存容量是 MacBook Air 买家唯一真正的升级杠杆。',
    toc: [
      { label: '最佳选择：16 GB 下的 8B 模型，24 GB 下的 13-14B', anchor: '#best-pick' },
      { label: '16 GB 对比 24 GB MacBook Air 的本地 LLM 表现', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: 'MacBook Air 的最佳本地 LLM 是什么？',
        answer: '对于 16GB 统一内存的 MacBook Air，Qwen3 8B 或 Llama 3.3 8B 的 Q4 版本是最佳本地 LLM。24GB 内存则可升级到 13-14B 模型。eGPU 在 Apple Silicon 上无法提供帮助。',
        bullets: [
          '16 GB MacBook Air：通过 Ollama 或 MLX 以 Q4_K_M 运行 8B 模型（Qwen3 8B、Llama 3.3 8B）。',
          '24 GB MacBook Air：升级到 13-14B 模型的 Q4 版本，并留有充足空间。',
          'Apple Silicon 上没有 eGPU 可用——Ollama 只通过苹果自家的 Metal 后端加速，而非第三方 GPU。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '16 GB MacBook Air：运行 Q4 版本的 Qwen3 8B 或 Llama 3.3 8B——这一档位的最佳选择',
          '24 GB MacBook Air：升级到 13-14B 模型的 Q4 版本，留有真正的余量',
          'Apple Silicon 上没有 eGPU 可用——Ollama 只通过 Metal 加速，统一内存是唯一的升级杠杆',
          'MacBook Air 无风扇——长时间持续推理会出现轻微的热降频，属正常现象',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：16 GB 下的 8B 模型，24 GB 下的 13-14B',
        content: [
          '<strong>在 16 GB 的 MacBook Air 上，最佳本地 LLM 是 8B 模型——Qwen3 8B 或 Llama 3.3 8B——采用 Q4_K_M 量化，大约需要 5-6 GB，为 macOS 和浏览器留有充足余量。</strong>这两个模型通过 Ollama 或苹果的 MLX 框架都能良好运行，MLX 是专门针对 Apple Silicon 统一内存架构优化的框架。',
          '如果你的 MacBook Air 配置了 24 GB 统一内存，可以升级到 13-14B 模型的 Q4 版本——大约 9-10 GB——还剩余大量空间。统一内存意味着没有独立的显存上限：内存由 CPU 和 GPU 共享，因此规格表上的内存数字就是决定 LLM 规模的关键数字。',
          'eGPU 不会改变上述任何计算。Apple Silicon 没有通往外接 GPU 的 PCIe 通路，即使在物理上能连接 eGPU 的场合（这只在较老的 Intel Mac 上可行，Apple Silicon 上不行），Ollama 也只会将推理任务分派给苹果自家的 Metal 后端。MacBook Air 上唯一真正的升级杠杆是在购买时选择更大的统一内存——之后无法再加装。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Air%20M4%2024GB',
            productName: 'MacBook Air M4（24GB 统一内存）',
            productCategory: 'laptop',
            priceRange: '1500-1800',
            label: '在 Amazon 查看 MacBook Air M4 24GB 配置',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '16 GB 对比 24 GB MacBook Air 的本地 LLM 表现',
        content: [
          '16 GB 配置是日常使用中舒适运行 8B 推理的实际最低要求。24 GB 配置将可用模型规模上限大致翻倍到 13-14B，但内存升级需要真实的价格溢价。',
          '由于购买后无法升级统一内存，请现在就购买与你目标模型规模匹配的配置，而不要指望「以后再升级」——MacBook Air 不存在这个选项。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'MacBook Air 在长时间 LLM 推理中会降频吗？',
            a: '可能会。MacBook Air 无风扇，因此持续的重负载工作——包括长时间的推理会话——可能在 10-15 分钟后触发轻微的热降频。短暂的聊天交互不受影响；持续的批量处理才会显现这一问题。',
          },
          {
            q: '8 GB 统一内存足够运行任何本地 LLM 吗？',
            a: '只有非常小的模型（3B 及以下的 Q4）能在 8 GB Mac 上与 macOS 一起舒适运行。对于通用的本地 LLM 使用，16 GB 才是实际的最低要求。',
          },
          {
            q: '我应该改买 MacBook Pro 用于本地 LLM 吗？',
            a: '只有在你需要主动散热来支持持续负载,或需要 MacBook Air 系列不提供的更高统一内存上限（M4 Max 配置最高可达 128 GB）时才值得。',
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
          '[MacBook 能用 eGPU 运行本地 LLM 吗？](/prompt-bites/best-egpu-ollama-macbook) — 为什么 eGPU 在 Apple Silicon 上不起作用',
          '[Mac Mini M4 适合本地 LLM 吗？](/prompt-bites/mac-mini-m4-local-llm) — 内存余量更大的桌面替代方案',
          '[32GB 统一内存 Mac 的最佳本地 LLM](/prompt-bites/best-local-llm-32gb-unified-memory-mac) — 下一档位',
        ],
      },
    },
  },
}
