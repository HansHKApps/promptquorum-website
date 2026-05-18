import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best Mini PC for Local LLM?',
    seoTitle: 'Best Mini PC for Local LLM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Best mini PCs for local LLMs: Minisforum UM790 Pro (AMD iGPU, 32 GB RAM) and Mac Mini M4 (fast, power-efficient). Both run 7–13B models without a discrete GPU. Quick answer from PromptQuorum.',
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
        answer: 'The Minisforum UM790 Pro and Mac Mini M4 are the top mini PCs for running LLMs locally. The UM790 Pro uses an AMD iGPU with unified memory. The Mac Mini M4 is faster and more power-efficient. Both run 7–13B models without a discrete GPU.',
        bullets: [
          'Mac Mini M4: fastest for LLMs, ~18 tok/s on Llama 3 8B, power-efficient',
          'Minisforum UM790 Pro: AMD Radeon 780M iGPU, up to 64 GB unified RAM',
          'Both run 7B–13B models at Q4 without a dedicated GPU',
        ],
        updatedDate: '2026-05',
      },
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
      fr: {
        question: 'Meilleur mini PC pour LLM local ?',
        answer: 'Le Minisforum UM790 Pro et le Mac Mini M4 sont les meilleurs mini PC pour exécuter des LLMs localement. L\'UM790 Pro utilise un iGPU AMD avec mémoire unifiée. Le Mac Mini M4 est plus rapide et plus économe en énergie. Les deux exécutent des modèles 7–13B sans GPU dédié.',
        bullets: [
          'Mac Mini M4 : le plus rapide pour les LLMs, ~18 tok/s sur Llama 3 8B, économe en énergie',
          'Minisforum UM790 Pro : iGPU AMD Radeon 780M, jusqu\'à 64 Go de RAM unifiée',
          'Les deux exécutent des modèles 7B–13B en Q4 sans GPU dédié',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルLLMに最適なミニPCは？',
        answer: 'Minisforum UM790 ProとMac Mini M4がローカルLLM実行のトップミニPCです。UM790 ProはユニファイドメモリのAMD iGPUを使用します。Mac Mini M4は高速で省電力です。両方とも専用GPUなしで7–13Bモデルを実行できます。',
        bullets: [
          'Mac Mini M4：LLMに最速、Llama 3 8Bで~18 tok/s、省電力',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU、最大64 GBユニファイドRAM',
          '両方とも専用GPUなしでQ4の7B–13Bモデルを実行可能',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '本地 LLM 最佳迷你电脑是什么？',
        answer: 'Minisforum UM790 Pro 和 Mac Mini M4 是运行本地 LLM 的顶级迷你电脑。UM790 Pro 使用带统一内存的 AMD iGPU。Mac Mini M4 速度更快且更节能。两者均无需独立 GPU 即可运行 7–13B 模型。',
        bullets: [
          'Mac Mini M4：LLM 速度最快，Llama 3 8B 约 18 tok/s，节能',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU，最高 64 GB 统一内存',
          '两者均可在无独立 GPU 的情况下运行 Q4 量化的 7B–13B 模型',
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
          'For users on Windows or Linux who need more than 32 GB of accessible unified memory, the UM790 Pro is the only mini PC option that scales to 64 GB',
        ],
      },
      body1: {
        title: 'Mac Mini M4 Leads on Speed and Efficiency',
        content: [
          '<strong>The Mac Mini M4 achieves ~18 tokens per second on a 7B Q4 model, consumes ~30 W under load, and starts at approximately 599 USD — making it the fastest and most power-efficient mini PC for local LLM inference.</strong> The M4 chip uses unified memory architecture, meaning the same physical RAM is shared between CPU and GPU with no memory copy overhead.',
          'The Minisforum UM790 Pro offers the best non-Apple alternative. Its AMD Ryzen 9 7940HS includes a Radeon 780M iGPU, and the system supports up to 64 GB of DDR5 RAM configured as unified memory. On Linux with ROCm, it achieves approximately 8 tokens per second on the same 7B Q4 model.',
          'The table below compares the two mini PCs across CPU/GPU, best memory configuration, and measured LLM speed.',
        ],
        columns: ['Mini PC', 'CPU/GPU', 'Best Config', 'LLM Speed (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Best Config': '16 GB unified', 'LLM Speed (7B Q4)': '~18 tok/s' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Best Config': '64 GB DDR5', 'LLM Speed (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Unified Memory Is the Key Differentiator for LLM Performance',
        content: [
          'Standard mini PCs with discrete GPU slots are not useful for LLM inference because the GPU VRAM is fixed at the factory — typically 4–8 GB — and cannot be expanded. Both the Mac Mini M4 and the UM790 Pro solve this by using the system\'s main RAM as unified GPU memory.',
          'The Mac Mini M4 with 16 GB unified memory outperforms the UM790 Pro with 32 GB DDR5 on raw inference speed because Apple\'s memory bandwidth (~68 GB/s) and Metal GPU acceleration are more efficient than the Radeon 780M iGPU. The UM790 Pro\'s advantage is the ability to expand to 64 GB, which allows running larger models such as 13B and 30B Q4 that do not fit in 16 GB.',
          'For a full guide to hardware selection for local LLM, see the <a href="/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">best Ollama frontend overview</a> which covers the software side of local LLM setup.',
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
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Bester Mini-PC für lokale LLMs?',
    seoTitle: 'Bester Mini-PC für lokale LLMs? | Prompt Bites | PromptQuorum',
    metaDescription: 'Beste Mini-PCs für lokale LLMs: Minisforum UM790 Pro (AMD iGPU, 32 GB RAM) und Mac Mini M4 (schnell, energieeffizient). Beide laufen 7–13B-Modelle ohne diskrete GPU. Schnelle Antwort von PromptQuorum.',
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
          'Für Windows/Linux-Nutzer, die mehr als 32 GB zugängliches Unified Memory benötigen, ist der UM790 Pro die einzige Mini-PC-Option mit 64 GB Skalierbarkeit',
        ],
      },
      body1: {
        title: 'Mac Mini M4 führt bei Geschwindigkeit und Effizienz',
        content: [
          '<strong>Der Mac Mini M4 erreicht ~18 Tokens pro Sekunde bei einem 7B Q4-Modell, verbraucht unter Last ~30 W und kostet ab ca. 599 USD — damit ist er der schnellste und energieeffizienteste Mini-PC für lokale LLM-Inferenz.</strong> Der M4-Chip verwendet Unified-Memory-Architektur, d. h. derselbe physische RAM wird zwischen CPU und GPU ohne Memorie-Kopieraufwand geteilt.',
          'Der Minisforum UM790 Pro bietet die beste Nicht-Apple-Alternative. Sein AMD Ryzen 9 7940HS enthält eine Radeon 780M iGPU, und das System unterstützt bis zu 64 GB DDR5-RAM als Unified Memory. Unter Linux mit ROCm erreicht er ca. 8 Tokens pro Sekunde beim selben 7B Q4-Modell.',
          'Die folgende Tabelle vergleicht die beiden Mini-PCs hinsichtlich CPU/GPU, bester Speicherkonfiguration und gemessener LLM-Geschwindigkeit.',
        ],
        columns: ['Mini-PC', 'CPU/GPU', 'Beste Konfiguration', 'LLM-Geschwindigkeit (7B Q4)'],
        rows: [
          { 'Mini-PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Beste Konfiguration': '16 GB Unified', 'LLM-Geschwindigkeit (7B Q4)': '~18 tok/s' },
          { 'Mini-PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Beste Konfiguration': '64 GB DDR5', 'LLM-Geschwindigkeit (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Unified Memory ist der entscheidende Unterschied für LLM-Leistung',
        content: [
          'Standard-Mini-PCs mit diskreten GPU-Slots sind für LLM-Inferenz ungeeignet, da der GPU-VRAM ab Werk festgelegt ist — in der Regel 4–8 GB — und nicht erweitert werden kann. Sowohl der Mac Mini M4 als auch der UM790 Pro lösen dies, indem sie den Systemhauptspeicher als Unified-GPU-Speicher nutzen.',
          'Der Mac Mini M4 mit 16 GB Unified Memory übertrifft den UM790 Pro mit 32 GB DDR5 bei der reinen Inferenzgeschwindigkeit, da die Speicherbandbreite von Apple (~68 GB/s) und die Metal-GPU-Beschleunigung effizienter sind als die Radeon 780M iGPU. Der Vorteil des UM790 Pro liegt in der Erweiterbarkeit auf 64 GB, was größere Modelle wie 13B und 30B Q4 ermöglicht, die nicht in 16 GB passen.',
          'Einen vollständigen Leitfaden zur Hardware-Auswahl für lokale LLMs finden Sie in der <a href="/de/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">besten Ollama-Frontend-Übersicht</a>, die die Software-Seite der lokalen LLM-Einrichtung abdeckt.',
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
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleur mini PC pour LLM local ?',
    seoTitle: 'Meilleur mini PC pour LLM local ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Meilleurs mini PC pour LLMs locaux : Minisforum UM790 Pro (iGPU AMD, 32 Go RAM) et Mac Mini M4 (rapide, économe). Les deux font tourner des modèles 7–13B sans GPU dédié. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur mini PC pour LLM local ?',
        answer: 'Le Minisforum UM790 Pro et le Mac Mini M4 sont les meilleurs mini PC pour exécuter des LLMs localement. L\'UM790 Pro utilise un iGPU AMD avec mémoire unifiée. Le Mac Mini M4 est plus rapide et plus économe en énergie. Les deux exécutent des modèles 7–13B sans GPU dédié.',
        bullets: [
          'Mac Mini M4 : le plus rapide pour les LLMs, ~18 tok/s sur Llama 3 8B, économe en énergie',
          'Minisforum UM790 Pro : iGPU AMD Radeon 780M, jusqu\'à 64 Go de RAM unifiée',
          'Les deux exécutent des modèles 7B–13B en Q4 sans GPU dédié',
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
          'Pour les utilisateurs Windows/Linux nécessitant plus de 32 Go de mémoire unifiée accessible, l\'UM790 Pro est la seule option mini PC évoluant jusqu\'à 64 Go',
        ],
      },
      body1: {
        title: 'Le Mac Mini M4 domine en vitesse et en efficacité',
        content: [
          '<strong>Le Mac Mini M4 atteint ~18 tokens par seconde sur un modèle 7B Q4, consomme ~30 W sous charge et démarre à environ 599 USD — ce qui en fait le mini PC le plus rapide et le plus économe en énergie pour l\'inférence LLM locale.</strong> La puce M4 utilise une architecture mémoire unifiée, signifiant que la même RAM physique est partagée entre CPU et GPU sans surcharge de copie mémoire.',
          'Le Minisforum UM790 Pro offre la meilleure alternative non-Apple. Son AMD Ryzen 9 7940HS intègre un iGPU Radeon 780M, et le système prend en charge jusqu\'à 64 Go de RAM DDR5 configurée en mémoire unifiée. Sous Linux avec ROCm, il atteint environ 8 tokens par seconde sur le même modèle 7B Q4.',
          'Le tableau ci-dessous compare les deux mini PC sur CPU/GPU, meilleure configuration mémoire et vitesse LLM mesurée.',
        ],
        columns: ['Mini PC', 'CPU/GPU', 'Meilleure config', 'Vitesse LLM (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Meilleure config': '16 Go unifié', 'Vitesse LLM (7B Q4)': '~18 tok/s' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Meilleure config': '64 Go DDR5', 'Vitesse LLM (7B Q4)': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'La mémoire unifiée est le différenciateur clé pour les performances LLM',
        content: [
          'Les mini PC standard avec emplacements GPU discrets ne sont pas utiles pour l\'inférence LLM car la VRAM du GPU est fixée en usine — généralement 4–8 Go — et ne peut pas être étendue. Le Mac Mini M4 et l\'UM790 Pro résolvent cela en utilisant la RAM principale du système comme mémoire GPU unifiée.',
          'Le Mac Mini M4 avec 16 Go de mémoire unifiée surpasse l\'UM790 Pro avec 32 Go DDR5 en vitesse d\'inférence pure car la bande passante mémoire d\'Apple (~68 GB/s) et l\'accélération Metal GPU sont plus efficaces que l\'iGPU Radeon 780M. L\'avantage de l\'UM790 Pro est sa capacité d\'extension à 64 Go, permettant d\'exécuter des modèles plus grands comme 13B et 30B Q4 qui ne tiennent pas dans 16 Go.',
          'Pour un guide complet de sélection matérielle pour LLM local, consultez l\'<a href="/fr/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">aperçu des meilleurs frontends Ollama</a> qui couvre la partie logicielle de la configuration LLM locale.',
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
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'ローカルLLMに最適なミニPCは？',
    seoTitle: 'ローカルLLMに最適なミニPCは？| Prompt Bites | PromptQuorum',
    metaDescription: 'ローカルLLMに最適なミニPC：Minisforum UM790 Pro（AMD iGPU、32 GB RAM）とMac Mini M4（高速、省電力）。両方とも専用GPUなしで7–13Bモデルを実行可能。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMに最適なミニPCは？',
        answer: 'Minisforum UM790 ProとMac Mini M4がローカルLLM実行のトップミニPCです。UM790 ProはユニファイドメモリのAMD iGPUを使用します。Mac Mini M4は高速で省電力です。両方とも専用GPUなしで7–13Bモデルを実行できます。',
        bullets: [
          'Mac Mini M4：LLMに最速、Llama 3 8Bで~18 tok/s、省電力',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU、最大64 GBユニファイドRAM',
          '両方とも専用GPUなしでQ4の7B–13Bモデルを実行可能',
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
          '32 GBを超えるアクセス可能なユニファイドメモリが必要なWindows/Linuxユーザーには、UM790 Proが64 GBに対応する唯一のミニPCオプション',
        ],
      },
      body1: {
        title: 'Mac Mini M4は速度と効率でトップ',
        content: [
          '<strong>Mac Mini M4は7B Q4モデルで毎秒~18トークンを達成し、負荷時に~30 Wを消費し、約599 USDから購入可能です — ローカルLLM推論において最速で最も省電力なミニPCです。</strong> M4チップはユニファイドメモリアーキテクチャを使用しており、メモリコピーのオーバーヘッドなしに同じ物理RAMをCPUとGPUが共有します。',
          'Minisforum UM790 ProはApple以外の最良の代替品です。AMD Ryzen 9 7940HSにはRadeon 780M iGPUが含まれており、システムはユニファイドメモリとして設定された最大64 GB DDR5 RAMをサポートします。ROCmを使用したLinux上では、同じ7B Q4モデルで約8トークン毎秒を達成します。',
          '以下の表は、CPU/GPU、最適なメモリ構成、測定されたLLM速度の3つの観点から2つのミニPCを比較しています。',
        ],
        columns: ['ミニPC', 'CPU/GPU', '最適構成', 'LLM速度（7B Q4）'],
        rows: [
          { 'ミニPC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '最適構成': '16 GBユニファイド', 'LLM速度（7B Q4）': '~18 tok/s' },
          { 'ミニPC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '最適構成': '64 GB DDR5', 'LLM速度（7B Q4）': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'ユニファイドメモリがLLMパフォーマンスの決定的な差別化要素',
        content: [
          '専用GPUスロットを持つ標準的なミニPCはLLM推論に適していません。なぜならGPUのVRAMは工場出荷時に固定（通常4–8 GB）され、拡張できないからです。Mac Mini M4とUM790 Proはどちらも、システムのメインRAMをユニファイドGPUメモリとして使用することでこの問題を解決しています。',
          '16 GBユニファイドメモリのMac Mini M4は純粋な推論速度で32 GB DDR5のUM790 Proを上回ります。これはAppleのメモリ帯域幅（~68 GB/s）とMetalのGPUアクセラレーションがRadeon 780M iGPUより効率的なためです。UM790 Proの利点は64 GBへの拡張性で、16 GBに収まらない13Bや30B Q4などの大型モデルの実行を可能にします。',
          'ローカルLLMのハードウェア選択に関する完全なガイドについては、ローカルLLMセットアップのソフトウェア面をカバーする<a href="/ja/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最適なOllamaフロントエンド概要</a>をご覧ください。',
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
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '本地 LLM 最佳迷你电脑是什么？',
    seoTitle: '本地 LLM 最佳迷你电脑？| Prompt Bites | PromptQuorum',
    metaDescription: '本地 LLM 最佳迷你电脑：Minisforum UM790 Pro（AMD iGPU、32 GB 内存）和 Mac Mini M4（快速、节能）。两者均无需独立 GPU 即可运行 7–13B 模型。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '本地 LLM 最佳迷你电脑是什么？',
        answer: 'Minisforum UM790 Pro 和 Mac Mini M4 是运行本地 LLM 的顶级迷你电脑。UM790 Pro 使用带统一内存的 AMD iGPU。Mac Mini M4 速度更快且更节能。两者均无需独立 GPU 即可运行 7–13B 模型。',
        bullets: [
          'Mac Mini M4：LLM 速度最快，Llama 3 8B 约 18 tok/s，节能',
          'Minisforum UM790 Pro：AMD Radeon 780M iGPU，最高 64 GB 统一内存',
          '两者均可在无独立 GPU 的情况下运行 Q4 量化的 7B–13B 模型',
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
          '对于需要超过 32 GB 可访问统一内存的 Windows/Linux 用户，UM790 Pro 是唯一可扩展到 64 GB 的迷你电脑选项',
        ],
      },
      body1: {
        title: 'Mac Mini M4 在速度和效率上领先',
        content: [
          '<strong>Mac Mini M4 在 7B Q4 模型上达到每秒约 18 个 token，负载下消耗约 30 W，起价约 599 USD——使其成为本地 LLM 推理中速度最快、最节能的迷你电脑。</strong> M4 芯片采用统一内存架构，意味着相同的物理内存在 CPU 和 GPU 之间共享，无需内存复制开销。',
          'Minisforum UM790 Pro 提供了最佳的非 Apple 替代方案。其 AMD Ryzen 9 7940HS 包含 Radeon 780M iGPU，系统支持高达 64 GB 的 DDR5 内存配置为统一内存。在 Linux 和 ROCm 下，它在相同的 7B Q4 模型上达到约 8 个 token 每秒。',
          '下表比较了两款迷你电脑的 CPU/GPU、最佳内存配置和测量的 LLM 速度。',
        ],
        columns: ['迷你电脑', 'CPU/GPU', '最佳配置', 'LLM 速度（7B Q4）'],
        rows: [
          { '迷你电脑': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '最佳配置': '16 GB 统一内存', 'LLM 速度（7B Q4）': '~18 tok/s' },
          { '迷你电脑': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '最佳配置': '64 GB DDR5', 'LLM 速度（7B Q4）': '~8 tok/s' },
        ],
      },
      body2: {
        title: '统一内存是 LLM 性能的关键差异化因素',
        content: [
          '配备独立 GPU 插槽的标准迷你电脑不适合 LLM 推理，因为 GPU VRAM 在出厂时固定——通常为 4–8 GB——无法扩展。Mac Mini M4 和 UM790 Pro 都通过将系统主内存用作统一 GPU 内存来解决这个问题。',
          '配备 16 GB 统一内存的 Mac Mini M4 在纯推理速度上超越配备 32 GB DDR5 的 UM790 Pro，因为 Apple 的内存带宽（~68 GB/s）和 Metal GPU 加速比 Radeon 780M iGPU 更高效。UM790 Pro 的优势是可扩展到 64 GB，允许运行 16 GB 放不下的 13B 和 30B Q4 等更大模型。',
          '有关本地 LLM 硬件选择的完整指南，请参阅涵盖本地 LLM 配置软件方面的 <a href="/zh/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最佳 Ollama 前端概览</a>。',
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
        ],
      },
    },
  },
}
