#!/usr/bin/env node
/**
 * ar-lint.mjs — Validates ar: blocks in prompt-bites articles for untranslated prose.
 *
 * HIGH severity: a quoted string of ≥5 words with no Arabic Unicode characters
 * found inside an ar: block (after allowing known technical identifiers).
 *
 * Usage:  node scripts/ar-lint.mjs src/lib/prompt-bites/articles
 * Exits:  0 = clean, 1 = HIGH findings present
 */

import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ARABIC_RE = /[؀-ۿݐ-ݿ]/

/**
 * Returns true when a string contains no translatable prose —
 * i.e. it's just technical identifiers, numbers, URLs, or code.
 */
function isTechnicalOnly(str) {
  if (/^https?:\/\//.test(str)) return true            // URL
  if (/^\/[a-z]/.test(str)) return true                // path
  if (/^\d{4}-\d{2}(-\d{2})?$/.test(str)) return true // ISO date

  const cleaned = str
    // strip known untranslated brand/model names
    .replace(/\b(Llama|Qwen|Mistral|DeepSeek|Claude|GPT|Ollama|LM Studio|Jan AI|PromptQuorum|Open WebUI|MLX|GGUF|CUDA|Vulkan|ROCm|OpenCL|llama\.cpp|llamacpp|Homebrew|Docker|Podman|Raspberry Pi|macOS|Windows|Linux|Ubuntu|Debian|Fedora|Apple|Intel|AMD|NVIDIA|RTX|GTX|RX|Radeon|GeForce|M[1-9]|Wi-Fi|USB|PCIe|NVMe|SSD|HDD|API|JSON|CLI|GUI|HTML|CSS|TypeScript|JavaScript|Python|npm|git|bash|curl|wget|sudo|apt|brew|conda|Ollama|SillyTavern|Continue|Cursor|JetBrains|VSCode)\b/gi, ' ')
    // strip quantizations and sizes
    .replace(/\bQ[458]_K_[MSL]|Q[48]_0|F16|BF16|INT[48]|AWQ|GPTQ|EXL2\b/g, ' ')
    .replace(/\b\d+(\.\d+)?\s*(GB|MB|TB|KB|VRAM|RAM|GHz|MHz|Gbps|tok\/s|ms|min|sec|hr|B|K|M)\b/gi, ' ')
    // strip param-counts like 7B, 70B, 14B
    .replace(/\b\d+(B|K|M|G|T)\b/g, ' ')
    // strip remaining punctuation / numbers
    .replace(/[0-9\s\-.,+%$€£¥¥:\/\\.()'"\[\]{}@#!_x×+<>=|~`^&*;]/g, ' ')
    .trim()

  return cleaned.length < 4
}

const dir = process.argv[2] || 'src/lib/prompt-bites/articles'
const files = readdirSync(dir).filter(f => f.endsWith('.ts')).sort()

const HIGH = []
let checked = 0

for (const file of files) {
  const path = join(dir, file)
  const src = readFileSync(path, 'utf8')

  // Only lint files that already have an ar: block
  if (!src.includes('\n  ar:')) continue
  checked++

  // Extract the ar: block (from "\n  ar:" to the next top-level locale key or end)
  const arIdx = src.indexOf('\n  ar:')
  const after = src.slice(arIdx + 1)
  const nextLocale = after.match(/\n  [a-z]{2}:/)
  const arBlock = nextLocale ? after.slice(0, nextLocale.index) : after.slice(0, 40000)

  // 1. Title must contain Arabic
  const titleM = arBlock.match(/^\s{4}title:\s*['"]([^'"]+)['"]/m)
  if (titleM && !ARABIC_RE.test(titleM[1])) {
    HIGH.push({ file, field: 'title', snippet: titleM[1].slice(0, 100) })
    continue
  }

  // 2. Scan all quoted strings ≥30 chars for Latin-prose leaks
  const stringRe = /'([^'\\\n]{30,})'|"([^"\\\n]{30,})"/g
  let m
  while ((m = stringRe.exec(arBlock)) !== null) {
    const str = (m[1] ?? m[2]).trim()

    if (ARABIC_RE.test(str)) continue        // has Arabic — fine
    if (isTechnicalOnly(str)) continue        // pure tech — fine

    const wordCount = str.split(/\s+/).filter(w => w.length > 1).length
    if (wordCount >= 5) {
      HIGH.push({ file, field: '(prose)', snippet: str.slice(0, 120) })
      break  // one finding per file is enough
    }
  }
}

if (HIGH.length > 0) {
  console.error(`\n❌ AR-LINT FAILED — ${HIGH.length} HIGH finding(s)\n`)
  for (const f of HIGH) {
    console.error(`  [HIGH] ${f.file}`)
    console.error(`         field: ${f.field}`)
    console.error(`         "${f.snippet}"\n`)
  }
  process.exit(1)
} else {
  console.log(`✅ AR-LINT PASSED — ${checked} ar: block(s) checked, 0 HIGH findings`)
  process.exit(0)
}
