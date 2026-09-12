#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const FOOTER = {
  en: 'PromptQuorum Guide', de: 'PromptQuorum-Leitfaden', fr: 'Guide PromptQuorum',
  es: 'Guía de PromptQuorum', pt: 'Guia PromptQuorum', ja: 'PromptQuorumガイド',
  zh: 'PromptQuorum 指南', ar: 'دليل PromptQuorum', ko: 'PromptQuorum 가이드',
};

const SPECS = {
  'agnai-review': {
    en: { title: 'Agnai Review (2026): Self-Hostable AI Roleplay Chat', bullets: [
      'Agnai (agnai.chat) is a self-hostable, open-source AI roleplay chat platform — 782 stars, 150 forks as of 2026-09-12, licensed AGPL-3.0.',
      'A frontend, not a model host — connects to Kobold-compatible backends, NovelAI, AI Horde, Goose, OpenAI, Claude, Replicate, OpenRouter, and Mancer.',
      'Self-hosts via npm (`npm install agnai -g`) or Docker; MongoDB and Redis are both optional.',
    ]},
    de: { title: 'Agnai im Test (2026): Selbst hostbarer KI-Rollenspiel-Chat', bullets: [
      'Agnai (agnai.chat) ist eine selbst hostbare, quelloffene KI-Rollenspiel-Chat-Plattform — 782 Sterne, 150 Forks (Stand 2026-09-12), lizenziert unter AGPL-3.0.',
      'Ein Frontend, kein Modell-Host — bindet Kobold-kompatible Backends, NovelAI, AI Horde, Goose, OpenAI, Claude, Replicate, OpenRouter und Mancer an.',
      'Self-Hosting per npm (`npm install agnai -g`) oder Docker; MongoDB und Redis sind beide optional.',
    ]},
    fr: { title: 'Agnai : Avis (2026) sur ce Chat de Jeu de Rôle IA Auto-Hébergeable', bullets: [
      'Agnai (agnai.chat) est une plateforme de chat de jeu de rôle IA open source et auto-hébergeable — 782 étoiles, 150 forks au 2026-09-12, licence AGPL-3.0.',
      'Un frontend, pas un hébergeur de modèle — se connecte à des backends compatibles Kobold, NovelAI, AI Horde, Goose, OpenAI, Claude, Replicate, OpenRouter et Mancer.',
      "Auto-hébergement via npm (`npm install agnai -g`) ou Docker ; MongoDB et Redis sont tous deux optionnels.",
    ]},
    es: { title: 'Agnai: Reseña (2026) del Chat de Rol IA Autoalojable', bullets: [
      'Agnai (agnai.chat) es una plataforma de chat de rol con IA autoalojable y de código abierto — 782 estrellas, 150 forks a fecha de 2026-09-12, licencia AGPL-3.0.',
      'Un frontend, no un alojador de modelos — se conecta a backends compatibles con Kobold, NovelAI, AI Horde, Goose, OpenAI, Claude, Replicate, OpenRouter y Mancer.',
      'Autoalojamiento vía npm (`npm install agnai -g`) o Docker; MongoDB y Redis son ambos opcionales.',
    ]},
    pt: { title: 'Agnai: Análise (2026) do Chat de Roleplay com IA Auto-Hospedável', bullets: [
      'O Agnai (agnai.chat) é uma plataforma de chat de roleplay com IA auto-hospedável e de código aberto — 782 estrelas, 150 forks em 2026-09-12, licença AGPL-3.0.',
      'Um frontend, não um hospedeiro de modelo — conecta-se a backends compatíveis com Kobold, NovelAI, AI Horde, Goose, OpenAI, Claude, Replicate, OpenRouter e Mancer.',
      'Auto-hospedagem via npm (`npm install agnai -g`) ou Docker; MongoDB e Redis são ambos opcionais.',
    ]},
    ja: { title: 'Agnaiレビュー(2026):セルフホスト可能なAIロールプレイチャット', bullets: [
      'Agnai(agnai.chat)はセルフホスト可能なオープンソースAIロールプレイチャット基盤——2026-09-12時点でスター782、フォーク150、AGPL-3.0ライセンス。',
      'モデルホストではなくフロントエンド——Kobold互換バックエンド、NovelAI、AI Horde、Goose、OpenAI、Claude、Replicate、OpenRouter、Mancerに接続。',
      'セルフホストはnpm(`npm install agnai -g`)またはDocker経由。MongoDBとRedisはいずれも任意。',
    ]},
    zh: { title: 'Agnai评测(2026):可自托管的AI角色扮演聊天平台', bullets: [
      'Agnai(agnai.chat)是可自托管的开源AI角色扮演聊天平台——截至2026-09-12获得782星、150分叉,采用AGPL-3.0许可证。',
      '前端而非模型托管方——连接兼容Kobold的后端、NovelAI、AI Horde、Goose、OpenAI、Claude、Replicate、OpenRouter和Mancer。',
      '通过npm(`npm install agnai -g`)或Docker自托管;MongoDB和Redis均为可选。',
    ]},
    ar: { title: 'مراجعة Agnai (2026): منصة دردشة تقمص أدوار بالذكاء الاصطناعي قابلة للاستضافة الذاتية', bullets: [
      'Agnai (agnai.chat) منصة دردشة تقمص أدوار مفتوحة المصدر وقابلة للاستضافة الذاتية — 782 نجمة و150 تفريعة حتى 2026-09-12، برخصة AGPL-3.0.',
      'واجهة أمامية لا مضيف نماذج — تتصل بخلفيات متوافقة مع Kobold، وNovelAI، وAI Horde، وGoose، وOpenAI، وClaude، وReplicate، وOpenRouter، وMancer.',
      'الاستضافة الذاتية عبر npm (`npm install agnai -g`) أو Docker؛ MongoDB وRedis كلاهما اختياري.',
    ]},
    ko: { title: 'Agnai 리뷰(2026): 셀프 호스팅 가능한 AI 롤플레이 채팅', bullets: [
      'Agnai(agnai.chat)는 셀프 호스팅 가능한 오픈소스 AI 롤플레이 채팅 플랫폼 — 2026-09-12 기준 스타 782개, 포크 150개, AGPL-3.0 라이선스.',
      '모델 호스트가 아닌 프런트엔드 — Kobold 호환 백엔드, NovelAI, AI Horde, Goose, OpenAI, Claude, Replicate, OpenRouter, Mancer에 연결.',
      '셀프 호스팅은 npm(`npm install agnai -g`) 또는 Docker로 설치. MongoDB와 Redis는 모두 선택 사항.',
    ]},
  },
  'metagpt-review': {
    en: { title: 'MetaGPT Review 2026: The Multi-Agent Software Company Framework', bullets: [
      'MetaGPT is a free, open-source (MIT-licensed) Python multi-agent framework that simulates a software company.',
      'Assigns role-based LLM agents to a Standard Operating Procedure that turns a one-line requirement into a PRD, system design, task breakdown, and code.',
      'Canonical repo github.com/FoundationAgents/MetaGPT — 70,336 stars, 8,942 forks as of 2026-09-12; install via `pip install --upgrade metagpt`.',
    ]},
    de: { title: 'MetaGPT Review 2026: Das Multi-Agenten-Framework für simulierte Softwarefirmen', bullets: [
      'MetaGPT ist ein kostenloses, quelloffenes (MIT-lizenziertes) Python-Multi-Agenten-Framework, das eine Softwarefirma simuliert.',
      'Weist rollenbasierten LLM-Agenten eine Standard Operating Procedure zu, die aus einer einzeiligen Anforderung PRD, Systemdesign, Aufgaben und Code erzeugt.',
      'Kanonisches Repo github.com/FoundationAgents/MetaGPT — 70.336 Sterne, 8.942 Forks (Stand 2026-09-12); Installation via `pip install --upgrade metagpt`.',
    ]},
    fr: { title: 'MetaGPT Review 2026 : le framework multi-agents qui simule une entreprise logicielle', bullets: [
      "MetaGPT est un framework Python multi-agents gratuit et open source (licence MIT) qui simule une entreprise logicielle.",
      "Attribue à des agents LLM basés sur des rôles une procédure opératoire standard qui transforme une exigence en PRD, conception système, tâches et code.",
      'Dépôt canonique github.com/FoundationAgents/MetaGPT — 70 336 étoiles, 8 942 forks au 2026-09-12 ; installation via `pip install --upgrade metagpt`.',
    ]},
    ja: { title: 'MetaGPT レビュー 2026:ソフトウェア会社を模倣するマルチエージェントフレームワーク', bullets: [
      'MetaGPTは、ソフトウェア会社を模倣する無料のオープンソース(MITライセンス)Pythonマルチエージェントフレームワーク。',
      '役割ベースのLLMエージェントに、一行の要件をPRD・システム設計・タスク分割・コードへ変換するStandard Operating Procedureを割り当てる。',
      '正規リポジトリ github.com/FoundationAgents/MetaGPT——2026-09-12時点でスター70,336、フォーク8,942。`pip install --upgrade metagpt`でインストール。',
    ]},
    zh: { title: 'MetaGPT评测2026:模拟软件公司的多智能体框架', bullets: [
      'MetaGPT是一个免费、开源(MIT许可证)的Python多智能体框架,模拟一家软件公司。',
      '把基于角色的LLM智能体纳入一套标准操作流程,将一行需求转化为PRD、系统设计、任务拆分和代码。',
      '规范仓库 github.com/FoundationAgents/MetaGPT——截至2026-09-12获得70,336星、8,942分叉;通过`pip install --upgrade metagpt`安装。',
    ]},
    es: { title: 'Reseña de MetaGPT 2026: el framework multiagente que simula una empresa de software', bullets: [
      'MetaGPT es un framework Python multiagente gratuito y de código abierto (licencia MIT) que simula una empresa de software.',
      'Asigna a agentes LLM basados en roles un Procedimiento Operativo Estándar que convierte un requisito en un PRD, diseño de sistema, tareas y código.',
      'Repositorio canónico github.com/FoundationAgents/MetaGPT — 70.336 estrellas, 8.942 forks a fecha de 2026-09-12; instalación vía `pip install --upgrade metagpt`.',
    ]},
    pt: { title: 'Análise do MetaGPT 2026: o framework multiagente que simula uma empresa de software', bullets: [
      'O MetaGPT é um framework Python multiagente gratuito e de código aberto (licença MIT) que simula uma empresa de software.',
      'Atribui a agentes LLM baseados em papéis um Procedimento Operacional Padrão que transforma um requisito em PRD, design de sistema, tarefas e código.',
      'Repositório canônico github.com/FoundationAgents/MetaGPT — 70.336 estrelas, 8.942 forks em 2026-09-12; instalação via `pip install --upgrade metagpt`.',
    ]},
    ar: { title: 'مراجعة MetaGPT 2026: إطار العمل متعدد العملاء الذي يحاكي شركة برمجيات', bullets: [
      'MetaGPT إطار عمل Python مجاني ومفتوح المصدر (رخصة MIT) متعدد العملاء يحاكي شركة برمجيات.',
      'يُسند إلى عملاء نماذج لغوية قائمين على الأدوار إجراء تشغيل موحّد يحوّل متطلبًا من سطر واحد إلى وثيقة متطلبات وتصميم نظام وتقسيم مهام وكود.',
      'المستودع الرسمي github.com/FoundationAgents/MetaGPT — 70,336 نجمة و8,942 تفريعة حتى 2026-09-12؛ التثبيت عبر `pip install --upgrade metagpt`.',
    ]},
    ko: { title: 'MetaGPT 리뷰 2026: 소프트웨어 회사를 모방하는 멀티에이전트 프레임워크', bullets: [
      'MetaGPT는 소프트웨어 회사를 모방하는 무료 오픈소스(MIT 라이선스) Python 멀티에이전트 프레임워크입니다.',
      '역할 기반 LLM 에이전트에 표준 운영 절차를 할당해 한 줄짜리 요구사항을 PRD, 시스템 설계, 작업 분해, 코드로 변환합니다.',
      '표준 저장소 github.com/FoundationAgents/MetaGPT — 2026-09-12 기준 스타 70,336개, 포크 8,942개; `pip install --upgrade metagpt`로 설치.',
    ]},
  },
};

async function generate(basename, lang, spec) {
  const res = await fetch(`${BASE}/api/hero-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, title: spec.title, subtitle: '', bullets: spec.bullets, footer: FOOTER[lang] }),
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
