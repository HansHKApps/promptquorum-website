#!/usr/bin/env node
const BASE = 'http://localhost:3411';
const SPECS = {
  'draw-things-review': {
    en: { title: "Draw Things Review (2026): Free Offline Image AI for Mac & iOS", subtitle: '', bullets: ["Draw Things is free to download; local, on-device image generation carries no subscription requirement or usage cap", "Supports Stable Diffusion 1.5, SDXL, SD3 Medium/3.5, FLUX.1, FLUX.2, HiDream, Qwen Image, and other diffusion model families, per the app's own App Store description and public release notes", "Full ControlNet support with multi-ControlNet stacking (for example depth + canny + color palette together)"], footer: "PromptQuorum Guide" },
    de: { title: "Draw Things Review 2026: Kostenlose Offline-Bild-KI für Mac & iOS", subtitle: '', bullets: ["Draw Things ist kostenlos zum Download; die lokale, geräteinterne Bildgenerierung erfordert kein Abonnement und kennt kein Nutzungslimit", "Unterstützt Stable Diffusion 1.5, SDXL, SD3 Medium/3.5, FLUX.1, FLUX.2, HiDream, Qwen Image und weitere Diffusionsmodell-Familien, laut eigener App-Store-Beschreibung und öffentlichen Release Notes", "Vollständige ControlNet-Unterstützung mit Multi-ControlNet-Stapelung (z. B. Tiefe + Canny + Farbpalette gemeinsam)"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Draw Things (2026) : générateur d'images IA gratuit hors ligne", subtitle: '', bullets: ["Draw Things est gratuit à télécharger ; la génération locale, sur l'appareil, ne nécessite aucun abonnement ni limite d'utilisation", "Prend en charge Stable Diffusion 1.5, SDXL, SD3 Medium/3.5, FLUX.1, FLUX.2, HiDream, Qwen Image et d'autres familles de modèles de diffusion, selon la description App Store et les notes de version publiques de l'application", "Prise en charge complète de ControlNet, avec empilement multi-ControlNet (par exemple profondeur + Canny + palette de couleurs ensemble)"], footer: "Guide PromptQuorum" },
    es: { title: "Draw Things (2026): IA de imágenes offline gratis para Mac e iOS", subtitle: '', bullets: ["Draw Things es gratuita para descargar; la generación de imágenes local en el dispositivo no requiere suscripción ni tiene límite de uso", "Compatible con Stable Diffusion 1.5, SDXL, SD3 Medium/3.5, FLUX.1, FLUX.2, HiDream, Qwen Image y otras familias de modelos de difusión, según la propia descripción de la App Store y las notas de versión públicas", "Compatibilidad completa con ControlNet, con apilamiento de varios ControlNets a la vez (por ejemplo, profundidad + bordes Canny + paleta de color juntos)"], footer: "Guía de PromptQuorum" },
    ja: { title: "Draw Thingsレビュー(2026)：Mac・iOS向け無料オフライン画像生成AI", subtitle: '', bullets: ["Draw Thingsはダウンロードが無料で、ローカル・オンデバイスの画像生成にサブスクリプションや利用制限は一切ない", "アプリ自体のApp Store説明文と公開リリースノートによると、Stable Diffusion 1.5、SDXL、SD3 Medium/3.5、FLUX.1、FLUX.2、HiDream、Qwen Imageなど多数の拡散モデルファミリーに対応", "複数のControlNetを同時に重ねられる（例：深度＋キャニーエッジ＋カラーパレット）完全なControlNet対応"], footer: "PromptQuorumガイド" },
    zh: { title: "Draw Things评测(2026)：Mac与iOS免费离线图像AI", subtitle: '', bullets: ["Draw Things可免费下载；本地设备端图像生成不要求订阅，也没有使用上限", "据应用自身的App Store介绍和公开更新说明，支持Stable Diffusion 1.5、SDXL、SD3 Medium/3.5、FLUX.1、FLUX.2、HiDream、Qwen Image等多个扩散模型家族", "完整支持ControlNet，可同时叠加多个ControlNet（例如深度+Canny边缘+色彩调色板一起使用）"], footer: "PromptQuorum 指南" },
    pt: { title: "Draw Things (2026): IA de imagens offline grátis para Mac e iOS", subtitle: '', bullets: ["Draw Things é gratuito para baixar; a geração de imagens local, no dispositivo, não exige assinatura nem tem limite de uso", "Compatível com Stable Diffusion 1.5, SDXL, SD3 Medium/3.5, FLUX.1, FLUX.2, HiDream, Qwen Image e outras famílias de modelos de difusão, segundo a própria descrição na App Store e as notas de versão públicas", "Suporte completo a ControlNet, com empilhamento de múltiplos ControlNets ao mesmo tempo (por exemplo, profundidade + bordas Canny + paleta de cores juntos)"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة Draw Things (2026): ذكاء اصطناعي مجاني للصور دون اتصال لـ Mac وiOS", subtitle: '', bullets: ["Draw Things مجاني للتنزيل؛ توليد الصور المحلي على الجهاز لا يتطلب اشتراكًا ولا يوجد له حد استخدام", "يدعم Stable Diffusion 1.5 وSDXL وSD3 Medium/3.5 وFLUX.1 وFLUX.2 وHiDream وQwen Image وعائلات نماذج انتشار أخرى، وفقًا لوصف التطبيق على App Store وملاحظات الإصدار العلنية", "دعم كامل لـControlNet مع إمكانية تكديس عدة نماذج ControlNet معًا (مثل العمق + حواف Canny + لوحة الألوان معًا)"], footer: "دليل PromptQuorum" },
    ko: { title: "Draw Things 리뷰(2026): Mac·iOS용 무료 오프라인 이미지 AI", subtitle: '', bullets: ["Draw Things는 무료로 다운로드할 수 있으며, 기기 내 로컬 이미지 생성에는 구독이나 사용 제한이 전혀 없음", "앱 자체의 App Store 설명과 공개 릴리스 노트에 따르면 Stable Diffusion 1.5, SDXL, SD3 Medium/3.5, FLUX.1, FLUX.2, HiDream, Qwen Image 등 다양한 디퓨전 모델 계열을 지원", "여러 ControlNet을 동시에 겹쳐 사용할 수 있는 완전한 ControlNet 지원(예: 깊이 + Canny 엣지 + 색상 팔레트를 함께 사용)"], footer: "PromptQuorum 가이드" },
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
