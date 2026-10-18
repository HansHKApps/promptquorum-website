#!/usr/bin/env node
// Hero generator for smart-home-privacy-risks (all 9 locales). Sparse poster: localized title + <=3 short highlights.
// Needs the dev server: npx next dev --webpack --port 3437  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3437'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'Smart Home Privacy Risks: What Your Devices Know', highlights: ['Cloud voice and camera data', 'Alexa, Ring, Wyze incidents', 'Fix: process data locally'], footer: 'PromptQuorum Guide' },
  de: { title: 'Smart-Home-Datenschutzrisiken: Was Ihre Geräte wissen', highlights: ['Cloud-Sprach- und Kameradaten', 'Fälle: Alexa, Ring, Wyze', 'Lösung: lokal verarbeiten'], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Risques de confidentialité de la maison connectée', highlights: ['Voix et caméras dans le cloud', 'Cas : Alexa, Ring, Wyze', 'Solution : traitement local'], footer: 'Guide PromptQuorum' },
  es: { title: 'Riesgos de privacidad del smart home: qué saben tus dispositivos', highlights: ['Voz y cámaras en la nube', 'Casos: Alexa, Ring, Wyze', 'Solución: proceso local'], footer: 'Guía de PromptQuorum' },
  ja: { title: 'スマートホームのプライバシーリスク：機器は何を知るか', highlights: ['クラウドの音声とカメラ', 'Alexa・Ring・Wyzeの事例', '対策：ローカル処理'], footer: 'PromptQuorumガイド' },
  zh: { title: '智能家居隐私风险：你的设备知道什么', highlights: ['云端语音与摄像头数据', 'Alexa、Ring、Wyze事件', '对策：本地处理数据'], footer: 'PromptQuorum指南' },
  pt: { title: 'Riscos de privacidade da casa inteligente: o que seus dispositivos sabem', highlights: ['Voz e câmeras na nuvem', 'Casos: Alexa, Ring, Wyze', 'Solução: processar local'], footer: 'Guia PromptQuorum' },
  ar: { title: 'مخاطر خصوصية المنزل الذكي: ما تعرفه أجهزتك', highlights: ['بيانات الصوت والكاميرا السحابية', 'حوادث Alexa وRing وWyze', 'الحل: المعالجة المحلية'], footer: 'دليل PromptQuorum' },
  ko: { title: '스마트홈 개인정보 위험: 기기가 아는 것들', highlights: ['클라우드 음성·카메라 데이터', 'Alexa·Ring·Wyze 사례', '해법: 로컬 처리'], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `smart-home-privacy-risks-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, ...spec }) })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `smart-home-privacy-risks-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK ${lang} (${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) { console.error(`FAIL ${lang}: ${err.message}`); process.exitCode = 1 }
  }
  console.log(`Generated ${generated}/9`)
}
main()
