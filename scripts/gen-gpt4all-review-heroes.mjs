#!/usr/bin/env node
const BASE = 'http://localhost:3411';
const SPECS = {
  'gpt4all-review': {
    en: { title: "GPT4All Review 2026: Free Offline AI Chat App by Nomic AI", subtitle: '', bullets: ["GPT4All is free and open-source; the official GitHub LICENSE.txt is the standard MIT license, and there is no pricing page for the desktop app", "Runs local models through a built-in llama.cpp-based engine — no separate runtime install needed", "LocalDocs lets you chat with your own local documents (PDF, text, and more), with hybrid BM25 search added to improve retrieval accuracy"], footer: "PromptQuorum Guide" },
    de: { title: "GPT4All Review 2026: Kostenlose Offline-KI-Chat-App von Nomic AI", subtitle: '', bullets: ["GPT4All ist kostenlos und quelloffen; die offizielle GitHub-LICENSE.txt ist die Standard-MIT-Lizenz, und es gibt keine Preisseite für die Desktop-App", "Führt lokale Modelle über eine eingebaute, auf llama.cpp basierende Engine aus — keine separate Runtime-Installation nötig", "LocalDocs lässt Sie mit Ihren eigenen lokalen Dokumenten (PDF, Text und mehr) chatten, mit hybrider BM25-Suche zur Verbesserung der Trefferqualität"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "GPT4All Review 2026 : l'application de chat IA hors ligne gratuite de Nomic AI", subtitle: '', bullets: ["GPT4All est gratuit et open source ; le fichier LICENSE.txt officiel sur GitHub est la licence MIT standard, et il n'existe aucune page tarifaire pour l'application de bureau", "Exécute des modèles locaux via un moteur intégré basé sur llama.cpp — aucune installation d'exécution séparée nécessaire", "LocalDocs permet de discuter avec vos propres documents locaux (PDF, texte et plus), avec une recherche hybride BM25 pour améliorer la pertinence des résultats"], footer: "Guide PromptQuorum" },
    es: { title: "GPT4All Review 2026: App de chat IA gratuita y sin conexión de Nomic AI", subtitle: '', bullets: ["GPT4All es gratuita y de código abierto; el archivo LICENSE.txt oficial en GitHub es la licencia MIT estándar, y no existe página de precios para la app de escritorio", "Ejecuta modelos locales mediante un motor integrado basado en llama.cpp — no necesitas instalar un runtime aparte", "LocalDocs te permite chatear con tus propios documentos locales (PDF, texto y más), con búsqueda híbrida BM25 para mejorar la precisión de la recuperación"], footer: "Guía de PromptQuorum" },
    ja: { title: "GPT4Allレビュー2026：Nomic AIの無料オフラインAIチャットアプリ", subtitle: '', bullets: ["GPT4Allは無料かつオープンソース。GitHub公式のLICENSE.txtは標準的なMITライセンスで、デスクトップアプリに料金ページはない", "内蔵のllama.cppベースエンジンでローカルモデルを実行 — 別途ランタイムのインストールは不要", "LocalDocsでは自分のローカルドキュメント（PDF、テキストなど）とチャットでき、ハイブリッドBM25検索で検索精度を向上"], footer: "PromptQuorumガイド" },
    zh: { title: "GPT4All评测2026：Nomic AI推出的免费离线AI聊天应用", subtitle: '', bullets: ["GPT4All免费且开源；GitHub官方LICENSE.txt是标准的MIT许可证，桌面应用没有定价页面", "通过内置的基于llama.cpp的引擎运行本地模型——无需单独安装运行时", "LocalDocs让你可以与自己的本地文档（PDF、文本等）对话，并使用混合BM25搜索提高检索准确性"], footer: "PromptQuorum 指南" },
    pt: { title: "GPT4All Review 2026: App de Chat com IA Offline e Gratuito da Nomic AI", subtitle: '', bullets: ["O GPT4All é gratuito e de código aberto; o arquivo LICENSE.txt oficial no GitHub é a licença MIT padrão, e não existe página de preços para o app de desktop", "Roda modelos locais por meio de um motor integrado baseado em llama.cpp — sem necessidade de instalar um runtime separado", "O LocalDocs permite conversar com seus próprios documentos locais (PDF, texto e mais), com busca híbrida BM25 para melhorar a precisão da recuperação"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة GPT4All 2026: تطبيق دردشة ذكاء اصطناعي مجاني يعمل دون إنترنت من Nomic AI", subtitle: '', bullets: ["GPT4All مجاني ومفتوح المصدر؛ ملف LICENSE.txt الرسمي على GitHub هو رخصة MIT القياسية، ولا توجد صفحة أسعار لتطبيق سطح المكتب", "يشغّل النماذج المحلية عبر محرك مدمج قائم على llama.cpp — دون الحاجة لتثبيت بيئة تشغيل منفصلة", "يتيح LocalDocs الدردشة مع مستنداتك المحلية الخاصة (PDF ونصوص وغيرها)، مع بحث هجين BM25 لتحسين دقة الاسترجاع"], footer: "دليل PromptQuorum" },
    ko: { title: "GPT4All 리뷰 2026: Nomic AI의 무료 오프라인 AI 채팅 앱", subtitle: '', bullets: ["GPT4All은 무료이자 오픈소스입니다. GitHub 공식 LICENSE.txt는 표준 MIT 라이선스이며, 데스크톱 앱에는 요금 페이지가 없습니다", "내장된 llama.cpp 기반 엔진으로 로컬 모델을 실행 — 별도 런타임 설치 불필요", "LocalDocs를 통해 자신의 로컬 문서(PDF, 텍스트 등)와 대화할 수 있으며, 하이브리드 BM25 검색으로 검색 정확도를 향상"], footer: "PromptQuorum 가이드" },
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
