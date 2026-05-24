import { createHmac } from 'crypto'

export function makeToken(email: string): string {
  return createHmac('sha256', process.env.TOKEN_SECRET!)
    .update(email.toLowerCase().trim())
    .digest('hex')
}
