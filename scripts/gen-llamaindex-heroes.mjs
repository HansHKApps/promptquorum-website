#!/usr/bin/env node
const BASE = 'http://localhost:3412';
const SLUG = 'llamaindex-rag-framework-review';

const SPECS = {
  en: {
    title: 'LlamaIndex Review 2026: Code-First RAG Framework, Not a No-Code Builder',
    subtitle: 'LlamaIndex is a free, open-source (MIT) Python framework for connecting LLMs to your own data — built for developers who write code, not visual builders.',
    bullets: [
      'MIT license — the core Python framework is free and actively maintained',
      'Core flow: Documents/Nodes → Index → Retriever → Query Engine',
      'LlamaCloud is a separate paid platform — not required for the free framework',
      'The TypeScript SDK, LlamaIndex.TS, was archived and deprecated April 30, 2026',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'LlamaIndex Test 2026: Code-First-RAG-Framework mit MIT-Lizenz, kein No-Code-Builder',
    subtitle: 'LlamaIndex ist ein kostenloses, quelloffenes (MIT) Python-Framework, das LLMs mit eigenen Daten verbindet — für Entwickler, keine visuelle Oberfläche.',
    bullets: [
      'MIT-Lizenz — das Kern-Python-Framework ist kostenlos und aktiv gepflegt',
      'Kernablauf: Documents/Nodes → Index → Retriever → Query Engine',
      'LlamaCloud ist eine separate kostenpflichtige Plattform — für das freie Framework nicht nötig',
      'Das TypeScript-SDK LlamaIndex.TS wurde am 30. April 2026 archiviert und eingestellt',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'LlamaIndex : le framework RAG code-first (pas un constructeur visuel) — guide 2026',
    subtitle: 'LlamaIndex est un framework Python gratuit et open source (MIT) qui connecte les LLM à vos données — pour développeurs, pas un outil visuel.',
    bullets: [
      'Licence MIT — le framework Python principal est gratuit et activement maintenu',
      'Flux principal : Documents/Nodes → Index → Retriever → Query Engine',
      'LlamaCloud est une plateforme payante distincte — non requise pour le framework gratuit',
      'Le SDK TypeScript, LlamaIndex.TS, a été archivé et déprécié le 30 avril 2026',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'LlamaIndex 2026: el framework RAG code-first, sin editor visual',
    subtitle: 'LlamaIndex es un framework Python gratuito y de código abierto (MIT) que conecta LLMs con tus datos — para desarrolladores, sin editor visual.',
    bullets: [
      'Licencia MIT — el framework Python principal es gratuito y se mantiene activamente',
      'Flujo principal: Documents/Nodes → Index → Retriever → Query Engine',
      'LlamaCloud es una plataforma de pago aparte — no es necesaria para el framework gratuito',
      'El SDK de TypeScript, LlamaIndex.TS, se archivó y quedó obsoleto el 30 de abril de 2026',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'LlamaIndex 2026: o framework RAG code-first, sem editor visual',
    subtitle: 'LlamaIndex é um framework Python gratuito e de código aberto (MIT) que conecta LLMs aos seus dados — para desenvolvedores, sem editor visual.',
    bullets: [
      'Licença MIT — o framework Python principal é gratuito e mantido ativamente',
      'Fluxo principal: Documents/Nodes → Index → Retriever → Query Engine',
      'O LlamaCloud é uma plataforma paga separada — não é necessária para o framework gratuito',
      'O SDK TypeScript, LlamaIndex.TS, foi arquivado e descontinuado em 30 de abril de 2026',
    ],
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'LlamaIndex徹底解説：コードファーストRAGフレームワーク（MITライセンス・2026年版）',
    subtitle: 'LlamaIndexは、大規模言語モデルを自分のデータに接続する無料・オープンソース（MIT）のPythonフレームワークです。開発者向けで、ビジュアルビルダーではありません。',
    bullets: [
      'MITライセンス — コアのPythonフレームワークは無料で活発にメンテナンスされている',
      '中核フロー：Documents/Nodes → Index → Retriever → Query Engine',
      'LlamaCloudは別の有料プラットフォーム — 無料フレームワークの利用には不要',
      'TypeScript SDKのLlamaIndex.TSは2026年4月30日にアーカイブされ非推奨に',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'LlamaIndex评测2026：代码优先的RAG框架，MIT协议，非无代码工具',
    subtitle: 'LlamaIndex是一个免费开源（MIT）的Python框架，用于将大语言模型连接到你自己的数据——面向开发者，而非可视化工具。',
    bullets: [
      'MIT协议——核心Python框架免费，并持续获得积极维护',
      '核心流程：Documents/Nodes → Index → Retriever → Query Engine',
      'LlamaCloud是独立的付费平台——使用免费框架并不需要它',
      'TypeScript SDK即LlamaIndex.TS已于2026年4月30日被归档并弃用',
    ],
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة LlamaIndex 2026: إطار عمل RAG قائم على الكود، برخصة MIT، وليس أداة بلا كود',
    subtitle: 'LlamaIndex إطار عمل Python مجاني ومفتوح المصدر (MIT) يربط نماذج اللغة الكبيرة ببياناتك — للمطورين، وليس أداة بصرية.',
    bullets: [
      'رخصة MIT — إطار Python الأساسي مجاني ويُصان بنشاط',
      'التدفق الأساسي: Documents/Nodes ← Index ← Retriever ← Query Engine',
      'LlamaCloud منصة مدفوعة منفصلة — غير مطلوبة للإطار المجاني',
      'أُرشيفت حزمة TypeScript الخاصة بـ LlamaIndex.TS وأصبحت متوقفة في 30 أبريل 2026',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: '2026년 LlamaIndex 리뷰: 노코드가 아닌 코드 우선 RAG 프레임워크(MIT 라이선스)',
    subtitle: 'LlamaIndex는 대규모 언어 모델을 사용자 데이터에 연결하는 무료 오픈소스(MIT) Python 프레임워크입니다. 개발자용이며 비주얼 빌더가 아닙니다.',
    bullets: [
      'MIT 라이선스 — 핵심 Python 프레임워크는 무료이며 활발히 유지보수됨',
      '핵심 흐름: Documents/Nodes → Index → Retriever → Query Engine',
      'LlamaCloud는 별도의 유료 플랫폼 — 무료 프레임워크 사용에는 필요 없음',
      'TypeScript SDK인 LlamaIndex.TS는 2026년 4월 30일에 아카이브되어 지원 종료됨',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${lang}: HTTP ${res.status} ${text}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    console.log(`=== ${lang} ===`);
    await generate(lang, spec);
  }
  console.log('done');
})();
