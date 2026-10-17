#!/usr/bin/env node
// Hero posters for easy-diffusion-review (9 locales). Run with the dev server up:
//   npx next dev --webpack --port 3451 && node scripts/gen-easy-diffusion-review-heroes.mjs
import fs from 'node:fs/promises'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3451'
const SPECS = {
  en: { title: 'Easy Diffusion Review: One-Click Stable Diffusion for PC and Mac', highlights: ['Free installer, browser UI', 'Windows, macOS and Linux', 'Runs on GPU or CPU'], facts: [{ value: 'Free' }, { value: '8 GB RAM' }], footer: 'PromptQuorum Guide' },
  de: { title: 'Easy Diffusion Review: Stable Diffusion per Klick für PC und Mac', highlights: ['Kostenloser Installer, Browser-UI', 'Windows, macOS und Linux', 'Läuft mit GPU oder CPU'], facts: [{ value: 'Kostenlos' }, { value: '8 GB RAM' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Easy Diffusion Review: Stable Diffusion en un clic pour PC et Mac', highlights: ['Installeur gratuit, interface web', 'Windows, macOS et Linux', 'Fonctionne sur GPU ou CPU'], facts: [{ value: 'Gratuit' }, { value: '8 Go de RAM' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Easy Diffusion Review: Stable Diffusion en un clic para PC y Mac', highlights: ['Instalador gratuito, interfaz web', 'Windows, macOS y Linux', 'Funciona con GPU o CPU'], facts: [{ value: 'Gratis' }, { value: '8 GB de RAM' }], footer: 'Guía de PromptQuorum' },
  pt: { title: 'Easy Diffusion Review: Stable Diffusion em um clique para PC e Mac', highlights: ['Instalador gratuito, interface web', 'Windows, macOS e Linux', 'Roda em GPU ou CPU'], facts: [{ value: 'Grátis' }, { value: '8 GB de RAM' }], footer: 'Guia PromptQuorum' },
  ja: { title: 'Easy Diffusion レビュー:PC・Mac向けワンクリックStable Diffusion', highlights: ['無料インストーラー、ブラウザUI', 'Windows・Mac・Linux対応', 'GPUでもCPUでも動作'], facts: [{ value: '無料' }, { value: 'RAM 8 GB' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'Easy Diffusion评测:PC和Mac上的一键Stable Diffusion', highlights: ['免费安装器，浏览器界面', '支持Windows、Mac、Linux', '可用显卡或CPU运行'], facts: [{ value: '免费' }, { value: '8 GB内存' }], footer: 'PromptQuorum 指南' },
  ar: { title: 'مراجعة Easy Diffusion: Stable Diffusion بنقرة واحدة للكمبيوتر وMac', highlights: ['مُثبّت مجاني وواجهة متصفح', 'Windows وmacOS وLinux', 'يعمل بالبطاقة أو المعالج'], facts: [{ value: 'مجاني' }, { value: '8 GB RAM' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'Easy Diffusion 리뷰: PC와 Mac용 원클릭 Stable Diffusion', highlights: ['무료 설치 도구, 브라우저 UI', 'Windows·Mac·Linux 지원', 'GPU나 CPU로 실행'], facts: [{ value: '무료' }, { value: 'RAM 8 GB' }], footer: 'PromptQuorum 가이드' },
}
// Arabic: wrap Latin/number runs in LTR isolates so Satori's bidi keeps word order and spaces.
const iso = (t) => t.replace(/[A-Za-z0-9][A-Za-z0-9 .:+\-]*[A-Za-z0-9]|[A-Za-z0-9]/g, (m) => `\u2066${m}\u2069`)
SPECS.ar = { ...SPECS.ar, title: iso(SPECS.ar.title), highlights: SPECS.ar.highlights.map(iso), facts: SPECS.ar.facts.map((f) => ({ value: iso(f.value) })) }
for (const [lang, spec] of Object.entries(SPECS)) {
  if (process.env.ONLY && process.env.ONLY !== lang) continue
  const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, ...spec }) })
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const out = `public/images/easy-diffusion-review-hero-${lang}.webp`
  await sharp(buf).webp({ lossless: true, effort: 6 }).toFile(out)
  console.log(out)
}
