#!/usr/bin/env node
// One-off hero generator for radiant-canvas (all 9 locales).
// Facts strip: RAM (16GB min), price (freemium), license (Closed source), platforms (macOS)
// — pulled from src/lib/power-local-llm/apps/radiant-canvas.ts, per CLAUDE.md's mandatory
// FeatureAppPost hero facts-strip rule. Titles/subtitles reuse the article's own EN/locale
// wording (markdown-stripped), per CLAUDE.md's hero-image process.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3491'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const FACTS = {
  en: [
    { label: 'RAM', value: 'Min. 16 GB RAM', tone: 'slate' },
    { label: 'Price', value: 'Free + paid tier', tone: 'amber' },
    { label: 'License', value: 'Closed source', tone: 'slate' },
    { label: 'Platforms', value: 'macOS', tone: 'slate' },
  ],
  de: [
    { label: 'RAM', value: 'Mind. 16 GB RAM', tone: 'slate' },
    { label: 'Preis', value: 'Kostenlos + kostenpflichtige Stufe', tone: 'amber' },
    { label: 'Lizenz', value: 'Closed source', tone: 'slate' },
    { label: 'Plattformen', value: 'macOS', tone: 'slate' },
  ],
  fr: [
    { label: 'RAM', value: '16 Go de RAM min.', tone: 'slate' },
    { label: 'Prix', value: 'Gratuit + offre payante', tone: 'amber' },
    { label: 'Licence', value: 'Closed source', tone: 'slate' },
    { label: 'Plateformes', value: 'macOS', tone: 'slate' },
  ],
  es: [
    { label: 'RAM', value: 'Mín. 16 GB de RAM', tone: 'slate' },
    { label: 'Precio', value: 'Gratis + plan de pago', tone: 'amber' },
    { label: 'Licencia', value: 'Closed source', tone: 'slate' },
    { label: 'Plataformas', value: 'macOS', tone: 'slate' },
  ],
  ja: [
    { label: 'RAM', value: '最低16GBのRAM', tone: 'slate' },
    { label: '価格', value: '無料＋有料プラン', tone: 'amber' },
    { label: 'ライセンス', value: 'Closed source', tone: 'slate' },
    { label: '対応プラットフォーム', value: 'macOS', tone: 'slate' },
  ],
  zh: [
    { label: 'RAM', value: '最低16GB内存', tone: 'slate' },
    { label: '价格', value: '免费+付费版', tone: 'amber' },
    { label: '许可证', value: 'Closed source', tone: 'slate' },
    { label: '支持平台', value: 'macOS', tone: 'slate' },
  ],
  pt: [
    { label: 'RAM', value: 'Mín. 16 GB de RAM', tone: 'slate' },
    { label: 'Preço', value: 'Grátis + plano pago', tone: 'amber' },
    { label: 'Licença', value: 'Closed source', tone: 'slate' },
    { label: 'Plataformas', value: 'macOS', tone: 'slate' },
  ],
  ar: [
    { label: 'الذاكرة', value: 'الحد الأدنى 16 جيجابايت رام', tone: 'slate' },
    { label: 'السعر', value: 'مجاني + خطة مدفوعة', tone: 'amber' },
    { label: 'الترخيص', value: 'Closed source', tone: 'slate' },
    { label: 'المنصات', value: 'macOS', tone: 'slate' },
  ],
  ko: [
    { label: 'RAM', value: '최소 16GB RAM', tone: 'slate' },
    { label: '가격', value: '무료 + 유료 요금제', tone: 'amber' },
    { label: '라이선스', value: 'Closed source', tone: 'slate' },
    { label: '플랫폼', value: 'macOS', tone: 'slate' },
  ],
}

