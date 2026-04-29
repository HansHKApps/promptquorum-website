'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { peContent, type PESection } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { LEARNING_PATHS, TRENDING_TERMS_2026, getTermPaths, DOMAIN_TO_PATH, LEVEL_TO_PATHS, type LearningPath } from '@/lib/prompt-engineering/learningPaths'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { GlossaryComparisonTable } from '@/components/GlossaryComparisonTable'

interface Props {
  slug: string
  initialLang?: Language
}

// Jump-to-section translations
const JUMP_SECTION_LABELS: Record<Language, Record<string, string>> = {
  en: {
    jumpToSection: 'Jump to section',
    learningPaths: 'Learning Paths',
    trending2026: 'Trending in 2026',
    corePrompting: 'Core Prompting',
    agentsOrchestration: 'Agents & Orchestration',
    safetyAlignment: 'Safety & Alignment',
    evalsTesting: 'Evals & Testing',
    advancedTechniques: 'Reasoning Techniques',
    metricsProduction: 'Metrics & Production',
  },
  de: {
    jumpToSection: 'Zu Abschnitt springen',
    learningPaths: 'Learning Paths',
    trending2026: 'Trending in 2026',
    corePrompting: 'Kern-Prompting',
    agentsOrchestration: 'Agenten & Orchestrierung',
    safetyAlignment: 'Sicherheit & Ausrichtung',
    evalsTesting: 'Bewertungen & Tests',
    advancedTechniques: 'Reasoning-Techniken',
    metricsProduction: 'Metriken & Produktion',
  },
  fr: {
    jumpToSection: 'Aller à la section',
    learningPaths: 'Learning Paths',
    trending2026: 'Trending in 2026',
    corePrompting: 'Prompting principal',
    agentsOrchestration: 'Agents & Orchestration',
    safetyAlignment: 'Sécurité & Alignement',
    evalsTesting: 'Évaluations & Tests',
    advancedTechniques: 'Techniques de raisonnement',
    metricsProduction: 'Métriques & Production',
  },
  ja: {
    jumpToSection: 'セクションにジャンプ',
    learningPaths: 'Learning Paths',
    trending2026: 'Trending in 2026',
    corePrompting: 'コアプロンプティング',
    agentsOrchestration: 'エージェント & オーケストレーション',
    safetyAlignment: 'セキュリティ & アライメント',
    evalsTesting: '評価 & テスト',
    advancedTechniques: '推論テクニック',
    metricsProduction: 'メトリクス & 本番環境',
  },
  zh: {
    jumpToSection: '跳转到部分',
    learningPaths: 'Learning Paths',
    trending2026: 'Trending in 2026',
    corePrompting: '核心提示',
    agentsOrchestration: '代理 & 编排',
    safetyAlignment: '安全 & 对齐',
    evalsTesting: '评估 & 测试',
    advancedTechniques: '推理技术',
    metricsProduction: '指标 & 生产',
  },
}

// Presentation UI translations
const PRESENTATION_UI: Record<Language, { heading: string; description: string; savePdf: string; fallbackDescription: string }> = {
  en: {
    heading: 'Visual Summary',
    description: 'Prefer slides over reading? Click through this interactive presentation covering all key concepts, settings, and use cases — then save as PDF for reference.',
    savePdf: '↓ Save as PDF',
    fallbackDescription: 'The slide deck below covers the key concepts, parameter settings, and use cases from this article. Download the PDF as a reference card.',
  },
  de: {
    heading: 'Visuelle Zusammenfassung',
    description: 'Lieber Slides als lesen? Klick durch diese interaktive Präsentation zu allen Schlüsselkonzepten, Einstellungen und Anwendungsfällen — dann als PDF speichern.',
    savePdf: '↓ Als PDF speichern',
    fallbackDescription: 'Das Foliendeck behandelt die Schlüsselkonzepte, Parametereinstellungen und Anwendungsfälle aus diesem Artikel. Laden Sie das PDF als Referenzkarte herunter.',
  },
  fr: {
    heading: 'Résumé visuel',
    description: 'Préférez les slides à la lecture ? Parcourez cette présentation interactive couvrant tous les concepts clés, paramètres et cas d\'utilisation — puis enregistrez en PDF.',
    savePdf: '↓ Enregistrer en PDF',
    fallbackDescription: 'La présentation couvre les concepts clés, les paramètres d\'ajustement et les cas d\'utilisation de cet article. Téléchargez le PDF comme carte de référence.',
  },
  ja: {
    heading: 'ビジュアルサマリー',
    description: '読むよりスライドを好みますか？すべての主要概念、設定、ユースケースをカバーするこのインタラクティブなプレゼンテーションをクリックして — PDFとして保存。',
    savePdf: '↓ PDFとして保存',
    fallbackDescription: 'スライドデッキはこの記事の主要な概念、パラメータ設定、およびユースケースをカバーしています。PDFを参照カードとしてダウンロードしてください。',
  },
  zh: {
    heading: '视觉摘要',
    description: '比起阅读，更喜欢幻灯片？点击浏览这个涵盖所有关键概念、设置和用例的交互式演示文稿 — 然后保存为PDF以供参考。',
    savePdf: '↓ 保存为PDF',
    fallbackDescription: '幻灯片涵盖本文的关键概念、参数设置和用例。将PDF下载作为参考卡。',
  },
}

// Widget UI translations
const WIDGET_UI: Record<Language, { heading: string; description: string }> = {
  en: {
    heading: 'Interactive Audit Guide',
    description: 'Assess your current readiness with our interactive guide. Answer a few quick questions to get a score, prioritized recommendations, and a downloadable action plan.',
  },
  de: {
    heading: 'Interaktiver Audit-Leitfaden',
    description: 'Bewerten Sie Ihre aktuelle Bereitschaft mit unserem interaktiven Leitfaden. Beantworten Sie einige schnelle Fragen, um eine Bewertung, priorisierte Empfehlungen und einen herunterladbaren Aktionsplan zu erhalten.',
  },
  fr: {
    heading: 'Guide d\'audit interactif',
    description: 'Évaluez votre préparation actuelle avec notre guide interactif. Répondez à quelques questions rapides pour obtenir un score, des recommandations priorisées et un plan d\'action téléchargeable.',
  },
  ja: {
    heading: 'インタラクティブ監査ガイド',
    description: 'インタラクティブガイドで現在の準備状況を評価します。いくつかの簡単な質問に回答して、スコア、優先度付き推奨事項、ダウンロード可能なアクションプランを取得します。',
  },
  zh: {
    heading: '交互式审计指南',
    description: '使用我们的交互式指南评估您当前的准备状况。回答几个快速问题以获得评分、优先级建议和可下载的行动计划。',
  },
}

// Section header translations
const SECTION_HEADER_LABELS: Record<Language, Record<string, string>> = {
  en: { keyTakeaways: 'Key Takeaways', tableOfContents: 'Contents' },
  de: { keyTakeaways: 'Wichtigste Erkenntnisse', tableOfContents: 'Inhalt' },
  fr: { keyTakeaways: 'Points clés', tableOfContents: 'Sommaire' },
  ja: { keyTakeaways: '重要なポイント', tableOfContents: '目次' },
  zh: { keyTakeaways: '关键要点', tableOfContents: '目录' },
}

