'use client'

import Link from 'next/link'
import { InteractivePipeline } from './InteractivePipeline'
import { LandingPageClient } from './LandingPageClient'
import { YouTubeFacade } from './YouTubeFacade'
import { BlogSectionClient } from './BlogSectionClient'
import { Suspense } from 'react'
import { useLang } from '@/hooks/useLang'
import { translations } from '@/translations'

// Icons
const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)
const Sparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
)
const Zap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)
const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/><path d="M9.75 9.75a4 4 0 0 1 5.542 2.824"/><path d="M14.25 9.75a4 4 0 0 1-5.542-2.824"/></svg>
)
const Layers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.65-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg>
)

// ─── Translations ──────────────────────────────────────────────────────────────

const T = {
  en: {
    badge: 'Waitlist Now Open',
    h1a: 'One Prompt. 25+ AI Responses.',
    h1b: 'Get Consensus',
    heroDesc: 'Write and optimize your prompt once — get responses from ChatGPT, Claude, Gemini, and 25+ AI models side-by-side. Detect hallucinations, score consensus, and find the best answer across all models.',
    heroSub: 'Free to use. Bring your own API key or run a local LLM.',
    compareH2: 'Which AI Model Gives the Best Answer for Your Task?',
    compareDesc: 'Send the same prompt to ChatGPT, Claude, Gemini, Mistral, Llama, DeepSeek, and 25+ other AI models simultaneously. Compare responses side-by-side to find factual consensus and flag contradictions.',
    compareBtn: 'View AI Model Comparison Guide',
    featuresH2: 'What Can You Do with PromptQuorum?',
    featuresDesc: 'Six tools for prompt optimization, multi-model dispatch, and consensus analysis',
    features: [
      { title: 'Prompt Optimization', description: 'Automatically refine and optimize your prompts across 8 refinement techniques.' },
      { title: 'Multi-Model Analysis', description: 'Compare responses from 25+ AI models side-by-side to detect hallucinations.' },
      { title: 'Model Capability Comparison', description: 'Identify which model excels at coding, reasoning, creative writing, or factual recall — side-by-side for your exact prompt.' },
      { title: 'Speed & Efficiency', description: 'Dispatch to 25+ models in one click instead of switching between browser tabs manually.' },
      { title: 'Privacy First', description: 'API keys stay in your browser localStorage only — never transmitted to PromptQuorum servers. Zero registration, zero tracking, total control.' },
      { title: 'Open Source Integration', description: 'Deploy locally with Ollama, LM Studio, Jan AI, and Meta Llama — no API key required.' },
    ],
    pipelineH2: 'How Does the PromptQuorum 4-Stage Pipeline Work?',
    pipelineDesc: 'Optimize, compare, analyze, and improve your prompts automatically',
    faqH2: 'Frequently Asked Questions',
    waitlistH2: 'Join the PromptQuorum Waitlist',
    publishedDate: 'Updated April 5, 2026',
    waitlistDesc: 'PromptQuorum is live April 2026. Join the waitlist for early access and lifetime premium features. Your API keys stay in your browser—zero registration, zero tracking.',
    whyH2: 'Why PromptQuorum?',
    whyItems: [
      'Dispatch one prompt to 25+ models simultaneously — no tab switching',
      'Get Quorum Verdict: automated consensus scoring across all models',
      'Detect hallucinations and flag contradictions automatically',
      'Run locally with Ollama/LM Studio for total privacy',
      'Free to use — bring your own API keys, stay in full control'
    ],
    faqs: [
      { q: 'Is PromptQuorum free?', a: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.' },
      { q: 'How does privacy work?', a: 'You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up.' },
      { q: 'Which AI providers are supported?', a: 'PromptQuorum dispatches to 25+ cloud providers: GPT-4o, GPT-4o mini, Claude Sonnet 4.6, Claude 4, Gemini 2.0 Flash, Gemini 1.5 Pro, Mistral Large, DeepSeek, Grok, and more. Plus local LLMs: Ollama, LM Studio, Jan AI, GPT4All.' },
      { q: 'What platforms does PromptQuorum run on?', a: 'PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions.' },
      { q: 'What makes PromptQuorum different?', a: 'PromptQuorum covers the full prompt lifecycle: 9 built-in frameworks for writing, iterative optimization with 8 refinement types, simultaneous dispatch to 25+ models, and 13 Quorum analysis types for consensus scoring.' },
      { q: 'Are there any limits?', a: 'No limits from PromptQuorum side. Your usage depends only on your own API rate limits or local LLM resources—we never throttle or meter usage.' },
    ],
    copyright: '© 2026 PromptQuorum. All rights reserved.',
    worldwide: '🌍 Available worldwide',
  },
  de: {
    badge: 'Warteliste jetzt offen',
    h1a: 'Ein Prompt. 25+ KI-Antworten.',
    h1b: 'Konsens finden',
    heroDesc: 'Schreiben und optimieren Sie Ihren Prompt einmal — erhalten Sie Antworten von ChatGPT, Claude, Gemini und 25+ KI-Modellen nebeneinander. Halluzinationen erkennen, Konsens bewerten und die beste Antwort aller Modelle finden.',
    heroSub: 'Kostenlos nutzbar. Bringen Sie Ihren eigenen API-Schlüssel mit oder nutzen Sie ein lokales LLM.',
    compareH2: 'Welches KI-Modell liefert für Ihre Aufgabe die beste Antwort?',
    compareDesc: 'Senden Sie denselben Prompt gleichzeitig an ChatGPT, Claude, Gemini, Mistral, Llama, DeepSeek und 25+ weitere KI-Modelle. Vergleichen Sie Antworten nebeneinander, um Konsens zu finden und Widersprüche zu erkennen.',
    compareBtn: 'KI-Modell-Vergleichsanleitung ansehen',
    featuresH2: 'Was können Sie mit PromptQuorum tun?',
    featuresDesc: 'Sechs Werkzeuge für Prompt-Optimierung, Multi-Modell-Versand und Konsensanalyse',
    features: [
      { title: 'Prompt-Optimierung', description: 'Verfeinern und optimieren Sie Ihre Prompts automatisch mit 8 Verfeinerungstechniken.' },
      { title: 'Multi-Modell-Analyse', description: 'Vergleichen Sie Antworten von 25+ KI-Modellen nebeneinander, um Halluzinationen zu erkennen.' },
      { title: 'Modellvergleich', description: 'Erkennen Sie, welches Modell bei Code, Reasoning, kreativem Schreiben oder Faktenrecherche hervorsticht — für Ihren konkreten Prompt.' },
      { title: 'Geschwindigkeit & Effizienz', description: 'Mit einem Klick an 25+ Modelle senden, statt manuell zwischen Browser-Tabs zu wechseln.' },
      { title: 'Datenschutz zuerst', description: 'Keine Registrierung, kein Tracking, volle Kontrolle. Alles lokal ausführen.' },
      { title: 'Open-Source-Integration', description: 'Lokal bereitstellen mit Ollama, LM Studio, Jan AI und Meta Llama — kein API-Schlüssel erforderlich.' },
    ],
    pipelineH2: 'Wie funktioniert die 4-Stufen-Pipeline von PromptQuorum?',
    pipelineDesc: 'Prompts automatisch optimieren, vergleichen, analysieren und verbessern',
    faqH2: 'Häufig gestellte Fragen',
    waitlistH2: 'Der PromptQuorum-Warteliste beitreten',
    publishedDate: 'Aktualisiert 5. April 2026',
    waitlistDesc: 'PromptQuorum ist live im April 2026. Treten Sie der Warteliste bei, um Early Access und lebenslange Premium-Funktionen zu erhalten. Ihre API-Schlüssel bleiben in Ihrem Browser — null Registrierung, null Tracking.',
    whyH2: 'Warum PromptQuorum?',
    whyItems: [
      'Senden Sie einen Prompt gleichzeitig an 25+ Modelle — kein Tab-Wechsel',
      'Erhalten Sie das Quorum-Urteil: automatisierte Konsensbewertung über alle Modelle',
      'Erkennen Sie Halluzinationen und kennzeichnen Sie Widersprüche automatisch',
      'Führen Sie lokal mit Ollama/LM Studio für totale Privatsphäre durch',
      'Kostenlose Nutzung — bringen Sie Ihre eigenen API-Schlüssel mit, bleiben Sie in voller Kontrolle'
    ],
    faqs: [
      { q: 'Ist PromptQuorum kostenlos?', a: 'Ja. PromptQuorum ist kostenlos nutzbar. Sie können Ihren eigenen API-Schlüssel mitbringen, ein lokales LLM verwenden oder unseren kostenlosen Testdienst ausprobieren.' },
      { q: 'Wie funktioniert der Datenschutz?', a: 'Sie entscheiden, wohin Ihre Daten gehen. Alles lokal halten mit LM Studio oder Ollama, oder Ihre eigenen API-Schlüssel verwenden. PromptQuorum ist so privat, wie Sie es einrichten.' },
      { q: 'Welche KI-Anbieter werden unterstützt?', a: 'Über 25 KI-Anbieter sind enthalten, und Sie können Ihre eigenen hinzufügen. Verbinden Sie sich mit ChatGPT, Claude, Gemini und vielen mehr.' },
      { q: 'Auf welchen Plattformen läuft PromptQuorum?', a: 'PromptQuorum beginnt mit Desktop-Apps (Mac, Windows), gefolgt von einer Webanwendung und schließlich mobilen Lösungen.' },
      { q: 'Was macht PromptQuorum besonders?', a: 'PromptQuorum ist hochgradig automatisiert für Prompt-Verbesserungen, kann denselben Prompt gleichzeitig an mehrere KIs senden und Ergebnisse nach Ihren Kriterien analysieren.' },
      { q: 'Gibt es Limits?', a: 'Keine Limits von PromptQuorum. Ihre Nutzung ist nur durch Ihre API-Schlüssel oder lokale LLM-Ressourcen begrenzt.' },
    ],
    copyright: '© 2026 PromptQuorum. Alle Rechte vorbehalten.',
    worldwide: '🌍 Weltweit verfügbar',
  },
  fr: {
    badge: 'Liste d\'attente ouverte',
    h1a: 'Un Prompt. 25+ Réponses IA.',
    h1b: 'Trouvez le Consensus',
    heroDesc: 'Rédigez et optimisez votre prompt une seule fois — recevez des réponses de ChatGPT, Claude, Gemini et 25+ modèles IA côte à côte. Détectez les hallucinations, évaluez le consensus et trouvez la meilleure réponse parmi tous les modèles.',
    heroSub: 'Gratuit. Apportez votre propre clé API ou utilisez un LLM local.',
    compareH2: 'Quel modèle IA donne la meilleure réponse pour votre tâche ?',
    compareDesc: 'Envoyez le même prompt à ChatGPT, Claude, Gemini, Mistral, Llama, DeepSeek et 25+ autres modèles simultanément. Comparez les réponses côte à côte pour identifier le consensus factuel et signaler les contradictions.',
    compareBtn: 'Voir le guide de comparaison des modèles IA',
    featuresH2: 'Que pouvez-vous faire avec PromptQuorum ?',
    featuresDesc: 'Six outils pour l\'optimisation des prompts, l\'envoi multi-modèles et l\'analyse de consensus',
    features: [
      { title: 'Optimisation des prompts', description: 'Affinez et optimisez automatiquement vos prompts avec 8 techniques de raffinement.' },
      { title: 'Analyse multi-modèles', description: 'Comparez les réponses de 25+ modèles IA côte à côte pour détecter les hallucinations.' },
      { title: 'Comparaison des capacités des modèles', description: 'Identifiez quel modèle excelle en code, raisonnement, écriture créative ou rappel factuel — côte à côte pour votre prompt exact.' },
      { title: 'Rapidité & Efficacité', description: 'Envoyez à 25+ modèles en un clic plutôt que de basculer manuellement entre les onglets du navigateur.' },
      { title: 'Confidentialité d\'abord', description: 'Zéro inscription, zéro tracking, contrôle total. Exécutez tout localement.' },
      { title: 'Intégration Open Source', description: 'Déployez localement avec Ollama, LM Studio, Jan AI et Meta Llama — sans clé API requise.' },
    ],
    pipelineH2: 'Comment fonctionne le pipeline en 4 étapes de PromptQuorum ?',
    pipelineDesc: 'Optimisez, comparez, analysez et améliorez vos prompts automatiquement',
    faqH2: 'Questions fréquemment posées',
    waitlistH2: 'Rejoindre la liste d\'attente PromptQuorum',
    publishedDate: 'Mis à jour 5 avril 2026',
    waitlistDesc: 'PromptQuorum est en direct avril 2026. Rejoignez la liste d\'attente pour un accès précoce et les fonctionnalités premium à vie. Vos clés API restent dans votre navigateur — zéro inscription, zéro suivi.',
    whyH2: 'Pourquoi PromptQuorum ?',
    whyItems: [
      'Envoyez un prompt à 25+ modèles simultanément — pas de changement d\'onglet',
      'Obtenez le Quorum Verdict : notation de consensus automatisée sur tous les modèles',
      'Détectez les hallucinations et signalez les contradictions automatiquement',
      'Exécutez localement avec Ollama/LM Studio pour une confidentialité totale',
      'Gratuit à utiliser — apportez vos propres clés API, restez en contrôle total'
    ],
    faqs: [
      { q: 'PromptQuorum est-il gratuit ?', a: 'Oui. PromptQuorum est gratuit. Vous pouvez apporter votre propre clé API, utiliser un LLM local, ou essayer notre service backend gratuit limité.' },
      { q: 'Comment fonctionne la confidentialité ?', a: 'Vous décidez où vont vos données. Gardez tout local avec LM Studio ou Ollama, ou utilisez vos propres clés API. PromptQuorum est aussi privé que vous le configurez.' },
      { q: 'Quels fournisseurs IA sont supportés ?', a: 'Plus de 25 fournisseurs IA sont inclus, et vous pouvez ajouter les vôtres. Connectez-vous à ChatGPT, Claude, Gemini et bien plus.' },
      { q: 'Sur quelles plateformes fonctionne PromptQuorum ?', a: 'PromptQuorum commence par des applications desktop (Mac, Windows), suivies d\'une application web, puis mobile.' },
      { q: 'Qu\'est-ce qui différencie PromptQuorum ?', a: 'PromptQuorum est très automatisé pour améliorer les prompts, peut envoyer le même prompt à plusieurs IA simultanément et analyser les résultats selon vos critères.' },
      { q: 'Y a-t-il des limites ?', a: 'Aucune limite de la part de PromptQuorum. Votre utilisation est uniquement limitée par vos clés API ou ressources LLM locales.' },
    ],
    copyright: '© 2026 PromptQuorum. Tous droits réservés.',
    worldwide: '🌍 Disponible dans le monde entier',
  },
  ja: {
    badge: 'ウェイトリスト受付中',
    h1a: '1つのプロンプト。25以上のAI回答。',
    h1b: 'コンセンサスを得る',
    heroDesc: 'プロンプトを作成・最適化して一度送信するだけで、ChatGPT・Claude・Geminiをはじめ25以上のAIモデルから並べて回答を取得。ハルシネーションを検出し、コンセンサスを評価し、全モデル中の最良回答を見つけましょう。',
    heroSub: '無料でご利用いただけます。APIキーをご持参いただくか、ローカルLLMをご利用ください。',
    compareH2: 'あなたのタスクに最適なAIモデルはどれですか？',
    compareDesc: 'ChatGPT・Claude・Gemini・Mistral・Llama・DeepSeekなど25以上のモデルに同じプロンプトを同時送信。回答を並べて比較し、事実の合意点を見つけ、矛盾を検出します。',
    compareBtn: 'AIモデル比較ガイドを見る',
    featuresH2: 'PromptQuorumで何ができますか？',
    featuresDesc: 'プロンプト最適化・マルチモデル送信・コンセンサス分析のための6つのツール',
    features: [
      { title: 'プロンプト最適化', description: '8つの改善テクニックでプロンプトを自動的に改良・最適化します。' },
      { title: 'マルチモデル分析', description: '25以上のAIモデルの回答を並べて比較し、ハルシネーションを検出します。' },
      { title: 'モデル能力比較', description: 'コーディング・推論・創作・事実確認のどれが得意かを、あなたのプロンプトで並べて確認できます。' },
      { title: 'スピードと効率', description: 'ブラウザのタブを手動で切り替える代わりに、1クリックで25以上のモデルに送信できます。' },
      { title: 'プライバシー優先', description: '登録不要、追跡なし、完全なコントロール。すべてローカルで実行可能。' },
      { title: 'オープンソース統合', description: 'Ollama・LM Studio・Jan AI・Meta LlamaでAPIキー不要でローカルにデプロイ可能。' },
    ],
    pipelineH2: 'PromptQuorumの4段階パイプラインはどのように機能しますか？',
    pipelineDesc: 'プロンプトの最適化・比較・分析・改善を自動で実行',
    faqH2: 'よくある質問',
    waitlistH2: 'PromptQuorumウェイトリストに参加',
    publishedDate: '更新日 2026年4月5日',
    waitlistDesc: 'PromptQuorumは2026年4月にライブです。ウェイトリストに参加して、早期アクセスと生涯プレミアム機能を取得してください。APIキーはブラウザに保存されたまま—登録なし、トラッキングなし。',
    whyH2: 'PromptQuorumを選ぶ理由',
    whyItems: [
      '1つのプロンプトを25+個のモデルに同時に送信 — タブ切り替えなし',
      'Quorum Verdict を取得：すべてのモデル間で自動化されたコンセンサススコアリング',
      'ハルシネーションを検出し、矛盾を自動的にフラグ',
      'Ollama/LM Studioでローカル実行 — 完全なプライバシー',
      '無料で使用可能 — 独自のAPIキーを持ち込み、完全なコントロール'
    ],
    faqs: [
      { q: 'PromptQuorumは無料ですか？', a: 'はい、無料でご利用いただけます。独自のAPIキーを持ち込むか、ローカルLLMを使用するか、テスト用の無料バックエンドサービスをお試しください。' },
      { q: 'プライバシーはどう機能しますか？', a: 'データの行き先はあなたが決めます。LM StudioやOllamaですべてローカルに保つか、独自のAPIキーを使用してください。PromptQuorumはあなたの設定通りにプライベートです。' },
      { q: 'どのAIプロバイダーがサポートされていますか？', a: '25以上のAIプロバイダーが含まれており、独自のものも追加できます。ChatGPT・Claude・Geminiなどに接続可能です。' },
      { q: 'どのプラットフォームで動きますか？', a: 'PromptQuorumはデスクトップアプリ（Mac・Windows）から始まり、ウェブアプリ、そしてモバイルソリューションへと展開します。' },
      { q: 'PromptQuorumの何が違うのですか？', a: 'プロンプト改善の高度な自動化、複数のAIへの同時送信、そしてあなたの基準に基づく結果分析が特長です。' },
      { q: '利用制限はありますか？', a: 'PromptQuorum側からの制限はありません。利用はAPIキーまたはローカルLLMのリソースにのみ依存します。' },
    ],
    copyright: '© 2026 PromptQuorum. All rights reserved.',
    worldwide: '🌍 世界中で利用可能',
  },
  zh: {
    badge: '候补名单现已开放',
    h1a: '一个提示词，25+ AI 回答。',
    h1b: '获得共识',
    heroDesc: '编写并优化您的提示词，一次发送——即可并排获得 ChatGPT、Claude、Gemini 及 25+ 个 AI 模型的回答。检测幻觉，评估共识，找出所有模型中的最佳答案。',
    heroSub: '免费使用。携带您自己的 API 密钥，或运行本地 LLM。',
    compareH2: '哪个 AI 模型最适合您的任务？',
    compareDesc: '同时将相同的提示词发送给 ChatGPT、Claude、Gemini、Mistral、Llama、DeepSeek 等 25+ 个模型。并排比较回答，找出事实共识，标记矛盾之处。',
    compareBtn: '查看 AI 模型比较指南',
    featuresH2: 'PromptQuorum 能做什么？',
    featuresDesc: '提示词优化、多模型分发和共识分析的六大工具',
    features: [
      { title: '提示词优化', description: '通过 8 种优化技术自动改进和优化您的提示词。' },
      { title: '多模型分析', description: '并排比较 25+ 个 AI 模型的回答，快速检测幻觉内容。' },
      { title: '模型能力对比', description: '找出哪个模型在代码、推理、创意写作或事实查询方面表现最佳——针对您的具体提示词并排呈现。' },
      { title: '速度与效率', description: '一键分发至 25+ 个模型，无需在浏览器标签页之间手动切换。' },
      { title: '隐私优先', description: '无需注册，零追踪，完全掌控。所有内容均可在本地运行。' },
      { title: '开源集成', description: '使用 Ollama、LM Studio、Jan AI 和 Meta Llama 在本地部署——无需 API 密钥。' },
    ],
    pipelineH2: 'PromptQuorum 的 4 阶段流水线是如何运作的？',
    pipelineDesc: '自动优化、比较、分析并改进您的提示词',
    faqH2: '常见问题',
    waitlistH2: '加入 PromptQuorum 候补名单',
    publishedDate: '更新于2026年4月5日',
    waitlistDesc: 'PromptQuorum在2026年4月上线。加入等待列表获得早期访问和终身高级功能。您的API密钥保留在您的浏览器中—零注册、零跟踪。',
    whyH2: '为什么选择PromptQuorum？',
    whyItems: [
      '同时向25+个模型发送一个提示词 — 无需切换标签',
      '获取Quorum Verdict：跨所有模型的自动化共识评分',
      '自动检测幻觉并标记矛盾',
      '使用Ollama/LM Studio本地运行，实现完全隐私',
      '免费使用 — 使用您自己的API密钥，保持完全控制'
    ],
    faqs: [
      { q: 'PromptQuorum 是免费的吗？', a: '是的，PromptQuorum 免费使用。您可以自带 API 密钥、使用本地 LLM，或试用我们有限的免费后端服务。' },
      { q: '隐私如何保障？', a: '您决定数据的去向。通过 LM Studio 或 Ollama 将所有内容保存在本地，或使用您自己的 API 密钥。PromptQuorum 的隐私程度由您自己设置决定。' },
      { q: '支持哪些 AI 提供商？', a: '已包含 25+ 个 AI 提供商，您还可以添加自定义提供商。可连接 ChatGPT、Claude、Gemini 等众多服务。' },
      { q: 'PromptQuorum 支持哪些平台？', a: 'PromptQuorum 从桌面应用（Mac、Windows）开始，随后推出网页应用，最终推出移动端解决方案。' },
      { q: 'PromptQuorum 有何独特之处？', a: 'PromptQuorum 在提示词改进方面高度自动化，可同时将相同提示词发送给多个 AI，并根据您的标准分析结果。' },
      { q: '有使用限制吗？', a: 'PromptQuorum 本身没有任何限制。您的使用量仅受 API 密钥或本地 LLM 资源限制。' },
    ],
    copyright: '© 2026 PromptQuorum. 保留所有权利。',
    worldwide: '🌍 全球可用',
  },
  es: {
    badge: 'Lista de espera abierta',
    h1a: 'Un prompt. 25+ respuestas de IA.',
    h1b: 'Obtén el consenso',
    heroDesc: 'Escribe y optimiza tu prompt una sola vez — obtén respuestas de ChatGPT, Claude, Gemini y 25+ modelos de IA en paralelo. Detecta alucinaciones, puntúa el consenso y encuentra la mejor respuesta entre todos los modelos.',
    heroSub: 'Gratis. Trae tu propia clave de API o usa un LLM local.',
    compareH2: '¿Qué modelo de IA da la mejor respuesta para tu tarea?',
    compareDesc: 'Envía el mismo prompt simultáneamente a ChatGPT, Claude, Gemini, Mistral, Llama, DeepSeek y 25+ modelos más. Compara respuestas en paralelo para encontrar el consenso factual y detectar contradicciones.',
    compareBtn: 'Ver guía de comparación de modelos de IA',
    featuresH2: '¿Qué puedes hacer con PromptQuorum?',
    featuresDesc: 'Seis herramientas para la optimización de prompts, el envío a múltiples modelos y el análisis de consenso',
    features: [
      { title: 'Optimización de prompts', description: 'Refina y optimiza tus prompts automáticamente con 8 técnicas de refinamiento.' },
      { title: 'Análisis multi-modelo', description: 'Compara respuestas de 25+ modelos de IA en paralelo para detectar alucinaciones.' },
      { title: 'Comparación de capacidades', description: 'Identifica qué modelo destaca en código, razonamiento, escritura creativa o memoria factual — para tu prompt exacto.' },
      { title: 'Velocidad y eficiencia', description: 'Envía a 25+ modelos con un solo clic en lugar de cambiar pestañas manualmente.' },
      { title: 'Privacidad ante todo', description: 'Cero registro, cero rastreo, control total. Ejecuta todo localmente.' },
      { title: 'Integración de código abierto', description: 'Despliega localmente con Ollama, LM Studio, Jan AI y Meta Llama — sin clave de API requerida.' },
    ],
    pipelineH2: '¿Cómo funciona el pipeline de 4 etapas de PromptQuorum?',
    pipelineDesc: 'Optimiza, compara, analiza y mejora tus prompts automáticamente',
    faqH2: 'Preguntas frecuentes',
    waitlistH2: 'Únete a la lista de espera de PromptQuorum',
    publishedDate: 'Actualizado 5 de abril de 2026',
    waitlistDesc: 'PromptQuorum se lanza en abril de 2026. Únete a la lista de espera para acceso anticipado y funciones premium de por vida. Tus claves de API se quedan en tu navegador — cero registro, cero rastreo.',
    whyH2: '¿Por qué PromptQuorum?',
    whyItems: [
      'Envía un prompt a 25+ modelos simultáneamente — sin cambiar pestañas',
      'Obtén el Quorum Verdict: puntuación de consenso automatizada entre todos los modelos',
      'Detecta alucinaciones y marca contradicciones automáticamente',
      'Ejecuta localmente con Ollama/LM Studio para privacidad total',
      'Gratis — trae tus propias claves de API, mantén el control total'
    ],
    faqs: [
      { q: '¿Es gratuito PromptQuorum?', a: 'Sí. PromptQuorum es gratuito. Puedes traer tu propia clave de API, usar un LLM local o probar nuestro servicio backend gratuito limitado para la optimización de prompts.' },
      { q: '¿Cómo funciona la privacidad?', a: 'Tú decides adónde van tus datos. Mantén todo localmente con LM Studio u Ollama, o usa tus propias claves de API. PromptQuorum es tan privado como tú lo configures.' },
      { q: '¿Qué proveedores de IA son compatibles?', a: 'PromptQuorum envía a más de 25 proveedores en la nube: GPT-4o, GPT-4o mini, Claude Sonnet 4.6, Claude 4, Gemini 2.0 Flash, Gemini 1.5 Pro, Mistral Large, DeepSeek, Grok y más. Más LLMs locales: Ollama, LM Studio, Jan AI, GPT4All.' },
      { q: '¿En qué plataformas funciona PromptQuorum?', a: 'PromptQuorum comienza con aplicaciones de escritorio (Mac, Windows), seguidas de una aplicación web y finalmente soluciones móviles.' },
      { q: '¿Qué hace diferente a PromptQuorum?', a: 'PromptQuorum cubre el ciclo completo del prompt: 9 frameworks integrados para escribir, optimización iterativa con 8 tipos de refinamiento, envío simultáneo a 25+ modelos y 13 tipos de análisis Quorum para la puntuación de consenso.' },
      { q: '¿Hay algún límite?', a: 'Ningún límite por parte de PromptQuorum. Tu uso depende solo de tus propios límites de tasa de API o recursos de LLM local — nunca limitamos ni medimos el uso.' },
    ],
    copyright: '© 2026 PromptQuorum. Todos los derechos reservados.',
    worldwide: '🌍 Disponible en todo el mundo',
  },
  pt: {
    badge: 'Lista de espera aberta',
    h1a: 'Um prompt. 25+ respostas de IA.',
    h1b: 'Obtenha o consenso',
    heroDesc: 'Escreva e otimize seu prompt uma única vez — receba respostas do ChatGPT, Claude, Gemini e 25+ modelos de IA lado a lado. Detecte alucinações, pontue o consenso e encontre a melhor resposta entre todos os modelos.',
    heroSub: 'Grátis. Use sua própria chave de API ou rode um LLM local.',
    compareH2: 'Qual modelo de IA dá a melhor resposta para a sua tarefa?',
    compareDesc: 'Envie o mesmo prompt simultaneamente para ChatGPT, Claude, Gemini, Mistral, Llama, DeepSeek e mais de 25 modelos. Compare as respostas lado a lado para encontrar o consenso factual e detectar contradições.',
    compareBtn: 'Ver guia de comparação de modelos de IA',
    featuresH2: 'O que você pode fazer com o PromptQuorum?',
    featuresDesc: 'Seis ferramentas para otimização de prompts, envio para múltiplos modelos e análise de consenso',
    features: [
      { title: 'Otimização de prompts', description: 'Refine e otimize seus prompts automaticamente com 8 técnicas de refinamento.' },
      { title: 'Análise multimodelo', description: 'Compare respostas de 25+ modelos de IA lado a lado para detectar alucinações.' },
      { title: 'Comparação de capacidades', description: 'Identifique qual modelo se destaca em código, raciocínio, escrita criativa ou memória factual — para o seu prompt exato.' },
      { title: 'Velocidade e eficiência', description: 'Envie para 25+ modelos com um único clique em vez de alternar abas manualmente.' },
      { title: 'Privacidade em primeiro lugar', description: 'Zero cadastro, zero rastreamento, controle total. Execute tudo localmente.' },
      { title: 'Integração open source', description: 'Implante localmente com Ollama, LM Studio, Jan AI e Meta Llama — sem chave de API necessária.' },
    ],
    pipelineH2: 'Como funciona o pipeline de 4 etapas do PromptQuorum?',
    pipelineDesc: 'Otimize, compare, analise e melhore seus prompts automaticamente',
    faqH2: 'Perguntas frequentes',
    waitlistH2: 'Entre na lista de espera do PromptQuorum',
    publishedDate: 'Atualizado em 5 de abril de 2026',
    waitlistDesc: 'O PromptQuorum entra no ar em abril de 2026. Entre na lista de espera para ter acesso antecipado e recursos premium vitalícios. Suas chaves de API ficam no seu navegador — zero cadastro, zero rastreamento.',
    whyH2: 'Por que o PromptQuorum?',
    whyItems: [
      'Envie um prompt para 25+ modelos simultaneamente — sem trocar de aba',
      'Obtenha o Quorum Verdict: pontuação de consenso automatizada entre todos os modelos',
      'Detecte alucinações e marque contradições automaticamente',
      'Execute localmente com Ollama/LM Studio para privacidade total',
      'Grátis — use suas próprias chaves de API, mantenha o controle total'
    ],
    faqs: [
      { q: 'O PromptQuorum é gratuito?', a: 'Sim. O PromptQuorum é gratuito. Você pode usar sua própria chave de API, usar um LLM local ou testar nosso serviço de backend gratuito limitado para otimização de prompts.' },
      { q: 'Como funciona a privacidade?', a: 'Você decide para onde vão seus dados. Mantenha tudo localmente com LM Studio ou Ollama, ou use suas próprias chaves de API. O PromptQuorum é tão privado quanto você configurar.' },
      { q: 'Quais provedores de IA são compatíveis?', a: 'O PromptQuorum envia para mais de 25 provedores na nuvem: GPT-4o, GPT-4o mini, Claude Sonnet 4.6, Claude 4, Gemini 2.0 Flash, Gemini 1.5 Pro, Mistral Large, DeepSeek, Grok e mais. Além de LLMs locais: Ollama, LM Studio, Jan AI, GPT4All.' },
      { q: 'Em quais plataformas o PromptQuorum funciona?', a: 'O PromptQuorum começa com aplicativos desktop (Mac, Windows), seguidos de um aplicativo web e, por fim, soluções móveis.' },
      { q: 'O que torna o PromptQuorum diferente?', a: 'O PromptQuorum cobre todo o ciclo de vida do prompt: 9 frameworks integrados para escrever, otimização iterativa com 8 tipos de refinamento, envio simultâneo para 25+ modelos e 13 tipos de análise Quorum para pontuação de consenso.' },
      { q: 'Há algum limite?', a: 'Nenhum limite por parte do PromptQuorum. Seu uso depende apenas dos seus próprios limites de taxa de API ou recursos de LLM local — nunca restringimos nem medimos o uso.' },
    ],
    copyright: '© 2026 PromptQuorum. Todos os direitos reservados.',
    worldwide: '🌍 Disponível no mundo todo',
  },
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: number }) {
  return (
    <div
      className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all-200 group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all-200">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}

const ICONS = [Sparkles, Layers, Brain, Zap, Shield, Download]

// Main Landing Page Server Component
export function LandingPageServer({ initialLang }: { initialLang?: import('@/hooks/useLang').Lang }) {
  const lang = useLang(initialLang)
  const t = (T[lang as keyof typeof T] ?? T.en)!

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in">
            <Sparkles />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            {t.h1a}
            <span className="block text-primary">{t.h1b}</span>
          </h1>

          <p className="mt-6 text-lg text-text-primary max-w-3xl mx-auto animate-fade-in font-medium leading-relaxed" style={{ animationDelay: '150ms' }}>
            <strong>PromptQuorum is a multi-AI dispatch tool that sends one prompt to 25+ models simultaneously — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, DeepSeek, and more — and scores the results for consensus and hallucination risk.</strong>
          </p>

          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t.heroDesc}
          </p>

          <div className="mt-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Suspense fallback={<div className="max-w-md mx-auto h-12 bg-gray-200 rounded" />}>
              <LandingPageClient lang={lang} />
            </Suspense>
          </div>

          <p className="mt-8 text-text-muted text-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
            {t.heroSub}
          </p>

          {/* YouTube Video */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="relative w-full pb-[56.25%]">
                <YouTubeFacade />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Model Comparison Section */}
      <section className="py-20 px-4 sm:px-6 bg-primary/5 border-t-2 border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            {t.compareH2}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            {t.compareDesc}
          </p>
          <Link href="/compare" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
            {t.compareBtn}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {t.featuresH2}
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {t.featuresDesc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={ICONS[index]}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {t.pipelineH2}
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              {t.pipelineDesc}
            </p>
          </div>

          <Suspense fallback={<div className="h-64 bg-gray-200 rounded" />}>
            <InteractivePipeline />
          </Suspense>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {t.faqH2}
            </h2>
          </div>

          <div className="space-y-4">
            {t.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 bg-white">
                  <h3 className="font-medium text-text-primary">{faq.q}</h3>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-text-secondary">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Free Guides Section */}
      <section id="guides" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {translations[lang as keyof typeof translations]?.guidesTitle || 'Explore Free Guides'}
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {translations[lang as keyof typeof translations]?.guidesDesc || 'Deep dives into AI, prompting, and local LLMs'}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Local LLMs Card */}
            <a href={lang === 'en' ? '/local-llms' : `/${lang}/local-llms`} className="block group rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                {translations[lang as keyof typeof translations]?.guidesLocalLlms || 'Local LLMs'}
              </h3>
              <p className="mt-2 text-text-secondary">
                {translations[lang as keyof typeof translations]?.guidesLocalLlmsDesc || 'How to run AI models on your own hardware'}
              </p>
            </a>

            {/* Prompt Engineering Card */}
            <a href={lang === 'en' ? '/prompt-engineering' : `/${lang}/prompt-engineering`} className="block group rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                {translations[lang as keyof typeof translations]?.guidesPromptEng || 'Prompt Engineering'}
              </h3>
              <p className="mt-2 text-text-secondary">
                {translations[lang as keyof typeof translations]?.guidesPromptEngDesc || 'Techniques to optimize prompts for better answers'}
              </p>
            </a>

            {/* Quantization Card */}
            <a href={lang === 'en' ? '/local-llms/llm-quantization-explained' : `/${lang}/local-llms/llm-quantization-explained`} className="block group rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                {translations[lang as keyof typeof translations]?.guidesQuantization || 'LLM Quantization'}
              </h3>
              <p className="mt-2 text-text-secondary">
                {translations[lang as keyof typeof translations]?.guidesQuantizationDesc || 'Compress models to run on consumer GPUs'}
              </p>
            </a>
          </div>
        </div>
      </section>

      <BlogSectionClient initialLang={lang as any} />

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {t.waitlistH2}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t.waitlistDesc}
          </p>
          <div className="mt-10">
            <Suspense fallback={<div className="max-w-md mx-auto h-12 bg-gray-200 rounded" />}>
              <LandingPageClient isWaitlistForm={true} lang={lang} />
            </Suspense>
          </div>
        </div>
      </section>

    </div>
  )
}
