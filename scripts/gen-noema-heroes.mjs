#!/usr/bin/env node
// One-off hero image generator for the Noema review article (9 locales).
const BASE = 'http://localhost:3415';

const SPECS = {
  en: {
    title: 'Noema Review (2026): Multi-Format Local AI for iPhone, iPad, and Mac',
    footer: 'PromptQuorum Guide',
    bullets: [
      'Free on the Apple App Store — no subscription, no in-app purchases.',
      'Loads models in 5 formats: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
      'On-device document chat: import PDFs and EPUBs for grounded Q&A.',
      '4.5/5 rating from only 26 ratings as of this review — a small early sample.',
    ],
  },
  de: {
    title: 'Noema im Test (2026): Multi-Format-KI lokal für iPhone, iPad und Mac',
    footer: 'PromptQuorum-Leitfaden',
    bullets: [
      'Kostenlos im Apple App Store — kein Abonnement, keine In-App-Käufe.',
      'Lädt Modelle in 5 Formaten: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
      'Dokument-Chat auf dem Gerät: PDFs und EPUBs für fundierte Fragen und Antworten importieren.',
      '4,5/5 Bewertung aus nur 26 Bewertungen zum Zeitpunkt dieses Tests — eine kleine Stichprobe.',
    ],
  },
  fr: {
    title: 'Noema : notre avis (2026) — IA multi-format en local pour iPhone, iPad et Mac',
    footer: 'Guide PromptQuorum',
    bullets: [
      'Gratuite sur l’App Store d’Apple — sans abonnement ni achat intégré.',
      'Charge les modèles dans 5 formats : GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
      'Chat de documents sur l’appareil : importez des PDF et EPUB pour des réponses fondées.',
      'Note de 4,5/5 sur seulement 26 avis au moment de ce test — un échantillon restreint.',
    ],
  },
  es: {
    title: 'Noema: reseña (2026) — IA local multiformato para iPhone, iPad y Mac',
    footer: 'Guía de PromptQuorum',
    bullets: [
      'Gratis en la App Store de Apple — sin suscripción ni compras dentro de la app.',
      'Carga modelos en 5 formatos: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
      'Chat de documentos en el dispositivo: importa PDF y EPUB para respuestas fundamentadas.',
      'Calificación de 4.5/5 con solo 26 valoraciones al momento de esta reseña — muestra pequeña.',
    ],
  },
  pt: {
    title: 'Noema: análise (2026) — IA local multiformato para iPhone, iPad e Mac',
    footer: 'Guia PromptQuorum',
    bullets: [
      'Gratuito na App Store da Apple — sem assinatura, sem compras no aplicativo.',
      'Carrega modelos em 5 formatos: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
      'Chat de documentos no dispositivo: importe PDFs e EPUBs para respostas fundamentadas.',
      'Avaliação de 4,5/5 com apenas 26 avaliações no momento desta análise — amostra pequena.',
    ],
  },
  ja: {
    title: 'Noemaレビュー(2026):iPhone・iPad・Mac向けマルチフォーマットのローカルAI',
    footer: 'PromptQuorumガイド',
    bullets: [
      'Apple App Storeで無料 — サブスクリプションもアプリ内課金もなし。',
      '5つの形式でモデルを読み込み:GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
      'オンデバイス文書チャット:PDFやEPUBをインポートして根拠のある回答。',
      '評価4.5/5、評価数はわずか26件 — サンプルサイズは小さい。',
    ],
  },
  zh: {
    title: 'Noema 评测(2026):适用于 iPhone、iPad 和 Mac 的多格式本地 AI',
    footer: 'PromptQuorum 指南',
    bullets: [
      '在 Apple App Store 免费提供 — 无订阅,无应用内购买。',
      '支持5种模型格式:GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models。',
      '设备端文档聊天:导入 PDF 和 EPUB 获取有据可查的回答。',
      '评分4.5/5,仅基于26条评价 — 样本量较小。',
    ],
  },
  ar: {
    title: 'مراجعة Noema (2026): ذكاء اصطناعي محلي متعدد الصيغ لأجهزة iPhone وiPad وMac',
    footer: 'دليل PromptQuorum',
    bullets: [
      'مجاني على متجر تطبيقات Apple — لا اشتراك ولا مشتريات داخل التطبيق.',
      'يُحمّل النماذج بخمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation.',
      'محادثة مستندات على الجهاز: استيراد PDF وEPUB للحصول على إجابات مبنية على الجهاز.',
      'تقييم 4.5 من 5 بناءً على 26 تقييمًا فقط وقت هذه المراجعة — عينة صغيرة.',
    ],
  },
  ko: {
    title: 'Noema 리뷰(2026): iPhone·iPad·Mac용 멀티 포맷 로컬 AI',
    footer: 'PromptQuorum 가이드',
    bullets: [
      'Apple App Store에서 무료 — 구독 없음, 인앱 구매 없음.',
      '5가지 형식으로 모델 로드: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models.',
      '온디바이스 문서 채팅: PDF와 EPUB를 가져와 근거 기반 답변.',
      '이 리뷰 시점 기준 26개 평가만으로 4.5/5점 — 표본 크기가 작음.',
    ],
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.bullets[0], bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/noema-review-hero-${lang}.png`;
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
