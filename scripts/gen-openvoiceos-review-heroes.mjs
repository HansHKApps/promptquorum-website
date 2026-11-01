#!/usr/bin/env node
// Hero generator for openvoiceos-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/openvoiceos.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3435  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3435'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: "Open Voice OS Review: Open-Source Voice Assistant for Linux and Raspberry Pi",
    highlights: ["Runs on Linux, Pi and Docker", "Default speech needs internet", "Optional LLM fallback"],
    facts: [
      { label: "Platforms", value: "Linux, Pi, Docker", tone: 'slate' },
      { label: "Price", value: "Free", tone: 'emerald' },
      { label: "License", value: "Apache-2.0", tone: 'slate' },
      { label: "Version", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "PromptQuorum Guide",
  },
  de: {
    title: "Open-Voice-OS-Rezension: quelloffener Sprachassistent für Linux und Raspberry Pi",
    highlights: ["Läuft auf Linux, Pi, Docker", "Standard-Spracherkennung online", "Optionaler LLM-Fallback"],
    facts: [
      { label: "Plattformen", value: "Linux, Pi, Docker", tone: 'slate' },
      { label: "Preis", value: "Kostenlos", tone: 'emerald' },
      { label: "Lizenz", value: "Apache-2.0", tone: 'slate' },
      { label: "Version", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "PromptQuorum-Leitfaden",
  },
  fr: {
    title: "Avis Open Voice OS : assistant vocal open source pour Linux et Raspberry Pi",
    highlights: ["Linux, Pi et Docker", "Reconnaissance par défaut en ligne", "Repli LLM en option"],
    facts: [
      { label: "Plateformes", value: "Linux, Pi, Docker", tone: 'slate' },
      { label: "Prix", value: "Gratuit", tone: 'emerald' },
      { label: "Licence", value: "Apache-2.0", tone: 'slate' },
      { label: "Version", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "Guide PromptQuorum",
  },
  es: {
    title: "Reseña de Open Voice OS: asistente de voz de código abierto para Linux y Raspberry Pi",
    highlights: ["Linux, Pi y Docker", "Voz por defecto con internet", "Respaldo LLM opcional"],
    facts: [
      { label: "Plataformas", value: "Linux, Pi, Docker", tone: 'slate' },
      { label: "Precio", value: "Gratis", tone: 'emerald' },
      { label: "Licencia", value: "Apache-2.0", tone: 'slate' },
      { label: "Versión", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "Guía de PromptQuorum",
  },
  ja: {
    title: "Open Voice OS レビュー：LinuxとRaspberry Pi向けのオープンソース音声アシスタント",
    highlights: ["Linux・Pi・Dockerで動作", "既定の認識はネット必須", "LLMフォールバックは任意"],
    facts: [
      { label: "対応", value: "Linux・Pi・Docker", tone: 'slate' },
      { label: "価格", value: "無料", tone: 'emerald' },
      { label: "ライセンス", value: "Apache-2.0", tone: 'slate' },
      { label: "バージョン", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "PromptQuorumガイド",
  },
  zh: {
    title: "Open Voice OS 评测：适用于 Linux 和 Raspberry Pi 的开源语音助手",
    highlights: ["支持 Linux、Pi、Docker", "默认语音识别需联网", "LLM 后备可选"],
    facts: [
      { label: "平台", value: "Linux、Pi、Docker", tone: 'slate' },
      { label: "价格", value: "免费", tone: 'emerald' },
      { label: "许可证", value: "Apache-2.0", tone: 'slate' },
      { label: "版本", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "PromptQuorum 指南",
  },
  pt: {
    title: "Análise do Open Voice OS: assistente de voz de código aberto para Linux e Raspberry Pi",
    highlights: ["Linux, Pi e Docker", "Voz padrão exige internet", "Fallback de LLM opcional"],
    facts: [
      { label: "Plataformas", value: "Linux, Pi, Docker", tone: 'slate' },
      { label: "Preço", value: "Grátis", tone: 'emerald' },
      { label: "Licença", value: "Apache-2.0", tone: 'slate' },
      { label: "Versão", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "Guia PromptQuorum",
  },
  ar: {
    title: "مراجعة Open Voice OS: مساعد صوتي مفتوح المصدر",
    highlights: ["يعمل على Linux، Pi، Docker", "التعرف الافتراضي يحتاج إنترنت", "نموذج احتياطي اختياري"],
    facts: [
      { label: "المنصات", value: "Linux، Pi، Docker", tone: 'slate' },
      { label: "السعر", value: "مجاني", tone: 'emerald' },
      { label: "الترخيص", value: "Apache-2.0", tone: 'slate' },
      { label: "الإصدار", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "دليل PromptQuorum",
  },
  ko: {
    title: "Open Voice OS 리뷰: Linux와 Raspberry Pi용 오픈소스 음성 비서",
    highlights: ["Linux·Pi·Docker에서 동작", "기본 인식은 인터넷 필요", "LLM 폴백은 선택 사항"],
    facts: [
      { label: "플랫폼", value: "Linux, Pi, Docker", tone: 'slate' },
      { label: "가격", value: "무료", tone: 'emerald' },
      { label: "라이선스", value: "Apache-2.0", tone: 'slate' },
      { label: "버전", value: "v11.0.0", tone: 'amber' },
    ],
    footer: "PromptQuorum 가이드",
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `openvoiceos-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `openvoiceos-review-hero-${lang}.png`)
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
