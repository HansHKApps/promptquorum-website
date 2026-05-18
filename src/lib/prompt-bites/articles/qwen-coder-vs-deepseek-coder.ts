import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'Qwen Coder vs DeepSeek Coder: Which Is Better?',
    seoTitle: 'Qwen Coder vs DeepSeek Coder? | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder wins for Python and TypeScript. DeepSeek Coder has broader language support. Both need ~10 GB VRAM at 14B Q4. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 2.5 Coder 14B', 'DeepSeek Coder V2'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing between Qwen Coder and DeepSeek Coder locally',
    parentArticle: '/local-llms/qwen-coder-vs-deepseek-mistral-local-2026',
    siblingBites: ['ollama-vs-lm-studio', 'best-frontend-for-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Qwen Coder vs DeepSeek Coder: which is better?',
        answer: 'Qwen 2.5 Coder wins for Python and TypeScript. DeepSeek Coder V2 has broader language support. Both require ~10 GB VRAM at 14B Q4. For most developers, Qwen 2.5 Coder is the better default.',
        bullets: [
          'Qwen 2.5 Coder 14B: top Python and TypeScript benchmark scores',
          'DeepSeek Coder V2: broader programming language coverage',
          'Both run on RTX 3060 12 GB at Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Qwen Coder vs. DeepSeek Coder: Welcher ist besser?',
        answer: 'Qwen 2.5 Coder gewinnt bei Python und TypeScript. DeepSeek Coder V2 hat eine breitere Sprachunterstützung. Beide benötigen ~10 GB VRAM bei 14B Q4. Für die meisten Entwickler ist Qwen 2.5 Coder die bessere Standardwahl.',
        bullets: [
          'Qwen 2.5 Coder 14B: beste Python- und TypeScript-Benchmark-Scores',
          'DeepSeek Coder V2: breitere Abdeckung von Programmiersprachen',
          'Beide laufen auf RTX 3060 12 GB mit Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Qwen Coder vs DeepSeek Coder : lequel est le meilleur ?',
        answer: 'Qwen 2.5 Coder gagne pour Python et TypeScript. DeepSeek Coder V2 a une prise en charge plus large des langages. Les deux nécessitent ~10 Go de VRAM en 14B Q4. Pour la plupart des développeurs, Qwen 2.5 Coder est le meilleur choix par défaut.',
        bullets: [
          'Qwen 2.5 Coder 14B : meilleurs scores Python et TypeScript',
          'DeepSeek Coder V2 : couverture plus large des langages de programmation',
          'Les deux tournent sur RTX 3060 12 Go en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Qwen Coder対DeepSeek Coder：どちらが優れているか？',
        answer: 'Qwen 2.5 CoderはPythonとTypeScriptで勝ります。DeepSeek Coder V2はより広い言語サポートを持ちます。両者とも14B Q4で~10 GB VRAMが必要です。ほとんどの開発者にはQwen 2.5 Coderが優れたデフォルトです。',
        bullets: [
          'Qwen 2.5 Coder 14B：PythonとTypeScriptのベンチマークスコアが最高',
          'DeepSeek Coder V2：より広いプログラミング言語カバレッジ',
          '両者ともQ4_K_MでRTX 3060 12 GBで動作',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Qwen Coder 对比 DeepSeek Coder：哪个更好？',
        answer: 'Qwen 2.5 Coder 在 Python 和 TypeScript 上更胜一筹。DeepSeek Coder V2 支持更广泛的编程语言。两者在14B Q4 下均需约10 GB VRAM。对大多数开发者而言，Qwen 2.5 Coder 是更好的默认选择。',
        bullets: [
          'Qwen 2.5 Coder 14B：Python 和 TypeScript 基准测试最高分',
          'DeepSeek Coder V2：更广泛的编程语言覆盖',
          '两者均可在 RTX 3060 12 GB 上以 Q4_K_M 运行',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B scores 78.4% on HumanEval and 73.2% on MBPP — 3–5 points higher than DeepSeek Coder 14B on both benchmarks',
          'DeepSeek Coder V2 (MoE architecture) covers more programming languages and outperforms on Rust, Go, and C++ specifically',
          'Both models require ~10 GB VRAM at Q4_K_M, run at 14–18 tok/s on RTX 3060 12 GB, and behave identically on VRAM budget',
          'For Python or TypeScript work, default to Qwen 2.5 Coder; for polyglot projects with many languages, consider DeepSeek Coder',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder Leads on Python and TypeScript Benchmarks',
        content: [
          '<strong>On HumanEval, Qwen 2.5 Coder 14B scores 78.4% against DeepSeek Coder 14B\'s 75.1% — a 3.3-point gap that is consistent across repeated runs and reflects genuine differences in Python completion quality.</strong> On MBPP (a broader code benchmark), the gap is similar: Qwen 73.2% versus DeepSeek 68.9%.',
          'Qwen 2.5 Coder was trained on a dataset with an estimated 45% Python and JavaScript/TypeScript content. This high concentration of mainstream language data explains its edge on the benchmarks that most web and data science developers care about.',
          'DeepSeek Coder 14B matches or slightly exceeds Qwen 2.5 Coder on TypeScript-specific test suites in some evaluations. The difference is small enough that team preference or existing tooling integration often matters more than raw benchmark scores.',
        ],
        columns: ['Model', 'HumanEval', 'MBPP', 'VRAM (Q4_K_M)'],
        rows: [
          { 'Model': 'Qwen 2.5 Coder 14B', 'HumanEval': '78.4%', 'MBPP': '73.2%', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'Model': 'DeepSeek Coder 14B', 'HumanEval': '75.1%', 'MBPP': '68.9%', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'DeepSeek Coder Covers More Languages',
        content: [
          'DeepSeek Coder V2 uses a Mixture-of-Experts architecture, which gives it broader language coverage per active-parameter budget. <strong>On Rust, Go, and C++ benchmarks, DeepSeek Coder V2 outperforms Qwen 2.5 Coder 14B by 4–8 percentage points.</strong> If your project involves systems programming or cross-language codebases, DeepSeek Coder is the more capable choice.',
          'Both models support fill-in-the-middle (FIM) prompting for IDE-style inline completion. The instruction-tuned versions ("instruct" variants) available through Ollama support chat-style code generation with explanations. Response style and verbosity differ: Qwen tends toward shorter, tighter completions while DeepSeek Coder generates more explanatory comments by default.',
          'For a full comparison of coding models at the 14B class including VRAM requirements by GPU, see the <a href="/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">best 14B models for coding</a> guide.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Qwen vs DeepSeek Coder',
        faqs: [
          {
            q: 'Which model is better for SQL generation — Qwen Coder or DeepSeek Coder?',
            a: 'On Spider and BIRD SQL benchmarks, Qwen 2.5 Coder 14B and DeepSeek Coder 14B perform within 2 points of each other. Either is a reasonable choice for SQL tasks. Both significantly outperform non-specialized 14B models on SQL generation.',
          },
          {
            q: 'Can I run Qwen 2.5 Coder or DeepSeek Coder on 8 GB VRAM?',
            a: 'Not at 14B Q4_K_M — both require ~10 GB. For 8 GB VRAM, use Qwen 2.5 Coder 7B Q4_K_M (~5 GB VRAM) or DeepSeek Coder 7B Q4_K_M. The 7B Qwen Coder scores 72.1% on HumanEval — still well above generic 7B models.',
          },
          {
            q: 'Does Qwen 2.5 Coder support context-aware code completion with project files?',
            a: 'Yes. Both models support prompts up to 128k tokens, which is enough to include full project context. The quality of multi-file completion depends more on how you structure the prompt than on which model you use. See <a href="/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">best local coding LLM for 12 GB VRAM</a> for setup recommendations.',
          },
          {
            q: 'Is there a meaningful quality difference between Qwen Coder and DeepSeek Coder for code review tasks?',
            a: 'For code review (identifying bugs, suggesting refactors, explaining logic), both models perform similarly — within the margin of prompt phrasing variance. The HumanEval and MBPP gaps reflect completion quality more than review quality. Evaluate both on a sample of your specific codebase if this is your primary use case.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'Qwen Coder vs. DeepSeek Coder: Welcher ist besser?',
    seoTitle: 'Qwen Coder vs. DeepSeek Coder? | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder gewinnt bei Python und TypeScript. DeepSeek Coder hat breitere Sprachunterstützung. Beide benötigen ~10 GB VRAM bei 14B Q4. Kurze Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Qwen Coder vs. DeepSeek Coder: Welcher ist besser?',
        answer: 'Qwen 2.5 Coder gewinnt bei Python und TypeScript. DeepSeek Coder V2 hat eine breitere Sprachunterstützung. Beide benötigen ~10 GB VRAM bei 14B Q4. Für die meisten Entwickler ist Qwen 2.5 Coder die bessere Standardwahl.',
        bullets: [
          'Qwen 2.5 Coder 14B: beste Python- und TypeScript-Benchmark-Scores',
          'DeepSeek Coder V2: breitere Abdeckung von Programmiersprachen',
          'Beide laufen auf RTX 3060 12 GB mit Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B erzielt 78,4 % auf HumanEval und 73,2 % auf MBPP — 3–5 Punkte höher als DeepSeek Coder 14B auf beiden Benchmarks',
          'DeepSeek Coder V2 (MoE-Architektur) deckt mehr Programmiersprachen ab und übertrifft bei Rust, Go und C++ spezifisch',
          'Beide Modelle benötigen ~10 GB VRAM bei Q4_K_M, laufen mit 14–18 tok/s auf RTX 3060 12 GB und verhalten sich identisch beim VRAM-Budget',
          'Für Python- oder TypeScript-Arbeit Qwen 2.5 Coder bevorzugen; bei mehrsprachigen Projekten DeepSeek Coder in Betracht ziehen',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder führt bei Python- und TypeScript-Benchmarks',
        content: [
          '<strong>Auf HumanEval erzielt Qwen 2.5 Coder 14B 78,4 % gegenüber 75,1 % für DeepSeek Coder 14B — ein Vorsprung von 3,3 Punkten, der über mehrere Durchläufe konsistent ist und echte Unterschiede in der Python-Vervollständigungsqualität widerspiegelt.</strong> Auf MBPP (einem breiteren Code-Benchmark) ist der Vorsprung ähnlich: Qwen 73,2 % versus DeepSeek 68,9 %.',
          'Qwen 2.5 Coder wurde auf einem Datensatz mit einem geschätzten Anteil von 45 % Python- und JavaScript/TypeScript-Inhalten trainiert. Diese hohe Konzentration von Mainstream-Sprachen-Daten erklärt den Vorsprung auf den Benchmarks, die die meisten Web- und Data-Science-Entwickler interessieren.',
          'DeepSeek Coder 14B ist bei TypeScript-spezifischen Testsuiten in einigen Auswertungen mit Qwen 2.5 Coder gleichauf oder leicht vorne. Der Unterschied ist so gering, dass Teampräferenz oder bestehende Tool-Integration oft wichtiger sind als reine Benchmark-Werte.',
        ],
        columns: ['Modell', 'HumanEval', 'MBPP', 'VRAM (Q4_K_M)'],
        rows: [
          { 'Modell': 'Qwen 2.5 Coder 14B', 'HumanEval': '78,4 %', 'MBPP': '73,2 %', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'Modell': 'DeepSeek Coder 14B', 'HumanEval': '75,1 %', 'MBPP': '68,9 %', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'DeepSeek Coder deckt mehr Sprachen ab',
        content: [
          'DeepSeek Coder V2 verwendet eine Mixture-of-Experts-Architektur, die ihm eine breitere Sprachabdeckung pro aktivem Parameter-Budget ermöglicht. <strong>Bei Rust-, Go- und C++-Benchmarks übertrifft DeepSeek Coder V2 Qwen 2.5 Coder 14B um 4–8 Prozentpunkte.</strong> Bei Projekten mit Systemprogrammierung oder sprachübergreifenden Codebasen ist DeepSeek Coder die leistungsfähigere Wahl.',
          'Beide Modelle unterstützen Fill-in-the-Middle (FIM)-Prompting für IDE-ähnliche Inline-Vervollständigung. Die instruction-tuned Versionen ("instruct"-Varianten) über Ollama unterstützen Chat-Style Code-Generierung mit Erläuterungen. Antwortstil und Ausführlichkeit unterscheiden sich: Qwen tendiert zu kürzeren, knapperen Vervollständigungen, während DeepSeek Coder standardmäßig erklärende Kommentare generiert.',
          'Einen vollständigen Vergleich von Coding-Modellen der 14B-Klasse einschließlich VRAM-Anforderungen nach GPU finden Sie im <a href="/de/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">Leitfaden für die besten 14B-Modelle für Coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Qwen vs. DeepSeek Coder',
        faqs: [
          {
            q: 'Welches Modell eignet sich besser für SQL-Generierung — Qwen Coder oder DeepSeek Coder?',
            a: 'Auf Spider- und BIRD-SQL-Benchmarks liegen Qwen 2.5 Coder 14B und DeepSeek Coder 14B innerhalb von 2 Punkten. Beide sind vernünftige Optionen für SQL-Aufgaben und übertreffen nicht-spezialisierte 14B-Modelle bei der SQL-Generierung deutlich.',
          },
          {
            q: 'Kann ich Qwen 2.5 Coder oder DeepSeek Coder auf 8 GB VRAM betreiben?',
            a: 'Nicht bei 14B Q4_K_M — beide benötigen ~10 GB. Für 8 GB VRAM verwenden Sie Qwen 2.5 Coder 7B Q4_K_M (~5 GB VRAM) oder DeepSeek Coder 7B Q4_K_M. Der 7B Qwen Coder erzielt 72,1 % auf HumanEval — immer noch deutlich über generischen 7B-Modellen.',
          },
          {
            q: 'Unterstützt Qwen 2.5 Coder kontextsensitive Code-Vervollständigung mit Projektdateien?',
            a: 'Ja. Beide Modelle unterstützen Prompts von bis zu 128k Tokens, was ausreicht, um vollständigen Projektkontext einzubeziehen. Die Qualität der Mehrfachdateien-Vervollständigung hängt mehr davon ab, wie Sie den Prompt strukturieren, als davon, welches Modell Sie verwenden. Empfehlungen zur Einrichtung finden Sie unter <a href="/de/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">bestes lokales Coding-LLM für 12 GB VRAM</a>.',
          },
          {
            q: 'Gibt es einen bedeutenden Qualitätsunterschied zwischen Qwen Coder und DeepSeek Coder bei Code-Review-Aufgaben?',
            a: 'Für Code-Review (Bugs identifizieren, Refactoring vorschlagen, Logik erklären) performen beide Modelle ähnlich — innerhalb der Variationsbreite von Prompt-Formulierungen. Die HumanEval- und MBPP-Lücken spiegeln eher Vervollständigungsqualität als Review-Qualität wider. Evaluieren Sie beide an einer Probe Ihrer spezifischen Codebasis, wenn dies Ihr primärer Anwendungsfall ist.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'Qwen Coder vs DeepSeek Coder : lequel est le meilleur ?',
    seoTitle: 'Qwen Coder vs DeepSeek Coder ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder gagne sur Python et TypeScript. DeepSeek Coder offre une prise en charge plus large des langages. Les deux nécessitent ~10 Go de VRAM en 14B Q4. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Qwen Coder vs DeepSeek Coder : lequel est le meilleur ?',
        answer: 'Qwen 2.5 Coder gagne pour Python et TypeScript. DeepSeek Coder V2 a une prise en charge plus large des langages. Les deux nécessitent ~10 Go de VRAM en 14B Q4. Pour la plupart des développeurs, Qwen 2.5 Coder est le meilleur choix par défaut.',
        bullets: [
          'Qwen 2.5 Coder 14B : meilleurs scores Python et TypeScript',
          'DeepSeek Coder V2 : couverture plus large des langages de programmation',
          'Les deux tournent sur RTX 3060 12 Go en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B obtient 78,4 % sur HumanEval et 73,2 % sur MBPP — 3 à 5 points de plus que DeepSeek Coder 14B sur les deux benchmarks',
          'DeepSeek Coder V2 (architecture MoE) couvre plus de langages de programmation et surpasse sur Rust, Go et C++ spécifiquement',
          'Les deux modèles nécessitent ~10 Go de VRAM en Q4_K_M, tournent à 14–18 tok/s sur RTX 3060 12 Go et se comportent de manière identique sur le budget VRAM',
          'Pour le travail en Python ou TypeScript, préférer Qwen 2.5 Coder ; pour les projets polyglotte avec de nombreux langages, envisager DeepSeek Coder',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder en tête sur les benchmarks Python et TypeScript',
        content: [
          '<strong>Sur HumanEval, Qwen 2.5 Coder 14B obtient 78,4 % contre 75,1 % pour DeepSeek Coder 14B — un écart de 3,3 points cohérent sur plusieurs exécutions, reflétant des différences réelles de qualité de complétion Python.</strong> Sur MBPP (un benchmark de code plus large), l\'écart est similaire : Qwen 73,2 % contre DeepSeek 68,9 %.',
          'Qwen 2.5 Coder a été entraîné sur un jeu de données contenant environ 45 % de contenu Python et JavaScript/TypeScript. Cette forte concentration de données sur les langages dominants explique son avantage sur les benchmarks qui intéressent la plupart des développeurs web et data science.',
          'DeepSeek Coder 14B égale ou dépasse légèrement Qwen 2.5 Coder sur des suites de tests TypeScript spécifiques dans certaines évaluations. L\'écart est si faible que la préférence de l\'équipe ou l\'intégration des outils existants compte souvent plus que les scores bruts.',
        ],
        columns: ['Modèle', 'HumanEval', 'MBPP', 'VRAM (Q4_K_M)'],
        rows: [
          { 'Modèle': 'Qwen 2.5 Coder 14B', 'HumanEval': '78,4 %', 'MBPP': '73,2 %', 'VRAM (Q4_K_M)': '~10 Go' },
          { 'Modèle': 'DeepSeek Coder 14B', 'HumanEval': '75,1 %', 'MBPP': '68,9 %', 'VRAM (Q4_K_M)': '~10 Go' },
        ],
      },
      body2: {
        title: 'DeepSeek Coder couvre davantage de langages',
        content: [
          'DeepSeek Coder V2 utilise une architecture Mixture-of-Experts, qui lui offre une couverture linguistique plus large par budget de paramètres actifs. <strong>Sur les benchmarks Rust, Go et C++, DeepSeek Coder V2 surpasse Qwen 2.5 Coder 14B de 4 à 8 points de pourcentage.</strong> Pour les projets impliquant de la programmation systèmes ou des bases de code multi-langages, DeepSeek Coder est le choix le plus capable.',
          'Les deux modèles prennent en charge le prompting fill-in-the-middle (FIM) pour la complétion inline de type IDE. Les versions instruction-tuned (variantes "instruct") disponibles via Ollama permettent la génération de code en style chat avec explications. Style de réponse et verbosité diffèrent : Qwen tend vers des complétions plus courtes et concises, tandis que DeepSeek Coder génère davantage de commentaires explicatifs par défaut.',
          'Pour une comparaison complète des modèles de coding de la classe 14B incluant les exigences VRAM par GPU, consultez le <a href="/fr/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">guide des meilleurs modèles 14B pour le coding</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Qwen vs DeepSeek Coder',
        faqs: [
          {
            q: 'Quel modèle est meilleur pour la génération SQL — Qwen Coder ou DeepSeek Coder ?',
            a: 'Sur les benchmarks Spider et BIRD SQL, Qwen 2.5 Coder 14B et DeepSeek Coder 14B se situent à moins de 2 points l\'un de l\'autre. Les deux sont des choix raisonnables pour les tâches SQL et surpassent largement les modèles 14B non spécialisés sur la génération SQL.',
          },
          {
            q: 'Puis-je faire tourner Qwen 2.5 Coder ou DeepSeek Coder sur 8 Go de VRAM ?',
            a: 'Pas en 14B Q4_K_M — les deux nécessitent ~10 Go. Pour 8 Go de VRAM, utilisez Qwen 2.5 Coder 7B Q4_K_M (~5 Go de VRAM) ou DeepSeek Coder 7B Q4_K_M. Le Qwen Coder 7B obtient 72,1 % sur HumanEval — bien au-dessus des modèles 7B génériques.',
          },
          {
            q: 'Qwen 2.5 Coder prend-il en charge la complétion de code contextuelle avec les fichiers du projet ?',
            a: 'Oui. Les deux modèles prennent en charge des prompts jusqu\'à 128k tokens, ce qui est suffisant pour inclure le contexte complet du projet. La qualité de la complétion multi-fichiers dépend davantage de la façon dont vous structurez le prompt que du modèle choisi. Pour les recommandations de configuration, consultez le <a href="/fr/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">meilleur LLM de coding local pour 12 Go de VRAM</a>.',
          },
          {
            q: 'Y a-t-il une différence de qualité significative entre Qwen Coder et DeepSeek Coder pour les tâches de revue de code ?',
            a: 'Pour la revue de code (identifier des bugs, suggérer des refactorisations, expliquer la logique), les deux modèles performent de manière similaire — dans la marge de variance de formulation des prompts. Les écarts HumanEval et MBPP reflètent davantage la qualité de complétion que la qualité de revue. Évaluez les deux sur un échantillon de votre base de code spécifique si c\'est votre cas d\'usage principal.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'Qwen Coder対DeepSeek Coder：どちらが優れているか？',
    seoTitle: 'Qwen Coder対DeepSeek Coder比較 | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 CoderはPythonとTypeScriptで勝り。DeepSeek Coderはより広い言語サポート。両者とも14B Q4で~10 GB VRAM。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Qwen Coder対DeepSeek Coder：どちらが優れているか？',
        answer: 'Qwen 2.5 CoderはPythonとTypeScriptで勝ります。DeepSeek Coder V2はより広い言語サポートを持ちます。両者とも14B Q4で~10 GB VRAMが必要です。ほとんどの開発者にはQwen 2.5 Coderが優れたデフォルトです。',
        bullets: [
          'Qwen 2.5 Coder 14B：PythonとTypeScriptのベンチマークスコアが最高',
          'DeepSeek Coder V2：より広いプログラミング言語カバレッジ',
          '両者ともQ4_K_MでRTX 3060 12 GBで動作',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14BはHumanEvalで78.4%、MBPPで73.2%を記録 — 両ベンチマークでDeepSeek Coder 14Bより3〜5ポイント高い',
          'DeepSeek Coder V2（MoEアーキテクチャ）はより多くのプログラミング言語をカバーし、RustとGoとC++で特に優位',
          '両モデルともQ4_K_Mで~10 GB VRAMが必要、RTX 3060 12 GBで14〜18 tok/s、VRAM予算での動作は同等',
          'PythonまたはTypeScript作業にはQwen 2.5 Coderを優先、多言語プロジェクトではDeepSeek Coderを検討',
        ],
      },
      body1: {
        title: 'Qwen 2.5 CoderがPythonとTypeScriptのベンチマークでリード',
        content: [
          '<strong>HumanEvalでQwen 2.5 Coder 14Bは78.4%に対しDeepSeek Coder 14Bは75.1% — 3.3ポイントの差は複数回の実行にわたり一貫しており、Pythonの補完品質に実際の違いがあることを示しています。</strong> MBPP（より広範なコードベンチマーク）でも差は類似：Qwen 73.2%対DeepSeek 68.9%。',
          'Qwen 2.5 Coderはデータセットの推定45%がPythonとJavaScript/TypeScriptのコンテンツで構成されるデータでトレーニングされました。このメインストリーム言語データの高い集中度が、ほとんどのウェブおよびデータサイエンス開発者が関心を持つベンチマークでの優位性を説明しています。',
          'DeepSeek Coder 14Bは一部の評価でTypeScript固有のテストスイートでQwen 2.5 Coderと同等かわずかに上回ります。差は非常に小さいため、チームの好みや既存ツールの統合が純粋なベンチマークスコアより重要になることが多いです。',
        ],
        columns: ['モデル', 'HumanEval', 'MBPP', 'VRAM (Q4_K_M)'],
        rows: [
          { 'モデル': 'Qwen 2.5 Coder 14B', 'HumanEval': '78.4%', 'MBPP': '73.2%', 'VRAM (Q4_K_M)': '~10 GB' },
          { 'モデル': 'DeepSeek Coder 14B', 'HumanEval': '75.1%', 'MBPP': '68.9%', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'DeepSeek Coderはより多くの言語をカバー',
        content: [
          'DeepSeek Coder V2はMixture-of-Expertsアーキテクチャを使用し、アクティブパラメータ予算あたりのより広い言語カバレッジを提供します。<strong>RustとGoとC++のベンチマークでDeepSeek Coder V2はQwen 2.5 Coder 14Bを4〜8パーセントポイント上回ります。</strong> システムプログラミングや複数言語のコードベースを含むプロジェクトでは、DeepSeek Coderがより有能な選択です。',
          '両モデルともIDE形式のインライン補完のためのFill-in-the-Middle（FIM）プロンプティングをサポートします。Ollama経由で利用可能なインストラクションチューニング版（"instruct"バリアント）は説明付きのチャット形式のコード生成をサポートします。応答スタイルと冗長性が異なります：Qwenは短くコンパクトな補完に傾く一方、DeepSeek Coderはデフォルトで説明的なコメントをより多く生成します。',
          'GPUごとのVRAM要件を含む14Bクラスのコーディングモデルの全比較については、<a href="/ja/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">コーディング用最適14Bモデルガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Qwen対DeepSeek Coderに関するよくある質問',
        faqs: [
          {
            q: 'SQL生成にはQwen CoderとDeepSeek Coderどちらが優れていますか？',
            a: 'SpiderとBIRD SQLのベンチマークでは、Qwen 2.5 Coder 14BとDeepSeek Coder 14Bは2ポイント以内です。SQLタスクにはどちらも合理的な選択で、両者とも非専門の14Bモデルを大幅に上回ります。',
          },
          {
            q: 'Qwen 2.5 CoderまたはDeepSeek Coderを8 GB VRAMで動かせますか？',
            a: '14B Q4_K_Mでは不可 — 両者とも~10 GBが必要です。8 GB VRAMにはQwen 2.5 Coder 7B Q4_K_M（~5 GB VRAM）またはDeepSeek Coder 7B Q4_K_Mを使用してください。7B Qwen CoderはHumanEvalで72.1%を記録 — 汎用7Bモデルを大幅に上回ります。',
          },
          {
            q: 'Qwen 2.5 Coderはプロジェクトファイルによるコンテキスト対応のコード補完をサポートしていますか？',
            a: 'はい。両モデルとも128kトークンまでのプロンプトをサポートしており、完全なプロジェクトコンテキストを含めるのに十分です。複数ファイル補完の品質はどのモデルを使うかよりプロンプトの構造化方法に依存します。設定の推奨については<a href="/ja/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM向け最適ローカルコーディングLLM</a>をご覧ください。',
          },
          {
            q: 'コードレビュータスクでQwen CoderとDeepSeek Coderに意味のある品質差はありますか？',
            a: 'コードレビュー（バグ特定、リファクタリング提案、ロジック説明）では、両モデルともプロンプト表現の変動範囲内で類似した性能を発揮します。HumanEvalとMBPPの差はレビュー品質より補完品質を反映しています。これが主なユースケースの場合は、特定のコードベースのサンプルで両方を評価してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: 'Qwen Coder 对比 DeepSeek Coder：哪个更好？',
    seoTitle: 'Qwen Coder 对比 DeepSeek Coder？ | Prompt Bites | PromptQuorum',
    metaDescription: 'Qwen 2.5 Coder 在 Python 和 TypeScript 上更胜一筹。DeepSeek Coder 支持更广泛的编程语言。两者14B Q4 下均需约10 GB VRAM。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'Qwen Coder 对比 DeepSeek Coder：哪个更好？',
        answer: 'Qwen 2.5 Coder 在 Python 和 TypeScript 上更胜一筹。DeepSeek Coder V2 支持更广泛的编程语言。两者在14B Q4 下均需约10 GB VRAM。对大多数开发者而言，Qwen 2.5 Coder 是更好的默认选择。',
        bullets: [
          'Qwen 2.5 Coder 14B：Python 和 TypeScript 基准测试最高分',
          'DeepSeek Coder V2：更广泛的编程语言覆盖',
          '两者均可在 RTX 3060 12 GB 上以 Q4_K_M 运行',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Qwen 2.5 Coder 14B 在 HumanEval 得78.4%，MBPP 得73.2%——两项基准均比 DeepSeek Coder 14B 高出3–5分',
          'DeepSeek Coder V2（MoE架构）覆盖更多编程语言，在 Rust、Go 和 C++ 上具体领先',
          '两款模型在 Q4_K_M 下均需约10 GB VRAM，在 RTX 3060 12 GB 上运行14–18 tok/s，VRAM 预算行为相同',
          'Python 或 TypeScript 工作首选 Qwen 2.5 Coder；多语言项目考虑 DeepSeek Coder',
        ],
      },
      body1: {
        title: 'Qwen 2.5 Coder 在 Python 和 TypeScript 基准测试上领跑',
        content: [
          '<strong>在 HumanEval 上，Qwen 2.5 Coder 14B 得78.4%，DeepSeek Coder 14B 得75.1%——3.3分的差距在多次运行中保持稳定，反映了 Python 补全质量的真实差异。</strong>在 MBPP（更广泛的代码基准测试）上差距相近：Qwen 73.2% 对 DeepSeek 68.9%。',
          'Qwen 2.5 Coder 在训练数据集中约45%为 Python 和 JavaScript/TypeScript 内容。这一主流语言数据的高比例解释了它在大多数 Web 和数据科学开发者关注的基准测试上的优势。',
          'DeepSeek Coder 14B 在某些评估的 TypeScript 专项测试套件上与 Qwen 2.5 Coder 持平或略高。差距足够小，团队偏好或现有工具集成往往比原始基准分数更重要。',
        ],
        columns: ['模型', 'HumanEval', 'MBPP', 'VRAM (Q4_K_M)'],
        rows: [
          { '模型': 'Qwen 2.5 Coder 14B', 'HumanEval': '78.4%', 'MBPP': '73.2%', 'VRAM (Q4_K_M)': '~10 GB' },
          { '模型': 'DeepSeek Coder 14B', 'HumanEval': '75.1%', 'MBPP': '68.9%', 'VRAM (Q4_K_M)': '~10 GB' },
        ],
      },
      body2: {
        title: 'DeepSeek Coder 覆盖更多编程语言',
        content: [
          'DeepSeek Coder V2 采用 Mixture-of-Experts 架构，每活跃参数预算可覆盖更广泛的语言。<strong>在 Rust、Go 和 C++ 基准测试上，DeepSeek Coder V2 比 Qwen 2.5 Coder 14B 高出4–8个百分点。</strong>涉及系统编程或跨语言代码库的项目中，DeepSeek Coder 是更有能力的选择。',
          '两款模型都支持 Fill-in-the-Middle（FIM）提示词用于 IDE 风格的内联补全。通过 Ollama 提供的指令微调版（"instruct"变体）支持带解释的聊天式代码生成。响应风格和冗长程度有所不同：Qwen 倾向于更短、更紧凑的补全，而 DeepSeek Coder 默认生成更多解释性注释。',
          '有关14B级别编程模型（包括各GPU的VRAM要求）的完整对比，请参阅<a href="/zh/prompt-bites/best-14b-models-coding" class="text-primary hover:underline">编程最佳14B模型指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Qwen 对比 DeepSeek Coder 的快速解答',
        faqs: [
          {
            q: 'SQL 生成哪个模型更好——Qwen Coder 还是 DeepSeek Coder？',
            a: '在 Spider 和 BIRD SQL 基准测试上，Qwen 2.5 Coder 14B 和 DeepSeek Coder 14B 相差不超过2分。两者都是 SQL 任务的合理选择，在 SQL 生成上均大幅优于非专用14B模型。',
          },
          {
            q: '可以在8 GB VRAM 上运行 Qwen 2.5 Coder 或 DeepSeek Coder 吗？',
            a: '14B Q4_K_M 下不行——两者均需约10 GB。8 GB VRAM 请使用 Qwen 2.5 Coder 7B Q4_K_M（约5 GB VRAM）或 DeepSeek Coder 7B Q4_K_M。7B Qwen Coder 在 HumanEval 得72.1%——仍远高于通用7B模型。',
          },
          {
            q: 'Qwen 2.5 Coder 支持带项目文件的上下文感知代码补全吗？',
            a: '支持。两款模型都支持最多128k token 的提示词，足以包含完整的项目上下文。多文件补全的质量更多取决于提示词结构而非使用哪款模型。配置建议请参阅<a href="/zh/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM 最佳本地编程 LLM</a>。',
          },
          {
            q: '在代码审查任务上，Qwen Coder 和 DeepSeek Coder 有显著质量差异吗？',
            a: '代码审查任务（识别 bug、建议重构、解释逻辑）上，两款模型表现相近——在提示词措辞变动范围内。HumanEval 和 MBPP 上的差距更多反映补全质量而非审查质量。若这是主要用途，建议在您具体代码库的样本上分别评估两款模型。',
          },
        ],
      },
    },
  },
}
