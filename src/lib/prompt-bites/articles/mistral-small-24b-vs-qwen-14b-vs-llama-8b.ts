import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-en.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: Which to Run Locally?',
    dateModified: '2026-10-17',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: Tool Calling 2026',
    metaDescription: 'Tool calling, reasoning and VRAM compared: Llama 3.1 8B needs 4.9 GB, Qwen3 14B 9.3 GB (MMLU 81.1%), Mistral Small 24B 14 GB (MMLU 80.7%). Pick by GPU.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [
      'Mistral Small 3.1 24B',
      'Mistral Small 4',
      'Qwen3 14B',
      'Llama 3.1 8B',
    ],
    current_hardware_mentioned: [
      'RTX 4090',
      'RTX 3060 12 GB',
      'RTX 4080 16 GB',
    ],
    educationalLevel: 'Intermediate',
    parentArticle: '/local-llms/qwen-vs-llama-vs-mistral',
    siblingBites: [
      'qwen-14b-vs-llama-8b',
      'best-14b-models-coding',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: which should I run locally?',
        answer: 'Pick by VRAM: Llama 3.1 8B (4.9 GB), Qwen3 14B (9.3 GB), Mistral Small 24B (14 GB). Qwen3 14B and Mistral Small 24B score within half a point on MMLU in vendor-reported base-model numbers (81.1 vs 80.7), so a 12 GB card running Qwen3 14B gives up little; Mistral Small 24B needs a 16 GB card.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM, ~45 tok/s on RTX 4090, MMLU 66.7% — best for 6–8 GB cards',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 81.1% — sweet spot for 12 GB cards',
          'Mistral Small 3.1 24B Q4_K_M: 14 GB VRAM, ~20 tok/s, MMLU 80.7% — only for 16 GB+ cards',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Mistral Small 24B vs. Qwen3 14B vs. Llama 3.1 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.1 8B (4,9 GB), Qwen3 14B (9,3 GB), Mistral Small 24B (14 GB). Qwen3 14B und Mistral Small 24B liegen bei den vom Hersteller berichteten Basismodell-Werten auf MMLU nur einen halben Punkt auseinander (81,1 vs. 80,7); eine 12-GB-Karte mit Qwen3 14B verliert also wenig. Mistral Small 24B braucht eine 16-GB-Karte.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66.7 % — beste Wahl für 6–8 GB Karten',
          'Qwen3 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 81.1 % — optimaler Punkt für 12 GB Karten',
          'Mistral Small 3.1 24B Q4_K_M: 14 GB VRAM, ~20 tok/s, MMLU 80.7 % — nur für Karten mit 16 GB+',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B : lequel lancer en local ?',
        answer: 'Choisissez selon la VRAM : Llama 3.1 8B (4,9 Go), Qwen3 14B (9,3 Go), Mistral Small 24B (14 Go). Qwen3 14B et Mistral Small 24B sont à un demi-point sur MMLU dans les chiffres de modèles de base publiés par les éditeurs (81,1 contre 80,7) : une carte de 12 Go avec Qwen3 14B ne perd presque rien ; Mistral Small 24B exige une carte de 16 Go.',
        bullets: [
          'Llama 3.1 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66.7 % — meilleur choix pour cartes 6–8 Go',
          'Qwen3 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 81.1 % — point idéal pour cartes 12 Go',
          'Mistral Small 3.1 24B Q4_K_M : 14 Go VRAM, ~20 tok/s, MMLU 80.7 % — uniquement pour cartes 16 Go+',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'Mistral Small 24B・Qwen3 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 24B（14 GB）。各社公表のベースモデル値ではQwen3 14BとMistral Small 24BのMMLUの差は0.5ポイント以内（81.1対80.7）なので、12 GBカードでQwen3 14Bを動かしても失うものは小さく、Mistral Small 24Bには16 GBカードが必要です。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.7% — 6〜8 GB カードに最適',
          'Qwen3 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 81.1% — 12 GB カードのベストチョイス',
          'Mistral Small 3.1 24B Q4_K_M：14 GB VRAM、~20 tok/s、MMLU 80.7% — 16 GB+ カードのみ対応',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: 'Mistral Small 24B 对比 Qwen3 14B 对比 Llama 3.1 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 24B（14 GB）。按厂商公布的基础模型数据，Qwen3 14B 与 Mistral Small 24B 的 MMLU 相差不到半分（81.1 对 80.7），所以 12 GB 显卡运行 Qwen3 14B 损失很小；Mistral Small 24B 需要 16 GB 显卡。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.7%——适合 6–8 GB 显卡',
          'Qwen3 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 81.1%——12 GB 显卡最佳选择',
          'Mistral Small 3.1 24B Q4_K_M：14 GB 显存，约 20 tok/s，MMLU 80.7%——仅适用于 16 GB+ 显卡',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B at Q4_K_M uses 4.9 GB VRAM and runs at ~45 tok/s on RTX 4090 — the only viable model in this group for 6 GB cards',
          'Qwen3 14B at Q4_K_M uses 9.3 GB and scores 81.1% MMLU — the sweet spot for 12 GB cards like the RTX 3060 12 GB or RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B at Q4_K_M uses 14 GB and reaches 80.7% MMLU — only feasible on 16 GB cards (RTX 4080, RTX 3090, RTX 4090)',
          'On 12 GB, run Qwen3 14B; for coding, a code-tuned 14B such as Qwen2.5-Coder 14B. With 16 GB+, Mistral Small 24B is the larger-model option. Below 10 GB: Llama 3.1 8B.',
          'All three models list tool calling on Ollama. Qwen3 14B adds a switchable thinking mode, Mistral Small 3.2 revised its function-calling template, and Llama 3.1 8B is the lightest option for simple single-tool calls.',
        ],
      },
      body1: {
        title: 'VRAM Requirements: Which Card Runs Which Model',
        content: [
          'The choice between these three models is primarily a VRAM decision. At Q4_K_M quantization: Llama 3.1 8B uses 4.9 GB, Qwen3 14B uses 9.3 GB, and Mistral Small 3.1 24B uses 14 GB. This maps directly onto three GPU tiers: 6–8 GB cards (Llama 3.1 8B only), 10–12 GB cards (Qwen3 14B), and 16+ GB cards (Mistral Small 24B).',
          'Speed on RTX 4090 at Q4_K_M: Llama 3.1 8B runs at approximately 45 tok/s, Qwen3 14B at ~28 tok/s, and Mistral Small 3.1 24B at ~20 tok/s. On an RTX 3060 12 GB, only Llama 3.1 8B and Qwen3 14B fit — Mistral Small 24B requires at minimum a 16 GB card to avoid spilling to CPU RAM. These tok/s figures are rough single-user estimates, not PromptQuorum benchmarks.',
          'The MMLU spread is narrower than the VRAM spread. In vendor-reported base-model numbers, Qwen3 14B scores 81.1 and Mistral Small 24B 80.7, both about 14 points above Llama 3.1 8B at 66.7. The figures come from different model cards and evaluation setups, so treat the 0.4-point difference as a tie.',
        ],
        columns: [
          'Model',
          'VRAM (Q4_K_M)',
          'Speed (RTX 4090)',
          'MMLU',
          'Minimum GPU',
        ],
        rows: [
          { Model: 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'Speed (RTX 4090)': '~45 tok/s', MMLU: '66.7%', 'Minimum GPU': 'RTX 3060 6 GB' },
          { Model: 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'Speed (RTX 4090)': '~28 tok/s', MMLU: '81.1%', 'Minimum GPU': 'RTX 3060 12 GB' },
          { Model: 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 GB', 'Speed (RTX 4090)': '~20 tok/s', MMLU: '80.7%', 'Minimum GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Quality vs VRAM: When Each Model Wins',
        content: [
          '<strong>Llama 3.1 8B wins on VRAM efficiency.</strong> At 4.9 GB Q4_K_M it is the only model in this group that fits a 6 GB card with headroom for a 4k token context window. It scores 66.7% on MMLU and delivers snappy interactive responses (~45 tok/s on RTX 4090). For chat, quick coding queries, and daily use on constrained hardware, it is the correct pick.',
          '<strong>Qwen3 14B wins at 12 GB VRAM.</strong> Its base model scores 81.1 on MMLU against 66.7 for Llama 3.1 8B, and it fits within the most common prosumer GPU tier. For coding on a 12 GB card, a code-tuned 14B such as Qwen2.5-Coder 14B is the practical choice; see the 14B coding comparison under Related Reading.',
          '<strong>Mistral Small 24B is the larger-model option for 16 GB cards.</strong> Its base model scores 80.7 on MMLU, level with Qwen3 14B on that benchmark, from a 14 GB download instead of 9.3 GB. The extra size is the reason to consider it, not a measured MMLU lead, so test both on your own prompts before committing a 16 GB card. On an RTX 4090 24 GB it also fits at a higher-bit quantization.',
          'For a direct 14B-class comparison see the <a href="/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs Llama 8B</a> comparison, which includes coding benchmark detail.',
        ],
      },
      body3: {
        title: 'Tool Calling and Reasoning: How the Three Models Compare',
        content: [
          'All three models support tool (function) calling when served through Ollama: the library pages for llama3.1 (8b), qwen3 (including 14b) and mistral-small each carry the "tools" tag. The practical differences are how reliably each model picks the right tool and arguments, and whether it can reason before it answers.',
          '<strong>Reasoning.</strong> Qwen3 14B is the only one of the three with a built-in thinking mode: it is on by default, writes a reasoning block before the answer, and can be switched off with /no_think or enable_thinking=False. That helps on multi-step problems but adds tokens and latency to every tool call, so agent loops often run it with thinking off. Mistral Small 3.x and Llama 3.1 8B answer directly, without a separate reasoning mode.',
          '<strong>Tool calling.</strong> Mistral Small 3.2 (the mid-2025 update to 3.1) ships a more robust function-calling template and, per its model card, scores 69.06% on MMLU Pro and 92.90% on HumanEval Plus (Pass@5). Ollama\'s mistral-small:24b tag is labelled Mistral Small 3 (14 GB), so check which version a tag contains before comparing results. In a third-party snapshot of the Berkeley Function Calling Leaderboard, Qwen3-14B (FC) scores 41.03 and Mistral-Small-2506 (FC) 37.15; no comparable Llama 3.1 8B entry was found. Treat these as directional only: leaderboard versions and scoring change, and PromptQuorum did not run these tests. Llama 3.1 8B supports tools and has the largest context window of the three on Ollama (128K versus 32K for Mistral Small and 40K for Qwen3 14B), but at 8B parameters it is likely to be less reliable on multi-step tool chains.',
          '<strong>Newer releases.</strong> Mistral Small 4 (2026) is a 119B-parameter mixture-of-experts model with 6B active parameters and a download of roughly 242 GB, so it is not a drop-in successor for a single consumer GPU. The Qwen3.5 small series (0.8B to 9B, 2026) is reported to run its 9B model in about 6.6 GB with native tool calling on Ollama; no 14B size was found, so Qwen3 14B stays the 14B pick here. Qwen3.6 (2026) ships as 27B dense and 35B-A3B mixture-of-experts models, outside the 12 GB class this page targets.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers: Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Can Mistral Small 24B run on an RTX 3060 12 GB?',
            a: 'No. Mistral Small 24B at Q4_K_M is a 14 GB download, exceeding the RTX 3060 12 GB. For that card, Qwen3 14B Q4_K_M (9.3 GB) is the correct choice — it leaves about 2.7 GB for context.',
          },
          {
            q: 'Is Mistral Small 24B better than Qwen3 14B for coding?',
            a: 'We have no like-for-like coding benchmark for both models, so do not assume the larger one is better. Qwen2.5-Coder-14B-Instruct scores 89.6% on HumanEval in Qwen\'s report (vendor-reported), fits in 12 GB VRAM and is the practical coding choice there. With a 16 GB card, try Mistral Small 24B on your own code before switching.',
          },
          {
            q: 'Which model should I use on a 16 GB GPU like the RTX 4080?',
            a: 'Mistral Small 24B at Q4_K_M (14 GB) fits with about 2 GB headroom — enough for a modest context window. On MMLU it is level with Qwen3 14B (80.7 vs 81.1, base models, different sources), so the reason to choose it is the larger model, not a benchmark lead.',
          },
          {
            q: 'How does Llama 3.1 8B compare to Llama 3.2?',
            a: 'Llama 3.2 8B was not released — the 3.2 series introduced 1B, 3B, and multimodal 11B/90B variants only. Llama 3.1 8B remains the standard 8B Llama reference model. For text-only use at 6–8 GB VRAM, Llama 3.1 8B is the current recommended pick in this size class.',
          },
          {
            q: 'Which of Mistral Small 24B, Qwen 14B and Llama 8B is best for tool calling?',
            a: 'In a third-party snapshot of the Berkeley Function Calling Leaderboard, Qwen3-14B (FC) scores 41.03 and Mistral-Small-2506 (FC) 37.15; no comparable Llama 3.1 8B entry was found. Mistral Small 3.2 also revised its function-calling template. With 12 GB of VRAM use Qwen3 14B; with 16 GB or more, Mistral Small 24B is the larger option. All three list tools support on Ollama, so test your own tool schemas before relying on any score.',
          },
          {
            q: 'Should I use Qwen 2.5 14B or Qwen3 14B?',
            a: 'Qwen3 14B, unless you specifically need Qwen2.5-Coder. Qwen3 14B is the newer model, adds a switchable thinking mode, and its model card states it outperforms Qwen2.5-Instruct in non-thinking mode on math, code and commonsense reasoning. It runs at 9.3 GB in Q4_K_M, so the 12 GB VRAM guidance on this page applies.',
          },
          {
            q: 'Is there a newer Mistral Small than 3.1?',
            a: 'Yes. Mistral Small 3.2 (mid-2025) improves instruction following and function calling over 3.1 at the same 24B size, with Apache-2.0 weights. Mistral Small 4 (2026) is a 119B mixture-of-experts model with about 242 GB of weights, so it does not fit a 16 GB card.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Reading',
        items: [
          '[Best 14B Models for Coding](/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B vs Llama 3 8B: Which Runs Better Locally?](/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: Full Comparison](/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
    last_full_refresh: '2026-10-17',
  },
  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-de.webp',
    title: 'Mistral Small 24B vs. Qwen3 14B vs. Llama 3.1 8B: Welches lokal ausführen?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: Tool Calling 2026',
    metaDescription: 'Tool Calling, Reasoning und VRAM im Vergleich: Llama 3.1 8B braucht 4,9 GB, Qwen3 14B 9,3 GB (MMLU 81,1 %), Mistral Small 24B 14 GB (MMLU 80,7 %).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Mistral Small 24B vs. Qwen3 14B vs. Llama 3.1 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.1 8B (4,9 GB), Qwen3 14B (9,3 GB), Mistral Small 24B (14 GB). Qwen3 14B und Mistral Small 24B liegen bei den vom Hersteller berichteten Basismodell-Werten auf MMLU nur einen halben Punkt auseinander (81,1 vs. 80,7); eine 12-GB-Karte mit Qwen3 14B verliert also wenig. Mistral Small 24B braucht eine 16-GB-Karte.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66,7 % — beste Wahl für 6–8 GB Karten',
          'Qwen3 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 81,1 % — optimaler Punkt für 12 GB Karten',
          'Mistral Small 3.1 24B Q4_K_M: 14 GB VRAM, ~20 tok/s, MMLU 80,7 % — nur für Karten mit 16 GB+',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B in Q4_K_M verwendet 4,9 GB VRAM und läuft auf RTX 4090 mit ~45 tok/s — das einzige tragfähige Modell dieser Gruppe für 6 GB Karten',
          'Qwen3 14B in Q4_K_M verwendet 9,3 GB und erzielt 81,1 % MMLU — der optimale Punkt für 12 GB Karten wie RTX 3060 12 GB oder RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B in Q4_K_M verwendet 14 GB und erreicht 80,7 % MMLU — nur auf 16 GB Karten machbar (RTX 4080, RTX 3090, RTX 4090)',
          'Mit 12 GB nehmen Sie Qwen3 14B; für Coding ein code-optimiertes 14B wie Qwen2.5-Coder 14B. Ab 16 GB ist Mistral Small 24B die Option mit dem größeren Modell. Unter 10 GB: Llama 3.1 8B.',
          'Alle drei Modelle listen Tool Calling auf Ollama. Qwen3 14B bietet einen schaltbaren Denkmodus, Mistral Small 3.2 überarbeitete sein Function-Calling-Template, und Llama 3.1 8B ist die leichteste Option für einfache Einzel-Tool-Aufrufe.',
        ],
      },
      body1: {
        title: 'VRAM-Anforderungen: Welche Karte führt welches Modell aus',
        content: [
          'Die Wahl zwischen diesen drei Modellen ist primär eine VRAM-Entscheidung. Bei Q4_K_M-Quantisierung: Llama 3.1 8B verwendet 4,9 GB, Qwen3 14B 9,3 GB und Mistral Small 3.1 24B 14 GB. Dies ordnet sich direkt drei GPU-Tiers zu: 6–8 GB Karten (nur Llama 3.1 8B), 10–12 GB Karten (Qwen3 14B) und 16+ GB Karten (Mistral Small 24B).',
          'Geschwindigkeit auf RTX 4090 bei Q4_K_M: Llama 3.1 8B läuft bei etwa 45 tok/s, Qwen3 14B bei ~28 tok/s und Mistral Small 3.1 24B bei ~20 tok/s. Auf einer RTX 3060 12 GB passen nur Llama 3.1 8B und Qwen3 14B — Mistral Small 24B benötigt mindestens eine 16 GB Karte, um kein CPU-RAM zu belegen. Die tok/s-Werte sind grobe Schätzungen für einen Einzelnutzer, keine PromptQuorum-Benchmarks.',
          'Der MMLU-Abstand ist kleiner als der VRAM-Abstand. Nach den vom Hersteller berichteten Basismodell-Werten erzielt Qwen3 14B 81,1 und Mistral Small 24B 80,7 — beide rund 14 Punkte über Llama 3.1 8B mit 66,7. Die Werte stammen aus verschiedenen Modellkarten und Auswertungen; die Differenz von 0,4 Punkten ist daher als Gleichstand zu werten.',
        ],
        columns: [
          'Modell',
          'VRAM (Q4_K_M)',
          'Geschwindigkeit (RTX 4090)',
          'MMLU',
          'Mindest-GPU',
        ],
        rows: [
          { Modell: 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 GB', 'Geschwindigkeit (RTX 4090)': '~45 tok/s', MMLU: '66,7 %', 'Mindest-GPU': 'RTX 3060 6 GB' },
          { Modell: 'Qwen3 14B', 'VRAM (Q4_K_M)': '9,3 GB', 'Geschwindigkeit (RTX 4090)': '~28 tok/s', MMLU: '81,1 %', 'Mindest-GPU': 'RTX 3060 12 GB' },
          { Modell: 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 GB', 'Geschwindigkeit (RTX 4090)': '~20 tok/s', MMLU: '80,7 %', 'Mindest-GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Qualität vs. VRAM: Wann jedes Modell gewinnt',
        content: [
          '<strong>Llama 3.1 8B gewinnt bei VRAM-Effizienz.</strong> Mit 4,9 GB Q4_K_M ist es das einzige Modell dieser Gruppe, das auf eine 6 GB Karte passt und dabei noch Puffer für ein 4k-Token-Kontextfenster lässt. Es erzielt 66,7 % auf MMLU und liefert schnelle interaktive Antworten (~45 tok/s auf RTX 4090). Für Chat, schnelle Coding-Anfragen und den täglichen Einsatz auf eingeschränkter Hardware ist es die richtige Wahl.',
          '<strong>Qwen3 14B gewinnt bei 12 GB VRAM.</strong> Das Basismodell erzielt 81,1 auf MMLU gegenüber 66,7 für Llama 3.1 8B und passt in die verbreitetste Prosumer-GPU-Klasse. Für Coding auf einer 12-GB-Karte ist ein code-optimiertes 14B wie Qwen2.5-Coder 14B die praktische Wahl; siehe den 14B-Coding-Vergleich unter Weiterführende Literatur.',
          '<strong>Mistral Small 24B ist die Option mit dem größeren Modell für 16-GB-Karten.</strong> Das Basismodell erzielt 80,7 auf MMLU, auf diesem Benchmark gleichauf mit Qwen3 14B, bei 14 GB Download statt 9,3 GB. Die zusätzliche Größe ist der Grund, es in Betracht zu ziehen, kein gemessener MMLU-Vorsprung; testen Sie beide mit Ihren eigenen Prompts, bevor Sie eine 16-GB-Karte dafür einplanen. Auf einer RTX 4090 24 GB passt es auch in einer höherbittigen Quantisierung.',
          'Für einen direkten 14B-Klasse-Vergleich siehe den <a href="/de/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs. Llama 8B</a>-Vergleich, der Coding-Benchmark-Details enthält.',
        ],
      },
      body3: {
        title: 'Tool Calling und Reasoning: So schneiden die drei Modelle ab',
        content: [
          'Alle drei Modelle unterstützen Tool Calling (Function Calling) über Ollama: Die Bibliotheksseiten von llama3.1 (8b), qwen3 (inklusive 14b) und mistral-small tragen jeweils das Tag „tools“. Die praktischen Unterschiede liegen darin, wie zuverlässig ein Modell das richtige Tool samt Argumenten wählt und ob es vor der Antwort nachdenken kann.',
          '<strong>Reasoning.</strong> Qwen3 14B ist das einzige der drei Modelle mit eingebautem Denkmodus: Er ist standardmäßig aktiv, schreibt vor der Antwort einen Reasoning-Block und lässt sich mit /no_think oder enable_thinking=False abschalten. Das hilft bei mehrstufigen Problemen, kostet aber bei jedem Tool-Aufruf zusätzliche Tokens und Latenz; Agenten-Schleifen laufen daher oft ohne Denkmodus. Mistral Small 3.x und Llama 3.1 8B antworten direkt, ohne separaten Reasoning-Modus.',
          '<strong>Tool Calling.</strong> Mistral Small 3.2 (das Update von Mitte 2025 auf 3.1) bringt ein robusteres Function-Calling-Template und erzielt laut Model Card 69,06 % auf MMLU Pro sowie 92,90 % auf HumanEval Plus (Pass@5). Das Ollama-Tag mistral-small:24b ist als Mistral Small 3 (14 GB) ausgewiesen; prüfen Sie daher, welche Version ein Tag enthält, bevor Sie Ergebnisse vergleichen. In einem Drittanbieter-Snapshot des Berkeley Function Calling Leaderboard erreicht Qwen3-14B (FC) 41,03 und Mistral-Small-2506 (FC) 37,15; für Llama 3.1 8B wurde kein vergleichbarer Eintrag gefunden. Betrachten Sie die Werte nur als Richtwert: Leaderboard-Versionen und Bewertung ändern sich, und PromptQuorum hat diese Tests nicht selbst durchgeführt. Llama 3.1 8B unterstützt Tools und hat auf Ollama das größte Kontextfenster der drei (128K gegenüber 32K bei Mistral Small und 40K bei Qwen3 14B), dürfte bei 8B Parametern aber bei mehrstufigen Tool-Ketten weniger zuverlässig sein.',
          '<strong>Neuere Releases.</strong> Mistral Small 4 (2026) ist ein Mixture-of-Experts-Modell mit 119B Parametern, 6B aktiven Parametern und einem Download von rund 242 GB – kein direkter Nachfolger für eine einzelne Consumer-GPU. Die Qwen3.5-Small-Serie (0,8B bis 9B, 2026) läuft laut Berichten mit dem 9B-Modell in etwa 6,6 GB und nativem Tool Calling auf Ollama; eine 14B-Größe wurde nicht gefunden, daher bleibt Qwen3 14B hier die 14B-Wahl. Qwen3.6 (2026) erscheint als dichtes 27B-Modell und als Mixture-of-Experts-Modell 35B-A3B und liegt damit außerhalb der 12-GB-Klasse, auf die diese Seite zielt.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten: Mistral Small 24B vs. Qwen 14B vs. Llama 8B',
        faqs: [
          {
            q: 'Kann Mistral Small 24B auf einer RTX 3060 12 GB laufen?',
            a: 'Nein. Mistral Small 24B in Q4_K_M ist ein 14-GB-Download und übersteigt die RTX 3060 12 GB. Für diese Karte ist Qwen3 14B Q4_K_M (9,3 GB) die richtige Wahl — es lässt etwa 2,7 GB für den Kontext.',
          },
          {
            q: 'Ist Mistral Small 24B besser als Qwen3 14B für Coding?',
            a: 'Wir haben keinen direkten Coding-Benchmark für beide Modelle, nehmen Sie also nicht an, dass das größere besser ist. Qwen2.5-Coder-14B-Instruct erzielt in Qwens Bericht 89,6 % auf HumanEval (Herstellerangabe), passt in 12 GB VRAM und ist dort die praktische Coding-Wahl. Mit einer 16-GB-Karte probieren Sie Mistral Small 24B an Ihrem eigenen Code aus, bevor Sie wechseln.',
          },
          {
            q: 'Welches Modell sollte ich auf einer 16 GB GPU wie der RTX 4080 verwenden?',
            a: 'Mistral Small 24B in Q4_K_M (14 GB) passt mit etwa 2 GB Puffer — genug für ein bescheidenes Kontextfenster. Auf MMLU liegt es gleichauf mit Qwen3 14B (80,7 vs. 81,1, Basismodelle, verschiedene Quellen); der Grund für die Wahl ist also das größere Modell, kein Benchmark-Vorsprung.',
          },
          {
            q: 'Wie unterscheidet sich Llama 3.1 8B von Llama 3.2?',
            a: 'Llama 3.2 8B wurde nicht veröffentlicht — die 3.2-Serie führte nur 1B, 3B und multimodale 11B/90B-Varianten ein. Llama 3.1 8B bleibt das Standard-8B-Llama-Referenzmodell. Für rein textbasierten Einsatz bei 6–8 GB VRAM ist Llama 3.1 8B die aktuell empfohlene Wahl in dieser Größenklasse.',
          },
          {
            q: 'Welches Modell ist für Tool Calling am besten: Mistral Small 24B, Qwen 14B oder Llama 8B?',
            a: 'In einem Drittanbieter-Snapshot des Berkeley Function Calling Leaderboard erreicht Qwen3-14B (FC) 41,03 und Mistral-Small-2506 (FC) 37,15; für Llama 3.1 8B wurde kein vergleichbarer Eintrag gefunden. Mistral Small 3.2 überarbeitete zudem sein Function-Calling-Template. Mit 12 GB VRAM nehmen Sie Qwen3 14B, ab 16 GB ist Mistral Small 24B die größere Option. Alle drei listen Tools-Unterstützung auf Ollama – testen Sie daher Ihre eigenen Tool-Schemas, bevor Sie sich auf einen Score verlassen.',
          },
          {
            q: 'Sollte ich Qwen 2.5 14B oder Qwen3 14B verwenden?',
            a: 'Qwen3 14B, sofern Sie nicht gezielt Qwen2.5-Coder benötigen. Qwen3 14B ist das neuere Modell, bietet einen schaltbaren Denkmodus, und laut Model Card übertrifft es Qwen2.5-Instruct im Nicht-Denkmodus bei Mathematik, Code und Alltagslogik. Es läuft mit 9,3 GB in Q4_K_M, sodass die 12-GB-VRAM-Empfehlung dieser Seite gilt.',
          },
          {
            q: 'Gibt es ein neueres Mistral Small als 3.1?',
            a: 'Ja. Mistral Small 3.2 (Mitte 2025) verbessert gegenüber 3.1 Instruktionsbefolgung und Function Calling bei gleicher Größe von 24B, mit Apache-2.0-Gewichten. Mistral Small 4 (2026) ist ein Mixture-of-Experts-Modell mit 119B Parametern und etwa 242 GB Gewichten und passt daher nicht auf eine 16-GB-Karte.',
          },
        ],
      },
      relatedReading: {
        title: 'Weiterführende Literatur',
        items: [
          '[Beste 14B-Modelle für Coding](/de/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B vs. Llama 3 8B: Welches läuft lokal besser?](/de/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen vs. Llama vs. Mistral: Der große Vergleich](/de/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-fr.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B : lequel lancer en local ?',
    seoTitle: 'Mistral Small 24B, Qwen 14B, Llama 8B : tool calling 2026',
    metaDescription: 'Appel d\'outils, raisonnement et VRAM comparés : Llama 3.1 8B exige 4,9 Go, Qwen3 14B 9,3 Go (MMLU 81,1 %), Mistral Small 24B 14 Go (MMLU 80,7 %).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B : lequel lancer en local ?',
        answer: 'Choisissez selon la VRAM : Llama 3.1 8B (4,9 Go), Qwen3 14B (9,3 Go), Mistral Small 24B (14 Go). Qwen3 14B et Mistral Small 24B sont à un demi-point sur MMLU dans les chiffres de modèles de base publiés par les éditeurs (81,1 contre 80,7) : une carte de 12 Go avec Qwen3 14B ne perd presque rien ; Mistral Small 24B exige une carte de 16 Go.',
        bullets: [
          'Llama 3.1 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66,7 % — meilleur choix pour cartes 6–8 Go',
          'Qwen3 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 81,1 % — point idéal pour cartes 12 Go',
          'Mistral Small 3.1 24B Q4_K_M : 14 Go VRAM, ~20 tok/s, MMLU 80,7 % — uniquement pour cartes 16 Go+',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B en Q4_K_M utilise 4,9 Go de VRAM et tourne à ~45 tok/s sur RTX 4090 — le seul modèle de ce groupe viable sur cartes 6 Go',
          'Qwen3 14B en Q4_K_M utilise 9,3 Go et obtient 81,1 % MMLU — le point idéal pour les cartes 12 Go comme la RTX 3060 12 Go ou la RTX 4060 Ti 16 Go',
          'Mistral Small 3.1 24B en Q4_K_M utilise 14 Go et atteint 80,7 % MMLU — faisable uniquement sur cartes 16 Go (RTX 4080, RTX 3090, RTX 4090)',
          'Avec 12 Go, utilisez Qwen3 14B ; pour le code, un 14B spécialisé comme Qwen2.5-Coder 14B. À partir de 16 Go, Mistral Small 24B est l\'option du plus grand modèle. Sous 10 Go : Llama 3.1 8B.',
          'Les trois modèles affichent l\'appel d\'outils sur Ollama. Qwen3 14B ajoute un mode de réflexion activable, Mistral Small 3.2 a révisé son modèle d\'appel de fonctions, et Llama 3.1 8B est l\'option la plus légère pour des appels simples à un seul outil.',
        ],
      },
      body1: {
        title: 'Besoins en VRAM : quelle carte fait tourner quel modèle',
        content: [
          'Le choix entre ces trois modèles est avant tout une décision de VRAM. En quantification Q4_K_M : Llama 3.1 8B utilise 4,9 Go, Qwen3 14B utilise 9,3 Go, et Mistral Small 3.1 24B utilise 14 Go. Cela correspond directement à trois tiers de GPU : cartes 6–8 Go (Llama 3.1 8B uniquement), cartes 10–12 Go (Qwen3 14B), et cartes 16+ Go (Mistral Small 24B).',
          'Vitesse sur RTX 4090 en Q4_K_M : Llama 3.1 8B tourne à environ 45 tok/s, Qwen3 14B à ~28 tok/s, et Mistral Small 3.1 24B à ~20 tok/s. Sur une RTX 3060 12 Go, seuls Llama 3.1 8B et Qwen3 14B rentrent — Mistral Small 24B nécessite au minimum une carte 16 Go pour éviter de déborder sur la RAM CPU. Ces valeurs tok/s sont des estimations approximatives pour un seul utilisateur, pas des benchmarks PromptQuorum.',
          'L\'écart de MMLU est plus étroit que l\'écart de VRAM. Dans les chiffres de modèles de base publiés par les éditeurs, Qwen3 14B obtient 81,1 et Mistral Small 24B 80,7, soit environ 14 points au-dessus de Llama 3.1 8B (66,7). Ces chiffres viennent de fiches de modèle et de protocoles différents : l\'écart de 0,4 point est à considérer comme une égalité.',
        ],
        columns: [
          'Modèle',
          'VRAM (Q4_K_M)',
          'Vitesse (RTX 4090)',
          'MMLU',
          'GPU minimum',
        ],
        rows: [
          { 'Modèle': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 Go', 'Vitesse (RTX 4090)': '~45 tok/s', MMLU: '66,7 %', 'GPU minimum': 'RTX 3060 6 Go' },
          { 'Modèle': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9,3 Go', 'Vitesse (RTX 4090)': '~28 tok/s', MMLU: '81,1 %', 'GPU minimum': 'RTX 3060 12 Go' },
          { 'Modèle': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 Go', 'Vitesse (RTX 4090)': '~20 tok/s', MMLU: '80,7 %', 'GPU minimum': 'RTX 4080 16 Go' },
        ],
      },
      body2: {
        title: 'Qualité vs VRAM : quand chaque modèle gagne',
        content: [
          '<strong>Llama 3.1 8B gagne en efficacité VRAM.</strong> À 4,9 Go Q4_K_M, c\'est le seul modèle de ce groupe qui tient sur une carte 6 Go avec de la marge pour une fenêtre de contexte de 4k tokens. Il obtient 66,7 % sur MMLU et délivre des réponses interactives rapides (~45 tok/s sur RTX 4090). Pour le chat, les requêtes de coding rapides et l\'usage quotidien sur matériel contraint, c\'est le bon choix.',
          '<strong>Qwen3 14B l\'emporte à 12 Go de VRAM.</strong> Son modèle de base obtient 81,1 sur MMLU contre 66,7 pour Llama 3.1 8B, et il tient dans la classe de GPU prosumer la plus courante. Pour coder sur une carte de 12 Go, un 14B spécialisé comme Qwen2.5-Coder 14B est le choix pratique ; voir le comparatif 14B pour le code dans Lectures associées.',
          '<strong>Mistral Small 24B est l\'option du plus grand modèle pour les cartes de 16 Go.</strong> Son modèle de base obtient 80,7 sur MMLU, au niveau de Qwen3 14B sur ce benchmark, pour 14 Go à télécharger au lieu de 9,3 Go. La taille supplémentaire est la raison de l\'envisager, pas une avance mesurée sur MMLU : testez les deux sur vos propres prompts avant de dédier une carte de 16 Go. Sur une RTX 4090 24 Go, il tient aussi dans une quantification à plus de bits.',
          'Pour une comparaison directe de la classe 14B, consultez la <a href="/fr/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">comparaison Qwen 14B vs Llama 8B</a>, qui inclut le détail des benchmarks de coding.',
        ],
      },
      body3: {
        title: 'Appel d\'outils et raisonnement : comparaison des trois modèles',
        content: [
          'Les trois modèles prennent en charge l\'appel d\'outils (function calling) via Ollama : les pages de la bibliothèque pour llama3.1 (8b), qwen3 (dont 14b) et mistral-small portent chacune le tag « tools ». Les différences pratiques tiennent à la fiabilité avec laquelle chaque modèle choisit le bon outil et les bons arguments, et à sa capacité de raisonner avant de répondre.',
          '<strong>Raisonnement.</strong> Qwen3 14B est le seul des trois à disposer d\'un mode de réflexion intégré : activé par défaut, il rédige un bloc de raisonnement avant la réponse et peut être désactivé avec /no_think ou enable_thinking=False. C\'est utile sur les problèmes à plusieurs étapes, mais cela ajoute des tokens et de la latence à chaque appel d\'outil ; les boucles d\'agents tournent donc souvent sans réflexion. Mistral Small 3.x et Llama 3.1 8B répondent directement, sans mode de raisonnement distinct.',
          '<strong>Appel d\'outils.</strong> Mistral Small 3.2 (la mise à jour de mi-2025 de la 3.1) fournit un modèle d\'appel de fonctions plus robuste et, selon sa fiche de modèle, obtient 69,06 % sur MMLU Pro et 92,90 % sur HumanEval Plus (Pass@5). Le tag mistral-small:24b d\'Ollama est présenté comme Mistral Small 3 (14 Go) : vérifiez donc la version qu\'un tag contient avant de comparer des résultats. Dans un relevé tiers du Berkeley Function Calling Leaderboard, Qwen3-14B (FC) obtient 41,03 et Mistral-Small-2506 (FC) 37,15 ; aucune entrée comparable n\'a été trouvée pour Llama 3.1 8B. Considérez ces chiffres comme indicatifs : les versions du classement et le barème évoluent, et PromptQuorum n\'a pas réalisé ces tests. Llama 3.1 8B prend en charge les outils et offre la plus grande fenêtre de contexte des trois sur Ollama (128K contre 32K pour Mistral Small et 40K pour Qwen3 14B), mais avec 8B de paramètres il est probablement moins fiable sur les chaînes d\'outils à plusieurs étapes.',
          '<strong>Versions plus récentes.</strong> Mistral Small 4 (2026) est un modèle à mélange d\'experts de 119B de paramètres, dont 6B actifs, pour un téléchargement d\'environ 242 Go : ce n\'est pas un successeur direct pour une seule carte graphique grand public. La série Qwen3.5 Small (0,8B à 9B, 2026) ferait tourner son modèle 9B en environ 6,6 Go avec appel d\'outils natif sur Ollama ; aucune taille 14B n\'a été trouvée, Qwen3 14B reste donc le choix 14B ici. Qwen3.6 (2026) sort en modèle dense 27B et en modèle à mélange d\'experts 35B-A3B, au-delà de la classe 12 Go visée par cette page.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides : Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24B peut-il fonctionner sur une RTX 3060 12 Go ?',
            a: 'Non. Mistral Small 24B en Q4_K_M pèse 14 Go à télécharger, ce qui dépasse la RTX 3060 12 Go. Pour cette carte, Qwen3 14B Q4_K_M (9,3 Go) est le bon choix — il laisse environ 2,7 Go pour le contexte.',
          },
          {
            q: 'Mistral Small 24B est-il meilleur que Qwen3 14B pour le coding ?',
            a: 'Nous n\'avons pas de benchmark de code comparable pour les deux modèles ; ne supposez donc pas que le plus grand est meilleur. Qwen2.5-Coder-14B-Instruct obtient 89,6 % sur HumanEval dans le rapport de Qwen (chiffre éditeur), tient dans 12 Go de VRAM et reste le choix pratique pour coder. Avec une carte de 16 Go, essayez Mistral Small 24B sur votre propre code avant de changer.',
          },
          {
            q: 'Quel modèle utiliser sur un GPU 16 Go comme la RTX 4080 ?',
            a: 'Mistral Small 24B en Q4_K_M (14 Go) tient avec environ 2 Go de marge — assez pour une fenêtre de contexte modeste. Sur MMLU il est au niveau de Qwen3 14B (80,7 contre 81,1, modèles de base, sources différentes) : la raison de le choisir est le modèle plus grand, pas une avance en benchmark.',
          },
          {
            q: 'Comment Llama 3.1 8B se compare-t-il à Llama 3.2 ?',
            a: 'Llama 3.2 8B n\'a pas été publié — la série 3.2 a introduit uniquement les variantes 1B, 3B et multimodales 11B/90B. Llama 3.1 8B reste le modèle de référence 8B Llama standard. Pour un usage texte uniquement à 6–8 Go de VRAM, Llama 3.1 8B est le choix recommandé actuel dans cette classe de taille.',
          },
          {
            q: 'Lequel de Mistral Small 24B, Qwen 14B et Llama 8B est le meilleur pour l\'appel d\'outils ?',
            a: 'Dans un relevé tiers du Berkeley Function Calling Leaderboard, Qwen3-14B (FC) obtient 41,03 et Mistral-Small-2506 (FC) 37,15 ; aucune entrée comparable n\'a été trouvée pour Llama 3.1 8B. Mistral Small 3.2 a aussi révisé son modèle d\'appel de fonctions. Avec 12 Go de VRAM, prenez Qwen3 14B ; à partir de 16 Go, Mistral Small 24B est l\'option plus grande. Les trois affichent la prise en charge des outils sur Ollama : testez vos propres schémas d\'outils avant de vous fier à un score.',
          },
          {
            q: 'Faut-il utiliser Qwen 2.5 14B ou Qwen3 14B ?',
            a: 'Qwen3 14B, sauf si vous avez précisément besoin de Qwen2.5-Coder. Qwen3 14B est le modèle plus récent, ajoute un mode de réflexion activable, et sa fiche indique qu\'il surpasse Qwen2.5-Instruct en mode sans réflexion en mathématiques, code et raisonnement de bon sens. Il tient en 9,3 Go en Q4_K_M : les recommandations de cette page pour 12 Go de VRAM s\'appliquent.',
          },
          {
            q: 'Existe-t-il un Mistral Small plus récent que la 3.1 ?',
            a: 'Oui. Mistral Small 3.2 (mi-2025) améliore le suivi des instructions et l\'appel de fonctions par rapport à la 3.1, à taille identique de 24B, avec des poids sous licence Apache 2.0. Mistral Small 4 (2026) est un modèle à mélange d\'experts de 119B de paramètres, avec environ 242 Go de poids : il ne tient pas sur une carte de 16 Go.',
          },
        ],
      },
      relatedReading: {
        title: 'Lectures associées',
        items: [
          '[Meilleurs modèles 14B pour le code](/fr/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B vs Llama 3 8B : lequel tourne mieux en local ?](/fr/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral : comparatif complet](/fr/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-ja.webp',
    title: 'Mistral Small 24B・Qwen3 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
    seoTitle: 'Mistral Small 24B・Qwen 14B・Llama 8B：ツール呼び出し比較2026',
    metaDescription: 'ツール呼び出し・推論・VRAMを比較：Llama 3.1 8Bは4.9 GB、Qwen3 14Bは9.3 GB（MMLU 81.1%）、Mistral Small 24Bは14 GB（MMLU 80.7%）。',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'Mistral Small 24B・Qwen3 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 24B（14 GB）。各社公表のベースモデル値ではQwen3 14BとMistral Small 24BのMMLUの差は0.5ポイント以内（81.1対80.7）なので、12 GBカードでQwen3 14Bを動かしても失うものは小さく、Mistral Small 24Bには16 GBカードが必要です。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.7% — 6〜8 GB カードに最適',
          'Qwen3 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 81.1% — 12 GB カードのベストチョイス',
          'Mistral Small 3.1 24B Q4_K_M：14 GB VRAM、~20 tok/s、MMLU 80.7% — 16 GB+ カードのみ対応',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B Q4_K_Mは4.9 GB VRAMを使用しRTX 4090上で~45 tok/sで動作 — このグループで6 GBカードに対応できる唯一のモデル',
          'Qwen3 14B Q4_K_Mは9.3 GBを使用しMMLU 81.1%を記録 — RTX 3060 12 GBやRTX 4060 Ti 16 GBなど12 GBカードの最適解',
          'Mistral Small 3.1 24B Q4_K_Mは14 GBを使用しMMLU 80.7%を達成 — 16 GBカード（RTX 4080、RTX 3090、RTX 4090）のみで実行可能',
          '12 GBならQwen3 14B、コーディングならQwen2.5-Coder 14Bのようなコード特化14Bを。16 GB以上なら、より大きなモデルの選択肢としてMistral Small 24B。10 GB未満はLlama 3.1 8B。',
          '3モデルともOllamaでツール呼び出し対応と表示されています。Qwen3 14Bは切り替え可能な思考モードを備え、Mistral Small 3.2は関数呼び出しテンプレートを改訂し、Llama 3.1 8Bは単純な単一ツール呼び出しに最も軽量な選択肢です。',
        ],
      },
      body1: {
        title: 'VRAM要件：どのカードがどのモデルを動かせるか',
        content: [
          'この3モデルの選択は主にVRAMの問題です。Q4_K_M量子化で：Llama 3.1 8Bは4.9 GB、Qwen3 14Bは9.3 GB、Mistral Small 3.1 24Bは14 GBを使用します。これは3つのGPUティアに直接対応します：6〜8 GBカード（Llama 3.1 8Bのみ）、10〜12 GBカード（Qwen3 14B）、16 GB以上のカード（Mistral Small 24B）。',
          'RTX 4090でのQ4_K_M速度：Llama 3.1 8Bは約45 tok/s、Qwen3 14Bは~28 tok/s、Mistral Small 3.1 24Bは~20 tok/sで動作します。RTX 3060 12 GBではLlama 3.1 8BとQwen3 14Bのみ収まります — Mistral Small 24BはCPU RAMへのスピルを避けるため最低でも16 GBカードが必要です。このtok/sの値は単一ユーザー向けの概算であり、PromptQuorumのベンチマークではありません。',
          'MMLUの差はVRAMの差より小さいです。各社公表のベースモデル値では、Qwen3 14Bが81.1、Mistral Small 24Bが80.7で、どちらもLlama 3.1 8Bの66.7を約14ポイント上回ります。数値は異なるモデルカードと評価条件によるため、0.4ポイントの差は同等とみなしてください。',
        ],
        columns: [
          'モデル',
          'VRAM (Q4_K_M)',
          '速度 (RTX 4090)',
          'MMLU',
          '最低GPU',
        ],
        rows: [
          { 'モデル': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', MMLU: '66.7%', '最低GPU': 'RTX 3060 6 GB' },
          { 'モデル': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', MMLU: '81.1%', '最低GPU': 'RTX 3060 12 GB' },
          { 'モデル': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 GB', '速度 (RTX 4090)': '~20 tok/s', MMLU: '80.7%', '最低GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '品質対VRAM：各モデルが勝つ場面',
        content: [
          '<strong>Llama 3.1 8BはVRAM効率で勝ります。</strong> Q4_K_Mで4.9 GBと、4kトークンのコンテキストウィンドウ用の余裕を持って6 GBカードに収まる唯一のモデルです。MMLUで66.7%を記録し、素早いインタラクティブな応答（RTX 4090で~45 tok/s）を提供します。制限されたハードウェアでのチャット、クイックコーディングクエリ、日常使用に最適です。',
          '<strong>Qwen3 14Bは12 GB VRAMで優位です。</strong>ベースモデルのMMLUは81.1で、Llama 3.1 8Bの66.7を上回り、最も一般的なプロシューマーGPUのクラスに収まります。12 GBカードでのコーディングには、Qwen2.5-Coder 14Bのようなコード特化14Bが実用的な選択です。関連記事の14Bコーディング比較をご覧ください。',
          '<strong>Mistral Small 24Bは、16 GBカード向けの大きなモデルの選択肢です。</strong>ベースモデルのMMLUは80.7で、このベンチマークではQwen3 14Bと同水準ですが、ダウンロードは9.3 GBではなく14 GBです。検討する理由は追加のサイズであり、測定されたMMLUの優位ではないため、16 GBカードを割り当てる前に両方を自分のプロンプトで試してください。RTX 4090 24 GBなら、より高ビットの量子化でも収まります。',
          '14Bクラスの直接比較については、コーディングベンチマーク詳細を含む<a href="/ja/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B対Llama 8B</a>の比較をご覧ください。',
        ],
      },
      body3: {
        title: 'ツール呼び出しと推論：3モデルの比較',
        content: [
          '3モデルとも、Ollama経由でツール（関数）呼び出しに対応しています。llama3.1（8b）、qwen3（14bを含む）、mistral-smallのライブラリページにはいずれも「tools」タグが付いています。実用上の違いは、各モデルが正しいツールと引数をどれだけ確実に選べるか、そして回答前に推論できるかどうかです。',
          '<strong>推論。</strong>3モデルのうち思考モードを内蔵しているのはQwen3 14Bだけです。デフォルトで有効で、回答の前に推論ブロックを出力し、/no_thinkまたはenable_thinking=Falseで無効にできます。複数ステップの問題には有効ですが、ツール呼び出しのたびにトークン数とレイテンシが増えるため、エージェントのループでは思考をオフにして使うことが多くなります。Mistral Small 3.xとLlama 3.1 8Bは、別個の推論モードを持たず直接回答します。',
          '<strong>ツール呼び出し。</strong>Mistral Small 3.2（3.1の2025年中頃の更新）はより堅牢な関数呼び出しテンプレートを備え、モデルカードによればMMLU Proで69.06%、HumanEval Plusで92.90%（Pass@5）です。Ollamaのmistral-small:24bタグはMistral Small 3（14 GB）と表記されているため、結果を比較する前にタグがどのバージョンかを確認してください。第三者によるBerkeley Function Calling Leaderboardのスナップショットでは、Qwen3-14B（FC）が41.03、Mistral-Small-2506（FC）が37.15で、Llama 3.1 8Bの比較可能なエントリは見つかりませんでした。数値は目安にとどめてください。リーダーボードのバージョンや採点は変わり、PromptQuorumはこれらのテストを実施していません。Llama 3.1 8Bはツールに対応し、Ollama上で3モデル中最大のコンテキストウィンドウ（128K。Mistral Smallは32K、Qwen3 14Bは40K）を持ちますが、8Bパラメータでは複数ステップのツール連鎖で信頼性が低い可能性があります。',
          '<strong>新しいリリース。</strong>Mistral Small 4（2026年）は119Bパラメータ（アクティブ6B）のMixture-of-Expertsモデルで、ダウンロードは約242 GBのため、一般向けGPU1枚の後継にはなりません。Qwen3.5 Smallシリーズ（0.8B〜9B、2026年）は、9Bモデルが約6.6 GBで動作し、Ollamaでネイティブのツール呼び出しに対応すると報告されています。14Bサイズは見つからなかったため、14Bクラスの選択肢は引き続きQwen3 14Bです。Qwen3.6（2026年）は27B密モデルと35B-A3B Mixture-of-Expertsモデルとして提供され、このページが対象とする12 GBクラスの範囲外です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問：Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24BはRTX 3060 12 GBで動作しますか？',
            a: 'いいえ。Mistral Small 24BのQ4_K_Mは14 GBのダウンロードで、RTX 3060 12 GBを超えます。そのカードにはQwen3 14B Q4_K_M（9.3 GB）が適切で、コンテキスト用に約2.7 GBの余裕が残ります。',
          },
          {
            q: 'Mistral Small 24BはコーディングでQwen3 14Bより優れていますか？',
            a: '両モデルを同条件で比較したコーディングのベンチマークはないため、大きいほうが優れていると決めつけないでください。Qwen2.5-Coder-14B-InstructはQwenのレポートでHumanEval 89.6%（各社公表値）で、12 GB VRAMに収まり、実用的なコーディングの選択肢です。16 GBカードなら、切り替える前にMistral Small 24Bを自分のコードで試してください。',
          },
          {
            q: 'RTX 4080のような16 GB GPUではどのモデルを使うべきですか？',
            a: 'Mistral Small 24BのQ4_K_M（14 GB）は約2 GBの余裕で収まり、控えめなコンテキストウィンドウには十分です。MMLUではQwen3 14Bと同水準（80.7対81.1、ベースモデル、出典は異なる）なので、選ぶ理由はベンチマークの優位ではなく、より大きなモデルである点です。',
          },
          {
            q: 'Llama 3.1 8BとLlama 3.2の違いは何ですか？',
            a: 'Llama 3.2 8Bはリリースされていません — 3.2シリーズは1B、3B、マルチモーダル11B/90Bバリアントのみを導入しました。Llama 3.1 8Bは標準的な8B Llamaリファレンスモデルのままです。6〜8 GB VRAMでのテキストのみの使用には、Llama 3.1 8Bがこのサイズクラスで現在推奨される選択肢です。',
          },
          {
            q: 'ツール呼び出しにはMistral Small 24B、Qwen 14B、Llama 8Bのどれが最適ですか？',
            a: '第三者によるBerkeley Function Calling Leaderboardのスナップショットでは、Qwen3-14B（FC）が41.03、Mistral-Small-2506（FC）が37.15で、Llama 3.1 8Bの比較可能なエントリは見つかりませんでした。Mistral Small 3.2は関数呼び出しテンプレートも改訂しています。VRAM 12 GBならQwen3 14B、16 GB以上ならより大きなMistral Small 24Bが選択肢です。3モデルともOllamaでツール対応と表示されているため、スコアに頼る前に自分のツールスキーマで試してください。',
          },
          {
            q: 'Qwen 2.5 14BとQwen3 14Bのどちらを使うべきですか？',
            a: 'Qwen2.5-Coderが特に必要な場合を除き、Qwen3 14Bです。Qwen3 14Bはより新しいモデルで、切り替え可能な思考モードを備え、モデルカードでは非思考モードでも数学・コード・常識推論でQwen2.5-Instructを上回るとされています。Q4_K_Mで9.3 GBなので、このページの12 GB VRAMの目安がそのまま当てはまります。',
          },
          {
            q: '3.1より新しいMistral Smallはありますか？',
            a: 'はい。Mistral Small 3.2（2025年中頃）は、同じ24Bサイズで3.1より指示追従と関数呼び出しが改善され、重みはApache 2.0です。Mistral Small 4（2026年）は119BのMixture-of-Expertsモデルで重みは約242 GBあり、16 GBカードには収まりません。',
          },
        ],
      },
      relatedReading: {
        title: '関連記事',
        items: [
          '[コーディング向け最適14Bモデル](/ja/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B対Llama 3 8B：ローカルでどちらが優れているか？](/ja/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen対Llama対Mistral：完全比較](/ja/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-zh.webp',
    title: 'Mistral Small 24B 对比 Qwen3 14B 对比 Llama 3.1 8B：本地运行选哪个？',
    seoTitle: 'Mistral Small 24B、Qwen 14B、Llama 8B：工具调用对比2026',
    metaDescription: '工具调用、推理与显存对比：Llama 3.1 8B 需 4.9 GB，Qwen3 14B 需 9.3 GB（MMLU 81.1%），Mistral Small 24B 需 14 GB（MMLU 80.7%）。',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'Mistral Small 24B 对比 Qwen3 14B 对比 Llama 3.1 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 24B（14 GB）。按厂商公布的基础模型数据，Qwen3 14B 与 Mistral Small 24B 的 MMLU 相差不到半分（81.1 对 80.7），所以 12 GB 显卡运行 Qwen3 14B 损失很小；Mistral Small 24B 需要 16 GB 显卡。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.7%——适合 6–8 GB 显卡',
          'Qwen3 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 81.1%——12 GB 显卡最佳选择',
          'Mistral Small 3.1 24B Q4_K_M：14 GB 显存，约 20 tok/s，MMLU 80.7%——仅适用于 16 GB+ 显卡',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B Q4_K_M 使用 4.9 GB 显存，在 RTX 4090 上运行约 45 tok/s——该组中唯一适合 6 GB 显卡的模型',
          'Qwen3 14B Q4_K_M 使用 9.3 GB，MMLU 得分 81.1%——RTX 3060 12 GB 或 RTX 4060 Ti 16 GB 等 12 GB 显卡的最优解',
          'Mistral Small 3.1 24B Q4_K_M 使用 14 GB，MMLU 达到约 81%——仅在 16 GB 显卡（RTX 4080、RTX 3090、RTX 4090）上可行',
          '12 GB 用 Qwen3 14B；编程可选 Qwen2.5-Coder 14B 这类代码专用 14B。16 GB 以上，Mistral Small 24B 是更大模型的选择。低于 10 GB：Llama 3.1 8B。',
          '三款模型在 Ollama 上均标注支持工具调用。Qwen3 14B 带有可切换的思考模式，Mistral Small 3.2 修订了函数调用模板，Llama 3.1 8B 是简单单工具调用中最轻量的选择。',
        ],
      },
      body1: {
        title: '显存要求：哪款显卡运行哪个模型',
        content: [
          '这三个模型之间的选择主要是显存决策。在 Q4_K_M 量化下：Llama 3.1 8B 使用 4.9 GB，Qwen3 14B 使用 9.3 GB，Mistral Small 3.1 24B 使用 14 GB。这直接对应三个 GPU 层级：6–8 GB 显卡（仅 Llama 3.1 8B）、10–12 GB 显卡（Qwen3 14B）和 16 GB+ 显卡（Mistral Small 24B）。',
          'RTX 4090 上 Q4_K_M 速度：Llama 3.1 8B 约 45 tok/s，Qwen3 14B 约 28 tok/s，Mistral Small 3.1 24B 约 20 tok/s。RTX 3060 12 GB 上只有 Llama 3.1 8B 和 Qwen3 14B 能放下——Mistral Small 24B 至少需要 16 GB 显卡以避免溢出到 CPU 内存。这些 tok/s 数值是单用户的粗略估计，并非 PromptQuorum 的基准测试。',
          'MMLU 的差距小于显存的差距。按厂商公布的基础模型数据，Qwen3 14B 为 81.1，Mistral Small 24B 为 80.7，都比 Llama 3.1 8B 的 66.7 高约 14 分。这些数字来自不同的模型卡和评测设置，因此 0.4 分的差异应视为持平。',
        ],
        columns: [
          '模型',
          '显存 (Q4_K_M)',
          '速度 (RTX 4090)',
          'MMLU',
          '最低 GPU',
        ],
        rows: [
          { '模型': 'Llama 3.1 8B', '显存 (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', MMLU: '66.7%', '最低 GPU': 'RTX 3060 6 GB' },
          { '模型': 'Qwen3 14B', '显存 (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', MMLU: '81.1%', '最低 GPU': 'RTX 3060 12 GB' },
          { '模型': 'Mistral Small 3.1 24B', '显存 (Q4_K_M)': '14 GB', '速度 (RTX 4090)': '~20 tok/s', MMLU: '80.7%', '最低 GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '质量对比显存：各模型的优势场景',
        content: [
          '<strong>Llama 3.1 8B 在显存效率上胜出。</strong>Q4_K_M 下仅需 4.9 GB，是该组中唯一能装入 6 GB 显卡并为 4k token 上下文窗口留有余量的模型。MMLU 得分 66.7%，在 RTX 4090 上提供约 45 tok/s 的快速交互响应。对于在受限硬件上进行聊天、快速编程查询和日常使用，这是正确的选择。',
          '<strong>Qwen3 14B 在 12 GB 显存下胜出。</strong>其基础模型 MMLU 为 81.1，高于 Llama 3.1 8B 的 66.7，并适合最常见的专业消费级 GPU 档次。在 12 GB 显卡上编程，Qwen2.5-Coder 14B 这类代码专用 14B 是务实之选；请参阅相关阅读中的 14B 编程对比。',
          '<strong>Mistral Small 24B 是 16 GB 显卡上更大模型的选择。</strong>其基础模型 MMLU 为 80.7，在该基准上与 Qwen3 14B 持平，但下载为 14 GB 而非 9.3 GB。考虑它的理由是更大的体量，而不是实测的 MMLU 领先，因此在投入 16 GB 显卡之前，请用你自己的提示词测试两者。在 RTX 4090 24 GB 上，它也可使用更高位数的量化。',
          '关于 14B 级直接比较，请参阅<a href="/zh/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B 对比 Llama 8B</a>比较，其中包含编程基准测试详情。',
        ],
      },
      body3: {
        title: '工具调用与推理：三款模型如何对比',
        content: [
          '三款模型通过 Ollama 运行时都支持工具（函数）调用：llama3.1（8b）、qwen3（含 14b）和 mistral-small 的模型库页面均带有“tools”标签。实际差异在于各模型选对工具和参数的可靠程度，以及能否在回答前先推理。',
          '<strong>推理。</strong>三款模型中只有 Qwen3 14B 内置思考模式：默认开启，在回答前输出推理块，可用 /no_think 或 enable_thinking=False 关闭。这有助于多步问题，但每次工具调用都会增加 token 与延迟，因此智能体循环通常关闭思考运行。Mistral Small 3.x 与 Llama 3.1 8B 直接作答，没有单独的推理模式。',
          '<strong>工具调用。</strong>Mistral Small 3.2（2025 年中对 3.1 的更新）带来更稳健的函数调用模板，据其模型卡，MMLU Pro 为 69.06%，HumanEval Plus 为 92.90%（Pass@5）。Ollama 的 mistral-small:24b 标签标注为 Mistral Small 3（14 GB），因此比较结果前请确认标签对应的版本。在第三方对 Berkeley Function Calling Leaderboard 的快照中，Qwen3-14B（FC）为 41.03，Mistral-Small-2506（FC）为 37.15；未找到 Llama 3.1 8B 的可比条目。这些数字仅供参考：榜单版本与评分会变化，且 PromptQuorum 并未自行运行这些测试。Llama 3.1 8B 支持工具，并在 Ollama 上拥有三者中最大的上下文窗口（128K，Mistral Small 为 32K，Qwen3 14B 为 40K），但 8B 参数在多步工具链上可能不够可靠。',
          '<strong>较新的发布。</strong>Mistral Small 4（2026 年）是 119B 参数（6B 激活）的混合专家模型，下载约 242 GB，因此不是单张消费级显卡的直接后继。据报道，Qwen3.5 Small 系列（0.8B 至 9B，2026 年）的 9B 模型约 6.6 GB 即可运行，并在 Ollama 上原生支持工具调用；未发现 14B 规格，因此 14B 档仍以 Qwen3 14B 为准。Qwen3.6（2026 年）以 27B 稠密模型和 35B-A3B 混合专家模型发布，超出本页面向的 12 GB 档。',
        ],
      },
      faq: {
        id: 'faq',
        title: '快速解答：Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24B 能在 RTX 3060 12 GB 上运行吗？',
            a: '不能。Mistral Small 24B 的 Q4_K_M 下载为 14 GB，超过 RTX 3060 12 GB。对这张显卡，Qwen3 14B Q4_K_M（9.3 GB）是正确选择，可为上下文留出约 2.7 GB。',
          },
          {
            q: 'Mistral Small 24B 在编程方面比 Qwen3 14B 更好吗？',
            a: '我们没有两款模型同条件的编程基准，所以不要认为更大的就更好。Qwen2.5-Coder-14B-Instruct 在 Qwen 的报告中 HumanEval 为 89.6%（厂商公布），可放入 12 GB 显存，是实用的编程选择。若有 16 GB 显卡，换用前请先用自己的代码试试 Mistral Small 24B。',
          },
          {
            q: '在 RTX 4080 等 16 GB GPU 上应该使用哪个模型？',
            a: 'Mistral Small 24B 的 Q4_K_M（14 GB）约有 2 GB 余量，足够一个适度的上下文窗口。在 MMLU 上它与 Qwen3 14B 持平（80.7 对 81.1，基础模型，来源不同），选择它的理由是更大的模型，而不是基准领先。',
          },
          {
            q: 'Llama 3.1 8B 与 Llama 3.2 有何区别？',
            a: 'Llama 3.2 8B 并未发布——3.2 系列仅引入了 1B、3B 以及多模态 11B/90B 变体。Llama 3.1 8B 仍是标准的 8B Llama 参考模型。对于 6–8 GB 显存的纯文本使用，Llama 3.1 8B 是该尺寸类别中当前推荐的选择。',
          },
          {
            q: 'Mistral Small 24B、Qwen 14B 和 Llama 8B 中，哪个工具调用最好？',
            a: '在第三方对 Berkeley Function Calling Leaderboard 的快照中，Qwen3-14B（FC）为 41.03，Mistral-Small-2506（FC）为 37.15；未找到 Llama 3.1 8B 的可比条目。Mistral Small 3.2 也修订了函数调用模板。显存 12 GB 选 Qwen3 14B，16 GB 及以上则可选更大的 Mistral Small 24B。三者在 Ollama 上均标注支持工具，因此依赖任何分数之前，请先用自己的工具模式测试。',
          },
          {
            q: '应该用 Qwen 2.5 14B 还是 Qwen3 14B？',
            a: '选 Qwen3 14B，除非你明确需要 Qwen2.5-Coder。Qwen3 14B 是较新的模型，带有可切换的思考模式，其模型卡称在非思考模式下于数学、代码和常识推理上优于 Qwen2.5-Instruct。它在 Q4_K_M 下占 9.3 GB，因此本页针对 12 GB 显存的建议同样适用。',
          },
          {
            q: '有比 3.1 更新的 Mistral Small 吗？',
            a: '有。Mistral Small 3.2（2025 年中）在同为 24B 的规模下，指令遵循和函数调用优于 3.1，权重采用 Apache 2.0 许可。Mistral Small 4（2026 年）是 119B 混合专家模型，权重约 242 GB，无法放入 16 GB 显卡。',
          },
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[编程最佳14B模型](/zh/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B 对比 Llama 3 8B：哪款本地运行更好？](/zh/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen 对比 Llama 对比 Mistral：完整对比](/zh/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-pt.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: qual rodar localmente?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: tool calling 2026',
    metaDescription: 'Tool calling, raciocínio e VRAM comparados: Llama 3.1 8B usa 4,9 GB, Qwen3 14B 9,3 GB (MMLU 81,1%), Mistral Small 24B 14 GB (MMLU 80,7%). Escolha pela GPU.',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: qual devo rodar localmente?',
        answer: 'Escolha pela VRAM: Llama 3.1 8B (4,9 GB), Qwen3 14B (9,3 GB), Mistral Small 24B (14 GB). Qwen3 14B e Mistral Small 24B ficam a meio ponto no MMLU nos números de modelos base divulgados pelos fabricantes (81,1 contra 80,7), então uma placa de 12 GB com Qwen3 14B perde pouco; o Mistral Small 24B exige uma de 16 GB.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB de VRAM, ~45 tok/s na RTX 4090, MMLU 66,7% — melhor para placas de 6–8 GB',
          'Qwen3 14B Q4_K_M: 9,3 GB de VRAM, ~28 tok/s, MMLU 81,1% — ponto ideal para placas de 12 GB',
          'Mistral Small 3.1 24B Q4_K_M: 14 GB de VRAM, ~20 tok/s, MMLU 80,7% — apenas para placas de 16 GB ou mais',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B em Q4_K_M usa 4,9 GB de VRAM e roda a ~45 tok/s na RTX 4090 — o único modelo viável deste grupo para placas de 6 GB',
          'Qwen3 14B em Q4_K_M usa 9,3 GB e pontua 81,1% no MMLU — o ponto ideal para placas de 12 GB como RTX 3060 12 GB ou RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B em Q4_K_M usa 14 GB e alcança 80,7% no MMLU — viável apenas em placas de 16 GB (RTX 4080, RTX 3090, RTX 4090)',
          'Com 12 GB, use o Qwen3 14B; para programar, um 14B especializado como o Qwen2.5-Coder 14B. Com 16 GB ou mais, o Mistral Small 24B é a opção do modelo maior. Abaixo de 10 GB: Llama 3.1 8B.',
          'Os três modelos listam chamadas de ferramentas no Ollama. O Qwen3 14B traz um modo de raciocínio alternável, o Mistral Small 3.2 revisou seu template de function calling e o Llama 3.1 8B é a opção mais leve para chamadas simples a uma única ferramenta.',
        ],
      },
      body1: {
        title: 'Requisitos de VRAM: qual placa roda qual modelo',
        content: [
          'A escolha entre esses três modelos é principalmente uma decisão de VRAM. Em quantização Q4_K_M: Llama 3.1 8B usa 4,9 GB, Qwen3 14B usa 9,3 GB e Mistral Small 3.1 24B usa 14 GB. Isso se corresponde diretamente a três níveis de GPU: placas de 6–8 GB (apenas Llama 3.1 8B), placas de 10–12 GB (Qwen3 14B) e placas de 16+ GB (Mistral Small 24B).',
          'Velocidade na RTX 4090 em Q4_K_M: Llama 3.1 8B roda a aproximadamente 45 tok/s, Qwen3 14B a ~28 tok/s e Mistral Small 3.1 24B a ~20 tok/s. Em uma RTX 3060 12 GB, apenas Llama 3.1 8B e Qwen3 14B cabem — Mistral Small 24B requer no mínimo uma placa de 16 GB para evitar derramamento para a RAM da CPU. Esses valores de tok/s são estimativas aproximadas para um único usuário, não benchmarks da PromptQuorum.',
          'A diferença no MMLU é menor que a diferença de VRAM. Nos números de modelos base divulgados pelos fabricantes, o Qwen3 14B marca 81,1 e o Mistral Small 24B 80,7, ambos cerca de 14 pontos acima do Llama 3.1 8B (66,7). Os números vêm de fichas de modelo e protocolos diferentes, então a diferença de 0,4 ponto deve ser tratada como empate.',
        ],
        columns: [
          'Modelo',
          'VRAM (Q4_K_M)',
          'Velocidade (RTX 4090)',
          'MMLU',
          'GPU mínima',
        ],
        rows: [
          { Modelo: 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 GB', 'Velocidade (RTX 4090)': '~45 tok/s', MMLU: '66,7%', 'GPU mínima': 'RTX 3060 6 GB' },
          { Modelo: 'Qwen3 14B', 'VRAM (Q4_K_M)': '9,3 GB', 'Velocidade (RTX 4090)': '~28 tok/s', MMLU: '81,1%', 'GPU mínima': 'RTX 3060 12 GB' },
          { Modelo: 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 GB', 'Velocidade (RTX 4090)': '~20 tok/s', MMLU: '80,7%', 'GPU mínima': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Qualidade vs VRAM: quando cada modelo ganha',
        content: [
          '<strong>Llama 3.1 8B ganha em eficiência de VRAM.</strong> Com 4,9 GB Q4_K_M, é o único modelo deste grupo que cabe em uma placa de 6 GB com margem para uma janela de contexto de 4k tokens. Pontua 66,7% no MMLU e oferece respostas interativas rápidas (~45 tok/s na RTX 4090). Para chat, consultas rápidas de codificação e uso diário em hardware limitado, é a escolha correta.',
          '<strong>O Qwen3 14B vence com 12 GB de VRAM.</strong> Seu modelo base marca 81,1 no MMLU contra 66,7 do Llama 3.1 8B e cabe na faixa de GPU prosumer mais comum. Para programar com uma placa de 12 GB, um 14B especializado como o Qwen2.5-Coder 14B é a escolha prática; veja a comparação de 14B para código em Leituras relacionadas.',
          '<strong>O Mistral Small 24B é a opção do modelo maior para placas de 16 GB.</strong> Seu modelo base marca 80,7 no MMLU, no mesmo nível do Qwen3 14B nesse benchmark, com download de 14 GB em vez de 9,3 GB. O tamanho extra é o motivo para considerá-lo, não uma vantagem medida no MMLU; teste os dois com seus próprios prompts antes de reservar uma placa de 16 GB. Em uma RTX 4090 de 24 GB ele também cabe com uma quantização de mais bits.',
          'Para uma comparação direta da classe 14B, consulte a comparação <a href="/pt/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs Llama 8B</a>, que inclui detalhes de benchmarks de codificação.',
        ],
      },
      body3: {
        title: 'Tool calling e raciocínio: como os três modelos se comparam',
        content: [
          'Os três modelos oferecem suporte a tool calling (chamada de funções) quando servidos pelo Ollama: as páginas da biblioteca de llama3.1 (8b), qwen3 (incluindo 14b) e mistral-small trazem a tag "tools". As diferenças práticas estão na confiabilidade com que cada modelo escolhe a ferramenta e os argumentos certos e em poder ou não raciocinar antes de responder.',
          '<strong>Raciocínio.</strong> O Qwen3 14B é o único dos três com modo de pensamento embutido: vem ativado por padrão, escreve um bloco de raciocínio antes da resposta e pode ser desligado com /no_think ou enable_thinking=False. Isso ajuda em problemas de vários passos, mas acrescenta tokens e latência a cada chamada de ferramenta, por isso laços de agentes costumam rodá-lo sem pensamento. Mistral Small 3.x e Llama 3.1 8B respondem diretamente, sem modo de raciocínio separado.',
          '<strong>Tool calling.</strong> O Mistral Small 3.2 (a atualização de meados de 2025 da 3.1) traz um template de function calling mais robusto e, segundo seu model card, marca 69,06% no MMLU Pro e 92,90% no HumanEval Plus (Pass@5). A tag mistral-small:24b do Ollama é identificada como Mistral Small 3 (14 GB); confira qual versão uma tag contém antes de comparar resultados. Em um retrato de terceiros do Berkeley Function Calling Leaderboard, o Qwen3-14B (FC) marca 41,03 e o Mistral-Small-2506 (FC) 37,15; não foi encontrada entrada comparável para o Llama 3.1 8B. Use os números apenas como referência: as versões do ranking e a pontuação mudam, e a PromptQuorum não executou esses testes. O Llama 3.1 8B aceita ferramentas e tem a maior janela de contexto dos três no Ollama (128K contra 32K do Mistral Small e 40K do Qwen3 14B), mas com 8B parâmetros tende a ser menos confiável em cadeias de ferramentas de vários passos.',
          '<strong>Lançamentos mais recentes.</strong> O Mistral Small 4 (2026) é um modelo de mistura de especialistas com 119B parâmetros, 6B ativos e download de cerca de 242 GB, portanto não é um sucessor direto para uma única GPU de consumo. A série Qwen3.5 Small (0,8B a 9B, 2026) roda, segundo relatos, o modelo de 9B em cerca de 6,6 GB com tool calling nativo no Ollama; nenhum tamanho de 14B foi encontrado, então o Qwen3 14B continua sendo a escolha de 14B aqui. O Qwen3.6 (2026) sai como modelo denso de 27B e como modelo de mistura de especialistas 35B-A3B, fora da classe de 12 GB a que esta página se dirige.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas: Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24B consegue rodar em uma RTX 3060 12 GB?',
            a: 'Não. O Mistral Small 24B em Q4_K_M é um download de 14 GB e excede a RTX 3060 de 12 GB. Para essa placa, o Qwen3 14B Q4_K_M (9,3 GB) é a escolha correta — deixa cerca de 2,7 GB para o contexto.',
          },
          {
            q: 'Mistral Small 24B é melhor que Qwen3 14B para codificação?',
            a: 'Não temos um benchmark de código comparável para os dois modelos, então não presuma que o maior é melhor. O Qwen2.5-Coder-14B-Instruct marca 89,6% no HumanEval no relatório da Qwen (número do fabricante), cabe em 12 GB de VRAM e é a escolha prática para programar. Com uma placa de 16 GB, teste o Mistral Small 24B no seu próprio código antes de trocar.',
          },
          {
            q: 'Qual modelo devo usar em uma GPU de 16 GB como a RTX 4080?',
            a: 'O Mistral Small 24B em Q4_K_M (14 GB) cabe com cerca de 2 GB de folga — suficiente para uma janela de contexto modesta. No MMLU ele fica no mesmo nível do Qwen3 14B (80,7 contra 81,1, modelos base, fontes diferentes), então o motivo para escolhê-lo é o modelo maior, não uma vantagem em benchmark.',
          },
          {
            q: 'Como o Llama 3.1 8B se compara ao Llama 3.2?',
            a: 'Llama 3.2 8B não foi lançado — a série 3.2 introduziu apenas as variantes 1B, 3B e multimodais 11B/90B. Llama 3.1 8B continua sendo o modelo de referência 8B padrão do Llama. Para uso apenas de texto com 6–8 GB de VRAM, Llama 3.1 8B é a escolha atualmente recomendada nesta classe de tamanho.',
          },
          {
            q: 'Qual é o melhor para tool calling: Mistral Small 24B, Qwen 14B ou Llama 8B?',
            a: 'Em um retrato de terceiros do Berkeley Function Calling Leaderboard, o Qwen3-14B (FC) marca 41,03 e o Mistral-Small-2506 (FC) 37,15; não foi encontrada entrada comparável para o Llama 3.1 8B. O Mistral Small 3.2 também revisou seu template de function calling. Com 12 GB de VRAM use o Qwen3 14B; com 16 GB ou mais, o Mistral Small 24B é a opção maior. Os três listam suporte a ferramentas no Ollama, então teste seus próprios esquemas de ferramentas antes de confiar em qualquer pontuação.',
          },
          {
            q: 'Devo usar o Qwen 2.5 14B ou o Qwen3 14B?',
            a: 'O Qwen3 14B, a menos que você precise especificamente do Qwen2.5-Coder. O Qwen3 14B é o modelo mais novo, traz um modo de pensamento alternável e seu model card afirma que supera o Qwen2.5-Instruct no modo sem pensamento em matemática, código e raciocínio de senso comum. Ele usa 9,3 GB em Q4_K_M, então vale a orientação de 12 GB de VRAM desta página.',
          },
          {
            q: 'Existe um Mistral Small mais novo que o 3.1?',
            a: 'Sim. O Mistral Small 3.2 (meados de 2025) melhora o seguimento de instruções e o function calling em relação ao 3.1, no mesmo tamanho de 24B e com pesos Apache 2.0. O Mistral Small 4 (2026) é um modelo de mistura de especialistas com 119B parâmetros e cerca de 242 GB de pesos, portanto não cabe em uma placa de 16 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Leituras relacionadas',
        items: [
          '[Melhores modelos 14B para programação](/pt/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B vs Llama 3 8B: qual funciona melhor localmente?](/pt/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: comparação completa](/pt/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-es.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: ¿cuál ejecutar en local?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: tool calling 2026',
    metaDescription: 'Tool calling, razonamiento y VRAM comparados: Llama 3.1 8B necesita 4,9 GB, Qwen3 14B 9,3 GB (MMLU 81,1%), Mistral Small 24B 14 GB (MMLU 80,7%).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: ¿cuál debo ejecutar en local?',
        answer: 'Elige por VRAM: Llama 3.1 8B (4,9 GB), Qwen3 14B (9,3 GB), Mistral Small 24B (14 GB). Qwen3 14B y Mistral Small 24B quedan a medio punto en MMLU según las cifras de modelos base publicadas por los fabricantes (81,1 frente a 80,7), así que una tarjeta de 12 GB con Qwen3 14B pierde poco; Mistral Small 24B necesita una de 16 GB.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM, ~45 tok/s en RTX 4090, MMLU 66,7% — mejor para tarjetas de 6–8 GB',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 81,1% — punto ideal para tarjetas de 12 GB',
          'Mistral Small 3.1 24B Q4_K_M: 14 GB VRAM, ~20 tok/s, MMLU 80,7% — solo para tarjetas de 16 GB o más',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B en Q4_K_M usa 4.9 GB de VRAM y corre a ~45 tok/s en RTX 4090 — el único modelo viable de este grupo para tarjetas de 6 GB',
          'Qwen3 14B en Q4_K_M usa 9.3 GB y obtiene 81,1% MMLU — el punto ideal para tarjetas de 12 GB como la RTX 3060 12 GB o RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B en Q4_K_M usa 14 GB y alcanza 80,7% MMLU — solo factible en tarjetas de 16 GB (RTX 4080, RTX 3090, RTX 4090)',
          'Con 12 GB, usa Qwen3 14B; para programar, un 14B especializado como Qwen2.5-Coder 14B. Con 16 GB o más, Mistral Small 24B es la opción del modelo más grande. Por debajo de 10 GB: Llama 3.1 8B.',
          'Los tres modelos indican compatibilidad con llamadas a herramientas en Ollama. Qwen3 14B añade un modo de razonamiento activable, Mistral Small 3.2 revisó su plantilla de function calling y Llama 3.1 8B es la opción más ligera para llamadas simples a una sola herramienta.',
        ],
      },
      body1: {
        title: 'Requisitos de VRAM: qué tarjeta ejecuta qué modelo',
        content: [
          'La elección entre estos tres modelos es principalmente una decisión de VRAM. En cuantización Q4_K_M: Llama 3.1 8B usa 4.9 GB, Qwen3 14B usa 9.3 GB y Mistral Small 3.1 24B usa 14 GB. Esto se corresponde directamente con tres niveles de GPU: tarjetas de 6–8 GB (solo Llama 3.1 8B), tarjetas de 10–12 GB (Qwen3 14B) y tarjetas de 16+ GB (Mistral Small 24B).',
          'Velocidad en RTX 4090 en Q4_K_M: Llama 3.1 8B corre a aproximadamente 45 tok/s, Qwen3 14B a ~28 tok/s y Mistral Small 3.1 24B a ~20 tok/s. En una RTX 3060 12 GB, solo caben Llama 3.1 8B y Qwen3 14B — Mistral Small 24B necesita como mínimo una tarjeta de 16 GB para evitar volcar a la RAM de la CPU. Estos valores de tok/s son estimaciones aproximadas para un solo usuario, no benchmarks de PromptQuorum.',
          'La diferencia en MMLU es menor que la diferencia en VRAM. Según las cifras de modelos base publicadas por los fabricantes, Qwen3 14B obtiene 81,1 y Mistral Small 24B 80,7, ambos unos 14 puntos por encima de Llama 3.1 8B (66,7). Las cifras proceden de fichas de modelo y protocolos distintos, así que la diferencia de 0,4 puntos debe considerarse un empate.',
        ],
        columns: [
          'Modelo',
          'VRAM (Q4_K_M)',
          'Velocidad (RTX 4090)',
          'MMLU',
          'GPU mínima',
        ],
        rows: [
          { Modelo: 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'Velocidad (RTX 4090)': '~45 tok/s', MMLU: '66,7%', 'GPU mínima': 'RTX 3060 6 GB' },
          { Modelo: 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'Velocidad (RTX 4090)': '~28 tok/s', MMLU: '81,1%', 'GPU mínima': 'RTX 3060 12 GB' },
          { Modelo: 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 GB', 'Velocidad (RTX 4090)': '~20 tok/s', MMLU: '80,7%', 'GPU mínima': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Calidad vs VRAM: cuándo gana cada modelo',
        content: [
          '<strong>Llama 3.1 8B gana en eficiencia de VRAM.</strong> Con 4.9 GB Q4_K_M es el único modelo de este grupo que cabe en una tarjeta de 6 GB con margen para una ventana de contexto de 4k tokens. Obtiene 66,7% en MMLU y ofrece respuestas interactivas rápidas (~45 tok/s en RTX 4090). Para chat, consultas rápidas de coding y uso diario en hardware limitado, es la elección correcta.',
          '<strong>Qwen3 14B gana con 12 GB de VRAM.</strong> Su modelo base obtiene 81,1 en MMLU frente a 66,7 de Llama 3.1 8B y cabe en el nivel de GPU prosumer más común. Para programar con una tarjeta de 12 GB, un 14B especializado como Qwen2.5-Coder 14B es la opción práctica; consulta la comparativa de 14B para código en Lecturas relacionadas.',
          '<strong>Mistral Small 24B es la opción del modelo más grande para tarjetas de 16 GB.</strong> Su modelo base obtiene 80,7 en MMLU, al nivel de Qwen3 14B en ese benchmark, con una descarga de 14 GB en lugar de 9,3 GB. El tamaño extra es la razón para considerarlo, no una ventaja medida en MMLU; prueba ambos con tus propios prompts antes de dedicar una tarjeta de 16 GB. En una RTX 4090 de 24 GB también cabe con una cuantización de más bits.',
          'Para una comparativa directa de clase 14B consulta la comparativa <a href="/es/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs Llama 8B</a>, que incluye detalles de benchmarks de coding.',
        ],
      },
      body3: {
        title: 'Tool calling y razonamiento: cómo se comparan los tres modelos',
        content: [
          'Los tres modelos admiten tool calling (llamadas a funciones) servidos con Ollama: las páginas de la biblioteca de llama3.1 (8b), qwen3 (incluido 14b) y mistral-small llevan la etiqueta «tools». Las diferencias prácticas están en la fiabilidad con que cada modelo elige la herramienta y los argumentos correctos, y en si puede razonar antes de responder.',
          '<strong>Razonamiento.</strong> Qwen3 14B es el único de los tres con un modo de pensamiento integrado: viene activado por defecto, escribe un bloque de razonamiento antes de la respuesta y se desactiva con /no_think o enable_thinking=False. Ayuda en problemas de varios pasos, pero añade tokens y latencia a cada llamada a una herramienta, por lo que los bucles de agentes suelen ejecutarlo sin pensamiento. Mistral Small 3.x y Llama 3.1 8B responden directamente, sin un modo de razonamiento aparte.',
          '<strong>Tool calling.</strong> Mistral Small 3.2 (la actualización de mediados de 2025 de la 3.1) incluye una plantilla de function calling más robusta y, según su ficha de modelo, obtiene 69,06% en MMLU Pro y 92,90% en HumanEval Plus (Pass@5). La etiqueta mistral-small:24b de Ollama figura como Mistral Small 3 (14 GB), así que comprueba qué versión contiene una etiqueta antes de comparar resultados. En una instantánea de terceros del Berkeley Function Calling Leaderboard, Qwen3-14B (FC) obtiene 41,03 y Mistral-Small-2506 (FC) 37,15; no se encontró una entrada comparable para Llama 3.1 8B. Tómalo solo como orientación: las versiones del ranking y la puntuación cambian, y PromptQuorum no realizó estas pruebas. Llama 3.1 8B admite herramientas y tiene la mayor ventana de contexto de los tres en Ollama (128K frente a 32K de Mistral Small y 40K de Qwen3 14B), pero con 8B parámetros probablemente sea menos fiable en cadenas de herramientas de varios pasos.',
          '<strong>Lanzamientos más recientes.</strong> Mistral Small 4 (2026) es un modelo de mezcla de expertos de 119B parámetros con 6B activos y una descarga de unos 242 GB, por lo que no es un sucesor directo para una sola GPU de consumo. La serie Qwen3.5 Small (0,8B a 9B, 2026) ejecutaría su modelo de 9B en unos 6,6 GB con tool calling nativo en Ollama; no se encontró un tamaño de 14B, así que Qwen3 14B sigue siendo la opción de 14B aquí. Qwen3.6 (2026) se publica como modelo denso de 27B y como modelo de mezcla de expertos 35B-A3B, fuera de la clase de 12 GB a la que apunta esta página.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas: Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: '¿Puede Mistral Small 24B ejecutarse en una RTX 3060 12 GB?',
            a: 'No. Mistral Small 24B en Q4_K_M es una descarga de 14 GB y supera la RTX 3060 de 12 GB. Para esa tarjeta, Qwen3 14B Q4_K_M (9,3 GB) es la elección correcta: deja unos 2,7 GB para el contexto.',
          },
          {
            q: '¿Mistral Small 24B es mejor que Qwen3 14B para coding?',
            a: 'No tenemos un benchmark de código comparable para ambos modelos, así que no des por hecho que el más grande es mejor. Qwen2.5-Coder-14B-Instruct obtiene 89,6 % en HumanEval en el informe de Qwen (cifra del fabricante), cabe en 12 GB de VRAM y es la opción práctica para programar. Con una tarjeta de 16 GB, prueba Mistral Small 24B con tu propio código antes de cambiar.',
          },
          {
            q: '¿Qué modelo debo usar en una GPU de 16 GB como la RTX 4080?',
            a: 'Mistral Small 24B en Q4_K_M (14 GB) cabe con unos 2 GB de margen: suficiente para una ventana de contexto modesta. En MMLU está al nivel de Qwen3 14B (80,7 frente a 81,1, modelos base, fuentes distintas), así que la razón para elegirlo es el modelo más grande, no una ventaja en benchmarks.',
          },
          {
            q: '¿Cómo se compara Llama 3.1 8B con Llama 3.2?',
            a: 'Llama 3.2 8B no fue lanzado — la serie 3.2 introdujo variantes de 1B, 3B y multimodales de 11B/90B únicamente. Llama 3.1 8B sigue siendo el modelo de referencia 8B de Llama. Para uso de solo texto con 6–8 GB de VRAM, Llama 3.1 8B es la opción recomendada actualmente en esta clase de tamaño.',
          },
          {
            q: '¿Cuál es mejor para tool calling: Mistral Small 24B, Qwen 14B o Llama 8B?',
            a: 'En una instantánea de terceros del Berkeley Function Calling Leaderboard, Qwen3-14B (FC) obtiene 41,03 y Mistral-Small-2506 (FC) 37,15; no se encontró una entrada comparable para Llama 3.1 8B. Mistral Small 3.2 también revisó su plantilla de function calling. Con 12 GB de VRAM usa Qwen3 14B; con 16 GB o más, Mistral Small 24B es la opción mayor. Los tres indican compatibilidad con herramientas en Ollama, así que prueba tus propios esquemas de herramientas antes de fiarte de una puntuación.',
          },
          {
            q: '¿Debo usar Qwen 2.5 14B o Qwen3 14B?',
            a: 'Qwen3 14B, salvo que necesites específicamente Qwen2.5-Coder. Qwen3 14B es el modelo más reciente, añade un modo de pensamiento activable y su ficha indica que supera a Qwen2.5-Instruct en modo sin pensamiento en matemáticas, código y razonamiento de sentido común. Ocupa 9,3 GB en Q4_K_M, por lo que se aplica la guía de 12 GB de VRAM de esta página.',
          },
          {
            q: '¿Existe un Mistral Small más reciente que el 3.1?',
            a: 'Sí. Mistral Small 3.2 (mediados de 2025) mejora el seguimiento de instrucciones y el function calling respecto a la 3.1 con el mismo tamaño de 24B y pesos Apache 2.0. Mistral Small 4 (2026) es un modelo de mezcla de expertos de 119B parámetros con unos 242 GB de pesos, así que no cabe en una tarjeta de 16 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores modelos 14B para programar](/es/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B vs Llama 3 8B: ¿cuál funciona mejor en local?](/es/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: comparativa completa](/es/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-ar.webp',
    title: '⁨Mistral Small 24B⁩ مقابل ⁨Qwen3 14B⁩ مقابل ⁨Llama 3.1 8B⁩: أيهما تشغّل محلياً؟',
    seoTitle: '⁨Mistral Small 24B⁩ وQwen 14B وLlama 8B: استدعاء الأدوات 2026',
    metaDescription: 'مقارنة استدعاء الأدوات والاستدلال وVRAM: ⁨Llama 3.1 8B⁩ يحتاج ⁨4.9 GB⁩، و⁨Qwen3 14B⁩ ⁨9.3 GB⁩ (⁨MMLU 81.1%⁩)، و⁨Mistral Small 24B⁩ ⁨14 GB⁩ (⁨MMLU 80.7%⁩).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'Mistral Small 24B مقابل Qwen3 14B مقابل Llama 3.1 8B: أيهما يجب تشغيله محلياً؟',
        answer: 'اختر بحسب VRAM: ‏Llama 3.1 8B (‏4.9 GB) أو Qwen3 14B (‏9.3 GB) أو Mistral Small 24B (‏14 GB). يفصل بين Qwen3 14B وMistral Small 24B أقل من نصف نقطة في MMLU وفق أرقام النماذج الأساسية التي أعلنتها الشركات (81.1 مقابل 80.7)، لذا تخسر بطاقة 12 GB مع Qwen3 14B القليل؛ أما Mistral Small 24B فيحتاج بطاقة 16 GB.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM، ~45 توكن/ث على RTX 4090، MMLU 66.7% — الأفضل لبطاقات 6–8 GB',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM، ~28 توكن/ث، MMLU 81.1% — النقطة المثلى لبطاقات 12 GB',
          'Mistral Small 3.1 24B Q4_K_M: 14 GB VRAM، ~20 توكن/ث، MMLU 80.7% — لبطاقات 16 GB فما فوق فقط',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B بتكميم Q4_K_M يستخدم 4.9 GB VRAM ويعمل بـ ~45 توكن/ث على RTX 4090 — النموذج الوحيد القابل للتطبيق من هذه المجموعة لبطاقات 6 GB',
          'Qwen3 14B بتكميم Q4_K_M يستخدم 9.3 GB ويحقق 81.1% MMLU — النقطة المثلى لبطاقات 12 GB كـ RTX 3060 12 GB أو RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B بتكميم Q4_K_M يستخدم 14 GB ويصل إلى 80.7% MMLU — قابل للتطبيق فقط على بطاقات 16 GB (RTX 4080، RTX 3090، RTX 4090)',
          'مع 12 GB شغّل Qwen3 14B؛ وللبرمجة نموذج 14B مخصص للكود مثل Qwen2.5-Coder 14B. ومع 16 GB فأكثر يكون Mistral Small 24B خيار النموذج الأكبر. وأقل من 10 GB: ‏Llama 3.1 8B.',
          'تُدرج النماذج الثلاثة دعم استدعاء الأدوات على Ollama. يضيف Qwen3 14B وضع تفكير قابلاً للتبديل، وراجع Mistral Small 3.2 قالب استدعاء الدوال، ويبقى Llama 3.1 8B الخيار الأخف لاستدعاءات الأداة الواحدة البسيطة.',
        ],
      },
      body1: {
        title: 'متطلبات VRAM: أي بطاقة تشغّل أي نموذج',
        content: [
          'الاختيار بين هذه النماذج الثلاثة هو في الأساس قرار VRAM. عند تكميم Q4_K_M: Llama 3.1 8B يستخدم 4.9 GB، Qwen3 14B يستخدم 9.3 GB، وMistral Small 3.1 24B يستخدم 14 GB. هذا يتوافق مباشرةً مع ثلاثة مستويات من GPU: بطاقات 6–8 GB (Llama 3.1 8B فقط)، بطاقات 10–12 GB (Qwen3 14B)، وبطاقات 16+ GB (Mistral Small 24B).',
          'السرعة على RTX 4090 بتكميم Q4_K_M: Llama 3.1 8B يعمل بـ ~45 توكن/ث، Qwen3 14B بـ ~28 توكن/ث، وMistral Small 3.1 24B بـ ~20 توكن/ث. على RTX 3060 12 GB، يتسع فقط Llama 3.1 8B وQwen3 14B — Mistral Small 24B يحتاج على الأقل بطاقة 16 GB لتجنب نقل الأحمال إلى RAM وحدة المعالجة. أرقام tok/s هذه تقديرات تقريبية لمستخدم واحد وليست قياسات من PromptQuorum.',
          'فارق MMLU أضيق من فارق VRAM. وفق أرقام النماذج الأساسية التي أعلنتها الشركات، يسجّل Qwen3 14B نسبة 81.1 وMistral Small 24B نسبة 80.7، وكلاهما أعلى بنحو 14 نقطة من Llama 3.1 8B (‏66.7). الأرقام مصدرها بطاقات نماذج وإعدادات تقييم مختلفة، لذا يُعدّ فارق 0.4 نقطة تعادلًا.',
        ],
        columns: [
          'النموذج',
          'VRAM (Q4_K_M)',
          'السرعة (RTX 4090)',
          'MMLU',
          'الحد الأدنى للـ GPU',
        ],
        rows: [
          { 'النموذج': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'السرعة (RTX 4090)': '~45 توكن/ث', MMLU: '66.7%', 'الحد الأدنى للـ GPU': 'RTX 3060 6 GB' },
          { 'النموذج': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'السرعة (RTX 4090)': '~28 توكن/ث', MMLU: '81.1%', 'الحد الأدنى للـ GPU': 'RTX 3060 12 GB' },
          { 'النموذج': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 GB', 'السرعة (RTX 4090)': '~20 توكن/ث', MMLU: '80.7%', 'الحد الأدنى للـ GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'الجودة مقابل VRAM: متى يتفوق كل نموذج',
        content: [
          '<strong>Llama 3.1 8B يتفوق في كفاءة VRAM.</strong> بـ 4.9 GB Q4_K_M هو النموذج الوحيد من هذه المجموعة الذي يتسع في بطاقة 6 GB مع هامش لنافذة سياق 4k توكن. يحقق 66.7% في MMLU ويوفر استجابات تفاعلية سريعة (~45 توكن/ث على RTX 4090). للمحادثة واستفسارات البرمجة السريعة والاستخدام اليومي على الأجهزة المحدودة، هو الاختيار الصحيح.',
          '<strong>يتفوق Qwen3 14B عند 12 GB VRAM.</strong> يسجّل نموذجه الأساسي 81.1 في MMLU مقابل 66.7 لـ Llama 3.1 8B، ويتسع في أكثر فئات GPU شيوعًا للمحترفين. وللبرمجة على بطاقة 12 GB فإن نموذج 14B مخصصًا للكود مثل Qwen2.5-Coder 14B هو الخيار العملي؛ راجع مقارنة 14B للبرمجة ضمن القراءات ذات الصلة.',
          '<strong>Mistral Small 24B هو خيار النموذج الأكبر لبطاقات 16 GB.</strong> يسجّل نموذجه الأساسي 80.7 في MMLU، أي بمستوى Qwen3 14B في هذا المقياس، بتنزيل 14 GB بدلًا من 9.3 GB. الحجم الإضافي هو سبب النظر فيه، وليس تفوقًا مقيسًا في MMLU، فاختبر الاثنين بموجّهاتك قبل تخصيص بطاقة 16 GB. وعلى RTX 4090 بسعة 24 GB يتسع أيضًا بتكميم أعلى دقة.',
          'للمقارنة المباشرة لفئة 14B راجع مقارنة <a href="/ar/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B مقابل Llama 8B</a>، التي تتضمن تفاصيل معايير البرمجة.',
        ],
      },
      body3: {
        title: 'استدعاء الأدوات والاستدلال: كيف تقارن النماذج الثلاثة',
        content: [
          'تدعم النماذج الثلاثة استدعاء الأدوات (الدوال) عند تشغيلها عبر Ollama: صفحات المكتبة لـ llama3.1 (8b) وqwen3 (بما فيها 14b) وmistral-small تحمل جميعها وسم "tools". الفروق العملية هي مدى موثوقية اختيار كل نموذج للأداة والوسائط الصحيحة، وهل يستطيع الاستدلال قبل أن يجيب.',
          '<strong>الاستدلال.</strong> Qwen3 14B هو الوحيد بين الثلاثة الذي يملك وضع تفكير مدمجاً: يكون مفعّلاً افتراضياً، ويكتب كتلة استدلال قبل الإجابة، ويمكن إيقافه عبر /no_think أو enable_thinking=False. يفيد ذلك في المسائل متعددة الخطوات لكنه يضيف توكنات وزمن استجابة لكل استدعاء أداة، ولذلك تُشغَّل حلقات الوكلاء غالباً بدون تفكير. أما Mistral Small 3.x وLlama 3.1 8B فيجيبان مباشرة دون وضع استدلال منفصل.',
          '<strong>استدعاء الأدوات.</strong> يأتي Mistral Small 3.2 (تحديث منتصف 2025 للإصدار 3.1) بقالب استدعاء دوال أكثر متانة، وبحسب بطاقة نموذجه يحقق 69.06% في MMLU Pro و92.90% في HumanEval Plus (Pass@5). وسم mistral-small:24b في Ollama موصوف بأنه Mistral Small 3 (14 GB)، فتحقق من إصدار الوسم قبل مقارنة النتائج. في لقطة من طرف ثالث للوحة Berkeley Function Calling Leaderboard يحقق Qwen3-14B (FC) نتيجة 41.03 وMistral-Small-2506 (FC) نتيجة 37.15، ولم يُعثر على إدخال قابل للمقارنة لـ Llama 3.1 8B. تعامل مع الأرقام كمؤشر فقط: إصدارات اللوحة والتقييم تتغير، ولم تُجرِ PromptQuorum هذه الاختبارات. يدعم Llama 3.1 8B الأدوات ويملك أكبر نافذة سياق بين الثلاثة على Ollama (128K مقابل 32K لـ Mistral Small و40K لـ Qwen3 14B)، لكنه بمعاملات 8B قد يكون أقل موثوقية في سلاسل الأدوات متعددة الخطوات.',
          '<strong>إصدارات أحدث.</strong> Mistral Small 4 (2026) نموذج مزيج خبراء بـ 119B معاملاً منها 6B نشطة وحجم تنزيل نحو 242 GB، فليس خليفة مباشراً لبطاقة رسومية استهلاكية واحدة. وتفيد التقارير بأن سلسلة Qwen3.5 Small (من 0.8B إلى 9B، 2026) تشغّل نموذج 9B بنحو 6.6 GB مع استدعاء أدوات أصلي على Ollama؛ ولم يُعثر على حجم 14B، لذا يبقى Qwen3 14B خيار فئة 14B هنا. يصدر Qwen3.6 (2026) بنموذج كثيف 27B ونموذج مزيج خبراء 35B-A3B، أي خارج فئة 12 GB التي تستهدفها هذه الصفحة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة: Mistral Small 24B مقابل Qwen 14B مقابل Llama 8B',
        faqs: [
          {
            q: 'هل يمكن تشغيل Mistral Small 24B على RTX 3060 12 GB؟',
            a: 'لا. تنزيل Mistral Small 24B بتكميم Q4_K_M هو 14 GB ويتجاوز RTX 3060 بسعة 12 GB. لهذه البطاقة يكون Qwen3 14B بتكميم Q4_K_M (‏9.3 GB) الخيار الصحيح، إذ يترك نحو 2.7 GB للسياق.',
          },
          {
            q: 'هل Mistral Small 24B أفضل من Qwen3 14B للبرمجة؟',
            a: 'ليس لدينا مقياس برمجة متكافئ للنموذجين، فلا تفترض أن الأكبر هو الأفضل. يسجّل Qwen2.5-Coder-14B-Instruct نسبة 89.6% في HumanEval في تقرير Qwen (رقم الشركة)، ويتسع في 12 GB VRAM، وهو الخيار العملي للبرمجة. ومع بطاقة 16 GB جرّب Mistral Small 24B على شيفرتك قبل التبديل.',
          },
          {
            q: 'أي نموذج يجب أن أستخدم مع GPU بسعة 16 GB مثل RTX 4080؟',
            a: 'يتسع Mistral Small 24B بتكميم Q4_K_M (‏14 GB) بهامش نحو 2 GB، وهو كافٍ لنافذة سياق متواضعة. وفي MMLU يعادل Qwen3 14B (‏80.7 مقابل 81.1، نماذج أساسية، مصادر مختلفة)، فسبب اختياره هو النموذج الأكبر وليس تفوقًا في المقاييس.',
          },
          {
            q: 'كيف يقارن Llama 3.1 8B بـ Llama 3.2؟',
            a: 'Llama 3.2 8B لم يُطرح — سلسلة 3.2 أدخلت نسخ 1B و3B ومتعددة الوسائط 11B/90B فقط. Llama 3.1 8B لا يزال النموذج المرجعي 8B لـ Llama. للاستخدام النصي فقط بـ 6–8 GB VRAM، Llama 3.1 8B هو الخيار الموصى به حالياً في هذه الفئة.',
          },
          {
            q: 'أيّ نموذج هو الأفضل لاستدعاء الأدوات: Mistral Small 24B أم Qwen 14B أم Llama 8B؟',
            a: 'في لقطة من طرف ثالث للوحة Berkeley Function Calling Leaderboard يحقق Qwen3-14B (FC) نتيجة 41.03 وMistral-Small-2506 (FC) نتيجة 37.15، ولم يُعثر على إدخال قابل للمقارنة لـ Llama 3.1 8B. كما راجع Mistral Small 3.2 قالب استدعاء الدوال. مع VRAM بسعة 12 GB استخدم Qwen3 14B، ومع 16 GB أو أكثر يكون Mistral Small 24B الخيار الأكبر. تُدرج النماذج الثلاثة دعم الأدوات على Ollama، لذا اختبر مخططات أدواتك الخاصة قبل الاعتماد على أي درجة.',
          },
          {
            q: 'هل أستخدم Qwen 2.5 14B أم Qwen3 14B؟',
            a: 'استخدم Qwen3 14B ما لم تكن بحاجة تحديداً إلى Qwen2.5-Coder. Qwen3 14B هو الأحدث، ويضيف وضع تفكير قابلاً للتبديل، وتذكر بطاقة نموذجه أنه يتفوق على Qwen2.5-Instruct في وضع عدم التفكير في الرياضيات والبرمجة والاستدلال العام. يستهلك 9.3 GB بتكميم Q4_K_M، لذا تنطبق إرشادات VRAM بسعة 12 GB في هذه الصفحة.',
          },
          {
            q: 'هل يوجد Mistral Small أحدث من 3.1؟',
            a: 'نعم. يحسّن Mistral Small 3.2 (منتصف 2025) اتباع التعليمات واستدعاء الدوال مقارنة بـ 3.1 بالحجم نفسه 24B، مع أوزان Apache 2.0. أما Mistral Small 4 (2026) فهو نموذج مزيج خبراء بـ 119B معاملاً وأوزان بحدود 242 GB، فلا يتسع في بطاقة 16 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل نماذج 14B للبرمجة](/ar/prompt-bites/best-14b-models-coding)',
          '[⁨Qwen 14B⁩ مقابل ⁨Llama 3 8B⁩: أيهما يعمل بشكل أفضل محليًا؟](/ar/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen مقابل Llama مقابل Mistral: مقارنة شاملة](/ar/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-ko.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: 로컬에서 무엇을 실행할까?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 도구 호출 2026',
    metaDescription: '도구 호출·추론·VRAM 비교: Llama 3.1 8B는 4.9 GB, Qwen3 14B는 9.3 GB(MMLU 81.1%), Mistral Small 24B는 14 GB(MMLU 80.7%)가 필요합니다.',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    targetKeywords: [
      'Mistral Small 24B vs Qwen 14B vs Llama 8B',
      '로컬 LLM VRAM 비교 2026',
      'Qwen3 14B 로컬 실행',
      'Llama 3.1 8B VRAM 요구 사항',
      'Mistral Small 24B 성능',
    ],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: 로컬에서 무엇을 실행해야 합니까?',
        answer: 'VRAM으로 선택하십시오: Llama 3.1 8B(4.9 GB), Qwen3 14B(9.3 GB), Mistral Small 24B(14 GB). 제조사 발표 베이스 모델 수치에서 Qwen3 14B와 Mistral Small 24B의 MMLU 차이는 0.5점 이내(81.1 대 80.7)이므로, 12 GB 카드에서 Qwen3 14B를 실행해도 잃는 것이 적습니다. Mistral Small 24B는 16 GB 카드가 필요합니다.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM, RTX 4090에서 ~45 tok/s, MMLU 66.7% — 6~8 GB 카드에 최적',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 81.1% — 12 GB 카드의 최적 선택',
          'Mistral Small 3.1 24B Q4_K_M: 14 GB VRAM, ~20 tok/s, MMLU 80.7% — 16 GB 이상 카드 전용',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B Q4_K_M은 VRAM 4.9 GB를 사용하며 RTX 4090에서 ~45 tok/s로 실행됩니다 — 6 GB 카드에서 이 그룹 내 유일하게 실행 가능한 모델입니다.',
          'Qwen3 14B Q4_K_M은 9.3 GB를 사용하며 MMLU 81.1%를 달성합니다 — RTX 3060 12 GB 또는 RTX 4060 Ti 16 GB 등 12 GB 카드의 최적 선택입니다.',
          'Mistral Small 3.1 24B Q4_K_M은 14 GB를 사용하며 MMLU 80.7%에 도달합니다 — 16 GB 카드(RTX 4080, RTX 3090, RTX 4090)에서만 실행 가능합니다.',
          '12 GB라면 Qwen3 14B를, 코딩에는 Qwen2.5-Coder 14B 같은 코드 특화 14B를 사용하십시오. 16 GB 이상이라면 더 큰 모델 선택지로 Mistral Small 24B가 있습니다. 10 GB 미만: Llama 3.1 8B.',
          '세 모델 모두 Ollama에서 도구 호출 지원이 표시됩니다. Qwen3 14B는 전환 가능한 사고 모드를 갖추었고, Mistral Small 3.2는 함수 호출 템플릿을 개선했으며, Llama 3.1 8B는 단순한 단일 도구 호출에 가장 가벼운 선택입니다.',
        ],
      },
      body1: {
        title: 'VRAM 요구 사항: 어느 카드가 어느 모델을 실행하는가',
        content: [
          '이 세 가지 모델 중에서의 선택은 기본적으로 VRAM에 관한 결정입니다. Q4_K_M 양자화 기준: Llama 3.1 8B는 4.9 GB, Qwen3 14B는 9.3 GB, Mistral Small 3.1 24B는 14 GB를 사용합니다. 이는 세 가지 GPU 계층에 직접 대응됩니다: 6~8 GB 카드(Llama 3.1 8B만 가능), 10~12 GB 카드(Qwen3 14B), 16 GB 이상 카드(Mistral Small 24B).',
          'RTX 4090에서 Q4_K_M 기준 속도: Llama 3.1 8B는 약 45 tok/s, Qwen3 14B는 ~28 tok/s, Mistral Small 3.1 24B는 ~20 tok/s입니다. RTX 3060 12 GB에서는 Llama 3.1 8B와 Qwen3 14B만 탑재 가능합니다 — Mistral Small 24B는 CPU RAM으로의 스필을 방지하려면 최소 16 GB 카드가 필요합니다. 이 tok/s 수치는 단일 사용자 기준의 대략적인 추정치이며 PromptQuorum의 벤치마크가 아닙니다.',
          'MMLU 격차는 VRAM 격차보다 작습니다. 제조사 발표 베이스 모델 수치에서 Qwen3 14B는 81.1, Mistral Small 24B는 80.7로, 둘 다 Llama 3.1 8B의 66.7보다 약 14점 높습니다. 수치는 서로 다른 모델 카드와 평가 설정에서 나왔으므로 0.4점 차이는 동률로 보아야 합니다.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M 양자화 기준으로 Llama 3.1 8B는 4.9 GB VRAM, Qwen3 14B는 9.3 GB, Mistral Small 3.1 24B는 14 GB를 사용합니다.',
          },
          {
            type: 'plain-terms',
            text: 'VRAM 6~8 GB: Llama 3.1 8B만 가능합니다. VRAM 12 GB: Qwen3 14B가 최적입니다. VRAM 16 GB 이상: Mistral Small 24B가 최고 품질을 제공합니다.',
          },
        ],
        columns: [
          '모델',
          'VRAM (Q4_K_M)',
          '속도 (RTX 4090)',
          'MMLU',
          '최소 GPU',
        ],
        rows: [
          { '모델': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', '속도 (RTX 4090)': '~45 tok/s', MMLU: '66.7%', '최소 GPU': 'RTX 3060 6 GB' },
          { '모델': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', '속도 (RTX 4090)': '~28 tok/s', MMLU: '81.1%', '최소 GPU': 'RTX 3060 12 GB' },
          { '모델': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14 GB', '속도 (RTX 4090)': '~20 tok/s', MMLU: '80.7%', '최소 GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '품질 대 VRAM: 각 모델이 유리한 상황',
        content: [
          '<strong>Llama 3.1 8B는 VRAM 효율성에서 우위를 보입니다.</strong> Q4_K_M 기준 4.9 GB로 이 그룹에서 4k 토큰 컨텍스트 윈도우를 위한 여유 공간과 함께 6 GB 카드에 탑재되는 유일한 모델입니다. MMLU 66.7%를 달성하며 빠른 대화형 응답(RTX 4090에서 ~45 tok/s)을 제공합니다. 채팅, 빠른 코딩 쿼리, 제한된 하드웨어에서의 일상적인 사용에 적합한 선택입니다.',
          '<strong>Qwen3 14B는 12 GB VRAM에서 우위입니다.</strong> 베이스 모델의 MMLU는 81.1로 Llama 3.1 8B의 66.7을 앞서며, 가장 일반적인 프로슈머 GPU 등급에 탑재됩니다. 12 GB 카드에서의 코딩에는 Qwen2.5-Coder 14B 같은 코드 특화 14B가 실용적인 선택입니다. 관련 자료의 14B 코딩 비교를 참조하십시오.',
          '<strong>Mistral Small 24B는 16 GB 카드를 위한 더 큰 모델 선택지입니다.</strong> 베이스 모델의 MMLU는 80.7로 이 벤치마크에서 Qwen3 14B와 동급이지만, 다운로드는 9.3 GB가 아닌 14 GB입니다. 고려할 이유는 추가된 크기이지 측정된 MMLU 우위가 아니므로, 16 GB 카드를 할당하기 전에 두 모델을 직접 프롬프트로 테스트하십시오. RTX 4090 24 GB에서는 더 높은 비트의 양자화로도 탑재됩니다.',
          '14B급 직접 비교는 코딩 벤치마크 세부 내용이 포함된 <a href="/ko/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs Llama 8B 비교</a>를 참조하십시오.',
        ],
      },
      body3: {
        title: '도구 호출과 추론: 세 모델 비교',
        content: [
          '세 모델 모두 Ollama로 구동할 때 도구(함수) 호출을 지원합니다. llama3.1(8b), qwen3(14b 포함), mistral-small의 라이브러리 페이지에 각각 "tools" 태그가 있습니다. 실질적인 차이는 각 모델이 올바른 도구와 인자를 얼마나 안정적으로 고르는지, 그리고 답하기 전에 추론할 수 있는지입니다.',
          '<strong>추론.</strong> 세 모델 중 사고 모드를 내장한 것은 Qwen3 14B뿐입니다. 기본으로 켜져 있고 답변 전에 추론 블록을 작성하며, /no_think 또는 enable_thinking=False로 끌 수 있습니다. 다단계 문제에는 도움이 되지만 도구 호출마다 토큰과 지연이 늘어나므로 에이전트 루프에서는 사고를 끄고 실행하는 경우가 많습니다. Mistral Small 3.x와 Llama 3.1 8B는 별도의 추론 모드 없이 바로 답합니다.',
          '<strong>도구 호출.</strong> Mistral Small 3.2(3.1의 2025년 중반 업데이트)는 더 견고한 함수 호출 템플릿을 제공하며, 모델 카드에 따르면 MMLU Pro 69.06%, HumanEval Plus 92.90%(Pass@5)입니다. Ollama의 mistral-small:24b 태그는 Mistral Small 3(14 GB)으로 표기되어 있으므로, 결과를 비교하기 전에 태그가 어떤 버전인지 확인하세요. 제3자가 정리한 Berkeley Function Calling Leaderboard 스냅샷에서 Qwen3-14B(FC)는 41.03, Mistral-Small-2506(FC)는 37.15이며, Llama 3.1 8B의 비교 가능한 항목은 찾지 못했습니다. 수치는 참고용으로만 보세요. 리더보드 버전과 채점은 바뀌며 PromptQuorum이 이 테스트를 직접 수행하지 않았습니다. Llama 3.1 8B는 도구를 지원하고 Ollama에서 세 모델 중 가장 큰 컨텍스트 창(128K, Mistral Small은 32K, Qwen3 14B는 40K)을 갖지만, 8B 파라미터라 다단계 도구 체인에서는 신뢰도가 낮을 가능성이 큽니다.',
          '<strong>최신 릴리스.</strong> Mistral Small 4(2026)는 119B 파라미터(활성 6B)의 전문가 혼합 모델로 다운로드가 약 242 GB여서 소비자용 GPU 한 장의 직접적인 후속 모델이 아닙니다. Qwen3.5 Small 시리즈(0.8B~9B, 2026)는 9B 모델이 약 6.6 GB로 실행되고 Ollama에서 기본 도구 호출을 지원한다고 보고되었습니다. 14B 크기는 찾지 못했으므로 14B급 선택은 계속 Qwen3 14B입니다. Qwen3.6(2026)은 27B 밀집 모델과 35B-A3B 전문가 혼합 모델로 출시되어 이 페이지가 다루는 12 GB급을 벗어납니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '빠른 답변: Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24B를 RTX 3060 12 GB에서 실행할 수 있습니까?',
            a: '아닙니다. Mistral Small 24B의 Q4_K_M은 14 GB 다운로드로 RTX 3060 12 GB를 초과합니다. 그 카드에는 Qwen3 14B Q4_K_M(9.3 GB)이 올바른 선택이며 컨텍스트용으로 약 2.7 GB가 남습니다.',
          },
          {
            q: 'Mistral Small 24B는 코딩에서 Qwen3 14B보다 우수합니까?',
            a: '두 모델을 동일 조건으로 비교한 코딩 벤치마크는 없으므로 더 큰 모델이 더 낫다고 단정하지 마십시오. Qwen2.5-Coder-14B-Instruct는 Qwen 보고서에서 HumanEval 89.6%(제조사 발표)이며 12 GB VRAM에 탑재되어 실용적인 코딩 선택입니다. 16 GB 카드라면 전환하기 전에 Mistral Small 24B를 직접 작성한 코드로 시험해 보십시오.',
          },
          {
            q: 'RTX 4080과 같은 16 GB GPU에서는 어느 모델을 사용해야 합니까?',
            a: 'Mistral Small 24B의 Q4_K_M(14 GB)은 약 2 GB 여유로 탑재되며 소규모 컨텍스트 윈도우에는 충분합니다. MMLU에서는 Qwen3 14B와 동급(80.7 대 81.1, 베이스 모델, 출처 상이)이므로, 선택 이유는 벤치마크 우위가 아니라 더 큰 모델이라는 점입니다.',
          },
          {
            q: 'Llama 3.1 8B와 Llama 3.2는 어떻게 비교됩니까?',
            a: 'Llama 3.2 8B는 출시되지 않았습니다 — 3.2 시리즈는 1B, 3B, 멀티모달 11B/90B 변형만 도입했습니다. Llama 3.1 8B는 여전히 표준 8B Llama 참조 모델입니다. 6~8 GB VRAM에서 텍스트 전용 사용을 위해 Llama 3.1 8B는 현재 이 크기 클래스에서 권장되는 선택입니다.',
          },
          {
            q: '도구 호출에는 Mistral Small 24B, Qwen 14B, Llama 8B 중 무엇이 가장 좋나요?',
            a: '제3자가 정리한 Berkeley Function Calling Leaderboard 스냅샷에서 Qwen3-14B(FC)는 41.03, Mistral-Small-2506(FC)는 37.15이며, Llama 3.1 8B의 비교 가능한 항목은 찾지 못했습니다. Mistral Small 3.2도 함수 호출 템플릿을 개선했습니다. VRAM 12 GB라면 Qwen3 14B, 16 GB 이상이면 더 큰 Mistral Small 24B가 선택지입니다. 세 모델 모두 Ollama에서 도구 지원이 표시되므로 점수를 믿기 전에 직접 만든 도구 스키마로 테스트하세요.',
          },
          {
            q: 'Qwen 2.5 14B와 Qwen3 14B 중 무엇을 써야 하나요?',
            a: 'Qwen2.5-Coder가 꼭 필요한 경우가 아니라면 Qwen3 14B입니다. Qwen3 14B는 더 최신 모델이고 전환 가능한 사고 모드가 있으며, 모델 카드는 비사고 모드에서도 수학·코드·상식 추론에서 Qwen2.5-Instruct를 능가한다고 밝힙니다. Q4_K_M에서 9.3 GB이므로 이 페이지의 12 GB VRAM 가이드가 그대로 적용됩니다.',
          },
          {
            q: '3.1보다 새로운 Mistral Small이 있나요?',
            a: '네. Mistral Small 3.2(2025년 중반)는 같은 24B 크기에서 3.1보다 지시 따르기와 함수 호출이 개선되었고 가중치는 Apache 2.0입니다. Mistral Small 4(2026)는 119B 전문가 혼합 모델로 가중치가 약 242 GB여서 16 GB 카드에는 들어가지 않습니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[코딩을 위한 최고의 14B 모델 비교](/ko/prompt-bites/best-14b-models-coding)',
          '[Qwen 14B vs Llama 3 8B: 로컬에서 어느 쪽이 더 잘 실행됩니까?](/ko/prompt-bites/qwen-14b-vs-llama-8b)',
          '[Qwen vs Llama vs Mistral: 완전 비교](/ko/local-llms/qwen-vs-llama-vs-mistral)',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Qwen3 Technical Report (arXiv 2505.09388), Tables 5 -- arxiv.org/abs/2505.09388',
          'Mistral-Small-24B-Base-2501 model card (Hugging Face) -- huggingface.co/mistralai/Mistral-Small-24B-Base-2501',
          'Llama-3.1-8B model card (Hugging Face) -- huggingface.co/meta-llama/Llama-3.1-8B',
          'Ollama: mistral-small -- ollama.com/library/mistral-small',
          'Ollama: llama3.1 -- ollama.com/library/llama3.1',
          'Ollama: qwen3 -- ollama.com/library/qwen3',
        ],
      },
    },
  },
}
