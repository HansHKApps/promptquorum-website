import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Which Local LLM Models Support Korean Best?',
    seoTitle: 'Best Local LLM Models for Korean 2026 | Prompt Bites',
    metaDescription: 'EXAONE 3.5 (LG AI Research) is the best local LLM for Korean — purpose-built with strong bilingual Korean-English training. Qwen3 is the best multilingual alternative.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers building Korean-language applications on local, self-hosted models',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 3.5, released by LG AI Research, is the best local LLM for Korean</strong> — it was purpose-built with strong bilingual Korean-English training data and is available in multiple open-weight sizes. Qwen3 is the best general multilingual alternative if you also need strong performance across many other languages simultaneously.',
    toc: [
      { label: 'Best Pick: EXAONE 3.5', anchor: '#best-pick' },
      { label: 'EXAONE 3.5 vs Qwen3 for Korean', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Which local LLM models support Korean best?',
        answer: 'EXAONE 3.5 from LG AI Research is the best local LLM for Korean, purpose-built with strong bilingual Korean-English training. Qwen3 is the best broadly multilingual alternative.',
        bullets: [
          'EXAONE 3.5 (LG AI Research): available in multiple sizes, purpose-built for strong Korean and English performance.',
          'Qwen3: not Korean-specific, but strong broad multilingual coverage if you need many languages, not just Korean.',
          'Check EXAONE\'s specific license terms before commercial use — some open-weight Korean models carry usage restrictions.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: EXAONE 3.5 (LG AI Research) — purpose-built bilingual Korean-English training, multiple open-weight sizes',
          'Best multilingual alternative: Qwen3 — not Korean-specific, but strong if you need broad language coverage too',
          'Check EXAONE\'s license terms before commercial deployment — some Korean-focused open models carry usage restrictions',
          'Run either through Ollama or a compatible GGUF-conversion pipeline once you confirm license terms fit your use case',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: EXAONE 3.5',
        content: [
          '<strong>EXAONE 3.5, released by LG AI Research, is the best local LLM for Korean because it was purpose-built with substantial bilingual Korean-English training data, rather than treating Korean as one of many secondary languages in a broadly multilingual training mix.</strong> It is available in multiple open-weight parameter sizes, letting you match model size to your hardware the same way you would with any other model family.',
          'If your application needs strong performance across many languages simultaneously — not just Korean and English — Qwen3 is the better general-purpose alternative. Its training data spans a wide range of languages with generally solid results, though it is not specifically optimized for Korean the way EXAONE 3.5 is.',
          'Before deploying either model commercially, check its exact license terms. Some Korean-focused open-weight models carry usage restrictions (research-only clauses, revenue thresholds, or attribution requirements) that differ from more permissive licenses like Apache 2.0 — verify the specific license text for the model version and size you plan to use.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'EXAONE 3.5 vs Qwen3 for Korean',
        content: [
          'EXAONE 3.5\'s Korean-English bilingual focus generally gives it an edge on Korean-specific nuance, idioms, and formality register compared to broadly multilingual models. Qwen3\'s advantage is breadth — if your product serves users across many languages, standardizing on one broadly multilingual model simplifies your deployment versus running separate specialized models per language.',
          'For a Korean-only or Korean-primary product, EXAONE 3.5 is the more targeted choice. For a genuinely multilingual product where Korean is one of several supported languages, Qwen3 avoids the operational complexity of juggling multiple specialized models.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is EXAONE 3.5 free to use commercially?',
            a: 'License terms vary by model version and have historically included some usage restrictions on certain EXAONE releases — always check the specific license attached to the exact model size and version you plan to deploy before commercial use.',
          },
          {
            q: 'Can I run EXAONE 3.5 through Ollama?',
            a: 'Community GGUF conversions of EXAONE models are generally available for use with llama.cpp-based tools like Ollama, though official first-party Ollama library support can lag behind a model\'s initial release — check the Ollama model library for current availability.',
          },
          {
            q: 'How does Qwen3\'s Korean performance compare to GPT-class proprietary models?',
            a: 'Qwen3\'s multilingual training gives it solid general Korean capability, though highly specialized or purpose-built models (like EXAONE 3.5 for Korean specifically) often edge it out on nuanced, Korean-specific tasks.',
          },
          {
            q: 'Are there other Korean-focused open models worth considering?',
            a: 'Yes — the open-source Korean NLP community has produced other Korean-tuned models over the years (some based on earlier GPT-NeoX-style architectures). Availability and maintenance status vary, so verify a candidate model is still actively maintained before building on it.',
          },
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
    title: 'أي نماذج LLM محلية تدعم الكورية بشكل أفضل؟',
    seoTitle: 'أفضل نماذج LLM محلية للكورية 2026 | Prompt Bites',
    metaDescription: 'نموذج EXAONE 3.5 (LG AI Research) هو الأفضل محليًا للكورية — مبني خصيصًا بتدريب ثنائي اللغة كورية-إنجليزية قوي. Qwen3 هو أفضل بديل متعدد اللغات.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يبنون تطبيقات باللغة الكورية على نماذج محلية مستضافة ذاتيًا',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذج EXAONE 3.5، الصادر عن LG AI Research، هو أفضل LLM محلي للكورية</strong> — بُني خصيصًا ببيانات تدريب ثنائية اللغة كورية-إنجليزية قوية، ومتوفر بعدة أحجام أوزان مفتوحة. Qwen3 هو أفضل بديل عام متعدد اللغات إذا احتجت أيضًا أداءً قويًا عبر لغات أخرى كثيرة في آنٍ واحد.',
    toc: [
      { label: 'أفضل اختيار: EXAONE 3.5', anchor: '#best-pick' },
      { label: 'EXAONE 3.5 مقابل Qwen3 للكورية', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'أي نماذج LLM محلية تدعم الكورية بشكل أفضل؟',
        answer: 'نموذج EXAONE 3.5 من LG AI Research هو أفضل LLM محلي للكورية، مبني خصيصًا بتدريب ثنائي اللغة كورية-إنجليزية قوي. Qwen3 هو أفضل بديل متعدد اللغات على نطاق واسع.',
        bullets: [
          'EXAONE 3.5 (LG AI Research): متوفر بعدة أحجام، مبني خصيصًا لأداء قوي بالكورية والإنجليزية.',
          'Qwen3: غير مخصص للكورية تحديدًا، لكنه يوفر تغطية متعددة اللغات واسعة قوية إذا احتجت لغات كثيرة، وليس الكورية فقط.',
          'تحقق من شروط ترخيص EXAONE تحديدًا قبل الاستخدام التجاري — بعض نماذج الكورية المفتوحة الأوزان تحمل قيود استخدام.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار: EXAONE 3.5 (LG AI Research) — تدريب ثنائي اللغة كورية-إنجليزية مبني خصيصًا، عدة أحجام أوزان مفتوحة',
          'أفضل بديل متعدد اللغات: Qwen3 — غير مخصص للكورية تحديدًا، لكنه قوي إذا احتجت تغطية لغوية واسعة أيضًا',
          'تحقق من شروط ترخيص EXAONE قبل النشر التجاري — بعض النماذج المفتوحة المخصصة للكورية تحمل قيود استخدام',
          'شغّل أيًا منهما عبر Ollama أو خط أنابيب تحويل GGUF متوافق بمجرد تأكيد أن شروط الترخيص تناسب حالة استخدامك',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: EXAONE 3.5',
        content: [
          '<strong>نموذج EXAONE 3.5، الصادر عن LG AI Research، هو أفضل LLM محلي للكورية لأنه بُني خصيصًا ببيانات تدريب ثنائية اللغة كورية-إنجليزية كبيرة، بدلًا من معاملة الكورية كواحدة من عدة لغات ثانوية في مزيج تدريب متعدد اللغات واسع.</strong> إنه متوفر بعدة أحجام معاملات مفتوحة الأوزان، ما يتيح لك مطابقة حجم النموذج مع عتادك بنفس الطريقة التي تفعلها مع أي عائلة نماذج أخرى.',
          'إذا احتاج تطبيقك أداءً قويًا عبر لغات كثيرة في آنٍ واحد — وليس فقط الكورية والإنجليزية — فإن Qwen3 هو البديل العام الأفضل. تمتد بيانات تدريبه عبر نطاق واسع من اللغات بنتائج قوية عمومًا، رغم أنه غير مُحسَّن تحديدًا للكورية بالطريقة التي عليها EXAONE 3.5.',
          'قبل نشر أي من النموذجين تجاريًا، تحقق من شروط ترخيصه الدقيقة. تحمل بعض النماذج المفتوحة الأوزان المخصصة للكورية قيود استخدام (بنود مخصصة للبحث فقط، عتبات إيرادات، أو متطلبات إسناد) تختلف عن التراخيص الأكثر تساهلًا مثل Apache 2.0 — تحقق من نص الترخيص المحدد لإصدار وحجم النموذج الذي تخطط لاستخدامه.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'EXAONE 3.5 مقابل Qwen3 للكورية',
        content: [
          'يمنح تركيز EXAONE 3.5 الثنائي اللغة كورية-إنجليزية عمومًا ميزة على الفروق الدقيقة الخاصة بالكورية والتعابير الاصطلاحية وسجل الرسمية مقارنة بالنماذج متعددة اللغات على نطاق واسع. ميزة Qwen3 هي الاتساع — إذا كان منتجك يخدم مستخدمين عبر لغات كثيرة، فإن التوحيد على نموذج واحد واسع النطاق متعدد اللغات يبسّط نشرك مقارنة بتشغيل نماذج متخصصة منفصلة لكل لغة.',
          'لمنتج مخصص للكورية فقط أو أساسًا للكورية، يُعد EXAONE 3.5 الاختيار الأكثر استهدافًا. لمنتج متعدد اللغات فعليًا حيث تكون الكورية واحدة من عدة لغات مدعومة، يتجنب Qwen3 التعقيد التشغيلي للتنقل بين نماذج متخصصة متعددة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل EXAONE 3.5 مجاني للاستخدام التجاري؟',
            a: 'تختلف شروط الترخيص حسب إصدار النموذج، وقد تضمنت تاريخيًا بعض قيود الاستخدام في إصدارات معينة من EXAONE — تحقق دائمًا من الترخيص المحدد المرفق بالحجم والإصدار الدقيقين للنموذج الذي تخطط لنشره قبل الاستخدام التجاري.',
          },
          {
            q: 'هل يمكنني تشغيل EXAONE 3.5 عبر Ollama؟',
            a: 'تتوفر عمومًا تحويلات GGUF من المجتمع لنماذج EXAONE للاستخدام مع أدوات معتمدة على llama.cpp مثل Ollama، رغم أن دعم مكتبة Ollama الرسمي من الطرف الأول قد يتأخر عن الإصدار الأولي للنموذج — تحقق من مكتبة نماذج Ollama لمعرفة التوفر الحالي.',
          },
          {
            q: 'كيف يقارَن أداء Qwen3 بالكورية بالنماذج الملكية من فئة GPT؟',
            a: 'يمنح التدريب متعدد اللغات لـ Qwen3 قدرة عامة جيدة بالكورية، رغم أن النماذج المتخصصة أو المبنية خصيصًا (مثل EXAONE 3.5 للكورية تحديدًا) غالبًا ما تتفوق عليه في المهام الدقيقة الخاصة بالكورية.',
          },
          {
            q: 'هل هناك نماذج أخرى مخصصة للكورية تستحق النظر؟',
            a: 'نعم — أنتج مجتمع معالجة اللغة الطبيعية الكوري المفتوح المصدر نماذج أخرى مضبوطة للكورية على مر السنين (بعضها مبني على بنى من نوع GPT-NeoX المبكرة). يتفاوت التوفر وحالة الصيانة، لذا تحقق من أن النموذج المرشح لا يزال يُصان بنشاط قبل البناء عليه.',
          },
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
    title: 'Welche lokalen LLM-Modelle unterstützen Koreanisch am besten?',
    seoTitle: 'Beste lokale LLM-Modelle für Koreanisch 2026 | Prompt Bites',
    metaDescription: 'EXAONE 3.5 (LG AI Research) ist das beste lokale LLM für Koreanisch — speziell mit starkem zweisprachigem Koreanisch-Englisch-Training gebaut. Qwen3 ist die beste mehrsprachige Alternative.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die koreanischsprachige Anwendungen auf lokalen, selbst gehosteten Modellen bauen',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 3.5, veröffentlicht von LG AI Research, ist das beste lokale LLM für Koreanisch</strong> — es wurde speziell mit starken zweisprachigen Koreanisch-Englisch-Trainingsdaten gebaut und ist in mehreren offenen Gewichtsgrößen verfügbar. Qwen3 ist die beste allgemeine mehrsprachige Alternative, wenn Sie zugleich starke Leistung über viele andere Sprachen brauchen.',
    toc: [
      { label: 'Beste Wahl: EXAONE 3.5', anchor: '#best-pick' },
      { label: 'EXAONE 3.5 vs. Qwen3 für Koreanisch', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Welche lokalen LLM-Modelle unterstützen Koreanisch am besten?',
        answer: 'EXAONE 3.5 von LG AI Research ist das beste lokale LLM für Koreanisch, speziell mit starkem zweisprachigem Koreanisch-Englisch-Training gebaut. Qwen3 ist die beste breit mehrsprachige Alternative.',
        bullets: [
          'EXAONE 3.5 (LG AI Research): in mehreren Größen verfügbar, speziell für starke Koreanisch- und Englischleistung gebaut.',
          'Qwen3: nicht Koreanisch-spezifisch, aber starke breite mehrsprachige Abdeckung, wenn Sie viele Sprachen brauchen, nicht nur Koreanisch.',
          'Prüfen Sie die genauen Lizenzbedingungen von EXAONE vor kommerzieller Nutzung — manche offenen koreanischen Modelle tragen Nutzungsbeschränkungen.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: EXAONE 3.5 (LG AI Research) — speziell für zweisprachiges Koreanisch-Englisch-Training gebaut, mehrere offene Gewichtsgrößen',
          'Beste mehrsprachige Alternative: Qwen3 — nicht Koreanisch-spezifisch, aber stark, wenn Sie auch breite Sprachabdeckung brauchen',
          'Prüfen Sie die Lizenzbedingungen von EXAONE vor kommerziellem Einsatz — manche koreanisch-fokussierten offenen Modelle tragen Nutzungsbeschränkungen',
          'Betreiben Sie beide über Ollama oder eine kompatible GGUF-Konvertierungs-Pipeline, sobald Sie die Lizenzbedingungen für Ihren Anwendungsfall bestätigt haben',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: EXAONE 3.5',
        content: [
          '<strong>EXAONE 3.5, veröffentlicht von LG AI Research, ist das beste lokale LLM für Koreanisch, weil es speziell mit umfangreichen zweisprachigen Koreanisch-Englisch-Trainingsdaten gebaut wurde, statt Koreanisch als eine von vielen Nebensprachen in einem breit mehrsprachigen Trainingsmix zu behandeln.</strong> Es ist in mehreren offenen Gewichtsgrößen verfügbar, wodurch Sie die Modellgröße genauso an Ihre Hardware anpassen können wie bei jeder anderen Modellfamilie.',
          'Braucht Ihre Anwendung starke Leistung über viele Sprachen gleichzeitig — nicht nur Koreanisch und Englisch —, ist Qwen3 die bessere allgemeine Alternative. Seine Trainingsdaten spannen ein breites Spektrum an Sprachen mit im Allgemeinen soliden Ergebnissen, ist aber nicht speziell auf Koreanisch optimiert wie EXAONE 3.5.',
          'Bevor Sie eines der beiden Modelle kommerziell einsetzen, prüfen Sie dessen genaue Lizenzbedingungen. Manche koreanisch-fokussierten offenen Modelle tragen Nutzungsbeschränkungen (Nur-Forschung-Klauseln, Umsatzschwellen oder Attributionsanforderungen), die sich von freizügigeren Lizenzen wie Apache 2.0 unterscheiden — prüfen Sie den genauen Lizenztext für die Modellversion und -größe, die Sie einsetzen möchten.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'EXAONE 3.5 vs. Qwen3 für Koreanisch',
        content: [
          'Der zweisprachige Koreanisch-Englisch-Fokus von EXAONE 3.5 verschafft ihm im Allgemeinen einen Vorteil bei koreanisch-spezifischen Nuancen, Redewendungen und Höflichkeitsregistern gegenüber breit mehrsprachigen Modellen. Der Vorteil von Qwen3 ist Breite — bedient Ihr Produkt Nutzer über viele Sprachen hinweg, vereinfacht die Standardisierung auf ein breit mehrsprachiges Modell Ihr Deployment gegenüber dem Betrieb separater spezialisierter Modelle pro Sprache.',
          'Für ein reines oder primär koreanisches Produkt ist EXAONE 3.5 die gezieltere Wahl. Für ein wirklich mehrsprachiges Produkt, bei dem Koreanisch eine von mehreren unterstützten Sprachen ist, vermeidet Qwen3 die operative Komplexität, mehrere spezialisierte Modelle zu jonglieren.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist EXAONE 3.5 kommerziell frei nutzbar?',
            a: 'Die Lizenzbedingungen variieren je nach Modellversion und enthielten historisch bei manchen EXAONE-Veröffentlichungen Nutzungsbeschränkungen — prüfen Sie stets die genaue Lizenz der exakten Modellgröße und -version, die Sie kommerziell einsetzen möchten.',
          },
          {
            q: 'Kann ich EXAONE 3.5 über Ollama betreiben?',
            a: 'Community-GGUF-Konvertierungen von EXAONE-Modellen sind im Allgemeinen für die Nutzung mit llama.cpp-basierten Tools wie Ollama verfügbar, wobei offizieller Erstanbieter-Ollama-Bibliothekssupport hinter der Erstveröffentlichung eines Modells zurückbleiben kann — prüfen Sie die Ollama-Modellbibliothek auf aktuelle Verfügbarkeit.',
          },
          {
            q: 'Wie schneidet Qwen3s Koreanisch-Leistung im Vergleich zu proprietären GPT-Klasse-Modellen ab?',
            a: 'Qwen3s mehrsprachiges Training verschafft ihm solide allgemeine Koreanisch-Fähigkeiten, obgleich hochspezialisierte oder speziell gebaute Modelle (wie EXAONE 3.5 für Koreanisch speziell) es bei nuancierten, koreanisch-spezifischen Aufgaben oft übertreffen.',
          },
          {
            q: 'Gibt es weitere koreanisch-fokussierte offene Modelle, die man in Betracht ziehen sollte?',
            a: 'Ja — die koreanische Open-Source-NLP-Community hat über die Jahre weitere koreanisch-abgestimmte Modelle hervorgebracht (manche basierend auf früheren GPT-NeoX-artigen Architekturen). Verfügbarkeit und Wartungsstatus variieren, prüfen Sie also, ob ein Kandidatenmodell noch aktiv gepflegt wird, bevor Sie darauf aufbauen.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Welche lokalen LLM-Modelle unterstützen Japanisch am besten?](/prompt-bites/best-japanese-language-models-local) — der äquivalente Guide für Japanisch',
          '[Bestes 14B-Modell für Coding?](/prompt-bites/best-14b-models-coding) — ein allgemeiner Modellstufenvergleich',
          '[Chinesisch vs. Englisch Prompting: Was ist besser?](/prompt-bites/chinese-prompting-vs-english-prompting) — mehrsprachige Prompting-Überlegungen',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: '¿Qué Modelos de LLM Local Soportan Mejor el Coreano?',
    seoTitle: 'Mejores Modelos de LLM Local para Coreano 2026 | Prompt Bites',
    metaDescription: 'EXAONE 3.5 (LG AI Research) es el mejor LLM local para coreano — construido específicamente con fuerte entrenamiento bilingüe coreano-inglés. Qwen3 es la mejor alternativa multilingüe.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que construyen aplicaciones en coreano sobre modelos locales autoalojados',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 3.5, lanzado por LG AI Research, es el mejor LLM local para coreano</strong> — fue construido específicamente con datos de entrenamiento bilingüe coreano-inglés sólidos y está disponible en múltiples tamaños de pesos abiertos. Qwen3 es la mejor alternativa multilingüe general si además necesitas un fuerte rendimiento en muchos otros idiomas simultáneamente.',
    toc: [
      { label: 'Mejor Opción: EXAONE 3.5', anchor: '#best-pick' },
      { label: 'EXAONE 3.5 vs Qwen3 para Coreano', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos de LLM local soportan mejor el coreano?',
        answer: 'EXAONE 3.5 de LG AI Research es el mejor LLM local para coreano, construido específicamente con fuerte entrenamiento bilingüe coreano-inglés. Qwen3 es la mejor alternativa ampliamente multilingüe.',
        bullets: [
          'EXAONE 3.5 (LG AI Research): disponible en múltiples tamaños, construido específicamente para un fuerte rendimiento en coreano e inglés.',
          'Qwen3: no es específico de coreano, pero tiene una fuerte cobertura multilingüe amplia si necesitas muchos idiomas, no solo coreano.',
          'Revisa los términos específicos de licencia de EXAONE antes de uso comercial — algunos modelos coreanos de pesos abiertos tienen restricciones de uso.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: EXAONE 3.5 (LG AI Research) — entrenamiento bilingüe coreano-inglés construido específicamente, múltiples tamaños de pesos abiertos',
          'Mejor alternativa multilingüe: Qwen3 — no específico de coreano, pero fuerte si también necesitas amplia cobertura de idiomas',
          'Revisa los términos de licencia de EXAONE antes del despliegue comercial — algunos modelos abiertos enfocados en coreano tienen restricciones de uso',
          'Ejecuta cualquiera de los dos a través de Ollama o una canalización de conversión GGUF compatible una vez que confirmes que los términos de licencia se ajustan a tu caso de uso',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: EXAONE 3.5',
        content: [
          '<strong>EXAONE 3.5, lanzado por LG AI Research, es el mejor LLM local para coreano porque fue construido específicamente con datos de entrenamiento bilingüe coreano-inglés sustanciales, en lugar de tratar el coreano como uno más entre varios idiomas secundarios en una mezcla de entrenamiento ampliamente multilingüe.</strong> Está disponible en múltiples tamaños de parámetros de pesos abiertos, permitiéndote ajustar el tamaño del modelo a tu hardware de la misma forma que lo harías con cualquier otra familia de modelos.',
          'Si tu aplicación necesita un fuerte rendimiento en muchos idiomas simultáneamente — no solo coreano e inglés — Qwen3 es la mejor alternativa de propósito general. Sus datos de entrenamiento abarcan una amplia gama de idiomas con resultados generalmente sólidos, aunque no está específicamente optimizado para coreano de la forma en que lo está EXAONE 3.5.',
          'Antes de desplegar cualquiera de los dos modelos comercialmente, revisa sus términos exactos de licencia. Algunos modelos abiertos enfocados en coreano tienen restricciones de uso (cláusulas de solo investigación, umbrales de ingresos o requisitos de atribución) que difieren de licencias más permisivas como Apache 2.0 — verifica el texto específico de la licencia para la versión y tamaño del modelo que planeas usar.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'EXAONE 3.5 vs Qwen3 para Coreano',
        content: [
          'El enfoque bilingüe coreano-inglés de EXAONE 3.5 generalmente le da una ventaja en matices, modismos y registro de formalidad específicos del coreano comparado con modelos ampliamente multilingües. La ventaja de Qwen3 es la amplitud — si tu producto atiende a usuarios en muchos idiomas, estandarizar en un modelo ampliamente multilingüe simplifica tu despliegue frente a ejecutar modelos especializados separados por idioma.',
          'Para un producto exclusivamente en coreano o con enfoque principal en coreano, EXAONE 3.5 es la opción más específica. Para un producto genuinamente multilingüe donde el coreano es uno de varios idiomas soportados, Qwen3 evita la complejidad operativa de manejar múltiples modelos especializados.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Es EXAONE 3.5 gratuito para uso comercial?',
            a: 'Los términos de licencia varían según la versión del modelo y algunas versiones de EXAONE han incluido históricamente ciertas restricciones de uso — siempre revisa la licencia específica adjunta al tamaño y versión exactos del modelo que planeas desplegar antes del uso comercial.',
          },
          {
            q: '¿Puedo ejecutar EXAONE 3.5 a través de Ollama?',
            a: 'Generalmente hay disponibles conversiones GGUF de la comunidad de los modelos EXAONE para usar con herramientas basadas en llama.cpp como Ollama, aunque el soporte oficial de primera parte en la biblioteca de Ollama puede ir por detrás del lanzamiento inicial de un modelo — revisa la biblioteca de modelos de Ollama para la disponibilidad actual.',
          },
          {
            q: '¿Cómo se compara el rendimiento en coreano de Qwen3 con modelos propietarios de clase GPT?',
            a: 'El entrenamiento multilingüe de Qwen3 le da una capacidad general sólida en coreano, aunque modelos altamente especializados o construidos específicamente (como EXAONE 3.5 para coreano en particular) a menudo lo superan en tareas matizadas y específicas del coreano.',
          },
          {
            q: '¿Existen otros modelos abiertos enfocados en coreano que valga la pena considerar?',
            a: 'Sí — la comunidad de PLN coreana de código abierto ha producido otros modelos ajustados para coreano a lo largo de los años (algunos basados en arquitecturas anteriores al estilo GPT-NeoX). La disponibilidad y el estado de mantenimiento varían, así que verifica que un modelo candidato siga manteniéndose activamente antes de construir sobre él.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Qué Modelos de LLM Local Soportan Mejor el Japonés?](/prompt-bites/best-japanese-language-models-local) — la guía equivalente para japonés',
          '[¿Mejor Modelo de 14B para Programar?](/prompt-bites/best-14b-models-coding) — una comparación de nivel de modelo de propósito general',
          '[Prompting en Chino vs Inglés: ¿Cuál Es Mejor?](/prompt-bites/chinese-prompting-vs-english-prompting) — consideraciones de prompting multilingüe',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Quels modèles de LLM local prennent le mieux en charge le coréen ?',
    seoTitle: 'Meilleurs modèles de LLM local pour le coréen 2026',
    metaDescription: 'EXAONE 3.5 (LG AI Research) est le meilleur LLM local pour le coréen, entraîné en bilingue coréen-anglais. Qwen3 est la meilleure alternative multilingue.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs créant des applications en coréen sur des modèles locaux auto-hébergés',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>EXAONE 3.5, publié par LG AI Research, est le meilleur LLM local pour le coréen</strong> — il a été conçu spécifiquement avec des données d\'entraînement bilingues coréen-anglais solides et est disponible en plusieurs tailles à poids ouverts. Qwen3 est la meilleure alternative multilingue générale si vous avez également besoin de bonnes performances dans de nombreuses autres langues simultanément.',
    toc: [
      { label: 'Meilleur choix : EXAONE 3.5', anchor: '#best-pick' },
      { label: 'EXAONE 3.5 face à Qwen3 pour le coréen', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles de LLM local prennent le mieux en charge le coréen ?',
        answer: 'EXAONE 3.5 de LG AI Research est le meilleur LLM local pour le coréen, conçu spécifiquement avec un entraînement bilingue coréen-anglais solide. Qwen3 est la meilleure alternative largement multilingue.',
        bullets: [
          'EXAONE 3.5 (LG AI Research) : disponible en plusieurs tailles, conçu spécifiquement pour de solides performances en coréen et en anglais.',
          'Qwen3 : non spécifique au coréen, mais avec une large couverture multilingue si vous avez besoin de nombreuses langues, pas seulement du coréen.',
          'Vérifiez les conditions de licence spécifiques d\'EXAONE avant tout usage commercial — certains modèles coréens à poids ouverts comportent des restrictions d\'utilisation.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : EXAONE 3.5 (LG AI Research) — entraînement bilingue coréen-anglais conçu spécifiquement, plusieurs tailles à poids ouverts',
          'Meilleure alternative multilingue : Qwen3 — non spécifique au coréen, mais solide si vous avez aussi besoin d\'une large couverture linguistique',
          'Vérifiez les conditions de licence d\'EXAONE avant tout déploiement commercial — certains modèles ouverts axés sur le coréen comportent des restrictions d\'utilisation',
          'Exécutez l\'un ou l\'autre via Ollama ou un pipeline de conversion GGUF compatible une fois les conditions de licence confirmées pour votre cas d\'usage',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : EXAONE 3.5',
        content: [
          '<strong>EXAONE 3.5, publié par LG AI Research, est le meilleur LLM local pour le coréen car il a été conçu spécifiquement avec des données d\'entraînement bilingues coréen-anglais substantielles, plutôt que de traiter le coréen comme une langue secondaire parmi d\'autres dans un mélange d\'entraînement largement multilingue.</strong> Il est disponible en plusieurs tailles de paramètres à poids ouverts, ce qui permet d\'adapter la taille du modèle à votre matériel, comme pour toute autre famille de modèles.',
          'Si votre application a besoin de bonnes performances dans de nombreuses langues simultanément — pas seulement le coréen et l\'anglais — Qwen3 est la meilleure alternative générale. Ses données d\'entraînement couvrent un large éventail de langues avec des résultats généralement solides, bien qu\'il ne soit pas spécifiquement optimisé pour le coréen comme l\'est EXAONE 3.5.',
          'Avant de déployer l\'un ou l\'autre modèle commercialement, vérifiez ses conditions de licence exactes. Certains modèles à poids ouverts axés sur le coréen comportent des restrictions d\'utilisation (clauses réservées à la recherche, seuils de revenus ou exigences d\'attribution) qui diffèrent de licences plus permissives comme Apache 2.0 — vérifiez le texte de licence spécifique à la version et à la taille du modèle que vous prévoyez d\'utiliser.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'EXAONE 3.5 face à Qwen3 pour le coréen',
        content: [
          'L\'orientation bilingue coréen-anglais d\'EXAONE 3.5 lui donne généralement un avantage sur les nuances, les idiomes et le registre de formalité spécifiques au coréen par rapport aux modèles largement multilingues. L\'avantage de Qwen3 réside dans son étendue — si votre produit sert des utilisateurs dans de nombreuses langues, standardiser sur un modèle largement multilingue simplifie votre déploiement par rapport à l\'exécution de modèles spécialisés distincts par langue.',
          'Pour un produit exclusivement ou principalement coréen, EXAONE 3.5 est le choix le plus ciblé. Pour un produit réellement multilingue où le coréen est l\'une des plusieurs langues prises en charge, Qwen3 évite la complexité opérationnelle de jongler avec plusieurs modèles spécialisés.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'EXAONE 3.5 est-il gratuit pour un usage commercial ?',
            a: 'Les conditions de licence varient selon la version du modèle et ont historiquement inclus certaines restrictions d\'utilisation sur certaines versions d\'EXAONE — vérifiez toujours la licence spécifique associée à la taille et à la version exactes du modèle que vous prévoyez de déployer avant tout usage commercial.',
          },
          {
            q: 'Puis-je exécuter EXAONE 3.5 via Ollama ?',
            a: 'Des conversions GGUF communautaires des modèles EXAONE sont généralement disponibles pour être utilisées avec des outils basés sur llama.cpp comme Ollama, bien que le support officiel de la bibliothèque Ollama puisse accuser un retard par rapport à la sortie initiale d\'un modèle — vérifiez la bibliothèque de modèles Ollama pour la disponibilité actuelle.',
          },
          {
            q: 'Comment les performances en coréen de Qwen3 se comparent-elles aux modèles propriétaires de classe GPT ?',
            a: 'L\'entraînement multilingue de Qwen3 lui confère une bonne capacité générale en coréen, bien que des modèles hautement spécialisés ou conçus spécifiquement (comme EXAONE 3.5 pour le coréen) le surpassent souvent sur des tâches nuancées et spécifiques au coréen.',
          },
          {
            q: 'Existe-t-il d\'autres modèles ouverts axés sur le coréen à considérer ?',
            a: 'Oui — la communauté open source du NLP coréen a produit d\'autres modèles adaptés au coréen au fil des ans (certains basés sur des architectures plus anciennes de type GPT-NeoX). La disponibilité et le statut de maintenance varient, donc vérifiez qu\'un modèle candidat est toujours activement maintenu avant de vous appuyer dessus.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Quels modèles de LLM local prennent le mieux en charge le japonais ?](/prompt-bites/best-japanese-language-models-local) — le guide équivalent pour le japonais',
          '[Meilleur modèle 14B pour le codage ?](/prompt-bites/best-14b-models-coding) — une comparaison générale des niveaux de modèles',
          '[Prompting en chinois vs en anglais : lequel est le meilleur ?](/prompt-bites/chinese-prompting-vs-english-prompting) — considérations de prompting multilingue',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: '韓国語に最も対応したローカルLLMモデルは?',
    seoTitle: '2026年版 韓国語向け最適ローカルLLMモデル | Prompt Bites',
    metaDescription: 'EXAONE 3.5(LG AI Research)は韓国語に最適なローカルLLMです — 強力なバイリンガル韓国語-英語トレーニングを備えて構築されています。Qwen3が最良の多言語代替案です。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ローカルの自己ホスト型モデルで韓国語アプリケーションを構築する開発者',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>LG AI ResearchがリリースしたEXAONE 3.5は、韓国語に最適なローカルLLMです</strong> — 強力なバイリンガル韓国語-英語トレーニングデータを備えて特別に構築されており、複数のオープンウェイトサイズで利用可能です。他の多くの言語でも同時に強力な性能が必要な場合は、Qwen3が最良の汎用多言語代替案です。',
    toc: [
      { label: 'ベストピック: EXAONE 3.5', anchor: '#best-pick' },
      { label: '韓国語向けEXAONE 3.5 vs Qwen3', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: '韓国語に最も対応したローカルLLMモデルは?',
        answer: 'LG AI ResearchのEXAONE 3.5は韓国語に最適なローカルLLMで、強力なバイリンガル韓国語-英語トレーニングを備えて特別に構築されています。Qwen3が最良の広範な多言語代替案です。',
        bullets: [
          'EXAONE 3.5(LG AI Research): 複数のサイズで利用可能、強力な韓国語と英語の性能のために特別に構築。',
          'Qwen3: 韓国語専用ではありませんが、韓国語だけでなく多くの言語が必要な場合に強力な広範な多言語カバレッジ。',
          '商用利用前にEXAONEの具体的なライセンス条件を確認してください — 一部のオープンウェイト韓国語モデルには利用制限があります。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ベストピック: EXAONE 3.5(LG AI Research) — 特別に構築されたバイリンガル韓国語-英語トレーニング、複数のオープンウェイトサイズ',
          '最良の多言語代替案: Qwen3 — 韓国語専用ではありませんが、広範な言語カバレッジも必要なら強力',
          '商用デプロイ前にEXAONEのライセンス条件を確認すること — 一部の韓国語重視のオープンモデルには利用制限がある',
          'ライセンス条件が用途に合うことを確認したら、Ollamaか互換のGGUF変換パイプラインでどちらかを実行',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: EXAONE 3.5',
        content: [
          '<strong>LG AI ResearchがリリースしたEXAONE 3.5が韓国語に最適なローカルLLMである理由は、韓国語を広範な多言語トレーニングミックスの中の多くの副次言語の一つとして扱うのではなく、相当量のバイリンガル韓国語-英語トレーニングデータを備えて特別に構築されているためです。</strong>複数のオープンウェイトパラメータサイズで利用可能で、他のモデルファミリーと同じようにハードウェアにモデルサイズを合わせられます。',
          'アプリケーションが韓国語と英語だけでなく多くの言語にわたって同時に強力な性能を必要とする場合は、Qwen3がより良い汎用代替案です。そのトレーニングデータは幅広い言語にまたがり一般に堅実な結果を出しますが、EXAONE 3.5のように韓国語に特化して最適化されているわけではありません。',
          'どちらのモデルも商用でデプロイする前に、その正確なライセンス条件を確認してください。一部の韓国語重視のオープンウェイトモデルには、Apache 2.0のような、より寛容なライセンスとは異なる利用制限(研究専用条項、収益しきい値、帰属表示要件)があります — 使用予定のモデルバージョンとサイズの具体的なライセンステキストを確認してください。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '韓国語向けEXAONE 3.5 vs Qwen3',
        content: [
          'EXAONE 3.5の韓国語-英語バイリンガル重視は、広範な多言語モデルに比べ、韓国語特有のニュアンス、慣用句、敬語表現で一般に優位性をもたらします。Qwen3の強みは幅広さです — 製品が多くの言語のユーザーにサービスするなら、一つの広範な多言語モデルに標準化することで、言語ごとに別々の専用モデルを運用する複雑さを避けられます。',
          '韓国語専用または韓国語主体の製品には、EXAONE 3.5がより的を絞った選択です。韓国語がサポートする複数言語の一つである真に多言語の製品には、Qwen3が複数の専用モデルを扱う運用上の複雑さを回避します。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'EXAONE 3.5は商用利用が無料ですか?',
            a: 'ライセンス条件はモデルバージョンによって異なり、特定のEXAONEリリースには過去に何らかの利用制限が含まれていました — 商用利用前に、デプロイ予定の正確なモデルサイズとバージョンに付随する具体的なライセンスを必ず確認してください。',
          },
          {
            q: 'OllamaでEXAONE 3.5を動かせますか?',
            a: 'EXAONEモデルのコミュニティによるGGUF変換版は一般に、Ollamaのようなllama.cppベースのツールで使用可能ですが、公式のOllamaライブラリサポートはモデルの初回リリースに遅れることがあります — 現在の利用可能状況はOllamaのモデルライブラリで確認してください。',
          },
          {
            q: 'Qwen3の韓国語性能はGPTクラスの独自モデルとどう比較されますか?',
            a: 'Qwen3の多言語トレーニングは堅実な一般的韓国語能力をもたらしますが、高度に特化した目的構築モデル(韓国語専用のEXAONE 3.5など)は、ニュアンスの細かい韓国語特有のタスクでしばしばそれを上回ります。',
          },
          {
            q: '他に検討する価値のある韓国語重視のオープンモデルはありますか?',
            a: 'はい — オープンソースの韓国語NLPコミュニティは、長年にわたり他の韓国語チューニングモデル(初期のGPT-NeoXスタイルアーキテクチャに基づくものも含む)を生み出してきました。可用性とメンテナンス状況はさまざまなので、候補モデルが積極的にメンテナンスされ続けているか確認してから構築してください。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[日本語に最も対応したローカルLLMモデルは?](/prompt-bites/best-japanese-language-models-local) — 日本語向けの同等ガイド',
          '[コーディングに最適な14Bモデルは?](/prompt-bites/best-14b-models-coding) — 汎用モデル層の比較',
          '[中国語 vs 英語プロンプティング: どちらが良い?](/prompt-bites/chinese-prompting-vs-english-prompting) — 多言語プロンプティングの考慮事項',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: '어떤 로컬 LLM 모델이 한국어를 가장 잘 지원하는가?',
    seoTitle: '2026년 한국어 최적 로컬 LLM 모델 | Prompt Bites',
    metaDescription: 'EXAONE 3.5(LG AI연구원)는 한국어를 가장 잘 지원하는 로컬 LLM입니다 — 강력한 한영 이중언어 훈련을 갖췄습니다. Qwen3는 최고의 다국어 대안입니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬의 자체 호스팅 모델로 한국어 애플리케이션을 구축하는 개발자',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>LG AI연구원이 출시한 EXAONE 3.5는 한국어를 가장 잘 지원하는 로컬 LLM입니다</strong> — 강력한 한영 이중언어 훈련 데이터로 목적에 맞게 구축되었으며 여러 개방형 가중치 크기로 제공됩니다. 다른 여러 언어에서도 동시에 강력한 성능이 필요하다면 Qwen3가 최고의 범용 다국어 대안입니다.',
    toc: [
      { label: '최적의 선택: EXAONE 3.5', anchor: '#best-pick' },
      { label: '한국어를 위한 EXAONE 3.5 대 Qwen3', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '어떤 로컬 LLM 모델이 한국어를 가장 잘 지원합니까?',
        answer: 'LG AI연구원의 EXAONE 3.5는 한국어를 가장 잘 지원하는 로컬 LLM으로, 강력한 한영 이중언어 훈련을 갖추도록 목적에 맞게 구축되었습니다. Qwen3는 최고의 광범위한 다국어 대안입니다.',
        bullets: [
          'EXAONE 3.5(LG AI연구원): 여러 크기로 제공되며 한국어와 영어 성능을 위해 목적에 맞게 구축되었습니다.',
          'Qwen3: 한국어 전용은 아니지만, 한국어뿐 아니라 여러 언어가 필요하다면 강력한 광범위한 다국어 커버리지를 제공합니다.',
          '상업적 사용 전에 EXAONE의 구체적인 라이선스 조건을 확인하십시오 — 일부 개방형 가중치 한국어 모델은 사용 제한이 있습니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적의 선택: EXAONE 3.5(LG AI연구원) — 목적에 맞게 구축된 한영 이중언어 훈련, 여러 개방형 가중치 크기',
          '최고의 다국어 대안: Qwen3 — 한국어 전용은 아니지만 광범위한 언어 커버리지도 필요하다면 강력합니다',
          '상업적 배포 전에 EXAONE의 라이선스 조건을 확인하십시오 — 일부 한국어 중심 개방형 모델은 사용 제한이 있습니다',
          '라이선스 조건이 사용 사례에 맞는지 확인한 후 Ollama나 호환되는 GGUF 변환 파이프라인을 통해 실행하십시오',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: EXAONE 3.5',
        content: [
          '<strong>LG AI연구원이 출시한 EXAONE 3.5는 한국어를 광범위한 다국어 훈련 혼합의 여러 보조 언어 중 하나로 취급하는 대신, 상당한 한영 이중언어 훈련 데이터로 목적에 맞게 구축되었기 때문에 한국어를 가장 잘 지원하는 로컬 LLM입니다.</strong> 여러 개방형 가중치 파라미터 크기로 제공되어, 다른 모델 계열과 마찬가지로 모델 크기를 하드웨어에 맞출 수 있습니다.',
          '애플리케이션이 한국어와 영어뿐 아니라 여러 언어에서 동시에 강력한 성능을 필요로 한다면 Qwen3가 더 나은 범용 대안입니다. 훈련 데이터가 광범위한 언어에 걸쳐 있고 대체로 견고한 결과를 보이지만, EXAONE 3.5처럼 한국어에 특별히 최적화되어 있지는 않습니다.',
          '어느 모델이든 상업적으로 배포하기 전에 정확한 라이선스 조건을 확인하십시오. 일부 한국어 중심 개방형 가중치 모델은 Apache 2.0 같은 더 허용적인 라이선스와 다른 사용 제한(연구 전용 조항, 매출 기준, 또는 출처 표시 요건)을 가지고 있습니다 — 사용하려는 모델의 정확한 버전과 크기에 대한 구체적인 라이선스 텍스트를 확인하십시오.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '한국어를 위한 EXAONE 3.5 대 Qwen3',
        content: [
          'EXAONE 3.5의 한영 이중언어 집중은 광범위한 다국어 모델 대비 한국어 특유의 뉘앙스, 관용구, 격식체에서 대체로 우위를 제공합니다. Qwen3의 강점은 폭넓음입니다 — 제품이 여러 언어에 걸쳐 사용자를 서비스한다면 하나의 광범위한 다국어 모델로 표준화하는 것이 언어별로 별도의 전문 모델을 운영하는 것보다 배포를 단순화합니다.',
          '한국어 전용이나 한국어 중심 제품에는 EXAONE 3.5가 더 집중된 선택입니다. 한국어가 여러 지원 언어 중 하나인 진정으로 다국어인 제품에는 Qwen3가 여러 전문 모델을 병행 운영하는 운영상의 복잡함을 피합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'EXAONE 3.5는 상업적으로 무료로 사용할 수 있습니까?',
            a: '라이선스 조건은 모델 버전마다 다르며 일부 EXAONE 릴리스는 역사적으로 일부 사용 제한을 포함했습니다 — 상업적 사용 전에 배포하려는 정확한 모델 크기와 버전에 첨부된 구체적인 라이선스를 항상 확인하십시오.',
          },
          {
            q: 'Ollama를 통해 EXAONE 3.5를 실행할 수 있습니까?',
            a: 'Ollama 같은 llama.cpp 기반 도구용 EXAONE 모델의 커뮤니티 GGUF 변환은 일반적으로 사용 가능하지만, 공식 1차 Ollama 라이브러리 지원은 모델의 초기 출시보다 늦어질 수 있습니다 — 현재 가용성은 Ollama 모델 라이브러리를 확인하십시오.',
          },
          {
            q: 'Qwen3의 한국어 성능은 GPT급 독점 모델과 어떻게 비교됩니까?',
            a: 'Qwen3의 다국어 훈련은 견고한 일반적인 한국어 능력을 제공하지만, 고도로 특화되거나 목적에 맞게 구축된 모델(한국어 전용의 EXAONE 3.5 같은)이 뉘앙스가 있는 한국어 특유의 작업에서 종종 우위를 보입니다.',
          },
          {
            q: '고려할 만한 다른 한국어 중심 개방형 모델이 있습니까?',
            a: '예 — 오픈소스 한국어 NLP 커뮤니티는 수년에 걸쳐 다른 한국어 튜닝 모델(일부는 초기 GPT-NeoX 스타일 아키텍처 기반)을 만들어 왔습니다. 가용성과 유지보수 상태는 다양하므로, 후보 모델을 기반으로 구축하기 전에 여전히 적극적으로 유지보수되고 있는지 확인하십시오.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[어떤 로컬 LLM 모델이 일본어를 가장 잘 지원하는가?](/prompt-bites/best-japanese-language-models-local) — 일본어를 위한 동등한 가이드',
          '[코딩을 위한 최적의 14B 모델은?](/prompt-bites/best-14b-models-coding) — 범용 모델 등급 비교',
          '[중국어 대 영어 프롬프팅: 어느 것이 더 나은가?](/prompt-bites/chinese-prompting-vs-english-prompting) — 다국어 프롬프팅 고려사항',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Quais Modelos de LLM Local Suportam Melhor o Coreano?',
    seoTitle: 'Melhores Modelos de LLM Local para Coreano 2026',
    metaDescription: 'O EXAONE 3.5 (LG AI Research) é o melhor LLM local para coreano — construído especificamente com forte treinamento bilíngue coreano-inglês. O Qwen3 é a melhor alternativa multilíngue.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores construindo aplicações em coreano em modelos locais e auto-hospedados',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O EXAONE 3.5, lançado pela LG AI Research, é o melhor LLM local para coreano</strong> — foi construído especificamente com dados de treinamento bilíngue coreano-inglês fortes e está disponível em múltiplos tamanhos de peso aberto. O Qwen3 é a melhor alternativa multilíngue geral se você também precisa de forte desempenho em muitos outros idiomas simultaneamente.',
    toc: [
      { label: 'Melhor Escolha: EXAONE 3.5', anchor: '#best-pick' },
      { label: 'EXAONE 3.5 vs Qwen3 para Coreano', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos de LLM local suportam melhor o coreano?',
        answer: 'O EXAONE 3.5 da LG AI Research é o melhor LLM local para coreano, construído especificamente com forte treinamento bilíngue coreano-inglês. O Qwen3 é a melhor alternativa amplamente multilíngue.',
        bullets: [
          'EXAONE 3.5 (LG AI Research): disponível em múltiplos tamanhos, construído especificamente para forte desempenho em coreano e inglês.',
          'Qwen3: não é específico para coreano, mas tem forte cobertura multilíngue ampla se você precisa de muitos idiomas, não só coreano.',
          'Verifique os termos de licença específicos do EXAONE antes de uso comercial — alguns modelos coreanos de peso aberto têm restrições de uso.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: EXAONE 3.5 (LG AI Research) — treinamento bilíngue coreano-inglês construído especificamente, múltiplos tamanhos de peso aberto',
          'Melhor alternativa multilíngue: Qwen3 — não específico para coreano, mas forte se você também precisa de ampla cobertura de idiomas',
          'Verifique os termos de licença do EXAONE antes da implantação comercial — alguns modelos abertos focados em coreano têm restrições de uso',
          'Rode qualquer um dos dois via Ollama ou um pipeline de conversão GGUF compatível, uma vez confirmado que os termos de licença se encaixam no seu caso de uso',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: EXAONE 3.5',
        content: [
          '<strong>O EXAONE 3.5, lançado pela LG AI Research, é o melhor LLM local para coreano porque foi construído especificamente com dados substanciais de treinamento bilíngue coreano-inglês, em vez de tratar o coreano como um dos muitos idiomas secundários em uma mistura de treinamento amplamente multilíngue.</strong> Ele está disponível em múltiplos tamanhos de parâmetros de peso aberto, permitindo combinar o tamanho do modelo com seu hardware da mesma forma que você faria com qualquer outra família de modelos.',
          'Se sua aplicação precisa de forte desempenho em muitos idiomas simultaneamente — não só coreano e inglês — o Qwen3 é a melhor alternativa de propósito geral. Seus dados de treinamento abrangem uma ampla gama de idiomas com resultados geralmente sólidos, embora não seja especificamente otimizado para coreano como o EXAONE 3.5 é.',
          'Antes de implantar qualquer um dos modelos comercialmente, verifique seus termos exatos de licença. Alguns modelos de peso aberto focados em coreano têm restrições de uso (cláusulas de uso somente para pesquisa, limites de receita ou requisitos de atribuição) que diferem de licenças mais permissivas como a Apache 2.0 — verifique o texto específico da licença para a versão e o tamanho do modelo que você planeja usar.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'EXAONE 3.5 vs Qwen3 para Coreano',
        content: [
          'O foco bilíngue coreano-inglês do EXAONE 3.5 geralmente dá a ele uma vantagem em nuances específicas do coreano, expressões idiomáticas e registro de formalidade em comparação com modelos amplamente multilíngues. A vantagem do Qwen3 é a amplitude — se seu produto atende usuários em muitos idiomas, padronizar em um modelo amplamente multilíngue simplifica sua implantação em vez de rodar modelos especializados separados por idioma.',
          'Para um produto exclusivamente em coreano ou com foco principal em coreano, o EXAONE 3.5 é a escolha mais direcionada. Para um produto genuinamente multilíngue onde o coreano é um entre vários idiomas suportados, o Qwen3 evita a complexidade operacional de gerenciar múltiplos modelos especializados.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O EXAONE 3.5 é gratuito para uso comercial?',
            a: 'Os termos de licença variam por versão do modelo e historicamente incluíram algumas restrições de uso em certos lançamentos do EXAONE — sempre verifique a licença específica anexada ao tamanho e versão exatos do modelo que você planeja implantar antes do uso comercial.',
          },
          {
            q: 'Posso rodar o EXAONE 3.5 através do Ollama?',
            a: 'Conversões GGUF da comunidade de modelos EXAONE geralmente estão disponíveis para uso com ferramentas baseadas em llama.cpp como o Ollama, embora o suporte oficial de primeira parte do Ollama possa demorar a acompanhar o lançamento inicial de um modelo — verifique a biblioteca de modelos do Ollama para disponibilidade atual.',
          },
          {
            q: 'Como o desempenho em coreano do Qwen3 se compara a modelos proprietários de classe GPT?',
            a: 'O treinamento multilíngue do Qwen3 dá a ele uma capacidade geral sólida em coreano, embora modelos altamente especializados ou construídos especificamente (como o EXAONE 3.5 para coreano especificamente) frequentemente o superem em tarefas nuançadas e específicas do coreano.',
          },
          {
            q: 'Existem outros modelos abertos focados em coreano que valem a pena considerar?',
            a: 'Sim — a comunidade de PLN coreana de código aberto produziu outros modelos ajustados para coreano ao longo dos anos (alguns baseados em arquiteturas de estilo GPT-NeoX mais antigas). A disponibilidade e o status de manutenção variam, então verifique se um modelo candidato ainda está sendo ativamente mantido antes de construir sobre ele.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Quais Modelos de LLM Local Suportam Melhor o Japonês?](/prompt-bites/best-japanese-language-models-local) — o guia equivalente para japonês',
          '[Melhor Modelo de 14B para Código?](/prompt-bites/best-14b-models-coding) — uma comparação de faixa de modelo de propósito geral',
          '[Prompting em Chinês vs Prompting em Inglês: Qual É Melhor?](/prompt-bites/chinese-prompting-vs-english-prompting) — considerações de prompting multilíngue',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '哪些本地 LLM 模型对韩语支持最好？',
    seoTitle: '2026 年韩语最佳本地 LLM 模型 | Prompt Bites',
    metaDescription: 'EXAONE 3.5（LG AI Research）是韩语支持最好的本地 LLM——专为强大的韩英双语训练打造。Qwen3 是最佳的多语言替代方案。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['EXAONE 3.5', 'Qwen3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '在本地自托管模型上构建韩语应用的开发者',
    siblingBites: ['best-japanese-language-models-local', 'best-14b-models-coding'],
    is_living_page: false,
    leadAnswerBlock: '<strong>由 LG AI Research 发布的 EXAONE 3.5 是韩语支持最好的本地 LLM</strong>——它专为强大的韩英双语训练数据而打造，并提供多种开放权重规模。如果你同时需要在许多其他语言上表现强劲，Qwen3 是最佳的通用多语言替代方案。',
    toc: [
      { label: '最佳选择：EXAONE 3.5', anchor: '#best-pick' },
      { label: 'EXAONE 3.5 对比 Qwen3 的韩语表现', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '哪些本地 LLM 模型对韩语支持最好？',
        answer: '来自 LG AI Research 的 EXAONE 3.5 是韩语支持最好的本地 LLM，专为强大的韩英双语训练而打造。Qwen3 是最佳的广泛多语言替代方案。',
        bullets: [
          'EXAONE 3.5（LG AI Research）：提供多种规模，专为强大的韩语和英语表现打造。',
          'Qwen3：并非专为韩语打造，但如果你需要覆盖多种语言而不仅仅是韩语，它有强大的广泛多语言覆盖。',
          '商用前请检查 EXAONE 的具体许可条款——一些开放权重的韩语模型带有使用限制。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择：EXAONE 3.5（LG AI Research）——专为韩英双语训练打造，提供多种开放权重规模',
          '最佳多语言替代方案：Qwen3——并非专为韩语打造，但如果你也需要广泛的语言覆盖则表现强劲',
          '商用部署前请检查 EXAONE 的许可条款——一些专注韩语的开放模型带有使用限制',
          '确认许可条款符合你的用例后，可通过 Ollama 或兼容的 GGUF 转换流程运行任一模型',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：EXAONE 3.5',
        content: [
          '<strong>由 LG AI Research 发布的 EXAONE 3.5 是韩语支持最好的本地 LLM，因为它专门用大量韩英双语训练数据打造，而不是像许多多语言训练组合那样把韩语当作众多次要语言之一处理。</strong>它提供多种开放权重参数规模,让你能像使用任何其他模型系列一样,根据硬件匹配模型规模。',
          '如果你的应用需要同时在许多语言上表现强劲——而不仅是韩语和英语——Qwen3 是更好的通用替代方案。它的训练数据覆盖广泛的语言范围，效果普遍不错，尽管它没有像 EXAONE 3.5 那样专门为韩语优化。',
          '在商业部署任一模型之前，请检查其确切的许可条款。一些专注韩语的开放权重模型带有使用限制（仅限研究的条款、营收门槛或署名要求），这与 Apache 2.0 等更宽松的许可证不同——请核实你计划使用的具体模型版本和规模所对应的许可文本。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'EXAONE 3.5 对比 Qwen3 的韩语表现',
        content: [
          '相比广泛的多语言模型，EXAONE 3.5 的韩英双语专注通常在韩语特有的细微差别、习语和敬语register上更具优势。Qwen3 的优势在于广度——如果你的产品服务于多种语言的用户，统一使用一个广泛的多语言模型比为每种语言运行独立的专用模型更能简化部署。',
          '对于纯韩语或以韩语为主的产品，EXAONE 3.5 是更有针对性的选择。对于韩语只是众多受支持语言之一的真正多语言产品，Qwen3 能避免同时维护多个专用模型带来的运营复杂性。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'EXAONE 3.5 可以免费商用吗？',
            a: '许可条款因模型版本而异，某些 EXAONE 发行版历来带有一些使用限制——在商用前，务必检查你计划部署的具体模型规模和版本所附带的具体许可证。',
          },
          {
            q: '我能通过 Ollama 运行 EXAONE 3.5 吗？',
            a: '社区提供的 EXAONE 模型 GGUF 转换版本通常可用于 Ollama 等基于 llama.cpp 的工具，不过官方 Ollama 模型库的支持可能滞后于模型的最初发布——请查看 Ollama 模型库以确认当前可用性。',
          },
          {
            q: 'Qwen3 的韩语表现与 GPT 级专有模型相比如何？',
            a: 'Qwen3 的多语言训练赋予了它扎实的通用韩语能力，不过高度专业化或专为打造的模型（如专门针对韩语的 EXAONE 3.5）在细微、韩语特有的任务上往往更胜一筹。',
          },
          {
            q: '还有其他值得考虑的专注韩语的开放模型吗？',
            a: '有——韩国开源 NLP 社区多年来打造了其他经过韩语调优的模型（部分基于较早的 GPT-NeoX 风格架构）。可用性和维护状态各不相同，因此在基于某个候选模型构建之前，请核实它是否仍在积极维护。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[哪些本地 LLM 模型对日语支持最好？](/prompt-bites/best-japanese-language-models-local) — 日语的对应指南',
          '[编码的最佳 14B 模型？](/prompt-bites/best-14b-models-coding) — 通用模型档位对比',
          '[中文对比英文提示：哪个更好？](/prompt-bites/chinese-prompting-vs-english-prompting) — 多语言提示相关考量',
        ],
      },
    },
  },
}
