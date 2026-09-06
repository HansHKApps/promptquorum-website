#!/usr/bin/env node
const BASE = 'http://localhost:3410';
const SLUG = 'vllm-explained';
const SPECS = {
  en: {
    title: 'vLLM Explained: High-Throughput LLM Serving with PagedAttention (2026)',
    subtitle: 'Free, Apache 2.0-licensed inference and serving library from the UC Berkeley Sky Computing Lab. Uses PagedAttention and continuous batching to serve many concurrent requests from a GPU, with a built-in OpenAI-compatible API server for production deployment.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'vLLM erklärt: Hochleistungs-LLM-Serving mit PagedAttention (2026)',
    subtitle: 'Kostenlose, Apache-2.0-lizenzierte Inferenz- und Serving-Bibliothek aus dem Sky Computing Lab der UC Berkeley. Nutzt PagedAttention und Continuous Batching, um viele gleichzeitige Anfragen von einer GPU zu bedienen, mit eingebautem OpenAI-kompatiblem API-Server für den Produktionseinsatz.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'vLLM expliqué : le serveur LLM haute performance avec PagedAttention (2026)',
    subtitle: 'Bibliothèque gratuite sous licence Apache 2.0 issue du Sky Computing Lab de l\'UC Berkeley. Utilise PagedAttention et le batching continu pour servir de nombreuses requêtes simultanées depuis un GPU, avec un serveur d\'API compatible OpenAI intégré pour la production.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'vLLMとは？PagedAttentionで実現する高スループット推論サーバーを解説（2026）',
    subtitle: 'UC BerkeleyのSky Computing Labが開発した無料でApache 2.0ライセンスの推論・サービングライブラリ。PagedAttentionとcontinuous batchingでGPUから多数の同時リクエストを処理し、本番向けにOpenAI互換APIサーバーを内蔵。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'vLLM详解：基于PagedAttention的高吞吐量推理服务（2026）',
    subtitle: '起源于UC Berkeley Sky Computing Lab的免费、Apache 2.0许可推理与服务库。使用PagedAttention和连续批处理从GPU服务众多并发请求，内置OpenAI兼容API服务器，专为生产部署而构建。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'vLLM explicado: servidor de inferencia LLM de alto rendimiento con PagedAttention (2026)',
    subtitle: 'Biblioteca gratuita con licencia Apache 2.0 del Sky Computing Lab de UC Berkeley. Usa PagedAttention y batching continuo para servir muchas solicitudes simultáneas desde una GPU, con servidor de API compatible con OpenAI integrado para producción.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'vLLM explicado: serving de LLM de alto desempenho com PagedAttention (2026)',
    subtitle: 'Biblioteca gratuita sob licença Apache 2.0 do Sky Computing Lab da UC Berkeley. Usa PagedAttention e continuous batching para atender muitas requisições simultâneas de uma GPU, com servidor de API compatível com OpenAI embutido para produção.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'شرح vLLM: خادم استدلال نماذج اللغة عالي الإنتاجية مع PagedAttention (2026)',
    subtitle: 'مكتبة مجانية مرخّصة بموجب Apache 2.0 نشأت في مختبر Sky Computing Lab بجامعة UC Berkeley. تستخدم PagedAttention والتجميع المستمر لخدمة عدد كبير من الطلبات المتزامنة من وحدة معالجة رسومية واحدة، وتأتي مزودة بخادم API متوافق مع OpenAI للنشر في بيئات الإنتاج متعددة المستخدمين.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'vLLM이란? PagedAttention 기반 고성능 LLM 서빙 엔진 해설 (2026)',
    subtitle: 'UC Berkeley Sky Computing Lab에서 시작된 무료, Apache 2.0 라이선스 추론·서빙 라이브러리. PagedAttention과 continuous batching으로 한 GPU에서 다수의 동시 요청을 처리하며, 프로덕션용 OpenAI 호환 API 서버를 내장.',
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
