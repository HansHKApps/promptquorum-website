#!/usr/bin/env node
// One-off generator for enclave-ai-review-2026 hero images (all 9 locales).
const BASE = 'http://localhost:3400';
const BASENAME = 'enclave-ai-review-2026';

const SPECS = {
  en: {
    title: 'Enclave AI Review 2026: On-Device AI for iPhone, iPad, Mac',
    subtitle: 'Enclave AI runs open-source AI models entirely on-device on iPhone, iPad, and Mac — no account required, and chat works offline once a model is downloaded. Built by independent developer Piotr Gorzelany. Free to download, with in-app purchases, Apple devices only.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Enclave AI Review 2026: KI auf dem Gerät für iPhone, iPad, Mac',
    subtitle: 'Enclave AI führt Open-Source-KI-Modelle vollständig auf dem eigenen Gerät aus, auf iPhone, iPad und Mac — kein Konto nötig, Chat funktioniert offline nach dem Modell-Download. Entwickelt vom unabhängigen Entwickler Piotr Gorzelany. Kostenlos mit In-App-Käufen, nur für Apple-Geräte.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Enclave AI Review 2026 : IA sur l’appareil pour iPhone, iPad, Mac',
    subtitle: 'Enclave AI exécute des modèles d’IA open source entièrement sur l’appareil, sur iPhone, iPad et Mac — aucun compte requis, et le chat fonctionne hors ligne après le téléchargement d’un modèle. Développée par le développeur indépendant Piotr Gorzelany. Gratuite avec achats intégrés, uniquement sur Apple.',
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Enclave AI Review 2026: IA en el dispositivo para iPhone, iPad, Mac',
    subtitle: 'Enclave AI ejecuta modelos de IA de código abierto por completo en el dispositivo, en iPhone, iPad y Mac — sin cuenta, y el chat funciona sin conexión tras descargar un modelo. Desarrollada por el desarrollador independiente Piotr Gorzelany. Gratis con compras integradas, solo para dispositivos Apple.',
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Enclave AIレビュー2026：iPhone・iPad・Mac向けオンデバイスAI',
    subtitle: 'Enclave AIは、iPhone・iPad・Mac上でオープンソースAIモデルを完全にオンデバイスで実行。アカウント不要、モデルダウンロード後はオフラインでチャット可能。開発者はPiotr Gorzelany氏、無料（アプリ内課金あり）。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Enclave AI评测2026：iPhone、iPad、Mac设备端AI',
    subtitle: 'Enclave AI在iPhone、iPad和Mac上完全设备端运行开源AI模型——无需账号，下载模型后可离线聊天。独立开发者Piotr Gorzelany开发，免费且支持内购。',
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Enclave AI Review 2026: IA no dispositivo para iPhone, iPad, Mac',
    subtitle: 'Enclave AI executa modelos de IA de código aberto inteiramente no dispositivo, em iPhone, iPad e Mac — sem conta, e o chat funciona offline depois de baixar um modelo. Desenvolvido pelo desenvolvedor independente Piotr Gorzelany. Gratuito com compras no app, apenas para dispositivos Apple.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Enclave AI 2026: ذكاء اصطناعي على الجهاز لـ iPhone وiPad وMac',
    subtitle: 'يشغّل Enclave AI نماذج ذكاء اصطناعي مفتوحة المصدر بالكامل على الجهاز، على iPhone وiPad وMac — دون حساب، وتعمل المحادثة دون اتصال بعد تنزيل نموذج. طوّره المطوّر المستقل Piotr Gorzelany. مجاني مع مشتريات داخل التطبيق، لأجهزة Apple فقط.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Enclave AI 리뷰 2026: iPhone·iPad·Mac용 온디바이스 AI',
    subtitle: 'Enclave AI는 iPhone, iPad, Mac에서 오픈소스 AI 모델을 완전히 기기 내에서 실행합니다 — 계정 불필요, 모델 다운로드 후 오프라인 채팅. 독립 개발자 Piotr Gorzelany, 무료(인앱 구매 포함).',
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`${lang}: HTTP ${res.status} ${text.slice(0, 300)}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = `public/images/${BASENAME}-hero-${lang}.png`;
  await import('node:fs/promises').then((fs) => fs.writeFile(outPath, buf));
  console.log(`  ${outPath} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
