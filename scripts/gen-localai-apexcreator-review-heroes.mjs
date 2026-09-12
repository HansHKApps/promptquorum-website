#!/usr/bin/env node
const BASE = 'http://localhost:3000';
const SPECS = {
  'localai-apexcreator-review': {
    en: { title: "LocalAI Review: ApexCreator's Offline Android AI Chat App", subtitle: '', bullets: ["Free Android app running GGUF models on-device via llama.cpp, with an optional premium tier", "Adds document chat (PDF, Word, Excel, CSV) and vision model support, per the Google Play listing", "Closed source — no public code repository found for this review, unlike open-source alternatives"], footer: "PromptQuorum Guide" },
    de: { title: "LocalAI Review: Offline-Android-KI-App von ApexCreator", subtitle: '', bullets: ["Kostenlose Android-App, die GGUF-Modelle über llama.cpp auf dem Gerät ausführt, mit optionaler Premium-Stufe", "Bietet laut Google-Play-Eintrag Dokumenten-Chat (PDF, Word, Excel, CSV) und Unterstützung für Vision-Modelle", "Closed Source – für diesen Test wurde kein öffentliches Code-Repository gefunden, anders als bei Open-Source-Alternativen"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Avis LocalAI : application Android IA hors ligne d'ApexCreator", subtitle: '', bullets: ["Application Android gratuite exécutant des modèles GGUF sur l'appareil via llama.cpp, avec un palier premium optionnel", "Ajoute le chat de documents (PDF, Word, Excel, CSV) et la prise en charge de modèles de vision, selon la fiche Google Play", "Code source fermé — aucun dépôt de code public trouvé pour cet avis, contrairement aux alternatives open source"], footer: "Guide PromptQuorum" },
    es: { title: "Reseña de LocalAI: app Android de IA sin conexión de ApexCreator", subtitle: '', bullets: ["App Android gratuita que ejecuta modelos GGUF en el dispositivo mediante llama.cpp, con un nivel premium opcional", "Añade chat de documentos (PDF, Word, Excel, CSV) y compatibilidad con modelos de visión, según la ficha de Google Play", "Código cerrado: no se encontró un repositorio de código público para esta reseña, a diferencia de las alternativas de código abierto"], footer: "Guía de PromptQuorum" },
    pt: { title: "Análise do LocalAI: app Android de IA offline da ApexCreator", subtitle: '', bullets: ["App Android gratuito que executa modelos GGUF no dispositivo via llama.cpp, com um nível premium opcional", "Adiciona chat de documentos (PDF, Word, Excel, CSV) e suporte a modelos de visão, segundo a ficha do Google Play", "Código fechado — nenhum repositório de código público foi encontrado para esta análise, diferente das alternativas de código aberto"], footer: "Guia PromptQuorum" },
    ja: { title: "LocalAIレビュー:ApexCreatorのオフラインAndroid AIチャットアプリ", subtitle: '', bullets: ["llama.cpp経由でGGUFモデルをオンデバイスで実行する無料Androidアプリ。有料プランはオプション", "Google Playの掲載情報によれば、ドキュメントチャット(PDF、Word、Excel、CSV)とビジョンモデル対応を追加", "クローズドソース——本レビューでは公開コードリポジトリは見つからず、オープンソースの代替アプリとは異なる"], footer: "PromptQuorumガイド" },
    zh: { title: "LocalAI评测:ApexCreator的离线Android AI聊天应用", subtitle: '', bullets: ["通过llama.cpp在设备端运行GGUF模型的免费Android应用,提供可选高级版", "据Google Play页面介绍,新增文档聊天(PDF、Word、Excel、CSV)及视觉模型支持", "闭源——本评测未找到公开代码仓库,与开源替代方案不同"], footer: "PromptQuorum 指南" },
    ar: { title: "مراجعة LocalAI: تطبيق أندرويد للذكاء الاصطناعي دون إنترنت من ApexCreator", subtitle: '', bullets: ["تطبيق أندرويد مجاني يشغّل نماذج GGUF على الجهاز عبر llama.cpp، مع مستوى مدفوع اختياري", "يضيف الدردشة مع المستندات (PDF وWord وExcel وCSV) ودعم نماذج الرؤية، وفق صفحة Google Play", "مغلق المصدر — لم يعثر هذا التقرير على مستودع كود عام، بخلاف البدائل مفتوحة المصدر"], footer: "دليل PromptQuorum" },
    ko: { title: "LocalAI 리뷰: ApexCreator의 오프라인 안드로이드 AI 채팅 앱", subtitle: '', bullets: ["llama.cpp를 통해 GGUF 모델을 온디바이스에서 실행하는 무료 안드로이드 앱, 선택적 프리미엄 등급 제공", "Google Play 등록 정보에 따르면 문서 채팅(PDF, Word, Excel, CSV) 및 비전 모델 지원 추가", "비공개 소스 — 이 리뷰에서는 공개 코드 저장소를 찾지 못했으며, 오픈소스 대안과는 다름"], footer: "PromptQuorum 가이드" },
  },
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${basename}/${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${basename}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [basename, locales] of Object.entries(SPECS)) {
    console.log(`=== ${basename} ===`);
    for (const [lang, spec] of Object.entries(locales)) {
      await generate(basename, lang, spec);
    }
  }
  console.log('done');
})();
