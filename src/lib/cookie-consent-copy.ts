import type { Lang } from '@/hooks/useLang'

// Copy for the cookie dialog and the footer "Cookie settings" link, all 9 locales.
// Register per docs/geo-translation.md: DE Sie, ES tú, FR vous, JA です/ます, PT você,
// AR MSA (Latin names stay LTR), KO 합쇼체. Vendor and cookie names are never translated.

export type CookieCopy = {
  title: string
  intro: string
  policy: string
  alwaysOn: string
  necessary: string
  necessaryDesc: string
  analytics: string
  analyticsDesc: string
  recordings: string
  recordingsDesc: string
  marketing: string
  marketingDesc: string
  acceptAll: string
  save: string
  rejectAll: string
}

// Arabic: left-to-right mark keeps the Latin cookie names from being reordered.
const LRM = '‎'

export const COOKIE_COPY: Record<Lang, CookieCopy> = {
  en: {
    title: 'Cookie settings',
    intro: 'Choose what this site may store and measure. You can change this any time from "Cookie settings" at the bottom of the page.',
    policy: 'Privacy Policy',
    alwaysOn: 'Always on',
    necessary: 'Necessary',
    necessaryDesc: 'Keeps your language and this choice. Umami counts page views anonymously, without cookies.',
    analytics: 'Analytics',
    analyticsDesc: 'Remembers the page you came from, your last search and your level to suggest related guides (kept in your browser only), and counts one anonymous event when you save a hardware profile.',
    recordings: 'Session recordings',
    recordingsDesc: 'Microsoft Clarity records clicks, scrolling and pointer movement as session replays and heatmaps, so we can see where visitors get stuck. It sets the cookies _clck and _clsk.',
    marketing: 'Marketing',
    marketingDesc: 'Browser push notifications through OneSignal, plus the visit counters that decide when we offer them. Nothing is sent until you agree in your browser.',
    acceptAll: 'Accept all',
    save: 'Save choices',
    rejectAll: 'Reject all',
  },
  de: {
    title: 'Cookie-Einstellungen',
    intro: 'Wählen Sie, was diese Website speichern und messen darf. Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ am Ende der Seite ändern.',
    policy: 'Datenschutzerklärung',
    alwaysOn: 'Immer aktiv',
    necessary: 'Notwendig',
    necessaryDesc: 'Speichert Ihre Sprache und diese Auswahl. Umami zählt Seitenaufrufe anonym und ohne Cookies.',
    analytics: 'Analyse',
    analyticsDesc: 'Merkt sich die vorherige Seite, Ihre letzte Suche und Ihr Niveau, um verwandte Anleitungen vorzuschlagen (nur in Ihrem Browser), und zählt ein anonymes Ereignis, wenn Sie ein Hardware-Profil speichern.',
    recordings: 'Sitzungsaufzeichnungen',
    recordingsDesc: 'Microsoft Clarity zeichnet Klicks, Scrollen und Mausbewegungen als Sitzungswiedergaben und Heatmaps auf, damit wir sehen, wo Besucher hängenbleiben. Setzt die Cookies _clck und _clsk.',
    marketing: 'Marketing',
    marketingDesc: 'Push-Benachrichtigungen im Browser über OneSignal sowie die Besuchszähler, die den Zeitpunkt des Angebots bestimmen. Gesendet wird erst, nachdem Sie im Browser zugestimmt haben.',
    acceptAll: 'Alle akzeptieren',
    save: 'Auswahl speichern',
    rejectAll: 'Alle ablehnen',
  },
  fr: {
    title: 'Paramètres des cookies',
    intro: 'Choisissez ce que ce site peut enregistrer et mesurer. Vous pouvez modifier ce choix à tout moment via « Paramètres des cookies » en bas de page.',
    policy: 'Politique de confidentialité',
    alwaysOn: 'Toujours actif',
    necessary: 'Nécessaires',
    necessaryDesc: 'Conservent votre langue et ce choix. Umami compte les visites de façon anonyme, sans cookie.',
    analytics: 'Analyses',
    analyticsDesc: 'Mémorisent la page précédente, votre dernière recherche et votre niveau pour suggérer des guides liés (dans votre navigateur uniquement), et comptent un événement anonyme lorsque vous enregistrez un profil matériel.',
    recordings: 'Enregistrements de session',
    recordingsDesc: 'Microsoft Clarity enregistre les clics, le défilement et les mouvements du pointeur sous forme de relectures de session et de cartes de chaleur, afin de repérer où les visiteurs bloquent. Dépose les cookies _clck et _clsk.',
    marketing: 'Marketing',
    marketingDesc: 'Notifications push du navigateur via OneSignal, ainsi que les compteurs de visites qui déterminent le moment de la proposition. Rien n’est envoyé tant que vous n’avez pas accepté dans votre navigateur.',
    acceptAll: 'Tout accepter',
    save: 'Enregistrer mes choix',
    rejectAll: 'Tout refuser',
  },
  ja: {
    title: 'Cookie設定',
    intro: '当サイトが保存・計測してよい内容を選択してください。選択内容は、ページ下部の「Cookie設定」からいつでも変更できます。',
    policy: 'プライバシーポリシー',
    alwaysOn: '常時オン',
    necessary: '必須',
    necessaryDesc: '言語設定とこの選択内容を保存します。Umamiはcookieを使わず、ページビューを匿名で集計します。',
    analytics: '分析',
    analyticsDesc: '関連ガイドを提案するため、直前のページ・最後の検索・レベルを記憶します（お使いのブラウザ内のみ）。ハードウェアプロフィールを保存したときは、匿名のイベントを1件集計します。',
    recordings: 'セッション記録',
    recordingsDesc: 'Microsoft Clarityが、クリック・スクロール・ポインターの動きをセッションリプレイとヒートマップとして記録し、訪問者がつまずく箇所を把握します。cookie（_clck、_clsk）を設定します。',
    marketing: 'マーケティング',
    marketingDesc: 'OneSignalによるブラウザのプッシュ通知と、案内するタイミングを決める訪問カウンターです。ブラウザで許可するまで、何も送信されません。',
    acceptAll: 'すべて受け入れる',
    save: '選択を保存',
    rejectAll: 'すべて拒否',
  },
  zh: {
    title: 'Cookie 设置',
    intro: '请选择本网站可以存储和统计的内容。您可随时通过页面底部的“Cookie 设置”更改选择。',
    policy: '隐私政策',
    alwaysOn: '始终开启',
    necessary: '必要',
    necessaryDesc: '保存您的语言和本次选择。Umami 不使用 Cookie，以匿名方式统计页面访问量。',
    analytics: '分析',
    analyticsDesc: '记住上一个页面、最近一次搜索和您的水平，用于推荐相关指南（仅保存在您的浏览器中）；保存硬件配置时会统计一条匿名事件。',
    recordings: '会话录制',
    recordingsDesc: 'Microsoft Clarity 以会话回放和热力图的形式记录点击、滚动和指针移动，帮助我们了解访客在哪里遇到困难。会设置 Cookie _clck 和 _clsk。',
    marketing: '营销',
    marketingDesc: '通过 OneSignal 发送的浏览器推送通知，以及决定何时向您提示的访问计数器。在您于浏览器中同意之前，不会发送任何内容。',
    acceptAll: '全部接受',
    save: '保存选择',
    rejectAll: '全部拒绝',
  },
  es: {
    title: 'Configuración de cookies',
    intro: 'Elige qué puede guardar y medir este sitio. Puedes cambiarlo en cualquier momento desde «Configuración de cookies», al final de la página.',
    policy: 'Política de privacidad',
    alwaysOn: 'Siempre activas',
    necessary: 'Necesarias',
    necessaryDesc: 'Guardan tu idioma y esta elección. Umami cuenta las visitas de forma anónima y sin cookies.',
    analytics: 'Analítica',
    analyticsDesc: 'Recuerda la página de la que vienes, tu última búsqueda y tu nivel para sugerir guías relacionadas (solo en tu navegador), y cuenta un evento anónimo cuando guardas un perfil de hardware.',
    recordings: 'Grabaciones de sesión',
    recordingsDesc: 'Microsoft Clarity registra clics, desplazamiento y movimientos del puntero como repeticiones de sesión y mapas de calor, para ver dónde se atascan los visitantes. Usa las cookies _clck y _clsk.',
    marketing: 'Marketing',
    marketingDesc: 'Notificaciones push en el navegador mediante OneSignal, y los contadores de visitas que determinan cuándo te las ofrecemos. No se envía nada hasta que aceptes en tu navegador.',
    acceptAll: 'Aceptar todo',
    save: 'Guardar selección',
    rejectAll: 'Rechazar todo',
  },
  pt: {
    title: 'Configurações de cookies',
    intro: 'Escolha o que este site pode armazenar e medir. Você pode mudar isso a qualquer momento em «Configurações de cookies», no final da página.',
    policy: 'Política de Privacidade',
    alwaysOn: 'Sempre ativo',
    necessary: 'Necessários',
    necessaryDesc: 'Guardam seu idioma e esta escolha. O Umami conta as visitas de forma anônima e sem cookies.',
    analytics: 'Análise',
    analyticsDesc: 'Lembra a página anterior, sua última busca e seu nível para sugerir guias relacionados (apenas no seu navegador) e conta um evento anônimo quando você salva um perfil de hardware.',
    recordings: 'Gravações de sessão',
    recordingsDesc: 'O Microsoft Clarity registra cliques, rolagem e movimentos do ponteiro como replays de sessão e mapas de calor, para vermos onde os visitantes travam. Define os cookies _clck e _clsk.',
    marketing: 'Marketing',
    marketingDesc: 'Notificações push no navegador via OneSignal e os contadores de visitas que definem quando as oferecemos. Nada é enviado até você aceitar no navegador.',
    acceptAll: 'Aceitar tudo',
    save: 'Salvar escolhas',
    rejectAll: 'Rejeitar tudo',
  },
  ar: {
    title: 'إعدادات ملفات تعريف الارتباط',
    intro: 'اختر ما يُسمح لهذا الموقع بتخزينه وقياسه. يمكنك تغيير اختيارك في أي وقت عبر «إعدادات ملفات تعريف الارتباط» أسفل الصفحة.',
    policy: 'سياسة الخصوصية',
    alwaysOn: 'مفعّل دائمًا',
    necessary: 'ضرورية',
    necessaryDesc: 'تحفظ لغتك وهذا الاختيار. يحسب Umami مشاهدات الصفحات بصورة مجهولة وبدون ملفات تعريف ارتباط.',
    analytics: 'التحليلات',
    analyticsDesc: 'تتذكّر الصفحة السابقة وآخر بحث ومستواك لاقتراح أدلة ذات صلة (داخل متصفحك فقط)، وتحتسب حدثًا مجهولًا واحدًا عند حفظك مواصفات جهازك.',
    recordings: 'تسجيلات الجلسات',
    recordingsDesc: `يسجّل Microsoft Clarity النقرات والتمرير وحركة المؤشر في صورة إعادة تشغيل للجلسات وخرائط حرارية، لنعرف أين يتعثّر الزوار. يضبط ملفَّي تعريف الارتباط ${LRM}_clck${LRM} و${LRM}_clsk${LRM}.`,
    marketing: 'التسويق',
    marketingDesc: 'إشعارات الدفع في المتصفح عبر OneSignal، وعدّادات الزيارات التي تحدد وقت عرضها عليك. لا يُرسل أي شيء قبل أن توافق في متصفحك.',
    acceptAll: 'قبول الكل',
    save: 'حفظ الاختيارات',
    rejectAll: 'رفض الكل',
  },
  ko: {
    title: '쿠키 설정',
    intro: '이 사이트가 저장하고 측정할 수 있는 항목을 선택하십시오. 선택 내용은 페이지 하단의 «쿠키 설정»에서 언제든지 변경하실 수 있습니다.',
    policy: '개인 정보 처리 방침',
    alwaysOn: '항상 활성',
    necessary: '필수',
    necessaryDesc: '언어와 이 선택 내용을 저장합니다. Umami는 쿠키 없이 페이지 조회수를 익명으로 집계합니다.',
    analytics: '분석',
    analyticsDesc: '관련 가이드를 제안하기 위해 이전 페이지, 마지막 검색, 수준을 기억하며(브라우저에만 저장), 하드웨어 프로필을 저장할 때 익명 이벤트를 1건 집계합니다.',
    recordings: '세션 녹화',
    recordingsDesc: 'Microsoft Clarity가 클릭, 스크롤, 포인터 움직임을 세션 리플레이와 히트맵으로 기록하여 방문자가 어려움을 겪는 지점을 파악합니다. 쿠키 _clck, _clsk를 설정합니다.',
    marketing: '마케팅',
    marketingDesc: 'OneSignal을 통한 브라우저 푸시 알림과, 알림을 안내할 시점을 정하는 방문 카운터입니다. 브라우저에서 동의하시기 전에는 아무것도 전송되지 않습니다.',
    acceptAll: '모두 허용',
    save: '선택 저장',
    rejectAll: '모두 거부',
  },
}
