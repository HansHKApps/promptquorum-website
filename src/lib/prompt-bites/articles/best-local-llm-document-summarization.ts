import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    title: 'Best Local LLM for Document Summarization?',
    seoTitle: 'Best Local LLM for Document Summarization 2026',
    metaDescription: 'Qwen3 14B and Llama 3.3 8B are the best local LLMs for document summarization — both support 128K+ context on Ollama for long documents in one pass.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Users summarizing long documents locally who need a long context window',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 14B and Llama 3.3 8B are the best local LLMs for document summarization</strong> — both support 128K+ context on Ollama, long enough to summarize most documents in a single pass without chunking. Qwen3 14B reaches up to 1M tokens of context in its extended configuration, useful for exceptionally long documents.',
    toc: [
      { label: 'Best Pick: Llama 3.3 8B (or Qwen3 14B for Very Long Documents)', anchor: '#best-pick' },
      { label: 'Full-Context Summarization vs Chunking', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for summarizing long documents?',
        answer: 'Qwen3 14B and Llama 3.3 8B are the best local LLMs for document summarization — both support 128K+ context on Ollama, enough to summarize long documents without chunking.',
        bullets: [
          'Llama 3.3 8B supports 128K+ context on Ollama — a smaller, faster option for long-document summarization.',
          'Qwen3 14B also supports 128K+ context, and reaches up to 1M tokens in its extended configuration for exceptional cases.',
          'Full 128K context uses significantly more VRAM than the base model size alone — budget accordingly.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: Llama 3.3 8B — 128K+ context on Ollama, smaller and faster for most documents',
          'Best for very long documents: Qwen3 14B — same 128K+ baseline, extends up to 1M tokens',
          'Full-length context uses far more VRAM than the model weights alone — plan hardware around this',
          'Chunking + an embedding model remains the right approach for documents beyond even 1M tokens',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Llama 3.3 8B (or Qwen3 14B for Very Long Documents)',
        content: [
          '<strong>Llama 3.3 8B is the best local LLM for most document summarization tasks, since its 128K+ context window on Ollama covers the vast majority of real-world documents in a single pass, without splitting the document into chunks that risk losing cross-section context.</strong> Its smaller 8B size also keeps VRAM requirements and inference speed reasonable compared to larger models.',
          'For exceptionally long documents that exceed even 128K tokens, Qwen3 14B is the better choice — it shares the same 128K baseline but can extend to 1M tokens in its extended configuration, covering book-length documents that Llama 3.3 8B\'s standard context cannot.',
          'Keep in mind that running a model at its full advertised context length uses significantly more VRAM than the base model weights alone — the attention mechanism\'s memory use scales with context length, so a 128K-context summarization session needs meaningfully more VRAM headroom than a short chat exchange with the same model.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Full-Context Summarization vs Chunking',
        content: [
          'Feeding a whole document into a long-context model in one pass avoids the cross-chunk context loss that traditional chunk-and-summarize pipelines suffer from, at the cost of needing more VRAM for the longer context window.',
          'For documents beyond even a 1M-token context ceiling, or when VRAM is tightly constrained, falling back to a chunking approach — splitting the document, summarizing each chunk, then summarizing the summaries — paired with an embedding model for relevant-section retrieval remains the practical alternative.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need extra VRAM to use the full 128K context?',
            a: 'Yes — running a model near its maximum context length uses substantially more VRAM than short interactions, since the attention cache scales with sequence length. Check your available VRAM against the model\'s context-length memory requirements before assuming 128K "just works."',
          },
          {
            q: 'Can a smaller model like Qwen3 4B handle long-document summarization?',
            a: 'Smaller models generally support shorter native context windows and summarize less coherently over very long inputs. For long-document work specifically, the 128K-context 8B-14B tier is the better fit.',
          },
          {
            q: 'Is chunking ever better than full-context summarization?',
            a: 'Yes, when VRAM is limited or documents exceed the model\'s context ceiling. Chunking also helps when you need to cite which section a specific summary point came from, since full-context summarization can blur section boundaries.',
          },
          {
            q: 'Does context length affect summarization quality, not just capacity?',
            a: 'Very long contexts can sometimes cause a model to under-weight information from the middle of the document (a known effect across long-context models generally) — for critical documents, spot-check the summary against the source rather than assuming perfect recall at maximum context length.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Which Ollama Models Support 128K Context?](/prompt-bites/ollama-128k-context-models) — the full list of long-context models',
          '[Best Embedding Model for Local RAG](/prompt-bites/best-embedding-model-local-rag) — a chunking-based alternative approach',
          '[How Much VRAM Do You Need for a Local LLM?](/prompt-bites/how-much-vram-for-local-llm) — sizing hardware for long-context work',
        ],
      },
    },
  },
  ar: {
    theme: 'Quick Answers',
    title: 'أفضل LLM محلي لتلخيص المستندات؟',
    seoTitle: 'أفضل LLM محلي لتلخيص المستندات 2026',
    metaDescription: 'نموذجا Qwen3 14B وLlama 3.3 8B هما الأفضل لتلخيص المستندات محليًا — كلاهما يدعم سياقًا 128K+ على Ollama، كافٍ لتلخيص مستندات طويلة في مرور واحد.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المستخدمون الذين يلخصون مستندات طويلة محليًا ويحتاجون نافذة سياق طويلة',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذجا Qwen3 14B وLlama 3.3 8B هما الأفضل لتلخيص المستندات محليًا</strong> — كلاهما يدعم سياق 128K+ على Ollama، طويل بما يكفي لتلخيص معظم المستندات في مرور واحد دون تقطيع. يصل Qwen3 14B إلى ما يصل إلى مليون رمز من السياق في تكوينه الممتد، مفيد للمستندات الطويلة استثنائيًا.',
    toc: [
      { label: 'أفضل اختيار: Llama 3.3 8B (أو Qwen3 14B للمستندات الطويلة جدًا)', anchor: '#best-pick' },
      { label: 'التلخيص بالسياق الكامل مقابل التقطيع', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل LLM محلي لتلخيص المستندات الطويلة؟',
        answer: 'نموذجا Qwen3 14B وLlama 3.3 8B هما الأفضل لتلخيص المستندات محليًا — كلاهما يدعم سياق 128K+ على Ollama، كافٍ لتلخيص مستندات طويلة دون تقطيع.',
        bullets: [
          'يدعم Llama 3.3 8B سياق 128K+ على Ollama — خيار أصغر وأسرع لتلخيص المستندات الطويلة.',
          'يدعم Qwen3 14B أيضًا سياق 128K+، ويصل إلى مليون رمز في تكوينه الممتد للحالات الاستثنائية.',
          'يستخدم السياق الكامل 128K ذاكرة VRAM أكبر بكثير من حجم النموذج الأساسي وحده — خطط للعتاد وفقًا لذلك.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار: Llama 3.3 8B — سياق 128K+ على Ollama، أصغر وأسرع لمعظم المستندات',
          'الأفضل للمستندات الطويلة جدًا: Qwen3 14B — نفس الأساس 128K، يمتد حتى مليون رمز',
          'السياق الكامل الطول يستخدم VRAM أكبر بكثير من أوزان النموذج وحدها — خطط للعتاد حول هذا',
          'التقطيع + نموذج تضمين يبقى النهج الصحيح للمستندات التي تتجاوز حتى مليون رمز',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Llama 3.3 8B (أو Qwen3 14B للمستندات الطويلة جدًا)',
        content: [
          '<strong>نموذج Llama 3.3 8B هو الأفضل لمعظم مهام تلخيص المستندات، حيث تغطي نافذة سياقه البالغة 128K+ على Ollama الغالبية العظمى من المستندات الواقعية في مرور واحد، دون تقسيم المستند إلى قِطع تخاطر بفقدان السياق عبر الأقسام.</strong> يحافظ حجمه الأصغر البالغ 8B أيضًا على متطلبات VRAM وسرعة الاستدلال معقولة مقارنة بالنماذج الأكبر.',
          'بالنسبة للمستندات الطويلة استثنائيًا التي تتجاوز حتى 128K رمز، يُعد Qwen3 14B الاختيار الأفضل — يشارك نفس الأساس البالغ 128K لكنه يمكن أن يمتد إلى مليون رمز في تكوينه الممتد، مغطيًا مستندات بطول كتاب لا يستوعبها سياق Llama 3.3 8B القياسي.',
          'ضع في اعتبارك أن تشغيل نموذج بكامل طول سياقه المُعلن يستخدم VRAM أكبر بكثير من أوزان النموذج الأساسية وحدها — يتناسب استخدام ذاكرة آلية الانتباه مع طول السياق، لذا فإن جلسة تلخيص بسياق 128K تحتاج هامش VRAM أكبر بكثير من حوار دردشة قصير بنفس النموذج.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'التلخيص بالسياق الكامل مقابل التقطيع',
        content: [
          'إدخال مستند كامل في نموذج طويل السياق في مرور واحد يتجنب فقدان السياق عبر القِطع الذي تعاني منه خطوط أنابيب التلخيص التقليدية القائمة على التقطيع، بتكلفة الحاجة إلى VRAM أكبر لنافذة السياق الأطول.',
          'بالنسبة للمستندات التي تتجاوز حتى سقف مليون رمز، أو عندما تكون VRAM محدودة بشدة، يبقى العودة إلى نهج التقطيع — تقسيم المستند، وتلخيص كل قِطعة، ثم تلخيص الملخصات — مقترنًا بنموذج تضمين لاسترجاع الأقسام ذات الصلة البديل العملي.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج VRAM إضافية لاستخدام السياق الكامل 128K؟',
            a: 'نعم — تشغيل نموذج قرب طول سياقه الأقصى يستخدم VRAM أكبر بكثير من التفاعلات القصيرة، حيث تتناسب ذاكرة تخزين الانتباه المؤقتة مع طول التسلسل. تحقق من VRAM المتوفر لديك مقابل متطلبات ذاكرة طول سياق النموذج قبل افتراض أن 128K "تعمل ببساطة".',
          },
          {
            q: 'هل يمكن لنموذج أصغر مثل Qwen3 4B التعامل مع تلخيص المستندات الطويلة؟',
            a: 'عمومًا تدعم النماذج الأصغر نوافذ سياق أصلية أقصر وتلخّص بتماسك أقل عبر مدخلات طويلة جدًا. لعمل المستندات الطويلة تحديدًا، فئة 8B-14B بسياق 128K هي الأنسب.',
          },
          {
            q: 'هل التقطيع أفضل أحيانًا من التلخيص بالسياق الكامل؟',
            a: 'نعم، عندما تكون VRAM محدودة أو تتجاوز المستندات سقف سياق النموذج. يساعد التقطيع أيضًا عندما تحتاج الإشارة إلى القسم الذي أتت منه نقطة تلخيص معينة، حيث يمكن أن يطمس التلخيص بالسياق الكامل حدود الأقسام.',
          },
          {
            q: 'هل يؤثر طول السياق على جودة التلخيص، وليس فقط السعة؟',
            a: 'يمكن أن تتسبب السياقات الطويلة جدًا أحيانًا في تقليل النموذج لوزن المعلومات من منتصف المستند (تأثير معروف عبر النماذج طويلة السياق عمومًا) — للمستندات الحرجة، تحقق من الملخص مقابل المصدر بدلًا من افتراض استرجاع مثالي عند أقصى طول سياق.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أي نماذج Ollama تدعم سياق 128K؟](/prompt-bites/ollama-128k-context-models) — القائمة الكاملة للنماذج طويلة السياق',
          '[أفضل نموذج تضمين لـ RAG محلي](/prompt-bites/best-embedding-model-local-rag) — نهج بديل قائم على التقطيع',
          '[كم VRAM تحتاجه لتشغيل LLM محليًا؟](/prompt-bites/how-much-vram-for-local-llm) — تحديد حجم العتاد لعمل السياق الطويل',
        ],
      },
    },
  },
  de: {
    theme: 'Quick Answers',
    title: 'Das beste lokale LLM für Dokumentenzusammenfassung?',
    seoTitle: 'Bestes lokales LLM für Dokumentenzusammenfassung 2026',
    metaDescription: 'Qwen3 14B und Llama 3.3 8B sind die besten lokalen LLMs für Dokumentenzusammenfassung, mit 128K+ Kontext auf Ollama für lange Dokumente in einem Durchgang.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Nutzer, die lange Dokumente lokal zusammenfassen und dafür ein langes Kontextfenster brauchen',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 14B und Llama 3.3 8B sind die besten lokalen LLMs für Dokumentenzusammenfassung</strong> — beide unterstützen 128K+ Kontext auf Ollama, lang genug, um die meisten Dokumente in einem einzigen Durchgang ohne Chunking zusammenzufassen. Qwen3 14B erreicht in seiner erweiterten Konfiguration bis zu 1 Mio. Token Kontext, nützlich für außergewöhnlich lange Dokumente.',
    toc: [
      { label: 'Beste Wahl: Llama 3.3 8B (oder Qwen3 14B für sehr lange Dokumente)', anchor: '#best-pick' },
      { label: 'Vollkontext-Zusammenfassung vs. Chunking', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste lokale LLM zum Zusammenfassen langer Dokumente?',
        answer: 'Qwen3 14B und Llama 3.3 8B sind die besten lokalen LLMs für Dokumentenzusammenfassung — beide unterstützen 128K+ Kontext auf Ollama, genug, um lange Dokumente ohne Chunking zusammenzufassen.',
        bullets: [
          'Llama 3.3 8B unterstützt 128K+ Kontext auf Ollama — eine kleinere, schnellere Option für Long-Document-Zusammenfassung.',
          'Qwen3 14B unterstützt ebenfalls 128K+ Kontext und erreicht in seiner erweiterten Konfiguration bis zu 1 Mio. Token für Ausnahmefälle.',
          'Voller 128K-Kontext nutzt deutlich mehr VRAM als die reine Modellgröße — kalkulieren Sie entsprechend.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: Llama 3.3 8B — 128K+ Kontext auf Ollama, kleiner und schneller für die meisten Dokumente',
          'Beste Wahl für sehr lange Dokumente: Qwen3 14B — gleiche 128K+-Basis, erweiterbar auf bis zu 1 Mio. Token',
          'Kontext in voller Länge nutzt weit mehr VRAM als die Modellgewichte allein — planen Sie die Hardware entsprechend',
          'Chunking + ein Embedding-Modell bleibt der richtige Ansatz für Dokumente jenseits selbst von 1 Mio. Token',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Llama 3.3 8B (oder Qwen3 14B für sehr lange Dokumente)',
        content: [
          '<strong>Llama 3.3 8B ist das beste lokale LLM für die meisten Dokumentenzusammenfassungsaufgaben, da sein 128K+-Kontextfenster auf Ollama die überwiegende Mehrheit realer Dokumente in einem einzigen Durchgang abdeckt, ohne das Dokument in Chunks zu zerlegen, was riskiert, abschnittsübergreifenden Kontext zu verlieren.</strong> Seine kleinere 8B-Größe hält zudem VRAM-Bedarf und Inferenzgeschwindigkeit im Vergleich zu größeren Modellen vernünftig.',
          'Für außergewöhnlich lange Dokumente, die selbst 128K Token überschreiten, ist Qwen3 14B die bessere Wahl — es teilt sich dieselbe 128K-Basis, kann aber in seiner erweiterten Konfiguration auf 1 Mio. Token ausgeweitet werden und deckt so buchlange Dokumente ab, die der Standardkontext von Llama 3.3 8B nicht bewältigt.',
          'Bedenken Sie, dass der Betrieb eines Modells mit seiner vollen beworbenen Kontextlänge deutlich mehr VRAM nutzt als die reinen Modellgewichte — der Speicherbedarf des Attention-Mechanismus skaliert mit der Kontextlänge, sodass eine 128K-Kontext-Zusammenfassungssitzung deutlich mehr VRAM-Reserve benötigt als ein kurzer Chat-Austausch mit demselben Modell.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Vollkontext-Zusammenfassung vs. Chunking',
        content: [
          'Ein komplettes Dokument in einem Durchgang in ein Long-Context-Modell einzuspeisen vermeidet den Kontextverlust über Chunk-Grenzen hinweg, unter dem traditionelle Chunk-und-Zusammenfassen-Pipelines leiden, auf Kosten von mehr benötigtem VRAM für das längere Kontextfenster.',
          'Für Dokumente jenseits selbst einer 1-Mio.-Token-Kontextobergrenze oder bei stark begrenztem VRAM bleibt der Rückgriff auf einen Chunking-Ansatz — Dokument aufteilen, jeden Chunk zusammenfassen, dann die Zusammenfassungen zusammenfassen — kombiniert mit einem Embedding-Modell zur Retrieval relevanter Abschnitte die praktische Alternative.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich zusätzlichen VRAM, um den vollen 128K-Kontext zu nutzen?',
            a: 'Ja — der Betrieb eines Modells nahe seiner maximalen Kontextlänge nutzt substanziell mehr VRAM als kurze Interaktionen, da der Attention-Cache mit der Sequenzlänge skaliert. Prüfen Sie Ihren verfügbaren VRAM gegen die Speicheranforderungen der Kontextlänge des Modells, bevor Sie annehmen, dass 128K „einfach funktioniert".',
          },
          {
            q: 'Kann ein kleineres Modell wie Qwen3 4B lange Dokumentenzusammenfassung bewältigen?',
            a: 'Kleinere Modelle unterstützen im Allgemeinen kürzere native Kontextfenster und fassen bei sehr langen Eingaben weniger kohärent zusammen. Für Long-Document-Arbeit speziell ist die 128K-Kontext-8B-14B-Stufe die bessere Wahl.',
          },
          {
            q: 'Ist Chunking manchmal besser als Vollkontext-Zusammenfassung?',
            a: 'Ja, wenn VRAM begrenzt ist oder Dokumente die Kontextobergrenze des Modells überschreiten. Chunking hilft auch, wenn Sie zitieren müssen, aus welchem Abschnitt ein bestimmter Zusammenfassungspunkt stammt, da Vollkontext-Zusammenfassung Abschnittsgrenzen verwischen kann.',
          },
          {
            q: 'Beeinflusst die Kontextlänge auch die Zusammenfassungsqualität, nicht nur die Kapazität?',
            a: 'Sehr lange Kontexte können manchmal dazu führen, dass ein Modell Informationen aus der Mitte des Dokuments unterbewertet (ein bekannter Effekt bei Long-Context-Modellen generell) — prüfen Sie bei kritischen Dokumenten die Zusammenfassung gegen die Quelle, statt perfekte Erinnerung bei maximalem Kontext anzunehmen.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Welche Ollama-Modelle unterstützen 128K-Kontext?](/prompt-bites/ollama-128k-context-models) — die vollständige Liste der Long-Context-Modelle',
          '[Bestes Embedding-Modell für lokales RAG](/prompt-bites/best-embedding-model-local-rag) — ein chunking-basierter alternativer Ansatz',
          '[Wie viel VRAM braucht man für ein lokales LLM?](/prompt-bites/how-much-vram-for-local-llm) — Hardware für Long-Context-Arbeit dimensionieren',
        ],
      },
    },
  },
  es: {
    theme: 'Quick Answers',
    title: '¿Cuál es el Mejor LLM Local para Resumir Documentos?',
    seoTitle: 'Mejor LLM Local para Resumen de Documentos 2026',
    metaDescription: 'Qwen3 14B y Llama 3.3 8B son los mejores LLM locales para resumir documentos, con 128K+ de contexto en Ollama para documentos largos en una pasada.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios que resumen documentos largos localmente y necesitan una ventana de contexto larga',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 14B y Llama 3.3 8B son los mejores LLM locales para resumir documentos</strong> — ambos soportan 128K+ de contexto en Ollama, lo suficientemente largo para resumir la mayoría de los documentos en una sola pasada sin fragmentar. Qwen3 14B alcanza hasta 1M de tokens de contexto en su configuración extendida, útil para documentos excepcionalmente largos.',
    toc: [
      { label: 'Mejor Opción: Llama 3.3 8B (o Qwen3 14B para Documentos Muy Largos)', anchor: '#best-pick' },
      { label: 'Resumen de Contexto Completo vs Fragmentación', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM local para resumir documentos largos?',
        answer: 'Qwen3 14B y Llama 3.3 8B son los mejores LLM locales para resumen de documentos — ambos soportan 128K+ de contexto en Ollama, suficiente para resumir documentos largos sin fragmentar.',
        bullets: [
          'Llama 3.3 8B soporta 128K+ de contexto en Ollama — una opción más pequeña y rápida para resumen de documentos largos.',
          'Qwen3 14B también soporta 128K+ de contexto, y alcanza hasta 1M de tokens en su configuración extendida para casos excepcionales.',
          'El contexto completo de 128K usa considerablemente más VRAM que solo el tamaño base del modelo — presupuesta en consecuencia.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: Llama 3.3 8B — 128K+ de contexto en Ollama, más pequeño y rápido para la mayoría de los documentos',
          'Mejor para documentos muy largos: Qwen3 14B — misma base de 128K+, se extiende hasta 1M de tokens',
          'El contexto de longitud completa usa muchísima más VRAM que solo los pesos del modelo — planifica el hardware en torno a esto',
          'Fragmentar + un modelo de embedding sigue siendo el enfoque correcto para documentos más allá de incluso 1M de tokens',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Llama 3.3 8B (o Qwen3 14B para Documentos Muy Largos)',
        content: [
          '<strong>Llama 3.3 8B es el mejor LLM local para la mayoría de las tareas de resumen de documentos, ya que su ventana de contexto de 128K+ en Ollama cubre la gran mayoría de los documentos del mundo real en una sola pasada, sin dividir el documento en fragmentos que arriesgan perder contexto entre secciones.</strong> Su menor tamaño de 8B también mantiene razonables los requisitos de VRAM y la velocidad de inferencia comparado con modelos más grandes.',
          'Para documentos excepcionalmente largos que superan incluso los 128K tokens, Qwen3 14B es la mejor elección — comparte la misma base de 128K pero puede extenderse hasta 1M de tokens en su configuración extendida, cubriendo documentos de longitud de libro que el contexto estándar de Llama 3.3 8B no puede.',
          'Ten en cuenta que ejecutar un modelo en su longitud de contexto completa anunciada usa considerablemente más VRAM que solo los pesos base del modelo — el uso de memoria del mecanismo de atención escala con la longitud del contexto, por lo que una sesión de resumen con 128K de contexto necesita mucho más margen de VRAM que un intercambio de chat corto con el mismo modelo.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Resumen de Contexto Completo vs Fragmentación',
        content: [
          'Alimentar un documento completo a un modelo de contexto largo en una sola pasada evita la pérdida de contexto entre fragmentos que sufren las canalizaciones tradicionales de fragmentar-y-resumir, a costa de necesitar más VRAM para la ventana de contexto más larga.',
          'Para documentos más allá incluso de un techo de contexto de 1M de tokens, o cuando la VRAM está muy limitada, recurrir a un enfoque de fragmentación — dividir el documento, resumir cada fragmento, luego resumir los resúmenes — combinado con un modelo de embedding para recuperar secciones relevantes sigue siendo la alternativa práctica.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Necesito VRAM extra para usar el contexto completo de 128K?',
            a: 'Sí — ejecutar un modelo cerca de su longitud de contexto máxima usa sustancialmente más VRAM que interacciones cortas, ya que la caché de atención escala con la longitud de la secuencia. Verifica tu VRAM disponible frente a los requisitos de memoria por longitud de contexto del modelo antes de asumir que 128K "simplemente funciona".',
          },
          {
            q: '¿Puede un modelo más pequeño como Qwen3 4B manejar el resumen de documentos largos?',
            a: 'Los modelos más pequeños generalmente soportan ventanas de contexto nativas más cortas y resumen de forma menos coherente en entradas muy largas. Para trabajo específico con documentos largos, el nivel de 128K de contexto de 8B-14B es la mejor opción.',
          },
          {
            q: '¿Es la fragmentación alguna vez mejor que el resumen de contexto completo?',
            a: 'Sí, cuando la VRAM es limitada o los documentos superan el techo de contexto del modelo. La fragmentación también ayuda cuando necesitas citar de qué sección proviene un punto específico del resumen, ya que el resumen de contexto completo puede difuminar los límites entre secciones.',
          },
          {
            q: '¿Afecta la longitud del contexto a la calidad del resumen, no solo a la capacidad?',
            a: 'Los contextos muy largos a veces pueden hacer que un modelo subestime la información del medio del documento (un efecto conocido en general en los modelos de contexto largo) — para documentos críticos, verifica el resumen contra la fuente en lugar de asumir un recuerdo perfecto en la longitud de contexto máxima.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Qué Modelos de Ollama Soportan 128K de Contexto?](/prompt-bites/ollama-128k-context-models) — la lista completa de modelos de contexto largo',
          '[Mejor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — un enfoque alternativo basado en fragmentación',
          '[¿Cuánta VRAM Necesitas para un LLM Local?](/prompt-bites/how-much-vram-for-local-llm) — dimensionando hardware para trabajo de contexto largo',
        ],
      },
    },
  },
  fr: {
    theme: 'Quick Answers',
    title: 'Quel est le meilleur LLM local pour la synthèse de documents ?',
    seoTitle: 'Meilleur LLM local pour la synthèse de documents 2026',
    metaDescription: 'Qwen3 14B et Llama 3.3 8B sont les meilleurs LLM locaux pour résumer des documents longs, avec 128K+ de contexte sur Ollama en une seule passe.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs qui résument de longs documents en local et ont besoin d\'une fenêtre de contexte étendue',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 14B et Llama 3.3 8B sont les meilleurs LLM locaux pour la synthèse de documents</strong> — tous deux prennent en charge un contexte de 128K+ sur Ollama, suffisant pour résumer la plupart des documents en une seule passe sans découpage. Qwen3 14B atteint jusqu\'à 1M tokens de contexte dans sa configuration étendue, utile pour des documents exceptionnellement longs.',
    toc: [
      { label: 'Meilleur choix : Llama 3.3 8B (ou Qwen3 14B pour les documents très longs)', anchor: '#best-pick' },
      { label: 'Synthèse en contexte complet vs découpage', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour résumer de longs documents ?',
        answer: 'Qwen3 14B et Llama 3.3 8B sont les meilleurs LLM locaux pour la synthèse de documents — tous deux prennent en charge un contexte de 128K+ sur Ollama, suffisant pour résumer de longs documents sans découpage.',
        bullets: [
          'Llama 3.3 8B prend en charge un contexte de 128K+ sur Ollama — une option plus légère et plus rapide pour la synthèse de longs documents.',
          'Qwen3 14B prend également en charge un contexte de 128K+, et atteint jusqu\'à 1M tokens dans sa configuration étendue pour les cas exceptionnels.',
          'Un contexte complet de 128K utilise nettement plus de VRAM que la seule taille du modèle de base — prévoyez votre budget en conséquence.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : Llama 3.3 8B — contexte de 128K+ sur Ollama, plus léger et plus rapide pour la plupart des documents',
          'Meilleur pour les documents très longs : Qwen3 14B — même base de 128K+, extensible jusqu\'à 1M tokens',
          'Un contexte de longueur complète utilise bien plus de VRAM que les seuls poids du modèle — planifiez le matériel en conséquence',
          'Le découpage associé à un modèle d\'embedding reste l\'approche adaptée pour les documents dépassant même 1M tokens',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Llama 3.3 8B (ou Qwen3 14B pour les documents très longs)',
        content: [
          '<strong>Llama 3.3 8B est le meilleur LLM local pour la plupart des tâches de synthèse de documents, car sa fenêtre de contexte de 128K+ sur Ollama couvre la grande majorité des documents réels en une seule passe, sans devoir découper le document en segments qui risquent de perdre le contexte entre les sections.</strong> Sa taille de 8B plus réduite maintient également des besoins en VRAM et une vitesse d\'inférence raisonnables par rapport à des modèles plus grands.',
          'Pour des documents exceptionnellement longs dépassant même 128K tokens, Qwen3 14B est le meilleur choix — il partage la même base de 128K, mais peut s\'étendre jusqu\'à 1M tokens dans sa configuration étendue, couvrant des documents de la longueur d\'un livre que le contexte standard de Llama 3.3 8B ne peut pas gérer.',
          'Gardez à l\'esprit qu\'exécuter un modèle à sa longueur de contexte maximale annoncée utilise nettement plus de VRAM que les seuls poids du modèle de base — l\'utilisation mémoire du mécanisme d\'attention augmente avec la longueur du contexte, donc une session de synthèse en contexte de 128K nécessite une marge de VRAM sensiblement plus importante qu\'un court échange de chat avec le même modèle.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Synthèse en contexte complet vs découpage',
        content: [
          'Fournir un document entier à un modèle à contexte long en une seule passe évite la perte de contexte entre segments dont souffrent les pipelines traditionnels de découpage puis synthèse, au prix d\'un besoin accru de VRAM pour la fenêtre de contexte plus longue.',
          'Pour des documents dépassant même un plafond de contexte de 1M tokens, ou lorsque la VRAM est fortement limitée, revenir à une approche par découpage — diviser le document, résumer chaque segment, puis résumer les résumés — associée à un modèle d\'embedding pour la recherche des sections pertinentes reste l\'alternative pratique.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Ai-je besoin de VRAM supplémentaire pour utiliser le contexte complet de 128K ?',
            a: 'Oui — exécuter un modèle proche de sa longueur de contexte maximale utilise nettement plus de VRAM que des interactions courtes, car le cache d\'attention augmente avec la longueur de la séquence. Vérifiez votre VRAM disponible par rapport aux besoins mémoire du modèle liés à la longueur de contexte avant de supposer que le 128K « fonctionne simplement ».',
          },
          {
            q: 'Un modèle plus petit comme Qwen3 4B peut-il gérer la synthèse de longs documents ?',
            a: 'Les modèles plus petits prennent généralement en charge des fenêtres de contexte natives plus courtes et résument de façon moins cohérente sur des entrées très longues. Pour un travail sur de longs documents spécifiquement, la catégorie 8B-14B avec contexte de 128K est mieux adaptée.',
          },
          {
            q: 'Le découpage est-il parfois préférable à la synthèse en contexte complet ?',
            a: 'Oui, lorsque la VRAM est limitée ou que les documents dépassent le plafond de contexte du modèle. Le découpage aide aussi lorsque vous devez citer la section d\'où provient un point précis du résumé, car la synthèse en contexte complet peut brouiller les limites des sections.',
          },
          {
            q: 'La longueur du contexte affecte-t-elle la qualité de la synthèse, pas seulement la capacité ?',
            a: 'Des contextes très longs peuvent parfois amener un modèle à sous-pondérer les informations situées au milieu du document (un effet connu chez les modèles à contexte long en général) — pour des documents critiques, vérifiez par sondage le résumé par rapport à la source plutôt que de supposer un rappel parfait à longueur de contexte maximale.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Quels modèles Ollama prennent en charge un contexte de 128K ?](/prompt-bites/ollama-128k-context-models) — la liste complète des modèles à contexte long',
          '[Meilleur modèle d\'embedding pour un RAG local](/prompt-bites/best-embedding-model-local-rag) — une approche alternative basée sur le découpage',
          '[De combien de VRAM avez-vous besoin pour un LLM local ?](/prompt-bites/how-much-vram-for-local-llm) — dimensionner le matériel pour du travail à contexte long',
        ],
      },
    },
  },
  ja: {
    theme: 'Quick Answers',
    title: '文書要約に最適なローカルLLMは?',
    seoTitle: '2026年版 文書要約に最適なローカルLLM',
    metaDescription: 'Qwen3 14BとLlama 3.3 8Bは文書要約に最適なローカルLLMです — どちらもOllamaで128K以上のコンテキストをサポートし、長い文書を1回のパスで要約できます。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '長いコンテキストウィンドウが必要な、ローカルで長文書を要約するユーザー',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 14BとLlama 3.3 8Bは文書要約に最適なローカルLLMです</strong> — どちらもOllamaで128K以上のコンテキストをサポートし、ほとんどの文書をチャンク分割なしで1回のパスで要約するのに十分な長さです。Qwen3 14Bは拡張構成で最大100万トークンのコンテキストに達し、特に長い文書に役立ちます。',
    toc: [
      { label: 'ベストピック: Llama 3.3 8B(非常に長い文書にはQwen3 14B)', anchor: '#best-pick' },
      { label: 'フルコンテキスト要約 vs チャンク分割', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: '長文書を要約するのに最適なローカルLLMは?',
        answer: 'Qwen3 14BとLlama 3.3 8Bは文書要約に最適なローカルLLMです — どちらもOllamaで128K以上のコンテキストをサポートし、チャンク分割なしで長い文書を要約できます。',
        bullets: [
          'Llama 3.3 8BはOllamaで128K以上のコンテキストをサポート — 長文書要約向けのより小さく高速な選択肢。',
          'Qwen3 14Bも128K以上のコンテキストをサポートし、拡張構成では例外的なケース向けに最大100万トークンに達します。',
          'フルの128Kコンテキストはベースモデルサイズだけよりも大幅に多くのVRAMを使用します — それに応じて予算を組んでください。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ベストピック: Llama 3.3 8B — Ollamaで128K以上のコンテキスト、ほとんどの文書で小さく高速',
          '非常に長い文書向けの最良選択: Qwen3 14B — 同じ128K以上のベースラインで最大100万トークンまで拡張',
          'フル長のコンテキストはモデルの重み単体よりはるかに多くのVRAMを使用する — これを踏まえてハードウェアを計画すること',
          '100万トークンを超える文書には、チャンク分割+埋め込みモデルが引き続き正しいアプローチ',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: Llama 3.3 8B(非常に長い文書にはQwen3 14B)',
        content: [
          '<strong>Llama 3.3 8Bは、ほとんどの文書要約タスクに最適なローカルLLMです。Ollamaでの128K以上のコンテキストウィンドウが、セクション間の文脈を失うリスクのあるチャンク分割をせずに、実世界の文書の大半を1回のパスでカバーするためです。</strong>その小さい8Bサイズは、より大きなモデルに比べVRAM要件と推論速度も妥当な範囲に保ちます。',
          '128Kトークンを超える例外的に長い文書には、Qwen3 14Bがより良い選択です — 同じ128Kのベースラインを共有しつつ、拡張構成で最大100万トークンまで拡張でき、Llama 3.3 8Bの標準コンテキストではカバーできない書籍サイズの文書もカバーします。',
          'モデルを広告されているフルのコンテキスト長で動かすと、ベースモデルの重み単体よりも大幅に多くのVRAMを使用することに注意してください。アテンションメカニズムのメモリ使用量はコンテキスト長に応じてスケールするため、128Kコンテキストの要約セッションは、同じモデルでの短いチャットのやり取りよりも大幅に多くのVRAM余裕が必要です。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'フルコンテキスト要約 vs チャンク分割',
        content: [
          '文書全体を1回のパスで長いコンテキストモデルに投入することで、従来のチャンク・要約パイプラインが抱えるチャンク間の文脈損失を回避できますが、その代償としてより長いコンテキストウィンドウのためにより多くのVRAMが必要になります。',
          '100万トークンのコンテキスト上限を超える文書、あるいはVRAMが厳しく制約されている場合は、チャンク分割アプローチ — 文書を分割し、各チャンクを要約し、その要約をさらに要約する — に、関連セクション検索用の埋め込みモデルを組み合わせるのが引き続き実用的な代替策です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'フルの128Kコンテキストを使うには追加のVRAMが必要ですか?',
            a: 'はい — モデルを最大コンテキスト長付近で動かすと、短いやり取りに比べ大幅に多くのVRAMを使用します。アテンションキャッシュがシーケンス長に応じてスケールするためです。128Kが「そのまま動く」と想定する前に、利用可能なVRAMとモデルのコンテキスト長メモリ要件を確認してください。',
          },
          {
            q: 'Qwen3 4Bのような小さいモデルでも長文書要約は扱えますか?',
            a: '小さいモデルは一般にネイティブのコンテキストウィンドウが短く、非常に長い入力に対する要約の一貫性も低くなります。長文書作業に関しては、128Kコンテキストの8B-14B層の方が適しています。',
          },
          {
            q: 'チャンク分割がフルコンテキスト要約より優れている場合はありますか?',
            a: 'はい、VRAMが限られている場合や文書がモデルのコンテキスト上限を超える場合です。チャンク分割は、特定の要約ポイントがどのセクションから来たかを引用する必要がある場合にも役立ちます。フルコンテキスト要約はセクション境界を曖昧にすることがあるためです。',
          },
          {
            q: 'コンテキスト長は容量だけでなく要約品質にも影響しますか?',
            a: '非常に長いコンテキストは、文書の中間部分の情報をモデルが過小評価する原因となることがあります(長文コンテキストモデル全般で見られる既知の効果です) — 重要な文書については、最大コンテキスト長での完璧な記憶を前提とせず、要約を元の文書と照らし合わせて確認してください。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[どのOllamaモデルが128Kコンテキストをサポートしていますか?](/prompt-bites/ollama-128k-context-models) — 長文コンテキストモデルの全リスト',
          '[ローカルRAGに最適な埋め込みモデル](/prompt-bites/best-embedding-model-local-rag) — チャンク分割ベースの代替アプローチ',
          '[ローカルLLMに必要なVRAM量は?](/prompt-bites/how-much-vram-for-local-llm) — 長文コンテキスト作業のハードウェアサイジング',
        ],
      },
    },
  },
  ko: {
    theme: 'Quick Answers',
    title: '문서 요약을 위한 최적의 로컬 LLM은?',
    seoTitle: '2026년 문서 요약 최적 로컬 LLM',
    metaDescription: 'Qwen3 14B와 Llama 3.3 8B는 문서 요약을 위한 최적의 로컬 LLM입니다 — 둘 다 Ollama에서 128K 이상 컨텍스트를 지원해 긴 문서를 한 번에 요약할 수 있습니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '긴 컨텍스트 윈도우가 필요한, 로컬에서 긴 문서를 요약하는 사용자',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 14B와 Llama 3.3 8B는 문서 요약을 위한 최적의 로컬 LLM입니다</strong> — 둘 다 Ollama에서 128K 이상의 컨텍스트를 지원하여 청크로 나누지 않고도 대부분의 문서를 한 번에 요약할 수 있습니다. Qwen3 14B는 확장 구성에서 최대 100만 토큰의 컨텍스트에 도달하며, 예외적으로 긴 문서에 유용합니다.',
    toc: [
      { label: '최적의 선택: Llama 3.3 8B(매우 긴 문서에는 Qwen3 14B)', anchor: '#best-pick' },
      { label: '전체 컨텍스트 요약 대 청크 분할', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '긴 문서 요약을 위한 최적의 로컬 LLM은 무엇입니까?',
        answer: 'Qwen3 14B와 Llama 3.3 8B는 문서 요약을 위한 최적의 로컬 LLM입니다 — 둘 다 Ollama에서 128K 이상 컨텍스트를 지원해 긴 문서를 청크 분할 없이 요약할 수 있습니다.',
        bullets: [
          'Llama 3.3 8B는 Ollama에서 128K 이상 컨텍스트를 지원합니다 — 긴 문서 요약을 위한 더 작고 빠른 옵션입니다.',
          'Qwen3 14B도 128K 이상 컨텍스트를 지원하며, 예외적인 경우를 위해 확장 구성에서 최대 100만 토큰까지 도달합니다.',
          '전체 128K 컨텍스트는 기본 모델 크기만보다 상당히 더 많은 VRAM을 사용합니다 — 이에 맞춰 예산을 책정하십시오.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적의 선택: Llama 3.3 8B — Ollama에서 128K 이상 컨텍스트, 대부분의 문서에 더 작고 빠릅니다',
          '매우 긴 문서에 최적: Qwen3 14B — 동일한 128K 기준선을 공유하며 최대 100만 토큰까지 확장됩니다',
          '전체 길이 컨텍스트는 모델 가중치만보다 훨씬 더 많은 VRAM을 사용합니다 — 이를 중심으로 하드웨어를 계획하십시오',
          '심지어 100만 토큰을 넘는 문서에는 청크 분할 + 임베딩 모델이 여전히 올바른 접근 방식입니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Llama 3.3 8B(매우 긴 문서에는 Qwen3 14B)',
        content: [
          '<strong>Llama 3.3 8B는 대부분의 문서 요약 작업에 최적의 로컬 LLM입니다. Ollama에서의 128K 이상 컨텍스트 윈도우가 대다수의 실제 문서를 한 번에 다루며, 섹션 간 맥락을 잃을 위험이 있는 청크로 문서를 나눌 필요가 없기 때문입니다.</strong> 더 작은 8B 크기 또한 더 큰 모델 대비 VRAM 요구량과 추론 속도를 합리적으로 유지합니다.',
          '128K 토큰마저 초과하는 예외적으로 긴 문서에는 Qwen3 14B가 더 나은 선택입니다 — 동일한 128K 기준선을 공유하지만 확장 구성에서 최대 100만 토큰까지 확장될 수 있어, Llama 3.3 8B의 표준 컨텍스트로는 다룰 수 없는 책 분량의 문서까지 다룹니다.',
          '모델을 광고된 전체 컨텍스트 길이로 실행하면 기본 모델 가중치만보다 훨씬 더 많은 VRAM을 사용한다는 점을 유념하십시오 — 어텐션 메커니즘의 메모리 사용량은 컨텍스트 길이에 비례해 확장되므로, 128K 컨텍스트 요약 세션은 동일한 모델의 짧은 채팅 교환보다 의미 있게 더 많은 VRAM 여유가 필요합니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '전체 컨텍스트 요약 대 청크 분할',
        content: [
          '전체 문서를 한 번에 긴 컨텍스트 모델에 입력하는 것은 전통적인 청크 후 요약 파이프라인이 겪는 교차 청크 맥락 손실을 피하지만, 더 긴 컨텍스트 윈도우를 위해 더 많은 VRAM이 필요합니다.',
          '100만 토큰 컨텍스트 한계마저 넘는 문서나 VRAM이 빠듯하게 제한된 경우에는, 문서를 분할하고 각 청크를 요약한 다음 요약들을 다시 요약하는 청크 분할 접근 방식을 관련 섹션 검색을 위한 임베딩 모델과 함께 사용하는 것이 여전히 실용적인 대안입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '전체 128K 컨텍스트를 사용하려면 추가 VRAM이 필요합니까?',
            a: '예 — 어텐션 캐시가 시퀀스 길이에 비례해 확장되므로, 모델을 최대 컨텍스트 길이 근처로 실행하면 짧은 상호작용보다 훨씬 더 많은 VRAM을 사용합니다. 128K가 "그냥 작동한다"고 가정하기 전에 사용 가능한 VRAM을 모델의 컨텍스트 길이별 메모리 요구량과 대조하여 확인하십시오.',
          },
          {
            q: 'Qwen3 4B 같은 더 작은 모델도 긴 문서 요약을 처리할 수 있습니까?',
            a: '더 작은 모델은 일반적으로 더 짧은 네이티브 컨텍스트 윈도우를 지원하며 매우 긴 입력에서는 덜 일관되게 요약합니다. 긴 문서 작업에 특화해서는 128K 컨텍스트를 갖춘 8B-14B 등급이 더 적합합니다.',
          },
          {
            q: '청크 분할이 전체 컨텍스트 요약보다 나은 경우가 있습니까?',
            a: '예, VRAM이 제한적이거나 문서가 모델의 컨텍스트 한계를 초과할 때입니다. 청크 분할은 또한 특정 섹션에서 요약 포인트가 나왔는지 인용해야 할 때도 도움이 됩니다. 전체 컨텍스트 요약은 섹션 경계를 흐릴 수 있기 때문입니다.',
          },
          {
            q: '컨텍스트 길이는 용량뿐 아니라 요약 품질에도 영향을 줍니까?',
            a: '매우 긴 컨텍스트는 때때로 모델이 문서 중간의 정보를 과소평가하게 만들 수 있습니다(일반적으로 긴 컨텍스트 모델 전반에서 알려진 효과입니다) — 중요한 문서라면 최대 컨텍스트에서 완벽한 기억을 가정하기보다 요약을 원본과 대조하여 확인하십시오.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[어떤 Ollama 모델이 128K 컨텍스트를 지원하는가?](/prompt-bites/ollama-128k-context-models) — 긴 컨텍스트 모델 전체 목록',
          '[로컬 RAG를 위한 최적의 임베딩 모델](/prompt-bites/best-embedding-model-local-rag) — 청크 분할 기반 대안 접근 방식',
          '[로컬 LLM에는 얼마나 많은 VRAM이 필요한가?](/prompt-bites/how-much-vram-for-local-llm) — 긴 컨텍스트 작업을 위한 하드웨어 산정',
        ],
      },
    },
  },
  pt: {
    theme: 'Quick Answers',
    title: 'Qual o Melhor LLM Local para Resumo de Documentos?',
    seoTitle: 'Melhor LLM Local para Resumo de Documentos 2026',
    metaDescription: 'O Qwen3 14B e Llama 3.3 8B são os melhores LLMs locais para resumo de documentos, com 128K+ de contexto no Ollama para documentos longos em uma passagem.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuários resumindo documentos longos localmente que precisam de uma janela de contexto longa',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O Qwen3 14B e o Llama 3.3 8B são os melhores LLMs locais para resumo de documentos</strong> — ambos suportam contexto de 128K+ no Ollama, longo o suficiente para resumir a maioria dos documentos em uma única passagem sem fragmentação. O Qwen3 14B chega a até 1M de tokens de contexto em sua configuração estendida, útil para documentos excepcionalmente longos.',
    toc: [
      { label: 'Melhor Escolha: Llama 3.3 8B (ou Qwen3 14B para Documentos Muito Longos)', anchor: '#best-pick' },
      { label: 'Resumo de Contexto Completo vs Fragmentação', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM local para resumir documentos longos?',
        answer: 'O Qwen3 14B e o Llama 3.3 8B são os melhores LLMs locais para resumo de documentos — ambos suportam contexto de 128K+ no Ollama, suficiente para resumir documentos longos sem fragmentação.',
        bullets: [
          'O Llama 3.3 8B suporta contexto de 128K+ no Ollama — uma opção menor e mais rápida para resumo de documentos longos.',
          'O Qwen3 14B também suporta contexto de 128K+, e chega a até 1M de tokens em sua configuração estendida para casos excepcionais.',
          'O contexto completo de 128K usa significativamente mais VRAM do que apenas o tamanho base do modelo — planeje-se de acordo.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: Llama 3.3 8B — contexto de 128K+ no Ollama, menor e mais rápido para a maioria dos documentos',
          'Melhor para documentos muito longos: Qwen3 14B — mesma base de 128K+, estende até 1M de tokens',
          'O contexto de comprimento completo usa muito mais VRAM do que apenas os pesos do modelo — planeje o hardware em torno disso',
          'Fragmentação + um modelo de embedding continua sendo a abordagem certa para documentos além até de 1M de tokens',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Llama 3.3 8B (ou Qwen3 14B para Documentos Muito Longos)',
        content: [
          '<strong>O Llama 3.3 8B é o melhor LLM local para a maioria das tarefas de resumo de documentos, já que sua janela de contexto de 128K+ no Ollama cobre a grande maioria dos documentos do mundo real em uma única passagem, sem dividir o documento em fragmentos que arriscam perder contexto entre seções.</strong> Seu tamanho menor de 8B também mantém os requisitos de VRAM e a velocidade de inferência razoáveis em comparação com modelos maiores.',
          'Para documentos excepcionalmente longos que excedem até os 128K tokens, o Qwen3 14B é a melhor escolha — ele compartilha a mesma base de 128K, mas pode se estender até 1M de tokens em sua configuração estendida, cobrindo documentos do tamanho de livros que o contexto padrão do Llama 3.3 8B não comporta.',
          'Tenha em mente que rodar um modelo em seu comprimento de contexto máximo anunciado usa significativamente mais VRAM do que apenas os pesos do modelo base — o uso de memória do mecanismo de atenção escala com o comprimento do contexto, então uma sessão de resumo com contexto de 128K precisa de significativamente mais folga de VRAM do que uma troca curta de chat com o mesmo modelo.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Resumo de Contexto Completo vs Fragmentação',
        content: [
          'Alimentar um documento inteiro em um modelo de contexto longo de uma vez evita a perda de contexto entre fragmentos que pipelines tradicionais de fragmentar-e-resumir sofrem, ao custo de precisar de mais VRAM para a janela de contexto mais longa.',
          'Para documentos além de até um teto de contexto de 1M de tokens, ou quando a VRAM é estritamente limitada, voltar a uma abordagem de fragmentação — dividir o documento, resumir cada fragmento, depois resumir os resumos — combinada com um modelo de embedding para recuperação de seções relevantes continua sendo a alternativa prática.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Preciso de VRAM extra para usar o contexto completo de 128K?',
            a: 'Sim — rodar um modelo perto do seu comprimento máximo de contexto usa substancialmente mais VRAM do que interações curtas, já que o cache de atenção escala com o comprimento da sequência. Verifique sua VRAM disponível contra os requisitos de memória de comprimento de contexto do modelo antes de assumir que 128K "simplesmente funciona".',
          },
          {
            q: 'Um modelo menor como o Qwen3 4B consegue lidar com resumo de documentos longos?',
            a: 'Modelos menores geralmente suportam janelas de contexto nativas mais curtas e resumem de forma menos coerente em entradas muito longas. Para trabalho específico com documentos longos, a faixa de 8B-14B com contexto de 128K é a escolha melhor.',
          },
          {
            q: 'A fragmentação alguma vez é melhor que o resumo com contexto completo?',
            a: 'Sim, quando a VRAM é limitada ou os documentos excedem o teto de contexto do modelo. A fragmentação também ajuda quando você precisa citar de qual seção veio um ponto específico do resumo, já que o resumo com contexto completo pode borrar os limites entre seções.',
          },
          {
            q: 'O comprimento do contexto afeta a qualidade do resumo, não apenas a capacidade?',
            a: 'Contextos muito longos às vezes podem fazer um modelo subvalorizar informações do meio do documento (um efeito conhecido em modelos de contexto longo em geral) — para documentos críticos, verifique o resumo em relação à fonte em vez de assumir recall perfeito no comprimento máximo de contexto.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Quais Modelos do Ollama Suportam Contexto de 128K?](/prompt-bites/ollama-128k-context-models) — a lista completa de modelos de contexto longo',
          '[Melhor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — uma abordagem alternativa baseada em fragmentação',
          '[Quanta VRAM Você Precisa para um LLM Local?](/prompt-bites/how-much-vram-for-local-llm) — dimensionando hardware para trabalho de contexto longo',
        ],
      },
    },
  },
  zh: {
    theme: 'Quick Answers',
    title: '文档摘要的最佳本地 LLM 是什么？',
    seoTitle: '2026 年文档摘要最佳本地 LLM',
    metaDescription: 'Qwen3 14B 和 Llama 3.3 8B 是文档摘要的最佳本地 LLM——两者在 Ollama 上都支持 128K+ 上下文，足以一次性摘要长文档。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Qwen3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '需要长上下文窗口在本地摘要长文档的用户',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen3 14B 和 Llama 3.3 8B 是文档摘要的最佳本地 LLM</strong>——两者在 Ollama 上都支持 128K+ 上下文，足以一次性摘要大多数文档而无需分块。Qwen3 14B 在扩展配置下上下文可达 100 万 token，对超长文档很有用。',
    toc: [
      { label: '最佳选择：Llama 3.3 8B（超长文档选 Qwen3 14B）', anchor: '#best-pick' },
      { label: '全上下文摘要对比分块', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '摘要长文档的最佳本地 LLM 是什么？',
        answer: 'Qwen3 14B 和 Llama 3.3 8B 是文档摘要的最佳本地 LLM——两者在 Ollama 上都支持 128K+ 上下文，足以在不分块的情况下摘要长文档。',
        bullets: [
          'Llama 3.3 8B 在 Ollama 上支持 128K+ 上下文——是长文档摘要中更小、更快的选择。',
          'Qwen3 14B 同样支持 128K+ 上下文，在扩展配置下对特殊情况可达 100 万 token。',
          '完整 128K 上下文所需的显存远超模型规模本身——请据此规划预算。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择：Llama 3.3 8B——Ollama 上支持 128K+ 上下文，对大多数文档来说更小更快',
          '超长文档最佳选择：Qwen3 14B——同样以 128K 为基线，可扩展到 100 万 token',
          '完整长度上下文所需显存远超模型权重本身——应据此规划硬件',
          '对于超过 100 万 token 的文档，分块加嵌入模型仍是正确的方法',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Llama 3.3 8B（超长文档选 Qwen3 14B）',
        content: [
          '<strong>Llama 3.3 8B 是大多数文档摘要任务的最佳本地 LLM，因为它在 Ollama 上支持 128K+ 上下文窗口，能一次性覆盖绝大多数现实文档，无需将文档拆分成有可能丢失跨段落上下文的分块。</strong>它较小的 8B 规模也让显存需求和推理速度相比更大的模型保持合理。',
          '对于超出甚至 128K token 的特别长的文档，Qwen3 14B 是更好的选择——它共享相同的 128K 基线，但在扩展配置下可延伸到 100 万 token，能覆盖 Llama 3.3 8B 标准上下文无法处理的书籍级文档。',
          '请记住，让模型以其完整宣传上下文长度运行,所需的显存远超基础模型权重本身——注意力机制的内存使用随上下文长度扩展，因此 128K 上下文的摘要任务所需的显存余量,远大于同一模型的短聊天交互。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '全上下文摘要对比分块',
        content: [
          '一次性将整份文档喂给长上下文模型，避免了传统分块-摘要流程中出现的跨块上下文丢失问题，代价是需要为更长的上下文窗口配备更多显存。',
          '对于超出甚至 100 万 token 上下文上限的文档，或显存紧张的情况，回退到分块方法——拆分文档、逐块摘要、再对摘要进行摘要——并搭配用于相关段落检索的嵌入模型，仍是切实可行的替代方案。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '使用完整的 128K 上下文需要额外的显存吗？',
            a: '需要——让模型在接近最大上下文长度运行,所需的显存远超短交互，因为注意力缓存随序列长度扩展。在假设 128K「直接可用」之前，请检查你可用的显存是否满足该模型上下文长度的内存需求。',
          },
          {
            q: '像 Qwen3 4B 这样的小模型能处理长文档摘要吗？',
            a: '更小的模型通常支持更短的原生上下文窗口，在处理超长输入时摘要的连贯性也较差。对于长文档工作，128K 上下文的 8B-14B 档位是更好的选择。',
          },
          {
            q: '分块有时会比全上下文摘要更好吗？',
            a: '会，在显存有限或文档超出模型上下文上限时。当你需要引用某个摘要要点具体来自哪个段落时，分块也很有帮助，因为全上下文摘要可能会模糊段落边界。',
          },
          {
            q: '上下文长度会影响摘要质量而不仅仅是容量吗？',
            a: '非常长的上下文有时会导致模型对文档中间部分的信息权重不足（这是长上下文模型普遍存在的一种已知现象）——对于关键文档，应将摘要与原文核对，而不要假设在最大上下文长度下能完美记住全部内容。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[哪些 Ollama 模型支持 128K 上下文？](/prompt-bites/ollama-128k-context-models) — 长上下文模型完整列表',
          '[本地 RAG 的最佳嵌入模型](/prompt-bites/best-embedding-model-local-rag) — 基于分块的替代方法',
          '[本地 LLM 需要多少显存？](/prompt-bites/how-much-vram-for-local-llm) — 为长上下文工作规划硬件规模',
        ],
      },
    },
  },
}
