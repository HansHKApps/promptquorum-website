// COPY for the promo slots, all 9 locales: headline, one supporting line, button. Marketing voice, but every claim
// matches the live product: Ask Hans recommends one app with reasons and sources; Power Mode builds one report with
// hardware, apps and next steps (export as PDF, Word or Markdown); the directory covers {count} apps and lists
// hardware needs; MCP is read-only and connects with one config entry. No "free", "best", "always" or accuracy claims.
// Brand and tool names (PromptQuorum, Ask Hans, Power Mode, MCP) stay untranslated.
// `{count}` is the directory tool count read at build time (src/generated/promo-facts.json), never hardcoded.
import type { Lang } from '@/hooks/useLang'
import type { PromoTarget } from '@/lib/promo/types'

export interface PromoText {
  headline: string
  /** used when no count is available */
  headlineNoCount?: string
  sub: string
  cta: string
  /** callout variant of MCP: label above the config snippet */
  snippetLabel?: string
}

export const PROMO_COPY: Record<Lang, Record<PromoTarget, PromoText>> = {
  en: {
    directory: { headline: '{count} local AI apps. Find the one that runs on your PC.', headlineNoCount: 'Find the local AI app that runs on your PC.', sub: 'Browse by category and see which apps fit your hardware.', cta: 'Explore the directory' },
    'ask-hans': { headline: 'Stop searching. Just ask Hans.', sub: 'Tell Ask Hans your goal and your computer. Get one app recommendation with the reasons and the sources.', cta: 'Ask Hans now' },
    'power-mode': { headline: 'Your whole local AI setup in one report.', sub: 'Answer a few guided questions. Get hardware, apps and next steps in one document, as PDF, Word or Markdown.', cta: 'Start Power Mode' },
    mcp: { headline: 'Plug PromptQuorum into your own AI.', sub: 'Guides and app data inside your assistant, connected with one line of config.', cta: 'Connect now', snippetLabel: 'Example config (formats vary by client)' },
  },
  de: {
    directory: { headline: '{count} lokale KI-Apps. Finden Sie die, die auf Ihrem PC läuft.', headlineNoCount: 'Finden Sie die lokale KI-App, die auf Ihrem PC läuft.', sub: 'Nach Kategorie stöbern und sehen, welche Apps zu Ihrer Hardware passen.', cta: 'Verzeichnis entdecken' },
    'ask-hans': { headline: 'Schluss mit Suchen. Fragen Sie einfach Hans.', sub: 'Nennen Sie Ask Hans Ihr Ziel und Ihren Computer. Sie erhalten eine App-Empfehlung mit Begründung und Quellen.', cta: 'Jetzt Ask Hans fragen' },
    'power-mode': { headline: 'Ihr komplettes lokales KI-Setup in einem Bericht.', sub: 'Beantworten Sie ein paar geführte Fragen. Hardware, Apps und nächste Schritte landen in einem Dokument, als PDF, Word oder Markdown.', cta: 'Power Mode starten' },
    mcp: { headline: 'Verbinden Sie PromptQuorum mit Ihrer eigenen KI.', sub: 'Ratgeber und App-Daten direkt in Ihrem Assistenten, verbunden mit einer Zeile Konfiguration.', cta: 'Jetzt verbinden', snippetLabel: 'Beispielkonfiguration (Format je nach Client)' },
  },
  fr: {
    directory: { headline: '{count} applications d’IA locale. Trouvez celle qui tourne sur votre PC.', headlineNoCount: 'Trouvez l’application d’IA locale qui tourne sur votre PC.', sub: 'Parcourez par catégorie et voyez quelles applications conviennent à votre matériel.', cta: 'Explorer l’annuaire' },
    'ask-hans': { headline: 'Arrêtez de chercher. Demandez à Hans.', sub: 'Décrivez à Ask Hans votre objectif et votre ordinateur. Recevez une application recommandée, avec les raisons et les sources.', cta: 'Demander à Ask Hans' },
    'power-mode': { headline: 'Toute votre configuration d’IA locale dans un seul rapport.', sub: 'Répondez à quelques questions guidées. Matériel, applications et prochaines étapes dans un document, en PDF, Word ou Markdown.', cta: 'Lancer Power Mode' },
    mcp: { headline: 'Branchez PromptQuorum sur votre propre IA.', sub: 'Guides et données d’applications dans votre assistant, connectés avec une seule ligne de configuration.', cta: 'Connecter maintenant', snippetLabel: 'Exemple de configuration (le format varie selon le client)' },
  },
  es: {
    directory: { headline: '{count} aplicaciones de IA local. Encuentra la que funciona en tu PC.', headlineNoCount: 'Encuentra la aplicación de IA local que funciona en tu PC.', sub: 'Explora por categoría y descubre qué aplicaciones encajan con tu hardware.', cta: 'Explorar el directorio' },
    'ask-hans': { headline: 'Deja de buscar. Pregúntale a Hans.', sub: 'Cuéntale a Ask Hans tu objetivo y tu ordenador. Recibe una aplicación recomendada, con los motivos y las fuentes.', cta: 'Preguntar a Ask Hans' },
    'power-mode': { headline: 'Toda tu configuración de IA local en un solo informe.', sub: 'Responde unas pocas preguntas guiadas. Hardware, aplicaciones y próximos pasos en un documento, en PDF, Word o Markdown.', cta: 'Iniciar Power Mode' },
    mcp: { headline: 'Conecta PromptQuorum a tu propia IA.', sub: 'Guías y datos de aplicaciones dentro de tu asistente, conectados con una sola línea de configuración.', cta: 'Conectar ahora', snippetLabel: 'Configuración de ejemplo (el formato varía según el cliente)' },
  },
  pt: {
    directory: { headline: '{count} aplicativos de IA local. Encontre o que roda no seu PC.', headlineNoCount: 'Encontre o aplicativo de IA local que roda no seu PC.', sub: 'Explore por categoria e veja quais aplicativos combinam com o seu hardware.', cta: 'Explorar o diretório' },
    'ask-hans': { headline: 'Chega de procurar. Pergunte ao Hans.', sub: 'Conte ao Ask Hans o seu objetivo e o seu computador. Receba um aplicativo recomendado, com os motivos e as fontes.', cta: 'Perguntar ao Ask Hans' },
    'power-mode': { headline: 'Toda a sua configuração de IA local em um relatório.', sub: 'Responda a algumas perguntas guiadas. Hardware, aplicativos e próximos passos em um documento, em PDF, Word ou Markdown.', cta: 'Iniciar o Power Mode' },
    mcp: { headline: 'Conecte o PromptQuorum à sua própria IA.', sub: 'Guias e dados de aplicativos dentro do seu assistente, conectados com uma única linha de configuração.', cta: 'Conectar agora', snippetLabel: 'Configuração de exemplo (o formato varia por cliente)' },
  },
  ja: {
    directory: { headline: 'ローカルAIアプリ{count}本。あなたのPCで動く1本が見つかる。', headlineNoCount: 'あなたのPCで動くローカルAIアプリが見つかる。', sub: 'カテゴリ別に探して、お使いのハードウェアに合うアプリを確認できます。', cta: 'ディレクトリを見る' },
    'ask-hans': { headline: '探すのは終わり。Hansに聞くだけ。', sub: '目的とパソコンの環境をAsk Hansに伝えるだけで、理由と出典付きでアプリを1つおすすめします。', cta: 'Ask Hansに聞く' },
    'power-mode': { headline: 'ローカルAI環境のすべてを、1つのレポートに。', sub: 'いくつかの質問に答えるだけで、ハードウェア、アプリ、次のステップが1つの文書に。PDF、Word、Markdownで保存できます。', cta: 'Power Modeを始める' },
    mcp: { headline: 'PromptQuorumを、あなたのAIにつなごう。', sub: 'ガイドとアプリデータを、お使いのアシスタントから。設定は1行で接続できます。', cta: '今すぐ接続', snippetLabel: '設定例（形式はクライアントにより異なります）' },
  },
  zh: {
    directory: { headline: '{count} 款本地 AI 应用，找到能在您电脑上运行的那一款。', headlineNoCount: '找到能在您电脑上运行的本地 AI 应用。', sub: '按类别浏览，查看哪些应用适合您的硬件。', cta: '探索应用目录' },
    'ask-hans': { headline: '别再到处搜索，直接问 Hans。', sub: '告诉 Ask Hans 您的目标和电脑配置，即可获得一款应用推荐，并附上理由和来源。', cta: '立即问 Ask Hans' },
    'power-mode': { headline: '您的整套本地 AI 方案，一份报告搞定。', sub: '回答几个引导问题，硬件、应用和后续步骤汇总成一份文档，可导出为 PDF、Word 或 Markdown。', cta: '开始使用 Power Mode' },
    mcp: { headline: '把 PromptQuorum 接入您自己的 AI。', sub: '指南和应用数据直接用在您的助手里，一行配置即可连接。', cta: '立即连接', snippetLabel: '配置示例（格式因客户端而异）' },
  },
  ko: {
    directory: { headline: '로컬 AI 앱 {count}개. 내 PC에서 돌아가는 앱을 찾아보세요.', headlineNoCount: '내 PC에서 돌아가는 로컬 AI 앱을 찾아보세요.', sub: '카테고리별로 둘러보고 내 하드웨어에 맞는 앱을 확인하세요.', cta: '디렉터리 둘러보기' },
    'ask-hans': { headline: '그만 검색하세요. Hans에게 물어보세요.', sub: '목표와 컴퓨터를 Ask Hans에게 알려 주세요. 이유와 출처를 곁들여 앱 하나를 추천해 드립니다.', cta: 'Ask Hans에게 묻기' },
    'power-mode': { headline: '로컬 AI 환경 전체를 보고서 하나에.', sub: '안내에 따라 몇 가지 질문에 답하면 하드웨어, 앱, 다음 단계가 문서 하나로 정리됩니다. PDF, Word, Markdown으로 저장할 수 있습니다.', cta: 'Power Mode 시작하기' },
    mcp: { headline: 'PromptQuorum을 나만의 AI에 연결하세요.', sub: '가이드와 앱 데이터를 사용 중인 어시스턴트에서 바로, 설정 한 줄로 연결합니다.', cta: '지금 연결하기', snippetLabel: '설정 예시(형식은 클라이언트마다 다름)' },
  },
  ar: {
    directory: { headline: '{count} تطبيقاً للذكاء الاصطناعي المحلي. اعثر على ما يعمل على حاسوبك.', headlineNoCount: 'اعثر على تطبيق الذكاء الاصطناعي المحلي الذي يعمل على حاسوبك.', sub: 'تصفّح حسب الفئة وتعرّف على التطبيقات المناسبة لعتادك.', cta: 'استكشف الدليل' },
    'ask-hans': { headline: 'كفى بحثاً. اسأل Hans فقط.', sub: 'أخبر Ask Hans بهدفك وحاسوبك. ستحصل على توصية بتطبيق واحد مع الأسباب والمصادر.', cta: 'اسأل Ask Hans الآن' },
    'power-mode': { headline: 'إعداد الذكاء الاصطناعي المحلي كاملاً في تقرير واحد.', sub: 'أجب عن بضعة أسئلة موجَّهة. العتاد والتطبيقات والخطوات التالية في مستند واحد بصيغة PDF أو Word أو Markdown.', cta: 'ابدأ Power Mode' },
    mcp: { headline: 'اربط PromptQuorum بالذكاء الاصطناعي الخاص بك.', sub: 'الأدلة وبيانات التطبيقات داخل مساعدك، بسطر واحد من الإعداد.', cta: 'اتصل الآن', snippetLabel: 'مثال على الإعداد (يختلف التنسيق حسب العميل)' },
  },
}
