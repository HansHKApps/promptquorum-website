#!/usr/bin/env node
// One-off hero generator for quivr-self-hosted-knowledge-assistant-review (all 9 locales).
const BASE = 'http://localhost:3410';

const SPECS = {
  en: {
    title: 'Quivr Review 2026: Is the Open-Source "Second Brain" Still Alive?',
    subtitle: 'Most descriptions of Quivr online still show a self-hosted chat interface for "talking to your files." That product is not in the current repository — Quivr is now a Python library, and its GitHub main branch has had no commits since June 19, 2025.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Quivr Test 2026: Python-Bibliothek statt Self-Hosted-Chat-App',
    subtitle: 'Viele Beschreibungen von Quivr im Netz zeigen noch eine selbst gehostete Chat-Oberfläche zum "Chatten mit den eigenen Dateien". Dieses Produkt existiert im aktuellen Repository nicht mehr — Quivr ist heute eine Python-Bibliothek, und der GitHub-Hauptzweig hat seit dem 19. Juni 2025 keinen Commit mehr erhalten.',
    footer: 'PromptQuorum-Leitfaden',
  },
  fr: {
    title: 'Quivr en 2026 : une bibliothèque Python, plus une appli à héberger',
    subtitle: 'La plupart des descriptions de Quivr en ligne montrent encore une interface de chat auto-hébergée pour « discuter avec ses fichiers ». Ce produit n\'existe plus dans le dépôt actuel — Quivr est aujourd\'hui une bibliothèque Python, et sa branche principale GitHub n\'a reçu aucun commit depuis le 19 juin 2025.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Quivr（quivr-core）2026年版：Apache 2.0のPython製RAGライブラリ',
    subtitle: 'ネット上のQuivr紹介記事の多くは、いまだに「ファイルとチャットできる」セルフホスト型のチャット画面を示しています。しかし現在のリポジトリにその製品はありません。QuivrはPythonライブラリとなっており、GitHubのmainブランチは2025年6月19日以降コミットがありません。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Quivr 2026评测：主分支自2025年6月起停更',
    subtitle: '网上多数关于 Quivr 的介绍仍展示一个可自托管的聊天界面,用来"和你的文件对话"。当前代码仓库中已不存在这个产品——Quivr 现在是一个 Python 库,其 GitHub 主分支自 2025 年 6 月 19 日起没有任何提交。',
    footer: 'PromptQuorum 指南',
  },
  es: {
    title: 'Quivr en 2026: una librería Python, ya no una app para autoalojar',
    subtitle: 'La mayoría de las descripciones de Quivr en internet aún muestran una interfaz de chat autoalojada para "hablar con tus archivos". Ese producto ya no está en el repositorio actual: Quivr es hoy una librería Python, y su rama principal en GitHub no recibe commits desde el 19 de junio de 2025.',
    footer: 'Guía de PromptQuorum',
  },
  pt: {
    title: 'Quivr em 2026: uma biblioteca Python, não mais um app self-hosted',
    subtitle: 'A maioria das descrições do Quivr na internet ainda mostra uma interface de chat auto-hospedada para "conversar com seus arquivos". Esse produto não existe mais no repositório atual — o Quivr hoje é uma biblioteca Python, e sua branch principal no GitHub não recebe commits desde 19 de junho de 2025.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'مراجعة Quivr 2026: مكتبة بايثون بدل تطبيق دردشة مُستضاف ذاتيًا',
    subtitle: 'لا تزال معظم الأوصاف المتاحة لـ Quivr على الإنترنت تُظهر واجهة دردشة مُستضافة ذاتيًا "للتحدث مع ملفاتك". هذا المنتج لم يعد موجودًا في المستودع الحالي — أصبح Quivr اليوم مكتبة بايثون، ولم يتلقَّ الفرع الرئيسي على GitHub أي التزام منذ 19 يونيو 2025.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Quivr 2026 리뷰: 셀프 호스팅 앱이 아닌 Python RAG 라이브러리',
    subtitle: '인터넷에 있는 Quivr 소개 대부분은 여전히 "파일과 대화하는" 셀프 호스팅 채팅 인터페이스를 보여준다. 그 제품은 현재 저장소에 존재하지 않는다 — Quivr는 이제 Python 라이브러리이며, GitHub 메인 브랜치는 2025년 6월 19일 이후 커밋이 없다.',
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
    const outPath = `${OUT_DIR}/quivr-self-hosted-knowledge-assistant-review-hero-${lang}.png`;
    await import('fs/promises').then((fs) => fs.writeFile(outPath, buf));
    console.log(`[${lang}] OK -> ${outPath} (${buf.length} bytes)`);
  }
}

main();
