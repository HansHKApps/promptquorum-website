#!/usr/bin/env node
const BASE = 'http://localhost:3400';
const SLUG = 'hyperlink-nexa-review';
const SPECS = {
  en: {
    title: 'Hyperlink (Nexa AI) Review 2026: On-Device File Search',
    subtitle: 'Free desktop app from Nexa AI that indexes your PDFs, notes, screenshots, and slides, then answers natural-language questions with citations back to the source file — 100% on-device processing, no cloud upload. Closed-source software; runs on macOS and Windows.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Hyperlink (Nexa AI) im Test 2026: Lokale KI-Dateisuche',
    subtitle: 'Kostenlose Desktop-App von Nexa AI, die PDFs, Notizen, Screenshots und Folien indiziert und Fragen dazu mit Quellenangabe zur konkreten Quelldatei beantwortet — 100% lokale Verarbeitung, kein Cloud-Upload. Closed Source; läuft unter macOS und Windows.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Hyperlink (Nexa AI) : avis 2026 — recherche de fichiers IA locale',
    subtitle: 'Application de bureau gratuite de Nexa AI qui indexe PDF, notes, captures d\'écran et diapositives, puis répond aux questions avec citations vers le fichier source — 100% local, aucun envoi vers le cloud. Logiciel propriétaire ; macOS et Windows.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Hyperlink(Nexa AI)レビュー2026:オンデバイスAIファイル検索',
    subtitle: 'Nexa AI提供の無料デスクトップアプリ。PDF・メモ・スクリーンショット・スライドをインデックス化し、出典付きで質問に回答——完全オンデバイスでクラウド送信なし。クローズドソース、macOS/Windows対応。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Hyperlink(Nexa AI)评测2026:本地设备端AI文件搜索',
    subtitle: 'Nexa AI推出的免费桌面应用,为PDF、笔记、截图和幻灯片建立索引,并以自然语言问答并引用来源——完全本地处理,不上传云端。闭源软件,支持macOS和Windows。',
    footer: 'PromptQuorum 指南',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