// Maps article display titles to their URL slugs
const TITLE_TO_SLUG: Record<string, string> = {
  // Fundamentals
  'What Is Prompt Engineering?': 'what-is-prompt-engineering',
  'From GPT-2 to Today: How Prompt Engineering Evolved': 'how-prompt-engineering-evolved',
  'The 5 Building Blocks Every Prompt Needs': '5-building-blocks-every-prompt-needs',
  'AI Hallucinations: Why AI Makes Things Up — and How to Stop Them': 'ai-hallucinations-why-ai-makes-things-up',
  'Faster AI Answers: How to Prompt for Speed': 'faster-ai-answers-how-to-prompt-for-speed',
  'Temperature & Top-P: The Two Dials That Control AI Creativity': 'temperature-and-top-p-control-ai-creativity',
  'Context Windows Explained: Why Your AI Forgets': 'context-windows-explained-why-ai-forgets',
  'Beyond Text: How to Prompt with Images': 'beyond-text-how-to-prompt-with-images',
  'Tokens, Costs & Limits: The Economics of AI Prompting': 'tokens-costs-limits-economics-of-ai-prompting',
  "System Prompt vs. User Prompt: What's the Difference?": 'system-prompt-vs-user-prompt-whats-the-difference',
  'GPT, Claude or Gemini? How to Pick the Right Model': 'gpt-claude-or-gemini-how-to-pick-the-right-model',
  'Prompt Engineering Glossary: 100 Key Terms': 'prompt-engineering-glossary',
  // Frameworks
  'Which Prompt Framework Should You Use?': 'which-prompt-framework-should-you-use',
  'The Single-Step Prompt Method': 'the-single-step-prompt-method',
  'APE Framework': 'ape-framework',
  'CRAFT Framework': 'craft-framework',
  'CO-STAR Framework': 'co-star-framework',
  'SPECS Framework': 'specs-framework',
  'RISEN Framework': 'risen-framework',
  'TRACE Framework': 'trace-framework',
  "Google's Prompting Guide": 'googles-prompting-guide',
  'RTF Framework': 'rtf-framework',
  'Build Your Own Framework': 'build-your-own-prompt-framework',
  'Build Your Own Prompt Framework': 'build-your-own-prompt-framework',
  // Techniques
  'Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?': 'zero-shot-vs-few-shot',
  'Constrained Prompting: How to Set Rules the AI Must Follow': 'constrained-prompting',
  'Chain-of-Thought Prompting: Make AI Show Its Reasoning': 'chain-of-thought-prompting',
  'Persona Prompting: Give Your AI a Role and Watch It Improve': 'persona-prompting',
  'Prompt Chaining: How to Break Big Tasks Into Winning Steps': 'prompt-chaining',
  'Negative Prompting: Tell the AI What NOT to Do': 'negative-prompting',
  'Self-Consistency Prompting: Let the AI Check Its Own Work': 'self-consistency-prompting',
  'Tree of Thought & ReAct: Advanced Reasoning for Hard Problems': 'tree-of-thought-and-react',
  'RAG Explained: How to Ground AI Answers in Real Data': 'rag-explained',
  'Structured Output & JSON Mode: Get AI to Return Usable Data': 'structured-output-and-json-mode',
  // Use Topics
  "Write Better Code with AI: A Developer's Guide": 'write-better-code-with-ai',
  'AI-Powered Research: How to Research Smarter': 'ai-powered-research',
  'SEO Meets AI: How to Prompt for Better Rankings': 'seo-meets-ai',
  'Teaching with AI: Prompts That Work in the Classroom': 'teaching-with-ai',
  'Extract & Summarise: How to Pull Key Facts Fast': 'extract-and-summarise',
  'AI Code Review: Prompts That Catch Bugs': 'ai-code-review',
  'Prompting Across Languages: How to Get Consistent Results': 'prompting-across-languages',
  'Control the Output: JSON, Markdown, Tables and More': 'control-the-output',
  'How to Build Quality Checks Directly Into Your Prompts': 'build-quality-checks',
  'Your Brand Voice, Your AI: How to Maintain Consistent Tone': 'your-brand-voice-ai',
  'Build a Prompt Library That Saves Hours': 'build-a-prompt-library',
}

