'use client'

import Link from 'next/link'
import { themes, type PETheme } from '@/lib/prompt-engineering/themes'
import { peContent } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'

function navHref(path: string, lang: string) {
  return lang === 'en' ? path : `${path}?lang=${lang}`
}

const HUB_HERO_TITLE: Record<string, string> = {
  en: 'The complete guide to writing better AI prompts.',
  de: 'Der vollständige Leitfaden für bessere KI-Prompts.',
  fr: 'Le guide complet pour écrire de meilleurs prompts IA.',
  ja: 'より良いAIプロンプトを書くための完全ガイド。',
  zh: '编写更好AI提示词的完整指南。',
}

const HUB_LEAD_ANSWER: Record<string, string> = {
  en: 'Prompt engineering is the practice of designing inputs to AI language models — specifying role, context, constraints, output format, and examples — to produce accurate, consistent results. In 2026, with 25+ commercial and open-source models available, prompt design is the single highest-leverage skill for getting reliable value from AI.',
  de: 'Prompt Engineering ist die Praxis, Eingaben für KI-Sprachmodelle zu strukturieren — Rolle, Kontext, Einschränkungen, Ausgabeformat und Beispiele — um genaue, konsistente Ergebnisse zu erzielen. Im Jahr 2026, mit mehr als 25 verfügbaren Modellen, ist Prompt-Design die wirkungsvollste Fähigkeit, um zuverlässigen Wert aus KI zu gewinnen.',
  fr: 'Le prompt engineering est la pratique qui consiste à concevoir les entrées des modèles de langage IA — en spécifiant rôle, contexte, contraintes, format de sortie et exemples — pour produire des résultats précis et cohérents. En 2026, avec plus de 25 modèles disponibles, la conception de prompts est la compétence la plus rentable pour tirer une valeur fiable de l\'IA.',
  ja: 'プロンプトエンジニアリングとは、AIの言語モデルへの入力（役割・文脈・制約・出力フォーマット・例示）を設計し、正確で一貫した結果を生み出す実践です。2026年、25以上のモデルが利用可能な現在、プロンプト設計はAIから信頼性の高い価値を引き出すための最重要スキルです。',
  zh: '提示词工程是设计AI语言模型输入的实践——指定角色、上下文、约束条件、输出格式和示例——以产生准确、一致的结果。2026年，随着25个以上模型的可用，提示词设计是从AI获取可靠价值的最高效技能。',
}

const HUB_HERO_DESC: Record<string, string> = {
  en: 'Prompt engineering determines whether an AI model gives you a useful answer or a vague one. A well-engineered prompt specifies the task clearly, provides the right context, sets format constraints, and uses examples to calibrate model behavior — transforming generic AI responses into expert-quality, predictable outputs. These 80 guides cover the complete prompt engineering stack: fundamentals (tokens, context windows, temperature, model selection), proven frameworks (CO-STAR, CRAFT, RTF, APE, RISEN), advanced techniques (chain-of-thought, RAG, self-consistency, few-shot learning), team workflows (version control, governance, CI/CD review gates), evaluation methods (metrics, regression testing, cross-model testing), and tool comparisons (Braintrust, PromptHub, Cursor). Whether you\'re building production AI features, optimizing prompts for GPT-4o, Claude Opus 4.7, or Gemini 2.5 Pro, or scaling prompt engineering across a team, these research-backed guides give you the patterns that work.',
  de: 'Prompt Engineering entscheidet, ob ein KI-Modell eine nützliche oder eine vage Antwort liefert. Ein gut engineerter Prompt spezifiziert die Aufgabe klar, liefert den richtigen Kontext, setzt Formatbeschränkungen und verwendet Beispiele zur Kalibrierung des Modellverhaltens. Diese 80 Leitfäden decken den vollständigen Stack ab: Grundlagen (Tokens, Kontextfenster, Temperatur), bewährte Frameworks (CO-STAR, CRAFT, RTF, APE), fortgeschrittene Techniken (Chain-of-Thought, RAG, Few-Shot), Team-Workflows (Versionskontrolle, Governance, CI/CD-Gates), Evaluierungsmethoden und Tool-Vergleiche für GPT-4o, Claude Opus 4.7 und Gemini 2.5 Pro.',
  fr: 'Le prompt engineering détermine si un modèle d\'IA vous donne une réponse utile ou vague. Un prompt bien conçu spécifie clairement la tâche, fournit le bon contexte, définit des contraintes de format et utilise des exemples pour calibrer le comportement du modèle. Ces 80 guides couvrent l\'ensemble du stack prompt engineering : fondamentaux (tokens, fenêtres de contexte, température), frameworks éprouvés (CO-STAR, CRAFT, RTF, APE), techniques avancées (chain-of-thought, RAG, few-shot), workflows d\'équipe, méthodes d\'évaluation et comparatifs d\'outils pour GPT-4o, Claude Opus 4.7 et Gemini 2.5 Pro.',
  ja: 'プロンプトエンジニアリングは、AIモデルが有用な回答を返すか曖昧な回答を返すかを決定します。適切に設計されたプロンプトは、タスクを明確に指定し、適切なコンテキストを提供し、フォーマット制約を設定し、例を用いてモデルの動作を調整します。これらの80本のガイドは、基礎知識（トークン、コンテキストウィンドウ、温度）、実証済みフレームワーク（CO-STAR、CRAFT、RTF）、高度な技術（チェーン・オブ・ソート、RAG、フューショット）、チームワークフロー、評価手法、GPT-4oとClaude Opus 4.7向けのツール比較を網羅します。',
  zh: '提示词工程决定了AI模型是给出有用答案还是模糊答案。精心设计的提示词明确指定任务、提供正确上下文、设置格式约束并使用示例校准模型行为。这80篇指南涵盖完整的提示词工程体系：基础知识（词元、上下文窗口、温度）、成熟框架（CO-STAR、CRAFT、RTF）、高级技术（思维链、RAG、少样本学习）、团队工作流程、评估方法，以及GPT-4o、Claude Opus 4.7和Gemini 2.5 Pro的工具比较。',
}

const HUB_CTA_TEXT: Record<string, string> = {
  en: 'PromptQuorum optimizes your prompts automatically and tests them across 25+ AI models simultaneously.',
  de: 'PromptQuorum optimiert Ihre Prompts automatisch und testet sie gleichzeitig mit 25+ KI-Modellen.',
  fr: 'PromptQuorum optimise vos prompts automatiquement et les teste simultanément sur plus de 25 modèles d\'IA.',
  ja: 'PromptQuorumはプロンプトを自動的に最適化し、25以上のAIモデルで同時にテストします。',
  zh: 'PromptQuorum自动优化您的提示词，并同时在25+个AI模型中进行测试。',
}

