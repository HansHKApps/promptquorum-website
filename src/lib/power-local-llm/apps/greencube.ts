// Local AI App Directory — GreenCube (layer: desktop, Windows)
// Added 2026-10-30 after the maker (Hector Gras, greencube.app) corresponded with the operator about the GPT4All review/guide.
// Founder-reviewed 2026-11-06: Hector Gras read the finished review, called it fair and clear, and sent corrections (version, Diagrams shipped, installer name/size,
// Sprout tier, purchase-page version) plus a note for the page; that note is the `founder` block below.
// Verified 2026-10-30 against: greencube.app (home, /buy, /what-you-get, /your-data, /download), the privacy policy at legal.greencube.app/privacy
// (effective 2026-10-13: controller Edunexis SL, Cartagena, Spain), the installer https://models.greencube.app/downloads/latest/GreenCube-setup.exe
// (14,118,576 bytes, Last-Modified 2026-08-11) and the updater feed https://models.greencube.app/updates/latest.json (version 0.1.47, pub_date 2026-10-17,
// windows-x86_64 only). The /buy page's JSON-LD says softwareVersion "1.0", the updater feed says 0.1.47: the feed is the build users actually receive, so it is recorded.
// The only public GitHub repository of the greencube-ai organisation is the website (greencube-site); the app itself has no public source -> closed source.
// Re-verified 2026-11-06: updater feed now version 0.1.49 (pub_date 2026-11-05); installer https://models.greencube.app/downloads/latest/GreenCube-windows-x64-setup.exe is 36,819,648 bytes.
// Last upstream update: 2026-11-05 (updater feed) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'greencube',
  name: 'GreenCube',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'local', // site + policy: chats, files and images stay on the PC; internet only for sign-in, the model download, updates and the optional Online (web search) switch
  platforms: ['win'], // Windows 10/11 only; the site mentions no macOS or Linux build
  worksWith: null,
  engine: 'builtin', // ships its own runtime and downloads Gemma 4 E2B / E4B depending on the hardware tier; the runtime is not named in any public source
  license: 'Closed source',
  price: 'paid', // EUR 9.99 / USD 9.99 once, no subscription; 15-day full refund (site FAQ, 2026-10-30)
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true, variesByModel: true }, // 8 GB RAM minimum; works without a graphics card, only slower; image generation needs 12 GB RAM
  stars: null,
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['chat', 'code', 'image', 'docs'],
  url: 'greencube.app',
  storeLinks: {
    web: 'https://greencube.app',
  },
  installEffort: 'installer',
  installEvidence: 'Windows installer GreenCube-windows-x64-setup.exe (36.8 MB) linked from greencube.app/download; updater feed lists GreenCube_0.1.49_x64-setup.exe; no terminal step; sign-in and a model download of a few GB on first run; checked 2026-11-06',
  installOn: ['win'],
  tagline: {
    en: 'Paid-once Windows desktop AI that chats, codes, makes images and reads files with Gemma 4 on your own PC, offline after the first download',
    de: 'Einmalig bezahlte Windows-Desktop-KI, die mit Gemma 4 auf dem eigenen PC chattet, programmiert, Bilder erzeugt und Dateien liest – nach dem ersten Download offline',
    fr: 'IA de bureau Windows payée une seule fois, qui discute, code, crée des images et lit des fichiers avec Gemma 4 sur votre PC, hors ligne après le premier téléchargement',
    ja: '買い切りのWindowsデスクトップAI。自分のPC上のGemma 4でチャット、コード、画像生成、ファイル読み取りを行い、初回ダウンロード後はオフラインで動作',
    zh: '一次付费的 Windows 桌面 AI，使用本机上的 Gemma 4 进行聊天、编程、生成图像和读取文件，首次下载后可离线使用',
    es: 'IA de escritorio para Windows de pago único que chatea, programa, crea imágenes y lee archivos con Gemma 4 en tu propio PC, sin conexión tras la primera descarga',
    pt: 'IA de desktop para Windows com pagamento único que conversa, programa, cria imagens e lê arquivos com o Gemma 4 no seu próprio PC, offline após o primeiro download',
    ar: 'ذكاء اصطناعي لسطح مكتب Windows بدفعة واحدة، يدردش ويبرمج وينشئ الصور ويقرأ الملفات عبر Gemma 4 على جهازك، ويعمل دون اتصال بعد التنزيل الأول',
    ko: '한 번 결제하는 Windows 데스크톱 AI, 내 PC의 Gemma 4로 채팅·코딩·이미지 생성·파일 읽기를 하며 첫 다운로드 후에는 오프라인으로 동작',
  },
  reviewSlug: 'greencube-review',
  pqReview: {
    date: '2026-11-06',
    version: '0.1.49',
    versionSourceUrl: 'https://models.greencube.app/updates/latest.json',
  },
  // Comparison attributes from the site, FAQ pages and privacy policy on 2026-10-30; a missing key = not stated there, never false.
  // Not set because the sources say nothing: ollama, customEndpoint, mcp, openaiApi.
  compare: { builtInEngine: true, fileChat: true },
  verdict: 'Best for Windows 10/11 users who want a one-time-purchase, no-subscription AI that runs Gemma 4 on their own PC and works offline after the first download; limited by being Windows-only, closed source, a 0.1.x build and by the maker\'s own admission less capable than the biggest cloud models, and PromptQuorum has not run it.',
  lastVerifiedDate: '2026-11-06',
  lastUpstreamUpdate: '2026-11-05', // updater feed pub_date for version 0.1.49, read 2026-11-06
  lastUpstreamUpdateSource: 'https://models.greencube.app/updates/latest.json',
  founderReviewedDate: '2026-11-06', // Hector Gras (founder) read the finished review, called it fair and clear and sent corrections plus a note for the page on 2026-11-06; drives the Founder-reviewed banner + star
  founder: {
    who: {
      en: 'Hector Gras, founder',
      de: 'Hector Gras, Gründer',
      es: 'Hector Gras, fundador',
      fr: 'Hector Gras, fondateur',
      ja: 'Hector Gras氏、創業者',
      zh: 'Hector Gras，创始人',
      pt: 'Hector Gras, fundador',
      ar: 'Hector Gras، مؤسس التطبيق',
      ko: 'Hector Gras, 창업자',
    },
    providedDate: '2026-11-06',
    why: {
      en: 'I\'m 16, and I started GreenCube because I think AI is meant to be owned, not rented.',
      de: 'Ich bin 16 und habe GreenCube gegründet, weil KI meiner Meinung nach besessen und nicht gemietet werden sollte.',
      es: 'Tengo 16 años y empecé GreenCube porque creo que la IA está para tenerla en propiedad, no para alquilarla.',
      fr: 'J\'ai 16 ans et j\'ai lancé GreenCube parce que je pense que l\'IA est faite pour être possédée, pas louée.',
      ja: '私は16歳で、AIは借りるものではなく所有するものだと考えてGreenCubeを始めました。',
      zh: '我今年 16 岁，创办 GreenCube 是因为我认为 AI 应该被拥有，而不是被租用。',
      pt: 'Tenho 16 anos e comecei o GreenCube porque acredito que a IA deve ser possuída, não alugada.',
      ar: 'عمري 16 عامًا، وبدأت GreenCube لأنني أؤمن بأن الذكاء الاصطناعي خُلق ليُمتلك لا ليُستأجر.',
      ko: '저는 16살이고, AI는 빌려 쓰는 것이 아니라 소유하는 것이어야 한다고 생각해서 GreenCube를 시작했습니다.',
    },
    fullQuote: {
      en: [
        'I\'m 16, and I started GreenCube because I think AI is meant to be owned, not rented. In the 1970s, computers were giant machines that a few companies like IBM owned, and everyone else rented time on them. Then Apple put a personal computer on ordinary people\'s desks. Today AI lives in data centres, and you pay every month to borrow it, with limits. GreenCube is my bet that it moves onto your own PC: you pay once, it works offline, and what you write stays yours. Next, we\'re making the study tools better and the app faster on everyday computers.',
      ],
      de: [
        'Ich bin 16 und habe GreenCube gegründet, weil KI meiner Meinung nach besessen und nicht gemietet werden sollte. In den 1970er-Jahren waren Computer riesige Maschinen, die einigen wenigen Firmen wie IBM gehörten, und alle anderen mieteten Rechenzeit darauf. Dann stellte Apple einen Personal Computer auf die Schreibtische gewöhnlicher Menschen. Heute lebt KI in Rechenzentren, und man zahlt jeden Monat, um sie sich auszuleihen – mit Limits. GreenCube ist meine Wette darauf, dass sie auf den eigenen PC wandert: Man zahlt einmal, es funktioniert offline, und was man schreibt, bleibt einem selbst. Als Nächstes verbessern wir die Lernwerkzeuge und machen die App auf normalen Computern schneller.',
      ],
      es: [
        'Tengo 16 años y empecé GreenCube porque creo que la IA está para tenerla en propiedad, no para alquilarla. En los años 70, los equipos eran máquinas gigantes que pertenecían a unas pocas empresas como IBM, y todos los demás alquilaban tiempo en ellas. Luego Apple puso un PC personal en los escritorios de la gente corriente. Hoy la IA vive en centros de datos y se paga cada mes por tomarla prestada, con límites. GreenCube es mi apuesta de que pase a tu propio PC: pagas una vez, funciona sin conexión y lo que escribes sigue siendo tuyo. Lo siguiente es mejorar las herramientas de estudio y hacer la app más rápida en equipos cotidianos.',
      ],
      fr: [
        'J\'ai 16 ans et j\'ai lancé GreenCube parce que je pense que l\'IA est faite pour être possédée, pas louée. Dans les années 1970, les ordinateurs étaient des machines géantes appartenant à quelques entreprises comme IBM, et tous les autres y louaient du temps de calcul. Puis Apple a posé un ordinateur personnel sur le bureau de monsieur Tout-le-monde. Aujourd\'hui, l\'IA vit dans des centres de données et on paie chaque mois pour l\'emprunter, avec des limites. GreenCube est mon pari qu\'elle s\'installe sur votre propre PC : vous payez une fois, elle fonctionne hors ligne et ce que vous écrivez reste à vous. Prochaine étape : améliorer les outils d\'étude et rendre l\'application plus rapide sur les ordinateurs de tous les jours.',
      ],
      ja: [
        '私は16歳で、AIは借りるものではなく所有するものだと考えてGreenCubeを始めました。1970年代、コンピューターはIBMのような少数の企業が所有する巨大な機械で、ほかの人は使用時間を借りていました。そこにAppleが、普通の人の机にパーソナルコンピューターを置きました。今のAIはデータセンターにあり、毎月お金を払って、制限付きで借りています。GreenCubeは、それを自分のPCに移すという私の挑戦です。支払いは一度きりで、オフラインで動き、書いたものは自分のものです。次は、学習ツールの改善と、普通のPCでのアプリの高速化に取り組みます。',
      ],
      zh: [
        '我今年 16 岁，创办 GreenCube 是因为我认为 AI 应该被拥有，而不是被租用。20 世纪 70 年代，电脑是少数几家公司（如 IBM）拥有的庞然大物，其他人只能租用机时。后来 Apple 把个人电脑放到了普通人的桌上。如今 AI 住在数据中心里，你每月付费借用，还有各种限制。GreenCube 是我的一次尝试：让 AI 搬到你自己的电脑上——一次付费，离线可用，你写的内容始终属于你。接下来，我们会改进学习工具，并让应用在日常电脑上运行得更快。',
      ],
      pt: [
        'Tenho 16 anos e comecei o GreenCube porque acredito que a IA deve ser possuída, não alugada. Nos anos 1970, os computadores eram máquinas gigantes que pertenciam a poucas empresas, como a IBM, e todo mundo alugava tempo nelas. Então a Apple colocou um computador pessoal na mesa de pessoas comuns. Hoje a IA vive em data centers e você paga todo mês para tomá-la emprestada, com limites. O GreenCube é a minha aposta de que ela vá para o seu próprio PC: você paga uma vez, funciona offline e o que você escreve continua sendo seu. Em seguida, vamos melhorar as ferramentas de estudo e deixar o app mais rápido em computadores comuns.',
      ],
      ar: [
        'عمري 16 عامًا، وبدأت GreenCube لأنني أؤمن بأن الذكاء الاصطناعي خُلق ليُمتلك لا ليُستأجر. في السبعينيات كانت الحواسيب آلات ضخمة تملكها شركات قليلة مثل IBM، وكان الجميع يستأجرون وقتًا عليها. ثم وضعت Apple حاسوبًا شخصيًا على مكاتب الناس العاديين. واليوم يعيش الذكاء الاصطناعي في مراكز البيانات، وتدفع كل شهر لتستعيره، مع حدود. GreenCube هو رهاني على أن ينتقل إلى جهازك الخاص: تدفع مرة واحدة، ويعمل دون اتصال، وما تكتبه يبقى ملكك. وفي الخطوة التالية نحسّن أدوات الدراسة ونجعل التطبيق أسرع على الحواسيب اليومية.',
      ],
      ko: [
        '저는 16살이고, AI는 빌려 쓰는 것이 아니라 소유하는 것이어야 한다고 생각해서 GreenCube를 시작했습니다. 1970년대의 컴퓨터는 IBM 같은 소수 기업이 소유한 거대한 기계였고, 나머지 사람들은 그 사용 시간을 빌렸습니다. 그러다 Apple이 평범한 사람들의 책상 위에 개인용 컴퓨터를 올려놓았습니다. 오늘날 AI는 데이터 센터에 있고, 사람들은 매달 비용을 내고 제한을 받으며 빌려 씁니다. GreenCube는 그것이 여러분의 PC로 옮겨 온다는 저의 도전입니다. 한 번만 결제하면 오프라인에서 작동하고, 직접 쓴 내용은 계속 여러분의 것입니다. 다음으로는 학습 도구를 개선하고 일반 컴퓨터에서 앱을 더 빠르게 만들겠습니다.',
      ],
    },
  },
}
