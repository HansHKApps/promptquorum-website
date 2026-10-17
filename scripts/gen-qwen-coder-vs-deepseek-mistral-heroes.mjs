#!/usr/bin/env node
// One-off hero generator for local-llms/qwen-coder-vs-deepseek-mistral-local-2026 (all 9 locales, 2 images each):
//   qwen-coder-deepseek-mistral-swe-bench-hero-{lang}.webp   (article hero + benchmark image)
//   qwen-coder-deepseek-mistral-dispatch-hero-{lang}.webp    (dispatch strategy image)
// Highlights are hand-written from each locale block's own content (<=7 words; <=16 chars for ja/zh/ko).
// Usage: HERO_BASE=http://localhost:3442 node scripts/gen-qwen-coder-vs-deepseek-mistral-heroes.mjs
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3442'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SRC = path.join(process.cwd(), 'src/lib/local-llms/articles/qwen-coder-vs-deepseek-mistral-local-2026.ts')

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const TITLE = {
  en: 'Qwen3.6 vs DeepSeek vs Devstral 2026',
  de: 'Qwen3.6 vs. DeepSeek vs. Devstral 2026',
  fr: 'Qwen3.6 vs DeepSeek vs Devstral 2026',
  es: 'Qwen3.6 vs DeepSeek vs Devstral 2026',
  pt: 'Qwen3.6 vs DeepSeek vs Devstral 2026',
  ja: 'Qwen3.6 対 DeepSeek 対 Devstral',
  zh: 'Qwen3.6 对比 DeepSeek 对比 Devstral',
  ar: 'Qwen3.6 مقابل DeepSeek',
  ko: 'Qwen3.6 대 DeepSeek 대 Devstral',
}
const SWE = {
  en: ['Qwen3.6 27B: 77.2% SWE-bench', 'DeepSeek V4 Flash: 78.6%', 'Devstral Small 2: 65.8%'],
  de: ['Qwen3.6 27B: 77,2 % SWE-bench', 'DeepSeek V4 Flash: 78,6 %', 'Devstral Small 2: 65,8 %'],
  fr: ['Qwen3.6 27B : 77,2 % SWE-bench', 'DeepSeek V4 Flash : 78,6 %', 'Devstral Small 2 : 65,8 %'],
  es: ['Qwen3.6 27B: 77,2 % SWE-bench', 'DeepSeek V4 Flash: 78,6 %', 'Devstral Small 2: 65,8 %'],
  pt: ['Qwen3.6 27B: 77,2% SWE-bench', 'DeepSeek V4 Flash: 78,6%', 'Devstral Small 2: 65,8%'],
  ja: ['Qwen3.6：77.2%', 'DeepSeek：78.6%', 'Devstral 2：65.8%'],
  zh: ['Qwen3.6：77.2%', 'DeepSeek：78.6%', 'Devstral 2：65.8%'],
  ar: ['Qwen3.6 27B يحقق 77.2%', 'DeepSeek V4 Flash يحقق 78.6%', 'Devstral Small 2 يحقق 65.8%'],
  ko: ['Qwen3.6: 77.2%', 'DeepSeek: 78.6%', 'Devstral 2: 65.8%'],
}
const DISPATCH = {
  en: ['Private code → local Qwen3.6', 'Autocomplete → local Devstral', 'Bulk tasks → DeepSeek API'],
  de: ['Privater Code → lokales Qwen3.6', 'Autovervollständigung → Devstral', 'Massenaufgaben → DeepSeek-API'],
  fr: ['Code privé → Qwen3.6 local', 'Autocomplétion → Devstral local', 'Gros volumes → API DeepSeek'],
  es: ['Código privado → Qwen3.6 local', 'Autocompletado → Devstral local', 'Volumen → API de DeepSeek'],
  pt: ['Código privado → Qwen3.6 local', 'Autocompletar → Devstral local', 'Volume → API do DeepSeek'],
  ja: ['機密コード→ローカル', '自動補完→Devstral 2', '大量処理→DeepSeek'],
  zh: ['敏感代码→本地Qwen3.6', '补全→本地Devstral 2', '批量任务→DeepSeek'],
  ar: ['شيفرة خاصة ← Qwen3.6 محلي', 'إكمال تلقائي ← Devstral محلي', 'مهام ضخمة ← DeepSeek API'],
  ko: ['민감 코드→로컬 Qwen3.6', '자동완성→로컬 Devstral', '대량 작업→DeepSeek'],
}

// The AR and JA section titles wrap awkwardly on one poster line.
const DISPATCH_TITLE = { ar: 'استراتيجية التوزيع', ja: 'ディスパッチ戦略' }

// Satori lays text out left-to-right with no bidi reordering: pre-reverse the order of units
// (each Arabic word, each run of Latin/number tokens) so the visual layout reads right-to-left.
const rtlVisual = (t) => {
  const units = []
  for (const tok of t.split(' ').filter(Boolean)) {
    const latin = /[A-Za-z0-9]/.test(tok) && !/[؀-ۿ]/.test(tok)
    if (latin && units.length && units[units.length - 1].latin) units[units.length - 1].text += ' ' + tok
    else units.push({ text: tok, latin })
  }
  return units.reverse().map((u) => u.text).join(' ')
}

const only = process.env.LANGS ? process.env.LANGS.split(',') : null
let generated = 0
const failures = []
for (const lang of Object.keys(TITLE)) {
  if (only && !only.includes(lang)) continue
  const block = article[lang]
  const dispatchTitle = DISPATCH_TITLE[lang] ?? block.sections.dispatchStrategy?.title
  const jobs = [{ name: 'swe-bench', title: TITLE[lang], highlights: SWE[lang] }]
  if (block.sections.dispatchStrategy) jobs.push({ name: 'dispatch', title: dispatchTitle, highlights: DISPATCH[lang] })
  for (const job of jobs) {
    const fix = (t) => (lang === 'ar' ? rtlVisual(t) : t)
    const spec = { lang, title: fix(job.title), highlights: job.highlights.map(fix), footer: 'PromptQuorum' }
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const base = `qwen-coder-deepseek-mistral-${job.name}-hero-${lang}`
      const pngPath = path.join(IMAGES_DIR, `${base}.png`)
      const webpPath = path.join(IMAGES_DIR, `${base}.webp`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${base}`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang} ${job.name}: ${err.message}`)
      failures.push(`${lang}:${job.name}`)
    }
  }
}
console.log(`Generated ${generated}, failed ${failures.length}`)
if (failures.length) process.exitCode = 1
