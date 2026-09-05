#!/usr/bin/env node
// One-off hero generator for piper-tts-review (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3921';

const SPECS = {
  en: {
    title: 'Piper TTS Review (2026): Fast, Local Neural Text-to-Speech',
    subtitle: 'Piper runs real-time neural text-to-speech on CPU-only hardware, even a Raspberry Pi.',
    bullets: [
      'Created by Michael Hansen inside the Rhasspy project',
      'Now maintained by the Open Home Foundation at OHF-Voice/piper1-gpl',
      'License changed from MIT to GPL-3.0-or-later in 2025',
      'Free, no paid tier; latest release v1.8.0 (September 4, 2026)',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Piper TTS im Test (2026): Schnelle, lokale neuronale Sprachsynthese',
    subtitle: 'Piper führt neuronale Sprachsynthese in Echtzeit auf reiner CPU-Hardware aus, sogar auf einem Raspberry Pi.',
    bullets: [
      'Entwickelt von Michael Hansen innerhalb des Rhasspy-Projekts',
      'Heute von der Open Home Foundation bei OHF-Voice/piper1-gpl gepflegt',
      'Lizenzwechsel von MIT zu GPL-3.0-or-later im Jahr 2025',
      'Kostenlos, keine Bezahlstufe; aktuelle Version v1.8.0 (4. September 2026)',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Piper TTS : avis (2026) — synthèse vocale neuronale locale et rapide',
    subtitle: 'Piper exécute la synthèse vocale neuronale en temps réel sur du matériel CPU seul, même un Raspberry Pi.',
    bullets: [
      'Créé par Michael Hansen au sein du projet Rhasspy',
      "Désormais maintenu par l'Open Home Foundation sur OHF-Voice/piper1-gpl",
      'Changement de licence de MIT à GPL-3.0-or-later en 2025',
      'Gratuit, aucune offre payante ; dernière version v1.8.0 (4 septembre 2026)',
    ],
    footer: 'Guide PromptQuorum',
  },
  es: {
    title: 'Piper TTS: análisis (2026) — síntesis de voz neuronal local y rápida',
    subtitle: 'Piper ejecuta síntesis de voz neuronal en tiempo real en hardware solo con CPU, incluso una Raspberry Pi.',
    bullets: [
      'Creado por Michael Hansen dentro del proyecto Rhasspy',
      'Hoy mantenido por la Open Home Foundation en OHF-Voice/piper1-gpl',
      'Cambio de licencia de MIT a GPL-3.0-or-later en 2025',
      'Gratuito, sin nivel de pago; última versión v1.8.0 (4 de septiembre de 2026)',
    ],
    footer: 'Guía de PromptQuorum',
  },
  ja: {
    title: 'Piper TTSレビュー(2026):高速なローカル・ニューラル音声合成',
    subtitle: 'PiperはRaspberry Piのようなハードウェアでもリアルタイムでニューラル音声合成を実行します。',
    bullets: [
      'Michael Hansen氏がRhasspyプロジェクト内で開発',
      '現在はOpen Home FoundationがOHF-Voice/piper1-gplで保守',
      '2025年にライセンスがMITからGPL-3.0-or-laterへ変更',
      '無料、有料プランなし。最新版はv1.8.0(2026年9月4日)',
    ],
    footer: 'PromptQuorumガイド',
  },
  pt: {
    title: 'Piper TTS: análise (2026) — síntese de voz neural local e rápida',
    subtitle: 'O Piper executa síntese de voz neural em tempo real em hardware somente com CPU, até mesmo um Raspberry Pi.',
    bullets: [
      'Criado por Michael Hansen dentro do projeto Rhasspy',
      'Hoje mantido pela Open Home Foundation em OHF-Voice/piper1-gpl',
      'Mudança de licença de MIT para GPL-3.0-or-later em 2025',
      'Gratuito, sem plano pago; última versão v1.8.0 (4 de setembro de 2026)',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Piper TTS (2026): تحويل نص إلى كلام عصبي محلي وسريع',
    subtitle: 'يشغّل Piper تحويل النص إلى كلام العصبي في الوقت الفعلي على أجهزة تعتمد على معالج CPU فقط، حتى جهاز Raspberry Pi الصغير.',
    bullets: [
      'طوّره Michael Hansen ضمن مشروع Rhasspy',
      'تصونه اليوم Open Home Foundation في OHF-Voice/piper1-gpl',
      'تغيير الرخصة من MIT إلى GPL-3.0-or-later في عام 2025',
      'مجاني تمامًا بلا أي خطة مدفوعة؛ أحدث إصدار مستقر هو v1.8.0 بتاريخ 4 سبتمبر 2026',
    ],
    footer: 'دليل PromptQuorum',
  },
  zh: {
    title: 'Piper TTS评测(2026):快速的本地神经网络语音合成',
    subtitle: 'Piper能在纯CPU硬件(甚至Raspberry Pi)上实时运行神经网络语音合成。',
    bullets: [
      '由Michael Hansen在Rhasspy项目中创建',
      '现由Open Home Foundation在OHF-Voice/piper1-gpl维护',
      '2025年许可证从MIT变更为GPL-3.0-or-later',
      '免费无付费方案;最新版本v1.8.0(2026年9月4日)',
    ],
    footer: 'PromptQuorum 指南',
  },
  ko: {
    title: 'Piper TTS 리뷰(2026): 빠르고 로컬한 신경망 음성 합성',
    subtitle: 'Piper는 Raspberry Pi 같은 CPU 전용 하드웨어에서도 실시간으로 신경망 음성 합성을 실행합니다.',
    bullets: [
      'Michael Hansen이 Rhasspy 프로젝트 안에서 개발',
      '현재는 Open Home Foundation이 OHF-Voice/piper1-gpl에서 관리',
      '2025년 라이선스가 MIT에서 GPL-3.0-or-later로 변경',
      '무료, 유료 플랜 없음; 최신 릴리스 v1.8.0(2026년 9월 4일)',
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
    const outPath = `${OUT_DIR}/piper-tts-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
