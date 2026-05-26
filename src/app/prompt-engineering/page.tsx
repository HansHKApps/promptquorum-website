import type { Metadata } from 'next'
import { translations } from '@/translations'
import { PromptEngineeringHub } from '@/components/PromptEngineeringHub'
import { generateAlternates } from '@/lib/hreflang'
import { peContent } from '@/lib/prompt-engineering/content'
import type { Language } from '@/translations'
import { truncateTitle } from '@/lib/utils'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: truncateTitle(t.promptEngineeringHubTitle),
    description: t.promptEngineeringHubDescription,
    alternates: generateAlternates('/prompt-engineering', selectedLang, true, undefined, ['ja', 'zh', 'de', 'fr']),
    openGraph: {
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubOgDescription ?? t.promptEngineeringHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubTwitterDescription ?? t.promptEngineeringHubDescription,
    },
  }
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PromptEngineeringPage({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  const langSuffix = selectedLang === 'en' ? '' : `?lang=${selectedLang}`
  const t = translations[selectedLang as keyof typeof translations]

  // Multilingual FAQ translations for schema markup
  const FAQ_TRANSLATIONS: Record<string, Array<{ q: string; a: string }>> = {
    en: [
      { q: 'What is prompt engineering?', a: 'Prompt engineering is the practice of structuring requests to AI models to get better, more consistent outputs. It involves using frameworks, formatting, examples, and constraints to guide model behavior.' },
      { q: 'What are prompt frameworks?', a: 'Prompt frameworks (like CRAFT, CO-STAR, APE) are structured templates that guide you through building better prompts. They break down requests into specific components—context, role, examples—to improve consistency and quality.' },
      { q: 'How does temperature affect AI output?', a: 'Temperature controls randomness in AI responses. Lower values (0.0–0.5) produce deterministic, factual outputs. Higher values (0.7–1.0) produce creative, varied responses. Use lower temperatures for structured tasks, higher for creative tasks.' },
      { q: 'What is chain-of-thought prompting?', a: 'Chain-of-thought prompting asks AI models to explain their reasoning step-by-step before answering. This technique significantly improves accuracy on complex, multi-step problems like math and logic puzzles.' },
      { q: 'How do I choose between zero-shot and few-shot prompting?', a: 'Zero-shot works for general tasks without examples. Few-shot (providing 2–5 examples) works better for specific formats, domains, or specialized tasks. Test both to see which gives better results for your use case.' },
      { q: 'Is prompt engineering still relevant in 2026?', a: 'Yes — despite improvements in model reasoning, prompt engineering remains essential. Models still produce significantly better outputs with structured inputs. Chain-of-thought prompting improves complex reasoning accuracy by 30–40% in benchmarks. As models improve, prompt engineering shifts from correcting weaknesses to unlocking capabilities.' },
      { q: 'What\'s the difference between prompt engineering and fine-tuning?', a: 'Prompt engineering shapes model behavior through input design without changing model weights — it\'s fast (minutes) and model-agnostic. Fine-tuning trains a model on new data to change its baseline behavior — it takes hours, requires datasets, and produces a specialized model. Use prompt engineering first; fine-tune only when prompts consistently can\'t solve the task.' },
      { q: 'What tools do prompt engineers use?', a: 'The core stack: a prompt IDE (Cursor or VS Code with Continue.dev), a testing framework (Braintrust or Promptfoo for evaluation and CI/CD), a version control system (PromptHub or Git), and a multi-model testing platform (PromptQuorum to compare outputs across GPT-4o, Claude, and Gemini simultaneously). Advanced teams add Vellum for production traffic management.' },
      { q: 'How many AI models should I test my prompts on?', a: 'Test on at least 2–3 models before deploying a prompt. The minimum useful set is GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Flash — these cover the three major providers with different training approaches. For production prompts, add an open-source model (Llama 3 or Mistral) for baseline coverage. Testing on one model and assuming the result generalizes is the most common source of prompt fragility in production.' },
      { q: 'What is the difference between prompt engineering and prompt management?', a: 'Prompt engineering is the craft of writing effective prompts; prompt management is the operational system for storing, versioning, reviewing, and deploying them. A team can have strong prompt engineering but poor management — prompts scattered across code, no version history, no rollback capability. Both are required for production: engineering determines prompt quality, management determines reliability and maintainability.' },
    ],
    de: [
      { q: 'Was ist Prompt Engineering?', a: 'Prompt Engineering ist die Praxis, Anfragen an KI-Modelle so zu strukturieren, dass bessere und konsistentere Ausgaben erzielt werden. Es umfasst den Einsatz von Frameworks, Formatierungen, Beispielen und Einschränkungen zur Steuerung des Modellverhaltens.' },
      { q: 'Was sind Prompt-Frameworks?', a: 'Prompt-Frameworks (wie CRAFT, CO-STAR, APE) sind strukturierte Vorlagen, die Sie durch die Erstellung besserer Prompts führen. Sie zerlegen Anfragen in spezifische Komponenten — Kontext, Rolle, Beispiele — um Konsistenz und Qualität zu verbessern.' },
      { q: 'Wie beeinflusst die Temperatur die KI-Ausgabe?', a: 'Die Temperatur steuert die Zufälligkeit in KI-Antworten. Niedrigere Werte (0,0–0,5) erzeugen deterministische, sachliche Ausgaben. Höhere Werte (0,7–1,0) erzeugen kreative, vielfältige Antworten. Verwenden Sie niedrigere Temperaturen für strukturierte Aufgaben, höhere für kreative Aufgaben.' },
      { q: 'Was ist Chain-of-Thought-Prompting?', a: 'Chain-of-Thought-Prompting fordert KI-Modelle auf, ihren Denkprozess Schritt für Schritt zu erklären, bevor sie antworten. Diese Technik verbessert die Genauigkeit bei komplexen, mehrstufigen Problemen wie Mathematik und Logikrätseln erheblich.' },
      { q: 'Wie wähle ich zwischen Zero-Shot- und Few-Shot-Prompting?', a: 'Zero-Shot funktioniert für allgemeine Aufgaben ohne Beispiele. Few-Shot (Bereitstellung von 2–5 Beispielen) funktioniert besser für spezifische Formate, Domänen oder spezialisierte Aufgaben. Testen Sie beide, um zu sehen, welches für Ihren Anwendungsfall bessere Ergebnisse liefert.' },
      { q: 'Ist Prompt Engineering im Jahr 2026 noch relevant?', a: 'Ja — trotz verbesserter Modelllogik bleibt Prompt Engineering unverzichtbar. Chain-of-Thought-Prompting verbessert die Genauigkeit bei komplexem Denken um 30–40%. Mit besseren Modellen verschiebt sich Prompt Engineering vom Korrigieren von Schwächen hin zum Freischalten von Fähigkeiten.' },
      { q: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?', a: 'Prompt Engineering gestaltet das Modellverhalten durch Eingabedesign ohne Modellgewichte zu ändern — schnell (Minuten) und modell-agnostisch. Fine-Tuning trainiert ein Modell auf neuen Daten und erfordert Datensätze und Stunden. Nutzen Sie zuerst Prompt Engineering; Fine-Tuning nur, wenn Prompts konsistent nicht ausreichen.' },
      { q: 'Welche Tools verwenden Prompt Engineers?', a: 'Der Kern-Stack: eine Prompt-IDE (Cursor oder VS Code mit Continue.dev), ein Testframework (Braintrust oder Promptfoo), ein Versionskontrollsystem (PromptHub oder Git) und eine Multi-Modell-Testplattform (PromptQuorum für gleichzeitige Vergleiche). Fortgeschrittene Teams fügen Vellum für Produktions-Traffic-Management hinzu.' },
      { q: 'Muss ich bei der Nutzung von KI-Tools die DSGVO beachten?', a: 'Ja — bei der Verarbeitung personenbezogener Daten über KI-APIs gilt DSGVO Artikel 28 (Auftragsverarbeitung). Lokale Inferenz oder DSGVO-konforme EU-Anbieter reduzieren das Datenschutzrisiko erheblich. Für den deutschen Mittelstand empfehlen die BSI-Grundschutz-Kataloge klare Richtlinien zur KI-Datenverarbeitung.' },
      { q: 'Ist Prompt Engineering für den deutschen Mittelstand geeignet?', a: 'Ja — Mittelstandsunternehmen nutzen Prompt Engineering besonders für Kundenservice-Automatisierung, Dokumentenverarbeitung und interne Wissensverwaltung. Standardisierte Frameworks (CO-STAR, CRAFT) kombiniert mit EU-gehosteten Modellen erfüllen typische BSI-Sicherheitsanforderungen ohne Investitionen in Fine-Tuning.' },
    ],
    fr: [
      { q: "Qu'est-ce que le prompt engineering ?", a: "Le prompt engineering est la pratique qui consiste à structurer les requêtes adressées aux modèles d'IA pour obtenir des sorties meilleures et plus cohérentes. Il implique l'utilisation de frameworks, de formats, d'exemples et de contraintes pour guider le comportement du modèle." },
      { q: 'Que sont les frameworks de prompt ?', a: "Les frameworks de prompt (comme CRAFT, CO-STAR, APE) sont des modèles structurés qui vous guident dans la construction de meilleurs prompts. Ils décomposent les requêtes en composantes spécifiques — contexte, rôle, exemples — pour améliorer la cohérence et la qualité." },
      { q: "Comment la température affecte-t-elle la sortie IA ?", a: "La température contrôle le caractère aléatoire des réponses IA. Les valeurs basses (0,0–0,5) produisent des sorties déterministes et factuelles. Les valeurs élevées (0,7–1,0) produisent des réponses créatives et variées. Utilisez des températures basses pour les tâches structurées, élevées pour les tâches créatives." },
      { q: "Qu'est-ce que le chain-of-thought prompting ?", a: "Le chain-of-thought prompting demande aux modèles d'IA d'expliquer leur raisonnement étape par étape avant de répondre. Cette technique améliore significativement la précision sur les problèmes complexes et multi-étapes comme les maths et les puzzles logiques." },
      { q: 'Comment choisir entre zero-shot et few-shot prompting ?', a: "Le zero-shot fonctionne pour les tâches générales sans exemples. Le few-shot (fournir 2 à 5 exemples) donne de meilleurs résultats pour des formats spécifiques, des domaines ou des tâches spécialisées. Testez les deux pour voir lequel donne de meilleurs résultats pour votre cas d'usage." },
      { q: 'Le prompt engineering est-il toujours pertinent en 2026 ?', a: "Oui — malgré les améliorations du raisonnement des modèles, le prompt engineering reste essentiel. Le chain-of-thought prompting améliore la précision de raisonnement complexe de 30 à 40%. À mesure que les modèles s'améliorent, le prompt engineering passe de la correction des faiblesses au déverrouillage des capacités." },
      { q: "Quelle est la différence entre prompt engineering et fine-tuning ?", a: "Le prompt engineering façonne le comportement du modèle par la conception des entrées sans modifier les poids — rapide (minutes) et agnostique du modèle. Le fine-tuning entraîne un modèle sur de nouvelles données, nécessitant datasets et heures. Utilisez d'abord le prompt engineering ; fine-tunez seulement quand les prompts ne suffisent pas." },
      { q: 'Quels outils les prompt engineers utilisent-ils ?', a: "Le stack central : une IDE de prompt (Cursor ou VS Code avec Continue.dev), un framework de test (Braintrust ou Promptfoo), un système de contrôle de version (PromptHub ou Git) et une plateforme de test multi-modèles (PromptQuorum pour comparer GPT-4o, Claude et Gemini simultanément). Les équipes avancées ajoutent Vellum pour la gestion du trafic en production." },
    ],
    ja: [
      { q: 'プロンプトエンジニアリングとは何ですか？', a: 'プロンプトエンジニアリングとは、AIモデルへのリクエストを構造化して、より優れた一貫性のある出力を得るための実践です。フレームワーク、フォーマット、例、制約を使用してモデルの動作を誘導します。' },
      { q: 'プロンプトフレームワークとは何ですか？', a: 'プロンプトフレームワーク（CRAFT、CO-STAR、APEなど）は、より良いプロンプトを構築するためのガイドとなる構造化テンプレートです。リクエストをコンテキスト、役割、例などの特定のコンポーネントに分解し、一貫性と品質を向上させます。' },
      { q: '温度はAI出力にどのような影響を与えますか？', a: '温度はAIの応答のランダム性を制御します。低い値（0.0〜0.5）は決定論的で事実に基づく出力を生成します。高い値（0.7〜1.0）はクリエイティブで多様な応答を生成します。構造化タスクには低い温度を、クリエイティブなタスクには高い温度を使用してください。' },
      { q: 'チェーン・オブ・ソート・プロンプティングとは何ですか？', a: 'チェーン・オブ・ソート・プロンプティングは、AIモデルに回答する前にステップバイステップで思考プロセスを説明するよう求めます。この技術は、数学や論理パズルなどの複雑な多段階問題における精度を大幅に向上させます。' },
      { q: 'ゼロショットとフューショットプロンプティングはどう使い分けますか？', a: 'ゼロショットは例なしの一般的なタスクに機能します。フューショット（2〜5つの例を提供）は、特定のフォーマット、ドメイン、または専門的なタスクに対してより効果的です。ユースケースに最適な方法を確認するため、両方をテストしてください。' },
      { q: 'プロンプトエンジニアリングは2026年も重要ですか？', a: 'はい — モデルの推論能力が向上しても依然不可欠です。チェーン・オブ・ソート・プロンプティングはベンチマークで複雑な推論精度を30〜40%向上させます。モデルが改善するにつれて、プロンプトエンジニアリングは弱点の修正から能力の解放へとシフトしています。' },
      { q: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？', a: 'プロンプトエンジニアリングはモデルの重みを変えずに入力設計でモデルの動作を形成します（分単位・モデル非依存）。ファインチューニングは新しいデータでモデルを訓練し、データセットと時間が必要です。まずプロンプトエンジニアリングを試し、一貫して解決できない場合のみファインチューニングを使用してください。' },
      { q: 'プロンプトエンジニアはどんなツールを使いますか？', a: 'コアスタック：プロンプトIDE（CursorまたはContinue.dev付きVS Code）、テストフレームワーク（BraintrustまたはPromptfoo）、バージョン管理（PromptHubまたはGit）、マルチモデルテストプラットフォーム（PromptQuorum）。上級チームはプロダクショントラフィック管理にVellumも追加します。' },
      { q: 'METIのAIガバナンスガイドラインはプロンプトエンジニアリングにどう関係しますか？', a: '経済産業省（METI）の2024年AIガバナンスガイドラインでは、AIシステムの決定を追跡可能にすることを推奨しています。プロンプトのバージョン管理と承認ワークフローを導入することで、この要件を満たしつつ、変更履歴を監査証跡として保持できます。' },
      { q: 'エンタープライズ環境でプロンプトエンジニアリングを安全に運用するには？', a: 'CI/CDゲートによる自動テスト、セキュリティレビュアーによる承認フロー、インジェクション脆弱性スキャンの3層防御が推奨されます。日本の規制業界（金融・医療・法律）では、本番デプロイ前に必ずコンプライアンスレビューを実施しています。' },
    ],
    zh: [
      { q: '什么是提示词工程？', a: '提示词工程是通过结构化对AI模型的请求来获得更好、更一致输出的实践。它涉及使用框架、格式、示例和约束来指导模型行为。' },
      { q: '什么是提示词框架？', a: '提示词框架（如CRAFT、CO-STAR、APE）是引导您构建更好提示词的结构化模板。它们将请求分解为特定组成部分——上下文、角色、示例——以提高一致性和质量。' },
      { q: '温度如何影响AI输出？', a: '温度控制AI响应的随机性。较低的值（0.0–0.5）产生确定性、基于事实的输出。较高的值（0.7–1.0）产生创意性、多样化的响应。结构化任务使用较低温度，创意任务使用较高温度。' },
      { q: '什么是思维链提示？', a: 'AI模型在回答之前逐步解释推理过程的提示技术。这种方法显著提高了数学和逻辑谜题等复杂多步骤问题的准确性。' },
      { q: '如何在零样本和少样本提示之间选择？', a: '零样本适用于没有示例的一般任务。少样本（提供2-5个示例）更适用于特定格式、领域或专业任务。测试两种方法，看看哪种对您的使用场景效果更好。' },
      { q: '2026年提示词工程还重要吗？', a: '是的——尽管模型推理能力不断提升，提示词工程依然必不可少。思维链提示在基准测试中将复杂推理精度提高30-40%。随着模型改进，提示词工程从纠正弱点转向释放能力。' },
      { q: '提示词工程和微调有什么区别？', a: '提示词工程通过输入设计塑造模型行为而不改变模型权重——速度快（分钟级）且与模型无关。微调在新数据上训练模型，需要数据集和数小时的时间。先使用提示词工程；仅在提示词始终无法解决任务时才进行微调。' },
      { q: '提示词工程师使用哪些工具？', a: '核心工具栈：提示词IDE（Cursor或带Continue.dev的VS Code）、测试框架（Braintrust或Promptfoo）、版本控制（PromptHub或Git）以及多模型测试平台（PromptQuorum用于同时比较GPT-4o、Claude和Gemini的输出）。高级团队还会添加Vellum用于生产流量管理。' },
      { q: '使用AI工具需要遵守中国数据安全法吗？', a: '是的——中国《数据安全法》（2021年）和《个人信息保护法》（PIPL）要求中国用户的数据在境内存储和处理。对于处理敏感数据的企业，本地部署模型或阿里云、腾讯云等国内云服务商的AI接口可满足数据安全合规要求。' },
      { q: '如何为企业级生产环境搭建安全的提示词工程体系？', a: '企业级体系需要三层保障：自动化测试（格式验证、安全扫描、幻觉检测）、人工审核（领域专家 + 安全审查员）以及CI/CD门控（未审批提示词无法合并）。金融、医疗、法律行业还需额外的合规审查，建议使用Git进行版本控制并保留完整审计记录。' },
    ],
  }

  const faqsForLang = FAQ_TRANSLATIONS[selectedLang] ?? FAQ_TRANSLATIONS['en']

  const HOWTO_TRANSLATIONS: Record<string, { name: string; steps: Array<{ name: string; text: string }> }> = {
    en: {
      name: 'How to Optimize Your Prompts for Better AI Results',
      steps: [
        { name: 'Define your task clearly', text: 'Write a specific, unambiguous description of what you want the AI to do.' },
        { name: 'Choose a framework', text: 'Select a prompt framework (CRAFT for creative, CO-STAR for complex, SPECS for structured) based on your output needs.' },
        { name: 'Add context and examples', text: 'Provide background information and 2–5 examples of desired input-output pairs.' },
        { name: 'Set constraints', text: 'Specify format, length, tone, and other rules to guide the model.' },
        { name: 'Test across models', text: 'Run your prompt on GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro to compare quality and speed.' },
        { name: 'Refine and iterate', text: 'Review outputs, adjust the prompt based on results, and test again until satisfied.' },
      ],
    },
    de: {
      name: 'Wie Sie Ihre Prompts für bessere KI-Ergebnisse optimieren',
      steps: [
        { name: 'Aufgabe klar definieren', text: 'Schreiben Sie eine spezifische, eindeutige Beschreibung dessen, was die KI tun soll.' },
        { name: 'Framework wählen', text: 'Wählen Sie ein Prompt-Framework (CRAFT für kreative, CO-STAR für komplexe, SPECS für strukturierte Aufgaben).' },
        { name: 'Kontext und Beispiele hinzufügen', text: 'Stellen Sie Hintergrundinformationen und 2–5 Beispiele gewünschter Input-Output-Paare bereit.' },
        { name: 'Einschränkungen festlegen', text: 'Geben Sie Format, Länge, Ton und andere Regeln zur Steuerung des Modells an.' },
        { name: 'Über Modelle testen', text: 'Führen Sie Ihren Prompt auf GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro aus, um Qualität und Geschwindigkeit zu vergleichen.' },
        { name: 'Verfeinern und iterieren', text: 'Überprüfen Sie Ausgaben, passen Sie den Prompt basierend auf den Ergebnissen an und testen Sie erneut.' },
      ],
    },
    fr: {
      name: 'Comment optimiser vos prompts pour de meilleurs résultats IA',
      steps: [
        { name: 'Définir clairement votre tâche', text: "Rédigez une description spécifique et sans ambiguïté de ce que vous voulez que l'IA fasse." },
        { name: 'Choisir un framework', text: 'Sélectionnez un framework de prompt (CRAFT pour créatif, CO-STAR pour complexe, SPECS pour structuré) selon vos besoins.' },
        { name: 'Ajouter contexte et exemples', text: "Fournissez des informations de fond et 2 à 5 exemples de paires entrée-sortie souhaitées." },
        { name: 'Définir les contraintes', text: 'Précisez le format, la longueur, le ton et les autres règles pour guider le modèle.' },
        { name: 'Tester sur plusieurs modèles', text: 'Exécutez votre prompt sur GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro pour comparer qualité et vitesse.' },
        { name: 'Affiner et itérer', text: 'Examinez les sorties, ajustez le prompt en fonction des résultats et testez à nouveau.' },
      ],
    },
    ja: {
      name: 'AIの結果を改善するためのプロンプト最適化方法',
      steps: [
        { name: 'タスクを明確に定義する', text: 'AIに何をしてほしいか、具体的で明確な説明を書いてください。' },
        { name: 'フレームワークを選択する', text: '出力ニーズに基づいてプロンプトフレームワークを選択します（クリエイティブにはCRAFT、複雑にはCO-STAR、構造化にはSPECS）。' },
        { name: 'コンテキストと例を追加する', text: 'バックグラウンド情報と、望ましい入力-出力ペアの2〜5つの例を提供してください。' },
        { name: '制約を設定する', text: 'モデルを誘導するためのフォーマット、長さ、トーン、その他のルールを指定してください。' },
        { name: '複数のモデルでテストする', text: 'GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proでプロンプトを実行して、品質と速度を比較してください。' },
        { name: '改良と反復', text: '出力を確認し、結果に基づいてプロンプトを調整し、満足するまで再テストしてください。' },
      ],
    },
    zh: {
      name: '如何优化提示词以获得更好的AI结果',
      steps: [
        { name: '明确定义任务', text: '撰写具体、明确的描述，说明您希望AI执行的操作。' },
        { name: '选择框架', text: '根据输出需求选择提示词框架（创意任务用CRAFT，复杂任务用CO-STAR，结构化任务用SPECS）。' },
        { name: '添加上下文和示例', text: '提供背景信息和2-5个所需输入-输出对的示例。' },
        { name: '设置约束条件', text: '指定格式、长度、语气和其他规则来引导模型。' },
        { name: '跨模型测试', text: '在GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro上运行提示词，比较质量和速度。' },
        { name: '优化迭代', text: '检查输出结果，根据结果调整提示词，反复测试直至满意。' },
      ],
    },
  }

  const howToForLang = HOWTO_TRANSLATIONS[selectedLang] ?? HOWTO_TRANSLATIONS['en']

  // Extract article titles from peContent to pass as prop (keeps full article content server-side)
  const titlesMap: Record<string, Partial<Record<Language, string>>> = Object.fromEntries(
    Object.entries(peContent).map(([key, langMap]) => [
      key,
      Object.fromEntries(
        Object.entries(langMap).map(([lang, article]) => [lang, article.title])
      ),
    ])
  )

  // Educational level per content key — used by hub personalization signals
  const articleLevels: Record<string, string> = Object.fromEntries(
    Object.entries(peContent).map(([key, langMap]) => [
      key,
      (langMap.en?.educationalLevel ?? '').toLowerCase(),
    ])
  )

  const BREADCRUMB_LABELS: Record<string, string> = {
    en: 'Prompt Engineering', de: 'Prompt Engineering', fr: 'Ingénierie de prompts',
    ja: 'プロンプトエンジニアリング', zh: '提示词工程',
  }

  const BREADCRUMB_HOME: Record<string, string> = {
    en: 'Home', de: 'Startseite', fr: 'Accueil', ja: 'ホーム', zh: '主页',
  }

  const ITEM_LIST_NAMES: Record<string, string[]> = {
    en: [
      'What Is Prompt Engineering?',
      'Chain-of-Thought Prompting',
      'Zero-Shot vs. Few-Shot Prompting',
      'Temperature and Top-P',
      'System Prompt vs. User Prompt',
      'CO-STAR Framework',
      'RAG Explained',
      'Prompt Chaining',
    ],
    de: [
      'Was ist Prompt Engineering?',
      'Chain-of-Thought-Prompting',
      'Zero-Shot vs. Few-Shot-Prompting',
      'Temperatur und Top-P',
      'System-Prompt vs. Benutzer-Prompt',
      'CO-STAR-Framework',
      'RAG erklärt',
      'Prompt-Chaining',
    ],
    fr: [
      "Qu'est-ce que le prompt engineering ?",
      'Chain-of-Thought Prompting',
      'Zero-Shot vs. Few-Shot Prompting',
      'Température et Top-P',
      'Prompt système vs. Prompt utilisateur',
      'Framework CO-STAR',
      'RAG expliqué',
      'Chaînage de prompts',
    ],
    ja: [
      'プロンプトエンジニアリングとは何か',
      'チェーン・オブ・ソート・プロンプティング',
      'ゼロショットvsフューショット',
      '温度とTop-P',
      'システムプロンプトvsユーザープロンプト',
      'CO-STARフレームワーク',
      'RAG解説',
      'プロンプトチェーニング',
    ],
    zh: [
      '什么是提示词工程？',
      '思维链提示',
      '零样本与少样本提示',
      '温度与Top-P',
      '系统提示与用户提示',
      'CO-STAR框架',
      'RAG解析',
      '提示词链',
    ],
  }

  const jsonLdSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': t.promptEngineeringHubTitle,
      'url': `https://www.promptquorum.com/prompt-engineering${langSuffix}`,
      'inLanguage': selectedLang,
      'description': t.promptEngineeringHubDescription,
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', '.hub-hero-desc', '.key-takeaways'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': t.promptEngineeringHubTitle,
      'url': `https://www.promptquorum.com/prompt-engineering${langSuffix}`,
      'inLanguage': selectedLang,
      'description': t.promptEngineeringHubDescription,
      'numberOfItems': 80,
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
      'about': { '@type': 'Thing', 'name': 'Prompt Engineering' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'inLanguage': selectedLang,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': BREADCRUMB_HOME[selectedLang] ?? 'Home', 'item': 'https://www.promptquorum.com' },
        { '@type': 'ListItem', 'position': 2, 'name': BREADCRUMB_LABELS[selectedLang] ?? 'Prompt Engineering', 'item': `https://www.promptquorum.com/prompt-engineering${langSuffix}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': selectedLang,
      'mainEntity': faqsForLang.map(({ q, a }) => ({
        '@type': 'Question',
        'name': q,
        'acceptedAnswer': { '@type': 'Answer', 'text': a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': howToForLang.name,
      'inLanguage': selectedLang,
      'step': howToForLang.steps.map((s, i) => ({
        '@type': 'HowToStep',
        'position': i + 1,
        'name': s.name,
        'text': s.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': t.promptEngineeringHubTitle,
      'inLanguage': selectedLang,
      'numberOfItems': 8,
      'itemListElement': (() => {
        const names = ITEM_LIST_NAMES[selectedLang] ?? ITEM_LIST_NAMES['en']
        const slugs = [
          'what-is-prompt-engineering',
          'chain-of-thought-prompting',
          'zero-shot-vs-few-shot',
          'temperature-and-top-p-control-ai-creativity',
          'system-prompt-vs-user-prompt-whats-the-difference',
          'co-star-framework',
          'rag-explained',
          'prompt-chaining',
        ]
        return slugs.map((slug, i) => ({
          '@type': 'ListItem',
          'position': i + 1,
          'url': `https://www.promptquorum.com/prompt-engineering/${slug}${langSuffix}`,
          'name': names[i],
        }))
      })(),
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchemas),
        }}
      />
      <PromptEngineeringHub initialLang={selectedLang as Language} titlesMap={titlesMap} articleLevels={articleLevels} />
    </>
  )
}
