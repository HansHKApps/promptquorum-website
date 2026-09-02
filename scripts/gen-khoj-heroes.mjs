#!/usr/bin/env node
const BASE = 'http://localhost:3409';
const SLUG = 'khoj-ai-second-brain-review';
const SPECS = {
  en: {
    title: 'Khoj Review 2026: Self-Hosted AI Second Brain, No Cloud Left',
    subtitle: 'Open-source (AGPL 3.0) AI second brain that indexes notes, PDFs, and your Notion workspace so you can chat with and search them. Syncs Obsidian via a dedicated plugin. Khoj Cloud was sunset on April 15, 2026 — self-hosting via Docker or pip is now the only supported way to run it.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Khoj Test 2026: Selbst gehostetes KI-Zweitgehirn, keine Cloud mehr',
    subtitle: 'Quelloffenes (AGPL 3.0) KI-Zweitgehirn, das Notizen, PDFs und den Notion-Workspace indexiert, damit Sie damit chatten und darin suchen können. Synchronisiert Obsidian über ein Plugin. Khoj Cloud wurde am 15. April 2026 eingestellt — Self-Hosting über Docker oder pip ist jetzt der einzige Weg.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Khoj en 2026 : le second cerveau IA autohébergé, sans option cloud',
    subtitle: 'Second cerveau IA open source (AGPL 3.0) qui indexe notes, PDF et espace Notion pour y discuter et y chercher. Synchronise Obsidian via un plugin dédié. Khoj Cloud a fermé le 15 avril 2026 — l\'autohébergement via Docker ou pip est désormais le seul moyen d\'utiliser Khoj.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Khoj レビュー 2026:セルフホスト型AIセカンドブレイン、クラウド版は終了',
    subtitle: 'ノート、PDF、Notionワークスペースをインデックス化してチャット・検索できるオープンソース(AGPL 3.0)のAIセカンドブレイン。Obsidianはプラグインで同期。Khoj Cloudは2026年4月15日に終了し、Dockerまたはpipによるセルフホストが唯一の方法になった。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Khoj 2026评测:自托管AI第二大脑,云端版已停止服务',
    subtitle: '对笔记、PDF和Notion工作区建立索引,可用于聊天和搜索的开源(AGPL 3.0)AI第二大脑。Obsidian通过插件同步。Khoj Cloud已于2026年4月15日停止服务——通过Docker或pip自托管现已成为唯一方式。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Khoj en 2026: el segundo cerebro de IA autoalojado, sin nube',
    subtitle: 'Segundo cerebro de IA de código abierto (AGPL 3.0) que indexa notas, PDF y tu espacio de Notion para chatear y buscar en ellos. Sincroniza Obsidian mediante un plugin. Khoj Cloud cerró el 15 de abril de 2026 — autoalojar vía Docker o pip es ahora la única forma de usar Khoj.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Khoj em 2026: o segundo cérebro de IA autogerenciado, sem nuvem',
    subtitle: 'Segundo cérebro de IA open source (AGPL 3.0) que indexa notas, PDFs e seu espaço do Notion para conversar e buscar neles. Sincroniza o Obsidian por plugin. O Khoj Cloud foi encerrado em 15 de abril de 2026 — self-hosting via Docker ou pip é agora a única forma de usar o Khoj.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Khoj 2026: دماغ ثانٍ بالذكاء الاصطناعي مستضاف ذاتيًا، بلا سحابة',
    subtitle: 'دماغ ثانٍ بالذكاء الاصطناعي مفتوح المصدر (AGPL 3.0) يفهرس الملاحظات وملفات PDF ومساحة عمل Notion للدردشة والبحث فيها. يزامن Obsidian عبر إضافة. توقفت Khoj Cloud في 15 أبريل 2026 — الاستضافة الذاتية عبر Docker أو pip هي الطريقة الوحيدة الآن لاستخدام Khoj.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Khoj 2026 리뷰: 셀프 호스팅 AI 세컨드 브레인, 클라우드는 종료',
    subtitle: '노트, PDF, Notion 워크스페이스를 인덱싱해 채팅하고 검색할 수 있는 오픈소스(AGPL 3.0) AI 세컨드 브레인. Obsidian은 플러그인으로 동기화됩니다. Khoj Cloud는 2026년 4월 15일 종료되었고, 이제 Docker나 pip를 통한 셀프 호스팅만 지원됩니다.',
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