const HUB_QUICK_FACTS: Record<string, string[]> = {
  en: ['80 articles across 9 topic areas', 'Covers GPT-4o, Claude Opus 4.7, and Gemini 2.5 Pro', '5–20 min per article', 'Updated May 2026'],
  de: ['80 Artikel in 9 Themenbereichen', 'Behandelt GPT-4o, Claude Opus 4.7 und Gemini 2.5 Pro', '5–20 Min. pro Artikel', 'Aktualisiert Mai 2026'],
  fr: ['80 articles dans 9 domaines', 'Couvre GPT-4o, Claude Opus 4.7 et Gemini 2.5 Pro', '5–20 min par article', 'Mis à jour mai 2026'],
  ja: ['9テーマ領域の80記事', 'GPT-4o、Claude Opus 4.7、Gemini 2.5 Pro対応', '記事あたり5〜20分', '2026年5月更新'],
  zh: ['9个主题领域80篇文章', '涵盖GPT-4o、Claude Opus 4.7和Gemini 2.5 Pro', '每篇5-20分钟', '2026年5月更新'],
}

const HUB_CTA_BUTTON: Record<string, string> = {
  en: 'Try PromptQuorum free →',
  de: 'PromptQuorum kostenlos testen →',
  fr: 'Essayer PromptQuorum gratuitement →',
  ja: 'PromptQuorumを無料で試す →',
  zh: '免费试用PromptQuorum →',
}

const HUB_NAV_HOME: Record<string, string> = {
  en: '← Home', de: '← Startseite', fr: '← Accueil', ja: '← ホーム', zh: '← 主页',
}
const HUB_NAV_FEATURES: Record<string, string> = {
  en: 'Features', de: 'Funktionen', fr: 'Fonctionnalités', ja: '機能', zh: '功能',
}
const HUB_NAV_HOW: Record<string, string> = {
  en: 'How It Works', de: 'So funktioniert es', fr: 'Comment ça marche', ja: '仕組み', zh: '工作原理',
}
const HUB_NAV_BLOG: Record<string, string> = {
  en: 'Blog', de: 'Blog', fr: 'Blog', ja: 'ブログ', zh: '博客',
}

const GUIDES_LABEL: Record<string, string> = {
  en: 'guides', de: 'Leitfäden', fr: 'guides', ja: 'ガイド', zh: '篇指南',
}

