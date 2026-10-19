// Per-language copy for the Prompt Engineering hub on the shared hub template (see hub-template.tsx).
// Plain data, no JSX. Counts are never typed here: the adapter fills {tiles} / {pages}.
// Strings the old hub already had (hero title and intro, theme labels, callouts, FAQs) stay in
// hub-content.ts and are reused as they are. Generic section strings (jump bar, "recently updated",
// "go deeper" heading, reviewed badge, explore intro) are shared with the Local LLMs hub copy.
// Style per docs/geo-translation.md: DE Sie-form, ES tu, FR vous, JA desu/masu, PT voce (pt-BR),
// AR MSA with Latin technical terms, KO formal -seumnida. Product and framework names stay Latin.

import type { Lang } from '@/lib/i18n/constants'

export const PE_THEME_IDS = [
  'fundamentals',
  'frameworks',
  'techniques',
  'use-topics',
  'policy',
  'tools-platforms',
  'evaluation-reliability',
  'team-governance',
  'workflows-automation',
] as const

export type PeThemeId = (typeof PE_THEME_IDS)[number]

export const PE_DEEPER_SLUGS = ['local-llms', 'smart-home', 'balcony-solar', 'power-local-llm', 'prompt-bites'] as const
export type PeDeeperSlug = (typeof PE_DEEPER_SLUGS)[number]

export interface PeHubTemplateCopy {
  pill: string
  /** Must appear verbatim in HUB_HERO_TITLE[lang]. */
  titleHighlight: string
  primaryCta: string
  secondaryCta: string
  flow: { title: string; caption: string; ariaLabel: string; framework: string; technique: string; evaluation: string }
  start: { title: string; intro: string; goals: [string, string, string, string, string] }
  tileSummary: Record<PeThemeId, string>
  why: { title: string; intro: string; takeaway: string }
  /** Line under the Local LLMs card in "Go deeper" (the other four reuse the Local LLMs hub strings). */
  localLlmsLine: string
}

