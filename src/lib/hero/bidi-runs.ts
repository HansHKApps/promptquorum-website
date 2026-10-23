// Splits an RTL (Arabic) poster line into runs so Satori, which has only
// limited bidi support, can lay each run out on its own: RTL runs are one
// flex item per word, LTR runs (Latin words / numbers / ranges such as
// "Qwen3 1.7B", "4 GB", "~25–40 tok/s") are one intact left-to-right item.
// The caller renders the runs in a flex row-reverse in logical order.

export type BidiRun = { text: string; dir: 'rtl' | 'ltr' }

const ARABIC = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/
const LTR_CHAR = /[A-Za-z0-9]/
// Sentence punctuation at the logical end of a Latin word belongs to the RTL
// flow (it sits visually left of the word), so it is peeled off the LTR run.
const TRAILING_PUNCT = /[:;,.!?،؛؟]+$/

type Kind = 'rtl' | 'ltr' | 'neutral'

function kindOf(word: string): Kind {
  if (ARABIC.test(word)) return 'rtl'
  if (LTR_CHAR.test(word)) return 'ltr'
  return 'neutral'
}

export function splitBidiRuns(line: string): BidiRun[] {
  const words = line.split(/\s+/).filter(Boolean)
  const kinds = words.map(kindOf)
  const runs: BidiRun[] = []
  let ltr: string[] = []
  const flush = () => {
    if (ltr.length) runs.push({ text: ltr.join(' '), dir: 'ltr' })
    ltr = []
  }
  words.forEach((word, i) => {
    let kind = kinds[i]
    // A bare symbol ("~", "–", "×") between/before Latin words stays inside the Latin run.
    if (kind === 'neutral' && (ltr.length > 0 || kinds[i + 1] === 'ltr') && kinds[i + 1] === 'ltr') kind = 'ltr'
    if (kind !== 'ltr') {
      flush()
      runs.push({ text: word, dir: 'rtl' })
      return
    }
    const m = word.match(TRAILING_PUNCT)
    if (m && m.index! > 0) {
      ltr.push(word.slice(0, m.index))
      flush()
      runs.push({ text: m[0], dir: 'rtl' })
    } else {
      ltr.push(word)
    }
  })
  flush()
  return runs
}
