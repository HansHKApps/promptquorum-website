#!/usr/bin/env node
// Hero generator for localmind-review (all 9 locales), sparse-poster spec (title + 3 short highlights + facts).
// Facts from src/lib/power-local-llm/apps/localmind.ts: free, MIT, Android + iOS.
// Titles are read from each locale block of the article; highlights are hand-written per locale from that
// block's own content (no new claims).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3434'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'localmind-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)

const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}))
const article = mod.exports.article

const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { price: 'Price', priceV: 'Free', lic: 'License', plat: 'Platforms', platV: 'Android, iOS', footer: 'PromptQuorum Guide', hl: ['Runs models on your phone', 'Connects to Ollama and LM Studio', 'MCP tools, voice, attachments'] },
  de: { price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', plat: 'Plattformen', platV: 'Android, iOS', footer: 'PromptQuorum-Leitfaden', hl: ['Modelle direkt auf dem Smartphone', 'Verbindet Ollama und LM Studio', 'MCP-Tools, Sprache, Anhänge'] },
  fr: { price: 'Prix', priceV: 'Gratuit', lic: 'Licence', plat: 'Plateformes', platV: 'Android, iOS', footer: 'Guide PromptQuorum', hl: ['Modèles sur votre téléphone', 'Se connecte à Ollama et LM Studio', 'Outils MCP, voix, pièces jointes'] },
  es: { price: 'Precio', priceV: 'Gratis', lic: 'Licencia', plat: 'Plataformas', platV: 'Android, iOS', footer: 'Guía de PromptQuorum', hl: ['Modelos en tu teléfono', 'Conecta con Ollama y LM Studio', 'Herramientas MCP, voz y adjuntos'] },
  ja: { price: '価格', priceV: '無料', lic: 'ライセンス', plat: '対応プラットフォーム', platV: 'Android、iOS', footer: 'PromptQuorumガイド', hl: ['端末内でモデルを実行', 'サーバー接続に対応', 'MCPツール・音声・添付'] },
  zh: { price: '价格', priceV: '免费', lic: '许可证', plat: '支持平台', platV: 'Android、iOS', footer: 'PromptQuorum 指南', hl: ['在手机上运行模型', '可连接自建服务器', 'MCP 工具、语音、附件'] },
  pt: { price: 'Preço', priceV: 'Grátis', lic: 'Licença', plat: 'Plataformas', platV: 'Android, iOS', footer: 'Guia PromptQuorum', hl: ['Modelos no seu celular', 'Conecta ao Ollama e LM Studio', 'Ferramentas MCP, voz e anexos'] },
  ar: { price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', plat: 'المنصات', platV: 'Android وiOS', footer: 'دليل PromptQuorum', hl: ['نماذج تعمل على هاتفك', 'اتصال بـ Ollama وLM Studio', 'أدوات MCP وصوت ومرفقات'] },
  ko: { price: '가격', priceV: '무료', lic: '라이선스', plat: '플랫폼', platV: 'Android, iOS', footer: 'PromptQuorum 가이드', hl: ['휴대폰에서 모델 실행', '자체 서버 연결 지원', 'MCP 도구·음성·첨부'] },
}

async function main() {
  let generated = 0
  const failures = []
  const only = process.env.LANGS ? process.env.LANGS.split(',') : null
  for (const lang of Object.keys(L)) {
    if (only && !only.includes(lang)) continue
    const block = article[lang]
    if (!block) { failures.push({ lang, error: 'no locale block in article' }); continue }
    const t = L[lang]
    const spec = {
      lang,
      title: stripMd(block.title),
      highlights: t.hl,
      facts: [
        { label: t.price, value: t.priceV },
        { label: t.lic, value: 'MIT' },
        { label: t.plat, value: t.platV },
      ],
      footer: t.footer,
    }
    const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec) })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${SLUG}-hero-${lang}.webp (${fs.statSync(webpPath).size} bytes)`)
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
