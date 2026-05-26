'use client'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'
type Status = 'ok' | 'invalid' | 'error'

const COPY: Record<Lang, { ok: { title: string; body: string }; invalid: { title: string; body: string }; error: { title: string; body: string }; home: string }> = {
  en: {
    ok: { title: 'You have been unsubscribed', body: 'You will no longer receive emails from PromptQuorum. If you change your mind, you can sign up again anytime.' },
    invalid: { title: 'Invalid unsubscribe link', body: 'This unsubscribe link is invalid or expired. If you keep receiving emails you do not want, reply to one with the word "unsubscribe" and we will remove you manually.' },
    error: { title: 'Something went wrong', body: 'We could not complete your unsubscribe request. Please try again, or email hello@promptquorum.com and we will remove you manually.' },
    home: 'Back to PromptQuorum',
  },
  de: {
    ok: { title: 'Sie wurden abgemeldet', body: 'Sie erhalten keine weiteren E-Mails von PromptQuorum. Sie können sich jederzeit erneut anmelden.' },
    invalid: { title: 'Ungültiger Abmeldelink', body: 'Dieser Abmeldelink ist ungültig oder abgelaufen. Wenn Sie weiterhin unerwünschte E-Mails erhalten, antworten Sie auf eine davon mit dem Wort „abmelden" und wir entfernen Sie manuell.' },
    error: { title: 'Etwas ist schiefgelaufen', body: 'Wir konnten Ihre Abmeldung nicht abschließen. Bitte versuchen Sie es erneut oder schreiben Sie an hello@promptquorum.com.' },
    home: 'Zurück zu PromptQuorum',
  },
  fr: {
    ok: { title: 'Vous avez été désabonné', body: 'Vous ne recevrez plus d\'e-mails de PromptQuorum. Vous pouvez vous réinscrire à tout moment.' },
    invalid: { title: 'Lien de désabonnement invalide', body: 'Ce lien est invalide ou expiré. Si vous continuez à recevoir des e-mails non souhaités, répondez à l\'un d\'eux avec le mot « désabonner » et nous vous retirerons manuellement.' },
    error: { title: 'Une erreur s\'est produite', body: 'Nous n\'avons pas pu finaliser votre désabonnement. Veuillez réessayer ou écrire à hello@promptquorum.com.' },
    home: 'Retour à PromptQuorum',
  },
  ja: {
    ok: { title: '配信を停止しました', body: 'PromptQuorumからのメールは今後送信されません。再度登録したい場合はいつでも可能です。' },
    invalid: { title: '無効な配信停止リンク', body: 'このリンクは無効か期限切れです。引き続き不要なメールが届く場合は、メールに「unsubscribe」と返信してください。手動で削除いたします。' },
    error: { title: 'エラーが発生しました', body: '配信停止を完了できませんでした。再度お試しいただくか、hello@promptquorum.com までご連絡ください。' },
    home: 'PromptQuorumに戻る',
  },
  zh: {
    ok: { title: '您已取消订阅', body: '您将不再收到来自 PromptQuorum 的电子邮件。如果改变主意，您可以随时重新订阅。' },
    invalid: { title: '取消订阅链接无效', body: '此链接无效或已过期。如果您继续收到不需要的邮件，请回复任意一封并写明"取消订阅"，我们将手动为您移除。' },
    error: { title: '出现错误', body: '我们无法完成您的取消订阅请求。请重试，或发送邮件至 hello@promptquorum.com。' },
    home: '返回 PromptQuorum',
  },
}

export function UnsubscribedClient({ lang, status }: { lang: Lang; status: Status }) {
  const c = COPY[lang]
  const msg = c[status]
  const homeHref = lang === 'en' ? '/' : `/?lang=${lang}`

  return (
    <main id="main" className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-lg w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{msg.title}</h1>
        <p className="text-base text-gray-600 leading-relaxed">{msg.body}</p>
        <a
          href={homeHref}
          className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
        >
          {c.home}
        </a>
      </div>
    </main>
  )
}
