/**
 * Wraps Latin/digit runs in FSI…PDI (U+2068…U+2069) so they render
 * correctly as isolated LTR segments inside RTL Arabic text.
 *
 * FSI (First Strong Isolate) + PDI (Pop Directional Isolate) is the
 * correct Unicode primitive for this — renderer-neutral and does not
 * break SERP snippet rendering the way raw LRM/RLM can.
 *
 * Applied only to plain-text snippet fields (title, seoTitle,
 * metaDescription, twitterDescription) in the ar: locale block.
 */

// U+2068 FIRST STRONG ISOLATE, U+2069 POP DIRECTIONAL ISOLATE
export const FSI = '⁨'
export const PDI = '⁩'

/**
 * Matches runs of Latin letters, digits, and connector chars
 * (hyphens, dots, slashes, %, +, space) that start AND end with a
 * Latin letter, digit, or % — so trailing spaces are never captured.
 *
 * Tested against: Qwen3 14B  /  DeepSeek-R1-32B  /  Phi-4-mini  /
 *   83% MMLU  /  9 GB RAM  /  2026  /  RTX 4090  /  LLM  /  API
 */
const LTR_RUN = /([A-Za-z0-9][A-Za-z0-9.\-/%+ ]*[A-Za-z0-9%]|[A-Za-z0-9])/g

export function isolateLTR(s) {
  if (!s) return s
  if (s.includes(FSI)) return s  // already processed — skip to avoid double-wrap
  return s.replace(LTR_RUN, m => FSI + m + PDI)
}

/** Verifies isolateLTR against known examples — prints mismatches */
export function selfTest() {
  const cases = [
    [
      'أفضل نماذج LLM المحلية يونيو 2026: Qwen3 14B، DeepSeek-R1-32B، Phi-4-mini',
      `أفضل نماذج ${FSI}LLM${PDI} المحلية يونيو ${FSI}2026${PDI}: ${FSI}Qwen3 14B${PDI}، ${FSI}DeepSeek-R1-32B${PDI}، ${FSI}Phi-4-mini${PDI}`,
    ],
    [
      'أفضل نماذج LLM المحلية يونيو 2026: Qwen3 14B يفوز عموماً (83% MMLU، 9 GB RAM). DeepSeek-R1-32B للاستدلال.',
      `أفضل نماذج ${FSI}LLM${PDI} المحلية يونيو ${FSI}2026${PDI}: ${FSI}Qwen3 14B${PDI} يفوز عموماً (${FSI}83% MMLU${PDI}، ${FSI}9 GB RAM${PDI}). ${FSI}DeepSeek-R1-32B${PDI} للاستدلال.`,
    ],
    ['نص عربي فقط', 'نص عربي فقط'],
    ['RTX 4090', `${FSI}RTX 4090${PDI}`],
    [`${FSI}LLM${PDI}`, `${FSI}LLM${PDI}`],
  ]
  let pass = 0, fail = 0
  for (const [input, expected] of cases) {
    const got = isolateLTR(input)
    if (got === expected) {
      pass++
    } else {
      console.error('FAIL:', JSON.stringify(input))
      console.error('  expected:', JSON.stringify(expected))
      console.error('  got:     ', JSON.stringify(got))
      fail++
    }
  }
  console.log(`isolate-ltr self-test: ${pass} pass, ${fail} fail`)
  return fail === 0
}