// Top 20 most important AI & prompt engineering terms for 2026
// Used for glossary prioritization layer
// Anchor IDs follow glossary term ID format: term-{slug}
const TOP_20_TERMS: Record<Language, Array<{ term: string; anchor: string; description: string }>> = {
  en: [
    { term: 'RAG (Retrieval-Augmented Generation)', anchor: 'term-rag-retrieval-augmented-generation', description: 'Connecting LLMs to external knowledge bases so they answer based on real data, not training memory.' },
    { term: 'Chain-of-Thought (CoT)', anchor: 'term-chain-of-thought-prompting', description: 'Asking the model to show its reasoning step-by-step before giving the final answer, improving accuracy on complex problems.' },
    { term: 'AI Agent', anchor: 'term-ai-agent', description: 'An autonomous AI system that plans tasks, calls tools, and iterates until reaching a goal without human intervention.' },
    { term: 'Prompt Injection', anchor: 'term-prompt-injection', description: 'An attack where untrusted user input tricks an LLM into ignoring its original instructions.' },
    { term: 'Few-Shot Prompting', anchor: 'term-few-shot-prompting', description: 'Providing 2–5 examples of the desired behavior in the prompt so the model learns the pattern.' },
    { term: 'Fine-Tuning', anchor: 'term-fine-tuning', description: 'Retraining a model on task-specific data to improve its performance on that exact task.' },
    { term: 'Embeddings', anchor: 'term-embeddings', description: 'Converting text or images into numerical vectors that capture meaning, enabling semantic search and similarity.' },
    { term: 'Vector Database', anchor: 'term-vector-database', description: 'A specialized database that stores and retrieves embeddings by similarity, enabling fast semantic search at scale.' },
    { term: 'Hallucination', anchor: 'term-hallucination', description: 'When an LLM generates confident-sounding but false information, fabricating facts or citations.' },
    { term: 'Context Window', anchor: 'term-context-window', description: 'The maximum number of tokens an LLM can process in a single request (e.g., GPT-4o: 128k tokens).' },
    { term: 'Temperature', anchor: 'term-temperature-and-top-p', description: 'A setting controlling randomness: low (0.0) = predictable, high (1.0) = creative/chaotic.' },
    { term: 'Zero-Shot Prompting', anchor: 'term-zero-shot-prompting', description: 'Asking the model to perform a task without any examples — the baseline approach.' },
    { term: 'Tool Calling', anchor: 'term-tool-calling', description: 'Enabling an LLM to call external APIs, run code, or trigger actions based on its reasoning.' },
    { term: 'Guardrails', anchor: 'term-guardrails', description: 'Safety systems that filter harmful inputs and outputs, preventing misuse or unwanted behavior.' },
    { term: 'LLM Evaluation', anchor: 'term-llm-evaluation', description: 'Measuring model quality using benchmarks, human ratings, or automated metrics like BLEU or ROUGE.' },
    { term: 'Prompt Engineering', anchor: 'term-prompt-engineering', description: 'The art of writing precise instructions to get accurate, useful answers from AI models.' },
    { term: 'Multi-Agent Systems', anchor: 'term-multi-agent-systems', description: 'Multiple independent AI agents working in parallel or sequence to solve complex problems collaboratively.' },
    { term: 'Context Engineering', anchor: 'term-context-engineering', description: 'Structuring the context window strategically to prioritize important information and reduce noise.' },
    { term: 'Latency', anchor: 'term-latency', description: 'The time delay between sending a prompt and receiving the complete response (e.g., 800ms for GPT-4o).' },
    { term: 'Cost Optimization', anchor: 'term-cost-optimization', description: 'Techniques like model selection, prompt caching, and batch processing to reduce API spending.' },
  ],
  de: [
    { term: 'RAG (Retrieval-Augmented Generation)', anchor: 'term-rag-retrieval-augmented-generation', description: 'LLMs mit externen Wissensdatenbanken verbinden, damit sie basierend auf echten Daten antworten.' },
    { term: 'Chain-of-Thought (CoT)', anchor: 'term-chain-of-thought-prompting', description: 'Das Modell auffordern, seinen Denkprozess Schritt für Schritt zu zeigen, bevor es die Endantwort gibt.' },
    { term: 'AI Agent', anchor: 'term-ai-agent', description: 'Ein autonomes KI-System, das Aufgaben plant, Tools aufruft und iteriert, bis es ein Ziel erreicht.' },
    { term: 'Prompt Injection', anchor: 'term-prompt-injection', description: 'Ein Angriff, bei dem nicht vertrauenswürdige Eingaben ein LLM dazu bringen, seine Anweisungen zu ignorieren.' },
    { term: 'Few-Shot Prompting', anchor: 'term-few-shot-prompting', description: 'Bereitstellung von 2–5 Beispielen im Prompt, damit das Modell das Muster lernt.' },
    { term: 'Fine-Tuning', anchor: 'term-fine-tuning', description: 'Umschulung eines Modells auf aufgabenspezifische Daten, um seine Leistung zu verbessern.' },
    { term: 'Embeddings', anchor: 'term-embeddings', description: 'Umwandlung von Text oder Bildern in numerische Vektoren, die Bedeutung erfassen.' },
    { term: 'Vector Database', anchor: 'term-vector-database', description: 'Eine spezialisierte Datenbank, die Embeddings nach Ähnlichkeit speichert und abruft.' },
    { term: 'Hallucination', anchor: 'term-hallucination', description: 'Wenn ein LLM selbstbewusst falsche Informationen generiert oder Fakten erfindet.' },
    { term: 'Context Window', anchor: 'term-context-window', description: 'Die maximale Anzahl von Tokens, die ein LLM in einer Anfrage verarbeiten kann.' },
    { term: 'Temperature', anchor: 'term-temperature-and-top-p', description: 'Eine Einstellung, die Zufälligkeit steuert: niedrig = vorhersehbar, hoch = kreativ.' },
    { term: 'Zero-Shot Prompting', anchor: 'term-zero-shot-prompting', description: 'Aufforderung an das Modell, eine Aufgabe ohne Beispiele zu erfüllen.' },
    { term: 'Tool Calling', anchor: 'term-tool-calling', description: 'LLM ermöglichen, externe APIs aufzurufen oder Code basierend auf Reasoning auszuführen.' },
    { term: 'Guardrails', anchor: 'term-guardrails', description: 'Sicherheitssysteme, die schädliche Ein- und Ausgaben filtern.' },
    { term: 'LLM Evaluation', anchor: 'term-llm-evaluation', description: 'Messung der Modellqualität mit Benchmarks oder automatisierten Metriken.' },
    { term: 'Prompt Engineering', anchor: 'term-prompt-engineering', description: 'Die Kunst, präzise Anweisungen zu schreiben, um genaue Antworten von KI-Modellen zu erhalten.' },
    { term: 'Multi-Agent Systems', anchor: 'term-multi-agent-systems', description: 'Mehrere unabhängige KI-Agenten, die zusammenarbeiten, um komplexe Probleme zu lösen.' },
    { term: 'Context Engineering', anchor: 'term-context-engineering', description: 'Strategische Strukturierung des Context Windows, um wichtige Informationen zu priorisieren.' },
    { term: 'Latency', anchor: 'term-latency', description: 'Die Verzögerung zwischen dem Senden eines Prompts und dem Empfang der Antwort.' },
    { term: 'Cost Optimization', anchor: 'term-cost-optimization', description: 'Techniken wie Modellauswahl und Batch-Verarbeitung zur Reduzierung der API-Kosten.' },
  ],
  fr: [
    { term: 'RAG (Retrieval-Augmented Generation)', anchor: 'term-rag-retrieval-augmented-generation', description: 'Connecter les LLMs à des bases de connaissances externes pour répondre basé sur des données réelles.' },
    { term: 'Chain-of-Thought (CoT)', anchor: 'term-chain-of-thought-prompting', description: 'Demander au modèle de montrer son raisonnement étape par étape avant de donner la réponse finale.' },
    { term: 'AI Agent', anchor: 'term-ai-agent', description: 'Un système IA autonome qui planifie des tâches, appelle des outils et itère jusqu\'à atteindre un objectif.' },
    { term: 'Prompt Injection', anchor: 'term-prompt-injection', description: 'Une attaque où une entrée non fiable trompe un LLM pour ignorer ses instructions originales.' },
    { term: 'Few-Shot Prompting', anchor: 'term-few-shot-prompting', description: 'Fournir 2–5 exemples du comportement souhaité pour que le modèle apprenne le modèle.' },
    { term: 'Fine-Tuning', anchor: 'term-fine-tuning', description: 'Réentraîner un modèle sur des données spécifiques à la tâche pour améliorer ses performances.' },
    { term: 'Embeddings', anchor: 'term-embeddings', description: 'Conversion de texte ou d\'images en vecteurs numériques qui capturent le sens.' },
    { term: 'Vector Database', anchor: 'term-vector-database', description: 'Une base de données spécialisée qui stocke et récupère les embeddings par similarité.' },
    { term: 'Hallucination', anchor: 'term-hallucination', description: 'Quand un LLM génère des informations fausses mais confiantes, inventant des faits.' },
    { term: 'Context Window', anchor: 'term-context-window', description: 'Le nombre maximum de tokens qu\'un LLM peut traiter dans une seule demande.' },
    { term: 'Temperature', anchor: 'term-temperature-and-top-p', description: 'Un paramètre contrôlant l\'aléatoire: bas = prévisible, haut = créatif.' },
    { term: 'Zero-Shot Prompting', anchor: 'term-zero-shot-prompting', description: 'Demander au modèle d\'effectuer une tâche sans aucun exemple.' },
    { term: 'Tool Calling', anchor: 'term-tool-calling', description: 'Permettre à un LLM d\'appeler des APIs externes ou d\'exécuter des actions.' },
    { term: 'Guardrails', anchor: 'term-guardrails', description: 'Systèmes de sécurité qui filtrent les entrées et sorties nuisibles.' },
    { term: 'LLM Evaluation', anchor: 'term-llm-evaluation', description: 'Mesurer la qualité du modèle avec des benchmarks ou des métriques automatisées.' },
    { term: 'Prompt Engineering', anchor: 'term-prompt-engineering', description: 'L\'art d\'écrire des instructions précises pour obtenir des réponses exactes des modèles IA.' },
    { term: 'Multi-Agent Systems', anchor: 'term-multi-agent-systems', description: 'Plusieurs agents IA indépendants travaillant ensemble pour résoudre des problèmes complexes.' },
    { term: 'Context Engineering', anchor: 'term-context-engineering', description: 'Structuration stratégique de la fenêtre de contexte pour prioriser les informations importantes.' },
    { term: 'Latency', anchor: 'term-latency', description: 'Le délai entre l\'envoi d\'un prompt et la réception de la réponse complète.' },
    { term: 'Cost Optimization', anchor: 'term-cost-optimization', description: 'Techniques comme la sélection de modèle et le traitement par lots pour réduire les dépenses.' },
  ],
  ja: [
    { term: 'RAG (Retrieval-Augmented Generation)', anchor: 'term-rag-retrieval-augmented-generation', description: 'LLMを外部ナレッジベースに接続して、実際のデータに基づいて回答させること。' },
    { term: 'Chain-of-Thought (CoT)', anchor: 'term-chain-of-thought-prompting', description: 'モデルに段階的に推論過程を示させてから最終回答を与えさせること。' },
    { term: 'AI Agent', anchor: 'term-ai-agent', description: 'タスクを計画し、ツールを呼び出し、目標に達するまで繰り返す自律的なAIシステム。' },
    { term: 'Prompt Injection', anchor: 'term-prompt-injection', description: '信頼できない入力がLLMの元の指示を無視させるよう騙すこと。' },
    { term: 'Few-Shot Prompting', anchor: 'term-few-shot-prompting', description: 'プロンプトに2～5つの例を提供してモデルにパターンを学ばせること。' },
    { term: 'Fine-Tuning', anchor: 'term-fine-tuning', description: '特定のタスク用データでモデルを再訓練してパフォーマンスを向上させること。' },
    { term: 'Embeddings', anchor: 'term-embeddings', description: 'テキストや画像を意味を捉えた数値ベクトルに変換すること。' },
    { term: 'Vector Database', anchor: 'term-vector-database', description: '埋め込みを類似度で保存・取得する特殊なデータベース。' },
    { term: 'Hallucination', anchor: 'term-hallucination', description: 'LLMが自信を持って誤った情報を生成したり、事実を作り上げること。' },
    { term: 'Context Window', anchor: 'term-context-window', description: '1つのリクエストで処理できるトークンの最大数（例：GPT-4oは128k）。' },
    { term: 'Temperature', anchor: 'term-temperature-and-top-p', description: 'ランダム性を制御する設定：低い＝予測可能、高い＝創造的。' },
    { term: 'Zero-Shot Prompting', anchor: 'term-zero-shot-prompting', description: '例なしでモデルにタスクを実行させること。' },
    { term: 'Tool Calling', anchor: 'term-tool-calling', description: 'LLMが外部APIを呼び出したりコードを実行したりできるようにすること。' },
    { term: 'Guardrails', anchor: 'term-guardrails', description: '有害な入出力をフィルタリングするセキュリティシステム。' },
    { term: 'LLM Evaluation', anchor: 'term-llm-evaluation', description: 'ベンチマークまたは自動メトリクスを使用してモデル品質を測定すること。' },
    { term: 'Prompt Engineering', anchor: 'term-prompt-engineering', description: 'AIモデルから正確な答えを得るための正確な指示を書く技術。' },
    { term: 'Multi-Agent Systems', anchor: 'term-multi-agent-systems', description: '複数の独立したAIエージェントが協力して複雑な問題を解く。' },
    { term: 'Context Engineering', anchor: 'term-context-engineering', description: 'コンテキストウィンドウを戦略的に構造化して重要情報を優先させること。' },
    { term: 'Latency', anchor: 'term-latency', description: 'プロンプト送信から完全な応答受信までの時間遅延。' },
    { term: 'Cost Optimization', anchor: 'term-cost-optimization', description: 'モデル選択やバッチ処理などのAPI支出削減技術。' },
  ],
  zh: [
    { term: 'RAG (Retrieval-Augmented Generation)', anchor: 'term-rag-retrieval-augmented-generation', description: '将LLM连接到外部知识库，使其基于真实数据回答问题。' },
    { term: 'Chain-of-Thought (CoT)', anchor: 'term-chain-of-thought-prompting', description: '让模型逐步展示推理过程，然后再给出最终答案。' },
    { term: 'AI Agent', anchor: 'term-ai-agent', description: '自主规划任务、调用工具、不断迭代直到达成目标的AI系统。' },
    { term: 'Prompt Injection', anchor: 'term-prompt-injection', description: '通过不可信的用户输入欺骗LLM忽视其原始指令的攻击。' },
    { term: 'Few-Shot Prompting', anchor: 'term-few-shot-prompting', description: '在提示词中提供2-5个示例，让模型学习模式。' },
    { term: 'Fine-Tuning', anchor: 'term-fine-tuning', description: '用特定任务数据重新训练模型，提高其性能。' },
    { term: 'Embeddings', anchor: 'term-embeddings', description: '将文本或图像转换为捕捉语义的数值向量。' },
    { term: 'Vector Database', anchor: 'term-vector-database', description: '按相似度存储和检索嵌入的特殊数据库。' },
    { term: 'Hallucination', anchor: 'term-hallucination', description: 'LLM生成自信但错误的信息，编造事实。' },
    { term: 'Context Window', anchor: 'term-context-window', description: 'LLM在单个请求中能处理的最大令牌数。' },
    { term: 'Temperature', anchor: 'term-temperature-and-top-p', description: '控制随机性的设置：低=可预测，高=创意。' },
    { term: 'Zero-Shot Prompting', anchor: 'term-zero-shot-prompting', description: '在没有示例的情况下让模型执行任务。' },
    { term: 'Tool Calling', anchor: 'term-tool-calling', description: '让LLM能够调用外部API或执行操作。' },
    { term: 'Guardrails', anchor: 'term-guardrails', description: '过滤有害输入和输出的安全系统。' },
    { term: 'LLM Evaluation', anchor: 'term-llm-evaluation', description: '使用基准或自动指标衡量模型质量。' },
    { term: 'Prompt Engineering', anchor: 'term-prompt-engineering', description: '编写精确指令以从AI模型获得准确答案的技术。' },
    { term: 'Multi-Agent Systems', anchor: 'term-multi-agent-systems', description: '多个独立AI代理协作解决复杂问题。' },
    { term: 'Context Engineering', anchor: 'term-context-engineering', description: '战略性地构建上下文窗口以优先处理重要信息。' },
    { term: 'Latency', anchor: 'term-latency', description: '从发送提示词到收到完整响应之间的时间延迟。' },
    { term: 'Cost Optimization', anchor: 'term-cost-optimization', description: '通过模型选择和批处理等技术降低API成本。' },
  ],
}

