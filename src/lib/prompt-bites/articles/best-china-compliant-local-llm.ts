import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-en.webp',
    title: 'Best Local LLM for Mainland-China-Compliant Deployments?',
    seoTitle: 'Best Local LLM for China-Compliant Deployment 2026',
    metaDescription: 'Qwen3.8, DeepSeek-V4.1-Flash and GLM-5.3 are the main Chinese open-weight LLMs to self-host: download sizes, licenses, hardware and sourcing in mainland China.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: 'Developers deploying local LLMs for mainland-China-facing products or teams',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) and DeepSeek are the most-used local LLMs for mainland-China-facing deployments</strong> — both are developed by PRC companies whose models are built under domestic content-review requirements. Running either fully locally, on your own hardware, sidesteps the separate regulatory questions that apply specifically to public-facing generative AI services. This is general orientation, not legal advice — confirm requirements for your specific deployment with counsel.',
    toc: [
      { label: 'Best Pick: Qwen, DeepSeek or GLM', anchor: '#best-pick' },
      { label: 'Chinese Open-Weight LLMs You Can Download', anchor: '#models' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'Hardware Requirements (Including GLM)', anchor: '#hardware' },
      { label: 'Sourcing Hardware and Software in Mainland China', anchor: '#sourcing' },
      { label: 'Fine-Tuning and Self-Hosting Licenses', anchor: '#licensing' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Which local LLM is best for mainland-China-compliant deployments?',
        answer: 'Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash and GLM-5.3 (Zhipu AI) are the main Chinese open-weight options for China-facing deployments — all three are built by PRC companies under domestic content-review norms. Confirm your specific compliance requirements with legal counsel, as this is general orientation, not legal advice.',
        bullets: [
          'Qwen3.8-27B (Apache 2.0, 56 GB in BF16) is the most practical starting point; DeepSeek-V4.1-Flash and GLM-5.3-Flash (both MIT) need server-class memory.',
          'Kimi-K3 (Moonshot AI) and MiniMax-H3 are further PRC-developed open-weight options, released under their own custom licenses.',
          'Local, self-hosted deployment differs from operating a public-facing generative AI service — the two are subject to different regulatory considerations.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Current Chinese open-weight picks: Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash and GLM-5.3 (Zhipu AI) — all developed by PRC companies under domestic content-review norms',
          'Only Qwen3.8-27B (56 GB) is small enough for a single workstation; the other flagships need 300 GB to 1.5 TB of memory just for weights',
          'Licenses differ: MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash), Apache 2.0 (Qwen3.8-27B), custom terms for the largest models — read the model card before fine-tuning or commercial use',
          'Local, self-hosted use is a different regulatory question than operating a public-facing AI service — this is general orientation, not legal advice',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Qwen, DeepSeek or GLM',
        content: [
          '<strong>Qwen (developed by Alibaba), DeepSeek and GLM (developed by Zhipu AI) are the widely used Chinese open-weight LLMs for mainland-China-facing deployments, since all three are developed by PRC companies whose training and alignment processes already operate under domestic content-review norms.</strong> Using models built by domestic developers, rather than adapting a foreign model after the fact, is the more common approach for teams targeting the China market.',
          'Start with [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): it is the only current flagship-family model that fits one workstation (56 GB in BF16, 31 GB in FP8) and it is released under Apache 2.0. Move to [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) or [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) when you have server-class memory and want a larger model under the MIT license.',
          'Importantly, running any of these models fully locally on your own hardware is a different situation from operating a public-facing generative AI service, which in mainland China is subject to separate service-level regulatory requirements (including registration and content-review obligations that apply to the service, not just the underlying model; see this [overview of the Interim Measures](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)). Local, internal, or non-public use generally sits outside those specific service-level requirements — but this distinction, and how it applies to your specific product, is exactly the kind of thing to confirm with legal counsel familiar with the current regulatory landscape, not decide from a technical blog post.',
        ],
      },
      models: {
        id: 'models',
        title: 'Chinese Open-Weight LLMs You Can Download',
        content: 'These are the current flagship open-weight releases from the main PRC model developers, with the size of the weight files in each official repository (checked 17 October 2026). Larger models are listed because they are the answer to "which Chinese LLMs can I run locally" — but most need server hardware. Sizes are the safetensors weight files only; context cache and runtime overhead come on top. Check each model card for the exact license text before commercial use.',
        columns: ['Model', 'Maker', 'Download size', 'License'],
        rows: [
          { 'Model': 'Qwen3.8-27B', 'Maker': 'Alibaba', 'Download size': '56 GB (BF16) / 31 GB (FP8)', 'License': 'Apache 2.0' },
          { 'Model': 'Qwen3.8-Flash-Next', 'Maker': 'Alibaba', 'Download size': '360 GB (BF16)', 'License': 'Qwen community' },
          { 'Model': 'DeepSeek-V4.1-Flash', 'Maker': 'DeepSeek', 'Download size': '510 GB', 'License': 'MIT' },
          { 'Model': 'GLM-5.3-Flash', 'Maker': 'Zhipu AI (Z.ai)', 'Download size': '328 GB', 'License': 'MIT' },
          { 'Model': 'GLM-5.3', 'Maker': 'Zhipu AI (Z.ai)', 'Download size': '756 GB', 'License': 'GLM-5.3 license' },
          { 'Model': 'Kimi-K3', 'Maker': 'Moonshot AI', 'Download size': '1,561 GB', 'License': 'Kimi K3 license' },
          { 'Model': 'MiniMax-H3', 'Maker': 'MiniMax', 'Download size': '498 GB', 'License': 'MiniMax community' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          'All three are viable starting points, and the right choice for your project depends more on task performance (coding, general chat, multilingual support) and on the hardware you have than on compliance considerations, since all three share the same basic "PRC-developed, domestically content-reviewed" profile.',
          'Qwen3.8 is the broadest family and the only one with a model small enough for a single GPU; DeepSeek-V4.1-Flash and GLM-5.3-Flash are the MIT-licensed server-class options; Kimi-K3 and MiniMax-H3 target multi-GPU clusters. Evaluate them the same way you would evaluate any other model family — benchmark on your actual use case — rather than assuming compliance status alone should decide between them.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements (Including GLM)',
        content: [
          '<strong>Plan for at least the size of the weight files in memory, plus room for the KV cache.</strong> For Zhipu AI\'s GLM family that means [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) at about 328 GB and [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) at about 756 GB — a multi-GPU server or a machine with several hundred GB of fast memory, not a consumer GPU.',
          'A server with eight 141 GB accelerators offers about 1,128 GB of GPU memory, which is the class of hardware GLM-5.3 and DeepSeek-V4.1-Flash (510 GB) are built for. Qwen3.8-27B in FP8 (31 GB) fits on a single 48 GB workstation GPU or a 64 GB unified-memory machine with a modest context window.',
          'For exact per-GPU sizing of DeepSeek, see the [DeepSeek hardware requirements guide](/prompt-bites/deepseek-v3-local-hardware-requirements); for choosing a Qwen size, see the [Qwen sizing guide](/prompt-bites/best-qwen-model-for-coding).',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: 'Sourcing Hardware and Software in Mainland China',
        content: [
          '<strong>Weights, runtimes and GPUs each have a separate sourcing path in mainland China.</strong> Hugging Face can be hard to reach from mainland networks; [ModelScope](https://modelscope.cn) is the Chinese model hub where Alibaba publishes Qwen and where many other PRC developers mirror their releases. Verify the publisher account and file checksums before using any mirror.',
          'On the hardware side, the rules on exporting advanced Nvidia GPUs to China have changed several times and availability differs by buyer and channel, so confirm current export-control and import conditions with your supplier and counsel before planning a purchase. Domestic accelerators are an alternative, but check which inference runtimes support them before you commit to a model.',
          'Open-source runtimes such as llama.cpp and vLLM are published on GitHub, which is generally reachable, but internal package mirrors are common in enterprise networks. Plan an offline installation path if your environment is air-gapped.',
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'Fine-Tuning and Self-Hosting Licenses',
        content: [
          '<strong>The license decides whether you can fine-tune, redistribute and deploy commercially — not the compliance profile.</strong> According to the official model cards, [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) is Apache 2.0, [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) and [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) are MIT, while [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3), [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) and the largest Qwen models use custom licenses with their own conditions.',
          'For fine-tuning on your own hardware, a 27B dense model is realistic with parameter-efficient methods such as LoRA; the 300 GB-plus models call for multi-GPU training infrastructure. Read the license text for restrictions on derivative models and on user-count or revenue thresholds before building a product on top.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does running a model locally guarantee regulatory compliance in China?',
            a: 'No. Local deployment addresses different considerations than a public-facing service does, but "locally hosted" is not a blanket compliance guarantee for every possible use case. Confirm your specific situation with legal counsel — this article provides general technical orientation, not a compliance determination.',
          },
          {
            q: 'Can I use a non-PRC model like Llama for a China-facing product?',
            a: 'Technically yes from a pure hosting standpoint if self-hosted, but content alignment and regulatory expectations may differ from domestically developed models. This is a legal and product question as much as a technical one — consult qualified counsel for your specific case.',
          },
          {
            q: 'Is DeepSeek harder to run locally than Qwen?',
            a: 'Hardware requirements depend on the specific model size you choose from each family — see the dedicated DeepSeek-V3 local hardware requirements guide for details. Both families offer a range of sizes suited to different hardware budgets.',
          },
          {
            q: 'Which Chinese open-source LLMs can I download and run locally?',
            a: 'Qwen3.8, DeepSeek-V4.1-Flash, GLM-5.3, Kimi-K3 and MiniMax-H3 all publish open weights on Hugging Face and ModelScope. Only Qwen3.8-27B (56 GB, 31 GB in FP8) is small enough for a single workstation; the others need 300 GB to 1.5 TB of memory.',
          },
          {
            q: 'What are the hardware requirements for Zhipu AI GLM models?',
            a: 'GLM-5.3-Flash weights are about 328 GB and GLM-5.3 about 756 GB, so both need a multi-GPU server or a machine with several hundred GB of memory plus room for the KV cache. Neither runs on a consumer GPU.',
          },
          {
            q: 'Which license is best for fine-tuning and self-hosting?',
            a: 'MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash) and Apache 2.0 (Qwen3.8-27B) are the most permissive among the current releases. GLM-5.3, Kimi-K3 and the largest Qwen models use custom licenses, so read the model card first.',
          },
          {
            q: 'Where do I get models and tools when Hugging Face is hard to reach?',
            a: 'ModelScope hosts Qwen and mirrors many other Chinese releases. Verify the publisher and checksums, and plan an internal mirror or offline installation for runtimes if your network is restricted.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best Qwen Model for Coding?](/prompt-bites/best-qwen-model-for-coding) — sizing a Qwen model to your task',
          '[DeepSeek-V3 Local Hardware Requirements?](/prompt-bites/deepseek-v3-local-hardware-requirements) — hardware sizing for DeepSeek',
          '[Chinese vs English Prompting: Which Is Better?](/prompt-bites/chinese-prompting-vs-english-prompting) — related multilingual considerations',
          '[Run DeepSeek Fully Offline in China (Self-Hosted Setup)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — the complete self-hosted deployment guide',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-ar.webp',
    title: 'أفضل LLM محلي للنشر المتوافق مع الصين القارية؟',
    seoTitle: 'أفضل LLM محلي للنشر المتوافق مع الصين 2026',
    metaDescription: 'Qwen3.8 وDeepSeek-V4.1-Flash وGLM-5.3 هي أبرز نماذج LLM الصينية مفتوحة الأوزان للاستضافة الذاتية: الأحجام والتراخيص والعتاد والتوريد داخل الصين.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: 'المطورون الذين ينشرون نماذج LLM محلية لمنتجات أو فرق موجَّهة للصين القارية',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذجا Qwen (من علي بابا) وDeepSeek هما الأكثر استخدامًا من نماذج LLM المحلية للنشر الموجَّه للصين القارية</strong> — كلاهما مطوَّر من قِبل شركات صينية تُبنى نماذجها بموجب متطلبات مراجعة محتوى محلية. تشغيل أي منهما محليًا بالكامل، على عتادك الخاص، يتجنب الأسئلة التنظيمية المنفصلة التي تنطبق تحديدًا على خدمات الذكاء الاصطناعي التوليدي الموجَّهة للعامة. هذا توجيه عام، وليس استشارة قانونية — تأكد من المتطلبات لنشرك المحدد مع مستشار قانوني.',
    toc: [
      { label: 'أفضل اختيار: Qwen أو DeepSeek أو GLM', anchor: '#best-pick' },
      { label: 'نماذج LLM صينية مفتوحة الأوزان يمكنك تنزيلها', anchor: '#models' },
      { label: 'Qwen مقابل DeepSeek مقابل GLM', anchor: '#comparison' },
      { label: 'متطلبات العتاد (بما في ذلك GLM)', anchor: '#hardware' },
      { label: 'توريد العتاد والبرمجيات في الصين القارية', anchor: '#sourcing' },
      { label: 'تراخيص الضبط الدقيق والاستضافة الذاتية', anchor: '#licensing' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل LLM محلي للنشر المتوافق مع الصين القارية؟',
        answer: 'نماذج Qwen3.8 (علي بابا) وDeepSeek-V4.1-Flash وGLM-5.3 (Zhipu AI) هي الخيارات الصينية الرئيسية مفتوحة الأوزان للنشر الموجَّه للصين — وجميعها من تطوير شركات صينية بموجب معايير مراجعة المحتوى المحلية. أكِّد متطلبات الامتثال الخاصة بك مع مستشار قانوني، فهذا توجيه عام وليس استشارة قانونية.',
        bullets: [
          'يُعدّ Qwen3.8-27B (ترخيص Apache 2.0، حجمه 56 جيجابايت بصيغة BF16) نقطة البداية الأكثر عملية؛ أما DeepSeek-V4.1-Flash وGLM-5.3-Flash (كلاهما MIT) فيتطلبان ذاكرة بمستوى الخوادم.',
          'يُعدّ Kimi-K3 (Moonshot AI) وMiniMax-H3 خيارين آخرين مفتوحَي الأوزان من تطوير شركات صينية، بتراخيص خاصة بهما.',
          'يختلف النشر المحلي المستضاف ذاتيًا عن تشغيل خدمة ذكاء اصطناعي توليدي متاحة للجمهور — ويخضع كلٌّ منهما لاعتبارات تنظيمية مختلفة.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الخيارات الصينية الحالية مفتوحة الأوزان: Qwen3.8 (علي بابا) وDeepSeek-V4.1-Flash وGLM-5.3 (Zhipu AI) — جميعها من تطوير شركات صينية بموجب معايير مراجعة المحتوى المحلية',
          'Qwen3.8-27B (56 جيجابايت) وحده يتسع لمحطة عمل واحدة؛ أما النماذج الرائدة الأخرى فتحتاج من 300 جيجابايت إلى 1.5 تيرابايت من الذاكرة للأوزان فقط',
          'تختلف التراخيص: MIT (DeepSeek-V4.1-Flash وGLM-5.3-Flash) وApache 2.0 (Qwen3.8-27B) وشروط خاصة للنماذج الأكبر — اقرأ بطاقة النموذج قبل الضبط الدقيق أو الاستخدام التجاري',
          'الاستخدام المحلي المستضاف ذاتيًا مسألة تنظيمية مختلفة عن تشغيل خدمة ذكاء اصطناعي عامة — توجيه عام وليس استشارة قانونية',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Qwen أو DeepSeek أو GLM',
        content: [
          '<strong>نماذج Qwen (من تطوير علي بابا) وDeepSeek وGLM (من تطوير Zhipu AI) هي الشائعة الاستخدام بين نماذج LLM الصينية مفتوحة الأوزان للنشر الموجَّه للصين القارية، لأن الثلاثة من تطوير شركات صينية تجري عمليات التدريب والمواءمة لديها أصلًا وفق معايير مراجعة المحتوى المحلية.</strong> واستخدام نماذج طوّرتها جهات محلية، بدلًا من تكييف نموذج أجنبي لاحقًا، هو النهج الأكثر شيوعًا بين الفرق التي تستهدف السوق الصينية.',
          'ابدأ بنموذج [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): هو النموذج الحالي الوحيد من هذه العائلات الرائدة الذي يتسع لمحطة عمل واحدة (56 جيجابايت بصيغة BF16 و31 جيجابايت بصيغة FP8) ويصدر بترخيص Apache 2.0. وانتقل إلى [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) أو [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) عندما تتوفر لديك ذاكرة بمستوى الخوادم وتريد نموذجًا أكبر بترخيص MIT.',
          'من المهم أن تشغيل أيٍّ من هذه النماذج محليًا بالكامل على عتادك الخاص يختلف عن تشغيل خدمة ذكاء اصطناعي توليدي متاحة للجمهور، وهي في الصين القارية تخضع لمتطلبات تنظيمية منفصلة على مستوى الخدمة (تشمل التزامات التسجيل ومراجعة المحتوى التي تسري على الخدمة وليس على النموذج الأساسي فقط؛ راجع هذه [نظرة عامة على التدابير المؤقتة](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)). والاستخدام المحلي أو الداخلي أو غير العام يقع عمومًا خارج تلك المتطلبات — لكن هذا التمييز وكيفية انطباقه على منتجك ينبغي تأكيده مع مستشار قانوني مطّلع على الإطار التنظيمي الحالي، لا حسمه من مقال تقني.',
        ],
      },
      models: {
        id: 'models',
        title: 'نماذج LLM صينية مفتوحة الأوزان يمكنك تنزيلها',
        content: 'هذه أحدث الإصدارات الرائدة مفتوحة الأوزان من أبرز مطوري النماذج الصينيين، مع حجم ملفات الأوزان في كل مستودع رسمي (جرى التحقق في 17 أكتوبر 2026). أُدرجت النماذج الكبيرة لأنها تجيب عن سؤال «أي نماذج LLM صينية يمكنني تشغيلها محليًا» — لكن معظمها يتطلب عتاد خوادم. الأحجام تخص ملفات أوزان safetensors فقط؛ ويضاف إليها ذاكرة السياق المؤقتة وحمل التشغيل. راجع بطاقة كل نموذج للاطلاع على نص الترخيص الدقيق قبل الاستخدام التجاري.',
        columns: ['النموذج', 'المطوِّر', 'حجم التنزيل', 'الترخيص'],
        rows: [
          { 'النموذج': 'Qwen3.8-27B', 'المطوِّر': 'Alibaba', 'حجم التنزيل': '56 GB (BF16) / 31 GB (FP8)', 'الترخيص': 'Apache 2.0' },
          { 'النموذج': 'Qwen3.8-Flash-Next', 'المطوِّر': 'Alibaba', 'حجم التنزيل': '360 GB (BF16)', 'الترخيص': 'مجتمع Qwen' },
          { 'النموذج': 'DeepSeek-V4.1-Flash', 'المطوِّر': 'DeepSeek', 'حجم التنزيل': '510 GB', 'الترخيص': 'MIT' },
          { 'النموذج': 'GLM-5.3-Flash', 'المطوِّر': 'Zhipu AI (Z.ai)', 'حجم التنزيل': '328 GB', 'الترخيص': 'MIT' },
          { 'النموذج': 'GLM-5.3', 'المطوِّر': 'Zhipu AI (Z.ai)', 'حجم التنزيل': '756 GB', 'الترخيص': 'ترخيص GLM-5.3' },
          { 'النموذج': 'Kimi-K3', 'المطوِّر': 'Moonshot AI', 'حجم التنزيل': '1,561 GB', 'الترخيص': 'ترخيص Kimi K3' },
          { 'النموذج': 'MiniMax-H3', 'المطوِّر': 'MiniMax', 'حجم التنزيل': '498 GB', 'الترخيص': 'مجتمع MiniMax' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen مقابل DeepSeek مقابل GLM',
        content: [
          'الثلاثة نقاط انطلاق مناسبة، ويعتمد الاختيار الصحيح لمشروعك على أداء المهمة (البرمجة والمحادثة العامة والدعم متعدد اللغات) وعلى العتاد المتاح أكثر من اعتبارات الامتثال، إذ تشترك جميعها في الملف نفسه: «تطوير صيني ومراجعة محتوى محلية».',
          'Qwen3.8 هي العائلة الأوسع والوحيدة التي لديها نموذج يتسع لوحدة معالجة رسومية واحدة؛ أما DeepSeek-V4.1-Flash وGLM-5.3-Flash فهما خياران بمستوى الخوادم بترخيص MIT؛ ويستهدف Kimi-K3 وMiniMax-H3 عناقيد متعددة وحدات المعالجة. قيِّمها كما تقيّم أي عائلة نماذج أخرى — باختبار أداء على حالة استخدامك الفعلية — بدلًا من ترك حالة الامتثال وحدها تحسم الاختيار.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات العتاد (بما في ذلك GLM)',
        content: [
          '<strong>خطِّط لذاكرة لا تقل عن حجم ملفات الأوزان، مع مساحة إضافية لذاكرة KV المؤقتة.</strong> وفي عائلة GLM من Zhipu AI يعني ذلك نحو 328 جيجابايت لنموذج [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) ونحو 756 جيجابايت لنموذج [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) — أي خادمًا متعدد وحدات المعالجة أو جهازًا بمئات الجيجابايت من الذاكرة السريعة، وليس وحدة معالجة رسومية استهلاكية.',
          'يوفّر خادم بثمانية مسرّعات بسعة 141 جيجابايت لكلٍّ منها نحو 1,128 جيجابايت من ذاكرة وحدات المعالجة، وهي فئة العتاد التي صُمم لها GLM-5.3 وDeepSeek-V4.1-Flash (510 جيجابايت). أما Qwen3.8-27B بصيغة FP8 (31 جيجابايت) فيتسع لوحدة معالجة واحدة لمحطة عمل بسعة 48 جيجابايت أو جهاز بذاكرة موحدة سعتها 64 جيجابايت مع نافذة سياق متواضعة.',
          'للحصول على تحديد دقيق لمتطلبات DeepSeek راجع [دليل متطلبات عتاد DeepSeek](/prompt-bites/deepseek-v3-local-hardware-requirements)؛ ولاختيار حجم Qwen راجع [دليل أحجام Qwen](/prompt-bites/best-qwen-model-for-coding).',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: 'توريد العتاد والبرمجيات في الصين القارية',
        content: [
          '<strong>لكلٍّ من الأوزان وبيئات التشغيل ووحدات المعالجة الرسومية مسار توريد مستقل في الصين القارية.</strong> قد يصعب الوصول إلى Hugging Face من الشبكات داخل البر الرئيسي؛ و[ModelScope](https://modelscope.cn) هو مركز النماذج الصيني الذي تنشر فيه علي بابا نماذج Qwen وتنسخ فيه جهات صينية كثيرة إصداراتها. تحقق من حساب الناشر وقيم التحقق (checksums) قبل استخدام أي نسخة مرآة.',
          'أما في العتاد، فقد تغيّرت قواعد تصدير وحدات Nvidia المتقدمة إلى الصين أكثر من مرة وتختلف إتاحتها بحسب المشتري والقناة؛ فأكِّد شروط التصدير والاستيراد الحالية مع المورّد والمستشار القانوني قبل التخطيط لأي شراء. والمسرّعات المحلية بديل، لكن تحقق أولًا من محركات الاستدلال التي تدعمها.',
          'تُنشر محركات المصدر المفتوح مثل llama.cpp وvLLM على GitHub الذي يمكن الوصول إليه عمومًا، لكن المرايا الداخلية للحزم شائعة في شبكات المؤسسات. خطِّط لمسار تثبيت دون اتصال إذا كانت بيئتك معزولة.',
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'تراخيص الضبط الدقيق والاستضافة الذاتية',
        content: [
          '<strong>الترخيص، لا ملف الامتثال، هو ما يحدد ما إذا كان بإمكانك الضبط الدقيق وإعادة التوزيع والنشر التجاري.</strong> وبحسب بطاقات النماذج الرسمية، فإن [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) بترخيص Apache 2.0، و[DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) و[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) بترخيص MIT، بينما تستخدم [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) و[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) وأكبر نماذج Qwen تراخيص خاصة بشروطها.',
          'للضبط الدقيق على عتادك الخاص، يُعدّ نموذج كثيف بحجم 27B واقعيًا باستخدام طرق كفؤة في المعاملات مثل LoRA؛ أما النماذج التي تتجاوز 300 جيجابايت فتتطلب بنية تدريب متعددة وحدات المعالجة. اقرأ نص الترخيص بحثًا عن قيود على النماذج المشتقة وحدود عدد المستخدمين أو الإيرادات قبل بناء منتج عليها.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يضمن تشغيل نموذج محليًا الامتثال التنظيمي في الصين؟',
            a: 'لا. يعالج النشر المحلي اعتبارات مختلفة عن الخدمة الموجَّهة للعامة، لكن "المُستضاف محليًا" ليس ضمانًا شاملًا للامتثال لكل حالة استخدام ممكنة. تأكد من وضعك المحدد مع مستشار قانوني — تقدم هذه المقالة توجيهًا تقنيًا عامًا، وليس تحديدًا للامتثال.',
          },
          {
            q: 'هل يمكنني استخدام نموذج غير صيني مثل Llama لمنتج موجَّه للصين؟',
            a: 'تقنيًا نعم من منظور استضافة بحت إذا استُضيف ذاتيًا، لكن مواءمة المحتوى والتوقعات التنظيمية قد تختلف عن النماذج المطوَّرة محليًا. هذا سؤال قانوني ومنتجي بقدر ما هو تقني — استشر مستشارًا قانونيًا مؤهلًا لحالتك المحددة.',
          },
          {
            q: 'هل DeepSeek أصعب في التشغيل محليًا من Qwen؟',
            a: 'تعتمد متطلبات العتاد على حجم النموذج المحدد الذي تختاره من كل عائلة — راجع دليل متطلبات عتاد DeepSeek-V3 المحلي المخصص للتفاصيل. تطرح كلتا العائلتين نطاقًا من الأحجام المناسبة لميزانيات عتاد مختلفة.',
          },
          {
            q: 'ما نماذج LLM الصينية مفتوحة المصدر التي يمكنني تنزيلها وتشغيلها محليًا؟',
            a: 'تنشر Qwen3.8 وDeepSeek-V4.1-Flash وGLM-5.3 وKimi-K3 وMiniMax-H3 أوزانًا مفتوحة على Hugging Face وModelScope. Qwen3.8-27B (56 جيجابايت، و31 جيجابايت بصيغة FP8) وحده يتسع لمحطة عمل واحدة؛ أما البقية فتحتاج من 300 جيجابايت إلى 1.5 تيرابايت من الذاكرة.',
          },
          {
            q: 'ما متطلبات العتاد لنماذج GLM من Zhipu AI؟',
            a: 'تبلغ أوزان GLM-5.3-Flash نحو 328 جيجابايت وأوزان GLM-5.3 نحو 756 جيجابايت، لذا يتطلب كلاهما خادمًا متعدد وحدات المعالجة أو جهازًا بمئات الجيجابايت من الذاكرة مع مساحة لذاكرة KV المؤقتة. ولا يعمل أيٌّ منهما على وحدة معالجة رسومية استهلاكية.',
          },
          {
            q: 'أي ترخيص هو الأفضل للضبط الدقيق والاستضافة الذاتية؟',
            a: 'تُعدّ MIT (DeepSeek-V4.1-Flash وGLM-5.3-Flash) وApache 2.0 (Qwen3.8-27B) الأكثر تساهلًا بين الإصدارات الحالية. أما GLM-5.3 وKimi-K3 وأكبر نماذج Qwen فتستخدم تراخيص خاصة، لذا اقرأ بطاقة النموذج أولًا.',
          },
          {
            q: 'من أين أحصل على النماذج والأدوات إذا كان الوصول إلى Hugging Face صعبًا؟',
            a: 'يستضيف ModelScope نماذج Qwen وينسخ كثيرًا من الإصدارات الصينية الأخرى. تحقق من الناشر وقيم التحقق، وخطِّط لمرآة داخلية أو تثبيت دون اتصال لمحركات التشغيل إذا كانت شبكتك مقيّدة.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل نموذج Qwen للأكواد؟](/prompt-bites/best-qwen-model-for-coding) — تحديد حجم نموذج Qwen لمهمتك',
          '[متطلبات عتاد DeepSeek-V3 المحلي؟](/prompt-bites/deepseek-v3-local-hardware-requirements) — تحديد حجم العتاد لـ DeepSeek',
          '[التلقين بالصينية مقابل الإنجليزية: أيهما أفضل؟](/prompt-bites/chinese-prompting-vs-english-prompting) — اعتبارات ذات صلة متعددة اللغات',
          '[تشغيل DeepSeek بشكل كامل دون اتصال في الصين (إعداد ذاتي الاستضافة)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — الدليل الكامل للنشر ذاتي الاستضافة',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-de.webp',
    title: 'Das beste lokale LLM für China-konforme Deployments?',
    seoTitle: 'Bestes lokales LLM für China-konforme Deployments 2026',
    metaDescription: 'Qwen3.8, DeepSeek-V4.1-Flash und GLM-5.3 sind die wichtigsten chinesischen Open-Weight-LLMs zum Selbsthosting: Größen, Lizenzen, Hardware und Beschaffung in China.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: 'Entwickler, die lokale LLMs für China-gerichtete Produkte oder Teams einsetzen',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) und DeepSeek sind die meistgenutzten lokalen LLMs für China-gerichtete Deployments</strong> — beide wurden von chinesischen Unternehmen entwickelt, deren Modelle unter inländischen Content-Review-Anforderungen gebaut werden. Der vollständig lokale Betrieb auf eigener Hardware umgeht die separaten regulatorischen Fragen, die speziell für öffentlich zugängliche generative KI-Dienste gelten. Dies ist allgemeine Orientierung, keine Rechtsberatung — bestätigen Sie die Anforderungen für Ihr spezifisches Deployment mit Rechtsberatung.',
    toc: [
      { label: 'Beste Wahl: Qwen, DeepSeek oder GLM', anchor: '#best-pick' },
      { label: 'Chinesische Open-Weight-LLMs zum Download', anchor: '#models' },
      { label: 'Qwen vs. DeepSeek vs. GLM', anchor: '#comparison' },
      { label: 'Hardwareanforderungen (inkl. GLM)', anchor: '#hardware' },
      { label: 'Hard- und Software-Beschaffung in Festlandchina', anchor: '#sourcing' },
      { label: 'Lizenzen für Fine-Tuning und Selbsthosting', anchor: '#licensing' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Welches lokale LLM eignet sich am besten für China-konforme Deployments?',
        answer: 'Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash und GLM-5.3 (Zhipu AI) sind die wichtigsten chinesischen Open-Weight-Optionen für China-gerichtete Deployments — alle drei werden von chinesischen Unternehmen unter inländischen Content-Review-Normen gebaut. Bestätigen Sie Ihre spezifischen Compliance-Anforderungen mit Rechtsberatung, da dies allgemeine Orientierung, keine Rechtsberatung ist.',
        bullets: [
          'Qwen3.8-27B (Apache 2.0, 56 GB in BF16) ist der praktischste Einstieg; DeepSeek-V4.1-Flash und GLM-5.3-Flash (beide MIT) benötigen Speicher in Serverklasse.',
          'Kimi-K3 (Moonshot AI) und MiniMax-H3 sind weitere in China entwickelte Open-Weight-Optionen mit eigenen Lizenzen.',
          'Lokales, selbst gehostetes Deployment unterscheidet sich vom Betrieb eines öffentlich zugänglichen generativen KI-Dienstes — beide unterliegen unterschiedlichen regulatorischen Überlegungen.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Aktuelle chinesische Open-Weight-Optionen: Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash und GLM-5.3 (Zhipu AI) — alle von chinesischen Unternehmen unter inländischen Content-Review-Normen entwickelt',
          'Nur Qwen3.8-27B (56 GB) ist klein genug für eine einzelne Workstation; die anderen Flaggschiffe brauchen allein für die Gewichte 300 GB bis 1,5 TB Speicher',
          'Die Lizenzen unterscheiden sich: MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash), Apache 2.0 (Qwen3.8-27B), eigene Bedingungen bei den größten Modellen — lesen Sie die Model Card vor Fine-Tuning oder kommerzieller Nutzung',
          'Lokale, selbst gehostete Nutzung ist eine andere regulatorische Frage als der Betrieb eines öffentlich zugänglichen KI-Dienstes — dies ist allgemeine Orientierung, keine Rechtsberatung',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Qwen, DeepSeek oder GLM',
        content: [
          '<strong>Qwen (entwickelt von Alibaba), DeepSeek und GLM (entwickelt von Zhipu AI) sind die weit verbreiteten chinesischen Open-Weight-LLMs für China-gerichtete Deployments, da alle drei von chinesischen Unternehmen entwickelt werden, deren Trainings- und Alignment-Prozesse bereits unter inländischen Content-Review-Normen ablaufen.</strong> Die Nutzung von Modellen inländischer Entwickler, statt ein ausländisches Modell nachträglich anzupassen, ist der gängigere Ansatz für Teams, die den China-Markt anvisieren.',
          'Beginnen Sie mit [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): Es ist das einzige aktuelle Modell der Flaggschiff-Familien, das auf eine Workstation passt (56 GB in BF16, 31 GB in FP8), und steht unter Apache 2.0. Wechseln Sie zu [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) oder [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash), wenn Sie Speicher in Serverklasse haben und ein größeres Modell unter MIT-Lizenz wünschen.',
          'Wichtig ist: Der vollständig lokale Betrieb eines dieser Modelle auf eigener Hardware unterscheidet sich vom Betrieb eines öffentlich zugänglichen generativen KI-Dienstes, der in Festlandchina separaten dienstbezogenen regulatorischen Anforderungen unterliegt (einschließlich Registrierungs- und Content-Review-Pflichten, die für den Dienst gelten, nicht nur das zugrunde liegende Modell; siehe diesen [Überblick zu den Interim Measures](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)). Lokale, interne oder nicht-öffentliche Nutzung fällt im Allgemeinen nicht unter diese spezifischen dienstbezogenen Anforderungen — aber diese Unterscheidung und wie sie auf Ihr Produkt zutrifft, ist mit Rechtsberatung zu bestätigen, die mit der aktuellen Rechtslage vertraut ist, und nicht anhand eines technischen Blogbeitrags zu entscheiden.',
        ],
      },
      models: {
        id: 'models',
        title: 'Chinesische Open-Weight-LLMs zum Download',
        content: 'Dies sind die aktuellen Open-Weight-Flaggschiffe der wichtigsten chinesischen Modellentwickler, mit der Größe der Gewichtsdateien im jeweiligen offiziellen Repository (geprüft am 17. Oktober 2026). Größere Modelle sind aufgeführt, weil sie die Antwort auf „welche chinesischen LLMs kann ich lokal betreiben" sind — die meisten benötigen jedoch Serverhardware. Die Größen beziehen sich nur auf die Safetensors-Gewichtsdateien; Kontext-Cache und Laufzeit-Overhead kommen hinzu. Prüfen Sie vor kommerzieller Nutzung den genauen Lizenztext in der jeweiligen Model Card.',
        columns: ['Modell', 'Hersteller', 'Downloadgröße', 'Lizenz'],
        rows: [
          { 'Modell': 'Qwen3.8-27B', 'Hersteller': 'Alibaba', 'Downloadgröße': '56 GB (BF16) / 31 GB (FP8)', 'Lizenz': 'Apache 2.0' },
          { 'Modell': 'Qwen3.8-Flash-Next', 'Hersteller': 'Alibaba', 'Downloadgröße': '360 GB (BF16)', 'Lizenz': 'Qwen Community' },
          { 'Modell': 'DeepSeek-V4.1-Flash', 'Hersteller': 'DeepSeek', 'Downloadgröße': '510 GB', 'Lizenz': 'MIT' },
          { 'Modell': 'GLM-5.3-Flash', 'Hersteller': 'Zhipu AI (Z.ai)', 'Downloadgröße': '328 GB', 'Lizenz': 'MIT' },
          { 'Modell': 'GLM-5.3', 'Hersteller': 'Zhipu AI (Z.ai)', 'Downloadgröße': '756 GB', 'Lizenz': 'GLM-5.3-Lizenz' },
          { 'Modell': 'Kimi-K3', 'Hersteller': 'Moonshot AI', 'Downloadgröße': '1,561 GB', 'Lizenz': 'Kimi-K3-Lizenz' },
          { 'Modell': 'MiniMax-H3', 'Hersteller': 'MiniMax', 'Downloadgröße': '498 GB', 'Lizenz': 'MiniMax Community' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs. DeepSeek vs. GLM',
        content: [
          'Alle drei sind tragfähige Ausgangspunkte, und die richtige Wahl hängt eher von der Aufgabenleistung (Coding, allgemeiner Chat, mehrsprachiger Support) und der vorhandenen Hardware ab als von Compliance-Überlegungen, da alle drei dasselbe Profil „chinesisch entwickelt, inländisch content-reviewed" teilen.',
          'Qwen3.8 ist die breiteste Familie und die einzige mit einem Modell, das auf eine einzelne GPU passt; DeepSeek-V4.1-Flash und GLM-5.3-Flash sind die MIT-lizenzierten Optionen der Serverklasse; Kimi-K3 und MiniMax-H3 zielen auf Multi-GPU-Cluster. Bewerten Sie sie wie jede andere Modellfamilie — benchmarken Sie an Ihrem tatsächlichen Anwendungsfall —, statt anzunehmen, dass allein der Compliance-Status entscheiden sollte.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardwareanforderungen (inkl. GLM)',
        content: [
          '<strong>Planen Sie mindestens die Größe der Gewichtsdateien als Speicher ein, plus Platz für den KV-Cache.</strong> Für die GLM-Familie von Zhipu AI bedeutet das: [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) mit etwa 328 GB und [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) mit etwa 756 GB — ein Multi-GPU-Server oder eine Maschine mit mehreren hundert GB schnellem Speicher, keine Consumer-GPU.',
          'Ein Server mit acht 141-GB-Beschleunigern bietet rund 1.128 GB GPU-Speicher — die Hardwareklasse, für die GLM-5.3 und DeepSeek-V4.1-Flash (510 GB) ausgelegt sind. Qwen3.8-27B in FP8 (31 GB) passt auf eine einzelne 48-GB-Workstation-GPU oder einen Rechner mit 64 GB Unified Memory bei moderatem Kontextfenster.',
          'Für die genaue GPU-Dimensionierung von DeepSeek siehe den [Guide zu DeepSeek-Hardwareanforderungen](/prompt-bites/deepseek-v3-local-hardware-requirements); für die Wahl der Qwen-Größe den [Qwen-Größenguide](/prompt-bites/best-qwen-model-for-coding).',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: 'Hard- und Software-Beschaffung in Festlandchina',
        content: [
          '<strong>Gewichte, Laufzeitumgebungen und GPUs haben in Festlandchina jeweils einen eigenen Beschaffungsweg.</strong> Hugging Face ist aus Netzen auf dem Festland teils schwer erreichbar; [ModelScope](https://modelscope.cn) ist der chinesische Modell-Hub, auf dem Alibaba Qwen veröffentlicht und auf dem viele weitere chinesische Entwickler ihre Releases spiegeln. Prüfen Sie vor der Nutzung eines Mirrors das Publisher-Konto und die Dateiprüfsummen.',
          'Bei der Hardware haben sich die Regeln für den Export moderner Nvidia-GPUs nach China mehrfach geändert, und die Verfügbarkeit hängt von Käufer und Vertriebsweg ab; klären Sie die aktuellen Export- und Importbedingungen mit Lieferant und Rechtsberatung, bevor Sie einen Kauf planen. Inländische Beschleuniger sind eine Alternative, prüfen Sie aber vorab, welche Inferenz-Laufzeiten sie unterstützen.',
          'Open-Source-Laufzeiten wie llama.cpp und vLLM werden auf GitHub veröffentlicht, das in der Regel erreichbar ist; in Unternehmensnetzen sind jedoch interne Paket-Mirrors üblich. Planen Sie einen Offline-Installationsweg, wenn Ihre Umgebung abgeschottet ist.',
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'Lizenzen für Fine-Tuning und Selbsthosting',
        content: [
          '<strong>Die Lizenz entscheidet, ob Sie feinabstimmen, weiterverbreiten und kommerziell einsetzen dürfen — nicht das Compliance-Profil.</strong> Laut den offiziellen Model Cards steht [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) unter Apache 2.0, [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) und [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) unter MIT, während [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3), [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) und die größten Qwen-Modelle eigene Lizenzen mit eigenen Bedingungen nutzen.',
          'Für Fine-Tuning auf eigener Hardware ist ein dichtes 27B-Modell mit parametereffizienten Methoden wie LoRA realistisch; die Modelle jenseits von 300 GB erfordern Multi-GPU-Trainingsinfrastruktur. Lesen Sie den Lizenztext auf Einschränkungen für abgeleitete Modelle sowie Nutzerzahl- oder Umsatzgrenzen, bevor Sie ein Produkt darauf aufbauen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Garantiert der lokale Betrieb eines Modells regulatorische Compliance in China?',
            a: 'Nein. Lokales Deployment adressiert andere Überlegungen als ein öffentlich zugänglicher Dienst, aber „lokal gehostet" ist keine pauschale Compliance-Garantie für jeden denkbaren Anwendungsfall. Bestätigen Sie Ihre spezifische Situation mit Rechtsberatung — dieser Artikel bietet allgemeine technische Orientierung, keine Compliance-Feststellung.',
          },
          {
            q: 'Kann ich ein Nicht-PRC-Modell wie Llama für ein China-gerichtetes Produkt nutzen?',
            a: 'Technisch ja aus reiner Hosting-Sicht bei Selbsthosting, aber Content-Alignment und regulatorische Erwartungen können sich von inländisch entwickelten Modellen unterscheiden. Das ist ebenso sehr eine rechtliche wie eine produktbezogene Frage — konsultieren Sie qualifizierte Rechtsberatung für Ihren spezifischen Fall.',
          },
          {
            q: 'Ist DeepSeek schwieriger lokal zu betreiben als Qwen?',
            a: 'Die Hardwareanforderungen hängen von der spezifischen Modellgröße ab, die Sie aus jeder Familie wählen — siehe den eigenen Guide zu DeepSeek-V3-Hardwareanforderungen für Details. Beide Familien bieten eine Reihe von Größen für unterschiedliche Hardwarebudgets.',
          },
          {
            q: 'Welche chinesischen Open-Source-LLMs kann ich herunterladen und lokal betreiben?',
            a: 'Qwen3.8, DeepSeek-V4.1-Flash, GLM-5.3, Kimi-K3 und MiniMax-H3 veröffentlichen offene Gewichte auf Hugging Face und ModelScope. Nur Qwen3.8-27B (56 GB, 31 GB in FP8) ist klein genug für eine einzelne Workstation; die anderen benötigen 300 GB bis 1,5 TB Speicher.',
          },
          {
            q: 'Welche Hardware brauchen die GLM-Modelle von Zhipu AI?',
            a: 'Die Gewichte von GLM-5.3-Flash umfassen etwa 328 GB, die von GLM-5.3 etwa 756 GB; beide benötigen einen Multi-GPU-Server oder eine Maschine mit mehreren hundert GB Speicher plus Platz für den KV-Cache. Auf einer Consumer-GPU laufen beide nicht.',
          },
          {
            q: 'Welche Lizenz eignet sich am besten für Fine-Tuning und Selbsthosting?',
            a: 'MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash) und Apache 2.0 (Qwen3.8-27B) sind unter den aktuellen Releases am freizügigsten. GLM-5.3, Kimi-K3 und die größten Qwen-Modelle nutzen eigene Lizenzen — lesen Sie zuerst die Model Card.',
          },
          {
            q: 'Wo bekomme ich Modelle und Tools, wenn Hugging Face schwer erreichbar ist?',
            a: 'ModelScope hostet Qwen und spiegelt viele weitere chinesische Releases. Prüfen Sie Publisher und Prüfsummen und planen Sie bei eingeschränktem Netz einen internen Mirror oder eine Offline-Installation der Laufzeiten.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Bestes Qwen-Modell für Coding?](/prompt-bites/best-qwen-model-for-coding) — ein Qwen-Modell auf Ihre Aufgabe abstimmen',
          '[DeepSeek-V3-Hardwareanforderungen für den lokalen Betrieb?](/prompt-bites/deepseek-v3-local-hardware-requirements) — Hardware-Dimensionierung für DeepSeek',
          '[Chinesisch vs. Englisch Prompting: Was ist besser?](/prompt-bites/chinese-prompting-vs-english-prompting) — verwandte mehrsprachige Überlegungen',
          '[DeepSeek in China vollständig offline betreiben (Self-Hosted-Setup)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — der vollständige Leitfaden zur selbst gehosteten Bereitstellung',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-es.webp',
    title: '¿Cuál es el Mejor LLM Local para Despliegues Compatibles con China Continental?',
    seoTitle: 'Mejor LLM Local para Despliegue Compatible con China 2026',
    metaDescription: 'Qwen3.8, DeepSeek-V4.1-Flash y GLM-5.3 son los principales LLM chinos open-weight para autoalojar: tamaños, licencias, hardware y adquisición en China.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: 'Desarrolladores que despliegan LLM locales para productos o equipos orientados a China continental',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) y DeepSeek son los LLM locales más usados para despliegues orientados a China continental</strong> — ambos son desarrollados por empresas de la RPC cuyos modelos se construyen bajo requisitos nacionales de revisión de contenido. Ejecutar cualquiera de los dos completamente en local, en tu propio hardware, evita las cuestiones regulatorias separadas que aplican específicamente a los servicios públicos de IA generativa. Esto es orientación general, no asesoría legal — confirma los requisitos de tu despliegue específico con asesoría legal.',
    toc: [
      { label: 'Mejor opción: Qwen, DeepSeek o GLM', anchor: '#best-pick' },
      { label: 'LLM chinos open-weight que puede descargar', anchor: '#models' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'Requisitos de hardware (incluido GLM)', anchor: '#hardware' },
      { label: 'Adquirir hardware y software en China continental', anchor: '#sourcing' },
      { label: 'Licencias para fine-tuning y autoalojamiento', anchor: '#licensing' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Qué LLM local es el mejor para despliegues compatibles con China continental?',
        answer: 'Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash y GLM-5.3 (Zhipu AI) son las principales opciones open-weight chinas para despliegues orientados a China — las tres desarrolladas por empresas chinas bajo normas nacionales de revisión de contenido. Confirme sus requisitos de cumplimiento con un abogado, ya que esto es orientación general, no asesoramiento jurídico.',
        bullets: [
          'Qwen3.8-27B (Apache 2.0, 56 GB en BF16) es el punto de partida más práctico; DeepSeek-V4.1-Flash y GLM-5.3-Flash (ambos MIT) requieren memoria de clase servidor.',
          'Kimi-K3 (Moonshot AI) y MiniMax-H3 son otras opciones open-weight desarrolladas en China, con licencias propias.',
          'El despliegue local autoalojado difiere de operar un servicio de IA generativa de cara al público — ambos están sujetos a consideraciones regulatorias distintas.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Opciones open-weight chinas actuales: Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash y GLM-5.3 (Zhipu AI) — todas desarrolladas por empresas chinas bajo normas nacionales de revisión de contenido',
          'Solo Qwen3.8-27B (56 GB) cabe en una estación de trabajo; los demás modelos insignia necesitan de 300 GB a 1,5 TB de memoria solo para los pesos',
          'Las licencias difieren: MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash), Apache 2.0 (Qwen3.8-27B), condiciones propias en los modelos más grandes — lea la ficha del modelo antes de hacer fine-tuning o uso comercial',
          'El uso local autoalojado es una cuestión regulatoria distinta de operar un servicio de IA público — orientación general, no asesoramiento jurídico',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: Qwen, DeepSeek o GLM',
        content: [
          '<strong>Qwen (desarrollado por Alibaba), DeepSeek y GLM (desarrollado por Zhipu AI) son los LLM chinos open-weight muy utilizados para despliegues orientados a China continental, ya que los tres los desarrollan empresas chinas cuyos procesos de entrenamiento y alineación ya operan bajo normas nacionales de revisión de contenido.</strong> Usar modelos creados por desarrolladores nacionales, en lugar de adaptar a posteriori un modelo extranjero, es el enfoque más común entre los equipos que apuntan al mercado chino.',
          'Empiece con [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): es el único modelo actual de estas familias insignia que cabe en una estación de trabajo (56 GB en BF16, 31 GB en FP8) y se publica bajo Apache 2.0. Pase a [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) o [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) cuando disponga de memoria de clase servidor y quiera un modelo mayor con licencia MIT.',
          'Es importante señalar que ejecutar cualquiera de estos modelos totalmente en local con su propio hardware es una situación distinta de operar un servicio de IA generativa de cara al público, que en China continental está sujeto a requisitos regulatorios propios del servicio (incluidas obligaciones de registro y revisión de contenido que recaen sobre el servicio, no solo sobre el modelo; consulte este [resumen de las Interim Measures](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)). El uso local, interno o no público queda en general fuera de esos requisitos — pero esta distinción y su aplicación a su producto debe confirmarse con un abogado que conozca el marco regulatorio vigente, no decidirse a partir de un artículo técnico.',
        ],
      },
      models: {
        id: 'models',
        title: 'LLM chinos open-weight que puede descargar',
        content: 'Estos son los lanzamientos insignia open-weight actuales de los principales desarrolladores chinos, con el tamaño de los archivos de pesos en cada repositorio oficial (comprobado el 17 de octubre de 2026). Se incluyen los modelos grandes porque responden a «qué LLM chinos puedo ejecutar en local» — pero la mayoría requiere hardware de servidor. Los tamaños corresponden solo a los archivos de pesos safetensors; la caché de contexto y la sobrecarga del entorno de ejecución se suman. Consulte la ficha de cada modelo para el texto exacto de la licencia antes del uso comercial.',
        columns: ['Modelo', 'Desarrollador', 'Tamaño de descarga', 'Licencia'],
        rows: [
          { 'Modelo': 'Qwen3.8-27B', 'Desarrollador': 'Alibaba', 'Tamaño de descarga': '56 GB (BF16) / 31 GB (FP8)', 'Licencia': 'Apache 2.0' },
          { 'Modelo': 'Qwen3.8-Flash-Next', 'Desarrollador': 'Alibaba', 'Tamaño de descarga': '360 GB (BF16)', 'Licencia': 'Comunidad Qwen' },
          { 'Modelo': 'DeepSeek-V4.1-Flash', 'Desarrollador': 'DeepSeek', 'Tamaño de descarga': '510 GB', 'Licencia': 'MIT' },
          { 'Modelo': 'GLM-5.3-Flash', 'Desarrollador': 'Zhipu AI (Z.ai)', 'Tamaño de descarga': '328 GB', 'Licencia': 'MIT' },
          { 'Modelo': 'GLM-5.3', 'Desarrollador': 'Zhipu AI (Z.ai)', 'Tamaño de descarga': '756 GB', 'Licencia': 'Licencia GLM-5.3' },
          { 'Modelo': 'Kimi-K3', 'Desarrollador': 'Moonshot AI', 'Tamaño de descarga': '1,561 GB', 'Licencia': 'Licencia Kimi K3' },
          { 'Modelo': 'MiniMax-H3', 'Desarrollador': 'MiniMax', 'Tamaño de descarga': '498 GB', 'Licencia': 'Comunidad MiniMax' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          'Las tres son puntos de partida viables, y la elección correcta depende más del rendimiento en la tarea (código, chat general, soporte multilingüe) y del hardware disponible que del cumplimiento, ya que comparten el mismo perfil «desarrollado en China, con revisión de contenido nacional».',
          'Qwen3.8 es la familia más amplia y la única con un modelo que cabe en una sola GPU; DeepSeek-V4.1-Flash y GLM-5.3-Flash son las opciones de clase servidor con licencia MIT; Kimi-K3 y MiniMax-H3 apuntan a clústeres multi-GPU. Evalúelas como cualquier otra familia de modelos — con benchmarks sobre su caso de uso real — en lugar de dejar que el estado de cumplimiento decida por sí solo.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware (incluido GLM)',
        content: [
          '<strong>Prevea como mínimo el tamaño de los archivos de pesos en memoria, más espacio para la caché KV.</strong> Para la familia GLM de Zhipu AI eso significa unos 328 GB para [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) y unos 756 GB para [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) — un servidor multi-GPU o una máquina con varios cientos de GB de memoria rápida, no una GPU de consumo.',
          'Un servidor con ocho aceleradores de 141 GB ofrece unos 1.128 GB de memoria de GPU, la clase de hardware para la que están pensados GLM-5.3 y DeepSeek-V4.1-Flash (510 GB). Qwen3.8-27B en FP8 (31 GB) cabe en una sola GPU de estación de trabajo de 48 GB o en un equipo de 64 GB de memoria unificada con una ventana de contexto modesta.',
          'Para dimensionar DeepSeek con precisión, consulte la [guía de requisitos de hardware de DeepSeek](/prompt-bites/deepseek-v3-local-hardware-requirements); para elegir tamaño de Qwen, la [guía de tamaños de Qwen](/prompt-bites/best-qwen-model-for-coding).',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: 'Adquirir hardware y software en China continental',
        content: [
          '<strong>Los pesos, los entornos de ejecución y las GPU tienen cada uno su propia vía de adquisición en China continental.</strong> Hugging Face puede ser difícil de alcanzar desde redes del continente; [ModelScope](https://modelscope.cn) es el hub de modelos chino donde Alibaba publica Qwen y donde muchos otros desarrolladores chinos replican sus lanzamientos. Verifique la cuenta del publicador y las sumas de verificación antes de usar un espejo.',
          'En cuanto al hardware, las normas de exportación de GPU Nvidia avanzadas a China han cambiado varias veces y la disponibilidad varía según comprador y canal; confirme las condiciones vigentes de exportación e importación con su proveedor y un abogado antes de planificar una compra. Los aceleradores nacionales son una alternativa, pero compruebe antes qué motores de inferencia los admiten.',
          'Los motores de código abierto como llama.cpp y vLLM se publican en GitHub, normalmente accesible, aunque en redes corporativas son habituales los espejos internos de paquetes. Prevea una vía de instalación sin conexión si su entorno está aislado.',
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'Licencias para fine-tuning y autoalojamiento',
        content: [
          '<strong>La licencia, no el perfil de cumplimiento, decide si puede afinar, redistribuir y desplegar comercialmente.</strong> Según las fichas oficiales, [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) es Apache 2.0, [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) y [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) son MIT, mientras que [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3), [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) y los modelos Qwen más grandes usan licencias propias con condiciones específicas.',
          'Para hacer fine-tuning en su propio hardware, un modelo denso de 27B es realista con métodos eficientes en parámetros como LoRA; los modelos de más de 300 GB requieren infraestructura de entrenamiento multi-GPU. Lea la licencia por si restringe modelos derivados o fija umbrales de usuarios o ingresos antes de construir un producto sobre ellos.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Garantiza ejecutar un modelo localmente el cumplimiento regulatorio en China?',
            a: 'No. El despliegue local aborda consideraciones diferentes a las de un servicio público, pero "alojado localmente" no es una garantía de cumplimiento general para cada caso de uso posible. Confirma tu situación específica con asesoría legal — este artículo ofrece orientación técnica general, no una determinación de cumplimiento.',
          },
          {
            q: '¿Puedo usar un modelo no desarrollado en la RPC como Llama para un producto orientado a China?',
            a: 'Técnicamente sí desde un punto de vista puramente de alojamiento si es autoalojado, pero la alineación de contenido y las expectativas regulatorias pueden diferir de los modelos desarrollados nacionalmente. Esta es una cuestión tanto legal como de producto, tanto como técnica — consulta con asesoría calificada para tu caso específico.',
          },
          {
            q: '¿Es DeepSeek más difícil de ejecutar localmente que Qwen?',
            a: 'Los requisitos de hardware dependen del tamaño de modelo específico que elijas de cada familia — consulta la guía dedicada de requisitos de hardware local de DeepSeek-V3 para más detalles. Ambas familias ofrecen una gama de tamaños adecuados para distintos presupuestos de hardware.',
          },
          {
            q: '¿Qué LLM chinos de código abierto puedo descargar y ejecutar en local?',
            a: 'Qwen3.8, DeepSeek-V4.1-Flash, GLM-5.3, Kimi-K3 y MiniMax-H3 publican pesos abiertos en Hugging Face y ModelScope. Solo Qwen3.8-27B (56 GB, 31 GB en FP8) cabe en una estación de trabajo; los demás necesitan de 300 GB a 1,5 TB de memoria.',
          },
          {
            q: '¿Qué hardware requieren los modelos GLM de Zhipu AI?',
            a: 'Los pesos de GLM-5.3-Flash ocupan unos 328 GB y los de GLM-5.3 unos 756 GB, por lo que ambos requieren un servidor multi-GPU o una máquina con varios cientos de GB de memoria más espacio para la caché KV. Ninguno funciona en una GPU de consumo.',
          },
          {
            q: '¿Qué licencia conviene más para fine-tuning y autoalojamiento?',
            a: 'MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash) y Apache 2.0 (Qwen3.8-27B) son las más permisivas entre las versiones actuales. GLM-5.3, Kimi-K3 y los modelos Qwen más grandes usan licencias propias; lea primero la ficha del modelo.',
          },
          {
            q: '¿Dónde consigo modelos y herramientas si Hugging Face es difícil de alcanzar?',
            a: 'ModelScope aloja Qwen y replica muchos otros lanzamientos chinos. Verifique el publicador y las sumas de verificación, y prevea un espejo interno o una instalación sin conexión de los motores si su red está restringida.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Mejor Modelo Qwen para Programar?](/prompt-bites/best-qwen-model-for-coding) — dimensionando un modelo Qwen a tu tarea',
          '[¿Requisitos de Hardware Local para DeepSeek-V3?](/prompt-bites/deepseek-v3-local-hardware-requirements) — dimensionamiento de hardware para DeepSeek',
          '[Prompting en Chino vs Inglés: ¿Cuál Es Mejor?](/prompt-bites/chinese-prompting-vs-english-prompting) — consideraciones multilingües relacionadas',
          '[Ejecutar DeepSeek totalmente offline en China (configuración autoalojada)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — la guía completa de implementación autoalojada',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-fr.webp',
    title: 'Quel est le meilleur LLM local pour les déploiements conformes à la Chine continentale ?',
    seoTitle: 'Meilleur LLM local pour déploiement conforme en Chine 2026',
    metaDescription: 'Qwen3.8, DeepSeek-V4.1-Flash et GLM-5.3 sont les principaux LLM chinois open-weight à auto-héberger : tailles, licences, matériel et approvisionnement en Chine.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: 'Développeurs déployant des LLM locaux pour des produits ou équipes destinés à la Chine continentale',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) et DeepSeek sont les LLM locaux les plus utilisés pour les déploiements destinés à la Chine continentale</strong> — tous deux sont développés par des entreprises chinoises dont les modèles sont construits selon des exigences de contrôle de contenu domestiques. Exécuter l\'un ou l\'autre entièrement en local, sur votre propre matériel, permet d\'éviter les questions réglementaires distinctes qui s\'appliquent spécifiquement aux services d\'IA générative destinés au public. Il s\'agit d\'une orientation générale, pas d\'un conseil juridique — confirmez les exigences de votre déploiement spécifique auprès d\'un conseil juridique.',
    toc: [
      { label: 'Meilleur choix : Qwen, DeepSeek ou GLM', anchor: '#best-pick' },
      { label: 'LLM chinois open-weight à télécharger', anchor: '#models' },
      { label: 'Qwen face à DeepSeek face à GLM', anchor: '#comparison' },
      { label: 'Configuration matérielle requise (GLM inclus)', anchor: '#hardware' },
      { label: 'Se procurer matériel et logiciels en Chine continentale', anchor: '#sourcing' },
      { label: 'Licences pour le fine-tuning et l\'auto-hébergement', anchor: '#licensing' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel LLM local est le meilleur pour les déploiements conformes à la Chine continentale ?',
        answer: 'Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash et GLM-5.3 (Zhipu AI) sont les principales options open-weight chinoises pour les déploiements destinés à la Chine — toutes trois conçues par des entreprises chinoises selon les normes nationales de contrôle de contenu. Confirmez vos exigences de conformité avec un conseil juridique : il s\'agit d\'une orientation générale, pas d\'un avis juridique.',
        bullets: [
          'Qwen3.8-27B (Apache 2.0, 56 Go en BF16) est le point de départ le plus pratique ; DeepSeek-V4.1-Flash et GLM-5.3-Flash (tous deux MIT) exigent une mémoire de classe serveur.',
          'Kimi-K3 (Moonshot AI) et MiniMax-H3 sont d\'autres options open-weight développées en Chine, sous licences propres.',
          'Le déploiement local auto-hébergé diffère de l\'exploitation d\'un service d\'IA générative public — les deux relèvent de considérations réglementaires différentes.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Choix open-weight chinois actuels : Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash et GLM-5.3 (Zhipu AI) — tous développés par des entreprises chinoises selon les normes nationales de contrôle de contenu',
          'Seul Qwen3.8-27B (56 Go) tient sur une station de travail ; les autres modèles phares exigent de 300 Go à 1,5 To de mémoire rien que pour les poids',
          'Les licences diffèrent : MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash), Apache 2.0 (Qwen3.8-27B), conditions propres pour les plus grands modèles — lisez la fiche du modèle avant tout fine-tuning ou usage commercial',
          'L\'usage local auto-hébergé est une question réglementaire distincte de l\'exploitation d\'un service d\'IA public — orientation générale, pas un avis juridique',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Qwen, DeepSeek ou GLM',
        content: [
          '<strong>Qwen (développé par Alibaba), DeepSeek et GLM (développé par Zhipu AI) sont les LLM chinois open-weight très utilisés pour les déploiements destinés à la Chine continentale, car tous trois sont développés par des entreprises chinoises dont les processus d\'entraînement et d\'alignement suivent déjà les normes nationales de contrôle de contenu.</strong> Utiliser des modèles conçus par des développeurs nationaux, plutôt que d\'adapter après coup un modèle étranger, est l\'approche la plus courante pour les équipes visant le marché chinois.',
          'Commencez par [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) : c\'est le seul modèle actuel de ces familles phares qui tienne sur une station de travail (56 Go en BF16, 31 Go en FP8), sous licence Apache 2.0. Passez à [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) ou [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) si vous disposez d\'une mémoire de classe serveur et voulez un modèle plus grand sous licence MIT.',
          'Point important : exécuter l\'un de ces modèles entièrement en local sur votre propre matériel est une situation différente de l\'exploitation d\'un service d\'IA générative public, soumis en Chine continentale à des exigences réglementaires propres au service (dont des obligations d\'enregistrement et de contrôle de contenu qui visent le service, pas seulement le modèle sous-jacent ; voir cet [aperçu des Interim Measures](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)). L\'usage local, interne ou non public se situe généralement hors de ces exigences — mais cette distinction et son application à votre produit doivent être confirmées avec un conseil juridique connaissant le cadre réglementaire actuel, et non tranchées à partir d\'un article technique.',
        ],
      },
      models: {
        id: 'models',
        title: 'LLM chinois open-weight à télécharger',
        content: 'Voici les versions phares open-weight actuelles des principaux développeurs chinois, avec la taille des fichiers de poids dans chaque dépôt officiel (vérifié le 17 octobre 2026). Les plus grands modèles figurent ici car ils répondent à « quels LLM chinois puis-je exécuter en local » — mais la plupart exigent du matériel serveur. Les tailles correspondent aux seuls fichiers de poids safetensors ; le cache de contexte et la surcharge d\'exécution s\'y ajoutent. Consultez la fiche de chaque modèle pour le texte exact de la licence avant tout usage commercial.',
        columns: ['Modèle', 'Éditeur', 'Taille à télécharger', 'Licence'],
        rows: [
          { 'Modèle': 'Qwen3.8-27B', 'Éditeur': 'Alibaba', 'Taille à télécharger': '56 GB (BF16) / 31 GB (FP8)', 'Licence': 'Apache 2.0' },
          { 'Modèle': 'Qwen3.8-Flash-Next', 'Éditeur': 'Alibaba', 'Taille à télécharger': '360 GB (BF16)', 'Licence': 'Communauté Qwen' },
          { 'Modèle': 'DeepSeek-V4.1-Flash', 'Éditeur': 'DeepSeek', 'Taille à télécharger': '510 GB', 'Licence': 'MIT' },
          { 'Modèle': 'GLM-5.3-Flash', 'Éditeur': 'Zhipu AI (Z.ai)', 'Taille à télécharger': '328 GB', 'Licence': 'MIT' },
          { 'Modèle': 'GLM-5.3', 'Éditeur': 'Zhipu AI (Z.ai)', 'Taille à télécharger': '756 GB', 'Licence': 'Licence GLM-5.3' },
          { 'Modèle': 'Kimi-K3', 'Éditeur': 'Moonshot AI', 'Taille à télécharger': '1,561 GB', 'Licence': 'Licence Kimi K3' },
          { 'Modèle': 'MiniMax-H3', 'Éditeur': 'MiniMax', 'Taille à télécharger': '498 GB', 'Licence': 'Communauté MiniMax' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen face à DeepSeek face à GLM',
        content: [
          'Les trois sont des points de départ viables, et le bon choix dépend davantage de la performance sur la tâche (code, chat général, multilingue) et du matériel disponible que de la conformité, puisque tous partagent le même profil « développé en Chine, contrôle de contenu national ».',
          'Qwen3.8 est la famille la plus large et la seule dont un modèle tient sur un seul GPU ; DeepSeek-V4.1-Flash et GLM-5.3-Flash sont les options de classe serveur sous licence MIT ; Kimi-K3 et MiniMax-H3 visent les clusters multi-GPU. Évaluez-les comme n\'importe quelle famille de modèles — par un benchmark sur votre cas d\'usage — plutôt que de laisser le seul statut de conformité trancher.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Configuration matérielle requise (GLM inclus)',
        content: [
          '<strong>Prévoyez au minimum la taille des fichiers de poids en mémoire, plus de la place pour le cache KV.</strong> Pour la famille GLM de Zhipu AI, cela donne environ 328 Go pour [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) et environ 756 Go pour [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) — un serveur multi-GPU ou une machine dotée de plusieurs centaines de Go de mémoire rapide, pas un GPU grand public.',
          'Un serveur à huit accélérateurs de 141 Go offre environ 1 128 Go de mémoire GPU, la classe de matériel pour laquelle GLM-5.3 et DeepSeek-V4.1-Flash (510 Go) sont conçus. Qwen3.8-27B en FP8 (31 Go) tient sur un seul GPU de station de travail de 48 Go ou une machine à 64 Go de mémoire unifiée avec une fenêtre de contexte modeste.',
          'Pour le dimensionnement précis de DeepSeek, voir le [guide du matériel requis pour DeepSeek](/prompt-bites/deepseek-v3-local-hardware-requirements) ; pour choisir une taille de Qwen, voir le [guide de dimensionnement Qwen](/prompt-bites/best-qwen-model-for-coding).',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: 'Se procurer matériel et logiciels en Chine continentale',
        content: [
          '<strong>Poids, environnements d\'exécution et GPU suivent chacun un circuit d\'approvisionnement distinct en Chine continentale.</strong> Hugging Face peut être difficile d\'accès depuis les réseaux du continent ; [ModelScope](https://modelscope.cn) est le hub de modèles chinois où Alibaba publie Qwen et où de nombreux autres développeurs chinois reflètent leurs versions. Vérifiez le compte de l\'éditeur et les sommes de contrôle avant d\'utiliser un miroir.',
          'Côté matériel, les règles d\'exportation des GPU Nvidia avancés vers la Chine ont changé plusieurs fois et la disponibilité varie selon l\'acheteur et le canal ; confirmez les conditions actuelles d\'exportation et d\'importation avec votre fournisseur et un conseil juridique avant de planifier un achat. Les accélérateurs nationaux sont une alternative, mais vérifiez au préalable quels moteurs d\'inférence les prennent en charge.',
          'Les moteurs open source comme llama.cpp et vLLM sont publiés sur GitHub, généralement accessible, mais les miroirs de paquets internes sont courants dans les réseaux d\'entreprise. Prévoyez une voie d\'installation hors ligne si votre environnement est isolé.',
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'Licences pour le fine-tuning et l\'auto-hébergement',
        content: [
          '<strong>C\'est la licence, et non le profil de conformité, qui décide si vous pouvez affiner, redistribuer et déployer commercialement.</strong> Selon les fiches officielles, [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) est sous Apache 2.0, [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) et [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) sous MIT, tandis que [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3), [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) et les plus grands modèles Qwen utilisent des licences propres assorties de conditions spécifiques.',
          'Pour le fine-tuning sur votre propre matériel, un modèle dense de 27B est réaliste avec des méthodes économes en paramètres comme LoRA ; les modèles de plus de 300 Go exigent une infrastructure d\'entraînement multi-GPU. Lisez la licence pour les restrictions sur les modèles dérivés et les seuils d\'utilisateurs ou de revenus avant de bâtir un produit dessus.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'L\'exécution locale d\'un modèle garantit-elle la conformité réglementaire en Chine ?',
            a: 'Non. Le déploiement local répond à des considérations différentes de celles d\'un service destiné au public, mais « hébergé localement » n\'est pas une garantie de conformité universelle pour tout usage possible. Confirmez votre situation spécifique auprès d\'un conseil juridique — cet article fournit une orientation technique générale, pas une détermination de conformité.',
          },
          {
            q: 'Puis-je utiliser un modèle non chinois comme Llama pour un produit destiné à la Chine ?',
            a: 'Techniquement oui d\'un point de vue purement hébergement si auto-hébergé, mais l\'alignement du contenu et les attentes réglementaires peuvent différer des modèles développés localement. C\'est autant une question juridique et produit qu\'une question technique — consultez un conseil juridique qualifié pour votre cas spécifique.',
          },
          {
            q: 'DeepSeek est-il plus difficile à exécuter en local que Qwen ?',
            a: 'Les exigences matérielles dépendent de la taille de modèle spécifique choisie dans chaque famille — consultez le guide dédié aux exigences matérielles locales de DeepSeek-V3 pour plus de détails. Les deux familles proposent une gamme de tailles adaptées à différents budgets matériels.',
          },
          {
            q: 'Quels LLM chinois open source puis-je télécharger et exécuter en local ?',
            a: 'Qwen3.8, DeepSeek-V4.1-Flash, GLM-5.3, Kimi-K3 et MiniMax-H3 publient des poids ouverts sur Hugging Face et ModelScope. Seul Qwen3.8-27B (56 Go, 31 Go en FP8) tient sur une station de travail ; les autres exigent de 300 Go à 1,5 To de mémoire.',
          },
          {
            q: 'Quelle configuration matérielle pour les modèles GLM de Zhipu AI ?',
            a: 'Les poids de GLM-5.3-Flash pèsent environ 328 Go et ceux de GLM-5.3 environ 756 Go ; il faut donc un serveur multi-GPU ou une machine avec plusieurs centaines de Go de mémoire, plus de la place pour le cache KV. Aucun ne tourne sur un GPU grand public.',
          },
          {
            q: 'Quelle licence choisir pour le fine-tuning et l\'auto-hébergement ?',
            a: 'MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash) et Apache 2.0 (Qwen3.8-27B) sont les plus permissives parmi les versions actuelles. GLM-5.3, Kimi-K3 et les plus grands modèles Qwen ont des licences propres : lisez d\'abord la fiche du modèle.',
          },
          {
            q: 'Où trouver modèles et outils quand Hugging Face est difficile d\'accès ?',
            a: 'ModelScope héberge Qwen et reflète de nombreuses autres versions chinoises. Vérifiez l\'éditeur et les sommes de contrôle, et prévoyez un miroir interne ou une installation hors ligne des moteurs si votre réseau est restreint.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur modèle Qwen pour le codage ?](/prompt-bites/best-qwen-model-for-coding) — dimensionner un modèle Qwen selon votre tâche',
          '[Exigences matérielles locales pour DeepSeek-V3 ?](/prompt-bites/deepseek-v3-local-hardware-requirements) — dimensionnement matériel pour DeepSeek',
          '[Prompting en chinois vs en anglais : lequel est le meilleur ?](/prompt-bites/chinese-prompting-vs-english-prompting) — considérations multilingues connexes',
          '[Faire tourner DeepSeek entièrement hors ligne en Chine (auto-hébergement)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — le guide complet de déploiement auto-hébergé',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-ja.webp',
    title: '中国本土向けコンプライアンス対応デプロイに最適なローカルLLMは?',
    seoTitle: '2026年版 中国コンプライアンス対応デプロイに最適なローカルLLM',
    metaDescription: 'Qwen3.8、DeepSeek-V4.1-Flash、GLM-5.3は主要な中国発オープンウェイトLLM。セルフホスト向けにサイズ・ライセンス・ハードウェア・中国での調達を解説。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: '中国本土向け製品やチームのためにローカルLLMをデプロイする開発者',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen(Alibaba)とDeepSeekは、中国本土向けデプロイで最も使われているローカルLLMです</strong> — どちらも国内コンテンツ審査要件のもとで構築するPRC企業により開発されています。どちらも自分のハードウェア上で完全にローカルに実行することで、公開向け生成AIサービスに特に適用される別個の規制上の問題を回避できます。これは一般的な方向づけであり法的助言ではありません — 具体的なデプロイの要件については弁護士に確認してください。',
    toc: [
      { label: 'ベストピック：Qwen・DeepSeek・GLM', anchor: '#best-pick' },
      { label: 'ダウンロードできる中国発オープンウェイトLLM', anchor: '#models' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'ハードウェア要件（GLM含む）', anchor: '#hardware' },
      { label: '中国本土でのハードウェア・ソフトウェア調達', anchor: '#sourcing' },
      { label: 'ファインチューニングとセルフホストのライセンス', anchor: '#licensing' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: '中国本土向けコンプライアンス対応デプロイに最適なローカルLLMは？',
        answer: '中国向けデプロイの主な中国発オープンウェイトの選択肢は、Qwen3.8（Alibaba）、DeepSeek-V4.1-Flash、GLM-5.3（Zhipu AI）です。いずれも国内のコンテンツ審査基準のもとで中国企業が開発しています。個別のコンプライアンス要件は弁護士にご確認ください。これは一般的な情報提供であり法的助言ではありません。',
        bullets: [
          'Qwen3.8-27B（Apache 2.0、BF16で56 GB）が最も現実的な出発点です。DeepSeek-V4.1-Flash とGLM-5.3-Flash（いずれもMIT）にはサーバー級のメモリが必要です。',
          'Kimi-K3（Moonshot AI）とMiniMax-H3も中国発のオープンウェイトの選択肢で、独自ライセンスで公開されています。',
          'ローカルでのセルフホスト運用は、一般向け生成AIサービスの運営とは異なり、両者には異なる規制上の考慮事項が適用されます。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '現行の中国発オープンウェイトの有力候補：Qwen3.8（Alibaba）、DeepSeek-V4.1-Flash、GLM-5.3（Zhipu AI）。いずれも国内のコンテンツ審査基準のもとで中国企業が開発',
          '単一のワークステーションに収まるのはQwen3.8-27B（56 GB）のみ。他の主力モデルは重みだけで300 GB〜1.5 TBのメモリが必要',
          'ライセンスは異なります：MIT（DeepSeek-V4.1-Flash、GLM-5.3-Flash）、Apache 2.0（Qwen3.8-27B）、最大級モデルは独自条件。ファインチューニングや商用利用の前にモデルカードを確認',
          'ローカルのセルフホスト運用は、一般向けAIサービスの運営とは別の規制上の問題です。一般的な情報提供であり法的助言ではありません',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック：Qwen・DeepSeek・GLM',
        content: [
          '<strong>Qwen（Alibaba開発）、DeepSeek、GLM（Zhipu AI開発）は、中国本土向けデプロイで広く使われている中国発オープンウェイトLLMです。3つとも、学習とアライメントの工程がすでに国内のコンテンツ審査基準のもとで行われている中国企業によって開発されているためです。</strong>外国製モデルを後から調整するより、国内開発者のモデルを使うほうが、中国市場向けチームでは一般的なアプローチです。',
          'まず[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)から始めてください。主力ファミリーの現行モデルでワークステーション1台に収まる唯一のモデルで（BF16で56 GB、FP8で31 GB）、Apache 2.0で公開されています。サーバー級のメモリがあり、MITライセンスのより大きなモデルが必要な場合は、[DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)または[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)に進みます。',
          '重要な点として、これらのモデルを自社ハードウェアで完全ローカルに実行することは、一般向け生成AIサービスの運営とは異なります。後者は中国本土ではサービス単位の別個の規制要件（基盤モデルだけでなくサービスに課される登録やコンテンツ審査の義務を含む。この[暫定措置の概要](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)を参照）の対象となります。ローカル、社内、または非公開での利用は一般にこうしたサービス単位の要件の対象外ですが、この区別が自社製品にどう当てはまるかは、技術ブログで判断せず、現行の規制に詳しい弁護士に確認すべき事項です。',
        ],
      },
      models: {
        id: 'models',
        title: 'ダウンロードできる中国発オープンウェイトLLM',
        content: '主要な中国のモデル開発元による現行の主力オープンウェイトモデルを、各公式リポジトリの重みファイルのサイズとともに示します（2026年10月17日確認）。大型モデルも「ローカルで動かせる中国発LLMは何か」への答えとして掲載していますが、多くはサーバーハードウェアが必要です。 サイズはsafetensorsの重みファイルのみです。コンテキストキャッシュや実行時のオーバーヘッドは別途必要です。商用利用の前に、各モデルカードでライセンス本文を確認してください。',
        columns: ['モデル', '開発元', 'ダウンロードサイズ', 'ライセンス'],
        rows: [
          { 'モデル': 'Qwen3.8-27B', '開発元': 'Alibaba', 'ダウンロードサイズ': '56 GB (BF16) / 31 GB (FP8)', 'ライセンス': 'Apache 2.0' },
          { 'モデル': 'Qwen3.8-Flash-Next', '開発元': 'Alibaba', 'ダウンロードサイズ': '360 GB (BF16)', 'ライセンス': 'Qwenコミュニティ' },
          { 'モデル': 'DeepSeek-V4.1-Flash', '開発元': 'DeepSeek', 'ダウンロードサイズ': '510 GB', 'ライセンス': 'MIT' },
          { 'モデル': 'GLM-5.3-Flash', '開発元': 'Zhipu AI (Z.ai)', 'ダウンロードサイズ': '328 GB', 'ライセンス': 'MIT' },
          { 'モデル': 'GLM-5.3', '開発元': 'Zhipu AI (Z.ai)', 'ダウンロードサイズ': '756 GB', 'ライセンス': 'GLM-5.3ライセンス' },
          { 'モデル': 'Kimi-K3', '開発元': 'Moonshot AI', 'ダウンロードサイズ': '1,561 GB', 'ライセンス': 'Kimi K3ライセンス' },
          { 'モデル': 'MiniMax-H3', '開発元': 'MiniMax', 'ダウンロードサイズ': '498 GB', 'ライセンス': 'MiniMaxコミュニティ' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          '3つとも有力な出発点であり、プロジェクトに適した選択は、コンプライアンス上の考慮よりも、タスク性能（コーディング、一般チャット、多言語対応）と手元のハードウェアによって決まります。3つとも「中国で開発され、国内でコンテンツ審査を受けている」という同じ基本的な特徴を持つためです。',
          'Qwen3.8は最も幅広いファミリーで、GPU1枚に収まるモデルを持つ唯一のファミリーです。DeepSeek-V4.1-Flash とGLM-5.3-Flashは、MITライセンスのサーバー級の選択肢です。Kimi-K3とMiniMax-H3はマルチGPUクラスター向けです。コンプライアンス上の位置づけだけで決めず、他のモデルファミリーと同様に、実際のユースケースでベンチマークして評価してください。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア要件（GLM含む）',
        content: [
          '<strong>メモリは少なくとも重みファイルのサイズに加え、KVキャッシュの余裕を見込んでください。</strong>Zhipu AIのGLMファミリーでは、[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)が約328 GB、[GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)が約756 GBで、コンシューマー向けGPUではなく、マルチGPUサーバーか数百GBの高速メモリを備えたマシンが必要です。',
          '141 GBのアクセラレーターを8基搭載したサーバーで約1,128 GBのGPUメモリとなり、GLM-5.3やDeepSeek-V4.1-Flash（510 GB）が想定するクラスのハードウェアです。FP8のQwen3.8-27B（31 GB）は、48 GBのワークステーションGPU1枚、または64 GBのユニファイドメモリ搭載マシンで、控えめなコンテキスト長であれば収まります。',
          'DeepSeekの正確なGPUサイジングは[DeepSeekハードウェア要件ガイド](/prompt-bites/deepseek-v3-local-hardware-requirements)、Qwenのサイズ選びは[Qwenサイズ選択ガイド](/prompt-bites/best-qwen-model-for-coding)を参照してください。',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: '中国本土でのハードウェア・ソフトウェア調達',
        content: [
          '<strong>中国本土では、重み・ランタイム・GPUのそれぞれに別の調達経路があります。</strong>Hugging Faceは本土のネットワークからは到達しにくい場合があります。[ModelScope](https://modelscope.cn)は、AlibabaがQwenを公開し、他の多くの中国の開発元がリリースをミラーしている中国のモデルハブです。ミラーを使う前に、公開アカウントとファイルのチェックサムを確認してください。',
          'ハードウェアについては、先端のNvidia GPUの対中輸出ルールは何度も変更されており、入手可否は購入者や流通経路によって異なります。購入を計画する前に、最新の輸出入条件を仕入先と弁護士に確認してください。国産アクセラレーターも選択肢ですが、採用前に対応する推論ランタイムを確認してください。',
          'llama.cppやvLLMなどのオープンソースランタイムはGitHubで公開されており、通常は到達可能ですが、企業ネットワークでは社内パッケージミラーが一般的です。環境が隔離されている場合は、オフラインのインストール経路を用意してください。',
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'ファインチューニングとセルフホストのライセンス',
        content: [
          '<strong>ファインチューニング、再配布、商用デプロイが可能かどうかを決めるのは、コンプライアンス上の特徴ではなくライセンスです。</strong>公式モデルカードによると、[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)はApache 2.0、[DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)と[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)はMIT、[GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)、[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)、最大級のQwenモデルは独自の条件を持つ独自ライセンスです。',
          '自社ハードウェアでのファインチューニングでは、27Bの密モデルならLoRAなどのパラメータ効率の高い手法で現実的です。300 GBを超えるモデルにはマルチGPUの学習基盤が必要です。製品を構築する前に、派生モデルの制限やユーザー数・売上の上限についてライセンス本文を確認してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'モデルをローカルで実行すれば中国での規制コンプライアンスは保証されますか?',
            a: 'いいえ。ローカルデプロイは公開向けサービスとは異なる考慮事項に対応しますが、「ローカルにホストされている」ことがあらゆるユースケースに対する包括的なコンプライアンス保証ではありません。具体的な状況は弁護士に確認してください — この記事は一般的な技術的方向づけを提供するものであり、コンプライアンス判定ではありません。',
          },
          {
            q: '中国向け製品にLlamaのような非PRCモデルを使えますか?',
            a: '自己ホストの場合、純粋なホスティングの観点からは技術的には可能ですが、コンテンツの整合性と規制上の期待は国内開発モデルとは異なる場合があります。これは技術的な問題と同じくらい法的・製品的な問題です — 具体的なケースについては有資格の弁護士に相談してください。',
          },
          {
            q: 'DeepSeekはQwenよりローカルで実行するのが難しいですか?',
            a: 'ハードウェア要件は各ファミリーから選ぶ具体的なモデルサイズに依存します — 詳細はDeepSeek V3ローカルハードウェア要件の専用ガイドを参照してください。両ファミリーとも、最大のフラッグシップサイズだけでなく、さまざまなハードウェア予算に適したサイズ範囲を提供しています。',
          },
          {
            q: 'ダウンロードしてローカルで実行できる中国発オープンソースLLMは？',
            a: 'Qwen3.8、DeepSeek-V4.1-Flash、GLM-5.3、Kimi-K3、MiniMax-H3は、Hugging FaceとModelScopeでオープンウェイトを公開しています。単一のワークステーションに収まるのはQwen3.8-27B（56 GB、FP8で31 GB）のみで、他は300 GB〜1.5 TBのメモリが必要です。',
          },
          {
            q: 'Zhipu AIのGLMモデルのハードウェア要件は？',
            a: 'GLM-5.3-Flashの重みは約328 GB、GLM-5.3は約756 GBで、どちらもマルチGPUサーバーか数百GBのメモリを持つマシンに加え、KVキャッシュの余裕が必要です。コンシューマー向けGPUでは動作しません。',
          },
          {
            q: 'ファインチューニングとセルフホストに最適なライセンスは？',
            a: '現行リリースのうち、MIT（DeepSeek-V4.1-Flash、GLM-5.3-Flash）とApache 2.0（Qwen3.8-27B）が最も制約が緩やかです。GLM-5.3、Kimi-K3、最大級のQwenモデルは独自ライセンスのため、まずモデルカードを確認してください。',
          },
          {
            q: 'Hugging Faceに到達しにくい場合、モデルやツールはどこで入手できますか？',
            a: 'ModelScopeはQwenを提供し、他の多くの中国発リリースをミラーしています。公開元とチェックサムを確認し、ネットワークが制限されている場合は社内ミラーやランタイムのオフラインインストールを計画してください。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[コーディングに最適なQwenモデルは?](/prompt-bites/best-qwen-model-for-coding) — タスクに合わせたQwenモデルのサイズ選び',
          '[DeepSeek V3のローカルハードウェア要件は?](/prompt-bites/deepseek-v3-local-hardware-requirements) — DeepSeek向けのハードウェアサイジング',
          '[中国語 vs 英語プロンプティング: どちらが良い?](/prompt-bites/chinese-prompting-vs-english-prompting) — 関連する多言語の考慮事項',
          '[中国でDeepSeekを完全オフラインで実行する（セルフホスト設定）](/power-local-llm/deepseek-offline-china-self-hosted-2026) — 完全なセルフホスト導入ガイド',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-ko.webp',
    title: '중국 본토 규정 준수 배포에 최적의 로컬 LLM은?',
    seoTitle: '2026년 중국 규정 준수 로컬 LLM 최적 선택',
    metaDescription: 'Qwen3.8, DeepSeek-V4.1-Flash, GLM-5.3은 주요 중국산 오픈 웨이트 LLM입니다. 셀프 호스팅용 다운로드 크기, 라이선스, 하드웨어, 중국 내 조달을 정리했습니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: '중국 본토 대상 제품이나 팀을 위해 로컬 LLM을 배포하는 개발자',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen(Alibaba)과 DeepSeek은 중국 본토 대상 배포에 가장 많이 사용되는 로컬 LLM입니다</strong> — 둘 다 자국 콘텐츠 심사 요건 하에 구축된 PRC 기업이 개발했습니다. 자신의 하드웨어에서 전적으로 로컬로 실행하는 것은 공개 대상 생성형 AI 서비스에 특별히 적용되는 별도의 규제 문제를 피해 갑니다. 이는 일반적인 방향 제시이지 법률 자문이 아닙니다 — 구체적인 배포 요건은 법률 전문가와 확인하십시오.',
    toc: [
      { label: '최적의 선택: Qwen, DeepSeek 또는 GLM', anchor: '#best-pick' },
      { label: '다운로드할 수 있는 중국산 오픈 웨이트 LLM', anchor: '#models' },
      { label: 'Qwen 대 DeepSeek 대 GLM', anchor: '#comparison' },
      { label: '하드웨어 요구 사항(GLM 포함)', anchor: '#hardware' },
      { label: '중국 본토에서 하드웨어·소프트웨어 조달', anchor: '#sourcing' },
      { label: '파인튜닝 및 셀프 호스팅 라이선스', anchor: '#licensing' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '중국 본토 규정 준수 배포에 가장 적합한 로컬 LLM은?',
        answer: 'Qwen3.8(Alibaba), DeepSeek-V4.1-Flash, GLM-5.3(Zhipu AI)이 중국 대상 배포를 위한 주요 중국산 오픈 웨이트 선택지입니다. 세 모델 모두 중국 기업이 자국 콘텐츠 심사 기준 하에 개발했습니다. 구체적인 규정 준수 요건은 법률 전문가와 확인하십시오. 이는 일반적인 안내이며 법률 자문이 아닙니다.',
        bullets: [
          'Qwen3.8-27B(Apache 2.0, BF16 기준 56 GB)가 가장 현실적인 출발점이며, DeepSeek-V4.1-Flash와 GLM-5.3-Flash(둘 다 MIT)는 서버급 메모리가 필요합니다.',
          'Kimi-K3(Moonshot AI)와 MiniMax-H3도 중국에서 개발된 오픈 웨이트 선택지로, 자체 라이선스로 공개됩니다.',
          '로컬 셀프 호스팅 배포는 대중 대상 생성형 AI 서비스 운영과 다르며, 두 경우에는 서로 다른 규제 고려 사항이 적용됩니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '현재 중국산 오픈 웨이트 주요 선택지: Qwen3.8(Alibaba), DeepSeek-V4.1-Flash, GLM-5.3(Zhipu AI) — 모두 중국 기업이 자국 콘텐츠 심사 기준 하에 개발',
          '단일 워크스테이션에 들어가는 모델은 Qwen3.8-27B(56 GB)뿐이며, 나머지 플래그십은 가중치만으로 300 GB~1.5 TB의 메모리가 필요',
          '라이선스는 다릅니다: MIT(DeepSeek-V4.1-Flash, GLM-5.3-Flash), Apache 2.0(Qwen3.8-27B), 가장 큰 모델은 자체 조건 — 파인튜닝이나 상업적 사용 전에 모델 카드를 확인',
          '로컬 셀프 호스팅 사용은 대중 대상 AI 서비스 운영과 다른 규제 문제입니다 — 일반적인 안내이며 법률 자문이 아닙니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Qwen, DeepSeek 또는 GLM',
        content: [
          '<strong>Qwen(Alibaba 개발), DeepSeek, GLM(Zhipu AI 개발)은 중국 본토 대상 배포에서 널리 쓰이는 중국산 오픈 웨이트 LLM입니다. 세 모델 모두 학습 및 정렬 과정이 이미 자국 콘텐츠 심사 기준 하에서 이루어지는 중국 기업이 개발했기 때문입니다.</strong> 외국 모델을 사후에 조정하기보다 자국 개발사가 만든 모델을 사용하는 것이 중국 시장을 겨냥하는 팀에서 더 일반적인 접근입니다.',
          '먼저 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)로 시작하십시오. 현재 플래그십 계열 중 워크스테이션 한 대에 들어가는 유일한 모델(BF16 56 GB, FP8 31 GB)이며 Apache 2.0으로 공개됩니다. 서버급 메모리가 있고 MIT 라이선스의 더 큰 모델이 필요하면 [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) 또는 [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)로 넘어가십시오.',
          '중요한 점은, 이 모델들을 자체 하드웨어에서 완전히 로컬로 실행하는 것은 대중 대상 생성형 AI 서비스를 운영하는 것과 다르다는 것입니다. 후자는 중국 본토에서 서비스 단위의 별도 규제 요건(기반 모델뿐 아니라 서비스에 적용되는 등록 및 콘텐츠 심사 의무 포함, 이 [잠정 조치 개요](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures) 참조)의 적용을 받습니다. 로컬, 내부 또는 비공개 사용은 일반적으로 이러한 서비스 단위 요건 밖에 있지만, 이 구분이 귀사 제품에 어떻게 적용되는지는 기술 블로그 글이 아니라 현행 규제 환경에 밝은 법률 전문가와 확인해야 합니다.',
        ],
      },
      models: {
        id: 'models',
        title: '다운로드할 수 있는 중국산 오픈 웨이트 LLM',
        content: '주요 중국 모델 개발사의 현재 플래그십 오픈 웨이트 릴리스와 각 공식 저장소의 가중치 파일 크기입니다(2026년 10월 17일 확인). 큰 모델도 «로컬에서 실행할 수 있는 중국산 LLM은 무엇인가»에 대한 답으로 포함했지만, 대부분은 서버 하드웨어가 필요합니다. 크기는 safetensors 가중치 파일만 해당하며, 컨텍스트 캐시와 런타임 오버헤드는 별도입니다. 상업적 사용 전에 각 모델 카드에서 라이선스 원문을 확인하십시오.',
        columns: ['모델', '개발사', '다운로드 크기', '라이선스'],
        rows: [
          { '모델': 'Qwen3.8-27B', '개발사': 'Alibaba', '다운로드 크기': '56 GB (BF16) / 31 GB (FP8)', '라이선스': 'Apache 2.0' },
          { '모델': 'Qwen3.8-Flash-Next', '개발사': 'Alibaba', '다운로드 크기': '360 GB (BF16)', '라이선스': 'Qwen 커뮤니티' },
          { '모델': 'DeepSeek-V4.1-Flash', '개발사': 'DeepSeek', '다운로드 크기': '510 GB', '라이선스': 'MIT' },
          { '모델': 'GLM-5.3-Flash', '개발사': 'Zhipu AI (Z.ai)', '다운로드 크기': '328 GB', '라이선스': 'MIT' },
          { '모델': 'GLM-5.3', '개발사': 'Zhipu AI (Z.ai)', '다운로드 크기': '756 GB', '라이선스': 'GLM-5.3 라이선스' },
          { '모델': 'Kimi-K3', '개발사': 'Moonshot AI', '다운로드 크기': '1,561 GB', '라이선스': 'Kimi K3 라이선스' },
          { '모델': 'MiniMax-H3', '개발사': 'MiniMax', '다운로드 크기': '498 GB', '라이선스': 'MiniMax 커뮤니티' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen 대 DeepSeek 대 GLM',
        content: [
          '세 모델 모두 유효한 출발점이며, 프로젝트에 맞는 선택은 규정 준수 고려보다 작업 성능(코딩, 일반 대화, 다국어 지원)과 보유 하드웨어에 더 좌우됩니다. 세 모델 모두 «중국에서 개발되고 자국 콘텐츠 심사를 받는» 동일한 기본 특성을 공유하기 때문입니다.',
          'Qwen3.8은 가장 폭넓은 계열이며 GPU 한 장에 들어가는 모델이 있는 유일한 계열입니다. DeepSeek-V4.1-Flash와 GLM-5.3-Flash는 MIT 라이선스의 서버급 선택지이고, Kimi-K3와 MiniMax-H3는 멀티 GPU 클러스터를 겨냥합니다. 규정 준수 상태만으로 결정하지 말고, 다른 모델 계열과 마찬가지로 실제 사용 사례에서 벤치마크하여 평가하십시오.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 요구 사항(GLM 포함)',
        content: [
          '<strong>메모리는 최소한 가중치 파일 크기에 KV 캐시 여유 공간을 더해 계획하십시오.</strong> Zhipu AI의 GLM 계열은 [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)가 약 328 GB, [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)이 약 756 GB로, 소비자용 GPU가 아니라 멀티 GPU 서버나 수백 GB의 고속 메모리를 갖춘 머신이 필요합니다.',
          '141 GB 가속기 8개를 탑재한 서버는 약 1,128 GB의 GPU 메모리를 제공하며, GLM-5.3과 DeepSeek-V4.1-Flash(510 GB)가 겨냥하는 하드웨어 등급입니다. FP8의 Qwen3.8-27B(31 GB)는 48 GB 워크스테이션 GPU 한 장 또는 64 GB 통합 메모리 머신에서 적당한 컨텍스트 창으로 실행할 수 있습니다.',
          'DeepSeek의 정확한 GPU 사이징은 [DeepSeek 하드웨어 요구 사항 가이드](/prompt-bites/deepseek-v3-local-hardware-requirements)를, Qwen 크기 선택은 [Qwen 크기 선택 가이드](/prompt-bites/best-qwen-model-for-coding)를 참조하십시오.',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: '중국 본토에서 하드웨어·소프트웨어 조달',
        content: [
          '<strong>중국 본토에서는 가중치, 런타임, GPU 각각에 별도의 조달 경로가 있습니다.</strong> Hugging Face는 본토 네트워크에서 접근하기 어려울 수 있으며, [ModelScope](https://modelscope.cn)는 Alibaba가 Qwen을 공개하고 다른 많은 중국 개발사가 릴리스를 미러링하는 중국의 모델 허브입니다. 미러를 사용하기 전에 게시자 계정과 파일 체크섬을 확인하십시오.',
          '하드웨어 측면에서는 첨단 Nvidia GPU의 대중 수출 규정이 여러 차례 바뀌었고 구매자와 유통 경로에 따라 입수 가능성이 다르므로, 구매를 계획하기 전에 최신 수출입 조건을 공급업체 및 법률 전문가와 확인하십시오. 국산 가속기도 대안이지만, 선택하기 전에 어떤 추론 런타임이 지원하는지 확인하십시오.',
          'llama.cpp, vLLM 같은 오픈 소스 런타임은 일반적으로 접근 가능한 GitHub에 공개되지만, 기업 네트워크에서는 내부 패키지 미러가 흔합니다. 환경이 망 분리되어 있다면 오프라인 설치 경로를 계획하십시오.',
        ],
      },
      licensing: {
        id: 'licensing',
        title: '파인튜닝 및 셀프 호스팅 라이선스',
        content: [
          '<strong>파인튜닝, 재배포, 상업적 배포 가능 여부를 결정하는 것은 규정 준수 특성이 아니라 라이선스입니다.</strong> 공식 모델 카드에 따르면 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)는 Apache 2.0, [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)와 [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)는 MIT이며, [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3), [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3), 가장 큰 Qwen 모델은 자체 조건이 있는 별도 라이선스를 사용합니다.',
          '자체 하드웨어에서의 파인튜닝은 27B 밀집 모델이라면 LoRA 같은 파라미터 효율적 방법으로 현실적이며, 300 GB가 넘는 모델은 멀티 GPU 학습 인프라가 필요합니다. 그 위에 제품을 만들기 전에 파생 모델 제한과 사용자 수 또는 매출 기준에 대한 라이선스 원문을 확인하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '모델을 로컬로 실행하면 중국에서 규제 준수가 보장됩니까?',
            a: '아닙니다. 로컬 배포는 공개 대상 서비스와는 다른 고려사항을 다루지만, "로컬 호스팅"이 모든 가능한 사용 사례에 대한 포괄적인 규정 준수 보장은 아닙니다. 귀하의 구체적인 상황은 법률 전문가와 확인하십시오 — 이 글은 일반적인 기술적 방향 제시를 제공할 뿐, 규정 준수 판단이 아닙니다.',
          },
          {
            q: '중국 대상 제품에 Llama 같은 비PRC 모델을 사용할 수 있습니까?',
            a: '자체 호스팅한다면 순수 호스팅 관점에서는 기술적으로 가능하지만, 콘텐츠 정렬과 규제 기대치는 국내 개발 모델과 다를 수 있습니다. 이는 기술적 질문만큼이나 법률 및 제품 질문이므로 구체적인 사안은 자격을 갖춘 법률 전문가와 상담하십시오.',
          },
          {
            q: 'DeepSeek은 Qwen보다 로컬 실행이 더 어렵습니까?',
            a: '하드웨어 요구사항은 각 계열에서 선택한 구체적인 모델 크기에 따라 다릅니다 — 자세한 내용은 전용 DeepSeek-V3 로컬 하드웨어 요구사항 가이드를 참고하십시오. 두 계열 모두 서로 다른 하드웨어 예산에 맞는 다양한 크기를 제공합니다.',
          },
          {
            q: '다운로드하여 로컬에서 실행할 수 있는 중국산 오픈 소스 LLM에는 무엇이 있나요?',
            a: 'Qwen3.8, DeepSeek-V4.1-Flash, GLM-5.3, Kimi-K3, MiniMax-H3는 Hugging Face와 ModelScope에 오픈 웨이트를 공개합니다. 단일 워크스테이션에 들어가는 모델은 Qwen3.8-27B(56 GB, FP8 31 GB)뿐이며, 나머지는 300 GB~1.5 TB의 메모리가 필요합니다.',
          },
          {
            q: 'Zhipu AI GLM 모델의 하드웨어 요구 사항은 무엇인가요?',
            a: 'GLM-5.3-Flash 가중치는 약 328 GB, GLM-5.3은 약 756 GB이므로 둘 다 멀티 GPU 서버나 수백 GB 메모리를 갖춘 머신과 KV 캐시 여유 공간이 필요합니다. 어느 쪽도 소비자용 GPU에서는 실행되지 않습니다.',
          },
          {
            q: '파인튜닝과 셀프 호스팅에 가장 적합한 라이선스는 무엇인가요?',
            a: '현재 릴리스 중 MIT(DeepSeek-V4.1-Flash, GLM-5.3-Flash)와 Apache 2.0(Qwen3.8-27B)이 가장 관대합니다. GLM-5.3, Kimi-K3, 가장 큰 Qwen 모델은 자체 라이선스를 사용하므로 먼저 모델 카드를 읽으십시오.',
          },
          {
            q: 'Hugging Face에 접근하기 어려울 때 모델과 도구는 어디서 구하나요?',
            a: 'ModelScope는 Qwen을 호스팅하고 다른 많은 중국산 릴리스를 미러링합니다. 게시자와 체크섬을 확인하고, 네트워크가 제한되어 있다면 런타임용 내부 미러나 오프라인 설치를 계획하십시오.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[코딩을 위한 최적의 Qwen 모델은?](/ko/prompt-bites/best-qwen-model-for-coding) — 작업에 맞춰 Qwen 모델 크기 조정하기',
          '[DeepSeek-V3 로컬 하드웨어 요구사항은?](/ko/prompt-bites/deepseek-v3-local-hardware-requirements) — DeepSeek을 위한 하드웨어 산정',
          '[중국어 대 영어 프롬프팅: 어느 것이 더 나은가?](/ko/prompt-bites/chinese-prompting-vs-english-prompting) — 관련 다국어 고려사항',
          '[중국에서 DeepSeek을 완전히 오프라인으로 실행하기(자체 호스팅 설정)](/ko/power-local-llm/deepseek-offline-china-self-hosted-2026) — 완전한 자체 호스팅 배포 가이드',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-pt.webp',
    title: 'Qual o Melhor LLM Local para Implantações Compatíveis com a China Continental?',
    seoTitle: 'Melhor LLM Local para Implantação Compatível com a China 2026',
    metaDescription: 'Qwen3.8, DeepSeek-V4.1-Flash e GLM-5.3 são os principais LLMs chineses open-weight para hospedar: tamanhos, licenças, hardware e aquisição na China.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: 'Desenvolvedores implantando LLMs locais para produtos ou equipes voltados à China continental',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O Qwen (Alibaba) e o DeepSeek são os LLMs locais mais usados para implantações voltadas à China continental</strong> — ambos são desenvolvidos por empresas da RPC cujos modelos são construídos sob requisitos domésticos de revisão de conteúdo. Rodar qualquer um deles totalmente localmente, no seu próprio hardware, contorna as questões regulatórias separadas que se aplicam especificamente a serviços de IA generativa voltados ao público. Esta é uma orientação geral, não aconselhamento jurídico — confirme os requisitos para sua implantação específica com um advogado.',
    toc: [
      { label: 'Melhor escolha: Qwen, DeepSeek ou GLM', anchor: '#best-pick' },
      { label: 'LLMs chineses open-weight para baixar', anchor: '#models' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'Requisitos de hardware (incluindo GLM)', anchor: '#hardware' },
      { label: 'Adquirir hardware e software na China continental', anchor: '#sourcing' },
      { label: 'Licenças para fine-tuning e hospedagem própria', anchor: '#licensing' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual LLM local é o melhor para implantações compatíveis com a China continental?',
        answer: 'Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash e GLM-5.3 (Zhipu AI) são as principais opções open-weight chinesas para implantações voltadas à China — as três desenvolvidas por empresas chinesas sob normas domésticas de revisão de conteúdo. Confirme seus requisitos de conformidade com um advogado, pois isto é orientação geral, não aconselhamento jurídico.',
        bullets: [
          'Qwen3.8-27B (Apache 2.0, 56 GB em BF16) é o ponto de partida mais prático; DeepSeek-V4.1-Flash e GLM-5.3-Flash (ambos MIT) exigem memória de classe servidor.',
          'Kimi-K3 (Moonshot AI) e MiniMax-H3 são outras opções open-weight desenvolvidas na China, com licenças próprias.',
          'A implantação local autohospedada difere da operação de um serviço de IA generativa aberto ao público — ambos estão sujeitos a considerações regulatórias diferentes.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Opções open-weight chinesas atuais: Qwen3.8 (Alibaba), DeepSeek-V4.1-Flash e GLM-5.3 (Zhipu AI) — todas desenvolvidas por empresas chinesas sob normas domésticas de revisão de conteúdo',
          'Só o Qwen3.8-27B (56 GB) cabe em uma estação de trabalho; os demais modelos principais precisam de 300 GB a 1,5 TB de memória só para os pesos',
          'As licenças diferem: MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash), Apache 2.0 (Qwen3.8-27B), condições próprias nos maiores modelos — leia o model card antes de fazer fine-tuning ou uso comercial',
          'O uso local autohospedado é uma questão regulatória distinta da operação de um serviço de IA público — orientação geral, não aconselhamento jurídico',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: Qwen, DeepSeek ou GLM',
        content: [
          '<strong>Qwen (desenvolvido pela Alibaba), DeepSeek e GLM (desenvolvido pela Zhipu AI) são os LLMs chineses open-weight muito usados em implantações voltadas à China continental, pois os três são desenvolvidos por empresas chinesas cujos processos de treinamento e alinhamento já operam sob normas domésticas de revisão de conteúdo.</strong> Usar modelos criados por desenvolvedores nacionais, em vez de adaptar depois um modelo estrangeiro, é a abordagem mais comum entre equipes que miram o mercado chinês.',
          'Comece com o [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B): é o único modelo atual dessas famílias principais que cabe em uma estação de trabalho (56 GB em BF16, 31 GB em FP8) e é publicado sob Apache 2.0. Passe ao [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) ou ao [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) quando tiver memória de classe servidor e quiser um modelo maior sob licença MIT.',
          'É importante notar que executar qualquer um desses modelos totalmente em local, no seu próprio hardware, é uma situação diferente de operar um serviço de IA generativa aberto ao público, que na China continental está sujeito a requisitos regulatórios próprios do serviço (incluindo obrigações de registro e revisão de conteúdo que recaem sobre o serviço, não apenas sobre o modelo; veja esta [visão geral das Interim Measures](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)). O uso local, interno ou não público geralmente fica fora desses requisitos — mas essa distinção e sua aplicação ao seu produto devem ser confirmadas com um advogado familiarizado com o cenário regulatório atual, não decididas a partir de um artigo técnico.',
        ],
      },
      models: {
        id: 'models',
        title: 'LLMs chineses open-weight para baixar',
        content: 'Estes são os lançamentos principais open-weight atuais dos maiores desenvolvedores chineses, com o tamanho dos arquivos de pesos em cada repositório oficial (verificado em 17 de outubro de 2026). Os modelos maiores aparecem porque respondem a «quais LLMs chineses posso executar localmente» — mas a maioria exige hardware de servidor. Os tamanhos referem-se apenas aos arquivos de pesos safetensors; o cache de contexto e a sobrecarga de execução somam-se a eles. Consulte o model card de cada modelo para o texto exato da licença antes do uso comercial.',
        columns: ['Modelo', 'Desenvolvedor', 'Tamanho do download', 'Licença'],
        rows: [
          { 'Modelo': 'Qwen3.8-27B', 'Desenvolvedor': 'Alibaba', 'Tamanho do download': '56 GB (BF16) / 31 GB (FP8)', 'Licença': 'Apache 2.0' },
          { 'Modelo': 'Qwen3.8-Flash-Next', 'Desenvolvedor': 'Alibaba', 'Tamanho do download': '360 GB (BF16)', 'Licença': 'Comunidade Qwen' },
          { 'Modelo': 'DeepSeek-V4.1-Flash', 'Desenvolvedor': 'DeepSeek', 'Tamanho do download': '510 GB', 'Licença': 'MIT' },
          { 'Modelo': 'GLM-5.3-Flash', 'Desenvolvedor': 'Zhipu AI (Z.ai)', 'Tamanho do download': '328 GB', 'Licença': 'MIT' },
          { 'Modelo': 'GLM-5.3', 'Desenvolvedor': 'Zhipu AI (Z.ai)', 'Tamanho do download': '756 GB', 'Licença': 'Licença GLM-5.3' },
          { 'Modelo': 'Kimi-K3', 'Desenvolvedor': 'Moonshot AI', 'Tamanho do download': '1,561 GB', 'Licença': 'Licença Kimi K3' },
          { 'Modelo': 'MiniMax-H3', 'Desenvolvedor': 'MiniMax', 'Tamanho do download': '498 GB', 'Licença': 'Comunidade MiniMax' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          'Os três são pontos de partida viáveis, e a escolha certa depende mais do desempenho na tarefa (código, chat geral, suporte multilíngue) e do hardware disponível do que da conformidade, já que todos compartilham o mesmo perfil «desenvolvido na China, com revisão de conteúdo doméstica».',
          'O Qwen3.8 é a família mais ampla e a única com um modelo que cabe em uma única GPU; DeepSeek-V4.1-Flash e GLM-5.3-Flash são as opções de classe servidor sob licença MIT; Kimi-K3 e MiniMax-H3 miram clusters multi-GPU. Avalie-os como qualquer outra família de modelos — com benchmarks no seu caso de uso real — em vez de deixar o status de conformidade decidir sozinho.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware (incluindo GLM)',
        content: [
          '<strong>Planeje, no mínimo, o tamanho dos arquivos de pesos em memória, mais espaço para o cache KV.</strong> Para a família GLM da Zhipu AI isso significa cerca de 328 GB para o [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) e cerca de 756 GB para o [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) — um servidor multi-GPU ou uma máquina com várias centenas de GB de memória rápida, não uma GPU de consumo.',
          'Um servidor com oito aceleradores de 141 GB oferece cerca de 1.128 GB de memória de GPU, a classe de hardware para a qual GLM-5.3 e DeepSeek-V4.1-Flash (510 GB) foram projetados. O Qwen3.8-27B em FP8 (31 GB) cabe em uma única GPU de estação de trabalho de 48 GB ou em uma máquina com 64 GB de memória unificada com janela de contexto modesta.',
          'Para o dimensionamento preciso do DeepSeek, veja o [guia de requisitos de hardware do DeepSeek](/prompt-bites/deepseek-v3-local-hardware-requirements); para escolher o tamanho do Qwen, o [guia de tamanhos do Qwen](/prompt-bites/best-qwen-model-for-coding).',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: 'Adquirir hardware e software na China continental',
        content: [
          '<strong>Pesos, ambientes de execução e GPUs têm, cada um, um caminho de aquisição próprio na China continental.</strong> O Hugging Face pode ser de difícil acesso a partir de redes do continente; o [ModelScope](https://modelscope.cn) é o hub de modelos chinês em que a Alibaba publica o Qwen e em que muitos outros desenvolvedores chineses espelham seus lançamentos. Verifique a conta do publicador e os checksums antes de usar qualquer espelho.',
          'No hardware, as regras de exportação de GPUs Nvidia avançadas para a China mudaram várias vezes e a disponibilidade varia conforme comprador e canal; confirme as condições vigentes de exportação e importação com seu fornecedor e um advogado antes de planejar uma compra. Aceleradores nacionais são uma alternativa, mas verifique antes quais motores de inferência os suportam.',
          'Motores open source como llama.cpp e vLLM são publicados no GitHub, em geral acessível, mas espelhos internos de pacotes são comuns em redes corporativas. Planeje um caminho de instalação offline se o seu ambiente for isolado.',
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'Licenças para fine-tuning e hospedagem própria',
        content: [
          '<strong>A licença, e não o perfil de conformidade, decide se você pode fazer fine-tuning, redistribuir e implantar comercialmente.</strong> Segundo os model cards oficiais, o [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) é Apache 2.0, o [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) e o [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) são MIT, enquanto o [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3), o [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) e os maiores modelos Qwen usam licenças próprias com condições específicas.',
          'Para fine-tuning no seu próprio hardware, um modelo denso de 27B é realista com métodos eficientes em parâmetros como LoRA; os modelos acima de 300 GB exigem infraestrutura de treinamento multi-GPU. Leia a licença quanto a restrições sobre modelos derivados e limites de usuários ou receita antes de construir um produto sobre eles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Rodar um modelo localmente garante conformidade regulatória na China?',
            a: 'Não. A implantação local aborda considerações diferentes das de um serviço voltado ao público, mas "hospedado localmente" não é uma garantia geral de conformidade para todo caso de uso possível. Confirme sua situação específica com um advogado — este artigo fornece orientação técnica geral, não uma determinação de conformidade.',
          },
          {
            q: 'Posso usar um modelo não desenvolvido na RPC, como o Llama, para um produto voltado à China?',
            a: 'Tecnicamente sim, de um ponto de vista puramente de hospedagem, se auto-hospedado, mas o alinhamento de conteúdo e as expectativas regulatórias podem diferir de modelos desenvolvidos domesticamente. Esta é uma questão tanto jurídica quanto de produto quanto técnica — consulte um advogado qualificado para seu caso específico.',
          },
          {
            q: 'O DeepSeek é mais difícil de rodar localmente que o Qwen?',
            a: 'Os requisitos de hardware dependem do tamanho específico do modelo que você escolhe de cada família — veja o guia dedicado de requisitos de hardware local do DeepSeek-V3 para detalhes. Ambas as famílias oferecem uma gama de tamanhos adequados a diferentes orçamentos de hardware.',
          },
          {
            q: 'Quais LLMs chineses de código aberto posso baixar e executar localmente?',
            a: 'Qwen3.8, DeepSeek-V4.1-Flash, GLM-5.3, Kimi-K3 e MiniMax-H3 publicam pesos abertos no Hugging Face e no ModelScope. Só o Qwen3.8-27B (56 GB, 31 GB em FP8) cabe em uma estação de trabalho; os demais precisam de 300 GB a 1,5 TB de memória.',
          },
          {
            q: 'Quais são os requisitos de hardware dos modelos GLM da Zhipu AI?',
            a: 'Os pesos do GLM-5.3-Flash têm cerca de 328 GB e os do GLM-5.3 cerca de 756 GB; ambos exigem um servidor multi-GPU ou uma máquina com várias centenas de GB de memória, mais espaço para o cache KV. Nenhum roda em uma GPU de consumo.',
          },
          {
            q: 'Qual licença é melhor para fine-tuning e hospedagem própria?',
            a: 'MIT (DeepSeek-V4.1-Flash, GLM-5.3-Flash) e Apache 2.0 (Qwen3.8-27B) são as mais permissivas entre as versões atuais. GLM-5.3, Kimi-K3 e os maiores modelos Qwen usam licenças próprias; leia primeiro o model card.',
          },
          {
            q: 'Onde obtenho modelos e ferramentas quando o Hugging Face é de difícil acesso?',
            a: 'O ModelScope hospeda o Qwen e espelha muitos outros lançamentos chineses. Verifique o publicador e os checksums e planeje um espelho interno ou instalação offline dos motores se a sua rede for restrita.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Melhor Modelo Qwen para Código?](/prompt-bites/best-qwen-model-for-coding) — dimensionando um modelo Qwen para sua tarefa',
          '[Requisitos de Hardware Local do DeepSeek-V3?](/prompt-bites/deepseek-v3-local-hardware-requirements) — dimensionamento de hardware para o DeepSeek',
          '[Prompting em Chinês vs Prompting em Inglês: Qual É Melhor?](/prompt-bites/chinese-prompting-vs-english-prompting) — considerações multilíngues relacionadas',
          '[Execute o DeepSeek totalmente offline na China (configuração autoexecutada)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — o guia completo de implantação autoexecutada',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-zh.webp',
    title: '适合中国大陆合规部署的最佳本地 LLM 是什么？',
    seoTitle: '2026 年中国合规部署最佳本地 LLM',
    metaDescription: 'Qwen3.8、DeepSeek-V4.1-Flash 和 GLM-5.3 是主要的中国开源权重 LLM：自托管的下载体积、许可证、硬件要求与中国大陆软硬件获取。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.8', 'DeepSeek-V4.1-Flash', 'GLM-5.3', 'Kimi-K3', 'MiniMax-H3'],
    current_hardware_mentioned: ['8x 141 GB accelerator server'],
    educationalLevel: 'Advanced',
    audience: '为面向中国大陆的产品或团队部署本地 LLM 的开发者',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen（阿里巴巴）和 DeepSeek 是面向中国大陆部署中使用最广泛的本地 LLM</strong>——两者均由中国大陆企业开发，其模型在国内内容审核要求下构建。完全在自有硬件上本地运行两者，可以规避专门适用于面向公众的生成式 AI 服务的其他监管问题。这只是一般性说明，而非法律建议——请与法律顾问确认你具体部署的要求。',
    toc: [
      { label: '最佳选择：Qwen、DeepSeek 或 GLM', anchor: '#best-pick' },
      { label: '可下载的中国开源权重 LLM', anchor: '#models' },
      { label: 'Qwen 对比 DeepSeek 对比 GLM', anchor: '#comparison' },
      { label: '硬件要求（含 GLM）', anchor: '#hardware' },
      { label: '在中国大陆获取硬件与软件', anchor: '#sourcing' },
      { label: '微调与自托管的许可证', anchor: '#licensing' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '适合中国大陆合规部署的最佳本地 LLM 是什么？',
        answer: 'Qwen3.8（阿里巴巴）、DeepSeek-V4.1-Flash 和 GLM-5.3（智谱 AI）是面向中国部署的主要中国开源权重选择——三者均由中国企业在国内内容审核规范下开发。具体合规要求请咨询法律顾问，本文仅为一般性指引，不构成法律意见。',
        bullets: [
          'Qwen3.8-27B（Apache 2.0，BF16 下 56 GB）是最实用的起点；DeepSeek-V4.1-Flash 和 GLM-5.3-Flash（均为 MIT）需要服务器级内存。',
          'Kimi-K3（月之暗面）和 MiniMax-H3 是另外两个中国开发的开源权重选择，采用各自的自定义许可证。',
          '本地自托管部署不同于运营面向公众的生成式 AI 服务——两者适用不同的监管考量。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '当前中国开源权重首选：Qwen3.8（阿里巴巴）、DeepSeek-V4.1-Flash 和 GLM-5.3（智谱 AI）——均由中国企业在国内内容审核规范下开发',
          '只有 Qwen3.8-27B（56 GB）小到可放入单台工作站；其他旗舰模型仅权重就需要 300 GB 至 1.5 TB 内存',
          '许可证各不相同：MIT（DeepSeek-V4.1-Flash、GLM-5.3-Flash）、Apache 2.0（Qwen3.8-27B），最大模型采用自定义条款——微调或商用前请阅读模型卡',
          '本地自托管使用不同于运营面向公众的 AI 服务——本文仅为一般性指引，不构成法律意见',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Qwen、DeepSeek 或 GLM',
        content: [
          '<strong>Qwen（阿里巴巴开发）、DeepSeek 和 GLM（智谱 AI 开发）是面向中国大陆部署时使用较广泛的中国开源权重 LLM，因为三者均由中国企业开发，其训练和对齐流程本就在国内内容审核规范下进行。</strong>相比事后调整外国模型，使用国内开发者构建的模型是面向中国市场的团队更常见的做法。',
          '建议先从 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 入手：它是当前旗舰系列中唯一可放入单台工作站的模型（BF16 为 56 GB，FP8 为 31 GB），并以 Apache 2.0 发布。当您拥有服务器级内存并希望使用 MIT 许可证下更大的模型时，再转向 [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) 或 [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)。',
          '需要强调的是，在自有硬件上完全本地运行这些模型，不同于运营面向公众的生成式 AI 服务；后者在中国大陆需遵守服务层面的独立监管要求（包括适用于服务而不仅是底层模型的登记和内容审核义务，参见此[暂行办法概述](https://www.china-briefing.com/doing-business-guide/china/sector-insights/how-to-interpret-china-s-first-effort-to-regulate-generative-ai-measures)）。本地、内部或非公开使用通常不属于这些服务层面的要求——但这一区别及其如何适用于您的具体产品，应向熟悉现行监管环境的法律顾问确认，而不是依据技术博客文章来判断。',
        ],
      },
      models: {
        id: 'models',
        title: '可下载的中国开源权重 LLM',
        content: '以下是主要中国模型开发者当前的旗舰开源权重发布，并列出各官方仓库中权重文件的大小（2026 年 10 月 17 日核对）。列出大型模型是因为它们回答了“哪些中国 LLM 可以本地运行”——但大多数需要服务器级硬件。 大小仅指 safetensors 权重文件；上下文缓存和运行时开销需另计。商用前请在各模型卡中核对许可证原文。',
        columns: ['模型', '开发方', '下载大小', '许可证'],
        rows: [
          { '模型': 'Qwen3.8-27B', '开发方': 'Alibaba', '下载大小': '56 GB (BF16) / 31 GB (FP8)', '许可证': 'Apache 2.0' },
          { '模型': 'Qwen3.8-Flash-Next', '开发方': 'Alibaba', '下载大小': '360 GB (BF16)', '许可证': 'Qwen 社区许可' },
          { '模型': 'DeepSeek-V4.1-Flash', '开发方': 'DeepSeek', '下载大小': '510 GB', '许可证': 'MIT' },
          { '模型': 'GLM-5.3-Flash', '开发方': 'Zhipu AI (Z.ai)', '下载大小': '328 GB', '许可证': 'MIT' },
          { '模型': 'GLM-5.3', '开发方': 'Zhipu AI (Z.ai)', '下载大小': '756 GB', '许可证': 'GLM-5.3 许可证' },
          { '模型': 'Kimi-K3', '开发方': 'Moonshot AI', '下载大小': '1,561 GB', '许可证': 'Kimi K3 许可证' },
          { '模型': 'MiniMax-H3', '开发方': 'MiniMax', '下载大小': '498 GB', '许可证': 'MiniMax 社区许可' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen 对比 DeepSeek 对比 GLM',
        content: [
          '三者都是可行的起点，适合您项目的选择更多取决于任务表现（编程、通用对话、多语言支持）和您手头的硬件，而非合规考量，因为三者都具有相同的基本特征：“中国开发、国内内容审核”。',
          'Qwen3.8 是覆盖最广的系列，也是唯一拥有可放入单块 GPU 的模型的系列；DeepSeek-V4.1-Flash 和 GLM-5.3-Flash 是 MIT 许可证下的服务器级选择；Kimi-K3 和 MiniMax-H3 面向多 GPU 集群。请像评估其他模型系列一样，在您的实际用例上做基准测试，而不是仅凭合规状态做决定。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件要求（含 GLM）',
        content: [
          '<strong>内存至少要按权重文件大小规划，并为 KV 缓存留出空间。</strong>对智谱 AI 的 GLM 系列而言，[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) 约 328 GB，[GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) 约 756 GB——需要多 GPU 服务器或配备数百 GB 高速内存的机器，而不是消费级 GPU。',
          '配备八块 141 GB 加速器的服务器约有 1,128 GB GPU 显存，这正是 GLM-5.3 和 DeepSeek-V4.1-Flash（510 GB）所面向的硬件级别。FP8 的 Qwen3.8-27B（31 GB）可放入一块 48 GB 工作站 GPU，或 64 GB 统一内存的机器（上下文窗口适中时）。',
          '如需 DeepSeek 的精确 GPU 配置，请参阅 [DeepSeek 硬件要求指南](/prompt-bites/deepseek-v3-local-hardware-requirements)；选择 Qwen 尺寸请参阅 [Qwen 尺寸选择指南](/prompt-bites/best-qwen-model-for-coding)。',
        ],
      },
      sourcing: {
        id: 'sourcing',
        title: '在中国大陆获取硬件与软件',
        content: [
          '<strong>在中国大陆，权重、运行时和 GPU 各有独立的获取渠道。</strong>从大陆网络访问 Hugging Face 可能比较困难；[ModelScope（魔搭社区）](https://modelscope.cn) 是中国的模型中心，阿里巴巴在此发布 Qwen，许多其他中国开发者也在此镜像其发布。使用任何镜像前，请核实发布者账号和文件校验和。',
          '硬件方面，先进 Nvidia GPU 对华出口的规则已多次变化，可获得性因买方和渠道而异；规划采购前，请与供应商和法律顾问确认当前的出口和进口条件。国产加速器是一种替代方案，但在选定模型前请先确认哪些推理运行时支持它们。',
          'llama.cpp 和 vLLM 等开源运行时发布在 GitHub 上，通常可以访问，但企业网络中常使用内部软件包镜像。如果您的环境是隔离的，请规划离线安装路径。',
        ],
      },
      licensing: {
        id: 'licensing',
        title: '微调与自托管的许可证',
        content: [
          '<strong>决定您能否微调、再分发和商用部署的是许可证，而不是合规特征。</strong>根据官方模型卡，[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 为 Apache 2.0，[DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) 和 [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) 为 MIT，而 [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)、[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) 及最大的 Qwen 模型采用带有各自条件的自定义许可证。',
          '在自有硬件上微调时，27B 稠密模型配合 LoRA 等参数高效方法是现实可行的；超过 300 GB 的模型则需要多 GPU 训练基础设施。在基于其构建产品之前，请阅读许可证原文中对衍生模型以及用户数或收入门槛的限制。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本地运行模型能保证在中国的监管合规吗？',
            a: '不能。本地部署解决的考量与面向公众的服务不同，但「本地托管」并不是适用于所有可能用例的一揽子合规保证。请与法律顾问确认你的具体情况——本文提供一般性技术说明，而非合规判定。',
          },
          {
            q: '面向中国的产品能使用 Llama 等非中国大陆模型吗？',
            a: '如果自托管，从纯托管角度看技术上可以，但内容对齐和监管预期可能与国内开发的模型不同。这既是法律和产品问题，也是技术问题——具体情况请咨询合格的法律顾问。',
          },
          {
            q: 'DeepSeek 在本地运行比 Qwen 更难吗？',
            a: '硬件要求取决于你从每个系列中选择的具体模型规模——详见专门的 DeepSeek-V3 本地硬件要求指南。两个系列都提供适合不同硬件预算的多种规模。',
          },
          {
            q: '有哪些中国开源 LLM 可以下载并在本地运行？',
            a: 'Qwen3.8、DeepSeek-V4.1-Flash、GLM-5.3、Kimi-K3 和 MiniMax-H3 均在 Hugging Face 和 ModelScope 上发布开源权重。只有 Qwen3.8-27B（56 GB，FP8 为 31 GB）小到可放入单台工作站；其他模型需要 300 GB 至 1.5 TB 内存。',
          },
          {
            q: '智谱 AI 的 GLM 模型有哪些硬件要求？',
            a: 'GLM-5.3-Flash 的权重约 328 GB，GLM-5.3 约 756 GB，因此都需要多 GPU 服务器或配备数百 GB 内存的机器，并为 KV 缓存留出空间。两者都无法在消费级 GPU 上运行。',
          },
          {
            q: '哪种许可证最适合微调和自托管？',
            a: '在当前版本中，MIT（DeepSeek-V4.1-Flash、GLM-5.3-Flash）和 Apache 2.0（Qwen3.8-27B）最为宽松。GLM-5.3、Kimi-K3 和最大的 Qwen 模型采用自定义许可证，请先阅读模型卡。',
          },
          {
            q: 'Hugging Face 难以访问时，从哪里获取模型和工具？',
            a: 'ModelScope 托管 Qwen，并镜像许多其他中国发布的模型。请核实发布者和校验和；如果网络受限，请为运行时规划内部镜像或离线安装。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[编码的最佳 Qwen 模型？](/prompt-bites/best-qwen-model-for-coding) — 根据任务匹配 Qwen 模型规模',
          '[DeepSeek-V3 本地硬件要求？](/prompt-bites/deepseek-v3-local-hardware-requirements) — DeepSeek 的硬件规划',
          '[中文对比英文提示：哪个更好？](/prompt-bites/chinese-prompting-vs-english-prompting) — 相关多语言考量',
          '[在中国完全离线运行DeepSeek（自托管设置）](/power-local-llm/deepseek-offline-china-self-hosted-2026) — 完整的自托管部署指南',
        ],
      },
    },
  },
}
