import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best Local LLM for a 32GB Unified Memory Mac?',
    seoTitle: 'Best Local LLM for 32GB Unified Memory Mac 2026',
    metaDescription: 'Best local LLM for a 32GB unified memory Mac: 32B models at Q4 (~18-20GB), leaving headroom for macOS. 70B only fits at aggressive low-bit quantization.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Buyers of a 32GB unified memory Mac (Mac Mini/MacBook Pro M4 Pro) choosing a model size',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>On a 32 GB unified memory Mac (Mac Mini M4 Pro or MacBook Pro M4 Pro), the best local LLM is a 32B model — like Qwen3 32B — at Q4 quantization, which needs roughly 18-20 GB and leaves 12-14 GB for macOS and context.</strong> A 70B model only fits at aggressive Q2_K quantization, with a real quality tradeoff.',
    toc: [
      { label: 'Best Pick: 32B Models at Q4', anchor: '#best-pick' },
      { label: '32B at Q4 vs 70B at Q2_K on the Same 32 GB Mac', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for a 32GB unified memory Mac?',
        answer: 'Qwen3 32B at Q4 is the best fit for a 32GB unified memory Mac — it needs ~18-20GB, leaving comfortable headroom for macOS. A 70B model only fits at Q2_K, with a visible quality drop.',
        bullets: [
          'A 32B model at Q4_K_M needs roughly 18-20 GB — fits with 12-14 GB left for macOS and context on a 32 GB Mac.',
          'macOS itself typically uses 4-6 GB at idle, so treat ~26-28 GB as the practical usable ceiling, not the full 32 GB.',
          'A 70B model needs ~40 GB at Q4 — it does not fit at all; only Q2_K (~22 GB) squeezes in, with visible quality loss.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: a 32B model (e.g. Qwen3 32B) at Q4 — needs ~18-20 GB, comfortable on 32 GB total',
          'Treat ~26-28 GB as the practical usable ceiling — macOS itself reserves 4-6 GB at idle',
          'A 70B model needs ~40 GB at Q4 and does not fit; only Q2_K (~22 GB) squeezes in, with a real quality drop',
          '14B models run with heavy headroom if 32B feels too close to the ceiling for your workflow',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: 32B Models at Q4',
        content: [
          '<strong>A 32 GB unified memory Mac is sized almost exactly for 32B-class models at Q4 quantization — the model needs roughly 18-20 GB, leaving 12-14 GB for macOS, background apps, and the context window.</strong> This is the same unified-memory-equals-VRAM logic that applies across all Apple Silicon Macs: there is no separate GPU memory pool to worry about.',
          'Don\'t plan around the full 32 GB figure on the spec sheet. macOS itself typically reserves 4-6 GB at idle, and background processes add more. Treat roughly 26-28 GB as the realistic usable ceiling for model plus context, not the advertised 32 GB.',
          'A 70B model does not fit at any reasonable quality: it needs about 40 GB at Q4, well over budget even before macOS overhead. The only way to load one is Q2_K quantization (roughly 22 GB), which measurably degrades output quality on reasoning-heavy tasks. If you specifically need 70B-class quality, look at a 64 GB or larger unified memory configuration instead.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'Check Mac Mini M4 Pro 32GB config on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'Check MacBook Pro M4 Pro 32GB config on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32B at Q4 vs 70B at Q2_K on the Same 32 GB Mac',
        content: [
          'A 32B model at Q4 gives you a well-calibrated quantization level with minimal quality loss versus the full-precision model. A 70B model squeezed into Q2_K trades its larger parameter count against much more aggressive compression — the two effects can roughly cancel out, and in practice the 32B/Q4 combination is usually the more reliable choice for precision-sensitive tasks.',
          'If your workflow is casual chat rather than code or math, the 70B/Q2_K option is worth trying — but benchmark both on your actual tasks before committing, since the right answer depends on what you\'re using the model for.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much unified memory does macOS actually use at idle?',
            a: 'Roughly 4-6 GB on a freshly booted system, more once you open a browser and other apps. Budget for this when sizing a model — don\'t assume the full advertised unified memory figure is available to the LLM.',
          },
          {
            q: 'Is 32 GB unified memory the same as 32 GB of VRAM?',
            a: 'Functionally, yes, for LLM sizing purposes. Apple Silicon shares one memory pool between CPU and GPU, so the unified memory figure is the number to compare against a dedicated GPU\'s VRAM capacity.',
          },
          {
            q: 'Should I get 48 GB instead of 32 GB?',
            a: 'If your budget allows it and you want a comfortable 32B run with more context headroom, or you want to attempt larger models at moderate quantization, 48 GB is a meaningful step up. 32 GB is the practical minimum for 32B-class models, not the ideal amount.',
          },
          {
            q: 'Does Ollama or LM Studio handle unified memory better?',
            a: 'Both use Apple\'s Metal backend underneath and manage unified memory similarly. Neither has a meaningful advantage specific to memory management on Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Is the Mac Mini M4 Good for Local LLMs?](/prompt-bites/mac-mini-m4-local-llm) — the base and Pro configurations compared',
          '[Best Local LLM for a MacBook Air Without an eGPU](/prompt-bites/best-local-llm-macbook-air-no-egpu) — the entry-level Apple Silicon tier',
          '[How Much VRAM for a 70B Model?](/prompt-bites/vram-for-70b-model) — the underlying memory math',
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — for when you outgrow unified memory and want dedicated VRAM',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    title: 'أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB؟',
    seoTitle: 'أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB 2026',
    metaDescription: 'أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB: نماذج 32B بدقة Q4 (~18-20GB)، مع ترك هامش لنظام macOS. لا يستوعب نموذج 70B إلا بتكميم منخفض عدواني.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: 'مشترو جهاز Mac بذاكرة موحدة 32GB (Mac Mini/MacBook Pro M4 Pro) الذين يختارون حجم النموذج',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>على جهاز Mac بذاكرة موحدة 32 GB (Mac Mini M4 Pro أو MacBook Pro M4 Pro)، أفضل LLM محلي هو نموذج 32B — مثل Qwen3 32B — بتكميم Q4، الذي يحتاج حوالي 18-20 GB ويترك 12-14 GB لنظام macOS والسياق.</strong> يستوعب نموذج 70B فقط بتكميم Q2_K العدواني، مع مقايضة حقيقية في الجودة.',
    toc: [
      { label: 'أفضل اختيار: نماذج 32B بدقة Q4', anchor: '#best-pick' },
      { label: '32B بدقة Q4 مقابل 70B بدقة Q2_K على نفس جهاز Mac بذاكرة 32 GB', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB؟',
        answer: 'نموذج Qwen3 32B بدقة Q4 هو الأنسب لجهاز Mac بذاكرة موحدة 32GB — يحتاج ~18-20GB، مع ترك هامش مريح لنظام macOS. يستوعب نموذج 70B فقط بدقة Q2_K، مع انخفاض ملحوظ في الجودة.',
        bullets: [
          'نموذج 32B بدقة Q4_K_M يحتاج حوالي 18-20 GB — يستوعب مع بقاء 12-14 GB لنظام macOS والسياق على جهاز Mac بذاكرة 32 GB.',
          'يستخدم macOS نفسه عادةً 4-6 GB عند الخمول، لذا عامل ~26-28 GB كسقف الاستخدام العملي، وليس الـ32 GB الكاملة.',
          'نموذج 70B يحتاج ~40 GB بدقة Q4 — لا يستوعب إطلاقًا؛ فقط Q2_K (~22 GB) يستوعب بالكاد، مع فقدان ملحوظ في الجودة.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار: نموذج 32B (مثل Qwen3 32B) بدقة Q4 — يحتاج ~18-20 GB، مريح على 32 GB إجمالية',
          'عامل ~26-28 GB كسقف الاستخدام العملي — يحجز macOS نفسه 4-6 GB عند الخمول',
          'نموذج 70B يحتاج ~40 GB بدقة Q4 ولا يستوعب؛ فقط Q2_K (~22 GB) يستوعب بالكاد، مع انخفاض حقيقي في الجودة',
          'نماذج 14B تعمل بهامش كبير إذا شعرت أن 32B قريب جدًا من السقف لسير عملك',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: نماذج 32B بدقة Q4',
        content: [
          '<strong>جهاز Mac بذاكرة موحدة 32 GB مُقاس تقريبًا بالضبط لنماذج من فئة 32B بتكميم Q4 — يحتاج النموذج حوالي 18-20 GB، مع ترك 12-14 GB لنظام macOS والتطبيقات الخلفية ونافذة السياق.</strong> هذا نفس منطق "الذاكرة الموحدة تساوي VRAM" المطبّق عبر كل أجهزة Apple Silicon: لا يوجد مجمّع ذاكرة GPU منفصل يدعو للقلق بشأنه.',
          'لا تخطط حول رقم الـ32 GB الكامل على ورقة المواصفات. يحجز macOS نفسه عادةً 4-6 GB عند الخمول، وتضيف العمليات الخلفية المزيد. عامل حوالي 26-28 GB كسقف واقعي قابل للاستخدام للنموذج بالإضافة إلى السياق، وليس الـ32 GB المُعلنة.',
          'لا يستوعب نموذج 70B بأي جودة معقولة: يحتاج حوالي 40 GB بدقة Q4، أعلى بكثير من الميزانية حتى قبل حساب عبء macOS. الطريقة الوحيدة لتحميل واحد هي تكميم Q2_K (حوالي 22 GB)، الذي يقلل بشكل قابل للقياس من جودة المخرجات في المهام كثيفة الاستدلال. إذا احتجت تحديدًا جودة من فئة 70B، انظر إلى تكوين ذاكرة موحدة 64 GB أو أكبر بدلًا من ذلك.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'تحقق من تكوين Mac Mini M4 Pro 32GB على أمازون',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'تحقق من تكوين MacBook Pro M4 Pro 32GB على أمازون',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32B بدقة Q4 مقابل 70B بدقة Q2_K على نفس جهاز Mac بذاكرة 32 GB',
        content: [
          'يمنحك نموذج 32B بدقة Q4 مستوى تكميم مضبوطًا جيدًا بفقدان جودة ضئيل مقارنة بالنموذج كامل الدقة. أما نموذج 70B المضغوط في Q2_K فيقايض عدد معاملاته الأكبر مقابل ضغط أكثر عدوانية بكثير — يمكن أن يلغي التأثيران بعضهما تقريبًا، وفي الممارسة العملية يكون مزيج 32B/Q4 عادةً الخيار الأكثر موثوقية للمهام الحساسة للدقة.',
          'إذا كان سير عملك دردشة عادية بدلًا من أكواد أو رياضيات، فإن خيار 70B/Q2_K يستحق التجربة — لكن قارن كليهما على مهامك الفعلية قبل الالتزام، حيث تعتمد الإجابة الصحيحة على الغرض الذي تستخدم النموذج من أجله.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم من الذاكرة الموحدة يستخدمها macOS فعليًا عند الخمول؟',
            a: 'حوالي 4-6 GB على نظام تم إقلاعه حديثًا، وأكثر بمجرد فتح متصفح وتطبيقات أخرى. ضع هذا في الميزانية عند تحديد حجم النموذج — لا تفترض أن رقم الذاكرة الموحدة المُعلن بالكامل متاح لـ LLM.',
          },
          {
            q: 'هل ذاكرة موحدة 32 GB هي نفسها 32 GB من VRAM؟',
            a: 'وظيفيًا، نعم، لأغراض تحديد حجم LLM. تشترك أجهزة Apple Silicon في مجمّع ذاكرة واحد بين CPU وGPU، لذا فإن رقم الذاكرة الموحدة هو الرقم الذي يُقارن مقابل سعة VRAM لبطاقة GPU مخصصة.',
          },
          {
            q: 'هل يجب أن أحصل على 48 GB بدلًا من 32 GB؟',
            a: 'إذا سمحت ميزانيتك بذلك وأردت تشغيل 32B مريحًا بهامش سياق أكبر، أو أردت محاولة نماذج أكبر بتكميم معتدل، فإن 48 GB خطوة ذات معنى للأمام. 32 GB هي الحد الأدنى العملي لنماذج من فئة 32B، وليست الكمية المثالية.',
          },
          {
            q: 'هل يتعامل Ollama أو LM Studio مع الذاكرة الموحدة بشكل أفضل؟',
            a: 'يستخدم كلاهما واجهة Metal الخاصة بآبل تحته ويديران الذاكرة الموحدة بطريقة مماثلة. لا يمتلك أي منهما ميزة ذات معنى خاصة بإدارة الذاكرة على Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[هل Mac Mini M4 جيد لتشغيل LLM محليًا؟](/prompt-bites/mac-mini-m4-local-llm) — تكوينات M4 الأساسية وM4 Pro مقارنة',
          '[أفضل LLM محلي لجهاز MacBook Air بدون eGPU](/prompt-bites/best-local-llm-macbook-air-no-egpu) — فئة Apple Silicon المبتدئة',
          '[كم VRAM يلزم لنموذج 70B؟](/prompt-bites/vram-for-70b-model) — حساب الذاكرة الأساسي',
          '[دليل شراء GPU لتشغيل LLM محليًا 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — لعندما تتجاوز الذاكرة الموحدة وتريد VRAM مخصصة',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Das beste lokale LLM für einen Mac mit 32 GB Unified Memory?',
    seoTitle: 'Bestes lokales LLM für 32GB Unified Memory Mac 2026',
    metaDescription: 'Bestes lokales LLM für einen Mac mit 32GB Unified Memory: 32B-Modelle bei Q4 (~18-20GB), mit Reserve für macOS. 70B passt nur bei aggressiver Low-Bit-Quantisierung.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Käufer eines Macs mit 32 GB Unified Memory (Mac Mini/MacBook Pro M4 Pro), die eine Modellgröße wählen',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Auf einem Mac mit 32 GB Unified Memory (Mac Mini M4 Pro oder MacBook Pro M4 Pro) ist das beste lokale LLM ein 32B-Modell — etwa Qwen3 32B — bei Q4-Quantisierung, das rund 18-20 GB benötigt und 12-14 GB für macOS und Kontext übrig lässt.</strong> Ein 70B-Modell passt nur bei aggressiver Q2_K-Quantisierung, mit einem echten Qualitätskompromiss.',
    toc: [
      { label: 'Beste Wahl: 32B-Modelle bei Q4', anchor: '#best-pick' },
      { label: '32B bei Q4 vs. 70B bei Q2_K auf demselben 32-GB-Mac', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste lokale LLM für einen Mac mit 32 GB Unified Memory?',
        answer: 'Qwen3 32B bei Q4 passt am besten zu einem Mac mit 32 GB Unified Memory — es benötigt ~18-20 GB und lässt komfortable Reserve für macOS. Ein 70B-Modell passt nur bei Q2_K, mit sichtbarem Qualitätsverlust.',
        bullets: [
          'Ein 32B-Modell bei Q4_K_M benötigt rund 18-20 GB — passt mit 12-14 GB Reserve für macOS und Kontext auf einen 32-GB-Mac.',
          'macOS selbst nutzt im Leerlauf typischerweise 4-6 GB — rechnen Sie mit ~26-28 GB als praktischer Obergrenze, nicht den vollen 32 GB.',
          'Ein 70B-Modell benötigt ~40 GB bei Q4 — es passt gar nicht; nur Q2_K (~22 GB) quetscht sich hinein, mit sichtbarem Qualitätsverlust.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: ein 32B-Modell (z. B. Qwen3 32B) bei Q4 — benötigt ~18-20 GB, komfortabel bei 32 GB insgesamt',
          'Rechnen Sie mit ~26-28 GB als praktischer Obergrenze — macOS selbst reserviert im Leerlauf 4-6 GB',
          'Ein 70B-Modell benötigt ~40 GB bei Q4 und passt nicht; nur Q2_K (~22 GB) quetscht sich hinein, mit echtem Qualitätsverlust',
          '14B-Modelle laufen mit viel Reserve, falls Ihnen 32B zu nah an der Grenze für Ihren Workflow ist',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: 32B-Modelle bei Q4',
        content: [
          '<strong>Ein Mac mit 32 GB Unified Memory ist fast exakt auf 32B-Modelle bei Q4-Quantisierung zugeschnitten — das Modell benötigt rund 18-20 GB und lässt 12-14 GB für macOS, Hintergrundprozesse und das Kontextfenster übrig.</strong> Das ist dieselbe Logik „Unified Memory gleich VRAM", die für alle Apple-Silicon-Macs gilt: Es gibt keinen separaten GPU-Speicherpool, um den man sich Sorgen machen müsste.',
          'Planen Sie nicht mit der vollen 32-GB-Zahl auf dem Datenblatt. macOS selbst reserviert im Leerlauf typischerweise 4-6 GB, und Hintergrundprozesse kommen hinzu. Betrachten Sie rund 26-28 GB als realistische Obergrenze für Modell plus Kontext, nicht die beworbenen 32 GB.',
          'Ein 70B-Modell passt bei keiner vernünftigen Qualität: Es benötigt etwa 40 GB bei Q4, deutlich über dem Budget schon vor dem macOS-Overhead. Der einzige Weg, eines zu laden, ist Q2_K-Quantisierung (rund 22 GB), was die Ausgabequalität bei anspruchsvollen Denkaufgaben messbar mindert. Wer speziell 70B-Qualität benötigt, sollte stattdessen eine Konfiguration mit 64 GB oder mehr Unified Memory in Betracht ziehen.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'Mac Mini M4 Pro 32GB Konfiguration bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'MacBook Pro M4 Pro 32GB Konfiguration bei Amazon prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32B bei Q4 vs. 70B bei Q2_K auf demselben 32-GB-Mac',
        content: [
          'Ein 32B-Modell bei Q4 bietet ein gut kalibriertes Quantisierungsniveau mit minimalem Qualitätsverlust gegenüber dem vollpräzisen Modell. Ein 70B-Modell, gequetscht in Q2_K, tauscht seine höhere Parameterzahl gegen deutlich aggressivere Kompression ein — beide Effekte können sich in etwa aufheben, und in der Praxis ist die Kombination 32B/Q4 meist die verlässlichere Wahl für präzisionssensitive Aufgaben.',
          'Wenn Ihr Workflow eher lockerer Chat als Code oder Mathematik ist, lohnt sich ein Versuch mit 70B/Q2_K — benchmarken Sie aber beide an Ihren tatsächlichen Aufgaben, bevor Sie sich festlegen, da die richtige Antwort davon abhängt, wofür Sie das Modell nutzen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie viel Unified Memory nutzt macOS tatsächlich im Leerlauf?',
            a: 'Rund 4-6 GB auf einem frisch gestarteten System, mehr sobald Sie einen Browser und weitere Apps öffnen. Kalkulieren Sie das bei der Modellgrößenwahl ein — gehen Sie nicht davon aus, dass die volle beworbene Unified-Memory-Zahl dem LLM zur Verfügung steht.',
          },
          {
            q: 'Ist 32 GB Unified Memory dasselbe wie 32 GB VRAM?',
            a: 'Funktional ja, für die LLM-Größenwahl. Apple Silicon teilt sich einen Speicherpool zwischen CPU und GPU, daher ist die Unified-Memory-Zahl die Zahl, die man mit der VRAM-Kapazität einer dedizierten GPU vergleicht.',
          },
          {
            q: 'Sollte ich statt 32 GB lieber 48 GB nehmen?',
            a: 'Wenn Ihr Budget es zulässt und Sie einen komfortablen 32B-Betrieb mit mehr Kontextreserve wollen, oder größere Modelle bei moderater Quantisierung ausprobieren möchten, ist 48 GB ein sinnvoller Schritt nach oben. 32 GB ist das praktische Minimum für 32B-Modelle, nicht die ideale Menge.',
          },
          {
            q: 'Handhaben Ollama oder LM Studio Unified Memory besser?',
            a: 'Beide nutzen darunter Apples Metal-Backend und verwalten Unified Memory ähnlich. Keines hat einen nennenswerten Vorteil speziell bei der Speicherverwaltung auf Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Ist das Mac Mini M4 gut für lokale LLMs?](/prompt-bites/mac-mini-m4-local-llm) — die Basis- und Pro-Konfigurationen im Vergleich',
          '[Bestes lokales LLM für ein MacBook Air ohne eGPU](/prompt-bites/best-local-llm-macbook-air-no-egpu) — die Einstiegsstufe bei Apple Silicon',
          '[Wie viel VRAM braucht ein 70B-Modell?](/prompt-bites/vram-for-70b-model) — die zugrunde liegende Speicherrechnung',
          '[GPU-Kaufberatung für lokale LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — für den Fall, dass Unified Memory nicht mehr reicht und Sie dedizierten VRAM wollen',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Cuál es el Mejor LLM Local para un Mac con 32GB de Memoria Unificada?',
    seoTitle: 'Mejor LLM Local para Mac con 32GB de Memoria Unificada 2026',
    metaDescription: 'Mejor LLM local para un Mac con 32GB de memoria unificada: modelos de 32B en Q4 (~18-20GB), dejando margen para macOS. El 70B solo cabe con cuantización agresiva de bits bajos.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores de un Mac con 32GB de memoria unificada (Mac Mini/MacBook Pro M4 Pro) eligiendo un tamaño de modelo',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>En un Mac con 32 GB de memoria unificada (Mac Mini M4 Pro o MacBook Pro M4 Pro), el mejor LLM local es un modelo de 32B — como Qwen3 32B — con cuantización Q4, que necesita aproximadamente 18-20 GB y deja 12-14 GB para macOS y contexto.</strong> Un modelo de 70B solo cabe con cuantización agresiva Q2_K, con una contrapartida real de calidad.',
    toc: [
      { label: 'Mejor Opción: Modelos de 32B en Q4', anchor: '#best-pick' },
      { label: '32B en Q4 vs 70B en Q2_K en el Mismo Mac de 32 GB', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM local para un Mac con 32GB de memoria unificada?',
        answer: 'Qwen3 32B en Q4 es el mejor ajuste para un Mac con 32GB de memoria unificada — necesita ~18-20GB, dejando margen cómodo para macOS. Un modelo de 70B solo cabe en Q2_K, con una caída visible de calidad.',
        bullets: [
          'Un modelo de 32B en Q4_K_M necesita aproximadamente 18-20 GB — cabe con 12-14 GB restantes para macOS y contexto en un Mac de 32 GB.',
          'macOS por sí solo típicamente usa 4-6 GB en reposo, así que trata ~26-28 GB como el techo práctico utilizable, no los 32 GB completos.',
          'Un modelo de 70B necesita ~40 GB en Q4 — no cabe en absoluto; solo Q2_K (~22 GB) se ajusta, con pérdida visible de calidad.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: un modelo de 32B (p. ej., Qwen3 32B) en Q4 — necesita ~18-20 GB, cómodo en 32 GB totales',
          'Trata ~26-28 GB como el techo práctico utilizable — macOS por sí solo reserva 4-6 GB en reposo',
          'Un modelo de 70B necesita ~40 GB en Q4 y no cabe; solo Q2_K (~22 GB) se ajusta, con una caída de calidad real',
          'Los modelos de 14B corren con mucho margen si el 32B se siente demasiado cerca del límite para tu flujo de trabajo',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Modelos de 32B en Q4',
        content: [
          '<strong>Un Mac con 32 GB de memoria unificada está dimensionado casi exactamente para modelos de clase 32B con cuantización Q4 — el modelo necesita aproximadamente 18-20 GB, dejando 12-14 GB para macOS, apps en segundo plano y la ventana de contexto.</strong> Es la misma lógica de memoria-unificada-es-igual-a-VRAM que aplica en todos los Macs con Apple Silicon: no hay un grupo de memoria de GPU separado del cual preocuparse.',
          'No planifiques en torno a la cifra completa de 32 GB de la ficha técnica. macOS por sí solo típicamente reserva 4-6 GB en reposo, y los procesos en segundo plano añaden más. Trata aproximadamente 26-28 GB como el techo utilizable realista para el modelo más el contexto, no los 32 GB anunciados.',
          'Un modelo de 70B no cabe con ninguna calidad razonable: necesita cerca de 40 GB en Q4, muy por encima del presupuesto incluso antes de la sobrecarga de macOS. La única forma de cargar uno es con cuantización Q2_K (aproximadamente 22 GB), que degrada mensurablemente la calidad de salida en tareas de razonamiento intensivo. Si necesitas específicamente calidad de clase 70B, considera una configuración de memoria unificada de 64 GB o más.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'Consulta la configuración Mac Mini M4 Pro 32GB en Amazon',
          },
          {
            url: 'https://www.amazon.es/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'Consulta la configuración MacBook Pro M4 Pro 32GB en Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32B en Q4 vs 70B en Q2_K en el Mismo Mac de 32 GB',
        content: [
          'Un modelo de 32B en Q4 ofrece un nivel de cuantización bien calibrado con una pérdida de calidad mínima frente al modelo de precisión completa. Un modelo de 70B comprimido en Q2_K enfrenta un mayor número de parámetros contra una compresión mucho más agresiva — los dos efectos pueden compensarse aproximadamente, y en la práctica la combinación 32B/Q4 suele ser la opción más confiable para tareas sensibles a la precisión.',
          'Si tu flujo de trabajo es chat casual en lugar de código o matemáticas, la opción 70B/Q2_K vale la pena probarla — pero compara ambas en tus tareas reales antes de decidirte, ya que la respuesta correcta depende de para qué uses el modelo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Cuánta memoria unificada usa realmente macOS en reposo?',
            a: 'Aproximadamente 4-6 GB en un sistema recién iniciado, más una vez que abres un navegador y otras apps. Ten esto en cuenta al dimensionar un modelo — no asumas que toda la cifra anunciada de memoria unificada está disponible para el LLM.',
          },
          {
            q: '¿32 GB de memoria unificada es lo mismo que 32 GB de VRAM?',
            a: 'Funcionalmente, sí, para efectos de dimensionamiento de LLM. Apple Silicon comparte un solo grupo de memoria entre CPU y GPU, por lo que la cifra de memoria unificada es el número a comparar contra la capacidad de VRAM de una GPU dedicada.',
          },
          {
            q: '¿Debería obtener 48 GB en lugar de 32 GB?',
            a: 'Si tu presupuesto lo permite y quieres una ejecución cómoda de 32B con más margen de contexto, o intentar modelos más grandes con cuantización moderada, 48 GB es un salto significativo. 32 GB es el mínimo práctico para modelos de clase 32B, no la cantidad ideal.',
          },
          {
            q: '¿Manejan Ollama o LM Studio mejor la memoria unificada?',
            a: 'Ambos usan el backend Metal de Apple por debajo y gestionan la memoria unificada de forma similar. Ninguno tiene una ventaja significativa específica en la gestión de memoria en Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Es Bueno el Mac Mini M4 para LLMs Locales?](/prompt-bites/mac-mini-m4-local-llm) — las configuraciones base y Pro comparadas',
          '[Mejor LLM Local para un MacBook Air sin eGPU](/prompt-bites/best-local-llm-macbook-air-no-egpu) — el nivel de entrada de Apple Silicon',
          '[¿Cuánta VRAM Necesitas para un Modelo de 70B?](/prompt-bites/vram-for-70b-model) — la matemática de memoria subyacente',
          '[Guía de Compra de GPU para LLMs Locales 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — para cuando superes la memoria unificada y quieras VRAM dedicada',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Quel est le meilleur LLM local pour un Mac à 32 Go de mémoire unifiée ?',
    seoTitle: 'Meilleur LLM local pour Mac 32 Go mémoire unifiée 2026',
    metaDescription: 'Meilleur LLM local pour Mac 32 Go de mémoire unifiée : modèles 32B en Q4 (~18-20 Go), marge pour macOS. Le 70B ne tient qu\'en quantification agressive.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs d\'un Mac à 32 Go de mémoire unifiée (Mac Mini/MacBook Pro M4 Pro) choisissant une taille de modèle',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Sur un Mac à 32 Go de mémoire unifiée (Mac Mini M4 Pro ou MacBook Pro M4 Pro), le meilleur LLM local est un modèle 32B — comme Qwen3 32B — en quantification Q4, qui nécessite environ 18-20 Go et laisse 12-14 Go pour macOS et le contexte.</strong> Un modèle 70B ne tient qu\'en quantification Q2_K agressive, avec un réel compromis de qualité.',
    toc: [
      { label: 'Meilleur choix : modèles 32B en Q4', anchor: '#best-pick' },
      { label: '32B en Q4 vs 70B en Q2_K sur le même Mac 32 Go', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures connexes', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour un Mac à 32 Go de mémoire unifiée ?',
        answer: 'Qwen3 32B en Q4 est le meilleur choix pour un Mac à 32 Go de mémoire unifiée — il nécessite ~18-20 Go, laissant une marge confortable pour macOS. Un modèle 70B ne tient qu\'en Q2_K, avec une baisse de qualité visible.',
        bullets: [
          'Un modèle 32B en Q4_K_M nécessite environ 18-20 Go — il tient avec 12-14 Go restants pour macOS et le contexte sur un Mac de 32 Go.',
          'macOS lui-même utilise généralement 4-6 Go au repos, considérez donc ~26-28 Go comme le plafond réellement utilisable, et non les 32 Go complets.',
          'Un modèle 70B nécessite ~40 Go en Q4 — il ne tient absolument pas ; seul le Q2_K (~22 Go) parvient à s\'y loger, avec une perte de qualité visible.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : un modèle 32B (p. ex. Qwen3 32B) en Q4 — nécessite ~18-20 Go, confortable sur 32 Go au total',
          'Considérez ~26-28 Go comme le plafond pratiquement utilisable — macOS réserve lui-même 4-6 Go au repos',
          'Un modèle 70B nécessite ~40 Go en Q4 et ne tient pas ; seul le Q2_K (~22 Go) s\'y loge, avec une réelle baisse de qualité',
          'Les modèles 14B fonctionnent avec une large marge si le 32B vous semble trop proche du plafond pour votre usage',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : modèles 32B en Q4',
        content: [
          '<strong>Un Mac à 32 Go de mémoire unifiée est dimensionné presque exactement pour les modèles de la classe 32B en quantification Q4 — le modèle nécessite environ 18-20 Go, laissant 12-14 Go pour macOS, les applications en arrière-plan et la fenêtre de contexte.</strong> C\'est la même logique « mémoire unifiée égale VRAM » qui s\'applique à tous les Mac Apple Silicon : il n\'existe pas de pool de mémoire GPU distinct dont il faille se soucier.',
          'Ne planifiez pas en vous basant sur le chiffre complet de 32 Go de la fiche technique. macOS réserve généralement 4-6 Go au repos, et les processus en arrière-plan en ajoutent davantage. Considérez environ 26-28 Go comme le plafond réaliste utilisable pour le modèle plus le contexte, et non les 32 Go annoncés.',
          'Un modèle 70B ne tient à aucune qualité raisonnable : il nécessite environ 40 Go en Q4, largement au-dessus du budget, même avant la surcharge de macOS. La seule façon d\'en charger un est la quantification Q2_K (environ 22 Go), qui dégrade de manière mesurable la qualité de sortie sur les tâches à forte composante de raisonnement. Si vous avez spécifiquement besoin de la qualité de la classe 70B, orientez-vous plutôt vers une configuration de mémoire unifiée de 64 Go ou plus.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'Voir la configuration Mac Mini M4 Pro 32 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.fr/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'Voir la configuration MacBook Pro M4 Pro 32 Go sur Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32B en Q4 vs 70B en Q2_K sur le même Mac 32 Go',
        content: [
          'Un modèle 32B en Q4 offre un niveau de quantification bien calibré, avec une perte de qualité minimale par rapport au modèle en pleine précision. Un modèle 70B compressé en Q2_K échange son nombre de paramètres plus élevé contre une compression bien plus agressive — les deux effets peuvent à peu près s\'annuler, et en pratique, la combinaison 32B/Q4 reste généralement le choix le plus fiable pour les tâches sensibles à la précision.',
          'Si votre usage relève du chat occasionnel plutôt que du code ou des mathématiques, l\'option 70B/Q2_K mérite d\'être essayée — mais comparez les deux sur vos tâches réelles avant de vous engager, car la bonne réponse dépend de l\'usage que vous faites du modèle.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Quelle quantité de mémoire unifiée macOS utilise-t-il réellement au repos ?',
            a: 'Environ 4-6 Go sur un système fraîchement démarré, davantage dès que vous ouvrez un navigateur et d\'autres applications. Prévoyez cette marge lors du dimensionnement d\'un modèle — ne supposez pas que le chiffre complet de mémoire unifiée annoncé est disponible pour le LLM.',
          },
          {
            q: '32 Go de mémoire unifiée équivalent-ils à 32 Go de VRAM ?',
            a: 'Fonctionnellement, oui, pour le dimensionnement d\'un LLM. Apple Silicon partage un seul pool de mémoire entre le CPU et le GPU, si bien que le chiffre de mémoire unifiée est celui à comparer à la capacité de VRAM d\'un GPU dédié.',
          },
          {
            q: 'Faut-il choisir 48 Go plutôt que 32 Go ?',
            a: 'Si votre budget le permet et que vous souhaitez exécuter un 32B confortablement avec plus de marge de contexte, ou tenter des modèles plus grands en quantification modérée, 48 Go représente un vrai progrès. 32 Go est le minimum pratique pour les modèles de la classe 32B, pas la quantité idéale.',
          },
          {
            q: 'Ollama ou LM Studio gère-t-il mieux la mémoire unifiée ?',
            a: 'Les deux s\'appuient sur le backend Metal d\'Apple et gèrent la mémoire unifiée de façon similaire. Aucun des deux n\'a d\'avantage significatif spécifique à la gestion de la mémoire sur Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Le Mac Mini M4 est-il adapté aux LLM locaux ?](/prompt-bites/mac-mini-m4-local-llm) — comparaison des configurations de base et Pro',
          '[Meilleur LLM local pour un MacBook Air sans eGPU](/prompt-bites/best-local-llm-macbook-air-no-egpu) — le palier d\'entrée de gamme Apple Silicon',
          '[Combien de VRAM pour un modèle 70B ?](/prompt-bites/vram-for-70b-model) — le calcul de mémoire sous-jacent',
          '[Guide d\'achat GPU pour les LLM locaux 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — pour quand la mémoire unifiée ne suffit plus et que vous voulez de la VRAM dédiée',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: '32GB統合メモリMacに最適なローカルLLMは?',
    seoTitle: '2026年版 32GB統合メモリMacに最適なローカルLLM',
    metaDescription: '32GB統合メモリMacに最適なローカルLLM: 32BモデルをQ4で(約18-20GB)、macOS用の余裕を残します。70Bは積極的な低ビット量子化でのみ収まります。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: '32GB統合メモリMac(Mac Mini/MacBook Pro M4 Pro)の購入者でモデルサイズを選ぶ人',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>32GB統合メモリMac(Mac Mini M4 ProまたはMacBook Pro M4 Pro)では、最適なローカルLLMは32Bモデル — Qwen3 32Bなど — をQ4量子化で動かすことで、約18-20GBが必要で、macOSとコンテキスト用に12-14GBを残します。</strong>70Bモデルは積極的なQ2_K量子化でのみ収まり、実質的な品質のトレードオフがあります。',
    toc: [
      { label: 'ベストピック: Q4の32Bモデル', anchor: '#best-pick' },
      { label: '同じ32GB Macでの32B(Q4) vs 70B(Q2_K)', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: '32GB統合メモリMacに最適なローカルLLMは?',
        answer: 'Q4のQwen3 32Bが32GB統合メモリMacに最適です — 約18-20GBが必要で、macOS用の快適な余裕を残します。70BモデルはQ2_Kでのみ収まり、目に見える品質の低下があります。',
        bullets: [
          '32BモデルはQ4_K_Mで約18-20GBが必要 — 32GB Macでは12-14GBがmacOSとコンテキスト用に残ります。',
          'macOS自体がアイドル時に通常4-6GBを使用するため、フルの32GBではなく約26-28GBを実用上の上限と考えてください。',
          '70Bモデルは Q4で約40GBが必要で全く収まりません。Q2_K(約22GB)のみがぎりぎり収まりますが、目に見える品質の低下があります。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ベストピック: 32Bモデル(Qwen3 32Bなど)をQ4で — 約18-20GB必要、32GB合計で快適',
          '約26-28GBを実用上の上限と考えること — macOS自体がアイドル時に4-6GBを確保する',
          '70Bモデルは Q4で約40GB必要で収まらない。Q2_K(約22GB)のみがぎりぎり収まるが、実質的な品質低下がある',
          '32Bが上限に近すぎると感じるワークフローには、14Bモデルが十分な余裕を持って動作する',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: Q4の32Bモデル',
        content: [
          '<strong>32GB統合メモリMacは、ほぼ正確にQ4量子化の32Bクラスモデルに合わせたサイズです — モデルは約18-20GB必要で、macOS、バックグラウンドアプリ、コンテキストウィンドウに12-14GBを残します。</strong>これは、すべてのApple Silicon Macに適用される「統合メモリ=VRAM」という同じ論理で、別個のGPUメモリプールを気にする必要はありません。',
          'スペックシートに記載されたフルの32GBという数字を前提に計画しないでください。macOS自体は通常アイドル時に4-6GBを確保し、バックグラウンドプロセスがさらに追加します。おおよそ26-28GBを、広告されている32GBではなく、モデル+コンテキストの現実的な実用上の上限と考えてください。',
          '70Bモデルは妥当な品質では全く収まりません。Q4で約40GBが必要で、macOSのオーバーヘッド以前に予算を大きく超えます。読み込む唯一の方法はQ2_K量子化(約22GB)ですが、推論を要するタスクで出力品質が測定可能なほど低下します。特に70Bクラスの品質が必要な場合は、代わりに64GB以上の統合メモリ構成を検討してください。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'AmazonでMac Mini M4 Pro 32GB構成を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'AmazonでMacBook Pro M4 Pro 32GB構成を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '同じ32GB Macでの32B(Q4) vs 70B(Q2_K)',
        content: [
          'Q4の32Bモデルは、フル精度モデルに対する品質低下が最小限に抑えられた、よく較正された量子化レベルを提供します。Q2_Kに押し込まれた70Bモデルは、大きなパラメータ数をより積極的な圧縮と引き換えにします — この2つの効果はおおよそ相殺し合う傾向があり、実際には32B/Q4の組み合わせの方が精度重視のタスクでは通常より信頼できる選択です。',
          'ワークフローがコードや数学ではなくカジュアルなチャットであれば、70B/Q2_Kオプションを試す価値があります — ただし、実際のタスクに何を使うかによって正解が変わるため、実際のタスクで両方をベンチマークしてから決めてください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'macOSはアイドル時に実際どれくらいの統合メモリを使いますか?',
            a: '起動直後のシステムではおおよそ4-6GB、ブラウザや他のアプリを開くとさらに増えます。モデルのサイズを決める際はこれを見込んでください — 広告されているフルの統合メモリ量がLLMに使えると想定しないでください。',
          },
          {
            q: '32GBの統合メモリは32GBのVRAMと同じですか?',
            a: 'LLMのサイズ設定の目的では、機能的には同じです。Apple SiliconはCPUとGPU間で一つのメモリプールを共有するため、統合メモリの数値が専用GPUのVRAM容量と比較すべき数字です。',
          },
          {
            q: '32GBではなく48GBにすべきですか?',
            a: '予算が許し、より多くのコンテキスト余裕を持った快適な32B実行を望む、あるいは中程度の量子化でより大きなモデルを試したい場合、48GBは意味のあるステップアップです。32Bクラスのモデルには32GBが現実的な最低ラインであり、理想の量ではありません。',
          },
          {
            q: 'OllamaとLM Studio、どちらが統合メモリをうまく扱いますか?',
            a: 'どちらもApple独自のMetalバックエンドを基盤としており、統合メモリの管理方法は似ています。Apple Siliconにおけるメモリ管理に特化した意味のある優位性はどちらにもありません。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Mac Mini M4はローカルLLMに向いていますか?](/prompt-bites/mac-mini-m4-local-llm) — 基本構成とPro構成の比較',
          '[eGPUなしのMacBook Airに最適なローカルLLM](/prompt-bites/best-local-llm-macbook-air-no-egpu) — エントリーレベルのApple Silicon層',
          '[70BモデルにどれだけのVRAMが必要?](/prompt-bites/vram-for-70b-model) — メモリ計算の基礎',
          '[2026年版 ローカルLLM向けGPU購入ガイド](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 統合メモリでは足りなくなり、専用VRAMが欲しくなったときに',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    title: '32GB 통합 메모리 Mac을 위한 최적의 로컬 LLM은?',
    seoTitle: '32GB 통합 메모리 Mac 최적 로컬 LLM 2026',
    metaDescription: '32GB 통합 메모리 Mac을 위한 최적의 로컬 LLM: Q4의 32B 모델(약 18-20GB)로 macOS를 위한 여유 공간이 남습니다. 70B는 공격적인 저비트 양자화에서만 맞습니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: '32GB 통합 메모리 Mac(Mac Mini/MacBook Pro M4 Pro) 구매자로 모델 크기를 선택하는 사람',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>32GB 통합 메모리 Mac(Mac Mini M4 Pro나 MacBook Pro M4 Pro)에서 최적의 로컬 LLM은 Qwen3 32B 같은 32B 모델을 Q4 양자화로 구동하는 것이며, 약 18-20GB가 필요해 macOS와 컨텍스트를 위한 12-14GB가 남습니다.</strong> 70B 모델은 공격적인 Q2_K 양자화에서만 맞으며, 실질적인 품질 저하가 있습니다.',
    toc: [
      { label: '최적의 선택: Q4의 32B 모델', anchor: '#best-pick' },
      { label: '동일한 32GB Mac에서 Q4의 32B 대 Q2_K의 70B', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '32GB 통합 메모리 Mac을 위한 최적의 로컬 LLM은 무엇입니까?',
        answer: 'Q4의 Qwen3 32B가 32GB 통합 메모리 Mac에 가장 적합합니다 — 약 18-20GB가 필요해 macOS를 위한 편안한 여유 공간이 남습니다. 70B 모델은 Q2_K에서만 맞으며, 눈에 띄는 품질 저하가 있습니다.',
        bullets: [
          'Q4_K_M의 32B 모델은 약 18-20GB가 필요합니다 — 32GB Mac에서 macOS와 컨텍스트를 위한 12-14GB가 남습니다.',
          'macOS 자체가 유휴 상태에서 일반적으로 4-6GB를 사용하므로, 전체 32GB가 아니라 약 26-28GB를 실질적인 사용 가능 한계로 취급하십시오.',
          '70B 모델은 Q4에서 약 40GB가 필요합니다 — 전혀 맞지 않으며, Q2_K(약 22GB)만 눈에 띄는 품질 손실과 함께 겨우 들어갑니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적의 선택: 32B 모델(예: Qwen3 32B)을 Q4에서 — 약 18-20GB가 필요하며 총 32GB에서 편안합니다',
          '약 26-28GB를 실질적인 사용 가능 한계로 취급하십시오 — macOS 자체가 유휴 상태에서 4-6GB를 예약합니다',
          '70B 모델은 Q4에서 약 40GB가 필요해 맞지 않습니다. Q2_K(약 22GB)만 실질적인 품질 저하와 함께 들어갑니다',
          '32B가 한계에 너무 가깝게 느껴진다면 14B 모델이 상당한 여유와 함께 구동됩니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Q4의 32B 모델',
        content: [
          '<strong>32GB 통합 메모리 Mac은 Q4 양자화의 32B급 모델에 거의 정확히 맞는 크기입니다 — 모델은 약 18-20GB가 필요해 macOS, 백그라운드 앱, 컨텍스트 윈도우를 위한 12-14GB가 남습니다.</strong> 이는 모든 Apple Silicon Mac에 적용되는 것과 동일한 통합 메모리가 곧 VRAM이라는 논리입니다. 별도의 GPU 메모리 풀을 걱정할 필요가 없습니다.',
          '사양표의 전체 32GB 수치를 기준으로 계획하지 마십시오. macOS 자체가 유휴 상태에서 일반적으로 4-6GB를 예약하며, 백그라운드 프로세스가 더 추가됩니다. 광고된 32GB가 아니라 모델과 컨텍스트를 합쳐 약 26-28GB를 현실적인 사용 가능 한계로 취급하십시오.',
          '70B 모델은 어떤 합리적인 품질로도 맞지 않습니다. Q4에서 약 40GB가 필요해 macOS 오버헤드를 고려하기도 전에 예산을 훨씬 초과합니다. 로드할 수 있는 유일한 방법은 Q2_K 양자화(약 22GB)이며, 이는 추론 중심 작업에서 출력 품질을 측정 가능하게 저하시킵니다. 특별히 70B급 품질이 필요하다면 64GB 이상의 통합 메모리 구성을 대신 검토하십시오.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'Amazon에서 Mac Mini M4 Pro 32GB 구성 가격 확인하기',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'Amazon에서 MacBook Pro M4 Pro 32GB 구성 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '동일한 32GB Mac에서 Q4의 32B 대 Q2_K의 70B',
        content: [
          'Q4의 32B 모델은 전체 정밀도 모델 대비 최소한의 품질 손실로 잘 조정된 양자화 수준을 제공합니다. Q2_K에 압축된 70B 모델은 더 많은 파라미터 수를 훨씬 더 공격적인 압축과 맞바꾸며, 두 효과는 대략 상쇄될 수 있습니다. 실제로는 정밀도에 민감한 작업에는 32B/Q4 조합이 대체로 더 신뢰할 수 있는 선택입니다.',
          '워크플로가 코드나 수학이 아니라 일상적인 채팅이라면 70B/Q2_K 옵션도 시도해 볼 가치가 있습니다 — 다만 무엇에 모델을 사용하는지에 따라 정답이 달라지므로, 결정하기 전에 실제 작업에서 두 가지를 벤치마크하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'macOS는 유휴 상태에서 실제로 얼마나 많은 통합 메모리를 사용합니까?',
            a: '갓 부팅한 시스템에서 대략 4-6GB이며, 브라우저와 다른 앱을 열면 더 늘어납니다. 모델 크기를 산정할 때 이를 고려하십시오 — 광고된 전체 통합 메모리 수치가 LLM에서 모두 사용 가능하다고 가정하지 마십시오.',
          },
          {
            q: '32GB 통합 메모리는 32GB VRAM과 같습니까?',
            a: 'LLM 크기 산정 목적으로는 기능적으로 그렇습니다. Apple Silicon은 CPU와 GPU 간에 하나의 메모리 풀을 공유하므로, 통합 메모리 수치가 전용 GPU의 VRAM 용량과 비교할 숫자입니다.',
          },
          {
            q: '32GB 대신 48GB를 구매해야 합니까?',
            a: '예산이 허락하고 더 많은 컨텍스트 여유와 함께 편안한 32B 구동을 원하거나, 중간 양자화에서 더 큰 모델을 시도하고 싶다면 48GB는 의미 있는 업그레이드입니다. 32GB는 32B급 모델의 실질적인 최소치이지, 이상적인 양은 아닙니다.',
          },
          {
            q: 'Ollama나 LM Studio 중 어느 것이 통합 메모리를 더 잘 처리합니까?',
            a: '둘 다 내부적으로 Apple의 Metal 백엔드를 사용하며 통합 메모리를 유사하게 관리합니다. Apple Silicon의 메모리 관리에서 어느 쪽도 특별한 우위를 갖지 않습니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[Mac Mini M4는 로컬 LLM에 좋은가?](/prompt-bites/mac-mini-m4-local-llm) — 기본 및 Pro 구성 비교',
          '[eGPU 없는 MacBook Air를 위한 최적의 로컬 LLM](/prompt-bites/best-local-llm-macbook-air-no-egpu) — 진입 단계의 Apple Silicon 등급',
          '[70B 모델에는 얼마나 많은 VRAM이 필요한가?](/prompt-bites/vram-for-70b-model) — 근본적인 메모리 계산',
          '[2026년 로컬 LLM GPU 구매 가이드](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 통합 메모리로 부족해져 전용 VRAM이 필요할 때',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    title: 'Qual o Melhor LLM Local para um Mac com 32GB de Memória Unificada?',
    seoTitle: 'Melhor LLM Local para Mac com 32GB de Memória Unificada 2026',
    metaDescription: 'Melhor LLM local para um Mac com 32GB de memória unificada: modelos de 32B em Q4 (~18-20GB), deixando espaço para o macOS. 70B só cabe em quantização agressiva de baixa taxa de bits.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores de um Mac com 32GB de memória unificada (Mac Mini/MacBook Pro M4 Pro) escolhendo o tamanho do modelo',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Em um Mac com 32 GB de memória unificada (Mac Mini M4 Pro ou MacBook Pro M4 Pro), o melhor LLM local é um modelo de 32B — como o Qwen3 32B — em quantização Q4, que precisa de aproximadamente 18-20 GB e deixa 12-14 GB para o macOS e o contexto.</strong> Um modelo de 70B só cabe em quantização agressiva Q2_K, com uma queda real de qualidade.',
    toc: [
      { label: 'Melhor Escolha: Modelos de 32B em Q4', anchor: '#best-pick' },
      { label: '32B em Q4 vs 70B em Q2_K no Mesmo Mac de 32 GB', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM local para um Mac com 32GB de memória unificada?',
        answer: 'O Qwen3 32B em Q4 é o melhor ajuste para um Mac com 32GB de memória unificada — ele precisa de ~18-20GB, deixando espaço confortável para o macOS. Um modelo de 70B só cabe em Q2_K, com uma queda visível de qualidade.',
        bullets: [
          'Um modelo de 32B em Q4_K_M precisa de aproximadamente 18-20 GB — cabe com 12-14 GB restantes para o macOS e contexto em um Mac de 32 GB.',
          'O próprio macOS geralmente usa de 4-6 GB em repouso, então trate ~26-28 GB como o teto prático utilizável, não os 32 GB completos.',
          'Um modelo de 70B precisa de ~40 GB em Q4 — não cabe de forma alguma; só o Q2_K (~22 GB) se encaixa, com perda visível de qualidade.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: um modelo de 32B (ex.: Qwen3 32B) em Q4 — precisa de ~18-20 GB, confortável em 32 GB totais',
          'Trate ~26-28 GB como o teto prático utilizável — o próprio macOS reserva 4-6 GB em repouso',
          'Um modelo de 70B precisa de ~40 GB em Q4 e não cabe; só o Q2_K (~22 GB) se encaixa, com queda real de qualidade',
          'Modelos de 14B rodam com folga generosa se o 32B parecer muito próximo do teto para seu fluxo de trabalho',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Modelos de 32B em Q4',
        content: [
          '<strong>Um Mac com 32 GB de memória unificada é dimensionado quase exatamente para modelos de classe 32B em quantização Q4 — o modelo precisa de aproximadamente 18-20 GB, deixando 12-14 GB para o macOS, apps em segundo plano e a janela de contexto.</strong> Essa é a mesma lógica de memória-unificada-equivale-a-VRAM que se aplica em todos os Macs Apple Silicon: não há um pool de memória de GPU separado a se preocupar.',
          'Não planeje em torno do número completo de 32 GB da ficha técnica. O próprio macOS geralmente reserva de 4-6 GB em repouso, e processos em segundo plano adicionam mais. Trate aproximadamente 26-28 GB como o teto realista utilizável para modelo mais contexto, não os 32 GB anunciados.',
          'Um modelo de 70B não cabe em qualidade razoável alguma: ele precisa de cerca de 40 GB em Q4, bem acima do orçamento mesmo antes da sobrecarga do macOS. A única forma de carregá-lo é a quantização Q2_K (aproximadamente 22 GB), que degrada mensuravelmente a qualidade da saída em tarefas de raciocínio pesado. Se você precisa especificamente de qualidade de classe 70B, procure uma configuração de memória unificada de 64 GB ou maior.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro (32GB unified memory)',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: 'Confira a configuração do Mac Mini M4 Pro 32GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro (32GB unified memory)',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: 'Confira a configuração do MacBook Pro M4 Pro 32GB na Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32B em Q4 vs 70B em Q2_K no Mesmo Mac de 32 GB',
        content: [
          'Um modelo de 32B em Q4 oferece um nível de quantização bem calibrado com perda mínima de qualidade em comparação com o modelo em precisão total. Um modelo de 70B espremido em Q2_K troca sua contagem maior de parâmetros por uma compressão muito mais agressiva — os dois efeitos podem se cancelar aproximadamente, e na prática a combinação 32B/Q4 costuma ser a escolha mais confiável para tarefas sensíveis a precisão.',
          'Se seu fluxo de trabalho é conversa casual em vez de código ou matemática, a opção 70B/Q2_K vale a pena testar — mas faça benchmark de ambas nas suas tarefas reais antes de decidir, já que a resposta certa depende para que você está usando o modelo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Quanta memória unificada o macOS realmente usa em repouso?',
            a: 'Aproximadamente 4-6 GB em um sistema recém-inicializado, mais uma vez que você abre um navegador e outros apps. Considere isso ao dimensionar um modelo — não presuma que o número completo de memória unificada anunciado está disponível para o LLM.',
          },
          {
            q: '32 GB de memória unificada é o mesmo que 32 GB de VRAM?',
            a: 'Funcionalmente, sim, para fins de dimensionamento de LLM. O Apple Silicon compartilha um único pool de memória entre CPU e GPU, então o número de memória unificada é o valor a comparar com a capacidade de VRAM de uma GPU dedicada.',
          },
          {
            q: 'Devo pegar 48 GB em vez de 32 GB?',
            a: 'Se seu orçamento permitir e você quiser rodar um 32B confortável com mais espaço de contexto, ou tentar modelos maiores em quantização moderada, 48 GB é um passo significativo acima. 32 GB é o mínimo prático para modelos de classe 32B, não a quantidade ideal.',
          },
          {
            q: 'O Ollama ou o LM Studio lida melhor com memória unificada?',
            a: 'Ambos usam o backend Metal da Apple por baixo e gerenciam memória unificada de forma similar. Nenhum tem uma vantagem significativa específica de gerenciamento de memória no Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[O Mac Mini M4 É Bom para LLMs Locais?](/prompt-bites/mac-mini-m4-local-llm) — as configurações base e Pro comparadas',
          '[Melhor LLM Local para um MacBook Air Sem eGPU](/prompt-bites/best-local-llm-macbook-air-no-egpu) — a faixa de entrada do Apple Silicon',
          '[Quanta VRAM Você Precisa para um Modelo de 70B?](/prompt-bites/vram-for-70b-model) — a matemática de memória por trás disso',
          '[Guia de Compra de GPU para LLMs Locais 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — para quando a memória unificada não for suficiente e você quiser VRAM dedicada',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '32GB 统一内存 Mac 的最佳本地 LLM 是什么？',
    seoTitle: '2026 年 32GB 统一内存 Mac 最佳本地 LLM',
    metaDescription: '32GB 统一内存 Mac 的最佳本地 LLM：Q4 下的 32B 模型（约 18-20GB），为 macOS 留有余量。70B 只有在激进的低位量化下才能装下。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac Mini M4 Pro', 'MacBook Pro M4 Pro'],
    educationalLevel: 'Intermediate',
    audience: '选择模型规模的 32GB 统一内存 Mac（Mac Mini/MacBook Pro M4 Pro）买家',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>在 32 GB 统一内存 Mac（Mac Mini M4 Pro 或 MacBook Pro M4 Pro）上，最佳本地 LLM 是 32B 模型——例如 Qwen3 32B——采用 Q4 量化，大约需要 18-20 GB，为 macOS 和上下文留出 12-14 GB。</strong>70B 模型只有在激进的 Q2_K 量化下才能装下，且会带来实际的质量折衷。',
    toc: [
      { label: '最佳选择：Q4 下的 32B 模型', anchor: '#best-pick' },
      { label: '同一台 32 GB Mac 上 Q4 的 32B 对比 Q2_K 的 70B', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '32GB 统一内存 Mac 的最佳本地 LLM 是什么？',
        answer: 'Q4 版本的 Qwen3 32B 是 32GB 统一内存 Mac 的最佳选择——大约需要 18-20GB，为 macOS 留有充足余量。70B 模型只能以 Q2_K 装下，且质量明显下降。',
        bullets: [
          '32B 模型在 Q4_K_M 下大约需要 18-20 GB——在 32 GB Mac 上可以装下，并为 macOS 和上下文留出 12-14 GB。',
          'macOS 本身在空闲状态下通常占用 4-6 GB，因此应把约 26-28 GB 视为实际可用上限，而非完整的 32 GB。',
          '70B 模型在 Q4 下需要约 40 GB——完全装不下；只有 Q2_K（约 22 GB）能勉强塞入，但质量会明显下降。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择：32B 模型（如 Qwen3 32B）的 Q4 版本——大约需要 18-20 GB，在 32 GB 总量下轻松容纳',
          '把约 26-28 GB 当作实际可用上限——macOS 本身在空闲时就占用 4-6 GB',
          '70B 模型在 Q4 下需要约 40 GB，完全装不下；只有 Q2_K（约 22 GB）能勉强塞入，质量明显下降',
          '如果 32B 对你的工作流来说太接近上限，14B 模型则拥有大量余量',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Q4 下的 32B 模型',
        content: [
          '<strong>32 GB 统一内存 Mac 几乎恰好为 Q4 量化的 32B 级模型量身定制——模型大约需要 18-20 GB，为 macOS、后台应用和上下文窗口留出 12-14 GB。</strong>这与适用于所有 Apple Silicon Mac 的「统一内存等于显存」逻辑相同：不存在需要担心的独立 GPU 内存池。',
          '不要按规格表上完整的 32 GB 数字来规划。macOS 本身在空闲时通常占用 4-6 GB，后台进程还会占用更多。将大约 26-28 GB 视为模型加上下文的实际可用上限，而非宣传的 32 GB。',
          '70B 模型在任何合理质量下都装不下：它在 Q4 下大约需要 40 GB，即便在计入 macOS 开销之前就已超出预算。唯一能加载的方式是 Q2_K 量化（大约 22 GB），这会在推理密集型任务上明显降低输出质量。如果你确实需要 70B 级别的质量，应考虑 64 GB 或更大的统一内存配置。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac%20Mini%20M4%20Pro%2032GB',
            productName: 'Mac Mini M4 Pro（32GB 统一内存）',
            productCategory: 'desktop',
            priceRange: '1800-2000',
            label: '在 Amazon 查看 Mac Mini M4 Pro 32GB 配置',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook%20Pro%20M4%20Pro%2032GB',
            productName: 'MacBook Pro M4 Pro（32GB 统一内存）',
            productCategory: 'laptop',
            priceRange: '2200-2600',
            label: '在 Amazon 查看 MacBook Pro M4 Pro 32GB 配置',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '同一台 32 GB Mac 上 Q4 的 32B 对比 Q2_K 的 70B',
        content: [
          'Q4 版本的 32B 模型有着经过良好校准的量化水平，相比全精度模型质量损失极小。压缩到 Q2_K 的 70B 模型用更庞大的参数量交换更激进的压缩——两种效应大致相互抵消，实际上 32B/Q4 组合通常是对精度敏感任务更可靠的选择。',
          '如果你的工作流是休闲聊天而非代码或数学，值得试试 70B/Q2_K 方案——但在正式采用前，先在你实际的任务上对两者进行基准测试，因为正确答案取决于你用模型做什么。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'macOS 空闲时实际占用多少统一内存？',
            a: '刚启动的系统上大约 4-6 GB，打开浏览器和其他应用后会更多。规划模型规模时要考虑这一点——不要假设完整的宣传统一内存数字都可供 LLM 使用。',
          },
          {
            q: '32 GB 统一内存等同于 32 GB 显存吗？',
            a: '就 LLM 规模计算而言，功能上是等同的。Apple Silicon 在 CPU 和 GPU 之间共享同一个内存池，因此统一内存数字就是应与独立 GPU 显存容量比较的数字。',
          },
          {
            q: '我应该选 48 GB 而不是 32 GB 吗？',
            a: '如果预算允许，并且你想要更舒适地运行 32B、留有更多上下文余量，或想尝试更大的模型（中等量化），48 GB 是有意义的升级。32 GB 是 32B 级模型的实际最低要求，而非理想数量。',
          },
          {
            q: 'Ollama 还是 LM Studio 更好地处理统一内存？',
            a: '两者底层都使用苹果的 Metal 后端，管理统一内存的方式也相似。在 Apple Silicon 上的内存管理方面，两者都没有明显优势。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[Mac Mini M4 适合本地 LLM 吗？](/prompt-bites/mac-mini-m4-local-llm) — 基础版和 Pro 版配置对比',
          '[没有 eGPU 的 MacBook Air 最佳本地 LLM](/prompt-bites/best-local-llm-macbook-air-no-egpu) — 入门级 Apple Silicon 档位',
          '[70B 模型需要多少显存？](/prompt-bites/vram-for-70b-model) — 底层内存计算方法',
          '[2026 年本地 LLM GPU 购买指南](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 当统一内存不够用、需要独立显存时',
        ],
      },
    },
  },
}
