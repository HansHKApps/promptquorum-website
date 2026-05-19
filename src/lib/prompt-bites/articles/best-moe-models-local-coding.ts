import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best MoE Models for Local Coding?',
    seoTitle: 'Best MoE for Local Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Best MoE models for local coding: Mixtral 8x7B (needs 26 GB VRAM) and DeepSeek V2 (needs 16 GB at Q4). MoE models activate only a subset of parameters.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Mixtral 8x7B', 'DeepSeek V2'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Developers evaluating MoE models for local coding tasks',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-14b-models-coding', 'qwen-14b-vs-llama-8b'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best MoE models for local coding?',
        answer: 'Mixtral 8x7B and DeepSeek V2 are the top MoE coding models for local use. MoE models activate only a fraction of parameters per token, giving better quality-per-VRAM than dense models of similar total size. Both require at least 16 GB VRAM at Q4.',
        bullets: [
          'Mixtral 8x7B Q4_K_M: ~26 GB VRAM, strong coding, available on Ollama',
          'DeepSeek V2 Q4: ~16 GB VRAM, top coding benchmark scores',
          'MoE advantage: faster inference than comparable dense models',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Beste MoE-Modelle für lokales Coding?',
        answer: 'Mixtral 8x7B und DeepSeek V2 sind die führenden MoE-Coding-Modelle für den lokalen Einsatz. MoE-Modelle aktivieren pro Token nur einen Bruchteil der Parameter, was eine bessere Qualität pro VRAM als vergleichbar große Dense-Modelle ergibt. Beide benötigen mindestens 16 GB VRAM bei Q4.',
        bullets: [
          'Mixtral 8x7B Q4_K_M: ~26 GB VRAM, starkes Coding, auf Ollama verfügbar',
          'DeepSeek V2 Q4: ~16 GB VRAM, führende Coding-Benchmark-Werte',
          'MoE-Vorteil: schnellere Inferenz als vergleichbare Dense-Modelle',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleurs modèles MoE pour le codage local ?',
        answer: 'Mixtral 8x7B et DeepSeek V2 sont les meilleurs modèles MoE de codage pour un usage local. Les modèles MoE n\'activent qu\'une fraction des paramètres par token, offrant une meilleure qualité par Go de VRAM que les modèles denses de taille totale similaire. Les deux nécessitent au moins 16 Go de VRAM en Q4.',
        bullets: [
          'Mixtral 8x7B Q4_K_M : ~26 Go de VRAM, codage solide, disponible sur Ollama',
          'DeepSeek V2 Q4 : ~16 Go de VRAM, meilleures performances sur les benchmarks de codage',
          'Avantage MoE : inférence plus rapide que les modèles denses comparables',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルコーディングに最適な MoE モデルは？',
        answer: 'Mixtral 8x7B と DeepSeek V2 がローカル使用に最適な MoE コーディングモデルです。MoE モデルはトークンごとにパラメータの一部のみをアクティブにするため、同じ総サイズの Dense モデルより VRAM あたりの品質が高くなります。Q4 では両方とも最低 16 GB VRAM が必要です。',
        bullets: [
          'Mixtral 8x7B Q4_K_M：~26 GB VRAM、強力なコーディング、Ollama で利用可能',
          'DeepSeek V2 Q4：~16 GB VRAM、コーディングベンチマーク最高スコア',
          'MoE の利点：同等の Dense モデルより高速な推論',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '本地编程最佳 MoE 模型是什么？',
        answer: 'Mixtral 8x7B 和 DeepSeek V2 是本地使用的顶级 MoE 编程模型。MoE 模型每个 token 只激活一部分参数，相比总参数量相近的稠密模型，每 GB VRAM 能获得更高质量。两者 Q4 量化都需要至少 16 GB VRAM。',
        bullets: [
          'Mixtral 8x7B Q4_K_M：~26 GB VRAM，编程能力强，Ollama 可用',
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
          'MoE models activate only active-expert parameters per token — Mixtral 8x7B has 46.7B total params but only ~12.9B active per token',
          'Mixtral 8x7B Q4_K_M requires ~26 GB VRAM, making it a dual-GPU or high-VRAM single-GPU workload',
          'DeepSeek V2 at Q4 fits in ~16 GB VRAM and achieves top coding benchmark scores comparable to much larger dense models',
          'For VRAM below 16 GB, dense 13B–14B coding models like DeepSeek Coder 14B are more practical than MoE options',
        ],
      },
      body1: {
        title: 'How MoE Architecture Changes the VRAM Math',
        content: [
          '<strong>Mixture of Experts (MoE) models route each token through only a subset of specialist layers called experts, so inference cost scales with active parameters, not total parameters.</strong> Mixtral 8x7B has 46.7 billion total parameters but only ~12.9 billion are active per forward pass — comparable to a 13B dense model in compute cost.',
          'This means Mixtral 8x7B punches above its weight in output quality relative to the inference cost per token. However, all expert weights must be loaded into VRAM at startup. At Q4_K_M, Mixtral 8x7B requires approximately 26 GB of VRAM. This necessitates either a 24 GB single GPU (e.g., RTX 3090/4090) with some quantization compromise, or a dual-GPU setup.',
          'DeepSeek V2 uses a similar MoE architecture optimized for coding tasks and requires approximately 16 GB VRAM at Q4, fitting on a single 16 GB or 24 GB GPU. Its coding benchmark scores match models two to three times larger in active parameter count.',
        ],
        columns: ['Model', 'Total Params', 'Active per Token', 'VRAM at Q4'],
        rows: [
          { 'Model': 'Mixtral 8x7B', 'Total Params': '46.7B', 'Active per Token': '~12.9B', 'VRAM at Q4': '~26 GB' },
          { 'Model': 'DeepSeek V2', 'Total Params': '236B', 'Active per Token': '~21B', 'VRAM at Q4': '~16 GB' },
        ],
      },
      body2: {
        title: 'Running MoE Models with Ollama',
        content: [
          '<strong>Mixtral 8x7B is available on Ollama via <code>ollama pull mixtral:8x7b</code>, which downloads the Q4_K_M GGUF automatically.</strong> Ollama handles layer allocation across available VRAM and will partial-offload to CPU RAM if VRAM is insufficient, though this reduces speed significantly.',
          'If you have only 16 GB VRAM, DeepSeek V2 Q4 is the better MoE choice. It fits entirely on a single 16 GB card and delivers coding throughput of approximately 15–20 tok/s on an RTX 4080 or equivalent. For VRAM below 16 GB, switch to dense models — MoE benefits disappear when heavy CPU offloading is required.',
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
            q: 'Does Mixtral 8x7B fit on a single GPU?',
            a: 'At Q4_K_M, Mixtral 8x7B needs ~26 GB VRAM. A single RTX 3090 or RTX 4090 (24 GB) requires a slight quantization reduction to Q3_K_M (~22 GB) to fit. A 48 GB card (e.g., RTX A6000) fits it at Q4. Dual RTX 3090 via llama.cpp with tensor parallelism also works.',
          },
          {
            q: 'Is DeepSeek V2 better than Mixtral 8x7B for coding?',
            a: 'On coding benchmarks, DeepSeek V2 Q4 matches or exceeds Mixtral 8x7B at lower VRAM (~16 GB vs ~26 GB). For VRAM-constrained setups, DeepSeek V2 is the better choice. For pure generation quality on a high-VRAM system, both are competitive.',
          },
          {
            q: 'What ollama command runs Mixtral 8x7B?',
            a: '<code>ollama pull mixtral:8x7b</code> downloads the Q4_K_M quantized GGUF. Then <code>ollama run mixtral:8x7b</code> starts it. Ollama auto-allocates VRAM and spills to CPU RAM if needed. See <a href="/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">GPU VRAM requirements by model</a> to confirm your card can handle it.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Beste MoE-Modelle für lokales Coding?',
    seoTitle: 'Beste MoE-Modelle Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Beste MoE-Modelle für lokales Coding: Mixtral 8x7B (benötigt 26 GB VRAM) und DeepSeek V2 (16 GB bei Q4). MoE-Modelle aktivieren nur einen Teil der Parameter.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Beste MoE-Modelle für lokales Coding?',
        answer: 'Mixtral 8x7B und DeepSeek V2 sind die führenden MoE-Coding-Modelle für den lokalen Einsatz. MoE-Modelle aktivieren pro Token nur einen Bruchteil der Parameter, was eine bessere Qualität pro VRAM als vergleichbar große Dense-Modelle ergibt. Beide benötigen mindestens 16 GB VRAM bei Q4.',
        bullets: [
          'Mixtral 8x7B Q4_K_M: ~26 GB VRAM, starkes Coding, auf Ollama verfügbar',
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
          'MoE-Modelle aktivieren pro Token nur aktive Experten-Parameter — Mixtral 8x7B hat 46,7B Gesamtparameter, aber nur ~12,9B aktiv pro Token',
          'Mixtral 8x7B Q4_K_M benötigt ~26 GB VRAM — geeignet für Dual-GPU oder High-VRAM-Setups',
          'DeepSeek V2 bei Q4 passt in ~16 GB VRAM und erzielt führende Coding-Benchmark-Werte',
          'Unter 16 GB VRAM sind Dense-Coding-Modelle wie DeepSeek Coder 14B praktischer als MoE-Optionen',
        ],
      },
      body1: {
        title: 'Wie die MoE-Architektur die VRAM-Rechnung verändert',
        content: [
          '<strong>Mixture of Experts (MoE)-Modelle leiten jeden Token nur durch eine Teilmenge spezialisierter Schichten (Experten), sodass die Inferenzkosten mit den aktiven Parametern skalieren, nicht mit den Gesamtparametern.</strong> Mixtral 8x7B hat 46,7 Milliarden Gesamtparameter, aber nur ~12,9 Milliarden sind pro Vorwärtsdurchlauf aktiv — vergleichbar mit einem 13B Dense-Modell in Rechenkosten.',
          'Das bedeutet, Mixtral 8x7B liefert im Vergleich zu den Inferenzkosten pro Token eine überdurchschnittliche Ausgabequalität. Allerdings müssen alle Experten-Gewichte beim Start in den VRAM geladen werden. Bei Q4_K_M benötigt Mixtral 8x7B ca. 26 GB VRAM — entweder eine 24-GB-Einzelkarte mit leichtem Quantisierungskompromiss oder ein Dual-GPU-Setup.',
          'DeepSeek V2 verwendet eine ähnliche MoE-Architektur, die für Coding-Aufgaben optimiert ist, und benötigt bei Q4 ca. 16 GB VRAM. Seine Coding-Benchmark-Werte entsprechen Modellen mit zwei- bis dreifach größerem aktiven Parameteranzahl.',
        ],
        columns: ['Modell', 'Gesamtparameter', 'Aktiv pro Token', 'VRAM bei Q4'],
        rows: [
          { 'Modell': 'Mixtral 8x7B', 'Gesamtparameter': '46,7B', 'Aktiv pro Token': '~12,9B', 'VRAM bei Q4': '~26 GB' },
          { 'Modell': 'DeepSeek V2', 'Gesamtparameter': '236B', 'Aktiv pro Token': '~21B', 'VRAM bei Q4': '~16 GB' },
        ],
      },
      body2: {
        title: 'MoE-Modelle mit Ollama ausführen',
        content: [
          '<strong>Mixtral 8x7B ist auf Ollama via <code>ollama pull mixtral:8x7b</code> verfügbar, was das Q4_K_M GGUF automatisch herunterlädt.</strong> Ollama übernimmt die Layer-Zuteilung über den verfügbaren VRAM und lagert bei unzureichendem VRAM partiell auf den CPU-RAM aus, was jedoch die Geschwindigkeit deutlich reduziert.',
          'Wenn Sie nur 16 GB VRAM haben, ist DeepSeek V2 Q4 die bessere MoE-Wahl. Es passt vollständig auf eine 16-GB-Karte und liefert einen Coding-Durchsatz von ca. 15–20 tok/s auf einer RTX 4080 oder ähnlichem. Unter 16 GB VRAM sollten Sie auf Dense-Modelle wechseln — MoE-Vorteile verschwinden bei starkem CPU-Offloading.',
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
            q: 'Passt Mixtral 8x7B auf eine einzelne GPU?',
            a: 'Bei Q4_K_M benötigt Mixtral 8x7B ~26 GB VRAM. Eine RTX 3090 oder RTX 4090 (24 GB) erfordert eine leichte Quantisierungsreduktion auf Q3_K_M (~22 GB). Eine 48-GB-Karte (z.B. RTX A6000) passt bei Q4. Dual RTX 3090 via llama.cpp mit Tensor-Parallelismus funktioniert ebenfalls.',
          },
          {
            q: 'Ist DeepSeek V2 für Coding besser als Mixtral 8x7B?',
            a: 'In Coding-Benchmarks entspricht DeepSeek V2 Q4 Mixtral 8x7B oder übertrifft es bei niedrigerem VRAM (~16 GB vs. ~26 GB). Für VRAM-begrenzte Setups ist DeepSeek V2 die bessere Wahl. Bei reiner Generierungsqualität auf einem High-VRAM-System sind beide konkurrenzfähig.',
          },
          {
            q: 'Mit welchem Ollama-Befehl wird Mixtral 8x7B gestartet?',
            a: '<code>ollama pull mixtral:8x7b</code> lädt das Q4_K_M-quantisierte GGUF herunter. Dann startet <code>ollama run mixtral:8x7b</code> es. Ollama verteilt den VRAM automatisch und lagert bei Bedarf auf den CPU-RAM aus.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleurs modèles MoE pour le codage local ?',
    seoTitle: 'Meilleurs MoE codage 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Meilleurs modèles MoE pour codage local : Mixtral 8x7B (26 Go VRAM) et DeepSeek V2 (16 Go en Q4). Les MoE activent uniquement un sous-ensemble de paramètres.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleurs modèles MoE pour le codage local ?',
        answer: 'Mixtral 8x7B et DeepSeek V2 sont les meilleurs modèles MoE de codage pour un usage local. Les modèles MoE n\'activent qu\'une fraction des paramètres par token, offrant une meilleure qualité par Go de VRAM que les modèles denses de taille totale similaire. Les deux nécessitent au moins 16 Go de VRAM en Q4.',
        bullets: [
          'Mixtral 8x7B Q4_K_M : ~26 Go de VRAM, codage solide, disponible sur Ollama',
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
          'Les modèles MoE n\'activent que les paramètres d\'experts actifs par token — Mixtral 8x7B a 46,7B params totaux mais seulement ~12,9B actifs par token',
          'Mixtral 8x7B Q4_K_M nécessite ~26 Go de VRAM — adapté aux setups dual-GPU ou GPU haute VRAM',
          'DeepSeek V2 en Q4 tient dans ~16 Go de VRAM et atteint les meilleures performances sur les benchmarks de codage',
          'Sous 16 Go de VRAM, les modèles denses de codage comme DeepSeek Coder 14B sont plus pratiques que les options MoE',
        ],
      },
      body1: {
        title: 'Comment l\'architecture MoE change le calcul VRAM',
        content: [
          '<strong>Les modèles Mixture of Experts (MoE) dirigent chaque token uniquement à travers un sous-ensemble de couches spécialisées appelées experts, donc le coût d\'inférence évolue avec les paramètres actifs, pas les paramètres totaux.</strong> Mixtral 8x7B a 46,7 milliards de paramètres totaux mais seulement ~12,9 milliards sont actifs par passe — comparable à un modèle dense 13B en coût de calcul.',
          'Cela signifie que Mixtral 8x7B surpasse son poids en qualité de sortie par rapport au coût d\'inférence par token. Cependant, tous les poids d\'experts doivent être chargés en VRAM au démarrage. En Q4_K_M, Mixtral 8x7B nécessite environ 26 Go de VRAM — soit un GPU 24 Go avec léger compromis de quantisation, soit un setup dual-GPU.',
          'DeepSeek V2 utilise une architecture MoE similaire optimisée pour le codage et nécessite environ 16 Go de VRAM en Q4. Ses scores de benchmarks de codage correspondent à des modèles deux à trois fois plus grands en nombre de paramètres actifs.',
        ],
        columns: ['Modèle', 'Params totaux', 'Actifs par token', 'VRAM en Q4'],
        rows: [
          { 'Modèle': 'Mixtral 8x7B', 'Params totaux': '46,7B', 'Actifs par token': '~12,9B', 'VRAM en Q4': '~26 Go' },
          { 'Modèle': 'DeepSeek V2', 'Params totaux': '236B', 'Actifs par token': '~21B', 'VRAM en Q4': '~16 Go' },
        ],
      },
      body2: {
        title: 'Faire tourner des modèles MoE avec Ollama',
        content: [
          '<strong>Mixtral 8x7B est disponible sur Ollama via <code>ollama pull mixtral:8x7b</code>, qui télécharge automatiquement le GGUF Q4_K_M.</strong> Ollama gère l\'allocation des couches sur la VRAM disponible et déchargera partiellement vers la RAM CPU si la VRAM est insuffisante, mais cela réduit significativement la vitesse.',
          'Si vous disposez de seulement 16 Go de VRAM, DeepSeek V2 Q4 est le meilleur choix MoE. Il tient entièrement sur un GPU 16 Go et délivre un débit de codage d\'environ 15–20 tok/s sur une RTX 4080 ou équivalent. Sous 16 Go de VRAM, passez aux modèles denses — les avantages MoE disparaissent avec un déchargement CPU important.',
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
            q: 'Mixtral 8x7B tient-il sur un seul GPU ?',
            a: 'En Q4_K_M, Mixtral 8x7B nécessite ~26 Go de VRAM. Une RTX 3090 ou RTX 4090 (24 Go) requiert une légère réduction à Q3_K_M (~22 Go). Une carte 48 Go (ex. RTX A6000) le supporte en Q4. Dual RTX 3090 via llama.cpp avec parallélisme tensoriel fonctionne également.',
          },
          {
            q: 'DeepSeek V2 est-il meilleur que Mixtral 8x7B pour le codage ?',
            a: 'Sur les benchmarks de codage, DeepSeek V2 Q4 égale ou surpasse Mixtral 8x7B avec moins de VRAM (~16 Go vs ~26 Go). Pour les configurations VRAM limitées, DeepSeek V2 est le meilleur choix. Sur un système haute VRAM, les deux sont compétitifs.',
          },
          {
            q: 'Quelle commande Ollama lance Mixtral 8x7B ?',
            a: '<code>ollama pull mixtral:8x7b</code> télécharge le GGUF quantisé Q4_K_M. Ensuite, <code>ollama run mixtral:8x7b</code> le lance. Ollama répartit automatiquement la VRAM et décharge vers la RAM CPU si nécessaire.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'ローカルコーディングに最適な MoE モデルは？',
    seoTitle: 'ローカルコーディング向け MoE モデル | Prompt Bites | PromptQuorum',
    metaDescription: 'ローカルコーディング最適 MoE モデル：Mixtral 8x7B（26 GB VRAM 必要）と DeepSeek V2（Q4 で 16 GB）。MoE はトークンごとに一部のパラメータのみ使用。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'ローカルコーディングに最適な MoE モデルは？',
        answer: 'Mixtral 8x7B と DeepSeek V2 がローカル使用に最適な MoE コーディングモデルです。MoE モデルはトークンごとにパラメータの一部のみをアクティブにするため、同じ総サイズの Dense モデルより VRAM あたりの品質が高くなります。Q4 では両方とも最低 16 GB VRAM が必要です。',
        bullets: [
          'Mixtral 8x7B Q4_K_M：~26 GB VRAM、強力なコーディング、Ollama で利用可能',
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
          'MoE モデルはトークンごとに有効なエキスパートパラメータのみをアクティブにする — Mixtral 8x7B は総パラメータ 46.7B だがトークンごとにアクティブなのは ~12.9B',
          'Mixtral 8x7B Q4_K_M は ~26 GB VRAM が必要 — デュアル GPU または高 VRAM 単一 GPU 向け',
          'DeepSeek V2（Q4）は ~16 GB VRAM に収まり、トップクラスのコーディングベンチマークスコアを達成',
          '16 GB VRAM 未満では、MoE より DeepSeek Coder 14B などの Dense コーディングモデルの方が実用的',
        ],
      },
      body1: {
        title: 'MoE アーキテクチャが VRAM の計算を変える仕組み',
        content: [
          '<strong>Mixture of Experts（MoE）モデルは各トークンをエキスパートと呼ばれる専門レイヤーのサブセットのみを通してルーティングするため、推論コストは総パラメータではなくアクティブパラメータに比例します。</strong> Mixtral 8x7B は総パラメータ 467 億を持ちますが、1 回のフォワードパスでアクティブになるのは ~129 億のみ — 計算コストは 13B Dense モデルと同等です。',
          'これはつまり、Mixtral 8x7B はトークンあたりの推論コストに対して出力品質が非常に高いことを意味します。ただし、全エキスパートの重みはスタートアップ時に VRAM に読み込む必要があります。Q4_K_M では Mixtral 8x7B に約 26 GB の VRAM が必要です。',
          'DeepSeek V2 はコーディングタスク向けに最適化した同様の MoE アーキテクチャを使用し、Q4 で約 16 GB VRAM を必要とします。そのコーディングベンチマークスコアは、アクティブパラメータ数が 2〜3 倍大きいモデルに匹敵します。',
        ],
        columns: ['モデル', '総パラメータ', 'トークンあたりアクティブ', 'Q4 での VRAM'],
        rows: [
          { 'モデル': 'Mixtral 8x7B', '総パラメータ': '46.7B', 'トークンあたりアクティブ': '~12.9B', 'Q4 での VRAM': '~26 GB' },
          { 'モデル': 'DeepSeek V2', '総パラメータ': '236B', 'トークンあたりアクティブ': '~21B', 'Q4 での VRAM': '~16 GB' },
        ],
      },
      body2: {
        title: 'Ollama で MoE モデルを実行する',
        content: [
          '<strong>Mixtral 8x7B は Ollama の <code>ollama pull mixtral:8x7b</code> コマンドで利用可能で、Q4_K_M GGUF を自動ダウンロードします。</strong> Ollama は利用可能な VRAM にレイヤーを割り当て、VRAM が不足している場合はパーシャルオフロードで CPU RAM に溢れさせますが、速度は大幅に低下します。',
          '16 GB VRAM しかない場合、DeepSeek V2 Q4 が優れた MoE の選択肢です。16 GB カード 1 枚に完全に収まり、RTX 4080 相当の環境で約 15〜20 tok/s のコーディングスループットを発揮します。16 GB VRAM 未満では Dense モデルに切り替えてください — 大幅な CPU オフロードが必要になると MoE の利点がなくなります。',
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
            q: 'Mixtral 8x7B は 1 枚の GPU に収まりますか？',
            a: 'Q4_K_M では Mixtral 8x7B に ~26 GB VRAM が必要です。RTX 3090 または RTX 4090（24 GB）では Q3_K_M（~22 GB）に若干下げる必要があります。48 GB カード（例：RTX A6000）なら Q4 で収まります。llama.cpp でテンソル並列処理を使ったデュアル RTX 3090 も動作します。',
          },
          {
            q: 'コーディングでは DeepSeek V2 と Mixtral 8x7B どちらが優れていますか？',
            a: 'コーディングベンチマークでは、DeepSeek V2 Q4 は Mixtral 8x7B と同等か、より少ない VRAM（~16 GB 対 ~26 GB）で上回ります。VRAM が限られた環境では DeepSeek V2 が優れた選択肢です。高 VRAM システムでの純粋な生成品質では両者は競争力があります。',
          },
          {
            q: 'Mixtral 8x7B を起動する Ollama コマンドは？',
            a: '<code>ollama pull mixtral:8x7b</code> で Q4_K_M 量子化 GGUF をダウンロードします。次に <code>ollama run mixtral:8x7b</code> で起動します。Ollama は VRAM を自動配分し、必要に応じて CPU RAM にオフロードします。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '本地编程最佳 MoE 模型是什么？',
    seoTitle: '2026年本地编程最佳MoE模型推荐 | Prompt Bites | PromptQuorum',
    metaDescription: '本地编程最佳 MoE 模型：Mixtral 8x7B（需 26 GB VRAM）和 DeepSeek V2（Q4 需 16 GB）。MoE 模型每次只激活部分参数。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '本地编程最佳 MoE 模型是什么？',
        answer: 'Mixtral 8x7B 和 DeepSeek V2 是本地使用的顶级 MoE 编程模型。MoE 模型每个 token 只激活一部分参数，相比总参数量相近的稠密模型，每 GB VRAM 能获得更高质量。两者 Q4 量化都需要至少 16 GB VRAM。',
        bullets: [
          'Mixtral 8x7B Q4_K_M：~26 GB VRAM，编程能力强，Ollama 可用',
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
          'MoE 模型每次 token 只激活活跃专家参数——Mixtral 8x7B 总参数 46.7B，每 token 只激活约 12.9B',
          'Mixtral 8x7B Q4_K_M 需要约 26 GB VRAM——适合双 GPU 或高 VRAM 单 GPU 配置',
          'DeepSeek V2（Q4）适配约 16 GB VRAM，并在编程基准测试中取得顶级成绩',
          '低于 16 GB VRAM 时，DeepSeek Coder 14B 等稠密编程模型比 MoE 更实用',
        ],
      },
      body1: {
        title: 'MoE 架构如何改变 VRAM 计算',
        content: [
          '<strong>Mixture of Experts（MoE）模型将每个 token 只路由通过称为"专家"的专门层子集，因此推理成本随活跃参数而非总参数扩展。</strong> Mixtral 8x7B 有 467 亿总参数，但每次前向传播只有约 129 亿处于活跃状态——计算成本相当于 13B 稠密模型。',
          '这意味着 Mixtral 8x7B 相对于每 token 推理成本而言，输出质量远超预期。但所有专家权重必须在启动时加载到 VRAM 中。Q4_K_M 下，Mixtral 8x7B 约需 26 GB VRAM——需要 24 GB 单卡（需略微降低量化）或双 GPU 配置。',
          'DeepSeek V2 采用针对编程任务优化的类似 MoE 架构，Q4 下约需 16 GB VRAM。其编程基准测试成绩与活跃参数量多出 2~3 倍的模型相当。',
        ],
        columns: ['模型', '总参数', '每 token 活跃参数', 'Q4 下的 VRAM'],
        rows: [
          { '模型': 'Mixtral 8x7B', '总参数': '46.7B', '每 token 活跃参数': '~12.9B', 'Q4 下的 VRAM': '~26 GB' },
          { '模型': 'DeepSeek V2', '总参数': '236B', '每 token 活跃参数': '~21B', 'Q4 下的 VRAM': '~16 GB' },
        ],
      },
      body2: {
        title: '使用 Ollama 运行 MoE 模型',
        content: [
          '<strong>Mixtral 8x7B 可通过 Ollama 的 <code>ollama pull mixtral:8x7b</code> 命令获取，会自动下载 Q4_K_M GGUF。</strong> Ollama 处理跨可用 VRAM 的层分配，若 VRAM 不足会部分卸载至 CPU 内存，但这会显著降低速度。',
          '如果只有 16 GB VRAM，DeepSeek V2 Q4 是更好的 MoE 选择。它完全适配 16 GB 显卡，在 RTX 4080 或同等设备上编程吞吐量约 15~20 tok/s。低于 16 GB VRAM 时请切换至稠密模型——大量 CPU 卸载时 MoE 的优势会消失。',
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
            q: 'Mixtral 8x7B 能在单张 GPU 上运行吗？',
            a: 'Q4_K_M 下，Mixtral 8x7B 需要约 26 GB VRAM。RTX 3090 或 RTX 4090（24 GB）需要略降至 Q3_K_M（~22 GB）才能放入。48 GB 显卡（如 RTX A6000）可在 Q4 下运行。通过 llama.cpp 张量并行的双 RTX 3090 也可以。',
          },
          {
            q: 'DeepSeek V2 编程能力是否优于 Mixtral 8x7B？',
            a: '在编程基准测试中，DeepSeek V2 Q4 以更少的 VRAM（~16 GB 对比 ~26 GB）达到与 Mixtral 8x7B 相当或更好的成绩。对于 VRAM 受限的配置，DeepSeek V2 是更好的选择。在高 VRAM 系统上，两者都具有竞争力。',
          },
          {
            q: '启动 Mixtral 8x7B 的 Ollama 命令是什么？',
            a: '<code>ollama pull mixtral:8x7b</code> 下载 Q4_K_M 量化 GGUF；<code>ollama run mixtral:8x7b</code> 启动模型。Ollama 自动分配 VRAM，不足时卸载到 CPU 内存。',
          },
        ],
      },
    },
  },
}
