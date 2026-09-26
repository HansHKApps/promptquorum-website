#!/usr/bin/env node
// Hero image generation for cognira-review, all 9 languages.
// Run once EN is written (Step 2 of NEW_APP_INTAKE.md), then again after
// translation (Step 3) with the remaining 8 locale specs filled in.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = 'http://localhost:3430'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'cognira-review'

const FACTS = {
  en: [
    { label: 'Price', value: 'Free + paid tier', tone: 'emerald' },
    { label: 'License', value: 'Proprietary', tone: 'slate' },
    { label: 'Platforms', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  de: [
    { label: 'Preis', value: 'Kostenlos + kostenpflichtige Stufe', tone: 'emerald' },
    { label: 'Lizenz', value: 'Proprietary', tone: 'slate' },
    { label: 'Plattformen', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  fr: [
    { label: 'Prix', value: 'Gratuit + offre payante', tone: 'emerald' },
    { label: 'Licence', value: 'Proprietary', tone: 'slate' },
    { label: 'Plateformes', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  ja: [
    { label: '価格', value: '無料＋有料プラン', tone: 'emerald' },
    { label: 'ライセンス', value: 'Proprietary', tone: 'slate' },
    { label: '対応プラットフォーム', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  zh: [
    { label: '价格', value: '免费+付费版', tone: 'emerald' },
    { label: '许可证', value: 'Proprietary', tone: 'slate' },
    { label: '支持平台', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  es: [
    { label: 'Precio', value: 'Gratis + plan de pago', tone: 'emerald' },
    { label: 'Licencia', value: 'Proprietary', tone: 'slate' },
    { label: 'Plataformas', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  pt: [
    { label: 'Preço', value: 'Grátis + plano pago', tone: 'emerald' },
    { label: 'Licença', value: 'Proprietary', tone: 'slate' },
    { label: 'Plataformas', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  ar: [
    { label: 'السعر', value: 'مجاني + خطة مدفوعة', tone: 'emerald' },
    { label: 'الترخيص', value: 'Proprietary', tone: 'slate' },
    { label: 'المنصات', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
  ko: [
    { label: '가격', value: '무료 + 유료 요금제', tone: 'emerald' },
    { label: '라이선스', value: 'Proprietary', tone: 'slate' },
    { label: '플랫폼', value: 'Windows/macOS/Linux/Web', tone: 'violet' },
  ],
}

const FOOTER = {
  en: 'PromptQuorum Guide',
  de: 'PromptQuorum-Leitfaden',
  fr: 'Guide PromptQuorum',
  ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南',
  es: 'Guía de PromptQuorum',
  pt: 'Guia PromptQuorum',
  ar: 'دليل PromptQuorum',
  ko: 'PromptQuorum 가이드',
}

// Specs filled in per language as each locale block is written.
const SPECS = {
  en: {
    title: 'Cognira Review: A Self-Learning AI Assistant With a Local Binary and Private Memory',
    subtitle: 'Cognira is a chat assistant built by a single independent developer, Thomas Conway, with a filtered "guarded learning loop" and a private, per-user memory.',
    bullets: [
      'Free tier: £0, 25K tokens/week. Pro: £15/month, 500K tokens/week. Max: £30/month, 2M tokens/week',
      'Proprietary/closed-source — no LICENSE file or public source code was found',
      'Cognira Entity is a sealed local binary for Windows, macOS, and Linux, included on every tier',
      'No GitHub repository, star count, or public version number found for Cognira or Cognira Entity',
    ],
  },
  de: {
    title: 'Cognira Review: Ein selbstlernender KI-Assistent mit lokaler Binärdatei und privatem Gedächtnis',
    subtitle: 'Cognira ist ein Chat-Assistent eines einzelnen unabhängigen Entwicklers, Thomas Conway, mit gefilterter „geführter Lernschleife" und privatem Gedächtnis pro Nutzer.',
    bullets: [
      'Kostenlose Stufe: 0 £, 25.000 Tokens/Woche. Pro: 15 £/Monat, 500.000 Tokens/Woche. Max: 30 £/Monat, 2 Mio. Tokens/Woche',
      'Proprietär/Closed Source — es wurde weder eine LICENSE-Datei noch öffentlicher Quellcode gefunden',
      'Cognira Entity ist eine versiegelte lokale Binärdatei für Windows, macOS und Linux, enthalten in jeder Stufe',
      'Für Cognira oder Cognira Entity wurden weder ein GitHub-Repository noch eine Sternezahl oder eine öffentliche Versionsnummer gefunden',
    ],
  },
  fr: {
    title: 'Avis Cognira : un assistant IA auto-apprenant avec binaire local et mémoire privée',
    subtitle: "Cognira est un assistant de chat conçu par un développeur indépendant, Thomas Conway, avec une « boucle d'apprentissage encadrée » filtrée et une mémoire privée par utilisateur.",
    bullets: [
      'Palier gratuit : 0 £, 25 000 jetons/semaine. Pro : 15 £/mois, 500 000 jetons/semaine. Max : 30 £/mois, 2 millions de jetons/semaine',
      'Propriétaire/code fermé — aucun fichier de licence ni code source public trouvé',
      'Cognira Entity est un binaire local scellé pour Windows, macOS et Linux, inclus dans chaque palier',
      "Aucun dépôt GitHub, nombre d'étoiles ou numéro de version public trouvé pour Cognira ou Cognira Entity",
    ],
  },
  es: {
    title: 'Análisis de Cognira: un asistente de IA autoaprendiz con binario local y memoria privada',
    subtitle: 'Cognira es un asistente de chat de un desarrollador independiente, Thomas Conway, con un "bucle de aprendizaje supervisado" filtrado y memoria privada por usuario.',
    bullets: [
      'Plan gratuito: 0 £, 25.000 tokens/semana. Pro: 15 £/mes, 500.000 tokens/semana. Max: 30 £/mes, 2 millones de tokens/semana',
      'Propietario/código cerrado — no se encontró archivo de licencia ni código fuente público',
      'Cognira Entity es un binario local sellado para Windows, macOS y Linux, incluido en todos los planes',
      'No se encontró repositorio de GitHub, número de estrellas ni número de versión público para Cognira ni Cognira Entity',
    ],
  },
  pt: {
    title: 'Análise do Cognira: um assistente de IA autoaprendiz com binário local e memória privada',
    subtitle: 'Cognira é um assistente de chat de um desenvolvedor independente, Thomas Conway, com "loop de aprendizado supervisionado" filtrado e memória privada por usuário.',
    bullets: [
      'Plano gratuito: £0, 25 mil tokens/semana. Pro: £15/mês, 500 mil tokens/semana. Max: £30/mês, 2 milhões de tokens/semana',
      'Proprietário/código fechado — não foi encontrado arquivo de licença nem código-fonte público',
      'Cognira Entity é um binário local selado para Windows, macOS e Linux, incluído em todos os planos',
      'Não foi encontrado repositório no GitHub, contagem de estrelas nem número de versão público para o Cognira ou o Cognira Entity',
    ],
  },
  ja: {
    title: 'Cogniraレビュー：ローカルバイナリとプライベート記憶を備えた自己学習型AIアシスタント',
    subtitle: 'Cogniraは、個人開発者のThomas Conway氏によるチャットアシスタントで、フィルタリングされた「ガード付き学習ループ」とユーザーごとのプライベート記憶を備えます。',
    bullets: [
      '無料プラン：0ポンド、週25,000トークン。Pro：月15ポンド、週500,000トークン。Max：月30ポンド、週200万トークン',
      'プロプライエタリ／クローズドソース — ライセンスファイルや公開ソースコードは見つからない',
      'Cognira EntityはWindows・macOS・Linux向けの封印されたローカルバイナリで、すべてのプランに含まれる',
      'CogniraまたはCognira EntityについてGitHubリポジトリ、スター数、公開バージョン番号は見つからない',
    ],
  },
  zh: {
    title: 'Cognira评测：具备本地二进制程序和私人记忆的自学习AI助手',
    subtitle: 'Cognira是由个人开发者Thomas Conway打造的聊天助手，具备经过过滤的"受控学习循环"和按用户区分的私人记忆。',
    bullets: [
      '免费套餐：0英镑，每周25,000个token。Pro：每月15英镑，每周500,000个token。Max：每月30英镑，每周200万个token',
      '专有／闭源——未发现许可证文件或公开源代码',
      'Cognira Entity是一款面向Windows、macOS和Linux的密封本地二进制程序，包含在每个套餐中',
      '未发现Cognira或Cognira Entity的GitHub仓库、星标数或公开版本号',
    ],
  },
  ar: {
    title: 'مراجعة Cognira: مساعد ذكاء اصطناعي ذاتي التعلم بملف تنفيذي محلي وذاكرة خاصة',
    subtitle: 'Cognira مساعد دردشة من مطوّر مستقل واحد، توماس كونواي، بحلقة "تعلّم محروسة" مُرشَّحة وذاكرة خاصة لكل مستخدم.',
    bullets: [
      'الخطة المجانية: 0 جنيه إسترليني، 25 ألف رمز/أسبوعيًا. Pro: 15 جنيهًا إسترلينيًا/شهريًا، 500 ألف رمز/أسبوعيًا. Max: 30 جنيهًا إسترلينيًا/شهريًا، مليونا رمز/أسبوعيًا',
      'مملوك/مغلق المصدر — لم يُعثر على ملف ترخيص أو شيفرة مصدرية عامة',
      'Cognira Entity ملف تنفيذي محلي مغلق لأنظمة Windows وmacOS وLinux، مُضمَّن في كل خطة',
      'لم يُعثر على مستودع GitHub أو عدد نجوم أو رقم إصدار عام لـ Cognira أو Cognira Entity',
    ],
  },
  ko: {
    title: 'Cognira 리뷰: 로컬 바이너리와 개인 메모리를 갖춘 자기 학습형 AI 어시스턴트',
    subtitle: 'Cognira는 개인 개발자 토마스 콘웨이가 만든 채팅 어시스턴트로, 필터링된 "가드 학습 루프"와 사용자별 비공개 메모리를 갖추고 있습니다.',
    bullets: [
      '무료 플랜: 0파운드, 주당 25,000토큰. Pro: 월 15파운드, 주당 500,000토큰. Max: 월 30파운드, 주당 200만 토큰',
      '독점/폐쇄형 소스 — 라이선스 파일이나 공개 소스 코드가 발견되지 않음',
      'Cognira Entity는 Windows·macOS·Linux용 봉인된 로컬 바이너리이며, 모든 플랜에 포함됨',
      'Cognira 또는 Cognira Entity의 GitHub 저장소, 스타 수, 공개 버전 번호는 발견되지 않음',
    ],
  },
}

async function generateOne(lang, spec) {
  const webpPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.webp`)
  if (fs.existsSync(webpPath)) {
    console.log(`  SKIP (exists) ${SLUG}-hero-${lang}.webp`)
    return { status: 'skipped' }
  }

  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lang,
      title: spec.title,
      subtitle: spec.subtitle,
      bullets: spec.bullets,
      facts: FACTS[lang],
      footer: FOOTER[lang],
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`HTTP ${res.status}: ${text}`)
  }

  const buf = Buffer.from(await res.arrayBuffer())
  const pngPath = path.join(IMAGES_DIR, `${SLUG}-hero-${lang}.png`)
  fs.writeFileSync(pngPath, buf)
  await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
  fs.unlinkSync(pngPath)
  console.log(`  OK ${SLUG}-hero-${lang}.webp (${buf.length} bytes PNG -> ${fs.statSync(webpPath).size} bytes WebP)`)
  return { status: 'generated' }
}

async function main() {
  let generated = 0
  let skipped = 0
  const failures = []
  for (const [lang, spec] of Object.entries(SPECS)) {
    try {
      const r = await generateOne(lang, spec)
      if (r.status === 'generated') generated++
      else skipped++
    } catch (err) {
      console.error(`  FAIL ${lang}: ${err.message}`)
      failures.push({ lang, error: err.message })
    }
  }
  console.log('')
  console.log(`Generated: ${generated}, Skipped: ${skipped}, Failed: ${failures.length}`)
  if (failures.length > 0) process.exitCode = 1
}

main()
