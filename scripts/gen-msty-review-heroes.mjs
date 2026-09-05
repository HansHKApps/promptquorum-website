#!/usr/bin/env node
const BASE = 'http://localhost:3411';
const SPECS = {
  'msty-review': {
    en: { title: "Msty Review 2026: Local + Cloud Chat in One Desktop App", subtitle: '', bullets: ["Msty runs local models (via Ollama, LM Studio, llama.cpp) and cloud models (via provider APIs) in one desktop app", "The free tier ($0, no time limit) includes chat, Split Chats side-by-side comparison, and Knowledge Stacks document/folder search", "A paid Aurum tier ($149/user/year or $349/user one-time) adds web search (\"Real-Time Data\"), Azure and Bedrock provider access, and other power-user features"], footer: "PromptQuorum Guide" },
    de: { title: "Msty Review 2026: Lokaler + Cloud-Chat in einer Desktop-App", subtitle: '', bullets: ["Msty führt lokale Modelle (über Ollama, LM Studio, llama.cpp) und Cloud-Modelle (über Anbieter-APIs) in einer Desktop-App zusammen", "Die kostenlose Stufe ($0, ohne zeitliche Begrenzung) umfasst Chat, den Split-Chats-Vergleich nebeneinander und die Knowledge-Stacks-Dokumenten-/Ordnersuche", "Eine kostenpflichtige Aurum-Stufe ($149/Nutzer/Jahr oder $349/Nutzer einmalig) fügt Websuche (\"Real-Time Data\"), Zugriff auf Azure und Bedrock als Anbieter sowie weitere Power-User-Funktionen hinzu"], footer: "PromptQuorum-Leitfaden" },
    fr: { title: "Msty Review 2026 : chat local et cloud dans une seule application de bureau", subtitle: '', bullets: ["Msty exécute des modèles locaux (via Ollama, LM Studio, llama.cpp) et des modèles cloud (via les API des fournisseurs) dans une seule application de bureau", "Le forfait gratuit (0 $, sans limite de temps) inclut le chat, la comparaison côte à côte Split Chats et la recherche de documents/dossiers Knowledge Stacks", "Un forfait payant Aurum (149 $/utilisateur/an ou 349 $/utilisateur en paiement unique) ajoute la recherche web (« Real-Time Data »), l'accès aux fournisseurs Azure et Bedrock, et d'autres fonctionnalités avancées"], footer: "Guide PromptQuorum" },
    es: { title: "Msty Review 2026: chat local y en la nube en una sola app de escritorio", subtitle: '', bullets: ["Msty ejecuta modelos locales (vía Ollama, LM Studio, llama.cpp) y modelos en la nube (vía APIs de proveedores) en una sola app de escritorio", "El plan gratuito ($0, sin límite de tiempo) incluye chat, comparación lado a lado con Split Chats y búsqueda de documentos/carpetas con Knowledge Stacks", "Un plan de pago Aurum ($149/usuario/año o $349/usuario pago único) añade búsqueda web (\"Real-Time Data\"), acceso a proveedores Azure y Bedrock, y otras funciones para usuarios avanzados"], footer: "Guía de PromptQuorum" },
    ja: { title: "Mstyレビュー2026：1つのデスクトップアプリでローカル+クラウドチャット", subtitle: '', bullets: ["Mstyはローカルモデル（Ollama、LM Studio、llama.cpp経由）とクラウドモデル（プロバイダーAPI経由）を1つのデスクトップアプリで動かします", "無料プラン（$0、期限なし）には、チャット、Split Chatsによる並べての比較、Knowledge Stacksによるドキュメント/フォルダ検索が含まれます", "有料のAurumプラン（ユーザーあたり年額$149、または買い切り$349）では、ウェブ検索（「Real-Time Data」）、Azure・Bedrockプロバイダーへのアクセス、その他のパワーユーザー向け機能が追加されます"], footer: "PromptQuorumガイド" },
    zh: { title: "Msty评测2026：本地+云端聊天合一的桌面应用", subtitle: '', bullets: ["Msty在一个桌面应用中运行本地模型（通过Ollama、LM Studio、llama.cpp）和云端模型（通过厂商API）", "免费套餐（$0,无时间限制）包括聊天、Split Chats并排对比和Knowledge Stacks文档/文件夹搜索", "付费的Aurum套餐（$149/用户/年或一次性$349/用户）新增网络搜索（\"Real-Time Data\"）、Azure和Bedrock厂商接入及其他高级功能"], footer: "PromptQuorum 指南" },
    pt: { title: "Msty Review 2026: chat local + na nuvem em um só app de desktop", subtitle: '', bullets: ["O Msty roda modelos locais (via Ollama, LM Studio, llama.cpp) e modelos na nuvem (via APIs de provedores) em um único app de desktop", "O plano gratuito ($0, sem limite de tempo) inclui chat, comparação lado a lado com Split Chats e busca de documentos/pastas com Knowledge Stacks", "Um plano pago Aurum ($149/usuário/ano ou $349/usuário pagamento único) adiciona busca na web (\"Real-Time Data\"), acesso aos provedores Azure e Bedrock, e outros recursos para usuários avançados"], footer: "Guia PromptQuorum" },
    ar: { title: "مراجعة Msty لعام 2026: محادثة محلية وسحابية في تطبيق سطح مكتب واحد", subtitle: '', bullets: ["يشغّل Msty نماذج محلية (عبر Ollama وLM Studio وllama.cpp) ونماذج سحابية (عبر واجهات برمجة تطبيقات المزودين) في تطبيق سطح مكتب واحد", "تشمل الفئة المجانية ($0، بلا حد زمني) المحادثة ومقارنة Split Chats جنبًا إلى جنب والبحث في المستندات/المجلدات عبر Knowledge Stacks", "تضيف فئة Aurum المدفوعة ($149 لكل مستخدم سنويًا أو $349 لكل مستخدم دفعة واحدة) البحث على الويب (\"Real-Time Data\") والوصول إلى مزودَي Azure وBedrock وميزات أخرى للمستخدمين المتقدمين"], footer: "دليل PromptQuorum" },
    ko: { title: "Msty 리뷰 2026: 하나의 데스크톱 앱에서 로컬 + 클라우드 채팅", subtitle: '', bullets: ["Msty는 하나의 데스크톱 앱에서 로컬 모델(Ollama, LM Studio, llama.cpp를 통해)과 클라우드 모델(제공업체 API를 통해)을 실행합니다", "무료 요금제($0, 기간 제한 없음)에는 채팅, Split Chats 나란히 비교, Knowledge Stacks 문서/폴더 검색이 포함됩니다", "유료 Aurum 요금제(사용자당 $149/년 또는 사용자당 일시불 $349)는 웹 검색(\"Real-Time Data\"), Azure 및 Bedrock 제공업체 접근, 기타 파워 유저 기능을 추가합니다"], footer: "PromptQuorum 가이드" },
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
