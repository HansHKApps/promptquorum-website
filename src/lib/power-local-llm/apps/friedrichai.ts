// Local AI App Directory — FriedrichAI (layer: desktop)
// Added 2026-10-09 following maker outreach (Randolph Smith, solo developer, FriedrichAI).
// Verified on 2026-10-09 against: the Steam store page (store.steampowered.com/app/4111530 — "FriedrichAI: Offline AI",
// publisher/developer Randolph Smith, $9.99 USD, Early Access 30 Apr 2026, full release 18 Sep 2026, Windows 10/11,
// 16 GB RAM minimum, 13 of 14 user reviews positive), the Steam news feed ("FriedrichAI 1.0 Is Here", 18 Sep 2026;
// later patches through 6 Oct 2026 carry no version number) and the three free DLC packs (image, video, audio generation).
// No dedicated product website and no public source repository were found; the project also has an itch.io page
// (rdub77.itch.io/friedrichai). The maker's email (hundreds of paying users, MCP/Blender work in progress) was NOT taken at face value:
// the "hundreds of paying users" claim is unverified, and MCP is in development only (so `mcpSupport` stays unset).
// Maker comment from Randolph Smith added 2026-10-09 (see `founder` below).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'friedrichai',
  name: 'FriedrichAI',
  categories: ['general-chat-clients', 'image-generation'],
  interfaces: ['desktop'],
  locality: 'local', // core assistant runs offline; web search is optional and opt-in, media packs are optional downloads
  platforms: ['win'], // Windows 10/11 64-bit only per the Steam page
  worksWith: ['GGUF', 'Qwen', 'Vulkan', 'CUDA'], // GGUF models via the Model Manager; NVIDIA/CUDA and Vulkan execution paths (AMD build in beta)
  engine: 'builtin', // bundles its own runtime; optional web search may need the user's own provider key
  license: 'Proprietary (closed source)', // Steam legal notice: © Randolph Smith, all rights reserved; third-party libraries under their own licenses
  price: 'paid', // $9.99 USD one-time on Steam; no subscription; the base-app demo and all three media packs are free
  hardware: { ramGb: 16, vramGb: 10, cpuOnly: true, variesByModel: true }, // Steam: 16 GB RAM / 20 GB disk minimum, CPU fallback for chat; RTX GPU with 10 GB+ VRAM recommended (12-16 GB+ for video)
  stars: null,
  addedDate: '2026-10-09',
  status: 'listed',
  uses: ['chat', 'image', 'audio', 'docs'],
  url: 'store.steampowered.com/app/4111530',
  storeLinks: {
    web: 'https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI',
  },
  tagline: {
    en: 'Offline Windows AI assistant sold on Steam, with local memory, image/video/audio packs and no account',
    de: 'Offline-KI-Assistent für Windows auf Steam, mit lokalem Gedächtnis, Bild-/Video-/Audiopaketen und ohne Konto',
    fr: 'Assistant IA hors ligne pour Windows vendu sur Steam, avec mémoire locale, packs image/vidéo/audio et sans compte',
    ja: 'Steamで販売される、ローカルメモリと画像・動画・音声パックを備えた、アカウント不要のオフラインWindows向けAIアシスタント',
    zh: '在 Steam 上销售的 Windows 离线 AI 助手,含本地记忆、图像/视频/音频包,无需账号',
    es: 'Asistente de IA offline para Windows que se vende en Steam, con memoria local, paquetes de imagen/vídeo/audio y sin cuenta',
    pt: 'Assistente de IA offline para Windows vendido na Steam, com memória local, pacotes de imagem/vídeo/áudio e sem conta',
    ar: 'مساعد ذكاء اصطناعي لويندوز دون اتصال يُباع على Steam، بذاكرة محلية وحزم صور وفيديو وصوت ودون حساب',
    ko: 'Steam에서 판매하는 오프라인 Windows AI 어시스턴트. 로컬 메모리, 이미지·영상·오디오 팩 제공, 계정 불필요',
  },
  // Comparison attributes: each value taken from the Steam page on 2026-10-09; a missing key = not stated, never false.
  // builtInEngine = bundled runtime; fileChat = imports local text/Markdown files; voice = local text-to-speech and speech-to-text.
  // ollama / customEndpoint / mcp stay unset: not documented (MCP is in development per the maker only).
  compare: { builtInEngine: true, fileChat: true, voice: true },
  lastVerifiedDate: '2026-10-09',
  founderReviewedDate: '2026-10-09', // Randolph Smith supplied his own comment and offered a technical review 2026-10-09; drives the amber Founder-reviewed banner + star
  reviewSlug: 'friedrichai-review',
  pqReview: {
    date: '2026-10-09',
    version: '1.0',
    versionSourceUrl: 'https://store.steampowered.com/news/app/4111530',
  },
  verdict: 'Best for Windows users who want a bought-once, offline, no-account AI assistant with local memory and optional image, video and audio packs; limited by Windows-only support, closed source, a very young review base, and NVIDIA-first media generation.',
  founder: {
    who: {
      en: 'Randolph Smith, solo developer',
      de: 'Randolph Smith, Einzelentwickler',
      fr: 'Randolph Smith, développeur indépendant',
      ja: 'Randolph Smith氏、個人開発者',
      zh: 'Randolph Smith,独立开发者',
      es: 'Randolph Smith, desarrollador independiente',
      pt: 'Randolph Smith, desenvolvedor solo',
      ar: 'Randolph Smith، مطور منفرد',
      ko: 'Randolph Smith, 1인 개발자',
    },
    providedDate: '2026-10-09',
    why: {
      en: 'FriedrichAI started almost by accident. I\'m a longtime software QA guy, not an AI researcher. Local AI was incredibly interesting, but getting everything installed, configured and working could be a project in itself. So FriedrichAI gradually became an attempt to package that experience into something normal people could actually use.',
      de: 'FriedrichAI ist fast zufällig entstanden. Ich bin ein langjähriger Software-QA-Mann, kein KI-Forscher. Lokale KI war unglaublich spannend, aber alles zu installieren, zu konfigurieren und zum Laufen zu bringen konnte ein eigenes Projekt sein. So wurde FriedrichAI nach und nach zu dem Versuch, diese Erfahrung in etwas zu verpacken, das normale Menschen tatsächlich nutzen können.',
      fr: 'FriedrichAI est né presque par hasard. Je travaille depuis longtemps dans l\'assurance qualité logicielle, je ne suis pas chercheur en IA. L\'IA locale était incroyablement intéressante, mais tout installer, configurer et faire fonctionner pouvait être un projet à part entière. FriedrichAI est donc peu à peu devenu une tentative d\'empaqueter cette expérience dans quelque chose que des gens ordinaires pourraient vraiment utiliser.',
      ja: 'FriedrichAIは、ほとんど偶然のようにして始まりました。私は長年ソフトウェアQAに携わってきた人間で、AIの研究者ではありません。ローカルAIは非常に興味深いものでしたが、すべてをインストールし、設定し、動かすこと自体がひとつのプロジェクトになりかねませんでした。そこでFriedrichAIは、その体験を普通の人が実際に使えるものにまとめる試みへと、少しずつ育っていきました。',
      zh: 'FriedrichAI 几乎是个意外。我是一个资深的软件 QA,不是 AI 研究人员。本地 AI 非常有意思,但要把一切安装、配置并跑起来,本身就可能是一个项目。于是 FriedrichAI 逐渐成了一次尝试:把这种体验打包成普通人真正能用的东西。',
      es: 'FriedrichAI en realidad empezó casi por accidente. Soy un veterano del QA de software, no un investigador de IA. La IA local me parecía fascinante, pero instalar, configurar y poner en marcha todo podía ser un proyecto en sí mismo. Así que FriedrichAI se fue convirtiendo poco a poco en un intento de empaquetar esa experiencia en algo que la gente normal pudiera usar de verdad.',
      pt: 'O FriedrichAI começou quase por acaso. Sou um profissional de QA de software de longa data, não um pesquisador de IA. A IA local era incrivelmente interessante, mas instalar, configurar e fazer tudo funcionar podia ser um projeto por si só. Então o FriedrichAI foi se tornando, aos poucos, uma tentativa de empacotar essa experiência em algo que gente comum pudesse realmente usar.',
      ar: 'بدأ FriedrichAI في الواقع بالصدفة تقريبًا. أنا منذ زمن طويل مختص في ضمان جودة البرمجيات، ولست باحثًا في الذكاء الاصطناعي. الذكاء الاصطناعي المحلي مثير للاهتمام جدًا، لكن تثبيت كل شيء وإعداده وتشغيله قد يكون مشروعًا بحد ذاته. فصار FriedrichAI تدريجيًا محاولة لتغليف هذه التجربة في شيء يستطيع الناس العاديون استخدامه فعلًا.',
      ko: 'FriedrichAI는 사실 거의 우연히 시작되었습니다. 저는 AI 연구자가 아니라 오래 일한 소프트웨어 QA 담당자입니다. 로컬 AI는 정말 흥미로웠지만, 모든 것을 설치하고 설정해서 작동시키는 일 자체가 하나의 프로젝트가 될 수 있었습니다. 그래서 FriedrichAI는 점차 그 경험을 평범한 사람들이 실제로 쓸 수 있는 형태로 포장하려는 시도가 되었습니다.',
    },
    pullQuote: {
      en: 'The basic philosophy is still pretty simple: install it, run it, and talk to it. No cloud account, no API subscription required for the core product, no tracking, and no dependency on my servers.',
      de: 'Die Grundphilosophie ist weiterhin ziemlich einfach: installieren, starten und mit ihm reden. Kein Cloud-Konto, kein API-Abo für das Kernprodukt, kein Tracking und keine Abhängigkeit von meinen Servern.',
      fr: 'La philosophie de base reste assez simple : on l\'installe, on la lance et on lui parle. Pas de compte cloud, pas d\'abonnement à une API nécessaire pour le produit de base, pas de suivi, et aucune dépendance envers mes serveurs.',
      ja: '基本的な考え方は今もとてもシンプルです。インストールして、起動して、話しかける。クラウドのアカウントも、コア製品に必要なAPIのサブスクリプションも、トラッキングも、私のサーバーへの依存もありません。',
      zh: '基本理念依然很简单:安装它,运行它,和它对话。核心产品不需要云端账号,不需要 API 订阅,没有追踪,也不依赖我的服务器。',
      es: 'La filosofía básica sigue siendo bastante simple: lo instalas, lo ejecutas y hablas con él. Sin cuenta en la nube, sin suscripción a una API para el producto principal, sin seguimiento y sin depender de mis servidores.',
      pt: 'A filosofia básica continua bem simples: instale, execute e converse com ele. Sem conta na nuvem, sem assinatura de API para o produto principal, sem rastreamento e sem depender dos meus servidores.',
      ar: 'فلسفته الأساسية ما زالت بسيطة إلى حد ما: ثبّته وشغّله وتحدث إليه. لا حساب سحابيًا، ولا اشتراك API مطلوبًا للمنتج الأساسي، ولا تتبع، ولا اعتماد على خوادمي.',
      ko: '기본 철학은 여전히 꽤 단순합니다. 설치하고, 실행하고, 대화하면 됩니다. 클라우드 계정도, 핵심 제품에 필요한 API 구독도, 추적도, 제 서버에 대한 의존도 없습니다.',
    },
    fullQuote: {
      en: [
        'FriedrichAI actually started almost by accident. I\'m a longtime software QA guy, not an AI researcher. I was laid off in 2022, and when I eventually started experimenting with AI, I was very new to it. Originally I was using AI to help me build a fairly simple card game. That led me further down the local-AI rabbit hole, and I kept running into the same problem: local AI was incredibly interesting, but getting everything installed, configured and working could be a project in itself.',
        'So FriedrichAI gradually became an attempt to package that experience into something normal people could actually use. The basic philosophy is still pretty simple: install it, run it, and talk to it. No cloud account, no API subscription required for the core product, no tracking, and no dependency on my servers. You can literally disconnect the computer from the internet and Friedrich keeps working.',
        'It has grown considerably from there. Friedrich can now handle local chat with persistent local memory, image generation, video and audio generation through optional media components, speech-to-text and text-to-speech, user-supplied GGUF models, and optional web search for people who want it. I\'m also working on MCP integration so Friedrich can interact with applications such as Blender while still keeping the human in control.',
        'As for Steam, that choice was very deliberate. I thought Steam was vastly underutilized for the kind of software I was building. There are millions of Windows users already there, with a distribution and update system they already trust, but very few people seemed to be looking at Steam as a place to distribute serious local AI software. To me, that looked less like a limitation and more like an opportunity.',
        'I also wanted FriedrichAI to feel like software you buy and own, rather than another AI service you\'re renting every month. Steam already has distribution, automatic updates, payments, refunds, user reviews and an enormous installed Windows audience. More importantly, people understand the transaction: you buy something, download it, and it stays in your library. GitHub is fantastic for developers, but I\'m specifically trying to make local AI accessible to people who shouldn\'t need to know what a Python environment, CUDA wheel or command line is just to use it.',
        'There are definitely tradeoffs. Steam was designed for games, not AI applications, so I\'ve had to work around some unusual distribution and packaging problems. Local AI also creates hardware-support challenges that a normal desktop application doesn\'t have. But overall I still think it was the right choice.',
        'Long term, my goal isn\'t simply to put a chat interface around a local model. I want FriedrichAI to become a genuinely useful local AI environment while keeping the things that made me build it in the first place: local ownership, privacy, accessibility, and no requirement that the developer\'s servers remain alive forever for the software you bought to continue working.',
        'And one funny correction: Friedrich is actually a nod to Friedrich Nietzsche, not Frederick the Great. The inspiration was Nietzsche\'s \'gaze into the abyss,\' which seemed particularly appropriate given that humanity now appears to be gazing into the AI abyss.',
      ],
      de: [
        'FriedrichAI ist eigentlich fast zufällig entstanden. Ich bin ein langjähriger Software-QA-Mann, kein KI-Forscher. 2022 wurde ich entlassen, und als ich schließlich anfing, mit KI zu experimentieren, war ich ein absoluter Neuling. Ursprünglich wollte ich mit KI ein ziemlich einfaches Kartenspiel bauen. Das führte mich immer tiefer in den Kaninchenbau der lokalen KI, und ich stieß immer wieder auf dasselbe Problem: Lokale KI war unglaublich spannend, aber alles zu installieren, zu konfigurieren und zum Laufen zu bringen konnte ein eigenes Projekt sein.',
        'So wurde FriedrichAI nach und nach zu dem Versuch, diese Erfahrung in etwas zu verpacken, das normale Menschen tatsächlich nutzen können. Die Grundphilosophie ist weiterhin ziemlich einfach: installieren, starten und mit ihm reden. Kein Cloud-Konto, kein API-Abo für das Kernprodukt, kein Tracking und keine Abhängigkeit von meinen Servern. Man kann den Computer buchstäblich vom Internet trennen, und Friedrich arbeitet weiter.',
        'Seitdem ist die App erheblich gewachsen. Friedrich beherrscht inzwischen lokalen Chat mit dauerhaftem lokalem Gedächtnis, Bildgenerierung, Video- und Audiogenerierung über optionale Medienkomponenten, Spracherkennung und Sprachausgabe, vom Nutzer bereitgestellte GGUF-Modelle und optionale Websuche für alle, die sie möchten. Außerdem arbeite ich an einer MCP-Integration, damit Friedrich mit Anwendungen wie Blender interagieren kann, während der Mensch die Kontrolle behält.',
        'Zu Steam: Diese Entscheidung war ganz bewusst. Ich fand, dass Steam für die Art von Software, die ich baute, enorm unterschätzt wird. Dort sind bereits Millionen Windows-Nutzer, mit einem Vertriebs- und Update-System, dem sie vertrauen, aber kaum jemand schien Steam als Ort für den Vertrieb ernstzunehmender lokaler KI-Software zu betrachten. Für mich sah das weniger nach einer Einschränkung als nach einer Chance aus.',
        'Außerdem sollte sich FriedrichAI wie Software anfühlen, die man kauft und besitzt, und nicht wie ein weiterer KI-Dienst, den man jeden Monat mietet. Steam bietet bereits Vertrieb, automatische Updates, Zahlungen, Rückerstattungen, Nutzerbewertungen und ein riesiges installiertes Windows-Publikum. Wichtiger noch: Die Leute verstehen die Transaktion. Man kauft etwas, lädt es herunter, und es bleibt in der Bibliothek. GitHub ist fantastisch für Entwickler, aber ich versuche gezielt, lokale KI für Menschen zugänglich zu machen, die nicht wissen müssen sollten, was eine Python-Umgebung, ein CUDA-Wheel oder eine Kommandozeile ist, nur um sie zu nutzen.',
        'Es gibt definitiv Kompromisse. Steam wurde für Spiele entwickelt, nicht für KI-Anwendungen, daher musste ich einige ungewöhnliche Probleme bei Vertrieb und Paketierung umgehen. Lokale KI bringt außerdem Herausforderungen bei der Hardware-Unterstützung mit sich, die eine normale Desktop-Anwendung nicht hat. Insgesamt halte ich es aber weiterhin für die richtige Entscheidung.',
        'Langfristig ist mein Ziel nicht, bloß eine Chat-Oberfläche um ein lokales Modell zu legen. FriedrichAI soll zu einer wirklich nützlichen lokalen KI-Umgebung werden und dabei das bewahren, weshalb ich es überhaupt gebaut habe: lokaler Besitz, Datenschutz, Zugänglichkeit und keine Voraussetzung, dass die Server des Entwicklers ewig laufen müssen, damit die gekaufte Software weiter funktioniert.',
        'Und noch eine lustige Richtigstellung: Friedrich ist tatsächlich eine Hommage an Friedrich Nietzsche und nicht an Friedrich den Großen. Die Inspiration war Nietzsches „Blick in den Abgrund“, was besonders passend schien, da die Menschheit heute offenbar in den KI-Abgrund blickt.',
      ],
      fr: [
        'FriedrichAI est né presque par hasard. Je travaille depuis longtemps dans l\'assurance qualité logicielle, je ne suis pas chercheur en IA. J\'ai été licencié en 2022 et, quand j\'ai fini par commencer à expérimenter avec l\'IA, j\'étais complètement novice. Au départ, j\'utilisais l\'IA pour m\'aider à créer un jeu de cartes assez simple. Cela m\'a entraîné de plus en plus loin dans le terrier de l\'IA locale, et je butais toujours sur le même problème : l\'IA locale était incroyablement intéressante, mais tout installer, configurer et faire fonctionner pouvait être un projet à part entière.',
        'FriedrichAI est donc peu à peu devenu une tentative d\'empaqueter cette expérience dans quelque chose que des gens ordinaires pourraient vraiment utiliser. La philosophie de base reste assez simple : on l\'installe, on la lance et on lui parle. Pas de compte cloud, pas d\'abonnement à une API nécessaire pour le produit de base, pas de suivi, et aucune dépendance envers mes serveurs. On peut littéralement déconnecter l\'ordinateur d\'Internet et Friedrich continue de fonctionner.',
        'Il a beaucoup évolué depuis. Friedrich sait désormais gérer le chat local avec une mémoire locale persistante, la génération d\'images, la génération de vidéo et d\'audio via des composants multimédias facultatifs, la reconnaissance vocale et la synthèse vocale, les modèles GGUF fournis par l\'utilisateur, ainsi que la recherche web facultative pour ceux qui la souhaitent. Je travaille aussi sur une intégration MCP afin que Friedrich puisse interagir avec des applications comme Blender, tout en laissant l\'humain aux commandes.',
        'Quant à Steam, ce choix était très délibéré. Je trouvais que Steam était largement sous-exploité pour le type de logiciel que je créais. Des millions d\'utilisateurs de Windows s\'y trouvent déjà, avec un système de distribution et de mises à jour en lequel ils ont confiance, mais très peu de gens semblaient voir Steam comme un endroit où distribuer de vrais logiciels d\'IA locale. Pour moi, c\'était moins une limite qu\'une opportunité.',
        'Je voulais aussi que FriedrichAI soit un logiciel que l\'on achète et que l\'on possède, plutôt qu\'un énième service d\'IA que l\'on loue chaque mois. Steam offre déjà la distribution, les mises à jour automatiques, les paiements, les remboursements, les avis d\'utilisateurs et un énorme public installé sous Windows. Surtout, les gens comprennent la transaction : on achète quelque chose, on le télécharge, et cela reste dans sa bibliothèque. GitHub est formidable pour les développeurs, mais j\'essaie précisément de rendre l\'IA locale accessible à des personnes qui ne devraient pas avoir besoin de savoir ce qu\'est un environnement Python, une roue CUDA ou une ligne de commande pour s\'en servir.',
        'Il y a bien sûr des compromis. Steam a été conçu pour les jeux, pas pour les applications d\'IA, et j\'ai donc dû contourner des problèmes inhabituels de distribution et d\'empaquetage. L\'IA locale pose aussi des difficultés de prise en charge du matériel qu\'une application de bureau classique ne connaît pas. Mais dans l\'ensemble, je pense toujours que c\'était le bon choix.',
        'À long terme, mon objectif n\'est pas simplement de mettre une interface de chat autour d\'un modèle local. Je veux que FriedrichAI devienne un véritable environnement d\'IA locale utile, tout en conservant ce qui m\'a poussé à le créer au départ : la propriété locale, la confidentialité, l\'accessibilité, et aucune obligation que les serveurs du développeur restent en ligne pour toujours afin que le logiciel que vous avez acheté continue de fonctionner.',
        'Et une petite correction amusante : Friedrich est en fait un clin d\'œil à Friedrich Nietzsche, pas à Frédéric le Grand. L\'inspiration vient du « regard dans l\'abîme » de Nietzsche, qui m\'a semblé particulièrement approprié à l\'heure où l\'humanité semble contempler l\'abîme de l\'IA.',
      ],
      ja: [
        'FriedrichAIは、実のところほとんど偶然のようにして始まりました。私は長年ソフトウェアQAに携わってきた人間で、AIの研究者ではありません。2022年にレイオフされ、やがてAIを試し始めたときには、まったくの初心者でした。最初は、かなり単純なカードゲームを作るのにAIを使っていました。そこからローカルAIという深みにはまっていき、そのたびに同じ問題にぶつかりました。ローカルAIは非常に興味深いのに、すべてをインストールし、設定し、動かすこと自体がひとつのプロジェクトになりかねない、という問題です。',
        'そこでFriedrichAIは、その体験を普通の人が実際に使えるものにまとめる試みへと、少しずつ育っていきました。基本的な考え方は今もとてもシンプルです。インストールして、起動して、話しかける。クラウドのアカウントも、コア製品に必要なAPIのサブスクリプションも、トラッキングも、私のサーバーへの依存もありません。文字どおり、コンピューターをインターネットから切断しても、Friedrichは動き続けます。',
        'そこからかなり大きく成長しました。現在のFriedrichは、永続的なローカルメモリを備えたローカルチャット、画像生成、オプションのメディアコンポーネントによる動画と音声の生成、音声入力(speech-to-text)と音声読み上げ(text-to-speech)、ユーザーが用意するGGUFモデル、そして希望する人向けのオプションのWeb検索に対応しています。また、FriedrichがBlenderのようなアプリケーションと連携しつつ、人間が主導権を握り続けられるように、MCP連携にも取り組んでいます。',
        'Steamについては、その選択は非常に意図的なものでした。私が作っていたようなソフトウェアにとって、Steamは大きく活用されていないと考えたのです。そこにはすでに何百万人ものWindowsユーザーがいて、彼らが信頼している配布と更新の仕組みがありますが、本格的なローカルAIソフトウェアの配布先としてSteamに目を向けている人はほとんどいないようでした。私には、それは制約というより、むしろ好機に見えました。',
        'また、FriedrichAIを、毎月借りて使う別のAIサービスではなく、買って自分のものにするソフトウェアとして感じてもらいたいとも思いました。Steamには、配布、自動アップデート、決済、返金、ユーザーレビュー、そして巨大なWindowsユーザー層がすでにあります。さらに大事なのは、この取引が誰にとっても分かりやすいことです。何かを買い、ダウンロードすれば、それはライブラリに残ります。GitHubは開発者にとって素晴らしい場所ですが、私が目指しているのは、Python環境やCUDA wheel、コマンドラインが何かを知らなくても使えるローカルAIです。',
        'たしかにトレードオフはあります。Steamはゲームのために作られたもので、AIアプリケーションのためではないため、配布やパッケージングで珍しい問題を回避する工夫が必要でした。ローカルAIには、通常のデスクトップアプリケーションにはないハードウェア対応の難しさもあります。それでも全体としては、今でも正しい選択だったと思っています。',
        '長期的な目標は、ローカルモデルにチャットインターフェースをかぶせることだけではありません。FriedrichAIを、本当に役立つローカルAI環境へと育てたいのです。そのとき、そもそも私がこれを作った理由、つまりローカルでの所有、プライバシー、使いやすさ、そして、購入したソフトウェアが動き続けるために開発者のサーバーが永遠に稼働している必要はない、という条件を保ち続けます。',
        'それと、ひとつ面白い訂正があります。Friedrichという名前は、フリードリヒ大王ではなく、Friedrich Nietzscheへのオマージュです。着想の元は、Nietzscheの「深淵をのぞき込む」という言葉でした。人類が今まさにAIという深淵をのぞき込んでいるように見えることを考えると、とりわけふさわしいと感じたのです。',
      ],
      zh: [
        'FriedrichAI 其实几乎是个意外。我是一个资深的软件 QA,不是 AI 研究人员。我在 2022 年被裁员,后来开始尝试 AI 时,我对它完全是新手。最初我是用 AI 帮我做一个相当简单的纸牌游戏。这把我带进了本地 AI 这个越陷越深的兔子洞,而我不断遇到同一个问题:本地 AI 非常有意思,但要把一切安装、配置并跑起来,本身就可能是一个项目。',
        '于是 FriedrichAI 逐渐成了一次尝试:把这种体验打包成普通人真正能用的东西。基本理念依然很简单:安装它,运行它,和它对话。不需要云端账号,核心产品不需要 API 订阅,没有追踪,也不依赖我的服务器。你完全可以把电脑从互联网上断开,Friedrich 照样工作。',
        '从那时起它已经成长了很多。Friedrich 现在可以处理带持久本地记忆的本地聊天、图像生成、通过可选媒体组件实现的视频和音频生成、语音转文字和文字转语音、用户自行提供的 GGUF 模型,以及为有需要的人提供的可选网页搜索。我还在开发 MCP 集成,让 Friedrich 能够与 Blender 等应用交互,同时仍由人来掌控。',
        '至于 Steam,这个选择是非常有意为之的。我认为对于我正在做的这类软件,Steam 被严重低估了。那里已经有数百万 Windows 用户,有他们早已信任的分发和更新系统,但似乎很少有人把 Steam 看作发行正式的本地 AI 软件的地方。在我看来,这与其说是限制,不如说是机会。',
        '我也希望 FriedrichAI 给人的感觉是你买下并拥有的软件,而不是又一个每月租用的 AI 服务。Steam 本身就具备分发、自动更新、支付、退款、用户评价和庞大的 Windows 用户群。更重要的是,人们理解这笔交易:你买下它,下载它,它就留在你的游戏库里。GitHub 对开发者来说很棒,但我特别想让那些不应该为了使用本地 AI 而去了解 Python 环境、CUDA wheel 或命令行是什么的人也能用上它。',
        '确实存在一些取舍。Steam 是为游戏而不是 AI 应用设计的,所以我不得不绕开一些不寻常的分发和打包问题。本地 AI 还带来了普通桌面应用没有的硬件支持挑战。但总的来说,我仍然认为这是正确的选择。',
        '长远来看,我的目标不只是给本地模型套一个聊天界面。我希望 FriedrichAI 成为一个真正有用的本地 AI 环境,同时保留当初促使我做它的那些东西:本地所有权、隐私、易用性,以及不要求开发者的服务器必须永远在线,你买下的软件才能继续工作。',
        '还有一个有趣的更正:Friedrich 其实是向 Friedrich Nietzsche 致敬,而不是腓特烈大帝。灵感来自 Nietzsche 的“凝视深渊”,考虑到人类如今似乎正凝视着 AI 这片深渊,这显得格外贴切。',
      ],
      es: [
        'FriedrichAI en realidad empezó casi por accidente. Soy un veterano del QA de software, no un investigador de IA. Me despidieron en 2022 y, cuando por fin empecé a experimentar con IA, era muy novato en el tema. Al principio usaba la IA para ayudarme a crear un juego de cartas bastante sencillo. Eso me llevó cada vez más hondo en la madriguera de la IA local, y siempre me topaba con el mismo problema: la IA local me parecía fascinante, pero instalar, configurar y poner en marcha todo podía ser un proyecto en sí mismo.',
        'Así que FriedrichAI se fue convirtiendo poco a poco en un intento de empaquetar esa experiencia en algo que la gente normal pudiera usar de verdad. La filosofía básica sigue siendo bastante simple: lo instalas, lo ejecutas y hablas con él. Sin cuenta en la nube, sin suscripción a una API para el producto principal, sin seguimiento y sin depender de mis servidores. Literalmente puedes desconectar el ordenador de internet y Friedrich sigue funcionando.',
        'Desde entonces ha crecido bastante. Friedrich ahora puede encargarse de un chat local con memoria local persistente, generación de imágenes, generación de vídeo y audio mediante componentes multimedia opcionales, voz a texto y texto a voz, modelos GGUF aportados por el usuario y búsqueda web opcional para quien la quiera. También estoy trabajando en una integración con MCP para que Friedrich pueda interactuar con aplicaciones como Blender sin que la persona deje de tener el control.',
        'En cuanto a Steam, fue una decisión muy deliberada. Pensaba que Steam estaba muy infrautilizado para el tipo de software que estaba creando. Allí ya hay millones de usuarios de Windows, con un sistema de distribución y actualización en el que ya confían, pero muy poca gente parecía mirar Steam como un lugar donde distribuir software serio de IA local. Para mí, eso parecía menos una limitación y más una oportunidad.',
        'Además quería que FriedrichAI se sintiera como un software que compras y es tuyo, y no como otro servicio de IA que alquilas cada mes. Steam ya ofrece distribución, actualizaciones automáticas, pagos, reembolsos, reseñas de usuarios y una enorme base instalada de usuarios de Windows. Y lo más importante: la gente entiende la transacción: compras algo, lo descargas y se queda en tu biblioteca. GitHub es fantástico para los desarrolladores, pero yo intento específicamente que la IA local sea accesible para personas que no deberían necesitar saber qué es un entorno de Python, un paquete wheel de CUDA o una línea de comandos solo para usarla.',
        'Sin duda hay contrapartidas. Steam se diseñó para juegos, no para aplicaciones de IA, así que he tenido que sortear algunos problemas poco habituales de distribución y empaquetado. La IA local también plantea desafíos de compatibilidad de hardware que una aplicación de escritorio normal no tiene. Pero, en general, sigo pensando que fue la decisión correcta.',
        'A largo plazo, mi objetivo no es simplemente poner una interfaz de chat alrededor de un modelo local. Quiero que FriedrichAI se convierta en un entorno de IA local realmente útil, conservando lo que me llevó a crearlo en un primer momento: la propiedad local, la privacidad, la accesibilidad y que no haga falta que los servidores del desarrollador sigan en pie para siempre para que el software que compraste siga funcionando.',
        'Y una corrección divertida: Friedrich es en realidad un guiño a Friedrich Nietzsche, no a Federico el Grande. La inspiración fue el «mirar al abismo» de Nietzsche, que parecía especialmente apropiado dado que la humanidad ahora parece estar mirando al abismo de la IA.',
      ],
      pt: [
        'O FriedrichAI começou quase por acaso. Sou um profissional de QA de software de longa data, não um pesquisador de IA. Fui demitido em 2022 e, quando acabei começando a experimentar com IA, eu era muito iniciante. No começo eu usava a IA para me ajudar a criar um jogo de cartas bem simples. Isso me levou cada vez mais fundo no mundo da IA local, e eu esbarrava sempre no mesmo problema: a IA local era incrivelmente interessante, mas instalar, configurar e fazer tudo funcionar podia ser um projeto por si só.',
        'Então o FriedrichAI foi se tornando, aos poucos, uma tentativa de empacotar essa experiência em algo que gente comum pudesse realmente usar. A filosofia básica continua bem simples: instale, execute e converse com ele. Sem conta na nuvem, sem assinatura de API para o produto principal, sem rastreamento e sem depender dos meus servidores. Dá para literalmente desconectar o computador da internet e o Friedrich continua funcionando.',
        'Desde então ele cresceu bastante. O Friedrich agora cuida de chat local com memória local persistente, geração de imagens, geração de vídeo e áudio por meio de componentes de mídia opcionais, reconhecimento e síntese de voz, modelos GGUF fornecidos pelo usuário e busca opcional na web para quem quiser. Também estou trabalhando na integração com MCP para que o Friedrich possa interagir com aplicativos como o Blender, sem que o ser humano perca o controle.',
        'Quanto à Steam, essa escolha foi bem deliberada. Achei que a Steam era muito subutilizada para o tipo de software que eu estava criando. Há milhões de usuários de Windows lá, com um sistema de distribuição e atualização em que já confiam, mas pouquíssima gente parecia enxergar a Steam como um lugar para distribuir software sério de IA local. Para mim, isso parecia menos uma limitação e mais uma oportunidade.',
        'Eu também queria que o FriedrichAI parecesse um software que você compra e possui, e não mais um serviço de IA que você aluga todo mês. A Steam já tem distribuição, atualizações automáticas, pagamentos, reembolsos, avaliações de usuários e um enorme público de Windows instalado. Mais importante: as pessoas entendem a transação, você compra algo, baixa, e isso fica na sua biblioteca. O GitHub é fantástico para desenvolvedores, mas estou tentando justamente tornar a IA local acessível a pessoas que não deveriam precisar saber o que é um ambiente Python, um wheel de CUDA ou uma linha de comando só para usá-la.',
        'Existem, sim, desvantagens. A Steam foi projetada para jogos, não para aplicativos de IA, então tive de contornar alguns problemas incomuns de distribuição e empacotamento. A IA local também traz desafios de suporte a hardware que um aplicativo de desktop comum não tem. Mas, no geral, ainda acho que foi a escolha certa.',
        'A longo prazo, meu objetivo não é simplesmente colocar uma interface de chat em volta de um modelo local. Quero que o FriedrichAI se torne um ambiente de IA local genuinamente útil, mantendo o que me levou a criá-lo: propriedade local, privacidade, acessibilidade e nenhuma exigência de que os servidores do desenvolvedor continuem no ar para sempre para que o software que você comprou continue funcionando.',
        'E uma correção engraçada: Friedrich, na verdade, é uma homenagem a Friedrich Nietzsche, e não a Frederico, o Grande. A inspiração foi o ‘olhar para o abismo’ de Nietzsche, que pareceu especialmente apropriado, já que a humanidade agora parece estar olhando para o abismo da IA.',
      ],
      ar: [
        'بدأ FriedrichAI في الواقع بالصدفة تقريبًا. أنا منذ زمن طويل مختص في ضمان جودة البرمجيات، ولست باحثًا في الذكاء الاصطناعي. سُرّحت من عملي في 2022، وحين بدأت أخيرًا أجرّب الذكاء الاصطناعي كنت جديدًا عليه تمامًا. في البداية كنت أستخدم الذكاء الاصطناعي لمساعدتي في بناء لعبة ورق بسيطة إلى حد ما. وقادني ذلك أبعد داخل عالم الذكاء الاصطناعي المحلي، وظللت أصطدم بالمشكلة نفسها: الذكاء الاصطناعي المحلي مثير للاهتمام جدًا، لكن تثبيت كل شيء وإعداده وتشغيله قد يكون مشروعًا بحد ذاته.',
        'فصار FriedrichAI تدريجيًا محاولة لتغليف هذه التجربة في شيء يستطيع الناس العاديون استخدامه فعلًا. وفلسفته الأساسية ما زالت بسيطة إلى حد ما: ثبّته وشغّله وتحدث إليه. لا حساب سحابيًا، ولا اشتراك API مطلوبًا للمنتج الأساسي، ولا تتبع، ولا اعتماد على خوادمي. يمكنك حرفيًا فصل الحاسوب عن الإنترنت ويواصل Friedrich عمله.',
        'وقد نما كثيرًا منذ ذلك الحين. يستطيع Friedrich الآن إجراء دردشة محلية بذاكرة محلية دائمة، وتوليد الصور، وتوليد الفيديو والصوت عبر مكوّنات وسائط اختيارية، وتحويل الكلام إلى نص والنص إلى كلام، واستخدام نماذج GGUF التي يوفّرها المستخدم، والبحث الاختياري على الويب لمن يرغب فيه. كما أعمل على تكامل MCP كي يتمكن Friedrich من التفاعل مع تطبيقات مثل Blender مع إبقاء الإنسان متحكمًا.',
        'أما Steam، فكان ذلك الاختيار مقصودًا جدًا. رأيت أن Steam مغفلة إلى حد بعيد لنوع البرمجيات الذي أبنيه. فهناك ملايين من مستخدمي ويندوز موجودون فيها أصلًا، مع نظام توزيع وتحديث يثقون به، لكن قلة قليلة بدا أنها تنظر إلى Steam بوصفها مكانًا لتوزيع برمجيات ذكاء اصطناعي محلي جادة. وبالنسبة لي بدا ذلك فرصة أكثر منه قيدًا.',
        'وأردت أيضًا أن يبدو FriedrichAI كبرنامج تشتريه وتمتلكه، لا كخدمة ذكاء اصطناعي أخرى تستأجرها كل شهر. فلدى Steam أصلًا التوزيع والتحديثات التلقائية والدفع واسترداد المبالغ ومراجعات المستخدمين وجمهور هائل من مستخدمي ويندوز. والأهم أن الناس يفهمون هذه المعاملة: تشتري شيئًا وتنزّله فيبقى في مكتبتك. إن GitHub رائع للمطورين، لكنني أحاول تحديدًا أن أجعل الذكاء الاصطناعي المحلي في متناول من لا ينبغي أن يحتاجوا إلى معرفة ما هي بيئة Python أو حزمة CUDA أو سطر الأوامر كي يستخدموه.',
        'هناك بالتأكيد مقايضات. فقد صُمّمت Steam للألعاب لا لتطبيقات الذكاء الاصطناعي، لذا اضطررت إلى معالجة بعض مشكلات التوزيع والتغليف غير المعتادة. كما يفرض الذكاء الاصطناعي المحلي تحديات في دعم العتاد لا يواجهها تطبيق سطح مكتب عادي. لكنني ما زلت أرى عمومًا أنه كان الخيار الصحيح.',
        'على المدى البعيد، هدفي ليس مجرد وضع واجهة دردشة حول نموذج محلي. أريد أن يصبح FriedrichAI بيئة ذكاء اصطناعي محلية مفيدة فعلًا، مع الحفاظ على الأشياء التي دفعتني إلى بنائه أصلًا: الملكية المحلية والخصوصية وسهولة الوصول، وألا يُشترط بقاء خوادم المطوّر قائمة إلى الأبد كي يستمر عمل البرنامج الذي اشتريته.',
        'وتصحيح طريف أخير: اسم Friedrich تحية في الواقع لـ Friedrich Nietzsche، لا لـ Frederick the Great. كان الإلهام عبارة Nietzsche عن «التحديق في الهاوية»، وهي تبدو مناسبة جدًا لأن البشرية تبدو الآن وكأنها تحدّق في هاوية الذكاء الاصطناعي.',
      ],
      ko: [
        'FriedrichAI는 사실 거의 우연히 시작되었습니다. 저는 AI 연구자가 아니라 오래 일한 소프트웨어 QA 담당자입니다. 2022년에 해고되었고, 나중에 AI를 써 보기 시작했을 때는 아주 초보였습니다. 처음에는 꽤 단순한 카드 게임을 만들려고 AI의 도움을 받고 있었습니다. 그게 저를 로컬 AI라는 깊은 토끼굴로 더 끌고 갔고, 계속 같은 문제에 부딪혔습니다. 로컬 AI는 정말 흥미로웠지만, 모든 것을 설치하고 설정해서 작동시키는 일 자체가 하나의 프로젝트가 될 수 있었습니다.',
        '그래서 FriedrichAI는 점차 그 경험을 평범한 사람들이 실제로 쓸 수 있는 형태로 포장하려는 시도가 되었습니다. 기본 철학은 여전히 꽤 단순합니다. 설치하고, 실행하고, 대화하면 됩니다. 클라우드 계정도, 핵심 제품에 필요한 API 구독도, 추적도, 제 서버에 대한 의존도 없습니다. 컴퓨터를 말 그대로 인터넷에서 분리해도 Friedrich는 계속 작동합니다.',
        '거기서 상당히 성장했습니다. 이제 Friedrich는 지속되는 로컬 메모리를 갖춘 로컬 채팅, 이미지 생성, 선택형 미디어 구성 요소를 통한 영상과 오디오 생성, 음성 텍스트 변환과 텍스트 음성 변환, 이용자가 제공한 GGUF 모델, 그리고 원하는 사람을 위한 선택형 웹 검색을 처리할 수 있습니다. 또 Friedrich가 Blender 같은 애플리케이션과 상호작용하면서도 사람이 계속 통제권을 갖도록 MCP 연동을 작업하고 있습니다.',
        'Steam의 경우, 그 선택은 매우 의도적이었습니다. 제가 만드는 종류의 소프트웨어에 Steam이 크게 활용되지 못하고 있다고 생각했습니다. 이미 수백만 명의 Windows 이용자가 있고, 그들이 신뢰하는 배포 및 업데이트 시스템이 있는데도, 본격적인 로컬 AI 소프트웨어를 배포할 곳으로 Steam을 보는 사람은 거의 없는 것 같았습니다. 제게는 그것이 제약이라기보다 기회로 보였습니다.',
        '저는 FriedrichAI가 매달 빌려 쓰는 또 하나의 AI 서비스가 아니라, 구매해서 소유하는 소프트웨어처럼 느껴지기를 바랐습니다. Steam에는 이미 배포, 자동 업데이트, 결제, 환불, 이용자 리뷰, 그리고 엄청난 규모의 Windows 이용자층이 있습니다. 더 중요한 것은 사람들이 이 거래를 이해한다는 점입니다. 무언가를 사서 내려받으면 라이브러리에 남습니다. GitHub는 개발자에게 훌륭하지만, 저는 Python 환경, CUDA wheel, 명령줄이 무엇인지 몰라도 로컬 AI를 쓸 수 있게 하는 것을 특별히 목표로 하고 있습니다.',
        '분명 단점도 있습니다. Steam은 AI 애플리케이션이 아니라 게임을 위해 설계되었기 때문에, 몇 가지 특이한 배포 및 패키징 문제를 우회해야 했습니다. 로컬 AI에는 일반 데스크톱 애플리케이션에는 없는 하드웨어 지원 과제도 따릅니다. 그래도 전체적으로는 여전히 옳은 선택이었다고 생각합니다.',
        '장기적으로 제 목표는 로컬 모델에 채팅 인터페이스를 씌우는 데 그치지 않습니다. 제가 이 앱을 만들게 된 처음의 가치, 즉 로컬 소유, 개인정보 보호, 접근성, 그리고 구매한 소프트웨어가 계속 작동하기 위해 개발자의 서버가 영원히 살아 있어야 할 필요가 없다는 점을 지키면서, FriedrichAI가 진정으로 유용한 로컬 AI 환경이 되기를 바랍니다.',
        '그리고 웃긴 정정 하나: Friedrich는 사실 프리드리히 대왕(Frederick the Great)이 아니라 Friedrich Nietzsche에게 바치는 오마주입니다. 영감은 Nietzsche의 ‘심연을 들여다보라’였는데, 인류가 이제 AI라는 심연을 들여다보고 있는 것처럼 보이는 상황에 특히 잘 어울린다고 생각했습니다.',
      ],
    },
  },
}
