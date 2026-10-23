#!/usr/bin/env node
// Regenerates the two local-llm-on-laptop heroes in all 9 locales (bandwidth-derived estimates, no unsupported claims).
import sharp from 'sharp';
const BASE = process.env.HERO_BASE || 'http://localhost:3432';
const SETS = {
  'ram-tiers': {
    en: ['Which Local LLM Runs on Your Laptop?', ['8 GB RAM: est. 15–30 tok/s', '16 GB RAM: Qwen3 8B, est. 8–15 tok/s', 'Estimates, not lab measurements'], 'PromptQuorum Guide'],
    de: ['Welches lokale LLM läuft auf Ihrem Laptop?', ['8 GB RAM: geschätzt 15–30 Tok/s', '16 GB: Qwen3 8B, gesch. 8–15 Tok/s', 'Schätzungen, keine Labormessungen'], 'PromptQuorum-Leitfaden'],
    fr: ['Quel LLM local sur votre portable ?', ['8 GB de RAM : est. 15–30 tok/s', '16 GB : Qwen3 8B, est. 8–15 tok/s', 'Estimations, pas des mesures'], 'Guide PromptQuorum'],
    es: ['¿Qué LLM local corre en tu portátil?', ['8 GB de RAM: est. 15–30 tok/s', '16 GB: Qwen3 8B, est. 8–15 tok/s', 'Estimaciones, no mediciones'], 'Guía de PromptQuorum'],
    pt: ['Qual LLM local roda no seu notebook?', ['8 GB de RAM: est. 15–30 tok/s', '16 GB: Qwen3 8B, est. 8–15 tok/s', 'Estimativas, não medições'], 'Guia PromptQuorum'],
    ar: ['أي LLM محلي يعمل على حاسوبك المحمول؟', ['8 GB RAM تقدير 15-30 tok/s', '16 GB مع Qwen3 8B تقدير 8-15 tok/s', 'تقديرات وليست قياسات مخبرية'], 'دليل PromptQuorum'],
    ja: ['ノートPCで動くローカルLLMは？', ['8GB推定15-30tok/s', '16GB:8B推定8-15', '推定値で実測ではない'], 'PromptQuorumガイド'],
    zh: ['笔记本能跑哪个本地LLM？', ['8GB内存：估算15-30 tok/s', '16GB：Qwen3 8B估算8-15', '为估值，非实验室实测'], 'PromptQuorum 指南'],
    ko: ['내 노트북에서 돌아가는 로컬 LLM은?', ['8GB 추정15-30tok/s', '16GB: 8B 추정8-15', '추정치이며 실측값 아님'], 'PromptQuorum 가이드'],
  },
  'model-picks': {
    en: ['Best Local LLMs for Laptops', ['Llama 3.2 3B: 2.0 GB file', 'Qwen3 8B: 5.2 GB file', 'Speeds from memory bandwidth'], 'PromptQuorum Guide'],
    de: ['Lokale LLMs für Laptops', ['Llama 3.2 3B: 2,0 GB Datei', 'Qwen3 8B: 5,2 GB Datei', 'Tempo aus Speicherbandbreite'], 'PromptQuorum-Leitfaden'],
    fr: ['LLM locaux pour portables', ['Llama 3.2 3B : fichier de 2.0 GB', 'Qwen3 8B : fichier de 5.2 GB', 'Vitesse selon la bande passante'], 'Guide PromptQuorum'],
    es: ['LLM locales para portátiles', ['Llama 3.2 3B: archivo de 2.0 GB', 'Qwen3 8B: archivo de 5.2 GB', 'Velocidad según ancho de banda'], 'Guía de PromptQuorum'],
    pt: ['LLMs locais para notebooks', ['Llama 3.2 3B: arquivo de 2.0 GB', 'Qwen3 8B: arquivo de 5.2 GB', 'Velocidade pela largura de banda'], 'Guia PromptQuorum'],
    ar: ['LLM محلية للحواسيب المحمولة', ['Llama 3.2 3B ملف 2.0 GB', 'Qwen3 8B ملف 5.2 GB', 'السرعة من عرض نطاق الذاكرة'], 'دليل PromptQuorum'],
    ja: ['ノートPC向けローカルLLM', ['Llama 3.2 3B：2.0 GB', 'Qwen3 8B：5.2 GB', '速度はメモリ帯域から推定'], 'PromptQuorumガイド'],
    zh: ['笔记本适用的本地LLM', ['Llama 3.2 3B：2.0 GB', 'Qwen3 8B：5.2 GB', '速度按内存带宽估算'], 'PromptQuorum 指南'],
    ko: ['노트북용 로컬 LLM 모델', ['Llama 3.2 3B: 2.0 GB', 'Qwen3 8B: 5.2 GB', '속도는 메모리 대역폭 기준'], 'PromptQuorum 가이드'],
  },
};
for (const [set, langs] of Object.entries(SETS)) {
  for (const [lang, [title, highlights, footer]] of Object.entries(langs)) {
    if (process.env.HERO_ONLY && !process.env.HERO_ONLY.split(',').includes(`${set}:${lang}`)) continue;
    const res = await fetch(`${BASE}/api/hero-image`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lang, title, highlights, footer }) });
    if (!res.ok) throw new Error(`${set}/${lang}: HTTP ${res.status} ${await res.text()}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const out = `public/images/local-llm-on-laptop-${set}-hero-${lang}.webp`;
    await sharp(buf).webp({ lossless: true, effort: 6 }).toFile(out);
    console.log(out);
  }
}
