// Local AI App Directory — HilbertRaum (layer: desktop)
// Added following maker outreach (Vladimir Tosovic, HilbertraumAI, hilbertraum.ai) — 2026-09-25.
// All fields below verified directly against hilbertraum.ai and
// github.com/HilbertraumAI/HilbertRaum (README + releases page) on 2026-09-25 —
// the maker's email was used only as a starting point, not taken at face value.
//
// Maker follow-up 2026-09-25: Vladimir Tosovic (HilbertraumAI) emailed corrections (HilbertRaum has
// dictation via Whisper, not text-to-speech; the portable USB path is simpler than the prepare-drive
// script suggested — copy the portable build to a drive and pick a model in the app) plus a founder
// quote and note of an upcoming pre-configured USB stick (same free/open-source app, priced
// separately, waitlist at hilbertraum.ai). Corrections applied to the review article and below;
// operator confirmed 2026-09-26 that Vladimir's own technical corrections (not just the quote)
// qualify as a founder technical review — founderReviewedDate set accordingly.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'hilbertraum',
  name: 'HilbertRaum',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['win', 'mac', 'linux'], // macOS build is Apple Silicon (arm64) only per the current GitHub release assets — no Intel Mac build found
  worksWith: null, // bundles its own model runtime (llama.cpp/whisper.cpp sidecars) rather than connecting to external backends like Ollama — not researched as a "connects to X" client
  engine: 'builtin',
  license: 'GPL-3.0-or-later',
  price: 'free',
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true }, // per github.com/HilbertraumAI/HilbertRaum README: "Minimum RAM: 8 GB", GPU optional/CPU-only supported, verified 2026-09-25
  stars: 80, // per GitHub repository page, verified 2026-09-25
  addedDate: '2026-09-25',
  status: 'listed',
  uses: ['chat', 'docs', 'audio'],
  url: 'hilbertraum.ai',
  storeLinks: {
    github: 'https://github.com/HilbertraumAI/HilbertRaum',
    web: 'https://hilbertraum.ai',
  },
  tagline: {
    en: 'Portable, offline AI workspace for chat and your own documents',
    de: 'Portabler, offline laufender KI-Arbeitsbereich für Chat und eigene Dokumente',
    fr: "Espace de travail IA portable et hors ligne pour le chat et vos documents",
    ja: 'チャットと自分の文書のための、オフラインで動くポータブルAIワークスペース',
    zh: '可移动、离线运行的AI工作空间，支持聊天与文档问答',
    es: 'Espacio de trabajo de IA portátil y offline para chatear y consultar tus documentos',
    pt: 'Espaço de trabalho de IA portátil e offline para chat e seus próprios documentos',
    ar: 'مساحة عمل ذكاء اصطناعي محمولة تعمل دون اتصال للدردشة ومستنداتك الخاصة',
    ko: '채팅과 내 문서 작업을 위한 휴대용 오프라인 AI 작업 공간',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-25;
  // a missing key = not stated there, never false. ollama/customEndpoint/mcp left unset — HilbertRaum
  // bundles its own runtime rather than documenting a connection to Ollama or a custom OpenAI-compatible
  // endpoint as a client, and MCP support is not mentioned anywhere in the README or site.
  compare: { builtInEngine: true, fileChat: true, voice: true },
  lastVerifiedDate: '2026-09-25',
  reviewSlug: 'hilbertraum-review',
  pqReview: {
    date: '2026-09-25',
    version: '0.1.61',
    versionSourceUrl: 'https://github.com/HilbertraumAI/HilbertRaum/releases',
  },
  verdict: 'Best for privacy-conscious users who want one portable, no-install app for offline chat, local document Q&A, and translation on their own hardware; limited by no dedicated mobile app and no Intel Mac build yet.',
  founder: {
    who: {
      en: 'Vladimir Tosovic, HilbertraumAI',
      de: 'Vladimir Tosovic, HilbertraumAI',
      fr: 'Vladimir Tosovic, HilbertraumAI',
      ja: 'Vladimir Tosovic、HilbertraumAI',
      zh: 'Vladimir Tosovic,HilbertraumAI',
      es: 'Vladimir Tosovic, HilbertraumAI',
      pt: 'Vladimir Tosovic, HilbertraumAI',
      ar: 'Vladimir Tosovic، HilbertraumAI',
      ko: 'Vladimir Tosovic, HilbertraumAI',
    },
    // The statement's own opening idea, verbatim; used where the full quote isn't shown (copy-as-text).
    why: {
      en: 'We want to make local AI as easy as possible — without having to deal with runtimes, quantization, or model files. In the best case, you just plug in a USB stick and get started.',
      de: 'Wir wollen lokale KI so einfach wie möglich machen — ohne dass man sich mit Runtimes, Quantisierungen oder Modelldateien auseinandersetzen muss. Im besten Fall steckt man einfach einen USB-Stick ein und fängt an.',
      fr: 'Nous voulons rendre l\'IA locale aussi simple que possible — sans avoir à se soucier des moteurs d\'exécution, de la quantification ou des fichiers de modèles. Dans l\'idéal, il suffit de brancher une clé USB pour commencer.',
      ja: '私たちは、ランタイムや量子化、モデルファイルを意識する必要のない、できる限りシンプルなローカルAIを実現したいと考えています。理想を言えば、USBスティックを挿すだけで使い始められることです。',
      zh: '我们希望让本地AI尽可能简单——无需处理运行时、量化或模型文件。理想情况下,只需插入一个USB闪存盘就能开始使用。',
      es: 'Queremos hacer que la IA local sea lo más sencilla posible, sin tener que lidiar con runtimes, cuantización o archivos de modelos. Lo ideal es simplemente conectar una memoria USB y empezar.',
      pt: 'Queremos tornar a IA local o mais simples possível, sem precisar lidar com runtimes, quantização ou arquivos de modelo. No melhor cenário, basta conectar um pendrive USB e começar.',
      ar: 'نريد أن نجعل الذكاء الاصطناعي المحلي بسيطًا قدر الإمكان، دون الحاجة للتعامل مع بيئات التشغيل أو الضغط الكمي أو ملفات النماذج. في أفضل الحالات، يكفي توصيل عصا USB والبدء مباشرة.',
      ko: '저희는 런타임, 양자화, 모델 파일을 신경 쓸 필요 없이 로컬 AI를 최대한 간단하게 만들고 싶습니다. 가장 이상적인 방법은 USB 스틱을 꽂기만 하면 바로 시작할 수 있는 것입니다.',
    },
    pullQuote: {
      en: 'We want to make local AI as easy as possible — without having to deal with runtimes, quantization, or model files. In the best case, you just plug in a USB stick and get started.',
      de: 'Wir wollen lokale KI so einfach wie möglich machen — ohne dass man sich mit Runtimes, Quantisierungen oder Modelldateien auseinandersetzen muss. Im besten Fall steckt man einfach einen USB-Stick ein und fängt an.',
      fr: 'Nous voulons rendre l\'IA locale aussi simple que possible — sans avoir à se soucier des moteurs d\'exécution, de la quantification ou des fichiers de modèles. Dans l\'idéal, il suffit de brancher une clé USB pour commencer.',
      ja: '私たちは、ランタイムや量子化、モデルファイルを意識する必要のない、できる限りシンプルなローカルAIを実現したいと考えています。理想を言えば、USBスティックを挿すだけで使い始められることです。',
      zh: '我们希望让本地AI尽可能简单——无需处理运行时、量化或模型文件。理想情况下,只需插入一个USB闪存盘就能开始使用。',
      es: 'Queremos hacer que la IA local sea lo más sencilla posible, sin tener que lidiar con runtimes, cuantización o archivos de modelos. Lo ideal es simplemente conectar una memoria USB y empezar.',
      pt: 'Queremos tornar a IA local o mais simples possível, sem precisar lidar com runtimes, quantização ou arquivos de modelo. No melhor cenário, basta conectar um pendrive USB e começar.',
      ar: 'نريد أن نجعل الذكاء الاصطناعي المحلي بسيطًا قدر الإمكان، دون الحاجة للتعامل مع بيئات التشغيل أو الضغط الكمي أو ملفات النماذج. في أفضل الحالات، يكفي توصيل عصا USB والبدء مباشرة.',
      ko: '저희는 런타임, 양자화, 모델 파일을 신경 쓸 필요 없이 로컬 AI를 최대한 간단하게 만들고 싶습니다. 가장 이상적인 방법은 USB 스틱을 꽂기만 하면 바로 시작할 수 있는 것입니다.',
    },
    providedDate: '2026-09-25',
    // Verbatim statement from Vladimir Tosovic (German original, via email; other languages are
    // translations), same text as the "From the Maker" section in the review article.
    fullQuote: {
      en: [
        'We want to make local AI as easy as possible. As AI use grows, protecting private data and documents matters more every day. That\'s why we built HilbertRaum: offline AI for everyone, without having to deal with runtimes, quantization, or model files.',
        'In the best case, you just plug in a USB stick and get started. We\'re currently preparing exactly that: a ready-to-use stick with pre-installed, vetted models.',
        'If you don\'t want to wait, or you\'re a bit more technical, you can download the app for free and run it directly from your own computer or an external drive, with no installation. The app detects your hardware and recommends suitable models, which we curate and benchmark ourselves beforehand. The software is, and will remain, free and open source. If you\'d rather have the ready-made stick, you can join the waitlist at hilbertraum.ai.',
      ],
      de: [
        'Wir wollen lokale KI so einfach wie möglich machen. Mit zunehmender Nutzung von KI wird es immer wichtiger, private Daten und Dokumente zu schützen. Deshalb haben wir HilbertRaum gebaut: Offline-KI für alle, ohne dass man sich mit Runtimes, Quantisierungen oder Modelldateien auseinandersetzen muss.',
        'Im besten Fall steckt man einfach einen USB-Stick ein und fängt an. Genau so einen fertig eingerichteten Stick mit vorinstallierten, geprüften Modellen bereiten wir gerade vor.',
        'Wer nicht warten will oder technisch etwas versierter ist, lädt die App kostenlos herunter und startet sie direkt vom eigenen Rechner oder von einem externen Laufwerk, ohne Installation. Die App erkennt die Hardware und empfiehlt passende Modelle, die wir vorher selbst kuratieren und benchmarken. Die Software ist und bleibt kostenlos und Open Source. Wer lieber den fertigen Stick möchte, kann sich auf hilbertraum.ai in die Warteliste eintragen.',
      ],
      fr: [
        'Nous voulons rendre l\'IA locale aussi simple que possible. Avec l\'usage croissant de l\'IA, il devient de plus en plus important de protéger les données et documents privés. C\'est pourquoi nous avons créé HilbertRaum : une IA hors ligne pour tous, sans avoir à se soucier des moteurs d\'exécution, de la quantification ou des fichiers de modèles.',
        'Dans l\'idéal, il suffit de brancher une clé USB pour commencer. C\'est exactement ce que nous préparons actuellement : une clé prête à l\'emploi avec des modèles préinstallés et vérifiés.',
        'Pour ceux qui ne veulent pas attendre, ou qui sont un peu plus à l\'aise techniquement, il suffit de télécharger l\'application gratuitement et de la lancer directement depuis son ordinateur ou un disque externe, sans installation. L\'application détecte le matériel et recommande des modèles adaptés, que nous curons et testons nous-mêmes au préalable. Le logiciel est et restera gratuit et open source. Ceux qui préfèrent la clé prête à l\'emploi peuvent s\'inscrire sur la liste d\'attente sur hilbertraum.ai.',
      ],
      ja: [
        '私たちは、ローカルAIをできる限りシンプルにしたいと考えています。AIの利用が広がるにつれ、個人データや文書を守ることはますます重要になっています。だからこそ私たちはHilbertRaumを作りました。ランタイムや量子化、モデルファイルを意識する必要のない、誰のためのオフラインAIです。',
        '理想を言えば、USBスティックを挿すだけで使い始められることです。まさにそれを実現するため、事前インストール済みの検証済みモデルを備えた、そのまま使えるスティックを現在準備しています。',
        '待ちたくない方や、技術に多少詳しい方は、アプリを無料でダウンロードし、自分のパソコンや外付けドライブから直接、インストールなしで起動できます。アプリはハードウェアを検出し、事前に私たち自身が選定・ベンチマークした適切なモデルを推奨します。ソフトウェアは今後も無料・オープンソースのままです。完成済みのスティックを希望する方は、hilbertraum.aiのウェイトリストに登録できます。',
      ],
      zh: [
        '我们希望让本地AI尽可能简单易用。随着AI使用的增加,保护个人数据和文档变得越来越重要。这正是我们打造HilbertRaum的原因:面向所有人的离线AI,无需处理运行时、量化或模型文件。',
        '理想情况下,只需插入一个USB闪存盘就能开始使用。我们目前正在准备的正是这样一个开箱即用、预装了经过验证模型的闪存盘。',
        '如果不想等待,或者技术水平较高,也可以免费下载应用,直接从自己的电脑或外部驱动器运行,无需安装。应用会检测硬件并推荐合适的模型,这些模型都是我们事先自行筛选和基准测试过的。软件现在是、并将永远是免费和开源的。如果更喜欢现成的闪存盘,可以在hilbertraum.ai加入等候名单。',
      ],
      es: [
        'Queremos hacer que la IA local sea lo más sencilla posible. Con el uso creciente de la IA, proteger los datos y documentos privados es cada vez más importante. Por eso creamos HilbertRaum: IA offline para todos, sin tener que lidiar con runtimes, cuantización o archivos de modelos.',
        'Lo ideal es simplemente conectar una memoria USB y empezar. Precisamente eso es lo que estamos preparando: una memoria lista para usar con modelos preinstalados y verificados.',
        'Quien no quiera esperar, o tenga algo más de conocimientos técnicos, puede descargar la app gratis y ejecutarla directamente desde su propio equipo o una unidad externa, sin instalación. La app detecta el hardware y recomienda los modelos adecuados, que nosotros mismos seleccionamos y probamos de antemano. El software es, y seguirá siendo, gratuito y de código abierto. Quien prefiera la memoria ya lista puede apuntarse a la lista de espera en hilbertraum.ai.',
      ],
      pt: [
        'Queremos tornar a IA local o mais simples possível. Com o uso crescente da IA, proteger dados e documentos privados se torna cada vez mais importante. Por isso criamos o HilbertRaum: IA offline para todos, sem precisar lidar com runtimes, quantização ou arquivos de modelo.',
        'No melhor cenário, basta conectar um pendrive USB e começar. É exatamente isso que estamos preparando: um pendrive pronto para uso, com modelos pré-instalados e verificados.',
        'Quem não quiser esperar, ou for um pouco mais experiente tecnicamente, pode baixar o app gratuitamente e executá-lo diretamente do próprio computador ou de um disco externo, sem instalação. O app detecta o hardware e recomenda modelos adequados, que nós mesmos selecionamos e testamos previamente. O software é, e continuará sendo, gratuito e de código aberto. Quem preferir o pendrive pronto pode entrar na lista de espera em hilbertraum.ai.',
      ],
      ar: [
        'نريد أن نجعل الذكاء الاصطناعي المحلي بسيطًا قدر الإمكان. مع تزايد استخدام الذكاء الاصطناعي، تزداد أهمية حماية البيانات والمستندات الخاصة يومًا بعد يوم. لهذا بنينا HilbertRaum: ذكاء اصطناعي يعمل دون اتصال للجميع، دون الحاجة للتعامل مع بيئات التشغيل (runtimes) أو الضغط الكمي (quantization) أو ملفات النماذج.',
        'في أفضل الحالات، يكفي توصيل عصا USB والبدء مباشرة. وهذا بالضبط ما نُجهّزه حاليًا: عصا جاهزة للاستخدام مثبَّت عليها مسبقًا نماذج تم التحقق منها.',
        'من لا يريد الانتظار، أو من لديه خبرة تقنية أكبر بقليل، يمكنه تنزيل التطبيق مجانًا وتشغيله مباشرة من جهازه الخاص أو من قرص خارجي، دون تثبيت. يكتشف التطبيق العتاد ويوصي بالنماذج المناسبة التي نقوم نحن أنفسنا باختيارها واختبارها مسبقًا. البرنامج مجاني ومفتوح المصدر وسيبقى كذلك. من يفضّل العصا الجاهزة يمكنه التسجيل في قائمة الانتظار على hilbertraum.ai.',
      ],
      ko: [
        '저희는 로컬 AI를 최대한 간단하게 만들고 싶습니다. AI 사용이 늘어날수록 개인 데이터와 문서를 보호하는 일이 점점 더 중요해지고 있습니다. 그래서 저희는 HilbertRaum을 만들었습니다. 런타임, 양자화, 모델 파일을 신경 쓸 필요 없는 모두를 위한 오프라인 AI입니다.',
        '가장 이상적인 방법은 USB 스틱을 꽂기만 하면 바로 시작할 수 있는 것입니다. 지금 저희가 준비하고 있는 것이 바로 그것입니다. 검증된 모델이 미리 설치된, 바로 쓸 수 있는 USB 스틱입니다.',
        '기다리고 싶지 않거나 기술에 조금 더 익숙한 분이라면, 앱을 무료로 다운로드해 별도의 설치 없이 자신의 컴퓨터나 외장 드라이브에서 바로 실행할 수 있습니다. 앱이 하드웨어를 감지해 적합한 모델을 추천해 주며, 이 모델들은 저희가 사전에 직접 선별하고 벤치마크한 것입니다. 소프트웨어는 지금도 앞으로도 무료 오픈소스로 유지됩니다. 완제품 스틱을 원하시는 분은 hilbertraum.ai에서 대기자 명단에 등록하실 수 있습니다.',
      ],
    },
  },
  // Fact-check credit, not a repeat of the quote above: Vladimir Tosovic's 2026-09-25 email corrected
  // this entry's technical claims (dictation via Whisper, not text-to-speech; the simpler portable/USB
  // path), which is itself a founder technical review of the listing's accuracy.
  founderReviewedDate: '2026-09-25',
  changelog: [
    {
      date: '2026-09-25',
      note: 'Corrected the speech feature (dictation via Whisper, not text-to-speech) and simplified the portable/USB description (copy the portable build and pick a model in the app; the prepare-drive script is an optional shortcut, not the normal path); added the maker\'s founder quote and a note about an upcoming pre-configured USB stick (same free/open-source app, priced separately, waitlist at hilbertraum.ai) — corrections and quote supplied by Vladimir Tosovic (HilbertraumAI) by email 2026-09-25.',
      source: 'founder',
    },
  ],
}
