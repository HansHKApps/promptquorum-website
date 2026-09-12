#!/usr/bin/env node
const BASE = 'http://localhost:3415';
const SPECS = {
  'macwhisper-review': {
    en: { title: "MacWhisper Review (2026): Local Speech-to-Text for Mac", subtitle: '', bullets: ["Free tier (Whisper Base/Small models, mic recording, 100+ languages, srt/vtt/txt export) plus a Pro tier sold as a one-time purchase of €64 with lifetime updates on Gumroad — not a subscription", "Runs OpenAI Whisper and Nvidia Parakeet models locally on your Mac for transcription, with a separate Mac App Store SKU that adds an optional cloud \"Assistant\" subscription", "macOS only, no official Windows or Linux build — the packaged, paid GUI alternative to developer tools like whisper.cpp and faster-whisper"], footer: "PromptQuorum Guide" },
    de: { title: "MacWhisper Review (2026): Lokale Sprache-zu-Text-App für Mac", subtitle: '', bullets: ["Kostenlose Stufe (Whisper Base/Small, Mikrofonaufnahme, über 100 Sprachen, srt/vtt/txt-Export) sowie eine Pro-Stufe als Einmalkauf für 64 € mit lebenslangen Updates über Gumroad — kein Abonnement", "Führt OpenAI Whisper und Nvidia-Parakeet-Modelle lokal auf dem Mac aus; eine separate Mac-App-Store-SKU ergänzt ein optionales Cloud-\"Assistant\"-Abonnement", "Nur macOS, kein offizieller Windows- oder Linux-Build — die verpackte, kostenpflichtige GUI-Alternative zu Entwickler-Tools wie whisper.cpp und faster-whisper"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "MacWhisper Review (2026) : Transcription vocale locale pour Mac", subtitle: '', bullets: ["Niveau gratuit (modèles Whisper Base/Small, enregistrement micro, plus de 100 langues, export srt/vtt/txt) et un niveau Pro vendu en achat unique à 64 € avec mises à jour à vie sur Gumroad — pas un abonnement", "Exécute les modèles OpenAI Whisper et Nvidia Parakeet localement sur le Mac ; une fiche Mac App Store séparée ajoute un abonnement cloud \"Assistant\" optionnel", "macOS uniquement, aucun build Windows ou Linux officiel — l'alternative packagée et payante aux outils pour développeurs comme whisper.cpp et faster-whisper"], footer: "Guide PromptQuorum" },
    es: { title: "MacWhisper Review (2026): Transcripción de voz local para Mac", subtitle: '', bullets: ["Nivel gratuito (modelos Whisper Base/Small, grabación por micrófono, más de 100 idiomas, exportación srt/vtt/txt) y un nivel Pro de pago único de 64 € con actualizaciones de por vida en Gumroad — no una suscripción", "Ejecuta los modelos OpenAI Whisper y Nvidia Parakeet localmente en el Mac; una ficha separada de la Mac App Store añade una suscripción cloud \"Assistant\" opcional", "Solo macOS, sin build oficial para Windows o Linux — la alternativa empaquetada y de pago a herramientas para desarrolladores como whisper.cpp y faster-whisper"], footer: "Guía de PromptQuorum" },
    pt: { title: "MacWhisper Review (2026): Transcrição de voz local para Mac", subtitle: '', bullets: ["Nível gratuito (modelos Whisper Base/Small, gravação por microfone, mais de 100 idiomas, exportação srt/vtt/txt) e um nível Pro de compra única por 64 € com atualizações vitalícias no Gumroad — não uma assinatura", "Executa os modelos OpenAI Whisper e Nvidia Parakeet localmente no Mac; uma listagem separada da Mac App Store adiciona uma assinatura em nuvem \"Assistant\" opcional", "Somente macOS, sem build oficial para Windows ou Linux — a alternativa empacotada e paga a ferramentas para desenvolvedores como whisper.cpp e faster-whisper"], footer: "Guia PromptQuorum" },
    ja: { title: "MacWhisperレビュー (2026年): Mac向けローカル音声文字起こし", subtitle: '', bullets: ["無料プラン(Whisper Base/Smallモデル、マイク録音、100以上の言語、srt/vtt/txtエクスポート)と、Gumroadで買い切り64ユーロ・永久アップデート付きのProプラン——サブスクリプションではない", "OpenAI WhisperとNvidia ParakeetモデルをMac上でローカルに実行。別のMac App Store版にはオプションのクラウド「Assistant」サブスクリプションが追加される", "macOS専用で公式のWindowsまたはLinuxビルドはなし——whisper.cppやfaster-whisperのような開発者向けツールに対するパッケージ化された有料GUI代替"], footer: "PromptQuorumガイド" },
    zh: { title: "MacWhisper评测(2026):Mac本地语音转文字应用", subtitle: '', bullets: ["免费版(Whisper Base/Small模型、麦克风录音、100多种语言、srt/vtt/txt导出),以及在Gumroad上一次性64欧元、附带终身更新的Pro版——并非订阅", "在Mac上本地运行OpenAI Whisper和Nvidia Parakeet模型;另一个独立的Mac App Store版本增加了可选的云端Assistant订阅", "仅支持macOS,无官方Windows或Linux版本——是whisper.cpp、faster-whisper等开发者工具的打包式付费GUI替代方案"], footer: "PromptQuorum 指南" },
    ar: { title: "مراجعة MacWhisper (2026): تحويل الكلام إلى نص محليًا على Mac", subtitle: '', bullets: ["مستوى مجاني (نموذجا Whisper Base/Small، تسجيل عبر الميكروفون، أكثر من 100 لغة، تصدير srt/vtt/txt) ومستوى Pro بشراء لمرة واحدة بسعر 64 يورو مع تحديثات مدى الحياة عبر Gumroad — وليس اشتراكًا", "يشغّل نموذجي OpenAI Whisper وNvidia Parakeet محليًا على جهاز Mac؛ وتضيف قائمة منفصلة على متجر Mac App Store اشتراكًا سحابيًا اختياريًا باسم Assistant", "يعمل حصريًا على macOS دون إصدار رسمي لـ Windows أو Linux — البديل المدفوع والجاهز لأدوات المطورين مثل whisper.cpp وfaster-whisper"], footer: "دليل PromptQuorum" },
    ko: { title: "MacWhisper 리뷰 (2026년): Mac용 로컬 음성-텍스트 변환", subtitle: '', bullets: ["무료 등급(Whisper Base/Small 모델, 마이크 녹음, 100개 이상 언어, srt/vtt/txt 내보내기)과 Gumroad에서 일회성 64유로·평생 업데이트 포함으로 판매되는 Pro 등급 — 구독이 아님", "OpenAI Whisper와 Nvidia Parakeet 모델을 Mac에서 로컬로 실행하며, 별도의 Mac App Store 버전은 선택적 클라우드 Assistant 구독을 추가", "macOS 전용이며 공식 Windows·Linux 빌드 없음 — whisper.cpp, faster-whisper 같은 개발자 도구에 대한 패키징된 유료 GUI 대안"], footer: "PromptQuorum 가이드" },
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
