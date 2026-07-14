import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best RTX 4090 Setup for Running 70B Models?',
    seoTitle: 'RTX 4090 Setup for 70B Models 2026 | Prompt Bites',
    metaDescription: 'A single RTX 4090 (24GB) cannot fully fit a 70B model — it needs ~40GB at Q4. Two RTX 4090s (48GB) or CPU offload are the realistic 70B setups.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'Enthusiasts planning a 70B-capable local LLM build around RTX 4090s',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>A single RTX 4090 (24 GB) cannot fully fit a 70B model — it needs roughly 40 GB at Q4 quantization.</strong> The realistic setups are: two RTX 4090s (48 GB combined, via tensor-parallel serving), one RTX 4090 running the model at aggressive Q2_K quantization (fits, but with a visible quality drop), or one RTX 4090 with CPU/RAM offload for the layers that don\'t fit (works, but much slower).',
    toc: [
      { label: 'Best Pick: Two RTX 4090s (48 GB Combined)', anchor: '#best-pick' },
      { label: 'Dual RTX 4090 vs Single RTX 4090 + Quantization', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What GPU setup do you need to run a 70B model with an RTX 4090?',
        answer: 'A single RTX 4090 cannot fully fit a 70B model — it needs ~40 GB at Q4 vs the 4090\'s 24 GB. Two RTX 4090s (48 GB combined), one 4090 at Q2_K, or CPU offload are the three realistic options.',
        bullets: [
          'A 70B model needs ~40 GB of VRAM at Q4_K_M — well above one RTX 4090\'s 24 GB.',
          'Two RTX 4090s (48 GB combined) via vLLM or llama.cpp tensor-parallel is the cleanest full-quality path.',
          'One RTX 4090 alone can run 70B only at Q2_K quantization, which visibly degrades output quality versus Q4.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A 70B model needs ~40 GB of VRAM at Q4 — a single RTX 4090\'s 24 GB is not enough',
          'Best full-quality setup: two RTX 4090s (48 GB combined) via vLLM or llama.cpp tensor-parallel',
          'Single-4090 workaround: Q2_K quantization fits in 24 GB but visibly degrades output quality',
          'CPU/RAM offload (llama.cpp `--n-gpu-layers`) works on one 4090 but drops throughput significantly',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Two RTX 4090s (48 GB Combined)',
        content: [
          '<strong>The best RTX 4090 setup for running a 70B model at full quality is two RTX 4090s combined for 48 GB of usable VRAM, run via vLLM or llama.cpp\'s tensor-parallel mode.</strong> A 70B model needs roughly 40 GB at Q4_K_M — 48 GB clears that comfortably, with room for a reasonable context window.',
          'This requires a motherboard and case with two PCIe x16 slots (ideally both at x8 or better bandwidth), a power supply rated for at least 1200 W, and software that supports multi-GPU tensor splitting — both vLLM and recent llama.cpp builds support this via `--tensor-split` or equivalent flags.',
          'If a second RTX 4090 is not in budget, the single-GPU fallback is Q2_K quantization, which shrinks a 70B model to roughly 22-24 GB — just barely fitting one 4090, but with a clearly noticeable drop in output coherence compared to Q4. CPU/RAM offload (splitting layers between GPU and system RAM) is the other single-GPU option; it works but throughput drops sharply, often to single-digit tokens per second.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'Check RTX 4090 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: 'Check 1200W PSU price on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Dual RTX 4090 vs Single RTX 4090 + Quantization',
        content: [
          'Dual RTX 4090 gives full Q4 quality at real cost (a second card plus a beefier PSU and case). Single RTX 4090 + Q2_K keeps the build to one card but trades away noticeable output quality on tasks that need precision, like code generation or math.',
          'A middle path: run a 32B model instead of 70B on a single RTX 4090 at full Q4 quality (fits in 24 GB with room to spare) — for many tasks, a well-chosen 32B model closes most of the gap with a quality-degraded 70B.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can NVLink combine two RTX 4090s\' VRAM?',
            a: 'No. The RTX 4090 does not support NVLink (NVIDIA removed it from this generation\'s consumer cards). Multi-GPU VRAM pooling for LLM inference works through software-level tensor-parallel splitting in tools like vLLM, not a hardware bridge.',
          },
          {
            q: 'Is a 70B model at Q2_K actually usable?',
            a: 'It is usable for casual chat but shows clear degradation on tasks requiring precision — math, code, and multi-step reasoning suffer the most. For those tasks, a 32B model at Q4 on a single card often outperforms a 70B model at Q2_K.',
          },
          {
            q: 'What motherboard do I need for two RTX 4090s?',
            a: 'A board with two PCIe x16 slots, ideally both wired for at least x8 electrical lanes (check the manual — many consumer boards drop the second slot to x4). A workstation or HEDT-class board avoids this bottleneck entirely.',
          },
          {
            q: 'Does dual-GPU inference double the tokens per second?',
            a: 'No — tensor-parallel inference splits the model across GPUs to fit it, but adds inter-GPU communication overhead. Expect faster inference than a heavily-offloaded single GPU, but not a clean 2x speedup over a model that already fit on one card.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[How Much VRAM for a 70B Model?](/prompt-bites/vram-for-70b-model) — the underlying VRAM math',
          '[Best GPU Under $1,000 for Local LLM Inference](/prompt-bites/best-gpu-under-1000-local-llm) — the single-4090 tier',
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — full budget-tier comparison',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    title: 'أفضل إعداد RTX 4090 لتشغيل نماذج 70B؟',
    seoTitle: 'إعداد RTX 4090 لنماذج 70B 2026 | Prompt Bites',
    metaDescription: 'بطاقة RTX 4090 واحدة (24GB) لا يمكنها استيعاب نموذج 70B بالكامل — يحتاج إلى ~40GB بدقة Q4. بطاقتا RTX 4090 (48GB) أو تفريغ CPU هما الإعدادان الواقعيان لتشغيل 70B.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'الهواة المخططون لبناء قادر على تشغيل نماذج 70B حول بطاقات RTX 4090',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>بطاقة RTX 4090 واحدة (24 GB) لا يمكنها استيعاب نموذج 70B بالكامل — تحتاج إلى حوالي 40 GB بدقة Q4.</strong> الإعدادات الواقعية هي: بطاقتا RTX 4090 (48 GB مجتمعة، عبر تقديم متوازي الموتّرات)، بطاقة RTX 4090 واحدة تشغّل النموذج بتكميم Q2_K العدواني (يستوعب، لكن مع انخفاض ملحوظ في الجودة)، أو بطاقة RTX 4090 واحدة مع تفريغ إلى CPU/RAM للطبقات التي لا تستوعب (يعمل، لكن أبطأ بكثير).',
    toc: [
      { label: 'أفضل اختيار: بطاقتا RTX 4090 (48 GB مجتمعة)', anchor: '#best-pick' },
      { label: 'بطاقتا RTX 4090 مقابل بطاقة RTX 4090 واحدة + تكميم', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما إعداد GPU المطلوب لتشغيل نموذج 70B مع RTX 4090؟',
        answer: 'بطاقة RTX 4090 واحدة لا يمكنها استيعاب نموذج 70B بالكامل — تحتاج ~40 GB بدقة Q4 مقابل 24 GB لبطاقة 4090 الواحدة. بطاقتا RTX 4090 (48 GB مجتمعة)، أو بطاقة 4090 واحدة بدقة Q2_K، أو تفريغ CPU هي الخيارات الثلاثة الواقعية.',
        bullets: [
          'نموذج 70B يحتاج ~40 GB من VRAM بدقة Q4_K_M — أعلى بكثير من 24 GB لبطاقة RTX 4090 الواحدة.',
          'بطاقتا RTX 4090 (48 GB مجتمعة) عبر vLLM أو llama.cpp بوضع متوازي الموتّرات هو الطريق الأنظف لجودة كاملة.',
          'بطاقة RTX 4090 واحدة يمكنها تشغيل 70B فقط بدقة Q2_K، ما يقلل بشكل ملحوظ من جودة المخرجات مقارنة بـ Q4.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'نموذج 70B يحتاج ~40 GB من VRAM بدقة Q4 — 24 GB لبطاقة RTX 4090 الواحدة غير كافية',
          'أفضل إعداد بجودة كاملة: بطاقتا RTX 4090 (48 GB مجتمعة) عبر vLLM أو llama.cpp بوضع متوازي الموتّرات',
          'حل بديل ببطاقة واحدة: تكميم Q2_K يستوعب في 24 GB لكنه يقلل بشكل ملحوظ من جودة المخرجات',
          'تفريغ CPU/RAM (خيار `--n-gpu-layers` في llama.cpp) يعمل على بطاقة 4090 واحدة لكنه يقلل الإنتاجية بشكل كبير',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: بطاقتا RTX 4090 (48 GB مجتمعة)',
        content: [
          '<strong>أفضل إعداد RTX 4090 لتشغيل نموذج 70B بجودة كاملة هو بطاقتا RTX 4090 مجتمعتان لتوفير 48 GB من VRAM القابل للاستخدام، تُشغَّلان عبر vLLM أو وضع متوازي الموتّرات في llama.cpp.</strong> يحتاج نموذج 70B إلى حوالي 40 GB بدقة Q4_K_M — تغطي 48 GB ذلك بارتياح، مع مساحة لنافذة سياق معقولة.',
          'يتطلب هذا لوحة أم وهيكلًا بفتحتي PCIe x16 (يفضل أن تكونا بعرض نطاق x8 على الأقل)، ومزود طاقة مصنّف بـ1200 واط على الأقل، وبرمجيات تدعم تقسيم الموتّرات عبر بطاقات متعددة — يدعم كل من vLLM وإصدارات llama.cpp الحديثة هذا عبر خيار `--tensor-split` أو ما يعادله.',
          'إذا لم تكن بطاقة RTX 4090 ثانية ضمن الميزانية، فإن الحل البديل ببطاقة واحدة هو تكميم Q2_K، الذي يقلص نموذج 70B إلى حوالي 22-24 GB — يستوعب بالكاد في بطاقة 4090 واحدة، لكن مع انخفاض ملحوظ بوضوح في تماسك المخرجات مقارنة بـ Q4. تفريغ CPU/RAM (تقسيم الطبقات بين GPU وذاكرة النظام) هو الخيار الآخر ببطاقة واحدة؛ يعمل لكن الإنتاجية تنخفض بشكل حاد، غالبًا إلى أرقام أحادية من الرموز في الثانية.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'تحقق من سعر RTX 4090 على أمازون',
          },
          {
            url: 'https://www.amazon.com/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: 'تحقق من سعر مزود طاقة 1200 واط على أمازون',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'بطاقتا RTX 4090 مقابل بطاقة RTX 4090 واحدة + تكميم',
        content: [
          'توفّر البطاقتان RTX 4090 جودة Q4 كاملة بتكلفة حقيقية (بطاقة ثانية بالإضافة إلى مزود طاقة وهيكل أقوى). بينما تحافظ بطاقة RTX 4090 واحدة + Q2_K على البناء ببطاقة واحدة لكنها تضحي بجودة مخرجات ملحوظة في المهام التي تحتاج دقة، مثل توليد الأكواد أو الرياضيات.',
          'طريق وسط: تشغيل نموذج 32B بدلًا من 70B على بطاقة RTX 4090 واحدة بجودة Q4 كاملة (يستوعب في 24 GB مع هامش متبقٍّ) — للعديد من المهام، يغلق نموذج 32B مختار جيدًا معظم الفجوة مع نموذج 70B منخفض الجودة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن لتقنية NVLink دمج ذاكرة VRAM لبطاقتي RTX 4090؟',
            a: 'لا. لا تدعم RTX 4090 تقنية NVLink (أزالتها NVIDIA من بطاقات هذا الجيل الاستهلاكية). يعمل تجميع VRAM متعدد GPU لاستدلال LLM عبر تقسيم متوازي للموتّرات على مستوى البرمجيات في أدوات مثل vLLM، وليس عبر جسر عتادي.',
          },
          {
            q: 'هل نموذج 70B بدقة Q2_K قابل للاستخدام فعليًا؟',
            a: 'قابل للاستخدام في الدردشة العادية لكنه يُظهر تدهورًا واضحًا في المهام التي تتطلب دقة — الرياضيات والأكواد والاستدلال متعدد الخطوات تتضرر أكثر. لهذه المهام، غالبًا ما يتفوق نموذج 32B بدقة Q4 على بطاقة واحدة على نموذج 70B بدقة Q2_K.',
          },
          {
            q: 'ما لوحة الأم التي أحتاجها لبطاقتي RTX 4090؟',
            a: 'لوحة بفتحتي PCIe x16، يُفضّل أن تكونا موصولتين بحدٍ أدنى x8 من المسارات الكهربائية (تحقق من الدليل — تُنزّل كثير من اللوحات الاستهلاكية الفتحة الثانية إلى x4). تتجنب لوحة من فئة محطات العمل أو HEDT هذا الاختناق تمامًا.',
          },
          {
            q: 'هل يضاعف الاستدلال ثنائي GPU عدد الرموز في الثانية؟',
            a: 'لا — يقسّم الاستدلال متوازي الموتّرات النموذج عبر بطاقات GPU لاستيعابه، لكنه يضيف عبء اتصال بين البطاقات. توقع استدلالًا أسرع من بطاقة واحدة مثقلة بالتفريغ، لكن ليس تسريعًا مضاعفًا نظيفًا مقارنة بنموذج يستوعب أصلًا على بطاقة واحدة.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[كم VRAM يلزم لنموذج 70B؟](/prompt-bites/vram-for-70b-model) — حساب VRAM الأساسي',
          '[أفضل GPU بأقل من 1,000 دولار لتشغيل LLM محليًا](/prompt-bites/best-gpu-under-1000-local-llm) — فئة بطاقة 4090 الواحدة',
          '[دليل شراء GPU لتشغيل LLM محليًا 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — المقارنة الكاملة لفئات الميزانية',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Das beste RTX-4090-Setup für den Betrieb von 70B-Modellen?',
    seoTitle: 'RTX-4090-Setup für 70B-Modelle 2026 | Prompt Bites',
    metaDescription: 'Eine einzelne RTX 4090 (24 GB) kann ein 70B-Modell nicht vollständig fassen — es benötigt ~40 GB bei Q4. Zwei RTX 4090 (48 GB) oder CPU-Offload sind die realistischen 70B-Setups.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'Enthusiasten, die einen 70B-fähigen lokalen LLM-Build rund um RTX-4090-Karten planen',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Eine einzelne RTX 4090 (24 GB) kann ein 70B-Modell nicht vollständig fassen — es benötigt rund 40 GB bei Q4-Quantisierung.</strong> Die realistischen Setups sind: zwei RTX 4090 (48 GB kombiniert, über tensor-paralleles Serving), eine RTX 4090 mit dem Modell bei aggressiver Q2_K-Quantisierung (passt, aber mit sichtbarem Qualitätsverlust) oder eine RTX 4090 mit CPU/RAM-Offload für die nicht passenden Layer (funktioniert, aber deutlich langsamer).',
    toc: [
      { label: 'Beste Wahl: Zwei RTX 4090 (48 GB kombiniert)', anchor: '#best-pick' },
      { label: 'Dual-RTX-4090 vs. einzelne RTX 4090 + Quantisierung', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Welches GPU-Setup braucht man, um mit einer RTX 4090 ein 70B-Modell zu betreiben?',
        answer: 'Eine einzelne RTX 4090 kann ein 70B-Modell nicht vollständig fassen — es benötigt ~40 GB bei Q4 gegenüber den 24 GB der 4090. Zwei RTX 4090 (48 GB kombiniert), eine 4090 bei Q2_K oder CPU-Offload sind die drei realistischen Optionen.',
        bullets: [
          'Ein 70B-Modell benötigt ~40 GB VRAM bei Q4_K_M — deutlich über den 24 GB einer RTX 4090.',
          'Zwei RTX 4090 (48 GB kombiniert) über vLLM oder llama.cpp tensor-parallel ist der sauberste Weg mit voller Qualität.',
          'Eine einzelne RTX 4090 kann 70B nur bei Q2_K-Quantisierung betreiben, was die Ausgabequalität gegenüber Q4 sichtbar mindert.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ein 70B-Modell benötigt ~40 GB VRAM bei Q4 — die 24 GB einer einzelnen RTX 4090 reichen nicht',
          'Bestes Setup mit voller Qualität: zwei RTX 4090 (48 GB kombiniert) über vLLM oder llama.cpp tensor-parallel',
          'Workaround mit einer 4090: Q2_K-Quantisierung passt in 24 GB, mindert die Ausgabequalität aber sichtbar',
          'CPU/RAM-Offload (llama.cpp `--n-gpu-layers`) funktioniert auf einer 4090, senkt den Durchsatz aber deutlich',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Zwei RTX 4090 (48 GB kombiniert)',
        content: [
          '<strong>Das beste RTX-4090-Setup, um ein 70B-Modell in voller Qualität zu betreiben, sind zwei kombinierte RTX 4090 mit 48 GB nutzbarem VRAM, betrieben über vLLM oder den tensor-parallelen Modus von llama.cpp.</strong> Ein 70B-Modell benötigt rund 40 GB bei Q4_K_M — 48 GB decken das komfortabel ab, mit Platz für ein angemessenes Kontextfenster.',
          'Das erfordert ein Mainboard und Gehäuse mit zwei PCIe-x16-Slots (idealerweise beide mit mindestens x8-Bandbreite), ein Netzteil mit mindestens 1.200 W und Software, die Multi-GPU-Tensor-Splitting unterstützt — sowohl vLLM als auch aktuelle llama.cpp-Builds unterstützen dies über `--tensor-split` oder vergleichbare Flags.',
          'Ist eine zweite RTX 4090 nicht im Budget, ist Q2_K-Quantisierung der Single-GPU-Ausweg — sie schrumpft ein 70B-Modell auf rund 22-24 GB und passt damit gerade so auf eine 4090, allerdings mit deutlich spürbarem Rückgang der Ausgabekohärenz gegenüber Q4. CPU/RAM-Offload (Aufteilung der Layer zwischen GPU und System-RAM) ist die andere Single-GPU-Option; sie funktioniert, aber der Durchsatz sinkt stark, oft auf einstellige Tokens pro Sekunde.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'RTX 4090 Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: '1200-W-Netzteil-Preis bei Amazon prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Dual-RTX-4090 vs. einzelne RTX 4090 + Quantisierung',
        content: [
          'Dual-RTX-4090 liefert volle Q4-Qualität zu echten Kosten (eine zweite Karte plus stärkeres Netzteil und Gehäuse). Einzelne RTX 4090 + Q2_K hält den Build auf eine Karte beschränkt, opfert aber merkliche Ausgabequalität bei Aufgaben, die Präzision erfordern, etwa Codegenerierung oder Mathematik.',
          'Ein Mittelweg: Statt 70B ein 32B-Modell auf einer einzelnen RTX 4090 in voller Q4-Qualität betreiben (passt mit Reserve in 24 GB) — für viele Aufgaben schließt ein gut gewähltes 32B-Modell einen Großteil der Lücke zu einem qualitätsgeminderten 70B.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann NVLink den VRAM zweier RTX 4090 kombinieren?',
            a: 'Nein. Die RTX 4090 unterstützt kein NVLink (NVIDIA hat es aus dieser Generation der Consumer-Karten entfernt). VRAM-Pooling für mehrere GPUs bei LLM-Inferenz funktioniert über softwareseitiges tensor-paralleles Splitting in Tools wie vLLM, nicht über eine Hardware-Brücke.',
          },
          {
            q: 'Ist ein 70B-Modell bei Q2_K tatsächlich nutzbar?',
            a: 'Es ist für lockeren Chat nutzbar, zeigt aber klare Qualitätseinbußen bei Aufgaben, die Präzision erfordern — Mathematik, Code und mehrstufiges Schlussfolgern leiden am meisten. Für solche Aufgaben übertrifft ein 32B-Modell bei Q4 auf einer Karte oft ein 70B-Modell bei Q2_K.',
          },
          {
            q: 'Welches Mainboard brauche ich für zwei RTX 4090?',
            a: 'Ein Board mit zwei PCIe-x16-Slots, idealerweise beide mit mindestens x8 elektrischen Lanes verdrahtet (prüfen Sie das Handbuch — viele Consumer-Boards reduzieren den zweiten Slot auf x4). Ein Workstation- oder HEDT-Board umgeht diesen Flaschenhals komplett.',
          },
          {
            q: 'Verdoppelt Dual-GPU-Inferenz die Tokens pro Sekunde?',
            a: 'Nein — tensor-parallele Inferenz teilt das Modell auf mehrere GPUs auf, um es überhaupt unterzubringen, fügt aber Kommunikations-Overhead zwischen den GPUs hinzu. Erwarten Sie schnellere Inferenz als bei einer stark ausgelagerten einzelnen GPU, aber keine saubere Verdopplung gegenüber einem Modell, das bereits auf eine Karte passte.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Wie viel VRAM braucht ein 70B-Modell?](/prompt-bites/vram-for-70b-model) — die zugrunde liegende VRAM-Rechnung',
          '[Beste GPU unter 1.000 $ für lokale LLM-Inferenz](/prompt-bites/best-gpu-under-1000-local-llm) — die Single-4090-Stufe',
          '[Kompletter GPU-Kaufratgeber für lokale LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — vollständiger Preisklassenvergleich',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Cuál es la Mejor Configuración RTX 4090 para Ejecutar Modelos de 70B?',
    seoTitle: 'Configuración RTX 4090 para Modelos de 70B 2026 | Prompt Bites',
    metaDescription: 'Una sola RTX 4090 (24GB) no puede cargar completamente un modelo de 70B — necesita ~40GB en Q4. Dos RTX 4090 (48GB) o descarga a CPU son las configuraciones realistas.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'Entusiastas que planean una configuración local de LLM capaz de 70B con RTX 4090',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Una sola RTX 4090 (24 GB) no puede cargar completamente un modelo de 70B — necesita aproximadamente 40 GB con cuantización Q4.</strong> Las configuraciones realistas son: dos RTX 4090 (48 GB combinados, mediante servicio tensor-paralelo), una RTX 4090 ejecutando el modelo con cuantización agresiva Q2_K (cabe, pero con una caída de calidad visible), o una RTX 4090 con descarga a CPU/RAM para las capas que no caben (funciona, pero mucho más lento).',
    toc: [
      { label: 'Mejor Opción: Dos RTX 4090 (48 GB Combinados)', anchor: '#best-pick' },
      { label: 'RTX 4090 Dual vs RTX 4090 Individual + Cuantización', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Qué configuración de GPU necesitas para ejecutar un modelo de 70B con una RTX 4090?',
        answer: 'Una sola RTX 4090 no puede cargar completamente un modelo de 70B — necesita ~40 GB en Q4 frente a los 24 GB de la 4090. Dos RTX 4090 (48 GB combinados), una 4090 en Q2_K, o descarga a CPU son las tres opciones realistas.',
        bullets: [
          'Un modelo de 70B necesita ~40 GB de VRAM en Q4_K_M — muy por encima de los 24 GB de una sola RTX 4090.',
          'Dos RTX 4090 (48 GB combinados) vía vLLM o tensor-paralelo de llama.cpp es el camino más limpio para calidad completa.',
          'Una sola RTX 4090 solo puede ejecutar un 70B con cuantización Q2_K, lo que degrada visiblemente la calidad de salida frente a Q4.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modelo de 70B necesita ~40 GB de VRAM en Q4 — los 24 GB de una sola RTX 4090 no son suficientes',
          'Mejor configuración de calidad completa: dos RTX 4090 (48 GB combinados) vía vLLM o tensor-paralelo de llama.cpp',
          'Solución con una sola 4090: la cuantización Q2_K cabe en 24 GB pero degrada visiblemente la calidad de salida',
          'La descarga a CPU/RAM (`--n-gpu-layers` de llama.cpp) funciona en una 4090 pero reduce significativamente el rendimiento',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Dos RTX 4090 (48 GB Combinados)',
        content: [
          '<strong>La mejor configuración RTX 4090 para ejecutar un modelo de 70B con calidad completa son dos RTX 4090 combinadas para 48 GB de VRAM utilizable, ejecutadas mediante vLLM o el modo tensor-paralelo de llama.cpp.</strong> Un modelo de 70B necesita aproximadamente 40 GB en Q4_K_M — 48 GB cubre eso cómodamente, con espacio para una ventana de contexto razonable.',
          'Esto requiere una placa base y una caja con dos ranuras PCIe x16 (idealmente ambas con al menos x8 de ancho de banda eléctrico), una fuente de poder de al menos 1200 W, y software que soporte división tensor multi-GPU — tanto vLLM como las compilaciones recientes de llama.cpp soportan esto mediante `--tensor-split` u opciones equivalentes.',
          'Si una segunda RTX 4090 no está en el presupuesto, la alternativa de una sola GPU es la cuantización Q2_K, que reduce un modelo de 70B a aproximadamente 22-24 GB — apenas cabiendo en una 4090, pero con una caída claramente notable en la coherencia de salida en comparación con Q4. La descarga a CPU/RAM (dividiendo las capas entre GPU y RAM del sistema) es la otra opción con una sola GPU; funciona, pero el rendimiento cae drásticamente, a menudo a un solo dígito de tokens por segundo.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'Consulta el precio de la RTX 4090 en Amazon',
          },
          {
            url: 'https://www.amazon.es/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: 'Consulta el precio de la fuente de 1200W en Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 4090 Dual vs RTX 4090 Individual + Cuantización',
        content: [
          'Dos RTX 4090 dan calidad Q4 completa a un costo real (una segunda tarjeta más una fuente de poder y una caja más robustas). Una sola RTX 4090 + Q2_K mantiene la construcción en una sola tarjeta, pero sacrifica una calidad de salida notable en tareas que requieren precisión, como generación de código o matemáticas.',
          'Un camino intermedio: ejecutar un modelo de 32B en lugar de 70B en una sola RTX 4090 con calidad Q4 completa (cabe en 24 GB con margen de sobra) — para muchas tareas, un modelo de 32B bien elegido cierra la mayor parte de la brecha con un 70B degradado en calidad.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Puede NVLink combinar la VRAM de dos RTX 4090?',
            a: 'No. La RTX 4090 no soporta NVLink (NVIDIA lo eliminó de las tarjetas de consumo de esta generación). La agrupación de VRAM multi-GPU para inferencia de LLM funciona mediante división tensor-paralela a nivel de software en herramientas como vLLM, no mediante un puente de hardware.',
          },
          {
            q: '¿Es realmente usable un modelo de 70B en Q2_K?',
            a: 'Es usable para chat casual pero muestra una degradación clara en tareas que requieren precisión — matemáticas, código y razonamiento de varios pasos son los más afectados. Para esas tareas, un modelo de 32B en Q4 en una sola tarjeta a menudo supera a un modelo de 70B en Q2_K.',
          },
          {
            q: '¿Qué placa base necesito para dos RTX 4090?',
            a: 'Una placa con dos ranuras PCIe x16, idealmente ambas cableadas con al menos x8 de líneas eléctricas (revisa el manual — muchas placas de consumo reducen la segunda ranura a x4). Una placa de clase workstation o HEDT evita por completo este cuello de botella.',
          },
          {
            q: '¿La inferencia dual-GPU duplica los tokens por segundo?',
            a: 'No — la inferencia tensor-paralela divide el modelo entre GPUs para que quepa, pero añade sobrecarga de comunicación entre GPUs. Espera una inferencia más rápida que una sola GPU con descarga intensiva, pero no un aumento limpio de 2x sobre un modelo que ya cabía en una sola tarjeta.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Cuánta VRAM Necesitas para un Modelo de 70B?](/prompt-bites/vram-for-70b-model) — la matemática de VRAM subyacente',
          '[Mejor GPU por Menos de $1,000 para Inferencia de LLM Local](/prompt-bites/best-gpu-under-1000-local-llm) — el nivel de una sola 4090',
          '[Guía de Compra de GPU para LLMs Locales 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — comparación completa por niveles de presupuesto',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Meilleure configuration RTX 4090 pour faire tourner des modèles 70B ?',
    seoTitle: 'Configuration RTX 4090 pour modèles 70B 2026',
    metaDescription: 'Une seule RTX 4090 (24 Go) ne peut pas contenir entièrement un modèle 70B — il faut ~40 Go en Q4. Deux RTX 4090 (48 Go) ou un déchargement CPU sont les configurations 70B réalistes.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'Passionnés planifiant une configuration LLM locale compatible 70B autour de RTX 4090',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Une seule RTX 4090 (24 Go) ne peut pas contenir entièrement un modèle 70B — il lui faut environ 40 Go en quantification Q4.</strong> Les configurations réalistes sont : deux RTX 4090 (48 Go combinés, via un service en parallélisme tensoriel), une RTX 4090 exécutant le modèle en quantification agressive Q2_K (ça tient, mais avec une baisse de qualité visible), ou une RTX 4090 avec déchargement CPU/RAM pour les couches qui ne tiennent pas (ça fonctionne, mais bien plus lentement).',
    toc: [
      { label: 'Meilleur choix : deux RTX 4090 (48 Go combinés)', anchor: '#best-pick' },
      { label: 'Deux RTX 4090 vs une RTX 4090 + quantification', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quelle configuration GPU faut-il pour faire tourner un modèle 70B avec une RTX 4090 ?',
        answer: 'Une seule RTX 4090 ne peut pas contenir entièrement un modèle 70B — il lui faut ~40 Go en Q4 contre 24 Go pour la 4090. Deux RTX 4090 (48 Go combinés), une 4090 en Q2_K, ou un déchargement CPU sont les trois options réalistes.',
        bullets: [
          'Un modèle 70B nécessite ~40 Go de VRAM en Q4_K_M — bien au-dessus des 24 Go d\'une seule RTX 4090.',
          'Deux RTX 4090 (48 Go combinés) via vLLM ou llama.cpp en parallélisme tensoriel est la voie la plus propre en pleine qualité.',
          'Une seule RTX 4090 ne peut faire tourner un 70B qu\'en quantification Q2_K, qui dégrade visiblement la qualité de sortie par rapport à Q4.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modèle 70B nécessite ~40 Go de VRAM en Q4 — les 24 Go d\'une seule RTX 4090 ne suffisent pas',
          'Meilleure configuration en pleine qualité : deux RTX 4090 (48 Go combinés) via vLLM ou llama.cpp en parallélisme tensoriel',
          'Solution de contournement mono-4090 : la quantification Q2_K tient dans 24 Go mais dégrade visiblement la qualité de sortie',
          'Le déchargement CPU/RAM (`--n-gpu-layers` de llama.cpp) fonctionne sur une seule 4090 mais réduit fortement le débit',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : deux RTX 4090 (48 Go combinés)',
        content: [
          '<strong>La meilleure configuration RTX 4090 pour faire tourner un modèle 70B en pleine qualité consiste en deux RTX 4090 combinées pour 48 Go de VRAM utilisable, exécutées via vLLM ou le mode parallélisme tensoriel de llama.cpp.</strong> Un modèle 70B nécessite environ 40 Go en Q4_K_M — 48 Go couvrent cela confortablement, avec de la marge pour une fenêtre de contexte raisonnable.',
          'Cela nécessite une carte mère et un boîtier avec deux emplacements PCIe x16 (idéalement tous deux à x8 ou mieux en bande passante électrique), une alimentation d\'au moins 1200 W, et un logiciel prenant en charge le partage tensoriel multi-GPU — vLLM et les versions récentes de llama.cpp le prennent en charge via `--tensor-split` ou des indicateurs équivalents.',
          'Si une seconde RTX 4090 ne rentre pas dans le budget, la solution de repli mono-GPU est la quantification Q2_K, qui réduit un modèle 70B à environ 22-24 Go — tenant tout juste sur une seule 4090, mais avec une baisse clairement perceptible de la cohérence de sortie par rapport à Q4. Le déchargement CPU/RAM (répartir les couches entre GPU et RAM système) est l\'autre option mono-GPU ; ça fonctionne, mais le débit chute fortement, souvent à un chiffre de tokens par seconde.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'Vérifier le prix de la RTX 4090 sur Amazon',
          },
          {
            url: 'https://www.amazon.fr/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: 'Vérifier le prix de l\'alimentation 1200 W sur Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Deux RTX 4090 vs une RTX 4090 + quantification',
        content: [
          'Deux RTX 4090 offrent une pleine qualité Q4 à un coût réel (une seconde carte plus une alimentation et un boîtier plus robustes). Une RTX 4090 + Q2_K permet de rester sur une seule carte mais sacrifie une qualité de sortie perceptible sur les tâches nécessitant de la précision, comme la génération de code ou les mathématiques.',
          'Une voie intermédiaire : faire tourner un modèle 32B plutôt que 70B sur une seule RTX 4090 en pleine qualité Q4 (tient dans 24 Go avec de la marge) — pour de nombreuses tâches, un modèle 32B bien choisi comble une grande partie de l\'écart avec un 70B à qualité dégradée.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Le NVLink peut-il combiner la VRAM de deux RTX 4090 ?',
            a: 'Non. La RTX 4090 ne prend pas en charge le NVLink (NVIDIA l\'a retiré des cartes grand public de cette génération). La mise en commun de la VRAM multi-GPU pour l\'inférence LLM passe par un partage tensoriel logiciel dans des outils comme vLLM, pas par un pont matériel.',
          },
          {
            q: 'Un modèle 70B en Q2_K est-il réellement utilisable ?',
            a: 'Il est utilisable pour du chat occasionnel mais montre une dégradation nette sur les tâches nécessitant de la précision — mathématiques, code et raisonnement multi-étapes sont les plus touchés. Pour ces tâches, un modèle 32B en Q4 sur une seule carte surpasse souvent un modèle 70B en Q2_K.',
          },
          {
            q: 'Quelle carte mère faut-il pour deux RTX 4090 ?',
            a: 'Une carte avec deux emplacements PCIe x16, idéalement tous deux câblés pour au moins x8 voies électriques (vérifiez le manuel — de nombreuses cartes grand public réduisent le second emplacement à x4). Une carte de classe station de travail ou HEDT évite entièrement ce goulot d\'étranglement.',
          },
          {
            q: 'L\'inférence double-GPU double-t-elle les tokens par seconde ?',
            a: 'Non — l\'inférence en parallélisme tensoriel répartit le modèle entre les GPU pour le faire tenir, mais ajoute une surcharge de communication inter-GPU. Attendez-vous à une inférence plus rapide qu\'un GPU unique fortement déchargé, mais pas à un doublement propre par rapport à un modèle qui tenait déjà sur une seule carte.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Combien de VRAM pour un modèle 70B ?](/prompt-bites/vram-for-70b-model) — le calcul de VRAM sous-jacent',
          '[Meilleur GPU à moins de 1 000 $ pour l\'inférence LLM locale](/prompt-bites/best-gpu-under-1000-local-llm) — le palier mono-4090',
          '[Guide d\'achat GPU pour les LLM locaux 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — comparatif complet par palier de budget',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: '70Bモデルを動かすための最適なRTX 4090セットアップは?',
    seoTitle: '2026年版 70Bモデル向けRTX 4090セットアップ | Prompt Bites',
    metaDescription: '単一のRTX 4090(24GB)は70Bモデルを完全には収められません — Q4で約40GB必要です。2枚のRTX 4090(48GB)かCPUオフロードが現実的な70Bセットアップです。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'RTX 4090を中心に70B対応のローカルLLM構成を計画するエンスージアスト',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>単一のRTX 4090(24GB)は70Bモデルを完全には収められません — Q4量子化で約40GBが必要です。</strong>現実的なセットアップは: 2枚のRTX 4090(テンソル並列サービングで合計48GB)、単一のRTX 4090で積極的なQ2_K量子化のモデルを動かす(収まるが品質の低下が目に見える)、または単一のRTX 4090で収まらないレイヤーをCPU/RAMにオフロードする(動作するがかなり遅い)、の3つです。',
    toc: [
      { label: 'ベストピック: 2枚のRTX 4090(合計48GB)', anchor: '#best-pick' },
      { label: 'デュアルRTX 4090 vs 単一RTX 4090+量子化', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'RTX 4090で70Bモデルを動かすにはどんなGPUセットアップが必要ですか?',
        answer: '単一のRTX 4090は70Bモデルを完全には収められません — Q4で約40GB必要ですが4090は24GBです。2枚のRTX 4090(合計48GB)、単一4090をQ2_Kで動かす、またはCPUオフロードが現実的な3つの選択肢です。',
        bullets: [
          '70Bモデルは Q4_K_Mで約40GBのVRAMが必要 — RTX 4090単体の24GBを大きく上回ります。',
          'vLLMかllama.cppのテンソル並列を使った2枚のRTX 4090(合計48GB)が最もクリーンなフル品質経路です。',
          'RTX 4090単体で70Bを動かせるのはQ2_K量子化のみで、Q4に比べ出力品質が目に見えて低下します。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '70Bモデルは Q4で約40GBのVRAMが必要 — 単一RTX 4090の24GBでは不足',
          '最良のフル品質セットアップ: vLLMかllama.cppのテンソル並列モードによる2枚のRTX 4090(合計48GB)',
          '単一4090での回避策: Q2_K量子化は24GBに収まるが出力品質が目に見えて低下',
          'CPU/RAMオフロード(llama.cppの`--n-gpu-layers`)は単一4090で動作するがスループットが大幅に低下',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: 2枚のRTX 4090(合計48GB)',
        content: [
          '<strong>70Bモデルをフル品質で動かす最適なRTX 4090セットアップは、2枚のRTX 4090を組み合わせて実使用可能な48GBのVRAMとし、vLLMかllama.cppのテンソル並列モードで実行することです。</strong>70Bモデルは Q4_K_Mで約40GB必要で、48GBなら余裕を持ってこれをクリアし、適度なコンテキストウィンドウの余地もあります。',
          'これには2つのPCIe x16スロット(理想的には両方ともx8以上の帯域幅)を備えたマザーボードとケース、最低1200W定格の電源、そしてマルチGPUのテンソル分割をサポートするソフトウェアが必要です — vLLMと最近のllama.cppビルドはどちらも`--tensor-split`などのフラグでこれをサポートしています。',
          '2枚目のRTX 4090が予算に収まらない場合、シングルGPUの代替策はQ2_K量子化で、70Bモデルをおよそ22-24GBまで縮小します — 4090一枚にぎりぎり収まりますが、Q4に比べ出力の一貫性が明らかに低下します。CPU/RAMオフロード(GPUとシステムRAM間でレイヤーを分割する)がもう一つのシングルGPU選択肢です。動作はしますがスループットが急激に低下し、多くの場合1桁のトークン毎秒になります。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'AmazonでRTX 4090の価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: 'Amazonで1200W電源の価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'デュアルRTX 4090 vs 単一RTX 4090+量子化',
        content: [
          'デュアルRTX 4090は実質的なコスト(2枚目のカードに加え、より強力なPSUとケース)で完全なQ4品質を実現します。単一RTX 4090+Q2_Kはビルドを1枚のカードに抑えられますが、コード生成や数学のような精度が必要なタスクで出力品質が目に見えて犠牲になります。',
          '中間的な道: 70Bの代わりに32Bモデルを単一のRTX 4090で完全なQ4品質で動かす(24GBに余裕を持って収まる) — 多くのタスクにおいて、よく選ばれた32Bモデルは品質が劣化した70Bとのギャップの大半を埋めます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'NVLinkで2枚のRTX 4090のVRAMを結合できますか?',
            a: 'できません。RTX 4090はNVLinkに対応していません(NVIDIAはこの世代のコンシューマーカードから削除しました)。LLM推論のマルチGPU VRAMプーリングは、ハードウェアブリッジではなく、vLLMなどのツールにおけるソフトウェアレベルのテンソル並列分割によって機能します。',
          },
          {
            q: 'Q2_Kの70Bモデルは実際に使い物になりますか?',
            a: 'カジュアルなチャットには使えますが、精度を要するタスク — 数学、コード、多段階の推論 — で明らかな劣化が見られます。これらのタスクでは、単一カードでのQ4の32Bモデルの方がQ2_Kの70Bモデルより優れていることが多いです。',
          },
          {
            q: '2枚のRTX 4090にはどんなマザーボードが必要ですか?',
            a: '2つのPCIe x16スロットを備え、理想的には両方とも最低x8の電気的レーンで配線されたボードです(マニュアルを確認してください — 多くのコンシューマーボードは2番目のスロットをx4に落とします)。ワークステーションやHEDTクラスのボードはこのボトルネックを完全に回避します。',
          },
          {
            q: 'デュアルGPU推論はトークン毎秒を2倍にしますか?',
            a: 'いいえ — テンソル並列推論はモデルを収めるためにGPU間で分割しますが、GPU間通信のオーバーヘッドが加わります。大幅にオフロードされた単一GPUより高速な推論は期待できますが、1枚のカードに既に収まっていたモデルに対するクリーンな2倍の高速化にはなりません。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[70BモデルにどれだけのVRAMが必要?](/prompt-bites/vram-for-70b-model) — VRAM計算の基礎',
          '[ローカルLLM推論に最適な1,000ドル以下のGPU](/prompt-bites/best-gpu-under-1000-local-llm) — 単一4090の層',
          '[2026年版 ローカルLLM向けGPU購入ガイド](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 予算別の全体比較',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    title: '70B 모델 구동을 위한 최적의 RTX 4090 설정은?',
    seoTitle: '70B 모델을 위한 RTX 4090 설정 2026 | Prompt Bites',
    metaDescription: '단일 RTX 4090(24GB)은 70B 모델을 완전히 수용할 수 없습니다 — Q4에서 약 40GB가 필요합니다. 두 대의 RTX 4090(48GB)이나 CPU 오프로드가 현실적인 70B 설정입니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'RTX 4090을 중심으로 70B급 로컬 LLM 구성을 계획하는 애호가',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>단일 RTX 4090(24GB)은 70B 모델을 완전히 수용할 수 없습니다 — Q4 양자화에서 약 40GB가 필요합니다.</strong> 현실적인 설정은 다음과 같습니다: 텐서 병렬 서빙을 통한 두 대의 RTX 4090(합산 48GB), 공격적인 Q2_K 양자화로 단일 RTX 4090에서 모델을 구동(맞지만 품질 저하가 눈에 띔), 또는 맞지 않는 레이어를 위한 CPU/RAM 오프로드가 있는 단일 RTX 4090(작동하지만 훨씬 느림).',
    toc: [
      { label: '최적의 선택: 두 대의 RTX 4090(합산 48GB)', anchor: '#best-pick' },
      { label: '듀얼 RTX 4090 대 단일 RTX 4090 + 양자화', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'RTX 4090으로 70B 모델을 구동하려면 어떤 GPU 설정이 필요합니까?',
        answer: '단일 RTX 4090은 70B 모델을 완전히 수용할 수 없습니다 — Q4에서 약 40GB가 필요한데 4090은 24GB뿐입니다. 두 대의 RTX 4090(합산 48GB), Q2_K의 단일 4090, CPU 오프로드가 세 가지 현실적인 옵션입니다.',
        bullets: [
          '70B 모델은 Q4_K_M에서 약 40GB의 VRAM이 필요합니다 — 단일 RTX 4090의 24GB를 훨씬 웃돕니다.',
          'vLLM이나 llama.cpp의 텐서 병렬을 통한 두 대의 RTX 4090(합산 48GB)이 가장 깔끔한 완전 품질 경로입니다.',
          '단일 RTX 4090만으로는 Q2_K 양자화에서만 70B를 구동할 수 있으며, 이는 Q4 대비 출력 품질을 눈에 띄게 저하시킵니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '70B 모델은 Q4에서 약 40GB의 VRAM이 필요합니다 — 단일 RTX 4090의 24GB로는 부족합니다',
          '최적의 완전 품질 설정: vLLM이나 llama.cpp 텐서 병렬을 통한 두 대의 RTX 4090(합산 48GB)',
          '단일 4090 대안: Q2_K 양자화는 24GB에 맞지만 출력 품질을 눈에 띄게 저하시킵니다',
          'CPU/RAM 오프로드(llama.cpp의 `--n-gpu-layers`)는 단일 4090에서 작동하지만 처리량이 크게 떨어집니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: 두 대의 RTX 4090(합산 48GB)',
        content: [
          '<strong>70B 모델을 완전한 품질로 구동하는 최적의 RTX 4090 설정은 vLLM이나 llama.cpp의 텐서 병렬 모드로 실행되는, 합산 48GB의 사용 가능한 VRAM을 제공하는 두 대의 RTX 4090입니다.</strong> 70B 모델은 Q4_K_M에서 약 40GB가 필요하며, 48GB는 합리적인 컨텍스트 윈도우를 위한 여유 공간과 함께 이를 편안하게 처리합니다.',
          '이를 위해서는 두 개의 PCIe x16 슬롯(이상적으로는 둘 다 최소 x8 이상의 대역폭)을 갖춘 마더보드와 케이스, 최소 1200W 정격의 전원 공급 장치, 그리고 멀티 GPU 텐서 분할을 지원하는 소프트웨어가 필요합니다 — vLLM과 최신 llama.cpp 빌드 모두 `--tensor-split` 또는 이에 상응하는 플래그를 통해 이를 지원합니다.',
          '두 번째 RTX 4090이 예산에 없다면 단일 GPU 대안은 Q2_K 양자화이며, 이는 70B 모델을 약 22-24GB로 축소시켜 4090 하나에 간신히 맞지만, Q4 대비 출력 일관성이 명백하게 저하됩니다. CPU/RAM 오프로드(레이어를 GPU와 시스템 RAM 사이에 분할)는 또 다른 단일 GPU 옵션입니다. 작동은 하지만 처리량이 급격히 떨어져 종종 초당 한 자릿수 토큰 수준까지 내려갑니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'Amazon에서 RTX 4090 가격 확인하기',
          },
          {
            url: 'https://www.amazon.com/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: 'Amazon에서 1200W 전원 공급 장치 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '듀얼 RTX 4090 대 단일 RTX 4090 + 양자화',
        content: [
          '듀얼 RTX 4090은 완전한 Q4 품질을 제공하지만 실질적인 비용(두 번째 카드에 더 강력한 PSU와 케이스)이 듭니다. 단일 RTX 4090 + Q2_K는 하나의 카드로 구성을 유지하지만 코드 생성이나 수학처럼 정밀도가 필요한 작업에서 눈에 띄는 출력 품질을 희생합니다.',
          '중간 경로: 단일 RTX 4090에서 70B 대신 32B 모델을 완전한 Q4 품질로 구동하십시오(24GB에 여유 있게 맞습니다) — 많은 작업에서 잘 선택된 32B 모델은 품질이 저하된 70B와의 격차 대부분을 좁혀줍니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'NVLink로 두 RTX 4090의 VRAM을 결합할 수 있습니까?',
            a: '아닙니다. RTX 4090은 NVLink를 지원하지 않습니다(NVIDIA가 이번 세대 소비자 카드에서 제거했습니다). LLM 추론을 위한 멀티 GPU VRAM 풀링은 하드웨어 브리지가 아니라 vLLM 같은 도구의 소프트웨어 수준 텐서 병렬 분할을 통해 작동합니다.',
          },
          {
            q: 'Q2_K의 70B 모델은 실제로 사용할 만합니까?',
            a: '일상적인 채팅에는 사용할 만하지만, 정밀도가 필요한 작업 — 수학, 코드, 다단계 추론 — 에서 명확한 성능 저하를 보입니다. 이런 작업에는 단일 카드의 Q4 32B 모델이 Q2_K의 70B 모델보다 종종 더 나은 성능을 냅니다.',
          },
          {
            q: '두 대의 RTX 4090을 위해서는 어떤 마더보드가 필요합니까?',
            a: '두 개의 PCIe x16 슬롯을 갖추고, 이상적으로는 둘 다 최소 x8 전기적 레인으로 배선된 보드가 필요합니다(설명서를 확인하십시오 — 많은 소비자용 보드는 두 번째 슬롯을 x4로 낮춥니다). 워크스테이션이나 HEDT급 보드는 이 병목을 완전히 피합니다.',
          },
          {
            q: '듀얼 GPU 추론은 초당 토큰 수를 두 배로 만듭니까?',
            a: '아닙니다 — 텐서 병렬 추론은 모델을 GPU 간에 분할하여 맞추지만 GPU 간 통신 오버헤드가 추가됩니다. 심하게 오프로드된 단일 GPU보다는 빠른 추론을 기대할 수 있지만, 이미 하나의 카드에 맞았던 모델 대비 깔끔한 2배 속도 향상은 아닙니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[70B 모델에는 얼마나 많은 VRAM이 필요한가?](/prompt-bites/vram-for-70b-model) — 근본적인 VRAM 계산',
          '[로컬 LLM 추론을 위한 1,000달러 이하 최적의 GPU](/prompt-bites/best-gpu-under-1000-local-llm) — 단일 4090 등급',
          '[2026년 로컬 LLM GPU 구매 가이드](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 전체 예산 등급 비교',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    title: 'Qual a Melhor Configuração RTX 4090 para Rodar Modelos de 70B?',
    seoTitle: 'Configuração RTX 4090 para Modelos de 70B 2026',
    metaDescription: 'Uma única RTX 4090 (24GB) não comporta totalmente um modelo de 70B — precisa de ~40GB em Q4. Duas RTX 4090 (48GB) ou offload de CPU são as configurações reais para 70B.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: 'Entusiastas planejando uma montagem local para LLM capaz de rodar modelos de 70B com RTX 4090',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Uma única RTX 4090 (24 GB) não comporta totalmente um modelo de 70B — ele precisa de aproximadamente 40 GB em quantização Q4.</strong> As configurações reais são: duas RTX 4090 (48 GB combinados, via servir em paralelo por tensor), uma RTX 4090 rodando o modelo em quantização agressiva Q2_K (cabe, mas com queda visível de qualidade), ou uma RTX 4090 com offload de CPU/RAM para as camadas que não cabem (funciona, mas bem mais lento).',
    toc: [
      { label: 'Melhor Escolha: Duas RTX 4090 (48 GB Combinados)', anchor: '#best-pick' },
      { label: 'RTX 4090 Dupla vs RTX 4090 Única + Quantização', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Que configuração de GPU você precisa para rodar um modelo de 70B com uma RTX 4090?',
        answer: 'Uma única RTX 4090 não comporta totalmente um modelo de 70B — ele precisa de ~40 GB em Q4 contra os 24 GB da 4090. Duas RTX 4090 (48 GB combinados), uma 4090 em Q2_K, ou offload de CPU são as três opções reais.',
        bullets: [
          'Um modelo de 70B precisa de ~40 GB de VRAM em Q4_K_M — bem acima dos 24 GB de uma única RTX 4090.',
          'Duas RTX 4090 (48 GB combinados) via vLLM ou tensor-parallel do llama.cpp é o caminho mais limpo para qualidade total.',
          'Uma única RTX 4090 só consegue rodar um 70B em quantização Q2_K, o que degrada visivelmente a qualidade da saída em comparação com Q4.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Um modelo de 70B precisa de ~40 GB de VRAM em Q4 — os 24 GB de uma única RTX 4090 não são suficientes',
          'Melhor configuração de qualidade total: duas RTX 4090 (48 GB combinados) via vLLM ou tensor-parallel do llama.cpp',
          'Alternativa com uma única 4090: quantização Q2_K cabe em 24 GB, mas degrada visivelmente a qualidade da saída',
          'O offload de CPU/RAM (`--n-gpu-layers` do llama.cpp) funciona em uma 4090, mas reduz significativamente a taxa de transferência',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Duas RTX 4090 (48 GB Combinados)',
        content: [
          '<strong>A melhor configuração RTX 4090 para rodar um modelo de 70B em qualidade total são duas RTX 4090 combinadas para 48 GB de VRAM utilizável, rodadas via vLLM ou o modo tensor-parallel do llama.cpp.</strong> Um modelo de 70B precisa de aproximadamente 40 GB em Q4_K_M — 48 GB cobre isso confortavelmente, com espaço para uma janela de contexto razoável.',
          'Isso exige uma placa-mãe e um gabinete com dois slots PCIe x16 (idealmente ambos com pelo menos largura de banda x8), uma fonte de alimentação com capacidade de pelo menos 1200 W, e software que suporte divisão de tensor multi-GPU — tanto o vLLM quanto builds recentes do llama.cpp suportam isso via `--tensor-split` ou flags equivalentes.',
          'Se uma segunda RTX 4090 não estiver no orçamento, a alternativa de GPU única é a quantização Q2_K, que reduz um modelo de 70B para aproximadamente 22-24 GB — encaixando por pouco em uma 4090, mas com uma queda claramente perceptível na coerência da saída em comparação com Q4. O offload de CPU/RAM (dividindo camadas entre GPU e RAM do sistema) é a outra opção de GPU única; funciona, mas a taxa de transferência cai bruscamente, muitas vezes para tokens por segundo de um dígito.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: 'Confira o preço da RTX 4090 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 PSU',
            productCategory: 'psu',
            priceRange: '180-280',
            label: 'Confira o preço da fonte 1200W na Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 4090 Dupla vs RTX 4090 Única + Quantização',
        content: [
          'A RTX 4090 dupla oferece qualidade Q4 total a um custo real (uma segunda placa mais uma fonte e um gabinete mais robustos). A RTX 4090 única + Q2_K mantém a montagem em uma única placa, mas troca por uma qualidade de saída perceptivelmente pior em tarefas que exigem precisão, como geração de código ou matemática.',
          'Um caminho intermediário: rode um modelo de 32B em vez de 70B em uma única RTX 4090 em qualidade Q4 total (cabe em 24 GB com espaço de sobra) — para muitas tarefas, um modelo de 32B bem escolhido fecha a maior parte da diferença com um 70B com qualidade degradada.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O NVLink consegue combinar a VRAM de duas RTX 4090?',
            a: 'Não. A RTX 4090 não suporta NVLink (a NVIDIA removeu esse recurso das placas de consumo desta geração). O agrupamento de VRAM multi-GPU para inferência de LLM funciona através de divisão de tensor em nível de software em ferramentas como o vLLM, não uma ponte de hardware.',
          },
          {
            q: 'Um modelo de 70B em Q2_K é realmente utilizável?',
            a: 'É utilizável para conversas casuais, mas mostra degradação clara em tarefas que exigem precisão — matemática, código e raciocínio em múltiplas etapas são os mais afetados. Para essas tarefas, um modelo de 32B em Q4 em uma única placa costuma superar um modelo de 70B em Q2_K.',
          },
          {
            q: 'Que placa-mãe eu preciso para duas RTX 4090?',
            a: 'Uma placa com dois slots PCIe x16, idealmente ambos ligados com pelo menos x8 vias elétricas (verifique o manual — muitas placas de consumo reduzem o segundo slot para x4). Uma placa classe workstation ou HEDT evita esse gargalo completamente.',
          },
          {
            q: 'A inferência com duas GPUs dobra os tokens por segundo?',
            a: 'Não — a inferência tensor-parallel divide o modelo entre as GPUs para encaixá-lo, mas adiciona sobrecarga de comunicação entre GPUs. Espere uma inferência mais rápida do que uma única GPU com offload pesado, mas não um ganho limpo de 2x sobre um modelo que já cabia em uma placa só.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Quanta VRAM Você Precisa para um Modelo de 70B?](/prompt-bites/vram-for-70b-model) — a matemática de VRAM por trás disso',
          '[Melhor GPU Abaixo de US$ 1.000 para Inferência de LLM Local](/prompt-bites/best-gpu-under-1000-local-llm) — a faixa de uma única 4090',
          '[Guia de Compra de GPU para LLMs Locais 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — comparação completa por faixa de orçamento',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '运行 70B 模型的最佳 RTX 4090 配置是什么？',
    seoTitle: '2026 年 70B 模型的 RTX 4090 配置 | Prompt Bites',
    metaDescription: '单张 RTX 4090（24GB）无法完整装下 70B 模型——需要约 40GB 才能在 Q4 下运行。双 RTX 4090（48GB）或 CPU 卸载是现实可行的 70B 配置方案。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 4090 24 GB', 'dual RTX 4090'],
    educationalLevel: 'Advanced',
    audience: '计划围绕 RTX 4090 打造可运行 70B 模型的本地 LLM 配置的爱好者',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-1000-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>单张 RTX 4090（24 GB）无法完整装下 70B 模型——它在 Q4 量化下大约需要 40 GB。</strong>现实可行的配置方案有：两张 RTX 4090（通过张量并行服务，合计 48 GB）、单张 RTX 4090 以激进的 Q2_K 量化运行模型（能装下，但质量明显下降），或单张 RTX 4090 搭配 CPU/内存卸载处理装不下的层（可行，但速度慢得多）。',
    toc: [
      { label: '最佳选择：两张 RTX 4090（合计 48 GB）', anchor: '#best-pick' },
      { label: '双 RTX 4090 对比 单张 RTX 4090 + 量化', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '用 RTX 4090 运行 70B 模型需要什么样的 GPU 配置？',
        answer: '单张 RTX 4090 无法完整装下 70B 模型——它在 Q4 下需要约 40 GB，而 4090 只有 24 GB。两张 RTX 4090（合计 48 GB）、单张 4090 用 Q2_K 量化，或 CPU 卸载，是三种现实可行的方案。',
        bullets: [
          '70B 模型在 Q4_K_M 下大约需要 40 GB 显存——远超单张 RTX 4090 的 24 GB。',
          '通过 vLLM 或 llama.cpp 的张量并行，两张 RTX 4090（合计 48 GB）是最干净的全质量方案。',
          '单张 RTX 4090 只能以 Q2_K 量化运行 70B，相比 Q4 输出质量明显下降。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '70B 模型在 Q4 下大约需要 40 GB 显存——单张 RTX 4090 的 24 GB 不够',
          '最佳全质量方案：通过 vLLM 或 llama.cpp 张量并行的两张 RTX 4090（合计 48 GB）',
          '单卡 4090 的折衷方案：Q2_K 量化可装入 24 GB，但输出质量明显下降',
          'CPU/内存卸载（llama.cpp 的 `--n-gpu-layers`）在单张 4090 上可行，但吞吐量会大幅下降',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：两张 RTX 4090（合计 48 GB）',
        content: [
          '<strong>以全质量运行 70B 模型的最佳 RTX 4090 配置是两张 RTX 4090 合计提供 48 GB 可用显存，并通过 vLLM 或 llama.cpp 的张量并行模式运行。</strong>70B 模型在 Q4_K_M 下大约需要 40 GB——48 GB 能轻松满足，还能留出合理的上下文窗口空间。',
          '这需要一块具备两个 PCIe x16 插槽的主板和机箱（理想情况下两个插槽都至少是 x8 带宽或更高）、至少 1200 W 额定功率的电源，以及支持多 GPU 张量拆分的软件——vLLM 和近期版本的 llama.cpp 都通过 `--tensor-split` 或类似参数支持这一点。',
          '如果预算不够买第二张 RTX 4090，单 GPU 的备选方案是 Q2_K 量化，可将 70B 模型压缩到大约 22-24 GB——刚好能塞进一张 4090，但相比 Q4，输出连贯性明显下降。CPU/内存卸载（将部分层分配到 GPU 和系统内存之间）是另一个单 GPU 选项；可行，但吞吐量会急剧下降，往往只有个位数的每秒 token 数。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%204090%2024GB',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '900-1600',
            label: '在 Amazon 查看 RTX 4090 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=1200W%20power%20supply%20PCIe%205',
            productName: '1200W ATX 3.0 电源',
            productCategory: 'psu',
            priceRange: '180-280',
            label: '在 Amazon 查看 1200W 电源价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '双 RTX 4090 对比 单张 RTX 4090 + 量化',
        content: [
          '双 RTX 4090 能以全 Q4 质量运行，但需要真实成本（第二张显卡加上更强的电源和机箱）。单张 RTX 4090 + Q2_K 将配置控制在一张卡内，但会在需要精度的任务（如代码生成或数学）上明显牺牲输出质量。',
          '折衷方案：在单张 RTX 4090 上以全 Q4 质量运行 32B 模型而非 70B（24 GB 内轻松容纳并留有余量）——对许多任务而言，精心挑选的 32B 模型能弥补大部分与质量下降的 70B 之间的差距。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'NVLink 能合并两张 RTX 4090 的显存吗？',
            a: '不能。RTX 4090 不支持 NVLink（NVIDIA 已在这一代消费级显卡中移除该功能）。LLM 推理的多 GPU 显存池化是通过 vLLM 等工具中的软件层张量并行拆分实现的，而非硬件桥接。',
          },
          {
            q: 'Q2_K 量化的 70B 模型真的能用吗？',
            a: '对于休闲聊天可以使用，但在需要精度的任务上表现出明显退化——数学、代码和多步推理受影响最大。对这些任务而言，单卡 Q4 的 32B 模型往往优于 Q2_K 的 70B 模型。',
          },
          {
            q: '两张 RTX 4090 需要什么样的主板？',
            a: '需要具备两个 PCIe x16 插槽的主板，理想情况下两个插槽至少都有 x8 电气通道（查看说明书——许多消费级主板会把第二个插槽降到 x4）。工作站或 HEDT 级主板可以完全避免这一瓶颈。',
          },
          {
            q: '双 GPU 推理会让每秒 token 数翻倍吗？',
            a: '不会——张量并行推理会将模型拆分到多张 GPU 上以适配显存，但会增加 GPU 间的通信开销。相比大量卸载的单 GPU，推理会更快，但不会是相对已能装入单卡的模型的简单 2 倍加速。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[70B 模型需要多少显存？](/prompt-bites/vram-for-70b-model) — 底层显存计算方法',
          '[1000 美元以下本地 LLM 推理最佳 GPU](/prompt-bites/best-gpu-under-1000-local-llm) — 单卡 4090 档位',
          '[2026 年本地 LLM GPU 购买指南](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 完整预算档位对比',
        ],
      },
    },
  },
}
