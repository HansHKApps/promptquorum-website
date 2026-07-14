import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best Sub-8B Model for Real-Time Chat?',
    seoTitle: 'Best Sub-8B Model for Real-Time Chat 2026',
    metaDescription: 'Qwen3 4B is the best sub-8B model for real-time chat — strong quality-to-speed ratio on modest hardware. Phi-4-mini and Llama 3.2 3B are close alternatives.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers building a low-latency local chat feature on modest hardware',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 4B is the best sub-8B model for real-time chat</strong> — it delivers a strong quality-to-speed ratio that keeps latency low even on modest GPUs or CPU-only machines. Phi-4-mini (3.8B) and Llama 3.2 3B are close alternatives, trading a little quality for slightly smaller memory footprint.',
    toc: [
      { label: 'Best Pick: Qwen3 4B', anchor: '#best-pick' },
      { label: 'Sub-8B Models Compared', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best sub-8B model for real-time chat?',
        answer: 'Qwen3 4B is the best sub-8B model for real-time chat, balancing response quality with the low latency modest hardware needs. Phi-4-mini and Llama 3.2 3B are close, slightly smaller alternatives.',
        bullets: [
          'Qwen3 4B fits in ~2.5-3 GB at Q4 — runs fast even on CPU-only or entry-level GPU setups.',
          'Phi-4-mini (3.8B) is a close alternative, tuned for reasoning tasks at a similarly small footprint.',
          'Llama 3.2 3B and Gemma 3 4B are the smallest realistic options if latency matters more than raw quality.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: Qwen3 4B — strong quality-to-speed ratio, fits in ~2.5-3 GB at Q4',
          'Close alternative: Phi-4-mini (3.8B), tuned specifically for reasoning tasks at a similar footprint',
          'Smallest options: Llama 3.2 3B and Gemma 3 4B, if latency matters more than output quality',
          'All four run acceptably on CPU-only hardware — a GPU is a speed boost here, not a requirement',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Qwen3 4B',
        content: [
          '<strong>Qwen3 4B is the best sub-8B model for real-time chat because it holds a strong quality-to-speed ratio at a small enough footprint (roughly 2.5-3 GB at Q4_K_M) to run fast even without a dedicated GPU.</strong> For latency-sensitive applications — a chat widget, a voice assistant backend, a live-typing autocomplete — the model needs to respond in a fraction of a second per token, and Qwen3 4B\'s size makes that achievable on modest hardware.',
          'Phi-4-mini (3.8B) is a close alternative with a similar footprint, tuned specifically for reasoning-style tasks. It is a reasonable substitute if your chat use case leans more toward step-by-step problem solving than open-ended conversation.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Sub-8B Models Compared',
        content: [
          'Llama 3.2 3B and Gemma 3 4B sit at the smallest end of this range — pick either if minimizing latency matters more than maximizing output quality, for example on battery-constrained edge devices.',
          'None of these models require a GPU to hit usable real-time speeds; a modern CPU handles them adequately, and any GPU (even an 8 GB one) gives a further speed boost without changing which models fit.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need a GPU for real-time chat with these models?',
            a: 'No. All four models (Qwen3 4B, Phi-4-mini, Llama 3.2 3B, Gemma 3 4B) run at usable speeds on a modern CPU. A GPU speeds things up further but is not required to hit real-time latency at this model size.',
          },
          {
            q: 'Why not use a larger, higher-quality model for chat?',
            a: 'Larger models (14B+) produce better responses but add latency per token — for real-time or streaming chat experiences, that tradeoff often isn\'t worth it. Match model size to your actual latency budget, not just the highest quality you can afford.',
          },
          {
            q: 'Is Qwen3 4B good at languages other than English?',
            a: 'Qwen models are trained with strong multilingual coverage, including good performance in Chinese and reasonable coverage of major European and Asian languages, though quality varies by language versus English.',
          },
          {
            q: 'Can I fine-tune these models for a specific chat persona?',
            a: 'Yes — their small size makes them good QLoRA fine-tuning candidates on modest hardware. See the fine-tuning hardware guide for what a local fine-tuning setup needs.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best Local LLM for 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) — hardware sizing for this model tier',
          '[Best Embedding Model for Local RAG](/prompt-bites/best-embedding-model-local-rag) — pairing a small chat model with retrieval',
          '[What Hardware Do You Need to Fine-Tune a 7B Model Locally?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — customizing a small model further',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'أفضل نموذج دون 8B للدردشة الفورية؟',
    seoTitle: 'أفضل نموذج دون 8B للدردشة الفورية 2026',
    metaDescription: 'نموذج Qwen3 4B هو الأفضل دون 8B للدردشة الفورية — نسبة جودة إلى سرعة قوية على عتاد متواضع. Phi-4-mini وLlama 3.2 3B بدائل قريبة.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يبنون ميزة دردشة محلية منخفضة الكمون على عتاد متواضع',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذج Qwen3 4B هو الأفضل دون 8B للدردشة الفورية</strong> — يقدّم نسبة جودة إلى سرعة قوية تحافظ على كمون منخفض حتى على بطاقات GPU متواضعة أو أجهزة تعتمد فقط على CPU. Phi-4-mini (3.8B) وLlama 3.2 3B بديلان قريبان، يضحيان بقليل من الجودة مقابل بصمة ذاكرة أصغر قليلًا.',
    toc: [
      { label: 'أفضل اختيار: Qwen3 4B', anchor: '#best-pick' },
      { label: 'مقارنة النماذج دون 8B', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل نموذج دون 8B للدردشة الفورية؟',
        answer: 'نموذج Qwen3 4B هو الأفضل دون 8B للدردشة الفورية، موازنًا بين جودة الاستجابة والكمون المنخفض الذي يحتاجه العتاد المتواضع. Phi-4-mini وLlama 3.2 3B بديلان قريبان وأصغر قليلًا.',
        bullets: [
          'نموذج Qwen3 4B يستوعب في ~2.5-3 GB بدقة Q4 — يعمل بسرعة حتى على إعدادات معتمدة فقط على CPU أو GPU من الفئة المبتدئة.',
          'نموذج Phi-4-mini (3.8B) بديل قريب، مضبوط لمهام الاستدلال ببصمة صغيرة مماثلة.',
          'نموذجا Llama 3.2 3B وGemma 3 4B هما الخياران الأصغر الواقعيان إذا كان الكمون أهم من الجودة الخام.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار: Qwen3 4B — نسبة جودة إلى سرعة قوية، يستوعب في ~2.5-3 GB بدقة Q4',
          'بديل قريب: Phi-4-mini (3.8B)، مضبوط تحديدًا لمهام الاستدلال ببصمة مماثلة',
          'أصغر الخيارات: Llama 3.2 3B وGemma 3 4B، إذا كان الكمون أهم من جودة المخرجات',
          'تعمل النماذج الأربعة كلها بشكل مقبول على عتاد معتمد فقط على CPU — بطاقة GPU تعزيز سرعة هنا، وليست متطلبًا',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Qwen3 4B',
        content: [
          '<strong>نموذج Qwen3 4B هو الأفضل دون 8B للدردشة الفورية لأنه يحافظ على نسبة جودة إلى سرعة قوية ببصمة صغيرة بما يكفي (حوالي 2.5-3 GB بدقة Q4_K_M) للعمل بسرعة حتى دون بطاقة GPU مخصصة.</strong> بالنسبة للتطبيقات الحساسة للكمون — عنصر دردشة، خلفية مساعد صوتي، إكمال تلقائي أثناء الكتابة الحية — يحتاج النموذج للاستجابة في جزء من الثانية لكل رمز، وحجم Qwen3 4B يجعل ذلك ممكنًا على عتاد متواضع.',
          'نموذج Phi-4-mini (3.8B) بديل قريب ببصمة مماثلة، مضبوط تحديدًا لمهام من نوع الاستدلال. إنه بديل معقول إذا كانت حالة استخدام الدردشة لديك تميل أكثر نحو حل المشكلات خطوة بخطوة بدلًا من المحادثة المفتوحة.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'مقارنة النماذج دون 8B',
        content: [
          'يقع نموذجا Llama 3.2 3B وGemma 3 4B عند الطرف الأصغر من هذا النطاق — اختر أيًا منهما إذا كان تقليل الكمون أهم من تعظيم جودة المخرجات، على سبيل المثال على أجهزة الحافة المحدودة بالبطارية.',
          'لا يتطلب أي من هذه النماذج بطاقة GPU للوصول إلى سرعات فورية قابلة للاستخدام؛ يتعامل معالج CPU حديث معها بشكل كافٍ، وأي بطاقة GPU (حتى بذاكرة 8 GB) تمنح تعزيز سرعة إضافيًا دون تغيير النماذج التي تستوعب.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج بطاقة GPU للدردشة الفورية مع هذه النماذج؟',
            a: 'لا. تعمل النماذج الأربعة كلها (Qwen3 4B وPhi-4-mini وLlama 3.2 3B وGemma 3 4B) بسرعات قابلة للاستخدام على معالج CPU حديث. تزيد بطاقة GPU السرعة أكثر لكنها ليست مطلوبة للوصول إلى كمون فوري بهذا الحجم من النموذج.',
          },
          {
            q: 'لماذا لا أستخدم نموذجًا أكبر وأعلى جودة للدردشة؟',
            a: 'تنتج النماذج الأكبر (14B+) استجابات أفضل لكنها تضيف كمونًا لكل رمز — بالنسبة لتجارب الدردشة الفورية أو البثية، غالبًا لا تستحق هذه المقايضة العناء. طابق حجم النموذج مع ميزانية الكمون الفعلية لديك، وليس أعلى جودة يمكنك تحمّلها فقط.',
          },
          {
            q: 'هل Qwen3 4B جيد في لغات أخرى غير الإنجليزية؟',
            a: 'تُدرَّب نماذج Qwen بتغطية متعددة اللغات قوية، بما فيها أداء جيد في الصينية وتغطية معقولة للغات أوروبية وآسيوية رئيسية، رغم أن الجودة تتفاوت حسب اللغة مقارنة بالإنجليزية.',
          },
          {
            q: 'هل يمكنني ضبط هذه النماذج دقيقًا لشخصية دردشة محددة؟',
            a: 'نعم — يجعلها حجمها الصغير مرشحة جيدة للضبط الدقيق بتقنية QLoRA على عتاد متواضع. راجع دليل عتاد الضبط الدقيق لما يحتاجه إعداد ضبط دقيق محلي.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل LLM محلي لذاكرة VRAM سعة 6 GB](/prompt-bites/best-local-llm-6gb-vram) — تحديد حجم العتاد لهذه الفئة من النماذج',
          '[أفضل نموذج تضمين لـ RAG محلي](/prompt-bites/best-embedding-model-local-rag) — إقران نموذج دردشة صغير مع الاسترجاع',
          '[ما العتاد اللازم للضبط الدقيق لنموذج 7B محليًا؟](/prompt-bites/fine-tuning-7b-model-locally-hardware) — تخصيص نموذج صغير أكثر',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Das beste Sub-8B-Modell für Echtzeit-Chat?',
    seoTitle: 'Bestes Sub-8B-Modell für Echtzeit-Chat 2026',
    metaDescription: 'Qwen3 4B ist das beste Sub-8B-Modell für Echtzeit-Chat — starkes Verhältnis von Qualität zu Geschwindigkeit auf bescheidener Hardware. Phi-4-mini und Llama 3.2 3B sind nahe Alternativen.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die eine latenzarme lokale Chat-Funktion auf bescheidener Hardware bauen',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 4B ist das beste Sub-8B-Modell für Echtzeit-Chat</strong> — es liefert ein starkes Verhältnis von Qualität zu Geschwindigkeit, das die Latenz selbst auf bescheidenen GPUs oder reinen CPU-Maschinen niedrig hält. Phi-4-mini (3,8B) und Llama 3.2 3B sind nahe Alternativen, die etwas Qualität gegen einen etwas kleineren Speicherbedarf eintauschen.',
    toc: [
      { label: 'Beste Wahl: Qwen3 4B', anchor: '#best-pick' },
      { label: 'Sub-8B-Modelle im Vergleich', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste Sub-8B-Modell für Echtzeit-Chat?',
        answer: 'Qwen3 4B ist das beste Sub-8B-Modell für Echtzeit-Chat und balanciert Antwortqualität mit der niedrigen Latenz, die bescheidene Hardware braucht. Phi-4-mini und Llama 3.2 3B sind nahe, etwas kleinere Alternativen.',
        bullets: [
          'Qwen3 4B passt bei Q4 in ~2,5-3 GB — läuft schnell selbst auf reinen CPU- oder Einstiegs-GPU-Setups.',
          'Phi-4-mini (3,8B) ist eine nahe Alternative, auf Reasoning-Aufgaben abgestimmt bei ähnlich kleinem Speicherbedarf.',
          'Llama 3.2 3B und Gemma 3 4B sind die kleinsten realistischen Optionen, wenn Latenz wichtiger ist als rohe Qualität.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: Qwen3 4B — starkes Verhältnis von Qualität zu Geschwindigkeit, passt bei Q4 in ~2,5-3 GB',
          'Nahe Alternative: Phi-4-mini (3,8B), speziell auf Reasoning-Aufgaben abgestimmt bei ähnlichem Speicherbedarf',
          'Kleinste Optionen: Llama 3.2 3B und Gemma 3 4B, wenn Latenz wichtiger ist als Ausgabequalität',
          'Alle vier laufen akzeptabel auf reiner CPU-Hardware — eine GPU ist hier ein Geschwindigkeitsbonus, keine Voraussetzung',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Qwen3 4B',
        content: [
          '<strong>Qwen3 4B ist das beste Sub-8B-Modell für Echtzeit-Chat, weil es ein starkes Verhältnis von Qualität zu Geschwindigkeit bei einem Speicherbedarf hält (rund 2,5-3 GB bei Q4_K_M), der schnelles Laufen selbst ohne dedizierte GPU ermöglicht.</strong> Für latenzsensitive Anwendungen — ein Chat-Widget, ein Sprachassistenten-Backend, eine Live-Tipp-Autovervollständigung — muss das Modell in einem Bruchteil einer Sekunde pro Token antworten, und die Größe von Qwen3 4B macht das auf bescheidener Hardware erreichbar.',
          'Phi-4-mini (3,8B) ist eine nahe Alternative mit ähnlichem Speicherbedarf, speziell auf Reasoning-artige Aufgaben abgestimmt. Es ist ein vernünftiger Ersatz, wenn Ihr Chat-Anwendungsfall eher zu schrittweiser Problemlösung als zu offener Konversation tendiert.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Sub-8B-Modelle im Vergleich',
        content: [
          'Llama 3.2 3B und Gemma 3 4B liegen am unteren Ende dieser Spanne — wählen Sie eines von beiden, wenn Latenzminimierung wichtiger ist als maximale Ausgabequalität, etwa auf akkubeschränkten Edge-Geräten.',
          'Keines dieser Modelle benötigt eine GPU, um nutzbare Echtzeitgeschwindigkeiten zu erreichen; eine moderne CPU bewältigt sie ausreichend, und jede GPU (selbst eine mit 8 GB) gibt einen weiteren Geschwindigkeitsschub, ohne zu ändern, welche Modelle passen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich eine GPU für Echtzeit-Chat mit diesen Modellen?',
            a: 'Nein. Alle vier Modelle (Qwen3 4B, Phi-4-mini, Llama 3.2 3B, Gemma 3 4B) laufen auf einer modernen CPU in nutzbarer Geschwindigkeit. Eine GPU beschleunigt weiter, ist aber nicht erforderlich, um bei dieser Modellgröße Echtzeit-Latenz zu erreichen.',
          },
          {
            q: 'Warum nicht ein größeres, qualitativ besseres Modell für Chat verwenden?',
            a: 'Größere Modelle (14B+) liefern bessere Antworten, fügen aber Latenz pro Token hinzu — für Echtzeit- oder Streaming-Chat-Erlebnisse lohnt sich dieser Kompromiss oft nicht. Passen Sie die Modellgröße an Ihr tatsächliches Latenzbudget an, nicht nur an die höchste erschwingliche Qualität.',
          },
          {
            q: 'Ist Qwen3 4B gut in anderen Sprachen als Englisch?',
            a: 'Qwen-Modelle sind mit starker mehrsprachiger Abdeckung trainiert, einschließlich guter Leistung im Chinesischen und angemessener Abdeckung wichtiger europäischer und asiatischer Sprachen, wobei die Qualität je nach Sprache gegenüber Englisch variiert.',
          },
          {
            q: 'Kann ich diese Modelle für eine bestimmte Chat-Persona fine-tunen?',
            a: 'Ja — ihre geringe Größe macht sie zu guten QLoRA-Fine-Tuning-Kandidaten auf bescheidener Hardware. Siehe den Fine-Tuning-Hardware-Guide dazu, was ein lokales Fine-Tuning-Setup benötigt.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Bestes lokales LLM für 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) — Hardware-Größenwahl für diese Modellstufe',
          '[Bestes Embedding-Modell für lokales RAG](/prompt-bites/best-embedding-model-local-rag) — ein kleines Chat-Modell mit Retrieval kombinieren',
          '[Welche Hardware braucht man, um ein 7B-Modell lokal zu fine-tunen?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — ein kleines Modell weiter anpassen',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: '¿Cuál es el Mejor Modelo Menor a 8B para Chat en Tiempo Real?',
    seoTitle: 'Mejor Modelo Menor a 8B para Chat en Tiempo Real 2026',
    metaDescription: 'Qwen3 4B es el mejor modelo menor a 8B para chat en tiempo real — fuerte relación calidad-velocidad en hardware modesto. Phi-4-mini y Llama 3.2 3B son alternativas cercanas.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que construyen una función de chat local de baja latencia en hardware modesto',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 4B es el mejor modelo menor a 8B para chat en tiempo real</strong> — ofrece una fuerte relación calidad-velocidad que mantiene baja la latencia incluso en GPUs modestas o máquinas solo con CPU. Phi-4-mini (3.8B) y Llama 3.2 3B son alternativas cercanas, que sacrifican algo de calidad por una huella de memoria ligeramente menor.',
    toc: [
      { label: 'Mejor Opción: Qwen3 4B', anchor: '#best-pick' },
      { label: 'Modelos Menores a 8B Comparados', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor modelo menor a 8B para chat en tiempo real?',
        answer: 'Qwen3 4B es el mejor modelo menor a 8B para chat en tiempo real, equilibrando la calidad de respuesta con la baja latencia que necesita el hardware modesto. Phi-4-mini y Llama 3.2 3B son alternativas cercanas y ligeramente más pequeñas.',
        bullets: [
          'Qwen3 4B cabe en ~2.5-3 GB en Q4 — corre rápido incluso en configuraciones solo con CPU o GPU de nivel básico.',
          'Phi-4-mini (3.8B) es una alternativa cercana, ajustada para tareas de razonamiento a una huella igual de pequeña.',
          'Llama 3.2 3B y Gemma 3 4B son las opciones realistas más pequeñas si la latencia importa más que la calidad bruta.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: Qwen3 4B — fuerte relación calidad-velocidad, cabe en ~2.5-3 GB en Q4',
          'Alternativa cercana: Phi-4-mini (3.8B), ajustado específicamente para tareas de razonamiento a una huella similar',
          'Opciones más pequeñas: Llama 3.2 3B y Gemma 3 4B, si la latencia importa más que la calidad de salida',
          'Los cuatro corren aceptablemente en hardware solo con CPU — una GPU aquí es un impulso de velocidad, no un requisito',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Qwen3 4B',
        content: [
          '<strong>Qwen3 4B es el mejor modelo menor a 8B para chat en tiempo real porque mantiene una fuerte relación calidad-velocidad a una huella suficientemente pequeña (aproximadamente 2.5-3 GB en Q4_K_M) para correr rápido incluso sin una GPU dedicada.</strong> Para aplicaciones sensibles a la latencia — un widget de chat, un backend de asistente de voz, un autocompletado en vivo — el modelo necesita responder en una fracción de segundo por token, y el tamaño de Qwen3 4B lo hace posible en hardware modesto.',
          'Phi-4-mini (3.8B) es una alternativa cercana con una huella similar, ajustada específicamente para tareas al estilo razonamiento. Es un sustituto razonable si tu caso de uso de chat se inclina más hacia la resolución de problemas paso a paso que hacia la conversación abierta.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos Menores a 8B Comparados',
        content: [
          'Llama 3.2 3B y Gemma 3 4B están en el extremo más pequeño de este rango — elige cualquiera si minimizar la latencia importa más que maximizar la calidad de salida, por ejemplo en dispositivos periféricos limitados por batería.',
          'Ninguno de estos modelos requiere una GPU para alcanzar velocidades usables en tiempo real; una CPU moderna los maneja adecuadamente, y cualquier GPU (incluso una de 8 GB) da un impulso de velocidad adicional sin cambiar qué modelos caben.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Necesito una GPU para chat en tiempo real con estos modelos?',
            a: 'No. Los cuatro modelos (Qwen3 4B, Phi-4-mini, Llama 3.2 3B, Gemma 3 4B) corren a velocidades usables en una CPU moderna. Una GPU acelera aún más las cosas pero no es necesaria para alcanzar latencia en tiempo real en este tamaño de modelo.',
          },
          {
            q: '¿Por qué no usar un modelo más grande y de mayor calidad para el chat?',
            a: 'Los modelos más grandes (14B+) producen mejores respuestas pero añaden latencia por token — para experiencias de chat en tiempo real o en streaming, ese intercambio a menudo no vale la pena. Ajusta el tamaño del modelo a tu presupuesto real de latencia, no solo a la mayor calidad que puedas permitirte.',
          },
          {
            q: '¿Es bueno Qwen3 4B en idiomas distintos al inglés?',
            a: 'Los modelos Qwen están entrenados con una fuerte cobertura multilingüe, incluido un buen rendimiento en chino y una cobertura razonable de los principales idiomas europeos y asiáticos, aunque la calidad varía según el idioma frente al inglés.',
          },
          {
            q: '¿Puedo hacer fine-tuning de estos modelos para una personalidad de chat específica?',
            a: 'Sí — su tamaño pequeño los hace buenos candidatos para fine-tuning QLoRA en hardware modesto. Consulta la guía de hardware para fine-tuning para saber qué necesita una configuración local de fine-tuning.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[Mejor LLM Local para 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — dimensionamiento de hardware para este nivel de modelo',
          '[Mejor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — combinando un modelo de chat pequeño con recuperación',
          '[¿Qué Hardware Necesitas para Hacer Fine-Tuning de un Modelo de 7B Localmente?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — personalizando más un modelo pequeño',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Quel est le meilleur modèle sous 8B pour le chat en temps réel ?',
    seoTitle: 'Meilleur modèle sous 8B pour le chat en temps réel 2026',
    metaDescription: 'Qwen3 4B est le meilleur modèle sous 8B pour le chat en temps réel — un excellent rapport qualité/vitesse sur du matériel modeste. Phi-4-mini et Llama 3.2 3B sont des alternatives proches.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs qui conçoivent une fonctionnalité de chat local à faible latence sur du matériel modeste',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 4B est le meilleur modèle sous 8B pour le chat en temps réel</strong> — il offre un excellent rapport qualité/vitesse qui maintient une faible latence, même sur des GPU modestes ou des machines sans GPU. Phi-4-mini (3.8B) et Llama 3.2 3B sont des alternatives proches, qui sacrifient un peu de qualité pour une empreinte mémoire légèrement plus petite.',
    toc: [
      { label: 'Meilleur choix : Qwen3 4B', anchor: '#best-pick' },
      { label: 'Comparatif des modèles sous 8B', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur modèle sous 8B pour le chat en temps réel ?',
        answer: 'Qwen3 4B est le meilleur modèle sous 8B pour le chat en temps réel : il concilie qualité de réponse et faible latence sur du matériel modeste. Phi-4-mini et Llama 3.2 3B sont des alternatives proches, légèrement plus petites.',
        bullets: [
          'Qwen3 4B tient dans environ 2.5-3 GB en Q4 — il tourne rapidement même sur CPU seul ou avec un GPU d\'entrée de gamme.',
          'Phi-4-mini (3.8B) est une alternative proche, optimisée pour les tâches de raisonnement avec une empreinte tout aussi réduite.',
          'Llama 3.2 3B et Gemma 3 4B sont les options les plus légères si la latence compte plus que la qualité brute.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : Qwen3 4B — excellent rapport qualité/vitesse, tient dans environ 2.5-3 GB en Q4',
          'Alternative proche : Phi-4-mini (3.8B), spécifiquement optimisé pour les tâches de raisonnement, avec une empreinte similaire',
          'Options les plus légères : Llama 3.2 3B et Gemma 3 4B, si la latence compte plus que la qualité des réponses',
          'Les quatre modèles fonctionnent correctement sur CPU seul — un GPU accélère les choses mais n\'est pas indispensable',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Qwen3 4B',
        content: [
          '<strong>Qwen3 4B est le meilleur modèle sous 8B pour le chat en temps réel, car il conserve un excellent rapport qualité/vitesse avec une empreinte assez réduite (environ 2.5-3 GB en Q4_K_M) pour tourner rapidement même sans GPU dédié.</strong> Pour les applications sensibles à la latence — un widget de chat, un backend d\'assistant vocal, une autocomplétion en direct — le modèle doit répondre en une fraction de seconde par token, et la taille de Qwen3 4B rend cela possible sur du matériel modeste.',
          'Phi-4-mini (3.8B) est une alternative proche avec une empreinte similaire, spécifiquement optimisée pour les tâches de raisonnement. C\'est un bon substitut si votre cas d\'usage se rapproche davantage de la résolution de problèmes étape par étape que de la conversation ouverte.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparatif des modèles sous 8B',
        content: [
          'Llama 3.2 3B et Gemma 3 4B se situent au bas de cette fourchette — choisissez l\'un ou l\'autre si minimiser la latence compte plus que maximiser la qualité des réponses, par exemple sur des appareils périphériques limités en autonomie.',
          'Aucun de ces modèles n\'exige de GPU pour atteindre des vitesses utilisables en temps réel ; un CPU moderne les gère correctement, et tout GPU (même un modèle de 8 GB) apporte un gain de vitesse supplémentaire sans changer la compatibilité des modèles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Ai-je besoin d\'un GPU pour le chat en temps réel avec ces modèles ?',
            a: 'Non. Les quatre modèles (Qwen3 4B, Phi-4-mini, Llama 3.2 3B, Gemma 3 4B) fonctionnent à des vitesses utilisables sur un CPU moderne. Un GPU accélère encore les choses, mais n\'est pas nécessaire pour atteindre une latence temps réel à cette taille de modèle.',
          },
          {
            q: 'Pourquoi ne pas utiliser un modèle plus grand et de meilleure qualité pour le chat ?',
            a: 'Les modèles plus grands (14B et plus) produisent de meilleures réponses mais ajoutent de la latence par token — pour des expériences de chat en temps réel ou en streaming, ce compromis n\'en vaut souvent pas la peine. Adaptez la taille du modèle à votre budget de latence réel, et non à la meilleure qualité possible.',
          },
          {
            q: 'Qwen3 4B est-il performant dans des langues autres que l\'anglais ?',
            a: 'Les modèles Qwen sont entraînés avec une solide couverture multilingue, avec de bonnes performances en chinois et une couverture correcte des principales langues européennes et asiatiques, bien que la qualité varie selon la langue par rapport à l\'anglais.',
          },
          {
            q: 'Puis-je fine-tuner ces modèles pour un persona de chat spécifique ?',
            a: 'Oui — leur petite taille en fait de bons candidats au fine-tuning QLoRA sur du matériel modeste. Consultez le guide sur le matériel de fine-tuning pour connaître les besoins d\'une configuration locale.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur LLM local pour 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — dimensionnement matériel pour cette catégorie de modèles',
          '[Meilleur modèle d\'embedding pour un RAG local](/prompt-bites/best-embedding-model-local-rag) — associer un petit modèle de chat à la recherche documentaire',
          '[Quel matériel pour fine-tuner un modèle 7B en local ?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — personnaliser davantage un petit modèle',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'リアルタイムチャットに最適な8B未満のモデルは?',
    seoTitle: '2026年版 リアルタイムチャットに最適な8B未満モデル',
    metaDescription: 'Qwen3 4Bはリアルタイムチャットに最適な8B未満のモデルです — 控えめなハードウェアで優れた品質対速度比。Phi-4-miniとLlama 3.2 3Bが近い代替案です。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '控えめなハードウェアで低遅延のローカルチャット機能を構築する開発者',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 4Bはリアルタイムチャットに最適な8B未満のモデルです</strong> — 控えめなGPUやCPUのみのマシンでも低遅延を保つ優れた品質対速度比を発揮します。Phi-4-mini(3.8B)とLlama 3.2 3Bは近い代替案で、わずかな品質と引き換えにメモリフットプリントがやや小さくなります。',
    toc: [
      { label: 'ベストピック: Qwen3 4B', anchor: '#best-pick' },
      { label: '8B未満モデルの比較', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'リアルタイムチャットに最適な8B未満のモデルは?',
        answer: 'Qwen3 4Bはリアルタイムチャットに最適な8B未満のモデルで、応答品質と控えめなハードウェアが必要とする低遅延のバランスを取ります。Phi-4-miniとLlama 3.2 3Bは近い、わずかに小さい代替案です。',
        bullets: [
          'Qwen3 4BはQ4で約2.5-3GBに収まり、CPUのみやエントリーレベルのGPUセットアップでも高速に動作します。',
          'Phi-4-mini(3.8B)は近い代替案で、同様に小さいフットプリントで推論タスクにチューニングされています。',
          'Llama 3.2 3BとGemma 3 4Bは、生の品質より遅延を重視する場合の最小の現実的な選択肢です。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ベストピック: Qwen3 4B — 優れた品質対速度比、Q4で約2.5-3GBに収まる',
          '近い代替案: Phi-4-mini(3.8B)、同様のフットプリントで特に推論タスクにチューニング',
          '最小の選択肢: Llama 3.2 3BとGemma 3 4B、出力品質より遅延を重視する場合',
          '4つとも CPUのみのハードウェアで許容範囲で動作 — GPUはここでは必須ではなく速度向上策',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: Qwen3 4B',
        content: [
          '<strong>Qwen3 4Bがリアルタイムチャットに最適な8B未満のモデルである理由は、専用GPUなしでも高速に動作するのに十分小さいフットプリント(Q4_K_Mで約2.5-3GB)で優れた品質対速度比を保っているためです。</strong>遅延に敏感なアプリケーション — チャットウィジェット、音声アシスタントのバックエンド、ライブ入力の自動補完 — では、モデルは1トークンあたり1秒未満で応答する必要があり、Qwen3 4Bのサイズは控えめなハードウェアでもそれを実現可能にします。',
          'Phi-4-mini(3.8B)は同様のフットプリントを持つ近い代替案で、推論スタイルのタスクに特化してチューニングされています。チャットのユースケースがオープンエンドな会話よりも段階的な問題解決寄りであれば、妥当な代替となります。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8B未満モデルの比較',
        content: [
          'Llama 3.2 3BとGemma 3 4Bはこの範囲の最小端に位置します — バッテリー制約のあるエッジデバイスなど、出力品質の最大化より遅延の最小化が重要な場合はどちらかを選んでください。',
          'これらのモデルはどれもリアルタイムの実用速度を出すためにGPUを必要としません。現代のCPUで十分対応でき、GPU(8GBのものでも)があればさらに速度が向上しますが、収まるモデルの範囲は変わりません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'これらのモデルでリアルタイムチャットを行うのにGPUが必要ですか?',
            a: 'いいえ。4つのモデル(Qwen3 4B、Phi-4-mini、Llama 3.2 3B、Gemma 3 4B)はすべて現代のCPUで実用的な速度で動作します。GPUはさらに高速化しますが、このモデルサイズでリアルタイムの遅延を達成するのに必須ではありません。',
          },
          {
            q: 'チャットにはもっと大きく高品質なモデルを使うべきではないですか?',
            a: '大きなモデル(14B以上)はより良い応答を生成しますが、トークンあたりの遅延が増えます — リアルタイムやストリーミングのチャット体験では、そのトレードオフが割に合わないことがよくあります。手に入る最高の品質だけでなく、実際の遅延予算にモデルサイズを合わせてください。',
          },
          {
            q: 'Qwen3 4Bは英語以外の言語でも良いですか?',
            a: 'Qwenモデルは中国語を含む強力な多言語対応データで訓練されており、主要な欧州語やアジア言語もある程度カバーしていますが、英語に対する品質は言語によって異なります。',
          },
          {
            q: 'これらのモデルを特定のチャットペルソナ用にファインチューニングできますか?',
            a: 'はい — 小さいサイズのため、控えめなハードウェアでの優れたQLoRAファインチューニング候補になります。ローカルファインチューニングセットアップに何が必要かはファインチューニングハードウェアガイドを参照してください。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[6GB VRAMに最適なローカルLLM](/prompt-bites/best-local-llm-6gb-vram) — この モデル層向けのハードウェアサイジング',
          '[ローカルRAGに最適な埋め込みモデル](/prompt-bites/best-embedding-model-local-rag) — 小さいチャットモデルと検索を組み合わせる',
          '[7Bモデルをローカルでファインチューニングするために必要なハードウェアは?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — 小さいモデルをさらにカスタマイズする',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: '실시간 채팅을 위한 최적의 8B 이하 모델은?',
    seoTitle: '2026년 실시간 채팅 최적 8B 이하 모델',
    metaDescription: 'Qwen3 4B는 실시간 채팅을 위한 최적의 8B 이하 모델입니다 — 적당한 하드웨어에서 강력한 품질 대 속도 비율을 제공합니다. Phi-4-mini와 Llama 3.2 3B는 유사한 대안입니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '적당한 하드웨어에서 저지연 로컬 채팅 기능을 구축하는 개발자',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 4B는 실시간 채팅을 위한 최적의 8B 이하 모델입니다</strong> — 적당한 GPU나 CPU 전용 기기에서도 지연 시간을 낮게 유지하는 강력한 품질 대 속도 비율을 제공합니다. Phi-4-mini(3.8B)와 Llama 3.2 3B는 약간의 품질을 조금 더 작은 메모리 공간과 맞바꾸는 유사한 대안입니다.',
    toc: [
      { label: '최적의 선택: Qwen3 4B', anchor: '#best-pick' },
      { label: '8B 이하 모델 비교', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '실시간 채팅을 위한 최적의 8B 이하 모델은 무엇입니까?',
        answer: 'Qwen3 4B는 실시간 채팅을 위한 최적의 8B 이하 모델로, 적당한 하드웨어에 필요한 낮은 지연 시간과 응답 품질의 균형을 맞춥니다. Phi-4-mini와 Llama 3.2 3B는 유사하면서 조금 더 작은 대안입니다.',
        bullets: [
          'Qwen3 4B는 Q4에서 약 2.5-3GB에 맞으며, CPU 전용이나 진입급 GPU 설정에서도 빠르게 구동됩니다.',
          'Phi-4-mini(3.8B)는 유사하게 작은 규모로 추론 작업에 맞춰 튜닝된 유사한 대안입니다.',
          '지연 시간이 원시 품질보다 중요하다면 Llama 3.2 3B와 Gemma 3 4B가 가장 작은 현실적인 옵션입니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적의 선택: Qwen3 4B — 강력한 품질 대 속도 비율, Q4에서 약 2.5-3GB에 맞습니다',
          '유사한 대안: Phi-4-mini(3.8B), 유사한 규모로 추론 작업에 특화되어 튜닝되었습니다',
          '가장 작은 옵션: Llama 3.2 3B와 Gemma 3 4B, 출력 품질보다 지연 시간이 중요한 경우',
          '네 모델 모두 CPU 전용 하드웨어에서 수용 가능하게 구동됩니다 — 여기서 GPU는 필수가 아니라 속도 향상 요소입니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Qwen3 4B',
        content: [
          '<strong>Qwen3 4B는 강력한 품질 대 속도 비율을 충분히 작은 규모(Q4_K_M에서 약 2.5-3GB)로 유지하여 전용 GPU 없이도 빠르게 구동되기 때문에 실시간 채팅을 위한 최적의 8B 이하 모델입니다.</strong> 지연 시간에 민감한 애플리케이션 — 채팅 위젯, 음성 비서 백엔드, 실시간 타이핑 자동완성 — 에서는 모델이 토큰당 1초의 일부 안에 응답해야 하며, Qwen3 4B의 크기는 이를 적당한 하드웨어에서 달성 가능하게 만듭니다.',
          'Phi-4-mini(3.8B)는 유사한 규모의 가까운 대안으로, 추론 스타일 작업에 특화되어 튜닝되었습니다. 채팅 사용 사례가 개방형 대화보다 단계별 문제 해결에 더 가깝다면 합리적인 대체재입니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8B 이하 모델 비교',
        content: [
          'Llama 3.2 3B와 Gemma 3 4B는 이 범위의 가장 작은 끝에 위치합니다 — 배터리 제약이 있는 엣지 기기처럼 출력 품질을 극대화하는 것보다 지연 시간을 최소화하는 것이 중요하다면 둘 중 하나를 선택하십시오.',
          '이들 모델 중 어느 것도 사용 가능한 실시간 속도에 도달하기 위해 GPU가 필요하지 않습니다. 최신 CPU면 충분히 처리하며, 어떤 GPU(8GB짜리라도)든 맞는 모델을 바꾸지 않으면서 추가 속도 향상을 제공합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '이 모델들로 실시간 채팅을 하려면 GPU가 필요합니까?',
            a: '아닙니다. 네 모델(Qwen3 4B, Phi-4-mini, Llama 3.2 3B, Gemma 3 4B) 모두 최신 CPU에서 사용 가능한 속도로 구동됩니다. GPU는 더 빠르게 만들지만 이 모델 크기에서 실시간 지연 시간에 도달하는 데 필수는 아닙니다.',
          },
          {
            q: '채팅에 왜 더 크고 품질이 높은 모델을 사용하지 않습니까?',
            a: '더 큰 모델(14B 이상)은 더 나은 응답을 생성하지만 토큰당 지연 시간이 추가됩니다 — 실시간이나 스트리밍 채팅 경험에서는 종종 그 절충이 가치가 없습니다. 감당할 수 있는 최고 품질이 아니라 실제 지연 시간 예산에 모델 크기를 맞추십시오.',
          },
          {
            q: 'Qwen3 4B는 영어 이외의 언어에서도 좋습니까?',
            a: 'Qwen 모델은 중국어를 포함한 강력한 다국어 커버리지로 훈련되었으며 주요 유럽 및 아시아 언어에서도 합리적인 커버리지를 갖추고 있지만, 품질은 영어 대비 언어별로 다릅니다.',
          },
          {
            q: '특정 채팅 페르소나를 위해 이 모델들을 파인튜닝할 수 있습니까?',
            a: '예 — 작은 크기 덕분에 적당한 하드웨어에서 좋은 QLoRA 파인튜닝 후보가 됩니다. 로컬 파인튜닝 설정에 필요한 것은 파인튜닝 하드웨어 가이드를 참고하십시오.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[6GB VRAM을 위한 최적의 로컬 LLM](/prompt-bites/best-local-llm-6gb-vram) — 이 모델 등급을 위한 하드웨어 산정',
          '[로컬 RAG를 위한 최적의 임베딩 모델](/prompt-bites/best-embedding-model-local-rag) — 작은 채팅 모델과 검색 결합하기',
          '[7B 모델을 로컬에서 파인튜닝하려면 어떤 하드웨어가 필요한가?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — 작은 모델을 더 커스터마이징하기',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Qual o Melhor Modelo Sub-8B para Chat em Tempo Real?',
    seoTitle: 'Melhor Modelo Sub-8B para Chat em Tempo Real 2026',
    metaDescription: 'O Qwen3 4B é o melhor modelo sub-8B para chat em tempo real — forte relação qualidade-velocidade em hardware modesto. Phi-4-mini e Llama 3.2 3B são alternativas próximas.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores construindo um recurso de chat local de baixa latência em hardware modesto',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O Qwen3 4B é o melhor modelo sub-8B para chat em tempo real</strong> — ele entrega uma forte relação qualidade-velocidade que mantém a latência baixa mesmo em GPUs modestas ou máquinas somente com CPU. O Phi-4-mini (3,8B) e o Llama 3.2 3B são alternativas próximas, trocando um pouco de qualidade por uma pegada de memória ligeiramente menor.',
    toc: [
      { label: 'Melhor Escolha: Qwen3 4B', anchor: '#best-pick' },
      { label: 'Modelos Sub-8B Comparados', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor modelo sub-8B para chat em tempo real?',
        answer: 'O Qwen3 4B é o melhor modelo sub-8B para chat em tempo real, equilibrando qualidade de resposta com a baixa latência que hardware modesto exige. O Phi-4-mini e o Llama 3.2 3B são alternativas próximas e um pouco menores.',
        bullets: [
          'O Qwen3 4B cabe em ~2,5-3 GB em Q4 — roda rápido mesmo em configurações somente com CPU ou GPU de entrada.',
          'O Phi-4-mini (3,8B) é uma alternativa próxima, ajustado para tarefas de raciocínio em uma pegada semelhante.',
          'O Llama 3.2 3B e o Gemma 3 4B são as menores opções realistas se latência importa mais que qualidade bruta.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: Qwen3 4B — forte relação qualidade-velocidade, cabe em ~2,5-3 GB em Q4',
          'Alternativa próxima: Phi-4-mini (3,8B), ajustado especificamente para tarefas de raciocínio em uma pegada semelhante',
          'Menores opções: Llama 3.2 3B e Gemma 3 4B, se latência importa mais que qualidade de saída',
          'Todos os quatro rodam aceitavelmente em hardware somente com CPU — uma GPU é um bônus de velocidade aqui, não um requisito',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Qwen3 4B',
        content: [
          '<strong>O Qwen3 4B é o melhor modelo sub-8B para chat em tempo real porque mantém uma forte relação qualidade-velocidade em uma pegada pequena o suficiente (aproximadamente 2,5-3 GB em Q4_K_M) para rodar rápido mesmo sem uma GPU dedicada.</strong> Para aplicações sensíveis à latência — um widget de chat, o backend de um assistente de voz, um autocomplete de digitação ao vivo — o modelo precisa responder em uma fração de segundo por token, e o tamanho do Qwen3 4B torna isso possível em hardware modesto.',
          'O Phi-4-mini (3,8B) é uma alternativa próxima com pegada semelhante, ajustado especificamente para tarefas de estilo raciocínio. É um substituto razoável se seu caso de uso de chat se inclina mais para resolução de problemas passo a passo do que para conversa aberta.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos Sub-8B Comparados',
        content: [
          'O Llama 3.2 3B e o Gemma 3 4B ficam na ponta menor dessa faixa — escolha qualquer um se minimizar a latência importa mais que maximizar a qualidade da saída, por exemplo em dispositivos de borda limitados por bateria.',
          'Nenhum desses modelos exige uma GPU para atingir velocidades utilizáveis em tempo real; uma CPU moderna lida com eles adequadamente, e qualquer GPU (mesmo uma de 8 GB) dá um bônus de velocidade adicional sem mudar quais modelos cabem.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Preciso de uma GPU para chat em tempo real com esses modelos?',
            a: 'Não. Todos os quatro modelos (Qwen3 4B, Phi-4-mini, Llama 3.2 3B, Gemma 3 4B) rodam em velocidades utilizáveis em uma CPU moderna. Uma GPU acelera ainda mais, mas não é necessária para atingir latência de tempo real nesse tamanho de modelo.',
          },
          {
            q: 'Por que não usar um modelo maior e de qualidade superior para chat?',
            a: 'Modelos maiores (14B+) produzem respostas melhores, mas adicionam latência por token — para experiências de chat em tempo real ou em streaming, essa troca frequentemente não vale a pena. Combine o tamanho do modelo ao seu orçamento real de latência, não apenas à maior qualidade que você pode pagar.',
          },
          {
            q: 'O Qwen3 4B é bom em outros idiomas além do inglês?',
            a: 'Os modelos Qwen são treinados com forte cobertura multilíngue, incluindo bom desempenho em chinês e cobertura razoável de principais idiomas europeus e asiáticos, embora a qualidade varie por idioma em comparação ao inglês.',
          },
          {
            q: 'Posso fazer fine-tuning desses modelos para uma persona de chat específica?',
            a: 'Sim — seu tamanho pequeno os torna bons candidatos a fine-tuning QLoRA em hardware modesto. Veja o guia de hardware para fine-tuning para saber o que uma configuração local de fine-tuning precisa.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Melhor LLM Local para 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — dimensionamento de hardware para essa faixa de modelo',
          '[Melhor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — combinando um modelo de chat pequeno com recuperação',
          '[Qual Hardware Você Precisa para Fazer Fine-Tuning de um Modelo de 7B Localmente?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — personalizando ainda mais um modelo pequeno',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '实时聊天的最佳 8B 以下模型是什么？',
    seoTitle: '2026 年实时聊天最佳 8B 以下模型',
    metaDescription: 'Qwen3 4B 是实时聊天的最佳 8B 以下模型——在普通硬件上具有出色的质量-速度比。Phi-4-mini 和 Llama 3.2 3B 是接近的替代方案。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 4B', 'Phi-4-mini', 'Llama 3.2 3B', 'Gemma 3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '在普通硬件上构建低延迟本地聊天功能的开发者',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 4B 是实时聊天的最佳 8B 以下模型</strong>——它提供出色的质量-速度比，即使在普通 GPU 或纯 CPU 机器上也能保持低延迟。Phi-4-mini（3.8B）和 Llama 3.2 3B 是接近的替代方案，以略微牺牲质量换取稍小的内存占用。',
    toc: [
      { label: '最佳选择：Qwen3 4B', anchor: '#best-pick' },
      { label: '8B 以下模型对比', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '实时聊天的最佳 8B 以下模型是什么？',
        answer: 'Qwen3 4B 是实时聊天的最佳 8B 以下模型，在响应质量和普通硬件所需的低延迟之间取得平衡。Phi-4-mini 和 Llama 3.2 3B 是接近且更小的替代方案。',
        bullets: [
          'Qwen3 4B 在 Q4 下占用约 2.5-3 GB——即使在纯 CPU 或入门级 GPU 配置上也能快速运行。',
          'Phi-4-mini（3.8B）是接近的替代方案，针对推理任务调优，占用空间相近。',
          '如果延迟比原始质量更重要，Llama 3.2 3B 和 Gemma 3 4B 是最小的现实可行选项。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择：Qwen3 4B——出色的质量-速度比，在 Q4 下占用约 2.5-3 GB',
          '接近的替代方案：Phi-4-mini（3.8B），专为推理任务调优，占用空间相近',
          '最小选项：Llama 3.2 3B 和 Gemma 3 4B，适合延迟比输出质量更重要的场景',
          '这四个模型在纯 CPU 硬件上都能可接受地运行——GPU 在这里是加速项，而非必需项',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Qwen3 4B',
        content: [
          '<strong>Qwen3 4B 是实时聊天的最佳 8B 以下模型，因为它以足够小的占用空间（Q4_K_M 下大约 2.5-3 GB）保持出色的质量-速度比，即使没有独立 GPU 也能快速运行。</strong>对于延迟敏感的应用——聊天小部件、语音助手后端、实时输入自动补全——模型需要每个 token 都在极短时间内响应，而 Qwen3 4B 的体积让这在普通硬件上也能实现。',
          'Phi-4-mini（3.8B）是占用空间相近的接近替代方案，专门针对推理类任务调优。如果你的聊天用例更偏向逐步解决问题而非开放式对话，它是一个合理的替代品。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8B 以下模型对比',
        content: [
          'Llama 3.2 3B 和 Gemma 3 4B 位于这一范围的最小端——如果最小化延迟比最大化输出质量更重要（例如在电池受限的边缘设备上），可以选择其中之一。',
          '这些模型都不需要 GPU 就能达到可用的实时速度；现代 CPU 即可胜任，任何 GPU（哪怕只有 8 GB）都能进一步提速,但不会改变能装入的模型范围。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '这些模型的实时聊天需要 GPU 吗？',
            a: '不需要。所有四个模型（Qwen3 4B、Phi-4-mini、Llama 3.2 3B、Gemma 3 4B）都能在现代 CPU 上以可用速度运行。GPU 能进一步加速，但在这一模型规模下达到实时延迟并非必需。',
          },
          {
            q: '为什么不用更大、质量更高的模型来聊天？',
            a: '更大的模型（14B 以上）生成的回复质量更好，但会增加每个 token 的延迟——对于实时或流式聊天体验，这种权衡往往不值得。应根据你实际的延迟预算而非仅追求最高质量来匹配模型规模。',
          },
          {
            q: 'Qwen3 4B 在英语以外的语言上表现好吗？',
            a: 'Qwen 系列模型经过强大的多语言覆盖训练，包括中文表现出色，并对主要欧洲和亚洲语言有合理覆盖，不过质量因语言而异，相比英语会有差距。',
          },
          {
            q: '我能为特定聊天人设微调这些模型吗？',
            a: '可以——它们的小体积使其成为在普通硬件上进行 QLoRA 微调的良好候选。参见微调硬件指南,了解本地微调配置需要什么。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[6 GB 显存的最佳本地 LLM](/prompt-bites/best-local-llm-6gb-vram) — 该模型档位的硬件规划',
          '[本地 RAG 的最佳嵌入模型](/prompt-bites/best-embedding-model-local-rag) — 将小型聊天模型与检索配对',
          '[本地微调 7B 模型需要什么硬件？](/prompt-bites/fine-tuning-7b-model-locally-hardware) — 进一步定制小模型',
        ],
      },
    },
  },
}
