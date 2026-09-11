#!/usr/bin/env node
const BASE = 'http://localhost:3411';
const SPECS = {
  'ekorbia-review': {
    en: { title: "Ekorbia Review 2026: Free Open-Source Local AI Desktop App", subtitle: '', bullets: ["Ekorbia is free and open-source under the MIT license — no subscription, no paid tier, no account, and no API key required for local use", "On macOS, Ekorbia bundles its own inference engine (built on llama.cpp) plus a curated in-app model catalog (Gemma 4 models and nomic-embed-text for embeddings), so no separate install is needed", "On Windows and Linux, Ekorbia currently requires an external backend — Ollama or any OpenAI-compatible endpoint — configured under Settings → Backend"], footer: "PromptQuorum Guide" },
    de: { title: "Ekorbia Review 2026: Kostenlose Open-Source-Desktop-App für lokale KI", subtitle: '', bullets: ["Ekorbia ist kostenlos und quelloffen unter der MIT-Lizenz — kein Abonnement, keine kostenpflichtige Stufe, kein Konto und kein API-Schlüssel für die lokale Nutzung nötig", "Unter macOS bringt Ekorbia eine eigene Inferenz-Engine mit (basierend auf llama.cpp) plus einen kuratierten In-App-Modell-Katalog (Gemma-4-Modelle und nomic-embed-text für Embeddings), sodass keine separate Installation nötig ist", "Unter Windows und Linux benötigt Ekorbia derzeit ein externes Backend — Ollama oder einen beliebigen OpenAI-kompatiblen Endpunkt —, konfiguriert unter Einstellungen → Backend"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Ekorbia : avis 2026 sur l'app de bureau IA locale gratuite", subtitle: '', bullets: ["Ekorbia est gratuit et open source sous licence MIT — aucun abonnement, aucune offre payante, aucun compte, aucune clé API requise pour l'usage local", "Sur macOS, Ekorbia intègre son propre moteur d'inférence (basé sur llama.cpp) plus un catalogue de modèles intégré (modèles Gemma 4 et nomic-embed-text pour les embeddings), sans installation séparée nécessaire", "Sur Windows et Linux, Ekorbia nécessite actuellement un moteur externe — Ollama ou tout point de terminaison compatible OpenAI — configuré dans Réglages → Backend"], footer: "Guide PromptQuorum" },
    es: { title: "Ekorbia: análisis 2026 de la app de escritorio de IA local gratuita", subtitle: '', bullets: ["Ekorbia es gratuita y de código abierto bajo la licencia MIT — sin suscripción, sin plan de pago, sin cuenta, y sin necesidad de clave de API para el uso local", "En macOS, Ekorbia integra su propio motor de inferencia (basado en llama.cpp) más un catálogo de modelos dentro de la app (modelos Gemma 4 y nomic-embed-text para embeddings), así que no hace falta instalar nada aparte", "En Windows y Linux, Ekorbia actualmente requiere un backend externo —Ollama o cualquier endpoint compatible con OpenAI— configurado en Ajustes → Backend"], footer: "Guía de PromptQuorum" },
    ja: { title: "Ekorbiaレビュー2026：無料オープンソースのローカルAIデスクトップアプリ", subtitle: '', bullets: ["EkorbiaはMITライセンスの下で無料かつオープンソースです — サブスクリプション、有料プラン、アカウント、ローカル利用でのAPIキーはいずれも不要です", "macOSでは、Ekorbiaが独自の推論エンジン（llama.cppベース）とアプリ内蔵のモデルカタログ（Gemma 4モデルと埋め込み用のnomic-embed-text）を持つため、別途インストールは不要です", "WindowsとLinuxでは、現在Ekorbiaは外部バックエンド — Ollamaまたは任意のOpenAI互換エンドポイント — を「設定 → バックエンド」で構成する必要があります"], footer: "PromptQuorumガイド" },
    zh: { title: "Ekorbia评测2026：免费开源本地AI桌面应用", subtitle: '', bullets: ["Ekorbia在MIT许可下免费且开源——无订阅、无付费层级、无需账户，本地使用也不需要API密钥", "在macOS上，Ekorbia内置了自己的推理引擎（基于llama.cpp）以及应用内精选模型目录（Gemma 4系列模型和用于嵌入的nomic-embed-text），无需单独安装", "在Windows和Linux上，Ekorbia目前需要在「设置 → 后端」中配置外部后端——Ollama或任何兼容OpenAI的端点"], footer: "PromptQuorum 指南" },
    pt: { title: "Ekorbia: análise 2026 do app de IA local gratuito", subtitle: '', bullets: ["O Ekorbia é gratuito e de código aberto sob a licença MIT — sem assinatura, sem plano pago, sem conta, e sem necessidade de chave de API para uso local", "No macOS, o Ekorbia traz embutido seu próprio mecanismo de inferência (baseado em llama.cpp) além de um catálogo de modelos no próprio app (modelos Gemma 4 e nomic-embed-text para embeddings), então nenhuma instalação separada é necessária", "No Windows e Linux, o Ekorbia atualmente exige um backend externo — Ollama ou qualquer endpoint compatível com OpenAI — configurado em Configurações → Backend"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة Ekorbia 2026: تطبيق مكتبي مجاني ومفتوح المصدر للذكاء الاصطناعي المحلي", subtitle: '', bullets: ["Ekorbia مجاني ومفتوح المصدر بموجب رخصة MIT — بلا اشتراك، بلا خطة مدفوعة، بلا حساب، وبلا حاجة لمفتاح API للاستخدام المحلي", "على macOS، يتضمن Ekorbia محرك استدلال خاصًا به (مبني على llama.cpp) بالإضافة إلى كتالوج نماذج داخل التطبيق (نماذج Gemma 4 وnomic-embed-text للتضمينات)، لذا لا حاجة لتثبيت منفصل", "على Windows وLinux، يحتاج Ekorbia حاليًا إلى محرك خلفي خارجي — Ollama أو أي نقطة نهاية متوافقة مع OpenAI — يُضبط ضمن الإعدادات ← المحرك الخلفي"], footer: "دليل PromptQuorum" },
    ko: { title: "Ekorbia 리뷰 2026: 무료 오픈소스 로컬 AI 데스크톱 앱", subtitle: '', bullets: ["Ekorbia는 MIT 라이선스 아래 무료로 제공되는 오픈소스입니다 — 구독, 유료 요금제, 계정, 로컬 사용 시 API 키 모두 필요하지 않습니다", "macOS에서는 Ekorbia가 자체 추론 엔진(llama.cpp 기반)과 앱 내장 모델 카탈로그(임베딩용 Gemma 4 모델 및 nomic-embed-text)를 갖추고 있어 별도 설치가 필요하지 않습니다", "Windows와 Linux에서는 현재 Ekorbia가 「설정 → 백엔드」에서 구성하는 외부 백엔드 — Ollama 또는 임의의 OpenAI 호환 엔드포인트 — 를 필요로 합니다"], footer: "PromptQuorum 가이드" },
  },
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${basename}/${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/${basename}-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [basename, locales] of Object.entries(SPECS)) {
    console.log(`=== ${basename} ===`);
    for (const [lang, spec] of Object.entries(locales)) {
      await generate(basename, lang, spec);
    }
  }
  console.log('done');
})();
