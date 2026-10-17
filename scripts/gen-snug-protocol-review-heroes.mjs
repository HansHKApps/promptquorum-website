#!/usr/bin/env node
// One-off hero generator for snug-protocol-review (all 9 locales; sparse poster: title + 3 hand-written highlights).
// Facts strip pulled from src/lib/power-local-llm/apps/friedrichai.ts per CLAUDE.md's mandatory
// FeatureAppPost hero rule: hardware (16 GB RAM minimum per Steam), price ($9.99 USD), license (proprietary), platforms (Windows).
// Title/subtitle/bullets reuse each locale block of the article itself (markdown stripped, since
// Satori does not render markdown syntax); the article is loaded by transpiling the TS source.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3439'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'snug-protocol-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const stripMd = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

const L = {
  en: { lic: 'License', plat: 'Platforms', footer: 'PromptQuorum Guide', hl: ['Open protocol, MIT-licensed', 'Apps live in a portable .snug file', 'Early stage: one maintainer'] },
  de: { lic: 'Lizenz', plat: 'Plattformen', footer: 'PromptQuorum-Leitfaden', hl: ['Offenes Protokoll, MIT-Lizenz', 'Apps in portabler .snug-Datei', 'Frühphase: ein Maintainer'] },
  fr: { lic: 'Licence', plat: 'Plateformes', footer: 'Guide PromptQuorum', hl: ['Protocole ouvert, licence MIT', 'Apps dans un fichier .snug portable', 'Phase précoce : un mainteneur'] },
  es: { lic: 'Licencia', plat: 'Plataformas', footer: 'Guía de PromptQuorum', hl: ['Protocolo abierto, licencia MIT', 'Apps en un archivo .snug portátil', 'Fase temprana: un mantenedor'] },
  ja: { lic: 'ライセンス', plat: '対応プラットフォーム', footer: 'PromptQuorumガイド', hl: ['MITのオープンプロトコル', 'アプリは.snugファイルに保存', '初期段階・開発者は1人'] },
  zh: { lic: '许可证', plat: '支持平台', footer: 'PromptQuorum 指南', hl: ['MIT 许可的开放协议', '应用存于可移植 .snug 文件', '早期阶段,仅一位维护者'] },
  pt: { lic: 'Licença', plat: 'Plataformas', footer: 'Guia PromptQuorum', hl: ['Protocolo aberto, licença MIT', 'Apps em um arquivo .snug portátil', 'Fase inicial: um mantenedor'] },
  ar: { lic: 'الترخيص', plat: 'المنصات', footer: 'دليل PromptQuorum', hl: ['بروتوكول مفتوح برخصة MIT', 'التطبيقات في ملف .snug محمول', 'مرحلة مبكرة: مطوّر واحد'] },
  ko: { lic: '라이선스', plat: '플랫폼', footer: 'PromptQuorum 가이드', hl: ['MIT 라이선스 오픈 프로토콜', '앱은 이동 가능한 .snug 파일에', '초기 단계, 관리자 1명'] },
}

async function main() {
  let generated = 0
  const failures = []
  const only = process.env.LANGS ? process.env.LANGS.split(',') : null
  for (const lang of Object.keys(L)) {
    if (only && !only.includes(lang)) continue
    const block = article[lang]
    if (!block) {
      failures.push({ lang, error: 'no locale block in article' })
      continue
    }
    const t = L[lang]
    const spec = {
      lang,
      title: stripMd(block.title),
      highlights: t.hl,
      facts: [
        { label: t.lic, value: 'MIT', tone: 'slate' },
        { label: t.plat, value: 'macOS', tone: 'slate' },
      ],
      footer: t.footer,
    }
    const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${SLUG}-hero-${lang}.webp (${buf.length} -> ${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      failures.push({ lang, error: err.message })
    }
  }
  console.log(`\nGenerated: ${generated}/9, failed: ${failures.length}`)
  if (failures.length) process.exitCode = 1
}

main()
