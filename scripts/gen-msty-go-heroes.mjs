#!/usr/bin/env node
// One-off hero generator for msty-go-review-2026 (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3414';

const SPECS = {
  en: {
    title: 'Msty Go Review 2026: Msty\'s Local-First AI Agent',
    subtitle: 'Msty Go (msty.ai/go) is a task-automation app from the makers of Msty, the desktop chat client. Where Msty is a chat interface for talking to local or cloud models, Msty Go is a separate, newer product built to run multi-step tasks with autonomy — connecting to your own folders and tools, working through a goal, and handing back structured results for you to review.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Msty Go Review 2026: Der lokal-first KI-Agent von Msty',
    subtitle: 'Msty Go (msty.ai/go) ist eine App zur Aufgabenautomatisierung von den Machern von Msty, dem Desktop-Chat-Client. Während Msty eine Chat-Oberfläche für lokale oder Cloud-Modelle ist, ist Msty Go ein separates, neueres Produkt, das mehrstufige Aufgaben mit Autonomie ausführt — es verbindet sich mit Ihren eigenen Ordnern und Tools, arbeitet auf ein Ziel hin und liefert strukturierte Ergebnisse zur Überprüfung.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Msty Go Review 2026 : l\'agent IA local-first de Msty',
    subtitle: 'Msty Go (msty.ai/go) est une application d\'automatisation de tâches des créateurs de Msty, le client de chat de bureau. Là où Msty est une interface de chat pour dialoguer avec des modèles locaux ou cloud, Msty Go est un produit distinct, plus récent, conçu pour exécuter des tâches multi-étapes avec autonomie — en se connectant à vos propres dossiers et outils, en avançant vers un objectif, et en restituant des résultats structurés à vérifier.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Msty Goレビュー2026：MstyのローカルファーストAIエージェント',
    subtitle: 'Msty Go（msty.ai/go）は、デスクトップチャットクライアントMstyの開発元によるタスク自動化アプリです。Mstyがローカルまたはクラウドモデルと対話するためのチャットインターフェースであるのに対し、Msty Goは自律的にマルチステップのタスクを実行するために作られた、別の新しい製品です。自分のフォルダやツールに接続し、目標に向かって作業を進め、確認できる構造化された結果を返します。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Msty Go评测2026：Msty的本地优先AI代理',
    subtitle: 'Msty Go（msty.ai/go）是Msty（桌面聊天客户端）开发商推出的任务自动化应用。Msty是与本地或云端模型对话的聊天界面，而Msty Go是一款独立的新产品，用于自主执行多步骤任务——连接你自己的文件夹和工具，朝目标推进工作，并返回结构化结果供你审查。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Msty Go Review 2026: el agente de IA local-first de Msty',
    subtitle: 'Msty Go (msty.ai/go) es una aplicación de automatización de tareas de los creadores de Msty, el cliente de chat de escritorio. Mientras que Msty es una interfaz de chat para hablar con modelos locales o en la nube, Msty Go es un producto separado y más reciente, creado para ejecutar tareas de varios pasos con autonomía: se conecta a tus propias carpetas y herramientas, avanza hacia un objetivo y te devuelve resultados estructurados para que los revises.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Msty Go Review 2026: o agente de IA local-first da Msty',
    subtitle: 'O Msty Go (msty.ai/go) é um app de automação de tarefas dos criadores do Msty, o cliente de chat para desktop. Enquanto o Msty é uma interface de chat para conversar com modelos locais ou na nuvem, o Msty Go é um produto separado e mais recente, criado para executar tarefas de várias etapas com autonomia — conectando-se às suas próprias pastas e ferramentas, avançando em direção a um objetivo e devolvendo resultados estruturados para você revisar.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Msty Go لعام 2026: وكيل Msty الذكي المحلي أولًا',
    subtitle: 'تطبيق Msty Go (msty.ai/go) هو تطبيق لأتمتة المهام من صانعي Msty، عميل المحادثة لسطح المكتب. بينما يُعد Msty واجهة محادثة للتواصل مع نماذج محلية أو سحابية، فإن Msty Go منتج منفصل وأحدث، صُمم لتنفيذ مهام متعددة الخطوات بشكل مستقل — يتصل بمجلداتك وأدواتك الخاصة، ويعمل نحو هدف محدد، ويعيد نتائج منظمة لمراجعتها.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Msty Go 리뷰 2026: Msty의 로컬 우선 AI 에이전트',
    subtitle: 'Msty Go(msty.ai/go)는 데스크톱 채팅 클라이언트인 Msty 제작사가 내놓은 작업 자동화 앱입니다. Msty가 로컬 또는 클라우드 모델과 대화하기 위한 채팅 인터페이스라면, Msty Go는 자율적으로 다단계 작업을 수행하도록 만들어진 별도의 최신 제품입니다. 사용자 본인의 폴더와 도구에 연결해 목표를 향해 작업을 진행하고, 검토할 수 있는 구조화된 결과를 반환합니다.',
    footer: 'PromptQuorum 가이드',
  },
};

const OUT_DIR = 'public/images';
const SLUG = 'msty-go-review-2026';

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
    const outPath = `${OUT_DIR}/${SLUG}-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
