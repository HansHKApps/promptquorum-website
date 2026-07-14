import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best Local LLM for Coding with 12 GB VRAM?',
    dateModified: '2026-06-21',
    seoTitle: 'Best Coding LLM for 12 GB 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M: top coding model for 12 GB VRAM at ~10 GB, highest HumanEval. DeepSeek 14B Q4 alternative. Both fit RTX 3060/3080 Ti 12 GB.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 3 Coder 14B', 'DeepSeek Coder 14B'],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RTX 3080 Ti 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 12 GB VRAM GPUs choosing a coding model',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-models-amd-5700x-3070ti', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for coding with 12 GB VRAM?',
        answer: 'Qwen 3 Coder 14B Q4_K_M is the best coding model for 12 GB VRAM GPUs, achieving the highest HumanEval scores among 14B models while using ~10 GB VRAM on RTX 3060 and RTX 3080 Ti. It uses ~10 GB VRAM and scores highest on HumanEval among models that fit this constraint. DeepSeek Coder 14B is a strong alternative.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M: ~10 GB VRAM, top coding benchmark for this size',
          'DeepSeek Coder 14B Q4_K_M: similar VRAM, competitive on code completion',
          'Both fit RTX 3060 12 GB and RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
        answer: 'Qwen 3 Coder 14B Q4_K_M ist das beste Coding-Modell für 12-GB-VRAM-GPUs, erreicht die höchsten HumanEval-Scores unter 14B-Modellen und benötigt ~10 GB VRAM auf RTX 3060 und RTX 3080 Ti. Es benötigt ~10 GB VRAM und erzielt den höchsten HumanEval-Score unter Modellen, die in dieses Limit passen. DeepSeek Coder 14B ist eine starke Alternative.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M: ~10 GB VRAM, bester Coding-Benchmark für diese Größe',
          'DeepSeek Coder 14B Q4_K_M: ähnlicher VRAM, wettbewerbsfähig bei Code-Vervollständigung',
          'Beide passen auf RTX 3060 12 GB und RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
        answer: 'Qwen 3 Coder 14B Q4_K_M est le meilleur modèle de coding pour les GPU 12 Go, obtient les meilleurs scores HumanEval parmi les modèles 14B tout en utilisant ~10 Go de VRAM sur RTX 3060 et RTX 3080 Ti. Il utilise ~10 Go de VRAM et obtient le meilleur score HumanEval parmi les modèles qui tiennent dans cette contrainte. DeepSeek Coder 14B est une alternative solide.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M : ~10 Go de VRAM, meilleur benchmark de coding pour cette taille',
          'DeepSeek Coder 14B Q4_K_M : VRAM similaire, compétitif sur la complétion de code',
          'Les deux tiennent sur RTX 3060 12 Go et RTX 3080 Ti 12 Go',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '12 GB VRAMでコーディングに最適なローカルLLMは？',
        answer: 'Qwen 3 Coder 14B Q4_K_MはRTX 3060とRTX 3080 Ti上で12 GB VRAMの最良コーディングモデルで、14Bモデル中で最高のHumanEvalスコアを達成しながら~10 GB VRAMを使用します。~10 GB VRAMを使用し、この制約に収まるモデルの中でHumanEvalスコアが最高です。DeepSeek Coder 14Bは強力な代替です。',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M：~10 GB VRAM、このサイズでコーディングベンチマーク最高',
          'DeepSeek Coder 14B Q4_K_M：同様のVRAM、コード補完で競争力あり',
          '両者ともRTX 3060 12 GBおよびRTX 3080 Ti 12 GBに収まる',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
        answer: 'Qwen 3 Coder 14B Q4_K_M 是12 GB VRAM显卡的最佳编程模型，在14B模型中 HumanEval 得分最高，RTX 3060和RTX 3080 Ti上仅占约10 GB VRAM。使用约10 GB VRAM，在符合此约束的模型中 HumanEval 得分最高。DeepSeek Coder 14B 是有力替代。',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M：~10 GB VRAM，该尺寸编程基准最高分',
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
          'Qwen 3 Coder 14B Q4_K_M: ~9–10 GB VRAM, high-70s on HumanEval — the top coding pick for any 12 GB GPU',
          '12 GB is the VRAM threshold that unlocks the 14B coding tier; 8 GB cards cap at 7B models, which score noticeably lower on coding benchmarks',
          'Set --num-ctx 8192 minimum for coding work — the default 2048-token context truncates most real source files',
          'NVIDIA 12 GB cards deliver ~22 tok/s on these models; AMD 12 GB cards with ROCm at ~16 tok/s',
        ],
      },
      body1: {
        title: 'The Coding Pick for 12 GB',
        content: [
          'As of May 2026, <strong>a 14B coding model at Q4_K_M uses 9–10 GB VRAM — making 12 GB the minimum tier that reliably fits the highest-scoring coding models.</strong> 8 GB cards cap at 7B models, which score noticeably lower on HumanEval than their 14B counterparts.',
          'Qwen 3 Coder 14B Q4_K_M is the top pick — it leads consistently on Python and TypeScript tasks. DeepSeek Coder 14B is a close alternative for polyglot work across 80+ languages. Both use ~9–10 GB VRAM and run at ~14 tok/s on an RTX 3060 12 GB. The RTX 3080 Ti 12 GB pushes these to ~18 tok/s thanks to its higher memory bandwidth (912 GB/s vs 360 GB/s).',
          'If you are working with an 8 GB rig and need a 14B model without upgrading, see the <a href="/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">best LLMs for AMD 5700X + RTX 3070 Ti</a> for the 8 GB compromise options.',
        ],
        columns: ['Model', 'VRAM at Q4', 'Best For'],
        rows: [
          { 'Model': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM at Q4': '~9–10 GB', 'Best For': 'Python, TypeScript, Go (top pick)' },
          { 'Model': 'DeepSeek Coder 14B Q4_K_M', 'VRAM at Q4': '~9–10 GB', 'Best For': '80+ languages, polyglot work' },
          { 'Model': 'StarCoder2 15B Q4', 'VRAM at Q4': '~9.5 GB', 'Best For': 'Open-source contribution, code search' },
          { 'Model': 'Llama 3 8B Q5_K_M', 'VRAM at Q4': '~6 GB', 'Best For': 'Lighter fallback if 14B feels slow' },
        ],
      },
      body2: {
        title: 'Settings That Matter for Coding',
        content: [
          '<strong>Set context to 8k minimum for coding work — the default 2048-token context truncates most source files above ~200 lines.</strong> A 14B model at Q4_K_M uses approximately 11.5 GB VRAM at 8k context, which still fits within 12 GB. Use <code>--num-ctx 8192</code> or set <code>OLLAMA_NUM_CTX=8192</code> in your environment.',
          'Enable Flash Attention (<code>OLLAMA_FLASH_ATTENTION=1</code>) to reduce the KV cache VRAM footprint by roughly 30%, giving headroom for even longer context at the same 12 GB budget. Both environment variables can be combined in a single launch.',
          'For a full breakdown of which 12 GB GPUs deliver the best coding inference and which models to pair with each, see the <a href="/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">best local LLMs for coding guide</a>.',
        ],
        codeBlock: 'ollama pull qwen2.5-coder:14b-instruct-q4_K_M\nollama run qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: 'AMD Radeon 12 GB cards (RX 6800 XT, RX 6700 XT) with ROCm run these models at ~16 tok/s — roughly 30% slower than CUDA on an equivalent NVIDIA 12 GB card. For mobile AMD GPUs (e.g., Radeon 6800M), see the dedicated mobile guide for thermal and battery considerations.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Coding LLMs for 12 GB VRAM',
        faqs: [
          {
            q: 'Does Qwen 3 Coder fit on RTX 4060 Ti 8 GB?',
            a: 'No — Qwen 3 Coder 14B at Q4_K_M uses ~9–10 GB, which exceeds 8 GB VRAM. Dropping to Q3_K_M (~7 GB) allows it to fit, but output quality degrades noticeably on code completion tasks.',
          },
          {
            q: 'Should I use Q4_K_M or Q5_K_M for coding on 12 GB?',
            a: 'Q4_K_M for 14B models — required to stay within 12 GB. Q5_K_M for 7B–8B models where you have extra VRAM headroom; it preserves more model fidelity with no VRAM risk on 12 GB cards.',
          },
          {
            q: 'Which is better for code review: 14B coding model or 8B general-purpose?',
            a: 'The 14B coding-specific model — by a decisive margin. Coding-tuned 14B models score substantially higher on HumanEval than general-purpose models of similar size, reflecting coding-specific pretraining data rather than just parameter count.',
          },
          {
            q: 'Can I use fill-in-the-middle (FIM) with these models on Ollama?',
            a: 'Yes. Qwen 3 Coder and DeepSeek Coder both support FIM natively. Ollama exposes it via the <code>/api/generate</code> endpoint using the <code>suffix</code> field. Both run FIM within the normal VRAM budget on 12 GB cards.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best MoE Models for Local Coding](/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
    seoTitle: 'Bestes Coding-LLM für 12 GB VRAM 2026',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M: bestes Coding-Modell für 12 GB bei ~10 GB, höchster HumanEval-Score. DeepSeek 14B Q4 Alternative. Beide auf RTX 3060/3080 Ti.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
        answer: 'Qwen 3 Coder 14B Q4_K_M ist das beste Coding-Modell für 12-GB-VRAM-GPUs wie die RTX 3060. Es benötigt ~10 GB VRAM und erzielt den höchsten HumanEval-Score unter Modellen, die in dieses Limit passen. DeepSeek Coder 14B ist eine starke Alternative.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M: ~10 GB VRAM, bester Coding-Benchmark für diese Größe',
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
          'Qwen 3 Coder 14B Q4_K_M benötigt ~10 GB VRAM und passt mit 2 GB Puffer auf RTX 3060 12 GB oder RTX 3080 Ti 12 GB',
          'Bei kurzen Kontexten (≤4k Tokens) laufen Qwen und DeepSeek Coder 14B auf diesen 12-GB-Karten mit 14–18 tok/s',
          'Kontextsitzungen über 8k erhöhen den VRAM auf ~11,5 GB — unter 8k Kontext bleiben für komfortablen 12-GB-Betrieb',
          'Qwen 3 Coder 14B erzielt 78,4 % auf HumanEval; DeepSeek Coder 14B 75,1 % — beide weit über jedem 7B-Coding-Modell',
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14B ist das richtige 12-GB-VRAM-Modell',
        content: [
          '<strong>Qwen 3 Coder 14B in der Q4_K_M-Quantisierung verwendet etwa 10 GB VRAM — mit 2 GB Puffer auf einer 12-GB-Karte, genug für Betriebssystem und Ollama-Laufzeit.</strong> Es erreicht 78,4 % auf HumanEval, den höchsten Score eines 14B- oder kleineren Coding-Modells für lokale Bereitstellung (Stand Mai 2026).',
          'DeepSeek Coder 14B bei Q4_K_M hat einen fast identischen VRAM-Bedarf (~10 GB) und erzielt 75,1 % auf HumanEval. Der Unterschied ist gering, aber Qwen 3 Coder liegt bei Python- und TypeScript-Aufgaben konsequent vorne, die den Großteil typischer Entwickler-Workloads ausmachen.',
          'Beide Modelle laufen identisch auf RTX 3060 12 GB und RTX 3080 Ti 12 GB. Die RTX 3080 Ti bietet eine etwas höhere Speicherbandbreite (912 GB/s vs. 360 GB/s), was zu etwa 18 tok/s gegenüber 14 tok/s für dasselbe Modell bei gleicher Quantisierung führt.',
        ],
        columns: ['Modell', 'VRAM', 'HumanEval', 'Geschw. (RTX 3060)', 'Geschw. (RTX 3080 Ti)'],
        rows: [
          { 'Modell': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78,4 %', 'Geschw. (RTX 3060)': '~14 tok/s', 'Geschw. (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modell': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75,1 %', 'Geschw. (RTX 3060)': '~14 tok/s', 'Geschw. (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modell': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72,1 %', 'Geschw. (RTX 3060)': '~28 tok/s', 'Geschw. (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'Kontextlänge ist der wichtigste VRAM-Faktor',
        content: [
          'Bei 4k Kontext verwenden beide 14B-Modelle ~10 GB VRAM und laufen komfortabel. <strong>Bei 8k Kontext steigt der VRAM auf etwa 11,5 GB — mit nur 500 MB Puffer auf einer 12-GB-Karte.</strong> Bei 16k Kontext übersteigt ein 14B-Q4_K_M-Modell 12 GB VRAM und lagert teilweise auf die CPU aus, was die Geschwindigkeit auf ~3 tok/s reduziert.',
          'Für die praktische Coding-Nutzung sind 4k Kontext für die meisten Einzeldateien-Vervollständigungen und Code-Review-Sitzungen ausreichend. Anforderungen für langen Kontext (ganze Repositories, umfangreiche Refactorings) benötigen eine 16-GB- oder 24-GB-GPU oder einen Wechsel zur 7B-Variante, die ~5 GB VRAM verbraucht und die volle 12-GB-Karte für Kontext freilässt.',
          'Wenn Sie häufig mit großen Dateien arbeiten und auf einer 12-GB-Karte bleiben möchten, erwägen Sie Qwen 3 Coder 7B Q4_K_M — es läuft mit ~28 tok/s auf RTX 3060, erzielt 72,1 % auf HumanEval und lässt 7 GB VRAM für Kontext frei. Weitere Details zum 14B-vs-7B-Kompromiss finden Sie im <a href="/de/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">Vergleich der besten 14B-Coding-Modelle</a>.',
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
            a: 'Bei Q3_K_M passen einige 20B-Modelle in ~12 GB, aber Q3-Quantisierung verursacht bei Code-Aufgaben merkliche Qualitätsverluste. Qwen 3 Coder 14B bei Q4_K_M übertrifft Qwen 3 Coder 20B bei Q3_K_M auf den meisten Coding-Benchmarks, weil Quantisierungsqualität in diesem Bereich wichtiger ist als Parameteranzahl.',
          },
          {
            q: 'Wie installiere ich Qwen 3 Coder 14B auf Ollama für meine RTX 3060?',
            a: 'Führen Sie <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code> aus. Ollama erkennt die NVIDIA-GPU automatisch und verwendet CUDA. Überprüfen Sie die GPU-Nutzung mit <code>ollama ps</code> — das Modell sollte als auf der GPU laufend angezeigt werden, nicht auf der CPU. Falls es auf CPU zurückfällt, prüfen Sie, ob die CUDA-Treiber aktuell sind.',
          },
          {
            q: 'Ist ein dediziertes Coding-Modell besser als ein Allzweck-Modell für Code-Vervollständigung?',
            a: 'Ja, deutlich. Qwen 3 Coder 14B erzielt 78,4 % auf HumanEval. Ein allgemeines Mistral 12B ähnlicher Größe erzielt etwa 60 %. Der Unterschied von 18 Punkten spiegelt die coding-spezifischen Pretraining-Daten wider. Für ernsthaftes Coding immer ein code-optimiertes Modell einem Allzweck-Modell gleicher Größe vorziehen. Vergleiche im <a href="/de/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Leitfaden Qwen Coder vs. DeepSeek Coder</a>.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Best MoE Models for Local Coding](/de/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/de/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
    seoTitle: 'Meilleur Coding LLM pour 12 Go 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M: meilleur LLM coding pour 12 Go (~10 Go), meilleur HumanEval. DeepSeek 14B Q4 alternative. RTX 3060/3080 Ti 12 Go.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
        answer: 'Qwen 3 Coder 14B Q4_K_M est le meilleur modèle de coding pour les GPU 12 Go de VRAM comme la RTX 3060. Il utilise ~10 Go de VRAM et obtient le meilleur score HumanEval parmi les modèles qui tiennent dans cette contrainte. DeepSeek Coder 14B est une alternative solide.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M : ~10 Go de VRAM, meilleur benchmark de coding pour cette taille',
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
          'Qwen 3 Coder 14B Q4_K_M utilise ~10 Go de VRAM et tient sur RTX 3060 12 Go ou RTX 3080 Ti 12 Go avec 2 Go de marge',
          'En contexte court (≤4k tokens), Qwen et DeepSeek Coder 14B tournent à 14–18 tok/s sur ces cartes 12 Go',
          'Les sessions de contexte au-delà de 8k font monter le VRAM à ~11,5 Go — rester en dessous de 8k pour un fonctionnement 12 Go confortable',
          'Qwen 3 Coder 14B obtient 78,4 % sur HumanEval ; DeepSeek Coder 14B 75,1 % — les deux bien au-dessus de tout modèle de coding 7B',
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14B est le bon modèle pour 12 Go de VRAM',
        content: [
          '<strong>Qwen 3 Coder 14B en quantification Q4_K_M utilise environ 10 Go de VRAM — laissant 2 Go de marge sur une carte 12 Go, suffisant pour le système d\'exploitation et le runtime Ollama.</strong> Il atteint 78,4 % sur HumanEval, le meilleur score de tout modèle de coding 14B ou inférieur disponible en local en mai 2026.',
          'DeepSeek Coder 14B en Q4_K_M a une empreinte VRAM quasi-identique (~10 Go) et obtient 75,1 % sur HumanEval. L\'écart est faible, mais Qwen 3 Coder est régulièrement en tête sur les tâches Python et TypeScript, qui représentent la majorité des charges de travail développeur classiques.',
          'Les deux modèles fonctionnent de manière identique sur RTX 3060 12 Go et RTX 3080 Ti 12 Go. La RTX 3080 Ti offre une bande passante mémoire légèrement plus élevée (912 GB/s contre 360 GB/s), ce qui se traduit par environ 18 tok/s contre 14 tok/s pour le même modèle à la même quantification.',
        ],
        columns: ['Modèle', 'VRAM', 'HumanEval', 'Vitesse (RTX 3060)', 'Vitesse (RTX 3080 Ti)'],
        rows: [
          { 'Modèle': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 Go', 'HumanEval': '78,4 %', 'Vitesse (RTX 3060)': '~14 tok/s', 'Vitesse (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modèle': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 Go', 'HumanEval': '75,1 %', 'Vitesse (RTX 3060)': '~14 tok/s', 'Vitesse (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modèle': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 Go', 'HumanEval': '72,1 %', 'Vitesse (RTX 3060)': '~28 tok/s', 'Vitesse (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'La longueur du contexte est la variable VRAM clé',
        content: [
          'À 4k de contexte, les deux modèles 14B utilisent ~10 Go de VRAM et fonctionnent confortablement. <strong>À 8k de contexte, le VRAM monte à environ 11,5 Go — ne laissant que 500 Mo de marge sur une carte 12 Go.</strong> À 16k de contexte, un modèle 14B Q4_K_M dépasse les 12 Go de VRAM et commencera à décharger partiellement vers le CPU, ramenant la vitesse à ~3 tok/s.',
          'Pour l\'usage pratique du coding, 4k de contexte est suffisant pour la plupart des complétions de fichier unique et des sessions de revue de code. Les besoins en long contexte (dépôts entiers, refactorisations importantes) nécessitent un GPU de 16 Go ou 24 Go, ou un passage à la variante 7B qui utilise ~5 Go de VRAM et laisse toute la carte 12 Go libre pour le contexte.',
          'Si vous travaillez fréquemment avec des fichiers volumineux et souhaitez rester sur une carte 12 Go, envisagez Qwen 3 Coder 7B Q4_K_M — il tourne à ~28 tok/s sur RTX 3060, obtient 72,1 % sur HumanEval et laisse 7 Go de VRAM libres pour le contexte. Consultez la <a href="/fr/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">comparaison des meilleurs modèles de coding 14B</a> pour plus de détails sur le compromis 14B vs 7B.',
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
            a: 'En Q3_K_M, certains modèles 20B tiennent dans ~12 Go, mais la quantification Q3 cause une dégradation perceptible de la qualité sur les tâches de code. Un Qwen 3 Coder 14B en Q4_K_M surpasse un Qwen 3 Coder 20B en Q3_K_M sur la plupart des benchmarks de coding, car la qualité de quantification compte plus que le nombre de paramètres dans cette plage.',
          },
          {
            q: 'Comment installer Qwen 3 Coder 14B sur Ollama pour ma RTX 3060 ?',
            a: 'Lancez <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>. Ollama détecte automatiquement le GPU NVIDIA et utilise CUDA. Vérifiez l\'utilisation du GPU avec <code>ollama ps</code> — le modèle doit apparaître comme tournant sur GPU, pas sur CPU. S\'il retombe sur CPU, vérifiez que les drivers CUDA sont à jour.',
          },
          {
            q: 'Un modèle de coding dédié est-il meilleur qu\'un modèle généraliste pour la complétion de code ?',
            a: 'Oui, substantiellement. Qwen 3 Coder 14B obtient 78,4 % sur HumanEval. Un Mistral 12B généraliste de taille similaire obtient environ 60 %. La différence de 18 points reflète les données de préentraînement spécifiques au code. Pour un travail de coding sérieux, choisissez toujours un modèle code-tuned plutôt qu\'un généraliste de même taille. Comparez les options dans le <a href="/fr/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">guide Qwen Coder vs DeepSeek Coder</a>.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Best MoE Models for Local Coding](/fr/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/fr/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAMでコーディングに最適なローカルLLMは？',
    seoTitle: '12 GB向けベストコーディング LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M：12 GB VRAM最高のコーディングLLM、約10 GB使用、HumanEval最高スコア。DeepSeek 14B Q4代替。RTX 3060/3080 Ti対応。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: '12 GB VRAMでコーディングに最適なローカルLLMは？',
        answer: 'Qwen 3 Coder 14B Q4_K_MはRTX 3060などの12 GB VRAM GPUに最適なコーディングモデルです。~10 GB VRAMを使用し、この制約に収まるモデルの中でHumanEvalスコアが最高です。DeepSeek Coder 14Bは強力な代替です。',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M：~10 GB VRAM、このサイズでコーディングベンチマーク最高',
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
          'Qwen 3 Coder 14B Q4_K_Mは~10 GB VRAMを使用し、RTX 3060 12 GBまたはRTX 3080 Ti 12 GBに2 GBの余裕で収まる',
          '短いコンテキスト（≤4kトークン）では、これらの12 GBカードでQwenとDeepSeek Coder 14Bは14〜18 tok/sで動作',
          '8k超のコンテキストセッションではVRAMが~11.5 GBに上昇 — 快適な12 GB動作のため8k以下を維持',
          'Qwen 3 Coder 14BはHumanEvalで78.4%、DeepSeek Coder 14Bは75.1% — 両者とも7Bコーディングモデルを大幅に上回る',
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14Bが12 GB VRAMに最適なモデル',
        content: [
          '<strong>Q4_K_M量子化のQwen 3 Coder 14Bは約10 GB VRAMを使用 — 12 GBカードに2 GBの余裕を残し、OSとOllamaランタイムに十分です。</strong> HumanEvalで78.4%を達成し、2026年5月時点でローカル展開向けの14B以下のコーディングモデルの中で最高スコアです。',
          'Q4_K_MのDeepSeek Coder 14Bはほぼ同一のVRAMフットプリント（~10 GB）でHumanEvalで75.1%を記録します。差は小さいですが、Qwen 3 CoderはPythonとTypeScriptタスクで一貫してリードしており、これらは典型的な開発者ワークロードの大半を占めます。',
          '両モデルともRTX 3060 12 GBとRTX 3080 Ti 12 GBで同等に動作します。RTX 3080 Tiはわずかに高いメモリ帯域幅（912 GB/s対360 GB/s）を提供し、同じ量子化の同じモデルで約18 tok/s対14 tok/sに相当します。',
        ],
        columns: ['モデル', 'VRAM', 'HumanEval', '速度 (RTX 3060)', '速度 (RTX 3080 Ti)'],
        rows: [
          { 'モデル': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78.4%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { 'モデル': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75.1%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { 'モデル': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72.1%', '速度 (RTX 3060)': '~28 tok/s', '速度 (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'コンテキスト長がVRAMの主要変数',
        content: [
          '4kコンテキストでは、両14Bモデルとも~10 GB VRAMを使用し快適に動作します。<strong>8kコンテキストではVRAMが約11.5 GBに上昇 — 12 GBカードに500 MBしか余裕が残りません。</strong> 16kコンテキストでは14B Q4_K_MモデルはVRAM 12 GBを超え、CPUへのオフロードが部分的に発生して速度が~3 tok/sに低下します。',
          '実用的なコーディング用途では、ほとんどの単一ファイル補完とコードレビューセッションには4kコンテキストで十分です。長いコンテキスト要件（リポジトリ全体、大規模リファクタリング）には16 GBまたは24 GBのGPU、または~5 GB VRAMを使用してコンテキスト用に12 GBカード全体を空ける7Bバリアントへの切り替えが必要です。',
          '大きなファイルを頻繁に扱い12 GBカードを使い続けたい場合は、Qwen 3 Coder 7B Q4_K_Mを検討してください — RTX 3060で~28 tok/sで動作し、HumanEvalで72.1%を記録し、コンテキスト用に7 GB VRAMを空けます。14B対7Bのトレードオフの詳細については<a href="/ja/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">最適14Bコーディングモデル比較</a>をご覧ください。',
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
            a: 'Q3_K_Mでは一部の20BモデルがVRAM~12 GBに収まりますが、Q3量子化はコードタスクで顕著な品質低下を引き起こします。Q4_K_MのQwen 3 Coder 14BはQ3_K_MのQwen 3 Coder 20Bをほとんどのコーディングベンチマークで上回ります。この範囲では量子化品質がパラメータ数より重要です。',
          },
          {
            q: 'RTX 3060にOllamaでQwen 3 Coder 14Bをインストールするにはどうすればいいですか？',
            a: '<code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>を実行してください。OllamaはNVIDIA GPUを自動検出しCUDAを使用します。<code>ollama ps</code>でGPU使用状況を確認してください — モデルはCPUではなくGPU上で動作していることが表示されるべきです。CPUにフォールバックする場合はCUDAドライバーが最新であるか確認してください。',
          },
          {
            q: 'コード補完において専用コーディングモデルは汎用モデルより優れていますか？',
            a: 'はい、大幅に優れています。Qwen 3 Coder 14BはHumanEvalで78.4%を記録します。同程度のサイズの汎用Mistral 12Bは約60%です。18ポイントの差はコード特化の事前学習データを反映しています。本格的なコーディング作業には同じサイズの汎用モデルではなく常にコード最適化モデルを選んでください。選択肢の比較は<a href="/ja/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder対DeepSeek Coderガイド</a>をご覧ください。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[Best MoE Models for Local Coding](/ja/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/ja/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
    seoTitle: '12 GB最佳编程LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M：12 GB VRAM最优编程LLM，约10 GB占用，HumanEval最高分。DeepSeek 14B Q4备选。RTX 3060/3080 Ti 12 GB适配。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
        answer: 'Qwen 3 Coder 14B Q4_K_M 是 RTX 3060 等12 GB VRAM 显卡的最佳编程模型。使用约10 GB VRAM，在符合此约束的模型中 HumanEval 得分最高。DeepSeek Coder 14B 是有力替代。',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M：~10 GB VRAM，该尺寸编程基准最高分',
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
          'Qwen 3 Coder 14B Q4_K_M 使用约10 GB VRAM，以2 GB 余量适配 RTX 3060 12 GB 或 RTX 3080 Ti 12 GB',
          '短上下文（≤4k token）下，Qwen 和 DeepSeek Coder 14B 在这些12 GB 显卡上运行14–18 tok/s',
          '超过8k 的上下文会让 VRAM 升至约11.5 GB——保持8k 以下以确保12 GB 显卡舒适运行',
          'Qwen 3 Coder 14B HumanEval 得78.4%；DeepSeek Coder 14B 得75.1%——均远超任何7B 编程模型',
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14B 是12 GB VRAM 的正确选择',
        content: [
          '<strong>Q4_K_M 量化的 Qwen 3 Coder 14B 使用约10 GB VRAM——在12 GB 显卡上留有2 GB 余量，足够操作系统和 Ollama 运行时使用。</strong>HumanEval 得78.4%，是截至2026年5月所有可本地部署的14B 及以下编程模型中的最高分。',
          'Q4_K_M 下的 DeepSeek Coder 14B VRAM 占用几乎相同（约10 GB），HumanEval 得75.1%。差距不大，但 Qwen 3 Coder 在 Python 和 TypeScript 任务上持续领先，而这些占据了典型开发者工作负载的大部分。',
          '两款模型在 RTX 3060 12 GB 和 RTX 3080 Ti 12 GB 上表现一致。RTX 3080 Ti 内存带宽略高（912 GB/s 对 360 GB/s），相同模型相同量化下约18 tok/s 对14 tok/s。',
        ],
        columns: ['模型', 'VRAM', 'HumanEval', '速度 (RTX 3060)', '速度 (RTX 3080 Ti)'],
        rows: [
          { '模型': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78.4%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { '模型': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75.1%', '速度 (RTX 3060)': '~14 tok/s', '速度 (RTX 3080 Ti)': '~18 tok/s' },
          { '模型': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72.1%', '速度 (RTX 3060)': '~28 tok/s', '速度 (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: '上下文长度是关键 VRAM 变量',
        content: [
          '4k 上下文时，两款14B 模型均使用约10 GB VRAM，运行舒适。<strong>8k 上下文时 VRAM 升至约11.5 GB——12 GB 显卡上只剩500 MB 余量。</strong>16k 上下文时，14B Q4_K_M 模型超出12 GB VRAM 并将部分卸载至 CPU，速度降至约3 tok/s。',
          '实际编程使用中，4k 上下文足以应对大多数单文件补全和代码审查会话。长上下文需求（整个代码库、大规模重构）需要16 GB 或24 GB 显卡，或切换至只需约5 GB VRAM 的7B 变体，将完整的12 GB 显卡留给上下文使用。',
          '如果经常处理大型文件且希望保留12 GB 显卡，可考虑 Qwen 3 Coder 7B Q4_K_M——RTX 3060 上约28 tok/s，HumanEval 得72.1%，且释放7 GB VRAM 用于上下文。14B 对比7B 权衡的更多细节请参阅<a href="/zh/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">最佳14B 编程模型对比</a>。',
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
            a: 'Q3_K_M 下部分20B 模型能塞进约12 GB，但 Q3 量化在代码任务上造成明显质量下降。Q4_K_M 的 Qwen 3 Coder 14B 在大多数编程基准测试上优于 Q3_K_M 的 Qwen 3 Coder 20B，因为在这个范围内量化质量比参数量更重要。',
          },
          {
            q: '如何在 RTX 3060 的 Ollama 上安装 Qwen 3 Coder 14B？',
            a: '运行 <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>。Ollama 会自动检测 NVIDIA GPU 并使用 CUDA。用 <code>ollama ps</code> 验证 GPU 使用情况——模型应显示在 GPU 上运行而非 CPU。如果回退到 CPU，请检查 CUDA 驱动是否为最新版本。',
          },
          {
            q: '代码补全上，专用编程模型比通用模型更好吗？',
            a: '是的，明显更好。Qwen 3 Coder 14B HumanEval 得78.4%。同等大小的通用 Mistral 12B 约60%。18分的差距反映了代码专项预训练数据的价值。对于严肃的编程工作，始终选择相同尺寸的代码微调模型而非通用模型。选项对比请参阅<a href="/zh/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder 对比 DeepSeek Coder 指南</a>。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[Best MoE Models for Local Coding](/zh/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/zh/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Mejor LLM local para programar con 12 GB de VRAM?',
    seoTitle: 'Mejor LLM de programación para 12 GB 2026 | PromptQuorum',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M: mejor LLM de programación para 12 GB con ~10 GB y mayor HumanEval. DeepSeek 14B Q4 como alternativa. Para RTX 3060/3080 Ti.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Mejor LLM local para programar con 12 GB de VRAM?',
        answer: 'Qwen 3 Coder 14B Q4_K_M es el mejor modelo de programación para GPUs con 12 GB de VRAM como la RTX 3060. Usa ~10 GB de VRAM y obtiene la puntuación HumanEval más alta entre los modelos que caben en esta restricción. DeepSeek Coder 14B es una alternativa sólida.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M: ~10 GB de VRAM, mejor benchmark de programación para este tamaño',
          'DeepSeek Coder 14B Q4_K_M: VRAM similar, competitivo en completado de código',
          'Ambos caben en RTX 3060 12 GB y RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3 Coder 14B Q4_K_M usa ~10 GB de VRAM y cabe en RTX 3060 12 GB o RTX 3080 Ti 12 GB con 2 GB de margen',
          'En contexto corto (≤4k tokens), Qwen y DeepSeek Coder 14B corren a 14–18 tok/s en estas tarjetas de 12 GB',
          'Las sesiones con más de 8k tokens suben el VRAM a ~11,5 GB — mantente por debajo de 8k para un funcionamiento cómodo en 12 GB',
          'Qwen 3 Coder 14B obtiene 78,4 % en HumanEval; DeepSeek Coder 14B 75,1 % — ambos muy por encima de cualquier modelo de programación 7B',
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14B es la elección correcta para 12 GB de VRAM',
        content: [
          '<strong>Qwen 3 Coder 14B en cuantización Q4_K_M usa aproximadamente 10 GB de VRAM — dejando 2 GB de margen en una tarjeta de 12 GB, suficiente para el sistema operativo y el runtime de Ollama.</strong> Alcanza 78,4 % en HumanEval, la puntuación más alta de cualquier modelo de programación de 14B o inferior disponible para despliegue local a mayo de 2026.',
          'DeepSeek Coder 14B en Q4_K_M tiene un consumo de VRAM casi idéntico (~10 GB) y obtiene 75,1 % en HumanEval. La diferencia es pequeña, pero Qwen 3 Coder lidera de forma consistente en tareas de Python y TypeScript, que representan la mayoría de las cargas de trabajo habituales de los desarrolladores.',
          'Ambos modelos funcionan de forma idéntica en RTX 3060 12 GB y RTX 3080 Ti 12 GB. La RTX 3080 Ti ofrece un ancho de banda de memoria ligeramente mayor (912 GB/s frente a 360 GB/s), lo que se traduce en aproximadamente 18 tok/s frente a 14 tok/s para el mismo modelo con la misma cuantización.',
        ],
        columns: ['Modelo', 'VRAM', 'HumanEval', 'Velocidad (RTX 3060)', 'Velocidad (RTX 3080 Ti)'],
        rows: [
          { 'Modelo': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78,4 %', 'Velocidad (RTX 3060)': '~14 tok/s', 'Velocidad (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modelo': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75,1 %', 'Velocidad (RTX 3060)': '~14 tok/s', 'Velocidad (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modelo': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72,1 %', 'Velocidad (RTX 3060)': '~28 tok/s', 'Velocidad (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'La longitud del contexto es la variable clave de VRAM',
        content: [
          'Con 4k de contexto, ambos modelos 14B usan ~10 GB de VRAM y funcionan cómodamente. <strong>Con 8k de contexto, el VRAM sube a aproximadamente 11,5 GB — dejando solo 500 MB de margen en una tarjeta de 12 GB.</strong> Con 16k de contexto, un modelo 14B Q4_K_M supera los 12 GB de VRAM y comenzará a descargar parcialmente hacia la CPU, reduciendo la velocidad a ~3 tok/s.',
          'Para el uso práctico de programación, 4k de contexto es suficiente para la mayoría de los completados de archivo único y sesiones de revisión de código. Las necesidades de contexto largo (repositorios completos, refactorizaciones extensas) requieren una GPU de 16 GB o 24 GB, o cambiar a la variante 7B que usa ~5 GB de VRAM y deja toda la tarjeta de 12 GB libre para contexto.',
          'Si trabajas frecuentemente con archivos grandes y quieres quedarte con una tarjeta de 12 GB, considera Qwen 3 Coder 7B Q4_K_M — corre a ~28 tok/s en RTX 3060, obtiene 72,1 % en HumanEval y deja 7 GB de VRAM libres para contexto. Consulta la <a href="/es/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">comparativa de los mejores modelos de programación 14B</a> para más detalles sobre el compromiso 14B vs 7B.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLMs de programación para 12 GB de VRAM',
        faqs: [
          {
            q: '¿Qué es mejor para 12 GB de VRAM: RTX 3060 o RTX 3080 Ti?',
            a: 'Ambas tienen 12 GB de VRAM y ejecutan los mismos modelos. La RTX 3080 Ti tiene un ancho de banda de memoria de 912 GB/s frente a 360 GB/s de la RTX 3060 — aproximadamente 2,5 veces más rápida en generación de tokens para el mismo modelo. Si tienes la opción, la 3080 Ti es significativamente mejor para inferencia LLM a pesar de tener la misma capacidad de VRAM.',
          },
          {
            q: '¿Puedo meter un modelo de 20B o 22B en 12 GB de VRAM?',
            a: 'Con Q3_K_M algunos modelos de 20B caben en ~12 GB, pero la cuantización Q3 provoca una degradación perceptible de la calidad en tareas de código. Qwen 3 Coder 14B en Q4_K_M supera a Qwen 3 Coder 20B en Q3_K_M en la mayoría de benchmarks de programación, porque la calidad de cuantización importa más que el número de parámetros en este rango.',
          },
          {
            q: '¿Cómo instalo Qwen 3 Coder 14B en Ollama para mi RTX 3060?',
            a: 'Ejecuta <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>. Ollama detecta automáticamente la GPU NVIDIA y usa CUDA. Verifica el uso de la GPU con <code>ollama ps</code> — el modelo debería aparecer ejecutándose en la GPU, no en la CPU. Si cae en CPU, comprueba que los controladores CUDA estén actualizados.',
          },
          {
            q: '¿Un modelo de programación dedicado es mejor que uno de propósito general para el completado de código?',
            a: 'Sí, notablemente. Qwen 3 Coder 14B obtiene 78,4 % en HumanEval. Un Mistral 12B de propósito general de tamaño similar obtiene alrededor de 60 %. La diferencia de 18 puntos refleja los datos de preentrenamiento específicos para código. Para trabajo de programación serio, elige siempre un modelo ajustado para código sobre un modelo de propósito general del mismo tamaño. Compara las opciones en la <a href="/es/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">guía Qwen Coder vs DeepSeek Coder</a>.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Best MoE Models for Local Coding](/es/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/es/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    title: 'Melhor LLM local para programação com 12 GB de VRAM?',
    seoTitle: 'Melhor LLM de programação para 12 GB 2026 | PromptQuorum',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M: melhor LLM de programação para 12 GB com ~10 GB e maior HumanEval. DeepSeek 14B Q4 como alternativa. Para RTX 3060/3080 Ti.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Melhor LLM local para programação com 12 GB de VRAM?',
        answer: 'O Qwen 3 Coder 14B Q4_K_M é o melhor modelo de programação para GPUs com 12 GB de VRAM como a RTX 3060. Usa ~10 GB de VRAM e obtém a pontuação HumanEval mais alta entre os modelos que cabem nessa restrição. DeepSeek Coder 14B é uma alternativa sólida.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M: ~10 GB de VRAM, melhor benchmark de programação para esse tamanho',
          'DeepSeek Coder 14B Q4_K_M: VRAM similar, competitivo em completação de código',
          'Ambos cabem na RTX 3060 12 GB e RTX 3080 Ti 12 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3 Coder 14B Q4_K_M usa ~10 GB de VRAM e cabe na RTX 3060 12 GB ou RTX 3080 Ti 12 GB com 2 GB de margem',
          'Em contexto curto (≤4k tokens), Qwen e DeepSeek Coder 14B rodam a 14–18 tok/s nessas placas de 12 GB',
          'Sessões com mais de 8k tokens sobem o VRAM para ~11,5 GB — mantenha abaixo de 8k para operação confortável em 12 GB',
          'Qwen 3 Coder 14B obtém 78,4% no HumanEval; DeepSeek Coder 14B obtém 75,1% — ambos bem acima de qualquer modelo de programação 7B',
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14B é a escolha certa para 12 GB de VRAM',
        content: [
          '<strong>O Qwen 3 Coder 14B em quantização Q4_K_M usa aproximadamente 10 GB de VRAM — deixando 2 GB de margem em uma placa de 12 GB, suficiente para o sistema operacional e o runtime do Ollama.</strong> Alcança 78,4% no HumanEval, a pontuação mais alta de qualquer modelo de programação de 14B ou inferior disponível para implantação local em maio de 2026.',
          'O DeepSeek Coder 14B em Q4_K_M tem um consumo de VRAM quase idêntico (~10 GB) e obtém 75,1% no HumanEval. A diferença é pequena, mas o Qwen 3 Coder lidera de forma consistente em tarefas de Python e TypeScript, que representam a maioria das cargas de trabalho típicas dos desenvolvedores.',
          'Ambos os modelos funcionam de forma idêntica na RTX 3060 12 GB e RTX 3080 Ti 12 GB. A RTX 3080 Ti oferece largura de banda de memória ligeiramente maior (912 GB/s contra 360 GB/s), o que se traduz em aproximadamente 18 tok/s contra 14 tok/s para o mesmo modelo com a mesma quantização.',
        ],
        columns: ['Modelo', 'VRAM', 'HumanEval', 'Velocidade (RTX 3060)', 'Velocidade (RTX 3080 Ti)'],
        rows: [
          { 'Modelo': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78,4%', 'Velocidade (RTX 3060)': '~14 tok/s', 'Velocidade (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modelo': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75,1%', 'Velocidade (RTX 3060)': '~14 tok/s', 'Velocidade (RTX 3080 Ti)': '~18 tok/s' },
          { 'Modelo': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72,1%', 'Velocidade (RTX 3060)': '~28 tok/s', 'Velocidade (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: 'O comprimento do contexto é a variável-chave de VRAM',
        content: [
          'Com 4k de contexto, ambos os modelos 14B usam ~10 GB de VRAM e funcionam confortavelmente. <strong>Com 8k de contexto, o VRAM sobe para aproximadamente 11,5 GB — deixando apenas 500 MB de margem em uma placa de 12 GB.</strong> Com 16k de contexto, um modelo 14B Q4_K_M ultrapassa os 12 GB de VRAM e começa a descarregar parcialmente para a CPU, reduzindo a velocidade para ~3 tok/s.',
          'Para o uso prático de programação, 4k de contexto é suficiente para a maioria das completações de arquivo único e sessões de revisão de código. Necessidades de contexto longo (repositórios inteiros, refatorações extensas) requerem uma GPU de 16 GB ou 24 GB, ou mudar para a variante 7B que usa ~5 GB de VRAM e deixa toda a placa de 12 GB livre para o contexto.',
          'Se você trabalha frequentemente com arquivos grandes e quer manter uma placa de 12 GB, considere o Qwen 3 Coder 7B Q4_K_M — roda a ~28 tok/s na RTX 3060, obtém 72,1% no HumanEval e libera 7 GB de VRAM para o contexto. Consulte o <a href="/pt/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">comparativo dos melhores modelos de programação 14B</a> para mais detalhes sobre o trade-off 14B vs 7B.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs de programação para 12 GB de VRAM',
        faqs: [
          {
            q: 'O que é melhor para 12 GB de VRAM: RTX 3060 ou RTX 3080 Ti?',
            a: 'Ambas têm 12 GB de VRAM e executam os mesmos modelos. A RTX 3080 Ti tem largura de banda de memória de 912 GB/s contra 360 GB/s da RTX 3060 — aproximadamente 2,5 vezes mais rápida na geração de tokens para o mesmo modelo. Se você tiver a opção, a 3080 Ti é significativamente melhor para inferência de LLM apesar de ter a mesma capacidade de VRAM.',
          },
          {
            q: 'Posso colocar um modelo de 20B ou 22B em 12 GB de VRAM?',
            a: 'Com Q3_K_M alguns modelos de 20B cabem em ~12 GB, mas a quantização Q3 causa uma degradação perceptível de qualidade em tarefas de código. O Qwen 3 Coder 14B em Q4_K_M supera o Qwen 3 Coder 20B em Q3_K_M na maioria dos benchmarks de programação, porque a qualidade da quantização importa mais do que o número de parâmetros nesse intervalo.',
          },
          {
            q: 'Como instalo o Qwen 3 Coder 14B no Ollama para minha RTX 3060?',
            a: 'Execute <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>. O Ollama detecta automaticamente a GPU NVIDIA e usa CUDA. Verifique o uso da GPU com <code>ollama ps</code> — o modelo deve aparecer rodando na GPU, não na CPU. Se retroceder para a CPU, verifique se os drivers CUDA estão atualizados.',
          },
          {
            q: 'Um modelo de programação dedicado é melhor do que um de uso geral para completação de código?',
            a: 'Sim, notavelmente. O Qwen 3 Coder 14B obtém 78,4% no HumanEval. Um Mistral 12B de uso geral de tamanho similar obtém cerca de 60%. A diferença de 18 pontos reflete os dados de pré-treinamento específicos para código. Para trabalho sério de programação, sempre escolha um modelo ajustado para código em vez de um de uso geral do mesmo tamanho. Compare as opções no <a href="/pt/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">guia Qwen Coder vs DeepSeek Coder</a>.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Best MoE Models for Local Coding](/pt/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/pt/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    title: 'ما أفضل نموذج لغوي كبير محلي للبرمجة بـ⁨12⁩ جيجابايت ⁨VRAM⁩؟',
    seoTitle: 'أفضل ⁨LLM⁩ برمجة لـ⁨12 GB VRAM 2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: '⁨Qwen 3 Coder 14B Q4⁩_⁨K⁩_⁨M⁩ أفضل نموذج برمجة لـ⁨12 GB VRAM⁩ بـ~⁨10 GB⁩، أعلى ⁨HumanEval. DeepSeek 14B Q4⁩ بديل قوي. كلاهما على ⁨RTX 3060⁩ و⁨RTX 3080 Ti⁩.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج لغوي كبير محلي للبرمجة بـ12 جيجابايت VRAM؟',
        answer: 'Qwen 3 Coder 14B Q4_K_M هو أفضل نموذج برمجة لمعالجات رسومات بـ12 جيجابايت VRAM كـRTX 3060. يستخدم ~10 جيجابايت VRAM ويحقق أعلى درجة HumanEval بين النماذج التي تتسع ضمن هذا القيد. DeepSeek Coder 14B بديل قوي.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M: ~10 جيجابايت VRAM، أعلى اختبار أداء برمجة لهذا الحجم',
          'DeepSeek Coder 14B Q4_K_M: VRAM مماثل، تنافسي في إكمال الكود',
          'كلاهما يتسع في RTX 3060 12 جيجابايت وRTX 3080 Ti 12 جيجابايت',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3 Coder 14B Q4_K_M يستخدم ~10 جيجابايت VRAM ويتسع في RTX 3060 12 جيجابايت أو RTX 3080 Ti 12 جيجابايت بهامش 2 جيجابايت',
          'في السياق القصير (≤4000 رمز)، يعمل Qwen وDeepSeek Coder 14B بـ14–18 رمز/ثانية على هذه البطاقات بـ12 جيجابايت',
          'جلسات السياق التي تتجاوز 8000 رمز ترفع VRAM إلى ~11.5 جيجابايت — ابقَ دون 8000 رمز لتشغيل مريح بـ12 جيجابايت',
          'Qwen 3 Coder 14B يحقق 78.4% على HumanEval؛ DeepSeek Coder 14B يحقق 75.1% — كلاهما يتفوق بفارق كبير على أي نموذج برمجة 7B',
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14B هو الاختيار الصحيح لـ12 جيجابايت VRAM',
        content: [
          '<strong>Qwen 3 Coder 14B بتكميم Q4_K_M يستخدم نحو 10 جيجابايت VRAM — يترك 2 جيجابايت هامشاً على بطاقة 12 جيجابايت، كافٍ لنظام التشغيل وبيئة تشغيل Ollama.</strong> يحقق 78.4% على HumanEval، وهو أعلى درجة لأي نموذج برمجة بـ14B أو أقل متاح للنشر المحلي حتى مايو 2026.',
          'DeepSeek Coder 14B بتكميم Q4_K_M له بصمة VRAM متطابقة تقريباً (~10 جيجابايت) ويحقق 75.1% على HumanEval. الفارق صغير، لكن Qwen 3 Coder يتصدر باستمرار في مهام Python وTypeScript التي تشكّل معظم أعباء عمل المطورين النموذجية.',
          'كلا النموذجَين يعملان بشكل متطابق على RTX 3060 12 جيجابايت وRTX 3080 Ti 12 جيجابايت. RTX 3080 Ti توفر نطاقاً ترددياً أعلى للذاكرة (912 جيجابايت/ثانية مقابل 360 جيجابايت/ثانية)، مما يترجم إلى ~18 رمز/ثانية مقابل ~14 رمز/ثانية لنفس النموذج بنفس التكميم.',
        ],
        columns: ['النموذج', 'VRAM', 'HumanEval', 'السرعة (RTX 3060)', 'السرعة (RTX 3080 Ti)'],
        rows: [
          { 'النموذج': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 جيجابايت', 'HumanEval': '78.4%', 'السرعة (RTX 3060)': '~14 رمز/ثانية', 'السرعة (RTX 3080 Ti)': '~18 رمز/ثانية' },
          { 'النموذج': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 جيجابايت', 'HumanEval': '75.1%', 'السرعة (RTX 3060)': '~14 رمز/ثانية', 'السرعة (RTX 3080 Ti)': '~18 رمز/ثانية' },
          { 'النموذج': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 جيجابايت', 'HumanEval': '72.1%', 'السرعة (RTX 3060)': '~28 رمز/ثانية', 'السرعة (RTX 3080 Ti)': '~38 رمز/ثانية' },
        ],
      },
      body2: {
        title: 'طول السياق هو المتغير الرئيسي للـ VRAM',
        content: [
          'عند 4000 رمز سياق، يستخدم كلا نموذجَي 14B نحو 10 جيجابايت VRAM ويعملان بشكل مريح. <strong>عند 8000 رمز سياق، يرتفع VRAM إلى نحو 11.5 جيجابايت — يبقى هامش 500 ميجابايت فقط على بطاقة 12 جيجابايت.</strong> عند 16000 رمز سياق، يتجاوز نموذج 14B Q4_K_M حدود VRAM 12 جيجابايت ويبدأ بتفريغ جزئي على وحدة المعالجة المركزية، مما يخفض السرعة إلى ~3 رمز/ثانية.',
          'للاستخدام العملي في البرمجة، 4000 رمز كافٍ لمعظم عمليات إكمال الملف الواحد وجلسات مراجعة الكود. المتطلبات ذات السياق الطويل (مستودعات كاملة، إعادة هياكل واسعة) تحتاج معالج رسومات بـ16 جيجابايت أو 24 جيجابايت، أو التبديل إلى نسخة 7B التي تستخدم ~5 جيجابايت VRAM وتترك كامل بطاقة 12 جيجابايت للسياق.',
          'إذا كنت تعمل كثيراً مع الملفات الكبيرة وتريد البقاء على بطاقة 12 جيجابايت، فكّر في Qwen 3 Coder 7B Q4_K_M — يعمل بـ~28 رمز/ثانية على RTX 3060، يحقق 72.1% على HumanEval، ويترك 7 جيجابايت VRAM للسياق. لمزيد من التفاصيل حول المقايضة بين 14B و7B راجع <a href="/ar/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">مقارنة أفضل نماذج البرمجة 14B</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة سريعة حول نماذج البرمجة LLM لـ12 جيجابايت VRAM',
        faqs: [
          {
            q: 'أيهما أفضل لـ12 جيجابايت VRAM: RTX 3060 أم RTX 3080 Ti؟',
            a: 'كلتاهما تحتوي على 12 جيجابايت VRAM وتشغّل نفس النماذج. RTX 3080 Ti لديها نطاق ترددي للذاكرة 912 جيجابايت/ثانية مقابل 360 جيجابايت/ثانية لـRTX 3060 — أسرع بـ~2.5 مرة في توليد الرموز لنفس النموذج. إذا كان لديك خيار، فـRTX 3080 Ti أفضل بشكل ملحوظ للاستدلال بالنماذج اللغوية الكبيرة رغم تطابق سعة VRAM.',
          },
          {
            q: 'هل يمكنني تضمين نموذج 20B أو 22B في 12 جيجابايت VRAM؟',
            a: 'بتكميم Q3_K_M تتسع بعض نماذج 20B في ~12 جيجابايت، لكن التكميم Q3 يُحدث تدهوراً ملحوظاً في الجودة على مهام الكود. Qwen 3 Coder 14B بتكميم Q4_K_M يتفوق على Qwen 3 Coder 20B بتكميم Q3_K_M في معظم اختبارات أداء البرمجة، لأن جودة التكميم أهم من عدد المعاملات في هذا النطاق.',
          },
          {
            q: 'كيف أثبّت Qwen 3 Coder 14B على Ollama لـRTX 3060 لديّ؟',
            a: 'نفّذ <code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>. يكتشف Ollama معالج الرسومات NVIDIA تلقائياً ويستخدم CUDA. تحقق من استخدام معالج الرسومات بـ<code>ollama ps</code> — يجب أن يظهر النموذج يعمل على معالج الرسومات لا على وحدة المعالجة المركزية. إذا عاد إلى وحدة المعالجة المركزية، تحقق من تحديث تعريفات CUDA.',
          },
          {
            q: 'هل نموذج البرمجة المخصص أفضل من النموذج متعدد الأغراض لإكمال الكود؟',
            a: 'نعم، بفارق كبير. Qwen 3 Coder 14B يحقق 78.4% على HumanEval. نموذج Mistral 12B متعدد الأغراض بحجم مماثل يحقق حوالي 60%. فارق 18 نقطة يعكس بيانات التدريب المسبق الخاصة بالكود. لأعمال البرمجة الجادة اختر دائماً نموذجاً مُضبَّطاً للكود بدلاً من نموذج متعدد الأغراض بنفس الحجم. قارن الخيارات في <a href="/ar/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">دليل Qwen Coder مقابل DeepSeek Coder</a>.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[Best MoE Models for Local Coding](/ar/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/ar/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAM으로 코딩에 최적인 로컬 LLM은?',
    seoTitle: '12 GB VRAM 코딩 최적 LLM 2026 | PromptQuorum',
    metaDescription: 'Qwen 3 Coder 14B Q4_K_M: 12 GB VRAM 코딩 최고 모델, ~10 GB 사용, HumanEval 최고점. DeepSeek 14B Q4 대안. RTX 3060/3080 Ti 모두 지원.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-21',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    targetKeywords: [
      '12GB VRAM 코딩 LLM',
      'RTX 3060 로컬 LLM 코딩',
      'Qwen 3 Coder 14B 한국어',
      '12 GB VRAM 최적 AI 모델',
      '로컬 LLM 코드 생성 2026',
    ],
    readTime: '5분 분량',
    quickAnswerTop: {
      ko: {
        question: '12 GB VRAM으로 코딩에 최적인 로컬 LLM은 무엇입니까?',
        answer: 'Qwen 3 Coder 14B Q4_K_M은 RTX 3060과 같은 12 GB VRAM GPU에서 코딩에 가장 적합한 모델입니다. VRAM을 약 10 GB 사용하며 이 제약 조건에 맞는 모델 중 HumanEval 점수가 가장 높습니다. DeepSeek Coder 14B는 강력한 대안입니다.',
        bullets: [
          'Qwen 3 Coder 14B Q4_K_M: ~10 GB VRAM 사용, 이 크기에서 코딩 벤치마크 최고점',
          'DeepSeek Coder 14B Q4_K_M: 유사한 VRAM, 코드 완성에서 경쟁력 있음',
          '두 모델 모두 RTX 3060 12 GB와 RTX 3080 Ti 12 GB에서 구동 가능',
        ],
        updatedDate: '2026-05',
      },
    },
    schema: {
      inLanguage: 'ko',
      url: 'https://www.promptquorum.com/ko/prompt-bites/best-local-llm-coding-12gb-vram',
    },
    breadcrumbSchema: {
      items: [
        { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
        { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
        { position: 3, name: '12 GB VRAM 코딩 최적 로컬 LLM', url: 'https://www.promptquorum.com/ko/prompt-bites/best-local-llm-coding-12gb-vram' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 3 Coder 14B Q4_K_M은 VRAM 약 10 GB를 사용하며 RTX 3060 12 GB 또는 RTX 3080 Ti 12 GB에 2 GB 여유를 두고 탑재됩니다.',
          '짧은 컨텍스트(≤4k 토큰) 환경에서 Qwen과 DeepSeek Coder 14B는 12 GB 카드에서 14~18 tok/s로 구동됩니다.',
          '8k 토큰 이상의 컨텍스트 세션에서는 VRAM이 약 11.5 GB까지 증가합니다. 12 GB에서 안정적인 사용을 위해 8k 미만을 권장합니다.',
          'Qwen 3 Coder 14B는 HumanEval에서 78.4%를 달성하며, DeepSeek Coder 14B는 75.1%로 모든 7B 코딩 모델을 크게 능가합니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '12 GB VRAM 환경에서 코딩에 가장 적합한 로컬 LLM은 Qwen 3 Coder 14B Q4_K_M이며 HumanEval 78.4%를 기록합니다.' },
          { type: 'plain-terms', text: 'VRAM 12 GB인 RTX 3060이나 RTX 3080 Ti를 사용하는 개발자는 Qwen 3 Coder 14B Q4_K_M을 선택하면 약 10 GB VRAM으로 최고 수준의 코드 생성 성능을 얻을 수 있습니다.' },
        ],
      },
      body1: {
        title: 'Qwen 3 Coder 14B: 12 GB VRAM을 위한 최선의 선택',
        content: [
          '<strong>Q4_K_M 양자화를 적용한 Qwen 3 Coder 14B는 VRAM 약 10 GB를 사용하여 12 GB 카드에 2 GB 여유를 남깁니다. 이는 운영 체제와 Ollama 런타임을 위한 충분한 공간입니다.</strong> 2026년 5월 기준 로컬 배포 가능한 14B 이하 코딩 모델 중 HumanEval 78.4%로 가장 높은 점수를 기록합니다.',
          'Q4_K_M 양자화의 DeepSeek Coder 14B는 VRAM 사용량이 거의 동일하며(~10 GB) HumanEval에서 75.1%를 달성합니다. 차이는 작지만, Qwen 3 Coder는 개발자가 가장 많이 다루는 Python과 TypeScript 작업에서 일관적으로 우세합니다.',
          '두 모델 모두 RTX 3060 12 GB와 RTX 3080 Ti 12 GB에서 동일하게 동작합니다. RTX 3080 Ti는 메모리 대역폭이 더 높아(912 GB/s 대 360 GB/s) 동일한 모델과 양자화 조건에서 약 18 tok/s 대 14 tok/s의 차이를 냅니다.',
        ],
        columns: ['모델', 'VRAM', 'HumanEval', '속도 (RTX 3060)', '속도 (RTX 3080 Ti)'],
        rows: [
          { '모델': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '78.4%', '속도 (RTX 3060)': '~14 tok/s', '속도 (RTX 3080 Ti)': '~18 tok/s' },
          { '모델': 'DeepSeek Coder 14B Q4_K_M', 'VRAM': '~10 GB', 'HumanEval': '75.1%', '속도 (RTX 3060)': '~14 tok/s', '속도 (RTX 3080 Ti)': '~18 tok/s' },
          { '모델': 'Qwen 3 Coder 7B Q4_K_M', 'VRAM': '~5 GB', 'HumanEval': '72.1%', '속도 (RTX 3060)': '~28 tok/s', '속도 (RTX 3080 Ti)': '~38 tok/s' },
        ],
      },
      body2: {
        title: '컨텍스트 길이가 VRAM 사용량을 결정합니다',
        content: [
          '4k 컨텍스트에서는 두 14B 모델 모두 VRAM 약 10 GB를 사용하며 안정적으로 구동됩니다. <strong>8k 컨텍스트에서는 VRAM이 약 11.5 GB까지 증가하여 12 GB 카드에 500 MB 여유만 남습니다.</strong> 16k 컨텍스트에서는 14B Q4_K_M 모델이 12 GB VRAM 한계를 초과하여 CPU로 부분 오프로드가 시작되고 속도가 약 3 tok/s로 떨어집니다.',
          '실제 코딩 사용 시 4k 컨텍스트로 단일 파일 완성과 코드 리뷰 세션 대부분을 처리할 수 있습니다. 전체 저장소나 대규모 리팩토링 같은 긴 컨텍스트 작업에는 16 GB 또는 24 GB GPU가 필요하거나, VRAM 약 5 GB만 사용하는 7B 변형으로 전환해야 합니다.',
          '대용량 파일을 자주 다루면서 12 GB 카드를 유지하려는 경우 Qwen 3 Coder 7B Q4_K_M을 고려하십시오. RTX 3060에서 약 28 tok/s로 구동되고 HumanEval 72.1%를 달성하며 컨텍스트를 위해 7 GB VRAM을 확보합니다. 14B 대 7B 트레이드오프에 대한 자세한 내용은 <a href="/ko/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">최고의 14B 코딩 모델 비교</a>를 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '12 GB VRAM 코딩 LLM에 관한 빠른 답변',
        faqs: [
          {
            q: '12 GB VRAM에서 더 나은 선택은 RTX 3060입니까, RTX 3080 Ti입니까?',
            a: '두 카드 모두 12 GB VRAM을 탑재하며 동일한 모델을 구동합니다. RTX 3080 Ti의 메모리 대역폭은 912 GB/s로 RTX 3060의 360 GB/s보다 약 2.5배 빠릅니다. 선택권이 있다면 RTX 3080 Ti가 동일한 VRAM 용량에도 불구하고 LLM 추론에서 현저히 뛰어난 성능을 발휘합니다.',
          },
          {
            q: '12 GB VRAM에 20B 또는 22B 모델을 올릴 수 있습니까?',
            a: 'Q3_K_M 양자화를 사용하면 일부 20B 모델이 약 12 GB에 맞지만, Q3 양자화는 코드 작업에서 눈에 띄는 품질 저하를 유발합니다. Qwen 3 Coder 14B Q4_K_M은 이 범위에서 매개변수 수보다 양자화 품질이 더 중요하기 때문에 대부분의 코딩 벤치마크에서 Q3_K_M의 Qwen 3 Coder 20B를 능가합니다.',
          },
          {
            q: 'RTX 3060에서 Qwen 3 Coder 14B를 Ollama에 설치하려면 어떻게 합니까?',
            a: '<code>ollama pull qwen2.5-coder:14b-instruct-q4_K_M</code>을 실행하십시오. Ollama는 NVIDIA GPU를 자동으로 감지하고 CUDA를 사용합니다. <code>ollama ps</code>로 GPU 사용 여부를 확인하십시오. 모델이 CPU가 아닌 GPU에서 실행 중으로 표시되어야 합니다. CPU로 폴백되면 CUDA 드라이버 최신 여부를 확인하십시오.',
          },
          {
            q: '코드 완성에 전용 코딩 모델이 범용 모델보다 우수합니까?',
            a: '예, 현저하게 우수합니다. Qwen 3 Coder 14B는 HumanEval에서 78.4%를 기록합니다. 비슷한 크기의 범용 Mistral 12B는 약 60%에 그칩니다. 18점 차이는 코드 특화 사전 학습 데이터를 반영합니다. 진지한 코딩 작업에는 동일한 크기의 범용 모델 대신 항상 코드 특화 모델을 선택하십시오. <a href="/ko/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder 대 DeepSeek Coder 가이드</a>에서 옵션을 비교하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[14B 코딩 모델 비교](/ko/prompt-bites/best-14b-models-coding)',
          '[Qwen Coder vs DeepSeek Coder](/ko/prompt-bites/qwen-coder-vs-deepseek-coder)',
          '[코딩을 위한 최고의 로컬 LLM 가이드](/ko/local-llms/best-local-llms-for-coding)',
          '[Best MoE Models for Local Coding](/ko/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Cursor Pro vs Continue.dev: Which AI Coding Tool?](/ko/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
}
