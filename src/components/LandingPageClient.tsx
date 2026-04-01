'use client'

import { useState } from 'react'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
)
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
)

// ─── Waitlist form translations ────────────────────────────────────────────────
const W = {
  en: {
    emailPlaceholder: 'Your email address',
    joinBtn: 'Join Waitlist',
    joining: 'Sending…',
    consentText: 'I agree to receive beta launch announcements and product updates from PromptQuorum.',
    privacyLink: 'Privacy Policy',
    consentRequired: 'Please tick the box to continue.',
    confirmTitle: 'Check your inbox',
    confirmDesc: (email: string) => `We sent a confirmation link to ${email}. Click it to complete your signup.`,
    confirmNote: 'You can unsubscribe at any time — every email includes an unsubscribe link.',
    noSpam: 'No spam. Unsubscribe anytime.',
    errorMsg: 'Something went wrong. Please try again.',
  },
  de: {
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    joinBtn: 'Warteliste beitreten',
    joining: 'Wird gesendet…',
    consentText: 'Ich stimme zu, Beta-Launch-Ankündigungen und Produkt-Updates von PromptQuorum zu erhalten.',
    privacyLink: 'Datenschutzrichtlinie',
    consentRequired: 'Bitte bestätigen Sie die Einwilligung, um fortzufahren.',
    confirmTitle: 'Prüfen Sie Ihren Posteingang',
    confirmDesc: (email: string) => `Wir haben einen Bestätigungslink an ${email} gesendet. Klicken Sie darauf, um Ihre Anmeldung abzuschließen.`,
    confirmNote: 'Sie können sich jederzeit abmelden — jede E-Mail enthält einen Abmeldelink.',
    noSpam: 'Kein Spam. Jederzeit abmeldbar.',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  },
  fr: {
    emailPlaceholder: 'Votre adresse e-mail',
    joinBtn: 'Rejoindre la liste',
    joining: 'Envoi en cours…',
    consentText: "J'accepte de recevoir les annonces de lancement bêta et les mises à jour produit de PromptQuorum.",
    privacyLink: 'Politique de confidentialité',
    consentRequired: 'Veuillez cocher la case pour continuer.',
    confirmTitle: 'Vérifiez votre boîte mail',
    confirmDesc: (email: string) => `Nous avons envoyé un lien de confirmation à ${email}. Cliquez dessus pour finaliser votre inscription.`,
    confirmNote: 'Vous pouvez vous désabonner à tout moment — chaque e-mail contient un lien de désabonnement.',
    noSpam: 'Pas de spam. Désabonnement à tout moment.',
    errorMsg: 'Une erreur est survenue. Veuillez réessayer.',
  },
  ja: {
    emailPlaceholder: 'メールアドレスを入力',
    joinBtn: 'ウェイトリストに参加',
    joining: '送信中…',
    consentText: 'PromptQuorumのベータ版ローンチのお知らせと製品アップデートの受信に同意します。',
    privacyLink: 'プライバシーポリシー',
    consentRequired: '続行するにはチェックボックスにチェックを入れてください。',
    confirmTitle: '受信トレイをご確認ください',
    confirmDesc: (email: string) => `${email} に確認リンクを送信しました。クリックして登録を完了してください。`,
    confirmNote: 'いつでも登録解除できます。メールには必ず登録解除リンクが含まれます。',
    noSpam: 'スパムなし。いつでも登録解除可能。',
    errorMsg: 'エラーが発生しました。もう一度お試しください。',
  },
  zh: {
    emailPlaceholder: '请输入您的邮箱地址',
    joinBtn: '加入候补名单',
    joining: '提交中…',
    consentText: '我同意接收 PromptQuorum 的测试版发布公告和产品更新。',
    privacyLink: '隐私政策',
    consentRequired: '请勾选同意框以继续。',
    confirmTitle: '请检查您的收件箱',
    confirmDesc: (email: string) => `我们已向 ${email} 发送了确认链接，请点击以完成注册。`,
    confirmNote: '您可以随时退订——每封邮件都包含退订链接。',
    noSpam: '不发垃圾邮件，随时可退订。',
    errorMsg: '出现错误，请重试。',
  },
}

