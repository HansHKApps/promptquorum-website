import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Best Ollama Models for CPU Only?',
    dateModified: '2026-07-16',
    seoTitle: 'Best Ollama Models Without GPU 2026 | PromptQuorum',
    metaDescription: 'Phi-4 Mini Q4 is the best CPU-only Ollama model: 4 GB RAM, ~5 tok/s. Llama 3.2 3B Q4 needs 2 GB RAM. Gemma 2B is fastest at ~6 tok/s. No GPU required.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_models_mentioned: ['Phi-4 Mini', 'Llama 3.2 3B', 'Gemma 2B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers running Ollama without a dedicated GPU',
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-right-now', 'ollama-128k-context-models'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for CPU only?',
        answer: 'Without a GPU, Phi-4 Mini at Q4 is the best balance of quality and speed on CPU, delivering reasoning quality close to Llama 3.2 3B while needing only 4 GB RAM. Llama 3.2 3B Q4 works with 2+ GB RAM. Gemma 2B is the fastest CPU option.',
        bullets: [
          'Phi-4 Mini Q4: best quality/speed on CPU, needs 4 GB RAM',
          'Llama 3.2 3B Q4: best quality, needs 2 GB RAM (balanced)',
          'Gemma 2B: fastest CPU inference, 2 GB RAM',
        ],
        updatedDate: '2026-07',
      },
      de: { question: 'Die besten Ollama-Modelle nur für die CPU?', answer: 'Ohne GPU bietet Phi-4 Mini bei Q4 die beste Balance aus Qualität und Geschwindigkeit, mit Reasoning-Qualität nah bei Llama 3.2 3B bei nur 4 GB RAM. Llama 3.2 3B Q4 läuft mit 2+ GB RAM. Gemma 2B ist die schnellste CPU-Option.', bullets: ['Phi-4 Mini Q4: bestes Qualitäts-/Geschwindigkeitsverhältnis auf der CPU, benötigt 4 GB RAM', 'Llama 3.2 3B Q4: beste Qualität, benötigt 2 GB RAM (ausgewogen)', 'Gemma 2B: schnellste CPU-Inferenz, 2 GB RAM'], updatedDate: '2026-07' },
      fr: { question: 'Meilleurs modèles Ollama en mode CPU uniquement ?', answer: 'Sans GPU, Phi-4 Mini en Q4 offre le meilleur équilibre qualité/vitesse sur CPU, avec qualité de raisonnement proche de Llama 3.2 3B en seulement 4 Go de RAM. Llama 3.2 3B Q4 fonctionne avec 2+ Go de RAM. Gemma 2B est l\'option CPU la plus rapide.', bullets: ['Phi-4 Mini Q4 : meilleur rapport qualité/vitesse sur CPU, nécessite 4 Go de RAM', 'Llama 3.2 3B Q4 : meilleure qualité, nécessite 2 Go de RAM (équilibré)', 'Gemma 2B : inférence CPU la plus rapide, 2 Go de RAM'], updatedDate: '2026-07' },
      ja: { question: 'CPUのみで動くOllamaモデルは？', answer: 'GPU非搭載環境では、Phi-4 Mini Q4はCPUでの品質と速度の最良バランスで、わずか4 GB RAMでLlama 3.2 3B近いReasoning品質を提供します。Llama 3.2 3B Q4は2 GB以上のRAMで動作します。Gemma 2BはCPU推論が最速です。', bullets: ['Phi-4 Mini Q4：CPUでの品質/速度バランス最良、4 GB RAM必要', 'Llama 3.2 3B Q4：最高品質、2 GB RAM必要（バランス型）', 'Gemma 2B：CPU推論が最速、2 GB RAM'], updatedDate: '2026-07' },
      zh: { question: '纯CPU运行最佳的Ollama模型是什么？', answer: '无GPU时，Phi-4 Mini Q4是CPU上质量与速度的最佳平衡，仅需4 GB内存即可提供接近Llama 3.2 3B的推理品质。Llama 3.2 3B Q4需要2 GB以上内存。Gemma 2B是CPU推理速度最快的选择。', bullets: ['Phi-4 Mini Q4：CPU上质量/速度最佳，需要4 GB内存', 'Llama 3.2 3B Q4：最高质量，需要2 GB内存（均衡）', 'Gemma 2B：CPU推理最快，2 GB内存'], updatedDate: '2026-07' },
      es: { question: '¿Los mejores modelos de Ollama solo para CPU?', answer: 'Sin GPU, Phi-4 Mini en Q4 es el mejor equilibrio entre calidad y velocidad en CPU, ofreciendo una calidad de razonamiento cercana a Llama 3.2 3B con solo 4 GB de RAM. Llama 3.2 3B Q4 funciona con 2 GB de RAM o más. Gemma 2B es la opción CPU más rápida.', bullets: ['Phi-4 Mini Q4: mejor relación calidad/velocidad en CPU, requiere 4 GB de RAM', 'Llama 3.2 3B Q4: mejor calidad, requiere 2 GB de RAM (equilibrado)', 'Gemma 2B: inferencia CPU más rápida, 2 GB de RAM'], updatedDate: '2026-07' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU inference is 5–10× slower than GPU — expect 3–6 tok/s on a modern 8-core desktop CPU',
          'Phi-4 Mini Q4 is the best CPU-only pick: 4 GB RAM, ~5 tok/s, strong reasoning quality',
          'Gemma 2B is fastest on CPU (~6 tok/s) but has lower reasoning quality than Phi-4 Mini',
          'CPU inference is practical for batch jobs and single-query lookups; too slow for interactive chat',
        ],
      },
      body1: {
        title: 'The CPU Speed Reality',
        content: [
          '<strong>As of May 2026, CPU inference runs at 3–6 tokens per second on a modern 8-core desktop CPU — roughly 5–10× slower than a mid-range GPU.</strong> A 7B model at Q4 produces one word approximately every 200–300 milliseconds on CPU.',
          'This speed is acceptable for two use cases: overnight batch processing such as summarizing documents or classifying data, and single-query lookups where a 30-second wait is acceptable. For interactive chat or real-time code completion, CPU inference is too slow to be practical.',
          'The root constraint is memory bandwidth, not CPU clock speed. Consumer CPUs read RAM at 40–80 GB/s. A dedicated GPU reads VRAM at 400–900 GB/s. LLM inference scales directly with memory bandwidth — which is why even a mid-range GPU produces dramatically faster inference than a high-end CPU.',
        ],
      },
      body2: {
        title: 'Top 3 Models for CPU-Only Use',
        content: [
          'The right CPU-only model depends on whether you prioritize quality or speed. <strong>Phi-4 Mini Q4 is the best balance — it delivers reasoning quality close to Llama 3.2 3B while needing only 4 GB RAM and running noticeably faster.</strong>',
          'Gemma 2B is the only viable option when RAM is limited to 2 GB. It reaches ~6 tok/s on CPU but produces noticeably lower quality answers on multi-step reasoning tasks compared to Phi-4 Mini.',
          'For the full breakdown of CPU-only configurations including RAM requirements and OS-level optimizations, see the <a href="/local-llms/best-cpu-only-llm" class="text-primary hover:underline">best CPU-only LLM guide</a>.',
        ],
        columns: ['Model', 'RAM Required', 'CPU Speed'],
        rows: [
          { 'Model': 'Phi-4 Mini Q4', 'RAM Required': '4 GB', 'CPU Speed': '~4–5 tok/s' },
          { 'Model': 'Llama 3.2 3B Q4', 'RAM Required': '2 GB', 'CPU Speed': '~10 tok/s' },
          { 'Model': 'Gemma 2B', 'RAM Required': '2 GB', 'CPU Speed': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About CPU-Only LLMs',
        faqs: [
          {
            q: 'How much RAM do I need for CPU-only Ollama?',
            a: 'Minimum 2 GB for Gemma 2B. 4 GB for Phi-4 Mini Q4. 2 GB for Llama 3.2 3B Q4. Add 1–2 GB on top of the model size for the OS and Ollama runtime overhead.',
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
    metaDescription: 'Phi-4 Mini Q4 ist das beste CPU-only Ollama-Modell: 4 GB RAM, ~5 tok/s. Llama 3.2 3B Q4 mit 2 GB RAM. Gemma 2B ~6 tok/s auf CPU. Alle ohne GPU. Mai 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      de: {
        question: 'Die besten Ollama-Modelle nur für die CPU?',
        answer: 'Ohne GPU bietet Phi-4 Mini bei Q4 die beste Balance aus Qualität und Geschwindigkeit auf der CPU. Llama 3.2 3B Q4 funktioniert mit 2+ GB RAM. Gemma 2B ist die schnellste CPU-Option.',
        bullets: [
          'Phi-4 Mini Q4: bestes Qualitäts-/Geschwindigkeitsverhältnis auf der CPU, benötigt 4 GB RAM',
          'Llama 3.2 3B Q4: beste Qualität, benötigt 2 GB RAM (ausgewogen)',
          'Gemma 2B: schnellste CPU-Inferenz, 2 GB RAM',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU-Inferenz ist 5–10× langsamer als GPU — rechnen Sie mit 3–6 tok/s auf einem modernen 8-Kern-Desktop-CPU',
          'Phi-4 Mini Q4 ist die beste CPU-only-Wahl: 4 GB RAM, ~5 tok/s, starke Reasoning-Qualität',
          'Gemma 2B ist auf der CPU am schnellsten (~6 tok/s), hat jedoch eine geringere Reasoning-Qualität als Phi-4 Mini',
          'CPU-Inferenz ist praktisch für Batch-Jobs und Einzelanfragen; für interaktiven Chat ist sie zu langsam',
        ],
      },
      body1: {
        title: 'Die Realität der CPU-Geschwindigkeit',
        content: [
          '<strong>Stand Mai 2026 läuft CPU-Inferenz auf einem modernen 8-Kern-Desktop-CPU mit 3–6 Tokens pro Sekunde — etwa 5–10× langsamer als eine Mid-Range-GPU.</strong> Ein 7B-Modell bei Q4 erzeugt auf der CPU ungefähr alle 200–300 Millisekunden ein Wort.',
          'Diese Geschwindigkeit ist für zwei Anwendungsfälle akzeptabel: nächtliche Stapelverarbeitung wie das Zusammenfassen von Dokumenten oder das Klassifizieren von Daten sowie Einzelanfragen, bei denen eine Wartezeit von 30 Sekunden akzeptabel ist. Für interaktiven Chat oder Echtzeit-Code-Vervollständigung ist CPU-Inferenz zu langsam.',
          'Der eigentliche Engpass ist die Speicherbandbreite, nicht die CPU-Taktfrequenz. Consumer-CPUs lesen RAM mit 40–80 GB/s. Eine dedizierte GPU liest VRAM mit 400–900 GB/s. LLM-Inferenz skaliert direkt mit der Speicherbandbreite — weshalb selbst eine Mid-Range-GPU eine dramatisch schnellere Inferenz liefert als eine High-End-CPU.',
        ],
      },
      body2: {
        title: 'Top 3 Modelle für den reinen CPU-Betrieb',
        content: [
          'Das richtige CPU-only-Modell hängt davon ab, ob Sie Qualität oder Geschwindigkeit priorisieren. <strong>Phi-4 Mini Q4 bietet die beste Balance — es liefert Reasoning-Qualität nahe an Llama 3.2 3B, benötigt aber nur 4 GB RAM und läuft spürbar schneller.</strong>',
          'Gemma 2B ist die einzige praktikable Option, wenn der RAM auf 2 GB begrenzt ist. Es erreicht ~6 tok/s auf der CPU, liefert bei mehrstufigen Reasoning-Aufgaben jedoch spürbar schlechtere Antworten als Phi-4 Mini.',
          'Eine vollständige Übersicht der CPU-only-Konfigurationen einschließlich RAM-Anforderungen und OS-Level-Optimierungen finden Sie im <a href="/de/local-llms/best-cpu-only-llm" class="text-primary hover:underline">Leitfaden für die besten CPU-only-LLMs</a>.',
        ],
        columns: ['Modell', 'Benötigter RAM', 'CPU-Geschwindigkeit'],
        rows: [
          { 'Modell': 'Phi-4 Mini Q4', 'Benötigter RAM': '4 GB', 'CPU-Geschwindigkeit': '~4–5 tok/s' },
          { 'Modell': 'Llama 3.2 3B Q4', 'Benötigter RAM': '2 GB', 'CPU-Geschwindigkeit': '~10 tok/s' },
          { 'Modell': 'Gemma 2B', 'Benötigter RAM': '2 GB', 'CPU-Geschwindigkeit': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu CPU-only-LLMs',
        faqs: [
          {
            q: 'Wie viel RAM benötige ich für CPU-only Ollama?',
            a: 'Mindestens 2 GB für Gemma 2B. 4 GB für Phi-4 Mini Q4. 2 GB für Llama 3.2 3B Q4. Rechnen Sie 1–2 GB zusätzlich zum Modell-Größe für den Overhead von Betriebssystem und Ollama-Laufzeitumgebung.',
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
    metaDescription: 'Phi-4 Mini Q4 : meilleur Ollama CPU-only, 4 Go RAM, ~5 tok/s. Llama 3.2 3B Q4 : 8 Go RAM. Gemma 2B le plus rapide sur CPU (~6 tok/s). Vérifié mai 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      fr: {
        question: 'Meilleurs modèles Ollama en mode CPU uniquement ?',
        answer: 'Sans GPU, Phi-4 Mini en Q4 offre le meilleur équilibre qualité/vitesse sur CPU. Llama 3.2 3B Q4 fonctionne avec 2+ Go de RAM. Gemma 2B est l\'option CPU la plus rapide.',
        bullets: [
          'Phi-4 Mini Q4 : meilleur rapport qualité/vitesse sur CPU, nécessite 4 Go de RAM',
          'Llama 3.2 3B Q4 : meilleure qualité, nécessite 2 Go de RAM (équilibré)',
          'Gemma 2B : inférence CPU la plus rapide, 2 Go de RAM',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'L\'inférence CPU est 5 à 10× plus lente que sur GPU — comptez 3 à 6 tok/s sur un processeur desktop 8 cœurs moderne',
          'Phi-4 Mini Q4 est le meilleur choix CPU-only : 4 Go de RAM, ~5 tok/s, excellente qualité de raisonnement',
          'Gemma 2B est le plus rapide sur CPU (~6 tok/s) mais offre une qualité de raisonnement inférieure à Phi-4 Mini',
          'L\'inférence CPU convient au traitement par lots et aux requêtes ponctuelles ; trop lente pour le chat interactif',
        ],
      },
      body1: {
        title: 'La réalité de la vitesse CPU',
        content: [
          '<strong>En mai 2026, l\'inférence CPU tourne à 3–6 tokens par seconde sur un processeur desktop 8 cœurs moderne — soit environ 5 à 10× plus lentement qu\'un GPU milieu de gamme.</strong> Un modèle 7B en Q4 produit un mot environ toutes les 200 à 300 millisecondes sur CPU.',
          'Cette vitesse est acceptable pour deux cas d\'usage : le traitement par lots nocturne (résumé de documents, classification de données) et les requêtes ponctuelles où une attente de 30 secondes est tolérable. Pour le chat interactif ou la complétion de code en temps réel, l\'inférence CPU est trop lente.',
          'La contrainte fondamentale est la bande passante mémoire, pas la fréquence CPU. Les CPU grand public lisent la RAM à 40–80 GB/s. Un GPU dédié lit la VRAM à 400–900 GB/s. L\'inférence LLM est directement proportionnelle à la bande passante mémoire — c\'est pourquoi même un GPU milieu de gamme surpasse largement un CPU haut de gamme.',
        ],
      },
      body2: {
        title: 'Top 3 des modèles pour une utilisation CPU-only',
        content: [
          'Le bon modèle CPU-only dépend de votre priorité : qualité ou vitesse. <strong>Phi-4 Mini Q4 offre le meilleur équilibre — il délivre une qualité de raisonnement proche de Llama 3.2 3B tout en ne nécessitant que 4 Go de RAM et en fonctionnant nettement plus vite.</strong>',
          'Gemma 2B est la seule option viable lorsque la RAM est limitée à 2 Go. Il atteint ~6 tok/s sur CPU, mais produit des réponses de qualité nettement inférieure sur les tâches de raisonnement multi-étapes par rapport à Phi-4 Mini.',
          'Pour la comparaison complète des configurations CPU-only incluant les exigences RAM et les optimisations système, consultez le <a href="/fr/local-llms/best-cpu-only-llm" class="text-primary hover:underline">guide des meilleurs LLMs CPU-only</a>.',
        ],
        columns: ['Modèle', 'RAM requise', 'Vitesse CPU'],
        rows: [
          { 'Modèle': 'Phi-4 Mini Q4', 'RAM requise': '4 GB', 'Vitesse CPU': '~4–5 tok/s' },
          { 'Modèle': 'Llama 3.2 3B Q4', 'RAM requise': '2 GB', 'Vitesse CPU': '~10 tok/s' },
          { 'Modèle': 'Gemma 2B', 'RAM requise': '2 GB', 'Vitesse CPU': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLMs CPU-only',
        faqs: [
          {
            q: 'De combien de RAM ai-je besoin pour Ollama en mode CPU-only ?',
            a: 'Minimum 2 Go pour Gemma 2B. 4 Go pour Phi-4 Mini Q4. 8 Go pour Llama 3.2 3B Q4. Ajoutez 1 à 2 Go en plus de la taille du modèle pour la mémoire utilisée par le système d\'exploitation et Ollama.',
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
    seoTitle: 'GPU不要Ollamaモデル2026：CPU専用ベスト3選 | PromptQuorum',
    metaDescription: 'GPUなしの場合、Phi-4 Mini Q4がCPU専用の最適Ollamaモデルです。Llama 3.2 3B Q4は2GB以上のRAMで動作します。Gemma 2Bが最速。2026年5月確認済み。',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      ja: {
        question: 'CPU専用で使えるOllamaの最適モデルは？',
        answer: 'GPUなしの場合、Phi-4 Mini（Q4量子化）がCPU上で品質と速度の最良バランスを提供します。Llama 3.2 3B Q4は2GB以上のRAMで動作します。Gemma 2Bは最速のCPUオプションです。',
        bullets: [
          'Phi-4 Mini Q4：CPU上で最良の品質/速度バランス、4 GB RAMが必要',
          'Llama 3.2 3B Q4：最高品質、2 GB RAMが必要（バランス型）',
          'Gemma 2B：最速のCPU推論、2 GB RAM',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU推論はGPUより5〜10倍遅い — 最新の8コアデスクトップCPUで3〜6 tok/sを想定してください',
          'Phi-4 Mini Q4がCPU専用の最適選択です：4 GB RAM、~5 tok/s、優れた推論品質',
          'Gemma 2BはCPU上で最速（~6 tok/s）ですが、Phi-4 Miniより推論品質が低い',
          'CPU推論はバッチ処理や単発クエリには実用的ですが、対話型チャットには遅すぎます',
        ],
      },
      body1: {
        title: 'CPUの速度の現実',
        content: [
          '<strong>2026年5月時点で、CPU推論は最新の8コアデスクトップCPUで毎秒3〜6トークンで動作します — ミドルレンジGPUの約5〜10倍遅いです。</strong> Q4のモデル 7BはCPU上でおよそ200〜300ミリ秒ごとに1単語を生成します。',
          'この速度が許容できるのは2つのユースケースです：ドキュメントの要約やデータ分類などの夜間バッチ処理、および30秒の待機が許容できる単発クエリ。対話型チャットやリアルタイムコード補完には、CPU推論は実用的には遅すぎます。',
          '根本的な制約はメモリ帯域幅であり、CPUのクロック速度ではありません。コンシューマーCPUはRAMを40〜80 GB/sで読み取ります。専用GPUはVRAMを400〜900 GB/sで読み取ります。LLM推論はメモリ帯域幅に直接比例します — そのためミドルレンジGPUでさえハイエンドCPUよりも劇的に高速な推論を実現します。',
        ],
      },
      body2: {
        title: 'CPU専用向けトップ3モデル',
        content: [
          '最適なCPU専用モデルは品質と速度のどちらを優先するかによります。<strong>Phi-4 Mini Q4が最良のバランスです — Llama 3.2 3Bに近い推論品質を提供しながら、必要なRAMはわずか4 GBで、明らかに高速に動作します。</strong>',
          'Gemma 2BはRAMが2 GBに制限されている場合の唯一の実用的選択肢です。CPU上で~6 tok/sに達しますが、多段階推論タスクではPhi-4 Miniと比較して品質が明らかに低下します。',
          'RAMの要件やOSレベルの最適化を含むCPU専用設定の完全な比較については、<a href="/ja/local-llms/best-cpu-only-llm" class="text-primary hover:underline">CPU専用LLMガイド</a>をご覧ください。',
        ],
        columns: ['モデル', '必要RAM', 'CPU速度'],
        rows: [
          { 'モデル': 'Phi-4 Mini Q4', '必要RAM': '4 GB', 'CPU速度': '~4–5 tok/s' },
          { 'モデル': 'Llama 3.2 3B Q4', '必要RAM': '2 GB', 'CPU速度': '~10 tok/s' },
          { 'モデル': 'Gemma 2B', '必要RAM': '2 GB', 'CPU速度': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'CPU専用LLMに関するよくある質問',
        faqs: [
          {
            q: 'CPU専用のOllamaにはどのくらいのRAMが必要ですか？',
            a: 'Gemma 2Bには最低2 GB。Phi-4 Mini Q4には4 GB。Llama 3.2 3B Q4には2 GB。OSとOllamaランタイムのオーバーヘッド分として、モデルサイズに加えて1〜2 GB余分に確保してください。',
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
    seoTitle: '无GPU纯CPU运行Ollama 2026：最佳三款模型 | PromptQuorum',
    metaDescription: '无GPU：Phi-4 Mini Q4是最佳纯CPU Ollama模型。Llama 3.2 3B Q4需要2GB以上内存。Gemma 2B速度最快。2026年5月更新。',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      zh: {
        question: '仅用 CPU 运行 Ollama 的最佳模型？',
        answer: '没有 GPU 时，Phi-4 Mini Q4 在 CPU 上提供最佳的质量与速度平衡。Llama 3.2 3B Q4 需要 2GB 以上内存。Gemma 2B 是最快的 CPU 选项。',
        bullets: [
          'Phi-4 Mini Q4：CPU 上最佳质量/速度比，需要 4 GB 内存',
          'Llama 3.2 3B Q4：质量最高，需要 2 GB 内存（均衡）',
          'Gemma 2B：CPU 推理最快，2 GB 内存',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU 推理比 GPU 慢 5–10 倍——在现代 8 核台式机 CPU 上预计每秒 3–6 个 token',
          'Phi-4 Mini Q4 是纯 CPU 的最佳选择：4 GB 内存，~5 tok/s，推理质量出色',
          'Gemma 2B 在 CPU 上速度最快（~6 tok/s），但推理质量低于 Phi-4 Mini',
          'CPU 推理适合批量处理和单次查询；对于交互式对话速度太慢',
        ],
      },
      body1: {
        title: 'CPU 速度的实际情况',
        content: [
          '<strong>截至 2026 年 5 月，CPU 推理在现代 8 核台式机 CPU 上运行速度为每秒 3–6 个 token——大约比中端 GPU 慢 5–10 倍。</strong> Q4 量化的 7B 模型在 CPU 上大约每 200–300 毫秒生成一个词。',
          '这种速度适用于两种场景：隔夜批量处理（如文档摘要或数据分类），以及可以接受 30 秒等待的单次查询。对于交互式对话或实时代码补全，CPU 推理速度太慢，不具备实用性。',
          '根本瓶颈在于内存带宽，而非 CPU 时钟频率。消费级 CPU 读取内存的速度为 40–80 GB/s，专用 GPU 读取 VRAM 的速度为 400–900 GB/s。LLM 推理直接随内存带宽扩展——这就是为什么即使是中端 GPU 也比高端 CPU 快得多。',
        ],
      },
      body2: {
        title: '纯 CPU 使用的三大推荐模型',
        content: [
          '最合适的纯 CPU 模型取决于您优先考虑质量还是速度。<strong>Phi-4 Mini Q4 提供最佳平衡——它提供接近 Llama 3.2 3B 的推理质量，仅需 4 GB 内存，运行速度明显更快。</strong>',
          '当内存限制为 2 GB 时，Gemma 2B 是唯一可行的选择。它在 CPU 上可达 ~6 tok/s，但在多步推理任务上的答案质量明显低于 Phi-4 Mini。',
          '有关纯 CPU 配置的完整对比（包括内存需求和系统级优化），请参阅<a href="/zh/local-llms/best-cpu-only-llm" class="text-primary hover:underline">最佳纯 CPU LLM 指南</a>。',
        ],
        columns: ['模型', '所需内存', 'CPU 速度'],
        rows: [
          { '模型': 'Phi-4 Mini Q4', '所需内存': '4 GB', 'CPU 速度': '~4–5 tok/s' },
          { '模型': 'Llama 3.2 3B Q4', '所需内存': '2 GB', 'CPU 速度': '~10 tok/s' },
          { '模型': 'Gemma 2B', '所需内存': '2 GB', 'CPU 速度': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于纯 CPU LLM 的快速解答',
        faqs: [
          {
            q: '纯 CPU 运行 Ollama 需要多少内存？',
            a: 'Gemma 2B 至少需要 2 GB。Phi-4 Mini Q4 需要 4 GB。Llama 3.2 3B Q4 需要 2 GB。在模型大小基础上再预留 1–2 GB，用于操作系统和 Ollama 运行时开销。',
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
    metaDescription: 'Phi-4 Mini Q4 es el mejor modelo de Ollama solo para CPU: 4 GB de RAM, ~5 tok/s. Llama 3.2 3B Q4 pide 2 GB. Gemma 2B es el más rápido en CPU (~6 tok/s). Sin GPU.',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      es: {
        question: '¿Los mejores modelos de Ollama solo para CPU?',
        answer: 'Sin GPU, Phi-4 Mini en Q4 ofrece el mejor equilibrio entre calidad y velocidad en CPU. Llama 3.2 3B Q4 funciona con 2 GB de RAM o más. Gemma 2B es la opción CPU más rápida.',
        bullets: [
          'Phi-4 Mini Q4: mejor relación calidad/velocidad en CPU, requiere 4 GB de RAM',
          'Llama 3.2 3B Q4: mejor calidad, requiere 2 GB de RAM (equilibrado)',
          'Gemma 2B: inferencia CPU más rápida, 2 GB de RAM',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La inferencia en CPU es entre 5 y 10 veces más lenta que en GPU — espera entre 3 y 6 tok/s en una CPU de escritorio moderna de 8 núcleos',
          'Phi-4 Mini Q4 es la mejor opción solo para CPU: 4 GB de RAM, ~5 tok/s, excelente calidad de razonamiento',
          'Gemma 2B es el más rápido en CPU (~6 tok/s) pero ofrece menor calidad de razonamiento que Phi-4 Mini',
          'La inferencia en CPU es práctica para trabajos por lotes y consultas individuales; demasiado lenta para chat interactivo',
        ],
      },
      body1: {
        title: 'La realidad de la velocidad en CPU',
        content: [
          '<strong>A mayo de 2026, la inferencia en CPU funciona a entre 3 y 6 tokens por segundo en una CPU de escritorio moderna de 8 núcleos — aproximadamente entre 5 y 10 veces más lenta que una GPU de gama media.</strong> Un modelo 7B en Q4 produce aproximadamente una palabra cada 200–300 milisegundos en CPU.',
          'Esta velocidad es aceptable para dos casos de uso: procesamiento por lotes nocturno (como resumir documentos o clasificar datos) y consultas individuales donde una espera de 30 segundos es aceptable. Para chat interactivo o completado de código en tiempo real, la inferencia en CPU es demasiado lenta para ser práctica.',
          'La restricción fundamental es el ancho de banda de memoria, no la velocidad de reloj de la CPU. Las CPUs de consumo leen la RAM a 40–80 GB/s. Una GPU dedicada lee la VRAM a 400–900 GB/s. La inferencia LLM escala directamente con el ancho de banda de memoria — por eso incluso una GPU de gama media produce una inferencia dramáticamente más rápida que una CPU de alta gama.',
        ],
      },
      body2: {
        title: 'Los 3 mejores modelos para uso solo con CPU',
        content: [
          'El modelo correcto solo para CPU depende de si priorizas calidad o velocidad. <strong>Phi-4 Mini Q4 ofrece el mejor equilibrio — proporciona una calidad de razonamiento cercana a Llama 3.2 3B necesitando solo 4 GB de RAM y funcionando notablemente más rápido.</strong>',
          'Gemma 2B es la única opción viable cuando la RAM está limitada a 2 GB. Alcanza ~6 tok/s en CPU pero produce respuestas de calidad notablemente inferior en tareas de razonamiento de múltiples pasos comparado con Phi-4 Mini.',
          'Para la comparativa completa de configuraciones solo con CPU incluyendo requisitos de RAM y optimizaciones a nivel del sistema operativo, consulta la <a href="/es/local-llms/best-cpu-only-llm" class="text-primary hover:underline">guía de los mejores LLM solo para CPU</a>.',
        ],
        columns: ['Modelo', 'RAM requerida', 'Velocidad en CPU'],
        rows: [
          { 'Modelo': 'Phi-4 Mini Q4', 'RAM requerida': '4 GB', 'Velocidad en CPU': '~4–5 tok/s' },
          { 'Modelo': 'Llama 3.2 3B Q4', 'RAM requerida': '2 GB', 'Velocidad en CPU': '~10 tok/s' },
          { 'Modelo': 'Gemma 2B', 'RAM requerida': '2 GB', 'Velocidad en CPU': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre los LLM solo para CPU',
        faqs: [
          {
            q: '¿Cuánta RAM necesito para Ollama solo con CPU?',
            a: 'Mínimo 2 GB para Gemma 2B. 4 GB para Phi-4 Mini Q4. 2 GB para Llama 3.2 3B Q4. Añade entre 1 y 2 GB adicionales sobre el tamaño del modelo para la carga del sistema operativo y el tiempo de ejecución de Ollama.',
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
    metaDescription: 'Phi-4 Mini Q4 é o melhor modelo Ollama somente para CPU: 4 GB de RAM, ~5 tok/s. Llama 3.2 3B Q4 pede 2 GB. Gemma 2B é o mais rápido na CPU (~6 tok/s). Sem GPU.',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      pt: {
        question: 'Melhores modelos Ollama somente para CPU?',
        answer: 'Sem GPU, o Phi-4 Mini em Q4 oferece o melhor equilíbrio entre qualidade e velocidade na CPU. O Llama 3.2 3B Q4 funciona com 2 GB de RAM ou mais. O Gemma 2B é a opção mais rápida na CPU.',
        bullets: [
          'Phi-4 Mini Q4: melhor relação qualidade/velocidade na CPU, requer 4 GB de RAM',
          'Llama 3.2 3B Q4: melhor qualidade, requer 2 GB de RAM (equilibrado)',
          'Gemma 2B: inferência CPU mais rápida, 2 GB de RAM',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A inferência na CPU é 5–10× mais lenta do que na GPU — espere entre 3 e 6 tok/s em uma CPU desktop moderna de 8 núcleos',
          'Phi-4 Mini Q4 é a melhor escolha somente para CPU: 4 GB de RAM, ~5 tok/s, excelente qualidade de raciocínio',
          'Gemma 2B é o mais rápido na CPU (~6 tok/s), mas oferece qualidade de raciocínio inferior ao Phi-4 Mini',
          'A inferência na CPU é prática para trabalhos em lote e consultas individuais; muito lenta para chat interativo',
        ],
      },
      body1: {
        title: 'A realidade da velocidade na CPU',
        content: [
          '<strong>Em maio de 2026, a inferência na CPU roda a 3–6 tokens por segundo em uma CPU desktop moderna de 8 núcleos — aproximadamente 5–10× mais lenta do que uma GPU de médio porte.</strong> Um modelo 7B em Q4 produz aproximadamente uma palavra a cada 200–300 milissegundos na CPU.',
          'Essa velocidade é aceitável para dois casos de uso: processamento em lote noturno, como resumir documentos ou classificar dados, e consultas individuais onde uma espera de 30 segundos é aceitável. Para chat interativo ou completação de código em tempo real, a inferência na CPU é muito lenta para ser prática.',
          'A restrição fundamental é a largura de banda de memória, não a velocidade de clock da CPU. CPUs de consumo leem a RAM a 40–80 GB/s. Uma GPU dedicada lê a VRAM a 400–900 GB/s. A inferência de LLM escala diretamente com a largura de banda de memória — por isso até uma GPU de médio porte produz inferência dramaticamente mais rápida do que uma CPU de alto desempenho.',
        ],
      },
      body2: {
        title: 'Os 3 melhores modelos para uso somente com CPU',
        content: [
          'O modelo correto somente para CPU depende de se você prioriza qualidade ou velocidade. <strong>Phi-4 Mini Q4 oferece o melhor equilíbrio — entrega qualidade de raciocínio próxima ao Llama 3.2 3B precisando de apenas 4 GB de RAM e rodando notavelmente mais rápido.</strong>',
          'Gemma 2B é a única opção viável quando a RAM está limitada a 2 GB. Alcança ~6 tok/s na CPU, mas produz respostas de qualidade notavelmente inferior em tarefas de raciocínio de várias etapas em comparação com o Phi-4 Mini.',
          'Para a comparação completa de configurações somente com CPU, incluindo requisitos de RAM e otimizações no nível do sistema operacional, consulte o <a href="/pt/local-llms/best-cpu-only-llm" class="text-primary hover:underline">guia dos melhores LLMs somente para CPU</a>.',
        ],
        columns: ['Modelo', 'RAM necessária', 'Velocidade na CPU'],
        rows: [
          { 'Modelo': 'Phi-4 Mini Q4', 'RAM necessária': '4 GB', 'Velocidade na CPU': '~4–5 tok/s' },
          { 'Modelo': 'Llama 3.2 3B Q4', 'RAM necessária': '2 GB', 'Velocidade na CPU': '~10 tok/s' },
          { 'Modelo': 'Gemma 2B', 'RAM necessária': '2 GB', 'Velocidade na CPU': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs somente para CPU',
        faqs: [
          {
            q: 'Quanta RAM preciso para o Ollama somente com CPU?',
            a: 'Mínimo de 2 GB para Gemma 2B. 4 GB para Phi-4 Mini Q4. 2 GB para Llama 3.2 3B Q4. Adicione 1–2 GB acima do tamanho do modelo para a sobrecarga do sistema operacional e do runtime do Ollama.',
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
    metaDescription: '⁨Phi-4 Mini Q4⁩ أفضل نموذج ⁨Ollama⁩ لـ⁨CPU⁩ فقط: ⁨4 GB RAM⁩، ~⁨5⁩ رمز/ثانية. ⁨Llama 3.2 3B Q4⁩ يحتاج ⁨2 GB RAM. Gemma 2B⁩ الأسرع على ⁨CPU⁩ بـ~⁨6⁩ رمز/ثانية.',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama للـCPU فقط؟',
        answer: 'بدون GPU، Phi-4 Mini في Q4 يقدم أفضل توازن بين الجودة والسرعة على CPU. Llama 3.2 3B Q4 يعمل بـ2 GB RAM أو أكثر. Gemma 2B هو الخيار الأسرع على CPU.',
        bullets: [
          'Phi-4 Mini Q4: أفضل نسبة جودة/سرعة على CPU، يحتاج 4 GB RAM',
          'Llama 3.2 3B Q4: أفضل جودة، يحتاج 2 GB RAM (متوازن)',
          'Gemma 2B: الاستدلال الأسرع على CPU، 2 GB RAM',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الاستدلال على CPU أبطأ 5–10 مرات من GPU — توقع 3–6 رمز/ثانية على CPU مكتبي حديث 8 أنوية',
          'Phi-4 Mini Q4 هو الخيار الأمثل للـCPU فقط: 4 GB RAM، ~5 رمز/ثانية، جودة استدلال ممتازة',
          'Gemma 2B هو الأسرع على CPU (~6 رمز/ثانية) لكن جودة استدلاله أدنى من Phi-4 Mini',
          'الاستدلال على CPU مناسب للمعالجة الدفعية والاستعلامات الفردية؛ بطيء جداً للدردشة التفاعلية',
        ],
      },
      body1: {
        title: 'واقع السرعة على CPU',
        content: [
          '<strong>اعتباراً من مايو 2026، الاستدلال على CPU يعمل بـ3–6 رموز/ثانية على CPU مكتبي حديث 8 أنوية — أبطأ بحوالي 5–10 مرات من GPU متوسطة المستوى.</strong> نموذج 7B في Q4 ينتج حوالي كلمة كل 200–300 مللي ثانية على CPU.',
          'هذه السرعة مقبولة لحالتي استخدام: المعالجة الدفعية الليلية (كتلخيص المستندات أو تصنيف البيانات)، والاستعلامات الفردية حيث انتظار 30 ثانية مقبول. للدردشة التفاعلية أو الإكمال الفوري للكود، الاستدلال على CPU بطيء جداً لكي يكون عملياً.',
          'القيد الجوهري هو عرض نطاق الذاكرة، لا سرعة ساعة CPU. CPUs المستهلكين تقرأ RAM بـ40–80 GB/s. GPU مخصصة تقرأ VRAM بـ400–900 GB/s. استدلال نماذج اللغة الكبيرة يتناسب مباشرة مع عرض نطاق الذاكرة — لهذا حتى GPU متوسطة المستوى تنتج استدلالاً أسرع بكثير من CPU عالية الأداء.',
        ],
      },
      body2: {
        title: 'أفضل 3 نماذج للاستخدام بـCPU فقط',
        content: [
          'النموذج الصحيح لـCPU فقط يعتمد على ما إذا كنت تعطي الأولوية للجودة أم السرعة. <strong>Phi-4 Mini Q4 يقدم أفضل توازن — يوفر جودة استدلال قريبة من Llama 3.2 3B مع الحاجة لـ4 GB RAM فقط ويعمل بشكل أسرع ملحوظاً.</strong>',
          'Gemma 2B هو الخيار الوحيد القابل للتطبيق عندما تكون RAM محدودة بـ2 GB. يصل إلى ~6 رمز/ثانية على CPU لكنه ينتج إجابات ذات جودة أدنى ملحوظاً في مهام الاستدلال متعددة الخطوات مقارنةً بـPhi-4 Mini.',
          'للمقارنة الشاملة لإعدادات CPU فقط بما في ذلك متطلبات RAM والتحسينات على مستوى نظام التشغيل، راجع <a href="/ar/local-llms/best-cpu-only-llm" class="text-primary hover:underline">دليل أفضل نماذج اللغة الكبيرة للـCPU فقط</a>.',
        ],
        columns: ['النموذج', 'RAM المطلوبة', 'السرعة على CPU'],
        rows: [
          { 'النموذج': 'Phi-4 Mini Q4', 'RAM المطلوبة': '4 GB', 'السرعة على CPU': '~4–5 رمز/ثانية' },
          { 'النموذج': 'Llama 3.2 3B Q4', 'RAM المطلوبة': '2 GB', 'السرعة على CPU': '~10 رمز/ثانية' },
          { 'النموذج': 'Gemma 2B', 'RAM المطلوبة': '2 GB', 'السرعة على CPU': '~6 رمز/ثانية' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج اللغة الكبيرة للـCPU فقط',
        faqs: [
          {
            q: 'كم من RAM أحتاج لـOllama بـCPU فقط؟',
            a: 'الحد الأدنى 2 GB لـGemma 2B. 4 GB لـPhi-4 Mini Q4. 2 GB لـLlama 3.2 3B Q4. أضف 1–2 GB فوق حجم النموذج لتكلفة نظام التشغيل وبيئة تشغيل Ollama.',
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
    metaDescription: 'Phi-4 Mini Q4는 CPU 전용 최고의 Ollama 모델입니다: RAM 4 GB, ~5 tok/s. Llama 3.2 3B Q4는 2 GB RAM이 필요합니다. Gemma 2B는 CPU에서 가장 빠릅니다(~6 tok/s). GPU 불필요.',
    publishDate: '2026-05-18',
    dateModified: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    quickAnswerTop: {
      ko: {
        question: 'CPU 전용 최고의 Ollama 모델은 무엇입니까?',
        answer: 'GPU가 없는 환경에서 Phi-4 Mini Q4는 CPU에서 품질과 속도의 최적 균형을 제공합니다. Llama 3.2 3B Q4는 2 GB 이상의 RAM에서 동작합니다. Gemma 2B는 CPU에서 가장 빠른 옵션입니다.',
        bullets: [
          'Phi-4 Mini Q4: CPU에서 품질/속도 균형 최고, RAM 4 GB 필요',
          'Llama 3.2 3B Q4: 최고 품질, RAM 2 GB 필요(균형)',
          'Gemma 2B: CPU 추론 속도 최고, RAM 2 GB',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'CPU 추론은 GPU보다 5~10배 느립니다 — 최신 8코어 데스크톱 CPU에서 3~6 tok/s를 예상하십시오',
          'Phi-4 Mini Q4는 CPU 전용 최선의 선택입니다: RAM 4 GB, ~5 tok/s, 우수한 추론 품질',
          'Gemma 2B는 CPU에서 가장 빠르지만(~6 tok/s) Phi-4 Mini보다 추론 품질이 낮습니다',
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
          '<strong>2026년 5월 기준, CPU 추론은 최신 8코어 데스크톱 CPU에서 초당 3~6개 토큰으로 동작하며 — 중급 GPU보다 약 5~10배 느립니다.</strong> Q4 수준의 7B 모델은 CPU에서 약 200~300밀리초마다 단어 하나를 생성합니다.',
          '이 속도는 두 가지 사용 사례에서 허용 가능합니다: 문서 요약이나 데이터 분류와 같은 야간 배치 처리, 그리고 30초 대기를 허용할 수 있는 단일 쿼리 조회입니다. 대화형 채팅이나 실시간 코드 자동 완성에는 CPU 추론이 너무 느려 실용적이지 않습니다.',
          '근본적인 제약은 CPU 클록 속도가 아니라 메모리 대역폭입니다. 소비자용 CPU는 RAM을 40~80 GB/s로 읽습니다. 전용 GPU는 VRAM을 400~900 GB/s로 읽습니다. LLM 추론은 메모리 대역폭에 직접 비례하므로, 중급 GPU조차 고급 CPU보다 훨씬 빠른 추론을 제공합니다.',
        ],
      },
      body2: {
        title: 'CPU 전용 사용을 위한 상위 3개 모델',
        content: [
          '올바른 CPU 전용 모델은 품질과 속도 중 무엇을 우선시하는지에 따라 달라집니다. <strong>Phi-4 Mini Q4가 최적의 균형을 제공합니다 — RAM 4 GB만으로 Llama 3.2 3B에 근접한 추론 품질을 제공하면서 눈에 띄게 더 빠르게 동작합니다.</strong>',
          'Gemma 2B는 RAM이 2 GB로 제한될 때 유일하게 실용적인 선택입니다. CPU에서 ~6 tok/s에 도달하지만 다단계 추론 작업에서 Phi-4 Mini와 비교하면 눈에 띄게 낮은 품질의 답변을 생성합니다.',
          'RAM 요구 사항 및 OS 수준 최적화를 포함한 CPU 전용 구성의 전체 비교는 <a href="/ko/local-llms/best-cpu-only-llm" class="text-primary hover:underline">CPU 전용 최고의 LLM 가이드</a>를 참조하십시오.',
        ],
        columns: ['모델', '필요 RAM', 'CPU 속도'],
        rows: [
          { '모델': 'Phi-4 Mini Q4', '필요 RAM': '4 GB', 'CPU 속도': '~4–5 tok/s' },
          { '모델': 'Llama 3.2 3B Q4', '필요 RAM': '2 GB', 'CPU 속도': '~10 tok/s' },
          { '모델': 'Gemma 2B', '필요 RAM': '2 GB', 'CPU 속도': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'CPU 전용 LLM에 관한 간단 답변',
        faqs: [
          {
            q: 'CPU 전용 Ollama 사용 시 RAM이 얼마나 필요합니까?',
            a: 'Gemma 2B의 경우 최소 2 GB, Phi-4 Mini Q4는 4 GB, Llama 3.2 3B Q4는 2 GB가 필요합니다. OS 및 Ollama 런타임 오버헤드를 위해 모델 크기에 1~2 GB를 추가하십시오.',
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
