// UI strings for the "Ask Hans" block on /mcp-stats (all 9 locales). Same lookup pattern as mcp-stats-i18n.ts.
// "Ask Hans", "PromptQuorum" and "MCP" stay as-is in every language (product and protocol names).

import type { Language } from '@/lib/blog/blogContent'

type Dict = Record<Language, string>

const ASK_UI = {
  eyebrow: {
    en: 'Ask Hans', de: 'Ask Hans', fr: 'Ask Hans', ja: 'Ask Hans', zh: 'Ask Hans', es: 'Ask Hans', pt: 'Ask Hans', ar: 'Ask Hans', ko: 'Ask Hans',
  },
  title: {
    en: 'Ask Hans: PromptQuorum in plain words',
    de: 'Ask Hans: PromptQuorum in einfachen Worten',
    fr: 'Ask Hans : PromptQuorum en langage simple',
    ja: 'Ask Hans：PromptQuorumにやさしい言葉で質問できます',
    zh: 'Ask Hans：用通俗的话向 PromptQuorum 提问',
    es: 'Ask Hans: PromptQuorum en palabras sencillas',
    pt: 'Ask Hans: o PromptQuorum em palavras simples',
    ar: 'Ask Hans: اسأل PromptQuorum بكلمات بسيطة',
    ko: 'Ask Hans: PromptQuorum에 쉬운 말로 질문하세요',
  },
  body: {
    en: 'Ask Hans is the AI assistant of PromptQuorum. Tell it what you want to do and which computer you have. It looks up the app directory, guides and hands-on tests with the same tools this MCP server offers, then recommends apps, compares them and checks them against your hardware.',
    de: 'Ask Hans ist der KI-Assistent von PromptQuorum. Sagen Sie ihm, was Sie vorhaben und welchen Computer Sie haben. Er durchsucht Verzeichnis, Guides und Praxistests mit denselben Werkzeugen, die auch dieser MCP-Server anbietet, empfiehlt Apps, vergleicht sie und prüft sie gegen Ihre Hardware.',
    fr: "Ask Hans est l'assistant IA de PromptQuorum. Indiquez-lui ce que vous souhaitez faire et de quel ordinateur vous disposez. Il consulte l'annuaire, les guides et les tests pratiques avec les mêmes outils que ce serveur MCP, puis recommande des applications, les compare et les confronte à votre matériel.",
    ja: 'Ask HansはPromptQuorumのAIアシスタントです。やりたいことと使っているパソコンを伝えると、このMCPサーバーと同じツールでディレクトリ、ガイド、実機テストを調べ、アプリの推薦、比較、お使いのハードウェアとの適合確認を行います。',
    zh: 'Ask Hans 是 PromptQuorum 的 AI 助手。告诉它你想做什么、用的是什么电脑，它会通过与本 MCP 服务器相同的工具查阅目录、指南和实测，然后推荐应用、进行比较，并对照你的硬件做适配检查。',
    es: 'Ask Hans es el asistente de IA de PromptQuorum. Cuéntale qué quieres hacer y qué equipo tienes. Consulta el directorio, las guías y las pruebas prácticas con las mismas herramientas que ofrece este servidor MCP, y después recomienda apps, las compara y las contrasta con tu hardware.',
    pt: 'O Ask Hans é o assistente de IA do PromptQuorum. Diga a ele o que você quer fazer e qual computador você tem. Ele consulta o diretório, os guias e os testes práticos com as mesmas ferramentas que este servidor MCP oferece, e depois recomenda apps, compara e confere com o seu hardware.',
    ar: 'Ask Hans هو مساعد الذكاء الاصطناعي في PromptQuorum. أخبره بما تريد فعله وبنوع جهازك. يبحث في الدليل والأدلة والاختبارات العملية بالأدوات نفسها التي يوفرها خادم MCP هذا، ثم يوصي بالتطبيقات ويقارن بينها ويتحقق من ملاءمتها لعتادك.',
    ko: 'Ask Hans는 PromptQuorum의 AI 어시스턴트입니다. 하려는 일과 사용 중인 컴퓨터를 알려 주십시오. 이 MCP 서버와 같은 도구로 디렉터리, 가이드, 실사용 테스트를 조회한 뒤 앱을 추천하고, 비교하고, 사용 중인 하드웨어와 맞는지 확인합니다.',
  },
  point1: {
    en: 'Recommends one app and says why, instead of listing ten.',
    de: 'Empfiehlt eine App und begründet sie, statt zehn aufzulisten.',
    fr: "Recommande une application et explique pourquoi, au lieu d'en lister dix.",
    ja: '10個を並べるのではなく、1つのアプリを理由とともに推薦します。',
    zh: '只推荐一款应用并说明理由，而不是罗列十款。',
    es: 'Recomienda una app y explica por qué, en lugar de listar diez.',
    pt: 'Recomenda um app e explica o motivo, em vez de listar dez.',
    ar: 'يوصي بتطبيق واحد مع التعليل بدل سرد عشرة.',
    ko: '열 개를 나열하는 대신 앱 하나를 이유와 함께 추천합니다.',
  },
  point2: {
    en: 'Links every claim to the review, test or directory entry it comes from.',
    de: 'Belegt jede Aussage mit einem Link zum Review, Test oder Verzeichniseintrag, aus dem sie stammt.',
    fr: "Associe chaque affirmation à un lien vers l'avis, le test ou la fiche d'annuaire dont elle provient.",
    ja: 'すべての主張に、根拠となるレビュー、テスト、ディレクトリ項目へのリンクを付けます。',
    zh: '每个结论都附上其来源的评测、实测或目录条目链接。',
    es: 'Enlaza cada afirmación con la reseña, la prueba o la ficha del directorio de donde procede.',
    pt: 'Liga cada afirmação ao review, ao teste ou à ficha do diretório de onde ela veio.',
    ar: 'يربط كل معلومة برابط المراجعة أو الاختبار أو مدخل الدليل الذي أُخذت منه.',
    ko: '모든 주장에 근거가 된 리뷰, 테스트 또는 디렉터리 항목 링크를 붙입니다.',
  },
  point3: {
    en: 'Shows a confidence tag per app: tested by PromptQuorum, checked by the maker, or maker statements only.',
    de: 'Zeigt pro App die Verlässlichkeit an: von PromptQuorum getestet, vom Hersteller geprüft oder nur Herstellerangaben.',
    fr: "Affiche un niveau de fiabilité par application : testée par PromptQuorum, vérifiée par l'éditeur, ou simples déclarations de l'éditeur.",
    ja: 'アプリごとに信頼度を表示します：PromptQuorumがテスト済み、開発元が確認済み、開発元の主張のみ。',
    zh: '为每款应用标注可信度：PromptQuorum 已实测、开发者已核对，或仅为开发者自述。',
    es: 'Muestra un nivel de fiabilidad por app: probada por PromptQuorum, revisada por el desarrollador o solo declaraciones del desarrollador.',
    pt: 'Mostra um nível de confiabilidade por app: testado pelo PromptQuorum, verificado pelo desenvolvedor ou só declarações do desenvolvedor.',
    ar: 'يعرض مستوى موثوقية لكل تطبيق: اختبرته PromptQuorum، أو راجعه المطوّر، أو بيانات المطوّر فقط.',
    ko: '앱마다 신뢰도를 표시합니다: PromptQuorum 테스트 완료, 개발사 확인 완료, 개발사 주장만 있음.',
  },
  open: {
    en: 'Open Ask Hans', de: 'Ask Hans öffnen', fr: 'Ouvrir Ask Hans', ja: 'Ask Hansを開く', zh: '打开 Ask Hans',
    es: 'Abrir Ask Hans', pt: 'Abrir o Ask Hans', ar: 'افتح Ask Hans', ko: 'Ask Hans 열기',
  },
  devNote: {
    en: 'In development, can make mistakes.',
    de: 'In Entwicklung, kann Fehler machen.',
    fr: 'En développement, peut se tromper.',
    ja: '開発中のため、誤りを含む場合があります。',
    zh: '开发中，可能出错。',
    es: 'En desarrollo, puede cometer errores.',
    pt: 'Em desenvolvimento, pode cometer erros.',
    ar: 'قيد التطوير وقد يخطئ.',
    ko: '개발 중이며 오류가 있을 수 있습니다.',
  },
  statsHeading: {
    en: 'Ask Hans in numbers', de: 'Ask Hans in Zahlen', fr: 'Ask Hans en chiffres', ja: 'Ask Hansの利用状況', zh: 'Ask Hans 数据',
    es: 'Ask Hans en cifras', pt: 'Ask Hans em números', ar: 'Ask Hans بالأرقام', ko: 'Ask Hans 이용 현황',
  },
  statAnswers: {
    en: 'Questions answered', de: 'Beantwortete Fragen', fr: 'Questions traitées', ja: '回答した質問数', zh: '已回答的问题',
    es: 'Preguntas respondidas', pt: 'Perguntas respondidas', ar: 'أسئلة تمت الإجابة عنها', ko: '답변한 질문 수',
  },
  statOpens: {
    en: 'Times opened', de: 'Mal geöffnet', fr: 'Ouvertures', ja: '開かれた回数', zh: '被打开次数',
    es: 'Veces abierto', pt: 'Vezes aberto', ar: 'مرات الفتح', ko: '열린 횟수',
  },
  since: {
    en: 'Counted since', de: 'Gezählt seit', fr: 'Comptabilisé depuis', ja: '集計開始', zh: '统计起始于',
    es: 'Contado desde', pt: 'Contado desde', ar: 'منذ', ko: '집계 시작',
  },
  statsNote: {
    en: 'Anonymous totals for all visitors: no names, no IP addresses, no question text.',
    de: 'Anonyme Summen für alle Besucher: keine Namen, keine IP-Adressen, kein Fragetext.',
    fr: 'Totaux anonymes pour tous les visiteurs : ni noms, ni adresses IP, ni texte des questions.',
    ja: 'すべての訪問者の匿名の合計です。氏名、IPアドレス、質問文は保存しません。',
    zh: '所有访客的匿名汇总：不含姓名、IP 地址和提问内容。',
    es: 'Totales anónimos de todos los visitantes: sin nombres, sin direcciones IP, sin el texto de las preguntas.',
    pt: 'Totais anônimos de todos os visitantes: sem nomes, sem endereços IP, sem o texto das perguntas.',
    ar: 'إجماليات مجهولة لجميع الزوار: بلا أسماء ولا عناوين IP ولا نص الأسئلة.',
    ko: '모든 방문자의 익명 합계입니다. 이름, IP 주소, 질문 내용은 저장하지 않습니다.',
  },
} as const satisfies Record<string, Dict>

export type AskUiKey = keyof typeof ASK_UI

export function tAsk(key: AskUiKey, lang: Language): string {
  const entry = ASK_UI[key]
  return entry[lang] ?? entry.en
}
