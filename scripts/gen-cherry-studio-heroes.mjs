#!/usr/bin/env node
// One-off hero generator for cherry-studio-ai-desktop-client-2026 (all 9 locales).
const BASE = process.env.HERO_BASE || 'http://localhost:3000';

const SPECS = {
  en: {
    title: 'Cherry Studio in 2026: The Free Multi-Provider AI Desktop Client',
    subtitle: 'Cherry Studio is a free, open-source desktop application that connects to dozens of AI providers and local models from one interface, instead of locking you into a single vendor. It runs on Windows, macOS, and Linux, and is licensed under AGPL 3.0.',
    footer: 'PromptQuorum Guide',
  },
  de: {
    title: 'Cherry Studio 2026: Der kostenlose Multi-Provider-KI-Desktop-Client',
    subtitle: 'Cherry Studio ist eine kostenlose Open-Source-Desktop-Anwendung, die dutzende KI-Anbieter und lokale Modelle in einer einzigen Oberfläche verbindet, statt Sie an einen Anbieter zu binden. Sie läuft unter Windows, macOS und Linux und steht unter der AGPL-3.0-Lizenz.',
    footer: 'PromptQuorum-Leitfaden',
  },
  es: {
    title: 'Cherry Studio en 2026: el cliente de escritorio de IA multi-proveedor gratuito',
    subtitle: 'Cherry Studio es una aplicación de escritorio gratuita y de código abierto que conecta con decenas de proveedores de IA y modelos locales desde una sola interfaz, en lugar de atarte a un solo proveedor. Funciona en Windows, macOS y Linux, y tiene licencia AGPL 3.0.',
    footer: 'Guía de PromptQuorum',
  },
  fr: {
    title: 'Cherry Studio en 2026 : l\'IA bureau multi-fournisseurs gratuite',
    subtitle: 'Cherry Studio est une application de bureau gratuite et open source qui connecte des dizaines de fournisseurs d\'IA et de modèles locaux depuis une seule interface, au lieu de vous enfermer chez un seul fournisseur. Elle fonctionne sous Windows, macOS et Linux, sous licence AGPL 3.0.',
    footer: 'Guide PromptQuorum',
  },
  ja: {
    title: 'Cherry Studio 2026:無料のマルチプロバイダーAIデスクトップクライアント',
    subtitle: 'Cherry Studioは、単一のAIプロバイダーに縛られることなく、数十のAIプロバイダーとローカルモデルを1つのインターフェースから利用できる、無料のオープンソースデスクトップアプリです。Windows、macOS、Linuxで動作し、AGPL 3.0ライセンスの下で公開されています。',
    footer: 'PromptQuorumガイド',
  },
  zh: {
    title: 'Cherry Studio 2026:免费的多提供商AI桌面客户端',
    subtitle: 'Cherry Studio是一款免费开源的桌面应用,可以在一个界面中连接数十家AI提供商和本地模型,而不必绑定单一厂商。它支持Windows、macOS和Linux,采用AGPL 3.0许可证。',
    footer: 'PromptQuorum 指南',
  },
  pt: {
    title: 'Cherry Studio em 2026: o cliente de desktop de IA multi-fornecedor gratuito',
    subtitle: 'Cherry Studio é um aplicativo de desktop gratuito e de código aberto que conecta dezenas de provedores de IA e modelos locais em uma única interface, em vez de prender você a um único fornecedor. Funciona no Windows, macOS e Linux, sob licença AGPL 3.0.',
    footer: 'Guia PromptQuorum',
  },
  ar: {
    title: 'Cherry Studio في 2026: عميل سطح مكتب مجاني للذكاء الاصطناعي متعدد المزودين',
    subtitle: 'Cherry Studio تطبيق سطح مكتب مجاني ومفتوح المصدر يربط عشرات مزودي الذكاء الاصطناعي والنماذج المحلية من واجهة واحدة، بدلاً من حصرك في مزود واحد. يعمل على Windows وmacOS وLinux، ومرخّص بموجب AGPL 3.0. يضيف أيضاً قاعدة معرفة مدمجة ودعم بروتوكول MCP للأدوات الخارجية.',
    footer: 'دليل PromptQuorum',
  },
  ko: {
    title: 'Cherry Studio 2026: 무료 멀티 프로바이더 AI 데스크톱 클라이언트',
    subtitle: 'Cherry Studio는 하나의 AI 제공업체에 종속되지 않고, 수십 개의 AI 제공업체와 로컬 모델을 하나의 인터페이스에서 연결하는 무료 오픈소스 데스크톱 애플리케이션입니다. Windows, macOS, Linux에서 실행되며 AGPL 3.0 라이선스로 배포됩니다.',
    footer: 'PromptQuorum 가이드',
  },
};

const OUT_DIR = 'public/images';
const SLUG = 'cherry-studio-ai-desktop-client-2026';

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
