#!/usr/bin/env node
const BASE = 'http://localhost:3410';
const SLUG = 'localai-explained';
const SPECS = {
  en: {
    title: 'LocalAI Explained: The Self-Hosted OpenAI API Alternative (2026)',
    subtitle: 'Free, MIT-licensed, self-hosted AI engine that exposes an OpenAI-compatible API in front of pluggable backends — llama.cpp, vLLM, diffusers, whisper.cpp — covering text generation, image generation, and audio transcription from one running instance.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'LocalAI erklärt: Die selbstgehostete Alternative zur OpenAI-API (2026)',
    subtitle: 'Kostenlose, MIT-lizenzierte, selbstgehostete KI-Engine mit OpenAI-kompatibler API vor austauschbaren Backends — llama.cpp, vLLM, diffusers, whisper.cpp — für Textgenerierung, Bildgenerierung und Audiotranskription aus einer einzigen Instanz.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'LocalAI expliqué : l\'alternative auto-hébergée à l\'API OpenAI (2026)',
    subtitle: 'Moteur d\'IA gratuit, sous licence MIT et auto-hébergé, avec une API compatible OpenAI devant des backends interchangeables — llama.cpp, vLLM, diffusers, whisper.cpp — pour la génération de texte, d\'image et la transcription audio depuis une seule instance.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'LocalAIとは：セルフホスト型OpenAI API代替エンジンを解説（2026年版）',
    subtitle: '無料・MITライセンスのセルフホスト型AIエンジン。llama.cpp、vLLM、diffusers、whisper.cppなど交換可能なバックエンドの前段にOpenAI互換APIを提供し、テキスト・画像・音声を一つのインスタンスでカバー。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'LocalAI 详解：自托管的 OpenAI API 替代方案（2026）',
    subtitle: '免费、MIT 许可的自托管 AI 引擎,在 llama.cpp、vLLM、diffusers、whisper.cpp 等可替换后端之前提供 OpenAI 兼容 API,单一实例覆盖文本、图像与音频。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'LocalAI explicado: la alternativa autoalojada a la API de OpenAI (2026)',
    subtitle: 'Motor de IA gratuito, con licencia MIT y autoalojado, con una API compatible con OpenAI frente a backends intercambiables — llama.cpp, vLLM, diffusers, whisper.cpp — cubriendo generación de texto, generación de imágenes y transcripción de audio desde una sola instancia.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'LocalAI explicado: a alternativa auto-hospedada à API da OpenAI (2026)',
    subtitle: 'Motor de IA gratuito, sob licença MIT e auto-hospedado, com uma API compatível com a OpenAI na frente de backends intercambiáveis — llama.cpp, vLLM, diffusers, whisper.cpp — cobrindo geração de texto, geração de imagem e transcrição de áudio a partir de uma instância.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'شرح LocalAI: البديل المستضاف ذاتيًا لواجهة OpenAI API (2026)',
    subtitle: 'محرك ذكاء اصطناعي مجاني، مرخّص بموجب MIT، وقابل للاستضافة الذاتية، يوفّر واجهة متوافقة مع OpenAI أمام خلفيات قابلة للتبديل — llama.cpp و vLLM و diffusers و whisper.cpp — تغطي توليد النصوص وتوليد الصور وتحويل الصوت إلى نص من نسخة واحدة قيد التشغيل.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'LocalAI 완벽 해설: 셀프호스팅 OpenAI API 대안 (2026)',
    subtitle: '무료, MIT 라이선스, 셀프호스팅 AI 엔진. llama.cpp, vLLM, diffusers, whisper.cpp 등 교체 가능한 백엔드 앞단에 OpenAI 호환 API를 제공하며 하나의 인스턴스에서 텍스트·이미지·오디오를 처리합니다.',
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
