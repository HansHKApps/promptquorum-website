#!/usr/bin/env node
// One-off hero generator for hilbertraum-review (all 9 locales).
// Facts strip: RAM (8GB min), price (free), license (GPL-3.0-or-later), platforms
// (Windows/macOS/Linux) — pulled from src/lib/power-local-llm/apps/hilbertraum.ts,
// per CLAUDE.md's mandatory FeatureAppPost hero facts-strip rule. Titles/subtitles
// reuse the article's own title/intro per locale (markdown links stripped to plain
// text, since Satori doesn't render markdown link syntax).
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3430'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const FACTS = {
  en: [
    { label: 'RAM', value: 'Min. 8 GB RAM', tone: 'slate' },
    { label: 'Price', value: 'Free', tone: 'emerald' },
    { label: 'License', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: 'Platforms', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  de: [
    { label: 'RAM', value: 'Mind. 8 GB RAM', tone: 'slate' },
    { label: 'Preis', value: 'Kostenlos', tone: 'emerald' },
    { label: 'Lizenz', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: 'Plattformen', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  fr: [
    { label: 'RAM', value: '8 Go de RAM min.', tone: 'slate' },
    { label: 'Prix', value: 'Gratuit', tone: 'emerald' },
    { label: 'Licence', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: 'Plateformes', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  es: [
    { label: 'RAM', value: 'Mín. 8 GB de RAM', tone: 'slate' },
    { label: 'Precio', value: 'Gratis', tone: 'emerald' },
    { label: 'Licencia', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: 'Plataformas', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  ja: [
    { label: 'RAM', value: '最低8GBのRAM', tone: 'slate' },
    { label: '価格', value: '無料', tone: 'emerald' },
    { label: 'ライセンス', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: '対応プラットフォーム', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  zh: [
    { label: 'RAM', value: '最低8GB内存', tone: 'slate' },
    { label: '价格', value: '免费', tone: 'emerald' },
    { label: '许可证', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: '支持平台', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  pt: [
    { label: 'RAM', value: 'Mín. 8 GB de RAM', tone: 'slate' },
    { label: 'Preço', value: 'Grátis', tone: 'emerald' },
    { label: 'Licença', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: 'Plataformas', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  ar: [
    { label: 'الذاكرة', value: 'الحد الأدنى 8 جيجابايت رام', tone: 'slate' },
    { label: 'السعر', value: 'مجاني', tone: 'emerald' },
    { label: 'الترخيص', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: 'المنصات', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
  ko: [
    { label: 'RAM', value: '최소 8GB RAM', tone: 'slate' },
    { label: '가격', value: '무료', tone: 'emerald' },
    { label: '라이선스', value: 'GPL-3.0-or-later', tone: 'slate' },
    { label: '플랫폼', value: 'Windows / macOS / Linux', tone: 'slate' },
  ],
}

const SPECS = {
  en: {
    title: 'HilbertRaum Review 2026: A Portable, Offline AI Workspace for Chat and Your Own Documents',
    subtitle:
      'HilbertRaum (hilbertraum.ai) is a free, open-source desktop app for chatting with AI models and asking questions about your own documents, entirely on your own computer. It ships as a portable package you can run from a USB drive with no installer, bundles its own local inference engine, and detects your hardware to suggest which model size fits.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'HilbertRaum Review 2026: Ein portabler, offline laufender KI-Arbeitsbereich für Chat und eigene Dokumente',
    subtitle:
      'HilbertRaum (hilbertraum.ai) ist eine kostenlose, quelloffene Desktop-Anwendung zum Chatten mit KI-Modellen und zum Stellen von Fragen zu eigenen Dokumenten – vollständig auf dem eigenen Rechner. Sie läuft als portables Paket ohne Installationsprogramm von einem USB-Stick, bringt ihre eigene lokale Inferenz-Engine mit und erkennt Ihre Hardware, um eine passende Modellgröße vorzuschlagen.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'HilbertRaum Review 2026 : un espace de travail IA portable et hors ligne pour le chat et vos documents',
    subtitle:
      "HilbertRaum (hilbertraum.ai) est une application de bureau gratuite et open source pour discuter avec des modèles d'IA et interroger vos propres documents, entièrement sur votre ordinateur. Elle fonctionne comme un package portable sans installateur depuis une clé USB, embarque son propre moteur d'inférence local, et détecte votre matériel pour suggérer une taille de modèle adaptée.",
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'HilbertRaum Review 2026: un espacio de trabajo de IA portátil y offline para chatear y consultar tus documentos',
    subtitle:
      'HilbertRaum (hilbertraum.ai) es una aplicación de escritorio gratuita y de código abierto para chatear con modelos de IA y hacer preguntas sobre tus propios documentos, todo en tu propio equipo. Funciona como un paquete portátil sin instalador desde una memoria USB, incluye su propio motor de inferencia local, y detecta tu hardware para sugerir un tamaño de modelo adecuado.',
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'HilbertRaumレビュー2026:チャットと自分の文書のためのポータブルなオフラインAIワークスペース',
    subtitle:
      'HilbertRaum(hilbertraum.ai)は、AIモデルとチャットしたり自分の文書について質問したりできる、無料でオープンソースのデスクトップアプリです。インストーラー不要でUSBドライブから実行できるポータブルなパッケージとして配布され、独自のローカル推論エンジンを内蔵し、ハードウェアを検出して適したモデルサイズを提案します。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'HilbertRaum评测2026:面向聊天与文档问答的可移动离线AI工作空间',
    subtitle:
      'HilbertRaum(hilbertraum.ai)是一款免费、开源的桌面应用,用于与AI模型聊天并对自己的文档提问,完全在你自己的电脑上运行。它以可移动包的形式发布,无需安装程序即可从U盘运行,内置自己的本地推理引擎,并能检测硬件推荐合适的模型大小。',
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'HilbertRaum Review 2026: um espaço de trabalho de IA portátil e offline para chat e seus próprios documentos',
    subtitle:
      'O HilbertRaum (hilbertraum.ai) é um aplicativo de desktop gratuito e de código aberto para conversar com modelos de IA e fazer perguntas sobre seus próprios documentos, totalmente no seu computador. Funciona como um pacote portátil sem instalador a partir de um pendrive USB, traz seu próprio motor de inferência local, e detecta seu hardware para sugerir um tamanho de modelo adequado.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة HilbertRaum 2026: مساحة عمل ذكاء اصطناعي محمولة تعمل دون اتصال للدردشة ومستنداتك',
    subtitle:
      'HilbertRaum (hilbertraum.ai) هو تطبيق سطح مكتب مجاني ومفتوح المصدر للدردشة مع نماذج الذكاء الاصطناعي وطرح أسئلة حول مستنداتك الخاصة، ويعمل بالكامل على جهازك الخاص. يعمل كحزمة محمولة دون الحاجة إلى مثبِّت من محرك أقراص USB، ويتضمن محرك استدلال محلي خاصًا به، ويكتشف عتادك ليقترح حجم النموذج المناسب.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'HilbertRaum 리뷰 2026: 채팅과 내 문서를 위한 휴대용 오프라인 AI 작업 공간',
    subtitle:
      'HilbertRaum(hilbertraum.ai)은 AI 모델과 채팅하고 자신의 문서에 대해 질문할 수 있는 무료 오픈소스 데스크톱 앱으로, 완전히 자신의 컴퓨터에서 실행됩니다. 설치 프로그램 없이 USB 드라이브에서 바로 실행할 수 있는 휴대용 패키지로 배포되며, 자체 로컬 추론 엔진을 내장하고 있고, 하드웨어를 감지해 적합한 모델 크기를 제안합니다.',
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  const failures = []
  for (const [lang, spec] of Object.entries(SPECS)) {
    const webpPath = path.join(IMAGES_DIR, `hilbertraum-review-hero-${lang}.webp`)
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
      const pngPath = path.join(IMAGES_DIR, `hilbertraum-review-hero-${lang}.png`)
      fs.writeFileSync(pngPath, buf)
      await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
      fs.unlinkSync(pngPath)
      console.log(`OK hilbertraum-review-hero-${lang}.webp (${buf.length} -> ${fs.statSync(webpPath).size} bytes)`)
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
