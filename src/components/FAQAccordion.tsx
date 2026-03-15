'use client'

import { useState } from 'react'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

const FAQS: Record<Lang, { question: string; answer: string }[]> = {
  en: [
    { question: 'Is PromptQuorum free?', answer: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.' },
    { question: 'How does privacy work?', answer: 'You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up.' },
    { question: 'Which AI providers are supported?', answer: 'Over 25 AI providers are included, and you can add your own custom providers. Connect to ChatGPT, Claude, Gemini, and many more.' },
    { question: 'What platforms does PromptQuorum run on?', answer: 'PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions.' },
    { question: 'What makes PromptQuorum different?', answer: 'PromptQuorum is highly automated for prompt improvements, can send the same prompt to multiple AIs simultaneously, and analyzes results based on your criteria.' },
    { question: 'Are there any limits?', answer: 'No limits from PromptQuorum side. Your usage is only limited by your API keys or local LLM resources.' },
  ],
  de: [
    { question: 'Ist PromptQuorum kostenlos?', answer: 'Ja. PromptQuorum ist kostenlos nutzbar. Sie können Ihren eigenen API-Schlüssel mitbringen, ein lokales LLM verwenden oder unseren kostenlosen Test-Backend-Dienst zur Prompt-Optimierung ausprobieren.' },
    { question: 'Wie funktioniert der Datenschutz?', answer: 'Sie entscheiden, wohin Ihre Daten gehen. Alles lokal halten mit LM Studio oder Ollama, oder Ihre eigenen API-Schlüssel verwenden. PromptQuorum ist so privat, wie Sie es einrichten.' },
    { question: 'Welche KI-Anbieter werden unterstützt?', answer: 'Über 25 KI-Anbieter sind enthalten, und Sie können Ihre eigenen benutzerdefinierten Anbieter hinzufügen. Verbinden Sie sich mit ChatGPT, Claude, Gemini und vielen mehr.' },
    { question: 'Auf welchen Plattformen läuft PromptQuorum?', answer: 'PromptQuorum beginnt mit Desktop-Apps (Mac, Windows), gefolgt von einer Webanwendung und schließlich mobilen Lösungen.' },
    { question: 'Was macht PromptQuorum besonders?', answer: 'PromptQuorum ist hochgradig automatisiert für Prompt-Verbesserungen, kann denselben Prompt gleichzeitig an mehrere KIs senden und Ergebnisse nach Ihren Kriterien analysieren.' },
    { question: 'Gibt es Nutzungslimits?', answer: 'Keine Limits von PromptQuorum. Ihre Nutzung ist nur durch Ihre API-Schlüssel oder lokale LLM-Ressourcen begrenzt.' },
  ],
  fr: [
    { question: 'PromptQuorum est-il gratuit ?', answer: 'Oui. PromptQuorum est gratuit. Vous pouvez apporter votre propre clé API, utiliser un LLM local ou essayer notre service backend gratuit limité pour l\'optimisation de prompts à titre de test.' },
    { question: 'Comment fonctionne la confidentialité ?', answer: 'Vous décidez où vont vos données. Gardez tout local avec LM Studio ou Ollama, ou utilisez vos propres clés API. PromptQuorum est aussi privé que vous le configurez.' },
    { question: 'Quels fournisseurs IA sont supportés ?', answer: 'Plus de 25 fournisseurs IA sont inclus, et vous pouvez ajouter les vôtres. Connectez-vous à ChatGPT, Claude, Gemini et bien plus encore.' },
    { question: 'Sur quelles plateformes fonctionne PromptQuorum ?', answer: 'PromptQuorum commence par des applications desktop (Mac, Windows), suivies d\'une application web, puis de solutions mobiles.' },
    { question: 'Qu\'est-ce qui différencie PromptQuorum ?', answer: 'PromptQuorum est très automatisé pour l\'amélioration des prompts, peut envoyer le même prompt à plusieurs IA simultanément et analyser les résultats selon vos critères.' },
    { question: 'Y a-t-il des limites d\'utilisation ?', answer: 'Aucune limite de la part de PromptQuorum. Votre utilisation est uniquement limitée par vos clés API ou les ressources de votre LLM local.' },
  ],
  ja: [
    { question: 'PromptQuorumは無料ですか？', answer: 'はい、無料でご利用いただけます。独自のAPIキーを持ち込むか、ローカルLLMを使用するか、テスト用の無料バックエンドサービスをお試しいただけます。' },
    { question: 'プライバシーはどう機能しますか？', answer: 'データの行き先はあなたが決めます。LM StudioやOllamaですべてローカルに保つか、独自のAPIキーを使用してください。PromptQuorumはあなたの設定通りにプライベートです。' },
    { question: 'どのAIプロバイダーがサポートされていますか？', answer: '25以上のAIプロバイダーが含まれており、独自のカスタムプロバイダーも追加できます。ChatGPT・Claude・Geminiなどに接続可能です。' },
    { question: 'どのプラットフォームで動きますか？', answer: 'PromptQuorumはデスクトップアプリ（Mac・Windows）から始まり、ウェブアプリ、そしてモバイルソリューションへと展開します。' },
    { question: 'PromptQuorumの何が違うのですか？', answer: 'プロンプト改善の高度な自動化、複数のAIへの同時送信、そしてあなたの基準に基づく結果分析が特長です。' },
    { question: '利用制限はありますか？', answer: 'PromptQuorum側からの制限はありません。利用はAPIキーまたはローカルLLMのリソースにのみ依存します。' },
  ],
  zh: [
    { question: 'PromptQuorum 是免费的吗？', answer: '是的，PromptQuorum 免费使用。您可以自带 API 密钥、使用本地 LLM，或试用我们有限的免费后端服务进行提示词优化测试。' },
    { question: '隐私如何保障？', answer: '您决定数据的去向。通过 LM Studio 或 Ollama 将所有内容保存在本地，或使用您自己的 API 密钥。PromptQuorum 的隐私程度由您的设置决定。' },
    { question: '支持哪些 AI 提供商？', answer: '已包含 25+ 个 AI 提供商，您还可以添加自定义提供商。可连接 ChatGPT、Claude、Gemini 等众多服务。' },
    { question: 'PromptQuorum 支持哪些平台？', answer: 'PromptQuorum 从桌面应用（Mac、Windows）开始，随后推出网页应用，最终推出移动端解决方案。' },
    { question: 'PromptQuorum 有何独特之处？', answer: 'PromptQuorum 在提示词改进方面高度自动化，可同时将相同提示词发送给多个 AI，并根据您的标准分析结果。' },
    { question: '有使用限制吗？', answer: 'PromptQuorum 本身没有任何限制。您的使用量仅受 API 密钥或本地 LLM 资源限制。' },
  ],
}

export function FAQAccordion({ lang = 'en' }: { lang?: Lang }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const faqs = FAQS[lang] ?? FAQS.en

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <h3 className="font-semibold text-gray-900">{faq.question}</h3>
            <span className={`text-gray-400 transition-transform flex-shrink-0 ${expandedIndex === index ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          {expandedIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
