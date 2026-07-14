import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'GGUF vs GPTQ vs AWQ: Which Quantization Format Should You Use?',
    seoTitle: 'GGUF vs GPTQ vs AWQ Quantization 2026 | Prompt Bites',
    metaDescription: 'GGUF is the best default quantization format for local use — runs on CPU and GPU via llama.cpp/Ollama. GPTQ and AWQ are GPU-only formats built for production serving.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing a quantization format for local or served LLM inference',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF is the best default quantization format for local use</strong> — it runs on both CPU and GPU through llama.cpp and Ollama, with no separate CUDA-only requirement. GPTQ and AWQ are GPU-only formats built for production serving frameworks like vLLM and TGI, where AWQ generally holds quality better than GPTQ at the same bit width.',
    toc: [
      { label: 'Best Pick: GGUF for Local Use, AWQ for Production Serving', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ at a Glance', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Should I use GGUF, GPTQ, or AWQ quantization?',
        answer: 'Use GGUF for local use via Ollama or llama.cpp — it runs on CPU and GPU with no extra requirements. Use AWQ over GPTQ if serving in production with vLLM or TGI, since it holds quality better at the same bit width.',
        bullets: [
          'GGUF: llama.cpp\'s native format — CPU+GPU hybrid inference, the default for Ollama and LM Studio.',
          'GPTQ: GPU-only, calibration-based post-training quantization — an early standard for efficient 4-bit serving.',
          'AWQ (Activation-aware Weight Quantization): GPU-only, generally better quality-per-bit than GPTQ, common in vLLM/TGI production serving.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: the right default for local use — runs on CPU and GPU via llama.cpp/Ollama, no CUDA-only requirement',
          'GPTQ: GPU-only, an early standard for 4-bit serving, still supported by ExLlama and vLLM',
          'AWQ: GPU-only, generally holds quality better than GPTQ at the same bit width — preferred for production serving',
          'If you\'re running Ollama or LM Studio locally, you almost certainly want GGUF, not GPTQ or AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: GGUF for Local Use, AWQ for Production Serving',
        content: [
          '<strong>GGUF is the right quantization format for almost anyone running models locally through Ollama, LM Studio, or llama.cpp directly — it supports both CPU and GPU inference from the same file, including partial CPU offload when a model doesn\'t fully fit in VRAM.</strong> This flexibility is exactly why GGUF became the standard format for consumer local LLM tools: it works whether you have a powerful GPU, a modest one, or none at all.',
          'GPTQ was one of the earliest widely-adopted 4-bit quantization methods for efficient GPU inference. It uses a calibration dataset to minimize quality loss during post-training quantization, but it is GPU-only — there is no meaningful CPU fallback path — and generally has been superseded in quality-per-bit by newer methods.',
          'AWQ (Activation-aware Weight Quantization) is the more modern GPU-only alternative to GPTQ. By protecting the weights that matter most for activation magnitude rather than quantizing everything uniformly, AWQ generally preserves more quality at the same bit width. It is a common choice for production serving stacks like vLLM and TGI, where GPU-only operation is already a given.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ at a Glance',
        content: [
          'Choose GGUF if you\'re running Ollama, LM Studio, or llama.cpp locally — it is the only one of the three with real CPU support and partial-offload flexibility. Choose GPTQ only if you\'re working with an existing pipeline or tool (like older ExLlama setups) that specifically expects it. Choose AWQ if you\'re deploying to a production GPU-serving stack (vLLM, TGI) and want the best quality-per-bit among the GPU-only options.',
          'All three represent the same underlying model at reduced precision — the format determines which tools can load it and how gracefully it handles GPU-memory shortfalls, not the model\'s underlying capability.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I convert a GPTQ or AWQ model to GGUF?',
            a: 'Generally you convert from the original full-precision weights to GGUF directly, rather than converting between two already-quantized formats — going quantized-to-quantized compounds precision loss. If you only have a GPTQ/AWQ checkpoint, look for the original model\'s full-precision release to convert from instead.',
          },
          {
            q: 'Is GGUF slower than GPTQ or AWQ on a GPU?',
            a: 'On a GPU where the model fully fits in VRAM, well-optimized GGUF inference is competitive with GPTQ/AWQ. The gap that matters is when a model doesn\'t fully fit — GGUF gracefully offloads to CPU, while GPTQ/AWQ generally cannot.',
          },
          {
            q: 'Which K-quant level should I use within GGUF?',
            a: 'Q4_K_M is the most common balanced default. See the dedicated Q4_K_M vs Q8_0 comparison for the full tradeoff between file size and quality across GGUF\'s quant levels.',
          },
          {
            q: 'Does Ollama support GPTQ or AWQ models directly?',
            a: 'No — Ollama is built around GGUF specifically. To use a GPTQ or AWQ checkpoint, you need a different serving tool (vLLM, TGI, or ExLlama) designed for that format.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[What Is Q4_K_M Quantization?](/prompt-bites/what-is-q4-k-m-quantization) — GGUF\'s most common quant level explained',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — choosing a GGUF quant level',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — which serving tool pairs with which format',
          '[LLM Quantization Explained (Full Guide)](/local-llms/llm-quantization-explained) — the complete deep dive into how quantization works under the hood',
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'GGUF مقابل GPTQ مقابل AWQ: أي تنسيق تكميم يجب أن تستخدمه؟',
    seoTitle: 'GGUF مقابل GPTQ مقابل AWQ للتكميم 2026 | Prompt Bites',
    metaDescription: 'GGUF هو أفضل تنسيق تكميم افتراضي للاستخدام المحلي — يعمل على CPU وGPU عبر llama.cpp/Ollama. GPTQ وAWQ تنسيقان مخصصان لـ GPU مبنيان للتقديم الإنتاجي.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يختارون تنسيق تكميم لاستدلال LLM محلي أو مُقدَّم',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF هو أفضل تنسيق تكميم افتراضي للاستخدام المحلي</strong> — يعمل على كل من CPU وGPU عبر llama.cpp وOllama، دون متطلب منفصل يقتصر على CUDA. GPTQ وAWQ تنسيقان مخصصان لـ GPU فقط مبنيان لأطر التقديم الإنتاجي مثل vLLM وTGI، حيث تحافظ AWQ عمومًا على الجودة بشكل أفضل من GPTQ عند نفس عمق البت.',
    toc: [
      { label: 'أفضل اختيار: GGUF للاستخدام المحلي، وAWQ للتقديم الإنتاجي', anchor: '#best-pick' },
      { label: 'GGUF مقابل GPTQ مقابل AWQ بلمحة', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أستخدم تكميم GGUF أم GPTQ أم AWQ؟',
        answer: 'استخدم GGUF للاستخدام المحلي عبر Ollama أو llama.cpp — يعمل على CPU وGPU دون متطلبات إضافية. استخدم AWQ بدلًا من GPTQ إذا كنت تقدّم في بيئة إنتاج بـ vLLM أو TGI، لأنها تحافظ على الجودة بشكل أفضل عند نفس عمق البت.',
        bullets: [
          'GGUF: التنسيق الأصلي لـ llama.cpp — استدلال هجين CPU+GPU، الافتراضي لـ Ollama وLM Studio.',
          'GPTQ: مخصص لـ GPU فقط، تكميم بعد التدريب يعتمد على المعايرة — معيار مبكر للتقديم الفعال بـ4-بت.',
          'AWQ (تكميم الأوزان الواعي بالتنشيط): مخصص لـ GPU فقط، جودة أفضل عمومًا لكل بت من GPTQ، شائع في تقديم vLLM/TGI الإنتاجي.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: الافتراضي الصحيح للاستخدام المحلي — يعمل على CPU وGPU عبر llama.cpp/Ollama، دون متطلب يقتصر على CUDA',
          'GPTQ: مخصص لـ GPU فقط، معيار مبكر للتقديم بـ4-بت، لا يزال مدعومًا من ExLlama وvLLM',
          'AWQ: مخصص لـ GPU فقط، يحافظ عمومًا على الجودة بشكل أفضل من GPTQ عند نفس عمق البت — مفضّل للتقديم الإنتاجي',
          'إذا كنت تشغّل Ollama أو LM Studio محليًا، فأنت تريد بالتأكيد GGUF، وليس GPTQ أو AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: GGUF للاستخدام المحلي، وAWQ للتقديم الإنتاجي',
        content: [
          '<strong>GGUF هو تنسيق التكميم الصحيح لأي شخص تقريبًا يشغّل نماذج محليًا عبر Ollama أو LM Studio أو llama.cpp مباشرة — يدعم استدلال CPU وGPU من نفس الملف، بما في ذلك التفريغ الجزئي إلى CPU عندما لا يستوعب النموذج بالكامل في VRAM.</strong> هذه المرونة هي بالضبط سبب أن GGUF أصبح التنسيق القياسي لأدوات LLM المحلية الاستهلاكية: يعمل سواء كان لديك بطاقة GPU قوية أو متواضعة أو لا شيء إطلاقًا.',
          'كانت GPTQ من أوائل طرق التكميم بـ4-بت المعتمدة على نطاق واسع لاستدلال GPU الفعّال. تستخدم مجموعة بيانات معايرة لتقليل فقدان الجودة أثناء التكميم بعد التدريب، لكنها مخصصة لـ GPU فقط — لا يوجد مسار بديل جوهري لـ CPU — وقد تجاوزتها عمومًا طرق أحدث في الجودة لكل بت.',
          'AWQ (تكميم الأوزان الواعي بالتنشيط) هو البديل الأحدث المخصص لـ GPU فقط لـ GPTQ. عبر حماية الأوزان الأكثر أهمية لمقدار التنشيط بدلًا من تكميم كل شيء بشكل موحد، تحافظ AWQ عمومًا على جودة أكبر عند نفس عمق البت. إنها خيار شائع لمكدسات التقديم الإنتاجي مثل vLLM وTGI، حيث يكون التشغيل المخصص لـ GPU فقط أمرًا مفروغًا منه أصلًا.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF مقابل GPTQ مقابل AWQ بلمحة',
        content: [
          'اختر GGUF إذا كنت تشغّل Ollama أو LM Studio أو llama.cpp محليًا — إنه الوحيد من الثلاثة بدعم حقيقي لـ CPU ومرونة تفريغ جزئي. اختر GPTQ فقط إذا كنت تعمل مع خط أنابيب أو أداة موجودة (مثل إعدادات ExLlama القديمة) تتوقعه تحديدًا. اختر AWQ إذا كنت تنشر على مكدس تقديم GPU إنتاجي (vLLM، TGI) وتريد أفضل جودة لكل بت بين الخيارين المخصصين لـ GPU فقط.',
          'تمثل الأنواع الثلاثة نفس النموذج الأساسي بدقة مخفضة — التنسيق يحدد أي الأدوات يمكنها تحميله وكيف يتعامل بسلاسة مع نقص ذاكرة GPU، وليس قدرة النموذج الأساسية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني تحويل نموذج GPTQ أو AWQ إلى GGUF؟',
            a: 'عمومًا تحوّل من الأوزان كاملة الدقة الأصلية مباشرة إلى GGUF، بدلًا من التحويل بين تنسيقين مُكمَّمين بالفعل — الانتقال من مُكمَّم إلى مُكمَّم يضاعف فقدان الدقة. إذا كان لديك فقط نقطة تفتيش GPTQ/AWQ، ابحث عن الإصدار كامل الدقة للنموذج الأصلي للتحويل منه بدلًا من ذلك.',
          },
          {
            q: 'هل GGUF أبطأ من GPTQ أو AWQ على بطاقة GPU؟',
            a: 'على بطاقة GPU يستوعب فيها النموذج بالكامل في VRAM، يكون استدلال GGUF المحسّن جيدًا منافسًا لـ GPTQ/AWQ. الفجوة المهمة تظهر عندما لا يستوعب النموذج بالكامل — تفرّغ GGUF بسلاسة إلى CPU، بينما لا يمكن لـ GPTQ/AWQ ذلك عمومًا.',
          },
          {
            q: 'أي مستوى تكميم-K يجب أن أستخدم ضمن GGUF؟',
            a: 'Q4_K_M هو الافتراضي المتوازن الأكثر شيوعًا. راجع المقارنة المخصصة بين Q4_K_M وQ8_0 للمقايضة الكاملة بين حجم الملف والجودة عبر مستويات تكميم GGUF.',
          },
          {
            q: 'هل يدعم Ollama نماذج GPTQ أو AWQ مباشرة؟',
            a: 'لا — يُبنى Ollama حول GGUF تحديدًا. لاستخدام نقطة تفتيش GPTQ أو AWQ، تحتاج أداة تقديم مختلفة (vLLM أو TGI أو ExLlama) مصممة لذلك التنسيق.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[ما هو تكميم Q4_K_M؟](/prompt-bites/what-is-q4-k-m-quantization) — مستوى التكميم الأكثر شيوعًا في GGUF موضّح',
          '[Q4_K_M مقابل Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — اختيار مستوى تكميم GGUF',
          '[Ollama مقابل vLLM مقابل TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — أداة التقديم التي تقترن بأي تنسيق',
          '[شرح تكميم نماذج LLM (دليل كامل)](/local-llms/llm-quantization-explained) — شرح متعمق وكامل لكيفية عمل التكميم داخليًا',
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'GGUF vs. GPTQ vs. AWQ: Welches Quantisierungsformat sollten Sie verwenden?',
    seoTitle: 'GGUF vs. GPTQ vs. AWQ Quantisierung 2026 | Prompt Bites',
    metaDescription: 'GGUF ist das beste Standard-Quantisierungsformat für lokale Nutzung — läuft auf CPU und GPU via llama.cpp/Ollama. GPTQ und AWQ sind reine GPU-Formate für Produktions-Serving.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die ein Quantisierungsformat für lokale oder servierte LLM-Inferenz wählen',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF ist das beste Standard-Quantisierungsformat für lokale Nutzung</strong> — es läuft sowohl auf CPU als auch GPU über llama.cpp und Ollama, ohne separate CUDA-only-Anforderung. GPTQ und AWQ sind reine GPU-Formate für Produktions-Serving-Frameworks wie vLLM und TGI, wobei AWQ die Qualität bei gleicher Bitbreite im Allgemeinen besser hält als GPTQ.',
    toc: [
      { label: 'Beste Wahl: GGUF für lokale Nutzung, AWQ für Produktions-Serving', anchor: '#best-pick' },
      { label: 'GGUF vs. GPTQ vs. AWQ auf einen Blick', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Sollte ich GGUF, GPTQ oder AWQ verwenden?',
        answer: 'Nutzen Sie GGUF für lokale Nutzung via Ollama oder llama.cpp — es läuft auf CPU und GPU ohne zusätzliche Anforderungen. Nutzen Sie AWQ statt GPTQ bei Produktions-Serving mit vLLM oder TGI, da es die Qualität bei gleicher Bitbreite besser hält.',
        bullets: [
          'GGUF: das native Format von llama.cpp — Hybrid-Inferenz auf CPU+GPU, der Standard für Ollama und LM Studio.',
          'GPTQ: nur GPU, kalibrierungsbasierte Post-Training-Quantisierung — ein früher Standard für effizientes 4-Bit-Serving.',
          'AWQ (Activation-aware Weight Quantization): nur GPU, im Allgemeinen bessere Qualität pro Bit als GPTQ, verbreitet im vLLM/TGI-Produktions-Serving.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: der richtige Standard für lokale Nutzung — läuft auf CPU und GPU via llama.cpp/Ollama, keine CUDA-only-Anforderung',
          'GPTQ: nur GPU, ein früher Standard für 4-Bit-Serving, weiterhin von ExLlama und vLLM unterstützt',
          'AWQ: nur GPU, hält die Qualität bei gleicher Bitbreite im Allgemeinen besser als GPTQ — bevorzugt für Produktions-Serving',
          'Wer Ollama oder LM Studio lokal betreibt, will fast sicher GGUF, nicht GPTQ oder AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: GGUF für lokale Nutzung, AWQ für Produktions-Serving',
        content: [
          '<strong>GGUF ist das richtige Quantisierungsformat für fast jeden, der Modelle lokal über Ollama, LM Studio oder direkt llama.cpp betreibt — es unterstützt sowohl CPU- als auch GPU-Inferenz aus derselben Datei, einschließlich teilweisem CPU-Offload, wenn ein Modell nicht vollständig in den VRAM passt.</strong> Diese Flexibilität ist genau der Grund, warum GGUF zum Standardformat für lokale Consumer-LLM-Tools wurde: Es funktioniert, ob Sie eine leistungsstarke GPU, eine bescheidene oder gar keine haben.',
          'GPTQ war eine der frühesten, weitverbreiteten 4-Bit-Quantisierungsmethoden für effiziente GPU-Inferenz. Es nutzt einen Kalibrierungsdatensatz, um Qualitätsverluste bei der Post-Training-Quantisierung zu minimieren, ist aber reines GPU-Format — es gibt keinen sinnvollen CPU-Fallback-Pfad — und wurde bei Qualität pro Bit im Allgemeinen von neueren Methoden überholt.',
          'AWQ (Activation-aware Weight Quantization) ist die modernere, reine GPU-Alternative zu GPTQ. Indem es die Gewichte schützt, die für die Aktivierungsgröße am wichtigsten sind, statt alles einheitlich zu quantisieren, bewahrt AWQ im Allgemeinen mehr Qualität bei gleicher Bitbreite. Es ist eine verbreitete Wahl für Produktions-Serving-Stacks wie vLLM und TGI, wo reiner GPU-Betrieb ohnehin gegeben ist.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs. GPTQ vs. AWQ auf einen Blick',
        content: [
          'Wählen Sie GGUF, wenn Sie Ollama, LM Studio oder llama.cpp lokal betreiben — es ist das einzige der drei mit echtem CPU-Support und flexiblem Teil-Offload. Wählen Sie GPTQ nur, wenn Sie mit einer bestehenden Pipeline oder einem Tool arbeiten (wie älteren ExLlama-Setups), das dies speziell erwartet. Wählen Sie AWQ, wenn Sie auf einen Produktions-GPU-Serving-Stack (vLLM, TGI) deployen und die beste Qualität pro Bit unter den reinen GPU-Optionen wollen.',
          'Alle drei repräsentieren dasselbe zugrunde liegende Modell bei reduzierter Präzision — das Format bestimmt, welche Tools es laden können und wie elegant es mit GPU-Speicherengpässen umgeht, nicht die zugrunde liegende Fähigkeit des Modells.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich ein GPTQ- oder AWQ-Modell zu GGUF konvertieren?',
            a: 'Im Allgemeinen konvertiert man von den ursprünglichen vollpräzisen Gewichten direkt zu GGUF, statt zwischen zwei bereits quantisierten Formaten zu konvertieren — quantisiert-zu-quantisiert verstärkt den Präzisionsverlust. Haben Sie nur einen GPTQ/AWQ-Checkpoint, suchen Sie stattdessen nach der vollpräzisen Original-Veröffentlichung zum Konvertieren.',
          },
          {
            q: 'Ist GGUF auf einer GPU langsamer als GPTQ oder AWQ?',
            a: 'Auf einer GPU, auf der das Modell vollständig in den VRAM passt, ist gut optimierte GGUF-Inferenz konkurrenzfähig mit GPTQ/AWQ. Die Lücke zählt, wenn ein Modell nicht vollständig passt — GGUF lagert elegant auf die CPU aus, während GPTQ/AWQ das im Allgemeinen nicht können.',
          },
          {
            q: 'Welches K-Quant-Level sollte ich innerhalb von GGUF verwenden?',
            a: 'Q4_K_M ist der gängigste ausgewogene Standard. Siehe den eigenen Vergleich Q4_K_M vs. Q8_0 für den vollständigen Kompromiss zwischen Dateigröße und Qualität über die Quant-Level von GGUF hinweg.',
          },
          {
            q: 'Unterstützt Ollama GPTQ- oder AWQ-Modelle direkt?',
            a: 'Nein — Ollama ist speziell um GGUF herum aufgebaut. Um einen GPTQ- oder AWQ-Checkpoint zu nutzen, brauchen Sie ein anderes Serving-Tool (vLLM, TGI oder ExLlama), das für dieses Format ausgelegt ist.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Was ist Q4_K_M-Quantisierung?](/prompt-bites/what-is-q4-k-m-quantization) — das gängigste Quant-Level von GGUF erklärt',
          '[Q4_K_M vs. Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — ein GGUF-Quant-Level auswählen',
          '[Ollama vs. vLLM vs. TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — welches Serving-Tool zu welchem Format passt',
          '[LLM-Quantisierung erklärt (vollständiger Leitfaden)](/local-llms/llm-quantization-explained) — der vollständige Deep Dive, wie Quantisierung unter der Haube funktioniert',
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: 'GGUF vs GPTQ vs AWQ: ¿Qué Formato de Cuantización Deberías Usar?',
    seoTitle: 'GGUF vs GPTQ vs AWQ Cuantización 2026 | Prompt Bites',
    metaDescription: 'GGUF es el mejor formato de cuantización por defecto para uso local — corre en CPU y GPU vía llama.cpp/Ollama. GPTQ y AWQ son formatos solo para GPU pensados para servir en producción.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que eligen un formato de cuantización para inferencia local o servida de LLM',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF es el mejor formato de cuantización por defecto para uso local</strong> — corre tanto en CPU como en GPU a través de llama.cpp y Ollama, sin un requisito separado exclusivo de CUDA. GPTQ y AWQ son formatos solo para GPU pensados para frameworks de servicio en producción como vLLM y TGI, donde AWQ generalmente mantiene mejor la calidad que GPTQ al mismo ancho de bits.',
    toc: [
      { label: 'Mejor Opción: GGUF para Uso Local, AWQ para Servicio en Producción', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ de un Vistazo', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Debería usar cuantización GGUF, GPTQ o AWQ?',
        answer: 'Usa GGUF para uso local vía Ollama o llama.cpp — corre en CPU y GPU sin requisitos adicionales. Usa AWQ en lugar de GPTQ si sirves en producción con vLLM o TGI, ya que mantiene mejor la calidad al mismo ancho de bits.',
        bullets: [
          'GGUF: el formato nativo de llama.cpp — inferencia híbrida CPU+GPU, el predeterminado para Ollama y LM Studio.',
          'GPTQ: solo para GPU, cuantización post-entrenamiento basada en calibración — un estándar temprano para servicio eficiente en 4 bits.',
          'AWQ (Cuantización de Pesos Consciente de la Activación): solo para GPU, generalmente mejor calidad por bit que GPTQ, común en servicio de producción vLLM/TGI.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: la opción correcta por defecto para uso local — corre en CPU y GPU vía llama.cpp/Ollama, sin requisito exclusivo de CUDA',
          'GPTQ: solo para GPU, un estándar temprano para servicio en 4 bits, aún soportado por ExLlama y vLLM',
          'AWQ: solo para GPU, generalmente mantiene mejor la calidad que GPTQ al mismo ancho de bits — preferido para servicio en producción',
          'Si ejecutas Ollama o LM Studio localmente, casi con certeza quieres GGUF, no GPTQ ni AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: GGUF para Uso Local, AWQ para Servicio en Producción',
        content: [
          '<strong>GGUF es el formato de cuantización correcto para casi cualquiera que ejecute modelos localmente a través de Ollama, LM Studio o llama.cpp directamente — soporta inferencia tanto en CPU como en GPU desde el mismo archivo, incluida la descarga parcial a CPU cuando un modelo no cabe completamente en VRAM.</strong> Esta flexibilidad es exactamente por qué GGUF se convirtió en el formato estándar para las herramientas de LLM local de consumo: funciona ya sea que tengas una GPU potente, una modesta, o ninguna.',
          'GPTQ fue uno de los primeros métodos de cuantización de 4 bits ampliamente adoptados para inferencia eficiente en GPU. Usa un dataset de calibración para minimizar la pérdida de calidad durante la cuantización post-entrenamiento, pero es solo para GPU — no hay una ruta de reserva significativa a CPU — y en general ha sido superado en calidad por bit por métodos más nuevos.',
          'AWQ (Cuantización de Pesos Consciente de la Activación) es la alternativa más moderna solo para GPU frente a GPTQ. Al proteger los pesos que más importan para la magnitud de activación en lugar de cuantizar todo uniformemente, AWQ generalmente preserva más calidad al mismo ancho de bits. Es una elección común para pilas de servicio en producción como vLLM y TGI, donde la operación exclusiva de GPU ya es un supuesto de partida.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ de un Vistazo',
        content: [
          'Elige GGUF si ejecutas Ollama, LM Studio o llama.cpp localmente — es el único de los tres con soporte real de CPU y flexibilidad de descarga parcial. Elige GPTQ solo si trabajas con una canalización o herramienta existente (como configuraciones de ExLlama más antiguas) que lo espera específicamente. Elige AWQ si despliegas en una pila de servicio de producción en GPU (vLLM, TGI) y quieres la mejor calidad por bit entre las opciones exclusivas de GPU.',
          'Los tres representan el mismo modelo subyacente con precisión reducida — el formato determina qué herramientas pueden cargarlo y cuán elegantemente maneja las carencias de memoria de GPU, no la capacidad subyacente del modelo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Puedo convertir un modelo GPTQ o AWQ a GGUF?',
            a: 'Generalmente conviertes desde los pesos originales de precisión completa directamente a GGUF, en lugar de convertir entre dos formatos ya cuantizados — pasar de cuantizado a cuantizado agrava la pérdida de precisión. Si solo tienes un checkpoint GPTQ/AWQ, busca el lanzamiento de precisión completa del modelo original para convertir desde ahí.',
          },
          {
            q: '¿Es GGUF más lento que GPTQ o AWQ en una GPU?',
            a: 'En una GPU donde el modelo cabe completamente en VRAM, la inferencia GGUF bien optimizada es competitiva con GPTQ/AWQ. La brecha que importa es cuando un modelo no cabe completamente — GGUF descarga elegantemente a CPU, mientras que GPTQ/AWQ generalmente no pueden.',
          },
          {
            q: '¿Qué nivel de K-quant debería usar dentro de GGUF?',
            a: 'Q4_K_M es el predeterminado balanceado más común. Consulta la comparación dedicada Q4_K_M vs Q8_0 para la contrapartida completa entre tamaño de archivo y calidad entre los niveles de cuantización de GGUF.',
          },
          {
            q: '¿Soporta Ollama modelos GPTQ o AWQ directamente?',
            a: 'No — Ollama está construido específicamente en torno a GGUF. Para usar un checkpoint GPTQ o AWQ, necesitas una herramienta de servicio diferente (vLLM, TGI o ExLlama) diseñada para ese formato.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Qué Es la Cuantización Q4_K_M?](/prompt-bites/what-is-q4-k-m-quantization) — el nivel de cuantización más común de GGUF explicado',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — eligiendo un nivel de cuantización GGUF',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — qué herramienta de servicio combina con qué formato',
          '[Cuantización de LLM explicada (guía completa)](/local-llms/llm-quantization-explained) — la explicación completa y detallada de cómo funciona la cuantización por dentro',
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'GGUF vs GPTQ vs AWQ : quel format de quantification utiliser ?',
    seoTitle: 'GGUF vs GPTQ vs AWQ : quantification 2026 | Prompt Bites',
    metaDescription: 'GGUF est le meilleur format de quantification par défaut pour un usage local — il fonctionne sur CPU et GPU via llama.cpp/Ollama. GPTQ et AWQ sont des formats GPU uniquement conçus pour le déploiement en production.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs qui choisissent un format de quantification pour de l\'inférence LLM locale ou servie',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF est le meilleur format de quantification par défaut pour un usage local</strong> — il fonctionne à la fois sur CPU et GPU via llama.cpp et Ollama, sans exigence CUDA exclusive. GPTQ et AWQ sont des formats GPU uniquement conçus pour des frameworks de déploiement en production comme vLLM et TGI, où AWQ conserve généralement une meilleure qualité que GPTQ à largeur de bits égale.',
    toc: [
      { label: 'Meilleur choix : GGUF en local, AWQ pour la production', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ en un coup d\'œil', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Faut-il utiliser la quantification GGUF, GPTQ ou AWQ ?',
        answer: 'Utilisez GGUF pour un usage local via Ollama ou llama.cpp — il fonctionne sur CPU et GPU sans exigence supplémentaire. Préférez AWQ à GPTQ pour un déploiement en production avec vLLM ou TGI, car il conserve une meilleure qualité à largeur de bits égale.',
        bullets: [
          'GGUF : le format natif de llama.cpp — inférence hybride CPU+GPU, format par défaut d\'Ollama et LM Studio.',
          'GPTQ : GPU uniquement, quantification post-entraînement basée sur un calibrage — un des premiers standards pour un déploiement 4-bit efficace.',
          'AWQ (Activation-aware Weight Quantization) : GPU uniquement, généralement meilleur rapport qualité/bit que GPTQ, courant dans les déploiements de production vLLM/TGI.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF : le bon choix par défaut pour un usage local — fonctionne sur CPU et GPU via llama.cpp/Ollama, sans exigence CUDA exclusive',
          'GPTQ : GPU uniquement, un des premiers standards pour le déploiement 4-bit, toujours pris en charge par ExLlama et vLLM',
          'AWQ : GPU uniquement, conserve généralement une meilleure qualité que GPTQ à largeur de bits égale — préféré pour le déploiement en production',
          'Si vous utilisez Ollama ou LM Studio en local, c\'est presque toujours GGUF qu\'il vous faut, pas GPTQ ni AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : GGUF en local, AWQ pour la production',
        content: [
          '<strong>GGUF est le format de quantification adapté à presque tous ceux qui exécutent des modèles en local via Ollama, LM Studio ou llama.cpp directement — il prend en charge l\'inférence CPU et GPU à partir du même fichier, y compris le déchargement CPU partiel lorsqu\'un modèle ne tient pas entièrement en VRAM.</strong> Cette flexibilité explique pourquoi GGUF est devenu le format standard des outils grand public pour LLM en local : il fonctionne que vous disposiez d\'un GPU puissant, modeste, ou d\'aucun GPU du tout.',
          'GPTQ a été l\'une des premières méthodes de quantification 4-bit largement adoptées pour une inférence GPU efficace. Elle utilise un jeu de données de calibrage pour minimiser la perte de qualité lors de la quantification post-entraînement, mais elle est GPU uniquement — sans réel repli CPU — et a généralement été dépassée en rapport qualité/bit par des méthodes plus récentes.',
          'AWQ (Activation-aware Weight Quantization) est l\'alternative GPU uniquement plus moderne à GPTQ. En protégeant les poids les plus importants pour l\'amplitude d\'activation plutôt qu\'en quantifiant tout de manière uniforme, AWQ préserve généralement davantage de qualité à largeur de bits égale. C\'est un choix courant pour les piles de déploiement en production comme vLLM et TGI, où le fonctionnement GPU uniquement est déjà acquis.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ en un coup d\'œil',
        content: [
          'Choisissez GGUF si vous utilisez Ollama, LM Studio ou llama.cpp en local — c\'est le seul des trois à offrir un vrai support CPU et une flexibilité de déchargement partiel. Choisissez GPTQ uniquement si vous travaillez avec un pipeline ou un outil existant (comme d\'anciennes configurations ExLlama) qui l\'exige spécifiquement. Choisissez AWQ si vous déployez sur une pile de production GPU (vLLM, TGI) et souhaitez le meilleur rapport qualité/bit parmi les options GPU uniquement.',
          'Les trois formats représentent le même modèle sous-jacent à précision réduite — le format détermine quels outils peuvent le charger et la manière dont il gère les manques de mémoire GPU, pas les capacités intrinsèques du modèle.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je convertir un modèle GPTQ ou AWQ en GGUF ?',
            a: 'En général, on convertit directement les poids d\'origine en pleine précision vers GGUF, plutôt que de convertir entre deux formats déjà quantifiés — une conversion quantifié-à-quantifié cumule les pertes de précision. Si vous ne disposez que d\'un checkpoint GPTQ/AWQ, cherchez plutôt la version en pleine précision du modèle d\'origine pour effectuer la conversion à partir de celle-ci.',
          },
          {
            q: 'GGUF est-il plus lent que GPTQ ou AWQ sur un GPU ?',
            a: 'Sur un GPU où le modèle tient entièrement en VRAM, une inférence GGUF bien optimisée est compétitive face à GPTQ/AWQ. L\'écart qui compte survient lorsque le modèle ne tient pas entièrement — GGUF décharge alors gracieusement vers le CPU, ce que GPTQ/AWQ ne peuvent généralement pas faire.',
          },
          {
            q: 'Quel niveau de K-quant utiliser au sein de GGUF ?',
            a: 'Q4_K_M est le choix par défaut équilibré le plus courant. Consultez le comparatif dédié Q4_K_M vs Q8_0 pour le détail complet du compromis entre taille de fichier et qualité selon les niveaux de quantification de GGUF.',
          },
          {
            q: 'Ollama prend-il en charge directement les modèles GPTQ ou AWQ ?',
            a: 'Non — Ollama est conçu spécifiquement autour de GGUF. Pour utiliser un checkpoint GPTQ ou AWQ, il vous faut un autre outil de déploiement (vLLM, TGI ou ExLlama) conçu pour ce format.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Qu\'est-ce que la quantification Q4_K_M ?](/prompt-bites/what-is-q4-k-m-quantization) — le niveau de quantification le plus courant de GGUF expliqué',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — choisir un niveau de quantification GGUF',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — quel outil de déploiement correspond à quel format',
          '[La quantisation des LLM expliquée (guide complet)](/local-llms/llm-quantization-explained) — l\'analyse complète et détaillée du fonctionnement interne de la quantisation',
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: 'GGUF vs GPTQ vs AWQ: どの量子化フォーマットを使うべき?',
    seoTitle: '2026年版 GGUF vs GPTQ vs AWQ 量子化 | Prompt Bites',
    metaDescription: 'GGUFはローカル用途に最適なデフォルトの量子化フォーマットです — llama.cpp/OllamaでCPUとGPU両方で動作。GPTQとAWQは本番サービング向けのGPU専用フォーマットです。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ローカルまたはサービング用LLM推論の量子化フォーマットを選ぶ開発者',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUFはローカル用途に最適なデフォルトの量子化フォーマットです</strong> — llama.cppとOllama経由でCPUとGPU両方で動作し、別途CUDA専用の要件はありません。GPTQとAWQは、vLLMやTGIのような本番サービングフレームワーク向けのGPU専用フォーマットで、AWQは一般に同じビット幅ではGPTQより品質を保ちます。',
    toc: [
      { label: 'ベストピック: ローカル用にGGUF、本番サービング用にAWQ', anchor: '#best-pick' },
      { label: '一目でわかるGGUF vs GPTQ vs AWQ', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'GGUF、GPTQ、AWQのどの量子化を使うべきですか?',
        answer: 'ローカル用途にはOllamaやllama.cpp経由でGGUFを使ってください — 追加要件なしでCPUとGPU両方で動作します。vLLMやTGIで本番サービングする場合は、同じビット幅でより品質を保つため、GPTQよりAWQを使ってください。',
        bullets: [
          'GGUF: llama.cppのネイティブフォーマット — CPU+GPUのハイブリッド推論、OllamaとLM Studioのデフォルト。',
          'GPTQ: GPU専用、キャリブレーションベースのトレーニング後量子化 — 効率的な4ビットサービングの初期標準。',
          'AWQ(Activation-aware Weight Quantization): GPU専用、一般にGPTQよりビットあたりの品質が優れ、vLLM/TGIの本番サービングで一般的。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: ローカル用途に正しいデフォルト — llama.cpp/Ollama経由でCPUとGPU両方で動作、CUDA専用要件なし',
          'GPTQ: GPU専用、4ビットサービングの初期標準で、ExLlamaやvLLMで依然サポート',
          'AWQ: GPU専用、一般に同じビット幅でGPTQより品質を保つ — 本番サービングで好まれる',
          'OllamaかLM Studioをローカルで動かしているなら、ほぼ確実にGPTQやAWQではなくGGUFが欲しいもの',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: ローカル用にGGUF、本番サービング用にAWQ',
        content: [
          '<strong>GGUFは、Ollama、LM Studio、あるいはllama.cppを直接使ってローカルでモデルを動かすほぼ全ての人にとって正しい量子化フォーマットです — 同じファイルからCPUとGPU両方の推論をサポートし、モデルがVRAMに完全に収まらない場合の部分的なCPUオフロードも含みます。</strong>この柔軟性こそが、GGUFがコンシューマー向けローカルLLMツールの標準フォーマットになった理由です: 強力なGPUがあっても、控えめなGPUでも、GPUが全くなくても機能します。',
          'GPTQは、効率的なGPU推論のために広く採用された最初期の4ビット量子化手法の一つです。キャリブレーションデータセットを使ってトレーニング後量子化中の品質低下を最小化しますが、GPU専用です — 意味のあるCPUフォールバック経路はなく、一般的にビットあたりの品質では新しい手法に取って代わられています。',
          'AWQ(Activation-aware Weight Quantization)は、GPTQに代わるより現代的なGPU専用の選択肢です。すべてを均一に量子化するのではなく、活性化の大きさにとって最も重要な重みを保護することで、AWQは一般に同じビット幅でより多くの品質を保持します。vLLMやTGIのような本番サービングスタックでよく選ばれ、そこではGPU専用動作が既に前提となっています。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '一目でわかるGGUF vs GPTQ vs AWQ',
        content: [
          'Ollama、LM Studio、あるいはllama.cppをローカルで動かしているならGGUFを選んでください — 3つの中で実質的なCPUサポートと部分オフロードの柔軟性を持つ唯一のフォーマットです。既存のパイプラインやツール(古いExLlamaセットアップなど)がそれを特に想定している場合にのみGPTQを選んでください。本番のGPUサービングスタック(vLLM、TGI)にデプロイし、GPU専用オプションの中で最良のビットあたりの品質が欲しいならAWQを選んでください。',
          '3つとも同じ元のモデルを低精度で表現しており、フォーマットが決めるのはどのツールがそれを読み込めるか、GPUメモリ不足をどれだけうまく扱うかであって、モデル本来の能力ではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'GPTQやAWQモデルをGGUFに変換できますか?',
            a: '一般的には、既に量子化済みの2つのフォーマット間で変換するのではなく、元のフル精度の重みから直接GGUFに変換します — 量子化済みから量子化済みへの変換は精度の低下を複合させます。GPTQ/AWQのチェックポイントしか持っていない場合は、変換元となるモデルのフル精度リリースを探してください。',
          },
          {
            q: 'GPUではGGUFはGPTQやAWQより遅いですか?',
            a: 'モデルがVRAMに完全に収まるGPUでは、よく最適化されたGGUF推論はGPTQ/AWQと競合できます。重要な差が出るのはモデルが完全に収まらない場合です — GGUFはCPUへ優雅にオフロードしますが、GPTQ/AWQは一般にそれができません。',
          },
          {
            q: 'GGUF内ではどのKクオントレベルを使うべきですか?',
            a: 'Q4_K_Mが最も一般的なバランス型のデフォルトです。GGUFのクオントレベル全体でのファイルサイズと品質の完全なトレードオフについては、専用のQ4_K_M vs Q8_0比較を参照してください。',
          },
          {
            q: 'OllamaはGPTQやAWQモデルを直接サポートしていますか?',
            a: 'いいえ — Ollamaは特にGGUFを中心に構築されています。GPTQやAWQのチェックポイントを使うには、そのフォーマット向けに設計された別のサービングツール(vLLM、TGI、ExLlama)が必要です。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Q4_K_M量子化とは?](/prompt-bites/what-is-q4-k-m-quantization) — GGUFの最も一般的なクオントレベルの解説',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — GGUFのクオントレベルの選び方',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — 各ツールがどのフォーマットと組み合うか',
          '[LLM量子化を徹底解説（完全ガイド）](/local-llms/llm-quantization-explained) — 量子化の仕組みを内部まで掘り下げた完全ガイド',
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    title: 'GGUF 대 GPTQ 대 AWQ: 어떤 양자화 형식을 사용해야 하는가?',
    seoTitle: '2026년 GGUF 대 GPTQ 대 AWQ 양자화 | Prompt Bites',
    metaDescription: 'GGUF는 로컬 사용을 위한 최적의 기본 양자화 형식입니다 — llama.cpp/Ollama를 통해 CPU와 GPU에서 실행됩니다. GPTQ와 AWQ는 프로덕션 서빙을 위한 GPU 전용 형식입니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬 또는 서빙되는 LLM 추론을 위한 양자화 형식을 선택하는 개발자',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF는 로컬 사용을 위한 최적의 기본 양자화 형식입니다</strong> — 별도의 CUDA 전용 요건 없이 llama.cpp와 Ollama를 통해 CPU와 GPU 모두에서 실행됩니다. GPTQ와 AWQ는 vLLM이나 TGI 같은 프로덕션 서빙 프레임워크를 위한 GPU 전용 형식이며, 이 중 AWQ가 동일한 비트 폭에서 일반적으로 GPTQ보다 품질을 더 잘 유지합니다.',
    toc: [
      { label: '최적의 선택: 로컬 사용에는 GGUF, 프로덕션 서빙에는 AWQ', anchor: '#best-pick' },
      { label: '한눈에 보는 GGUF 대 GPTQ 대 AWQ', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'GGUF, GPTQ, AWQ 중 어떤 양자화를 사용해야 합니까?',
        answer: 'Ollama나 llama.cpp를 통한 로컬 사용에는 GGUF를 사용하십시오 — 추가 요건 없이 CPU와 GPU에서 실행됩니다. vLLM이나 TGI로 프로덕션에서 서빙한다면 GPTQ보다 AWQ를 사용하십시오. 동일한 비트 폭에서 품질을 더 잘 유지하기 때문입니다.',
        bullets: [
          'GGUF: llama.cpp의 네이티브 형식 — CPU+GPU 하이브리드 추론이며 Ollama와 LM Studio의 기본값입니다.',
          'GPTQ: GPU 전용, 캘리브레이션 기반 사후 훈련 양자화 — 효율적인 4비트 서빙의 초기 표준입니다.',
          'AWQ(활성화 인식 가중치 양자화): GPU 전용으로 일반적으로 GPTQ보다 비트당 품질이 우수하며 vLLM/TGI 프로덕션 서빙에서 흔합니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: 로컬 사용의 올바른 기본값 — llama.cpp/Ollama를 통해 CPU와 GPU에서 실행되며 CUDA 전용 요건이 없습니다',
          'GPTQ: GPU 전용으로 4비트 서빙의 초기 표준이며 ExLlama와 vLLM에서 여전히 지원됩니다',
          'AWQ: GPU 전용으로 동일한 비트 폭에서 일반적으로 GPTQ보다 품질을 더 잘 유지하며 프로덕션 서빙에 선호됩니다',
          'Ollama나 LM Studio를 로컬로 실행한다면 거의 확실히 GPTQ나 AWQ가 아니라 GGUF가 필요합니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: 로컬 사용에는 GGUF, 프로덕션 서빙에는 AWQ',
        content: [
          '<strong>GGUF는 Ollama, LM Studio, 또는 llama.cpp를 통해 직접 로컬로 모델을 실행하는 거의 모든 사람에게 올바른 양자화 형식입니다 — 동일한 파일에서 CPU와 GPU 추론을 모두 지원하며, 모델이 VRAM에 완전히 맞지 않을 때 부분적인 CPU 오프로드도 포함합니다.</strong> 이러한 유연성이 바로 GGUF가 소비자용 로컬 LLM 도구의 표준 형식이 된 이유입니다. 강력한 GPU가 있든, 적당한 GPU가 있든, 아예 없든 작동합니다.',
          'GPTQ는 효율적인 GPU 추론을 위해 가장 먼저 널리 채택된 4비트 양자화 방법 중 하나였습니다. 캘리브레이션 데이터셋을 사용해 사후 훈련 양자화 중 품질 손실을 최소화하지만, GPU 전용입니다 — 의미 있는 CPU 폴백 경로가 없습니다 — 그리고 일반적으로 비트당 품질에서 더 새로운 방법에 밀려났습니다.',
          'AWQ(활성화 인식 가중치 양자화)는 GPTQ의 더 현대적인 GPU 전용 대안입니다. 모든 것을 균일하게 양자화하는 대신 활성화 크기에 가장 중요한 가중치를 보호함으로써, AWQ는 일반적으로 동일한 비트 폭에서 더 많은 품질을 보존합니다. GPU 전용 운영이 이미 전제인 vLLM과 TGI 같은 프로덕션 서빙 스택에서 흔한 선택입니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '한눈에 보는 GGUF 대 GPTQ 대 AWQ',
        content: [
          'Ollama, LM Studio, 또는 llama.cpp를 로컬로 실행한다면 GGUF를 선택하십시오 — 세 형식 중 실질적인 CPU 지원과 부분 오프로드 유연성을 갖춘 유일한 형식입니다. 특별히 이를 기대하는 기존 파이프라인이나 도구(구형 ExLlama 설정 같은)로 작업하는 경우에만 GPTQ를 선택하십시오. 프로덕션 GPU 서빙 스택(vLLM, TGI)에 배포하며 GPU 전용 옵션 중 최고의 비트당 품질을 원한다면 AWQ를 선택하십시오.',
          '세 형식 모두 동일한 기본 모델을 감소된 정밀도로 나타냅니다 — 형식이 결정하는 것은 어떤 도구가 이를 로드할 수 있는지와 GPU 메모리 부족을 얼마나 우아하게 처리하는지이지, 모델의 근본적인 성능이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'GPTQ나 AWQ 모델을 GGUF로 변환할 수 있습니까?',
            a: '일반적으로는 이미 양자화된 두 형식 사이를 변환하기보다 원본 전체 정밀도 가중치에서 GGUF로 직접 변환합니다 — 양자화된 것에서 양자화된 것으로 가는 것은 정밀도 손실을 누적시킵니다. GPTQ/AWQ 체크포인트만 있다면 대신 변환할 원본 모델의 전체 정밀도 릴리스를 찾으십시오.',
          },
          {
            q: 'GPU에서 GGUF는 GPTQ나 AWQ보다 느립니까?',
            a: '모델이 VRAM에 완전히 맞는 GPU에서는 잘 최적화된 GGUF 추론이 GPTQ/AWQ와 경쟁력이 있습니다. 중요한 격차는 모델이 완전히 맞지 않을 때입니다 — GGUF는 CPU로 우아하게 오프로드하지만 GPTQ/AWQ는 일반적으로 그럴 수 없습니다.',
          },
          {
            q: 'GGUF 내에서 어떤 K-quant 수준을 사용해야 합니까?',
            a: 'Q4_K_M이 가장 흔한 균형 잡힌 기본값입니다. GGUF의 양자화 수준 전반에 걸친 파일 크기와 품질의 전체 트레이드오프는 전용 Q4_K_M 대 Q8_0 비교를 참고하십시오.',
          },
          {
            q: 'Ollama는 GPTQ나 AWQ 모델을 직접 지원합니까?',
            a: '아닙니다 — Ollama는 특별히 GGUF를 중심으로 구축되었습니다. GPTQ나 AWQ 체크포인트를 사용하려면 해당 형식을 위해 설계된 다른 서빙 도구(vLLM, TGI, 또는 ExLlama)가 필요합니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[Q4_K_M 양자화란 무엇인가?](/prompt-bites/what-is-q4-k-m-quantization) — GGUF의 가장 흔한 양자화 수준 설명',
          '[Q4_K_M 대 Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — GGUF 양자화 수준 선택하기',
          '[Ollama 대 vLLM 대 TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — 각 도구가 어떤 형식과 짝을 이루는지',
          '[LLM 양자화 완전 해설(전체 가이드)](/local-llms/llm-quantization-explained) — 양자화가 내부적으로 어떻게 작동하는지에 대한 완전한 심층 분석',
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    title: 'GGUF vs GPTQ vs AWQ: Qual Formato de Quantização Você Deve Usar?',
    seoTitle: 'GGUF vs GPTQ vs AWQ Quantização 2026',
    metaDescription: 'O GGUF é o melhor formato padrão de quantização para uso local — roda em CPU e GPU via llama.cpp/Ollama. GPTQ e AWQ são formatos somente GPU voltados para servir em produção.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores escolhendo um formato de quantização para inferência local ou servida de LLM',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O GGUF é o melhor formato padrão de quantização para uso local</strong> — ele roda em CPU e GPU através do llama.cpp e do Ollama, sem um requisito separado somente para CUDA. GPTQ e AWQ são formatos somente GPU voltados para frameworks de servir em produção como o vLLM e o TGI, onde o AWQ geralmente mantém a qualidade melhor que o GPTQ na mesma largura de bits.',
    toc: [
      { label: 'Melhor Escolha: GGUF para Uso Local, AWQ para Servir em Produção', anchor: '#best-pick' },
      { label: 'GGUF vs GPTQ vs AWQ em Resumo', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Devo usar quantização GGUF, GPTQ ou AWQ?',
        answer: 'Use GGUF para uso local via Ollama ou llama.cpp — ele roda em CPU e GPU sem requisitos extras. Use AWQ em vez de GPTQ se for servir em produção com vLLM ou TGI, já que mantém a qualidade melhor na mesma largura de bits.',
        bullets: [
          'GGUF: o formato nativo do llama.cpp — inferência híbrida CPU+GPU, o padrão para Ollama e LM Studio.',
          'GPTQ: somente GPU, quantização pós-treinamento baseada em calibração — um padrão inicial para servir eficiente em 4 bits.',
          'AWQ (Quantização de Peso Consciente da Ativação): somente GPU, geralmente melhor qualidade-por-bit que o GPTQ, comum em servir em produção com vLLM/TGI.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF: o padrão certo para uso local — roda em CPU e GPU via llama.cpp/Ollama, sem requisito exclusivo de CUDA',
          'GPTQ: somente GPU, um padrão inicial para servir em 4 bits, ainda suportado pelo ExLlama e pelo vLLM',
          'AWQ: somente GPU, geralmente mantém a qualidade melhor que o GPTQ na mesma largura de bits — preferido para servir em produção',
          'Se você está rodando Ollama ou LM Studio localmente, quase certamente quer GGUF, não GPTQ ou AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: GGUF para Uso Local, AWQ para Servir em Produção',
        content: [
          '<strong>O GGUF é o formato de quantização certo para praticamente qualquer pessoa rodando modelos localmente via Ollama, LM Studio ou llama.cpp diretamente — ele suporta inferência tanto em CPU quanto em GPU a partir do mesmo arquivo, incluindo offload parcial de CPU quando um modelo não cabe totalmente na VRAM.</strong> Essa flexibilidade é exatamente por que o GGUF se tornou o formato padrão para ferramentas de LLM local de consumo: funciona seja qual for a GPU que você tenha, potente, modesta ou nenhuma.',
          'O GPTQ foi um dos primeiros métodos de quantização em 4 bits amplamente adotados para inferência eficiente em GPU. Ele usa um conjunto de dados de calibração para minimizar perda de qualidade durante a quantização pós-treinamento, mas é somente GPU — não há um caminho significativo de fallback para CPU — e geralmente foi superado em qualidade-por-bit por métodos mais novos.',
          'O AWQ (Quantização de Peso Consciente da Ativação) é a alternativa somente GPU mais moderna ao GPTQ. Ao proteger os pesos que mais importam para a magnitude da ativação em vez de quantizar tudo uniformemente, o AWQ geralmente preserva mais qualidade na mesma largura de bits. É uma escolha comum para pilhas de servir em produção como o vLLM e o TGI, onde a operação somente GPU já é dada.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF vs GPTQ vs AWQ em Resumo',
        content: [
          'Escolha GGUF se você está rodando Ollama, LM Studio ou llama.cpp localmente — é o único dos três com suporte real de CPU e flexibilidade de offload parcial. Escolha GPTQ apenas se você estiver trabalhando com um pipeline ou ferramenta existente (como configurações antigas do ExLlama) que especificamente o exige. Escolha AWQ se você está implantando em uma pilha de servir em produção com GPU (vLLM, TGI) e quer a melhor qualidade-por-bit entre as opções somente GPU.',
          'Os três representam o mesmo modelo subjacente em precisão reduzida — o formato determina quais ferramentas conseguem carregá-lo e quão graciosamente ele lida com déficits de memória de GPU, não a capacidade subjacente do modelo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Posso converter um modelo GPTQ ou AWQ para GGUF?',
            a: 'Geralmente você converte a partir dos pesos originais em precisão total para GGUF diretamente, em vez de converter entre dois formatos já quantizados — ir de quantizado para quantizado composta a perda de precisão. Se você só tem um checkpoint GPTQ/AWQ, procure o lançamento em precisão total do modelo original para converter a partir dele.',
          },
          {
            q: 'O GGUF é mais lento que o GPTQ ou AWQ em uma GPU?',
            a: 'Em uma GPU onde o modelo cabe totalmente na VRAM, uma inferência GGUF bem otimizada é competitiva com GPTQ/AWQ. A diferença que importa é quando um modelo não cabe totalmente — o GGUF faz offload gracioso para CPU, enquanto GPTQ/AWQ geralmente não conseguem.',
          },
          {
            q: 'Qual nível K-quant devo usar dentro do GGUF?',
            a: 'O Q4_K_M é o padrão equilibrado mais comum. Veja a comparação dedicada Q4_K_M vs Q8_0 para a troca completa entre tamanho de arquivo e qualidade nos níveis de quantização do GGUF.',
          },
          {
            q: 'O Ollama suporta modelos GPTQ ou AWQ diretamente?',
            a: 'Não — o Ollama é construído em torno do GGUF especificamente. Para usar um checkpoint GPTQ ou AWQ, você precisa de uma ferramenta de serviço diferente (vLLM, TGI ou ExLlama) projetada para esse formato.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[O Que É a Quantização Q4_K_M?](/prompt-bites/what-is-q4-k-m-quantization) — o nível de quantização mais comum do GGUF explicado',
          '[Q4_K_M vs Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — escolhendo um nível de quantização GGUF',
          '[Ollama vs vLLM vs TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — qual ferramenta de servir combina com qual formato',
          '[Quantização de LLM explicada (guia completo)](/local-llms/llm-quantization-explained) — o mergulho completo em como a quantização funciona por dentro',
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: 'GGUF 对比 GPTQ 对比 AWQ：应该使用哪种量化格式？',
    seoTitle: '2026 年 GGUF 对比 GPTQ 对比 AWQ 量化 | Prompt Bites',
    metaDescription: 'GGUF 是本地使用的最佳默认量化格式——通过 llama.cpp/Ollama 在 CPU 和 GPU 上运行。GPTQ 和 AWQ 是专为生产环境服务打造的纯 GPU 格式。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '为本地或托管 LLM 推理选择量化格式的开发者',
    siblingBites: ['what-is-q4-k-m-quantization', 'ollama-vs-vllm-vs-tgi'],
    is_living_page: false,
    leadAnswerBlock: '<strong>GGUF 是本地使用的最佳默认量化格式</strong>——它通过 llama.cpp 和 Ollama 在 CPU 和 GPU 上都能运行，没有单独的纯 CUDA 要求。GPTQ 和 AWQ 是为 vLLM、TGI 等生产服务框架打造的纯 GPU 格式，其中 AWQ 在相同位宽下通常比 GPTQ 更好地保持质量。',
    toc: [
      { label: '最佳选择：本地使用选 GGUF，生产服务选 AWQ', anchor: '#best-pick' },
      { label: 'GGUF 对比 GPTQ 对比 AWQ 一览', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '应该使用 GGUF、GPTQ 还是 AWQ 量化？',
        answer: '本地使用通过 Ollama 或 llama.cpp 选择 GGUF——它在 CPU 和 GPU 上运行，无需额外要求。如果用 vLLM 或 TGI 进行生产服务部署，选择 AWQ 而非 GPTQ，因为它在相同位宽下能更好地保持质量。',
        bullets: [
          'GGUF：llama.cpp 的原生格式——CPU+GPU 混合推理，是 Ollama 和 LM Studio 的默认格式。',
          'GPTQ：纯 GPU、基于校准的训练后量化——高效 4 位服务的早期标准。',
          'AWQ（感知激活的权重量化）：纯 GPU，通常每位质量优于 GPTQ，常见于 vLLM/TGI 生产服务。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GGUF：本地使用的正确默认选择——通过 llama.cpp/Ollama 在 CPU 和 GPU 上运行，无需纯 CUDA',
          'GPTQ：纯 GPU，4 位服务的早期标准，ExLlama 和 vLLM 仍支持',
          'AWQ：纯 GPU，通常在相同位宽下比 GPTQ 更好地保持质量——生产服务的首选',
          '如果你在本地运行 Ollama 或 LM Studio，几乎肯定应该选 GGUF，而非 GPTQ 或 AWQ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：本地使用选 GGUF，生产服务选 AWQ',
        content: [
          '<strong>对于几乎任何通过 Ollama、LM Studio 或直接使用 llama.cpp 在本地运行模型的人来说，GGUF 都是正确的量化格式——它支持从同一文件进行 CPU 和 GPU 推理，包括模型无法完全装入显存时的部分 CPU 卸载。</strong>正是这种灵活性让 GGUF 成为消费级本地 LLM 工具的标准格式：无论你拥有强大的 GPU、普通的 GPU，还是完全没有 GPU，它都能运行。',
          'GPTQ 是最早被广泛采用的高效 GPU 推理 4 位量化方法之一。它使用校准数据集在训练后量化过程中最小化质量损失，但它是纯 GPU 的——没有有效的 CPU 回退路径——并且在每位质量方面通常已被更新的方法超越。',
          'AWQ（感知激活的权重量化）是比 GPTQ 更现代的纯 GPU 替代方案。通过保护对激活幅度最重要的权重,而非统一量化所有权重，AWQ 通常在相同位宽下保留更多质量。它是 vLLM 和 TGI 等生产服务栈的常见选择,这些场景本来就默认使用纯 GPU 运行。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'GGUF 对比 GPTQ 对比 AWQ 一览',
        content: [
          '如果你在本地运行 Ollama、LM Studio 或 llama.cpp，选择 GGUF——它是三者中唯一具备真正 CPU 支持和部分卸载灵活性的格式。只有在使用特别期望 GPTQ 的现有流程或工具（如较旧的 ExLlama 配置）时才选择 GPTQ。如果部署到生产 GPU 服务栈（vLLM、TGI）并希望在纯 GPU 选项中获得最佳每位质量，选择 AWQ。',
          '三者都以降低精度表示同一底层模型——格式决定的是哪些工具能加载它、以及它如何优雅地应对显存不足，而非模型本身的底层能力。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我能把 GPTQ 或 AWQ 模型转换成 GGUF 吗？',
            a: '通常应该直接从原始全精度权重转换为 GGUF，而不是在两种已量化的格式之间转换——从一种量化格式转到另一种量化格式会叠加精度损失。如果你只有 GPTQ/AWQ 的检查点，应寻找原模型的全精度发行版来进行转换。',
          },
          {
            q: 'GGUF 在 GPU 上比 GPTQ 或 AWQ 慢吗？',
            a: '在模型能完全装入显存的 GPU 上，经过良好优化的 GGUF 推理与 GPTQ/AWQ 相当。真正的差距出现在模型无法完全装入时——GGUF 能优雅地卸载到 CPU，而 GPTQ/AWQ 通常不能。',
          },
          {
            q: 'GGUF 内应该使用哪种 K-quant 级别？',
            a: 'Q4_K_M 是最常见的平衡默认选择。参见专门的 Q4_K_M 对比 Q8_0 对比，了解 GGUF 各量化级别在文件大小和质量之间的完整权衡。',
          },
          {
            q: 'Ollama 直接支持 GPTQ 或 AWQ 模型吗？',
            a: '不支持——Ollama 专门围绕 GGUF 构建。要使用 GPTQ 或 AWQ 检查点，需要专为该格式设计的其他服务工具（vLLM、TGI 或 ExLlama）。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[什么是 Q4_K_M 量化？](/prompt-bites/what-is-q4-k-m-quantization) — GGUF 最常见的量化级别详解',
          '[Q4_K_M 对比 Q8_0](/prompt-bites/q4-k-m-vs-q8-0) — 选择 GGUF 量化级别',
          '[Ollama 对比 vLLM 对比 TGI](/prompt-bites/ollama-vs-vllm-vs-tgi) — 哪种服务工具搭配哪种格式',
          '[LLM量化详解（完整指南）](/local-llms/llm-quantization-explained) — 深入剖析量化底层工作原理的完整指南',
        ],
      },
    },
  },
}
