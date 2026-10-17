#!/usr/bin/env node
// Hero generator for ai-cutoutwerk-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/ai-cutoutwerk.ts (platforms, price, license, last update).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3436'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: 'AI CutoutWerk Review: Offline AI Background Remover for iPhone, iPad and Mac',
    highlights: ['Removes backgrounds on-device', 'Free download + in-app purchases', 'No update since Feb 2026'],
    facts: [
      { label: 'Platforms', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Price', value: 'Free + in-app', tone: 'amber' },
      { label: 'License', value: 'Closed source', tone: 'slate' },
      { label: 'Last update', value: '2026-02-16', tone: 'amber' },
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'AI CutoutWerk Review: Offline-KI-Freisteller für iPhone, iPad und Mac',
    highlights: ['Entfernt Hintergründe auf dem Gerät', 'Gratis + In-App-Käufe', 'Kein Update seit Feb. 2026'],
    facts: [
      { label: 'Plattformen', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Preis', value: 'Gratis + In-App', tone: 'amber' },
      { label: 'Lizenz', value: 'Closed source', tone: 'slate' },
      { label: 'Letztes Update', value: '16.02.2026', tone: 'amber' },
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: "Test d'AI CutoutWerk : détourage IA hors ligne pour iPhone, iPad et Mac",
    highlights: ["Détoure sur l'appareil", 'Gratuit + achats intégrés', 'Pas de mise à jour depuis févr. 2026'],
    facts: [
      { label: 'Plateformes', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Prix', value: 'Gratuit + achats', tone: 'amber' },
      { label: 'Licence', value: 'Closed source', tone: 'slate' },
      { label: 'Dernière MàJ', value: '16/02/2026', tone: 'amber' },
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de AI CutoutWerk: recorte de fondo con IA sin conexión para iPhone, iPad y Mac',
    highlights: ['Quita fondos en el dispositivo', 'Gratis + compras en la app', 'Sin actualizar desde feb. 2026'],
    facts: [
      { label: 'Plataformas', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Precio', value: 'Gratis + compras', tone: 'amber' },
      { label: 'Licencia', value: 'Closed source', tone: 'slate' },
      { label: 'Última act.', value: '16/02/2026', tone: 'amber' },
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'AI CutoutWerkレビュー：iPhone・iPad・Mac向けオフラインAI切り抜きアプリ',
    highlights: ['端末内で背景を削除', '無料＋アプリ内課金', '2026年2月から更新なし'],
    facts: [
      { label: '対応', value: 'iPhone・iPad・Mac', tone: 'slate' },
      { label: '価格', value: '無料＋アプリ内課金', tone: 'amber' },
      { label: 'ライセンス', value: 'Closed source', tone: 'slate' },
      { label: '最終更新', value: '2026-02-16', tone: 'amber' },
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'AI CutoutWerk评测：适用于iPhone、iPad和Mac的离线AI抠图应用',
    highlights: ['设备端去除背景', '免费+应用内购买', '2026年2月后未更新'],
    facts: [
      { label: '平台', value: 'iPhone、iPad、Mac', tone: 'slate' },
      { label: '价格', value: '免费+应用内购买', tone: 'amber' },
      { label: '许可证', value: 'Closed source', tone: 'slate' },
      { label: '最后更新', value: '2026-02-16', tone: 'amber' },
    ],
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do AI CutoutWerk: recorte de fundo com IA offline para iPhone, iPad e Mac',
    highlights: ['Remove fundos no dispositivo', 'Grátis + compras no app', 'Sem atualização desde fev. 2026'],
    facts: [
      { label: 'Plataformas', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: 'Preço', value: 'Grátis + compras', tone: 'amber' },
      { label: 'Licença', value: 'Closed source', tone: 'slate' },
      { label: 'Última atualização', value: '16/02/2026', tone: 'amber' },
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة AI CutoutWerk: إزالة الخلفية بالذكاء الاصطناعي دون اتصال على iPhone وiPad وMac',
    highlights: ['يزيل الخلفيات على الجهاز', 'مجاني + شراء داخل التطبيق', 'لا تحديث منذ فبراير 2026'],
    facts: [
      { label: 'المنصات', value: 'iPhone وiPad وMac', tone: 'slate' },
      { label: 'السعر', value: 'مجاني + شراء داخلي', tone: 'amber' },
      { label: 'الترخيص', value: 'Closed source', tone: 'slate' },
      { label: 'آخر تحديث', value: '2026-02-16', tone: 'amber' },
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'AI CutoutWerk 리뷰: iPhone, iPad, Mac용 오프라인 AI 배경 제거 앱',
    highlights: ['기기에서 배경 제거', '무료 + 인앱 구입', '2026년 2월 이후 업데이트 없음'],
    facts: [
      { label: '플랫폼', value: 'iPhone, iPad, Mac', tone: 'slate' },
      { label: '가격', value: '무료 + 인앱 구입', tone: 'amber' },
      { label: '라이선스', value: 'Closed source', tone: 'slate' },
      { label: '마지막 업데이트', value: '2026-02-16', tone: 'amber' },
    ],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    const webpPath = path.join(IMAGES_DIR, `ai-cutoutwerk-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `ai-cutoutwerk-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${lang} (${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      process.exitCode = 1
    }
  }
  console.log(`Generated ${generated}/9`)
}
main()
