import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-en.webp',
    title: 'Best Intel Arc GPU for Local LLMs?',
    seoTitle: 'Best Intel Arc GPU for Local LLMs 2026 | Prompt Bites',
    metaDescription: 'Our Intel Arc pick for local LLMs is the B580 12GB, but we found no current price under $300. See Arc B570 and A770 prices and the software setup.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'Buyers considering Intel Arc as a cheaper alternative to NVIDIA for local LLMs',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**Our Intel Arc pick for local LLMs is the B580 12GB, on memory and documented support, not on price.** This is an editorial choice, not a benchmark result. We found no current US figure under $300: on 27 November 2026, [Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking) showed $729 as the best price, and [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)\'s November lowest average from eBay listings was $399. If $300 is a firm limit, look at the Arc B570 10GB. Arc cards have no CUDA; use a documented Vulkan or SYCL route, and do not start a new setup on IPEX-LLM, which Intel has archived.',
    toc: [
      { label: 'Best Pick: Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 vs an NVIDIA RTX 3060 12GB', anchor: '#comparison' },
      { label: 'Best Alternatives', anchor: '#alternatives' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best Intel Arc GPU for local LLMs?',
        answer: 'Our editorial pick is the Intel Arc B580 12GB: it has 2 GB more memory than the B570 and appears in the llama.cpp SYCL support table. We found no current US price under $300 for it, and November figures differ widely. Under a firm $300 limit, the Arc B570 10GB was listed at $279.99–289.99 at US retailers during Black Friday week.',
        bullets: [
          'Arc B580 12GB: more room than a 10 GB card; check the live price, because sources disagree.',
          'No CUDA: Ollama documents Vulkan for additional GPU support, and llama.cpp documents a SYCL backend for Intel GPUs.',
          'IPEX-LLM is archived by Intel and its notice cites known security issues; do not use it for a new setup.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Editorial Arc pick: B580 12GB, chosen for 12 GB of memory and documented llama.cpp support',
          'No current US price under $300 found for the B580; November sources disagree widely',
          'Firm $300 limit: Arc B570 10GB, listed at $279.99–289.99 on 27–28 November 2026',
          'Software: use Vulkan or SYCL; Intel has archived IPEX-LLM',
          'A770 16GB: more memory, but Tom’s Hardware listed it from $846 on 27 November',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'The Intel Arc B580 12GB is our editorial Arc pick for local LLMs, but we found no current US price under $300 for it.' },
          { type: 'plain-terms', text: 'Pick the B580 for the extra memory if you find it at a price you accept; compare it with a used RTX 3060 12GB, which sold for $310–350 in the US.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Intel Arc B580 12GB',
        content: [
          '<strong>Among Intel Arc cards, we would choose the B580 12GB for a local-LLM build.</strong> A 14B model at Q4 is 9.0 GB in <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama’s Qwen 2.5 listing</a>, which leaves about 3 GB on a 12 GB card for context and overhead, against about 1 GB on the 10 GB B570. We have not benchmarked either card.',
          'Software needs a check first. The <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU docs</a> describe additional GPU support on Windows and Linux through Vulkan, enabled by default when the backend is installed; Linux needs Intel’s driver components. They do not list Arc models by name. The <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cpp SYCL docs</a> list the Arc B580 as supported. IPEX-LLM, once a common Arc route, is <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">archived on GitHub</a>: Intel says it will give no more fixes, and the notice cites known security issues.',
          '<strong>Buy it if:</strong> the listing price works for you and you accept some setup checking. <strong>Skip it if:</strong> your tools assume CUDA; then an NVIDIA card is the safer choice in our view.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Check Intel Arc B580 price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=Intel%20Arc%20B580',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Check Intel Arc B580 price on Newegg',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 vs an NVIDIA RTX 3060 12GB',
        content: [
          '<strong>Both cards have 12 GB, so they fit similar model sizes; the prices below are on different bases.</strong> A used RTX 3060 12GB sold for $310–350 (median $330) in 209 eBay US sold listings, 17–26 November 2026, excluding shipping (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>). For the B580, <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> showed $729 as the best US price (27 November), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> $851.16 new on Amazon US and $499 used on eBay (27 November), <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> a $399 November lowest average from eBay listings (current figure $431), and <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> reseller listings of $851–1,263 (7 November). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> called it unavailable from reputable sellers (28 November). The $249 launch price is not a current price.',
          'In our view, buy the used RTX 3060 12GB if the B580 you find costs more and you want CUDA, which the <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU docs</a> support on this card. Choose the B580 if you want a new card, the seller\'s warranty terms suit you and your tool supports Vulkan or SYCL.',
        ],
        columns: ['Card', 'VRAM', 'US price and basis', 'Software'],
        rows: [
          { Card: 'Arc B580', VRAM: '12 GB', 'US price and basis': '$399–851, sources disagree', Software: 'Vulkan / SYCL' },
          { Card: 'RTX 3060 (used)', VRAM: '12 GB', 'US price and basis': '$310–350 sold, Nov 17–26', Software: 'CUDA' },
          { Card: 'Arc B570 (new)', VRAM: '10 GB', 'US price and basis': '$279.99–289.99 retail, Nov 27–28', Software: 'Vulkan / SYCL' },
          { Card: 'Arc A770 16GB', VRAM: '16 GB', 'US price and basis': 'From $846 listed, Nov 27', Software: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Check RTX 3060 12GB price',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Best Alternatives',
        content: [
          '<strong>Intel Arc B570 10GB</strong>: the Arc card with 10 GB or more that we could date under $300. <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer’s 28 November list</a> showed $279.99 at Newegg (with an extra sign-in discount) and $289.99 at Walmart, and <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> listed $289 on 27 November, both during Black Friday week. Other listings cost more, for example $429.97 for an Amazon listing tracked by <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>. With 10 GB, plan on 7B–8B models; a 14B model at Q4 is very tight.',
          '<strong>Intel Arc A770 16GB</strong>: 4 GB more than the B580, on the older Alchemist generation. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> listed $846 as the best US price on 27 November, against a $349 launch price. We would only consider it at a far lower price; the llama.cpp SYCL docs list it as supported.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'Check Intel Arc B570 price',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'Check Intel Arc A770 price',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Ollama support Intel Arc GPUs?',
            a: 'Ollama documents additional GPU support on Windows and Linux through Vulkan, which is enabled by default when the backend is installed. On Linux you need Intel driver components. Its GPU docs do not list Arc models by name, so confirm that your model runs on the GPU after setup.',
          },
          {
            q: 'Is IPEX-LLM still maintained?',
            a: 'No. Intel has archived the IPEX-LLM repository on GitHub. Its notice says Intel will not provide fixes or new releases and that the project has known security issues. For a new setup, use a maintained route such as Ollama with Vulkan or llama.cpp with Vulkan or SYCL.',
          },
          {
            q: 'Does Intel Arc support CUDA?',
            a: 'No. CUDA is NVIDIA’s platform. On Arc, local LLM tools use other backends, for example Vulkan or SYCL. Check that each tool you rely on supports one of them.',
          },
          {
            q: 'Is the Arc A770 16GB a better buy than the B580 12GB?',
            a: 'Not at the prices we checked. The A770 has 4 GB more memory, but Tom’s Hardware listed it from $846 in the US on 27 November 2026. It could make sense at a much lower price if you need 16 GB. We have not benchmarked either card.',
          },
          {
            q: 'Can I use an Intel Arc and an NVIDIA GPU in one PC?',
            a: 'The cards can share a PC if the board, space and power supply allow it, but do not assume a local LLM tool can pool their memory. Check the multi-GPU documentation of your tool. We have not tested a mixed setup.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best GPU Under $300 for Local LLMs](/prompt-bites/best-gpu-under-300-local-llm): the Arc B570 under that line, the used RTX 3060 12GB just above it',
          '[MLX vs Ollama vs llama.cpp](/prompt-bites/mlx-vs-ollama-vs-llamacpp): how the inference engines differ',
          '[GPU Buying Guide for Local LLMs](/power-local-llm/best-gpu-buying-guide-local-llm-2026): options across other budgets',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-ar.webp',
    title: 'أفضل بطاقة Intel Arc لتشغيل LLM محليًا؟',
    seoTitle: 'أفضل بطاقة Intel Arc لتشغيل LLM محليًا 2026 | Prompt Bites',
    metaDescription: 'اختيارنا من Intel Arc للنماذج المحلية هو B580 12GB، لكن لم نجد له سعرًا حاليًا تحت 300 دولار. أسعار B570 وA770 وإعداد البرمجيات.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'المشترون الذين يفكرون في Intel Arc كبديل أرخص من NVIDIA لتشغيل LLM محليًا',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**اختيارنا من بطاقات Intel Arc للنماذج المحلية هو B580 12GB، بسبب الذاكرة والدعم الموثق لا بسبب السعر.** هذا رأي تحريري وليس نتيجة اختبار أداء. لم نجد رقمًا أمريكيًا حاليًا تحت 300 دولار: في 27 نوفمبر 2026 أظهر [Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking) أن أفضل سعر 729 دولارًا، وبلغ أدنى متوسط في نوفمبر لإعلانات eBay لدى [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) 399 دولارًا. إذا كان حد 300 دولار صارمًا فانظر في Arc B570 10GB. لا تدعم بطاقات Arc تقنية CUDA، فاستخدم مسارًا موثقًا عبر Vulkan أو SYCL، ولا تبدأ إعدادًا جديدًا على IPEX-LLM الذي أرشفته Intel.',
    toc: [
      { label: 'أفضل اختيار: Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 مقابل RTX 3060 12GB من NVIDIA', anchor: '#comparison' },
      { label: 'أفضل البدائل', anchor: '#alternatives' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هي أفضل بطاقة Intel Arc لتشغيل LLM محليًا؟',
        answer: 'اختيارنا التحريري هو Intel Arc B580 12GB: تزيد على B570 بمقدار 2 GB وترد في جدول دعم SYCL في llama.cpp. لم نجد لها سعرًا أمريكيًا حاليًا تحت 300 دولار، وتتباين أرقام نوفمبر كثيرًا. ومع حد صارم قدره 300 دولار، عُرضت Arc B570 10GB بين 279.99 و289.99 دولارًا لدى متاجر أمريكية في أسبوع الجمعة البيضاء.',
        bullets: [
          'Arc B580 12GB: مساحة أكبر من بطاقة 10 GB. تحقق من السعر الحالي لأن المصادر متضاربة.',
          'لا دعم لـ CUDA: يوثّق Ollama استخدام Vulkan لدعم بطاقات إضافية، ويوثّق llama.cpp واجهة SYCL لبطاقات Intel.',
          'أرشفت Intel مشروع IPEX-LLM ويشير إشعارها إلى مشكلات أمنية معروفة، فلا تستخدمه في إعداد جديد.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الاختيار التحريري من Arc هو B580 12GB لسعة 12 GB ودعمها الموثق في llama.cpp',
          'لم نجد سعرًا أمريكيًا حاليًا للبطاقة B580 تحت 300 دولار، ومصادر نوفمبر متباينة كثيرًا',
          'مع حد صارم 300 دولار: Arc B570 10GB، عُرضت بين 279.99 و289.99 دولارًا في 27–28 نوفمبر 2026',
          'البرمجيات: استخدم Vulkan أو SYCL، فقد أرشفت Intel مشروع IPEX-LLM',
          'A770 16GB: ذاكرة أكبر، لكن Tom’s Hardware عرضها ابتداءً من 846 دولارًا في 27 نوفمبر',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'بطاقة Intel Arc B580 12GB هي اختيارنا التحريري من Arc للنماذج المحلية، لكننا لم نجد لها سعرًا أمريكيًا حاليًا تحت 300 دولار.' },
          { type: 'plain-terms', text: 'اختر B580 للذاكرة الإضافية إذا ناسبك سعرها، وقارنها ببطاقة RTX 3060 12GB المستعملة التي بيعت في أمريكا بين 310 و350 دولارًا.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Intel Arc B580 12GB',
        content: [
          '<strong>من بين بطاقات Intel Arc نختار B580 12GB لجهاز نماذج محلية.</strong> يبلغ حجم نموذج 14B بصيغة Q4 في <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">قائمة Qwen 2.5 لدى Ollama</a> نحو 9.0 GB، فيبقى على بطاقة 12 GB نحو 3 GB للسياق والأعباء الإضافية، مقابل نحو 1 GB على B570 بسعة 10 GB. لم نجرِ اختبارات أداء على أي منهما.',
          'تحقق من البرمجيات أولًا. يصف <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">توثيق GPU في Ollama</a> دعمًا إضافيًا على Windows وLinux عبر Vulkan، وهو مفعّل افتراضيًا عند تثبيت الواجهة، ويحتاج Linux إلى مكونات تعريف Intel. ولا يسمّي طرازات Arc. أما <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">توثيق SYCL في llama.cpp</a> فيدرج Arc B580 ضمن المدعومة. ومشروع IPEX-LLM الذي كان مسارًا شائعًا على Arc <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">مؤرشف على GitHub</a>: لن تقدّم Intel إصلاحات أخرى، ويشير الإشعار إلى مشكلات أمنية معروفة.',
          '<strong>اشترها إذا:</strong> ناسبك السعر المعروض وقبلت التحقق من الإعداد. <strong>تجنبها إذا:</strong> كانت أدواتك تفترض وجود CUDA، فحينها نرى أن بطاقة NVIDIA خيار أكثر أمانًا.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'تحقق من سعر Intel Arc B580 على أمازون',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=Intel%20Arc%20B580',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'تحقق من سعر Intel Arc B580 على Newegg',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 مقابل RTX 3060 12GB من NVIDIA',
        content: [
          '<strong>كلتا البطاقتين بسعة 12 GB وتتسعان لأحجام نماذج متقاربة، لكن الأسعار أدناه على أسس مختلفة.</strong> بيعت RTX 3060 12GB المستعملة بين 310 و350 دولارًا (الوسيط 330) في 209 عمليات بيع مكتملة على eBay الأمريكي من 17 إلى 26 نوفمبر 2026 دون الشحن (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>). وبالنسبة إلى B580: أظهر <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> أن أفضل سعر أمريكي 729 دولارًا (27 نوفمبر)، وأظهر <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> سعر 851.16 دولارًا للجديدة على Amazon الأمريكي و499 للمستعملة على eBay (27 نوفمبر)، وسجّل <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> أدنى متوسط في نوفمبر لإعلانات eBay عند 399 دولارًا (الحالي 431)، ورصد <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> إعلانات معيدي بيع بين 851 و1,263 دولارًا (7 نوفمبر). ووصفها <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> في 28 نوفمبر بأنها غير متوفرة لدى البائعين الموثوقين. سعر الإطلاق 249 دولارًا ليس حاليًا. كل هذه أسعار أمريكية.',
          'نرى أن تشتري RTX 3060 12GB المستعملة إذا كانت B580 التي وجدتها أغلى وأردت CUDA، التي يدعمها <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">توثيق GPU في Ollama</a> على هذه البطاقة. واختر B580 إذا أردت بطاقة جديدة وناسبتك شروط ضمان البائع وكانت أداتك تدعم Vulkan أو SYCL.',
        ],
        columns: ['البطاقة', 'VRAM', 'السعر الأمريكي وأساسه', 'البرمجيات'],
        rows: [
          { البطاقة: 'Arc B580', VRAM: '12 GB', 'السعر الأمريكي وأساسه': '399–851$ المصادر متضاربة', البرمجيات: 'Vulkan / SYCL' },
          { البطاقة: 'RTX 3060 مستعملة', VRAM: '12 GB', 'السعر الأمريكي وأساسه': '310–350$ مبيعة، 17–26/11', البرمجيات: 'CUDA' },
          { البطاقة: 'Arc B570 جديدة', VRAM: '10 GB', 'السعر الأمريكي وأساسه': '279.99–289.99$ متجر، 27–28/11', البرمجيات: 'Vulkan / SYCL' },
          { البطاقة: 'Arc A770 16GB', VRAM: '16 GB', 'السعر الأمريكي وأساسه': 'من 846$ معروضة، 27/11', البرمجيات: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'تحقق من سعر RTX 3060 12GB',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'أفضل البدائل',
        content: [
          '<strong>Intel Arc B570 10GB</strong>: بطاقة Arc بسعة 10 GB أو أكثر التي وثّقنا لها سعرًا مؤرخًا تحت 300 دولار. أظهرت <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">قائمة PC Gamer بتاريخ 28 نوفمبر</a> سعر 279.99 دولارًا لدى Newegg (مع خصم إضافي بعد تسجيل الدخول) و289.99 لدى Walmart، وذكر <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> سعر 289 دولارًا في 27 نوفمبر، وكلها في أسبوع الجمعة البيضاء. وهناك عروض أغلى، مثل 429.97 دولارًا لإعلان على Amazon يتابعه <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>. مع 10 GB خطط لنماذج 7B–8B، ونموذج 14B بصيغة Q4 ضيق جدًا.',
          '<strong>Intel Arc A770 16GB</strong>: تزيد 4 GB على B580 لكنها من جيل Alchemist الأقدم. ذكر <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> أن أفضل سعر أمريكي في 27 نوفمبر كان 846 دولارًا مقابل سعر إطلاق 349 دولارًا. لا ننظر فيها إلا بسعر أقل بكثير، وتوثيق SYCL في llama.cpp يدرجها مدعومة.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'تحقق من سعر Intel Arc B570',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'تحقق من سعر Intel Arc A770',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يدعم Ollama بطاقات Intel Arc؟',
            a: 'يوثّق Ollama دعمًا إضافيًا على Windows وLinux عبر Vulkan، وهو مفعّل افتراضيًا عند تثبيت الواجهة. ويحتاج Linux إلى مكونات تعريف Intel. لا يسمّي توثيق GPU طرازات Arc، فتأكد بعد الإعداد من أن نموذجك يعمل على البطاقة.',
          },
          {
            q: 'هل ما زال IPEX-LLM مدعومًا؟',
            a: 'لا. أرشفت Intel مستودع IPEX-LLM على GitHub. ويقول إشعارها إنها لن تقدّم إصلاحات أو إصدارات جديدة وإن للمشروع مشكلات أمنية معروفة. لإعداد جديد استخدم مسارًا تجري صيانته مثل Ollama مع Vulkan أو llama.cpp مع Vulkan أو SYCL.',
          },
          { q: 'هل تدعم Intel Arc تقنية CUDA؟', a: 'لا. CUDA منصة تابعة لشركة NVIDIA. على Arc تستخدم أدوات النماذج المحلية واجهات أخرى مثل Vulkan أو SYCL. تأكد من أن كل أداة تعتمد عليها تدعم إحداها.' },
          {
            q: 'هل Arc A770 16GB شراء أفضل من B580 12GB؟',
            a: 'ليس بالأسعار التي فحصناها. تزيد A770 بمقدار 4 GB، لكن Tom’s Hardware عرضها في أمريكا ابتداءً من 846 دولارًا في 27 نوفمبر 2026. قد تكون منطقية بسعر أقل بكثير إذا احتجت 16 GB. لم نجرِ اختبارات أداء على أي منهما.',
          },
          {
            q: 'هل يمكن استخدام Intel Arc وبطاقة NVIDIA في حاسوب واحد؟',
            a: 'يمكن تركيبهما معًا إذا سمحت اللوحة الأم والمساحة ومزود الطاقة، لكن لا تفترض أن أداة النماذج ستجمع ذاكرتيهما. راجع توثيق تعدد البطاقات في أداتك. لم نختبر إعدادًا مختلطًا.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل بطاقة تحت 300 دولار للنماذج المحلية](/ar/prompt-bites/best-gpu-under-300-local-llm): بطاقة Arc B570 تحت الحد، وRTX 3060 12GB المستعملة فوقه بقليل',
          '[MLX مقابل Ollama مقابل llama.cpp](/ar/prompt-bites/mlx-vs-ollama-vs-llamacpp): الفروق بين محركات الاستدلال',
          '[دليل شراء بطاقات الرسومات للنماذج المحلية](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026): خيارات لميزانيات أخرى',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-de.webp',
    title: 'Die beste Intel-Arc-GPU für lokale LLMs?',
    seoTitle: 'Beste Intel-Arc-GPU für lokale LLMs 2026 | Prompt Bites',
    metaDescription: 'Unsere Intel-Arc-Wahl für lokale LLMs ist die B580 12GB, doch aktuell fanden wir keinen Preis unter 300 $. Arc-B570- und A770-Preise plus Software.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die Intel Arc als günstigere Alternative zu NVIDIA für lokale LLMs erwägen',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**Unsere Intel-Arc-Wahl für lokale LLMs ist die B580 12GB, wegen Speicher und dokumentierter Unterstützung, nicht wegen des Preises.** Das ist eine redaktionelle Entscheidung, kein Benchmark-Ergebnis. Wir fanden keine aktuelle US-Zahl unter 300 $: Am 27. November 2026 nannte [Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking) 729 $ als besten Preis, der niedrigste November-Mittelwert aus eBay-Angeboten bei [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) lag bei 399 $. Bei festem Limit von 300 $ kommt die Arc B570 10GB infrage. Arc-Karten haben kein CUDA; nutzen Sie einen dokumentierten Weg über Vulkan oder SYCL und beginnen Sie keine neue Installation mit dem von Intel archivierten IPEX-LLM.',
    toc: [
      { label: 'Beste Wahl: Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 vs. eine NVIDIA RTX 3060 12GB', anchor: '#comparison' },
      { label: 'Beste Alternativen', anchor: '#alternatives' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste Intel-Arc-GPU für lokale LLMs?',
        answer: 'Unsere redaktionelle Wahl ist die Intel Arc B580 12GB: Sie hat 2 GB mehr Speicher als die B570 und steht in der SYCL-Supporttabelle von llama.cpp. Einen aktuellen US-Preis unter 300 $ fanden wir nicht, und die November-Zahlen weichen stark ab. Bei festem 300-$-Limit war die Arc B570 10GB in der Black-Friday-Woche bei US-Händlern für 279,99–289,99 $ gelistet.',
        bullets: [
          'Arc B580 12GB: mehr Platz als eine 10-GB-Karte; prüfen Sie den aktuellen Preis, die Quellen widersprechen sich.',
          'Kein CUDA: Ollama dokumentiert Vulkan für zusätzliche GPU-Unterstützung, llama.cpp ein SYCL-Backend für Intel-GPUs.',
          'Intel hat IPEX-LLM archiviert; der Hinweis nennt bekannte Sicherheitsprobleme. Nicht für neue Installationen verwenden.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Redaktionelle Arc-Wahl: B580 12GB, wegen 12 GB Speicher und dokumentierter llama.cpp-Unterstützung',
          'Kein aktueller US-Preis der B580 unter 300 $ gefunden; die November-Quellen weichen stark ab',
          'Festes Limit 300 $: Arc B570 10GB, am 27.–28. November 2026 für 279,99–289,99 $ gelistet',
          'Software: Vulkan oder SYCL nutzen; Intel hat IPEX-LLM archiviert',
          'A770 16GB: mehr Speicher, aber laut Tom’s Hardware am 27. November ab 846 $',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die Intel Arc B580 12GB ist unsere redaktionelle Arc-Wahl für lokale LLMs, doch einen aktuellen US-Preis unter 300 $ fanden wir nicht.' },
          {
            type: 'plain-terms',
            text: 'Nehmen Sie die B580 wegen des zusätzlichen Speichers, wenn der Preis für Sie passt, und vergleichen Sie mit der gebrauchten RTX 3060 12GB, die in den USA für 310–350 $ verkauft wurde.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Intel Arc B580 12GB',
        content: [
          '<strong>Unter den Intel-Arc-Karten würden wir für einen lokalen LLM-Rechner die B580 12GB wählen.</strong> Ein 14B-Modell in Q4 ist in <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollamas Qwen-2.5-Liste</a> 9,0 GB groß. Auf 12 GB bleiben damit rund 3 GB für Kontext und Overhead, auf der B570 mit 10 GB nur rund 1 GB. Wir haben keine der beiden Karten gebenchmarkt.',
          'Prüfen Sie zuerst die Software. Die <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">GPU-Dokumentation von Ollama</a> beschreibt zusätzliche GPU-Unterstützung unter Windows und Linux über Vulkan, standardmäßig aktiv, wenn das Backend installiert ist; unter Linux sind Intels Treiberkomponenten nötig. Arc-Modelle nennt sie nicht namentlich. Die <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">SYCL-Dokumentation von llama.cpp</a> führt die Arc B580 als unterstützt. IPEX-LLM, früher ein verbreiteter Arc-Weg, ist <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">auf GitHub archiviert</a>: Intel liefert keine Korrekturen mehr, und der Hinweis nennt bekannte Sicherheitsprobleme.',
          '<strong>Kaufen, wenn:</strong> der Angebotspreis passt und Sie etwas Einrichtungsprüfung akzeptieren. <strong>Lassen, wenn:</strong> Ihre Tools CUDA voraussetzen; dann ist aus unserer Sicht eine NVIDIA-Karte die sicherere Wahl.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Intel Arc B580 Preis bei Amazon prüfen',
          },
          {
            url: 'https://geizhals.de/?fs=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Intel Arc B580 Preisvergleich bei Geizhals',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 vs. eine NVIDIA RTX 3060 12GB',
        content: [
          '<strong>Beide Karten haben 12 GB und fassen ähnliche Modellgrößen; die Preise unten haben unterschiedliche Grundlagen.</strong> Die gebrauchte RTX 3060 12GB wurde für 310–350 $ (Median 330 $) verkauft: 209 abgeschlossene Verkäufe bei eBay USA, 17.–26. November 2026, ohne Versand (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>). Zur B580 zeigte <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> 729 $ als besten US-Preis (27. November), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> 851,16 $ neu bei Amazon USA und 499 $ gebraucht bei eBay (27. November), <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> einen niedrigsten November-Mittelwert aus eBay-Angeboten von 399 $ (aktuell 431 $) und <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> Wiederverkäufer-Angebote für 851–1.263 $ (7. November). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> nannte sie bei seriösen Händlern nicht verfügbar (28. November). Der Startpreis von 249 $ ist kein aktueller Preis. Alle Angaben sind US-Preise.',
          'Aus unserer Sicht lohnt die gebrauchte RTX 3060 12GB, wenn Ihre gefundene B580 mehr kostet und Sie CUDA wollen, das die <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama-GPU-Dokumentation</a> für diese Karte unterstützt. Wählen Sie die B580, wenn Sie eine neue Karte wollen, die Garantiebedingungen des Händlers passen und Ihr Tool Vulkan oder SYCL unterstützt.',
        ],
        columns: ['Karte', 'VRAM', 'US-Preis und Basis', 'Software'],
        rows: [
          { Karte: 'Arc B580', VRAM: '12 GB', 'US-Preis und Basis': '399–851 $, Quellen uneinig', Software: 'Vulkan / SYCL' },
          { Karte: 'RTX 3060 (gebr.)', VRAM: '12 GB', 'US-Preis und Basis': '310–350 $ verkauft, 17.–26.11.', Software: 'CUDA' },
          { Karte: 'Arc B570 (neu)', VRAM: '10 GB', 'US-Preis und Basis': '279,99–289,99 $ Handel, 27.–28.11.', Software: 'Vulkan / SYCL' },
          { Karte: 'Arc A770 16GB', VRAM: '16 GB', 'US-Preis und Basis': 'ab 846 $ gelistet, 27.11.', Software: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'RTX 3060 12GB Preis prüfen',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Beste Alternativen',
        content: [
          '<strong>Intel Arc B570 10GB</strong>: die Arc-Karte mit mindestens 10 GB, die wir datiert unter 300 $ belegen konnten. Die <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">Liste von PC Gamer vom 28. November</a> zeigte 279,99 $ bei Newegg (mit zusätzlichem Rabatt nach Anmeldung) und 289,99 $ bei Walmart, <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> nannte am 27. November 289 $, beides in der Black-Friday-Woche. Andere Angebote kosten mehr, etwa 429,97 $ für ein von <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a> verfolgtes Amazon-Angebot. Planen Sie bei 10 GB mit 7B–8B-Modellen; ein 14B-Modell in Q4 ist sehr knapp.',
          '<strong>Intel Arc A770 16GB</strong>: 4 GB mehr als die B580, aber ältere Alchemist-Generation. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> nannte am 27. November 846 $ als besten US-Preis, bei 349 $ Startpreis. Wir würden sie nur zu einem weit niedrigeren Preis erwägen; die SYCL-Dokumentation von llama.cpp führt sie als unterstützt.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'Intel Arc B570 Preis prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'Intel Arc A770 Preis prüfen',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Unterstützt Ollama Intel-Arc-GPUs?',
            a: 'Ollama dokumentiert zusätzliche GPU-Unterstützung unter Windows und Linux über Vulkan, standardmäßig aktiv, wenn das Backend installiert ist. Unter Linux benötigen Sie Intel-Treiberkomponenten. Die GPU-Dokumentation nennt Arc-Modelle nicht namentlich; prüfen Sie nach der Einrichtung, dass Ihr Modell auf der GPU läuft.',
          },
          {
            q: 'Wird IPEX-LLM noch gepflegt?',
            a: 'Nein. Intel hat das IPEX-LLM-Repository auf GitHub archiviert. Laut Hinweis gibt es keine Korrekturen oder neuen Versionen mehr, und das Projekt hat bekannte Sicherheitsprobleme. Nutzen Sie für neue Installationen einen gepflegten Weg wie Ollama mit Vulkan oder llama.cpp mit Vulkan oder SYCL.',
          },
          {
            q: 'Unterstützt Intel Arc CUDA?',
            a: 'Nein. CUDA ist die Plattform von NVIDIA. Auf Arc nutzen lokale LLM-Tools andere Backends wie Vulkan oder SYCL. Prüfen Sie, ob jedes benötigte Tool eines davon unterstützt.',
          },
          {
            q: 'Ist die Arc A770 16GB ein besserer Kauf als die B580 12GB?',
            a: 'Nicht zu den geprüften Preisen. Die A770 hat 4 GB mehr Speicher, doch Tom’s Hardware listete sie am 27. November 2026 in den USA ab 846 $. Zu einem deutlich niedrigeren Preis kann sie sinnvoll sein, wenn Sie 16 GB brauchen. Wir haben keine der Karten gebenchmarkt.',
          },
          {
            q: 'Kann ich Intel Arc und eine NVIDIA-GPU in einem PC nutzen?',
            a: 'Beide Karten können in einem PC stecken, wenn Mainboard, Platz und Netzteil reichen. Gehen Sie aber nicht davon aus, dass ein LLM-Tool ihren Speicher zusammenlegt. Prüfen Sie die Multi-GPU-Dokumentation Ihres Tools. Eine gemischte Konfiguration haben wir nicht getestet.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste GPU unter 300 $ für lokale LLMs](/de/prompt-bites/best-gpu-under-300-local-llm): die Arc B570 darunter, die gebrauchte RTX 3060 12GB knapp darüber',
          '[MLX vs. Ollama vs. llama.cpp](/de/prompt-bites/mlx-vs-ollama-vs-llamacpp): wie sich die Inferenz-Engines unterscheiden',
          '[GPU-Kaufberatung für lokale LLMs](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026): Optionen für andere Budgets',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-es.webp',
    title: '¿Cuál es la Mejor GPU Intel Arc para LLMs Locales?',
    seoTitle: 'Mejor GPU Intel Arc para LLMs Locales 2026 | Prompt Bites',
    metaDescription: 'Nuestra Intel Arc para LLM locales es la B580 12GB, pero no hallamos precio actual bajo $300. Precios de la Arc B570 y A770, y configuración del software.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores que consideran Intel Arc como alternativa más económica a NVIDIA para LLMs locales',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**Nuestra elección Intel Arc para LLM locales es la B580 12GB, por memoria y soporte documentado, no por precio.** Es una decisión editorial, no el resultado de un benchmark. No hallamos ninguna cifra actual de EE. UU. bajo $300: el 27 de noviembre de 2026, [Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking) daba $729 como mejor precio y el promedio mínimo de noviembre de [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) con anuncios de eBay era $399. Con un tope firme de $300, mira la Arc B570 10GB. Las Arc no tienen CUDA; usa una vía documentada con Vulkan o SYCL y no empieces con IPEX-LLM, archivado por Intel.',
    toc: [
      { label: 'Mejor Opción: Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 vs una NVIDIA RTX 3060 12GB', anchor: '#comparison' },
      { label: 'Mejores Alternativas', anchor: '#alternatives' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor GPU Intel Arc para LLMs locales?',
        answer: 'Nuestra elección editorial es la Intel Arc B580 12GB: tiene 2 GB más que la B570 y figura en la tabla de soporte SYCL de llama.cpp. No encontramos un precio actual en EE. UU. bajo $300, y las cifras de noviembre difieren mucho. Con un tope de $300, la Arc B570 10GB aparecía a $279.99–289.99 en tiendas de EE. UU. en la semana del Black Friday.',
        bullets: [
          'Arc B580 12GB: más espacio que una tarjeta de 10 GB; revisa el precio actual porque las fuentes discrepan.',
          'Sin CUDA: Ollama documenta Vulkan para GPU adicionales y llama.cpp un backend SYCL para GPU Intel.',
          'Intel ha archivado IPEX-LLM y su aviso menciona problemas de seguridad conocidos; no lo uses en una instalación nueva.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Elección Arc editorial: B580 12GB, por sus 12 GB y el soporte documentado en llama.cpp',
          'No hallamos precio actual de la B580 en EE. UU. bajo $300; las fuentes de noviembre difieren mucho',
          'Tope firme de $300: Arc B570 10GB, listada a $279.99–289.99 el 27–28 de noviembre de 2026',
          'Software: usa Vulkan o SYCL; Intel ha archivado IPEX-LLM',
          'A770 16GB: más memoria, pero Tom’s Hardware la listaba desde $846 el 27 de noviembre',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La Intel Arc B580 12GB es nuestra elección editorial Arc para LLM locales, pero no encontramos un precio actual en EE. UU. por debajo de $300.' },
          { type: 'plain-terms', text: 'Elige la B580 por su memoria extra si el precio te convence, y compárala con la RTX 3060 12GB usada, vendida a $310–350 en EE. UU.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Intel Arc B580 12GB',
        content: [
          '<strong>Entre las Intel Arc, elegiríamos la B580 12GB para un equipo de LLM local.</strong> Un modelo 14B en Q4 ocupa 9.0 GB en la <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">lista Qwen 2.5 de Ollama</a>: en 12 GB quedan unos 3 GB para contexto y sobrecarga, frente a cerca de 1 GB en la B570 de 10 GB. No hemos hecho benchmarks de ninguna.',
          'Revisa primero el software. La <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentación de GPU de Ollama</a> describe soporte adicional en Windows y Linux mediante Vulkan, activado por defecto cuando el backend está instalado; en Linux se necesitan los componentes de controlador de Intel. No nombra modelos Arc. La <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">documentación SYCL de llama.cpp</a> incluye la Arc B580 como compatible. IPEX-LLM, antes una vía habitual en Arc, está <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">archivado en GitHub</a>: Intel no dará más correcciones y el aviso menciona problemas de seguridad conocidos.',
          '<strong>Cómprala si:</strong> el precio del anuncio te convence y aceptas comprobar la configuración. <strong>Evítala si:</strong> tus herramientas dan por hecho CUDA; entonces, a nuestro juicio, una NVIDIA es la opción más segura.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Consulta el precio de la Intel Arc B580 en Amazon',
          },
          {
            url: 'https://www.idealo.es/precios/205368545/asrock-arc-b580.html',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Comparar precios de la Intel Arc B580 en idealo.es',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 vs una NVIDIA RTX 3060 12GB',
        content: [
          '<strong>Ambas tienen 12 GB y admiten tamaños de modelo similares; los precios siguientes tienen bases distintas.</strong> La RTX 3060 12GB usada se vendió a $310–350 (mediana $330) en 209 ventas cerradas en eBay EE. UU., 17–26 de noviembre de 2026, sin envío (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>). Para la B580, <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> mostraba $729 como mejor precio en EE. UU. (27 de noviembre), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> $851.16 nueva en Amazon EE. UU. y $499 usada en eBay (27 de noviembre), <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> un promedio mínimo de noviembre de $399 con anuncios de eBay (ahora $431) y <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> anuncios de revendedores a $851–1,263 (7 de noviembre). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> la daba como no disponible en vendedores fiables (28 de noviembre). El precio de lanzamiento de $249 no es actual. Todos son precios de EE. UU.',
          'A nuestro juicio, compra la RTX 3060 12GB usada si la B580 que encuentras cuesta más y quieres CUDA, que la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentación de GPU de Ollama</a> admite en esta tarjeta. Elige la B580 si quieres una tarjeta nueva, te sirven las condiciones de garantía del vendedor y tu herramienta admite Vulkan o SYCL.',
        ],
        columns: ['Tarjeta', 'VRAM', 'Precio EE. UU. y base', 'Software'],
        rows: [
          { Tarjeta: 'Arc B580', VRAM: '12 GB', 'Precio EE. UU. y base': '$399–851, fuentes discrepan', Software: 'Vulkan / SYCL' },
          { Tarjeta: 'RTX 3060 (usada)', VRAM: '12 GB', 'Precio EE. UU. y base': '$310–350 vendida, 17–26/11', Software: 'CUDA' },
          { Tarjeta: 'Arc B570 (nueva)', VRAM: '10 GB', 'Precio EE. UU. y base': '$279.99–289.99 tienda, 27–28/11', Software: 'Vulkan / SYCL' },
          { Tarjeta: 'Arc A770 16GB', VRAM: '16 GB', 'Precio EE. UU. y base': 'Desde $846 listada, 27/11', Software: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Consulta el precio de la RTX 3060 12GB',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Mejores Alternativas',
        content: [
          '<strong>Intel Arc B570 10GB</strong>: la Arc de 10 GB o más que pudimos fechar bajo $300. La <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">lista de PC Gamer del 28 de noviembre</a> mostraba $279.99 en Newegg (con descuento extra al iniciar sesión) y $289.99 en Walmart, y <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> $289 el 27 de noviembre, en la semana del Black Friday. Otras ofertas cuestan más, por ejemplo $429.97 en un anuncio de Amazon seguido por <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>. Con 10 GB, cuenta con modelos 7B–8B; un 14B en Q4 va muy justo.',
          '<strong>Intel Arc A770 16GB</strong>: 4 GB más que la B580, en la generación Alchemist anterior. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> daba $846 como mejor precio en EE. UU. el 27 de noviembre, frente a $349 de lanzamiento. Solo la consideraríamos a un precio mucho menor; la documentación SYCL de llama.cpp la incluye como compatible.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'Consulta el precio de la Intel Arc B570',
          },
          {
            url: 'https://www.amazon.es/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'Consulta el precio de la Intel Arc A770',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Ollama admite las GPU Intel Arc?',
            a: 'Ollama documenta soporte adicional en Windows y Linux mediante Vulkan, activado por defecto cuando el backend está instalado. En Linux hacen falta componentes de controlador de Intel. Su documentación no nombra modelos Arc, así que comprueba tras instalar que tu modelo se ejecuta en la GPU.',
          },
          {
            q: '¿Se sigue manteniendo IPEX-LLM?',
            a: 'No. Intel ha archivado el repositorio IPEX-LLM en GitHub. El aviso dice que no habrá correcciones ni versiones nuevas y que el proyecto tiene problemas de seguridad conocidos. Para una instalación nueva, usa una vía mantenida como Ollama con Vulkan o llama.cpp con Vulkan o SYCL.',
          },
          {
            q: '¿Intel Arc admite CUDA?',
            a: 'No. CUDA es la plataforma de NVIDIA. En Arc, las herramientas de LLM local usan otros backends, como Vulkan o SYCL. Comprueba que cada herramienta que necesitas admita alguno.',
          },
          {
            q: '¿Es la Arc A770 16GB mejor compra que la B580 12GB?',
            a: 'No a los precios revisados. La A770 tiene 4 GB más, pero Tom’s Hardware la listaba desde $846 en EE. UU. el 27 de noviembre de 2026. A un precio mucho menor puede tener sentido si necesitas 16 GB. No hemos hecho benchmarks de ninguna.',
          },
          {
            q: '¿Puedo usar una Intel Arc y una GPU NVIDIA en el mismo PC?',
            a: 'Pueden estar en el mismo PC si la placa, el espacio y la fuente lo permiten, pero no des por hecho que una herramienta de LLM sume su memoria. Revisa su documentación multi-GPU. No hemos probado una configuración mixta.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[Mejor GPU por menos de $300 para LLM locales](/es/prompt-bites/best-gpu-under-300-local-llm): la Arc B570 por debajo y la RTX 3060 12GB usada justo por encima',
          '[MLX vs Ollama vs llama.cpp](/es/prompt-bites/mlx-vs-ollama-vs-llamacpp): diferencias entre motores de inferencia',
          '[Guía de compra de GPU para LLM locales](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026): opciones para otros presupuestos',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-fr.webp',
    title: 'Meilleur GPU Intel Arc pour les LLM locaux ?',
    seoTitle: 'Meilleur GPU Intel Arc pour LLM locaux 2026',
    metaDescription: 'Notre choix Intel Arc pour les LLM locaux est la B580 12 Go, mais aucun prix actuel sous 300 $. Prix des Arc B570 et A770, et configuration logicielle.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs envisageant Intel Arc comme alternative moins chère à NVIDIA pour les LLM locaux',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**Notre choix Intel Arc pour les LLM locaux est la B580 12 Go, pour sa mémoire et sa prise en charge documentée, pas pour son prix.** C’est un choix éditorial, pas un résultat de benchmark. Aucun chiffre américain actuel n’était sous 300 $ : le 27 novembre 2026, [Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking) donnait 729 $ comme meilleur prix, et la moyenne basse de novembre de [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) sur des annonces eBay était de 399 $. Avec un plafond ferme de 300 $, regardez l’Arc B570 10 Go. Les Arc n’ont pas CUDA ; suivez une voie documentée Vulkan ou SYCL et ne démarrez pas avec IPEX-LLM, archivé par Intel.',
    toc: [
      { label: 'Meilleur choix : Intel Arc B580 12 Go', anchor: '#best-pick' },
      { label: 'Intel Arc B580 vs NVIDIA RTX 3060 12 Go', anchor: '#comparison' },
      { label: 'Meilleures alternatives', anchor: '#alternatives' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur GPU Intel Arc pour les LLM locaux ?',
        answer: 'Notre choix éditorial est l’Intel Arc B580 12 Go : elle a 2 Go de plus que la B570 et figure dans le tableau de prise en charge SYCL de llama.cpp. Nous n’avons trouvé aucun prix américain actuel sous 300 $, et les chiffres de novembre divergent fortement. Avec un plafond de 300 $, l’Arc B570 10 Go était affichée à 279,99–289,99 $ chez des revendeurs américains pendant la semaine du Black Friday.',
        bullets: [
          'Arc B580 12 Go : plus de place qu’une carte 10 Go ; vérifiez le prix actuel, les sources se contredisent.',
          'Pas de CUDA : Ollama documente Vulkan pour des GPU supplémentaires, llama.cpp un backend SYCL pour les GPU Intel.',
          'IPEX-LLM est archivé par Intel et son avis cite des failles de sécurité connues ; évitez-le pour une nouvelle installation.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Choix Arc éditorial : B580 12 Go, pour ses 12 Go et la prise en charge documentée par llama.cpp',
          'Aucun prix américain actuel sous 300 $ trouvé pour la B580 ; les sources de novembre divergent fortement',
          'Plafond ferme de 300 $ : Arc B570 10 Go, affichée à 279,99–289,99 $ les 27–28 novembre 2026',
          'Logiciel : utilisez Vulkan ou SYCL ; Intel a archivé IPEX-LLM',
          'A770 16 Go : plus de mémoire, mais affichée dès 846 $ chez Tom’s Hardware le 27 novembre',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'L’Intel Arc B580 12 Go est notre choix éditorial Arc pour les LLM locaux, mais nous n’avons trouvé aucun prix américain actuel sous 300 $.' },
          { type: 'plain-terms', text: 'Prenez la B580 pour sa mémoire supplémentaire si son prix vous convient, et comparez-la à la RTX 3060 12 Go d’occasion, vendue 310–350 $ aux États-Unis.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Intel Arc B580 12 Go',
        content: [
          '<strong>Parmi les cartes Intel Arc, nous choisirions la B580 12 Go pour une machine LLM locale.</strong> Un modèle 14B en Q4 pèse 9,0 Go dans la <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">liste Qwen 2.5 d’Ollama</a> : il reste environ 3 Go sur 12 Go pour le contexte et les besoins annexes, contre environ 1 Go sur la B570 de 10 Go. Nous n’avons testé les performances d’aucune des deux.',
          'Vérifiez d’abord le logiciel. La <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentation GPU d’Ollama</a> décrit une prise en charge supplémentaire sous Windows et Linux via Vulkan, activée par défaut quand le backend est installé ; Linux exige les composants de pilote d’Intel. Elle ne nomme pas les modèles Arc. La <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">documentation SYCL de llama.cpp</a> indique l’Arc B580 comme prise en charge. IPEX-LLM, autrefois une voie courante sur Arc, est <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">archivé sur GitHub</a> : Intel ne publie plus de correctifs et l’avis cite des failles de sécurité connues.',
          '<strong>Achetez-la si :</strong> le prix affiché vous convient et vous acceptez de vérifier la configuration. <strong>Évitez-la si :</strong> vos outils exigent CUDA ; une carte NVIDIA est alors, selon nous, le choix le plus sûr.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Vérifier le prix de l\'Intel Arc B580 sur Amazon',
          },
          {
            url: 'https://www.idealo.fr/prix/205486053/intel-arc-b580-limited-edition.html',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Comparer les prix de l\'Intel Arc B580 sur idealo.fr',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 vs NVIDIA RTX 3060 12 Go',
        content: [
          '<strong>Les deux cartes ont 12 Go et accueillent des modèles de taille similaire ; les prix ci-dessous reposent sur des bases différentes.</strong> La RTX 3060 12 Go d’occasion s’est vendue 310–350 $ (médiane 330 $) sur 209 ventes conclues sur eBay aux États-Unis, du 17 au 26 novembre 2026, hors livraison (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>). Pour la B580, <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> affichait 729 $ comme meilleur prix américain (27 novembre), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> 851,16 $ neuve sur Amazon US et 499 $ d’occasion sur eBay (27 novembre), <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> une moyenne basse de 399 $ en novembre sur des annonces eBay (431 $ actuellement), et <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> des annonces de revendeurs à 851–1 263 $ (7 novembre). <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> la disait indisponible chez les vendeurs fiables (28 novembre). Le prix de lancement de 249 $ n’est pas un prix actuel. Tous ces prix sont américains.',
          'Selon nous, prenez la RTX 3060 12 Go d’occasion si la B580 trouvée coûte plus cher et que vous voulez CUDA, pris en charge sur cette carte d’après la <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentation GPU d’Ollama</a>. Choisissez la B580 si vous voulez une carte neuve, que les conditions de garantie du vendeur vous conviennent et que votre outil prend en charge Vulkan ou SYCL.',
        ],
        columns: ['Carte', 'VRAM', 'Prix US et base', 'Logiciel'],
        rows: [
          { Carte: 'Arc B580', VRAM: '12 Go', 'Prix US et base': '399–851 $, sources divergentes', Logiciel: 'Vulkan / SYCL' },
          { Carte: 'RTX 3060 (occ.)', VRAM: '12 Go', 'Prix US et base': '310–350 $ vendu, 17–26/11', Logiciel: 'CUDA' },
          { Carte: 'Arc B570 (neuve)', VRAM: '10 Go', 'Prix US et base': '279,99–289,99 $ magasin, 27–28/11', Logiciel: 'Vulkan / SYCL' },
          { Carte: 'Arc A770 16 Go', VRAM: '16 Go', 'Prix US et base': 'Dès 846 $ affiché, 27/11', Logiciel: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Vérifier le prix de la RTX 3060 12 Go',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Meilleures alternatives',
        content: [
          '<strong>Intel Arc B570 10 Go</strong> : la carte Arc d’au moins 10 Go que nous pouvons dater sous 300 $. La <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">liste de PC Gamer du 28 novembre</a> indiquait 279,99 $ chez Newegg (remise supplémentaire après connexion) et 289,99 $ chez Walmart, et <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> 289 $ le 27 novembre, pendant la semaine du Black Friday. D’autres offres coûtent plus, par exemple 429,97 $ pour une annonce Amazon suivie par <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>. Avec 10 Go, tablez sur des modèles 7B–8B ; un 14B en Q4 est très juste.',
          '<strong>Intel Arc A770 16 Go</strong> : 4 Go de plus que la B580, sur la génération Alchemist plus ancienne. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> donnait 846 $ comme meilleur prix américain le 27 novembre, pour un prix de lancement de 349 $. Nous ne l’envisagerions qu’à un prix bien plus bas ; la documentation SYCL de llama.cpp l’indique comme prise en charge.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'Vérifier le prix de l\'Intel Arc B570',
          },
          {
            url: 'https://www.amazon.fr/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'Vérifier le prix de l\'Intel Arc A770',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Ollama prend-il en charge les GPU Intel Arc ?',
            a: 'Ollama documente une prise en charge supplémentaire sous Windows et Linux via Vulkan, activée par défaut quand le backend est installé. Sous Linux, il faut les composants de pilote Intel. La documentation GPU ne nomme pas les modèles Arc : vérifiez après installation que votre modèle tourne bien sur le GPU.',
          },
          {
            q: 'IPEX-LLM est-il encore maintenu ?',
            a: 'Non. Intel a archivé le dépôt IPEX-LLM sur GitHub. L’avis indique qu’il n’y aura plus de correctifs ni de nouvelles versions et que le projet a des failles de sécurité connues. Pour une nouvelle installation, choisissez une voie maintenue comme Ollama avec Vulkan ou llama.cpp avec Vulkan ou SYCL.',
          },
          {
            q: 'Les cartes Intel Arc prennent-elles en charge CUDA ?',
            a: 'Non. CUDA est la plateforme de NVIDIA. Sur Arc, les outils LLM locaux utilisent d’autres backends, par exemple Vulkan ou SYCL. Vérifiez que chaque outil dont vous dépendez en prend un en charge.',
          },
          {
            q: 'L’Arc A770 16 Go est-elle un meilleur achat que la B580 12 Go ?',
            a: 'Pas aux prix vérifiés. L’A770 a 4 Go de plus, mais Tom’s Hardware l’affichait dès 846 $ aux États-Unis le 27 novembre 2026. À un prix bien plus bas, elle peut convenir si vous avez besoin de 16 Go. Nous n’avons testé les performances d’aucune des deux.',
          },
          {
            q: 'Peut-on utiliser une Intel Arc et un GPU NVIDIA dans le même PC ?',
            a: 'Les deux cartes peuvent cohabiter si la carte mère, la place et l’alimentation le permettent, mais ne supposez pas qu’un outil LLM mettra leur mémoire en commun. Consultez sa documentation multi-GPU. Nous n’avons pas testé de configuration mixte.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur GPU à moins de 300 $ pour les LLM locaux](/fr/prompt-bites/best-gpu-under-300-local-llm) : l’Arc B570 sous ce seuil, la RTX 3060 12 Go d’occasion juste au-dessus',
          '[MLX vs Ollama vs llama.cpp](/fr/prompt-bites/mlx-vs-ollama-vs-llamacpp) : les différences entre moteurs d’inférence',
          '[Guide d’achat GPU pour LLM locaux](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) : les options pour d’autres budgets',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-ja.webp',
    title: 'ローカルLLMに最適なIntel Arc GPUは?',
    seoTitle: '2026年版 ローカルLLM向け最適Intel Arc GPU | Prompt Bites',
    metaDescription: 'ローカルLLM向けのIntel Arcは当サイトではB580 12GBを選びますが、現在300ドル未満の価格は未確認です。B570・A770の価格とOllama、llama.cppの設定を解説します。',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'IntelArcをNVIDIAよりも安価なローカルLLM代替として検討する購入検討者',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**ローカルLLM向けのIntel Arcとして当サイトが選ぶのはB580 12GBです。理由は価格ではなく、メモリ容量とドキュメントに示された対応です。** これはベンチマーク結果ではなく編集上の判断です。現在の米国の数値で300ドル未満は見つかりませんでした。2026年11月27日の[Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking)の最安値は729ドル、[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)のeBay出品に基づく11月の最安平均は399ドルでした。300ドルが上限ならArc B570 10GBを検討してください。ArcはCUDAに対応しません。VulkanかSYCLのドキュメントがある方法を使い、新規構築ではIntelがアーカイブしたIPEX-LLMを使わないでください。',
    toc: [
      { label: 'ベストピック: Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 vs NVIDIA RTX 3060 12GB', anchor: '#comparison' },
      { label: '代替候補', anchor: '#alternatives' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMに最適なIntel Arc GPUは?',
        answer: '編集上の選択はIntel Arc B580 12GBです。B570より2GB多く、llama.cppのSYCL対応表に載っています。現在の米国価格で300ドル未満は見つからず、11月の数値は大きく食い違います。上限300ドルの場合、Arc B570 10GBはブラックフライデー週に米国の販売店で279.99〜289.99ドルでした。',
        bullets: [
          'Arc B580 12GB：10GBカードより余裕があります。情報が食い違うので現在の価格を確認してください。',
          'CUDA非対応：Ollamaは追加GPU対応のVulkanを、llama.cppはIntel GPU向けのSYCLバックエンドを説明しています。',
          'IPEX-LLMはIntelがアーカイブし、告知は既知のセキュリティ問題に触れています。新規構築には使わないでください。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Arcの編集上の選択はB580 12GB。12GBの容量とllama.cppの対応記載が理由です',
          'B580の現在の米国価格で300ドル未満は未確認。11月の情報は大きく食い違います',
          '上限300ドルならArc B570 10GB（2026年11月27〜28日に279.99〜289.99ドル）',
          'ソフトはVulkanかSYCLを使用。IPEX-LLMはIntelがアーカイブ済みです',
          'A770 16GBは容量が大きい一方、11月27日のTom’s Hardwareでは846ドルからでした',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Intel Arc B580 12GBはローカルLLM向けArcの編集上の選択ですが、現在の米国価格で300ドル未満は確認できませんでした。' },
          { type: 'plain-terms', text: '価格に納得できるなら、メモリに余裕のあるB580を選びます。米国で310〜350ドルで成約している中古RTX 3060 12GBとも比べてください。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: Intel Arc B580 12GB',
        content: [
          '<strong>Intel ArcのうちローカルLLM用に選ぶなら、当サイトはB580 12GBです。</strong><a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">OllamaのQwen 2.5一覧</a>ではQ4の14Bモデルが9.0GBです。12GBならコンテキストなどに約3GB残りますが、10GBのB570では約1GBです。どちらもベンチマークは実施していません。',
          'まずソフト対応を確認してください。<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">OllamaのGPUドキュメント</a>はWindowsとLinuxでのVulkanによる追加GPU対応を説明しており、バックエンドがインストールされていれば既定で有効です。LinuxではIntelのドライバー関連コンポーネントが必要です。Arcの型番は挙げられていません。<a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cppのSYCLドキュメント</a>はArc B580を対応GPUに挙げています。以前よく使われたIPEX-LLMは<a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">GitHubでアーカイブ済み</a>です。Intelは今後修正を提供せず、告知は既知のセキュリティ問題に触れています。',
          '<strong>向いている人：</strong>出品価格に納得でき、設定の確認をいとわない場合。<strong>向かない人：</strong>使うツールがCUDA前提の場合は、NVIDIAカードのほうが安全だと考えます。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'AmazonでIntel Arc B580の価格を確認',
          },
          {
            url: 'https://kakaku.com/pc/videocard/itemlist.aspx?pdf_Spec116=6',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: '価格.comでIntel Arc B580の価格を比較',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 vs NVIDIA RTX 3060 12GB',
        content: [
          '<strong>どちらも12GBで扱えるモデル規模は近いものの、以下の価格は基準が異なります。</strong>中古RTX 3060 12GBは2026年11月17〜26日のeBay米国の成約209件で310〜350ドル（中央値330ドル、送料別、<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>）。B580は、<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>の米国最安値が729ドル（11月27日）、<a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a>では米Amazon新品851.16ドル・eBay中古499ドル（11月27日）、<a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a>のeBay出品に基づく11月の最安平均が399ドル（現在431ドル）、<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>の転売業者の出品が851〜1,263ドル（11月7日）でした。<a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a>は11月28日、信頼できる販売店では入手できないとしています。発売価格249ドルは現在の価格ではありません。いずれも米国価格で、日本の価格は別途確認してください。',
          '見つけたB580のほうが高く、CUDAを使いたいなら中古RTX 3060 12GBがよいと考えます。<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">OllamaのGPUドキュメント</a>はこのカードのCUDA対応を示しています。新品が欲しく、販売店の保証条件に納得でき、使うツールがVulkanかSYCLに対応するならB580を選んでください。',
        ],
        columns: ['カード', 'VRAM', '米国価格と基準', 'ソフト'],
        rows: [
          { カード: 'Arc B580', VRAM: '12GB', 米国価格と基準: '399〜851ドル 情報が不一致', ソフト: 'Vulkan / SYCL' },
          { カード: 'RTX 3060（中古）', VRAM: '12GB', 米国価格と基準: '310〜350ドル 成約 11/17〜26', ソフト: 'CUDA' },
          { カード: 'Arc B570（新品）', VRAM: '10GB', 米国価格と基準: '279.99〜289.99ドル 販売店 11/27〜28', ソフト: 'Vulkan / SYCL' },
          { カード: 'Arc A770 16GB', VRAM: '16GB', 米国価格と基準: '846ドルから 11/27', ソフト: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'RTX 3060 12GBの価格を確認',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '代替候補',
        content: [
          '<strong>Intel Arc B570 10GB</strong>：10GB以上のArcで、300ドル以下を日付付きで確認できたカードです。<a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamerの11月28日の一覧</a>ではNeweggが279.99ドル（ログインで追加割引）、Walmartが289.99ドル、<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>は11月27日に289ドルでした（いずれもブラックフライデー週）。<a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>が追跡するAmazon出品の429.97ドルのように、より高い出品もあります。10GBでは7B〜8Bモデルが目安で、Q4の14Bはかなり窮屈です。',
          '<strong>Intel Arc A770 16GB</strong>：B580より4GB多い、前世代のAlchemistです。<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>の11月27日の米国最安値は846ドルで、発売価格は349ドルでした。大幅に安い場合のみ検討します。llama.cppのSYCLドキュメントでは対応GPUです。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'Intel Arc B570の価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'Intel Arc A770の価格を確認',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'OllamaはIntel Arc GPUに対応していますか？', a: 'OllamaはWindowsとLinuxでのVulkanによる追加GPU対応を説明しており、バックエンドがあれば既定で有効です。LinuxではIntelのドライバー関連コンポーネントが必要です。GPUドキュメントにArcの型番はないため、設定後にモデルがGPUで動くか確認してください。' },
          { q: 'IPEX-LLMは今も保守されていますか？', a: 'いいえ。IntelはGitHubのIPEX-LLMリポジトリをアーカイブしました。告知では修正や新版は提供されず、既知のセキュリティ問題があるとしています。新規構築では、Vulkan対応のOllamaや、VulkanまたはSYCL対応のllama.cppなど保守されている方法を使ってください。' },
          { q: 'Intel ArcはCUDAに対応していますか？', a: 'いいえ。CUDAはNVIDIAのプラットフォームです。Arcでは、ローカルLLMツールはVulkanやSYCLなど別のバックエンドを使います。必要なツールがいずれかに対応するか確認してください。' },
          { q: 'Arc A770 16GBはB580 12GBよりお得ですか？', a: '確認した価格では違います。A770は4GB多いものの、2026年11月27日の米国のTom’s Hardwareでは846ドルからでした。16GBが必要で大幅に安ければ選ぶ意味があります。どちらもベンチマークは実施していません。' },
          { q: 'Intel ArcとNVIDIA GPUを1台のPCで併用できますか？', a: 'マザーボード、スペース、電源が足りれば同じPCに搭載できますが、LLMツールがメモリを合算できるとは限りません。使うツールのマルチGPUの説明を確認してください。混在構成は当サイトでは未検証です。' },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[300ドル以下のローカルLLM向けGPU](/ja/prompt-bites/best-gpu-under-300-local-llm)：300ドル以下のArc B570と、少し超える中古RTX 3060 12GB',
          '[MLX・Ollama・llama.cppの比較](/ja/prompt-bites/mlx-vs-ollama-vs-llamacpp)：推論エンジンの違い',
          '[ローカルLLM向けGPU購入ガイド](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026)：ほかの予算の選択肢',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-ko.webp',
    title: '로컬 LLM에 최적의 Intel Arc GPU는?',
    seoTitle: '2026년 로컬 LLM 최적의 Intel Arc GPU | Prompt Bites',
    metaDescription: '로컬 LLM용 Intel Arc는 B580 12GB를 고르지만, 현재 300달러 미만 가격은 확인하지 못했습니다. Arc B570·A770 가격과 소프트웨어 설정을 정리합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'NVIDIA의 더 저렴한 대안으로 Intel Arc를 고려하는 로컬 LLM 구매자',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**로컬 LLM용 Intel Arc로 편집부가 고르는 제품은 B580 12GB입니다. 가격이 아니라 메모리 용량과 문서화된 지원 때문입니다.** 벤치마크 결과가 아닌 편집부의 판단입니다. 현재 미국 수치 중 300달러 미만은 없었습니다. 2026년 11월 27일 [Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking)의 최저가는 729달러였고, [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)의 eBay 상품 기준 11월 최저 평균은 399달러였습니다. 300달러가 확실한 상한이라면 Arc B570 10GB를 살펴보십시오. Arc는 CUDA를 지원하지 않으므로 문서가 있는 Vulkan이나 SYCL 방식을 쓰고, 새 환경은 Intel이 보관 처리한 IPEX-LLM으로 시작하지 마십시오.',
    toc: [
      { label: '최적의 선택: Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 대 NVIDIA RTX 3060 12GB', anchor: '#comparison' },
      { label: '최고의 대안', anchor: '#alternatives' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM에 최적의 Intel Arc GPU는 무엇입니까?',
        answer: '편집부의 선택은 Intel Arc B580 12GB입니다. B570보다 2GB 많고 llama.cpp의 SYCL 지원 표에 있습니다. 현재 미국 가격 중 300달러 미만은 찾지 못했으며 11월 수치는 크게 엇갈립니다. 상한이 300달러라면 Arc B570 10GB가 블랙프라이데이 주간 미국 판매점에서 279.99~289.99달러였습니다.',
        bullets: [
          'Arc B580 12GB: 10GB 카드보다 여유가 있습니다. 자료가 엇갈리므로 실시간 가격을 확인하십시오.',
          'CUDA 미지원: Ollama는 추가 GPU 지원용 Vulkan을, llama.cpp는 Intel GPU용 SYCL 백엔드를 문서화합니다.',
          'IPEX-LLM은 Intel이 보관 처리했고 안내문에서 알려진 보안 문제를 언급합니다. 새 환경에는 쓰지 마십시오.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Arc 편집부 선택은 B580 12GB이며, 12GB 용량과 llama.cpp의 지원 문서가 이유입니다',
          'B580의 현재 미국 가격 중 300달러 미만은 확인하지 못했고 11월 자료는 크게 엇갈립니다',
          '상한 300달러: Arc B570 10GB(2026년 11월 27~28일 279.99~289.99달러)',
          '소프트웨어는 Vulkan이나 SYCL을 사용하십시오. IPEX-LLM은 Intel이 보관 처리했습니다',
          'A770 16GB는 용량이 크지만 11월 27일 Tom’s Hardware 기준 846달러부터였습니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Intel Arc B580 12GB는 로컬 LLM용 Arc 가운데 편집부의 선택이지만, 현재 300달러 미만의 미국 가격은 찾지 못했습니다.' },
          { type: 'plain-terms', text: '가격이 괜찮다면 여유 메모리를 위해 B580을 고르고, 미국에서 310~350달러에 거래된 중고 RTX 3060 12GB와도 비교하십시오.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Intel Arc B580 12GB',
        content: [
          '<strong>Intel Arc 가운데 로컬 LLM용으로는 B580 12GB를 고르겠습니다.</strong> <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama의 Qwen 2.5 목록</a>에서 Q4 14B 모델은 9.0GB입니다. 12GB 카드는 컨텍스트와 부가 용도로 약 3GB가 남지만 10GB B570은 약 1GB만 남습니다. 두 카드 모두 벤치마크는 하지 않았습니다.',
          '먼저 소프트웨어를 확인하십시오. <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU 문서</a>는 Windows와 Linux에서 Vulkan을 통한 추가 GPU 지원을 설명하며, 백엔드가 설치되어 있으면 기본으로 켜집니다. Linux에는 Intel 드라이버 구성 요소가 필요합니다. Arc 모델명은 나열하지 않습니다. <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cpp SYCL 문서</a>는 Arc B580을 지원 목록에 둡니다. 예전에 Arc에서 흔히 쓰던 IPEX-LLM은 <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">GitHub에서 보관 처리</a>되었습니다. Intel은 더 이상 수정을 제공하지 않으며 안내문은 알려진 보안 문제를 언급합니다.',
          '<strong>구매할 만한 경우:</strong> 상품 가격이 괜찮고 설정 확인을 감수할 수 있을 때입니다. <strong>피할 경우:</strong> 사용하는 도구가 CUDA를 전제로 한다면 NVIDIA 카드가 더 안전하다고 봅니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Amazon에서 Intel Arc B580 가격 확인하기',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=Intel%20Arc%20B580',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Newegg에서 Intel Arc B580 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 대 NVIDIA RTX 3060 12GB',
        content: [
          '<strong>두 카드 모두 12GB라 담을 수 있는 모델 크기는 비슷하지만, 아래 가격은 기준이 서로 다릅니다.</strong> 중고 RTX 3060 12GB는 2026년 11월 17~26일 eBay 미국 판매 완료 209건에서 310~350달러(중앙값 330달러, 배송비 제외, <a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>)였습니다. B580은 <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>의 미국 최저가가 729달러(11월 27일), <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a>의 미국 Amazon 신품이 851.16달러·eBay 중고가 499달러(11월 27일), <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a>의 eBay 상품 기준 11월 최저 평균이 399달러(현재 431달러), <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>가 확인한 리셀러 상품이 851~1,263달러(11월 7일)였습니다. <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a>는 11월 28일 믿을 만한 판매처에서는 구할 수 없다고 했습니다. 출시가 249달러는 현재 가격이 아닙니다. 모두 미국 가격이며 한국 시세는 따로 확인해야 합니다.',
          '찾은 B580이 더 비싸고 CUDA가 필요하다면 중고 RTX 3060 12GB가 낫다고 봅니다. <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU 문서</a>는 이 카드의 CUDA 지원을 명시합니다. 새 카드를 원하고 판매자의 보증 조건이 괜찮으며 도구가 Vulkan이나 SYCL을 지원하면 B580을 고르십시오.',
        ],
        columns: ['카드', 'VRAM', '미국 가격과 기준', '소프트웨어'],
        rows: [
          { 카드: 'Arc B580', VRAM: '12GB', '미국 가격과 기준': '399~851달러 자료 불일치', 소프트웨어: 'Vulkan / SYCL' },
          { 카드: 'RTX 3060(중고)', VRAM: '12GB', '미국 가격과 기준': '310~350달러 판매 완료 11/17~26', 소프트웨어: 'CUDA' },
          { 카드: 'Arc B570(신품)', VRAM: '10GB', '미국 가격과 기준': '279.99~289.99달러 판매점 11/27~28', 소프트웨어: 'Vulkan / SYCL' },
          { 카드: 'Arc A770 16GB', VRAM: '16GB', '미국 가격과 기준': '846달러부터 11/27', 소프트웨어: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'RTX 3060 12GB 가격 확인하기',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '최고의 대안',
        content: [
          '<strong>Intel Arc B570 10GB</strong>: 10GB 이상 Arc 중 300달러 이하를 날짜가 있는 자료로 확인한 카드입니다. <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer의 11월 28일 목록</a>에서 Newegg는 279.99달러(로그인 시 추가 할인), Walmart는 289.99달러였고 <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>는 11월 27일 289달러였으며 모두 블랙프라이데이 주간 가격입니다. <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>가 추적하는 429.97달러 Amazon 상품처럼 더 비싼 판매처도 있습니다. 10GB는 7B~8B 모델용으로 생각하십시오. Q4 14B는 매우 빠듯합니다.',
          '<strong>Intel Arc A770 16GB</strong>: B580보다 4GB 많지만 이전 세대인 Alchemist입니다. <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>의 11월 27일 미국 최저가는 846달러였고 출시가는 349달러였습니다. 훨씬 저렴할 때만 고려하겠습니다. llama.cpp SYCL 문서에는 지원 GPU로 나옵니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'Intel Arc B570 가격 확인하기',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'Intel Arc A770 가격 확인하기',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Ollama는 Intel Arc GPU를 지원합니까?',
            a: 'Ollama는 Windows와 Linux에서 Vulkan을 통한 추가 GPU 지원을 문서화하며, 백엔드가 설치되어 있으면 기본으로 켜집니다. Linux에는 Intel 드라이버 구성 요소가 필요합니다. GPU 문서에 Arc 모델명이 없으므로 설정 후 모델이 GPU에서 실행되는지 확인하십시오.',
          },
          {
            q: 'IPEX-LLM은 아직 유지 관리됩니까?',
            a: '아닙니다. Intel은 GitHub의 IPEX-LLM 저장소를 보관 처리했습니다. 안내문에 따르면 더 이상 수정이나 새 버전이 없고 알려진 보안 문제가 있습니다. 새 환경에는 Vulkan을 쓰는 Ollama나 Vulkan 또는 SYCL을 쓰는 llama.cpp처럼 유지 관리되는 방식을 사용하십시오.',
          },
          { q: 'Intel Arc는 CUDA를 지원합니까?', a: '아닙니다. CUDA는 NVIDIA의 플랫폼입니다. Arc에서 로컬 LLM 도구는 Vulkan이나 SYCL 같은 다른 백엔드를 씁니다. 필요한 도구가 이 중 하나를 지원하는지 확인하십시오.' },
          { q: 'Arc A770 16GB가 B580 12GB보다 나은 구매입니까?', a: '확인한 가격으로는 아닙니다. A770은 4GB 많지만 2026년 11월 27일 Tom’s Hardware에서 미국 가격이 846달러부터였습니다. 16GB가 필요하고 훨씬 저렴하다면 의미가 있습니다. 두 카드 모두 벤치마크는 하지 않았습니다.' },
          { q: 'Intel Arc와 NVIDIA GPU를 한 PC에서 함께 쓸 수 있습니까?', a: '메인보드, 공간, 전원 공급 장치가 허용하면 한 PC에 장착할 수 있지만, LLM 도구가 두 카드의 메모리를 합친다고 가정하지 마십시오. 사용하는 도구의 멀티 GPU 문서를 확인하십시오. 혼합 구성은 테스트하지 않았습니다.' },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[300달러 이하 로컬 LLM GPU](/ko/prompt-bites/best-gpu-under-300-local-llm): 기준선 아래의 Arc B570, 조금 위의 중고 RTX 3060 12GB',
          '[MLX, Ollama, llama.cpp 비교](/ko/prompt-bites/mlx-vs-ollama-vs-llamacpp): 추론 엔진의 차이',
          '[로컬 LLM GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026): 다른 예산의 선택지',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-pt.webp',
    title: 'Qual a Melhor GPU Intel Arc para LLMs Locais?',
    seoTitle: 'Melhor GPU Intel Arc para LLMs Locais 2026 | Prompt Bites',
    metaDescription: 'Nossa Intel Arc para LLMs locais é a B580 12GB, mas não achamos preço atual abaixo de US$ 300. Preços da Arc B570 e A770 e a configuração do software.',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores que consideram a Intel Arc como alternativa mais barata à NVIDIA para LLMs locais',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**Nossa escolha Intel Arc para LLMs locais é a B580 12GB, pela memória e pelo suporte documentado, não pelo preço.** É uma escolha editorial, não um resultado de benchmark. Não achamos valor atual nos EUA abaixo de US$ 300: em 27 de novembro de 2026, a [Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking) indicava US$ 729 como melhor preço, e a média mínima de novembro do [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) em anúncios do eBay era US$ 399. Com teto fixo de US$ 300, veja a Arc B570 10GB. As Arc não têm CUDA; siga um caminho documentado com Vulkan ou SYCL e não comece com o IPEX-LLM, arquivado pela Intel.',
    toc: [
      { label: 'Melhor Escolha: Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 vs NVIDIA RTX 3060 12GB', anchor: '#comparison' },
      { label: 'Melhores Alternativas', anchor: '#alternatives' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leituras Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor GPU Intel Arc para LLMs locais?',
        answer: 'Nossa escolha editorial é a Intel Arc B580 12GB: tem 2 GB a mais que a B570 e aparece na tabela de suporte SYCL do llama.cpp. Não encontramos preço atual nos EUA abaixo de US$ 300, e os valores de novembro divergem muito. Com teto de US$ 300, a Arc B570 10GB aparecia por US$ 279.99–289.99 em lojas dos EUA na semana da Black Friday.',
        bullets: [
          'Arc B580 12GB: mais espaço que uma placa de 10 GB; confira o preço atual, pois as fontes divergem.',
          'Sem CUDA: o Ollama documenta Vulkan para GPUs adicionais, e o llama.cpp um backend SYCL para GPUs Intel.',
          'A Intel arquivou o IPEX-LLM, e o aviso cita problemas de segurança conhecidos; não o use em instalação nova.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Escolha Arc editorial: B580 12GB, pelos 12 GB e pelo suporte documentado no llama.cpp',
          'Não achamos preço atual da B580 nos EUA abaixo de US$ 300; as fontes de novembro divergem muito',
          'Teto fixo de US$ 300: Arc B570 10GB, listada por US$ 279.99–289.99 em 27–28 de novembro de 2026',
          'Software: use Vulkan ou SYCL; a Intel arquivou o IPEX-LLM',
          'A770 16GB: mais memória, mas a Tom’s Hardware a listava a partir de US$ 846 em 27 de novembro',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A Intel Arc B580 12GB é nossa escolha editorial Arc para LLMs locais, mas não encontramos preço atual nos EUA abaixo de US$ 300.' },
          { type: 'plain-terms', text: 'Escolha a B580 pela memória extra se o preço servir para você, e compare com a RTX 3060 12GB usada, vendida por US$ 310–350 nos EUA.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Intel Arc B580 12GB',
        content: [
          '<strong>Entre as Intel Arc, escolheríamos a B580 12GB para um PC de LLM local.</strong> Um modelo 14B em Q4 ocupa 9.0 GB na <a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">lista Qwen 2.5 do Ollama</a>: em 12 GB sobram cerca de 3 GB para contexto e sobrecarga, contra cerca de 1 GB na B570 de 10 GB. Não fizemos benchmarks de nenhuma.',
          'Verifique primeiro o software. A <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentação de GPU do Ollama</a> descreve suporte adicional no Windows e no Linux via Vulkan, ativado por padrão quando o backend está instalado; no Linux são necessários os componentes de driver da Intel. Ela não cita modelos Arc pelo nome. A <a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">documentação SYCL do llama.cpp</a> lista a Arc B580 como compatível. O IPEX-LLM, antes um caminho comum no Arc, está <a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">arquivado no GitHub</a>: a Intel não fará mais correções, e o aviso cita problemas de segurança conhecidos.',
          '<strong>Compre se:</strong> o preço do anúncio servir e você aceitar conferir a configuração. <strong>Evite se:</strong> suas ferramentas pressupõem CUDA; nesse caso, na nossa visão, uma placa NVIDIA é a opção mais segura.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Ver preço da Intel Arc B580 na Amazon',
          },
          {
            url: 'https://www.kabum.com.br/busca/intel-arc-b580',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: 'Ver preço da Intel Arc B580 na Kabum',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 vs NVIDIA RTX 3060 12GB',
        content: [
          '<strong>As duas têm 12 GB e comportam modelos de tamanho parecido; os preços abaixo têm bases diferentes.</strong> A RTX 3060 12GB usada foi vendida por US$ 310–350 (mediana US$ 330) em 209 vendas concluídas no eBay dos EUA, de 17 a 26 de novembro de 2026, sem frete (<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>). Para a B580, a <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> mostrava US$ 729 como melhor preço nos EUA (27 de novembro), a <a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a> US$ 851.16 nova na Amazon dos EUA e US$ 499 usada no eBay (27 de novembro), o <a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a> média mínima de novembro de US$ 399 em anúncios do eBay (hoje US$ 431), e a <a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a> anúncios de revendedores por US$ 851–1.263 (7 de novembro). A <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a> a descrevia como indisponível em vendedores confiáveis (28 de novembro). O preço de lançamento de US$ 249 não é atual. São preços dos EUA; no Brasil, os impostos mudam bastante o valor.',
          'Na nossa visão, compre a RTX 3060 12GB usada se a B580 encontrada custar mais e você quiser CUDA, que a <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentação de GPU do Ollama</a> suporta nessa placa. Escolha a B580 se quiser uma placa nova, as condições de garantia do vendedor servirem e sua ferramenta suportar Vulkan ou SYCL.',
        ],
        columns: ['Placa', 'VRAM', 'Preço nos EUA e base', 'Software'],
        rows: [
          { Placa: 'Arc B580', VRAM: '12 GB', 'Preço nos EUA e base': 'US$ 399–851, fontes divergem', Software: 'Vulkan / SYCL' },
          { Placa: 'RTX 3060 (usada)', VRAM: '12 GB', 'Preço nos EUA e base': 'US$ 310–350 vendida, 17–26/11', Software: 'CUDA' },
          { Placa: 'Arc B570 (nova)', VRAM: '10 GB', 'Preço nos EUA e base': 'US$ 279.99–289.99 loja, 27–28/11', Software: 'Vulkan / SYCL' },
          { Placa: 'Arc A770 16GB', VRAM: '16 GB', 'Preço nos EUA e base': 'A partir de US$ 846, 27/11', Software: 'Vulkan / SYCL' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Ver preço da RTX 3060 12GB',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Melhores Alternativas',
        content: [
          '<strong>Intel Arc B570 10GB</strong>: a Arc com 10 GB ou mais que conseguimos datar abaixo de US$ 300. A <a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">lista da PC Gamer de 28 de novembro</a> mostrava US$ 279.99 na Newegg (com desconto extra após login) e US$ 289.99 no Walmart, e a <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> US$ 289 em 27 de novembro, na semana da Black Friday. Outras ofertas custam mais, como US$ 429.97 em um anúncio da Amazon acompanhado pela <a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>. Com 10 GB, conte com modelos 7B–8B; um 14B em Q4 fica muito apertado.',
          '<strong>Intel Arc A770 16GB</strong>: 4 GB a mais que a B580, na geração Alchemist anterior. A <a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a> indicava US$ 846 como melhor preço nos EUA em 27 de novembro, contra US$ 349 no lançamento. Só a consideraríamos por um preço bem menor; a documentação SYCL do llama.cpp a lista como compatível.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: 'Ver preço da Intel Arc B570',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: 'Ver preço da Intel Arc A770',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O Ollama suporta GPUs Intel Arc?',
            a: 'O Ollama documenta suporte adicional no Windows e no Linux via Vulkan, ativado por padrão quando o backend está instalado. No Linux, são necessários componentes de driver da Intel. A documentação não cita modelos Arc pelo nome; depois de instalar, confira se o modelo roda na GPU.',
          },
          {
            q: 'O IPEX-LLM ainda é mantido?',
            a: 'Não. A Intel arquivou o repositório IPEX-LLM no GitHub. O aviso diz que não haverá correções nem novas versões e que o projeto tem problemas de segurança conhecidos. Em uma instalação nova, use um caminho mantido, como o Ollama com Vulkan ou o llama.cpp com Vulkan ou SYCL.',
          },
          {
            q: 'A Intel Arc suporta CUDA?',
            a: 'Não. CUDA é a plataforma da NVIDIA. No Arc, as ferramentas de LLM local usam outros backends, como Vulkan ou SYCL. Confira se cada ferramenta de que você depende suporta um deles.',
          },
          {
            q: 'A Arc A770 16GB é uma compra melhor que a B580 12GB?',
            a: 'Não aos preços verificados. A A770 tem 4 GB a mais, mas a Tom’s Hardware a listava a partir de US$ 846 nos EUA em 27 de novembro de 2026. Por um preço muito menor, pode fazer sentido se você precisar de 16 GB. Não fizemos benchmarks de nenhuma.',
          },
          {
            q: 'Posso usar uma Intel Arc e uma GPU NVIDIA no mesmo PC?',
            a: 'As duas podem ficar no mesmo PC se a placa-mãe, o espaço e a fonte permitirem, mas não presuma que uma ferramenta de LLM vai somar a memória. Consulte a documentação multi-GPU dela. Não testamos uma configuração mista.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leituras Relacionadas',
        items: [
          '[Melhor GPU abaixo de US$ 300 para LLMs locais](/pt/prompt-bites/best-gpu-under-300-local-llm): a Arc B570 abaixo desse valor e a RTX 3060 12GB usada um pouco acima',
          '[MLX vs Ollama vs llama.cpp](/pt/prompt-bites/mlx-vs-ollama-vs-llamacpp): como os motores de inferência diferem',
          '[Guia de compra de GPU para LLMs locais](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026): opções para outros orçamentos',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-intel-arc-gpu-local-llm-overview-hero-zh.webp',
    title: '本地 LLM 的最佳 Intel Arc GPU 是什么？',
    seoTitle: '2026 年本地 LLM 最佳 Intel Arc GPU | Prompt Bites',
    metaDescription: '跑本地LLM的Intel Arc我们选B580 12GB，但当前没查到低于300美元的价格。附Arc B570、A770价格，以及Ollama和llama.cpp的软件配置要点。',
    publishDate: '2026-07-14',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-28',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Intel Arc B580', 'Intel Arc B570', 'Intel Arc A770'],
    educationalLevel: 'Intermediate',
    audience: '考虑将 Intel Arc 作为本地 LLM 更便宜的 NVIDIA 替代方案的买家',
    affiliateDisclosure: true,
    siblingBites: ['best-gpu-under-300-local-llm', 'mlx-vs-ollama-vs-llamacpp'],
    is_living_page: false,
    leadAnswerBlock: '**跑本地LLM的Intel Arc显卡，我们选B580 12GB，理由是显存和有文档记载的支持，而不是价格。** 这是编辑判断，并非测试结果。当前美国数据中没有低于300美元的：2026年11月27日[Tom\'s Hardware](https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking)列出的最低价为729美元，[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)基于eBay挂牌的11月最低均价为399美元。如果300美元是硬上限，可以看Arc B570 10GB。Arc没有CUDA；请使用有文档说明的Vulkan或SYCL路线，新环境不要从Intel已归档的IPEX-LLM开始。',
    toc: [
      { label: '最佳选择：Intel Arc B580 12GB', anchor: '#best-pick' },
      { label: 'Intel Arc B580 对比 NVIDIA RTX 3060 12GB', anchor: '#comparison' },
      { label: '最佳替代选择', anchor: '#alternatives' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '本地 LLM 的最佳 Intel Arc GPU 是什么？',
        answer: '我们的编辑推荐是Intel Arc B580 12GB：它比B570多2GB显存，并列在llama.cpp的SYCL支持表中。我们没查到当前低于300美元的美国价格，11月各来源数字差异很大。若硬上限为300美元，Arc B570 10GB在黑五周美国零售商报价279.99–289.99美元。',
        bullets: [
          'Arc B580 12GB：比10GB显卡空间更大；各来源数字不一，请核对实时价格。',
          '没有CUDA：Ollama文档说明可用Vulkan支持更多GPU，llama.cpp为Intel GPU提供SYCL后端。',
          'IPEX-LLM已被Intel归档，声明提到已知安全问题；新环境不要使用。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Arc编辑推荐：B580 12GB，因为12GB显存和llama.cpp的支持记录',
          '未查到B580当前低于300美元的美国价格；11月各来源差异很大',
          '硬上限300美元：Arc B570 10GB，2026年11月27–28日报价279.99–289.99美元',
          '软件：使用Vulkan或SYCL；Intel已归档IPEX-LLM',
          'A770 16GB：显存更大，但11月27日Tom’s Hardware起价846美元',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Intel Arc B580 12GB是我们为本地LLM选的Arc显卡（编辑观点），但没有查到它当前低于300美元的美国价格。' },
          { type: 'plain-terms', text: '如果价格可以接受，就为多出的显存选B580；同时对比一下在美国成交价310–350美元的二手RTX 3060 12GB。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Intel Arc B580 12GB',
        content: [
          '<strong>在Intel Arc显卡中，装本地LLM主机我们会选B580 12GB。</strong><a href="https://ollama.com/library/qwen2.5/tags" class="text-primary hover:underline">Ollama的Qwen 2.5列表</a>中，Q4的14B模型为9.0GB：12GB显卡还能留下约3GB给上下文和其他开销，10GB的B570只剩约1GB。两款我们都没有做性能测试。',
          '先确认软件支持。<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama的GPU文档</a>说明Windows和Linux可通过Vulkan获得额外的GPU支持，安装了该后端即默认启用；Linux需要Intel的驱动组件。文档没有逐一列出Arc型号。<a href="https://github.com/ggml-org/llama.cpp/blob/master/docs/backend/SYCL.md" class="text-primary hover:underline">llama.cpp的SYCL文档</a>将Arc B580列为支持。过去常用于Arc的IPEX-LLM已在<a href="https://github.com/intel/ipex-llm" class="text-primary hover:underline">GitHub上归档</a>：Intel不再提供修复，声明提到已知安全问题。',
          '<strong>适合购买：</strong>能接受商品价格，也愿意花时间核对配置。<strong>不建议购买：</strong>你的工具默认依赖CUDA；那样我们认为NVIDIA显卡更稳妥。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B580%2012GB',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: '在 Amazon 查看 Intel Arc B580 价格',
          },
          {
            url: 'https://search.jd.com/Search?keyword=Intel%20Arc%20B580',
            productName: 'Intel Arc B580 12GB',
            productCategory: 'gpu',
            label: '在京东查看 Intel Arc B580 价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Intel Arc B580 对比 NVIDIA RTX 3060 12GB',
        content: [
          '<strong>两款都是12GB，可运行的模型规模相近；下列价格口径不同。</strong>二手RTX 3060 12GB在2026年11月17–26日的209笔eBay美国成交中为310–350美元（中位数330美元，不含运费，<a href="https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/" class="text-primary hover:underline">InsiderLLM</a>）。B580方面：<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>的美国最低价为729美元（11月27日）；<a href="https://videocardprices.com/card/intel-arc-b580/" class="text-primary hover:underline">VideoCardPrices</a>显示美国Amazon全新851.16美元、eBay二手499美元（11月27日）；<a href="https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580" class="text-primary hover:underline">GPU Poet</a>基于eBay挂牌的11月最低均价399美元（当前431美元）；<a href="https://www.geekyinc.com/best-graphics-cards-2026/" class="text-primary hover:underline">GeekyInc</a>看到转售商挂牌851–1,263美元（11月7日）。<a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer</a>在11月28日称正规卖家无货。249美元发售价并非当前价格。以上均为美国价格，不代表中国市场价。',
          '我们认为：如果找到的B580更贵，而且你需要CUDA，就买二手RTX 3060 12GB，<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama的GPU文档</a>列明支持这款卡。如果想要新卡、能接受卖家的保修条款，且所用工具支持Vulkan或SYCL，就选B580。',
        ],
        columns: ['显卡', '显存', '美国价格与口径', '软件'],
        rows: [
          {
            显卡: 'Arc B580',
            显存: '12GB',
            美国价格与口径: '399–851美元 来源不一',
            软件: 'Vulkan / SYCL',
          },
          {
            显卡: 'RTX 3060（二手）',
            显存: '12GB',
            美国价格与口径: '310–350美元 成交 11/17–26',
            软件: 'CUDA',
          },
          {
            显卡: 'Arc B570（全新）',
            显存: '10GB',
            美国价格与口径: '279.99–289.99美元 零售 11/27–28',
            软件: 'Vulkan / SYCL',
          },
          {
            显卡: 'Arc A770 16GB',
            显存: '16GB',
            美国价格与口径: '846美元起 11/27',
            软件: 'Vulkan / SYCL',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX%203060%2012GB',
            productName: 'RTX 3060 12GB',
            productCategory: 'gpu',
            label: '查看 RTX 3060 12GB 价格',
          },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '最佳替代选择',
        content: [
          '<strong>Intel Arc B570 10GB</strong>：在10GB及以上的Arc中，我们能用带日期资料证明低于300美元的显卡。<a href="https://www.pcgamer.com/black-friday-graphics-card-deals/" class="text-primary hover:underline">PC Gamer 11月28日清单</a>显示Newegg为279.99美元（登录后另有折扣）、Walmart为289.99美元；<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>在11月27日列出289美元，均为黑五周价格。也有更贵的商品，例如<a href="https://videocardprices.com/card/intel-arc-b570/" class="text-primary hover:underline">VideoCardPrices</a>跟踪的一条Amazon商品为429.97美元。10GB请按7B–8B模型规划；Q4的14B模型非常吃紧。',
          '<strong>Intel Arc A770 16GB</strong>：比B580多4GB，属于较早的Alchemist一代。<a href="https://www.tomshardware.com/pc-components/gpus/lowest-gpu-prices-tracking" class="text-primary hover:underline">Tom\'s Hardware</a>在11月27日列出的美国最低价为846美元，而发售价为349美元。只有价格低得多时我们才会考虑；llama.cpp的SYCL文档将其列为支持。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20B570',
            productName: 'Intel Arc B570 10GB',
            productCategory: 'gpu',
            label: '查看 Intel Arc B570 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=Intel%20Arc%20A770%2016GB',
            productName: 'Intel Arc A770 16GB',
            productCategory: 'gpu',
            label: '查看 Intel Arc A770 价格',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Ollama支持Intel Arc显卡吗？', a: 'Ollama文档说明Windows和Linux可通过Vulkan获得额外的GPU支持，安装该后端后默认启用。Linux需要Intel驱动组件。GPU文档没有逐一列出Arc型号，因此配置后请确认模型确实在GPU上运行。' },
          { q: 'IPEX-LLM还在维护吗？', a: '没有。Intel已将GitHub上的IPEX-LLM仓库归档。声明称不再提供修复或新版本，且项目存在已知安全问题。新环境请使用仍在维护的路线，例如带Vulkan的Ollama，或使用Vulkan、SYCL的llama.cpp。' },
          { q: 'Intel Arc支持CUDA吗？', a: '不支持。CUDA是NVIDIA的平台。在Arc上，本地LLM工具使用Vulkan或SYCL等其他后端。请确认你依赖的每个工具支持其中之一。' },
          { q: 'Arc A770 16GB比B580 12GB更值得买吗？', a: '按我们核查的价格，并不值得。A770多4GB，但2026年11月27日Tom’s Hardware上美国价格从846美元起。如果需要16GB且价格低很多，才值得考虑。两款我们都没有做性能测试。' },
          { q: '能在一台电脑里同时用Intel Arc和NVIDIA显卡吗？', a: '只要主板、空间和电源允许，两张卡可以装在一台电脑里，但不要默认LLM工具能合并它们的显存。请查阅所用工具的多GPU文档。我们没有测试过混合配置。' },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[300美元以内本地LLM显卡](/zh/prompt-bites/best-gpu-under-300-local-llm)：300美元以内的Arc B570，以及略超预算的二手RTX 3060 12GB',
          '[MLX、Ollama与llama.cpp对比](/zh/prompt-bites/mlx-vs-ollama-vs-llamacpp)：推理引擎有何不同',
          '[本地LLM显卡购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026)：其他预算的选择',
        ],
      },
    },
  },
}
