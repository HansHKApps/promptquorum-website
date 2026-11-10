#!/usr/bin/env node
// Hero generator for stratosort-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/stratosort.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3441  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3441'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'StratoSort Review: Local AI File Organizer for Mac, Windows and Linux', highlights: ['Local llama.cpp models', 'Free for personal use', 'Review and undo every move'],
    facts: [{ label: 'Platforms', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Price', value: 'Free, noncommercial', tone: 'emerald' }, { label: 'License', value: 'PolyForm NC', tone: 'slate' }, { label: 'Version', value: '5.1.2', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'StratoSort Rezension: Lokaler KI-Dateiorganizer für Mac, Windows und Linux', highlights: ['Lokale llama.cpp-Modelle', 'Gratis für private Nutzung', 'Jede Verschiebung prüfbar'],
    facts: [{ label: 'Plattformen', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Preis', value: 'Gratis, nicht kommerziell', tone: 'emerald' }, { label: 'Lizenz', value: 'PolyForm NC', tone: 'slate' }, { label: 'Version', value: '5.1.2', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de StratoSort : organiseur de fichiers IA local pour Mac, Windows et Linux', highlights: ['Modèles llama.cpp locaux', 'Gratuit en usage personnel', 'Chaque déplacement annulable'],
    facts: [{ label: 'Plateformes', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Prix', value: 'Gratuit, non commercial', tone: 'emerald' }, { label: 'Licence', value: 'PolyForm NC', tone: 'slate' }, { label: 'Version', value: '5.1.2', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de StratoSort: organizador de archivos con IA local para Mac, Windows y Linux', highlights: ['Modelos llama.cpp locales', 'Gratis para uso personal', 'Cada cambio se puede deshacer'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Precio', value: 'Gratis, no comercial', tone: 'emerald' }, { label: 'Licencia', value: 'PolyForm NC', tone: 'slate' }, { label: 'Versión', value: '5.1.2', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  ja: { title: 'StratoSortレビュー：Mac・Windows・Linux向けローカルAIファイル整理', highlights: ['ローカルllama.cppモデル', '個人利用は無料', '移動は確認・取り消し可'],
    facts: [{ label: '対応', value: 'Mac・Windows・Linux', tone: 'slate' }, { label: '価格', value: '非商用は無料', tone: 'emerald' }, { label: 'ライセンス', value: 'PolyForm NC', tone: 'slate' }, { label: 'バージョン', value: '5.1.2', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'StratoSort评测：Mac、Windows、Linux本地AI文件整理', highlights: ['本地llama.cpp模型', '个人使用免费', '每次移动可审阅撤销'],
    facts: [{ label: '平台', value: 'Mac、Windows、Linux', tone: 'slate' }, { label: '价格', value: '非商业免费', tone: 'emerald' }, { label: '许可证', value: 'PolyForm NC', tone: 'slate' }, { label: '版本', value: '5.1.2', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  pt: { title: 'Análise do StratoSort: organizador de arquivos com IA local para Mac, Windows e Linux', highlights: ['Modelos llama.cpp locais', 'Grátis para uso pessoal', 'Cada mudança pode ser desfeita'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Preço', value: 'Grátis, não comercial', tone: 'emerald' }, { label: 'Licença', value: 'PolyForm NC', tone: 'slate' }, { label: 'Versão', value: '5.1.2', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة StratoSort: منظّم ملفات محلي بالذكاء الاصطناعي', highlights: ['نماذج llama.cpp محلية', 'مجاني للاستخدام الشخصي', 'كل نقل قابل للمراجعة والتراجع'],
    facts: [{ label: 'المنصات', value: 'Mac · Windows · Linux', tone: 'slate' }, { label: 'السعر', value: 'مجاني لغير التجاري', tone: 'emerald' }, { label: 'الترخيص', value: 'PolyForm NC', tone: 'slate' }, { label: 'الإصدار', value: '5.1.2', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'StratoSort 리뷰: Mac·Windows·Linux용 로컬 AI 파일 정리 앱', highlights: ['로컬 llama.cpp 모델', '개인 사용 무료', '모든 이동 검토·되돌리기'],
    facts: [{ label: '플랫폼', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: '가격', value: '비상업용 무료', tone: 'emerald' }, { label: '라이선스', value: 'PolyForm NC', tone: 'slate' }, { label: '버전', value: '5.1.2', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `stratosort-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `stratosort-review-hero-${lang}.png`)
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
