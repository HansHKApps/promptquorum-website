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

  const cleaned = str
    // strip known untranslated brand/model names
    .replace(/\b(Llama|Qwen|Mistral|DeepSeek|Claude|GPT|Ollama|LM Studio|Jan AI|PromptQuorum|Open WebUI|MLX|GGUF|CUDA|Vulkan|ROCm|OpenCL|llama\.cpp|llamacpp|Homebrew|Docker|Podman|Raspberry Pi|macOS|Windows|Linux|Ubuntu|Debian|Fedora|Apple|Mac|Intel|AMD|NVIDIA|RTX|GTX|RX|Radeon|GeForce|M[1-9]|Wi-Fi|USB|PCIe|NVMe|SSD|HDD|API|JSON|CLI|GUI|HTML|CSS|TypeScript|JavaScript|Python|npm|git|bash|curl|wget|sudo|apt|brew|conda|Ollama|SillyTavern|Continue|Cursor|JetBrains|VSCode|Samsung|Galaxy|Snapdragon|Qualcomm|MediaTek|Tensor|MacBook|iPhone|iPad|Pixel|DDR[45]|LPDDR[45X]|GDDR[567]|ECC|DeepLearning|Minisforum|Beelink|NiPoGi|Corsair|Kingston|Crucial|WD|Seagate|Toshiba|Framework|ThinkPad|Lenovo|ASUS|ROG|Razer|Dell|XPS|Surface|HP|Acer|Gigabyte|MSI|Zotac|EVGA|Supermicro|Proxmox|Unraid|TrueNAS|Synology|QNAP|Netgear|UniFi|Ubiquiti|Ryzen|Threadripper|EPYC|Xeon|Celeron|Pentium|Arc|Iris|Turbo|Ultra|Studio|Mini|Air|Pro|Max|Plus|Extreme|LLM|LLMs|AI|NAS|SAN|n8n|Zapier|Notion|Slack|Gmail|Trello|Airtable|Todoist|Obsidian|Logseq|Joplin|Supabase|Weaviate|Qdrant|Chroma|Pinecone|Milvus|LlamaIndex|LangChain|Piper|WhisperKit|MLC|Termux|Android|Whisper|Piper|Perplexity|Replit|Copilot|Tabnine|Codeium|Phind|Hugging|Face|Transformers|TensorFlow|PyTorch|scikit|pandas|NumPy|Jupyter|Notebook|Colab|Kaggle|FastAPI|Flask|Django|Express|Node|React|Vue|Angular|Svelte|Tailwind)\b/gi, ' ')
    // strip quantizations and sizes
    .replace(/\bQ[458]_K_[MSL]|Q[48]_0|F16|BF16|INT[48]|AWQ|GPTQ|EXL2\b/g, ' ')
    .replace(/\b\d+(\.\d+)?\s*(GB|MB|TB|KB|VRAM|RAM|GHz|MHz|Gbps|tok\/s|ms|min|sec|hr|B|K|M)\b/gi, ' ')
    // strip param-counts like 7B, 70B, 14B
    .replace(/\b\d+(B|K|M|G|T|C)\b/g, ' ')
    // strip remaining punctuation / numbers
    .replace(/[0-9\s\-.,+%$€£¥¥:\/\\.()'"\[\]{}@#!_x×+<>=|~`^&*;]/g, ' ')
    .trim()

  if (cleaned.length < 4) return 0
  return cleaned.split(/\s+/).filter(w => w.length > 1).length
}

/**
 * Pre-process ar: block text before string scanning:
 * 1. Replace codeBlock backtick template literal contents with a placeholder
 *    (prevents matching Python/shell strings inside code examples as prose)
 * 2. Remove current_hardware_mentioned / current_models_mentioned array content
 *    (metadata fields — hardware/model names stay in English, not user-facing prose)
 */
function preprocessArBlock(raw) {
  // Strip backtick template literal content (codeBlock fields contain English code)
  let out = raw.replace(/`[^`]*`/gs, '``')
  // Strip metadata arrays that are intentionally English
  out = out.replace(/current_(?:hardware|models)_mentioned:\s*\[[^\]]*\]/gs, 'current_x_mentioned: []')
  // Strip productName field values (always English — hardware/product labels)
  out = out.replace(/productName:\s*'[^']*'/g, "productName: ''")
  out = out.replace(/productName:\s*"[^"]*"/g, 'productName: ""')
  // Strip code-containing fields: codeBlock and text: fields that contain \n (multi-line code strings)
  // Handles both backtick (already done above) and single/double-quoted string codeBlocks
  out = out.replace(/\bcodeBlock:\s*'[^']*\\n[^']*'/g, "codeBlock: ''")
  out = out.replace(/\bcodeBlock:\s*"[^"]*\\n[^"]*"/g, 'codeBlock: ""')
  out = out.replace(/\btext:\s*'[^']*\\n[^']*'/g, "text: ''")
  out = out.replace(/\btext:\s*"[^"]*\\n[^"]*"/g, 'text: ""')
  return out
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
  // If ar: is last block (no subsequent locale key), use the full remainder; else clip to next locale.
  const arBlock = nextLocale ? after.slice(0, nextLocale.index) : after

  // 1. Title must contain Arabic
  const titleM = arBlock.match(/^\s{4}title:\s*['"]([^'"]+)['"]/m)
  if (titleM && !ARABIC_RE.test(titleM[1])) {
    HIGH.push({ file, field: 'title', snippet: titleM[1].slice(0, 100) })
    continue
  }

  // 2. Scan all quoted strings ≥30 chars for Latin-prose leaks
  // Pre-process to remove codeBlock content and metadata-only arrays
  const scanBlock = preprocessArBlock(arBlock)
  const stringRe = /'([^'\\\n]{30,})'|"([^"\\\n]{30,})"/g
  let m
  while ((m = stringRe.exec(scanBlock)) !== null) {
    const str = (m[1] ?? m[2]).trim()

    if (ARABIC_RE.test(str)) continue        // has Arabic — fine

    const wordCount = cleanedWordCount(str)  // 0 = purely technical, else cleaned word count
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
