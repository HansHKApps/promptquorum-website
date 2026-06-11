#!/usr/bin/env node
/**
 * ko-lint.mjs — Validates ko: blocks in articles for untranslated prose.
 *
 * HIGH severity:
 *   1. A prose field in a ko: block contains NO Hangul characters (≥5 cleaned non-technical
 *      words remain after stripping brand/model/tech terms) — signals English/untranslated copy.
 *   2. A prose field contains Spanish function words with no Hangul — signals an es: block copy.
 *
 * Exclusions (same spirit as ar-lint): slug, theme, anchor, codeBlock, CLI strings, model/tool
 *   names, quant tags, paths, URLs, dates — Latin-script technical identifiers are expected.
 *
 * Usage:  node scripts/ko-lint.mjs src/lib/local-llms/articles
 * Exits:  0 = clean, 1 = HIGH findings present
 */

import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

// Hangul syllables + Jamo blocks
const HANGUL_RE = /[가-힣ᄀ-ᇿ㄰-㆏]/

// Common Spanish function words (whole-word match) — signals a copy-paste from the es: block
const SPANISH_LEAK_RE = /\b(para|con\b|los\b|las\b|una\b|que\b|desde|por\b|del\b|esto|esta\b|este\b|como\b|pero\b|más\b|sin\b|sobre\b|entre\b|cuando\b|también\b|está\b|son\b|hay\b|este\b|eso\b|esa\b|sus\b|ser\b|han\b|tiene\b|hacer\b|puede\b|solo\b|muy\b|así\b)\b/i

/**
 * Returns the number of non-technical words remaining after stripping brand names,
 * hardware specs, punctuation, and other known technical identifiers.
 * Returns 0 for strings that are purely technical (URLs, paths, ISO dates, etc.).
 * The caller fires HIGH when this returns >= 5.
 */
