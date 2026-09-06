#!/usr/bin/env node
const BASE = 'http://localhost:3411';
const SPECS = {
  'enchanted-review': {
    en: { title: "Enchanted Review 2026: Native macOS/iOS Ollama Client", subtitle: '', bullets: ["Enchanted only talks to a self-hosted Ollama server — it has no built-in inference engine and does not connect to OpenAI, Anthropic, or any other cloud provider", "It is fully open source under the Apache 2.0 license, with the Swift source code public on GitHub", "It runs natively on macOS, iOS, and visionOS (Apple Vision Pro) — there is no Windows, Linux, or Android build"], footer: "PromptQuorum Guide" },
    de: { title: "Enchanted Review 2026: Nativer macOS/iOS-Client für Ollama", subtitle: '', bullets: ["Enchanted spricht ausschließlich mit einem selbst gehosteten Ollama-Server — es hat keine eigene Inferenz-Engine und verbindet sich nicht mit OpenAI, Anthropic oder anderen Cloud-Anbietern", "Es ist vollständig quelloffen unter der Apache-2.0-Lizenz, der Swift-Quellcode ist öffentlich auf GitHub", "Es läuft nativ unter macOS, iOS und visionOS (Apple Vision Pro) — es gibt keinen Windows-, Linux- oder Android-Build"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Enchanted Review 2026 : client natif macOS/iOS pour Ollama", subtitle: '', bullets: ["Enchanted ne parle qu'à un serveur Ollama auto-hébergé — elle n'a pas de moteur d'inférence intégré et ne se connecte ni à OpenAI, ni à Anthropic, ni à aucun autre fournisseur cloud", "Elle est entièrement open source sous licence Apache 2.0, avec le code source Swift public sur GitHub", "Elle fonctionne nativement sous macOS, iOS et visionOS (Apple Vision Pro) — aucune version Windows, Linux ou Android"], footer: "Guide PromptQuorum" },
    es: { title: "Enchanted Review 2026: cliente nativo de Ollama para macOS/iOS", subtitle: '', bullets: ["Enchanted solo habla con un servidor Ollama autoalojado — no tiene motor de inferencia propio ni se conecta a OpenAI, Anthropic ni ningún otro proveedor en la nube", "Es completamente de código abierto bajo licencia Apache 2.0, con el código fuente en Swift público en GitHub", "Funciona de forma nativa en macOS, iOS y visionOS (Apple Vision Pro) — no hay versión para Windows, Linux ni Android"], footer: "Guía de PromptQuorum" },
    ja: { title: "Enchanted レビュー 2026：macOS/iOS向けOllamaネイティブクライアント", subtitle: '', bullets: ["Enchantedは自前でホストするOllamaサーバーとのみ通信します — 独自の推論エンジンはなく、OpenAIやAnthropicなど他のクラウドプロバイダーにも接続しません", "Apache 2.0ライセンスの完全なオープンソースで、SwiftのソースコードはGitHubで公開されています", "macOS、iOS、visionOS（Apple Vision Pro）でネイティブに動作します — Windows、Linux、Android版はありません"], footer: "PromptQuorumガイド" },
    zh: { title: "Enchanted 评测 2026：macOS/iOS 原生 Ollama 客户端", subtitle: '', bullets: ["Enchanted 只与自托管的 Ollama 服务器通信——它没有内置推理引擎，也不连接 OpenAI、Anthropic 或任何其他云端提供商", "它在 Apache 2.0 许可证下完全开源，Swift 源代码在 GitHub 上公开", "它原生运行于 macOS、iOS 和 visionOS（Apple Vision Pro）——没有 Windows、Linux 或 Android 版本"], footer: "PromptQuorum 指南" },
    pt: { title: "Enchanted Review 2026: cliente nativo de Ollama para macOS/iOS", subtitle: '', bullets: ["O Enchanted só conversa com um servidor Ollama auto-hospedado — ele não tem motor de inferência próprio e não se conecta a OpenAI, Anthropic ou qualquer outro provedor de nuvem", "É totalmente de código aberto sob a licença Apache 2.0, com o código-fonte em Swift público no GitHub", "Roda nativamente em macOS, iOS e visionOS (Apple Vision Pro) — não há versão para Windows, Linux ou Android"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة Enchanted 2026: عميل Ollama أصلي لـ macOS وiOS", subtitle: '', bullets: ["يتحدث Enchanted فقط مع خادم Ollama تستضيفه بنفسك — لا يملك محرك استدلال خاصاً به ولا يتصل بـ OpenAI أو Anthropic أو أي مزوّد سحابي آخر", "مفتوح المصدر بالكامل بترخيص Apache 2.0، والشيفرة المصدرية بلغة Swift متاحة للعموم على GitHub", "يعمل بشكل أصلي على macOS وiOS وvisionOS (‏Apple Vision Pro)‏ — لا يوجد إصدار لـ Windows أو Linux أو Android"], footer: "دليل PromptQuorum" },
    ko: { title: "Enchanted 리뷰 2026: macOS/iOS용 네이티브 Ollama 클라이언트", subtitle: '', bullets: ["Enchanted는 직접 호스팅하는 Ollama 서버와만 통신합니다 — 자체 추론 엔진이 없으며 OpenAI, Anthropic 또는 다른 어떤 클라우드 제공업체에도 연결되지 않습니다", "Apache 2.0 라이선스로 완전히 오픈소스이며, Swift 소스 코드가 GitHub에 공개되어 있습니다", "macOS, iOS, visionOS(Apple Vision Pro)에서 네이티브로 실행됩니다 — Windows, Linux, Android 버전은 없습니다"], footer: "PromptQuorum 가이드" },
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
