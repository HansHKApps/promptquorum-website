#!/usr/bin/env node
// Hero generator for open-science-desktop-review (all 9 locales). Sparse poster: localized title + 3 hand-written highlights (<= 7 words;
// <= 16 characters for zh/ja/ko) + facts (price, license, platforms) from src/lib/power-local-llm/apps/open-science-desktop.ts.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import ts from 'typescript'

const BASE = process.env.HERO_BASE || 'http://localhost:3470'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'open-science-desktop-review'
const SRC = path.join(process.cwd(), `src/lib/power-local-llm/articles/${SLUG}.ts`)
const js = ts.transpileModule(fs.readFileSync(SRC, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText
const mod = { exports: {} }
new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({ starsFor: () => () => '2,000' }))
const article = mod.exports.article
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim()

const L = {
  en: { hl: ['Free MIT-licensed research workbench', 'Agent runs on your local folders', 'Bring your own model provider'], price: 'Price', priceV: 'Free', lic: 'License', licV: 'MIT', plat: 'Platforms', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum Guide' },
  de: { hl: ['Kostenlose Forschungsumgebung unter MIT', 'Agent arbeitet in lokalen Ordnern', 'Eigener Modellanbieter nötig'], price: 'Preis', priceV: 'Kostenlos', lic: 'Lizenz', licV: 'MIT', plat: 'Plattformen', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum-Leitfaden' },
  fr: { hl: ['Poste de recherche gratuit sous MIT', 'L\'agent travaille sur vos dossiers', 'Votre propre fournisseur de modèles'], price: 'Prix', priceV: 'Gratuit', lic: 'Licence', licV: 'MIT', plat: 'Plateformes', platV: 'macOS, Windows, Linux', footer: 'Guide PromptQuorum' },
  es: { hl: ['Banco de investigación gratis, licencia MIT', 'El agente trabaja en tus carpetas', 'Tu propio proveedor de modelos'], price: 'Precio', priceV: 'Gratis', lic: 'Licencia', licV: 'MIT', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guía de PromptQuorum' },
  ja: { hl: ['無料のMITライセンス研究環境', 'ローカルフォルダーでエージェント', 'モデルは自前で接続'], price: '価格', priceV: '無料', lic: 'ライセンス', licV: 'MIT', plat: '対応プラットフォーム', platV: 'macOS、Windows、Linux', footer: 'PromptQuorumガイド' },
  zh: { hl: ['免费 MIT 许可研究工作台', '智能体处理本地文件夹', '自带模型提供商'], price: '价格', priceV: '免费', lic: '许可证', licV: 'MIT', plat: '支持平台', platV: 'macOS、Windows、Linux', footer: 'PromptQuorum 指南' },
  pt: { hl: ['Bancada de pesquisa grátis, licença MIT', 'O agente trabalha nas suas pastas', 'Seu próprio provedor de modelos'], price: 'Preço', priceV: 'Grátis', lic: 'Licença', licV: 'MIT', plat: 'Plataformas', platV: 'macOS, Windows, Linux', footer: 'Guia PromptQuorum' },
  ar: { hl: ['منصة بحث مجانية بترخيص MIT', 'الوكيل يعمل على مجلداتك المحلية', 'مزوّد النماذج من اختيارك'], price: 'السعر', priceV: 'مجاني', lic: 'الترخيص', licV: 'MIT', plat: 'المنصات', platV: 'macOS وWindows وLinux', footer: 'دليل PromptQuorum' },
  ko: { hl: ['무료 MIT 라이선스 연구 도구', '로컬 폴더에서 에이전트 작업', '모델 제공업체는 직접 연결'], price: '가격', priceV: '무료', lic: '라이선스', licV: 'MIT', plat: '플랫폼', platV: 'macOS, Windows, Linux', footer: 'PromptQuorum 가이드' },
}

let generated = 0
const failures = []
const only = process.env.LANGS ? process.env.LANGS.split(',') : null
for (const lang of Object.keys(L)) {
  if (only && !only.includes(lang)) continue
  const t = L[lang]
  const spec = {
    lang,
    title: stripMd(article[lang].title),
    highlights: t.hl,
    facts: [
      { label: t.price, value: t.priceV },
      { label: t.lic, value: t.licV },
      { label: t.plat, value: t.platV },
    ],
    footer: t.footer,
  }
  try {
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(spec) })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const png = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
    fs.writeFileSync(png, buf)
    await sharp(png).webp({ lossless: true, effort: 6 }).toFile(path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`))
    fs.unlinkSync(png)
    console.log(`OK ${lang}`)
    generated++
  } catch (e) {
    console.error(`FAIL ${lang}: ${e.message}`)
    failures.push(lang)
  }
}
console.log(`Generated ${generated}, failed ${failures.length}`)
if (failures.length) process.exitCode = 1
