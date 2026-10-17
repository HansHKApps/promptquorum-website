#!/usr/bin/env node
// Regenerates the 9 localized hero posters for the two Ollama/MLX prompt bites
// after the 2026-10-17 rewrite (Ollama runs MLX by default on Apple Silicon since v0.40.0).
// Usage: node scripts/gen-ollama-mlx-heroes.mjs [port] — needs `npx next dev --webpack --port <port>` running.
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const PORT = process.argv[2] || '3437'
const BASE = `http://localhost:${PORT}`
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images')
const ARTICLES_DIR = path.join(process.cwd(), 'src', 'lib', 'prompt-bites', 'articles')
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
}

const HIGHLIGHTS = {
  'ollama-mlx-apple-silicon': {
    en: ['MLX default since v0.40.0', 'Supported models only', 'Others: llama.cpp + Metal'],
    de: ['MLX Standard seit v0.40.0', 'Nur unterstützte Modelle', 'Rest: llama.cpp + Metal'],
    fr: ['MLX par défaut depuis v0.40.0', 'Modèles pris en charge', 'Autres : llama.cpp + Metal'],
    es: ['MLX por defecto desde v0.40.0', 'Solo modelos compatibles', 'Resto: llama.cpp + Metal'],
    pt: ['MLX padrão desde a v0.40.0', 'Só modelos compatíveis', 'Demais: llama.cpp + Metal'],
    ja: ['v0.40.0からMLXが既定', '対応モデルのみ', 'それ以外はMetal'],
    zh: ['v0.40.0起默认MLX', '仅受支持的模型', '其余用Metal'],
    ko: ['v0.40.0부터 MLX 기본', '지원 모델만', '나머지는 Metal'],
    ar: ['MLX افتراضي منذ v0.40.0', 'للنماذج المدعومة فقط', 'البقية: llama.cpp + Metal'],
  },
  'mlx-vs-ollama-vs-llamacpp': {
    en: ['Ollama: MLX on Mac by default', 'mlx-lm: direct MLX control', 'llama.cpp: maximum control'],
    de: ['Ollama: MLX auf dem Mac', 'mlx-lm: direkte Kontrolle', 'llama.cpp: max. Kontrolle'],
    fr: ['Ollama : MLX sur Mac', 'mlx-lm : contrôle direct', 'llama.cpp : contrôle maximal'],
    es: ['Ollama: MLX en Mac', 'mlx-lm: control directo', 'llama.cpp: máximo control'],
    pt: ['Ollama: MLX no Mac', 'mlx-lm: controle direto', 'llama.cpp: controle máximo'],
    ja: ['OllamaはMacでMLX', 'mlx-lm：直接制御', 'llama.cpp：最大制御'],
    zh: ['Ollama：Mac用MLX', 'mlx-lm：直接控制', 'llama.cpp：最大控制'],
    ko: ['Ollama: Mac MLX', 'mlx-lm: 직접 제어', 'llama.cpp 최대 제어'],
    ar: ['Ollama: MLX على Mac', 'mlx-lm: تحكم مباشر', 'llama.cpp: أقصى تحكم'],
  },
}

function titleOf(slug, lang) {
  const lines = fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.ts`), 'utf8').split('\n')
  let cur = null
  for (const ln of lines) {
    const m = ln.match(/^  ([a-z]{2}): \{/)
    if (m) cur = m[1]
    const t = ln.match(/^    title: (.*),$/)
    if (t && cur === lang) return new Function(`return ${t[1]}`)()
  }
  throw new Error(`no title for ${slug}/${lang}`)
}

let failed = 0
for (const slug of Object.keys(HIGHLIGHTS)) {
  for (const lang of LANGS) {
    const spec = { lang, title: titleOf(slug, lang), highlights: HIGHLIGHTS[slug][lang], footer: FOOTER[lang] }
    const webp = path.join(IMAGES_DIR, `${slug}-overview-hero-${lang}.webp`)
    const png = webp.replace(/\.webp$/, '.png')
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      fs.writeFileSync(png, Buffer.from(await res.arrayBuffer()))
      await sharp(png).webp({ lossless: true, effort: 6 }).toFile(webp)
      fs.unlinkSync(png)
      console.log(`OK ${path.basename(webp)} (${fs.statSync(webp).size} bytes)`)
    } catch (err) {
      failed++
      console.error(`FAIL ${slug}/${lang}: ${err.message}`)
    }
  }
}
console.log(failed ? `${failed} failed` : 'all 18 generated')
process.exitCode = failed ? 1 : 0
