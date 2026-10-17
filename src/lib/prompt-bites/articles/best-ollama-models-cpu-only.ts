import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Best Ollama Models for CPU Only?',
    dateModified: '2026-10-17',
    seoTitle: 'Best Ollama Models Without GPU 2026 | PromptQuorum',
    metaDescription: 'Fastest Ollama model on CPU: Qwen3 0.6B (~35 tok/s). Best quality: Phi-4 Mini (~7 tok/s, 4 GB RAM). Gemma 3 1B runs in 2 GB. No GPU needed.',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-en.webp',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3 0.6B', 'Gemma 3 1B', 'Llama 3.2 3B', 'Phi-4 Mini', 'Gemma 4 E2B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers running Ollama without a dedicated GPU',
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-right-now', 'ollama-128k-context-models'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for CPU only?',
        answer: 'For the fastest CPU-only Ollama model, use Qwen3 0.6B (~35 tok/s in an independent test) or Gemma 3 1B (~19 tok/s). For the best answer quality without a GPU, use Phi-4 Mini Q4 (~7 tok/s, about 4 GB RAM) or Llama 3.2 3B Q4. Machines with 2 GB RAM should stay at 1B parameters or smaller.',
        bullets: [
          'Fastest: Qwen3 0.6B (~35 tok/s) and Gemma 3 1B (~19 tok/s), both fit in 2 GB RAM',
          'Best quality: Phi-4 Mini Q4 (~7 tok/s), needs about 4 GB RAM',
          'Balanced: Llama 3.2 3B Q4, 2.0 GB download, about 4 GB RAM',
        ],
        updatedDate: '2026-10',
      },
      de: { question: 'Die besten Ollama-Modelle nur für die CPU?', answer: 'Das schnellste CPU-only-Ollama-Modell ist Qwen3 0.6B (~35 tok/s in einem unabhängigen Test) oder Gemma 3 1B (~19 tok/s). Die beste Antwortqualität ohne GPU bieten Phi-4 Mini Q4 (~7 tok/s, etwa 4 GB RAM) oder Llama 3.2 3B Q4. Rechner mit 2 GB RAM sollten bei 1B Parametern oder kleiner bleiben.', bullets: ['Am schnellsten: Qwen3 0.6B (~35 tok/s) und Gemma 3 1B (~19 tok/s), beide passen in 2 GB RAM', 'Beste Qualität: Phi-4 Mini Q4 (~7 tok/s), benötigt etwa 4 GB RAM', 'Ausgewogen: Llama 3.2 3B Q4, 2,0 GB Download, etwa 4 GB RAM'], updatedDate: '2026-10' },
      fr: { question: 'Meilleurs modèles Ollama en mode CPU uniquement ?', answer: 'Le modèle Ollama CPU le plus rapide est Qwen3 0.6B (~35 tok/s dans un test indépendant) ou Gemma 3 1B (~19 tok/s). Pour la meilleure qualité de réponse sans GPU, choisissez Phi-4 Mini Q4 (~7 tok/s, environ 4 Go de RAM) ou Llama 3.2 3B Q4. Les machines avec 2 Go de RAM doivent rester à 1B de paramètres ou moins.', bullets: ['Le plus rapide : Qwen3 0.6B (~35 tok/s) et Gemma 3 1B (~19 tok/s), tous deux tiennent dans 2 Go de RAM', 'Meilleure qualité : Phi-4 Mini Q4 (~7 tok/s), nécessite environ 4 Go de RAM', 'Équilibré : Llama 3.2 3B Q4, téléchargement de 2,0 Go, environ 4 Go de RAM'], updatedDate: '2026-10' },
      ja: { question: 'CPUのみで動くOllamaモデルは？', answer: 'CPU専用で最速のOllamaモデルはQwen3 0.6B（独立テストで約35 tok/s）またはGemma 3 1B（約19 tok/s）です。GPUなしで回答品質を重視するなら、Phi-4 Mini Q4（約7 tok/s、RAM約4 GB）またはLlama 3.2 3B Q4を選びます。RAM 2 GBのマシンは1Bパラメータ以下に留めてください。', bullets: ['最速：Qwen3 0.6B（約35 tok/s）とGemma 3 1B（約19 tok/s）、どちらもRAM 2 GBに収まる', '最高品質：Phi-4 Mini Q4（約7 tok/s）、RAM約4 GB必要', 'バランス型：Llama 3.2 3B Q4、ダウンロード2.0 GB、RAM約4 GB'], updatedDate: '2026-10' },
      zh: { question: '纯CPU运行最佳的Ollama模型是什么？', answer: '纯CPU运行最快的Ollama模型是Qwen3 0.6B（独立测试中约35 tok/s）或Gemma 3 1B（约19 tok/s）。无GPU时若要最佳回答质量，请选择Phi-4 Mini Q4（约7 tok/s，约需4 GB内存）或Llama 3.2 3B Q4。内存仅2 GB的设备应使用1B参数及以下的模型。', bullets: ['最快：Qwen3 0.6B（约35 tok/s）和Gemma 3 1B（约19 tok/s），均可在2 GB内存内运行', '质量最佳：Phi-4 Mini Q4（约7 tok/s），约需4 GB内存', '均衡：Llama 3.2 3B Q4，下载2.0 GB，约需4 GB内存'], updatedDate: '2026-10' },
      es: { question: '¿Los mejores modelos de Ollama solo para CPU?', answer: 'El modelo de Ollama más rápido solo con CPU es Qwen3 0.6B (~35 tok/s en una prueba independiente) o Gemma 3 1B (~19 tok/s). Para la mejor calidad de respuesta sin GPU, usa Phi-4 Mini Q4 (~7 tok/s, unos 4 GB de RAM) o Llama 3.2 3B Q4. Los equipos con 2 GB de RAM deben quedarse en 1B de parámetros o menos.', bullets: ['Más rápido: Qwen3 0.6B (~35 tok/s) y Gemma 3 1B (~19 tok/s), ambos caben en 2 GB de RAM', 'Mejor calidad: Phi-4 Mini Q4 (~7 tok/s), requiere unos 4 GB de RAM', 'Equilibrado: Llama 3.2 3B Q4, descarga de 2,0 GB, unos 4 GB de RAM'], updatedDate: '2026-10' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU inference is 5–10× slower than GPU — expect 3–6 tok/s for a 7B model on a modern 8-core desktop CPU',
          'Fastest on CPU: Qwen3 0.6B (~35 tok/s) and Gemma 3 1B (~19 tok/s) in an independent test on an older i5 laptop',
          'Best quality on CPU: Phi-4 Mini Q4, about 4 GB RAM, ~7 tok/s in the same test',
          'CPU inference is practical for batch jobs and single-query lookups; too slow for interactive chat',
        ],
      },
      body1: {
        title: 'The CPU Speed Reality',
        content: [
          '<strong>CPU inference runs at 3–6 tokens per second on a modern 8-core desktop CPU — roughly 5–10× slower than a mid-range GPU.</strong> A 7B model at Q4 produces one word approximately every 200–300 milliseconds on CPU.',
          'This speed is acceptable for two use cases: overnight batch processing such as summarizing documents or classifying data, and single-query lookups where a 30-second wait is acceptable. For interactive chat or real-time code completion, CPU inference is too slow to be practical.',
          'The root constraint is memory bandwidth, not CPU clock speed. Consumer CPUs read RAM at 40–80 GB/s. A dedicated GPU reads VRAM at 400–900 GB/s. LLM inference scales directly with memory bandwidth — which is why even a mid-range GPU produces dramatically faster inference than a high-end CPU.',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-en.webp',
        imageCaption: 'CPU vs GPU Inference Speed -- Memory bandwidth is the bottleneck',
      },
      body2: {
        title: 'Top 4 Models for CPU-Only Use',
        content: [
          '<strong>Qwen3 0.6B and Gemma 3 1B are the fastest CPU-only Ollama models; Phi-4 Mini Q4 gives the best answer quality at about 7 tok/s.</strong> The speeds below come from an independent <a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">CPU-only test by It\'s FOSS</a> on an older Intel i5 laptop with 12 GB RAM; CPUs with faster memory run faster.',
          'Gemma 3 1B (806 MB download) and Qwen3 0.6B (523 MB) are the practical options when RAM is limited to 2 GB, at the cost of weaker multi-step reasoning. Larger models such as Gemma 4 E2B (4.6 GB+ download, ~10 tok/s in the same test) need more memory than a 4 GB machine offers.',
          'For the full breakdown of CPU-only configurations including RAM requirements and OS-level optimizations, see the <a href="/local-llms/best-cpu-only-llm" class="text-primary hover:underline">best CPU-only LLM guide</a>.',
        ],
        columns: ['Model', 'Ollama download', 'Min. RAM', 'CPU speed'],
        rows: [
          { 'Model': 'Qwen3 0.6B', 'Ollama download': '523 MB', 'Min. RAM': '~2 GB', 'CPU speed': '~34–36 tok/s' },
          { 'Model': 'Gemma 3 1B', 'Ollama download': '806 MB', 'Min. RAM': '~2 GB', 'CPU speed': '~19 tok/s' },
          { 'Model': 'Llama 3.2 3B Q4', 'Ollama download': '2.0 GB', 'Min. RAM': '~4 GB', 'CPU speed': 'Not tested' },
          { 'Model': 'Phi-4 Mini Q4', 'Ollama download': '2.5 GB', 'Min. RAM': '~4 GB', 'CPU speed': '~7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-en.webp',
        imageCaption: 'CPU-Only Model Comparison -- Best picks for Ollama without a GPU',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About CPU-Only LLMs',
        faqs: [
          {
            q: 'Which Ollama model is fastest on CPU?',
            a: 'Qwen3 0.6B is the fastest, at about 34–36 tok/s in an independent test on an older Intel i5 laptop, followed by Gemma 3 1B at about 19 tok/s. Both trade reasoning depth for speed; use Phi-4 Mini Q4 (~7 tok/s) when answer quality matters more.',
          },
          {
            q: 'Can Ollama run on a PC with 2 GB of RAM?',
            a: 'Yes, with a model of 1B parameters or smaller: Qwen3 0.6B (523 MB download) or Gemma 3 1B (806 MB). Close other applications first, because the OS and Ollama runtime also need 1–2 GB. Models of 3B parameters and above need about 4 GB.',
          },
          {
            q: 'How much RAM do I need for CPU-only Ollama?',
            a: 'About 2 GB for Qwen3 0.6B or Gemma 3 1B, and about 4 GB for Llama 3.2 3B Q4 or Phi-4 Mini Q4. Add 1–2 GB on top of the download size for the OS and Ollama runtime overhead.',
          },
          {
            q: 'Why is CPU inference so much slower than GPU?',
            a: 'LLM inference is memory-bandwidth-bound. Consumer CPUs read RAM at 40–80 GB/s. A mid-range GPU reads VRAM at 400–900 GB/s. That 10× bandwidth difference translates directly into 5–10× slower token generation.',
          },
          {
            q: 'Can I use Ollama on a laptop without a dedicated GPU?',
            a: 'Yes. Ollama runs on CPU automatically when no GPU is detected. Expect 3–5 tok/s on a modern laptop CPU. See <a href="/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">the best Ollama models right now</a> for GPU-tier recommendations if you later upgrade.',
          },
          {
            q: 'Which CPUs are fastest for local LLM inference?',
            a: 'Apple M-series chips (M3, M4) use unified memory architecture and reach 15–30 tok/s on 7B models — far exceeding x86 CPUs on CPU-only inference. Among x86 CPUs, those with higher memory bandwidth and large L3 cache perform best.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Radeon 6800M for Local LLM: Full Setup Guide](/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Performance Guide](/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    title: 'Die besten Ollama-Modelle nur für die CPU?',
    seoTitle: 'Beste Ollama-Modelle ohne GPU 2026 | PromptQuorum',
    metaDescription: 'Schnellstes CPU-only Ollama-Modell: Qwen3 0.6B (~35 tok/s). Beste Qualität: Phi-4 Mini (~7 tok/s, 4 GB RAM). Gemma 3 1B läuft mit 2 GB. Ohne GPU.',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-de.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Die besten Ollama-Modelle nur für die CPU?',
        answer: 'Das schnellste CPU-only-Ollama-Modell ist Qwen3 0.6B (~35 tok/s in einem unabhängigen Test) oder Gemma 3 1B (~19 tok/s). Die beste Antwortqualität ohne GPU bieten Phi-4 Mini Q4 (~7 tok/s, etwa 4 GB RAM) oder Llama 3.2 3B Q4. Rechner mit 2 GB RAM sollten bei 1B Parametern oder kleiner bleiben.',
        bullets: [
          'Am schnellsten: Qwen3 0.6B (~35 tok/s) und Gemma 3 1B (~19 tok/s), beide passen in 2 GB RAM',
          'Beste Qualität: Phi-4 Mini Q4 (~7 tok/s), benötigt etwa 4 GB RAM',
          'Ausgewogen: Llama 3.2 3B Q4, 2,0 GB Download, etwa 4 GB RAM',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU-Inferenz ist 5–10× langsamer als GPU — rechnen Sie mit 3–6 tok/s für ein 7B-Modell auf einem modernen 8-Kern-Desktop-CPU',
          'Am schnellsten auf der CPU: Qwen3 0.6B (~35 tok/s) und Gemma 3 1B (~19 tok/s) in einem unabhängigen Test auf einem älteren i5-Laptop',
          'Beste Qualität auf der CPU: Phi-4 Mini Q4, etwa 4 GB RAM, ~7 tok/s im selben Test',
          'CPU-Inferenz ist praktisch für Batch-Jobs und Einzelanfragen; für interaktiven Chat ist sie zu langsam',
        ],
      },
      body1: {
        title: 'Die Realität der CPU-Geschwindigkeit',
        content: [
          '<strong>CPU-Inferenz läuft auf einem modernen 8-Kern-Desktop-CPU mit 3–6 Tokens pro Sekunde — etwa 5–10× langsamer als eine Mid-Range-GPU.</strong> Ein 7B-Modell bei Q4 erzeugt auf der CPU ungefähr alle 200–300 Millisekunden ein Wort.',
          'Diese Geschwindigkeit ist für zwei Anwendungsfälle akzeptabel: nächtliche Stapelverarbeitung wie das Zusammenfassen von Dokumenten oder das Klassifizieren von Daten sowie Einzelanfragen, bei denen eine Wartezeit von 30 Sekunden akzeptabel ist. Für interaktiven Chat oder Echtzeit-Code-Vervollständigung ist CPU-Inferenz zu langsam.',
          'Der eigentliche Engpass ist die Speicherbandbreite, nicht die CPU-Taktfrequenz. Consumer-CPUs lesen RAM mit 40–80 GB/s. Eine dedizierte GPU liest VRAM mit 400–900 GB/s. LLM-Inferenz skaliert direkt mit der Speicherbandbreite — weshalb selbst eine Mid-Range-GPU eine dramatisch schnellere Inferenz liefert als eine High-End-CPU.',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-de.webp',
        imageCaption: 'CPU vs. GPU Inferenzgeschwindigkeit -- Speicherbandbreite ist der Flaschenhals',
      },
      body2: {
        title: 'Top 4 Modelle für den reinen CPU-Betrieb',
        content: [
          '<strong>Qwen3 0.6B und Gemma 3 1B sind die schnellsten CPU-only-Ollama-Modelle; Phi-4 Mini Q4 liefert mit etwa 7 tok/s die beste Antwortqualität.</strong> Die folgenden Geschwindigkeiten stammen aus einem unabhängigen <a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">CPU-only-Test von It\'s FOSS</a> auf einem älteren Intel-i5-Laptop mit 12 GB RAM; CPUs mit schnellerem Speicher sind schneller.',
          'Gemma 3 1B (806 MB Download) und Qwen3 0.6B (523 MB) sind praktikable Optionen, wenn der RAM auf 2 GB begrenzt ist, allerdings mit schwächerem mehrstufigem Reasoning. Größere Modelle wie Gemma 4 E2B (4,6 GB+ Download, ~10 tok/s im selben Test) benötigen mehr Speicher, als ein 4-GB-Rechner bietet.',
          'Eine vollständige Übersicht der CPU-only-Konfigurationen einschließlich RAM-Anforderungen und OS-Level-Optimierungen finden Sie im <a href="/de/local-llms/best-cpu-only-llm" class="text-primary hover:underline">Leitfaden für die besten CPU-only-LLMs</a>.',
        ],
        columns: ['Modell', 'Ollama-Download', 'Min. RAM', 'CPU-Geschwindigkeit'],
        rows: [
          { 'Modell': 'Qwen3 0.6B', 'Ollama-Download': '523 MB', 'Min. RAM': '~2 GB', 'CPU-Geschwindigkeit': '~34–36 tok/s' },
          { 'Modell': 'Gemma 3 1B', 'Ollama-Download': '806 MB', 'Min. RAM': '~2 GB', 'CPU-Geschwindigkeit': '~19 tok/s' },
          { 'Modell': 'Llama 3.2 3B Q4', 'Ollama-Download': '2,0 GB', 'Min. RAM': '~4 GB', 'CPU-Geschwindigkeit': 'Nicht getestet' },
          { 'Modell': 'Phi-4 Mini Q4', 'Ollama-Download': '2,5 GB', 'Min. RAM': '~4 GB', 'CPU-Geschwindigkeit': '~7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-de.webp',
        imageCaption: 'Vergleich Reiner CPU-Modelle -- Beste Wahl für Ollama ohne GPU',
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu CPU-only-LLMs',
        faqs: [
          {
            q: 'Welches Ollama-Modell ist auf der CPU am schnellsten?',
            a: 'Qwen3 0.6B ist mit etwa 34–36 tok/s in einem unabhängigen Test auf einem älteren Intel-i5-Laptop am schnellsten, gefolgt von Gemma 3 1B mit etwa 19 tok/s. Beide tauschen Reasoning-Tiefe gegen Geschwindigkeit; nutzen Sie Phi-4 Mini Q4 (~7 tok/s), wenn die Antwortqualität wichtiger ist.',
          },
          {
            q: 'Läuft Ollama auf einem PC mit 2 GB RAM?',
            a: 'Ja, mit einem Modell von höchstens 1B Parametern: Qwen3 0.6B (523 MB Download) oder Gemma 3 1B (806 MB). Schließen Sie zuvor andere Anwendungen, da Betriebssystem und Ollama-Laufzeitumgebung ebenfalls 1–2 GB benötigen. Modelle ab 3B Parametern brauchen etwa 4 GB.',
          },
          {
            q: 'Wie viel RAM benötige ich für CPU-only Ollama?',
            a: 'Etwa 2 GB für Qwen3 0.6B oder Gemma 3 1B und etwa 4 GB für Llama 3.2 3B Q4 oder Phi-4 Mini Q4. Rechnen Sie 1–2 GB zusätzlich zur Download-Größe für den Overhead von Betriebssystem und Ollama-Laufzeitumgebung.',
          },
          {
            q: 'Warum ist CPU-Inferenz so viel langsamer als GPU?',
            a: 'LLM-Inferenz ist durch die Speicherbandbreite begrenzt. Consumer-CPUs lesen RAM mit 40–80 GB/s. Eine Mid-Range-GPU liest VRAM mit 400–900 GB/s. Dieser 10-fache Bandbreitenunterschied übersetzt sich direkt in eine 5–10-fach langsamere Token-Generierung.',
          },
          {
            q: 'Kann ich Ollama auf einem Laptop ohne dedizierte GPU verwenden?',
            a: 'Ja. Ollama läuft automatisch auf der CPU, wenn keine GPU erkannt wird. Rechnen Sie mit 3–5 tok/s auf einem modernen Laptop-CPU. Unter <a href="/de/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">den besten Ollama-Modellen aktuell</a> finden Sie GPU-Tier-Empfehlungen, falls Sie später aufrüsten.',
          },
          {
            q: 'Welche CPUs sind für lokale LLM-Inferenz am schnellsten?',
            a: 'Apple M-series-Chips (M3, M4) nutzen eine Unified-Memory-Architektur und erreichen 15–30 tok/s bei 7B-Modellen — weit überlegen gegenüber x86-CPUs bei reiner CPU-Inferenz. Unter den x86-CPUs schneiden diejenigen mit höherer Speicherbandbreite und großem L3-Cache am besten ab.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Radeon 6800M für lokale LLMs: Vollständiger Setup-Leitfaden](/de/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Leistungshandbuch](/de/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    title: 'Meilleurs modèles Ollama en mode CPU uniquement ?',
    seoTitle: 'Meilleurs modèles Ollama sans GPU 2026 | PromptQuorum',
    metaDescription: 'Modèle Ollama CPU le plus rapide : Qwen3 0.6B (~35 tok/s). Meilleure qualité : Phi-4 Mini (~7 tok/s, 4 Go RAM). Gemma 3 1B tient dans 2 Go. Sans GPU.',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-fr.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Meilleurs modèles Ollama en mode CPU uniquement ?',
        answer: 'Le modèle Ollama CPU le plus rapide est Qwen3 0.6B (~35 tok/s dans un test indépendant) ou Gemma 3 1B (~19 tok/s). Pour la meilleure qualité de réponse sans GPU, choisissez Phi-4 Mini Q4 (~7 tok/s, environ 4 Go de RAM) ou Llama 3.2 3B Q4. Les machines avec 2 Go de RAM doivent rester à 1B de paramètres ou moins.',
        bullets: [
          'Le plus rapide : Qwen3 0.6B (~35 tok/s) et Gemma 3 1B (~19 tok/s), tous deux tiennent dans 2 Go de RAM',
          'Meilleure qualité : Phi-4 Mini Q4 (~7 tok/s), nécessite environ 4 Go de RAM',
          'Équilibré : Llama 3.2 3B Q4, téléchargement de 2,0 Go, environ 4 Go de RAM',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'L\'inférence CPU est 5 à 10× plus lente que sur GPU — comptez 3–6 tok/s pour un modèle 7B sur un processeur desktop 8 cœurs moderne',
          'Le plus rapide sur CPU : Qwen3 0.6B (~35 tok/s) et Gemma 3 1B (~19 tok/s) dans un test indépendant sur un ancien portable i5',
          'Meilleure qualité sur CPU : Phi-4 Mini Q4, environ 4 Go de RAM, ~7 tok/s dans le même test',
          'L\'inférence CPU convient au traitement par lots et aux requêtes ponctuelles ; trop lente pour le chat interactif',
        ],
      },
      body1: {
        title: 'La réalité de la vitesse CPU',
        content: [
          '<strong>L\'inférence CPU tourne à 3–6 tokens par seconde sur un processeur desktop 8 cœurs moderne — soit environ 5 à 10× plus lentement qu\'un GPU milieu de gamme.</strong> Un modèle 7B en Q4 produit un mot environ toutes les 200 à 300 millisecondes sur CPU.',
          'Cette vitesse est acceptable pour deux cas d\'usage : le traitement par lots nocturne (résumé de documents, classification de données) et les requêtes ponctuelles où une attente de 30 secondes est tolérable. Pour le chat interactif ou la complétion de code en temps réel, l\'inférence CPU est trop lente.',
          'La contrainte fondamentale est la bande passante mémoire, pas la fréquence CPU. Les CPU grand public lisent la RAM à 40–80 GB/s. Un GPU dédié lit la VRAM à 400–900 GB/s. L\'inférence LLM est directement proportionnelle à la bande passante mémoire — c\'est pourquoi même un GPU milieu de gamme surpasse largement un CPU haut de gamme.',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-fr.webp',
        imageCaption: 'Vitesse d\'Inférence CPU vs GPU -- La bande passante mémoire est le goulot d\'étranglement',
      },
      body2: {
        title: 'Top 4 des modèles pour un usage CPU uniquement',
        content: [
          '<strong>Qwen3 0.6B et Gemma 3 1B sont les modèles Ollama CPU les plus rapides ; Phi-4 Mini Q4 offre la meilleure qualité de réponse à environ 7 tok/s.</strong> Les vitesses ci-dessous proviennent d\'un <a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">test CPU uniquement de It\'s FOSS</a> indépendant sur un ancien portable Intel i5 avec 12 Go de RAM ; les CPU à mémoire plus rapide vont plus vite.',
          'Gemma 3 1B (806 Mo de téléchargement) et Qwen3 0.6B (523 Mo) sont les options pratiques quand la RAM est limitée à 2 Go, au prix d\'un raisonnement multi-étapes plus faible. Des modèles plus grands comme Gemma 4 E2B (4,6 Go+ de téléchargement, ~10 tok/s dans le même test) demandent plus de mémoire qu\'une machine de 4 Go.',
          'Pour la comparaison complète des configurations CPU-only incluant les exigences RAM et les optimisations système, consultez le <a href="/fr/local-llms/best-cpu-only-llm" class="text-primary hover:underline">guide des meilleurs LLMs CPU-only</a>.',
        ],
        columns: ['Modèle', 'Téléchargement Ollama', 'RAM min.', 'Vitesse CPU'],
        rows: [
          { 'Modèle': 'Qwen3 0.6B', 'Téléchargement Ollama': '523 Mo', 'RAM min.': '~2 Go', 'Vitesse CPU': '~34–36 tok/s' },
          { 'Modèle': 'Gemma 3 1B', 'Téléchargement Ollama': '806 Mo', 'RAM min.': '~2 Go', 'Vitesse CPU': '~19 tok/s' },
          { 'Modèle': 'Llama 3.2 3B Q4', 'Téléchargement Ollama': '2,0 Go', 'RAM min.': '~4 Go', 'Vitesse CPU': 'Non testé' },
          { 'Modèle': 'Phi-4 Mini Q4', 'Téléchargement Ollama': '2,5 Go', 'RAM min.': '~4 Go', 'Vitesse CPU': '~7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-fr.webp',
        imageCaption: 'Comparaison des Modèles CPU Uniquement -- Meilleurs choix pour Ollama sans GPU',
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLMs CPU-only',
        faqs: [
          {
            q: 'Quel modèle Ollama est le plus rapide sur CPU ?',
            a: 'Qwen3 0.6B est le plus rapide, à environ 34–36 tok/s dans un test indépendant sur un ancien portable Intel i5, suivi de Gemma 3 1B à environ 19 tok/s. Les deux sacrifient la profondeur de raisonnement à la vitesse ; utilisez Phi-4 Mini Q4 (~7 tok/s) quand la qualité des réponses prime.',
          },
          {
            q: 'Ollama peut-il tourner sur un PC avec 2 Go de RAM ?',
            a: 'Oui, avec un modèle de 1B de paramètres ou moins : Qwen3 0.6B (523 Mo de téléchargement) ou Gemma 3 1B (806 Mo). Fermez d\'abord les autres applications, car le système et l\'environnement d\'exécution d\'Ollama ont aussi besoin de 1 à 2 Go. Les modèles de 3B et plus demandent environ 4 Go.',
          },
          {
            q: 'De combien de RAM ai-je besoin pour Ollama en mode CPU-only ?',
            a: 'Environ 2 Go pour Qwen3 0.6B ou Gemma 3 1B, et environ 4 Go pour Llama 3.2 3B Q4 ou Phi-4 Mini Q4. Ajoutez 1 à 2 Go à la taille du téléchargement pour le système et l\'environnement d\'exécution d\'Ollama.',
          },
          {
            q: 'Pourquoi l\'inférence CPU est-elle si lente comparée au GPU ?',
            a: 'L\'inférence LLM est limitée par la bande passante mémoire. Les CPU grand public lisent la RAM à 40–80 GB/s. Un GPU milieu de gamme lit la VRAM à 400–900 GB/s. Cette différence de bande passante de 10× se traduit directement par une génération de tokens 5 à 10× plus lente.',
          },
          {
            q: 'Puis-je utiliser Ollama sur un laptop sans GPU dédié ?',
            a: 'Oui. Ollama fonctionne automatiquement sur le CPU quand aucun GPU n\'est détecté. Comptez 3 à 5 tok/s sur un CPU laptop moderne. Consultez <a href="/fr/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">les meilleurs modèles Ollama en ce moment</a> pour des recommandations GPU si vous mettez à niveau.',
          },
          {
            q: 'Quels CPU sont les plus rapides pour l\'inférence LLM locale ?',
            a: 'Les puces Apple M-series (M3, M4) utilisent une architecture mémoire unifiée et atteignent 15 à 30 tok/s sur les modèles 7B — bien au-dessus des CPU x86 en inférence CPU-only. Parmi les CPU x86, ceux disposant d\'une bande passante mémoire élevée et d\'un grand cache L3 offrent les meilleures performances.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Radeon 6800M pour LLM local : Guide complet](/fr/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Guide de performance](/fr/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    title: 'CPU専用で使えるOllamaの最適モデルは？',
    seoTitle: 'GPU不要Ollamaモデル2026：CPU専用ベスト4選 | PromptQuorum',
    metaDescription: 'CPUで最速のOllamaモデルはQwen3 0.6B（約35 tok/s）。品質重視はPhi-4 Mini（約7 tok/s、RAM 4 GB）。Gemma 3 1Bは2 GBで動作。GPU不要。',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-ja.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'CPU専用で使えるOllamaの最適モデルは？',
        answer: 'CPU専用で最速のOllamaモデルはQwen3 0.6B（独立テストで約35 tok/s）またはGemma 3 1B（約19 tok/s）です。GPUなしで回答品質を重視するなら、Phi-4 Mini Q4（約7 tok/s、RAM約4 GB）またはLlama 3.2 3B Q4を選びます。RAM 2 GBのマシンは1Bパラメータ以下に留めてください。',
        bullets: [
          '最速：Qwen3 0.6B（約35 tok/s）とGemma 3 1B（約19 tok/s）、どちらもRAM 2 GBに収まる',
          '最高品質：Phi-4 Mini Q4（約7 tok/s）、RAM約4 GB必要',
          'バランス型：Llama 3.2 3B Q4、ダウンロード2.0 GB、RAM約4 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU推論はGPUより5〜10倍遅く、最新の8コアデスクトップCPUで7Bモデルは3〜6 tok/sが目安です',
          'CPUで最速：Qwen3 0.6B（約35 tok/s）とGemma 3 1B（約19 tok/s）、古いi5ノートPCでの独立テスト',
          'CPUで最高品質：Phi-4 Mini Q4、RAM約4 GB、同じテストで約7 tok/s',
          'CPU推論はバッチ処理や単発クエリには実用的ですが、対話型チャットには遅すぎます',
        ],
      },
      body1: {
        title: 'CPUの速度の現実',
        content: [
          '<strong>CPU推論は最新の8コアデスクトップCPUで毎秒3〜6トークンで動作します — ミドルレンジGPUの約5〜10倍遅いです。</strong> Q4のモデル 7BはCPU上でおよそ200〜300ミリ秒ごとに1単語を生成します。',
          'この速度が許容できるのは2つのユースケースです：ドキュメントの要約やデータ分類などの夜間バッチ処理、および30秒の待機が許容できる単発クエリ。対話型チャットやリアルタイムコード補完には、CPU推論は実用的には遅すぎます。',
          '根本的な制約はメモリ帯域幅であり、CPUのクロック速度ではありません。コンシューマーCPUはRAMを40〜80 GB/sで読み取ります。専用GPUはVRAMを400〜900 GB/sで読み取ります。LLM推論はメモリ帯域幅に直接比例します — そのためミドルレンジGPUでさえハイエンドCPUよりも劇的に高速な推論を実現します。',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-ja.webp',
        imageCaption: 'CPU対GPUの推論速度 -- メモリ帯域幅がボトルネック',
      },
      body2: {
        title: 'CPU専用で使えるモデル上位4選',
        content: [
          '<strong>Qwen3 0.6BとGemma 3 1BはCPU専用で最速のOllamaモデルで、回答品質が最も高いのは約7 tok/sのPhi-4 Mini Q4です。</strong>以下の速度は、RAM 12 GBの古いIntel i5ノートPCでの独立した<a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">It\'s FOSSのCPU専用テスト</a>によるものです。メモリが高速なCPUではより速くなります。',
          'RAMが2 GBに制限される場合、Gemma 3 1B（ダウンロード806 MB）とQwen3 0.6B（523 MB）が現実的な選択肢ですが、多段階の推論力は劣ります。Gemma 4 E2B（ダウンロード4.6 GB以上、同じテストで約10 tok/s）のような大型モデルは、4 GBのマシンでは足りないメモリを必要とします。',
          'RAMの要件やOSレベルの最適化を含むCPU専用設定の完全な比較については、<a href="/ja/local-llms/best-cpu-only-llm" class="text-primary hover:underline">CPU専用LLMガイド</a>をご覧ください。',
        ],
        columns: ['モデル', 'Ollama DL容量', '最小RAM', 'CPU速度'],
        rows: [
          { 'モデル': 'Qwen3 0.6B', 'Ollama DL容量': '523 MB', '最小RAM': '約2 GB', 'CPU速度': '約34〜36 tok/s' },
          { 'モデル': 'Gemma 3 1B', 'Ollama DL容量': '806 MB', '最小RAM': '約2 GB', 'CPU速度': '約19 tok/s' },
          { 'モデル': 'Llama 3.2 3B Q4', 'Ollama DL容量': '2.0 GB', '最小RAM': '約4 GB', 'CPU速度': '未テスト' },
          { 'モデル': 'Phi-4 Mini Q4', 'Ollama DL容量': '2.5 GB', '最小RAM': '約4 GB', 'CPU速度': '約7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-ja.webp',
        imageCaption: 'CPU専用モデル比較 -- GPUなしでのOllamaに最適な選択',
      },
      faq: {
        id: 'faq',
        title: 'CPU専用LLMに関するよくある質問',
        faqs: [
          {
            q: 'CPUで最速のOllamaモデルはどれですか？',
            a: '独立テストでは、古いIntel i5ノートPC上でQwen3 0.6Bが約34〜36 tok/sで最速、次いでGemma 3 1Bが約19 tok/sでした。どちらも推論の深さと引き換えに速度を得ています。回答品質を重視する場合はPhi-4 Mini Q4（約7 tok/s）を使ってください。',
          },
          {
            q: 'RAM 2 GBのPCでOllamaは動きますか？',
            a: 'はい、1Bパラメータ以下のモデルなら動作します：Qwen3 0.6B（ダウンロード523 MB）またはGemma 3 1B（806 MB）。OSとOllamaランタイムにも1〜2 GBが必要なので、先に他のアプリを終了してください。3Bパラメータ以上のモデルには約4 GBが必要です。',
          },
          {
            q: 'CPU専用のOllamaにはどのくらいのRAMが必要ですか？',
            a: 'Qwen3 0.6BまたはGemma 3 1Bは約2 GB、Llama 3.2 3B Q4またはPhi-4 Mini Q4は約4 GBです。OSとOllamaランタイムのオーバーヘッド分として、ダウンロード容量に1〜2 GBを加えてください。',
          },
          {
            q: 'なぜCPU推論はGPUよりずっと遅いのですか？',
            a: 'LLM推論はメモリ帯域幅に制約されています。コンシューマーCPUはRAMを40〜80 GB/sで読み取ります。ミドルレンジGPUはVRAMを400〜900 GB/sで読み取ります。この10倍の帯域幅の差が、5〜10倍遅いトークン生成に直接つながります。',
          },
          {
            q: '専用GPUなしのラップトップでOllamaを使えますか？',
            a: 'はい。OllamaはGPUが検出されない場合、自動的にCPUで動作します。最新のラップトップCPUで3〜5 tok/sを見込んでください。後でアップグレードした場合のGPUティアの推奨については、<a href="/ja/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">現在の最適Ollamaモデル</a>をご覧ください。',
          },
          {
            q: 'ローカルLLM推論で最速のCPUはどれですか？',
            a: 'Apple M-series チップ（M3、M4）はユニファイドメモリアーキテクチャを使用し、7Bモデルで15〜30 tok/sに達します — CPU専用推論でx86 CPUを大きく凌駕します。x86 CPUの中では、メモリ帯域幅が高く大容量のL3キャッシュを持つものが最良の性能を発揮します。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[Radeon 6800MでローカルLLMを動かす：完全セットアップガイド](/ja/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: パフォーマンスガイド](/ja/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    title: '仅用 CPU 运行 Ollama 的最佳模型？',
    seoTitle: '无GPU纯CPU运行Ollama 2026：最佳四款模型 | PromptQuorum',
    metaDescription: 'CPU上最快的Ollama模型：Qwen3 0.6B（约35 tok/s）。质量最佳：Phi-4 Mini（约7 tok/s，4 GB内存）。Gemma 3 1B仅需2 GB。无需GPU。',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-zh.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: '仅用 CPU 运行 Ollama 的最佳模型？',
        answer: '纯CPU运行最快的Ollama模型是Qwen3 0.6B（独立测试中约35 tok/s）或Gemma 3 1B（约19 tok/s）。无GPU时若要最佳回答质量，请选择Phi-4 Mini Q4（约7 tok/s，约需4 GB内存）或Llama 3.2 3B Q4。内存仅2 GB的设备应使用1B参数及以下的模型。',
        bullets: [
          '最快：Qwen3 0.6B（约35 tok/s）和Gemma 3 1B（约19 tok/s），均可在2 GB内存内运行',
          '质量最佳：Phi-4 Mini Q4（约7 tok/s），约需4 GB内存',
          '均衡：Llama 3.2 3B Q4，下载2.0 GB，约需4 GB内存',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU推理比GPU慢5–10倍——现代8核台式机CPU上运行7B模型约为3–6 tok/s',
          'CPU上最快：Qwen3 0.6B（约35 tok/s）和Gemma 3 1B（约19 tok/s），来自旧款i5笔记本的独立测试',
          'CPU上质量最佳：Phi-4 Mini Q4，约需4 GB内存，同一测试中约7 tok/s',
          'CPU 推理适合批量处理和单次查询；对于交互式对话速度太慢',
        ],
      },
      body1: {
        title: 'CPU 速度的实际情况',
        content: [
          '<strong>CPU 推理在现代 8 核台式机 CPU 上运行速度为每秒 3–6 个 token——大约比中端 GPU 慢 5–10 倍。</strong> Q4 量化的 7B 模型在 CPU 上大约每 200–300 毫秒生成一个词。',
          '这种速度适用于两种场景：隔夜批量处理（如文档摘要或数据分类），以及可以接受 30 秒等待的单次查询。对于交互式对话或实时代码补全，CPU 推理速度太慢，不具备实用性。',
          '根本瓶颈在于内存带宽，而非 CPU 时钟频率。消费级 CPU 读取内存的速度为 40–80 GB/s，专用 GPU 读取 VRAM 的速度为 400–900 GB/s。LLM 推理直接随内存带宽扩展——这就是为什么即使是中端 GPU 也比高端 CPU 快得多。',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-zh.webp',
        imageCaption: 'CPU对比GPU推理速度 -- 内存带宽才是瓶颈',
      },
      body2: {
        title: '纯CPU使用的前4款模型',
        content: [
          '<strong>Qwen3 0.6B和Gemma 3 1B是纯CPU运行最快的Ollama模型；Phi-4 Mini Q4以约7 tok/s提供最佳回答质量。</strong>以下速度来自在12 GB内存的旧款Intel i5笔记本上进行的独立<a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">It\'s FOSS纯CPU测试</a>；内存更快的CPU速度更高。',
          '当内存限制为2 GB时，Gemma 3 1B（下载806 MB）和Qwen3 0.6B（523 MB）是可行的选择，代价是多步推理能力较弱。Gemma 4 E2B（下载4.6 GB以上，同一测试中约10 tok/s）等更大的模型所需内存超过4 GB设备所能提供的。',
          '有关纯 CPU 配置的完整对比（包括内存需求和系统级优化），请参阅<a href="/zh/local-llms/best-cpu-only-llm" class="text-primary hover:underline">最佳纯 CPU LLM 指南</a>。',
        ],
        columns: ['模型', 'Ollama下载大小', '最低内存', 'CPU速度'],
        rows: [
          { '模型': 'Qwen3 0.6B', 'Ollama下载大小': '523 MB', '最低内存': '约2 GB', 'CPU速度': '约34–36 tok/s' },
          { '模型': 'Gemma 3 1B', 'Ollama下载大小': '806 MB', '最低内存': '约2 GB', 'CPU速度': '约19 tok/s' },
          { '模型': 'Llama 3.2 3B Q4', 'Ollama下载大小': '2.0 GB', '最低内存': '约4 GB', 'CPU速度': '未测试' },
          { '模型': 'Phi-4 Mini Q4', 'Ollama下载大小': '2.5 GB', '最低内存': '约4 GB', 'CPU速度': '约7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-zh.webp',
        imageCaption: '纯CPU模型对比 -- 无GPU运行Ollama的最佳选择',
      },
      faq: {
        id: 'faq',
        title: '关于纯 CPU LLM 的快速解答',
        faqs: [
          {
            q: '哪个Ollama模型在CPU上最快？',
            a: '在旧款Intel i5笔记本上的独立测试中，Qwen3 0.6B最快，约34–36 tok/s，其次是Gemma 3 1B，约19 tok/s。两者都以推理深度换取速度；若更看重回答质量，请使用Phi-4 Mini Q4（约7 tok/s）。',
          },
          {
            q: 'Ollama能在2 GB内存的电脑上运行吗？',
            a: '可以，使用1B参数及以下的模型：Qwen3 0.6B（下载523 MB）或Gemma 3 1B（806 MB）。请先关闭其他应用，因为操作系统和Ollama运行时也需要1–2 GB。3B参数及以上的模型约需4 GB。',
          },
          {
            q: '纯 CPU 运行 Ollama 需要多少内存？',
            a: 'Qwen3 0.6B或Gemma 3 1B约需2 GB，Llama 3.2 3B Q4或Phi-4 Mini Q4约需4 GB。请在下载大小之外再加1–2 GB，用于操作系统和Ollama运行时开销。',
          },
          {
            q: '为什么 CPU 推理比 GPU 慢得多？',
            a: 'LLM 推理受限于内存带宽。消费级 CPU 读取内存速度为 40–80 GB/s，中端 GPU 读取 VRAM 速度为 400–900 GB/s。10 倍的带宽差距直接转化为 5–10 倍更慢的 token 生成速度。',
          },
          {
            q: '没有独立 GPU 的笔记本电脑可以使用 Ollama 吗？',
            a: '可以。当未检测到 GPU 时，Ollama 会自动在 CPU 上运行。在现代笔记本 CPU 上预计每秒 3–5 个 token。如果以后升级，请参阅<a href="/zh/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">当前最佳 Ollama 模型</a>获取 GPU 级别的建议。',
          },
          {
            q: '哪些 CPU 在本地 LLM 推理中最快？',
            a: 'Apple M 系列芯片（M3、M4）采用统一内存架构，在 7B 模型上可达 15–30 tok/s——在纯 CPU 推理方面远超 x86 CPU。在 x86 CPU 中，内存带宽更高、L3 缓存更大的型号表现最佳。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[Radeon 6800M本地LLM：完整设置指南](/zh/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: 性能指南](/zh/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    title: '¿Los mejores modelos de Ollama solo para CPU?',
    seoTitle: 'Mejores modelos de Ollama sin GPU 2026 | PromptQuorum',
    metaDescription: 'Modelo Ollama más rápido en CPU: Qwen3 0.6B (~35 tok/s). Mejor calidad: Phi-4 Mini (~7 tok/s, 4 GB de RAM). Gemma 3 1B cabe en 2 GB. Sin GPU.',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-es.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: '¿Los mejores modelos de Ollama solo para CPU?',
        answer: 'El modelo de Ollama más rápido solo con CPU es Qwen3 0.6B (~35 tok/s en una prueba independiente) o Gemma 3 1B (~19 tok/s). Para la mejor calidad de respuesta sin GPU, usa Phi-4 Mini Q4 (~7 tok/s, unos 4 GB de RAM) o Llama 3.2 3B Q4. Los equipos con 2 GB de RAM deben quedarse en 1B de parámetros o menos.',
        bullets: [
          'Más rápido: Qwen3 0.6B (~35 tok/s) y Gemma 3 1B (~19 tok/s), ambos caben en 2 GB de RAM',
          'Mejor calidad: Phi-4 Mini Q4 (~7 tok/s), requiere unos 4 GB de RAM',
          'Equilibrado: Llama 3.2 3B Q4, descarga de 2,0 GB, unos 4 GB de RAM',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La inferencia en CPU es 5–10× más lenta que en GPU — espera 3–6 tok/s con un modelo 7B en una CPU de escritorio moderna de 8 núcleos',
          'Más rápidos en CPU: Qwen3 0.6B (~35 tok/s) y Gemma 3 1B (~19 tok/s) en una prueba independiente con un portátil i5 antiguo',
          'Mejor calidad en CPU: Phi-4 Mini Q4, unos 4 GB de RAM, ~7 tok/s en la misma prueba',
          'La inferencia en CPU es práctica para trabajos por lotes y consultas individuales; demasiado lenta para chat interactivo',
        ],
      },
      body1: {
        title: 'La realidad de la velocidad en CPU',
        content: [
          '<strong>La inferencia en CPU funciona a entre 3 y 6 tokens por segundo en una CPU de escritorio moderna de 8 núcleos — aproximadamente entre 5 y 10 veces más lenta que una GPU de gama media.</strong> Un modelo 7B en Q4 produce aproximadamente una palabra cada 200–300 milisegundos en CPU.',
          'Esta velocidad es aceptable para dos casos de uso: procesamiento por lotes nocturno (como resumir documentos o clasificar datos) y consultas individuales donde una espera de 30 segundos es aceptable. Para chat interactivo o completado de código en tiempo real, la inferencia en CPU es demasiado lenta para ser práctica.',
          'La restricción fundamental es el ancho de banda de memoria, no la velocidad de reloj de la CPU. Las CPUs de consumo leen la RAM a 40–80 GB/s. Una GPU dedicada lee la VRAM a 400–900 GB/s. La inferencia LLM escala directamente con el ancho de banda de memoria — por eso incluso una GPU de gama media produce una inferencia dramáticamente más rápida que una CPU de alta gama.',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-es.webp',
        imageCaption: 'Velocidad de Inferencia CPU vs GPU -- El ancho de banda de memoria es el cuello de botella',
      },
      body2: {
        title: 'Los 4 mejores modelos para uso solo con CPU',
        content: [
          '<strong>Qwen3 0.6B y Gemma 3 1B son los modelos de Ollama más rápidos solo con CPU; Phi-4 Mini Q4 ofrece la mejor calidad de respuesta a unos 7 tok/s.</strong> Las velocidades de abajo proceden de una <a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">prueba solo con CPU de It\'s FOSS</a> independiente en un portátil Intel i5 antiguo con 12 GB de RAM; las CPU con memoria más rápida rinden más.',
          'Gemma 3 1B (descarga de 806 MB) y Qwen3 0.6B (523 MB) son las opciones prácticas cuando la RAM se limita a 2 GB, a costa de un razonamiento multipaso más débil. Modelos mayores como Gemma 4 E2B (descarga de 4,6 GB+, ~10 tok/s en la misma prueba) necesitan más memoria de la que ofrece un equipo de 4 GB.',
          'Para la comparativa completa de configuraciones solo con CPU incluyendo requisitos de RAM y optimizaciones a nivel del sistema operativo, consulta la <a href="/es/local-llms/best-cpu-only-llm" class="text-primary hover:underline">guía de los mejores LLM solo para CPU</a>.',
        ],
        columns: ['Modelo', 'Descarga en Ollama', 'RAM mín.', 'Velocidad CPU'],
        rows: [
          { 'Modelo': 'Qwen3 0.6B', 'Descarga en Ollama': '523 MB', 'RAM mín.': '~2 GB', 'Velocidad CPU': '~34–36 tok/s' },
          { 'Modelo': 'Gemma 3 1B', 'Descarga en Ollama': '806 MB', 'RAM mín.': '~2 GB', 'Velocidad CPU': '~19 tok/s' },
          { 'Modelo': 'Llama 3.2 3B Q4', 'Descarga en Ollama': '2,0 GB', 'RAM mín.': '~4 GB', 'Velocidad CPU': 'No probado' },
          { 'Modelo': 'Phi-4 Mini Q4', 'Descarga en Ollama': '2,5 GB', 'RAM mín.': '~4 GB', 'Velocidad CPU': '~7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-es.webp',
        imageCaption: 'Comparación de Modelos Solo CPU -- Mejores opciones para Ollama sin GPU',
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre los LLM solo para CPU',
        faqs: [
          {
            q: '¿Qué modelo de Ollama es el más rápido en CPU?',
            a: 'Qwen3 0.6B es el más rápido, con unos 34–36 tok/s en una prueba independiente en un portátil Intel i5 antiguo, seguido de Gemma 3 1B con unos 19 tok/s. Ambos sacrifican profundidad de razonamiento por velocidad; usa Phi-4 Mini Q4 (~7 tok/s) cuando importe más la calidad de las respuestas.',
          },
          {
            q: '¿Puede Ollama funcionar en un PC con 2 GB de RAM?',
            a: 'Sí, con un modelo de 1B de parámetros o menos: Qwen3 0.6B (descarga de 523 MB) o Gemma 3 1B (806 MB). Cierra antes otras aplicaciones, porque el sistema operativo y el entorno de Ollama también necesitan 1–2 GB. Los modelos de 3B o más necesitan unos 4 GB.',
          },
          {
            q: '¿Cuánta RAM necesito para Ollama solo con CPU?',
            a: 'Unos 2 GB para Qwen3 0.6B o Gemma 3 1B, y unos 4 GB para Llama 3.2 3B Q4 o Phi-4 Mini Q4. Suma 1–2 GB al tamaño de descarga para el sistema operativo y el entorno de ejecución de Ollama.',
          },
          {
            q: '¿Por qué la inferencia en CPU es tan lenta en comparación con la GPU?',
            a: 'La inferencia LLM está limitada por el ancho de banda de memoria. Las CPUs de consumo leen la RAM a 40–80 GB/s. Una GPU de gama media lee la VRAM a 400–900 GB/s. Esa diferencia de ancho de banda de 10 veces se traduce directamente en una generación de tokens entre 5 y 10 veces más lenta.',
          },
          {
            q: '¿Puedo usar Ollama en un portátil sin GPU dedicada?',
            a: 'Sí. Ollama se ejecuta automáticamente en la CPU cuando no se detecta ninguna GPU. Espera entre 3 y 5 tok/s en una CPU moderna de portátil. Consulta <a href="/es/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">los mejores modelos de Ollama ahora mismo</a> para recomendaciones por nivel de GPU si más adelante haces una actualización.',
          },
          {
            q: '¿Qué CPUs son más rápidas para la inferencia de LLM local?',
            a: 'Los chips Apple M-series (M3, M4) utilizan arquitectura de memoria unificada y alcanzan entre 15 y 30 tok/s en modelos 7B — muy superiores a las CPUs x86 en inferencia solo con CPU. Entre las CPUs x86, las que tienen mayor ancho de banda de memoria y caché L3 grande rinden mejor.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Radeon 6800M para LLM local: Guía completa de configuración](/es/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Guía de rendimiento](/es/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    title: 'Melhores modelos Ollama somente para CPU?',
    seoTitle: 'Melhores modelos Ollama sem GPU 2026 | PromptQuorum',
    metaDescription: 'Modelo Ollama mais rápido na CPU: Qwen3 0.6B (~35 tok/s). Melhor qualidade: Phi-4 Mini (~7 tok/s, 4 GB de RAM). Gemma 3 1B cabe em 2 GB. Sem GPU.',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-pt.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Melhores modelos Ollama somente para CPU?',
        answer: 'O modelo Ollama mais rápido somente com CPU é o Qwen3 0.6B (~35 tok/s em um teste independente) ou o Gemma 3 1B (~19 tok/s). Para a melhor qualidade de resposta sem GPU, use Phi-4 Mini Q4 (~7 tok/s, cerca de 4 GB de RAM) ou Llama 3.2 3B Q4. Máquinas com 2 GB de RAM devem ficar em 1B de parâmetros ou menos.',
        bullets: [
          'Mais rápidos: Qwen3 0.6B (~35 tok/s) e Gemma 3 1B (~19 tok/s), ambos cabem em 2 GB de RAM',
          'Melhor qualidade: Phi-4 Mini Q4 (~7 tok/s), exige cerca de 4 GB de RAM',
          'Equilibrado: Llama 3.2 3B Q4, download de 2,0 GB, cerca de 4 GB de RAM',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A inferência em CPU é 5–10× mais lenta que em GPU — espere 3–6 tok/s com um modelo 7B em uma CPU desktop moderna de 8 núcleos',
          'Mais rápidos na CPU: Qwen3 0.6B (~35 tok/s) e Gemma 3 1B (~19 tok/s) em um teste independente com um notebook i5 antigo',
          'Melhor qualidade na CPU: Phi-4 Mini Q4, cerca de 4 GB de RAM, ~7 tok/s no mesmo teste',
          'A inferência na CPU é prática para trabalhos em lote e consultas individuais; muito lenta para chat interativo',
        ],
      },
      body1: {
        title: 'A realidade da velocidade na CPU',
        content: [
          '<strong>A inferência na CPU roda a 3–6 tokens por segundo em uma CPU desktop moderna de 8 núcleos — aproximadamente 5–10× mais lenta do que uma GPU de médio porte.</strong> Um modelo 7B em Q4 produz aproximadamente uma palavra a cada 200–300 milissegundos na CPU.',
          'Essa velocidade é aceitável para dois casos de uso: processamento em lote noturno, como resumir documentos ou classificar dados, e consultas individuais onde uma espera de 30 segundos é aceitável. Para chat interativo ou completação de código em tempo real, a inferência na CPU é muito lenta para ser prática.',
          'A restrição fundamental é a largura de banda de memória, não a velocidade de clock da CPU. CPUs de consumo leem a RAM a 40–80 GB/s. Uma GPU dedicada lê a VRAM a 400–900 GB/s. A inferência de LLM escala diretamente com a largura de banda de memória — por isso até uma GPU de médio porte produz inferência dramaticamente mais rápida do que uma CPU de alto desempenho.',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-pt.webp',
        imageCaption: 'Velocidade de Inferência CPU vs GPU -- A largura de banda de memória é o gargalo',
      },
      body2: {
        title: 'Os 4 melhores modelos para uso somente com CPU',
        content: [
          '<strong>Qwen3 0.6B e Gemma 3 1B são os modelos Ollama mais rápidos somente com CPU; o Phi-4 Mini Q4 oferece a melhor qualidade de resposta a cerca de 7 tok/s.</strong> As velocidades abaixo vêm de um <a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">teste somente com CPU do It\'s FOSS</a> independente em um notebook Intel i5 antigo com 12 GB de RAM; CPUs com memória mais rápida rendem mais.',
          'Gemma 3 1B (download de 806 MB) e Qwen3 0.6B (523 MB) são as opções práticas quando a RAM é limitada a 2 GB, ao custo de um raciocínio em várias etapas mais fraco. Modelos maiores, como o Gemma 4 E2B (download de 4,6 GB+, ~10 tok/s no mesmo teste), exigem mais memória do que uma máquina de 4 GB oferece.',
          'Para a comparação completa de configurações somente com CPU, incluindo requisitos de RAM e otimizações no nível do sistema operacional, consulte o <a href="/pt/local-llms/best-cpu-only-llm" class="text-primary hover:underline">guia dos melhores LLMs somente para CPU</a>.',
        ],
        columns: ['Modelo', 'Download no Ollama', 'RAM mín.', 'Velocidade CPU'],
        rows: [
          { 'Modelo': 'Qwen3 0.6B', 'Download no Ollama': '523 MB', 'RAM mín.': '~2 GB', 'Velocidade CPU': '~34–36 tok/s' },
          { 'Modelo': 'Gemma 3 1B', 'Download no Ollama': '806 MB', 'RAM mín.': '~2 GB', 'Velocidade CPU': '~19 tok/s' },
          { 'Modelo': 'Llama 3.2 3B Q4', 'Download no Ollama': '2,0 GB', 'RAM mín.': '~4 GB', 'Velocidade CPU': 'Não testado' },
          { 'Modelo': 'Phi-4 Mini Q4', 'Download no Ollama': '2,5 GB', 'RAM mín.': '~4 GB', 'Velocidade CPU': '~7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-pt.webp',
        imageCaption: 'Comparação de Modelos Somente CPU -- Melhores opções para Ollama sem GPU',
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs somente para CPU',
        faqs: [
          {
            q: 'Qual modelo Ollama é o mais rápido na CPU?',
            a: 'O Qwen3 0.6B é o mais rápido, com cerca de 34–36 tok/s em um teste independente em um notebook Intel i5 antigo, seguido do Gemma 3 1B com cerca de 19 tok/s. Ambos trocam profundidade de raciocínio por velocidade; use o Phi-4 Mini Q4 (~7 tok/s) quando a qualidade das respostas importar mais.',
          },
          {
            q: 'O Ollama roda em um PC com 2 GB de RAM?',
            a: 'Sim, com um modelo de 1B de parâmetros ou menos: Qwen3 0.6B (download de 523 MB) ou Gemma 3 1B (806 MB). Feche antes os outros aplicativos, pois o sistema operacional e o ambiente do Ollama também precisam de 1–2 GB. Modelos de 3B ou mais precisam de cerca de 4 GB.',
          },
          {
            q: 'Quanta RAM preciso para o Ollama somente com CPU?',
            a: 'Cerca de 2 GB para Qwen3 0.6B ou Gemma 3 1B, e cerca de 4 GB para Llama 3.2 3B Q4 ou Phi-4 Mini Q4. Some 1–2 GB ao tamanho do download para o sistema operacional e o ambiente de execução do Ollama.',
          },
          {
            q: 'Por que a inferência na CPU é tão mais lenta do que na GPU?',
            a: 'A inferência de LLM é limitada pela largura de banda de memória. CPUs de consumo leem a RAM a 40–80 GB/s. Uma GPU de médio porte lê a VRAM a 400–900 GB/s. Essa diferença de largura de banda de 10× se traduz diretamente em geração de tokens 5–10× mais lenta.',
          },
          {
            q: 'Posso usar o Ollama em um laptop sem GPU dedicada?',
            a: 'Sim. O Ollama roda automaticamente na CPU quando nenhuma GPU é detectada. Espere 3–5 tok/s em uma CPU moderna de laptop. Consulte <a href="/pt/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">os melhores modelos Ollama agora</a> para recomendações por nível de GPU se você atualizar mais tarde.',
          },
          {
            q: 'Quais CPUs são mais rápidas para inferência de LLM local?',
            a: 'Os chips Apple M-series (M3, M4) usam arquitetura de memória unificada e alcançam 15–30 tok/s em modelos 7B — muito superiores às CPUs x86 em inferência somente com CPU. Entre as CPUs x86, as que têm maior largura de banda de memória e grande cache L3 têm o melhor desempenho.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Radeon 6800M para LLM local: Guia completo de configuração](/pt/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Guia de desempenho](/pt/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  ar: {
    theme: 'Ollama',
    title: 'أفضل نماذج ⁨Ollama⁩ للـ⁨CPU⁩ فقط؟',
    seoTitle: 'أفضل نماذج ⁨Ollama⁩ بدون ⁨GPU 2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'أسرع نموذج Ollama على CPU: Qwen3 0.6B (~35 رمز/ثانية). أفضل جودة: Phi-4 Mini (~7 رمز/ثانية، 4 GB RAM). Gemma 3 1B يعمل بـ2 GB. بدون GPU.',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-ar.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama للـCPU فقط؟',
        answer: 'أسرع نموذج Ollama للـCPU فقط هو Qwen3 0.6B (~35 رمز/ثانية في اختبار مستقل) أو Gemma 3 1B (~19 رمز/ثانية). لأفضل جودة إجابات بدون GPU استخدم Phi-4 Mini Q4 (~7 رمز/ثانية، حوالي 4 GB RAM) أو Llama 3.2 3B Q4. الأجهزة ذات 2 GB RAM يجب أن تلتزم بنماذج 1B معلمة أو أقل.',
        bullets: [
          'الأسرع: Qwen3 0.6B (~35 رمز/ثانية) وGemma 3 1B (~19 رمز/ثانية)، كلاهما يعمل ضمن 2 GB RAM',
          'أفضل جودة: Phi-4 Mini Q4 (~7 رمز/ثانية)، يحتاج حوالي 4 GB RAM',
          'متوازن: Llama 3.2 3B Q4، تنزيل 2.0 GB، حوالي 4 GB RAM',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الاستدلال على CPU أبطأ 5–10 مرات من GPU — توقع 3–6 رمز/ثانية لنموذج 7B على CPU مكتبي حديث 8 أنوية',
          'الأسرع على CPU: Qwen3 0.6B (~35 رمز/ثانية) وGemma 3 1B (~19 رمز/ثانية) في اختبار مستقل على لابتوب i5 قديم',
          'أفضل جودة على CPU: Phi-4 Mini Q4، حوالي 4 GB RAM، ~7 رمز/ثانية في الاختبار نفسه',
          'الاستدلال على CPU مناسب للمعالجة الدفعية والاستعلامات الفردية؛ بطيء جداً للدردشة التفاعلية',
        ],
      },
      body1: {
        title: 'واقع السرعة على CPU',
        content: [
          '<strong>الاستدلال على CPU يعمل بـ3–6 رموز/ثانية على CPU مكتبي حديث 8 أنوية — أبطأ بحوالي 5–10 مرات من GPU متوسطة المستوى.</strong> نموذج 7B في Q4 ينتج حوالي كلمة كل 200–300 مللي ثانية على CPU.',
          'هذه السرعة مقبولة لحالتي استخدام: المعالجة الدفعية الليلية (كتلخيص المستندات أو تصنيف البيانات)، والاستعلامات الفردية حيث انتظار 30 ثانية مقبول. للدردشة التفاعلية أو الإكمال الفوري للكود، الاستدلال على CPU بطيء جداً لكي يكون عملياً.',
          'القيد الجوهري هو عرض نطاق الذاكرة، لا سرعة ساعة CPU. CPUs المستهلكين تقرأ RAM بـ40–80 GB/s. GPU مخصصة تقرأ VRAM بـ400–900 GB/s. استدلال نماذج اللغة الكبيرة يتناسب مباشرة مع عرض نطاق الذاكرة — لهذا حتى GPU متوسطة المستوى تنتج استدلالاً أسرع بكثير من CPU عالية الأداء.',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-ar.webp',
        imageCaption: 'سرعة الاستدلال بالمعالج مقابل بطاقة الرسومات -- عرض نطاق الذاكرة هو عنق الزجاجة',
      },
      body2: {
        title: 'أفضل 4 نماذج للاستخدام بـCPU فقط',
        content: [
          '<strong>Qwen3 0.6B وGemma 3 1B هما أسرع نماذج Ollama للـCPU فقط؛ ويقدم Phi-4 Mini Q4 أفضل جودة إجابات بحوالي 7 رمز/ثانية.</strong> السرعات أدناه مأخوذة من <a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">اختبار CPU فقط من It\'s FOSS</a> مستقل على لابتوب Intel i5 قديم بذاكرة 12 GB؛ المعالجات ذات الذاكرة الأسرع تعمل أسرع.',
          'Gemma 3 1B (تنزيل 806 MB) وQwen3 0.6B (523 MB) هما الخياران العمليان عندما تكون RAM محدودة بـ2 GB، على حساب استدلال أضعف متعدد الخطوات. النماذج الأكبر مثل Gemma 4 E2B (تنزيل 4.6 GB+، ~10 رمز/ثانية في الاختبار نفسه) تحتاج ذاكرة أكثر مما يوفره جهاز بـ4 GB.',
          'للمقارنة الشاملة لإعدادات CPU فقط بما في ذلك متطلبات RAM والتحسينات على مستوى نظام التشغيل، راجع <a href="/ar/local-llms/best-cpu-only-llm" class="text-primary hover:underline">دليل أفضل نماذج اللغة الكبيرة للـCPU فقط</a>.',
        ],
        columns: ['النموذج', 'حجم تنزيل Ollama', 'أدنى RAM', 'السرعة على CPU'],
        rows: [
          { 'النموذج': 'Qwen3 0.6B', 'حجم تنزيل Ollama': '523 MB', 'أدنى RAM': '~2 GB', 'السرعة على CPU': '~34–36 رمز/ثانية' },
          { 'النموذج': 'Gemma 3 1B', 'حجم تنزيل Ollama': '806 MB', 'أدنى RAM': '~2 GB', 'السرعة على CPU': '~19 رمز/ثانية' },
          { 'النموذج': 'Llama 3.2 3B Q4', 'حجم تنزيل Ollama': '2.0 GB', 'أدنى RAM': '~4 GB', 'السرعة على CPU': 'لم يُختبر' },
          { 'النموذج': 'Phi-4 Mini Q4', 'حجم تنزيل Ollama': '2.5 GB', 'أدنى RAM': '~4 GB', 'السرعة على CPU': '~7 رمز/ثانية' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-ar.webp',
        imageCaption: 'مقارنة النماذج بالمعالج فقط -- أفضل الخيارات لـ Ollama بدون GPU',
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج اللغة الكبيرة للـCPU فقط',
        faqs: [
          {
            q: 'ما أسرع نموذج Ollama على CPU؟',
            a: 'Qwen3 0.6B هو الأسرع بحوالي 34–36 رمز/ثانية في اختبار مستقل على لابتوب Intel i5 قديم، يليه Gemma 3 1B بحوالي 19 رمز/ثانية. كلاهما يضحي بعمق الاستدلال مقابل السرعة؛ استخدم Phi-4 Mini Q4 (~7 رمز/ثانية) عندما تكون جودة الإجابات أهم.',
          },
          {
            q: 'هل يعمل Ollama على جهاز بذاكرة 2 GB RAM؟',
            a: 'نعم، مع نموذج بحجم 1B معلمة أو أقل: Qwen3 0.6B (تنزيل 523 MB) أو Gemma 3 1B (806 MB). أغلق التطبيقات الأخرى أولاً لأن نظام التشغيل وبيئة تشغيل Ollama يحتاجان أيضاً إلى 1–2 GB. النماذج بحجم 3B وأكثر تحتاج حوالي 4 GB.',
          },
          {
            q: 'كم من RAM أحتاج لـOllama بـCPU فقط؟',
            a: 'حوالي 2 GB لـQwen3 0.6B أو Gemma 3 1B، وحوالي 4 GB لـLlama 3.2 3B Q4 أو Phi-4 Mini Q4. أضف 1–2 GB فوق حجم التنزيل لتكلفة نظام التشغيل وبيئة تشغيل Ollama.',
          },
          {
            q: 'لماذا الاستدلال على CPU أبطأ بكثير من GPU؟',
            a: 'استدلال نماذج اللغة الكبيرة محدود بعرض نطاق الذاكرة. CPUs المستهلكين تقرأ RAM بـ40–80 GB/s. GPU متوسطة المستوى تقرأ VRAM بـ400–900 GB/s. فارق عرض النطاق 10× يُترجَم مباشرة إلى توليد رموز أبطأ بـ5–10 مرات.',
          },
          {
            q: 'هل يمكنني استخدام Ollama على لابتوب بدون GPU مخصصة؟',
            a: 'نعم. Ollama يعمل تلقائياً على CPU عندما لا يُكتشف GPU. توقع 3–5 رمز/ثانية على CPU لابتوب حديثة. راجع <a href="/ar/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">أفضل نماذج Ollama الآن</a> للتوصيات حسب مستوى GPU إذا قمت بالترقية لاحقاً.',
          },
          {
            q: 'ما بطاقات CPU الأسرع للاستدلال المحلي على نماذج اللغة الكبيرة؟',
            a: 'شرائح Apple M-series (M3، M4) تستخدم بنية ذاكرة موحدة وتصل إلى 15–30 رمز/ثانية على نماذج 7B — أفضل بكثير من CPUs x86 في الاستدلال بـCPU فقط. بين CPUs x86، التي تملك عرض نطاق ذاكرة أعلى وذاكرة تخزين مؤقت L3 كبيرة تؤدي أداءً أفضل.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[Radeon 6800M للنماذج المحلية: دليل الإعداد الكامل](/ar/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: دليل الأداء](/ar/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  ko: {
    theme: 'Ollama',
    title: 'CPU 전용 최고의 Ollama 모델은 무엇입니까?',
    seoTitle: 'GPU 없이 사용하는 최고의 Ollama 모델 2026 | PromptQuorum',
    metaDescription: 'CPU에서 가장 빠른 Ollama 모델: Qwen3 0.6B(~35 tok/s). 최고 품질: Phi-4 Mini(~7 tok/s, RAM 4 GB). Gemma 3 1B는 2 GB로 동작. GPU 불필요.',
    heroImage: '/images/best-ollama-models-cpu-only-model-comparison-hero-ko.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ko: {
        question: 'CPU 전용 최고의 Ollama 모델은 무엇입니까?',
        answer: 'CPU 전용에서 가장 빠른 Ollama 모델은 Qwen3 0.6B(독립 테스트 기준 ~35 tok/s) 또는 Gemma 3 1B(~19 tok/s)입니다. GPU 없이 최고의 답변 품질을 원하면 Phi-4 Mini Q4(~7 tok/s, RAM 약 4 GB) 또는 Llama 3.2 3B Q4를 사용하십시오. RAM 2 GB 기기는 1B 파라미터 이하 모델을 사용해야 합니다.',
        bullets: [
          '최고 속도: Qwen3 0.6B(~35 tok/s)와 Gemma 3 1B(~19 tok/s), 둘 다 RAM 2 GB에 들어갑니다',
          '최고 품질: Phi-4 Mini Q4(~7 tok/s), RAM 약 4 GB 필요',
          '균형형: Llama 3.2 3B Q4, 다운로드 2.0 GB, RAM 약 4 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU 추론은 GPU보다 5~10배 느립니다 — 최신 8코어 데스크톱 CPU에서 7B 모델은 3~6 tok/s를 예상하십시오',
          'CPU에서 가장 빠름: Qwen3 0.6B(~35 tok/s)와 Gemma 3 1B(~19 tok/s), 오래된 i5 노트북의 독립 테스트 기준',
          'CPU에서 최고 품질: Phi-4 Mini Q4, RAM 약 4 GB, 같은 테스트에서 ~7 tok/s',
          'CPU 추론은 배치 작업과 단일 쿼리에 실용적이며, 대화형 채팅에는 너무 느립니다',
        ],
      },
      body1: {
        title: 'CPU 속도의 현실',
        snippetBlocks: [
          { type: 'one-sentence', text: 'CPU 추론은 최신 8코어 데스크톱 CPU에서 초당 3~6개 토큰으로 동작하며, GPU보다 약 5~10배 느립니다.' },
          { type: 'plain-terms', text: 'GPU가 없으면 Ollama는 RAM에서 직접 모델 데이터를 읽어 CPU로 처리합니다. 소비자용 CPU의 메모리 대역폭은 GPU의 약 10분의 1 수준이므로 토큰 생성 속도가 현저히 낮습니다.' },
        ],
        content: [
          '<strong>CPU 추론은 최신 8코어 데스크톱 CPU에서 초당 3~6개 토큰으로 동작하며 — 중급 GPU보다 약 5~10배 느립니다.</strong> Q4 수준의 7B 모델은 CPU에서 약 200~300밀리초마다 단어 하나를 생성합니다.',
          '이 속도는 두 가지 사용 사례에서 허용 가능합니다: 문서 요약이나 데이터 분류와 같은 야간 배치 처리, 그리고 30초 대기를 허용할 수 있는 단일 쿼리 조회입니다. 대화형 채팅이나 실시간 코드 자동 완성에는 CPU 추론이 너무 느려 실용적이지 않습니다.',
          '근본적인 제약은 CPU 클록 속도가 아니라 메모리 대역폭입니다. 소비자용 CPU는 RAM을 40~80 GB/s로 읽습니다. 전용 GPU는 VRAM을 400~900 GB/s로 읽습니다. LLM 추론은 메모리 대역폭에 직접 비례하므로, 중급 GPU조차 고급 CPU보다 훨씬 빠른 추론을 제공합니다.',
        ],
        image: '/images/best-ollama-models-cpu-only-speed-reality-hero-ko.webp',
        imageCaption: 'CPU 대 GPU 추론 속도 -- 메모리 대역폭이 병목입니다',
      },
      body2: {
        title: 'CPU 전용 사용을 위한 상위 4개 모델',
        content: [
          '<strong>Qwen3 0.6B와 Gemma 3 1B는 CPU 전용에서 가장 빠른 Ollama 모델이며, Phi-4 Mini Q4는 약 7 tok/s로 최고의 답변 품질을 제공합니다.</strong> 아래 속도는 RAM 12 GB의 오래된 Intel i5 노트북에서 진행한 독립 <a href="https://itsfoss.com/testing-local-llms-without-gpu" class="text-primary hover:underline" rel="noopener">It\'s FOSS CPU 전용 테스트</a>에서 가져온 것이며, 메모리가 더 빠른 CPU는 더 빠르게 동작합니다.',
          'RAM이 2 GB로 제한될 때는 Gemma 3 1B(다운로드 806 MB)와 Qwen3 0.6B(523 MB)가 현실적인 선택이지만 다단계 추론 능력은 떨어집니다. Gemma 4 E2B(다운로드 4.6 GB 이상, 같은 테스트에서 ~10 tok/s) 같은 대형 모델은 4 GB 기기가 제공하는 것보다 많은 메모리가 필요합니다.',
          'RAM 요구 사항 및 OS 수준 최적화를 포함한 CPU 전용 구성의 전체 비교는 <a href="/ko/local-llms/best-cpu-only-llm" class="text-primary hover:underline">CPU 전용 최고의 LLM 가이드</a>를 참조하십시오.',
        ],
        columns: ['모델', 'Ollama 다운로드', '최소 RAM', 'CPU 속도'],
        rows: [
          { '모델': 'Qwen3 0.6B', 'Ollama 다운로드': '523 MB', '최소 RAM': '~2 GB', 'CPU 속도': '~34–36 tok/s' },
          { '모델': 'Gemma 3 1B', 'Ollama 다운로드': '806 MB', '최소 RAM': '~2 GB', 'CPU 속도': '~19 tok/s' },
          { '모델': 'Llama 3.2 3B Q4', 'Ollama 다운로드': '2.0 GB', '최소 RAM': '~4 GB', 'CPU 속도': '미테스트' },
          { '모델': 'Phi-4 Mini Q4', 'Ollama 다운로드': '2.5 GB', '최소 RAM': '~4 GB', 'CPU 속도': '~7 tok/s' },
        ],
        image: '/images/best-ollama-models-cpu-only-model-comparison-hero-ko.webp',
        imageCaption: 'CPU 전용 모델 비교 -- GPU 없이 Ollama를 위한 최고의 선택',
      },
      faq: {
        id: 'faq',
        title: 'CPU 전용 LLM에 관한 간단 답변',
        faqs: [
          {
            q: 'CPU에서 가장 빠른 Ollama 모델은 무엇입니까?',
            a: '오래된 Intel i5 노트북의 독립 테스트에서 Qwen3 0.6B가 약 34~36 tok/s로 가장 빨랐고, Gemma 3 1B가 약 19 tok/s로 뒤를 이었습니다. 둘 다 추론 깊이를 희생해 속도를 얻습니다. 답변 품질이 더 중요하면 Phi-4 Mini Q4(~7 tok/s)를 사용하십시오.',
          },
          {
            q: 'RAM 2 GB PC에서 Ollama를 실행할 수 있습니까?',
            a: '네, 1B 파라미터 이하 모델이면 가능합니다: Qwen3 0.6B(다운로드 523 MB) 또는 Gemma 3 1B(806 MB). OS와 Ollama 런타임에도 1~2 GB가 필요하므로 먼저 다른 앱을 종료하십시오. 3B 파라미터 이상 모델은 약 4 GB가 필요합니다.',
          },
          {
            q: 'CPU 전용 Ollama 사용 시 RAM이 얼마나 필요합니까?',
            a: 'Qwen3 0.6B 또는 Gemma 3 1B는 약 2 GB, Llama 3.2 3B Q4 또는 Phi-4 Mini Q4는 약 4 GB가 필요합니다. OS 및 Ollama 런타임 오버헤드를 위해 다운로드 크기에 1~2 GB를 추가하십시오.',
          },
          {
            q: 'CPU 추론이 GPU보다 훨씬 느린 이유는 무엇입니까?',
            a: 'LLM 추론은 메모리 대역폭에 의해 제한됩니다. 소비자용 CPU는 RAM을 40~80 GB/s로 읽습니다. 중급 GPU는 VRAM을 400~900 GB/s로 읽습니다. 이 10배의 대역폭 차이가 직접적으로 5~10배 느린 토큰 생성으로 이어집니다.',
          },
          {
            q: '전용 GPU가 없는 노트북에서 Ollama를 사용할 수 있습니까?',
            a: '네. Ollama는 GPU가 감지되지 않으면 자동으로 CPU에서 실행됩니다. 최신 노트북 CPU에서 3~5 tok/s를 예상하십시오. 나중에 업그레이드할 경우 GPU 등급별 권장 사항은 <a href="/ko/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">지금 최고의 Ollama 모델</a>을 참조하십시오.',
          },
          {
            q: '로컬 LLM 추론에 가장 빠른 CPU는 무엇입니까?',
            a: 'Apple M-series 칩(M3, M4)은 통합 메모리 아키텍처를 사용하여 7B 모델에서 15~30 tok/s에 도달합니다 — CPU 전용 추론에서 x86 CPU를 크게 능가합니다. x86 CPU 중에서는 메모리 대역폭이 높고 대용량 L3 캐시를 갖춘 CPU가 가장 좋은 성능을 발휘합니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[Radeon 6800M 로컬 LLM: 완전 설정 가이드](/ko/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: 성능 가이드](/ko/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
}
