import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-en.webp',
    title: 'Best Korean LLMs to Run Locally',
    seoTitle: 'Best Korean LLMs to Run Locally 2026 | Prompt Bites',
    metaDescription: 'Best Korean LLM models to run locally: EXAONE 4.5, Qwen3.8, HyperCLOVA X SEED and Solar Open compared on license, size and Korean fit.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: 'Developers building Korean-language applications on local, self-hosted models',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 4.5 33B from LG AI Research is the Korean-first model to start with for research and personal use, but its license is non-commercial.</strong> For a commercial Korean product, Qwen3.8-27B (Apache 2.0) is the permissive option, and HyperCLOVA X SEED Think 14B from Naver fits mid-range hardware.',
    toc: [
      { label: 'Which Korean LLM to pick', anchor: '#best-pick' },
      { label: 'Korean LLM models compared', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Which Korean LLM models can I run locally?',
        answer: 'EXAONE 4.5 33B (LG AI Research) is the Korean-first starting point but is non-commercial. Qwen3.8-27B (Apache 2.0) is the permissive multilingual option, and HyperCLOVA X SEED Think 14B (Naver) suits mid-range hardware.',
        bullets: [
          'EXAONE 4.5 33B: Korean-built, 262,144-token context, license "EXAONE AI Model License Agreement 1.2 - NC" (non-commercial).',
          'Qwen3.8-27B: Apache 2.0, broad multilingual model; its model card publishes no Korean-specific scores, so test it on your own Korean prompts.',
          'HyperCLOVA X SEED Think 14B: about 14.7B parameters, Korean benchmark scores published by Naver; read its own license text before commercial use.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Korean-first pick: EXAONE 4.5 33B (LG AI Research) — but its license is non-commercial',
          'Commercial pick: Qwen3.8-27B (Apache 2.0) — test Korean quality on your own prompts, since its model card lists no Korean scores',
          'Mid-range hardware: HyperCLOVA X SEED Think 14B (Naver) — Korean-tuned, own license, check terms',
          'Large workstations only: Solar Open 100B (Upstage, 12B active) and K-EXAONE 2.0 (750B, Apache 2.0, 16 H200 GPUs in the serving example)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Which Korean LLM to Pick',
        content: [
          '<strong>Pick by license first, then by hardware: the best-scoring Korean model is not usable in a commercial product if its license forbids it.</strong> EXAONE 4.5 33B from LG AI Research is built around Korean, supports a 262,144-token context and publishes Korean benchmark results such as KMMLU-Pro 67.6 on its [model card](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B). Its license is "EXAONE AI Model License Agreement 1.2 - NC", so it fits research, study and personal projects, not a commercial product.',
          'For a commercial Korean product, [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) is licensed Apache 2.0 and runs with llama.cpp, Ollama and LM Studio through community quantizations. Its model card lists no Korean-specific benchmarks, so evaluate it on your own Korean prompts before committing. Naver\'s [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) is the smaller option: about 14.7B parameters, with Korean scores published on its card. It uses its own license, so read the license file before commercial use.',
          'The 33B and 27B models need roughly 20 GB of memory at 4-bit quantization (an estimate; actual use depends on context length). Larger Korean-built models, such as K-EXAONE 2.0 with 750B parameters, are not realistic for a single machine: its [model card](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) shows a serving example on 16 NVIDIA H200 GPUs.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Korean LLM Models Compared',
        content: [
          'The table lists the open-weight models most relevant for running Korean locally. Benchmark scores on each card are reported by the model\'s own vendor and are not directly comparable across cards.',
        ],
        columns: ['Model', 'Size', 'License', 'Best fit'],
        rows: [
            { 'Model': 'EXAONE 4.5 33B', 'Size': '33B dense, vision', 'License': 'EXAONE NC 1.2', 'Best fit': 'Korean-first, non-commercial' },
            { 'Model': 'Qwen3.8-27B', 'Size': '27B', 'License': 'Apache 2.0', 'Best fit': 'Commercial, multilingual' },
            { 'Model': 'HyperCLOVA X SEED Think 14B', 'Size': '14.7B', 'License': 'HyperCLOVA X SEED', 'Best fit': 'Mid-range hardware' },
            { 'Model': 'Solar Open 100B', 'Size': '102.6B, 12B active', 'License': 'Upstage Solar', 'Best fit': 'Large-memory workstations' },
        ],
        note: 'Korean-first models are trained with substantial Korean data and tend to handle Korean idioms and formality better. Qwen3.8 is the better choice when one model must serve many languages, because it avoids running a separate model per language.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Which Korean LLM models can I run locally?',
            a: 'The main open-weight options are EXAONE 4.5 33B (LG AI Research), Qwen3.8-27B (Alibaba Qwen), HyperCLOVA X SEED Think 14B (Naver) and Solar Open 100B (Upstage). K-EXAONE 2.0 is open as well but needs a multi-GPU server.',
          },
          {
            q: 'Is EXAONE 4.5 free for commercial use?',
            a: 'No. Its model card lists "EXAONE AI Model License Agreement 1.2 - NC", where NC means non-commercial. For commercial use, choose a permissively licensed model such as Qwen3.8-27B (Apache 2.0) or contact LG AI Research about commercial terms.',
          },
          {
            q: 'Can I run EXAONE through Ollama?',
            a: 'The official Ollama library lists exaone3.5 and exaone-deep (2.4B, 7.8B and 32B). EXAONE 4.x appears there only as community uploads. The EXAONE 4.5 model card links quantized builds for llama.cpp, Ollama and LM Studio.',
          },
          {
            q: 'How good is Qwen at Korean compared with Korean-built models?',
            a: 'Qwen3.8-27B\'s model card publishes no Korean-specific scores, so test it on your own prompts. Naver reports that its HyperCLOVA X SEED Think 14B backbone scores 0.7269 against 0.7079 for Qwen3-14B on its Korean average, a vendor-reported result on an older Qwen generation.',
          },
          {
            q: 'Is K-EXAONE 2.0 practical for local use?',
            a: 'Usually not. It has 750B total and 37B active parameters under Apache 2.0, and its model card demonstrates serving on two nodes with 8 H200 GPUs each. It is aimed at servers, not workstations.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[EXAONE 4.5 33B model card](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — license, context length, Korean benchmarks',
          '[K-EXAONE 2.0 750B model card](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0, serving hardware',
          '[HyperCLOVA X SEED Think 14B model card](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — license, Korean benchmarks',
          '[Solar Open 100B model card](https://huggingface.co/upstage/Solar-Open-100B) — parameters, license',
          '[Qwen3.8-27B model card](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0, quantizations',
          '[Ollama library: EXAONE](https://ollama.com/search?q=exaone) — available EXAONE builds',
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Which Local LLM Models Support Japanese Best?](/prompt-bites/best-japanese-language-models-local) — the equivalent guide for Japanese',
          '[Best 14B Model for Coding?](/prompt-bites/best-14b-models-coding) — a general-purpose model tier comparison',
          '[Chinese vs English Prompting: Which Is Better?](/prompt-bites/chinese-prompting-vs-english-prompting) — multilingual prompting considerations',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-ar.webp',
    title: 'أفضل نماذج LLM الكورية للتشغيل محليًا',
    seoTitle: 'أفضل نماذج LLM كورية محلية 2026 | Prompt Bites',
    metaDescription: 'أفضل نماذج LLM الكورية للتشغيل محليًا: مقارنة EXAONE 4.5 وQwen3.8 وHyperCLOVA X SEED وSolar Open حسب الترخيص والحجم وملاءمة الكورية.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يبنون تطبيقات باللغة الكورية على نماذج محلية مستضافة ذاتيًا',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذج EXAONE 4.5 33B من LG AI Research هو النموذج المتمحور حول الكورية الذي يُبدأ به للبحث والاستخدام الشخصي، لكن ترخيصه غير تجاري.</strong> أما لمنتج كوري تجاري فنموذج Qwen3.8-27B (Apache 2.0) هو الخيار المتساهل، ونموذج HyperCLOVA X SEED Think 14B من Naver يناسب العتاد المتوسط.',
    toc: [
      { label: 'أي LLM كوري تختار', anchor: '#best-pick' },
      { label: 'مقارنة نماذج LLM الكورية', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما نماذج LLM الكورية التي يمكنني تشغيلها محليًا؟',
        answer: 'نموذج EXAONE 4.5 33B (LG AI Research) هو نقطة البداية المتمحورة حول الكورية لكنه غير تجاري. نموذج Qwen3.8-27B (Apache 2.0) هو الخيار المتساهل متعدد اللغات، ونموذج HyperCLOVA X SEED Think 14B (Naver) يناسب العتاد المتوسط.',
        bullets: [
          'EXAONE 4.5 33B: مطوَّر في كوريا، سياق 262,144 رمزًا، ترخيصه «EXAONE AI Model License Agreement 1.2 - NC» (غير تجاري).',
          'Qwen3.8-27B: ترخيص Apache 2.0، نموذج واسع متعدد اللغات؛ لا تنشر بطاقته درجات خاصة بالكورية، فاختبره بمطالباتك الكورية.',
          'HyperCLOVA X SEED Think 14B: نحو 14.7 مليار معامل، درجات الكورية منشورة من Naver؛ اقرأ نص ترخيصه قبل الاستخدام التجاري.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الاختيار المتمحور حول الكورية: EXAONE 4.5 33B (LG AI Research) — لكن ترخيصه غير تجاري',
          'الاختيار التجاري: Qwen3.8-27B (Apache 2.0) — اختبر جودة الكورية بمطالباتك لأن بطاقته لا تذكر درجات كورية',
          'العتاد المتوسط: HyperCLOVA X SEED Think 14B (Naver) — مضبوط للكورية، بترخيص خاص، تحقق من الشروط',
          'محطات العمل الكبيرة فقط: Solar Open 100B (Upstage، 12B نشط) وK-EXAONE 2.0 (750B، Apache 2.0، مثال التشغيل يستخدم 16 وحدة H200)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أي LLM كوري تختار',
        content: [
          '<strong>اختر بحسب الترخيص أولًا ثم العتاد: أعلى نموذج كوري درجةً لا يصلح لمنتج تجاري إن كان ترخيصه يمنع ذلك.</strong> نموذج EXAONE 4.5 33B من LG AI Research مبني حول الكورية، ويدعم سياقًا من 262,144 رمزًا، وينشر على [بطاقة النموذج](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) نتائج معيارية بالكورية مثل KMMLU-Pro 67.6. ترخيصه «EXAONE AI Model License Agreement 1.2 - NC» يناسب البحث والدراسة والمشاريع الشخصية، لا المنتج التجاري.',
          'لمنتج كوري تجاري، نموذج [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) بترخيص Apache 2.0 ويعمل مع llama.cpp وOllama وLM Studio عبر تكميمات المجتمع. لا تسرد بطاقته معايير بالكورية، لذا قيّمه بمطالباتك الكورية قبل الالتزام. أما [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) من Naver فهو الخيار الأصغر: نحو 14.7 مليار معامل، ودرجات الكورية منشورة على بطاقته. يستخدم ترخيصًا خاصًا، فاقرأ ملف الترخيص قبل الاستخدام التجاري.',
          'يحتاج نموذجا 33B و27B إلى نحو 20 غيغابايت من الذاكرة بتكميم 4 بت (تقدير؛ يعتمد الاستخدام الفعلي على طول السياق). النماذج الكورية الأكبر مثل K-EXAONE 2.0 بـ750B معامل غير واقعية لجهاز واحد: تُظهر [بطاقته](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) مثال تشغيل على 16 وحدة NVIDIA H200.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'مقارنة نماذج LLM الكورية',
        content: [
          'يسرد الجدول النماذج مفتوحة الأوزان الأكثر صلة بتشغيل الكورية محليًا. درجات المعايير على كل بطاقة ينشرها مطوّر النموذج نفسه، ولا يمكن مقارنتها مباشرة بين البطاقات.',
        ],
        columns: ['النموذج', 'الحجم', 'الترخيص', 'الأنسب لـ'],
        rows: [
            { 'النموذج': 'EXAONE 4.5 33B', 'الحجم': '33B كثيف، رؤية', 'الترخيص': 'EXAONE NC 1.2', 'الأنسب لـ': 'كوري، غير تجاري' },
            { 'النموذج': 'Qwen3.8-27B', 'الحجم': '27B', 'الترخيص': 'Apache 2.0', 'الأنسب لـ': 'تجاري، متعدد اللغات' },
            { 'النموذج': 'HyperCLOVA X SEED Think 14B', 'الحجم': '14.7B', 'الترخيص': 'HyperCLOVA X SEED', 'الأنسب لـ': 'عتاد متوسط' },
            { 'النموذج': 'Solar Open 100B', 'الحجم': '102.6B، 12B نشط', 'الترخيص': 'Upstage Solar', 'الأنسب لـ': 'محطات بذاكرة كبيرة' },
        ],
        note: 'تُدرَّب النماذج المتمحورة حول الكورية على بيانات كورية كثيفة وتتعامل غالبًا بشكل أفضل مع التعابير الاصطلاحية ومستويات الرسمية. يكون Qwen3.8 أفضل عندما يجب أن يخدم نموذج واحد لغات كثيرة، لأنه يغني عن تشغيل نموذج منفصل لكل لغة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما نماذج LLM الكورية التي يمكنني تشغيلها محليًا؟',
            a: 'الخيارات الرئيسية مفتوحة الأوزان هي EXAONE 4.5 33B (LG AI Research) وQwen3.8-27B (Alibaba Qwen) وHyperCLOVA X SEED Think 14B (Naver) وSolar Open 100B (Upstage). نموذج K-EXAONE 2.0 مفتوح أيضًا لكنه يحتاج خادمًا متعدد وحدات GPU.',
          },
          {
            q: 'هل EXAONE 4.5 مجاني للاستخدام التجاري؟',
            a: 'لا. تذكر بطاقته «EXAONE AI Model License Agreement 1.2 - NC» حيث تعني NC غير تجاري. للاستخدام التجاري اختر نموذجًا بترخيص متساهل مثل Qwen3.8-27B (Apache 2.0) أو استفسر من LG AI Research عن الشروط التجارية.',
          },
          {
            q: 'هل يمكنني تشغيل EXAONE عبر Ollama؟',
            a: 'تضم مكتبة Ollama الرسمية exaone3.5 وexaone-deep (2.4B و7.8B و32B). أما EXAONE 4.x فيظهر فيها كرفع من المجتمع فقط. تربط بطاقة EXAONE 4.5 بنسخ مكمّمة لـllama.cpp وOllama وLM Studio.',
          },
          {
            q: 'كيف أداء Qwen بالكورية مقارنة بالنماذج الكورية؟',
            a: 'لا تنشر بطاقة Qwen3.8-27B درجات خاصة بالكورية؛ اختبره بمطالباتك. تذكر Naver أن النموذج الأساسي لـHyperCLOVA X SEED Think 14B يحقق 0.7269 مقابل 0.7079 لـQwen3-14B في متوسطها الكوري، وهي نتيجة من المطوّر ومقابل جيل أقدم من Qwen.',
          },
          {
            q: 'هل K-EXAONE 2.0 عملي للاستخدام المحلي؟',
            a: 'عادةً لا. يضم 750B معامل إجمالًا و37B نشطًا بترخيص Apache 2.0، وتعرض بطاقته تشغيلًا على عقدتين بـ8 وحدات H200 لكل منهما. إنه موجّه للخوادم لا لمحطات العمل.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[بطاقة نموذج EXAONE 4.5 33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — الترخيص وطول السياق ومعايير الكورية',
          '[بطاقة نموذج K-EXAONE 2.0 750B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0 وعتاد التشغيل',
          '[بطاقة نموذج HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — الترخيص ومعايير الكورية',
          '[بطاقة نموذج Solar Open 100B](https://huggingface.co/upstage/Solar-Open-100B) — المعاملات والترخيص',
          '[بطاقة نموذج Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0 والتكميمات',
          '[مكتبة Ollama: EXAONE](https://ollama.com/search?q=exaone) — نسخ EXAONE المتاحة',
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أي نماذج LLM محلية تدعم اليابانية بشكل أفضل؟](/prompt-bites/best-japanese-language-models-local) — الدليل المكافئ لليابانية',
          '[أفضل نموذج 14B للأكواد؟](/prompt-bites/best-14b-models-coding) — مقارنة فئة نماذج عامة',
          '[التلقين بالصينية مقابل الإنجليزية: أيهما أفضل؟](/prompt-bites/chinese-prompting-vs-english-prompting) — اعتبارات التلقين متعدد اللغات',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-de.webp',
    title: 'Die besten koreanischen LLMs für den lokalen Betrieb',
    seoTitle: 'Beste koreanische LLMs lokal betreiben 2026 | Prompt Bites',
    metaDescription: 'Beste koreanische LLM-Modelle für den lokalen Betrieb: EXAONE 4.5, Qwen3.8, HyperCLOVA X SEED und Solar Open im Vergleich nach Lizenz und Größe.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die koreanischsprachige Anwendungen auf lokalen, selbst gehosteten Modellen bauen',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 4.5 33B von LG AI Research ist das koreanisch-zentrierte Modell für den Einstieg bei Forschung und privater Nutzung, steht aber unter einer nichtkommerziellen Lizenz.</strong> Für ein kommerzielles koreanisches Produkt ist Qwen3.8-27B (Apache 2.0) die freizügige Option, und HyperCLOVA X SEED Think 14B von Naver passt auf Mittelklasse-Hardware.',
    toc: [
      { label: 'Welches koreanische LLM wählen', anchor: '#best-pick' },
      { label: 'Koreanische LLM-Modelle im Vergleich', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Welche koreanischen LLM-Modelle kann ich lokal betreiben?',
        answer: 'EXAONE 4.5 33B (LG AI Research) ist der koreanisch-zentrierte Einstieg, aber nichtkommerziell. Qwen3.8-27B (Apache 2.0) ist die freizügige mehrsprachige Option, HyperCLOVA X SEED Think 14B (Naver) passt auf Mittelklasse-Hardware.',
        bullets: [
          'EXAONE 4.5 33B: in Korea entwickelt, 262.144 Token Kontext, Lizenz „EXAONE AI Model License Agreement 1.2 - NC“ (nichtkommerziell).',
          'Qwen3.8-27B: Apache 2.0, breit mehrsprachig; die Modellkarte nennt keine koreanischen Einzelwerte — testen Sie es mit eigenen koreanischen Prompts.',
          'HyperCLOVA X SEED Think 14B: rund 14,7 Mrd. Parameter, koreanische Benchmark-Werte von Naver veröffentlicht; lesen Sie vor kommerzieller Nutzung den Lizenztext.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Koreanisch-zentrierte Wahl: EXAONE 4.5 33B (LG AI Research) — aber nichtkommerzielle Lizenz',
          'Kommerzielle Wahl: Qwen3.8-27B (Apache 2.0) — Koreanisch-Qualität mit eigenen Prompts testen, da die Modellkarte keine koreanischen Werte nennt',
          'Mittelklasse-Hardware: HyperCLOVA X SEED Think 14B (Naver) — auf Koreanisch abgestimmt, eigene Lizenz, Bedingungen prüfen',
          'Nur große Workstations: Solar Open 100B (Upstage, 12 Mrd. aktiv) und K-EXAONE 2.0 (750B, Apache 2.0, im Serving-Beispiel 16 H200-GPUs)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Welches koreanische LLM wählen',
        content: [
          '<strong>Wählen Sie zuerst nach Lizenz, dann nach Hardware: Das beste koreanische Modell nützt in einem kommerziellen Produkt nichts, wenn die Lizenz es verbietet.</strong> EXAONE 4.5 33B von LG AI Research ist auf Koreanisch ausgerichtet, unterstützt 262.144 Token Kontext und veröffentlicht auf seiner [Modellkarte](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) koreanische Benchmark-Ergebnisse wie KMMLU-Pro 67,6. Die Lizenz „EXAONE AI Model License Agreement 1.2 - NC“ passt zu Forschung, Studium und privaten Projekten, nicht zu einem kommerziellen Produkt.',
          'Für ein kommerzielles koreanisches Produkt steht [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) unter Apache 2.0 und läuft über Community-Quantisierungen mit llama.cpp, Ollama und LM Studio. Seine Modellkarte nennt keine koreanischen Benchmarks; evaluieren Sie es daher mit eigenen koreanischen Prompts. Naver\'s [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) ist die kleinere Option: rund 14,7 Mrd. Parameter, koreanische Werte auf der Karte veröffentlicht. Es nutzt eine eigene Lizenz — lesen Sie die Lizenzdatei vor kommerzieller Nutzung.',
          'Die Modelle mit 33B und 27B brauchen bei 4-Bit-Quantisierung grob 20 GB Speicher (Schätzung; der tatsächliche Bedarf hängt von der Kontextlänge ab). Größere koreanische Modelle wie K-EXAONE 2.0 mit 750B Parametern sind für einen einzelnen Rechner unrealistisch: Die [Modellkarte](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) zeigt ein Serving-Beispiel auf 16 NVIDIA-H200-GPUs.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Koreanische LLM-Modelle im Vergleich',
        content: [
          'Die Tabelle nennt die offenen Modelle, die für den lokalen Betrieb auf Koreanisch am relevantesten sind. Benchmark-Werte auf den Karten stammen vom jeweiligen Hersteller und sind über Karten hinweg nicht direkt vergleichbar.',
        ],
        columns: ['Modell', 'Größe', 'Lizenz', 'Eignung'],
        rows: [
            { 'Modell': 'EXAONE 4.5 33B', 'Größe': '33B dicht, Vision', 'Lizenz': 'EXAONE NC 1.2', 'Eignung': 'Koreanisch, nichtkommerziell' },
            { 'Modell': 'Qwen3.8-27B', 'Größe': '27B', 'Lizenz': 'Apache 2.0', 'Eignung': 'Kommerziell, mehrsprachig' },
            { 'Modell': 'HyperCLOVA X SEED Think 14B', 'Größe': '14,7B', 'Lizenz': 'HyperCLOVA X SEED', 'Eignung': 'Mittelklasse-Hardware' },
            { 'Modell': 'Solar Open 100B', 'Größe': '102,6B, 12B aktiv', 'Lizenz': 'Upstage Solar', 'Eignung': 'Workstations mit viel Speicher' },
        ],
        note: 'Koreanisch-zentrierte Modelle sind mit umfangreichen koreanischen Daten trainiert und gehen tendenziell besser mit Redewendungen und Höflichkeitsstufen um. Qwen3.8 ist die bessere Wahl, wenn ein Modell viele Sprachen bedienen muss, weil sich getrennte Modelle pro Sprache erübrigen.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welche koreanischen LLM-Modelle kann ich lokal betreiben?',
            a: 'Die wichtigsten offenen Optionen sind EXAONE 4.5 33B (LG AI Research), Qwen3.8-27B (Alibaba Qwen), HyperCLOVA X SEED Think 14B (Naver) und Solar Open 100B (Upstage). K-EXAONE 2.0 ist ebenfalls offen, braucht aber einen Multi-GPU-Server.',
          },
          {
            q: 'Ist EXAONE 4.5 kostenlos kommerziell nutzbar?',
            a: 'Nein. Die Modellkarte nennt „EXAONE AI Model License Agreement 1.2 - NC“, wobei NC nichtkommerziell bedeutet. Für kommerzielle Nutzung wählen Sie ein freizügig lizenziertes Modell wie Qwen3.8-27B (Apache 2.0) oder fragen LG AI Research nach kommerziellen Konditionen.',
          },
          {
            q: 'Kann ich EXAONE über Ollama betreiben?',
            a: 'Die offizielle Ollama-Bibliothek führt exaone3.5 und exaone-deep (2,4B, 7,8B und 32B). EXAONE 4.x erscheint dort nur als Community-Uploads. Die Modellkarte von EXAONE 4.5 verlinkt quantisierte Builds für llama.cpp, Ollama und LM Studio.',
          },
          {
            q: 'Wie gut ist Qwen auf Koreanisch im Vergleich zu koreanischen Modellen?',
            a: 'Die Modellkarte von Qwen3.8-27B nennt keine koreanischen Einzelwerte; testen Sie es mit eigenen Prompts. Naver berichtet, dass das Backbone von HyperCLOVA X SEED Think 14B im koreanischen Durchschnitt 0,7269 erreicht gegenüber 0,7079 bei Qwen3-14B — ein herstellerseitiges Ergebnis gegen eine ältere Qwen-Generation.',
          },
          {
            q: 'Ist K-EXAONE 2.0 für den lokalen Betrieb praktikabel?',
            a: 'In der Regel nicht. Es hat 750B Gesamt- und 37B aktive Parameter unter Apache 2.0, und die Modellkarte zeigt Serving auf zwei Knoten mit je 8 H200-GPUs. Es zielt auf Server, nicht auf Workstations.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Modellkarte EXAONE 4.5 33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — Lizenz, Kontextlänge, koreanische Benchmarks',
          '[Modellkarte K-EXAONE 2.0 750B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0, Serving-Hardware',
          '[Modellkarte HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — Lizenz, koreanische Benchmarks',
          '[Modellkarte Solar Open 100B](https://huggingface.co/upstage/Solar-Open-100B) — Parameter, Lizenz',
          '[Modellkarte Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0, Quantisierungen',
          '[Ollama-Bibliothek: EXAONE](https://ollama.com/search?q=exaone) — verfügbare EXAONE-Builds',
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Welche lokalen LLM-Modelle unterstützen Japanisch am besten?](/prompt-bites/best-japanese-language-models-local) — der äquivalente Guide für Japanisch',
          '[Bestes 14B-Modell fürs Coding?](/prompt-bites/best-14b-models-coding) — ein Vergleich allgemeiner Modellklassen',
          '[Chinesisches vs. englisches Prompting: Was ist besser?](/prompt-bites/chinese-prompting-vs-english-prompting) — Überlegungen zum mehrsprachigen Prompting',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-es.webp',
    title: 'Mejores LLM coreanos para ejecutar en local',
    seoTitle: 'Mejores LLM coreanos en local 2026 | Prompt Bites',
    metaDescription: 'Mejores modelos LLM coreanos en local: EXAONE 4.5, Qwen3.8, HyperCLOVA X SEED y Solar Open comparados por licencia, tamaño y ajuste al coreano.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que crean aplicaciones en coreano sobre modelos locales autoalojados',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 4.5 33B de LG AI Research es el modelo centrado en coreano con el que empezar para investigación y uso personal, pero su licencia es no comercial.</strong> Para un producto coreano comercial, Qwen3.8-27B (Apache 2.0) es la opción permisiva, y HyperCLOVA X SEED Think 14B de Naver encaja en hardware de gama media.',
    toc: [
      { label: 'Qué LLM coreano elegir', anchor: '#best-pick' },
      { label: 'Modelos LLM coreanos comparados', anchor: '#comparison' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos LLM coreanos puedo ejecutar en local?',
        answer: 'EXAONE 4.5 33B (LG AI Research) es el punto de partida centrado en coreano, pero no comercial. Qwen3.8-27B (Apache 2.0) es la opción multilingüe permisiva, y HyperCLOVA X SEED Think 14B (Naver) encaja en hardware de gama media.',
        bullets: [
          'EXAONE 4.5 33B: creado en Corea, contexto de 262.144 tokens, licencia «EXAONE AI Model License Agreement 1.2 - NC» (no comercial).',
          'Qwen3.8-27B: Apache 2.0, modelo multilingüe amplio; su ficha no publica puntuaciones específicas de coreano, pruébelo con sus propios prompts en coreano.',
          'HyperCLOVA X SEED Think 14B: unos 14,7 mil millones de parámetros, puntuaciones en coreano publicadas por Naver; lea el texto de su licencia antes de usarlo comercialmente.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Opción centrada en coreano: EXAONE 4.5 33B (LG AI Research) — pero con licencia no comercial',
          'Opción comercial: Qwen3.8-27B (Apache 2.0) — pruebe la calidad en coreano con sus prompts, su ficha no lista puntuaciones en coreano',
          'Hardware de gama media: HyperCLOVA X SEED Think 14B (Naver) — ajustado al coreano, licencia propia, revise las condiciones',
          'Solo estaciones grandes: Solar Open 100B (Upstage, 12B activos) y K-EXAONE 2.0 (750B, Apache 2.0, 16 GPU H200 en el ejemplo de servicio)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Qué LLM coreano elegir',
        content: [
          '<strong>Elija primero por licencia y después por hardware: el modelo coreano con mejores resultados no sirve en un producto comercial si su licencia lo prohíbe.</strong> EXAONE 4.5 33B de LG AI Research está construido en torno al coreano, admite un contexto de 262.144 tokens y publica en su [ficha de modelo](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) resultados en coreano como KMMLU-Pro 67,6. Su licencia «EXAONE AI Model License Agreement 1.2 - NC» sirve para investigación, estudio y proyectos personales, no para un producto comercial.',
          'Para un producto coreano comercial, [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) tiene licencia Apache 2.0 y funciona con llama.cpp, Ollama y LM Studio mediante cuantizaciones de la comunidad. Su ficha no lista benchmarks en coreano, así que evalúelo con sus propios prompts antes de comprometerse. [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) de Naver es la opción más pequeña: unos 14,7 mil millones de parámetros, con puntuaciones en coreano publicadas en su ficha. Usa licencia propia; lea el archivo de licencia antes de un uso comercial.',
          'Los modelos de 33B y 27B necesitan aproximadamente 20 GB de memoria con cuantización de 4 bits (estimación; el uso real depende de la longitud de contexto). Los modelos coreanos más grandes, como K-EXAONE 2.0 con 750B de parámetros, no son realistas para una sola máquina: su [ficha de modelo](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) muestra un ejemplo de servicio con 16 GPU NVIDIA H200.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos LLM coreanos comparados',
        content: [
          'La tabla recoge los modelos de pesos abiertos más relevantes para ejecutar coreano en local. Las puntuaciones de cada ficha las publica el propio fabricante del modelo y no son directamente comparables entre fichas.',
        ],
        columns: ['Modelo', 'Tamaño', 'Licencia', 'Mejor uso'],
        rows: [
            { 'Modelo': 'EXAONE 4.5 33B', 'Tamaño': '33B denso, visión', 'Licencia': 'EXAONE NC 1.2', 'Mejor uso': 'Coreano, no comercial' },
            { 'Modelo': 'Qwen3.8-27B', 'Tamaño': '27B', 'Licencia': 'Apache 2.0', 'Mejor uso': 'Comercial, multilingüe' },
            { 'Modelo': 'HyperCLOVA X SEED Think 14B', 'Tamaño': '14,7B', 'Licencia': 'HyperCLOVA X SEED', 'Mejor uso': 'Hardware de gama media' },
            { 'Modelo': 'Solar Open 100B', 'Tamaño': '102,6B, 12B activos', 'Licencia': 'Upstage Solar', 'Mejor uso': 'Estaciones de mucha memoria' },
        ],
        note: 'Los modelos centrados en coreano se entrenan con muchos datos en coreano y suelen manejar mejor los modismos y los niveles de formalidad. Qwen3.8 es mejor cuando un solo modelo debe atender muchos idiomas, porque evita ejecutar un modelo distinto por idioma.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué modelos LLM coreanos puedo ejecutar en local?',
            a: 'Las principales opciones de pesos abiertos son EXAONE 4.5 33B (LG AI Research), Qwen3.8-27B (Alibaba Qwen), HyperCLOVA X SEED Think 14B (Naver) y Solar Open 100B (Upstage). K-EXAONE 2.0 también es abierto, pero requiere un servidor con varias GPU.',
          },
          {
            q: '¿Se puede usar EXAONE 4.5 gratis con fines comerciales?',
            a: 'No. Su ficha indica «EXAONE AI Model License Agreement 1.2 - NC», donde NC significa no comercial. Para uso comercial, elija un modelo con licencia permisiva como Qwen3.8-27B (Apache 2.0) o consulte a LG AI Research las condiciones comerciales.',
          },
          {
            q: '¿Puedo ejecutar EXAONE con Ollama?',
            a: 'La biblioteca oficial de Ollama incluye exaone3.5 y exaone-deep (2,4B, 7,8B y 32B). EXAONE 4.x solo aparece como subidas de la comunidad. La ficha de EXAONE 4.5 enlaza versiones cuantizadas para llama.cpp, Ollama y LM Studio.',
          },
          {
            q: '¿Qué tal es Qwen en coreano frente a los modelos coreanos?',
            a: 'La ficha de Qwen3.8-27B no publica puntuaciones específicas de coreano; pruébelo con sus propios prompts. Naver indica que el backbone de HyperCLOVA X SEED Think 14B obtiene 0,7269 frente a 0,7079 de Qwen3-14B en su promedio de coreano, un resultado del fabricante frente a una generación anterior de Qwen.',
          },
          {
            q: '¿Es práctico K-EXAONE 2.0 en local?',
            a: 'Normalmente no. Tiene 750B de parámetros totales y 37B activos con licencia Apache 2.0, y su ficha muestra un servicio en dos nodos de 8 GPU H200 cada uno. Está pensado para servidores, no para estaciones de trabajo.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Ficha del modelo EXAONE 4.5 33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — licencia, longitud de contexto, benchmarks en coreano',
          '[Ficha del modelo K-EXAONE 2.0 750B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0, hardware de servicio',
          '[Ficha del modelo HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — licencia, benchmarks en coreano',
          '[Ficha del modelo Solar Open 100B](https://huggingface.co/upstage/Solar-Open-100B) — parámetros, licencia',
          '[Ficha del modelo Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0, cuantizaciones',
          '[Biblioteca de Ollama: EXAONE](https://ollama.com/search?q=exaone) — versiones de EXAONE disponibles',
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas relacionadas',
        items: [
          '[¿Qué Modelos de LLM Local Soportan Mejor el Japonés?](/prompt-bites/best-japanese-language-models-local) — la guía equivalente para japonés',
          '[¿Mejor modelo de 14B para programar?](/prompt-bites/best-14b-models-coding) — una comparación de modelos de propósito general por tamaño',
          '[Prompts en chino vs inglés: ¿cuál es mejor?](/prompt-bites/chinese-prompting-vs-english-prompting) — consideraciones sobre prompts multilingües',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-fr.webp',
    title: 'Meilleurs LLM coréens à exécuter en local',
    seoTitle: 'Meilleurs LLM coréens en local 2026 | Prompt Bites',
    metaDescription: 'Meilleurs modèles LLM coréens en local : EXAONE 4.5, Qwen3.8, HyperCLOVA X SEED et Solar Open comparés selon licence, taille et adéquation au coréen.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs créant des applications en coréen sur des modèles locaux auto-hébergés',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 4.5 33B de LG AI Research est le modèle centré sur le coréen par lequel commencer pour la recherche et l\'usage personnel, mais sa licence est non commerciale.</strong> Pour un produit coréen commercial, Qwen3.8-27B (Apache 2.0) est l\'option permissive, et HyperCLOVA X SEED Think 14B de Naver convient au matériel milieu de gamme.',
    toc: [
      { label: 'Quel LLM coréen choisir', anchor: '#best-pick' },
      { label: 'Modèles LLM coréens comparés', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Lectures associées', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles LLM coréens puis-je exécuter en local ?',
        answer: 'EXAONE 4.5 33B (LG AI Research) est le point de départ centré sur le coréen, mais non commercial. Qwen3.8-27B (Apache 2.0) est l\'option multilingue permissive, et HyperCLOVA X SEED Think 14B (Naver) convient au matériel milieu de gamme.',
        bullets: [
          'EXAONE 4.5 33B : conçu en Corée, contexte de 262 144 tokens, licence « EXAONE AI Model License Agreement 1.2 - NC » (non commerciale).',
          'Qwen3.8-27B : Apache 2.0, modèle multilingue large ; sa fiche ne publie aucun score propre au coréen, testez-le sur vos propres prompts coréens.',
          'HyperCLOVA X SEED Think 14B : environ 14,7 Md de paramètres, scores coréens publiés par Naver ; lisez son texte de licence avant tout usage commercial.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Choix centré sur le coréen : EXAONE 4.5 33B (LG AI Research) — mais licence non commerciale',
          'Choix commercial : Qwen3.8-27B (Apache 2.0) — testez la qualité en coréen sur vos prompts, sa fiche n\'indique aucun score coréen',
          'Matériel milieu de gamme : HyperCLOVA X SEED Think 14B (Naver) — adapté au coréen, licence propre, vérifiez les conditions',
          'Grosses stations uniquement : Solar Open 100B (Upstage, 12 Md actifs) et K-EXAONE 2.0 (750B, Apache 2.0, 16 GPU H200 dans l\'exemple de serving)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Quel LLM coréen choisir',
        content: [
          '<strong>Choisissez d\'abord selon la licence, puis selon le matériel : le modèle coréen le mieux noté est inutilisable dans un produit commercial si sa licence l\'interdit.</strong> EXAONE 4.5 33B de LG AI Research est construit autour du coréen, prend en charge un contexte de 262 144 tokens et publie sur sa [fiche de modèle](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) des résultats coréens comme KMMLU-Pro 67,6. Sa licence « EXAONE AI Model License Agreement 1.2 - NC » convient à la recherche, à l\'étude et aux projets personnels, pas à un produit commercial.',
          'Pour un produit coréen commercial, [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) est sous Apache 2.0 et fonctionne avec llama.cpp, Ollama et LM Studio via des quantifications communautaires. Sa fiche ne liste aucun benchmark coréen : évaluez-le sur vos propres prompts coréens avant de vous engager. [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) de Naver est l\'option plus petite : environ 14,7 Md de paramètres, scores coréens publiés sur sa fiche. Il utilise sa propre licence ; lisez le fichier de licence avant un usage commercial.',
          'Les modèles de 33B et 27B demandent environ 20 Go de mémoire en quantification 4 bits (estimation ; la consommation réelle dépend de la longueur de contexte). Les modèles coréens plus grands, comme K-EXAONE 2.0 avec 750B de paramètres, ne sont pas réalistes pour une seule machine : sa [fiche de modèle](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) montre un exemple de serving sur 16 GPU NVIDIA H200.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modèles LLM coréens comparés',
        content: [
          'Le tableau liste les modèles à poids ouverts les plus pertinents pour exécuter le coréen en local. Les scores de benchmark de chaque fiche sont publiés par l\'éditeur du modèle et ne sont pas directement comparables d\'une fiche à l\'autre.',
        ],
        columns: ['Modèle', 'Taille', 'Licence', 'Usage idéal'],
        rows: [
            { 'Modèle': 'EXAONE 4.5 33B', 'Taille': '33B dense, vision', 'Licence': 'EXAONE NC 1.2', 'Usage idéal': 'Coréen, non commercial' },
            { 'Modèle': 'Qwen3.8-27B', 'Taille': '27B', 'Licence': 'Apache 2.0', 'Usage idéal': 'Commercial, multilingue' },
            { 'Modèle': 'HyperCLOVA X SEED Think 14B', 'Taille': '14,7B', 'Licence': 'HyperCLOVA X SEED', 'Usage idéal': 'Matériel milieu de gamme' },
            { 'Modèle': 'Solar Open 100B', 'Taille': '102,6B, 12B actifs', 'Licence': 'Upstage Solar', 'Usage idéal': 'Stations à grande mémoire' },
        ],
        note: 'Les modèles centrés sur le coréen sont entraînés sur beaucoup de données coréennes et gèrent en général mieux les expressions idiomatiques et les niveaux de politesse. Qwen3.8 est préférable quand un seul modèle doit servir de nombreuses langues, car il évite de faire tourner un modèle distinct par langue.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quels modèles LLM coréens puis-je exécuter en local ?',
            a: 'Les principales options à poids ouverts sont EXAONE 4.5 33B (LG AI Research), Qwen3.8-27B (Alibaba Qwen), HyperCLOVA X SEED Think 14B (Naver) et Solar Open 100B (Upstage). K-EXAONE 2.0 est aussi ouvert mais exige un serveur multi-GPU.',
          },
          {
            q: 'EXAONE 4.5 est-il utilisable gratuitement à titre commercial ?',
            a: 'Non. Sa fiche indique « EXAONE AI Model License Agreement 1.2 - NC », NC signifiant non commercial. Pour un usage commercial, choisissez un modèle sous licence permissive comme Qwen3.8-27B (Apache 2.0) ou contactez LG AI Research pour les conditions commerciales.',
          },
          {
            q: 'Puis-je exécuter EXAONE avec Ollama ?',
            a: 'La bibliothèque officielle d\'Ollama propose exaone3.5 et exaone-deep (2,4B, 7,8B et 32B). EXAONE 4.x n\'y figure que par des envois de la communauté. La fiche d\'EXAONE 4.5 renvoie vers des versions quantifiées pour llama.cpp, Ollama et LM Studio.',
          },
          {
            q: 'Qwen est-il aussi bon en coréen que les modèles coréens ?',
            a: 'La fiche de Qwen3.8-27B ne publie aucun score propre au coréen ; testez-le sur vos propres prompts. Naver indique que le backbone de HyperCLOVA X SEED Think 14B obtient 0,7269 contre 0,7079 pour Qwen3-14B sur sa moyenne coréenne, un résultat publié par l\'éditeur face à une génération Qwen plus ancienne.',
          },
          {
            q: 'K-EXAONE 2.0 est-il praticable en local ?',
            a: 'En général non. Il compte 750B de paramètres au total et 37B actifs sous Apache 2.0, et sa fiche montre un serving sur deux nœuds de 8 GPU H200. Il vise les serveurs, pas les stations de travail.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Fiche du modèle EXAONE 4.5 33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — licence, longueur de contexte, benchmarks coréens',
          '[Fiche du modèle K-EXAONE 2.0 750B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0, matériel de serving',
          '[Fiche du modèle HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — licence, benchmarks coréens',
          '[Fiche du modèle Solar Open 100B](https://huggingface.co/upstage/Solar-Open-100B) — paramètres, licence',
          '[Fiche du modèle Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0, quantifications',
          '[Bibliothèque Ollama : EXAONE](https://ollama.com/search?q=exaone) — versions EXAONE disponibles',
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures associées',
        items: [
          '[Quels modèles de LLM local prennent le mieux en charge le japonais ?](/prompt-bites/best-japanese-language-models-local) — le guide équivalent pour le japonais',
          '[Meilleur modèle 14B pour le code ?](/prompt-bites/best-14b-models-coding) — une comparaison de modèles polyvalents par taille',
          '[Prompting en chinois ou en anglais : lequel est meilleur ?](/prompt-bites/chinese-prompting-vs-english-prompting) — considérations sur le prompting multilingue',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-ja.webp',
    title: 'ローカルで動かせる韓国語LLMのおすすめ',
    seoTitle: 'ローカル韓国語LLMおすすめ2026 | Prompt Bites',
    metaDescription: '韓国語に強いローカルLLMを比較。EXAONE 4.5、Qwen3.8、HyperCLOVA X SEED、Solar Openをライセンス、サイズ、韓国語適性で整理します。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: 'ローカルのセルフホスト型モデルで韓国語アプリケーションを構築する開発者',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>LG AI ResearchのEXAONE 4.5 33Bは、研究や個人利用で最初に試す韓国語中心のモデルですが、ライセンスは非商用です。</strong>商用の韓国語プロダクトには、Apache 2.0のQwen3.8-27Bが制約の少ない選択肢で、NaverのHyperCLOVA X SEED Think 14Bは中程度のハードウェア向けです。',
    toc: [
      { label: 'どの韓国語LLMを選ぶか', anchor: '#best-pick' },
      { label: '韓国語LLMモデルの比較', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '出典', anchor: '#sources' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルで動かせる韓国語LLMモデルは?',
        answer: 'EXAONE 4.5 33B(LG AI Research)は韓国語中心の出発点ですが非商用です。Qwen3.8-27B(Apache 2.0)は制約の少ない多言語の選択肢、HyperCLOVA X SEED Think 14B(Naver)は中程度のハードウェア向けです。',
        bullets: [
          'EXAONE 4.5 33B:韓国で開発、コンテキスト262,144トークン、ライセンスは「EXAONE AI Model License Agreement 1.2 - NC」(非商用)。',
          'Qwen3.8-27B:Apache 2.0の幅広い多言語モデル。モデルカードに韓国語専用のスコアはないため、自分の韓国語プロンプトで試してください。',
          'HyperCLOVA X SEED Think 14B:約147億パラメータ、韓国語ベンチマークはNaverが公開。商用利用の前にライセンス本文を確認してください。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '韓国語中心の選択:EXAONE 4.5 33B(LG AI Research)— ただしライセンスは非商用',
          '商用の選択:Qwen3.8-27B(Apache 2.0)— モデルカードに韓国語スコアがないため、自分のプロンプトで品質を確認',
          '中程度のハードウェア:HyperCLOVA X SEED Think 14B(Naver)— 韓国語向けに調整、独自ライセンスのため条件を確認',
          '大型ワークステーション向け:Solar Open 100B(Upstage、アクティブ12B)とK-EXAONE 2.0(750B、Apache 2.0、サービング例はH200を16基)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'どの韓国語LLMを選ぶか',
        content: [
          '<strong>まずライセンス、次にハードウェアで選びます。韓国語スコアが最も高いモデルでも、ライセンスが禁じていれば商用プロダクトでは使えません。</strong>LG AI ResearchのEXAONE 4.5 33Bは韓国語を軸に構築され、262,144トークンのコンテキストに対応し、[モデルカード](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)でKMMLU-Pro 67.6などの韓国語ベンチマーク結果を公開しています。ライセンスは「EXAONE AI Model License Agreement 1.2 - NC」で、研究・学習・個人プロジェクト向けであり、商用プロダクトには向きません。',
          '商用の韓国語プロダクトには、Apache 2.0の[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)が使え、コミュニティの量子化版でllama.cpp、Ollama、LM Studioから動かせます。モデルカードに韓国語のベンチマークはないため、採用前に自分の韓国語プロンプトで評価してください。Naverの[HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B)はより小型の選択肢で、約147億パラメータ、韓国語スコアがモデルカードに載っています。独自ライセンスのため、商用利用の前にライセンスファイルを確認してください。',
          '33Bと27Bのモデルは、4ビット量子化でおよそ20GBのメモリが必要です(推定値。実際の使用量はコンテキスト長で変わります)。750BパラメータのK-EXAONE 2.0のような大型の韓国製モデルは、1台のマシンでは現実的ではありません。その[モデルカード](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)のサービング例はNVIDIA H200を16基使っています。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '韓国語LLMモデルの比較',
        content: [
          '表は、ローカルで韓国語を動かす際に関連性の高いオープンウェイトモデルです。各モデルカードのベンチマークはそのモデルの提供元が公表した値で、カード間で直接比較できません。',
        ],
        columns: ['モデル', 'サイズ', 'ライセンス', '向いている用途'],
        rows: [
            { 'モデル': 'EXAONE 4.5 33B', 'サイズ': '33B密、視覚対応', 'ライセンス': 'EXAONE NC 1.2', '向いている用途': '韓国語中心・非商用' },
            { 'モデル': 'Qwen3.8-27B', 'サイズ': '27B', 'ライセンス': 'Apache 2.0', '向いている用途': '商用・多言語' },
            { 'モデル': 'HyperCLOVA X SEED Think 14B', 'サイズ': '14.7B', 'ライセンス': 'HyperCLOVA X SEED', '向いている用途': '中程度のハードウェア' },
            { 'モデル': 'Solar Open 100B', 'サイズ': '102.6B、12Bアクティブ', 'ライセンス': 'Upstage Solar', '向いている用途': '大容量メモリの機材' },
        ],
        note: '韓国語中心のモデルは大量の韓国語データで学習されており、慣用句や敬語レベルの扱いに強い傾向があります。1つのモデルで多くの言語を扱う必要があるなら、言語ごとに別モデルを動かさずに済むQwen3.8が向いています。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ローカルで動かせる韓国語LLMモデルは?',
            a: '主なオープンウェイトの選択肢は、EXAONE 4.5 33B(LG AI Research)、Qwen3.8-27B(Alibaba Qwen)、HyperCLOVA X SEED Think 14B(Naver)、Solar Open 100B(Upstage)です。K-EXAONE 2.0もオープンですが、複数GPUのサーバーが必要です。',
          },
          {
            q: 'EXAONE 4.5は商用利用が無料ですか?',
            a: 'いいえ。モデルカードのライセンスは「EXAONE AI Model License Agreement 1.2 - NC」で、NCは非商用を意味します。商用利用にはQwen3.8-27B(Apache 2.0)のような寛容なライセンスのモデルを選ぶか、LG AI Researchに商用条件を問い合わせてください。',
          },
          {
            q: 'EXAONEをOllamaで動かせますか?',
            a: 'Ollama公式ライブラリにはexaone3.5とexaone-deep(2.4B、7.8B、32B)があります。EXAONE 4.xはコミュニティのアップロードのみです。EXAONE 4.5のモデルカードには、llama.cpp、Ollama、LM Studio向けの量子化版へのリンクがあります。',
          },
          {
            q: 'Qwenの韓国語性能は韓国製モデルと比べてどうですか?',
            a: 'Qwen3.8-27Bのモデルカードに韓国語専用のスコアはないため、自分のプロンプトで試してください。Naverは、HyperCLOVA X SEED Think 14Bのバックボーンが韓国語平均で0.7269、Qwen3-14Bが0.7079だったと報告していますが、これは提供元の結果で、比較対象も旧世代のQwenです。',
          },
          {
            q: 'K-EXAONE 2.0はローカルで実用的ですか?',
            a: '通常は実用的ではありません。総パラメータ750B、アクティブ37BでApache 2.0ですが、モデルカードはH200を8基積んだノード2台でのサービング例を示しています。ワークステーションではなくサーバー向けです。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[EXAONE 4.5 33Bモデルカード](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — ライセンス、コンテキスト長、韓国語ベンチマーク',
          '[K-EXAONE 2.0 750Bモデルカード](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0、サービング用ハードウェア',
          '[HyperCLOVA X SEED Think 14Bモデルカード](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — ライセンス、韓国語ベンチマーク',
          '[Solar Open 100Bモデルカード](https://huggingface.co/upstage/Solar-Open-100B) — パラメータ、ライセンス',
          '[Qwen3.8-27Bモデルカード](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0、量子化版',
          '[Ollamaライブラリ:EXAONE](https://ollama.com/search?q=exaone) — 利用可能なEXAONEビルド',
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[日本語に最も対応したローカルLLMモデルは?](/prompt-bites/best-japanese-language-models-local) — 日本語向けの同等ガイド',
          '[コーディングに最適な14Bモデルは?](/prompt-bites/best-14b-models-coding) — 汎用モデルのサイズ帯比較',
          '[中国語と英語のプロンプト:どちらが良いか?](/prompt-bites/chinese-prompting-vs-english-prompting) — 多言語プロンプトの考慮点',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-ko.webp',
    title: '로컬에서 실행할 수 있는 한국어 LLM 추천',
    seoTitle: '로컬 한국어 LLM 추천 2026 | Prompt Bites',
    metaDescription: '로컬에서 실행하는 한국어 LLM 비교: EXAONE 4.5, Qwen3.8, HyperCLOVA X SEED, Solar Open을 라이선스, 크기, 한국어 적합도로 정리했습니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: '로컬 자체 호스팅 모델로 한국어 애플리케이션을 구축하는 개발자',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>LG AI Research의 EXAONE 4.5 33B는 연구와 개인 용도로 가장 먼저 써볼 한국어 중심 모델이지만, 라이선스는 비상업용입니다.</strong> 상업용 한국어 제품에는 Apache 2.0인 Qwen3.8-27B가 제약이 적은 선택지이고, Naver의 HyperCLOVA X SEED Think 14B는 중급 하드웨어에 맞습니다.',
    toc: [
      { label: '어떤 한국어 LLM을 고를까', anchor: '#best-pick' },
      { label: '한국어 LLM 모델 비교', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '출처', anchor: '#sources' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬에서 실행할 수 있는 한국어 LLM 모델은 무엇인가?',
        answer: 'EXAONE 4.5 33B(LG AI Research)는 한국어 중심의 출발점이지만 비상업용입니다. Qwen3.8-27B(Apache 2.0)는 제약이 적은 다국어 선택지이고, HyperCLOVA X SEED Think 14B(Naver)는 중급 하드웨어에 맞습니다.',
        bullets: [
          'EXAONE 4.5 33B: 한국에서 개발, 컨텍스트 262,144 토큰, 라이선스는 "EXAONE AI Model License Agreement 1.2 - NC"(비상업용).',
          'Qwen3.8-27B: Apache 2.0의 폭넓은 다국어 모델. 모델 카드에 한국어 전용 점수가 없으므로 직접 한국어 프롬프트로 테스트하세요.',
          'HyperCLOVA X SEED Think 14B: 약 147억 파라미터, 한국어 벤치마크 점수는 Naver가 공개. 상업적 사용 전에 라이선스 전문을 확인하세요.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '한국어 중심 선택: EXAONE 4.5 33B(LG AI Research) — 단, 라이선스는 비상업용',
          '상업용 선택: Qwen3.8-27B(Apache 2.0) — 모델 카드에 한국어 점수가 없으므로 직접 프롬프트로 한국어 품질을 테스트',
          '중급 하드웨어: HyperCLOVA X SEED Think 14B(Naver) — 한국어에 맞춰 조정, 자체 라이선스이므로 조건 확인',
          '대형 워크스테이션 전용: Solar Open 100B(Upstage, 활성 12B)와 K-EXAONE 2.0(750B, Apache 2.0, 서빙 예시는 H200 16장)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '어떤 한국어 LLM을 고를까',
        content: [
          '<strong>먼저 라이선스로, 그다음 하드웨어로 고르세요. 한국어 점수가 가장 높은 모델도 라이선스가 금지하면 상업용 제품에는 쓸 수 없습니다.</strong> LG AI Research의 EXAONE 4.5 33B는 한국어를 중심으로 만들어졌고 262,144 토큰 컨텍스트를 지원하며, [모델 카드](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)에 KMMLU-Pro 67.6 같은 한국어 벤치마크 결과를 공개합니다. 라이선스는 "EXAONE AI Model License Agreement 1.2 - NC"로, 연구·학습·개인 프로젝트에는 맞지만 상업용 제품에는 맞지 않습니다.',
          '상업용 한국어 제품에는 Apache 2.0인 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)를 쓸 수 있으며, 커뮤니티 양자화 버전으로 llama.cpp, Ollama, LM Studio에서 실행됩니다. 모델 카드에 한국어 벤치마크가 없으므로 도입 전에 직접 한국어 프롬프트로 평가하세요. Naver의 [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B)는 더 작은 선택지로, 약 147억 파라미터이며 한국어 점수가 모델 카드에 공개되어 있습니다. 자체 라이선스를 사용하므로 상업적 사용 전에 라이선스 파일을 확인하세요.',
          '33B와 27B 모델은 4비트 양자화에서 대략 20GB의 메모리가 필요합니다(추정치이며 실제 사용량은 컨텍스트 길이에 따라 달라집니다). 750B 파라미터의 K-EXAONE 2.0처럼 더 큰 국산 모델은 한 대의 머신에서는 현실적이지 않습니다. 그 [모델 카드](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)의 서빙 예시는 NVIDIA H200 16장을 사용합니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '한국어 LLM 모델 비교',
        content: [
          '표는 로컬에서 한국어를 실행할 때 가장 관련성이 높은 오픈 웨이트 모델입니다. 각 모델 카드의 벤치마크 점수는 해당 모델 제공사가 공개한 값이며, 카드 간에 직접 비교할 수 없습니다.',
        ],
        columns: ['모델', '크기', '라이선스', '적합한 용도'],
        rows: [
            { '모델': 'EXAONE 4.5 33B', '크기': '33B 밀집, 비전', '라이선스': 'EXAONE NC 1.2', '적합한 용도': '한국어 중심, 비상업용' },
            { '모델': 'Qwen3.8-27B', '크기': '27B', '라이선스': 'Apache 2.0', '적합한 용도': '상업용, 다국어' },
            { '모델': 'HyperCLOVA X SEED Think 14B', '크기': '14.7B', '라이선스': 'HyperCLOVA X SEED', '적합한 용도': '중급 하드웨어' },
            { '모델': 'Solar Open 100B', '크기': '102.6B, 활성 12B', '라이선스': 'Upstage Solar', '적합한 용도': '대용량 메모리 장비' },
        ],
        note: '한국어 중심 모델은 방대한 한국어 데이터로 학습되어 관용구와 존댓말 수준을 더 잘 다루는 경향이 있습니다. 하나의 모델로 여러 언어를 서비스해야 한다면 언어별로 모델을 따로 돌릴 필요가 없는 Qwen3.8이 더 적합합니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '로컬에서 실행할 수 있는 한국어 LLM 모델은 무엇인가?',
            a: '주요 오픈 웨이트 선택지는 EXAONE 4.5 33B(LG AI Research), Qwen3.8-27B(Alibaba Qwen), HyperCLOVA X SEED Think 14B(Naver), Solar Open 100B(Upstage)입니다. K-EXAONE 2.0도 공개되어 있지만 멀티 GPU 서버가 필요합니다.',
          },
          {
            q: 'EXAONE 4.5를 상업적으로 무료로 사용할 수 있나요?',
            a: '아니요. 모델 카드의 라이선스는 "EXAONE AI Model License Agreement 1.2 - NC"이며 NC는 비상업용을 뜻합니다. 상업적 사용에는 Qwen3.8-27B(Apache 2.0) 같은 관대한 라이선스의 모델을 고르거나 LG AI Research에 상업 조건을 문의하세요.',
          },
          {
            q: 'Ollama로 EXAONE을 실행할 수 있나요?',
            a: 'Ollama 공식 라이브러리에는 exaone3.5와 exaone-deep(2.4B, 7.8B, 32B)이 있습니다. EXAONE 4.x는 커뮤니티 업로드로만 있습니다. EXAONE 4.5 모델 카드에는 llama.cpp, Ollama, LM Studio용 양자화 버전 링크가 있습니다.',
          },
          {
            q: 'Qwen의 한국어 성능은 국산 모델과 비교해 어떤가요?',
            a: 'Qwen3.8-27B 모델 카드에는 한국어 전용 점수가 없으므로 직접 프롬프트로 테스트하세요. Naver는 HyperCLOVA X SEED Think 14B의 백본이 한국어 평균에서 0.7269, Qwen3-14B가 0.7079라고 보고하지만, 이는 제공사 결과이며 비교 대상도 이전 세대 Qwen입니다.',
          },
          {
            q: 'K-EXAONE 2.0은 로컬에서 실용적인가요?',
            a: '대체로 아닙니다. 총 750B, 활성 37B 파라미터에 Apache 2.0이지만, 모델 카드는 H200 8장짜리 노드 2대에서의 서빙을 보여 줍니다. 워크스테이션이 아니라 서버용입니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[EXAONE 4.5 33B 모델 카드](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — 라이선스, 컨텍스트 길이, 한국어 벤치마크',
          '[K-EXAONE 2.0 750B 모델 카드](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0, 서빙 하드웨어',
          '[HyperCLOVA X SEED Think 14B 모델 카드](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — 라이선스, 한국어 벤치마크',
          '[Solar Open 100B 모델 카드](https://huggingface.co/upstage/Solar-Open-100B) — 파라미터, 라이선스',
          '[Qwen3.8-27B 모델 카드](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0, 양자화 버전',
          '[Ollama 라이브러리: EXAONE](https://ollama.com/search?q=exaone) — 사용 가능한 EXAONE 빌드',
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[어떤 로컬 LLM 모델이 일본어를 가장 잘 지원하는가?](/ko/prompt-bites/best-japanese-language-models-local) — 일본어를 위한 동등한 가이드',
          '[코딩을 위한 최적의 14B 모델은?](/ko/prompt-bites/best-14b-models-coding) — 범용 모델 등급 비교',
          '[중국어 대 영어 프롬프팅: 어느 것이 더 나은가?](/ko/prompt-bites/chinese-prompting-vs-english-prompting) — 다국어 프롬프팅 고려사항',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-pt.webp',
    title: 'Melhores LLMs coreanos para rodar localmente',
    seoTitle: 'Melhores LLMs coreanos locais 2026 | Prompt Bites',
    metaDescription: 'Melhores modelos LLM coreanos para rodar localmente: EXAONE 4.5, Qwen3.8, HyperCLOVA X SEED e Solar Open comparados por licença, tamanho e adequação ao coreano.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores que criam aplicações em coreano sobre modelos locais auto-hospedados',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O EXAONE 4.5 33B, da LG AI Research, é o modelo focado em coreano para começar em pesquisa e uso pessoal, mas sua licença é não comercial.</strong> Para um produto coreano comercial, o Qwen3.8-27B (Apache 2.0) é a opção permissiva, e o HyperCLOVA X SEED Think 14B, da Naver, cabe em hardware intermediário.',
    toc: [
      { label: 'Qual LLM coreano escolher', anchor: '#best-pick' },
      { label: 'Modelos LLM coreanos comparados', anchor: '#comparison' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leituras relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos LLM coreanos posso rodar localmente?',
        answer: 'O EXAONE 4.5 33B (LG AI Research) é o ponto de partida focado em coreano, mas não comercial. O Qwen3.8-27B (Apache 2.0) é a opção multilíngue permissiva, e o HyperCLOVA X SEED Think 14B (Naver) cabe em hardware intermediário.',
        bullets: [
          'EXAONE 4.5 33B: criado na Coreia, contexto de 262.144 tokens, licença "EXAONE AI Model License Agreement 1.2 - NC" (não comercial).',
          'Qwen3.8-27B: Apache 2.0, modelo multilíngue amplo; sua ficha não publica pontuações específicas de coreano, teste-o com seus próprios prompts em coreano.',
          'HyperCLOVA X SEED Think 14B: cerca de 14,7 bilhões de parâmetros, pontuações em coreano publicadas pela Naver; leia o texto da licença antes do uso comercial.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Escolha focada em coreano: EXAONE 4.5 33B (LG AI Research) — mas com licença não comercial',
          'Escolha comercial: Qwen3.8-27B (Apache 2.0) — teste a qualidade em coreano com seus prompts, pois sua ficha não lista pontuações em coreano',
          'Hardware intermediário: HyperCLOVA X SEED Think 14B (Naver) — ajustado ao coreano, licença própria, verifique os termos',
          'Apenas estações grandes: Solar Open 100B (Upstage, 12B ativos) e K-EXAONE 2.0 (750B, Apache 2.0, 16 GPUs H200 no exemplo de serviço)',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Qual LLM coreano escolher',
        content: [
          '<strong>Escolha primeiro pela licença e depois pelo hardware: o modelo coreano de melhor pontuação não serve num produto comercial se a licença o proíbe.</strong> O EXAONE 4.5 33B, da LG AI Research, é construído em torno do coreano, aceita contexto de 262.144 tokens e publica em sua [ficha de modelo](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) resultados em coreano como KMMLU-Pro 67,6. Sua licença "EXAONE AI Model License Agreement 1.2 - NC" serve para pesquisa, estudo e projetos pessoais, não para um produto comercial.',
          'Para um produto coreano comercial, o [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) tem licença Apache 2.0 e roda com llama.cpp, Ollama e LM Studio por meio de quantizações da comunidade. Sua ficha não lista benchmarks em coreano, então avalie-o com seus próprios prompts antes de se comprometer. O [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B), da Naver, é a opção menor: cerca de 14,7 bilhões de parâmetros, com pontuações em coreano publicadas na ficha. Ele usa licença própria; leia o arquivo de licença antes do uso comercial.',
          'Os modelos de 33B e 27B precisam de cerca de 20 GB de memória em quantização de 4 bits (estimativa; o uso real depende do tamanho do contexto). Modelos coreanos maiores, como o K-EXAONE 2.0 com 750B de parâmetros, não são realistas para uma única máquina: sua [ficha de modelo](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) mostra um exemplo de serviço em 16 GPUs NVIDIA H200.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos LLM coreanos comparados',
        content: [
          'A tabela lista os modelos de pesos abertos mais relevantes para rodar coreano localmente. As pontuações de cada ficha são publicadas pelo próprio fornecedor do modelo e não são diretamente comparáveis entre fichas.',
        ],
        columns: ['Modelo', 'Tamanho', 'Licença', 'Melhor uso'],
        rows: [
            { 'Modelo': 'EXAONE 4.5 33B', 'Tamanho': '33B denso, visão', 'Licença': 'EXAONE NC 1.2', 'Melhor uso': 'Coreano, não comercial' },
            { 'Modelo': 'Qwen3.8-27B', 'Tamanho': '27B', 'Licença': 'Apache 2.0', 'Melhor uso': 'Comercial, multilíngue' },
            { 'Modelo': 'HyperCLOVA X SEED Think 14B', 'Tamanho': '14,7B', 'Licença': 'HyperCLOVA X SEED', 'Melhor uso': 'Hardware intermediário' },
            { 'Modelo': 'Solar Open 100B', 'Tamanho': '102,6B, 12B ativos', 'Licença': 'Upstage Solar', 'Melhor uso': 'Estações de muita memória' },
        ],
        note: 'Modelos focados em coreano são treinados com muitos dados em coreano e tendem a lidar melhor com expressões idiomáticas e níveis de formalidade. O Qwen3.8 é melhor quando um único modelo precisa atender muitos idiomas, pois evita manter um modelo separado por idioma.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quais modelos LLM coreanos posso rodar localmente?',
            a: 'As principais opções de pesos abertos são EXAONE 4.5 33B (LG AI Research), Qwen3.8-27B (Alibaba Qwen), HyperCLOVA X SEED Think 14B (Naver) e Solar Open 100B (Upstage). O K-EXAONE 2.0 também é aberto, mas exige um servidor com várias GPUs.',
          },
          {
            q: 'O EXAONE 4.5 é gratuito para uso comercial?',
            a: 'Não. Sua ficha indica "EXAONE AI Model License Agreement 1.2 - NC", em que NC significa não comercial. Para uso comercial, escolha um modelo com licença permissiva, como o Qwen3.8-27B (Apache 2.0), ou consulte a LG AI Research sobre termos comerciais.',
          },
          {
            q: 'Posso rodar o EXAONE pelo Ollama?',
            a: 'A biblioteca oficial do Ollama lista exaone3.5 e exaone-deep (2,4B, 7,8B e 32B). O EXAONE 4.x aparece ali apenas como envios da comunidade. A ficha do EXAONE 4.5 aponta versões quantizadas para llama.cpp, Ollama e LM Studio.',
          },
          {
            q: 'Qual é o desempenho do Qwen em coreano frente aos modelos coreanos?',
            a: 'A ficha do Qwen3.8-27B não publica pontuações específicas de coreano; teste-o com seus próprios prompts. A Naver informa que o backbone do HyperCLOVA X SEED Think 14B marca 0,7269 contra 0,7079 do Qwen3-14B em sua média de coreano, um resultado do fornecedor contra uma geração mais antiga do Qwen.',
          },
          {
            q: 'O K-EXAONE 2.0 é prático para uso local?',
            a: 'Em geral não. Ele tem 750B de parâmetros totais e 37B ativos sob Apache 2.0, e sua ficha demonstra serviço em dois nós com 8 GPUs H200 cada. É voltado a servidores, não a estações de trabalho.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Ficha do modelo EXAONE 4.5 33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — licença, tamanho de contexto, benchmarks em coreano',
          '[Ficha do modelo K-EXAONE 2.0 750B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0, hardware de serviço',
          '[Ficha do modelo HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — licença, benchmarks em coreano',
          '[Ficha do modelo Solar Open 100B](https://huggingface.co/upstage/Solar-Open-100B) — parâmetros, licença',
          '[Ficha do modelo Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0, quantizações',
          '[Biblioteca do Ollama: EXAONE](https://ollama.com/search?q=exaone) — versões do EXAONE disponíveis',
        ],
      },
      related: {
        id: 'related',
        title: 'Leituras relacionadas',
        items: [
          '[Quais Modelos de LLM Local Suportam Melhor o Japonês?](/prompt-bites/best-japanese-language-models-local) — o guia equivalente para japonês',
          '[Melhor modelo de 14B para programar?](/prompt-bites/best-14b-models-coding) — uma comparação de modelos de uso geral por tamanho',
          '[Prompts em chinês vs inglês: qual é melhor?](/prompt-bites/chinese-prompting-vs-english-prompting) — considerações sobre prompts multilíngues',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-korean-language-models-local-overview-hero-zh.webp',
    title: '适合本地运行的韩语 LLM 推荐',
    seoTitle: '本地韩语 LLM 推荐 2026 | Prompt Bites',
    metaDescription: '本地运行的韩语 LLM 对比：EXAONE 4.5、Qwen3.8、HyperCLOVA X SEED 与 Solar Open，按许可证、规模和韩语适配度整理。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['EXAONE 4.5 33B', 'Qwen3.8-27B', 'HyperCLOVA X SEED Think 14B', 'Solar Open 100B', 'K-EXAONE 2.0'],
    current_hardware_mentioned: ['NVIDIA H200'],
    educationalLevel: 'Intermediate',
    audience: '在本地自托管模型上构建韩语应用的开发者',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>LG AI Research 的 EXAONE 4.5 33B 是研究和个人使用时首先尝试的以韩语为核心的模型，但其许可证为非商业。</strong>对于商业韩语产品，Apache 2.0 的 Qwen3.8-27B 是限制较少的选择，Naver 的 HyperCLOVA X SEED Think 14B 则适合中端硬件。',
    toc: [
      { label: '如何选择韩语 LLM', anchor: '#best-pick' },
      { label: '韩语 LLM 模型对比', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '来源', anchor: '#sources' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '哪些韩语 LLM 模型可以在本地运行？',
        answer: 'EXAONE 4.5 33B（LG AI Research）是以韩语为核心的起点，但为非商业许可。Qwen3.8-27B（Apache 2.0）是限制较少的多语言选择，HyperCLOVA X SEED Think 14B（Naver）适合中端硬件。',
        bullets: [
          'EXAONE 4.5 33B：韩国研发，上下文 262,144 个 token，许可证为“EXAONE AI Model License Agreement 1.2 - NC”（非商业）。',
          'Qwen3.8-27B：Apache 2.0，广泛的多语言模型；其模型卡未公布韩语专项分数，请用自己的韩语提示词测试。',
          'HyperCLOVA X SEED Think 14B：约 147 亿参数，韩语基准分数由 Naver 公布；商用前请阅读其许可证文本。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '以韩语为核心的选择：EXAONE 4.5 33B（LG AI Research）——但许可证为非商业',
          '商业选择：Qwen3.8-27B（Apache 2.0）——模型卡未列出韩语分数，请用自己的提示词测试韩语质量',
          '中端硬件：HyperCLOVA X SEED Think 14B（Naver）——针对韩语调优，使用独立许可证，请核对条款',
          '仅限大型工作站：Solar Open 100B（Upstage，激活 12B）和 K-EXAONE 2.0（750B，Apache 2.0，部署示例使用 16 块 H200）',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '如何选择韩语 LLM',
        content: [
          '<strong>先看许可证，再看硬件：韩语得分最高的模型，如果许可证禁止商用，也无法用于商业产品。</strong>LG AI Research 的 EXAONE 4.5 33B 围绕韩语构建，支持 262,144 个 token 的上下文，并在其[模型卡](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)上公布了 KMMLU-Pro 67.6 等韩语基准结果。其许可证为“EXAONE AI Model License Agreement 1.2 - NC”，适用于研究、学习和个人项目，不适用于商业产品。',
          '对于商业韩语产品，[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)采用 Apache 2.0 许可证，可通过社区量化版本在 llama.cpp、Ollama 和 LM Studio 中运行。其模型卡未列出韩语基准，因此在采用前请用自己的韩语提示词评估。Naver 的 [HyperCLOVA X SEED Think 14B](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) 是较小的选择：约 147 亿参数，模型卡上公布了韩语分数。它使用独立许可证，商用前请阅读许可证文件。',
          '33B 和 27B 模型在 4 位量化下大约需要 20 GB 内存（估算值，实际占用取决于上下文长度）。更大的韩国自研模型，例如 750B 参数的 K-EXAONE 2.0，对单台机器并不现实：其[模型卡](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)的部署示例使用了 16 块 NVIDIA H200 GPU。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '韩语 LLM 模型对比',
        content: [
          '下表列出了本地运行韩语时最相关的开放权重模型。各模型卡上的基准分数由模型自身的发布方提供，不同模型卡之间不能直接比较。',
        ],
        columns: ['模型', '规模', '许可证', '适用场景'],
        rows: [
            { '模型': 'EXAONE 4.5 33B', '规模': '33B 稠密，含视觉', '许可证': 'EXAONE NC 1.2', '适用场景': '韩语为主，非商业' },
            { '模型': 'Qwen3.8-27B', '规模': '27B', '许可证': 'Apache 2.0', '适用场景': '商业，多语言' },
            { '模型': 'HyperCLOVA X SEED Think 14B', '规模': '14.7B', '许可证': 'HyperCLOVA X SEED', '适用场景': '中端硬件' },
            { '模型': 'Solar Open 100B', '规模': '102.6B，激活 12B', '许可证': 'Upstage Solar', '适用场景': '大内存工作站' },
        ],
        note: '以韩语为核心的模型使用大量韩语数据训练，通常更擅长处理习语和敬语层级。当一个模型需要服务多种语言时，Qwen3.8 更合适，因为无需为每种语言单独运行一个模型。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '哪些韩语 LLM 模型可以在本地运行？',
            a: '主要的开放权重选择有 EXAONE 4.5 33B（LG AI Research）、Qwen3.8-27B（Alibaba Qwen）、HyperCLOVA X SEED Think 14B（Naver）和 Solar Open 100B（Upstage）。K-EXAONE 2.0 同样开放，但需要多 GPU 服务器。',
          },
          {
            q: 'EXAONE 4.5 可以免费商用吗？',
            a: '不可以。其模型卡标明“EXAONE AI Model License Agreement 1.2 - NC”，NC 即非商业。商用请选择许可宽松的模型，如 Qwen3.8-27B（Apache 2.0），或向 LG AI Research 咨询商业条款。',
          },
          {
            q: '可以通过 Ollama 运行 EXAONE 吗？',
            a: 'Ollama 官方库提供 exaone3.5 和 exaone-deep（2.4B、7.8B 和 32B）。EXAONE 4.x 仅以社区上传的形式出现。EXAONE 4.5 的模型卡链接了适用于 llama.cpp、Ollama 和 LM Studio 的量化版本。',
          },
          {
            q: 'Qwen 的韩语表现与韩国自研模型相比如何？',
            a: 'Qwen3.8-27B 的模型卡未公布韩语专项分数，请用自己的提示词测试。Naver 报告称，HyperCLOVA X SEED Think 14B 的骨干模型韩语平均分为 0.7269，Qwen3-14B 为 0.7079；这是发布方给出的结果，且对比的是较早一代的 Qwen。',
          },
          {
            q: 'K-EXAONE 2.0 适合本地使用吗？',
            a: '通常不适合。它总参数 750B、激活 37B，采用 Apache 2.0，其模型卡演示的是在两个各含 8 块 H200 的节点上部署。它面向服务器，而非工作站。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[EXAONE 4.5 33B 模型卡](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) — 许可证、上下文长度、韩语基准',
          '[K-EXAONE 2.0 750B 模型卡](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — Apache 2.0、部署硬件',
          '[HyperCLOVA X SEED Think 14B 模型卡](https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Think-14B) — 许可证、韩语基准',
          '[Solar Open 100B 模型卡](https://huggingface.co/upstage/Solar-Open-100B) — 参数、许可证',
          '[Qwen3.8-27B 模型卡](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0、量化版本',
          '[Ollama 库：EXAONE](https://ollama.com/search?q=exaone) — 可用的 EXAONE 版本',
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[哪些本地 LLM 模型对日语支持最好？](/prompt-bites/best-japanese-language-models-local) — 日语的对应指南',
          '[编程最佳 14B 模型是哪个？](/prompt-bites/best-14b-models-coding) — 通用模型规模档位对比',
          '[中文与英文提示词：哪个更好？](/prompt-bites/chinese-prompting-vs-english-prompting) — 多语言提示词的注意事项',
        ],
      },
    },
  },
}
