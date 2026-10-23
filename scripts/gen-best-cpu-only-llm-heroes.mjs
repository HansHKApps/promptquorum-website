#!/usr/bin/env node
// Regenerates the two best-cpu-only-llm heroes in all 9 locales (estimates, no unsupported claims).
import fs from 'node:fs/promises';
import sharp from 'sharp';
const BASE = process.env.HERO_BASE || 'http://localhost:3432';
const SETS = {
  'model-speeds': {
    en: ['Best CPU-Only LLMs in 2026', ['Phi-4 Mini: est. 15–25 tok/s', 'Estimates, not lab measurements', 'No GPU needed'], 'PromptQuorum Guide'],
    de: ['Beste CPU-only LLMs 2026', ['Phi-4 Mini: geschätzt 15–25 Tok/s', 'Schätzungen, keine Labormessungen', 'Keine GPU nötig'], 'PromptQuorum-Leitfaden'],
    fr: ['Meilleurs LLM CPU seul 2026', ['Phi-4 Mini : est. 15–25 tok/s', 'Estimations, pas des mesures', 'Aucun GPU requis'], 'Guide PromptQuorum'],
    es: ['Mejores LLM solo CPU 2026', ['Phi-4 Mini: est. 15–25 tok/s', 'Estimaciones, no mediciones', 'No necesitas GPU'], 'Guía de PromptQuorum'],
    pt: ['Melhores LLMs só com CPU 2026', ['Phi-4 Mini: est. 15–25 tok/s', 'Estimativas, não medições', 'Sem GPU necessária'], 'Guia PromptQuorum'],
    ar: ['أفضل LLM بمعالج فقط 2026', ['Phi-4 Mini تقدير 15-25 tok/s', 'تقديرات وليست قياسات مخبرية', 'بدون الحاجة إلى GPU'], 'دليل PromptQuorum'],
    ja: ['CPU専用LLMおすすめ2026', ['推定15-25 tok/s', '推定値で実測ではない', 'GPU不要'], 'PromptQuorumガイド'],
    zh: ['CPU专用LLM推荐2026', ['估算15-25 tok/s', '为估值，非实验室实测', '无需GPU'], 'PromptQuorum 指南'],
    ko: ['CPU 전용 LLM 추천 2026', ['추정 15-25 tok/s', '추정치이며 실측값 아님', 'GPU 불필요'], 'PromptQuorum 가이드'],
  },
  'cpu-vs-gpu': {
    en: ['CPU vs GPU: Memory Bandwidth Sets Speed', ['DDR4-3200 dual: 51.2 GB/s', 'RTX 3060: 360 GB/s', 'GPU typically 5–10× faster'], 'PromptQuorum Guide'],
    de: ['CPU vs. GPU: Bandbreite bestimmt das Tempo', ['DDR4-3200 Dual: 51,2 GB/s', 'RTX 3060: 360 GB/s', 'GPU meist 5–10× schneller'], 'PromptQuorum-Leitfaden'],
    fr: ['CPU ou GPU : la bande passante décide', ['DDR4-3200 double : 51.2 GB/s', 'RTX 3060 : 360 GB/s', 'GPU souvent 5–10× plus rapide'], 'Guide PromptQuorum'],
    es: ['CPU vs GPU: el ancho de banda manda', ['DDR4-3200 doble: 51.2 GB/s', 'RTX 3060: 360 GB/s', 'GPU suele ser 5–10× más rápida'], 'Guía de PromptQuorum'],
    pt: ['CPU vs GPU: a largura de banda manda', ['DDR4-3200 dual: 51.2 GB/s', 'RTX 3060: 360 GB/s', 'GPU costuma ser 5–10× mais rápida'], 'Guia PromptQuorum'],
    ar: ['CPU مقابل GPU عرض النطاق يحدد السرعة', ['DDR4-3200 ثنائية القناة 51.2 GB/s', 'RTX 3060 360 GB/s', 'GPU أسرع عادةً 5-10 مرات'], 'دليل PromptQuorum'],
    ja: ['CPU vs GPU：速度はメモリ帯域で決まる', ['DDR4-3200 51.2 GB/s', 'RTX 3060 360 GB/s', 'GPUは通常5-10倍速い'], 'PromptQuorumガイド'],
    zh: ['CPU与GPU：内存带宽决定速度', ['双通道DDR4 51.2 GB/s', 'RTX 3060 360 GB/s', 'GPU通常快5-10倍'], 'PromptQuorum 指南'],
    ko: ['CPU vs GPU: 속도는 메모리 대역폭', ['DDR4-3200 51.2 GB/s', 'RTX 3060 360 GB/s', 'GPU는 보통 5-10배 빠름'], 'PromptQuorum 가이드'],
  },
};
for (const [set, langs] of Object.entries(SETS)) {
  for (const [lang, [title, highlights, footer]] of Object.entries(langs)) {
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, title, highlights, footer }) });
    if (!res.ok) throw new Error(`${set}/${lang}: HTTP ${res.status} ${await res.text()}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const out = `public/images/best-cpu-only-llm-${set}-hero-${lang}.webp`;
    await sharp(buf).webp({ lossless: true, effort: 6 }).toFile(out);
    console.log(out);
  }
}
