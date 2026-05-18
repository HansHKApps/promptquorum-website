import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'How Much RAM Does a 7B Model Need?',
    seoTitle: 'How Much RAM for a 7B Model? | Prompt Bites | PromptQuorum',
    metaDescription: 'A 7B model at Q4 needs 5–6 GB of VRAM. Rule: parameters in billions × 0.7 = GB at Q4. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Mistral 7B', 'Llama 3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers estimating hardware requirements for local LLMs',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['how-much-vram-for-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much RAM does a 7B model need?',
        answer: 'A 7B model at Q4 quantization needs 5–6 GB of VRAM or RAM. Rule of thumb: model parameters in billions × 0.7 = approximate GB needed at Q4.',
        bullets: [
          '7B Q4: 5–6 GB VRAM or unified memory',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie viel RAM braucht ein 7B-Modell?',
        answer: 'Ein 7B-Modell bei Q4-Quantisierung benötigt 5–6 GB VRAM oder RAM. Daumenregel: Modellparameter in Milliarden × 0,7 = ungefähre GB bei Q4.',
        bullets: [
          '7B Q4: 5–6 GB VRAM oder Unified Memory',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'De combien de RAM a besoin un modèle 7B ?',
        answer: 'Un modèle 7B en quantisation Q4 nécessite 5–6 Go de VRAM ou de RAM. Règle de calcul : paramètres en milliards × 0,7 = Go approximatifs en Q4.',
        bullets: [
          '7B Q4 : 5–6 Go de VRAM ou de mémoire unifiée',
          '7B Q5 : 6–7 Go de VRAM',
          '7B Q8 : 8–9 Go de VRAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '7Bモデルにはどれくらいのメモリが必要ですか？',
        answer: 'Q4量化の7Bモデルには5–6 GBのVRAMまたはRAMが必要です。目安：モデルパラメータ数（十億単位）× 0.7 = Q4での概算GB。',
        bullets: [
          '7B Q4: 5–6 GB VRAMまたは統合メモリ',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '7B模型需要多少内存？',
        answer: 'Q4量化的7B模型需要5–6 GB的显存或内存。经验法则：模型参数量（以十亿为单位）× 0.7 = Q4所需的近似GB数。',
        bullets: [
          '7B Q4: 5–6 GB显存或统一内存',
          '7B Q5: 6–7 GB显存',
          '7B Q8: 8–9 GB显存',
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
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Wie viel RAM braucht ein 7B-Modell?',
    seoTitle: 'Wie viel RAM für ein 7B-Modell? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ein 7B-Modell bei Q4 benötigt 5–6 GB VRAM. Faustregel: Parameter in Milliarden × 0,7 = GB bei Q4. Schnelle Antwort von PromptQuorum.',
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
          'Für die vollständige VRAM-Aufschlüsselung nach GPU-Tier, siehe <a href="/prompt-bites/how-much-vram-for-local-llm?lang=de" class="text-primary hover:underline">wie viel VRAM ein lokales LLM benötigt</a>. Für die vollständige Hardware-Referenz, siehe den <a href="/local-llms/how-much-vram-local-llm?lang=de" class="text-primary hover:underline">vollständigen VRAM-Leitfaden für lokale LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum RAM-Bedarf von 7B-Modellen',
        faqs: [
          {
            q: 'Reichen 8 GB System-RAM, um ein 7B-Modell ohne GPU zu betreiben?',
            a: 'Ja. Bei reiner CPU-Nutzung verbraucht ein 7B-Modell bei Q4 ~5–6 GB System-RAM und läuft mit 3–6 tok/s auf einem modernen 8-Kern-Prozessor. Sehen Sie <a href="/prompt-bites/how-much-vram-for-local-llm?lang=de" class="text-primary hover:underline">den VRAM-Leitfaden</a> für GPU-beschleunigte Optionen.',
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
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'De combien de RAM a besoin un modèle 7B ?',
    seoTitle: 'Combien de RAM pour un modèle 7B ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Un modèle 7B en Q4 nécessite 5–6 Go de VRAM. Règle : paramètres en milliards × 0,7 = Go en Q4. Réponse rapide de PromptQuorum.',
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
          'Pour la répartition complète de la VRAM par tier GPU, consultez <a href="/prompt-bites/how-much-vram-for-local-llm?lang=fr" class="text-primary hover:underline">combien de VRAM nécessite un LLM local</a>. Pour la référence matérielle complète, consultez le <a href="/local-llms/how-much-vram-local-llm?lang=fr" class="text-primary hover:underline">guide VRAM complet pour LLMs locaux</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la RAM des modèles 7B',
        faqs: [
          {
            q: '8 Go de RAM système suffisent-ils pour faire tourner un modèle 7B sans GPU ?',
            a: 'Oui. En mode CPU uniquement, un modèle 7B en Q4 utilise ~5–6 Go de RAM système et tourne à 3–6 tok/s sur un processeur 8 cœurs moderne. Consultez <a href="/prompt-bites/how-much-vram-for-local-llm?lang=fr" class="text-primary hover:underline">le guide VRAM</a> pour les options accélérées par GPU.',
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
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '7Bモデルにはどれくらいのメモリが必要ですか？',
    seoTitle: '7BモデルのRAM要件 | Prompt Bites | PromptQuorum',
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
          'GPUのVRAMティア別の詳細な内訳については、<a href="/prompt-bites/how-much-vram-for-local-llm?lang=ja" class="text-primary hover:underline">ローカルLLMに必要なVRAM量</a>をご覧ください。完全なハードウェアリファレンスについては、<a href="/local-llms/how-much-vram-local-llm?lang=ja" class="text-primary hover:underline">ローカルLLMの完全VRAMガイド</a>をご参照ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '7BモデルのRAMに関するよくある質問',
        faqs: [
          {
            q: 'GPUなしで7BモデルをCPUのみで動かすのに8 GBのシステムRAMで十分ですか？',
            a: 'はい。CPUのみでの動作時、Q4の7BモデルはシステムRAMを約5〜6 GB使用し、現代の8コアプロセッサで3〜6 tok/sで動作します。GPU加速オプションについては<a href="/prompt-bites/how-much-vram-for-local-llm?lang=ja" class="text-primary hover:underline">VRAMガイド</a>をご覧ください。',
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
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '7B模型需要多少内存？',
    seoTitle: '7B模型的RAM需求 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4量化的7B模型需要5–6 GB显存。规则：参数量（十亿为单位）× 0.7 = Q4所需GB数。PromptQuorum的快速解答。',
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
          '有关GPU各显存层级的完整分类，请参阅<a href="/prompt-bites/how-much-vram-for-local-llm?lang=zh" class="text-primary hover:underline">本地LLM所需显存量</a>。有关完整的硬件参考，请参阅<a href="/local-llms/how-much-vram-local-llm?lang=zh" class="text-primary hover:underline">本地LLM完整显存指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于7B模型RAM的快速解答',
        faqs: [
          {
            q: '8 GB系统RAM在不使用GPU的情况下足以运行7B模型吗？',
            a: '可以。仅使用CPU时，Q4的7B模型使用约5–6 GB系统RAM，在现代8核处理器上以3–6 tok/s运行。GPU加速选项请参阅<a href="/prompt-bites/how-much-vram-for-local-llm?lang=zh" class="text-primary hover:underline">显存指南</a>。',
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
    },
  },
}
