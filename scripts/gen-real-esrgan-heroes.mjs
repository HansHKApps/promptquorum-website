#!/usr/bin/env node
const BASE = 'http://localhost:3405';
const SLUG = 'real-esrgan-ai-image-upscaler-review';
const SPECS = {
  en: {
    title: 'Real-ESRGAN Review: Free, Local AI Image Upscaler',
    subtitle: 'Free, open-source (Apache 2.0) AI upscaler from Tencent ARC Lab. Runs 100% locally via a Python command-line tool or a no-install NCNN-Vulkan executable. Powers the upscale feature in Upscayl, ComfyUI, and AUTOMATIC1111 WebUI. No account, subscription, or internet connection required.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Real-ESRGAN im Test: Kostenloser, lokaler KI-Bild-Upscaler',
    subtitle: 'Kostenloser, quelloffener (Apache 2.0) KI-Upscaler von Tencent ARC Lab. Läuft zu 100% lokal über ein Python-Kommandozeilentool oder eine installationsfreie NCNN-Vulkan-Datei. Treibt die Hochskalieren-Funktion in Upscayl, ComfyUI und AUTOMATIC1111 WebUI an. Kein Konto, Abo oder Internet nötig.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Real-ESRGAN : upscaler d\'images IA gratuit et local',
    subtitle: 'Upscaler IA gratuit et open source (Apache 2.0) du Tencent ARC Lab. Fonctionne 100% en local via un outil Python en ligne de commande ou un exécutable NCNN-Vulkan sans installation. Alimente la fonction d\'agrandissement dans Upscayl, ComfyUI et AUTOMATIC1111 WebUI. Aucun compte, abonnement ni internet requis.',
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Real-ESRGAN: upscaler de imágenes IA gratuito y local',
    subtitle: 'Upscaler de IA gratuito y de código abierto (Apache 2.0) de Tencent ARC Lab. Funciona 100% en local mediante una herramienta de Python en línea de comandos o un ejecutable NCNN-Vulkan sin instalación. Impulsa la función de ampliar en Upscayl, ComfyUI y AUTOMATIC1111 WebUI. Sin cuenta, suscripción ni internet.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Real-ESRGAN: upscaler de imagens IA gratuito e local',
    subtitle: 'Upscaler de IA gratuito e de código aberto (Apache 2.0) do Tencent ARC Lab. Roda 100% localmente via uma ferramenta Python de linha de comando ou um executável NCNN-Vulkan sem instalação. Alimenta a função de ampliar no Upscayl, ComfyUI e AUTOMATIC1111 WebUI. Sem conta, assinatura ou internet.',
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'Real-ESRGANレビュー：無料・ローカルAI画像アップスケーラー',
    subtitle: 'Tencent ARC Lab発の無料・オープンソース（Apache 2.0）AIアップスケーラー。Pythonコマンドラインツール、またはインストール不要のNCNN-Vulkan実行ファイルで100%ローカル動作。Upscayl、ComfyUI、AUTOMATIC1111 WebUIのアップスケール機能を支える。アカウント・サブスク・ネット接続は不要。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Real-ESRGAN评测：免费本地AI图像放大工具',
    subtitle: '腾讯ARC实验室推出的免费开源（Apache 2.0）AI放大工具。通过Python命令行工具或无需安装的NCNN-Vulkan可执行文件100%本地运行。驱动Upscayl、ComfyUI和AUTOMATIC1111 WebUI的放大功能。无需账号、订阅或联网。',
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة Real-ESRGAN: أداة تكبير صور بالذكاء الاصطناعي مجانية ومحلية',
    subtitle: 'أداة تكبير مجانية ومفتوحة المصدر (Apache 2.0) من Tencent ARC Lab. تعمل محلياً بالكامل عبر أداة سطر أوامر بلغة Python أو ملف تنفيذي NCNN-Vulkan لا يحتاج تثبيتاً. تشغّل ميزة التكبير في Upscayl و ComfyUI و AUTOMATIC1111 WebUI. دون حساب أو اشتراك أو إنترنت.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Real-ESRGAN 리뷰: 무료 로컬 AI 이미지 업스케일러',
    subtitle: 'Tencent ARC Lab이 만든 무료 오픈소스(Apache 2.0) AI 업스케일러. Python 명령줄 도구 또는 설치가 필요 없는 NCNN-Vulkan 실행 파일로 100% 로컬 실행. Upscayl, ComfyUI, AUTOMATIC1111 WebUI의 업스케일 기능을 구동. 계정, 구독, 인터넷 연결 불필요.',
    footer: 'PromptQuorum 가이드',
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
  const outPath = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(outPath, buf));
  console.log(`  ${outPath} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