// Maps bare category names to their hub section anchors
const CATEGORY_ANCHORS: Record<string, string> = {
  'Fundamentals': '/prompt-engineering#fundamentals',
  'Frameworks': '/prompt-engineering#frameworks',
  'Techniques': '/prompt-engineering#techniques',
  'Use Topics': '/prompt-engineering#use-topics',
  'Policy & Compliance': '/prompt-engineering#policy',
}

// Maps external citation names to their URLs
const EXTERNAL_CITATIONS: Record<string, string> = {
  'Brown et al., 2020 – Language Models are Few-Shot Learners': 'https://arxiv.org/abs/2005.14165',
  'Prompt Engineering Guide – promptingguide.ai': 'https://www.promptingguide.ai/',
  'Prompt Engineering – Wikipedia': 'https://en.wikipedia.org/wiki/Prompt_engineering',
  'OpenAI – Best Practices for Prompt Engineering': 'https://platform.openai.com/docs/guides/prompt-engineering',
  'Google Cloud – Prompt Engineering for AI Guide': 'https://cloud.google.com/discover/what-is-prompt-engineering',
  'Prompt engineering as a new 21st century skill – Frontiers': 'https://www.frontiersin.org/articles/10.3389/feduc.2023.1209897/full',
  'McKinsey 2024 State of AI': 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024',
  'Prompt Engineering from 2020 to 2025 – AI Supremacy': 'https://www.ai-supremacy.com/p/prompt-engineering-from-2020-to-2025',
  'The Evolution of Prompt Engineering to Context Design – 2026': 'https://www.sdggroup.com/en-ae/insights/blog/the-evolution-of-prompt-engineering-to-context-design-in-2026',
}

// Render inline link placeholders like [Techniques: Chain-of-Thought Prompting]
// as real Next.js links resolved from the title-to-slug map
// Also handles markdown links: [text](url)
// Injects ?lang= query parameter for internal links when lang is not 'en'
function renderInlineLinks(text: string, lang: Language = 'en') {
  // Split on both markdown links [text](url) and bracketed labels [text]
  const parts = text.split(/(\[[^\]]+\]\([^\)]+\)|\[[^\]]+\])/g)
  return parts.map((part, i) => {
    // Handle markdown links: [text](url)
    const markdownMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/)
    if (markdownMatch) {
      const [, label, url] = markdownMatch
      // External links: open in new tab with security attributes
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            {label}
          </a>
        )
      }
      // Internal links: use Next.js Link with lang parameter injection
      let finalUrl = url
      if (lang !== 'en' && url.startsWith('/prompt-engineering/') && !url.includes('?lang=')) {
        // Insert ?lang= before anchor fragment (#) if present
        if (url.includes('#')) {
          const [basePath, anchor] = url.split('#')
          finalUrl = `${basePath}?lang=${lang}#${anchor}`
        } else {
          finalUrl = `${url}?lang=${lang}`
        }
      }
      return (
        <Link key={i} href={finalUrl} className="text-primary font-medium hover:underline">
          {label}
        </Link>
      )
    }

    // Handle bracketed labels [text]
    if (part.startsWith('[') && part.endsWith(']')) {
      const label = part.slice(1, -1)

      // Bare category link: [Fundamentals], [Techniques], etc.
      if (CATEGORY_ANCHORS[label]) {
        let href = CATEGORY_ANCHORS[label]
        if (lang !== 'en') {
          const [basePath, anchor] = href.split('#')
          href = `${basePath}?lang=${lang}${anchor ? '#' + anchor : ''}`
        }
        return (
          <Link key={i} href={href} className="text-primary font-medium hover:underline">
            {label}
          </Link>
        )
      }

      // Category-prefixed link: [Fundamentals: Article Title]
      const colonIdx = label.indexOf(': ')
      if (colonIdx !== -1) {
        const category = label.slice(0, colonIdx)
        const title = label.slice(colonIdx + 2)
        const slug = TITLE_TO_SLUG[title]

        if (slug) {
          const href = lang !== 'en' ? `/prompt-engineering/${slug}?lang=${lang}` : `/prompt-engineering/${slug}`
          return (
            <Link key={i} href={href} className="text-primary font-medium hover:underline">
              {title}
            </Link>
          )
        }

        // Fallback: link to the category hub section
        let fallbackHref = CATEGORY_ANCHORS[category] ?? '/prompt-engineering'
        if (lang !== 'en' && !fallbackHref.includes('?lang=')) {
          const [basePath, anchor] = fallbackHref.split('#')
          fallbackHref = `${basePath}?lang=${lang}${anchor ? '#' + anchor : ''}`
        }
        return (
          <Link key={i} href={fallbackHref} className="text-primary font-medium hover:underline">
            {title || label}
          </Link>
        )
      }

      // External citation: [External: Name – Description]
      if (label.startsWith('External: ')) {
        const citationName = label.slice(10) // Remove "External: " prefix
        const url = EXTERNAL_CITATIONS[citationName]

        if (url) {
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              {citationName}
            </a>
          )
        }
        // Fallback if citation not found in mapping
        return <span key={i} className="text-primary font-medium">{citationName}</span>
      }

      // Unknown format — plain styled text
      return <span key={i} className="text-primary font-medium">{label}</span>
    }

    // Handle bare URLs and **bold** markers
    const URL_PATTERN = /(https?:\/\/[^\s,;)\]"]+)/g
    const segments = part.split(URL_PATTERN)
    return (
      <span key={i}>
        {segments.map((seg, j) => {
          // Check if this segment is a URL by testing with a fresh regex
          if (/(https?:\/\/[^\s,;)\]"]+)/.test(seg)) {
            return (
              <a
                key={j}
                href={seg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline break-all"
              >
                {seg}
              </a>
            )
          }
          // Handle **bold** markers within non-URL text
          const boldParts = seg.split(/(\*\*[^*]+\*\*)/g)
          return (
            <span key={j}>
              {boldParts.map((bp, k) =>
                bp.startsWith('**') && bp.endsWith('**')
                  ? <strong key={k} className="text-text-primary font-semibold">{bp.slice(2, -2)}</strong>
                  : bp
              )}
            </span>
          )
        })}
      </span>
    )
  })
}

