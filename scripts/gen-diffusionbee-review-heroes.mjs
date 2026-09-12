#!/usr/bin/env node
const BASE = 'http://localhost:3415';
const SPECS = {
  'diffusionbee-review': {
    en: { title: "DiffusionBee Review (2026): Local Stable Diffusion for Mac", subtitle: '', bullets: ["Free and open-source under the AGPL-3.0 license, source on GitHub at divamgupta/diffusionbee-stable-diffusion-ui with 13,586 stars and 727 forks", "Packages Stable Diffusion into a one-click .dmg installer with separate builds for Apple Silicon and Intel Macs — no Python or terminal required", "Runs fully offline once a model is downloaded, with text-to-image, image-to-image, inpainting, upscaling, and a canvas mode — macOS only, no official Windows build yet"], footer: "PromptQuorum Guide" },
    de: { title: "DiffusionBee Review (2026): Lokales Stable Diffusion für Mac", subtitle: '', bullets: ["Kostenlos und quelloffen unter der AGPL-3.0-Lizenz, Quellcode auf GitHub unter divamgupta/diffusionbee-stable-diffusion-ui mit 13.586 Stars und 727 Forks", "Verpackt Stable Diffusion in einen Ein-Klick-.dmg-Installer mit separaten Builds für Apple Silicon und Intel-Macs — ohne Python oder Terminal", "Läuft vollständig offline, sobald ein Modell heruntergeladen ist, mit Text-zu-Bild, Bild-zu-Bild, Inpainting, Upscaling und einem Canvas-Modus — nur macOS, noch kein offizieller Windows-Build"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "DiffusionBee Review (2026) : Stable Diffusion local pour Mac", subtitle: '', bullets: ["Gratuit et open source sous licence AGPL-3.0, code source sur GitHub sous divamgupta/diffusionbee-stable-diffusion-ui avec 13 586 étoiles et 727 forks", "Intègre Stable Diffusion dans un installeur .dmg en un clic avec des builds séparées pour Apple Silicon et Mac Intel — sans Python ni terminal", "Fonctionne entièrement hors ligne une fois un modèle téléchargé, avec texte-vers-image, image-vers-image, inpainting, upscaling et un mode canvas — macOS uniquement, pas encore de build Windows officielle"], footer: "Guide PromptQuorum" },
    es: { title: "DiffusionBee Review (2026): Stable Diffusion local para Mac", subtitle: '', bullets: ["Gratuita y de código abierto bajo la licencia AGPL-3.0, código fuente en GitHub en divamgupta/diffusionbee-stable-diffusion-ui con 13.586 estrellas y 727 forks", "Empaqueta Stable Diffusion en un instalador .dmg de un clic con builds independientes para Apple Silicon y Mac Intel — sin Python ni terminal", "Funciona totalmente sin conexión una vez descargado un modelo, con texto a imagen, imagen a imagen, inpainting, escalado y un modo lienzo — solo macOS, aún sin build oficial de Windows"], footer: "Guía de PromptQuorum" },
    pt: { title: "DiffusionBee Review (2026): Stable Diffusion local para Mac", subtitle: '', bullets: ["Gratuito e de código aberto sob a licença AGPL-3.0, código-fonte no GitHub em divamgupta/diffusionbee-stable-diffusion-ui com 13.586 estrelas e 727 forks", "Empacota o Stable Diffusion em um instalador .dmg de um clique com builds separadas para Apple Silicon e Mac Intel — sem Python ou terminal", "Roda totalmente offline depois que um modelo é baixado, com texto para imagem, imagem para imagem, inpainting, upscaling e um modo canvas — somente macOS, ainda sem build oficial para Windows"], footer: "Guia PromptQuorum" },
    ja: { title: "DiffusionBeeレビュー (2026年): Mac向けローカルStable Diffusion", subtitle: '', bullets: ["AGPL-3.0ライセンスの無料オープンソースで、ソースコードはGitHubのdivamgupta/diffusionbee-stable-diffusion-uiにあり13,586スターと727フォークを獲得", "Stable Diffusionをワンクリックの.dmgインストーラーにパッケージ化し、Apple SiliconとIntel Mac向けに別々のビルドを提供——Pythonもターミナルも不要", "モデルをダウンロードすれば完全にオフラインで動作し、text-to-image、image-to-image、インペインティング、アップスケーリング、キャンバスモードを搭載——macOS専用で公式Windowsビルドはまだない"], footer: "PromptQuorumガイド" },
    zh: { title: "DiffusionBee评测(2026):Mac本地Stable Diffusion应用", subtitle: '', bullets: ["在AGPL-3.0许可证下免费开源,源代码位于GitHub的divamgupta/diffusionbee-stable-diffusion-ui,已获得13,586颗星和727次分叉", "将Stable Diffusion打包成一键式.dmg安装包,为Apple Silicon和Intel Mac分别提供独立构建——无需Python或终端", "模型下载后可完全离线运行,支持文生图、图生图、局部重绘、放大和画布模式——仅支持macOS,尚无官方Windows版本"], footer: "PromptQuorum 指南" },
    ar: { title: "مراجعة DiffusionBee (2026): تشغيل Stable Diffusion محليًا على Mac", subtitle: '', bullets: ["مجاني ومفتوح المصدر بموجب رخصة AGPL-3.0، والكود المصدري على GitHub ضمن divamgupta/diffusionbee-stable-diffusion-ui بـ 13,586 نجمة و727 تفرعًا", "يُغلّف Stable Diffusion داخل حزمة تثبيت .dmg بنقرة واحدة مع إصدارات منفصلة لأجهزة Apple Silicon وIntel Mac — دون الحاجة إلى Python أو الطرفية", "يعمل بلا اتصال بالكامل بعد تنزيل نموذج، مع تحويل النص إلى صورة، والصورة إلى صورة، والإنباتينغ، والتحسين، ووضع لوحة رسم — macOS فقط، ولا يوجد إصدار Windows رسمي بعد"], footer: "دليل PromptQuorum" },
    ko: { title: "DiffusionBee 리뷰 (2026년): Mac용 로컬 Stable Diffusion", subtitle: '', bullets: ["AGPL-3.0 라이선스 하에 무료 오픈소스이며, 소스 코드는 GitHub의 divamgupta/diffusionbee-stable-diffusion-ui에 있고 13,586개 스타와 727개 포크를 보유", "Stable Diffusion을 원클릭 .dmg 설치 파일로 패키징하며 Apple Silicon과 Intel Mac용 별도 빌드를 제공 — Python이나 터미널이 필요 없음", "모델 다운로드 후 완전히 오프라인으로 작동하며 텍스트-이미지 변환, 이미지-이미지 변환, 인페인팅, 업스케일링, 캔버스 모드를 갖춤 — macOS 전용이며 아직 공식 Windows 빌드 없음"], footer: "PromptQuorum 가이드" },
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
