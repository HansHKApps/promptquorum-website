#!/usr/bin/env node
// One-off generator for google-ai-edge-gallery-review hero images (all 9 locales).
const BASE = 'http://localhost:3418';
const BASENAME = 'google-ai-edge-gallery-review';

const SPECS = {
  en: {
    title: 'Google AI Edge Gallery Review (2026): Gemma 4 On-Device Chat for iPhone',
    subtitle: 'Google\'s free iOS app runs Gemma 4 entirely on-device via LiteRT-LM, with no subscription and no per-message cost, and can import custom Hugging Face models. Labeled an experimental beta by Google — how it compares to Private LLM and PocketPal AI.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Google AI Edge Gallery im Test (2026): Gemma 4 On-Device-Chat fürs iPhone',
    subtitle: 'Googles kostenlose iOS-App führt Gemma 4 vollständig auf dem Gerät über LiteRT-LM aus, ohne Abonnement und ohne Kosten pro Nachricht, und kann eigene Hugging-Face-Modelle importieren. Von Google als experimentelle Beta bezeichnet — Vergleich mit Private LLM und PocketPal AI.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Google AI Edge Gallery : test (2026) — chat Gemma 4 sur l\'appareil pour iPhone',
    subtitle: 'L\'app iOS gratuite de Google exécute Gemma 4 entièrement sur l\'appareil via LiteRT-LM, sans abonnement ni coût par message, et permet d\'importer des modèles Hugging Face personnalisés. Qualifiée de bêta expérimentale par Google — comparaison avec Private LLM et PocketPal AI.',
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Google AI Edge Gallery: reseña (2026) — chat Gemma 4 en el dispositivo para iPhone',
    subtitle: 'La app iOS gratuita de Google ejecuta Gemma 4 completamente en el dispositivo vía LiteRT-LM, sin suscripción ni costo por mensaje, y permite importar modelos personalizados de Hugging Face. Etiquetada como beta experimental por Google — comparación con Private LLM y PocketPal AI.',
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Google AI Edge Gallery レビュー（2026年）：iPhone向けGemma 4オンデバイスチャット',
    subtitle: 'Googleの無料iOSアプリがLiteRT-LM経由でGemma 4を完全にオンデバイスで実行。サブスクリプションもメッセージ課金もなく、Hugging Faceのカスタムモデルもインポート可能。Google自身が実験的ベータと位置づけ——Private LLMやPocketPal AIとの比較。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Google AI Edge Gallery 评测（2026）：iPhone 上的 Gemma 4 设备端聊天',
    subtitle: '谷歌的免费iOS应用通过LiteRT-LM完全在设备端运行Gemma 4，无订阅、不按消息计费，还可导入自定义Hugging Face模型。谷歌将其标注为实验性测试版——与Private LLM、PocketPal AI的比较。',
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Google AI Edge Gallery: análise (2026) — chat Gemma 4 no dispositivo para iPhone',
    subtitle: 'O app iOS gratuito da Google executa o Gemma 4 totalmente no dispositivo via LiteRT-LM, sem assinatura e sem custo por mensagem, e permite importar modelos personalizados do Hugging Face. Rotulado como beta experimental pela Google — comparação com Private LLM e PocketPal AI.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Google AI Edge Gallery (2026): دردشة Gemma 4 على الجهاز لـiPhone',
    subtitle: 'تطبيق iOS المجاني من جوجل يُشغِّل Gemma 4 بالكامل على الجهاز عبر LiteRT-LM، دون اشتراك ودون تكلفة لكل رسالة، ويمكنه استيراد نماذج Hugging Face مخصصة. تُصنِّفه جوجل بأنه نسخة تجريبية اختبارية — مقارنة مع Private LLM وPocketPal AI.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Google AI Edge Gallery 리뷰 (2026): iPhone용 Gemma 4 온디바이스 채팅',
    subtitle: '구글의 무료 iOS 앱이 LiteRT-LM을 통해 Gemma 4를 완전히 온디바이스로 실행합니다. 구독도, 메시지당 비용도 없으며 커스텀 Hugging Face 모델도 가져올 수 있습니다. 구글 스스로 실험적 베타로 표시 — Private LLM 및 PocketPal AI와의 비교.',
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
