// Local AI App Directory — Return Editor (category: contract-review, with document-pdf-chat)
// Added 2026-10-10 following a submission email from the developer, who disclosed that they build the app.
// Facts verified on 2026-10-10 against returneditor.ai (home, /download/, /changelog/, /docs/, /privacy/, /security/):
// version 1.4.1 released 2026-10-09; macOS 14+ on Apple Silicon (notarized .dmg) and Windows 10/11 64-bit (signed
// per-user installer, no admin rights); Free plan runs a bundled llama.cpp engine locally with no account; Pro
// ($39/month or $390/year, 500 cloud actions per month) routes requests through an EU proxy to Anthropic; no Linux build yet.
// The submission email's "Free = fully local, no account" and "Pro = $39/month" claims match the site. Model names
// (Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B, Bielik 11B v3) come from the home page. No public source repository.
// 2026-10-16: the developer (Michał) reviewed the feature post for accuracy and sent a maker comment; added `founder` + `founderReviewedDate`.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'return-editor',
  name: 'Return Editor',
  categories: ['contract-review', 'document-pdf-chat'],
  interfaces: ['desktop'],
  locality: 'hybrid', // Free plan is fully local; Pro adds opt-in cloud AI (Anthropic) through the maker's EU proxy
  platforms: ['mac', 'win'], // Apple Silicon Mac (macOS 14+) and Windows 10/11 64-bit; Linux is waitlist-only
  worksWith: ['llama.cpp', 'GGUF', 'Qwen', 'Granite', 'GPT-OSS', 'Bielik', 'Anthropic Claude (Pro, cloud)'],
  engine: 'builtin', // bundles its own llama.cpp server; no Ollama or external runtime needed
  license: 'Proprietary (closed source)', // returneditor.ai/terms; no public repository
  price: 'freemium', // Free = unlimited local AI, no account; Pro $39/month adds cloud AI; Counsel tier is waitlist-only
  hardware: { ramGb: 16, vramGb: null, cpuOnly: null, variesByModel: true }, // site: 16 GB RAM recommended, default model is a 5.3 GB download; depends on the model chosen
  stars: null, // closed source
  addedDate: '2026-10-10',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'returneditor.ai',
  storeLinks: {
    web: 'https://returneditor.ai/download/',
  },
  installEffort: 'installer',
  installEvidence:
    'returneditor.ai/download/ checked 2026-10-10: notarized .dmg for Apple Silicon (macOS 14+) and a signed per-user Windows 10/11 installer needing no admin rights; no terminal step.',
  tagline: {
    en: 'Desktop document editor for contract review: clause-level risk flags, cited answers and local semantic search, with a bundled local AI',
    de: 'Desktop-Dokumenteditor für die Vertragsprüfung: Risikomarkierungen je Klausel, Antworten mit Quellenangabe und lokale semantische Suche, mit mitgelieferter lokaler KI',
    fr: 'Éditeur de documents de bureau pour la revue de contrats : alertes de risque par clause, réponses citées et recherche sémantique locale, avec une IA locale intégrée',
    ja: '契約書レビュー向けのデスクトップ文書エディタ。条項ごとのリスク表示、出典付きの回答、ローカルのセマンティック検索を、同梱のローカルAIで提供',
    zh: '面向合同审查的桌面文档编辑器：按条款标记风险、带引用的问答和本地语义搜索，内置本地 AI',
    es: 'Editor de documentos de escritorio para revisar contratos: alertas de riesgo por cláusula, respuestas con cita y búsqueda semántica local, con IA local incluida',
    pt: 'Editor de documentos para desktop voltado à revisão de contratos: alertas de risco por cláusula, respostas com citação e busca semântica local, com IA local incluída',
    ar: 'محرر مستندات لسطح المكتب لمراجعة العقود: تنبيهات مخاطر لكل بند وإجابات مع استشهادات وبحث دلالي محلي، مع ذكاء اصطناعي محلي مدمج',
    ko: '계약서 검토용 데스크톱 문서 편집기: 조항 단위 위험 표시, 출처가 달린 답변, 로컬 시맨틱 검색을 내장 로컬 AI로 제공',
  },
  // Each value taken from returneditor.ai on 2026-10-10; a missing key = not stated there, never false.
  // localLlm = bundled local engine; multiFormat = PDF, DOCX, ODT, RTF and HTML import; citations = answers cite clauses.
  // dockerDeploy / apiServer stay unset: neither is documented.
  compare: { localLlm: true, multiFormat: true, citations: true, desktopApp: true },
  lastVerifiedDate: '2026-10-10',
  lastUpstreamUpdate: '2026-10-09', // official changelog, read 2026-10-16
  lastUpstreamUpdateSource: 'https://returneditor.ai/changelog/',
  founderReviewedDate: '2026-10-16', // Michał supplied his own comment 2026-10-16; drives the amber Founder-reviewed banner + star on tile, drawer and review
  founder: {
    who: {
      en: 'Michał, developer',
      de: 'Michał, Entwickler',
      es: 'Michał, desarrollador',
      fr: 'Michał, développeur',
      ja: 'Michał氏、開発者',
      pt: 'Michał, desenvolvedor',
      ar: 'Michał، مطوّر',
      zh: 'Michał，开发者',
      ko: 'Michał, 개발자',
    },
    why: {
      en: 'I like law. Not the paperwork, but the idea behind it: that people can agree on rules, write them down and hold each other to them. I think it is one of the most important things our civilization has built. The problem is that today most of it lives in long documents that few people can read with confidence. A lawyer\'s time is expensive, so many people sign contracts they have only skimmed, and lawyers spend hours on a first pass that software can do.',
      de: 'Ich mag das Recht. Nicht den Papierkram, sondern die Idee dahinter: dass Menschen sich auf Regeln einigen, sie aufschreiben und sich gegenseitig daran halten können. Ich halte das für eines der wichtigsten Dinge, die unsere Zivilisation hervorgebracht hat. Das Problem ist, dass das meiste davon heute in langen Dokumenten steckt, die kaum jemand sicher lesen kann. Anwaltszeit ist teuer, deshalb unterschreiben viele Menschen Verträge, die sie nur überflogen haben, und Anwälte verbringen Stunden mit einer ersten Durchsicht, die Software erledigen kann.',
      es: 'Me gusta el derecho. No el papeleo, sino la idea que hay detrás: que las personas puedan acordar reglas, ponerlas por escrito y exigirse mutuamente su cumplimiento. Creo que es una de las cosas más importantes que ha construido nuestra civilización. El problema es que hoy la mayor parte vive en documentos largos que pocas personas pueden leer con confianza. El tiempo de un abogado es caro, así que muchas personas firman contratos que solo han hojeado, y los abogados dedican horas a una primera revisión que el software puede hacer.',
      fr: 'J\'aime le droit. Pas la paperasse, mais l\'idée qui le sous-tend : que les gens puissent convenir de règles, les écrire et se tenir mutuellement à ces règles. Je pense que c\'est l\'une des choses les plus importantes que notre civilisation ait construites. Le problème, c\'est qu\'aujourd\'hui l\'essentiel se trouve dans de longs documents que peu de gens savent lire avec assurance. Le temps d\'un avocat coûte cher : beaucoup de personnes signent donc des contrats qu\'elles n\'ont fait que survoler, et des avocats passent des heures sur une première lecture qu\'un logiciel peut faire.',
      ja: '私は法律が好きです。書類仕事ではなく、その根底にある考え方が好きなのです。人々がルールに合意し、それを書き留め、互いにそれを守らせることができるという考え方です。それは、私たちの文明が築いた最も重要なものの一つだと思っています。問題は、今日その大半が、自信を持って読める人がほとんどいない長い文書の中にあることです。弁護士の時間は高価なので、多くの人がざっと目を通しただけの契約書に署名し、弁護士はソフトウェアにできる最初の確認作業に何時間も費やしています。',
      pt: 'Eu gosto de direito. Não da papelada, mas da ideia por trás dele: que as pessoas possam combinar regras, escrevê-las e cobrar umas das outras o seu cumprimento. Acho que é uma das coisas mais importantes que a nossa civilização construiu. O problema é que hoje a maior parte disso vive em documentos longos que poucas pessoas conseguem ler com segurança. O tempo de um advogado é caro, então muita gente assina contratos que só leu por cima, e advogados gastam horas numa primeira leitura que um software pode fazer.',
      ar: 'أحب القانون. لا أحب الأوراق، بل الفكرة التي يقوم عليها: أن يتفق الناس على قواعد ويكتبوها ويحاسب بعضهم بعضًا عليها. وأعتقد أنه من أهم ما بنته حضارتنا. المشكلة أن معظمه يعيش اليوم في وثائق طويلة قلّما يستطيع أحد قراءتها بثقة. ووقت المحامي مكلف، فيوقّع كثيرون عقودًا لم يمرّوا عليها إلا مرورًا سريعًا، ويقضي المحامون ساعات في قراءة أولى يستطيع البرنامج القيام بها.',
      zh: '我喜欢法律。不是喜欢文书工作，而是喜欢它背后的理念：人们可以就规则达成一致，把它们写下来，并相互督促遵守。我认为这是我们的文明所建立的最重要的东西之一。问题在于，如今这些规则大多藏在冗长的文件里，很少有人能有把握地读懂。律师的时间很贵，所以很多人在签合同时只是匆匆浏览，而律师则要花数小时做软件就能完成的初读。',
      ko: '저는 법을 좋아합니다. 서류 작업이 아니라 그 바탕에 있는 생각을 좋아합니다. 사람들이 규칙에 합의하고, 그것을 글로 적고, 서로 지키도록 할 수 있다는 생각입니다. 우리 문명이 만들어 낸 가장 중요한 것 중 하나라고 생각합니다. 문제는 오늘날 그 대부분이 자신 있게 읽을 수 있는 사람이 드문 긴 문서 속에 있다는 점입니다. 변호사의 시간은 비싸기 때문에 많은 사람이 훑어보기만 한 계약서에 서명하고, 변호사는 소프트웨어가 할 수 있는 첫 검토에 몇 시간을 씁니다.',
    },
    pullQuote: {
      en: 'I built Return so that anyone can get a careful first read of a contract: which clauses are risky, why, and for which side, with every answer pointing to the clause it came from.',
      de: 'Ich habe Return gebaut, damit jeder eine sorgfältige erste Lesart eines Vertrags bekommen kann: welche Klauseln riskant sind, warum und für welche Seite, wobei jede Antwort auf die Klausel verweist, aus der sie stammt.',
      es: 'Creé Return para que cualquiera pueda obtener una primera lectura cuidadosa de un contrato: qué cláusulas son arriesgadas, por qué y para qué parte, con cada respuesta señalando la cláusula de la que procede.',
      fr: 'J\'ai créé Return pour que chacun puisse obtenir une première lecture soignée d\'un contrat : quelles clauses sont risquées, pourquoi, et pour quelle partie, chaque réponse renvoyant à la clause dont elle provient.',
      ja: 'Returnを作ったのは、誰もが契約書の丁寧な最初の読み込みを得られるようにするためです。',
      pt: 'Criei o Return para que qualquer pessoa possa ter uma primeira leitura cuidadosa de um contrato: quais cláusulas são arriscadas, por quê e para qual lado, com cada resposta apontando para a cláusula de onde veio.',
      ar: 'بنيتُ Return ليحصل أي شخص على قراءة أولى متأنية للعقد: أي البنود خطِرة، ولماذا، وبالنسبة لأي طرف، مع إحالة كل إجابة إلى البند الذي جاءت منه.',
      zh: '我开发 Return，是为了让任何人都能对合同做一次认真的初读：哪些条款有风险、为什么、对哪一方有风险，并且每个回答都指向它所依据的条款。',
      ko: 'Return은 누구나 계약서를 꼼꼼하게 처음 읽어 볼 수 있도록 만들었습니다.',
    },
    providedDate: '2026-10-16',
    // Verbatim maker comment, same text as the "From the Maker" section in return-editor-review.ts.
    fullQuote: {
      en: [
        'I like law. Not the paperwork, but the idea behind it: that people can agree on rules, write them down and hold each other to them. I think it is one of the most important things our civilization has built.',
        'The problem is that today most of it lives in long documents that few people can read with confidence. A lawyer\'s time is expensive, so many people sign contracts they have only skimmed, and lawyers spend hours on a first pass that software can do.',
        'I built Return so that anyone can get a careful first read of a contract: which clauses are risky, why, and for which side, with every answer pointing to the clause it came from. It runs on your own computer, so a confidential document never has to leave it to be understood. It is not a replacement for a lawyer. It helps you know what to ask, and it lets lawyers spend their time on judgment instead of reading.',
        'What makes it different: the analysis lives inside the document, every AI change is a suggestion you accept or reject, and your own review standards can be saved and reused. Files stay plain Markdown on your disk.',
        'I am building Return on my own, in Poland. Next on my list: a Linux version and more reliable local models on long contracts.',
      ],
      de: [
        'Ich mag das Recht. Nicht den Papierkram, sondern die Idee dahinter: dass Menschen sich auf Regeln einigen, sie aufschreiben und sich gegenseitig daran halten können. Ich halte das für eines der wichtigsten Dinge, die unsere Zivilisation hervorgebracht hat.',
        'Das Problem ist, dass das meiste davon heute in langen Dokumenten steckt, die kaum jemand sicher lesen kann. Anwaltszeit ist teuer, deshalb unterschreiben viele Menschen Verträge, die sie nur überflogen haben, und Anwälte verbringen Stunden mit einer ersten Durchsicht, die Software erledigen kann.',
        'Ich habe Return gebaut, damit jeder eine sorgfältige erste Lesart eines Vertrags bekommen kann: welche Klauseln riskant sind, warum und für welche Seite, wobei jede Antwort auf die Klausel verweist, aus der sie stammt. Es läuft auf Ihrem eigenen Computer, ein vertrauliches Dokument muss ihn also nicht verlassen, um verstanden zu werden. Es ersetzt keinen Anwalt. Es hilft Ihnen zu wissen, was Sie fragen sollten, und lässt Anwälte ihre Zeit mit Urteilen statt mit Lesen verbringen.',
        'Was es anders macht: Die Analyse lebt im Dokument, jede KI-Änderung ist ein Vorschlag, den Sie annehmen oder ablehnen, und Ihre eigenen Prüfstandards lassen sich speichern und wiederverwenden. Die Dateien bleiben schlichtes Markdown auf Ihrer Festplatte.',
        'Ich entwickle Return allein, in Polen. Als Nächstes auf meiner Liste: eine Linux-Version und zuverlässigere lokale Modelle für lange Verträge.',
      ],
      es: [
        'Me gusta el derecho. No el papeleo, sino la idea que hay detrás: que las personas puedan acordar reglas, ponerlas por escrito y exigirse mutuamente su cumplimiento. Creo que es una de las cosas más importantes que ha construido nuestra civilización.',
        'El problema es que hoy la mayor parte vive en documentos largos que pocas personas pueden leer con confianza. El tiempo de un abogado es caro, así que muchas personas firman contratos que solo han hojeado, y los abogados dedican horas a una primera revisión que el software puede hacer.',
        'Creé Return para que cualquiera pueda obtener una primera lectura cuidadosa de un contrato: qué cláusulas son arriesgadas, por qué y para qué parte, con cada respuesta señalando la cláusula de la que procede. Funciona en su propio ordenador, así que un documento confidencial no tiene que salir de él para ser comprendido. No sustituye a un abogado. Le ayuda a saber qué preguntar y permite que los abogados dediquen su tiempo al criterio en lugar de a la lectura.',
        'Lo que lo hace diferente: el análisis vive dentro del documento, cada cambio de la IA es una sugerencia que usted acepta o rechaza, y sus propios criterios de revisión pueden guardarse y reutilizarse. Los archivos siguen siendo Markdown simple en su disco.',
        'Estoy creando Return por mi cuenta, en Polonia. Lo siguiente en mi lista: una versión para Linux y modelos locales más fiables con contratos largos.',
      ],
      fr: [
        'J\'aime le droit. Pas la paperasse, mais l\'idée qui le sous-tend : que les gens puissent convenir de règles, les écrire et se tenir mutuellement à ces règles. Je pense que c\'est l\'une des choses les plus importantes que notre civilisation ait construites.',
        'Le problème, c\'est qu\'aujourd\'hui l\'essentiel se trouve dans de longs documents que peu de gens savent lire avec assurance. Le temps d\'un avocat coûte cher : beaucoup de personnes signent donc des contrats qu\'elles n\'ont fait que survoler, et des avocats passent des heures sur une première lecture qu\'un logiciel peut faire.',
        'J\'ai créé Return pour que chacun puisse obtenir une première lecture soignée d\'un contrat : quelles clauses sont risquées, pourquoi, et pour quelle partie, chaque réponse renvoyant à la clause dont elle provient. Il fonctionne sur votre propre ordinateur, de sorte qu\'un document confidentiel n\'a jamais besoin de le quitter pour être compris. Ce n\'est pas un remplaçant de l\'avocat. Il vous aide à savoir quoi demander, et il permet aux avocats de consacrer leur temps au jugement plutôt qu\'à la lecture.',
        'Ce qui le distingue : l\'analyse vit à l\'intérieur du document, chaque modification de l\'IA est une suggestion que vous acceptez ou rejetez, et vos propres critères de revue peuvent être enregistrés et réutilisés. Les fichiers restent du Markdown brut sur votre disque.',
        'Je développe Return à titre individuel, en Pologne. Prochaines étapes sur ma liste : une version Linux et des modèles locaux plus fiables sur les longs contrats.',
      ],
      ja: [
        '私は法律が好きです。書類仕事ではなく、その根底にある考え方が好きなのです。人々がルールに合意し、それを書き留め、互いにそれを守らせることができるという考え方です。それは、私たちの文明が築いた最も重要なものの一つだと思っています。',
        '問題は、今日その大半が、自信を持って読める人がほとんどいない長い文書の中にあることです。弁護士の時間は高価なので、多くの人がざっと目を通しただけの契約書に署名し、弁護士はソフトウェアにできる最初の確認作業に何時間も費やしています。',
        'Returnを作ったのは、誰もが契約書の丁寧な最初の読み込みを得られるようにするためです。どの条項が危険なのか、なぜなのか、どちらの側にとってなのかを示し、すべての回答は根拠となった条項を指し示します。Returnはお使いのコンピューター上で動くため、機密文書を理解するために外へ出す必要はありません。弁護士の代わりではありません。何を尋ねるべきかを知る助けとなり、弁護士が読む作業ではなく判断に時間を使えるようにします。',
        '他との違いは、分析が文書の中に存在すること、AIによる変更はすべて承認または却下できる提案であること、そして独自のレビュー基準を保存して再利用できることです。ファイルはディスク上のプレーンなMarkdownのままです。',
        'Returnはポーランドで、一人で開発しています。次の予定は、Linux版と、長い契約書でより信頼できるローカルモデルです。',
      ],
      pt: [
        'Eu gosto de direito. Não da papelada, mas da ideia por trás dele: que as pessoas possam combinar regras, escrevê-las e cobrar umas das outras o seu cumprimento. Acho que é uma das coisas mais importantes que a nossa civilização construiu.',
        'O problema é que hoje a maior parte disso vive em documentos longos que poucas pessoas conseguem ler com segurança. O tempo de um advogado é caro, então muita gente assina contratos que só leu por cima, e advogados gastam horas numa primeira leitura que um software pode fazer.',
        'Criei o Return para que qualquer pessoa possa ter uma primeira leitura cuidadosa de um contrato: quais cláusulas são arriscadas, por quê e para qual lado, com cada resposta apontando para a cláusula de onde veio. Ele roda no seu próprio computador, então um documento confidencial não precisa sair dele para ser compreendido. Não substitui um advogado. Ajuda você a saber o que perguntar e permite que os advogados usem o tempo em julgamento em vez de leitura.',
        'O que o torna diferente: a análise vive dentro do documento, toda alteração da IA é uma sugestão que você aceita ou rejeita, e os seus próprios padrões de revisão podem ser salvos e reutilizados. Os arquivos continuam sendo Markdown simples no seu disco.',
        'Estou criando o Return por conta própria, na Polônia. O próximo item da minha lista: uma versão para Linux e modelos locais mais confiáveis em contratos longos.',
      ],
      ar: [
        'أحب القانون. لا أحب الأوراق، بل الفكرة التي يقوم عليها: أن يتفق الناس على قواعد ويكتبوها ويحاسب بعضهم بعضًا عليها. وأعتقد أنه من أهم ما بنته حضارتنا.',
        'المشكلة أن معظمه يعيش اليوم في وثائق طويلة قلّما يستطيع أحد قراءتها بثقة. ووقت المحامي مكلف، فيوقّع كثيرون عقودًا لم يمرّوا عليها إلا مرورًا سريعًا، ويقضي المحامون ساعات في قراءة أولى يستطيع البرنامج القيام بها.',
        'بنيتُ Return ليحصل أي شخص على قراءة أولى متأنية للعقد: أي البنود خطِرة، ولماذا، وبالنسبة لأي طرف، مع إحالة كل إجابة إلى البند الذي جاءت منه. وهو يعمل على حاسوبك الخاص، فلا يضطر مستند سري إلى مغادرته كي يُفهم. وهو ليس بديلًا عن المحامي. إنه يساعدك على معرفة ما ينبغي أن تسأل عنه، ويتيح للمحامين صرف وقتهم في الحكم بدل القراءة.',
        'ما يميّزه: التحليل يعيش داخل المستند، وكل تغيير بالذكاء الاصطناعي هو اقتراح تقبله أو ترفضه، ويمكن حفظ معايير المراجعة الخاصة بك وإعادة استخدامها. وتبقى الملفات بصيغة Markdown بسيطة على قرصك.',
        'أطوّر Return بمفردي، في بولندا. والتالي في قائمتي: نسخة لنظام Linux ونماذج محلية أكثر موثوقية مع العقود الطويلة.',
      ],
      zh: [
        '我喜欢法律。不是喜欢文书工作，而是喜欢它背后的理念：人们可以就规则达成一致，把它们写下来，并相互督促遵守。我认为这是我们的文明所建立的最重要的东西之一。',
        '问题在于，如今这些规则大多藏在冗长的文件里，很少有人能有把握地读懂。律师的时间很贵，所以很多人在签合同时只是匆匆浏览，而律师则要花数小时做软件就能完成的初读。',
        '我开发 Return，是为了让任何人都能对合同做一次认真的初读：哪些条款有风险、为什么、对哪一方有风险，并且每个回答都指向它所依据的条款。它在你自己的电脑上运行，所以机密文件不必离开电脑就能被理解。它不能取代律师。它帮助你知道该问什么，也让律师把时间花在判断上，而不是阅读上。',
        '它的不同之处在于：分析就在文档之中，AI 的每项修改都是由你接受或拒绝的建议，你自己的审查标准可以保存并重复使用。文件始终是你磁盘上的纯 Markdown。',
        '我在波兰独自开发 Return。接下来的计划是：Linux 版本，以及在长合同上更可靠的本地模型。',
      ],
      ko: [
        '저는 법을 좋아합니다. 서류 작업이 아니라 그 바탕에 있는 생각을 좋아합니다. 사람들이 규칙에 합의하고, 그것을 글로 적고, 서로 지키도록 할 수 있다는 생각입니다. 우리 문명이 만들어 낸 가장 중요한 것 중 하나라고 생각합니다.',
        '문제는 오늘날 그 대부분이 자신 있게 읽을 수 있는 사람이 드문 긴 문서 속에 있다는 점입니다. 변호사의 시간은 비싸기 때문에 많은 사람이 훑어보기만 한 계약서에 서명하고, 변호사는 소프트웨어가 할 수 있는 첫 검토에 몇 시간을 씁니다.',
        'Return은 누구나 계약서를 꼼꼼하게 처음 읽어 볼 수 있도록 만들었습니다. 어떤 조항이 위험한지, 왜 그런지, 어느 쪽에 위험한지를 알려 주고, 모든 답변은 근거가 된 조항을 가리킵니다. 사용자의 컴퓨터에서 실행되므로 기밀 문서를 이해하기 위해 밖으로 내보낼 필요가 없습니다. 변호사를 대체하는 것은 아닙니다. 무엇을 물어야 할지 알도록 돕고, 변호사가 읽는 대신 판단하는 데 시간을 쓸 수 있게 합니다.',
        '차별점은 이렇습니다. 분석이 문서 안에 있고, AI의 모든 변경은 수락하거나 거절하는 제안이며, 자신만의 검토 기준을 저장해 다시 쓸 수 있습니다. 파일은 디스크에 일반 Markdown으로 남습니다.',
        '저는 폴란드에서 혼자 Return을 만들고 있습니다. 다음 계획은 Linux 버전과, 긴 계약서에서 더 믿을 수 있는 로컬 모델입니다.',
      ],
    },
  },
  reviewSlug: 'return-editor-review',
  pqReview: {
    date: '2026-10-10',
    version: '1.4.1',
    versionSourceUrl: 'https://returneditor.ai/changelog/',
  },
  verdict:
    'Best for people who review contracts and other long documents on a Mac or Windows PC and want clause-level risk flags and cited answers with the Free plan running fully on-device; limited by closed source, no Linux build, a young product, and cloud AI that sends content to Anthropic on the paid plan',
}
