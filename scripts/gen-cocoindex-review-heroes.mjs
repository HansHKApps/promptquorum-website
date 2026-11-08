#!/usr/bin/env node
// Hero generator for cocoindex-review (all 9 locales). Sparse poster: localized title + <=3 short highlights,
// facts strip from src/lib/power-local-llm/apps/cocoindex.ts (platforms, price, license, version).
// Needs the dev server: npx next dev --webpack --port 3461  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')

const SPECS = {
  en: { title: 'CocoIndex Review: Incremental Data Framework for RAG and AI Agents', highlights: ['Re-embeds only changed data', 'Ollama and local embeddings', 'Python 3.11 to 3.13'],
    facts: [{ label: 'Platforms', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Price', value: 'Free core', tone: 'emerald' }, { label: 'License', value: 'Apache 2.0', tone: 'slate' }, { label: 'Version', value: '1.1.1', tone: 'amber' }], footer: 'PromptQuorum Guide' },
  de: { title: 'CocoIndex-Rezension: Inkrementelles Datenframework für RAG und KI-Agenten', highlights: ['Nur geänderte Daten neu einbetten', 'Ollama und lokale Embeddings', 'Python 3.11 bis 3.13'],
    facts: [{ label: 'Plattformen', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Preis', value: 'Kern gratis', tone: 'emerald' }, { label: 'Lizenz', value: 'Apache 2.0', tone: 'slate' }, { label: 'Version', value: '1.1.1', tone: 'amber' }], footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Test de CocoIndex : framework de données incrémental pour RAG et agents IA', highlights: ['Ne réintègre que les données modifiées', 'Ollama et embeddings locaux', 'Python 3.11 à 3.13'],
    facts: [{ label: 'Plateformes', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Prix', value: 'Noyau gratuit', tone: 'emerald' }, { label: 'Licence', value: 'Apache 2.0', tone: 'slate' }, { label: 'Version', value: '1.1.1', tone: 'amber' }], footer: 'Guide PromptQuorum' },
  es: { title: 'Reseña de CocoIndex: framework de datos incremental para RAG y agentes de IA', highlights: ['Recalcula solo lo que cambió', 'Ollama y embeddings locales', 'Python 3.11 a 3.13'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Precio', value: 'Núcleo gratis', tone: 'emerald' }, { label: 'Licencia', value: 'Apache 2.0', tone: 'slate' }, { label: 'Versión', value: '1.1.1', tone: 'amber' }], footer: 'Guía de PromptQuorum' },
  pt: { title: 'Análise do CocoIndex: framework de dados incremental para RAG e agentes de IA', highlights: ['Reprocessa só o que mudou', 'Ollama e embeddings locais', 'Python 3.11 a 3.13'],
    facts: [{ label: 'Plataformas', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: 'Preço', value: 'Núcleo grátis', tone: 'emerald' }, { label: 'Licença', value: 'Apache 2.0', tone: 'slate' }, { label: 'Versão', value: '1.1.1', tone: 'amber' }], footer: 'Guia PromptQuorum' },
  ja: { title: 'CocoIndexレビュー：RAGとAIエージェント向けの差分更新データ基盤', highlights: ['変更分だけ再埋め込み', 'Ollamaとローカル埋め込み', 'Python 3.11〜3.13'],
    facts: [{ label: '対応', value: 'Mac・Windows・Linux', tone: 'slate' }, { label: '価格', value: 'コアは無料', tone: 'emerald' }, { label: 'ライセンス', value: 'Apache 2.0', tone: 'slate' }, { label: 'バージョン', value: '1.1.1', tone: 'amber' }], footer: 'PromptQuorumガイド' },
  zh: { title: 'CocoIndex 评测：面向 RAG 与 AI 智能体的增量数据框架', highlights: ['只重新嵌入变更数据', '支持 Ollama 与本地嵌入', 'Python 3.11–3.13'],
    facts: [{ label: '平台', value: 'Mac、Windows、Linux', tone: 'slate' }, { label: '价格', value: '核心免费', tone: 'emerald' }, { label: '许可证', value: 'Apache 2.0', tone: 'slate' }, { label: '版本', value: '1.1.1', tone: 'amber' }], footer: 'PromptQuorum 指南' },
  ar: { title: 'مراجعة CocoIndex: إطار بيانات تزايدي لـ RAG ووكلاء الذكاء الاصطناعي', highlights: ['يعيد تضمين المتغيّر فقط', 'دعم Ollama والتضمين المحلي', 'Python 3.11 إلى 3.13'],
    facts: [{ label: 'المنصات', value: 'Mac و Windows و Linux', tone: 'slate' }, { label: 'السعر', value: 'النواة مجانية', tone: 'emerald' }, { label: 'الترخيص', value: 'Apache 2.0', tone: 'slate' }, { label: 'الإصدار', value: '1.1.1', tone: 'amber' }], footer: 'دليل PromptQuorum' },
  ko: { title: 'CocoIndex 리뷰: RAG와 AI 에이전트를 위한 증분 데이터 프레임워크', highlights: ['변경분만 다시 임베딩', 'Ollama·로컬 임베딩 지원', 'Python 3.11~3.13'],
    facts: [{ label: '플랫폼', value: 'Mac, Windows, Linux', tone: 'slate' }, { label: '가격', value: '코어 무료', tone: 'emerald' }, { label: '라이선스', value: 'Apache 2.0', tone: 'slate' }, { label: '버전', value: '1.1.1', tone: 'amber' }], footer: 'PromptQuorum 가이드' },
}

async function main() {
  let generated = 0
  for (const [lang, spec] of Object.entries(SPECS)) {
    if (process.env.ONLY && process.env.ONLY !== lang) continue
    const webpPath = path.join(IMAGES_DIR, `cocoindex-review-hero-${lang}.webp`)
    try {
      const res = await fetch(`${BASE}/api/hero-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, ...spec }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(IMAGES_DIR, `cocoindex-review-hero-${lang}.png`)
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