const THEME_DESCRIPTIONS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'Core concepts every prompt engineer needs to understand — how LLMs work, what tokens are, and why prompt structure determines output quality. These articles explain how temperature controls randomness, why context windows cause AI to "forget," and how different models (GPT-4o, Claude Opus 4.7, Gemini 2.5 Pro) interpret instructions differently. Start here if you\'re new to prompt engineering, or use these guides as a reference for the mechanics behind every advanced technique.',
    de: 'Grundkonzepte, die jeder Prompt Engineer verstehen muss — wie LLMs funktionieren, was Tokens sind und warum die Prompt-Struktur die Ausgabequalität bestimmt. Diese Artikel erklären, wie die Temperatur die Zufälligkeit steuert, warum Kontextfenster dazu führen, dass KI "vergisst", und wie verschiedene Modelle Anweisungen unterschiedlich interpretieren. Beginnen Sie hier, wenn Sie neu im Prompt Engineering sind.',
    fr: 'Concepts fondamentaux que tout prompt engineer doit comprendre — comment fonctionnent les LLMs, ce que sont les tokens et pourquoi la structure du prompt détermine la qualité de la sortie. Ces articles expliquent comment la température contrôle l\'aléatoire, pourquoi les fenêtres de contexte font "oublier" à l\'IA, et comment différents modèles interprètent les instructions. Commencez ici si vous débutez en prompt engineering.',
    ja: 'すべてのプロンプトエンジニアが理解すべき基本概念 — LLMの仕組み、トークンとは何か、プロンプトの構造が出力品質を決定する理由。温度がどのようにランダム性を制御するか、なぜコンテキストウィンドウがAIに「忘れさせる」のか、異なるモデルが指示をどのように解釈するかを説明します。プロンプトエンジニアリング初心者はここから始めてください。',
    zh: '每位提示词工程师需要理解的核心概念——LLM的工作原理、词元是什么，以及为什么提示词结构决定输出质量。这些文章解释温度如何控制随机性、为什么上下文窗口会导致AI"遗忘"，以及GPT-4o、Claude Opus 4.7等不同模型如何以不同方式解释指令。提示词工程新手请从这里开始。',
  },
  frameworks: {
    en: 'Structured templates for building reliable, repeatable prompts across different tasks — marketing, coding, research, and more. Frameworks like CO-STAR, CRAFT, RTF, and APE break down prompts into components (role, context, constraints, output format) to eliminate guesswork and produce consistent results regardless of who writes the prompt. Use these guides to find the right framework for your use case, compare frameworks head-to-head, or build a custom framework tailored to your team\'s specific needs.',
    de: 'Strukturierte Vorlagen für zuverlässige, wiederholbare Prompts für verschiedene Aufgaben — Marketing, Coding, Recherche und mehr. Frameworks wie CO-STAR, CRAFT, RTF und APE zerlegen Prompts in Komponenten (Rolle, Kontext, Einschränkungen, Ausgabeformat), um Rätselraten zu eliminieren. Verwenden Sie diese Leitfäden, um das richtige Framework zu finden, Frameworks zu vergleichen oder ein benutzerdefiniertes Framework für Ihr Team zu erstellen.',
    fr: 'Modèles structurés pour construire des prompts fiables et reproductibles pour différentes tâches — marketing, code, recherche et plus encore. Les frameworks comme CO-STAR, CRAFT, RTF et APE décomposent les prompts en composants pour éliminer l\'incertitude et produire des résultats cohérents. Utilisez ces guides pour trouver le bon framework, comparer les frameworks ou construire un framework personnalisé.',
    ja: 'マーケティング、コーディング、調査などさまざまなタスクで信頼性が高く再現可能なプロンプトを構築するための構造化テンプレート。CO-STAR、CRAFT、RTF、APEなどのフレームワークは、プロンプトをコンポーネント（役割、コンテキスト、制約、出力フォーマット）に分解し、誰がプロンプトを書いても一貫した結果を生み出します。',
    zh: '用于构建可靠、可重复提示词的结构化模板，适用于营销、编程、研究等不同任务。CO-STAR、CRAFT、RTF和APE等框架将提示词分解为组成部分（角色、上下文、约束、输出格式），消除猜测并产生一致的结果。使用这些指南为您的用例找到合适的框架，或构建适合团队的自定义框架。',
  },
  techniques: {
    en: 'Proven prompting techniques that improve accuracy, reduce errors, and produce more useful AI outputs for any task. These guides cover chain-of-thought prompting (step-by-step reasoning that improves complex problem accuracy), few-shot prompting (teaching with examples), RAG (grounding outputs in external data sources), self-consistency (reliability through multiple solutions), and prompt security (defending against injection attacks). Each technique includes decision criteria: when to use it, when to avoid it, and how to combine techniques for complex tasks.',
    de: 'Bewährte Prompting-Techniken, die die Genauigkeit verbessern, Fehler reduzieren und nützlichere KI-Ausgaben für jede Aufgabe liefern. Diese Leitfäden decken Chain-of-Thought-Prompting, Few-Shot-Prompting, RAG, Selbstkonsistenz und Prompt-Sicherheit gegen Injection-Angriffe ab. Jede Technik enthält Entscheidungskriterien: wann man sie einsetzt, wann man sie vermeidet und wie man Techniken kombiniert.',
    fr: 'Techniques de prompting éprouvées qui améliorent la précision, réduisent les erreurs et produisent des sorties IA plus utiles pour n\'importe quelle tâche. Ces guides couvrent le chain-of-thought prompting, le few-shot prompting, le RAG, la self-consistency et la sécurité des prompts. Chaque technique inclut des critères de décision : quand l\'utiliser, quand l\'éviter et comment combiner les techniques.',
    ja: '精度を向上させ、エラーを削減し、あらゆるタスクでより有用なAI出力を生成することが実証されたプロンプトテクニック。チェーン・オブ・ソート・プロンプティング、フューショット、RAG、自己一貫性、プロンプトインジェクション攻撃への防御を網羅。各テクニックには判断基準（いつ使うか、いつ避けるか、組み合わせ方）が含まれています。',
    zh: '经过验证的提示技术，可提高准确性、减少错误，为任何任务产生更有用的AI输出。这些指南涵盖思维链提示、少样本提示、RAG、自一致性以及针对注入攻击的提示安全防护。每种技术都包含决策标准：何时使用、何时避免，以及如何组合技术处理复杂任务。',
  },
  'use-topics': {
    en: 'Practical prompt engineering guides for specific domains and output types. Whether you\'re prompting for code review, research synthesis, SEO content, customer support, or multilingual tasks, these guides provide ready-to-use patterns optimized for each domain. The Output Engineering subsection covers format control, brand voice consistency, quality validation, and prompt library management — the operational layer for teams producing high-volume AI content.',
    de: 'Praktische Prompt Engineering Leitfäden für spezifische Domänen und Ausgabetypen. Ob Code-Review, Forschungssynthese, SEO-Inhalte oder mehrsprachige Aufgaben — diese Leitfäden bieten einsatzbereite Muster für jede Domäne. Die Sektion Output Engineering behandelt Formatsteuerung, Markenkonformität, Qualitätsprüfung und Prompt-Bibliotheksverwaltung.',
    fr: 'Guides pratiques de prompt engineering pour des domaines et types de sortie spécifiques. Ces guides fournissent des patterns prêts à l\'emploi pour la revue de code, la synthèse de recherche, le contenu SEO et les tâches multilingues. La section Output Engineering couvre le contrôle du format, la cohérence de la voix de marque et la gestion de bibliothèque de prompts.',
    ja: '特定のドメインと出力タイプ向けの実践的なプロンプトエンジニアリングガイド。コードレビュー、調査合成、SEOコンテンツ、多言語タスクなど、各ドメイン向けにすぐに使えるパターンを提供します。出力エンジニアリングセクションでは、フォーマット制御、ブランドボイスの一貫性、品質検証、プロンプトライブラリ管理をカバーします。',
    zh: '面向特定领域和输出类型的实用提示词工程指南。无论是代码审查、研究综合、SEO内容还是多语言任务，这些指南都提供针对各领域优化的即用模式。输出工程子版块涵盖格式控制、品牌声音一致性、质量验证和提示词库管理。',
  },
  policy: {
    en: 'How AI regulation, data residency law, and geopolitical competition affect organizations deploying AI. As governments in the EU, US, China, and Japan establish AI governance frameworks, prompt engineers and AI teams need to understand which compliance obligations affect how prompts can be written, what data they can reference, and how outputs must be handled. This section is expanding — additional guides on EU AI Act compliance, GDPR and AI prompts, and enterprise data residency are in development.',
    de: 'Wie KI-Regulierung, Datenspeichergesetze und geopolitischer Wettbewerb Organisationen beim KI-Einsatz betreffen. Mit zunehmenden Governance-Frameworks in EU, USA, China und Japan müssen Prompt Engineers verstehen, welche Compliance-Verpflichtungen gelten. Dieser Bereich wird ausgebaut — weitere Leitfäden zu EU KI-Gesetz, DSGVO und Unternehmensdatenspeicherung befinden sich in Entwicklung.',
    fr: 'Comment la régulation IA, les lois sur la résidence des données et la concurrence géopolitique affectent les organisations déployant l\'IA. Cette section est en expansion — des guides sur l\'AI Act européen, le RGPD et la résidence des données d\'entreprise sont en développement.',
    ja: 'AI規制、データ保管法、地政学的競争が、AIを展開する組織に与える影響。このセクションは拡充中です — EU AI法、GDPR、企業データ管理に関する追加ガイドを開発中です。',
    zh: 'AI法规、数据驻留法律和地缘政治竞争如何影响部署AI的组织。本版块正在扩充中——欧盟AI法案合规、GDPR与AI提示词相关指南正在开发中。',
  },
  'tools-platforms': {
    en: 'Evaluate and compare the best prompt engineering tools, platforms, and IDEs for individual and team workflows. These guides cover prompt testing suites (Braintrust for evaluation depth, Promptfoo for CI/CD integration), version control platforms (PromptHub for collaboration, Vellum for production traffic), developer IDEs (Cursor, VS Code with Continue.dev), and head-to-head comparisons with pricing and team-size fit. Every comparison includes explicit decision criteria so you can match the right tool to your workflow.',
    de: 'Bewerten und vergleichen Sie die besten Prompt Engineering Tools, Plattformen und IDEs. Diese Leitfäden behandeln Test-Suites (Braintrust, Promptfoo), Versionskontrollplattformen (PromptHub, Vellum), Entwickler-IDEs (Cursor, VS Code mit Continue.dev) sowie Head-to-Head-Vergleiche mit Preisen und Team-Empfehlungen. Jeder Vergleich enthält klare Entscheidungskriterien.',
    fr: 'Évaluez et comparez les meilleurs outils, plateformes et IDEs de prompt engineering. Ces guides couvrent les suites de test (Braintrust, Promptfoo), les plateformes de contrôle de version (PromptHub, Vellum), les IDEs développeurs (Cursor, VS Code avec Continue.dev) et des comparatifs tête-à-tête avec tarifs et recommandations.',
    ja: '個人とチームのワークフロー向けの最高のプロンプトエンジニアリングツール、プラットフォーム、IDEを評価・比較します。テストスイート（Braintrust、Promptfoo）、バージョン管理プラットフォーム（PromptHub、Vellum）、開発者IDE（Cursor、VS Code + Continue.dev）を網羅。価格やチームサイズの適合性を含む明確な判断基準付きの比較で最適なツールを選べます。',
    zh: '评估并比较最适合个人和团队工作流的提示词工程工具、平台和IDE。这些指南涵盖测试套件（Braintrust、Promptfoo）、版本控制平台（PromptHub、Vellum）、开发者IDE（Cursor、VS Code+Continue.dev），以及包含定价和团队规模建议的横向比较。',
  },
  'evaluation-reliability': {
    en: 'Systematic methods to evaluate prompt quality, test across models, and build reliable prompts for production. Untested prompts fail silently — they return plausible-sounding wrong answers instead of throwing errors, meaning quality issues go undetected until production. These guides cover prompt evaluation metrics (accuracy, consistency, latency), regression testing to catch breaking changes, brittleness reduction strategies, cross-model consistency testing, and building automated review gates into CI/CD pipelines.',
    de: 'Systematische Methoden zur Bewertung der Prompt-Qualität, zum Testen über Modelle hinweg und zum Erstellen zuverlässiger Prompts für die Produktion. Ungetestete Prompts scheitern lautlos. Diese Leitfäden decken Bewertungsmetriken, Regressionstests, Sprödigkeitsreduzierung, Modell-übergreifende Konsistenz und CI/CD-Review-Gates ab.',
    fr: 'Méthodes systématiques pour évaluer la qualité des prompts, tester sur plusieurs modèles et créer des prompts fiables pour la production. Les prompts non testés échouent silencieusement. Ces guides couvrent les métriques d\'évaluation, les tests de régression, la réduction de la fragilité, la cohérence multi-modèles et les contrôles de revue CI/CD.',
    ja: 'プロンプト品質を評価し、複数のモデル間でテストし、本番環境向けに信頼性の高いプロンプトを構築するための体系的な方法。テストされていないプロンプトはサイレントに失敗します。評価指標、回帰テスト、脆弱性低減、クロスモデル一貫性テスト、CI/CDへのレビューゲート統合をカバーします。',
    zh: '评估提示词质量、跨模型测试以及为生产环境构建可靠提示词的系统化方法。未经测试的提示词会悄无声息地失败。这些指南涵盖评估指标、回归测试、脆弱性降低策略、跨模型一致性测试，以及将自动化审查门禁集成到CI/CD流水线中。',
  },
  'team-governance': {
    en: 'Establish version control, documentation, governance, and security workflows for team-based prompt engineering. As AI becomes a core engineering function, teams need repeatable processes: Git-based prompt versioning (every prompt change is a PR), standardized documentation templates, approval workflows with domain and security reviewers, injection-vulnerability scanning, and full audit trails for compliance. These guides explain how to operationalize prompt engineering at team scale without adding workflow overhead.',
    de: 'Etablieren Sie Versionskontrolle, Dokumentation, Governance und Sicherheits-Workflows für teambasiertes Prompt Engineering. Teams benötigen reproduzierbare Prozesse: Git-basierte Prompt-Versionierung, standardisierte Dokumentationsvorlagen, Genehmigungs-Workflows, Injection-Schwachstellen-Scans und vollständige Audit-Trails.',
    fr: 'Établissez le contrôle de version, la documentation, la gouvernance et les processus de sécurité pour le prompt engineering en équipe. Les équipes ont besoin de processus reproductibles : versioning Git des prompts, templates de documentation standardisés, processus d\'approbation, scan des vulnérabilités d\'injection et pistes d\'audit complètes.',
    ja: 'チームベースのプロンプトエンジニアリングのためのバージョン管理、ドキュメント、ガバナンス、セキュリティワークフローを確立します。Gitベースのプロンプトバージョニング、標準化されたドキュメントテンプレート、承認ワークフロー、インジェクション脆弱性スキャン、完全な監査証跡が必要です。',
    zh: '为基于团队的提示词工程建立版本控制、文档、治理和安全工作流。团队需要可重复的流程：基于Git的提示词版本控制、标准化文档模板、审批工作流、注入漏洞扫描和完整审计跟踪。',
  },
  'workflows-automation': {
    en: 'Build structured outputs, automate prompt workflows, and design repeatable processes for teams and use cases. These guides cover JSON mode and structured extraction (Instructor, Outlines, Pydantic AI), prompt chaining into multi-step workflows, cross-model testing pipelines, and how to configure prompt engineering workflows for developers, content teams, and support operations. Each guide includes practical patterns deployable in days, not months.',
    de: 'Erstellen Sie strukturierte Ausgaben, automatisieren Sie Prompt-Workflows und entwerfen Sie wiederholbare Prozesse. Diese Leitfäden decken JSON-Mode (Instructor, Outlines, Pydantic AI), Prompt-Chaining in mehrstufigen Workflows und Prompt-Engineering-Setups für Entwickler, Content-Teams und Support-Operationen ab.',
    fr: 'Créez des sorties structurées, automatisez les flux de travail de prompts et concevez des processus reproductibles. Ces guides couvrent le mode JSON (Instructor, Outlines), le prompt chaining en flux de travail multi-étapes, et la configuration des flux de travail pour développeurs, équipes contenu et opérations de support.',
    ja: '構造化された出力を構築し、プロンプトワークフローを自動化し、チームとユースケース向けの反復可能なプロセスを設計します。JSONモードと構造化抽出（Instructor、Outlines、Pydantic AI）、マルチステップワークフロー、開発者・コンテンツチーム・サポートオペレーション向けのワークフロー設定を網羅します。',
    zh: '构建结构化输出、自动化提示词工作流，以及为团队和用例设计可重复的流程。这些指南涵盖JSON模式和结构化提取（Instructor、Outlines、Pydantic AI）、多步骤工作流的提示词链，以及为开发者、内容团队和支持运营配置提示词工程工作流。',
  },
}

