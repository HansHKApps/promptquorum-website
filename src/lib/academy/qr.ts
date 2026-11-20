// PromptQuorum Academy — QR code matrix for the certificate (SPEC 12.6). Generated in the browser with the vendored
// qrcode-generator (MIT). Error correction M; version chosen automatically.

import qrcode from './vendor/qrcode.js'

export function qrMatrix(text: string): boolean[][] {
  const q = qrcode(0, 'M')
  q.addData(text)
  q.make()
  const n = q.getModuleCount()
  return Array.from({ length: n }, (_, r) => Array.from({ length: n }, (_, c) => q.isDark(r, c)))
}

/** The address the QR code and the printed link point to. */
export function verifyUrl(id: string): string {
  return `https://www.promptquorum.com/academy/verify/${id}`
}
