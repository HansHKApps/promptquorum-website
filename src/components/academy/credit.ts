// PromptQuorum Academy — label for the credit a written answer earned (0, 0.5 or 1).
import type { AcademyCopy } from './copy'

export function creditLabel(tx: AcademyCopy, credit: number): string {
  return credit >= 1 ? tx.creditFull : credit > 0 ? tx.creditPartial : tx.creditNone
}