export const PE_HUB_TEMPLATE_COPY: Partial<Record<Lang, PeHubTemplateCopy>> = {
  en: {
    pill: 'Prompt Engineering',
    titleHighlight: 'Prompt Engineering',
    primaryCta: 'Start with the basics',
    secondaryCta: 'See all topics',
    flow: {
      title: 'How it fits together',
      caption: 'Diagram: from a prompt framework through a technique to a tested result.',
      ariaLabel: 'Diagram: a framework such as CO-STAR, CRAFT or RTF structures the prompt, a technique such as chain-of-thought, few-shot or RAG improves it, and evaluation with Promptfoo or Braintrust checks the result',
      framework: 'Framework',
      technique: 'Technique',
      evaluation: 'Evaluation',
    },
    start: {
      title: 'Start here',
      intro: 'The questions readers ask first, each with the guide to open. Pick the one that fits you.',
      goals: [
        'I am new and want to understand the basics',
        'I want a reliable structure for every prompt',
        'My AI gets multi-step problems wrong',
        'I need to know whether my prompt is actually good',
        'I want to protect my prompts from misuse',
      ],
    },
    tileSummary: {
      fundamentals: 'How LLMs work, tokens, temperature, context windows and model choice.',
      frameworks: 'CO-STAR, CRAFT, RTF and other templates for repeatable prompts.',
      techniques: 'Chain-of-thought, few-shot, RAG, prompt chaining and more.',
      'use-topics': 'Prompts for specific industries and output types.',
      policy: 'AI regulation, data residency and what they mean for your prompts.',
      'tools-platforms': 'Prompt IDEs, testing tools and platforms compared.',
      'evaluation-reliability': 'Measure prompt quality, test across models, ship reliably.',
      'team-governance': 'Version control, documentation, review and security for teams.',
      'workflows-automation': 'Structured outputs and repeatable automated prompt workflows.',
    },
    why: {
      title: 'Practical advice',
      intro: 'Three rules of thumb from the guides: where to start, how many tools you need, and why prompts fail without a sound.',
      takeaway: '**In short:** a prompt that names the role, context, format and examples beats a vague one, and only testing across models shows whether it holds.',
    },
    localLlmsLine: 'Run models on your own computer.',
  },
  de: {
    pill: 'Prompt Engineering',
    titleHighlight: 'Prompt Engineering',
    primaryCta: 'Mit den Grundlagen starten',
    secondaryCta: 'Alle Themen ansehen',
    flow: {
      title: 'So hängt es zusammen',
      caption: 'Schema: vom Prompt-Framework über eine Technik zum getesteten Ergebnis.',
      ariaLabel: 'Schema: ein Framework wie CO-STAR, CRAFT oder RTF strukturiert den Prompt, eine Technik wie Chain-of-Thought, Few-Shot oder RAG verbessert ihn, und die Evaluation mit Promptfoo oder Braintrust prüft das Ergebnis',
      framework: 'Framework',
      technique: 'Technik',
      evaluation: 'Evaluation',
    },
    start: {
      title: 'Hier starten',
      intro: 'Die Fragen, die Leser zuerst stellen, jeweils mit der passenden Anleitung. Wählen Sie, was zu Ihnen passt.',
      goals: [
        'Ich bin neu und will die Grundlagen verstehen',
        'Ich will eine verlässliche Struktur für jeden Prompt',
        'Meine KI scheitert an mehrstufigen Aufgaben',
        'Ich will wissen, ob mein Prompt wirklich gut ist',
        'Ich will meine Prompts vor Missbrauch schützen',
      ],
    },
    tileSummary: {
      fundamentals: 'Wie LLMs funktionieren, Tokens, Temperatur, Kontextfenster und Modellwahl.',
      frameworks: 'CO-STAR, CRAFT, RTF und weitere Vorlagen für wiederholbare Prompts.',
      techniques: 'Chain-of-Thought, Few-Shot, RAG, Prompt-Chaining und mehr.',
      'use-topics': 'Prompts für bestimmte Branchen und Ausgabeformate.',
      policy: 'KI-Regulierung, Datenresidenz und was sie für Ihre Prompts bedeuten.',
      'tools-platforms': 'Prompt-IDEs, Testwerkzeuge und Plattformen im Vergleich.',
      'evaluation-reliability': 'Prompt-Qualität messen, modellübergreifend testen, zuverlässig einsetzen.',
      'team-governance': 'Versionskontrolle, Dokumentation, Review und Sicherheit für Teams.',
      'workflows-automation': 'Strukturierte Ausgaben und wiederholbare automatisierte Prompt-Workflows.',
    },
    why: {
      title: 'Praktische Hinweise',
      intro: 'Drei Faustregeln aus den Anleitungen: wo man anfängt, wie viele Tools man braucht und warum Prompts lautlos scheitern.',
      takeaway: '**Kurz gesagt:** Ein Prompt, der Rolle, Kontext, Format und Beispiele nennt, schlägt einen vagen, und nur Tests über mehrere Modelle zeigen, ob er trägt.',
    },
    localLlmsLine: 'Modelle auf dem eigenen Rechner betreiben.',
  },
  fr: {
    pill: 'Prompt Engineering',
    titleHighlight: 'Prompt Engineering',
    primaryCta: 'Commencer par les bases',
    secondaryCta: 'Voir tous les sujets',
    flow: {
      title: 'Comment tout s\'articule',
      caption: 'Schéma : d\'un framework de prompt à un résultat testé, en passant par une technique.',
      ariaLabel: 'Schéma : un framework comme CO-STAR, CRAFT ou RTF structure le prompt, une technique comme le chain-of-thought, le few-shot ou le RAG l\'améliore, et l\'évaluation avec Promptfoo ou Braintrust vérifie le résultat',
      framework: 'Framework',
      technique: 'Technique',
      evaluation: 'Évaluation',
    },
    start: {
      title: 'Commencer ici',
      intro: 'Les questions que les lecteurs posent en premier, chacune avec le guide à ouvrir. Choisissez celle qui vous correspond.',
      goals: [
        'Je débute et je veux comprendre les bases',
        'Je veux une structure fiable pour chaque prompt',
        'Mon IA se trompe sur les problèmes en plusieurs étapes',
        'Je veux savoir si mon prompt est vraiment bon',
        'Je veux protéger mes prompts contre les abus',
      ],
    },
    tileSummary: {
      fundamentals: 'Fonctionnement des LLMs, tokens, température, fenêtres de contexte et choix du modèle.',
      frameworks: 'CO-STAR, CRAFT, RTF et autres modèles pour des prompts reproductibles.',
      techniques: 'Chain-of-thought, few-shot, RAG, chaînage de prompts et plus.',
      'use-topics': 'Des prompts pour des secteurs et des types de sortie précis.',
      policy: 'Réglementation de l\'IA, résidence des données et leurs effets sur vos prompts.',
      'tools-platforms': 'IDE de prompts, outils de test et plateformes comparés.',
      'evaluation-reliability': 'Mesurer la qualité des prompts, tester entre modèles, déployer en confiance.',
      'team-governance': 'Gestion de versions, documentation, revue et sécurité pour les équipes.',
      'workflows-automation': 'Sorties structurées et flux de prompts automatisés et reproductibles.',
    },
    why: {
      title: 'Conseils pratiques',
      intro: 'Trois règles tirées des guides : par où commencer, combien d\'outils il faut et pourquoi les prompts échouent sans bruit.',
      takeaway: '**En bref :** un prompt qui précise le rôle, le contexte, le format et des exemples vaut mieux qu\'un prompt vague, et seul un test sur plusieurs modèles montre s\'il tient.',
    },
    localLlmsLine: 'Faire tourner des modèles sur votre propre ordinateur.',
  },
  ja: {
    pill: 'プロンプトエンジニアリング',
    titleHighlight: 'プロンプトエンジニアリング',
    primaryCta: '基礎から始める',
    secondaryCta: 'すべてのトピックを見る',
    flow: {
      title: '全体のつながり',
      caption: '図：プロンプトのフレームワークから、手法を経て、検証済みの結果まで。',
      ariaLabel: '図：CO-STAR、CRAFT、RTFなどのフレームワークがプロンプトを構造化し、チェーン・オブ・ソート、フューショット、RAGなどの手法が改善し、PromptfooやBraintrustによる評価が結果を確認する',
      framework: 'フレームワーク',
      technique: '手法',
      evaluation: '評価',
    },
    start: {
      title: 'ここから始める',
      intro: '読者が最初に抱く疑問と、最初に開くべきガイドです。当てはまるものを選んでください。',
      goals: [
        '初めてなので基本を理解したい',
        'どのプロンプトにも使える確かな型がほしい',
        'AIが複数ステップの問題で間違える',
        '自分のプロンプトが本当に良いか知りたい',
        'プロンプトを悪用から守りたい',
      ],
    },
    tileSummary: {
      fundamentals: 'LLMの仕組み、トークン、温度、コンテキストウィンドウ、モデル選び。',
      frameworks: 'CO-STAR、CRAFT、RTFなど、再現できるプロンプトのテンプレート。',
      techniques: 'チェーン・オブ・ソート、フューショット、RAG、プロンプトチェーニングなど。',
      'use-topics': '特定の業界や出力形式に向けたプロンプト。',
      policy: 'AI規制とデータ所在地、それがプロンプトに与える影響。',
      'tools-platforms': 'プロンプトIDE、テストツール、プラットフォームの比較。',
      'evaluation-reliability': 'プロンプトの品質を測り、モデル間でテストし、確実に運用する。',
      'team-governance': 'チーム向けのバージョン管理、ドキュメント、レビュー、セキュリティ。',
      'workflows-automation': '構造化出力と、繰り返し使える自動化プロンプトのワークフロー。',
    },
    why: {
      title: '実践のヒント',
      intro: 'ガイドから3つの目安：どこから始めるか、ツールはいくつ必要か、なぜプロンプトは静かに失敗するのか。',
      takeaway: '**要点：** 役割・文脈・形式・例を示したプロンプトは曖昧なものより優れ、それが通用するかは複数のモデルでテストして初めて分かります。',
    },
    localLlmsLine: '自分のパソコンでモデルを動かす。',
  },
  zh: {
    pill: '提示词工程',
    titleHighlight: 'Prompt工程',
    primaryCta: '从基础开始',
    secondaryCta: '查看全部主题',
    flow: {
      title: '整体如何衔接',
      caption: '示意图：从提示词框架，经由技术，到经过测试的结果。',
      ariaLabel: '示意图：CO-STAR、CRAFT、RTF等框架为提示词建立结构，思维链、少样本、RAG等技术改进提示词，再用Promptfoo或Braintrust评估来检验结果',
      framework: '框架',
      technique: '技术',
      evaluation: '评估',
    },
    start: {
      title: '从这里开始',
      intro: '读者最先提出的问题，每个问题都附上要打开的指南。选择最适合您的一个。',
      goals: [
        '我是新手，想先理解基础',
        '我想为每个提示词找到可靠的结构',
        'AI在多步骤问题上总是出错',
        '我想知道自己的提示词到底好不好',
        '我想保护提示词，防止被滥用',
      ],
    },
    tileSummary: {
      fundamentals: 'LLM的工作原理、词元、温度、上下文窗口与模型选择。',
      frameworks: 'CO-STAR、CRAFT、RTF等可重复使用的提示词模板。',
      techniques: '思维链、少样本、RAG、提示词链等。',
      'use-topics': '面向特定行业和输出类型的提示词。',
      policy: 'AI监管、数据驻留及其对提示词的影响。',
      'tools-platforms': '提示词IDE、测试工具与平台对比。',
      'evaluation-reliability': '衡量提示词质量，跨模型测试，稳定上线。',
      'team-governance': '面向团队的版本控制、文档、评审与安全。',
      'workflows-automation': '结构化输出与可重复的自动化提示词工作流。',
    },
    why: {
      title: '实用建议',
      intro: '来自指南的三条经验：从哪里开始、需要几个工具，以及提示词为何会悄无声息地失败。',
      takeaway: '**简而言之：** 写明角色、上下文、格式和示例的提示词胜过含糊的提示词，而它是否可靠，只有跨多个模型测试才能知道。',
    },
    localLlmsLine: '在自己的电脑上运行模型。',
  },
  es: {
    pill: 'Prompt Engineering',
    titleHighlight: 'Prompt Engineering',
    primaryCta: 'Empezar por lo básico',
    secondaryCta: 'Ver todos los temas',
    flow: {
      title: 'Cómo encaja todo',
      caption: 'Esquema: de un framework de prompts, pasando por una técnica, a un resultado probado.',
      ariaLabel: 'Esquema: un framework como CO-STAR, CRAFT o RTF estructura el prompt, una técnica como chain-of-thought, few-shot o RAG lo mejora, y la evaluación con Promptfoo o Braintrust comprueba el resultado',
      framework: 'Framework',
      technique: 'Técnica',
      evaluation: 'Evaluación',
    },
    start: {
      title: 'Empieza aquí',
      intro: 'Las preguntas que los lectores hacen primero, cada una con la guía que debes abrir. Elige la que te corresponda.',
      goals: [
        'Soy nuevo y quiero entender lo básico',
        'Quiero una estructura fiable para cada prompt',
        'Mi IA falla en problemas de varios pasos',
        'Quiero saber si mi prompt es realmente bueno',
        'Quiero proteger mis prompts frente a abusos',
      ],
    },
    tileSummary: {
      fundamentals: 'Cómo funcionan los LLMs, tokens, temperatura, ventanas de contexto y elección de modelo.',
      frameworks: 'CO-STAR, CRAFT, RTF y otras plantillas para prompts repetibles.',
      techniques: 'Chain-of-thought, few-shot, RAG, encadenado de prompts y más.',
      'use-topics': 'Prompts para sectores y tipos de salida concretos.',
      policy: 'Regulación de la IA, residencia de datos y qué implican para tus prompts.',
      'tools-platforms': 'IDEs de prompts, herramientas de pruebas y plataformas comparadas.',
      'evaluation-reliability': 'Mide la calidad de los prompts, prueba entre modelos y despliega con confianza.',
      'team-governance': 'Control de versiones, documentación, revisión y seguridad para equipos.',
      'workflows-automation': 'Salidas estructuradas y flujos de prompts automatizados y repetibles.',
    },
    why: {
      title: 'Consejos prácticos',
      intro: 'Tres reglas de las guías: por dónde empezar, cuántas herramientas necesitas y por qué los prompts fallan sin hacer ruido.',
      takeaway: '**En resumen:** un prompt que indica rol, contexto, formato y ejemplos supera a uno vago, y solo probarlo con varios modelos demuestra si aguanta.',
    },
    localLlmsLine: 'Ejecuta modelos en tu propio ordenador.',
  },
  pt: {
    pill: 'Prompt Engineering',
    titleHighlight: 'Prompt Engineering',
    primaryCta: 'Começar pelo básico',
    secondaryCta: 'Ver todos os tópicos',
    flow: {
      title: 'Como tudo se encaixa',
      caption: 'Diagrama: de um framework de prompt, passando por uma técnica, até um resultado testado.',
      ariaLabel: 'Diagrama: um framework como CO-STAR, CRAFT ou RTF estrutura o prompt, uma técnica como chain-of-thought, few-shot ou RAG o melhora, e a avaliação com Promptfoo ou Braintrust confere o resultado',
      framework: 'Framework',
      technique: 'Técnica',
      evaluation: 'Avaliação',
    },
    start: {
      title: 'Comece aqui',
      intro: 'As perguntas que os leitores fazem primeiro, cada uma com o guia para abrir. Escolha a que combina com você.',
      goals: [
        'Sou iniciante e quero entender o básico',
        'Quero uma estrutura confiável para cada prompt',
        'Minha IA erra em problemas de várias etapas',
        'Quero saber se meu prompt é realmente bom',
        'Quero proteger meus prompts contra abusos',
      ],
    },
    tileSummary: {
      fundamentals: 'Como os LLMs funcionam, tokens, temperatura, janelas de contexto e escolha do modelo.',
      frameworks: 'CO-STAR, CRAFT, RTF e outros modelos para prompts repetíveis.',
      techniques: 'Chain-of-thought, few-shot, RAG, encadeamento de prompts e mais.',
      'use-topics': 'Prompts para setores e tipos de saída específicos.',
      policy: 'Regulação da IA, residência de dados e o que isso significa para seus prompts.',
      'tools-platforms': 'IDEs de prompts, ferramentas de teste e plataformas comparadas.',
      'evaluation-reliability': 'Meça a qualidade dos prompts, teste entre modelos e publique com confiança.',
      'team-governance': 'Controle de versões, documentação, revisão e segurança para equipes.',
      'workflows-automation': 'Saídas estruturadas e fluxos de prompts automatizados e repetíveis.',
    },
    why: {
      title: 'Dicas práticas',
      intro: 'Três regras práticas dos guias: por onde começar, de quantas ferramentas você precisa e por que os prompts falham em silêncio.',
      takeaway: '**Resumindo:** um prompt que define papel, contexto, formato e exemplos supera um prompt vago, e só testar em vários modelos mostra se ele se sustenta.',
    },
    localLlmsLine: 'Rode modelos no seu próprio computador.',
  },
  ar: {
    pill: 'هندسة التوجيهات',
    titleHighlight: 'هندسة التوجيهات',
    primaryCta: 'ابدأ بالأساسيات',
    secondaryCta: 'عرض كل المواضيع',
    flow: {
      title: 'كيف تترابط الأجزاء',
      caption: 'مخطط: من إطار التوجيه، مروراً بالتقنية، إلى نتيجة مُختبَرة.',
      ariaLabel: 'مخطط: إطار مثل CO-STAR أو CRAFT أو RTF يبني هيكل التوجيه، وتقنية مثل chain-of-thought أو few-shot أو RAG تحسّنه، والتقييم باستخدام Promptfoo أو Braintrust يتحقق من النتيجة',
      framework: 'الإطار',
      technique: 'التقنية',
      evaluation: 'التقييم',
    },
    start: {
      title: 'ابدأ من هنا',
      intro: 'الأسئلة التي يطرحها القرّاء أولاً، ومع كل سؤال الدليل الذي يجب فتحه. اختر ما يناسبك.',
      goals: [
        'أنا مبتدئ وأريد فهم الأساسيات',
        'أريد هيكلاً موثوقاً لكل توجيه',
        'يخطئ الذكاء الاصطناعي في المسائل متعددة الخطوات',
        'أريد أن أعرف هل توجيهي جيد فعلاً',
        'أريد حماية توجيهاتي من إساءة الاستخدام',
      ],
    },
    tileSummary: {
      fundamentals: 'كيف تعمل نماذج LLM، والرموز، ودرجة الحرارة، ونوافذ السياق، واختيار النموذج.',
      frameworks: 'CO-STAR وCRAFT وRTF وقوالب أخرى لتوجيهات قابلة للتكرار.',
      techniques: 'Chain-of-thought وfew-shot وRAG وسلاسل التوجيهات وغيرها.',
      'use-topics': 'توجيهات لقطاعات وأنواع مخرجات محددة.',
      policy: 'تنظيم الذكاء الاصطناعي وإقامة البيانات وما يعنيانه لتوجيهاتك.',
      'tools-platforms': 'مقارنة بيئات التوجيه وأدوات الاختبار والمنصات.',
      'evaluation-reliability': 'قياس جودة التوجيه، والاختبار عبر النماذج، والنشر بموثوقية.',
      'team-governance': 'التحكم في الإصدارات والتوثيق والمراجعة والأمان للفرق.',
      'workflows-automation': 'مخرجات منظَّمة وسير عمل توجيهات مؤتمت وقابل للتكرار.',
    },
    why: {
      title: 'نصائح عملية',
      intro: 'ثلاث قواعد من الأدلة: من أين تبدأ، وكم أداة تحتاج، ولماذا تفشل التوجيهات بصمت.',
      takeaway: '**باختصار:** التوجيه الذي يحدد الدور والسياق والصيغة والأمثلة أفضل من التوجيه الغامض، وحده الاختبار عبر عدة نماذج يُظهر ما إذا كان يصمد.',
    },
    localLlmsLine: 'شغّل النماذج على حاسوبك الخاص.',
  },
  ko: {
    pill: '프롬프트 엔지니어링',
    titleHighlight: '프롬프트 엔지니어링',
    primaryCta: '기초부터 시작하기',
    secondaryCta: '모든 주제 보기',
    flow: {
      title: '전체가 이어지는 방식',
      caption: '다이어그램: 프롬프트 프레임워크에서 기법을 거쳐 검증된 결과까지.',
      ariaLabel: '다이어그램: CO-STAR, CRAFT, RTF 같은 프레임워크가 프롬프트를 구조화하고, 연쇄 사고, 퓨샷, RAG 같은 기법이 이를 개선하며, Promptfoo나 Braintrust로 하는 평가가 결과를 확인합니다',
      framework: '프레임워크',
      technique: '기법',
      evaluation: '평가',
    },
    start: {
      title: '여기서 시작',
      intro: '독자가 가장 먼저 묻는 질문과 열어 볼 가이드입니다. 자신에게 맞는 것을 고르십시오.',
      goals: [
        '처음이라 기초를 이해하고 싶습니다',
        '모든 프롬프트에 쓸 믿을 만한 구조가 필요합니다',
        'AI가 여러 단계의 문제에서 틀립니다',
        '내 프롬프트가 정말 좋은지 알고 싶습니다',
        '프롬프트를 악용으로부터 보호하고 싶습니다',
      ],
    },
    tileSummary: {
      fundamentals: 'LLM의 작동 원리, 토큰, 온도, 문맥 창, 모델 선택.',
      frameworks: 'CO-STAR, CRAFT, RTF 등 반복 가능한 프롬프트 템플릿.',
      techniques: '연쇄 사고, 퓨샷, RAG, 프롬프트 체이닝 등.',
      'use-topics': '특정 산업과 출력 유형을 위한 프롬프트.',
      policy: 'AI 규제와 데이터 상주, 그리고 프롬프트에 미치는 영향.',
      'tools-platforms': '프롬프트 IDE, 테스트 도구, 플랫폼 비교.',
      'evaluation-reliability': '프롬프트 품질 측정, 모델 간 테스트, 안정적 배포.',
      'team-governance': '팀을 위한 버전 관리, 문서화, 검토, 보안.',
      'workflows-automation': '구조화된 출력과 반복 가능한 자동화 프롬프트 워크플로.',
    },
    why: {
      title: '실전 조언',
      intro: '가이드에서 뽑은 세 가지 원칙: 어디서 시작할지, 도구가 몇 개 필요한지, 프롬프트가 왜 소리 없이 실패하는지.',
      takeaway: '**요약:** 역할, 문맥, 형식, 예시를 밝힌 프롬프트가 모호한 프롬프트보다 낫고, 그것이 통하는지는 여러 모델에서 테스트해야만 알 수 있습니다.',
    },
    localLlmsLine: '내 컴퓨터에서 모델을 실행합니다.',
  },
}
