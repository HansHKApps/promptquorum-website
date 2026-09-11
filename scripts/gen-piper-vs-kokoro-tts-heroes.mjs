#!/usr/bin/env node
const BASE = process.env.HERO_BASE || 'http://localhost:3501';
const SLUG = 'piper-vs-kokoro-tts';
const SPECS = {
  en: {
    title: 'Piper vs Kokoro TTS (2026): Which Local Voice Engine Should You Use?',
    subtitle: 'Piper is a lightweight, fully local neural TTS engine from the Rhasspy/Home Assistant ecosystem that runs on a Raspberry Pi with no GPU. Kokoro is an 82-million-parameter open-weight model that trades some speed for more natural-sounding audio. Neither clones voices — both use fixed pretrained voice sets.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Piper vs Kokoro TTS (2026): Welche lokale Sprach-Engine sollten Sie nutzen?',
    subtitle: 'Piper ist eine schlanke, vollständig lokale neuronale TTS-Engine aus dem Rhasspy/Home-Assistant-Ökosystem, die auf einem Raspberry Pi ohne GPU läuft. Kokoro ist ein offenes Modell mit 82 Millionen Parametern, das etwas Geschwindigkeit gegen natürlicher klingendes Audio eintauscht. Keine der beiden Engines klont Stimmen — beide nutzen feste, vortrainierte Stimmensätze.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Piper vs Kokoro TTS (2026) : quel moteur vocal local choisir ?',
    subtitle: "Piper est un moteur TTS neuronal léger et entièrement local, issu de l'écosystème Rhasspy/Home Assistant, qui fonctionne sur un Raspberry Pi sans GPU. Kokoro est un modèle ouvert de 82 millions de paramètres qui sacrifie un peu de vitesse pour un son plus naturel. Aucun des deux ne clone de voix — tous deux utilisent des jeux de voix préentraînées fixes.",
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Piper vs Kokoro TTS(2026):どちらのローカル音声エンジンを使うべきか',
    subtitle: 'PiperはRhasspy/Home Assistantエコシステム発の軽量なローカル完結型ニューラルTTSエンジンで、GPUなしでRaspberry Piでも動作する。Kokoroは8200万パラメータのオープンウェイトモデルで、速度の一部を犠牲にしてより自然な音声を実現する。どちらも音声クローンはできず、固定の事前学習済み音声セットを使用する。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Piper vs Kokoro TTS(2026):该用哪个本地语音引擎?',
    subtitle: 'Piper是源自Rhasspy/Home Assistant生态的轻量级本地神经TTS引擎,无需GPU即可在树莓派上运行。Kokoro是一个8200万参数的开放权重模型,牺牲部分速度换取更自然的音质。两者都不支持声音克隆,均使用固定的预训练语音集。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Piper vs Kokoro TTS (2026): ¿Qué motor de voz local deberías usar?',
    subtitle: 'Piper es un motor TTS neuronal ligero y totalmente local del ecosistema Rhasspy/Home Assistant que funciona en una Raspberry Pi sin GPU. Kokoro es un modelo abierto de 82 millones de parámetros que sacrifica algo de velocidad por un audio más natural. Ninguno clona voces — ambos usan conjuntos fijos de voces preentrenadas.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Piper vs Kokoro TTS (2026): Qual Mecanismo de Voz Local Usar?',
    subtitle: 'O Piper é um mecanismo de TTS neural leve e totalmente local, originado do ecossistema Rhasspy/Home Assistant, que roda em um Raspberry Pi sem GPU. O Kokoro é um modelo aberto de 82 milhões de parâmetros que troca um pouco de velocidade por áudio mais natural. Nenhum dos dois clona vozes — ambos usam conjuntos fixos de vozes pré-treinadas.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'Piper مقابل Kokoro TTS (2026): أي محرك صوت محلي يجب أن تستخدم؟',
    subtitle: 'Piper هو محرك تحويل نص إلى كلام عصبي خفيف الوزن ومحلي بالكامل، نشأ من منظومة Rhasspy/Home Assistant، ويعمل على جهاز Raspberry Pi دون الحاجة إلى وحدة معالجة رسومات. أما Kokoro فهو نموذج مفتوح الأوزان بـ82 مليون معلمة يضحي ببعض السرعة مقابل صوت أكثر طبيعية. لا يستنسخ أي منهما الأصوات — يستخدم كلاهما مجموعة ثابتة من الأصوات المدرَّبة مسبقًا.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Piper vs Kokoro TTS(2026): 어떤 로컬 음성 엔진을 사용해야 합니까?',
    subtitle: 'Piper는 Rhasspy/Home Assistant 생태계에서 시작된 가볍고 완전히 로컬로 동작하는 신경망 TTS 엔진으로, GPU 없이 라즈베리 파이에서도 작동한다. Kokoro는 8,200만 파라미터의 오픈 웨이트 모델로 속도를 다소 희생하는 대신 더 자연스러운 음성을 제공한다. 둘 다 음성 복제는 지원하지 않으며 고정된 사전 학습 음성 세트를 사용한다.',
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
