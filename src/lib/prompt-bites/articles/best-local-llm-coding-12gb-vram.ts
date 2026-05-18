import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best Local LLM for Coding with 12 GB VRAM?',
    seoTitle: 'Best Coding LLM for 12 GB VRAM? | Prompt Bites | PromptQuorum',
    metaDescription: 'With 12 GB VRAM, Qwen 2.5 Coder 14B Q4_K_M is the best coding model (10 GB). DeepSeek Coder 14B is a strong alternative. Both fit on RTX 3060 12 GB. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 2.5 Coder 14B', 'DeepSeek Coder 14B'],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RTX 3080 Ti 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 12 GB VRAM GPUs choosing a coding model',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-models-amd-5700x-3070ti', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for coding with 12 GB VRAM?',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M is the best coding model for 12 GB VRAM GPUs like the RTX 3060. It uses ~10 GB VRAM and scores highest on HumanEval among models that fit this constraint. DeepSeek Coder 14B is a strong alternative.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, top coding benchmark for this size',
          'DeepSeek Coder 14B Q4_K_M: similar VRAM, competitive on code completion',
          'Both fit RTX 3060 12 GB and RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M ist das beste Coding-Modell für 12-GB-VRAM-GPUs wie die RTX 3060. Es benötigt ~10 GB VRAM und erzielt den höchsten HumanEval-Score unter Modellen, die in dieses Limit passen. DeepSeek Coder 14B ist eine starke Alternative.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, bester Coding-Benchmark für diese Größe',
          'DeepSeek Coder 14B Q4_K_M: ähnlicher VRAM, wettbewerbsfähig bei Code-Vervollständigung',
          'Beide passen auf RTX 3060 12 GB und RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M est le meilleur modèle de coding pour les GPU 12 Go de VRAM comme la RTX 3060. Il utilise ~10 Go de VRAM et obtient le meilleur score HumanEval parmi les modèles qui tiennent dans cette contrainte. DeepSeek Coder 14B est une alternative solide.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M : ~10 Go de VRAM, meilleur benchmark de coding pour cette taille',
          'DeepSeek Coder 14B Q4_K_M : VRAM similaire, compétitif sur la complétion de code',
          'Les deux tiennent sur RTX 3060 12 Go et RTX 3080 Ti 12 Go',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '12 GB VRAMでコーディングに最適なローカルLLMは？',
        answer: 'Qwen 2.5 Coder 14B Q4_K_MはRTX 3060などの12 GB VRAM GPUに最適なコーディングモデルです。~10 GB VRAMを使用し、この制約に収まるモデルの中でHumanEvalスコアが最高です。DeepSeek Coder 14Bは強力な代替です。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM、このサイズでコーディングベンチマーク最高',
          'DeepSeek Coder 14B Q4_K_M：同様のVRAM、コード補完で競争力あり',
          '両者ともRTX 3060 12 GBおよびRTX 3080 Ti 12 GBに収まる',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M 是 RTX 3060 等12 GB VRAM 显卡的最佳编程模型。使用约10 GB VRAM，在符合此约束的模型中 HumanEval 得分最高。DeepSeek Coder 14B 是有力替代。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM，该尺寸编程基准最高分',
          'DeepSeek Coder 14B Q4_K_M：VRAM 相近，代码补全竞争力强',
          '两者均适配 RTX 3060 12 GB 和 RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M uses ~10 GB VRAM and fits RTX 3060 12 GB or RTX 3080 Ti 12 GB with 2 GB headroom',
          'At short context (≤4k tokens), both Qwen and DeepSeek Coder 14B run at 14–18 tok/s on these 12 GB cards',
          'Context sessions above 8k push VRAM to ~11.5 GB — stay below 8k context for comfortable 12 GB operation',
          'Qwen 2.5 Coder 14B scores 78.4% on HumanEval; DeepSeek Coder 14B scores 75.1% — both far above any 7B coding model',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B Is the Correct 12 GB VRAM Model',
        content: [
          '<strong>Qwen 2.5 Coder 14B at Q4_K_M quantization uses approximately 10 GB VRAM — leaving 2 GB headroom on a 12 GB card, enough for the OS and Ollama runtime.</strong> It achieves 78.4% on HumanEval, which is the highest score of any 14B or smaller coding model available for local deployment as of May 2026.',
          'DeepSeek Coder 14B at Q4_K_M uses a near-identical VRAM footprint (~10 GB) and scores 75.1% on HumanEval. The gap between the two is narrow, but Qwen 2.5 Coder leads consistently on Python and TypeScript tasks, which represent the majority of typical developer workloads.',
          'Both models run identically on RTX 3060 12 GB and RTX 3080 Ti 12 GB. The RTX 3080 Ti offers slightly higher memory bandwidth (912 GB/s vs 360 GB/s), which translates into approximately 18 tok/s versus 14 tok/s for the same model at the same quantization.',
        ],
        columns: ['Model', 'VRAM', 'HumanEval', 'Speed (RTX 3060)', 'Speed (RTX 3080 Ti)'],
        rows: [
          { 'Model': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78.4%', 'Speed (RTX 3060)': '~14 tok/s', 'Speed (RTX 3080 Ti)': '~18 tok/s' },
          { 'Model': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75.1%', 'Speed (RTX 3060)': '~14 tok/s', 'Speed (RTX 3080 Ti)': '~18 tok/s' },
          { 'Model': 'Qwen 2.5 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72.1%', 'Speed (RTX 3060)': '~28 tok/s', 'Speed (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'Context Length Is the Key VRAM Variable',
        content: [
          'At 4k context, both 14B models use ~10 GB VRAM and run comfortably. <strong>At 8k context, VRAM rises to approximately 11.5 GB — leaving only 500 MB headroom on a 12 GB card.</strong> At 16k context, a 14B Q4_K_M model overflows 12 GB VRAM and will partially offload to CPU, dropping speed to ~3 tok/s.',
          'For practical coding use, 4k context is enough for most single-file completions and code review sessions. Long-context requirements (entire repositories, large refactors) require a 16 GB or 24 GB GPU, or a switch to the 7B variant which uses ~5 GB VRAM and keeps the full 12 GB card free for context.',
          'If you frequently work with large files and want to stay on a 12 GB card, consider Qwen 2.5 Coder 7B Q4_K_M — it runs at ~28 tok/s on RTX 3060, scores 72.1% on HumanEval, and leaves 7 GB VRAM free for context. See the <a href="/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">best 14B coding models comparison</a> for more detail on the 14B vs 7B tradeoff.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Coding LLMs for 12 GB VRAM',
        faqs: [
          {
            q: 'Which is better for 12 GB VRAM: RTX 3060 or RTX 3080 Ti?',
            a: 'Both have 12 GB VRAM and fit the same models. The RTX 3080 Ti has 912 GB/s memory bandwidth versus 360 GB/s for the RTX 3060 — roughly 2.5× faster token generation for the same model. If you have the choice, the 3080 Ti is significantly better for LLM inference despite identical VRAM capacity.',
          },
          {
            q: 'Can I fit a 20B or 22B model on 12 GB VRAM?',
            a: 'At Q3_K_M, some 20B models fit in ~12 GB, but Q3 quantization causes noticeable quality degradation on code tasks. A Qwen 2.5 Coder 14B at Q4_K_M outperforms a Qwen 2.5 Coder 20B at Q3_K_M on most coding benchmarks because quantization quality matters more than parameter count in this range.',
          },
          {
            q: 'How do I install Qwen 2.5 Coder 14B on Ollama for my RTX 3060?',
            a: 'Run <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>. Ollama auto-detects the NVIDIA GPU and uses CUDA. Verify GPU usage with <code>ollama ps</code> — the model should show as running on GPU, not CPU. If it falls back to CPU, check that CUDA drivers are up to date.',
          },
          {
            q: 'Is a dedicated coding model better than a general-purpose model for code completion?',
            a: 'Yes, substantially. Qwen 2.5 Coder 14B scores 78.4% on HumanEval. A general-purpose Mistral 12B of similar size scores about 60%. The 18-point difference reflects the coding-specific pretraining data. For serious coding work, always choose a code-tuned model over a general-purpose one of the same size. Compare options in the <a href="/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder vs DeepSeek Coder guide</a>.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
    seoTitle: 'Bestes Coding-LLM für 12 GB VRAM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Mit 12 GB VRAM ist Qwen 2.5 Coder 14B Q4_K_M das beste Coding-Modell (10 GB). DeepSeek Coder 14B ist eine starke Alternative. Beide passen auf RTX 3060 12 GB. Kurze Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M ist das beste Coding-Modell für 12-GB-VRAM-GPUs wie die RTX 3060. Es benötigt ~10 GB VRAM und erzielt den höchsten HumanEval-Score unter Modellen, die in dieses Limit passen. DeepSeek Coder 14B ist eine starke Alternative.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, bester Coding-Benchmark für diese Größe',
          'DeepSeek Coder 14B Q4_K_M: ähnlicher VRAM, wettbewerbsfähig bei Code-Vervollständigung',
          'Beide passen auf RTX 3060 12 GB und RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M benötigt ~10 GB VRAM und passt mit 2 GB Puffer auf RTX 3060 12 GB oder RTX 3080 Ti 12 GB',
          'Bei kurzen Kontexten (≤4k Tokens) laufen Qwen und DeepSeek Coder 14B auf diesen 12-GB-Karten mit 14–18 tok/s',
          'Kontextsitzungen über 8k erhöhen den VRAM auf ~11,5 GB — unter 8k Kontext bleiben für komfortablen 12-GB-Betrieb',
          'Qwen 2.5 Coder 14B erzielt 78,4 % auf HumanEval; DeepSeek Coder 14B 75,1 % — beide weit über jedem 7B-Coding-Modell',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B ist das richtige 12-GB-VRAM-Modell',
        content: [
          '<strong>Qwen 2.5 Coder 14B in der Q4_K_M-Quantisierung verwendet etwa 10 GB VRAM — mit 2 GB Puffer auf einer 12-GB-Karte, genug für Betriebssystem und Ollama-Laufzeit.</strong> Es erreicht 78,4 % auf HumanEval, den höchsten Score eines 14B- oder kleineren Coding-Modells für lokale Bereitstellung (Stand Mai 2026).',
          'DeepSeek Coder 14B bei Q4_K_M hat einen fast identischen VRAM-Bedarf (~10 GB) und erzielt 75,1 % auf HumanEval. Der Unterschied ist gering, aber Qwen 2.5 Coder liegt bei Python- und TypeScript-Aufgaben konsequent vorne, die den Großteil typischer Entwickler-Workloads ausmachen.',
          'Beide Modelle laufen identisch auf RTX 3060 12 GB und RTX 3080 Ti 12 GB. Die RTX 3080 Ti bietet eine etwas höhere Speicherbandbreite (912 GB/s vs. 360 GB/s), was zu etwa 18 tok/s gegenüber 14 tok/s für dasselbe Modell bei gleicher Quantisierung führt.',
        ],
        columns: ['Modell', 'VRAM', 'HumanEval', 'Geschw. (RTX 3060)', 'Geschw. (RTX 3080 Ti)'],
        rows: [
          { 'Modell': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78,4 %', 'Geschw. (RTX 3060)': '~14 tok/s', 'Geschw. (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modell': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75,1 %', 'Geschw. (RTX 3060)': '~14 tok/s', 'Geschw. (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modell': 'Qwen 2.5 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72,1 %', 'Geschw. (RTX 3060)': '~28 tok/s', 'Geschw. (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'Kontextlänge ist der wichtigste VRAM-Faktor',
        content: [
          'Bei 4k Kontext verwenden beide 14B-Modelle ~10 GB VRAM und laufen komfortabel. <strong>Bei 8k Kontext steigt der VRAM auf etwa 11,5 GB — mit nur 500 MB Puffer auf einer 12-GB-Karte.</strong> Bei 16k Kontext übersteigt ein 14B-Q4_K_M-Modell 12 GB VRAM und lagert teilweise auf die CPU aus, was die Geschwindigkeit auf ~3 tok/s reduziert.',
          'Für die praktische Coding-Nutzung sind 4k Kontext für die meisten Einzeldateien-Vervollständigungen und Code-Review-Sitzungen ausreichend. Anforderungen für langen Kontext (ganze Repositories, umfangreiche Refactorings) benötigen eine 16-GB- oder 24-GB-GPU oder einen Wechsel zur 7B-Variante, die ~5 GB VRAM verbraucht und die volle 12-GB-Karte für Kontext freilässt.',
          'Wenn Sie häufig mit großen Dateien arbeiten und auf einer 12-GB-Karte bleiben möchten, erwägen Sie Qwen 2.5 Coder 7B Q4_K_M — es läuft mit ~28 tok/s auf RTX 3060, erzielt 72,1 % auf HumanEval und lässt 7 GB VRAM für Kontext frei. Weitere Details zum 14B-vs-7B-Kompromiss finden Sie im <a href="/de/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">Vergleich der besten 14B-Coding-Modelle</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Coding-LLMs für 12 GB VRAM',
        faqs: [
          {
            q: 'Was ist besser für 12 GB VRAM: RTX 3060 oder RTX 3080 Ti?',
            a: 'Beide haben 12 GB VRAM und unterstützen dieselben Modelle. Die RTX 3080 Ti hat 912 GB/s Speicherbandbreite gegenüber 360 GB/s für die RTX 3060 — rund 2,5× schnellere Token-Generierung für dasselbe Modell. Wenn Sie die Wahl haben, ist die 3080 Ti trotz identischer VRAM-Kapazität deutlich besser für LLM-Inferenz.',
          },
          {
            q: 'Kann ich ein 20B- oder 22B-Modell auf 12 GB VRAM unterbringen?',
            a: 'Bei Q3_K_M passen einige 20B-Modelle in ~12 GB, aber Q3-Quantisierung verursacht bei Code-Aufgaben merkliche Qualitätsverluste. Qwen 2.5 Coder 14B bei Q4_K_M übertrifft Qwen 2.5 Coder 20B bei Q3_K_M auf den meisten Coding-Benchmarks, weil Quantisierungsqualität in diesem Bereich wichtiger ist als Parameteranzahl.',
          },
          {
            q: 'Wie installiere ich Qwen 2.5 Coder 14B auf Ollama für meine RTX 3060?',
            a: 'Führen Sie <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code> aus. Ollama erkennt die NVIDIA-GPU automatisch und verwendet CUDA. Überprüfen Sie die GPU-Nutzung mit <code>ollama ps</code> — das Modell sollte als auf der GPU laufend angezeigt werden, nicht auf der CPU. Falls es auf CPU zurückfällt, prüfen Sie, ob die CUDA-Treiber aktuell sind.',
          },
          {
            q: 'Ist ein dediziertes Coding-Modell besser als ein Allzweck-Modell für Code-Vervollständigung?',
            a: 'Ja, deutlich. Qwen 2.5 Coder 14B erzielt 78,4 % auf HumanEval. Ein allgemeines Mistral 12B ähnlicher Größe erzielt etwa 60 %. Der Unterschied von 18 Punkten spiegelt die coding-spezifischen Pretraining-Daten wider. Für ernsthaftes Coding immer ein code-optimiertes Modell einem Allzweck-Modell gleicher Größe vorziehen. Vergleiche im <a href="/de/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Leitfaden Qwen Coder vs. DeepSeek Coder</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
    seoTitle: 'Meilleur LLM de coding pour 12 Go VRAM ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Avec 12 Go de VRAM, Qwen 2.5 Coder 14B Q4_K_M est le meilleur modèle de coding (10 Go). DeepSeek Coder 14B est une solide alternative. Les deux tiennent sur RTX 3060 12 Go. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M est le meilleur modèle de coding pour les GPU 12 Go de VRAM comme la RTX 3060. Il utilise ~10 Go de VRAM et obtient le meilleur score HumanEval parmi les modèles qui tiennent dans cette contrainte. DeepSeek Coder 14B est une alternative solide.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M : ~10 Go de VRAM, meilleur benchmark de coding pour cette taille',
          'DeepSeek Coder 14B Q4_K_M : VRAM similaire, compétitif sur la complétion de code',
          'Les deux tiennent sur RTX 3060 12 Go et RTX 3080 Ti 12 Go',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M utilise ~10 Go de VRAM et tient sur RTX 3060 12 Go ou RTX 3080 Ti 12 Go avec 2 Go de marge',
          'En contexte court (≤4k tokens), Qwen et DeepSeek Coder 14B tournent à 14–18 tok/s sur ces cartes 12 Go',
          'Les sessions de contexte au-delà de 8k font monter le VRAM à ~11,5 Go — rester en dessous de 8k pour un fonctionnement 12 Go confortable',
          'Qwen 2.5 Coder 14B obtient 78,4 % sur HumanEval ; DeepSeek Coder 14B 75,1 % — les deux bien au-dessus de tout modèle de coding 7B',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B est le bon modèle pour 12 Go de VRAM',
        content: [
          '<strong>Qwen 2.5 Coder 14B en quantification Q4_K_M utilise environ 10 Go de VRAM — laissant 2 Go de marge sur une carte 12 Go, suffisant pour le système d\'exploitation et le runtime Ollama.</strong> Il atteint 78,4 % sur HumanEval, le meilleur score de tout modèle de coding 14B ou inférieur disponible en local en mai 2026.',
          'DeepSeek Coder 14B en Q4_K_M a une empreinte VRAM quasi-identique (~10 Go) et obtient 75,1 % sur HumanEval. L\'écart est faible, mais Qwen 2.5 Coder est régulièrement en tête sur les tâches Python et TypeScript, qui représentent la majorité des charges de travail développeur classiques.',
          'Les deux modèles fonctionnent de manière identique sur RTX 3060 12 Go et RTX 3080 Ti 12 Go. La RTX 3080 Ti offre une bande passante mémoire légèrement plus élevée (912 GB/s contre 360 GB/s), ce qui se traduit par environ 18 tok/s contre 14 tok/s pour le même modèle à la même quantification.',
        ],
        columns: ['Modèle', 'VRAM', 'HumanEval', 'Vitesse (RTX 3060)', 'Vitesse (RTX 3080 Ti)'],
        rows: [
          { 'Modèle': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM': '~10 Go', 'HumanEval': '78,4 %', 'Vitesse (RTX 3060)': '~14 tok/s', 'Vitesse (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modèle': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 Go', 'HumanEval': '75,1 %', 'Vitesse (RTX 3060)': '~14 tok/s', 'Vitesse (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modèle': 'Qwen 2.5 Coder 7B Q4_K_M', 'VRAM': '~5 Go', 'HumanEval': '72,1 %', 'Vitesse (RTX 3060)': '~28 tok/s', 'Vitesse (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'La longueur du contexte est la variable VRAM clé',
        content: [
          'À 4k de contexte, les deux modèles 14B utilisent ~10 Go de VRAM et fonctionnent confortablement. <strong>À 8k de contexte, le VRAM monte à environ 11,5 Go — ne laissant que 500 Mo de marge sur une carte 12 Go.</strong> À 16k de contexte, un modèle 14B Q4_K_M dépasse les 12 Go de VRAM et commencera à décharger partiellement vers le CPU, ramenant la vitesse à ~3 tok/s.',
          'Pour l\'usage pratique du coding, 4k de contexte est suffisant pour la plupart des complétions de fichier unique et des sessions de revue de code. Les besoins en long contexte (dépôts entiers, refactorisations importantes) nécessitent un GPU de 16 Go ou 24 Go, ou un passage à la variante 7B qui utilise ~5 Go de VRAM et laisse toute la carte 12 Go libre pour le contexte.',
          'Si vous travaillez fréquemment avec des fichiers volumineux et souhaitez rester sur une carte 12 Go, envisagez Qwen 2.5 Coder 7B Q4_K_M — il tourne à ~28 tok/s sur RTX 3060, obtient 72,1 % sur HumanEval et laisse 7 Go de VRAM libres pour le contexte. Consultez la <a href="/fr/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">comparaison des meilleurs modèles de coding 14B</a> pour plus de détails sur le compromis 14B vs 7B.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLMs de coding pour 12 Go de VRAM',
        faqs: [
          {
            q: 'Qu\'est-ce qui est mieux pour 12 Go de VRAM : RTX 3060 ou RTX 3080 Ti ?',
            a: 'Les deux ont 12 Go de VRAM et font tourner les mêmes modèles. La RTX 3080 Ti a 912 GB/s de bande passante mémoire contre 360 GB/s pour la RTX 3060 — soit environ 2,5× plus de génération de tokens pour le même modèle. Si vous avez le choix, la 3080 Ti est significativement meilleure pour l\'inférence LLM malgré une capacité VRAM identique.',
          },
          {
            q: 'Puis-je faire tenir un modèle 20B ou 22B sur 12 Go de VRAM ?',
            a: 'En Q3_K_M, certains modèles 20B tiennent dans ~12 Go, mais la quantification Q3 cause une dégradation perceptible de la qualité sur les tâches de code. Un Qwen 2.5 Coder 14B en Q4_K_M surpasse un Qwen 2.5 Coder 20B en Q3_K_M sur la plupart des benchmarks de coding, car la qualité de quantification compte plus que le nombre de paramètres dans cette plage.',
          },
          {
            q: 'Comment installer Qwen 2.5 Coder 14B sur Ollama pour ma RTX 3060 ?',
            a: 'Lancez <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>. Ollama détecte automatiquement le GPU NVIDIA et utilise CUDA. Vérifiez l\'utilisation du GPU avec <code>ollama ps</code> — le modèle doit apparaître comme tournant sur GPU, pas sur CPU. S\'il retombe sur CPU, vérifiez que les drivers CUDA sont à jour.',
          },
          {
            q: 'Un modèle de coding dédié est-il meilleur qu\'un modèle généraliste pour la complétion de code ?',
            a: 'Oui, substantiellement. Qwen 2.5 Coder 14B obtient 78,4 % sur HumanEval. Un Mistral 12B généraliste de taille similaire obtient environ 60 %. La différence de 18 points reflète les données de préentraînement spécifiques au code. Pour un travail de coding sérieux, choisissez toujours un modèle code-tuned plutôt qu\'un généraliste de même taille. Comparez les options dans le <a href="/fr/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">guide Qwen Coder vs DeepSeek Coder</a>.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAMでコーディングに最適なローカルLLMは？',
    seoTitle: '12 GB VRAM コーディングLLM最適モデル | Prompt Bites | PromptQuorum',
    metaDescription: '12 GB VRAMにはQwen 2.5 Coder 14B Q4_K_M（10 GB使用）が最適なコーディングモデル。DeepSeek Coder 14Bも有力な代替。両者ともRTX 3060 12 GBで動作。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: '12 GB VRAMでコーディングに最適なローカルLLMは？',
        answer: 'Qwen 2.5 Coder 14B Q4_K_MはRTX 3060などの12 GB VRAM GPUに最適なコーディングモデルです。~10 GB VRAMを使用し、この制約に収まるモデルの中でHumanEvalスコアが最高です。DeepSeek Coder 14Bは強力な代替です。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM、このサイズでコーディングベンチマーク最高',
          'DeepSeek Coder 14B Q4_K_M：同様のVRAM、コード補完で競争力あり',
          '両者ともRTX 3060 12 GBおよびRTX 3080 Ti 12 GBに収まる',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_Mは~10 GB VRAMを使用し、RTX 3060 12 GBまたはRTX 3080 Ti 12 GBに2 GBの余裕で収まる',
          '短いコンテキスト（≤4kトークン）では、これらの12 GBカードでQwenとDeepSeek Coder 14Bは14〜18 tok/sで動作',
          '8k超のコンテキストセッションではVRAMが~11.5 GBに上昇 — 快適な12 GB動作のため8k以下を維持',
          'Qwen 2.5 Coder 14BはHumanEvalで78.4%、DeepSeek Coder 14Bは75.1% — 両者とも7Bコーディングモデルを大幅に上回る',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14Bが12 GB VRAMに最適なモデル',
        content: [
          '<strong>Q4_K_M量子化のQwen 2.5 Coder 14Bは約10 GB VRAMを使用 — 12 GBカードに2 GBの余裕を残し、OSとOllamaランタイムに十分です。</strong> HumanEvalで78.4%を達成し、2026年5月時点でローカル展開向けの14B以下のコーディングモデルの中で最高スコアです。',
          'Q4_K_MのDeepSeek Coder 14Bはほぼ同一のVRAMフットプリント（~10 GB）でHumanEvalで75.1%を記録します。差は小さいですが、Qwen 2.5 CoderはPythonとTypeScriptタスクで一貫してリードしており、これらは典型的な開発者ワークロードの大半を占めます。',
          '両モデルともRTX 3060 12 GBとRTX 3080 Ti 12 GBで同等に動作します。RTX 3080 Tiはわずかに高いメモリ帯域幅（912 GB/s対360 GB/s）を提供し、同じ量子化の同じモデルで約18 tok/s対14 tok/sに相当します。',
        ],
        columns: ['モデル', 'VRAM', 'HumanEval', '速度 (RTX 3060)', '速度 (RTX 3080 Ti)'],
        rows: [
          { 'モデル': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78.4%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { 'モデル': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75.1%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { 'モデル': 'Qwen 2.5 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72.1%', '速度 (RTX 3060)': '~28 tok/s', '速度 (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'コンテキスト長がVRAMの主要変数',
        content: [
          '4kコンテキストでは、両14Bモデルとも~10 GB VRAMを使用し快適に動作します。<strong>8kコンテキストではVRAMが約11.5 GBに上昇 — 12 GBカードに500 MBしか余裕が残りません。</strong> 16kコンテキストでは14B Q4_K_MモデルはVRAM 12 GBを超え、CPUへのオフロードが部分的に発生して速度が~3 tok/sに低下します。',
          '実用的なコーディング用途では、ほとんどの単一ファイル補完とコードレビューセッションには4kコンテキストで十分です。長いコンテキスト要件（リポジトリ全体、大規模リファクタリング）には16 GBまたは24 GBのGPU、または~5 GB VRAMを使用してコンテキスト用に12 GBカード全体を空ける7Bバリアントへの切り替えが必要です。',
          '大きなファイルを頻繁に扱い12 GBカードを使い続けたい場合は、Qwen 2.5 Coder 7B Q4_K_Mを検討してください — RTX 3060で~28 tok/sで動作し、HumanEvalで72.1%を記録し、コンテキスト用に7 GB VRAMを空けます。14B対7Bのトレードオフの詳細については<a href="/ja/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">最適14Bコーディングモデル比較</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '12 GB VRAMのコーディングLLMに関するよくある質問',
        faqs: [
          {
            q: '12 GB VRAMにはRTX 3060とRTX 3080 Tiどちらが優れていますか？',
            a: '両者とも12 GB VRAMで同じモデルに対応します。RTX 3080 TiはRTX 3060の360 GB/sに対して912 GB/sのメモリ帯域幅を持ちます — 同じモデルで約2.5倍速いトークン生成。選択肢がある場合、同一のVRAM容量にもかかわらずLLM推論では3080 Tiが大幅に優れています。',
          },
          {
            q: '12 GB VRAMに20Bまたは22Bモデルを入れることはできますか？',
            a: 'Q3_K_Mでは一部の20BモデルがVRAM~12 GBに収まりますが、Q3量子化はコードタスクで顕著な品質低下を引き起こします。Q4_K_MのQwen 2.5 Coder 14BはQ3_K_MのQwen 2.5 Coder 20Bをほとんどのコーディングベンチマークで上回ります。この範囲では量子化品質がパラメータ数より重要です。',
          },
          {
            q: 'RTX 3060にOllamaでQwen 2.5 Coder 14Bをインストールするにはどうすればいいですか？',
            a: '<code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>を実行してください。OllamaはNVIDIA GPUを自動検出しCUDAを使用します。<code>ollama ps</code>でGPU使用状況を確認してください — モデルはCPUではなくGPU上で動作していることが表示されるべきです。CPUにフォールバックする場合はCUDAドライバーが最新であるか確認してください。',
          },
          {
            q: 'コード補完において専用コーディングモデルは汎用モデルより優れていますか？',
            a: 'はい、大幅に優れています。Qwen 2.5 Coder 14BはHumanEvalで78.4%を記録します。同程度のサイズの汎用Mistral 12Bは約60%です。18ポイントの差はコード特化の事前学習データを反映しています。本格的なコーディング作業には同じサイズの汎用モデルではなく常にコード最適化モデルを選んでください。選択肢の比較は<a href="/ja/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder対DeepSeek Coderガイド</a>をご覧ください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
    seoTitle: '12 GB VRAM 最佳编程 LLM？ | Prompt Bites | PromptQuorum',
    metaDescription: '12 GB VRAM 下 Qwen 2.5 Coder 14B Q4_K_M（用10 GB）是最佳编程模型。DeepSeek Coder 14B 是有力替代。两者均适配 RTX 3060 12 GB。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
        answer: 'Qwen 2.5 Coder 14B Q4_K_M 是 RTX 3060 等12 GB VRAM 显卡的最佳编程模型。使用约10 GB VRAM，在符合此约束的模型中 HumanEval 得分最高。DeepSeek Coder 14B 是有力替代。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM，该尺寸编程基准最高分',
          'DeepSeek Coder 14B Q4_K_M：VRAM 相近，代码补全竞争力强',
          '两者均适配 RTX 3060 12 GB 和 RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M 使用约10 GB VRAM，以2 GB 余量适配 RTX 3060 12 GB 或 RTX 3080 Ti 12 GB',
          '短上下文（≤4k token）下，Qwen 和 DeepSeek Coder 14B 在这些12 GB 显卡上运行14–18 tok/s',
          '超过8k 的上下文会让 VRAM 升至约11.5 GB——保持8k 以下以确保12 GB 显卡舒适运行',
          'Qwen 2.5 Coder 14B HumanEval 得78.4%；DeepSeek Coder 14B 得75.1%——均远超任何7B 编程模型',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B 是12 GB VRAM 的正确选择',
        content: [
          '<strong>Q4_K_M 量化的 Qwen 2.5 Coder 14B 使用约10 GB VRAM——在12 GB 显卡上留有2 GB 余量，足够操作系统和 Ollama 运行时使用。</strong>HumanEval 得78.4%，是截至2026年5月所有可本地部署的14B 及以下编程模型中的最高分。',
          'Q4_K_M 下的 DeepSeek Coder 14B VRAM 占用几乎相同（约10 GB），HumanEval 得75.1%。差距不大，但 Qwen 2.5 Coder 在 Python 和 TypeScript 任务上持续领先，而这些占据了典型开发者工作负载的大部分。',
          '两款模型在 RTX 3060 12 GB 和 RTX 3080 Ti 12 GB 上表现一致。RTX 3080 Ti 内存带宽略高（912 GB/s 对 360 GB/s），相同模型相同量化下约18 tok/s 对14 tok/s。',
        ],
        columns: ['模型', 'VRAM', 'HumanEval', '速度 (RTX 3060)', '速度 (RTX 3080 Ti)'],
        rows: [
          { '模型': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78.4%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { '模型': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75.1%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { '模型': 'Qwen 2.5 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72.1%', '速度 (RTX 3060)': '~28 tok/s', '速度 (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: '上下文长度是关键 VRAM 变量',
        content: [
          '4k 上下文时，两款14B 模型均使用约10 GB VRAM，运行舒适。<strong>8k 上下文时 VRAM 升至约11.5 GB——12 GB 显卡上只剩500 MB 余量。</strong>16k 上下文时，14B Q4_K_M 模型超出12 GB VRAM 并将部分卸载至 CPU，速度降至约3 tok/s。',
          '实际编程使用中，4k 上下文足以应对大多数单文件补全和代码审查会话。长上下文需求（整个代码库、大规模重构）需要16 GB 或24 GB 显卡，或切换至只需约5 GB VRAM 的7B 变体，将完整的12 GB 显卡留给上下文使用。',
          '如果经常处理大型文件且希望保留12 GB 显卡，可考虑 Qwen 2.5 Coder 7B Q4_K_M——RTX 3060 上约28 tok/s，HumanEval 得72.1%，且释放7 GB VRAM 用于上下文。14B 对比7B 权衡的更多细节请参阅<a href="/zh/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">最佳14B 编程模型对比</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于12 GB VRAM 编程 LLM 的快速解答',
        faqs: [
          {
            q: '12 GB VRAM 下 RTX 3060 和 RTX 3080 Ti 哪个更好？',
            a: '两者都有12 GB VRAM 且可运行相同模型。RTX 3080 Ti 内存带宽912 GB/s，RTX 3060 为360 GB/s——相同模型 token 生成速度快约2.5倍。如果有选择，尽管 VRAM 容量相同，3080 Ti 在 LLM 推理上明显更好。',
          },
          {
            q: '12 GB VRAM 能放下20B 或22B 模型吗？',
            a: 'Q3_K_M 下部分20B 模型能塞进约12 GB，但 Q3 量化在代码任务上造成明显质量下降。Q4_K_M 的 Qwen 2.5 Coder 14B 在大多数编程基准测试上优于 Q3_K_M 的 Qwen 2.5 Coder 20B，因为在这个范围内量化质量比参数量更重要。',
          },
          {
            q: '如何在 RTX 3060 的 Ollama 上安装 Qwen 2.5 Coder 14B？',
            a: '运行 <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>。Ollama 会自动检测 NVIDIA GPU 并使用 CUDA。用 <code>ollama ps</code> 验证 GPU 使用情况——模型应显示在 GPU 上运行而非 CPU。如果回退到 CPU，请检查 CUDA 驱动是否为最新版本。',
          },
          {
            q: '代码补全上，专用编程模型比通用模型更好吗？',
            a: '是的，明显更好。Qwen 2.5 Coder 14B HumanEval 得78.4%。同等大小的通用 Mistral 12B 约60%。18分的差距反映了代码专项预训练数据的价值。对于严肃的编程工作，始终选择相同尺寸的代码微调模型而非通用模型。选项对比请参阅<a href="/zh/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder 对比 DeepSeek Coder 指南</a>。',
          },
        ],
      },
    },
  },
}
