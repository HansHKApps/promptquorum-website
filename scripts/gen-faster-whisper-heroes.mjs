#!/usr/bin/env node
// One-off hero generator for faster-whisper-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'faster-whisper Review (2026): CTranslate2-Accelerated Local Speech-to-Text',
    subtitle: "faster-whisper runs OpenAI's Whisper about 4x faster on GPU or CPU, using the CTranslate2 engine.",
    bullets: [
      'Created by Guillaume Klein (2023), now maintained under SYSTRAN',
      'MIT license — free, no paid tier',
      'Built-in Silero VAD and word-level timestamps',
      'NVIDIA CUDA and CPU support, no Apple Metal',
      'Latest stable release: v1.2.1 (October 31, 2025)',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'faster-whisper im Test (2026): Lokale Spracherkennung mit CTranslate2-Beschleunigung',
    subtitle: 'faster-whisper führt OpenAIs Whisper dank CTranslate2 rund 4x schneller auf GPU oder CPU aus.',
    bullets: [
      'Entwickelt von Guillaume Klein (2023), heute unter SYSTRAN gepflegt',
      'MIT-Lizenz — kostenlos, keine Bezahlstufe',
      'Integriertes Silero-VAD und wortgenaue Zeitstempel',
      'NVIDIA-CUDA- und CPU-Unterstützung, kein Apple Metal',
      'Aktuelle Stable-Version: v1.2.1 (31. Oktober 2025)',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: "faster-whisper : avis (2026) — reconnaissance vocale locale accélérée par CTranslate2",
    subtitle: "faster-whisper exécute Whisper d'OpenAI environ 4x plus vite sur GPU ou CPU grâce à CTranslate2.",
    bullets: [
      'Créé par Guillaume Klein (2023), désormais maintenu sous SYSTRAN',
      'Licence MIT — gratuit, aucune offre payante',
      'VAD Silero intégré et horodatage au mot près',
      'Prise en charge NVIDIA CUDA et CPU, pas d\'Apple Metal',
      'Dernière version stable : v1.2.1 (31 octobre 2025)',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'faster-whisper: análisis (2026) — reconocimiento de voz local acelerado con CTranslate2',
    subtitle: 'faster-whisper ejecuta Whisper de OpenAI unas 4 veces más rápido en GPU o CPU gracias a CTranslate2.',
    bullets: [
      'Creado por Guillaume Klein (2023), mantenido hoy bajo SYSTRAN',
      'Licencia MIT — gratis, sin nivel de pago',
      'VAD Silero integrado y marcas de tiempo por palabra',
      'Soporte NVIDIA CUDA y CPU, sin Apple Metal',
      'Última versión estable: v1.2.1 (31 de octubre de 2025)',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'faster-whisperレビュー(2026):CTranslate2で高速化したローカル音声認識',
    subtitle: 'faster-whisperはCTranslate2エンジンでOpenAIのWhisperをGPU/CPU上で約4倍高速に実行します。',
    bullets: [
      'Guillaume Klein氏が開発(2023年)、現在はSYSTRANが保守',
      'MITライセンス — 無料、有料プランなし',
      '内蔵Silero VADと単語レベルのタイムスタンプ',
      'NVIDIA CUDAとCPUに対応、Apple Metal非対応',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'faster-whisper: análise (2026) — reconhecimento de voz local acelerado com CTranslate2',
    subtitle: 'O faster-whisper executa o Whisper da OpenAI cerca de 4x mais rápido em GPU ou CPU com o CTranslate2.',
    bullets: [
      'Criado por Guillaume Klein (2023), hoje mantido sob a SYSTRAN',
      'Licença MIT — gratuito, sem plano pago',
      'VAD Silero integrado e carimbos de tempo por palavra',
      'Suporte a NVIDIA CUDA e CPU, sem Apple Metal',
      'Última versão estável: v1.2.1 (31 de outubro de 2025)',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة faster-whisper (2026): تحويل كلام محلي مُسرَّع بـ CTranslate2',
    subtitle: 'يشغّل faster-whisper نموذج Whisper من OpenAI بسرعة أكبر بنحو 4 أضعاف على معالج GPU أو CPU عبر محرك الاستدلال CTranslate2.',
    bullets: [
      'طوّره Guillaume Klein (2023)، ويُصان الآن ضمن SYSTRAN',
      'رخصة MIT — مجاني، بلا خطة مدفوعة',
      'ترشيح Silero VAD مدمج وطوابع زمنية على مستوى الكلمة',
      'دعم NVIDIA CUDA وCPU، بلا دعم Apple Metal',
      'أحدث إصدار مستقر معلن: v1.2.1 بتاريخ 31 أكتوبر 2025',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'faster-whisper评测(2026):CTranslate2加速的本地语音识别',
    subtitle: 'faster-whisper通过CTranslate2引擎,在GPU或CPU上将OpenAI Whisper的运行速度提升约4倍。',
    bullets: [
      '由Guillaume Klein开发(2023年),现由SYSTRAN维护',
      'MIT许可证 —— 免费,无付费方案',
      '内置Silero VAD与词级时间戳',
      '支持NVIDIA CUDA与CPU,不支持Apple Metal',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'faster-whisper 리뷰(2026): CTranslate2로 가속한 로컬 음성 인식',
    subtitle: 'faster-whisper는 CTranslate2 엔진으로 OpenAI Whisper를 GPU 또는 CPU에서 약 4배 더 빠르게 실행합니다.',
    bullets: [
      'Guillaume Klein이 개발(2023년), 현재는 SYSTRAN에서 관리',
      'MIT 라이선스 — 무료, 유료 플랜 없음',
      '내장 Silero VAD 및 단어 수준 타임스탬프',
      'NVIDIA CUDA 및 CPU 지원, Apple Metal 미지원',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

const OUT_DIR = 'public/images';

async function main() {
  for (const [lang, spec] of Object.entries(SPECS)) {
    const res = await fetch(`${BASE}/api/hero-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, ...spec }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`[${lang}] FAILED ${res.status}: ${text}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = `${OUT_DIR}/faster-whisper-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
