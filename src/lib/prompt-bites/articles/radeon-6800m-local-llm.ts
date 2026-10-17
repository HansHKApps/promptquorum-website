import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-en.webp',
    title: 'Can You Run Local LLMs on a Radeon RX 6800M?',
    dateModified: '2026-10-17',
    seoTitle: 'Radeon 6800M Local LLM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes. The Radeon RX 6800M (12 GB VRAM) runs 8B models via Vulkan on Windows and Linux; ROCm is unofficial. Also covers the desktop RX 6800 (16 GB).',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: ['Llama 3.1 8B', 'Qwen3 8B', 'Phi-4 14B', 'Qwen3 14B'],
    current_hardware_mentioned: ['Radeon RX 6800M 12 GB', 'Radeon RX 6800 16 GB', 'Radeon RX 6700 XT 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Laptop users with an AMD Radeon RX 6800M wanting to run local LLMs',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'best-models-amd-5700x-3070ti'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run local LLMs on a Radeon RX 6800M?',
        answer: 'Yes. The Radeon RX 6800M has 12 GB GDDR6 VRAM and runs local LLMs well through the Vulkan backend in Ollama or llama.cpp on both Windows and Linux. ROCm does not officially support this chip; on Linux it only works through an unofficial override. An 8B model at Q4_K_M is an estimated 45–60 tok/s, based on a same-die RX 6700 XT benchmark, not a PromptQuorum measurement.',
        bullets: [
          'Windows and Linux: Vulkan is the reliable path (Ollama enables it by default)',
          'ROCm: the 6800M is not on AMD\'s or Ollama\'s support list; Linux needs HSA_OVERRIDE_GFX_VERSION=10.3.0 and may be unstable',
          '12 GB VRAM fits models up to 14B at Q4_K_M with a modest context window',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'The RX 6800M is a mobile RDNA 2 chip (Navi 22, 12 GB VRAM) — NOT the desktop RX 6800 (Navi 21, 16 GB VRAM)',
          'Vulkan is the dependable path on Windows and Linux; ROCm does not officially support the 6800M, and on Windows Ollama\'s ROCm list starts at the RX 7600',
          'Estimated speed: roughly 45–60 tok/s on an 8B Q4_K_M model and 25–35 tok/s on a 14B model — extrapolated from a same-die RX 6700 XT benchmark, not measured by PromptQuorum',
          'Run plugged in: laptop GPUs apply stricter power limits on battery, which lowers inference speed',
        ],
      },
      body1: {
        title: 'What the Radeon 6800M Can Actually Run',
        content: [
          '<strong>The Radeon RX 6800M is a mobile RDNA 2 chip (Navi 22, gfx1031) with 12 GB GDDR6 VRAM — not the desktop RX 6800, which uses the larger Navi 21 die with 16 GB.</strong> With 12 GB, the 6800M fits models up to 14B at Q4_K_M without layer offloading, the same capacity as a desktop RTX 3060 12 GB. Longer context windows add KV-cache memory on top of the model weights.',
          'Single-user generation speed is mostly limited by memory bandwidth. The 6800M uses the same Navi 22 die and 12 GB memory layout as the desktop RX 6700 XT, which scores about 84 tok/s on Llama 2 7B Q4_0 with the Vulkan backend in the <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan scoreboard</a>. Scaling that figure to larger model files gives the estimates below. Laptop power limits and cooling can place a 6800M below a desktop card.',
          'These speeds are estimates derived from that public benchmark, not tests PromptQuorum ran on a 6800M. Run <code>llama-bench</code> on your own machine for your real numbers. For a CUDA comparison at 8 GB VRAM, see the <a href="/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti rig comparison</a>.',
        ],
        columns: ['Model', 'VRAM (Q4_K_M)', 'Estimated speed (Vulkan)'],
        rows: [
          { 'Model': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Estimated speed (Vulkan)': '~45–60 tok/s' },
          { 'Model': 'Qwen3 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Estimated speed (Vulkan)': '~45–60 tok/s' },
          { 'Model': 'Phi-4 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Estimated speed (Vulkan)': '~25–35 tok/s' },
          { 'Model': 'Qwen3 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Estimated speed (Vulkan)': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: 'Setting Up Local LLMs on the 6800M',
        content: [
          '<strong>On Windows and Linux, install Ollama — it uses the Vulkan backend for AMD GPUs without ROCm.</strong> The <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama GPU documentation</a> states Vulkan is enabled by default when the backend is installed; on Linux it may need extra Vulkan packages. You can also use a prebuilt Vulkan binary of llama.cpp and load a GGUF with <code>-ngl 99</code> to offload all layers to the GPU.',
          'ROCm is the harder path. The RX 6800M is not on AMD\'s ROCm support table or Ollama\'s AMD list, and on Windows Ollama\'s ROCm list only covers the RX 7600 and newer. On Linux, community reports use <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> to make ROCm treat the chip as gfx1030. This is unofficial and may crash or fall back to CPU, so try Vulkan first.',
          'Always run plugged in — laptop GPUs enforce stricter power limits on battery, which lowers inference speed. For the full GPU comparison across NVIDIA and AMD, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs guide</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Test your setup: run <code>ollama run llama3.1:8b</code>, then check <code>ollama ps</code> — the PROCESSOR column should read 100% GPU. If it shows CPU, check the Ollama server log for GPU detection messages.' }],
      },
      body3: {
        title: 'Radeon RX 6800M vs. Desktop RX 6800',
        content: [
          'Searches for "RX 6800" often land on the mobile chip, but the two cards differ. The desktop RX 6800 has 16 GB of VRAM and more memory bandwidth, so it fits larger models and generates faster. The <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan scoreboard</a> lists about 101 tok/s for the desktop RX 6800 against about 84 tok/s for the RX 6700 XT (Llama 2 7B Q4_0, Vulkan).',
          'The desktop RX 6800 appears on Ollama\'s Linux AMD support list, while the 6800M does not. Everything else on this page about Vulkan applies to both cards.',
        ],
        columns: ['Spec', 'RX 6800M (laptop)', 'RX 6800 (desktop)'],
        rows: [
          { 'Spec': 'GPU chip', 'RX 6800M (laptop)': 'Navi 22 (gfx1031)', 'RX 6800 (desktop)': 'Navi 21 (gfx1030)' },
          { 'Spec': 'VRAM', 'RX 6800M (laptop)': '12 GB GDDR6', 'RX 6800 (desktop)': '16 GB GDDR6' },
          { 'Spec': 'Memory bandwidth', 'RX 6800M (laptop)': '384 GB/s', 'RX 6800 (desktop)': '512 GB/s' },
          { 'Spec': 'Ollama Linux AMD support list', 'RX 6800M (laptop)': 'Not listed', 'RX 6800 (desktop)': 'Listed' },
          { 'Spec': 'Ollama ROCm on Windows', 'RX 6800M (laptop)': 'Not listed', 'RX 6800 (desktop)': 'Not listed' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Radeon 6800M and Local LLMs',
        faqs: [
          {
            q: 'Does the Radeon 6800M support ROCm officially?',
            a: 'No. The RX 6800M (gfx1031) is not on the AMD ROCm support table or on Ollama\'s AMD support list. On Linux it can sometimes run with <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>, but that is an unofficial workaround. Vulkan is the supported path for this card.',
          },
          {
            q: 'How much VRAM does the Radeon RX 6800M have?',
            a: '12 GB of GDDR6 on a 192-bit bus. That fits 8B models comfortably and 14B models at Q4_K_M with a modest context window. The 12 GB is dedicated GPU memory; system RAM does not add to it.',
          },
          {
            q: 'Does Ollama work on the RX 6800M?',
            a: 'Yes, through Vulkan. Ollama\'s documentation states Vulkan is enabled by default when the backend is installed. Ollama\'s ROCm path does not list the 6800M, so expect Vulkan rather than ROCm unless you use the unofficial Linux override.',
          },
          {
            q: 'Is the desktop RX 6800 better for local LLMs than the 6800M?',
            a: 'Yes, in capacity and bandwidth: 16 GB versus 12 GB of VRAM and about 512 GB/s versus 384 GB/s. It also appears on Ollama\'s Linux AMD support list. See the comparison table above.',
          },
          {
            q: 'Is the 6800M faster than RTX 3070 Mobile for LLMs?',
            a: 'The 6800M\'s 12 GB of VRAM versus 8 GB on most RTX 3070 Mobile configurations matters more for model fit than raw speed. At equal model size, the RTX 3070 Mobile benefits from mature CUDA support. Compare real results with <code>llama-bench</code> on your own machine.',
          },
          {
            q: 'How hot does the 6800M get running LLMs continuously?',
            a: 'Sustained inference loads the GPU much like a gaming session, so laptop temperatures can reach the 80s °C depending on cooling. Monitor your own temperatures, keep the vents clear, and consider a modest undervolt in Radeon Software (Windows) or CoreCtrl (Linux) if the laptop throttles. Undervolting is at your own risk: it can cause instability and may affect your warranty.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best Local LLMs for Coding on 12 GB VRAM](/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan: Performance Guide](/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-de.webp',
    title: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
    dateModified: '2026-10-17',
    seoTitle: 'Radeon 6800M für lokale LLMs? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja. Die Radeon RX 6800M (12 GB VRAM) führt 8B-Modelle per Vulkan unter Windows und Linux aus; ROCm ist inoffiziell. Mit Vergleich zur Desktop-RX 6800.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
        answer: 'Ja. Die Radeon RX 6800M hat 12 GB GDDR6 VRAM und führt lokale LLMs über das Vulkan-Backend von Ollama oder llama.cpp unter Windows und Linux gut aus. ROCm unterstützt diesen Chip offiziell nicht; unter Linux funktioniert es nur über eine inoffizielle Überschreibung. Ein 8B-Modell in Q4_K_M liegt bei geschätzt 45–60 tok/s, abgeleitet von einem Benchmark der gleichen GPU-Architektur (RX 6700 XT), nicht von PromptQuorum gemessen.',
        bullets: [
          'Windows und Linux: Vulkan ist der zuverlässige Weg (Ollama aktiviert ihn standardmäßig)',
          'ROCm: Die 6800M steht weder auf der AMD- noch auf der Ollama-Supportliste; Linux braucht HSA_OVERRIDE_GFX_VERSION=10.3.0 und kann instabil sein',
          '12 GB VRAM reichen für Modelle bis 14B in Q4_K_M bei moderatem Kontextfenster',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die RX 6800M ist ein mobiler RDNA-2-Chip (Navi 22, 12 GB VRAM) — NICHT die Desktop-RX-6800 (Navi 21, 16 GB VRAM)',
          'Vulkan ist der verlässliche Weg unter Windows und Linux; ROCm unterstützt die 6800M offiziell nicht, und die ROCm-Liste von Ollama beginnt unter Windows bei der RX 7600',
          'Geschätzte Geschwindigkeit: etwa 45–60 tok/s bei einem 8B-Modell in Q4_K_M und 25–35 tok/s bei einem 14B-Modell — hochgerechnet aus einem Benchmark der gleichen GPU-Architektur (RX 6700 XT), nicht von PromptQuorum gemessen',
          'Immer am Netzteil betreiben: Laptop-GPUs haben im Akkubetrieb strengere Leistungsgrenzen, was die Inferenz verlangsamt',
        ],
      },
      body1: {
        title: 'Was die Radeon RX 6800M tatsächlich ausführen kann',
        content: [
          '<strong>Die Radeon RX 6800M ist ein mobiler RDNA-2-Chip (Navi 22, gfx1031) mit 12 GB GDDR6 VRAM — nicht die Desktop-RX-6800, die den größeren Navi-21-Chip mit 16 GB nutzt.</strong> Mit 12 GB passen Modelle bis 14B in Q4_K_M ohne Layer-Offloading, die gleiche Kapazität wie bei einer Desktop-RTX-3060 mit 12 GB. Längere Kontextfenster belegen zusätzlich KV-Cache-Speicher.',
          'Die Generierungsgeschwindigkeit bei einem Nutzer wird meist durch die Speicherbandbreite begrenzt. Die 6800M nutzt denselben Navi-22-Chip und dasselbe 12-GB-Speicherlayout wie die Desktop-RX-6700-XT, die im <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp-Vulkan-Scoreboard</a> etwa 84 tok/s bei Llama 2 7B Q4_0 mit dem Vulkan-Backend erreicht. Skaliert auf größere Modelldateien ergeben sich die Schätzungen unten. Leistungsgrenzen und Kühlung im Laptop können die 6800M unter eine Desktop-Karte drücken.',
          'Diese Werte sind aus diesem öffentlichen Benchmark abgeleitete Schätzungen, keine Tests, die PromptQuorum auf einer 6800M durchgeführt hat. Führen Sie <code>llama-bench</code> auf Ihrem eigenen Gerät aus, um echte Zahlen zu erhalten. Für einen CUDA-Vergleich mit 8 GB VRAM siehe den <a href="/de/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti Rig-Vergleich</a>.',
        ],
        columns: ['Modell', 'VRAM (Q4_K_M)', 'Geschätzte Geschwindigkeit (Vulkan)'],
        rows: [
          { 'Modell': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Geschätzte Geschwindigkeit (Vulkan)': '~45–60 tok/s' },
          { 'Modell': 'Qwen3 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Geschätzte Geschwindigkeit (Vulkan)': '~45–60 tok/s' },
          { 'Modell': 'Phi-4 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Geschätzte Geschwindigkeit (Vulkan)': '~25–35 tok/s' },
          { 'Modell': 'Qwen3 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Geschätzte Geschwindigkeit (Vulkan)': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: 'Einrichten von lokalen LLMs auf der 6800M',
        content: [
          '<strong>Installieren Sie unter Windows und Linux Ollama — es nutzt für AMD-GPUs das Vulkan-Backend ohne ROCm.</strong> Laut <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama-GPU-Dokumentation</a> ist Vulkan standardmäßig aktiviert, wenn das Backend installiert ist; unter Linux können zusätzliche Vulkan-Pakete nötig sein. Alternativ nutzen Sie ein vorkompiliertes Vulkan-Binary von llama.cpp und laden ein GGUF mit <code>-ngl 99</code>, um alle Layer auf die GPU auszulagern.',
          'ROCm ist der schwierigere Weg. Die RX 6800M steht nicht in der ROCm-Supporttabelle von AMD und nicht in der AMD-Liste von Ollama; unter Windows deckt die ROCm-Liste von Ollama nur die RX 7600 und neuer ab. Unter Linux nutzen Community-Berichte <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>, damit ROCm den Chip als gfx1030 behandelt. Das ist inoffiziell und kann abstürzen oder auf die CPU zurückfallen — versuchen Sie zuerst Vulkan.',
          'Immer am Netzteil betreiben — Laptop-GPUs haben im Akkubetrieb strengere Leistungsgrenzen, was die Inferenz verlangsamt. Für den vollständigen GPU-Vergleich zwischen NVIDIA und AMD siehe den <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">Leitfaden zu den besten GPUs für lokale LLMs</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Testen Sie Ihr Setup: Führen Sie <code>ollama run llama3.1:8b</code> aus und prüfen Sie dann <code>ollama ps</code> — die Spalte PROCESSOR sollte 100% GPU anzeigen. Bei CPU prüfen Sie das Ollama-Serverprotokoll auf Meldungen zur GPU-Erkennung.' }],
      },
      body3: {
        title: 'Radeon RX 6800M vs. Desktop-RX-6800',
        content: [
          'Suchen nach „RX 6800“ landen oft beim mobilen Chip, doch die beiden Karten unterscheiden sich. Die Desktop-RX-6800 hat 16 GB VRAM und mehr Speicherbandbreite, passt also zu größeren Modellen und generiert schneller. Das <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp-Vulkan-Scoreboard</a> nennt etwa 101 tok/s für die Desktop-RX-6800 gegenüber etwa 84 tok/s für die RX 6700 XT (Llama 2 7B Q4_0, Vulkan).',
          'Die Desktop-RX-6800 steht auf der Linux-AMD-Supportliste von Ollama, die 6800M nicht. Alles andere auf dieser Seite zu Vulkan gilt für beide Karten.',
        ],
        columns: ['Merkmal', 'RX 6800M (Laptop)', 'RX 6800 (Desktop)'],
        rows: [
          { 'Merkmal': 'GPU-Chip', 'RX 6800M (Laptop)': 'Navi 22 (gfx1031)', 'RX 6800 (Desktop)': 'Navi 21 (gfx1030)' },
          { 'Merkmal': 'VRAM', 'RX 6800M (Laptop)': '12 GB GDDR6', 'RX 6800 (Desktop)': '16 GB GDDR6' },
          { 'Merkmal': 'Speicherbandbreite', 'RX 6800M (Laptop)': '384 GB/s', 'RX 6800 (Desktop)': '512 GB/s' },
          { 'Merkmal': 'Ollama-AMD-Supportliste (Linux)', 'RX 6800M (Laptop)': 'Nicht gelistet', 'RX 6800 (Desktop)': 'Gelistet' },
          { 'Merkmal': 'Ollama-ROCm unter Windows', 'RX 6800M (Laptop)': 'Nicht gelistet', 'RX 6800 (Desktop)': 'Nicht gelistet' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Radeon 6800M und lokalen LLMs',
        faqs: [
          {
            q: 'Unterstützt die Radeon 6800M ROCm offiziell?',
            a: 'Nein. Die RX 6800M (gfx1031) steht weder in der ROCm-Supporttabelle von AMD noch in der AMD-Liste von Ollama. Unter Linux läuft sie manchmal mit <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>, aber das ist ein inoffizieller Workaround. Vulkan ist der unterstützte Weg für diese Karte.',
          },
          {
            q: 'Wie viel VRAM hat die Radeon RX 6800M?',
            a: '12 GB GDDR6 an einem 192-Bit-Bus. Das reicht bequem für 8B-Modelle und für 14B-Modelle in Q4_K_M bei moderatem Kontextfenster. Die 12 GB sind dedizierter GPU-Speicher; der Systemspeicher kommt nicht hinzu.',
          },
          {
            q: 'Funktioniert Ollama auf der RX 6800M?',
            a: 'Ja, über Vulkan. Laut Ollama-Dokumentation ist Vulkan standardmäßig aktiviert, wenn das Backend installiert ist. Der ROCm-Pfad von Ollama listet die 6800M nicht; erwarten Sie also Vulkan statt ROCm, außer Sie nutzen die inoffizielle Linux-Überschreibung.',
          },
          {
            q: 'Ist die Desktop-RX-6800 für lokale LLMs besser als die 6800M?',
            a: 'Ja, bei Kapazität und Bandbreite: 16 GB statt 12 GB VRAM und etwa 512 GB/s statt 384 GB/s. Sie steht außerdem auf der Linux-AMD-Supportliste von Ollama. Siehe die Vergleichstabelle oben.',
          },
          {
            q: 'Ist die 6800M für LLMs schneller als die RTX 3070 Mobile?',
            a: 'Die 12 GB VRAM der 6800M gegenüber 8 GB bei den meisten RTX-3070-Mobile-Konfigurationen sind für die Modellpassung wichtiger als die reine Geschwindigkeit. Bei gleicher Modellgröße profitiert die RTX 3070 Mobile von ausgereiftem CUDA-Support. Vergleichen Sie echte Ergebnisse mit <code>llama-bench</code> auf Ihrem Gerät.',
          },
          {
            q: 'Wie heiß wird die 6800M bei dauerhafter LLM-Nutzung?',
            a: 'Dauerhafte Inferenz belastet die GPU ähnlich wie eine Gaming-Session; je nach Kühlung können Laptop-Temperaturen in den 80er-°C-Bereich steigen. Überwachen Sie Ihre eigenen Temperaturen, halten Sie die Lüftungsöffnungen frei und erwägen Sie ein moderates Undervolting in Radeon Software (Windows) oder CoreCtrl (Linux), falls der Laptop drosselt. Undervolting erfolgt auf eigenes Risiko: Es kann zu Instabilität führen und die Garantie beeinträchtigen.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Beste lokale LLMs für Coding mit 12 GB VRAM](/de/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan: Leistungshandbuch](/de/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-fr.webp',
    title: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
    dateModified: '2026-10-17',
    seoTitle: 'Radeon 6800M pour LLM local ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui. La Radeon RX 6800M (12 Go de VRAM) exécute des modèles 8B via Vulkan sous Windows et Linux ; ROCm est non officiel. Inclut la RX 6800 de bureau.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
        answer: 'Oui. La Radeon RX 6800M dispose de 12 Go de VRAM GDDR6 et fait bien tourner des LLMs locaux via le backend Vulkan d\'Ollama ou de llama.cpp, sous Windows comme sous Linux. ROCm ne prend pas en charge officiellement cette puce ; sous Linux, il ne fonctionne que via un contournement non officiel. Un modèle 8B en Q4_K_M atteint environ 45–60 tok/s (estimation d\'après un benchmark de la RX 6700 XT, même puce), non mesurée par PromptQuorum.',
        bullets: [
          'Windows et Linux : Vulkan est la voie fiable (Ollama l\'active par défaut)',
          'ROCm : la 6800M ne figure ni sur la liste d\'AMD ni sur celle d\'Ollama ; Linux exige HSA_OVERRIDE_GFX_VERSION=10.3.0 et peut être instable',
          '12 Go de VRAM conviennent aux modèles jusqu\'à 14B en Q4_K_M avec une fenêtre de contexte modérée',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La RX 6800M est une puce RDNA 2 mobile (Navi 22, 12 Go de VRAM) — PAS la RX 6800 de bureau (Navi 21, 16 Go de VRAM)',
          'Vulkan est la voie fiable sous Windows et Linux ; ROCm ne prend pas en charge officiellement la 6800M, et sous Windows la liste ROCm d\'Ollama commence à la RX 7600',
          'Vitesse estimée : environ 45–60 tok/s sur un modèle 8B en Q4_K_M et 25–35 tok/s sur un modèle 14B — extrapolée d\'un benchmark de la RX 6700 XT (même puce), non mesurée par PromptQuorum',
          'Utilisez toujours le secteur : sur batterie, les GPU de portable appliquent des limites de puissance plus strictes, ce qui ralentit l\'inférence',
        ],
      },
      body1: {
        title: 'Ce que la Radeon RX 6800M peut réellement exécuter',
        content: [
          '<strong>La Radeon RX 6800M est une puce RDNA 2 mobile (Navi 22, gfx1031) avec 12 Go de VRAM GDDR6 — pas la RX 6800 de bureau, qui utilise la puce Navi 21, plus grande, avec 16 Go.</strong> Avec 12 Go, la 6800M accueille des modèles jusqu\'à 14B en Q4_K_M sans déchargement de couches, soit la capacité d\'une RTX 3060 12 Go de bureau. Les longues fenêtres de contexte ajoutent du cache KV en plus des poids du modèle.',
          'La vitesse de génération pour un seul utilisateur est surtout limitée par la bande passante mémoire. La 6800M utilise la même puce Navi 22 et la même configuration mémoire de 12 Go que la RX 6700 XT de bureau, qui obtient environ 84 tok/s sur Llama 2 7B Q4_0 avec le backend Vulkan dans le <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">classement Vulkan de llama.cpp</a>. En ajustant ce chiffre à des fichiers de modèle plus gros, on obtient les estimations ci-dessous. Les limites de puissance et le refroidissement d\'un portable peuvent placer la 6800M sous une carte de bureau.',
          'Ces vitesses sont des estimations dérivées de ce benchmark public, et non des tests réalisés par PromptQuorum sur une 6800M. Lancez <code>llama-bench</code> sur votre machine pour obtenir vos chiffres réels. Pour une comparaison CUDA à 8 Go de VRAM, voir la <a href="/fr/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">comparaison AMD 5700X + RTX 3070 Ti</a>.',
        ],
        columns: ['Modèle', 'VRAM (Q4_K_M)', 'Vitesse estimée (Vulkan)'],
        rows: [
          { 'Modèle': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '~5 Go', 'Vitesse estimée (Vulkan)': '~45–60 tok/s' },
          { 'Modèle': 'Qwen3 8B', 'VRAM (Q4_K_M)': '~5 Go', 'Vitesse estimée (Vulkan)': '~45–60 tok/s' },
          { 'Modèle': 'Phi-4 14B', 'VRAM (Q4_K_M)': '~9 Go', 'Vitesse estimée (Vulkan)': '~25–35 tok/s' },
          { 'Modèle': 'Qwen3 14B', 'VRAM (Q4_K_M)': '~9 Go', 'Vitesse estimée (Vulkan)': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: 'Configurer des LLMs locaux sur la 6800M',
        content: [
          '<strong>Sous Windows et Linux, installez Ollama — il utilise le backend Vulkan pour les GPU AMD, sans ROCm.</strong> La <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">documentation GPU d\'Ollama</a> indique que Vulkan est activé par défaut lorsque le backend est installé ; sous Linux, des paquets Vulkan supplémentaires peuvent être nécessaires. Vous pouvez aussi utiliser un binaire Vulkan précompilé de llama.cpp et charger un GGUF avec <code>-ngl 99</code> pour décharger toutes les couches sur le GPU.',
          'ROCm est la voie la plus difficile. La RX 6800M ne figure ni dans le tableau de prise en charge ROCm d\'AMD ni dans la liste AMD d\'Ollama, et sous Windows la liste ROCm d\'Ollama ne couvre que la RX 7600 et les modèles plus récents. Sous Linux, des retours de la communauté utilisent <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> pour que ROCm traite la puce comme gfx1030. C\'est non officiel et peut planter ou basculer sur le CPU : essayez d\'abord Vulkan.',
          'Utilisez toujours le secteur — sur batterie, les GPU de portable appliquent des limites de puissance plus strictes, ce qui ralentit l\'inférence. Pour la comparaison complète des GPU NVIDIA et AMD, voir le <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guide des meilleurs GPU pour LLMs locaux</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Testez votre configuration : lancez <code>ollama run llama3.1:8b</code>, puis vérifiez <code>ollama ps</code> — la colonne PROCESSOR doit afficher 100% GPU. Si elle indique CPU, consultez le journal du serveur Ollama pour les messages de détection du GPU.' }],
      },
      body3: {
        title: 'Radeon RX 6800M vs RX 6800 de bureau',
        content: [
          'Les recherches « RX 6800 » mènent souvent à la puce mobile, mais les deux cartes diffèrent. La RX 6800 de bureau a 16 Go de VRAM et une plus grande bande passante mémoire : elle accueille des modèles plus gros et génère plus vite. Le <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">classement Vulkan de llama.cpp</a> indique environ 101 tok/s pour la RX 6800 de bureau contre environ 84 tok/s pour la RX 6700 XT (Llama 2 7B Q4_0, Vulkan).',
          'La RX 6800 de bureau figure sur la liste AMD Linux d\'Ollama, contrairement à la 6800M. Tout le reste de cette page concernant Vulkan s\'applique aux deux cartes.',
        ],
        columns: ['Caractéristique', 'RX 6800M (portable)', 'RX 6800 (bureau)'],
        rows: [
          { 'Caractéristique': 'Puce GPU', 'RX 6800M (portable)': 'Navi 22 (gfx1031)', 'RX 6800 (bureau)': 'Navi 21 (gfx1030)' },
          { 'Caractéristique': 'VRAM', 'RX 6800M (portable)': '12 Go GDDR6', 'RX 6800 (bureau)': '16 Go GDDR6' },
          { 'Caractéristique': 'Bande passante mémoire', 'RX 6800M (portable)': '384 Go/s', 'RX 6800 (bureau)': '512 Go/s' },
          { 'Caractéristique': 'Liste AMD Linux d\'Ollama', 'RX 6800M (portable)': 'Non listée', 'RX 6800 (bureau)': 'Listée' },
          { 'Caractéristique': 'ROCm d\'Ollama sous Windows', 'RX 6800M (portable)': 'Non listée', 'RX 6800 (bureau)': 'Non listée' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la Radeon 6800M et les LLMs locaux',
        faqs: [
          {
            q: 'La Radeon 6800M prend-elle en charge ROCm officiellement ?',
            a: 'Non. La RX 6800M (gfx1031) ne figure ni dans le tableau ROCm d\'AMD ni dans la liste AMD d\'Ollama. Sous Linux, elle fonctionne parfois avec <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>, mais c\'est un contournement non officiel. Vulkan est la voie prise en charge pour cette carte.',
          },
          {
            q: 'Combien de VRAM possède la Radeon RX 6800M ?',
            a: '12 Go de GDDR6 sur un bus de 192 bits. C\'est confortable pour les modèles 8B et suffisant pour les modèles 14B en Q4_K_M avec une fenêtre de contexte modérée. Les 12 Go sont de la mémoire GPU dédiée ; la RAM système ne s\'y ajoute pas.',
          },
          {
            q: 'Ollama fonctionne-t-il sur la RX 6800M ?',
            a: 'Oui, via Vulkan. La documentation d\'Ollama indique que Vulkan est activé par défaut lorsque le backend est installé. Le chemin ROCm d\'Ollama ne liste pas la 6800M : attendez-vous donc à Vulkan plutôt qu\'à ROCm, sauf si vous utilisez le contournement Linux non officiel.',
          },
          {
            q: 'La RX 6800 de bureau est-elle meilleure que la 6800M pour les LLMs locaux ?',
            a: 'Oui, en capacité et en bande passante : 16 Go contre 12 Go de VRAM et environ 512 Go/s contre 384 Go/s. Elle figure aussi sur la liste AMD Linux d\'Ollama. Voir le tableau comparatif ci-dessus.',
          },
          {
            q: 'La 6800M est-elle plus rapide que la RTX 3070 Mobile pour les LLMs ?',
            a: 'Les 12 Go de VRAM de la 6800M, contre 8 Go sur la plupart des RTX 3070 Mobile, comptent davantage pour l\'adéquation des modèles que la vitesse brute. À taille de modèle égale, la RTX 3070 Mobile profite d\'un support CUDA mature. Comparez des résultats réels avec <code>llama-bench</code> sur votre machine.',
          },
          {
            q: 'Quelle température atteint la 6800M lors d\'une utilisation continue ?',
            a: 'Une inférence soutenue sollicite le GPU comme une session de jeu ; selon le refroidissement, les températures d\'un portable peuvent atteindre les 80 °C. Surveillez vos propres températures, dégagez les aérations et envisagez un léger undervolting dans Radeon Software (Windows) ou CoreCtrl (Linux) si le portable bride ses performances. Le undervolting se fait à vos risques : il peut provoquer des instabilités et affecter la garantie.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleurs LLMs locaux pour le code avec 12 Go de VRAM](/fr/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan : Guide de performance](/fr/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-ja.webp',
    title: 'Radeon RX 6800M でローカル LLM を実行できますか？',
    dateModified: '2026-10-17',
    seoTitle: 'Radeon 6800M でローカル LLM？| Prompt Bites | PromptQuorum',
    metaDescription: 'はい。Radeon RX 6800M（12 GB VRAM）は Windows・Linux の Vulkan で 8B モデルを実行可能。ROCm は非公式。デスクトップ RX 6800（16 GB）との違いも解説。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'Radeon RX 6800M でローカル LLM を実行できますか？',
        answer: 'はい。Radeon RX 6800M は 12 GB GDDR6 VRAM を備え、Windows と Linux で Ollama または llama.cpp の Vulkan バックエンド経由でローカル LLM を問題なく実行できます。ROCm はこのチップを公式サポートしておらず、Linux では非公式のオーバーライドでのみ動作します。8B モデル（Q4_K_M）は推定 45～60 tok/s で、同じダイの RX 6700 XT のベンチマークからの推定値であり、PromptQuorum の実測ではありません。',
        bullets: [
          'Windows と Linux：Vulkan が確実な経路（Ollama はデフォルトで有効化）',
          'ROCm：6800M は AMD と Ollama のサポート一覧に載っておらず、Linux では HSA_OVERRIDE_GFX_VERSION=10.3.0 が必要で不安定な場合あり',
          '12 GB VRAM は適度なコンテキスト長で Q4_K_M の 14B までのモデルに対応',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RX 6800M はモバイル RDNA 2 チップ（Navi 22、12 GB VRAM）— デスクトップ RX 6800（Navi 21、16 GB VRAM）ではない',
          'Windows・Linux では Vulkan が確実な経路。ROCm は 6800M を公式サポートせず、Windows では Ollama の ROCm 対応が RX 7600 以降から',
          '推定速度：8B（Q4_K_M）で約 45～60 tok/s、14B で 25～35 tok/s — 同じダイの RX 6700 XT のベンチマークからの外挿であり、PromptQuorum の実測ではない',
          '電源に接続して使用：ノート PC の GPU はバッテリー時に電力制限が厳しくなり、推論が遅くなる',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M が実際に実行できること',
        content: [
          '<strong>Radeon RX 6800M はモバイル RDNA 2 チップ（Navi 22、gfx1031）で 12 GB GDDR6 VRAM を搭載 — より大きな Navi 21 ダイと 16 GB を使うデスクトップ RX 6800 ではありません。</strong> 12 GB あれば、Q4_K_M で 14B までのモデルをレイヤーオフロードなしで実行でき、デスクトップ RTX 3060 12 GB と同等の容量です。コンテキストが長いと、モデルの重みに加えて KV キャッシュのメモリが必要になります。',
          '単一ユーザーの生成速度は主にメモリ帯域で決まります。6800M はデスクトップ RX 6700 XT と同じ Navi 22 ダイ・12 GB メモリ構成で、<a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan スコアボード</a>では Vulkan バックエンドの Llama 2 7B Q4_0 で約 84 tok/s です。この値を大きなモデルファイルに合わせてスケールしたものが下の推定値です。ノート PC の電力制限や冷却により、6800M はデスクトップカードより低くなる場合があります。',
          'これらの速度はこの公開ベンチマークから導いた推定値であり、PromptQuorum が 6800M で実施したテストではありません。実際の数値はお使いのマシンで <code>llama-bench</code> を実行して確認してください。8 GB VRAM の CUDA 環境との比較は<a href="/ja/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti リグ比較</a>を参照。',
        ],
        columns: ['モデル', 'VRAM（Q4_K_M）', '推定速度（Vulkan）'],
        rows: [
          { 'モデル': 'Llama 3.1 8B', 'VRAM（Q4_K_M）': '~5 GB', '推定速度（Vulkan）': '~45～60 tok/s' },
          { 'モデル': 'Qwen3 8B', 'VRAM（Q4_K_M）': '~5 GB', '推定速度（Vulkan）': '~45～60 tok/s' },
          { 'モデル': 'Phi-4 14B', 'VRAM（Q4_K_M）': '~9 GB', '推定速度（Vulkan）': '~25～35 tok/s' },
          { 'モデル': 'Qwen3 14B', 'VRAM（Q4_K_M）': '~9 GB', '推定速度（Vulkan）': '~25～35 tok/s' },
        ],
      },
      body2: {
        title: '6800M でのローカル LLM 設定',
        content: [
          '<strong>Windows と Linux では Ollama をインストールします — AMD GPU では ROCm なしで Vulkan バックエンドを使用します。</strong><a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama の GPU ドキュメント</a>によると、バックエンドがインストールされていれば Vulkan はデフォルトで有効です。Linux では追加の Vulkan パッケージが必要な場合があります。llama.cpp のビルド済み Vulkan バイナリを使い、<code>-ngl 99</code> で GGUF を読み込んで全レイヤーを GPU にオフロードすることもできます。',
          'ROCm はより難しい経路です。RX 6800M は AMD の ROCm サポート表にも Ollama の AMD 一覧にも載っておらず、Windows では Ollama の ROCm 対応は RX 7600 以降のみです。Linux ではコミュニティの報告で <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> を使い、ROCm にこのチップを gfx1030 として扱わせています。これは非公式でクラッシュや CPU フォールバックの可能性があるため、まず Vulkan を試してください。',
          '常に電源に接続 — ノート PC の GPU はバッテリー時に電力制限が厳しくなり、推論が遅くなります。NVIDIA と AMD の GPU 比較全体は<a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカル LLM 向けベスト GPU ガイド</a>を参照。',
        ],
        callouts: [{ type: 'tip', text: 'セットアップをテスト：<code>ollama run llama3.1:8b</code> を実行し、<code>ollama ps</code> を確認 — PROCESSOR 列が 100% GPU と表示されるはずです。CPU と表示される場合は、Ollama サーバーログで GPU 検出のメッセージを確認してください。' }],
      },
      body3: {
        title: 'Radeon RX 6800M とデスクトップ RX 6800 の違い',
        content: [
          '「RX 6800」の検索はモバイルチップに行き着くことが多いですが、2 つのカードは別物です。デスクトップ RX 6800 は 16 GB VRAM とより広いメモリ帯域を持ち、より大きなモデルに対応し高速に生成します。<a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan スコアボード</a>では、デスクトップ RX 6800 が約 101 tok/s、RX 6700 XT が約 84 tok/s です（Llama 2 7B Q4_0、Vulkan）。',
          'デスクトップ RX 6800 は Ollama の Linux AMD サポート一覧に載っていますが、6800M は載っていません。このページの Vulkan に関する内容はその他すべて両カードに当てはまります。',
        ],
        columns: ['項目', 'RX 6800M（ノート）', 'RX 6800（デスクトップ）'],
        rows: [
          { '項目': 'GPU チップ', 'RX 6800M（ノート）': 'Navi 22 (gfx1031)', 'RX 6800（デスクトップ）': 'Navi 21 (gfx1030)' },
          { '項目': 'VRAM', 'RX 6800M（ノート）': '12 GB GDDR6', 'RX 6800（デスクトップ）': '16 GB GDDR6' },
          { '項目': 'メモリ帯域', 'RX 6800M（ノート）': '384 GB/s', 'RX 6800（デスクトップ）': '512 GB/s' },
          { '項目': 'Ollama Linux AMD サポート一覧', 'RX 6800M（ノート）': '記載なし', 'RX 6800（デスクトップ）': '記載あり' },
          { '項目': 'Windows の Ollama ROCm', 'RX 6800M（ノート）': '記載なし', 'RX 6800（デスクトップ）': '記載なし' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Radeon 6800M とローカル LLM に関するよくある質問',
        faqs: [
          {
            q: 'Radeon 6800M は ROCm を公式にサポートしていますか？',
            a: 'いいえ。RX 6800M（gfx1031）は AMD の ROCm サポート表にも Ollama の AMD 一覧にも載っていません。Linux では <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> で動くことがありますが、非公式の回避策です。このカードでは Vulkan がサポートされた経路です。',
          },
          {
            q: 'Radeon RX 6800M の VRAM 容量は？',
            a: '192 ビットバスの 12 GB GDDR6 です。8B モデルは余裕で、14B モデルも適度なコンテキスト長の Q4_K_M なら収まります。12 GB は専用 GPU メモリで、システム RAM は加算されません。',
          },
          {
            q: 'Ollama は RX 6800M で動作しますか？',
            a: 'はい、Vulkan 経由で動作します。Ollama のドキュメントによると、バックエンドがインストールされていれば Vulkan はデフォルトで有効です。Ollama の ROCm 経路には 6800M が載っていないため、非公式の Linux オーバーライドを使わない限り ROCm ではなく Vulkan になります。',
          },
          {
            q: 'ローカル LLM ではデスクトップ RX 6800 の方が 6800M より優れていますか？',
            a: 'はい、容量と帯域で優れます：VRAM は 16 GB 対 12 GB、帯域は約 512 GB/s 対 384 GB/s。Ollama の Linux AMD サポート一覧にも載っています。上の比較表を参照してください。',
          },
          {
            q: '6800M はローカル LLM で RTX 3070 Mobile より高速ですか？',
            a: '6800M の 12 GB VRAM と、ほとんどの RTX 3070 Mobile 構成の 8 GB の差は、生の速度よりモデルの収まりやすさに効きます。同じモデルサイズなら RTX 3070 Mobile は成熟した CUDA サポートの恩恵があります。実際の結果は自分のマシンで <code>llama-bench</code> を使って比較してください。',
          },
          {
            q: '6800M は継続的な LLM 推論でどのくらい熱くなりますか？',
            a: '継続的な推論はゲームプレイと同様に GPU に負荷をかけ、冷却次第ではノート PC の温度が 80℃台に達することがあります。ご自身で温度を監視し、通気口を確保し、スロットリングが起きる場合は Radeon Software（Windows）または CoreCtrl（Linux）で控えめなアンダーボルトを検討してください。undervolt は自己責任で行ってください。不安定になったり保証に影響したりする可能性があります。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[12 GB VRAM で使うコーディング向けベストローカル LLM](/ja/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan: パフォーマンスガイド](/ja/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-zh.webp',
    title: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
    dateModified: '2026-10-17',
    seoTitle: 'Radeon 6800M 能运行本地 LLM？| Prompt Bites | PromptQuorum',
    metaDescription: '可以。Radeon RX 6800M（12 GB 显存）在 Windows 和 Linux 上通过 Vulkan 运行 8B 模型；ROCm 为非官方支持。另含桌面版 RX 6800（16 GB）对比。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
        answer: '可以。Radeon RX 6800M 拥有 12 GB GDDR6 显存，在 Windows 和 Linux 上通过 Ollama 或 llama.cpp 的 Vulkan 后端即可良好运行本地 LLM。ROCm 不正式支持该芯片；在 Linux 上只能通过非官方覆盖方式使用。8B 模型（Q4_K_M）的估计速度约为 45–60 tok/s，依据同一芯片的 RX 6700 XT 基准推算，并非 PromptQuorum 实测。',
        bullets: [
          'Windows 和 Linux：Vulkan 是可靠路径（Ollama 默认启用）',
          'ROCm：6800M 不在 AMD 或 Ollama 的支持列表中；Linux 需要 HSA_OVERRIDE_GFX_VERSION=10.3.0，且可能不稳定',
          '12 GB 显存在适度上下文长度下支持 Q4_K_M 量化的最高 14B 模型',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RX 6800M 是移动版 RDNA 2 芯片（Navi 22，12 GB 显存）——不是桌面版 RX 6800（Navi 21，16 GB 显存）',
          '在 Windows 和 Linux 上 Vulkan 是可靠路径；ROCm 不正式支持 6800M，且在 Windows 上 Ollama 的 ROCm 列表从 RX 7600 起',
          '估计速度：8B（Q4_K_M）约 45–60 tok/s，14B 约 25–35 tok/s——根据同一芯片的 RX 6700 XT 基准推算，并非 PromptQuorum 实测',
          '请接通电源使用：笔记本 GPU 在电池供电时功率限制更严，推理速度会下降',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M 实际能运行什么',
        content: [
          '<strong>Radeon RX 6800M 是移动版 RDNA 2 芯片（Navi 22，gfx1031），配备 12 GB GDDR6 显存——不是使用更大 Navi 21 芯片、配备 16 GB 的桌面版 RX 6800。</strong>12 GB 显存可在不卸载层的情况下容纳 Q4_K_M 量化的最高 14B 模型，容量与桌面版 RTX 3060 12 GB 相当。更长的上下文会在模型权重之外增加 KV 缓存占用。',
          '单用户生成速度主要受内存带宽限制。6800M 与桌面版 RX 6700 XT 使用同一 Navi 22 芯片和 12 GB 显存配置，后者在<a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan 成绩榜</a>中使用 Vulkan 后端运行 Llama 2 7B Q4_0 约 84 tok/s。把该数值按更大的模型文件换算，就得到下表的估计值。笔记本的功率限制和散热可能使 6800M 低于桌面显卡。',
          '这些速度是依据该公开基准推算的估计值，并非 PromptQuorum 在 6800M 上的测试。请在自己的机器上运行 <code>llama-bench</code> 获取真实数据。如需与 8 GB 显存的 CUDA 方案对比，请参见<a href="/zh/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti 对比</a>。',
        ],
        columns: ['模型', '显存（Q4_K_M）', '估计速度（Vulkan）'],
        rows: [
          { '模型': 'Llama 3.1 8B', '显存（Q4_K_M）': '~5 GB', '估计速度（Vulkan）': '~45–60 tok/s' },
          { '模型': 'Qwen3 8B', '显存（Q4_K_M）': '~5 GB', '估计速度（Vulkan）': '~45–60 tok/s' },
          { '模型': 'Phi-4 14B', '显存（Q4_K_M）': '~9 GB', '估计速度（Vulkan）': '~25–35 tok/s' },
          { '模型': 'Qwen3 14B', '显存（Q4_K_M）': '~9 GB', '估计速度（Vulkan）': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: '在 6800M 上设置本地 LLM',
        content: [
          '<strong>在 Windows 和 Linux 上安装 Ollama——它对 AMD GPU 使用 Vulkan 后端，无需 ROCm。</strong><a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama GPU 文档</a>指出，只要安装了该后端，Vulkan 默认启用；在 Linux 上可能还需要额外的 Vulkan 软件包。也可使用 llama.cpp 预编译的 Vulkan 二进制文件，并用 <code>-ngl 99</code> 加载 GGUF，将所有层卸载到 GPU。',
          'ROCm 是更难的路径。RX 6800M 不在 AMD 的 ROCm 支持表中，也不在 Ollama 的 AMD 列表中；在 Windows 上，Ollama 的 ROCm 列表只覆盖 RX 7600 及更新型号。在 Linux 上，社区报告使用 <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> 让 ROCm 把该芯片当作 gfx1030。这是非官方做法，可能崩溃或回退到 CPU，请先尝试 Vulkan。',
          '务必接通电源——笔记本 GPU 在电池供电时功率限制更严，推理速度会下降。NVIDIA 与 AMD 的完整 GPU 对比请参见<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地 LLM 最佳 GPU 指南</a>。',
        ],
        callouts: [{ type: 'tip', text: '测试您的设置：运行 <code>ollama run llama3.1:8b</code>，然后检查 <code>ollama ps</code>——PROCESSOR 列应显示 100% GPU。如果显示 CPU，请查看 Ollama 服务器日志中的 GPU 检测信息。' }],
      },
      body3: {
        title: 'Radeon RX 6800M 与桌面版 RX 6800',
        content: [
          '搜索“RX 6800”常常指向移动版芯片，但这两款显卡并不相同。桌面版 RX 6800 拥有 16 GB 显存和更高的内存带宽，能容纳更大的模型且生成更快。<a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan 成绩榜</a>列出桌面版 RX 6800 约 101 tok/s，RX 6700 XT 约 84 tok/s（Llama 2 7B Q4_0，Vulkan）。',
          '桌面版 RX 6800 在 Ollama 的 Linux AMD 支持列表中，而 6800M 不在。本页关于 Vulkan 的其余内容对两款显卡都适用。',
        ],
        columns: ['规格', 'RX 6800M（笔记本）', 'RX 6800（桌面）'],
        rows: [
          { '规格': 'GPU 芯片', 'RX 6800M（笔记本）': 'Navi 22 (gfx1031)', 'RX 6800（桌面）': 'Navi 21 (gfx1030)' },
          { '规格': '显存', 'RX 6800M（笔记本）': '12 GB GDDR6', 'RX 6800（桌面）': '16 GB GDDR6' },
          { '规格': '内存带宽', 'RX 6800M（笔记本）': '384 GB/s', 'RX 6800（桌面）': '512 GB/s' },
          { '规格': 'Ollama Linux AMD 支持列表', 'RX 6800M（笔记本）': '未列出', 'RX 6800（桌面）': '已列出' },
          { '规格': 'Windows 上的 Ollama ROCm', 'RX 6800M（笔记本）': '未列出', 'RX 6800（桌面）': '未列出' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Radeon 6800M 与本地 LLM 的常见问题',
        faqs: [
          {
            q: 'Radeon 6800M 正式支持 ROCm 吗？',
            a: '不支持。RX 6800M（gfx1031）不在 AMD 的 ROCm 支持表中，也不在 Ollama 的 AMD 列表中。在 Linux 上有时可通过 <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> 运行，但这是非官方的变通方法。Vulkan 才是这款显卡受支持的路径。',
          },
          {
            q: 'Radeon RX 6800M 有多少显存？',
            a: '12 GB GDDR6，位宽 192 位。可轻松容纳 8B 模型，在适度上下文长度下也能容纳 Q4_K_M 的 14B 模型。这 12 GB 是专用 GPU 显存，系统内存不会叠加。',
          },
          {
            q: 'Ollama 能在 RX 6800M 上运行吗？',
            a: '可以，通过 Vulkan。Ollama 文档指出，只要安装了该后端，Vulkan 默认启用。Ollama 的 ROCm 路径未列出 6800M，因此除非使用非官方的 Linux 覆盖方式，否则将使用 Vulkan 而非 ROCm。',
          },
          {
            q: '对本地 LLM 来说，桌面版 RX 6800 比 6800M 更好吗？',
            a: '是的，在容量和带宽上更好：显存 16 GB 对 12 GB，带宽约 512 GB/s 对 384 GB/s。它也在 Ollama 的 Linux AMD 支持列表中。请参见上方对比表。',
          },
          {
            q: '6800M 运行本地 LLM 比 RTX 3070 Mobile 更快吗？',
            a: '6800M 的 12 GB 显存与大多数 RTX 3070 Mobile 配置的 8 GB 相比，对模型能否装下比原始速度更重要。在相同模型大小下，RTX 3070 Mobile 受益于成熟的 CUDA 支持。请在自己的机器上用 <code>llama-bench</code> 对比真实结果。',
          },
          {
            q: '6800M 持续运行 LLM 时会有多热？',
            a: '持续推理对 GPU 的负载与游戏类似，视散热而定，笔记本温度可能达到 80 多摄氏度。请监控自己的温度，保持通风口畅通，若笔记本降频，可考虑在 Radeon Software（Windows）或 CoreCtrl（Linux）中适度降压。降压需自行承担风险：可能导致不稳定，并可能影响保修。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[12 GB 显存最佳本地编程 LLM](/zh/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan：性能指南](/zh/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-pt.webp',
    title: 'Você pode executar LLMs locais em uma Radeon RX 6800M?',
    dateModified: '2026-10-17',
    seoTitle: 'Radeon 6800M para LLM local? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sim. A Radeon RX 6800M (12 GB de VRAM) roda modelos 8B via Vulkan no Windows e no Linux; o ROCm não é oficial. Inclui a RX 6800 de desktop (16 GB).',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Você pode executar LLMs locais em uma Radeon RX 6800M?',
        answer: 'Sim. A Radeon RX 6800M tem 12 GB de VRAM GDDR6 e executa bem LLMs locais pelo backend Vulkan do Ollama ou do llama.cpp, tanto no Windows quanto no Linux. O ROCm não oferece suporte oficial a esse chip; no Linux, só funciona com uma substituição não oficial. Um modelo 8B em Q4_K_M fica em torno de 45–60 tok/s (estimativa a partir de um benchmark da RX 6700 XT, que usa o mesmo chip), não medida pelo PromptQuorum.',
        bullets: [
          'Windows e Linux: o Vulkan é o caminho confiável (o Ollama o ativa por padrão)',
          'ROCm: a 6800M não está na lista da AMD nem na do Ollama; o Linux exige HSA_OVERRIDE_GFX_VERSION=10.3.0 e pode ser instável',
          '12 GB de VRAM comportam modelos de até 14B em Q4_K_M com janela de contexto moderada',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A RX 6800M é um chip RDNA 2 móvel (Navi 22, 12 GB de VRAM) — NÃO é a RX 6800 de desktop (Navi 21, 16 GB de VRAM)',
          'O Vulkan é o caminho confiável no Windows e no Linux; o ROCm não oferece suporte oficial à 6800M, e no Windows a lista ROCm do Ollama começa na RX 7600',
          'Velocidade estimada: cerca de 45–60 tok/s em um modelo 8B Q4_K_M e 25–35 tok/s em um modelo 14B — extrapolada de um benchmark da RX 6700 XT (mesmo chip), não medida pelo PromptQuorum',
          'Use sempre na tomada: GPUs de notebook aplicam limites de energia mais rígidos na bateria, o que reduz a velocidade de inferência',
        ],
      },
      body1: {
        title: 'O que a Radeon RX 6800M realmente consegue executar',
        content: [
          '<strong>A Radeon RX 6800M é um chip RDNA 2 móvel (Navi 22, gfx1031) com 12 GB de VRAM GDDR6 — não é a RX 6800 de desktop, que usa o chip Navi 21, maior, com 16 GB.</strong> Com 12 GB, a 6800M comporta modelos de até 14B em Q4_K_M sem descarregar camadas, a mesma capacidade de uma RTX 3060 de 12 GB de desktop. Janelas de contexto maiores acrescentam memória de cache KV além dos pesos do modelo.',
          'A velocidade de geração para um único usuário é limitada principalmente pela largura de banda de memória. A 6800M usa o mesmo chip Navi 22 e a mesma configuração de 12 GB de memória da RX 6700 XT de desktop, que marca cerca de 84 tok/s em Llama 2 7B Q4_0 com o backend Vulkan no <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">placar Vulkan do llama.cpp</a>. Ajustando esse valor para arquivos de modelo maiores, chega-se às estimativas abaixo. Limites de energia e refrigeração do notebook podem deixar a 6800M abaixo de uma placa de desktop.',
          'Essas velocidades são estimativas derivadas desse benchmark público, não testes realizados pelo PromptQuorum em uma 6800M. Execute <code>llama-bench</code> na sua máquina para obter números reais. Para uma comparação CUDA com 8 GB de VRAM, veja a <a href="/pt/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">comparação AMD 5700X + RTX 3070 Ti</a>.',
        ],
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'Velocidade estimada (Vulkan)'],
        rows: [
          { 'Modelo': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Velocidade estimada (Vulkan)': '~45–60 tok/s' },
          { 'Modelo': 'Qwen3 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Velocidade estimada (Vulkan)': '~45–60 tok/s' },
          { 'Modelo': 'Phi-4 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Velocidade estimada (Vulkan)': '~25–35 tok/s' },
          { 'Modelo': 'Qwen3 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Velocidade estimada (Vulkan)': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: 'Configurando LLMs locais na 6800M',
        content: [
          '<strong>No Windows e no Linux, instale o Ollama — ele usa o backend Vulkan para GPUs AMD, sem ROCm.</strong> A <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">documentação de GPU do Ollama</a> informa que o Vulkan vem ativado por padrão quando o backend está instalado; no Linux, podem ser necessários pacotes Vulkan adicionais. Você também pode usar um binário Vulkan pré-compilado do llama.cpp e carregar um GGUF com <code>-ngl 99</code> para descarregar todas as camadas na GPU.',
          'O ROCm é o caminho mais difícil. A RX 6800M não está na tabela de suporte ROCm da AMD nem na lista AMD do Ollama, e no Windows a lista ROCm do Ollama cobre apenas a RX 7600 e modelos mais novos. No Linux, relatos da comunidade usam <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> para que o ROCm trate o chip como gfx1030. Isso não é oficial e pode travar ou voltar para a CPU, então tente o Vulkan primeiro.',
          'Use sempre na tomada — GPUs de notebook aplicam limites de energia mais rígidos na bateria, o que reduz a velocidade de inferência. Para a comparação completa de GPUs NVIDIA e AMD, veja o <a href="/pt/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guia das melhores GPUs para LLMs locais</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Teste sua configuração: execute <code>ollama run llama3.1:8b</code> e verifique <code>ollama ps</code> — a coluna PROCESSOR deve mostrar 100% GPU. Se mostrar CPU, confira o log do servidor Ollama em busca de mensagens de detecção da GPU.' }],
      },
      body3: {
        title: 'Radeon RX 6800M vs. RX 6800 de desktop',
        content: [
          'Buscas por “RX 6800” costumam levar ao chip móvel, mas as duas placas são diferentes. A RX 6800 de desktop tem 16 GB de VRAM e mais largura de banda de memória, comportando modelos maiores e gerando mais rápido. O <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">placar Vulkan do llama.cpp</a> lista cerca de 101 tok/s para a RX 6800 de desktop contra cerca de 84 tok/s para a RX 6700 XT (Llama 2 7B Q4_0, Vulkan).',
          'A RX 6800 de desktop consta na lista AMD para Linux do Ollama; a 6800M não. Todo o restante desta página sobre Vulkan vale para as duas placas.',
        ],
        columns: ['Especificação', 'RX 6800M (notebook)', 'RX 6800 (desktop)'],
        rows: [
          { 'Especificação': 'Chip da GPU', 'RX 6800M (notebook)': 'Navi 22 (gfx1031)', 'RX 6800 (desktop)': 'Navi 21 (gfx1030)' },
          { 'Especificação': 'VRAM', 'RX 6800M (notebook)': '12 GB GDDR6', 'RX 6800 (desktop)': '16 GB GDDR6' },
          { 'Especificação': 'Largura de banda de memória', 'RX 6800M (notebook)': '384 GB/s', 'RX 6800 (desktop)': '512 GB/s' },
          { 'Especificação': 'Lista AMD do Ollama (Linux)', 'RX 6800M (notebook)': 'Não listada', 'RX 6800 (desktop)': 'Listada' },
          { 'Especificação': 'ROCm do Ollama no Windows', 'RX 6800M (notebook)': 'Não listada', 'RX 6800 (desktop)': 'Não listada' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre a Radeon 6800M e LLMs locais',
        faqs: [
          {
            q: 'A Radeon 6800M tem suporte oficial ao ROCm?',
            a: 'Não. A RX 6800M (gfx1031) não está na tabela de suporte ROCm da AMD nem na lista AMD do Ollama. No Linux, às vezes funciona com <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>, mas é uma solução alternativa não oficial. O Vulkan é o caminho com suporte para essa placa.',
          },
          {
            q: 'Quanta VRAM tem a Radeon RX 6800M?',
            a: '12 GB de GDDR6 em um barramento de 192 bits. Isso comporta modelos 8B com folga e modelos 14B em Q4_K_M com janela de contexto moderada. Os 12 GB são memória dedicada da GPU; a RAM do sistema não se soma a eles.',
          },
          {
            q: 'O Ollama funciona na RX 6800M?',
            a: 'Sim, via Vulkan. A documentação do Ollama informa que o Vulkan vem ativado por padrão quando o backend está instalado. O caminho ROCm do Ollama não lista a 6800M, então espere Vulkan em vez de ROCm, a menos que use a substituição não oficial no Linux.',
          },
          {
            q: 'A RX 6800 de desktop é melhor que a 6800M para LLMs locais?',
            a: 'Sim, em capacidade e largura de banda: 16 GB contra 12 GB de VRAM e cerca de 512 GB/s contra 384 GB/s. Ela também consta na lista AMD para Linux do Ollama. Veja a tabela comparativa acima.',
          },
          {
            q: 'A 6800M é mais rápida que a RTX 3070 Mobile para LLMs?',
            a: 'Os 12 GB de VRAM da 6800M, contra 8 GB na maioria das configurações da RTX 3070 Mobile, pesam mais no encaixe do modelo do que a velocidade bruta. Com o mesmo tamanho de modelo, a RTX 3070 Mobile se beneficia de um suporte CUDA maduro. Compare resultados reais com <code>llama-bench</code> na sua máquina.',
          },
          {
            q: 'Quanto a 6800M esquenta rodando LLMs continuamente?',
            a: 'A inferência contínua exige da GPU algo parecido com uma sessão de jogos; dependendo da refrigeração, as temperaturas do notebook podem chegar à casa dos 80 °C. Monitore suas próprias temperaturas, mantenha as saídas de ar livres e considere um undervolt moderado no Radeon Software (Windows) ou no CoreCtrl (Linux) se o notebook reduzir o desempenho. O undervolt é por sua conta e risco: pode causar instabilidade e afetar a garantia.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhores LLMs locais para programação com 12 GB de VRAM](/pt/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan: Guia de desempenho](/pt/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-es.webp',
    title: '¿Puedes ejecutar LLMs locales en una Radeon RX 6800M?',
    dateModified: '2026-10-17',
    seoTitle: '¿Radeon 6800M para LLM local? | Prompt Bites | PromptQuorum',
    metaDescription: 'Sí. La Radeon RX 6800M (12 GB de VRAM) ejecuta modelos 8B con Vulkan en Windows y Linux; ROCm no es oficial. Incluye la RX 6800 de escritorio (16 GB).',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: '¿Puedes ejecutar LLMs locales en una Radeon RX 6800M?',
        answer: 'Sí. La Radeon RX 6800M tiene 12 GB de VRAM GDDR6 y ejecuta bien LLMs locales con el backend Vulkan de Ollama o llama.cpp, tanto en Windows como en Linux. ROCm no es compatible oficialmente con este chip; en Linux solo funciona con una anulación no oficial. Un modelo 8B en Q4_K_M ronda los 45–60 tok/s (estimación a partir de un benchmark de la RX 6700 XT, que usa el mismo chip), no medida por PromptQuorum.',
        bullets: [
          'Windows y Linux: Vulkan es la vía fiable (Ollama lo activa por defecto)',
          'ROCm: la 6800M no figura en la lista de AMD ni en la de Ollama; Linux requiere HSA_OVERRIDE_GFX_VERSION=10.3.0 y puede ser inestable',
          '12 GB de VRAM admiten modelos de hasta 14B en Q4_K_M con una ventana de contexto moderada',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La RX 6800M es un chip RDNA 2 móvil (Navi 22, 12 GB de VRAM) — NO es la RX 6800 de escritorio (Navi 21, 16 GB de VRAM)',
          'Vulkan es la vía fiable en Windows y Linux; ROCm no es compatible oficialmente con la 6800M, y en Windows la lista ROCm de Ollama empieza en la RX 7600',
          'Velocidad estimada: unos 45–60 tok/s en un modelo 8B Q4_K_M y 25–35 tok/s en uno de 14B — extrapolada de un benchmark de la RX 6700 XT (mismo chip), no medida por PromptQuorum',
          'Úsala siempre enchufada: las GPU de portátil aplican límites de potencia más estrictos con batería, lo que reduce la velocidad de inferencia',
        ],
      },
      body1: {
        title: 'Qué puede ejecutar realmente la Radeon RX 6800M',
        content: [
          '<strong>La Radeon RX 6800M es un chip RDNA 2 móvil (Navi 22, gfx1031) con 12 GB de VRAM GDDR6 — no es la RX 6800 de escritorio, que usa el chip Navi 21, más grande, con 16 GB.</strong> Con 12 GB, la 6800M admite modelos de hasta 14B en Q4_K_M sin descargar capas, la misma capacidad que una RTX 3060 de 12 GB de escritorio. Las ventanas de contexto largas añaden memoria de caché KV además de los pesos del modelo.',
          'La velocidad de generación para un solo usuario está limitada sobre todo por el ancho de banda de memoria. La 6800M usa el mismo chip Navi 22 y la misma configuración de 12 GB de memoria que la RX 6700 XT de escritorio, que logra unos 84 tok/s en Llama 2 7B Q4_0 con el backend Vulkan en la <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tabla Vulkan de llama.cpp</a>. Escalando esa cifra a archivos de modelo más grandes se obtienen las estimaciones de abajo. Los límites de potencia y la refrigeración del portátil pueden dejar la 6800M por debajo de una tarjeta de escritorio.',
          'Estas velocidades son estimaciones derivadas de ese benchmark público, no pruebas realizadas por PromptQuorum en una 6800M. Ejecuta <code>llama-bench</code> en tu equipo para obtener cifras reales. Para una comparación CUDA con 8 GB de VRAM, consulta la <a href="/es/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">comparación AMD 5700X + RTX 3070 Ti</a>.',
        ],
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'Velocidad estimada (Vulkan)'],
        rows: [
          { 'Modelo': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Velocidad estimada (Vulkan)': '~45–60 tok/s' },
          { 'Modelo': 'Qwen3 8B', 'VRAM (Q4_K_M)': '~5 GB', 'Velocidad estimada (Vulkan)': '~45–60 tok/s' },
          { 'Modelo': 'Phi-4 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Velocidad estimada (Vulkan)': '~25–35 tok/s' },
          { 'Modelo': 'Qwen3 14B', 'VRAM (Q4_K_M)': '~9 GB', 'Velocidad estimada (Vulkan)': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: 'Configurar LLMs locales en la 6800M',
        content: [
          '<strong>En Windows y Linux, instala Ollama: usa el backend Vulkan para GPU de AMD, sin ROCm.</strong> La <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">documentación de GPU de Ollama</a> indica que Vulkan está activado por defecto cuando el backend está instalado; en Linux pueden hacer falta paquetes Vulkan adicionales. También puedes usar un binario Vulkan precompilado de llama.cpp y cargar un GGUF con <code>-ngl 99</code> para descargar todas las capas en la GPU.',
          'ROCm es la vía más difícil. La RX 6800M no figura en la tabla de compatibilidad ROCm de AMD ni en la lista AMD de Ollama, y en Windows la lista ROCm de Ollama solo cubre la RX 7600 y modelos más nuevos. En Linux, informes de la comunidad usan <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> para que ROCm trate el chip como gfx1030. Es no oficial y puede fallar o volver a la CPU, así que prueba primero Vulkan.',
          'Úsala siempre enchufada: las GPU de portátil aplican límites de potencia más estrictos con batería, lo que reduce la velocidad de inferencia. Para la comparación completa de GPU NVIDIA y AMD, consulta la <a href="/es/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guía de las mejores GPU para LLMs locales</a>.',
        ],
        callouts: [{ type: 'tip', text: 'Prueba tu configuración: ejecuta <code>ollama run llama3.1:8b</code> y revisa <code>ollama ps</code>; la columna PROCESSOR debería mostrar 100% GPU. Si muestra CPU, consulta el registro del servidor de Ollama para ver los mensajes de detección de la GPU.' }],
      },
      body3: {
        title: 'Radeon RX 6800M frente a la RX 6800 de escritorio',
        content: [
          'Las búsquedas de «RX 6800» suelen llegar al chip móvil, pero las dos tarjetas son distintas. La RX 6800 de escritorio tiene 16 GB de VRAM y más ancho de banda de memoria, así que admite modelos más grandes y genera más rápido. La <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tabla Vulkan de llama.cpp</a> muestra unos 101 tok/s para la RX 6800 de escritorio frente a unos 84 tok/s para la RX 6700 XT (Llama 2 7B Q4_0, Vulkan).',
          'La RX 6800 de escritorio figura en la lista AMD para Linux de Ollama; la 6800M no. Todo lo demás de esta página sobre Vulkan se aplica a ambas tarjetas.',
        ],
        columns: ['Característica', 'RX 6800M (portátil)', 'RX 6800 (escritorio)'],
        rows: [
          { 'Característica': 'Chip de la GPU', 'RX 6800M (portátil)': 'Navi 22 (gfx1031)', 'RX 6800 (escritorio)': 'Navi 21 (gfx1030)' },
          { 'Característica': 'VRAM', 'RX 6800M (portátil)': '12 GB GDDR6', 'RX 6800 (escritorio)': '16 GB GDDR6' },
          { 'Característica': 'Ancho de banda de memoria', 'RX 6800M (portátil)': '384 GB/s', 'RX 6800 (escritorio)': '512 GB/s' },
          { 'Característica': 'Lista AMD de Ollama (Linux)', 'RX 6800M (portátil)': 'No figura', 'RX 6800 (escritorio)': 'Figura' },
          { 'Característica': 'ROCm de Ollama en Windows', 'RX 6800M (portátil)': 'No figura', 'RX 6800 (escritorio)': 'No figura' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la Radeon 6800M y los LLMs locales',
        faqs: [
          {
            q: '¿La Radeon 6800M es compatible oficialmente con ROCm?',
            a: 'No. La RX 6800M (gfx1031) no figura en la tabla de compatibilidad ROCm de AMD ni en la lista AMD de Ollama. En Linux a veces funciona con <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>, pero es una solución alternativa no oficial. Vulkan es la vía compatible para esta tarjeta.',
          },
          {
            q: '¿Cuánta VRAM tiene la Radeon RX 6800M?',
            a: '12 GB de GDDR6 en un bus de 192 bits. Eso admite con holgura modelos 8B y modelos de 14B en Q4_K_M con una ventana de contexto moderada. Los 12 GB son memoria dedicada de la GPU; la RAM del sistema no se suma.',
          },
          {
            q: '¿Funciona Ollama en la RX 6800M?',
            a: 'Sí, mediante Vulkan. La documentación de Ollama indica que Vulkan está activado por defecto cuando el backend está instalado. La vía ROCm de Ollama no incluye la 6800M, así que espera Vulkan en lugar de ROCm, salvo que uses la anulación no oficial en Linux.',
          },
          {
            q: '¿Es mejor la RX 6800 de escritorio que la 6800M para LLMs locales?',
            a: 'Sí, en capacidad y ancho de banda: 16 GB frente a 12 GB de VRAM y unos 512 GB/s frente a 384 GB/s. Además figura en la lista AMD para Linux de Ollama. Consulta la tabla comparativa de arriba.',
          },
          {
            q: '¿Es la 6800M más rápida que la RTX 3070 Mobile para LLMs?',
            a: 'Los 12 GB de VRAM de la 6800M frente a los 8 GB de la mayoría de configuraciones de la RTX 3070 Mobile importan más para que el modelo quepa que la velocidad bruta. Con el mismo tamaño de modelo, la RTX 3070 Mobile se beneficia de un soporte CUDA maduro. Compara resultados reales con <code>llama-bench</code> en tu equipo.',
          },
          {
            q: '¿Cuánto se calienta la 6800M ejecutando LLMs de forma continua?',
            a: 'La inferencia sostenida exige a la GPU algo parecido a una sesión de juego; según la refrigeración, las temperaturas del portátil pueden llegar a los 80 °C. Supervisa tus propias temperaturas, mantén libres las salidas de aire y considera un undervolt moderado en Radeon Software (Windows) o CoreCtrl (Linux) si el portátil reduce el rendimiento. El undervolt es bajo tu propia responsabilidad: puede causar inestabilidad y afectar la garantía.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejores LLMs locales para programar con 12 GB de VRAM](/es/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan: Guía de rendimiento](/es/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-ar.webp',
    title: 'هل يمكنك تشغيل نماذج اللغة المحلية على ⁨Radeon RX 6800M⁩؟',
    dateModified: '2026-10-17',
    seoTitle: '⁨Radeon 6800M⁩ للـ ⁨LLM⁩ المحلي: ⁨Vulkan⁩ و ⁨ROCm⁩',
    metaDescription: 'نعم. تشغّل ⁨Radeon RX 6800M⁩ (⁨12 GB VRAM⁩) نماذج ⁨8B⁩ عبر ⁨Vulkan⁩ على ⁨Windows⁩ و⁨Linux⁩؛ ودعم ⁨ROCm⁩ غير رسمي. يشمل مقارنة مع ⁨RX 6800⁩ المكتبية.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنك تشغيل نماذج اللغة المحلية على Radeon RX 6800M؟',
        answer: 'نعم. تمتلك Radeon RX 6800M ذاكرة VRAM بحجم 12 GB GDDR6 وتشغّل نماذج اللغة المحلية بشكل جيد عبر الواجهة الخلفية Vulkan في Ollama أو llama.cpp على Windows وLinux. لا يدعم ROCm هذه الشريحة رسميًا؛ وعلى Linux لا يعمل إلا عبر تجاوز غير رسمي. تُقدَّر سرعة نموذج 8B بصيغة Q4_K_M بنحو 45–60 tok/s، استنادًا إلى اختبار RX 6700 XT التي تستخدم الشريحة نفسها، وليست قياسًا أجراه PromptQuorum.',
        bullets: [
          'Windows وLinux: Vulkan هو المسار الموثوق (يفعّله Ollama افتراضيًا)',
          'ROCm: 6800M غير مدرجة في قائمة دعم AMD ولا قائمة Ollama؛ يتطلب Linux ضبط HSA_OVERRIDE_GFX_VERSION=10.3.0 وقد يكون غير مستقر',
          '12 GB VRAM تتسع لنماذج حتى 14B بصيغة Q4_K_M مع نافذة سياق معتدلة',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RX 6800M شريحة RDNA 2 محمولة (Navi 22، بذاكرة 12 GB VRAM) — وليست RX 6800 المكتبية (Navi 21، بذاكرة 16 GB VRAM)',
          'Vulkan هو المسار الموثوق على Windows وLinux؛ لا يدعم ROCm الشريحة 6800M رسميًا، وعلى Windows تبدأ قائمة ROCm في Ollama من RX 7600',
          'السرعة المقدَّرة: نحو 45–60 tok/s لنموذج 8B بصيغة Q4_K_M ونحو 25–35 tok/s لنموذج 14B — استنتاج من اختبار RX 6700 XT التي تستخدم الشريحة نفسها، وليست قياسًا أجراه PromptQuorum',
          'شغّل الجهاز دائمًا متصلًا بالكهرباء: تفرض وحدات GPU المحمولة حدودًا أشد للطاقة على البطارية، مما يخفض سرعة الاستنتاج',
        ],
      },
      body1: {
        title: 'ما يمكن لـ Radeon RX 6800M تشغيله فعليًا',
        content: [
          '<strong>Radeon RX 6800M شريحة RDNA 2 محمولة (Navi 22، gfx1031) بذاكرة VRAM بحجم 12 GB GDDR6 — وليست RX 6800 المكتبية التي تستخدم شريحة Navi 21 الأكبر بذاكرة 16 GB.</strong> بـ 12 GB، تستوعب 6800M نماذج حتى 14B بصيغة Q4_K_M دون تحميل طبقات، وهي سعة RTX 3060 المكتبية بـ 12 GB نفسها. وتضيف نوافذ السياق الأطول ذاكرة لمخبأ KV فوق أوزان النموذج.',
          'تتحدد سرعة التوليد لمستخدم واحد في الغالب بعرض نطاق الذاكرة. تستخدم 6800M شريحة Navi 22 نفسها وتكوين ذاكرة 12 GB نفسه كما في RX 6700 XT المكتبية، التي تحقق نحو 84 tok/s على Llama 2 7B Q4_0 بالواجهة الخلفية Vulkan في <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">لوحة نتائج Vulkan في llama.cpp</a>. وبتحجيم هذا الرقم لملفات نماذج أكبر نحصل على التقديرات أدناه. وقد تضع حدود الطاقة والتبريد في الحاسوب المحمول 6800M دون البطاقة المكتبية.',
          'هذه السرعات تقديرات مشتقة من ذلك الاختبار العام، وليست اختبارات أجراها PromptQuorum على 6800M. شغّل <code>llama-bench</code> على جهازك للحصول على أرقامك الفعلية. للمقارنة مع جهاز CUDA بذاكرة 8 GB VRAM، راجع <a href="/ar/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">مقارنة جهاز AMD 5700X + RTX 3070 Ti</a>.',
        ],
        columns: ['النموذج', 'VRAM (Q4_K_M)', 'السرعة المقدَّرة (Vulkan)'],
        rows: [
          { 'النموذج': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '~5 GB', 'السرعة المقدَّرة (Vulkan)': '~45–60 tok/s' },
          { 'النموذج': 'Qwen3 8B', 'VRAM (Q4_K_M)': '~5 GB', 'السرعة المقدَّرة (Vulkan)': '~45–60 tok/s' },
          { 'النموذج': 'Phi-4 14B', 'VRAM (Q4_K_M)': '~9 GB', 'السرعة المقدَّرة (Vulkan)': '~25–35 tok/s' },
          { 'النموذج': 'Qwen3 14B', 'VRAM (Q4_K_M)': '~9 GB', 'السرعة المقدَّرة (Vulkan)': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: 'إعداد نماذج اللغة المحلية على 6800M',
        content: [
          '<strong>على Windows وLinux ثبّت Ollama — فهو يستخدم الواجهة الخلفية Vulkan لوحدات GPU من AMD دون الحاجة إلى ROCm.</strong> تذكر <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">وثائق GPU في Ollama</a> أن Vulkan مفعّل افتراضيًا عند تثبيت الواجهة الخلفية؛ وعلى Linux قد تلزم حزم Vulkan إضافية. يمكنك أيضًا استخدام ملف Vulkan جاهز من llama.cpp وتحميل GGUF بالخيار <code>-ngl 99</code> لنقل جميع الطبقات إلى GPU.',
          'ROCm هو المسار الأصعب. RX 6800M غير مدرجة في جدول دعم ROCm من AMD ولا في قائمة AMD في Ollama، وعلى Windows لا تغطي قائمة ROCm في Ollama سوى RX 7600 وما بعدها. وعلى Linux تستخدم تقارير المجتمع <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code> ليعامل ROCm الشريحة على أنها gfx1030. وهذا غير رسمي وقد ينهار أو يعود إلى المعالج المركزي، فجرّب Vulkan أولًا.',
          'اعمل دائمًا متصلًا بالكهرباء — تفرض وحدات GPU المحمولة حدودًا أشد للطاقة على البطارية، مما يخفض سرعة الاستنتاج. للمقارنة الكاملة بين وحدات NVIDIA وAMD، راجع <a href="/ar/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">دليل أفضل وحدات GPU لنماذج اللغة المحلية</a>.',
        ],
        callouts: [{ type: 'tip', text: 'اختبر إعدادك: شغّل <code>ollama run llama3.1:8b</code> ثم افحص <code>ollama ps</code> — يجب أن يعرض عمود PROCESSOR القيمة 100% GPU. إذا عرض CPU فراجع سجل خادم Ollama بحثًا عن رسائل اكتشاف GPU.' }],
      },
      body3: {
        title: 'Radeon RX 6800M مقابل RX 6800 المكتبية',
        content: [
          'كثيرًا ما تقود عمليات البحث عن «RX 6800» إلى الشريحة المحمولة، لكن البطاقتين مختلفتان. تمتلك RX 6800 المكتبية ذاكرة 16 GB VRAM وعرض نطاق ذاكرة أكبر، فتتسع لنماذج أكبر وتولّد أسرع. تُدرج <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">لوحة نتائج Vulkan في llama.cpp</a> نحو 101 tok/s لـ RX 6800 المكتبية مقابل نحو 84 tok/s لـ RX 6700 XT (Llama 2 7B Q4_0، Vulkan).',
          'تظهر RX 6800 المكتبية في قائمة دعم AMD على Linux في Ollama، أما 6800M فلا. وكل ما سواه في هذه الصفحة بشأن Vulkan ينطبق على البطاقتين.',
        ],
        columns: ['المواصفة', 'RX 6800M (محمولة)', 'RX 6800 (مكتبية)'],
        rows: [
          { 'المواصفة': 'شريحة GPU', 'RX 6800M (محمولة)': 'Navi 22 (gfx1031)', 'RX 6800 (مكتبية)': 'Navi 21 (gfx1030)' },
          { 'المواصفة': 'VRAM', 'RX 6800M (محمولة)': '12 GB GDDR6', 'RX 6800 (مكتبية)': '16 GB GDDR6' },
          { 'المواصفة': 'عرض نطاق الذاكرة', 'RX 6800M (محمولة)': '384 GB/s', 'RX 6800 (مكتبية)': '512 GB/s' },
          { 'المواصفة': 'قائمة AMD في Ollama (Linux)', 'RX 6800M (محمولة)': 'غير مدرجة', 'RX 6800 (مكتبية)': 'مدرجة' },
          { 'المواصفة': 'ROCm في Ollama على Windows', 'RX 6800M (محمولة)': 'غير مدرجة', 'RX 6800 (مكتبية)': 'غير مدرجة' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول Radeon 6800M ونماذج اللغة المحلية',
        faqs: [
          {
            q: 'هل تدعم Radeon 6800M ‏ROCm رسميًا؟',
            a: 'لا. RX 6800M (gfx1031) غير مدرجة في جدول دعم ROCm من AMD ولا في قائمة AMD في Ollama. على Linux تعمل أحيانًا مع <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>، لكنه حل التفافي غير رسمي. Vulkan هو المسار المدعوم لهذه البطاقة.',
          },
          {
            q: 'كم تبلغ ذاكرة VRAM في Radeon RX 6800M؟',
            a: '12 GB من GDDR6 على ناقل 192 بت. وهذا يستوعب نماذج 8B براحة ونماذج 14B بصيغة Q4_K_M مع نافذة سياق معتدلة. الـ 12 GB ذاكرة GPU مخصصة؛ ولا تُضاف إليها ذاكرة النظام.',
          },
          {
            q: 'هل يعمل Ollama على RX 6800M؟',
            a: 'نعم، عبر Vulkan. تذكر وثائق Ollama أن Vulkan مفعّل افتراضيًا عند تثبيت الواجهة الخلفية. ولا يُدرج مسار ROCm في Ollama الشريحة 6800M، فتوقّع Vulkan بدل ROCm ما لم تستخدم التجاوز غير الرسمي على Linux.',
          },
          {
            q: 'هل RX 6800 المكتبية أفضل من 6800M لنماذج اللغة المحلية؟',
            a: 'نعم، في السعة وعرض النطاق: ‏16 GB مقابل 12 GB من VRAM ونحو 512 GB/s مقابل 384 GB/s. كما أنها مدرجة في قائمة دعم AMD على Linux في Ollama. راجع جدول المقارنة أعلاه.',
          },
          {
            q: 'هل 6800M أسرع من RTX 3070 Mobile في نماذج اللغة؟',
            a: 'تؤثر ذاكرة 6800M البالغة 12 GB VRAM مقابل 8 GB في معظم تكوينات RTX 3070 Mobile في إمكانية استيعاب النموذج أكثر من السرعة الخام. وبحجم نموذج متساوٍ تستفيد RTX 3070 Mobile من دعم CUDA الناضج. قارن النتائج الفعلية بـ <code>llama-bench</code> على جهازك.',
          },
          {
            q: 'ما مدى سخونة 6800M عند تشغيل نماذج اللغة باستمرار؟',
            a: 'يحمّل الاستنتاج المستمر وحدة GPU بما يشبه جلسة ألعاب؛ وبحسب التبريد قد تبلغ حرارة الحاسوب المحمول الثمانينيات المئوية. راقب درجات حرارة جهازك، وأبقِ فتحات التهوية مفتوحة، وفكّر في خفض جهد معتدل في Radeon Software (على Windows) أو CoreCtrl (على Linux) إذا خفّض الجهاز أداءه. خفض الجهد على مسؤوليتك الخاصة: فقد يسبب عدم استقرار وقد يؤثر في الضمان.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل نماذج اللغة المحلية للبرمجة بذاكرة 12 GB VRAM](/ar/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan: دليل الأداء](/ar/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    heroImage: '/images/radeon-6800m-local-llm-overview-hero-ko.webp',
    title: 'Radeon RX 6800M에서 로컬 LLM을 실행할 수 있습니까?',
    dateModified: '2026-10-17',
    seoTitle: 'Radeon 6800M 로컬 LLM? Vulkan vs ROCm | PromptQuorum',
    metaDescription: '예. Radeon RX 6800M(12 GB VRAM)은 Windows와 Linux에서 Vulkan으로 8B 모델을 실행합니다. ROCm은 비공식입니다. 데스크톱 RX 6800(16 GB) 비교도 포함합니다.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    readTime: '5분 분량',
    targetKeywords: [
      'Radeon 6800M 로컬 LLM',
      'AMD 노트북 GPU LLM 실행',
      'ROCm 설정 방법',
      'llama.cpp Vulkan AMD',
      '12GB VRAM 언어 모델',
    ],
    quickAnswerTop: {
      ko: {
        question: 'Radeon RX 6800M에서 로컬 LLM을 실행할 수 있습니까?',
        answer: '예. Radeon RX 6800M은 12 GB GDDR6 VRAM을 갖추고 있으며, Windows와 Linux 모두에서 Ollama 또는 llama.cpp의 Vulkan 백엔드로 로컬 LLM을 잘 실행합니다. ROCm은 이 칩을 공식 지원하지 않으며, Linux에서는 비공식 오버라이드로만 동작합니다. 8B 모델(Q4_K_M)은 약 45–60 tok/s로 추정되며, 같은 칩을 쓰는 RX 6700 XT의 벤치마크에서 추정한 값이지 PromptQuorum이 측정한 값이 아닙니다.',
        bullets: [
          'Windows와 Linux: Vulkan이 안정적인 경로입니다(Ollama는 기본으로 활성화)',
          'ROCm: 6800M은 AMD와 Ollama 지원 목록에 없으며, Linux에서는 HSA_OVERRIDE_GFX_VERSION=10.3.0이 필요하고 불안정할 수 있습니다',
          '12 GB VRAM은 적당한 컨텍스트 길이에서 Q4_K_M 기준 최대 14B 모델을 지원합니다',
        ],
        updatedDate: '2026-10',
      },
    },
    schema: {
      inLanguage: 'ko',
      articleUrl: 'https://www.promptquorum.com/ko/prompt-bites/radeon-6800m-local-llm',
      breadcrumbSchema: {
        items: [
          { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
          { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
          { position: 3, name: 'Radeon RX 6800M에서 로컬 LLM 실행하기', url: 'https://www.promptquorum.com/ko/prompt-bites/radeon-6800m-local-llm' },
        ],
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RX 6800M은 모바일 RDNA 2 칩(Navi 22, 12 GB VRAM)입니다 — 데스크톱 RX 6800(Navi 21, 16 GB VRAM)이 아닙니다',
          'Windows와 Linux에서는 Vulkan이 안정적인 경로입니다. ROCm은 6800M을 공식 지원하지 않으며, Windows에서 Ollama의 ROCm 목록은 RX 7600부터 시작합니다',
          '추정 속도: 8B(Q4_K_M)는 약 45–60 tok/s, 14B는 약 25–35 tok/s — 같은 칩을 쓰는 RX 6700 XT 벤치마크에서 추정한 값이며 PromptQuorum의 실측이 아닙니다',
          '항상 전원을 연결하세요: 노트북 GPU는 배터리 사용 시 전력 제한이 더 엄격해 추론 속도가 떨어집니다',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M이 실제로 실행할 수 있는 것',
        content: [
          '<strong>Radeon RX 6800M은 12 GB GDDR6 VRAM을 갖춘 모바일 RDNA 2 칩(Navi 22, gfx1031)입니다 — 더 큰 Navi 21 다이와 16 GB를 쓰는 데스크톱 RX 6800이 아닙니다.</strong> 12 GB에서는 레이어 오프로딩 없이 Q4_K_M 기준 최대 14B 모델이 들어가며, 데스크톱 RTX 3060 12 GB와 같은 용량입니다. 컨텍스트가 길어지면 모델 가중치 외에 KV 캐시 메모리가 추가로 필요합니다.',
          '단일 사용자 생성 속도는 주로 메모리 대역폭에 좌우됩니다. 6800M은 데스크톱 RX 6700 XT와 같은 Navi 22 다이와 12 GB 메모리 구성을 사용하며, RX 6700 XT는 <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan 스코어보드</a>에서 Vulkan 백엔드로 Llama 2 7B Q4_0 기준 약 84 tok/s를 기록합니다. 이 수치를 더 큰 모델 파일에 맞게 환산한 것이 아래 추정치입니다. 노트북의 전력 제한과 쿨링 때문에 6800M은 데스크톱 카드보다 낮을 수 있습니다.',
          '이 속도는 공개 벤치마크에서 도출한 추정치이며, PromptQuorum이 6800M에서 수행한 테스트가 아닙니다. 실제 수치는 본인 기기에서 <code>llama-bench</code>를 실행해 확인하세요. 8 GB VRAM CUDA 환경과의 비교는 <a href="/ko/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti 시스템 비교</a>를 참고하세요.',
        ],
        columns: ['모델', 'VRAM (Q4_K_M)', '추정 속도 (Vulkan)'],
        rows: [
          { '모델': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '~5 GB', '추정 속도 (Vulkan)': '~45–60 tok/s' },
          { '모델': 'Qwen3 8B', 'VRAM (Q4_K_M)': '~5 GB', '추정 속도 (Vulkan)': '~45–60 tok/s' },
          { '모델': 'Phi-4 14B', 'VRAM (Q4_K_M)': '~9 GB', '추정 속도 (Vulkan)': '~25–35 tok/s' },
          { '모델': 'Qwen3 14B', 'VRAM (Q4_K_M)': '~9 GB', '추정 속도 (Vulkan)': '~25–35 tok/s' },
        ],
      },
      body2: {
        title: '6800M에서 로컬 LLM 설정하기',
        content: [
          '<strong>Windows와 Linux에서는 Ollama를 설치하세요 — AMD GPU에는 ROCm 없이 Vulkan 백엔드를 사용합니다.</strong> <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama GPU 문서</a>에 따르면 백엔드가 설치되어 있으면 Vulkan은 기본으로 활성화됩니다. Linux에서는 추가 Vulkan 패키지가 필요할 수 있습니다. llama.cpp의 사전 빌드 Vulkan 바이너리를 사용해 <code>-ngl 99</code>로 GGUF를 로드하면 모든 레이어를 GPU로 오프로드할 수도 있습니다.',
          'ROCm은 더 어려운 경로입니다. RX 6800M은 AMD의 ROCm 지원 표에도 Ollama의 AMD 목록에도 없으며, Windows에서 Ollama의 ROCm 목록은 RX 7600 이상만 다룹니다. Linux에서는 커뮤니티 보고에 따라 <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>으로 ROCm이 이 칩을 gfx1030으로 취급하게 합니다. 비공식 방법이며 충돌하거나 CPU로 폴백할 수 있으므로 먼저 Vulkan을 시도하세요.',
          '항상 전원을 연결하세요 — 노트북 GPU는 배터리 사용 시 전력 제한이 더 엄격해 추론 속도가 떨어집니다. NVIDIA와 AMD 전체 GPU 비교는 <a href="/ko/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">로컬 LLM용 최고의 GPU 가이드</a>를 참고하세요.',
        ],
        callouts: [{ type: 'tip', text: '설정 테스트: <code>ollama run llama3.1:8b</code>를 실행한 뒤 <code>ollama ps</code>를 확인하세요 — PROCESSOR 열에 100% GPU가 표시되어야 합니다. CPU로 표시되면 Ollama 서버 로그에서 GPU 감지 메시지를 확인하세요.' }],
      },
      body3: {
        title: 'Radeon RX 6800M과 데스크톱 RX 6800 비교',
        content: [
          '“RX 6800” 검색은 종종 모바일 칩으로 연결되지만, 두 카드는 다릅니다. 데스크톱 RX 6800은 16 GB VRAM과 더 넓은 메모리 대역폭을 갖춰 더 큰 모델을 담고 더 빠르게 생성합니다. <a href="https://github.com/ggml-org/llama.cpp/discussions/10879" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">llama.cpp Vulkan 스코어보드</a>에는 데스크톱 RX 6800이 약 101 tok/s, RX 6700 XT가 약 84 tok/s로 나와 있습니다(Llama 2 7B Q4_0, Vulkan).',
          '데스크톱 RX 6800은 Ollama의 Linux AMD 지원 목록에 있지만 6800M은 없습니다. 이 페이지의 Vulkan 관련 나머지 내용은 두 카드 모두에 적용됩니다.',
        ],
        columns: ['항목', 'RX 6800M (노트북)', 'RX 6800 (데스크톱)'],
        rows: [
          { '항목': 'GPU 칩', 'RX 6800M (노트북)': 'Navi 22 (gfx1031)', 'RX 6800 (데스크톱)': 'Navi 21 (gfx1030)' },
          { '항목': 'VRAM', 'RX 6800M (노트북)': '12 GB GDDR6', 'RX 6800 (데스크톱)': '16 GB GDDR6' },
          { '항목': '메모리 대역폭', 'RX 6800M (노트북)': '384 GB/s', 'RX 6800 (데스크톱)': '512 GB/s' },
          { '항목': 'Ollama Linux AMD 지원 목록', 'RX 6800M (노트북)': '미등재', 'RX 6800 (데스크톱)': '등재' },
          { '항목': 'Windows의 Ollama ROCm', 'RX 6800M (노트북)': '미등재', 'RX 6800 (데스크톱)': '미등재' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Radeon 6800M과 로컬 LLM에 대한 빠른 답변',
        faqs: [
          {
            q: 'Radeon 6800M은 ROCm을 공식 지원합니까?',
            a: '아니요. RX 6800M(gfx1031)은 AMD의 ROCm 지원 표에도 Ollama의 AMD 목록에도 없습니다. Linux에서는 <code>HSA_OVERRIDE_GFX_VERSION=10.3.0</code>으로 동작하는 경우가 있지만 비공식 우회 방법입니다. 이 카드에서 지원되는 경로는 Vulkan입니다.',
          },
          {
            q: 'Radeon RX 6800M의 VRAM은 얼마입니까?',
            a: '192비트 버스의 12 GB GDDR6입니다. 8B 모델은 여유 있게, 14B 모델은 적당한 컨텍스트 길이의 Q4_K_M으로 담을 수 있습니다. 12 GB는 전용 GPU 메모리이며 시스템 RAM은 더해지지 않습니다.',
          },
          {
            q: 'Ollama는 RX 6800M에서 작동합니까?',
            a: '예, Vulkan을 통해 작동합니다. Ollama 문서에 따르면 백엔드가 설치되어 있으면 Vulkan은 기본으로 활성화됩니다. Ollama의 ROCm 경로에는 6800M이 없으므로, 비공식 Linux 오버라이드를 쓰지 않는 한 ROCm이 아닌 Vulkan을 사용하게 됩니다.',
          },
          {
            q: '로컬 LLM에는 데스크톱 RX 6800이 6800M보다 낫습니까?',
            a: '예, 용량과 대역폭에서 낫습니다: VRAM 16 GB 대 12 GB, 대역폭 약 512 GB/s 대 384 GB/s. Ollama의 Linux AMD 지원 목록에도 등재되어 있습니다. 위의 비교표를 참고하세요.',
          },
          {
            q: '6800M은 로컬 LLM에서 RTX 3070 Mobile보다 빠릅니까?',
            a: '6800M의 12 GB VRAM과 대부분의 RTX 3070 Mobile 구성의 8 GB 차이는 순수 속도보다 모델 적재 가능성에 더 중요합니다. 같은 모델 크기에서는 RTX 3070 Mobile이 성숙한 CUDA 지원의 이점을 누립니다. 본인 기기에서 <code>llama-bench</code>로 실제 결과를 비교하세요.',
          },
          {
            q: '6800M은 LLM을 계속 실행하면 얼마나 뜨거워집니까?',
            a: '지속적인 추론은 게임 세션처럼 GPU에 부하를 주며, 쿨링에 따라 노트북 온도가 80℃대에 이를 수 있습니다. 본인 기기의 온도를 모니터링하고 통풍구를 확보하세요. 스로틀링이 발생하면 Radeon Software(Windows) 또는 CoreCtrl(Linux)에서 적당한 언더볼팅을 고려할 수 있습니다. 언더볼팅은 본인 책임하에 진행하세요. 불안정을 일으키거나 보증에 영향을 줄 수 있습니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[12 GB VRAM 로컬 코딩 최고의 LLM](/ko/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Strix Halo + Ollama + Vulkan: 성능 가이드](/ko/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
}
