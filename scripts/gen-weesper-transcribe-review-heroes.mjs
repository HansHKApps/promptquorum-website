#!/usr/bin/env node
// Hero generator for weesper-transcribe-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/weesper-transcribe.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3462  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3462'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: {"title": "Weesper Transcribe Review: Offline File Transcription for Mac", "highlights": ["Per maker: runs on your Mac", "Free for files up to 15 min", "Saved files, not dictation"], "facts": [{"label": "Platform", "value": "macOS 13+", "tone": "slate"}, {"label": "Price", "value": "Free + Pro", "tone": "emerald"}, {"label": "License", "value": "Proprietary", "tone": "slate"}, {"label": "Version", "value": "1.2.3", "tone": "amber"}], "footer": "PromptQuorum Guide"},
  de: {"title": "Weesper Transcribe Test: Dateien offline am Mac transkribieren", "highlights": ["Läuft laut Hersteller am Mac", "Gratis bis 15 Min. je Datei", "Dateien, kein Live-Diktat"], "facts": [{"label": "Plattform", "value": "macOS 13+", "tone": "slate"}, {"label": "Preis", "value": "Gratis + Pro", "tone": "emerald"}, {"label": "Lizenz", "value": "Proprietär", "tone": "slate"}, {"label": "Version", "value": "1.2.3", "tone": "amber"}], "footer": "PromptQuorum-Leitfaden"},
  fr: {"title": "Test de Weesper Transcribe : transcription hors ligne sur Mac", "highlights": ["Sur Mac, selon l’éditeur", "Gratuit jusqu’à 15 min", "Des fichiers, pas de dictée"], "facts": [{"label": "Plateforme", "value": "macOS 13+", "tone": "slate"}, {"label": "Prix", "value": "Gratuit + Pro", "tone": "emerald"}, {"label": "Licence", "value": "Propriétaire", "tone": "slate"}, {"label": "Version", "value": "1.2.3", "tone": "amber"}], "footer": "Guide PromptQuorum"},
  es: {"title": "Reseña de Weesper Transcribe: transcripción sin conexión en Mac", "highlights": ["En tu Mac, según el creador", "Gratis hasta 15 min", "Archivos, no dictado en vivo"], "facts": [{"label": "Plataforma", "value": "macOS 13+", "tone": "slate"}, {"label": "Precio", "value": "Gratis + Pro", "tone": "emerald"}, {"label": "Licencia", "value": "Propietaria", "tone": "slate"}, {"label": "Versión", "value": "1.2.3", "tone": "amber"}], "footer": "Guía de PromptQuorum"},
  pt: {"title": "Análise do Weesper Transcribe: transcrição offline no Mac", "highlights": ["No Mac, segundo o fabricante", "Grátis até 15 min", "Arquivos, não ditado ao vivo"], "facts": [{"label": "Plataforma", "value": "macOS 13+", "tone": "slate"}, {"label": "Preço", "value": "Grátis + Pro", "tone": "emerald"}, {"label": "Licença", "value": "Proprietária", "tone": "slate"}, {"label": "Versão", "value": "1.2.3", "tone": "amber"}], "footer": "Guia PromptQuorum"},
  ja: {"title": "Weesper Transcribeレビュー：Macでオフライン文字起こし", "highlights": ["開発元によるとMac上で処理", "15分以内のファイルは無料", "保存ファイル向け（音声入力ではない）"], "facts": [{"label": "対応", "value": "macOS 13+", "tone": "slate"}, {"label": "価格", "value": "無料＋Pro", "tone": "emerald"}, {"label": "ライセンス", "value": "プロプライエタリ", "tone": "slate"}, {"label": "バージョン", "value": "1.2.3", "tone": "amber"}], "footer": "PromptQuorumガイド"},
  zh: {"title": "Weesper Transcribe评测：Mac离线文件转录", "highlights": ["据开发者称在Mac本机运行", "15分钟以内文件免费", "处理文件，非实时听写"], "facts": [{"label": "平台", "value": "macOS 13+", "tone": "slate"}, {"label": "价格", "value": "免费＋Pro", "tone": "emerald"}, {"label": "许可证", "value": "专有", "tone": "slate"}, {"label": "版本", "value": "1.2.3", "tone": "amber"}], "footer": "PromptQuorum 指南"},
  ar: {"title": "مراجعة Weesper Transcribe: تحويل الملفات إلى نص على Mac دون اتصال", "highlights": ["يعمل على Mac حسب المطوّر", "مجاني لملفات حتى 15 دقيقة", "للملفات لا للإملاء المباشر"], "facts": [{"label": "المنصة", "value": "macOS 13+", "tone": "slate"}, {"label": "السعر", "value": "مجاني + Pro", "tone": "emerald"}, {"label": "الترخيص", "value": "مملوك", "tone": "slate"}, {"label": "الإصدار", "value": "1.2.3", "tone": "amber"}], "footer": "دليل PromptQuorum"},
  ko: {"title": "Weesper Transcribe 리뷰: Mac 오프라인 파일 전사", "highlights": ["개발사 설명: Mac에서 처리", "15분 이하 파일 무료", "저장 파일용, 실시간 받아쓰기 아님"], "facts": [{"label": "플랫폼", "value": "macOS 13+", "tone": "slate"}, {"label": "가격", "value": "무료 + Pro", "tone": "emerald"}, {"label": "라이선스", "value": "독점", "tone": "slate"}, {"label": "버전", "value": "1.2.3", "tone": "amber"}], "footer": "PromptQuorum 가이드"},
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `weesper-transcribe-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `weesper-transcribe-review-hero-${lang}.png`)
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
