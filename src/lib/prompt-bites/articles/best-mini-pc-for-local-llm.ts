import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best Mini PC for Local LLM?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-en.webp',
    dateModified: '2026-06-21',
    seoTitle: 'Best Mini PC for Local LLM 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4 hits ~18 tok/s on 7B Q4. Minisforum UM790 Pro scales to 64 GB DDR5. Beelink SER8: ~8 tok/s on a budget. Three mini PC picks for local LLM 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Minisforum UM790 Pro', 'Mac Mini M4'],
    educationalLevel: 'Intermediate',
    audience: 'Users buying a mini PC to run LLMs locally',
    parentArticle: '/local-llms/best-mini-pcs-local-llm',
    siblingBites: ['best-14b-models-coding', 'qwen-14b-vs-llama-8b'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best mini PC for local LLM?',
        answer: 'Three mini PCs stand out for local LLM inference: Mac Mini M4 delivers ~18 tok/s with unified memory and zero VRAM bottleneck, Minisforum UM790 Pro scales to 64 GB DDR5 for larger models, and Beelink SER8 offers value at ~8 tok/s with Ryzen 9 8845HS. All three run 7–13B Q4 models without a discrete GPU.',
        bullets: [
          'Mac Mini M4: fastest for LLMs, ~18 tok/s on Llama 3 8B, power-efficient',
          'Minisforum UM790 Pro: AMD Radeon 780M iGPU, up to 64 GB unified RAM',
          'Beelink SER8: Ryzen 9 8845HS, ~8 tok/s, budget-friendly alternative',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bester Mini-PC für lokale LLMs?',
        answer: 'Drei Mini-PCs zeichnen sich aus: Mac Mini M4 liefert ~18 tok/s mit einheitlichem Speicher und ohne VRAM-Engpass, Minisforum UM790 Pro skaliert auf 64 GB DDR5 für größere Modelle, Beelink SER8 bietet Wert mit ~8 tok/s und Ryzen 9 8845HS. Alle drei laufen 7–13B Q4-Modelle ohne diskrete GPU aus.',
        bullets: [
          'Mac Mini M4: am schnellsten für LLMs, ~18 tok/s auf Llama 3 8B, energieeffizient',
          'Minisforum UM790 Pro: AMD Radeon 780M iGPU, bis zu 64 GB Unified RAM',
          'Beelink SER8: Ryzen 9 8845HS, ~8 tok/s, budgetfreundliche Alternative',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur mini PC pour LLM local ?',
        answer: 'Trois mini PC se distinguent : Mac Mini M4 délivre ~18 tok/s avec mémoire unifiée sans goulot VRAM, Minisforum UM790 Pro monte jusqu\'à 64 Go DDR5 pour modèles plus grands, Beelink SER8 offre valeur avec ~8 tok/s et Ryzen 9 8845HS. Les trois exécutent des modèles 7–13B Q4 sans GPU dédié.',
        bullets: [
          'Mac Mini M4 : le plus rapide pour les LLMs, ~18 tok/s sur Llama 3 8B, économe en énergie',
          'Minisforum UM790 Pro : iGPU AMD Radeon 780M, jusqu\'à 64 Go de RAM unifiée',
          'Beelink SER8 : Ryzen 9 8845HS, ~8 tok/s, alternative économique',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルLLMに最適なミニPCは？',
        answer: 'Mac Mini M4は統合メモリで~18 tok/sを提供し、VRAMボトルネックなし、Minisforum UM790 Proは大規模モデル向けに64 GB DDR5スケーリング、Beelink SER8はRyzen 9 8845HSで~8 tok/sの価値を提供。3つすべて専用GPUなしで7–13B Q4モデルを実行可能です。',
        bullets: [
          'Mac Mini M4：LLMに最速、Llama 3 8Bで~18 tok/s、省電力',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU、最大64 GBユニファイドRAM',
          'Beelink SER8：Ryzen 9 8845HS、~8 tok/s、予算に優しい代替',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '本地 LLM 最佳迷你电脑是什么？',
        answer: 'Mac Mini M4 以统一内存提供 ~18 tok/s，无 VRAM 瓶颈，Minisforum UM790 Pro 可扩展至 64 GB DDR5 运行更大模型，Beelink SER8 用 Ryzen 9 8845HS 提供 ~8 tok/s 的性价比。三者均可无独立 GPU 运行 7–13B Q4 模型。',
        bullets: [
          'Mac Mini M4：LLM 速度最快，Llama 3 8B 约 18 tok/s，节能',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU，最高 64 GB 统一内存',
          'Beelink SER8：Ryzen 9 8845HS，~8 tok/s，经济实惠替代',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4 starts at ~599 USD, uses Apple Metal for GPU acceleration, and reaches ~18 tok/s on a 7B Q4 model using only ~30 W under load',
          'Minisforum UM790 Pro (AMD Ryzen 9 7940HS) supports up to 64 GB DDR5 RAM and ~8 tok/s on a 7B model via ROCm on Linux',
          'Apple Silicon\'s unified memory architecture is the key advantage — the M4\'s RAM is shared between CPU and GPU with no VRAM bottleneck',
          'Beelink SER8 (Ryzen 9 8845HS) is the budget pick: same ~8 tok/s as the UM790 Pro but CPU-based inference, lower power draw, and no Linux ROCm setup required',
        ],
      },
      body1: {
        title: 'Mac Mini M4 Leads on Speed and Efficiency',
        content: [
          '<strong>The Mac Mini M4 achieves ~18 tokens per second on a 7B Q4 model, consumes ~30 W under load, and starts at approximately 599 USD — making it the fastest mini PC for local LLM inference.</strong> The M4 chip uses unified memory architecture, meaning the same physical RAM is shared between CPU and GPU with no memory copy overhead. For users prioritizing speed, the M4 is the top choice.',
          'The Minisforum UM790 Pro is the scaling option: AMD Ryzen 9 7940HS with Radeon 780M iGPU, up to 64 GB DDR5 configured as unified memory, and ~8 tok/s on Linux with ROCm. The Beelink SER8 (Ryzen 9 8845HS) matches the UM790 Pro on throughput but uses CPU-only inference — no discrete GPU required — making it the budget-friendly choice for users on Windows or Linux who want to avoid ROCm setup.',
          'The table below compares the three mini PCs across CPU/GPU, best memory configuration, and measured LLM speed.',
        ],
        columns: ['Mini PC', 'CPU/GPU', 'Best Config', 'LLM Speed (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Best Config': '16 GB unified', 'LLM Speed (7B Q4)': '~18 tok/s' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Best Config': '64 GB DDR5', 'LLM Speed (7B Q4)': '~8 tok/s' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', 'Best Config': '64 GB DDR5', 'LLM Speed (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Unified Memory Is the Key Differentiator for LLM Performance',
        content: [
          'Standard mini PCs with discrete GPU slots are not useful for LLM inference because the GPU VRAM is fixed at the factory — typically 4–8 GB — and cannot be expanded. The Mac Mini M4 and UM790 Pro solve this via GPU-based inference with unified memory. The Beelink SER8 takes a different approach: its Ryzen 9 8845HS uses CPU-only inference, which is slower but requires no GPU setup.',
          'The Mac Mini M4 with 16 GB unified memory outperforms the UM790 Pro with 32 GB DDR5 on raw inference speed because Apple\'s memory bandwidth (~68 GB/s) and Metal GPU acceleration are more efficient than the Radeon 780M iGPU. The UM790 Pro\'s advantage is the ability to expand to 64 GB, which allows running larger models such as 13B and 30B Q4 that do not fit in 16 GB.',
          'For a full guide to hardware selection for local LLM, see the <a href="/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">best Ollama frontend overview</a> which covers the software side of local LLM setup.',
          'For Japan-specific mini PC recommendations with Amazon.co.jp links and JPY prices, see our <a href="/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">best mini PC for local LLMs in Japan guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Mini PCs for Local LLMs',
        faqs: [
          {
            q: 'Can the Mac Mini M4 run a 13B model locally?',
            a: 'Yes, with the 16 GB version at Q4 quantization the model fits with ~1 GB to spare. The 32 GB Mac Mini M4 Pro can comfortably run 13B and 30B Q4 models. Inference speed drops to ~10 tok/s for 13B Q4 on the base 16 GB M4.',
          },
          {
            q: 'Does the Minisforum UM790 Pro need ROCm for GPU acceleration?',
            a: 'Yes. On Linux, Ollama and llama.cpp support the Radeon 780M iGPU via ROCm. On Windows, Ollama uses DirectML for AMD iGPU acceleration, which typically yields lower performance than ROCm on Linux. For fastest inference on the UM790 Pro, use Linux with ROCm.',
          },
          {
            q: 'Is the Mac Mini M4 good enough for coding with a 7B model?',
            a: 'Yes. At ~18 tok/s with a 7B Q4 model, the Mac Mini M4 produces tokens fast enough for interactive code completion. Response latency for a 200-token completion is approximately 11 seconds — practical for non-real-time coding assistance.',
          },
          {
            q: 'What is the maximum model size the UM790 Pro can run at full speed?',
            a: 'With 64 GB DDR5 configured as unified memory on Linux with ROCm, the UM790 Pro can run a 30B Q4 model (~18 GB) at approximately 3–4 tok/s. A 13B Q4 model (~8 GB) runs at ~6 tok/s. See the <a href="/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Ollama frontend guide</a> for software setup to run these models.',
          },
          {
            q: 'When should I pick the Beelink SER8 over the Mac Mini M4 or UM790 Pro?',
            a: 'Choose Beelink SER8 if you: (1) want to avoid GPU drivers and ROCm on Linux; (2) prioritize budget over speed (it\'s cheaper than both); (3) run Windows and don\'t want to use DirectML; (4) do occasional inference at ~8 tok/s and prefer CPU-based inference simplicity. It won\'t beat the Mac Mini M4 on speed or the UM790 Pro on scalability, but it\'s the easiest CPU-only option.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best SSD for Fast Model Loading](/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: Performance Guide](/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Bester Mini-PC für lokale LLMs?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-de.webp',
    seoTitle: 'Bester Mini-PC für lokale LLMs 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4: ~18 tok/s bei 7B Q4. Minisforum UM790 Pro: bis 64 GB DDR5 skalierbar. Beelink SER8: ~8 tok/s günstig. Drei Mini-PC-Picks für lokale LLMs 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Bester Mini-PC für lokale LLMs?',
        answer: 'Der Minisforum UM790 Pro und der Mac Mini M4 sind die besten Mini-PCs für den lokalen Betrieb von LLMs. Der UM790 Pro nutzt eine AMD iGPU mit Unified Memory. Der Mac Mini M4 ist schneller und energieeffizienter. Beide führen 7–13B-Modelle ohne diskrete GPU aus.',
        bullets: [
          'Mac Mini M4: am schnellsten für LLMs, ~18 tok/s auf Llama 3 8B, energieeffizient',
          'Minisforum UM790 Pro: AMD Radeon 780M iGPU, bis zu 64 GB Unified RAM',
          'Beide laufen 7B–13B-Modelle bei Q4 ohne dedizierte GPU',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4 ab ~599 USD, nutzt Apple Metal für GPU-Beschleunigung, erreicht ~18 tok/s bei 7B Q4-Modellen mit nur ~30 W unter Last',
          'Minisforum UM790 Pro (AMD Ryzen 9 7940HS) unterstützt bis zu 64 GB DDR5 RAM und ~8 tok/s bei 7B-Modellen via ROCm unter Linux',
          'Die Unified-Memory-Architektur von Apple Silicon ist der Hauptvorteil — der RAM des M4 wird zwischen CPU und GPU ohne VRAM-Engpass geteilt',
          'Beelink SER8 (Ryzen 9 8845HS) ist die Budget-Option: gleiche ~8 tok/s wie der UM790 Pro, aber CPU-basierte Inferenz, geringerer Stromverbrauch und kein Linux ROCm Setup erforderlich',
        ],
      },
      body1: {
        title: 'Mac Mini M4 führt bei Geschwindigkeit und Effizienz',
        content: [
          '<strong>Der Mac Mini M4 erreicht ~18 Tokens pro Sekunde bei einem 7B Q4-Modell, verbraucht unter Last ~30 W und kostet ab ca. 599 USD — damit ist er der schnellste Mini-PC für lokale LLM-Inferenz.</strong> Der M4-Chip verwendet Unified-Memory-Architektur, d. h. derselbe physische RAM wird zwischen CPU und GPU ohne Speicher-Kopieraufwand geteilt. Für Nutzer, die Geschwindigkeit priorisieren, ist der M4 die beste Wahl.',
          'Der Minisforum UM790 Pro ist die Skalierungsoption: AMD Ryzen 9 7940HS mit Radeon 780M iGPU, bis zu 64 GB DDR5 als Unified Memory konfiguriert, und ~8 tok/s unter Linux mit ROCm. Der Beelink SER8 (Ryzen 9 8845HS) entspricht dem UM790 Pro beim Durchsatz, nutzt aber CPU-basierte Inferenz — keine diskrete GPU erforderlich — was ihn zur budgetfreundlichen Wahl für Windows- oder Linux-Nutzer macht, die ROCm-Setup vermeiden möchten.',
          'Die folgende Tabelle vergleicht die drei Mini-PCs hinsichtlich CPU/GPU, bester Speicherkonfiguration und gemessener LLM-Geschwindigkeit.',
        ],
        columns: ['Mini-PC', 'CPU/GPU', 'Beste Konfiguration', 'LLM-Geschwindigkeit (7B Q4)'],
        rows: [
          { 'Mini-PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Beste Konfiguration': '16 GB Unified', 'LLM-Geschwindigkeit (7B Q4)': '~18 tok/s' },
          { 'Mini-PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Beste Konfiguration': '64 GB DDR5', 'LLM-Geschwindigkeit (7B Q4)': '~8 tok/s' },
          { 'Mini-PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', 'Beste Konfiguration': '64 GB DDR5', 'LLM-Geschwindigkeit (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Unified Memory ist der entscheidende Unterschied für LLM-Leistung',
        content: [
          'Standard-Mini-PCs mit diskreten GPU-Slots sind für LLM-Inferenz ungeeignet, da der GPU-VRAM ab Werk festgelegt ist — in der Regel 4–8 GB — und nicht erweitert werden kann. Der Mac Mini M4 und UM790 Pro lösen dies durch GPU-basierte Inferenz mit Unified Memory. Der Beelink SER8 verfolgt einen anderen Ansatz: sein Ryzen 9 8845HS nutzt CPU-basierte Inferenz, die langsamer ist, aber kein GPU-Setup erfordert.',
          'Der Mac Mini M4 mit 16 GB Unified Memory übertrifft den UM790 Pro mit 32 GB DDR5 bei der reinen Inferenzgeschwindigkeit, da die Speicherbandbreite von Apple (~68 GB/s) und die Metal-GPU-Beschleunigung effizienter sind als die Radeon 780M iGPU. Der Vorteil des UM790 Pro liegt in der Erweiterbarkeit auf 64 GB, was größere Modelle wie 13B und 30B Q4 ermöglicht, die nicht in 16 GB passen.',
          'Einen vollständigen Leitfaden zur Hardware-Auswahl für lokale LLMs finden Sie in der <a href="/de/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">besten Ollama-Frontend-Übersicht</a>, die die Software-Seite der lokalen LLM-Einrichtung abdeckt.',
          'Für Japan-spezifische Mini-PC-Empfehlungen mit Amazon.co.jp-Links und JPY-Preisen, lesen Sie unseren <a href="/de/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">Leitfaden für die besten Mini-PCs für LLMs in Japan</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Mini-PCs für lokale LLMs',
        faqs: [
          {
            q: 'Kann der Mac Mini M4 ein 13B-Modell lokal ausführen?',
            a: 'Ja, mit der 16-GB-Version bei Q4-Quantisierung passt das Modell mit ~1 GB Spielraum. Der Mac Mini M4 Pro mit 32 GB kann 13B- und 30B-Q4-Modelle problemlos ausführen. Die Inferenzgeschwindigkeit sinkt auf ~10 tok/s bei 13B Q4 auf dem Basis-M4 mit 16 GB.',
          },
          {
            q: 'Benötigt der Minisforum UM790 Pro ROCm für GPU-Beschleunigung?',
            a: 'Ja. Unter Linux unterstützen Ollama und llama.cpp die Radeon 780M iGPU via ROCm. Unter Windows verwendet Ollama DirectML für AMD-iGPU-Beschleunigung, was in der Regel eine geringere Leistung als ROCm unter Linux erzielt. Für schnellste Inferenz auf dem UM790 Pro empfiehlt sich Linux mit ROCm.',
          },
          {
            q: 'Ist der Mac Mini M4 für Coding mit einem 7B-Modell gut genug?',
            a: 'Ja. Mit ~18 tok/s bei einem 7B-Q4-Modell erzeugt der Mac Mini M4 Tokens schnell genug für interaktive Code-Vervollständigung. Die Antwortlatenz für eine 200-Token-Vervollständigung beträgt ca. 11 Sekunden — praktikabel für nicht-echtzeit-basierte Coding-Unterstützung.',
          },
          {
            q: 'Was ist die maximale Modellgröße, die der UM790 Pro mit voller Geschwindigkeit ausführen kann?',
            a: 'Mit 64 GB DDR5 als Unified Memory unter Linux mit ROCm kann der UM790 Pro ein 30B-Q4-Modell (~18 GB) mit ca. 3–4 tok/s ausführen. Ein 13B-Q4-Modell (~8 GB) läuft mit ~6 tok/s.',
          },
          {
            q: 'Wann sollte ich den Beelink SER8 dem Mac Mini M4 oder UM790 Pro vorziehen?',
            a: 'Wählen Sie Beelink SER8 wenn Sie: (1) GPU-Treiber und ROCm unter Linux vermeiden möchten; (2) Budget über Geschwindigkeit priorisieren (er ist günstiger als beide); (3) Windows laufen und DirectML nicht nutzen möchten; (4) gelegentliche Inferenz bei ~8 tok/s durchführen und CPU-basierte Inferenz bevorzugen. Er wird den Mac Mini M4 nicht in Geschwindigkeit schlagen oder den UM790 Pro in Skalierbarkeit, aber er ist die einfachste CPU-basierte Option.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Beste SSD für schnelles Modellladen](/de/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: Leistungshandbuch](/de/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleur mini PC pour LLM local ?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-fr.webp',
    seoTitle: 'Meilleur mini PC pour LLM local 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4 : ~18 tok/s, le plus rapide. UM790 Pro : 64 Go DDR5. Beelink SER8 : ~8 tok/s économique. Trois picks mini PC pour LLM local 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur mini PC pour LLM local ?',
        answer: 'Trois mini PC se distinguent pour l\'inférence LLM locale : le Mac Mini M4 (le plus rapide, ~18 tok/s), le Minisforum UM790 Pro (plus de RAM, 64 Go DDR5) et le Beelink SER8 (meilleur rapport qualité-prix, CPU Ryzen 9 8845HS). Les trois exécutent des modèles 7–13B Q4 sans GPU dédié.',
        bullets: [
          'Mac Mini M4 : le plus rapide pour les LLMs, ~18 tok/s sur Llama 3 8B, économe en énergie',
          'Minisforum UM790 Pro : iGPU AMD Radeon 780M, jusqu\'à 64 Go de RAM unifiée',
          'Beelink SER8 : Ryzen 9 8845HS, ~8 tok/s, alternative économique',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4 à partir de ~599 USD, utilise Apple Metal pour l\'accélération GPU, atteint ~18 tok/s sur un modèle 7B Q4 avec seulement ~30 W sous charge',
          'Minisforum UM790 Pro (AMD Ryzen 9 7940HS) supporte jusqu\'à 64 Go de RAM DDR5 et ~8 tok/s sur un modèle 7B via ROCm sous Linux',
          'L\'architecture mémoire unifiée d\'Apple Silicon est l\'avantage clé — la RAM du M4 est partagée entre CPU et GPU sans goulot d\'étranglement VRAM',
          'Beelink SER8 (Ryzen 9 8845HS) est le choix budgétaire : même ~8 tok/s que l\'UM790 Pro mais inférence basée sur CPU, consommation électrique réduite et pas besoin de configuration ROCm Linux',
        ],
      },
      body1: {
        title: 'Le Mac Mini M4 domine en vitesse et en efficacité',
        content: [
          '<strong>Le Mac Mini M4 atteint ~18 tokens par seconde sur un modèle 7B Q4, consomme ~30 W sous charge et démarre à environ 599 USD — ce qui en fait le mini PC le plus rapide pour l\'inférence LLM locale.</strong> La puce M4 utilise une architecture mémoire unifiée, signifiant que la même RAM physique est partagée entre CPU et GPU sans surcharge de copie mémoire. Pour les utilisateurs privilégiant la vitesse, le M4 est le meilleur choix.',
          'Le Minisforum UM790 Pro est l\'option d\'évolutivité : AMD Ryzen 9 7940HS avec iGPU Radeon 780M, jusqu\'à 64 Go DDR5 configurés en mémoire unifiée, et ~8 tok/s sous Linux avec ROCm. Le Beelink SER8 (Ryzen 9 8845HS) correspond à l\'UM790 Pro sur le débit mais utilise l\'inférence basée sur CPU — aucun GPU discret requis — ce qui en fait le choix économique pour les utilisateurs Windows ou Linux qui veulent éviter la configuration ROCm.',
          'Le tableau ci-dessous compare les trois mini PC sur CPU/GPU, meilleure configuration mémoire et vitesse LLM mesurée.',
        ],
        columns: ['Mini PC', 'CPU/GPU', 'Meilleure config', 'Vitesse LLM (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Meilleure config': '16 Go unifié', 'Vitesse LLM (7B Q4)': '~18 tok/s' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Meilleure config': '64 Go DDR5', 'Vitesse LLM (7B Q4)': '~8 tok/s' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', 'Meilleure config': '64 Go DDR5', 'Vitesse LLM (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'La mémoire unifiée est le différenciateur clé pour les performances LLM',
        content: [
          'Les mini PC standard avec emplacements GPU discrets ne sont pas utiles pour l\'inférence LLM car la VRAM du GPU est fixée en usine — généralement 4–8 Go — et ne peut pas être étendue. Le Mac Mini M4 et UM790 Pro résolvent cela via l\'inférence basée sur GPU avec mémoire unifiée. Le Beelink SER8 adopte une approche différente : son Ryzen 9 8845HS utilise l\'inférence basée sur CPU, qui est plus lente mais ne nécessite pas de configuration GPU.',
          'Le Mac Mini M4 avec 16 Go de mémoire unifiée surpasse l\'UM790 Pro avec 32 Go DDR5 en vitesse d\'inférence pure car la bande passante mémoire d\'Apple (~68 GB/s) et l\'accélération Metal GPU sont plus efficaces que l\'iGPU Radeon 780M. L\'avantage de l\'UM790 Pro est sa capacité d\'extension à 64 Go, permettant d\'exécuter des modèles plus grands comme 13B et 30B Q4 qui ne tiennent pas dans 16 Go.',
          'Pour un guide complet de sélection matérielle pour LLM local, consultez l\'<a href="/fr/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">aperçu des meilleurs frontends Ollama</a> qui couvre la partie logicielle de la configuration LLM locale.',
          'Pour des recommandations de mini PC spécifiques au Japon avec des liens Amazon.co.jp et les prix en JPY, consultez notre <a href="/fr/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">guide des meilleurs mini PC pour LLMs au Japon</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les mini PC pour LLMs locaux',
        faqs: [
          {
            q: 'Le Mac Mini M4 peut-il faire tourner un modèle 13B localement ?',
            a: 'Oui, avec la version 16 Go en quantification Q4, le modèle tient avec ~1 Go de marge. Le Mac Mini M4 Pro 32 Go peut exécuter confortablement des modèles 13B et 30B Q4. La vitesse d\'inférence descend à ~10 tok/s pour 13B Q4 sur le M4 de base 16 Go.',
          },
          {
            q: 'Le Minisforum UM790 Pro nécessite-t-il ROCm pour l\'accélération GPU ?',
            a: 'Oui. Sous Linux, Ollama et llama.cpp prennent en charge l\'iGPU Radeon 780M via ROCm. Sous Windows, Ollama utilise DirectML pour l\'accélération iGPU AMD, ce qui donne généralement des performances inférieures à ROCm sous Linux. Pour une inférence la plus rapide possible sur l\'UM790 Pro, utilisez Linux avec ROCm.',
          },
          {
            q: 'Le Mac Mini M4 est-il suffisamment performant pour du codage avec un modèle 7B ?',
            a: 'Oui. À ~18 tok/s avec un modèle 7B Q4, le Mac Mini M4 génère des tokens assez rapidement pour la complétion de code interactive. La latence de réponse pour une complétion de 200 tokens est d\'environ 11 secondes — pratique pour une assistance au codage non temps-réel.',
          },
          {
            q: 'Quelle est la taille maximale de modèle que l\'UM790 Pro peut exécuter à pleine vitesse ?',
            a: 'Avec 64 Go DDR5 en mémoire unifiée sous Linux avec ROCm, l\'UM790 Pro peut exécuter un modèle 30B Q4 (~18 Go) à environ 3–4 tok/s. Un modèle 13B Q4 (~8 Go) tourne à ~6 tok/s. Consultez le <a href="/fr/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">guide des frontends Ollama</a> pour la configuration logicielle.',
          },
          {
            q: 'Quand devrais-je choisir le Beelink SER8 plutôt que le Mac Mini M4 ou l\'UM790 Pro ?',
            a: 'Choisissez Beelink SER8 si vous : (1) voulez éviter les drivers GPU et ROCm sur Linux ; (2) privilégiez le budget à la vitesse (il est moins cher que les deux) ; (3) utilisez Windows et ne voulez pas utiliser DirectML ; (4) faites occasionnellement de l\'inférence à ~8 tok/s et préférez la simplicité de l\'inférence basée sur CPU. Il ne rivalisera pas avec le Mac Mini M4 en vitesse ou l\'UM790 Pro en évolutivité, mais c\'est l\'option CPU-only la plus simple.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleur SSD pour chargement rapide de modèles](/fr/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: Guide de performance](/fr/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'ローカルLLMに最適なミニPCは？',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-ja.webp',
    seoTitle: 'ローカルLLM向けミニPC 2026：Mac Mini M4・UM790 Pro・Beelink',
    metaDescription: 'Mac Mini M4：最速、~18 tok/s。Minisforum UM790 Pro：64 GB RAM スケーリング。Beelink SER8：予算オプション。ローカルLLM向け 3 選。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMに最適なミニPCは？',
        answer: 'ローカルLLM推論で3つのミニPCが目立ちます：Mac Mini M4（最速、~18 tok/s）、Minisforum UM790 Pro（最大RAM、64 GB DDR5）、Beelink SER8（最高コスパ、Ryzen 9 8845HS CPU）。3つすべて専用GPUなしで7–13B Q4モデルを実行可能です。',
        bullets: [
          'Mac Mini M4：LLMに最速、Llama 3 8Bで~18 tok/s、省電力',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU、最大64 GBユニファイドRAM',
          'Beelink SER8：Ryzen 9 8845HS、~8 tok/s、予算に優しい代替',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4は約599 USDから、Apple MetalによるGPUアクセラレーションを使用し、7B Q4モデルで負荷時約30 Wで~18 tok/sを達成',
          'Minisforum UM790 Pro（AMD Ryzen 9 7940HS）は最大64 GB DDR5 RAMをサポートし、Linux上のROCm経由で7Bモデルで~8 tok/s',
          'Apple SiliconのユニファイドメモリアーキテクチャがM4の主な利点 — RAMはVRAMのボトルネックなしでCPUとGPUが共有',
          'Beelink SER8（Ryzen 9 8845HS）はバジェット選択肢：UM790 Proと同じ~8 tok/sですがCPUベース推論、低消費電力、Linux ROCmセットアップ不要',
        ],
      },
      body1: {
        title: 'Mac Mini M4は速度と効率でトップ',
        content: [
          '<strong>Mac Mini M4は7B Q4モデルで毎秒~18トークンを達成し、負荷時に~30 Wを消費し、約599 USDから購入可能です — ローカルLLM推論において最速のミニPCです。</strong> M4チップはユニファイドメモリアーキテクチャを使用しており、メモリコピーのオーバーヘッドなしに同じ物理RAMをCPUとGPUが共有します。速度を優先するユーザーにはM4が最適です。',
          'Minisforum UM790 Proはスケーリングオプション：AMD Ryzen 9 7940HSとRadeon 780M iGPU、最大64 GB DDR5をユニファイドメモリとして設定、Linux上のROCmで~8 tok/s。Beelink SER8（Ryzen 9 8845HS）はUM790 Proと同等のスループットですがCPUベース推論 — 専用GPUは不要 — これによってWindows/Linuxユーザー向けの予算に優しい選択肢となり、ROCmセットアップ回避が可能です。',
          '以下の表は、CPU/GPU、最適なメモリ構成、測定されたLLM速度の3つの観点から3つのミニPCを比較しています。',
        ],
        columns: ['ミニPC', 'CPU/GPU', '最適構成', 'LLM速度（7B Q4）'],
        rows: [
          { 'ミニPC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '最適構成': '16 GBユニファイド', 'LLM速度（7B Q4）': '~18 tok/s' },
          { 'ミニPC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '最適構成': '64 GB DDR5', 'LLM速度（7B Q4）': '~8 tok/s' },
          { 'ミニPC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', '最適構成': '64 GB DDR5', 'LLM速度（7B Q4）': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'ユニファイドメモリがLLMパフォーマンスの決定的な差別化要素',
        content: [
          '専用GPUスロットを持つ標準的なミニPCはLLM推論に適していません。なぜならGPUのVRAMは工場出荷時に固定（通常4–8 GB）され、拡張できないからです。Mac Mini M4とUM790 Proはユニファイドメモリ対応GPU推論でこの問題を解決しています。Beelink SER8は異なるアプローチ：Ryzen 9 8845HSはCPUベース推論を使用し、これは遅いですがGPUセットアップが不要です。',
          '16 GBユニファイドメモリのMac Mini M4は純粋な推論速度で32 GB DDR5のUM790 Proを上回ります。これはAppleのメモリ帯域幅（~68 GB/s）とMetalのGPUアクセラレーションがRadeon 780M iGPUより効率的なためです。UM790 Proの利点は64 GBへの拡張性で、16 GBに収まらない13Bや30B Q4などの大型モデルの実行を可能にします。',
          'ローカルLLMのハードウェア選択に関する完全なガイドについては、ローカルLLMセットアップのソフトウェア面をカバーする<a href="/ja/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最適なOllamaフロントエンド概要</a>をご覧ください。',
          'Amazon.co.jpリンクと日本円価格付きの日本市場向けミニPCおすすめについては、<a href="/ja/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">日本のローカルLLM向けミニPCガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'ローカルLLM向けミニPCに関するよくある質問',
        faqs: [
          {
            q: 'Mac Mini M4は13Bモデルをローカルで実行できますか？',
            a: 'はい。Q4量子化での16 GBバージョンは、約1 GBの余裕を持ってモデルが収まります。32 GB Mac Mini M4 Proは13Bと30B Q4モデルを快適に実行できます。ベース16 GB M4での13B Q4の推論速度は~10 tok/sに低下します。',
          },
          {
            q: 'Minisforum UM790 ProはGPUアクセラレーションにROCmが必要ですか？',
            a: 'はい。LinuxではOllamaとllama.cppはROCm経由でRadeon 780M iGPUをサポートします。WindowsではOllamaはAMD iGPUアクセラレーションにDirectMLを使用しますが、通常Linux上のROCmより低い性能になります。UM790 Proで最速の推論を得るにはROCmを使用したLinuxを使用してください。',
          },
          {
            q: 'Mac Mini M4は7Bモデルでのコーディングに十分ですか？',
            a: 'はい。7B Q4モデルで~18 tok/sの速度があれば、Mac Mini M4はインタラクティブなコード補完に十分な速さでトークンを生成します。200トークンの補完の応答遅延は約11秒 — 非リアルタイムのコーディングアシスタンスには実用的です。',
          },
          {
            q: 'UM790 Proがフルスピードで実行できる最大モデルサイズは？',
            a: 'ROCmを使用したLinux上で64 GB DDR5をユニファイドメモリとして使用すると、UM790 Proは30B Q4モデル（~18 GB）を約3–4 tok/sで実行できます。13B Q4モデル（~8 GB）は~6 tok/sで実行されます。ソフトウェアのセットアップについては<a href="/ja/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Ollamaフロントエンドガイド</a>をご覧ください。',
          },
          {
            q: 'Beelink SER8をMac Mini M4またはUM790 Proより選ぶべき時は？',
            a: 'Beelink SER8を選択する場合：(1) Linux上のGPUドライバとROCmを回避したい；(2) 速度より予算を優先（両方より安い）；(3) Windowsを実行しDirectMLを使いたくない；(4) 時々~8 tok/sで推論を行いCPUベース推論の単純性を好む。Mac Mini M4の速度やUM790 Proのスケーラビリティには勝りませんが、最も簡単なCPUのみオプションです。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[モデル高速ロードのための最適SSD](/ja/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: パフォーマンスガイド](/ja/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '本地 LLM 最佳迷你电脑是什么？',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-zh.webp',
    seoTitle: '本地LLM最佳迷你电脑 2026：Mac Mini M4・UM790 Pro・Beelink',
    metaDescription: 'Mac Mini M4：最快、约 18 tok/s。Minisforum UM790 Pro：64 GB 内存扩展。Beelink SER8：经济选择。本地 LLM 三大选择。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '本地 LLM 最佳迷你电脑是什么？',
        answer: '三款迷你电脑在本地 LLM 推理中表现突出：Mac Mini M4（最快，~18 tok/s）、Minisforum UM790 Pro（最大内存，64 GB DDR5）和 Beelink SER8（最佳性价比，Ryzen 9 8845HS CPU）。三者均可无独立 GPU 运行 7–13B Q4 模型。',
        bullets: [
          'Mac Mini M4：LLM 速度最快，Llama 3 8B 约 18 tok/s，节能',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU，最高 64 GB 统一内存',
          'Beelink SER8：Ryzen 9 8845HS，~8 tok/s，经济实惠替代',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4 起价约 599 USD，使用 Apple Metal 进行 GPU 加速，7B Q4 模型负载下约 30 W 可达 ~18 tok/s',
          'Minisforum UM790 Pro（AMD Ryzen 9 7940HS）支持最高 64 GB DDR5 内存，Linux 下通过 ROCm 7B 模型约 8 tok/s',
          'Apple Silicon 的统一内存架构是关键优势——M4 的内存由 CPU 和 GPU 共享，无 VRAM 瓶颈',
          'Beelink SER8（Ryzen 9 8845HS）是经济选择：与 UM790 Pro 相同的 ~8 tok/s，但基于 CPU 推理、电耗更低、无需 Linux ROCm 设置',
        ],
      },
      body1: {
        title: 'Mac Mini M4 在速度和效率上领先',
        content: [
          '<strong>Mac Mini M4 在 7B Q4 模型上达到每秒约 18 个 token，负载下消耗约 30 W，起价约 599 USD——使其成为本地 LLM 推理中最快的迷你电脑。</strong> M4 芯片采用统一内存架构，意味着相同的物理内存在 CPU 和 GPU 之间共享，无需内存复制开销。对于优先考虑速度的用户，M4 是最佳选择。',
          'Minisforum UM790 Pro 是扩展方案：AMD Ryzen 9 7940HS 搭配 Radeon 780M iGPU，支持高达 64 GB DDR5 统一内存配置，Linux 和 ROCm 下 ~8 tok/s。Beelink SER8（Ryzen 9 8845HS）与 UM790 Pro 吞吐量相当但采用仅 CPU 推理——无需独立 GPU——使其成为希望避免 ROCm 配置的 Windows/Linux 用户的经济实惠之选。',
          '下表比较了三款迷你电脑的 CPU/GPU、最佳内存配置和测量的 LLM 速度。',
        ],
        columns: ['迷你电脑', 'CPU/GPU', '最佳配置', 'LLM 速度（7B Q4）'],
        rows: [
          { '迷你电脑': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '最佳配置': '16 GB 统一内存', 'LLM 速度（7B Q4）': '~18 tok/s' },
          { '迷你电脑': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '最佳配置': '64 GB DDR5', 'LLM 速度（7B Q4）': '~8 tok/s' },
          { '迷你电脑': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', '最佳配置': '64 GB DDR5', 'LLM 速度（7B Q4）': '~8 tok/s' },
        ],
      },
      body2: {
        title: '统一内存是 LLM 性能的关键差异化因素',
        content: [
          '配备独立 GPU 插槽的标准迷你电脑不适合 LLM 推理，因为 GPU VRAM 在出厂时固定——通常为 4–8 GB——无法扩展。Mac Mini M4 和 UM790 Pro 通过统一内存的基于 GPU 推理来解决此问题。Beelink SER8 采用不同方法：其 Ryzen 9 8845HS 使用仅 CPU 推理，速度更慢但无需 GPU 设置。',
          '配备 16 GB 统一内存的 Mac Mini M4 在纯推理速度上超越配备 32 GB DDR5 的 UM790 Pro，因为 Apple 的内存带宽（~68 GB/s）和 Metal GPU 加速比 Radeon 780M iGPU 更高效。UM790 Pro 的优势是可扩展到 64 GB，允许运行 16 GB 放不下的 13B 和 30B Q4 等更大模型。',
          '有关本地 LLM 硬件选择的完整指南，请参阅涵盖本地 LLM 配置软件方面的 <a href="/zh/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最佳 Ollama 前端概览</a>。',
          '如需带Amazon.co.jp链接和日元价格的日本专用迷你电脑推荐，请参阅我们的<a href="/zh/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">日本本地LLM迷你电脑指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于本地 LLM 迷你电脑的快速解答',
        faqs: [
          {
            q: 'Mac Mini M4 可以在本地运行 13B 模型吗？',
            a: '可以，16 GB 版本在 Q4 量化下模型可以放入，还有约 1 GB 余量。32 GB Mac Mini M4 Pro 可以舒适地运行 13B 和 30B Q4 模型。基础版 16 GB M4 上 13B Q4 的推理速度降至约 10 tok/s。',
          },
          {
            q: 'Minisforum UM790 Pro 需要 ROCm 才能进行 GPU 加速吗？',
            a: '需要。在 Linux 上，Ollama 和 llama.cpp 通过 ROCm 支持 Radeon 780M iGPU。在 Windows 上，Ollama 使用 DirectML 进行 AMD iGPU 加速，通常性能低于 Linux 上的 ROCm。要在 UM790 Pro 上获得最快推理，请使用带 ROCm 的 Linux。',
          },
          {
            q: 'Mac Mini M4 用 7B 模型编程够用吗？',
            a: '够用。7B Q4 模型约 18 tok/s 的速度，Mac Mini M4 生成 token 的速度足够用于交互式代码补全。200 个 token 的补全响应延迟约为 11 秒——适合非实时编码辅助。',
          },
          {
            q: 'UM790 Pro 以全速运行的最大模型大小是多少？',
            a: '在 Linux 和 ROCm 下将 64 GB DDR5 配置为统一内存，UM790 Pro 可以约 3–4 tok/s 的速度运行 30B Q4 模型（~18 GB）。13B Q4 模型（~8 GB）以约 6 tok/s 运行。软件配置请参阅 <a href="/zh/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Ollama 前端指南</a>。',
          },
          {
            q: '何时应该选择 Beelink SER8 而不是 Mac Mini M4 或 UM790 Pro？',
            a: '满足以下条件时选择 Beelink SER8：(1) 希望避免 Linux 上的 GPU 驱动程序和 ROCm；(2) 优先考虑预算而非速度（比两者都便宜）；(3) 使用 Windows 且不想使用 DirectML；(4) 偶尔在 ~8 tok/s 进行推理且偏好 CPU 推理的简便性。它不会在速度上击败 Mac Mini M4，也不会在可扩展性上击败 UM790 Pro，但是最简单的纯 CPU 选项。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[快速加载模型的最佳SSD](/zh/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: 性能指南](/zh/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: '¿El mejor mini PC para LLM local?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-es.webp',
    seoTitle: 'Mejor mini PC para LLM local 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4 alcanza ~18 tok/s en 7B Q4. Minisforum UM790 Pro escala a 64 GB DDR5. Beelink SER8: ~8 tok/s a buen precio. Tres mini PCs para LLM local en 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor mini PC para LLM local?',
        answer: 'Tres mini PCs destacan para inferencia local de LLMs: Mac Mini M4 entrega ~18 tok/s con memoria unificada y sin cuello de botella de VRAM, Minisforum UM790 Pro escala a 64 GB DDR5 para modelos más grandes, y Beelink SER8 ofrece buena relación calidad-precio con ~8 tok/s y Ryzen 9 8845HS. Los tres ejecutan modelos Q4 de 7–13B sin GPU dedicada.',
        bullets: [
          'Mac Mini M4: el más rápido para LLMs, ~18 tok/s en Llama 3 8B, eficiente en energía',
          'Minisforum UM790 Pro: iGPU AMD Radeon 780M, hasta 64 GB de RAM unificada',
          'Beelink SER8: Ryzen 9 8845HS, ~8 tok/s, alternativa económica',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4 parte desde ~599 USD (~699 € en España), usa Apple Metal para aceleración GPU y alcanza ~18 tok/s en un modelo 7B Q4 consumiendo solo ~30 W bajo carga',
          'Minisforum UM790 Pro (AMD Ryzen 9 7940HS) soporta hasta 64 GB DDR5 y ~8 tok/s en un modelo 7B mediante ROCm en Linux',
          'La arquitectura de memoria unificada de Apple Silicon es la ventaja clave — la RAM del M4 se comparte entre CPU y GPU sin cuello de botella de VRAM',
          'Beelink SER8 (Ryzen 9 8845HS) es la opción económica: mismo ~8 tok/s que el UM790 Pro pero con inferencia basada en CPU, menor consumo eléctrico y sin necesidad de configurar ROCm en Linux',
        ],
      },
      body1: {
        title: 'Mac Mini M4 lidera en velocidad y eficiencia',
        content: [
          '<strong>El Mac Mini M4 alcanza ~18 tokens por segundo en un modelo 7B Q4, consume ~30 W bajo carga y parte desde aproximadamente 599 USD (~699 € en España) — lo que lo convierte en el mini PC más rápido para inferencia de LLMs locales.</strong> El chip M4 usa arquitectura de memoria unificada, lo que significa que la misma RAM física es compartida entre CPU y GPU sin sobrecarga por copia de datos. Para los usuarios que priorizan la velocidad, el M4 es la primera opción.',
          'El Minisforum UM790 Pro es la opción escalable: AMD Ryzen 9 7940HS con iGPU Radeon 780M, hasta 64 GB DDR5 configurados como memoria unificada y ~8 tok/s en Linux con ROCm. El Beelink SER8 (Ryzen 9 8845HS) iguala al UM790 Pro en rendimiento pero usa inferencia solo por CPU — sin GPU dedicada — lo que lo convierte en la opción económica para usuarios en Windows o Linux que quieren evitar la configuración de ROCm.',
          'La siguiente tabla compara los tres mini PCs en CPU/GPU, mejor configuración de memoria y velocidad medida de LLM.',
        ],
        columns: ['Mini PC', 'CPU/GPU', 'Mejor configuración', 'Velocidad LLM (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Mejor configuración': '16 GB unificada', 'Velocidad LLM (7B Q4)': '~18 tok/s' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Mejor configuración': '64 GB DDR5', 'Velocidad LLM (7B Q4)': '~8 tok/s' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', 'Mejor configuración': '64 GB DDR5', 'Velocidad LLM (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'La memoria unificada es el diferenciador clave para el rendimiento de LLMs',
        content: [
          'Los mini PCs estándar con ranuras para GPU dedicada no son útiles para inferencia de LLMs porque el VRAM de la GPU está fijado de fábrica — típicamente 4–8 GB — y no puede expandirse. El Mac Mini M4 y el UM790 Pro resuelven esto mediante inferencia basada en GPU con memoria unificada. El Beelink SER8 adopta un enfoque diferente: su Ryzen 9 8845HS usa inferencia solo por CPU, que es más lenta pero no requiere configuración de GPU.',
          'El Mac Mini M4 con 16 GB de memoria unificada supera al UM790 Pro con 32 GB DDR5 en velocidad de inferencia pura porque el ancho de banda de memoria de Apple (~68 GB/s) y la aceleración GPU Metal son más eficientes que la iGPU Radeon 780M. La ventaja del UM790 Pro es la posibilidad de expandirse a 64 GB, lo que permite ejecutar modelos más grandes como 13B y 30B Q4 que no caben en 16 GB.',
          'Para una guía completa de selección de hardware para LLM local, consulta el <a href="/es/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">resumen de las mejores interfaces para Ollama</a>, que cubre el lado de software de la configuración local.',
          'Para recomendaciones específicas de mini PCs en Japón con enlaces de Amazon.co.jp y precios en JPY, consulta nuestra <a href="/es/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">guía de mejores mini PCs para LLMs locales en Japón</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre mini PCs para LLMs locales',
        faqs: [
          {
            q: '¿Puede el Mac Mini M4 ejecutar un modelo de 13B en local?',
            a: 'Sí, con la versión de 16 GB en cuantización Q4 el modelo cabe con ~1 GB de margen. El Mac Mini M4 Pro de 32 GB puede ejecutar cómodamente modelos Q4 de 13B y 30B. La velocidad de inferencia baja a ~10 tok/s para 13B Q4 en el M4 base de 16 GB.',
          },
          {
            q: '¿Necesita el Minisforum UM790 Pro ROCm para aceleración GPU?',
            a: 'Sí. En Linux, Ollama y llama.cpp soportan la iGPU Radeon 780M mediante ROCm. En Windows, Ollama usa DirectML para la aceleración de iGPU AMD, que típicamente ofrece menor rendimiento que ROCm en Linux. Para la inferencia más rápida en el UM790 Pro, usa Linux con ROCm.',
          },
          {
            q: '¿Es el Mac Mini M4 suficiente para coding con un modelo 7B?',
            a: 'Sí. A ~18 tok/s con un modelo 7B Q4, el Mac Mini M4 produce tokens lo suficientemente rápido para finalización interactiva de código. La latencia de respuesta para una finalización de 200 tokens es aproximadamente 11 segundos — práctico para asistencia de coding no en tiempo real.',
          },
          {
            q: '¿Cuál es el tamaño máximo de modelo que el UM790 Pro puede ejecutar a plena velocidad?',
            a: 'Con 64 GB DDR5 configurados como memoria unificada en Linux con ROCm, el UM790 Pro puede ejecutar un modelo Q4 de 30B (~18 GB) a aproximadamente 3–4 tok/s. Un modelo Q4 de 13B (~8 GB) corre a ~6 tok/s. Consulta la <a href="/es/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">guía de interfaces Ollama</a> para la configuración de software.',
          },
          {
            q: '¿Cuándo debo elegir el Beelink SER8 sobre el Mac Mini M4 o el UM790 Pro?',
            a: 'Elige el Beelink SER8 si: (1) quieres evitar drivers de GPU y ROCm en Linux; (2) priorizas el presupuesto sobre la velocidad (es más barato que ambos); (3) usas Windows y no quieres usar DirectML; (4) haces inferencia ocasional a ~8 tok/s y prefieres la simplicidad de la inferencia por CPU. No superará al Mac Mini M4 en velocidad ni al UM790 Pro en escalabilidad, pero es la opción más sencilla solo por CPU.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejor SSD para carga rápida de modelos](/es/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: Guía de rendimiento](/es/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Melhor mini PC para LLM local?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-pt.webp',
    seoTitle: 'Melhor mini PC para LLM local 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4 alcança ~18 tok/s em 7B Q4. Minisforum UM790 Pro escala até 64 GB DDR5. Beelink SER8: ~8 tok/s com bom custo-benefício. Três mini PCs para LLM local em 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor mini PC para LLM local?',
        answer: 'Três mini PCs se destacam para inferência local de LLMs: Mac Mini M4 entrega ~18 tok/s com memória unificada e sem gargalo de VRAM, Minisforum UM790 Pro escala até 64 GB DDR5 para modelos maiores, e Beelink SER8 oferece boa relação custo-benefício com ~8 tok/s e Ryzen 9 8845HS. Os três executam modelos Q4 de 7–13B sem GPU dedicada.',
        bullets: [
          'Mac Mini M4: o mais rápido para LLMs, ~18 tok/s no Llama 3 8B, eficiente em energia',
          'Minisforum UM790 Pro: iGPU AMD Radeon 780M, até 64 GB de RAM unificada',
          'Beelink SER8: Ryzen 9 8845HS, ~8 tok/s, alternativa econômica',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4 começa em ~599 USD (~699 € na Europa), usa Apple Metal para aceleração de GPU e alcança ~18 tok/s em um modelo 7B Q4 consumindo apenas ~30 W sob carga',
          'Minisforum UM790 Pro (AMD Ryzen 9 7940HS) suporta até 64 GB DDR5 e ~8 tok/s em um modelo 7B via ROCm no Linux',
          'A arquitetura de memória unificada do Apple Silicon é a vantagem principal — a RAM do M4 é compartilhada entre CPU e GPU sem gargalo de VRAM',
          'Beelink SER8 (Ryzen 9 8845HS) é a opção econômica: mesmo ~8 tok/s que o UM790 Pro mas com inferência baseada em CPU, menor consumo de energia e sem necessidade de configurar ROCm no Linux',
        ],
      },
      body1: {
        title: 'Mac Mini M4 lidera em velocidade e eficiência',
        content: [
          '<strong>O Mac Mini M4 alcança ~18 tokens por segundo em um modelo 7B Q4, consome ~30 W sob carga e começa em aproximadamente 599 USD — tornando-o o mini PC mais rápido para inferência de LLMs locais.</strong> O chip M4 usa arquitetura de memória unificada, o que significa que a mesma RAM física é compartilhada entre CPU e GPU sem sobrecarga de cópia de memória. Para usuários que priorizam velocidade, o M4 é a melhor escolha.',
          'O Minisforum UM790 Pro é a opção escalável: AMD Ryzen 9 7940HS com iGPU Radeon 780M, até 64 GB DDR5 configurados como memória unificada e ~8 tok/s no Linux com ROCm. O Beelink SER8 (Ryzen 9 8845HS) iguala o UM790 Pro em throughput mas usa inferência somente por CPU — sem GPU dedicada — tornando-o a escolha econômica para usuários no Windows ou Linux que querem evitar a configuração de ROCm.',
          'A tabela abaixo compara os três mini PCs em CPU/GPU, melhor configuração de memória e velocidade de LLM medida.',
        ],
        columns: ['Mini PC', 'CPU/GPU', 'Melhor configuração', 'Velocidade LLM (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Melhor configuração': '16 GB unificada', 'Velocidade LLM (7B Q4)': '~18 tok/s' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Melhor configuração': '64 GB DDR5', 'Velocidade LLM (7B Q4)': '~8 tok/s' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', 'Melhor configuração': '64 GB DDR5', 'Velocidade LLM (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Memória unificada é o diferencial para desempenho de LLMs',
        content: [
          'Mini PCs padrão com slots para GPU dedicada não são úteis para inferência de LLMs porque a VRAM da GPU é fixada na fábrica — tipicamente 4–8 GB — e não pode ser expandida. O Mac Mini M4 e o UM790 Pro resolvem isso por meio de inferência baseada em GPU com memória unificada. O Beelink SER8 adota uma abordagem diferente: o Ryzen 9 8845HS usa inferência somente por CPU, que é mais lenta mas não requer configuração de GPU.',
          'O Mac Mini M4 com 16 GB de memória unificada supera o UM790 Pro com 32 GB DDR5 em velocidade de inferência pura porque a largura de banda de memória da Apple (~68 GB/s) e a aceleração Metal GPU são mais eficientes do que a iGPU Radeon 780M. A vantagem do UM790 Pro é a capacidade de expansão para 64 GB, o que permite executar modelos maiores como 13B e 30B Q4 que não cabem em 16 GB.',
          'Para um guia completo de seleção de hardware para LLM local, consulte o <a href="/pt/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">resumo dos melhores frontends para Ollama</a>, que cobre o lado de software da configuração local.',
          'Para recomendações específicas de mini PCs no Japão com links da Amazon.co.jp e preços em JPY, consulte nosso <a href="/pt/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">guia de melhores mini PCs para LLMs locais no Japão</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre mini PCs para LLMs locais',
        faqs: [
          {
            q: 'O Mac Mini M4 consegue executar um modelo de 13B em local?',
            a: 'Sim, com a versão de 16 GB em quantização Q4 o modelo cabe com ~1 GB de sobra. O Mac Mini M4 Pro de 32 GB pode executar confortavelmente modelos Q4 de 13B e 30B. A velocidade de inferência cai para ~10 tok/s para 13B Q4 no M4 base de 16 GB.',
          },
          {
            q: 'O Minisforum UM790 Pro precisa de ROCm para aceleração de GPU?',
            a: 'Sim. No Linux, o Ollama e o llama.cpp suportam a iGPU Radeon 780M via ROCm. No Windows, o Ollama usa DirectML para aceleração de iGPU AMD, que tipicamente oferece desempenho inferior ao ROCm no Linux. Para inferência mais rápida no UM790 Pro, use Linux com ROCm.',
          },
          {
            q: 'O Mac Mini M4 é suficiente para programação com um modelo 7B?',
            a: 'Sim. A ~18 tok/s com um modelo 7B Q4, o Mac Mini M4 gera tokens rápido o suficiente para completação interativa de código. A latência de resposta para uma completação de 200 tokens é de aproximadamente 11 segundos — prático para assistência de programação não em tempo real.',
          },
          {
            q: 'Qual é o tamanho máximo de modelo que o UM790 Pro consegue executar em velocidade total?',
            a: 'Com 64 GB DDR5 configurados como memória unificada no Linux com ROCm, o UM790 Pro consegue executar um modelo Q4 de 30B (~18 GB) a aproximadamente 3–4 tok/s. Um modelo Q4 de 13B (~8 GB) roda a ~6 tok/s. Consulte o <a href="/pt/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">guia de frontends Ollama</a> para a configuração de software.',
          },
          {
            q: 'Quando devo escolher o Beelink SER8 em vez do Mac Mini M4 ou do UM790 Pro?',
            a: 'Escolha o Beelink SER8 se: (1) quiser evitar drivers de GPU e ROCm no Linux; (2) priorizar orçamento sobre velocidade (é mais barato do que ambos); (3) usar Windows e não quiser usar DirectML; (4) fizer inferência ocasional a ~8 tok/s e preferir a simplicidade da inferência por CPU. Não vai superar o Mac Mini M4 em velocidade nem o UM790 Pro em escalabilidade, mas é a opção mais simples somente por CPU.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhor SSD para carregamento rápido de modelos](/pt/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: Guia de desempenho](/pt/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'أفضل جهاز كمبيوتر مصغر لتشغيل نماذج اللغة الكبيرة محلياً؟',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-ar.webp',
    seoTitle: 'أفضل جهاز مصغر لتشغيل ⁨LLM⁩ محلياً ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: '⁨Mac Mini M4⁩ يحقق ~⁨18⁩ رمز/ثانية في ⁨7B Q4. UM790 Pro⁩ يتوسع حتى ⁨64 GB DDR5. Beelink SER8⁩: ~⁨8⁩ رمز/ثانية بسعر معقول. ⁨3⁩ أجهزة مصغرة لنماذج ⁨LLM 2026⁩.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل جهاز كمبيوتر مصغر لتشغيل نماذج اللغة الكبيرة محلياً؟',
        answer: 'ثلاثة أجهزة مصغرة تتميز للاستدلال المحلي على نماذج اللغة الكبيرة: Mac Mini M4 يحقق ~18 رمز/ثانية مع ذاكرة موحدة ودون عنق زجاجة VRAM، وMinisforum UM790 Pro يتوسع حتى 64 GB DDR5 للنماذج الأكبر، وBeelink SER8 يقدم جودة/سعر جيدة بـ~8 رمز/ثانية و Ryzen 9 8845HS. الأجهزة الثلاثة تشغّل نماذج Q4 من 7B إلى 13B دون GPU مخصصة.',
        bullets: [
          'Mac Mini M4: الأسرع لنماذج اللغة الكبيرة، ~18 رمز/ثانية على Llama 3 8B، كفاءة في استهلاك الطاقة',
          'Minisforum UM790 Pro: iGPU AMD Radeon 780M، حتى 64 GB ذاكرة موحدة',
          'Beelink SER8: Ryzen 9 8845HS، ~8 رمز/ثانية، بديل اقتصادي',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4 يبدأ بـ~599 USD (~699 € في أوروبا)، يستخدم Apple Metal لتسريع GPU ويحقق ~18 رمز/ثانية على نموذج 7B Q4 مع استهلاك ~30 W فقط تحت الحمل',
          'Minisforum UM790 Pro (AMD Ryzen 9 7940HS) يدعم حتى 64 GB DDR5 و~8 رمز/ثانية على نموذج 7B عبر ROCm على Linux',
          'بنية الذاكرة الموحدة في Apple Silicon هي الميزة الرئيسية — ذاكرة M4 مشتركة بين CPU وGPU دون عنق زجاجة VRAM',
          'Beelink SER8 (Ryzen 9 8845HS) هو الخيار الاقتصادي: نفس ~8 رمز/ثانية كـUM790 Pro لكن بالاستدلال عبر CPU فقط، واستهلاك طاقة أقل ودون الحاجة لإعداد ROCm على Linux',
        ],
      },
      body1: {
        title: 'Mac Mini M4 يتصدر في السرعة والكفاءة',
        content: [
          '<strong>Mac Mini M4 يحقق ~18 رمز/ثانية على نموذج 7B Q4، يستهلك ~30 W تحت الحمل ويبدأ بحوالي 599 USD — مما يجعله أسرع جهاز مصغر للاستدلال المحلي على نماذج اللغة الكبيرة.</strong> شريحة M4 تستخدم بنية ذاكرة موحدة، بمعنى أن نفس الذاكرة الفعلية مشتركة بين CPU وGPU دون تكلفة نسخ الذاكرة. للمستخدمين الذين يعطون الأولوية للسرعة، M4 هو الخيار الأمثل.',
          'Minisforum UM790 Pro هو الخيار القابل للتوسع: AMD Ryzen 9 7940HS مع iGPU Radeon 780M، حتى 64 GB DDR5 كذاكرة موحدة و~8 رمز/ثانية على Linux مع ROCm. Beelink SER8 (Ryzen 9 8845HS) يساوي UM790 Pro في الإنتاجية لكنه يستخدم الاستدلال عبر CPU فقط — دون GPU مخصصة — مما يجعله الخيار الاقتصادي لمستخدمي Windows أو Linux الذين يريدون تجنب إعداد ROCm.',
          'الجدول أدناه يقارن الأجهزة الثلاثة من حيث CPU/GPU، وأفضل تهيئة للذاكرة، وسرعة النموذج المقاسة.',
        ],
        columns: ['الجهاز المصغر', 'CPU/GPU', 'أفضل تهيئة', 'سرعة النموذج (7B Q4)'],
        rows: [
          { 'الجهاز المصغر': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'أفضل تهيئة': '16 GB موحدة', 'سرعة النموذج (7B Q4)': '~18 رمز/ثانية' },
          { 'الجهاز المصغر': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'أفضل تهيئة': '64 GB DDR5', 'سرعة النموذج (7B Q4)': '~8 رمز/ثانية' },
          { 'الجهاز المصغر': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', 'أفضل تهيئة': '64 GB DDR5', 'سرعة النموذج (7B Q4)': '~8 رمز/ثانية' },
        ],
      },
      body2: {
        title: 'الذاكرة الموحدة هي العامل الحاسم لأداء نماذج اللغة الكبيرة',
        content: [
          'الأجهزة المصغرة القياسية ذات فتحات GPU مخصصة ليست مفيدة للاستدلال على نماذج اللغة الكبيرة لأن VRAM الخاصة بـGPU محددة من المصنع — عادةً 4–8 GB — ولا يمكن توسيعها. Mac Mini M4 وUM790 Pro يحلان هذا عبر الاستدلال القائم على GPU مع الذاكرة الموحدة. Beelink SER8 يتبع نهجاً مختلفاً: Ryzen 9 8845HS يستخدم الاستدلال عبر CPU فقط، وهو أبطأ لكنه لا يتطلب إعداد GPU.',
          'Mac Mini M4 بـ16 GB ذاكرة موحدة يتفوق على UM790 Pro بـ32 GB DDR5 في سرعة الاستدلال الخام لأن عرض نطاق ذاكرة Apple (~68 GB/s) وتسريع Metal GPU أكثر كفاءة من iGPU Radeon 780M. ميزة UM790 Pro هي القابلية للتوسع إلى 64 GB، مما يتيح تشغيل نماذج أكبر كـ13B و30B Q4 التي لا تتسع في 16 GB.',
          'للاطلاع على دليل شامل لاختيار العتاد لنماذج اللغة الكبيرة المحلية، راجع <a href="/ar/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">ملخص أفضل واجهات Ollama</a>، الذي يغطي الجانب البرمجي من الإعداد المحلي.',
          'للحصول على توصيات محددة للأجهزة المصغرة في اليابان مع روابط Amazon.co.jp وأسعار بالين الياباني، راجع <a href="/ar/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">دليل أفضل الأجهزة المصغرة لنماذج اللغة الكبيرة المحلية في اليابان</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الأجهزة المصغرة لنماذج اللغة الكبيرة المحلية',
        faqs: [
          {
            q: 'هل يمكن لـMac Mini M4 تشغيل نموذج 13B محلياً؟',
            a: 'نعم، بنسخة 16 GB مع تكميم Q4 يتسع النموذج مع ~1 GB متبقٍ. Mac Mini M4 Pro بـ32 GB يمكنه تشغيل نماذج Q4 من 13B و30B براحة. سرعة الاستدلال تنخفض إلى ~10 رمز/ثانية لنموذج 13B Q4 على M4 الأساسي بـ16 GB.',
          },
          {
            q: 'هل يحتاج Minisforum UM790 Pro إلى ROCm لتسريع GPU؟',
            a: 'نعم. على Linux، يدعم Ollama وllama.cpp iGPU Radeon 780M عبر ROCm. على Windows، يستخدم Ollama DirectML لتسريع iGPU من AMD، والذي عادةً يقدم أداءً أدنى من ROCm على Linux. للحصول على استدلال أسرع على UM790 Pro، استخدم Linux مع ROCm.',
          },
          {
            q: 'هل Mac Mini M4 كافٍ للبرمجة مع نموذج 7B؟',
            a: 'نعم. بـ~18 رمز/ثانية مع نموذج 7B Q4، يولّد Mac Mini M4 الرموز بسرعة كافية للإكمال التفاعلي للكود. زمن الاستجابة لإكمال من 200 رمز هو حوالي 11 ثانية — مناسب للمساعدة في البرمجة غير الآنية.',
          },
          {
            q: 'ما الحجم الأقصى للنموذج الذي يمكن لـUM790 Pro تشغيله بالسرعة الكاملة؟',
            a: 'مع 64 GB DDR5 كذاكرة موحدة على Linux مع ROCm، يمكن لـUM790 Pro تشغيل نموذج Q4 بحجم 30B (~18 GB) بحوالي 3–4 رمز/ثانية. نموذج Q4 بحجم 13B (~8 GB) يعمل بـ~6 رمز/ثانية. راجع <a href="/ar/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">دليل واجهات Ollama</a> لإعداد البرامج.',
          },
          {
            q: 'متى يجب اختيار Beelink SER8 على Mac Mini M4 أو UM790 Pro؟',
            a: 'اختر Beelink SER8 إذا: (1) أردت تجنب برامج تشغيل GPU وROCm على Linux؛ (2) أولّيت الميزانية على السرعة (أرخص من كليهما)؛ (3) استخدمت Windows ولم تُرِد استخدام DirectML؛ (4) أجريت استدلالاً عرضياً بـ~8 رمز/ثانية وتفضّل بساطة الاستدلال عبر CPU. لن يتفوق على Mac Mini M4 في السرعة ولا على UM790 Pro في قابلية التوسع، لكنه الخيار الأبسط عبر CPU فقط.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل SSD لتحميل النماذج بسرعة](/ar/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: دليل الأداء](/ar/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: '로컬 LLM용 최고의 미니 PC는?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-ko.webp',
    seoTitle: '로컬 LLM용 최고의 미니 PC 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4는 7B Q4에서 ~18 tok/s 달성. Minisforum UM790 Pro는 64 GB DDR5까지 확장 가능. Beelink SER8: ~8 tok/s의 가성비 선택. 2026년 로컬 LLM용 미니 PC 3종 비교.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    schema: {
      inLanguage: 'ko',
      articleUrl: 'https://www.promptquorum.com/ko/prompt-bites/best-mini-pc-for-local-llm',
    },
    breadcrumbSchema: {
      items: [
        { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
        { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
        { position: 3, name: '로컬 LLM용 최고의 미니 PC는?', url: 'https://www.promptquorum.com/ko/prompt-bites/best-mini-pc-for-local-llm' },
      ],
    },
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM용 최고의 미니 PC는 무엇입니까?',
        answer: '로컬 LLM 추론에 뛰어난 미니 PC 세 가지가 있습니다. Mac Mini M4는 통합 메모리로 VRAM 병목 없이 ~18 tok/s를 제공하며, Minisforum UM790 Pro는 더 큰 모델을 위해 64 GB DDR5까지 확장 가능하고, Beelink SER8은 Ryzen 9 8845HS로 ~8 tok/s의 가성비를 제공합니다. 세 제품 모두 전용 GPU 없이 7–13B Q4 모델을 실행합니다.',
        bullets: [
          'Mac Mini M4: LLM용 가장 빠른 미니 PC, Llama 3 8B에서 ~18 tok/s, 전력 효율 우수',
          'Minisforum UM790 Pro: AMD Radeon 780M iGPU, 통합 RAM 최대 64 GB',
          'Beelink SER8: Ryzen 9 8845HS, ~8 tok/s, 경제적인 대안',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mac Mini M4는 ~599 USD(한국 기준 약 89만 원)부터 시작하며, Apple Metal GPU 가속을 사용해 부하 시 ~30 W 소비로 7B Q4 모델에서 ~18 tok/s를 달성합니다',
          'Minisforum UM790 Pro(AMD Ryzen 9 7940HS)는 64 GB DDR5를 지원하며 Linux의 ROCm을 통해 7B 모델에서 ~8 tok/s를 제공합니다',
          'Apple Silicon의 통합 메모리 아키텍처가 핵심 장점입니다 — M4의 RAM은 VRAM 병목 없이 CPU와 GPU 간에 공유됩니다',
          'Beelink SER8(Ryzen 9 8845HS)는 경제적인 선택입니다: UM790 Pro와 동일한 ~8 tok/s이지만 CPU 전용 추론으로 전력 소비가 낮고 Linux에서 ROCm 설정이 불필요합니다',
        ],
      },
      body1: {
        title: 'Mac Mini M4, 속도와 효율에서 선두',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mac Mini M4는 7B Q4 모델에서 ~18 tok/s를 달성하며 약 599 USD부터 시작하는 로컬 LLM 추론용 가장 빠른 미니 PC입니다.' },
          { type: 'plain-terms', text: '미니 PC에서 로컬 LLM을 실행할 때 Mac Mini M4가 가장 빠른 이유는 Apple M4 칩이 통합 메모리 아키텍처를 사용하기 때문입니다. 이는 동일한 물리적 RAM이 데이터 복사 오버헤드 없이 CPU와 GPU 사이에서 공유됨을 의미합니다.' },
        ],
        content: [
          '<strong>Mac Mini M4는 7B Q4 모델에서 ~18 토큰/초를 달성하고, 부하 시 ~30 W를 소비하며, 약 599 USD(한국 기준 약 89만 원)부터 시작합니다 — 이는 로컬 LLM 추론용으로 가장 빠른 미니 PC입니다.</strong> M4 칩은 통합 메모리 아키텍처를 사용합니다. 이는 동일한 물리적 RAM이 메모리 복사 오버헤드 없이 CPU와 GPU 사이에서 공유됨을 의미합니다. 속도를 우선시하는 사용자에게 M4는 첫 번째 선택입니다.',
          'Minisforum UM790 Pro는 확장 가능한 옵션입니다: AMD Ryzen 9 7940HS에 Radeon 780M iGPU를 탑재하고, ROCm을 통해 Linux에서 통합 메모리로 구성된 64 GB DDR5에서 ~8 tok/s를 제공합니다. Beelink SER8(Ryzen 9 8845HS)은 처리량에서 UM790 Pro와 동일하지만 CPU 전용 추론을 사용합니다 — 전용 GPU 없이 — ROCm 설정을 피하려는 Windows 또는 Linux 사용자를 위한 경제적인 선택입니다.',
          '아래 표는 CPU/GPU, 최적 메모리 구성, 측정된 LLM 속도를 기준으로 세 미니 PC를 비교합니다.',
        ],
        columns: ['미니 PC', 'CPU/GPU', '최적 구성', 'LLM 속도 (7B Q4)'],
        rows: [
          { '미니 PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '최적 구성': '16 GB 통합', 'LLM 속도 (7B Q4)': '~18 tok/s' },
          { '미니 PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '최적 구성': '64 GB DDR5', 'LLM 속도 (7B Q4)': '~8 tok/s' },
          { '미니 PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 9 8845HS', '최적 구성': '64 GB DDR5', 'LLM 속도 (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: '통합 메모리가 LLM 성능의 핵심 차별점입니다',
        content: [
          '전용 GPU 슬롯이 있는 일반 미니 PC는 LLM 추론에 적합하지 않습니다. GPU의 VRAM이 공장에서 고정되어 있기 때문입니다 — 일반적으로 4–8 GB — 확장이 불가능합니다. Mac Mini M4와 UM790 Pro는 통합 메모리를 사용한 GPU 기반 추론으로 이 문제를 해결합니다. Beelink SER8은 다른 접근 방식을 취합니다: Ryzen 9 8845HS는 CPU 전용 추론을 사용하며, 속도는 느리지만 GPU 설정이 필요 없습니다.',
          '16 GB 통합 메모리를 가진 Mac Mini M4는 순수 추론 속도에서 32 GB DDR5를 가진 UM790 Pro를 능가합니다. Apple의 메모리 대역폭(~68 GB/s)과 Metal GPU 가속이 Radeon 780M iGPU보다 효율적이기 때문입니다. UM790 Pro의 장점은 64 GB까지 확장 가능하다는 것으로, 16 GB에 맞지 않는 13B 및 30B Q4 같은 더 큰 모델을 실행할 수 있습니다.',
          '로컬 LLM을 위한 완전한 하드웨어 선택 가이드를 위해 <a href="/ko/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">최고의 Ollama 프론트엔드 요약</a>을 참조하십시오. 이 가이드는 로컬 설정의 소프트웨어 측면을 다룹니다.',
          '일본 내 미니 PC 추천(Amazon.co.jp 링크 및 JPY 가격 포함)은 <a href="/ko/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">일본 로컬 LLM용 최고의 미니 PC 가이드</a>를 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '로컬 LLM용 미니 PC에 관한 빠른 답변',
        faqs: [
          {
            q: 'Mac Mini M4로 13B 모델을 로컬에서 실행할 수 있습니까?',
            a: '예, 16 GB 버전에서 Q4 양자화로 약 1 GB 여유를 두고 모델이 맞습니다. 32 GB Mac Mini M4 Pro는 13B 및 30B Q4 모델을 편안하게 실행할 수 있습니다. 기본 16 GB M4에서 13B Q4의 추론 속도는 ~10 tok/s로 낮아집니다.',
          },
          {
            q: 'Minisforum UM790 Pro에서 GPU 가속을 위해 ROCm이 필요합니까?',
            a: '예. Linux에서 Ollama와 llama.cpp는 ROCm을 통해 Radeon 780M iGPU를 지원합니다. Windows에서 Ollama는 AMD iGPU 가속을 위해 DirectML을 사용하는데, 이는 일반적으로 Linux의 ROCm보다 성능이 낮습니다. UM790 Pro에서 가장 빠른 추론을 위해서는 ROCm과 함께 Linux를 사용하십시오.',
          },
          {
            q: 'Mac Mini M4로 7B 모델을 사용한 코딩 작업이 충분합니까?',
            a: '예. 7B Q4 모델에서 ~18 tok/s로 Mac Mini M4는 대화형 코드 완성에 충분히 빠르게 토큰을 생성합니다. 200 토큰 완성의 응답 지연은 약 11초입니다 — 실시간이 아닌 코딩 보조 작업에 실용적입니다.',
          },
          {
            q: 'UM790 Pro가 전속력으로 실행할 수 있는 최대 모델 크기는 무엇입니까?',
            a: 'ROCm을 사용하는 Linux에서 64 GB DDR5를 통합 메모리로 구성하면, UM790 Pro는 30B Q4 모델(~18 GB)을 약 3–4 tok/s로 실행할 수 있습니다. 13B Q4 모델(~8 GB)은 ~6 tok/s로 실행됩니다. 소프트웨어 설정은 <a href="/ko/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">Ollama 프론트엔드 가이드</a>를 참조하십시오.',
          },
          {
            q: 'Mac Mini M4나 UM790 Pro 대신 Beelink SER8을 선택해야 하는 경우는 언제입니까?',
            a: 'Beelink SER8을 선택하십시오: (1) Linux에서 GPU 드라이버와 ROCm 설정을 피하고 싶을 때; (2) 속도보다 예산을 우선시할 때(두 제품보다 저렴함); (3) Windows를 사용하며 DirectML을 원하지 않을 때; (4) ~8 tok/s의 간헐적 추론을 하며 CPU 추론의 단순함을 선호할 때. 속도에서 Mac Mini M4를, 확장성에서 UM790 Pro를 능가하지는 않지만, CPU 전용으로 가장 간단한 옵션입니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽기 자료',
        items: [
          '[Ollama 최고의 프론트엔드](/ko/prompt-bites/best-frontend-for-ollama)',
          '[일본 로컬 LLM용 최고의 미니 PC](/ko/prompt-bites/best-mini-pc-local-llm-japan)',
          '[로컬 LLM 소프트웨어 디렉토리 2026](/ko/power-local-llm/local-llm-software-directory-2026)',
          '[빠른 모델 로딩을 위한 최고의 SSD](/ko/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo Ollama Vulkan 설정 가이드](/ko/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
}
