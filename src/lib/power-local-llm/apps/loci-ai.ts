// Local AI App Directory — Loci AI (layer: mobile)
// Added manually — has a full PromptQuorum review (loci-ai-review-offline-local-ai),
// so tagline/url/license/platforms are sourced from that article, not TODO placeholders.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'loci-ai',
  name: 'Loci AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'], // desktop added 2026-10-23: Mac + Windows (beta) builds listed on askloci.ai
  locality: 'local',
  platforms: ['ios', 'android', 'mac', 'win'],
  worksWith: ['Ollama'],
  engine: 'both',
  license: 'Closed source',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-08-22',
  founderReviewedDate: '2026-10-23',
  status: 'listed',
  uses: ['chat'],
  url: 'askloci.ai',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/loci-private-local-ai/id6762100748',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.lociai.loci',
    web: 'https://askloci.ai/download/',
  },
  installEffort: 'installer',
  installEvidence: 'askloci.ai (read 2026-10-23): App Store listing (iOS 18+), Google Play app.lociai.loci, direct Mac download (/api/mac-download), Windows x64/ARM64 installer marked beta (askloci.ai/windows)',
  tagline: {
    en: 'Offline AI assistant for iPhone, Android, iPad, Mac and Windows',
    de: 'Offline-KI-Assistent für iPhone, Android, iPad, Mac und Windows',
    fr: 'Assistant IA hors ligne pour iPhone, Android, iPad, Mac et Windows',
    ja: 'iPhone、Android、iPad、Mac、Windows向けオフラインAIアシスタント',
    zh: 'iPhone、Android、iPad、Mac和Windows的离线AI助手',
    es: 'Asistente de IA offline para iPhone, Android, iPad, Mac y Windows',
    pt: 'Assistente de IA offline para iPhone, Android, iPad, Mac e Windows',
    ar: 'مساعد ذكاء اصطناعي يعمل بلا اتصال لأجهزة iPhone وAndroid وiPad وMac وWindows',
    ko: 'iPhone, Android, iPad, Mac, Windows용 오프라인 AI 어시스턴트',
  },
  reviewSlug: 'loci-ai-review-offline-local-ai', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { offline: true, modelDownloads: true },
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-23', // App Store v1.3.31 listed as updated "7h ago" when read 2026-10-23 (relative time only, so the date is the read date); mobile builds only
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/loci/id6762100748',
  pqReview: {
    date: '2026-10-23',
    version: '1.3.31',
    versionSourceUrl: 'https://apps.apple.com/us/app/loci-private-local-ai/id6762100748', // iOS build; Mac/Windows/Android builds publish no version number
  },
  founder: {
    who: {
      en: 'Michael Waldman, Founder & CEO, Loci AI, Inc.',
      de: 'Michael Waldman, Gründer und CEO, Loci AI, Inc.',
      fr: 'Michael Waldman, fondateur et PDG, Loci AI, Inc.',
      ja: 'Michael Waldman、創業者兼CEO、Loci AI, Inc.',
      zh: 'Michael Waldman,创始人兼 CEO,Loci AI, Inc.',
      es: 'Michael Waldman, fundador y CEO, Loci AI, Inc.',
      pt: 'Michael Waldman, fundador e CEO, Loci AI, Inc.',
      ar: 'Michael Waldman، المؤسس والرئيس التنفيذي، Loci AI, Inc.',
      ko: 'Michael Waldman, 창업자 겸 CEO, Loci AI, Inc.',
    },
    why: {
      en: 'We built Loci because we believe capable AI should be a public good, not a subscription that sends every word to a data center. The biggest surprise of the last year is how far open models have come. On a Mac, Loci now runs models that score above frontier cloud models on independent benchmarks, for free and fully offline. Most of our work goes into making that feel effortless: picking the right model for your hardware, keeping long sessions stable, and letting your phone use your desktop\'s power. We\'re particularly excited about our universal harness, which is focused on increasing performance of smaller models. Most importantly, Loci is working on an inference engine, which gives us full control of local execution and will continue to push the frontier of local AI.',
      de: 'Wir haben Loci entwickelt, weil wir glauben, dass leistungsfähige KI ein öffentliches Gut sein sollte und kein Abonnement, das jedes Wort an ein Rechenzentrum schickt. Die größte Überraschung des letzten Jahres ist, wie weit offene Modelle gekommen sind. Auf einem Mac führt Loci jetzt Modelle aus, die in unabhängigen Benchmarks über führenden Cloud-Modellen liegen – kostenlos und vollständig offline. Der größte Teil unserer Arbeit steckt darin, dass sich das mühelos anfühlt: das richtige Modell für Ihre Hardware zu wählen, lange Sitzungen stabil zu halten und Ihr Smartphone die Leistung Ihres Desktops nutzen zu lassen. Besonders freuen wir uns über unser Universal Harness, das darauf ausgerichtet ist, die Leistung kleinerer Modelle zu steigern. Am wichtigsten: Loci arbeitet an einer eigenen Inferenz-Engine, die uns die volle Kontrolle über die lokale Ausführung gibt und die Grenzen lokaler KI weiter verschieben wird.',
      fr: 'Nous avons créé Loci parce que nous pensons qu\'une IA performante devrait être un bien public, et non un abonnement qui envoie chaque mot vers un centre de données. La plus grande surprise de l\'année écoulée est la façon dont les modèles ouverts ont progressé. Sur un Mac, Loci exécute désormais des modèles qui obtiennent de meilleurs scores que les modèles cloud de pointe sur des benchmarks indépendants, gratuitement et entièrement hors ligne. L\'essentiel de notre travail consiste à rendre cela fluide : choisir le bon modèle pour votre matériel, garder les longues sessions stables et permettre à votre téléphone d\'utiliser la puissance de votre ordinateur de bureau. Nous sommes particulièrement enthousiastes à propos de notre harnais universel, qui vise à améliorer les performances des petits modèles. Surtout, Loci travaille sur un moteur d\'inférence, qui nous donne un contrôle total de l\'exécution locale et continuera de repousser les limites de l\'IA locale.',
      ja: '私たちがLociを作ったのは、高性能なAIは、すべての言葉をデータセンターに送るサブスクリプションではなく、公共財であるべきだと信じているからです。この1年で最大の驚きは、オープンモデルがどれほど進歩したかです。Macでは、Lociは今や、独立したベンチマークで最先端のクラウドモデルを上回るスコアのモデルを、無料で、完全にオフラインで実行します。 私たちの作業の大半は、それを無理なく感じられるようにすることに費やされています。つまり、お使いのハードウェアに合うモデルを選ぶこと、長いセッションを安定させること、そしてスマートフォンがデスクトップの性能を使えるようにすることです。特に力を入れているのが、小型モデルの性能向上に注力したユニバーサルハーネスです。そして何より、Lociは推論エンジンの開発に取り組んでいます。これによりローカル実行を完全に制御でき、ローカルAIのフロンティアを押し広げ続けます。',
      zh: '我们打造 Loci,是因为我们相信强大的 AI 应当是公共产品,而不是把每一句话都发送到数据中心的订阅服务。过去一年最大的惊喜,是开源模型进步得如此之快。在 Mac 上,Loci 现在可以运行在独立基准测试中得分高于前沿云端模型的模型,免费且完全离线。 我们的大部分工作都用于让这一切显得毫不费力:为您的硬件选择合适的模型、让长时间会话保持稳定,并让您的手机使用桌面电脑的算力。我们尤其期待我们的通用框架,它专注于提升小模型的性能。最重要的是,Loci 正在研发推理引擎,这让我们完全掌控本地执行,并将继续推动本地 AI 的前沿。',
      es: 'Creamos Loci porque creemos que una IA capaz debería ser un bien público, no una suscripción que envía cada palabra a un centro de datos. La mayor sorpresa del último año es lo lejos que han llegado los modelos abiertos. En un Mac, Loci ejecuta ahora modelos que puntúan por encima de los modelos de nube de vanguardia en benchmarks independientes, gratis y totalmente sin conexión. La mayor parte de nuestro trabajo consiste en que eso resulte sencillo: elegir el modelo adecuado para tu hardware, mantener estables las sesiones largas y dejar que tu teléfono use la potencia de tu escritorio. Nos entusiasma especialmente nuestro arnés universal, centrado en mejorar el rendimiento de los modelos más pequeños. Lo más importante: Loci trabaja en un motor de inferencia, que nos da control total de la ejecución local y seguirá empujando la frontera de la IA local.',
      pt: 'Criamos o Loci porque acreditamos que uma IA capaz deve ser um bem público, e não uma assinatura que envia cada palavra a um data center. A maior surpresa do último ano é o quanto os modelos abertos evoluíram. Em um Mac, o Loci agora executa modelos que pontuam acima dos modelos de nuvem de ponta em benchmarks independentes, de graça e totalmente offline. A maior parte do nosso trabalho é fazer isso parecer natural: escolher o modelo certo para o seu hardware, manter sessões longas estáveis e deixar o seu celular usar o poder do seu desktop. Estamos especialmente animados com o nosso arcabouço universal, voltado a aumentar o desempenho de modelos menores. Mais importante ainda: o Loci está trabalhando em um mecanismo de inferência, que nos dá controle total da execução local e continuará a empurrar a fronteira da IA local.',
      ar: 'بنينا Loci لأننا نؤمن بأن الذكاء الاصطناعي القادر ينبغي أن يكون منفعة عامة، لا اشتراكاً يرسل كل كلمة إلى مركز بيانات. أكبر مفاجآت العام الماضي هي المدى الذي بلغته النماذج المفتوحة. على Mac، يشغّل Loci الآن نماذج تتفوق نتائجها على نماذج السحابة المتقدمة في اختبارات الأداء المستقلة، مجاناً ودون اتصال بالكامل. يذهب معظم عملنا إلى جعل ذلك يبدو سهلاً: اختيار النموذج المناسب لعتادك، والحفاظ على استقرار الجلسات الطويلة، وتمكين هاتفك من استخدام قدرة جهاز سطح المكتب. نحن متحمسون بشكل خاص لإطارنا الشامل (universal harness) الذي يركز على رفع أداء النماذج الأصغر. والأهم أن Loci يعمل على محرك استدلال يمنحنا تحكماً كاملاً في التنفيذ المحلي وسيواصل دفع حدود الذكاء الاصطناعي المحلي.',
      ko: '우리는 유능한 AI가 모든 말을 데이터 센터로 보내는 구독 서비스가 아니라 공공재여야 한다고 믿기 때문에 Loci를 만들었습니다. 지난 1년간 가장 놀라웠던 점은 오픈 모델이 얼마나 발전했는가입니다. Mac에서 Loci는 이제 독립적인 벤치마크에서 최첨단 클라우드 모델보다 높은 점수를 받는 모델을 무료로, 완전히 오프라인으로 실행합니다. 우리 작업의 대부분은 이를 힘들이지 않고 쓰게 만드는 데 들어갑니다. 하드웨어에 맞는 모델을 고르고, 긴 세션을 안정적으로 유지하고, 휴대폰이 데스크톱의 성능을 쓸 수 있게 하는 일입니다. 우리는 특히 작은 모델의 성능을 높이는 데 초점을 둔 유니버설 하니스에 기대가 큽니다. 무엇보다 Loci는 추론 엔진을 개발하고 있으며, 이를 통해 로컬 실행을 완전히 제어하고 로컬 AI의 최전선을 계속 넓혀 가겠습니다.',
    },
    providedDate: '2026-10-23',
    // Verbatim statement from Michael Waldman (Founder & CEO), sent to the site owner by email 2026-10-23; the non-EN
    // versions are translations of that English text. Same text as the "From the Maker" section in the review article
    // (src/lib/power-local-llm/articles/loci-ai-review-offline-local-ai.ts). Benchmark claims in it are the maker's, not verified by PromptQuorum.
    fullQuote: {
      en: [
        'We built Loci because we believe capable AI should be a public good, not a subscription that sends every word to a data center. The biggest surprise of the last year is how far open models have come. On a Mac, Loci now runs models that score above frontier cloud models on independent benchmarks, for free and fully offline.',
        'Most of our work goes into making that feel effortless: picking the right model for your hardware, keeping long sessions stable, and letting your phone use your desktop\'s power. We\'re particularly excited about our universal harness, which is focused on increasing performance of smaller models. Most importantly, Loci is working on an inference engine, which gives us full control of local execution and will continue to push the frontier of local AI.',
      ],
      de: [
        'Wir haben Loci entwickelt, weil wir glauben, dass leistungsfähige KI ein öffentliches Gut sein sollte und kein Abonnement, das jedes Wort an ein Rechenzentrum schickt. Die größte Überraschung des letzten Jahres ist, wie weit offene Modelle gekommen sind. Auf einem Mac führt Loci jetzt Modelle aus, die in unabhängigen Benchmarks über führenden Cloud-Modellen liegen – kostenlos und vollständig offline.',
        'Der größte Teil unserer Arbeit steckt darin, dass sich das mühelos anfühlt: das richtige Modell für Ihre Hardware zu wählen, lange Sitzungen stabil zu halten und Ihr Smartphone die Leistung Ihres Desktops nutzen zu lassen. Besonders freuen wir uns über unser Universal Harness, das darauf ausgerichtet ist, die Leistung kleinerer Modelle zu steigern. Am wichtigsten: Loci arbeitet an einer eigenen Inferenz-Engine, die uns die volle Kontrolle über die lokale Ausführung gibt und die Grenzen lokaler KI weiter verschieben wird.',
      ],
      fr: [
        'Nous avons créé Loci parce que nous pensons qu\'une IA performante devrait être un bien public, et non un abonnement qui envoie chaque mot vers un centre de données. La plus grande surprise de l\'année écoulée est la façon dont les modèles ouverts ont progressé. Sur un Mac, Loci exécute désormais des modèles qui obtiennent de meilleurs scores que les modèles cloud de pointe sur des benchmarks indépendants, gratuitement et entièrement hors ligne.',
        'L\'essentiel de notre travail consiste à rendre cela fluide : choisir le bon modèle pour votre matériel, garder les longues sessions stables et permettre à votre téléphone d\'utiliser la puissance de votre ordinateur de bureau. Nous sommes particulièrement enthousiastes à propos de notre harnais universel, qui vise à améliorer les performances des petits modèles. Surtout, Loci travaille sur un moteur d\'inférence, qui nous donne un contrôle total de l\'exécution locale et continuera de repousser les limites de l\'IA locale.',
      ],
      ja: [
        '私たちがLociを作ったのは、高性能なAIは、すべての言葉をデータセンターに送るサブスクリプションではなく、公共財であるべきだと信じているからです。この1年で最大の驚きは、オープンモデルがどれほど進歩したかです。Macでは、Lociは今や、独立したベンチマークで最先端のクラウドモデルを上回るスコアのモデルを、無料で、完全にオフラインで実行します。',
        '私たちの作業の大半は、それを無理なく感じられるようにすることに費やされています。つまり、お使いのハードウェアに合うモデルを選ぶこと、長いセッションを安定させること、そしてスマートフォンがデスクトップの性能を使えるようにすることです。特に力を入れているのが、小型モデルの性能向上に注力したユニバーサルハーネスです。そして何より、Lociは推論エンジンの開発に取り組んでいます。これによりローカル実行を完全に制御でき、ローカルAIのフロンティアを押し広げ続けます。',
      ],
      zh: [
        '我们打造 Loci,是因为我们相信强大的 AI 应当是公共产品,而不是把每一句话都发送到数据中心的订阅服务。过去一年最大的惊喜,是开源模型进步得如此之快。在 Mac 上,Loci 现在可以运行在独立基准测试中得分高于前沿云端模型的模型,免费且完全离线。',
        '我们的大部分工作都用于让这一切显得毫不费力:为您的硬件选择合适的模型、让长时间会话保持稳定,并让您的手机使用桌面电脑的算力。我们尤其期待我们的通用框架,它专注于提升小模型的性能。最重要的是,Loci 正在研发推理引擎,这让我们完全掌控本地执行,并将继续推动本地 AI 的前沿。',
      ],
      es: [
        'Creamos Loci porque creemos que una IA capaz debería ser un bien público, no una suscripción que envía cada palabra a un centro de datos. La mayor sorpresa del último año es lo lejos que han llegado los modelos abiertos. En un Mac, Loci ejecuta ahora modelos que puntúan por encima de los modelos de nube de vanguardia en benchmarks independientes, gratis y totalmente sin conexión.',
        'La mayor parte de nuestro trabajo consiste en que eso resulte sencillo: elegir el modelo adecuado para tu hardware, mantener estables las sesiones largas y dejar que tu teléfono use la potencia de tu escritorio. Nos entusiasma especialmente nuestro arnés universal, centrado en mejorar el rendimiento de los modelos más pequeños. Lo más importante: Loci trabaja en un motor de inferencia, que nos da control total de la ejecución local y seguirá empujando la frontera de la IA local.',
      ],
      pt: [
        'Criamos o Loci porque acreditamos que uma IA capaz deve ser um bem público, e não uma assinatura que envia cada palavra a um data center. A maior surpresa do último ano é o quanto os modelos abertos evoluíram. Em um Mac, o Loci agora executa modelos que pontuam acima dos modelos de nuvem de ponta em benchmarks independentes, de graça e totalmente offline.',
        'A maior parte do nosso trabalho é fazer isso parecer natural: escolher o modelo certo para o seu hardware, manter sessões longas estáveis e deixar o seu celular usar o poder do seu desktop. Estamos especialmente animados com o nosso arcabouço universal, voltado a aumentar o desempenho de modelos menores. Mais importante ainda: o Loci está trabalhando em um mecanismo de inferência, que nos dá controle total da execução local e continuará a empurrar a fronteira da IA local.',
      ],
      ar: [
        'بنينا Loci لأننا نؤمن بأن الذكاء الاصطناعي القادر ينبغي أن يكون منفعة عامة، لا اشتراكاً يرسل كل كلمة إلى مركز بيانات. أكبر مفاجآت العام الماضي هي المدى الذي بلغته النماذج المفتوحة. على Mac، يشغّل Loci الآن نماذج تتفوق نتائجها على نماذج السحابة المتقدمة في اختبارات الأداء المستقلة، مجاناً ودون اتصال بالكامل.',
        'يذهب معظم عملنا إلى جعل ذلك يبدو سهلاً: اختيار النموذج المناسب لعتادك، والحفاظ على استقرار الجلسات الطويلة، وتمكين هاتفك من استخدام قدرة جهاز سطح المكتب. نحن متحمسون بشكل خاص لإطارنا الشامل (universal harness) الذي يركز على رفع أداء النماذج الأصغر. والأهم أن Loci يعمل على محرك استدلال يمنحنا تحكماً كاملاً في التنفيذ المحلي وسيواصل دفع حدود الذكاء الاصطناعي المحلي.',
      ],
      ko: [
        '우리는 유능한 AI가 모든 말을 데이터 센터로 보내는 구독 서비스가 아니라 공공재여야 한다고 믿기 때문에 Loci를 만들었습니다. 지난 1년간 가장 놀라웠던 점은 오픈 모델이 얼마나 발전했는가입니다. Mac에서 Loci는 이제 독립적인 벤치마크에서 최첨단 클라우드 모델보다 높은 점수를 받는 모델을 무료로, 완전히 오프라인으로 실행합니다.',
        '우리 작업의 대부분은 이를 힘들이지 않고 쓰게 만드는 데 들어갑니다. 하드웨어에 맞는 모델을 고르고, 긴 세션을 안정적으로 유지하고, 휴대폰이 데스크톱의 성능을 쓸 수 있게 하는 일입니다. 우리는 특히 작은 모델의 성능을 높이는 데 초점을 둔 유니버설 하니스에 기대가 큽니다. 무엇보다 Loci는 추론 엔진을 개발하고 있으며, 이를 통해 로컬 실행을 완전히 제어하고 로컬 AI의 최전선을 계속 넓혀 가겠습니다.',
      ],
    },
  },
}
