#!/usr/bin/env node
const BASE = process.env.HERO_BASE || 'http://localhost:3506';
const SLUG = 'best-local-tts-raspberry-pi';
const SPECS = {
  en: {
    title: 'Best Local TTS Engine for Raspberry Pi (2026)',
    subtitle: 'Piper was purpose-built inside the Rhasspy offline voice-assistant project to run in real time on CPU-only, embedded hardware like a Raspberry Pi. Compare it against Kokoro, Coqui TTS/XTTS v2, and espeak-ng on RAM, install complexity, and voice quality.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Bester lokaler TTS-Engine für Raspberry Pi (2026)',
    subtitle: 'Piper wurde innerhalb des Rhasspy-Projekts für offline arbeitende Sprachassistenten speziell entwickelt, um in Echtzeit auf reiner CPU-Hardware wie einem Raspberry Pi zu laufen. Vergleich mit Kokoro, Coqui TTS/XTTS v2 und espeak-ng nach RAM, Installationsaufwand und Sprachqualität.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Meilleur moteur TTS local pour Raspberry Pi (2026)',
    subtitle: 'Piper a été conçu au sein du projet d\'assistant vocal hors ligne Rhasspy pour fonctionner en temps réel sur du matériel embarqué sans GPU comme un Raspberry Pi. Comparaison avec Kokoro, Coqui TTS/XTTS v2 et espeak-ng sur la RAM, la complexité d\'installation et la qualité vocale.',
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Mejor motor TTS local para Raspberry Pi (2026)',
    subtitle: 'Piper se diseñó dentro del proyecto de asistente de voz sin conexión Rhasspy para funcionar en tiempo real en hardware embebido solo con CPU como una Raspberry Pi. Comparado con Kokoro, Coqui TTS/XTTS v2 y espeak-ng en RAM, complejidad de instalación y calidad de voz.',
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Raspberry Pi向けベストなローカルTTSエンジン(2026年)',
    subtitle: 'PiperはRhasspyオフライン音声アシスタントプロジェクト内で、Raspberry PiのようなCPUのみの組み込みハードウェアでリアルタイム動作するよう専用設計されました。RAM使用量、インストールの複雑さ、音声品質でKokoro、Coqui TTS/XTTS v2、espeak-ngと比較します。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Raspberry Pi最佳本地TTS引擎(2026版)',
    subtitle: 'Piper诞生于Rhasspy离线语音助手项目,专为Raspberry Pi等纯CPU嵌入式硬件实时运行而设计。本文从内存占用、安装复杂度和语音质量三个维度,将其与Kokoro、Coqui TTS/XTTS v2和espeak-ng进行对比。',
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Melhor motor de TTS local para Raspberry Pi (2026)',
    subtitle: 'O Piper foi criado dentro do projeto de assistente de voz offline Rhasspy para rodar em tempo real em hardware embarcado somente com CPU, como um Raspberry Pi. Comparação com Kokoro, Coqui TTS/XTTS v2 e espeak-ng em RAM, complexidade de instalação e qualidade de voz.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'أفضل محرك تحويل نص إلى كلام محلي لـ Raspberry Pi (2026)',
    subtitle: 'صُمم Piper داخل مشروع المساعد الصوتي غير المتصل Rhasspy ليعمل في الوقت الفعلي على أجهزة مدمجة تعتمد على المعالج فقط مثل Raspberry Pi. مقارنة مع Kokoro وCoqui TTS/XTTS v2 وespeak-ng من حيث الذاكرة وتعقيد التثبيت وجودة الصوت.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: '라즈베리 파이용 최고의 로컬 TTS 엔진(2026년)',
    subtitle: 'Piper는 Rhasspy 오프라인 음성 비서 프로젝트 안에서 라즈베리 파이 같은 CPU 전용 임베디드 하드웨어에서 실시간으로 동작하도록 설계되었습니다. RAM 사용량, 설치 복잡도, 음성 품질 기준으로 Kokoro, Coqui TTS/XTTS v2, espeak-ng와 비교합니다.',
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
