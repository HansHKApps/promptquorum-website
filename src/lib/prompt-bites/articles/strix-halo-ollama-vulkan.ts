import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Strix Halo (Ryzen AI Max) + Ollama Vulkan: Setup and Performance',
    seoTitle: 'Strix Halo Ollama Vulkan Setup 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ryzen AI Max 395 (Strix Halo, 40 CU): 96 GB unified memory, runs 70B models via Ollama Vulkan on Linux. ~20 tok/s on Llama 3.1 8B. Quick answer from PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    current_models_mentioned: ['Llama 3.1 8B', 'Qwen 2.5 14B', 'Qwen 2.5 32B'],
    current_hardware_mentioned: ['Ryzen AI Max 395', 'Ryzen AI Max 385', 'RTX 4090'],
    educationalLevel: 'Intermediate',
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['radeon-6800m-local-llm', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    affiliateDisclosure: true,
    audience: 'Linux users with a Ryzen AI Max 395 (Strix Halo) device wanting GPU-accelerated local LLM inference via Ollama Vulkan',
    readTime: '4 min read',
    leadAnswerBlock: 'Yes — Ryzen AI Max 395 (Strix Halo) runs Ollama with GPU acceleration via the Vulkan backend on Linux. Install the standard Ollama binary, verify GPU detection with ollama ps, and set OLLAMA_FLASH_ATTENTION=1 for large-model sessions. The 96 GB unified memory pool lets you run 70B models that are impossible on any single desktop GPU.',
    intro: 'Strix Halo (Ryzen AI Max 395) is a high-memory APU found in mini PCs and laptops. Its RDNA 3.5 GPU runs Ollama via Vulkan on Linux with no extra drivers — and its 96 GB unified memory is the hardware advantage that makes 70B-class models viable on a single device.',
    toc: [
      { label: 'How to Run Ollama with Vulkan', anchor: '#setup' },
      { label: 'Strix Halo vs RTX 4090', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Does Strix Halo (Ryzen AI Max) work with Ollama via Vulkan?',
        answer: 'Yes — Ryzen AI Max (Strix Halo, RDNA 3.5) runs Ollama via Vulkan on Linux. With 96 GB unified memory on the MAX 395, it fits Qwen 32B and even Llama 70B Q4_K_M — models no single desktop GPU can hold.',
        bullets: [
          'Linux: Ollama detects Strix Halo Vulkan automatically; set OLLAMA_FLASH_ATTENTION=1 for long context sessions',
          'Ryzen AI Max 395 (96 GB): fits Llama 70B Q4_K_M (~41 GB) and Qwen 32B Q4_K_M (~19 GB) simultaneously in memory',
          'Windows Vulkan path for Strix Halo is experimental; Linux is the stable platform for GPU-accelerated Ollama',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Funktioniert Strix Halo (Ryzen AI Max) mit Ollama über Vulkan?',
        answer: 'Ja — Ryzen AI Max (Strix Halo, RDNA 3.5) betreibt Ollama über Vulkan unter Linux. Mit 96 GB Unified Memory beim MAX 395 passt Qwen 32B und sogar Llama 70B Q4_K_M — Modelle, die keine einzelne Desktop-GPU aufnehmen kann.',
        bullets: [
          'Linux: Ollama erkennt Strix Halo Vulkan automatisch; OLLAMA_FLASH_ATTENTION=1 für lange Kontextsitzungen setzen',
          'Ryzen AI Max 395 (96 GB): Llama 70B Q4_K_M (~41 GB) und Qwen 32B Q4_K_M (~19 GB) gleichzeitig im Speicher',
          'Windows-Vulkan-Pfad für Strix Halo ist experimentell; Linux ist die stabile Plattform für GPU-beschleunigtes Ollama',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Strix Halo (Ryzen AI Max) fonctionne-t-il avec Ollama via Vulkan ?',
        answer: 'Oui — Ryzen AI Max (Strix Halo, RDNA 3.5) fait tourner Ollama via Vulkan sous Linux. Avec 96 Go de mémoire unifiée sur le MAX 395, il charge Qwen 32B et même Llama 70B Q4_K_M — des modèles qu\'aucun GPU de bureau ne peut contenir.',
        bullets: [
          'Linux : Ollama détecte automatiquement Strix Halo Vulkan ; définissez OLLAMA_FLASH_ATTENTION=1 pour les sessions de long contexte',
          'Ryzen AI Max 395 (96 Go) : charge Llama 70B Q4_K_M (~41 Go) et Qwen 32B Q4_K_M (~19 Go) simultanément',
          'Le chemin Vulkan Windows pour Strix Halo est expérimental ; Linux est la plateforme stable pour Ollama accéléré GPU',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Strix Halo（Ryzen AI Max）はVulkan経由でOllamaと動作しますか？',
        answer: 'はい — Ryzen AI Max（Strix Halo、RDNA 3.5）はLinux上でVulkan経由でOllamaを動作させます。MAX 395の96 GBユニファイドメモリで、Qwen 32BとLlama 70B Q4_K_M（デスクトップGPU単体では不可能）を格納できます。',
        bullets: [
          'Linux：OllamaはStrix Halo Vulkanを自動検出；長いコンテキストセッションにはOLLAMA_FLASH_ATTENTION=1を設定',
          'Ryzen AI Max 395（96 GB）：Llama 70B Q4_K_M（~41 GB）とQwen 32B Q4_K_M（~19 GB）を同時にメモリに格納可能',
          'Windows向けStrix Halo Vulkanパスは実験的；GPU加速Ollamaの安定プラットフォームはLinux',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Strix Halo（Ryzen AI Max）能通过 Vulkan 使用 Ollama 吗？',
        answer: '可以——Ryzen AI Max（Strix Halo，RDNA 3.5）在 Linux 上通过 Vulkan 运行 Ollama。MAX 395 的 96 GB 统一内存可容纳 Qwen 32B 甚至 Llama 70B Q4_K_M——这是任何单块桌面显卡都无法做到的。',
        bullets: [
          'Linux：Ollama 自动检测 Strix Halo Vulkan；长上下文会话请设置 OLLAMA_FLASH_ATTENTION=1',
          'Ryzen AI Max 395（96 GB）：可同时在内存中加载 Llama 70B Q4_K_M（~41 GB）和 Qwen 32B Q4_K_M（~19 GB）',
          'Windows Strix Halo Vulkan 路径为实验性；Linux 是 GPU 加速 Ollama 的稳定平台',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ryzen AI Max 395 (Strix Halo, 40 RDNA 3.5 CUs, 96 GB LPDDR5X) uses the Vulkan backend in Ollama on Linux — the correct GPU path when ROCm iGPU support is unavailable',
          'The 96 GB unified memory pool is the key advantage: it fits Llama 70B Q4_K_M (~41 GB) — a model that requires multiple desktop GPUs in other setups',
          'Speed on Ryzen AI Max 395: Llama 3.1 8B ~22 tok/s, Qwen 2.5 14B ~13 tok/s, Qwen 2.5 32B ~7 tok/s via Vulkan',
          'Windows support for Strix Halo in Ollama is maturing; Linux via Vulkan is the stable path as of mid-2026',
        ],
      },
      body1: {
        id: 'setup',
        title: 'How to Run Ollama with Vulkan on Strix Halo',
        content: [
          'On Linux, installing the standard Ollama binary is sufficient — it uses llama.cpp with the Vulkan backend, which supports RDNA 3.5 (gfx1150) out of the box. No additional ROCm installation is required for the Vulkan path. Run `curl -fsSL https://ollama.com/install.sh | sh` as usual.',
          'After installation, set the flash attention flag for better memory efficiency on long sessions: `OLLAMA_FLASH_ATTENTION=1 ollama run qwen2.5:14b`. This reduces KV-cache memory usage and is particularly important when running 32B+ models that approach the full 96 GB pool.',
          'To verify that Ollama is using the GPU (not CPU), run `ollama ps` while a model is active. The output shows "GPU" in the PROCESSOR column and a non-zero VRAM value. If you see "CPU", the Vulkan backend did not initialize — check that the `vulkan-icd-loader` package is installed on your Linux distribution.',
        ],
        columns: ['Model', 'VRAM at Q4_K_M', 'Speed (MAX 395 Vulkan)', 'Fits 96 GB?'],
        rows: [
          { 'Model': 'Llama 3.1 8B', 'VRAM at Q4_K_M': '4.9 GB', 'Speed (MAX 395 Vulkan)': '~22 tok/s', 'Fits 96 GB?': '✓' },
          { 'Model': 'Qwen 2.5 14B', 'VRAM at Q4_K_M': '9.3 GB', 'Speed (MAX 395 Vulkan)': '~13 tok/s', 'Fits 96 GB?': '✓' },
          { 'Model': 'Qwen 2.5 32B', 'VRAM at Q4_K_M': '19.4 GB', 'Speed (MAX 395 Vulkan)': '~7 tok/s', 'Fits 96 GB?': '✓' },
          { 'Model': 'Llama 3.3 70B', 'VRAM at Q4_K_M': '~41 GB', 'Speed (MAX 395 Vulkan)': '~3 tok/s', 'Fits 96 GB?': '✓' },
          { 'Model': 'Qwen 2.5 72B', 'VRAM at Q4_K_M': '~43 GB', 'Speed (MAX 395 Vulkan)': '~3 tok/s', 'Fits 96 GB?': '✓' },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Minisforum+AI370+Ryzen+AI+Max+395',
            productName: 'Minisforum AI370-G (Ryzen AI Max 395, 96 GB)',
            productCategory: 'mini-pc',
            label: 'Check Minisforum AI370-G price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=ASUS+ROG+NUC+Ryzen+AI+Max',
            productName: 'ASUS ROG NUC (Ryzen AI Max 395)',
            productCategory: 'mini-pc',
            label: 'Check ASUS ROG NUC price on Amazon',
          },
        ],
      },
      body2: {
        id: 'comparison',
        title: 'Strix Halo vs RTX 4090: Memory Wins, Speed Loses',
        content: [
          '<strong>The Ryzen AI Max 395 trades GPU speed for memory capacity.</strong> An RTX 4090 runs Llama 3.1 8B at ~45 tok/s versus ~22 tok/s on Strix Halo Vulkan. For 7B and 14B models, the RTX 4090 is faster. But the RTX 4090 is capped at 24 GB VRAM — Strix Halo MAX 395 holds 96 GB, enabling model sizes that are simply impossible on a desktop GPU.',
          'The practical use case for Strix Halo is running 32B–70B models locally without cloud APIs. Qwen 2.5 32B at Q4_K_M (~19 GB) runs at ~7 tok/s — slow for interactive chat but fine for batch summarization, document processing, or overnight fine-tuning jobs. Llama 3.3 70B at Q4_K_M (~41 GB) is achievable at ~3 tok/s, suitable for high-quality single queries.',
          'On Windows, Ollama for Strix Halo falls back to CPU inference by default as of mid-2026, since ROCm iGPU support for gfx1150 is not yet complete in the official Ollama Windows build. The Vulkan path requires building llama.cpp from source with `-DGGML_VULKAN=ON`. Linux is recommended for GPU-accelerated Strix Halo inference until the Windows ROCm path matures.',
          'For comparison with other Apple Silicon APU hardware, see the <a href="/prompt-bites/mac-mini-m4-local-llm" class="text-primary hover:underline">Mac Mini M4 for local LLMs</a> bite, which covers the alternative unified-memory approach on macOS.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Strix Halo and Ollama Vulkan',
        faqs: [
          {
            q: 'Does AMD Strix Halo support ROCm in Ollama?',
            a: 'Not fully as of mid-2026. ROCm support for gfx1150 (RDNA 3.5) is in progress but not yet stable in the official Ollama builds. The Vulkan backend is the currently reliable GPU acceleration path on Linux. Check the Ollama GitHub releases page for updates on ROCm iGPU support.',
          },
          {
            q: 'Can I use Ollama with Strix Halo Vulkan on Windows?',
            a: 'Experimentally, yes. The official Ollama Windows build does not expose the Vulkan backend by default for Strix Halo — it falls back to CPU. You can build llama.cpp from source with -DGGML_VULKAN=ON on Windows to enable it, but this requires a manual build process. Linux is the recommended platform for Strix Halo Vulkan inference.',
          },
          {
            q: 'What is the largest model that fits on Ryzen AI Max 395?',
            a: 'With 96 GB of unified memory, the Ryzen AI Max 395 fits Llama 3.3 70B at Q4_K_M (~41 GB) or Qwen 2.5 72B at Q4_K_M (~43 GB), each with memory to spare. For very large models, Qwen 2.5 72B at Q5_K_M (~55 GB) also fits, though speed drops to approximately 2 tok/s. Models requiring over 90 GB (e.g., 70B at Q8_0) exceed the available pool.',
          },
          {
            q: 'How does Strix Halo compare to Mac Studio M4 Ultra for Ollama?',
            a: 'Mac Studio M4 Ultra has 192 GB unified memory and uses Metal acceleration via llama.cpp — significantly faster than Strix Halo Vulkan on a per-token basis (~12 tok/s on 70B Q4_K_M vs ~3 tok/s on Strix Halo). For large-model inference quality and speed, M4 Ultra wins. Strix Halo is competitive only in the 8B–32B range and runs a standard Linux workflow.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Mac Mini M4 for Local LLMs](/prompt-bites/mac-mini-m4-local-llm) — Apple unified-memory alternative to Strix Halo',
          '[Best Mini PC for Local LLM](/prompt-bites/best-mini-pc-for-local-llm) — mini PC comparison with AMD and Apple options',
          '[Best Budget GPUs for Local LLM](/local-llms/best-budget-gpus-local-llm) — discrete GPU options for Linux desktop builds',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Strix Halo (Ryzen AI Max) + Ollama Vulkan: Einrichtung und Performance',
    seoTitle: 'Strix Halo Ollama Vulkan Einrichtung 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ryzen AI Max 395 (Strix Halo, 40 CU): 96 GB Unified Memory, läuft 70B-Modelle via Ollama Vulkan unter Linux. ~22 tok/s bei Llama 3.1 8B. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    affiliateDisclosure: true,
    audience: 'Linux-Nutzer mit einem Ryzen AI Max 395 (Strix Halo) Gerät, die GPU-beschleunigte lokale LLM-Inferenz über Ollama Vulkan einrichten wollen',
    readTime: '4 Min. Lesezeit',
    leadAnswerBlock: 'Ja — Ryzen AI Max 395 (Strix Halo) betreibt Ollama mit GPU-Beschleunigung über das Vulkan-Backend unter Linux. Installieren Sie das Standard-Ollama-Binärprogramm, überprüfen Sie die GPU-Erkennung mit ollama ps und setzen Sie optional OLLAMA_FLASH_ATTENTION=1 für große Modelle. Der 96-GB-Unified-Memory-Pool ermöglicht 70B-Modelle, die auf keiner einzelnen Desktop-GPU möglich sind.',
    intro: 'Strix Halo (Ryzen AI Max 395) ist ein hochspeicheriger APU in Mini-PCs und Laptops. Sein RDNA-3.5-GPU betreibt Ollama über Vulkan unter Linux ohne zusätzliche Treiber — und seine 96 GB Unified Memory sind der Hardware-Vorteil, der 70B-Klasse-Modelle auf einem einzelnen Gerät ermöglicht.',
    toc: [
      { label: 'Ollama mit Vulkan einrichten', anchor: '#setup' },
      { label: 'Strix Halo vs. RTX 4090', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Funktioniert Strix Halo (Ryzen AI Max) mit Ollama über Vulkan?',
        answer: 'Ja — Ryzen AI Max (Strix Halo, RDNA 3.5) betreibt Ollama über Vulkan unter Linux. Mit 96 GB Unified Memory beim MAX 395 passt Qwen 32B und sogar Llama 70B Q4_K_M — Modelle, die keine einzelne Desktop-GPU aufnehmen kann.',
        bullets: [
          'Linux: Ollama erkennt Strix Halo Vulkan automatisch; OLLAMA_FLASH_ATTENTION=1 für lange Kontextsitzungen setzen',
          'Ryzen AI Max 395 (96 GB): Llama 70B Q4_K_M (~41 GB) und Qwen 32B Q4_K_M (~19 GB) gleichzeitig im Speicher',
          'Windows-Vulkan-Pfad für Strix Halo ist experimentell; Linux ist die stabile Plattform für GPU-beschleunigtes Ollama',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ryzen AI Max 395 (Strix Halo, 40 RDNA 3.5 CUs, 96 GB LPDDR5X) verwendet das Vulkan-Backend in Ollama unter Linux — der korrekte GPU-Pfad, wenn ROCm-iGPU-Unterstützung nicht verfügbar ist',
          'Der 96 GB große Unified-Memory-Pool ist der entscheidende Vorteil: Er nimmt Llama 70B Q4_K_M (~41 GB) auf — ein Modell, das in anderen Setups mehrere Desktop-GPUs erfordert',
          'Geschwindigkeit auf Ryzen AI Max 395: Llama 3.1 8B ~22 tok/s, Qwen 2.5 14B ~13 tok/s, Qwen 2.5 32B ~7 tok/s via Vulkan',
          'Die Windows-Unterstützung für Strix Halo in Ollama reift; Linux via Vulkan ist der stabile Pfad Stand Mitte 2026',
        ],
      },
      body1: {
        id: 'setup',
        title: 'Ollama mit Vulkan auf Strix Halo einrichten',
        content: [
          'Unter Linux reicht die Installation des Standard-Ollama-Binärprogramms aus — es verwendet llama.cpp mit dem Vulkan-Backend, das RDNA 3.5 (gfx1150) von Haus aus unterstützt. Für den Vulkan-Pfad ist keine zusätzliche ROCm-Installation erforderlich. Führen Sie wie gewohnt `curl -fsSL https://ollama.com/install.sh | sh` aus.',
          'Setzen Sie nach der Installation das Flash-Attention-Flag für bessere Speichereffizienz bei langen Sitzungen: `OLLAMA_FLASH_ATTENTION=1 ollama run qwen2.5:14b`. Dies reduziert den KV-Cache-Speicherverbrauch und ist besonders wichtig beim Ausführen von 32B+-Modellen, die an den vollen 96-GB-Pool heranreichen.',
          'Um zu überprüfen, ob Ollama die GPU (und nicht die CPU) verwendet, führen Sie `ollama ps` aus, während ein Modell aktiv ist. Die Ausgabe zeigt "GPU" in der Spalte PROCESSOR und einen von null verschiedenen VRAM-Wert. Wenn Sie "CPU" sehen, wurde das Vulkan-Backend nicht initialisiert — überprüfen Sie, ob das Paket `vulkan-icd-loader` auf Ihrer Linux-Distribution installiert ist.',
        ],
        columns: ['Modell', 'VRAM bei Q4_K_M', 'Geschwindigkeit (MAX 395 Vulkan)', 'Passt in 96 GB?'],
        rows: [
          { 'Modell': 'Llama 3.1 8B', 'VRAM bei Q4_K_M': '4,9 GB', 'Geschwindigkeit (MAX 395 Vulkan)': '~22 tok/s', 'Passt in 96 GB?': '✓' },
          { 'Modell': 'Qwen 2.5 14B', 'VRAM bei Q4_K_M': '9,3 GB', 'Geschwindigkeit (MAX 395 Vulkan)': '~13 tok/s', 'Passt in 96 GB?': '✓' },
          { 'Modell': 'Qwen 2.5 32B', 'VRAM bei Q4_K_M': '19,4 GB', 'Geschwindigkeit (MAX 395 Vulkan)': '~7 tok/s', 'Passt in 96 GB?': '✓' },
          { 'Modell': 'Llama 3.3 70B', 'VRAM bei Q4_K_M': '~41 GB', 'Geschwindigkeit (MAX 395 Vulkan)': '~3 tok/s', 'Passt in 96 GB?': '✓' },
          { 'Modell': 'Qwen 2.5 72B', 'VRAM bei Q4_K_M': '~43 GB', 'Geschwindigkeit (MAX 395 Vulkan)': '~3 tok/s', 'Passt in 96 GB?': '✓' },
        ],
      },
      body2: {
        title: 'Strix Halo vs. RTX 4090: Speicher gewinnt, Geschwindigkeit verliert',
        content: [
          '<strong>Der Ryzen AI Max 395 tauscht GPU-Geschwindigkeit gegen Speicherkapazität.</strong> Eine RTX 4090 führt Llama 3.1 8B mit ~45 tok/s aus, gegenüber ~22 tok/s auf Strix Halo Vulkan. Für 7B- und 14B-Modelle ist die RTX 4090 schneller. Aber die RTX 4090 ist auf 24 GB VRAM begrenzt — Strix Halo MAX 395 hält 96 GB, was Modellgrößen ermöglicht, die auf einer Desktop-GPU schlicht unmöglich sind.',
          'Der praktische Anwendungsfall für Strix Halo ist das lokale Ausführen von 32B–70B-Modellen ohne Cloud-APIs. Qwen 2.5 32B bei Q4_K_M (~19 GB) läuft mit ~7 tok/s — langsam für interaktiven Chat, aber geeignet für Batch-Zusammenfassungen, Dokumentenverarbeitung oder nächtliche Fine-Tuning-Jobs. Llama 3.3 70B bei Q4_K_M (~41 GB) ist mit ~3 tok/s erreichbar und eignet sich für hochwertige Einzelabfragen.',
          'Unter Windows fällt Ollama für Strix Halo Stand Mitte 2026 standardmäßig auf CPU-Inferenz zurück, da die ROCm-iGPU-Unterstützung für gfx1150 im offiziellen Ollama-Windows-Build noch nicht abgeschlossen ist. Der Vulkan-Pfad erfordert das Kompilieren von llama.cpp aus dem Quellcode mit `-DGGML_VULKAN=ON`. Linux wird für GPU-beschleunigte Strix-Halo-Inferenz empfohlen, bis der Windows-ROCm-Pfad ausgereift ist.',
          'Einen Vergleich mit anderer Apple-Silicon-APU-Hardware finden Sie im <a href="/de/prompt-bites/mac-mini-m4-local-llm" class="text-primary hover:underline">Mac Mini M4 für lokale LLMs</a>-Bite, der den alternativen Unified-Memory-Ansatz unter macOS behandelt.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Strix Halo und Ollama Vulkan',
        faqs: [
          {
            q: 'Unterstützt AMD Strix Halo ROCm in Ollama?',
            a: 'Stand Mitte 2026 nicht vollständig. Die ROCm-Unterstützung für gfx1150 (RDNA 3.5) befindet sich in Entwicklung, ist in den offiziellen Ollama-Builds jedoch noch nicht stabil. Das Vulkan-Backend ist der derzeit zuverlässige GPU-Beschleunigungspfad unter Linux. Überprüfen Sie die Ollama-GitHub-Releases-Seite auf Updates zur ROCm-iGPU-Unterstützung.',
          },
          {
            q: 'Kann ich Ollama mit Strix Halo Vulkan unter Windows verwenden?',
            a: 'Experimentell ja. Der offizielle Ollama-Windows-Build macht das Vulkan-Backend für Strix Halo standardmäßig nicht zugänglich — er fällt auf die CPU zurück. Sie können llama.cpp aus dem Quellcode mit -DGGML_VULKAN=ON unter Windows kompilieren, um es zu aktivieren, aber dies erfordert einen manuellen Build-Prozess. Linux ist die empfohlene Plattform für Strix-Halo-Vulkan-Inferenz.',
          },
          {
            q: 'Was ist das größte Modell, das auf Ryzen AI Max 395 passt?',
            a: 'Mit 96 GB Unified Memory nimmt der Ryzen AI Max 395 Llama 3.3 70B bei Q4_K_M (~41 GB) oder Qwen 2.5 72B bei Q4_K_M (~43 GB) auf, jeweils noch mit Speicherreserve. Für sehr große Modelle passt Qwen 2.5 72B bei Q5_K_M (~55 GB) ebenfalls, obwohl die Geschwindigkeit auf etwa 2 tok/s sinkt. Modelle, die über 90 GB benötigen (z. B. 70B bei Q8_0), überschreiten den verfügbaren Pool.',
          },
          {
            q: 'Wie schneidet Strix Halo im Vergleich zu Mac Studio M4 Ultra für Ollama ab?',
            a: 'Mac Studio M4 Ultra verfügt über 192 GB Unified Memory und verwendet Metal-Beschleunigung via llama.cpp — deutlich schneller als Strix Halo Vulkan auf Token-Basis (~12 tok/s bei 70B Q4_K_M vs. ~3 tok/s auf Strix Halo). Für Inferenzqualität und -geschwindigkeit bei großen Modellen gewinnt M4 Ultra. Strix Halo ist nur im 8B–32B-Bereich wettbewerbsfähig und läuft auf einem Standard-Linux-Workflow.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Strix Halo (Ryzen AI Max) + Ollama Vulkan : configuration et performances',
    seoTitle: 'Strix Halo Ollama Vulkan Configuration 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ryzen AI Max 395 (Strix Halo, 40 CU) : 96 Go de mémoire unifiée, fait tourner les modèles 70B via Ollama Vulkan sous Linux. ~22 tok/s sur Llama 3.1 8B. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      fr: {
        question: 'Strix Halo (Ryzen AI Max) fonctionne-t-il avec Ollama via Vulkan ?',
        answer: 'Oui — Ryzen AI Max (Strix Halo, RDNA 3.5) fait tourner Ollama via Vulkan sous Linux. Avec 96 Go de mémoire unifiée sur le MAX 395, il charge Qwen 32B et même Llama 70B Q4_K_M — des modèles qu\'aucun GPU de bureau ne peut contenir.',
        bullets: [
          'Linux : Ollama détecte automatiquement Strix Halo Vulkan ; définissez OLLAMA_FLASH_ATTENTION=1 pour les sessions de long contexte',
          'Ryzen AI Max 395 (96 Go) : charge Llama 70B Q4_K_M (~41 Go) et Qwen 32B Q4_K_M (~19 Go) simultanément',
          'Le chemin Vulkan Windows pour Strix Halo est expérimental ; Linux est la plateforme stable pour Ollama accéléré GPU',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ryzen AI Max 395 (Strix Halo, 40 CU RDNA 3.5, 96 Go LPDDR5X) utilise le backend Vulkan dans Ollama sous Linux — le chemin GPU correct quand la prise en charge ROCm iGPU n\'est pas disponible',
          'Le pool de 96 Go de mémoire unifiée est l\'avantage clé : il accueille Llama 70B Q4_K_M (~41 Go) — un modèle qui nécessite plusieurs GPU de bureau dans d\'autres configurations',
          'Vitesse sur Ryzen AI Max 395 : Llama 3.1 8B ~22 tok/s, Qwen 2.5 14B ~13 tok/s, Qwen 2.5 32B ~7 tok/s via Vulkan',
          'La prise en charge Windows pour Strix Halo dans Ollama est en cours de maturation ; Linux via Vulkan est le chemin stable à mi-2026',
        ],
      },
      body1: {
        title: 'Comment faire tourner Ollama avec Vulkan sur Strix Halo',
        content: [
          'Sous Linux, l\'installation du binaire Ollama standard suffit — il utilise llama.cpp avec le backend Vulkan, qui prend en charge RDNA 3.5 (gfx1150) nativement. Aucune installation ROCm supplémentaire n\'est requise pour le chemin Vulkan. Exécutez `curl -fsSL https://ollama.com/install.sh | sh` comme d\'habitude.',
          'Après l\'installation, définissez le flag flash attention pour une meilleure efficacité mémoire sur les longues sessions : `OLLAMA_FLASH_ATTENTION=1 ollama run qwen2.5:14b`. Cela réduit l\'utilisation mémoire du KV-cache et est particulièrement important lors de l\'exécution de modèles 32B+ qui approchent du pool complet de 96 Go.',
          'Pour vérifier qu\'Ollama utilise le GPU (et non le CPU), exécutez `ollama ps` pendant qu\'un modèle est actif. La sortie affiche "GPU" dans la colonne PROCESSOR et une valeur VRAM non nulle. Si vous voyez "CPU", le backend Vulkan n\'a pas été initialisé — vérifiez que le paquet `vulkan-icd-loader` est installé sur votre distribution Linux.',
        ],
        columns: ['Modèle', 'VRAM à Q4_K_M', 'Vitesse (MAX 395 Vulkan)', 'Entre dans 96 Go ?'],
        rows: [
          { 'Modèle': 'Llama 3.1 8B', 'VRAM à Q4_K_M': '4,9 Go', 'Vitesse (MAX 395 Vulkan)': '~22 tok/s', 'Entre dans 96 Go ?': '✓' },
          { 'Modèle': 'Qwen 2.5 14B', 'VRAM à Q4_K_M': '9,3 Go', 'Vitesse (MAX 395 Vulkan)': '~13 tok/s', 'Entre dans 96 Go ?': '✓' },
          { 'Modèle': 'Qwen 2.5 32B', 'VRAM à Q4_K_M': '19,4 Go', 'Vitesse (MAX 395 Vulkan)': '~7 tok/s', 'Entre dans 96 Go ?': '✓' },
          { 'Modèle': 'Llama 3.3 70B', 'VRAM à Q4_K_M': '~41 Go', 'Vitesse (MAX 395 Vulkan)': '~3 tok/s', 'Entre dans 96 Go ?': '✓' },
          { 'Modèle': 'Qwen 2.5 72B', 'VRAM à Q4_K_M': '~43 Go', 'Vitesse (MAX 395 Vulkan)': '~3 tok/s', 'Entre dans 96 Go ?': '✓' },
        ],
      },
      body2: {
        title: 'Strix Halo vs RTX 4090 : la mémoire gagne, la vitesse perd',
        content: [
          '<strong>Le Ryzen AI Max 395 échange la vitesse GPU contre la capacité mémoire.</strong> Une RTX 4090 fait tourner Llama 3.1 8B à ~45 tok/s contre ~22 tok/s sur Strix Halo Vulkan. Pour les modèles 7B et 14B, la RTX 4090 est plus rapide. Mais la RTX 4090 est limitée à 24 Go de VRAM — Strix Halo MAX 395 dispose de 96 Go, permettant des tailles de modèles tout simplement impossibles sur un GPU de bureau.',
          'Le cas d\'usage pratique pour Strix Halo est l\'exécution locale de modèles 32B–70B sans API cloud. Qwen 2.5 32B à Q4_K_M (~19 Go) tourne à ~7 tok/s — lent pour le chat interactif, mais convenable pour la synthèse par lots, le traitement de documents, ou les tâches de fine-tuning nocturnes. Llama 3.3 70B à Q4_K_M (~41 Go) est atteignable à ~3 tok/s, adapté aux requêtes uniques de haute qualité.',
          'Sous Windows, Ollama pour Strix Halo revient par défaut à l\'inférence CPU à mi-2026, la prise en charge ROCm iGPU pour gfx1150 n\'étant pas encore complète dans la version officielle Ollama Windows. Le chemin Vulkan nécessite de compiler llama.cpp depuis les sources avec `-DGGML_VULKAN=ON`. Linux est recommandé pour l\'inférence Strix Halo accélérée GPU jusqu\'à ce que le chemin ROCm Windows soit finalisé.',
          'Pour une comparaison avec d\'autres matériels APU Apple Silicon, consultez le bite <a href="/fr/prompt-bites/mac-mini-m4-local-llm" class="text-primary hover:underline">Mac Mini M4 pour les LLMs locaux</a>, qui couvre l\'approche alternative de mémoire unifiée sur macOS.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Strix Halo et Ollama Vulkan',
        faqs: [
          {
            q: 'AMD Strix Halo prend-il en charge ROCm dans Ollama ?',
            a: 'Pas complètement à mi-2026. La prise en charge ROCm pour gfx1150 (RDNA 3.5) est en cours mais pas encore stable dans les versions officielles d\'Ollama. Le backend Vulkan est le chemin d\'accélération GPU actuellement fiable sous Linux. Consultez la page des releases GitHub d\'Ollama pour les mises à jour sur la prise en charge ROCm iGPU.',
          },
          {
            q: 'Puis-je utiliser Ollama avec Strix Halo Vulkan sous Windows ?',
            a: 'De manière expérimentale, oui. La version officielle Windows d\'Ollama n\'expose pas le backend Vulkan par défaut pour Strix Halo — elle revient au CPU. Vous pouvez compiler llama.cpp depuis les sources avec -DGGML_VULKAN=ON sous Windows pour l\'activer, mais cela nécessite un processus de compilation manuel. Linux est la plateforme recommandée pour l\'inférence Strix Halo Vulkan.',
          },
          {
            q: 'Quel est le plus grand modèle qui tient sur Ryzen AI Max 395 ?',
            a: 'Avec 96 Go de mémoire unifiée, le Ryzen AI Max 395 accueille Llama 3.3 70B à Q4_K_M (~41 Go) ou Qwen 2.5 72B à Q4_K_M (~43 Go), chacun avec de la mémoire disponible. Pour les très grands modèles, Qwen 2.5 72B à Q5_K_M (~55 Go) tient également, bien que la vitesse chute à environ 2 tok/s. Les modèles nécessitant plus de 90 Go (ex. 70B à Q8_0) dépassent le pool disponible.',
          },
          {
            q: 'Comment Strix Halo se compare-t-il au Mac Studio M4 Ultra pour Ollama ?',
            a: 'Mac Studio M4 Ultra dispose de 192 Go de mémoire unifiée et utilise l\'accélération Metal via llama.cpp — significativement plus rapide que Strix Halo Vulkan en tokens par seconde (~12 tok/s sur 70B Q4_K_M vs ~3 tok/s sur Strix Halo). Pour la qualité et la vitesse d\'inférence sur les grands modèles, M4 Ultra l\'emporte. Strix Halo est compétitif uniquement dans la gamme 8B–32B et fonctionne avec un workflow Linux standard.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: 'Strix Halo（Ryzen AI Max）+ Ollama Vulkan：セットアップとパフォーマンス',
    seoTitle: 'Strix Halo Ollama Vulkan セットアップ 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ryzen AI Max 395（Strix Halo、40 CU）：96 GB ユニファイドメモリ、Linux上でOllama Vulkan経由で70Bモデルを実行。Llama 3.1 8Bで~22 tok/s。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      ja: {
        question: 'Strix Halo（Ryzen AI Max）はVulkan経由でOllamaと動作しますか？',
        answer: 'はい — Ryzen AI Max（Strix Halo、RDNA 3.5）はLinux上でVulkan経由でOllamaを動作させます。MAX 395の96 GBユニファイドメモリで、Qwen 32BとLlama 70B Q4_K_M（デスクトップGPU単体では不可能）を格納できます。',
        bullets: [
          'Linux：OllamaはStrix Halo Vulkanを自動検出；長いコンテキストセッションにはOLLAMA_FLASH_ATTENTION=1を設定',
          'Ryzen AI Max 395（96 GB）：Llama 70B Q4_K_M（~41 GB）とQwen 32B Q4_K_M（~19 GB）を同時にメモリに格納可能',
          'Windows向けStrix Halo Vulkanパスは実験的；GPU加速Ollamaの安定プラットフォームはLinux',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ryzen AI Max 395（Strix Halo、40 RDNA 3.5 CU、96 GB LPDDR5X）はLinux上のOllamaでVulkanバックエンドを使用 — ROCm iGPUサポートが利用できない場合の正しいGPUパス',
          '96 GBユニファイドメモリプールが重要な優位点：Llama 70B Q4_K_M（~41 GB）を格納可能 — 他のセットアップでは複数の独立GPUが必要なモデル',
          'Ryzen AI Max 395での速度：Llama 3.1 8B ~22 tok/s、Qwen 2.5 14B ~13 tok/s、Qwen 2.5 32B ~7 tok/s（Vulkan経由）',
          'OllamaにおけるStrix HaloのWindowsサポートは成熟中；2026年半ば時点ではVulkan経由のLinuxが安定したパス',
        ],
      },
      body1: {
        title: 'Strix HaloでOllama with Vulkanを実行する方法',
        content: [
          'Linux上では、標準のOllamaバイナリをインストールするだけで十分です — RDNA 3.5（gfx1150）をすぐにサポートするVulkanバックエンドを使ったllama.cppを使用します。Vulkanパスに追加のROCmインストールは不要です。通常通り`curl -fsSL https://ollama.com/install.sh | sh`を実行してください。',
          'インストール後、長いセッションでのメモリ効率を高めるためにflash attentionフラグを設定します：`OLLAMA_FLASH_ATTENTION=1 ollama run qwen2.5:14b`。これによりKVキャッシュのメモリ使用量が削減され、96 GBプール全体に近づく32B以上のモデルを実行する際に特に重要です。',
          'OllamaがGPU（CPUではなく）を使用していることを確認するには、モデルが起動中に`ollama ps`を実行します。出力のPROCESSOR列に"GPU"と表示され、VRAMの値がゼロ以外であることを確認してください。"CPU"と表示される場合、Vulkanバックエンドが初期化されていません — お使いのLinuxディストリビューションに`vulkan-icd-loader`パッケージがインストールされているか確認してください。',
        ],
        columns: ['モデル', 'Q4_K_M時のVRAM', '速度（MAX 395 Vulkan）', '96 GBに収まるか？'],
        rows: [
          { 'モデル': 'Llama 3.1 8B', 'Q4_K_M時のVRAM': '4.9 GB', '速度（MAX 395 Vulkan）': '~22 tok/s', '96 GBに収まるか？': '✓' },
          { 'モデル': 'Qwen 2.5 14B', 'Q4_K_M時のVRAM': '9.3 GB', '速度（MAX 395 Vulkan）': '~13 tok/s', '96 GBに収まるか？': '✓' },
          { 'モデル': 'Qwen 2.5 32B', 'Q4_K_M時のVRAM': '19.4 GB', '速度（MAX 395 Vulkan）': '~7 tok/s', '96 GBに収まるか？': '✓' },
          { 'モデル': 'Llama 3.3 70B', 'Q4_K_M時のVRAM': '~41 GB', '速度（MAX 395 Vulkan）': '~3 tok/s', '96 GBに収まるか？': '✓' },
          { 'モデル': 'Qwen 2.5 72B', 'Q4_K_M時のVRAM': '~43 GB', '速度（MAX 395 Vulkan）': '~3 tok/s', '96 GBに収まるか？': '✓' },
        ],
      },
      body2: {
        title: 'Strix Halo対RTX 4090：メモリで勝り、速度で劣る',
        content: [
          '<strong>Ryzen AI Max 395はGPU速度をメモリ容量と交換します。</strong>RTX 4090はLlama 3.1 8Bを~45 tok/sで実行するのに対し、Strix Halo Vulkanでは~22 tok/sです。7Bおよび14BモデルではRTX 4090の方が高速です。しかしRTX 4090は24 GB VRAMに制限されており、Strix Halo MAX 395は96 GBを保有し、デスクトップGPUでは不可能なモデルサイズを実現します。',
          'Strix Haloの実用的なユースケースは、クラウドAPIなしで32B〜70Bモデルをローカルで実行することです。Qwen 2.5 32B（Q4_K_M、~19 GB）は~7 tok/sで動作します — インタラクティブなチャットには遅いですが、バッチ要約、文書処理、または一晩のファインチューニング作業には十分です。Llama 3.3 70B（Q4_K_M、~41 GB）は~3 tok/sで実行可能で、高品質な単発クエリに適しています。',
          'Windowsでは、gfx1150のROCm iGPUサポートが公式OllamaのWindowsビルドでまだ完成していないため、Strix Halo向けOllamaは2026年半ば時点でデフォルトのCPU推論にフォールバックします。VulkanパスはWindowsで`-DGGML_VULKAN=ON`を使ってllama.cppをソースからビルドする必要があります。WindowsのROCmパスが成熟するまでは、GPU加速Strix Halo推論にはLinuxを推奨します。',
          'その他のApple Silicon APUハードウェアとの比較については、macOSでの代替ユニファイドメモリアプローチを扱う<a href="/ja/prompt-bites/mac-mini-m4-local-llm" class="text-primary hover:underline">ローカルLLM向けMac Mini M4</a>のビットをご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Strix HaloとOllama Vulkanに関するよくある質問',
        faqs: [
          {
            q: 'AMD Strix HaloはOllamaでROCmをサポートしていますか？',
            a: '2026年半ば時点では完全にはサポートされていません。gfx1150（RDNA 3.5）のROCmサポートは進行中ですが、公式Ollamaビルドではまだ安定していません。VulkanバックエンドがLinux上で現在信頼できるGPU加速パスです。ROCm iGPUサポートの最新情報はOllama GitHubリリースページを確認してください。',
          },
          {
            q: 'WindowsでStrix Halo VulkanとOllamaを使用できますか？',
            a: '実験的には可能です。公式OllamaのWindowsビルドはStrix HaloのVulkanバックエンドをデフォルトで公開しておらず、CPUにフォールバックします。Windowsで有効にするには-DGGML_VULKAN=ONを付けてllama.cppをソースからビルドできますが、手動ビルドプロセスが必要です。Strix Halo Vulkan推論にはLinuxが推奨プラットフォームです。',
          },
          {
            q: 'Ryzen AI Max 395に収まる最大のモデルは何ですか？',
            a: '96 GBのユニファイドメモリで、Ryzen AI Max 395はLlama 3.3 70B（Q4_K_M、~41 GB）またはQwen 2.5 72B（Q4_K_M、~43 GB）を格納でき、それぞれメモリに余裕があります。非常に大きなモデルの場合、Qwen 2.5 72B（Q5_K_M、~55 GB）も収まりますが、速度は約2 tok/sに低下します。90 GB以上が必要なモデル（例：70B at Q8_0）は利用可能なプールを超えます。',
          },
          {
            q: 'OllamaにおいてStrix HaloとMac Studio M4 Ultraはどう比較されますか？',
            a: 'Mac Studio M4 Ultraは192 GBのユニファイドメモリを持ち、llama.cpp経由でMetal加速を使用します — トークン毎秒ベースでStrix Halo Vulkanより大幅に高速（70B Q4_K_Mで~12 tok/s対Strix Haloの~3 tok/s）。大型モデルの推論品質と速度ではM4 Ultraが優れています。Strix Haloは8B〜32Bの範囲でのみ競争力があり、標準的なLinuxワークフローで動作します。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: 'Strix Halo（Ryzen AI Max）+ Ollama Vulkan：配置与性能',
    seoTitle: 'Strix Halo Ollama Vulkan 配置 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ryzen AI Max 395（Strix Halo，40 CU）：96 GB 统一内存，在 Linux 上通过 Ollama Vulkan 运行 70B 模型。Llama 3.1 8B 约 22 tok/s。PromptQuorum 快速解答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      zh: {
        question: 'Strix Halo（Ryzen AI Max）能通过 Vulkan 使用 Ollama 吗？',
        answer: '可以——Ryzen AI Max（Strix Halo，RDNA 3.5）在 Linux 上通过 Vulkan 运行 Ollama。MAX 395 的 96 GB 统一内存可容纳 Qwen 32B 甚至 Llama 70B Q4_K_M——这是任何单块桌面显卡都无法做到的。',
        bullets: [
          'Linux：Ollama 自动检测 Strix Halo Vulkan；长上下文会话请设置 OLLAMA_FLASH_ATTENTION=1',
          'Ryzen AI Max 395（96 GB）：可同时在内存中加载 Llama 70B Q4_K_M（~41 GB）和 Qwen 32B Q4_K_M（~19 GB）',
          'Windows Strix Halo Vulkan 路径为实验性；Linux 是 GPU 加速 Ollama 的稳定平台',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ryzen AI Max 395（Strix Halo，40 个 RDNA 3.5 CU，96 GB LPDDR5X）在 Linux 上通过 Ollama 使用 Vulkan 后端——这是 ROCm iGPU 支持不可用时的正确 GPU 路径',
          '96 GB 统一内存池是关键优势：可容纳 Llama 70B Q4_K_M（~41 GB）——在其他配置中需要多块桌面 GPU 的模型',
          'Ryzen AI Max 395 的速度：Llama 3.1 8B ~22 tok/s，Qwen 2.5 14B ~13 tok/s，Qwen 2.5 32B ~7 tok/s（通过 Vulkan）',
          'Ollama 中 Strix Halo 的 Windows 支持正在成熟；截至 2026 年中，通过 Vulkan 的 Linux 是稳定路径',
        ],
      },
      body1: {
        title: '如何在 Strix Halo 上使用 Vulkan 运行 Ollama',
        content: [
          '在 Linux 上，安装标准 Ollama 二进制文件即可——它使用带有 Vulkan 后端的 llama.cpp，开箱即用支持 RDNA 3.5（gfx1150）。Vulkan 路径无需额外安装 ROCm。像往常一样运行 `curl -fsSL https://ollama.com/install.sh | sh`。',
          '安装后，设置 flash attention 标志以提高长会话的内存效率：`OLLAMA_FLASH_ATTENTION=1 ollama run qwen2.5:14b`。这减少了 KV 缓存内存用量，在运行接近完整 96 GB 池的 32B 以上模型时尤为重要。',
          '要验证 Ollama 是否在使用 GPU（而非 CPU），在模型运行时执行 `ollama ps`。输出应在 PROCESSOR 列显示"GPU"，VRAM 值不为零。如果显示"CPU"，表示 Vulkan 后端未初始化——检查您的 Linux 发行版是否安装了 `vulkan-icd-loader` 软件包。',
        ],
        columns: ['模型', 'Q4_K_M 时 VRAM', '速度（MAX 395 Vulkan）', '能否放入 96 GB？'],
        rows: [
          { '模型': 'Llama 3.1 8B', 'Q4_K_M 时 VRAM': '4.9 GB', '速度（MAX 395 Vulkan）': '~22 tok/s', '能否放入 96 GB？': '✓' },
          { '模型': 'Qwen 2.5 14B', 'Q4_K_M 时 VRAM': '9.3 GB', '速度（MAX 395 Vulkan）': '~13 tok/s', '能否放入 96 GB？': '✓' },
          { '模型': 'Qwen 2.5 32B', 'Q4_K_M 时 VRAM': '19.4 GB', '速度（MAX 395 Vulkan）': '~7 tok/s', '能否放入 96 GB？': '✓' },
          { '模型': 'Llama 3.3 70B', 'Q4_K_M 时 VRAM': '~41 GB', '速度（MAX 395 Vulkan）': '~3 tok/s', '能否放入 96 GB？': '✓' },
          { '模型': 'Qwen 2.5 72B', 'Q4_K_M 时 VRAM': '~43 GB', '速度（MAX 395 Vulkan）': '~3 tok/s', '能否放入 96 GB？': '✓' },
        ],
      },
      body2: {
        title: 'Strix Halo 对比 RTX 4090：内存胜，速度败',
        content: [
          '<strong>Ryzen AI Max 395 以 GPU 速度换取内存容量。</strong>RTX 4090 运行 Llama 3.1 8B 约 45 tok/s，而 Strix Halo Vulkan 约 22 tok/s。对于 7B 和 14B 模型，RTX 4090 更快。但 RTX 4090 受限于 24 GB VRAM——Strix Halo MAX 395 拥有 96 GB，可支持桌面 GPU 上根本无法运行的模型规模。',
          'Strix Halo 的实际使用场景是在不依赖云 API 的情况下在本地运行 32B–70B 模型。Qwen 2.5 32B（Q4_K_M，~19 GB）以 ~7 tok/s 运行——对于交互式聊天较慢，但适用于批量摘要、文档处理或整夜微调任务。Llama 3.3 70B（Q4_K_M，~41 GB）可以 ~3 tok/s 运行，适合高质量单次查询。',
          '在 Windows 上，由于 gfx1150 的 ROCm iGPU 支持在官方 Ollama Windows 版本中尚未完成，Strix Halo 的 Ollama 截至 2026 年中默认回退到 CPU 推理。Vulkan 路径需要在 Windows 上使用 `-DGGML_VULKAN=ON` 从源码编译 llama.cpp。建议在 Windows ROCm 路径成熟之前，使用 Linux 进行 GPU 加速的 Strix Halo 推理。',
          '与其他 Apple Silicon APU 硬件的比较，请参阅<a href="/zh/prompt-bites/mac-mini-m4-local-llm" class="text-primary hover:underline">用于本地 LLM 的 Mac Mini M4</a> 文章，其中介绍了 macOS 上的替代统一内存方案。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Strix Halo 和 Ollama Vulkan 的快速解答',
        faqs: [
          {
            q: 'AMD Strix Halo 在 Ollama 中支持 ROCm 吗？',
            a: '截至 2026 年中尚不完全支持。gfx1150（RDNA 3.5）的 ROCm 支持正在进行中，但在官方 Ollama 版本中尚未稳定。Vulkan 后端是目前在 Linux 上可靠的 GPU 加速路径。请查看 Ollama GitHub 发布页面获取 ROCm iGPU 支持的更新。',
          },
          {
            q: '我能在 Windows 上使用 Strix Halo Vulkan 运行 Ollama 吗？',
            a: '实验性地可以。官方 Ollama Windows 版本默认不为 Strix Halo 开放 Vulkan 后端——它回退到 CPU。您可以在 Windows 上使用 -DGGML_VULKAN=ON 从源码编译 llama.cpp 来启用它，但这需要手动编译过程。Linux 是 Strix Halo Vulkan 推理的推荐平台。',
          },
          {
            q: 'Ryzen AI Max 395 能容纳的最大模型是什么？',
            a: '拥有 96 GB 统一内存，Ryzen AI Max 395 可容纳 Llama 3.3 70B（Q4_K_M，~41 GB）或 Qwen 2.5 72B（Q4_K_M，~43 GB），各有剩余内存。对于非常大的模型，Qwen 2.5 72B（Q5_K_M，~55 GB）也可以放入，但速度降至约 2 tok/s。需要超过 90 GB 的模型（如 70B at Q8_0）超出可用池。',
          },
          {
            q: 'Strix Halo 与 Mac Studio M4 Ultra 在 Ollama 上如何比较？',
            a: 'Mac Studio M4 Ultra 拥有 192 GB 统一内存，通过 llama.cpp 使用 Metal 加速——每 token 速度显著快于 Strix Halo Vulkan（70B Q4_K_M 约 12 tok/s 对比 Strix Halo 的约 3 tok/s）。在大型模型推理质量和速度方面，M4 Ultra 占优。Strix Halo 仅在 8B–32B 范围内具有竞争力，并运行标准 Linux 工作流。',
          },
        ],
      },
    },
  },
}