const SUBSECTION_LABELS: Record<string, Record<string, string>> = {
  'Use Cases by Vertical': {
    en: 'Use Cases by Vertical',
    de: 'Anwendungsfälle nach Branche',
    fr: 'Cas d\'usage par secteur',
    ja: '業種別ユースケース',
    zh: '按垂直领域划分的用例',
  },
  'Output Engineering': {
    en: 'Output Engineering',
    de: 'Ausgabe-Engineering',
    fr: 'Ingénierie de sortie',
    ja: '出力エンジニアリング',
    zh: '输出工程',
  },
}

const THEME_LABELS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'Fundamentals: What Do You Actually Need to Know?',
    de: 'Grundlagen: Was müssen Sie wirklich wissen?',
    fr: 'Fondamentaux : Que faut-il vraiment savoir ?',
    ja: '基礎：本当に必要な知識とは？',
    zh: '基础知识：你真正需要了解什么？',
  },
  frameworks: {
    en: 'Frameworks: Which Template Gets the Best Results?',
    de: 'Frameworks: Welches Template liefert die besten Ergebnisse?',
    fr: 'Frameworks : Quel modèle donne les meilleurs résultats ?',
    ja: 'フレームワーク：最高の結果を出すテンプレートは？',
    zh: '框架：哪个模板效果最好？',
  },
  techniques: {
    en: 'Techniques: What Separates Good Prompts from Great Ones?',
    de: 'Techniken: Was unterscheidet gute von großartigen Prompts?',
    fr: 'Techniques : Qu\'est-ce qui distingue les bons prompts des excellents ?',
    ja: 'テクニック：良いプロンプトと優れたプロンプトの違いは？',
    zh: '技术：好提示词与优秀提示词的区别是什么？',
  },
  'use-topics': {
    en: 'Use Topics: How Do You Prompt for Your Specific Job?',
    de: 'Anwendungsthemen: Wie prompten Sie für Ihren Job?',
    fr: 'Sujets d\'usage : Comment prompter pour votre métier ?',
    ja: '活用テーマ：あなたの仕事に合ったプロンプトとは？',
    zh: '应用主题：如何针对你的工作提示？',
  },
  policy: {
    en: 'Policy & Compliance: What Do AI Regulations Mean for Your Organization?',
    de: 'Politik & Compliance: Was bedeuten KI-Regulierungen für Ihre Organisation?',
    fr: 'Politique & Conformité : Que signifient les régulations IA pour votre organisation ?',
    ja: 'ポリシーとコンプライアンス：AI規制はあなたの組織に何を意味するのか？',
    zh: '政策与合规：AI法规对您的组织意味着什么？',
  },
  'tools-platforms': {
    en: 'Tools & Platforms: Which Tool Fits Your Workflow?',
    de: 'Tools & Plattformen: Welches Tool passt zu Ihrem Workflow?',
    fr: 'Outils & Plateformes : Quel outil correspond à votre flux de travail ?',
    ja: 'ツール＆プラットフォーム：どのツールがあなたのワークフローに合うのか？',
    zh: '工具与平台：哪个工具适合您的工作流程？',
  },
  'evaluation-reliability': {
    en: 'Evaluation & Reliability: How Do You Know Your Prompts Work?',
    de: 'Evaluierung & Zuverlässigkeit: Wie wissen Sie, dass Ihre Prompts funktionieren?',
    fr: 'Évaluation & Fiabilité : Comment savez-vous que vos prompts fonctionnent ?',
    ja: '評価と信頼性：プロンプトが機能していることをどのように確認しますか？',
    zh: '评估与可靠性：您如何知道提示词是否有效？',
  },
  'team-governance': {
    en: 'Team Governance: How Do You Manage Prompts at Scale?',
    de: 'Team-Governance: Wie verwalten Sie Prompts in großem Maßstab?',
    fr: 'Gouvernance d\'équipe : Comment gérez-vous les prompts à grande échelle ?',
    ja: 'チームガバナンス：規模を拡大してプロンプトをどのように管理しますか？',
    zh: '团队治理：如何大规模管理提示词？',
  },
  'workflows-automation': {
    en: 'Workflows & Automation: How Do You Scale Prompts into Systems?',
    de: 'Workflows & Automatisierung: Wie skalieren Sie Prompts zu Systemen?',
    fr: 'Workflows & Automation : Comment transformez-vous les prompts en systèmes ?',
    ja: 'ワークフロー＆オートメーション：プロンプトをどのようにシステムにスケーリングしますか？',
    zh: '工作流程与自动化：如何将提示词扩展为系统？',
  },
}

