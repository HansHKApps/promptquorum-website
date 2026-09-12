#!/usr/bin/env node
// One-off generator for the liquid-apollo-review hero images (9 locales).
const BASE = 'http://localhost:3420';
const SPECS = {
  en: { title: 'Liquid Apollo Review (2026): On-Device LFM2 Chat, Plus Optional Cloud', subtitle: 'A free hybrid app for iPhone, Mac, and Android running Liquid AI\'s own on-device LFM2 models via LEAP, fully offline once downloaded — plus optional OpenRouter cloud access to Meta Llama 3 and GPT-4, and self-hosted LM Studio or Ollama backend support. Only the local mode keeps chats off the network.', footer: 'PromptQuorum Guide' },
  de: { title: 'Liquid Apollo Review (2026): On-Device-LFM2-Chat, plus optionale Cloud', subtitle: 'Kostenlose Hybrid-App für iPhone, Mac und Android mit Liquid AIs eigenen LFM2-Modellen über LEAP, vollständig offline nach dem Download — plus optionalem OpenRouter-Cloud-Zugriff auf Meta Llama 3 und GPT-4, sowie Unterstützung für selbst gehostete LM-Studio- oder Ollama-Server. Nur der lokale Modus hält Chats vom Netzwerk fern.', footer: 'PromptQuorum-Leitfaden' },
  fr: { title: 'Liquid Apollo Review (2026) : Chat LFM2 local, plus cloud en option', subtitle: 'Application hybride gratuite pour iPhone, Mac et Android exécutant les propres modèles LFM2 de Liquid AI via LEAP, entièrement hors ligne une fois téléchargés — plus un accès cloud OpenRouter optionnel à Meta Llama 3 et GPT-4, et un support de backend LM Studio ou Ollama auto-hébergé. Seul le mode local garde les discussions hors réseau.', footer: 'Guide PromptQuorum' },
  ja: { title: 'Liquid Apollo レビュー（2026年）：オンデバイスLFM2チャット、プラスオプションのクラウド', subtitle: 'iPhone、Mac、Android向けの無料ハイブリッドアプリで、LEAP経由でLiquid AI自身のLFM2モデルをダウンロード後は完全にオフラインで実行します。さらにMeta Llama 3やGPT-4へのオプションのOpenRouterクラウドアクセス、そしてセルフホストのLM StudioまたはOllamaバックエンド対応も備えています。ローカルモードだけがチャットをネットワークから切り離します。', footer: 'PromptQuorumガイド' },
  zh: { title: 'Liquid Apollo 评测（2026）：本地LFM2聊天，附带可选云端', subtitle: '一款面向iPhone、Mac和Android的免费混合应用，通过LEAP运行Liquid AI自己的LFM2模型，下载后完全离线——此外还提供可选的OpenRouter云端访问，可连接Meta Llama 3和GPT-4，并支持自托管的LM Studio或Ollama后端。只有本地模式能让聊天完全脱离网络。', footer: 'PromptQuorum 指南' },
  es: { title: 'Liquid Apollo Review (2026): Chat LFM2 local, más nube opcional', subtitle: 'App híbrida gratuita para iPhone, Mac y Android que ejecuta los propios modelos LFM2 de Liquid AI vía LEAP, totalmente offline tras la descarga — además de acceso opcional a la nube OpenRouter para Meta Llama 3 y GPT-4, y soporte para backends LM Studio u Ollama autoalojados. Solo el modo local mantiene los chats fuera de la red.', footer: 'Guía de PromptQuorum' },
  pt: { title: 'Liquid Apollo Review (2026): Chat LFM2 local, mais nuvem opcional', subtitle: 'App híbrido gratuito para iPhone, Mac e Android que roda os próprios modelos LFM2 da Liquid AI via LEAP, totalmente offline após o download — além de acesso opcional à nuvem OpenRouter para Meta Llama 3 e GPT-4, e suporte a backends LM Studio ou Ollama auto-hospedados. Só o modo local mantém as conversas fora da rede.', footer: 'Guia PromptQuorum' },
  ar: { title: 'مراجعة Liquid Apollo (2026): محادثة LFM2 محلية، بالإضافة إلى سحابة اختيارية', subtitle: 'تطبيق هجين مجاني لأجهزة iPhone وMac وAndroid يشغّل نماذج LFM2 الخاصة بـLiquid AI عبر LEAP، بلا اتصال بالكامل بعد التنزيل — بالإضافة إلى وصول سحابي اختياري عبر OpenRouter إلى Meta Llama 3 وGPT-4، ودعم لخوادم LM Studio أو Ollama مستضافة ذاتياً. الوضع المحلي فقط هو الذي يبقي المحادثات بعيدة عن الشبكة.', footer: 'دليل PromptQuorum' },
  ko: { title: 'Liquid Apollo 리뷰 (2026): 온디바이스 LFM2 채팅, 선택적 클라우드도 지원', subtitle: 'iPhone, Mac, Android용 무료 하이브리드 앱으로 LEAP을 통해 Liquid AI 자체의 LFM2 모델을 다운로드 후 완전히 오프라인으로 실행합니다. 여기에 Meta Llama 3와 GPT-4에 대한 선택적 OpenRouter 클라우드 접속, 그리고 자체 호스팅 LM Studio 또는 Ollama 백엔드 지원도 제공합니다. 로컬 모드만이 채팅을 네트워크에서 완전히 분리합니다.', footer: 'PromptQuorum 가이드' },
};

async function generate(lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: spec.subtitle, footer: spec.footer }),
  });
  if (!res.ok) throw new Error(`${lang}: HTTP ${res.status} ${await res.text()}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = `public/images/liquid-apollo-review-hero-${lang}.png`;
  await import('node:fs/promises').then(fs => fs.writeFile(path, buf));
  console.log(`  ${path} (${buf.length} bytes)`);
}

(async () => {
  for (const [lang, spec] of Object.entries(SPECS)) {
    await generate(lang, spec);
  }
  console.log('done');
})();
