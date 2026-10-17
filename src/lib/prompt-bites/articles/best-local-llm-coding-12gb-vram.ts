import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best Local LLM for Coding with 12 GB VRAM?',
    dateModified: '2026-10-17',
    seoTitle: 'Best Coding Model for 12 GB VRAM: Gemma 4 12B (2026)',
    metaDescription: 'Gemma 4 12B is the best coding model for 12 GB VRAM: 7.7–8.0 GB download, 72.0% LiveCodeBench v6 (Google). Qwen2.5-Coder 14B and Ornith 9B as alternatives.',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-en.webp',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Qwen2.5-Coder 14B', 'Ornith 9B', 'Devstral Small 2', 'Qwen3.8 27B'],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RTX 3080 Ti 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 12 GB VRAM GPUs choosing a coding model',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-models-amd-5700x-3070ti', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for coding with 12 GB VRAM?',
        answer: 'Gemma 4 12B is the best coding model for a 12 GB VRAM GPU: its Ollama download is 7.7–8.0 GB, and Google reports 72.0% on LiveCodeBench v6 for the 12B model. Qwen2.5-Coder 14B (~9 GB) is the code-specialised alternative. Qwen3.8 27B (18 GB) and Devstral Small 2 (15 GB) do not fit in 12 GB.',
        bullets: [
          'Gemma 4 12B: 7.7–8.0 GB download, 256K context, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M: ~9 GB, code-specialised, supports fill-in-the-middle',
          'Ornith 9B: 5.6 GB, MIT licence, built for agentic coding',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
        answer: 'Gemma 4 12B ist das beste Coding-Modell für eine GPU mit 12 GB VRAM: Der Ollama-Download umfasst 7,7–8,0 GB, und Google nennt 72,0 % auf LiveCodeBench v6 für das 12B-Modell. Qwen2.5-Coder 14B (~9 GB) ist die auf Code spezialisierte Alternative. Qwen3.8 27B (18 GB) und Devstral Small 2 (15 GB) passen nicht in 12 GB.',
        bullets: [
          'Gemma 4 12B: 7,7–8,0 GB Download, 256K Kontext, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M: ~9 GB, auf Code spezialisiert, unterstützt Fill-in-the-Middle',
          'Ornith 9B: 5,6 GB, MIT-Lizenz, für agentisches Coding entwickelt',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
        answer: 'Gemma 4 12B est le meilleur modèle de code pour un GPU de 12 Go de VRAM : son téléchargement Ollama fait 7,7–8,0 Go, et Google annonce 72,0 % sur LiveCodeBench v6 pour le modèle 12B. Qwen2.5-Coder 14B (~9 Go) est l\'alternative spécialisée en code. Qwen3.8 27B (18 Go) et Devstral Small 2 (15 Go) ne tiennent pas dans 12 Go.',
        bullets: [
          'Gemma 4 12B : 7,7–8,0 Go à télécharger, contexte 256K, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M : ~9 Go, spécialisé en code, gère le fill-in-the-middle',
          'Ornith 9B : 5,6 Go, licence MIT, conçu pour le codage agentique',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: '12 GB VRAMでコーディングに最適なローカルLLMは？',
        answer: '12 GB VRAMのGPUで最適なコーディングモデルはGemma 4 12Bです。Ollamaのダウンロードは7.7〜8.0 GBで、Googleは12BモデルのLiveCodeBench v6スコアを72.0%と公表しています。コード特化の代替はQwen2.5-Coder 14B（約9 GB）です。Qwen3.8 27B（18 GB）とDevstral Small 2（15 GB）は12 GBに収まりません。',
        bullets: [
          'Gemma 4 12B：ダウンロード7.7〜8.0 GB、256Kコンテキスト、Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M：約9 GB、コード特化、fill-in-the-middle対応',
          'Ornith 9B：5.6 GB、MITライセンス、エージェント型コーディング向け',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
        answer: '12 GB显存GPU的最佳编程模型是Gemma 4 12B：Ollama下载体积为7.7–8.0 GB，Google公布12B模型在LiveCodeBench v6上得分72.0%。代码专用的备选是Qwen2.5-Coder 14B（约9 GB）。Qwen3.8 27B（18 GB）和Devstral Small 2（15 GB）装不进12 GB。',
        bullets: [
          'Gemma 4 12B：下载7.7–8.0 GB，256K上下文，Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M：约9 GB，代码专用，支持fill-in-the-middle',
          'Ornith 9B：5.6 GB，MIT许可，面向智能体编程',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B (Google, Apache 2.0): 7.7–8.0 GB download, 256K context, 72.0% LiveCodeBench v6 (vendor-reported) — the top coding pick for any 12 GB GPU',
          'Qwen2.5-Coder 14B Q4_K_M (~9 GB) is still a solid code-specialised option, but it dates from 2024; newer Qwen coders such as Qwen3.8 27B (18 GB) need more than 12 GB',
          'Devstral Small 2 (24B, 15 GB) and Qwen3.8 27B (18 GB) only run on 12 GB with CPU offload, which slows generation sharply',
          'Raise the context window to 8192 or more for coding — the default window truncates real source files — and confirm with ollama ps that the model sits fully on the GPU',
        ],
      },
      body1: {
        title: 'The Coding Pick for 12 GB',
        content: [
          '<strong>Gemma 4 12B is the best coding model for a 12 GB VRAM GPU: the <a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">Ollama download</a> is 7.7–8.0 GB, which leaves about 4 GB for the KV cache, and Google reports 72.0% on LiveCodeBench v6 and a Codeforces Elo of 1659 for the 12B model.</strong> It is licensed under Apache 2.0, supports a 256K context window and accepts image input, so you can paste a screenshot of an error or a UI bug. These benchmark figures are vendor-reported; we did not run our own.',
          'Qwen2.5-Coder 14B Q4_K_M (~9 GB) still fits and remains the code-specialised choice with fill-in-the-middle support, but it is a 2024 model. <a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a> (5.6 GB, MIT licence) targets agentic coding and leaves the most headroom for long context. Devstral Small 2 (24B, 15 GB) and Qwen3.8 27B (18 GB) exceed 12 GB and only run with CPU offload.',
          'If you are on an 8 GB card instead, see the <a href="/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">best LLMs for AMD 5700X + RTX 3070 Ti</a> for the 8 GB compromise options.',
        ],
        columns: ['Model', 'Download size', 'Best for'],
        rows: [
          { 'Model': 'Gemma 4 12B', 'Download size': '7.7–8.0 GB', 'Best for': 'Top pick: coding, images, 256K context' },
          { 'Model': 'Qwen2.5-Coder 14B Q4_K_M', 'Download size': '~9 GB', 'Best for': 'Code-specialised, fill-in-the-middle' },
          { 'Model': 'Ornith 9B', 'Download size': '5.6 GB', 'Best for': 'Agentic coding with long-context headroom' },
          { 'Model': 'Devstral Small 2 24B', 'Download size': '15 GB', 'Best for': 'Does not fit; needs CPU offload' },
          { 'Model': 'Qwen3.8 27B', 'Download size': '18 GB', 'Best for': 'Does not fit; needs 18 GB+ memory' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-en.webp',
        imageCaption: 'Best Coding Models for 12 GB VRAM -- download sizes in Ollama',
      },
      body2: {
        title: 'Settings That Matter for Coding',
        content: [
          '<strong>Set the context window to at least 8k for coding work — a short default window truncates source files of a few hundred lines.</strong> Gemma 4 12B\'s ~8 GB of weights leave roughly 4 GB of a 12 GB card for the KV cache and runtime; Qwen2.5-Coder 14B at ~9 GB leaves less, so keep its context moderate. Set it with <code>OLLAMA_CONTEXT_LENGTH=8192</code> before starting the server, or <code>/set parameter num_ctx 8192</code> inside <code>ollama run</code>, then run <code>ollama ps</code> to confirm the model is on the GPU and not split with the CPU.',
          'Enable Flash Attention (<code>OLLAMA_FLASH_ATTENTION=1</code>) and, if you need more context, set <code>OLLAMA_KV_CACHE_TYPE=q8_0</code>, which roughly halves KV-cache memory compared with the default f16 cache at a small quality cost. The environment variables can be combined in one launch.',
          'For the full ranking beyond 12 GB, see the <a href="/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">best local LLMs for coding guide</a>.',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: 'Memory bandwidth, not VRAM size, sets generation speed: the RTX 3080 Ti 12 GB (912 GB/s) generates tokens noticeably faster than the RTX 3060 12 GB (360 GB/s), although both hold the same models. We did not benchmark tokens per second for this page.' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-en.webp',
        imageCaption: 'Settings That Matter for Coding -- Context and Flash Attention on 12 GB',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Coding LLMs for 12 GB VRAM',
        faqs: [
          {
            q: 'What is the best coding model for 12 GB VRAM?',
            a: 'Gemma 4 12B. Its Ollama download is 7.7–8.0 GB, it supports a 256K context window, and Google reports 72.0% on LiveCodeBench v6 and a Codeforces Elo of 1659 for it. Qwen2.5-Coder 14B Q4_K_M (~9 GB) is the alternative if you want a code-only model with fill-in-the-middle support.',
          },
          {
            q: 'What is the best local LLM for 12 GB VRAM in general?',
            a: 'Gemma 4 12B again: it is a general-purpose multimodal model (text and image input) under Apache 2.0, so one 8 GB download covers chat, coding and screenshots. Ollama also lists a lighter E4B variant if you want a smaller footprint.',
          },
          {
            q: 'Do Qwen3.8 27B and Devstral Small 2 fit in 12 GB of VRAM?',
            a: 'No. Ollama lists qwen3.8:27b at 18 GB and devstral-small-2:24b at 15 GB. Both can run with part of the model offloaded to system RAM, but generation slows sharply once layers leave the GPU, so they suit 16–24 GB cards.',
          },
          {
            q: 'Should I use Q4_K_M or a higher quantization on 12 GB?',
            a: 'Use Q4_K_M for 14B-class models — it is the largest standard quantization that leaves room for context on 12 GB. Smaller models such as Ornith 9B (5.6 GB default) leave headroom, so a higher-precision tag is possible where the model page lists one.',
          },
          {
            q: 'Can I use fill-in-the-middle (FIM) autocomplete with these models on Ollama?',
            a: 'Qwen2.5-Coder 14B supports FIM. Ollama accepts the text after the cursor in the <code>suffix</code> field of <code>/api/generate</code> for models whose template supports it. Check each model\'s Ollama page for insert support before wiring it into an editor; for autocomplete, Qwen2.5-Coder is the safer choice.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) -- full ranking beyond 12 GB',
          '[Best MoE Models for Local Coding](/prompt-bites/best-moe-models-local-coding) -- MoE coding models',
          '[Continue.dev Acquired by Cursor: Shutdown and Alternatives](/prompt-bites/cursor-pro-vs-continue-dev) -- coding tool comparison',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
    seoTitle: 'Bestes Coding-Modell für 12 GB VRAM: Gemma 4 12B (2026)',
    metaDescription: 'Gemma 4 12B ist das beste Coding-Modell für 12 GB VRAM: 7,7–8,0 GB Download, 72,0 % LiveCodeBench v6 (Google). Alternativen: Qwen2.5-Coder 14B, Ornith 9B.',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-de.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Bestes lokales LLM für Coding mit 12 GB VRAM?',
        answer: 'Gemma 4 12B ist das beste Coding-Modell für eine GPU mit 12 GB VRAM: Der Ollama-Download umfasst 7,7–8,0 GB, und Google nennt 72,0 % auf LiveCodeBench v6 für das 12B-Modell. Qwen2.5-Coder 14B (~9 GB) ist die auf Code spezialisierte Alternative. Qwen3.8 27B (18 GB) und Devstral Small 2 (15 GB) passen nicht in 12 GB.',
        bullets: [
          'Gemma 4 12B: 7,7–8,0 GB Download, 256K Kontext, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M: ~9 GB, auf Code spezialisiert, unterstützt Fill-in-the-Middle',
          'Ornith 9B: 5,6 GB, MIT-Lizenz, für agentisches Coding entwickelt',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B (Google, Apache 2.0): 7,7–8,0 GB Download, 256K Kontext, 72,0 % LiveCodeBench v6 (Herstellerangabe) — die beste Coding-Wahl für jede 12-GB-GPU',
          'Qwen2.5-Coder 14B Q4_K_M (~9 GB) bleibt eine solide, auf Code spezialisierte Option, stammt aber aus 2024; neuere Qwen-Coder wie Qwen3.8 27B (18 GB) brauchen mehr als 12 GB',
          'Devstral Small 2 (24B, 15 GB) und Qwen3.8 27B (18 GB) laufen auf 12 GB nur mit CPU-Offload, was die Generierung stark verlangsamt',
          'Erhöhen Sie das Kontextfenster fürs Coding auf mindestens 8192 — das Standardfenster kürzt echte Quelldateien — und prüfen Sie mit ollama ps, dass das Modell vollständig auf der GPU liegt',
        ],
      },
      body1: {
        title: 'Die Coding-Wahl für 12 GB',
        content: [
          '<strong>Gemma 4 12B ist das beste Coding-Modell für eine GPU mit 12 GB VRAM: Der <a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">Ollama-Download</a> umfasst 7,7–8,0 GB, was etwa 4 GB für den KV-Cache lässt, und Google nennt 72,0 % auf LiveCodeBench v6 sowie ein Codeforces-Elo von 1659 für das 12B-Modell.</strong> Es steht unter Apache 2.0, unterstützt ein Kontextfenster von 256K und nimmt Bilder entgegen, sodass Sie einen Screenshot eines Fehlers oder UI-Problems einfügen können. Die Benchmark-Werte stammen vom Hersteller; wir haben keine eigenen Messungen durchgeführt.',
          'Qwen2.5-Coder 14B Q4_K_M (~9 GB) passt weiterhin und bleibt die auf Code spezialisierte Wahl mit Fill-in-the-Middle-Unterstützung, ist aber ein Modell von 2024. <a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a> (5,6 GB, MIT-Lizenz) zielt auf agentisches Coding und lässt am meisten Platz für langen Kontext. Devstral Small 2 (24B, 15 GB) und Qwen3.8 27B (18 GB) überschreiten 12 GB und laufen nur mit CPU-Offload.',
          'Wenn Sie stattdessen eine 8-GB-Karte haben, finden Sie im <a href="/de/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">Beitrag zu den besten LLMs für AMD 5700X + RTX 3070 Ti</a> Kompromisslösungen für 8 GB.',
        ],
        columns: ['Modell', 'Download-Größe', 'Am besten für'],
        rows: [
          { 'Modell': 'Gemma 4 12B', 'Download-Größe': '7,7–8,0 GB', 'Am besten für': 'Beste Wahl: Coding, Bilder, 256K Kontext' },
          { 'Modell': 'Qwen2.5-Coder 14B Q4_K_M', 'Download-Größe': '~9 GB', 'Am besten für': 'Code-spezialisiert, Fill-in-the-Middle' },
          { 'Modell': 'Ornith 9B', 'Download-Größe': '5,6 GB', 'Am besten für': 'Agentisches Coding, Platz für langen Kontext' },
          { 'Modell': 'Devstral Small 2 24B', 'Download-Größe': '15 GB', 'Am besten für': 'Passt nicht; braucht CPU-Offload' },
          { 'Modell': 'Qwen3.8 27B', 'Download-Größe': '18 GB', 'Am besten für': 'Passt nicht; braucht 18 GB+ Speicher' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-de.webp',
        imageCaption: 'Beste Coding-Modelle für 12 GB VRAM -- Download-Größen in Ollama',
      },
      body2: {
        title: 'Einstellungen, die beim Coding zählen',
        content: [
          '<strong>Stellen Sie das Kontextfenster fürs Coding auf mindestens 8k — ein kurzes Standardfenster kürzt Quelldateien mit einigen hundert Zeilen.</strong> Die ~8 GB Gewichte von Gemma 4 12B lassen auf einer 12-GB-Karte etwa 4 GB für KV-Cache und Laufzeit; Qwen2.5-Coder 14B mit ~9 GB lässt weniger, halten Sie dort den Kontext moderat. Setzen Sie ihn mit <code>OLLAMA_CONTEXT_LENGTH=8192</code> vor dem Start des Servers oder mit <code>/set parameter num_ctx 8192</code> in <code>ollama run</code> und prüfen Sie mit <code>ollama ps</code>, dass das Modell auf der GPU liegt und nicht mit der CPU geteilt wird.',
          'Aktivieren Sie Flash Attention (<code>OLLAMA_FLASH_ATTENTION=1</code>) und setzen Sie bei Bedarf <code>OLLAMA_KV_CACHE_TYPE=q8_0</code>; das halbiert den KV-Cache-Speicher gegenüber dem Standard-f16-Cache ungefähr, bei geringem Qualitätsverlust. Die Umgebungsvariablen lassen sich in einem Start kombinieren.',
          'Das vollständige Ranking über 12 GB hinaus finden Sie im <a href="/de/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">Leitfaden zu den besten lokalen LLMs fürs Coding</a>.',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: 'Die Speicherbandbreite, nicht die VRAM-Größe, bestimmt die Generierungsgeschwindigkeit: Die RTX 3080 Ti 12 GB (912 GB/s) erzeugt Token spürbar schneller als die RTX 3060 12 GB (360 GB/s), obwohl beide dieselben Modelle fassen. Für diese Seite haben wir keine Token pro Sekunde gemessen.' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-de.webp',
        imageCaption: 'Wichtige Einstellungen für Coding -- Kontext und Flash Attention bei 12 GB',
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Coding-LLMs für 12 GB VRAM',
        faqs: [
          {
            q: 'Was ist das beste Coding-Modell für 12 GB VRAM?',
            a: 'Gemma 4 12B. Der Ollama-Download umfasst 7,7–8,0 GB, es unterstützt ein Kontextfenster von 256K, und Google nennt 72,0 % auf LiveCodeBench v6 und ein Codeforces-Elo von 1659. Qwen2.5-Coder 14B Q4_K_M (~9 GB) ist die Alternative, wenn Sie ein reines Code-Modell mit Fill-in-the-Middle-Unterstützung wollen.',
          },
          {
            q: 'Was ist das beste lokale LLM für 12 GB VRAM allgemein?',
            a: 'Wieder Gemma 4 12B: Es ist ein multimodales Allzweckmodell (Text- und Bildeingabe) unter Apache 2.0, ein 8-GB-Download deckt also Chat, Coding und Screenshots ab. Ollama listet außerdem eine leichtere E4B-Variante für einen kleineren Speicherbedarf.',
          },
          {
            q: 'Passen Qwen3.8 27B und Devstral Small 2 in 12 GB VRAM?',
            a: 'Nein. Ollama listet qwen3.8:27b mit 18 GB und devstral-small-2:24b mit 15 GB. Beide laufen mit teilweiser Auslagerung in den Arbeitsspeicher, doch die Generierung wird stark langsamer, sobald Layer die GPU verlassen; sie passen besser zu Karten mit 16–24 GB.',
          },
          {
            q: 'Sollte ich auf 12 GB Q4_K_M oder eine höhere Quantisierung nutzen?',
            a: 'Nutzen Sie Q4_K_M für Modelle der 14B-Klasse — es ist die größte Standard-Quantisierung, die auf 12 GB noch Platz für Kontext lässt. Kleinere Modelle wie Ornith 9B (5,6 GB Standard) lassen Spielraum, ein höher aufgelöster Tag ist möglich, wenn die Modellseite einen anbietet.',
          },
          {
            q: 'Kann ich Fill-in-the-Middle (FIM) für Autovervollständigung mit diesen Modellen in Ollama nutzen?',
            a: 'Qwen2.5-Coder 14B unterstützt FIM. Ollama nimmt den Text nach dem Cursor im Feld <code>suffix</code> von <code>/api/generate</code> entgegen, sofern das Template des Modells es unterstützt. Prüfen Sie die Ollama-Seite jedes Modells auf Insert-Unterstützung, bevor Sie es in einen Editor einbinden; für Autovervollständigung ist Qwen2.5-Coder die sicherere Wahl.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Beste lokale LLMs fürs Coding](/de/local-llms/best-local-llms-for-coding) -- vollständiges Ranking über 12 GB hinaus',
          '[Best MoE Models for Local Coding](/de/prompt-bites/best-moe-models-local-coding) -- MoE-Coding-Modelle',
          '[Continue.dev von Cursor übernommen: Einstellung und Alternativen](/de/prompt-bites/cursor-pro-vs-continue-dev) -- Vergleich von Coding-Tools',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
    seoTitle: 'Meilleur modèle de code 12 Go VRAM : Gemma 4 12B (2026)',
    metaDescription: 'Gemma 4 12B, meilleur modèle de code pour 12 Go de VRAM : 7,7–8,0 Go, 72,0 % LiveCodeBench v6 (Google). Alternatives : Qwen2.5-Coder 14B, Ornith 9B.',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-fr.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur LLM local pour le coding avec 12 Go de VRAM ?',
        answer: 'Gemma 4 12B est le meilleur modèle de code pour un GPU de 12 Go de VRAM : son téléchargement Ollama fait 7,7–8,0 Go, et Google annonce 72,0 % sur LiveCodeBench v6 pour le modèle 12B. Qwen2.5-Coder 14B (~9 Go) est l\'alternative spécialisée en code. Qwen3.8 27B (18 Go) et Devstral Small 2 (15 Go) ne tiennent pas dans 12 Go.',
        bullets: [
          'Gemma 4 12B : 7,7–8,0 Go à télécharger, contexte 256K, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M : ~9 Go, spécialisé en code, gère le fill-in-the-middle',
          'Ornith 9B : 5,6 Go, licence MIT, conçu pour le codage agentique',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B (Google, Apache 2.0) : 7,7–8,0 Go à télécharger, contexte 256K, 72,0 % LiveCodeBench v6 (donnée du fabricant) — le meilleur choix de code pour tout GPU de 12 Go',
          'Qwen2.5-Coder 14B Q4_K_M (~9 Go) reste une option solide spécialisée en code, mais date de 2024 ; les Qwen plus récents comme Qwen3.8 27B (18 Go) demandent plus de 12 Go',
          'Devstral Small 2 (24B, 15 Go) et Qwen3.8 27B (18 Go) ne tournent sur 12 Go qu\'avec un déport vers le CPU, ce qui ralentit fortement la génération',
          'Augmentez la fenêtre de contexte à 8192 ou plus pour coder — la fenêtre par défaut tronque les vrais fichiers source — et vérifiez avec ollama ps que le modèle est entièrement sur le GPU',
        ],
      },
      body1: {
        title: 'Le choix de code pour 12 Go',
        content: [
          '<strong>Gemma 4 12B est le meilleur modèle de code pour un GPU de 12 Go de VRAM : le <a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">téléchargement Ollama</a> fait 7,7–8,0 Go, ce qui laisse environ 4 Go pour le cache KV, et Google annonce 72,0 % sur LiveCodeBench v6 et un Elo Codeforces de 1659 pour le modèle 12B.</strong> Il est sous licence Apache 2.0, gère une fenêtre de contexte de 256K et accepte les images, vous pouvez donc coller une capture d\'écran d\'une erreur ou d\'un bug d\'interface. Ces scores sont ceux du fabricant ; nous n\'avons pas mené nos propres mesures.',
          'Qwen2.5-Coder 14B Q4_K_M (~9 Go) tient toujours et reste le choix spécialisé en code avec prise en charge du fill-in-the-middle, mais c\'est un modèle de 2024. <a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a> (5,6 Go, licence MIT) vise le codage agentique et laisse le plus de marge pour un long contexte. Devstral Small 2 (24B, 15 Go) et Qwen3.8 27B (18 Go) dépassent 12 Go et ne tournent qu\'avec un déport vers le CPU.',
          'Si vous avez plutôt une carte de 8 Go, consultez <a href="/fr/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">les meilleurs LLM pour AMD 5700X + RTX 3070 Ti</a> pour les compromis à 8 Go.',
        ],
        columns: ['Modèle', 'Taille du téléchargement', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Gemma 4 12B', 'Taille du téléchargement': '7,7–8,0 Go', 'Idéal pour': 'Premier choix : code, images, contexte 256K' },
          { 'Modèle': 'Qwen2.5-Coder 14B Q4_K_M', 'Taille du téléchargement': '~9 Go', 'Idéal pour': 'Spécialisé en code, fill-in-the-middle' },
          { 'Modèle': 'Ornith 9B', 'Taille du téléchargement': '5,6 Go', 'Idéal pour': 'Codage agentique, marge pour long contexte' },
          { 'Modèle': 'Devstral Small 2 24B', 'Taille du téléchargement': '15 Go', 'Idéal pour': 'Ne tient pas ; déport CPU requis' },
          { 'Modèle': 'Qwen3.8 27B', 'Taille du téléchargement': '18 Go', 'Idéal pour': 'Ne tient pas ; 18 Go+ de mémoire requis' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-fr.webp',
        imageCaption: 'Meilleurs modèles de code pour 12 Go de VRAM -- tailles de téléchargement dans Ollama',
      },
      body2: {
        title: 'Les réglages qui comptent pour coder',
        content: [
          '<strong>Fixez la fenêtre de contexte à 8k au minimum pour coder — une fenêtre par défaut courte tronque les fichiers source de quelques centaines de lignes.</strong> Les ~8 Go de poids de Gemma 4 12B laissent environ 4 Go d\'une carte de 12 Go pour le cache KV et le runtime ; Qwen2.5-Coder 14B à ~9 Go en laisse moins, gardez donc un contexte modéré. Réglez-le avec <code>OLLAMA_CONTEXT_LENGTH=8192</code> avant de lancer le serveur, ou <code>/set parameter num_ctx 8192</code> dans <code>ollama run</code>, puis lancez <code>ollama ps</code> pour vérifier que le modèle est sur le GPU et non partagé avec le CPU.',
          'Activez Flash Attention (<code>OLLAMA_FLASH_ATTENTION=1</code>) et, si vous avez besoin de plus de contexte, définissez <code>OLLAMA_KV_CACHE_TYPE=q8_0</code>, qui réduit à peu près de moitié la mémoire du cache KV par rapport au cache f16 par défaut, pour une légère perte de qualité. Les variables d\'environnement se combinent en un seul lancement.',
          'Pour le classement complet au-delà de 12 Go, consultez <a href="/fr/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">le guide des meilleurs LLM locaux pour le code</a>.',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: 'La bande passante mémoire, et non la taille de la VRAM, détermine la vitesse de génération : la RTX 3080 Ti 12 Go (912 Go/s) génère les tokens nettement plus vite que la RTX 3060 12 Go (360 Go/s), bien que les deux accueillent les mêmes modèles. Nous n\'avons pas mesuré de tokens par seconde pour cette page.' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-fr.webp',
        imageCaption: 'Réglages clés pour le code -- contexte et Flash Attention sur 12 Go',
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLM de code pour 12 Go de VRAM',
        faqs: [
          {
            q: 'Quel est le meilleur modèle de code pour 12 Go de VRAM ?',
            a: 'Gemma 4 12B. Son téléchargement Ollama fait 7,7–8,0 Go, il gère une fenêtre de contexte de 256K, et Google annonce 72,0 % sur LiveCodeBench v6 et un Elo Codeforces de 1659. Qwen2.5-Coder 14B Q4_K_M (~9 Go) est l\'alternative si vous voulez un modèle uniquement dédié au code avec prise en charge du fill-in-the-middle.',
          },
          {
            q: 'Quel est le meilleur LLM local pour 12 Go de VRAM en général ?',
            a: 'Encore Gemma 4 12B : c\'est un modèle multimodal généraliste (texte et image en entrée) sous Apache 2.0, un seul téléchargement de 8 Go couvre donc discussion, code et captures d\'écran. Ollama propose aussi une variante E4B plus légère pour une empreinte plus réduite.',
          },
          {
            q: 'Qwen3.8 27B et Devstral Small 2 tiennent-ils dans 12 Go de VRAM ?',
            a: 'Non. Ollama indique qwen3.8:27b à 18 Go et devstral-small-2:24b à 15 Go. Les deux peuvent tourner avec une partie du modèle déportée en RAM, mais la génération ralentit fortement dès que des couches quittent le GPU ; ils conviennent mieux aux cartes de 16–24 Go.',
          },
          {
            q: 'Faut-il choisir Q4_K_M ou une quantification supérieure sur 12 Go ?',
            a: 'Utilisez Q4_K_M pour les modèles de classe 14B — c\'est la plus grande quantification standard qui laisse de la place au contexte sur 12 Go. Les modèles plus petits comme Ornith 9B (5,6 Go par défaut) laissent de la marge, un tag de plus haute précision est donc possible quand la page du modèle en propose un.',
          },
          {
            q: 'Puis-je utiliser l\'autocomplétion fill-in-the-middle (FIM) avec ces modèles sur Ollama ?',
            a: 'Qwen2.5-Coder 14B gère le FIM. Ollama reçoit le texte après le curseur dans le champ <code>suffix</code> de <code>/api/generate</code> pour les modèles dont le template le permet. Vérifiez la page Ollama de chaque modèle pour la prise en charge de l\'insertion avant de l\'intégrer à un éditeur ; pour l\'autocomplétion, Qwen2.5-Coder est le choix le plus sûr.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleurs LLM locaux pour le code](/fr/local-llms/best-local-llms-for-coding) -- classement complet au-delà de 12 Go',
          '[Best MoE Models for Local Coding](/fr/prompt-bites/best-moe-models-local-coding) -- modèles de code MoE',
          '[Continue.dev racheté par Cursor : arrêt et alternatives](/fr/prompt-bites/cursor-pro-vs-continue-dev) -- comparatif d\'outils de code',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAMでコーディングに最適なローカルLLMは？',
    seoTitle: '12GB VRAM最適コーディングLLM：Gemma 4 12B（2026）',
    metaDescription: '12GB VRAMのコーディングにはGemma 4 12Bが最適：ダウンロード7.7〜8.0GB、LiveCodeBench v6で72.0%（Google公表）。代替はQwen2.5-Coder 14BとOrnith 9B。',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-ja.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: '12 GB VRAMでコーディングに最適なローカルLLMは？',
        answer: '12 GB VRAMのGPUで最適なコーディングモデルはGemma 4 12Bです。Ollamaのダウンロードは7.7〜8.0 GBで、Googleは12BモデルのLiveCodeBench v6スコアを72.0%と公表しています。コード特化の代替はQwen2.5-Coder 14B（約9 GB）です。Qwen3.8 27B（18 GB）とDevstral Small 2（15 GB）は12 GBに収まりません。',
        bullets: [
          'Gemma 4 12B：ダウンロード7.7〜8.0 GB、256Kコンテキスト、Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M：約9 GB、コード特化、fill-in-the-middle対応',
          'Ornith 9B：5.6 GB、MITライセンス、エージェント型コーディング向け',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B（Google、Apache 2.0）：ダウンロード7.7〜8.0 GB、256Kコンテキスト、LiveCodeBench v6で72.0%（メーカー公表値）— 12 GBのGPUならこれが最有力のコーディングモデル',
          'Qwen2.5-Coder 14B Q4_K_M（約9 GB）はコード特化の有力な選択肢ですが2024年のモデルで、Qwen3.8 27B（18 GB）など新しいQwenコーダーは12 GBを超えます',
          'Devstral Small 2（24B、15 GB）とQwen3.8 27B（18 GB）は、12 GBではCPUオフロードでしか動かず、生成速度が大きく低下します',
          'コーディングではコンテキストウィンドウを8192以上に引き上げてください（既定値では実際のソースファイルが切り詰められます）。ollama psでモデルがGPUに完全に載っているか確認します',
        ],
      },
      body1: {
        title: '12 GBで選ぶべきコーディングモデル',
        content: [
          '<strong>12 GB VRAMのGPUで最適なコーディングモデルはGemma 4 12Bです。<a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">Ollamaのダウンロード</a>は7.7〜8.0 GBでKVキャッシュに約4 GBの余裕が残り、Googleは12BモデルについてLiveCodeBench v6で72.0%、Codeforces Eloで1659を公表しています。</strong>ライセンスはApache 2.0、256Kのコンテキストウィンドウに対応し、画像入力も受け付けるため、エラーやUI不具合のスクリーンショットをそのまま貼り付けられます。これらのベンチマーク値はメーカー公表値で、当サイトでは独自測定を行っていません。',
          'Qwen2.5-Coder 14B Q4_K_M（約9 GB）も収まり、fill-in-the-middleに対応するコード特化の選択肢ですが、2024年のモデルです。<a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a>（5.6 GB、MITライセンス）はエージェント型コーディングを狙ったモデルで、長いコンテキスト用の余裕が最も大きくなります。Devstral Small 2（24B、15 GB）とQwen3.8 27B（18 GB）は12 GBを超え、CPUオフロードでのみ動作します。',
          '8 GBのカードをお使いの場合は、<a href="/ja/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti向けのおすすめLLM</a>で8 GBの妥協案を確認してください。',
        ],
        columns: ['モデル', 'ダウンロードサイズ', '最適な用途'],
        rows: [
          { 'モデル': 'Gemma 4 12B', 'ダウンロードサイズ': '7.7〜8.0 GB', '最適な用途': '第一候補：コーディング、画像、256K' },
          { 'モデル': 'Qwen2.5-Coder 14B Q4_K_M', 'ダウンロードサイズ': '約9 GB', '最適な用途': 'コード特化、fill-in-the-middle' },
          { 'モデル': 'Ornith 9B', 'ダウンロードサイズ': '5.6 GB', '最適な用途': 'エージェント型、長文脈の余裕' },
          { 'モデル': 'Devstral Small 2 24B', 'ダウンロードサイズ': '15 GB', '最適な用途': '収まらない。CPUオフロード必須' },
          { 'モデル': 'Qwen3.8 27B', 'ダウンロードサイズ': '18 GB', '最適な用途': '収まらない。18 GB以上が必要' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-ja.webp',
        imageCaption: '12 GB VRAM向けベストコーディングモデル -- Ollamaのダウンロードサイズ',
      },
      body2: {
        title: 'コーディングで効く設定',
        content: [
          '<strong>コーディングではコンテキストウィンドウを最低8kに設定してください。既定の短いウィンドウでは数百行のソースファイルが切り詰められます。</strong>Gemma 4 12Bの重み約8 GBなら、12 GBのカードでKVキャッシュとランタイムに約4 GBの余裕が残ります。Qwen2.5-Coder 14Bは約9 GBで余裕が小さいため、コンテキストは控えめにしてください。サーバー起動前に<code>OLLAMA_CONTEXT_LENGTH=8192</code>を設定するか、<code>ollama run</code>内で<code>/set parameter num_ctx 8192</code>を実行し、<code>ollama ps</code>でモデルがCPUと分割されずGPUに載っていることを確認します。',
          'Flash Attention（<code>OLLAMA_FLASH_ATTENTION=1</code>）を有効にし、さらにコンテキストが必要なら<code>OLLAMA_KV_CACHE_TYPE=q8_0</code>を設定します。既定のf16キャッシュに比べKVキャッシュのメモリが約半分になり、品質低下はわずかです。環境変数は1回の起動で組み合わせられます。',
          '12 GBを超える全体ランキングは、<a href="/ja/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">コーディング向けベストローカルLLMガイド</a>をご覧ください。',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: '生成速度を決めるのはVRAM容量ではなくメモリ帯域幅です。RTX 3080 Ti 12 GB（912 GB/s）はRTX 3060 12 GB（360 GB/s）より明らかに速くトークンを生成しますが、載せられるモデルは同じです。このページでは毎秒トークン数のベンチマークは行っていません。' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-ja.webp',
        imageCaption: 'コーディングで効く設定 -- 12 GBでのコンテキストとFlash Attention',
      },
      faq: {
        id: 'faq',
        title: '12 GB VRAM向けコーディングLLMのクイック回答',
        faqs: [
          {
            q: '12 GB VRAMで最適なコーディングモデルは？',
            a: 'Gemma 4 12Bです。Ollamaのダウンロードは7.7〜8.0 GBで、256Kのコンテキストウィンドウに対応し、GoogleはLiveCodeBench v6で72.0%、Codeforces Eloで1659を公表しています。fill-in-the-middle対応のコード専用モデルが欲しい場合の代替はQwen2.5-Coder 14B Q4_K_M（約9 GB）です。',
          },
          {
            q: '12 GB VRAM全般で最適なローカルLLMは？',
            a: 'こちらもGemma 4 12Bです。Apache 2.0の汎用マルチモーダルモデル（テキストと画像入力）なので、8 GBのダウンロード1つでチャット、コーディング、スクリーンショットをカバーできます。Ollamaにはより小さく動かせるE4B版もあります。',
          },
          {
            q: 'Qwen3.8 27BとDevstral Small 2は12 GB VRAMに収まりますか？',
            a: 'いいえ。Ollamaの表示ではqwen3.8:27bが18 GB、devstral-small-2:24bが15 GBです。モデルの一部をシステムRAMにオフロードすれば動きますが、レイヤーがGPUを離れると生成速度が大きく落ちるため、16〜24 GBのカード向けです。',
          },
          {
            q: '12 GBではQ4_K_Mと、より高い量子化のどちらを使うべきですか？',
            a: '14Bクラスのモデルにはコンテキスト用の余裕を残せる最大の標準量子化であるQ4_K_Mを使います。Ornith 9B（既定5.6 GB）のような小さなモデルは余裕があるため、モデルページに提供されていればより高精度のタグも使えます。',
          },
          {
            q: 'OllamaでこれらのモデルのFIM（fill-in-the-middle）補完は使えますか？',
            a: 'Qwen2.5-Coder 14BはFIMに対応しています。テンプレートが対応しているモデルでは、Ollamaは<code>/api/generate</code>の<code>suffix</code>フィールドでカーソル以降のテキストを受け取ります。エディタに組み込む前に、各モデルのOllamaページで挿入対応を確認してください。オートコンプリートにはQwen2.5-Coderが無難です。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[コーディング向けベストローカルLLM](/ja/local-llms/best-local-llms-for-coding) -- 12 GBを超える全体ランキング',
          '[Best MoE Models for Local Coding](/ja/prompt-bites/best-moe-models-local-coding) -- MoEコーディングモデル',
          '[Continue.devがCursorに買収：終了と代替ツール](/ja/prompt-bites/cursor-pro-vs-continue-dev) -- コーディングツール比較',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
    seoTitle: '12GB显存最佳编程模型：Gemma 4 12B（2026）',
    metaDescription: '12GB显存最佳编程模型是Gemma 4 12B：下载7.7–8.0GB，LiveCodeBench v6得分72.0%（Google公布）。备选：Qwen2.5-Coder 14B与Ornith 9B。',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-zh.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: '12 GB VRAM 编程最佳本地 LLM 是哪款？',
        answer: '12 GB显存GPU的最佳编程模型是Gemma 4 12B：Ollama下载体积为7.7–8.0 GB，Google公布12B模型在LiveCodeBench v6上得分72.0%。代码专用的备选是Qwen2.5-Coder 14B（约9 GB）。Qwen3.8 27B（18 GB）和Devstral Small 2（15 GB）装不进12 GB。',
        bullets: [
          'Gemma 4 12B：下载7.7–8.0 GB，256K上下文，Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M：约9 GB，代码专用，支持fill-in-the-middle',
          'Ornith 9B：5.6 GB，MIT许可，面向智能体编程',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B（Google，Apache 2.0）：下载7.7–8.0 GB，256K上下文，LiveCodeBench v6得分72.0%（厂商公布）——任何12 GB显卡的首选编程模型',
          'Qwen2.5-Coder 14B Q4_K_M（约9 GB）仍是可靠的代码专用选项，但发布于2024年；Qwen3.8 27B（18 GB）等较新的Qwen编程模型需要超过12 GB',
          'Devstral Small 2（24B，15 GB）和Qwen3.8 27B（18 GB）在12 GB上只能借助CPU卸载运行，生成速度会大幅下降',
          '编程时请把上下文窗口调到8192或更高（默认窗口会截断真实源文件），并用ollama ps确认模型完全位于GPU上',
        ],
      },
      body1: {
        title: '12 GB显存的编程首选',
        content: [
          '<strong>12 GB显存GPU的最佳编程模型是Gemma 4 12B：<a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">Ollama下载</a>体积为7.7–8.0 GB，可为KV缓存留出约4 GB，Google公布12B模型在LiveCodeBench v6上得分72.0%，Codeforces Elo为1659。</strong>它采用Apache 2.0许可，支持256K上下文窗口并可输入图片，因此可以直接粘贴报错或界面问题的截图。这些基准数据均为厂商公布，我们没有自行测试。',
          'Qwen2.5-Coder 14B Q4_K_M（约9 GB）仍能装下，是支持fill-in-the-middle的代码专用选择，但属于2024年的模型。<a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a>（5.6 GB，MIT许可）面向智能体编程，为长上下文留出的余量最大。Devstral Small 2（24B，15 GB）和Qwen3.8 27B（18 GB）超过12 GB，只能借助CPU卸载运行。',
          '如果你用的是8 GB显卡，请参阅<a href="/zh/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti的最佳LLM</a>了解8 GB的折中方案。',
        ],
        columns: ['模型', '下载体积', '最适合'],
        rows: [
          { '模型': 'Gemma 4 12B', '下载体积': '7.7–8.0 GB', '最适合': '首选：编程、图片、256K上下文' },
          { '模型': 'Qwen2.5-Coder 14B Q4_K_M', '下载体积': '约9 GB', '最适合': '代码专用，fill-in-the-middle' },
          { '模型': 'Ornith 9B', '下载体积': '5.6 GB', '最适合': '智能体编程，长上下文余量大' },
          { '模型': 'Devstral Small 2 24B', '下载体积': '15 GB', '最适合': '装不下；需要CPU卸载' },
          { '模型': 'Qwen3.8 27B', '下载体积': '18 GB', '最适合': '装不下；需要18 GB以上内存' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-zh.webp',
        imageCaption: '12 GB显存最佳编程模型 -- Ollama下载体积',
      },
      body2: {
        title: '编程时真正重要的设置',
        content: [
          '<strong>编程时请把上下文窗口至少设为8k——过短的默认窗口会截断几百行的源文件。</strong>Gemma 4 12B约8 GB的权重在12 GB显卡上给KV缓存和运行时留出约4 GB；Qwen2.5-Coder 14B约9 GB，余量更小，因此上下文要适度。启动服务前设置<code>OLLAMA_CONTEXT_LENGTH=8192</code>，或在<code>ollama run</code>中执行<code>/set parameter num_ctx 8192</code>，然后运行<code>ollama ps</code>确认模型在GPU上，而不是与CPU分担。',
          '启用Flash Attention（<code>OLLAMA_FLASH_ATTENTION=1</code>）；如需更长上下文，再设置<code>OLLAMA_KV_CACHE_TYPE=q8_0</code>，与默认f16缓存相比KV缓存内存约减半，质量损失很小。这些环境变量可在一次启动中组合使用。',
          '超过12 GB的完整排名，请参阅<a href="/zh/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">最佳本地编程LLM指南</a>。',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: '决定生成速度的是内存带宽，而不是显存容量：RTX 3080 Ti 12 GB（912 GB/s）生成token明显快于RTX 3060 12 GB（360 GB/s），尽管两者能装下相同的模型。本页没有测试每秒token数。' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-zh.webp',
        imageCaption: '编程时重要的设置 -- 12 GB下的上下文与Flash Attention',
      },
      faq: {
        id: 'faq',
        title: '12 GB显存编程LLM快速解答',
        faqs: [
          {
            q: '12 GB显存的最佳编程模型是什么？',
            a: 'Gemma 4 12B。Ollama下载体积为7.7–8.0 GB，支持256K上下文窗口，Google公布其LiveCodeBench v6得分为72.0%，Codeforces Elo为1659。如果想要支持fill-in-the-middle的纯代码模型，备选是Qwen2.5-Coder 14B Q4_K_M（约9 GB）。',
          },
          {
            q: '12 GB显存总体上最好的本地LLM是什么？',
            a: '仍是Gemma 4 12B：它是Apache 2.0许可的通用多模态模型（支持文本和图片输入），一个8 GB的下载就能覆盖聊天、编程和截图。Ollama还提供更轻量的E4B版本，占用更小。',
          },
          {
            q: 'Qwen3.8 27B和Devstral Small 2能装进12 GB显存吗？',
            a: '不能。Ollama标注qwen3.8:27b为18 GB，devstral-small-2:24b为15 GB。两者都可以把部分模型卸载到系统内存运行，但一旦有层离开GPU，生成速度会大幅下降，更适合16–24 GB的显卡。',
          },
          {
            q: '12 GB上应该用Q4_K_M还是更高的量化？',
            a: '14B级别的模型用Q4_K_M——它是12 GB上还能给上下文留出空间的最大标准量化。像Ornith 9B（默认5.6 GB）这样的小模型余量充足，如果模型页提供更高精度的标签即可选用。',
          },
          {
            q: '在Ollama上能对这些模型使用FIM（fill-in-the-middle）自动补全吗？',
            a: 'Qwen2.5-Coder 14B支持FIM。对于模板支持的模型，Ollama通过<code>/api/generate</code>的<code>suffix</code>字段接收光标之后的文本。接入编辑器之前，请先在各模型的Ollama页面确认是否支持insert；做自动补全时Qwen2.5-Coder更稳妥。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[最佳本地编程LLM](/zh/local-llms/best-local-llms-for-coding) -- 超过12 GB的完整排名',
          '[Best MoE Models for Local Coding](/zh/prompt-bites/best-moe-models-local-coding) -- MoE编程模型',
          '[Continue.dev被Cursor收购：停运与替代方案](/zh/prompt-bites/cursor-pro-vs-continue-dev) -- 编程工具对比',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Mejor LLM local para programar con 12 GB de VRAM?',
    seoTitle: 'Mejor modelo de código para 12 GB VRAM: Gemma 4 12B (2026)',
    metaDescription: 'Gemma 4 12B es el mejor modelo de código para 12 GB de VRAM: 7,7–8,0 GB, 72,0 % en LiveCodeBench v6 (Google). Alternativas: Qwen2.5-Coder 14B, Ornith 9B.',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-es.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: '¿Mejor LLM local para programar con 12 GB de VRAM?',
        answer: 'Gemma 4 12B es el mejor modelo de código para una GPU de 12 GB de VRAM: su descarga en Ollama es de 7,7–8,0 GB y Google informa un 72,0 % en LiveCodeBench v6 para el modelo 12B. Qwen2.5-Coder 14B (~9 GB) es la alternativa especializada en código. Qwen3.8 27B (18 GB) y Devstral Small 2 (15 GB) no caben en 12 GB.',
        bullets: [
          'Gemma 4 12B: 7,7–8,0 GB de descarga, contexto de 256K, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M: ~9 GB, especializado en código, admite fill-in-the-middle',
          'Ornith 9B: 5,6 GB, licencia MIT, creado para programación con agentes',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B (Google, Apache 2.0): 7,7–8,0 GB de descarga, contexto de 256K, 72,0 % en LiveCodeBench v6 (dato del fabricante) — la mejor opción de código para cualquier GPU de 12 GB',
          'Qwen2.5-Coder 14B Q4_K_M (~9 GB) sigue siendo una opción sólida especializada en código, pero es de 2024; los Qwen más nuevos, como Qwen3.8 27B (18 GB), necesitan más de 12 GB',
          'Devstral Small 2 (24B, 15 GB) y Qwen3.8 27B (18 GB) solo funcionan en 12 GB con descarga parcial a la CPU, lo que ralentiza mucho la generación',
          'Sube la ventana de contexto a 8192 o más para programar — la ventana por defecto trunca archivos fuente reales — y comprueba con ollama ps que el modelo está completo en la GPU',
        ],
      },
      body1: {
        title: 'La mejor opción de código para 12 GB',
        content: [
          '<strong>Gemma 4 12B es el mejor modelo de código para una GPU de 12 GB de VRAM: la <a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">descarga en Ollama</a> es de 7,7–8,0 GB, lo que deja unos 4 GB para la caché KV, y Google informa un 72,0 % en LiveCodeBench v6 y un Elo de Codeforces de 1659 para el modelo 12B.</strong> Tiene licencia Apache 2.0, admite una ventana de contexto de 256K y acepta imágenes, de modo que puedes pegar una captura de un error o de un fallo de interfaz. Estas cifras las da el fabricante; no hicimos mediciones propias.',
          'Qwen2.5-Coder 14B Q4_K_M (~9 GB) sigue cabiendo y es la opción especializada en código con soporte de fill-in-the-middle, pero es un modelo de 2024. <a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a> (5,6 GB, licencia MIT) apunta a la programación con agentes y deja más margen para contextos largos. Devstral Small 2 (24B, 15 GB) y Qwen3.8 27B (18 GB) superan los 12 GB y solo funcionan con descarga parcial a la CPU.',
          'Si tienes una tarjeta de 8 GB, consulta <a href="/es/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">los mejores LLM para AMD 5700X + RTX 3070 Ti</a> con opciones de compromiso para 8 GB.',
        ],
        columns: ['Modelo', 'Tamaño de descarga', 'Ideal para'],
        rows: [
          { 'Modelo': 'Gemma 4 12B', 'Tamaño de descarga': '7,7–8,0 GB', 'Ideal para': 'Primera opción: código, imágenes, 256K' },
          { 'Modelo': 'Qwen2.5-Coder 14B Q4_K_M', 'Tamaño de descarga': '~9 GB', 'Ideal para': 'Especializado en código, fill-in-the-middle' },
          { 'Modelo': 'Ornith 9B', 'Tamaño de descarga': '5,6 GB', 'Ideal para': 'Código con agentes, margen para contexto largo' },
          { 'Modelo': 'Devstral Small 2 24B', 'Tamaño de descarga': '15 GB', 'Ideal para': 'No cabe; requiere descarga a CPU' },
          { 'Modelo': 'Qwen3.8 27B', 'Tamaño de descarga': '18 GB', 'Ideal para': 'No cabe; requiere 18 GB+ de memoria' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-es.webp',
        imageCaption: 'Mejores modelos de código para 12 GB de VRAM -- tamaños de descarga en Ollama',
      },
      body2: {
        title: 'Los ajustes que importan para programar',
        content: [
          '<strong>Fija la ventana de contexto en al menos 8k para programar — una ventana por defecto corta trunca archivos fuente de unos cientos de líneas.</strong> Los ~8 GB de pesos de Gemma 4 12B dejan unos 4 GB de una tarjeta de 12 GB para la caché KV y el runtime; Qwen2.5-Coder 14B, con ~9 GB, deja menos, así que mantén su contexto moderado. Configúralo con <code>OLLAMA_CONTEXT_LENGTH=8192</code> antes de iniciar el servidor, o con <code>/set parameter num_ctx 8192</code> dentro de <code>ollama run</code>, y ejecuta <code>ollama ps</code> para confirmar que el modelo está en la GPU y no repartido con la CPU.',
          'Activa Flash Attention (<code>OLLAMA_FLASH_ATTENTION=1</code>) y, si necesitas más contexto, define <code>OLLAMA_KV_CACHE_TYPE=q8_0</code>, que reduce aproximadamente a la mitad la memoria de la caché KV frente a la caché f16 por defecto, con una pequeña pérdida de calidad. Las variables de entorno se pueden combinar en un solo arranque.',
          'Para el ranking completo más allá de 12 GB, consulta <a href="/es/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">la guía de los mejores LLM locales para programar</a>.',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: 'El ancho de banda de memoria, y no el tamaño de la VRAM, marca la velocidad de generación: la RTX 3080 Ti de 12 GB (912 GB/s) genera tokens bastante más rápido que la RTX 3060 de 12 GB (360 GB/s), aunque ambas alojan los mismos modelos. No medimos tokens por segundo para esta página.' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-es.webp',
        imageCaption: 'Ajustes clave para programar -- contexto y Flash Attention con 12 GB',
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLM de código para 12 GB de VRAM',
        faqs: [
          {
            q: '¿Cuál es el mejor modelo de código para 12 GB de VRAM?',
            a: 'Gemma 4 12B. Su descarga en Ollama es de 7,7–8,0 GB, admite una ventana de contexto de 256K y Google informa un 72,0 % en LiveCodeBench v6 y un Elo de Codeforces de 1659. Qwen2.5-Coder 14B Q4_K_M (~9 GB) es la alternativa si quieres un modelo solo de código con soporte de fill-in-the-middle.',
          },
          {
            q: '¿Cuál es el mejor LLM local para 12 GB de VRAM en general?',
            a: 'De nuevo Gemma 4 12B: es un modelo multimodal de propósito general (entrada de texto e imagen) con licencia Apache 2.0, así que una sola descarga de 8 GB cubre chat, código y capturas de pantalla. Ollama también ofrece una variante E4B más ligera si buscas menor consumo.',
          },
          {
            q: '¿Caben Qwen3.8 27B y Devstral Small 2 en 12 GB de VRAM?',
            a: 'No. Ollama indica qwen3.8:27b con 18 GB y devstral-small-2:24b con 15 GB. Ambos pueden funcionar con parte del modelo descargada a la RAM, pero la generación se ralentiza mucho cuando las capas salen de la GPU; encajan mejor en tarjetas de 16–24 GB.',
          },
          {
            q: '¿Debo usar Q4_K_M o una cuantización superior con 12 GB?',
            a: 'Usa Q4_K_M para modelos de clase 14B: es la cuantización estándar más grande que deja espacio para contexto en 12 GB. Los modelos más pequeños, como Ornith 9B (5,6 GB por defecto), dejan margen, así que es posible una etiqueta de mayor precisión si la página del modelo la ofrece.',
          },
          {
            q: '¿Puedo usar autocompletado fill-in-the-middle (FIM) con estos modelos en Ollama?',
            a: 'Qwen2.5-Coder 14B admite FIM. Ollama recibe el texto posterior al cursor en el campo <code>suffix</code> de <code>/api/generate</code> en los modelos cuya plantilla lo permite. Revisa la página de Ollama de cada modelo para confirmar el soporte de inserción antes de integrarlo en un editor; para autocompletar, Qwen2.5-Coder es la opción más segura.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejores LLM locales para programar](/es/local-llms/best-local-llms-for-coding) -- ranking completo más allá de 12 GB',
          '[Best MoE Models for Local Coding](/es/prompt-bites/best-moe-models-local-coding) -- modelos de código MoE',
          '[Cursor adquiere Continue.dev: cierre y alternativas](/es/prompt-bites/cursor-pro-vs-continue-dev) -- comparativa de herramientas de código',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    title: 'Melhor LLM local para programação com 12 GB de VRAM?',
    seoTitle: 'Melhor modelo de código para 12 GB VRAM: Gemma 4 12B (2026)',
    metaDescription: 'Gemma 4 12B é o melhor modelo de código para 12 GB de VRAM: 7,7–8,0 GB, 72,0% no LiveCodeBench v6 (Google). Alternativas: Qwen2.5-Coder 14B e Ornith 9B.',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-pt.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Melhor LLM local para programação com 12 GB de VRAM?',
        answer: 'Gemma 4 12B é o melhor modelo de código para uma GPU de 12 GB de VRAM: o download no Ollama tem 7,7–8,0 GB e o Google informa 72,0% no LiveCodeBench v6 para o modelo 12B. O Qwen2.5-Coder 14B (~9 GB) é a alternativa especializada em código. Qwen3.8 27B (18 GB) e Devstral Small 2 (15 GB) não cabem em 12 GB.',
        bullets: [
          'Gemma 4 12B: download de 7,7–8,0 GB, contexto de 256K, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M: ~9 GB, especializado em código, suporta fill-in-the-middle',
          'Ornith 9B: 5,6 GB, licença MIT, feito para programação com agentes',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B (Google, Apache 2.0): download de 7,7–8,0 GB, contexto de 256K, 72,0% no LiveCodeBench v6 (dado do fabricante) — a melhor escolha de código para qualquer GPU de 12 GB',
          'O Qwen2.5-Coder 14B Q4_K_M (~9 GB) continua sendo uma opção sólida especializada em código, mas é de 2024; os Qwen mais novos, como o Qwen3.8 27B (18 GB), exigem mais de 12 GB',
          'Devstral Small 2 (24B, 15 GB) e Qwen3.8 27B (18 GB) só rodam em 12 GB com offload para a CPU, o que reduz muito a velocidade de geração',
          'Aumente a janela de contexto para 8192 ou mais ao programar — a janela padrão trunca arquivos de código reais — e confirme com ollama ps que o modelo está inteiro na GPU',
        ],
      },
      body1: {
        title: 'A melhor escolha de código para 12 GB',
        content: [
          '<strong>Gemma 4 12B é o melhor modelo de código para uma GPU de 12 GB de VRAM: o <a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">download no Ollama</a> tem 7,7–8,0 GB, o que deixa cerca de 4 GB para o cache KV, e o Google informa 72,0% no LiveCodeBench v6 e Elo de 1659 no Codeforces para o modelo 12B.</strong> Ele tem licença Apache 2.0, suporta janela de contexto de 256K e aceita imagens, então você pode colar a captura de tela de um erro ou de um bug de interface. Esses números são do fabricante; não fizemos medições próprias.',
          'O Qwen2.5-Coder 14B Q4_K_M (~9 GB) ainda cabe e continua sendo a escolha especializada em código, com suporte a fill-in-the-middle, mas é um modelo de 2024. O <a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a> (5,6 GB, licença MIT) mira programação com agentes e deixa mais folga para contexto longo. Devstral Small 2 (24B, 15 GB) e Qwen3.8 27B (18 GB) passam de 12 GB e só rodam com offload para a CPU.',
          'Se você tem uma placa de 8 GB, veja <a href="/pt/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">os melhores LLMs para AMD 5700X + RTX 3070 Ti</a> com alternativas de compromisso para 8 GB.',
        ],
        columns: ['Modelo', 'Tamanho do download', 'Ideal para'],
        rows: [
          { 'Modelo': 'Gemma 4 12B', 'Tamanho do download': '7,7–8,0 GB', 'Ideal para': 'Primeira escolha: código, imagens, 256K' },
          { 'Modelo': 'Qwen2.5-Coder 14B Q4_K_M', 'Tamanho do download': '~9 GB', 'Ideal para': 'Especializado em código, fill-in-the-middle' },
          { 'Modelo': 'Ornith 9B', 'Tamanho do download': '5,6 GB', 'Ideal para': 'Código com agentes, folga para contexto longo' },
          { 'Modelo': 'Devstral Small 2 24B', 'Tamanho do download': '15 GB', 'Ideal para': 'Não cabe; exige offload para CPU' },
          { 'Modelo': 'Qwen3.8 27B', 'Tamanho do download': '18 GB', 'Ideal para': 'Não cabe; exige 18 GB+ de memória' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-pt.webp',
        imageCaption: 'Melhores modelos de código para 12 GB de VRAM -- tamanhos de download no Ollama',
      },
      body2: {
        title: 'As configurações que importam para programar',
        content: [
          '<strong>Defina a janela de contexto em pelo menos 8k para programar — uma janela padrão curta trunca arquivos de código de algumas centenas de linhas.</strong> Os ~8 GB de pesos do Gemma 4 12B deixam cerca de 4 GB de uma placa de 12 GB para o cache KV e o runtime; o Qwen2.5-Coder 14B, com ~9 GB, deixa menos, então mantenha o contexto moderado. Defina com <code>OLLAMA_CONTEXT_LENGTH=8192</code> antes de iniciar o servidor, ou com <code>/set parameter num_ctx 8192</code> dentro do <code>ollama run</code>, e rode <code>ollama ps</code> para confirmar que o modelo está na GPU e não dividido com a CPU.',
          'Ative o Flash Attention (<code>OLLAMA_FLASH_ATTENTION=1</code>) e, se precisar de mais contexto, defina <code>OLLAMA_KV_CACHE_TYPE=q8_0</code>, que reduz aproximadamente pela metade a memória do cache KV em relação ao cache f16 padrão, com pequena perda de qualidade. As variáveis de ambiente podem ser combinadas em uma única inicialização.',
          'Para o ranking completo além de 12 GB, veja <a href="/pt/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">o guia dos melhores LLMs locais para programar</a>.',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: 'A largura de banda da memória, e não o tamanho da VRAM, define a velocidade de geração: a RTX 3080 Ti de 12 GB (912 GB/s) gera tokens bem mais rápido que a RTX 3060 de 12 GB (360 GB/s), embora ambas comportem os mesmos modelos. Não medimos tokens por segundo para esta página.' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-pt.webp',
        imageCaption: 'Configurações-chave para programar -- contexto e Flash Attention com 12 GB',
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs de código para 12 GB de VRAM',
        faqs: [
          {
            q: 'Qual é o melhor modelo de código para 12 GB de VRAM?',
            a: 'Gemma 4 12B. O download no Ollama tem 7,7–8,0 GB, ele suporta janela de contexto de 256K e o Google informa 72,0% no LiveCodeBench v6 e Elo de 1659 no Codeforces. O Qwen2.5-Coder 14B Q4_K_M (~9 GB) é a alternativa se você quiser um modelo só de código com suporte a fill-in-the-middle.',
          },
          {
            q: 'Qual é o melhor LLM local para 12 GB de VRAM em geral?',
            a: 'Novamente o Gemma 4 12B: é um modelo multimodal de uso geral (entrada de texto e imagem) com licença Apache 2.0, então um único download de 8 GB cobre conversa, código e capturas de tela. O Ollama também lista uma variante E4B mais leve para quem quer menor consumo.',
          },
          {
            q: 'Qwen3.8 27B e Devstral Small 2 cabem em 12 GB de VRAM?',
            a: 'Não. O Ollama lista qwen3.8:27b com 18 GB e devstral-small-2:24b com 15 GB. Ambos podem rodar com parte do modelo descarregada para a RAM, mas a geração fica muito mais lenta quando camadas saem da GPU; combinam mais com placas de 16–24 GB.',
          },
          {
            q: 'Devo usar Q4_K_M ou uma quantização maior com 12 GB?',
            a: 'Use Q4_K_M para modelos da classe 14B — é a maior quantização padrão que ainda deixa espaço para contexto em 12 GB. Modelos menores, como o Ornith 9B (5,6 GB por padrão), deixam folga, então uma tag de maior precisão é possível quando a página do modelo oferece uma.',
          },
          {
            q: 'Posso usar autocompletar fill-in-the-middle (FIM) com esses modelos no Ollama?',
            a: 'O Qwen2.5-Coder 14B suporta FIM. O Ollama recebe o texto depois do cursor no campo <code>suffix</code> de <code>/api/generate</code> em modelos cujo template permite. Confira a página de cada modelo no Ollama quanto ao suporte a inserção antes de integrá-lo a um editor; para autocompletar, o Qwen2.5-Coder é a escolha mais segura.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhores LLMs locais para programar](/pt/local-llms/best-local-llms-for-coding) -- ranking completo além de 12 GB',
          '[Best MoE Models for Local Coding](/pt/prompt-bites/best-moe-models-local-coding) -- modelos de código MoE',
          '[Cursor adquire o Continue.dev: encerramento e alternativas](/pt/prompt-bites/cursor-pro-vs-continue-dev) -- comparativo de ferramentas de código',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    title: 'ما أفضل نموذج لغوي كبير محلي للبرمجة بـ⁨12⁩ جيجابايت ⁨VRAM⁩؟',
    seoTitle: 'أفضل نموذج برمجة لـ12 GB VRAM: Gemma 4 12B (2026)',
    metaDescription: 'Gemma 4 12B أفضل نموذج برمجة لـ12 GB VRAM: تنزيل 7.7–8.0 GB و72.0% في LiveCodeBench v6 (حسب Google). البدائل: Qwen2.5-Coder 14B وOrnith 9B.',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-ar.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج لغوي كبير محلي للبرمجة بـ12 جيجابايت VRAM؟',
        answer: 'Gemma 4 12B هو أفضل نموذج برمجة لوحدة معالجة رسومية بذاكرة 12 GB VRAM: حجم تنزيله في Ollama بين 7.7 و8.0 GB، وتعلن Google نتيجة 72.0% له في LiveCodeBench v6. أما البديل المتخصص في الشيفرة فهو Qwen2.5-Coder 14B (نحو 9 GB). نموذجا Qwen3.8 27B (18 GB) وDevstral Small 2 (15 GB) لا يتسعان في 12 GB.',
        bullets: [
          'Gemma 4 12B: تنزيل 7.7–8.0 GB، سياق 256K، ترخيص Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M: نحو 9 GB، متخصص في الشيفرة، يدعم fill-in-the-middle',
          'Ornith 9B: ‏5.6 GB، ترخيص MIT، مصمم للبرمجة بالوكلاء',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Gemma 4 12B (من Google، ترخيص Apache 2.0): تنزيل 7.7–8.0 GB، سياق 256K، و72.0% في LiveCodeBench v6 (رقم معلن من الشركة) — الخيار الأول للبرمجة على أي بطاقة بذاكرة 12 GB',
          'يبقى Qwen2.5-Coder 14B Q4_K_M (نحو 9 GB) خيارًا متينًا متخصصًا في الشيفرة، لكنه يعود إلى 2024؛ أما نماذج Qwen الأحدث مثل Qwen3.8 27B (18 GB) فتحتاج أكثر من 12 GB',
          'يعمل Devstral Small 2 (24B، 15 GB) وQwen3.8 27B (18 GB) على 12 GB فقط مع تفريغ جزئي إلى المعالج، ما يبطئ التوليد كثيرًا',
          'ارفع نافذة السياق إلى 8192 أو أكثر عند البرمجة (النافذة الافتراضية تقتطع ملفات المصدر الحقيقية)، وتأكد عبر ollama ps أن النموذج بالكامل على بطاقة الرسوميات',
        ],
      },
      body1: {
        title: 'خيار البرمجة لذاكرة 12 GB',
        content: [
          '<strong>Gemma 4 12B هو أفضل نموذج برمجة لبطاقة بذاكرة 12 GB VRAM: <a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">تنزيل Ollama</a> بحجم 7.7–8.0 GB يترك نحو 4 GB لذاكرة KV المؤقتة، وتعلن Google نتيجة 72.0% في LiveCodeBench v6 وتصنيف Elo قدره 1659 في Codeforces لنموذج 12B.</strong> يعمل بترخيص Apache 2.0 ويدعم نافذة سياق بحجم 256K ويقبل الصور، فيمكنك لصق لقطة شاشة لخطأ أو لمشكلة في الواجهة. هذه الأرقام معلنة من الشركة المصنّعة ولم نجرِ قياسات خاصة بنا.',
          'ما زال Qwen2.5-Coder 14B Q4_K_M (نحو 9 GB) يتسع، ويبقى الخيار المتخصص في الشيفرة مع دعم fill-in-the-middle، لكنه نموذج من 2024. ويستهدف <a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a> (‏5.6 GB، ترخيص MIT) البرمجة بالوكلاء ويترك أكبر مساحة للسياق الطويل. أما Devstral Small 2 (24B، 15 GB) وQwen3.8 27B (18 GB) فيتجاوزان 12 GB ولا يعملان إلا بالتفريغ إلى المعالج.',
          'إن كانت بطاقتك بذاكرة 8 GB فراجع <a href="/ar/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">أفضل النماذج لـ AMD 5700X + RTX 3070 Ti</a> لخيارات الحل الوسط.',
        ],
        columns: ['النموذج', 'حجم التنزيل', 'الأنسب لـ'],
        rows: [
          { 'النموذج': 'Gemma 4 12B', 'حجم التنزيل': '7.7–8.0 GB', 'الأنسب لـ': 'الخيار الأول: برمجة وصور وسياق 256K' },
          { 'النموذج': 'Qwen2.5-Coder 14B Q4_K_M', 'حجم التنزيل': 'نحو 9 GB', 'الأنسب لـ': 'متخصص في الشيفرة، fill-in-the-middle' },
          { 'النموذج': 'Ornith 9B', 'حجم التنزيل': '5.6 GB', 'الأنسب لـ': 'برمجة بالوكلاء ومساحة لسياق طويل' },
          { 'النموذج': 'Devstral Small 2 24B', 'حجم التنزيل': '15 GB', 'الأنسب لـ': 'لا يتسع؛ يحتاج تفريغًا إلى المعالج' },
          { 'النموذج': 'Qwen3.8 27B', 'حجم التنزيل': '18 GB', 'الأنسب لـ': 'لا يتسع؛ يحتاج 18 GB فأكثر' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-ar.webp',
        imageCaption: 'أفضل نماذج البرمجة لذاكرة 12 GB VRAM -- أحجام التنزيل في Ollama',
      },
      body2: {
        title: 'الإعدادات المهمة عند البرمجة',
        content: [
          '<strong>اضبط نافذة السياق على 8k على الأقل عند البرمجة — فالنافذة الافتراضية القصيرة تقتطع ملفات المصدر التي تبلغ بضع مئات من الأسطر.</strong> تترك أوزان Gemma 4 12B البالغة نحو 8 GB قرابة 4 GB من بطاقة 12 GB لذاكرة KV ووقت التشغيل؛ أما Qwen2.5-Coder 14B بنحو 9 GB فيترك أقل، فأبقِ سياقه معتدلًا. اضبطه بـ <code>OLLAMA_CONTEXT_LENGTH=8192</code> قبل تشغيل الخادم، أو بالأمر <code>/set parameter num_ctx 8192</code> داخل <code>ollama run</code>، ثم شغّل <code>ollama ps</code> للتأكد من أن النموذج على بطاقة الرسوميات وغير مقسوم مع المعالج.',
          'فعّل Flash Attention (<code>OLLAMA_FLASH_ATTENTION=1</code>)، وإن احتجت سياقًا أكبر فاضبط <code>OLLAMA_KV_CACHE_TYPE=q8_0</code> الذي يقلل ذاكرة KV إلى نحو النصف مقارنة بالذاكرة المؤقتة الافتراضية f16 مع خسارة بسيطة في الجودة. يمكن الجمع بين متغيرات البيئة في تشغيل واحد.',
          'للاطلاع على الترتيب الكامل فوق 12 GB راجع <a href="/ar/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">دليل أفضل النماذج المحلية للبرمجة</a>.',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: 'عرض نطاق الذاكرة، لا حجم VRAM، هو ما يحدد سرعة التوليد: تولّد RTX 3080 Ti بذاكرة 12 GB (‏912 GB/s) الرموز أسرع بوضوح من RTX 3060 بذاكرة 12 GB (‏360 GB/s) مع أن كلتيهما تستوعبان النماذج نفسها. لم نقس عدد الرموز في الثانية لهذه الصفحة.' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-ar.webp',
        imageCaption: 'الإعدادات المهمة عند البرمجة -- السياق وFlash Attention على 12 GB',
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج البرمجة لذاكرة 12 GB VRAM',
        faqs: [
          {
            q: 'ما أفضل نموذج برمجة لذاكرة 12 GB VRAM؟',
            a: 'Gemma 4 12B. حجم تنزيله في Ollama بين 7.7 و8.0 GB، ويدعم نافذة سياق بحجم 256K، وتعلن Google نتيجة 72.0% في LiveCodeBench v6 وتصنيف Elo قدره 1659 في Codeforces. والبديل هو Qwen2.5-Coder 14B Q4_K_M (نحو 9 GB) إن أردت نموذجًا مخصصًا للشيفرة فقط مع دعم fill-in-the-middle.',
          },
          {
            q: 'ما أفضل نموذج محلي عمومًا لذاكرة 12 GB VRAM؟',
            a: 'Gemma 4 12B أيضًا: فهو نموذج متعدد الوسائط عام الغرض (إدخال نصي وصوري) بترخيص Apache 2.0، فتنزيل واحد بحجم 8 GB يغطي المحادثة والبرمجة ولقطات الشاشة. وتوفّر Ollama أيضًا نسخة E4B أخف لمن يريد حجمًا أصغر.',
          },
          {
            q: 'هل يتسع Qwen3.8 27B وDevstral Small 2 في 12 GB VRAM؟',
            a: 'لا. تذكر Ollama أن qwen3.8:27b بحجم 18 GB وأن devstral-small-2:24b بحجم 15 GB. يمكن تشغيلهما مع تفريغ جزء من النموذج إلى ذاكرة النظام، لكن التوليد يبطؤ كثيرًا حين تغادر الطبقات بطاقة الرسوميات، فهما أنسب لبطاقات 16–24 GB.',
          },
          {
            q: 'هل أستخدم Q4_K_M أم تكميمًا أعلى على 12 GB؟',
            a: 'استخدم Q4_K_M لنماذج فئة 14B — فهو أكبر تكميم قياسي يترك مساحة للسياق على 12 GB. النماذج الأصغر مثل Ornith 9B (‏5.6 GB افتراضيًا) تترك هامشًا، فيمكن اختيار وسم بدقة أعلى إن عرضته صفحة النموذج.',
          },
          {
            q: 'هل يمكنني استخدام الإكمال التلقائي fill-in-the-middle (FIM) مع هذه النماذج في Ollama؟',
            a: 'يدعم Qwen2.5-Coder 14B خاصية FIM. تستقبل Ollama النص الذي يلي المؤشر في الحقل <code>suffix</code> ضمن <code>/api/generate</code> للنماذج التي يدعمها قالبها. تحقق من صفحة كل نموذج في Ollama بشأن دعم الإدراج قبل ربطه بمحرر؛ وللإكمال التلقائي يبقى Qwen2.5-Coder الخيار الأكثر أمانًا.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل النماذج المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding) -- الترتيب الكامل فوق 12 GB',
          '[Best MoE Models for Local Coding](/ar/prompt-bites/best-moe-models-local-coding) -- نماذج برمجة MoE',
          '[استحواذ Cursor على Continue.dev: الإغلاق والبدائل](/ar/prompt-bites/cursor-pro-vs-continue-dev) -- مقارنة أدوات البرمجة',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    title: '12 GB VRAM으로 코딩에 최적인 로컬 LLM은?',
    seoTitle: '12GB VRAM 코딩 최적 모델: Gemma 4 12B (2026)',
    metaDescription: '12GB VRAM 코딩에는 Gemma 4 12B가 최적: 다운로드 7.7–8.0GB, LiveCodeBench v6 72.0%(Google 발표). 대안은 Qwen2.5-Coder 14B와 Ornith 9B.',
    heroImage: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-ko.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    targetKeywords: [
      '12GB VRAM 코딩 LLM',
      'RTX 3060 로컬 LLM 코딩',
      'Qwen2.5-Coder 14B 한국어',
      '12 GB VRAM 최적 AI 모델',
      '로컬 LLM 코드 생성 2026',
    ],
    readTime: '5분 분량',
    quickAnswerTop: {
      ko: {
        question: '12 GB VRAM으로 코딩에 최적인 로컬 LLM은 무엇입니까?',
        answer: '12 GB VRAM GPU에서 가장 좋은 코딩 모델은 Gemma 4 12B입니다. Ollama 다운로드는 7.7–8.0 GB이며, Google은 12B 모델의 LiveCodeBench v6 점수를 72.0%로 발표했습니다. 코드 특화 대안은 Qwen2.5-Coder 14B(약 9 GB)입니다. Qwen3.8 27B(18 GB)와 Devstral Small 2(15 GB)는 12 GB에 들어가지 않습니다.',
        bullets: [
          'Gemma 4 12B: 다운로드 7.7–8.0 GB, 256K 컨텍스트, Apache 2.0',
          'Qwen2.5-Coder 14B Q4_K_M: 약 9 GB, 코드 특화, fill-in-the-middle 지원',
          'Ornith 9B: 5.6 GB, MIT 라이선스, 에이전트형 코딩용',
        ],
        updatedDate: '2026-10',
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
          'Gemma 4 12B(Google, Apache 2.0): 다운로드 7.7–8.0 GB, 256K 컨텍스트, LiveCodeBench v6 72.0%(제조사 발표) — 12 GB GPU라면 최우선 코딩 모델',
          'Qwen2.5-Coder 14B Q4_K_M(약 9 GB)은 여전히 탄탄한 코드 특화 선택지지만 2024년 모델이며, Qwen3.8 27B(18 GB) 같은 최신 Qwen 코더는 12 GB를 넘습니다',
          'Devstral Small 2(24B, 15 GB)와 Qwen3.8 27B(18 GB)는 12 GB에서 CPU 오프로드로만 실행되며 생성 속도가 크게 떨어집니다',
          '코딩에서는 컨텍스트 창을 8192 이상으로 올리세요(기본 창은 실제 소스 파일을 잘라냅니다). ollama ps로 모델이 GPU에 완전히 올라갔는지 확인하세요',
        ],
      },
      body1: {
        title: '12 GB에서 고를 코딩 모델',
        content: [
          '<strong>12 GB VRAM GPU에서 가장 좋은 코딩 모델은 Gemma 4 12B입니다. <a href="https://ollama.com/library/gemma4" class="text-primary hover:underline" rel="noopener">Ollama 다운로드</a>는 7.7–8.0 GB라 KV 캐시용으로 약 4 GB가 남고, Google은 12B 모델의 LiveCodeBench v6 72.0%와 Codeforces Elo 1659를 발표했습니다.</strong> Apache 2.0 라이선스에 256K 컨텍스트 창을 지원하며 이미지 입력도 받아, 오류나 UI 버그 스크린샷을 그대로 붙여 넣을 수 있습니다. 이 벤치마크 수치는 제조사 발표값이며 직접 측정한 것이 아닙니다.',
          'Qwen2.5-Coder 14B Q4_K_M(약 9 GB)도 들어가며 fill-in-the-middle을 지원하는 코드 특화 선택지지만 2024년 모델입니다. <a href="https://ollama.com/library/ornith" class="text-primary hover:underline" rel="noopener">Ornith 9B</a>(5.6 GB, MIT 라이선스)는 에이전트형 코딩을 겨냥하며 긴 컨텍스트를 위한 여유가 가장 큽니다. Devstral Small 2(24B, 15 GB)와 Qwen3.8 27B(18 GB)는 12 GB를 넘어 CPU 오프로드로만 실행됩니다.',
          '8 GB 카드를 쓰신다면 <a href="/ko/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti용 최고의 LLM</a>에서 8 GB 절충안을 확인하세요.',
        ],
        columns: ['모델', '다운로드 크기', '적합한 용도'],
        rows: [
          { '모델': 'Gemma 4 12B', '다운로드 크기': '7.7–8.0 GB', '적합한 용도': '1순위: 코딩, 이미지, 256K' },
          { '모델': 'Qwen2.5-Coder 14B Q4_K_M', '다운로드 크기': '약 9 GB', '적합한 용도': '코드 특화, fill-in-the-middle' },
          { '모델': 'Ornith 9B', '다운로드 크기': '5.6 GB', '적합한 용도': '에이전트형 코딩, 긴 컨텍스트 여유' },
          { '모델': 'Devstral Small 2 24B', '다운로드 크기': '15 GB', '적합한 용도': '안 들어감, CPU 오프로드 필요' },
          { '모델': 'Qwen3.8 27B', '다운로드 크기': '18 GB', '적합한 용도': '안 들어감, 18 GB 이상 필요' },
        ],
        image: '/images/best-local-llm-coding-12gb-vram-model-vram-comparison-hero-ko.webp',
        imageCaption: '12 GB VRAM 최고의 코딩 모델 -- Ollama 다운로드 크기',
      },
      body2: {
        title: '코딩에서 중요한 설정',
        content: [
          '<strong>코딩에서는 컨텍스트 창을 최소 8k로 설정하세요. 짧은 기본 창은 수백 줄짜리 소스 파일을 잘라냅니다.</strong> Gemma 4 12B의 가중치 약 8 GB는 12 GB 카드에서 KV 캐시와 런타임용으로 약 4 GB를 남깁니다. Qwen2.5-Coder 14B는 약 9 GB라 여유가 적으니 컨텍스트를 적당히 유지하세요. 서버 시작 전에 <code>OLLAMA_CONTEXT_LENGTH=8192</code>를 설정하거나 <code>ollama run</code> 안에서 <code>/set parameter num_ctx 8192</code>를 실행한 뒤, <code>ollama ps</code>로 모델이 CPU와 분할되지 않고 GPU에 있는지 확인합니다.',
          'Flash Attention(<code>OLLAMA_FLASH_ATTENTION=1</code>)을 켜고, 컨텍스트가 더 필요하면 <code>OLLAMA_KV_CACHE_TYPE=q8_0</code>을 설정하세요. 기본 f16 캐시보다 KV 캐시 메모리가 대략 절반으로 줄며 품질 저하는 작습니다. 환경 변수는 한 번의 실행에서 함께 쓸 수 있습니다.',
          '12 GB를 넘는 전체 순위는 <a href="/ko/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">코딩용 최고의 로컬 LLM 가이드</a>를 참고하세요.',
        ],
        codeBlock: 'ollama pull gemma4:12b\nollama run gemma4:12b\n\n# code-specialised alternative\nollama pull qwen2.5-coder:14b-instruct-q4_K_M',
        callouts: [{ type: 'tip', text: '생성 속도를 정하는 것은 VRAM 용량이 아니라 메모리 대역폭입니다. RTX 3080 Ti 12 GB(912 GB/s)는 RTX 3060 12 GB(360 GB/s)보다 토큰을 눈에 띄게 빨리 생성하지만, 둘 다 같은 모델을 올릴 수 있습니다. 이 페이지에서는 초당 토큰 수를 측정하지 않았습니다.' }],
        image: '/images/best-local-llm-coding-12gb-vram-coding-settings-hero-ko.webp',
        imageCaption: '코딩에서 중요한 설정 -- 12 GB에서의 컨텍스트와 Flash Attention',
      },
      faq: {
        id: 'faq',
        title: '12 GB VRAM 코딩 LLM 빠른 답변',
        faqs: [
          {
            q: '12 GB VRAM에서 가장 좋은 코딩 모델은 무엇인가요?',
            a: 'Gemma 4 12B입니다. Ollama 다운로드는 7.7–8.0 GB이고 256K 컨텍스트 창을 지원하며, Google은 LiveCodeBench v6 72.0%와 Codeforces Elo 1659를 발표했습니다. fill-in-the-middle을 지원하는 코드 전용 모델을 원하면 Qwen2.5-Coder 14B Q4_K_M(약 9 GB)이 대안입니다.',
          },
          {
            q: '12 GB VRAM에서 전반적으로 가장 좋은 로컬 LLM은 무엇인가요?',
            a: '역시 Gemma 4 12B입니다. Apache 2.0 범용 멀티모달 모델(텍스트와 이미지 입력)이라 8 GB 다운로드 하나로 채팅, 코딩, 스크린샷을 모두 다룹니다. Ollama에는 더 가벼운 E4B 변형도 있습니다.',
          },
          {
            q: 'Qwen3.8 27B와 Devstral Small 2는 12 GB VRAM에 들어가나요?',
            a: '아니요. Ollama는 qwen3.8:27b를 18 GB, devstral-small-2:24b를 15 GB로 표시합니다. 모델 일부를 시스템 RAM으로 오프로드해 실행할 수 있지만, 레이어가 GPU를 벗어나면 생성 속도가 크게 느려지므로 16–24 GB 카드에 더 어울립니다.',
          },
          {
            q: '12 GB에서는 Q4_K_M과 더 높은 양자화 중 무엇을 써야 하나요?',
            a: '14B급 모델에는 Q4_K_M을 쓰세요. 12 GB에서 컨텍스트 여유를 남길 수 있는 가장 큰 표준 양자화입니다. Ornith 9B(기본 5.6 GB) 같은 작은 모델은 여유가 있어, 모델 페이지에 제공되면 더 높은 정밀도의 태그도 쓸 수 있습니다.',
          },
          {
            q: 'Ollama에서 이 모델들로 FIM(fill-in-the-middle) 자동완성을 쓸 수 있나요?',
            a: 'Qwen2.5-Coder 14B는 FIM을 지원합니다. 템플릿이 지원하는 모델이라면 Ollama가 <code>/api/generate</code>의 <code>suffix</code> 필드로 커서 뒤 텍스트를 받습니다. 에디터에 연결하기 전에 각 모델의 Ollama 페이지에서 insert 지원을 확인하세요. 자동완성에는 Qwen2.5-Coder가 더 안전합니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[코딩용 최고의 로컬 LLM](/ko/local-llms/best-local-llms-for-coding) -- 12 GB를 넘는 전체 순위',
          '[Best MoE Models for Local Coding](/ko/prompt-bites/best-moe-models-local-coding) -- MoE 코딩 모델',
          '[Continue.dev, Cursor에 인수: 종료와 대안](/ko/prompt-bites/cursor-pro-vs-continue-dev) -- 코딩 도구 비교',
        ],
      },
    },
  },
}
