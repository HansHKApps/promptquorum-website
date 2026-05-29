import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best Mini PC for Local LLM?',
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
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Bester Mini-PC für lokale LLMs?',
    seoTitle: 'Bester Mini-PC für lokale LLMs 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4: ~18 tok/s bei 7B Q4. Minisforum UM790 Pro: bis 64 GB DDR5 skalierbar. Beelink SER8: ~8 tok/s günstig. Drei Mini-PC-Picks für lokale LLMs 2026.',
    publishDate: '2026-05-18',
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
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleur mini PC pour LLM local ?',
    seoTitle: 'Meilleur mini PC pour LLM local 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4 : ~18 tok/s, le plus rapide. UM790 Pro : 64 Go DDR5. Beelink SER8 : ~8 tok/s économique. Trois picks mini PC pour LLM local 2026.',
    publishDate: '2026-05-18',
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
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'ローカルLLMに最適なミニPCは？',
    seoTitle: 'ローカルLLM向けミニPC 2026：Mac Mini M4・UM790 Pro・Beelink',
    metaDescription: 'Mac Mini M4：最速、~18 tok/s。Minisforum UM790 Pro：64 GB RAM スケーリング。Beelink SER8：予算オプション。ローカルLLM向け 3 選。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
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
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '本地 LLM 最佳迷你电脑是什么？',
    seoTitle: '本地LLM最佳迷你电脑 2026：Mac Mini M4・UM790 Pro・Beelink',
    metaDescription: 'Mac Mini M4：最快、约 18 tok/s。Minisforum UM790 Pro：64 GB 内存扩展。Beelink SER8：经济选择。本地 LLM 三大选择。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
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
    },
  },
}
