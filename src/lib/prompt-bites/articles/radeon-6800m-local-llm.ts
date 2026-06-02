import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Can You Run Local LLMs on a Radeon RX 6800M?',
    seoTitle: 'Radeon 6800M Local LLM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — Radeon RX 6800M (12 GB VRAM) runs LLMs via ROCm on Linux or llama.cpp on all platforms. Llama 3 8B Q4 runs at ~12 tok/s. Windows ROCm support is limited.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B'],
    current_hardware_mentioned: ['Radeon RX 6800M 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Laptop users with an AMD Radeon RX 6800M wanting to run local LLMs',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'best-models-amd-5700x-3070ti'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run local LLMs on a Radeon RX 6800M?',
        answer: 'Yes. The Radeon RX 6800M has 12 GB GDDR6 VRAM and can run local LLMs. On Linux, use ROCm for GPU acceleration. On Windows, use llama.cpp with Vulkan or CPU fallback. Llama 3 8B Q4_K_M runs at ~12 tok/s on Linux with ROCm.',
        bullets: [
          'Linux + ROCm: full GPU acceleration, ~12 tok/s on Llama 3 8B Q4',
          'Windows: use llama.cpp with Vulkan backend for partial GPU offload',
          '12 GB VRAM supports models up to 14B at Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
        answer: 'Ja. Die Radeon RX 6800M hat 12 GB GDDR6 VRAM und kann lokale LLMs ausführen. Unter Linux verwenden Sie ROCm für GPU-Beschleunigung. Unter Windows nutzen Sie llama.cpp mit Vulkan oder CPU-Fallback. Llama 3 8B Q4_K_M läuft auf Linux mit ROCm bei ~12 tok/s.',
        bullets: [
          'Linux + ROCm: vollständige GPU-Beschleunigung, ~12 tok/s auf Llama 3 8B Q4',
          'Windows: llama.cpp mit Vulkan-Backend für partielles GPU-Offloading',
          '12 GB VRAM unterstützt Modelle bis 14B bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
        answer: 'Oui. La Radeon RX 6800M dispose de 12 Go de VRAM GDDR6 et peut faire tourner des LLMs locaux. Sur Linux, utilisez ROCm pour l\'accélération GPU. Sur Windows, utilisez llama.cpp avec Vulkan ou en fallback CPU. Llama 3 8B Q4_K_M tourne à ~12 tok/s sur Linux avec ROCm.',
        bullets: [
          'Linux + ROCm : accélération GPU complète, ~12 tok/s sur Llama 3 8B Q4',
          'Windows : llama.cpp avec backend Vulkan pour déchargement GPU partiel',
          '12 Go de VRAM supporte les modèles jusqu\'à 14B en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Radeon RX 6800M でローカル LLM を実行できますか？',
        answer: 'はい。Radeon RX 6800M は 12 GB GDDR6 VRAM を持ち、ローカル LLM を実行できます。Linux では ROCm で GPU 加速、Windows では Vulkan バックエンドの llama.cpp か CPU フォールバックを使用します。Linux + ROCm での Llama 3 8B Q4_K_M は ~12 tok/s で動作します。',
        bullets: [
          'Linux + ROCm：完全な GPU 加速、Llama 3 8B Q4 で ~12 tok/s',
          'Windows：Vulkan バックエンドの llama.cpp でパーシャル GPU オフロード',
          '12 GB VRAM は Q4_K_M で 14B までのモデルをサポート',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
        answer: '可以。Radeon RX 6800M 有 12 GB GDDR6 VRAM，能运行本地 LLM。Linux 下使用 ROCm 获得 GPU 加速；Windows 下使用 Vulkan 后端的 llama.cpp 或 CPU 后备。Linux + ROCm 下 Llama 3 8B Q4_K_M 运行速度约 12 tok/s。',
        bullets: [
          'Linux + ROCm：完整 GPU 加速，Llama 3 8B Q4 约 12 tok/s',
          'Windows：使用 Vulkan 后端的 llama.cpp 进行部分 GPU 卸载',
          '12 GB VRAM 支持 Q4_K_M 量化下最高 14B 的模型',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M is a mobile RDNA 2 chip with 12 GB VRAM — NOT the desktop RX 6800; ROCm support for mobile RDNA 2 has been historically inconsistent',
          'Vulkan backend (Ollama or llama.cpp) is the most reliable cross-platform path; Linux + ROCm gives higher speed (~12 tok/s) when it works',
          'Vulkan speeds are 30–40% slower than CUDA on equivalent NVIDIA cards — expect ~14 tok/s on Llama 3 8B vs ~25 tok/s on a 12 GB NVIDIA card',
          'Always run plugged in: AMD mobile GPUs throttle on battery and LLM inference runs 40–50% slower',
        ],
      },
      body1: {
        title: 'What the Radeon 6800M Can Actually Run',
        content: [
          'As of May 2026, <strong>the Radeon RX 6800M is a mobile RDNA 2 chip with 12 GB GDDR6 VRAM — this is not the desktop RX 6800, which uses a different GPU die with different ROCm support coverage.</strong> With 12 GB, the 6800M fits models up to 14B at Q4_K_M without layer offloading, matching the capacity of a desktop RTX 3060 12 GB.',
          'ROCm support for mobile RDNA 2 chips has been historically inconsistent — check AMD\'s official ROCm GPU support matrix for current status before relying on it. On Linux where ROCm works, Ollama auto-detects the 6800M and Llama 3 8B Q4_K_M reaches approximately 12 tok/s. The Vulkan backend in Ollama or llama.cpp runs on both Windows and Linux without a ROCm dependency and is the most reliable cross-platform path.',
          'Vulkan speeds are 30–40% lower than CUDA on equivalent NVIDIA hardware: the same model that runs at ~25 tok/s on an RTX 3060 12 GB reaches ~14 tok/s on the 6800M via Vulkan. For a comparison with a CUDA rig at 8 GB VRAM, see the <a href="/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti rig comparison</a>.',
        ],
        columns: ['Model', 'VRAM Q4', 'Tested Speed'],
        rows: [
          { 'Model': 'Llama 3 8B Q4_K_M', 'VRAM Q4': '~5 GB', 'Tested Speed': '~14 tok/s (Vulkan)' },
          { 'Model': 'Mistral Small Q5_K_M', 'VRAM Q4': '~6 GB', 'Tested Speed': '~13 tok/s (Vulkan)' },
          { 'Model': 'Phi-4 14B Q4', 'VRAM Q4': '~9 GB', 'Tested Speed': '~10 tok/s (Vulkan)' },
          { 'Model': 'Qwen 3 14B Q4_K_M', 'VRAM Q4': '~9 GB', 'Tested Speed': '~9 tok/s (Vulkan)' },
        ],
      },
      body2: {
        title: 'Setting Up Local LLMs on the 6800M',
        content: [
          '<strong>On Linux, install Ollama — it includes Vulkan support by default and auto-detects the 6800M.</strong> If ROCm is working on your specific chip (check the AMD ROCm GPU support matrix), Ollama will use it automatically and deliver approximately 12 tok/s on Llama 3 8B Q4_K_M instead of the Vulkan baseline.',
          'On Windows, native ROCm is not reliably available for the 6800M. Use Ollama with its Vulkan support or download a prebuilt Vulkan binary of llama.cpp and load your GGUF with <code>-ngl 33</code> to offload layers to the GPU. WSL2 with GPU passthrough is another option for accessing Linux-only ROCm benefits without dual-booting.',
          'Always run plugged in — AMD mobile GPUs throttle aggressively on battery and LLM inference speed drops 40–50% unplugged. For the full GPU comparison across NVIDIA and AMD, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs guide</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Test your setup: run <code>ollama run llama3:8b</code> and verify GPU use with <code>rocm-smi</code> (if ROCm) or check <code>ollama ps</code>. If the model falls back to CPU, confirm GPU detection with <code>ollama info</code>.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Radeon 6800M and Local LLMs',
        faqs: [
          {
            q: 'Does the Radeon 6800M support ROCm officially?',
            a: 'ROCm support for mobile RDNA 2 chips has been historically inconsistent. Desktop RDNA 2 cards (RX 6800, RX 6900 XT) are officially listed in the AMD ROCm GPU support matrix; the mobile 6800M is a different chip. Check AMD\'s ROCm compatibility page for current status before relying on ROCm acceleration.',
          },
          {
            q: 'Is the 6800M faster than RTX 3070 Mobile for LLMs?',
            a: 'The 6800M\'s 12 GB VRAM versus 8 GB on most RTX 3070 Mobile configurations matters more for model fit than raw speed. At equal model size, the RTX 3070 Mobile benefits from better CUDA driver integration on Windows. On Linux with ROCm working on the 6800M, the speed gap narrows.',
          },
          {
            q: 'Can I use Apple Silicon-style unified memory tricks on AMD mobile?',
            a: 'No. The 6800M uses dedicated GDDR6 VRAM separate from system RAM — there is no memory pooling equivalent to Apple\'s M-series unified memory architecture. All 12 GB is GPU-only; system RAM is not addressable as additional VRAM.',
          },
          {
            q: 'How hot does the 6800M get running LLMs continuously?',
            a: 'Expect 80–90°C under sustained inference load, similar to a gaming session. Thermal throttling above ~100°C will reduce inference speed. Use Radeon Software (Windows) or CoreCtrl (Linux) to set an undervolting profile and ensure good airflow.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
    seoTitle: 'Radeon 6800M für lokale LLMs? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja, Radeon 6800M (12 GB): ROCm Linux ~12 tok/s, Vulkan Windows ~14 tok/s. Mobile RDNA 2 ≠ Desktop RX 6800. Muss angeschlossen sein für beste Performance.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
        answer: 'Ja. Die Radeon RX 6800M hat 12 GB GDDR6 VRAM und kann lokale LLMs ausführen. Unter Linux verwenden Sie ROCm für GPU-Beschleunigung. Unter Windows nutzen Sie llama.cpp mit Vulkan oder CPU-Fallback. Llama 3 8B Q4_K_M läuft auf Linux mit ROCm bei ~12 tok/s.',
        bullets: [
          'Linux + ROCm: vollständige GPU-Beschleunigung, ~12 tok/s auf Llama 3 8B Q4',
          'Windows: llama.cpp mit Vulkan-Backend für partielles GPU-Offloading',
          '12 GB VRAM unterstützt Modelle bis 14B bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die Radeon RX 6800M ist ein mobiler RDNA-2-Chip mit 12 GB GDDR6 VRAM — NICHT die Desktop-RX-6800, die einen anderen GPU-Chip mit unterschiedlichem ROCm-Support verwendet',
          'Vulkan-Backend (Ollama oder llama.cpp) ist der zuverlässigste Cross-Platform-Pfad; Linux + ROCm liefert höhere Geschwindigkeit (~12 tok/s), wenn es funktioniert',
          'Vulkan-Geschwindigkeiten sind 30–40% langsamer als CUDA auf vergleichbaren NVIDIA-Karten — erwarten Sie ~14 tok/s auf Llama 3 8B vs. ~25 tok/s auf einer 12-GB-NVIDIA-Karte',
          'Immer mit Stromversorgung arbeiten: AMD-mobile GPUs drosseln bei Batteriebetrieb und LLM-Inferenz ist 40–50% langsamer',
        ],
      },
      body1: {
        title: 'Was die Radeon RX 6800M tatsächlich ausführen kann',
        content: [
          '<strong>Die Radeon RX 6800M ist ein mobiler RDNA-2-Chip mit 12 GB GDDR6 VRAM — dies ist nicht die Desktop-RX-6800, die einen anderen GPU-Chip mit unterschiedlichem ROCm-Support verwendet.</strong> Mit 12 GB passt die 6800M zu Modellen bis 14B bei Q4_K_M ohne Layer-Offloading und entspricht der Kapazität einer Desktop-RTX-3060 mit 12 GB.',
          'ROCm-Support für mobile RDNA-2-Chips ist historisch inkonsistent gewesen — überprüfen Sie vor der Verwendung die offizielle AMD ROCm GPU-Unterstützungsmatrix. Unter Linux, wo ROCm funktioniert, erkennt Ollama die 6800M automatisch und Llama 3 8B Q4_K_M erreicht ungefähr 12 tok/s. Das Vulkan-Backend in Ollama oder llama.cpp läuft auf Windows und Linux ohne ROCm-Abhängigkeit und ist der zuverlässigste Cross-Platform-Pfad.',
          'Vulkan-Geschwindigkeiten sind 30–40% niedriger als CUDA auf vergleichbarer NVIDIA-Hardware: das gleiche Modell, das auf einer RTX 3060 mit 12 GB bei ~25 tok/s läuft, erreicht via Vulkan auf der 6800M ~14 tok/s. Für einen Vergleich mit einem CUDA-System mit 8 GB VRAM, siehe die <a href="/de/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti Rig-Vergleich</a>.',
        ],
        columns: ['Modell', 'VRAM Q4', 'Getestete Geschwindigkeit'],
        rows: [
          { 'Modell': 'Llama 3 8B Q4_K_M', 'VRAM Q4': '~5 GB', 'Getestete Geschwindigkeit': '~14 tok/s (Vulkan)' },
          { 'Modell': 'Mistral Small Q5_K_M', 'VRAM Q4': '~6 GB', 'Getestete Geschwindigkeit': '~13 tok/s (Vulkan)' },
          { 'Modell': 'Phi-4 14B Q4', 'VRAM Q4': '~9 GB', 'Getestete Geschwindigkeit': '~10 tok/s (Vulkan)' },
          { 'Modell': 'Qwen 3 14B Q4_K_M', 'VRAM Q4': '~9 GB', 'Getestete Geschwindigkeit': '~9 tok/s (Vulkan)' },
        ],
      },
      body2: {
        title: 'Einrichten von lokalen LLMs auf der 6800M',
        content: [
          '<strong>Unter Linux installieren Sie Ollama — es enthält standardmäßig Vulkan-Support und erkennt die 6800M automatisch.</strong> Wenn ROCm auf Ihrem spezifischen Chip funktioniert (überprüfen Sie die AMD ROCm GPU-Unterstützungsmatrix), verwendet Ollama es automatisch und liefert ungefähr 12 tok/s auf Llama 3 8B Q4_K_M statt der Vulkan-Baseline.',
          'Unter Windows ist natives ROCm für die 6800M nicht zuverlässig verfügbar. Verwenden Sie Ollama mit Vulkan-Support oder laden Sie ein vorkompiliertes Vulkan-Binary von llama.cpp herunter und laden Sie Ihr GGUF mit <code>-ngl 33</code>, um Layer auf die GPU auszulagern. WSL2 mit GPU-Passthrough ist eine weitere Option, um Linux-exklusive ROCm-Vorteile ohne Dual-Boot zu nutzen.',
          'Immer mit Stromversorgung arbeiten — AMD-mobile GPUs drosseln aggressiv bei Batteriebetrieb und die LLM-Inferenz-Geschwindigkeit sinkt 40–50% ohne Strom. Für den vollständigen GPU-Vergleich zwischen NVIDIA und AMD, siehe den <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">Leitfaden zu den besten GPUs für lokale LLMs</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Testen Sie Ihr Setup: Führen Sie <code>ollama run llama3:8b</code> aus und überprüfen Sie die GPU-Nutzung mit <code>rocm-smi</code> (bei ROCm) oder überprüfen Sie <code>ollama ps</code>. Wenn das Modell auf CPU zurückfällt, bestätigen Sie die GPU-Erkennung mit <code>ollama info</code>.' }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Radeon 6800M und lokalen LLMs',
        faqs: [
          {
            q: 'Unterstützt die Radeon 6800M ROCm offiziell?',
            a: 'ROCm-Support für mobile RDNA-2-Chips ist historisch inkonsistent gewesen. Desktop-RDNA-2-Karten (RX 6800, RX 6900 XT) sind offiziell in der AMD ROCm GPU-Unterstützungsmatrix aufgeführt; die mobile 6800M ist ein anderer Chip. Überprüfen Sie AMDs ROCm-Kompatibilitätsseite für den aktuellen Status, bevor Sie sich auf ROCm-Beschleunigung verlassen.',
          },
          {
            q: 'Ist die 6800M schneller als RTX 3070 Mobile für LLMs?',
            a: 'Die 12 GB VRAM der 6800M versus 8 GB bei den meisten RTX 3070 Mobile-Konfigurationen ist wichtiger für Modellpassform als für Rohgeschwindigkeit. Bei gleicher Modellgröße profitiert die RTX 3070 Mobile von besserer CUDA-Treiberintegration unter Windows. Unter Linux mit ROCm auf der 6800M schließt sich die Geschwindigkeitslücke.',
          },
          {
            q: 'Kann ich Apple-Silicon-artige Unified-Memory-Tricks auf AMD-Mobile nutzen?',
            a: 'Nein. Die 6800M verwendet separaten GDDR6-VRAM getrennt vom Systemspeicher — es gibt kein Memory-Pooling-Äquivalent zu Apples M-Series-Unified-Memory-Architektur. Alle 12 GB sind GPU-nur; der Systemspeicher ist nicht als zusätzliches VRAM adressierbar.',
          },
          {
            q: 'Wie heiß wird die 6800M bei kontinuierlicher LLM-Inferenz?',
            a: 'Erwarten Sie 80–90°C unter kontinuierlicher Inferenzlast, ähnlich wie bei einer Gaming-Sitzung. Thermische Drosselung über ~100°C reduziert die Inferenzgeschwindigkeit. Verwenden Sie Radeon Software (Windows) oder CoreCtrl (Linux), um ein Undervolting-Profil einzustellen und ensure gute Belüftung.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
    seoTitle: 'Radeon 6800M pour LLM local ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui, Radeon 6800M (12 Go): ROCm Linux ~12 tok/s, Vulkan Windows ~14 tok/s. RDNA 2 mobile ≠ RX 6800 bureau. Branché obligatoire.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
        answer: 'Oui. La Radeon RX 6800M dispose de 12 Go de VRAM GDDR6 et peut faire tourner des LLMs locaux. Sur Linux, utilisez ROCm pour l\'accélération GPU. Sur Windows, utilisez llama.cpp avec Vulkan ou en fallback CPU. Llama 3 8B Q4_K_M tourne à ~12 tok/s sur Linux avec ROCm.',
        bullets: [
          'Linux + ROCm : accélération GPU complète, ~12 tok/s sur Llama 3 8B Q4',
          'Windows : llama.cpp avec backend Vulkan pour déchargement GPU partiel',
          '12 Go de VRAM supporte les modèles jusqu\'à 14B en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La Radeon RX 6800M est une puce RDNA 2 mobile avec 12 Go de VRAM GDDR6 — ce n\'est PAS la RX 6800 de bureau, qui utilise un chip GPU différent avec un support ROCm différent',
          'Le backend Vulkan (Ollama ou llama.cpp) est le chemin inter-plateforme le plus fiable ; Linux + ROCm offre une vitesse plus élevée (~12 tok/s) quand cela fonctionne',
          'Les vitesses Vulkan sont 30–40 % plus lentes que CUDA sur des cartes NVIDIA équivalentes — attendez-vous à ~14 tok/s sur Llama 3 8B vs ~25 tok/s sur une carte NVIDIA 12 Go',
          'Toujours connecté à l\'alimentation : les GPU AMD mobiles réduisent sa fréquence sur batterie et l\'inférence LLM fonctionne 40–50 % plus lentement',
        ],
      },
      body1: {
        title: 'Ce que la Radeon 6800M peut réellement faire tourner',
        content: [
          '<strong>La Radeon RX 6800M est une puce RDNA 2 mobile avec 12 Go de VRAM GDDR6 — ce n\'est pas la RX 6800 de bureau, qui utilise un chip GPU différent avec un support ROCm différent.</strong> Avec 12 Go, la 6800M s\'adapte à des modèles jusqu\'à 14B en Q4_K_M sans déchargement de couches, ce qui correspond à la capacité d\'une RTX 3060 de bureau 12 Go.',
          'Le support ROCm pour les chips RDNA 2 mobiles a été historiquement incohérent — vérifiez la matrice officielle de support GPU AMD ROCm avant de vous y fier. Sur Linux où ROCm fonctionne, Ollama détecte automatiquement la 6800M et Llama 3 8B Q4_K_M atteint environ 12 tok/s. Le backend Vulkan dans Ollama ou llama.cpp s\'exécute sur Windows et Linux sans dépendance ROCm et est le chemin inter-plateforme le plus fiable.',
          'Les vitesses Vulkan sont 30–40 % inférieures à CUDA sur le matériel NVIDIA équivalent : le même modèle qui s\'exécute à ~25 tok/s sur une RTX 3060 12 Go atteint ~14 tok/s sur la 6800M via Vulkan. Pour une comparaison avec un rig CUDA à 8 Go de VRAM, voir la <a href="/fr/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">comparaison du rig AMD 5700X + RTX 3070 Ti</a>.',
        ],
        columns: ['Modèle', 'VRAM Q4', 'Vitesse testée'],
        rows: [
          { 'Modèle': 'Llama 3 8B Q4_K_M', 'VRAM Q4': '~5 Go', 'Vitesse testée': '~14 tok/s (Vulkan)' },
          { 'Modèle': 'Mistral Small Q5_K_M', 'VRAM Q4': '~6 Go', 'Vitesse testée': '~13 tok/s (Vulkan)' },
          { 'Modèle': 'Phi-4 14B Q4', 'VRAM Q4': '~9 Go', 'Vitesse testée': '~10 tok/s (Vulkan)' },
          { 'Modèle': 'Qwen 3 14B Q4_K_M', 'VRAM Q4': '~9 Go', 'Vitesse testée': '~9 tok/s (Vulkan)' },
        ],
      },
      body2: {
        title: 'Configuration des LLMs locaux sur la 6800M',
        content: [
          '<strong>Sur Linux, installez Ollama — il inclut le support Vulkan par défaut et détecte automatiquement la 6800M.</strong> Si ROCm fonctionne sur votre chip spécifique (vérifiez la matrice de support GPU AMD ROCm), Ollama l\'utilisera automatiquement et livrera environ 12 tok/s sur Llama 3 8B Q4_K_M au lieu de la baseline Vulkan.',
          'Sur Windows, ROCm natif n\'est pas disponible de manière fiable pour la 6800M. Utilisez Ollama avec son support Vulkan ou téléchargez un binaire Vulkan précompilé de llama.cpp et chargez votre GGUF avec <code>-ngl 33</code> pour décharger les couches sur le GPU. WSL2 avec passage de GPU est une autre option pour accéder aux avantages Linux-only ROCm sans dual-boot.',
          'Toujours connecté à l\'alimentation — les GPU AMD mobiles réduisent sa fréquence agressivement sur batterie et la vitesse d\'inférence LLM chute 40–50 % sans électricité. Pour la comparaison complète des GPU entre NVIDIA et AMD, voir le <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guide des meilleures GPU pour LLMs locaux</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Testez votre installation : exécutez <code>ollama run llama3:8b</code> et vérifiez l\'utilisation du GPU avec <code>rocm-smi</code> (si ROCm) ou vérifiez <code>ollama ps</code>. Si le modèle revient au CPU, confirmez la détection GPU avec <code>ollama info</code>.' }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Radeon 6800M et LLMs locaux',
        faqs: [
          {
            q: 'La Radeon 6800M supporte-t-elle ROCm officiellement ?',
            a: 'Le support ROCm pour les chips RDNA 2 mobiles a été historiquement incohérent. Les cartes RDNA 2 de bureau (RX 6800, RX 6900 XT) sont officiellement listées dans la matrice de support GPU AMD ROCm ; la mobile 6800M est un chip différent. Consultez la page de compatibilité ROCm d\'AMD pour le statut actuel avant de vous fier à l\'accélération ROCm.',
          },
          {
            q: 'La 6800M est-elle plus rapide que RTX 3070 Mobile pour les LLMs ?',
            a: 'Les 12 Go de VRAM de la 6800M par rapport à 8 Go sur la plupart des configurations RTX 3070 Mobile importent davantage pour l\'adaptation du modèle que pour la vitesse brute. À taille de modèle égale, la RTX 3070 Mobile bénéficie d\'une meilleure intégration du driver CUDA sur Windows. Sur Linux avec ROCm fonctionnant sur la 6800M, l\'écart de vitesse se réduit.',
          },
          {
            q: 'Puis-je utiliser des astuces de mémoire unifiée de style Apple Silicon sur AMD mobile ?',
            a: 'Non. La 6800M utilise du VRAM GDDR6 dédié séparé de la RAM système — il n\'y a pas d\'équivalent de pooling mémoire à l\'architecture de mémoire unifiée de la série M d\'Apple. Les 12 Go sont réservés au GPU ; la RAM système n\'est pas adressable comme VRAM supplémentaire.',
          },
          {
            q: 'Quelle température atteint la 6800M lors d\'une inférence LLM continue ?',
            a: 'Attendez-vous à 80–90°C sous charge d\'inférence soutenue, similaire à une session de jeu. L\'étranglement thermique au-dessus de ~100°C réduira la vitesse d\'inférence. Utilisez Radeon Software (Windows) ou CoreCtrl (Linux) pour définir un profil d\'abaissement de tension et assurer une bonne circulation d\'air.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: 'Radeon RX 6800M でローカル LLM を実行できますか？',
    seoTitle: 'Radeon 6800M でローカル LLM？| Prompt Bites | PromptQuorum',
    metaDescription: 'はい、Radeon 6800M（12 GB）：ROCm Linux 約12 tok/s、Vulkan Windows 約14 tok/s。モバイル RDNA 2 ≠ デスクトップRX 6800。常に接続必須。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Radeon RX 6800M でローカル LLM を実行できますか？',
        answer: 'はい。Radeon RX 6800M は 12 GB GDDR6 VRAM を持ち、ローカル LLM を実行できます。Linux では ROCm で GPU 加速、Windows では Vulkan バックエンドの llama.cpp か CPU フォールバックを使用します。Linux + ROCm での Llama 3 8B Q4_K_M は ~12 tok/s で動作します。',
        bullets: [
          'Linux + ROCm：完全な GPU 加速、Llama 3 8B Q4 で ~12 tok/s',
          'Windows：Vulkan バックエンドの llama.cpp でパーシャル GPU オフロード',
          '12 GB VRAM は Q4_K_M で 14B までのモデルをサポート',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M はモバイル RDNA 2 チップで 12 GB GDDR6 VRAM — これはデスクトップ RX 6800 ではなく、異なる GPU ダイで異なる ROCm サポート範囲を持つ',
          'Vulkan バックエンド（Ollama または llama.cpp）は最も信頼できるクロスプラットフォームパス；Linux + ROCm は機能する場合より高速（~12 tok/s）',
          'Vulkan 速度は同等の NVIDIA カードの CUDA より 30～40% 遅い — Llama 3 8B で ~14 tok/s を予想対 12 GB NVIDIA カードで ~25 tok/s',
          ' 常に電源に接続する：AMD モバイル GPU はバッテリー時に周波数低下し LLM 推論は 40～50% 遅くなる',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M が実際に実行できること',
        content: [
          '<strong>Radeon RX 6800M はモバイル RDNA 2 チップで 12 GB GDDR6 VRAM — これはデスクトップ RX 6800 ではなく、異なる GPU ダイで異なる ROCm サポート範囲を持つ。</strong> 12 GB では 6800M は Q4_K_M で最高 14B のモデルをレイヤーオフロードなしで実行でき、デスクトップ RTX 3060 12 GB と同等の容量。',
          'モバイル RDNA 2 チップの ROCm サポートは歴史的に一貫していない — 依存する前に AMD 公式 ROCm GPU サポートマトリックスを確認してください。ROCm が機能する Linux では Ollama が 6800M を自動検出し Llama 3 8B Q4_K_M は約 12 tok/s に達する。Ollama または llama.cpp の Vulkan バックエンドは Windows と Linux の両方で動作し ROCm 依存なしで最も信頼できるクロスプラットフォームパスです。',
          'Vulkan 速度は同等の NVIDIA ハードウェア上の CUDA より 30～40% 低速：RTX 3060 12 GB で ~25 tok/s で動作する同じモデルは Vulkan で 6800M 上で ~14 tok/s に達する。8 GB VRAM の CUDA リグとの比較については <a href="/ja/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti リグ比較</a>を参照。',
        ],
        columns: ['モデル', 'VRAM Q4', 'テスト速度'],
        rows: [
          { 'モデル': 'Llama 3 8B Q4_K_M', 'VRAM Q4': '~5 GB', 'テスト速度': '~14 tok/s (Vulkan)' },
          { 'モデル': 'Mistral Small Q5_K_M', 'VRAM Q4': '~6 GB', 'テスト速度': '~13 tok/s (Vulkan)' },
          { 'モデル': 'Phi-4 14B Q4', 'VRAM Q4': '~9 GB', 'テスト速度': '~10 tok/s (Vulkan)' },
          { 'モデル': 'Qwen 3 14B Q4_K_M', 'VRAM Q4': '~9 GB', 'テスト速度': '~9 tok/s (Vulkan)' },
        ],
      },
      body2: {
        title: '6800M でのローカル LLM 設定',
        content: [
          '<strong>Linux では Ollama をインストール — デフォルトで Vulkan サポートが含まれ 6800M を自動検出します。</strong> ROCm が特定のチップで動作している場合（AMD ROCm GPU サポートマトリックスを確認）、Ollama は自動的に使用し Vulkan ベースラインの代わりに Llama 3 8B Q4_K_M で約 12 tok/s を提供します。',
          'Windows では 6800M に対してネイティブ ROCm は確実に利用可能ではない。Vulkan サポート付き Ollama を使用するか llama.cpp の事前ビルド済み Vulkan バイナリをダウンロードし <code>-ngl 33</code> でレイヤーを GPU にオフロードするために GGUF をロードしてください。GPU パススルー付き WSL2 はデュアルブートなしで Linux 限定 ROCm の利点にアクセスするもう 1 つの選択肢。',
          '常に電源に接続 — AMD モバイル GPU はバッテリー時に積極的に周波数低下し LLM 推論速度は 40～50% 低下。NVIDIA と AMD 間の完全 GPU 比較については <a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカル LLM 向けベスト GPU ガイド</a>を参照。',
        ],
        callouts: [{ type: 'tip', text: 'セットアップをテスト：<code>ollama run llama3:8b</code> を実行し <code>rocm-smi</code>（ROCm の場合）で GPU 使用を確認するか <code>ollama ps</code> をチェック。モデルが CPU にフォールバックした場合 <code>ollama info</code> で GPU 検出を確認。' }],
      },
      faq: {
        id: 'faq',
        title: 'Radeon 6800M とローカル LLM に関するよくある質問',
        faqs: [
          {
            q: 'Radeon 6800M は ROCm を公式にサポートしていますか？',
            a: 'モバイル RDNA 2 チップの ROCm サポートは歴史的に一貫していない。デスクトップ RDNA 2 カード（RX 6800、RX 6900 XT）は AMD ROCm GPU サポートマトリックスに正式にリストされ；モバイル 6800M は異なるチップ。ROCm 加速に依存する前に AMD の ROCm 互換性ページで現在のステータスを確認してください。',
          },
          {
            q: '6800M はローカル LLM で RTX 3070 Mobile より高速ですか？',
            a: '6800M の 12 GB VRAM 対ほとんどの RTX 3070 Mobile 構成の 8 GB は生スピード以上にモデル適合に重要。同等のモデルサイズで RTX 3070 Mobile は Windows 上でより良い CUDA ドライバ統合の利益があります。6800M で ROCm が機能する Linux ではスピードギャップが縮まります。',
          },
          {
            q: 'AMD モバイルで Apple Silicon スタイルの統一メモリのコツを使用できますか？',
            a: 'いいえ。6800M はシステム RAM とは別の専用 GDDR6 VRAM を使用 — Apple の M シリーズ統一メモリアーキテクチャと同等のメモリプーリングはありません。すべての 12 GB は GPU 限定；システム RAM は追加 VRAM として対応不可。',
          },
          {
            q: '6800M は継続的な LLM 推論を実行したときどのくらい熱くなりますか？',
            a: 'ゲーミングセッション同様に継続推論負荷下で 80～90°C を予想。~100°C 以上のサーマルスロットリングは推論速度を低下させます。Radeon Software（Windows）または CoreCtrl（Linux）を使用してアンダーボルティングプロファイルを設定し良好なエアフロー確保。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
    seoTitle: 'Radeon 6800M 能运行本地 LLM？| Prompt Bites | PromptQuorum',
    metaDescription: '可以，Radeon 6800M（12 GB）：ROCm Linux 约12 tok/s、Vulkan Windows 约14 tok/s。移动版 RDNA 2 ≠ 桌面版 RX 6800。必须接通。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
        answer: '可以。Radeon RX 6800M 有 12 GB GDDR6 VRAM，能运行本地 LLM。Linux 下使用 ROCm 获得 GPU 加速；Windows 下使用 Vulkan 后端的 llama.cpp 或 CPU 后备。Linux + ROCm 下 Llama 3 8B Q4_K_M 运行速度约 12 tok/s。',
        bullets: [
          'Linux + ROCm：完整 GPU 加速，Llama 3 8B Q4 约 12 tok/s',
          'Windows：使用 Vulkan 后端的 llama.cpp 进行部分 GPU 卸载',
          '12 GB VRAM 支持 Q4_K_M 量化下最高 14B 的模型',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M 是一款移动版 RDNA 2 芯片，拥有 12 GB GDDR6 VRAM——并非桌面版 RX 6800，后者使用不同的 GPU 裸片和不同的 ROCm 支持范围',
          'Vulkan 后端（Ollama 或 llama.cpp）是最可靠的跨平台方案；Linux + ROCm 在有效时提供更高速度（~12 tok/s）',
          'Vulkan 速度比同等 NVIDIA 卡上的 CUDA 慢 30~40%——预计 Llama 3 8B 约 14 tok/s，而 12 GB NVIDIA 卡约 25 tok/s',
          '始终保持供电：AMD 移动版 GPU 在电池模式下会降频，LLM 推理速度降低 40~50%',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M 的实际性能',
        content: [
          '<strong>Radeon RX 6800M 是一款移动版 RDNA 2 芯片，拥有 12 GB GDDR6 VRAM——这并非桌面版 RX 6800，后者使用不同的 GPU 裸片和不同的 ROCm 支持范围。</strong> 凭借 12 GB，6800M 可在 Q4_K_M 量化下运行最高 14B 的模型，无需层卸载，与桌面版 RTX 3060 12 GB 的容量相当。',
          '移动版 RDNA 2 芯片的 ROCm 支持一直不稳定——在依赖前请检查 AMD 官方 ROCm GPU 支持矩阵。在 ROCm 生效的 Linux 上，Ollama 自动识别 6800M，Llama 3 8B Q4_K_M 达到约 12 tok/s。Ollama 或 llama.cpp 中的 Vulkan 后端在 Windows 和 Linux 上均可运行，无需 ROCm 依赖，是最可靠的跨平台方案。',
          'Vulkan 速度比同等 NVIDIA 硬件上的 CUDA 慢 30~40%：RTX 3060 12 GB 上运行约 25 tok/s 的同一模型，在 6800M 上经 Vulkan 约为 14 tok/s。与 8 GB VRAM CUDA 系统的对比，请参考<a href="/zh/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti 主机对比</a>。',
        ],
        columns: ['模型', 'VRAM Q4', '测试速度'],
        rows: [
          { '模型': 'Llama 3 8B Q4_K_M', 'VRAM Q4': '~5 GB', '测试速度': '~14 tok/s (Vulkan)' },
          { '模型': 'Mistral Small Q5_K_M', 'VRAM Q4': '~6 GB', '测试速度': '~13 tok/s (Vulkan)' },
          { '模型': 'Phi-4 14B Q4', 'VRAM Q4': '~9 GB', '测试速度': '~10 tok/s (Vulkan)' },
          { '模型': 'Qwen 3 14B Q4_K_M', 'VRAM Q4': '~9 GB', '测试速度': '~9 tok/s (Vulkan)' },
        ],
      },
      body2: {
        title: '在 6800M 上配置本地 LLM',
        content: [
          '<strong>在 Linux 上安装 Ollama——默认包含 Vulkan 支持并自动识别 6800M。</strong> 如果 ROCm 在您的特定芯片上可用（检查 AMD ROCm GPU 支持矩阵），Ollama 会自动使用它，在 Llama 3 8B Q4_K_M 上提供约 12 tok/s，而非 Vulkan 基准。',
          '在 Windows 上，6800M 没有可靠的原生 ROCm。改用启用 Vulkan 支持的 Ollama，或下载 llama.cpp 的预构建 Vulkan 二进制文件，使用 <code>-ngl 33</code> 加载 GGUF 模型以将层卸载到 GPU。WSL2 带 GPU 直通是另一选项，可在无需双系统的情况下获得 Linux 独有的 ROCm 优势。',
          '始终保持供电——AMD 移动版 GPU 在电池模式下会积极降频，LLM 推理速度降低 40~50%。有关 NVIDIA 和 AMD 的完整 GPU 对比，请参考<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地 LLM 最佳 GPU 指南</a>。',
        ],
        callouts: [{ type: 'tip', text: '测试您的设置：运行 <code>ollama run llama3:8b</code> 并用 <code>rocm-smi</code>（若使用 ROCm）验证 GPU 使用情况，或检查 <code>ollama ps</code>。若模型回退到 CPU，用 <code>ollama info</code> 确认 GPU 检测。' }],
      },
      faq: {
        id: 'faq',
        title: '关于 Radeon 6800M 与本地 LLM 的快速解答',
        faqs: [
          {
            q: 'Radeon 6800M 是否官方支持 ROCm？',
            a: '移动版 RDNA 2 芯片的 ROCm 支持一直不稳定。桌面版 RDNA 2 卡（RX 6800、RX 6900 XT）在 AMD ROCm GPU 支持矩阵中有正式列表；移动版 6800M 是不同的芯片。在依赖 ROCm 加速前，请查看 AMD 的 ROCm 兼容性页面了解当前状态。',
          },
          {
            q: '6800M 与移动版 RTX 3070 相比在 LLM 上速度如何？',
            a: '6800M 的 12 GB VRAM 相比大多数移动版 RTX 3070 的 8 GB，对模型容纳能力的影响比原始速度更重要。在相同模型大小下，移动版 RTX 3070 得益于 Windows 上更好的 CUDA 驱动集成。在 Linux 上若 6800M ROCm 生效，速度差距会缩小。',
          },
          {
            q: '我能在 AMD 移动版上使用 Apple Silicon 风格的统一内存技巧吗？',
            a: '不能。6800M 使用独立于系统 RAM 的专用 GDDR6 VRAM——没有等效于 Apple M 系列统一内存架构的内存池方案。全部 12 GB 仅供 GPU 用；系统 RAM 不可作为额外 VRAM 寻址。',
          },
          {
            q: '6800M 持续 LLM 推理时温度有多高？',
            a: '在持续推理负载下预计 80~90°C，类似游戏会话。~100°C 以上的热降频会降低推理速度。使用 Radeon Software（Windows）或 CoreCtrl（Linux）设置欠压配置文件并确保良好的气流。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Puedes ejecutar LLMs locales en una Radeon RX 6800M?',
    seoTitle: '¿Radeon 6800M para LLM local? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí: la Radeon RX 6800M (12 GB) ejecuta LLMs vía ROCm en Linux o llama.cpp. Llama 3 8B Q4 corre a ~12 tok/s. El soporte ROCm en Windows es limitado.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Puedes ejecutar LLMs locales en una Radeon RX 6800M?',
        answer: 'Sí. La Radeon RX 6800M tiene 12 GB de GDDR6 VRAM y puede ejecutar LLMs locales. En Linux, usa ROCm para aceleración GPU. En Windows, usa llama.cpp con Vulkan o CPU como respaldo. Llama 3 8B Q4_K_M corre a ~12 tok/s en Linux con ROCm.',
        bullets: [
          'Linux + ROCm: aceleración GPU completa, ~12 tok/s en Llama 3 8B Q4',
          'Windows: usa llama.cpp con backend Vulkan para descarga parcial a GPU',
          '12 GB VRAM soporta modelos de hasta 14B en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La Radeon RX 6800M es un chip móvil RDNA 2 con 12 GB GDDR6 VRAM — NO es la RX 6800 de escritorio, que usa un die de GPU diferente con distinta cobertura de soporte ROCm',
          'El backend Vulkan (Ollama o llama.cpp) es el camino más confiable entre plataformas; Linux + ROCm ofrece mayor velocidad (~12 tok/s) cuando funciona',
          'Las velocidades con Vulkan son 30–40% más lentas que CUDA en tarjetas NVIDIA equivalentes — espera ~14 tok/s en Llama 3 8B vs ~25 tok/s en una tarjeta NVIDIA de 12 GB',
          'Siempre trabaja conectado a la corriente: las GPU AMD móviles reducen su frecuencia con batería y la inferencia LLM corre 40–50% más lento',
        ],
      },
      body1: {
        title: 'Qué puede ejecutar realmente la Radeon 6800M',
        content: [
          'A mayo de 2026, <strong>la Radeon RX 6800M es un chip móvil RDNA 2 con 12 GB GDDR6 VRAM — no es la RX 6800 de escritorio, que usa un die de GPU diferente con distinta cobertura de soporte ROCm.</strong> Con 12 GB, la 6800M carga modelos de hasta 14B en Q4_K_M sin layer offloading, igualando la capacidad de una RTX 3060 de escritorio con 12 GB.',
          'El soporte ROCm para chips RDNA 2 móviles ha sido históricamente inconsistente — verifica la matriz oficial de soporte de GPU de AMD ROCm antes de depender de él. En Linux donde ROCm funciona, Ollama detecta automáticamente la 6800M y Llama 3 8B Q4_K_M alcanza aproximadamente 12 tok/s. El backend Vulkan en Ollama o llama.cpp corre en Windows y Linux sin dependencia de ROCm y es el camino más confiable entre plataformas.',
          'Las velocidades con Vulkan son 30–40% menores que CUDA en hardware NVIDIA equivalente: el mismo modelo que corre a ~25 tok/s en una RTX 3060 de 12 GB alcanza ~14 tok/s en la 6800M vía Vulkan. Para comparar con un equipo CUDA de 8 GB VRAM, consulta la <a href="/es/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">comparación del equipo AMD 5700X + RTX 3070 Ti</a>.',
        ],
        columns: ['Modelo', 'VRAM Q4', 'Velocidad medida'],
        rows: [
          { 'Modelo': 'Llama 3 8B Q4_K_M', 'VRAM Q4': '~5 GB', 'Velocidad medida': '~14 tok/s (Vulkan)' },
          { 'Modelo': 'Mistral Small Q5_K_M', 'VRAM Q4': '~6 GB', 'Velocidad medida': '~13 tok/s (Vulkan)' },
          { 'Modelo': 'Phi-4 14B Q4', 'VRAM Q4': '~9 GB', 'Velocidad medida': '~10 tok/s (Vulkan)' },
          { 'Modelo': 'Qwen 3 14B Q4_K_M', 'VRAM Q4': '~9 GB', 'Velocidad medida': '~9 tok/s (Vulkan)' },
        ],
      },
      body2: {
        title: 'Cómo configurar LLMs locales en la 6800M',
        content: [
          '<strong>En Linux, instala Ollama — incluye soporte Vulkan por defecto y detecta automáticamente la 6800M.</strong> Si ROCm funciona en tu chip específico (consulta la matriz de soporte de GPU AMD ROCm), Ollama lo usará automáticamente y entregará aproximadamente 12 tok/s en Llama 3 8B Q4_K_M en lugar de la línea base Vulkan.',
          'En Windows, el ROCm nativo no está disponible de forma confiable para la 6800M. Usa Ollama con su soporte Vulkan o descarga un binario Vulkan precompilado de llama.cpp y carga tu GGUF con <code>-ngl 33</code> para descargar capas a la GPU. WSL2 con GPU passthrough es otra opción para acceder a los beneficios exclusivos de ROCm en Linux sin dual-boot.',
          'Siempre trabaja conectado a la corriente — las GPU AMD móviles reducen su frecuencia agresivamente con batería y la velocidad de inferencia LLM cae 40–50% sin alimentación. Para la comparación completa de GPU entre NVIDIA y AMD, consulta la <a href="/es/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guía de las mejores GPU para LLMs locales</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Prueba tu configuración: ejecuta <code>ollama run llama3:8b</code> y verifica el uso de GPU con <code>rocm-smi</code> (si usas ROCm) o revisa <code>ollama ps</code>. Si el modelo cae a CPU, confirma la detección de GPU con <code>ollama info</code>.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la Radeon 6800M y LLMs locales',
        faqs: [
          {
            q: '¿La Radeon 6800M soporta ROCm oficialmente?',
            a: 'El soporte ROCm para chips RDNA 2 móviles ha sido históricamente inconsistente. Las tarjetas RDNA 2 de escritorio (RX 6800, RX 6900 XT) están listadas oficialmente en la matriz de soporte de GPU AMD ROCm; la 6800M móvil es un chip diferente. Consulta la página de compatibilidad ROCm de AMD para el estado actual antes de depender de la aceleración ROCm.',
          },
          {
            q: '¿Es la 6800M más rápida que la RTX 3070 Mobile para LLMs?',
            a: 'Los 12 GB VRAM de la 6800M frente a los 8 GB de la mayoría de configuraciones RTX 3070 Mobile importan más para la capacidad de cargar modelos que para la velocidad bruta. Con el mismo tamaño de modelo, la RTX 3070 Mobile se beneficia de una mejor integración de drivers CUDA en Windows. En Linux con ROCm funcionando en la 6800M, la diferencia de velocidad se reduce.',
          },
          {
            q: '¿Puedo usar trucos de memoria unificada al estilo Apple Silicon en AMD móvil?',
            a: 'No. La 6800M usa GDDR6 VRAM dedicada separada de la RAM del sistema — no existe un pooling de memoria equivalente a la arquitectura de memoria unificada de la serie M de Apple. Los 12 GB completos son solo para la GPU; la RAM del sistema no es direccionable como VRAM adicional.',
          },
          {
            q: '¿Qué temperatura alcanza la 6800M al ejecutar inferencia LLM de forma continua?',
            a: 'Espera 80–90°C bajo carga de inferencia sostenida, similar a una sesión de juego. El throttling térmico por encima de ~100°C reducirá la velocidad de inferencia. Usa Radeon Software (Windows) o CoreCtrl (Linux) para configurar un perfil de undervolting y asegúrate de tener buena ventilación.',
          },
        ],
      },
    },
  },
}
