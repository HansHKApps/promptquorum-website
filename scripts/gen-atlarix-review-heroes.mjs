#!/usr/bin/env node
// Hero generator for atlarix-review (all 9 locales), regenerated 2026-11-07 for v15.13.3: the old posters baked in
// "100% local / nothing leaves the machine" and the OpenAI data-sharing line, both retired by the founder's update.
// Sparse poster: localized title + <=3 short highlights + facts strip (src/lib/power-local-llm/apps/atlarix.ts).
// Needs the dev server: npx next dev --webpack --port 3441  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3441'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const f = (label, value, tone) => ({ label, value, tone })

const SPECS = {
  en: { title: 'Atlarix Review: A Free, Local-First AI Coding Agent', highlights: ['Desktop app, editor extension, CLI', 'Local models via Ollama or LM Studio', 'Free tier, Pro $19/month'],
    facts: [f('Platforms', 'macOS, Windows, Linux', 'slate'), f('Price', 'Free, Pro $19/mo', 'emerald'), f('License', 'Proprietary (EULA)', 'slate'), f('Version', '15.13.3', 'amber')], footer: 'PromptQuorum Guide' },
  de: { title: 'Atlarix Review: Ein kostenloser, lokal-first KI-Coding-Agent', highlights: ['Desktop-App, Editor-Erweiterung, CLI', 'Lokale Modelle über Ollama oder LM Studio', 'Gratis-Stufe, Pro 19 $/Monat'],
    facts: [f('Plattformen', 'macOS, Windows, Linux', 'slate'), f('Preis', 'Gratis, Pro 19 $/Monat', 'emerald'), f('Lizenz', 'Proprietär (EULA)', 'slate'), f('Version', '15.13.3', 'amber')], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Atlarix : un agent de codage IA gratuit et local-first', highlights: ['Appli de bureau, extension d’éditeur, CLI', 'Modèles locaux via Ollama ou LM Studio', 'Offre gratuite, Pro 19 $/mois'],
    facts: [f('Plateformes', 'macOS, Windows, Linux', 'slate'), f('Prix', 'Gratuit, Pro 19 $/mois', 'emerald'), f('Licence', 'Propriétaire (EULA)', 'slate'), f('Version', '15.13.3', 'amber')], footer: 'Guide PromptQuorum' },
  es: { title: 'Atlarix: un agente de codificación IA gratuito y local-first', highlights: ['App de escritorio, extensión de editor, CLI', 'Modelos locales con Ollama o LM Studio', 'Plan gratis, Pro 19 $/mes'],
    facts: [f('Plataformas', 'macOS, Windows, Linux', 'slate'), f('Precio', 'Gratis, Pro 19 $/mes', 'emerald'), f('Licencia', 'Propietaria (EULA)', 'slate'), f('Versión', '15.13.3', 'amber')], footer: 'Guía de PromptQuorum' },
  ja: { title: 'Atlarixレビュー:無料でローカルファーストなAIコーディングエージェント', highlights: ['デスクトップ、エディタ拡張、CLI', 'OllamaやLM Studioでローカル実行', '無料プランあり・Pro月19ドル'],
    facts: [f('対応', 'macOS・Windows・Linux', 'slate'), f('価格', '無料／Pro 月19ドル', 'emerald'), f('ライセンス', 'プロプライエタリ(EULA)', 'slate'), f('バージョン', '15.13.3', 'amber')], footer: 'PromptQuorumガイド' },
  zh: { title: 'Atlarix评测:免费的本地优先AI编程代理', highlights: ['桌面应用、编辑器扩展、CLI', '通过Ollama或LM Studio用本地模型', '有免费方案，Pro每月$19'],
    facts: [f('平台', 'macOS、Windows、Linux', 'slate'), f('价格', '免费；Pro 每月 $19', 'emerald'), f('许可证', '专有（EULA）', 'slate'), f('版本', '15.13.3', 'amber')], footer: 'PromptQuorum 指南' },
  pt: { title: 'Atlarix: um agente de codificação de IA gratuito e local-first', highlights: ['App de desktop, extensão de editor, CLI', 'Modelos locais com Ollama ou LM Studio', 'Plano grátis, Pro US$ 19/mês'],
    facts: [f('Plataformas', 'macOS, Windows, Linux', 'slate'), f('Preço', 'Grátis, Pro US$ 19/mês', 'emerald'), f('Licença', 'Proprietária (EULA)', 'slate'), f('Versão', '15.13.3', 'amber')], footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Atlarix: وكيل برمجة بالذكاء الاصطناعي مجاني ومحلي أولًا', highlights: ['تطبيق سطح مكتب وإضافة محرر وCLI', 'نماذج محلية عبر Ollama أو LM Studio', 'خطة مجانية و Pro بـ 19 دولارًا شهريًا'],
    facts: [f('المنصات', 'macOS و Windows و Linux', 'slate'), f('السعر', 'مجاني، و Pro بـ 19 دولارًا/شهر', 'emerald'), f('الترخيص', 'مملوك (EULA)', 'slate'), f('الإصدار', '15.13.3', 'amber')], footer: 'دليل PromptQuorum' },
  ko: { title: 'Atlarix 리뷰: 무료 로컬 우선 AI 코딩 에이전트', highlights: ['데스크톱 앱, 에디터 확장, CLI', 'Ollama·LM Studio로 로컬 모델', '무료 플랜, Pro 월 $19'],
    facts: [f('플랫폼', 'macOS, Windows, Linux', 'slate'), f('가격', '무료, Pro 월 $19', 'emerald'), f('라이선스', '독점(EULA)', 'slate'), f('버전', '15.13.3', 'amber')], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `atlarix-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `atlarix-review-hero-${lang}.png`)
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
