// Local AI App Directory — TokForge (layer: mobile)
// Added 2026-10-03 at the operator's request (third app of the October mobile batch).
// Verified on 2026-10-03 against: the Google Play listing (play.google.com/store/apps/details?id=dev.tokforge —
// "TokForge Local AI Offline Chat" by Defcon-One, developer contact Isaac Maple (United States), 5K+ downloads,
// updated 2026-09-20, Entertainment category, Data safety: "No data shared with third parties" and "No data collected",
// no in-app-purchase or ads labels on the page) and the developer's own site tokforge.ai (version 1.0, free, iPhone/iPad
// as a TestFlight public beta, minimum 4 GB RAM for small models and 8 GB+ for larger ones, "No public repo" in the
// developer's own comparison guide). Maker comment from Isaac Maple added 2026-10-05 (see `founder` below).
// Corrections 2026-10-09 from Isaac Maple, verified against tokforge.ai/terms and tokforge.ai/faq: version 1.3.6.1 (the site's 1.0 is a launch leftover),
// proprietary license (terms §2), no ads/in-app purchases/subscriptions, public TestFlight beta, MNN on OpenCL and Vulkan.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tokforge',
  name: 'TokForge',
  categories: ['general-chat-clients', 'roleplay-companions', 'image-generation'],
  interfaces: ['mobile'],
  locality: 'local', // inference runs on-device; web search is off by default, and benchmark leaderboard posting is opt-in
  platforms: ['android'], // iPhone/iPad is a public TestFlight beta (open to anyone), not on the App Store — mentioned in the review, not listed as a platform
  worksWith: ['llama.cpp', 'MNN', 'Hugging Face', 'OpenAI-compatible servers'],
  engine: 'both', // built-in llama.cpp (GGUF) and MNN engines, plus connecting to your own OpenAI-compatible server
  license: 'Proprietary', // closed source; license in section 2 of tokforge.ai/terms (limited personal, non-commercial use), confirmed by the developer 2026-10-09
  price: 'free', // Play listing and tokforge.ai: free, no account; developer FAQ (tokforge.ai/faq, checked 2026-10-09): no ads, in-app purchases or subscriptions
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // tokforge.ai: minimum 4 GB RAM for small models, 8 GB+ for larger; speed depends on the SoC (Adreno GPU / Snapdragon NPU paths)
  stars: null,
  addedDate: '2026-10-03',
  status: 'listed',
  uses: ['phone', 'chat', 'image', 'audio', 'docs'],
  url: 'tokforge.ai',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=dev.tokforge',
    web: 'https://tokforge.ai',
  },
  tagline: {
    en: 'Offline Android AI chat with roleplay characters, image generation, voice and a speed leaderboard',
    de: 'Offline-KI-Chat für Android mit Rollenspiel-Charakteren, Bildgenerierung, Sprache und Geschwindigkeits-Rangliste',
    fr: "Chat IA hors ligne pour Android avec personnages de jeu de rôle, génération d'images, voix et classement de vitesse",
    ja: 'ロールプレイキャラクター、画像生成、音声、速度リーダーボードを備えたAndroid向けオフラインAIチャット',
    zh: '支持角色扮演、图像生成、语音和速度排行榜的Android离线AI聊天应用',
    es: 'Chat de IA offline para Android con personajes de rol, generación de imágenes, voz y clasificación de velocidad',
    pt: 'Chat de IA offline para Android com personagens de roleplay, geração de imagens, voz e ranking de velocidade',
    ar: 'دردشة ذكاء اصطناعي دون اتصال لـ Android مع شخصيات لعب أدوار وتوليد صور وصوت ولوحة صدارة للسرعة',
    ko: '롤플레이 캐릭터, 이미지 생성, 음성, 속도 리더보드를 갖춘 Android 오프라인 AI 채팅',
  },
  // Comparison attributes: each value taken from the Play description on 2026-10-03; a missing key = not stated, never false.
  // modelDownloads = built-in downloader with Hugging Face search and a curated 52-model catalog; voice = Kokoro text-to-speech,
  // voice cloning and voice input. importModels / visionInput are not stated in the sources read and stay unset.
  compare: { offline: true, modelDownloads: true, voice: true },
  lastVerifiedDate: '2026-10-09',
  founderReviewedDate: '2026-10-05', // Isaac Maple supplied his own comment 2026-10-05; drives the amber Founder-reviewed banner + star on tile, drawer and review
  founder: {
    who: {
      en: 'Isaac Maple, developer',
      de: 'Isaac Maple, Entwickler',
      fr: 'Isaac Maple, développeur',
      ja: 'Isaac Maple氏、開発者',
      zh: 'Isaac Maple,开发者',
      es: 'Isaac Maple, desarrollador',
      pt: 'Isaac Maple, desenvolvedor',
      ar: 'Isaac Maple، مطور',
      ko: 'Isaac Maple, 개발자',
    },
    why: {
      en: 'So that\'s why I built it. I figure AI inference costs will keep going up and become more expensive for regular people to access AI they own, on their own devices, that isn\'t filtered or censored. So I wanted to make something that addressed that and was fast, free and without ads.',
      de: 'Deshalb habe ich sie gebaut. Ich gehe davon aus, dass die Kosten für KI-Inferenz weiter steigen und es für normale Menschen teurer wird, Zugang zu KI zu bekommen, die ihnen gehört, auf ihren eigenen Geräten läuft und weder gefiltert noch zensiert ist. Also wollte ich etwas bauen, das genau das angeht und dabei schnell, kostenlos und werbefrei ist.',
      fr: 'Voilà pourquoi je l\'ai créée. Je pense que les coûts de l\'inférence IA vont continuer à augmenter et qu\'il deviendra plus cher pour le grand public d\'accéder à une IA qui lui appartient, sur ses propres appareils, sans filtre ni censure. J\'ai donc voulu créer quelque chose qui réponde à cela, et qui soit rapide, gratuit et sans publicité.',
      ja: 'それが作った理由です。AI推論のコストは今後も上がり続け、一般の人が自分のデバイスで、フィルタリングも検閲もされない、自分のものと言えるAIを使うのは、さらに高くつくようになると考えています。そこで、その課題に応える、高速で無料、広告なしのものを作りたいと思いました。',
      zh: '这就是我做它的原因。我认为AI推理的成本会持续上升,普通人要使用属于自己、运行在自己设备上、没有过滤和审查的AI会变得更贵。所以我想做出一款能解决这个问题的应用,既快速、免费,又没有广告。',
      es: 'Por eso la creé. Calculo que los costes de la inferencia de IA seguirán subiendo y que será más caro para la gente común acceder a una IA que sea suya, en sus propios dispositivos, sin filtros ni censura. Así que quise hacer algo que abordara eso y que fuera rápido, gratuito y sin anuncios.',
      pt: 'Foi por isso que o criei. Imagino que os custos de inferência de IA continuarão subindo e que ficará mais caro para as pessoas comuns terem acesso a uma IA que seja delas, nos próprios dispositivos, sem filtros nem censura. Então quis fazer algo que abordasse isso e que fosse rápido, gratuito e sem anúncios.',
      ar: 'لهذا بنيته. أتوقع أن تستمر تكاليف الاستدلال بالذكاء الاصطناعي في الارتفاع وأن يصبح وصول الناس العاديين إلى ذكاء اصطناعي يملكونه ويعمل على أجهزتهم من دون فلترة أو رقابة أكثر كلفة. لذلك أردت أن أصنع شيئًا يعالج ذلك، وأن يكون سريعًا ومجانيًا وخاليًا من الإعلانات.',
      ko: '그래서 만들었습니다. 저는 AI 추론 비용이 계속 오르고, 일반 사람들이 자신의 기기에서 필터링이나 검열 없이 자기 소유의 AI를 쓰는 데 점점 더 많은 비용이 들게 될 것이라고 생각합니다. 그래서 이 문제를 해결하면서 빠르고, 무료이고, 광고 없는 것을 만들고 싶었습니다.',
    },
    pullQuote: {
      en: 'I think our best feature is autoForge, which finds the best and fastest inference setup for each handset and model: CPU, OpenCL or Vulkan, thread count and context size.',
      de: 'Ich denke, unser bestes Feature ist autoForge, das für jedes Gerät und jedes Modell das beste und schnellste Inferenz-Setup findet: CPU, OpenCL oder Vulkan, Thread-Anzahl und Kontextgröße.',
      fr: 'Je pense que notre meilleure fonctionnalité est autoForge, qui trouve la configuration d\'inférence la meilleure et la plus rapide pour chaque appareil et chaque modèle : CPU, OpenCL ou Vulkan, nombre de threads et taille du contexte.',
      ja: '最大の特長はautoForgeだと思っています。端末とモデルの組み合わせごとに、CPU、OpenCL、Vulkanの選択、スレッド数、コンテキストサイズといった最適で最速の推論設定を見つけ出します。',
      zh: '我认为我们最好的功能是autoForge,它会针对每台手机和每个模型找到最佳、最快的推理配置:CPU、OpenCL或Vulkan、线程数和上下文长度。',
      es: 'Creo que nuestra mejor función es autoForge, que encuentra la mejor y más rápida configuración de inferencia para cada dispositivo y modelo: CPU, OpenCL o Vulkan, número de hilos y tamaño de contexto.',
      pt: 'Acho que o nosso melhor recurso é o autoForge, que encontra a melhor e mais rápida configuração de inferência para cada aparelho e modelo: CPU, OpenCL ou Vulkan, número de threads e tamanho de contexto.',
      ar: 'أعتقد أن أفضل ميزة لدينا هي autoForge، التي تجد أفضل وأسرع إعداد للاستدلال لكل جهاز ولكل نموذج: CPU أو OpenCL أو Vulkan، وعدد الخيوط (threads)، وحجم السياق.',
      ko: '가장 좋은 기능은 autoForge라고 생각합니다. 기기와 모델마다 CPU, OpenCL 또는 Vulkan, 스레드 수, 컨텍스트 크기까지 가장 좋고 빠른 추론 설정을 찾아줍니다.',
    },
    providedDate: '2026-10-05',
    // Verbatim maker comment (lightly cleaned), same text as the "From the Maker" section in tokforge-review.ts.
    fullQuote: {
      en: [
        'I think our best feature is autoForge, which finds the best and fastest inference setup for each handset and model: CPU, OpenCL or Vulkan, thread count and context size.',
        'The app is really just me and one other buddy, guardian37x in the Discord.',
        'I convert and try to optimize a lot of the smaller LLMs for Edge AI and upload them to my Hugging Face account. I think there are around 85 models there now.',
        'As for why I built it: when I started, there were a few other options for mobile inference, but most were llama/GGUF based, cost money, were filtered, had ads, and weren\'t really performance-based or didn\'t have an API backend to really dive in. I also hadn\'t seen any that used MNN, and as an engineer, MNN at that time was sometimes 50% faster than GGUF, which was really exciting.',
        'So that\'s why I built it. I figure AI inference costs will keep going up and become more expensive for regular people to access AI they own, on their own devices, that isn\'t filtered or censored. So I wanted to make something that addressed that and was fast, free and without ads.',
      ],
      de: [
        'Ich denke, unser bestes Feature ist autoForge, das für jedes Gerät und jedes Modell das beste und schnellste Inferenz-Setup findet: CPU, OpenCL oder Vulkan, Thread-Anzahl und Kontextgröße.',
        'Die App besteht eigentlich nur aus mir und einem weiteren Kumpel, guardian37x auf Discord.',
        'Ich konvertiere und optimiere viele der kleineren LLMs für Edge AI und lade sie in meinen Hugging-Face-Account hoch. Ich glaube, es sind dort inzwischen rund 85 Modelle.',
        'Warum ich sie gebaut habe: Als ich anfing, gab es einige andere Optionen für mobile Inferenz, aber die meisten basierten auf llama/GGUF, kosteten Geld, waren gefiltert, hatten Werbung und waren nicht wirklich leistungsorientiert oder hatten kein API-Backend, mit dem man richtig tief einsteigen konnte. Außerdem hatte ich noch keine gesehen, die MNN nutzte, und als Ingenieur fand ich es sehr spannend, dass MNN damals manchmal 50 % schneller war als GGUF.',
        'Deshalb habe ich sie gebaut. Ich gehe davon aus, dass die Kosten für KI-Inferenz weiter steigen und es für normale Menschen teurer wird, Zugang zu KI zu bekommen, die ihnen gehört, auf ihren eigenen Geräten läuft und weder gefiltert noch zensiert ist. Also wollte ich etwas bauen, das genau das angeht und dabei schnell, kostenlos und werbefrei ist.',
      ],
      fr: [
        'Je pense que notre meilleure fonctionnalité est autoForge, qui trouve la configuration d\'inférence la meilleure et la plus rapide pour chaque appareil et chaque modèle : CPU, OpenCL ou Vulkan, nombre de threads et taille du contexte.',
        'L\'application, c\'est en réalité juste moi et un autre ami, guardian37x sur Discord.',
        'Je convertis et j\'essaie d\'optimiser beaucoup de petits LLM pour l\'Edge AI et je les publie sur mon compte Hugging Face. Je crois qu\'il y a environ 85 modèles aujourd\'hui.',
        'Pourquoi je l\'ai créée : quand j\'ai commencé, il existait quelques autres options pour l\'inférence mobile, mais la plupart reposaient sur llama/GGUF, étaient payantes, filtrées, avaient des publicités et n\'étaient pas vraiment axées sur la performance ou n\'avaient pas de backend API permettant de creuser vraiment. Je n\'en avais en outre vu aucune qui utilise MNN, et en tant qu\'ingénieur, MNN était à l\'époque parfois 50 % plus rapide que GGUF, ce qui était vraiment enthousiasmant.',
        'Voilà pourquoi je l\'ai créée. Je pense que les coûts de l\'inférence IA vont continuer à augmenter et qu\'il deviendra plus cher pour le grand public d\'accéder à une IA qui lui appartient, sur ses propres appareils, sans filtre ni censure. J\'ai donc voulu créer quelque chose qui réponde à cela, et qui soit rapide, gratuit et sans publicité.',
      ],
      ja: [
        '最大の特長はautoForgeだと思っています。端末とモデルの組み合わせごとに、CPU、OpenCL、Vulkanの選択、スレッド数、コンテキストサイズといった最適で最速の推論設定を見つけ出します。',
        'このアプリは実質的に私と、Discordのguardian37xというもう一人の仲間だけで作っています。',
        'Edge AI向けに小型のLLMを数多く変換・最適化し、自分のHugging Faceアカウントにアップロードしています。現在は約85モデルあると思います。',
        'なぜ作ったのかというと、私が始めた頃、モバイル推論の選択肢はいくつかありましたが、ほとんどがllama/GGUFベースで、有料だったり、フィルタリングされていたり、広告が表示されたりし、性能重視でもなく、深く掘り下げられるAPIバックエンドもありませんでした。MNNを使ったものも見たことがなく、エンジニアとして、当時のMNNはGGUFより最大50%速いこともあり、とてもわくわくしました。',
        'それが作った理由です。AI推論のコストは今後も上がり続け、一般の人が自分のデバイスで、フィルタリングも検閲もされない、自分のものと言えるAIを使うのは、さらに高くつくようになると考えています。そこで、その課題に応える、高速で無料、広告なしのものを作りたいと思いました。',
      ],
      zh: [
        '我认为我们最好的功能是autoForge,它会针对每台手机和每个模型找到最佳、最快的推理配置:CPU、OpenCL或Vulkan、线程数和上下文长度。',
        '这款应用其实只有我和另一位朋友,也就是Discord上的guardian37x。',
        '我把许多较小的LLM转换并尽量优化,用于Edge AI,然后上传到我的Hugging Face账号。我想现在大约有85个模型。',
        '至于我为什么要做它:我刚开始时,移动端推理有几个其他选择,但大多基于llama/GGUF,要收费、有过滤、带广告,而且并不真正以性能为导向,也没有可以深入使用的API后端。我也没见过使用MNN的应用,而作为工程师,当时的MNN有时比GGUF快50%,这让我非常兴奋。',
        '这就是我做它的原因。我认为AI推理的成本会持续上升,普通人要使用属于自己、运行在自己设备上、没有过滤和审查的AI会变得更贵。所以我想做出一款能解决这个问题的应用,既快速、免费,又没有广告。',
      ],
      es: [
        'Creo que nuestra mejor función es autoForge, que encuentra la mejor y más rápida configuración de inferencia para cada dispositivo y modelo: CPU, OpenCL o Vulkan, número de hilos y tamaño de contexto.',
        'La app es en realidad solo yo y otro amigo, guardian37x en Discord.',
        'Convierto y trato de optimizar muchos de los LLM más pequeños para Edge AI y los subo a mi cuenta de Hugging Face. Creo que ahora hay unos 85 modelos allí.',
        'En cuanto a por qué la creé: cuando empecé, había algunas otras opciones para inferencia móvil, pero la mayoría se basaban en llama/GGUF, costaban dinero, estaban filtradas, tenían anuncios y no estaban realmente orientadas al rendimiento ni tenían un backend de API para profundizar de verdad. Tampoco había visto ninguna que usara MNN, y como ingeniero, MNN en ese momento era a veces un 50 % más rápido que GGUF, lo que me entusiasmaba mucho.',
        'Por eso la creé. Calculo que los costes de la inferencia de IA seguirán subiendo y que será más caro para la gente común acceder a una IA que sea suya, en sus propios dispositivos, sin filtros ni censura. Así que quise hacer algo que abordara eso y que fuera rápido, gratuito y sin anuncios.',
      ],
      pt: [
        'Acho que o nosso melhor recurso é o autoForge, que encontra a melhor e mais rápida configuração de inferência para cada aparelho e modelo: CPU, OpenCL ou Vulkan, número de threads e tamanho de contexto.',
        'O aplicativo é, na verdade, só eu e mais um amigo, o guardian37x no Discord.',
        'Eu converto e tento otimizar muitos dos LLMs menores para Edge AI e os envio para a minha conta no Hugging Face. Acho que hoje há cerca de 85 modelos lá.',
        'Quanto ao motivo de eu tê-lo criado: quando comecei, havia algumas outras opções de inferência móvel, mas a maioria era baseada em llama/GGUF, custava dinheiro, era filtrada, tinha anúncios e não era realmente focada em desempenho nem tinha um backend de API para se aprofundar de verdade. Também não tinha visto nenhuma que usasse MNN, e, como engenheiro, o MNN na época chegava a ser 50% mais rápido que o GGUF, o que era muito empolgante.',
        'Foi por isso que o criei. Imagino que os custos de inferência de IA continuarão subindo e que ficará mais caro para as pessoas comuns terem acesso a uma IA que seja delas, nos próprios dispositivos, sem filtros nem censura. Então quis fazer algo que abordasse isso e que fosse rápido, gratuito e sem anúncios.',
      ],
      ar: [
        'أعتقد أن أفضل ميزة لدينا هي autoForge، التي تجد أفضل وأسرع إعداد للاستدلال لكل جهاز ولكل نموذج: CPU أو OpenCL أو Vulkan، وعدد الخيوط (threads)، وحجم السياق.',
        'التطبيق في الواقع مجرد أنا وصديق آخر، هو guardian37x على Discord.',
        'أقوم بتحويل الكثير من نماذج LLM الأصغر وتحسينها لـ Edge AI وأرفعها إلى حسابي على Hugging Face. أظن أن هناك نحو 85 نموذجًا هناك الآن.',
        'أما لماذا بنيته: حين بدأت، كانت هناك بعض الخيارات الأخرى للاستدلال على الهاتف، لكن معظمها كان قائمًا على llama/GGUF، وبعضها مدفوع أو مفلتر أو يعرض إعلانات، ولم تكن موجهة فعلًا نحو الأداء ولا تملك واجهة API خلفية للتعمق حقًا. ولم أكن قد رأيت أيًا منها يستخدم MNN، وبصفتي مهندسًا، كان MNN في ذلك الوقت أسرع أحيانًا بنسبة 50% من GGUF، وكان ذلك مثيرًا حقًا.',
        'لهذا بنيته. أتوقع أن تستمر تكاليف الاستدلال بالذكاء الاصطناعي في الارتفاع وأن يصبح وصول الناس العاديين إلى ذكاء اصطناعي يملكونه ويعمل على أجهزتهم من دون فلترة أو رقابة أكثر كلفة. لذلك أردت أن أصنع شيئًا يعالج ذلك، وأن يكون سريعًا ومجانيًا وخاليًا من الإعلانات.',
      ],
      ko: [
        '가장 좋은 기능은 autoForge라고 생각합니다. 기기와 모델마다 CPU, OpenCL 또는 Vulkan, 스레드 수, 컨텍스트 크기까지 가장 좋고 빠른 추론 설정을 찾아줍니다.',
        '이 앱은 사실 저와 Discord의 guardian37x라는 친구 한 명이 전부입니다.',
        'Edge AI용으로 작은 LLM을 많이 변환하고 최적화해서 제 Hugging Face 계정에 올리고 있습니다. 지금은 약 85개 모델이 있는 것 같습니다.',
        '제가 이 앱을 만든 이유는, 제가 시작했을 때 모바일 추론에는 몇 가지 다른 선택지가 있었지만 대부분 llama/GGUF 기반이었고, 유료이거나 필터링이 되어 있거나 광고가 있었으며, 성능 중심이 아니거나 깊이 파고들 수 있는 API 백엔드가 없었기 때문입니다. MNN을 쓰는 앱도 본 적이 없었고, 엔지니어로서 당시 MNN은 GGUF보다 때로는 50% 더 빨라서 정말 흥미로웠습니다.',
        '그래서 만들었습니다. 저는 AI 추론 비용이 계속 오르고, 일반 사람들이 자신의 기기에서 필터링이나 검열 없이 자기 소유의 AI를 쓰는 데 점점 더 많은 비용이 들게 될 것이라고 생각합니다. 그래서 이 문제를 해결하면서 빠르고, 무료이고, 광고 없는 것을 만들고 싶었습니다.',
      ],
    },
  },
  reviewSlug: 'tokforge-review',
  pqReview: {
    date: '2026-10-03',
    version: '1.3.6.1', // confirmed by the developer 2026-10-09; the 1.0 on tokforge.ai and the Play listing is a launch leftover
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=dev.tokforge',
  },
  verdict: 'Best for Android users who want a free offline chat app with roleplay characters, on-device image generation, voice and per-chip speed benchmarking; limited by proprietary closed source, a small install base, and an iPhone version that is still a public TestFlight beta.',
}