// Proper titles for articles that don't yet have full content (fallback to avoid slug-formatted display)
const FALLBACK_TITLES: Record<string, Record<string, string>> = {
  'prompt-documentation-templates': {
    en: 'Prompt Documentation Templates for Teams',
    de: 'Prompt-Dokumentationsvorlagen für Teams',
    fr: 'Modèles de documentation de prompts pour équipes',
    ja: 'チーム向けプロンプト文書テンプレート',
    zh: '团队提示词文档模板',
  },
  'prompt-governance-in-production': {
    en: 'Prompt Governance in Production',
    de: 'Prompt Governance in der Produktion',
    fr: 'Gouvernance des prompts en production',
    ja: '本番環境でのプロンプトガバナンス',
    zh: '生产环境中的提示词治理',
  },
  'prompt-security-tools-injection-testing': {
    en: 'Prompt Security Tools & Injection Testing',
    de: 'Prompt-Sicherheitstools und Injection-Tests',
    fr: "Outils de sécurité et tests d'injection de prompts",
    ja: 'プロンプトセキュリティツールとインジェクションテスト',
    zh: '提示词安全工具与注入测试',
  },
  'prompt-audit-and-regression-risk': {
    en: 'Prompt Audit & Regression Risk Management',
    de: 'Prompt-Audit und Regressionsrisikomanagement',
    fr: 'Audit de prompts et gestion du risque de régression',
    ja: 'プロンプト監査と回帰リスク管理',
    zh: '提示词审计与回归风险管理',
  },
  'multi-model-prompt-testing-workflows': {
    en: 'Multi-Model Prompt Testing Workflows',
    de: 'Multi-Modell-Prompt-Test-Workflows',
    fr: 'Workflows de test de prompts multi-modèles',
    ja: 'マルチモデルプロンプトテストワークフロー',
    zh: '多模型提示词测试工作流',
  },
  'prompt-library-management-for-teams': {
    en: 'Prompt Library Management for Teams',
    de: 'Prompt-Bibliotheksverwaltung für Teams',
    fr: 'Gestion de bibliothèque de prompts pour équipes',
    ja: 'チーム向けプロンプトライブラリ管理',
    zh: '团队提示词库管理',
  },
  'prompts-to-repeatable-workflows': {
    en: 'From Prompts to Repeatable Workflows',
    de: 'Von Prompts zu wiederholbaren Workflows',
    fr: 'Des prompts aux workflows reproductibles',
    ja: 'プロンプトから反復可能なワークフローへ',
    zh: '从提示词到可重复工作流程',
  },
  'prompt-engineering-for-content-teams': {
    en: 'Prompt Engineering for Content Teams',
    de: 'Prompt Engineering für Content-Teams',
    fr: 'Prompt Engineering pour les équipes contenu',
    ja: 'コンテンツチーム向けプロンプトエンジニアリング',
    zh: '内容团队的提示词工程',
  },
  'prompt-engineering-for-developers-workflow': {
    en: 'Prompt Engineering Workflow for Developers',
    de: 'Prompt-Engineering-Workflow für Entwickler',
    fr: 'Workflow de prompt engineering pour développeurs',
    ja: '開発者向けプロンプトエンジニアリングワークフロー',
    zh: '开发者的提示词工程工作流',
  },
  'prompt-engineering-for-support-operations': {
    en: 'Prompt Engineering for Support Operations',
    de: 'Prompt Engineering für den Support-Betrieb',
    fr: 'Prompt Engineering pour les opérations de support',
    ja: 'サポートオペレーション向けプロンプトエンジニアリング',
    zh: '客户支持运营的提示词工程',
  },
  'prompt-framework-selection-for-teams': {
    en: 'How to Choose the Right Prompt Framework for Your Team',
    de: 'Das richtige Prompt-Framework für Ihr Team auswählen',
    fr: 'Comment choisir le bon framework de prompts pour votre équipe',
    ja: 'チームに最適なプロンプトフレームワークの選び方',
    zh: '如何为团队选择合适的提示词框架',
  },
  'prompts-for-reliable-structured-data': {
    en: 'Prompts for Reliable Structured Data Extraction',
    de: 'Prompts für zuverlässige strukturierte Datenextraktion',
    fr: "Prompts pour l'extraction fiable de données structurées",
    ja: '信頼性の高い構造化データ抽出のためのプロンプト',
    zh: '可靠结构化数据提取的提示词',
  },
}

