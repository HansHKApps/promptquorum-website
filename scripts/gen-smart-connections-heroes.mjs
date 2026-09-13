#!/usr/bin/env node
// One-off generator for smart-connections-review hero images (9 languages).
const BASE = 'http://localhost:3400';
const SPECS = {
  en: {
    title: 'Smart Connections Review 2026: Local Semantic Search for Obsidian',
    subtitle: 'An Obsidian plugin by developer Brian Petro that finds semantically related notes as you write, using a bundled local embedding model with no API key needed. Works on desktop and mobile. License changed from GPLv3 to a source-available license in 2026.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Smart Connections Review 2026: Lokale semantische Suche für Obsidian',
    subtitle: 'Ein Obsidian-Plugin von Entwickler Brian Petro, das beim Schreiben semantisch verwandte Notizen findet, mit einem mitgelieferten lokalen Embedding-Modell ohne API-Schlüssel. Funktioniert auf Desktop und mobil. Lizenz wechselte 2026 von GPLv3 zu einer quellverfügbaren Lizenz.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Smart Connections Review 2026 : recherche sémantique locale pour Obsidian',
    subtitle: 'Un plugin Obsidian du développeur Brian Petro qui trouve les notes sémantiquement liées pendant l\'écriture, avec un modèle d\'embedding local intégré sans clé API. Fonctionne sur ordinateur et mobile. Licence passée de GPLv3 à une licence à code source disponible en 2026.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Smart Connections レビュー2026：Obsidian向けローカルセマンティック検索',
    subtitle: '開発者Brian PetroによるObsidianプラグイン。同梱のローカル埋め込みモデルを使い、APIキー不要で執筆中に意味的に関連するノートを発見。デスクトップ・モバイル両対応。2026年にGPLv3からソース公開型ライセンスへ変更。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Smart Connections评测2026：Obsidian本地语义搜索',
    subtitle: '开发者Brian Petro打造的Obsidian插件，使用内置本地嵌入模型，无需API密钥即可在写作时发现语义相关笔记。支持桌面和移动端。2026年许可证从GPLv3变更为源代码可用许可证。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Smart Connections Review 2026: búsqueda semántica local para Obsidian',
    subtitle: 'Un plugin de Obsidian del desarrollador Brian Petro que encuentra notas semánticamente relacionadas mientras escribes, con un modelo de embeddings local integrado sin clave API. Funciona en escritorio y móvil. La licencia cambió de GPLv3 a una licencia de código disponible en 2026.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Smart Connections Review 2026: busca semântica local para o Obsidian',
    subtitle: 'Um plugin do Obsidian do desenvolvedor Brian Petro que encontra notas semanticamente relacionadas enquanto você escreve, com um modelo de embeddings local embutido sem chave de API. Funciona no desktop e no mobile. Licença mudou de GPLv3 para uma licença de código disponível em 2026.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Smart Connections 2026: بحث دلالي محلي لـObsidian',
    subtitle: 'إضافة لتطبيق الملاحظات Obsidian من المطور Brian Petro تجد الملاحظات المرتبطة دلاليًا أثناء الكتابة، باستخدام نموذج تضمين محلي مدمج دون الحاجة إلى مفتاح API. تعمل على سطح المكتب والهاتف الجوال على حد سواء. تغيّر ترخيصها من GPLv3 إلى ترخيص جديد متاح المصدر في أوائل عام 2026، وهو تغيير أثار انتقادات في جزء من المجتمع على GitHub.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Smart Connections 리뷰 2026: Obsidian용 로컬 의미 검색',
    subtitle: '개발자 Brian Petro가 만든 Obsidian 플러그인으로, API 키 없이 내장 로컬 임베딩 모델을 사용해 작성 중 의미적으로 관련된 노트를 찾아줍니다. 데스크톱과 모바일 모두 지원. 2026년 라이선스가 GPLv3에서 소스 공개형 라이선스로 변경.',
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} - ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/smart-connections-review-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  console.log('=== smart-connections-review ===');
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
