import { createHmac, timingSafeEqual } from 'crypto'

export type TokenPurpose = 'confirm' | 'unsub'

export function makeToken(email: string, purpose: TokenPurpose = 'confirm'): string {
  return createHmac('sha256', process.env.TOKEN_SECRET!)
    .update(`${email.toLowerCase().trim()}:${purpose}`)
    .digest('hex')
}

export function verifyToken(email: string, token: string, purpose: TokenPurpose = 'confirm'): boolean {
  try {
    const expected = Buffer.from(makeToken(email, purpose), 'hex')
    const provided = Buffer.from(token, 'hex')
    if (expected.length !== provided.length) return false
    return timingSafeEqual(expected, provided)
  } catch {
    return false
  }
}
