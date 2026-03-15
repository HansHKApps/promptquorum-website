'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

const T = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Compare AI Responses',
    h1: 'One Prompt. Compare Every AI Response.',
    subtitle: 'Send your prompt once — receive responses from ChatGPT, Claude, Gemini and 25+ models simultaneously. See exactly what each says, side-by-side.',
    whyH2: 'Why Compare AI Responses on the Same Prompt?',
    whyIntro: 'Different models give different answers to the exact same question. ChatGPT, Claude, Gemini — each has its own reasoning, strengths, and blind spots. By seeing all responses to your prompt at once, you:',
    whyItems: [
      { bold: 'Find the best model for your task', rest: ' — Don\'t waste time with a suboptimal model' },
      { bold: 'Detect hallucinations', rest: ' — Compare answers to spot false information' },
      { bold: 'Achieve consensus', rest: ' — When multiple models agree, confidence is higher' },
      { bold: 'Save money', rest: ' — Use cheaper models for simple tasks, expensive ones only when needed' },
      { bold: 'Improve quality', rest: ' — Research shows multi-model comparison improves overall AI output quality by 25-45%' },
    ],
    guideH2: 'AI Model Comparison Guide',
    guideIntro: 'Here\'s how the major AI models compare:',
    models: [
      {
        name: 'ChatGPT (OpenAI)',
        bestFor: 'Creative writing, brainstorming, general knowledge questions',
        strengths: 'Conversational tone, creative output, broad knowledge',
        weaknesses: 'Can hallucinate, sometimes verbose, reasoning tasks less reliable than Claude',
        cost: '$0.50-$2 per million tokens (varies by model)',
        useWhen: 'You need conversational, creative responses',
      },
      {
        name: 'Claude (Anthropic)',
        bestFor: 'Analysis, reasoning, technical documentation, code review',
        strengths: 'Superior reasoning, fewer hallucinations, excellent at complex tasks, handles long documents',
        weaknesses: 'Slower response time, more conservative output (sometimes less creative)',
        cost: '$0.80-$3 per million tokens (varies by model)',
        useWhen: 'You need accurate, well-reasoned analysis',
      },
      {
        name: 'Gemini (Google)',
        bestFor: 'Multimodal tasks (image + text), search-informed answers, real-time information',
        strengths: 'Integrates real-time search, native multimodal support, good with visual reasoning',
        weaknesses: 'Newer (fewer battle-tested patterns), sometimes inconsistent quality',
        cost: '$0.075-$0.30 per million tokens (most affordable)',
        useWhen: 'You need visual reasoning or current information',
      },
      {
        name: 'Local LLMs (Llama 2, Mistral, etc.)',
        bestFor: 'Privacy-sensitive work, custom fine-tuned tasks, offline operation',
        strengths: 'Complete privacy, no API costs (after initial download), customizable',
        weaknesses: 'Lower quality than frontier models, requires local compute resources',
        cost: '$0 (one-time download)',
        useWhen: 'Handling sensitive data or needing complete offline operation',
      },
    ],
    bestFor: 'Best for:', strengths: 'Strengths:', weaknesses: 'Weaknesses:', cost: 'Cost:', useWhen: 'Use when:',
    multiH2: 'The Power of Multi-LLM Testing',
    multiIntro: 'Research shows that running the same prompt across multiple AI models produces significantly better results:',
    multiItems: [
      { bold: '25-45% accuracy improvement', rest: ' — Multimodal approaches (text + model comparison) boost output quality' },
      { bold: 'Hallucination detection', rest: ' — When models disagree, you\'ve found potential false information' },
      { bold: 'Consensus confidence', rest: ' — When multiple models agree, you have higher confidence in the answer' },
      { bold: 'Task-specific optimization', rest: ' — Use the best model for each type of task' },
    ],
    tableH2: 'Quick Comparison Table',
    tableHeaders: ['Model', 'Reasoning', 'Creativity', 'Speed', 'Cost'],
    tableRows: [
      ['Claude', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '$$'],
      ['ChatGPT', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '$$'],
      ['Gemini', '⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '$'],
      ['Local LLMs', '⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐', 'Free'],
    ],
    howH2: 'How PromptQuorum Simplifies AI Model Comparison',
    howIntro: 'Manually testing each prompt across 25+ models would take hours. PromptQuorum automates the entire process:',
    howSteps: [
      { title: 'Run once', desc: 'Enter your prompt once. It\'s dispatched to all connected models simultaneously.' },
      { title: 'Compare instantly', desc: 'See all responses side-by-side. No context switching between browser tabs.' },
      { title: 'Find consensus', desc: 'Quorum scores show which answers have consensus across models (high confidence).' },
      { title: 'Optimize your prompt', desc: 'See quality scores. Use PromptQuorum\'s 8 refinement techniques to improve output.' },
    ],
    ctaH2: 'Ready to See Every AI Response?',
    ctaDesc: 'Join the waitlist and get instant access — one prompt, 25+ responses, side-by-side.',
    ctaBtn: 'Join Waitlist',
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'KI-Antworten vergleichen',
    h1: 'Ein Prompt. Jede KI-Antwort vergleichen.',
    subtitle: 'Senden Sie Ihren Prompt einmal — erhalten Sie Antworten von ChatGPT, Claude, Gemini und 25+ Modellen gleichzeitig. Sehen Sie genau, was jedes Modell sagt, nebeneinander.',
    whyH2: 'Warum KI-Antworten auf denselben Prompt vergleichen?',
    whyIntro: 'Verschiedene Modelle geben verschiedene Antworten auf genau dieselbe Frage. ChatGPT, Claude, Gemini — jedes hat seine eigene Logik, Stärken und blinden Flecken. Wenn Sie alle Antworten auf Ihren Prompt auf einmal sehen:',
    whyItems: [
      { bold: 'Das beste Modell für Ihre Aufgabe finden', rest: ' — Keine Zeit mit einem suboptimalen Modell verschwenden' },
      { bold: 'Halluzinationen erkennen', rest: ' — Antworten vergleichen, um Fehlinformationen zu entdecken' },
      { bold: 'Konsens erzielen', rest: ' — Wenn mehrere Modelle übereinstimmen, ist die Konfidenz höher' },
      { bold: 'Geld sparen', rest: ' — Günstigere Modelle für einfache Aufgaben, teure nur wenn nötig' },
      { bold: 'Qualität verbessern', rest: ' — Forschung zeigt: Multi-Modell-Vergleich verbessert die KI-Ausgabequalität um 25–45%' },
    ],
    guideH2: 'KI-Modell-Vergleichsanleitung',
    guideIntro: 'So vergleichen sich die wichtigsten KI-Modelle:',
    models: [
      {
        name: 'ChatGPT (OpenAI)',
        bestFor: 'Kreatives Schreiben, Brainstorming, allgemeine Wissensfragen',
        strengths: 'Gesprächston, kreative Ausgabe, breites Wissen',
        weaknesses: 'Kann halluzinieren, manchmal weitschweifig, Reasoning weniger zuverlässig als Claude',
        cost: '$0,50–$2 pro Million Token (je nach Modell)',
        useWhen: 'Sie gesprächige, kreative Antworten benötigen',
      },
      {
        name: 'Claude (Anthropic)',
        bestFor: 'Analyse, Reasoning, technische Dokumentation, Code-Review',
        strengths: 'Überlegenes Reasoning, weniger Halluzinationen, exzellent bei komplexen Aufgaben, verarbeitet lange Dokumente',
        weaknesses: 'Langsamere Antwortzeit, konservativere Ausgabe (manchmal weniger kreativ)',
        cost: '$0,80–$3 pro Million Token (je nach Modell)',
        useWhen: 'Sie genaue, gut begründete Analysen benötigen',
      },
      {
        name: 'Gemini (Google)',
        bestFor: 'Multimodale Aufgaben (Bild + Text), suchbasierte Antworten, Echtzeit-Informationen',
        strengths: 'Integriert Echtzeit-Suche, nativer multimodaler Support, gut bei visuellem Reasoning',
        weaknesses: 'Neuer (weniger erprobte Muster), manchmal inkonsistente Qualität',
        cost: '$0,075–$0,30 pro Million Token (günstigstes)',
        useWhen: 'Sie visuelles Reasoning oder aktuelle Informationen benötigen',
      },
      {
        name: 'Lokale LLMs (Llama 2, Mistral, etc.)',
        bestFor: 'Datenschutzsensible Arbeit, benutzerdefinierte Fine-Tuning-Aufgaben, Offline-Betrieb',
        strengths: 'Vollständige Privatsphäre, keine API-Kosten (nach erstem Download), anpassbar',
        weaknesses: 'Geringere Qualität als Frontier-Modelle, erfordert lokale Rechenressourcen',
        cost: '$0 (einmaliger Download)',
        useWhen: 'Sensible Daten verarbeitet oder vollständiger Offline-Betrieb benötigt wird',
      },
    ],
    bestFor: 'Am besten für:', strengths: 'Stärken:', weaknesses: 'Schwächen:', cost: 'Kosten:', useWhen: 'Verwenden wenn:',
    multiH2: 'Die Stärke des Multi-LLM-Tests',
    multiIntro: 'Forschung zeigt, dass das Ausführen desselben Prompts über mehrere KI-Modelle deutlich bessere Ergebnisse liefert:',
    multiItems: [
      { bold: '25–45% Genauigkeitsverbesserung', rest: ' — Multi-Modell-Vergleiche steigern die Ausgabequalität' },
      { bold: 'Halluzinationserkennung', rest: ' — Wenn Modelle nicht übereinstimmen, haben Sie potenzielle Fehlinformationen gefunden' },
      { bold: 'Konsens-Konfidenz', rest: ' — Wenn mehrere Modelle übereinstimmen, ist Ihre Konfidenz in die Antwort höher' },
      { bold: 'Aufgabenspezifische Optimierung', rest: ' — Das beste Modell für jeden Aufgabentyp verwenden' },
    ],
    tableH2: 'Schnellvergleichstabelle',
    tableHeaders: ['Modell', 'Reasoning', 'Kreativität', 'Geschwindigkeit', 'Kosten'],
    tableRows: [
      ['Claude', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '$$'],
      ['ChatGPT', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '$$'],
      ['Gemini', '⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '$'],
      ['Lokale LLMs', '⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐', 'Kostenlos'],
    ],
    howH2: 'Wie PromptQuorum den KI-Modellvergleich vereinfacht',
    howIntro: 'Jeden Prompt manuell über 25+ Modelle zu testen würde Stunden dauern. PromptQuorum automatisiert den gesamten Prozess:',
    howSteps: [
      { title: 'Einmal ausführen', desc: 'Prompt einmal eingeben. Er wird gleichzeitig an alle verbundenen Modelle gesendet.' },
      { title: 'Sofort vergleichen', desc: 'Alle Antworten nebeneinander sehen. Kein Kontextwechsel zwischen Browser-Tabs.' },
      { title: 'Konsens finden', desc: 'Quorum-Scores zeigen, welche Antworten modellübergreifenden Konsens haben (hohe Konfidenz).' },
      { title: 'Prompt optimieren', desc: 'Qualitäts-Scores ansehen. PromptQuorums 8 Verfeinerungstechniken zur Verbesserung nutzen.' },
    ],
    ctaH2: 'Bereit, jede KI-Antwort zu sehen?',
    ctaDesc: 'Warteliste beitreten und sofortigen Zugang erhalten — ein Prompt, 25+ Antworten, nebeneinander.',
    ctaBtn: 'Warteliste beitreten',
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Comparer les réponses IA',
    h1: 'Un Prompt. Comparez chaque réponse IA.',
    subtitle: 'Envoyez votre prompt une fois — recevez des réponses de ChatGPT, Claude, Gemini et 25+ modèles simultanément. Voyez exactement ce que chacun dit, côte à côte.',
    whyH2: 'Pourquoi comparer les réponses IA sur le même prompt ?',
    whyIntro: 'Différents modèles donnent des réponses différentes à la même question. ChatGPT, Claude, Gemini — chacun a son propre raisonnement, ses forces et ses angles morts. En voyant toutes les réponses à votre prompt d\'un coup, vous :',
    whyItems: [
      { bold: 'Trouvez le meilleur modèle pour votre tâche', rest: ' — Ne perdez pas de temps avec un modèle sous-optimal' },
      { bold: 'Détectez les hallucinations', rest: ' — Comparez les réponses pour repérer les fausses informations' },
      { bold: 'Atteignez le consensus', rest: ' — Quand plusieurs modèles s\'accordent, la confiance est plus élevée' },
      { bold: 'Économisez de l\'argent', rest: ' — Utilisez des modèles moins chers pour les tâches simples, les coûteux seulement si nécessaire' },
      { bold: 'Améliorez la qualité', rest: ' — La recherche montre que la comparaison multi-modèles améliore la qualité de sortie IA de 25-45%' },
    ],
    guideH2: 'Guide de comparaison des modèles IA',
    guideIntro: 'Voici comment se comparent les principaux modèles IA :',
    models: [
      {
        name: 'ChatGPT (OpenAI)',
        bestFor: 'Écriture créative, brainstorming, questions de culture générale',
        strengths: 'Ton conversationnel, sortie créative, large connaissance',
        weaknesses: 'Peut halluciner, parfois verbeux, tâches de raisonnement moins fiables que Claude',
        cost: '$0,50-$2 par million de tokens (selon le modèle)',
        useWhen: 'Vous avez besoin de réponses conversationnelles et créatives',
      },
      {
        name: 'Claude (Anthropic)',
        bestFor: 'Analyse, raisonnement, documentation technique, revue de code',
        strengths: 'Raisonnement supérieur, moins d\'hallucinations, excellent sur les tâches complexes, gère les longs documents',
        weaknesses: 'Temps de réponse plus lent, sortie plus conservatrice (parfois moins créative)',
        cost: '$0,80-$3 par million de tokens (selon le modèle)',
        useWhen: 'Vous avez besoin d\'une analyse précise et bien raisonnée',
      },
      {
        name: 'Gemini (Google)',
        bestFor: 'Tâches multimodales (image + texte), réponses enrichies par la recherche, informations en temps réel',
        strengths: 'Intègre la recherche en temps réel, support multimodal natif, bon en raisonnement visuel',
        weaknesses: 'Plus récent (moins de patterns éprouvés), qualité parfois inconsistante',
        cost: '$0,075-$0,30 par million de tokens (le plus abordable)',
        useWhen: 'Vous avez besoin de raisonnement visuel ou d\'informations actuelles',
      },
      {
        name: 'LLMs locaux (Llama 2, Mistral, etc.)',
        bestFor: 'Travail sensible à la confidentialité, tâches fine-tunées, fonctionnement hors ligne',
        strengths: 'Confidentialité totale, pas de coûts API (après téléchargement initial), personnalisable',
        weaknesses: 'Qualité inférieure aux modèles frontier, nécessite des ressources de calcul locales',
        cost: '$0 (téléchargement unique)',
        useWhen: 'Données sensibles ou besoin d\'un fonctionnement hors ligne complet',
      },
    ],
    bestFor: 'Idéal pour :', strengths: 'Points forts :', weaknesses: 'Points faibles :', cost: 'Coût :', useWhen: 'Utiliser quand :',
    multiH2: 'La puissance du test multi-LLM',
    multiIntro: 'La recherche montre que l\'exécution du même prompt sur plusieurs modèles IA produit des résultats nettement meilleurs :',
    multiItems: [
      { bold: '25-45% d\'amélioration de la précision', rest: ' — Les approches multi-modèles boostent la qualité de sortie' },
      { bold: 'Détection des hallucinations', rest: ' — Quand les modèles ne s\'accordent pas, vous avez trouvé des informations potentiellement fausses' },
      { bold: 'Confiance par consensus', rest: ' — Quand plusieurs modèles s\'accordent, vous avez une plus grande confiance dans la réponse' },
      { bold: 'Optimisation par tâche', rest: ' — Utilisez le meilleur modèle pour chaque type de tâche' },
    ],
    tableH2: 'Tableau de comparaison rapide',
    tableHeaders: ['Modèle', 'Raisonnement', 'Créativité', 'Vitesse', 'Coût'],
    tableRows: [
      ['Claude', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '$$'],
      ['ChatGPT', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '$$'],
      ['Gemini', '⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '$'],
      ['LLMs locaux', '⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐', 'Gratuit'],
    ],
    howH2: 'Comment PromptQuorum simplifie la comparaison des modèles IA',
    howIntro: 'Tester manuellement chaque prompt sur 25+ modèles prendrait des heures. PromptQuorum automatise tout le processus :',
    howSteps: [
      { title: 'Exécuter une fois', desc: 'Entrez votre prompt une fois. Il est envoyé à tous les modèles connectés simultanément.' },
      { title: 'Comparer instantanément', desc: 'Voyez toutes les réponses côte à côte. Pas de changement de contexte entre onglets.' },
      { title: 'Trouver le consensus', desc: 'Les scores Quorum montrent quelles réponses ont un consensus entre modèles (haute confiance).' },
      { title: 'Optimiser votre prompt', desc: 'Consultez les scores de qualité. Utilisez les 8 techniques de raffinement de PromptQuorum.' },
    ],
    ctaH2: 'Prêt à voir chaque réponse IA ?',
    ctaDesc: 'Rejoignez la liste d\'attente et obtenez un accès instantané — un prompt, 25+ réponses, côte à côte.',
    ctaBtn: 'Rejoindre la liste d\'attente',
  },
  ja: {
    breadcrumbHome: 'ホーム',
    breadcrumbCurrent: 'AI回答を比較',
    h1: '1つのプロンプト。すべてのAI回答を比較。',
    subtitle: 'プロンプトを一度送信するだけ — ChatGPT・Claude・Geminiをはじめ25以上のモデルから並べて回答を取得。それぞれが何を言っているかを正確に確認できます。',
    whyH2: '同じプロンプトでAI回答を比較する理由は？',
    whyIntro: '異なるモデルは全く同じ質問に対して異なる回答をします。ChatGPT・Claude・Gemini — それぞれ独自の推論、強み、盲点があります。すべての回答を一度に見ることで：',
    whyItems: [
      { bold: 'タスクに最適なモデルを見つける', rest: ' — 最適でないモデルに時間を無駄にしない' },
      { bold: 'ハルシネーションを検出する', rest: ' — 回答を比較して誤情報を発見' },
      { bold: 'コンセンサスを得る', rest: ' — 複数のモデルが同意すると信頼性が高まる' },
      { bold: 'コストを節約する', rest: ' — 単純なタスクは安いモデル、必要な時だけ高いモデルを使用' },
      { bold: '品質を向上させる', rest: ' — 研究によりマルチモデル比較でAI出力品質が25〜45%向上することが示されている' },
    ],
    guideH2: 'AIモデル比較ガイド',
    guideIntro: '主要なAIモデルの比較：',
    models: [
      {
        name: 'ChatGPT (OpenAI)',
        bestFor: 'クリエイティブライティング、ブレインストーミング、一般知識の質問',
        strengths: '会話的なトーン、クリエイティブな出力、幅広い知識',
        weaknesses: 'ハルシネーションの可能性あり、時に冗長、推論タスクはClaudeより信頼性が低い',
        cost: '100万トークンあたり$0.50〜$2（モデルにより異なる）',
        useWhen: '会話的でクリエイティブな回答が必要な場合',
      },
      {
        name: 'Claude (Anthropic)',
        bestFor: '分析、推論、技術文書作成、コードレビュー',
        strengths: '優れた推論、ハルシネーションが少ない、複雑なタスクに優秀、長文書の処理が得意',
        weaknesses: '応答時間が遅め、保守的な出力（時にクリエイティブさに欠ける）',
        cost: '100万トークンあたり$0.80〜$3（モデルにより異なる）',
        useWhen: '正確で十分に推論された分析が必要な場合',
      },
      {
        name: 'Gemini (Google)',
        bestFor: 'マルチモーダルタスク（画像＋テキスト）、検索連動回答、リアルタイム情報',
        strengths: 'リアルタイム検索と統合、ネイティブマルチモーダルサポート、視覚的推論に優れる',
        weaknesses: '比較的新しい（実績のあるパターンが少ない）、品質が不安定な場合がある',
        cost: '100万トークンあたり$0.075〜$0.30（最もリーズナブル）',
        useWhen: '視覚的推論や最新情報が必要な場合',
      },
      {
        name: 'ローカルLLM（Llama 2、Mistralなど）',
        bestFor: 'プライバシーに敏感な作業、カスタムファインチューニングタスク、オフライン運用',
        strengths: '完全なプライバシー、APIコストなし（初回ダウンロード後）、カスタマイズ可能',
        weaknesses: 'フロンティアモデルより品質が低い、ローカルの計算リソースが必要',
        cost: '$0（一回限りのダウンロード）',
        useWhen: '機密データの処理や完全なオフライン運用が必要な場合',
      },
    ],
    bestFor: '最適な用途：', strengths: '強み：', weaknesses: '弱み：', cost: 'コスト：', useWhen: '使用タイミング：',
    multiH2: 'マルチLLMテストの力',
    multiIntro: '研究によると、同じプロンプトを複数のAIモデルで実行すると大幅に良い結果が得られます：',
    multiItems: [
      { bold: '25〜45%の精度向上', rest: ' — マルチモデルアプローチにより出力品質が向上' },
      { bold: 'ハルシネーション検出', rest: ' — モデルが不一致の場合、潜在的な誤情報を発見した可能性がある' },
      { bold: 'コンセンサス信頼度', rest: ' — 複数のモデルが同意する場合、回答への信頼性が高まる' },
      { bold: 'タスク固有の最適化', rest: ' — 各タスクタイプに最適なモデルを使用' },
    ],
    tableH2: 'クイック比較表',
    tableHeaders: ['モデル', '推論', 'クリエイティビティ', '速度', 'コスト'],
    tableRows: [
      ['Claude', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '$$'],
      ['ChatGPT', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '$$'],
      ['Gemini', '⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '$'],
      ['ローカルLLM', '⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐', '無料'],
    ],
    howH2: 'PromptQuorumがAIモデル比較を簡単にする方法',
    howIntro: '25以上のモデルで各プロンプトを手動テストするには何時間もかかります。PromptQuorumはプロセス全体を自動化します：',
    howSteps: [
      { title: '一度実行', desc: 'プロンプトを一度入力するだけ。接続されたすべてのモデルに同時に送信されます。' },
      { title: '即座に比較', desc: 'すべての回答を並べて確認。ブラウザタブ間のコンテキスト切り替え不要。' },
      { title: 'コンセンサスを見つける', desc: 'Quorumスコアがモデル間でコンセンサスのある回答（高信頼性）を示します。' },
      { title: 'プロンプトを最適化', desc: '品質スコアを確認。PromptQuorumの8つの改善テクニックで出力を向上させます。' },
    ],
    ctaH2: 'すべてのAI回答を見る準備はできましたか？',
    ctaDesc: 'ウェイトリストに参加してすぐにアクセス — 1つのプロンプト、25以上の回答、並べて表示。',
    ctaBtn: 'ウェイトリストに参加',
  },
  zh: {
    breadcrumbHome: '首页',
    breadcrumbCurrent: '比较 AI 回答',
    h1: '一个提示词。比较每个 AI 的回答。',
    subtitle: '只需发送一次提示词——同时接收来自 ChatGPT、Claude、Gemini 及 25+ 个模型的回答。并排查看每个模型的确切回答。',
    whyH2: '为什么要在同一提示词上比较 AI 回答？',
    whyIntro: '不同模型对完全相同的问题给出不同答案。ChatGPT、Claude、Gemini——每个都有自己的推理方式、优势和盲点。一次看到所有回答，您可以：',
    whyItems: [
      { bold: '找到最适合您任务的模型', rest: ' — 不浪费时间在次优模型上' },
      { bold: '检测幻觉', rest: ' — 比较答案以发现虚假信息' },
      { bold: '达成共识', rest: ' — 多个模型一致时，置信度更高' },
      { bold: '节省费用', rest: ' — 简单任务用便宜模型，只在必要时使用昂贵模型' },
      { bold: '提升质量', rest: ' — 研究表明多模型比较可将 AI 输出质量提高 25-45%' },
    ],
    guideH2: 'AI 模型比较指南',
    guideIntro: '以下是主要 AI 模型的比较：',
    models: [
      {
        name: 'ChatGPT (OpenAI)',
        bestFor: '创意写作、头脑风暴、常识性问题',
        strengths: '对话式语气、创意输出、广博知识',
        weaknesses: '可能产生幻觉，有时冗长，推理任务不如 Claude 可靠',
        cost: '每百万 token $0.50-$2（因模型而异）',
        useWhen: '需要对话式、创意性回答时',
      },
      {
        name: 'Claude (Anthropic)',
        bestFor: '分析、推理、技术文档、代码审查',
        strengths: '推理能力更强，幻觉更少，擅长复杂任务，处理长文档',
        weaknesses: '响应时间较慢，输出较保守（有时创意不足）',
        cost: '每百万 token $0.80-$3（因模型而异）',
        useWhen: '需要准确、逻辑严谨的分析时',
      },
      {
        name: 'Gemini (Google)',
        bestFor: '多模态任务（图像+文本）、搜索增强回答、实时信息',
        strengths: '集成实时搜索，原生多模态支持，视觉推理能力强',
        weaknesses: '较新（经过验证的模式较少），质量有时不稳定',
        cost: '每百万 token $0.075-$0.30（最实惠）',
        useWhen: '需要视觉推理或最新信息时',
      },
      {
        name: '本地 LLM（Llama 2、Mistral 等）',
        bestFor: '隐私敏感工作、自定义微调任务、离线运行',
        strengths: '完全隐私，无 API 费用（初次下载后），可自定义',
        weaknesses: '质量低于前沿模型，需要本地计算资源',
        cost: '$0（一次性下载）',
        useWhen: '处理敏感数据或需要完全离线运行时',
      },
    ],
    bestFor: '最适合：', strengths: '优势：', weaknesses: '劣势：', cost: '费用：', useWhen: '使用时机：',
    multiH2: '多 LLM 测试的优势',
    multiIntro: '研究表明，在多个 AI 模型上运行相同提示词可产生显著更好的结果：',
    multiItems: [
      { bold: '25-45% 准确率提升', rest: ' — 多模型方法提升输出质量' },
      { bold: '幻觉检测', rest: ' — 模型不一致时，说明发现了潜在虚假信息' },
      { bold: '共识置信度', rest: ' — 多个模型一致时，对答案的置信度更高' },
      { bold: '任务特定优化', rest: ' — 针对每种任务类型使用最佳模型' },
    ],
    tableH2: '快速比较表',
    tableHeaders: ['模型', '推理', '创意', '速度', '费用'],
    tableRows: [
      ['Claude', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '$$'],
      ['ChatGPT', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '$$'],
      ['Gemini', '⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '$'],
      ['本地 LLM', '⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐', '免费'],
    ],
    howH2: 'PromptQuorum 如何简化 AI 模型比较',
    howIntro: '手动在 25+ 个模型上测试每个提示词需要数小时。PromptQuorum 将整个流程自动化：',
    howSteps: [
      { title: '运行一次', desc: '输入一次提示词，同时分发给所有连接的模型。' },
      { title: '即时比较', desc: '并排查看所有回答，无需在浏览器标签间切换。' },
      { title: '找出共识', desc: 'Quorum 评分显示哪些答案在各模型间达成共识（高置信度）。' },
      { title: '优化您的提示词', desc: '查看质量评分，使用 PromptQuorum 的 8 种优化技术改进输出。' },
    ],
    ctaH2: '准备好查看每个 AI 的回答了吗？',
    ctaDesc: '加入候补名单即可立即访问——一个提示词，25+ 个回答，并排展示。',
    ctaBtn: '加入候补名单',
  },
}

function CompareContent() {
  const searchParams = useSearchParams()
  const lang = (searchParams?.get('lang') || 'en') as Lang
  const t = T[lang] ?? T.en

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
          <Link href="/" className="hover:text-primary">{t.breadcrumbHome}</Link>
          <span>/</span>
          <span className="text-text-primary font-medium">{t.breadcrumbCurrent}</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
            {t.h1}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Why Compare */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">{t.whyH2}</h2>
            <p className="text-text-secondary mb-4">{t.whyIntro}</p>
            <ul className="space-y-2 text-text-secondary">
              {t.whyItems.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>{item.bold}</strong>{item.rest}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Model Cards */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">{t.guideH2}</h2>
            <p className="text-text-secondary mb-6">{t.guideIntro}</p>
            {t.models.map((m, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg mb-4 border border-gray-200">
                <h3 className="text-xl font-bold text-text-primary mb-3">{m.name}</h3>
                <div className="space-y-2 text-text-secondary">
                  <p><strong>{t.bestFor}</strong> {m.bestFor}</p>
                  <p><strong>{t.strengths}</strong> {m.strengths}</p>
                  <p><strong>{t.weaknesses}</strong> {m.weaknesses}</p>
                  <p><strong>{t.cost}</strong> {m.cost}</p>
                  <p><strong>{t.useWhen}</strong> {m.useWhen}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Multi-LLM */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">{t.multiH2}</h2>
            <p className="text-text-secondary mb-6">{t.multiIntro}</p>
            <ul className="space-y-3 text-text-secondary">
              {t.multiItems.map((item, i) => (
                <li key={i}><strong>{item.bold}</strong>{item.rest}</li>
              ))}
            </ul>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">{t.tableH2}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-text-secondary border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    {t.tableHeaders.map((h, i) => (
                      <th key={i} className="text-left py-3 px-3 text-text-primary font-bold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.tableRows.map((row, i) => (
                    <tr key={i} className={i < t.tableRows.length - 1 ? 'border-b border-gray-200' : ''}>
                      {row.map((cell, j) => (
                        <td key={j} className={`py-3 px-3 ${j === 0 ? 'font-semibold' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How PQ Helps */}
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-4">{t.howH2}</h2>
            <p className="text-text-secondary mb-6">{t.howIntro}</p>
            <div className="space-y-3">
              {t.howSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-2xl font-bold text-primary min-w-fit">{i + 1}.</div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">{step.title}</h4>
                    <p className="text-text-secondary">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center mt-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">{t.ctaH2}</h2>
            <p className="text-text-secondary mb-6">{t.ctaDesc}</p>
            <Link href="/#waitlist" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              {t.ctaBtn}
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export function ComparePageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CompareContent />
    </Suspense>
  )
}
