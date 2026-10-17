import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-en.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: Which to Run Locally?',
    dateModified: '2026-10-17',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: Tool Calling 2026',
    metaDescription: 'Tool calling, reasoning and VRAM compared: Llama 3.1 8B needs 4.9 GB, Qwen3 14B 9.3 GB (MMLU 74.8%), Mistral Small 24B 14.4 GB (MMLU ~81%). Pick by GPU.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Mistral Small 3.1 24B', 'Mistral Small 4', 'Qwen3 14B', 'Llama 3.1 8B'],
    current_hardware_mentioned: ['RTX 4090', 'RTX 3060 12 GB', 'RTX 4080 16 GB'],
    educationalLevel: 'Intermediate',
    parentArticle: '/local-llms/qwen-vs-llama-vs-mistral',
    siblingBites: ['qwen-14b-vs-llama-8b', 'best-14b-models-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: which should I run locally?',
        answer: 'Pick by VRAM: Llama 3.1 8B (4.9 GB), Qwen3 14B (9.3 GB), Mistral Small 3.1 24B (14.4 GB). Qwen 14B wins at 12 GB VRAM. Mistral Small 24B wins above 16 GB on reasoning tasks.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM, ~45 tok/s on RTX 4090, MMLU 66.6% — best for 6–8 GB cards',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 74.8% — sweet spot for 12 GB cards',
          'Mistral Small 3.1 24B Q4_K_M: 14.4 GB VRAM, ~20 tok/s, MMLU ~81% — only for 16 GB+ cards',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Mistral Small 24B vs. Qwen3 14B vs. Llama 3.1 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.1 8B (4,9 GB), Qwen3 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B gewinnt bei 12 GB VRAM. Mistral Small 24B gewinnt ab 16 GB bei Reasoning-Aufgaben.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66,6 % — beste Wahl für 6–8 GB Karten',
          'Qwen3 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 74,8 % — optimaler Punkt für 12 GB Karten',
          'Mistral Small 3.1 24B Q4_K_M: 14,4 GB VRAM, ~20 tok/s, MMLU ~81 % — nur für Karten mit 16 GB+',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B : lequel lancer en local ?',
        answer: 'Choisissez selon le VRAM : Llama 3.1 8B (4,9 Go), Qwen3 14B (9,3 Go), Mistral Small 3.1 24B (14,4 Go). Qwen 14B gagne à 12 Go de VRAM. Mistral Small 24B gagne au-dessus de 16 Go sur les tâches de raisonnement.',
        bullets: [
          'Llama 3.1 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66,6 % — meilleur choix pour cartes 6–8 Go',
          'Qwen3 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 74,8 % — point idéal pour cartes 12 Go',
          'Mistral Small 3.1 24B Q4_K_M : 14,4 Go VRAM, ~20 tok/s, MMLU ~81 % — uniquement pour cartes 16 Go+',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Mistral Small 24B・Qwen3 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB VRAMではQwen 14Bが最適。16 GB以上では推論タスクでMistral Small 24Bが優位。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.6% — 6〜8 GB カードに最適',
          'Qwen3 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 74.8% — 12 GB カードのベストチョイス',
          'Mistral Small 3.1 24B Q4_K_M：14.4 GB VRAM、~20 tok/s、MMLU ~81% — 16 GB+ カードのみ対応',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Mistral Small 24B 对比 Qwen3 14B 对比 Llama 3.1 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB 显存选 Qwen 14B。16 GB 以上推理任务选 Mistral Small 24B。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.6%——适合 6–8 GB 显卡',
          'Qwen3 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 74.8%——12 GB 显卡最佳选择',
          'Mistral Small 3.1 24B Q4_K_M：14.4 GB 显存，约 20 tok/s，MMLU ~81%——仅适用于 16 GB+ 显卡',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B at Q4_K_M uses 4.9 GB VRAM and runs at ~45 tok/s on RTX 4090 — the only viable model in this group for 6 GB cards',
          'Qwen3 14B at Q4_K_M uses 9.3 GB and scores 74.8% MMLU — the sweet spot for 12 GB cards like the RTX 3060 12 GB or RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B at Q4_K_M uses 14.4 GB and reaches ~81% MMLU — only feasible on 16 GB cards (RTX 4080, RTX 3090, RTX 4090)',
          'For coding on 12 GB: Qwen2.5-Coder 14B. For multilingual reasoning on 16 GB+: Mistral Small 3.1 24B. Below 10 GB: Llama 3.1 8B.',
          'All three models list tool calling on Ollama. Qwen3 14B adds a switchable thinking mode, Mistral Small 3.2 revised its function-calling template, and Llama 3.1 8B is the lightest option for simple single-tool calls.',
        ],
      },
      body1: {
        title: 'VRAM Requirements: Which Card Runs Which Model',
        content: [
          'The choice between these three models is primarily a VRAM decision. At Q4_K_M quantization: Llama 3.1 8B uses 4.9 GB, Qwen3 14B uses 9.3 GB, and Mistral Small 3.1 24B uses 14.4 GB. This maps directly onto three GPU tiers: 6–8 GB cards (Llama 3.1 8B only), 10–12 GB cards (Qwen3 14B), and 16+ GB cards (Mistral Small 24B).',
          'Speed on RTX 4090 at Q4_K_M: Llama 3.1 8B runs at approximately 45 tok/s, Qwen3 14B at ~28 tok/s, and Mistral Small 3.1 24B at ~20 tok/s. On an RTX 3060 12 GB, only Llama 3.1 8B and Qwen3 14B fit — Mistral Small 24B requires at minimum a 16 GB card to avoid spilling to CPU RAM.',
          'The benchmark spread is meaningful: Mistral Small 24B\'s 81% MMLU is 14 points above Llama 3.1 8B and 6 points above Qwen3 14B. On complex multi-step reasoning and instruction-following tasks, this gap is noticeable in practice.',
        ],
        columns: ['Model', 'VRAM (Q4_K_M)', 'Speed (RTX 4090)', 'MMLU', 'Minimum GPU'],
        rows: [
          { 'Model': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'Speed (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', 'Minimum GPU': 'RTX 3060 6 GB' },
          { 'Model': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'Speed (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', 'Minimum GPU': 'RTX 3060 12 GB' },
          { 'Model': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', 'Speed (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', 'Minimum GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Quality vs VRAM: When Each Model Wins',
        content: [
          '<strong>Llama 3.1 8B wins on VRAM efficiency.</strong> At 4.9 GB Q4_K_M it is the only model in this group that fits a 6 GB card with headroom for a 4k token context window. It scores 66.6% on MMLU and delivers snappy interactive responses (~45 tok/s on RTX 4090). For chat, quick coding queries, and daily use on constrained hardware, it is the correct pick.',
          '<strong>Qwen3 14B wins at 12 GB VRAM.</strong> Its 74.8% MMLU places it well above Llama 3.1 8B on reasoning and coding — and it fits within the most common prosumer GPU tier. The Qwen Coder 14B variant (same size, code-tuned) scores approximately 78% on HumanEval. If your primary use is coding and you have a 12 GB card, Qwen3 14B is the answer.',
          '<strong>Mistral Small 3.1 24B wins on quality when VRAM allows.</strong> Its 81% MMLU and strong multilingual performance make it the top choice for 16 GB cards. It handles long-form reasoning, structured output tasks, and complex instruction sets more reliably than the 14B-class models. On an RTX 4090 24 GB it fits at Q5_K_M for even better quality.',
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
            a: 'No. Mistral Small 3.1 24B at Q4_K_M requires 14.4 GB VRAM, exceeding the RTX 3060 12 GB. Dropping to Q2_K brings it to approximately 7.6 GB but causes significant quality degradation. For RTX 3060 12 GB, Qwen3 14B Q4_K_M (9.3 GB) is the correct choice — it leaves 2.7 GB headroom for context.',
          },
          {
            q: 'Is Mistral Small 24B better than Qwen3 14B for coding?',
            a: 'For general coding, Mistral Small 24B has a slight edge due to its larger size. However, Qwen2.5-Coder 14B (the code-tuned Qwen variant) is competitive with Mistral Small 24B on HumanEval and fits in 12 GB VRAM. If your budget is a 16 GB card and you need both reasoning and coding, Mistral Small 24B wins. On 12 GB, Qwen Coder 14B is the better tradeoff.',
          },
          {
            q: 'Which model should I use on a 16 GB GPU like the RTX 4080?',
            a: 'Mistral Small 3.1 24B Q4_K_M at 14.4 GB fits with 1.6 GB headroom — enough for a 2k context window. It outperforms Qwen3 14B on reasoning benchmarks. Alternatively, Qwen3 32B at Q3_K_M fits in approximately 13.5 GB and competes with Mistral Small 24B on coding tasks while offering more parameters.',
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
    },
  },
  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-de.webp',
    title: 'Mistral Small 24B vs. Qwen3 14B vs. Llama 3.1 8B: Welches lokal ausführen?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: Tool Calling 2026',
    metaDescription: 'Tool Calling, Reasoning und VRAM im Vergleich: Llama 3.1 8B braucht 4,9 GB, Qwen3 14B 9,3 GB (MMLU 74,8 %), Mistral Small 24B 14,4 GB (MMLU ~81 %).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Mistral Small 24B vs. Qwen3 14B vs. Llama 3.1 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.1 8B (4,9 GB), Qwen3 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B gewinnt bei 12 GB VRAM. Mistral Small 24B gewinnt ab 16 GB bei Reasoning-Aufgaben.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66,6 % — beste Wahl für 6–8 GB Karten',
          'Qwen3 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 74,8 % — optimaler Punkt für 12 GB Karten',
          'Mistral Small 3.1 24B Q4_K_M: 14,4 GB VRAM, ~20 tok/s, MMLU ~81 % — nur für Karten mit 16 GB+',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B in Q4_K_M verwendet 4,9 GB VRAM und läuft auf RTX 4090 mit ~45 tok/s — das einzige tragfähige Modell dieser Gruppe für 6 GB Karten',
          'Qwen3 14B in Q4_K_M verwendet 9,3 GB und erzielt 74,8 % MMLU — der optimale Punkt für 12 GB Karten wie RTX 3060 12 GB oder RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B in Q4_K_M verwendet 14,4 GB und erreicht ~81 % MMLU — nur auf 16 GB Karten machbar (RTX 4080, RTX 3090, RTX 4090)',
          'Für Coding auf 12 GB: Qwen2.5-Coder 14B. Für mehrsprachiges Reasoning auf 16 GB+: Mistral Small 3.1 24B. Unter 10 GB: Llama 3.1 8B.',
          'Alle drei Modelle listen Tool Calling auf Ollama. Qwen3 14B bietet einen schaltbaren Denkmodus, Mistral Small 3.2 überarbeitete sein Function-Calling-Template, und Llama 3.1 8B ist die leichteste Option für einfache Einzel-Tool-Aufrufe.',
        ],
      },
      body1: {
        title: 'VRAM-Anforderungen: Welche Karte führt welches Modell aus',
        content: [
          'Die Wahl zwischen diesen drei Modellen ist primär eine VRAM-Entscheidung. Bei Q4_K_M-Quantisierung: Llama 3.1 8B verwendet 4,9 GB, Qwen3 14B 9,3 GB und Mistral Small 3.1 24B 14,4 GB. Dies ordnet sich direkt drei GPU-Tiers zu: 6–8 GB Karten (nur Llama 3.1 8B), 10–12 GB Karten (Qwen3 14B) und 16+ GB Karten (Mistral Small 24B).',
          'Geschwindigkeit auf RTX 4090 bei Q4_K_M: Llama 3.1 8B läuft bei etwa 45 tok/s, Qwen3 14B bei ~28 tok/s und Mistral Small 3.1 24B bei ~20 tok/s. Auf einer RTX 3060 12 GB passen nur Llama 3.1 8B und Qwen3 14B — Mistral Small 24B benötigt mindestens eine 16 GB Karte, um kein CPU-RAM zu belegen.',
          'Der Benchmark-Abstand ist bedeutsam: Mistral Small 24Bs 81 % MMLU liegt 14 Punkte über Llama 3.1 8B und 6 Punkte über Qwen3 14B. Bei komplexen mehrstufigen Reasoning- und Instruktionsbefolgungsaufgaben ist diese Lücke in der Praxis spürbar.',
        ],
        columns: ['Modell', 'VRAM (Q4_K_M)', 'Geschwindigkeit (RTX 4090)', 'MMLU', 'Mindest-GPU'],
        rows: [
          { 'Modell': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 GB', 'Geschwindigkeit (RTX 4090)': '~45 tok/s', 'MMLU': '66,6 %', 'Mindest-GPU': 'RTX 3060 6 GB' },
          { 'Modell': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9,3 GB', 'Geschwindigkeit (RTX 4090)': '~28 tok/s', 'MMLU': '74,8 %', 'Mindest-GPU': 'RTX 3060 12 GB' },
          { 'Modell': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 GB', 'Geschwindigkeit (RTX 4090)': '~20 tok/s', 'MMLU': '~81 %', 'Mindest-GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Qualität vs. VRAM: Wann jedes Modell gewinnt',
        content: [
          '<strong>Llama 3.1 8B gewinnt bei VRAM-Effizienz.</strong> Mit 4,9 GB Q4_K_M ist es das einzige Modell dieser Gruppe, das auf eine 6 GB Karte passt und dabei noch Puffer für ein 4k-Token-Kontextfenster lässt. Es erzielt 66,6 % auf MMLU und liefert schnelle interaktive Antworten (~45 tok/s auf RTX 4090). Für Chat, schnelle Coding-Anfragen und den täglichen Einsatz auf eingeschränkter Hardware ist es die richtige Wahl.',
          '<strong>Qwen3 14B gewinnt bei 12 GB VRAM.</strong> Mit 74,8 % MMLU liegt es deutlich über Llama 3.1 8B bei Reasoning und Coding — und passt in den verbreitetsten Prosumer-GPU-Tier. Die Qwen Coder 14B-Variante (gleiche Größe, code-optimiert) erzielt etwa 78 % auf HumanEval. Bei primärem Coding-Einsatz und 12 GB Karte ist Qwen3 14B die Antwort.',
          '<strong>Mistral Small 3.1 24B gewinnt bei Qualität, wenn VRAM ausreicht.</strong> Mit 81 % MMLU und starker Mehrsprachleistung ist es die Top-Wahl für 16 GB Karten. Es bewältigt Long-Form-Reasoning, strukturierte Ausgabeaufgaben und komplexe Instruktionssets zuverlässiger als 14B-Klasse-Modelle. Auf einer RTX 4090 24 GB passt es bei Q5_K_M für noch bessere Qualität.',
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
            a: 'Nein. Mistral Small 3.1 24B bei Q4_K_M benötigt 14,4 GB VRAM und übersteigt damit die RTX 3060 12 GB. Ein Wechsel zu Q2_K reduziert den Bedarf auf etwa 7,6 GB, verursacht jedoch erheblichen Qualitätsverlust. Für die RTX 3060 12 GB ist Qwen3 14B Q4_K_M (9,3 GB) die richtige Wahl — sie lässt 2,7 GB Puffer für den Kontext.',
          },
          {
            q: 'Ist Mistral Small 24B besser als Qwen3 14B für Coding?',
            a: 'Für allgemeines Coding hat Mistral Small 24B aufgrund seiner größeren Größe einen leichten Vorsprung. Jedoch ist Qwen2.5-Coder 14B (die code-optimierte Qwen-Variante) auf HumanEval mit Mistral Small 24B konkurrenzfähig und passt in 12 GB VRAM. Wenn Ihr Budget eine 16 GB Karte vorsieht und Sie Reasoning und Coding benötigen, gewinnt Mistral Small 24B. Bei 12 GB ist Qwen Coder 14B der bessere Kompromiss.',
          },
          {
            q: 'Welches Modell sollte ich auf einer 16 GB GPU wie der RTX 4080 verwenden?',
            a: 'Mistral Small 3.1 24B Q4_K_M mit 14,4 GB passt mit 1,6 GB Puffer — ausreichend für ein 2k-Kontextfenster. Es übertrifft Qwen3 14B bei Reasoning-Benchmarks. Alternativ passt Qwen3 32B bei Q3_K_M in etwa 13,5 GB und konkurriert mit Mistral Small 24B bei Coding-Aufgaben bei mehr Parametern.',
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
    },
  },
  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-fr.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B : lequel lancer en local ?',
    seoTitle: 'Mistral Small 24B, Qwen 14B, Llama 8B : tool calling 2026',
    metaDescription: 'Appel d\'outils, raisonnement et VRAM comparés : Llama 3.1 8B exige 4,9 Go, Qwen3 14B 9,3 Go (MMLU 74,8 %), Mistral Small 24B 14,4 Go (MMLU ~81 %).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B : lequel lancer en local ?',
        answer: 'Choisissez selon le VRAM : Llama 3.1 8B (4,9 Go), Qwen3 14B (9,3 Go), Mistral Small 3.1 24B (14,4 Go). Qwen 14B gagne à 12 Go de VRAM. Mistral Small 24B gagne au-dessus de 16 Go sur les tâches de raisonnement.',
        bullets: [
          'Llama 3.1 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66,6 % — meilleur choix pour cartes 6–8 Go',
          'Qwen3 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 74,8 % — point idéal pour cartes 12 Go',
          'Mistral Small 3.1 24B Q4_K_M : 14,4 Go VRAM, ~20 tok/s, MMLU ~81 % — uniquement pour cartes 16 Go+',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B en Q4_K_M utilise 4,9 Go de VRAM et tourne à ~45 tok/s sur RTX 4090 — le seul modèle de ce groupe viable sur cartes 6 Go',
          'Qwen3 14B en Q4_K_M utilise 9,3 Go et obtient 74,8 % MMLU — le point idéal pour les cartes 12 Go comme la RTX 3060 12 Go ou la RTX 4060 Ti 16 Go',
          'Mistral Small 3.1 24B en Q4_K_M utilise 14,4 Go et atteint ~81 % MMLU — faisable uniquement sur cartes 16 Go (RTX 4080, RTX 3090, RTX 4090)',
          'Pour le coding sur 12 Go : Qwen2.5-Coder 14B. Pour le raisonnement multilingue sur 16 Go+ : Mistral Small 3.1 24B. En dessous de 10 Go : Llama 3.1 8B.',
          'Les trois modèles affichent l\'appel d\'outils sur Ollama. Qwen3 14B ajoute un mode de réflexion activable, Mistral Small 3.2 a révisé son modèle d\'appel de fonctions, et Llama 3.1 8B est l\'option la plus légère pour des appels simples à un seul outil.',
        ],
      },
      body1: {
        title: 'Besoins en VRAM : quelle carte fait tourner quel modèle',
        content: [
          'Le choix entre ces trois modèles est avant tout une décision de VRAM. En quantification Q4_K_M : Llama 3.1 8B utilise 4,9 Go, Qwen3 14B utilise 9,3 Go, et Mistral Small 3.1 24B utilise 14,4 Go. Cela correspond directement à trois tiers de GPU : cartes 6–8 Go (Llama 3.1 8B uniquement), cartes 10–12 Go (Qwen3 14B), et cartes 16+ Go (Mistral Small 24B).',
          'Vitesse sur RTX 4090 en Q4_K_M : Llama 3.1 8B tourne à environ 45 tok/s, Qwen3 14B à ~28 tok/s, et Mistral Small 3.1 24B à ~20 tok/s. Sur une RTX 3060 12 Go, seuls Llama 3.1 8B et Qwen3 14B rentrent — Mistral Small 24B nécessite au minimum une carte 16 Go pour éviter de déborder sur la RAM CPU.',
          'L\'écart de benchmark est significatif : le 81 % MMLU de Mistral Small 24B est 14 points au-dessus de Llama 3.1 8B et 6 points au-dessus de Qwen3 14B. Sur des tâches complexes de raisonnement multi-étapes et de suivi d\'instructions, cet écart est perceptible en pratique.',
        ],
        columns: ['Modèle', 'VRAM (Q4_K_M)', 'Vitesse (RTX 4090)', 'MMLU', 'GPU minimum'],
        rows: [
          { 'Modèle': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 Go', 'Vitesse (RTX 4090)': '~45 tok/s', 'MMLU': '66,6 %', 'GPU minimum': 'RTX 3060 6 Go' },
          { 'Modèle': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9,3 Go', 'Vitesse (RTX 4090)': '~28 tok/s', 'MMLU': '74,8 %', 'GPU minimum': 'RTX 3060 12 Go' },
          { 'Modèle': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 Go', 'Vitesse (RTX 4090)': '~20 tok/s', 'MMLU': '~81 %', 'GPU minimum': 'RTX 4080 16 Go' },
        ],
      },
      body2: {
        title: 'Qualité vs VRAM : quand chaque modèle gagne',
        content: [
          '<strong>Llama 3.1 8B gagne en efficacité VRAM.</strong> À 4,9 Go Q4_K_M, c\'est le seul modèle de ce groupe qui tient sur une carte 6 Go avec de la marge pour une fenêtre de contexte de 4k tokens. Il obtient 66,6 % sur MMLU et délivre des réponses interactives rapides (~45 tok/s sur RTX 4090). Pour le chat, les requêtes de coding rapides et l\'usage quotidien sur matériel contraint, c\'est le bon choix.',
          '<strong>Qwen3 14B gagne à 12 Go de VRAM.</strong> Ses 74,8 % MMLU le placent bien au-dessus de Llama 3.1 8B sur le raisonnement et le coding — et il s\'inscrit dans le tier GPU prosumer le plus courant. La variante Qwen Coder 14B (même taille, optimisée pour le code) obtient environ 78 % sur HumanEval. Si votre usage principal est le coding et que vous avez une carte 12 Go, Qwen3 14B est la réponse.',
          '<strong>Mistral Small 3.1 24B gagne en qualité quand le VRAM le permet.</strong> Ses 81 % MMLU et ses bonnes performances multilingues en font le premier choix pour les cartes 16 Go. Il gère le raisonnement long, les tâches de sortie structurée et les jeux d\'instructions complexes plus fiablement que les modèles de classe 14B. Sur une RTX 4090 24 Go, il tient en Q5_K_M pour une qualité encore supérieure.',
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
            a: 'Non. Mistral Small 3.1 24B en Q4_K_M nécessite 14,4 Go de VRAM, dépassant la RTX 3060 12 Go. Passer à Q2_K ramène le besoin à environ 7,6 Go mais cause une dégradation significative de la qualité. Pour la RTX 3060 12 Go, Qwen3 14B Q4_K_M (9,3 Go) est le bon choix — il laisse 2,7 Go de marge pour le contexte.',
          },
          {
            q: 'Mistral Small 24B est-il meilleur que Qwen3 14B pour le coding ?',
            a: 'Pour le coding général, Mistral Small 24B a un léger avantage grâce à sa taille supérieure. Cependant, Qwen2.5-Coder 14B (la variante Qwen optimisée pour le code) est compétitif avec Mistral Small 24B sur HumanEval et tient dans 12 Go de VRAM. Si votre budget est une carte 16 Go et que vous avez besoin du raisonnement et du coding, Mistral Small 24B gagne. Sur 12 Go, Qwen Coder 14B est le meilleur compromis.',
          },
          {
            q: 'Quel modèle utiliser sur un GPU 16 Go comme la RTX 4080 ?',
            a: 'Mistral Small 3.1 24B Q4_K_M à 14,4 Go tient avec 1,6 Go de marge — suffisant pour une fenêtre de contexte de 2k. Il surpasse Qwen3 14B sur les benchmarks de raisonnement. Alternativement, Qwen3 32B en Q3_K_M tient dans environ 13,5 Go et concurrence Mistral Small 24B sur les tâches de coding tout en offrant plus de paramètres.',
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
    },
  },
  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-ja.webp',
    title: 'Mistral Small 24B・Qwen3 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
    seoTitle: 'Mistral Small 24B・Qwen 14B・Llama 8B：ツール呼び出し比較2026',
    metaDescription: 'ツール呼び出し・推論・VRAMを比較：Llama 3.1 8Bは4.9 GB、Qwen3 14Bは9.3 GB（MMLU 74.8%）、Mistral Small 24Bは14.4 GB（MMLU ~81%）。',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'Mistral Small 24B・Qwen3 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB VRAMではQwen 14Bが最適。16 GB以上では推論タスクでMistral Small 24Bが優位。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.6% — 6〜8 GB カードに最適',
          'Qwen3 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 74.8% — 12 GB カードのベストチョイス',
          'Mistral Small 3.1 24B Q4_K_M：14.4 GB VRAM、~20 tok/s、MMLU ~81% — 16 GB+ カードのみ対応',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B Q4_K_Mは4.9 GB VRAMを使用しRTX 4090上で~45 tok/sで動作 — このグループで6 GBカードに対応できる唯一のモデル',
          'Qwen3 14B Q4_K_Mは9.3 GBを使用しMMLU 74.8%を記録 — RTX 3060 12 GBやRTX 4060 Ti 16 GBなど12 GBカードの最適解',
          'Mistral Small 3.1 24B Q4_K_Mは14.4 GBを使用しMMLU ~81%を達成 — 16 GBカード（RTX 4080、RTX 3090、RTX 4090）のみで実行可能',
          '12 GBでのコーディング：Qwen2.5-Coder 14B。16 GB+での多言語推論：Mistral Small 3.1 24B。10 GB未満：Llama 3.1 8B。',
          '3モデルともOllamaでツール呼び出し対応と表示されています。Qwen3 14Bは切り替え可能な思考モードを備え、Mistral Small 3.2は関数呼び出しテンプレートを改訂し、Llama 3.1 8Bは単純な単一ツール呼び出しに最も軽量な選択肢です。',
        ],
      },
      body1: {
        title: 'VRAM要件：どのカードがどのモデルを動かせるか',
        content: [
          'この3モデルの選択は主にVRAMの問題です。Q4_K_M量子化で：Llama 3.1 8Bは4.9 GB、Qwen3 14Bは9.3 GB、Mistral Small 3.1 24Bは14.4 GBを使用します。これは3つのGPUティアに直接対応します：6〜8 GBカード（Llama 3.1 8Bのみ）、10〜12 GBカード（Qwen3 14B）、16 GB以上のカード（Mistral Small 24B）。',
          'RTX 4090でのQ4_K_M速度：Llama 3.1 8Bは約45 tok/s、Qwen3 14Bは~28 tok/s、Mistral Small 3.1 24Bは~20 tok/sで動作します。RTX 3060 12 GBではLlama 3.1 8BとQwen3 14Bのみ収まります — Mistral Small 24BはCPU RAMへのスピルを避けるため最低でも16 GBカードが必要です。',
          'ベンチマークの差は意味があります：Mistral Small 24BのMMLU 81%はLlama 3.1 8Bより14ポイント、Qwen3 14Bより6ポイント高いです。複雑な多段階推論や指示遵守タスクでは、この差は実際に体感できます。',
        ],
        columns: ['モデル', 'VRAM (Q4_K_M)', '速度 (RTX 4090)', 'MMLU', '最低GPU'],
        rows: [
          { 'モデル': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', '最低GPU': 'RTX 3060 6 GB' },
          { 'モデル': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', '最低GPU': 'RTX 3060 12 GB' },
          { 'モデル': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', '速度 (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', '最低GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '品質対VRAM：各モデルが勝つ場面',
        content: [
          '<strong>Llama 3.1 8BはVRAM効率で勝ります。</strong> Q4_K_Mで4.9 GBと、4kトークンのコンテキストウィンドウ用の余裕を持って6 GBカードに収まる唯一のモデルです。MMLUで66.6%を記録し、素早いインタラクティブな応答（RTX 4090で~45 tok/s）を提供します。制限されたハードウェアでのチャット、クイックコーディングクエリ、日常使用に最適です。',
          '<strong>Qwen3 14Bは12 GB VRAMで勝ります。</strong> MMLU 74.8%で推論とコーディングにおいてLlama 3.1 8Bを大きく上回り、最も一般的なプロシューマーGPUティア内に収まります。Qwen Coder 14Bバリアント（同サイズ、コード最適化）はHumanEvalで約78%を記録します。主にコーディングに使用し12 GBカードをお持ちの場合、Qwen3 14Bが答えです。',
          '<strong>Mistral Small 3.1 24BはVRAMが許す場合に品質で勝ります。</strong> MMLU 81%と優れた多言語性能により、16 GBカードのトップ選択肢となります。14Bクラスのモデルより信頼性高く、長文推論、構造化出力タスク、複雑な指示セットを処理します。RTX 4090 24 GBではQ5_K_Mでさらに高い品質が得られます。',
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
            a: 'いいえ。Mistral Small 3.1 24B Q4_K_Mは14.4 GB VRAMが必要でRTX 3060 12 GBを超えます。Q2_Kに下げると約7.6 GBになりますが、品質が著しく低下します。RTX 3060 12 GBにはQwen3 14B Q4_K_M（9.3 GB）が適切な選択です — コンテキスト用に2.7 GBの余裕があります。',
          },
          {
            q: 'Mistral Small 24BはコーディングでQwen3 14Bより優れていますか？',
            a: '一般的なコーディングでは、Mistral Small 24Bはサイズが大きい分わずかに優位です。ただし、Qwen2.5-Coder 14B（コード最適化Qwenバリアント）はHumanEvalでMistral Small 24Bと競争力があり、12 GB VRAMに収まります。16 GBカードで推論とコーディングの両方が必要な場合はMistral Small 24Bが勝ちます。12 GBではQwen Coder 14Bがより良いトレードオフです。',
          },
          {
            q: 'RTX 4080のような16 GB GPUではどのモデルを使うべきですか？',
            a: 'Mistral Small 3.1 24B Q4_K_Mは14.4 GBで1.6 GBの余裕を持って収まります — 2kコンテキストウィンドウに十分です。推論ベンチマークでQwen3 14Bを上回ります。代替として、Qwen3 32B Q3_K_Mが約13.5 GBに収まり、コーディングタスクでMistral Small 24Bと競合しながらより多くのパラメータを提供します。',
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
    },
  },
  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-zh.webp',
    title: 'Mistral Small 24B 对比 Qwen3 14B 对比 Llama 3.1 8B：本地运行选哪个？',
    seoTitle: 'Mistral Small 24B、Qwen 14B、Llama 8B：工具调用对比2026',
    metaDescription: '工具调用、推理与显存对比：Llama 3.1 8B 需 4.9 GB，Qwen3 14B 需 9.3 GB（MMLU 74.8%），Mistral Small 24B 需 14.4 GB（MMLU ~81%）。',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'Mistral Small 24B 对比 Qwen3 14B 对比 Llama 3.1 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.1 8B（4.9 GB）、Qwen3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB 显存选 Qwen 14B。16 GB 以上推理任务选 Mistral Small 24B。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.6%——适合 6–8 GB 显卡',
          'Qwen3 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 74.8%——12 GB 显卡最佳选择',
          'Mistral Small 3.1 24B Q4_K_M：14.4 GB 显存，约 20 tok/s，MMLU ~81%——仅适用于 16 GB+ 显卡',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B Q4_K_M 使用 4.9 GB 显存，在 RTX 4090 上运行约 45 tok/s——该组中唯一适合 6 GB 显卡的模型',
          'Qwen3 14B Q4_K_M 使用 9.3 GB，MMLU 得分 74.8%——RTX 3060 12 GB 或 RTX 4060 Ti 16 GB 等 12 GB 显卡的最优解',
          'Mistral Small 3.1 24B Q4_K_M 使用 14.4 GB，MMLU 达到约 81%——仅在 16 GB 显卡（RTX 4080、RTX 3090、RTX 4090）上可行',
          '12 GB 显卡编程：选 Qwen2.5-Coder 14B。16 GB+ 多语言推理：选 Mistral Small 3.1 24B。10 GB 以下：选 Llama 3.1 8B。',
          '三款模型在 Ollama 上均标注支持工具调用。Qwen3 14B 带有可切换的思考模式，Mistral Small 3.2 修订了函数调用模板，Llama 3.1 8B 是简单单工具调用中最轻量的选择。',
        ],
      },
      body1: {
        title: '显存要求：哪款显卡运行哪个模型',
        content: [
          '这三个模型之间的选择主要是显存决策。在 Q4_K_M 量化下：Llama 3.1 8B 使用 4.9 GB，Qwen3 14B 使用 9.3 GB，Mistral Small 3.1 24B 使用 14.4 GB。这直接对应三个 GPU 层级：6–8 GB 显卡（仅 Llama 3.1 8B）、10–12 GB 显卡（Qwen3 14B）和 16 GB+ 显卡（Mistral Small 24B）。',
          'RTX 4090 上 Q4_K_M 速度：Llama 3.1 8B 约 45 tok/s，Qwen3 14B 约 28 tok/s，Mistral Small 3.1 24B 约 20 tok/s。RTX 3060 12 GB 上只有 Llama 3.1 8B 和 Qwen3 14B 能放下——Mistral Small 24B 至少需要 16 GB 显卡以避免溢出到 CPU 内存。',
          '基准测试差距显著：Mistral Small 24B 的 MMLU 81% 比 Llama 3.1 8B 高 14 分，比 Qwen3 14B 高 6 分。在复杂的多步推理和指令遵循任务上，这一差距在实践中是可以察觉到的。',
        ],
        columns: ['模型', '显存 (Q4_K_M)', '速度 (RTX 4090)', 'MMLU', '最低 GPU'],
        rows: [
          { '模型': 'Llama 3.1 8B', '显存 (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', '最低 GPU': 'RTX 3060 6 GB' },
          { '模型': 'Qwen3 14B', '显存 (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', '最低 GPU': 'RTX 3060 12 GB' },
          { '模型': 'Mistral Small 3.1 24B', '显存 (Q4_K_M)': '14.4 GB', '速度 (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', '最低 GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '质量对比显存：各模型的优势场景',
        content: [
          '<strong>Llama 3.1 8B 在显存效率上胜出。</strong>Q4_K_M 下仅需 4.9 GB，是该组中唯一能装入 6 GB 显卡并为 4k token 上下文窗口留有余量的模型。MMLU 得分 66.6%，在 RTX 4090 上提供约 45 tok/s 的快速交互响应。对于在受限硬件上进行聊天、快速编程查询和日常使用，这是正确的选择。',
          '<strong>Qwen3 14B 在 12 GB 显存下胜出。</strong>其 74.8% MMLU 在推理和编程上远高于 Llama 3.1 8B——且适合最常见的专业消费级 GPU 层级。Qwen Coder 14B 变体（相同大小，代码优化）在 HumanEval 上得分约 78%。如果主要用途是编程且拥有 12 GB 显卡，Qwen3 14B 就是答案。',
          '<strong>当显存充足时，Mistral Small 3.1 24B 在质量上胜出。</strong>其 81% MMLU 和强大的多语言表现使其成为 16 GB 显卡的首选。它比 14B 级模型更可靠地处理长篇推理、结构化输出任务和复杂指令集。在 RTX 4090 24 GB 上，可使用 Q5_K_M 获得更好的质量。',
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
            a: '不能。Mistral Small 3.1 24B Q4_K_M 需要 14.4 GB 显存，超过了 RTX 3060 12 GB 的容量。降至 Q2_K 可将需求降至约 7.6 GB，但会导致显著的质量下降。对于 RTX 3060 12 GB，Qwen3 14B Q4_K_M（9.3 GB）是正确选择——为上下文留有 2.7 GB 余量。',
          },
          {
            q: 'Mistral Small 24B 在编程方面比 Qwen3 14B 更好吗？',
            a: '对于通用编程，Mistral Small 24B 因为更大的参数量而略有优势。然而，Qwen2.5-Coder 14B（代码优化的 Qwen 变体）在 HumanEval 上与 Mistral Small 24B 竞争力相当，且适合 12 GB 显存。如果预算是 16 GB 显卡且需要推理和编程双重能力，Mistral Small 24B 胜出。12 GB 显存下，Qwen Coder 14B 是更好的权衡。',
          },
          {
            q: '在 RTX 4080 等 16 GB GPU 上应该使用哪个模型？',
            a: 'Mistral Small 3.1 24B Q4_K_M 以 14.4 GB 装入，留有 1.6 GB 余量——足够 2k 上下文窗口。它在推理基准测试上超越 Qwen3 14B。或者，Qwen3 32B Q3_K_M 约需 13.5 GB，在编程任务上与 Mistral Small 24B 竞争，同时提供更多参数。',
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
    },
  },
  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-pt.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: qual rodar localmente?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: tool calling 2026',
    metaDescription: 'Tool calling, raciocínio e VRAM comparados: Llama 3.1 8B usa 4,9 GB, Qwen3 14B 9,3 GB (MMLU 74,8%), Mistral Small 24B 14,4 GB (MMLU ~81%). Escolha pela GPU.',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: qual devo rodar localmente?',
        answer: 'Escolha pelo VRAM: Llama 3.1 8B (4,9 GB), Qwen3 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B ganha com 12 GB de VRAM. Mistral Small 24B ganha acima de 16 GB em tarefas de raciocínio.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB de VRAM, ~45 tok/s na RTX 4090, MMLU 66,6% — melhor para placas de 6–8 GB',
          'Qwen3 14B Q4_K_M: 9,3 GB de VRAM, ~28 tok/s, MMLU 74,8% — ponto ideal para placas de 12 GB',
          'Mistral Small 3.1 24B Q4_K_M: 14,4 GB de VRAM, ~20 tok/s, MMLU ~81% — apenas para placas de 16 GB ou mais',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B em Q4_K_M usa 4,9 GB de VRAM e roda a ~45 tok/s na RTX 4090 — o único modelo viável deste grupo para placas de 6 GB',
          'Qwen3 14B em Q4_K_M usa 9,3 GB e pontua 74,8% no MMLU — o ponto ideal para placas de 12 GB como RTX 3060 12 GB ou RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B em Q4_K_M usa 14,4 GB e alcança ~81% no MMLU — viável apenas em placas de 16 GB (RTX 4080, RTX 3090, RTX 4090)',
          'Para codificação em 12 GB: Qwen2.5-Coder 14B. Para raciocínio multilíngue em 16 GB+: Mistral Small 3.1 24B. Abaixo de 10 GB: Llama 3.1 8B.',
          'Os três modelos listam chamadas de ferramentas no Ollama. O Qwen3 14B traz um modo de raciocínio alternável, o Mistral Small 3.2 revisou seu template de function calling e o Llama 3.1 8B é a opção mais leve para chamadas simples a uma única ferramenta.',
        ],
      },
      body1: {
        title: 'Requisitos de VRAM: qual placa roda qual modelo',
        content: [
          'A escolha entre esses três modelos é principalmente uma decisão de VRAM. Em quantização Q4_K_M: Llama 3.1 8B usa 4,9 GB, Qwen3 14B usa 9,3 GB e Mistral Small 3.1 24B usa 14,4 GB. Isso se corresponde diretamente a três níveis de GPU: placas de 6–8 GB (apenas Llama 3.1 8B), placas de 10–12 GB (Qwen3 14B) e placas de 16+ GB (Mistral Small 24B).',
          'Velocidade na RTX 4090 em Q4_K_M: Llama 3.1 8B roda a aproximadamente 45 tok/s, Qwen3 14B a ~28 tok/s e Mistral Small 3.1 24B a ~20 tok/s. Em uma RTX 3060 12 GB, apenas Llama 3.1 8B e Qwen3 14B cabem — Mistral Small 24B requer no mínimo uma placa de 16 GB para evitar derramamento para a RAM da CPU.',
          'A diferença nos benchmarks é significativa: o MMLU 81% do Mistral Small 24B supera o Llama 3.1 8B em 14 pontos e o Qwen3 14B em 6 pontos. Em tarefas complexas de raciocínio em várias etapas e seguimento de instruções, essa lacuna é perceptível na prática.',
        ],
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'Velocidade (RTX 4090)', 'MMLU', 'GPU mínima'],
        rows: [
          { 'Modelo': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 GB', 'Velocidade (RTX 4090)': '~45 tok/s', 'MMLU': '66,6%', 'GPU mínima': 'RTX 3060 6 GB' },
          { 'Modelo': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9,3 GB', 'Velocidade (RTX 4090)': '~28 tok/s', 'MMLU': '74,8%', 'GPU mínima': 'RTX 3060 12 GB' },
          { 'Modelo': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 GB', 'Velocidade (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', 'GPU mínima': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Qualidade vs VRAM: quando cada modelo ganha',
        content: [
          '<strong>Llama 3.1 8B ganha em eficiência de VRAM.</strong> Com 4,9 GB Q4_K_M, é o único modelo deste grupo que cabe em uma placa de 6 GB com margem para uma janela de contexto de 4k tokens. Pontua 66,6% no MMLU e oferece respostas interativas rápidas (~45 tok/s na RTX 4090). Para chat, consultas rápidas de codificação e uso diário em hardware limitado, é a escolha correta.',
          '<strong>Qwen3 14B ganha com 12 GB de VRAM.</strong> Seu MMLU de 74,8% o coloca bem acima do Llama 3.1 8B em raciocínio e codificação — e cabe no nível de GPU prosumer mais comum. A variante Qwen Coder 14B (mesmo tamanho, otimizado para código) pontua aproximadamente 78% no HumanEval. Se seu uso principal é codificação e você tem uma placa de 12 GB, Qwen3 14B é a resposta.',
          '<strong>Mistral Small 3.1 24B ganha em qualidade quando a VRAM permite.</strong> Seu MMLU de 81% e sólido desempenho multilíngue o tornam a principal escolha para placas de 16 GB. Lida com raciocínio de forma longa, tarefas de saída estruturada e conjuntos de instruções complexos de forma mais confiável do que os modelos da classe 14B. Em uma RTX 4090 24 GB, cabe em Q5_K_M para qualidade ainda melhor.',
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
            a: 'Não. Mistral Small 3.1 24B em Q4_K_M requer 14,4 GB de VRAM, excedendo a RTX 3060 12 GB. Baixar para Q2_K reduz para aproximadamente 7,6 GB, mas causa degradação significativa de qualidade. Para a RTX 3060 12 GB, Qwen3 14B Q4_K_M (9,3 GB) é a escolha correta — deixa 2,7 GB de margem para o contexto.',
          },
          {
            q: 'Mistral Small 24B é melhor que Qwen3 14B para codificação?',
            a: 'Para codificação geral, Mistral Small 24B tem uma leve vantagem devido ao seu tamanho maior. No entanto, Qwen2.5-Coder 14B (a variante Qwen otimizada para código) é competitivo com Mistral Small 24B no HumanEval e cabe em 12 GB de VRAM. Se o seu orçamento é uma placa de 16 GB e você precisa de raciocínio e codificação, Mistral Small 24B ganha. Em 12 GB, Qwen Coder 14B é a melhor compensação.',
          },
          {
            q: 'Qual modelo devo usar em uma GPU de 16 GB como a RTX 4080?',
            a: 'Mistral Small 3.1 24B Q4_K_M com 14,4 GB cabe com 1,6 GB de margem — suficiente para uma janela de contexto de 2k. Supera o Qwen3 14B nos benchmarks de raciocínio. Alternativamente, Qwen3 32B em Q3_K_M cabe em aproximadamente 13,5 GB e compete com Mistral Small 24B em tarefas de codificação, oferecendo mais parâmetros.',
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
    },
  },
  es: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-es.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: ¿cuál ejecutar en local?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B: tool calling 2026',
    metaDescription: 'Tool calling, razonamiento y VRAM comparados: Llama 3.1 8B necesita 4,9 GB, Qwen3 14B 9,3 GB (MMLU 74,8%), Mistral Small 24B 14,4 GB (MMLU ~81%).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: ¿cuál debo ejecutar en local?',
        answer: 'Elige según el VRAM: Llama 3.1 8B (4.9 GB), Qwen3 14B (9.3 GB), Mistral Small 3.1 24B (14.4 GB). Qwen 14B gana con 12 GB de VRAM. Mistral Small 24B gana por encima de 16 GB en tareas de razonamiento.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM, ~45 tok/s en RTX 4090, MMLU 66.6% — mejor para tarjetas de 6–8 GB',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 74.8% — punto ideal para tarjetas de 12 GB',
          'Mistral Small 3.1 24B Q4_K_M: 14.4 GB VRAM, ~20 tok/s, MMLU ~81% — solo para tarjetas de 16 GB o más',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B en Q4_K_M usa 4.9 GB de VRAM y corre a ~45 tok/s en RTX 4090 — el único modelo viable de este grupo para tarjetas de 6 GB',
          'Qwen3 14B en Q4_K_M usa 9.3 GB y obtiene 74.8% MMLU — el punto ideal para tarjetas de 12 GB como la RTX 3060 12 GB o RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B en Q4_K_M usa 14.4 GB y alcanza ~81% MMLU — solo factible en tarjetas de 16 GB (RTX 4080, RTX 3090, RTX 4090)',
          'Para coding en 12 GB: Qwen2.5-Coder 14B. Para razonamiento multilingüe en 16 GB+: Mistral Small 3.1 24B. Por debajo de 10 GB: Llama 3.1 8B.',
          'Los tres modelos indican compatibilidad con llamadas a herramientas en Ollama. Qwen3 14B añade un modo de razonamiento activable, Mistral Small 3.2 revisó su plantilla de function calling y Llama 3.1 8B es la opción más ligera para llamadas simples a una sola herramienta.',
        ],
      },
      body1: {
        title: 'Requisitos de VRAM: qué tarjeta ejecuta qué modelo',
        content: [
          'La elección entre estos tres modelos es principalmente una decisión de VRAM. En cuantización Q4_K_M: Llama 3.1 8B usa 4.9 GB, Qwen3 14B usa 9.3 GB y Mistral Small 3.1 24B usa 14.4 GB. Esto se corresponde directamente con tres niveles de GPU: tarjetas de 6–8 GB (solo Llama 3.1 8B), tarjetas de 10–12 GB (Qwen3 14B) y tarjetas de 16+ GB (Mistral Small 24B).',
          'Velocidad en RTX 4090 en Q4_K_M: Llama 3.1 8B corre a aproximadamente 45 tok/s, Qwen3 14B a ~28 tok/s y Mistral Small 3.1 24B a ~20 tok/s. En una RTX 3060 12 GB, solo caben Llama 3.1 8B y Qwen3 14B — Mistral Small 24B necesita como mínimo una tarjeta de 16 GB para evitar volcar a la RAM de la CPU.',
          'La diferencia en benchmarks es significativa: el 81% MMLU de Mistral Small 24B supera en 14 puntos a Llama 3.1 8B y en 6 puntos a Qwen3 14B. En tareas complejas de razonamiento multi-paso y seguimiento de instrucciones, esta diferencia es notable en la práctica.',
        ],
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'Velocidad (RTX 4090)', 'MMLU', 'GPU mínima'],
        rows: [
          { 'Modelo': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'Velocidad (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', 'GPU mínima': 'RTX 3060 6 GB' },
          { 'Modelo': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'Velocidad (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', 'GPU mínima': 'RTX 3060 12 GB' },
          { 'Modelo': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', 'Velocidad (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', 'GPU mínima': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Calidad vs VRAM: cuándo gana cada modelo',
        content: [
          '<strong>Llama 3.1 8B gana en eficiencia de VRAM.</strong> Con 4.9 GB Q4_K_M es el único modelo de este grupo que cabe en una tarjeta de 6 GB con margen para una ventana de contexto de 4k tokens. Obtiene 66.6% en MMLU y ofrece respuestas interactivas rápidas (~45 tok/s en RTX 4090). Para chat, consultas rápidas de coding y uso diario en hardware limitado, es la elección correcta.',
          '<strong>Qwen3 14B gana con 12 GB de VRAM.</strong> Su 74.8% MMLU lo sitúa muy por encima de Llama 3.1 8B en razonamiento y coding — y cabe en el nivel de GPU prosumer más común. La variante Qwen Coder 14B (mismo tamaño, optimizada para código) obtiene aproximadamente 78% en HumanEval. Si tu uso principal es el coding y tienes una tarjeta de 12 GB, Qwen3 14B es la respuesta.',
          '<strong>Mistral Small 3.1 24B gana en calidad cuando el VRAM lo permite.</strong> Su 81% MMLU y sólido rendimiento multilingüe lo convierten en la mejor opción para tarjetas de 16 GB. Gestiona razonamiento de forma larga, tareas de salida estructurada y conjuntos de instrucciones complejos de forma más fiable que los modelos de clase 14B. En una RTX 4090 24 GB cabe en Q5_K_M para incluso mejor calidad.',
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
            a: 'No. Mistral Small 3.1 24B en Q4_K_M necesita 14.4 GB de VRAM, superando los 12 GB de la RTX 3060. Bajar a Q2_K lo reduce a aproximadamente 7.6 GB pero provoca una degradación de calidad significativa. Para la RTX 3060 12 GB, Qwen3 14B Q4_K_M (9.3 GB) es la elección correcta — deja 2.7 GB de margen para el contexto.',
          },
          {
            q: '¿Mistral Small 24B es mejor que Qwen3 14B para coding?',
            a: 'Para coding general, Mistral Small 24B tiene una ligera ventaja por su mayor tamaño. Sin embargo, Qwen2.5-Coder 14B (la variante Qwen optimizada para código) es competitivo con Mistral Small 24B en HumanEval y cabe en 12 GB de VRAM. Si tu presupuesto es una tarjeta de 16 GB y necesitas tanto razonamiento como coding, Mistral Small 24B gana. En 12 GB, Qwen Coder 14B es la mejor compensación.',
          },
          {
            q: '¿Qué modelo debo usar en una GPU de 16 GB como la RTX 4080?',
            a: 'Mistral Small 3.1 24B Q4_K_M con 14.4 GB cabe con 1.6 GB de margen — suficiente para una ventana de contexto de 2k. Supera a Qwen3 14B en benchmarks de razonamiento. Alternativamente, Qwen3 32B en Q3_K_M cabe en aproximadamente 13.5 GB y compite con Mistral Small 24B en tareas de coding mientras ofrece más parámetros.',
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
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-ar.webp',
    title: '⁨Mistral Small 24B⁩ مقابل ⁨Qwen3 14B⁩ مقابل ⁨Llama 3.1 8B⁩: أيهما تشغّل محلياً؟',
    seoTitle: '⁨Mistral Small 24B⁩ وQwen 14B وLlama 8B: استدعاء الأدوات 2026',
    metaDescription: 'مقارنة استدعاء الأدوات والاستدلال وVRAM: ⁨Llama 3.1 8B⁩ يحتاج ⁨4.9 GB⁩، و⁨Qwen3 14B⁩ ⁨9.3 GB⁩ (⁨MMLU 74.8%⁩)، و⁨Mistral Small 24B⁩ ⁨14.4 GB⁩ (⁨MMLU ~81%⁩).',
    publishDate: '2026-05-23',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'Mistral Small 24B مقابل Qwen3 14B مقابل Llama 3.1 8B: أيهما يجب تشغيله محلياً؟',
        answer: 'اختر حسب VRAM: Llama 3.1 8B (4.9 GB)، Qwen3 14B (9.3 GB)، Mistral Small 3.1 24B (14.4 GB). Qwen 14B يتفوق بـ 12 GB من VRAM. Mistral Small 24B يتفوق فوق 16 GB في مهام الاستدلال.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM، ~45 توكن/ث على RTX 4090، MMLU 66.6% — الأفضل لبطاقات 6–8 GB',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM، ~28 توكن/ث، MMLU 74.8% — النقطة المثلى لبطاقات 12 GB',
          'Mistral Small 3.1 24B Q4_K_M: 14.4 GB VRAM، ~20 توكن/ث، MMLU ~81% — لبطاقات 16 GB فما فوق فقط',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B بتكميم Q4_K_M يستخدم 4.9 GB VRAM ويعمل بـ ~45 توكن/ث على RTX 4090 — النموذج الوحيد القابل للتطبيق من هذه المجموعة لبطاقات 6 GB',
          'Qwen3 14B بتكميم Q4_K_M يستخدم 9.3 GB ويحقق 74.8% MMLU — النقطة المثلى لبطاقات 12 GB كـ RTX 3060 12 GB أو RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B بتكميم Q4_K_M يستخدم 14.4 GB ويصل إلى ~81% MMLU — قابل للتطبيق فقط على بطاقات 16 GB (RTX 4080، RTX 3090، RTX 4090)',
          'للبرمجة على 12 GB: Qwen2.5-Coder 14B. للاستدلال متعدد اللغات على 16 GB+: Mistral Small 3.1 24B. أقل من 10 GB: Llama 3.1 8B.',
          'تُدرج النماذج الثلاثة دعم استدعاء الأدوات على Ollama. يضيف Qwen3 14B وضع تفكير قابلاً للتبديل، وراجع Mistral Small 3.2 قالب استدعاء الدوال، ويبقى Llama 3.1 8B الخيار الأخف لاستدعاءات الأداة الواحدة البسيطة.',
        ],
      },
      body1: {
        title: 'متطلبات VRAM: أي بطاقة تشغّل أي نموذج',
        content: [
          'الاختيار بين هذه النماذج الثلاثة هو في الأساس قرار VRAM. عند تكميم Q4_K_M: Llama 3.1 8B يستخدم 4.9 GB، Qwen3 14B يستخدم 9.3 GB، وMistral Small 3.1 24B يستخدم 14.4 GB. هذا يتوافق مباشرةً مع ثلاثة مستويات من GPU: بطاقات 6–8 GB (Llama 3.1 8B فقط)، بطاقات 10–12 GB (Qwen3 14B)، وبطاقات 16+ GB (Mistral Small 24B).',
          'السرعة على RTX 4090 بتكميم Q4_K_M: Llama 3.1 8B يعمل بـ ~45 توكن/ث، Qwen3 14B بـ ~28 توكن/ث، وMistral Small 3.1 24B بـ ~20 توكن/ث. على RTX 3060 12 GB، يتسع فقط Llama 3.1 8B وQwen3 14B — Mistral Small 24B يحتاج على الأقل بطاقة 16 GB لتجنب نقل الأحمال إلى RAM وحدة المعالجة.',
          'الفرق في المعايير القياسية كبير: 81% MMLU لـ Mistral Small 24B يتفوق بـ 14 نقطة على Llama 3.1 8B وبـ 6 نقاط على Qwen3 14B. في مهام الاستدلال متعدد الخطوات المعقدة واتباع التعليمات، هذا الفارق ملحوظ عملياً.',
        ],
        columns: ['النموذج', 'VRAM (Q4_K_M)', 'السرعة (RTX 4090)', 'MMLU', 'الحد الأدنى للـ GPU'],
        rows: [
          { 'النموذج': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'السرعة (RTX 4090)': '~45 توكن/ث', 'MMLU': '66.6%', 'الحد الأدنى للـ GPU': 'RTX 3060 6 GB' },
          { 'النموذج': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'السرعة (RTX 4090)': '~28 توكن/ث', 'MMLU': '74.8%', 'الحد الأدنى للـ GPU': 'RTX 3060 12 GB' },
          { 'النموذج': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', 'السرعة (RTX 4090)': '~20 توكن/ث', 'MMLU': '~81%', 'الحد الأدنى للـ GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'الجودة مقابل VRAM: متى يتفوق كل نموذج',
        content: [
          '<strong>Llama 3.1 8B يتفوق في كفاءة VRAM.</strong> بـ 4.9 GB Q4_K_M هو النموذج الوحيد من هذه المجموعة الذي يتسع في بطاقة 6 GB مع هامش لنافذة سياق 4k توكن. يحقق 66.6% في MMLU ويوفر استجابات تفاعلية سريعة (~45 توكن/ث على RTX 4090). للمحادثة واستفسارات البرمجة السريعة والاستخدام اليومي على الأجهزة المحدودة، هو الاختيار الصحيح.',
          '<strong>Qwen3 14B يتفوق بـ 12 GB VRAM.</strong> 74.8% MMLU يضعه فوق Llama 3.1 8B في الاستدلال والبرمجة — ويتسع في أكثر مستويات GPU شيوعاً للمحترفين. نسخة Qwen Coder 14B (نفس الحجم، محسّنة للكود) تحقق ~78% في HumanEval.',
          '<strong>Mistral Small 3.1 24B يتفوق في الجودة عندما يسمح VRAM بذلك.</strong> 81% MMLU وأداء متعدد اللغات القوي يجعلانه الخيار الأفضل لبطاقات 16 GB. يتعامل مع الاستدلال الطويل ومهام الإخراج المنظم ومجموعات التعليمات المعقدة بشكل أكثر موثوقية من نماذج فئة 14B.',
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
            a: 'لا. Mistral Small 3.1 24B بتكميم Q4_K_M يحتاج 14.4 GB VRAM، متجاوزاً 12 GB لـ RTX 3060. التنزل إلى Q2_K يقلله إلى ~7.6 GB لكن يُسبب تدهوراً ملحوظاً في الجودة. لـ RTX 3060 12 GB، Qwen3 14B Q4_K_M (9.3 GB) هو الاختيار الصحيح — يترك 2.7 GB هامشاً للسياق.',
          },
          {
            q: 'هل Mistral Small 24B أفضل من Qwen3 14B للبرمجة؟',
            a: 'للبرمجة العامة، Mistral Small 24B له ميزة طفيفة بسبب حجمه الأكبر. غير أن Qwen2.5-Coder 14B (نسخة Qwen المحسّنة للكود) تنافس Mistral Small 24B في HumanEval وتتسع في 12 GB VRAM. إذا كانت ميزانيتك بطاقة 16 GB وتحتاج الاستدلال والبرمجة معاً، Mistral Small 24B يفوز. بـ 12 GB، Qwen Coder 14B هو التوازن الأفضل.',
          },
          {
            q: 'أي نموذج يجب أن أستخدم مع GPU بسعة 16 GB مثل RTX 4080؟',
            a: 'Mistral Small 3.1 24B Q4_K_M بـ 14.4 GB يتسع مع هامش 1.6 GB — كافٍ لنافذة سياق 2k. يتفوق على Qwen3 14B في معايير الاستدلال. بديلاً، Qwen3 32B بتكميم Q3_K_M يتسع في ~13.5 GB وينافس Mistral Small 24B في مهام البرمجة مع عرضه مزيداً من المعاملات.',
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
    },
  },
  ko: {
    theme: 'Model Comparisons',
    heroImage: '/images/mistral-small-24b-vs-qwen-14b-vs-llama-8b-overview-hero-ko.webp',
    title: 'Mistral Small 24B vs Qwen3 14B vs Llama 3.1 8B: 로컬에서 무엇을 실행할까?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 도구 호출 2026',
    metaDescription: '도구 호출·추론·VRAM 비교: Llama 3.1 8B는 4.9 GB, Qwen3 14B는 9.3 GB(MMLU 74.8%), Mistral Small 24B는 14.4 GB(MMLU ~81%)가 필요합니다.',
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
        answer: 'VRAM에 따라 선택하십시오: Llama 3.1 8B(4.9 GB), Qwen3 14B(9.3 GB), Mistral Small 3.1 24B(14.4 GB). 12 GB VRAM에서는 Qwen 14B가 최적입니다. 16 GB 이상의 추론 작업에서는 Mistral Small 24B가 우위를 보입니다.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM, RTX 4090에서 ~45 tok/s, MMLU 66.6% — 6~8 GB 카드에 최적',
          'Qwen3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 74.8% — 12 GB 카드의 최적 선택',
          'Mistral Small 3.1 24B Q4_K_M: 14.4 GB VRAM, ~20 tok/s, MMLU ~81% — 16 GB 이상 카드 전용',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3.1 8B Q4_K_M은 VRAM 4.9 GB를 사용하며 RTX 4090에서 ~45 tok/s로 실행됩니다 — 6 GB 카드에서 이 그룹 내 유일하게 실행 가능한 모델입니다.',
          'Qwen3 14B Q4_K_M은 9.3 GB를 사용하며 MMLU 74.8%를 달성합니다 — RTX 3060 12 GB 또는 RTX 4060 Ti 16 GB 등 12 GB 카드의 최적 선택입니다.',
          'Mistral Small 3.1 24B Q4_K_M은 14.4 GB를 사용하며 MMLU ~81%에 도달합니다 — 16 GB 카드(RTX 4080, RTX 3090, RTX 4090)에서만 실행 가능합니다.',
          '12 GB에서 코딩 작업: Qwen2.5-Coder 14B. 16 GB 이상에서 다국어 추론: Mistral Small 3.1 24B. 10 GB 미만: Llama 3.1 8B.',
          '세 모델 모두 Ollama에서 도구 호출 지원이 표시됩니다. Qwen3 14B는 전환 가능한 사고 모드를 갖추었고, Mistral Small 3.2는 함수 호출 템플릿을 개선했으며, Llama 3.1 8B는 단순한 단일 도구 호출에 가장 가벼운 선택입니다.',
        ],
      },
      body1: {
        title: 'VRAM 요구 사항: 어느 카드가 어느 모델을 실행하는가',
        content: [
          '이 세 가지 모델 중에서의 선택은 기본적으로 VRAM에 관한 결정입니다. Q4_K_M 양자화 기준: Llama 3.1 8B는 4.9 GB, Qwen3 14B는 9.3 GB, Mistral Small 3.1 24B는 14.4 GB를 사용합니다. 이는 세 가지 GPU 계층에 직접 대응됩니다: 6~8 GB 카드(Llama 3.1 8B만 가능), 10~12 GB 카드(Qwen3 14B), 16 GB 이상 카드(Mistral Small 24B).',
          'RTX 4090에서 Q4_K_M 기준 속도: Llama 3.1 8B는 약 45 tok/s, Qwen3 14B는 ~28 tok/s, Mistral Small 3.1 24B는 ~20 tok/s입니다. RTX 3060 12 GB에서는 Llama 3.1 8B와 Qwen3 14B만 탑재 가능합니다 — Mistral Small 24B는 CPU RAM으로의 스필을 방지하려면 최소 16 GB 카드가 필요합니다.',
          '벤치마크 차이는 중요합니다: Mistral Small 24B의 MMLU 81%는 Llama 3.1 8B보다 14점, Qwen3 14B보다 6점 높습니다. 복잡한 다단계 추론 및 지시 이행 작업에서 이 격차는 실제로 체감됩니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Q4_K_M 양자화 기준으로 Llama 3.1 8B는 4.9 GB VRAM, Qwen3 14B는 9.3 GB, Mistral Small 3.1 24B는 14.4 GB를 사용합니다.' },
          { type: 'plain-terms', text: 'VRAM 6~8 GB: Llama 3.1 8B만 가능합니다. VRAM 12 GB: Qwen3 14B가 최적입니다. VRAM 16 GB 이상: Mistral Small 24B가 최고 품질을 제공합니다.' },
        ],
        columns: ['모델', 'VRAM (Q4_K_M)', '속도 (RTX 4090)', 'MMLU', '최소 GPU'],
        rows: [
          { '모델': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', '속도 (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', '최소 GPU': 'RTX 3060 6 GB' },
          { '모델': 'Qwen3 14B', 'VRAM (Q4_K_M)': '9.3 GB', '속도 (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', '최소 GPU': 'RTX 3060 12 GB' },
          { '모델': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', '속도 (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', '최소 GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '품질 대 VRAM: 각 모델이 유리한 상황',
        content: [
          '<strong>Llama 3.1 8B는 VRAM 효율성에서 우위를 보입니다.</strong> Q4_K_M 기준 4.9 GB로 이 그룹에서 4k 토큰 컨텍스트 윈도우를 위한 여유 공간과 함께 6 GB 카드에 탑재되는 유일한 모델입니다. MMLU 66.6%를 달성하며 빠른 대화형 응답(RTX 4090에서 ~45 tok/s)을 제공합니다. 채팅, 빠른 코딩 쿼리, 제한된 하드웨어에서의 일상적인 사용에 적합한 선택입니다.',
          '<strong>Qwen3 14B는 12 GB VRAM에서 최적입니다.</strong> MMLU 74.8%로 추론 및 코딩에서 Llama 3.1 8B를 크게 상회하며 가장 일반적인 프로슈머 GPU 계층에 탑재됩니다. Qwen Coder 14B 변형(동일 크기, 코드 최적화)은 HumanEval에서 약 78%를 달성합니다. 주요 용도가 코딩이고 12 GB 카드를 보유하고 있다면 Qwen3 14B가 정답입니다.',
          '<strong>Mistral Small 3.1 24B는 VRAM이 허용할 때 품질에서 우위를 보입니다.</strong> MMLU 81%와 강력한 다국어 성능으로 16 GB 카드의 최선 선택입니다. 14B급 모델보다 장문 추론, 구조화된 출력 작업, 복잡한 지시 이행을 더 안정적으로 처리합니다. RTX 4090 24 GB에서는 Q5_K_M으로 더욱 향상된 품질을 얻을 수 있습니다.',
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
            a: '아닙니다. Mistral Small 3.1 24B는 Q4_K_M 기준 14.4 GB VRAM이 필요하여 RTX 3060의 12 GB를 초과합니다. Q2_K로 낮추면 약 7.6 GB로 줄어들지만 품질이 크게 저하됩니다. RTX 3060 12 GB에서는 Qwen3 14B Q4_K_M(9.3 GB)이 올바른 선택입니다 — 컨텍스트를 위한 2.7 GB의 여유 공간을 남깁니다.',
          },
          {
            q: 'Mistral Small 24B는 코딩에서 Qwen3 14B보다 우수합니까?',
            a: '일반 코딩에서는 크기가 더 큰 Mistral Small 24B가 약간의 우위를 보입니다. 그러나 Qwen2.5-Coder 14B(코드 최적화 Qwen 변형)는 HumanEval에서 Mistral Small 24B와 경쟁하며 12 GB VRAM에 탑재됩니다. 16 GB 카드 예산으로 추론과 코딩 모두 필요하다면 Mistral Small 24B가 유리합니다. 12 GB에서는 Qwen Coder 14B가 더 나은 트레이드오프입니다.',
          },
          {
            q: 'RTX 4080과 같은 16 GB GPU에서는 어느 모델을 사용해야 합니까?',
            a: 'Mistral Small 3.1 24B Q4_K_M은 14.4 GB로 1.6 GB 여유 공간과 함께 탑재됩니다 — 2k 컨텍스트 윈도우에 충분합니다. 추론 벤치마크에서 Qwen3 14B를 능가합니다. 대안으로 Qwen3 32B Q3_K_M은 약 13.5 GB에 탑재되어 코딩 작업에서 Mistral Small 24B와 경쟁하며 더 많은 파라미터를 제공합니다.',
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
        title: '관련 가이드',
        items: [
          '[Qwen 14B vs Llama 8B 비교](/ko/prompt-bites/qwen-14b-vs-llama-8b)',
          '[12 GB VRAM 최적 코딩 LLM](/ko/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[로컬 LLM에 필요한 VRAM 용량](/ko/local-llms/how-much-vram-local-llm)',
          '[로컬 LLM 최적 GPU 가이드](/ko/local-llms/best-gpus-for-local-llms)',
        ],
      },
    },
  },
}
