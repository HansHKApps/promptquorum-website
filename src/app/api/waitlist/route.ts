import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createHmac } from 'crypto'

function makeToken(email: string): string {
  return createHmac('sha256', process.env.RESEND_API_KEY!)
    .update(email.toLowerCase().trim())
    .digest('hex')
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const email: string = (body.email ?? '').toLowerCase().trim()
    const consent: boolean = body.consent === true

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }
    if (!consent) {
      return NextResponse.json({ error: 'Consent required.' }, { status: 400 })
    }

    // Add to Resend Audience — unsubscribed until they confirm (double opt-in)
    const contactResult = await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      email,
      unsubscribed: true,
    })
    if (contactResult.error) {
      console.error('[waitlist] contacts.create error:', contactResult.error)
    }

    // Build confirmation link
    const token = makeToken(email)
    const confirmUrl = `${process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.promptquorum.com'}/api/confirm?email=${encodeURIComponent(email)}&token=${token}`

    // Send double opt-in confirmation email
    await resend.emails.send({
      from: 'PromptQuorum <noreply@promptquorum.com>',
      to: email,
      subject: 'Please confirm your PromptQuorum waitlist spot',
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F4EFF4;font-family:'Plus Jakarta Sans',Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4EFF4;padding:40px 16px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#1C1B1F;border-radius:16px;overflow:hidden;max-width:560px;width:100%">
        <tr>
          <td style="padding:40px 40px 32px;text-align:center">
            <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#938F99">PromptQuorum</p>
            <h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#E6E1E5;line-height:1.3">One last step</h1>
            <p style="margin:0 0 32px;font-size:15px;color:#CAC4D0;line-height:1.6">
              Confirm your email to secure your spot on the waitlist.<br>
              Early access means priority onboarding, direct access to the developer,<br>
              and a <strong style="color:#D0BCFF">free power tool</strong>.
            </p>
            <a href="${confirmUrl}"
               style="display:inline-block;padding:14px 32px;background:#6750A4;color:#FFFFFF;text-decoration:none;border-radius:100px;font-size:15px;font-weight:600;letter-spacing:0.01em">
              Confirm my spot
            </a>
            <p style="margin:32px 0 0;font-size:12px;color:#49454F;line-height:1.5">
              If you didn&rsquo;t sign up for PromptQuorum, you can safely ignore this email.<br>
              This link expires in 7 days.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #2B2930;text-align:center">
            <p style="margin:0;font-size:11px;color:#49454F">
              PromptQuorum &middot; <a href="https://www.promptquorum.com/privacy" style="color:#938F99;text-decoration:underline">Privacy Policy</a> &middot; You are receiving this because you signed up at promptquorum.com
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