function GlossaryTermCard({ row, lang, pathIds }: { row: { [key: string]: string }; lang: Language; pathIds?: string[] }) {
  const termId = `term-${(row['Term'] || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  return (
    <div id={termId} className="border border-primary/15 rounded-xl p-5 mb-3 hover:border-primary/30 transition-colors">
      {/* Term name */}
      <h3 className="font-bold text-text-primary text-base mb-2">{row['Term']}</h3>

      {/* Learning path badges */}
      {pathIds && pathIds.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {pathIds.map(pid => {
            const path = LEARNING_PATHS.find(p => p.id === pid)
            if (!path) return null
            return (
              <span key={pid} className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${path.color.badge}`}>
                <span aria-hidden="true">{path.icon}</span>
                {path.title}
              </span>
            )
          })}
        </div>
      )}

      {/* Answer-first definition */}
      <div className="text-sm text-text-secondary leading-relaxed mb-3">
        {renderInlineLinks(row['What it means'] ?? '', lang)}
      </div>

      {/* Example callout box */}
      {row['Example'] && (
        <div className="bg-primary/5 border border-primary/15 rounded-lg px-4 py-3 text-sm text-text-secondary mb-3">
          <span className="font-semibold text-text-primary">Example: </span>
          <span className="font-mono text-xs">{row['Example']}</span>
        </div>
      )}

      {/* Related terms */}
      {row['Related'] && (
        <p className="text-xs text-text-secondary mb-1">
          <span className="font-medium">Related: </span>
          {renderInlineLinks(row['Related'], lang)}
        </p>
      )}

      {/* Entity relationships */}
      {(row['Part of'] || row['Used with']) && (
        <div className="text-xs text-text-secondary/70 mt-1 mb-1 flex flex-col gap-0.5">
          {row['Part of'] && (
            <p><span className="font-medium text-text-secondary">Part of:</span> {row['Part of']}</p>
          )}
          {row['Used with'] && (
            <p><span className="font-medium text-text-secondary">Used with:</span> {row['Used with']}</p>
          )}
        </div>
      )}

      {/* Use cases */}
      {row['Use cases'] && (
        <div className="flex flex-wrap gap-1 mt-1 mb-1">
          {row['Use cases'].split(',').map(uc => uc.trim()).filter(Boolean).map(uc => (
            <span key={uc} className="inline-flex items-center gap-1 text-xs bg-primary/5 text-text-secondary border border-primary/10 px-2 py-0.5 rounded-full">
              <span aria-hidden="true">💼</span> {uc}
            </span>
          ))}
        </div>
      )}

      {/* Anti-patterns / common mistakes */}
      {row['Anti-patterns'] && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800 mt-1 mb-1">
          <span className="font-semibold">⚠ Common mistake: </span>
          {row['Anti-patterns']}
        </div>
      )}

      {/* When to use */}
      {row['When to use'] && (
        <p className="text-xs text-text-secondary mb-1">
          {renderInlineLinks(row['When to use'], lang)}
        </p>
      )}

      {/* 2026 note */}
      {row['2026 note'] && (
        <p className="text-xs text-text-secondary/60 italic mb-1">{row['2026 note']}</p>
      )}

      {/* Sources */}
      <p className="text-xs text-text-secondary/50 mt-2 pt-2 border-t border-primary/10">
        {renderInlineLinks(row['Sources & references'] ?? '', lang)}
      </p>
    </div>
  )
}

