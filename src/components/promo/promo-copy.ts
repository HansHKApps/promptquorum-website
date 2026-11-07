// COPY for the promo slots, all 9 locales. Brand and tool names (PromptQuorum, Ask Hans, Power Mode, MCP) stay
// untranslated. Claims match the live /askhans page: Ask Hans recommends one app with sources and is "in
// development"; Power Mode makes one report. No "tested"/"always"/"every entry reviewed" wording, no live-data promise.
// `{count}` is the directory tool count read at build time (src/generated/promo-facts.json), never hardcoded.
import type { Lang } from '@/hooks/useLang'
import type { PromoTarget } from '@/lib/promo/types'

export interface PromoText {
  hook: string
  /** used when no count is available */
  hookNoCount?: string
  cta: string
  /** small label under the hook (Ask Hans / Power Mode are in development) */
  note?: string
  /** callout variant of MCP: label above the config snippet */
  snippetLabel?: string
}

export const PROMO_COPY: Record<Lang, Record<PromoTarget, PromoText>> = {
  en: {
    directory: { hook: 'Which local AI apps run on your computer? Browse {count} apps.', hookNoCount: 'Which local AI apps run on your computer? Browse the directory.', cta: 'Browse the directory' },
    'ask-hans': { hook: 'Describe your goal and computer. Ask Hans recommends one app, with sources.', cta: 'Ask Hans', note: 'In development, can make mistakes.' },
    'power-mode': { hook: 'Get one full report for your setup: hardware, apps, next steps.', cta: 'Open Power Mode', note: 'In development, can make mistakes.' },
    mcp: { hook: 'Connect PromptQuorum to your own AI. One line of config.', cta: 'Set up MCP', snippetLabel: 'Example config (formats vary by client)' },
  },
  de: {
    directory: { hook: 'Welche lokalen KI-Apps laufen auf Ihrem Computer? Stöbern Sie in {count} Apps.', hookNoCount: 'Welche lokalen KI-Apps laufen auf Ihrem Computer? Stöbern Sie im Verzeichnis.', cta: 'Verzeichnis ansehen' },
    'ask-hans': { hook: 'Beschreiben Sie Ihr Ziel und Ihren Computer. Ask Hans empfiehlt eine App, mit Quellen.', cta: 'Ask Hans', note: 'In Entwicklung, kann Fehler machen.' },
    'power-mode': { hook: 'Ein vollständiger Bericht für Ihr Setup: Hardware, Apps, nächste Schritte.', cta: 'Power Mode öffnen', note: 'In Entwicklung, kann Fehler machen.' },
    mcp: { hook: 'Verbinden Sie PromptQuorum mit Ihrer eigenen KI. Eine Zeile Konfiguration.', cta: 'MCP einrichten', snippetLabel: 'Beispielkonfiguration (Format je nach Client)' },
  },
  fr: {
    directory: { hook: 'Quelles applications d’IA locale fonctionnent sur votre ordinateur ? Parcourez {count} applications.', hookNoCount: 'Quelles applications d’IA locale fonctionnent sur votre ordinateur ? Parcourez l’annuaire.', cta: 'Parcourir l’annuaire' },
    'ask-hans': { hook: 'Décrivez votre objectif et votre ordinateur. Ask Hans recommande une application, avec ses sources.', cta: 'Ask Hans', note: 'En développement, peut se tromper.' },
    'power-mode': { hook: 'Obtenez un rapport complet pour votre configuration : matériel, applications, prochaines étapes.', cta: 'Ouvrir Power Mode', note: 'En développement, peut se tromper.' },
    mcp: { hook: 'Connectez PromptQuorum à votre propre IA. Une ligne de configuration.', cta: 'Configurer MCP', snippetLabel: 'Exemple de configuration (le format varie selon le client)' },
  },
  es: {
    directory: { hook: '¿Qué aplicaciones de IA local funcionan en tu ordenador? Explora {count} aplicaciones.', hookNoCount: '¿Qué aplicaciones de IA local funcionan en tu ordenador? Explora el directorio.', cta: 'Explorar el directorio' },
    'ask-hans': { hook: 'Describe tu objetivo y tu ordenador. Ask Hans recomienda una aplicación, con fuentes.', cta: 'Ask Hans', note: 'En desarrollo, puede cometer errores.' },
    'power-mode': { hook: 'Obtén un informe completo para tu configuración: hardware, aplicaciones, próximos pasos.', cta: 'Abrir Power Mode', note: 'En desarrollo, puede cometer errores.' },
    mcp: { hook: 'Conecta PromptQuorum con tu propia IA. Una línea de configuración.', cta: 'Configurar MCP', snippetLabel: 'Configuración de ejemplo (el formato varía según el cliente)' },
  },
  pt: {
    directory: { hook: 'Quais aplicativos de IA local rodam no seu computador? Explore {count} aplicativos.', hookNoCount: 'Quais aplicativos de IA local rodam no seu computador? Explore o diretório.', cta: 'Explorar o diretório' },
    'ask-hans': { hook: 'Descreva seu objetivo e seu computador. O Ask Hans recomenda um aplicativo, com fontes.', cta: 'Ask Hans', note: 'Em desenvolvimento, pode cometer erros.' },
    'power-mode': { hook: 'Receba um relatório completo para a sua configuração: hardware, aplicativos, próximos passos.', cta: 'Abrir Power Mode', note: 'Em desenvolvimento, pode cometer erros.' },
    mcp: { hook: 'Conecte o PromptQuorum à sua própria IA. Uma linha de configuração.', cta: 'Configurar MCP', snippetLabel: 'Configuração de exemplo (o formato varia por cliente)' },
  },
  ja: {
    directory: { hook: 'お使いのパソコンで動くローカルAIアプリは？ {count}個のアプリを見る。', hookNoCount: 'お使いのパソコンで動くローカルAIアプリは？ ディレクトリを見る。', cta: 'ディレクトリを見る' },
    'ask-hans': { hook: '目的とパソコンの環境を入力すると、Ask Hansが出典付きでアプリを1つおすすめします。', cta: 'Ask Hans', note: '開発中のため、誤りを含む場合があります。' },
    'power-mode': { hook: 'お使いの環境に合わせた総合レポートを1つ作成：ハードウェア、アプリ、次のステップ。', cta: 'Power Modeを開く', note: '開発中のため、誤りを含む場合があります。' },
    mcp: { hook: 'PromptQuorumをお使いのAIに接続。設定は1行です。', cta: 'MCPを設定する', snippetLabel: '設定例（形式はクライアントにより異なります）' },
  },
  zh: {
    directory: { hook: '哪些本地 AI 应用能在您的电脑上运行？浏览 {count} 个应用。', hookNoCount: '哪些本地 AI 应用能在您的电脑上运行？浏览应用目录。', cta: '浏览应用目录' },
    'ask-hans': { hook: '描述您的目标和电脑配置，Ask Hans 会推荐一款应用，并附上来源。', cta: 'Ask Hans', note: '开发中，可能出错。' },
    'power-mode': { hook: '为您的配置生成一份完整报告：硬件、应用、后续步骤。', cta: '打开 Power Mode', note: '开发中，可能出错。' },
    mcp: { hook: '将 PromptQuorum 连接到您自己的 AI，只需一行配置。', cta: '设置 MCP', snippetLabel: '配置示例（格式因客户端而异）' },
  },
  ko: {
    directory: { hook: '내 컴퓨터에서 돌아가는 로컬 AI 앱은? {count}개 앱을 둘러보세요.', hookNoCount: '내 컴퓨터에서 돌아가는 로컬 AI 앱은? 디렉터리를 둘러보세요.', cta: '디렉터리 보기' },
    'ask-hans': { hook: '목표와 컴퓨터를 설명하면 Ask Hans가 출처와 함께 앱 하나를 추천합니다.', cta: 'Ask Hans', note: '개발 중이며 오류가 있을 수 있습니다.' },
    'power-mode': { hook: '내 환경에 맞는 전체 보고서 하나: 하드웨어, 앱, 다음 단계.', cta: 'Power Mode 열기', note: '개발 중이며 오류가 있을 수 있습니다.' },
    mcp: { hook: 'PromptQuorum을 나만의 AI에 연결하세요. 설정은 한 줄입니다.', cta: 'MCP 설정하기', snippetLabel: '설정 예시(형식은 클라이언트마다 다름)' },
  },
  ar: {
    directory: { hook: 'ما تطبيقات الذكاء الاصطناعي المحلية التي تعمل على حاسوبك؟ تصفّح {count} تطبيقاً.', hookNoCount: 'ما تطبيقات الذكاء الاصطناعي المحلية التي تعمل على حاسوبك؟ تصفّح الدليل.', cta: 'تصفّح الدليل' },
    'ask-hans': { hook: 'صف هدفك وحاسوبك. يوصي Ask Hans بتطبيق واحد مع المصادر.', cta: 'Ask Hans', note: 'قيد التطوير وقد يخطئ.' },
    'power-mode': { hook: 'احصل على تقرير كامل واحد لإعدادك: العتاد والتطبيقات والخطوات التالية.', cta: 'افتح Power Mode', note: 'قيد التطوير وقد يخطئ.' },
    mcp: { hook: 'اربط PromptQuorum بالذكاء الاصطناعي الخاص بك. سطر واحد من الإعداد.', cta: 'إعداد MCP', snippetLabel: 'مثال على الإعداد (يختلف التنسيق حسب العميل)' },
  },
}
