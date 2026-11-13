#!/usr/bin/env node
// Hero generator for the two mobile platform pillars (all 9 locales each). Sparse poster: short localized title + 3 short highlights.
// Needs the dev server: npx next dev --webpack --port 3462  (HERO_BASE overrides). ONLY=android|iphone, LANGS=de,fr to restrict.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
const BASE = process.env.HERO_BASE || 'http://localhost:3462'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const FOOTER = { en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum', ja: 'PromptQuorumガイド', zh: 'PromptQuorum 指南', es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드' }
const SPECS = {
  'local-ai-on-android-guide': {
    en: ['Local AI on Android in 2026', ['What runs offline', 'What does not', 'RAM and chip limits']],
    de: ['Lokale KI auf Android 2026', ['Was offline läuft', 'Was nicht geht', 'RAM- und Chip-Grenzen']],
    fr: ['IA locale sur Android en 2026', ['Ce qui marche hors ligne', 'Ce qui échoue', 'Limites RAM et puce']],
    ja: ['2026年のAndroidローカルAI', ['オフラインでできること', 'できないこと', 'RAMとチップの限界']],
    zh: ['2026年安卓本地AI', ['离线能做什么', '不能做什么', '内存与芯片限制']],
    es: ['IA local en Android en 2026', ['Qué funciona sin conexión', 'Qué no funciona', 'Límites de RAM y chip']],
    pt: ['IA local no Android em 2026', ['O que roda offline', 'O que não roda', 'Limites de RAM e chip']],
    ar: ['الذكاء الاصطناعي المحلي على Android في 2026', ['ما يعمل دون اتصال', 'ما لا يعمل', 'حدود الذاكرة والشريحة']],
    ko: ['2026년 Android 로컬 AI', ['오프라인에서 되는 것', '안 되는 것', 'RAM·칩 한계']],
  },
  'local-ai-on-iphone-guide': {
    en: ['Local AI on iPhone in 2026', ['What runs offline', 'App Store limits', 'RAM and chip tiers']],
    de: ['Lokale KI auf dem iPhone 2026', ['Was offline läuft', 'App-Store-Grenzen', 'RAM- und Chip-Stufen']],
    fr: ['IA locale sur iPhone en 2026', ['Ce qui marche hors ligne', 'Limites de l’App Store', 'Paliers de RAM et puce']],
    ja: ['2026年のiPhoneローカルAI', ['オフラインでできること', 'App Storeの制限', 'RAMとチップの段階']],
    zh: ['2026年iPhone本地AI', ['离线能做什么', 'App Store限制', '内存与芯片档位']],
    es: ['IA local en iPhone en 2026', ['Qué funciona sin conexión', 'Límites de la App Store', 'Niveles de RAM y chip']],
    pt: ['IA local no iPhone em 2026', ['O que roda offline', 'Limites da App Store', 'Níveis de RAM e chip']],
    ar: ['الذكاء الاصطناعي المحلي على iPhone في 2026', ['ما يعمل دون اتصال', 'قيود App Store', 'فئات الذاكرة والشريحة']],
    ko: ['2026년 iPhone 로컬 AI', ['오프라인에서 되는 것', 'App Store 제한', 'RAM·칩 등급']],
  },
}
let generated = 0
for (const [slug, langs] of Object.entries(SPECS)) {
  if (process.env.ONLY && !slug.includes(process.env.ONLY)) continue
  for (const [lang, [title, highlights]] of Object.entries(langs)) {
    if (process.env.LANGS && !process.env.LANGS.split(',').includes(lang)) continue
    const webpPath = path.join(IMAGES_DIR, `${slug}-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, title, highlights, footer: FOOTER[lang] }) })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const pngPath = path.join(IMAGES_DIR, `${slug}-hero-${lang}.png`)
      fs.writeFileSync(pngPath, Buffer.from(await res.arrayBuffer()))
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log('  ' + webpPath); generated++
    } catch (e) { console.error(`FAILED ${slug} ${lang}:`, e.message) }
  }
}
console.log(`done: ${generated}`)
