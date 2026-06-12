import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Which Ollama Models Support 128K Context?',
    seoTitle: 'Ollama 128K Context 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B and Qwen 3 14B support 128K+ context on Ollama. Qwen 3 reaches 1M tokens. Full context increases VRAM significantly. Updated 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3.3 8B', 'Qwen 3 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Advanced',
    audience: 'Developers needing long context windows for local LLMs',
    parentArticle: '/local-llms/long-context-local-llms',
    siblingBites: ['which-ollama-models-support-vision', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which Ollama models support 128K context?',
        answer: 'Llama 3.3 8B supports 128K context on Ollama. Qwen 3 14B reaches 1M tokens. Note: running full context dramatically increases VRAM — a 128K window needs 3–4× more VRAM than the default 4K window.',
        bullets: [
          'Llama 3.3 8B: 128K context, ~16 GB VRAM at full context',
          'Qwen 3 14B: up to 1M tokens, 24+ GB VRAM at full context',
          'Set --num-ctx 4096 for normal use to save VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Welche Ollama-Modelle unterstützen 128K-Kontext?', answer: 'Llama 3.3 8B unterstützt 128K-Kontext in Ollama. Qwen 3 14B erreicht 1M Token. Hinweis: Das Ausführen mit vollem Kontext erhöht den VRAM drastisch — ein 128K-Fenster benötigt 3–4× mehr VRAM als das Standard-4K-Fenster.', bullets: ['Llama 3.3 8B: 128K-Kontext, ~16 GB VRAM bei vollem Kontext', 'Qwen 3 14B: bis zu 1M Token, 24+ GB VRAM bei vollem Kontext', 'Für normalen Einsatz --num-ctx 4096 setzen, um VRAM zu sparen'], updatedDate: '2026-05' },
      fr: { question: 'Quels modèles Ollama supportent le contexte 128K ?', answer: 'Llama 3.3 8B prend en charge un contexte de 128K sur Ollama. Qwen 3 14B atteint 1M de tokens. Attention : exécuter le contexte complet augmente fortement la VRAM — une fenêtre de 128K nécessite 3 à 4× plus de VRAM que la fenêtre par défaut de 4K.', bullets: ['Llama 3.3 8B : contexte 128K, ~16 Go de VRAM au contexte complet', 'Qwen 3 14B : jusqu\'à 1M de tokens, 24+ Go de VRAM au contexte complet', 'Utiliser --num-ctx 4096 pour un usage normal et économiser la VRAM'], updatedDate: '2026-05' },
      ja: { question: 'Ollamaで128Kコンテキスト対応モデルは？', answer: 'Llama 3.3 8BはOllamaで128Kコンテキストに対応しています。Qwen 3 14Bは1Mトークンに達します。注意：フルコンテキストで実行するとVRAMが大幅に増加します — 128Kウィンドウはデフォルト4Kの3〜4倍のVRAMが必要です。', bullets: ['Llama 3.3 8B：128Kコンテキスト、フルコンテキストで~16 GB VRAM', 'Qwen 3 14B：最大1Mトークン、フルコンテキストで24+ GB VRAM', '通常使用は--num-ctx 4096でVRAMを節約'], updatedDate: '2026-05' },
      zh: { question: 'Ollama上哪些模型支持128K上下文？', answer: 'Llama 3.3 8B在Ollama上支持128K上下文。Qwen 3 14B可达1M token。注意：运行完整上下文会大幅增加显存占用——128K窗口比默认4K窗口需要多3–4倍显存。', bullets: ['Llama 3.3 8B：128K上下文，完整上下文需~16 GB显存', 'Qwen 3 14B：最多1M token，完整上下文需24+ GB显存', '日常使用设置--num-ctx 4096以节省显存'], updatedDate: '2026-05' },
      es: { question: '¿Qué modelos de Ollama admiten contexto de 128K?', answer: 'Llama 3.3 8B admite contexto de 128K en Ollama. Qwen 3 14B alcanza 1M de tokens. Nota: ejecutar el contexto completo aumenta drásticamente la VRAM — una ventana de 128K necesita entre 3 y 4 veces más VRAM que la ventana predeterminada de 4K.', bullets: ['Llama 3.3 8B: contexto de 128K, ~16 GB de VRAM con contexto completo', 'Qwen 3 14B: hasta 1M de tokens, 24+ GB de VRAM con contexto completo', 'Establece --num-ctx 4096 para uso normal y ahorra VRAM'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Most 7B Ollama models advertise 128K context but degrade in quality above 32K tokens',
          'Llama 3.3 8B and Qwen 3 14B are the two models that deliver reliable quality at full 128K',
          'A 128K context window can nearly triple VRAM usage — a 7B Q4 model needs ~15 GB at 128K vs ~5.5 GB at default',
          'Set <code>--num-ctx 4096</code> for everyday tasks; only expand context when you need it',
        ],
      },
      body1: {
        title: 'Which Models Actually Reach 128K',
        content: [
          '<strong>As of May 2026, most Ollama models advertise 128K context but fewer deliver useful output quality at that length.</strong> The problem is the "lost in the middle" effect: models trained on typical document lengths struggle to attend to information placed deep in a long context.',
          'Two models reliably maintain quality at full 128K context on Ollama: <strong>Llama 3.3 8B</strong> (natively trained at 128K) and <strong>Qwen 3 14B</strong> (up to 1M tokens, though VRAM constraints make 128K the practical consumer limit). For most other 7B models, output quality degrades noticeably above 32K tokens.',
          'If your task involves documents longer than 20,000 words, start with Llama 3.3 8B. If you need the strongest long-context quality and have 12+ GB VRAM, Qwen 3 14B is the better choice.',
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
            a: 'Add <code>--num-ctx 131072</code> to your run command: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Without this flag, Ollama defaults to 2048–4096 tokens regardless of the model\'s maximum capability.',
          },
          {
            q: 'Why does long context use so much VRAM?',
            a: 'The KV-cache stores attention state for every token in context. At 128K tokens, this cache can be as large as the model weights themselves. A 7B model at Q4 needs ~5.5 GB for weights but ~10 GB of KV-cache at 128K context.',
          },
          {
            q: 'Is 128K context useful for coding?',
            a: 'Yes, when working across large codebases. Fitting an entire repository or multiple files into context dramatically improves refactoring and cross-file reasoning tasks. For coding at 128K, Qwen 3 14B is the recommended model.',
          },
          {
            q: 'Which model is best for long-document analysis?',
            a: 'Qwen 3 14B at Q4_K_M is the top choice for long documents on Ollama — it maintains quality at full context length better than 7B alternatives. See <a href="/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama vision models</a> if you also need image understanding alongside long documents.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    title: 'Welche Ollama-Modelle unterstützen 128K Kontext?',
    seoTitle: 'Ollama 128K Kontext 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B und Qwen 3 14B unterstützen 128K+ Kontext auf Ollama. Qwen 3 erreicht 1M Tokens. Voller Kontext erhöht den VRAM stark. Stand Mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Welche Ollama-Modelle unterstützen 128K Kontext?',
        answer: 'Llama 3.3 8B unterstützt 128K Kontext auf Ollama. Qwen 3 14B erreicht 1M Tokens. Hinweis: Voller Kontext erhöht den VRAM-Bedarf erheblich — ein 128K-Fenster benötigt 3–4× mehr VRAM als das Standard-4K-Fenster.',
        bullets: [
          'Llama 3.3 8B: 128K Kontext, ~16 GB VRAM bei vollem Kontext',
          'Qwen 3 14B: bis zu 1M Tokens, 24+ GB VRAM bei vollem Kontext',
          'Setzen Sie --num-ctx 4096 für die normale Nutzung, um VRAM zu sparen',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Die meisten 7B-Ollama-Modelle werben mit 128K Kontext, liefern aber oberhalb von 32K Tokens sinkende Qualität',
          'Llama 3.3 8B und Qwen 3 14B sind die zwei Modelle, die bei vollem 128K zuverlässige Qualität bieten',
          'Ein 128K-Kontextfenster kann den VRAM-Verbrauch fast verdreifachen — ein 7B Q4-Modell benötigt ~15 GB bei 128K statt ~5,5 GB beim Standard',
          'Setzen Sie <code>--num-ctx 4096</code> für alltägliche Aufgaben; erweitern Sie den Kontext nur, wenn Sie ihn benötigen',
        ],
      },
      body1: {
        title: 'Welche Modelle wirklich 128K erreichen',
        content: [
          '<strong>Stand Mai 2026 werben die meisten Ollama-Modelle mit 128K Kontext, aber nur wenige liefern bei dieser Länge nützliche Ausgabequalität.</strong> Das Problem ist der „Lost in the Middle"-Effekt: Modelle, die auf typischen Dokumentlängen trainiert wurden, haben Schwierigkeiten, Informationen tief in einem langen Kontext zu finden.',
          'Zwei Modelle halten bei vollem 128K Kontext auf Ollama zuverlässig die Qualität: <strong>Llama 3.3 8B</strong> (nativ auf 128K trainiert) und <strong>Qwen 3 14B</strong> (bis zu 1M Tokens, wobei VRAM-Beschränkungen 128K zur praktischen Consumer-Grenze machen). Bei den meisten anderen 7B-Modellen nimmt die Ausgabequalität oberhalb von 32K Tokens merklich ab.',
          'Wenn Ihre Aufgabe Dokumente mit mehr als 20.000 Wörtern umfasst, beginnen Sie mit Llama 3.3 8B. Wenn Sie die stärkste Long-Context-Qualität benötigen und 12+ GB VRAM haben, ist Qwen 3 14B die bessere Wahl.',
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
            a: 'Fügen Sie <code>--num-ctx 131072</code> zu Ihrem Run-Befehl hinzu: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Ohne dieses Flag verwendet Ollama standardmäßig 2048–4096 Tokens, unabhängig von der maximalen Fähigkeit des Modells.',
          },
          {
            q: 'Warum verbraucht langer Kontext so viel VRAM?',
            a: 'Der KV-Cache speichert den Attention-Zustand für jeden Token im Kontext. Bei 128K Tokens kann dieser Cache so groß wie die Modellgewichte selbst sein. Ein 7B-Modell bei Q4 benötigt ~5,5 GB für die Gewichte, aber ~10 GB KV-Cache bei 128K Kontext.',
          },
          {
            q: 'Ist 128K Kontext nützlich für das Programmieren?',
            a: 'Ja, beim Arbeiten über große Codebasen. Einen gesamten Repository oder mehrere Dateien in den Kontext zu laden, verbessert Refactoring- und dateiübergreifende Reasoning-Aufgaben erheblich. Für das Programmieren mit 128K ist Qwen 3 14B das empfohlene Modell.',
          },
          {
            q: 'Welches Modell eignet sich am besten für die Analyse langer Dokumente?',
            a: 'Qwen 3 14B bei Q4_K_M ist die beste Wahl für lange Dokumente auf Ollama — es hält die Qualität bei voller Kontextlänge besser als 7B-Alternativen. Siehe <a href="/de/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama Vision-Modelle</a>, wenn Sie neben langen Dokumenten auch Bildverständnis benötigen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    title: 'Quels modèles Ollama supportent le contexte 128K ?',
    seoTitle: 'Ollama 128K contexte 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B et Qwen 3 14B supportent 128K+ contexte sur Ollama. Qwen 3 atteint 1M tokens. Le contexte plein augmente le VRAM. Vérifié mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles Ollama supportent le contexte 128K ?',
        answer: 'Llama 3.3 8B supporte le contexte 128K sur Ollama. Qwen 3 14B atteint 1M de tokens. Attention : le contexte complet augmente fortement la VRAM — une fenêtre 128K nécessite 3–4× plus de VRAM que la fenêtre par défaut de 4K.',
        bullets: [
          'Llama 3.3 8B : contexte 128K, ~16 GB VRAM en contexte complet',
          'Qwen 3 14B : jusqu\'à 1M de tokens, 24+ GB VRAM en contexte complet',
          'Définissez --num-ctx 4096 pour l\'usage normal afin d\'économiser la VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La plupart des modèles Ollama 7B annoncent 128K de contexte mais dégradent en qualité au-delà de 32K tokens',
          'Llama 3.3 8B et Qwen 3 14B sont les deux modèles qui délivrent une qualité fiable à 128K complet',
          'Une fenêtre de contexte 128K peut presque tripler l\'utilisation VRAM — un modèle 7B Q4 a besoin de ~15 GB à 128K contre ~5,5 GB par défaut',
          'Définissez <code>--num-ctx 4096</code> pour les tâches quotidiennes ; n\'étendez le contexte que lorsque nécessaire',
        ],
      },
      body1: {
        title: 'Les modèles qui atteignent vraiment 128K',
        content: [
          '<strong>En mai 2026, la plupart des modèles Ollama annoncent 128K de contexte, mais peu délivrent une qualité de sortie utile à cette longueur.</strong> Le problème est l\'effet "perdu au milieu" : les modèles entraînés sur des longueurs de documents typiques peinent à traiter des informations placées au cœur d\'un long contexte.',
          'Deux modèles maintiennent fiablement la qualité à 128K complet sur Ollama : <strong>Llama 3.3 8B</strong> (entraîné nativement à 128K) et <strong>Qwen 3 14B</strong> (jusqu\'à 1M de tokens, bien que les contraintes VRAM rendent 128K la limite pratique pour le grand public). Pour la plupart des autres modèles 7B, la qualité de sortie se dégrade notablement au-delà de 32K tokens.',
          'Si votre tâche implique des documents de plus de 20 000 mots, commencez par Llama 3.3 8B. Si vous avez besoin de la meilleure qualité de contexte long et disposez de 12+ GB de VRAM, Qwen 3 14B est le meilleur choix.',
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
            a: 'Ajoutez <code>--num-ctx 131072</code> à votre commande run : <code>ollama run llama3.1:8b --num-ctx 131072</code>. Sans ce paramètre, Ollama utilise par défaut 2048–4096 tokens quelle que soit la capacité maximale du modèle.',
          },
          {
            q: 'Pourquoi le contexte long utilise-t-il autant de VRAM ?',
            a: 'Le KV-cache stocke l\'état d\'attention pour chaque token en contexte. À 128K tokens, ce cache peut être aussi volumineux que les poids du modèle. Un modèle 7B en Q4 a besoin de ~5,5 GB pour les poids mais de ~10 GB de KV-cache à 128K de contexte.',
          },
          {
            q: 'Le contexte 128K est-il utile pour le développement ?',
            a: 'Oui, pour travailler sur de grandes bases de code. Intégrer un dépôt entier ou plusieurs fichiers dans le contexte améliore considérablement le refactoring et les tâches de raisonnement inter-fichiers. Pour le développement à 128K, Qwen 3 14B est le modèle recommandé.',
          },
          {
            q: 'Quel modèle est le meilleur pour l\'analyse de longs documents ?',
            a: 'Qwen 3 14B en Q4_K_M est le premier choix pour les longs documents sur Ollama — il maintient mieux la qualité à pleine longueur de contexte que les alternatives 7B. Voir les <a href="/fr/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">modèles vision Ollama</a> si vous avez également besoin de compréhension d\'images avec de longs documents.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    title: 'Ollamaで128Kコンテキストに対応するモデルは？',
    seoTitle: 'Ollama 128Kコンテキスト2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8BとQwen 3 14BはOllamaで128K以上のコンテキストに対応。Qwen 3は1Mトークンに到達。フルコンテキストはVRAMを大幅に増加。2026年5月確認済み。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Ollamaで128Kコンテキストに対応するモデルは？',
        answer: 'Llama 3.3 8BはOllamaで128Kコンテキストに対応。Qwen 3 14Bは1Mトークンに到達。注意：フルコンテキストの実行はVRAMを大幅に増加させます——128Kウィンドウはデフォルトの4Kウィンドウの3〜4倍のVRAMが必要です。',
        bullets: [
          'Llama 3.3 8B：128Kコンテキスト、フルコンテキスト時約16 GB VRAM',
          'Qwen 3 14B：最大1Mトークン、フルコンテキスト時24+ GB VRAM',
          '通常使用時はVRAMを節約するため--num-ctx 4096を設定',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ほとんどの7B Ollamaモデルは128Kコンテキストを宣伝しているが、32Kトークン以上では品質が低下する',
          'Llama 3.3 8BとQwen 3 14Bは128Kフルコンテキストで安定した品質を提供する2つのモデル',
          '128Kコンテキストウィンドウはデフォルトと比較してVRAM使用量をほぼ3倍にする可能性がある——7B Q4モデルはデフォルトの約5.5 GBに対し128Kで約15 GBが必要',
          '日常的なタスクには<code>--num-ctx 4096</code>を設定し、必要な時だけコンテキストを拡張する',
        ],
      },
      body1: {
        title: '実際に128Kに到達するモデル',
        content: [
          '<strong>2026年5月時点で、ほとんどのOllamaモデルは128Kコンテキストを宣伝していますが、その長さで有用な出力品質を実現するものは少数です。</strong>問題は「ロスト・イン・ザ・ミドル」効果：標準的な文書長で訓練されたモデルは、長いコンテキストの深い部分にある情報に注目するのが困難です。',
          'Ollamaで128Kフルコンテキストの品質を安定して維持するモデルは2つ：<strong>Llama 3.3 8B</strong>（128Kでネイティブ訓練）と<strong>Qwen 3 14B</strong>（最大1Mトークン、ただしVRAM制約により128Kが実用的なコンシューマー上限）。他の7Bモデルの大部分は、32Kトークン以上では出力品質が著しく低下します。',
          '20,000語以上の文書を扱うタスクにはLlama 3.3 8Bから始めてください。最高の長文コンテキスト品質が必要で12+ GB VRAMがある場合は、Qwen 3 14Bが優れた選択肢です。',
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
            a: '実行コマンドに<code>--num-ctx 131072</code>を追加します：<code>ollama run llama3.1:8b --num-ctx 131072</code>。このフラグがない場合、モデルの最大能力に関係なく、Ollamaはデフォルトで2048〜4096トークンを使用します。',
          },
          {
            q: '長いコンテキストはなぜVRAMを大量に消費するのですか？',
            a: 'KV-Cacheはコンテキスト内のすべてのトークンのアテンション状態を保存します。128Kトークンでは、このキャッシュはモデルの重みと同じ大きさになることがあります。7B Q4モデルは重みに約5.5 GBが必要ですが、128Kコンテキストでは約10 GBのKV-Cacheが必要です。',
          },
          {
            q: '128Kコンテキストはコーディングに役立ちますか？',
            a: 'はい、大規模なコードベースを扱う際に有効です。リポジトリ全体や複数ファイルをコンテキストに収めることで、リファクタリングやファイル横断的な推論タスクが大幅に改善されます。128Kでのコーディングには、Qwen 3 14Bが推奨モデルです。',
          },
          {
            q: '長文ドキュメント分析に最適なモデルは？',
            a: 'Q4_K_MのQwen 3 14BはOllamaでの長文ドキュメントにおける第一選択肢です——フルコンテキスト長での品質を7B代替より優れた形で維持します。長文ドキュメントと並行して画像理解も必要な場合は、<a href="/ja/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollamaビジョンモデル</a>をご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    title: 'Ollama上哪些模型支持128K上下文？',
    seoTitle: 'Ollama 128K上下文2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B和Qwen 3 14B在Ollama上支持128K以上上下文。Qwen 3可达1M个token。完整上下文大幅增加VRAM需求。2026年5月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'Ollama上哪些模型支持128K上下文？',
        answer: 'Llama 3.3 8B在Ollama上支持128K上下文。Qwen 3 14B可达1M个token。注意：运行完整上下文会大幅增加VRAM——128K窗口比默认4K窗口需要多3–4倍VRAM。',
        bullets: [
          'Llama 3.3 8B：128K上下文，完整上下文约需16 GB VRAM',
          'Qwen 3 14B：最多1M token，完整上下文需24+ GB VRAM',
          '日常使用设置--num-ctx 4096以节省VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '大多数7B Ollama模型宣称支持128K上下文，但超过32K token后质量明显下降',
          'Llama 3.3 8B和Qwen 3 14B是能在完整128K下稳定输出高质量结果的两个模型',
          '128K上下文窗口可能使VRAM用量增至近3倍——7B Q4模型在128K下需约15 GB，默认只需约5.5 GB',
          '日常任务设置<code>--num-ctx 4096</code>；仅在需要时扩展上下文',
        ],
      },
      body1: {
        title: '真正能达到128K的模型',
        content: [
          '<strong>截至2026年5月，大多数Ollama模型宣称支持128K上下文，但在该长度下能提供有效输出质量的模型很少。</strong>问题在于"中间遗失"效应：在标准文档长度上训练的模型，难以关注到长上下文深处的信息。',
          '在Ollama上能在128K完整上下文下稳定保持质量的模型有两个：<strong>Llama 3.3 8B</strong>（原生在128K下训练）和<strong>Qwen 3 14B</strong>（最多1M token，但VRAM限制使128K成为消费级实用上限）。对于大多数其他7B模型，输出质量在超过32K token后会明显下降。',
          '如果您的任务涉及超过20,000字的文档，从Llama 3.3 8B开始。如果需要最强的长上下文质量且有12+ GB VRAM，Qwen 3 14B是更好的选择。',
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
            a: '在运行命令中添加<code>--num-ctx 131072</code>：<code>ollama run llama3.1:8b --num-ctx 131072</code>。不使用该参数时，无论模型最大能力如何，Ollama默认使用2048–4096个token。',
          },
          {
            q: '为什么长上下文需要这么多VRAM？',
            a: 'KV-Cache存储上下文中每个token的注意力状态。在128K token时，该缓存可能与模型权重本身一样大。7B Q4模型需要约5.5 GB存储权重，但在128K上下文下需要约10 GB的KV-Cache。',
          },
          {
            q: '128K上下文对代码开发有用吗？',
            a: '是的，在处理大型代码库时非常有用。将整个代码仓库或多个文件纳入上下文，可以显著改善重构和跨文件推理任务。128K代码开发推荐使用Qwen 3 14B。',
          },
          {
            q: '长文档分析最适合哪个模型？',
            a: 'Q4_K_M的Qwen 3 14B是Ollama上长文档的首选——它在完整上下文长度下的质量维持能力优于7B替代品。如果还需要在长文档旁进行图像理解，请参阅<a href="/zh/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama视觉模型</a>。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    title: 'Quais modelos do Ollama suportam contexto de 128K?',
    seoTitle: 'Ollama contexto 128K 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B e Qwen 3 14B suportam 128K+ de contexto no Ollama; Qwen 3 chega a 1M de tokens. O contexto completo aumenta muito a VRAM. 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos do Ollama suportam contexto de 128K?',
        answer: 'Llama 3.3 8B suporta contexto de 128K no Ollama. Qwen 3 14B chega a 1M de tokens. Nota: executar o contexto completo aumenta drasticamente a VRAM — uma janela de 128K precisa de 3 a 4 vezes mais VRAM que a janela padrão de 4K.',
        bullets: [
          'Llama 3.3 8B: contexto de 128K, ~16 GB de VRAM com contexto completo',
          'Qwen 3 14B: até 1M de tokens, 24+ GB de VRAM com contexto completo',
          'Defina --num-ctx 4096 para uso normal e economize VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A maioria dos modelos 7B do Ollama anuncia contexto de 128K, mas a qualidade se degrada acima de 32K tokens',
          'Llama 3.3 8B e Qwen 3 14B são os dois modelos que oferecem qualidade confiável no máximo de 128K',
          'Uma janela de contexto de 128K pode quase triplicar o uso de VRAM — um modelo 7B Q4 precisa de ~15 GB com 128K frente a ~5,5 GB no padrão',
          'Defina <code>--num-ctx 4096</code> para tarefas cotidianas; expanda o contexto apenas quando necessário',
        ],
      },
      body1: {
        title: 'Quais modelos realmente alcançam 128K',
        content: [
          '<strong>Em maio de 2026, a maioria dos modelos do Ollama anuncia contexto de 128K, mas poucos oferecem qualidade de saída útil nesse comprimento.</strong> O problema é o efeito "perdido no meio": modelos treinados em comprimentos típicos de documentos têm dificuldade em processar informações colocadas fundo em um contexto longo.',
          'Dois modelos mantêm de forma confiável a qualidade no contexto completo de 128K no Ollama: <strong>Llama 3.3 8B</strong> (nativamente treinado a 128K) e <strong>Qwen 3 14B</strong> (até 1M de tokens, embora as restrições de VRAM tornem 128K o limite prático para o consumidor). Para a maioria dos outros modelos 7B, a qualidade de saída se degrada notavelmente acima de 32K tokens.',
          'Se sua tarefa envolve documentos com mais de 20.000 palavras, comece com Llama 3.3 8B. Se precisar da melhor qualidade de contexto longo e tiver 12+ GB de VRAM, Qwen 3 14B é a melhor opção.',
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
            a: 'Adicione <code>--num-ctx 131072</code> ao seu comando de execução: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Sem essa opção, o Ollama usa por padrão 2048–4096 tokens independentemente da capacidade máxima do modelo.',
          },
          {
            q: 'Por que o contexto longo usa tanta VRAM?',
            a: 'O KV-cache armazena o estado de atenção para cada token no contexto. Com 128K tokens, esse cache pode ser tão grande quanto os próprios pesos do modelo. Um modelo 7B em Q4 precisa de ~5,5 GB para os pesos, mas de ~10 GB de KV-cache com contexto de 128K.',
          },
          {
            q: 'O contexto de 128K é útil para codificação?',
            a: 'Sim, ao trabalhar com grandes bases de código. Incluir um repositório inteiro ou vários arquivos no contexto melhora enormemente as tarefas de refatoração e raciocínio entre arquivos. Para codificação com 128K, Qwen 3 14B é o modelo recomendado.',
          },
          {
            q: 'Qual modelo é melhor para análise de documentos longos?',
            a: 'Qwen 3 14B em Q4_K_M é a primeira opção para documentos longos no Ollama — mantém melhor a qualidade no comprimento de contexto completo do que as alternativas 7B. Consulte <a href="/pt/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">os modelos de visão do Ollama</a> se também precisar de compreensão de imagens junto com documentos longos.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    title: '¿Qué modelos de Ollama admiten contexto de 128K?',
    seoTitle: 'Ollama contexto 128K 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B y Qwen 3 14B admiten 128K de contexto o más en Ollama; Qwen 3 llega a 1M de tokens. El contexto completo aumenta mucho la VRAM. 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos de Ollama admiten contexto de 128K?',
        answer: 'Llama 3.3 8B admite contexto de 128K en Ollama. Qwen 3 14B alcanza 1M de tokens. Nota: ejecutar el contexto completo aumenta drásticamente la VRAM — una ventana de 128K necesita entre 3 y 4 veces más VRAM que la ventana predeterminada de 4K.',
        bullets: [
          'Llama 3.3 8B: contexto de 128K, ~16 GB de VRAM con contexto completo',
          'Qwen 3 14B: hasta 1M de tokens, 24+ GB de VRAM con contexto completo',
          'Establece --num-ctx 4096 para uso normal y ahorra VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La mayoría de los modelos 7B de Ollama anuncian contexto de 128K pero su calidad se degrada por encima de los 32K tokens',
          'Llama 3.3 8B y Qwen 3 14B son los dos modelos que ofrecen calidad fiable al máximo de 128K',
          'Una ventana de contexto de 128K puede casi triplicar el uso de VRAM — un modelo 7B Q4 necesita ~15 GB con 128K frente a ~5,5 GB con el valor predeterminado',
          'Establece <code>--num-ctx 4096</code> para tareas cotidianas; amplía el contexto solo cuando lo necesites',
        ],
      },
      body1: {
        title: 'Qué modelos realmente alcanzan 128K',
        content: [
          '<strong>A mayo de 2026, la mayoría de los modelos de Ollama anuncian contexto de 128K, pero pocos ofrecen una calidad de salida útil a esa longitud.</strong> El problema es el efecto "perdido en el medio": los modelos entrenados con longitudes típicas de documento tienen dificultades para atender información colocada profundamente en un contexto largo.',
          'Dos modelos mantienen de forma fiable la calidad con el contexto completo de 128K en Ollama: <strong>Llama 3.3 8B</strong> (entrenado de forma nativa a 128K) y <strong>Qwen 3 14B</strong> (hasta 1M de tokens, aunque las limitaciones de VRAM hacen que 128K sea el límite práctico para el consumidor). Para la mayoría de los demás modelos 7B, la calidad de salida se degrada notablemente por encima de los 32K tokens.',
          'Si tu tarea implica documentos de más de 20.000 palabras, empieza con Llama 3.3 8B. Si necesitas la máxima calidad de contexto largo y tienes 12 GB o más de VRAM, Qwen 3 14B es la mejor opción.',
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
            a: 'Añade <code>--num-ctx 131072</code> a tu comando de ejecución: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Sin esta opción, Ollama usa de forma predeterminada entre 2048 y 4096 tokens independientemente de la capacidad máxima del modelo.',
          },
          {
            q: '¿Por qué el contexto largo usa tanta VRAM?',
            a: 'La KV-cache almacena el estado de atención para cada token en el contexto. Con 128K tokens, esta caché puede ser tan grande como los propios pesos del modelo. Un modelo 7B en Q4 necesita ~5,5 GB para los pesos, pero ~10 GB de KV-cache con contexto de 128K.',
          },
          {
            q: '¿El contexto de 128K es útil para la codificación?',
            a: 'Sí, al trabajar con bases de código grandes. Introducir un repositorio completo o múltiples archivos en el contexto mejora enormemente las tareas de refactorización y razonamiento entre archivos. Para codificación con 128K, Qwen 3 14B es el modelo recomendado.',
          },
          {
            q: '¿Qué modelo es el mejor para el análisis de documentos largos?',
            a: 'Qwen 3 14B en Q4_K_M es la primera opción para documentos largos en Ollama — mantiene mejor la calidad a la longitud de contexto completa que las alternativas 7B. Consulta <a href="/es/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">los modelos de visión de Ollama</a> si también necesitas comprensión de imágenes junto con documentos largos.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Ollama',
    title: 'ما نماذج Ollama التي تدعم سياق 128K؟',
    seoTitle: 'Ollama سياق 128K: Llama 3.3 8B وQwen 3 2026',
    metaDescription: 'Llama 3.3 8B يدعم سياق 128K على Ollama؛ Qwen 3 14B يصل إلى مليون رمز. نافذة 128K تستهلك 3–4 أضعاف VRAM مقارنةً بالإعداد الافتراضي 4K.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما نماذج Ollama التي تدعم سياق 128K؟',
        answer: 'يدعم Llama 3.3 8B سياقاً بحجم 128K في Ollama. يصل Qwen 3 14B إلى مليون رمز. ملاحظة: تشغيل السياق الكامل يزيد VRAM بشكل كبير — نافذة بحجم 128K تحتاج إلى 3 إلى 4 أضعاف الـ VRAM مقارنةً بالنافذة الافتراضية البالغة 4K.',
        bullets: [
          'Llama 3.3 8B: سياق 128K، حوالي 16 GB من VRAM مع السياق الكامل',
          'Qwen 3 14B: حتى مليون رمز، أكثر من 24 GB من VRAM مع السياق الكامل',
          'اضبط --num-ctx 4096 للاستخدام العادي وحافظ على VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'معظم نماذج 7B في Ollama تُعلن عن سياق 128K لكن جودتها تتراجع فوق 32K رمز',
          'Llama 3.3 8B وQwen 3 14B هما النموذجان اللذان يوفران جودة موثوقة عند الحد الأقصى 128K',
          'نافذة سياق 128K قد تضاعف استخدام VRAM تقريباً ثلاث مرات — نموذج 7B بـ Q4 يحتاج حوالي 15 GB مع 128K مقابل حوالي 5.5 GB بالقيمة الافتراضية',
          'اضبط <code>--num-ctx 4096</code> للمهام اليومية؛ وسّع السياق فقط عند الحاجة',
        ],
      },
      body1: {
        title: 'ما النماذج التي تبلغ فعلاً 128K',
        content: [
          '<strong>في مايو 2026، تُعلن معظم نماذج Ollama عن سياق 128K، لكن قلة منها يوفر جودة مخرجات مفيدة عند هذا الطول.</strong> المشكلة هي تأثير "الضياع في المنتصف": النماذج المدربة على أطوال مستند نموذجية تجد صعوبة في الانتباه إلى المعلومات الموجودة في عمق السياق الطويل.',
          'نموذجان يحافظان بشكل موثوق على الجودة مع السياق الكامل 128K في Ollama: <strong>Llama 3.3 8B</strong> (مدرب بشكل أصلي على 128K) و<strong>Qwen 3 14B</strong> (حتى مليون رمز، وإن كانت قيود VRAM تجعل 128K هو الحد العملي للمستهلك). لمعظم النماذج الأخرى 7B، تتراجع جودة المخرجات بشكل ملحوظ فوق 32K رمز.',
          'إذا كانت مهمتك تتضمن مستندات تزيد عن 20,000 كلمة، ابدأ بـ Llama 3.3 8B. إذا كنت بحاجة إلى أعلى جودة للسياق الطويل ولديك 12 GB أو أكثر من VRAM، فـ Qwen 3 14B هو الخيار الأفضل.',
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
            a: 'أضف <code>--num-ctx 131072</code> إلى أمر التشغيل: <code>ollama run llama3.1:8b --num-ctx 131072</code>. بدون هذا الخيار، يستخدم Ollama افتراضياً بين 2048 و4096 رمزاً بغض النظر عن الحد الأقصى للنموذج.',
          },
          {
            q: 'لماذا يستهلك السياق الطويل كثيراً من VRAM؟',
            a: 'تخزن KV-cache حالة الانتباه لكل رمز في السياق. مع 128K رمز، يمكن أن تكون هذه الذاكرة المؤقتة بحجم أوزان النموذج نفسها. نموذج 7B بـ Q4 يحتاج حوالي 5.5 GB للأوزان، لكن حوالي 10 GB لـ KV-cache مع سياق 128K.',
          },
          {
            q: 'هل سياق 128K مفيد للبرمجة؟',
            a: 'نعم، عند العمل مع قواعد كود كبيرة. إدخال مستودع كامل أو ملفات متعددة في السياق يحسّن بشكل كبير مهام إعادة الهيكلة والاستدلال عبر الملفات. للبرمجة بـ 128K، Qwen 3 14B هو النموذج الموصى به.',
          },
          {
            q: 'ما أفضل نموذج لتحليل المستندات الطويلة؟',
            a: 'Qwen 3 14B بـ Q4_K_M هو الخيار الأول للمستندات الطويلة في Ollama — يحافظ على جودة أفضل عند طول السياق الكامل مقارنةً بالبدائل 7B. راجع <a href="/ar/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">نماذج الرؤية في Ollama</a> إذا كنت بحاجة أيضاً إلى فهم الصور مع المستندات الطويلة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Ollama',
    title: 'Ollama에서 128K 컨텍스트를 지원하는 모델은 무엇입니까?',
    seoTitle: 'Ollama 128K 컨텍스트 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B와 Qwen 3 14B는 Ollama에서 128K 이상의 컨텍스트를 지원합니다. Qwen 3는 1M 토큰에 도달합니다. 전체 컨텍스트 실행 시 VRAM이 크게 증가합니다. 2026년 업데이트.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ko: {
        question: 'Ollama에서 128K 컨텍스트를 지원하는 모델은 무엇입니까?',
        answer: 'Llama 3.3 8B는 Ollama에서 128K 컨텍스트를 지원합니다. Qwen 3 14B는 1M 토큰에 도달합니다. 주의: 전체 컨텍스트 실행 시 VRAM이 크게 증가합니다 — 128K 윈도우는 기본 4K 윈도우보다 3~4배 더 많은 VRAM이 필요합니다.',
        bullets: [
          'Llama 3.3 8B: 128K 컨텍스트, 전체 컨텍스트 시 ~16 GB VRAM',
          'Qwen 3 14B: 최대 1M 토큰, 전체 컨텍스트 시 24+ GB VRAM',
          '일반 사용 시 --num-ctx 4096으로 설정하여 VRAM을 절약하십시오',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '대부분의 Ollama 7B 모델은 128K 컨텍스트를 지원한다고 광고하지만 32K 토큰 이상에서는 품질이 저하됩니다',
          'Llama 3.3 8B와 Qwen 3 14B는 전체 128K에서 안정적인 품질을 제공하는 두 가지 모델입니다',
          '128K 컨텍스트 윈도우는 VRAM 사용량을 거의 3배까지 늘릴 수 있습니다 — 7B Q4 모델은 기본값 대비 128K에서 ~15 GB VRAM이 필요합니다',
          '일상적인 작업에는 <code>--num-ctx 4096</code>으로 설정하고, 필요할 때만 컨텍스트를 늘리십시오',
        ],
      },
      body1: {
        title: '실제로 128K에 도달하는 모델',
        snippetBlocks: [
          { type: 'one-sentence', text: '2026년 5월 기준, Ollama에서 전체 128K 컨텍스트 품질을 안정적으로 유지하는 모델은 Llama 3.3 8B와 Qwen 3 14B 두 가지입니다.' },
          { type: 'plain-terms', text: 'Llama 3.3 8B는 128K 컨텍스트로 네이티브 학습된 모델이며, Qwen 3 14B는 최대 1M 토큰까지 지원하지만 소비자 환경에서는 VRAM 제약으로 인해 128K가 실질적인 한계입니다. 대부분의 다른 7B 모델은 32K 토큰 이상에서 출력 품질이 눈에 띄게 저하됩니다.' },
        ],
        content: [
          '<strong>2026년 5월 기준, 대부분의 Ollama 모델은 128K 컨텍스트를 광고하지만 그 길이에서 유용한 출력 품질을 제공하는 모델은 소수에 불과합니다.</strong> 문제는 "lost in the middle" 효과입니다: 일반적인 문서 길이로 학습된 모델은 긴 컨텍스트 깊은 곳에 배치된 정보에 주의를 기울이기 어렵습니다.',
          'Ollama에서 전체 128K 컨텍스트로 안정적으로 품질을 유지하는 모델은 두 가지입니다: <strong>Llama 3.3 8B</strong>(128K로 네이티브 학습)와 <strong>Qwen 3 14B</strong>(최대 1M 토큰이지만 VRAM 제약으로 소비자에게는 128K가 실질적 한계). 대부분의 다른 7B 모델의 경우, 32K 토큰 이상에서 출력 품질이 눈에 띄게 저하됩니다.',
          '20,000단어 이상의 문서를 처리하는 작업이라면 Llama 3.3 8B부터 시작하십시오. 최고의 긴 컨텍스트 품질이 필요하고 12 GB 이상의 VRAM을 보유하고 있다면, Qwen 3 14B가 더 나은 선택입니다.',
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
            a: '실행 명령에 <code>--num-ctx 131072</code>를 추가하십시오: <code>ollama run llama3.1:8b --num-ctx 131072</code>. 이 플래그 없이는 모델의 최대 용량과 관계없이 Ollama가 기본적으로 2048~4096 토큰을 사용합니다.',
          },
          {
            q: '긴 컨텍스트는 왜 그렇게 많은 VRAM을 사용합니까?',
            a: 'KV-cache는 컨텍스트의 모든 토큰에 대한 어텐션 상태를 저장합니다. 128K 토큰에서 이 캐시는 모델 가중치 자체만큼 커질 수 있습니다. 7B 모델(Q4)은 가중치에 ~5.5 GB가 필요하지만 128K 컨텍스트에서는 ~10 GB의 KV-cache가 필요합니다.',
          },
          {
            q: '128K 컨텍스트는 코딩에 유용합니까?',
            a: '예, 대규모 코드베이스 작업 시 유용합니다. 전체 저장소 또는 여러 파일을 컨텍스트에 넣으면 리팩토링과 파일 간 추론 작업이 크게 향상됩니다. 128K 코딩에는 Qwen 3 14B가 권장 모델입니다.',
          },
          {
            q: '긴 문서 분석에 가장 적합한 모델은 무엇입니까?',
            a: 'Ollama에서 긴 문서 처리에는 Q4_K_M의 Qwen 3 14B가 최선의 선택입니다 — 7B 대안보다 전체 컨텍스트 길이에서 품질을 더 잘 유지합니다. 긴 문서와 함께 이미지 이해도 필요하다면 <a href="/ko/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama 비전 모델</a>을 참조하십시오.',
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