function cleanedWordCount(str) {
  if (/^https?:\/\//.test(str)) return 0            // URL
  if (/^\/[a-z]/.test(str)) return 0                // path
  if (/^\d{4}-\d{2}(-\d{2})?$/.test(str)) return 0 // ISO date
  if (str.includes('](http')) return 0              // markdown link
  if (/^[$#!@\[{]/.test(str)) return 0             // code/markup token start
  if (/\bet al\b|\barXiv:\d+|\(\d{4}\)/.test(str)) return 0 // academic citation
  if (/^\.?\.?\//.test(str)) return 0               // shell command / relative path
  if (/(^|\s)--?[a-z]/.test(str) && /[/.]/.test(str)) return 0 // CLI invocation with flags

  const cleaned = str
    // strip known untranslated brand/model names
    .replace(/\b(Llama|Qwen|Mistral|DeepSeek|Claude|GPT|Ollama|LM Studio|Jan AI|PromptQuorum|Open WebUI|MLX|GGUF|CUDA|Vulkan|ROCm|OpenCL|llama\.cpp|llamacpp|Homebrew|Docker|Podman|Raspberry Pi|macOS|Windows|Linux|Ubuntu|Debian|Fedora|Apple|Mac|Intel|AMD|NVIDIA|RTX|GTX|RX|Radeon|GeForce|M[1-9]|Wi-Fi|USB|PCIe|NVMe|SSD|HDD|API|JSON|CLI|GUI|HTML|CSS|TypeScript|JavaScript|Python|npm|git|bash|curl|wget|sudo|apt|brew|conda|Ollama|SillyTavern|Continue|Cursor|JetBrains|VSCode|Samsung|Galaxy|Snapdragon|Qualcomm|MediaTek|Tensor|MacBook|iPhone|iPad|Pixel|DDR[45]|LPDDR[45X]|GDDR[567]|ECC|DeepLearning|Minisforum|Beelink|NiPoGi|Corsair|Kingston|Crucial|WD|Seagate|Toshiba|Framework|ThinkPad|Lenovo|ASUS|ROG|Razer|Dell|XPS|Surface|HP|Acer|Gigabyte|MSI|Zotac|EVGA|Supermicro|Proxmox|Unraid|TrueNAS|Synology|QNAP|Netgear|UniFi|Ubiquiti|Ryzen|Threadripper|EPYC|Xeon|Celeron|Pentium|Arc|Iris|Turbo|Ultra|Studio|Mini|Air|Pro|Max|Plus|Extreme|LLM|LLMs|AI|NAS|SAN|n8n|Zapier|Notion|Slack|Gmail|Trello|Airtable|Todoist|Obsidian|Logseq|Joplin|Supabase|Weaviate|Qdrant|Chroma|Pinecone|Milvus|LlamaIndex|LangChain|Piper|WhisperKit|MLC|Termux|Android|Whisper|Perplexity|Replit|Copilot|Tabnine|Codeium|Phind|Hugging|Face|Transformers|TensorFlow|PyTorch|scikit|pandas|NumPy|Jupyter|Notebook|Colab|Kaggle|FastAPI|Flask|Django|Express|Node|React|Vue|Angular|Svelte|Tailwind|HyperCLOVA|EXAONE|CLOVA|Naver|Kakao|vLLM|Exaone|PIPA|PIPC)\b/gi, ' ')
    // strip quantizations and sizes
    .replace(/\bQ[458]_K_[MSL]|Q[48]_0|F16|BF16|INT[48]|AWQ|GPTQ|EXL2\b/g, ' ')
    .replace(/\b\d+(\.\d+)?\s*(GB|MB|TB|KB|VRAM|RAM|GHz|MHz|Gbps|tok\/s|ms|min|sec|hr|B|K|M)\b/gi, ' ')
    // strip param-counts like 7B, 70B, 14B
    .replace(/\b\d+(B|K|M|G|T|C)\b/g, ' ')
    // strip remaining punctuation / numbers
    .replace(/[0-9\s\-.,+%$€£¥₩:\/\\.()'"\[\]{}@#!_x×+<>=|~`^&*;]/g, ' ')
    .trim()

  if (cleaned.length < 4) return 0
  return cleaned.split(/\s+/).filter(w => w.length > 1).length
}

/**
 * Pre-process ko: block text before string scanning:
 * strips codeBlock/code fields, metadata arrays, anchor/theme/slug identifiers,
 * and other legitimately-Latin fields so they don't generate false positives.
 */
function preprocessKoBlock(raw) {
  // Strip backtick template literal content (codeBlock fields contain English code)
  let out = raw.replace(/`[^`]*`/gs, '``')
  // Strip metadata arrays that are intentionally English
  out = out.replace(/current_(?:hardware|models)_mentioned:\s*\[[^\]]*\]/gs, 'current_x_mentioned: []')
  // Strip productName field values (always English — hardware/product labels)
  out = out.replace(/productName:\s*'[^']*'/g, "productName: ''")
  out = out.replace(/productName:\s*"[^"]*"/g, 'productName: ""')
  // Strip codeBlock and multi-line text: fields that contain shell/code strings
  out = out.replace(/\bcodeBlock:\s*'[^']*\\n[^']*'/g, "codeBlock: ''")
  out = out.replace(/\bcodeBlock:\s*"[^"]*\\n[^"]*"/g, 'codeBlock: ""')
  out = out.replace(/\btext:\s*'[^']*\\n[^']*'/g, "text: ''")
  out = out.replace(/\btext:\s*"[^"]*\\n[^"]*"/g, 'text: ""')
  // Strip anchor field values (URL slugs — not translatable)
  out = out.replace(/\banchor:\s*'[^']*'/g, "anchor: ''")
  out = out.replace(/\banchor:\s*"[^"]*"/g, 'anchor: ""')
  // Strip theme field values (enum lookup keys — must stay English)
  out = out.replace(/\btheme:\s*'[^']*'/g, "theme: ''")
  out = out.replace(/\btheme:\s*"[^"]*"/g, 'theme: ""')
  // Strip slug / canonicalSlug field values (URL identifiers — not translatable)
  out = out.replace(/\b(?:canonical)?[Ss]lug:\s*'[^']*'/g, "slug: ''")
  out = out.replace(/\b(?:canonical)?[Ss]lug:\s*"[^"]*"/g, 'slug: ""')
  // Strip primaryTerm / type / id field values (technical identifiers)
  out = out.replace(/\bprimaryTerm:\s*'[^']*'/g, "primaryTerm: ''")
  out = out.replace(/\bprimaryTerm:\s*"[^"]*"/g, 'primaryTerm: ""')
  out = out.replace(/\btype:\s*'[^']*'/g, "type: ''")
  out = out.replace(/\btype:\s*"[^"]*"/g, 'type: ""')
  out = out.replace(/\bid:\s*'[^']*'/g, "id: ''")
  out = out.replace(/\bid:\s*"[^"]*"/g, 'id: ""')
  // Strip targetKeywords arrays (keyword identifiers — legitimately Latin tech terms)
  out = out.replace(/\btargetKeywords:\s*\[[^\]]*\]/gs, 'targetKeywords: []')
  // Strip source { title, url } title values — bibliographic refs stay in English
  out = out.replace(/\btitle:\s*'[^']*'(\s*,\s*url:)/g, "title: ''$1")
  out = out.replace(/\btitle:\s*"[^"]*"(\s*,\s*url:)/g, 'title: ""$1')
  // Strip image path values (file paths — not prose)
  out = out.replace(/\bimage:\s*'[^']*'/g, "image: ''")
  out = out.replace(/\bimage:\s*"[^"]*"/g, 'image: ""')
  return out
}

const dir = process.argv[2] || 'src/lib/local-llms/articles'
const files = readdirSync(dir).filter(f => f.endsWith('.ts')).sort()

const HIGH = []
let checked = 0

for (const file of files) {
  const path = join(dir, file)
  const src = readFileSync(path, 'utf8')

  // Only lint files that already have a ko: block
  if (!src.includes('\n  ko:')) continue
  checked++

  // Extract the ko: block (from "\n  ko:" to the next top-level locale key or end)
  const koIdx = src.indexOf('\n  ko:')
  const after = src.slice(koIdx + 1)
  const nextLocale = after.match(/\n  [a-z]{2}:/)
  const koBlock = nextLocale ? after.slice(0, nextLocale.index) : after

  // 1. Title must contain Hangul
  const titleM = koBlock.match(/^\s{4}title:\s*['"]([^'"]+)['"]/m)
  if (titleM && !HANGUL_RE.test(titleM[1])) {
    HIGH.push({ file, field: 'title', reason: 'no Hangul', snippet: titleM[1].slice(0, 100) })
    continue
  }

  // 2. Scan all quoted strings ≥30 chars for untranslated prose or Spanish-leftover leaks
  const scanBlock = preprocessKoBlock(koBlock)
  const stringRe = /'([^'\\\n]{30,})'|"([^"\\\n]{30,})"/g
  let m
  while ((m = stringRe.exec(scanBlock)) !== null) {
    const str = (m[1] ?? m[2]).trim()

    if (HANGUL_RE.test(str)) continue  // has Hangul — fine

    // Check for Spanish function-word leak (es: copy-paste)
    if (SPANISH_LEAK_RE.test(str) && cleanedWordCount(str) >= 3) {
      HIGH.push({ file, field: '(prose)', reason: 'Spanish/es leftover', snippet: str.slice(0, 120) })
      break
    }

    // Check for untranslated English prose (no Hangul, enough non-technical words)
    const wordCount = cleanedWordCount(str)
    if (wordCount >= 5) {
      HIGH.push({ file, field: '(prose)', reason: 'no Hangul in prose', snippet: str.slice(0, 120) })
      break  // one finding per file is enough
    }
  }
}

if (HIGH.length > 0) {
  console.error(`\n❌ KO-LINT FAILED — ${HIGH.length} HIGH finding(s)\n`)
  for (const f of HIGH) {
    console.error(`  [HIGH] ${f.file}`)
    console.error(`         field: ${f.field}  reason: ${f.reason}`)
    console.error(`         "${f.snippet}"\n`)
  }
  process.exit(1)
} else {
  console.log(`✅ KO-LINT PASSED — ${checked} ko: block(s) checked, 0 HIGH findings`)
  process.exit(0)
}
