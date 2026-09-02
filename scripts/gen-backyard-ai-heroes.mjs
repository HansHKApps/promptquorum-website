#!/usr/bin/env node
// One-off hero generator for backyard-ai-review-local-roleplay-2026 (all 9 locales).
const BASE = 'http://localhost:3457';

const SPECS = {
  en: {
    title: 'Backyard AI Review (2026): Local AI Character Chat and Roleplay',
    subtitle:
      'Backyard AI (backyard.ai), formerly named Faraday.dev, is a free, closed-source desktop app for Windows and Mac built specifically for AI character chat and roleplay. It runs open-source models — Llama, Mistral, Gemma, and community roleplay fine-tunes like Fimbulvetr 10.7B — entirely on your own hardware, no account or credit card required for local use. Its Character Hub ships with thousands of user-created personas to chat with out of the box, and an optional paid layer, Backyard Cloud, adds hosted inference for people without a capable local GPU.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Backyard AI im Test (2026): Lokaler KI-Charakter-Chat und Rollenspiel',
    subtitle:
      'Backyard AI (backyard.ai), früher Faraday.dev genannt, ist eine kostenlose, closed-source Desktop-App für Windows und Mac, die speziell für KI-Charakter-Chat und Rollenspiel entwickelt wurde. Sie führt Open-Source-Modelle — Llama, Mistral, Gemma und von der Community feinabgestimmte Rollenspiel-Modelle wie Fimbulvetr 10.7B — vollständig auf der eigenen Hardware aus, ohne Konto oder Kreditkarte für die lokale Nutzung. Der Character Hub bietet von Anfang an Tausende von nutzergenerierten Charakteren, und die optionale Bezahlstufe Backyard Cloud liefert gehostete Inferenz für alle ohne leistungsstarke lokale GPU.',
    footer: 'PromptQuorum-Leitfaden',
  },
  es: {
    title: 'Análisis de Backyard AI (2026): Chat de Personajes IA y Roleplay Local',
    subtitle:
      'Backyard AI (backyard.ai), antes llamada Faraday.dev, es una app de escritorio gratuita y de código cerrado para Windows y Mac, creada específicamente para el chat de personajes IA y el roleplay. Ejecuta modelos de código abierto — Llama, Mistral, Gemma y ajustes finos de roleplay de la comunidad como Fimbulvetr 10.7B — completamente en tu propio equipo, sin cuenta ni tarjeta de crédito para el uso local. Su Character Hub ofrece de entrada miles de personas creadas por usuarios, y una capa opcional de pago, Backyard Cloud, añade inferencia alojada para quienes no tienen una GPU local potente.',
    footer: 'Guía de PromptQuorum',
  },
  fr: {
    title: 'Avis sur Backyard AI (2026) : chat de personnages IA et roleplay local',
    subtitle:
      "Backyard AI (backyard.ai), anciennement Faraday.dev, est une application de bureau gratuite et à code fermé pour Windows et Mac, conçue spécifiquement pour le chat de personnages IA et le roleplay. Elle exécute des modèles open source — Llama, Mistral, Gemma et des versions affinées par la communauté comme Fimbulvetr 10.7B — entièrement sur votre propre matériel, sans compte ni carte bancaire pour l'usage local. Son Character Hub propose d'emblée des milliers de personnages créés par les utilisateurs, et une couche payante optionnelle, Backyard Cloud, ajoute une inférence hébergée pour qui n'a pas de GPU local puissant.",
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Backyard AIレビュー(2026):ローカルAIキャラクターチャットとロールプレイ',
    subtitle:
      'Backyard AI(backyard.ai、旧Faraday.dev)は、AIキャラクターチャットとロールプレイのために作られた、WindowsとMac向けの無料・クローズドソースのデスクトップアプリです。Llama、Mistral、Gemma、そしてFimbulvetr 10.7Bのようなコミュニティ製ロールプレイ用ファインチューンモデルを、アカウントもクレジットカードも不要でご自身のハードウェア上で完全ローカル実行できます。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Backyard AI评测(2026):本地AI角色聊天与角色扮演',
    subtitle:
      'Backyard AI(backyard.ai,前身为Faraday.dev)是一款免费、闭源的Windows和Mac桌面应用,专为AI角色聊天和角色扮演打造。它可以在你自己的硬件上完全本地运行开源模型——Llama、Mistral、Gemma,以及Fimbulvetr 10.7B这类社区调优的角色扮演模型——本地使用无需账号、无需信用卡。',
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Análise do Backyard AI (2026): Chat de Personagens IA e Roleplay Local',
    subtitle:
      'O Backyard AI (backyard.ai), antes chamado Faraday.dev, é um aplicativo de desktop gratuito e de código fechado para Windows e Mac, criado especificamente para chat de personagens IA e roleplay. Ele executa modelos de código aberto — Llama, Mistral, Gemma e ajustes finos de roleplay da comunidade como Fimbulvetr 10.7B — totalmente no seu próprio hardware, sem conta nem cartão de crédito para uso local. O Character Hub já vem com milhares de personagens criados por usuários, e uma camada paga opcional, o Backyard Cloud, adiciona inferência hospedada para quem não tem uma GPU local potente.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Backyard AI (2026): محادثة الشخصيات بالذكاء الاصطناعي ولعب الأدوار محلياً',
    subtitle:
      'Backyard AI (backyard.ai)، الذي كان يُعرف سابقاً باسم Faraday.dev، هو تطبيق سطح مكتب مجاني ومغلق المصدر لأنظمة Windows و Mac، صُمم خصيصاً لمحادثة الشخصيات بالذكاء الاصطناعي ولعب الأدوار. يشغّل نماذج مفتوحة المصدر — Llama وMistral وGemma ونماذج مضبوطة من المجتمع لألعاب الأدوار مثل Fimbulvetr 10.7B — بالكامل على جهازك الخاص، دون حساب أو بطاقة ائتمان للاستخدام المحلي.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Backyard AI 리뷰(2026): 로컬 AI 캐릭터 채팅과 롤플레이',
    subtitle:
      'Backyard AI(backyard.ai, 이전 명칭 Faraday.dev)는 AI 캐릭터 채팅과 롤플레이를 위해 특별히 제작된 Windows 및 Mac용 무료 폐쇄형 소스 데스크톱 앱입니다. Llama, Mistral, Gemma, 그리고 Fimbulvetr 10.7B와 같은 커뮤니티 제작 롤플레이 파인튜닝 모델을 계정이나 신용카드 없이 사용자의 하드웨어에서 완전히 로컬로 실행합니다.',
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
    const outPath = `${OUT_DIR}/backyard-ai-review-local-roleplay-2026-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
