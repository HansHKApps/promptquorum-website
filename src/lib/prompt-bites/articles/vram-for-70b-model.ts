import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-en.png',
    title: 'How Much VRAM for a 70B Model?',
    dateModified: '2026-06-21',
    seoTitle: '70B VRAM: 3 Run Options 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'A 70B model at Q4_K_M needs ~40 GB VRAM. Options: dual RTX 3090 (48 GB), M5 Max 128 GB unified memory, or cloud GPU. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 70B'],
    current_hardware_mentioned: ['RTX 3090', 'M5 Max'],
    educationalLevel: 'Advanced',
    audience: 'Developers planning to run 70B models locally',
    parentArticle: '/local-llms/run-70b-models-24gb-vram',
    siblingBites: ['how-much-ram-for-7b-model', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much VRAM for a 70B model?',
        answer: 'A 70B model at Q4_K_M needs approximately 40 GB of VRAM. Consumer options: dual RTX 3090 (48 GB total), M5 Max with 128 GB unified memory, or cloud GPU rental.',
        bullets: [
          'Q4_K_M 70B: ~40 GB VRAM required',
          'Dual RTX 3090 (48 GB total): consumer desktop option',
          'M5 Max 128 GB unified memory: best single-machine experience',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie viel VRAM braucht ein 70B-Modell?',
        answer: 'Ein 70B-Modell bei Q4_K_M benötigt ca. 40 GB VRAM. Consumer-Optionen: zwei RTX 3090 (48 GB gesamt), M5 Max mit 128 GB Unified Memory oder Cloud-GPU-Miete.',
        bullets: [
          'Q4_K_M 70B: ~40 GB VRAM erforderlich',
          'Dual RTX 3090 (48 GB gesamt): Consumer-Desktop-Option',
          'M5 Max 128 GB Unified Memory: beste Einzelsystem-Erfahrung',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'De combien de VRAM a besoin un modèle 70B ?',
        answer: 'Un modèle 70B en Q4_K_M nécessite environ 40 Go de VRAM. Options grand public : dual RTX 3090 (48 Go total), M5 Max avec 128 Go de mémoire unifiée, ou location de GPU cloud.',
        bullets: [
          'Q4_K_M 70B : ~40 Go de VRAM requis',
          'Dual RTX 3090 (48 Go total) : option desktop grand public',
          'M5 Max 128 Go de mémoire unifiée : meilleure expérience monoposte',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '70BモデルにはどれくらいのVRAMが必要ですか？',
        answer: 'Q4_K_Mの70Bモデルには約40 GBのVRAMが必要です。コンシューマー向けの選択肢：デュアルRTX 3090（合計48 GB）、128 GB統合メモリ搭載のM5 Max、またはクラウドGPUのレンタル。',
        bullets: [
          'Q4_K_M 70B：約40 GB VRAM必要',
          'デュアルRTX 3090（合計48 GB）：コンシューマーデスクトップの選択肢',
          'M5 Max 128 GB統合メモリ：シングルマシンの最良の選択',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '运行70B模型需要多少显存？',
        answer: 'Q4_K_M量化的70B模型需要约40 GB显存。消费级选项：双RTX 3090（共48 GB）、M5 Max（128 GB统一内存）或云端GPU租用。',
        bullets: [
          'Q4_K_M 70B：约需40 GB显存',
          '双RTX 3090（共48 GB）：消费级台式机方案',
          'M5 Max 128 GB统一内存：最佳单机体验',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuánta VRAM necesita un modelo 70B?',
        answer: 'Un modelo 70B en Q4_K_M necesita aproximadamente 40 GB de VRAM. Opciones de consumo: dos RTX 3090 (48 GB en total), M5 Max con 128 GB de memoria unificada, o alquiler de GPU en la nube.',
        bullets: [
          'Q4_K_M 70B: ~40 GB de VRAM necesarios',
          'Dual RTX 3090 (48 GB en total): opción de escritorio de consumo',
          'M5 Max 128 GB de memoria unificada: mejor experiencia en un solo equipo',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A 70B model at Q4_K_M needs approximately 40 GB of VRAM',
          'Consumer hardware options: dual RTX 3090 (48 GB) or Apple M5 Max with 128 GB unified memory',
          'For occasional use under 5 hours per week, cloud GPU rental at $0.50–$1.50/hour is cheaper than buying hardware',
        ],
      },
      body1: {
        title: 'Hardware Options for Running a 70B Model',
        content: [
          'As of May 2026, <strong>a 70B model at Q4_K_M is approximately 40 GB of compressed weights — 1.7× a single RTX 4090 and 1.6× a single RTX 3090.</strong> This is why 70B is the hardest tier to run locally: it crosses the boundary between consumer GPUs (max 24 GB) and workstation hardware. Three paths exist, each with different trade-offs.',
          'Apple M5 Max with 128 GB unified memory is the smoothest single-machine option — no PCIe transfer bottleneck between CPU and GPU memory, and macOS manages allocation automatically. Dual RTX 3090s work but require a workstation-class desktop and careful driver configuration.',
        ],
        columns: ['Hardware', 'Total VRAM', 'Speed'],
        rows: [
          { 'Hardware': 'Dual RTX 3090', 'Total VRAM': '48 GB', 'Speed': '~8 tok/s' },
          { 'Hardware': 'RTX 3090 + CPU offload', 'Total VRAM': '24 GB + 32 GB RAM', 'Speed': '~3 tok/s' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'Total VRAM': '128 GB unified', 'Speed': '~15 tok/s' },
          { 'Hardware': 'RunPod H100 (cloud)', 'Total VRAM': '80 GB', 'Speed': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'When Cloud Makes More Sense Than Local',
        content: [
          'Cloud GPU rental for 70B inference runs $0.50–$1.50 per hour on RunPod and Lambda Labs as of May 2026. A dual RTX 3090 setup costs $1,500–$2,500 in hardware, which amortizes to cloud costs only after 1,500–3,000 hours of use.',
          'For teams or individuals using 70B models fewer than 5 hours per week, cloud rental is both cheaper and easier to maintain. Local 70B is justified for privacy-sensitive use cases (no data leaving your hardware) or sustained high-frequency inference where cloud costs compound quickly. For smaller models that fit on consumer GPUs, see <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the VRAM tier guide</a>.',
          'For a full breakdown of 70B deployment strategies, see <a href="/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">how to run 70B models with 24 GB VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 70B Model VRAM',
        faqs: [
          {
            q: 'Can a single RTX 3090 run a 70B model?',
            a: 'Partially. A single RTX 3090 (24 GB) can run 70B with CPU offload, but speed drops to ~3 tok/s — too slow for interactive use. Full GPU inference for 70B requires 40+ GB in combined VRAM.',
          },
          {
            q: 'Can I run a 70B model on a MacBook?',
            a: 'Only on M3 Max, M4 Max, M4 Ultra, or M5 Max with 128 GB of unified memory. A MacBook with 32 GB RAM cannot run 70B at Q4. See <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">the RAM sizing guide</a> for smaller model alternatives.',
          },
          {
            q: 'Is there a cheaper way to run 70B models locally?',
            a: 'Yes — use Q2_K quantization to bring the 70B model down to ~21 GB VRAM, but quality degrades significantly. Alternatively, 34B models at Q5 deliver 80–90% of 70B quality at half the VRAM requirement.',
          },
          {
            q: 'How does 70B VRAM compare to a 13B model?',
            a: 'A 13B model at Q4 needs ~9 GB VRAM vs ~40 GB for 70B. For most tasks — chat, coding, summarization — a 13–14B model at Q5 covers the gap. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM requirements by model size</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Related Guides',
      items: [
        '[How Much VRAM Do You Need for a Local LLM?](/prompt-bites/how-much-vram-for-local-llm) — VRAM tier table for all model sizes',
        '[Cheapest Way to Run a 70B Model Locally](/prompt-bites/cheapest-way-to-run-70b-model-locally) — cost path when hardware exceeds budget',
        '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — full hardware guide for 70B-capable builds',
        '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — which 70B models are worth the hardware cost',
      ],
    },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-de.png',
    title: 'Wie viel VRAM braucht ein 70B-Modell?',
    seoTitle: 'VRAM für 70B-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ein 70B-Modell bei Q4_K_M benötigt ~40 GB VRAM. Dual RTX 3090, M5 Max 128 GB oder Cloud-GPU sind die Optionen. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ein 70B-Modell bei Q4_K_M benötigt ca. 40 GB VRAM',
          'Consumer-Hardware-Optionen: Dual RTX 3090 (48 GB) oder Apple M5 Max mit 128 GB Unified Memory',
          'Bei gelegentlicher Nutzung unter 5 Stunden pro Woche ist Cloud-GPU-Miete für ca. 0,50–1,50 USD/Stunde günstiger als Hardware-Kauf',
        ],
      },
      body1: {
        title: 'Hardware-Optionen für ein 70B-Modell',
        content: [
          'Stand Mai 2026: <strong>Ein 70B-Modell bei Q4_K_M entspricht ca. 40 GB komprimierter Gewichte — 1,7× eine einzelne RTX 4090 und 1,6× eine einzelne RTX 3090.</strong> Deshalb ist 70B die schwierigste Kategorie für lokale Ausführung: Sie überschreitet die Grenze zwischen Consumer-GPUs (max. 24 GB) und Workstation-Hardware. Drei Optionen stehen zur Auswahl, jede mit unterschiedlichen Kompromissen.',
          'Apple M5 Max mit 128 GB Unified Memory ist die komfortabelste Einzelsystem-Option — kein PCIe-Übertragungsengpass zwischen CPU- und GPU-Speicher, macOS verwaltet die Zuweisung automatisch. Dual RTX 3090 funktioniert, erfordert aber einen Workstation-Desktop und sorgfältige Treiberkonfiguration.',
        ],
        columns: ['Hardware', 'Gesamt-VRAM', 'Geschwindigkeit'],
        rows: [
          { 'Hardware': 'Dual RTX 3090', 'Gesamt-VRAM': '48 GB', 'Geschwindigkeit': '~8 Tok/s' },
          { 'Hardware': 'RTX 3090 + CPU-Offload', 'Gesamt-VRAM': '24 GB + 32 GB RAM', 'Geschwindigkeit': '~3 Tok/s' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'Gesamt-VRAM': '128 GB unified', 'Geschwindigkeit': '~15 Tok/s' },
          { 'Hardware': 'RunPod H100 (Cloud)', 'Gesamt-VRAM': '80 GB', 'Geschwindigkeit': '~50 Tok/s' },
        ],
      },
      body2: {
        title: 'Wann Cloud sinnvoller ist als lokale Hardware',
        content: [
          'Cloud-GPU-Miete für 70B-Inferenz kostet Stand Mai 2026 ca. 0,50–1,50 USD pro Stunde bei RunPod und Lambda Labs. Ein Dual RTX 3090-Setup kostet ca. 1.200–2.000 € als Hardware — Amortisation gegenüber Cloud-Kosten erst nach 1.500–3.000 Betriebsstunden.',
          'Für Teams oder Einzelpersonen, die 70B-Modelle weniger als 5 Stunden pro Woche nutzen, ist Cloud-Miete sowohl günstiger als auch wartungsärmer. Lokale 70B-Ausführung ist gerechtfertigt für datenschutzkritische Anwendungsfälle (keine Daten verlassen die eigene Hardware) oder dauerhaft hohe Inferenz-Frequenz, bei der Cloud-Kosten schnell eskalieren. Für kleinere Modelle, die auf Consumer-GPUs passen, siehe <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">den VRAM-Tier-Leitfaden</a>.',
          'Für eine vollständige Aufschlüsselung der 70B-Deployment-Strategien, siehe <a href="/de/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">wie man 70B-Modelle mit 24 GB VRAM betreibt</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen zum VRAM-Bedarf von 70B-Modellen',
        faqs: [
          {
            q: 'Kann eine einzelne RTX 3090 ein 70B-Modell ausführen?',
            a: 'Teilweise. Eine einzelne RTX 3090 (24 GB) kann 70B mit CPU-Offload betreiben, die Geschwindigkeit sinkt aber auf ~3 Tok/s — zu langsam für interaktive Nutzung. Vollständige GPU-Inferenz für 70B erfordert 40+ GB kombiniertes VRAM.',
          },
          {
            q: 'Kann ich ein 70B-Modell auf einem MacBook ausführen?',
            a: 'Nur auf M3 Max, M4 Max, M4 Ultra oder M5 Max mit 128 GB Unified Memory. Ein MacBook mit 32 GB RAM kann 70B bei Q4 nicht ausführen. Siehe <a href="/de/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">den RAM-Größenleitfaden</a> für kleinere Modell-Alternativen.',
          },
          {
            q: 'Gibt es einen günstigeren Weg, 70B-Modelle lokal zu betreiben?',
            a: 'Ja — verwenden Sie Q2_K-Quantisierung, um das 70B-Modell auf ~21 GB VRAM zu reduzieren, aber die Qualität verschlechtert sich erheblich. Alternativ liefern 34B-Modelle bei Q5 80–90 % der 70B-Qualität bei halbem VRAM-Bedarf.',
          },
          {
            q: 'Wie unterscheidet sich der VRAM-Bedarf von 70B vs. 13B?',
            a: 'Ein 13B-Modell bei Q4 benötigt ~9 GB VRAM vs. ~40 GB für 70B. Für die meisten Aufgaben — Chat, Coding, Zusammenfassung — deckt ein 13–14B-Modell bei Q5 den Unterschied ab. Siehe <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM-Anforderungen nach Modellgröße</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Verwandte Anleitungen',
      items: [
        '[Wie viel VRAM braucht man für ein lokales LLM?](/de/prompt-bites/how-much-vram-for-local-llm) — VRAM-Tabelle für alle Modellgrößen',
        '[Günstigster Weg, ein 70B-Modell lokal zu betreiben](/de/prompt-bites/cheapest-way-to-run-70b-model-locally) — Kostenpfad bei überteuert Hardware',
        '[Lokaler LLM Hardware-Leitfaden 2026](/de/local-llms/local-llm-hardware-guide-2026) — vollständiger Leitfaden für 70B-fähige Hardware',
        '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) — welche 70B-Modelle den Hardwarepreis wert sind',
      ],
    },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-fr.png',
    title: 'Combien de VRAM pour un modèle 70B ?',
    seoTitle: 'VRAM pour 70B : 3 options 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Un modèle 70B en Q4_K_M nécessite ~40 Go de VRAM. Options : dual RTX 3090 (48 Go), M5 Max 128 Go ou GPU cloud. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modèle 70B en Q4_K_M nécessite environ 40 Go de VRAM',
          'Options matérielles grand public : dual RTX 3090 (48 Go) ou Apple M5 Max avec 128 Go de mémoire unifiée',
          'Pour une utilisation occasionnelle de moins de 5 heures par semaine, la location de GPU cloud à 0,50–1,50 $/h est moins chère que l\'achat de matériel',
        ],
      },
      body1: {
        title: 'Options matérielles pour un modèle 70B',
        content: [
          'En mai 2026, <strong>un modèle 70B en Q4_K_M représente environ 40 Go de poids compressés — 1,7× une RTX 4090 seule et 1,6× une RTX 3090 seule.</strong> C\'est pourquoi le 70B est le palier le plus difficile à exécuter localement : il dépasse la limite des GPU grand public (max. 24 Go) pour entrer dans le territoire des stations de travail. Trois options existent, chacune avec ses compromis.',
          'L\'Apple M5 Max avec 128 Go de mémoire unifiée est l\'option monoposte la plus fluide — sans goulot d\'étranglement PCIe entre la mémoire CPU et GPU, macOS gère l\'allocation automatiquement. Le dual RTX 3090 fonctionne mais nécessite un desktop workstation et une configuration soigneuse des pilotes.',
        ],
        columns: ['Matériel', 'VRAM total', 'Vitesse'],
        rows: [
          { 'Matériel': 'Dual RTX 3090', 'VRAM total': '48 Go', 'Vitesse': '~8 tok/s' },
          { 'Matériel': 'RTX 3090 + déchargement CPU', 'VRAM total': '24 Go + 32 Go RAM', 'Vitesse': '~3 tok/s' },
          { 'Matériel': 'Apple M5 Max 128 Go', 'VRAM total': '128 Go unifié', 'Vitesse': '~15 tok/s' },
          { 'Matériel': 'RunPod H100 (cloud)', 'VRAM total': '80 Go', 'Vitesse': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'Quand le cloud est plus judicieux que le local',
        content: [
          'La location de GPU cloud pour l\'inférence 70B coûte entre 0,50 et 1,50 $ par heure sur RunPod et Lambda Labs en mai 2026. Un setup dual RTX 3090 revient à env. 1 200–2 000 € en matériel, et ne s\'amortit face aux coûts cloud qu\'après 1 500–3 000 heures d\'utilisation.',
          'Pour les équipes ou particuliers utilisant les modèles 70B moins de 5 heures par semaine, la location cloud est à la fois moins chère et plus facile à maintenir. Le 70B local se justifie pour les cas d\'usage sensibles à la confidentialité (aucune donnée ne quitte le matériel) ou pour une inférence fréquente et soutenue où les coûts cloud s\'accumulent rapidement. Pour les modèles plus petits adaptés aux GPU grand public, voir <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">le guide des niveaux VRAM</a>.',
          'Pour une analyse complète des stratégies de déploiement 70B, voir <a href="/fr/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">comment exécuter des modèles 70B avec 24 Go de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes sur le VRAM des modèles 70B',
        faqs: [
          {
            q: 'Une seule RTX 3090 peut-elle faire tourner un modèle 70B ?',
            a: 'Partiellement. Une RTX 3090 seule (24 Go) peut exécuter le 70B avec déchargement CPU, mais la vitesse tombe à ~3 tok/s — trop lent pour une utilisation interactive. L\'inférence GPU complète pour le 70B nécessite 40+ Go de VRAM combiné.',
          },
          {
            q: 'Puis-je faire tourner un modèle 70B sur un MacBook ?',
            a: 'Uniquement sur M3 Max, M4 Max, M4 Ultra ou M5 Max avec 128 Go de mémoire unifiée. Un MacBook avec 32 Go de RAM ne peut pas exécuter le 70B en Q4. Voir <a href="/fr/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">le guide de dimensionnement RAM</a> pour des alternatives plus petites.',
          },
          {
            q: 'Existe-t-il un moyen moins cher d\'exécuter des modèles 70B localement ?',
            a: 'Oui — utilisez la quantisation Q2_K pour ramener le modèle 70B à ~21 Go de VRAM, mais la qualité se dégrade considérablement. Alternativement, les modèles 34B en Q5 offrent 80–90 % de la qualité du 70B pour la moitié des besoins VRAM.',
          },
          {
            q: 'Comment se compare le VRAM d\'un 70B par rapport à un 13B ?',
            a: 'Un modèle 13B en Q4 nécessite ~9 Go de VRAM contre ~40 Go pour le 70B. Pour la plupart des tâches — chat, code, résumé — un modèle 13–14B en Q5 couvre l\'écart. Voir <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">les besoins VRAM par taille de modèle</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Guides connexes',
      items: [
        '[De combien de VRAM avez-vous besoin pour un LLM local ?](/fr/prompt-bites/how-much-vram-for-local-llm) — tableau VRAM pour toutes les tailles de modèles',
        "[Moyen le moins cher d'exécuter un modèle 70B localement](/fr/prompt-bites/cheapest-way-to-run-70b-model-locally) — options économiques quand le matériel dépasse le budget",
        '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — guide complet pour les configurations capables de 70B',
        '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) — quels modèles 70B valent le coût matériel',
      ],
    },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-ja.png',
    title: '70BモデルにはどれくらいのVRAMが必要ですか？',
    seoTitle: '70BモデルのVRAM：3つの方法 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_Mの70Bモデルには約40 GBのVRAMが必要です。デュアルRTX 3090（48 GB）、M5 Max 128 GB統合メモリ、またはクラウドGPUが選択肢です。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_Mの70Bモデルには約40 GBのVRAMが必要です',
          'コンシューマー向けハードウェア：デュアルRTX 3090（48 GB）またはApple M5 Max（128 GB統合メモリ）',
          '週5時間未満の使用であれば、$0.50–$1.50/時のクラウドGPUレンタルの方がハードウェア購入より安価です',
        ],
      },
      body1: {
        title: '70Bモデルを動かすハードウェアの選択肢',
        content: [
          '2026年5月現在、<strong>Q4_K_Mの70Bモデルは約40 GBの圧縮済み重みに相当します — RTX 4090の1.7倍、RTX 3090の1.6倍です。</strong>これが70Bをローカルで動かす最も難しい理由です：コンシューマーGPU（最大24 GB）とワークステーション級ハードウェアの境界を越えています。3つの選択肢があり、それぞれ異なるトレードオフがあります。',
          '128 GB統合メモリ搭載のApple M5 Maxが最もスムーズなシングルマシン選択肢です — CPUとGPUメモリ間のPCIe転送ボトルネックがなく、macOSが自動的にメモリ割り当てを管理します。デュアルRTX 3090も動作しますが、ワークステーション級のデスクトップと慎重なドライバー設定が必要です。',
        ],
        columns: ['ハードウェア', '合計VRAM', '速度'],
        rows: [
          { 'ハードウェア': 'デュアルRTX 3090', '合計VRAM': '48 GB', '速度': '~8トークン/秒' },
          { 'ハードウェア': 'RTX 3090 + CPUオフロード', '合計VRAM': '24 GB + 32 GB RAM', '速度': '~3トークン/秒' },
          { 'ハードウェア': 'Apple M5 Max 128 GB', '合計VRAM': '128 GB統合', '速度': '~15トークン/秒' },
          { 'ハードウェア': 'RunPod H100（クラウド）', '合計VRAM': '80 GB', '速度': '~50トークン/秒' },
        ],
      },
      body2: {
        title: 'クラウドの方がローカルより合理的な場合',
        content: [
          '2026年5月現在、70B推論のクラウドGPUレンタルはRunPodとLambda Labsで1時間あたり$0.50–$1.50です。デュアルRTX 3090のセットアップには$1,500–$2,500のハードウェアコストがかかり、クラウドコストに対して1,500–3,000時間の使用後でのみ元が取れます。',
          '70Bモデルを週5時間未満しか使わないチームや個人にとって、クラウドレンタルは安価で保守も容易です。ローカル70Bが正当化されるのは、プライバシーに敏感なユースケース（データが自分のハードウェアから出ない）や、クラウドコストが急速に積み上がる高頻度の推論です。コンシューマーGPUで動くより小さなモデルについては、<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAMティアガイド</a>を参照してください。',
          '70Bデプロイ戦略の詳細については、<a href="/ja/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">24 GB VRAMで70Bモデルを動かす方法</a>を参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '70BモデルのVRAMに関するよくある質問',
        faqs: [
          {
            q: 'RTX 3090 1枚で70Bモデルを動かせますか？',
            a: '部分的には可能です。RTX 3090 1枚（24 GB）はCPUオフロードで70Bを動かせますが、速度は約3トークン/秒に落ちます — インタラクティブな使用には遅すぎます。70Bの完全GPU推論には合計40+ GBのVRAMが必要です。',
          },
          {
            q: 'MacBookで70Bモデルを動かせますか？',
            a: '128 GB統合メモリを搭載したM3 Max、M4 Max、M4 Ultra、またはM5 Maxのみ可能です。32 GB RAMのMacBookではQ4で70Bを動かせません。より小さなモデルの代替については<a href="/ja/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">RAMサイジングガイド</a>をご覧ください。',
          },
          {
            q: '70Bモデルをローカルで動かす安価な方法はありますか？',
            a: 'はい — Q2_K量化を使うと70Bモデルを約21 GB VRAMに抑えられますが、品質は大幅に低下します。代替として、Q5の34Bモデルは70B品質の80–90%をVRAM必要量の半分で実現します。',
          },
          {
            q: '70BのVRAM必要量は13Bと比べてどうですか？',
            a: '13BモデルのQ4は約9 GB VRAMが必要で、70Bの約40 GBとは大きな差があります。チャット、コーディング、要約など多くのタスクでは、Q5の13–14Bモデルでその差を埋められます。<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">モデルサイズ別のVRAM必要量</a>を参照してください。',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: '関連ガイド',
      items: [
        '[ローカルLLMに必要なVRAM量は？](/ja/prompt-bites/how-much-vram-for-local-llm) — 全モデルサイズのVRAM早見表',
        '[70Bモデルをローカルで動かす最安の方法](/ja/prompt-bites/cheapest-way-to-run-70b-model-locally) — ハードウェア予算超過時のコスト選択肢',
        '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — 70B対応構成の完全ガイド',
        '[ベストローカルLLM 2026](/ja/local-llms/best-local-llms-2026) — ハードウェアコストに見合う70Bモデル',
      ],
    },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-zh.png',
    title: '运行70B模型需要多少显存？',
    seoTitle: '70B模型VRAM：3种方案 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M量化的70B模型需要约40 GB显存。选项：双RTX 3090（48 GB）、M5 Max 128 GB统一内存或云端GPU。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M量化的70B模型需要约40 GB显存',
          '消费级硬件选项：双RTX 3090（48 GB）或Apple M5 Max（128 GB统一内存）',
          '每周使用不足5小时的情况下，$0.50–$1.50/小时的云端GPU租用比购买硬件更经济',
        ],
      },
      body1: {
        title: '运行70B模型的硬件选项',
        content: [
          '截至2026年5月，<strong>Q4_K_M量化的70B模型约有40 GB压缩权重——相当于单张RTX 4090的1.7倍，单张RTX 3090的1.6倍。</strong>这就是为什么70B是本地运行最困难的层级：它跨越了消费级GPU（最大24 GB）与工作站级硬件的界限。有三种方案可供选择，各有不同的权衡。',
          '搭载128 GB统一内存的Apple M5 Max是最流畅的单机选择——CPU和GPU内存之间没有PCIe传输瓶颈，macOS自动管理内存分配。双RTX 3090也可行，但需要工作站级台式机和细致的驱动程序配置。',
        ],
        columns: ['硬件', '显存总量', '速度'],
        rows: [
          { '硬件': '双RTX 3090', '显存总量': '48 GB', '速度': '~8 tok/s' },
          { '硬件': 'RTX 3090 + CPU卸载', '显存总量': '24 GB + 32 GB RAM', '速度': '~3 tok/s' },
          { '硬件': 'Apple M5 Max 128 GB', '显存总量': '128 GB统一内存', '速度': '~15 tok/s' },
          { '硬件': 'RunPod H100（云端）', '显存总量': '80 GB', '速度': '~50 tok/s' },
        ],
      },
      body2: {
        title: '何时云端比本地更合理',
        content: [
          '截至2026年5月，RunPod和Lambda Labs上70B推理的云端GPU租用费用为每小时$0.50–$1.50。双RTX 3090配置的硬件成本为$1,500–$2,500，需要使用1,500–3,000小时后才能摊平云端成本。',
          '对于每周使用70B模型不足5小时的团队或个人，云端租用既更便宜又更易维护。本地70B适用于隐私敏感场景（数据不离开自有硬件）或高频推理场景（云端成本快速累积）。对于适合消费级GPU的较小模型，请参阅<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">显存层级指南</a>。',
          '70B部署策略的完整分析，请参阅<a href="/zh/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">如何用24 GB显存运行70B模型</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于70B模型显存的常见问题',
        faqs: [
          {
            q: '单张RTX 3090能运行70B模型吗？',
            a: '部分可行。单张RTX 3090（24 GB）可通过CPU卸载运行70B，但速度降至约3 tok/s——对交互式使用太慢。70B的完整GPU推理需要40+ GB组合显存。',
          },
          {
            q: '能在MacBook上运行70B模型吗？',
            a: '仅限搭载128 GB统一内存的M3 Max、M4 Max、M4 Ultra或M5 Max。32 GB RAM的MacBook无法以Q4运行70B。较小模型的替代方案请参阅<a href="/zh/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">RAM容量指南</a>。',
          },
          {
            q: '有没有更便宜的方式在本地运行70B模型？',
            a: '有——使用Q2_K量化可将70B模型降至约21 GB显存，但质量会显著下降。另一选择是Q5量化的34B模型，以一半的显存需求提供70B质量的80–90%。',
          },
          {
            q: '70B与13B的显存需求对比如何？',
            a: 'Q4量化的13B模型约需9 GB显存，而70B约需40 GB。对于大多数任务——聊天、编程、摘要——Q5量化的13–14B模型可以弥补差距。请参阅<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">按模型大小划分的显存需求</a>。',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: '相关指南',
      items: [
        '[本地LLM需要多少VRAM？](/zh/prompt-bites/how-much-vram-for-local-llm) — 所有模型大小的VRAM快速参考表',
        '[本地运行70B模型的最便宜方式](/zh/prompt-bites/cheapest-way-to-run-70b-model-locally) — 硬件超预算时的低成本路径',
        '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) — 70B级别配置完整指南',
        '[2026年最佳本地LLMs](/zh/local-llms/best-local-llms-2026) — 哪些70B模型值得硬件成本',
      ],
    },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-pt.png',
    title: 'Quanta VRAM um modelo 70B precisa?',
    seoTitle: 'VRAM para 70B: 3 opções 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Um modelo 70B em Q4_K_M precisa de ~40 GB de VRAM. Opções: dois RTX 3090 (48 GB), M5 Max com 128 GB de memória unificada ou GPU na nuvem. Resposta rápida do PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Quanta VRAM um modelo 70B precisa?',
        answer: 'Um modelo 70B em Q4_K_M precisa de aproximadamente 40 GB de VRAM. Opções de consumo: dois RTX 3090 (48 GB no total), M5 Max com 128 GB de memória unificada ou aluguel de GPU na nuvem.',
        bullets: [
          'Q4_K_M 70B: ~40 GB de VRAM necessários',
          'Dois RTX 3090 (48 GB no total): opção de desktop de consumo',
          'M5 Max com 128 GB de memória unificada: melhor experiência em um único equipamento',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Um modelo 70B em Q4_K_M precisa de aproximadamente 40 GB de VRAM',
          'Opções de hardware de consumo: dois RTX 3090 (48 GB) ou Apple M5 Max com 128 GB de memória unificada',
          'Para uso ocasional de menos de 5 horas por semana, o aluguel de GPU na nuvem a $0,50–$1,50/hora é mais barato que comprar hardware',
        ],
      },
      body1: {
        title: 'Opções de hardware para executar um modelo 70B',
        content: [
          'Em maio de 2026, <strong>um modelo 70B em Q4_K_M representa aproximadamente 40 GB de pesos comprimidos — 1,7× uma RTX 4090 individual e 1,6× uma RTX 3090 individual.</strong> Por isso 70B é o nível mais difícil de executar localmente: ele cruza a fronteira entre GPUs de consumo (máx. 24 GB) e hardware de workstation. Existem três caminhos, cada um com diferentes trade-offs.',
          'Apple M5 Max com 128 GB de memória unificada é a opção de equipamento único mais fluida — sem gargalo PCIe entre a memória CPU e GPU, e o macOS gerencia a alocação automaticamente. Dois RTX 3090 funcionam, mas exigem um desktop de nível workstation e configuração cuidadosa de drivers.',
        ],
        columns: ['Hardware', 'VRAM total', 'Velocidade'],
        rows: [
          { 'Hardware': 'Dois RTX 3090', 'VRAM total': '48 GB', 'Velocidade': '~8 tok/s' },
          { 'Hardware': 'RTX 3090 + offload CPU', 'VRAM total': '24 GB + 32 GB RAM', 'Velocidade': '~3 tok/s' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'VRAM total': '128 GB unificada', 'Velocidade': '~15 tok/s' },
          { 'Hardware': 'RunPod H100 (nuvem)', 'VRAM total': '80 GB', 'Velocidade': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'Quando a nuvem faz mais sentido que o local',
        content: [
          'O aluguel de GPU na nuvem para inferência 70B custa $0,50–$1,50 por hora no RunPod e Lambda Labs em maio de 2026. Uma configuração de dois RTX 3090 custa $1.500–$2.500 em hardware, que amortiza para os custos de nuvem apenas após 1.500–3.000 horas de uso.',
          'Para equipes ou indivíduos que usam modelos 70B menos de 5 horas por semana, o aluguel na nuvem é tanto mais barato quanto mais fácil de manter. O 70B local se justifica para casos de uso sensíveis à privacidade (sem dados saindo do seu hardware) ou inferência de alta frequência sustentada onde os custos de nuvem se acumulam rapidamente. Para modelos menores que cabem em GPUs de consumo, veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">o guia de níveis de VRAM</a>.',
          'Para uma análise completa das estratégias de implantação 70B, veja <a href="/pt/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">como executar modelos 70B com 24 GB de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre VRAM para modelos 70B',
        faqs: [
          {
            q: 'Um único RTX 3090 pode executar um modelo 70B?',
            a: 'Parcialmente. Um único RTX 3090 (24 GB) pode executar 70B com offload para CPU, mas a velocidade cai para ~3 tok/s — muito lento para uso interativo. A inferência GPU completa para 70B requer 40+ GB de VRAM combinada.',
          },
          {
            q: 'Posso executar um modelo 70B em um MacBook?',
            a: 'Apenas no M3 Max, M4 Max, M4 Ultra ou M5 Max com 128 GB de memória unificada. Um MacBook com 32 GB de RAM não pode executar 70B em Q4. Veja <a href="/pt/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">o guia de dimensionamento de RAM</a> para alternativas com modelos menores.',
          },
          {
            q: 'Existe uma forma mais barata de executar modelos 70B localmente?',
            a: 'Sim — use quantização Q2_K para reduzir o modelo 70B para ~21 GB de VRAM, mas a qualidade degrada significativamente. Alternativamente, modelos 34B em Q5 oferecem 80–90% da qualidade do 70B com metade da necessidade de VRAM.',
          },
          {
            q: 'Como a VRAM do 70B se compara a um modelo 13B?',
            a: 'Um modelo 13B em Q4 precisa de ~9 GB de VRAM vs ~40 GB para 70B. Para a maioria das tarefas — chat, codificação, resumo — um modelo 13–14B em Q5 cobre a diferença. Veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">requisitos de VRAM por tamanho de modelo</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Guias Relacionados',
      items: [
        '[Quanto VRAM Você Precisa para um LLM Local?](/pt/prompt-bites/how-much-vram-for-local-llm) — tabela de VRAM para todos os tamanhos de modelo',
        '[Forma Mais Barata de Executar um Modelo 70B Localmente](/pt/prompt-bites/cheapest-way-to-run-70b-model-locally) — opções de baixo custo quando o hardware excede o orçamento',
        '[Guia de Hardware LLM Local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — guia completo para configurações capazes de 70B',
        '[Melhores LLMs Locais 2026](/pt/local-llms/best-local-llms-2026) — quais modelos 70B valem o custo do hardware',
      ],
    },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-es.png',
    title: '¿Cuánta VRAM necesita un modelo 70B?',
    seoTitle: 'VRAM para 70B: 3 opciones 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Un modelo 70B en Q4_K_M necesita ~40 GB de VRAM. Opciones: dual RTX 3090 (48 GB), M5 Max con 128 GB unificados o GPU cloud. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Cuánta VRAM necesita un modelo 70B?',
        answer: 'Un modelo 70B en Q4_K_M necesita aproximadamente 40 GB de VRAM. Opciones de consumo: dos RTX 3090 (48 GB en total), M5 Max con 128 GB de memoria unificada, o alquiler de GPU en la nube.',
        bullets: [
          'Q4_K_M 70B: ~40 GB de VRAM necesarios',
          'Dual RTX 3090 (48 GB en total): opción de escritorio de consumo',
          'M5 Max 128 GB de memoria unificada: mejor experiencia en un solo equipo',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modelo 70B en Q4_K_M necesita aproximadamente 40 GB de VRAM',
          'Opciones de hardware de consumo: dual RTX 3090 (48 GB) o Apple M5 Max con 128 GB de memoria unificada',
          'Para uso ocasional de menos de 5 horas por semana, el alquiler de GPU en la nube a $0,50–$1,50/h es más barato que comprar hardware',
        ],
      },
      body1: {
        title: 'Opciones de hardware para ejecutar un modelo 70B',
        content: [
          'A mayo de 2026, <strong>un modelo 70B en Q4_K_M representa aproximadamente 40 GB de pesos comprimidos — 1,7× una RTX 4090 individual y 1,6× una RTX 3090 individual.</strong> Por eso 70B es el nivel más difícil de ejecutar localmente: cruza la frontera entre las GPUs de consumo (máx. 24 GB) y el hardware de estación de trabajo. Existen tres caminos, cada uno con diferentes compromisos.',
          'Apple M5 Max con 128 GB de memoria unificada es la opción de equipo único más fluida — sin cuello de botella PCIe entre la memoria CPU y GPU, y macOS gestiona la asignación automáticamente. Los dual RTX 3090 funcionan pero requieren un escritorio de nivel estación de trabajo y una configuración cuidadosa de controladores.',
        ],
        columns: ['Hardware', 'VRAM total', 'Velocidad'],
        rows: [
          { 'Hardware': 'Dual RTX 3090', 'VRAM total': '48 GB', 'Velocidad': '~8 tok/s' },
          { 'Hardware': 'RTX 3090 + offload CPU', 'VRAM total': '24 GB + 32 GB RAM', 'Velocidad': '~3 tok/s' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'VRAM total': '128 GB unificada', 'Velocidad': '~15 tok/s' },
          { 'Hardware': 'RunPod H100 (nube)', 'VRAM total': '80 GB', 'Velocidad': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'Cuándo la nube tiene más sentido que lo local',
        content: [
          'El alquiler de GPU en la nube para inferencia 70B cuesta $0,50–$1,50 por hora en RunPod y Lambda Labs a mayo de 2026. Un setup de dual RTX 3090 cuesta $1.500–$2.500 en hardware, que se amortiza respecto a los costes de nube solo después de 1.500–3.000 horas de uso.',
          'Para equipos o individuos que usan modelos 70B menos de 5 horas por semana, el alquiler en la nube es tanto más barato como más fácil de mantener. El 70B local se justifica para casos de uso sensibles a la privacidad (sin datos saliendo de tu hardware) o inferencia sostenida de alta frecuencia donde los costes de nube se acumulan rápidamente. Para modelos más pequeños que caben en GPUs de consumo, consulta <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">la guía de niveles de VRAM</a>.',
          'Para un desglose completo de estrategias de despliegue 70B, consulta <a href="/es/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">cómo ejecutar modelos 70B con 24 GB de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la VRAM de modelos 70B',
        faqs: [
          {
            q: '¿Puede una sola RTX 3090 ejecutar un modelo 70B?',
            a: 'Parcialmente. Una sola RTX 3090 (24 GB) puede ejecutar el 70B con offloading a CPU, pero la velocidad cae a ~3 tok/s — demasiado lenta para uso interactivo. La inferencia GPU completa para el 70B requiere 40+ GB de VRAM combinada.',
          },
          {
            q: '¿Puedo ejecutar un modelo 70B en un MacBook?',
            a: 'Solo en M3 Max, M4 Max, M4 Ultra o M5 Max con 128 GB de memoria unificada. Un MacBook con 32 GB de RAM no puede ejecutar el 70B en Q4. Consulta <a href="/es/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">la guía de dimensionamiento de RAM</a> para alternativas más pequeñas.',
          },
          {
            q: '¿Hay alguna forma más barata de ejecutar modelos 70B localmente?',
            a: 'Sí — usa cuantización Q2_K para bajar el modelo 70B a ~21 GB de VRAM, pero la calidad se degrada significativamente. Alternativamente, los modelos 34B en Q5 ofrecen el 80–90% de la calidad del 70B con la mitad del requisito de VRAM.',
          },
          {
            q: '¿Cómo se compara la VRAM de un 70B con un modelo 13B?',
            a: 'Un modelo 13B en Q4 necesita ~9 GB de VRAM frente a ~40 GB del 70B. Para la mayoría de las tareas — chat, programación, resúmenes — un modelo 13–14B en Q5 cubre la diferencia. Consulta <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">los requisitos de VRAM por tamaño de modelo</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'Guías Relacionadas',
      items: [
        '[¿Cuánta VRAM Necesitas para un LLM Local?](/es/prompt-bites/how-much-vram-for-local-llm) — tabla de VRAM para todos los tamaños de modelo',
        '[Forma Más Barata de Ejecutar un Modelo 70B Localmente](/es/prompt-bites/cheapest-way-to-run-70b-model-locally) — opciones de bajo costo cuando el hardware supera el presupuesto',
        '[Guía de Hardware LLM Local 2026](/es/local-llms/local-llm-hardware-guide-2026) — guía completa para configuraciones capaces de 70B',
        '[Mejores LLMs Locales 2026](/es/local-llms/best-local-llms-2026) — qué modelos 70B valen el costo del hardware',
      ],
    },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-ar.png',
    title: 'كم من ⁨VRAM⁩ يحتاج نموذج ⁨70B⁩؟',
    seoTitle: '⁨VRAM⁩ لنموذج ⁨70B⁩: ⁨3⁩ خيارات ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'نموذج ⁨70B⁩ بـ ⁨Q4⁩_⁨K⁩_⁨M⁩ يحتاج ~⁨40 GB VRAM⁩. الخيارات: ⁨RTX 3090⁩ مزدوجة (⁨48 GB⁩) أو ⁨M5 Max 128 GB⁩ ذاكرة موحدة أو ⁨GPU⁩ سحابية بـ $⁨0.50⁩/ساعة.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'كم من VRAM يحتاج نموذج 70B؟',
        answer: 'نموذج 70B بـ Q4_K_M يحتاج تقريبًا 40 GB VRAM. خيارات المستهلك: RTX 3090 مزدوجة (48 GB إجمالي)، M5 Max بـ 128 GB ذاكرة موحدة، أو استئجار GPU سحابية.',
        bullets: [
          'Q4_K_M 70B: ~40 GB VRAM مطلوبة',
          'RTX 3090 مزدوجة (48 GB إجمالي): خيار سطح المكتب للمستهلك',
          'M5 Max 128 GB ذاكرة موحدة: أفضل تجربة على جهاز واحد',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'نموذج 70B بـ Q4_K_M يحتاج تقريبًا 40 GB VRAM',
          'خيارات المستهلك: RTX 3090 مزدوجة (48 GB) أو Apple M5 Max بـ 128 GB ذاكرة موحدة',
          'للاستخدام العرضي الأقل من 5 ساعات أسبوعيًا، استئجار GPU سحابية بـ $0.50–$1.50/ساعة أرخص من شراء الأجهزة',
        ],
      },
      body1: {
        title: 'خيارات الأجهزة لتشغيل نموذج 70B',
        content: [
          'اعتبارًا من مايو 2026، <strong>يمثل نموذج 70B بـ Q4_K_M تقريبًا 40 GB من الأوزان المضغوطة — 1.7× RTX 4090 منفردة و1.6× RTX 3090 منفردة.</strong> لهذا يُعدّ 70B المستوى الأصعب في التشغيل محليًا: يتجاوز حدود GPU المستهلك (أقصى 24 GB) إلى أجهزة محطة العمل. توجد ثلاثة مسارات، لكل منها مقايضات مختلفة.',
          'Apple M5 Max بـ 128 GB من الذاكرة الموحدة هو الخيار الأكثر سلاسة كجهاز واحد — بدون اختناق PCIe بين ذاكرة CPU و GPU، ويدير macOS التخصيص تلقائيًا. تعمل RTX 3090 المزدوجة، لكنها تتطلب سطح مكتب بمستوى محطة العمل وإعداد تعريفات دقيق.',
        ],
        columns: ['الجهاز', 'إجمالي VRAM', 'السرعة'],
        rows: [
          { 'الجهاز': 'RTX 3090 مزدوجة', 'إجمالي VRAM': '48 GB', 'السرعة': '~8 tok/s' },
          { 'الجهاز': 'RTX 3090 + تفريغ CPU', 'إجمالي VRAM': '24 GB + 32 GB RAM', 'السرعة': '~3 tok/s' },
          { 'الجهاز': 'Apple M5 Max 128 GB', 'إجمالي VRAM': '128 GB موحدة', 'السرعة': '~15 tok/s' },
          { 'الجهاز': 'RunPod H100 (سحابة)', 'إجمالي VRAM': '80 GB', 'السرعة': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'متى تكون السحابة أجدى من المحلي',
        content: [
          'يبلغ استئجار GPU سحابية لاستنتاج 70B ما بين $0.50–$1.50 في الساعة على RunPod و Lambda Labs اعتبارًا من مايو 2026. يكلف إعداد RTX 3090 المزدوجة $1,500–$2,500 في الأجهزة، وهو ما يُستهلك مقابل تكاليف السحابة فقط بعد 1,500–3,000 ساعة استخدام.',
          'للفرق أو الأفراد الذين يستخدمون نماذج 70B أقل من 5 ساعات أسبوعيًا، يكون الاستئجار السحابي أرخص وأسهل صيانةً. يُبرَّر 70B المحلي لحالات الاستخدام الحساسة للخصوصية (دون خروج بيانات من أجهزتك) أو الاستنتاج المتكرر عالي التردد حيث تتراكم تكاليف السحابة بسرعة. للنماذج الأصغر التي تتسع في GPU المستهلك، راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">دليل مستويات VRAM</a>.',
          'للاطلاع على تحليل كامل لاستراتيجيات نشر 70B، راجع <a href="/ar/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">كيفية تشغيل نماذج 70B بـ 24 GB VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول VRAM لنماذج 70B',
        faqs: [
          {
            q: 'هل يمكن لـ RTX 3090 منفردة تشغيل نموذج 70B؟',
            a: 'جزئيًا. يمكن لـ RTX 3090 منفردة (24 GB) تشغيل 70B مع تفريغ إلى وحدة المعالجة المركزية، لكن تنخفض السرعة إلى ~3 tok/s — بطيء جدًا للاستخدام التفاعلي. يتطلب الاستنتاج الكامل على GPU لنموذج 70B 40+ GB VRAM مشتركة.',
          },
          {
            q: 'هل يمكنني تشغيل نموذج 70B على MacBook؟',
            a: 'فقط على M3 Max أو M4 Max أو M4 Ultra أو M5 Max بـ 128 GB ذاكرة موحدة. MacBook بـ 32 GB RAM لا يستطيع تشغيل 70B بـ Q4. راجع <a href="/ar/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">دليل تحجيم RAM</a> للبدائل الأصغر.',
          },
          {
            q: 'هل توجد طريقة أرخص لتشغيل نماذج 70B محليًا؟',
            a: 'نعم — استخدم كميّة Q2_K لخفض نموذج 70B إلى ~21 GB VRAM، لكن الجودة تتدهور بشكل ملحوظ. بديلًا، تقدم نماذج 34B بـ Q5 ما بين 80–90% من جودة 70B بنصف متطلبات VRAM.',
          },
          {
            q: 'كيف تُقارَن VRAM لنموذج 70B بنموذج 13B؟',
            a: 'نموذج 13B بـ Q4 يحتاج ~9 GB VRAM مقابل ~40 GB لنموذج 70B. لمعظم المهام — الدردشة والبرمجة والتلخيص — يسد نموذج 13–14B بـ Q5 الفارق. راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">متطلبات VRAM حسب حجم النموذج</a>.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: 'أدلة ذات صلة',
      items: [
        '[كم تحتاج من VRAM لتشغيل نموذج LLM محلي؟](/ar/prompt-bites/how-much-vram-for-local-llm) — جدول VRAM لجميع أحجام النماذج',
        '[أرخص طريقة لتشغيل نموذج 70B محلياً](/ar/prompt-bites/cheapest-way-to-run-70b-model-locally) — خيارات التكلفة المنخفضة عند تجاوز ميزانية الأجهزة',
        '[دليل أجهزة LLM المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026) — الدليل الكامل لتكوينات قادرة على 70B',
        '[أفضل LLMs المحلية 2026](/ar/local-llms/best-local-llms-2026) — أي نماذج 70B تستحق تكلفة الأجهزة',
      ],
    },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/vram-for-70b-model-overview-hero-ko.png',
    title: '70B 모델에 VRAM이 얼마나 필요합니까?',
    seoTitle: '70B VRAM: 3가지 실행 옵션 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M 방식의 70B 모델은 약 40 GB의 VRAM이 필요합니다. 옵션: 듀얼 RTX 3090(48 GB), M5 Max 128 GB 통합 메모리, 또는 클라우드 GPU. PromptQuorum의 빠른 답변.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ko: {
        question: '70B 모델에 VRAM이 얼마나 필요합니까?',
        answer: 'Q4_K_M 방식의 70B 모델은 약 40 GB의 VRAM이 필요합니다. 소비자용 옵션: 듀얼 RTX 3090(48 GB 합계), M5 Max 128 GB 통합 메모리, 또는 클라우드 GPU 임대.',
        bullets: [
          'Q4_K_M 70B: 약 40 GB VRAM 필요',
          '듀얼 RTX 3090(48 GB 합계): 소비자용 데스크톱 옵션',
          'M5 Max 128 GB 통합 메모리: 단일 기기 최고 경험',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M 방식의 70B 모델은 약 40 GB의 VRAM이 필요합니다.',
          '소비자용 하드웨어 옵션: 듀얼 RTX 3090(48 GB) 또는 Apple M5 Max 128 GB 통합 메모리',
          '주 5시간 미만의 간헐적 사용의 경우, RunPod 등 클라우드 GPU 임대($0.50–$1.50/시간)가 하드웨어 구매보다 저렴합니다.',
        ],
      },
      body1: {
        title: '70B 모델 실행을 위한 하드웨어 옵션',
        content: [
          '2026년 5월 기준으로, <strong>Q4_K_M 방식의 70B 모델은 약 40 GB의 압축 가중치를 나타냅니다 — 단일 RTX 4090의 1.7배, 단일 RTX 3090의 1.6배에 해당합니다.</strong> 이 때문에 70B는 로컬 실행 중 가장 어려운 수준입니다. 소비자용 GPU(최대 24 GB)와 워크스테이션 하드웨어의 경계를 넘기 때문입니다. 각각 다른 절충안을 가진 세 가지 경로가 있습니다.',
          'Apple M5 Max 128 GB 통합 메모리는 단일 기기로 가장 원활한 옵션입니다 — CPU와 GPU 메모리 간 PCIe 병목이 없으며 macOS가 자동으로 할당을 관리합니다. 듀얼 RTX 3090도 작동하지만, 워크스테이션 수준의 데스크톱과 신중한 드라이버 설정이 필요합니다.',
        ],
        columns: ['하드웨어', 'VRAM 합계', '속도'],
        rows: [
          { '하드웨어': '듀얼 RTX 3090', 'VRAM 합계': '48 GB', '속도': '~8 tok/s' },
          { '하드웨어': 'RTX 3090 + CPU 오프로드', 'VRAM 합계': '24 GB + 32 GB RAM', '속도': '~3 tok/s' },
          { '하드웨어': 'Apple M5 Max 128 GB', 'VRAM 합계': '128 GB 통합', '속도': '~15 tok/s' },
          { '하드웨어': 'RunPod H100 (클라우드)', 'VRAM 합계': '80 GB', '속도': '~50 tok/s' },
        ],
      },
      body2: {
        title: '클라우드가 로컬보다 유리한 경우',
        content: [
          '2026년 5월 기준으로, RunPod 및 Lambda Labs에서 70B 추론용 클라우드 GPU 임대 비용은 시간당 $0.50–$1.50입니다. 듀얼 RTX 3090 구성은 하드웨어 비용이 $1,500–$2,500이며, 1,500–3,000시간의 사용 후에야 클라우드 비용 대비 본전을 찾을 수 있습니다.',
          '70B 모델을 주당 5시간 미만으로 사용하는 팀이나 개인에게는 클라우드 임대가 더 저렴하고 유지 관리도 쉽습니다. 로컬 70B 실행은 프라이버시에 민감한 사용 사례(하드웨어 외부로 데이터가 나가지 않음) 또는 클라우드 비용이 빠르게 누적되는 고빈도 지속 추론에 적합합니다. 소비자용 GPU에 맞는 소형 모델의 경우, <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM 계층 가이드</a>를 참조하십시오.',
          '70B 배포 전략의 전체 분석은 <a href="/ko/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">24 GB VRAM으로 70B 모델 실행하는 방법</a>을 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '70B 모델의 VRAM에 관한 빠른 답변',
        faqs: [
          {
            q: '단일 RTX 3090으로 70B 모델을 실행할 수 있습니까?',
            a: '부분적으로 가능합니다. 단일 RTX 3090(24 GB)은 CPU 오프로딩을 통해 70B를 실행할 수 있지만, 속도가 약 3 tok/s로 떨어져 대화형 사용에는 너무 느립니다. 70B의 완전한 GPU 추론에는 40 GB 이상의 합산 VRAM이 필요합니다.',
          },
          {
            q: 'MacBook에서 70B 모델을 실행할 수 있습니까?',
            a: '128 GB 통합 메모리를 갖춘 M3 Max, M4 Max, M4 Ultra 또는 M5 Max에서만 가능합니다. 32 GB RAM의 MacBook은 Q4 방식의 70B를 실행할 수 없습니다. 소형 모델 대안에 대해서는 <a href="/ko/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">RAM 규모 산정 가이드</a>를 참조하십시오.',
          },
          {
            q: '70B 모델을 로컬에서 더 저렴하게 실행하는 방법이 있습니까?',
            a: 'Q2_K 양자화를 사용하면 70B 모델을 약 21 GB VRAM으로 낮출 수 있지만, 품질이 크게 저하됩니다. 또는 Q5 방식의 34B 모델이 VRAM 요구량의 절반으로 70B 품질의 80–90%를 제공합니다.',
          },
          {
            q: '70B 모델의 VRAM은 13B 모델과 어떻게 비교됩니까?',
            a: 'Q4 방식의 13B 모델은 약 9 GB VRAM이 필요한 반면, 70B는 약 40 GB가 필요합니다. 대부분의 작업(채팅, 코딩, 요약)에서는 Q5 방식의 13–14B 모델이 차이를 메울 수 있습니다. <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">모델 크기별 VRAM 요구 사항</a>을 참조하십시오.',
          },
        ],
      },
    relatedBites: {
      id: 'related-articles',
      title: '관련 가이드',
      items: [
        '[로컬 LLM에 VRAM이 얼마나 필요한가?](/ko/prompt-bites/how-much-vram-for-local-llm) — 모든 모델 크기의 VRAM 참조 표',
        '[70B 모델을 로컬에서 실행하는 가장 저렴한 방법](/ko/prompt-bites/cheapest-way-to-run-70b-model-locally) — 하드웨어가 예산을 초과할 때의 비용 경로',
        '[로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026) — 70B 지원 구성을 위한 완전한 가이드',
        '[2026년 최고의 로컬 LLMs](/ko/local-llms/best-local-llms-2026) — 하드웨어 비용에 가치 있는 70B 모델',
      ],
    },
    },
  },
}
