#!/usr/bin/env node
const BASE = 'http://localhost:3503';
const SLUG = 'kokoro-vs-elevenlabs';
const SPECS = {
  en: {
    title: 'Kokoro vs ElevenLabs: Local TTS vs Cloud Voice AI (2026)',
    subtitle: 'Kokoro is an 82-million-parameter, Apache-2.0-licensed open-weight text-to-speech model you download and run yourself, for free, with no internet connection required after setup. ElevenLabs is a paid cloud platform with a much larger voice library and instant voice cloning from a short audio sample.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Kokoro vs ElevenLabs: Lokale TTS vs Cloud-Sprach-KI (2026)',
    subtitle: 'Kokoro ist ein 82-Millionen-Parameter-Text-to-Speech-Modell mit offenen Gewichten unter Apache-2.0-Lizenz, das Sie selbst herunterladen und ausführen – kostenlos und nach der Einrichtung ohne Internetverbindung. ElevenLabs ist eine kostenpflichtige Cloud-Plattform mit einer deutlich größeren Stimmbibliothek und sofortigem Stimmenklonen.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Kokoro vs ElevenLabs : TTS local vs IA vocale cloud (2026)',
    subtitle: 'Kokoro est un modèle de synthèse vocale à poids ouverts de 82 millions de paramètres, sous licence Apache 2.0, que vous téléchargez et exécutez vous-même, gratuitement, sans connexion Internet après l\'installation. ElevenLabs est une plateforme cloud payante dotée d\'une bibliothèque de voix bien plus vaste et du clonage vocal instantané.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Kokoro vs ElevenLabs:ローカルTTS vs クラウド音声AI(2026)',
    subtitle: 'Kokoroは、8200万パラメータのApache 2.0ライセンスのオープンウェイトTTSモデルで、自分でダウンロードして無料で実行でき、セットアップ後はインターネット接続が不要です。ElevenLabsは、はるかに大規模な音声ライブラリと、短い音声サンプルからの即座の音声クローンを備えた有料クラウドプラットフォームです。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Kokoro vs ElevenLabs:本地TTS对比云端语音AI(2026)',
    subtitle: 'Kokoro是一个拥有8200万参数、采用Apache 2.0许可证的开放权重文本转语音模型,你可以自己下载并运行,完全免费,设置完成后无需联网。ElevenLabs是一个付费云平台,拥有更庞大的语音库,并能从简短音频样本中即时克隆语音。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Kokoro vs ElevenLabs: TTS local vs IA de voz en la nube (2026)',
    subtitle: 'Kokoro es un modelo de texto a voz de pesos abiertos con 82 millones de parámetros, licenciado bajo Apache 2.0, que descargas y ejecutas tú mismo, gratis, sin necesidad de conexión a Internet tras la instalación. ElevenLabs es una plataforma en la nube de pago con una biblioteca de voces mucho más amplia y clonación de voz instantánea.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Kokoro vs ElevenLabs: TTS local vs IA de voz em nuvem (2026)',
    subtitle: 'O Kokoro é um modelo de texto para voz de pesos abertos com 82 milhões de parâmetros, licenciado sob Apache 2.0, que você baixa e executa por conta própria, gratuitamente, sem precisar de conexão com a internet após a instalação. O ElevenLabs é uma plataforma em nuvem paga com uma biblioteca de vozes muito maior e clonagem de voz instantânea.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'Kokoro مقابل ElevenLabs: تحويل النص إلى كلام محلي مقابل الذكاء الاصطناعي الصوتي السحابي (2026)',
    subtitle: 'Kokoro هو نموذج تحويل نص إلى كلام مفتوح الأوزان بحجم 82 مليون معامل، مرخّص بموجب Apache 2.0، تقوم بتنزيله وتشغيله بنفسك، مجانًا، دون الحاجة إلى اتصال بالإنترنت بعد الإعداد. أما ElevenLabs فهو منصة سحابية مدفوعة تضم مكتبة أصوات أكبر بكثير واستنساخًا فوريًا للصوت.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Kokoro vs ElevenLabs: 로컬 TTS와 클라우드 음성 AI 비교(2026)',
    subtitle: 'Kokoro는 8,200만 파라미터의 Apache 2.0 라이선스 오픈 웨이트 텍스트 음성 변환 모델로, 직접 다운로드하여 무료로 실행할 수 있으며 설정 후에는 인터넷 연결이 필요하지 않습니다. ElevenLabs는 훨씬 더 방대한 음성 라이브러리와 짧은 오디오 샘플로부터 즉시 음성을 복제할 수 있는 유료 클라우드 플랫폼입니다.',
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
  const path = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