function LearningPathCard({ path }: { path: LearningPath }) {
  const base = '/prompt-engineering/prompt-engineering-glossary'
  return (
    <div className={`border rounded-xl p-5 ${path.color.card} transition-colors`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">{path.icon}</span>
          <h3 className="font-bold text-text-primary text-base leading-snug">{path.title}</h3>
        </div>
        <span className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${path.color.levelBadge}`}>
          {path.level}
        </span>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">{path.description}</p>

      {/* Use cases in practice */}
      {path.useCases.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {path.useCases.map(uc => (
            <span key={uc} className="text-xs bg-primary/8 text-text-secondary border border-primary/15 px-2 py-0.5 rounded-full">
              {uc}
            </span>
          ))}
        </div>
      )}

      <ol className="space-y-1.5">
        {path.terms.map((term, i) => {
          const anchor = `term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
          return (
            <li key={term} className="flex items-center gap-2 text-sm">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${path.color.dot}`}>{i + 1}</span>
              <a href={`${base}#${anchor}`} className="text-primary hover:text-primary/80 transition-colors">{term}</a>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function SectionBlock({ section, colors, id, lang, isGlossary, termPathMap }: { section: PESection; colors: { dot: string; badge: string }; id?: string; lang: Language; isGlossary?: boolean; termPathMap?: Map<string, string[]> }) {
  return (
    <div className="mt-8" id={id}>
      {section.title && !section.isTldr && (
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4">
          {renderInlineLinks(section.title, lang)}
        </h2>
      )}

      {/* LLM Snippet blocks — rendered right after H2 title, before body (Rule 12) */}
      {!section.isTldr && section.snippets && section.snippets.length > 0 && (
        <div className="space-y-3 mb-4">
          {section.snippets.map((snippet, i) => {
            const isOneSentence = snippet.type === 'in-one-sentence'
            return (
              <div key={i} className={`border-l-4 rounded-r-lg px-5 py-4 ${isOneSentence ? 'border-primary bg-primary/5' : 'border-emerald-400 bg-emerald-50'}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${isOneSentence ? 'text-primary' : 'text-emerald-700'}`}>
                  {isOneSentence ? '📍 In One Sentence' : '💬 In Plain Terms'}
                </p>
                <p className={`text-sm leading-relaxed font-medium ${isOneSentence ? 'text-text-primary' : 'text-emerald-900'}`}>
                  {renderInlineLinks(snippet.text, lang)}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {/* TL;DR block */}
      {section.isTldr && section.items && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-4 key-takeaways">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{SECTION_HEADER_LABELS[lang].keyTakeaways}</p>
          <ul className="space-y-2">
            {section.items.map((item, i) => {
              const itemText = typeof item === 'string' ? item : `[${item.title}](${item.url})`;
              return (
                <li key={i} className="flex gap-3 text-text-secondary text-sm">
                  <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${colors.dot}`} />
                  <span>{renderInlineLinks(itemText, lang)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Regular content paragraphs */}
      {section.content && !section.isTldr && (
        <div className="space-y-4">
          {(Array.isArray(section.content) ? section.content : [section.content]).map((para, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {renderInlineLinks(para, lang)}
            </p>
          ))}
        </div>
      )}

      {/* Blockquote content */}
      {section.blockquote && (
        <blockquote className="border-l-4 border-primary/40 bg-primary/5 pl-5 py-3 my-6 text-text-secondary">
          <p className="italic leading-relaxed">{renderInlineLinks(section.blockquote, lang)}</p>
          {section.blockquoteSource && (
            <footer className="mt-2 text-xs font-semibold text-text-secondary not-italic opacity-75">
              — {renderInlineLinks(section.blockquoteSource, lang)}
            </footer>
          )}
        </blockquote>
      )}

      {/* Bullet list */}
      {!section.isTldr && section.items && (
        <ul className="space-y-3 my-4">
          {section.items.map((item, i) => {
            const itemText = typeof item === 'string' ? item : `[${item.title}](${item.url})`;
            return (
              <li key={i} className="flex gap-3 text-text-secondary">
                <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${colors.dot}`} />
                <span className="leading-relaxed">{renderInlineLinks(itemText)}</span>
              </li>
            );
          })}
        </ul>
      )}

      {/* Numbered list */}
      {section.numberedItems && (
        <ol className="list-none space-y-4 my-4">
          {section.numberedItems.map((item, i) => {
            const isObject = item && typeof item === 'object' && 'title' in item
            const title = isObject ? (item as any).title : item
            const whyItMatters = isObject ? (item as any).whyItMatters : null
            return (
              <li key={i} className="flex gap-4 text-text-secondary">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${colors.dot.replace('bg-', 'bg-').replace('-400', '-500')}`}>
                  {i + 1}
                </span>
                <div className="leading-relaxed pt-0.5">
                  <span className="font-semibold">{renderInlineLinks(title)}</span>
                  {whyItMatters && (
                    <>
                      <br />
                      <span className="text-sm italic">Why it matters: {whyItMatters}</span>
                    </>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      )}

      {/* Glossary: render as rich cards instead of table */}
      {isGlossary && section.rows ? (
        <div className="space-y-0 mt-4">
          {section.rows.map((row, i) => (
            <GlossaryTermCard key={i} row={row} lang={lang} pathIds={termPathMap?.get(row['Term'] ?? '') ?? []} />
          ))}
        </div>
      ) : (
        /* Regular table for non-glossary content */
        section.rows && section.columns && (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  {section.columns.map((col) => (
                    <th key={col} className="text-left p-3 font-bold text-text-primary bg-primary/5">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    {section.columns!.map((col) => (
                      <td key={col} className="p-3 text-text-secondary">
                        {renderInlineLinks(row[col] ?? '—', lang)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}

      {/* Code block */}
      {section.codeBlock && (
        <div className="my-6">
          {section.codeLanguage && (
            <div className="flex items-center gap-2 bg-gray-800 rounded-t-lg px-4 py-2 text-xs text-gray-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-2">{section.codeLanguage}</span>
            </div>
          )}
          <pre className={`bg-gray-900 text-gray-100 text-xs leading-relaxed p-5 overflow-x-auto ${section.codeLanguage ? 'rounded-b-lg' : 'rounded-lg'}`}>
            <code>{section.codeBlock}</code>
          </pre>
        </div>
      )}

      {/* Image with caption */}
      {section.image && (
        <figure className="my-8 flex flex-col items-center">
          <img
            src={section.image}
            alt={section.imageCaption || (section.title ? `${section.title} diagram` : 'PromptQuorum article diagram')}
            className="w-full max-w-2xl rounded-lg border border-primary/20 shadow-sm"
          />
          {section.imageCaption && (
            <figcaption className="text-sm text-text-secondary italic mt-3 text-center max-w-2xl">
              {section.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Image placeholder */}
      {section.imagePlaceholder && (
        <figure className="my-8 flex flex-col items-center bg-primary/5 border border-dashed border-primary/30 rounded-lg p-8">
          <div className="text-center">
            <p className="text-primary/60 text-sm font-semibold mb-2">📊 Image Coming Soon</p>
            <p className="text-text-secondary text-sm">{section.imageCaption}</p>
          </div>
        </figure>
      )}

      {/* FAQ */}
      {section.faqs && (
        <div className="space-y-6 mt-4">
          {section.faqs.map((faq, i) => (
            <div key={i} className="border border-primary/15 rounded-xl p-5">
              <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{renderInlineLinks(faq.a, lang)}</p>
            </div>
          ))}
        </div>
      )}

      {/* Mistakes */}
      {section.mistakes && section.mistakes.length > 0 && (
        <div className="space-y-6 mt-4">
          {section.mistakes.map((item, i) => (
            <div key={i} className="border border-border rounded-lg p-4">
              <p className="font-semibold text-text-primary mb-1">❌ {item.mistake}</p>
              <p className="text-sm text-text-secondary mb-2"><strong>Why it hurts:</strong> {item.problem}</p>
              <p className="text-sm text-green-700 dark:text-green-400"><strong>Fix:</strong> {renderInlineLinks(item.fix, lang)}</p>
            </div>
          ))}
        </div>
      )}

      {/* Callout boxes (Rule 17) */}
      {section.callouts && section.callouts.length > 0 && (
        <div className="space-y-3 mt-4">
          {section.callouts.map((callout, i) => {
            const CALLOUT_STYLES: Record<string, { border: string; bg: string; text: string; icon: string }> = {
              warning:  { border: 'border-amber-300',  bg: 'bg-amber-50',   text: 'text-amber-800',  icon: '⚠️' },
              tip:      { border: 'border-blue-300',   bg: 'bg-blue-50',    text: 'text-blue-800',   icon: '💡' },
              note:     { border: 'border-gray-300',   bg: 'bg-gray-50',    text: 'text-gray-700',   icon: '🔍' },
              insight:  { border: 'border-purple-300', bg: 'bg-purple-50',  text: 'text-purple-800', icon: '📌' },
              practice: { border: 'border-green-300',  bg: 'bg-green-50',   text: 'text-green-800',  icon: '🛠️' },
            }
            const style = CALLOUT_STYLES[callout.type] ?? CALLOUT_STYLES.note
            return (
              <div key={i} className={`border ${style.border} ${style.bg} rounded-lg px-4 py-3 ${style.text}`}>
                <p className="text-sm font-semibold mb-1">{style.icon} {callout.label}</p>
                <p className="text-sm leading-relaxed">{renderInlineLinks(callout.text, lang)}</p>
              </div>
            )
          })}
        </div>
      )}

      {/* Prompt examples — Bad → Good pairs (Rule 15) */}
      {section.promptExamples && section.promptExamples.length > 0 && (
        <div className="space-y-6 mt-6">
          {section.promptExamples.map((example, i) => (
            <div key={i} className="space-y-3">
              <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">
                  ❌ {example.badLabel ?? 'Bad Prompt'}
                </p>
                <blockquote className="text-sm text-red-900 font-mono whitespace-pre-wrap leading-relaxed border-l-2 border-red-300 pl-3">
                  {example.bad}
                </blockquote>
              </div>
              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">
                  ✅ {example.goodLabel ?? 'Good Prompt'}
                </p>
                <blockquote className="text-sm text-green-900 font-mono whitespace-pre-wrap leading-relaxed border-l-2 border-green-300 pl-3">
                  {example.good}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const POST_UI: Record<string, Record<string, string>> = {
  byLine: {
    en: 'By [Hans Kuepper](/about) · Founder of PromptQuorum, multi-model AI dispatch tool · PromptQuorum',
    de: 'Von [Hans Kuepper](/about) · Gründer von PromptQuorum, Multi-Model-AI-Dispatch-Tool · PromptQuorum',
    fr: 'Par [Hans Kuepper](/about) · Fondateur de PromptQuorum, outil de dispatch multi-modèle · PromptQuorum',
    ja: '[Hans Kuepper](/about) 著 · PromptQuorumの創設者、マルチモデルAIディスパッチツール · PromptQuorum',
    zh: '[Hans Kuepper](/about) 作者 · PromptQuorum创始人，多模型AI调度工具 · PromptQuorum',
  },
  lastUpdated: {
    en: 'Last updated:',
    de: 'Aktualisiert:',
    fr: 'Dernière mise à jour:',
    ja: '最終更新:',
    zh: '最后更新:',
  },
  ctaText: {
    en: 'Apply these techniques across 25+ AI models simultaneously with PromptQuorum.',
    de: 'Wenden Sie diese Techniken gleichzeitig mit 25+ KI-Modellen in PromptQuorum an.',
    fr: 'Appliquez ces techniques simultanément sur plus de 25 modèles d\'IA avec PromptQuorum.',
    ja: 'これらのテクニックをPromptQuorumで25以上のAIモデルに同時に適用しましょう。',
    zh: '使用PromptQuorum将这些技术同时应用于25+个AI模型。',
  },
  ctaButton: {
    en: 'Try PromptQuorum free →',
    de: 'PromptQuorum kostenlos testen →',
    fr: 'Essayer PromptQuorum gratuitement →',
    ja: 'PromptQuorumを無料で試す →',
    zh: '免费试用PromptQuorum →',
  },
  backLink: {
    en: '← Back to Prompt Engineering',
    de: '← Zurück zu Prompt Engineering',
    fr: '← Retour au Prompt Engineering',
    ja: '← プロンプトエンジニアリングに戻る',
    zh: '← 返回提示词工程',
  },
  breadcrumbHome: {
    en: 'Home', de: 'Startseite', fr: 'Accueil', ja: 'ホーム', zh: '主页',
  },
  breadcrumbHub: {
    en: 'Prompt Engineering',
    de: 'Prompt Engineering',
    fr: 'Prompt Engineering',
    ja: 'プロンプトエンジニアリング',
    zh: '提示词工程',
  },
  levelLabel: {
    en: 'Level', de: 'Niveau', fr: 'Niveau', ja: 'レベル', zh: '级别',
  },
  audienceLabel: {
    en: 'Audience', de: 'Zielgruppe', fr: 'Public', ja: '対象読者', zh: '目标读者',
  },
}

const LEVEL_DISPLAY: Record<string, Record<string, string>> = {
  Beginner: { en: 'Beginner', de: 'Einsteiger', fr: 'Débutant', ja: '初級', zh: '初级' },
  Intermediate: { en: 'Intermediate', de: 'Fortgeschritten', fr: 'Intermédiaire', ja: '中級', zh: '中级' },
  Advanced: { en: 'Advanced', de: 'Experte', fr: 'Avancé', ja: '上級', zh: '高级' },
  Technical: { en: 'Technical', de: 'Technisch', fr: 'Technique', ja: '技術', zh: '技术' },
}

// Map language codes to their locale strings for date formatting
const LANGUAGE_TO_LOCALE: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  ja: 'ja-JP',
  zh: 'zh-CN',
}

const THEME_COLORS: Record<string, { dot: string; badge: string; label: string }> = {
  Fundamentals: { dot: 'bg-blue-400', badge: 'bg-blue-50 text-blue-700 border border-blue-200', label: 'Fundamentals' },
  Frameworks:   { dot: 'bg-purple-400', badge: 'bg-purple-50 text-purple-700 border border-purple-200', label: 'Frameworks' },
  Techniques:   { dot: 'bg-emerald-400', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200', label: 'Techniques' },
  'Use Topics':         { dot: 'bg-orange-400', badge: 'bg-orange-50 text-orange-700 border border-orange-200', label: 'Use Topics' },
  'Policy & Compliance': { dot: 'bg-rose-400',   badge: 'bg-rose-50 text-rose-700 border border-rose-200',     label: 'Policy & Compliance' },
}

function PromptEngineeringPostContent({ slug, initialLang }: Props) {
  const clientLang = useLang() as Language
  // Use server-resolved initialLang for first render (SEO-correct HTML),
  // then switch to client-side lang once the hook hydrates past 'en' default.
  const lang: Language = (clientLang !== 'en' ? clientLang : (initialLang ?? clientLang))
  const key = PE_SLUG_TO_KEY[slug]
  const articleData = key ? peContent[key] : null
  const [searchQuery, setSearchQuery] = useState('')
  const [levelFilter, setLevelFilter] = useState('all')
  const [domainFilter, setDomainFilter] = useState('all')

  if (!articleData) {
    return <div className="min-h-screen bg-surface pt-32 flex items-center justify-center"><p className="text-text-secondary">Article not found.</p></div>
  }

  // Fall back to English if translation has fewer than 10 sections (incomplete translation)
  const hasTranslation = articleData[lang] && Object.keys(articleData[lang].sections).length >= 10
  const article = hasTranslation ? articleData[lang] : articleData['en']
  const colors = THEME_COLORS[article.theme] ?? THEME_COLORS['Fundamentals']

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" key={`${slug}-${lang}`}>
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb + language */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
            <a href="/" className="hover:text-primary">{POST_UI.breadcrumbHome[lang] ?? 'Home'}</a>
            <span>/</span>
            <a href="/prompt-engineering" className="hover:text-primary">{POST_UI.breadcrumbHub[lang] ?? 'Prompt Engineering'}</a>
            <span>/</span>
            <span className="text-text-primary font-medium">{article.title}</span>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Article header */}
        <div className="mb-10">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4 ${colors.badge}`}>
            {article.theme}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <time dateTime={article.dateModified ?? article.publishDate}>
              {POST_UI.lastUpdated[lang] ?? POST_UI.lastUpdated['en']} {new Date((article.dateModified ?? article.publishDate) + 'T00:00:00Z').toLocaleDateString(LANGUAGE_TO_LOCALE[lang] ?? 'en-US', { month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{renderInlineLinks(POST_UI.byLine[lang] ?? POST_UI.byLine['en'], lang)}</span>
          </div>
        </div>

        {/* Article intro paragraph */}
        {article.intro && (
          <p className="text-lg text-text-secondary leading-relaxed mb-4 max-w-2xl article-intro">
            {renderInlineLinks(article.intro, lang)}
          </p>
        )}

        {/* Lead Answer Block — canonical bold definition, 25–50 words (Rule 31) */}
        {(article as any).leadAnswerBlock && (
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl px-5 py-4 my-6 max-w-2xl">
            <p className="text-sm font-bold text-text-primary leading-relaxed">
              {renderInlineLinks((article as any).leadAnswerBlock, lang)}
            </p>
          </div>
        )}

        {/* Audience & difficulty signal (Rule 29) */}
        {article.educationalLevel && (
          <aside className="flex flex-wrap gap-2 mb-6 text-sm" aria-label="Article difficulty and audience">
            <span className="inline-flex items-center gap-1.5 bg-primary/8 border border-primary/20 rounded-md px-3 py-1 font-medium text-primary">
              <span className="text-text-secondary font-normal">{POST_UI.levelLabel[lang] ?? POST_UI.levelLabel['en']}:</span>
              {LEVEL_DISPLAY[article.educationalLevel]?.[lang] ?? LEVEL_DISPLAY[article.educationalLevel]?.['en'] ?? article.educationalLevel}
            </span>
            {article.audience && (
              <span className="inline-flex items-center gap-1.5 border border-gray-200 rounded-md px-3 py-1 text-text-secondary">
                <span className="font-medium text-text-primary">{POST_UI.audienceLabel[lang] ?? POST_UI.audienceLabel['en']}:</span>
                {article.audience}
              </span>
            )}
          </aside>
        )}

        {/* Top 20 Most Important Terms Section (Glossary Only) */}
        {slug === 'prompt-engineering-glossary' && TOP_20_TERMS[lang] && (
          <section className="mb-12 bg-primary/5 border border-primary/20 rounded-xl p-6 top-terms-section">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Top 20 Most Important AI & Prompt Engineering Terms (2026)</h2>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed max-w-3xl">
              Master the essential terminology of artificial intelligence and prompt engineering. These 20 core concepts form the foundation of working with LLMs, from fundamental architectures to advanced optimization techniques. Whether you're building AI agents, implementing RAG systems, or optimizing prompt performance, understanding these terms will accelerate your expertise across all areas of AI development and deployment.
            </p>
            <ul className="grid gap-3">
              {TOP_20_TERMS[lang].map((item) => (
                <li key={item.anchor} className="bg-white rounded-lg p-4 border border-primary/10 hover:border-primary/30 transition-colors">
                  <a
                    href={`#${item.anchor}`}
                    className="block group"
                  >
                    <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                      {item.term}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Commonly Confused Terms table — glossary only */}
        {slug === 'prompt-engineering-glossary' && <GlossaryComparisonTable />}

        {/* Glossary search */}
        {slug === 'prompt-engineering-glossary' && article.sections && (
          <div className="mb-8">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms..."
              className="w-full max-w-md px-4 py-2 border border-primary/30 rounded-lg text-sm bg-white text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {searchQuery.length >= 2 && (
              <p className="mt-2 text-xs text-text-secondary">
                {(() => {
                  const query = searchQuery.trim().toLowerCase()
                  const totalMatches = Object.values(article.sections)
                    .reduce((sum, section) => {
                      if (!section.rows) return sum
                      return sum + section.rows.filter(row =>
                        row['Term']?.toLowerCase?.().includes(query)
                      ).length
                    }, 0)
                  return totalMatches === 0
                    ? 'No results found.'
                    : `${totalMatches} result${totalMatches === 1 ? '' : 's'} found.`
                })()}
              </p>
            )}
          </div>
        )}

        {/* Filter bar for glossary */}
        {slug === 'prompt-engineering-glossary' && !searchQuery && (
          <div className="mb-8">
            {/* Level filter */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-text-primary uppercase tracking-widest mb-2">Level</p>
              <div className="flex flex-wrap gap-2">
                {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
                  <button
                    key={level}
                    onClick={() => setLevelFilter(level)}
                    className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                      levelFilter === level
                        ? 'bg-primary text-white font-medium'
                        : 'bg-primary/10 text-text-secondary border border-primary/20 hover:border-primary/40'
                    }`}
                  >
                    {level === 'all' ? 'All' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Domain filter */}
            <div>
              <p className="text-xs font-semibold text-text-primary uppercase tracking-widest mb-2">Domain</p>
              <div className="flex flex-wrap gap-2">
                {['all', 'agents', 'rag', 'safety', 'reasoning', 'fine-tuning', 'evaluation'].map(domain => (
                  <button
                    key={domain}
                    onClick={() => setDomainFilter(domain)}
                    className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                      domainFilter === domain
                        ? 'bg-primary text-white font-medium'
                        : 'bg-primary/10 text-text-secondary border border-primary/20 hover:border-primary/40'
                    }`}
                  >
                    {domain === 'all' ? 'All' : domain.charAt(0).toUpperCase() + domain.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Jump navigation for glossary */}
        {slug === 'prompt-engineering-glossary' && article.sections.intro && (() => {
          // Build A-Z index: letter → first term's anchor in this language
          const alphaIndex: Record<string, string> = {}
          Object.values(article.sections).forEach(section => {
            if (!section.rows) return
            section.rows.forEach(row => {
              const term = row['Term'] || ''
              const letter = term.charAt(0).toUpperCase()
              if (/[A-Z]/.test(letter) && !alphaIndex[letter]) {
                alphaIndex[letter] = `term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
              }
            })
          })
          const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
          return (
            <>
              {/* Learning Paths section */}
              {slug === 'prompt-engineering-glossary' && !searchQuery && (
                <section id="learning-paths" className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Learning Paths</h2>
                  <p className="text-text-secondary text-sm mb-6">Curated term sequences — follow a path to build expertise in one area.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {LEARNING_PATHS.map(path => <LearningPathCard key={path.id} path={path} />)}
                  </div>
                </section>
              )}

              {/* Trending in 2026 section */}
              {slug === 'prompt-engineering-glossary' && !searchQuery && (
                <section id="trending-2026" className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Most Important Prompt Engineering Terms in 2026</h2>
                  <p className="text-text-secondary text-sm mb-6">The 10 terms that matter most for AI practitioners building production systems in 2026 — ranked by industry adoption and search demand.</p>
                  <ol className="space-y-3">
                    {TRENDING_TERMS_2026.map(({ rank, term, reason }) => {
                      const anchor = `term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
                      return (
                        <li key={rank} className="flex gap-4 items-start p-4 border border-border rounded-xl hover:border-primary/30 transition-colors">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">{rank}</span>
                          <div>
                            <a href={`/prompt-engineering/prompt-engineering-glossary#${anchor}`} className="font-semibold text-text-primary hover:text-primary transition-colors">
                              {term}
                            </a>
                            <p className="text-sm text-text-secondary mt-0.5">{reason}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ol>
                </section>
              )}

              <nav className="mb-4 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{JUMP_SECTION_LABELS[lang].jumpToSection}</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: '#learning-paths', key: 'learningPaths' },
                    { id: '#trending-2026', key: 'trending2026' },
                    { id: '#core-prompting', key: 'corePrompting' },
                    { id: '#agents-orchestration', key: 'agentsOrchestration' },
                    { id: '#safety-alignment', key: 'safetyAlignment' },
                    { id: '#evals-testing', key: 'evalsTesting' },
                    { id: '#advanced-techniques', key: 'advancedTechniques' },
                    { id: '#metrics-production', key: 'metricsProduction' },
                  ].map((link) => (
                    <a
                      key={link.id}
                      href={link.id}
                      className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {JUMP_SECTION_LABELS[lang][link.key as keyof typeof JUMP_SECTION_LABELS.en]}
                    </a>
                  ))}
                </div>
              </nav>
              <nav className="mb-8 bg-primary/5 border border-primary/20 rounded-lg px-4 py-3" aria-label="A-Z glossary index">
                <div className="flex flex-wrap gap-1">
                  {ALPHABET.map(letter => {
                    const anchor = alphaIndex[letter]
                    return anchor ? (
                      <a
                        key={letter}
                        href={`#${anchor}`}
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-primary hover:bg-primary/10 rounded transition-colors"
                      >
                        {letter}
                      </a>
                    ) : (
                      <span
                        key={letter}
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-text-secondary/30 cursor-default"
                      >
                        {letter}
                      </span>
                    )
                  })}
                </div>
              </nav>
            </>
          )
        })()}

        {/* Key Takeaways — rendered before ToC per GEO ordering rule */}
        {(() => {
          const tldrEntry = Object.entries(article.sections).find(([, s]) => s.isTldr)
          if (!tldrEntry) return null
          const [tldrKey, tldrSection] = tldrEntry
          const sectionId = 'key-takeaways'
          return <SectionBlock key={tldrKey} section={tldrSection} colors={colors} id={sectionId} lang={lang} />
        })()}

        {/* Quick Facts block — numeric highlights, rendered between Key Takeaways and TOC (Rule 27) */}
        {(article as any).quickFacts && (article as any).quickFacts.length > 0 && (
          <div className="border border-primary/20 bg-primary/3 rounded-xl p-5 my-6">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">⚡ Quick Facts</p>
            <ul className="space-y-1.5">
              {((article as any).quickFacts as string[]).map((fact: string, i: number) => (
                <li key={i} className="flex gap-3 text-sm text-text-secondary">
                  <span className="flex-shrink-0 text-primary font-bold">·</span>
                  <span>{renderInlineLinks(fact, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gamma Presentation Embed (SEO/AEO/GEO optimized) */}
        {article.gammaEmbedUrl && (
          <section aria-label="Interactive presentation summary" className="my-8">
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              {PRESENTATION_UI[lang]?.heading ?? PRESENTATION_UI.en.heading}: {article.title}
            </h2>
            <p className="text-sm text-text-muted mb-4">
              {PRESENTATION_UI[lang]?.description ?? PRESENTATION_UI.en.description}
            </p>
            <p className="text-sm text-text-secondary mb-4">
              {article.gammaDescription ?? PRESENTATION_UI[lang]?.fallbackDescription ?? PRESENTATION_UI.en.fallbackDescription}
            </p>
            <a
              href={`${article.gammaEmbedUrl}?lang=${lang}&print=1`}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Download {article.title} Reference Card (PDF)
            </a>
            <div
              className="w-full rounded-xl overflow-hidden border border-primary/20 shadow-sm"
              style={{ height: 'min(80vh, max(600px, 56.25vw))' }}
            >
              <iframe
                src={`${article.gammaEmbedUrl}?lang=${lang}`}
                title={`${article.title} — PromptQuorum`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {/* Widget Embed (Interactive Audit, Assessment, or Decision Guide) */}
        {(article as any).widgetEmbedUrl && (
          <section aria-label="Interactive audit guide" className="my-8">
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              {WIDGET_UI[lang]?.heading ?? WIDGET_UI.en.heading}
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              {(article as any).widgetDescription ?? WIDGET_UI[lang]?.description ?? WIDGET_UI.en.description}
            </p>
            <div
              className="w-full rounded-xl overflow-hidden border border-primary/20 shadow-sm"
              style={{ height: 'min(100vh, max(800px, 80vh))' }}
            >
              <iframe
                src={`${(article as any).widgetEmbedUrl}?lang=${lang}`}
                title={`${article.title} — Interactive Audit Guide — PromptQuorum`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {/* Table of Contents */}
        {(article as any).toc && (
          <nav className="mb-8 bg-primary/5 border border-primary/20 rounded-lg p-5" aria-label="Table of contents">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{SECTION_HEADER_LABELS[lang].tableOfContents}</p>
            <ol className="space-y-1">
              {((article as any).toc as { label: string; anchor: string }[]).map((item) => (
                <li key={item.anchor}>
                  <a href={item.anchor.startsWith('#') ? item.anchor : `#${item.anchor}`} className="text-sm text-primary hover:text-primary/80 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Sections */}
        <article className="key-takeaways-container">
          {(() => {
            const query = searchQuery.trim().toLowerCase()
            const isSearching = query.length >= 2

            // Pre-compute term→paths mapping for this render pass (glossary only)
            const termPathMap = new Map<string, string[]>()
            if (slug === 'prompt-engineering-glossary') {
              Object.values(article.sections).forEach(section => {
                section.rows?.forEach(row => {
                  if (row['Term']) termPathMap.set(row['Term'], getTermPaths(row['Term']))
                })
              })
            }

            // Compute active filter paths
            const activePathIds = new Set<string>()
            if (levelFilter !== 'all') {
              LEVEL_TO_PATHS[levelFilter]?.forEach(p => activePathIds.add(p))
            }
            if (domainFilter !== 'all' && DOMAIN_TO_PATH[domainFilter]) {
              activePathIds.add(DOMAIN_TO_PATH[domainFilter])
            }
            const hasPathFilters = activePathIds.size > 0

            // Filter sections by search query and active path filters
            const sectionsToRender = Object.entries(article.sections)
              .filter(([, section]) => !section.isTldr) // Key Takeaways rendered before ToC
              .map(([key, section]) => {
                if (!section.rows) {
                  return [key, section] as const
                }

                let filteredRows = section.rows

                // Apply search filter
                if (isSearching) {
                  filteredRows = filteredRows.filter(row =>
                    row['Term']?.toLowerCase?.().includes(query)
                  )
                }

                // Apply path filter (level / domain)
                if (hasPathFilters) {
                  filteredRows = filteredRows.filter(row => {
                    const paths = termPathMap.get(row['Term'] ?? '') ?? []
                    return paths.some(p => activePathIds.has(p))
                  })
                }

                return [key, { ...section, rows: filteredRows }] as const
              })
              .filter(([, section]) => !section.rows || section.rows.length > 0)

            return sectionsToRender.map(([key, section]) => {
              // Glossary explicit IDs take precedence; all other titled sections get auto-generated IDs
              const glossaryIdMap: Record<string, string> = {
                'corePrompting': 'core-prompting',
                'agentsOrchestration': 'agents-orchestration',
                'safetyAlignment': 'safety-alignment',
                'evalsTesting': 'evals-testing',
                'advancedTechniques': 'advanced-techniques',
                'metricsProduction': 'metrics-production',
              }
              const sectionId = glossaryIdMap[key]
                ?? (section.title ? section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : undefined)
              return (
                <SectionBlock key={key} section={section} colors={colors} id={sectionId} lang={lang} isGlossary={slug === 'prompt-engineering-glossary'} termPathMap={slug === 'prompt-engineering-glossary' ? termPathMap : undefined} />
              )
            })
          })()}
        </article>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6">
            {POST_UI.ctaText[lang] ?? POST_UI.ctaText['en']}
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {POST_UI.ctaButton[lang] ?? POST_UI.ctaButton['en']}
          </a>
        </div>

        <p className="text-center mt-8">
          <a href="/prompt-engineering" className="text-primary hover:text-primary/80 text-sm">
            {POST_UI.backLink[lang] ?? POST_UI.backLink['en']}
          </a>
        </p>

      </div>
    </div>
  )
}

export function PromptEngineeringPostClient(props: Props) {
  return <PromptEngineeringPostContent {...props} />
}

