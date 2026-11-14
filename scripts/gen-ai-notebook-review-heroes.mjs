#!/usr/bin/env node
// Hero generator for ai-notebook-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/ai-notebook.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3459  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3459'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'AI Notebook Review: Free Open-Source NotebookLM Alternative', highlights: ['Chat with your own documents', 'Runs locally with Ollama', 'Free and MIT-licensed'],
    facts: [{ label: 'Platforms', value: 'Mac, Windows', tone: 'slate' }, { label: 'Price', value: 'Free', tone: 'emerald' }, { label: 'License', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '0.15.0', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'AI Notebook Rezension: Kostenlose Open-Source-Alternative zu NotebookLM', highlights: ['Chat mit eigenen Dokumenten', 'Lokal mit Ollama', 'Kostenlos, MIT-Lizenz'],
    facts: [{ label: 'Plattformen', value: 'Mac, Windows', tone: 'slate' }, { label: 'Preis', value: 'Gratis', tone: 'emerald' }, { label: 'Lizenz', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '0.15.0', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test d’AI Notebook : alternative libre et gratuite à NotebookLM', highlights: ['Chat avec vos documents', 'Local avec Ollama', 'Gratuit, licence MIT'],
    facts: [{ label: 'Plateformes', value: 'Mac, Windows', tone: 'slate' }, { label: 'Prix', value: 'Gratuit', tone: 'emerald' }, { label: 'Licence', value: 'MIT', tone: 'slate' }, { label: 'Version', value: '0.15.0', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de AI Notebook: alternativa gratuita y de código abierto a NotebookLM', highlights: ['Chat con tus documentos', 'Local con Ollama', 'Gratis, licencia MIT'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows', tone: 'slate' }, { label: 'Precio', value: 'Gratis', tone: 'emerald' }, { label: 'Licencia', value: 'MIT', tone: 'slate' }, { label: 'Versión', value: '0.15.0', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'AI Notebookレビュー：NotebookLMの無料オープンソース代替', highlights: ['自分の文書とチャット', 'Ollamaでローカル実行', '無料・MITライセンス'],
    facts: [{ label: '対応', value: 'Mac、Windows', tone: 'slate' }, { label: '価格', value: '無料', tone: 'emerald' }, { label: 'ライセンス', value: 'MIT', tone: 'slate' }, { label: 'バージョン', value: '0.15.0', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'AI Notebook评测：免费开源的NotebookLM替代方案', highlights: ['与自己的文档对话', '通过Ollama本地运行', '免费、MIT许可证'],
    facts: [{ label: '平台', value: 'Mac、Windows', tone: 'slate' }, { label: '价格', value: '免费', tone: 'emerald' }, { label: '许可证', value: 'MIT', tone: 'slate' }, { label: '版本', value: '0.15.0', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do AI Notebook: alternativa gratuita e de código aberto ao NotebookLM', highlights: ['Chat com seus documentos', 'Local com Ollama', 'Grátis, licença MIT'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows', tone: 'slate' }, { label: 'Preço', value: 'Grátis', tone: 'emerald' }, { label: 'Licença', value: 'MIT', tone: 'slate' }, { label: 'Versão', value: '0.15.0', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة AI Notebook: بديل مجاني مفتوح المصدر لـ NotebookLM', highlights: ['دردشة مع مستنداتك', 'محلي عبر Ollama', 'مجاني بترخيص MIT'],
    facts: [{ label: 'المنصات', value: 'Mac وWindows', tone: 'slate' }, { label: 'السعر', value: 'مجاني', tone: 'emerald' }, { label: 'الترخيص', value: 'MIT', tone: 'slate' }, { label: 'الإصدار', value: '0.15.0', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'AI Notebook 리뷰: 무료 오픈소스 NotebookLM 대안', highlights: ['내 문서와 채팅', 'Ollama로 로컬 실행', '무료, MIT 라이선스'],
    facts: [{ label: '플랫폼', value: 'Mac, Windows', tone: 'slate' }, { label: '가격', value: '무료', tone: 'emerald' }, { label: '라이선스', value: 'MIT', tone: 'slate' }, { label: '버전', value: '0.15.0', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `ai-notebook-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `ai-notebook-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`  ${webpPath}`)
      generated++
    } catch (e) {
      console.error(`FAILED ${lang}:`, e.message)
    }
  }
  console.log(`done: ${generated}`)
}
main()
