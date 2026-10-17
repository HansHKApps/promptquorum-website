import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best 14B Model for Coding?',
    dateModified: '2026-10-17',
    seoTitle: 'Best 14B Models for Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen2.5-Coder 14B Instruct: 89.6% HumanEval, ~10 GB VRAM. DeepSeek-Coder-V2-Lite: 81.1%. StarCoder2 15B: 67.7% (Qwen-reported). Quick answer.',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-en.webp',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: [
      'Qwen2.5-Coder 14B',
      'DeepSeek-Coder-V2-Lite',
    ],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing a 14B coding model for local use',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: [
      'qwen-14b-vs-llama-8b',
      'best-moe-models-local-coding',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best 14B model for coding?',
        answer: 'Qwen2.5-Coder 14B is the strongest of these three coding models in Qwen\'s own report: 89.6% on HumanEval (instruct) against 81.1% for DeepSeek-Coder-V2-Lite and 67.7% for StarCoder2 15B. The qwen2.5-coder:14b download is 9.0 GB, so plan for about 10 GB VRAM.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct: 89.6% HumanEval, 9.0 GB download (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (16B MoE, 2.4B active): 81.1% HumanEval, 8.9 GB download',
          'StarCoder2 15B Instruct: 67.7% HumanEval — all scores vendor-reported, not PromptQuorum measurements',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Bestes 14B-Modell für Coding?',
        answer: 'Qwen2.5-Coder 14B ist in Qwens eigenem Bericht das stärkste dieser drei Coding-Modelle: 89,6 % auf HumanEval (Instruct) gegenüber 81,1 % für DeepSeek-Coder-V2-Lite und 67,7 % für StarCoder2 15B. Der Download von qwen2.5-coder:14b ist 9,0 GB groß; planen Sie etwa 10 GB VRAM ein.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct: 89,6 % HumanEval, 9,0 GB Download (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (16B MoE, 2,4B aktiv): 81,1 % HumanEval, 8,9 GB Download',
          'StarCoder2 15B Instruct: 67,7 % HumanEval — alle Werte vom Hersteller berichtet, keine PromptQuorum-Messungen',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Meilleur modèle 14B pour le coding ?',
        answer: 'Qwen2.5-Coder 14B est le plus fort de ces trois modèles de code dans le rapport de Qwen : 89,6 % sur HumanEval (instruct) contre 81,1 % pour DeepSeek-Coder-V2-Lite et 67,7 % pour StarCoder2 15B. Le téléchargement de qwen2.5-coder:14b pèse 9,0 Go ; prévoyez environ 10 Go de VRAM.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct : 89,6 % HumanEval, 9,0 Go à télécharger (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (16B MoE, 2,4B actifs) : 81,1 % HumanEval, 8,9 Go à télécharger',
          'StarCoder2 15B Instruct : 67,7 % HumanEval — scores publiés par les éditeurs, pas des mesures PromptQuorum',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'コーディングに最適な14Bモデルは？',
        answer: 'Qwen2.5-Coder 14Bは、Qwen自身のレポートで3つのコーディングモデルのうち最も高く、HumanEval（instruct）で89.6%です（DeepSeek-Coder-V2-Liteは81.1%、StarCoder2 15Bは67.7%）。qwen2.5-coder:14bのダウンロードは9.0 GBなので、約10 GBのVRAMを見込んでください。',
        bullets: [
          'Qwen2.5-Coder 14B Instruct：HumanEval 89.6%、ダウンロード9.0 GB（ollama run qwen2.5-coder:14b）',
          'DeepSeek-Coder-V2-Lite（16B MoE、アクティブ2.4B）：HumanEval 81.1%、ダウンロード8.9 GB',
          'StarCoder2 15B Instruct：HumanEval 67.7% — いずれも各社の公表値であり、PromptQuorumの実測ではありません',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: '编程最佳14B模型是哪款？',
        answer: '在 Qwen 自己的报告中，Qwen2.5-Coder 14B 是这三款编程模型里最强的：HumanEval（instruct）89.6%，DeepSeek-Coder-V2-Lite 为 81.1%，StarCoder2 15B 为 67.7%。qwen2.5-coder:14b 的下载大小为 9.0 GB，请预留约 10 GB 显存。',
        bullets: [
          'Qwen2.5-Coder 14B Instruct：HumanEval 89.6%，下载 9.0 GB（ollama run qwen2.5-coder:14b）',
          'DeepSeek-Coder-V2-Lite（16B MoE，激活 2.4B）：HumanEval 81.1%，下载 8.9 GB',
          'StarCoder2 15B Instruct：HumanEval 67.7%——均为厂商公布数据，并非 PromptQuorum 实测',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen2.5-Coder 14B Instruct scores 89.6% on HumanEval in Qwen\'s own report, the highest of the three models compared here, and needs about 10 GB VRAM (9.0 GB download)',
          'DeepSeek-Coder-V2-Lite is a 16B mixture-of-experts model (2.4B active parameters) that scores 81.1% on HumanEval from an 8.9 GB download',
          'StarCoder2 15B Instruct scores 67.7% on HumanEval and trails both models on this benchmark',
          'With 12 GB VRAM, run Qwen2.5-Coder 14B; below 8 GB, drop to a 7B coder. All HumanEval figures are vendor-reported instruct-model results, not PromptQuorum measurements',
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14B Leads on HumanEval',
        content: [
          '<strong>Qwen2.5-Coder-14B-Instruct scores 89.6% on HumanEval in the Qwen2.5-Coder technical report, the highest of the three models compared here.</strong> These are vendor-reported instruct-model results, not PromptQuorum measurements and not Q4_K_M results; quantized local builds can score slightly differently.',
          'DeepSeek-Coder-V2-Lite-Instruct scores 81.1% in the same table. It is a mixture-of-experts model with 16B total and 2.4B active parameters, so it is not a dense 14B model, but its 8.9 GB Ollama download puts it in the same VRAM class. The 8.5-point HumanEval gap favours Qwen; DeepSeek is a reasonable alternative if you already use it.',
          'StarCoder2-15B-Instruct-v0.1 scores 67.7% in the same table. It was trained on The Stack v2 and suits repository-oriented work, but on HumanEval it trails both models above.',
        ],
        columns: [
          'Model',
          'HumanEval (instruct)',
          'Architecture',
        ],
        rows: [
          { Model: 'Qwen2.5-Coder 14B', 'HumanEval (instruct)': '89.6%', Architecture: '14.7B dense' },
          { Model: 'DeepSeek-Coder-V2-Lite', 'HumanEval (instruct)': '81.1%', Architecture: '16B MoE (2.4B active)' },
          { Model: 'StarCoder2 15B', 'HumanEval (instruct)': '67.7%', Architecture: '15B dense' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-en.webp',
        imageCaption: 'Best 14B Models for Coding -- HumanEval (instruct, vendor-reported)',
      },
      body2: {
        title: 'VRAM Headroom Determines Which to Pick',
        content: [
          'Both Qwen2.5-Coder 14B and DeepSeek-Coder-V2-Lite require approximately 10 GB VRAM at Q4_K_M, leaving only 2 GB headroom on a 12 GB card. <strong>This margin is tight for long-context sessions: at 8k context, VRAM usage climbs to ~11.5 GB.</strong> If your workflow involves large files, prefer a card with 16+ GB.',
          'For context windows below 4k tokens — the common case for single-file code completion — all three models run comfortably on an RTX 3060 12 GB or RTX 3080 Ti 12 GB. Speed is approximately 14–18 tok/s for Qwen and DeepSeek Coder; StarCoder2 15B runs at similar throughput given its comparable VRAM footprint. Prefer StarCoder2 when your workflow centers on repository-scale search or open-source contribution patterns.',
          'For a broader comparison of coding models at other sizes and VRAM tiers, see the <a href="/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">best coding LLM for 12 GB VRAM</a> guide.',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-en.webp',
        imageCaption: 'VRAM Headroom at Longer Context -- Q4_K_M usage as context grows',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 14B Coding Models',
        faqs: [
          {
            q: 'Can Qwen2.5-Coder 14B run on 8 GB VRAM?',
            a: 'Not reliably. At Q4_K_M the model requires ~10 GB VRAM. You could use Q3_K_M to squeeze it into 8 GB, but the quality drop is noticeable. A better option for 8 GB VRAM is Qwen2.5-Coder 7B or DeepSeek Coder 7B.',
          },
          {
            q: 'How does Qwen2.5-Coder 14B compare to DeepSeek-Coder-V2-Lite on real tasks?',
            a: 'We have no like-for-like measurement on real tasks. On the HumanEval figures in Qwen\'s report, Qwen2.5-Coder 14B leads DeepSeek-Coder-V2-Lite by 8.5 points (89.6 vs 81.1). HumanEval is a Python benchmark, so it says little about languages such as Rust or Go.',
          },
          {
            q: 'Is a 14B coding model better than a 34B general model for code?',
            a: 'Not necessarily. Code-tuned models can close much of the gap to larger general models on code tasks, but we have no like-for-like measurement here. See the <a href="/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder vs DeepSeek Coder comparison</a> for benchmark detail.',
          },
          {
            q: 'What quantization should I use for a 14B coding model?',
            a: 'Q4_K_M is the common default: it keeps most of the FP16 quality at well under half the memory, though the loss varies by model and task. Q5_K_M adds about 1 GB VRAM for a slightly higher quality ceiling, worth it only if you have 12+ GB VRAM and run short context lengths.',
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
    last_full_refresh: '2026-10-17',
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Bestes 14B-Modell für Coding?',
    seoTitle: 'Beste 14B-Modelle für lokales Coding 2026',
    metaDescription: 'Qwen2.5-Coder 14B Instruct: 89,6 % HumanEval, ~10 GB VRAM. DeepSeek-Coder-V2-Lite: 81,1 %. StarCoder2 15B: 67,7 % (Qwen-Angaben). Schnelle Antwort.',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-de.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Bestes 14B-Modell für Coding?',
        answer: 'Qwen2.5-Coder 14B ist in Qwens eigenem Bericht das stärkste dieser drei Coding-Modelle: 89,6 % auf HumanEval (Instruct) gegenüber 81,1 % für DeepSeek-Coder-V2-Lite und 67,7 % für StarCoder2 15B. Der Download von qwen2.5-coder:14b ist 9,0 GB groß; planen Sie etwa 10 GB VRAM ein.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct: 89,6 % HumanEval, 9,0 GB Download (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (16B MoE, 2,4B aktiv): 81,1 % HumanEval, 8,9 GB Download',
          'StarCoder2 15B Instruct: 67,7 % HumanEval — alle Werte vom Hersteller berichtet, keine PromptQuorum-Messungen',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen2.5-Coder 14B Instruct erzielt in Qwens eigenem Bericht 89,6 % auf HumanEval, den höchsten Wert der drei hier verglichenen Modelle, und braucht etwa 10 GB VRAM (9,0 GB Download)',
          'DeepSeek-Coder-V2-Lite ist ein 16B-Mixture-of-Experts-Modell (2,4B aktive Parameter) und erzielt 81,1 % auf HumanEval bei 8,9 GB Download',
          'StarCoder2 15B Instruct erzielt 67,7 % auf HumanEval und liegt bei diesem Benchmark hinter beiden Modellen',
          'Mit 12 GB VRAM nehmen Sie Qwen2.5-Coder 14B; unter 8 GB weichen Sie auf einen 7B-Coder aus. Alle HumanEval-Werte sind vom Hersteller berichtete Instruct-Ergebnisse, keine PromptQuorum-Messungen',
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14B führt beim HumanEval',
        content: [
          '<strong>Qwen2.5-Coder-14B-Instruct erzielt im Qwen2.5-Coder-Technical-Report 89,6 % auf HumanEval, den höchsten Wert der drei hier verglichenen Modelle.</strong> Es sind vom Hersteller berichtete Instruct-Ergebnisse, keine PromptQuorum-Messungen und keine Q4_K_M-Ergebnisse; quantisierte lokale Builds können leicht abweichen.',
          'DeepSeek-Coder-V2-Lite-Instruct erzielt in derselben Tabelle 81,1 %. Es ist ein Mixture-of-Experts-Modell mit 16B Gesamt- und 2,4B aktiven Parametern, also kein dichtes 14B-Modell, doch der 8,9-GB-Ollama-Download ordnet es in dieselbe VRAM-Klasse ein. Der Abstand von 8,5 Punkten auf HumanEval spricht für Qwen; DeepSeek bleibt eine vernünftige Alternative, wenn Sie es bereits nutzen.',
          'StarCoder2-15B-Instruct-v0.1 erzielt in derselben Tabelle 67,7 %. Es wurde auf The Stack v2 trainiert und eignet sich für repository-orientierte Arbeit, liegt auf HumanEval aber hinter beiden oben genannten Modellen.',
        ],
        columns: [
          'Modell',
          'HumanEval (Instruct)',
          'Architektur',
        ],
        rows: [
          { Modell: 'Qwen2.5-Coder 14B', 'HumanEval (Instruct)': '89,6 %', Architektur: '14,7B dicht' },
          { Modell: 'DeepSeek-Coder-V2-Lite', 'HumanEval (Instruct)': '81,1 %', Architektur: '16B MoE (2,4B aktiv)' },
          { Modell: 'StarCoder2 15B', 'HumanEval (Instruct)': '67,7 %', Architektur: '15B dicht' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-de.webp',
        imageCaption: 'Beste 14B-Modelle für Coding -- HumanEval (Instruct, Herstellerangaben)',
      },
      body2: {
        title: 'VRAM-Puffer bestimmt die Modellwahl',
        content: [
          'Beide Modelle — Qwen2.5-Coder 14B und DeepSeek-Coder-V2-Lite — benötigen bei Q4_K_M ungefähr 10 GB VRAM und lassen auf einer 12-GB-Karte nur 2 GB Puffer. <strong>Dieser Spielraum ist bei langen Kontextsitzungen eng: Bei 8k-Kontext steigt der VRAM-Verbrauch auf ~11,5 GB.</strong> Bei Workflows mit großen Dateien empfiehlt sich eine Karte mit 16+ GB.',
          'Für Kontextfenster unter 4k Tokens — der übliche Fall bei der Vervollständigung einzelner Dateien — laufen alle drei Modelle problemlos auf einer RTX 3060 12 GB oder RTX 3080 Ti 12 GB. Die Geschwindigkeit bei Qwen und DeepSeek Coder beträgt etwa 14–18 tok/s; StarCoder2 15B läuft bei ähnlichem Durchsatz angesichts des vergleichbaren VRAM-Fußabdrucks. Bevorzugen Sie StarCoder2, wenn Ihr Workflow auf Repository-Suchvorgänge oder Open-Source-Beitragsmuster ausgerichtet ist.',
          'Einen umfassenderen Vergleich von Coding-Modellen bei anderen Größen und VRAM-Tiers finden Sie im <a href="/de/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">Leitfaden für das beste Coding-LLM mit 12 GB VRAM</a>.',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-de.webp',
        imageCaption: 'VRAM-Spielraum bei Längerem Kontext -- Q4_K_M-Nutzung mit wachsendem Kontext',
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu 14B-Coding-Modellen',
        faqs: [
          {
            q: 'Kann Qwen2.5-Coder 14B mit 8 GB VRAM betrieben werden?',
            a: 'Nicht zuverlässig. Bei Q4_K_M benötigt das Modell ~10 GB VRAM. Mit Q3_K_M könnte es in 8 GB passen, aber der Qualitätsabfall ist spürbar. Eine bessere Option für 8 GB VRAM ist Qwen2.5-Coder 7B oder DeepSeek Coder 7B.',
          },
          {
            q: 'Wie verhalten sich Qwen2.5-Coder 14B und DeepSeek-Coder-V2-Lite bei realen Aufgaben?',
            a: 'Wir haben keine direkte Messung an realen Aufgaben. Nach den HumanEval-Werten in Qwens Bericht liegt Qwen2.5-Coder 14B 8,5 Punkte vor DeepSeek-Coder-V2-Lite (89,6 vs. 81,1). HumanEval ist ein Python-Benchmark und sagt über Sprachen wie Rust oder Go wenig aus.',
          },
          {
            q: 'Ist ein 14B-Coding-Modell besser als ein generisches 34B-Modell für Code?',
            a: 'Nicht unbedingt. Code-optimierte Modelle können bei Code-Aufgaben einen Großteil des Abstands zu größeren Allzweckmodellen schließen, doch wir haben hier keine direkte Vergleichsmessung. Siehe den <a href="/de/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Vergleich Qwen Coder vs. DeepSeek Coder</a> für Benchmark-Details.',
          },
          {
            q: 'Welche Quantisierung sollte ich für ein 14B-Coding-Modell verwenden?',
            a: 'Q4_K_M ist der übliche Standard: Es behält den Großteil der FP16-Qualität bei deutlich weniger als der Hälfte des Speichers, wobei der Verlust je nach Modell und Aufgabe variiert. Q5_K_M braucht etwa 1 GB mehr VRAM für eine etwas höhere Qualitätsgrenze und lohnt sich nur bei 12+ GB VRAM und kurzen Kontextlängen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleur modèle 14B pour le coding ?',
    seoTitle: 'Meilleurs 14B Modèles pour Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen2.5-Coder 14B Instruct : 89,6 % HumanEval, ~10 Go de VRAM. DeepSeek-Coder-V2-Lite : 81,1 %. StarCoder2 15B : 67,7 % (chiffres Qwen). Réponse rapide.',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-fr.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur modèle 14B pour le coding ?',
        answer: 'Qwen2.5-Coder 14B est le plus fort de ces trois modèles de code dans le rapport de Qwen : 89,6 % sur HumanEval (instruct) contre 81,1 % pour DeepSeek-Coder-V2-Lite et 67,7 % pour StarCoder2 15B. Le téléchargement de qwen2.5-coder:14b pèse 9,0 Go ; prévoyez environ 10 Go de VRAM.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct : 89,6 % HumanEval, 9,0 Go à télécharger (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (16B MoE, 2,4B actifs) : 81,1 % HumanEval, 8,9 Go à télécharger',
          'StarCoder2 15B Instruct : 67,7 % HumanEval — scores publiés par les éditeurs, pas des mesures PromptQuorum',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen2.5-Coder 14B Instruct obtient 89,6 % sur HumanEval dans le rapport de Qwen, le meilleur score des trois modèles comparés ici, et demande environ 10 Go de VRAM (9,0 Go à télécharger)',
          'DeepSeek-Coder-V2-Lite est un modèle 16B à mélange d\'experts (2,4B de paramètres actifs) qui obtient 81,1 % sur HumanEval pour 8,9 Go à télécharger',
          'StarCoder2 15B Instruct obtient 67,7 % sur HumanEval et reste derrière les deux autres sur ce benchmark',
          'Avec 12 Go de VRAM, utilisez Qwen2.5-Coder 14B ; sous 8 Go, passez à un modèle de code 7B. Tous les chiffres HumanEval sont des résultats instruct publiés par les éditeurs, pas des mesures PromptQuorum',
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14B en tête sur HumanEval',
        content: [
          '<strong>Qwen2.5-Coder-14B-Instruct obtient 89,6 % sur HumanEval dans le rapport technique Qwen2.5-Coder, le meilleur score des trois modèles comparés ici.</strong> Ce sont des résultats instruct publiés par l\'éditeur, pas des mesures PromptQuorum ni des résultats en Q4_K_M ; les versions locales quantifiées peuvent donner des scores légèrement différents.',
          'DeepSeek-Coder-V2-Lite-Instruct obtient 81,1 % dans le même tableau. C\'est un modèle à mélange d\'experts de 16B au total et 2,4B actifs, donc pas un modèle dense de 14B, mais son téléchargement Ollama de 8,9 Go le place dans la même classe de VRAM. L\'écart de 8,5 points sur HumanEval favorise Qwen ; DeepSeek reste une alternative raisonnable si vous l\'utilisez déjà.',
          'StarCoder2-15B-Instruct-v0.1 obtient 67,7 % dans le même tableau. Entraîné sur The Stack v2, il convient au travail orienté dépôts de code, mais sur HumanEval il reste derrière les deux modèles ci-dessus.',
        ],
        columns: [
          'Modèle',
          'HumanEval (instruct)',
          'Architecture',
        ],
        rows: [
          { 'Modèle': 'Qwen2.5-Coder 14B', 'HumanEval (instruct)': '89,6 %', Architecture: '14,7B dense' },
          { 'Modèle': 'DeepSeek-Coder-V2-Lite', 'HumanEval (instruct)': '81,1 %', Architecture: '16B MoE (2,4B actifs)' },
          { 'Modèle': 'StarCoder2 15B', 'HumanEval (instruct)': '67,7 %', Architecture: '15B dense' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-fr.webp',
        imageCaption: 'Meilleurs modèles 14B pour le code -- HumanEval (instruct, chiffres éditeurs)',
      },
      body2: {
        title: 'La marge VRAM détermine le choix',
        content: [
          'Qwen2.5-Coder 14B et DeepSeek-Coder-V2-Lite nécessitent tous deux environ 10 Go de VRAM en Q4_K_M, ne laissant que 2 Go de marge sur une carte 12 Go. <strong>Cette marge est serrée pour les sessions à long contexte : à 8k de contexte, l\'utilisation VRAM monte à ~11,5 Go.</strong> Si votre flux de travail implique de grands fichiers, préférez une carte de 16+ Go.',
          'Pour des fenêtres de contexte inférieures à 4k tokens — le cas courant pour la complétion de fichier unique — les trois modèles fonctionnent confortablement sur une RTX 3060 12 Go ou RTX 3080 Ti 12 Go. La vitesse pour Qwen et DeepSeek Coder est d\'environ 14 à 18 tok/s ; StarCoder2 15B s\'exécute à un débit similaire compte tenu de son empreinte VRAM comparable. Préférez StarCoder2 quand votre flux de travail porte sur la recherche au niveau du référentiel ou les modèles de contributions open-source.',
          'Pour une comparaison plus complète des modèles de coding à différentes tailles et niveaux de VRAM, consultez le <a href="/fr/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">guide du meilleur LLM de coding pour 12 Go de VRAM</a>.',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-fr.webp',
        imageCaption: 'Marge VRAM avec Contexte Étendu -- Utilisation Q4_K_M selon le contexte',
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles de coding 14B',
        faqs: [
          {
            q: 'Qwen2.5-Coder 14B peut-il fonctionner avec 8 Go de VRAM ?',
            a: 'Pas de manière fiable. En Q4_K_M, le modèle nécessite ~10 Go de VRAM. En Q3_K_M il pourrait tenir en 8 Go, mais la baisse de qualité est perceptible. Une meilleure option pour 8 Go de VRAM est Qwen2.5-Coder 7B ou DeepSeek Coder 7B.',
          },
          {
            q: 'Comment se comparent Qwen2.5-Coder 14B et DeepSeek-Coder-V2-Lite sur des tâches réelles ?',
            a: 'Nous n\'avons pas de mesure comparable sur des tâches réelles. D\'après les chiffres HumanEval du rapport de Qwen, Qwen2.5-Coder 14B devance DeepSeek-Coder-V2-Lite de 8,5 points (89,6 contre 81,1). HumanEval est un benchmark Python : il dit peu de choses sur des langages comme Rust ou Go.',
          },
          {
            q: 'Un modèle de coding 14B est-il meilleur qu\'un modèle générique 34B pour le code ?',
            a: 'Pas forcément. Les modèles spécialisés en code peuvent combler une bonne partie de l\'écart avec des modèles généralistes plus grands sur les tâches de code, mais nous n\'avons pas ici de mesure comparable. Voir la <a href="/fr/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">comparaison Qwen Coder vs DeepSeek Coder</a> pour le détail des benchmarks.',
          },
          {
            q: 'Quelle quantification utiliser pour un modèle de coding 14B ?',
            a: 'Q4_K_M est le choix courant : il conserve l\'essentiel de la qualité FP16 pour bien moins de la moitié de la mémoire, la perte variant selon le modèle et la tâche. Q5_K_M ajoute environ 1 Go de VRAM pour un plafond de qualité légèrement plus haut, utile seulement avec 12 Go+ de VRAM et des contextes courts.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'コーディングに最適な14Bモデルは？',
    seoTitle: 'コーディング向け最適14Bモデル 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen2.5-Coder 14B Instruct：HumanEval 89.6%、約10 GB VRAM。DeepSeek-Coder-V2-Lite：81.1%。StarCoder2 15B：67.7%（Qwen公表値）。簡潔な回答。',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-ja.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'コーディングに最適な14Bモデルは？',
        answer: 'Qwen2.5-Coder 14Bは、Qwen自身のレポートで3つのコーディングモデルのうち最も高く、HumanEval（instruct）で89.6%です（DeepSeek-Coder-V2-Liteは81.1%、StarCoder2 15Bは67.7%）。qwen2.5-coder:14bのダウンロードは9.0 GBなので、約10 GBのVRAMを見込んでください。',
        bullets: [
          'Qwen2.5-Coder 14B Instruct：HumanEval 89.6%、ダウンロード9.0 GB（ollama run qwen2.5-coder:14b）',
          'DeepSeek-Coder-V2-Lite（16B MoE、アクティブ2.4B）：HumanEval 81.1%、ダウンロード8.9 GB',
          'StarCoder2 15B Instruct：HumanEval 67.7% — いずれも各社の公表値であり、PromptQuorumの実測ではありません',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen2.5-Coder 14B InstructはQwen自身のレポートでHumanEval 89.6%と、比較した3モデルで最高で、約10 GBのVRAM（ダウンロード9.0 GB）が必要です',
          'DeepSeek-Coder-V2-Liteは16BのMixture-of-Expertsモデル（アクティブパラメータ2.4B）で、8.9 GBのダウンロードでHumanEval 81.1%です',
          'StarCoder2 15B InstructはHumanEval 67.7%で、このベンチマークでは両モデルに及びません',
          'VRAMが12 GBならQwen2.5-Coder 14Bを、8 GB未満なら7Bのコーディングモデルを使ってください。HumanEvalの数値はすべて各社公表のinstruct結果であり、PromptQuorumの実測ではありません',
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14BがHumanEvalで首位',
        content: [
          '<strong>Qwen2.5-Coder-14B-Instructは、Qwen2.5-Coder技術レポートでHumanEval 89.6%を記録し、比較した3モデルで最高です。</strong>これは各社公表のinstruct結果であり、PromptQuorumの実測でもQ4_K_Mの結果でもありません。量子化したローカル版では多少異なる場合があります。',
          'DeepSeek-Coder-V2-Lite-Instructは同じ表で81.1%です。総パラメータ16B・アクティブ2.4BのMixture-of-Expertsモデルで、密な14Bモデルではありませんが、Ollamaのダウンロードが8.9 GBのため同じVRAMクラスに入ります。HumanEvalの8.5ポイント差はQwenに有利で、すでに使っているならDeepSeekも妥当な代替です。',
          'StarCoder2-15B-Instruct-v0.1は同じ表で67.7%です。The Stack v2で学習されリポジトリ指向の作業に向きますが、HumanEvalでは上の2モデルに及びません。',
        ],
        columns: [
          'モデル',
          'HumanEval（instruct）',
          'アーキテクチャ',
        ],
        rows: [
          { 'モデル': 'Qwen2.5-Coder 14B', 'HumanEval（instruct）': '89.6%', 'アーキテクチャ': '14.7B（密）' },
          { 'モデル': 'DeepSeek-Coder-V2-Lite', 'HumanEval（instruct）': '81.1%', 'アーキテクチャ': '16B MoE（アクティブ2.4B）' },
          { 'モデル': 'StarCoder2 15B', 'HumanEval（instruct）': '67.7%', 'アーキテクチャ': '15B（密）' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-ja.webp',
        imageCaption: 'コーディング向け最適14Bモデル -- HumanEval（instruct、各社公表値）',
      },
      body2: {
        title: 'VRAMの余裕が選択を決める',
        content: [
          'Qwen2.5-Coder 14BとDeepSeek-Coder-V2-Liteはいずれも Q4_K_Mで約10 GB VRAMが必要で、12 GBカードでは2 GBしか余裕がありません。<strong>この余裕は長いコンテキストセッションでは不十分です：8kコンテキストではVRAM使用量は~11.5 GBに達します。</strong>大きなファイルを扱うワークフローでは16 GB以上のカードを推奨します。',
          '4kトークン未満のコンテキストウィンドウ（単一ファイル補完の一般的なケース）では、3つのモデルすべてがRTX 3060 12 GBやRTX 3080 Ti 12 GB上で快適に動作します。QwenとDeepSeek Coderでの速度は約14〜18 tok/sです；StarCoder2 15Bは同等のVRAM消費量を考えると同様のスループットで動作します。リポジトリ規模の検索やオープンソース貢献パターンに焦点を当てるワークフローではStarCoder2を優先します。',
          '他のサイズとVRAMティアにおけるコーディングモデルの包括的な比較については、<a href="/ja/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM向け最適コーディングLLMガイド</a>をご覧ください。',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-ja.webp',
        imageCaption: '長いコンテキストでのVRAM余裕 -- コンテキスト増加時のQ4_K_M使用量',
      },
      faq: {
        id: 'faq',
        title: '14Bコーディングモデルに関するよくある質問',
        faqs: [
          {
            q: 'Qwen2.5-Coder 14Bは8 GB VRAMで動作しますか？',
            a: '確実には動作しません。Q4_K_Mではモデルに~10 GB VRAMが必要です。Q3_K_Mなら8 GBに収まりますが品質低下が目立ちます。8 GB VRAMにはQwen2.5-Coder 7BまたはDeepSeek Coder 7Bがより良い選択肢です。',
          },
          {
            q: 'Qwen2.5-Coder 14BとDeepSeek-Coder-V2-Liteは実際のタスクでどう違いますか？',
            a: '実タスクでの同条件の測定値はありません。Qwenのレポートに載るHumanEvalの数値では、Qwen2.5-Coder 14BがDeepSeek-Coder-V2-Liteを8.5ポイント上回ります（89.6対81.1）。HumanEvalはPythonのベンチマークなので、RustやGoなどの言語についてはほとんど参考になりません。',
          },
          {
            q: '14Bコーディングモデルはコードにおいて汎用34Bモデルより優れていますか？',
            a: '必ずしもそうではありません。コード特化モデルは、コードタスクでより大きな汎用モデルとの差をかなり縮められますが、ここでは同条件の測定値がありません。ベンチマークの詳細は<a href="/ja/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder対DeepSeek Coderの比較</a>をご覧ください。',
          },
          {
            q: '14Bコーディングモデルにはどの量子化を使うべきですか？',
            a: 'Q4_K_Mが一般的な標準です。FP16の品質の大部分を保ちつつメモリは半分をかなり下回りますが、損失はモデルやタスクによって異なります。Q5_K_Mは約1 GB多くVRAMを使い品質の上限がわずかに上がるため、12 GB以上のVRAMで短いコンテキストの場合にのみ価値があります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '编程最佳14B模型是哪款？',
    seoTitle: '编程最佳14B模型 2026：Qwen2.5-Coder 与 HumanEval 对比',
    metaDescription: 'Qwen2.5-Coder 14B Instruct：HumanEval 89.6%，约10 GB 显存。DeepSeek-Coder-V2-Lite：81.1%。StarCoder2 15B：67.7%（Qwen 公布）。快速解答。',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-zh.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: '编程最佳14B模型是哪款？',
        answer: '在 Qwen 自己的报告中，Qwen2.5-Coder 14B 是这三款编程模型里最强的：HumanEval（instruct）89.6%，DeepSeek-Coder-V2-Lite 为 81.1%，StarCoder2 15B 为 67.7%。qwen2.5-coder:14b 的下载大小为 9.0 GB，请预留约 10 GB 显存。',
        bullets: [
          'Qwen2.5-Coder 14B Instruct：HumanEval 89.6%，下载 9.0 GB（ollama run qwen2.5-coder:14b）',
          'DeepSeek-Coder-V2-Lite（16B MoE，激活 2.4B）：HumanEval 81.1%，下载 8.9 GB',
          'StarCoder2 15B Instruct：HumanEval 67.7%——均为厂商公布数据，并非 PromptQuorum 实测',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '在 Qwen 自己的报告中，Qwen2.5-Coder 14B Instruct 的 HumanEval 为 89.6%，是本文对比的三款模型中最高的，需要约 10 GB 显存（下载 9.0 GB）',
          'DeepSeek-Coder-V2-Lite 是 16B 混合专家模型（2.4B 激活参数），下载 8.9 GB，HumanEval 为 81.1%',
          'StarCoder2 15B Instruct 的 HumanEval 为 67.7%，在该基准上落后于另外两款',
          '12 GB 显存用 Qwen2.5-Coder 14B；低于 8 GB 则改用 7B 编程模型。所有 HumanEval 数字均为厂商公布的 instruct 结果，并非 PromptQuorum 实测',
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14B 在 HumanEval 上领先',
        content: [
          '<strong>在 Qwen2.5-Coder 技术报告中，Qwen2.5-Coder-14B-Instruct 的 HumanEval 为 89.6%，是本文对比的三款模型中最高的。</strong>这些是厂商公布的 instruct 结果，并非 PromptQuorum 实测，也不是 Q4_K_M 的结果；量化后的本地版本得分可能略有不同。',
          'DeepSeek-Coder-V2-Lite-Instruct 在同一张表中为 81.1%。它是总参数 16B、激活 2.4B 的混合专家模型，不是稠密 14B 模型，但 8.9 GB 的 Ollama 下载使其属于同一显存档次。HumanEval 上 8.5 分的差距对 Qwen 有利；如果你已经在用 DeepSeek，它仍是合理的替代。',
          'StarCoder2-15B-Instruct-v0.1 在同一张表中为 67.7%。它基于 The Stack v2 训练，适合面向代码仓库的工作，但在 HumanEval 上落后于上述两款模型。',
        ],
        columns: [
          '模型',
          'HumanEval（instruct）',
          '架构',
        ],
        rows: [
          { '模型': 'Qwen2.5-Coder 14B', 'HumanEval（instruct）': '89.6%', '架构': '14.7B 稠密' },
          { '模型': 'DeepSeek-Coder-V2-Lite', 'HumanEval（instruct）': '81.1%', '架构': '16B MoE（激活 2.4B）' },
          { '模型': 'StarCoder2 15B', 'HumanEval（instruct）': '67.7%', '架构': '15B 稠密' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-zh.webp',
        imageCaption: '编程最佳14B模型 -- HumanEval（instruct，厂商公布）',
      },
      body2: {
        title: 'VRAM 余量决定选择',
        content: [
          'Qwen2.5-Coder 14B 和 DeepSeek-Coder-V2-Lite 在 Q4_K_M 下均需约10 GB VRAM，在12 GB 显卡上只剩2 GB 余量。<strong>长上下文会话中余量非常紧张：8k 上下文时 VRAM 使用量升至约11.5 GB。</strong>如果工作流涉及大型文件，建议使用16 GB 以上的显卡。',
          '对于4k token 以下的上下文窗口（单文件补全的常见场景），三款模型都能在 RTX 3060 12 GB 或 RTX 3080 Ti 12 GB 上稳定运行。Qwen 和 DeepSeek Coder 的速度约为14–18 tok/s；StarCoder2 15B 考虑到其 VRAM 消耗量相近，运行速度相似。当你的工作流集中于代码库级别搜索或开源贡献模式时，优先选择 StarCoder2。',
          '有关不同尺寸和VRAM层级编程模型的全面对比，请参阅<a href="/zh/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM 最佳编程 LLM 指南</a>。',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-zh.webp',
        imageCaption: '更长上下文下的显存余量 -- 随上下文增长的Q4_K_M占用',
      },
      faq: {
        id: 'faq',
        title: '关于14B编程模型的快速解答',
        faqs: [
          {
            q: 'Qwen2.5-Coder 14B 能在8 GB VRAM 上运行吗？',
            a: '不能可靠运行。Q4_K_M 下模型需要约10 GB VRAM。使用 Q3_K_M 可以勉强塞入8 GB，但质量下降明显。8 GB VRAM 的更好选择是 Qwen2.5-Coder 7B 或 DeepSeek Coder 7B。',
          },
          {
            q: 'Qwen2.5-Coder 14B 和 DeepSeek-Coder-V2-Lite 在实际任务上有何差异？',
            a: '我们没有真实任务上的同条件实测。按 Qwen 报告中的 HumanEval 数据，Qwen2.5-Coder 14B 比 DeepSeek-Coder-V2-Lite 高 8.5 分（89.6 对 81.1）。HumanEval 是 Python 基准，对 Rust 或 Go 等语言参考价值有限。',
          },
          {
            q: '14B编程模型在代码任务上比通用34B模型更好吗？',
            a: '不一定。针对代码的模型在代码任务上可以缩小与更大通用模型的大部分差距，但我们这里没有同条件的实测。基准细节请参阅<a href="/zh/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder 对比 DeepSeek Coder</a>。',
          },
          {
            q: '14B编程模型应使用哪种量化？',
            a: 'Q4_K_M 是常用的默认选择：它以远不到一半的内存保留 FP16 的大部分质量，但损失因模型和任务而异。Q5_K_M 多占约 1 GB 显存，质量上限略高，仅在有 12 GB 以上显存且上下文较短时才值得。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: '¿El mejor modelo 14B para coding?',
    seoTitle: 'Mejores modelos 14B para coding 2026 | PromptQuorum',
    metaDescription: 'Qwen2.5-Coder 14B Instruct: 89,6 % HumanEval, ~10 GB de VRAM. DeepSeek-Coder-V2-Lite: 81,1 %. StarCoder2 15B: 67,7 % (cifras de Qwen). Respuesta rápida.',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-es.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor modelo 14B para coding?',
        answer: 'Qwen2.5-Coder 14B es el más fuerte de estos tres modelos de código en el informe de Qwen: 89,6 % en HumanEval (instruct) frente a 81,1 % de DeepSeek-Coder-V2-Lite y 67,7 % de StarCoder2 15B. La descarga de qwen2.5-coder:14b es de 9,0 GB, así que cuenta con unos 10 GB de VRAM.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct: 89,6 % HumanEval, descarga de 9,0 GB (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (16B MoE, 2,4B activos): 81,1 % HumanEval, descarga de 8,9 GB',
          'StarCoder2 15B Instruct: 67,7 % HumanEval — puntuaciones publicadas por los fabricantes, no mediciones de PromptQuorum',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen2.5-Coder 14B Instruct obtiene 89,6 % en HumanEval en el informe de Qwen, la cifra más alta de los tres modelos comparados aquí, y necesita unos 10 GB de VRAM (descarga de 9,0 GB)',
          'DeepSeek-Coder-V2-Lite es un modelo de mezcla de expertos de 16B (2,4B de parámetros activos) que obtiene 81,1 % en HumanEval con una descarga de 8,9 GB',
          'StarCoder2 15B Instruct obtiene 67,7 % en HumanEval y queda por detrás de ambos en este benchmark',
          'Con 12 GB de VRAM usa Qwen2.5-Coder 14B; por debajo de 8 GB, baja a un modelo de código de 7B. Todas las cifras de HumanEval son resultados instruct publicados por los fabricantes, no mediciones de PromptQuorum',
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14B lidera en HumanEval',
        content: [
          '<strong>Qwen2.5-Coder-14B-Instruct obtiene 89,6 % en HumanEval en el informe técnico de Qwen2.5-Coder, la cifra más alta de los tres modelos comparados aquí.</strong> Son resultados instruct publicados por el fabricante, no mediciones de PromptQuorum ni resultados en Q4_K_M; las versiones locales cuantizadas pueden puntuar algo distinto.',
          'DeepSeek-Coder-V2-Lite-Instruct obtiene 81,1 % en la misma tabla. Es un modelo de mezcla de expertos con 16B en total y 2,4B activos, por lo que no es un modelo denso de 14B, pero su descarga de 8,9 GB en Ollama lo sitúa en la misma clase de VRAM. La diferencia de 8,5 puntos en HumanEval favorece a Qwen; DeepSeek sigue siendo una alternativa razonable si ya lo usas.',
          'StarCoder2-15B-Instruct-v0.1 obtiene 67,7 % en la misma tabla. Se entrenó con The Stack v2 y encaja en trabajo orientado a repositorios, pero en HumanEval queda por detrás de los dos anteriores.',
        ],
        columns: [
          'Modelo',
          'HumanEval (instruct)',
          'Arquitectura',
        ],
        rows: [
          { Modelo: 'Qwen2.5-Coder 14B', 'HumanEval (instruct)': '89,6 %', Arquitectura: '14,7B denso' },
          { Modelo: 'DeepSeek-Coder-V2-Lite', 'HumanEval (instruct)': '81,1 %', Arquitectura: '16B MoE (2,4B activos)' },
          { Modelo: 'StarCoder2 15B', 'HumanEval (instruct)': '67,7 %', Arquitectura: '15B denso' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-es.webp',
        imageCaption: 'Mejores modelos 14B para programar -- HumanEval (instruct, cifras del fabricante)',
      },
      body2: {
        title: 'El margen de VRAM determina cuál elegir',
        content: [
          'Tanto Qwen2.5-Coder 14B como DeepSeek-Coder-V2-Lite necesitan aproximadamente 10 GB de VRAM en Q4_K_M, dejando solo 2 GB de margen en una tarjeta de 12 GB. <strong>Este margen es justo para sesiones de contexto largo: con 8k de contexto, el uso de VRAM sube a ~11.5 GB.</strong> Si tu flujo de trabajo involucra archivos grandes, prefiere una tarjeta con 16 GB o más.',
          'Para ventanas de contexto por debajo de 4k tokens — el caso habitual para la finalización de código en un solo archivo — los tres modelos funcionan cómodamente en una RTX 3060 12 GB o RTX 3080 Ti 12 GB. La velocidad es aproximadamente 14–18 tok/s para Qwen y DeepSeek Coder; StarCoder2 15B corre a un rendimiento similar dado su huella de VRAM comparable. Prefiere StarCoder2 cuando tu flujo de trabajo se centra en búsqueda a escala de repositorio o patrones de contribución a código abierto.',
          'Para una comparativa más amplia de modelos de coding en otros tamaños y niveles de VRAM, consulta la guía del <a href="/es/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">mejor LLM de coding para 12 GB de VRAM</a>.',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-es.webp',
        imageCaption: 'Margen de VRAM con Contexto Más Largo -- Uso de Q4_K_M según crece el contexto',
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos de coding 14B',
        faqs: [
          {
            q: '¿Puede Qwen2.5-Coder 14B correr con 8 GB de VRAM?',
            a: 'No de forma fiable. En Q4_K_M el modelo necesita ~10 GB de VRAM. Podrías usar Q3_K_M para ajustarlo a 8 GB, pero la caída de calidad es notable. Una mejor opción para 8 GB de VRAM es Qwen2.5-Coder 7B o DeepSeek Coder 7B.',
          },
          {
            q: '¿Cómo se compara Qwen2.5-Coder 14B con DeepSeek-Coder-V2-Lite en tareas reales?',
            a: 'No tenemos una medición comparable en tareas reales. Según las cifras de HumanEval del informe de Qwen, Qwen2.5-Coder 14B supera a DeepSeek-Coder-V2-Lite por 8,5 puntos (89,6 frente a 81,1). HumanEval es un benchmark de Python, así que dice poco sobre lenguajes como Rust o Go.',
          },
          {
            q: '¿Es mejor un modelo de coding 14B que un modelo general de 34B para código?',
            a: 'No necesariamente. Los modelos especializados en código pueden cerrar buena parte de la brecha con modelos generales más grandes en tareas de código, pero aquí no tenemos una medición comparable. Consulta la <a href="/es/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">comparativa Qwen Coder vs DeepSeek Coder</a> para el detalle de benchmarks.',
          },
          {
            q: '¿Qué cuantización debo usar para un modelo de coding 14B?',
            a: 'Q4_K_M es el valor habitual: conserva la mayor parte de la calidad FP16 con bastante menos de la mitad de la memoria, aunque la pérdida varía según el modelo y la tarea. Q5_K_M añade aproximadamente 1 GB de VRAM para un techo de calidad algo mayor, y solo compensa con 12+ GB de VRAM y contextos cortos.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: '¿El mejor modelo 14B para coding?',
    seoTitle: 'Melhores modelos 14B para programação 2026 | PromptQuorum',
    metaDescription: 'Qwen2.5-Coder 14B Instruct: 89,6% HumanEval, ~10 GB de VRAM. DeepSeek-Coder-V2-Lite: 81,1%. StarCoder2 15B: 67,7% (números da Qwen). Resposta rápida.',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-pt.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor modelo 14B para programação?',
        answer: 'O Qwen2.5-Coder 14B é o mais forte desses três modelos de código no relatório da própria Qwen: 89,6% no HumanEval (instruct), contra 81,1% do DeepSeek-Coder-V2-Lite e 67,7% do StarCoder2 15B. O download do qwen2.5-coder:14b tem 9,0 GB, então conte com cerca de 10 GB de VRAM.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct: 89,6% HumanEval, download de 9,0 GB (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (16B MoE, 2,4B ativos): 81,1% HumanEval, download de 8,9 GB',
          'StarCoder2 15B Instruct: 67,7% HumanEval — pontuações divulgadas pelos fabricantes, não medições da PromptQuorum',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Qwen2.5-Coder 14B Instruct marca 89,6% no HumanEval no relatório da Qwen, a maior pontuação entre os três modelos comparados aqui, e precisa de cerca de 10 GB de VRAM (download de 9,0 GB)',
          'O DeepSeek-Coder-V2-Lite é um modelo de mistura de especialistas de 16B (2,4B de parâmetros ativos) que marca 81,1% no HumanEval com um download de 8,9 GB',
          'O StarCoder2 15B Instruct marca 67,7% no HumanEval e fica atrás dos dois outros nesse benchmark',
          'Com 12 GB de VRAM, use o Qwen2.5-Coder 14B; abaixo de 8 GB, desça para um modelo de código de 7B. Todos os números do HumanEval são resultados instruct divulgados pelos fabricantes, não medições da PromptQuorum',
        ],
      },
      body1: {
        title: 'O Qwen2.5-Coder 14B lidera no HumanEval',
        content: [
          '<strong>O Qwen2.5-Coder-14B-Instruct marca 89,6% no HumanEval no relatório técnico do Qwen2.5-Coder, a maior pontuação entre os três modelos comparados aqui.</strong> São resultados instruct divulgados pelo fabricante, não medições da PromptQuorum nem resultados em Q4_K_M; builds locais quantizados podem pontuar um pouco diferente.',
          'O DeepSeek-Coder-V2-Lite-Instruct marca 81,1% na mesma tabela. É um modelo de mistura de especialistas com 16B no total e 2,4B ativos, portanto não é um modelo denso de 14B, mas seu download de 8,9 GB no Ollama o coloca na mesma classe de VRAM. A diferença de 8,5 pontos no HumanEval favorece a Qwen; o DeepSeek continua sendo uma alternativa razoável se você já o usa.',
          'O StarCoder2-15B-Instruct-v0.1 marca 67,7% na mesma tabela. Foi treinado no The Stack v2 e serve para trabalho orientado a repositórios, mas no HumanEval fica atrás dos dois modelos acima.',
        ],
        columns: [
          'Modelo',
          'HumanEval (instruct)',
          'Arquitetura',
        ],
        rows: [
          { Modelo: 'Qwen2.5-Coder 14B', 'HumanEval (instruct)': '89,6%', Arquitetura: '14,7B denso' },
          { Modelo: 'DeepSeek-Coder-V2-Lite', 'HumanEval (instruct)': '81,1%', Arquitetura: '16B MoE (2,4B ativos)' },
          { Modelo: 'StarCoder2 15B', 'HumanEval (instruct)': '67,7%', Arquitetura: '15B denso' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-pt.webp',
        imageCaption: 'Melhores modelos 14B para programação -- HumanEval (instruct, números do fabricante)',
      },
      body2: {
        title: 'A margem de VRAM determina qual escolher',
        content: [
          'Tanto o Qwen2.5-Coder 14B quanto o DeepSeek-Coder-V2-Lite requerem aproximadamente 10 GB de VRAM em Q4_K_M, deixando apenas 2 GB de margem em uma placa de 12 GB. <strong>Esta margem é apertada para sessões de contexto longo: com 8k de contexto, o uso de VRAM sobe para ~11,5 GB.</strong> Se seu fluxo de trabalho envolve arquivos grandes, prefira uma placa com 16 GB ou mais.',
          'Para janelas de contexto abaixo de 4k tokens — o caso comum para conclusão de código em arquivo único — todos os três modelos funcionam confortavelmente em uma RTX 3060 12 GB ou RTX 3080 Ti 12 GB. A velocidade é de aproximadamente 14–18 tok/s para Qwen e DeepSeek Coder; StarCoder2 15B roda em rendimento semelhante dado seu consumo de VRAM comparável. Prefira StarCoder2 quando seu fluxo de trabalho se concentra em busca em escala de repositório ou padrões de contribuição open-source.',
          'Para uma comparação mais ampla de modelos de programação em outros tamanhos e níveis de VRAM, consulte o guia do <a href="/pt/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">melhor LLM de programação para 12 GB de VRAM</a>.',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-pt.webp',
        imageCaption: 'Margem de VRAM com Contexto Mais Longo -- Uso do Q4_K_M conforme o contexto cresce',
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos de programação 14B',
        faqs: [
          {
            q: 'O Qwen2.5-Coder 14B pode rodar com 8 GB de VRAM?',
            a: 'Não de forma confiável. Em Q4_K_M o modelo requer ~10 GB de VRAM. Você poderia usar Q3_K_M para encaixá-lo em 8 GB, mas a queda de qualidade é perceptível. Uma opção melhor para 8 GB de VRAM é Qwen2.5-Coder 7B ou DeepSeek Coder 7B.',
          },
          {
            q: 'Como Qwen2.5-Coder 14B se compara ao DeepSeek-Coder-V2-Lite em tarefas reais?',
            a: 'Não temos uma medição comparável em tarefas reais. Pelos números de HumanEval do relatório da Qwen, o Qwen2.5-Coder 14B lidera o DeepSeek-Coder-V2-Lite por 8,5 pontos (89,6 contra 81,1). O HumanEval é um benchmark de Python, então diz pouco sobre linguagens como Rust ou Go.',
          },
          {
            q: 'Um modelo de programação 14B é melhor do que um modelo genérico de 34B para código?',
            a: 'Não necessariamente. Modelos especializados em código podem reduzir boa parte da diferença para modelos gerais maiores em tarefas de código, mas aqui não temos uma medição comparável. Veja a <a href="/pt/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">comparação Qwen Coder vs DeepSeek Coder</a> para detalhes de benchmarks.',
          },
          {
            q: 'Qual quantização devo usar para um modelo de programação 14B?',
            a: 'O Q4_K_M é o padrão comum: mantém a maior parte da qualidade FP16 com bem menos da metade da memória, embora a perda varie conforme o modelo e a tarefa. O Q5_K_M acrescenta cerca de 1 GB de VRAM para um teto de qualidade um pouco maior, e só vale a pena com 12+ GB de VRAM e contextos curtos.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'أفضل نموذج ⁨14B⁩ للبرمجة؟',
    seoTitle: 'أفضل نماذج 14B للبرمجة 2026: مقارنة HumanEval',
    metaDescription: 'Qwen2.5-Coder 14B Instruct: ‏89.6% في HumanEval، نحو 10 GB VRAM. DeepSeek-Coder-V2-Lite: ‏81.1%. StarCoder2 15B: ‏67.7% (أرقام Qwen). إجابة سريعة.',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-ar.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج 14B للبرمجة؟',
        answer: 'يُعد Qwen2.5-Coder 14B الأقوى بين نماذج البرمجة الثلاثة هذه في تقرير Qwen نفسه: ‏89.6% في HumanEval (نسخة instruct) مقابل 81.1% لـ DeepSeek-Coder-V2-Lite و67.7% لـ StarCoder2 15B. حجم تنزيل qwen2.5-coder:14b هو 9.0 GB، لذا خطّط لنحو 10 GB VRAM.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct: ‏89.6% HumanEval، تنزيل 9.0 GB (ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite (‏16B MoE، منها 2.4B نشطة): ‏81.1% HumanEval، تنزيل 8.9 GB',
          'StarCoder2 15B Instruct: ‏67.7% HumanEval — كل الأرقام أعلنتها الشركات المطورة وليست قياسات من PromptQuorum',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'يسجّل Qwen2.5-Coder 14B Instruct نسبة 89.6% في HumanEval في تقرير Qwen نفسه، وهي الأعلى بين النماذج الثلاثة المقارنة هنا، ويحتاج نحو 10 GB VRAM (تنزيل 9.0 GB)',
          'DeepSeek-Coder-V2-Lite نموذج مزيج خبراء بحجم 16B (‏2.4B معاملات نشطة) يسجّل 81.1% في HumanEval بتنزيل 8.9 GB',
          'يسجّل StarCoder2 15B Instruct نسبة 67.7% في HumanEval ويتأخر عن النموذجين الآخرين في هذا المقياس',
          'مع 12 GB VRAM شغّل Qwen2.5-Coder 14B؛ وأقل من 8 GB انتقل إلى نموذج برمجة بحجم 7B. كل أرقام HumanEval نتائج instruct أعلنتها الشركات وليست قياسات من PromptQuorum',
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14B يتصدر HumanEval',
        content: [
          '<strong>يسجّل Qwen2.5-Coder-14B-Instruct نسبة 89.6% في HumanEval في التقرير التقني لـ Qwen2.5-Coder، وهي الأعلى بين النماذج الثلاثة المقارنة هنا.</strong> هذه نتائج instruct أعلنتها الشركة المطورة، وليست قياسات من PromptQuorum ولا نتائج Q4_K_M؛ وقد تختلف الدرجات قليلًا في النسخ المحلية المكمّمة.',
          'يسجّل DeepSeek-Coder-V2-Lite-Instruct نسبة 81.1% في الجدول نفسه. وهو نموذج مزيج خبراء بإجمالي 16B و2.4B نشطة، فليس نموذجًا كثيفًا بحجم 14B، لكن تنزيله في Ollama (‏8.9 GB) يضعه في فئة VRAM نفسها. فارق 8.5 نقطة في HumanEval لصالح Qwen؛ ويبقى DeepSeek بديلًا معقولًا إن كنت تستخدمه بالفعل.',
          'يسجّل StarCoder2-15B-Instruct-v0.1 نسبة 67.7% في الجدول نفسه. تم تدريبه على The Stack v2 ويناسب العمل الموجّه إلى المستودعات، لكنه يتأخر في HumanEval عن النموذجين السابقين.',
        ],
        columns: [
          'النموذج',
          'HumanEval (instruct)',
          'البنية',
        ],
        rows: [
          { 'النموذج': 'Qwen2.5-Coder 14B', 'HumanEval (instruct)': '89.6%', 'البنية': '14.7B كثيف' },
          { 'النموذج': 'DeepSeek-Coder-V2-Lite', 'HumanEval (instruct)': '81.1%', 'البنية': '16B MoE (2.4B نشطة)' },
          { 'النموذج': 'StarCoder2 15B', 'HumanEval (instruct)': '67.7%', 'البنية': '15B كثيف' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-ar.webp',
        imageCaption: 'أفضل نماذج 14B للبرمجة -- HumanEval (instruct، أرقام الشركات)',
      },
      body2: {
        title: 'هامش VRAM يحدد أيهما تختار',
        content: [
          'يحتاج كلٌّ من Qwen2.5-Coder 14B وDeepSeek-Coder-V2-Lite إلى نحو 10 GB من VRAM عند Q4_K_M، مما يترك هامشاً لا يتجاوز 2 GB على بطاقة بسعة 12 GB. <strong>هذا الهامش ضيّق لجلسات السياق الطويل: عند 8k من السياق، يرتفع استخدام VRAM إلى ~11.5 GB.</strong> إن كان سير عملك يتضمن ملفات كبيرة، فاختر بطاقة بسعة 16 GB أو أكثر.',
          'لنوافذ السياق دون 4k رمز — الحالة الشائعة لإكمال الكود في ملف واحد — تعمل النماذج الثلاثة بارتياح على RTX 3060 12 GB أو RTX 3080 Ti 12 GB. تبلغ السرعة نحو 14–18 tok/s لكلٍّ من Qwen وDeepSeek Coder؛ ويعمل StarCoder2 15B بأداء مماثل نظراً لبصمته المشابهة من VRAM. فضّل StarCoder2 حين يتمحور سير عملك حول البحث على نطاق المستودع أو أنماط المساهمة في المصادر المفتوحة.',
          'للاطلاع على مقارنة أشمل لنماذج البرمجة بأحجام وفئات VRAM مختلفة، راجع دليل <a href="/ar/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">أفضل LLM للبرمجة بـ 12 GB من VRAM</a>.',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-ar.webp',
        imageCaption: 'هامش الذاكرة مع سياق أطول -- استخدام Q4_K_M مع نمو السياق',
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج البرمجة 14B',
        faqs: [
          {
            q: 'هل يمكن تشغيل Qwen2.5-Coder 14B بـ 8 GB من VRAM؟',
            a: 'ليس باستمرار. يحتاج النموذج عند Q4_K_M إلى ~10 GB من VRAM. يمكنك استخدام Q3_K_M لضغطه في 8 GB، لكن تراجع الجودة ملحوظ. الخيار الأفضل لـ 8 GB من VRAM هو Qwen2.5-Coder 7B أو DeepSeek Coder 7B.',
          },
          {
            q: 'كيف يقارن Qwen2.5-Coder 14B بـ DeepSeek-Coder-V2-Lite في المهام الفعلية؟',
            a: 'ليس لدينا قياس متكافئ على مهام حقيقية. وفق أرقام HumanEval في تقرير Qwen، يتقدم Qwen2.5-Coder 14B على DeepSeek-Coder-V2-Lite بـ 8.5 نقطة (89.6 مقابل 81.1). HumanEval مقياس لبايثون، لذا يخبرنا القليل عن لغات مثل Rust أو Go.',
          },
          {
            q: 'هل نموذج البرمجة 14B أفضل من نموذج عام بحجم 34B للكود؟',
            a: 'ليس بالضرورة. يمكن للنماذج المخصصة للبرمجة أن تسدّ جزءًا كبيرًا من الفجوة مع النماذج العامة الأكبر في مهام الكود، لكن لا يتوفر لدينا هنا قياس متكافئ. راجع <a href="/ar/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">مقارنة Qwen Coder مع DeepSeek Coder</a> لتفاصيل المقاييس.',
          },
          {
            q: 'ما التكميم الذي يجب استخدامه لنموذج برمجة 14B؟',
            a: 'يُعد Q4_K_M الخيار الشائع: يحتفظ بمعظم جودة FP16 بأقل بكثير من نصف الذاكرة، مع اختلاف الفقد بحسب النموذج والمهمة. ويضيف Q5_K_M نحو 1 GB من VRAM لسقف جودة أعلى قليلًا، ولا يستحق ذلك إلا مع 12 GB VRAM أو أكثر وسياقات قصيرة.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: '코딩에 최적인 14B 모델은 무엇입니까?',
    seoTitle: '코딩용 최적 14B 모델 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen2.5-Coder 14B Instruct: HumanEval 89.6%, 약 10 GB VRAM. DeepSeek-Coder-V2-Lite: 81.1%. StarCoder2 15B: 67.7%(Qwen 발표). 간단 답변.',
    heroImage: '/images/best-14b-models-coding-humaneval-comparison-hero-ko.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ko: {
        question: '코딩에 최적인 14B 모델은 무엇입니까?',
        answer: 'Qwen 자체 보고서에서 Qwen2.5-Coder 14B는 이 세 코딩 모델 중 가장 강력합니다. HumanEval(instruct) 89.6%로, DeepSeek-Coder-V2-Lite의 81.1%와 StarCoder2 15B의 67.7%를 앞섭니다. qwen2.5-coder:14b 다운로드는 9.0 GB이므로 약 10 GB VRAM을 예상하십시오.',
        bullets: [
          'Qwen2.5-Coder 14B Instruct: HumanEval 89.6%, 다운로드 9.0 GB(ollama run qwen2.5-coder:14b)',
          'DeepSeek-Coder-V2-Lite(16B MoE, 활성 2.4B): HumanEval 81.1%, 다운로드 8.9 GB',
          'StarCoder2 15B Instruct: HumanEval 67.7% — 모두 제조사 발표 수치이며 PromptQuorum 실측이 아닙니다',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen2.5-Coder 14B Instruct는 Qwen 자체 보고서에서 HumanEval 89.6%로 비교한 세 모델 중 가장 높으며, 약 10 GB VRAM(다운로드 9.0 GB)이 필요합니다',
          'DeepSeek-Coder-V2-Lite는 16B 전문가 혼합 모델(활성 파라미터 2.4B)로 8.9 GB 다운로드에 HumanEval 81.1%를 기록합니다',
          'StarCoder2 15B Instruct는 HumanEval 67.7%로 이 벤치마크에서 나머지 두 모델에 뒤처집니다',
          '12 GB VRAM이라면 Qwen2.5-Coder 14B를, 8 GB 미만이라면 7B 코딩 모델을 사용하십시오. 모든 HumanEval 수치는 제조사가 발표한 instruct 결과이며 PromptQuorum 실측이 아닙니다',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Qwen2.5-Coder 14B Instruct는 Qwen 자체 보고서에서 HumanEval 89.6%로 비교한 14B급 코딩 모델 세 개 중 가장 높으며, 약 10 GB VRAM이 필요합니다.',
          },
          {
            type: 'plain-terms',
            text: '14B 코딩 모델을 로컬에서 실행하려면 Qwen2.5-Coder 14B 또는 DeepSeek-Coder-V2-Lite를 선택하십시오. 두 모델 모두 약 10 GB VRAM이 필요하며, HumanEval 수치는 제조사 발표 값입니다.',
          },
        ],
      },
      body1: {
        title: 'Qwen2.5-Coder 14B가 HumanEval에서 선두입니다',
        content: [
          '<strong>Qwen2.5-Coder-14B-Instruct는 Qwen2.5-Coder 기술 보고서에서 HumanEval 89.6%를 기록하여 비교한 세 모델 중 가장 높습니다.</strong> 이는 제조사가 발표한 instruct 결과이며 PromptQuorum 실측도, Q4_K_M 결과도 아닙니다. 양자화된 로컬 빌드는 점수가 다소 다를 수 있습니다.',
          'DeepSeek-Coder-V2-Lite-Instruct는 같은 표에서 81.1%입니다. 총 16B, 활성 2.4B 파라미터의 전문가 혼합 모델이라 밀집 14B 모델은 아니지만, 8.9 GB Ollama 다운로드로 같은 VRAM 등급에 속합니다. HumanEval 8.5점 차이는 Qwen에 유리하며, 이미 사용 중이라면 DeepSeek도 합리적인 대안입니다.',
          'StarCoder2-15B-Instruct-v0.1은 같은 표에서 67.7%입니다. The Stack v2로 학습되어 저장소 중심 작업에 적합하지만 HumanEval에서는 위 두 모델에 뒤처집니다.',
        ],
        columns: [
          '모델',
          'HumanEval(instruct)',
          '아키텍처',
        ],
        rows: [
          { '모델': 'Qwen2.5-Coder 14B', 'HumanEval(instruct)': '89.6%', '아키텍처': '14.7B 밀집' },
          { '모델': 'DeepSeek-Coder-V2-Lite', 'HumanEval(instruct)': '81.1%', '아키텍처': '16B MoE(활성 2.4B)' },
          { '모델': 'StarCoder2 15B', 'HumanEval(instruct)': '67.7%', '아키텍처': '15B 밀집' },
        ],
        image: '/images/best-14b-models-coding-humaneval-comparison-hero-ko.webp',
        imageCaption: '코딩을 위한 최고의 14B 모델 -- HumanEval(instruct, 제조사 발표)',
      },
      body2: {
        title: 'VRAM 여유 공간이 선택을 결정합니다',
        content: [
          'Qwen2.5-Coder 14B와 DeepSeek-Coder-V2-Lite 모두 Q4_K_M에서 약 10 GB VRAM이 필요하며, 12 GB 카드에서는 여유 공간이 2 GB에 불과합니다. <strong>이 여유 공간은 긴 컨텍스트 세션에서 부족합니다: 8k 컨텍스트에서 VRAM 사용량이 ~11.5 GB까지 증가합니다.</strong> 대용량 파일을 다루는 작업이라면 16 GB 이상의 카드를 권장합니다.',
          '4k 토큰 미만의 컨텍스트 창(단일 파일 코드 완성의 일반적인 경우)에서는 세 모델 모두 RTX 3060 12 GB 또는 RTX 3080 Ti 12 GB에서 문제없이 실행됩니다. Qwen과 DeepSeek Coder의 속도는 약 14–18 tok/s이며, StarCoder2 15B는 유사한 VRAM 사용량을 감안할 때 비슷한 처리량으로 동작합니다. 저장소 규모 검색이나 오픈소스 기여 패턴에 집중하는 작업이라면 StarCoder2를 권장합니다.',
          '다른 크기와 VRAM 계층의 코딩 모델에 대한 더 넓은 비교는 <a href="/ko/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM 최적 코딩 LLM 가이드</a>를 참조하십시오.',
        ],
        image: '/images/best-14b-models-coding-vram-headroom-hero-ko.webp',
        imageCaption: '더 긴 컨텍스트에서의 VRAM 여유 공간 -- 컨텍스트 증가에 따른 Q4_K_M 사용량',
      },
      faq: {
        id: 'faq',
        title: '14B 코딩 모델에 관한 빠른 답변',
        faqs: [
          {
            q: 'Qwen2.5-Coder 14B를 8 GB VRAM에서 실행할 수 있습니까?',
            a: '안정적으로는 불가능합니다. Q4_K_M에서 모델은 ~10 GB VRAM이 필요합니다. Q3_K_M을 사용하면 8 GB에 넣을 수 있지만 품질 저하가 눈에 띕니다. 8 GB VRAM에는 Qwen2.5-Coder 7B 또는 DeepSeek Coder 7B가 더 나은 선택입니다.',
          },
          {
            q: 'Qwen2.5-Coder 14B와 DeepSeek-Coder-V2-Lite는 실제 작업에서 어떻게 다릅니까?',
            a: '실제 작업에서 동일 조건으로 측정한 값은 없습니다. Qwen 보고서의 HumanEval 수치로는 Qwen2.5-Coder 14B가 DeepSeek-Coder-V2-Lite를 8.5점 앞섭니다(89.6 대 81.1). HumanEval은 Python 벤치마크이므로 Rust나 Go 같은 언어에 대해서는 알려 주는 바가 적습니다.',
          },
          {
            q: '코드 작업에서 14B 코딩 모델이 범용 34B 모델보다 낫습니까?',
            a: '반드시 그렇지는 않습니다. 코드 특화 모델은 코드 작업에서 더 큰 범용 모델과의 격차를 상당 부분 좁힐 수 있지만, 여기에는 동일 조건의 측정값이 없습니다. 벤치마크 세부 내용은 <a href="/ko/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder 대 DeepSeek Coder 비교</a>를 참조하십시오.',
          },
          {
            q: '14B 코딩 모델에는 어떤 양자화를 사용해야 합니까?',
            a: 'Q4_K_M이 일반적인 기본값입니다. FP16 품질 대부분을 절반에 훨씬 못 미치는 메모리로 유지하지만, 손실은 모델과 작업에 따라 다릅니다. Q5_K_M은 VRAM을 약 1 GB 더 사용하며 품질 상한이 약간 높아지므로 12 GB 이상 VRAM에 짧은 컨텍스트일 때만 가치가 있습니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[12 GB VRAM 최적 코딩 LLM](/ko/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[Qwen Coder 대 DeepSeek Coder 비교](/ko/prompt-bites/qwen-coder-vs-deepseek-coder)',
          '[코딩을 위한 최적 로컬 LLM](/ko/local-llms/best-local-llms-for-coding)',
        ],
      },
    },
  },
}
