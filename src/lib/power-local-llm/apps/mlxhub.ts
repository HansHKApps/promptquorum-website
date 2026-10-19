// Local AI App Directory — MLXHub (layer: mobile / iOS)
// Added 2026-10-05 from the app queue. Facts verified against the App Store listing (id6766485144) and the
// official site mlxhub.app on 2026-10-05. No public source repository was found, so licence is recorded as
// closed source. NOT the same product as mlxhub.ai (a separate macOS app by a different developer).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlxhub',
  name: 'MLXHub',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios'], // iOS/iPadOS 26+; the listing also shows macOS 26 (Apple M1+) and visionOS 26 availability for the same app, no native desktop build is described
  worksWith: ['Hugging Face'],
  engine: 'builtin', // on-device inference on mlx-swift (Apple MLX)
  license: 'Closed source',
  price: 'freemium', // free download; MLXHub Plus $6.99/month, $44.99/year, lifetime $229.99 — verified 2026-10-05, re-read 2026-10-19 (US store). Maker (2026-10-19): 2.3.0, still in App Store review, adds a $34.49 LAN Server IAP credited toward lifetime ($195.99 instead of $229.99); not yet on the listing
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // maker correction 2026-10-19: no RAM minimum, any A14/M1 or newer chip; RAM only decides which models fit (the earlier "6 GB" was misleading)
  stars: null,
  addedDate: '2026-10-05',
  status: 'listed',
  uses: ['phone', 'chat', 'serve'],
  url: 'mlxhub.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144',
  },
  tagline: {
    en: 'On-device MLX chat for iPhone and iPad, with a LAN server and multi-device model splitting',
    de: 'On-Device-MLX-Chat für iPhone und iPad, mit LAN-Server und Modellaufteilung über mehrere Geräte',
    fr: 'Chat MLX sur l’appareil pour iPhone et iPad, avec serveur LAN et répartition du modèle entre appareils',
    ja: 'iPhone・iPad向けのオンデバイスMLXチャット。LANサーバーと複数デバイスでのモデル分割に対応',
    zh: 'iPhone/iPad设备端MLX聊天应用，带局域网服务器和多设备模型拆分',
    es: 'Chat MLX en el dispositivo para iPhone y iPad, con servidor LAN y reparto del modelo entre dispositivos',
    pt: 'Chat MLX no dispositivo para iPhone e iPad, com servidor LAN e divisão do modelo entre dispositivos',
    ar: 'دردشة MLX على الجهاز لـ iPhone وiPad مع خادم شبكة محلية وتقسيم النموذج بين عدة أجهزة',
    ko: 'iPhone·iPad용 온디바이스 MLX 채팅 앱, LAN 서버와 다중 기기 모델 분할 지원',
  },
  reviewSlug: 'mlxhub-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-19', // 2.2.1 = version shown on the App Store listing on that date (2.3.0 is in review, per the maker)
    version: '2.2.1',
    versionSourceUrl: 'https://apps.apple.com/us/app/mlxhub-local-ai-llm-server/id6766485144',
  },
  // Comparison attributes: each value taken from the App Store listing / official site on 2026-10-05; a missing key = not stated there, never false.
  compare: { offline: true, modelDownloads: true, visionInput: true },
  lastVerifiedDate: '2026-10-19',
  founderReviewedDate: '2026-10-19', // Juan Colilla (DreamFoundries) supplied comments and corrections 2026-10-19; drives the amber Founder-reviewed banner + star
  lastUpstreamUpdate: '2026-10-12', // App Store version history, read 2026-10-16
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/mlxhub/id6766485144',
  founder: {
    who: {
      en: 'Juan Colilla, DreamFoundries',
      de: 'Juan Colilla, DreamFoundries',
      fr: 'Juan Colilla, DreamFoundries',
      ja: 'Juan Colilla、DreamFoundries',
      zh: 'Juan Colilla，DreamFoundries',
      es: 'Juan Colilla, DreamFoundries',
      pt: 'Juan Colilla, DreamFoundries',
      ar: 'Juan Colilla، DreamFoundries',
      ko: 'Juan Colilla, DreamFoundries',
    },
    providedDate: '2026-10-19',
    why: {
      en: 'I am a tech enthusiast and an open-weights AI supporter; I think this technology cannot and should not be withheld from people. I have been an iOS engineer since 2018 and knew local inference on iPhones and iPads could offer much more, so I built MLXHub as the best app for running MLX models on Apple devices.',
      de: 'Ich bin Technikbegeisterter und unterstütze KI mit offenen Gewichten; ich halte diese Technologie für etwas, das den Menschen nicht vorenthalten werden kann und darf. Ich bin seit 2018 iOS-Entwickler und wusste, dass lokale Inferenz auf iPhones und iPads viel mehr bieten kann, also habe ich MLXHub als beste App zum Ausführen von MLX-Modellen auf Apple-Geräten gebaut.',
      fr: 'Je suis passionné de technologie et partisan de l\'IA à poids ouverts ; je pense que cette technologie ne peut pas et ne doit pas être refusée aux gens. Je suis ingénieur iOS depuis 2018 et je savais que l\'inférence locale sur iPhone et iPad pouvait offrir bien plus, alors j\'ai créé MLXHub pour être la meilleure application pour exécuter des modèles MLX sur les appareils Apple.',
      ja: '私はテック好きで、オープンウェイトAIの支持者です。この技術は人々から遠ざけることができず、また遠ざけるべきでもないと考えています。2018年からiOSエンジニアをしており、iPhoneとiPadのローカル推論にはもっと多くの可能性があると分かっていたので、Apple端末でMLXモデルを動かす最高のアプリとしてMLXHubを作りました。',
      zh: '我是一名技术爱好者，也是开放权重AI的支持者；我认为这项技术不能也不应该被人们拒之门外。我自2018年起就是iOS工程师，知道iPhone和iPad上的本地推理能做得更多，所以我打造了MLXHub，希望它成为在苹果设备上运行MLX模型的最佳应用。',
      es: 'Soy un entusiasta de la tecnología y apoyo la IA de pesos abiertos; creo que es una tecnología que no se puede ni se debe negar a las personas. Soy ingeniero iOS desde 2018 y sabía que la inferencia local en iPhones y iPads podía ofrecer mucho más, así que creé MLXHub como la mejor app para ejecutar modelos MLX en dispositivos Apple.',
      pt: 'Sou um entusiasta de tecnologia e defensor da IA de pesos abertos; acho que essa tecnologia não pode nem deve ser negada às pessoas. Sou engenheiro iOS desde 2018 e sabia que a inferência local em iPhones e iPads podia oferecer muito mais, então criei o MLXHub para ser o melhor app para executar modelos MLX em dispositivos Apple.',
      ar: 'أنا شغوف بالتقنية ومن مؤيدي الذكاء الاصطناعي مفتوح الأوزان؛ فأرى أنها تقنية لا يمكن ولا ينبغي حجبها عن الناس. أنا مهندس iOS منذ عام 2018 وكنت أعلم أن الاستدلال المحلي على الآيفون والآيباد يستطيع تقديم الكثير، فبنيت MLXHub ليكون أفضل تطبيق لتشغيل نماذج MLX على أجهزة Apple.',
      ko: '저는 기술 애호가이자 오픈 웨이트 AI 지지자이며, 이 기술은 사람들에게서 빼앗을 수도, 빼앗아서도 안 된다고 생각합니다. 2018년부터 iOS 엔지니어로 일해 왔고 아이폰과 아이패드의 로컬 추론에는 훨씬 더 많은 가능성이 있다는 것을 알고 있었기에, Apple 기기에서 MLX 모델을 실행하는 최고의 앱으로 MLXHub를 만들었습니다.',
    },
    pullQuote: {
      en: 'MLXHub represents freedom for me, and that is the philosophy I have in mind when I develop it. That is why most users can use it entirely for free.',
      de: 'MLXHub steht für mich für Freiheit, und das ist die Philosophie, die ich bei der Entwicklung im Kopf habe. Deshalb können die meisten Nutzer die App vollständig kostenlos verwenden.',
      fr: 'MLXHub représente la liberté pour moi, et c\'est la philosophie que j\'ai en tête quand je la développe. C\'est pourquoi la plupart des utilisateurs peuvent s\'en servir entièrement gratuitement.',
      ja: '私にとってMLXHubは自由の象徴であり、開発するときもその理念を心に留めています。だからこそ、ほとんどのユーザーは完全に無料で使えます。',
      zh: 'MLXHub对我来说代表着自由，这也是我开发它时心中的理念。因此，大多数用户可以完全免费使用它。',
      es: 'MLXHub representa libertad para mí, y esa es la filosofía que tengo en mente cuando la desarrollo. Por eso la mayoría de los usuarios puede usarla totalmente gratis.',
      pt: 'O MLXHub representa liberdade para mim, e essa é a filosofia que tenho em mente ao desenvolvê-lo. Por isso a maioria dos usuários pode usá-lo inteiramente de graça.',
      ar: 'يمثّل MLXHub الحرية بالنسبة لي، وهذه هي الفلسفة التي أضعها في ذهني عند تطويره. ولهذا يستطيع معظم المستخدمين استخدامه مجانًا بالكامل.',
      ko: 'MLXHub는 저에게 자유를 상징하며, 개발할 때 늘 마음에 두는 철학이 바로 그것입니다. 그래서 대부분의 사용자는 앱을 전부 무료로 쓸 수 있습니다.',
    },
    fullQuote: {
      en: [
        'I am a tech enthusiast, and I love what AI brings to us. I am an open-weights AI supporter; I think it is a technology that cannot and should not be withheld from people, because it is a differentiating factor nowadays.',
        'I also love Apple devices, as I have been an iOS engineer since 2018. Even though there were apps that brought local inference to iPhones and iPads, I knew there could be much more for those devices. Apps with a fixed model catalog make you wait for an update before you can use a new model, and custom models like SuperGemma 4 Obliterated are out of the question. Other apps that allowed free access to Hugging Face used only GGUF, not taking advantage of Apple\'s MLX development.',
        'So that is why I built MLXHub: I want it to be the best app for running MLX models on Apple devices, taking full advantage of the hardware, able to use every compatible model (SwissAI Apertus 1.5 from Europe, IFM K2-Horizon from the United Arab Emirates, SuperGemma 4 uncensored) and even models you would never think would fit, like Qwen3.6 35B-A3B through NAND streaming.',
        'MLXHub represents freedom for me, and that is the philosophy I have in mind when I develop it. That is why most users can use it entirely for free; the limitations that exist are few and only for advanced users, like the server or tools that change things, so they support the time, resources and effort invested in the development.',
        'In the latest update, 2.3.0, MLXHub includes an entity that is the visual representation of the system, and a Voice Center, so your iPad can act as your home AI server while replying to your questions. Something similar to Apple Home, but more techie. I have also introduced Voice Mode, image generation, Apple Neural Engine support and benchmarking tools, for free. I want MLXHub to be the reliable assistant for everyone: it works offline, it is fast, it is beautiful, and it is the reference for how any iOS device works with local AI models.',
      ],
      de: [
          'Ich bin Technikbegeisterter und liebe, was KI uns bringt. Ich unterstütze KI mit offenen Gewichten; ich halte sie für eine Technologie, die den Menschen nicht vorenthalten werden kann und darf, weil sie heutzutage ein entscheidender Unterschiedsfaktor ist.',
          'Ich liebe außerdem Apple-Geräte, denn ich bin seit 2018 iOS-Entwickler. Obwohl es bereits Apps gab, die lokale Inferenz auf iPhones und iPads brachten, wusste ich, dass für diese Geräte viel mehr möglich ist. Apps mit festem Modellkatalog lassen Sie auf ein Update warten, bevor Sie ein neues Modell nutzen können, und eigene Modelle wie SuperGemma 4 Obliterated sind ausgeschlossen. Andere Apps, die freien Zugriff auf Hugging Face erlaubten, nutzten nur GGUF und machten sich Apples MLX-Entwicklung nicht zunutze.',
          'Deshalb habe ich MLXHub gebaut: Es soll die beste App zum Ausführen von MLX-Modellen auf Apple-Geräten sein, die Hardware voll ausnutzen, jedes kompatible Modell verwenden können (SwissAI Apertus 1.5 aus Europa, IFM K2-Horizon aus den Vereinigten Arabischen Emiraten, SuperGemma 4 uncensored) und sogar Modelle, von denen man nie denken würde, dass sie passen, wie Qwen3.6 35B-A3B per NAND-Streaming.',
          'MLXHub steht für mich für Freiheit, und das ist die Philosophie, die ich bei der Entwicklung im Kopf habe. Deshalb können die meisten Nutzer die App vollständig kostenlos verwenden; die wenigen Einschränkungen betreffen nur fortgeschrittene Nutzer, etwa den Server oder Tools, die etwas verändern, und sie tragen die in die Entwicklung investierte Zeit, Ressourcen und Mühe.',
          'Im neuesten Update, 2.3.0, enthält MLXHub eine Entität, die das System visuell darstellt, und ein Voice Center, sodass Ihr iPad als KI-Server für Ihr Zuhause dienen kann und dabei Ihre Fragen beantwortet. Ähnlich wie Apple Home, nur technischer. Außerdem habe ich Voice Mode, Bilderzeugung, Unterstützung der Apple Neural Engine und Benchmark-Tools eingeführt, kostenlos. Ich möchte, dass MLXHub der verlässliche Assistent für alle ist: Er funktioniert offline, ist schnell, ist schön und ist die Referenz dafür, wie jedes iOS-Gerät mit lokalen KI-Modellen arbeitet.',
      ],
      fr: [
          'Je suis passionné de technologie et j\'adore ce que l\'IA nous apporte. Je soutiens l\'IA à poids ouverts ; je pense que c\'est une technologie qui ne peut pas et ne doit pas être refusée aux gens, car c\'est aujourd\'hui un facteur de différenciation.',
          'J\'aime aussi les appareils Apple, puisque je suis ingénieur iOS depuis 2018. Même s\'il existait des applications qui apportaient l\'inférence locale aux iPhone et aux iPad, je savais qu\'on pouvait faire bien plus pour ces appareils. Les applications à catalogue de modèles fixe vous obligent à attendre une mise à jour avant de pouvoir utiliser un nouveau modèle, et les modèles personnalisés comme SuperGemma 4 Obliterated sont hors de question. D\'autres applications, qui donnaient un accès libre à Hugging Face, n\'utilisaient que le format GGUF, sans tirer parti des développements MLX d\'Apple.',
          'C\'est pourquoi j\'ai créé MLXHub : je veux qu\'elle soit la meilleure application pour exécuter des modèles MLX sur les appareils Apple, en tirant pleinement parti du matériel, capable d\'utiliser tous les modèles compatibles (SwissAI Apertus 1.5 d\'Europe, IFM K2-Horizon des Émirats arabes unis, SuperGemma 4 non censuré) et même des modèles dont on n\'imaginerait jamais qu\'ils tiennent, comme Qwen3.6 35B-A3B grâce au streaming depuis la NAND.',
          'MLXHub représente la liberté pour moi, et c\'est la philosophie que j\'ai en tête quand je la développe. C\'est pourquoi la plupart des utilisateurs peuvent s\'en servir entièrement gratuitement ; les limitations qui existent sont peu nombreuses et ne concernent que les utilisateurs avancés, comme le serveur ou les outils qui modifient des choses, afin de soutenir le temps, les ressources et les efforts investis dans le développement.',
          'Dans la dernière mise à jour, la 2.3.0, MLXHub inclut une entité qui est la représentation visuelle du système, et un Voice Center, afin que votre iPad puisse faire office de serveur d\'IA domestique tout en répondant à vos questions. Quelque chose de comparable à Apple Maison, mais plus technique. J\'ai aussi ajouté le mode vocal, la génération d\'images, la prise en charge de l\'Apple Neural Engine et des outils de benchmark, gratuitement. Je veux que MLXHub soit l\'assistant fiable de tout le monde : elle fonctionne hors ligne, elle est rapide, elle est belle, et elle est la référence pour le fonctionnement de tout appareil iOS avec des modèles d\'IA locaux.',
      ],
      ja: [
          '私はテック好きで、AIがもたらすものが大好きです。オープンウェイトAIの支持者でもあります。これは人々から遠ざけることができず、また遠ざけるべきでもない技術だと考えています。今の時代、差を生む要素だからです。',
          '私はAppleのデバイスも好きで、2018年からiOSエンジニアをしています。iPhoneやiPadでローカル推論を行うアプリはすでにありましたが、これらのデバイスにはもっと多くの可能性があると分かっていました。モデルのカタログが固定されたアプリでは、新しいモデルを使うにはアップデートを待たなければならず、SuperGemma 4 Obliteratedのようなカスタムモデルは論外です。Hugging Faceへの自由なアクセスを認めている他のアプリは、GGUFしか使わず、AppleのMLXの進展を活かしていませんでした。',
          'だから私はMLXHubを作りました。Apple端末でMLXモデルを動かす最高のアプリにしたいのです。ハードウェアを存分に活かし、互換性のあるあらゆるモデル(欧州のSwissAI Apertus 1.5、アラブ首長国連邦のIFM K2-Horizon、SuperGemma 4 uncensored)を使え、さらにQwen3.6 35B-A3BをNANDストリーミングで動かすような、載るとは思えないモデルまで扱えるようにしたいと考えています。',
          '私にとってMLXHubは自由の象徴であり、開発するときもその理念を心に留めています。だからこそ、ほとんどのユーザーは完全に無料で使えます。制限があるとしても、サーバーや状態を変更するツールなど、上級者向けのごく一部だけです。開発に費やした時間、資源、労力を支えてもらうためです。',
          '最新のアップデートである2.3.0では、MLXHubにシステムを視覚的に表すエンティティとVoice Centerが加わり、iPadが家庭のAIサーバーとして、質問に答えながら動けるようになります。Apple Homeに似ていますが、もっとテック寄りです。Voice Mode、画像生成、Apple Neural Engineへの対応、ベンチマークツールも無料で導入しました。MLXHubを、すべての人にとって頼れるアシスタントにしたいのです。オフラインで動き、速く、美しく、あらゆるiOS端末がローカルAIモデルとどう連携するかの基準になるアプリです。',
      ],
      zh: [
          '我是一名技术爱好者，热爱AI带给我们的一切。我支持开放权重AI；我认为这项技术不能也不应该被人们拒之门外，因为在今天它是一个拉开差距的因素。',
          '我也热爱苹果设备，自2018年起我就是一名iOS工程师。虽然已有一些应用把本地推理带到了iPhone和iPad上，但我知道这些设备能做的远不止于此。模型目录固定的应用，要等到更新之后才能用上新模型，像SuperGemma 4 Obliterated这样的自定义模型更是想都别想。另一些允许免费访问Hugging Face的应用只支持GGUF，没有利用苹果MLX的开发成果。',
          '这就是我打造MLXHub的原因：我希望它成为在苹果设备上运行MLX模型的最佳应用，充分发挥硬件性能，能够使用所有兼容的模型（来自欧洲的SwissAI Apertus 1.5、来自阿联酋的IFM K2-Horizon、SuperGemma 4 uncensored），甚至是那些您想不到能装下的模型，比如通过NAND流式加载运行的Qwen3.6 35B-A3B。',
          'MLXHub对我来说代表着自由，这也是我开发它时心中的理念。因此，大多数用户可以完全免费使用它；现有的限制很少，只针对高级用户，比如服务器或会修改内容的工具，用来支撑开发所投入的时间、资源和精力。',
          '在最新的2.3.0更新中，MLXHub加入了一个代表系统的可视化形象和语音中心，让您的iPad在回答问题的同时，还能充当家庭AI服务器。有点像Apple Home，但更偏技术向。我还免费加入了语音模式、图像生成、Apple Neural Engine支持和基准测试工具。我希望MLXHub成为人人可靠的助手：它能离线工作，速度快，界面美观，是任何iOS设备使用本地AI模型的标杆。',
      ],
      es: [
          'Soy un entusiasta de la tecnología y me encanta lo que la IA nos aporta. Apoyo la IA de pesos abiertos; creo que es una tecnología que no se puede ni se debe negar a las personas, porque hoy en día es un factor diferenciador.',
          'También me encantan los dispositivos Apple, ya que soy ingeniero iOS desde 2018. Aunque ya existían apps que llevaban la inferencia local a iPhones y iPads, sabía que se podía hacer mucho más por esos dispositivos. Las apps con un catálogo fijo de modelos te obligan a esperar una actualización para usar un modelo nuevo, y modelos personalizados como SuperGemma 4 Obliterated quedan fuera de toda posibilidad. Otras apps que permitían el acceso libre a Hugging Face solo usaban GGUF y no aprovechaban el desarrollo de MLX de Apple.',
          'Por eso creé MLXHub: quiero que sea la mejor app para ejecutar modelos MLX en dispositivos Apple, que aproveche al máximo el hardware, que pueda usar todos los modelos compatibles (SwissAI Apertus 1.5 de Europa, IFM K2-Horizon de los Emiratos Árabes Unidos, SuperGemma 4 sin censura) e incluso modelos que jamás pensarías que cabrían, como Qwen3.6 35B-A3B mediante streaming desde NAND.',
          'MLXHub representa libertad para mí, y esa es la filosofía que tengo en mente cuando la desarrollo. Por eso la mayoría de los usuarios puede usarla totalmente gratis; las limitaciones que existen son pocas y solo para usuarios avanzados, como el servidor o las herramientas que cambian cosas, para respaldar el tiempo, los recursos y el esfuerzo invertidos en el desarrollo.',
          'En la última actualización, la 2.3.0, MLXHub incluye una entidad que es la representación visual del sistema y un Centro de voz, para que tu iPad pueda actuar como tu servidor de IA doméstico mientras responde a tus preguntas. Algo parecido a Apple Home, pero más tecnológico. También he incorporado, de forma gratuita, el Modo de voz, la generación de imágenes, la compatibilidad con el Apple Neural Engine y herramientas de benchmarking. Quiero que MLXHub sea el asistente fiable para todos: funciona sin conexión, es rápido, es bonito y es la referencia de cómo cualquier dispositivo iOS trabaja con modelos de IA locales.',
      ],
      pt: [
          'Sou um entusiasta de tecnologia e adoro o que a IA traz para nós. Sou defensor da IA de pesos abertos; acho que é uma tecnologia que não pode nem deve ser negada às pessoas, porque hoje ela é um fator de diferenciação.',
          'Também adoro dispositivos Apple, já que sou engenheiro iOS desde 2018. Mesmo existindo apps que levavam a inferência local para iPhones e iPads, eu sabia que esses aparelhos podiam oferecer muito mais. Apps com um catálogo fixo de modelos fazem você esperar uma atualização para usar um modelo novo, e modelos personalizados como o SuperGemma 4 Obliterated nem entram na conversa. Outros apps que davam acesso livre ao Hugging Face usavam apenas GGUF, sem aproveitar o desenvolvimento do MLX da Apple.',
          'Foi por isso que criei o MLXHub: quero que seja o melhor app para executar modelos MLX em dispositivos Apple, aproveitando todo o hardware, capaz de usar todos os modelos compatíveis (SwissAI Apertus 1.5, da Europa; IFM K2-Horizon, dos Emirados Árabes Unidos; SuperGemma 4 uncensored) e até modelos que você jamais imaginaria que coubessem, como o Qwen3.6 35B-A3B por meio de streaming via NAND.',
          'O MLXHub representa liberdade para mim, e essa é a filosofia que tenho em mente ao desenvolvê-lo. Por isso a maioria dos usuários pode usá-lo inteiramente de graça; as limitações que existem são poucas e voltadas a usuários avançados, como o servidor ou as ferramentas que alteram algo, para sustentar o tempo, os recursos e o esforço investidos no desenvolvimento.',
          'Na atualização mais recente, a 2.3.0, o MLXHub inclui uma entidade que é a representação visual do sistema e uma Voice Center, para que o seu iPad possa atuar como o servidor de IA da sua casa enquanto responde às suas perguntas. Algo parecido com o Apple Home, mas mais techie. Também introduzi o Voice Mode, a geração de imagens, o suporte ao Apple Neural Engine e ferramentas de benchmark, de graça. Quero que o MLXHub seja o assistente confiável para todos: funciona offline, é rápido, é bonito e é a referência de como qualquer dispositivo iOS trabalha com modelos de IA locais.',
      ],
      ar: [
          'أنا شغوف بالتقنية، وأحب ما يقدمه لنا الذكاء الاصطناعي. وأنا من مؤيدي الذكاء الاصطناعي مفتوح الأوزان؛ فأرى أنها تقنية لا يمكن ولا ينبغي حجبها عن الناس، لأنها اليوم عامل تمايز.',
          'كما أحب أجهزة Apple، فأنا مهندس iOS منذ عام 2018. ورغم وجود تطبيقات تجلب الاستدلال المحلي إلى الآيفون والآيباد، كنت أعلم أن بالإمكان تقديم الكثير مما هو أكثر لهذه الأجهزة. التطبيقات ذات كتالوج النماذج الثابت تجعلك تنتظر تحديثًا قبل أن تستخدم نموذجًا جديدًا، والنماذج المخصصة مثل SuperGemma 4 Obliterated خارج الحسبان. أما التطبيقات الأخرى التي أتاحت وصولًا حرًا إلى Hugging Face فاستخدمت GGUF فقط، دون الاستفادة من تطوير Apple لإطار MLX.',
          'لهذا بنيت MLXHub: أريده أن يكون أفضل تطبيق لتشغيل نماذج MLX على أجهزة Apple، يستفيد من العتاد بالكامل، ويستطيع استخدام كل نموذج متوافق (SwissAI Apertus 1.5 من أوروبا، وIFM K2-Horizon من الإمارات العربية المتحدة، وSuperGemma 4 غير المقيَّد)، وحتى نماذج لا يخطر ببالك أنها ستتسع، مثل Qwen3.6 35B-A3B عبر بث NAND.',
          'يمثّل MLXHub الحرية بالنسبة لي، وهذه هي الفلسفة التي أضعها في ذهني عند تطويره. ولهذا يستطيع معظم المستخدمين استخدامه مجانًا بالكامل؛ فالقيود الموجودة قليلة ولا تخص إلا المستخدمين المتقدمين، مثل الخادم أو الأدوات التي تغيّر الأشياء، حتى يدعموا الوقت والموارد والجهد المبذولة في التطوير.',
          'في التحديث الأخير 2.3.0، يتضمن MLXHub كيانًا هو التمثيل المرئي للنظام، ومركز Voice Center، بحيث يعمل الآيباد خادم ذكاء اصطناعي منزليًا يرد على أسئلتك. شيء يشبه Apple Home لكنه أكثر تقنية. كما أضفت Voice Mode وتوليد الصور ودعم Apple Neural Engine وأدوات قياس الأداء، مجانًا. أريد أن يكون MLXHub المساعد الموثوق للجميع: يعمل دون إنترنت، وهو سريع، وجميل، ومرجع لكيفية عمل أي جهاز iOS مع نماذج الذكاء الاصطناعي المحلية.',
      ],
      ko: [
          '저는 기술 애호가이며, AI가 우리에게 가져다주는 것을 정말 좋아합니다. 저는 오픈 웨이트 AI를 지지합니다. 요즘 이 기술은 차별화 요소이기 때문에 사람들에게서 빼앗을 수도, 빼앗아서도 안 된다고 생각합니다.',
          '저는 Apple 기기도 아주 좋아합니다. 2018년부터 iOS 엔지니어로 일해 왔습니다. 아이폰과 아이패드에 로컬 추론을 가져온 앱들이 이미 있었지만, 이 기기들에는 훨씬 더 많은 가능성이 있다는 것을 알고 있었습니다. 모델 카탈로그가 고정된 앱은 새 모델을 쓰려면 업데이트를 기다려야 하고, SuperGemma 4 Obliterated 같은 커스텀 모델은 아예 불가능합니다. Hugging Face에 자유롭게 접근할 수 있게 한 다른 앱들은 GGUF만 사용해서 Apple의 MLX 개발 성과를 활용하지 못했습니다.',
          '그래서 MLXHub를 만들었습니다. Apple 기기에서 MLX 모델을 실행하는 최고의 앱이 되어, 하드웨어를 온전히 활용하고, 호환되는 모든 모델(유럽의 SwissAI Apertus 1.5, 아랍에미리트의 IFM K2-Horizon, SuperGemma 4 uncensored)을 쓸 수 있게 하고, NAND 스트리밍을 통한 Qwen3.6 35B-A3B처럼 들어갈 거라고는 생각지 못한 모델까지 실행하게 하는 것이 제 바람입니다.',
          'MLXHub는 저에게 자유를 상징하며, 개발할 때 늘 마음에 두는 철학이 바로 그것입니다. 그래서 대부분의 사용자는 앱을 전부 무료로 쓸 수 있습니다. 존재하는 제한은 서버나 무언가를 변경하는 도구처럼 고급 사용자를 위한 소수의 기능뿐이며, 개발에 들어간 시간과 자원, 노력을 뒷받침하기 위한 것입니다.',
          '최신 업데이트인 2.3.0에는 시스템을 시각적으로 나타내는 엔티티와 음성 센터가 들어 있어, 아이패드가 질문에 답하면서 집 안의 AI 서버 역할을 할 수 있습니다. Apple Home과 비슷하지만 좀 더 기술 지향적인 것입니다. 음성 모드, 이미지 생성, Apple Neural Engine 지원, 벤치마크 도구도 무료로 도입했습니다. MLXHub가 모두를 위한 믿을 수 있는 어시스턴트가 되기를 바랍니다. 오프라인에서 작동하고, 빠르고, 아름다우며, 모든 iOS 기기가 로컬 AI 모델과 어떻게 작동해야 하는지를 보여 주는 기준이 되기를 바랍니다.',
      ],
    },
  },
}
