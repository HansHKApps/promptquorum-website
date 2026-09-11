#!/usr/bin/env node
const BASE = 'http://localhost:3418';
const SLUG = 'koboldcpp-review';
const SPECS = {
  en: {
    title: 'KoboldCpp Review 2026: One File, No Install, Built for Roleplay',
    subtitle: 'KoboldCpp is a single executable file that runs GGUF language models with no installer, no Python environment, and no Docker — and it ships with a story-writing and roleplay-focused editor built in, rather than a plain chat box.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'KoboldCpp Test 2026: Eine Datei, keine Installation, für Rollenspiel gebaut',
    subtitle: 'KoboldCpp ist eine einzelne ausführbare Datei, die GGUF-Sprachmodelle ohne Installer, ohne Python-Umgebung und ohne Docker ausführt — und bringt einen auf Story-Schreiben und Rollenspiel ausgelegten Editor gleich mit, statt nur einer schlichten Chatbox.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'KoboldCpp 2026 : un seul fichier, aucune installation, pensé pour le jeu de rôle',
    subtitle: 'KoboldCpp est un exécutable unique qui fait tourner des modèles GGUF sans installateur, sans environnement Python et sans Docker — avec un éditeur d\'écriture narrative et de jeu de rôle intégré, plutôt qu\'une simple fenêtre de chat.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'KoboldCpp レビュー 2026:単一ファイル、インストール不要、ロールプレイ特化',
    subtitle: 'KoboldCppはインストーラーもPython環境もDockerも不要で、GGUF形式のモデルを実行できる単一の実行ファイルです。単なるチャット画面ではなく、小説執筆・ロールプレイ向けのエディタを標準搭載しています。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'KoboldCpp 评测 2026:单文件、免安装,专为角色扮演打造',
    subtitle: 'KoboldCpp 是一个单一可执行文件,无需安装程序、Python 环境或 Docker 即可运行 GGUF 格式模型,并内置了面向故事写作和角色扮演的编辑器,而非一个简单的聊天框。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'KoboldCpp 2026: un solo archivo, sin instalación, pensado para el rol',
    subtitle: 'KoboldCpp es un único ejecutable que corre modelos GGUF sin instalador, sin entorno Python y sin Docker, e incluye un editor pensado para escritura narrativa y rol en lugar de un simple cuadro de chat. Está construido sobre llama.cpp, ofrece aceleración CUDA o Vulkan, y también incluye generación de imágenes y transcripción de voz integradas.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'KoboldCpp 2026: um arquivo só, sem instalação, feito para roleplay',
    subtitle: 'O KoboldCpp é um único executável que roda modelos GGUF sem instalador, sem ambiente Python e sem Docker — e já vem com um editor voltado para escrita de histórias e roleplay, em vez de uma simples caixa de chat. É construído sobre o llama.cpp, funciona com aceleração CUDA ou Vulkan e também inclui geração de imagens e transcrição de voz integradas.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة KoboldCpp 2026: ملف واحد، بلا تثبيت، مصمم للعب الأدوار',
    subtitle: 'KoboldCpp هو ملف تنفيذي واحد يشغّل نماذج بصيغة GGUF دون الحاجة إلى مثبّت أو بيئة Python أو Docker، ويأتي مزودًا بمحرر مخصص لكتابة القصص ولعب الأدوار بدلاً من مجرد نافذة محادثة بسيطة. وهو مبني على llama.cpp، ويدعم التسريع عبر CUDA أو Vulkan، ويتضمن أيضًا توليد الصور وتحويل الصوت إلى نص.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'KoboldCpp 리뷰 2026: 파일 하나, 설치 불필요, 롤플레이 특화',
    subtitle: 'KoboldCpp는 설치 프로그램이나 Python 환경, Docker 없이 GGUF 모델을 실행하는 단일 실행 파일이며, 단순한 채팅창이 아니라 소설 창작과 롤플레이에 특화된 편집기를 기본으로 제공합니다.',
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
