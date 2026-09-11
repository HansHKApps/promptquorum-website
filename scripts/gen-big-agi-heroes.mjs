#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const SPECS = {
  en: {
    title: 'Big-AGI Review 2026: Self-Hosted Multi-Model Chat',
    subtitle: 'Free, MIT-licensed chat interface with Beam multi-model comparison',
    bullets: [
      'Connects to 20+ providers: OpenAI, Anthropic, Gemini, and local Ollama',
      'Beam feature compares multiple models on one prompt, side by side',
      'Self-host via Docker/Vercel free, or use the hosted version',
      'Pro plan optional: $9/month for cloud sync, billed annually',
    ],
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Big-AGI im Test 2026: Multi-Modell-Chat',
    subtitle: 'Kostenlose, MIT-lizenzierte Chat-Oberfläche mit Beam-Vergleich',
    bullets: [
      'Verbindet 20+ Anbieter: OpenAI, Anthropic, Gemini und lokales Ollama',
      'Beam vergleicht mehrere Modelle auf einen Prompt nebeneinander',
      'Self-Hosting per Docker/Vercel kostenlos, oder gehostete Version nutzen',
      'Optionaler Pro-Plan: 9 $/Monat für Cloud-Sync, jährlich abgerechnet',
    ],
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Big-AGI : avis 2026 sur le chat multi-modèle',
    subtitle: 'Interface de chat gratuite sous licence MIT avec comparaison Beam',
    bullets: [
      'Se connecte à 20+ fournisseurs : OpenAI, Anthropic, Gemini, Ollama local',
      'Beam compare plusieurs modèles sur un même prompt, côte à côte',
      'Auto-hébergement via Docker/Vercel gratuit, ou version hébergée',
      'Plan Pro optionnel : 9 $/mois pour la sync cloud, facturé annuellement',
    ],
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Big-AGIレビュー2026：マルチモデルチャット',
    subtitle: '無料・MITライセンスのチャットUI、Beam比較機能を搭載',
    bullets: [
      '20以上のプロバイダーに接続：OpenAI、Anthropic、Gemini、ローカルOllama',
      'Beamで複数モデルを1つのプロンプトで同時比較',
      'DockerやVercelで無料セルフホスト、またはホスト版を利用',
      '任意のProプラン：月額9ドルでクラウド同期、年払い',
    ],
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Big-AGI 评测 2026：多模型聊天',
    subtitle: '免费 MIT 许可聊天界面，配备 Beam 对比功能',
    bullets: [
      '连接 20+ 提供商：OpenAI、Anthropic、Gemini 及本地 Ollama',
      'Beam 功能可在一个提示词上同时比较多个模型',
      '通过 Docker/Vercel 免费自托管，或使用托管版本',
      '可选 Pro 计划：每月 9 美元用于云同步，按年计费',
    ],
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Big-AGI: reseña 2026 del chat multi-modelo',
    subtitle: 'Interfaz de chat gratuita con licencia MIT y comparación Beam',
    bullets: [
      'Se conecta a 20+ proveedores: OpenAI, Anthropic, Gemini y Ollama local',
      'Beam compara varios modelos en el mismo prompt, en paralelo',
      'Auto-alojamiento gratis vía Docker/Vercel, o usa la versión alojada',
      'Plan Pro opcional: 9 $/mes para sincronización, facturado anualmente',
    ],
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Big-AGI: análise 2026 do chat multi-modelo',
    subtitle: 'Interface de chat gratuita sob licença MIT com comparação Beam',
    bullets: [
      'Conecta a 20+ provedores: OpenAI, Anthropic, Gemini e Ollama local',
      'Beam compara vários modelos no mesmo prompt, lado a lado',
      'Auto-hospedagem gratuita via Docker/Vercel, ou versão hospedada',
      'Plano Pro opcional: US$ 9/mês para sincronização, cobrado anualmente',
    ],
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Big-AGI 2026: دردشة متعددة النماذج',
    subtitle: 'واجهة دردشة مجانية برخصة MIT مع ميزة مقارنة Beam',
    bullets: [
      'تتصل بأكثر من 20 مزودًا: OpenAI وAnthropic وGemini وOllama المحلي',
      'تقارن ميزة Beam عدة نماذج على نفس الموجّه جنبًا إلى جنب',
      'استضافة ذاتية مجانية عبر Docker/Vercel، أو استخدام النسخة المستضافة',
      'خطة Pro اختيارية: 9 دولارات شهريًا للمزامنة، تُدفع سنويًا',
    ],
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Big-AGI 리뷰 2026: 멀티 모델 채팅',
    subtitle: '무료 MIT 라이선스 채팅 인터페이스, Beam 비교 기능 탑재',
    bullets: [
      '20개 이상 제공업체 연결: OpenAI, Anthropic, Gemini, 로컬 Ollama',
      'Beam으로 여러 모델을 하나의 프롬프트에서 나란히 비교',
      'Docker/Vercel로 무료 셀프 호스팅, 또는 호스팅 버전 이용',
      '선택적 Pro 플랜: 클라우드 동기화 월 9달러, 연간 결제',
    ],
    footer: 'PromptQuorum 가이드',
  },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, bullets: spec.bullets, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/big-agi-review-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
