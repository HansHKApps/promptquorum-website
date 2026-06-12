import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best MoE Models for Local Coding?',
    seoTitle: 'Best MoE Models for Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Mixtral 8x22B: 26 GB VRAM, 46.7B params. DeepSeek V2: 16 GB VRAM, top coding scores. MoE activates only active parameters. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Mixtral 8x22B', 'DeepSeek V2'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Developers evaluating MoE models for local coding tasks',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-14b-models-coding', 'qwen-14b-vs-llama-8b'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best MoE models for local coding?',
        answer: 'Mixtral 8x22B and DeepSeek V2 are the top MoE coding models for local use, activating only a fraction of total parameters per token to deliver better quality per VRAM than dense models. Both require at least 16 GB VRAM at Q4, with Mixtral at ~26 GB and DeepSeek V2 at ~16 GB.',
        bullets: [
          'Mixtral 8x22B Q4_K_M: ~26 GB VRAM, strong coding, available on Ollama',
          'DeepSeek V2 Q4: ~16 GB VRAM, top coding benchmark scores',
          'MoE advantage: faster inference than comparable dense models',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Beste MoE-Modelle für lokales Coding?',
        answer: 'Mixtral 8x22B und DeepSeek V2 sind die führenden MoE-Coding-Modelle für lokalen Einsatz, aktivieren pro Token nur einen Bruchteil der Gesamtparameter für bessere Qualität pro VRAM als Dense-Modelle. Beide benötigen mindestens 16 GB VRAM bei Q4, Mixtral ~26 GB, DeepSeek V2 ~16 GB.',
        bullets: [
          'Mixtral 8x22B Q4_K_M: ~26 GB VRAM, starkes Coding, auf Ollama verfügbar',
          'DeepSeek V2 Q4: ~16 GB VRAM, führende Coding-Benchmark-Werte',
          'MoE-Vorteil: schnellere Inferenz als vergleichbare Dense-Modelle',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleurs modèles MoE pour le codage local ?',
        answer: 'Mixtral 8x22B et DeepSeek V2 sont les meilleurs modèles MoE de codage pour un usage local, activant seulement une fraction des paramètres totaux par token pour offrir meilleure qualité par VRAM que modèles denses. Les deux nécessitent au moins 16 Go VRAM en Q4, Mixtral ~26 Go, DeepSeek V2 ~16 Go.',
        bullets: [
          'Mixtral 8x22B Q4_K_M : ~26 Go de VRAM, codage solide, disponible sur Ollama',
          'DeepSeek V2 Q4 : ~16 Go de VRAM, meilleures performances sur les benchmarks de codage',
          'Avantage MoE : inférence plus rapide que les modèles denses comparables',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルコーディングに最適な MoE モデルは？',
        answer: 'Mixtral 8x22B と DeepSeek V2 がローカル使用に最適な MoE コーディングモデルで、トークンごとに総パラメータの一部のみをアクティブにしDense モデルより VRAM あたり品質が高い。Q4 では両方とも最低 16 GB VRAM、Mixtral ~26 GB、DeepSeek V2 ~16 GB。',
        bullets: [
          'Mixtral 8x22B Q4_K_M：~26 GB VRAM、強力なコーディング、Ollama で利用可能',
          'DeepSeek V2 Q4：~16 GB VRAM、コーディングベンチマーク最高スコア',
          'MoE の利点：同等の Dense モデルより高速な推論',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '本地编程最佳 MoE 模型是什么？',
        answer: 'Mixtral 8x22B 和 DeepSeek V2 是本地编程的顶级 MoE 模型，每个 token 只激活总参数的一部分，相比稠密模型每 GB VRAM 质量更高。两者 Q4 都需至少 16 GB VRAM，Mixtral ~26 GB，DeepSeek V2 ~16 GB。',
        bullets: [
          'Mixtral 8x22B Q4_K_M：~26 GB VRAM，编程能力强，Ollama 可用',
          'DeepSeek V2 Q4：~16 GB VRAM，编程基准测试顶级成绩',
          'MoE 优势：推理速度比同等稠密模型更快',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE models activate only active-expert parameters per token — Mixtral 8x22B has 46.7B total params but only ~12.9B active per token',
          'Mixtral 8x22B Q4_K_M requires ~26 GB VRAM, making it a dual-GPU or high-VRAM single-GPU workload',
          'DeepSeek V2 at Q4 fits in ~16 GB VRAM and achieves top coding benchmark scores comparable to much larger dense models',
          'For VRAM below 16 GB, dense 13B–14B coding models like DeepSeek Coder 14B are more practical than MoE options',
        ],
      },
      body1: {
        title: 'How MoE Architecture Changes the VRAM Math',
        content: [
          '<strong>Mixture of Experts (MoE) models route each token through only a subset of specialist layers called experts, so inference cost scales with active parameters, not total parameters.</strong> Mixtral 8x22B has 46.7 billion total parameters but only ~12.9 billion are active per forward pass — comparable to a 13B dense model in compute cost.',
          'This means Mixtral 8x22B punches above its weight in output quality relative to the inference cost per token. However, all expert weights must be loaded into VRAM at startup. At Q4_K_M, Mixtral 8x22B requires approximately 26 GB of VRAM. This necessitates either a 24 GB single GPU (e.g., RTX 3090/4090) with some quantization compromise, or a dual-GPU setup.',
          'DeepSeek V2 uses a similar MoE architecture optimized for coding tasks and requires approximately 16 GB VRAM at Q4, fitting on a single 16 GB or 24 GB GPU. Its coding benchmark scores match models two to three times larger in active parameter count.',
        ],
        columns: ['Model', 'Total Params', 'Active per Token', 'VRAM at Q4'],
        rows: [
          { 'Model': 'Mixtral 8x22B', 'Total Params': '46.7B', 'Active per Token': '~12.9B', 'VRAM at Q4': '~26 GB' },
          { 'Model': 'DeepSeek V2', 'Total Params': '236B', 'Active per Token': '~21B', 'VRAM at Q4': '~16 GB' },
        ],
      },
      body2: {
        title: 'Running MoE Models with Ollama',
        content: [
          '<strong>Mixtral 8x22B is available on Ollama via <code>ollama pull mixtral:8x7b</code>, which downloads the Q4_K_M GGUF automatically.</strong> Ollama handles layer allocation across available VRAM and will partial-offload to CPU RAM if VRAM is insufficient, though this reduces speed significantly.',
          'If you have only 16 GB VRAM, DeepSeek V2 Q4 is the better MoE choice. It fits entirely on a single 16 GB card and delivers coding throughput of approximately 15–20 tok/s on an RTX 4080 or equivalent. For VRAM below 16 GB, switch to dense models — MoE benefits disappear when heavy CPU offloading is required.',
          'One common misconception: MoE models must load ALL expert weights into VRAM at startup, not just the active subset. The VRAM cost reflects total parameters, not active ones. For single-language coding tasks (e.g., Python-only work), a dense model like Qwen 3 Coder 14B often outperforms Mixtral 8x22B because its weights are fully specialized for code rather than spread across general-purpose experts.',
          'For a full comparison of the best coding models at each VRAM tier including dense alternatives, see the <a href="/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">best local LLMs for coding guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About MoE Models for Coding',
        faqs: [
          {
            q: 'What is a MoE model and why does it matter for local coding?',
            a: 'MoE stands for Mixture of Experts. The model contains many specialist sub-networks (experts) but only activates a few per token. This means inference compute matches a much smaller dense model while the total parameter count gives the model a broader knowledge base — useful for coding tasks that span multiple languages and frameworks.',
          },
          {
            q: 'Does Mixtral 8x22B fit on a single GPU?',
            a: 'At Q4_K_M, Mixtral 8x22B needs ~26 GB VRAM. A single RTX 3090 or RTX 4090 (24 GB) requires a slight quantization reduction to Q3_K_M (~22 GB) to fit. A 48 GB card (e.g., RTX A6000) fits it at Q4. Dual RTX 3090 via llama.cpp with tensor parallelism also works.',
          },
          {
            q: 'Is DeepSeek V2 better than Mixtral 8x22B for coding?',
            a: 'On coding benchmarks, DeepSeek V2 Q4 matches or exceeds Mixtral 8x22B at lower VRAM (~16 GB vs ~26 GB). For VRAM-constrained setups, DeepSeek V2 is the better choice. For pure generation quality on a high-VRAM system, both are competitive.',
          },
          {
            q: 'What ollama command runs Mixtral 8x22B?',
            a: '<code>ollama pull mixtral:8x7b</code> downloads the Q4_K_M quantized GGUF. Then <code>ollama run mixtral:8x7b</code> starts it. Ollama auto-allocates VRAM and spills to CPU RAM if needed. See <a href="/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">GPU VRAM requirements by model</a> to confirm your card can handle it.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Beste MoE-Modelle für lokales Coding?',
    seoTitle: 'Beste MoE-Modelle für lokales Coding 2026',
    metaDescription: 'Mixtral 8x22B：26 GB VRAM, 46,7B params. DeepSeek V2：16 GB VRAM, bestes Coding. MoE aktiviert nur aktive Parameter. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Beste MoE-Modelle für lokales Coding?',
        answer: 'Mixtral 8x22B und DeepSeek V2 sind die führenden MoE-Coding-Modelle für den lokalen Einsatz. MoE-Modelle aktivieren pro Token nur einen Bruchteil der Parameter, was eine bessere Qualität pro VRAM als vergleichbar große Dense-Modelle ergibt. Beide benötigen mindestens 16 GB VRAM bei Q4.',
        bullets: [
          'Mixtral 8x22B Q4_K_M: ~26 GB VRAM, starkes Coding, auf Ollama verfügbar',
          'DeepSeek V2 Q4: ~16 GB VRAM, führende Coding-Benchmark-Werte',
          'MoE-Vorteil: schnellere Inferenz als vergleichbare Dense-Modelle',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE-Modelle aktivieren pro Token nur aktive Experten-Parameter — Mixtral 8x22B hat 46,7B Gesamtparameter, aber nur ~12,9B aktiv pro Token',
          'Mixtral 8x22B Q4_K_M benötigt ~26 GB VRAM — geeignet für Dual-GPU oder High-VRAM-Setups',
          'DeepSeek V2 bei Q4 passt in ~16 GB VRAM und erzielt führende Coding-Benchmark-Werte',
          'Unter 16 GB VRAM sind Dense-Coding-Modelle wie DeepSeek Coder 14B praktischer als MoE-Optionen',
        ],
      },
      body1: {
        title: 'Wie die MoE-Architektur die VRAM-Rechnung verändert',
        content: [
          '<strong>Mixture of Experts (MoE)-Modelle leiten jeden Token nur durch eine Teilmenge spezialisierter Schichten (Experten), sodass die Inferenzkosten mit den aktiven Parametern skalieren, nicht mit den Gesamtparametern.</strong> Mixtral 8x22B hat 46,7 Milliarden Gesamtparameter, aber nur ~12,9 Milliarden sind pro Vorwärtsdurchlauf aktiv — vergleichbar mit einem 13B Dense-Modell in Rechenkosten.',
          'Das bedeutet, Mixtral 8x22B liefert im Vergleich zu den Inferenzkosten pro Token eine überdurchschnittliche Ausgabequalität. Allerdings müssen alle Experten-Gewichte beim Start in den VRAM geladen werden. Bei Q4_K_M benötigt Mixtral 8x22B ca. 26 GB VRAM — entweder eine 24-GB-Einzelkarte mit leichtem Quantisierungskompromiss oder ein Dual-GPU-Setup.',
          'DeepSeek V2 verwendet eine ähnliche MoE-Architektur, die für Coding-Aufgaben optimiert ist, und benötigt bei Q4 ca. 16 GB VRAM. Seine Coding-Benchmark-Werte entsprechen Modellen mit zwei- bis dreifach größerem aktiven Parameteranzahl.',
        ],
        columns: ['Modell', 'Gesamtparameter', 'Aktiv pro Token', 'VRAM bei Q4'],
        rows: [
          { 'Modell': 'Mixtral 8x22B', 'Gesamtparameter': '46,7B', 'Aktiv pro Token': '~12,9B', 'VRAM bei Q4': '~26 GB' },
          { 'Modell': 'DeepSeek V2', 'Gesamtparameter': '236B', 'Aktiv pro Token': '~21B', 'VRAM bei Q4': '~16 GB' },
        ],
      },
      body2: {
        title: 'MoE-Modelle mit Ollama ausführen',
        content: [
          '<strong>Mixtral 8x22B ist auf Ollama via <code>ollama pull mixtral:8x7b</code> verfügbar, was das Q4_K_M GGUF automatisch herunterlädt.</strong> Ollama übernimmt die Layer-Zuteilung über den verfügbaren VRAM und lagert bei unzureichendem VRAM partiell auf den CPU-RAM aus, was jedoch die Geschwindigkeit deutlich reduziert.',
          'Wenn Sie nur 16 GB VRAM haben, ist DeepSeek V2 Q4 die bessere MoE-Wahl. Es passt vollständig auf eine 16-GB-Karte und liefert einen Coding-Durchsatz von ca. 15–20 tok/s auf einer RTX 4080 oder ähnlichem. Unter 16 GB VRAM sollten Sie auf Dense-Modelle wechseln — MoE-Vorteile verschwinden bei starkem CPU-Offloading.',
          'Ein verbreiteter Missverständnis: MoE-Modelle müssen beim Start ALLE Experten-Gewichte in den VRAM laden, nicht nur die aktiven Teilmengen. Die VRAM-Kosten spiegeln Gesamtparameter wider, nicht aktive. Für Aufgaben einer Sprache (z.B. nur Python-Arbeit) outperformt ein Dense-Modell wie Qwen 3 Coder 14B oft Mixtral 8x22B, da seine Gewichte vollständig auf Code spezialisiert sind, nicht über allgemeine Experten verteilt.',
          'Für einen vollständigen Vergleich der besten Coding-Modelle bei jedem VRAM-Niveau einschließlich Dense-Alternativen lesen Sie den <a href="/de/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">Leitfaden zu den besten lokalen LLMs für Coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu MoE-Modellen für Coding',
        faqs: [
          {
            q: 'Was ist ein MoE-Modell und warum ist es für lokales Coding relevant?',
            a: 'MoE steht für Mixture of Experts. Das Modell enthält viele spezialisierte Teilnetzwerke (Experten), aktiviert aber pro Token nur wenige. Das bedeutet, die Inferenzkosten entsprechen einem viel kleineren Dense-Modell, während die Gesamtparameteranzahl dem Modell eine breitere Wissensbasis verleiht — nützlich für Coding-Aufgaben über mehrere Sprachen und Frameworks.',
          },
          {
            q: 'Passt Mixtral 8x22B auf eine einzelne GPU?',
            a: 'Bei Q4_K_M benötigt Mixtral 8x22B ~26 GB VRAM. Eine RTX 3090 oder RTX 4090 (24 GB) erfordert eine leichte Quantisierungsreduktion auf Q3_K_M (~22 GB). Eine 48-GB-Karte (z.B. RTX A6000) passt bei Q4. Dual RTX 3090 via llama.cpp mit Tensor-Parallelismus funktioniert ebenfalls.',
          },
          {
            q: 'Ist DeepSeek V2 für Coding besser als Mixtral 8x22B?',
            a: 'In Coding-Benchmarks entspricht DeepSeek V2 Q4 Mixtral 8x22B oder übertrifft es bei niedrigerem VRAM (~16 GB vs. ~26 GB). Für VRAM-begrenzte Setups ist DeepSeek V2 die bessere Wahl. Bei reiner Generierungsqualität auf einem High-VRAM-System sind beide konkurrenzfähig.',
          },
          {
            q: 'Mit welchem Ollama-Befehl wird Mixtral 8x22B gestartet?',
            a: '<code>ollama pull mixtral:8x7b</code> lädt das Q4_K_M-quantisierte GGUF herunter. Dann startet <code>ollama run mixtral:8x7b</code> es. Ollama verteilt den VRAM automatisch und lagert bei Bedarf auf den CPU-RAM aus.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleurs modèles MoE pour le codage local ?',
    seoTitle: 'Meilleurs Modèles MoE pour Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Mixtral 8x22B：26 Go VRAM, 46,7B params. DeepSeek V2：16 Go VRAM, coding top. MoE active uniquement paramètres actifs. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleurs modèles MoE pour le codage local ?',
        answer: 'Mixtral 8x22B et DeepSeek V2 sont les meilleurs modèles MoE de codage pour un usage local. Les modèles MoE n\'activent qu\'une fraction des paramètres par token, offrant une meilleure qualité par Go de VRAM que les modèles denses de taille totale similaire. Les deux nécessitent au moins 16 Go de VRAM en Q4.',
        bullets: [
          'Mixtral 8x22B Q4_K_M : ~26 Go de VRAM, codage solide, disponible sur Ollama',
          'DeepSeek V2 Q4 : ~16 Go de VRAM, meilleures performances sur les benchmarks de codage',
          'Avantage MoE : inférence plus rapide que les modèles denses comparables',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Les modèles MoE n\'activent que les paramètres d\'experts actifs par token — Mixtral 8x22B a 46,7B params totaux mais seulement ~12,9B actifs par token',
          'Mixtral 8x22B Q4_K_M nécessite ~26 Go de VRAM — adapté aux setups dual-GPU ou GPU haute VRAM',
          'DeepSeek V2 en Q4 tient dans ~16 Go de VRAM et atteint les meilleures performances sur les benchmarks de codage',
          'Sous 16 Go de VRAM, les modèles denses de codage comme DeepSeek Coder 14B sont plus pratiques que les options MoE',
        ],
      },
      body1: {
        title: 'Comment l\'architecture MoE change le calcul VRAM',
        content: [
          '<strong>Les modèles Mixture of Experts (MoE) dirigent chaque token uniquement à travers un sous-ensemble de couches spécialisées appelées experts, donc le coût d\'inférence évolue avec les paramètres actifs, pas les paramètres totaux.</strong> Mixtral 8x22B a 46,7 milliards de paramètres totaux mais seulement ~12,9 milliards sont actifs par passe — comparable à un modèle dense 13B en coût de calcul.',
          'Cela signifie que Mixtral 8x22B surpasse son poids en qualité de sortie par rapport au coût d\'inférence par token. Cependant, tous les poids d\'experts doivent être chargés en VRAM au démarrage. En Q4_K_M, Mixtral 8x22B nécessite environ 26 Go de VRAM — soit un GPU 24 Go avec léger compromis de quantisation, soit un setup dual-GPU.',
          'DeepSeek V2 utilise une architecture MoE similaire optimisée pour le codage et nécessite environ 16 Go de VRAM en Q4. Ses scores de benchmarks de codage correspondent à des modèles deux à trois fois plus grands en nombre de paramètres actifs.',
        ],
        columns: ['Modèle', 'Params totaux', 'Actifs par token', 'VRAM en Q4'],
        rows: [
          { 'Modèle': 'Mixtral 8x22B', 'Params totaux': '46,7B', 'Actifs par token': '~12,9B', 'VRAM en Q4': '~26 Go' },
          { 'Modèle': 'DeepSeek V2', 'Params totaux': '236B', 'Actifs par token': '~21B', 'VRAM en Q4': '~16 Go' },
        ],
      },
      body2: {
        title: 'Faire tourner des modèles MoE avec Ollama',
        content: [
          '<strong>Mixtral 8x22B est disponible sur Ollama via <code>ollama pull mixtral:8x7b</code>, qui télécharge automatiquement le GGUF Q4_K_M.</strong> Ollama gère l\'allocation des couches sur la VRAM disponible et déchargera partiellement vers la RAM CPU si la VRAM est insuffisante, mais cela réduit significativement la vitesse.',
          'Si vous disposez de seulement 16 Go de VRAM, DeepSeek V2 Q4 est le meilleur choix MoE. Il tient entièrement sur un GPU 16 Go et délivre un débit de codage d\'environ 15–20 tok/s sur une RTX 4080 ou équivalent. Sous 16 Go de VRAM, passez aux modèles denses — les avantages MoE disparaissent avec un déchargement CPU important.',
          'Une idée fausse courante : les modèles MoE doivent charger TOUS les poids des experts en VRAM au démarrage, pas seulement le sous-ensemble actif. Le coût VRAM reflète les paramètres totaux, pas les paramètres actifs. Pour les tâches single-langue (par exemple, travail Python uniquement), un modèle dense comme Qwen 3 Coder 14B surpasse souvent Mixtral 8x22B car ses poids sont entièrement spécialisés dans le code plutôt que répartis entre des experts génériques.',
          'Pour une comparaison complète des meilleurs modèles de codage à chaque niveau de VRAM incluant les alternatives denses, consultez le <a href="/fr/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">guide des meilleurs LLMs locaux pour le codage</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles MoE pour le codage',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'un modèle MoE et pourquoi est-ce important pour le codage local ?',
            a: 'MoE signifie Mixture of Experts. Le modèle contient de nombreux sous-réseaux spécialisés (experts) mais n\'en active que quelques-uns par token. Cela signifie que le coût d\'inférence correspond à un modèle dense bien plus petit, tandis que le nombre total de paramètres offre une base de connaissances plus large — utile pour les tâches de codage couvrant plusieurs langages et frameworks.',
          },
          {
            q: 'Mixtral 8x22B tient-il sur un seul GPU ?',
            a: 'En Q4_K_M, Mixtral 8x22B nécessite ~26 Go de VRAM. Une RTX 3090 ou RTX 4090 (24 Go) requiert une légère réduction à Q3_K_M (~22 Go). Une carte 48 Go (ex. RTX A6000) le supporte en Q4. Dual RTX 3090 via llama.cpp avec parallélisme tensoriel fonctionne également.',
          },
          {
            q: 'DeepSeek V2 est-il meilleur que Mixtral 8x22B pour le codage ?',
            a: 'Sur les benchmarks de codage, DeepSeek V2 Q4 égale ou surpasse Mixtral 8x22B avec moins de VRAM (~16 Go vs ~26 Go). Pour les configurations VRAM limitées, DeepSeek V2 est le meilleur choix. Sur un système haute VRAM, les deux sont compétitifs.',
          },
          {
            q: 'Quelle commande Ollama lance Mixtral 8x22B ?',
            a: '<code>ollama pull mixtral:8x7b</code> télécharge le GGUF quantisé Q4_K_M. Ensuite, <code>ollama run mixtral:8x7b</code> le lance. Ollama répartit automatiquement la VRAM et décharge vers la RAM CPU si nécessaire.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'ローカルコーディングに最適な MoE モデルは？',
    seoTitle: 'ローカルコーディング向けMoEモデル2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Mixtral 8x22B：26 GB VRAM、46.7B params。DeepSeek V2：16 GB VRAM、coding 最高。MoE はアクティブなパラメータのみ使用。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'ローカルコーディングに最適な MoE モデルは？',
        answer: 'Mixtral 8x22B と DeepSeek V2 がローカル使用に最適な MoE コーディングモデルです。MoE モデルはトークンごとにパラメータの一部のみをアクティブにするため、同じ総サイズの Dense モデルより VRAM あたりの品質が高くなります。Q4 では両方とも最低 16 GB VRAM が必要です。',
        bullets: [
          'Mixtral 8x22B Q4_K_M：~26 GB VRAM、強力なコーディング、Ollama で利用可能',
          'DeepSeek V2 Q4：~16 GB VRAM、コーディングベンチマーク最高スコア',
          'MoE の利点：同等の Dense モデルより高速な推論',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE モデルはトークンごとに有効なエキスパートパラメータのみをアクティブにする — Mixtral 8x22B は総パラメータ 46.7B だがトークンごとにアクティブなのは ~12.9B',
          'Mixtral 8x22B Q4_K_M は ~26 GB VRAM が必要 — デュアル GPU または高 VRAM 単一 GPU 向け',
          'DeepSeek V2（Q4）は ~16 GB VRAM に収まり、トップクラスのコーディングベンチマークスコアを達成',
          '16 GB VRAM 未満では、MoE より DeepSeek Coder 14B などの Dense コーディングモデルの方が実用的',
        ],
      },
      body1: {
        title: 'MoE アーキテクチャが VRAM の計算を変える仕組み',
        content: [
          '<strong>Mixture of Experts（MoE）モデルは各トークンをエキスパートと呼ばれる専門レイヤーのサブセットのみを通してルーティングするため、推論コストは総パラメータではなくアクティブパラメータに比例します。</strong> Mixtral 8x22B は総パラメータ 467 億を持ちますが、1 回のフォワードパスでアクティブになるのは ~129 億のみ — 計算コストは 13B Dense モデルと同等です。',
          'これはつまり、Mixtral 8x22B はトークンあたりの推論コストに対して出力品質が非常に高いことを意味します。ただし、全エキスパートの重みはスタートアップ時に VRAM に読み込む必要があります。Q4_K_M では Mixtral 8x22B に約 26 GB の VRAM が必要です。',
          'DeepSeek V2 はコーディングタスク向けに最適化した同様の MoE アーキテクチャを使用し、Q4 で約 16 GB VRAM を必要とします。そのコーディングベンチマークスコアは、アクティブパラメータ数が 2〜3 倍大きいモデルに匹敵します。',
        ],
        columns: ['モデル', '総パラメータ', 'トークンあたりアクティブ', 'Q4 での VRAM'],
        rows: [
          { 'モデル': 'Mixtral 8x22B', '総パラメータ': '46.7B', 'トークンあたりアクティブ': '~12.9B', 'Q4 での VRAM': '~26 GB' },
          { 'モデル': 'DeepSeek V2', '総パラメータ': '236B', 'トークンあたりアクティブ': '~21B', 'Q4 での VRAM': '~16 GB' },
        ],
      },
      body2: {
        title: 'Ollama で MoE モデルを実行する',
        content: [
          '<strong>Mixtral 8x22B は Ollama の <code>ollama pull mixtral:8x7b</code> コマンドで利用可能で、Q4_K_M GGUF を自動ダウンロードします。</strong> Ollama は利用可能な VRAM にレイヤーを割り当て、VRAM が不足している場合はパーシャルオフロードで CPU RAM に溢れさせますが、速度は大幅に低下します。',
          '16 GB VRAM しかない場合、DeepSeek V2 Q4 が優れた MoE の選択肢です。16 GB カード 1 枚に完全に収まり、RTX 4080 相当の環境で約 15〜20 tok/s のコーディングスループットを発揮します。16 GB VRAM 未満では Dense モデルに切り替えてください — 大幅な CPU オフロードが必要になると MoE の利点がなくなります。',
          'よくある誤解：MoE モデルはスタートアップ時にアクティブなサブセットではなく、全エキスパート重みを VRAM に読み込む必要があります。VRAM コストはアクティブパラメータではなく総パラメータを反映します。単一言語コーディングタスク（例：Python のみ）の場合、Qwen 3 Coder 14B のような Dense モデルは、重みが汎用エキスパート全体に分散されているのではなく完全にコードに特化しているため、Mixtral 8x22B を上回ることが多いです。',
          '各 VRAM レベルでの最適なコーディングモデルの完全な比較（Dense モデルの代替案を含む）については、<a href="/ja/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">コーディング向け最適ローカル LLM ガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'コーディング向け MoE モデルに関するよくある質問',
        faqs: [
          {
            q: 'MoE モデルとは何ですか？ローカルコーディングでなぜ重要ですか？',
            a: 'MoE は Mixture of Experts の略です。モデルは多くの専門サブネットワーク（エキスパート）を含みますが、トークンごとにそのうち少数のみをアクティブにします。これにより推論コストははるかに小さい Dense モデルと同等になり、一方で総パラメータ数が幅広い知識ベースを提供します — 複数の言語やフレームワークにまたがるコーディングタスクに有効です。',
          },
          {
            q: 'Mixtral 8x22B は 1 枚の GPU に収まりますか？',
            a: 'Q4_K_M では Mixtral 8x22B に ~26 GB VRAM が必要です。RTX 3090 または RTX 4090（24 GB）では Q3_K_M（~22 GB）に若干下げる必要があります。48 GB カード（例：RTX A6000）なら Q4 で収まります。llama.cpp でテンソル並列処理を使ったデュアル RTX 3090 も動作します。',
          },
          {
            q: 'コーディングでは DeepSeek V2 と Mixtral 8x22B どちらが優れていますか？',
            a: 'コーディングベンチマークでは、DeepSeek V2 Q4 は Mixtral 8x22B と同等か、より少ない VRAM（~16 GB 対 ~26 GB）で上回ります。VRAM が限られた環境では DeepSeek V2 が優れた選択肢です。高 VRAM システムでの純粋な生成品質では両者は競争力があります。',
          },
          {
            q: 'Mixtral 8x22B を起動する Ollama コマンドは？',
            a: '<code>ollama pull mixtral:8x7b</code> で Q4_K_M 量子化 GGUF をダウンロードします。次に <code>ollama run mixtral:8x7b</code> で起動します。Ollama は VRAM を自動配分し、必要に応じて CPU RAM にオフロードします。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '本地编程最佳 MoE 模型是什么？',
    seoTitle: '本地编程最佳 MoE 模型 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Mixtral 8x22B：26 GB VRAM、46.7B 参数。DeepSeek V2：16 GB VRAM、编程最佳。MoE 仅激活活跃参数。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '本地编程最佳 MoE 模型是什么？',
        answer: 'Mixtral 8x22B 和 DeepSeek V2 是本地使用的顶级 MoE 编程模型。MoE 模型每个 token 只激活一部分参数，相比总参数量相近的稠密模型，每 GB VRAM 能获得更高质量。两者 Q4 量化都需要至少 16 GB VRAM。',
        bullets: [
          'Mixtral 8x22B Q4_K_M：~26 GB VRAM，编程能力强，Ollama 可用',
          'DeepSeek V2 Q4：~16 GB VRAM，编程基准测试顶级成绩',
          'MoE 优势：推理速度比同等稠密模型更快',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MoE 模型每次 token 只激活活跃专家参数——Mixtral 8x22B 总参数 46.7B，每 token 只激活约 12.9B',
          'Mixtral 8x22B Q4_K_M 需要约 26 GB VRAM——适合双 GPU 或高 VRAM 单 GPU 配置',
          'DeepSeek V2（Q4）适配约 16 GB VRAM，并在编程基准测试中取得顶级成绩',
          '低于 16 GB VRAM 时，DeepSeek Coder 14B 等稠密编程模型比 MoE 更实用',
        ],
      },
      body1: {
        title: 'MoE 架构如何改变 VRAM 计算',
        content: [
          '<strong>Mixture of Experts（MoE）模型将每个 token 只路由通过称为"专家"的专门层子集，因此推理成本随活跃参数而非总参数扩展。</strong> Mixtral 8x22B 有 467 亿总参数，但每次前向传播只有约 129 亿处于活跃状态——计算成本相当于 13B 稠密模型。',
          '这意味着 Mixtral 8x22B 相对于每 token 推理成本而言，输出质量远超预期。但所有专家权重必须在启动时加载到 VRAM 中。Q4_K_M 下，Mixtral 8x22B 约需 26 GB VRAM——需要 24 GB 单卡（需略微降低量化）或双 GPU 配置。',
          'DeepSeek V2 采用针对编程任务优化的类似 MoE 架构，Q4 下约需 16 GB VRAM。其编程基准测试成绩与活跃参数量多出 2~3 倍的模型相当。',
        ],
        columns: ['模型', '总参数', '每 token 活跃参数', 'Q4 下的 VRAM'],
        rows: [
          { '模型': 'Mixtral 8x22B', '总参数': '46.7B', '每 token 活跃参数': '~12.9B', 'Q4 下的 VRAM': '~26 GB' },
          { '模型': 'DeepSeek V2', '总参数': '236B', '每 token 活跃参数': '~21B', 'Q4 下的 VRAM': '~16 GB' },
        ],
      },
      body2: {
        title: '使用 Ollama 运行 MoE 模型',
        content: [
          '<strong>Mixtral 8x22B 可通过 Ollama 的 <code>ollama pull mixtral:8x7b</code> 命令获取，会自动下载 Q4_K_M GGUF。</strong> Ollama 处理跨可用 VRAM 的层分配，若 VRAM 不足会部分卸载至 CPU 内存，但这会显著降低速度。',
          '如果只有 16 GB VRAM，DeepSeek V2 Q4 是更好的 MoE 选择。它完全适配 16 GB 显卡，在 RTX 4080 或同等设备上编程吞吐量约 15~20 tok/s。低于 16 GB VRAM 时请切换至稠密模型——大量 CPU 卸载时 MoE 的优势会消失。',
          '常见误解：MoE 模型必须在启动时将全部专家权重加载到 VRAM 中，而不仅仅是活跃子集。VRAM 成本反映的是总参数，而非活跃参数。对于单一语言编程任务（如纯 Python 工作），Qwen 3 Coder 14B 等稠密模型通常优于 Mixtral 8x22B，因为其权重完全专门化于代码，而不是分散在多个通用专家中。',
          '关于各 VRAM 层级最佳编程模型的完整对比（包括稠密模型替代方案），请参阅<a href="/zh/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">本地编程最佳 LLM 指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于编程 MoE 模型的快速解答',
        faqs: [
          {
            q: 'MoE 模型是什么？为何对本地编程重要？',
            a: 'MoE 是 Mixture of Experts（混合专家）的缩写。模型包含多个专门子网络（专家），但每个 token 只激活其中少数几个。这意味着推理成本与小得多的稠密模型相当，同时总参数量提供了更广泛的知识基础——对于跨多种语言和框架的编程任务很有价值。',
          },
          {
            q: 'Mixtral 8x22B 能在单张 GPU 上运行吗？',
            a: 'Q4_K_M 下，Mixtral 8x22B 需要约 26 GB VRAM。RTX 3090 或 RTX 4090（24 GB）需要略降至 Q3_K_M（~22 GB）才能放入。48 GB 显卡（如 RTX A6000）可在 Q4 下运行。通过 llama.cpp 张量并行的双 RTX 3090 也可以。',
          },
          {
            q: 'DeepSeek V2 编程能力是否优于 Mixtral 8x22B？',
            a: '在编程基准测试中，DeepSeek V2 Q4 以更少的 VRAM（~16 GB 对比 ~26 GB）达到与 Mixtral 8x22B 相当或更好的成绩。对于 VRAM 受限的配置，DeepSeek V2 是更好的选择。在高 VRAM 系统上，两者都具有竞争力。',
          },
          {
            q: '启动 Mixtral 8x22B 的 Ollama 命令是什么？',
            a: '<code>ollama pull mixtral:8x7b</code> 下载 Q4_K_M 量化 GGUF；<code>ollama run mixtral:8x7b</code> 启动模型。Ollama 自动分配 VRAM，不足时卸载到 CPU 内存。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: '¿Los mejores modelos MoE para coding local?',
    seoTitle: 'Mejores modelos MoE para coding 2026 | PromptQuorum',
    metaDescription: 'Mixtral 8x22B: 26 GB VRAM, 46,7B parámetros. DeepSeek V2: 16 GB VRAM, top en coding. MoE solo activa los parámetros necesarios. Respuesta rápida.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son los mejores modelos MoE para coding local?',
        answer: 'Mixtral 8x22B y DeepSeek V2 son los mejores modelos MoE de coding para uso local, activando solo una fracción de los parámetros totales por token para ofrecer mejor calidad por VRAM que los modelos densos. Ambos necesitan al menos 16 GB de VRAM en Q4, con Mixtral en ~26 GB y DeepSeek V2 en ~16 GB.',
        bullets: [
          'Mixtral 8x22B Q4_K_M: ~26 GB VRAM, coding sólido, disponible en Ollama',
          'DeepSeek V2 Q4: ~16 GB VRAM, puntuaciones top en benchmarks de coding',
          'Ventaja MoE: inferencia más rápida que modelos densos comparables',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Los modelos MoE activan solo los parámetros del experto activo por token — Mixtral 8x22B tiene 46.7B parámetros totales pero solo ~12.9B activos por token',
          'Mixtral 8x22B Q4_K_M necesita ~26 GB de VRAM, convirtiéndolo en una carga de trabajo para GPU doble o GPU de alto VRAM',
          'DeepSeek V2 en Q4 cabe en ~16 GB de VRAM y logra puntuaciones top en benchmarks de coding comparables a modelos densos mucho más grandes',
          'Para VRAM por debajo de 16 GB, los modelos densos de coding de 13B–14B como DeepSeek Coder 14B son más prácticos que las opciones MoE',
        ],
      },
      body1: {
        title: 'Cómo la arquitectura MoE cambia el cálculo de VRAM',
        content: [
          '<strong>Los modelos Mixture of Experts (MoE) enrutan cada token solo a través de un subconjunto de capas especialistas llamadas expertos, de modo que el coste de inferencia escala con los parámetros activos, no con los totales.</strong> Mixtral 8x22B tiene 46.7 mil millones de parámetros totales pero solo ~12.9 mil millones son activos por pase hacia adelante — comparable a un modelo denso de 13B en coste de cómputo.',
          'Esto significa que Mixtral 8x22B supera su peso en calidad de salida relativa al coste de inferencia por token. Sin embargo, todos los pesos de los expertos deben cargarse en VRAM al inicio. En Q4_K_M, Mixtral 8x22B necesita aproximadamente 26 GB de VRAM. Esto requiere una GPU de 24 GB (p. ej., RTX 3090/4090) con algún compromiso de cuantización, o una configuración de GPU doble.',
          'DeepSeek V2 usa una arquitectura MoE similar optimizada para tareas de coding y necesita aproximadamente 16 GB de VRAM en Q4, ajustándose en una sola GPU de 16 GB o 24 GB. Sus puntuaciones en benchmarks de coding igualan a modelos dos o tres veces más grandes en recuento de parámetros activos.',
        ],
        columns: ['Modelo', 'Parámetros totales', 'Activos por token', 'VRAM en Q4'],
        rows: [
          { 'Modelo': 'Mixtral 8x22B', 'Parámetros totales': '46.7B', 'Activos por token': '~12.9B', 'VRAM en Q4': '~26 GB' },
          { 'Modelo': 'DeepSeek V2', 'Parámetros totales': '236B', 'Activos por token': '~21B', 'VRAM en Q4': '~16 GB' },
        ],
      },
      body2: {
        title: 'Ejecutar modelos MoE con Ollama',
        content: [
          '<strong>Mixtral 8x22B está disponible en Ollama mediante <code>ollama pull mixtral:8x7b</code>, que descarga automáticamente el GGUF Q4_K_M.</strong> Ollama gestiona la asignación de capas entre el VRAM disponible y hará descarga parcial a la RAM de la CPU si el VRAM es insuficiente, aunque esto reduce significativamente la velocidad.',
          'Si solo tienes 16 GB de VRAM, DeepSeek V2 Q4 es la mejor opción MoE. Cabe completamente en una sola tarjeta de 16 GB y ofrece un rendimiento de coding de aproximadamente 15–20 tok/s en una RTX 4080 o equivalente. Para VRAM por debajo de 16 GB, cambia a modelos densos — las ventajas de MoE desaparecen cuando se requiere una descarga pesada a la CPU.',
          'Un malentendido común: los modelos MoE deben cargar TODOS los pesos de los expertos en VRAM al inicio, no solo el subconjunto activo. El coste de VRAM refleja los parámetros totales, no los activos. Para tareas de coding en un solo lenguaje (p. ej., trabajo solo en Python), un modelo denso como Qwen 3 Coder 14B a menudo supera a Mixtral 8x22B porque sus pesos están completamente especializados para código en lugar de distribuidos entre expertos de propósito general.',
          'Para una comparativa completa de los mejores modelos de coding en cada nivel de VRAM incluyendo alternativas densas, consulta la <a href="/es/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">guía de mejores LLMs locales para coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos MoE para coding',
        faqs: [
          {
            q: '¿Qué es un modelo MoE y por qué importa para coding local?',
            a: 'MoE significa Mixture of Experts. El modelo contiene muchas subredes especialistas (expertos) pero solo activa unas pocas por token. Esto significa que el cómputo de inferencia iguala a un modelo denso mucho más pequeño mientras el número total de parámetros da al modelo una base de conocimiento más amplia — útil para tareas de coding que abarcan múltiples lenguajes y frameworks.',
          },
          {
            q: '¿Cabe Mixtral 8x22B en una sola GPU?',
            a: 'En Q4_K_M, Mixtral 8x22B necesita ~26 GB de VRAM. Una sola RTX 3090 o RTX 4090 (24 GB) requiere una ligera reducción de cuantización a Q3_K_M (~22 GB) para ajustarse. Una tarjeta de 48 GB (p. ej., RTX A6000) lo admite en Q4. También funciona con dual RTX 3090 mediante llama.cpp con paralelismo tensorial.',
          },
          {
            q: '¿DeepSeek V2 es mejor que Mixtral 8x22B para coding?',
            a: 'En benchmarks de coding, DeepSeek V2 Q4 iguala o supera a Mixtral 8x22B con menor VRAM (~16 GB vs ~26 GB). Para configuraciones con VRAM limitado, DeepSeek V2 es la mejor opción. Para calidad de generación pura en un sistema de alto VRAM, ambos son competitivos.',
          },
          {
            q: '¿Qué comando de Ollama ejecuta Mixtral 8x22B?',
            a: '<code>ollama pull mixtral:8x7b</code> descarga el GGUF cuantizado Q4_K_M. Luego <code>ollama run mixtral:8x7b</code> lo inicia. Ollama asigna VRAM automáticamente y vierte a la RAM de la CPU si es necesario. Consulta los <a href="/es/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">requisitos de VRAM GPU por modelo</a> para confirmar que tu tarjeta puede manejarlo.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Melhores modelos MoE para programação local?',
    seoTitle: 'Melhores modelos MoE para programação 2026 | PromptQuorum',
    metaDescription: 'Mixtral 8x22B: 26 GB de VRAM, 46,7B parâmetros. DeepSeek V2: 16 GB de VRAM, top em programação. MoE ativa apenas parâmetros ativos. Resposta rápida.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores modelos MoE para programação local?',
        answer: 'Mixtral 8x22B e DeepSeek V2 são os melhores modelos MoE de programação para uso local, ativando apenas uma fração dos parâmetros totais por token para oferecer melhor qualidade por VRAM do que modelos densos. Ambos precisam de pelo menos 16 GB de VRAM em Q4, com Mixtral em ~26 GB e DeepSeek V2 em ~16 GB.',
        bullets: [
          'Mixtral 8x22B Q4_K_M: ~26 GB de VRAM, programação sólida, disponível no Ollama',
          'DeepSeek V2 Q4: ~16 GB de VRAM, pontuações top em benchmarks de programação',
          'Vantagem MoE: inferência mais rápida do que modelos densos comparáveis',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Os modelos MoE ativam apenas os parâmetros do especialista ativo por token — Mixtral 8x22B tem 46,7B parâmetros totais, mas apenas ~12,9B ativos por token',
          'Mixtral 8x22B Q4_K_M precisa de ~26 GB de VRAM, tornando-o uma carga de trabalho para GPU dupla ou GPU de alto VRAM',
          'DeepSeek V2 em Q4 cabe em ~16 GB de VRAM e alcança pontuações top em benchmarks de programação comparáveis a modelos densos muito maiores',
          'Para VRAM abaixo de 16 GB, modelos densos de programação 13B–14B como DeepSeek Coder 14B são mais práticos do que opções MoE',
        ],
      },
      body1: {
        title: 'Como a arquitetura MoE muda o cálculo de VRAM',
        content: [
          '<strong>Os modelos Mixture of Experts (MoE) roteiam cada token apenas por um subconjunto de camadas especializadas chamadas especialistas, de modo que o custo de inferência escala com os parâmetros ativos, não com os parâmetros totais.</strong> O Mixtral 8x22B tem 46,7 bilhões de parâmetros totais, mas apenas ~12,9 bilhões estão ativos por passagem direta — comparável a um modelo denso de 13B em custo computacional.',
          'Isso significa que o Mixtral 8x22B supera seu peso em qualidade de saída em relação ao custo de inferência por token. No entanto, todos os pesos dos especialistas devem ser carregados na VRAM na inicialização. Em Q4_K_M, o Mixtral 8x22B requer aproximadamente 26 GB de VRAM. Isso exige uma GPU de 24 GB (p.ex., RTX 3090/4090) com algum compromisso de quantização, ou uma configuração de GPU dupla.',
          'O DeepSeek V2 usa uma arquitetura MoE similar otimizada para tarefas de programação e requer aproximadamente 16 GB de VRAM em Q4, cabendo em uma única GPU de 16 GB ou 24 GB. Suas pontuações em benchmarks de programação equivalem a modelos duas a três vezes maiores em contagem de parâmetros ativos.',
        ],
        columns: ['Modelo', 'Parâmetros totais', 'Ativos por token', 'VRAM em Q4'],
        rows: [
          { 'Modelo': 'Mixtral 8x22B', 'Parâmetros totais': '46,7B', 'Ativos por token': '~12,9B', 'VRAM em Q4': '~26 GB' },
          { 'Modelo': 'DeepSeek V2', 'Parâmetros totais': '236B', 'Ativos por token': '~21B', 'VRAM em Q4': '~16 GB' },
        ],
      },
      body2: {
        title: 'Executar modelos MoE com o Ollama',
        content: [
          '<strong>O Mixtral 8x22B está disponível no Ollama via <code>ollama pull mixtral:8x7b</code>, que baixa o GGUF Q4_K_M automaticamente.</strong> O Ollama gerencia a alocação de camadas na VRAM disponível e fará offload parcial para a RAM da CPU se a VRAM for insuficiente, embora isso reduza significativamente a velocidade.',
          'Se você tiver apenas 16 GB de VRAM, o DeepSeek V2 Q4 é a melhor escolha de MoE. Cabe completamente em uma única placa de 16 GB e oferece throughput de programação de aproximadamente 15–20 tok/s em uma RTX 4080 ou equivalente. Para VRAM abaixo de 16 GB, mude para modelos densos — as vantagens do MoE desaparecem quando é necessário um offload pesado para a CPU.',
          'Um equívoco comum: os modelos MoE devem carregar TODOS os pesos dos especialistas na VRAM na inicialização, não apenas o subconjunto ativo. O custo de VRAM reflete os parâmetros totais, não os ativos. Para tarefas de programação em uma única linguagem (p.ex., trabalho somente em Python), um modelo denso como o Qwen 3 Coder 14B frequentemente supera o Mixtral 8x22B porque seus pesos são totalmente especializados em código, em vez de distribuídos entre especialistas de propósito geral.',
          'Para uma comparação completa dos melhores modelos de programação em cada nível de VRAM, incluindo alternativas densas, consulte o <a href="/pt/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">guia dos melhores LLMs locais para programação</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos MoE para programação',
        faqs: [
          {
            q: 'O que é um modelo MoE e por que importa para programação local?',
            a: 'MoE significa Mixture of Experts. O modelo contém muitas sub-redes especializadas (especialistas), mas ativa apenas algumas por token. Isso significa que o custo computacional de inferência equivale a um modelo denso muito menor, enquanto o número total de parâmetros dá ao modelo uma base de conhecimento mais ampla — útil para tarefas de programação que abrangem múltiplas linguagens e frameworks.',
          },
          {
            q: 'O Mixtral 8x22B cabe em uma única GPU?',
            a: 'Em Q4_K_M, o Mixtral 8x22B precisa de ~26 GB de VRAM. Uma única RTX 3090 ou RTX 4090 (24 GB) requer uma leve redução para Q3_K_M (~22 GB) para caber. Uma placa de 48 GB (p.ex., RTX A6000) o suporta em Q4. Dual RTX 3090 via llama.cpp com paralelismo tensorial também funciona.',
          },
          {
            q: 'O DeepSeek V2 é melhor do que o Mixtral 8x22B para programação?',
            a: 'Em benchmarks de programação, o DeepSeek V2 Q4 iguala ou supera o Mixtral 8x22B com menor VRAM (~16 GB vs ~26 GB). Para configurações com VRAM limitado, o DeepSeek V2 é a melhor escolha. Para qualidade de geração pura em um sistema de alto VRAM, ambos são competitivos.',
          },
          {
            q: 'Qual comando do Ollama executa o Mixtral 8x22B?',
            a: '<code>ollama pull mixtral:8x7b</code> baixa o GGUF quantizado Q4_K_M. Depois, <code>ollama run mixtral:8x7b</code> o inicia. O Ollama aloca a VRAM automaticamente e faz overflow para a RAM da CPU se necessário. Consulte os <a href="/pt/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">requisitos de VRAM de GPU por modelo</a> para confirmar que sua placa consegue lidar com isso.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'أفضل نماذج MoE للبرمجة المحلية؟',
    seoTitle: 'أفضل نماذج MoE للبرمجة المحلية 2026 | PromptQuorum',
    metaDescription: 'Mixtral 8x22B يحتاج 26 GB VRAM لـ46.7B معامل. DeepSeek V2 يعمل بـ16 GB VRAM ويتصدر معايير البرمجة. MoE تنشّط المعاملات النشطة فقط.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما هي أفضل نماذج MoE للبرمجة المحلية؟',
        answer: 'Mixtral 8x22B وDeepSeek V2 هما أفضل نماذج MoE للبرمجة للاستخدام المحلي، إذ تنشّطان جزءاً فقط من المعاملات الكلية لكل رمز لتقديم جودة أفضل لكل VRAM مقارنةً بالنماذج الكثيفة. كلاهما يحتاج على الأقل 16 GB VRAM في Q4، مع Mixtral عند ~26 GB وDeepSeek V2 عند ~16 GB.',
        bullets: [
          'Mixtral 8x22B Q4_K_M: ~26 GB VRAM، برمجة قوية، متاح في Ollama',
          'DeepSeek V2 Q4: ~16 GB VRAM، نتائج قمة في معايير البرمجة',
          'ميزة MoE: استدلال أسرع من النماذج الكثيفة المقارنة',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'نماذج MoE تنشّط فقط معاملات الخبير النشط لكل رمز — Mixtral 8x22B يحتوي 46.7B معامل كلي لكن ~12.9B فقط نشطة لكل مرور أمامي',
          'Mixtral 8x22B Q4_K_M يحتاج ~26 GB VRAM، مما يجعله حملاً لـGPU مزدوجة أو GPU بـVRAM عالٍ',
          'DeepSeek V2 في Q4 يتسع في ~16 GB VRAM ويحقق نتائج قمة في معايير البرمجة مقارنةً بنماذج كثيفة أكبر بكثير',
          'للـVRAM دون 16 GB، النماذج الكثيفة للبرمجة 13B–14B كـDeepSeek Coder 14B أكثر عملية من خيارات MoE',
        ],
      },
      body1: {
        title: 'كيف تغيّر بنية MoE حساب VRAM',
        content: [
          '<strong>نماذج Mixture of Experts (MoE) توجّه كل رمز فقط عبر مجموعة فرعية من الطبقات المتخصصة تسمى الخبراء، وبالتالي تكلفة الاستدلال تتناسب مع المعاملات النشطة لا الكلية.</strong> Mixtral 8x22B يحتوي 46.7 مليار معامل كلي لكن ~12.9 مليار فقط نشطة لكل مرور أمامي — مقارن لنموذج كثيف 13B في تكلفة الحساب.',
          'هذا يعني أن Mixtral 8x22B يتفوق على وزنه في جودة الإخراج نسبةً لتكلفة الاستدلال لكل رمز. لكن جميع أوزان الخبراء يجب تحميلها في VRAM عند بدء التشغيل. في Q4_K_M، Mixtral 8x22B يحتاج حوالي 26 GB VRAM. هذا يستلزم GPU بـ24 GB (مثل RTX 3090/4090) مع بعض التنازل في التكميم، أو إعداد GPU مزدوجة.',
          'DeepSeek V2 يستخدم بنية MoE مماثلة محسّنة لمهام البرمجة ويحتاج حوالي 16 GB VRAM في Q4، ليتناسب مع GPU واحدة 16 GB أو 24 GB. نتائجه في معايير البرمجة تعادل نماذج أكبر بمرتين أو ثلاث في عدد المعاملات النشطة.',
        ],
        columns: ['النموذج', 'المعاملات الكلية', 'النشطة لكل رمز', 'VRAM في Q4'],
        rows: [
          { 'النموذج': 'Mixtral 8x22B', 'المعاملات الكلية': '46.7B', 'النشطة لكل رمز': '~12.9B', 'VRAM في Q4': '~26 GB' },
          { 'النموذج': 'DeepSeek V2', 'المعاملات الكلية': '236B', 'النشطة لكل رمز': '~21B', 'VRAM في Q4': '~16 GB' },
        ],
      },
      body2: {
        title: 'تشغيل نماذج MoE مع Ollama',
        content: [
          '<strong>Mixtral 8x22B متاح في Ollama عبر <code>ollama pull mixtral:8x7b</code>، الذي ينزّل GGUF Q4_K_M تلقائياً.</strong> Ollama يدير توزيع الطبقات على VRAM المتاحة وسيقوم بتفريغ جزئي على RAM لـCPU إذا كانت VRAM غير كافية، وإن كان ذلك يخفض السرعة بشكل ملحوظ.',
          'إذا كانت لديك 16 GB VRAM فقط، DeepSeek V2 Q4 هو أفضل خيار MoE. يتسع كاملاً في بطاقة 16 GB واحدة ويقدم إنتاجية برمجة حوالي 15–20 رمز/ثانية على RTX 4080 أو ما يعادلها. للـVRAM دون 16 GB، انتقل للنماذج الكثيفة — مزايا MoE تختفي عند الحاجة لتفريغ ثقيل على CPU.',
          'سوء فهم شائع: نماذج MoE يجب أن تحمل جميع أوزان الخبراء في VRAM عند بدء التشغيل، ليس فقط المجموعة الفرعية النشطة. تكلفة VRAM تعكس المعاملات الكلية لا النشطة. لمهام البرمجة بلغة واحدة (مثل العمل بـPython فقط)، نموذج كثيف كـQwen 3 Coder 14B غالباً يتفوق على Mixtral 8x22B لأن أوزانه متخصصة كلياً في الكود بدلاً من التوزيع بين خبراء الأغراض العامة.',
          'للمقارنة الشاملة لأفضل نماذج البرمجة في كل مستوى VRAM بما في ذلك البدائل الكثيفة، راجع <a href="/ar/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">دليل أفضل نماذج اللغة الكبيرة المحلية للبرمجة</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج MoE للبرمجة',
        faqs: [
          {
            q: 'ما هو نموذج MoE ولماذا يهم للبرمجة المحلية؟',
            a: 'MoE تعني Mixture of Experts. النموذج يحتوي شبكات فرعية متخصصة كثيرة (خبراء) لكنه ينشّط عدداً قليلاً فقط لكل رمز. هذا يعني أن تكلفة حساب الاستدلال تعادل نموذجاً كثيفاً أصغر بكثير، بينما العدد الكلي للمعاملات يمنح النموذج قاعدة معرفية أوسع — مفيد لمهام البرمجة التي تمتد على لغات وأطر عمل متعددة.',
          },
          {
            q: 'هل يتسع Mixtral 8x22B في GPU واحدة؟',
            a: 'في Q4_K_M، Mixtral 8x22B يحتاج ~26 GB VRAM. RTX 3090 أو RTX 4090 واحدة (24 GB) تتطلب تخفيضاً طفيفاً إلى Q3_K_M (~22 GB) للتناسب. بطاقة 48 GB (مثل RTX A6000) تدعمه في Q4. Dual RTX 3090 عبر llama.cpp مع التوازي الموترات يعمل أيضاً.',
          },
          {
            q: 'هل DeepSeek V2 أفضل من Mixtral 8x22B للبرمجة؟',
            a: 'في معايير البرمجة، DeepSeek V2 Q4 يعادل أو يتفوق على Mixtral 8x22B بـVRAM أقل (~16 GB مقابل ~26 GB). للإعدادات ذات VRAM المحدودة، DeepSeek V2 هو الخيار الأفضل. لجودة توليد خالصة في نظام ذي VRAM عالٍ، كلاهما تنافسي.',
          },
          {
            q: 'ما أمر Ollama الذي يشغّل Mixtral 8x22B؟',
            a: '<code>ollama pull mixtral:8x7b</code> ينزّل GGUF المكمَّم Q4_K_M. ثم <code>ollama run mixtral:8x7b</code> يبدأ تشغيله. Ollama يوزع VRAM تلقائياً ويفيض إلى RAM لـCPU عند الضرورة. راجع <a href="/ar/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">متطلبات VRAM لـGPU لكل نموذج</a> للتأكد من قدرة بطاقتك.',
          },
        ],
      },
    },
  },
}
