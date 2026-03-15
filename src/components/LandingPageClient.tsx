'use client'

import { useState } from 'react'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
)
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
)

// ─── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    faqs: [
      { question: 'Is PromptQuorum free?', answer: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.' },
      { question: 'How does privacy work?', answer: 'You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up.' },
      { question: 'Which AI providers are supported?', answer: 'Over 25 AI providers are included, and you can add your own custom providers. Connect to ChatGPT, Claude, Gemini, and many more.' },
      { question: 'What platforms does PromptQuorum run on?', answer: 'PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions.' },
      { question: 'What makes PromptQuorum different?', answer: 'PromptQuorum is highly automated for prompt improvements, can send the same prompt to multiple AIs simultaneously, and analyzes results based on your criteria.' },
      { question: 'Are there any limits?', answer: 'No limits from PromptQuorum side. Your usage is only limited by your API keys or local LLM resources.' },
    ],
    emailPlaceholder: 'Enter your email',
    joinBtn: 'Join Waitlist',
    joining: 'Joining...',
    successTitle: 'You\'re on the list!',
    successDesc: 'We\'ll notify you when we launch.',
    noSpam: 'No spam, just important updates.',
    errorMsg: 'Something went wrong. Please try again.',
  },
  de: {
    faqs: [
      { question: 'Ist PromptQuorum kostenlos?', answer: 'Ja. PromptQuorum ist kostenlos nutzbar. Sie können Ihren eigenen API-Schlüssel mitbringen, ein lokales LLM verwenden oder unseren kostenlosen Testdienst ausprobieren.' },
      { question: 'Wie funktioniert der Datenschutz?', answer: 'Sie entscheiden, wohin Ihre Daten gehen. Alles lokal halten mit LM Studio oder Ollama, oder Ihre eigenen API-Schlüssel verwenden. PromptQuorum ist so privat, wie Sie es einrichten.' },
      { question: 'Welche KI-Anbieter werden unterstützt?', answer: 'Über 25 KI-Anbieter sind enthalten, und Sie können Ihre eigenen hinzufügen. Verbinden Sie sich mit ChatGPT, Claude, Gemini und vielen mehr.' },
      { question: 'Auf welchen Plattformen läuft PromptQuorum?', answer: 'PromptQuorum beginnt mit Desktop-Apps (Mac, Windows), gefolgt von einer Webanwendung und schließlich mobilen Lösungen.' },
      { question: 'Was macht PromptQuorum besonders?', answer: 'PromptQuorum ist hochgradig automatisiert für Prompt-Verbesserungen, kann denselben Prompt gleichzeitig an mehrere KIs senden und Ergebnisse nach Ihren Kriterien analysieren.' },
      { question: 'Gibt es Limits?', answer: 'Keine Limits von PromptQuorum. Ihre Nutzung ist nur durch Ihre API-Schlüssel oder lokale LLM-Ressourcen begrenzt.' },
    ],
    emailPlaceholder: 'E-Mail eingeben',
    joinBtn: 'Warteliste beitreten',
    joining: 'Wird eingetragen…',
    successTitle: 'Sie sind auf der Liste!',
    successDesc: 'Wir benachrichtigen Sie beim Launch.',
    noSpam: 'Kein Spam, nur wichtige Updates.',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  },
  fr: {
    faqs: [
      { question: 'PromptQuorum est-il gratuit ?', answer: 'Oui. PromptQuorum est gratuit. Vous pouvez apporter votre propre clé API, utiliser un LLM local, ou essayer notre service backend gratuit limité.' },
      { question: 'Comment fonctionne la confidentialité ?', answer: 'Vous décidez où vont vos données. Gardez tout local avec LM Studio ou Ollama, ou utilisez vos propres clés API. PromptQuorum est aussi privé que vous le configurez.' },
      { question: 'Quels fournisseurs IA sont supportés ?', answer: 'Plus de 25 fournisseurs IA sont inclus, et vous pouvez ajouter les vôtres. Connectez-vous à ChatGPT, Claude, Gemini et bien plus.' },
      { question: 'Sur quelles plateformes fonctionne PromptQuorum ?', answer: 'PromptQuorum commence par des applications desktop (Mac, Windows), suivies d\'une application web, puis mobile.' },
      { question: 'Qu\'est-ce qui différencie PromptQuorum ?', answer: 'PromptQuorum est très automatisé pour améliorer les prompts, peut envoyer le même prompt à plusieurs IA simultanément et analyser les résultats selon vos critères.' },
      { question: 'Y a-t-il des limites ?', answer: 'Aucune limite de la part de PromptQuorum. Votre utilisation est uniquement limitée par vos clés API ou ressources LLM locales.' },
    ],
    emailPlaceholder: 'Entrez votre e-mail',
    joinBtn: 'Rejoindre la liste',
    joining: 'Inscription…',
    successTitle: 'Vous êtes sur la liste !',
    successDesc: 'Nous vous notifierons lors du lancement.',
    noSpam: 'Pas de spam, juste des mises à jour importantes.',
    errorMsg: 'Une erreur est survenue. Veuillez réessayer.',
  },
  ja: {
    faqs: [
      { question: 'PromptQuorumは無料ですか？', answer: 'はい、無料でご利用いただけます。独自のAPIキーを持ち込むか、ローカルLLMを使用するか、テスト用の無料バックエンドサービスをお試しください。' },
      { question: 'プライバシーはどう機能しますか？', answer: 'データの行き先はあなたが決めます。LM StudioやOllamaですべてローカルに保つか、独自のAPIキーを使用してください。PromptQuorumはあなたの設定通りにプライベートです。' },
      { question: 'どのAIプロバイダーがサポートされていますか？', answer: '25以上のAIプロバイダーが含まれており、独自のものも追加できます。ChatGPT・Claude・Geminiなどに接続可能です。' },
      { question: 'どのプラットフォームで動きますか？', answer: 'PromptQuorumはデスクトップアプリ（Mac・Windows）から始まり、ウェブアプリ、そしてモバイルソリューションへと展開します。' },
      { question: 'PromptQuorumの何が違うのですか？', answer: 'プロンプト改善の高度な自動化、複数のAIへの同時送信、そしてあなたの基準に基づく結果分析が特長です。' },
      { question: '利用制限はありますか？', answer: 'PromptQuorum側からの制限はありません。利用はAPIキーまたはローカルLLMのリソースにのみ依存します。' },
    ],
    emailPlaceholder: 'メールアドレスを入力',
    joinBtn: 'ウェイトリストに参加',
    joining: '登録中…',
    successTitle: 'リストに追加されました！',
    successDesc: 'ローンチ時にお知らせします。',
    noSpam: 'スパムなし、重要なアップデートのみ。',
    errorMsg: 'エラーが発生しました。もう一度お試しください。',
  },
  zh: {
    faqs: [
      { question: 'PromptQuorum 是免费的吗？', answer: '是的，PromptQuorum 免费使用。您可以自带 API 密钥、使用本地 LLM，或试用我们有限的免费后端服务。' },
      { question: '隐私如何保障？', answer: '您决定数据的去向。通过 LM Studio 或 Ollama 将所有内容保存在本地，或使用您自己的 API 密钥。PromptQuorum 的隐私程度由您自己设置决定。' },
      { question: '支持哪些 AI 提供商？', answer: '已包含 25+ 个 AI 提供商，您还可以添加自定义提供商。可连接 ChatGPT、Claude、Gemini 等众多服务。' },
      { question: 'PromptQuorum 支持哪些平台？', answer: 'PromptQuorum 从桌面应用（Mac、Windows）开始，随后推出网页应用，最终推出移动端解决方案。' },
      { question: 'PromptQuorum 有何独特之处？', answer: 'PromptQuorum 在提示词改进方面高度自动化，可同时将相同提示词发送给多个 AI，并根据您的标准分析结果。' },
      { question: '有使用限制吗？', answer: 'PromptQuorum 本身没有任何限制。您的使用量仅受 API 密钥或本地 LLM 资源限制。' },
    ],
    emailPlaceholder: '输入您的邮箱',
    joinBtn: '加入候补名单',
    joining: '提交中…',
    successTitle: '您已加入名单！',
    successDesc: '我们将在发布时通知您。',
    noSpam: '不发垃圾邮件，仅发送重要更新。',
    errorMsg: '出现错误，请重试。',
  },
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-medium text-text-primary">{question}</span>
        <span className={`text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown />
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-text-secondary">{answer}</p>
        </div>
      )}
    </div>
  )
}

function WaitlistForm({ lang }: { lang: Lang }) {
  const t = T[lang] ?? T.en
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const FORMSPREE_FORM_ID = 'xjgavzdw'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError(t.errorMsg)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center p-8 rounded-xl bg-primary/10 border border-primary/20 animate-fade-in">
        <div className="w-8 h-8 mx-auto text-primary"><CheckCircle /></div>
        <h3 className="text-xl font-semibold mt-4 text-text-primary">{t.successTitle}</h3>
        <p className="text-text-secondary mt-2">{t.successDesc}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.emailPlaceholder}
          required
          className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all-200 disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? t.joining : t.joinBtn}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      <p className="text-text-muted text-sm mt-3 text-center">{t.noSpam}</p>
    </form>
  )
}

export function LandingPageClient({
  isClientContent,
  isWaitlistForm,
  lang = 'en',
}: {
  isClientContent?: boolean
  isWaitlistForm?: boolean
  lang?: Lang
} = {}) {
  const t = T[lang] ?? T.en

  if (isClientContent) {
    return (
      <div className="space-y-4">
        {t.faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    )
  }

  if (isWaitlistForm) {
    return <WaitlistForm lang={lang} />
  }

  return (
    <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
      <WaitlistForm lang={lang} />
    </div>
  )
}
