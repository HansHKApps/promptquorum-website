import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'How Much RAM Does a 7B Model Need?',
    seoTitle: 'RAM for 7B Local Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'A 7B model at Q4 needs 5–6 GB RAM or VRAM. CPU gives ~5 tok/s; GPU gives ~25 tok/s on the same memory. Rule: params × 0.7 = GB at Q4. PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Mistral Small', 'Llama 3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Developers estimating hardware requirements for local LLMs',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['how-much-vram-for-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much RAM does a 7B model need?',
        answer: 'A 7B model at Q4 quantization needs 5–6 GB of VRAM or RAM for efficient inference performance. Rule of thumb: model parameters in billions × 0.7 = approximate GB needed at Q4. GPU delivers ~25 tok/s; CPU delivers ~5 tok/s on same memory.',
        bullets: [
          '7B Q4: 5–6 GB VRAM or unified memory',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie viel RAM braucht ein 7B-Modell?',
        answer: 'Ein 7B-Modell bei Q4-Quantisierung benötigt 5–6 GB VRAM oder RAM für effiziente Inferenzleistung. Daumenregel: Modellparameter in Milliarden × 0,7 = ungefähre GB bei Q4. GPU liefert ~25 tok/s; CPU liefert ~5 tok/s bei gleichem Speicher.',
        bullets: [
          '7B Q4: 5–6 GB VRAM oder Unified Memory',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'De combien de RAM a besoin un modèle 7B ?',
        answer: 'Un modèle 7B en quantisation Q4 nécessite 5–6 Go VRAM ou RAM pour performance inférence efficace. Règle calcul : paramètres milliards × 0,7 = Go approx en Q4. GPU donne ~25 tok/s; CPU donne ~5 tok/s même mémoire.',
        bullets: [
          '7B Q4 : 5–6 Go de VRAM ou de mémoire unifiée',
          '7B Q5 : 6–7 Go de VRAM',
          '7B Q8 : 8–9 Go de VRAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '7Bモデルにはどれくらいのメモリが必要ですか？',
        answer: 'Q4量化の7Bモデルは効率的推論のため5–6 GBのVRAMまたはRAMが必要。目安：モデルパラメータ（十億単位）× 0.7 = Q4での概算GB。GPUは~25 tok/s、CPUは同じメモリで~5 tok/s。',
        bullets: [
          '7B Q4: 5–6 GB VRAMまたは統合メモリ',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '7B模型需要多少内存？',
        answer: 'Q4量化7B模型需5–6 GB显存或内存实现高效推理。经验法则：模型参数（十亿）× 0.7 = Q4所需近似GB。GPU ~25 tok/s，CPU同等内存~5 tok/s。',
        bullets: [
          '7B Q4: 5–6 GB显存或统一内存',
          '7B Q5: 6–7 GB显存',
          '7B Q8: 8–9 GB显存',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuánta RAM necesita un modelo 7B?',
        answer: 'Un modelo 7B en cuantización Q4 necesita 5–6 GB de VRAM o RAM para un rendimiento de inferencia eficiente. Regla: parámetros del modelo en miles de millones × 0,7 = GB aproximados en Q4. GPU ofrece ~25 tok/s; CPU ofrece ~5 tok/s con la misma memoria.',
        bullets: [
          '7B Q4: 5–6 GB de VRAM o memoria unificada',
          '7B Q5: 6–7 GB de VRAM',
          '7B Q8: 8–9 GB de VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A 7B model at Q4 needs 5–6 GB of VRAM — budget 6 GB to include context window overhead',
          'Quick rule: parameter count in billions × 0.7 = approximate GB needed at Q4',
          'Extending the context window to 16K tokens adds ~4 GB on top of the model weight',
        ],
      },
      body1: {
        title: 'The Quick Rule for CPU and GPU',
        content: [
          'As of May 2026, <strong>a 7B model at Q4 needs 5–6 GB of memory — either system RAM (CPU-only inference) or VRAM (GPU inference).</strong> The amount is the same; what changes is speed. CPU inference runs at ~5 tokens per second on a modern 8-core processor. GPU inference runs at 20–25 tokens per second on a card with adequate VRAM.',
          'On CPU-only, divide the GPU speed column by 5× for an 8-core processor estimate. A 7B model at Q4 runs at ~5 tok/s on CPU, ~25 on GPU. This 5× gap is why a budget GPU is worth buying for interactive use.',
        ],
        columns: ['Model Size', 'Q4 Memory', 'GPU Speed'],
        rows: [
          { 'Model Size': '3B', 'Q4 Memory': '~2 GB', 'GPU Speed': '~40 tok/s' },
          { 'Model Size': '7B', 'Q4 Memory': '~5 GB', 'GPU Speed': '~25 tok/s' },
          { 'Model Size': '8B', 'Q4 Memory': '~5.5 GB', 'GPU Speed': '~22 tok/s' },
          { 'Model Size': '13B', 'Q4 Memory': '~9 GB', 'GPU Speed': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'When to Choose CPU vs GPU',
        content: [
          'Choose CPU-only when you have 16+ GB of system RAM and your tasks are batch or background (overnight document analysis, scheduled summarization). The ~5 tok/s rate is acceptable for non-interactive work and avoids GPU costs entirely.',
          'Choose GPU when you need interactive chat or coding. The 5× speed difference matters in real-time use. Even a budget RTX 3050 6 GB delivers ~22 tok/s on Llama 3 8B Q4_K_M — fast enough for chat that feels instant.',
          'For the GPU-side full VRAM breakdown by tier, see <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">how much VRAM a local LLM needs</a>. For the complete hardware reference, see the <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">complete VRAM guide for local LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 7B Model RAM',
        faqs: [
          {
            q: 'Is 8 GB of system RAM enough to run a 7B model without a GPU?',
            a: 'Yes. Running CPU-only, a 7B model at Q4 uses ~5–6 GB of system RAM and runs at 3–6 tok/s on a modern 8-core processor. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the VRAM guide</a> for GPU-accelerated options.',
          },
          {
            q: 'How much VRAM does Llama 3 8B need exactly?',
            a: '~5.5 GB at Q4_K_M for the model weights. Add 0.5–1 GB for a 4096-token context window. Budget 6–7 GB total to avoid VRAM overflow.',
          },
          {
            q: 'What happens when a model exceeds available VRAM?',
            a: 'Ollama offloads layers to system RAM, which is 10–20× slower. The model still runs but generation speed drops significantly. To prevent this, lower the quantization or reduce context with <code>--num-ctx 2048</code>.',
          },
          {
            q: 'Is GPU inference always better than CPU?',
            a: 'Not for every use case. For batch tasks, scheduled processing, or non-interactive use, CPU at ~5 tok/s is acceptable and avoids GPU costs. For real-time chat or coding, GPU\'s 20–25 tok/s is essential.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B Comparison](/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[Best SSD for Fast Model Loading](/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Can You Run RAG on 2 GB RAM?](/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Wie viel RAM braucht ein 7B-Modell?',
    seoTitle: 'RAM für 7B-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ein 7B-Modell bei Q4 benötigt 5–6 GB RAM oder VRAM. CPU ~5 Tok/s, GPU ~25 Tok/s. Faustregel: Parameter × 0,7 = GB bei Q4. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ein 7B-Modell bei Q4 benötigt 5–6 GB VRAM — planen Sie 6 GB ein, um den Kontextfenster-Overhead zu berücksichtigen',
          'Faustregel: Parameteranzahl in Milliarden × 0,7 = ungefähre GB bei Q4',
          'Das Kontextfenster auf 16K Tokens zu erweitern, fügt ~4 GB zum Modellgewicht hinzu',
        ],
      },
      body1: {
        title: 'Die Faustregel für CPU und GPU',
        content: [
          'Stand Mai 2026 benötigt <strong>ein 7B-Modell bei Q4 5–6 GB Arbeitsspeicher — entweder System-RAM (nur CPU-Inferenz) oder VRAM (GPU-Inferenz).</strong> Die Menge ist identisch; was sich ändert, ist die Geschwindigkeit. CPU-Inferenz läuft auf einem modernen 8-Kern-Prozessor mit ~5 Tokens pro Sekunde. GPU-Inferenz erreicht auf einer Karte mit ausreichend VRAM 20–25 Tokens pro Sekunde.',
          'Bei reiner CPU-Nutzung dividieren Sie die GPU-Geschwindigkeitsspalte durch 5× für eine 8-Kern-Schätzung. Ein 7B-Modell bei Q4 läuft mit ~5 tok/s auf der CPU, ~25 auf der GPU. Dieser 5×-Unterschied ist der Grund, warum sich eine Budget-GPU für interaktive Nutzung lohnt.',
        ],
        columns: ['Modellgröße', 'Q4-Speicher', 'GPU-Geschwindigkeit'],
        rows: [
          { 'Modellgröße': '3B', 'Q4-Speicher': '~2 GB', 'GPU-Geschwindigkeit': '~40 tok/s' },
          { 'Modellgröße': '7B', 'Q4-Speicher': '~5 GB', 'GPU-Geschwindigkeit': '~25 tok/s' },
          { 'Modellgröße': '8B', 'Q4-Speicher': '~5,5 GB', 'GPU-Geschwindigkeit': '~22 tok/s' },
          { 'Modellgröße': '13B', 'Q4-Speicher': '~9 GB', 'GPU-Geschwindigkeit': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'Wann CPU, wann GPU wählen',
        content: [
          'Wählen Sie nur CPU, wenn Sie 16+ GB System-RAM haben und Ihre Aufgaben im Batch- oder Hintergrundmodus laufen (nächtliche Dokumentenanalyse, geplante Zusammenfassungen). Die ~5 tok/s sind für nicht-interaktive Arbeit akzeptabel und vermeiden GPU-Kosten vollständig.',
          'Wählen Sie die GPU, wenn Sie interaktiven Chat oder Coding benötigen. Der 5×-Geschwindigkeitsunterschied spielt bei Echtzeitnutzung eine wesentliche Rolle. Selbst eine Budget-RTX 3050 6 GB liefert ~22 tok/s bei Llama 3 8B Q4_K_M — schnell genug für Chat, der sich unmittelbar anfühlt.',
          'Für die vollständige VRAM-Aufschlüsselung nach GPU-Tier, siehe <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">wie viel VRAM ein lokales LLM benötigt</a>. Für die vollständige Hardware-Referenz, siehe den <a href="/de/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">vollständigen VRAM-Leitfaden für lokale LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum RAM-Bedarf von 7B-Modellen',
        faqs: [
          {
            q: 'Reichen 8 GB System-RAM, um ein 7B-Modell ohne GPU zu betreiben?',
            a: 'Ja. Bei reiner CPU-Nutzung verbraucht ein 7B-Modell bei Q4 ~5–6 GB System-RAM und läuft mit 3–6 tok/s auf einem modernen 8-Kern-Prozessor. Sehen Sie <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">den VRAM-Leitfaden</a> für GPU-beschleunigte Optionen.',
          },
          {
            q: 'Wie viel VRAM benötigt Llama 3 8B genau?',
            a: '~5,5 GB bei Q4_K_M für die Modellgewichte. Addieren Sie 0,5–1 GB für ein Kontextfenster mit 4096 Tokens. Planen Sie insgesamt 6–7 GB ein, um VRAM-Überlauf zu vermeiden.',
          },
          {
            q: 'Was passiert, wenn ein Modell den verfügbaren VRAM überschreitet?',
            a: 'Ollama lagert Schichten in den System-RAM aus, der 10–20× langsamer ist. Das Modell läuft weiterhin, aber die Generierungsgeschwindigkeit sinkt erheblich. Um dies zu verhindern, reduzieren Sie die Quantisierung oder den Kontext mit <code>--num-ctx 2048</code>.',
          },
          {
            q: 'Ist GPU-Inferenz immer besser als CPU?',
            a: 'Nicht für jeden Anwendungsfall. Für Batch-Aufgaben, geplante Verarbeitung oder nicht-interaktive Nutzung sind ~5 tok/s auf der CPU akzeptabel und vermeiden GPU-Kosten. Für Echtzeit-Chat oder Coding sind die 20–25 tok/s der GPU unverzichtbar.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B Vergleich](/de/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[Beste SSD für schnelles Modellladen](/de/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Kann man RAG mit 2 GB RAM ausführen?](/de/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'De combien de RAM a besoin un modèle 7B ?',
    seoTitle: 'RAM pour modèle 7B local 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Un modèle 7B en Q4 nécessite 5–6 Go de RAM ou VRAM. CPU : ~5 tok/s ; GPU : ~25 tok/s. Règle : params × 0,7 = Go en Q4. Réponse PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modèle 7B en Q4 nécessite 5–6 Go de VRAM — prévoyez 6 Go pour inclure la surcharge de la fenêtre de contexte',
          'Règle rapide : nombre de paramètres en milliards × 0,7 = Go approximatifs nécessaires en Q4',
          'Étendre la fenêtre de contexte à 16K tokens ajoute ~4 Go au-dessus du poids du modèle',
        ],
      },
      body1: {
        title: 'La règle rapide pour CPU et GPU',
        content: [
          'En mai 2026, <strong>un modèle 7B en Q4 nécessite 5–6 Go de mémoire — soit de la RAM système (inférence CPU uniquement), soit de la VRAM (inférence GPU).</strong> La quantité est identique ; ce qui change, c\'est la vitesse. L\'inférence CPU tourne à ~5 tokens par seconde sur un processeur 8 cœurs moderne. L\'inférence GPU atteint 20–25 tokens par seconde sur une carte avec suffisamment de VRAM.',
          'En mode CPU uniquement, divisez la colonne de vitesse GPU par 5× pour estimer les performances sur un processeur 8 cœurs. Un modèle 7B en Q4 tourne à ~5 tok/s sur CPU, ~25 sur GPU. Cet écart de 5× explique pourquoi un GPU d\'entrée de gamme vaut l\'investissement pour une utilisation interactive.',
        ],
        columns: ['Taille du modèle', 'Mémoire Q4', 'Vitesse GPU'],
        rows: [
          { 'Taille du modèle': '3B', 'Mémoire Q4': '~2 Go', 'Vitesse GPU': '~40 tok/s' },
          { 'Taille du modèle': '7B', 'Mémoire Q4': '~5 Go', 'Vitesse GPU': '~25 tok/s' },
          { 'Taille du modèle': '8B', 'Mémoire Q4': '~5,5 Go', 'Vitesse GPU': '~22 tok/s' },
          { 'Taille du modèle': '13B', 'Mémoire Q4': '~9 Go', 'Vitesse GPU': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'Quand choisir le CPU ou le GPU ?',
        content: [
          'Optez pour le CPU uniquement si vous disposez de 16+ Go de RAM système et que vos tâches sont par lot ou en arrière-plan (analyse de documents nocturne, résumés planifiés). La vitesse de ~5 tok/s est acceptable pour les travaux non interactifs et évite entièrement les coûts GPU.',
          'Choisissez le GPU pour le chat interactif ou le coding. L\'écart de vitesse de 5× est déterminant en temps réel. Même un RTX 3050 6 Go d\'entrée de gamme offre ~22 tok/s sur Llama 3 8B Q4_K_M — suffisamment rapide pour un chat qui paraît instantané.',
          'Pour la répartition complète de la VRAM par tier GPU, consultez <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">combien de VRAM nécessite un LLM local</a>. Pour la référence matérielle complète, consultez le <a href="/fr/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">guide VRAM complet pour LLMs locaux</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la RAM des modèles 7B',
        faqs: [
          {
            q: '8 Go de RAM système suffisent-ils pour faire tourner un modèle 7B sans GPU ?',
            a: 'Oui. En mode CPU uniquement, un modèle 7B en Q4 utilise ~5–6 Go de RAM système et tourne à 3–6 tok/s sur un processeur 8 cœurs moderne. Consultez <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">le guide VRAM</a> pour les options accélérées par GPU.',
          },
          {
            q: 'De combien de VRAM Llama 3 8B a-t-il précisément besoin ?',
            a: '~5,5 Go en Q4_K_M pour les poids du modèle. Ajoutez 0,5–1 Go pour une fenêtre de contexte de 4096 tokens. Prévoyez 6–7 Go au total pour éviter le débordement de VRAM.',
          },
          {
            q: 'Que se passe-t-il lorsqu\'un modèle dépasse la VRAM disponible ?',
            a: 'Ollama décharge les couches vers la RAM système, 10–20× plus lente. Le modèle continue de fonctionner mais la vitesse de génération chute significativement. Pour l\'éviter, réduisez la quantisation ou le contexte avec <code>--num-ctx 2048</code>.',
          },
          {
            q: 'L\'inférence GPU est-elle toujours meilleure que le CPU ?',
            a: 'Pas pour tous les cas d\'usage. Pour les tâches par lot, le traitement planifié ou l\'utilisation non interactive, ~5 tok/s sur CPU est acceptable et évite les coûts GPU. Pour le chat en temps réel ou le coding, les 20–25 tok/s du GPU sont indispensables.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B : comparaison](/fr/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[Meilleur SSD pour chargement rapide de modèles](/fr/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Peut-on exécuter RAG avec 2 Go de RAM ?](/fr/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '7Bモデルにはどれくらいのメモリが必要ですか？',
    seoTitle: '7BモデルのRAMとVRAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4の7BモデルにはVRAM 5〜6 GBが必要です。目安：パラメータ数（十億単位）× 0.7 = Q4での必要GB数。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4の7BモデルにはVRAM 5〜6 GBが必要です — コンテキストウィンドウのオーバーヘッドを含めて6 GBを確保してください',
          '簡易計算：パラメータ数（十億単位）× 0.7 = Q4での概算GB数',
          'コンテキストウィンドウを16Kトークンに拡張すると、モデルウェイトに加えて約4 GBが追加されます',
        ],
      },
      body1: {
        title: 'CPUとGPUの簡易計算ルール',
        content: [
          '2026年5月現在、<strong>Q4の7Bモデルには5〜6 GBのメモリが必要です — システムRAM（CPUのみの推論）またはVRAM（GPU推論）のどちらでも同量です。</strong>量は同じですが、速度が異なります。CPUによる推論は現代の8コアプロセッサで毎秒約5トークン。GPUによる推論は十分なVRAMを持つカードで毎秒20〜25トークンです。',
          'CPUのみの場合は、8コアプロセッサの目安としてGPU速度の列を5で割ってください。Q4の7BモデルはCPUで約5 tok/s、GPUで約25 tok/sで動作します。この5倍の差が、インタラクティブな用途でバジェットGPUを購入する価値がある理由です。',
        ],
        columns: ['モデルサイズ', 'Q4メモリ', 'GPU速度'],
        rows: [
          { 'モデルサイズ': '3B', 'Q4メモリ': '~2 GB', 'GPU速度': '~40 tok/s' },
          { 'モデルサイズ': '7B', 'Q4メモリ': '~5 GB', 'GPU速度': '~25 tok/s' },
          { 'モデルサイズ': '8B', 'Q4メモリ': '~5.5 GB', 'GPU速度': '~22 tok/s' },
          { 'モデルサイズ': '13B', 'Q4メモリ': '~9 GB', 'GPU速度': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'CPUとGPUをどう選ぶか',
        content: [
          'システムRAMが16 GB以上あり、タスクがバッチ処理やバックグラウンド処理（夜間の文書分析、スケジュール要約）の場合はCPUのみを選択してください。約5 tok/sの速度は非インタラクティブな作業では許容範囲であり、GPU費用を完全に節約できます。',
          'インタラクティブなチャットやコーディングが必要な場合はGPUを選択してください。5倍の速度差はリアルタイム利用において重要です。バジェットRTX 3050 6 GBでもLlama 3 8B Q4_K_Mで約22 tok/sを実現でき、即時に感じられるチャットに十分な速度です。',
          'GPUのVRAMティア別の詳細な内訳については、<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">ローカルLLMに必要なVRAM量</a>をご覧ください。完全なハードウェアリファレンスについては、<a href="/ja/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">ローカルLLMの完全VRAMガイド</a>をご参照ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '7BモデルのRAMに関するよくある質問',
        faqs: [
          {
            q: 'GPUなしで7BモデルをCPUのみで動かすのに8 GBのシステムRAMで十分ですか？',
            a: 'はい。CPUのみでの動作時、Q4の7BモデルはシステムRAMを約5〜6 GB使用し、現代の8コアプロセッサで3〜6 tok/sで動作します。GPU加速オプションについては<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAMガイド</a>をご覧ください。',
          },
          {
            q: 'Llama 3 8Bに必要なVRAMは正確にはどれくらいですか？',
            a: 'モデルウェイトにQ4_K_Mで約5.5 GB必要です。4096トークンのコンテキストウィンドウには0.5〜1 GBを追加してください。VRAMオーバーフローを防ぐために合計6〜7 GBを確保してください。',
          },
          {
            q: 'モデルが利用可能なVRAMを超えるとどうなりますか？',
            a: 'OllamaはレイヤーをシステムRAMにオフロードしますが、これは10〜20倍遅くなります。モデルは動作を続けますが生成速度が大幅に低下します。防ぐには、量化を下げるか<code>--num-ctx 2048</code>でコンテキストを削減してください。',
          },
          {
            q: 'GPU推論は常にCPUより優れていますか？',
            a: 'すべての用途でそうとは言えません。バッチ処理、スケジュール処理、非インタラクティブな用途では、CPUの約5 tok/sは許容範囲でありGPU費用を節約できます。リアルタイムのチャットやコーディングには、GPUの20〜25 tok/sが不可欠です。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B 比較](/ja/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[モデル高速ロードのための最適SSD](/ja/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[2 GB RAMでRAGは動かせる？](/ja/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '7B模型需要多少内存？',
    seoTitle: '7B模型所需RAM和VRAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4量化的7B模型需要5–6 GB内存或显存。CPU约5 tok/s，GPU约25 tok/s。规则：参数量×0.7=Q4所需GB数。PromptQuorum解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4的7B模型需要5–6 GB显存——预留6 GB以包含上下文窗口开销',
          '快速计算：参数量（十亿为单位）× 0.7 = Q4所需的近似GB数',
          '将上下文窗口扩展到16K令牌，在模型权重基础上额外增加约4 GB',
        ],
      },
      body1: {
        title: 'CPU和GPU的快速计算规则',
        content: [
          '截至2026年5月，<strong>Q4的7B模型需要5–6 GB内存——无论是系统RAM（仅CPU推理）还是显存（GPU推理）。</strong>内存量相同，变化的是速度。CPU推理在现代8核处理器上约为每秒5个令牌，GPU推理在具备足够显存的显卡上可达每秒20–25个令牌。',
          '仅使用CPU时，将GPU速度列除以5×即可估算8核处理器的性能。Q4的7B模型在CPU上约为5 tok/s，在GPU上约为25 tok/s。这5倍的差距正是预算级GPU值得用于交互式场景的原因。',
        ],
        columns: ['模型大小', 'Q4内存', 'GPU速度'],
        rows: [
          { '模型大小': '3B', 'Q4内存': '~2 GB', 'GPU速度': '~40 tok/s' },
          { '模型大小': '7B', 'Q4内存': '~5 GB', 'GPU速度': '~25 tok/s' },
          { '模型大小': '8B', 'Q4内存': '~5.5 GB', 'GPU速度': '~22 tok/s' },
          { '模型大小': '13B', 'Q4内存': '~9 GB', 'GPU速度': '~15 tok/s' },
        ],
      },
      body2: {
        title: '如何选择CPU还是GPU',
        content: [
          '当您拥有16 GB以上系统RAM且任务为批处理或后台模式（夜间文档分析、定时摘要）时，选择仅CPU方案。约5 tok/s的速度对于非交互式工作是可接受的，且完全避免了GPU成本。',
          '当您需要交互式对话或编程辅助时，选择GPU。5倍的速度差在实时使用中至关重要。即使是入门级RTX 3050 6 GB，在Llama 3 8B Q4_K_M上也能达到约22 tok/s——足以实现流畅自然的对话体验。',
          '有关GPU各显存层级的完整分类，请参阅<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">本地LLM所需显存量</a>。有关完整的硬件参考，请参阅<a href="/zh/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">本地LLM完整显存指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于7B模型RAM的快速解答',
        faqs: [
          {
            q: '8 GB系统RAM在不使用GPU的情况下足以运行7B模型吗？',
            a: '可以。仅使用CPU时，Q4的7B模型使用约5–6 GB系统RAM，在现代8核处理器上以3–6 tok/s运行。GPU加速选项请参阅<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">显存指南</a>。',
          },
          {
            q: 'Llama 3 8B确切需要多少显存？',
            a: 'Q4_K_M量化下模型权重约需5.5 GB。4096令牌上下文窗口额外需要0.5–1 GB。建议预留6–7 GB以防止显存溢出。',
          },
          {
            q: '当模型超出可用显存时会发生什么？',
            a: 'Ollama会将层卸载到系统RAM，速度慢10–20倍。模型仍可运行，但生成速度大幅下降。为避免这种情况，请降低量化等级或使用<code>--num-ctx 2048</code>减少上下文长度。',
          },
          {
            q: 'GPU推理总是优于CPU吗？',
            a: '并非适用于所有场景。对于批处理任务、定时处理或非交互式用途，CPU约5 tok/s是可接受的，并可节省GPU成本。对于实时对话或编程辅助，GPU的20–25 tok/s是必不可少的。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B对比](/zh/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[快速加载模型的最佳SSD](/zh/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[2 GB内存能运行RAG吗？](/zh/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Cuánta RAM necesita un modelo 7B?',
    seoTitle: 'RAM para modelos 7B locales 2026 | PromptQuorum',
    metaDescription: 'Un modelo 7B en Q4 necesita 5–6 GB de RAM o VRAM. CPU da ~5 tok/s; GPU da ~25 tok/s con la misma memoria. Regla: params × 0,7 = GB en Q4. PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Cuánta RAM necesita un modelo 7B?',
        answer: 'Un modelo 7B en cuantización Q4 necesita 5–6 GB de VRAM o RAM para un rendimiento de inferencia eficiente. Regla: parámetros del modelo en miles de millones × 0,7 = GB aproximados en Q4. GPU ofrece ~25 tok/s; CPU ofrece ~5 tok/s con la misma memoria.',
        bullets: [
          '7B Q4: 5–6 GB de VRAM o memoria unificada',
          '7B Q5: 6–7 GB de VRAM',
          '7B Q8: 8–9 GB de VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modelo 7B en Q4 necesita 5–6 GB de VRAM — reserva 6 GB para incluir la sobrecarga de la ventana de contexto',
          'Regla rápida: parámetros en miles de millones × 0,7 = GB aproximados necesarios en Q4',
          'Ampliar la ventana de contexto a 16K tokens añade ~4 GB sobre el peso del modelo',
        ],
      },
      body1: {
        title: 'La regla rápida para CPU y GPU',
        content: [
          'A mayo de 2026, <strong>un modelo 7B en Q4 necesita 5–6 GB de memoria — ya sea RAM del sistema (inferencia solo en CPU) o VRAM (inferencia en GPU).</strong> La cantidad es la misma; lo que cambia es la velocidad. La inferencia en CPU funciona a ~5 tokens por segundo en un procesador moderno de 8 núcleos. La inferencia en GPU funciona a 20–25 tokens por segundo en una tarjeta con VRAM adecuada.',
          'En modo solo-CPU, divide la columna de velocidad GPU por 5× para estimar en un procesador de 8 núcleos. Un modelo 7B en Q4 funciona a ~5 tok/s en CPU, ~25 en GPU. Esta diferencia de 5× es la razón por la que una GPU de bajo coste vale la pena para uso interactivo.',
        ],
        columns: ['Tamaño del modelo', 'Memoria Q4', 'Velocidad GPU'],
        rows: [
          { 'Tamaño del modelo': '3B', 'Memoria Q4': '~2 GB', 'Velocidad GPU': '~40 tok/s' },
          { 'Tamaño del modelo': '7B', 'Memoria Q4': '~5 GB', 'Velocidad GPU': '~25 tok/s' },
          { 'Tamaño del modelo': '8B', 'Memoria Q4': '~5,5 GB', 'Velocidad GPU': '~22 tok/s' },
          { 'Tamaño del modelo': '13B', 'Memoria Q4': '~9 GB', 'Velocidad GPU': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'Cuándo elegir CPU vs GPU',
        content: [
          'Elige solo CPU cuando tienes 16+ GB de RAM del sistema y tus tareas son por lotes o en segundo plano (análisis nocturno de documentos, resúmenes programados). La tasa de ~5 tok/s es aceptable para trabajo no interactivo y evita completamente los costes de GPU.',
          'Elige GPU cuando necesites chat o programación interactivos. La diferencia de velocidad de 5× importa en uso en tiempo real. Incluso una RTX 3050 de bajo coste con 6 GB ofrece ~22 tok/s en Llama 3 8B Q4_K_M — suficientemente rápido para un chat que se siente instantáneo.',
          'Para el desglose completo de VRAM por nivel de GPU, consulta <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">cuánta VRAM necesita un LLM local</a>. Para la referencia de hardware completa, consulta la <a href="/es/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">guía completa de VRAM para LLMs locales</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la RAM de modelos 7B',
        faqs: [
          {
            q: '¿Son suficientes 8 GB de RAM del sistema para ejecutar un modelo 7B sin GPU?',
            a: 'Sí. En modo solo-CPU, un modelo 7B en Q4 usa ~5–6 GB de RAM del sistema y funciona a 3–6 tok/s en un procesador moderno de 8 núcleos. Consulta <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">la guía de VRAM</a> para opciones con aceleración GPU.',
          },
          {
            q: '¿Cuánta VRAM necesita exactamente Llama 3 8B?',
            a: '~5,5 GB en Q4_K_M para los pesos del modelo. Añade 0,5–1 GB para una ventana de contexto de 4096 tokens. Reserva 6–7 GB en total para evitar desbordamiento de VRAM.',
          },
          {
            q: '¿Qué ocurre cuando un modelo supera la VRAM disponible?',
            a: 'Ollama descarga capas a la RAM del sistema, que es 10–20× más lenta. El modelo sigue funcionando pero la velocidad de generación cae significativamente. Para evitarlo, reduce la cuantización o el contexto con <code>--num-ctx 2048</code>.',
          },
          {
            q: '¿La inferencia en GPU es siempre mejor que en CPU?',
            a: 'No para todos los casos de uso. Para tareas por lotes, procesamiento programado o uso no interactivo, ~5 tok/s en CPU es aceptable y evita costes de GPU. Para chat o programación en tiempo real, los 20–25 tok/s de la GPU son esenciales.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B: comparación](/es/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[Mejor SSD para carga rápida de modelos](/es/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[¿Puedes ejecutar RAG con 2 GB de RAM?](/es/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    title: 'Quanta RAM um modelo 7B precisa?',
    seoTitle: 'RAM para modelos 7B locais 2026 | PromptQuorum',
    metaDescription: 'Um modelo 7B em Q4 precisa de 5–6 GB de RAM ou VRAM. CPU dá ~5 tok/s; GPU dá ~25 tok/s com a mesma memória. Regra: params × 0,7 = GB em Q4. PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Quanta RAM um modelo 7B precisa?',
        answer: 'Um modelo 7B em quantização Q4 precisa de 5–6 GB de VRAM ou RAM para um desempenho de inferência eficiente. Regra: parâmetros do modelo em bilhões × 0,7 = GB aproximados em Q4. GPU oferece ~25 tok/s; CPU oferece ~5 tok/s com a mesma memória.',
        bullets: [
          '7B Q4: 5–6 GB de VRAM ou memória unificada',
          '7B Q5: 6–7 GB de VRAM',
          '7B Q8: 8–9 GB de VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Um modelo 7B em Q4 precisa de 5–6 GB de VRAM — reserve 6 GB para incluir a sobrecarga da janela de contexto',
          'Regra rápida: número de parâmetros em bilhões × 0,7 = GB aproximados necessários em Q4',
          'Expandir a janela de contexto para 16K tokens adiciona ~4 GB além do peso do modelo',
        ],
      },
      body1: {
        title: 'A regra rápida para CPU e GPU',
        content: [
          'Em maio de 2026, <strong>um modelo 7B em Q4 precisa de 5–6 GB de memória — seja RAM do sistema (inferência somente CPU) ou VRAM (inferência GPU).</strong> A quantidade é a mesma; o que muda é a velocidade. A inferência em CPU funciona a ~5 tokens por segundo em um processador moderno de 8 núcleos. A inferência em GPU funciona a 20–25 tokens por segundo em uma placa com VRAM adequada.',
          'No modo somente CPU, divida a coluna de velocidade da GPU por 5× para uma estimativa de processador de 8 núcleos. Um modelo 7B em Q4 funciona a ~5 tok/s na CPU, ~25 na GPU. Essa diferença de 5× é a razão pela qual uma GPU de entrada vale a pena comprar para uso interativo.',
        ],
        columns: ['Tamanho do modelo', 'Memória Q4', 'Velocidade GPU'],
        rows: [
          { 'Tamanho do modelo': '3B', 'Memória Q4': '~2 GB', 'Velocidade GPU': '~40 tok/s' },
          { 'Tamanho do modelo': '7B', 'Memória Q4': '~5 GB', 'Velocidade GPU': '~25 tok/s' },
          { 'Tamanho do modelo': '8B', 'Memória Q4': '~5,5 GB', 'Velocidade GPU': '~22 tok/s' },
          { 'Tamanho do modelo': '13B', 'Memória Q4': '~9 GB', 'Velocidade GPU': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'Quando escolher CPU vs GPU',
        content: [
          'Escolha somente CPU quando tiver 16+ GB de RAM do sistema e suas tarefas forem em lote ou em segundo plano (análise de documentos noturna, resumos programados). A taxa de ~5 tok/s é aceitável para trabalho não interativo e evita completamente os custos de GPU.',
          'Escolha GPU quando precisar de chat ou codificação interativos. A diferença de velocidade de 5× importa no uso em tempo real. Até uma RTX 3050 de entrada com 6 GB oferece ~22 tok/s em Llama 3 8B Q4_K_M — rápido o suficiente para um chat que parece instantâneo.',
          'Para o detalhamento completo de VRAM por nível de GPU, veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">quanta VRAM um LLM local precisa</a>. Para a referência de hardware completa, veja o <a href="/pt/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">guia completo de VRAM para LLMs locais</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre a RAM de modelos 7B',
        faqs: [
          {
            q: '8 GB de RAM do sistema são suficientes para executar um modelo 7B sem GPU?',
            a: 'Sim. No modo somente CPU, um modelo 7B em Q4 usa ~5–6 GB de RAM do sistema e funciona a 3–6 tok/s em um processador moderno de 8 núcleos. Veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">o guia de VRAM</a> para opções com aceleração GPU.',
          },
          {
            q: 'Quanta VRAM o Llama 3 8B precisa exatamente?',
            a: '~5,5 GB em Q4_K_M para os pesos do modelo. Adicione 0,5–1 GB para uma janela de contexto de 4096 tokens. Reserve 6–7 GB no total para evitar estouro de VRAM.',
          },
          {
            q: 'O que acontece quando um modelo excede a VRAM disponível?',
            a: 'O Ollama descarrega camadas para a RAM do sistema, que é 10–20× mais lenta. O modelo continua funcionando, mas a velocidade de geração cai significativamente. Para evitar isso, reduza a quantização ou o contexto com <code>--num-ctx 2048</code>.',
          },
          {
            q: 'A inferência em GPU é sempre melhor que em CPU?',
            a: 'Não para todos os casos de uso. Para tarefas em lote, processamento programado ou uso não interativo, ~5 tok/s na CPU é aceitável e evita custos de GPU. Para chat ou codificação em tempo real, os 20–25 tok/s da GPU são essenciais.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B: comparação](/pt/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[Melhor SSD para carregamento rápido de modelos](/pt/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Pode executar RAG com 2 GB de RAM?](/pt/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'كم من الذاكرة يحتاج نموذج ⁨7B⁩؟',
    seoTitle: '⁨RAM⁩ لنموذج ⁨7B⁩ المحلي ⁨2026⁩: القاعدة وأرقام ⁨VRAM⁩',
    metaDescription: 'نموذج ⁨7B⁩ بتكميم ⁨Q4⁩_⁨K⁩_⁨M⁩ يشغل ⁨5⁩–⁨6 GB RAM⁩ أو ⁨VRAM. GPU⁩ يُنتج ~⁨25⁩ توكن/ث و⁨CPU⁩ ~⁨5⁩ توكن/ث بالذاكرة نفسها. القاعدة: معاملات × ⁨0.7⁩ = ⁨GB⁩.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'كم من الذاكرة يحتاج نموذج 7B؟',
        answer: 'نموذج 7B بتكميم Q4_K_M يحتاج ~5.5 GB ذاكرة RAM أو VRAM. مع GPU: 5.5 GB VRAM كافية للتشغيل السلس. مع CPU فقط: خصص 8–10 GB RAM. القاعدة: عدد المعاملات بالمليار × 0.7 = GB عند تكميم Q4.',
        bullets: [
          'نموذج 7B بتكميم Q4_K_M: ~5.5 GB VRAM أو RAM',
          'القاعدة العامة: معاملات × 0.7 = GB عند Q4',
          'بدون GPU: يعمل بـ 8 GB RAM ولكن بسرعة ~5 توكن/ث فقط',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'نموذج 7B بتكميم Q4_K_M يزن ~5.5 GB ويعمل على GPU بسعة 6 GB',
          'الاستدلال عبر CPU يحتاج 8–10 GB RAM للأداء المقبول',
          'Q4_K_M هو المعيار القياسي: جودة أقل بـ 10% من Q8 مع توفير 50% مساحة',
        ],
      },
      body1: {
        title: 'أرقام ذاكرة نموذج 7B الفعلية',
        content: [
          '<strong>نموذج 7B بتكميم Q4_K_M يشغل ~5.5 GB.</strong> Q4_K_M هو التنسيق الأكثر شيوعاً لأنه يحقق توازناً مثالياً بين الجودة والحجم.',
          'القاعدة العامة: أضف 2–3 GB على حجم النموذج لاستيعاب التخزين المؤقت KV للسياق والعمليات الداخلية للإطار. وهذا يعني أن GPU بسعة 6 GB مثل RTX 3060 تتناسب جيداً مع نموذج 7B.',
        ],
        columns: ['حجم النموذج', 'ذاكرة Q4', 'سرعة GPU'],
        rows: [
          { 'حجم النموذج': 'نموذج 7B', 'ذاكرة Q4': '~5.5 GB', 'سرعة GPU': 'سريع (RTX 3060+)' },
          { 'حجم النموذج': 'نموذج 13B', 'ذاكرة Q4': '~9 GB', 'سرعة GPU': 'متوسط (RTX 3080+)' },
          { 'حجم النموذج': 'نموذج 30B', 'ذاكرة Q4': '~20 GB', 'سرعة GPU': 'بطيء (RTX 4090)' },
          { 'حجم النموذج': 'نموذج 70B', 'ذاكرة Q4': '~45 GB', 'سرعة GPU': 'غير مناسب للمستهلك' },
        ],
      },
      body2: {
        title: 'متطلبات الذاكرة حسب نوع الإعداد',
        content: [
          '<strong>إعداد GPU (الأسرع):</strong> 5.5 GB VRAM كافية لنموذج 7B بتكميم Q4_K_M. RTX 3060 (12 GB) أو RTX 4060 (8 GB) تمنحك هامشاً جيداً.',
          '<strong>إعداد CPU فقط (بدون GPU):</strong> تحتاج 8–10 GB RAM. النموذج يعمل لكن بسرعة أبطأ (2–6 توكن/ث بدلاً من 30–50). استخدم Ollama مع <code>OLLAMA_NUM_GPU=0</code> إذا لم يكن لديك GPU.',
          '<strong>إعداد مختلط (GPU + CPU):</strong> إذا كانت لديك 4 GB VRAM فقط، يمكنك تقسيم الطبقات بين GPU وCPU. راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">دليل VRAM للنماذج المحلية</a> لحساب الطبقات المثلى.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة حول ذاكرة نموذج 7B',
        faqs: [
          {
            q: 'هل 8 GB RAM كافية لتشغيل نموذج 7B بدون GPU؟',
            a: 'نعم. في وضع CPU فقط، نموذج 7B بتكميم Q4 يستخدم ~5–6 GB RAM ويعمل بـ 3–6 توكن/ث على معالج حديث ذي 8 نوى. راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">دليل VRAM</a> لخيارات تسريع GPU.',
          },
          {
            q: 'كم VRAM يحتاج Llama 3 8B بالضبط؟',
            a: '~5.5 GB عند Q4_K_M لأوزان النموذج. أضف 0.5–1 GB لنافذة سياق 4096 توكن. احتفظ بـ 6–7 GB إجمالاً لتجنب تجاوز VRAM.',
          },
          {
            q: 'ماذا يحدث عندما يتجاوز النموذج VRAM المتاحة؟',
            a: 'Ollama يُفرغ الطبقات إلى RAM الجهاز التي تكون أبطأ بـ 10–20 مرة. النموذج يستمر في العمل لكن سرعة التوليد تنخفض بشكل ملحوظ. لتجنب ذلك، قلل التكميم أو السياق باستخدام <code>--num-ctx 2048</code>.',
          },
          {
            q: 'هل الاستدلال عبر GPU دائماً أفضل من CPU؟',
            a: 'ليس في كل الحالات. للمهام الدُفعية أو المعالجة المجدولة أو غير التفاعلية، ~5 توكن/ث على CPU مقبول ويتجنب تكاليف GPU. للمحادثة أو البرمجة الآنية، 20–25 توكن/ث عبر GPU ضرورية.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[Mistral Small 24B مقابل Qwen 14B مقابل Llama 8B: مقارنة](/ar/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[أفضل SSD لتحميل النماذج بسرعة](/ar/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[هل يمكنك تشغيل RAG بذاكرة 2 GB؟](/ar/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    title: '7B 모델에 얼마나 많은 RAM이 필요합니까?',
    seoTitle: '7B 로컬 모델 RAM 요구사항 2026 | PromptQuorum',
    metaDescription: 'Q4 양자화 7B 모델은 5~6 GB RAM 또는 VRAM이 필요합니다. CPU는 ~5 tok/s, GPU는 동일한 메모리로 ~25 tok/s를 제공합니다. 공식: 파라미터 × 0.7 = Q4 기준 GB.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    targetKeywords: [
      '7B 모델 RAM 용량',
      '로컬 LLM VRAM 요구사항',
      'Q4 양자화 메모리',
      '7B LLM 실행 RAM',
      'Llama 8B VRAM',
    ],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: '7B 모델에 얼마나 많은 RAM이 필요합니까?',
        answer: 'Q4 양자화 7B 모델은 효율적인 추론 성능을 위해 5~6 GB VRAM 또는 RAM이 필요합니다. 계산 공식: 모델 파라미터(십억 단위) × 0.7 = Q4 기준 근사 GB. GPU는 ~25 tok/s를 제공하며, CPU는 동일한 메모리로 ~5 tok/s를 제공합니다.',
        bullets: [
          '7B Q4: 5~6 GB VRAM 또는 통합 메모리',
          '7B Q5: 6~7 GB VRAM',
          '7B Q8: 8~9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4 양자화 7B 모델은 5~6 GB VRAM이 필요합니다 — 컨텍스트 윈도우 오버헤드를 포함하여 6 GB를 확보하십시오.',
          '빠른 계산 공식: 파라미터(십억 단위) × 0.7 = Q4 기준 필요 근사 GB',
          '컨텍스트 윈도우를 16K 토큰으로 확장하면 모델 가중치 외에 ~4 GB가 추가됩니다.',
        ],
      },
      body1: {
        title: 'CPU 및 GPU를 위한 빠른 계산 공식',
        content: [
          '2026년 5월 기준, <strong>Q4 양자화 7B 모델은 5~6 GB 메모리가 필요합니다 — 시스템 RAM(CPU 전용 추론)이든 VRAM(GPU 추론)이든 동일합니다.</strong> 용량은 같으며 차이는 속도입니다. CPU 추론은 8코어 현대 프로세서에서 ~5 토큰/초로 작동합니다. GPU 추론은 충분한 VRAM이 있는 카드에서 20~25 토큰/초로 작동합니다.',
          'CPU 전용 모드에서는 8코어 프로세서 기준으로 GPU 속도 열을 5배로 나누어 예상하십시오. Q4 양자화 7B 모델은 CPU에서 ~5 tok/s, GPU에서 ~25 tok/s로 실행됩니다. 이 5배 차이가 대화형 사용에 저가형 GPU를 구입할 가치가 있는 이유입니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4 양자화 7B 모델은 CPU 전용 또는 GPU 추론 모두에서 5~6 GB 메모리가 필요하며, GPU는 동일한 메모리로 5배 빠른 추론 속도를 제공합니다.' },
          { type: 'plain-terms', text: '7B 모델을 Q4로 실행하려면 약 6 GB가 필요합니다. GPU가 있으면 25 tok/s를, CPU만 있으면 5 tok/s를 기대하십시오.' },
        ],
        columns: ['모델 크기', 'Q4 메모리', 'GPU 속도'],
        rows: [
          { '모델 크기': '3B', 'Q4 메모리': '~2 GB', 'GPU 속도': '~40 tok/s' },
          { '모델 크기': '7B', 'Q4 메모리': '~5 GB', 'GPU 속도': '~25 tok/s' },
          { '모델 크기': '8B', 'Q4 메모리': '~5.5 GB', 'GPU 속도': '~22 tok/s' },
          { '모델 크기': '13B', 'Q4 메모리': '~9 GB', 'GPU 속도': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'CPU와 GPU 중 선택 기준',
        content: [
          '시스템 RAM이 16 GB 이상이고 작업이 일괄 처리나 백그라운드 작업(야간 문서 분석, 예약된 요약)인 경우 CPU 전용을 선택하십시오. ~5 tok/s 속도는 비대화형 작업에 허용 가능하며 GPU 비용을 완전히 회피합니다.',
          '대화형 채팅이나 코딩이 필요한 경우 GPU를 선택하십시오. 5배 속도 차이는 실시간 사용에서 중요합니다. 6 GB VRAM의 저가형 RTX 3050도 Llama 3 8B Q4_K_M에서 ~22 tok/s를 제공합니다 — 즉각적으로 느껴지는 채팅에 충분한 속도입니다.',
          'GPU 등급별 전체 VRAM 분석은 <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">로컬 LLM에 필요한 VRAM 용량</a>을 참조하십시오. 전체 하드웨어 참조 가이드는 <a href="/ko/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">로컬 LLM VRAM 완전 가이드</a>를 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '7B 모델 RAM에 관한 빠른 답변',
        faqs: [
          {
            q: 'GPU 없이 7B 모델을 실행하는 데 시스템 RAM 8 GB로 충분합니까?',
            a: '예. CPU 전용 모드에서 Q4 양자화 7B 모델은 시스템 RAM ~5~6 GB를 사용하며 8코어 현대 프로세서에서 3~6 tok/s로 작동합니다. GPU 가속 옵션은 <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM 가이드</a>를 참조하십시오.',
          },
          {
            q: 'Llama 3 8B에 정확히 얼마나 많은 VRAM이 필요합니까?',
            a: '모델 가중치에 Q4_K_M으로 ~5.5 GB가 필요합니다. 4096 토큰 컨텍스트 윈도우에 0.5~1 GB를 추가하십시오. VRAM 오버플로를 방지하기 위해 총 6~7 GB를 확보하십시오.',
          },
          {
            q: '모델이 사용 가능한 VRAM을 초과하면 어떻게 됩니까?',
            a: 'Ollama는 레이어를 시스템 RAM으로 오프로드하며, 이는 10~20배 더 느립니다. 모델은 계속 실행되지만 생성 속도가 현저히 저하됩니다. 이를 방지하려면 양자화를 줄이거나 <code>--num-ctx 2048</code>로 컨텍스트를 줄이십시오.',
          },
          {
            q: 'GPU 추론이 항상 CPU보다 우수합니까?',
            a: '모든 사용 사례에서 그런 것은 아닙니다. 일괄 작업, 예약된 처리, 비대화형 사용의 경우 CPU에서 ~5 tok/s는 허용 가능하며 GPU 비용을 회피합니다. 실시간 채팅이나 코딩의 경우 GPU의 20~25 tok/s가 필수적입니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[로컬 LLM에 필요한 VRAM 용량](/ko/prompt-bites/how-much-vram-for-local-llm)',
          '[70B 모델 VRAM 요구사항](/ko/prompt-bites/vram-for-70b-model)',
          '[로컬 LLM VRAM 완전 가이드](/ko/local-llms/how-much-vram-local-llm)',
          '[Mistral Small 24B vs Qwen 14B vs Llama 8B 비교](/ko/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- Mistral Small 24B vs Qwen 14B vs Llama 8B comparison',
          '[빠른 모델 로딩을 위한 최고의 SSD](/ko/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[2 GB RAM으로 RAG를 실행할 수 있습니까?](/ko/prompt-bites/can-you-run-rag-on-2gb-ram) -- can you run RAG on 2 GB RAM?',
        ],
      },
    },
  },
}
