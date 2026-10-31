#!/usr/bin/env node
// Regenerates the localized hero images for balcony-solar-greece-status-2027 after the
// 2026-10-31 title shortening (7 locales; en and ko keep their titles, so their heroes are untouched).
// Posts the already-published per-locale title + three short highlights to /api/hero-image and
// saves public/images/balcony-solar-greece-status-2027-overview-hero-{lang}.webp.
// Usage: HERO_BASE=http://localhost:<port> node scripts/gen-balcony-solar-greece-heroes.mjs   (ONLY=de to run one locale)

import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3055'
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images')

const SPECS = {
  de: {
    title: 'Balkonkraftwerk in Griechenland legal? Status 2027',
    highlights: ['Steckergeräte bis 800 W', 'Nur Eigenverbrauch, keine Einspeisung', 'Meldung über DEDDIE-Portal'],
  },
  es: {
    title: 'Energía solar de balcón en Grecia: ¿legal? Estado 2027',
    highlights: ['Kits enchufables hasta 800 W', 'Solo autoconsumo, sin inyección', 'Aviso en el portal de DEDDIE'],
  },
  fr: {
    title: 'Solaire de balcon en Grèce : légal ? Situation 2027',
    highlights: ["Kits enfichables jusqu'à 800 W", 'Autoconsommation, zéro injection', 'Déclaration via le portail DEDDIE'],
  },
  pt: {
    title: 'Energia solar de varanda na Grécia é legal? Status 2027',
    highlights: ['Kits plug-in de até 800 W', 'Só autoconsumo, sem exportação', 'Aviso no portal da DEDDIE'],
  },
  ar: {
    title: 'هل الطاقة الشمسية للشرفات قانونية في اليونان؟ 2027',
    highlights: ['أنظمة قابلة للتوصيل حتى 800 واط', 'استهلاك ذاتي فقط، دون تصدير', 'إخطار عبر بوابة DEDDIE'],
  },
  ja: {
    title: 'ギリシャでバルコニー太陽光は合法か？2027年ステータスレポート',
    highlights: ['800Wまでのプラグイン式', '自家消費のみ、逆潮流なし', 'DEDDIEポータルで届出'],
  },
  zh: {
    title: '希腊阳台光伏合法吗？2027年现状：规则、限值与申报期限',
    highlights: ['最高800瓦插电式系统', '仅限自发自用，禁止输出', '通过DEDDIE门户申报'],
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `balcony-solar-greece-status-2027-overview-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `balcony-solar-greece-status-2027-overview-hero-${lang}.png`)
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
