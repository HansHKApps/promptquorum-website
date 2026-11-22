// Local AI App Directory — Rin Chat: free desktop app (Windows, Linux) for AI roleplay and character chat; connects to local backends (Ollama, KoboldCpp, LM Studio) or any OpenAI-compatible API (layer: desktop roleplay frontend)
// Added 2026-11-21 after an email from the maker (Route404, Rin Chat LLC); the maker asked for no link or sponsored post. Facts verified 2026-11-21 against rin.chat
// (home, download, changelog, features, quickstart, choosing-a-provider, privacy policy, terms of service effective 2026-11-12, license effective 2026-10-24, contact).
// Latest version 1.0.4, dated 20 November 2026 in the changelog; the download links /updates/{windows,linux-appimage,linux-deb}-latest redirect to RinChat_1.0.4_* files whose
// Last-Modified header is 2026-11-20 (checked 2026-11-21), so the download page text "Current beta build: 0.5.7" is stale. The site calls the app an "open beta". Stale warning OFF.
// Platforms: Windows 10/11 64-bit installer (.exe, NOT code-signed: SmartScreen warns), Linux x86-64 AppImage and .deb. macOS "in progress, no date". Android is mentioned in the privacy
// policy and terms ("for computers and Android phones") but the maker's email says "coming soon" and no Android download or store listing exists, so it is NOT listed in platforms.
// License: proprietary, "free of charge for personal, non-commercial use" (rin.chat/license). Price: homepage says free with every feature unlocked; the changelog and privacy policy also
// mention an optional "Rin Chat subscription" (fast hosted model) with no price or pricing page found, so the review hedges.
// Data: AES-256-GCM encrypted cards and chats on the user's machine (features/privacy). Usage statistics (random installation ID, version, OS, architecture, package format, language)
// are sent at install and launch and, per the terms, "cannot be switched off"; further statistics are optional. Prompts go straight from the device to the chosen provider.
// Source code: none public (no GitHub repo found). Not independently checked: encryption, traffic, any feature. No hands-on test by PromptQuorum.
// HQ country: US. Rin Chat LLC, 7533 S Center View Ct #6256, West Jordan, UT 84084 (contact page, privacy policy, terms section 13: laws of the State of Utah). Hosting is in the Netherlands.