const HUB_FAQ_HEADER: Record<string, string> = {
  en: 'Frequently Asked Questions',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquentes',
  ja: 'よくある質問',
  zh: '常见问题',
}

const HUB_FAQ_DATA: Record<string, Array<{ q: string; a: string }>> = {
  en: [
    { q: 'What is prompt engineering?', a: 'Prompt engineering is the practice of structuring requests to AI models to get better, more consistent outputs. It involves using frameworks, formatting, examples, and constraints to guide model behavior — turning vague AI responses into accurate, expert-quality outputs.' },
    { q: 'What are the most important prompt engineering techniques?', a: 'The highest-impact techniques are chain-of-thought prompting (step-by-step reasoning that improves accuracy on complex problems), few-shot prompting (providing 2–5 examples to teach the model your desired format), and RAG (grounding outputs in external data to prevent hallucinations). These three techniques cover the majority of production prompt engineering use cases.' },
    { q: 'How does temperature affect AI output?', a: 'Temperature controls randomness in AI responses. Lower values (0.0–0.5) produce deterministic, factual outputs best for structured tasks like data extraction or code. Higher values (0.7–1.0) produce creative, varied responses for writing or brainstorming. Most production use cases work best at 0.3–0.5.' },
    { q: 'What prompt frameworks should I learn first?', a: 'Start with CO-STAR (Context, Objective, Style, Tone, Audience, Response) for general-purpose prompting, and CRAFT for creative and analytical tasks. These two frameworks cover 80% of common prompt engineering scenarios. Learn RTF (Role, Task, Format) as a quick shorthand for simple prompts.' },
    { q: 'Do I need to know coding to do prompt engineering?', a: 'No — basic prompt engineering requires no coding. Advanced use cases like automated testing pipelines, CI/CD gates, and structured output extraction do benefit from Python familiarity. Start with the conceptual frameworks and techniques; learn the engineering layer when your use case requires it.' },
    { q: 'Is prompt engineering still relevant in 2026?', a: 'Yes — despite improvements in model reasoning, prompt engineering remains essential. Models still produce significantly better outputs with structured inputs. Chain-of-thought prompting improves complex reasoning accuracy by 30–40% in benchmarks. As models improve, prompt engineering shifts from correcting weaknesses to unlocking capabilities.' },
    { q: "What's the difference between prompt engineering and fine-tuning?", a: "Prompt engineering shapes model behavior through input design without changing model weights — it's fast (minutes) and model-agnostic. Fine-tuning trains a model on new data to change its baseline behavior — it takes hours, requires datasets, and produces a specialized model. Use prompt engineering first; fine-tune only when prompts consistently can't solve the task." },
    { q: 'What tools do prompt engineers use?', a: 'The core stack: a prompt IDE (Cursor or VS Code with Continue.dev), a testing framework (Braintrust or Promptfoo for evaluation and CI/CD), a version control system (PromptHub or Git), and a multi-model testing platform (PromptQuorum to compare outputs across GPT-4o, Claude, and Gemini simultaneously). Advanced teams add Vellum for production traffic management.' },
  ],
  de: [
    { q: 'Was ist Prompt Engineering?', a: 'Prompt Engineering ist die Praxis, Anfragen an KI-Modelle so zu strukturieren, dass bessere und konsistentere Ausgaben erzielt werden. Es umfasst den Einsatz von Frameworks, Formatierungen, Beispielen und Einschränkungen zur Steuerung des Modellverhaltens.' },
    { q: 'Was sind die wichtigsten Prompt-Engineering-Techniken?', a: 'Die wirkungsvollsten Techniken sind Chain-of-Thought-Prompting (schrittweises Denken für komplexe Probleme), Few-Shot-Prompting (2–5 Beispiele zum Lehren des gewünschten Formats) und RAG (Verankerung in externen Daten zur Vermeidung von Halluzinationen).' },
    { q: 'Wie beeinflusst die Temperatur die KI-Ausgabe?', a: 'Die Temperatur steuert die Zufälligkeit in KI-Antworten. Niedrigere Werte (0,0–0,5) erzeugen deterministische, sachliche Ausgaben für strukturierte Aufgaben. Höhere Werte (0,7–1,0) erzeugen kreative Antworten. Die meisten Produktionsanwendungsfälle funktionieren am besten bei 0,3–0,5.' },
    { q: 'Welche Prompt-Frameworks sollte ich zuerst lernen?', a: 'Beginnen Sie mit CO-STAR für allgemeines Prompting und CRAFT für kreative und analytische Aufgaben. Diese zwei Frameworks decken 80% der häufigen Prompt-Engineering-Szenarien ab. Lernen Sie RTF als schnelle Kurzform für einfache Prompts.' },
    { q: 'Brauche ich Programmierkenntnisse für Prompt Engineering?', a: 'Nein — grundlegendes Prompt Engineering erfordert keine Programmierkenntnisse. Erweiterte Anwendungsfälle wie automatisierte Testpipelines und CI/CD-Gates profitieren von Python-Kenntnissen. Beginnen Sie mit den konzeptionellen Frameworks.' },
    { q: 'Ist Prompt Engineering im Jahr 2026 noch relevant?', a: 'Ja — trotz verbesserter Modelllogik bleibt Prompt Engineering unverzichtbar. Chain-of-Thought-Prompting verbessert die Genauigkeit bei komplexem Denken um 30–40%. Mit besseren Modellen verschiebt sich Prompt Engineering vom Korrigieren von Schwächen hin zum Freischalten von Fähigkeiten.' },
    { q: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?', a: 'Prompt Engineering gestaltet das Modellverhalten durch Eingabedesign ohne Modellgewichte zu ändern — schnell und modell-agnostisch. Fine-Tuning trainiert ein Modell auf neuen Daten und erfordert Datensätze und Stunden. Nutzen Sie zuerst Prompt Engineering.' },
    { q: 'Welche Tools verwenden Prompt Engineers?', a: 'Der Kern-Stack: eine Prompt-IDE (Cursor oder VS Code mit Continue.dev), ein Testframework (Braintrust oder Promptfoo), ein Versionskontrollsystem (PromptHub oder Git) und PromptQuorum für Multi-Modell-Vergleiche. Fortgeschrittene Teams fügen Vellum für Produktions-Traffic hinzu.' },
    { q: 'Muss ich bei der Nutzung von KI-Tools die DSGVO beachten?', a: 'Ja — bei der Verarbeitung personenbezogener Daten über KI-APIs gilt DSGVO Artikel 28 (Auftragsverarbeitung). Lokale Inferenz oder DSGVO-konforme EU-Anbieter reduzieren das Datenschutzrisiko erheblich. Für den deutschen Mittelstand empfehlen die BSI-Grundschutz-Kataloge klare Richtlinien zur KI-Datenverarbeitung.' },
    { q: 'Ist Prompt Engineering für den deutschen Mittelstand geeignet?', a: 'Ja — Mittelstandsunternehmen nutzen Prompt Engineering besonders für Kundenservice-Automatisierung, Dokumentenverarbeitung und interne Wissensverwaltung. Standardisierte Frameworks (CO-STAR, CRAFT) kombiniert mit EU-gehosteten Modellen erfüllen typische BSI-Sicherheitsanforderungen ohne Investitionen in Fine-Tuning.' },
  ],
  fr: [
    { q: "Qu'est-ce que le prompt engineering ?", a: "Le prompt engineering est la pratique qui consiste à structurer les requêtes adressées aux modèles d'IA pour obtenir des sorties meilleures et plus cohérentes. Il implique l'utilisation de frameworks, de formats, d'exemples et de contraintes pour guider le comportement du modèle." },
    { q: 'Quelles sont les techniques de prompt engineering les plus importantes ?', a: "Les techniques à plus fort impact sont : le chain-of-thought prompting (raisonnement étape par étape), le few-shot prompting (2 à 5 exemples pour enseigner le format souhaité) et le RAG (ancrage dans des données externes pour éviter les hallucinations)." },
    { q: "Comment la température affecte-t-elle la sortie IA ?", a: "La température contrôle le caractère aléatoire des réponses IA. Les valeurs basses (0,0–0,5) produisent des sorties déterministes pour les tâches structurées. Les valeurs élevées (0,7–1,0) produisent des réponses créatives. La plupart des cas d'usage en production fonctionnent mieux à 0,3–0,5." },
    { q: 'Quels frameworks de prompts apprendre en premier ?', a: "Commencez par CO-STAR pour le prompting général et CRAFT pour les tâches créatives et analytiques. Ces deux frameworks couvrent 80% des scénarios courants. Apprenez RTF comme raccourci rapide pour les prompts simples." },
    { q: 'Faut-il savoir coder pour faire du prompt engineering ?', a: "Non — le prompt engineering de base ne nécessite pas de compétences en programmation. Les cas d'usage avancés comme les pipelines de test automatisés bénéficient de la familiarité avec Python. Commencez par les frameworks conceptuels." },
    { q: 'Le prompt engineering est-il toujours pertinent en 2026 ?', a: "Oui — malgré les améliorations du raisonnement des modèles, le prompt engineering reste essentiel. Le chain-of-thought prompting améliore la précision de raisonnement complexe de 30 à 40%. À mesure que les modèles s'améliorent, le prompt engineering passe de la correction des faiblesses au déverrouillage des capacités." },
    { q: "Quelle est la différence entre prompt engineering et fine-tuning ?", a: "Le prompt engineering façonne le comportement du modèle par la conception des entrées sans modifier les poids — rapide et agnostique du modèle. Le fine-tuning entraîne un modèle sur de nouvelles données, nécessitant datasets et heures. Utilisez d'abord le prompt engineering." },
    { q: 'Quels outils les prompt engineers utilisent-ils ?', a: "Le stack central : une IDE (Cursor ou VS Code avec Continue.dev), un framework de test (Braintrust ou Promptfoo), un contrôle de version (PromptHub ou Git) et PromptQuorum pour les comparaisons multi-modèles. Les équipes avancées ajoutent Vellum pour la production." },
  ],
  ja: [
    { q: 'プロンプトエンジニアリングとは何ですか？', a: 'プロンプトエンジニアリングとは、AIモデルへのリクエストを構造化して、より優れた一貫性のある出力を得るための実践です。フレームワーク、フォーマット、例、制約を使用してモデルの動作を誘導します。' },
    { q: '最も重要なプロンプトエンジニアリングテクニックは？', a: '最も効果的なテクニックは、チェーン・オブ・ソート・プロンプティング（複雑な問題の精度向上）、フューショットプロンプティング（2〜5の例でフォーマットを教える）、RAG（外部データでハルシネーションを防ぐ）の3つです。' },
    { q: '温度はAI出力にどのような影響を与えますか？', a: '温度はAIの応答のランダム性を制御します。低い値（0.0〜0.5）は決定論的で事実に基づく出力を生成します。高い値（0.7〜1.0）はクリエイティブな応答を生成します。多くの本番ユースケースは0.3〜0.5が最適です。' },
    { q: '最初に学ぶべきプロンプトフレームワークは？', a: '汎用プロンプティングにはCO-STAR、クリエイティブ・分析タスクにはCRAFTから始めてください。この2つのフレームワークで一般的なプロンプトエンジニアリングシナリオの80%をカバーできます。' },
    { q: 'プロンプトエンジニアリングにコーディング知識は必要ですか？', a: '不要です — 基本的なプロンプトエンジニアリングにプログラミングスキルは必要ありません。自動テストパイプラインなどの高度なユースケースではPythonの知識が役立ちます。まず概念的なフレームワークから始めてください。' },
    { q: 'プロンプトエンジニアリングは2026年も重要ですか？', a: 'はい — モデルの推論能力が向上しても依然不可欠です。チェーン・オブ・ソート・プロンプティングはベンチマークで複雑な推論精度を30〜40%向上させます。モデルが改善するにつれて、弱点の修正から能力の解放へとシフトしています。' },
    { q: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？', a: 'プロンプトエンジニアリングはモデルの重みを変えずに入力設計でモデルの動作を形成します（分単位・モデル非依存）。ファインチューニングは新しいデータでモデルを訓練し、データセットと時間が必要です。' },
    { q: 'プロンプトエンジニアはどんなツールを使いますか？', a: 'コアスタック：プロンプトIDE（CursorまたはContinue.dev付きVS Code）、テストフレームワーク（BraintrustまたはPromptfoo）、バージョン管理（PromptHubまたはGit）、マルチモデルテストプラットフォーム（PromptQuorum）。' },
    { q: 'METIのAIガバナンスガイドラインはプロンプトエンジニアリングにどう関係しますか？', a: '経済産業省（METI）の2024年AIガバナンスガイドラインでは、AIシステムの決定を追跡可能にすることを推奨しています。プロンプトのバージョン管理と承認ワークフローを導入することで、この要件を満たしつつ、変更履歴を監査証跡として保持できます。' },
    { q: 'エンタープライズ環境でプロンプトエンジニアリングを安全に運用するには？', a: 'CI/CDゲートによる自動テスト、セキュリティレビュアーによる承認フロー、インジェクション脆弱性スキャンの3層防御が推奨されます。日本の規制業界（金融・医療・法律）では、本番デプロイ前に必ずコンプライアンスレビューを実施しています。' },
  ],
  zh: [
    { q: '什么是提示词工程？', a: '提示词工程是通过结构化对AI模型的请求来获得更好、更一致输出的实践。它涉及使用框架、格式、示例和约束来指导模型行为，将模糊的AI响应转化为准确的专家级输出。' },
    { q: '最重要的提示词工程技术有哪些？', a: '最有效的技术是：思维链提示（逐步推理提高复杂问题精度）、少样本提示（提供2-5个示例教模型所需格式）以及RAG（基于外部数据防止幻觉）。这三种技术覆盖了大多数生产提示词工程用例。' },
    { q: '温度如何影响AI输出？', a: '温度控制AI响应的随机性。较低的值（0.0–0.5）产生确定性、基于事实的输出，适合结构化任务。较高的值（0.7–1.0）产生创意性响应，适合写作或头脑风暴。大多数生产用例在0.3–0.5效果最佳。' },
    { q: '应该先学哪个提示词框架？', a: '先学CO-STAR（通用提示词工程）和CRAFT（创意和分析任务）。这两个框架覆盖了80%的常见提示词工程场景。学习RTF作为简单提示词的快速简写。' },
    { q: '提示词工程需要编程知识吗？', a: '不需要——基本的提示词工程不需要编程技能。自动化测试流水线等高级用例受益于Python熟悉度。先从概念性框架和技术开始。' },
    { q: '2026年提示词工程还重要吗？', a: '是的——尽管模型推理能力不断提升，提示词工程依然必不可少。思维链提示在基准测试中将复杂推理精度提高30-40%。随着模型改进，提示词工程从纠正弱点转向释放能力。' },
    { q: '提示词工程和微调有什么区别？', a: '提示词工程通过输入设计塑造模型行为而不改变模型权重——速度快（分钟级）且与模型无关。微调在新数据上训练模型，需要数据集和数小时的时间。先使用提示词工程，仅在必要时才进行微调。' },
    { q: '提示词工程师使用哪些工具？', a: '核心工具栈：提示词IDE（Cursor或带Continue.dev的VS Code）、测试框架（Braintrust或Promptfoo）、版本控制（PromptHub或Git）以及多模型测试平台（PromptQuorum用于同时比较GPT-4o、Claude和Gemini）。' },
    { q: '使用AI工具需要遵守中国数据安全法吗？', a: '是的——中国《数据安全法》（2021年）和《个人信息保护法》（PIPL）要求中国用户的数据在境内存储和处理。对于处理敏感数据的企业，本地部署模型或阿里云、腾讯云等国内云服务商的AI接口可满足数据安全合规要求。' },
    { q: '如何为企业级生产环境搭建安全的提示词工程体系？', a: '企业级体系需要三层保障：自动化测试（格式验证、安全扫描、幻觉检测）、人工审核（领域专家 + 安全审查员）以及CI/CD门控（未审批提示词无法合并）。金融、医疗、法律行业还需额外的合规审查，建议使用Git进行版本控制并保留完整审计记录。' },
  ],
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  fundamentals: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400' },
  frameworks:   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  techniques:   { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'use-topics': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  policy:       { badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-400' },
  'tools-platforms': { badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', dot: 'bg-cyan-400' },
  'evaluation-reliability': { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-400' },
  'team-governance': { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-400' },
  'workflows-automation': { badge: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-400' },
}

// Get translated article title — checks content, then fallback titles, then formats slug
function getArticleTitle(articleKey: string, lang: Language): string {
  const contentKey = PE_SLUG_TO_KEY[articleKey]
  if (contentKey && peContent[contentKey]?.[lang]?.title) {
    return peContent[contentKey][lang].title
  }
  if (contentKey && peContent[contentKey]?.en?.title) {
    return peContent[contentKey].en.title
  }
  // Use fallback titles for articles without content yet
  if (FALLBACK_TITLES[articleKey]?.[lang]) {
    return FALLBACK_TITLES[articleKey][lang]
  }
  if (FALLBACK_TITLES[articleKey]?.en) {
    return FALLBACK_TITLES[articleKey].en
  }
  return articleKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function ArticleCard({ articleKey, dot, lang }: { articleKey: string; dot: string; lang: Language }) {
  const title = getArticleTitle(articleKey, lang)
  const href = navHref(`/prompt-engineering/${articleKey}`, lang)

  return (
    <Link
      href={href}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors">{title}</span>
    </Link>
  )
}

function PromptEngineeringHubContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Prompt Engineering</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-5">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="text-lg font-semibold text-text-primary leading-relaxed max-w-3xl mb-4 key-takeaways">
            {HUB_LEAD_ANSWER[lang] ?? HUB_LEAD_ANSWER['en']}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl hub-hero-desc">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
            {(HUB_QUICK_FACTS[lang] ?? HUB_QUICK_FACTS['en']).map((fact, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <strong className="text-text-primary font-medium">{fact}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme sections */}
        <div className="space-y-20">
          {themes.map((theme) => {
            const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title
            const colors = THEME_COLORS[theme.id]
            const articleKeys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
            const count = articleKeys.length

            return (
              <section key={theme.id} id={theme.id}>
                {/* Theme header */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-text-primary">{label}</h2>
                    <span className="text-sm text-text-secondary font-normal shrink-0">
                      {count} {GUIDES_LABEL[lang] ?? GUIDES_LABEL['en']}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">
                    {THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.['en'] ?? theme.description}
                  </p>
                </div>

                {/* Flat article grid (most themes) */}
                {theme.articleKeys && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {theme.articleKeys.map((key) => (
                      <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} />
                    ))}
                  </div>
                )}

                {/* Sub-section article grids (Use Topics) */}
                {theme.subSections && (
                  <div className="space-y-8">
                    {theme.subSections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 px-1 ${colors.badge.split(' ').find(c => c.startsWith('text-')) ?? 'text-primary'}`}>
                          {SUBSECTION_LABELS[sub.title]?.[lang] ?? sub.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {sub.articleKeys.map((key) => (
                            <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-12 border-t border-primary/20" id="faq">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_FAQ_HEADER[lang] ?? HUB_FAQ_HEADER['en']}
          </h2>
          <div className="space-y-4">
            {(HUB_FAQ_DATA[lang] ?? HUB_FAQ_DATA['en']).map((item, i) => (
              <div key={i} className="border border-primary/15 rounded-xl p-6 bg-card">
                <h3 className="font-semibold text-text-primary mb-2 text-base">{item.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}</Link>
          <Link href={navHref('/features', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_FEATURES[lang] ?? HUB_NAV_FEATURES['en']}</Link>
          <Link href={navHref('/how-it-works', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOW[lang] ?? HUB_NAV_HOW['en']}</Link>
          <Link href={navHref('/blog', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_BLOG[lang] ?? HUB_NAV_BLOG['en']}</Link>
        </div>

      </div>
    </div>
  )
}

export function PromptEngineeringHub({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <PromptEngineeringHubContent initialLang={initialLang} />
}
