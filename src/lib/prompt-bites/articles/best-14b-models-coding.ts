import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Best 14B Model for Coding?',
    seoTitle: 'Best 14B Models for Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder 14B: 78% HumanEval, 10 GB VRAM. DeepSeek Coder 14B: 75%. StarCoder2 15B: 73% at 10 GB. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 2.5 Coder 14B', 'DeepSeek Coder 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing a 14B coding model for local use',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['qwen-14b-vs-llama-8b', 'best-moe-models-local-coding'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best 14B model for coding?',
        answer: 'Qwen 2.5 Coder 14B is the top 14B coding model for local use, scoring 78.4% on HumanEval and running in 10 GB VRAM at Q4_K_M quantization. It fits in 10 GB VRAM at Q4_K_M and scores highest on HumanEval among 14B models. DeepSeek Coder 14B is a strong alternative with similar VRAM requirements.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, top HumanEval score',
          'DeepSeek Coder 14B: strong alternative, similar VRAM footprint',
          'Both beat generic 14B models on code completion and debugging',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes 14B-Modell für Coding?',
        answer: 'Qwen 2.5 Coder 14B ist das beste 14B-Coding-Modell für den lokalen Einsatz, mit 78,4% HumanEval-Score und 10 GB VRAM bei Q4_K_M-Quantisierung. Es passt mit Q4_K_M in 10 GB VRAM und erzielt den höchsten HumanEval-Score unter den 14B-Modellen. DeepSeek Coder 14B ist eine starke Alternative mit ähnlichem VRAM-Bedarf.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, bester HumanEval-Score',
          'DeepSeek Coder 14B: starke Alternative, ähnlicher VRAM-Bedarf',
          'Beide übertreffen generische 14B-Modelle bei Code-Vervollständigung und Debugging',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle 14B pour le coding ?',
        answer: 'Qwen 2.5 Coder 14B est le meilleur modèle de coding 14B pour une utilisation locale, avec un score HumanEval de 78,4% et 10 Go de VRAM en Q4_K_M. Il tient en 10 Go de VRAM en Q4_K_M et obtient le meilleur score HumanEval parmi les modèles 14B. DeepSeek Coder 14B est une alternative solide avec des besoins en VRAM similaires.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M : ~10 Go de VRAM, meilleur score HumanEval',
          'DeepSeek Coder 14B : alternative solide, empreinte VRAM similaire',
          'Les deux surpassent les modèles 14B génériques sur la complétion de code et le débogage',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'コーディングに最適な14Bモデルは？',
        answer: 'Qwen 2.5 Coder 14Bはローカル利用の14Bコーディングモデルの中でトップで、HumanEvalで78.4%を達成し、Q4_K_M量子化で10 GB VRAMで動作します。Q4_K_Mで10 GB VRAMに収まり、14Bモデル中でHumanEvalスコアが最高です。DeepSeek Coder 14Bは同様のVRAM要件を持つ強力な代替モデルです。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM、最高のHumanEvalスコア',
          'DeepSeek Coder 14B：強力な代替、同様のVRAM使用量',
          '両者ともコード補完とデバッグで汎用14Bモデルを上回る',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '编程最佳14B模型是哪款？',
        answer: 'Qwen 2.5 Coder 14B 是本地使用的最佳14B编程模型，HumanEval 得分78.4%，Q4_K_M 量化仅需10 GB VRAM。Q4_K_M量化后仅需10 GB VRAM，在14B模型中 HumanEval 得分最高。DeepSeek Coder 14B 是 VRAM 需求相近的有力替代。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM，HumanEval 最高分',
          'DeepSeek Coder 14B：有力替代，VRAM 需求相近',
          '两者在代码补全和调试上均优于通用14B模型',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M uses ~10 GB VRAM and achieves the highest HumanEval score among local 14B coding models',
          'DeepSeek Coder 14B is a competitive alternative that scores within 3 points of Qwen on most code benchmarks',
          'Both models significantly outperform general-purpose 14B models on code completion, debugging, and docstring generation',
          'If VRAM is above 10 GB, prefer Qwen 2.5 Coder; below 8 GB, drop to a specialized 7B coder instead',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B Leads on HumanEval',
        content: [
          '<strong>As of May 2026, Qwen 2.5 Coder 14B at Q4_K_M quantization scores 78.4% on HumanEval — the highest of any 14B model available through Ollama or llama.cpp.</strong> The model was fine-tuned on over 5 trillion tokens of code-focused data, which distinguishes its performance on multi-step completion and test-case generation.',
          'DeepSeek Coder 14B scores 75.1% on HumanEval under identical Q4_K_M conditions. The gap is small enough that DeepSeek Coder is a valid choice, particularly if you already have it cached or are familiar with its output style.',
          'StarCoder2 15B is the third pick for open-source code-focused work. Trained on The Stack v2, it scores approximately 73% on HumanEval at ~10 GB VRAM Q4_K_M. Its strengths are open-source contribution tasks, code search across large repositories, and structured refactoring — use cases where its training corpus gives it an edge over general instruction-tuned models.',
        ],
        columns: ['Model', 'HumanEval', 'VRAM (Q4_K_M)'],
        rows: [
          { 'Model': 'Qwen 2.5 Coder 14B', 'HumanEval': '78.4%', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'Model': 'DeepSeek Coder 14B', 'HumanEval': '75.1%', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'Model': 'StarCoder2 15B', 'HumanEval': '~73%', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'VRAM Headroom Determines Which to Pick',
        content: [
          'Both Qwen 2.5 Coder 14B and DeepSeek Coder 14B require approximately 10 GB VRAM at Q4_K_M, leaving only 2 GB headroom on a 12 GB card. <strong>This margin is tight for long-context sessions: at 8k context, VRAM usage climbs to ~11.5 GB.</strong> If your workflow involves large files, prefer a card with 16+ GB.',
          'For context windows below 4k tokens — the common case for single-file code completion — all three models run comfortably on an RTX 3060 12 GB or RTX 3080 Ti 12 GB. Speed is approximately 14–18 tok/s for Qwen and DeepSeek Coder; StarCoder2 15B runs at similar throughput given its comparable VRAM footprint. Prefer StarCoder2 when your workflow centers on repository-scale search or open-source contribution patterns.',
          'For a broader comparison of coding models at other sizes and VRAM tiers, see the <a href="/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">best coding LLM for 12 GB VRAM</a> guide.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 14B Coding Models',
        faqs: [
          {
            q: 'Can Qwen 2.5 Coder 14B run on 8 GB VRAM?',
            a: 'Not reliably. At Q4_K_M the model requires ~10 GB VRAM. You could use Q3_K_M to squeeze it into 8 GB, but the quality drop is noticeable. A better option for 8 GB VRAM is Qwen 2.5 Coder 7B or DeepSeek Coder 7B.',
          },
          {
            q: 'How does Qwen 2.5 Coder 14B compare to DeepSeek Coder 14B on real tasks?',
            a: 'On Python and TypeScript completion, Qwen 2.5 Coder leads by 3–5 percentage points. On lower-resource languages like Rust or Go, the gap narrows. DeepSeek Coder has broader training coverage across more programming languages.',
          },
          {
            q: 'Is a 14B coding model better than a 34B general model for code?',
            a: 'For code-specific tasks, Qwen 2.5 Coder 14B typically outperforms a generic 34B model despite being smaller, because of its coding-focused pretraining. See the <a href="/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder vs DeepSeek Coder comparison</a> for detailed benchmark data.',
          },
          {
            q: 'What quantization should I use for a 14B coding model?',
            a: 'Q4_K_M is the standard recommendation: it preserves ~97% of FP16 quality at roughly 40% of the VRAM cost. Q5_K_M adds ~1 GB VRAM for a marginally higher quality ceiling, worth it only if you have 12+ GB VRAM and run short context lengths.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Bestes 14B-Modell für Coding?',
    seoTitle: 'Beste 14B-Modelle für Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder 14B: 78% HumanEval, 10 GB VRAM. DeepSeek Coder 14B: 75%. StarCoder2 15B: 73%. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Bestes 14B-Modell für Coding?',
        answer: 'Qwen 2.5 Coder 14B ist das beste 14B-Coding-Modell für den lokalen Einsatz. Es passt mit Q4_K_M in 10 GB VRAM und erzielt den höchsten HumanEval-Score unter den 14B-Modellen. DeepSeek Coder 14B ist eine starke Alternative mit ähnlichem VRAM-Bedarf.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M: ~10 GB VRAM, bester HumanEval-Score',
          'DeepSeek Coder 14B: starke Alternative, ähnlicher VRAM-Bedarf',
          'Beide übertreffen generische 14B-Modelle bei Code-Vervollständigung und Debugging',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M benötigt ~10 GB VRAM und erreicht den höchsten HumanEval-Score unter lokalen 14B-Coding-Modellen',
          'DeepSeek Coder 14B ist eine wettbewerbsfähige Alternative, die auf den meisten Code-Benchmarks nur 3 Punkte zurückliegt',
          'Beide Modelle übertreffen allgemeine 14B-Modelle deutlich bei Code-Vervollständigung, Debugging und Docstring-Generierung',
          'Bei mehr als 10 GB VRAM Qwen 2.5 Coder bevorzugen; unter 8 GB lieber zu einem spezialisierten 7B-Coder wechseln',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B führt beim HumanEval',
        content: [
          '<strong>Stand Mai 2026 erzielt Qwen 2.5 Coder 14B in der Q4_K_M-Quantisierung 78,4 % auf HumanEval — der höchste Wert aller 14B-Modelle, die über Ollama oder llama.cpp verfügbar sind.</strong> Das Modell wurde auf über 5 Billionen Code-fokussierten Tokens feinabgestimmt, was seine Leistung bei mehrstufiger Vervollständigung und Testfall-Generierung erklärt.',
          'DeepSeek Coder 14B erzielt unter identischen Q4_K_M-Bedingungen 75,1 % auf HumanEval. Der Unterschied ist gering genug, dass DeepSeek Coder eine valide Wahl ist — insbesondere wenn das Modell bereits gecacht ist oder Sie mit seinem Ausgabestil vertraut sind.',
          'StarCoder2 15B ist die dritte Wahl für spezialisierte Open-Source-Coding-Arbeiten. Mit Training auf The Stack v2 erreicht es etwa 73 % auf HumanEval bei ~10 GB VRAM Q4_K_M. Seine Stärken liegen bei Open-Source-Beitragstasks, Code-Suche über große Repositories und strukturiertem Refactoring — Use Cases, bei denen sein Trainings-Corpus ihm einen Vorteil gegenüber allgemein instruierter Modelle gibt.',
        ],
        columns: ['Modell', 'HumanEval', 'VRAM (Q4_K_M)'],
        rows: [
          { 'Modell': 'Qwen 2.5 Coder 14B', 'HumanEval': '78,4 %', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'Modell': 'DeepSeek Coder 14B', 'HumanEval': '75,1 %', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'Modell': 'StarCoder2 15B', 'HumanEval': '~73 %', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'VRAM-Puffer bestimmt die Modellwahl',
        content: [
          'Beide Modelle — Qwen 2.5 Coder 14B und DeepSeek Coder 14B — benötigen bei Q4_K_M ungefähr 10 GB VRAM und lassen auf einer 12-GB-Karte nur 2 GB Puffer. <strong>Dieser Spielraum ist bei langen Kontextsitzungen eng: Bei 8k-Kontext steigt der VRAM-Verbrauch auf ~11,5 GB.</strong> Bei Workflows mit großen Dateien empfiehlt sich eine Karte mit 16+ GB.',
          'Für Kontextfenster unter 4k Tokens — der übliche Fall bei der Vervollständigung einzelner Dateien — laufen alle drei Modelle problemlos auf einer RTX 3060 12 GB oder RTX 3080 Ti 12 GB. Die Geschwindigkeit bei Qwen und DeepSeek Coder beträgt etwa 14–18 tok/s; StarCoder2 15B läuft bei ähnlichem Durchsatz angesichts des vergleichbaren VRAM-Fußabdrucks. Bevorzugen Sie StarCoder2, wenn Ihr Workflow auf Repository-Suchvorgänge oder Open-Source-Beitragsmuster ausgerichtet ist.',
          'Einen umfassenderen Vergleich von Coding-Modellen bei anderen Größen und VRAM-Tiers finden Sie im <a href="/de/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">Leitfaden für das beste Coding-LLM mit 12 GB VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu 14B-Coding-Modellen',
        faqs: [
          {
            q: 'Kann Qwen 2.5 Coder 14B mit 8 GB VRAM betrieben werden?',
            a: 'Nicht zuverlässig. Bei Q4_K_M benötigt das Modell ~10 GB VRAM. Mit Q3_K_M könnte es in 8 GB passen, aber der Qualitätsabfall ist spürbar. Eine bessere Option für 8 GB VRAM ist Qwen 2.5 Coder 7B oder DeepSeek Coder 7B.',
          },
          {
            q: 'Wie verhalten sich Qwen 2.5 Coder 14B und DeepSeek Coder 14B bei realen Aufgaben?',
            a: 'Bei Python- und TypeScript-Vervollständigung liegt Qwen 2.5 Coder um 3–5 Prozentpunkte vorne. Bei weniger verbreiteten Sprachen wie Rust oder Go verringert sich der Abstand. DeepSeek Coder hat eine breitere Trainingsabdeckung über mehr Programmiersprachen.',
          },
          {
            q: 'Ist ein 14B-Coding-Modell besser als ein generisches 34B-Modell für Code?',
            a: 'Bei coding-spezifischen Aufgaben übertrifft Qwen 2.5 Coder 14B trotz seiner geringeren Größe typischerweise ein generisches 34B-Modell, da es coding-fokussiert vortrainiert wurde. Detaillierte Benchmark-Daten finden Sie im <a href="/de/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Vergleich Qwen Coder vs. DeepSeek Coder</a>.',
          },
          {
            q: 'Welche Quantisierung sollte ich für ein 14B-Coding-Modell verwenden?',
            a: 'Q4_K_M ist die Standardempfehlung: Sie erhält ~97 % der FP16-Qualität bei etwa 40 % des VRAM-Bedarfs. Q5_K_M benötigt ~1 GB mehr VRAM für eine marginal höhere Qualität und lohnt sich nur, wenn Sie über 12+ GB VRAM verfügen und kurze Kontextlängen verwenden.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Meilleur modèle 14B pour le coding ?',
    seoTitle: 'Meilleurs 14B Modèles pour Coding 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder 14B : 78% HumanEval, 10 Go VRAM. DeepSeek Coder 14B : 75%. StarCoder2 15B : 73%. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur modèle 14B pour le coding ?',
        answer: 'Qwen 2.5 Coder 14B est le meilleur modèle de coding 14B pour une utilisation locale. Il tient en 10 Go de VRAM en Q4_K_M et obtient le meilleur score HumanEval parmi les modèles 14B. DeepSeek Coder 14B est une alternative solide avec des besoins en VRAM similaires.',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M : ~10 Go de VRAM, meilleur score HumanEval',
          'DeepSeek Coder 14B : alternative solide, empreinte VRAM similaire',
          'Les deux surpassent les modèles 14B génériques sur la complétion de code et le débogage',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M utilise ~10 Go de VRAM et atteint le meilleur score HumanEval parmi les modèles de coding 14B locaux',
          'DeepSeek Coder 14B est une alternative compétitive, à moins de 3 points de Qwen sur la plupart des benchmarks de code',
          'Les deux modèles surpassent nettement les modèles 14B génériques sur la complétion, le débogage et la génération de docstrings',
          'Au-dessus de 10 Go de VRAM, préférer Qwen 2.5 Coder ; en dessous de 8 Go, passer à un coder 7B spécialisé',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B en tête sur HumanEval',
        content: [
          '<strong>En mai 2026, Qwen 2.5 Coder 14B en quantification Q4_K_M obtient 78,4 % sur HumanEval — le meilleur score de tout modèle 14B disponible via Ollama ou llama.cpp.</strong> Le modèle a été affiné sur plus de 5 000 milliards de tokens de données axées sur le code, ce qui explique ses performances sur la complétion multi-étapes et la génération de cas de test.',
          'DeepSeek Coder 14B obtient 75,1 % sur HumanEval dans des conditions Q4_K_M identiques. L\'écart est suffisamment faible pour que DeepSeek Coder reste un choix valide, notamment si vous l\'avez déjà en cache ou que vous êtes habitué à son style de sortie.',
          'StarCoder2 15B est le troisième choix pour le travail de coding open-source spécialisé. Entraîné sur The Stack v2, il obtient environ 73 % sur HumanEval à ~10 Go de VRAM Q4_K_M. Ses points forts sont les tâches de contribution open-source, la recherche de code dans les grands référentiels et le refactoring structuré — les cas d\'usage où son corpus d\'entraînement lui confère un avantage sur les modèles d\'instruction générale.',
        ],
        columns: ['Modèle', 'HumanEval', 'VRAM (Q4_K_M)'],
        rows: [
          { 'Modèle': 'Qwen 2.5 Coder 14B', 'HumanEval': '78,4 %', 'VRAM (Q4_K_M)': '~10 Go' },
          { 'Modèle': 'DeepSeek Coder 14B', 'HumanEval': '75,1 %', 'VRAM (Q4_K_M)': '~10 Go' },
          { 'Modèle': 'StarCoder2 15B', 'HumanEval': '~73 %', 'VRAM (Q4_K_M)': '~10 Go' },
        ],
      },
      body2: {
        title: 'La marge VRAM détermine le choix',
        content: [
          'Qwen 2.5 Coder 14B et DeepSeek Coder 14B nécessitent tous deux environ 10 Go de VRAM en Q4_K_M, ne laissant que 2 Go de marge sur une carte 12 Go. <strong>Cette marge est serrée pour les sessions à long contexte : à 8k de contexte, l\'utilisation VRAM monte à ~11,5 Go.</strong> Si votre flux de travail implique de grands fichiers, préférez une carte de 16+ Go.',
          'Pour des fenêtres de contexte inférieures à 4k tokens — le cas courant pour la complétion de fichier unique — les trois modèles fonctionnent confortablement sur une RTX 3060 12 Go ou RTX 3080 Ti 12 Go. La vitesse pour Qwen et DeepSeek Coder est d\'environ 14 à 18 tok/s ; StarCoder2 15B s\'exécute à un débit similaire compte tenu de son empreinte VRAM comparable. Préférez StarCoder2 quand votre flux de travail porte sur la recherche au niveau du référentiel ou les modèles de contributions open-source.',
          'Pour une comparaison plus complète des modèles de coding à différentes tailles et niveaux de VRAM, consultez le <a href="/fr/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">guide du meilleur LLM de coding pour 12 Go de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles de coding 14B',
        faqs: [
          {
            q: 'Qwen 2.5 Coder 14B peut-il fonctionner avec 8 Go de VRAM ?',
            a: 'Pas de manière fiable. En Q4_K_M, le modèle nécessite ~10 Go de VRAM. En Q3_K_M il pourrait tenir en 8 Go, mais la baisse de qualité est perceptible. Une meilleure option pour 8 Go de VRAM est Qwen 2.5 Coder 7B ou DeepSeek Coder 7B.',
          },
          {
            q: 'Comment se comparent Qwen 2.5 Coder 14B et DeepSeek Coder 14B sur des tâches réelles ?',
            a: 'Sur la complétion Python et TypeScript, Qwen 2.5 Coder est en tête de 3 à 5 points de pourcentage. Sur les langages moins courants comme Rust ou Go, l\'écart se réduit. DeepSeek Coder offre une couverture de formation plus large sur davantage de langages de programmation.',
          },
          {
            q: 'Un modèle de coding 14B est-il meilleur qu\'un modèle générique 34B pour le code ?',
            a: 'Pour les tâches spécifiques au code, Qwen 2.5 Coder 14B surpasse généralement un modèle générique 34B malgré sa taille inférieure, grâce à son préentraînement axé sur le code. Consultez la <a href="/fr/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">comparaison Qwen Coder vs DeepSeek Coder</a> pour les données de benchmark détaillées.',
          },
          {
            q: 'Quelle quantification utiliser pour un modèle de coding 14B ?',
            a: 'Q4_K_M est la recommandation standard : elle préserve ~97 % de la qualité FP16 pour environ 40 % du coût VRAM. Q5_K_M ajoute ~1 Go de VRAM pour une qualité légèrement supérieure, utile seulement si vous disposez de 12+ Go de VRAM avec des contextes courts.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'コーディングに最適な14Bモデルは？',
    seoTitle: 'コーディング向け最適14Bモデル 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder 14B：78% HumanEval、10 GB VRAM。DeepSeek Coder 14B：75%。StarCoder2 15B：73%。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'コーディングに最適な14Bモデルは？',
        answer: 'Qwen 2.5 Coder 14Bはローカル利用の14Bコーディングモデルの中でトップです。Q4_K_Mで10 GB VRAMに収まり、14Bモデル中でHumanEvalスコアが最高です。DeepSeek Coder 14Bは同様のVRAM要件を持つ強力な代替モデルです。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM、最高のHumanEvalスコア',
          'DeepSeek Coder 14B：強力な代替、同様のVRAM使用量',
          '両者ともコード補完とデバッグで汎用14Bモデルを上回る',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_Mは~10 GB VRAMを使用し、ローカル14Bコーディングモデル中で最高のHumanEvalスコアを達成',
          'DeepSeek Coder 14Bは競争力のある代替で、ほとんどのコードベンチマークでQwenから3ポイント以内',
          '両モデルともコード補完、デバッグ、ドキュメント生成で汎用14Bモデルを大幅に上回る',
          'VRAMが10 GB超ならQwen 2.5 Coderを優先。8 GB未満なら特化型7Bコーダーに切り替えること',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14BがHumanEvalでトップ',
        content: [
          '<strong>2026年5月時点で、Qwen 2.5 Coder 14BはQ4_K_M量子化でHumanEval 78.4%を記録 — OllamaまたはLlama.cpp経由で利用可能な14Bモデル中で最高のスコアです。</strong> このモデルは5兆トークン以上のコード重視データでファインチューニングされており、多段階補完とテストケース生成における性能の高さはそこに由来します。',
          'DeepSeek Coder 14Bは同一のQ4_K_M条件でHumanEval 75.1%を記録します。差は小さく、特にすでにキャッシュ済みだったり出力スタイルに慣れている場合はDeepSeek Coderも有効な選択肢です。',
          'StarCoder2 15Bはオープンソース特化コーディング作業の3番目の選択肢です。The Stack v2で学習され、~10 GB VRAM Q4_K_MでHumanEvalで約73%を達成します。その強みはオープンソース貢献タスク、大規模リポジトリにわたるコード検索、および構造化リファクタリングです — その学習コーパスが汎用命令調整モデルに対して優位性をもたらすユースケースです。',
        ],
        columns: ['モデル', 'HumanEval', 'VRAM (Q4_K_M)'],
        rows: [
          { 'モデル': 'Qwen 2.5 Coder 14B', 'HumanEval': '78.4%', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'モデル': 'DeepSeek Coder 14B', 'HumanEval': '75.1%', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'モデル': 'StarCoder2 15B', 'HumanEval': '~73%', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'VRAMの余裕が選択を決める',
        content: [
          'Qwen 2.5 Coder 14BとDeepSeek Coder 14Bはいずれも Q4_K_Mで約10 GB VRAMが必要で、12 GBカードでは2 GBしか余裕がありません。<strong>この余裕は長いコンテキストセッションでは不十分です：8kコンテキストではVRAM使用量は~11.5 GBに達します。</strong>大きなファイルを扱うワークフローでは16 GB以上のカードを推奨します。',
          '4kトークン未満のコンテキストウィンドウ（単一ファイル補完の一般的なケース）では、3つのモデルすべてがRTX 3060 12 GBやRTX 3080 Ti 12 GB上で快適に動作します。QwenとDeepSeek Coderでの速度は約14〜18 tok/sです；StarCoder2 15Bは同等のVRAM消費量を考えると同様のスループットで動作します。リポジトリ規模の検索やオープンソース貢献パターンに焦点を当てるワークフローではStarCoder2を優先します。',
          '他のサイズとVRAMティアにおけるコーディングモデルの包括的な比較については、<a href="/ja/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM向け最適コーディングLLMガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '14Bコーディングモデルに関するよくある質問',
        faqs: [
          {
            q: 'Qwen 2.5 Coder 14Bは8 GB VRAMで動作しますか？',
            a: '確実には動作しません。Q4_K_Mではモデルに~10 GB VRAMが必要です。Q3_K_Mなら8 GBに収まりますが品質低下が目立ちます。8 GB VRAMにはQwen 2.5 Coder 7BまたはDeepSeek Coder 7Bがより良い選択肢です。',
          },
          {
            q: 'Qwen 2.5 Coder 14BとDeepSeek Coder 14Bは実際のタスクでどう違いますか？',
            a: 'PythonとTypeScriptの補完ではQwen 2.5 Coderが3〜5パーセントポイント上回ります。RustやGoのような低リソース言語では差が縮まります。DeepSeek Coderはより多くのプログラミング言語にわたるより広いトレーニングカバレッジを持っています。',
          },
          {
            q: '14Bコーディングモデルはコードにおいて汎用34Bモデルより優れていますか？',
            a: 'コード固有のタスクでは、コード重視の事前学習によりQwen 2.5 Coder 14Bは小さいにもかかわらず汎用34Bモデルを上回ることが多いです。詳細なベンチマークデータは<a href="/ja/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder対DeepSeek Coderの比較</a>をご覧ください。',
          },
          {
            q: '14Bコーディングモデルにはどの量子化を使うべきですか？',
            a: 'Q4_K_Mが標準の推奨です：FP16品質の~97%を約40%のVRAMコストで保持します。Q5_K_MはわずかにVRAMを~1 GB多く使い品質がわずかに向上しますが、12 GB以上のVRAMで短いコンテキストを使う場合にのみ価値があります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '编程最佳14B模型是哪款？',
    seoTitle: 'Qwen2.5-Coder 14B编程实测 2026：HumanEval 78%第一',
    metaDescription: 'Qwen2.5-Coder 14B以78% HumanEval得分领先，12 GB显存运行Q4_K_M量化版。DeepSeek Coder 14B以75%紧随，Python与SQL补全特别出色。StarCoder2 15B评分73%，响应速度最快。三款均支持Ollama本地部署，无需订阅费用。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '编程最佳14B模型是哪款？',
        answer: 'Qwen 2.5 Coder 14B 是本地使用的最佳14B编程模型。Q4_K_M量化后仅需10 GB VRAM，在14B模型中 HumanEval 得分最高。DeepSeek Coder 14B 是 VRAM 需求相近的有力替代。',
        bullets: [
          'Qwen 2.5 Coder 14B Q4_K_M：~10 GB VRAM，HumanEval 最高分',
          'DeepSeek Coder 14B：有力替代，VRAM 需求相近',
          '两者在代码补全和调试上均优于通用14B模型',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B Q4_K_M 使用约10 GB VRAM，在本地14B编程模型中 HumanEval 得分最高',
          'DeepSeek Coder 14B 竞争力强，在大多数代码基准测试中与 Qwen 相差不超过3分',
          '两款模型在代码补全、调试和文档生成方面均大幅优于通用14B模型',
          'VRAM 超过10 GB 时首选 Qwen 2.5 Coder；低于8 GB 时改用专用7B编程模型',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 14B 在 HumanEval 上领跑',
        content: [
          '<strong>截至2026年5月，Qwen 2.5 Coder 14B 在 Q4_K_M 量化下 HumanEval 得分78.4%——是 Ollama 或 llama.cpp 上所有可用14B模型中的最高分。</strong>该模型在超过5万亿条以代码为核心的 token 上进行了微调，这正是其在多步骤补全和测试用例生成上表现突出的原因。',
          'DeepSeek Coder 14B 在相同的 Q4_K_M 条件下 HumanEval 得分75.1%。差距足够小，DeepSeek Coder 仍是合理选择——尤其是当你已有缓存或熟悉其输出风格时。',
          'StarCoder2 15B 是开源专项代码工作的第三选择。在 The Stack v2 上训练，~10 GB VRAM Q4_K_M 下 HumanEval 得分约73%。其优势在于开源贡献任务、跨大型代码库的代码搜索以及结构化重构——在这些用例中其训练语料库相比通用指令调优模型提供优势。',
        ],
        columns: ['模型', 'HumanEval', 'VRAM (Q4_K_M)'],
        rows: [
          { '模型': 'Qwen 2.5 Coder 14B', 'HumanEval': '78.4%', 'VRAM (Q4_K_M)': '~10 GB' },
          { '模型': 'DeepSeek Coder 14B', 'HumanEval': '75.1%', 'VRAM (Q4_K_M)': '~10 GB' },
          { '模型': 'StarCoder2 15B', 'HumanEval': '~73%', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'VRAM 余量决定选择',
        content: [
          'Qwen 2.5 Coder 14B 和 DeepSeek Coder 14B 在 Q4_K_M 下均需约10 GB VRAM，在12 GB 显卡上只剩2 GB 余量。<strong>长上下文会话中余量非常紧张：8k 上下文时 VRAM 使用量升至约11.5 GB。</strong>如果工作流涉及大型文件，建议使用16 GB 以上的显卡。',
          '对于4k token 以下的上下文窗口（单文件补全的常见场景），三款模型都能在 RTX 3060 12 GB 或 RTX 3080 Ti 12 GB 上稳定运行。Qwen 和 DeepSeek Coder 的速度约为14–18 tok/s；StarCoder2 15B 考虑到其 VRAM 消耗量相近，运行速度相似。当你的工作流集中于代码库级别搜索或开源贡献模式时，优先选择 StarCoder2。',
          '有关不同尺寸和VRAM层级编程模型的全面对比，请参阅<a href="/zh/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM 最佳编程 LLM 指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于14B编程模型的快速解答',
        faqs: [
          {
            q: 'Qwen 2.5 Coder 14B 能在8 GB VRAM 上运行吗？',
            a: '不能可靠运行。Q4_K_M 下模型需要约10 GB VRAM。使用 Q3_K_M 可以勉强塞入8 GB，但质量下降明显。8 GB VRAM 的更好选择是 Qwen 2.5 Coder 7B 或 DeepSeek Coder 7B。',
          },
          {
            q: 'Qwen 2.5 Coder 14B 和 DeepSeek Coder 14B 在实际任务上有何差异？',
            a: '在 Python 和 TypeScript 补全上，Qwen 2.5 Coder 领先3–5个百分点。在 Rust 或 Go 等小众语言上差距缩小。DeepSeek Coder 对更多编程语言的训练覆盖更广。',
          },
          {
            q: '14B编程模型在代码任务上比通用34B模型更好吗？',
            a: '对于代码专项任务，尽管体积更小，Qwen 2.5 Coder 14B 凭借代码专项预训练通常优于通用34B模型。详细基准数据请参阅<a href="/zh/prompt-bites/qwen-coder-vs-deepseek-coder" class="text-primary hover:underline">Qwen Coder 对比 DeepSeek Coder</a>。',
          },
          {
            q: '14B编程模型应使用哪种量化？',
            a: 'Q4_K_M 是标准推荐：以约40%的VRAM成本保留约97%的FP16质量。Q5_K_M 多用约1 GB VRAM 换取略高质量，仅在拥有12 GB 以上VRAM且使用短上下文时才有价值。',
          },
        ],
      },
    },
  },
}
