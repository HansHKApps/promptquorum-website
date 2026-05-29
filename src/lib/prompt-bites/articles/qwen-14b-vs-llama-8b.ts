import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Qwen 14B vs Llama 3 8B: Which Runs Better Locally?',
    seoTitle: 'Qwen 14B vs Llama 3 8B: Which? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B: 6 GB VRAM, ~25 tok/s. Qwen 2.5 14B: 10 GB, higher benchmarks, 74.8% MMLU. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Qwen 2.5 14B'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing between Llama 8B and Qwen 14B locally',
    parentArticle: '/local-llms/qwen-vs-llama-vs-mistral',
    siblingBites: ['best-14b-models-coding', 'best-moe-models-local-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Qwen 14B vs Llama 3 8B: which runs better locally?',
        answer: 'Llama 3 8B fits in 6 GB VRAM and runs faster. Qwen 2.5 14B needs 10+ GB but scores higher on benchmarks. If you have 12 GB VRAM, Qwen 14B wins on quality.',
        bullets: [
          'Llama 3 8B Q4_K_M: 6 GB VRAM, ~25 tok/s on RTX 3060',
          'Qwen 2.5 14B Q4_K_M: 10 GB VRAM, ~15 tok/s on RTX 3060',
          'Qwen 14B is better quality; Llama 8B is faster',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Qwen 14B vs. Llama 3 8B: Welches läuft lokal besser?',
        answer: 'Llama 3 8B passt in 6 GB VRAM und läuft schneller. Qwen 2.5 14B benötigt 10+ GB, erzielt aber höhere Benchmark-Werte. Mit 12 GB VRAM gewinnt Qwen 14B bei der Qualität.',
        bullets: [
          'Llama 3 8B Q4_K_M: 6 GB VRAM, ~25 tok/s auf RTX 3060',
          'Qwen 2.5 14B Q4_K_M: 10 GB VRAM, ~15 tok/s auf RTX 3060',
          'Qwen 14B hat bessere Qualität; Llama 8B ist schneller',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Qwen 14B vs Llama 3 8B : lequel tourne mieux en local ?',
        answer: 'Llama 3 8B tient en 6 Go de VRAM et tourne plus vite. Qwen 2.5 14B nécessite 10+ Go mais obtient de meilleurs scores sur les benchmarks. Avec 12 Go de VRAM, Qwen 14B gagne en qualité.',
        bullets: [
          'Llama 3 8B Q4_K_M : 6 Go de VRAM, ~25 tok/s sur RTX 3060',
          'Qwen 2.5 14B Q4_K_M : 10 Go de VRAM, ~15 tok/s sur RTX 3060',
          'Qwen 14B offre une meilleure qualité ; Llama 8B est plus rapide',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Qwen 14B対Llama 3 8B：ローカルでどちらが優れているか？',
        answer: 'Llama 3 8Bは6 GB VRAMに収まり高速に動作します。Qwen 2.5 14Bは10 GB以上が必要ですがベンチマークスコアが高いです。12 GB VRAMがあればQwen 14Bが品質で勝ります。',
        bullets: [
          'Llama 3 8B Q4_K_M：6 GB VRAM、RTX 3060で~25 tok/s',
          'Qwen 2.5 14B Q4_K_M：10 GB VRAM、RTX 3060で~15 tok/s',
          'Qwen 14Bは品質が高く、Llama 8Bは高速',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Qwen 14B 对比 Llama 3 8B：哪款本地运行更好？',
        answer: 'Llama 3 8B 仅需6 GB VRAM 且运行更快。Qwen 2.5 14B 需要10 GB 以上但基准分数更高。拥有12 GB VRAM 时，Qwen 14B 在质量上更胜一筹。',
        bullets: [
          'Llama 3 8B Q4_K_M：6 GB VRAM，RTX 3060 上约25 tok/s',
          'Qwen 2.5 14B Q4_K_M：10 GB VRAM，RTX 3060 上约15 tok/s',
          'Qwen 14B 质量更好；Llama 8B 速度更快',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M needs only 6 GB VRAM and delivers ~25 tok/s on RTX 3060 — the right pick for interactive speed',
          'Qwen 2.5 14B Q4_K_M needs 10 GB VRAM and runs at ~15 tok/s — but scores 8–10 points higher on MMLU and reasoning benchmarks',
          'The VRAM crossover point is 12 GB: below that, Llama 8B is the only option; at 12 GB, Qwen 14B wins on quality',
          'For coding tasks specifically, the gap widens further in Qwen 14B\'s favor — Qwen Coder variants add additional code-benchmark advantage',
        ],
      },
      body1: {
        title: 'Llama 3 8B Wins on Speed and VRAM Fit',
        content: [
          '<strong>Llama 3 8B at Q4_K_M quantization uses 6 GB VRAM and runs at ~25 tokens per second on an RTX 3060 12 GB — making it the default choice for any setup with under 10 GB VRAM.</strong> Its 8B parameter count translates into snappy, interactive-speed responses that feel natural for chat and short code sessions.',
          'Qwen 2.5 14B at Q4_K_M requires approximately 10 GB VRAM and produces ~15 tok/s on the same card. The lower throughput is noticeable in real-time conversations but acceptable for batch summarization or longer document processing where quality matters more than latency.',
          'The speed difference (25 vs 15 tok/s) means Llama 3 8B generates a 200-token answer in about 8 seconds, while Qwen 2.5 14B takes about 13 seconds. For single-turn queries this gap is minor; for multi-turn chat sessions it compounds.',
        ],
        columns: ['Use Case', 'Winner', 'Why'],
        rows: [
          { 'Use Case': 'Coding & reasoning', 'Winner': 'Qwen 2.5 14B', 'Why': 'Higher parameter count improves multi-step logic' },
          { 'Use Case': 'Chat & instruction', 'Winner': 'Llama 3 8B', 'Why': 'Optimized for fast interactive responses' },
          { 'Use Case': 'Multilingual', 'Winner': 'Tied', 'Why': 'Both strong on European and East Asian languages' },
          { 'Use Case': 'RAM-constrained (≤8 GB)', 'Winner': 'Llama 3 8B', 'Why': 'Fits in 6 GB; Qwen 14B needs 10 GB' },
          { 'Use Case': 'Long context (16K+)', 'Winner': 'Qwen 2.5 14B', 'Why': 'Better recall at extended context lengths' },
        ],
      },
      body2: {
        title: 'Qwen 2.5 14B Wins on Quality When VRAM Allows',
        content: [
          '<strong>Qwen 2.5 14B scores 74.8% on MMLU versus 66.6% for Llama 3 8B — an 8-point gap that reflects in noticeably better multi-step reasoning, instruction following, and structured output consistency.</strong> The difference is particularly visible on tasks that require holding and applying context across multiple paragraphs.',
          'If your primary use case is code completion, the quality gap grows. Qwen 2.5 Coder 14B (the code-tuned variant of the same base) scores 78.4% on HumanEval. Llama 3 8B generic scores around 55% on the same benchmark — a 23-point difference on coding tasks.',
          '≤8 GB VRAM: Llama 3 8B Q4_K_M fits with ~2 GB headroom — Qwen 14B is not an option. 10–12 GB VRAM: Qwen 2.5 14B Q4_K_M fits at the tipping point. 16+ GB VRAM: either model works; Qwen 2.5 14B Q5 becomes practical.',
          'For a deeper look at coding model performance including benchmark tables, see the <a href="/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">best 14B models for coding</a> comparison.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Can Qwen 2.5 14B run on a 6 GB VRAM GPU?',
            a: 'No. Qwen 2.5 14B at Q4_K_M requires approximately 10 GB VRAM. On a 6 GB card you would need to drop to Q2_K quantization, which causes significant quality degradation. Llama 3 8B is the correct model for 6 GB VRAM.',
          },
          {
            q: 'Is Qwen 2.5 14B or Llama 3 8B better for coding?',
            a: 'Qwen 2.5 14B is substantially better for coding. Qwen Coder 14B (the code-tuned variant) scores 78.4% on HumanEval versus ~55% for Llama 3 8B. Use Llama 3 8B only when VRAM prevents running Qwen.',
          },
          {
            q: 'Does Qwen 2.5 14B support longer context than Llama 3 8B?',
            a: 'Qwen 2.5 14B supports a 128k context window natively. Llama 3 8B supports 8k by default, though RoPE-extended variants can reach 128k with some quality loss. For long-document tasks, Qwen 2.5 14B has a clear advantage even before accounting for its larger parameter count.',
          },
          {
            q: 'Does context length affect which model to choose for chat?',
            a: 'Yes. For typical single-turn or short multi-turn chat (under 4k tokens), both models are fine — choose based on VRAM. For long conversations or document-heavy sessions, Qwen 2.5 14B\'s 128k native context window is a meaningful advantage over Llama 3 8B\'s default 8k limit.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Qwen 14B vs. Llama 3 8B: Welches läuft lokal besser?',
    seoTitle: 'Qwen 14B vs Llama 3 8B: Welches? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B: 6 GB VRAM, ~25 tok/s. Qwen 2.5 14B: 10 GB, 74,8% MMLU. Bei 12 GB VRAM: Qwen gewinnt. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Qwen 14B vs. Llama 3 8B: Welches läuft lokal besser?',
        answer: 'Llama 3 8B passt in 6 GB VRAM und läuft schneller. Qwen 2.5 14B benötigt 10+ GB, erzielt aber höhere Benchmark-Werte. Mit 12 GB VRAM gewinnt Qwen 14B bei der Qualität.',
        bullets: [
          'Llama 3 8B Q4_K_M: 6 GB VRAM, ~25 tok/s auf RTX 3060',
          'Qwen 2.5 14B Q4_K_M: 10 GB VRAM, ~15 tok/s auf RTX 3060',
          'Qwen 14B hat bessere Qualität; Llama 8B ist schneller',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M benötigt nur 6 GB VRAM und liefert ~25 tok/s auf RTX 3060 — die richtige Wahl für interaktive Geschwindigkeit',
          'Qwen 2.5 14B Q4_K_M benötigt 10 GB VRAM und läuft mit ~15 tok/s — erzielt aber 8–10 Punkte mehr auf MMLU und Reasoning-Benchmarks',
          'Der VRAM-Schwellenwert liegt bei 12 GB: Darunter ist Llama 8B die einzige Option; bei 12 GB gewinnt Qwen 14B bei der Qualität',
          'Bei Coding-Aufgaben wächst der Vorsprung von Qwen 14B noch weiter — Qwen-Coder-Varianten bieten zusätzlichen Vorteil auf Code-Benchmarks',
        ],
      },
      body1: {
        title: 'Llama 3 8B gewinnt bei Geschwindigkeit und VRAM-Bedarf',
        content: [
          '<strong>Llama 3 8B in der Q4_K_M-Quantisierung verwendet 6 GB VRAM und läuft auf einer RTX 3060 12 GB mit ~25 Tokens pro Sekunde — damit ist es die Standardwahl für jedes System mit weniger als 10 GB VRAM.</strong> Die 8B-Parameter-Anzahl übersetzt sich in schnelle, interaktionsfähige Antworten, die sich für Chat und kurze Code-Sitzungen natürlich anfühlen.',
          'Qwen 2.5 14B benötigt bei Q4_K_M etwa 10 GB VRAM und erzeugt auf derselben Karte ~15 tok/s. Der geringere Durchsatz ist bei Echtzeit-Konversationen spürbar, aber akzeptabel für Batch-Zusammenfassungen oder längere Dokumentenverarbeitung, bei der Qualität wichtiger ist als Latenz.',
          'Der Geschwindigkeitsunterschied (25 vs. 15 tok/s) bedeutet, dass Llama 3 8B eine 200-Token-Antwort in etwa 8 Sekunden generiert, während Qwen 2.5 14B etwa 13 Sekunden benötigt. Bei einzelnen Anfragen ist der Unterschied gering; bei mehrteiligen Chat-Sitzungen summiert er sich.',
        ],
        columns: ['Modell', 'VRAM (Q4_K_M)', 'Geschwindigkeit (RTX 3060)', 'MMLU-Score'],
        rows: [
          { 'Modell': 'Llama 3 8B', 'VRAM (Q4_K_M)': '6 GB', 'Geschwindigkeit (RTX 3060)': '~25 tok/s', 'MMLU-Score': '66,6 %' },
          { 'Modell': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '10 GB', 'Geschwindigkeit (RTX 3060)': '~15 tok/s', 'MMLU-Score': '74,8 %' },
        ],
      },
      body2: {
        title: 'Qwen 2.5 14B gewinnt bei Qualität, wenn VRAM ausreicht',
        content: [
          '<strong>Qwen 2.5 14B erzielt 74,8 % auf MMLU gegenüber 66,6 % für Llama 3 8B — ein 8-Punkte-Vorsprung, der sich in spürbar besserem mehrstufigen Reasoning, Instruktionsbefolgung und konsistenter strukturierter Ausgabe niederschlägt.</strong> Der Unterschied zeigt sich besonders bei Aufgaben, die das Halten und Anwenden von Kontext über mehrere Absätze hinweg erfordern.',
          'Bei Code-Vervollständigung wächst der Qualitätsunterschied noch weiter. Qwen 2.5 Coder 14B (die code-optimierte Variante derselben Basis) erzielt 78,4 % auf HumanEval. Llama 3 8B generic erreicht auf demselben Benchmark etwa 55 % — ein Unterschied von 23 Punkten bei Coding-Aufgaben.',
          '≤8 GB VRAM: Llama 3 8B Q4_K_M passt mit ~2 GB Puffer — Qwen 14B ist keine Option. 10–12 GB VRAM: Qwen 2.5 14B Q4_K_M passt am Wendepunkt. 16+ GB VRAM: beide Modelle funktionieren; Qwen 2.5 14B Q5 wird praktikabel.',
          'Einen detaillierteren Blick auf die Coding-Modell-Performance einschließlich Benchmark-Tabellen finden Sie im Vergleich <a href="/de/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">beste 14B-Modelle für Coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Qwen 14B vs. Llama 8B',
        faqs: [
          {
            q: 'Kann Qwen 2.5 14B auf einer GPU mit 6 GB VRAM laufen?',
            a: 'Nein. Qwen 2.5 14B bei Q4_K_M benötigt etwa 10 GB VRAM. Auf einer 6-GB-Karte müssten Sie auf Q2_K-Quantisierung zurückgreifen, was zu erheblichem Qualitätsverlust führt. Llama 3 8B ist das richtige Modell für 6 GB VRAM.',
          },
          {
            q: 'Ist Qwen 2.5 14B oder Llama 3 8B besser für Coding?',
            a: 'Qwen 2.5 14B ist für Coding deutlich besser. Qwen Coder 14B (die code-optimierte Variante) erzielt 78,4 % auf HumanEval gegenüber ~55 % für Llama 3 8B. Verwenden Sie Llama 3 8B für Coding nur, wenn VRAM den Betrieb von Qwen verhindert.',
          },
          {
            q: 'Unterstützt Qwen 2.5 14B einen längeren Kontext als Llama 3 8B?',
            a: 'Qwen 2.5 14B unterstützt nativ ein 128k-Kontextfenster. Llama 3 8B unterstützt standardmäßig 8k, obwohl RoPE-erweiterte Varianten mit gewissem Qualitätsverlust 128k erreichen können. Bei Aufgaben mit langen Dokumenten hat Qwen 2.5 14B selbst vor Berücksichtigung seiner größeren Parameteranzahl einen klaren Vorteil.',
          },
          {
            q: 'Beeinflusst die Kontextlänge die Modellwahl für Chat?',
            a: 'Ja. Bei typischem Single-Turn- oder kurz-mehrstufigem Chat (unter 4k Tokens) sind beide Modelle in Ordnung — wählen Sie basierend auf VRAM. Bei langen Konversationen oder dokumentenzentrierten Sitzungen ist Qwen 2.5 14B\'s natives 128k-Kontextfenster ein sinnvoller Vorteil gegenüber Llama 3 8B\'s Standard-8k-Limit.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Qwen 14B vs Llama 3 8B : lequel tourne mieux en local ?',
    seoTitle: 'Qwen 14B vs Llama 3 8B : Lequel ? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B : 6 Go VRAM, ~25 tok/s. Qwen 2.5 14B : 10 Go, 74,8% MMLU. À 12 Go : Qwen gagne en qualité. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Qwen 14B vs Llama 3 8B : lequel tourne mieux en local ?',
        answer: 'Llama 3 8B tient en 6 Go de VRAM et tourne plus vite. Qwen 2.5 14B nécessite 10+ Go mais obtient de meilleurs scores sur les benchmarks. Avec 12 Go de VRAM, Qwen 14B gagne en qualité.',
        bullets: [
          'Llama 3 8B Q4_K_M : 6 Go de VRAM, ~25 tok/s sur RTX 3060',
          'Qwen 2.5 14B Q4_K_M : 10 Go de VRAM, ~15 tok/s sur RTX 3060',
          'Qwen 14B offre une meilleure qualité ; Llama 8B est plus rapide',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M ne nécessite que 6 Go de VRAM et délivre ~25 tok/s sur RTX 3060 — le bon choix pour une vitesse interactive',
          'Qwen 2.5 14B Q4_K_M nécessite 10 Go de VRAM et tourne à ~15 tok/s — mais obtient 8 à 10 points de plus sur MMLU et les benchmarks de raisonnement',
          'Le seuil VRAM est à 12 Go : en dessous, Llama 8B est la seule option ; à 12 Go, Qwen 14B gagne en qualité',
          'Pour les tâches de coding, l\'écart s\'élargit encore en faveur de Qwen 14B — les variantes Qwen Coder ajoutent un avantage supplémentaire sur les benchmarks de code',
        ],
      },
      body1: {
        title: 'Llama 3 8B gagne en vitesse et en empreinte VRAM',
        content: [
          '<strong>Llama 3 8B en quantification Q4_K_M utilise 6 Go de VRAM et tourne à ~25 tokens par seconde sur une RTX 3060 12 Go — ce qui en fait le choix par défaut pour tout système disposant de moins de 10 Go de VRAM.</strong> Ses 8 milliards de paramètres se traduisent par des réponses rapides et interactives, naturelles pour le chat et les sessions de code courtes.',
          'Qwen 2.5 14B en Q4_K_M nécessite environ 10 Go de VRAM et produit ~15 tok/s sur la même carte. Le débit inférieur est perceptible en conversation en temps réel, mais acceptable pour la synthèse par lots ou le traitement de longs documents où la qualité prime sur la latence.',
          'La différence de vitesse (25 vs 15 tok/s) signifie que Llama 3 8B génère une réponse de 200 tokens en environ 8 secondes, contre 13 secondes pour Qwen 2.5 14B. Pour les requêtes uniques, cet écart est mineur ; il s\'accumule sur les sessions de chat multi-tours.',
        ],
        columns: ['Modèle', 'VRAM (Q4_K_M)', 'Vitesse (RTX 3060)', 'Score MMLU'],
        rows: [
          { 'Modèle': 'Llama 3 8B', 'VRAM (Q4_K_M)': '6 Go', 'Vitesse (RTX 3060)': '~25 tok/s', 'Score MMLU': '66,6 %' },
          { 'Modèle': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '10 Go', 'Vitesse (RTX 3060)': '~15 tok/s', 'Score MMLU': '74,8 %' },
        ],
      },
      body2: {
        title: 'Qwen 2.5 14B gagne en qualité quand le VRAM le permet',
        content: [
          '<strong>Qwen 2.5 14B obtient 74,8 % sur MMLU contre 66,6 % pour Llama 3 8B — un écart de 8 points qui se traduit par un raisonnement multi-étapes, un suivi d\'instructions et une cohérence des sorties structurées nettement meilleurs.</strong> La différence est particulièrement visible sur les tâches nécessitant de retenir et d\'appliquer le contexte sur plusieurs paragraphes.',
          'Pour la complétion de code, l\'écart de qualité se creuse encore davantage. Qwen 2.5 Coder 14B (la variante optimisée pour le code de la même base) obtient 78,4 % sur HumanEval. Llama 3 8B générique atteint environ 55 % sur le même benchmark — soit 23 points d\'écart sur les tâches de coding.',
          '≤8 Go VRAM : Llama 3 8B Q4_K_M s\'ajuste avec ~2 Go de marge — Qwen 14B n\'est pas une option. 10–12 Go VRAM : Qwen 2.5 14B Q4_K_M s\'ajuste au point critique. 16+ Go VRAM : l\'un ou l\'autre fonctionne ; Qwen 2.5 14B Q5 devient pratique.',
          'Pour une analyse approfondie des performances des modèles de coding, incluant des tableaux de benchmarks, consultez la comparaison <a href="/fr/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">meilleurs modèles 14B pour le coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: 'Qwen 2.5 14B peut-il fonctionner sur un GPU avec 6 Go de VRAM ?',
            a: 'Non. Qwen 2.5 14B en Q4_K_M nécessite environ 10 Go de VRAM. Sur une carte 6 Go, vous devriez descendre à la quantification Q2_K, ce qui entraîne une dégradation significative de la qualité. Llama 3 8B est le modèle approprié pour 6 Go de VRAM.',
          },
          {
            q: 'Qwen 2.5 14B ou Llama 3 8B est-il meilleur pour le coding ?',
            a: 'Qwen 2.5 14B est nettement meilleur pour le coding. Qwen Coder 14B (la variante optimisée pour le code) obtient 78,4 % sur HumanEval contre ~55 % pour Llama 3 8B. Utilisez Llama 3 8B pour le coding uniquement quand le VRAM empêche de faire tourner Qwen.',
          },
          {
            q: 'Qwen 2.5 14B supporte-t-il un contexte plus long que Llama 3 8B ?',
            a: 'Qwen 2.5 14B supporte nativement une fenêtre de contexte de 128k. Llama 3 8B supporte 8k par défaut, bien que des variantes étendues par RoPE puissent atteindre 128k avec une légère perte de qualité. Pour les tâches sur longs documents, Qwen 2.5 14B a un avantage clair même avant de tenir compte de son plus grand nombre de paramètres.',
          },
          {
            q: 'La longueur du contexte affecte-t-elle le choix du modèle pour le chat ?',
            a: 'Oui. Pour le chat typique en single-turn ou courtes sessions multi-tour (moins de 4k tokens), les deux modèles conviennent — choisissez en fonction du VRAM. Pour les conversations longues ou les sessions axées sur les documents, la fenêtre de contexte native de 128k de Qwen 2.5 14B est un avantage significatif par rapport à la limite de 8k standard de Llama 3 8B.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'Qwen 14B対Llama 3 8B：ローカルでどちらが優れているか？',
    seoTitle: 'Qwen 14B vs Llama 3 8B：どちらが優れているか？ | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B：6 GB VRAM、~25 tok/s。Qwen 2.5 14B：10 GB、MMLU 74.8%。12 GB VRAM なら Qwen が品質で優位。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Qwen 14B対Llama 3 8B：ローカルでどちらが優れているか？',
        answer: 'Llama 3 8Bは6 GB VRAMに収まり高速に動作します。Qwen 2.5 14Bは10 GB以上が必要ですがベンチマークスコアが高いです。12 GB VRAMがあればQwen 14Bが品質で勝ります。',
        bullets: [
          'Llama 3 8B Q4_K_M：6 GB VRAM、RTX 3060で~25 tok/s',
          'Qwen 2.5 14B Q4_K_M：10 GB VRAM、RTX 3060で~15 tok/s',
          'Qwen 14Bは品質が高く、Llama 8Bは高速',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_Mは6 GB VRAMのみ必要でRTX 3060上で~25 tok/sを提供 — 対話的な速度を求める際の正しい選択',
          'Qwen 2.5 14B Q4_K_Mは10 GB VRAMが必要で~15 tok/sで動作 — ただしMMLUと推論ベンチマークで8〜10ポイント高得点',
          'VRAMの分岐点は12 GB：それ以下ではLlama 8Bのみが選択肢。12 GBではQwen 14Bが品質で勝る',
          'コーディングタスクでは差がさらに広がりQwen 14Bに有利 — Qwen Coderバリアントはコードベンチマークで追加の優位性を持つ',
        ],
      },
      body1: {
        title: 'Llama 3 8Bは速度とVRAM使用量で勝る',
        content: [
          '<strong>Q4_K_M量子化のLlama 3 8BはRTX 3060 12 GBで6 GB VRAMを使用し毎秒約25トークンで動作 — 10 GB VRAM未満のシステムのデフォルト選択肢です。</strong> 80億パラメータにより、チャットや短いコードセッションに自然に感じられる素早い対話的な応答が実現します。',
          'Q4_K_MのQwen 2.5 14Bは同じカードで約10 GB VRAMが必要で~15 tok/sを生成します。低いスループットはリアルタイム会話では目立ちますが、レイテンシより品質が重要なバッチ要約や長文書処理には許容できます。',
          '速度差（25対15 tok/s）により、Llama 3 8Bは200トークンの回答を約8秒で生成し、Qwen 2.5 14Bは約13秒かかります。単発クエリではこの差は小さいですが、複数ターンのチャットセッションでは積み重なります。',
        ],
        columns: ['モデル', 'VRAM (Q4_K_M)', '速度 (RTX 3060)', 'MMLUスコア'],
        rows: [
          { 'モデル': 'Llama 3 8B', 'VRAM (Q4_K_M)': '6 GB', '速度 (RTX 3060)': '~25 tok/s', 'MMLUスコア': '66.6%' },
          { 'モデル': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '10 GB', '速度 (RTX 3060)': '~15 tok/s', 'MMLUスコア': '74.8%' },
        ],
      },
      body2: {
        title: 'VRAMが許せばQwen 2.5 14Bが品質で勝る',
        content: [
          '<strong>Qwen 2.5 14BはMMLUで74.8%に対してLlama 3 8Bは66.6% — 8ポイントの差が、多段階推論、指示への従い方、構造化出力の一貫性で明確に現れます。</strong> 複数段落にまたがるコンテキストの保持と適用が必要なタスクで差が特に顕著です。',
          'コード補完ではさらに品質の差が広がります。Qwen 2.5 Coder 14B（同じベースのコード最適化バリアント）はHumanEvalで78.4%を記録します。Llama 3 8Bの汎用版は同じベンチマークで約55% — コーディングタスクで23ポイントの差です。',
          '8 GB以下 VRAM：Llama 3 8B Q4_K_Mは~2 GBの余裕で収まります — Qwen 14Bは選択肢ではありません。10–12 GB VRAM：Qwen 2.5 14B Q4_K_Mが転換点で収まります。16+ GB VRAM：いずれのモデルも動作します；Qwen 2.5 14B Q5が実用的になります。',
          'ベンチマーク表を含むコーディングモデルのパフォーマンスの詳細な分析については、<a href="/ja/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">コーディング用最適14Bモデル</a>の比較をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Qwen 14B対Llama 8Bに関するよくある質問',
        faqs: [
          {
            q: 'Qwen 2.5 14Bは6 GB VRAMのGPUで動作しますか？',
            a: '動作しません。Q4_K_MのQwen 2.5 14Bには約10 GB VRAMが必要です。6 GBカードではQ2_K量子化に下げる必要があり、品質が大幅に低下します。6 GB VRAMにはLlama 3 8Bが適切なモデルです。',
          },
          {
            q: 'Qwen 2.5 14BとLlama 3 8Bはコーディングにどちらがよいですか？',
            a: 'Qwen 2.5 14Bはコーディングに大幅に優れています。Qwen Coder 14B（コード最適化バリアント）はHumanEvalで78.4%に対してLlama 3 8Bは約55%です。VRAMがQwenの実行を妨げる場合のみLlama 3 8Bをコーディングに使用してください。',
          },
          {
            q: 'Qwen 2.5 14BはLlama 3 8Bより長いコンテキストをサポートしていますか？',
            a: 'Qwen 2.5 14Bはネイティブで128kのコンテキストウィンドウをサポートします。Llama 3 8Bはデフォルトで8kをサポートしますが、RoPE拡張バリアントは品質をいくらか低下させながら128kに達することができます。長文書タスクでは、パラメータ数が多いこと以前にQwen 2.5 14Bが明確な優位性を持ちます。',
          },
          {
            q: 'コンテキスト長はチャットのモデル選択に影響しますか？',
            a: 'はい。典型的なシングルターンまたは短い複数ターンのチャット（4k トークン未満）では、両方のモデルが適切です — VRAMに基づいて選択します。長い会話またはドキュメント中心のセッションでは、Qwen 2.5 14Bのネイティブ128kコンテキストウィンドウはLlama 3 8Bのデフォルト8k制限に対して有意な利点です。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: 'Qwen 14B 对比 Llama 3 8B：哪款本地运行更好？',
    seoTitle: 'Qwen 14B 对比 Llama 3 8B：哪款更优？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B：6 GB VRAM、约 25 tok/s。Qwen 2.5 14B：10 GB、MMLU 74.8%。12 GB VRAM 时 Qwen 质量更优。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'Qwen 14B 对比 Llama 3 8B：哪款本地运行更好？',
        answer: 'Llama 3 8B 仅需6 GB VRAM 且运行更快。Qwen 2.5 14B 需要10 GB 以上但基准分数更高。拥有12 GB VRAM 时，Qwen 14B 在质量上更胜一筹。',
        bullets: [
          'Llama 3 8B Q4_K_M：6 GB VRAM，RTX 3060 上约25 tok/s',
          'Qwen 2.5 14B Q4_K_M：10 GB VRAM，RTX 3060 上约15 tok/s',
          'Qwen 14B 质量更好；Llama 8B 速度更快',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M 仅需6 GB VRAM，在 RTX 3060 上提供约25 tok/s——追求交互速度时的正确选择',
          'Qwen 2.5 14B Q4_K_M 需要10 GB VRAM，运行约15 tok/s——但在 MMLU 和推理基准测试上高出8–10分',
          'VRAM 分界点是12 GB：低于此值 Llama 8B 是唯一选择；达到12 GB 时 Qwen 14B 质量更优',
          '编程任务中差距进一步扩大，有利于 Qwen 14B——Qwen Coder 变体在代码基准测试上额外领先',
        ],
      },
      body1: {
        title: 'Llama 3 8B 在速度和 VRAM 使用上占优',
        content: [
          '<strong>Llama 3 8B 在 Q4_K_M 量化下使用6 GB VRAM，在 RTX 3060 12 GB 上运行速度约为每秒25个 token——是所有 VRAM 低于10 GB 系统的默认选择。</strong>80亿参数带来的快速交互式响应，非常适合聊天和短代码会话。',
          'Qwen 2.5 14B 在 Q4_K_M 下需要约10 GB VRAM，在相同显卡上生成约15 tok/s。较低的吞吐量在实时对话中能感知到，但对于批量摘要或质量重于延迟的长文档处理来说是可以接受的。',
          '速度差（25对15 tok/s）意味着 Llama 3 8B 约8秒生成200 token 的回答，而 Qwen 2.5 14B 约需13秒。单次查询时差距不大，但在多轮聊天会话中会不断累积。',
        ],
        columns: ['模型', 'VRAM (Q4_K_M)', '速度 (RTX 3060)', 'MMLU 得分'],
        rows: [
          { '模型': 'Llama 3 8B', 'VRAM (Q4_K_M)': '6 GB', '速度 (RTX 3060)': '~25 tok/s', 'MMLU 得分': '66.6%' },
          { '模型': 'Qwen 2.5 14B', 'VRAM (Q4_K_M)': '10 GB', '速度 (RTX 3060)': '~15 tok/s', 'MMLU 得分': '74.8%' },
        ],
      },
      body2: {
        title: 'VRAM 足够时 Qwen 2.5 14B 质量更优',
        content: [
          '<strong>Qwen 2.5 14B 在 MMLU 上得74.8%，Llama 3 8B 得66.6%——8分差距体现在多步推理、指令遵循和结构化输出一致性上的明显提升。</strong>在需要跨多个段落保留和应用上下文的任务中差异尤为显著。',
          '代码补全任务中质量差距进一步扩大。Qwen 2.5 Coder 14B（同一基础模型的代码优化变体）在 HumanEval 上得78.4%。Llama 3 8B 通用版在相同基准测试上约55%——编程任务上相差23分。',
          '≤8 GB VRAM：Llama 3 8B Q4_K_M 在约2 GB 余量下可以容纳——Qwen 14B 不是一个选项。10–12 GB VRAM：Qwen 2.5 14B Q4_K_M 在临界点可以容纳。16+ GB VRAM：任一模型都可以工作；Qwen 2.5 14B Q5 变得实用。',
          '有关编程模型性能的深入分析（包括基准测试表），请参阅<a href="/zh/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">编程最佳14B模型</a>对比。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Qwen 14B 对比 Llama 8B 的快速解答',
        faqs: [
          {
            q: 'Qwen 2.5 14B 能在6 GB VRAM 的 GPU 上运行吗？',
            a: '不能。Q4_K_M 下 Qwen 2.5 14B 需要约10 GB VRAM。6 GB 显卡上需降至 Q2_K 量化，会导致显著的质量下降。6 GB VRAM 应选择 Llama 3 8B。',
          },
          {
            q: 'Qwen 2.5 14B 还是 Llama 3 8B 更适合编程？',
            a: 'Qwen 2.5 14B 在编程上明显更好。Qwen Coder 14B（代码优化变体）HumanEval 得78.4%，而 Llama 3 8B 约55%。只有在 VRAM 不足以运行 Qwen 时才使用 Llama 3 8B 编程。',
          },
          {
            q: 'Qwen 2.5 14B 比 Llama 3 8B 支持更长的上下文吗？',
            a: 'Qwen 2.5 14B 原生支持128k 上下文窗口。Llama 3 8B 默认支持8k，RoPE 扩展变体可达128k 但有一定质量损失。长文档任务中，即使不考虑更大的参数量，Qwen 2.5 14B 也有明显优势。',
          },
          {
            q: '上下文长度会影响聊天模型的选择吗？',
            a: '会的。对于典型的单轮或短多轮聊天（少于4k token），两个模型都可以——根据 VRAM 选择。对于长对话或文档中心的会话，Qwen 2.5 14B 的原生128k 上下文窗口相对于 Llama 3 8B 的默认8k 限制是一个重大优势。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: 'Qwen 14B vs Llama 3 8B: ¿cuál funciona mejor en local?',
    seoTitle: 'Qwen 14B vs Llama 3 8B: ¿Cuál elegir? 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B: 6 GB VRAM, ~25 tok/s. Qwen 2.5 14B: 10 GB, MMLU 74.8%. Con 12 GB de VRAM, Qwen 14B gana en calidad. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Qwen 14B vs Llama 3 8B: cuál funciona mejor en local?',
        answer: 'Llama 3 8B cabe en 6 GB de VRAM y es más rápido. Qwen 2.5 14B necesita 10 GB o más, pero obtiene mejores resultados en benchmarks. Con 12 GB de VRAM, Qwen 14B gana en calidad.',
        bullets: [
          'Llama 3 8B Q4_K_M: 6 GB VRAM, ~25 tok/s en RTX 3060',
          'Qwen 2.5 14B Q4_K_M: 10 GB VRAM, ~15 tok/s en RTX 3060',
          'Qwen 14B ofrece mejor calidad; Llama 8B es más rápido',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Llama 3 8B Q4_K_M solo necesita 6 GB de VRAM y ofrece ~25 tok/s en RTX 3060 — la elección correcta para velocidad interactiva',
          'Qwen 2.5 14B Q4_K_M necesita 10 GB de VRAM y corre a ~15 tok/s — pero supera 8–10 puntos en MMLU y benchmarks de razonamiento',
          'El punto de cruce de VRAM es 12 GB: por debajo, Llama 8B es la única opción; con 12 GB, Qwen 14B gana en calidad',
          'En tareas de coding, la diferencia aumenta a favor de Qwen 14B — las variantes Qwen Coder añaden ventaja adicional en benchmarks de código',
        ],
      },
      body1: {
        title: 'Llama 3 8B gana en velocidad y consumo de VRAM',
        content: [
          '<strong>Llama 3 8B con cuantización Q4_K_M usa 6 GB de VRAM y corre a ~25 tokens por segundo en una RTX 3060 12 GB — la elección predeterminada para cualquier equipo con menos de 10 GB de VRAM.</strong> Sus 8B parámetros se traducen en respuestas rápidas e interactivas, naturales para chat y sesiones de código cortas.',
          'Qwen 2.5 14B en Q4_K_M necesita aproximadamente 10 GB de VRAM y produce ~15 tok/s en la misma tarjeta. El menor rendimiento es notable en conversaciones en tiempo real, pero aceptable para resúmenes por lotes o procesamiento de documentos largos donde la calidad importa más que la latencia.',
          'La diferencia de velocidad (25 vs 15 tok/s) significa que Llama 3 8B genera una respuesta de 200 tokens en unos 8 segundos, mientras Qwen 2.5 14B tarda unos 13 segundos. En consultas de turno único esta diferencia es menor; en sesiones de chat de múltiples turnos se acumula.',
        ],
        columns: ['Caso de uso', 'Ganador', 'Por qué'],
        rows: [
          { 'Caso de uso': 'Coding y razonamiento', 'Ganador': 'Qwen 2.5 14B', 'Por qué': 'Mayor número de parámetros mejora la lógica de múltiples pasos' },
          { 'Caso de uso': 'Chat e instrucción', 'Ganador': 'Llama 3 8B', 'Por qué': 'Optimizado para respuestas interactivas rápidas' },
          { 'Caso de uso': 'Multilingüe', 'Ganador': 'Empate', 'Por qué': 'Ambos sólidos en idiomas europeos y del este asiático' },
          { 'Caso de uso': 'RAM limitada (≤8 GB)', 'Ganador': 'Llama 3 8B', 'Por qué': 'Cabe en 6 GB; Qwen 14B necesita 10 GB' },
          { 'Caso de uso': 'Contexto largo (16K+)', 'Ganador': 'Qwen 2.5 14B', 'Por qué': 'Mejor recuperación en contextos extendidos' },
        ],
      },
      body2: {
        title: 'Qwen 2.5 14B gana en calidad cuando el VRAM lo permite',
        content: [
          '<strong>Qwen 2.5 14B obtiene 74.8% en MMLU frente al 66.6% de Llama 3 8B — una diferencia de 8 puntos que se refleja en un razonamiento de múltiples pasos, seguimiento de instrucciones y consistencia de salida estructurada notablemente mejores.</strong> La diferencia es especialmente visible en tareas que requieren mantener y aplicar contexto a través de múltiples párrafos.',
          'Si tu uso principal es la finalización de código, la diferencia de calidad crece. Qwen 2.5 Coder 14B (la variante optimizada para código de la misma base) obtiene 78.4% en HumanEval. Llama 3 8B genérico alcanza alrededor del 55% en el mismo benchmark — una diferencia de 23 puntos en tareas de coding.',
          '≤8 GB VRAM: Llama 3 8B Q4_K_M cabe con ~2 GB de margen — Qwen 14B no es una opción. 10–12 GB VRAM: Qwen 2.5 14B Q4_K_M cabe en el punto de inflexión. 16+ GB VRAM: cualquiera de los dos funciona; Qwen 2.5 14B Q5 se vuelve práctico.',
          'Para un análisis más profundo del rendimiento en coding con tablas de benchmarks, consulta la comparativa de <a href="/es/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">mejores modelos 14B para coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre Qwen 14B vs Llama 8B',
        faqs: [
          {
            q: '¿Puede Qwen 2.5 14B correr en una GPU con 6 GB de VRAM?',
            a: 'No. Qwen 2.5 14B en Q4_K_M necesita aproximadamente 10 GB de VRAM. En una tarjeta de 6 GB tendrías que bajar a cuantización Q2_K, lo que causa una degradación de calidad significativa. Llama 3 8B es el modelo correcto para 6 GB de VRAM.',
          },
          {
            q: '¿Qwen 2.5 14B o Llama 3 8B es mejor para coding?',
            a: 'Qwen 2.5 14B es sustancialmente mejor para coding. Qwen Coder 14B (la variante optimizada para código) obtiene 78.4% en HumanEval frente a ~55% para Llama 3 8B. Usa Llama 3 8B solo cuando el VRAM impide correr Qwen.',
          },
          {
            q: '¿Qwen 2.5 14B soporta un contexto más largo que Llama 3 8B?',
            a: 'Qwen 2.5 14B soporta una ventana de contexto de 128k de forma nativa. Llama 3 8B soporta 8k por defecto, aunque las variantes con extensión RoPE pueden llegar a 128k con alguna pérdida de calidad. Para tareas con documentos largos, Qwen 2.5 14B tiene una ventaja clara incluso sin considerar su mayor número de parámetros.',
          },
          {
            q: '¿La longitud del contexto afecta la elección del modelo para chat?',
            a: 'Sí. Para chat típico de un turno o multi-turno corto (menos de 4k tokens), ambos modelos funcionan bien — elige según el VRAM. Para conversaciones largas o sesiones con documentos extensos, la ventana de contexto nativa de 128k de Qwen 2.5 14B es una ventaja significativa frente al límite de 8k por defecto de Llama 3 8B.',
          },
        ],
      },
    },
  },
}