// ─── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    emailPlaceholder: 'Enter your email',
    joinBtn: 'Join Waitlist',
    joining: 'Joining...',
    successTitle: 'You\'re on the list!',
    successDesc: 'We\'ll notify you when we launch.',
    noSpam: 'No spam, just important updates.',
    errorMsg: 'Something went wrong. Please try again.',
  },
  de: {
    emailPlaceholder: 'E-Mail eingeben',
    joinBtn: 'Warteliste beitreten',
    joining: 'Wird eingetragen…',
    successTitle: 'Sie sind auf der Liste!',
    successDesc: 'Wir benachrichtigen Sie beim Launch.',
    noSpam: 'Kein Spam, nur wichtige Updates.',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  },
  fr: {
    emailPlaceholder: 'Entrez votre e-mail',
    joinBtn: 'Rejoindre la liste',
    joining: 'Inscription…',
    successTitle: 'Vous êtes sur la liste !',
    successDesc: 'Nous vous notifierons lors du lancement.',
    noSpam: 'Pas de spam, juste des mises à jour importantes.',
    errorMsg: 'Une erreur est survenue. Veuillez réessayer.',
  },
  ja: {
    emailPlaceholder: 'メールアドレスを入力',
    joinBtn: 'ウェイトリストに参加',
    joining: '登録中…',
    successTitle: 'リストに追加されました！',
    successDesc: 'ローンチ時にお知らせします。',
    noSpam: 'スパムなし、重要なアップデートのみ。',
    errorMsg: 'エラーが発生しました。もう一度お試しください。',
  },
  zh: {
    emailPlaceholder: '输入您的邮箱',
    joinBtn: '加入候补名单',
    joining: '提交中…',
    successTitle: '您已加入名单！',
    successDesc: '我们将在发布时通知您。',
    noSpam: '不发垃圾邮件，仅发送重要更新。',
    errorMsg: '出现错误，请重试。',
  },
}

function WaitlistForm({ lang }: { lang: Lang }) {
  const w = W[lang] ?? W.en
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'confirming' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      setConsentError(true)
      return
    }
    setConsentError(false)
    setStatus('loading')
    setErrorMsg('')
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent: true, lang }),
      })
      if (!response.ok) throw new Error('Failed to submit')
      setStatus('confirming')
    } catch {
      setErrorMsg(w.errorMsg)
      setStatus('error')
    }
  }

  if (status === 'confirming') {
    return (
      <div
        className="w-full max-w-md mx-auto rounded-2xl p-8 text-center animate-fade-in"
        style={{ background: '#1C1B1F' }}
      >
        <div className="w-10 h-10 mx-auto mb-4" style={{ color: '#6750A4' }}>
          <CheckCircle />
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
          {w.confirmTitle}
        </h3>
        <p className="text-sm mb-4" style={{ color: '#CAC4D0' }}>
          {w.confirmDesc(email)}
        </p>
        <p className="text-xs" style={{ color: '#938F99' }}>
          {w.confirmNote}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto rounded-2xl p-6"
      style={{ background: '#1C1B1F' }}
    >
      {/* Email input */}
      <div className="flex flex-col gap-3 mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={w.emailPlaceholder}
          required
          className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2"
          style={{
            background: '#2B2930',
            border: '1px solid #49454F',
            color: '#E6E1E5',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-5 py-3 rounded-lg text-sm font-semibold disabled:opacity-50 transition-opacity"
          style={{
            background: '#6750A4',
            color: '#FFFFFF',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          {status === 'loading' ? w.joining : w.joinBtn}
        </button>
      </div>

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <span
          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded flex items-center justify-center transition-colors"
          style={{
            border: consentError ? '2px solid #CF6679' : '2px solid #6750A4',
            background: consent ? '#6750A4' : 'transparent',
          }}
        >
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              if (e.target.checked) setConsentError(false)
            }}
            className="sr-only"
          />
          {consent && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="text-xs leading-relaxed" style={{ color: '#CAC4D0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          {w.consentText}{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: '#D0BCFF' }}
          >
            {w.privacyLink}
          </a>
        </span>
      </label>

      {/* Consent validation error */}
      {consentError && (
        <p className="mt-2 text-xs" style={{ color: '#CF6679' }}>
          {w.consentRequired}
        </p>
      )}

      {/* Submission error */}
      {status === 'error' && (
        <p className="mt-3 text-xs text-center" style={{ color: '#CF6679' }}>
          {errorMsg}
        </p>
      )}

      {/* No-spam note */}
      <p className="mt-4 text-xs text-center" style={{ color: '#938F99' }}>
        {w.noSpam}
      </p>
    </form>
  )
}

export function LandingPageClient({
  isWaitlistForm,
  lang = 'en',
}: {
  isWaitlistForm?: boolean
  lang?: Lang
} = {}) {
  const t = T[lang] ?? T.en

  if (isWaitlistForm) {
    return <WaitlistForm lang={lang} />
  }

  return (
    <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
      <WaitlistForm lang={lang} />
    </div>
  )
}
