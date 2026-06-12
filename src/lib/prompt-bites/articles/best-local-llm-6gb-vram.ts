import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Local LLM for 6 GB VRAM?',
    seoTitle: '6 GB VRAM: Best Local LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M (5.5 GB) is the top pick for 6 GB VRAM. Phi-4 Q4 and Mistral Small Q4_K_S are solid alternatives. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Phi-4', 'Mistral Small'],
    current_hardware_mentioned: ['RTX 3050', 'RTX 4050'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 6 GB VRAM GPUs or 16 GB MacBooks',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['best-ollama-models-4gb-vram', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for 6 GB VRAM?',
        answer: 'With 6 GB VRAM, Llama 3 8B Q4_K_M is the top pick at ~5.5 GB with excellent chat and coding capabilities at ~20 tok/s. Phi-4 Q4_K_M and Mistral Small Q4_K_S are solid alternatives.',
        bullets: [
          'Llama 3 8B Q4_K_M: best overall for 6 GB (5.5 GB VRAM)',
          'Phi-4 Q4_K_M: best for instruction following',
          'Mistral Small Q4_K_S: fastest at 6 GB',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes lokales LLM für 6 GB VRAM?',
        answer: 'Mit 6 GB VRAM ist Llama 3 8B Q4_K_M die erste Wahl mit ~5,5 GB, bietet hervorragende Chat- und Coding-Fähigkeiten bei ~20 tok/s. Phi-4 Q4_K_M und Mistral Small Q4_K_S sind solide Alternativen.',
        bullets: [
          'Llama 3 8B Q4_K_M: beste Gesamtwahl für 6 GB (5,5 GB VRAM)',
          'Phi-4 Q4_K_M: beste Wahl für Instruction Following',
          'Mistral Small Q4_K_S: schnellste Option bei 6 GB',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel est le meilleur LLM local pour 6 Go de VRAM ?',
        answer: 'Avec 6 Go de VRAM, Llama 3 8B Q4_K_M est le meilleur choix à ~5,5 Go avec des capacités excellentes pour chat et code à ~20 tok/s. Phi-4 Q4_K_M et Mistral Small Q4_K_S sont de bonnes alternatives.',
        bullets: [
          'Llama 3 8B Q4_K_M : meilleur choix global pour 6 Go (5,5 Go VRAM)',
          'Phi-4 Q4_K_M : meilleur pour le suivi d\'instructions',
          'Mistral Small Q4_K_S : le plus rapide à 6 Go',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '6 GB VRAMに最適なローカルLLMは？',
        answer: '6 GB VRAMでは、Llama 3 8B Q4_K_M（約5.5 GB）が最もおすすめで、~20 tok/sのチャットとコーディング性能に優れています。Phi-4 Q4_K_MとMistral Small Q4_K_Sも優れた選択肢です。',
        bullets: [
          'Llama 3 8B Q4_K_M：6 GBで最高の総合性能（5.5 GB VRAM）',
          'Phi-4 Q4_K_M：指示追従タスクに最適',
          'Mistral Small Q4_K_S：6 GBで最速',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '6 GB显存最佳本地LLM是什么？',
        answer: '6 GB显存首选Llama 3 8B Q4_K_M（约5.5 GB），在~20 tok/s速度下提供卓越的聊天和编码能力。Phi-4 Q4_K_M和Mistral Small Q4_K_S也是可靠的备选方案。',
        bullets: [
          'Llama 3 8B Q4_K_M：6 GB下综合表现最佳（5.5 GB显存）',
          'Phi-4 Q4_K_M：指令执行任务最佳',
          'Mistral Small Q4_K_S：6 GB下速度最快',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Mejor LLM local para 6 GB de VRAM?',
        answer: 'Con 6 GB de VRAM, Llama 3 8B Q4_K_M es la mejor opción con ~5,5 GB, con excelentes capacidades de chat y programación a ~20 tok/s. Phi-4 Q4_K_M y Mistral Small Q4_K_S son alternativas sólidas.',
        bullets: [
          'Llama 3 8B Q4_K_M: mejor opción general para 6 GB (5,5 GB VRAM)',
          'Phi-4 Q4_K_M: mejor para seguimiento de instrucciones',
          'Mistral Small Q4_K_S: el más rápido en 6 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M is the top pick for 6 GB VRAM: 5.5 GB, ~20 tok/s, excellent for chat and coding',
          'Phi-4 Q4_K_M (5.0 GB) leads on instruction following and reasoning tasks',
          '6 GB VRAM covers RTX 3050/4050 on Windows and any MacBook with 16 GB unified memory',
        ],
      },
      body1: {
        title: 'Top 3 Models for 6 GB VRAM',
        content: [
          'As of May 2026, <strong>6 GB VRAM covers two very different hardware classes: budget Windows laptops (RTX 3050/4050) and any MacBook with 16 GB unified memory.</strong> Performance differs by 30–50% between them — the Mac runs Llama 3 8B Q4_K_M at ~25 tok/s thanks to unified memory bandwidth, while the Windows discrete GPU runs it at ~18 tok/s due to PCIe transfer overhead.',
          'All three models run with Ollama out of the box. Speed figures below assume a 2048-token context window. Extending to 4096 tokens adds ~1 GB — still within 6 GB for Phi-4 and Mistral.',
        ],
        columns: ['Model', 'VRAM', 'Best For'],
        rows: [
          { 'Model': 'Llama 3 8B Q4_K_M', 'VRAM': '5.5 GB', 'Best For': 'General chat, coding' },
          { 'Model': 'Phi-4 Q4_K_M', 'VRAM': '5.0 GB', 'Best For': 'Instructions, reasoning' },
          { 'Model': 'Mistral Small Q4_K_S', 'VRAM': '4.5 GB', 'Best For': 'Speed-first tasks' },
        ],
      },
      body2: {
        title: '6 GB VRAM on Windows vs MacBook',
        content: [
          'On Windows, the RTX 3050 6 GB and RTX 4050 6 GB are the two main GPUs at this tier. Both run Ollama via CUDA with nearly identical performance — the newer RTX 4050 is about 10% faster per watt but not meaningfully faster in practice.',
          'On macOS, any MacBook with 16 GB unified memory has approximately 6 GB available for the GPU workload. Unified memory eliminates the PCIe bandwidth bottleneck that limits discrete GPU cards, so macOS performance is often equal to or better than a discrete RTX 3050.',
          'Upgrading from 6 GB to 8 GB unlocks Q5_K_M quantization on 7–8B models (+3% quality) and faster context windows. For 12 GB options and 14B models, see <a href="/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">best Ollama models for RTX 3060 12 GB</a>. For the full VRAM reference, see <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">how much VRAM a local LLM needs</a>.',
          '<strong>6 GB is the smallest VRAM where a local LLM competes with cloud models on everyday tasks.</strong> Below 6 GB, you are limited to small models that struggle on coding or long-form reasoning. At 6 GB, Llama 3 8B Q4_K_M is fully unlocked — the same model that powers many production AI features. To step up to 14B models, see the <a href="/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">12 GB tier picks</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 6 GB VRAM Models',
        faqs: [
          {
            q: 'Is 6 GB VRAM enough for daily LLM use?',
            a: 'Yes. Llama 3 8B Q4_K_M at ~20 tok/s handles multi-turn chat, code completion, document summarization, and Q&A. Speed is fast enough for interactive use.',
          },
          {
            q: 'Does Llama 3 8B fit in 6 GB VRAM?',
            a: 'Yes at Q4_K_M — the model uses 5.5 GB. A 4096-token context window adds ~1 GB, totaling ~6.5 GB. For strict 6 GB headroom, use a 2048-token context (<code>--num-ctx 2048</code>) or choose Phi-4 Q4_K_M instead.',
          },
          {
            q: 'Can I run 13B or 14B models on 6 GB VRAM?',
            a: 'No. Qwen 14B at Q4_K_M needs ~10 GB VRAM. Upgrading to 12 GB is the minimum for 14B models. See <a href="/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">best Ollama models for RTX 3060 12 GB</a>.',
          },
          {
            q: 'Can I use 6 GB VRAM for image generation too?',
            a: 'Not well. Stable Diffusion XL requires 8 GB VRAM minimum. Running both LLMs and image generation on a 6 GB card means constantly switching — stick to one workload at a time or upgrade to 8 GB.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Bestes lokales LLM für 6 GB VRAM?',
    seoTitle: 'Lokales LLM für 6 GB VRAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M (5,5 GB) ist die erste Wahl für 6 GB VRAM. Phi-4 Q4 und Mistral Small Q4_K_S sind solide Alternativen. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M ist die erste Wahl für 6 GB VRAM: 5,5 GB, ~20 Tok/s, ausgezeichnet für Chat und Coding',
          'Phi-4 Q4_K_M (5,0 GB) führt bei Instruction-Following und Reasoning-Aufgaben',
          '6 GB VRAM deckt RTX 3050/4050 unter Windows und jedes MacBook mit 16 GB Unified Memory ab',
        ],
      },
      body1: {
        title: 'Top 3 Modelle für 6 GB VRAM',
        content: [
          'Stand Mai 2026: <strong>6 GB VRAM deckt zwei sehr unterschiedliche Hardware-Klassen ab: Budget-Windows-Laptops (RTX 3050/4050) und jedes MacBook mit 16 GB Unified Memory.</strong> Die Leistung unterscheidet sich um 30–50 % zwischen ihnen — der Mac führt Llama 3 8B Q4_K_M dank Unified-Memory-Bandbreite mit ~25 Tok/s aus, während die diskrete Windows-GPU durch PCIe-Übertragungsoverhead auf ~18 Tok/s kommt.',
          'Alle drei Modelle laufen mit Ollama ohne spezielle Konfiguration. Geschwindigkeitswerte gelten für ein 2048-Token-Kontextfenster. Erweiterung auf 4096 Tokens fügt ~1 GB hinzu — noch innerhalb von 6 GB für Phi-4 und Mistral.',
        ],
        columns: ['Modell', 'VRAM', 'Anwendungsbereich'],
        rows: [
          { 'Modell': 'Llama 3 8B Q4_K_M', 'VRAM': '5,5 GB', 'Anwendungsbereich': 'Allgemeiner Chat, Coding' },
          { 'Modell': 'Phi-4 Q4_K_M', 'VRAM': '5,0 GB', 'Anwendungsbereich': 'Anweisungen, Reasoning' },
          { 'Modell': 'Mistral Small Q4_K_S', 'VRAM': '4,5 GB', 'Anwendungsbereich': 'Geschwindigkeitspriorisierte Aufgaben' },
        ],
      },
      body2: {
        title: '6 GB VRAM unter Windows vs. MacBook',
        content: [
          'Unter Windows sind RTX 3050 6 GB und RTX 4050 6 GB die beiden Hauptgrafikkarten dieser Kategorie. Beide betreiben Ollama über CUDA mit nahezu identischer Leistung — der neuere RTX 4050 ist etwa 10 % effizienter pro Watt, aber in der Praxis nicht merklich schneller.',
          'Unter macOS verfügt jedes MacBook mit 16 GB Unified Memory über ca. 6 GB für GPU-Workloads. Unified Memory eliminiert den PCIe-Bandbreitenengpass diskreter GPUs, sodass macOS-Leistung oft gleich oder besser als bei einer diskreten RTX 3050 ist.',
          'Ein Upgrade von 6 GB auf 8 GB schaltet Q5_K_M-Quantisierung für 7–8B-Modelle frei (+3 % Qualität) und ermöglicht schnellere Kontextfenster. Für 12-GB-Optionen und 14B-Modelle, siehe <a href="/de/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">beste Ollama-Modelle für RTX 3060 12 GB</a>. Für die vollständige VRAM-Referenz, siehe <a href="/de/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">wie viel VRAM ein lokales LLM benötigt</a>.',
          '<strong>6 GB ist das kleinste VRAM, bei dem ein lokales LLM bei alltäglichen Aufgaben mit Cloud-Modellen konkurriert.</strong> Unterhalb von 6 GB sind Sie auf kleine Modelle beschränkt, die bei Coding oder langer Denkleistung kämpfen. Bei 6 GB ist Llama 3 8B Q4_K_M vollständig freigeschaltet. Für den Schritt zu 14B-Modellen, siehe <a href="/de/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">die 12-GB-Tier-Empfehlungen</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen zu 6-GB-VRAM-Modellen',
        faqs: [
          {
            q: 'Reicht 6 GB VRAM für den täglichen LLM-Einsatz?',
            a: 'Ja. Llama 3 8B Q4_K_M bei ~20 Tok/s bewältigt Multi-Turn-Chat, Code-Vervollständigung, Dokumentenzusammenfassung und Q&A. Die Geschwindigkeit ist für interaktive Nutzung ausreichend.',
          },
          {
            q: 'Passt Llama 3 8B in 6 GB VRAM?',
            a: 'Ja bei Q4_K_M — das Modell verwendet 5,5 GB. Ein 4096-Token-Kontextfenster fügt ~1 GB hinzu, insgesamt ~6,5 GB. Für striktes 6-GB-Headroom verwenden Sie ein 2048-Token-Kontext (<code>--num-ctx 2048</code>) oder wählen Sie stattdessen Phi-4 Q4_K_M.',
          },
          {
            q: 'Kann ich 13B- oder 14B-Modelle mit 6 GB VRAM betreiben?',
            a: 'Nein. Qwen 14B bei Q4_K_M benötigt ~10 GB VRAM. Ein Upgrade auf 12 GB ist das Minimum für 14B-Modelle. Siehe <a href="/de/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">beste Ollama-Modelle für RTX 3060 12 GB</a>.',
          },
          {
            q: 'Kann ich 6 GB VRAM auch für Bildgenerierung nutzen?',
            a: 'Nicht gut. Stable Diffusion XL benötigt mindestens 8 GB VRAM. Wenn Sie sowohl LLMs als auch Bildgenerierung auf einer 6-GB-Karte betreiben, müssen Sie ständig wechseln — bleiben Sie bei einer Aufgabe oder upgraden Sie auf 8 GB.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Meilleur LLM local pour 6 Go de VRAM ?',
    seoTitle: '6 Go VRAM : meilleur LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M (5,5 Go) est le premier choix pour 6 Go de VRAM. Phi-4 Q4 et Mistral Small Q4_K_S sont des alternatives. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M est le meilleur choix pour 6 Go de VRAM : 5,5 Go, ~20 tok/s, excellent pour le chat et le code',
          'Phi-4 Q4_K_M (5,0 Go) est en tête pour le suivi d\'instructions et le raisonnement',
          '6 Go de VRAM couvre les RTX 3050/4050 sous Windows et tout MacBook avec 16 Go de mémoire unifiée',
        ],
      },
      body1: {
        title: 'Top 3 des modèles pour 6 Go de VRAM',
        content: [
          'En mai 2026, <strong>6 Go de VRAM couvre deux classes de matériel très différentes : les laptops Windows entrée de gamme (RTX 3050/4050) et tout MacBook avec 16 Go de mémoire unifiée.</strong> Les performances diffèrent de 30 à 50 % entre les deux — le Mac exécute Llama 3 8B Q4_K_M à ~25 tok/s grâce à la bande passante de la mémoire unifiée, tandis que le GPU discret Windows tourne à ~18 tok/s en raison du surcoût de transfert PCIe.',
          'Les trois modèles fonctionnent avec Ollama sans configuration particulière. Les vitesses ci-dessous sont mesurées avec une fenêtre de contexte de 2 048 tokens. Étendre à 4 096 tokens ajoute ~1 Go — toujours dans la limite de 6 Go pour Phi-4 et Mistral.',
        ],
        columns: ['Modèle', 'VRAM', 'Usage optimal'],
        rows: [
          { 'Modèle': 'Llama 3 8B Q4_K_M', 'VRAM': '5,5 Go', 'Usage optimal': 'Chat général, code' },
          { 'Modèle': 'Phi-4 Q4_K_M', 'VRAM': '5,0 Go', 'Usage optimal': 'Instructions, raisonnement' },
          { 'Modèle': 'Mistral Small Q4_K_S', 'VRAM': '4,5 Go', 'Usage optimal': 'Tâches priorité vitesse' },
        ],
      },
      body2: {
        title: '6 Go de VRAM : Windows vs MacBook',
        content: [
          'Sous Windows, la RTX 3050 6 Go et la RTX 4050 6 Go sont les deux principaux GPU de ce niveau. Les deux exécutent Ollama via CUDA avec des performances quasi identiques — la RTX 4050 est environ 10 % plus efficace en énergie, mais pas sensiblement plus rapide en pratique.',
          'Sous macOS, tout MacBook avec 16 Go de mémoire unifiée dispose d\'environ 6 Go disponibles pour la charge de travail GPU. La mémoire unifiée élimine le goulot d\'étranglement PCIe des cartes graphiques dédiées, ce qui rend les performances macOS souvent équivalentes ou supérieures à une RTX 3050 dédiée.',
          'Passer de 6 Go à 8 Go débloque la quantisation Q5_K_M sur les modèles 7–8B (+3 % de qualité) et des fenêtres de contexte plus rapides. Pour les options 12 Go et les modèles 14B, voir <a href="/fr/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">les meilleurs modèles Ollama pour RTX 3060 12 Go</a>. Pour la référence VRAM complète, voir <a href="/fr/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">combien de VRAM un LLM local nécessite</a>.',
          '<strong>6 Go est le plus petit VRAM où un LLM local rivalise avec les modèles cloud sur les tâches quotidiennes.</strong> En dessous de 6 Go, vous êtes limité à des petits modèles qui peinent sur le code ou le raisonnement long. À 6 Go, Llama 3 8B Q4_K_M est entièrement disponible. Pour passer aux modèles 14B, voir <a href="/fr/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">les sélections du niveau 12 Go</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes sur les modèles 6 Go de VRAM',
        faqs: [
          {
            q: '6 Go de VRAM suffisent-ils pour un usage LLM quotidien ?',
            a: 'Oui. Llama 3 8B Q4_K_M à ~20 tok/s gère le chat multi-tours, la complétion de code, la synthèse de documents et les Q&R. La vitesse est suffisante pour une utilisation interactive.',
          },
          {
            q: 'Llama 3 8B tient-il dans 6 Go de VRAM ?',
            a: 'Oui en Q4_K_M — le modèle utilise 5,5 Go. Une fenêtre de contexte de 4 096 tokens ajoute ~1 Go, soit ~6,5 Go au total. Pour rester strictement dans 6 Go, utilisez un contexte de 2 048 tokens (<code>--num-ctx 2048</code>) ou choisissez Phi-4 Q4_K_M à la place.',
          },
          {
            q: 'Puis-je faire tourner des modèles 13B ou 14B sur 6 Go de VRAM ?',
            a: 'Non. Qwen 14B en Q4_K_M nécessite ~10 Go de VRAM. Passer à 12 Go est le minimum pour les modèles 14B. Voir <a href="/fr/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">les meilleurs modèles Ollama pour RTX 3060 12 Go</a>.',
          },
          {
            q: 'Puis-je aussi utiliser 6 Go de VRAM pour la génération d\'images ?',
            a: 'Difficilement. Stable Diffusion XL nécessite au minimum 8 Go de VRAM. Faire tourner à la fois des LLM et la génération d\'images sur une carte 6 Go implique de basculer constamment — concentrez-vous sur une seule tâche ou passez à 8 Go.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '6 GB VRAMに最適なローカルLLMは？',
    seoTitle: '6 GB VRAM向け最適ローカルLLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M（5.5 GB）が6 GB VRAMの最有力候補です。Phi-4 Q4_K_MとMistral Small Q4_K_Sも優れた代替選択肢です。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_Mが6 GB VRAMの最有力候補：5.5 GB、約20トークン/秒、チャットとコーディングに優秀',
          'Phi-4 Q4_K_M（5.0 GB）は指示追従と推論タスクでトップ',
          '6 GB VRAMはWindows向けRTX 3050/4050と16 GB統合メモリ搭載の全MacBookをカバー',
        ],
      },
      body1: {
        title: '6 GB VRAM向けトップ3モデル',
        content: [
          '2026年5月現在、<strong>6 GB VRAMは非常に異なる2つのハードウェアクラスをカバーします：バジェットWindowsラップトップ（RTX 3050/4050）と16 GB統合メモリを搭載する全MacBookです。</strong>両者のパフォーマンスは30–50%異なります — MacはUnified Memory帯域幅のおかげでLlama 3 8B Q4_K_Mを約25トークン/秒で実行するのに対し、WindowsのディスクリートGPUはPCIe転送オーバーヘッドにより約18トークン/秒です。',
          '3つのモデルはすべてOllamaで特別な設定なしに動作します。以下の速度はコンテキストウィンドウ2048トークンを想定しています。4096トークンへの拡張には約1 GB追加が必要ですが、Phi-4とMistralでは6 GB以内に収まります。',
        ],
        columns: ['モデル', 'VRAM', '最適な用途'],
        rows: [
          { 'モデル': 'Llama 3 8B Q4_K_M', 'VRAM': '5.5 GB', '最適な用途': '汎用チャット、コーディング' },
          { 'モデル': 'Phi-4 Q4_K_M', 'VRAM': '5.0 GB', '最適な用途': '指示追従、推論' },
          { 'モデル': 'Mistral Small Q4_K_S', 'VRAM': '4.5 GB', '最適な用途': '速度優先タスク' },
        ],
      },
      body2: {
        title: '6 GB VRAM：WindowsとMacBookの比較',
        content: [
          'Windowsでは、RTX 3050 6 GBとRTX 4050 6 GBがこの層の主要GPUです。両者はCUDA経由でOllamaをほぼ同等の性能で動作させます — 新しいRTX 4050はワット当たり約10%効率的ですが、実際の速度差は小さいです。',
          'macOSでは、16 GB統合メモリを搭載した全MacBookがGPUワークロード用に約6 GBを利用できます。統合メモリはディスクリートGPUカードのPCIe帯域幅ボトルネックを解消するため、macOSのパフォーマンスはしばしばディスクリートRTX 3050と同等以上です。',
          '6 GBから8 GBへのアップグレードで7–8BモデルのQ5_K_M量化（+3%品質）と高速コンテキストウィンドウが解放されます。12 GBオプションと14Bモデルについては<a href="/ja/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12GB向けOllamaモデル</a>を参照してください。完全なVRAMリファレンスは<a href="/ja/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">ローカルLLMに必要なVRAM量</a>をご覧ください。',
          '<strong>6 GBは日常タスクでローカルLLMがクラウドモデルと競合できる最小VRAMです。</strong>6 GB未満ではコーディングや長文推論で苦労する小型モデルに限られます。6 GBではLlama 3 8B Q4_K_Mが完全に解放されます。14Bモデルへのステップアップには<a href="/ja/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">12 GBティアのおすすめ</a>を参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '6 GB VRAMモデルに関するよくある質問',
        faqs: [
          {
            q: '6 GB VRAMは日常的なLLM使用に十分ですか？',
            a: 'はい。Llama 3 8B Q4_K_Mは約20トークン/秒でマルチターンチャット、コード補完、ドキュメント要約、Q&Aを処理します。インタラクティブな使用に十分な速度です。',
          },
          {
            q: 'Llama 3 8Bは6 GB VRAMに収まりますか？',
            a: 'Q4_K_Mでは収まります — モデルは5.5 GBを使用します。4096トークンのコンテキストウィンドウには約1 GB追加が必要で、合計約6.5 GBになります。厳密に6 GBに収めるには、2048トークンのコンテキスト（<code>--num-ctx 2048</code>）を使用するか、代わりにPhi-4 Q4_K_Mを選んでください。',
          },
          {
            q: '6 GB VRAMで13Bや14Bモデルを動かせますか？',
            a: 'いいえ。Qwen 14BのQ4_K_Mには約10 GB VRAMが必要です。14Bモデルには最低12 GBへのアップグレードが必要です。<a href="/ja/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12GB向けOllamaモデル</a>をご覧ください。',
          },
          {
            q: '6 GB VRAMを画像生成にも使えますか？',
            a: 'うまくいきません。Stable Diffusion XLは最低8 GB VRAMが必要です。6 GBカードでLLMと画像生成の両方を動かすには常に切り替えが必要です — 一度に1つのワークロードに集中するか、8 GBにアップグレードしてください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '6 GB显存最佳本地LLM是什么？',
    seoTitle: '6 GB显存最佳本地LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M（5.5 GB）是6 GB显存的首选。Phi-4 Q4_K_M和Mistral Small Q4_K_S是可靠的备选方案。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M是6 GB显存的首选：5.5 GB，约20 tok/s，聊天和编程表现出色',
          'Phi-4 Q4_K_M（5.0 GB）在指令执行和推理任务上领先',
          '6 GB显存涵盖Windows端RTX 3050/4050和所有搭载16 GB统一内存的MacBook',
        ],
      },
      body1: {
        title: '6 GB显存最佳3款模型',
        content: [
          '截至2026年5月，<strong>6 GB显存涵盖两类截然不同的硬件：预算级Windows笔记本（RTX 3050/4050）和所有搭载16 GB统一内存的MacBook。</strong>两者性能相差30–50%——Mac凭借统一内存带宽以约25 tok/s运行Llama 3 8B Q4_K_M，而Windows独立GPU因PCIe传输开销只能达到约18 tok/s。',
          '三款模型均可通过Ollama直接运行，无需特殊配置。以下速度数据基于2048 token的上下文窗口。扩展到4096 token约需额外1 GB——对于Phi-4和Mistral，仍在6 GB范围内。',
        ],
        columns: ['模型', '显存', '适用场景'],
        rows: [
          { '模型': 'Llama 3 8B Q4_K_M', '显存': '5.5 GB', '适用场景': '通用聊天、编程' },
          { '模型': 'Phi-4 Q4_K_M', '显存': '5.0 GB', '适用场景': '指令执行、推理' },
          { '模型': 'Mistral Small Q4_K_S', '显存': '4.5 GB', '适用场景': '速度优先任务' },
        ],
      },
      body2: {
        title: '6 GB显存：Windows与MacBook对比',
        content: [
          '在Windows端，RTX 3050 6 GB和RTX 4050 6 GB是这一层级的两款主要GPU。两者均通过CUDA运行Ollama，性能几乎相同——新款RTX 4050每瓦性能高约10%，但实际速度差异不大。',
          '在macOS端，所有搭载16 GB统一内存的MacBook约有6 GB可用于GPU工作负载。统一内存消除了独立显卡的PCIe带宽瓶颈，因此macOS性能通常与独立RTX 3050相当甚至更好。',
          '从6 GB升级到8 GB可解锁7–8B模型的Q5_K_M量化（+3%质量）和更快的上下文窗口。12 GB选项和14B模型请参阅<a href="/zh/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB最佳Ollama模型</a>。完整显存参考请查看<a href="/zh/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">本地LLM所需显存量</a>。',
          '<strong>6 GB是本地LLM能与云端模型在日常任务上竞争的最低显存配置。</strong>低于6 GB只能运行在编程或长文推理上力不从心的小模型。在6 GB配置下，Llama 3 8B Q4_K_M完全解锁。要迈向14B模型，请参阅<a href="/zh/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">12 GB层级推荐</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于6 GB显存模型的常见问题',
        faqs: [
          {
            q: '6 GB显存足够日常使用LLM吗？',
            a: '足够。Llama 3 8B Q4_K_M以约20 tok/s处理多轮对话、代码补全、文档摘要和问答。速度足以满足交互式使用需求。',
          },
          {
            q: 'Llama 3 8B能装进6 GB显存吗？',
            a: '以Q4_K_M量化可以——模型占用5.5 GB。4096 token的上下文窗口额外需要约1 GB，总计约6.5 GB。若需严格控制在6 GB内，请使用2048 token上下文（<code>--num-ctx 2048</code>）或改用Phi-4 Q4_K_M。',
          },
          {
            q: '6 GB显存能运行13B或14B模型吗？',
            a: '不行。Qwen 14B的Q4_K_M需要约10 GB显存。14B模型至少需要升级到12 GB。请参阅<a href="/zh/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">RTX 3060 12 GB最佳Ollama模型</a>。',
          },
          {
            q: '6 GB显存也能用于图像生成吗？',
            a: '效果不佳。Stable Diffusion XL至少需要8 GB显存。在6 GB显卡上同时运行LLM和图像生成需要频繁切换——建议专注于单一工作负载，或升级到8 GB。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Mejor LLM local para 6 GB de VRAM?',
    seoTitle: '6 GB VRAM: mejor LLM local 2026 | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M (5,5 GB) es la mejor opción para 6 GB de VRAM. Phi-4 Q4 y Mistral Small Q4_K_S son alternativas sólidas. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Mejor LLM local para 6 GB de VRAM?',
        answer: 'Con 6 GB de VRAM, Llama 3 8B Q4_K_M es la mejor opción con ~5,5 GB, con excelentes capacidades de chat y programación a ~20 tok/s. Phi-4 Q4_K_M y Mistral Small Q4_K_S son alternativas sólidas.',
        bullets: [
          'Llama 3 8B Q4_K_M: mejor opción general para 6 GB (5,5 GB VRAM)',
          'Phi-4 Q4_K_M: mejor para seguimiento de instrucciones',
          'Mistral Small Q4_K_S: el más rápido en 6 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M es la mejor opción para 6 GB de VRAM: 5,5 GB, ~20 tok/s, excelente para chat y código',
          'Phi-4 Q4_K_M (5,0 GB) lidera en tareas de seguimiento de instrucciones y razonamiento',
          '6 GB de VRAM cubre RTX 3050/4050 en Windows y cualquier MacBook con 16 GB de memoria unificada',
        ],
      },
      body1: {
        title: 'Top 3 modelos para 6 GB de VRAM',
        content: [
          'A mayo de 2026, <strong>6 GB de VRAM cubre dos clases de hardware muy diferentes: portátiles Windows de bajo coste (RTX 3050/4050) y cualquier MacBook con 16 GB de memoria unificada.</strong> El rendimiento difiere entre ellos en un 30–50% — el Mac ejecuta Llama 3 8B Q4_K_M a ~25 tok/s gracias al ancho de banda de la memoria unificada, mientras la GPU discreta Windows lo hace a ~18 tok/s debido a la sobrecarga de transferencia PCIe.',
          'Los tres modelos funcionan con Ollama sin configuración especial. Las cifras de velocidad siguientes asumen una ventana de contexto de 2048 tokens. Ampliar a 4096 tokens añade ~1 GB — aún dentro de 6 GB para Phi-4 y Mistral.',
        ],
        columns: ['Modelo', 'VRAM', 'Mejor para'],
        rows: [
          { 'Modelo': 'Llama 3 8B Q4_K_M', 'VRAM': '5,5 GB', 'Mejor para': 'Chat general, programación' },
          { 'Modelo': 'Phi-4 Q4_K_M', 'VRAM': '5,0 GB', 'Mejor para': 'Instrucciones, razonamiento' },
          { 'Modelo': 'Mistral Small Q4_K_S', 'VRAM': '4,5 GB', 'Mejor para': 'Tareas donde la velocidad es prioritaria' },
        ],
      },
      body2: {
        title: '6 GB de VRAM en Windows vs MacBook',
        content: [
          'En Windows, la RTX 3050 6 GB y la RTX 4050 6 GB son las dos GPUs principales en este rango. Ambas ejecutan Ollama vía CUDA con un rendimiento casi idéntico — la más nueva RTX 4050 es alrededor de un 10% más eficiente por vatio pero no significativamente más rápida en la práctica.',
          'En macOS, cualquier MacBook con 16 GB de memoria unificada tiene aproximadamente 6 GB disponibles para la carga de trabajo GPU. La memoria unificada elimina el cuello de botella PCIe que limita las tarjetas discretas, por lo que el rendimiento de macOS suele ser igual o mejor que el de una RTX 3050 discreta.',
          'Actualizar de 6 GB a 8 GB desbloquea la cuantización Q5_K_M en modelos 7–8B (+3% calidad) y ventanas de contexto más rápidas. Para opciones de 12 GB y modelos 14B, consulta <a href="/es/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">los mejores modelos Ollama para RTX 3060 12 GB</a>. Para la referencia completa de VRAM, consulta <a href="/es/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">cuánta VRAM necesita un LLM local</a>.',
          '<strong>6 GB es la VRAM mínima donde un LLM local compite con los modelos en la nube en tareas cotidianas.</strong> Por debajo de 6 GB, estás limitado a modelos pequeños que tienen dificultades con código o razonamiento extenso. Con 6 GB, Llama 3 8B Q4_K_M está completamente desbloqueado. Para dar el salto a modelos 14B, consulta <a href="/es/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">las opciones del nivel de 12 GB</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos con 6 GB de VRAM',
        faqs: [
          {
            q: '¿Son suficientes 6 GB de VRAM para uso diario de LLMs?',
            a: 'Sí. Llama 3 8B Q4_K_M a ~20 tok/s maneja chat multiturn, autocompletado de código, resumen de documentos y preguntas y respuestas. La velocidad es suficiente para uso interactivo.',
          },
          {
            q: '¿Cabe Llama 3 8B en 6 GB de VRAM?',
            a: 'Sí en Q4_K_M — el modelo usa 5,5 GB. Una ventana de contexto de 4096 tokens añade ~1 GB, totalizando ~6,5 GB. Para tener margen estricto de 6 GB, usa un contexto de 2048 tokens (<code>--num-ctx 2048</code>) o elige Phi-4 Q4_K_M en su lugar.',
          },
          {
            q: '¿Puedo ejecutar modelos 13B o 14B con 6 GB de VRAM?',
            a: 'No. Qwen 14B en Q4_K_M necesita ~10 GB de VRAM. Actualizar a 12 GB es el mínimo para modelos 14B. Consulta <a href="/es/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">los mejores modelos Ollama para RTX 3060 12 GB</a>.',
          },
          {
            q: '¿Puedo usar también 6 GB de VRAM para generación de imágenes?',
            a: 'No muy bien. Stable Diffusion XL requiere un mínimo de 8 GB de VRAM. Ejecutar tanto LLMs como generación de imágenes en una tarjeta de 6 GB significa cambiar constantemente — enfócate en una sola carga de trabajo a la vez o actualiza a 8 GB.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    title: 'Melhor LLM local para 6 GB de VRAM?',
    seoTitle: '6 GB VRAM: melhor LLM local 2026 | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M (5,5 GB) é a melhor opção para 6 GB de VRAM. Phi-4 Q4 e Mistral Small Q4_K_S são alternativas sólidas. Resposta rápida do PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Melhor LLM local para 6 GB de VRAM?',
        answer: 'Com 6 GB de VRAM, o Llama 3 8B Q4_K_M é a melhor opção com ~5,5 GB, oferecendo excelentes capacidades de chat e programação a ~20 tok/s. Phi-4 Q4_K_M e Mistral Small Q4_K_S são alternativas sólidas.',
        bullets: [
          'Llama 3 8B Q4_K_M: melhor opção geral para 6 GB (5,5 GB VRAM)',
          'Phi-4 Q4_K_M: melhor para seguimento de instruções',
          'Mistral Small Q4_K_S: o mais rápido em 6 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M é a melhor escolha para 6 GB de VRAM: 5,5 GB, ~20 tok/s, excelente para chat e programação',
          'Phi-4 Q4_K_M (5,0 GB) lidera em tarefas de seguimento de instruções e raciocínio',
          '6 GB de VRAM cobre RTX 3050/4050 no Windows e qualquer MacBook com 16 GB de memória unificada',
        ],
      },
      body1: {
        title: 'Top 3 modelos para 6 GB de VRAM',
        content: [
          'Em maio de 2026, <strong>6 GB de VRAM cobre duas classes de hardware muito diferentes: laptops Windows de entrada (RTX 3050/4050) e qualquer MacBook com 16 GB de memória unificada.</strong> O desempenho difere entre eles em 30–50% — o Mac executa o Llama 3 8B Q4_K_M a ~25 tok/s graças à largura de banda da memória unificada, enquanto a GPU discreta do Windows chega a ~18 tok/s devido à sobrecarga de transferência PCIe.',
          'Os três modelos funcionam com o Ollama sem configuração especial. As velocidades abaixo assumem uma janela de contexto de 2.048 tokens. Ampliar para 4.096 tokens adiciona ~1 GB — ainda dentro de 6 GB para Phi-4 e Mistral.',
        ],
        columns: ['Modelo', 'VRAM', 'Melhor para'],
        rows: [
          { 'Modelo': 'Llama 3 8B Q4_K_M', 'VRAM': '5,5 GB', 'Melhor para': 'Chat geral, programação' },
          { 'Modelo': 'Phi-4 Q4_K_M', 'VRAM': '5,0 GB', 'Melhor para': 'Instruções, raciocínio' },
          { 'Modelo': 'Mistral Small Q4_K_S', 'VRAM': '4,5 GB', 'Melhor para': 'Tarefas onde a velocidade é prioritária' },
        ],
      },
      body2: {
        title: '6 GB de VRAM no Windows vs MacBook',
        content: [
          'No Windows, a RTX 3050 6 GB e a RTX 4050 6 GB são as duas principais GPUs nesta faixa. Ambas executam o Ollama via CUDA com desempenho quase idêntico — a RTX 4050 mais recente é cerca de 10% mais eficiente por watt, mas não significativamente mais rápida na prática.',
          'No macOS, qualquer MacBook com 16 GB de memória unificada tem aproximadamente 6 GB disponíveis para a carga de trabalho da GPU. A memória unificada elimina o gargalo PCIe que limita as placas discretas, por isso o desempenho no macOS costuma ser igual ou superior ao de uma RTX 3050 discreta.',
          'Atualizar de 6 GB para 8 GB desbloqueia a quantização Q5_K_M em modelos 7–8B (+3% de qualidade) e janelas de contexto mais rápidas. Para opções de 12 GB e modelos 14B, consulte <a href="/pt/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">os melhores modelos Ollama para RTX 3060 12 GB</a>. Para a referência completa de VRAM, consulte <a href="/pt/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">quanta VRAM um LLM local precisa</a>.',
          '<strong>6 GB é a menor quantidade de VRAM em que um LLM local compete com modelos em nuvem em tarefas cotidianas.</strong> Abaixo de 6 GB, você está limitado a modelos pequenos que têm dificuldade com programação ou raciocínio extenso. Com 6 GB, o Llama 3 8B Q4_K_M está totalmente disponível. Para dar o salto para modelos 14B, consulte <a href="/pt/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">as opções do nível de 12 GB</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos com 6 GB de VRAM',
        faqs: [
          {
            q: '6 GB de VRAM é suficiente para uso diário de LLMs?',
            a: 'Sim. O Llama 3 8B Q4_K_M a ~20 tok/s lida com chat multiturn, autocomplete de código, resumo de documentos e perguntas e respostas. A velocidade é suficiente para uso interativo.',
          },
          {
            q: 'O Llama 3 8B cabe em 6 GB de VRAM?',
            a: 'Sim em Q4_K_M — o modelo usa 5,5 GB. Uma janela de contexto de 4.096 tokens adiciona ~1 GB, totalizando ~6,5 GB. Para ter margem estrita de 6 GB, use um contexto de 2.048 tokens (<code>--num-ctx 2048</code>) ou escolha o Phi-4 Q4_K_M em vez disso.',
          },
          {
            q: 'Posso executar modelos 13B ou 14B com 6 GB de VRAM?',
            a: 'Não. O Qwen 14B em Q4_K_M precisa de ~10 GB de VRAM. Atualizar para 12 GB é o mínimo para modelos 14B. Consulte <a href="/pt/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">os melhores modelos Ollama para RTX 3060 12 GB</a>.',
          },
          {
            q: 'Posso usar 6 GB de VRAM também para geração de imagens?',
            a: 'Não muito bem. O Stable Diffusion XL requer no mínimo 8 GB de VRAM. Executar tanto LLMs quanto geração de imagens em uma placa de 6 GB significa trocar constantemente — foque em uma única carga de trabalho por vez ou atualize para 8 GB.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'أفضل نموذج لغوي محلي لـ 6 GB من VRAM؟',
    seoTitle: 'أفضل LLM محلي لـ 6 GB VRAM في 2026 | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M (5.5 GB VRAM) هو أفضل LLM محلي لـ6 GB VRAM بسرعة ~20 رمز/ثانية. Phi-4 Q4_K_M وMistral Small Q4_K_S بدائل للـRTX 3050 وRTX 4050.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نموذج لغوي محلي لـ 6 GB من VRAM؟',
        answer: 'مع 6 GB من VRAM، يُعدّ Llama 3 8B Q4_K_M الخيار الأمثل بحجم ~5.5 GB، مع قدرات ممتازة في المحادثة والبرمجة بسرعة ~20 tok/s. يُمثّل Phi-4 Q4_K_M وMistral Small Q4_K_S بديلَين قويَّين.',
        bullets: [
          'Llama 3 8B Q4_K_M: أفضل خيار شامل لـ 6 GB (5.5 GB VRAM)',
          'Phi-4 Q4_K_M: الأفضل لاتباع التعليمات',
          'Mistral Small Q4_K_S: الأسرع عند 6 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M هو الخيار الأمثل لـ 6 GB من VRAM: 5.5 GB، ~20 tok/s، ممتاز للمحادثة والبرمجة',
          'Phi-4 Q4_K_M (5.0 GB) يتصدر في مهام اتباع التعليمات والاستدلال',
          '6 GB من VRAM يغطي RTX 3050/4050 على Windows وأي MacBook بذاكرة موحدة 16 GB',
        ],
      },
      body1: {
        title: 'أفضل 3 نماذج لـ 6 GB من VRAM',
        content: [
          'اعتبارًا من مايو 2026، <strong>تغطي 6 GB من VRAM فئتَي أجهزة مختلفتَين تمامًا: أجهزة الحاسوب المحمولة ذات الميزانية المحدودة بنظام Windows (RTX 3050/4050) وأي MacBook بذاكرة موحدة 16 GB.</strong> يختلف الأداء بينهما بنسبة 30–50% — يعمل Mac على تشغيل Llama 3 8B Q4_K_M بسرعة ~25 tok/s بفضل نطاق ترددي للذاكرة الموحدة، بينما تعمل وحدة المعالجة الرسومية المستقلة على Windows بسرعة ~18 tok/s بسبب عبء نقل البيانات عبر PCIe.',
          'تعمل النماذج الثلاثة مع Ollama دون أي إعداد خاص. تفترض أرقام السرعة أدناه نافذة سياق مؤلفة من 2048 رمزًا. يؤدي التوسيع إلى 4096 رمزًا إضافةَ ~1 GB — لا يزال ضمن 6 GB لكل من Phi-4 وMistral.',
        ],
        columns: ['النموذج', 'VRAM', 'الأفضل لـ'],
        rows: [
          { 'النموذج': 'Llama 3 8B Q4_K_M', 'VRAM': '5.5 GB', 'الأفضل لـ': 'المحادثة العامة، البرمجة' },
          { 'النموذج': 'Phi-4 Q4_K_M', 'VRAM': '5.0 GB', 'الأفضل لـ': 'اتباع التعليمات، الاستدلال' },
          { 'النموذج': 'Mistral Small Q4_K_S', 'VRAM': '4.5 GB', 'الأفضل لـ': 'المهام ذات الأولوية للسرعة' },
        ],
      },
      body2: {
        title: '6 GB من VRAM على Windows مقابل MacBook',
        content: [
          'على Windows، تُعدّ RTX 3050 6 GB وRTX 4050 6 GB وحدتَي المعالجة الرسومية الرئيسيتَين في هذه الفئة. كلتاهما تشغّل Ollama عبر CUDA بأداء متطابق تقريبًا — الطراز الأحدث RTX 4050 أكثر كفاءةً بنحو 10% لكل واط، لكنه ليس أسرع بشكل ملحوظ في الاستخدام الفعلي.',
          'على macOS، يتوفر لأي MacBook بذاكرة موحدة 16 GB نحو 6 GB لأعباء عمل وحدة المعالجة الرسومية. تُلغي الذاكرة الموحدة اختناق النطاق الترددي PCIe الذي يحدّ من بطاقات المعالجة الرسومية المستقلة، لذا يكون أداء macOS في الغالب مساويًا لأداء RTX 3050 المستقلة أو أفضل منه.',
          'يُتيح الترقية من 6 GB إلى 8 GB تكميم Q5_K_M على نماذج 7–8B (+3% جودة) ونوافذ سياق أسرع. للاطلاع على خيارات 12 GB ونماذج 14B، راجع <a href="/ar/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">أفضل نماذج Ollama لـ RTX 3060 12 GB</a>. للمرجع الكامل لـ VRAM، راجع <a href="/ar/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">مقدار VRAM الذي يحتاجه النموذج اللغوي المحلي</a>.',
          '<strong>6 GB هو الحد الأدنى من VRAM الذي يستطيع عنده النموذج اللغوي المحلي منافسة نماذج السحابة في المهام اليومية.</strong> دون 6 GB، تقتصر الخيارات على نماذج صغيرة تعاني مع البرمجة أو الاستدلال المطوّل. مع 6 GB، يكون Llama 3 8B Q4_K_M متاحًا بالكامل. للانتقال إلى نماذج 14B، راجع <a href="/ar/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">خيارات فئة 12 GB</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج 6 GB من VRAM',
        faqs: [
          {
            q: 'هل تكفي 6 GB من VRAM للاستخدام اليومي للنماذج اللغوية؟',
            a: 'نعم. يتعامل Llama 3 8B Q4_K_M بسرعة ~20 tok/s مع المحادثة متعددة الأدوار وإكمال الكود وتلخيص المستندات والأسئلة والأجوبة. السرعة كافية للاستخدام التفاعلي.',
          },
          {
            q: 'هل يتناسب Llama 3 8B مع 6 GB من VRAM؟',
            a: 'نعم عند Q4_K_M — يستخدم النموذج 5.5 GB. تُضيف نافذة سياق من 4096 رمزًا ~1 GB، ليبلغ الإجمالي ~6.5 GB. للبقاء ضمن 6 GB بصرامة، استخدم سياقًا من 2048 رمزًا (<code>--num-ctx 2048</code>) أو اختر Phi-4 Q4_K_M بدلًا من ذلك.',
          },
          {
            q: 'هل يمكنني تشغيل نماذج 13B أو 14B مع 6 GB من VRAM؟',
            a: 'لا. يحتاج Qwen 14B عند Q4_K_M إلى ~10 GB من VRAM. الترقية إلى 12 GB هي الحد الأدنى لنماذج 14B. راجع <a href="/ar/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">أفضل نماذج Ollama لـ RTX 3060 12 GB</a>.',
          },
          {
            q: 'هل يمكنني استخدام 6 GB من VRAM لتوليد الصور أيضًا؟',
            a: 'ليس بشكل جيد. يتطلب Stable Diffusion XL الحد الأدنى 8 GB من VRAM. تشغيل النماذج اللغوية وتوليد الصور معًا على بطاقة 6 GB يعني التبديل المستمر — ركّز على حِمل عمل واحد في كل مرة أو قم بالترقية إلى 8 GB.',
          },
        ],
      },
    },
  },
}
