// Local AI App Directory — Snug Protocol (first tile in the "At the Edge" group)
// Added 2026-10-17 following maker outreach (Jeetu Maker, 2026-10-12). Verified 2026-10-17 against: snugprotocol.org
// (MIT-licensed open protocol; macOS desktop app + browser Playground; no version/date/pricing stated on the site) and the
// GitHub API for snugprotocol/snug (MIT, created 2026-07-31, 2 stars, last push 2026-10-15; newest release "Snug desktop v0.1.3",
// 2026-09-05). Maker says the current specification is 1.3 (12 Oct 2026; the public docs pages read on 2026-10-18 still showed 1.0) and the implementation is pre-1.0; the desktop app is macOS-only.
// Deliberately NOT claimed: independent adoption, third-party hosts, independent security audit, "industry standard".
// Hardware floor, pricing of the desktop app and installer type were not found in a primary source, so those stay unset.
// 2026-10-18: the maker reviewed the feature post and supplied a technical correction (spec 1.3, 15 frame types, seven parts) and the founder comment below.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'snug-protocol',
  name: 'Snug Protocol',
  categories: ['emerging-protocols'],
  interfaces: ['desktop', 'web', 'library'],
  locality: 'hybrid', // host can use local inference (Ollama / OpenAI-compatible endpoints) or hosted models, which see what the app sends them
  platforms: ['mac', 'web'], // macOS desktop reference app + browser Playground
  worksWith: ['Ollama', 'OpenAI-compatible APIs', 'SQLite'],
  engine: 'external', // the host supplies the model at runtime; Snug is the protocol and runtime around it
  license: 'MIT',
  price: 'free', // protocol, specification and reference implementation are MIT-licensed; no paid tier stated
  hardware: null,
  stars: 2,
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'snugprotocol.org',
  storeLinks: {
    github: 'https://github.com/snugprotocol/snug',
  },
  tagline: {
    en: 'Early-stage open protocol for AI-built personal apps that live in a portable, user-owned .snug file and run on any compatible host',
    de: 'Frühes offenes Protokoll für KI-erstellte persönliche Apps, die in einer portablen, nutzereigenen .snug-Datei leben und auf jedem kompatiblen Host laufen',
    fr: 'Protocole ouvert en phase précoce pour des applications personnelles créées par IA, stockées dans un fichier .snug portable que l\'utilisateur possède et exécutables sur tout hôte compatible',
    ja: 'AIが作る個人用アプリを、ユーザー所有のポータブルな.snugファイルに保存し、互換ホストで動かす初期段階のオープンプロトコル',
    zh: '处于早期阶段的开放协议:由 AI 构建的个人应用保存在用户自有、可移植的 .snug 文件中,可在任何兼容的宿主上运行',
    es: 'Protocolo abierto en fase temprana para aplicaciones personales creadas con IA, guardadas en un archivo .snug portátil y propiedad del usuario, que se ejecutan en cualquier host compatible',
    pt: 'Protocolo aberto em fase inicial para aplicativos pessoais criados por IA, guardados num arquivo .snug portátil e de propriedade do usuário, executáveis em qualquer host compatível',
    ar: 'بروتوكول مفتوح في مرحلة مبكرة لتطبيقات شخصية يبنيها الذكاء الاصطناعي، تُحفظ في ملف .snug محمول يملكه المستخدم وتعمل على أي مضيف متوافق',
    ko: 'AI가 만든 개인용 앱을 사용자가 소유한 이동 가능한 .snug 파일에 담아 호환 호스트에서 실행하는 초기 단계의 오픈 프로토콜',
  },
  lastVerifiedDate: '2026-10-18',
  lastUpstreamUpdate: '2026-10-15', // newer of latest GitHub release (2026-09-05) and last push (2026-10-15)
  lastUpstreamUpdateSource: 'https://github.com/snugprotocol/snug',
  founderReviewedDate: '2026-10-18', // Jeetu Maker supplied a technical review (spec 1.3, runtime-contract import paths) and a comment 2026-10-18; drives the amber Founder-reviewed banner + star
  founder: {
    who: {
      en: 'Jeetu Maker, creator of Snug',
      de: 'Jeetu Maker, Kopf hinter Snug',
      fr: 'Jeetu Maker, à l\'origine de Snug',
      ja: 'Jeetu Maker氏、Snugの作者',
      zh: 'Jeetu Maker,Snug 的创建者',
      es: 'Jeetu Maker, persona creadora de Snug',
      pt: 'Jeetu Maker, quem criou o Snug',
      ar: 'Jeetu Maker، مُنشئ Snug',
      ko: 'Jeetu Maker, Snug 제작자',
    },
    providedDate: '2026-10-18',
    why: {
      en: 'I built Snug because personal software should work around your life, and the work you put into it should stay yours.',
      de: 'Ich habe Snug gebaut, weil persönliche Software sich nach Ihrem Leben richten sollte und die Arbeit, die Sie hineinstecken, bei Ihnen bleiben sollte.',
      fr: 'J\'ai créé Snug parce qu\'un logiciel personnel devrait s\'adapter à votre vie, et que le travail que vous y investissez devrait vous rester acquis.',
      ja: '私がSnugを作ったのは、個人向けのソフトウェアは生活に合わせて動くべきであり、そこに注いだ手間は自分のものであり続けるべきだと考えたからです。',
      zh: '我打造 Snug,是因为个人软件应当围绕你的生活运转,你投入其中的心血也应当始终属于你。',
      es: 'Creé Snug porque el software personal debería adaptarse a tu vida, y el trabajo que le dedicas debería seguir siendo tuyo.',
      pt: 'Criei o Snug porque o software pessoal deveria se adaptar à sua vida, e o trabalho que você dedica a ele deveria continuar sendo seu.',
      ar: 'بنيتُ Snug لأن البرمجيات الشخصية ينبغي أن تعمل حول حياتك، ولأن الجهد الذي تبذله فيها ينبغي أن يبقى ملكك.',
      ko: '저는 개인용 소프트웨어가 여러분의 삶에 맞춰 움직여야 하고, 거기에 들인 노력이 계속 여러분의 것으로 남아야 한다고 생각해서 Snug를 만들었습니다.',
    },
    pullQuote: {
      en: 'The app, its data and its history live together in one .snug file you control. Back it up like a document. Change the model behind it without rebuilding the app. Run it with a local model on your machine.',
      de: 'Die App, ihre Daten und ihr Verlauf liegen zusammen in einer einzigen .snug-Datei, die Sie kontrollieren. Sichern Sie sie wie ein Dokument. Wechseln Sie das Modell dahinter, ohne die App neu zu bauen. Betreiben Sie sie mit einem lokalen Modell auf Ihrem Rechner.',
      fr: 'L\'application, ses données et son historique vivent ensemble dans un seul fichier .snug que vous contrôlez. Sauvegardez-le comme un document. Changez le modèle qui la fait fonctionner sans reconstruire l\'application. Exécutez-la avec un modèle local sur votre machine.',
      ja: 'アプリ、そのデータ、そして履歴は、あなたが管理するひとつの.snugファイルにまとまっています。ドキュメントのようにバックアップできます。アプリを作り直さずに、背後のモデルを変更できます。自分のマシン上のローカルモデルで動かすこともできます。',
      zh: '应用、它的数据和它的历史一起存放在一个由你掌控的 .snug 文件中。可以像备份文档一样备份它。无需重建应用就能更换背后的模型。也可以在你自己的电脑上用本地模型运行它。',
      es: 'La app, sus datos y su historial viven juntos en un único archivo .snug que tú controlas. Haz copias de seguridad como con un documento. Cambia el modelo que hay detrás sin reconstruir la app. Ejecútala con un modelo local en tu equipo.',
      pt: 'O app, seus dados e seu histórico ficam juntos em um único arquivo .snug que você controla. Faça backup como faria com um documento. Troque o modelo por trás dele sem recriar o app. Execute-o com um modelo local no seu computador.',
      ar: 'يعيش التطبيق وبياناته وسجله معًا في ملف .snug واحد تتحكم فيه أنت. انسخه احتياطيًا كما تفعل مع مستند. غيّر النموذج الذي يقف خلفه دون إعادة بناء التطبيق. شغّله بنموذج محلي على جهازك.',
      ko: '앱, 데이터, 이력이 여러분이 관리하는 하나의 .snug 파일에 함께 담겨 있습니다. 문서처럼 백업하세요. 앱을 다시 만들지 않고도 뒤에 있는 모델을 바꿀 수 있습니다. 여러분의 컴퓨터에서 로컬 모델로 실행할 수도 있습니다.',
    },
    fullQuote: {
      en: [
        'Make apps you can talk to. Keep it like a single document.',
        'I built Snug because personal software should work around your life, and the work you put into it should stay yours.',
        'Describe a small tool you need, and AI builds it. Then that intelligence stays with you as you use the app.',
        'Take a spending tracker. Ask, “How much did I spend eating out this month?” The chat beside the app can query its records, even if nobody built a screen for that question. You don’t have to anticipate every question when you create the tool.',
        'The app, its data and its history live together in one .snug file you control. Back it up like a document. Change the model behind it without rebuilding the app. Run it with a local model on your machine. Your personal tool doesn’t need its own cloud database collecting your financial history.',
        'That’s the future I’m building toward: software that fits your life and stays in your hands.',
        'Snug is early and open source. Open a starter in the Playground, connect your model to explore its AI features, and export your first .snug file.',
      ],
      de: [
        'Erstellen Sie Apps, mit denen Sie sprechen können. Behalten Sie sie wie ein einzelnes Dokument.',
        'Ich habe Snug gebaut, weil persönliche Software sich nach Ihrem Leben richten sollte und die Arbeit, die Sie hineinstecken, bei Ihnen bleiben sollte.',
        'Beschreiben Sie ein kleines Werkzeug, das Sie brauchen, und die KI baut es. Danach bleibt diese Intelligenz bei Ihnen, während Sie die App nutzen.',
        'Nehmen wir einen Ausgaben-Tracker. Fragen Sie: „Wie viel habe ich diesen Monat fürs Essengehen ausgegeben?“ Der Chat neben der App kann ihre Datensätze abfragen, auch wenn niemand eine Ansicht für diese Frage gebaut hat. Sie müssen beim Erstellen des Werkzeugs nicht jede Frage vorhersehen.',
        'Die App, ihre Daten und ihr Verlauf liegen zusammen in einer einzigen .snug-Datei, die Sie kontrollieren. Sichern Sie sie wie ein Dokument. Wechseln Sie das Modell dahinter, ohne die App neu zu bauen. Betreiben Sie sie mit einem lokalen Modell auf Ihrem Rechner. Ihr persönliches Werkzeug braucht keine eigene Cloud-Datenbank, die Ihre Finanzhistorie sammelt.',
        'Das ist die Zukunft, auf die ich hinarbeite: Software, die zu Ihrem Leben passt und in Ihren Händen bleibt.',
        'Snug ist noch früh und Open Source. Öffnen Sie im Playground eine Vorlage, verbinden Sie Ihr Modell, um die KI-Funktionen zu erkunden, und exportieren Sie Ihre erste .snug-Datei.',
      ],
      fr: [
        'Créez des applications avec lesquelles vous pouvez parler. Gardez-les comme un seul document.',
        'J\'ai créé Snug parce qu\'un logiciel personnel devrait s\'adapter à votre vie, et que le travail que vous y investissez devrait vous rester acquis.',
        'Décrivez un petit outil dont vous avez besoin, et l\'IA le construit. Ensuite, cette intelligence reste avec vous pendant que vous utilisez l\'application.',
        'Prenons un suivi de dépenses. Demandez : « Combien ai-je dépensé au restaurant ce mois-ci ? » La conversation à côté de l\'application peut interroger ses enregistrements, même si personne n\'a construit d\'écran pour cette question. Vous n\'avez pas à anticiper chaque question quand vous créez l\'outil.',
        'L\'application, ses données et son historique vivent ensemble dans un seul fichier .snug que vous contrôlez. Sauvegardez-le comme un document. Changez le modèle qui la fait fonctionner sans reconstruire l\'application. Exécutez-la avec un modèle local sur votre machine. Votre outil personnel n\'a pas besoin de sa propre base de données dans le cloud qui collecte votre historique financier.',
        'C\'est l\'avenir vers lequel je travaille : des logiciels qui s\'adaptent à votre vie et restent entre vos mains.',
        'Snug en est à ses débuts et il est open source. Ouvrez un modèle de départ dans le Playground, connectez votre modèle pour explorer ses fonctions d\'IA, et exportez votre premier fichier .snug.',
      ],
      ja: [
        'アプリと会話できるアプリを作る。ひとつのドキュメントのように扱える。',
        '私がSnugを作ったのは、個人向けのソフトウェアは生活に合わせて動くべきであり、そこに注いだ手間は自分のものであり続けるべきだと考えたからです。',
        '必要な小さなツールを説明すれば、AIがそれを作ります。そして、アプリを使っている間も、そのインテリジェンスはあなたのそばにあります。',
        '支出管理アプリを例にとりましょう。「今月の外食にいくら使った?」と尋ねます。アプリの横にあるチャットは、その問いのための画面を誰も作っていなくても、アプリの記録を検索できます。ツールを作る時点で、あらゆる質問を予想しておく必要はありません。',
        'アプリ、そのデータ、そして履歴は、あなたが管理するひとつの.snugファイルにまとまっています。ドキュメントのようにバックアップできます。アプリを作り直さずに、背後のモデルを変更できます。自分のマシン上のローカルモデルで動かすこともできます。個人用のツールに、あなたの金銭の履歴を集めるための専用のクラウドデータベースは要りません。',
        '私が目指しているのは、そんな未来です。生活に合い、あなたの手の中にあり続けるソフトウェア。',
        'Snugはまだ初期段階のオープンソースです。Playgroundでスターターを開き、モデルを接続してAI機能を試し、最初の.snugファイルをエクスポートしてみてください。',
      ],
      zh: [
        '打造可以与之对话的应用。让它像一份文档那样简单。',
        '我打造 Snug,是因为个人软件应当围绕你的生活运转,你投入其中的心血也应当始终属于你。',
        '描述你需要的一个小工具,AI 就会把它做出来。之后,在你使用这个应用的过程中,这份智能依然陪伴着你。',
        '以一个记账应用为例。你问:“这个月我在外面吃饭花了多少钱?”应用旁边的聊天可以查询它的记录,即使没有人为这个问题做过专门的界面。你在创建工具时,不必预先想到每一个问题。',
        '应用、它的数据和它的历史一起存放在一个由你掌控的 .snug 文件中。可以像备份文档一样备份它。无需重建应用就能更换背后的模型。也可以在你自己的电脑上用本地模型运行它。你的个人工具不需要有自己的云数据库来收集你的财务历史。',
        '这就是我正在朝着努力的未来:契合你的生活、并始终掌握在你手中的软件。',
        'Snug 尚处早期,并且是开源的。在 Playground 中打开一个入门模板,连接你的模型来体验它的 AI 功能,并导出你的第一个 .snug 文件。',
      ],
      es: [
        'Crea apps con las que puedas hablar. Consérvalas como un único documento.',
        'Creé Snug porque el software personal debería adaptarse a tu vida, y el trabajo que le dedicas debería seguir siendo tuyo.',
        'Describe una herramienta pequeña que necesites y la IA la crea. Luego esa inteligencia se queda contigo mientras usas la app.',
        'Piensa en un control de gastos. Pregunta: «¿Cuánto gasté este mes en comer fuera?». El chat junto a la app puede consultar sus registros, aunque nadie haya creado una pantalla para esa pregunta. No tienes que anticipar todas las preguntas al crear la herramienta.',
        'La app, sus datos y su historial viven juntos en un único archivo .snug que tú controlas. Haz copias de seguridad como con un documento. Cambia el modelo que hay detrás sin reconstruir la app. Ejecútala con un modelo local en tu equipo. Tu herramienta personal no necesita su propia base de datos en la nube que recopile tu historial financiero.',
        'Ese es el futuro hacia el que estoy trabajando: software que encaja con tu vida y permanece en tus manos.',
        'Snug está en una fase temprana y es de código abierto. Abre una plantilla en el Playground, conecta tu modelo para explorar sus funciones de IA y exporta tu primer archivo .snug.',
      ],
      pt: [
        'Crie apps com os quais você possa conversar. Mantenha tudo como um único documento.',
        'Criei o Snug porque o software pessoal deveria se adaptar à sua vida, e o trabalho que você dedica a ele deveria continuar sendo seu.',
        'Descreva uma pequena ferramenta de que você precisa, e a IA a cria. Depois, essa inteligência permanece com você enquanto você usa o app.',
        'Pense em um controle de gastos. Pergunte: “Quanto gastei comendo fora este mês?” O chat ao lado do app pode consultar os registros dele, mesmo que ninguém tenha criado uma tela para essa pergunta. Você não precisa antecipar todas as perguntas ao criar a ferramenta.',
        'O app, seus dados e seu histórico ficam juntos em um único arquivo .snug que você controla. Faça backup como faria com um documento. Troque o modelo por trás dele sem recriar o app. Execute-o com um modelo local no seu computador. Sua ferramenta pessoal não precisa de um banco de dados próprio na nuvem coletando seu histórico financeiro.',
        'É o futuro que estou construindo: software que se encaixa na sua vida e permanece em suas mãos.',
        'O Snug é recente e de código aberto. Abra um modelo inicial no Playground, conecte seu modelo para explorar os recursos de IA e exporte seu primeiro arquivo .snug.',
      ],
      ar: [
        'اصنع تطبيقات يمكنك التحدث إليها. واحتفظ بها كمستند واحد.',
        'بنيتُ Snug لأن البرمجيات الشخصية ينبغي أن تعمل حول حياتك، ولأن الجهد الذي تبذله فيها ينبغي أن يبقى ملكك.',
        'صِف أداة صغيرة تحتاجها، فيبنيها الذكاء الاصطناعي. ثم يبقى ذلك الذكاء معك وأنت تستخدم التطبيق.',
        'خذ مثلًا أداة لتتبع الإنفاق. اسأل: “كم أنفقت على الأكل في الخارج هذا الشهر؟” تستطيع المحادثة المجاورة للتطبيق أن تستعلم عن سجلاته، حتى لو لم يبنِ أحد شاشة لهذا السؤال. ولا يلزمك أن تتوقع كل سؤال عندما تنشئ الأداة.',
        'يعيش التطبيق وبياناته وسجله معًا في ملف .snug واحد تتحكم فيه أنت. انسخه احتياطيًا كما تفعل مع مستند. غيّر النموذج الذي يقف خلفه دون إعادة بناء التطبيق. شغّله بنموذج محلي على جهازك. أداتك الشخصية لا تحتاج إلى قاعدة بيانات سحابية خاصة بها تجمع تاريخك المالي.',
        'هذا هو المستقبل الذي أبني نحوه: برمجيات تناسب حياتك وتبقى في يديك.',
        'Snug في مرحلة مبكرة ومفتوح المصدر. افتح نموذجًا أوليًا في Playground، واربط نموذجك لاستكشاف ميزاته الذكية، وصدّر أول ملف .snug لك.',
      ],
      ko: [
        '대화할 수 있는 앱을 만드세요. 하나의 문서처럼 간직하세요.',
        '저는 개인용 소프트웨어가 여러분의 삶에 맞춰 움직여야 하고, 거기에 들인 노력이 계속 여러분의 것으로 남아야 한다고 생각해서 Snug를 만들었습니다.',
        '필요한 작은 도구를 설명하면 AI가 만들어 줍니다. 그리고 그 지능은 앱을 쓰는 동안에도 여러분 곁에 남습니다.',
        '지출 관리 앱을 예로 들어 보겠습니다. “이번 달 외식에 얼마를 썼지?”라고 물어보세요. 앱 옆의 채팅은 그 질문을 위한 화면을 아무도 만들지 않았더라도 앱의 기록을 조회할 수 있습니다. 도구를 만들 때 모든 질문을 미리 예상할 필요가 없습니다.',
        '앱, 데이터, 이력이 여러분이 관리하는 하나의 .snug 파일에 함께 담겨 있습니다. 문서처럼 백업하세요. 앱을 다시 만들지 않고도 뒤에 있는 모델을 바꿀 수 있습니다. 여러분의 컴퓨터에서 로컬 모델로 실행할 수도 있습니다. 개인용 도구에 금융 이력을 수집하는 자체 클라우드 데이터베이스는 필요하지 않습니다.',
        '제가 향해 가는 미래는 이런 모습입니다. 삶에 맞고 여러분의 손에 남아 있는 소프트웨어입니다.',
        'Snug는 초기 단계이며 오픈 소스입니다. Playground에서 스타터를 열고, 모델을 연결해 AI 기능을 살펴본 뒤, 첫 .snug 파일을 내보내 보세요.',
      ],
    },
  },
  reviewSlug: 'snug-protocol-review',
  pqReview: {
    date: '2026-10-18',
    version: '0.1.3',
    versionSourceUrl: 'https://github.com/snugprotocol/snug/releases/tag/v0.1.3',
  },
  installEffort: 'installer',
  installOn: ['mac'],
  installEvidence: 'snugprotocol.org/download/ offers "Download for macOS" (Snug.dmg, universal binary); GitHub release v0.1.3 (2026-09-05) ships Snug.dmg and Snug.app.tar.gz; checked 2026-10-17. Signing/notarization not stated.',
  verdict: 'An idea worth watching rather than a proven standard: the specification, reference implementation, Playground and macOS app are published, but independent hosts, third-party adoption and an independent security review are not established, and the implementation is pre-1.0.',
}
