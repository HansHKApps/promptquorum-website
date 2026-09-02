import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-en.webp',
    title: 'Which Ollama Models Support 128K Context?',
    dateModified: '2026-09-02',
    seoTitle: 'Ollama 128K Context 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B supports 128K context on Ollama. Qwen3-30B-A3B (MoE) reaches 256K context. Full context windows significantly increase VRAM. Updated 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    last_full_refresh: '2026-09-02',
    current_models_mentioned: ['Llama 3.1 8B', 'Qwen3-30B-A3B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Developers needing long context windows for local LLMs',
    parentArticle: '/local-llms/long-context-local-llms',
    siblingBites: ['which-ollama-models-support-vision', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which Ollama models support 128K context?',
        answer: 'Llama 3.1 8B supports 128K context on Ollama. Qwen3-30B-A3B, a mixture-of-experts model, reaches 256K context. Note: running full context dramatically increases VRAM — a 128K window needs 3–4× more VRAM than the default 4K window.',
        bullets: [
          'Llama 3.1 8B: 128K context, ~16 GB VRAM at full context',
          'Qwen3-30B-A3B: 256K context, ~24+ GB VRAM at full context',
          'Set --num-ctx 4096 for normal use to save VRAM',
        ],
        updatedDate: '2026-09',
      },
      de: { question: 'Welche Ollama-Modelle unterstützen 128K-Kontext?', answer: 'Llama 3.1 8B unterstützt 128K-Kontext in Ollama. Qwen3-30B-A3B erreicht 256K Kontext. Hinweis: Das Ausführen mit vollem Kontext erhöht den VRAM drastisch — ein 128K-Fenster benötigt 3–4× mehr VRAM als das Standard-4K-Fenster.', bullets: ['Llama 3.1 8B: 128K-Kontext, ~16 GB VRAM bei vollem Kontext', 'Qwen3-30B-A3B: 256K Kontext, 24+ GB VRAM bei vollem Kontext', 'Für normalen Einsatz --num-ctx 4096 setzen, um VRAM zu sparen'], updatedDate: '2026-09' },
      fr: { question: 'Quels modèles Ollama supportent le contexte 128K ?', answer: 'Llama 3.1 8B prend en charge un contexte de 128K sur Ollama. Qwen3-30B-A3B atteint 256K de contexte. Attention : exécuter le contexte complet augmente fortement la VRAM — une fenêtre de 128K nécessite 3 à 4× plus de VRAM que la fenêtre par défaut de 4K.', bullets: ['Llama 3.1 8B : contexte 128K, ~16 Go de VRAM au contexte complet', 'Qwen3-30B-A3B : contexte 256K, 24+ Go de VRAM au contexte complet', 'Utiliser --num-ctx 4096 pour un usage normal et économiser la VRAM'], updatedDate: '2026-09' },
      ja: { question: 'Ollamaで128Kコンテキスト対応モデルは？', answer: 'Llama 3.1 8BはOllamaで128Kコンテキストに対応しています。Qwen3-30B-A3Bは256Kコンテキストに到達します。注意：フルコンテキストで実行するとVRAMが大幅に増加します — 128Kウィンドウはデフォルト4Kの3〜4倍のVRAMが必要です。', bullets: ['Llama 3.1 8B：128Kコンテキスト、フルコンテキストで~16 GB VRAM', 'Qwen3-30B-A3B：256Kコンテキスト、フルコンテキストで24+ GB VRAM', '通常使用は--num-ctx 4096でVRAMを節約'], updatedDate: '2026-09' },
      zh: { question: 'Ollama上哪些模型支持128K上下文？', answer: 'Llama 3.1 8B在Ollama上支持128K上下文。Qwen3-30B-A3B可达256K上下文。注意：运行完整上下文会大幅增加显存占用——128K窗口比默认4K窗口需要多3–4倍显存。', bullets: ['Llama 3.1 8B：128K上下文，完整上下文需~16 GB显存', 'Qwen3-30B-A3B：256K上下文，完整上下文需24+ GB显存', '日常使用设置--num-ctx 4096以节省显存'], updatedDate: '2026-09' },
      es: { question: '¿Qué modelos de Ollama admiten contexto de 128K?', answer: 'Llama 3.1 8B admite contexto de 128K en Ollama. Qwen3-30B-A3B alcanza 256K de contexto. Nota: ejecutar el contexto completo aumenta drásticamente la VRAM — una ventana de 128K necesita entre 3 y 4 veces más VRAM que la ventana predeterminada de 4K.', bullets: ['Llama 3.1 8B: contexto de 128K, ~16 GB de VRAM con contexto completo', 'Qwen3-30B-A3B: contexto de 256K, 24+ GB de VRAM con contexto completo', 'Establece --num-ctx 4096 para uso normal y ahorra VRAM'], updatedDate: '2026-09' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Most 7B Ollama models advertise 128K context but degrade in quality above 32K tokens',
          'Llama 3.1 8B and Qwen3-30B-A3B are the two models that reliably deliver 128K+ context on Ollama',
          'A 128K context window can nearly triple VRAM usage — a 7B Q4 model needs ~15 GB at 128K vs ~5.5 GB at default',
          'Set <code>--num-ctx 4096</code> for everyday tasks; only expand context when you need it',
        ],
      },
      body1: {
        title: 'Which Models Actually Reach 128K',
        content: [
          '<strong>Most Ollama models advertise 128K context but fewer deliver useful output quality at that length.</strong> The problem is the "lost in the middle" effect: models trained on typical document lengths struggle to attend to information placed deep in a long context.',
          'Two models reliably deliver 128K+ context on Ollama: <strong>Llama 3.1 8B</strong> (natively trained at 128K) and <strong>Qwen3-30B-A3B</strong> (a mixture-of-experts model with a 256K context window on Ollama\'s official library, activating only ~3B of its 30B parameters per token). Qwen3\'s smaller dense sizes default to a 40K context window in Ollama, and for most other 7B-class models, output quality also degrades noticeably above 32K tokens.',
          'If your task involves documents longer than 20,000 words, start with Llama 3.1 8B. If you need the largest context window and have 20+ GB VRAM, Qwen3-30B-A3B is the better choice.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'The two Ollama models that reliably deliver 128K+ context are Llama 3.1 8B (128K, natively trained) and Qwen3-30B-A3B (256K, mixture-of-experts).' },
          { type: 'plain-terms', text: 'Llama 3.1 8B was trained from the start to handle 128K tokens of context, so its output quality holds up at that length. Qwen3-30B-A3B is a mixture-of-experts model — it only activates about 3 billion of its 30 billion parameters per token — and Ollama lists it with a 256K context window. Most other 7B-class models advertise 128K but their output quality drops noticeably past 32K tokens.' },
        ],
      },
      body2: {
        title: 'The VRAM Cost of Long Context',
        content: [
          'Expanding the context window increases VRAM usage significantly. <strong>The KV-cache, which stores attention state for all tokens in context, can add as much VRAM as the model weights themselves at 128K context.</strong>',
          'The table below shows how KV-cache VRAM scales for a 7B model at Q4_K_M. These figures assume models using grouped query attention (GQA) — models without GQA use significantly more KV-cache.',
          'To save VRAM on everyday tasks, set <code>--num-ctx 4096</code> when running Ollama. Only expand to 32K or 128K when your specific task requires it. For the full guide on long-context local LLMs including model selection and RAM splitting, see the <a href="/local-llms/long-context-local-llms" class="text-primary hover:underline">long-context local LLMs guide</a>.',
        ],
        columns: ['Context Length', 'KV-Cache (7B)', 'Total VRAM (7B Q4)'],
        rows: [
          { 'Context Length': '4K (default)', 'KV-Cache (7B)': '~0.5 GB', 'Total VRAM (7B Q4)': '~5.5 GB' },
          { 'Context Length': '16K', 'KV-Cache (7B)': '~1.5 GB', 'Total VRAM (7B Q4)': '~6.5 GB' },
          { 'Context Length': '32K', 'KV-Cache (7B)': '~3 GB', 'Total VRAM (7B Q4)': '~8 GB' },
          { 'Context Length': '128K', 'KV-Cache (7B)': '~10 GB', 'Total VRAM (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Long Context Models',
        faqs: [
          {
            q: 'How do I enable 128K context in Ollama?',
            a: 'Add <code>--num-ctx 131072</code> to your run command: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Without this flag, Ollama\'s Modelfile spec defaults num_ctx to 2048, and even the VRAM-tiered runtime default (4K under 24 GiB, 32K from 24–48 GiB, 256K above) may fall short of the model\'s maximum capability — set num_ctx explicitly to guarantee it.',
          },
          {
            q: 'Why does long context use so much VRAM?',
            a: 'The KV-cache stores attention state for every token in context. At 128K tokens, this cache can be as large as the model weights themselves. A 7B model at Q4 needs ~5.5 GB for weights but ~10 GB of KV-cache at 128K context.',
          },
          {
            q: 'Is 128K context useful for coding?',
            a: 'Yes, when working across large codebases. Fitting an entire repository or multiple files into context dramatically improves refactoring and cross-file reasoning tasks. For coding across large codebases at 128K+, Qwen3-30B-A3B is the recommended model.',
          },
          {
            q: 'Which model is best for long-document analysis?',
            a: 'Qwen3-30B-A3B is the top choice for long documents on Ollama — its 256K context window gives more headroom than 128K-class models, and as a mixture-of-experts model it runs faster than a dense model of similar size. See <a href="/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama vision models</a> if you also need image understanding alongside long documents.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Long-Context Local LLMs Guide](/local-llms/long-context-local-llms) -- model selection and RAM splitting',
          '[Can You Run Qwen 3 on Ollama?](/prompt-bites/can-you-run-qwen3-on-ollama) -- setup and VRAM requirements',
          '[Which Ollama Models Support Vision?](/prompt-bites/which-ollama-models-support-vision) -- multimodal models on Ollama',
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-de.webp',
    title: 'Welche Ollama-Modelle unterstützen 128K Kontext?',
    seoTitle: 'Ollama 128K Kontext 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B und Qwen3-30B-A3B unterstützen 128K+ Kontext auf Ollama. Qwen3-30B-A3B erreicht 256K. Voller Kontext erhöht den VRAM-Bedarf stark.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Welche Ollama-Modelle unterstützen 128K Kontext?',
        answer: 'Llama 3.1 8B unterstützt 128K Kontext auf Ollama. Qwen3-30B-A3B, ein Mixture-of-Experts-Modell, erreicht 256K Kontext. Hinweis: Voller Kontext erhöht den VRAM-Bedarf erheblich — ein 128K-Fenster benötigt 3–4× mehr VRAM als das Standard-4K-Fenster.',
        bullets: [
          'Llama 3.1 8B: 128K Kontext, ~16 GB VRAM bei vollem Kontext',
          'Qwen3-30B-A3B: 256K Kontext, 24+ GB VRAM bei vollem Kontext',
          'Setzen Sie --num-ctx 4096 für die normale Nutzung, um VRAM zu sparen',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die meisten 7B-Ollama-Modelle werben mit 128K Kontext, liefern aber oberhalb von 32K Tokens sinkende Qualität',
          'Llama 3.1 8B und Qwen3-30B-A3B sind die zwei Modelle, die zuverlässig 128K+ Kontext auf Ollama liefern',
          'Ein 128K-Kontextfenster kann den VRAM-Verbrauch fast verdreifachen — ein 7B Q4-Modell benötigt ~15 GB bei 128K statt ~5,5 GB beim Standard',
          'Setzen Sie <code>--num-ctx 4096</code> für alltägliche Aufgaben; erweitern Sie den Kontext nur, wenn Sie ihn benötigen',
        ],
      },
      body1: {
        title: 'Welche Modelle wirklich 128K erreichen',
        content: [
          '<strong>Die meisten Ollama-Modelle werben mit 128K Kontext, aber nur wenige liefern bei dieser Länge nützliche Ausgabequalität.</strong> Das Problem ist der „Lost in the Middle"-Effekt: Modelle, die auf typischen Dokumentlängen trainiert wurden, haben Schwierigkeiten, Informationen tief in einem langen Kontext zu finden.',
          'Zwei Modelle liefern zuverlässig 128K+ Kontext auf Ollama: <strong>Llama 3.1 8B</strong> (nativ auf 128K trainiert) und <strong>Qwen3-30B-A3B</strong> (ein Mixture-of-Experts-Modell mit 256K Kontextfenster in der offiziellen Ollama-Bibliothek, das pro Token nur rund 3 Mrd. seiner 30 Mrd. Parameter aktiviert). Die kleineren dichten Qwen3-Größen liefern in Ollama standardmäßig ein 40K-Kontextfenster, und bei den meisten anderen 7B-Modellen nimmt die Ausgabequalität oberhalb von 32K Tokens merklich ab.',
          'Wenn Ihre Aufgabe Dokumente mit mehr als 20.000 Wörtern umfasst, beginnen Sie mit Llama 3.1 8B. Wenn Sie das größte Kontextfenster benötigen und 20+ GB VRAM haben, ist Qwen3-30B-A3B die bessere Wahl.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die zwei Ollama-Modelle, die zuverlässig 128K+ Kontext liefern, sind Llama 3.1 8B (128K, nativ trainiert) und Qwen3-30B-A3B (256K, Mixture-of-Experts).' },
          { type: 'plain-terms', text: 'Llama 3.1 8B wurde von Anfang an für 128K Tokens Kontext trainiert, daher bleibt die Ausgabequalität auch bei dieser Länge stabil. Qwen3-30B-A3B ist ein Mixture-of-Experts-Modell — es aktiviert pro Token nur rund 3 Milliarden seiner 30 Milliarden Parameter — und Ollama führt es mit einem 256K-Kontextfenster. Die meisten anderen 7B-Modelle werben mit 128K, aber ihre Ausgabequalität sinkt spürbar oberhalb von 32K Tokens.' },
        ],
      },
      body2: {
        title: 'Die VRAM-Kosten langer Kontextfenster',
        content: [
          'Die Erweiterung des Kontextfensters erhöht den VRAM-Verbrauch erheblich. <strong>Der KV-Cache, der den Attention-Zustand für alle Tokens im Kontext speichert, kann bei 128K Kontext so viel VRAM belegen wie die Modellgewichte selbst.</strong>',
          'Die folgende Tabelle zeigt, wie der KV-Cache-VRAM für ein 7B-Modell bei Q4_K_M skaliert. Diese Werte gelten für Modelle mit Grouped Query Attention (GQA) — Modelle ohne GQA verwenden deutlich mehr KV-Cache.',
          'Um VRAM bei alltäglichen Aufgaben zu sparen, setzen Sie <code>--num-ctx 4096</code> beim Starten von Ollama. Erweitern Sie auf 32K oder 128K nur, wenn Ihre spezifische Aufgabe es erfordert. Den vollständigen Leitfaden zu Long-Context-LLMs einschließlich Modellauswahl und RAM-Splitting finden Sie im <a href="/de/local-llms/long-context-local-llms" class="text-primary hover:underline">Leitfaden für Long-Context-LLMs</a>.',
        ],
        columns: ['Kontextlänge', 'KV-Cache (7B)', 'Gesamt-VRAM (7B Q4)'],
        rows: [
          { 'Kontextlänge': '4K (Standard)', 'KV-Cache (7B)': '~0,5 GB', 'Gesamt-VRAM (7B Q4)': '~5,5 GB' },
          { 'Kontextlänge': '16K', 'KV-Cache (7B)': '~1,5 GB', 'Gesamt-VRAM (7B Q4)': '~6,5 GB' },
          { 'Kontextlänge': '32K', 'KV-Cache (7B)': '~3 GB', 'Gesamt-VRAM (7B Q4)': '~8 GB' },
          { 'Kontextlänge': '128K', 'KV-Cache (7B)': '~10 GB', 'Gesamt-VRAM (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Long-Context-Modellen',
        faqs: [
          {
            q: 'Wie aktiviere ich 128K Kontext in Ollama?',
            a: 'Fügen Sie <code>--num-ctx 131072</code> zu Ihrem Run-Befehl hinzu: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Ohne dieses Flag verwendet Ollamas Modelfile-Spezifikation standardmäßig 2048 Tokens, und selbst der VRAM-gestaffelte Laufzeit-Standard (4K unter 24 GiB, 32K bei 24–48 GiB, 256K darüber) kann unter der maximalen Fähigkeit des Modells liegen — setzen Sie num_ctx explizit, um dies zu garantieren.',
          },
          {
            q: 'Warum verbraucht langer Kontext so viel VRAM?',
            a: 'Der KV-Cache speichert den Attention-Zustand für jeden Token im Kontext. Bei 128K Tokens kann dieser Cache so groß wie die Modellgewichte selbst sein. Ein 7B-Modell bei Q4 benötigt ~5,5 GB für die Gewichte, aber ~10 GB KV-Cache bei 128K Kontext.',
          },
          {
            q: 'Ist 128K Kontext nützlich für das Programmieren?',
            a: 'Ja, beim Arbeiten über große Codebasen. Einen gesamten Repository oder mehrere Dateien in den Kontext zu laden, verbessert Refactoring- und dateiübergreifende Reasoning-Aufgaben erheblich. Für das Programmieren über große Codebasen mit 128K+ ist Qwen3-30B-A3B das empfohlene Modell.',
          },
          {
            q: 'Welches Modell eignet sich am besten für die Analyse langer Dokumente?',
            a: 'Qwen3-30B-A3B ist die beste Wahl für lange Dokumente auf Ollama — das 256K-Kontextfenster bietet mehr Spielraum als 128K-Modelle, und als Mixture-of-Experts-Modell läuft es schneller als ein dichtes Modell ähnlicher Größe. Siehe <a href="/de/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama Vision-Modelle</a>, wenn Sie neben langen Dokumenten auch Bildverständnis benötigen.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Leitfaden für Long-Context-LLMs](/de/local-llms/long-context-local-llms) -- Modellauswahl und RAM-Splitting',
          '[Kann man Qwen 3 mit Ollama ausführen?](/de/prompt-bites/can-you-run-qwen3-on-ollama) -- Einrichtung und VRAM-Anforderungen',
          '[Welche Ollama-Modelle unterstützen Vision?](/de/prompt-bites/which-ollama-models-support-vision) -- multimodale Modelle auf Ollama',
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-fr.webp',
    title: 'Quels modèles Ollama supportent le contexte 128K ?',
    seoTitle: 'Ollama 128K contexte 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B et Qwen3-30B-A3B supportent 128K+ contexte sur Ollama. Qwen3-30B-A3B atteint 256K. Le contexte complet augmente fortement la VRAM.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles Ollama supportent le contexte 128K ?',
        answer: 'Llama 3.1 8B supporte le contexte 128K sur Ollama. Qwen3-30B-A3B, un modèle mixture-of-experts, atteint 256K de contexte. Attention : le contexte complet augmente fortement la VRAM — une fenêtre 128K nécessite 3–4× plus de VRAM que la fenêtre par défaut de 4K.',
        bullets: [
          'Llama 3.1 8B : contexte 128K, ~16 GB VRAM en contexte complet',
          'Qwen3-30B-A3B : contexte 256K, 24+ GB VRAM en contexte complet',
          'Définissez --num-ctx 4096 pour l\'usage normal afin d\'économiser la VRAM',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La plupart des modèles Ollama 7B annoncent 128K de contexte mais dégradent en qualité au-delà de 32K tokens',
          'Llama 3.1 8B et Qwen3-30B-A3B sont les deux modèles qui délivrent de façon fiable un contexte 128K+ sur Ollama',
          'Une fenêtre de contexte 128K peut presque tripler l\'utilisation VRAM — un modèle 7B Q4 a besoin de ~15 GB à 128K contre ~5,5 GB par défaut',
          'Définissez <code>--num-ctx 4096</code> pour les tâches quotidiennes ; n\'étendez le contexte que lorsque nécessaire',
        ],
      },
      body1: {
        title: 'Les modèles qui atteignent vraiment 128K',
        content: [
          '<strong>La plupart des modèles Ollama annoncent 128K de contexte, mais peu délivrent une qualité de sortie utile à cette longueur.</strong> Le problème est l\'effet "perdu au milieu" : les modèles entraînés sur des longueurs de documents typiques peinent à traiter des informations placées au cœur d\'un long contexte.',
          'Deux modèles délivrent de façon fiable un contexte 128K+ sur Ollama : <strong>Llama 3.1 8B</strong> (entraîné nativement à 128K) et <strong>Qwen3-30B-A3B</strong> (un modèle mixture-of-experts avec une fenêtre de 256K sur la bibliothèque officielle d\'Ollama, qui n\'active qu\'environ 3 milliards de ses 30 milliards de paramètres par token). Les tailles denses plus petites de Qwen3 utilisent par défaut une fenêtre de 40K sur Ollama, et pour la plupart des autres modèles 7B, la qualité de sortie se dégrade aussi notablement au-delà de 32K tokens.',
          'Si votre tâche implique des documents de plus de 20 000 mots, commencez par Llama 3.1 8B. Si vous avez besoin de la plus grande fenêtre de contexte et disposez de 20+ GB de VRAM, Qwen3-30B-A3B est le meilleur choix.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Les deux modèles Ollama qui délivrent de façon fiable un contexte 128K+ sont Llama 3.1 8B (128K, entraîné nativement) et Qwen3-30B-A3B (256K, mixture-of-experts).' },
          { type: 'plain-terms', text: 'Llama 3.1 8B a été entraîné dès le départ pour gérer 128K tokens de contexte, sa qualité de sortie reste donc stable à cette longueur. Qwen3-30B-A3B est un modèle mixture-of-experts — il n\'active qu\'environ 3 milliards de ses 30 milliards de paramètres par token — et Ollama le référence avec une fenêtre de 256K. La plupart des autres modèles 7B annoncent 128K, mais leur qualité de sortie chute notablement au-delà de 32K tokens.' },
        ],
      },
      body2: {
        title: 'Le coût VRAM du contexte long',
        content: [
          'L\'extension de la fenêtre de contexte augmente significativement l\'utilisation VRAM. <strong>Le KV-cache, qui stocke l\'état d\'attention pour tous les tokens en contexte, peut utiliser autant de VRAM que les poids du modèle lui-même à 128K de contexte.</strong>',
          'Le tableau ci-dessous montre comment le VRAM du KV-cache évolue pour un modèle 7B en Q4_K_M. Ces chiffres supposent des modèles utilisant le grouped query attention (GQA) — les modèles sans GQA utilisent significativement plus de KV-cache.',
          'Pour économiser la VRAM sur les tâches quotidiennes, définissez <code>--num-ctx 4096</code> lors du lancement d\'Ollama. N\'étendez à 32K ou 128K que lorsque votre tâche spécifique le requiert. Pour le guide complet sur les LLMs locaux à contexte long, consultez le <a href="/fr/local-llms/long-context-local-llms" class="text-primary hover:underline">guide des LLMs locaux à contexte long</a>.',
        ],
        columns: ['Longueur de contexte', 'KV-Cache (7B)', 'VRAM total (7B Q4)'],
        rows: [
          { 'Longueur de contexte': '4K (défaut)', 'KV-Cache (7B)': '~0,5 GB', 'VRAM total (7B Q4)': '~5,5 GB' },
          { 'Longueur de contexte': '16K', 'KV-Cache (7B)': '~1,5 GB', 'VRAM total (7B Q4)': '~6,5 GB' },
          { 'Longueur de contexte': '32K', 'KV-Cache (7B)': '~3 GB', 'VRAM total (7B Q4)': '~8 GB' },
          { 'Longueur de contexte': '128K', 'KV-Cache (7B)': '~10 GB', 'VRAM total (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles à contexte long',
        faqs: [
          {
            q: 'Comment activer le contexte 128K dans Ollama ?',
            a: 'Ajoutez <code>--num-ctx 131072</code> à votre commande run : <code>ollama run llama3.1:8b --num-ctx 131072</code>. Sans ce paramètre, la spécification Modelfile d\'Ollama utilise par défaut 2048 tokens, et même la valeur par défaut échelonnée selon la VRAM (4K sous 24 Gio, 32K entre 24 et 48 Gio, 256K au-delà) peut rester en dessous de la capacité maximale du modèle — définissez num_ctx explicitement pour la garantir.',
          },
          {
            q: 'Pourquoi le contexte long utilise-t-il autant de VRAM ?',
            a: 'Le KV-cache stocke l\'état d\'attention pour chaque token en contexte. À 128K tokens, ce cache peut être aussi volumineux que les poids du modèle. Un modèle 7B en Q4 a besoin de ~5,5 GB pour les poids mais de ~10 GB de KV-cache à 128K de contexte.',
          },
          {
            q: 'Le contexte 128K est-il utile pour le développement ?',
            a: 'Oui, pour travailler sur de grandes bases de code. Intégrer un dépôt entier ou plusieurs fichiers dans le contexte améliore considérablement le refactoring et les tâches de raisonnement inter-fichiers. Pour le développement sur de grandes bases de code à 128K+, Qwen3-30B-A3B est le modèle recommandé.',
          },
          {
            q: 'Quel modèle est le meilleur pour l\'analyse de longs documents ?',
            a: 'Qwen3-30B-A3B est le premier choix pour les longs documents sur Ollama — sa fenêtre de 256K offre plus de marge que les modèles de classe 128K, et en tant que modèle mixture-of-experts, il tourne plus vite qu\'un modèle dense de taille similaire. Voir les <a href="/fr/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">modèles vision Ollama</a> si vous avez également besoin de compréhension d\'images avec de longs documents.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Guide des LLMs locaux à contexte long](/fr/local-llms/long-context-local-llms) -- choix du modèle et répartition de la RAM',
          '[Peut-on exécuter Qwen 3 avec Ollama ?](/fr/prompt-bites/can-you-run-qwen3-on-ollama) -- installation et besoins en VRAM',
          '[Quels modèles Ollama supportent la vision ?](/fr/prompt-bites/which-ollama-models-support-vision) -- modèles multimodaux sur Ollama',
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-ja.webp',
    title: 'Ollamaで128Kコンテキストに対応するモデルは？',
    seoTitle: 'Ollama 128Kコンテキスト2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8BとQwen3-30B-A3BはOllamaで128K以上のコンテキストに対応。Qwen3-30B-A3Bは256Kに到達。フルコンテキストはVRAMを大幅に増加させます。',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Ollamaで128Kコンテキストに対応するモデルは？',
        answer: 'Llama 3.1 8BはOllamaで128Kコンテキストに対応。Qwen3-30B-A3B（Mixture of Expertsモデル）は256Kコンテキストに到達。注意：フルコンテキストの実行はVRAMを大幅に増加させます——128Kウィンドウはデフォルトの4Kウィンドウの3〜4倍のVRAMが必要です。',
        bullets: [
          'Llama 3.1 8B：128Kコンテキスト、フルコンテキストで~16 GB VRAM',
          'Qwen3-30B-A3B：256Kコンテキスト、フルコンテキストで24+ GB VRAM',
          '通常使用時はVRAMを節約するため--num-ctx 4096を設定',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ほとんどの7B Ollamaモデルは128Kコンテキストを宣伝しているが、32Kトークン以上では品質が低下する',
          'Llama 3.1 8BとQwen3-30B-A3BはOllamaで128K以上のコンテキストを安定して提供する2つのモデル',
          '128Kコンテキストウィンドウはデフォルトと比較してVRAM使用量をほぼ3倍にする可能性がある——7B Q4モデルはデフォルトの約5.5 GBに対し128Kで約15 GBが必要',
          '日常的なタスクには<code>--num-ctx 4096</code>を設定し、必要な時だけコンテキストを拡張する',
        ],
      },
      body1: {
        title: '実際に128Kに到達するモデル',
        content: [
          '<strong>ほとんどのOllamaモデルは128Kコンテキストを宣伝していますが、その長さで有用な出力品質を実現するものは少数です。</strong>問題は「ロスト・イン・ザ・ミドル」効果：標準的な文書長で訓練されたモデルは、長いコンテキストの深い部分にある情報に注目するのが困難です。',
          'Ollamaで128K以上のコンテキストを安定して提供するモデルは2つ：<strong>Llama 3.1 8B</strong>（128Kでネイティブ訓練）と<strong>Qwen3-30B-A3B</strong>（Ollama公式ライブラリで256Kコンテキストウィンドウを持つMixture of Expertsモデルで、トークンごとに300億パラメータのうち約30億のみを活性化）。Qwen3の小型の高密度モデルはOllamaでデフォルト40Kコンテキストウィンドウとなり、他の7Bクラスモデルの大部分も32Kトークン以上では出力品質が著しく低下します。',
          '20,000語以上の文書を扱うタスクにはLlama 3.1 8Bから始めてください。最大のコンテキストウィンドウが必要で20+ GB VRAMがある場合は、Qwen3-30B-A3Bが優れた選択肢です。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollamaで128K以上のコンテキストを安定して提供する2つのモデルは、Llama 3.1 8B（128K、ネイティブ訓練）とQwen3-30B-A3B（256K、Mixture of Experts）です。' },
          { type: 'plain-terms', text: 'Llama 3.1 8Bは最初から128Kトークンのコンテキストを扱えるよう訓練されているため、その長さでも出力品質が安定しています。Qwen3-30B-A3BはMixture of Expertsモデルで、トークンごとに300億パラメータのうち約30億のみを活性化し、Ollamaでは256Kコンテキストウィンドウとして提供されています。他の7Bクラスモデルの大部分は128Kを宣伝していますが、32Kトークンを超えると出力品質が目に見えて低下します。' },
        ],
      },
      body2: {
        title: '長いコンテキストのVRAMコスト',
        content: [
          'コンテキストウィンドウを拡張するとVRAM使用量が大幅に増加します。<strong>KV-Cache（コンテキスト内のすべてのトークンのアテンション状態を保存）は、128Kコンテキストではモデルの重みと同量のVRAMを使用することがあります。</strong>',
          '下の表はQ4_K_Mの7BモデルにおけるKV-CacheのVRAMスケーリングを示します。これらの数値はGrouped Query Attention（GQA）を使用するモデルを想定しています——GQAを使用しないモデルはKV-Cacheの使用量が大幅に多くなります。',
          '日常的なタスクでVRAMを節約するには、Ollamaの起動時に<code>--num-ctx 4096</code>を設定してください。特定のタスクで必要な場合にのみ32Kや128Kに拡張します。モデル選択やRAM分割を含む長文コンテキストLLMの完全ガイドは、<a href="/ja/local-llms/long-context-local-llms" class="text-primary hover:underline">長文コンテキストローカルLLMガイド</a>をご覧ください。',
        ],
        columns: ['コンテキスト長', 'KV-Cache (7B)', '合計VRAM (7B Q4)'],
        rows: [
          { 'コンテキスト長': '4K（デフォルト）', 'KV-Cache (7B)': '~0.5 GB', '合計VRAM (7B Q4)': '~5.5 GB' },
          { 'コンテキスト長': '16K', 'KV-Cache (7B)': '~1.5 GB', '合計VRAM (7B Q4)': '~6.5 GB' },
          { 'コンテキスト長': '32K', 'KV-Cache (7B)': '~3 GB', '合計VRAM (7B Q4)': '~8 GB' },
          { 'コンテキスト長': '128K', 'KV-Cache (7B)': '~10 GB', '合計VRAM (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: '長文コンテキストモデルに関するよくある質問',
        faqs: [
          {
            q: 'Ollamaで128Kコンテキストを有効にするには？',
            a: '実行コマンドに<code>--num-ctx 131072</code>を追加します：<code>ollama run llama3.1:8b --num-ctx 131072</code>。このフラグがない場合、OllamaのModelfile仕様ではnum_ctxのデフォルトは2048ですが、VRAM階層別のランタイムデフォルト(24 GiB未満は4K、24〜48 GiBは32K、それ以上は256K)でもモデルの最大能力に届かないことがあります。確実に使うにはnum_ctxを明示的に設定してください。',
          },
          {
            q: '長いコンテキストはなぜVRAMを大量に消費するのですか？',
            a: 'KV-Cacheはコンテキスト内のすべてのトークンのアテンション状態を保存します。128Kトークンでは、このキャッシュはモデルの重みと同じ大きさになることがあります。7B Q4モデルは重みに約5.5 GBが必要ですが、128Kコンテキストでは約10 GBのKV-Cacheが必要です。',
          },
          {
            q: '128Kコンテキストはコーディングに役立ちますか？',
            a: 'はい、大規模なコードベースを扱う際に有効です。リポジトリ全体や複数ファイルをコンテキストに収めることで、リファクタリングやファイル横断的な推論タスクが大幅に改善されます。128K以上での大規模コードベースのコーディングには、Qwen3-30B-A3Bが推奨モデルです。',
          },
          {
            q: '長文ドキュメント分析に最適なモデルは？',
            a: 'Qwen3-30B-A3BはOllamaでの長文ドキュメントにおける第一選択肢です——256Kコンテキストウィンドウは128Kクラスのモデルよりも余裕があり、Mixture of Expertsモデルとして同規模の高密度モデルより高速に動作します。長文ドキュメントと並行して画像理解も必要な場合は、<a href="/ja/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollamaビジョンモデル</a>をご覧ください。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[長文コンテキストローカルLLMガイド](/ja/local-llms/long-context-local-llms) -- モデル選択とRAM分割',
          '[Qwen 3 は Ollama で動かせますか？](/ja/prompt-bites/can-you-run-qwen3-on-ollama) -- セットアップとVRAM要件',
          '[OllamaでVisionに対応しているモデルは？](/ja/prompt-bites/which-ollama-models-support-vision) -- Ollamaのマルチモーダルモデル',
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-zh.webp',
    title: 'Ollama上哪些模型支持128K上下文？',
    seoTitle: 'Ollama 128K上下文2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B和Qwen3-30B-A3B在Ollama上支持128K以上上下文。Qwen3-30B-A3B可达256K。完整上下文会大幅增加VRAM需求。',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'Ollama上哪些模型支持128K上下文？',
        answer: 'Llama 3.1 8B在Ollama上支持128K上下文。Qwen3-30B-A3B是一个混合专家（MoE）模型，可达256K上下文。注意：运行完整上下文会大幅增加VRAM——128K窗口比默认4K窗口需要多3–4倍VRAM。',
        bullets: [
          'Llama 3.1 8B：128K上下文，完整上下文约需16 GB VRAM',
          'Qwen3-30B-A3B：256K上下文，完整上下文需24+ GB VRAM',
          '日常使用设置--num-ctx 4096以节省VRAM',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '大多数7B Ollama模型宣称支持128K上下文，但超过32K token后质量明显下降',
          'Llama 3.1 8B和Qwen3-30B-A3B是能在Ollama上稳定提供128K以上上下文的两个模型',
          '128K上下文窗口可能使VRAM用量增至近3倍——7B Q4模型在128K下需约15 GB，默认只需约5.5 GB',
          '日常任务设置<code>--num-ctx 4096</code>；仅在需要时扩展上下文',
        ],
      },
      body1: {
        title: '真正能达到128K的模型',
        content: [
          '<strong>大多数Ollama模型宣称支持128K上下文，但在该长度下能提供有效输出质量的模型很少。</strong>问题在于"中间遗失"效应：在标准文档长度上训练的模型，难以关注到长上下文深处的信息。',
          '在Ollama上能稳定提供128K以上上下文的模型有两个：<strong>Llama 3.1 8B</strong>（原生在128K下训练）和<strong>Qwen3-30B-A3B</strong>（一个混合专家模型，在Ollama官方库中支持256K上下文窗口，每个token仅激活300亿参数中的约30亿）。Qwen3较小的稠密尺寸在Ollama中默认上下文窗口为40K，对于大多数其他7B级模型，输出质量在超过32K token后也会明显下降。',
          '如果您的任务涉及超过20,000字的文档，从Llama 3.1 8B开始。如果需要最大的上下文窗口且有20+ GB VRAM，Qwen3-30B-A3B是更好的选择。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '在Ollama上能稳定提供128K以上上下文的两个模型是Llama 3.1 8B（128K，原生训练）和Qwen3-30B-A3B（256K，混合专家模型）。' },
          { type: 'plain-terms', text: 'Llama 3.1 8B从一开始就针对128K token的上下文进行训练，因此在该长度下输出质量依然稳定。Qwen3-30B-A3B是一个混合专家模型——每个token仅激活300亿参数中的约30亿——Ollama将其列为256K上下文窗口。大多数其他7B级模型宣称支持128K，但输出质量在超过32K token后会明显下降。' },
        ],
      },
      body2: {
        title: '长上下文的VRAM成本',
        content: [
          '扩展上下文窗口会显著增加VRAM使用量。<strong>KV-Cache存储上下文中所有token的注意力状态，在128K上下文下可能占用与模型权重相当的VRAM。</strong>',
          '下表显示Q4_K_M的7B模型KV-Cache VRAM的扩展情况。这些数值假设模型使用分组查询注意力（GQA）——不使用GQA的模型会消耗更多KV-Cache。',
          '日常任务中节省VRAM，请在运行Ollama时设置<code>--num-ctx 4096</code>。仅在特定任务需要时扩展至32K或128K。长上下文本地LLM的完整指南（包括模型选择和RAM分割），请参阅<a href="/zh/local-llms/long-context-local-llms" class="text-primary hover:underline">长上下文本地LLM指南</a>。',
        ],
        columns: ['上下文长度', 'KV-Cache (7B)', '总VRAM (7B Q4)'],
        rows: [
          { '上下文长度': '4K（默认）', 'KV-Cache (7B)': '~0.5 GB', '总VRAM (7B Q4)': '~5.5 GB' },
          { '上下文长度': '16K', 'KV-Cache (7B)': '~1.5 GB', '总VRAM (7B Q4)': '~6.5 GB' },
          { '上下文长度': '32K', 'KV-Cache (7B)': '~3 GB', '总VRAM (7B Q4)': '~8 GB' },
          { '上下文长度': '128K', 'KV-Cache (7B)': '~10 GB', '总VRAM (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: '长上下文模型常见问题',
        faqs: [
          {
            q: '如何在Ollama中启用128K上下文？',
            a: '在运行命令中添加<code>--num-ctx 131072</code>：<code>ollama run llama3.1:8b --num-ctx 131072</code>。不使用该参数时，Ollama的Modelfile规范默认num_ctx为2048，即使是按VRAM分级的运行时默认值(24 GiB以下为4K，24–48 GiB为32K，以上为256K)也可能达不到模型的最大能力——请显式设置num_ctx以确保达到该能力。',
          },
          {
            q: '为什么长上下文需要这么多VRAM？',
            a: 'KV-Cache存储上下文中每个token的注意力状态。在128K token时，该缓存可能与模型权重本身一样大。7B Q4模型需要约5.5 GB存储权重，但在128K上下文下需要约10 GB的KV-Cache。',
          },
          {
            q: '128K上下文对代码开发有用吗？',
            a: '是的，在处理大型代码库时非常有用。将整个代码仓库或多个文件纳入上下文，可以显著改善重构和跨文件推理任务。128K以上的大型代码库开发推荐使用Qwen3-30B-A3B。',
          },
          {
            q: '长文档分析最适合哪个模型？',
            a: 'Qwen3-30B-A3B是Ollama上长文档的首选——其256K上下文窗口比128K级别的模型有更多余量，作为混合专家模型，其运行速度也比同等规模的稠密模型更快。如果还需要在长文档旁进行图像理解，请参阅<a href="/zh/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama视觉模型</a>。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[长上下文本地LLM指南](/zh/local-llms/long-context-local-llms) -- 模型选择与内存分配',
          '[可以在Ollama上运行Qwen 3吗？](/zh/prompt-bites/can-you-run-qwen3-on-ollama) -- 安装与VRAM需求',
          '[哪些Ollama模型支持视觉功能？](/zh/prompt-bites/which-ollama-models-support-vision) -- Ollama上的多模态模型',
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-pt.webp',
    title: 'Quais modelos do Ollama suportam contexto de 128K?',
    seoTitle: 'Ollama contexto 128K 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B e Qwen3-30B-A3B suportam 128K+ de contexto no Ollama; Qwen3-30B-A3B chega a 256K. O contexto completo aumenta muito a VRAM. 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos do Ollama suportam contexto de 128K?',
        answer: 'Llama 3.1 8B suporta contexto de 128K no Ollama. O Qwen3-30B-A3B, um modelo mixture-of-experts, chega a 256K de contexto. Nota: executar o contexto completo aumenta drasticamente a VRAM — uma janela de 128K precisa de 3 a 4 vezes mais VRAM que a janela padrão de 4K.',
        bullets: [
          'Llama 3.1 8B: contexto de 128K, ~16 GB de VRAM com contexto completo',
          'Qwen3-30B-A3B: contexto de 256K, 24+ GB de VRAM com contexto completo',
          'Defina --num-ctx 4096 para uso normal e economize VRAM',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A maioria dos modelos 7B do Ollama anuncia contexto de 128K, mas a qualidade se degrada acima de 32K tokens',
          'Llama 3.1 8B e Qwen3-30B-A3B são os dois modelos que oferecem 128K+ de contexto de forma confiável no Ollama',
          'Uma janela de contexto de 128K pode quase triplicar o uso de VRAM — um modelo 7B Q4 precisa de ~15 GB com 128K frente a ~5,5 GB no padrão',
          'Defina <code>--num-ctx 4096</code> para tarefas cotidianas; expanda o contexto apenas quando necessário',
        ],
      },
      body1: {
        title: 'Quais modelos realmente alcançam 128K',
        content: [
          '<strong>A maioria dos modelos do Ollama anuncia contexto de 128K, mas poucos oferecem qualidade de saída útil nesse comprimento.</strong> O problema é o efeito "perdido no meio": modelos treinados em comprimentos típicos de documentos têm dificuldade em processar informações colocadas fundo em um contexto longo.',
          'Dois modelos oferecem 128K+ de contexto de forma confiável no Ollama: <strong>Llama 3.1 8B</strong> (nativamente treinado a 128K) e <strong>Qwen3-30B-A3B</strong> (um modelo mixture-of-experts com janela de contexto de 256K na biblioteca oficial do Ollama, que ativa apenas cerca de 3 bilhões dos seus 30 bilhões de parâmetros por token). Os tamanhos densos menores do Qwen3 usam por padrão uma janela de contexto de 40K no Ollama, e para a maioria dos outros modelos de classe 7B, a qualidade de saída também se degrada notavelmente acima de 32K tokens.',
          'Se sua tarefa envolve documentos com mais de 20.000 palavras, comece com Llama 3.1 8B. Se precisar da maior janela de contexto e tiver 20+ GB de VRAM, o Qwen3-30B-A3B é a melhor opção.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Os dois modelos do Ollama que oferecem 128K+ de contexto de forma confiável são o Llama 3.1 8B (128K, treinado nativamente) e o Qwen3-30B-A3B (256K, mixture-of-experts).' },
          { type: 'plain-terms', text: 'O Llama 3.1 8B foi treinado desde o início para lidar com 128K tokens de contexto, então sua qualidade de saída se mantém nesse comprimento. O Qwen3-30B-A3B é um modelo mixture-of-experts — ativa apenas cerca de 3 bilhões dos seus 30 bilhões de parâmetros por token — e o Ollama o lista com uma janela de contexto de 256K. A maioria dos outros modelos de classe 7B anuncia 128K, mas sua qualidade de saída cai visivelmente após 32K tokens.' },
        ],
      },
      body2: {
        title: 'O custo de VRAM do contexto longo',
        content: [
          'Expandir a janela de contexto aumenta significativamente o uso de VRAM. <strong>O KV-cache, que armazena o estado de atenção para todos os tokens no contexto, pode usar tanta VRAM quanto os próprios pesos do modelo com contexto de 128K.</strong>',
          'A tabela abaixo mostra como a VRAM do KV-cache escala para um modelo 7B em Q4_K_M. Esses números assumem modelos usando grouped query attention (GQA) — modelos sem GQA usam significativamente mais KV-cache.',
          'Para economizar VRAM em tarefas cotidianas, defina <code>--num-ctx 4096</code> ao executar o Ollama. Expanda para 32K ou 128K apenas quando sua tarefa específica exigir. Para o guia completo sobre LLMs locais de contexto longo, consulte o <a href="/pt/local-llms/long-context-local-llms" class="text-primary hover:underline">guia de LLMs locais de contexto longo</a>.',
        ],
        columns: ['Comprimento de contexto', 'KV-Cache (7B)', 'VRAM total (7B Q4)'],
        rows: [
          { 'Comprimento de contexto': '4K (padrão)', 'KV-Cache (7B)': '~0,5 GB', 'VRAM total (7B Q4)': '~5,5 GB' },
          { 'Comprimento de contexto': '16K', 'KV-Cache (7B)': '~1,5 GB', 'VRAM total (7B Q4)': '~6,5 GB' },
          { 'Comprimento de contexto': '32K', 'KV-Cache (7B)': '~3 GB', 'VRAM total (7B Q4)': '~8 GB' },
          { 'Comprimento de contexto': '128K', 'KV-Cache (7B)': '~10 GB', 'VRAM total (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre os modelos de contexto longo',
        faqs: [
          {
            q: 'Como ativar o contexto de 128K no Ollama?',
            a: 'Adicione <code>--num-ctx 131072</code> ao seu comando de execução: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Sem essa opção, a especificação Modelfile do Ollama usa por padrão 2048 tokens, e mesmo o padrão de runtime escalonado por VRAM (4K abaixo de 24 GiB, 32K entre 24–48 GiB, 256K acima) pode ficar abaixo da capacidade máxima do modelo — defina num_ctx explicitamente para garanti-la.',
          },
          {
            q: 'Por que o contexto longo usa tanta VRAM?',
            a: 'O KV-cache armazena o estado de atenção para cada token no contexto. Com 128K tokens, esse cache pode ser tão grande quanto os próprios pesos do modelo. Um modelo 7B em Q4 precisa de ~5,5 GB para os pesos, mas de ~10 GB de KV-cache com contexto de 128K.',
          },
          {
            q: 'O contexto de 128K é útil para codificação?',
            a: 'Sim, ao trabalhar com grandes bases de código. Incluir um repositório inteiro ou vários arquivos no contexto melhora enormemente as tarefas de refatoração e raciocínio entre arquivos. Para codificação em grandes bases de código com 128K+, o Qwen3-30B-A3B é o modelo recomendado.',
          },
          {
            q: 'Qual modelo é melhor para análise de documentos longos?',
            a: 'O Qwen3-30B-A3B é a primeira opção para documentos longos no Ollama — sua janela de contexto de 256K oferece mais margem do que modelos de classe 128K, e por ser um modelo mixture-of-experts, roda mais rápido do que um modelo denso de tamanho semelhante. Consulte <a href="/pt/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">os modelos de visão do Ollama</a> se também precisar de compreensão de imagens junto com documentos longos.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Guia de LLMs locais de contexto longo](/pt/local-llms/long-context-local-llms) -- seleção de modelo e divisão de RAM',
          '[Você pode executar Qwen 3 no Ollama?](/pt/prompt-bites/can-you-run-qwen3-on-ollama) -- configuração e requisitos de VRAM',
          '[Quais modelos do Ollama suportam visão?](/pt/prompt-bites/which-ollama-models-support-vision) -- modelos multimodais no Ollama',
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-es.webp',
    title: '¿Qué modelos de Ollama admiten contexto de 128K?',
    seoTitle: 'Ollama contexto 128K 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B y Qwen3-30B-A3B admiten 128K de contexto o más en Ollama; Qwen3-30B-A3B llega a 256K. El contexto completo aumenta mucho la VRAM. 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos de Ollama admiten contexto de 128K?',
        answer: 'Llama 3.1 8B admite contexto de 128K en Ollama. Qwen3-30B-A3B, un modelo mixture-of-experts, alcanza 256K de contexto. Nota: ejecutar el contexto completo aumenta drásticamente la VRAM — una ventana de 128K necesita entre 3 y 4 veces más VRAM que la ventana predeterminada de 4K.',
        bullets: [
          'Llama 3.1 8B: contexto de 128K, ~16 GB de VRAM con contexto completo',
          'Qwen3-30B-A3B: contexto de 256K, 24+ GB de VRAM con contexto completo',
          'Establece --num-ctx 4096 para uso normal y ahorra VRAM',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La mayoría de los modelos 7B de Ollama anuncian contexto de 128K pero su calidad se degrada por encima de los 32K tokens',
          'Llama 3.1 8B y Qwen3-30B-A3B son los dos modelos que ofrecen de forma fiable 128K+ de contexto en Ollama',
          'Una ventana de contexto de 128K puede casi triplicar el uso de VRAM — un modelo 7B Q4 necesita ~15 GB con 128K frente a ~5,5 GB con el valor predeterminado',
          'Establece <code>--num-ctx 4096</code> para tareas cotidianas; amplía el contexto solo cuando lo necesites',
        ],
      },
      body1: {
        title: 'Qué modelos realmente alcanzan 128K',
        content: [
          '<strong>La mayoría de los modelos de Ollama anuncian contexto de 128K, pero pocos ofrecen una calidad de salida útil a esa longitud.</strong> El problema es el efecto "perdido en el medio": los modelos entrenados con longitudes típicas de documento tienen dificultades para atender información colocada profundamente en un contexto largo.',
          'Dos modelos ofrecen de forma fiable 128K+ de contexto en Ollama: <strong>Llama 3.1 8B</strong> (entrenado de forma nativa a 128K) y <strong>Qwen3-30B-A3B</strong> (un modelo mixture-of-experts con una ventana de contexto de 256K en la biblioteca oficial de Ollama, que solo activa unos 3.000 millones de sus 30.000 millones de parámetros por token). Los tamaños densos más pequeños de Qwen3 usan por defecto una ventana de contexto de 40K en Ollama, y en la mayoría de los demás modelos de clase 7B, la calidad de salida también se degrada notablemente por encima de los 32K tokens.',
          'Si tu tarea implica documentos de más de 20.000 palabras, empieza con Llama 3.1 8B. Si necesitas la ventana de contexto más grande y tienes 20 GB o más de VRAM, Qwen3-30B-A3B es la mejor opción.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Los dos modelos de Ollama que ofrecen de forma fiable 128K+ de contexto son Llama 3.1 8B (128K, entrenado de forma nativa) y Qwen3-30B-A3B (256K, mixture-of-experts).' },
          { type: 'plain-terms', text: 'Llama 3.1 8B fue entrenado desde el principio para manejar 128K tokens de contexto, por lo que su calidad de salida se mantiene a esa longitud. Qwen3-30B-A3B es un modelo mixture-of-experts — solo activa unos 3.000 millones de sus 30.000 millones de parámetros por token — y Ollama lo lista con una ventana de contexto de 256K. La mayoría de los demás modelos de clase 7B anuncian 128K, pero su calidad de salida cae notablemente después de los 32K tokens.' },
        ],
      },
      body2: {
        title: 'El coste de VRAM del contexto largo',
        content: [
          'Ampliar la ventana de contexto aumenta el uso de VRAM de forma significativa. <strong>La KV-cache, que almacena el estado de atención para todos los tokens en contexto, puede añadir tanta VRAM como los propios pesos del modelo con contexto de 128K.</strong>',
          'La tabla a continuación muestra cómo escala la VRAM de la KV-cache para un modelo 7B en Q4_K_M. Estas cifras asumen modelos que utilizan grouped query attention (GQA) — los modelos sin GQA usan significativamente más KV-cache.',
          'Para ahorrar VRAM en tareas cotidianas, establece <code>--num-ctx 4096</code> al ejecutar Ollama. Solo amplía a 32K o 128K cuando tu tarea específica lo requiera. Para la guía completa sobre LLM locales de contexto largo, incluyendo la selección de modelos y la división de RAM, consulta la <a href="/es/local-llms/long-context-local-llms" class="text-primary hover:underline">guía de LLM locales de contexto largo</a>.',
        ],
        columns: ['Longitud de contexto', 'KV-Cache (7B)', 'VRAM total (7B Q4)'],
        rows: [
          { 'Longitud de contexto': '4K (predeterminado)', 'KV-Cache (7B)': '~0,5 GB', 'VRAM total (7B Q4)': '~5,5 GB' },
          { 'Longitud de contexto': '16K', 'KV-Cache (7B)': '~1,5 GB', 'VRAM total (7B Q4)': '~6,5 GB' },
          { 'Longitud de contexto': '32K', 'KV-Cache (7B)': '~3 GB', 'VRAM total (7B Q4)': '~8 GB' },
          { 'Longitud de contexto': '128K', 'KV-Cache (7B)': '~10 GB', 'VRAM total (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre los modelos de contexto largo',
        faqs: [
          {
            q: '¿Cómo activo el contexto de 128K en Ollama?',
            a: 'Añade <code>--num-ctx 131072</code> a tu comando de ejecución: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Sin esta opción, la especificación Modelfile de Ollama usa por defecto 2048 tokens, e incluso el valor predeterminado escalonado por VRAM (4K por debajo de 24 GiB, 32K entre 24 y 48 GiB, 256K por encima) puede quedarse corto frente a la capacidad máxima del modelo — configura num_ctx explícitamente para garantizarla.',
          },
          {
            q: '¿Por qué el contexto largo usa tanta VRAM?',
            a: 'La KV-cache almacena el estado de atención para cada token en el contexto. Con 128K tokens, esta caché puede ser tan grande como los propios pesos del modelo. Un modelo 7B en Q4 necesita ~5,5 GB para los pesos, pero ~10 GB de KV-cache con contexto de 128K.',
          },
          {
            q: '¿El contexto de 128K es útil para la codificación?',
            a: 'Sí, al trabajar con bases de código grandes. Introducir un repositorio completo o múltiples archivos en el contexto mejora enormemente las tareas de refactorización y razonamiento entre archivos. Para codificación en bases de código grandes con 128K+, Qwen3-30B-A3B es el modelo recomendado.',
          },
          {
            q: '¿Qué modelo es el mejor para el análisis de documentos largos?',
            a: 'Qwen3-30B-A3B es la primera opción para documentos largos en Ollama — su ventana de contexto de 256K ofrece más margen que los modelos de clase 128K, y al ser un modelo mixture-of-experts, funciona más rápido que un modelo denso de tamaño similar. Consulta <a href="/es/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">los modelos de visión de Ollama</a> si también necesitas comprensión de imágenes junto con documentos largos.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Guía de LLM locales de contexto largo](/es/local-llms/long-context-local-llms) -- selección de modelo y división de RAM',
          '[¿Se puede ejecutar Qwen 3 en Ollama?](/es/prompt-bites/can-you-run-qwen3-on-ollama) -- configuración y requisitos de VRAM',
          '[¿Qué modelos de Ollama son compatibles con visión?](/es/prompt-bites/which-ollama-models-support-vision) -- modelos multimodales en Ollama',
        ],
      },
    },
  },
  ar: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-ar.webp',
    title: 'ما نماذج ⁨Ollama⁩ التي تدعم سياق ⁨128K⁩؟',
    seoTitle: '⁨Ollama⁩ سياق ⁨128K⁩: ⁨Llama 3.1 8B⁩ و⁨Qwen 3 2026⁩',
    metaDescription: '⁨Llama 3.1 8B⁩ يدعم سياق ⁨128K⁩ على ⁨Ollama⁩؛ ⁨Qwen3-30B-A3B⁩ يصل إلى ⁨256K⁩. نافذة ⁨128K⁩ تستهلك ⁨3⁩–⁨4⁩ أضعاف ⁨VRAM⁩ مقارنةً بالإعداد الافتراضي ⁨4K⁩.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما نماذج Ollama التي تدعم سياق 128K؟',
        answer: 'يدعم Llama 3.1 8B سياقاً بحجم 128K في Ollama. يصل Qwen3-30B-A3B، وهو نموذج mixture-of-experts، إلى سياق 256K. ملاحظة: تشغيل السياق الكامل يزيد VRAM بشكل كبير — نافذة بحجم 128K تحتاج إلى 3 إلى 4 أضعاف الـ VRAM مقارنةً بالنافذة الافتراضية البالغة 4K.',
        bullets: [
          'Llama 3.1 8B: سياق 128K، حوالي 16 GB من VRAM مع السياق الكامل',
          'Qwen3-30B-A3B: سياق 256K، أكثر من 24 GB من VRAM مع السياق الكامل',
          'اضبط --num-ctx 4096 للاستخدام العادي وحافظ على VRAM',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'معظم نماذج 7B في Ollama تُعلن عن سياق 128K لكن جودتها تتراجع فوق 32K رمز',
          'Llama 3.1 8B وQwen3-30B-A3B هما النموذجان اللذان يوفران بشكل موثوق سياقاً يفوق 128K على Ollama',
          'نافذة سياق 128K قد تضاعف استخدام VRAM تقريباً ثلاث مرات — نموذج 7B بـ Q4 يحتاج حوالي 15 GB مع 128K مقابل حوالي 5.5 GB بالقيمة الافتراضية',
          'اضبط <code>--num-ctx 4096</code> للمهام اليومية؛ وسّع السياق فقط عند الحاجة',
        ],
      },
      body1: {
        title: 'ما النماذج التي تبلغ فعلاً 128K',
        content: [
          '<strong>تُعلن معظم نماذج Ollama عن سياق 128K، لكن قلة منها يوفر جودة مخرجات مفيدة عند هذا الطول.</strong> المشكلة هي تأثير "الضياع في المنتصف": النماذج المدربة على أطوال مستند نموذجية تجد صعوبة في الانتباه إلى المعلومات الموجودة في عمق السياق الطويل.',
          'نموذجان يوفران بشكل موثوق سياقاً يفوق 128K على Ollama: <strong>Llama 3.1 8B</strong> (مدرب بشكل أصلي على 128K) و<strong>Qwen3-30B-A3B</strong> (نموذج mixture-of-experts بنافذة سياق 256K في مكتبة Ollama الرسمية، يُفعّل فقط نحو 3 مليارات من أصل 30 مليار معامل لكل رمز). أحجام Qwen3 الأصغر الكثيفة تستخدم افتراضياً نافذة سياق 40K في Ollama، وبالنسبة لمعظم النماذج الأخرى من فئة 7B، تتراجع جودة المخرجات أيضاً بشكل ملحوظ فوق 32K رمز.',
          'إذا كانت مهمتك تتضمن مستندات تزيد عن 20,000 كلمة، ابدأ بـ Llama 3.1 8B. إذا كنت بحاجة إلى أكبر نافذة سياق ولديك 20 GB أو أكثر من VRAM، فـ Qwen3-30B-A3B هو الخيار الأفضل.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'النموذجان في Ollama اللذان يوفران بشكل موثوق سياقاً يفوق 128K هما Llama 3.1 8B (128K، مدرب أصلياً) وQwen3-30B-A3B (256K، mixture-of-experts).' },
          { type: 'plain-terms', text: 'تم تدريب Llama 3.1 8B منذ البداية على التعامل مع سياق بحجم 128K رمز، لذا تبقى جودة مخرجاته مستقرة عند هذا الطول. Qwen3-30B-A3B هو نموذج mixture-of-experts — يُفعّل فقط نحو 3 مليارات من أصل 30 مليار معامل لكل رمز — وتُدرجه Ollama بنافذة سياق 256K. تُعلن معظم النماذج الأخرى من فئة 7B عن دعم 128K، لكن جودة مخرجاتها تتراجع بشكل ملحوظ بعد 32K رمز.' },
        ],
      },
      body2: {
        title: 'تكلفة VRAM للسياق الطويل',
        content: [
          'توسيع نافذة السياق يزيد استخدام VRAM بشكل كبير. <strong>ذاكرة KV-cache، التي تخزن حالة الانتباه لجميع الرموز في السياق، يمكن أن تضيف قدراً من VRAM يعادل أوزان النموذج نفسها مع سياق 128K.</strong>',
          'يوضح الجدول أدناه كيف يتوسع VRAM لـ KV-cache لنموذج 7B بـ Q4_K_M. تفترض هذه الأرقام نماذج تستخدم grouped query attention (GQA) — النماذج بدون GQA تستخدم KV-cache أكبر بكثير.',
          'لتوفير VRAM في المهام اليومية، اضبط <code>--num-ctx 4096</code> عند تشغيل Ollama. وسّع إلى 32K أو 128K فقط عند الحاجة لمهمة معينة. للدليل الكامل حول LLM محلية بسياق طويل، بما في ذلك اختيار النماذج وتقسيم RAM، راجع <a href="/ar/local-llms/long-context-local-llms" class="text-primary hover:underline">دليل LLM المحلية بسياق طويل</a>.',
        ],
        columns: ['طول السياق', 'KV-Cache (7B)', 'إجمالي VRAM (7B Q4)'],
        rows: [
          { 'طول السياق': '4K (افتراضي)', 'KV-Cache (7B)': '~0.5 GB', 'إجمالي VRAM (7B Q4)': '~5.5 GB' },
          { 'طول السياق': '16K', 'KV-Cache (7B)': '~1.5 GB', 'إجمالي VRAM (7B Q4)': '~6.5 GB' },
          { 'طول السياق': '32K', 'KV-Cache (7B)': '~3 GB', 'إجمالي VRAM (7B Q4)': '~8 GB' },
          { 'طول السياق': '128K', 'KV-Cache (7B)': '~10 GB', 'إجمالي VRAM (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج السياق الطويل',
        faqs: [
          {
            q: 'كيف أفعّل سياق 128K في Ollama؟',
            a: 'أضف <code>--num-ctx 131072</code> إلى أمر التشغيل: <code>ollama run llama3.1:8b --num-ctx 131072</code>. بدون هذا الخيار، تحدد مواصفة Modelfile في Ollama القيمة الافتراضية لـ num_ctx بـ 2048 رمزاً، وحتى القيمة الافتراضية المتدرجة حسب VRAM (4K لأقل من 24 GiB، 32K من 24-48 GiB، 256K وما فوق) قد لا تصل إلى الحد الأقصى لقدرة النموذج — اضبط num_ctx صراحةً لضمان ذلك.',
          },
          {
            q: 'لماذا يستهلك السياق الطويل كثيراً من VRAM؟',
            a: 'تخزن KV-cache حالة الانتباه لكل رمز في السياق. مع 128K رمز، يمكن أن تكون هذه الذاكرة المؤقتة بحجم أوزان النموذج نفسها. نموذج 7B بـ Q4 يحتاج حوالي 5.5 GB للأوزان، لكن حوالي 10 GB لـ KV-cache مع سياق 128K.',
          },
          {
            q: 'هل سياق 128K مفيد للبرمجة؟',
            a: 'نعم، عند العمل مع قواعد كود كبيرة. إدخال مستودع كامل أو ملفات متعددة في السياق يحسّن بشكل كبير مهام إعادة الهيكلة والاستدلال عبر الملفات. للبرمجة على قواعد كود كبيرة بسياق يفوق 128K، Qwen3-30B-A3B هو النموذج الموصى به.',
          },
          {
            q: 'ما أفضل نموذج لتحليل المستندات الطويلة؟',
            a: 'Qwen3-30B-A3B هو الخيار الأول للمستندات الطويلة في Ollama — نافذة سياقه البالغة 256K توفر مساحة أكبر من نماذج فئة 128K، وباعتباره نموذج mixture-of-experts فهو يعمل أسرع من نموذج كثيف بحجم مماثل. راجع <a href="/ar/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">نماذج الرؤية في Ollama</a> إذا كنت بحاجة أيضاً إلى فهم الصور مع المستندات الطويلة.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[دليل LLM المحلية بسياق طويل](/ar/local-llms/long-context-local-llms) -- اختيار النموذج وتقسيم RAM',
          '[هل يمكن تشغيل Qwen 3 على Ollama؟](/ar/prompt-bites/can-you-run-qwen3-on-ollama) -- الإعداد ومتطلبات VRAM',
          '[ما نماذج Ollama التي تدعم الرؤية؟](/ar/prompt-bites/which-ollama-models-support-vision) -- النماذج متعددة الوسائط في Ollama',
        ],
      },
    },
  },
  ko: {
    theme: 'Ollama',
    heroImage: '/images/ollama-128k-context-models-overview-hero-ko.webp',
    title: 'Ollama에서 128K 컨텍스트를 지원하는 모델은 무엇입니까?',
    seoTitle: 'Ollama 128K 컨텍스트 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B와 Qwen3-30B-A3B는 Ollama에서 128K 이상의 컨텍스트를 지원합니다. Qwen3-30B-A3B는 256K에 도달합니다. 전체 컨텍스트 실행 시 VRAM이 크게 증가합니다. 2026년 업데이트.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ko: {
        question: 'Ollama에서 128K 컨텍스트를 지원하는 모델은 무엇입니까?',
        answer: 'Llama 3.1 8B는 Ollama에서 128K 컨텍스트를 지원합니다. 전문가 혼합(MoE) 모델인 Qwen3-30B-A3B는 256K 컨텍스트에 도달합니다. 주의: 전체 컨텍스트 실행 시 VRAM이 크게 증가합니다 — 128K 윈도우는 기본 4K 윈도우보다 3~4배 더 많은 VRAM이 필요합니다.',
        bullets: [
          'Llama 3.1 8B: 128K 컨텍스트, 전체 컨텍스트 시 ~16 GB VRAM',
          'Qwen3-30B-A3B: 256K 컨텍스트, 전체 컨텍스트 시 24+ GB VRAM',
          '일반 사용 시 --num-ctx 4096으로 설정하여 VRAM을 절약하십시오',
        ],
        updatedDate: '2026-09',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '대부분의 Ollama 7B 모델은 128K 컨텍스트를 지원한다고 광고하지만 32K 토큰 이상에서는 품질이 저하됩니다',
          'Llama 3.1 8B와 Qwen3-30B-A3B는 Ollama에서 128K 이상의 컨텍스트를 안정적으로 제공하는 두 가지 모델입니다',
          '128K 컨텍스트 윈도우는 VRAM 사용량을 거의 3배까지 늘릴 수 있습니다 — 7B Q4 모델은 기본값 대비 128K에서 ~15 GB VRAM이 필요합니다',
          '일상적인 작업에는 <code>--num-ctx 4096</code>으로 설정하고, 필요할 때만 컨텍스트를 늘리십시오',
        ],
      },
      body1: {
        title: '실제로 128K에 도달하는 모델',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ollama에서 128K 이상의 컨텍스트를 안정적으로 제공하는 두 가지 모델은 Llama 3.1 8B(128K, 네이티브 학습)와 Qwen3-30B-A3B(256K, 전문가 혼합 모델)입니다.' },
          { type: 'plain-terms', text: 'Llama 3.1 8B는 128K 컨텍스트로 네이티브 학습된 모델이라 이 길이에서도 출력 품질이 안정적입니다. Qwen3-30B-A3B는 전문가 혼합(MoE) 모델로, 토큰마다 300억 개 파라미터 중 약 30억 개만 활성화하며 Ollama에서는 256K 컨텍스트 윈도우로 제공됩니다. 대부분의 다른 7B급 모델은 128K를 광고하지만 32K 토큰을 넘어서면 출력 품질이 눈에 띄게 저하됩니다.' },
        ],
        content: [
          '<strong>대부분의 Ollama 모델은 128K 컨텍스트를 광고하지만 그 길이에서 유용한 출력 품질을 제공하는 모델은 소수에 불과합니다.</strong> 문제는 "lost in the middle" 효과입니다: 일반적인 문서 길이로 학습된 모델은 긴 컨텍스트 깊은 곳에 배치된 정보에 주의를 기울이기 어렵습니다.',
          'Ollama에서 128K 이상의 컨텍스트를 안정적으로 제공하는 모델은 두 가지입니다: <strong>Llama 3.1 8B</strong>(128K로 네이티브 학습)와 <strong>Qwen3-30B-A3B</strong>(Ollama 공식 라이브러리에서 256K 컨텍스트 윈도우를 제공하는 전문가 혼합 모델로, 토큰마다 300억 개 파라미터 중 약 30억 개만 활성화). Qwen3의 더 작은 밀집 모델들은 Ollama에서 기본적으로 40K 컨텍스트 윈도우를 사용하며, 대부분의 다른 7B급 모델의 경우도 32K 토큰 이상에서 출력 품질이 눈에 띄게 저하됩니다.',
          '20,000단어 이상의 문서를 처리하는 작업이라면 Llama 3.1 8B부터 시작하십시오. 가장 큰 컨텍스트 윈도우가 필요하고 20 GB 이상의 VRAM을 보유하고 있다면, Qwen3-30B-A3B가 더 나은 선택입니다.',
        ],
      },
      body2: {
        title: '긴 컨텍스트의 VRAM 비용',
        content: [
          '컨텍스트 윈도우를 늘리면 VRAM 사용량이 크게 증가합니다. <strong>컨텍스트의 모든 토큰에 대한 어텐션 상태를 저장하는 KV-cache는 128K 컨텍스트에서 모델 가중치 자체만큼의 VRAM을 추가할 수 있습니다.</strong>',
          '아래 표는 Q4_K_M의 7B 모델에서 KV-cache VRAM이 어떻게 확장되는지를 보여줍니다. 이 수치는 grouped query attention(GQA)을 사용하는 모델을 기준으로 합니다 — GQA가 없는 모델은 KV-cache를 훨씬 더 많이 사용합니다.',
          '일상적인 작업에서 VRAM을 절약하려면 Ollama 실행 시 <code>--num-ctx 4096</code>으로 설정하십시오. 특정 작업에 필요한 경우에만 32K 또는 128K로 확장하십시오. 모델 선택과 RAM 분할을 포함한 긴 컨텍스트 로컬 LLM 전체 가이드는 <a href="/ko/local-llms/long-context-local-llms" class="text-primary hover:underline">긴 컨텍스트 로컬 LLM 가이드</a>를 참조하십시오.',
        ],
        columns: ['컨텍스트 길이', 'KV-Cache (7B)', '총 VRAM (7B Q4)'],
        rows: [
          { '컨텍스트 길이': '4K (기본값)', 'KV-Cache (7B)': '~0.5 GB', '총 VRAM (7B Q4)': '~5.5 GB' },
          { '컨텍스트 길이': '16K', 'KV-Cache (7B)': '~1.5 GB', '총 VRAM (7B Q4)': '~6.5 GB' },
          { '컨텍스트 길이': '32K', 'KV-Cache (7B)': '~3 GB', '총 VRAM (7B Q4)': '~8 GB' },
          { '컨텍스트 길이': '128K', 'KV-Cache (7B)': '~10 GB', '총 VRAM (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: '긴 컨텍스트 모델에 관한 빠른 답변',
        faqs: [
          {
            q: 'Ollama에서 128K 컨텍스트를 활성화하는 방법은 무엇입니까?',
            a: '실행 명령에 <code>--num-ctx 131072</code>를 추가하십시오: <code>ollama run llama3.1:8b --num-ctx 131072</code>. 이 플래그 없이는 Ollama의 Modelfile 사양이 num_ctx를 기본값 2048로 설정하며, VRAM 등급별 런타임 기본값(24 GiB 미만은 4K, 24-48 GiB는 32K, 그 이상은 256K)도 모델의 최대 용량에 못 미칠 수 있습니다 — 이를 보장하려면 num_ctx를 명시적으로 설정하십시오.',
          },
          {
            q: '긴 컨텍스트는 왜 그렇게 많은 VRAM을 사용합니까?',
            a: 'KV-cache는 컨텍스트의 모든 토큰에 대한 어텐션 상태를 저장합니다. 128K 토큰에서 이 캐시는 모델 가중치 자체만큼 커질 수 있습니다. 7B 모델(Q4)은 가중치에 ~5.5 GB가 필요하지만 128K 컨텍스트에서는 ~10 GB의 KV-cache가 필요합니다.',
          },
          {
            q: '128K 컨텍스트는 코딩에 유용합니까?',
            a: '예, 대규모 코드베이스 작업 시 유용합니다. 전체 저장소 또는 여러 파일을 컨텍스트에 넣으면 리팩토링과 파일 간 추론 작업이 크게 향상됩니다. 128K 이상의 대규모 코드베이스 작업에는 Qwen3-30B-A3B가 권장 모델입니다.',
          },
          {
            q: '긴 문서 분석에 가장 적합한 모델은 무엇입니까?',
            a: 'Ollama에서 긴 문서 처리에는 Qwen3-30B-A3B가 최선의 선택입니다 — 256K 컨텍스트 윈도우는 128K급 모델보다 더 넉넉한 여유를 제공하며, 전문가 혼합 모델로서 비슷한 크기의 밀집 모델보다 더 빠르게 동작합니다. 긴 문서와 함께 이미지 이해도 필요하다면 <a href="/ko/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama 비전 모델</a>을 참조하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[긴 컨텍스트 로컬 LLM 가이드](/ko/local-llms/long-context-local-llms)',
          '[Qwen 3를 Ollama에서 실행할 수 있습니까?](/ko/prompt-bites/can-you-run-qwen3-on-ollama)',
          '[비전을 지원하는 Ollama 모델](/ko/prompt-bites/which-ollama-models-support-vision)',
        ],
      },
    },
  },
}