const SPECS = {
  en: {
    title: 'Radiant Canvas Review (2026): Local AI Image Generation for Mac',
    subtitle:
      'Radiant Canvas is a macOS application built by independent developer Arnold Sallay under Radiant Bear Games, that generates and edits images entirely on an Apple silicon Mac using seven downloadable AI model families. It is distributed exclusively through the Mac App Store, with a free base tier and a Radiant Canvas PRO tier sold as monthly, yearly, or lifetime in-app purchases.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Radiant Canvas Review (2026): Lokale KI-Bilderzeugung für Mac',
    subtitle:
      'Radiant Canvas ist eine macOS-Anwendung des unabhängigen Entwicklers Arnold Sallay unter dem Label Radiant Bear Games, die Bilder vollständig lokal auf einem Apple-Silicon-Mac mit sieben herunterladbaren KI-Modellfamilien erzeugt und bearbeitet. Die App wird ausschließlich über den Mac App Store vertrieben, mit einer kostenlosen Basisstufe und einer Radiant Canvas PRO-Stufe als monatlicher, jährlicher oder lebenslanger In-App-Kauf.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: "Radiant Canvas Review (2026) : génération d'images IA locale pour Mac",
    subtitle:
      "Radiant Canvas est une application macOS développée par le développeur indépendant Arnold Sallay sous le label Radiant Bear Games, qui génère et édite des images entièrement en local sur un Mac Apple Silicon grâce à sept familles de modèles IA téléchargeables. Elle est distribuée exclusivement via le Mac App Store, avec un palier gratuit et un palier Radiant Canvas PRO vendu en achat intégré mensuel, annuel ou à vie.",
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Radiant Canvas Review (2026): generación de imágenes IA local para Mac',
    subtitle:
      'Radiant Canvas es una aplicación de macOS creada por el desarrollador independiente Arnold Sallay bajo el sello Radiant Bear Games, que genera y edita imágenes por completo en local en un Mac con Apple Silicon usando siete familias de modelos de IA descargables. Se distribuye exclusivamente a través de la Mac App Store, con un nivel gratuito y un nivel Radiant Canvas PRO vendido como compra dentro de la app mensual, anual o de por vida.',
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Radiant Canvasレビュー（2026）：Mac向けローカルAI画像生成',
    subtitle:
      'Radiant Canvasは、独立系開発者Arnold SallayがRadiant Bear Gamesレーベルの下で開発したmacOSアプリケーションです。7つのダウンロード可能なAIモデルファミリーを使い、Apple Silicon Mac上で完全にローカルに画像を生成・編集します。配布はMac App Store限定で、無料の基本ティアと、月額・年額・買い切りのアプリ内課金として提供されるRadiant Canvas PROティアがあります。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Radiant Canvas评测（2026）：Mac本地AI图像生成',
    subtitle:
      'Radiant Canvas是一款macOS应用，由独立开发者Arnold Sallay在Radiant Bear Games旗下开发，使用七个可下载的AI模型系列，在Apple Silicon Mac上完全本地生成和编辑图像。该应用仅通过Mac App Store分发，提供免费基础版，以及以月付、年付或买断制应用内购买形式出售的Radiant Canvas PRO版本。',
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Radiant Canvas Review (2026): geração de imagens IA local para Mac',
    subtitle:
      'Radiant Canvas é um aplicativo de macOS criado pelo desenvolvedor independente Arnold Sallay sob o selo Radiant Bear Games, que gera e edita imagens totalmente em local em um Mac com Apple Silicon usando sete famílias de modelos de IA baixáveis. É distribuído exclusivamente pela Mac App Store, com um nível gratuito e um nível Radiant Canvas PRO vendido como compra dentro do app mensal, anual ou vitalícia.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Radiant Canvas (2026): توليد صور بالذكاء الاصطناعي محليًا على Mac',
    subtitle:
      'Radiant Canvas هو تطبيق macOS طوّره المطوّر المستقل Arnold Sallay تحت اسم Radiant Bear Games، ويقوم بتوليد وتحرير الصور بالكامل محليًا على جهاز Mac مزوّد بشريحة Apple Silicon باستخدام سبع عائلات من نماذج الذكاء الاصطناعي القابلة للتنزيل. يُوزَّع حصريًا عبر Mac App Store، مع مستوى مجاني ومستوى Radiant Canvas PRO يُباع كشراء داخل التطبيق شهريًا أو سنويًا أو مدى الحياة.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Radiant Canvas 리뷰(2026): Mac용 로컬 AI 이미지 생성',
    subtitle:
      'Radiant Canvas는 독립 개발자 Arnold Sallay가 Radiant Bear Games 레이블로 개발한 macOS 애플리케이션으로, 다운로드 가능한 7개의 AI 모델 계열을 사용하여 Apple Silicon Mac에서 완전히 로컬로 이미지를 생성하고 편집합니다. Mac App Store를 통해서만 배포되며, 무료 기본 등급과 월간·연간·평생 앱 내 구매로 제공되는 Radiant Canvas PRO 등급이 있습니다.',
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  const failures = []
  for (const [lang, spec] of Object.entries(SPECS)) {
    const webpPath = path.join(IMAGES_DIR, `radiant-canvas-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec, facts: FACTS[lang] }),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`HTTP ${res.status}: ${text}`)
      }
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `radiant-canvas-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK radiant-canvas-hero-${lang}.webp (${buf.length} -> ${fs.statSync(webpPath).size} bytes)`)
      generated++
    } catch (err) {
      console.error(`FAIL ${lang}: ${err.message}`)
      failures.push({ lang, error: err.message })
    }
  }
  console.log(`\nGenerated: ${generated}/9, Failed: ${failures.length}`)
  if (failures.length) process.exitCode = 1
}

main()
