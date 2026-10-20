#!/usr/bin/env node
// Hero + decision-tree poster generator for deepseek-vs-qwen-coding-local-2026 (rebuilt article: Qwen3.8 / DeepSeek V4.x).
// Usage: BASE=http://localhost:3458 node scripts/gen-deepseek-vs-qwen-coding-heroes.mjs
import fs from 'fs/promises';
import sharp from 'sharp';
const ONLY = process.argv[2];

const BASE = process.env.BASE || 'http://localhost:3458';
const SLUG = 'deepseek-vs-qwen-coding-local-2026';
const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
};
const HERO = {
  en: ['DeepSeek V4 vs Qwen3.8 for Local Coding 2026', ['No like-for-like winner', 'Qwen3.8-27B: Apache-2.0, 18 GB', 'DeepSeek V4: MIT, server-class']],
  de: ['DeepSeek V4 vs Qwen3.8 für lokales Coding 2026', ['Kein Sieger bei gleichen Bedingungen', 'Qwen3.8-27B: Apache-2.0, 18 GB', 'DeepSeek V4: MIT, Server-Klasse']],
  fr: ['DeepSeek V4 vs Qwen3.8 pour le coding local 2026', ['Pas de vainqueur à conditions identiques', 'Qwen3.8-27B : Apache-2.0, 18 GB', 'DeepSeek V4 : MIT, classe serveur']],
  ja: ['DeepSeek V4 vs Qwen3.8 ローカルコーディング2026', ['同一条件の勝者なし', 'Qwen3.8-27B 18GB', 'DeepSeek V4 サーバー級']],
  zh: ['DeepSeek V4 vs Qwen3.8本地编程2026', ['没有同条件胜者', 'Qwen3.8-27B:18GB', 'DeepSeek V4:服务器级']],
  es: ['DeepSeek V4 vs Qwen3.8 para coding local 2026', ['Sin ganador en igualdad de condiciones', 'Qwen3.8-27B: Apache-2.0, 18 GB', 'DeepSeek V4: MIT, nivel servidor']],
  pt: ['DeepSeek V4 vs Qwen3.8 para codificação local 2026', ['Sem vencedor em condições idênticas', 'Qwen3.8-27B: Apache-2.0, 18 GB', 'DeepSeek V4: MIT, nível servidor']],
  ar: ['⁨DeepSeek V4⁩ مقابل ⁨Qwen3.8⁩ للبرمجة المحلية ⁨2026⁩', ['لا يوجد فائز بشروط متطابقة', 'Qwen3.8-27B بحجم 18GB', 'DeepSeek V4 مستوى خوادم']],
  ko: ['DeepSeek V4 vs Qwen3.8 로컬 코딩 2026', ['동일 조건 우승자 없음', 'Qwen3.8-27B: 18 GB', 'DeepSeek V4: 서버급']],
};
const TREE = {
  en: ['DeepSeek V4 vs Qwen3.8 Coding Decision', ['Code stays local: Qwen3.8-27B', 'Server hardware: DeepSeek V4 (MIT)', 'Code may leave: vendor API']],
  es: ['Decisión de coding: DeepSeek V4 vs Qwen3.8', ['Código local: Qwen3.8-27B', 'Hardware de servidor: DeepSeek V4', 'Puede salir: API del proveedor']],
  pt: ['Decisão de codificação: DeepSeek V4 vs Qwen3.8', ['Código local: Qwen3.8-27B', 'Hardware de servidor: DeepSeek V4', 'Pode sair: API do fornecedor']],
  ko: ['코딩 결정: DeepSeek V4 vs Qwen3.8', ['로컬: Qwen3.8-27B', '서버: DeepSeek V4', '외부 허용: 벤더 API']],
  ar: ['قرار البرمجة: DeepSeek V4 مقابل Qwen3.8', ['الكود محلي: Qwen3.8-27B', 'عتاد خوادم: DeepSeek V4', 'واجهة الشركة إذا غادر الكود']],
};

// Arabic: the hero route renders each space-separated word as its own flex item; keep Latin multi-word names
// ("DeepSeek V4") are written reversed ("V4 DeepSeek") because row-reverse flips item order; strip bidi marks (no glyph in poster font).
const fixAr = (t) => t.replace(/[‎‏⁦-⁩]/g, '').replace('DeepSeek V4', 'V4 DeepSeek');

async function run(kind, specs) {
  for (const [lang, [rawTitle, rawHighlights]] of Object.entries(specs)) {
    if (ONLY && ONLY !== lang) continue;
    const title = lang === 'ar' ? fixAr(rawTitle) : rawTitle;
    const highlights = lang === 'ar' ? rawHighlights.map(fixAr) : rawHighlights;
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, title, highlights, footer: FOOTER[lang] }),
    });
    if (!res.ok) { console.error(`[${kind}/${lang}] FAILED ${res.status}: ${await res.text()}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const out = `public/images/${SLUG}-${kind}-hero-${lang}`;
    await sharp(buf).webp({ lossless: true, effort: 6 }).toFile(`${out}.webp`);
    console.log(`[${kind}/${lang}] OK -> ${out}.webp`);
  }
}
await run('model-comparison', HERO);
await run('decision-tree', TREE);
