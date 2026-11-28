#!/usr/bin/env node
// Hero generator for valo-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/valo.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3462  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3462'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {"title": "Valo Review: Desktop Workspace for Claude and Local AI", "highlights": ["Hybrid: local app, hosted AI", "Local models via Ollama, maker says", "Closed source, free plan"], "facts": [{"label": "Platform", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "Price", "value": "Free + Pro", "tone": "emerald"}, {"label": "License", "value": "Proprietary", "tone": "slate"}, {"label": "Version", "value": "1.4.2", "tone": "amber"}], "footer": "PromptQuorum Guide"},
  de: {"title": "Valo Test: Desktop-App für Claude und lokale KI", "highlights": ["Hybrid: App lokal, KI gehostet", "Ollama lokal, laut Anbieter", "Code geschlossen, Gratis-Tarif"], "facts": [{"label": "Plattform", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "Preis", "value": "Gratis + Pro", "tone": "emerald"}, {"label": "Lizenz", "value": "Proprietär", "tone": "slate"}, {"label": "Version", "value": "1.4.2", "tone": "amber"}], "footer": "PromptQuorum-Leitfaden"},
  fr: {"title": "Test de Valo : un bureau pour Claude et l’IA locale", "highlights": ["Hybride : app locale, IA hébergée", "Ollama en local, selon l’éditeur", "Code fermé, offre gratuite"], "facts": [{"label": "Plateforme", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "Prix", "value": "Gratuit + Pro", "tone": "emerald"}, {"label": "Licence", "value": "Propriétaire", "tone": "slate"}, {"label": "Version", "value": "1.4.2", "tone": "amber"}], "footer": "Guide PromptQuorum"},
  es: {"title": "Reseña de Valo: escritorio para Claude e IA local", "highlights": ["Híbrido: app local, IA alojada", "Ollama local, según el creador", "Código cerrado, plan gratis"], "facts": [{"label": "Plataforma", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "Precio", "value": "Gratis + Pro", "tone": "emerald"}, {"label": "Licencia", "value": "Propietaria", "tone": "slate"}, {"label": "Versión", "value": "1.4.2", "tone": "amber"}], "footer": "Guía de PromptQuorum"},
  pt: {"title": "Análise do Valo: desktop para Claude e IA local", "highlights": ["Híbrido: app local, IA hospedada", "Ollama local, segundo o fabricante", "Código fechado, plano grátis"], "facts": [{"label": "Plataforma", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "Preço", "value": "Grátis + Pro", "tone": "emerald"}, {"label": "Licença", "value": "Proprietária", "tone": "slate"}, {"label": "Versão", "value": "1.4.2", "tone": "amber"}], "footer": "Guia PromptQuorum"},
  ja: {"title": "Valoレビュー：ClaudeとローカルAIの作業環境", "highlights": ["ハイブリッド構成", "開発元：Ollamaに対応", "非公開ソース・無料版あり"], "facts": [{"label": "対応", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "価格", "value": "無料＋Pro", "tone": "emerald"}, {"label": "ライセンス", "value": "プロプライエタリ", "tone": "slate"}, {"label": "バージョン", "value": "1.4.2", "tone": "amber"}], "footer": "PromptQuorumガイド"},
  zh: {"title": "Valo评测：Claude与本地AI桌面工作台", "highlights": ["混合模式运行", "开发者称支持Ollama", "闭源，有免费版"], "facts": [{"label": "平台", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "价格", "value": "免费＋Pro", "tone": "emerald"}, {"label": "许可证", "value": "专有", "tone": "slate"}, {"label": "版本", "value": "1.4.2", "tone": "amber"}], "footer": "PromptQuorum 指南"},
  ar: {"title": "مراجعة Valo: مساحة عمل لـ Claude والنماذج المحلية", "highlights": ["هجين: تطبيق محلي وذكاء مستضاف", "Ollama محليًا حسب المطوّر", "مصدر مغلق وخطة مجانية"], "facts": [{"label": "المنصة", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "السعر", "value": "مجاني + Pro", "tone": "emerald"}, {"label": "الترخيص", "value": "مملوك", "tone": "slate"}, {"label": "الإصدار", "value": "1.4.2", "tone": "amber"}], "footer": "دليل PromptQuorum"},
  ko: {"title": "Valo 리뷰: Claude와 로컬 AI 작업 공간", "highlights": ["하이브리드 구조", "개발사 설명: Ollama 지원", "비공개 소스, 무료 플랜"], "facts": [{"label": "플랫폼", "value": "Windows · Mac · Linux", "tone": "slate"}, {"label": "가격", "value": "무료 + Pro", "tone": "emerald"}, {"label": "라이선스", "value": "독점", "tone": "slate"}, {"label": "버전", "value": "1.4.2", "tone": "amber"}], "footer": "PromptQuorum 가이드"},
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `valo-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `valo-review-hero-${lang}.png`)
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
