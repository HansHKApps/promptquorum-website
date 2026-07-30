import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-en.png',
    title: 'Best Local LLM for Mainland-China-Compliant Deployments?',
    seoTitle: 'Best Local LLM for China-Compliant Deployment 2026',
    metaDescription: 'Qwen and DeepSeek, developed by PRC companies under domestic content-review rules, are the most-used local LLMs for mainland-China-facing deployments.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Developers deploying local LLMs for mainland-China-facing products or teams',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) and DeepSeek are the most-used local LLMs for mainland-China-facing deployments</strong> — both are developed by PRC companies whose models are built under domestic content-review requirements. Running either fully locally, on your own hardware, sidesteps the separate regulatory questions that apply specifically to public-facing generative AI services. This is general orientation, not legal advice — confirm requirements for your specific deployment with counsel.',
    toc: [
      { label: 'Best Pick: Qwen or DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Which local LLM is best for mainland-China-compliant deployments?',
        answer: 'Qwen (Alibaba) and DeepSeek are the most-used local LLMs for China-facing deployments — both are built by PRC companies under domestic content-review norms. Confirm your specific compliance requirements with legal counsel, as this is general orientation, not legal advice.',
        bullets: [
          'Qwen and DeepSeek are developed by PRC companies and generally pre-aligned with domestic content-review expectations.',
          'GLM (Zhipu AI) is another PRC-developed open-weight option worth evaluating for the same reasons.',
          'Local, self-hosted deployment differs from operating a public-facing generative AI service — the two are subject to different regulatory considerations.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Most-used picks: Qwen (Alibaba) and DeepSeek — both developed by PRC companies under domestic content-review norms',
          'GLM (Zhipu AI) is another PRC-developed open-weight option worth evaluating alongside them',
          'Local, self-hosted use is a different regulatory question than operating a public-facing AI service',
          'This is general orientation, not legal advice — confirm your specific requirements with qualified counsel',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Qwen or DeepSeek',
        content: [
          '<strong>Qwen (developed by Alibaba) and DeepSeek are the most commonly used local LLMs for mainland-China-facing deployments, since both are developed by PRC companies whose training and alignment processes already operate under domestic content-review norms.</strong> Using models built by domestic developers, rather than adapting a foreign model after the fact, is the more common approach for teams targeting the China market.',
          'GLM, developed by Zhipu AI, is another PRC-developed open-weight family worth evaluating alongside Qwen and DeepSeek for the same underlying reasons — it is built by a domestic developer and available in open-weight configurations suitable for local, self-hosted deployment.',
          'Importantly, running any of these models fully locally on your own hardware is a different situation from operating a public-facing generative AI service, which in mainland China is subject to separate service-level regulatory requirements (including registration and content-review obligations that apply to the service, not just the underlying model). Local, internal, or non-public use generally sits outside those specific service-level requirements — but this distinction, and how it applies to your specific product, is exactly the kind of thing to confirm with legal counsel familiar with the current regulatory landscape, not decide from a technical blog post.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          'All three are viable starting points, and the right choice for your project depends more on task performance (coding, general chat, multilingual support) than on compliance considerations, since all three share the same basic "PRC-developed, domestically content-reviewed" profile.',
          'Evaluate them the same way you\'d evaluate any other model family — benchmark on your actual use case — rather than assuming compliance status alone should decide between them.',
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
            a: 'Hardware requirements depend on the specific model size you choose from each family — see the dedicated DeepSeek V3 local hardware requirements guide for details. Both families offer a range of sizes suited to different hardware budgets.',
          },
          {
            q: 'Are there China-compliant models available in smaller sizes for modest hardware?',
            a: 'Yes — both Qwen and DeepSeek are released in multiple parameter sizes, including smaller 7B-14B variants that run on consumer GPU hardware, not just the largest flagship sizes.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best Qwen Model for Coding?](/prompt-bites/best-qwen-model-for-coding) — sizing a Qwen model to your task',
          '[DeepSeek V3 Local Hardware Requirements?](/prompt-bites/deepseek-v3-local-hardware-requirements) — hardware sizing for DeepSeek',
          '[Chinese vs English Prompting: Which Is Better?](/prompt-bites/chinese-prompting-vs-english-prompting) — related multilingual considerations',
          '[Run DeepSeek Fully Offline in China (Self-Hosted Setup)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — the complete self-hosted deployment guide',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-ar.png',
    title: 'أفضل LLM محلي للنشر المتوافق مع الصين القارية؟',
    seoTitle: 'أفضل LLM محلي للنشر المتوافق مع الصين 2026',
    metaDescription: 'نموذجا Qwen وDeepSeek، المطوَّران من قِبل شركات صينية بموجب متطلبات مراجعة محتوى محلية، هما الأكثر استخدامًا من نماذج LLM المحلية للنشر الموجَّه للصين القارية.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'المطورون الذين ينشرون نماذج LLM محلية لمنتجات أو فرق موجَّهة للصين القارية',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذجا Qwen (من علي بابا) وDeepSeek هما الأكثر استخدامًا من نماذج LLM المحلية للنشر الموجَّه للصين القارية</strong> — كلاهما مطوَّر من قِبل شركات صينية تُبنى نماذجها بموجب متطلبات مراجعة محتوى محلية. تشغيل أي منهما محليًا بالكامل، على عتادك الخاص، يتجنب الأسئلة التنظيمية المنفصلة التي تنطبق تحديدًا على خدمات الذكاء الاصطناعي التوليدي الموجَّهة للعامة. هذا توجيه عام، وليس استشارة قانونية — تأكد من المتطلبات لنشرك المحدد مع مستشار قانوني.',
    toc: [
      { label: 'أفضل اختيار: Qwen أو DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen مقابل DeepSeek مقابل GLM', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'أي LLM محلي هو الأفضل للنشر المتوافق مع الصين القارية؟',
        answer: 'نموذجا Qwen (من علي بابا) وDeepSeek هما الأكثر استخدامًا من نماذج LLM المحلية للنشر الموجَّه للصين — كلاهما مبني من قِبل شركات صينية بموجب معايير مراجعة محتوى محلية. تأكد من متطلبات الامتثال المحددة لديك مع مستشار قانوني، حيث إن هذا توجيه عام، وليس استشارة قانونية.',
        bullets: [
          'نموذجا Qwen وDeepSeek مطوَّران من قِبل شركات صينية ومتوافقان عمومًا مسبقًا مع توقعات مراجعة المحتوى المحلية.',
          'GLM (من Zhipu AI) خيار آخر مفتوح الأوزان مطوَّر في الصين يستحق التقييم للأسباب نفسها.',
          'النشر المحلي المستضاف ذاتيًا يختلف عن تشغيل خدمة ذكاء اصطناعي توليدي موجَّهة للعامة — الاثنان خاضعان لاعتبارات تنظيمية مختلفة.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الاختياران الأكثر استخدامًا: Qwen (علي بابا) وDeepSeek — كلاهما مطوَّر من قِبل شركات صينية بموجب معايير مراجعة محتوى محلية',
          'GLM (من Zhipu AI) خيار آخر مفتوح الأوزان مطوَّر في الصين يستحق التقييم إلى جانبهما',
          'الاستخدام المحلي المستضاف ذاتيًا سؤال تنظيمي مختلف عن تشغيل خدمة ذكاء اصطناعي موجَّهة للعامة',
          'هذا توجيه عام، وليس استشارة قانونية — تأكد من متطلباتك المحددة مع مستشار قانوني مؤهل',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Qwen أو DeepSeek',
        content: [
          '<strong>نموذجا Qwen (المطوَّر من قِبل علي بابا) وDeepSeek هما الأكثر استخدامًا من نماذج LLM المحلية للنشر الموجَّه للصين القارية، حيث إن كليهما مطوَّر من قِبل شركات صينية تعمل عمليات تدريبها ومواءمتها بالفعل بموجب معايير مراجعة المحتوى المحلية.</strong> استخدام نماذج مبنية من قِبل مطورين محليين، بدلًا من تكييف نموذج أجنبي لاحقًا، هو النهج الأكثر شيوعًا للفرق التي تستهدف السوق الصينية.',
          'GLM، المطوَّر من قِبل Zhipu AI، هو عائلة أخرى مفتوحة الأوزان مطوَّرة في الصين تستحق التقييم إلى جانب Qwen وDeepSeek للأسباب الأساسية نفسها — إنه مبني من قِبل مطوّر محلي ومتوفر بتكوينات مفتوحة الأوزان مناسبة للنشر المحلي المستضاف ذاتيًا.',
          'من المهم أن تشغيل أي من هذه النماذج محليًا بالكامل على عتادك الخاص وضع مختلف عن تشغيل خدمة ذكاء اصطناعي توليدي موجَّهة للعامة، والتي تخضع في الصين القارية لمتطلبات تنظيمية منفصلة على مستوى الخدمة (بما فيها التزامات التسجيل ومراجعة المحتوى التي تنطبق على الخدمة نفسها، وليس فقط النموذج الأساسي). عمومًا يقع الاستخدام المحلي أو الداخلي أو غير العام خارج تلك المتطلبات المحددة على مستوى الخدمة — لكن هذا التمييز، وكيفية انطباقه على منتجك المحدد، هو بالضبط ما يجب تأكيده مع مستشار قانوني مطّلع على المشهد التنظيمي الحالي، وليس تقريره من مقالة تقنية.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen مقابل DeepSeek مقابل GLM',
        content: [
          'جميع الثلاثة نقاط انطلاق قابلة للتطبيق، ويعتمد الاختيار الصحيح لمشروعك أكثر على أداء المهمة (الأكواد، الدردشة العامة، الدعم متعدد اللغات) من اعتبارات الامتثال، حيث يشترك الثلاثة نفس الملف الأساسي "مطوَّر في الصين، مراجَع محتواه محليًا".',
          'قيّمها بنفس الطريقة التي تقيّم بها أي عائلة نماذج أخرى — قِس على حالة استخدامك الفعلية — بدلًا من افتراض أن حالة الامتثال وحدها يجب أن تحسم بينها.',
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
            a: 'تعتمد متطلبات العتاد على حجم النموذج المحدد الذي تختاره من كل عائلة — راجع دليل متطلبات عتاد DeepSeek V3 المحلي المخصص للتفاصيل. تطرح كلتا العائلتين نطاقًا من الأحجام المناسبة لميزانيات عتاد مختلفة.',
          },
          {
            q: 'هل هناك نماذج متوافقة مع الصين متوفرة بأحجام أصغر لعتاد متواضع؟',
            a: 'نعم — يُصدَر كل من Qwen وDeepSeek بأحجام معاملات متعددة، بما فيها متغيرات 7B-14B أصغر تعمل على عتاد بطاقة GPU استهلاكية، وليس فقط الأحجام الرائدة الأكبر.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل نموذج Qwen للأكواد؟](/prompt-bites/best-qwen-model-for-coding) — تحديد حجم نموذج Qwen لمهمتك',
          '[متطلبات عتاد DeepSeek V3 المحلي؟](/prompt-bites/deepseek-v3-local-hardware-requirements) — تحديد حجم العتاد لـ DeepSeek',
          '[التلقين بالصينية مقابل الإنجليزية: أيهما أفضل؟](/prompt-bites/chinese-prompting-vs-english-prompting) — اعتبارات ذات صلة متعددة اللغات',
          '[تشغيل DeepSeek بشكل كامل دون اتصال في الصين (إعداد ذاتي الاستضافة)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — الدليل الكامل للنشر ذاتي الاستضافة',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-de.png',
    title: 'Das beste lokale LLM für China-konforme Deployments?',
    seoTitle: 'Bestes lokales LLM für China-konforme Deployments 2026',
    metaDescription: 'Qwen und DeepSeek, entwickelt von chinesischen Firmen unter inländischen Content-Review-Regeln, sind die meistgenutzten lokalen LLMs für China.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Entwickler, die lokale LLMs für China-gerichtete Produkte oder Teams einsetzen',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) und DeepSeek sind die meistgenutzten lokalen LLMs für China-gerichtete Deployments</strong> — beide wurden von chinesischen Unternehmen entwickelt, deren Modelle unter inländischen Content-Review-Anforderungen gebaut werden. Der vollständig lokale Betrieb auf eigener Hardware umgeht die separaten regulatorischen Fragen, die speziell für öffentlich zugängliche generative KI-Dienste gelten. Dies ist allgemeine Orientierung, keine Rechtsberatung — bestätigen Sie die Anforderungen für Ihr spezifisches Deployment mit Rechtsberatung.',
    toc: [
      { label: 'Beste Wahl: Qwen oder DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen vs. DeepSeek vs. GLM', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Welches lokale LLM eignet sich am besten für China-konforme Deployments?',
        answer: 'Qwen (Alibaba) und DeepSeek sind die meistgenutzten lokalen LLMs für China-gerichtete Deployments — beide von chinesischen Unternehmen unter inländischen Content-Review-Normen gebaut. Bestätigen Sie Ihre spezifischen Compliance-Anforderungen mit Rechtsberatung, da dies allgemeine Orientierung, keine Rechtsberatung ist.',
        bullets: [
          'Qwen und DeepSeek werden von chinesischen Unternehmen entwickelt und sind im Allgemeinen bereits auf inländische Content-Review-Erwartungen abgestimmt.',
          'GLM (Zhipu AI) ist eine weitere von einem chinesischen Unternehmen entwickelte offene Option, die aus denselben Gründen einen Blick wert ist.',
          'Lokales, selbst gehostetes Deployment unterscheidet sich vom Betrieb eines öffentlich zugänglichen generativen KI-Dienstes — beide unterliegen unterschiedlichen regulatorischen Überlegungen.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meistgenutzte Wahl: Qwen (Alibaba) und DeepSeek — beide von chinesischen Unternehmen unter inländischen Content-Review-Normen entwickelt',
          'GLM (Zhipu AI) ist eine weitere von einem chinesischen Unternehmen entwickelte offene Option, die daneben eine Prüfung wert ist',
          'Lokale, selbst gehostete Nutzung ist eine andere regulatorische Frage als der Betrieb eines öffentlich zugänglichen KI-Dienstes',
          'Dies ist allgemeine Orientierung, keine Rechtsberatung — bestätigen Sie Ihre spezifischen Anforderungen mit qualifizierter Rechtsberatung',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Qwen oder DeepSeek',
        content: [
          '<strong>Qwen (entwickelt von Alibaba) und DeepSeek sind die am häufigsten genutzten lokalen LLMs für China-gerichtete Deployments, da beide von chinesischen Unternehmen entwickelt werden, deren Trainings- und Alignment-Prozesse bereits unter inländischen Content-Review-Normen ablaufen.</strong> Die Nutzung von Modellen, die von inländischen Entwicklern gebaut wurden, statt ein ausländisches Modell nachträglich anzupassen, ist der gängigere Ansatz für Teams, die den China-Markt anvisieren.',
          'GLM, entwickelt von Zhipu AI, ist eine weitere von einem chinesischen Unternehmen entwickelte offene Familie, die aus denselben zugrunde liegenden Gründen neben Qwen und DeepSeek eine Prüfung wert ist — sie wird von einem inländischen Entwickler gebaut und ist in offenen Konfigurationen verfügbar, die für lokales, selbst gehostetes Deployment geeignet sind.',
          'Wichtig ist: Der vollständig lokale Betrieb eines dieser Modelle auf eigener Hardware unterscheidet sich vom Betrieb eines öffentlich zugänglichen generativen KI-Dienstes, der in Festlandchina separaten dienstbezogenen regulatorischen Anforderungen unterliegt (einschließlich Registrierungs- und Content-Review-Pflichten, die für den Dienst gelten, nicht nur das zugrunde liegende Modell). Lokale, interne oder nicht-öffentliche Nutzung fällt im Allgemeinen nicht unter diese spezifischen dienstbezogenen Anforderungen — aber diese Unterscheidung und wie sie auf Ihr spezifisches Produkt zutrifft, ist genau die Art von Sache, die mit Rechtsberatung zu bestätigen ist, die mit der aktuellen regulatorischen Landschaft vertraut ist, nicht anhand eines technischen Blogbeitrags zu entscheiden.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs. DeepSeek vs. GLM',
        content: [
          'Alle drei sind tragfähige Ausgangspunkte, und die richtige Wahl für Ihr Projekt hängt eher von der Aufgabenleistung ab (Coding, allgemeiner Chat, mehrsprachiger Support) als von Compliance-Überlegungen, da alle drei dasselbe grundlegende Profil „chinesisch entwickelt, inländisch content-reviewed" teilen.',
          'Bewerten Sie sie genauso, wie Sie jede andere Modellfamilie bewerten würden — benchmarken Sie an Ihrem tatsächlichen Anwendungsfall — statt anzunehmen, dass allein der Compliance-Status zwischen ihnen entscheiden sollte.',
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
            q: 'Gibt es China-konforme Modelle in kleineren Größen für bescheidene Hardware?',
            a: 'Ja — sowohl Qwen als auch DeepSeek werden in mehreren Parametergrößen veröffentlicht, einschließlich kleinerer 7B-14B-Varianten, die auf Consumer-GPU-Hardware laufen, nicht nur den größten Flaggschiff-Größen.',
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
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-es.png',
    title: '¿Cuál es el Mejor LLM Local para Despliegues Compatibles con China Continental?',
    seoTitle: 'Mejor LLM Local para Despliegue Compatible con China 2026',
    metaDescription: 'Qwen y DeepSeek, desarrollados por empresas chinas bajo normas de revisión de contenido, son los LLM locales más usados para China continental.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Desarrolladores que despliegan LLM locales para productos o equipos orientados a China continental',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) y DeepSeek son los LLM locales más usados para despliegues orientados a China continental</strong> — ambos son desarrollados por empresas de la RPC cuyos modelos se construyen bajo requisitos nacionales de revisión de contenido. Ejecutar cualquiera de los dos completamente en local, en tu propio hardware, evita las cuestiones regulatorias separadas que aplican específicamente a los servicios públicos de IA generativa. Esto es orientación general, no asesoría legal — confirma los requisitos de tu despliegue específico con asesoría legal.',
    toc: [
      { label: 'Mejor Opción: Qwen o DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál LLM local es mejor para despliegues compatibles con China continental?',
        answer: 'Qwen (Alibaba) y DeepSeek son los LLM locales más usados para despliegues orientados a China — ambos construidos por empresas de la RPC bajo normas nacionales de revisión de contenido. Confirma tus requisitos de cumplimiento específicos con asesoría legal, ya que esto es orientación general, no asesoría legal.',
        bullets: [
          'Qwen y DeepSeek son desarrollados por empresas de la RPC y generalmente ya están alineados con las expectativas nacionales de revisión de contenido.',
          'GLM (Zhipu AI) es otra opción de pesos abiertos desarrollada por la RPC que vale la pena evaluar por las mismas razones.',
          'El despliegue local y autoalojado difiere de operar un servicio público de IA generativa — ambos están sujetos a consideraciones regulatorias diferentes.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Opciones más usadas: Qwen (Alibaba) y DeepSeek — ambas desarrolladas por empresas de la RPC bajo normas nacionales de revisión de contenido',
          'GLM (Zhipu AI) es otra opción de pesos abiertos desarrollada en la RPC que vale la pena evaluar junto a ellas',
          'El uso local y autoalojado es una cuestión regulatoria diferente a operar un servicio público de IA',
          'Esto es orientación técnica general, no asesoría legal — confirma tus requisitos específicos con asesoría calificada',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Qwen o DeepSeek',
        content: [
          '<strong>Qwen (desarrollado por Alibaba) y DeepSeek son los LLM locales más comúnmente usados para despliegues orientados a China continental, ya que ambos son desarrollados por empresas de la RPC cuyos procesos de entrenamiento y alineación ya operan bajo normas nacionales de revisión de contenido.</strong> Usar modelos construidos por desarrolladores nacionales, en lugar de adaptar un modelo extranjero después del hecho, es el enfoque más común para equipos que apuntan al mercado chino.',
          'GLM, desarrollado por Zhipu AI, es otra familia de pesos abiertos desarrollada en la RPC que vale la pena evaluar junto a Qwen y DeepSeek por las mismas razones subyacentes — está construida por un desarrollador nacional y disponible en configuraciones de pesos abiertos adecuadas para despliegue local y autoalojado.',
          'Es importante destacar que ejecutar cualquiera de estos modelos completamente en local, en tu propio hardware, es una situación diferente a operar un servicio público de IA generativa, que en China continental está sujeto a requisitos regulatorios separados a nivel de servicio (incluidas obligaciones de registro y revisión de contenido que aplican al servicio, no solo al modelo subyacente). El uso local, interno o no público generalmente queda fuera de esos requisitos específicos a nivel de servicio — pero esta distinción, y cómo aplica a tu producto específico, es exactamente el tipo de cosa que hay que confirmar con asesoría legal familiarizada con el panorama regulatorio actual, no decidir a partir de una entrada de blog técnico.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          'Los tres son puntos de partida viables, y la elección correcta para tu proyecto depende más del rendimiento en la tarea (código, chat general, soporte multilingüe) que de consideraciones de cumplimiento, ya que los tres comparten el mismo perfil básico de "desarrollado en la RPC, con revisión de contenido nacional".',
          'Evalúalos de la misma forma que evaluarías cualquier otra familia de modelos — mediante benchmarks en tu caso de uso real — en lugar de asumir que el estado de cumplimiento por sí solo debería decidir entre ellos.',
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
            a: 'Los requisitos de hardware dependen del tamaño de modelo específico que elijas de cada familia — consulta la guía dedicada de requisitos de hardware local de DeepSeek V3 para más detalles. Ambas familias ofrecen una gama de tamaños adecuados para distintos presupuestos de hardware.',
          },
          {
            q: '¿Hay modelos compatibles con China disponibles en tamaños más pequeños para hardware modesto?',
            a: 'Sí — tanto Qwen como DeepSeek se lanzan en múltiples tamaños de parámetros, incluidas variantes más pequeñas de 7B-14B que corren en hardware de GPU de consumo, no solo en los tamaños insignia más grandes.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Mejor Modelo Qwen para Programar?](/prompt-bites/best-qwen-model-for-coding) — dimensionando un modelo Qwen a tu tarea',
          '[¿Requisitos de Hardware Local para DeepSeek V3?](/prompt-bites/deepseek-v3-local-hardware-requirements) — dimensionamiento de hardware para DeepSeek',
          '[Prompting en Chino vs Inglés: ¿Cuál Es Mejor?](/prompt-bites/chinese-prompting-vs-english-prompting) — consideraciones multilingües relacionadas',
          '[Ejecutar DeepSeek totalmente offline en China (configuración autoalojada)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — la guía completa de implementación autoalojada',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-fr.png',
    title: 'Quel est le meilleur LLM local pour les déploiements conformes à la Chine continentale ?',
    seoTitle: 'Meilleur LLM local pour déploiement conforme en Chine 2026',
    metaDescription: 'Qwen et DeepSeek, développés par des entreprises chinoises soumises au contrôle de contenu domestique, sont les LLM locaux les plus utilisés pour la Chine.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Développeurs déployant des LLM locaux pour des produits ou équipes destinés à la Chine continentale',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen (Alibaba) et DeepSeek sont les LLM locaux les plus utilisés pour les déploiements destinés à la Chine continentale</strong> — tous deux sont développés par des entreprises chinoises dont les modèles sont construits selon des exigences de contrôle de contenu domestiques. Exécuter l\'un ou l\'autre entièrement en local, sur votre propre matériel, permet d\'éviter les questions réglementaires distinctes qui s\'appliquent spécifiquement aux services d\'IA générative destinés au public. Il s\'agit d\'une orientation générale, pas d\'un conseil juridique — confirmez les exigences de votre déploiement spécifique auprès d\'un conseil juridique.',
    toc: [
      { label: 'Meilleur choix : Qwen ou DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen face à DeepSeek face à GLM', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour les déploiements conformes en Chine continentale ?',
        answer: 'Qwen (Alibaba) et DeepSeek sont les LLM locaux les plus utilisés pour les déploiements destinés à la Chine — tous deux construits par des entreprises chinoises selon des normes de contrôle de contenu domestiques. Confirmez vos exigences de conformité spécifiques auprès d\'un conseil juridique, car ceci est une orientation générale, pas un conseil juridique.',
        bullets: [
          'Qwen et DeepSeek sont développés par des entreprises chinoises et généralement pré-alignés avec les attentes de contrôle de contenu domestiques.',
          'GLM (Zhipu AI) est une autre option à poids ouverts développée en Chine, à évaluer pour les mêmes raisons.',
          'Un déploiement local et auto-hébergé diffère de l\'exploitation d\'un service d\'IA générative destiné au public — les deux sont soumis à des considérations réglementaires différentes.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Choix les plus utilisés : Qwen (Alibaba) et DeepSeek — tous deux développés par des entreprises chinoises selon des normes de contrôle de contenu domestiques',
          'GLM (Zhipu AI) est une autre option à poids ouverts développée en Chine, à évaluer aux côtés des précédentes',
          'Un usage local et auto-hébergé est une question réglementaire différente de l\'exploitation d\'un service d\'IA public',
          'Ceci est une orientation générale, pas un conseil juridique — confirmez vos exigences spécifiques auprès d\'un conseil qualifié',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Qwen ou DeepSeek',
        content: [
          '<strong>Qwen (développé par Alibaba) et DeepSeek sont les LLM locaux les plus couramment utilisés pour les déploiements destinés à la Chine continentale, car tous deux sont développés par des entreprises chinoises dont les processus d\'entraînement et d\'alignement fonctionnent déjà selon les normes de contrôle de contenu domestiques.</strong> Utiliser des modèles construits par des développeurs nationaux, plutôt que d\'adapter un modèle étranger après coup, est l\'approche la plus courante pour les équipes ciblant le marché chinois.',
          'GLM, développé par Zhipu AI, est une autre famille à poids ouverts développée en Chine qui mérite d\'être évaluée aux côtés de Qwen et DeepSeek pour les mêmes raisons sous-jacentes — elle est construite par un développeur national et disponible dans des configurations à poids ouverts adaptées à un déploiement local et auto-hébergé.',
          'Il est important de noter qu\'exécuter l\'un de ces modèles entièrement en local sur votre propre matériel est une situation différente de l\'exploitation d\'un service d\'IA générative destiné au public, qui en Chine continentale est soumis à des exigences réglementaires distinctes au niveau du service (y compris des obligations d\'enregistrement et de contrôle de contenu qui s\'appliquent au service, pas seulement au modèle sous-jacent). Un usage local, interne ou non public se situe généralement en dehors de ces exigences spécifiques au niveau du service — mais cette distinction, et la façon dont elle s\'applique à votre produit spécifique, est exactement le genre de chose à confirmer auprès d\'un conseil juridique familier avec le paysage réglementaire actuel, pas à décider à partir d\'un article de blog technique.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen face à DeepSeek face à GLM',
        content: [
          'Les trois sont des points de départ viables, et le bon choix pour votre projet dépend davantage de la performance sur la tâche (codage, chat général, support multilingue) que de considérations de conformité, puisque les trois partagent le même profil de base « développé en Chine, contrôlé au niveau du contenu domestique ».',
          'Évaluez-les de la même manière que vous évalueriez toute autre famille de modèles — testez sur votre cas d\'usage réel — plutôt que de supposer que le seul statut de conformité devrait trancher entre eux.',
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
            a: 'Les exigences matérielles dépendent de la taille de modèle spécifique choisie dans chaque famille — consultez le guide dédié aux exigences matérielles locales de DeepSeek V3 pour plus de détails. Les deux familles proposent une gamme de tailles adaptées à différents budgets matériels.',
          },
          {
            q: 'Existe-t-il des modèles conformes à la Chine disponibles en tailles plus modestes pour du matériel limité ?',
            a: 'Oui — Qwen et DeepSeek sont tous deux publiés en plusieurs tailles de paramètres, y compris des variantes plus petites de 7B à 14B qui tournent sur du matériel GPU grand public, pas seulement les tailles phares les plus grandes.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur modèle Qwen pour le codage ?](/prompt-bites/best-qwen-model-for-coding) — dimensionner un modèle Qwen selon votre tâche',
          '[Exigences matérielles locales pour DeepSeek V3 ?](/prompt-bites/deepseek-v3-local-hardware-requirements) — dimensionnement matériel pour DeepSeek',
          '[Prompting en chinois vs en anglais : lequel est le meilleur ?](/prompt-bites/chinese-prompting-vs-english-prompting) — considérations multilingues connexes',
          '[Faire tourner DeepSeek entièrement hors ligne en Chine (auto-hébergement)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — le guide complet de déploiement auto-hébergé',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-ja.png',
    title: '中国本土向けコンプライアンス対応デプロイに最適なローカルLLMは?',
    seoTitle: '2026年版 中国コンプライアンス対応デプロイに最適なローカルLLM',
    metaDescription: '国内コンテンツ審査要件のもとで中国企業により開発されたQwenとDeepSeekが、中国本土向けデプロイで最も使われているローカルLLMです。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '中国本土向け製品やチームのためにローカルLLMをデプロイする開発者',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen(Alibaba)とDeepSeekは、中国本土向けデプロイで最も使われているローカルLLMです</strong> — どちらも国内コンテンツ審査要件のもとで構築するPRC企業により開発されています。どちらも自分のハードウェア上で完全にローカルに実行することで、公開向け生成AIサービスに特に適用される別個の規制上の問題を回避できます。これは一般的な方向づけであり法的助言ではありません — 具体的なデプロイの要件については弁護士に確認してください。',
    toc: [
      { label: 'ベストピック: QwenまたはDeepSeek', anchor: '#best-pick' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: '中国本土向けコンプライアンス対応デプロイに最適なローカルLLMは?',
        answer: 'Qwen(Alibaba)とDeepSeekは、中国向けデプロイで最も使われているローカルLLMです — どちらも国内コンテンツ審査の慣行のもとでPRC企業により構築されています。これは一般的な方向づけであり法的助言ではないため、具体的なコンプライアンス要件は弁護士に確認してください。',
        bullets: [
          'QwenとDeepSeekはPRC企業により開発されており、一般に国内コンテンツ審査の期待に事前に沿っています。',
          'GLM(Zhipu AI)は、同じ理由で評価する価値のある、もう一つのPRC開発のオープンウェイトの選択肢です。',
          'ローカルの自己ホスト型デプロイは、公開向け生成AIサービスの運営とは異なります — この2つは異なる規制上の考慮事項の対象です。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最も使われている選択肢: Qwen(Alibaba)とDeepSeek — どちらも国内コンテンツ審査の慣行のもとでPRC企業により開発',
          'GLM(Zhipu AI)は、これらと並んで評価する価値のあるもう一つのPRC開発のオープンウェイトの選択肢',
          'ローカルの自己ホスト型使用は、公開向けAIサービスの運営とは異なる規制上の問題',
          'これは一般的な方向づけであり法的助言ではありません — 具体的な要件は有資格の弁護士に確認してください',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: QwenまたはDeepSeek',
        content: [
          '<strong>Alibabaが開発したQwenとDeepSeekは、中国本土向けデプロイで最も一般的に使われているローカルLLMです。どちらもPRC企業により開発され、そのトレーニングとアラインメントのプロセスが既に国内コンテンツ審査の慣行のもとで動作しているためです。</strong>外国モデルを後から適応させるのではなく、国内開発者が構築したモデルを使うことが、中国市場をターゲットとするチームにとってより一般的なアプローチです。',
          'Zhipu AIが開発したGLMは、同じ根本的な理由から、QwenやDeepSeekと並んで評価する価値のある、もう一つのPRC開発のオープンウェイトファミリーです — 国内開発者により構築され、ローカルの自己ホスト型デプロイに適したオープンウェイト構成で利用可能です。',
          '重要なのは、これらのモデルのいずれかを自分のハードウェア上で完全にローカルに実行することは、中国本土では公開向け生成AIサービスを運営することとは異なる状況だという点です。後者は基盤となるモデルだけでなくサービス自体に適用される、登録やコンテンツ審査の義務を含む別個のサービスレベルの規制要件の対象となります。ローカル、社内、または非公開の使用は一般にこれらの特定のサービスレベル要件の対象外ですが、この区別と、それが自社の具体的な製品にどう適用されるかは、技術ブログの記事から判断するのではなく、現行の規制動向に精通した弁護士に確認すべき、まさにそうした種類の事項です。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          '3つとも実行可能な出発点であり、プロジェクトにとって正しい選択は、コンプライアンス上の考慮事項よりもタスクの性能(コーディング、一般的なチャット、多言語サポート)に大きく依存します。3つとも「PRC開発、国内コンテンツ審査済み」という同じ基本プロファイルを共有しているためです。',
          'コンプライアンス状況だけでどちらかに決めるのではなく、他のモデルファミリーを評価するのと同じ方法で評価してください — 実際のユースケースでベンチマークしてください。',
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
            q: '控えめなハードウェア向けの小型サイズで利用可能な中国コンプライアンス対応モデルはありますか?',
            a: 'はい — QwenとDeepSeekはどちらも複数のパラメータサイズでリリースされており、最大のフラッグシップサイズだけでなく、コンシューマーGPUハードウェアで動作する小型の7B-14Bバリアントも含まれます。',
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
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-ko.png',
    title: '중국 본토 규정 준수 배포에 최적의 로컬 LLM은?',
    seoTitle: '2026년 중국 규정 준수 로컬 LLM 최적 선택',
    metaDescription: 'PRC 기업이 자국 콘텐츠 심사 요건 하에 개발한 Qwen과 DeepSeek은 중국 본토 대상 배포에 가장 많이 사용되는 로컬 LLM입니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '중국 본토 대상 제품이나 팀을 위해 로컬 LLM을 배포하는 개발자',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen(Alibaba)과 DeepSeek은 중국 본토 대상 배포에 가장 많이 사용되는 로컬 LLM입니다</strong> — 둘 다 자국 콘텐츠 심사 요건 하에 구축된 PRC 기업이 개발했습니다. 자신의 하드웨어에서 전적으로 로컬로 실행하는 것은 공개 대상 생성형 AI 서비스에 특별히 적용되는 별도의 규제 문제를 피해 갑니다. 이는 일반적인 방향 제시이지 법률 자문이 아닙니다 — 구체적인 배포 요건은 법률 전문가와 확인하십시오.',
    toc: [
      { label: '최적의 선택: Qwen 또는 DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen 대 DeepSeek 대 GLM', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '중국 본토 규정 준수 배포에 어떤 로컬 LLM이 최적입니까?',
        answer: 'Qwen(Alibaba)과 DeepSeek은 중국 대상 배포에 가장 많이 사용되는 로컬 LLM입니다 — 둘 다 자국 콘텐츠 심사 규범 하에 PRC 기업이 구축했습니다. 이는 일반적인 방향 제시이지 법률 자문이 아니므로 구체적인 규정 준수 요건은 법률 전문가와 확인하십시오.',
        bullets: [
          'Qwen과 DeepSeek은 PRC 기업이 개발했으며 일반적으로 자국 콘텐츠 심사 기대치에 사전 정렬되어 있습니다.',
          'GLM(Zhipu AI)은 같은 이유로 평가할 가치가 있는 또 다른 PRC 개발 개방형 가중치 옵션입니다.',
          '로컬, 자체 호스팅 배포는 공개 대상 생성형 AI 서비스 운영과는 다르며, 둘은 서로 다른 규제 고려사항의 대상입니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '가장 많이 사용되는 선택: Qwen(Alibaba)과 DeepSeek — 둘 다 자국 콘텐츠 심사 규범 하에 PRC 기업이 개발했습니다',
          'GLM(Zhipu AI)은 이들과 나란히 평가할 가치가 있는 또 다른 PRC 개발 개방형 가중치 옵션입니다',
          '로컬, 자체 호스팅 사용은 공개 대상 AI 서비스 운영과는 다른 규제 문제입니다',
          '이는 일반적인 방향 제시이지 법률 자문이 아닙니다 — 구체적인 요건은 자격을 갖춘 법률 전문가와 확인하십시오',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Qwen 또는 DeepSeek',
        content: [
          '<strong>Alibaba가 개발한 Qwen과 DeepSeek은 훈련 및 정렬 과정이 이미 자국 콘텐츠 심사 규범 하에서 운영되는 PRC 기업이 개발했기 때문에 중국 본토 대상 배포에 가장 흔히 사용되는 로컬 LLM입니다.</strong> 외국 모델을 사후에 조정하기보다 국내 개발자가 구축한 모델을 사용하는 것이 중국 시장을 대상으로 하는 팀에서 더 흔한 접근 방식입니다.',
          'Zhipu AI가 개발한 GLM은 동일한 근본적인 이유로 Qwen 및 DeepSeek과 나란히 평가할 가치가 있는 또 다른 PRC 개발 개방형 가중치 계열입니다 — 국내 개발자가 구축했으며 로컬 자체 호스팅 배포에 적합한 개방형 가중치 구성으로 제공됩니다.',
          '중요한 점은, 이들 모델 중 어느 것이든 자신의 하드웨어에서 완전히 로컬로 실행하는 것은 중국 본토에서 별도의 서비스 수준 규제 요건(모델 자체가 아니라 서비스에 적용되는 등록 및 콘텐츠 심사 의무 포함)의 대상이 되는 공개 대상 생성형 AI 서비스를 운영하는 것과는 다른 상황이라는 것입니다. 로컬, 내부, 또는 비공개 사용은 일반적으로 그러한 특정 서비스 수준 요건의 범위 밖에 있습니다 — 하지만 이 구분과 이것이 귀하의 특정 제품에 어떻게 적용되는지는 기술 블로그 게시물로 결정할 것이 아니라, 현재의 규제 환경에 정통한 법률 전문가와 정확히 확인해야 할 사안입니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen 대 DeepSeek 대 GLM',
        content: [
          '세 가지 모두 실행 가능한 출발점이며, 프로젝트에 올바른 선택은 규정 준수 고려사항보다 작업 성능(코딩, 일반 채팅, 다국어 지원)에 더 좌우됩니다. 세 가지 모두 동일한 기본적인 "PRC 개발, 국내 콘텐츠 심사" 프로필을 공유하기 때문입니다.',
          '규정 준수 상태만으로 이들 중 선택하기보다, 다른 모델 계열을 평가하는 것과 같은 방식으로 — 실제 사용 사례로 벤치마크하여 — 평가하십시오.',
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
            a: '하드웨어 요구사항은 각 계열에서 선택한 구체적인 모델 크기에 따라 다릅니다 — 자세한 내용은 전용 DeepSeek V3 로컬 하드웨어 요구사항 가이드를 참고하십시오. 두 계열 모두 서로 다른 하드웨어 예산에 맞는 다양한 크기를 제공합니다.',
          },
          {
            q: '적당한 하드웨어를 위한 더 작은 크기의 중국 규정 준수 모델이 있습니까?',
            a: '예 — Qwen과 DeepSeek 모두 최대 플래그십 크기뿐 아니라 소비자용 GPU 하드웨어에서 실행되는 더 작은 7B-14B 변형을 포함한 여러 파라미터 크기로 출시됩니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[코딩을 위한 최적의 Qwen 모델은?](/prompt-bites/best-qwen-model-for-coding) — 작업에 맞춰 Qwen 모델 크기 조정하기',
          '[DeepSeek V3 로컬 하드웨어 요구사항은?](/prompt-bites/deepseek-v3-local-hardware-requirements) — DeepSeek을 위한 하드웨어 산정',
          '[중국어 대 영어 프롬프팅: 어느 것이 더 나은가?](/prompt-bites/chinese-prompting-vs-english-prompting) — 관련 다국어 고려사항',
          '[중국에서 DeepSeek을 완전히 오프라인으로 실행하기(자체 호스팅 설정)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — 완전한 자체 호스팅 배포 가이드',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-pt.png',
    title: 'Qual o Melhor LLM Local para Implantações Compatíveis com a China Continental?',
    seoTitle: 'Melhor LLM Local para Implantação Compatível com a China 2026',
    metaDescription: 'O Qwen e o DeepSeek, desenvolvidos por empresas chinesas sob normas domésticas de revisão de conteúdo, são os LLMs locais mais usados na China continental.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Desenvolvedores implantando LLMs locais para produtos ou equipes voltados à China continental',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O Qwen (Alibaba) e o DeepSeek são os LLMs locais mais usados para implantações voltadas à China continental</strong> — ambos são desenvolvidos por empresas da RPC cujos modelos são construídos sob requisitos domésticos de revisão de conteúdo. Rodar qualquer um deles totalmente localmente, no seu próprio hardware, contorna as questões regulatórias separadas que se aplicam especificamente a serviços de IA generativa voltados ao público. Esta é uma orientação geral, não aconselhamento jurídico — confirme os requisitos para sua implantação específica com um advogado.',
    toc: [
      { label: 'Melhor Escolha: Qwen ou DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen vs DeepSeek vs GLM', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual LLM local é melhor para implantações compatíveis com a China continental?',
        answer: 'O Qwen (Alibaba) e o DeepSeek são os LLMs locais mais usados para implantações voltadas à China — ambos são construídos por empresas da RPC sob normas domésticas de revisão de conteúdo. Confirme seus requisitos específicos de conformidade com um advogado, já que esta é uma orientação geral, não aconselhamento jurídico.',
        bullets: [
          'O Qwen e o DeepSeek são desenvolvidos por empresas da RPC e geralmente já pré-alinhados com expectativas domésticas de revisão de conteúdo.',
          'O GLM (Zhipu AI) é outra opção de peso aberto desenvolvida na RPC que vale a pena avaliar pelos mesmos motivos.',
          'A implantação local e auto-hospedada difere de operar um serviço público de IA generativa voltado ao usuário final — os dois estão sujeitos a considerações regulatórias diferentes.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Escolhas mais usadas: Qwen (Alibaba) e DeepSeek — ambos desenvolvidos por empresas da RPC sob normas domésticas de revisão de conteúdo',
          'O GLM (Zhipu AI) é outra opção de peso aberto desenvolvida na RPC que vale a pena avaliar junto com eles',
          'O uso local e auto-hospedado é uma questão regulatória diferente de operar um serviço de IA público voltado ao usuário',
          'Esta é orientação geral, não aconselhamento jurídico — confirme seus requisitos específicos com um advogado qualificado',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Qwen ou DeepSeek',
        content: [
          '<strong>O Qwen (desenvolvido pela Alibaba) e o DeepSeek são os LLMs locais mais comumente usados para implantações voltadas à China continental, já que ambos são desenvolvidos por empresas da RPC cujos processos de treinamento e alinhamento já operam sob normas domésticas de revisão de conteúdo.</strong> Usar modelos construídos por desenvolvedores domésticos, em vez de adaptar um modelo estrangeiro depois, é a abordagem mais comum para equipes que visam o mercado chinês.',
          'O GLM, desenvolvido pela Zhipu AI, é outra família de peso aberto desenvolvida na RPC que vale a pena avaliar ao lado do Qwen e do DeepSeek pelos mesmos motivos subjacentes — é construído por um desenvolvedor doméstico e disponível em configurações de peso aberto adequadas para implantação local e auto-hospedada.',
          'É importante notar que rodar qualquer um desses modelos totalmente localmente no seu próprio hardware é uma situação diferente de operar um serviço público de IA generativa, que na China continental está sujeito a requisitos regulatórios separados em nível de serviço (incluindo obrigações de registro e revisão de conteúdo que se aplicam ao serviço, não apenas ao modelo subjacente). O uso local, interno ou não público geralmente fica fora desses requisitos específicos em nível de serviço — mas essa distinção, e como ela se aplica ao seu produto específico, é exatamente o tipo de coisa a confirmar com um advogado familiarizado com o cenário regulatório atual, não algo a decidir a partir de um post técnico de blog.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen vs DeepSeek vs GLM',
        content: [
          'Os três são pontos de partida viáveis, e a escolha certa para seu projeto depende mais do desempenho na tarefa (código, chat geral, suporte multilíngue) do que de considerações de conformidade, já que os três compartilham o mesmo perfil básico de "desenvolvido na RPC, com revisão de conteúdo doméstica".',
          'Avalie-os da mesma forma que você avaliaria qualquer outra família de modelos — faça benchmark no seu caso de uso real — em vez de assumir que apenas o status de conformidade deve decidir entre eles.',
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
            a: 'Os requisitos de hardware dependem do tamanho específico do modelo que você escolhe de cada família — veja o guia dedicado de requisitos de hardware local do DeepSeek V3 para detalhes. Ambas as famílias oferecem uma gama de tamanhos adequados a diferentes orçamentos de hardware.',
          },
          {
            q: 'Existem modelos compatíveis com a China disponíveis em tamanhos menores para hardware modesto?',
            a: 'Sim — tanto o Qwen quanto o DeepSeek são lançados em múltiplos tamanhos de parâmetros, incluindo variantes menores de 7B-14B que rodam em hardware de GPU de consumo, não apenas os maiores tamanhos principais.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Melhor Modelo Qwen para Código?](/prompt-bites/best-qwen-model-for-coding) — dimensionando um modelo Qwen para sua tarefa',
          '[Requisitos de Hardware Local do DeepSeek V3?](/prompt-bites/deepseek-v3-local-hardware-requirements) — dimensionamento de hardware para o DeepSeek',
          '[Prompting em Chinês vs Prompting em Inglês: Qual É Melhor?](/prompt-bites/chinese-prompting-vs-english-prompting) — considerações multilíngues relacionadas',
          '[Execute o DeepSeek totalmente offline na China (configuração autoexecutada)](/power-local-llm/deepseek-offline-china-self-hosted-2026) — o guia completo de implantação autoexecutada',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-china-compliant-local-llm-overview-hero-zh.png',
    title: '适合中国大陆合规部署的最佳本地 LLM 是什么？',
    seoTitle: '2026 年中国合规部署最佳本地 LLM',
    metaDescription: '由中国大陆企业根据国内内容审核规范开发的 Qwen 和 DeepSeek，是面向中国大陆合规部署中使用最广泛的本地 LLM，具体合规要求建议咨询法律顾问。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3', 'DeepSeek V3', 'GLM'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: '为面向中国大陆的产品或团队部署本地 LLM 的开发者',
    siblingBites: ['best-qwen-model-for-coding', 'deepseek-v3-local-hardware-requirements'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen（阿里巴巴）和 DeepSeek 是面向中国大陆部署中使用最广泛的本地 LLM</strong>——两者均由中国大陆企业开发，其模型在国内内容审核要求下构建。完全在自有硬件上本地运行两者，可以规避专门适用于面向公众的生成式 AI 服务的其他监管问题。这只是一般性说明，而非法律建议——请与法律顾问确认你具体部署的要求。',
    toc: [
      { label: '最佳选择：Qwen 或 DeepSeek', anchor: '#best-pick' },
      { label: 'Qwen 对比 DeepSeek 对比 GLM', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '哪种本地 LLM 最适合中国大陆合规部署？',
        answer: 'Qwen（阿里巴巴）和 DeepSeek 是面向中国大陆部署中使用最广泛的本地 LLM——两者均由中国大陆企业在国内内容审核规范下打造。请与法律顾问确认你的具体合规要求，本文仅为一般性说明，而非法律建议。',
        bullets: [
          'Qwen 和 DeepSeek 由中国大陆企业开发，通常已预先与国内内容审核预期相契合。',
          'GLM（智谱 AI）是另一个基于同样理由值得评估的中国大陆开发开放权重选项。',
          '本地自托管部署与运营面向公众的生成式 AI 服务不同——两者受不同的监管考量约束。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '使用最广泛的选择：Qwen（阿里巴巴）和 DeepSeek——均由中国大陆企业在国内内容审核规范下开发',
          'GLM（智谱 AI）是另一个值得与它们一同评估的中国大陆开发开放权重选项',
          '本地自托管使用与运营面向公众的 AI 服务是不同的监管问题',
          '这只是一般性说明，而非法律建议——请与合格的法律顾问确认你的具体要求',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Qwen 或 DeepSeek',
        content: [
          '<strong>Qwen（由阿里巴巴开发）和 DeepSeek 是面向中国大陆部署中最常用的本地 LLM，因为两者均由中国大陆企业开发，其训练和对齐流程本身就在国内内容审核规范下运行。</strong>对于面向中国市场的团队而言，使用国内开发者打造的模型，而不是事后调整外国模型，是更常见的做法。',
          '由智谱 AI 开发的 GLM，是另一个基于同样底层理由，值得与 Qwen 和 DeepSeek 一同评估的中国大陆开发开放权重系列——它由国内开发者打造，并提供适合本地自托管部署的开放权重配置。',
          '重要的是，在自有硬件上完全本地运行这些模型中的任何一个，与运营面向公众的生成式 AI 服务是不同的情况——后者在中国大陆受到单独的服务层面监管要求（包括适用于服务本身而非仅底层模型的注册和内容审核义务）约束。本地、内部或非公开使用通常不在这些特定服务层面要求之列——但这一区别以及它如何适用于你的具体产品，正是应该向熟悉当前监管环境的法律顾问确认的事项，而不应该根据一篇技术博客文章来决定。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Qwen 对比 DeepSeek 对比 GLM',
        content: [
          '三者都是可行的起点，你项目的正确选择更多取决于任务表现（编码、通用聊天、多语言支持），而非合规考量，因为三者都具有相同的「中国大陆开发、国内内容审核」基本特征。',
          '应像评估任何其他模型系列一样评估它们——基于你实际的用例进行基准测试——而不是仅凭合规状态来决定选择。',
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
            a: '硬件要求取决于你从每个系列中选择的具体模型规模——详见专门的 DeepSeek V3 本地硬件要求指南。两个系列都提供适合不同硬件预算的多种规模。',
          },
          {
            q: '有适合普通硬件、规模更小的中国合规模型吗？',
            a: '有——Qwen 和 DeepSeek 都发布了多种参数规模，包括可在消费级 GPU 硬件上运行的较小 7B-14B 变体，而不仅仅是最大的旗舰规模。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[编码的最佳 Qwen 模型？](/prompt-bites/best-qwen-model-for-coding) — 根据任务匹配 Qwen 模型规模',
          '[DeepSeek V3 本地硬件要求？](/prompt-bites/deepseek-v3-local-hardware-requirements) — DeepSeek 的硬件规划',
          '[中文对比英文提示：哪个更好？](/prompt-bites/chinese-prompting-vs-english-prompting) — 相关多语言考量',
          '[在中国完全离线运行DeepSeek（自托管设置）](/power-local-llm/deepseek-offline-china-self-hosted-2026) — 完整的自托管部署指南',
        ],
      },
    },
  },
}
