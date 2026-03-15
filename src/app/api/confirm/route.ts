import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createHmac, timingSafeEqual } from 'crypto'

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.promptquorum.com'

function makeToken(email: string): string {
  return createHmac('sha256', process.env.RESEND_API_KEY!)
    .update(email.toLowerCase().trim())
    .digest('hex')
}

function safeCompare(a: string, b: string): boolean {
  try {
    const ab = Buffer.from(a, 'hex')
    const bb = Buffer.from(b, 'hex')
    if (ab.length !== bb.length) return false
    return timingSafeEqual(ab, bb)
  } catch {
    return false
  }
}

export async function GET(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { searchParams } = req.nextUrl
  const email = (searchParams.get('email') ?? '').toLowerCase().trim()
  const token = searchParams.get('token') ?? ''

  if (!email || !token) {
    return NextResponse.redirect(`${BASE}/?confirmed=invalid`)
  }

  const expected = makeToken(email)
  if (!safeCompare(token, expected)) {
    return NextResponse.redirect(`${BASE}/?confirmed=invalid`)
  }

  try {
    // Look up the contact to get their Resend contact ID
    const list = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_ID! })
    const contact = list.data?.data?.find(
      (c: { email: string }) => c.email.toLowerCase() === email
    )

    if (contact) {
      await resend.contacts.update({
        audienceId: process.env.RESEND_AUDIENCE_ID!,
        id: contact.id,
        unsubscribed: false,
      })
    }

    return NextResponse.redirect(`${BASE}/?confirmed=true`)
  } catch (err) {
    console.error('[confirm]', err)
    return NextResponse.redirect(`${BASE}/?confirmed=error`)
  }
}
