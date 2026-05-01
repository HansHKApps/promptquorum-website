import type { Metadata } from 'next'
import { translations } from '@/translations'
import { PromptEngineeringHub } from '@/components/PromptEngineeringHub'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.promptEngineeringHubTitle,
    description: t.promptEngineeringHubDescription,
    alternates: generateAlternates('/prompt-engineering', selectedLang),
    openGraph: {
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubDescription,
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
    ],
    de: [
      { q: 'Was ist Prompt Engineering?', a: 'Prompt Engineering ist die Praxis, Anfragen an KI-Modelle so zu strukturieren, dass bessere und konsistentere Ausgaben erzielt werden. Es umfasst den Einsatz von Frameworks, Formatierungen, Beispielen und Einschränkungen zur Steuerung des Modellverhaltens.' },
      { q: 'Was sind Prompt-Frameworks?', a: 'Prompt-Frameworks (wie CRAFT, CO-STAR, APE) sind strukturierte Vorlagen, die Sie durch die Erstellung besserer Prompts führen. Sie zerlegen Anfragen in spezifische Komponenten — Kontext, Rolle, Beispiele — um Konsistenz und Qualität zu verbessern.' },
      { q: 'Wie beeinflusst die Temperatur die KI-Ausgabe?', a: 'Die Temperatur steuert die Zufälligkeit in KI-Antworten. Niedrigere Werte (0,0–0,5) erzeugen deterministische, sachliche Ausgaben. Höhere Werte (0,7–1,0) erzeugen kreative, vielfältige Antworten. Verwenden Sie niedrigere Temperaturen für strukturierte Aufgaben, höhere für kreative Aufgaben.' },
      { q: 'Was ist Chain-of-Thought-Prompting?', a: 'Chain-of-Thought-Prompting fordert KI-Modelle auf, ihren Denkprozess Schritt für Schritt zu erklären, bevor sie antworten. Diese Technik verbessert die Genauigkeit bei komplexen, mehrstufigen Problemen wie Mathematik und Logikrätseln erheblich.' },
      { q: 'Wie wähle ich zwischen Zero-Shot- und Few-Shot-Prompting?', a: 'Zero-Shot funktioniert für allgemeine Aufgaben ohne Beispiele. Few-Shot (Bereitstellung von 2–5 Beispielen) funktioniert besser für spezifische Formate, Domänen oder spezialisierte Aufgaben. Testen Sie beide, um zu sehen, welches für Ihren Anwendungsfall bessere Ergebnisse liefert.' },
    ],
    fr: [
      { q: "Qu'est-ce que le prompt engineering ?", a: "Le prompt engineering est la pratique qui consiste à structurer les requêtes adressées aux modèles d'IA pour obtenir des sorties meilleures et plus cohérentes. Il implique l'utilisation de frameworks, de formats, d'exemples et de contraintes pour guider le comportement du modèle." },
      { q: 'Que sont les frameworks de prompt ?', a: "Les frameworks de prompt (comme CRAFT, CO-STAR, APE) sont des modèles structurés qui vous guident dans la construction de meilleurs prompts. Ils décomposent les requêtes en composantes spécifiques — contexte, rôle, exemples — pour améliorer la cohérence et la qualité." },
      { q: "Comment la température affecte-t-elle la sortie IA ?", a: "La température contrôle le caractère aléatoire des réponses IA. Les valeurs basses (0,0–0,5) produisent des sorties déterministes et factuelles. Les valeurs élevées (0,7–1,0) produisent des réponses créatives et variées. Utilisez des températures basses pour les tâches structurées, élevées pour les tâches créatives." },
      { q: "Qu'est-ce que le chain-of-thought prompting ?", a: "Le chain-of-thought prompting demande aux modèles d'IA d'expliquer leur raisonnement étape par étape avant de répondre. Cette technique améliore significativement la précision sur les problèmes complexes et multi-étapes comme les maths et les puzzles logiques." },
      { q: 'Comment choisir entre zero-shot et few-shot prompting ?', a: "Le zero-shot fonctionne pour les tâches générales sans exemples. Le few-shot (fournir 2 à 5 exemples) donne de meilleurs résultats pour des formats spécifiques, des domaines ou des tâches spécialisées. Testez les deux pour voir lequel donne de meilleurs résultats pour votre cas d'usage." },
    ],
    ja: [
      { q: 'プロンプトエンジニアリングとは何ですか？', a: 'プロンプトエンジニアリングとは、AIモデルへのリクエストを構造化して、より優れた一貫性のある出力を得るための実践です。フレームワーク、フォーマット、例、制約を使用してモデルの動作を誘導します。' },
      { q: 'プロンプトフレームワークとは何ですか？', a: 'プロンプトフレームワーク（CRAFT、CO-STAR、APEなど）は、より良いプロンプトを構築するためのガイドとなる構造化テンプレートです。リクエストをコンテキスト、役割、例などの特定のコンポーネントに分解し、一貫性と品質を向上させます。' },
      { q: '温度はAI出力にどのような影響を与えますか？', a: '温度はAIの応答のランダム性を制御します。低い値（0.0〜0.5）は決定論的で事実に基づく出力を生成します。高い値（0.7〜1.0）はクリエイティブで多様な応答を生成します。構造化タスクには低い温度を、クリエイティブなタスクには高い温度を使用してください。' },
      { q: 'チェーン・オブ・ソート・プロンプティングとは何ですか？', a: 'チェーン・オブ・ソート・プロンプティングは、AIモデルに回答する前にステップバイステップで思考プロセスを説明するよう求めます。この技術は、数学や論理パズルなどの複雑な多段階問題における精度を大幅に向上させます。' },
      { q: 'ゼロショットとフューショットプロンプティングはどう使い分けますか？', a: 'ゼロショットは例なしの一般的なタスクに機能します。フューショット（2〜5つの例を提供）は、特定のフォーマット、ドメイン、または専門的なタスクに対してより効果的です。ユースケースに最適な方法を確認するため、両方をテストしてください。' },
    ],
    zh: [
      { q: '什么是提示词工程？', a: '提示词工程是通过结构化对AI模型的请求来获得更好、更一致输出的实践。它涉及使用框架、格式、示例和约束来指导模型行为。' },
      { q: '什么是提示词框架？', a: '提示词框架（如CRAFT、CO-STAR、APE）是引导您构建更好提示词的结构化模板。它们将请求分解为特定组成部分——上下文、角色、示例——以提高一致性和质量。' },
      { q: '温度如何影响AI输出？', a: '温度控制AI响应的随机性。较低的值（0.0–0.5）产生确定性、基于事实的输出。较高的值（0.7–1.0）产生创意性、多样化的响应。结构化任务使用较低温度，创意任务使用较高温度。' },
      { q: '什么是思维链提示？', a: 'AI模型在回答之前逐步解释推理过程的提示技术。这种方法显著提高了数学和逻辑谜题等复杂多步骤问题的准确性。' },
      { q: '如何在零样本和少样本提示之间选择？', a: '零样本适用于没有示例的一般任务。少样本（提供2-5个示例）更适用于特定格式、领域或专业任务。测试两种方法，看看哪种对您的使用场景效果更好。' },
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

  const BREADCRUMB_LABELS: Record<string, string> = {
    en: 'Prompt Engineering', de: 'Prompt Engineering', fr: 'Ingénierie de prompts',
    ja: 'プロンプトエンジニアリング', zh: '提示词工程',
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
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
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
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'url': `https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering${langSuffix}`, 'name': 'What Is Prompt Engineering?' },
        { '@type': 'ListItem', 'position': 2, 'url': `https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting${langSuffix}`, 'name': 'Chain-of-Thought Prompting' },
        { '@type': 'ListItem', 'position': 3, 'url': `https://www.promptquorum.com/prompt-engineering/zero-shot-vs-few-shot${langSuffix}`, 'name': 'Zero-Shot vs. Few-Shot Prompting' },
        { '@type': 'ListItem', 'position': 4, 'url': `https://www.promptquorum.com/prompt-engineering/temperature-and-top-p-control-ai-creativity${langSuffix}`, 'name': 'Temperature and Top-P' },
        { '@type': 'ListItem', 'position': 5, 'url': `https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference${langSuffix}`, 'name': 'System Prompt vs. User Prompt' },
        { '@type': 'ListItem', 'position': 6, 'url': `https://www.promptquorum.com/prompt-engineering/co-star-framework${langSuffix}`, 'name': 'CO-STAR Framework' },
        { '@type': 'ListItem', 'position': 7, 'url': `https://www.promptquorum.com/prompt-engineering/rag-explained${langSuffix}`, 'name': 'RAG Explained' },
        { '@type': 'ListItem', 'position': 8, 'url': `https://www.promptquorum.com/prompt-engineering/prompt-chaining${langSuffix}`, 'name': 'Prompt Chaining' },
      ],
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
      <PromptEngineeringHub initialLang={selectedLang as any} />
    </>
  )
}
