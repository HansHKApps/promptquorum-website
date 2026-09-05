#!/usr/bin/env node
const BASE = 'http://localhost:3416';
const SLUG = 'llama-cpp-explained';
const SPECS = {
  en: {
    title: 'llama.cpp Explained: The Engine Powering Ollama (2026)',
    subtitle: 'Free, MIT-licensed C/C++ inference engine created by Georgi Gerganov and maintained by ggml-org. It defined the GGUF model format, supports CUDA, Metal, Vulkan, and ROCm backends, and ships the llama-server OpenAI-compatible API that Ollama runs on under the hood.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'llama.cpp erklärt: Backend hinter Ollama, GGUF & Setup (2026)',
    subtitle: 'Kostenlose, MIT-lizenzierte C/C++-Inferenz-Engine von Georgi Gerganov, gepflegt von ggml-org. Definierte das GGUF-Modellformat, unterstützt CUDA-, Metal-, Vulkan- und ROCm-Backends und bringt den OpenAI-kompatiblen llama-server mit, auf dem Ollama im Hintergrund läuft.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Comprendre llama.cpp : guide pratique du moteur (2026)',
    subtitle: 'Moteur d\'inférence C/C++ gratuit sous licence MIT créé par Georgi Gerganov et maintenu par ggml-org. A défini le format GGUF, prend en charge les backends CUDA, Metal, Vulkan et ROCm, et embarque le serveur llama-server compatible OpenAI sur lequel Ollama s\'appuie.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'llama.cppとは：Ollamaを支える推論エンジンを解説（2026）',
    subtitle: 'Georgi Gerganov氏が開発し、ggml-orgが保守する無料・MITライセンスのC/C++推論エンジン。GGUFモデル形式を定義し、CUDA、Metal、Vulkan、ROCmバックエンドに対応し、Ollamaが内部で利用するOpenAI互換のllama-serverを備えている。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'llama.cpp详解：Ollama背后的推理引擎（2026）',
    subtitle: 'Georgi Gerganov创建、由ggml-org维护的免费MIT许可C/C++推理引擎。定义了GGUF模型格式，支持CUDA、Metal、Vulkan和ROCm后端，并内置Ollama底层依赖的OpenAI兼容服务器llama-server。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Qué es llama.cpp: el motor que impulsa a Ollama (2026)',
    subtitle: 'Motor de inferencia C/C++ gratuito con licencia MIT creado por Georgi Gerganov y mantenido por ggml-org. Definió el formato GGUF, admite backends CUDA, Metal, Vulkan y ROCm, e incluye el servidor llama-server compatible con OpenAI sobre el que corre Ollama.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'O que é o llama.cpp: o motor por trás do Ollama (2026)',
    subtitle: 'Mecanismo de inferência C/C++ gratuito e com licença MIT criado por Georgi Gerganov e mantido pela ggml-org. Definiu o formato GGUF, suporta backends CUDA, Metal, Vulkan e ROCm, e traz o llama-server compatível com OpenAI sobre o qual o Ollama roda.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'شرح llama.cpp: المحرك الذي يشغّل Ollama (2026)',
    subtitle: 'محرك استدلال مجاني بلغة C/C++ مرخّص بموجب MIT، أنشأه Georgi Gerganov وتصونه منظمة ggml-org. عرّف صيغة GGUF، ويدعم خلفيات CUDA وMetal وVulkan وROCm، ويأتي مزودًا بخادم llama-server المتوافق مع OpenAI الذي يعمل Ollama فوقه.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'llama.cpp란? Ollama를 움직이는 추론 엔진 해설 (2026)',
    subtitle: 'Georgi Gerganov가 만들고 ggml-org가 관리하는 무료 MIT 라이선스 C/C++ 추론 엔진. GGUF 모델 형식을 정의했고, CUDA, Metal, Vulkan, ROCm 백엔드를 지원하며, Ollama가 내부적으로 구동하는 OpenAI 호환 llama-server를 제공합니다.',
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