// 2026-11-22 maker round (first founder review): the maker (no name given) read the finished review, called it fair and careful and sent corrections + a note.
// Applied one-to-one, attributed (owner rule: believe the developer): optional subscription = hosted-model service, not publicly announced, likely ~1 month away, never paywalls
// Rin Chat or becomes required (maker is fine with it being mentioned); phones/tablets work today via built-in Remote Access (serves the app to the phone browser); Android app is in
// closed testing on Google Play, public "within two weeks" (maker, 2026-11-22; NOT in platforms until a store listing exists); 7 interface languages (their FAQ said 5, fixed);
// encryption check without source (vault folder, aicc.db SQLCipher, per-item AES-256-GCM .blob files, key in OS keychain; NOT run by PromptQuorum); memory features; import of
// .charx/.aicc bundles, themes, generators, document styles. founderReviewedDate set on the owner's instruction + the maker's explicit "fair and careful".

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'rin-chat',
  name: 'Rin Chat',
  categories: ['roleplay-companions'],
  interfaces: ['desktop'],
  locality: 'hybrid', // runs on your PC but needs a model backend: local (Ollama, KoboldCpp, LM Studio) or any OpenAI-compatible cloud API; mandatory usage statistics at install and launch
  platforms: ['win', 'linux'], // Windows 10/11 64-bit; Linux x86-64 AppImage and .deb; macOS in progress; Android announced by the maker but not released
  worksWith: ['Ollama', 'KoboldCpp', 'LM Studio', 'OpenAI API', 'OpenRouter'], // features + choosing-a-provider pages: any OpenAI-compatible endpoint; presets for Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek, Grok
  engine: 'external', // "Rin Chat does not ship a model"; it can install Ollama or download and run KoboldCpp for the user
  license: 'Proprietary (free for personal use)', // rin.chat/license: proprietary, free of charge for personal, non-commercial use
  price: 'free', // homepage: "Free, with every feature unlocked"; optional subscription mentioned in the privacy policy has no published price
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // frontend only; hardware needs depend on the backend and model you connect; no minimum stated for the app
  stars: null, // no public source repository
  addedDate: '2026-11-21',
  status: 'listed',
  uses: ['chat'],
  url: 'rin.chat',
  storeLinks: {
    web: 'https://rin.chat',
  },
  installEffort: 'installer',
  installEvidence: 'rin.chat/download checked 2026-11-21: Windows installer (RinChat_1.0.4_x64-setup.exe, not code-signed, SmartScreen warns), Linux AppImage (RinChat_1.0.4_amd64.AppImage) and .deb (RinChat_1.0.4_amd64.deb) via the /updates/*-latest links; app updates itself; a model backend is set up separately or installed from inside the app',
  tagline: {
    en: 'Free desktop roleplay app with game-master dice and stats and a built-in card forge, using local backends or any OpenAI-compatible API',
    de: 'Kostenlose Desktop-App für Rollenspiel mit Würfeln und Werten für Spielleiter und einer integrierten Karten-Schmiede, mit lokalen Backends oder jeder OpenAI-kompatiblen API',
    fr: 'Application de bureau gratuite de jeu de rôle avec dés et statistiques de maître du jeu et forge de cartes intégrée, avec des backends locaux ou toute API compatible OpenAI',
    ja: 'ゲームマスター用のダイスとステータス、内蔵のカードフォージを備えた無料のロールプレイ用デスクトップアプリ。ローカルバックエンドまたはOpenAI互換APIに対応',
    zh: '免费桌面角色扮演应用，带游戏主持人骰子与属性机制及内置角色卡锻造功能，可连接本地后端或任何兼容 OpenAI 的 API',
    es: 'Aplicación de escritorio gratuita de rol con dados y estadísticas de director de juego y una forja de tarjetas integrada, con backends locales o cualquier API compatible con OpenAI',
    pt: 'Aplicativo de desktop gratuito de roleplay com dados e estatísticas de mestre de jogo e uma forja de cartões integrada, com backends locais ou qualquer API compatível com OpenAI',
    ar: 'تطبيق سطح مكتب مجاني للعب الأدوار مع زهر وإحصاءات لمدير اللعبة وورشة بطاقات مدمجة، مع واجهات محلية أو أي واجهة متوافقة مع OpenAI',
    ko: '게임 마스터용 주사위와 능력치, 내장 카드 포지를 갖춘 무료 롤플레이 데스크톱 앱으로, 로컬 백엔드 또는 OpenAI 호환 API와 연결됩니다',
  },
  // Comparison attributes from the maker's features page on 2026-11-21: lorebooks (incl. standalone worldbooks, World info JSON import/export) and group chats are stated; nothing else is defined for this segment.
  compare: { lorebooks: true, groupChats: true },
  reviewSlug: 'rin-chat-review',
  pqReview: {
    date: '2026-11-21',
    version: '1.0.4',
    versionSourceUrl: 'https://rin.chat/changelog',
  },
  verdict: 'Best for Windows and Linux roleplayers who want a ready-made desktop app that opens SillyTavern and AI Character Cards character cards, and adds game-master dice, stats and a card forge, with, per the maker, encrypted storage on the PC and local backends or any OpenAI-compatible API; limited by closed source, mandatory usage statistics, an unsigned Windows installer, no macOS build, an Android app that the maker says is still in closed testing, an open-beta label and claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-21',
  hqCountry: 'US', // Rin Chat LLC, West Jordan, Utah (contact page, privacy policy); terms: laws of the State of Utah
  hqCountrySource: 'https://rin.chat/terms/',
  founderReviewedDate: '2026-11-22', // the maker read the finished review, called it fair and careful and sent corrections plus a note for the page on 2026-11-22 (owner asked for the badge); drives the Founder-reviewed banner + star
  founder: {
    who: {
      en: 'The maker of Rin Chat, Rin Chat LLC',
      de: 'Der Hersteller von Rin Chat, Rin Chat LLC',
      fr: 'Éditeur de Rin Chat, Rin Chat LLC',
      ja: 'Rin Chatの開発元、Rin Chat LLC',
      zh: 'Rin Chat的开发者，Rin Chat LLC',
      es: 'El fabricante de Rin Chat, Rin Chat LLC',
      pt: 'O fabricante do Rin Chat, Rin Chat LLC',
      ar: 'مطوّر Rin Chat، شركة Rin Chat LLC',
      ko: 'Rin Chat 개발사, Rin Chat LLC',
    },
    providedDate: '2026-11-22',
    why: {
      en: 'Built Rin Chat so that people who want to use AI character cards can get a chat app running easily, with a focus on privacy and security and with a better card format, real memory, the Card Forge and Adventure Mode.',
      de: 'Hat Rin Chat gebaut, damit Menschen, die KI-Charakterkarten nutzen wollen, leicht eine Chat-App zum Laufen bekommen – mit Schwerpunkt auf Datenschutz und Sicherheit sowie einem besseren Kartenformat, echtem Gedächtnis, der Karten-Schmiede und dem Abenteuer-Modus.',
      fr: 'A créé Rin Chat pour que ceux qui veulent utiliser des cartes de personnages IA puissent facilement faire fonctionner une application de chat, avec un accent sur la confidentialité et la sécurité et avec un meilleur format de carte, une vraie mémoire, la Forge de cartes et le mode Aventure.',
      ja: 'AIキャラクターカードを使いたい人がチャットアプリを簡単に動かせるようにRin Chatを作りました。プライバシーとセキュリティを重視し、より優れたカード形式、本格的なメモリー、カードフォージ、アドベンチャーモードを備えています。',
      zh: '开发Rin Chat是为了让想使用AI角色卡的人能轻松把聊天应用跑起来，注重隐私与安全，并提供更好的角色卡格式、真正的记忆、角色卡锻造和冒险模式。',
      es: 'Creó Rin Chat para que quienes quieran usar tarjetas de personajes de IA puedan poner en marcha una app de chat con facilidad, con foco en la privacidad y la seguridad y con un mejor formato de tarjeta, memoria de verdad, la Forja de tarjetas y el Modo aventura.',
      pt: 'Criou o Rin Chat para que quem quer usar cartões de personagens de IA consiga colocar um app de chat para funcionar com facilidade, com foco em privacidade e segurança e com um formato de cartão melhor, memória de verdade, a Forja de cartões e o Modo aventura.',
      ar: 'بنى Rin Chat ليتمكن من يريدون استخدام بطاقات شخصيات الذكاء الاصطناعي من تشغيل تطبيق محادثة بسهولة، مع تركيز على الخصوصية والأمان وصيغة بطاقات أفضل وذاكرة حقيقية وCard Forge ووضع المغامرة.',
      ko: 'AI 캐릭터 카드를 쓰고 싶은 사람이 채팅 앱을 쉽게 실행할 수 있도록 Rin Chat을 만들었습니다. 개인정보 보호와 보안에 중점을 두고, 더 나은 카드 형식, 진짜 메모리, 카드 포지, 어드벤처 모드를 갖췄습니다.',
    },
    pullQuote: {
      en: "I built aicharactercards.com, a site for sharing and grading AI character cards, and kept meeting people who wanted to use those cards but couldn't get a chat app running. So I built Rin Chat to fix that: easy to install, with a focus on privacy and security, and to push roleplay forward with a better card format, real memory, the Card Forge and Adventure Mode.",
      de: 'Ich habe aicharactercards.com gebaut, eine Seite zum Teilen und Bewerten von KI-Charakterkarten, und traf immer wieder Menschen, die diese Karten nutzen wollten, aber keine Chat-App zum Laufen bekamen. Also habe ich Rin Chat gebaut, um das zu lösen: leicht zu installieren, mit Schwerpunkt auf Datenschutz und Sicherheit, und um das Rollenspiel voranzubringen – mit einem besseren Kartenformat, echtem Gedächtnis, der Karten-Schmiede und dem Abenteuer-Modus.',
      fr: "J'ai créé aicharactercards.com, un site pour partager et noter des cartes de personnages IA, et je rencontrais sans cesse des gens qui voulaient utiliser ces cartes mais n'arrivaient pas à faire fonctionner une application de chat. J'ai donc créé Rin Chat pour y remédier : facile à installer, centré sur la confidentialité et la sécurité, et pour faire avancer le jeu de rôle avec un meilleur format de carte, une vraie mémoire, la Forge de cartes et le mode Aventure.",
      ja: '私は、AIキャラクターカードを共有・評価するサイトaicharactercards.comを作り、カードを使いたいのにチャットアプリを動かせない人たちに何度も出会いました。それを解決するためにRin Chatを作りました。簡単にインストールでき、プライバシーとセキュリティを重視し、より優れたカード形式、本格的なメモリー、カードフォージ、アドベンチャーモードでロールプレイを前進させます。',
      zh: '我做了aicharactercards.com，一个用于分享和评分AI角色卡的网站，发现很多人想用这些角色卡，却没法把聊天应用跑起来。所以我做了Rin Chat来解决这个问题：易于安装，注重隐私与安全，并以更好的角色卡格式、真正的记忆、角色卡锻造（Card Forge）和冒险模式推动角色扮演向前发展。',
      es: 'Creé aicharactercards.com, un sitio para compartir y valorar tarjetas de personajes de IA, y me encontraba con gente que quería usar esas tarjetas pero no conseguía poner en marcha una app de chat. Así que creé Rin Chat para arreglarlo: fácil de instalar, centrado en la privacidad y la seguridad, y para impulsar el rol con un mejor formato de tarjeta, memoria de verdad, la Forja de tarjetas y el Modo aventura.',
      pt: 'Criei aicharactercards.com, um site para compartilhar e avaliar cartões de personagens de IA, e vivia encontrando pessoas que queriam usar esses cartões, mas não conseguiam colocar um app de chat para funcionar. Então criei o Rin Chat para resolver isso: fácil de instalar, com foco em privacidade e segurança, e para levar o roleplay adiante com um formato de cartão melhor, memória de verdade, a Forja de cartões e o Modo aventura.',
      ar: 'بنيت aicharactercards.com، وهو موقع لمشاركة بطاقات شخصيات الذكاء الاصطناعي وتقييمها، وظللت ألتقي بأشخاص يريدون استخدام هذه البطاقات لكنهم لا يستطيعون تشغيل تطبيق محادثة. فبنيت Rin Chat لحل ذلك: سهل التثبيت، مع تركيز على الخصوصية والأمان، ولدفع لعب الأدوار إلى الأمام بصيغة بطاقات أفضل وذاكرة حقيقية وCard Forge ووضع المغامرة.',
      ko: '저는 AI 캐릭터 카드를 공유하고 평가하는 사이트 aicharactercards.com를 만들었고, 그 카드를 쓰고 싶지만 채팅 앱을 실행하지 못하는 사람들을 계속 만났습니다. 그래서 이를 해결하려고 Rin Chat을 만들었습니다. 설치가 쉽고, 개인정보 보호와 보안에 중점을 두며, 더 나은 카드 형식, 진짜 메모리, 카드 포지, 어드벤처 모드로 롤플레이를 앞으로 나아가게 합니다.',
    },
    fullQuote: {
      en: [
        'I started out moderating the SillyTavern Discord and Reddit and building the first simple installer for SillyTavern (https://github.com/blueprintCoding/sillyTavernSimpleLauncher), then worked with the SillyTavern developers and DeffColony on the SillyTavern Launcher, a command-line installer and updater, before moving on to my own projects.',
        "I built aicharactercards.com, a site for sharing and grading AI character cards, and kept meeting people who wanted to use those cards but couldn't get a chat app running. So I built Rin Chat to fix that: easy to install, with a focus on privacy and security, and to push roleplay forward with a better card format, real memory, the Card Forge and Adventure Mode.",
        "It's just me, self-funded. Next up: Android, macOS, and more immersive cards through document styles and card-carried chat styles.",
      ],
      de: [
        'Ich habe angefangen, den SillyTavern-Discord und -Reddit zu moderieren und den ersten einfachen Installer für SillyTavern zu bauen (https://github.com/blueprintCoding/sillyTavernSimpleLauncher), habe dann mit den SillyTavern-Entwicklern und DeffColony am SillyTavern Launcher gearbeitet, einem Kommandozeilen-Installer und -Updater, und mich danach eigenen Projekten zugewandt.',
        'Ich habe aicharactercards.com gebaut, eine Seite zum Teilen und Bewerten von KI-Charakterkarten, und traf immer wieder Menschen, die diese Karten nutzen wollten, aber keine Chat-App zum Laufen bekamen. Also habe ich Rin Chat gebaut, um das zu lösen: leicht zu installieren, mit Schwerpunkt auf Datenschutz und Sicherheit, und um das Rollenspiel voranzubringen – mit einem besseren Kartenformat, echtem Gedächtnis, der Karten-Schmiede und dem Abenteuer-Modus.',
        'Ich bin allein und finanziere alles selbst. Als Nächstes: Android, macOS und immersivere Karten durch Dokumentstile und Chat-Stile, die in der Karte stecken.',
      ],
      fr: [
        "J'ai commencé par modérer le Discord et le Reddit de SillyTavern et par créer le premier installateur simple de SillyTavern (https://github.com/blueprintCoding/sillyTavernSimpleLauncher), puis j'ai travaillé avec les développeurs de SillyTavern et DeffColony sur le SillyTavern Launcher, un installateur et outil de mise à jour en ligne de commande, avant de passer à mes propres projets.",
        "J'ai créé aicharactercards.com, un site pour partager et noter des cartes de personnages IA, et je rencontrais sans cesse des gens qui voulaient utiliser ces cartes mais n'arrivaient pas à faire fonctionner une application de chat. J'ai donc créé Rin Chat pour y remédier : facile à installer, centré sur la confidentialité et la sécurité, et pour faire avancer le jeu de rôle avec un meilleur format de carte, une vraie mémoire, la Forge de cartes et le mode Aventure.",
        "Je suis seul et je m'autofinance. Prochaines étapes : Android, macOS, et des cartes plus immersives grâce aux styles de documents et aux styles de chat portés par la carte.",
      ],
      ja: [
        '私はSillyTavernのDiscordとRedditのモデレーターとして活動を始め、SillyTavern用の最初のシンプルなインストーラー（https://github.com/blueprintCoding/sillyTavernSimpleLauncher）を作りました。その後、SillyTavernの開発者やDeffColonyと協力して、コマンドラインのインストーラー兼アップデーターであるSillyTavern Launcherを手がけ、自分のプロジェクトへ進みました。',
        '私は、AIキャラクターカードを共有・評価するサイトaicharactercards.comを作り、カードを使いたいのにチャットアプリを動かせない人たちに何度も出会いました。それを解決するためにRin Chatを作りました。簡単にインストールでき、プライバシーとセキュリティを重視し、より優れたカード形式、本格的なメモリー、カードフォージ、アドベンチャーモードでロールプレイを前進させます。',
        '開発は私ひとりで、自己資金です。次はAndroid、macOS、そしてドキュメントスタイルやカードに組み込むチャットスタイルによる、より没入感のあるカードです。',
      ],
      zh: [
        '我最初是SillyTavern的Discord和Reddit的版主，并为SillyTavern制作了第一个简单的安装程序（https://github.com/blueprintCoding/sillyTavernSimpleLauncher），后来与SillyTavern开发者和DeffColony合作开发了SillyTavern Launcher（一个命令行安装与更新工具），然后转向自己的项目。',
        '我做了aicharactercards.com，一个用于分享和评分AI角色卡的网站，发现很多人想用这些角色卡，却没法把聊天应用跑起来。所以我做了Rin Chat来解决这个问题：易于安装，注重隐私与安全，并以更好的角色卡格式、真正的记忆、角色卡锻造（Card Forge）和冒险模式推动角色扮演向前发展。',
        '只有我一个人，自筹资金。接下来是：Android、macOS，以及通过文档样式和随卡携带的聊天样式实现更沉浸的角色卡。',
      ],
      es: [
        'Empecé moderando el Discord y el Reddit de SillyTavern y creando el primer instalador sencillo de SillyTavern (https://github.com/blueprintCoding/sillyTavernSimpleLauncher); después trabajé con los desarrolladores de SillyTavern y DeffColony en el SillyTavern Launcher, un instalador y actualizador de línea de comandos, antes de pasar a mis propios proyectos.',
        'Creé aicharactercards.com, un sitio para compartir y valorar tarjetas de personajes de IA, y me encontraba con gente que quería usar esas tarjetas pero no conseguía poner en marcha una app de chat. Así que creé Rin Chat para arreglarlo: fácil de instalar, centrado en la privacidad y la seguridad, y para impulsar el rol con un mejor formato de tarjeta, memoria de verdad, la Forja de tarjetas y el Modo aventura.',
        'Soy solo yo, con financiación propia. Lo siguiente: Android, macOS y tarjetas más inmersivas mediante estilos de documento y estilos de chat que viajan en la propia tarjeta.',
      ],
      pt: [
        'Comecei moderando o Discord e o Reddit do SillyTavern e criando o primeiro instalador simples do SillyTavern (https://github.com/blueprintCoding/sillyTavernSimpleLauncher); depois trabalhei com os desenvolvedores do SillyTavern e a DeffColony no SillyTavern Launcher, um instalador e atualizador de linha de comando, antes de partir para meus próprios projetos.',
        'Criei aicharactercards.com, um site para compartilhar e avaliar cartões de personagens de IA, e vivia encontrando pessoas que queriam usar esses cartões, mas não conseguiam colocar um app de chat para funcionar. Então criei o Rin Chat para resolver isso: fácil de instalar, com foco em privacidade e segurança, e para levar o roleplay adiante com um formato de cartão melhor, memória de verdade, a Forja de cartões e o Modo aventura.',
        'Sou só eu, com recursos próprios. Os próximos passos: Android, macOS e cartões mais imersivos por meio de estilos de documento e de estilos de chat levados pelo próprio cartão.',
      ],
      ar: [
        'بدأت بإدارة ديسكورد وريديت الخاصين بـ SillyTavern وببناء أول مثبّت بسيط لـ SillyTavern (https://github.com/blueprintCoding/sillyTavernSimpleLauncher)، ثم عملت مع مطوّري SillyTavern وفريق DeffColony على SillyTavern Launcher، وهو مثبّت ومحدّث بسطر الأوامر، قبل أن أنتقل إلى مشاريعي الخاصة.',
        'بنيت aicharactercards.com، وهو موقع لمشاركة بطاقات شخصيات الذكاء الاصطناعي وتقييمها، وظللت ألتقي بأشخاص يريدون استخدام هذه البطاقات لكنهم لا يستطيعون تشغيل تطبيق محادثة. فبنيت Rin Chat لحل ذلك: سهل التثبيت، مع تركيز على الخصوصية والأمان، ولدفع لعب الأدوار إلى الأمام بصيغة بطاقات أفضل وذاكرة حقيقية وCard Forge ووضع المغامرة.',
        'أنا وحدي، وبتمويل ذاتي. والخطوة التالية: Android وmacOS وبطاقات أكثر انغماسًا عبر أنماط المستندات وأنماط المحادثة التي تحملها البطاقة نفسها.',
      ],
      ko: [
        '저는 SillyTavern의 Discord와 Reddit을 관리하고 SillyTavern용 첫 간단한 설치 프로그램(https://github.com/blueprintCoding/sillyTavernSimpleLauncher)을 만드는 일로 시작했으며, 이후 SillyTavern 개발자들 및 DeffColony와 함께 명령줄 설치·업데이트 도구인 SillyTavern Launcher를 작업한 뒤 제 프로젝트로 넘어갔습니다.',
        '저는 AI 캐릭터 카드를 공유하고 평가하는 사이트 aicharactercards.com를 만들었고, 그 카드를 쓰고 싶지만 채팅 앱을 실행하지 못하는 사람들을 계속 만났습니다. 그래서 이를 해결하려고 Rin Chat을 만들었습니다. 설치가 쉽고, 개인정보 보호와 보안에 중점을 두며, 더 나은 카드 형식, 진짜 메모리, 카드 포지, 어드벤처 모드로 롤플레이를 앞으로 나아가게 합니다.',
        '저 혼자이며 자체 자금으로 운영합니다. 다음 계획은 Android, macOS, 그리고 문서 스타일과 카드에 담기는 채팅 스타일을 통한 더 몰입감 있는 카드입니다.',
      ],
    },
  },
  lastUpstreamUpdate: '2026-11-20', // changelog "Version 1.0.4 ... 20 November 2026"; installer files Last-Modified 2026-11-20 (read 2026-11-21)
  lastUpstreamUpdateSource: 'https://rin.chat/changelog',
}
