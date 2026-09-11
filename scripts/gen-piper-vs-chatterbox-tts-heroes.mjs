#!/usr/bin/env node
const BASE = 'http://localhost:3502';
const SLUG = 'piper-vs-chatterbox-tts';
const SPECS = {
  en: {
    title: 'Piper vs Chatterbox TTS (2026): Fast Local Speech or Voice Cloning?',
    subtitle: 'Piper is a lightweight, CPU-only local TTS engine with fixed pretrained voices and no cloning. Chatterbox is a 0.5B-parameter, Llama-backbone, MIT-licensed model from Resemble AI that clones a voice from a short reference clip and runs best on a GPU.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Piper vs. Chatterbox TTS (2026): Schnelle lokale Sprache oder Voice-Cloning?',
    subtitle: 'Piper ist eine leichtgewichtige, reine CPU-Text-zu-Sprache-Engine mit festen vortrainierten Stimmen und ohne Cloning. Chatterbox ist ein 0,5-Milliarden-Parameter-Modell auf Llama-Basis von Resemble AI, MIT-lizenziert, das eine Stimme aus einer kurzen Referenzaufnahme klont und am besten auf einer GPU läuft.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Piper vs Chatterbox TTS (2026) : parole locale rapide ou clonage vocal ?',
    subtitle: 'Piper est un moteur TTS local léger, CPU uniquement, à voix préentraînées fixes et sans clonage. Chatterbox est un modèle de 0,5 milliard de paramètres à base Llama signé Resemble AI, sous licence MIT, qui clone une voix à partir d\'un court extrait de référence et fonctionne mieux sur GPU.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Piper対Chatterbox TTS比較(2026年版):高速ローカル音声か音声クローンか',
    subtitle: 'Piperは固定の事前学習済み音声のみを持ちクローン機能を持たない軽量なCPU専用TTSエンジン。Chatterboxは短い参照音声から声をクローンしGPUで最も性能を発揮するResemble AI製の5億パラメータLlamaベースMITライセンスモデル。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Piper对比Chatterbox TTS(2026):快速本地语音还是声音克隆?',
    subtitle: 'Piper是一款轻量级、纯CPU运行的本地TTS引擎,使用固定预训练音色,不支持声音克隆。Chatterbox是Resemble AI发布的5亿参数Llama架构MIT许可证模型,可从一段短参考音频克隆声音,在GPU上运行效果最佳。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Piper vs Chatterbox TTS (2026): ¿voz local rápida o clonación de voz?',
    subtitle: 'Piper es un motor TTS local ligero, solo CPU, con voces preentrenadas fijas y sin clonación. Chatterbox es un modelo de 0,5B parámetros con base Llama y licencia MIT de Resemble AI que clona una voz a partir de un clip de referencia corto y funciona mejor en GPU.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Piper vs Chatterbox TTS (2026): voz local rápida ou clonagem de voz?',
    subtitle: 'O Piper é um motor TTS local leve, somente CPU, com vozes pré-treinadas fixas e sem clonagem. O Chatterbox é um modelo de 0,5B parâmetros com base Llama, licenciado sob MIT, da Resemble AI, que clona uma voz a partir de um clipe de referência curto e roda melhor em GPU.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'Piper مقابل Chatterbox TTS (2026): كلام محلي سريع أم استنساخ صوتي؟',
    subtitle: 'Piper محرك TTS محلي خفيف الوزن يعمل على المعالج فقط بأصوات مدربة مسبقًا ثابتة وبلا استنساخ. Chatterbox نموذج بحجم 0.5B معلمة قائم على بنية Llama من Resemble AI بترخيص MIT، يستنسخ صوتًا من مقطع مرجعي قصير ويعمل بأفضل شكل على GPU.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Piper 대 Chatterbox TTS(2026): 빠른 로컬 음성인가, 음성 복제인가?',
    subtitle: 'Piper는 고정된 사전 학습 음성만 제공하고 복제 기능이 없는 경량 CPU 전용 로컬 TTS 엔진입니다. Chatterbox는 짧은 참조 클립으로 목소리를 복제하고 GPU에서 가장 잘 작동하는 Resemble AI의 MIT 라이선스 5억 개 매개변수 Llama 백본 모델입니다.',
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
