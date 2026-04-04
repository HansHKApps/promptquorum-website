'use client'

import { useLang } from '@/hooks/useLang'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

const Sparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
)
const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/><path d="M9.75 9.75a4 4 0 0 1 5.542 2.824"/><path d="M14.25 9.75a4 4 0 0 1-5.542-2.824"/></svg>
)
const Layers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.65-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg>
)
const Zap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)
const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)

const ICONS = [Sparkles, Layers, Brain, Zap, Shield]

const T = {
  en: {
    h1: 'PromptQuorum Features: 9 Frameworks, 25+ Models, 13 Analysis Types',
    subtitle: 'Write structured prompts with 9 built-in frameworks, dispatch to 25+ AI models in parallel, and analyze responses with 13 consensus analysis types — including hallucination detection. As of April 2026.',
    tldrTitle: 'Key Features at a Glance',
    tldrItems: [
      '9 prompt engineering frameworks (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)',
      'Dispatch to 25+ cloud models simultaneously (GPT-4o, Claude, Gemini, DeepSeek, and more)',
      '13 Quorum consensus analysis types across 4 categories (synthesis, comparison, quality, selection)',
      'Hallucination detection flags claims that appear in only one model or contradict consensus',
      'Local LLM support: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, and any OpenAI-compatible endpoint',
      'Privacy-first: full offline execution, zero registration required, nothing leaves your device',
      'Instant side-by-side response comparison across all dispatched models in real-time',
      'Automatic prompt optimization with 8 refinement techniques for better AI output',
    ],
    features: [
      { title: 'Prompt Optimization', description: 'Automatically refine and optimize your prompts with 8 proven refinement techniques for better AI output.' },
      { title: 'Multi-Model Dispatch', description: 'Run prompts across ChatGPT, Claude, Gemini, and 25+ other AI models simultaneously in parallel.' },
      { title: 'Quorum Scoring', description: 'Find consensus answers across models with confidence scoring. Hallucination Detection flags claims that appear in only one model response.' },
      { title: 'Instant Comparison', description: 'Get parallel responses in one click — no manual copy-pasting between browser tabs.' },
      { title: 'Privacy-First', description: 'Local execution option. Zero registration required. Complete control over your prompts.' },
    ],
    optimizationH2: 'How Do You Review Optimization Results?',
    optimizationDesc: 'Review quality assessments, version history, and improvement suggestions for your optimized prompts.',
    quorumH2: 'What Is Quorum — Multi-Model Consensus?',
    quorumDesc: 'Collect responses from 25+ AI models, analyze consensus patterns, and synthesize insights across different perspectives.',
    howH2: 'How Does PromptQuorum Work in 3 Steps?',
    howDesc: 'Three simple steps to better prompts and smarter AI decisions.',
    relatedReadingH2: 'Related Reading',
    relatedReadingLinks: [
      { title: 'How It Works: Full System Overview', href: '/how-it-works' },
      { title: 'Compare PromptQuorum with Alternatives', href: '/compare' },
      { title: 'Prompt Engineering Guides and Frameworks', href: '/prompt-engineering' },
      { title: 'Frequently Asked Questions', href: '/faq' },
    ],
    steps: [
      { title: 'Choose a Framework', desc: 'Select a prompt engineering framework like Chain-of-Thought, Few-Shot, or CRAFT.' },
      { title: 'Run Your Prompt', desc: 'Send your prompt to 25+ models. Watch responses come back in parallel in real-time.' },
      { title: 'Compare & Optimize', desc: 'Find consensus answers, detect hallucinations, and refine for better output quality.' },
    ],
    back: '← Back to Home',
  },
  de: {
    h1: 'Funktionen',
    subtitle: 'Alles, was Sie brauchen, um bessere Prompts zu schreiben, effizienter zu testen und schneller zu optimieren. Stand: April 2026.',
    tldrTitle: 'Wichtigste Funktionen auf einen Blick',
    tldrItems: [
      '9 Prompt-Engineering-Frameworks (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)',
      'Versand an 25+ Cloud-Modelle gleichzeitig (GPT-4o, Claude, Gemini, DeepSeek und mehr)',
      '13 Quorum-Konsenstypen in 4 Kategorien (Synthese, Vergleich, Qualität, Auswahl)',
      'Halluzinationserkennung markiert Aussagen, die nur in einem Modell oder nicht im Konsens vorkommen',
      'Local LLM-Unterstützung: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM und mehr',
      'Datenschutz zuerst: Vollständige Offline-Ausführung, keine Registrierung, nichts verlässt Ihr Gerät',
      'Sofortvergleich von Antworten über alle Modelle hinweg in Echtzeit',
      'Automatische Prompt-Optimierung mit 8 Verfeinerungstechniken für bessere KI-Ausgaben',
    ],
    features: [
      { title: 'Prompt-Optimierung', description: 'Verfeinern und optimieren Sie Ihre Prompts automatisch mit 8 bewährten Verfeinerungstechniken.' },
      { title: 'Multi-Modell-Dispatch', description: 'Führen Sie Prompts gleichzeitig über ChatGPT, Claude, Gemini und 25+ weitere Modelle aus.' },
      { title: 'Quorum-Bewertung', description: 'Finden Sie Konsensantworten über Modelle hinweg mit Konfidenz-Scoring. Halluzinationen sofort erkennen.' },
      { title: 'Sofortvergleich', description: 'Sehen Sie nebeneinander liegende Antworten in Sekunden. Kein manuelles Testen in Browser-Tabs.' },
      { title: 'Datenschutz zuerst', description: 'Lokale Ausführungsoption. Keine Registrierung erforderlich. Vollständige Kontrolle über Ihre Prompts.' },
    ],
    optimizationH2: 'Wie überprüfen Sie Optimierungsergebnisse?',
    optimizationDesc: 'Überprüfen Sie Qualitätsbewertungen, Versionsverlauf und Verbesserungsvorschläge für Ihre optimierten Prompts.',
    quorumH2: 'Was ist Quorum — Multi-Modell-Konsens?',
    quorumDesc: 'Sammeln Sie Antworten von 25+ KI-Modellen, analysieren Sie Konsensmuster und synthetisieren Sie Erkenntnisse aus verschiedenen Perspektiven.',
    howH2: 'Wie funktioniert PromptQuorum in 3 Schritten?',
    howDesc: 'Drei einfache Schritte zu besseren Prompts und intelligenteren KI-Entscheidungen.',
    relatedReadingH2: 'Weiterführende Lektüre',
    relatedReadingLinks: [
      { title: 'So funktioniert es: Vollständiger Systemüberblick', href: '/how-it-works' },
      { title: 'Vergleichen Sie PromptQuorum mit Alternativen', href: '/compare' },
      { title: 'Leitfäden und Frameworks für Prompt Engineering', href: '/prompt-engineering' },
      { title: 'Häufig gestellte Fragen', href: '/faq' },
    ],
    steps: [
      { title: 'Framework wählen', desc: 'Wählen Sie ein Prompt-Engineering-Framework wie Chain-of-Thought, Few-Shot oder CRAFT.' },
      { title: 'Prompt ausführen', desc: 'Senden Sie Ihren Prompt an 25+ Modelle. Beobachten Sie, wie Antworten parallel in Echtzeit eintreffen.' },
      { title: 'Vergleichen & Optimieren', desc: 'Finden Sie Konsensantworten, erkennen Sie Halluzinationen und verfeinern Sie für bessere Ausgabequalität.' },
    ],
    back: '← Zurück zur Startseite',
  },
  fr: {
    h1: 'Fonctionnalités',
    subtitle: 'Tout ce dont vous avez besoin pour écrire de meilleurs prompts, tester plus intelligemment et optimiser plus vite. À partir d\'avril 2026.',
    tldrTitle: 'Fonctionnalités clés en un coup d\'œil',
    tldrItems: [
      '9 frameworks de prompt engineering (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)',
      'Envoyez à 25+ modèles cloud simultanément (GPT-4o, Claude, Gemini, DeepSeek, et plus)',
      '13 types d\'analyse de consensus Quorum dans 4 catégories (synthèse, comparaison, qualité, sélection)',
      'Détection des hallucinations signale les affirmations qui n\'apparaissent que dans un modèle',
      'Support des LLM locaux : Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, et compatibles OpenAI',
      'Confidentialité d\'abord : exécution entièrement hors ligne, aucune inscription requise, rien ne quitte votre appareil',
      'Comparaison instantanée des réponses côte à côte en temps réel',
      'Optimisation automatique des prompts avec 8 techniques de raffinement pour une meilleure sortie IA',
    ],
    features: [
      { title: 'Optimisation des prompts', description: 'Affinez et optimisez automatiquement vos prompts avec 8 techniques de raffinement éprouvées.' },
      { title: 'Dispatch multi-modèles', description: 'Exécutez des prompts sur ChatGPT, Claude, Gemini et 25+ autres modèles simultanément en parallèle.' },
      { title: 'Score Quorum', description: 'Trouvez des réponses consensuelles avec un score de confiance. Détectez les hallucinations instantanément.' },
      { title: 'Comparaison instantanée', description: 'Voyez les réponses côte à côte en secondes. Fini les tests manuels entre onglets.' },
      { title: 'Confidentialité d\'abord', description: 'Option d\'exécution locale. Aucune inscription requise. Contrôle total sur vos prompts.' },
    ],
    optimizationH2: 'Comment consultez-vous les résultats d\'optimisation?',
    optimizationDesc: 'Consultez les évaluations de qualité, l\'historique des versions et les suggestions d\'amélioration pour vos prompts optimisés.',
    quorumH2: 'Qu\'est-ce que Quorum — Consensus multi-modèles?',
    quorumDesc: 'Collectez des réponses de 25+ modèles IA, analysez les patterns de consensus et synthétisez les insights selon différentes perspectives.',
    howH2: 'Comment fonctionne PromptQuorum en 3 étapes?',
    howDesc: 'Trois étapes simples pour de meilleurs prompts et des décisions IA plus intelligentes.',
    relatedReadingH2: 'Lectures connexes',
    relatedReadingLinks: [
      { title: 'Fonctionnement : Vue d\'ensemble du système complet', href: '/how-it-works' },
      { title: 'Comparez PromptQuorum avec les alternatives', href: '/compare' },
      { title: 'Guides et frameworks de prompt engineering', href: '/prompt-engineering' },
      { title: 'Questions fréquemment posées', href: '/faq' },
    ],
    steps: [
      { title: 'Choisir un framework', desc: 'Sélectionnez un framework de prompt engineering comme Chain-of-Thought, Few-Shot ou CRAFT.' },
      { title: 'Lancer votre prompt', desc: 'Envoyez votre prompt à 25+ modèles. Regardez les réponses arriver en parallèle en temps réel.' },
      { title: 'Comparer & Optimiser', desc: 'Trouvez des réponses consensuelles, détectez les hallucinations et affinez pour une meilleure qualité.' },
    ],
    back: '← Retour à l\'accueil',
  },
  ja: {
    h1: '機能',
    subtitle: 'より良いプロンプトを書き、よりスマートにテストし、より速く最適化するために必要なすべて。2026年4月時点。',
    tldrTitle: '主要機能の概要',
    tldrItems: [
      '9つのプロンプトエンジニアリングフレームワーク（CO-STAR、CRAFT、RISEN、TRACE、APE、SPECS、Google、RTF）',
      '25以上のクラウドモデルへの同時ディスパッチ（GPT-4o、Claude、Gemini、DeepSeek など）',
      '4つのカテゴリ（統合、比較、品質、選択）にわたる13のクォーラムコンセンサス分析タイプ',
      '1つのモデルのみ、またはコンセンサスと矛盾する主張にフラグを立てるハルシネーション検出',
      'ローカルLLMサポート：Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、vLLM、OpenAI互換エンドポイント',
      'プライバシー優先：完全なオフライン実行、登録不要、デバイスから何も送信されない',
      'すべてのディスパッチされたモデルのリアルタイム回答の並べて比較',
      '8つの改善テクニックによる自動プロンプト最適化でより良いAI出力を実現',
    ],
    features: [
      { title: 'プロンプト最適化', description: '8つの改善テクニックでプロンプトを自動的に改良・最適化します。' },
      { title: 'マルチモデル配信', description: 'ChatGPT・Claude・Geminiなど25以上のモデルへ同時並列でプロンプトを送信。' },
      { title: 'クォーラムスコアリング', description: 'モデル間のコンセンサス回答を信頼スコアで発見。ハルシネーションを即座に検出。' },
      { title: '瞬時比較', description: '数秒で並べて回答を確認。ブラウザタブ間の手動テスト不要。' },
      { title: 'プライバシー優先', description: 'ローカル実行オプション。登録不要。プロンプトを完全にコントロール。' },
    ],
    optimizationH2: '最適化結果をどのように確認しますか?',
    optimizationDesc: '最適化されたプロンプトの品質評価・バージョン履歴・改善提案を確認できます。',
    quorumH2: 'クォーラム — マルチモデルコンセンサスとは?',
    quorumDesc: '25以上のAIモデルから回答を収集し、コンセンサスパターンを分析し、異なる視点からの洞察を統合します。',
    howH2: 'PromptQuorumは3ステップでどのように機能しますか?',
    howDesc: 'より良いプロンプトとスマートなAI判断への3つの簡単なステップ。',
    relatedReadingH2: '関連資料',
    relatedReadingLinks: [
      { title: 'その仕組み：システム全体の概要', href: '/how-it-works' },
      { title: 'PromptQuorumと代替案を比較', href: '/compare' },
      { title: 'プロンプトエンジニアリングガイドとフレームワーク', href: '/prompt-engineering' },
      { title: 'よくある質問', href: '/faq' },
    ],
    steps: [
      { title: 'フレームワークを選ぶ', desc: 'Chain-of-Thought・Few-Shot・CRAFTなどのプロンプトエンジニアリングフレームワークを選択。' },
      { title: 'プロンプトを実行', desc: '25以上のモデルへプロンプトを送信。リアルタイムで並列に回答が返ってきます。' },
      { title: '比較・最適化', desc: 'コンセンサス回答を発見し、ハルシネーションを検出し、より良い出力品質に向けて改善。' },
    ],
    back: '← ホームに戻る',
  },
  zh: {
    h1: '功能',
    subtitle: '编写更好提示词、更智能测试、更快优化所需的一切。截至 2026 年 4 月。',
    tldrTitle: '核心功能一览',
    tldrItems: [
      '9 种提示词工程框架（CO-STAR、CRAFT、RISEN、TRACE、APE、SPECS、Google、RTF）',
      '同时分发到 25+ 个云模型（GPT-4o、Claude、Gemini、DeepSeek 等）',
      '4 个类别的 13 种 Quorum 共识分析类型（合成、比较、质量、选择）',
      '幻觉检测标记仅在一个模型中出现或与共识相矛盾的声明',
      '本地 LLM 支持：Ollama、LM Studio、Jan AI、GPT4All、Open WebUI、vLLM 及 OpenAI 兼容端点',
      '隐私优先：完全离线执行、无需注册、数据不离开设备',
      '所有分发模型的实时并行回答对比',
      '自动提示词优化，包含 8 种改进技术以获得更好的 AI 输出',
    ],
    features: [
      { title: '提示词优化', description: '通过 8 种经过验证的优化技术自动改进和优化您的提示词。' },
      { title: '多模型分发', description: '同时并行地在 ChatGPT、Claude、Gemini 及 25+ 个模型上运行提示词。' },
      { title: 'Quorum 评分', description: '通过置信度评分在各模型中找出共识答案。即时检测幻觉内容。' },
      { title: '即时对比', description: '几秒内并排查看所有回答。无需在浏览器标签间手动测试。' },
      { title: '隐私优先', description: '本地执行选项。无需注册。完全掌控您的提示词。' },
    ],
    optimizationH2: '如何查看优化结果?',
    optimizationDesc: '查看优化后提示词的质量评估、版本历史和改进建议。',
    quorumH2: 'Quorum — 多模型共识是什么?',
    quorumDesc: '收集 25+ 个 AI 模型的回答，分析共识模式，从不同视角综合洞察。',
    howH2: 'PromptQuorum 如何通过 3 步工作?',
    howDesc: '三个简单步骤，获得更好的提示词和更智能的 AI 决策。',
    relatedReadingH2: '相关阅读',
    relatedReadingLinks: [
      { title: '工作原理：完整系统概览', href: '/how-it-works' },
      { title: '将 PromptQuorum 与替代方案进行比较', href: '/compare' },
      { title: '提示词工程指南和框架', href: '/prompt-engineering' },
      { title: '常见问题', href: '/faq' },
    ],
    steps: [
      { title: '选择框架', desc: '选择提示词工程框架，如 Chain-of-Thought、Few-Shot 或 CRAFT。' },
      { title: '运行提示词', desc: '将提示词发送给 25+ 个模型，实时并行接收所有回答。' },
      { title: '比较与优化', desc: '找出共识答案，检测幻觉内容，优化以获得更好的输出质量。' },
    ],
    back: '← 返回首页',
  },
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}

function FeaturesContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)
  const t = T[lang] ?? T.en

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">{t.h1}</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* TLDR Section */}
        <div className="bg-surface-highlight border border-primary/20 rounded-xl p-8 mb-20">
          <h2 className="text-2xl font-bold text-text-primary mb-6">{t.tldrTitle}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.tldrItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {t.features.map((feature, i) => (
            <FeatureCard key={i} icon={ICONS[i]} title={feature.title} description={feature.description} />
          ))}
        </div>

        {/* Prompt Optimizer Showcase */}
        <div className="mb-20">
          <div className="bg-surface-highlight border border-primary/20 rounded-xl p-8 sm:p-12">
            <PromptOptimizerShowcase />
          </div>
        </div>

        {/* Optimization Results Showcase */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-3">{t.optimizationH2}</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.optimizationDesc}</p>
          </div>
          <div className="bg-surface-highlight border border-primary/20 rounded-xl p-8 sm:p-12">
            <OptimizationShowcase />
          </div>
        </div>

        {/* Quorum Showcase */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-3">{t.quorumH2}</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.quorumDesc}</p>
          </div>
          <div className="bg-surface-highlight border border-primary/20 rounded-xl p-8 sm:p-12">
            <QuorumShowcase />
          </div>
        </div>

        {/* How It Works */}
        <div className="space-y-12 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">{t.howH2}</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.howDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Reading Section */}
        <div className="bg-surface-highlight border border-primary/20 rounded-xl p-8 mb-20">
          <h2 className="text-2xl font-bold text-text-primary mb-6">{t.relatedReadingH2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.relatedReadingLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-surface-highlight transition-all hover:shadow-md group"
              >
                <span className="text-primary group-hover:underline font-medium">{link.title}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-center">
          <a href="/" className="text-primary hover:text-primary/80 font-medium">{t.back}</a>
        </p>
      </div>
    </div>
  )
}

export function FeaturesPageClient({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <FeaturesContent initialLang={initialLang} />
}
