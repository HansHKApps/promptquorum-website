import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-en.webp',
    title: 'Best Local LLM for a Mac with 32GB Unified Memory in 2026',
    seoTitle: 'Best Local LLM for 32GB Unified Memory Mac 2026',
    metaDescription: 'Best local LLM for a 32GB unified memory Mac: 32B models at Q4 (~18-20GB), leaving headroom for macOS. Mac mini vs MacBook Pro, and when to go 48GB or 64GB instead.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Buyers of a 32GB unified memory Mac (Mac mini or MacBook Pro) choosing a model size',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>On a 32GB unified memory Mac, the best local LLM is a 32B model — like Qwen3 32B — at Q4 quantization, which needs roughly 18-20GB and leaves 12-14GB for macOS and context.</strong> 32GB is a good practical target for 32B Q4 models, not a hard minimum — actual headroom depends on quantization, context length, and what else is running. For anything past 32B, 48GB or 64GB is the better choice. Checked August 26, 2026: Apple\'s Mac mini lineup just moved to M6/M5 Pro chips (shipping September 22), and MacBook Pro has moved to M5 Pro/M5 Max — buy on unified memory capacity, not a specific chip generation.',
    toc: [
      { label: 'Best Pick: 32B Models at Q4', anchor: '#best-pick' },
      { label: 'Which 32GB Mac?', anchor: '#which-mac' },
      { label: '14B vs 32B vs 70B on 32GB', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for a 32GB unified memory Mac?',
        answer: 'Qwen3 32B at Q4 is the best fit for a 32GB unified memory Mac — it needs ~18-20GB, leaving comfortable headroom for macOS. Buy the Mac for its unified memory capacity, not a specific chip generation: Apple\'s current lineup (checked August 26, 2026) spans M6/M5 Pro Mac minis and M5 Pro/M5 Max MacBook Pros, with 32GB available as a configuration option on several of them.',
        bullets: [
          'A 32B model at Q4_K_M needs roughly 18-20GB — fits with 12-14GB left for macOS and context on a 32GB Mac.',
          'macOS itself typically uses 4-6GB at idle, so treat ~26-28GB as the practical usable ceiling, not the full 32GB.',
          'For 70B-class quality, 32GB is too tight at a useful quantization level — look at 48GB or 64GB instead.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: a 32B model (e.g. Qwen3 32B) at Q4 — needs ~18-20GB, comfortable on 32GB total',
          'Treat ~26-28GB as the practical usable ceiling — macOS itself reserves 4-6GB at idle',
          '70B at Q4 doesn\'t fit comfortably on 32GB — go 48GB+ if that\'s the goal',
          'Buy on unified memory capacity, not chip generation — Apple\'s Mac mini and MacBook Pro lineups both moved chips in 2026',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: 32B Models at Q4',
        content: [
          '<strong>A 32GB unified memory Mac is a good practical target for 32B-class models at Q4 quantization — the model needs roughly 18-20GB, leaving 12-14GB for macOS, background apps, and the context window.</strong> This is the same unified-memory-equals-VRAM logic that applies across all Apple Silicon Macs: there is no separate GPU memory pool to worry about.',
          'Don\'t plan around the full 32GB figure on the spec sheet. macOS itself typically reserves 4-6GB at idle, and background processes add more. Treat roughly 26-28GB as the realistic usable ceiling for model plus context, not the advertised 32GB.',
          'A 70B model doesn\'t fit at a useful quantization level on 32GB: it needs about 40GB at Q4. If you specifically need 70B-class quality, look at a 48GB or 64GB unified memory configuration instead — don\'t buy 32GB expecting to run 70B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Check Mac mini 32GB configuration',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Check MacBook Pro 32GB configuration',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'Which 32GB Mac?',
        content: [
          '<strong>Mac mini — best value.</strong> A 32GB Mac mini gives you a compact, quiet local-AI machine at the lowest cost for the memory capacity. Checked August 26, 2026: Apple just refreshed the Mac mini lineup with M6 and M5 Pro chips (pre-orders open, shipping September 22, 2026) — memory is configured at purchase and cannot be upgraded later, so confirm the 32GB option is available on the specific chip tier you\'re looking at before buying.',
          '<strong>MacBook Pro — best if you need mobility.</strong> Choose a 32GB MacBook Pro only if you actually need to run models on the go; otherwise the Mac mini is the better value for the same memory capacity. Apple\'s MacBook Pro lineup has moved to M5 Pro/M5 Max chips, with the older M4 Pro generation now typically found at closeout pricing.',
          'Either way, buy for the unified memory figure, not the chip name — a 32GB config running Qwen3 32B performs similarly across recent Apple Silicon generations for this workload.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Check Mac mini 32GB prices',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Check MacBook Pro 32GB prices',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '14B vs 32B vs 70B on 32GB',
        content: [
          'A 14B model at Q4 runs with heavy headroom on 32GB — an easy fit. A 32B model at Q4 is the sweet spot: well-calibrated quantization with minimal quality loss versus full precision, and it uses most of the practical 26-28GB ceiling without overrunning it. A 70B model doesn\'t fit at a useful quantization level (Q4 needs ~40GB); an aggressive Q2_K squeeze is technically possible but trades enough quality that it\'s rarely the better choice over a well-quantized 32B model for precision-sensitive tasks.',
          'Don\'t buy a 32GB Mac specifically to run 70B — if 70B-class quality is the actual goal, a 48GB or 64GB configuration is the right target from the start.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much unified memory does macOS actually use at idle?',
            a: 'Roughly 4-6GB on a freshly booted system, more once you open a browser and other apps. Budget for this when sizing a model — don\'t assume the full advertised unified memory figure is available to the LLM.',
          },
          {
            q: 'Is 32GB unified memory the same as 32GB of VRAM?',
            a: 'Functionally, yes, for LLM sizing purposes. Apple Silicon shares one memory pool between CPU and GPU, so the unified memory figure is the number to compare against a dedicated GPU\'s VRAM capacity.',
          },
          {
            q: 'Should I get 48GB instead of 32GB?',
            a: 'If your budget allows it and you want a comfortable 32B run with more context headroom, or you want to attempt larger models at moderate quantization, 48GB is a meaningful step up. 32GB is a good practical target for 32B-class models, not the ideal amount for everyone.',
          },
          {
            q: 'Mac mini or MacBook Pro for a 32GB local LLM setup?',
            a: 'Mac mini for best value if you don\'t need mobility — same memory capacity at a lower price than an equivalent MacBook Pro. MacBook Pro only if you actually need to run models away from a desk.',
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
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-ar.webp',
    title: 'أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB في 2026',
    seoTitle: 'أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB 2026',
    metaDescription: 'أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB: نماذج 32B بدقة Q4 (~18-20GB) مع هامش لنظام macOS. مقارنة Mac mini وMacBook Pro، ومتى تختار 48GB أو 64GB بدلاً من ذلك.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: 'مشترو جهاز Mac بذاكرة موحدة 32GB (Mac mini أو MacBook Pro) الذين يختارون حجم النموذج',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>على جهاز Mac بذاكرة موحدة 32GB، أفضل LLM محلي هو نموذج 32B — مثل Qwen3 32B — بتكميم Q4، الذي يحتاج تقريبًا 18-20GB ويترك 12-14GB لنظام macOS والسياق.</strong> تُعد 32GB هدفًا عمليًا جيدًا لنماذج 32B بدقة Q4، وليست حدًا أدنى صارمًا — يعتمد الهامش الفعلي المتاح على التكميم وطول السياق وما يعمل بالتوازي على الجهاز. لأي شيء يتجاوز 32B، يُعد 48GB أو 64GB الخيار الأفضل. تم التحقق في 26 أغسطس 2026: انتقلت تشكيلة Mac mini من آبل للتو إلى شرائح M6/M5 Pro (يبدأ الشحن 22 سبتمبر)، وانتقل MacBook Pro إلى M5 Pro/M5 Max — اشترِ بناءً على سعة الذاكرة الموحدة، وليس جيل شريحة معين.',
    toc: [
      { label: 'أفضل اختيار: نماذج 32B بدقة Q4', anchor: '#best-pick' },
      { label: 'أي جهاز Mac بذاكرة 32GB؟', anchor: '#which-mac' },
      { label: '14B مقابل 32B مقابل 70B على 32GB', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل LLM محلي لجهاز Mac بذاكرة موحدة 32GB؟',
        answer: 'يُعد Qwen3 32B بدقة Q4 الأنسب لجهاز Mac بذاكرة موحدة 32GB — يحتاج ~18-20GB، مع ترك هامش مريح لنظام macOS. اشترِ الجهاز بناءً على سعة الذاكرة الموحدة، وليس جيل شريحة معين: تشمل تشكيلة آبل الحالية (بحسب التحقق في 26 أغسطس 2026) أجهزة Mac mini بشرائح M6/M5 Pro وأجهزة MacBook Pro بشرائح M5 Pro/M5 Max، مع توفر خيار 32GB كإعداد اختياري على عدة طرازات منها.',
        bullets: [
          'نموذج 32B بدقة Q4_K_M يحتاج تقريبًا 18-20GB — يستوعب مع بقاء 12-14GB لنظام macOS والسياق على جهاز Mac بذاكرة 32GB.',
          'يستخدم macOS نفسه عادةً 4-6GB عند الخمول، لذا عامل ~26-28GB كسقف الاستخدام العملي، وليس الـ32GB الكاملة.',
          'بالنسبة لجودة من فئة 70B، تُعد 32GB ضيقة جدًا عند مستوى تكميم مفيد — انظر إلى 48GB أو 64GB بدلاً من ذلك.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار: نموذج 32B (مثل Qwen3 32B) بدقة Q4 — يحتاج ~18-20GB، مريح على 32GB إجمالية',
          'عامل ~26-28GB كسقف الاستخدام العملي — يحجز macOS نفسه 4-6GB عند الخمول',
          'نموذج 70B بدقة Q4 لا يستوعب بشكل مريح على 32GB — انتقل إلى 48GB+ إذا كان ذلك هو الهدف',
          'اشترِ بناءً على سعة الذاكرة الموحدة، وليس جيل الشريحة — انتقلت تشكيلتا Mac mini وMacBook Pro من آبل إلى شرائح جديدة في 2026',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: نماذج 32B بدقة Q4',
        content: [
          '<strong>جهاز Mac بذاكرة موحدة 32GB هدف عملي جيد لنماذج من فئة 32B بتكميم Q4 — يحتاج النموذج تقريبًا 18-20GB، مع ترك 12-14GB لنظام macOS والتطبيقات الخلفية ونافذة السياق.</strong> هذا نفس منطق "الذاكرة الموحدة تساوي VRAM" المطبّق عبر كل أجهزة Apple Silicon: لا يوجد مجمّع ذاكرة GPU منفصل يدعو للقلق بشأنه.',
          'لا تخطط حول رقم الـ32GB الكامل على ورقة المواصفات. يحجز macOS نفسه عادةً 4-6GB عند الخمول، وتضيف العمليات الخلفية المزيد. عامل تقريبًا 26-28GB كسقف واقعي قابل للاستخدام للنموذج بالإضافة إلى السياق، وليس الـ32GB المُعلنة.',
          'لا يستوعب نموذج 70B عند مستوى تكميم مفيد على 32GB: يحتاج حوالي 40GB بدقة Q4. إذا احتجت تحديدًا جودة من فئة 70B، فانظر إلى تكوين ذاكرة موحدة 48GB أو 64GB بدلًا من ذلك — لا تشترِ 32GB متوقعًا تشغيل 70B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'تحقق من تكوين Mac mini بذاكرة 32GB',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'تحقق من تكوين MacBook Pro بذاكرة 32GB',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'أي جهاز Mac بذاكرة 32GB؟',
        content: [
          '<strong>Mac mini — أفضل قيمة.</strong> يمنحك جهاز Mac mini بذاكرة 32GB جهازًا مدمجًا وهادئًا للذكاء الاصطناعي المحلي بأقل تكلفة مقابل سعة الذاكرة. تم التحقق في 26 أغسطس 2026: أطلقت آبل للتو تشكيلة Mac mini المحدّثة بشرائح M6 وM5 Pro (الطلب المسبق متاح، ويبدأ الشحن 22 سبتمبر 2026) — تُحدَّد الذاكرة عند الشراء ولا يمكن ترقيتها لاحقًا، لذا تأكد من توفر خيار 32GB على فئة الشريحة المحددة التي تنظر إليها قبل الشراء.',
          '<strong>MacBook Pro — الأفضل إذا احتجت التنقل.</strong> اختر MacBook Pro بذاكرة 32GB فقط إذا كنت فعلاً بحاجة لتشغيل النماذج أثناء التنقل؛ وإلا فإن Mac mini هو الخيار الأفضل قيمةً لنفس سعة الذاكرة. انتقلت تشكيلة MacBook Pro من آبل إلى شرائح M5 Pro/M5 Max، بينما يوجد جيل M4 Pro الأقدم عادةً في مخزون التصفية بأسعار مخفضة.',
          'في الحالتين، اشترِ بناءً على رقم الذاكرة الموحدة، وليس اسم الشريحة — يعمل إعداد 32GB مع تشغيل Qwen3 32B بأداء متقارب عبر أجيال Apple Silicon الحديثة لهذا النوع من الأعباء.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'تحقق من أسعار Mac mini بذاكرة 32GB',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'تحقق من أسعار MacBook Pro بذاكرة 32GB',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '14B مقابل 32B مقابل 70B على 32GB',
        content: [
          'يعمل نموذج 14B بدقة Q4 بهامش كبير على 32GB — يستوعب بسهولة. يُعد نموذج 32B بدقة Q4 نقطة التوازن المثالية: مستوى تكميم مضبوط جيدًا بفقدان جودة ضئيل مقارنة بالدقة الكاملة، ويستخدم معظم السقف العملي البالغ 26-28GB دون تجاوزه. لا يستوعب نموذج 70B عند مستوى تكميم مفيد (يحتاج Q4 حوالي 40GB)؛ ضغط Q2_K العدواني ممكن تقنيًا لكنه يقايض جودة كافية بحيث نادرًا ما يكون الخيار الأفضل مقارنة بنموذج 32B مكمَّم جيدًا للمهام الحساسة للدقة.',
          'لا تشترِ جهاز Mac بذاكرة 32GB خصيصًا لتشغيل 70B — إذا كانت جودة من فئة 70B هي الهدف الفعلي، فإن تكوين 48GB أو 64GB هو الهدف الصحيح منذ البداية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم من الذاكرة الموحدة يستخدمها macOS فعليًا عند الخمول؟',
            a: 'حوالي 4-6GB على نظام تم إقلاعه حديثًا، وأكثر بمجرد فتح متصفح وتطبيقات أخرى. ضع هذا في الميزانية عند تحديد حجم النموذج — لا تفترض أن رقم الذاكرة الموحدة المُعلن بالكامل متاح لـ LLM.',
          },
          {
            q: 'هل ذاكرة موحدة 32GB هي نفسها 32GB من VRAM؟',
            a: 'وظيفيًا، نعم، لأغراض تحديد حجم LLM. تشترك أجهزة Apple Silicon في مجمّع ذاكرة واحد بين CPU وGPU، لذا فإن رقم الذاكرة الموحدة هو الرقم الذي يُقارن مقابل سعة VRAM لبطاقة GPU مخصصة.',
          },
          {
            q: 'هل يجب أن أحصل على 48GB بدلًا من 32GB؟',
            a: 'إذا سمحت ميزانيتك بذلك وأردت تشغيل 32B مريحًا بهامش سياق أكبر، أو أردت محاولة نماذج أكبر بتكميم معتدل، فإن 48GB خطوة ذات معنى للأمام. تُعد 32GB هدفًا عمليًا جيدًا لنماذج من فئة 32B، وليست الكمية المثالية للجميع.',
          },
          {
            q: 'هل Mac mini أم MacBook Pro أفضل لإعداد LLM محلي بذاكرة 32GB؟',
            a: 'Mac mini للحصول على أفضل قيمة إذا لم تكن بحاجة للتنقل — نفس سعة الذاكرة بسعر أقل من MacBook Pro المكافئ. اختر MacBook Pro فقط إذا كنت فعلاً بحاجة لتشغيل النماذج بعيدًا عن مكتبك.',
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
          '[هل Mac Mini M4 جيد لتشغيل LLM محليًا؟](/ar/prompt-bites/mac-mini-m4-local-llm) — تكوينات M4 الأساسية وM4 Pro مقارنة',
          '[أفضل LLM محلي لجهاز MacBook Air بدون eGPU](/ar/prompt-bites/best-local-llm-macbook-air-no-egpu) — فئة Apple Silicon المبتدئة',
          '[كم VRAM يلزم لنموذج 70B؟](/ar/prompt-bites/vram-for-70b-model) — حساب الذاكرة الأساسي',
          '[دليل شراء GPU لتشغيل LLM محليًا 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — لعندما تتجاوز الذاكرة الموحدة وتريد VRAM مخصصة',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-de.webp',
    title: 'Bestes lokales LLM für einen Mac mit 32 GB Unified Memory in 2026',
    seoTitle: 'Bestes lokales LLM für 32GB Unified Memory Mac 2026',
    metaDescription: 'Bestes lokales LLM für einen Mac mit 32GB Unified Memory: 32B-Modelle bei Q4 (~18-20GB), mit Reserve für macOS. Mac mini vs. MacBook Pro, und wann sich 48GB oder 64GB mehr lohnen.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Käufer eines Macs mit 32 GB Unified Memory (Mac mini oder MacBook Pro), die eine Modellgröße wählen',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Auf einem Mac mit 32 GB Unified Memory ist das beste lokale LLM ein 32B-Modell — etwa Qwen3 32B — bei Q4-Quantisierung, das rund 18-20 GB benötigt und 12-14 GB für macOS und Kontext übrig lässt.</strong> 32 GB sind ein guter praktischer Richtwert für 32B-Q4-Modelle, kein hartes Minimum — der tatsächliche Spielraum hängt von Quantisierung, Kontextlänge und laufenden Hintergrundprozessen ab. Für alles jenseits von 32B sind 48 GB oder 64 GB die bessere Wahl. Stand 26. August 2026: Apples Mac-mini-Reihe ist gerade auf M6/M5-Pro-Chips umgestiegen (Auslieferung ab 22. September), und das MacBook Pro nutzt jetzt M5 Pro/M5 Max — kaufen Sie nach Unified-Memory-Kapazität, nicht nach einer bestimmten Chip-Generation.',
    toc: [
      { label: 'Beste Wahl: 32B-Modelle bei Q4', anchor: '#best-pick' },
      { label: 'Welcher 32-GB-Mac?', anchor: '#which-mac' },
      { label: '14B vs. 32B vs. 70B auf 32 GB', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste lokale LLM für einen Mac mit 32 GB Unified Memory?',
        answer: 'Qwen3 32B bei Q4 passt am besten zu einem Mac mit 32 GB Unified Memory — es benötigt ~18-20 GB und lässt komfortablen Spielraum für macOS. Kaufen Sie den Mac nach seiner Unified-Memory-Kapazität, nicht nach einer bestimmten Chip-Generation: Apples aktuelle Reihe (Stand 26. August 2026) umfasst M6/M5-Pro-Mac-minis und M5-Pro/M5-Max-MacBook-Pros, bei denen 32 GB auf mehreren Modellen als Konfigurationsoption verfügbar sind.',
        bullets: [
          'Ein 32B-Modell bei Q4_K_M benötigt rund 18-20 GB — passt mit 12-14 GB Reserve für macOS und Kontext auf einen 32-GB-Mac.',
          'macOS selbst nutzt im Leerlauf typischerweise 4-6 GB, rechnen Sie also mit ~26-28 GB als praktischer Nutzobergrenze, nicht den vollen 32 GB.',
          'Für Qualität auf 70B-Niveau ist 32 GB bei einer sinnvollen Quantisierungsstufe zu knapp — greifen Sie stattdessen zu 48 GB oder 64 GB.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: ein 32B-Modell (z. B. Qwen3 32B) bei Q4 — benötigt ~18-20 GB, komfortabel bei 32 GB insgesamt',
          'Rechnen Sie mit ~26-28 GB als praktischer Nutzobergrenze — macOS selbst reserviert im Leerlauf 4-6 GB',
          '70B bei Q4 passt nicht komfortabel auf 32 GB — greifen Sie bei diesem Ziel zu 48 GB oder mehr',
          'Kaufen Sie nach Unified-Memory-Kapazität, nicht nach Chip-Generation — Apples Mac-mini- und MacBook-Pro-Reihen sind 2026 beide auf neue Chips umgestiegen',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: 32B-Modelle bei Q4',
        content: [
          '<strong>Ein Mac mit 32 GB Unified Memory ist ein guter praktischer Richtwert für Modelle der 32B-Klasse bei Q4-Quantisierung — das Modell benötigt rund 18-20 GB und lässt 12-14 GB für macOS, Hintergrund-Apps und das Kontextfenster übrig.</strong> Das ist dieselbe Logik „Unified Memory gleich VRAM", die für alle Apple-Silicon-Macs gilt: Es gibt keinen separaten GPU-Speicherpool, um den man sich Sorgen machen müsste.',
          'Planen Sie nicht mit der vollen 32-GB-Zahl auf dem Datenblatt. macOS selbst reserviert im Leerlauf typischerweise 4-6 GB, und Hintergrundprozesse kommen hinzu. Betrachten Sie rund 26-28 GB als realistische Nutzobergrenze für Modell plus Kontext, nicht die beworbenen 32 GB.',
          'Ein 70B-Modell passt bei keiner sinnvollen Quantisierungsstufe auf 32 GB: Es benötigt etwa 40 GB bei Q4. Wenn Sie speziell Qualität auf 70B-Niveau brauchen, greifen Sie stattdessen zu einer Konfiguration mit 48 GB oder 64 GB Unified Memory — kaufen Sie nicht 32 GB in der Erwartung, damit 70B zu betreiben.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Mac mini 32GB Konfiguration prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'MacBook Pro 32GB Konfiguration prüfen',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'Welcher 32-GB-Mac?',
        content: [
          '<strong>Mac mini — bestes Preis-Leistungs-Verhältnis.</strong> Ein 32-GB-Mac-mini bietet eine kompakte, leise Maschine für lokale KI zum niedrigsten Preis für diese Speicherkapazität. Stand 26. August 2026: Apple hat die Mac-mini-Reihe gerade mit M6- und M5-Pro-Chips aufgefrischt (Vorbestellung möglich, Auslieferung ab 22. September 2026) — der Arbeitsspeicher wird beim Kauf konfiguriert und lässt sich später nicht nachrüsten, prüfen Sie also vor dem Kauf, ob die 32-GB-Option auf der jeweiligen Chip-Stufe verfügbar ist.',
          '<strong>MacBook Pro — nur wenn Sie Mobilität brauchen.</strong> Wählen Sie ein 32-GB-MacBook-Pro nur, wenn Sie Modelle tatsächlich unterwegs ausführen müssen; ansonsten ist der Mac mini bei gleicher Speicherkapazität die bessere Wahl. Apples MacBook-Pro-Reihe ist auf M5-Pro/M5-Max-Chips umgestiegen, die ältere M4-Pro-Generation findet sich inzwischen meist als Restposten zu reduzierten Preisen.',
          'So oder so: Kaufen Sie nach der Unified-Memory-Zahl, nicht nach dem Chip-Namen — eine 32-GB-Konfiguration mit Qwen3 32B performt über mehrere aktuelle Apple-Silicon-Generationen hinweg bei dieser Aufgabe ähnlich.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Mac mini 32GB Preise prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'MacBook Pro 32GB Preise prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '14B vs. 32B vs. 70B auf 32 GB',
        content: [
          'Ein 14B-Modell bei Q4 läuft mit viel Reserve auf 32 GB — problemlos. Ein 32B-Modell bei Q4 ist der Sweet Spot: gut kalibrierte Quantisierung mit minimalem Qualitätsverlust gegenüber voller Präzision, und es nutzt fast die gesamte praktische Obergrenze von 26-28 GB, ohne sie zu überschreiten. Ein 70B-Modell passt bei keiner sinnvollen Quantisierungsstufe (Q4 benötigt ~40 GB); ein aggressives Q2_K-Downsizing ist technisch möglich, opfert aber genug Qualität, dass es gegenüber einem gut quantisierten 32B-Modell bei präzisionssensiblen Aufgaben selten die bessere Wahl ist.',
          'Kaufen Sie keinen 32-GB-Mac speziell für 70B — wenn Qualität auf 70B-Niveau tatsächlich das Ziel ist, ist eine Konfiguration mit 48 GB oder 64 GB von Anfang an die richtige Wahl.',
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
            q: 'Sollte ich lieber 48 GB statt 32 GB nehmen?',
            a: 'Wenn Ihr Budget es zulässt und Sie einen komfortablen 32B-Betrieb mit mehr Kontextreserve wollen, oder größere Modelle bei moderater Quantisierung ausprobieren möchten, ist 48 GB ein sinnvoller Schritt nach oben. 32 GB sind ein guter praktischer Richtwert für Modelle der 32B-Klasse, nicht die ideale Menge für jeden.',
          },
          {
            q: 'Mac mini oder MacBook Pro für ein 32-GB-Setup für lokale LLMs?',
            a: 'Mac mini für das beste Preis-Leistungs-Verhältnis, wenn Sie keine Mobilität brauchen — gleiche Speicherkapazität zu einem niedrigeren Preis als ein vergleichbares MacBook Pro. MacBook Pro nur, wenn Sie Modelle tatsächlich abseits des Schreibtischs ausführen müssen.',
          },
          {
            q: 'Verwalten Ollama oder LM Studio Unified Memory besser?',
            a: 'Beide nutzen darunter Apples Metal-Backend und verwalten Unified Memory ähnlich. Keines hat einen nennenswerten Vorteil speziell bei der Speicherverwaltung auf Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Ist das Mac Mini M4 gut für lokale LLMs?](/de/prompt-bites/mac-mini-m4-local-llm) — die Basis- und Pro-Konfigurationen im Vergleich',
          '[Bestes lokales LLM für ein MacBook Air ohne eGPU](/de/prompt-bites/best-local-llm-macbook-air-no-egpu) — die Einstiegsstufe bei Apple Silicon',
          '[Wie viel VRAM braucht ein 70B-Modell?](/de/prompt-bites/vram-for-70b-model) — die zugrunde liegende Speicherrechnung',
          '[GPU-Kaufberatung für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — für den Fall, dass Unified Memory nicht mehr reicht und Sie dedizierten VRAM wollen',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-es.webp',
    title: 'El Mejor LLM Local para un Mac con 32GB de Memoria Unificada en 2026',
    seoTitle: 'Mejor LLM Local para Mac 32GB Memoria Unificada 2026',
    metaDescription: 'Mejor LLM local para un Mac con 32GB de memoria unificada: modelos de 32B en Q4 (~18-20GB), con margen para macOS. Mac mini vs MacBook Pro, y cuándo elegir 48GB o 64GB.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores de un Mac con 32GB de memoria unificada (Mac mini o MacBook Pro) que eligen un tamaño de modelo',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>En un Mac con 32GB de memoria unificada, el mejor LLM local es un modelo de 32B — como Qwen3 32B — con cuantización Q4, que necesita aproximadamente 18-20GB y deja 12-14GB para macOS y el contexto.</strong> 32GB es un buen objetivo práctico para modelos de 32B en Q4, no un mínimo estricto — el margen real depende de la cuantización, la longitud del contexto y qué más esté en ejecución. Para cualquier cosa más allá de 32B, 48GB o 64GB es la mejor opción. Verificado el 26 de agosto de 2026: la línea Mac mini de Apple acaba de pasar a chips M6/M5 Pro (con envíos el 22 de septiembre), y el MacBook Pro ha pasado a M5 Pro/M5 Max — compra según la capacidad de memoria unificada, no según una generación de chip específica.',
    toc: [
      { label: 'Mejor Opción: Modelos de 32B en Q4', anchor: '#best-pick' },
      { label: '¿Qué Mac de 32GB?', anchor: '#which-mac' },
      { label: '14B vs 32B vs 70B en 32GB', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM local para un Mac con 32GB de memoria unificada?',
        answer: 'Qwen3 32B en Q4 es la mejor opción para un Mac con 32GB de memoria unificada — necesita ~18-20GB, dejando un margen cómodo para macOS. Compra el Mac según su capacidad de memoria unificada, no según una generación de chip específica: la línea actual de Apple (verificada el 26 de agosto de 2026) abarca Mac mini M6/M5 Pro y MacBook Pro M5 Pro/M5 Max, con 32GB disponible como opción de configuración en varios de ellos.',
        bullets: [
          'Un modelo de 32B en Q4_K_M necesita aproximadamente 18-20GB — cabe con 12-14GB restantes para macOS y contexto en un Mac de 32GB.',
          'macOS por sí solo típicamente usa 4-6GB en reposo, así que trata ~26-28GB como el techo práctico utilizable, no los 32GB completos.',
          'Para calidad de clase 70B, 32GB es demasiado ajustado a un nivel de cuantización útil — considera 48GB o 64GB en su lugar.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: un modelo de 32B (p. ej., Qwen3 32B) en Q4 — necesita ~18-20GB, cómodo en 32GB totales',
          'Trata ~26-28GB como el techo práctico utilizable — macOS por sí solo reserva 4-6GB en reposo',
          '70B en Q4 no cabe cómodamente en 32GB — opta por 48GB+ si ese es el objetivo',
          'Compra según la capacidad de memoria unificada, no según la generación del chip — las líneas Mac mini y MacBook Pro de Apple cambiaron de chip en 2026',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Modelos de 32B en Q4',
        content: [
          '<strong>Un Mac con 32GB de memoria unificada es un buen objetivo práctico para modelos de clase 32B con cuantización Q4 — el modelo necesita aproximadamente 18-20GB, dejando 12-14GB para macOS, aplicaciones en segundo plano y la ventana de contexto.</strong> Es la misma lógica de memoria-unificada-es-igual-a-VRAM que se aplica en todos los Mac con Apple Silicon: no hay un grupo de memoria de GPU separado del cual preocuparse.',
          'No planifiques en torno a la cifra completa de 32GB de la ficha técnica. macOS por sí solo típicamente reserva 4-6GB en reposo, y los procesos en segundo plano añaden más. Trata aproximadamente 26-28GB como el techo utilizable realista para el modelo más el contexto, no los 32GB anunciados.',
          'Un modelo de 70B no cabe a un nivel de cuantización útil en 32GB: necesita cerca de 40GB en Q4. Si necesitas específicamente calidad de clase 70B, considera una configuración de memoria unificada de 48GB o 64GB en su lugar — no compres 32GB esperando ejecutar un 70B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Consulta la configuración del Mac mini de 32GB',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Consulta la configuración del MacBook Pro de 32GB',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: '¿Qué Mac de 32GB?',
        content: [
          '<strong>Mac mini — la mejor relación calidad-precio.</strong> Un Mac mini de 32GB te da una máquina de IA local compacta y silenciosa al menor costo por la capacidad de memoria. Verificado el 26 de agosto de 2026: Apple acaba de renovar la línea Mac mini con chips M6 y M5 Pro (pedidos anticipados abiertos, con envíos el 22 de septiembre de 2026) — la memoria se configura en el momento de la compra y no se puede actualizar después, así que confirma que la opción de 32GB esté disponible en el nivel de chip específico que estás considerando antes de comprar.',
          '<strong>MacBook Pro — mejor si necesitas movilidad.</strong> Elige un MacBook Pro de 32GB solo si realmente necesitas ejecutar modelos sobre la marcha; de lo contrario, el Mac mini ofrece mejor relación calidad-precio para la misma capacidad de memoria. La línea MacBook Pro de Apple ha pasado a chips M5 Pro/M5 Max, y la generación anterior M4 Pro se encuentra ahora típicamente en precios de liquidación.',
          'En cualquier caso, compra según la cifra de memoria unificada, no según el nombre del chip — una configuración de 32GB ejecutando Qwen3 32B tiene un rendimiento similar en generaciones recientes de Apple Silicon para esta carga de trabajo.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Consulta los precios del Mac mini de 32GB',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Consulta los precios del MacBook Pro de 32GB',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '14B vs 32B vs 70B en 32GB',
        content: [
          'Un modelo de 14B en Q4 se ejecuta con mucho margen en 32GB — cabe sin problema. Un modelo de 32B en Q4 es el punto óptimo: una cuantización bien calibrada con pérdida mínima de calidad frente a la precisión completa, y usa la mayor parte del techo práctico de 26-28GB sin sobrepasarlo. Un modelo de 70B no cabe a un nivel de cuantización útil (Q4 necesita ~40GB); un ajuste agresivo en Q2_K es técnicamente posible, pero sacrifica suficiente calidad como para que rara vez sea mejor opción que un modelo de 32B bien cuantizado en tareas sensibles a la precisión.',
          'No compres un Mac de 32GB específicamente para ejecutar un 70B — si el objetivo real es calidad de clase 70B, una configuración de 48GB o 64GB es la meta correcta desde el principio.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Cuánta memoria unificada usa realmente macOS en reposo?',
            a: 'Aproximadamente 4-6GB en un sistema recién iniciado, más una vez que abres un navegador y otras aplicaciones. Ten esto en cuenta al dimensionar un modelo — no asumas que toda la cifra de memoria unificada anunciada está disponible para el LLM.',
          },
          {
            q: '¿32GB de memoria unificada es lo mismo que 32GB de VRAM?',
            a: 'Funcionalmente, sí, para efectos de dimensionamiento de LLM. Apple Silicon comparte un solo grupo de memoria entre CPU y GPU, por lo que la cifra de memoria unificada es el número que se compara con la capacidad de VRAM de una GPU dedicada.',
          },
          {
            q: '¿Debería obtener 48GB en lugar de 32GB?',
            a: 'Si tu presupuesto lo permite y quieres una ejecución cómoda de 32B con más margen de contexto, o intentar modelos más grandes con cuantización moderada, 48GB es un salto significativo. 32GB es un buen objetivo práctico para modelos de clase 32B, no la cantidad ideal para todos.',
          },
          {
            q: '¿Mac mini o MacBook Pro para una configuración de LLM local de 32GB?',
            a: 'Mac mini para la mejor relación calidad-precio si no necesitas movilidad — misma capacidad de memoria a un precio menor que un MacBook Pro equivalente. MacBook Pro solo si realmente necesitas ejecutar modelos lejos de un escritorio.',
          },
          {
            q: '¿Ollama o LM Studio manejan mejor la memoria unificada?',
            a: 'Ambos usan el backend Metal de Apple por debajo y gestionan la memoria unificada de forma similar. Ninguno tiene una ventaja significativa específica en la gestión de memoria en Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Es Bueno el Mac Mini M4 para LLMs Locales?](/es/prompt-bites/mac-mini-m4-local-llm) — las configuraciones base y Pro comparadas',
          '[Mejor LLM Local para un MacBook Air sin eGPU](/es/prompt-bites/best-local-llm-macbook-air-no-egpu) — el nivel de entrada de Apple Silicon',
          '[¿Cuánta VRAM Necesitas para un Modelo de 70B?](/es/prompt-bites/vram-for-70b-model) — la matemática de memoria subyacente',
          '[Guía de Compra de GPU para LLMs Locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — para cuando superes la memoria unificada y quieras VRAM dedicada',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-fr.webp',
    title: 'Meilleur LLM Local pour un Mac à 32 Go de Mémoire Unifiée en 2026',
    seoTitle: 'Meilleur LLM local pour Mac 32 Go mémoire unifiée 2026',
    metaDescription: 'Meilleur LLM local pour un Mac 32 Go de mémoire unifiée : modèles 32B en Q4 (~18-20 Go), avec marge pour macOS. Mac mini ou MacBook Pro, et quand opter pour 48 ou 64 Go.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs d\'un Mac à 32 Go de mémoire unifiée (Mac mini ou MacBook Pro) choisissant une taille de modèle',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Sur un Mac à 32 Go de mémoire unifiée, le meilleur LLM local est un modèle 32B — comme Qwen3 32B — en quantification Q4, qui nécessite environ 18-20 Go et laisse 12-14 Go pour macOS et le contexte.</strong> 32 Go est une cible pratique pour des modèles 32B en Q4, pas un minimum strict — la marge réelle dépend de la quantification, de la longueur du contexte et des autres processus actifs. Au-delà de 32B, optez plutôt pour 48 Go ou 64 Go. Vérifié le 26 août 2026 : la gamme Mac mini d\'Apple vient de passer aux puces M6/M5 Pro (livraison le 22 septembre), et le MacBook Pro est passé aux puces M5 Pro/M5 Max — achetez en fonction de la capacité de mémoire unifiée, pas d\'une génération de puce spécifique.',
    toc: [
      { label: 'Meilleur choix : modèles 32B en Q4', anchor: '#best-pick' },
      { label: 'Quel Mac de 32 Go choisir ?', anchor: '#which-mac' },
      { label: '14B vs 32B vs 70B sur 32 Go', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures connexes', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour un Mac à 32 Go de mémoire unifiée ?',
        answer: 'Qwen3 32B en Q4 est le meilleur choix pour un Mac à 32 Go de mémoire unifiée — il nécessite ~18-20 Go, laissant une marge confortable pour macOS. Achetez le Mac pour sa capacité de mémoire unifiée, pas pour une génération de puce spécifique : la gamme actuelle d\'Apple (vérifiée le 26 août 2026) comprend des Mac mini M6/M5 Pro et des MacBook Pro M5 Pro/M5 Max, avec 32 Go disponibles en option de configuration sur plusieurs d\'entre eux.',
        bullets: [
          'Un modèle 32B en Q4_K_M nécessite environ 18-20 Go — il tient avec 12-14 Go restants pour macOS et le contexte sur un Mac de 32 Go.',
          'macOS utilise généralement 4-6 Go au repos, considérez donc ~26-28 Go comme le plafond réellement utilisable, pas les 32 Go complets.',
          'Pour une qualité de classe 70B, 32 Go est trop juste à un niveau de quantification utile — visez plutôt 48 Go ou 64 Go.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : un modèle 32B (ex. Qwen3 32B) en Q4 — nécessite ~18-20 Go, confortable sur 32 Go au total',
          'Considérez ~26-28 Go comme le plafond réellement utilisable — macOS réserve lui-même 4-6 Go au repos',
          '70B en Q4 ne tient pas confortablement sur 32 Go — visez 48 Go ou plus pour cet objectif',
          'Achetez en fonction de la capacité de mémoire unifiée, pas de la génération de puce — les gammes Mac mini et MacBook Pro d\'Apple ont toutes deux changé de puce en 2026',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : modèles 32B en Q4',
        content: [
          '<strong>Un Mac à 32 Go de mémoire unifiée est une cible pratique pour les modèles de classe 32B en quantification Q4 — le modèle nécessite environ 18-20 Go, laissant 12-14 Go pour macOS, les applications en arrière-plan et la fenêtre de contexte.</strong> C\'est la même logique « mémoire unifiée égale VRAM » qui s\'applique à tous les Mac Apple Silicon : il n\'existe pas de pool de mémoire GPU distinct.',
          'Ne planifiez pas sur les 32 Go complets de la fiche technique. macOS réserve généralement 4-6 Go au repos, et les processus en arrière-plan en ajoutent davantage. Considérez environ 26-28 Go comme le plafond réaliste pour le modèle et le contexte, et non les 32 Go annoncés.',
          'Un modèle 70B ne tient pas à un niveau de quantification utile sur 32 Go : il nécessite environ 40 Go en Q4. Si vous avez spécifiquement besoin d\'une qualité de classe 70B, optez plutôt pour une configuration de 48 Go ou 64 Go — n\'achetez pas 32 Go en espérant faire tourner un 70B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Vérifier la configuration Mac mini 32 Go',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Vérifier la configuration MacBook Pro 32 Go',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'Quel Mac de 32 Go choisir ?',
        content: [
          '<strong>Mac mini — meilleur rapport qualité-prix.</strong> Un Mac mini 32 Go offre une machine d\'IA locale compacte et silencieuse au coût le plus bas pour cette capacité mémoire. Vérifié le 26 août 2026 : Apple vient de renouveler la gamme Mac mini avec des puces M6 et M5 Pro (précommandes ouvertes, livraison le 22 septembre 2026) — la mémoire est configurée à l\'achat et ne peut pas être mise à niveau ensuite, alors vérifiez que l\'option 32 Go est disponible sur le palier de puce visé avant d\'acheter.',
          '<strong>MacBook Pro — pour la mobilité.</strong> Choisissez un MacBook Pro 32 Go uniquement si vous devez réellement exécuter des modèles en déplacement ; sinon, le Mac mini offre un meilleur rapport qualité-prix pour la même capacité mémoire. La gamme MacBook Pro d\'Apple est passée aux puces M5 Pro/M5 Max, l\'ancienne génération M4 Pro se trouvant désormais généralement en prix de liquidation.',
          'Dans les deux cas, achetez en fonction de la capacité de mémoire unifiée, pas du nom de la puce — une configuration 32 Go exécutant Qwen3 32B offre des performances similaires sur les générations récentes d\'Apple Silicon pour cette charge de travail.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Vérifier les prix du Mac mini 32 Go',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Vérifier les prix du MacBook Pro 32 Go',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '14B vs 32B vs 70B sur 32 Go',
        content: [
          'Un modèle 14B en Q4 tourne avec une large marge sur 32 Go — un ajustement facile. Un modèle 32B en Q4 est le point d\'équilibre optimal : une quantification bien calibrée avec une perte de qualité minimale par rapport à la pleine précision, utilisant l\'essentiel du plafond pratique de 26-28 Go sans le dépasser. Un modèle 70B ne tient pas à un niveau de quantification utile (Q4 nécessite ~40 Go) ; une compression agressive en Q2_K est techniquement possible mais sacrifie assez de qualité pour rarement surpasser un modèle 32B bien quantifié sur des tâches sensibles à la précision.',
          'N\'achetez pas un Mac de 32 Go spécifiquement pour faire tourner un 70B — si une qualité de classe 70B est l\'objectif réel, une configuration de 48 Go ou 64 Go est le bon choix dès le départ.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quelle quantité de mémoire unifiée macOS utilise-t-il réellement au repos ?',
            a: 'Environ 4-6 Go sur un système fraîchement démarré, davantage dès que vous ouvrez un navigateur et d\'autres applications. Prévoyez cette marge lors du dimensionnement d\'un modèle — ne supposez pas que la totalité de la mémoire unifiée annoncée est disponible pour le LLM.',
          },
          {
            q: '32 Go de mémoire unifiée équivalent-ils à 32 Go de VRAM ?',
            a: 'Fonctionnellement, oui, pour le dimensionnement d\'un LLM. Apple Silicon partage un seul pool de mémoire entre le CPU et le GPU, donc la mémoire unifiée est le chiffre à comparer à la capacité VRAM d\'un GPU dédié.',
          },
          {
            q: 'Devrais-je prendre 48 Go au lieu de 32 Go ?',
            a: 'Si votre budget le permet et que vous voulez exécuter un 32B confortablement avec plus de marge de contexte, ou tenter des modèles plus grands avec une quantification modérée, 48 Go représente un vrai progrès. 32 Go est une cible pratique pour les modèles de classe 32B, pas la quantité idéale pour tout le monde.',
          },
          {
            q: 'Mac mini ou MacBook Pro pour une configuration LLM locale de 32 Go ?',
            a: 'Mac mini pour le meilleur rapport qualité-prix si vous n\'avez pas besoin de mobilité — même capacité mémoire à un prix inférieur à un MacBook Pro équivalent. MacBook Pro uniquement si vous devez réellement exécuter des modèles en dehors de votre bureau.',
          },
          {
            q: 'Ollama ou LM Studio gère-t-il mieux la mémoire unifiée ?',
            a: 'Les deux s\'appuient sur le backend Metal d\'Apple et gèrent la mémoire unifiée de façon similaire. Aucun n\'offre d\'avantage significatif spécifique à la gestion de la mémoire sur Apple Silicon.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures connexes',
        items: [
          '[Le Mac Mini M4 est-il adapté aux LLM locaux ?](/fr/prompt-bites/mac-mini-m4-local-llm) — comparaison des configurations de base et Pro',
          '[Meilleur LLM local pour un MacBook Air sans eGPU](/fr/prompt-bites/best-local-llm-macbook-air-no-egpu) — le palier d\'entrée de gamme Apple Silicon',
          '[Combien de VRAM pour un modèle 70B ?](/fr/prompt-bites/vram-for-70b-model) — le calcul de mémoire sous-jacent',
          '[Guide d\'achat GPU pour les LLM locaux 2026](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — pour quand la mémoire unifiée ne suffit plus et que vous voulez de la VRAM dédiée',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-ja.webp',
    title: '2026年、32GB統合メモリMacに最適なローカルLLMは?',
    seoTitle: '2026年版 32GB統合メモリMacに最適なローカルLLM',
    metaDescription: '32GB統合メモリMacに最適なローカルLLM: Q4量子化の32Bモデル(約18-20GB)でmacOS用の余裕を確保。Mac miniとMacBook Proの比較、48GBや64GBを検討すべきタイミングも解説。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: '32GB統合メモリMac(Mac miniまたはMacBook Pro)の購入者で、モデルサイズを選ぶ人向け',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>32GB統合メモリのMacでは、最適なローカルLLMは32Bモデル — Qwen3 32Bなど — をQ4量子化で動かすことです。必要容量は約18-20GBで、macOSとコンテキスト用に12-14GBが残ります。</strong>32GBは32B・Q4モデルにとって現実的な目安であり、絶対的な最低条件ではありません。実際の余裕は量子化方式やコンテキスト長、他に何を動かしているかによって変わります。32Bを超えるモデルを使いたい場合は、48GBか64GBを選ぶ方が確実です。2026年8月26日時点の確認: AppleのMac miniラインナップはM6/M5 Proチップに移行したばかりで(出荷は9月22日)、MacBook ProもM5 Pro/M5 Maxに移行しています — 特定のチップ世代ではなく、統合メモリの容量で選んでください。',
    toc: [
      { label: 'ベストピック: Q4の32Bモデル', anchor: '#best-pick' },
      { label: 'どのMacを選ぶか?', anchor: '#which-mac' },
      { label: '32GBでの14B・32B・70B比較', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: '32GB統合メモリMacに最適なローカルLLMは?',
        answer: 'Q4のQwen3 32Bが32GB統合メモリMacに最適です — 必要容量は約18-20GBで、macOS用に快適な余裕が残ります。Macは特定のチップ世代ではなく、統合メモリの容量で選んでください。Appleの現行ラインナップ(2026年8月26日時点)はM6/M5 Pro搭載のMac miniとM5 Pro/M5 Max搭載のMacBook Proにまたがり、いくつかのモデルで32GB構成を選択できます。',
        bullets: [
          '32BモデルはQ4_K_Mで約18-20GBが必要 — 32GB Macでは12-14GBがmacOSとコンテキスト用に残ります。',
          'macOS自体がアイドル時に通常4-6GBを使用するため、フルの32GBではなく約26-28GBを実用上の上限と考えてください。',
          '70Bクラスの品質を求めるなら、実用的な量子化レベルでは32GBでは厳しすぎます — 代わりに48GBか64GBを検討してください。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ベストピック: 32Bモデル(Qwen3 32Bなど)をQ4で — 約18-20GB必要、32GB合計で快適',
          '約26-28GBを実用上の上限と考えること — macOS自体がアイドル時に4-6GBを確保する',
          '70BモデルはQ4で32GBに余裕を持って収まらない — それが目標なら48GB以上を選ぶこと',
          'チップ世代ではなく統合メモリの容量で選ぶこと — AppleのMac miniとMacBook Proは共に2026年にチップを刷新した',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: Q4の32Bモデル',
        content: [
          '<strong>32GB統合メモリのMacは、Q4量子化の32Bクラスモデルにとって現実的な目安です — モデルは約18-20GBを必要とし、macOS、バックグラウンドアプリ、コンテキストウィンドウ用に12-14GBが残ります。</strong>これは、すべてのApple Silicon Macに共通する「統合メモリ=VRAM」という考え方と同じで、別個のGPUメモリプールを気にする必要はありません。',
          'スペックシート上のフルの32GBという数字を前提に計画しないでください。macOS自体は通常アイドル時に4-6GBを確保し、バックグラウンドプロセスがさらに追加されます。広告されている32GBではなく、モデル+コンテキストの現実的な実用上の上限として約26-28GBを想定してください。',
          '70Bモデルは32GBでは実用的な量子化レベルで収まりません。Q4では約40GBが必要です。特に70Bクラスの品質が必要な場合は、代わりに48GBか64GBの統合メモリ構成を検討してください — 70Bを動かすつもりで32GBを購入しないでください。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'AmazonでMac mini 32GB構成を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'AmazonでMacBook Pro 32GB構成を確認',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'どのMacを選ぶか?',
        content: [
          '<strong>Mac mini — 最もコストパフォーマンスが良い選択。</strong>32GBのMac miniは、そのメモリ容量に対して最も低コストで、コンパクトで静かなローカルAI用マシンです。2026年8月26日時点の確認: AppleはMac miniラインナップをM6・M5 Proチップに刷新したばかりです(予約受付中、出荷は2026年9月22日) — メモリは購入時に構成され、後からアップグレードできないため、購入前に検討しているチップ構成で32GBオプションが選択可能か確認してください。',
          '<strong>MacBook Pro — 携帯性が必要な場合の選択。</strong>32GBのMacBook Proは、外出先でモデルを動かす必要が実際にある場合にのみ選んでください。そうでなければ、同じメモリ容量ならMac miniの方がコストパフォーマンスに優れています。AppleのMacBook ProラインナップはM5 Pro/M5 Maxチップに移行しており、旧世代のM4 Proは現在主にクリアランス価格で見つかります。',
          'いずれの場合も、チップ名ではなく統合メモリの数値で選んでください — Qwen3 32Bを動かす32GB構成であれば、この用途では近年のApple Silicon世代間で性能に大きな差はありません。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'AmazonでMac mini 32GB価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'AmazonでMacBook Pro 32GB価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32GBでの14B・32B・70B比較',
        content: [
          '14BモデルはQ4で32GBに大きな余裕を持って収まります — 簡単にフィットします。32BモデルはQ4がスイートスポットです。フル精度と比べて品質低下が最小限に抑えられた、よく較正された量子化レベルであり、実用上の上限である26-28GBの大部分を超過せずに使い切ります。70Bモデルは実用的な量子化レベルでは収まりません(Q4では約40GBが必要)。積極的なQ2_Kへの圧縮は技術的には可能ですが、品質を大きく犠牲にするため、精度が重要なタスクではよく較正された32Bモデルより優れた選択になることはほとんどありません。',
          '70Bを動かすことを目的に32GBのMacを購入しないでください — 70Bクラスの品質が本来の目標であれば、最初から48GBか64GBの構成を選ぶのが正解です。',
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
            a: '予算が許し、より多くのコンテキスト余裕を持った快適な32B実行を望む場合、あるいは中程度の量子化でより大きなモデルを試したい場合、48GBは意味のあるステップアップです。32Bクラスのモデルにとって32GBは現実的な目安であり、誰にとっても理想の量というわけではありません。',
          },
          {
            q: 'Mac miniとMacBook Pro、32GBのローカルLLM環境ならどちら?',
            a: '携帯性が不要ならMac miniが最もコストパフォーマンスに優れます — 同じメモリ容量を、同等のMacBook Proより低価格で得られます。MacBook Proは、実際にデスクを離れてモデルを動かす必要がある場合のみ選んでください。',
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
          '[Mac Mini M4はローカルLLMに向いていますか?](/ja/prompt-bites/mac-mini-m4-local-llm) — 基本構成とPro構成の比較',
          '[eGPUなしのMacBook Airに最適なローカルLLM](/ja/prompt-bites/best-local-llm-macbook-air-no-egpu) — エントリーレベルのApple Silicon層',
          '[70BモデルにどれだけのVRAMが必要?](/ja/prompt-bites/vram-for-70b-model) — メモリ計算の基礎',
          '[2026年版 ローカルLLM向けGPU購入ガイド](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 統合メモリでは足りなくなり、専用VRAMが欲しくなったときに',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-ko.webp',
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
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-pt.webp',
    title: 'Melhor LLM Local para um Mac com 32GB de Memória Unificada em 2026',
    seoTitle: 'Melhor LLM Local para Mac com 32GB de Memória Unificada 2026',
    metaDescription: 'Melhor LLM local para um Mac com 32GB de memória unificada: modelos 32B em Q4 (~18-20GB), com espaço para o macOS. Mac Mini vs MacBook Pro, e quando optar por 48GB ou 64GB.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores de um Mac com 32GB de memória unificada (Mac Mini ou MacBook Pro) escolhendo o tamanho do modelo',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Em um Mac com 32GB de memória unificada, o melhor LLM local é um modelo de 32B — como o Qwen3 32B — em quantização Q4, que precisa de aproximadamente 18-20GB e deixa 12-14GB para o macOS e o contexto.</strong> 32GB é um bom alvo prático para modelos 32B em Q4, não um mínimo rígido — a folga real depende da quantização, do tamanho do contexto e do que mais está rodando. Para qualquer coisa além de 32B, 48GB ou 64GB é a escolha melhor. Verificado em 26 de agosto de 2026: a linha Mac Mini da Apple acabou de migrar para os chips M6/M5 Pro (lançamento em 22 de setembro), e o MacBook Pro passou para M5 Pro/M5 Max — compre pela capacidade de memória unificada, não por uma geração específica de chip.',
    toc: [
      { label: 'Melhor Escolha: Modelos de 32B em Q4', anchor: '#best-pick' },
      { label: 'Qual Mac de 32GB Escolher?', anchor: '#which-mac' },
      { label: '14B vs 32B vs 70B em 32GB', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM local para um Mac com 32GB de memória unificada?',
        answer: 'O Qwen3 32B em Q4 é o melhor ajuste para um Mac com 32GB de memória unificada — precisa de ~18-20GB, deixando espaço confortável para o macOS. Compre o Mac pela capacidade de memória unificada, não por uma geração específica de chip: a linha atual da Apple (verificada em 26 de agosto de 2026) abrange Mac Minis M6/M5 Pro e MacBook Pros M5 Pro/M5 Max, com 32GB disponível como opção de configuração em vários deles.',
        bullets: [
          'Um modelo de 32B em Q4_K_M precisa de aproximadamente 18-20GB — cabe com 12-14GB restantes para o macOS e contexto em um Mac de 32GB.',
          'O próprio macOS geralmente usa 4-6GB em repouso, então trate ~26-28GB como o teto prático utilizável, não os 32GB completos.',
          'Para qualidade de classe 70B, 32GB é apertado demais em um nível de quantização útil — procure 48GB ou 64GB.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: um modelo de 32B (ex.: Qwen3 32B) em Q4 — precisa de ~18-20GB, confortável em 32GB totais',
          'Trate ~26-28GB como o teto prático utilizável — o próprio macOS reserva 4-6GB em repouso',
          '70B em Q4 não cabe confortavelmente em 32GB — vá de 48GB+ se esse for o objetivo',
          'Compre pela capacidade de memória unificada, não pela geração do chip — as linhas Mac Mini e MacBook Pro da Apple mudaram de chip em 2026',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Modelos de 32B em Q4',
        content: [
          '<strong>Um Mac com 32GB de memória unificada é um bom alvo prático para modelos de classe 32B em quantização Q4 — o modelo precisa de aproximadamente 18-20GB, deixando 12-14GB para o macOS, apps em segundo plano e a janela de contexto.</strong> Essa é a mesma lógica de memória-unificada-equivale-a-VRAM que se aplica em todos os Macs Apple Silicon: não há um pool de memória de GPU separado a se preocupar.',
          'Não planeje em torno do número completo de 32GB da ficha técnica. O próprio macOS geralmente reserva de 4-6GB em repouso, e processos em segundo plano adicionam mais. Trate aproximadamente 26-28GB como o teto realista utilizável para modelo mais contexto, não os 32GB anunciados.',
          'Um modelo de 70B não cabe em um nível de quantização útil em 32GB: precisa de cerca de 40GB em Q4. Se você precisa especificamente de qualidade de classe 70B, procure uma configuração de memória unificada de 48GB ou 64GB — não compre 32GB esperando rodar 70B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Veja a configuração do Mac Mini 32GB',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Veja a configuração do MacBook Pro 32GB',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'Qual Mac de 32GB Escolher?',
        content: [
          '<strong>Mac Mini — melhor custo-benefício.</strong> Um Mac Mini de 32GB oferece uma máquina compacta e silenciosa para IA local pelo menor custo pela capacidade de memória. Verificado em 26 de agosto de 2026: a Apple acabou de renovar a linha Mac Mini com chips M6 e M5 Pro (pré-vendas abertas, com lançamento em 22 de setembro de 2026) — a memória é configurada na compra e não pode ser atualizada depois, então confirme se a opção de 32GB está disponível no nível de chip específico que você está avaliando antes de comprar.',
          '<strong>MacBook Pro — melhor se você precisa de mobilidade.</strong> Escolha um MacBook Pro de 32GB apenas se você realmente precisa rodar modelos fora de casa; caso contrário, o Mac Mini é a melhor opção de custo-benefício para a mesma capacidade de memória. A linha MacBook Pro da Apple passou para os chips M5 Pro/M5 Max, com a geração M4 Pro mais antiga geralmente encontrada em promoções de liquidação.',
          'De qualquer forma, compre pelo valor de memória unificada, não pelo nome do chip — uma configuração de 32GB rodando o Qwen3 32B tem desempenho semelhante nas gerações recentes de Apple Silicon para essa carga de trabalho.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini (32GB unified memory)',
            productCategory: 'desktop',
            label: 'Veja os preços do Mac Mini 32GB',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro (32GB unified memory)',
            productCategory: 'laptop',
            label: 'Veja os preços do MacBook Pro 32GB',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '14B vs 32B vs 70B em 32GB',
        content: [
          'Um modelo de 14B em Q4 roda com folga generosa em 32GB — um encaixe fácil. Um modelo de 32B em Q4 é o ponto ideal: quantização bem calibrada com perda mínima de qualidade em relação à precisão total, e usa a maior parte do teto prático de 26-28GB sem ultrapassá-lo. Um modelo de 70B não cabe em um nível de quantização útil (Q4 precisa de ~40GB); um Q2_K agressivo é tecnicamente possível, mas troca qualidade suficiente para raramente ser a escolha melhor do que um 32B bem quantizado em tarefas sensíveis à precisão.',
          'Não compre um Mac de 32GB especificamente para rodar 70B — se qualidade de classe 70B é realmente o objetivo, uma configuração de 48GB ou 64GB é o alvo certo desde o início.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Quanta memória unificada o macOS realmente usa em repouso?',
            a: 'Aproximadamente 4-6GB em um sistema recém-inicializado, mais uma vez que você abre um navegador e outros apps. Considere isso ao dimensionar um modelo — não presuma que o número completo de memória unificada anunciado está disponível para o LLM.',
          },
          {
            q: '32GB de memória unificada é o mesmo que 32GB de VRAM?',
            a: 'Funcionalmente, sim, para fins de dimensionamento de LLM. O Apple Silicon compartilha um único pool de memória entre CPU e GPU, então o número de memória unificada é o valor a comparar com a capacidade de VRAM de uma GPU dedicada.',
          },
          {
            q: 'Devo pegar 48GB em vez de 32GB?',
            a: 'Se seu orçamento permitir e você quiser rodar um 32B confortável com mais espaço de contexto, ou tentar modelos maiores em quantização moderada, 48GB é um passo significativo acima. 32GB é um bom alvo prático para modelos de classe 32B, não a quantidade ideal para todo mundo.',
          },
          {
            q: 'Mac Mini ou MacBook Pro para uma configuração de LLM local de 32GB?',
            a: 'Mac Mini para o melhor custo-benefício se você não precisa de mobilidade — mesma capacidade de memória por um preço menor que um MacBook Pro equivalente. MacBook Pro apenas se você realmente precisa rodar modelos fora de casa.',
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
          '[O Mac Mini M4 É Bom para LLMs Locais?](/pt/prompt-bites/mac-mini-m4-local-llm) — as configurações base e Pro comparadas',
          '[Melhor LLM Local para um MacBook Air Sem eGPU](/pt/prompt-bites/best-local-llm-macbook-air-no-egpu) — a faixa de entrada do Apple Silicon',
          '[Quanta VRAM Você Precisa para um Modelo de 70B?](/pt/prompt-bites/vram-for-70b-model) — a matemática de memória por trás disso',
          '[Guia de Compra de GPU para LLMs Locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — para quando a memória unificada não for suficiente e você quiser VRAM dedicada',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-local-llm-32gb-unified-memory-mac-overview-hero-zh.webp',
    title: '2026年32GB统一内存Mac的最佳本地LLM是什么？',
    seoTitle: '2026年32GB统一内存Mac最佳本地LLM',
    metaDescription: '2026年32GB统一内存Mac的最佳本地LLM：Q4下的32B模型（约18-20GB），为macOS留有余量。Mac mini对比MacBook Pro，以及何时该选48GB或64GB。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Qwen3 32B'],
    current_hardware_mentioned: ['Mac mini', 'MacBook Pro'],
    educationalLevel: 'Intermediate',
    audience: '选择模型规模的32GB统一内存Mac（Mac mini或MacBook Pro）买家',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-mac-for-local-ai-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-local-llm-macbook-air-no-egpu'],
    is_living_page: false,
    leadAnswerBlock: '<strong>在32GB统一内存Mac上，最佳本地LLM是32B模型——例如Qwen3 32B——采用Q4量化，大约需要18-20GB，为macOS和上下文留出12-14GB。</strong>32GB是32B Q4模型的一个实用目标，而非硬性下限——实际余量取决于量化方式、上下文长度以及同时运行的其他程序。如果需要超过32B的模型，48GB或64GB是更好的选择。截至2026年8月26日：苹果的Mac mini系列刚刚换代为M6/M5 Pro芯片（9月22日发货），MacBook Pro已换代为M5 Pro/M5 Max芯片——购买时应关注统一内存容量，而非具体芯片世代。',
    toc: [
      { label: '最佳选择：Q4下的32B模型', anchor: '#best-pick' },
      { label: '该选哪款32GB Mac？', anchor: '#which-mac' },
      { label: '32GB上的14B对比32B对比70B', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '32GB统一内存Mac的最佳本地LLM是什么？',
        answer: 'Q4版本的Qwen3 32B最适合32GB统一内存Mac——大约需要18-20GB，为macOS留有充足余量。购买时应关注Mac的统一内存容量，而非具体芯片世代：苹果目前的产品线（截至2026年8月26日）涵盖搭载M6/M5 Pro芯片的Mac mini和搭载M5 Pro/M5 Max芯片的MacBook Pro，其中多款机型都提供32GB配置选项。',
        bullets: [
          '32B模型在Q4_K_M下大约需要18-20GB——在32GB Mac上可以装下，并为macOS和上下文留出12-14GB。',
          'macOS本身在空闲状态下通常占用4-6GB，因此应把约26-28GB视为实际可用上限，而非完整的32GB。',
          '对于70B级别的质量，32GB在实用的量化水平下过于紧张——应考虑48GB或64GB。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择：32B模型（如Qwen3 32B）的Q4版本——大约需要18-20GB，在32GB总量下轻松容纳',
          '把约26-28GB当作实际可用上限——macOS本身在空闲时就占用4-6GB',
          '70B在Q4下无法舒适地装入32GB——如果这是你的目标，应选择48GB以上',
          '购买时应关注统一内存容量，而非芯片世代——苹果的Mac mini和MacBook Pro系列在2026年都完成了芯片换代',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Q4下的32B模型',
        content: [
          '<strong>32GB统一内存Mac是Q4量化的32B级模型的一个实用目标——模型大约需要18-20GB，为macOS、后台应用和上下文窗口留出12-14GB。</strong>这与适用于所有Apple Silicon Mac的「统一内存等于显存」逻辑相同：不存在需要担心的独立GPU内存池。',
          '不要按规格表上完整的32GB数字来规划。macOS本身在空闲时通常占用4-6GB，后台进程还会占用更多。将大约26-28GB视为模型加上下文的实际可用上限，而非宣传的32GB。',
          '70B模型在实用的量化水平下无法装入32GB：它在Q4下大约需要40GB。如果你确实需要70B级别的质量，应改为选择48GB或64GB的统一内存配置——不要抱着运行70B的期望购买32GB机型。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini（32GB统一内存）',
            productCategory: 'desktop',
            label: '查看Mac mini 32GB配置',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro（32GB统一内存）',
            productCategory: 'laptop',
            label: '查看MacBook Pro 32GB配置',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: '该选哪款32GB Mac？',
        content: [
          '<strong>Mac mini——最佳性价比。</strong>32GB的Mac mini为你提供了一台紧凑、安静的本地AI设备，在同等内存容量下成本最低。截至2026年8月26日：苹果刚刚推出了搭载M6和M5 Pro芯片的新款Mac mini（已开放预订，2026年9月22日发货）——内存在购买时配置、后续无法升级，因此在购买前请确认你所选芯片档位是否提供32GB选项。',
          '<strong>MacBook Pro——需要移动性时选择。</strong>只有在你确实需要随时随地运行模型时才选32GB的MacBook Pro；否则，在同等内存容量下，Mac mini性价比更高。苹果的MacBook Pro系列已换代为M5 Pro/M5 Max芯片，较旧的M4 Pro一代目前通常以清仓价出售。',
          '无论选哪款，购买时都应关注统一内存数字，而非芯片名称——运行Qwen3 32B时，32GB配置在近几代Apple Silicon上的表现相近。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Mac+mini+32GB+unified+memory',
            productName: 'Mac mini（32GB统一内存）',
            productCategory: 'desktop',
            label: '查看Mac mini 32GB价格',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+32GB+unified+memory',
            productName: 'MacBook Pro（32GB统一内存）',
            productCategory: 'laptop',
            label: '查看MacBook Pro 32GB价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '32GB上的14B对比32B对比70B',
        content: [
          '14B模型在Q4下运行时余量充裕，轻松适配32GB。32B模型在Q4下是最佳平衡点：量化校准良好，相比全精度模型质量损失极小，且能充分利用约26-28GB的实际上限而不超出。70B模型在实用的量化水平下无法装入（Q4需要约40GB）；技术上可以通过激进的Q2_K压缩勉强装下，但在对精度敏感的任务上，这种压缩带来的质量损失通常使其不如经过良好量化的32B模型。',
          '不要专门为运行70B而购买32GB的Mac——如果70B级别的质量才是真正的目标，从一开始就应该选择48GB或64GB配置。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'macOS空闲时实际占用多少统一内存？',
            a: '刚启动的系统上大约4-6GB，打开浏览器和其他应用后会更多。规划模型规模时要考虑这一点——不要假设完整的宣传统一内存数字都可供LLM使用。',
          },
          {
            q: '32GB统一内存等同于32GB显存吗？',
            a: '就LLM规模计算而言，功能上是等同的。Apple Silicon在CPU和GPU之间共享同一个内存池，因此统一内存数字就是应与独立GPU显存容量比较的数字。',
          },
          {
            q: '我应该选48GB而不是32GB吗？',
            a: '如果预算允许，并且你想要更舒适地运行32B、留有更多上下文余量，或想尝试更大的模型（中等量化），48GB是有意义的升级。32GB是32B级模型的一个实用目标，而非适合所有人的理想数量。',
          },
          {
            q: '本地LLM设置该选Mac mini还是MacBook Pro？',
            a: '如果不需要移动性，Mac mini性价比最高——在同等内存容量下价格低于对应的MacBook Pro。只有确实需要离开桌面运行模型时才选MacBook Pro。',
          },
          {
            q: 'Ollama还是LM Studio能更好地处理统一内存？',
            a: '两者底层都使用苹果的Metal后端，管理统一内存的方式也相似。在Apple Silicon的内存管理方面，两者都没有明显优势。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[Mac Mini M4适合本地LLM吗？](/zh/prompt-bites/mac-mini-m4-local-llm) — 基础版和Pro版配置对比',
          '[没有eGPU的MacBook Air最佳本地LLM](/zh/prompt-bites/best-local-llm-macbook-air-no-egpu) — 入门级Apple Silicon档位',
          '[70B模型需要多少显存？](/zh/prompt-bites/vram-for-70b-model) — 底层内存计算方法',
          '[2026年本地LLM GPU购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 当统一内存不够用、需要独立显存时',
        ],
      },
    },
  },
}
