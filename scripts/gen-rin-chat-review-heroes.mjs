#!/usr/bin/env node
// Hero generator for rin-chat-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/rin-chat.ts. Needs the dev server: npx next dev --webpack --port 3455 (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3455'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const T = ['slate', 'emerald', 'slate', 'amber']
const mk = (facts) => facts.map(([label, value], i) => ({ label, value, tone: T[i] }))

const SPECS = {
  en: {
    title: 'Rin Chat Review: Free Desktop App for AI Roleplay and Character Chat',
    highlights: ['Roleplay with character cards', 'Encrypted cards and chats', 'Windows and Linux'],
    facts: [['Platforms', 'Windows, Linux'], ['Price', 'Free'], ['License', 'Proprietary'], ['Version', '1.0.4']],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Rin Chat Rezension: Gratis-Desktop-App für KI-Rollenspiel und Charakter-Chat',
    highlights: ['Rollenspiel mit Charakterkarten', 'Verschlüsselte Karten und Chats', 'Windows und Linux'],
    facts: [['Plattformen', 'Windows, Linux'], ['Preis', 'Kostenlos'], ['Lizenz', 'Proprietär'], ['Version', '1.0.4']],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Test de Rin Chat : application de bureau gratuite pour le jeu de rôle IA',
    highlights: ['Jeu de rôle avec cartes de personnage', 'Cartes et chats chiffrés', 'Windows et Linux'],
    facts: [['Plateformes', 'Windows, Linux'], ['Prix', 'Gratuit'], ['Licence', 'Propriétaire'], ['Version', '1.0.4']],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Rin Chat レビュー：AIロールプレイとキャラクターチャットの無料デスクトップアプリ',
    highlights: ['キャラクターカードでロールプレイ', 'カードとチャットを暗号化', 'Windows・Linux対応'],
    facts: [['対応', 'Windows, Linux'], ['価格', '無料'], ['ライセンス', 'プロプライエタリ'], ['バージョン', '1.0.4']],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Rin Chat评测：用于AI角色扮演和角色聊天的免费桌面应用',
    highlights: ['用角色卡进行角色扮演', '角色卡与聊天加密保存', '支持 Windows 和 Linux'],
    facts: [['平台', 'Windows, Linux'], ['价格', '免费'], ['许可证', '专有'], ['版本', '1.0.4']],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Reseña de Rin Chat: app de escritorio gratis para rol con IA y chat con personajes',
    highlights: ['Rol con tarjetas de personaje', 'Tarjetas y chats cifrados', 'Windows y Linux'],
    facts: [['Plataformas', 'Windows, Linux'], ['Precio', 'Gratis'], ['Licencia', 'Propietaria'], ['Versión', '1.0.4']],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Análise do Rin Chat: app de desktop grátis para roleplay com IA e chat com personagens',
    highlights: ['Roleplay com cartões de personagem', 'Cartões e chats criptografados', 'Windows e Linux'],
    facts: [['Plataformas', 'Windows, Linux'], ['Preço', 'Grátis'], ['Licença', 'Proprietária'], ['Versão', '1.0.4']],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Rin Chat: تطبيق مكتبي مجاني للعب الأدوار والمحادثة مع الشخصيات بالذكاء الاصطناعي',
    highlights: ['لعب أدوار ببطاقات الشخصيات', 'بطاقات ومحادثات مشفّرة', 'ويندوز ولينكس'],
    facts: [['المنصات', 'Windows, Linux'], ['السعر', 'مجاني'], ['الترخيص', 'مملوك'], ['الإصدار', '1.0.4']],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Rin Chat 리뷰: AI 롤플레이와 캐릭터 채팅을 위한 무료 데스크톱 앱',
    highlights: ['캐릭터 카드로 롤플레이', '카드와 채팅 암호화', 'Windows·Linux 지원'],
    facts: [['플랫폼', 'Windows, Linux'], ['가격', '무료'], ['라이선스', '독점'], ['버전', '1.0.4']],
    footer: 'PromptQuorum 가이드',
  },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `rin-chat-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, title: spec.title, highlights: spec.highlights, facts: mk(spec.facts), footer: spec.footer }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `rin-chat-review-hero-${lang}.png`)
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
