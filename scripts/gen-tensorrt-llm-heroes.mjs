#!/usr/bin/env node
const BASE = 'http://localhost:3415';
const SLUG = 'tensorrt-llm-explained';
const SPECS = {
  en: {
    title: 'TensorRT-LLM Explained: NVIDIA\'s GPU-Optimized Inference Engine (2026)',
    subtitle: 'Open-source library from NVIDIA that compiles LLMs into optimized engines for NVIDIA GPUs, trading a build step and vendor lock-in for the highest achievable inference performance. Deployed via NVIDIA Triton Inference Server or NIM microservices, not a drop-in replacement for llama.cpp or vLLM.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'TensorRT-LLM erklärt: NVIDIAs GPU-optimierte Inference-Engine (2026)',
    subtitle: 'Open-Source-Bibliothek von NVIDIA, die LLMs zu optimierten Engines für NVIDIA-GPUs kompiliert — im Tausch gegen einen Build-Schritt und Herstellerbindung die höchstmögliche Inferenzleistung. Bereitgestellt über NVIDIA Triton Inference Server oder NIM-Microservices, kein direkter Ersatz für llama.cpp oder vLLM.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'TensorRT-LLM expliqué : le moteur d\'inférence optimisé GPU de NVIDIA (2026)',
    subtitle: 'Bibliothèque open source de NVIDIA qui compile les LLM en moteurs optimisés pour GPU NVIDIA, échangeant une étape de build et un verrouillage matériel contre la performance d\'inférence la plus élevée possible. Déployé via NVIDIA Triton Inference Server ou les microservices NIM, pas un remplacement direct de llama.cpp ou vLLM.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'TensorRT-LLMとは:NVIDIAのGPU最適化推論エンジンを解説(2026年版)',
    subtitle: 'NVIDIAが公開するオープンソースライブラリ。LLMをNVIDIA GPU向けに最適化されたエンジンへ事前コンパイルし、ビルド工程とベンダーロックインと引き換えに最高の推論性能を狙う。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'TensorRT-LLM详解:NVIDIA的GPU优化推理引擎(2026版)',
    subtitle: 'NVIDIA发布的开源库,将大语言模型预编译为针对NVIDIA GPU优化的引擎,以额外构建步骤和厂商锁定换取尽可能高的推理性能。通过NVIDIA Triton推理服务器或NIM微服务部署,并非llama.cpp或vLLM的直接替代品。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'TensorRT-LLM explicado: el motor de inferencia optimizado para GPU de NVIDIA (2026)',
    subtitle: 'Biblioteca de código abierto de NVIDIA que compila LLM en motores optimizados para GPU de NVIDIA, a cambio de un paso de compilación y dependencia del fabricante, buscando el máximo rendimiento de inferencia posible. Se despliega mediante NVIDIA Triton Inference Server o microservicios NIM, no sustituye directamente a llama.cpp ni a vLLM.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'TensorRT-LLM explicado: o motor de inferência otimizado para GPU da NVIDIA (2026)',
    subtitle: 'Biblioteca de código aberto da NVIDIA que compila LLMs em motores otimizados para GPUs NVIDIA, trocando uma etapa de build e dependência do fornecedor pelo máximo desempenho de inferência possível. Implantado via NVIDIA Triton Inference Server ou microsserviços NIM, não é um substituto direto do llama.cpp ou do vLLM.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'شرح TensorRT-LLM: محرك الاستدلال من NVIDIA المُحسَّن لوحدات GPU (2026)',
    subtitle: 'مكتبة مفتوحة المصدر من NVIDIA تجمّع نماذج اللغة الكبيرة إلى محركات مُحسَّنة لوحدات GPU من NVIDIA، مقابل خطوة بناء إضافية وارتباط بمورّد واحد، سعيًا لأعلى أداء استدلال ممكن. يُنشر عبر NVIDIA Triton Inference Server أو خدمات NIM المصغّرة، وليس بديلاً مباشرًا لـllama.cpp أو vLLM.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'TensorRT-LLM 완벽 정리: NVIDIA의 GPU 최적화 추론 엔진(2026년)',
    subtitle: 'NVIDIA가 공개한 오픈소스 라이브러리로, LLM을 NVIDIA GPU 전용 최적화 엔진으로 사전 컴파일하여 빌드 단계와 벤더 종속을 감수하는 대신 최고의 추론 성능을 노립니다. NVIDIA Triton Inference Server나 NIM 마이크로서비스로 배포되며, llama.cpp나 vLLM을 직접 대체하지는 않습니다.',
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
