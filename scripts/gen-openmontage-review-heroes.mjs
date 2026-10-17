#!/usr/bin/env node
// Hero generator for openmontage-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/openmontage.ts (platforms, price, license, last update).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3433'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {
    title: 'OpenMontage Review: Open-Source Agentic Video Production With Your AI Coding Assistant',
    highlights: ['Your AI assistant produces the video', 'Free software, cloud providers extra', 'Terminal setup, no installer'],
    facts: [
      { label: 'Platforms', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Price', value: 'Free + provider costs', tone: 'slate' },
      { label: 'License', value: 'AGPL-3.0', tone: 'slate' },
      { label: 'Last update', value: '2026-10-16', tone: 'slate' },
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'OpenMontage Review: Open-Source-Videoproduktion mit Ihrem KI-Coding-Assistenten',
    highlights: ['Ihr KI-Assistent produziert das Video', 'Software gratis, Cloud-Anbieter extra', 'Terminal-Setup, kein Installer'],
    facts: [
      { label: 'Plattformen', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preis', value: 'Gratis + Anbieterkosten', tone: 'slate' },
      { label: 'Lizenz', value: 'AGPL-3.0', tone: 'slate' },
      { label: 'Letztes Update', value: '16.10.2026', tone: 'slate' },
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Test d’OpenMontage : production vidéo agentique open source avec votre assistant de code IA',
    highlights: ['Votre assistant IA produit la vidéo', 'Logiciel gratuit, fournisseurs cloud en plus', 'Installation par terminal'],
    facts: [
      { label: 'Plateformes', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Prix', value: 'Gratuit + coûts fournisseurs', tone: 'slate' },
      { label: 'Licence', value: 'AGPL-3.0', tone: 'slate' },
      { label: 'Dernière MàJ', value: '16/10/2026', tone: 'slate' },
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Reseña de OpenMontage: producción de vídeo agéntica de código abierto con tu asistente de IA',
    highlights: ['Tu asistente de IA produce el vídeo', 'Software gratis, proveedores cloud aparte', 'Instalación por terminal'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Precio', value: 'Gratis + costes de proveedores', tone: 'slate' },
      { label: 'Licencia', value: 'AGPL-3.0', tone: 'slate' },
      { label: 'Última act.', value: '16/10/2026', tone: 'slate' },
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'OpenMontageレビュー：AIコーディングアシスタントで動かすオープンソースの動画制作',
    highlights: ['AIアシスタントが動画を制作', 'ソフトは無料、クラウドは別料金', 'ターミナルで導入、インストーラーなし'],
    facts: [
      { label: '対応', value: 'Windows・macOS・Linux', tone: 'slate' },
      { label: '価格', value: '無料＋提供元の費用', tone: 'slate' },
      { label: 'ライセンス', value: 'AGPL-3.0', tone: 'slate' },
      { label: '最終更新', value: '2026-10-16', tone: 'slate' },
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'OpenMontage评测：由AI编程助手驱动的开源智能体视频制作系统',
    highlights: ['AI助手负责制作视频', '软件免费，云服务另计', '终端安装，无安装程序'],
    facts: [
      { label: '平台', value: 'Windows、macOS、Linux', tone: 'slate' },
      { label: '价格', value: '免费+服务商费用', tone: 'slate' },
      { label: '许可证', value: 'AGPL-3.0', tone: 'slate' },
      { label: '最后更新', value: '2026-10-16', tone: 'slate' },
    ],
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do OpenMontage: produção de vídeo agêntica de código aberto com seu assistente de IA',
    highlights: ['Seu assistente de IA produz o vídeo', 'Software grátis, provedores na nuvem à parte', 'Instalação pelo terminal'],
    facts: [
      { label: 'Plataformas', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: 'Preço', value: 'Grátis + custos de provedores', tone: 'slate' },
      { label: 'Licença', value: 'AGPL-3.0', tone: 'slate' },
      { label: 'Última atualização', value: '16/10/2026', tone: 'slate' },
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة OpenMontage: إنتاج فيديو بالوكلاء مفتوح المصدر مع مساعد البرمجة بالذكاء الاصطناعي',
    highlights: ['مساعد الذكاء الاصطناعي ينتج الفيديو', 'البرنامج مجاني والخدمات السحابية إضافية', 'تثبيت عبر الطرفية دون مثبّت'],
    facts: [
      { label: 'المنصات', value: 'Windows وmacOS وLinux', tone: 'slate' },
      { label: 'السعر', value: 'مجاني + تكاليف المزوّدين', tone: 'slate' },
      { label: 'الترخيص', value: 'AGPL-3.0', tone: 'slate' },
      { label: 'آخر تحديث', value: '2026-10-16', tone: 'slate' },
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'OpenMontage 리뷰: AI 코딩 어시스턴트로 구동하는 오픈소스 에이전트형 영상 제작',
    highlights: ['AI 어시스턴트가 영상을 제작', '소프트웨어 무료, 클라우드는 별도', '터미널로 설치, 설치 프로그램 없음'],
    facts: [
      { label: '플랫폼', value: 'Windows, macOS, Linux', tone: 'slate' },
      { label: '가격', value: '무료 + 제공업체 비용', tone: 'slate' },
      { label: '라이선스', value: 'AGPL-3.0', tone: 'slate' },
      { label: '마지막 업데이트', value: '2026-10-16', tone: 'slate' },
    ],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    const webpPath = path.join(IMAGES_DIR, `openmontage-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `openmontage-review-hero-${lang}.png`)
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
