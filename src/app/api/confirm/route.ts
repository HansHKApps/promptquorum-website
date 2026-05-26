import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { verifyToken } from '@/lib/token'

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.promptquorum.com'

export async function GET(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { searchParams } = req.nextUrl
  const email = (searchParams.get('email') ?? '').toLowerCase().trim()
  const token = searchParams.get('token') ?? ''

  if (!email || !token || !verifyToken(email, token, 'confirm')) {
    return NextResponse.redirect(`${BASE}/?confirmed=invalid`)
  }

  try {
    await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      email,
      unsubscribed: false,
    })

    return NextResponse.redirect(`${BASE}/?confirmed=true`)
  } catch (err) {
    console.error('[confirm]', err)
    return NextResponse.redirect(`${BASE}/?confirmed=error`)
  }
}
