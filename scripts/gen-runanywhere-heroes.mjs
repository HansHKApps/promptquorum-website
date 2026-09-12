#!/usr/bin/env node
// One-off generator for the runanywhere-review hero images (9 languages).
const BASE = 'http://localhost:4177';
const SLUG = 'runanywhere-review';

const SPECS = {
  en: {
    title: 'RunAnywhere Review 2026',
    subtitle: 'On-device AI SDK for LLM, STT, TTS, and VAD across iOS, Android, Flutter, and web.',
    bullets: [
      'Not a downloadable app — a library developers add to their own iOS, Android, Flutter, or web app',
      'Runs LLM chat, speech-to-text, text-to-speech, and voice detection fully on-device',
      'Free under its own license for individuals and orgs under $1M funding and $1M revenue',
      'MetalRT for Apple Silicon and QHexRT for Qualcomm Hexagon NPUs',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'RunAnywhere Review 2026',
    subtitle: 'On-Device-KI-SDK für LLM, STT, TTS und VAD auf iOS, Android, Flutter und Web.',
    bullets: [
      'Keine App zum Herunterladen — eine Bibliothek, die Entwickler in ihre eigene iOS-, Android-, Flutter- oder Web-App einbinden',
      'Führt LLM-Chat, Speech-to-Text, Text-to-Speech und Sprach-Erkennung vollständig auf dem Gerät aus',
      'Kostenlos unter eigener Lizenz für Einzelpersonen und Organisationen unter 1 Mio. USD Finanzierung/Umsatz',
      'MetalRT für Apple Silicon und QHexRT für Qualcomm-Hexagon-NPUs',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'RunAnywhere Review 2026',
    subtitle: "SDK IA sur l'appareil pour LLM, STT, TTS et VAD sur iOS, Android, Flutter et web.",
    bullets: [
      "Pas une app à télécharger — une bibliothèque que les développeurs intègrent à leur propre app iOS, Android, Flutter ou web",
      'Exécute le chat par LLM, la reconnaissance et la synthèse vocale, et la détection de voix entièrement sur l\'appareil',
      "Gratuit sous licence propre pour particuliers et organisations sous 1 M$ de financement/chiffre d'affaires",
      'MetalRT pour Apple Silicon et QHexRT pour les NPU Hexagon de Qualcomm',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'RunAnywhere Review 2026',
    subtitle: 'SDK de IA en el dispositivo para LLM, STT, TTS y VAD en iOS, Android, Flutter y web.',
    bullets: [
      'No es una app para descargar — una biblioteca que los desarrolladores integran en su propia app iOS, Android, Flutter o web',
      'Ejecuta chat por LLM, reconocimiento y síntesis de voz, y detección de voz totalmente en el dispositivo',
      'Gratis bajo licencia propia para particulares y organizaciones bajo 1 M$ de financiación/ingresos',
      'MetalRT para Apple Silicon y QHexRT para las NPU Hexagon de Qualcomm',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'RunAnywhere Review 2026',
    subtitle: 'SDK de IA no dispositivo para LLM, STT, TTS e VAD em iOS, Android, Flutter e web.',
    bullets: [
      'Não é um app para baixar — uma biblioteca que desenvolvedores integram ao próprio app iOS, Android, Flutter ou web',
      'Executa chat com LLM, reconhecimento e síntese de fala, e detecção de voz totalmente no dispositivo',
      'Gratuito sob licença própria para pessoas físicas e organizações com financiamento/receita abaixo de US$ 1 milhão',
      'MetalRT para Apple Silicon e QHexRT para as NPUs Hexagon da Qualcomm',
    ],
    footer: 'Guia PromptQuorum',
  },
  ja: {
    title: 'RunAnywhere Review 2026',
    subtitle: 'iOS・Android・Flutter・Web向け、LLM・STT・TTS・VAD対応のオンデバイスAI SDK。',
    bullets: [
      'ダウンロードするアプリではなく、開発者が自社のiOS・Android・Flutter・Webアプリに組み込むライブラリ',
      'LLMチャット、音声認識、音声合成、発話検出を完全にオンデバイスで実行',
      '資金調達・収益が100万ドル未満の個人や組織には独自ライセンスの下で無料',
      'Apple Silicon向けMetalRT、Qualcomm Hexagon NPU向けQHexRT',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'RunAnywhere评测2026',
    subtitle: '面向iOS、Android、Flutter和Web的LLM、STT、TTS与VAD设备端AI SDK。',
    bullets: [
      '并非可下载应用——而是开发者集成到自有iOS、Android、Flutter或Web应用中的库',
      '完全在设备端运行LLM聊天、语音识别、语音合成与语音检测',
      '对融资与收入低于100万美元的个人和组织，在自有许可下免费',
      '面向Apple Silicon的MetalRT与面向高通Hexagon NPU的QHexRT',
    ],
    footer: 'PromptQuorum 指南',
  },
  ar: {
    title: 'مراجعة RunAnywhere 2026',
    subtitle: 'حزمة تطوير ذكاء اصطناعي على الجهاز لـ LLM وSTT وTTS وVAD على iOS وAndroid وFlutter والويب.',
    bullets: [
      'ليست تطبيقًا للتنزيل — بل مكتبة يدمجها المطورون في تطبيقهم الخاص على iOS أو Android أو Flutter أو الويب',
      'تشغّل الدردشة عبر نموذج لغوي، وتحويل الكلام إلى نص وبالعكس، وكشف الصوت بالكامل على الجهاز',
      'مجانية بموجب ترخيصها الخاص للأفراد والمؤسسات التي يقل تمويلها وإيراداتها عن مليون دولار',
      'MetalRT لشرائح Apple Silicon وQHexRT لوحدات NPU من Qualcomm Hexagon',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'RunAnywhere 리뷰 2026',
    subtitle: 'iOS, Android, Flutter, 웹용 LLM·STT·TTS·VAD 온디바이스 AI SDK.',
    bullets: [
      '다운로드하는 앱이 아니라 개발자가 자신의 iOS, Android, Flutter, 웹 앱에 통합하는 라이브러리',
      'LLM 채팅, 음성 인식, 음성 합성, 음성 감지를 완전히 온디바이스에서 실행',
      '자금 조달과 매출이 100만 달러 미만인 개인·조직에는 자체 라이선스 아래 무료',
      'Apple Silicon용 MetalRT와 Qualcomm Hexagon NPU용 QHexRT',
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
    throw new Error(`${lang}: HTTP ${res.status} — ${text}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${SLUG}-hero-${lang}.png`;
  await import('node:fs/promises').then((fs) => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
