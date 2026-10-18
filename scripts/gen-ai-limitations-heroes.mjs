#!/usr/bin/env node
// Poster-style replacements for the two ai-limitations-what-llms-cant-do table images (all 9 locales).
// The old table images showed only 4 of the 8 rows the article promises; the full tables are in the page text.
// Needs the dev server: npx next dev --webpack --port 3461  (HERO_BASE overrides)
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const BASE = process.env.HERO_BASE || 'http://localhost:3461'
const IMAGES_DIR = path.join(process.cwd(), 'public/images')
const SLUG = 'ai-limitations-what-llms-cant-do'

const FOOTER = { en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum', es: 'Guía de PromptQuorum', ja: 'PromptQuorumガイド', zh: 'PromptQuorum指南', pt: 'Guia PromptQuorum', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드' }

const SPECS = {
  'quick-reference': {
    en: { title: '8 LLM Limitations at a Glance', highlights: ['8 structural limits, not bugs', 'Each has a quick workaround', 'Fix: tools, not better prompts'] },
    de: { title: 'Die 8 Einschränkungen auf einen Blick', highlights: ['8 strukturelle Grenzen, keine Bugs', 'Je ein schneller Workaround', 'Lösung: Tools, nicht Prompts'] },
    fr: { title: 'Les 8 limitations en un coup d\'œil', highlights: ['8 limites structurelles, pas des bugs', 'Un contournement rapide chacune', 'Solution : outils, pas prompts'] },
    es: { title: 'Las 8 limitaciones de los LLMs de un vistazo', highlights: ['8 límites estructurales, no errores', 'Cada uno con solución rápida', 'Solución: herramientas, no prompts'] },
    ja: { title: 'LLMの8つの限界を一目で', highlights: ['構造的な限界が8つ', 'それぞれに簡単な回避策', '解決はツール、プロンプトでなく'] },
    zh: { title: 'LLM八大局限一览', highlights: ['8个结构性局限，并非漏洞', '每项都有快速对策', '解法：用工具，而非提示词'] },
    pt: { title: 'As 8 limitações dos LLMs de relance', highlights: ['8 limites estruturais, não bugs', 'Cada um com atalho rápido', 'Solução: ferramentas, não prompts'] },
    ar: { title: 'القيود الثمانية للنماذج اللغوية الكبيرة في لمحة', highlights: ['٨ قيود هيكلية وليست أخطاء', 'لكل قيد حل بديل سريع', 'الحل: أدوات لا موجهات أفضل'] },
    ko: { title: 'LLM의 8가지 한계 한눈에 보기', highlights: ['구조적 한계 8가지, 버그 아님', '각각 빠른 우회책 존재', '해법: 프롬프트 아닌 도구'] },
  },
  'can-llms-do-x': {
    en: { title: 'Can LLMs Do X? Quick Answers', highlights: ['8 common tasks, honest answers', 'Base model, before tool use', 'Most gaps need a tool layer'] },
    de: { title: 'Was können LLMs? Schnellantworten', highlights: ['8 typische Aufgaben, ehrlich beantwortet', 'Basismodell, vor Tool-Nutzung', 'Lücken brauchen meist Tools'] },
    fr: { title: 'Les LLMs peuvent-ils faire X ? Réponses rapides', highlights: ['8 tâches courantes, réponses franches', 'Modèle de base, avant les outils', 'Les lacunes exigent des outils'] },
    es: { title: '¿Pueden los LLMs hacer X? Respuestas rápidas', highlights: ['8 tareas comunes, respuestas claras', 'Modelo base, antes de herramientas', 'Casi siempre hacen falta herramientas'] },
    ja: { title: 'LLMはXができるか？クイック回答', highlights: ['よくある8つのタスクに回答', 'ツール利用前の基本モデル', '多くはツール併用が必要'] },
    zh: { title: 'LLM能做X吗？快速解答', highlights: ['8个常见任务，直接作答', '工具调用前的基础模型', '多数缺口需工具层补足'] },
    pt: { title: 'Os LLMs conseguem fazer X? Respostas rápidas', highlights: ['8 tarefas comuns, respostas diretas', 'Modelo base, antes das ferramentas', 'Quase sempre exige ferramentas'] },
    ar: { title: 'هل تستطيع النماذج اللغوية فعل X؟ إجابات سريعة', highlights: ['٨ مهام شائعة وإجابات صريحة', 'النموذج الأساسي قبل الأدوات', 'معظم الفجوات تحتاج طبقة أدوات'] },
    ko: { title: 'LLM이 X를 할 수 있을까? 빠른 답변', highlights: ['흔한 작업 8가지, 솔직한 답', '도구 사용 전 기본 모델', '대부분 도구 계층이 필요'] },
  },
}

async function main() {
  let generated = 0
  for (const [kind, langs] of Object.entries(SPECS)) {
    for (const [lang, spec] of Object.entries(langs)) {
      if (process.env.ONLY && process.env.ONLY !== lang) continue
      const base = `${SLUG}-${kind}-hero-${lang}`
      const webpPath = path.join(IMAGES_DIR, `${base}.webp`)
      try {
        const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, footer: FOOTER[lang], ...spec }) })
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
        const pngPath = path.join(IMAGES_DIR, `${base}.png`)
        fs.writeFileSync(pngPath, Buffer.from(await res.arrayBuffer()))
        await sharp(pngPath).webp({ lossless: true, effort: 6 }).toFile(webpPath)
        fs.unlinkSync(pngPath)
        console.log(`OK ${base} (${fs.statSync(webpPath).size} bytes)`)
        generated++
      } catch (err) { console.error(`FAIL ${base}: ${err.message}`); process.exitCode = 1 }
    }
  }
  console.log(`Generated ${generated}/18`)
}
main()
