import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B: Which to Run Locally?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B: 4.9 GB VRAM. Qwen 3 14B: 9.3 GB, MMLU 74.8%. Mistral Small 24B: 14.4 GB, MMLU 81%. Pick by VRAM tier. Quick answer from PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    current_models_mentioned: ['Mistral Small 3.1 24B', 'Qwen 3 14B', 'Llama 3.3 8B'],
    current_hardware_mentioned: ['RTX 4090', 'RTX 3060 12 GB', 'RTX 4080 16 GB'],
    educationalLevel: 'Intermediate',
    parentArticle: '/local-llms/qwen-vs-llama-vs-mistral',
    siblingBites: ['qwen-14b-vs-llama-8b', 'best-14b-models-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B: which should I run locally?',
        answer: 'Pick by VRAM: Llama 3.3 8B (4.9 GB), Qwen 3 14B (9.3 GB), Mistral Small 3.1 24B (14.4 GB). Qwen 14B wins at 12 GB VRAM. Mistral Small 24B wins above 16 GB on reasoning tasks.',
        bullets: [
          'Llama 3.3 8B Q4_K_M: 4.9 GB VRAM, ~45 tok/s on RTX 4090, MMLU 66.6% — best for 6–8 GB cards',
          'Qwen 3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 74.8% — sweet spot for 12 GB cards',
          'Mistral Small 3.1 24B Q4_K_M: 14.4 GB VRAM, ~20 tok/s, MMLU ~81% — only for 16 GB+ cards',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Mistral Small 24B vs. Qwen 3 14B vs. Llama 3.3 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.3 8B (4,9 GB), Qwen 3 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B gewinnt bei 12 GB VRAM. Mistral Small 24B gewinnt ab 16 GB bei Reasoning-Aufgaben.',
        bullets: [
          'Llama 3.3 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66,6 % — beste Wahl für 6–8 GB Karten',
          'Qwen 3 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 74,8 % — optimaler Punkt für 12 GB Karten',
          'Mistral Small 3.1 24B Q4_K_M: 14,4 GB VRAM, ~20 tok/s, MMLU ~81 % — nur für Karten mit 16 GB+',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B : lequel lancer en local ?',
        answer: 'Choisissez selon le VRAM : Llama 3.3 8B (4,9 Go), Qwen 3 14B (9,3 Go), Mistral Small 3.1 24B (14,4 Go). Qwen 14B gagne à 12 Go de VRAM. Mistral Small 24B gagne au-dessus de 16 Go sur les tâches de raisonnement.',
        bullets: [
          'Llama 3.3 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66,6 % — meilleur choix pour cartes 6–8 Go',
          'Qwen 3 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 74,8 % — point idéal pour cartes 12 Go',
          'Mistral Small 3.1 24B Q4_K_M : 14,4 Go VRAM, ~20 tok/s, MMLU ~81 % — uniquement pour cartes 16 Go+',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Mistral Small 24B・Qwen 3 14B・Llama 3.3 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.3 8B（4.9 GB）、Qwen 3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB VRAMではQwen 14Bが最適。16 GB以上では推論タスクでMistral Small 24Bが優位。',
        bullets: [
          'Llama 3.3 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.6% — 6〜8 GB カードに最適',
          'Qwen 3 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 74.8% — 12 GB カードのベストチョイス',
          'Mistral Small 3.1 24B Q4_K_M：14.4 GB VRAM、~20 tok/s、MMLU ~81% — 16 GB+ カードのみ対応',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Mistral Small 24B 对比 Qwen 3 14B 对比 Llama 3.3 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.3 8B（4.9 GB）、Qwen 3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB 显存选 Qwen 14B。16 GB 以上推理任务选 Mistral Small 24B。',
        bullets: [
          'Llama 3.3 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.6%——适合 6–8 GB 显卡',
          'Qwen 3 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 74.8%——12 GB 显卡最佳选择',
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
          'Llama 3.3 8B at Q4_K_M uses 4.9 GB VRAM and runs at ~45 tok/s on RTX 4090 — the only viable model in this group for 6 GB cards',
          'Qwen 3 14B at Q4_K_M uses 9.3 GB and scores 74.8% MMLU — the sweet spot for 12 GB cards like the RTX 3060 12 GB or RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B at Q4_K_M uses 14.4 GB and reaches ~81% MMLU — only feasible on 16 GB cards (RTX 4080, RTX 3090, RTX 4090)',
          'For coding on 12 GB: Qwen 3 Coder 14B. For multilingual reasoning on 16 GB+: Mistral Small 3.1 24B. Below 10 GB: Llama 3.3 8B.',
        ],
      },
      body1: {
        title: 'VRAM Requirements: Which Card Runs Which Model',
        content: [
          'The choice between these three models is primarily a VRAM decision. At Q4_K_M quantization: Llama 3.3 8B uses 4.9 GB, Qwen 3 14B uses 9.3 GB, and Mistral Small 3.1 24B uses 14.4 GB. This maps directly onto three GPU tiers: 6–8 GB cards (Llama 3.3 8B only), 10–12 GB cards (Qwen 3 14B), and 16+ GB cards (Mistral Small 24B).',
          'Speed on RTX 4090 at Q4_K_M: Llama 3.3 8B runs at approximately 45 tok/s, Qwen 3 14B at ~28 tok/s, and Mistral Small 3.1 24B at ~20 tok/s. On an RTX 3060 12 GB, only Llama 3.3 8B and Qwen 3 14B fit — Mistral Small 24B requires at minimum a 16 GB card to avoid spilling to CPU RAM.',
          'The benchmark spread is meaningful: Mistral Small 24B\'s 81% MMLU is 14 points above Llama 3.3 8B and 6 points above Qwen 3 14B. On complex multi-step reasoning and instruction-following tasks, this gap is noticeable in practice.',
        ],
        columns: ['Model', 'VRAM (Q4_K_M)', 'Speed (RTX 4090)', 'MMLU', 'Minimum GPU'],
        rows: [
          { 'Model': 'Llama 3.3 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'Speed (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', 'Minimum GPU': 'RTX 3060 6 GB' },
          { 'Model': 'Qwen 3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'Speed (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', 'Minimum GPU': 'RTX 3060 12 GB' },
          { 'Model': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', 'Speed (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', 'Minimum GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Quality vs VRAM: When Each Model Wins',
        content: [
          '<strong>Llama 3.3 8B wins on VRAM efficiency.</strong> At 4.9 GB Q4_K_M it is the only model in this group that fits a 6 GB card with headroom for a 4k token context window. It scores 66.6% on MMLU and delivers snappy interactive responses (~45 tok/s on RTX 4090). For chat, quick coding queries, and daily use on constrained hardware, it is the correct pick.',
          '<strong>Qwen 3 14B wins at 12 GB VRAM.</strong> Its 74.8% MMLU places it well above Llama 3.3 8B on reasoning and coding — and it fits within the most common prosumer GPU tier. The Qwen Coder 14B variant (same size, code-tuned) scores approximately 78% on HumanEval. If your primary use is coding and you have a 12 GB card, Qwen 3 14B is the answer.',
          '<strong>Mistral Small 3.1 24B wins on quality when VRAM allows.</strong> Its 81% MMLU and strong multilingual performance make it the top choice for 16 GB cards. It handles long-form reasoning, structured output tasks, and complex instruction sets more reliably than the 14B-class models. On an RTX 4090 24 GB it fits at Q5_K_M for even better quality.',
          'For a direct 14B-class comparison see the <a href="/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs Llama 8B</a> comparison, which includes coding benchmark detail.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers: Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Can Mistral Small 24B run on an RTX 3060 12 GB?',
            a: 'No. Mistral Small 3.1 24B at Q4_K_M requires 14.4 GB VRAM, exceeding the RTX 3060 12 GB. Dropping to Q2_K brings it to approximately 7.6 GB but causes significant quality degradation. For RTX 3060 12 GB, Qwen 3 14B Q4_K_M (9.3 GB) is the correct choice — it leaves 2.7 GB headroom for context.',
          },
          {
            q: 'Is Mistral Small 24B better than Qwen 3 14B for coding?',
            a: 'For general coding, Mistral Small 24B has a slight edge due to its larger size. However, Qwen 3 Coder 14B (the code-tuned Qwen variant) is competitive with Mistral Small 24B on HumanEval and fits in 12 GB VRAM. If your budget is a 16 GB card and you need both reasoning and coding, Mistral Small 24B wins. On 12 GB, Qwen Coder 14B is the better tradeoff.',
          },
          {
            q: 'Which model should I use on a 16 GB GPU like the RTX 4080?',
            a: 'Mistral Small 3.1 24B Q4_K_M at 14.4 GB fits with 1.6 GB headroom — enough for a 2k context window. It outperforms Qwen 3 14B on reasoning benchmarks. Alternatively, Qwen 3 32B at Q3_K_M fits in approximately 13.5 GB and competes with Mistral Small 24B on coding tasks while offering more parameters.',
          },
          {
            q: 'How does Llama 3.3 8B compare to Llama 3.2?',
            a: 'Llama 3.2 8B was not released — the 3.2 series introduced 1B, 3B, and multimodal 11B/90B variants only. Llama 3.3 8B remains the standard 8B Llama reference model. For text-only use at 6–8 GB VRAM, Llama 3.3 8B is the current recommended pick in this size class.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs. Qwen 3 14B vs. Llama 3.3 8B: Welches lokal ausführen?',
    seoTitle: 'Mistral Small 24B vs. Qwen 14B vs. Llama 8B 2026',
    metaDescription: 'Llama 3.3 8B: 4,9 GB VRAM. Qwen 3 14B: 9,3 GB, MMLU 74,8 %. Mistral Small 24B: 14,4 GB, MMLU 81 %. Auswahl nach VRAM-Tier. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      de: {
        question: 'Mistral Small 24B vs. Qwen 3 14B vs. Llama 3.3 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.3 8B (4,9 GB), Qwen 3 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B gewinnt bei 12 GB VRAM. Mistral Small 24B gewinnt ab 16 GB bei Reasoning-Aufgaben.',
        bullets: [
          'Llama 3.3 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66,6 % — beste Wahl für 6–8 GB Karten',
          'Qwen 3 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 74,8 % — optimaler Punkt für 12 GB Karten',
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
          'Llama 3.3 8B in Q4_K_M verwendet 4,9 GB VRAM und läuft auf RTX 4090 mit ~45 tok/s — das einzige tragfähige Modell dieser Gruppe für 6 GB Karten',
          'Qwen 3 14B in Q4_K_M verwendet 9,3 GB und erzielt 74,8 % MMLU — der optimale Punkt für 12 GB Karten wie RTX 3060 12 GB oder RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B in Q4_K_M verwendet 14,4 GB und erreicht ~81 % MMLU — nur auf 16 GB Karten machbar (RTX 4080, RTX 3090, RTX 4090)',
          'Für Coding auf 12 GB: Qwen 3 Coder 14B. Für mehrsprachiges Reasoning auf 16 GB+: Mistral Small 3.1 24B. Unter 10 GB: Llama 3.3 8B.',
        ],
      },
      body1: {
        title: 'VRAM-Anforderungen: Welche Karte führt welches Modell aus',
        content: [
          'Die Wahl zwischen diesen drei Modellen ist primär eine VRAM-Entscheidung. Bei Q4_K_M-Quantisierung: Llama 3.3 8B verwendet 4,9 GB, Qwen 3 14B 9,3 GB und Mistral Small 3.1 24B 14,4 GB. Dies ordnet sich direkt drei GPU-Tiers zu: 6–8 GB Karten (nur Llama 3.3 8B), 10–12 GB Karten (Qwen 3 14B) und 16+ GB Karten (Mistral Small 24B).',
          'Geschwindigkeit auf RTX 4090 bei Q4_K_M: Llama 3.3 8B läuft bei etwa 45 tok/s, Qwen 3 14B bei ~28 tok/s und Mistral Small 3.1 24B bei ~20 tok/s. Auf einer RTX 3060 12 GB passen nur Llama 3.3 8B und Qwen 3 14B — Mistral Small 24B benötigt mindestens eine 16 GB Karte, um kein CPU-RAM zu belegen.',
          'Der Benchmark-Abstand ist bedeutsam: Mistral Small 24Bs 81 % MMLU liegt 14 Punkte über Llama 3.3 8B und 6 Punkte über Qwen 3 14B. Bei komplexen mehrstufigen Reasoning- und Instruktionsbefolgungsaufgaben ist diese Lücke in der Praxis spürbar.',
        ],
        columns: ['Modell', 'VRAM (Q4_K_M)', 'Geschwindigkeit (RTX 4090)', 'MMLU', 'Mindest-GPU'],
        rows: [
          { 'Modell': 'Llama 3.3 8B', 'VRAM (Q4_K_M)': '4,9 GB', 'Geschwindigkeit (RTX 4090)': '~45 tok/s', 'MMLU': '66,6 %', 'Mindest-GPU': 'RTX 3060 6 GB' },
          { 'Modell': 'Qwen 3 14B', 'VRAM (Q4_K_M)': '9,3 GB', 'Geschwindigkeit (RTX 4090)': '~28 tok/s', 'MMLU': '74,8 %', 'Mindest-GPU': 'RTX 3060 12 GB' },
          { 'Modell': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 GB', 'Geschwindigkeit (RTX 4090)': '~20 tok/s', 'MMLU': '~81 %', 'Mindest-GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Qualität vs. VRAM: Wann jedes Modell gewinnt',
        content: [
          '<strong>Llama 3.3 8B gewinnt bei VRAM-Effizienz.</strong> Mit 4,9 GB Q4_K_M ist es das einzige Modell dieser Gruppe, das auf eine 6 GB Karte passt und dabei noch Puffer für ein 4k-Token-Kontextfenster lässt. Es erzielt 66,6 % auf MMLU und liefert schnelle interaktive Antworten (~45 tok/s auf RTX 4090). Für Chat, schnelle Coding-Anfragen und den täglichen Einsatz auf eingeschränkter Hardware ist es die richtige Wahl.',
          '<strong>Qwen 3 14B gewinnt bei 12 GB VRAM.</strong> Mit 74,8 % MMLU liegt es deutlich über Llama 3.3 8B bei Reasoning und Coding — und passt in den verbreitetsten Prosumer-GPU-Tier. Die Qwen Coder 14B-Variante (gleiche Größe, code-optimiert) erzielt etwa 78 % auf HumanEval. Bei primärem Coding-Einsatz und 12 GB Karte ist Qwen 3 14B die Antwort.',
          '<strong>Mistral Small 3.1 24B gewinnt bei Qualität, wenn VRAM ausreicht.</strong> Mit 81 % MMLU und starker Mehrsprachleistung ist es die Top-Wahl für 16 GB Karten. Es bewältigt Long-Form-Reasoning, strukturierte Ausgabeaufgaben und komplexe Instruktionssets zuverlässiger als 14B-Klasse-Modelle. Auf einer RTX 4090 24 GB passt es bei Q5_K_M für noch bessere Qualität.',
          'Für einen direkten 14B-Klasse-Vergleich siehe den <a href="/de/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs. Llama 8B</a>-Vergleich, der Coding-Benchmark-Details enthält.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten: Mistral Small 24B vs. Qwen 14B vs. Llama 8B',
        faqs: [
          {
            q: 'Kann Mistral Small 24B auf einer RTX 3060 12 GB laufen?',
            a: 'Nein. Mistral Small 3.1 24B bei Q4_K_M benötigt 14,4 GB VRAM und übersteigt damit die RTX 3060 12 GB. Ein Wechsel zu Q2_K reduziert den Bedarf auf etwa 7,6 GB, verursacht jedoch erheblichen Qualitätsverlust. Für die RTX 3060 12 GB ist Qwen 3 14B Q4_K_M (9,3 GB) die richtige Wahl — sie lässt 2,7 GB Puffer für den Kontext.',
          },
          {
            q: 'Ist Mistral Small 24B besser als Qwen 3 14B für Coding?',
            a: 'Für allgemeines Coding hat Mistral Small 24B aufgrund seiner größeren Größe einen leichten Vorsprung. Jedoch ist Qwen 3 Coder 14B (die code-optimierte Qwen-Variante) auf HumanEval mit Mistral Small 24B konkurrenzfähig und passt in 12 GB VRAM. Wenn Ihr Budget eine 16 GB Karte vorsieht und Sie Reasoning und Coding benötigen, gewinnt Mistral Small 24B. Bei 12 GB ist Qwen Coder 14B der bessere Kompromiss.',
          },
          {
            q: 'Welches Modell sollte ich auf einer 16 GB GPU wie der RTX 4080 verwenden?',
            a: 'Mistral Small 3.1 24B Q4_K_M mit 14,4 GB passt mit 1,6 GB Puffer — ausreichend für ein 2k-Kontextfenster. Es übertrifft Qwen 3 14B bei Reasoning-Benchmarks. Alternativ passt Qwen 3 32B bei Q3_K_M in etwa 13,5 GB und konkurriert mit Mistral Small 24B bei Coding-Aufgaben bei mehr Parametern.',
          },
          {
            q: 'Wie unterscheidet sich Llama 3.3 8B von Llama 3.2?',
            a: 'Llama 3.2 8B wurde nicht veröffentlicht — die 3.2-Serie führte nur 1B, 3B und multimodale 11B/90B-Varianten ein. Llama 3.3 8B bleibt das Standard-8B-Llama-Referenzmodell. Für rein textbasierten Einsatz bei 6–8 GB VRAM ist Llama 3.3 8B die aktuell empfohlene Wahl in dieser Größenklasse.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B : lequel lancer en local ?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B : 4,9 Go VRAM. Qwen 3 14B : 9,3 Go, MMLU 74,8 %. Mistral Small 24B : 14,4 Go, MMLU 81 %. Choisissez selon le tier VRAM. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      fr: {
        question: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B : lequel lancer en local ?',
        answer: 'Choisissez selon le VRAM : Llama 3.3 8B (4,9 Go), Qwen 3 14B (9,3 Go), Mistral Small 3.1 24B (14,4 Go). Qwen 14B gagne à 12 Go de VRAM. Mistral Small 24B gagne au-dessus de 16 Go sur les tâches de raisonnement.',
        bullets: [
          'Llama 3.3 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66,6 % — meilleur choix pour cartes 6–8 Go',
          'Qwen 3 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 74,8 % — point idéal pour cartes 12 Go',
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
          'Llama 3.3 8B en Q4_K_M utilise 4,9 Go de VRAM et tourne à ~45 tok/s sur RTX 4090 — le seul modèle de ce groupe viable sur cartes 6 Go',
          'Qwen 3 14B en Q4_K_M utilise 9,3 Go et obtient 74,8 % MMLU — le point idéal pour les cartes 12 Go comme la RTX 3060 12 Go ou la RTX 4060 Ti 16 Go',
          'Mistral Small 3.1 24B en Q4_K_M utilise 14,4 Go et atteint ~81 % MMLU — faisable uniquement sur cartes 16 Go (RTX 4080, RTX 3090, RTX 4090)',
          'Pour le coding sur 12 Go : Qwen 3 Coder 14B. Pour le raisonnement multilingue sur 16 Go+ : Mistral Small 3.1 24B. En dessous de 10 Go : Llama 3.3 8B.',
        ],
      },
      body1: {
        title: 'Besoins en VRAM : quelle carte fait tourner quel modèle',
        content: [
          'Le choix entre ces trois modèles est avant tout une décision de VRAM. En quantification Q4_K_M : Llama 3.3 8B utilise 4,9 Go, Qwen 3 14B utilise 9,3 Go, et Mistral Small 3.1 24B utilise 14,4 Go. Cela correspond directement à trois tiers de GPU : cartes 6–8 Go (Llama 3.3 8B uniquement), cartes 10–12 Go (Qwen 3 14B), et cartes 16+ Go (Mistral Small 24B).',
          'Vitesse sur RTX 4090 en Q4_K_M : Llama 3.3 8B tourne à environ 45 tok/s, Qwen 3 14B à ~28 tok/s, et Mistral Small 3.1 24B à ~20 tok/s. Sur une RTX 3060 12 Go, seuls Llama 3.3 8B et Qwen 3 14B rentrent — Mistral Small 24B nécessite au minimum une carte 16 Go pour éviter de déborder sur la RAM CPU.',
          'L\'écart de benchmark est significatif : le 81 % MMLU de Mistral Small 24B est 14 points au-dessus de Llama 3.3 8B et 6 points au-dessus de Qwen 3 14B. Sur des tâches complexes de raisonnement multi-étapes et de suivi d\'instructions, cet écart est perceptible en pratique.',
        ],
        columns: ['Modèle', 'VRAM (Q4_K_M)', 'Vitesse (RTX 4090)', 'MMLU', 'GPU minimum'],
        rows: [
          { 'Modèle': 'Llama 3.3 8B', 'VRAM (Q4_K_M)': '4,9 Go', 'Vitesse (RTX 4090)': '~45 tok/s', 'MMLU': '66,6 %', 'GPU minimum': 'RTX 3060 6 Go' },
          { 'Modèle': 'Qwen 3 14B', 'VRAM (Q4_K_M)': '9,3 Go', 'Vitesse (RTX 4090)': '~28 tok/s', 'MMLU': '74,8 %', 'GPU minimum': 'RTX 3060 12 Go' },
          { 'Modèle': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 Go', 'Vitesse (RTX 4090)': '~20 tok/s', 'MMLU': '~81 %', 'GPU minimum': 'RTX 4080 16 Go' },
        ],
      },
      body2: {
        title: 'Qualité vs VRAM : quand chaque modèle gagne',
        content: [
          '<strong>Llama 3.3 8B gagne en efficacité VRAM.</strong> À 4,9 Go Q4_K_M, c\'est le seul modèle de ce groupe qui tient sur une carte 6 Go avec de la marge pour une fenêtre de contexte de 4k tokens. Il obtient 66,6 % sur MMLU et délivre des réponses interactives rapides (~45 tok/s sur RTX 4090). Pour le chat, les requêtes de coding rapides et l\'usage quotidien sur matériel contraint, c\'est le bon choix.',
          '<strong>Qwen 3 14B gagne à 12 Go de VRAM.</strong> Ses 74,8 % MMLU le placent bien au-dessus de Llama 3.3 8B sur le raisonnement et le coding — et il s\'inscrit dans le tier GPU prosumer le plus courant. La variante Qwen Coder 14B (même taille, optimisée pour le code) obtient environ 78 % sur HumanEval. Si votre usage principal est le coding et que vous avez une carte 12 Go, Qwen 3 14B est la réponse.',
          '<strong>Mistral Small 3.1 24B gagne en qualité quand le VRAM le permet.</strong> Ses 81 % MMLU et ses bonnes performances multilingues en font le premier choix pour les cartes 16 Go. Il gère le raisonnement long, les tâches de sortie structurée et les jeux d\'instructions complexes plus fiablement que les modèles de classe 14B. Sur une RTX 4090 24 Go, il tient en Q5_K_M pour une qualité encore supérieure.',
          'Pour une comparaison directe de la classe 14B, consultez la <a href="/fr/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">comparaison Qwen 14B vs Llama 8B</a>, qui inclut le détail des benchmarks de coding.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides : Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24B peut-il fonctionner sur une RTX 3060 12 Go ?',
            a: 'Non. Mistral Small 3.1 24B en Q4_K_M nécessite 14,4 Go de VRAM, dépassant la RTX 3060 12 Go. Passer à Q2_K ramène le besoin à environ 7,6 Go mais cause une dégradation significative de la qualité. Pour la RTX 3060 12 Go, Qwen 3 14B Q4_K_M (9,3 Go) est le bon choix — il laisse 2,7 Go de marge pour le contexte.',
          },
          {
            q: 'Mistral Small 24B est-il meilleur que Qwen 3 14B pour le coding ?',
            a: 'Pour le coding général, Mistral Small 24B a un léger avantage grâce à sa taille supérieure. Cependant, Qwen 3 Coder 14B (la variante Qwen optimisée pour le code) est compétitif avec Mistral Small 24B sur HumanEval et tient dans 12 Go de VRAM. Si votre budget est une carte 16 Go et que vous avez besoin du raisonnement et du coding, Mistral Small 24B gagne. Sur 12 Go, Qwen Coder 14B est le meilleur compromis.',
          },
          {
            q: 'Quel modèle utiliser sur un GPU 16 Go comme la RTX 4080 ?',
            a: 'Mistral Small 3.1 24B Q4_K_M à 14,4 Go tient avec 1,6 Go de marge — suffisant pour une fenêtre de contexte de 2k. Il surpasse Qwen 3 14B sur les benchmarks de raisonnement. Alternativement, Qwen 3 32B en Q3_K_M tient dans environ 13,5 Go et concurrence Mistral Small 24B sur les tâches de coding tout en offrant plus de paramètres.',
          },
          {
            q: 'Comment Llama 3.3 8B se compare-t-il à Llama 3.2 ?',
            a: 'Llama 3.2 8B n\'a pas été publié — la série 3.2 a introduit uniquement les variantes 1B, 3B et multimodales 11B/90B. Llama 3.3 8B reste le modèle de référence 8B Llama standard. Pour un usage texte uniquement à 6–8 Go de VRAM, Llama 3.3 8B est le choix recommandé actuel dans cette classe de taille.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B・Qwen 3 14B・Llama 3.3 8B：ローカルでどれを動かすべきか？',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B：4.9 GB VRAM。Qwen 3 14B：9.3 GB、MMLU 74.8%。Mistral Small 24B：14.4 GB、MMLU 81%。VRAMティアで選択。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      ja: {
        question: 'Mistral Small 24B・Qwen 3 14B・Llama 3.3 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.3 8B（4.9 GB）、Qwen 3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB VRAMではQwen 14Bが最適。16 GB以上では推論タスクでMistral Small 24Bが優位。',
        bullets: [
          'Llama 3.3 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.6% — 6〜8 GB カードに最適',
          'Qwen 3 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 74.8% — 12 GB カードのベストチョイス',
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
          'Llama 3.3 8B Q4_K_Mは4.9 GB VRAMを使用しRTX 4090上で~45 tok/sで動作 — このグループで6 GBカードに対応できる唯一のモデル',
          'Qwen 3 14B Q4_K_Mは9.3 GBを使用しMMLU 74.8%を記録 — RTX 3060 12 GBやRTX 4060 Ti 16 GBなど12 GBカードの最適解',
          'Mistral Small 3.1 24B Q4_K_Mは14.4 GBを使用しMMLU ~81%を達成 — 16 GBカード（RTX 4080、RTX 3090、RTX 4090）のみで実行可能',
          '12 GBでのコーディング：Qwen 3 Coder 14B。16 GB+での多言語推論：Mistral Small 3.1 24B。10 GB未満：Llama 3.3 8B。',
        ],
      },
      body1: {
        title: 'VRAM要件：どのカードがどのモデルを動かせるか',
        content: [
          'この3モデルの選択は主にVRAMの問題です。Q4_K_M量子化で：Llama 3.3 8Bは4.9 GB、Qwen 3 14Bは9.3 GB、Mistral Small 3.1 24Bは14.4 GBを使用します。これは3つのGPUティアに直接対応します：6〜8 GBカード（Llama 3.3 8Bのみ）、10〜12 GBカード（Qwen 3 14B）、16 GB以上のカード（Mistral Small 24B）。',
          'RTX 4090でのQ4_K_M速度：Llama 3.3 8Bは約45 tok/s、Qwen 3 14Bは~28 tok/s、Mistral Small 3.1 24Bは~20 tok/sで動作します。RTX 3060 12 GBではLlama 3.3 8BとQwen 3 14Bのみ収まります — Mistral Small 24BはCPU RAMへのスピルを避けるため最低でも16 GBカードが必要です。',
          'ベンチマークの差は意味があります：Mistral Small 24BのMMLU 81%はLlama 3.3 8Bより14ポイント、Qwen 3 14Bより6ポイント高いです。複雑な多段階推論や指示遵守タスクでは、この差は実際に体感できます。',
        ],
        columns: ['モデル', 'VRAM (Q4_K_M)', '速度 (RTX 4090)', 'MMLU', '最低GPU'],
        rows: [
          { 'モデル': 'Llama 3.3 8B', 'VRAM (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', '最低GPU': 'RTX 3060 6 GB' },
          { 'モデル': 'Qwen 3 14B', 'VRAM (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', '最低GPU': 'RTX 3060 12 GB' },
          { 'モデル': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', '速度 (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', '最低GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '品質対VRAM：各モデルが勝つ場面',
        content: [
          '<strong>Llama 3.3 8BはVRAM効率で勝ります。</strong> Q4_K_Mで4.9 GBと、4kトークンのコンテキストウィンドウ用の余裕を持って6 GBカードに収まる唯一のモデルです。MMLUで66.6%を記録し、素早いインタラクティブな応答（RTX 4090で~45 tok/s）を提供します。制限されたハードウェアでのチャット、クイックコーディングクエリ、日常使用に最適です。',
          '<strong>Qwen 3 14Bは12 GB VRAMで勝ります。</strong> MMLU 74.8%で推論とコーディングにおいてLlama 3.3 8Bを大きく上回り、最も一般的なプロシューマーGPUティア内に収まります。Qwen Coder 14Bバリアント（同サイズ、コード最適化）はHumanEvalで約78%を記録します。主にコーディングに使用し12 GBカードをお持ちの場合、Qwen 3 14Bが答えです。',
          '<strong>Mistral Small 3.1 24BはVRAMが許す場合に品質で勝ります。</strong> MMLU 81%と優れた多言語性能により、16 GBカードのトップ選択肢となります。14Bクラスのモデルより信頼性高く、長文推論、構造化出力タスク、複雑な指示セットを処理します。RTX 4090 24 GBではQ5_K_Mでさらに高い品質が得られます。',
          '14Bクラスの直接比較については、コーディングベンチマーク詳細を含む<a href="/ja/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B対Llama 8B</a>の比較をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問：Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24BはRTX 3060 12 GBで動作しますか？',
            a: 'いいえ。Mistral Small 3.1 24B Q4_K_Mは14.4 GB VRAMが必要でRTX 3060 12 GBを超えます。Q2_Kに下げると約7.6 GBになりますが、品質が著しく低下します。RTX 3060 12 GBにはQwen 3 14B Q4_K_M（9.3 GB）が適切な選択です — コンテキスト用に2.7 GBの余裕があります。',
          },
          {
            q: 'Mistral Small 24BはコーディングでQwen 3 14Bより優れていますか？',
            a: '一般的なコーディングでは、Mistral Small 24Bはサイズが大きい分わずかに優位です。ただし、Qwen 3 Coder 14B（コード最適化Qwenバリアント）はHumanEvalでMistral Small 24Bと競争力があり、12 GB VRAMに収まります。16 GBカードで推論とコーディングの両方が必要な場合はMistral Small 24Bが勝ちます。12 GBではQwen Coder 14Bがより良いトレードオフです。',
          },
          {
            q: 'RTX 4080のような16 GB GPUではどのモデルを使うべきですか？',
            a: 'Mistral Small 3.1 24B Q4_K_Mは14.4 GBで1.6 GBの余裕を持って収まります — 2kコンテキストウィンドウに十分です。推論ベンチマークでQwen 3 14Bを上回ります。代替として、Qwen 3 32B Q3_K_Mが約13.5 GBに収まり、コーディングタスクでMistral Small 24Bと競合しながらより多くのパラメータを提供します。',
          },
          {
            q: 'Llama 3.3 8BとLlama 3.2の違いは何ですか？',
            a: 'Llama 3.2 8Bはリリースされていません — 3.2シリーズは1B、3B、マルチモーダル11B/90Bバリアントのみを導入しました。Llama 3.3 8Bは標準的な8B Llamaリファレンスモデルのままです。6〜8 GB VRAMでのテキストのみの使用には、Llama 3.3 8Bがこのサイズクラスで現在推奨される選択肢です。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B 对比 Qwen 3 14B 对比 Llama 3.3 8B：本地运行选哪个？',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.3 8B：4.9 GB 显存。Qwen 3 14B：9.3 GB、MMLU 74.8%。Mistral Small 24B：14.4 GB、MMLU 81%。按显存层级选择。PromptQuorum 快速解答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      zh: {
        question: 'Mistral Small 24B 对比 Qwen 3 14B 对比 Llama 3.3 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.3 8B（4.9 GB）、Qwen 3 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB 显存选 Qwen 14B。16 GB 以上推理任务选 Mistral Small 24B。',
        bullets: [
          'Llama 3.3 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.6%——适合 6–8 GB 显卡',
          'Qwen 3 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 74.8%——12 GB 显卡最佳选择',
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
          'Llama 3.3 8B Q4_K_M 使用 4.9 GB 显存，在 RTX 4090 上运行约 45 tok/s——该组中唯一适合 6 GB 显卡的模型',
          'Qwen 3 14B Q4_K_M 使用 9.3 GB，MMLU 得分 74.8%——RTX 3060 12 GB 或 RTX 4060 Ti 16 GB 等 12 GB 显卡的最优解',
          'Mistral Small 3.1 24B Q4_K_M 使用 14.4 GB，MMLU 达到约 81%——仅在 16 GB 显卡（RTX 4080、RTX 3090、RTX 4090）上可行',
          '12 GB 显卡编程：选 Qwen 3 Coder 14B。16 GB+ 多语言推理：选 Mistral Small 3.1 24B。10 GB 以下：选 Llama 3.3 8B。',
        ],
      },
      body1: {
        title: '显存要求：哪款显卡运行哪个模型',
        content: [
          '这三个模型之间的选择主要是显存决策。在 Q4_K_M 量化下：Llama 3.3 8B 使用 4.9 GB，Qwen 3 14B 使用 9.3 GB，Mistral Small 3.1 24B 使用 14.4 GB。这直接对应三个 GPU 层级：6–8 GB 显卡（仅 Llama 3.3 8B）、10–12 GB 显卡（Qwen 3 14B）和 16 GB+ 显卡（Mistral Small 24B）。',
          'RTX 4090 上 Q4_K_M 速度：Llama 3.3 8B 约 45 tok/s，Qwen 3 14B 约 28 tok/s，Mistral Small 3.1 24B 约 20 tok/s。RTX 3060 12 GB 上只有 Llama 3.3 8B 和 Qwen 3 14B 能放下——Mistral Small 24B 至少需要 16 GB 显卡以避免溢出到 CPU 内存。',
          '基准测试差距显著：Mistral Small 24B 的 MMLU 81% 比 Llama 3.3 8B 高 14 分，比 Qwen 3 14B 高 6 分。在复杂的多步推理和指令遵循任务上，这一差距在实践中是可以察觉到的。',
        ],
        columns: ['模型', '显存 (Q4_K_M)', '速度 (RTX 4090)', 'MMLU', '最低 GPU'],
        rows: [
          { '模型': 'Llama 3.3 8B', '显存 (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', '最低 GPU': 'RTX 3060 6 GB' },
          { '模型': 'Qwen 3 14B', '显存 (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', '最低 GPU': 'RTX 3060 12 GB' },
          { '模型': 'Mistral Small 3.1 24B', '显存 (Q4_K_M)': '14.4 GB', '速度 (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', '最低 GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '质量对比显存：各模型的优势场景',
        content: [
          '<strong>Llama 3.3 8B 在显存效率上胜出。</strong>Q4_K_M 下仅需 4.9 GB，是该组中唯一能装入 6 GB 显卡并为 4k token 上下文窗口留有余量的模型。MMLU 得分 66.6%，在 RTX 4090 上提供约 45 tok/s 的快速交互响应。对于在受限硬件上进行聊天、快速编程查询和日常使用，这是正确的选择。',
          '<strong>Qwen 3 14B 在 12 GB 显存下胜出。</strong>其 74.8% MMLU 在推理和编程上远高于 Llama 3.3 8B——且适合最常见的专业消费级 GPU 层级。Qwen Coder 14B 变体（相同大小，代码优化）在 HumanEval 上得分约 78%。如果主要用途是编程且拥有 12 GB 显卡，Qwen 3 14B 就是答案。',
          '<strong>当显存充足时，Mistral Small 3.1 24B 在质量上胜出。</strong>其 81% MMLU 和强大的多语言表现使其成为 16 GB 显卡的首选。它比 14B 级模型更可靠地处理长篇推理、结构化输出任务和复杂指令集。在 RTX 4090 24 GB 上，可使用 Q5_K_M 获得更好的质量。',
          '关于 14B 级直接比较，请参阅<a href="/zh/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B 对比 Llama 8B</a>比较，其中包含编程基准测试详情。',
        ],
      },
      faq: {
        id: 'faq',
        title: '快速解答：Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24B 能在 RTX 3060 12 GB 上运行吗？',
            a: '不能。Mistral Small 3.1 24B Q4_K_M 需要 14.4 GB 显存，超过了 RTX 3060 12 GB 的容量。降至 Q2_K 可将需求降至约 7.6 GB，但会导致显著的质量下降。对于 RTX 3060 12 GB，Qwen 3 14B Q4_K_M（9.3 GB）是正确选择——为上下文留有 2.7 GB 余量。',
          },
          {
            q: 'Mistral Small 24B 在编程方面比 Qwen 3 14B 更好吗？',
            a: '对于通用编程，Mistral Small 24B 因为更大的参数量而略有优势。然而，Qwen 3 Coder 14B（代码优化的 Qwen 变体）在 HumanEval 上与 Mistral Small 24B 竞争力相当，且适合 12 GB 显存。如果预算是 16 GB 显卡且需要推理和编程双重能力，Mistral Small 24B 胜出。12 GB 显存下，Qwen Coder 14B 是更好的权衡。',
          },
          {
            q: '在 RTX 4080 等 16 GB GPU 上应该使用哪个模型？',
            a: 'Mistral Small 3.1 24B Q4_K_M 以 14.4 GB 装入，留有 1.6 GB 余量——足够 2k 上下文窗口。它在推理基准测试上超越 Qwen 3 14B。或者，Qwen 3 32B Q3_K_M 约需 13.5 GB，在编程任务上与 Mistral Small 24B 竞争，同时提供更多参数。',
          },
          {
            q: 'Llama 3.3 8B 与 Llama 3.2 有何区别？',
            a: 'Llama 3.2 8B 并未发布——3.2 系列仅引入了 1B、3B 以及多模态 11B/90B 变体。Llama 3.3 8B 仍是标准的 8B Llama 参考模型。对于 6–8 GB 显存的纯文本使用，Llama 3.3 8B 是该尺寸类别中当前推荐的选择。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B: qual rodar localmente?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026',
    metaDescription: 'Llama 3.3 8B: 4,9 GB de VRAM. Qwen 3 14B: 9,3 GB, MMLU 74,8%. Mistral Small 24B: 14,4 GB, MMLU 81%. Escolha pelo nível de VRAM. Resposta rápida.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      pt: {
        question: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B: qual devo rodar localmente?',
        answer: 'Escolha pelo VRAM: Llama 3.3 8B (4,9 GB), Qwen 3 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B ganha com 12 GB de VRAM. Mistral Small 24B ganha acima de 16 GB em tarefas de raciocínio.',
        bullets: [
          'Llama 3.3 8B Q4_K_M: 4,9 GB de VRAM, ~45 tok/s na RTX 4090, MMLU 66,6% — melhor para placas de 6–8 GB',
          'Qwen 3 14B Q4_K_M: 9,3 GB de VRAM, ~28 tok/s, MMLU 74,8% — ponto ideal para placas de 12 GB',
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
          'Llama 3.3 8B em Q4_K_M usa 4,9 GB de VRAM e roda a ~45 tok/s na RTX 4090 — o único modelo viável deste grupo para placas de 6 GB',
          'Qwen 3 14B em Q4_K_M usa 9,3 GB e pontua 74,8% no MMLU — o ponto ideal para placas de 12 GB como RTX 3060 12 GB ou RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B em Q4_K_M usa 14,4 GB e alcança ~81% no MMLU — viável apenas em placas de 16 GB (RTX 4080, RTX 3090, RTX 4090)',
          'Para codificação em 12 GB: Qwen 3 Coder 14B. Para raciocínio multilíngue em 16 GB+: Mistral Small 3.1 24B. Abaixo de 10 GB: Llama 3.3 8B.',
        ],
      },
      body1: {
        title: 'Requisitos de VRAM: qual placa roda qual modelo',
        content: [
          'A escolha entre esses três modelos é principalmente uma decisão de VRAM. Em quantização Q4_K_M: Llama 3.3 8B usa 4,9 GB, Qwen 3 14B usa 9,3 GB e Mistral Small 3.1 24B usa 14,4 GB. Isso se corresponde diretamente a três níveis de GPU: placas de 6–8 GB (apenas Llama 3.3 8B), placas de 10–12 GB (Qwen 3 14B) e placas de 16+ GB (Mistral Small 24B).',
          'Velocidade na RTX 4090 em Q4_K_M: Llama 3.3 8B roda a aproximadamente 45 tok/s, Qwen 3 14B a ~28 tok/s e Mistral Small 3.1 24B a ~20 tok/s. Em uma RTX 3060 12 GB, apenas Llama 3.3 8B e Qwen 3 14B cabem — Mistral Small 24B requer no mínimo uma placa de 16 GB para evitar derramamento para a RAM da CPU.',
          'A diferença nos benchmarks é significativa: o MMLU 81% do Mistral Small 24B supera o Llama 3.3 8B em 14 pontos e o Qwen 3 14B em 6 pontos. Em tarefas complexas de raciocínio em várias etapas e seguimento de instruções, essa lacuna é perceptível na prática.',
        ],
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'Velocidade (RTX 4090)', 'MMLU', 'GPU mínima'],
        rows: [
          { 'Modelo': 'Llama 3.3 8B', 'VRAM (Q4_K_M)': '4,9 GB', 'Velocidade (RTX 4090)': '~45 tok/s', 'MMLU': '66,6%', 'GPU mínima': 'RTX 3060 6 GB' },
          { 'Modelo': 'Qwen 3 14B', 'VRAM (Q4_K_M)': '9,3 GB', 'Velocidade (RTX 4090)': '~28 tok/s', 'MMLU': '74,8%', 'GPU mínima': 'RTX 3060 12 GB' },
          { 'Modelo': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 GB', 'Velocidade (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', 'GPU mínima': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Qualidade vs VRAM: quando cada modelo ganha',
        content: [
          '<strong>Llama 3.3 8B ganha em eficiência de VRAM.</strong> Com 4,9 GB Q4_K_M, é o único modelo deste grupo que cabe em uma placa de 6 GB com margem para uma janela de contexto de 4k tokens. Pontua 66,6% no MMLU e oferece respostas interativas rápidas (~45 tok/s na RTX 4090). Para chat, consultas rápidas de codificação e uso diário em hardware limitado, é a escolha correta.',
          '<strong>Qwen 3 14B ganha com 12 GB de VRAM.</strong> Seu MMLU de 74,8% o coloca bem acima do Llama 3.3 8B em raciocínio e codificação — e cabe no nível de GPU prosumer mais comum. A variante Qwen Coder 14B (mesmo tamanho, otimizado para código) pontua aproximadamente 78% no HumanEval. Se seu uso principal é codificação e você tem uma placa de 12 GB, Qwen 3 14B é a resposta.',
          '<strong>Mistral Small 3.1 24B ganha em qualidade quando a VRAM permite.</strong> Seu MMLU de 81% e sólido desempenho multilíngue o tornam a principal escolha para placas de 16 GB. Lida com raciocínio de forma longa, tarefas de saída estruturada e conjuntos de instruções complexos de forma mais confiável do que os modelos da classe 14B. Em uma RTX 4090 24 GB, cabe em Q5_K_M para qualidade ainda melhor.',
          'Para uma comparação direta da classe 14B, consulte a comparação <a href="/pt/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs Llama 8B</a>, que inclui detalhes de benchmarks de codificação.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas: Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Mistral Small 24B consegue rodar em uma RTX 3060 12 GB?',
            a: 'Não. Mistral Small 3.1 24B em Q4_K_M requer 14,4 GB de VRAM, excedendo a RTX 3060 12 GB. Baixar para Q2_K reduz para aproximadamente 7,6 GB, mas causa degradação significativa de qualidade. Para a RTX 3060 12 GB, Qwen 3 14B Q4_K_M (9,3 GB) é a escolha correta — deixa 2,7 GB de margem para o contexto.',
          },
          {
            q: 'Mistral Small 24B é melhor que Qwen 3 14B para codificação?',
            a: 'Para codificação geral, Mistral Small 24B tem uma leve vantagem devido ao seu tamanho maior. No entanto, Qwen 3 Coder 14B (a variante Qwen otimizada para código) é competitivo com Mistral Small 24B no HumanEval e cabe em 12 GB de VRAM. Se o seu orçamento é uma placa de 16 GB e você precisa de raciocínio e codificação, Mistral Small 24B ganha. Em 12 GB, Qwen Coder 14B é a melhor compensação.',
          },
          {
            q: 'Qual modelo devo usar em uma GPU de 16 GB como a RTX 4080?',
            a: 'Mistral Small 3.1 24B Q4_K_M com 14,4 GB cabe com 1,6 GB de margem — suficiente para uma janela de contexto de 2k. Supera o Qwen 3 14B nos benchmarks de raciocínio. Alternativamente, Qwen 3 32B em Q3_K_M cabe em aproximadamente 13,5 GB e compete com Mistral Small 24B em tarefas de codificação, oferecendo mais parâmetros.',
          },
          {
            q: 'Como o Llama 3.3 8B se compara ao Llama 3.2?',
            a: 'Llama 3.2 8B não foi lançado — a série 3.2 introduziu apenas as variantes 1B, 3B e multimodais 11B/90B. Llama 3.3 8B continua sendo o modelo de referência 8B padrão do Llama. Para uso apenas de texto com 6–8 GB de VRAM, Llama 3.3 8B é a escolha atualmente recomendada nesta classe de tamanho.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B: ¿cuál ejecutar en local?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026',
    metaDescription: 'Llama 3.3 8B: 4,9 GB VRAM. Qwen 3 14B: 9,3 GB, MMLU 74,8%. Mistral Small 24B: 14,4 GB, MMLU 81%. Elige según tu nivel de VRAM. Respuesta rápida.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      es: {
        question: 'Mistral Small 24B vs Qwen 3 14B vs Llama 3.3 8B: ¿cuál debo ejecutar en local?',
        answer: 'Elige según el VRAM: Llama 3.3 8B (4.9 GB), Qwen 3 14B (9.3 GB), Mistral Small 3.1 24B (14.4 GB). Qwen 14B gana con 12 GB de VRAM. Mistral Small 24B gana por encima de 16 GB en tareas de razonamiento.',
        bullets: [
          'Llama 3.3 8B Q4_K_M: 4.9 GB VRAM, ~45 tok/s en RTX 4090, MMLU 66.6% — mejor para tarjetas de 6–8 GB',
          'Qwen 3 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 74.8% — punto ideal para tarjetas de 12 GB',
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
          'Llama 3.3 8B en Q4_K_M usa 4.9 GB de VRAM y corre a ~45 tok/s en RTX 4090 — el único modelo viable de este grupo para tarjetas de 6 GB',
          'Qwen 3 14B en Q4_K_M usa 9.3 GB y obtiene 74.8% MMLU — el punto ideal para tarjetas de 12 GB como la RTX 3060 12 GB o RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B en Q4_K_M usa 14.4 GB y alcanza ~81% MMLU — solo factible en tarjetas de 16 GB (RTX 4080, RTX 3090, RTX 4090)',
          'Para coding en 12 GB: Qwen 3 Coder 14B. Para razonamiento multilingüe en 16 GB+: Mistral Small 3.1 24B. Por debajo de 10 GB: Llama 3.3 8B.',
        ],
      },
      body1: {
        title: 'Requisitos de VRAM: qué tarjeta ejecuta qué modelo',
        content: [
          'La elección entre estos tres modelos es principalmente una decisión de VRAM. En cuantización Q4_K_M: Llama 3.3 8B usa 4.9 GB, Qwen 3 14B usa 9.3 GB y Mistral Small 3.1 24B usa 14.4 GB. Esto se corresponde directamente con tres niveles de GPU: tarjetas de 6–8 GB (solo Llama 3.3 8B), tarjetas de 10–12 GB (Qwen 3 14B) y tarjetas de 16+ GB (Mistral Small 24B).',
          'Velocidad en RTX 4090 en Q4_K_M: Llama 3.3 8B corre a aproximadamente 45 tok/s, Qwen 3 14B a ~28 tok/s y Mistral Small 3.1 24B a ~20 tok/s. En una RTX 3060 12 GB, solo caben Llama 3.3 8B y Qwen 3 14B — Mistral Small 24B necesita como mínimo una tarjeta de 16 GB para evitar volcar a la RAM de la CPU.',
          'La diferencia en benchmarks es significativa: el 81% MMLU de Mistral Small 24B supera en 14 puntos a Llama 3.3 8B y en 6 puntos a Qwen 3 14B. En tareas complejas de razonamiento multi-paso y seguimiento de instrucciones, esta diferencia es notable en la práctica.',
        ],
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'Velocidad (RTX 4090)', 'MMLU', 'GPU mínima'],
        rows: [
          { 'Modelo': 'Llama 3.3 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'Velocidad (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', 'GPU mínima': 'RTX 3060 6 GB' },
          { 'Modelo': 'Qwen 3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'Velocidad (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', 'GPU mínima': 'RTX 3060 12 GB' },
          { 'Modelo': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', 'Velocidad (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', 'GPU mínima': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Calidad vs VRAM: cuándo gana cada modelo',
        content: [
          '<strong>Llama 3.3 8B gana en eficiencia de VRAM.</strong> Con 4.9 GB Q4_K_M es el único modelo de este grupo que cabe en una tarjeta de 6 GB con margen para una ventana de contexto de 4k tokens. Obtiene 66.6% en MMLU y ofrece respuestas interactivas rápidas (~45 tok/s en RTX 4090). Para chat, consultas rápidas de coding y uso diario en hardware limitado, es la elección correcta.',
          '<strong>Qwen 3 14B gana con 12 GB de VRAM.</strong> Su 74.8% MMLU lo sitúa muy por encima de Llama 3.3 8B en razonamiento y coding — y cabe en el nivel de GPU prosumer más común. La variante Qwen Coder 14B (mismo tamaño, optimizada para código) obtiene aproximadamente 78% en HumanEval. Si tu uso principal es el coding y tienes una tarjeta de 12 GB, Qwen 3 14B es la respuesta.',
          '<strong>Mistral Small 3.1 24B gana en calidad cuando el VRAM lo permite.</strong> Su 81% MMLU y sólido rendimiento multilingüe lo convierten en la mejor opción para tarjetas de 16 GB. Gestiona razonamiento de forma larga, tareas de salida estructurada y conjuntos de instrucciones complejos de forma más fiable que los modelos de clase 14B. En una RTX 4090 24 GB cabe en Q5_K_M para incluso mejor calidad.',
          'Para una comparativa directa de clase 14B consulta la comparativa <a href="/es/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B vs Llama 8B</a>, que incluye detalles de benchmarks de coding.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas: Mistral Small 24B vs Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: '¿Puede Mistral Small 24B ejecutarse en una RTX 3060 12 GB?',
            a: 'No. Mistral Small 3.1 24B en Q4_K_M necesita 14.4 GB de VRAM, superando los 12 GB de la RTX 3060. Bajar a Q2_K lo reduce a aproximadamente 7.6 GB pero provoca una degradación de calidad significativa. Para la RTX 3060 12 GB, Qwen 3 14B Q4_K_M (9.3 GB) es la elección correcta — deja 2.7 GB de margen para el contexto.',
          },
          {
            q: '¿Mistral Small 24B es mejor que Qwen 3 14B para coding?',
            a: 'Para coding general, Mistral Small 24B tiene una ligera ventaja por su mayor tamaño. Sin embargo, Qwen 3 Coder 14B (la variante Qwen optimizada para código) es competitivo con Mistral Small 24B en HumanEval y cabe en 12 GB de VRAM. Si tu presupuesto es una tarjeta de 16 GB y necesitas tanto razonamiento como coding, Mistral Small 24B gana. En 12 GB, Qwen Coder 14B es la mejor compensación.',
          },
          {
            q: '¿Qué modelo debo usar en una GPU de 16 GB como la RTX 4080?',
            a: 'Mistral Small 3.1 24B Q4_K_M con 14.4 GB cabe con 1.6 GB de margen — suficiente para una ventana de contexto de 2k. Supera a Qwen 3 14B en benchmarks de razonamiento. Alternativamente, Qwen 3 32B en Q3_K_M cabe en aproximadamente 13.5 GB y compite con Mistral Small 24B en tareas de coding mientras ofrece más parámetros.',
          },
          {
            q: '¿Cómo se compara Llama 3.3 8B con Llama 3.2?',
            a: 'Llama 3.2 8B no fue lanzado — la serie 3.2 introdujo variantes de 1B, 3B y multimodales de 11B/90B únicamente. Llama 3.3 8B sigue siendo el modelo de referencia 8B de Llama. Para uso de solo texto con 6–8 GB de VRAM, Llama 3.3 8B es la opción recomendada actualmente en esta clase de tamaño.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B مقابل Qwen 3 14B مقابل Llama 3.3 8B: أيهما تشغّل محلياً؟',
    seoTitle: 'Mistral 24B مقابل Qwen 14B مقابل Llama 8B: VRAM',
    metaDescription: 'Mistral Small 24B: 14.4 GB VRAM، MMLU 81%. Qwen 3 14B: 9.3 GB. Llama 3.3 8B: 4.9 GB. اختر النموذج بحسب VRAM المتاح: 6 GB أو 12 GB أو 16 GB.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      ar: {
        question: 'Mistral Small 24B مقابل Qwen 3 14B مقابل Llama 3.3 8B: أيهما يجب تشغيله محلياً؟',
        answer: 'اختر حسب VRAM: Llama 3.3 8B (4.9 GB)، Qwen 3 14B (9.3 GB)، Mistral Small 3.1 24B (14.4 GB). Qwen 14B يتفوق بـ 12 GB من VRAM. Mistral Small 24B يتفوق فوق 16 GB في مهام الاستدلال.',
        bullets: [
          'Llama 3.3 8B Q4_K_M: 4.9 GB VRAM، ~45 توكن/ث على RTX 4090، MMLU 66.6% — الأفضل لبطاقات 6–8 GB',
          'Qwen 3 14B Q4_K_M: 9.3 GB VRAM، ~28 توكن/ث، MMLU 74.8% — النقطة المثلى لبطاقات 12 GB',
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
          'Llama 3.3 8B بتكميم Q4_K_M يستخدم 4.9 GB VRAM ويعمل بـ ~45 توكن/ث على RTX 4090 — النموذج الوحيد القابل للتطبيق من هذه المجموعة لبطاقات 6 GB',
          'Qwen 3 14B بتكميم Q4_K_M يستخدم 9.3 GB ويحقق 74.8% MMLU — النقطة المثلى لبطاقات 12 GB كـ RTX 3060 12 GB أو RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B بتكميم Q4_K_M يستخدم 14.4 GB ويصل إلى ~81% MMLU — قابل للتطبيق فقط على بطاقات 16 GB (RTX 4080، RTX 3090، RTX 4090)',
          'للبرمجة على 12 GB: Qwen 3 Coder 14B. للاستدلال متعدد اللغات على 16 GB+: Mistral Small 3.1 24B. أقل من 10 GB: Llama 3.3 8B.',
        ],
      },
      body1: {
        title: 'متطلبات VRAM: أي بطاقة تشغّل أي نموذج',
        content: [
          'الاختيار بين هذه النماذج الثلاثة هو في الأساس قرار VRAM. عند تكميم Q4_K_M: Llama 3.3 8B يستخدم 4.9 GB، Qwen 3 14B يستخدم 9.3 GB، وMistral Small 3.1 24B يستخدم 14.4 GB. هذا يتوافق مباشرةً مع ثلاثة مستويات من GPU: بطاقات 6–8 GB (Llama 3.3 8B فقط)، بطاقات 10–12 GB (Qwen 3 14B)، وبطاقات 16+ GB (Mistral Small 24B).',
          'السرعة على RTX 4090 بتكميم Q4_K_M: Llama 3.3 8B يعمل بـ ~45 توكن/ث، Qwen 3 14B بـ ~28 توكن/ث، وMistral Small 3.1 24B بـ ~20 توكن/ث. على RTX 3060 12 GB، يتسع فقط Llama 3.3 8B وQwen 3 14B — Mistral Small 24B يحتاج على الأقل بطاقة 16 GB لتجنب نقل الأحمال إلى RAM وحدة المعالجة.',
          'الفرق في المعايير القياسية كبير: 81% MMLU لـ Mistral Small 24B يتفوق بـ 14 نقطة على Llama 3.3 8B وبـ 6 نقاط على Qwen 3 14B. في مهام الاستدلال متعدد الخطوات المعقدة واتباع التعليمات، هذا الفارق ملحوظ عملياً.',
        ],
        columns: ['النموذج', 'VRAM (Q4_K_M)', 'السرعة (RTX 4090)', 'MMLU', 'الحد الأدنى للـ GPU'],
        rows: [
          { 'النموذج': 'Llama 3.3 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'السرعة (RTX 4090)': '~45 توكن/ث', 'MMLU': '66.6%', 'الحد الأدنى للـ GPU': 'RTX 3060 6 GB' },
          { 'النموذج': 'Qwen 3 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'السرعة (RTX 4090)': '~28 توكن/ث', 'MMLU': '74.8%', 'الحد الأدنى للـ GPU': 'RTX 3060 12 GB' },
          { 'النموذج': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', 'السرعة (RTX 4090)': '~20 توكن/ث', 'MMLU': '~81%', 'الحد الأدنى للـ GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'الجودة مقابل VRAM: متى يتفوق كل نموذج',
        content: [
          '<strong>Llama 3.3 8B يتفوق في كفاءة VRAM.</strong> بـ 4.9 GB Q4_K_M هو النموذج الوحيد من هذه المجموعة الذي يتسع في بطاقة 6 GB مع هامش لنافذة سياق 4k توكن. يحقق 66.6% في MMLU ويوفر استجابات تفاعلية سريعة (~45 توكن/ث على RTX 4090). للمحادثة واستفسارات البرمجة السريعة والاستخدام اليومي على الأجهزة المحدودة، هو الاختيار الصحيح.',
          '<strong>Qwen 3 14B يتفوق بـ 12 GB VRAM.</strong> 74.8% MMLU يضعه فوق Llama 3.3 8B في الاستدلال والبرمجة — ويتسع في أكثر مستويات GPU شيوعاً للمحترفين. نسخة Qwen Coder 14B (نفس الحجم، محسّنة للكود) تحقق ~78% في HumanEval.',
          '<strong>Mistral Small 3.1 24B يتفوق في الجودة عندما يسمح VRAM بذلك.</strong> 81% MMLU وأداء متعدد اللغات القوي يجعلانه الخيار الأفضل لبطاقات 16 GB. يتعامل مع الاستدلال الطويل ومهام الإخراج المنظم ومجموعات التعليمات المعقدة بشكل أكثر موثوقية من نماذج فئة 14B.',
          'للمقارنة المباشرة لفئة 14B راجع مقارنة <a href="/ar/prompt-bites/qwen-14b-vs-llama-8b" class="text-primary hover:underline">Qwen 14B مقابل Llama 8B</a>، التي تتضمن تفاصيل معايير البرمجة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة: Mistral Small 24B مقابل Qwen 14B مقابل Llama 8B',
        faqs: [
          {
            q: 'هل يمكن تشغيل Mistral Small 24B على RTX 3060 12 GB؟',
            a: 'لا. Mistral Small 3.1 24B بتكميم Q4_K_M يحتاج 14.4 GB VRAM، متجاوزاً 12 GB لـ RTX 3060. التنزل إلى Q2_K يقلله إلى ~7.6 GB لكن يُسبب تدهوراً ملحوظاً في الجودة. لـ RTX 3060 12 GB، Qwen 3 14B Q4_K_M (9.3 GB) هو الاختيار الصحيح — يترك 2.7 GB هامشاً للسياق.',
          },
          {
            q: 'هل Mistral Small 24B أفضل من Qwen 3 14B للبرمجة؟',
            a: 'للبرمجة العامة، Mistral Small 24B له ميزة طفيفة بسبب حجمه الأكبر. غير أن Qwen 3 Coder 14B (نسخة Qwen المحسّنة للكود) تنافس Mistral Small 24B في HumanEval وتتسع في 12 GB VRAM. إذا كانت ميزانيتك بطاقة 16 GB وتحتاج الاستدلال والبرمجة معاً، Mistral Small 24B يفوز. بـ 12 GB، Qwen Coder 14B هو التوازن الأفضل.',
          },
          {
            q: 'أي نموذج يجب أن أستخدم مع GPU بسعة 16 GB مثل RTX 4080؟',
            a: 'Mistral Small 3.1 24B Q4_K_M بـ 14.4 GB يتسع مع هامش 1.6 GB — كافٍ لنافذة سياق 2k. يتفوق على Qwen 3 14B في معايير الاستدلال. بديلاً، Qwen 3 32B بتكميم Q3_K_M يتسع في ~13.5 GB وينافس Mistral Small 24B في مهام البرمجة مع عرضه مزيداً من المعاملات.',
          },
          {
            q: 'كيف يقارن Llama 3.3 8B بـ Llama 3.2؟',
            a: 'Llama 3.2 8B لم يُطرح — سلسلة 3.2 أدخلت نسخ 1B و3B ومتعددة الوسائط 11B/90B فقط. Llama 3.3 8B لا يزال النموذج المرجعي 8B لـ Llama. للاستخدام النصي فقط بـ 6–8 GB VRAM، Llama 3.3 8B هو الخيار الموصى به حالياً في هذه الفئة.',
          },
        ],
      },
    },
  },
}

