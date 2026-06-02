import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'
import { makeToken } from '@/lib/token'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt'

const EMAIL_CONTENT: Record<Lang, {
  subject: string
  headline: string
  body: string
  benefit: string
  cta: string
  ignore: string
  expires: string
  unsubscribe: string
}> = {
  en: {
    subject: 'Please confirm your PromptQuorum waitlist spot',
    headline: 'One last step',
    body: 'Confirm your email to secure your spot on the waitlist.\nEarly access means priority onboarding, direct access to the developer,',
    benefit: 'and a free power tool.',
    cta: 'Confirm my spot',
    ignore: "If you didn't sign up for PromptQuorum, you can safely ignore this email.",
    expires: 'This link expires in 7 days.',
    unsubscribe: 'Unsubscribe',
  },
  es: {
    subject: 'Confirma tu lugar en la lista de espera de PromptQuorum',
    headline: 'Un último paso',
    body: 'Confirma tu correo para asegurar tu lugar en la lista de espera.\nEl acceso anticipado incluye incorporación prioritaria, acceso directo al desarrollador,',
    benefit: 'y una herramienta gratuita.',
    cta: 'Confirmar mi lugar',
    ignore: 'Si no te registraste en PromptQuorum, puedes ignorar este correo.',
    expires: 'Este enlace caduca en 7 días.',
    unsubscribe: 'Cancelar suscripción',
  },
  pt: {
    subject: 'Confirme seu lugar na lista de espera do PromptQuorum',
    headline: 'Último passo',
    body: 'Confirme seu e-mail para garantir seu lugar na lista de espera.\nO acesso antecipado inclui integração prioritária, acesso direto ao desenvolvedor,',
    benefit: 'e uma ferramenta gratuita.',
    cta: 'Confirmar meu lugar',
    ignore: 'Se você não se cadastrou no PromptQuorum, pode ignorar este e-mail com segurança.',
    expires: 'Este link expira em 7 dias.',
    unsubscribe: 'Cancelar inscrição',
  },
  de: {
    subject: 'Bitte bestätigen Sie Ihren PromptQuorum-Wartelistenplatz',
    headline: 'Noch ein letzter Schritt',
    body: 'Bestätigen Sie Ihre E-Mail-Adresse, um Ihren Platz auf der Warteliste zu sichern.\nFrühzeitiger Zugang bedeutet bevorzugtes Onboarding, direkter Kontakt zum Entwickler,',
    benefit: 'und ein kostenloses Power-Tool.',
    cta: 'Meinen Platz bestätigen',
    ignore: 'Falls Sie sich nicht bei PromptQuorum angemeldet haben, können Sie diese E-Mail ignorieren.',
    expires: 'Dieser Link läuft in 7 Tagen ab.',
    unsubscribe: 'Abmelden',
  },
  fr: {
    subject: 'Veuillez confirmer votre place sur la liste d\'attente PromptQuorum',
    headline: 'Une dernière étape',
    body: 'Confirmez votre adresse e-mail pour sécuriser votre place sur la liste d\'attente.\nL\'accès anticipé signifie un onboarding prioritaire, un accès direct au développeur,',
    benefit: 'et un outil puissant offert.',
    cta: 'Confirmer ma place',
    ignore: 'Si vous ne vous êtes pas inscrit à PromptQuorum, vous pouvez ignorer cet e-mail.',
    expires: 'Ce lien expire dans 7 jours.',
    unsubscribe: 'Se désabonner',
  },
  ja: {
    subject: 'PromptQuorumのウェイトリスト登録を確認してください',
    headline: '最後のステップ',
    body: 'メールアドレスを確認して、ウェイトリストの席を確保してください。\n早期アクセスには、優先オンボーディング、開発者への直接アクセス、',
    benefit: 'そして無料のパワーツールが含まれます。',
    cta: '席を確認する',
    ignore: 'PromptQuorumに登録していない場合は、このメールを無視してください。',
    expires: 'このリンクは7日後に期限切れになります。',
    unsubscribe: '配信停止',
  },
  zh: {
    subject: '请确认您的 PromptQuorum 候补名单席位',
    headline: '最后一步',
    body: '请确认您的电子邮件地址以锁定候补名单席位。\n早期访问包括优先入职辅导、与开发者的直接联系，',
    benefit: '以及一个免费的强大工具。',
    cta: '确认我的席位',
    ignore: '如果您没有注册 PromptQuorum，请忽略此邮件。',
    expires: '此链接将在 7 天后过期。',
    unsubscribe: '取消订阅',
  },
}

const ipLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '1 h'),
  prefix: 'rl:waitlist:ip',
})

const emailLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '1 h'),
  prefix: 'rl:waitlist:email',
})

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  // IP rate limit: 10 req/hour
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1'
  const ipResult = await ipLimiter.limit(ip)
  if (!ipResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': '3600' } }
    )
  }

  try {
    const body = await req.json()
    const email: string = (body.email ?? '').toLowerCase().trim()
    const consent: boolean = body.consent === true
    const lang: Lang = (['en','de','fr','ja','zh','es','pt'].includes(body.lang) ? body.lang : 'en') as Lang
    const c = EMAIL_CONTENT[lang]

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }
    if (!consent) {
      return NextResponse.json({ error: 'Consent required.' }, { status: 400 })
    }

    // Per-email rate limit: 3 req/hour
    const emailResult = await emailLimiter.limit(email)
    if (!emailResult.success) {
      return NextResponse.json(
        { error: 'Too many requests for this email. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '3600' } }
      )
    }

    // Add to Resend Audience — unsubscribed until they confirm (double opt-in)
    const contactResult = await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      email,
      unsubscribed: true,
    })
    if (contactResult.error) {
      console.error('[waitlist] contacts.create error:', contactResult.error)
      return NextResponse.json(
        { error: 'Could not register email. Please try again.' },
        { status: 500 }
      )
    }

    // Build confirmation + unsubscribe links
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.promptquorum.com'
    const confirmToken = makeToken(email, 'confirm')
    const unsubToken = makeToken(email, 'unsub')
    const confirmUrl = `${base}/api/confirm?email=${encodeURIComponent(email)}&token=${confirmToken}`
    const unsubUrl = `${base}/api/unsubscribe?email=${encodeURIComponent(email)}&token=${unsubToken}&lang=${lang}`

    // Send double opt-in confirmation email in user's language
    await resend.emails.send({
      from: 'PromptQuorum <noreply@promptquorum.com>',
      to: email,
      subject: c.subject,
      headers: {
        'List-Unsubscribe': `<mailto:hello@promptquorum.com?subject=unsubscribe>, <${unsubUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
      html: `<!DOCTYPE html>
<html lang="${lang}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F4EFF4;font-family:'Plus Jakarta Sans',Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4EFF4;padding:40px 16px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#1C1B1F;border-radius:16px;overflow:hidden;max-width:560px;width:100%">
        <tr>
          <td style="padding:40px 40px 32px;text-align:center">
            <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#938F99">PromptQuorum</p>
            <h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#E6E1E5;line-height:1.3">${c.headline}</h1>
            <p style="margin:0 0 32px;font-size:15px;color:#CAC4D0;line-height:1.6">
              ${c.body.replace('\n', '<br>')}<br>
              <strong style="color:#D0BCFF">${c.benefit}</strong>
            </p>
            <a href="${confirmUrl}"
               style="display:inline-block;padding:14px 32px;background:#6750A4;color:#FFFFFF;text-decoration:none;border-radius:100px;font-size:15px;font-weight:600;letter-spacing:0.01em">
              ${c.cta}
            </a>
            <p style="margin:32px 0 0;font-size:12px;color:#49454F;line-height:1.5">
              ${c.ignore}<br>${c.expires}
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #2B2930;text-align:center">
            <p style="margin:0;font-size:11px;color:#49454F;line-height:1.6">
              PromptQuorum &middot; <a href="${base}/privacy" style="color:#938F99;text-decoration:underline">Privacy Policy</a> &middot; <a href="${unsubUrl}" style="color:#938F99;text-decoration:underline">${c.unsubscribe}</a><br>
              You are receiving this because you signed up at promptquorum.com
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[waitlist]', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
