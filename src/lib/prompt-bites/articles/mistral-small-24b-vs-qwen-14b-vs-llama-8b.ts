import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs Qwen 2.5 14B vs Llama 3.1 8B: Which to Run Locally?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B: 4.9 GB VRAM. Qwen 2.5 14B: 9.3 GB, MMLU 74.8%. Mistral Small 24B: 14.4 GB, MMLU 81%. Pick by VRAM tier. Quick answer from PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    current_models_mentioned: ['Mistral Small 3.1 24B', 'Qwen 2.5 14B', 'Llama 3.1 8B'],
    current_hardware_mentioned: ['RTX 4090', 'RTX 3060 12 GB', 'RTX 4080 16 GB'],
    educationalLevel: 'Intermediate',
    parentArticle: '/local-llms/qwen-vs-llama-vs-mistral',
    siblingBites: ['qwen-14b-vs-llama-8b', 'best-14b-models-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Mistral Small 24B vs Qwen 2.5 14B vs Llama 3.1 8B: which should I run locally?',
        answer: 'Pick by VRAM: Llama 3.1 8B (4.9 GB), Qwen 2.5 14B (9.3 GB), Mistral Small 3.1 24B (14.4 GB). Qwen 14B wins at 12 GB VRAM. Mistral Small 24B wins above 16 GB on reasoning tasks.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4.9 GB VRAM, ~45 tok/s on RTX 4090, MMLU 66.6% — best for 6–8 GB cards',
          'Qwen 2.5 14B Q4_K_M: 9.3 GB VRAM, ~28 tok/s, MMLU 74.8% — sweet spot for 12 GB cards',
          'Mistral Small 3.1 24B Q4_K_M: 14.4 GB VRAM, ~20 tok/s, MMLU ~81% — only for 16 GB+ cards',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Mistral Small 24B vs. Qwen 2.5 14B vs. Llama 3.1 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.1 8B (4,9 GB), Qwen 2.5 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B gewinnt bei 12 GB VRAM. Mistral Small 24B gewinnt ab 16 GB bei Reasoning-Aufgaben.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66,6 % — beste Wahl für 6–8 GB Karten',
          'Qwen 2.5 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 74,8 % — optimaler Punkt für 12 GB Karten',
          'Mistral Small 3.1 24B Q4_K_M: 14,4 GB VRAM, ~20 tok/s, MMLU ~81 % — nur für Karten mit 16 GB+',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Mistral Small 24B vs Qwen 2.5 14B vs Llama 3.1 8B : lequel lancer en local ?',
        answer: 'Choisissez selon le VRAM : Llama 3.1 8B (4,9 Go), Qwen 2.5 14B (9,3 Go), Mistral Small 3.1 24B (14,4 Go). Qwen 14B gagne à 12 Go de VRAM. Mistral Small 24B gagne au-dessus de 16 Go sur les tâches de raisonnement.',
        bullets: [
          'Llama 3.1 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66,6 % — meilleur choix pour cartes 6–8 Go',
          'Qwen 2.5 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 74,8 % — point idéal pour cartes 12 Go',
          'Mistral Small 3.1 24B Q4_K_M : 14,4 Go VRAM, ~20 tok/s, MMLU ~81 % — uniquement pour cartes 16 Go+',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Mistral Small 24B・Qwen 2.5 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.1 8B（4.9 GB）、Qwen 2.5 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB VRAMではQwen 14Bが最適。16 GB以上では推論タスクでMistral Small 24Bが優位。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.6% — 6〜8 GB カードに最適',
          'Qwen 2.5 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 74.8% — 12 GB カードのベストチョイス',
          'Mistral Small 3.1 24B Q4_K_M：14.4 GB VRAM、~20 tok/s、MMLU ~81% — 16 GB+ カードのみ対応',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Mistral Small 24B 对比 Qwen 2.5 14B 对比 Llama 3.1 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.1 8B（4.9 GB）、Qwen 2.5 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB 显存选 Qwen 14B。16 GB 以上推理任务选 Mistral Small 24B。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.6%——适合 6–8 GB 显卡',
          'Qwen 2.5 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 74.8%——12 GB 显卡最佳选择',
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
          'Qwen 2.5 14B at Q4_K_M uses 9.3 GB and scores 74.8% MMLU — the sweet spot for 12 GB cards like the RTX 3060 12 GB or RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B at Q4_K_M uses 14.4 GB and reaches ~81% MMLU — only feasible on 16 GB cards (RTX 4080, RTX 3090, RTX 4090)',
          'For coding on 12 GB: Qwen 2.5 Coder 14B. For multilingual reasoning on 16 GB+: Mistral Small 3.1 24B. Below 10 GB: Llama 3.1 8B.',
        ],
      },
      body1: {
        title: 'VRAM Requirements: Which Card Runs Which Model',
        content: [
          'The choice between these three models is primarily a VRAM decision. At Q4_K_M quantization: Llama 3.1 8B uses 4.9 GB, Qwen 2.5 14B uses 9.3 GB, and Mistral Small 3.1 24B uses 14.4 GB. This maps directly onto three GPU tiers: 6–8 GB cards (Llama 3.1 8B only), 10–12 GB cards (Qwen 2.5 14B), and 16+ GB cards (Mistral Small 24B).',
          'Speed on RTX 4090 at Q4_K_M: Llama 3.1 8B runs at approximately 45 tok/s, Qwen 2.5 14B at ~28 tok/s, and Mistral Small 3.1 24B at ~20 tok/s. On an RTX 3060 12 GB, only Llama 3.1 8B and Qwen 2.5 14B fit — Mistral Small 24B requires at minimum a 16 GB card to avoid spilling to CPU RAM.',
          'The benchmark spread is meaningful: Mistral Small 24B\'s 81% MMLU is 14 points above Llama 3.1 8B and 6 points above Qwen 2.5 14B. On complex multi-step reasoning and instruction-following tasks, this gap is noticeable in practice.',
        ],
        columns: ['Model', 'VRAM (Q4_K_M)', 'Speed (RTX 4090)', 'MMLU', 'Minimum GPU'],
        rows: [
          { 'Model': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', 'Speed (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', 'Minimum GPU': 'RTX 3060 6 GB' },
          { 'Model': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '9.3 GB', 'Speed (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', 'Minimum GPU': 'RTX 3060 12 GB' },
          { 'Model': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', 'Speed (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', 'Minimum GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Quality vs VRAM: When Each Model Wins',
        content: [
          '<strong>Llama 3.1 8B wins on VRAM efficiency.</strong> At 4.9 GB Q4_K_M it is the only model in this group that fits a 6 GB card with headroom for a 4k token context window. It scores 66.6% on MMLU and delivers snappy interactive responses (~45 tok/s on RTX 4090). For chat, quick coding queries, and daily use on constrained hardware, it is the correct pick.',
          '<strong>Qwen 2.5 14B wins at 12 GB VRAM.</strong> Its 74.8% MMLU places it well above Llama 3.1 8B on reasoning and coding — and it fits within the most common prosumer GPU tier. The Qwen Coder 14B variant (same size, code-tuned) scores approximately 78% on HumanEval. If your primary use is coding and you have a 12 GB card, Qwen 2.5 14B is the answer.',
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
            a: 'No. Mistral Small 3.1 24B at Q4_K_M requires 14.4 GB VRAM, exceeding the RTX 3060 12 GB. Dropping to Q2_K brings it to approximately 7.6 GB but causes significant quality degradation. For RTX 3060 12 GB, Qwen 2.5 14B Q4_K_M (9.3 GB) is the correct choice — it leaves 2.7 GB headroom for context.',
          },
          {
            q: 'Is Mistral Small 24B better than Qwen 2.5 14B for coding?',
            a: 'For general coding, Mistral Small 24B has a slight edge due to its larger size. However, Qwen 2.5 Coder 14B (the code-tuned Qwen variant) is competitive with Mistral Small 24B on HumanEval and fits in 12 GB VRAM. If your budget is a 16 GB card and you need both reasoning and coding, Mistral Small 24B wins. On 12 GB, Qwen Coder 14B is the better tradeoff.',
          },
          {
            q: 'Which model should I use on a 16 GB GPU like the RTX 4080?',
            a: 'Mistral Small 3.1 24B Q4_K_M at 14.4 GB fits with 1.6 GB headroom — enough for a 2k context window. It outperforms Qwen 2.5 14B on reasoning benchmarks. Alternatively, Qwen 2.5 32B at Q3_K_M fits in approximately 13.5 GB and competes with Mistral Small 24B on coding tasks while offering more parameters.',
          },
          {
            q: 'How does Llama 3.1 8B compare to Llama 3.2?',
            a: 'Llama 3.2 8B was not released — the 3.2 series introduced 1B, 3B, and multimodal 11B/90B variants only. Llama 3.1 8B remains the standard 8B Llama reference model. For text-only use at 6–8 GB VRAM, Llama 3.1 8B is the current recommended pick in this size class.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs. Qwen 2.5 14B vs. Llama 3.1 8B: Welches lokal ausführen?',
    seoTitle: 'Mistral Small 24B vs. Qwen 14B vs. Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B: 4,9 GB VRAM. Qwen 2.5 14B: 9,3 GB, MMLU 74,8 %. Mistral Small 24B: 14,4 GB, MMLU 81 %. Auswahl nach VRAM-Tier. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      de: {
        question: 'Mistral Small 24B vs. Qwen 2.5 14B vs. Llama 3.1 8B: Welches sollte ich lokal ausführen?',
        answer: 'Wählen Sie nach VRAM: Llama 3.1 8B (4,9 GB), Qwen 2.5 14B (9,3 GB), Mistral Small 3.1 24B (14,4 GB). Qwen 14B gewinnt bei 12 GB VRAM. Mistral Small 24B gewinnt ab 16 GB bei Reasoning-Aufgaben.',
        bullets: [
          'Llama 3.1 8B Q4_K_M: 4,9 GB VRAM, ~45 tok/s auf RTX 4090, MMLU 66,6 % — beste Wahl für 6–8 GB Karten',
          'Qwen 2.5 14B Q4_K_M: 9,3 GB VRAM, ~28 tok/s, MMLU 74,8 % — optimaler Punkt für 12 GB Karten',
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
          'Qwen 2.5 14B in Q4_K_M verwendet 9,3 GB und erzielt 74,8 % MMLU — der optimale Punkt für 12 GB Karten wie RTX 3060 12 GB oder RTX 4060 Ti 16 GB',
          'Mistral Small 3.1 24B in Q4_K_M verwendet 14,4 GB und erreicht ~81 % MMLU — nur auf 16 GB Karten machbar (RTX 4080, RTX 3090, RTX 4090)',
          'Für Coding auf 12 GB: Qwen 2.5 Coder 14B. Für mehrsprachiges Reasoning auf 16 GB+: Mistral Small 3.1 24B. Unter 10 GB: Llama 3.1 8B.',
        ],
      },
      body1: {
        title: 'VRAM-Anforderungen: Welche Karte führt welches Modell aus',
        content: [
          'Die Wahl zwischen diesen drei Modellen ist primär eine VRAM-Entscheidung. Bei Q4_K_M-Quantisierung: Llama 3.1 8B verwendet 4,9 GB, Qwen 2.5 14B 9,3 GB und Mistral Small 3.1 24B 14,4 GB. Dies ordnet sich direkt drei GPU-Tiers zu: 6–8 GB Karten (nur Llama 3.1 8B), 10–12 GB Karten (Qwen 2.5 14B) und 16+ GB Karten (Mistral Small 24B).',
          'Geschwindigkeit auf RTX 4090 bei Q4_K_M: Llama 3.1 8B läuft bei etwa 45 tok/s, Qwen 2.5 14B bei ~28 tok/s und Mistral Small 3.1 24B bei ~20 tok/s. Auf einer RTX 3060 12 GB passen nur Llama 3.1 8B und Qwen 2.5 14B — Mistral Small 24B benötigt mindestens eine 16 GB Karte, um kein CPU-RAM zu belegen.',
          'Der Benchmark-Abstand ist bedeutsam: Mistral Small 24Bs 81 % MMLU liegt 14 Punkte über Llama 3.1 8B und 6 Punkte über Qwen 2.5 14B. Bei komplexen mehrstufigen Reasoning- und Instruktionsbefolgungsaufgaben ist diese Lücke in der Praxis spürbar.',
        ],
        columns: ['Modell', 'VRAM (Q4_K_M)', 'Geschwindigkeit (RTX 4090)', 'MMLU', 'Mindest-GPU'],
        rows: [
          { 'Modell': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 GB', 'Geschwindigkeit (RTX 4090)': '~45 tok/s', 'MMLU': '66,6 %', 'Mindest-GPU': 'RTX 3060 6 GB' },
          { 'Modell': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '9,3 GB', 'Geschwindigkeit (RTX 4090)': '~28 tok/s', 'MMLU': '74,8 %', 'Mindest-GPU': 'RTX 3060 12 GB' },
          { 'Modell': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 GB', 'Geschwindigkeit (RTX 4090)': '~20 tok/s', 'MMLU': '~81 %', 'Mindest-GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: 'Qualität vs. VRAM: Wann jedes Modell gewinnt',
        content: [
          '<strong>Llama 3.1 8B gewinnt bei VRAM-Effizienz.</strong> Mit 4,9 GB Q4_K_M ist es das einzige Modell dieser Gruppe, das auf eine 6 GB Karte passt und dabei noch Puffer für ein 4k-Token-Kontextfenster lässt. Es erzielt 66,6 % auf MMLU und liefert schnelle interaktive Antworten (~45 tok/s auf RTX 4090). Für Chat, schnelle Coding-Anfragen und den täglichen Einsatz auf eingeschränkter Hardware ist es die richtige Wahl.',
          '<strong>Qwen 2.5 14B gewinnt bei 12 GB VRAM.</strong> Mit 74,8 % MMLU liegt es deutlich über Llama 3.1 8B bei Reasoning und Coding — und passt in den verbreitetsten Prosumer-GPU-Tier. Die Qwen Coder 14B-Variante (gleiche Größe, code-optimiert) erzielt etwa 78 % auf HumanEval. Bei primärem Coding-Einsatz und 12 GB Karte ist Qwen 2.5 14B die Antwort.',
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
            a: 'Nein. Mistral Small 3.1 24B bei Q4_K_M benötigt 14,4 GB VRAM und übersteigt damit die RTX 3060 12 GB. Ein Wechsel zu Q2_K reduziert den Bedarf auf etwa 7,6 GB, verursacht jedoch erheblichen Qualitätsverlust. Für die RTX 3060 12 GB ist Qwen 2.5 14B Q4_K_M (9,3 GB) die richtige Wahl — sie lässt 2,7 GB Puffer für den Kontext.',
          },
          {
            q: 'Ist Mistral Small 24B besser als Qwen 2.5 14B für Coding?',
            a: 'Für allgemeines Coding hat Mistral Small 24B aufgrund seiner größeren Größe einen leichten Vorsprung. Jedoch ist Qwen 2.5 Coder 14B (die code-optimierte Qwen-Variante) auf HumanEval mit Mistral Small 24B konkurrenzfähig und passt in 12 GB VRAM. Wenn Ihr Budget eine 16 GB Karte vorsieht und Sie Reasoning und Coding benötigen, gewinnt Mistral Small 24B. Bei 12 GB ist Qwen Coder 14B der bessere Kompromiss.',
          },
          {
            q: 'Welches Modell sollte ich auf einer 16 GB GPU wie der RTX 4080 verwenden?',
            a: 'Mistral Small 3.1 24B Q4_K_M mit 14,4 GB passt mit 1,6 GB Puffer — ausreichend für ein 2k-Kontextfenster. Es übertrifft Qwen 2.5 14B bei Reasoning-Benchmarks. Alternativ passt Qwen 2.5 32B bei Q3_K_M in etwa 13,5 GB und konkurriert mit Mistral Small 24B bei Coding-Aufgaben bei mehr Parametern.',
          },
          {
            q: 'Wie unterscheidet sich Llama 3.1 8B von Llama 3.2?',
            a: 'Llama 3.2 8B wurde nicht veröffentlicht — die 3.2-Serie führte nur 1B, 3B und multimodale 11B/90B-Varianten ein. Llama 3.1 8B bleibt das Standard-8B-Llama-Referenzmodell. Für rein textbasierten Einsatz bei 6–8 GB VRAM ist Llama 3.1 8B die aktuell empfohlene Wahl in dieser Größenklasse.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B vs Qwen 2.5 14B vs Llama 3.1 8B : lequel lancer en local ?',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B : 4,9 Go VRAM. Qwen 2.5 14B : 9,3 Go, MMLU 74,8 %. Mistral Small 24B : 14,4 Go, MMLU 81 %. Choisissez selon le tier VRAM. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      fr: {
        question: 'Mistral Small 24B vs Qwen 2.5 14B vs Llama 3.1 8B : lequel lancer en local ?',
        answer: 'Choisissez selon le VRAM : Llama 3.1 8B (4,9 Go), Qwen 2.5 14B (9,3 Go), Mistral Small 3.1 24B (14,4 Go). Qwen 14B gagne à 12 Go de VRAM. Mistral Small 24B gagne au-dessus de 16 Go sur les tâches de raisonnement.',
        bullets: [
          'Llama 3.1 8B Q4_K_M : 4,9 Go VRAM, ~45 tok/s sur RTX 4090, MMLU 66,6 % — meilleur choix pour cartes 6–8 Go',
          'Qwen 2.5 14B Q4_K_M : 9,3 Go VRAM, ~28 tok/s, MMLU 74,8 % — point idéal pour cartes 12 Go',
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
          'Qwen 2.5 14B en Q4_K_M utilise 9,3 Go et obtient 74,8 % MMLU — le point idéal pour les cartes 12 Go comme la RTX 3060 12 Go ou la RTX 4060 Ti 16 Go',
          'Mistral Small 3.1 24B en Q4_K_M utilise 14,4 Go et atteint ~81 % MMLU — faisable uniquement sur cartes 16 Go (RTX 4080, RTX 3090, RTX 4090)',
          'Pour le coding sur 12 Go : Qwen 2.5 Coder 14B. Pour le raisonnement multilingue sur 16 Go+ : Mistral Small 3.1 24B. En dessous de 10 Go : Llama 3.1 8B.',
        ],
      },
      body1: {
        title: 'Besoins en VRAM : quelle carte fait tourner quel modèle',
        content: [
          'Le choix entre ces trois modèles est avant tout une décision de VRAM. En quantification Q4_K_M : Llama 3.1 8B utilise 4,9 Go, Qwen 2.5 14B utilise 9,3 Go, et Mistral Small 3.1 24B utilise 14,4 Go. Cela correspond directement à trois tiers de GPU : cartes 6–8 Go (Llama 3.1 8B uniquement), cartes 10–12 Go (Qwen 2.5 14B), et cartes 16+ Go (Mistral Small 24B).',
          'Vitesse sur RTX 4090 en Q4_K_M : Llama 3.1 8B tourne à environ 45 tok/s, Qwen 2.5 14B à ~28 tok/s, et Mistral Small 3.1 24B à ~20 tok/s. Sur une RTX 3060 12 Go, seuls Llama 3.1 8B et Qwen 2.5 14B rentrent — Mistral Small 24B nécessite au minimum une carte 16 Go pour éviter de déborder sur la RAM CPU.',
          'L\'écart de benchmark est significatif : le 81 % MMLU de Mistral Small 24B est 14 points au-dessus de Llama 3.1 8B et 6 points au-dessus de Qwen 2.5 14B. Sur des tâches complexes de raisonnement multi-étapes et de suivi d\'instructions, cet écart est perceptible en pratique.',
        ],
        columns: ['Modèle', 'VRAM (Q4_K_M)', 'Vitesse (RTX 4090)', 'MMLU', 'GPU minimum'],
        rows: [
          { 'Modèle': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4,9 Go', 'Vitesse (RTX 4090)': '~45 tok/s', 'MMLU': '66,6 %', 'GPU minimum': 'RTX 3060 6 Go' },
          { 'Modèle': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '9,3 Go', 'Vitesse (RTX 4090)': '~28 tok/s', 'MMLU': '74,8 %', 'GPU minimum': 'RTX 3060 12 Go' },
          { 'Modèle': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14,4 Go', 'Vitesse (RTX 4090)': '~20 tok/s', 'MMLU': '~81 %', 'GPU minimum': 'RTX 4080 16 Go' },
        ],
      },
      body2: {
        title: 'Qualité vs VRAM : quand chaque modèle gagne',
        content: [
          '<strong>Llama 3.1 8B gagne en efficacité VRAM.</strong> À 4,9 Go Q4_K_M, c\'est le seul modèle de ce groupe qui tient sur une carte 6 Go avec de la marge pour une fenêtre de contexte de 4k tokens. Il obtient 66,6 % sur MMLU et délivre des réponses interactives rapides (~45 tok/s sur RTX 4090). Pour le chat, les requêtes de coding rapides et l\'usage quotidien sur matériel contraint, c\'est le bon choix.',
          '<strong>Qwen 2.5 14B gagne à 12 Go de VRAM.</strong> Ses 74,8 % MMLU le placent bien au-dessus de Llama 3.1 8B sur le raisonnement et le coding — et il s\'inscrit dans le tier GPU prosumer le plus courant. La variante Qwen Coder 14B (même taille, optimisée pour le code) obtient environ 78 % sur HumanEval. Si votre usage principal est le coding et que vous avez une carte 12 Go, Qwen 2.5 14B est la réponse.',
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
            a: 'Non. Mistral Small 3.1 24B en Q4_K_M nécessite 14,4 Go de VRAM, dépassant la RTX 3060 12 Go. Passer à Q2_K ramène le besoin à environ 7,6 Go mais cause une dégradation significative de la qualité. Pour la RTX 3060 12 Go, Qwen 2.5 14B Q4_K_M (9,3 Go) est le bon choix — il laisse 2,7 Go de marge pour le contexte.',
          },
          {
            q: 'Mistral Small 24B est-il meilleur que Qwen 2.5 14B pour le coding ?',
            a: 'Pour le coding général, Mistral Small 24B a un léger avantage grâce à sa taille supérieure. Cependant, Qwen 2.5 Coder 14B (la variante Qwen optimisée pour le code) est compétitif avec Mistral Small 24B sur HumanEval et tient dans 12 Go de VRAM. Si votre budget est une carte 16 Go et que vous avez besoin du raisonnement et du coding, Mistral Small 24B gagne. Sur 12 Go, Qwen Coder 14B est le meilleur compromis.',
          },
          {
            q: 'Quel modèle utiliser sur un GPU 16 Go comme la RTX 4080 ?',
            a: 'Mistral Small 3.1 24B Q4_K_M à 14,4 Go tient avec 1,6 Go de marge — suffisant pour une fenêtre de contexte de 2k. Il surpasse Qwen 2.5 14B sur les benchmarks de raisonnement. Alternativement, Qwen 2.5 32B en Q3_K_M tient dans environ 13,5 Go et concurrence Mistral Small 24B sur les tâches de coding tout en offrant plus de paramètres.',
          },
          {
            q: 'Comment Llama 3.1 8B se compare-t-il à Llama 3.2 ?',
            a: 'Llama 3.2 8B n\'a pas été publié — la série 3.2 a introduit uniquement les variantes 1B, 3B et multimodales 11B/90B. Llama 3.1 8B reste le modèle de référence 8B Llama standard. Pour un usage texte uniquement à 6–8 Go de VRAM, Llama 3.1 8B est le choix recommandé actuel dans cette classe de taille.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B・Qwen 2.5 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B：4.9 GB VRAM。Qwen 2.5 14B：9.3 GB、MMLU 74.8%。Mistral Small 24B：14.4 GB、MMLU 81%。VRAMティアで選択。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      ja: {
        question: 'Mistral Small 24B・Qwen 2.5 14B・Llama 3.1 8B：ローカルでどれを動かすべきか？',
        answer: 'VRAMで選択してください：Llama 3.1 8B（4.9 GB）、Qwen 2.5 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB VRAMではQwen 14Bが最適。16 GB以上では推論タスクでMistral Small 24Bが優位。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB VRAM、RTX 4090で~45 tok/s、MMLU 66.6% — 6〜8 GB カードに最適',
          'Qwen 2.5 14B Q4_K_M：9.3 GB VRAM、~28 tok/s、MMLU 74.8% — 12 GB カードのベストチョイス',
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
          'Qwen 2.5 14B Q4_K_Mは9.3 GBを使用しMMLU 74.8%を記録 — RTX 3060 12 GBやRTX 4060 Ti 16 GBなど12 GBカードの最適解',
          'Mistral Small 3.1 24B Q4_K_Mは14.4 GBを使用しMMLU ~81%を達成 — 16 GBカード（RTX 4080、RTX 3090、RTX 4090）のみで実行可能',
          '12 GBでのコーディング：Qwen 2.5 Coder 14B。16 GB+での多言語推論：Mistral Small 3.1 24B。10 GB未満：Llama 3.1 8B。',
        ],
      },
      body1: {
        title: 'VRAM要件：どのカードがどのモデルを動かせるか',
        content: [
          'この3モデルの選択は主にVRAMの問題です。Q4_K_M量子化で：Llama 3.1 8Bは4.9 GB、Qwen 2.5 14Bは9.3 GB、Mistral Small 3.1 24Bは14.4 GBを使用します。これは3つのGPUティアに直接対応します：6〜8 GBカード（Llama 3.1 8Bのみ）、10〜12 GBカード（Qwen 2.5 14B）、16 GB以上のカード（Mistral Small 24B）。',
          'RTX 4090でのQ4_K_M速度：Llama 3.1 8Bは約45 tok/s、Qwen 2.5 14Bは~28 tok/s、Mistral Small 3.1 24Bは~20 tok/sで動作します。RTX 3060 12 GBではLlama 3.1 8BとQwen 2.5 14Bのみ収まります — Mistral Small 24BはCPU RAMへのスピルを避けるため最低でも16 GBカードが必要です。',
          'ベンチマークの差は意味があります：Mistral Small 24BのMMLU 81%はLlama 3.1 8Bより14ポイント、Qwen 2.5 14Bより6ポイント高いです。複雑な多段階推論や指示遵守タスクでは、この差は実際に体感できます。',
        ],
        columns: ['モデル', 'VRAM (Q4_K_M)', '速度 (RTX 4090)', 'MMLU', '最低GPU'],
        rows: [
          { 'モデル': 'Llama 3.1 8B', 'VRAM (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', '最低GPU': 'RTX 3060 6 GB' },
          { 'モデル': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', '最低GPU': 'RTX 3060 12 GB' },
          { 'モデル': 'Mistral Small 3.1 24B', 'VRAM (Q4_K_M)': '14.4 GB', '速度 (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', '最低GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '品質対VRAM：各モデルが勝つ場面',
        content: [
          '<strong>Llama 3.1 8BはVRAM効率で勝ります。</strong> Q4_K_Mで4.9 GBと、4kトークンのコンテキストウィンドウ用の余裕を持って6 GBカードに収まる唯一のモデルです。MMLUで66.6%を記録し、素早いインタラクティブな応答（RTX 4090で~45 tok/s）を提供します。制限されたハードウェアでのチャット、クイックコーディングクエリ、日常使用に最適です。',
          '<strong>Qwen 2.5 14Bは12 GB VRAMで勝ります。</strong> MMLU 74.8%で推論とコーディングにおいてLlama 3.1 8Bを大きく上回り、最も一般的なプロシューマーGPUティア内に収まります。Qwen Coder 14Bバリアント（同サイズ、コード最適化）はHumanEvalで約78%を記録します。主にコーディングに使用し12 GBカードをお持ちの場合、Qwen 2.5 14Bが答えです。',
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
            a: 'いいえ。Mistral Small 3.1 24B Q4_K_Mは14.4 GB VRAMが必要でRTX 3060 12 GBを超えます。Q2_Kに下げると約7.6 GBになりますが、品質が著しく低下します。RTX 3060 12 GBにはQwen 2.5 14B Q4_K_M（9.3 GB）が適切な選択です — コンテキスト用に2.7 GBの余裕があります。',
          },
          {
            q: 'Mistral Small 24BはコーディングでQwen 2.5 14Bより優れていますか？',
            a: '一般的なコーディングでは、Mistral Small 24Bはサイズが大きい分わずかに優位です。ただし、Qwen 2.5 Coder 14B（コード最適化Qwenバリアント）はHumanEvalでMistral Small 24Bと競争力があり、12 GB VRAMに収まります。16 GBカードで推論とコーディングの両方が必要な場合はMistral Small 24Bが勝ちます。12 GBではQwen Coder 14Bがより良いトレードオフです。',
          },
          {
            q: 'RTX 4080のような16 GB GPUではどのモデルを使うべきですか？',
            a: 'Mistral Small 3.1 24B Q4_K_Mは14.4 GBで1.6 GBの余裕を持って収まります — 2kコンテキストウィンドウに十分です。推論ベンチマークでQwen 2.5 14Bを上回ります。代替として、Qwen 2.5 32B Q3_K_Mが約13.5 GBに収まり、コーディングタスクでMistral Small 24Bと競合しながらより多くのパラメータを提供します。',
          },
          {
            q: 'Llama 3.1 8BとLlama 3.2の違いは何ですか？',
            a: 'Llama 3.2 8Bはリリースされていません — 3.2シリーズは1B、3B、マルチモーダル11B/90Bバリアントのみを導入しました。Llama 3.1 8Bは標準的な8B Llamaリファレンスモデルのままです。6〜8 GB VRAMでのテキストのみの使用には、Llama 3.1 8Bがこのサイズクラスで現在推奨される選択肢です。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: 'Mistral Small 24B 对比 Qwen 2.5 14B 对比 Llama 3.1 8B：本地运行选哪个？',
    seoTitle: 'Mistral Small 24B vs Qwen 14B vs Llama 8B 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B：4.9 GB 显存。Qwen 2.5 14B：9.3 GB、MMLU 74.8%。Mistral Small 24B：14.4 GB、MMLU 81%。按显存层级选择。PromptQuorum 快速解答。',
    publishDate: '2026-05-23',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    quickAnswerTop: {
      zh: {
        question: 'Mistral Small 24B 对比 Qwen 2.5 14B 对比 Llama 3.1 8B：本地运行选哪个？',
        answer: '按显存选择：Llama 3.1 8B（4.9 GB）、Qwen 2.5 14B（9.3 GB）、Mistral Small 3.1 24B（14.4 GB）。12 GB 显存选 Qwen 14B。16 GB 以上推理任务选 Mistral Small 24B。',
        bullets: [
          'Llama 3.1 8B Q4_K_M：4.9 GB 显存，RTX 4090 上约 45 tok/s，MMLU 66.6%——适合 6–8 GB 显卡',
          'Qwen 2.5 14B Q4_K_M：9.3 GB 显存，约 28 tok/s，MMLU 74.8%——12 GB 显卡最佳选择',
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
          'Qwen 2.5 14B Q4_K_M 使用 9.3 GB，MMLU 得分 74.8%——RTX 3060 12 GB 或 RTX 4060 Ti 16 GB 等 12 GB 显卡的最优解',
          'Mistral Small 3.1 24B Q4_K_M 使用 14.4 GB，MMLU 达到约 81%——仅在 16 GB 显卡（RTX 4080、RTX 3090、RTX 4090）上可行',
          '12 GB 显卡编程：选 Qwen 2.5 Coder 14B。16 GB+ 多语言推理：选 Mistral Small 3.1 24B。10 GB 以下：选 Llama 3.1 8B。',
        ],
      },
      body1: {
        title: '显存要求：哪款显卡运行哪个模型',
        content: [
          '这三个模型之间的选择主要是显存决策。在 Q4_K_M 量化下：Llama 3.1 8B 使用 4.9 GB，Qwen 2.5 14B 使用 9.3 GB，Mistral Small 3.1 24B 使用 14.4 GB。这直接对应三个 GPU 层级：6–8 GB 显卡（仅 Llama 3.1 8B）、10–12 GB 显卡（Qwen 2.5 14B）和 16 GB+ 显卡（Mistral Small 24B）。',
          'RTX 4090 上 Q4_K_M 速度：Llama 3.1 8B 约 45 tok/s，Qwen 2.5 14B 约 28 tok/s，Mistral Small 3.1 24B 约 20 tok/s。RTX 3060 12 GB 上只有 Llama 3.1 8B 和 Qwen 2.5 14B 能放下——Mistral Small 24B 至少需要 16 GB 显卡以避免溢出到 CPU 内存。',
          '基准测试差距显著：Mistral Small 24B 的 MMLU 81% 比 Llama 3.1 8B 高 14 分，比 Qwen 2.5 14B 高 6 分。在复杂的多步推理和指令遵循任务上，这一差距在实践中是可以察觉到的。',
        ],
        columns: ['模型', '显存 (Q4_K_M)', '速度 (RTX 4090)', 'MMLU', '最低 GPU'],
        rows: [
          { '模型': 'Llama 3.1 8B', '显存 (Q4_K_M)': '4.9 GB', '速度 (RTX 4090)': '~45 tok/s', 'MMLU': '66.6%', '最低 GPU': 'RTX 3060 6 GB' },
          { '模型': 'Qwen 2.5 14B', '显存 (Q4_K_M)': '9.3 GB', '速度 (RTX 4090)': '~28 tok/s', 'MMLU': '74.8%', '最低 GPU': 'RTX 3060 12 GB' },
          { '模型': 'Mistral Small 3.1 24B', '显存 (Q4_K_M)': '14.4 GB', '速度 (RTX 4090)': '~20 tok/s', 'MMLU': '~81%', '最低 GPU': 'RTX 4080 16 GB' },
        ],
      },
      body2: {
        title: '质量对比显存：各模型的优势场景',
        content: [
          '<strong>Llama 3.1 8B 在显存效率上胜出。</strong>Q4_K_M 下仅需 4.9 GB，是该组中唯一能装入 6 GB 显卡并为 4k token 上下文窗口留有余量的模型。MMLU 得分 66.6%，在 RTX 4090 上提供约 45 tok/s 的快速交互响应。对于在受限硬件上进行聊天、快速编程查询和日常使用，这是正确的选择。',
          '<strong>Qwen 2.5 14B 在 12 GB 显存下胜出。</strong>其 74.8% MMLU 在推理和编程上远高于 Llama 3.1 8B——且适合最常见的专业消费级 GPU 层级。Qwen Coder 14B 变体（相同大小，代码优化）在 HumanEval 上得分约 78%。如果主要用途是编程且拥有 12 GB 显卡，Qwen 2.5 14B 就是答案。',
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
            a: '不能。Mistral Small 3.1 24B Q4_K_M 需要 14.4 GB 显存，超过了 RTX 3060 12 GB 的容量。降至 Q2_K 可将需求降至约 7.6 GB，但会导致显著的质量下降。对于 RTX 3060 12 GB，Qwen 2.5 14B Q4_K_M（9.3 GB）是正确选择——为上下文留有 2.7 GB 余量。',
          },
          {
            q: 'Mistral Small 24B 在编程方面比 Qwen 2.5 14B 更好吗？',
            a: '对于通用编程，Mistral Small 24B 因为更大的参数量而略有优势。然而，Qwen 2.5 Coder 14B（代码优化的 Qwen 变体）在 HumanEval 上与 Mistral Small 24B 竞争力相当，且适合 12 GB 显存。如果预算是 16 GB 显卡且需要推理和编程双重能力，Mistral Small 24B 胜出。12 GB 显存下，Qwen Coder 14B 是更好的权衡。',
          },
          {
            q: '在 RTX 4080 等 16 GB GPU 上应该使用哪个模型？',
            a: 'Mistral Small 3.1 24B Q4_K_M 以 14.4 GB 装入，留有 1.6 GB 余量——足够 2k 上下文窗口。它在推理基准测试上超越 Qwen 2.5 14B。或者，Qwen 2.5 32B Q3_K_M 约需 13.5 GB，在编程任务上与 Mistral Small 24B 竞争，同时提供更多参数。',
          },
          {
            q: 'Llama 3.1 8B 与 Llama 3.2 有何区别？',
            a: 'Llama 3.2 8B 并未发布——3.2 系列仅引入了 1B、3B 以及多模态 11B/90B 变体。Llama 3.1 8B 仍是标准的 8B Llama 参考模型。对于 6–8 GB 显存的纯文本使用，Llama 3.1 8B 是该尺寸类别中当前推荐的选择。',
          },
        ],
      },
    },
  },
}
