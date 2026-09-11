#!/usr/bin/env node
const BASE = 'http://localhost:3507';
const SLUG = 'best-local-tts-mac';
const SPECS = {
  en: {
    title: 'Best Local TTS Engine for Mac (2026): What Actually Uses Apple Silicon',
    subtitle: 'Best local TTS for Mac 2026: Piper never touches the GPU, Kokoro can run through Apple\'s MLX framework, and XTTS v2\'s Metal (MPS) support is a documented broken GitHub issue. Here is what to actually install on Apple Silicon vs. Intel.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Beste lokale TTS-Engine für Mac (2026): Was Apple Silicon wirklich nutzt',
    subtitle: 'Beste lokale TTS für Mac 2026: Piper nutzt nie die GPU, Kokoro kann über Apples MLX-Framework laufen, und die Metal-(MPS)-Unterstützung von XTTS v2 ist ein dokumentiertes, defektes GitHub-Issue. Was Sie auf Apple Silicon vs. Intel tatsächlich installieren sollten.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Meilleur moteur TTS local pour Mac (2026) : ce qui exploite vraiment Apple Silicon',
    subtitle: 'Meilleur TTS local pour Mac 2026 : Piper ne touche jamais le GPU, Kokoro peut tourner via le framework MLX d\'Apple, et le support Metal (MPS) de XTTS v2 est une issue GitHub documentée et cassée. Ce qu\'il faut réellement installer sur Apple Silicon vs. Intel.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Mac向けベストなローカルTTSエンジン(2026年版):Apple Siliconを本当に活かすのは',
    subtitle: 'Mac向けベストなローカルTTS 2026:PiperはGPUに一切触れず、KokoroはAppleのMLXフレームワーク経由で動作し、XTTS v2のMetal(MPS)対応は文書化された壊れたGitHub issue。Apple SiliconとIntelで実際にインストールすべきものを解説。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Mac最佳本地TTS引擎(2026):谁真正用上了Apple Silicon',
    subtitle: 'Mac 最佳本地 TTS 2026:Piper 从不触碰 GPU,Kokoro 可以通过 Apple 的 MLX 框架运行,XTTS v2 的 Metal(MPS)支持是已记录的失效 GitHub issue。这里是在 Apple Silicon 与 Intel 上真正该安装的引擎。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Mejor motor TTS local para Mac (2026): qué aprovecha realmente Apple Silicon',
    subtitle: 'Mejor TTS local para Mac 2026: Piper nunca toca la GPU, Kokoro puede correr vía el framework MLX de Apple, y el soporte Metal (MPS) de XTTS v2 es un issue de GitHub documentado y roto. Lo que realmente hay que instalar en Apple Silicon vs. Intel.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Melhor mecanismo de TTS local para Mac (2026): o que realmente usa o Apple Silicon',
    subtitle: 'Melhor TTS local para Mac 2026: o Piper nunca toca na GPU, o Kokoro pode rodar via o framework MLX da Apple, e o suporte Metal (MPS) do XTTS v2 é uma issue documentada e quebrada no GitHub. O que realmente instalar no Apple Silicon vs. Intel.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'أفضل محرك تحويل نص إلى كلام محلي لـ Mac (2026): من يستغل Apple Silicon فعلاً',
    subtitle: 'أفضل TTS محلي لـ Mac 2026: لا يلمس Piper وحدة GPU إطلاقًا، ويمكن تشغيل Kokoro عبر إطار عمل MLX من Apple، ودعم Metal (MPS) في XTTS v2 هو مشكلة GitHub معطوبة وموثّقة. إليك ما يجب تثبيته فعليًا على Apple Silicon مقابل Intel.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Mac 최고의 로컬 TTS 엔진(2026): Apple Silicon을 실제로 활용하는 것은',
    subtitle: 'Mac용 최고의 로컬 TTS 2026: Piper는 GPU를 전혀 사용하지 않으며, Kokoro는 Apple의 MLX 프레임워크를 통해 실행할 수 있고, XTTS v2의 Metal(MPS) 지원은 문서화된 결함이 있는 GitHub 이슈입니다. Apple Silicon과 Intel에서 실제로 설치해야 할 것을 안내합니다.',
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
