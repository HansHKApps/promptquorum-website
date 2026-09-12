// AI on Device Review: A $4.99 Apple Intelligence-Only Offline AI App
// Slug: ai-on-device-review
// Companion to: private-llm-review, pocketpal-ai-review, enclave-ai-review, noema-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

const APP_STORE_URL = 'https://apps.apple.com/us/app/ai-on-device/id6753206463'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-en.webp',
    title: 'AI on Device Review (2026): A $4.99 Apple Intelligence-Only App',
    seoTitle: 'AI on Device Review 2026: Offline AI for Apple Intelligence',
    intro:
      'AI on Device is a $4.99, one-time-purchase iPhone and Mac app by independent developer Eduardo Dominguez Menendez, listed on the [Apple App Store](' +
      APP_STORE_URL +
      ') under App Store ID 6753206463. It runs a 3-billion-parameter language model, quantized to 2-bit precision, entirely offline, with no data leaving the device. The app has one hard requirement that rules out most existing iPhones: it only works on devices compatible with Apple Intelligence, running iOS 26.0 or macOS 26.0 or later. At time of writing, its version was 1.00.01, last updated October 13, 2025 — nearly a year before this review, despite being a young app — and it had too few ratings on the App Store for a star average to display. This review treats those two facts as material caveats, not footnotes: a barely updated app from a single independent developer, with no visible track record, needs to earn a reader\'s trust on its stated facts, not on reputation.',
    metaDescription:
      'AI on Device review: $4.99 one-time iPhone/Mac app running an offline 3B 2-bit model. Requires an Apple Intelligence-compatible device (iOS/macOS 26+). Honest look at the rating count and update history.',
    twitterDescription:
      'AI on Device review: a $4.99 one-time-purchase iPhone/Mac app running a fully offline, 2-bit-quantized 3B model — but it only works on Apple Intelligence-compatible hardware, and has too few ratings to show a star average.',
    audience:
      'iPhone and Mac owners with Apple Intelligence-compatible hardware evaluating a paid, single-developer offline AI app against free or more established alternatives like Private LLM, PocketPal AI, and Noema — covers the hardware requirement, pricing, single fixed model, and the low-rating-count caveat.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone (Apple Intelligence-compatible)', 'Mac (Apple Intelligence-compatible, macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device is a $4.99, one-time-purchase app by independent developer Eduardo Dominguez Menendez that runs a 3-billion-parameter, 2-bit-quantized language model entirely offline on iPhone and Mac.** It works only on devices compatible with Apple Intelligence, requiring iOS 26.0 or macOS 26.0 or later — a requirement that excludes most iPhones in active use today. At time of writing the app was on version 1.00.01, last updated October 13, 2025, and had too few ratings on the [App Store](' +
      APP_STORE_URL +
      ') for a star average to display. Readers who want a longer public track record or a free option should also compare it with [Private LLM](/power-local-llm/private-llm-review), [PocketPal AI](/power-local-llm/pocketpal-ai-review), or [Noema](/power-local-llm/noema-review).',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What AI on Device Is', anchor: 'what-is-ai-on-device' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'The Apple Intelligence Requirement', anchor: 'apple-intelligence-requirement' },
      { label: 'The Model: 3B, 2-Bit Quantized', anchor: 'the-model' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'Privacy', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'AI on Device vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use AI on Device', anchor: 'who-should-use' },
      { label: 'Who Should Not Use AI on Device', anchor: 'who-should-not-use' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device is a $4.99, one-time-purchase iPhone/Mac app by independent developer Eduardo Dominguez Menendez that runs a fixed 3-billion-parameter, 2-bit-quantized model fully offline, but only on devices compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later).',
          },
          {
            type: 'plain-terms',
            text: 'This app does one thing: it runs one built-in AI model on your iPhone or Mac with no internet connection needed, for a single $4.99 payment instead of a monthly subscription. The catch is that it needs a newer device that already supports Apple\'s own "Apple Intelligence" features — an older iPhone that does not support Apple Intelligence cannot run this app at all, no matter how much storage or RAM it has.',
          },
        ],
        items: [
          'Price: [$4.99 one-time purchase](' + APP_STORE_URL + ') on the Apple App Store; no subscription, no usage-based fees, no quotas.',
          'Hardware requirement: only runs on devices compatible with Apple Intelligence — iOS 26.0 or macOS 26.0 or later.',
          'Platforms: iPhone and Mac only — no iPad, no Android, no Windows, no Linux.',
          'Model: one fixed 3-billion-parameter model, quantized to 2-bit precision — not a swappable library of models.',
          'Privacy: 100% offline inference; the developer states no data leaves the device and none is collected.',
          'Developer: [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), an independent developer, not a company.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing, despite being a young app.',
          'Rating: too few ratings on the App Store as of this review for a star average to display.',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'What AI on Device Is',
        content: [
          '**AI on Device is a native Apple app that runs a single bundled language model directly on an iPhone or Mac, with no server-side component and no internet connection required for inference.** It is listed on the [Apple App Store](' +
          APP_STORE_URL +
          ') under App Store ID 6753206463, developed by [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — an independent developer, not a named company or studio.',
          'The app\'s own description states it runs a model with "3 billion parameters, fully quantized to 2-bit precision," and claims 100% offline operation with no data collected from the app. It also advertises user-friendly prompt templates and integration built specifically for Apple hardware, rather than a general cross-platform wrapper.',
          'This review evaluates the developer\'s own App Store claims — the 2-bit quantization figure, the no-data-collection statement, the Apple Intelligence requirement — against what the public App Store listing itself discloses, rather than taking the description at face value. PromptQuorum has not independently benchmarked the model\'s output quality against other on-device models.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Before paying $4.99, the single most important step is confirming your device actually supports Apple Intelligence — the app will not run otherwise.**',
        ],
        numberedItems: [
          {
            title: 'Confirm Apple Intelligence compatibility first',
            whyItMatters: 'Check your iPhone or Mac against Apple\'s own Apple Intelligence device-compatibility list and confirm it can run iOS 26.0 or macOS 26.0 or later. Do this before purchasing — a $4.99 purchase on an unsupported device is money spent on an app that cannot launch its core feature.',
          },
          {
            title: 'Update to iOS 26.0 / macOS 26.0 or later',
            whyItMatters: 'Even a compatible device needs the OS update installed. The app\'s minimum requirement is iOS 26.0 for iPhone or macOS 26.0 for Mac, per the current App Store listing.',
          },
          {
            title: 'Purchase and download the app',
            whyItMatters: 'Get [AI on Device from the Apple App Store](' + APP_STORE_URL + ') for a one-time $4.99 payment. There is no free trial tier listed, so the compatibility check in step 1 is the only real way to avoid an unusable purchase.',
          },
          {
            title: 'Use the built-in prompt templates',
            whyItMatters: 'The app ships with template-based prompt creation aimed at users who do not want to hand-write prompts from scratch, rather than a blank chat box only.',
          },
          {
            title: 'Chat fully offline',
            whyItMatters: 'Once installed, the bundled 3-billion-parameter, 2-bit-quantized model runs without an internet connection. There is no separate model download step and no model library to browse — the one bundled model is what runs.',
          },
        ],
        note: 'Exact device compatibility for Apple Intelligence changes as Apple updates its supported-device list — confirm your specific iPhone or Mac model against Apple\'s current list before purchasing.',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'The Apple Intelligence Requirement',
        content: [
          '**AI on Device only works on devices compatible with Apple Intelligence, requiring iOS 26.0 or macOS 26.0 or later — this is the single most important fact for a reader deciding whether the app is usable at all.** The App Store listing states this in capital letters as a hard requirement, not a recommendation: the app does not run in a degraded or CPU-only mode on unsupported hardware, it simply does not work.',
          'This requirement excludes a meaningful share of iPhones still in active daily use, since Apple Intelligence compatibility is limited to a specific range of newer iPhone and Mac models. Unlike apps that run a lightweight model on any iOS device with enough RAM (for example, [PocketPal AI](/power-local-llm/pocketpal-ai-review), which runs any GGUF file a user supplies), AI on Device\'s single bundled model is tied to the Apple Intelligence platform requirement rather than to a specific RAM or storage floor a reader could check independently.',
          'Practical implication: a reader should verify their specific device against Apple\'s current Apple Intelligence compatibility list before paying, since the $4.99 purchase price is non-recoverable if the app cannot launch on unsupported hardware.',
        ],
      },
      theModel: {
        id: 'the-model',
        title: 'The Model: 3B, 2-Bit Quantized',
        itemHeadings: true,
        content: [
          '**AI on Device bundles one fixed model — 3 billion parameters, quantized to 2-bit precision — rather than offering a library of swappable models.** This is a meaningfully different design from most competitors reviewed in this cluster, which typically let a user download and switch between multiple GGUF, MLX, or curated models.',
        ],
        columns: ['Attribute', 'What the App Store listing states', 'Why it matters'],
        rows: [
          {
            'Attribute': 'Parameter count',
            'What the App Store listing states': '3 billion parameters',
            'Why it matters': 'A smaller model than many desktop-class local LLMs, sized specifically to fit mobile hardware constraints.',
          },
          {
            'Attribute': 'Quantization',
            'What the App Store listing states': 'Fully quantized to 2-bit precision',
            'Why it matters': '2-bit is an aggressive compression level — lower than the more common 4-bit (Q4) quantization used by most mobile local-AI apps — which trades some output quality for a smaller memory footprint.',
          },
          {
            'Attribute': 'Model choice',
            'What the App Store listing states': 'One fixed, bundled model; the listing does not describe a model browser or swappable model library',
            'Why it matters': 'A reader who wants to try multiple model sizes or families for different tasks will not find that flexibility here — see [Private LLM](/power-local-llm/private-llm-review) (140+ curated models) or [Noema](/power-local-llm/noema-review) (five loadable formats) instead.',
          },
        ],
        note: 'PromptQuorum has not independently benchmarked this model\'s output quality against other on-device 2-bit or 4-bit models; this section reflects the developer\'s own stated specifications, not an independent accuracy test.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**AI on Device costs $4.99 as a one-time purchase, with no subscription and no usage-based fees, per the current App Store listing.**',
          'The App Store listing explicitly frames this as "no fees by use, no quotas of use" — a flat, one-time price rather than a metered or subscription model. This is a straightforward pricing structure compared to apps that combine a free tier with a paid subscription for premium models or features.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy',
        content: [
          '**The developer states that AI on Device does not collect any data from the app, and that all inference runs 100% offline, on-device.**',
        ],
        items: [
          '**No data collection, per the developer\'s own claim.** The App Store description states the developer does not collect any data from the app.',
          '**100% offline inference.** The app\'s core feature — running the bundled 3-billion-parameter model — does not require an internet connection once installed.',
          '**No independent audit.** This review relies on the developer\'s own App Store claims, not an independent source-code audit or network-traffic analysis.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'One-time $4.99 payment',
            'What it means in real use': 'No subscription to manage or cancel, no per-use metering, no quotas.',
            'Limitation / caveat': 'The $4.99 is non-recoverable if a reader\'s device does not meet the Apple Intelligence requirement.',
          },
          {
            'Benefit': 'Fully offline inference',
            'What it means in real use': 'The bundled model runs without an internet connection once the app is installed.',
            'Limitation / caveat': 'This review relies on the developer\'s own claim of no data collection, not an independent audit.',
          },
          {
            'Benefit': 'Small, efficient 2-bit model',
            'What it means in real use': 'A 3-billion-parameter, 2-bit-quantized model has a smaller memory footprint than larger or less compressed models.',
            'Limitation / caveat': 'Aggressive 2-bit quantization typically costs more output quality than the 4-bit quantization most competing mobile apps use; PromptQuorum has not independently benchmarked this trade-off for this specific app.',
          },
          {
            'Benefit': 'Simple, template-driven prompt creation',
            'What it means in real use': 'Built-in templates help a reader who does not want to write prompts from scratch.',
            'Limitation / caveat': 'No model library or format flexibility — one fixed model only, unlike [Private LLM](/power-local-llm/private-llm-review) or [Noema](/power-local-llm/noema-review).',
          },
          {
            'Benefit': 'N/A',
            'What it means in real use': 'N/A',
            'Limitation / caveat': 'Hard Apple Intelligence requirement (iOS 26.0 / macOS 26.0+) excludes most existing iPhones from running the app at all.',
          },
          {
            'Benefit': 'N/A',
            'What it means in real use': 'N/A',
            'Limitation / caveat': 'Too few ratings on the App Store as of this review for a star average to display, and last updated October 13, 2025 — nearly a year before this review, despite being a young app.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'AI on Device',
            'Platforms': 'iPhone/Mac, Apple Intelligence-compatible only',
            'Price': '$4.99 one-time',
            'Model flexibility': 'One fixed model: 3B, 2-bit quantized',
            'Key difference': 'Hard Apple Intelligence hardware requirement; too few ratings for a star average yet',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Price': '$4.99 one-time',
            'Model flexibility': '140+ curated models; OmniQuant/GPTQ quantization',
            'Key difference': 'No Apple Intelligence requirement; three years of public release history',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone/iPad, with some Android support',
            'Price': 'Free, open source',
            'Model flexibility': 'Any GGUF file the user sources from Hugging Face or elsewhere',
            'Key difference': 'Free and broadly compatible, versus a paid app tied to the newest Apple hardware',
          },
          {
            'App': '[Noema](/power-local-llm/noema-review)',
            'Platforms': 'iPhone/iPad/Mac/Vision Pro (Apple only)',
            'Price': 'Free',
            'Model flexibility': 'Five formats: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Key difference': 'Free with a swappable model library, versus one fixed paid model',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Platforms': 'See current listing',
            'Price': 'See current listing',
            'Model flexibility': 'See full review for current model support',
            'Key difference': 'See the full Enclave AI review for a detailed comparison',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use AI on Device',
        items: [
          '**Readers who already own an Apple Intelligence-compatible iPhone or Mac running iOS 26.0 or macOS 26.0 or later.** Without this hardware, the app will not run at all — verify compatibility first.',
          '**Readers comfortable paying $4.99 upfront for an unproven, low-review-count app from a solo developer.** With too few ratings to show a star average and a nearly year-old last update, this is early-adopter territory, not a track-record purchase.',
          '**Readers who want a single, simple bundled model rather than a library to choose from.** If the fixed 3B, 2-bit model fits the task, the app avoids the decision overhead of picking a model.',
          '**Readers who prefer a flat one-time payment over a subscription.** No usage quotas or recurring fees, per the App Store listing.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use AI on Device',
        items: [
          '**Readers whose iPhone or Mac does not support Apple Intelligence.** The app will not launch its core feature on unsupported hardware — check compatibility before paying $4.99. Most existing iPhones fall into this category.',
          '**Readers who want multiple model choices.** AI on Device bundles one fixed model; [Private LLM](/power-local-llm/private-llm-review) offers 140+ curated models and [Noema](/power-local-llm/noema-review) supports five model formats.',
          '**Readers who prioritize an established track record.** With too few ratings for a star average and a last update from nearly a year before this review, readers who weight social proof heavily should start with [Private LLM](/power-local-llm/private-llm-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review) instead.',
          '**Readers who want a free option.** [PocketPal AI](/power-local-llm/pocketpal-ai-review) and [Noema](/power-local-llm/noema-review) are both free with broader or more flexible model support.',
          '**iPad, Android, Windows, or Linux users.** AI on Device is iPhone and Mac only, per the App Store listing.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much does AI on Device cost?',
            a: 'AI on Device is a [$4.99 one-time purchase](' + APP_STORE_URL + '), verified for this review on 2026-09-12, with no subscription, no usage-based fees, and no quotas, per the App Store listing. App Store pricing can change over time — confirm the current price before buying.',
          },
          {
            q: 'Does AI on Device work on my iPhone?',
            a: 'Only if your iPhone is compatible with Apple Intelligence and running iOS 26.0 or later. This is a hard requirement, not a recommendation — the App Store listing states the app only works on Apple Intelligence-compatible devices. Check Apple\'s current Apple Intelligence device list before purchasing.',
          },
          {
            q: 'What model does AI on Device use?',
            a: 'A single bundled model with 3 billion parameters, fully quantized to 2-bit precision, per the App Store description. Unlike apps with a swappable model library, this is the one model the app runs — there is no model browser or download step for alternative models.',
          },
          {
            q: 'Is AI on Device available on Android or iPad?',
            a: 'No. The App Store listing states the app supports iPhone and Mac only. It does not list iPad, Android, Windows, or Linux support.',
          },
          {
            q: 'Who develops AI on Device?',
            a: 'AI on Device is developed by [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), an independent developer rather than a named company or studio, per the App Store developer listing.',
          },
          {
            q: 'Does AI on Device work completely offline?',
            a: 'Yes. The developer states the app runs 100% offline with no data collected, per the App Store description. This review relies on the developer\'s own claim, not an independent network-traffic audit.',
          },
          {
            q: 'How reliable is AI on Device\'s App Store rating?',
            a: 'As of this review, the App Store listing shows too few ratings for a star average to display at all — a stronger caveat than a low star average with many reviews. Treat the app as unproven rather than assuming quality from social proof, and re-check the current rating count on the App Store before relying on it.',
          },
          {
            q: 'How often is AI on Device updated?',
            a: 'The App Store listing shows version 1.00.01, last updated October 13, 2025 — nearly a year before this review was published, despite the app being relatively young. This is a slower update cadence than several actively maintained competitors in this cluster, and is worth weighing alongside the low rating count.',
          },
          {
            q: 'How does AI on Device compare to Private LLM?',
            a: 'AI on Device costs the same $4.99 one-time price as [Private LLM](/power-local-llm/private-llm-review) but bundles only one fixed 3B, 2-bit model, requires an Apple Intelligence-compatible device, and has too few ratings for a star average. Private LLM offers a curated library of 140+ models, has no Apple Intelligence requirement, and has a three-year public release history. Choose Private LLM for a broader model library and a longer track record; choose AI on Device only if you specifically want its bundled model and already own compatible Apple Intelligence hardware.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AI on Device is a straightforward, honestly priced app — $4.99 once, no subscription, no quotas — that runs a fixed 3-billion-parameter, 2-bit-quantized model fully offline. That simplicity is also its biggest limitation: there is no model library to choose from, and the app is gated behind a hard Apple Intelligence hardware requirement (iOS 26.0 / macOS 26.0 or later) that excludes most existing iPhones outright. The honest caveats do not stop there: as of this review the App Store shows too few ratings for a star average to display, and the last update was October 13, 2025 — nearly a year before this review, despite the app being young. That combination — a solo independent developer, no visible track record, and a stale update history — means this is not a purchase to make on reputation. Readers who already own Apple Intelligence-compatible hardware and are comfortable being early adopters of an unproven app can reasonably try it for $4.99. Everyone else, and especially readers who want a broader model library or a longer track record, should start with [Private LLM](/power-local-llm/private-llm-review), [PocketPal AI](/power-local-llm/pocketpal-ai-review), or [Noema](/power-local-llm/noema-review) instead.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AI on Device on the App Store](' + APP_STORE_URL + ') — price, platform compatibility, Apple Intelligence requirement, model specification, rating, version, and update date.',
          '[Eduardo Dominguez Menendez on the App Store](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — developer account listing.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, curated-library alternative with no Apple Intelligence requirement and a longer release history.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source, broadly compatible alternative.',
          '[Noema Review](/power-local-llm/noema-review) — a free, five-format alternative with a swappable model library.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — another on-device AI app for comparison.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-de.webp',
    title: 'AI on Device im Test (2026): Eine 4,99-$-App nur für Apple Intelligence',
    seoTitle: 'AI on Device Test 2026: Offline-KI für Apple Intelligence',
    intro:
      'AI on Device ist eine App für iPhone und Mac des unabhängigen Entwicklers Eduardo Dominguez Menendez, einmalig kostenpflichtig für 4,99 $, gelistet im [Apple App Store](' +
      APP_STORE_URL +
      ') unter der App-Store-ID 6753206463. Sie führt ein Sprachmodell mit 3 Milliarden Parametern aus, quantisiert auf 2-Bit-Präzision, vollständig offline, ohne dass Daten das Gerät verlassen. Die App hat eine harte Voraussetzung, die die meisten bestehenden iPhones ausschließt: Sie funktioniert nur auf Geräten, die mit Apple Intelligence kompatibel sind und iOS 26.0 oder macOS 26.0 oder neuer benötigen. Zum Zeitpunkt der Erstellung lag die Version bei 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — fast ein Jahr vor diesem Test, obwohl die App noch jung ist — und es gab im App Store zu wenige Bewertungen für eine Sternedurchschnittsanzeige. Dieser Test behandelt beide Tatsachen als wesentliche Einschränkungen, nicht als Fußnoten: Eine kaum aktualisierte App eines einzelnen unabhängigen Entwicklers ohne sichtbare Erfolgsbilanz muss sich das Vertrauen der Leser über belegbare Fakten verdienen, nicht über Reputation.',
    metaDescription:
      'AI on Device im Test: 4,99-$-Einmalkauf-App für iPhone/Mac mit offline laufendem 3B-2-Bit-Modell. Erfordert ein Apple-Intelligence-kompatibles Gerät (iOS/macOS 26+). Ehrlicher Blick auf Bewertungszahl und Update-Historie.',
    twitterDescription:
      'AI on Device im Test: eine 4,99-$-Einmalkauf-App für iPhone/Mac mit einem vollständig offline laufenden, 2-Bit-quantisierten 3B-Modell — funktioniert aber nur auf Apple-Intelligence-kompatibler Hardware und hat zu wenige Bewertungen für einen Sternedurchschnitt.',
    audience:
      'iPhone- und Mac-Besitzer mit Apple-Intelligence-kompatibler Hardware, die eine kostenpflichtige Offline-KI-App eines einzelnen Entwicklers gegenüber freieren oder etablierteren Alternativen wie Private LLM, PocketPal AI und Noema bewerten — behandelt die Hardwarevoraussetzung, Preisgestaltung, das feste Modell und die geringe Bewertungszahl.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone (Apple-Intelligence-kompatibel)', 'Mac (Apple-Intelligence-kompatibel, macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device ist eine App des unabhängigen Entwicklers Eduardo Dominguez Menendez, einmalig kostenpflichtig für 4,99 $, die ein Sprachmodell mit 3 Milliarden Parametern, quantisiert auf 2-Bit-Präzision, vollständig offline auf iPhone und Mac ausführt.** Sie funktioniert nur auf Geräten, die mit Apple Intelligence kompatibel sind, und erfordert iOS 26.0 oder macOS 26.0 oder neuer — eine Voraussetzung, die die meisten aktuell genutzten iPhones ausschließt. Zum Zeitpunkt der Erstellung war die App auf Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025, und es gab im [App Store](' +
      APP_STORE_URL +
      ') zu wenige Bewertungen für eine Sternedurchschnittsanzeige. Leser, die eine längere öffentliche Erfolgsbilanz oder eine kostenlose Option wünschen, sollten sie auch mit [Private LLM](/de/power-local-llm/private-llm-review), [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Noema](/de/power-local-llm/noema-review) vergleichen.',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was AI on Device ist', anchor: 'what-is-ai-on-device' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Die Apple-Intelligence-Voraussetzung', anchor: 'apple-intelligence-requirement' },
      { label: 'Das Modell: 3B, 2-Bit-quantisiert', anchor: 'the-model' },
      { label: 'Preisgestaltung', anchor: 'pricing' },
      { label: 'Datenschutz', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'AI on Device vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer AI on Device nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer AI on Device nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Themen', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device ist eine einmalig für 4,99 $ kostenpflichtige iPhone/Mac-App des unabhängigen Entwicklers Eduardo Dominguez Menendez, die ein festes 3-Milliarden-Parameter-Modell mit 2-Bit-Quantisierung vollständig offline ausführt, jedoch nur auf Apple-Intelligence-kompatiblen Geräten (iOS 26.0 / macOS 26.0 oder neuer).',
          },
          {
            type: 'plain-terms',
            text: 'Diese App macht genau eine Sache: Sie führt ein eingebautes KI-Modell auf Ihrem iPhone oder Mac aus, ohne Internetverbindung, für eine einmalige Zahlung von 4,99 $ statt eines Monatsabonnements. Der Haken ist, dass ein neueres Gerät nötig ist, das bereits Apples eigene "Apple Intelligence"-Funktionen unterstützt — ein älteres iPhone ohne Apple-Intelligence-Unterstützung kann diese App überhaupt nicht ausführen, egal wie viel Speicher oder RAM es hat.',
          },
        ],
        items: [
          'Preis: [einmaliger Kauf für 4,99 $](' + APP_STORE_URL + ') im Apple App Store; kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Hardwarevoraussetzung: läuft nur auf Apple-Intelligence-kompatiblen Geräten — iOS 26.0 oder macOS 26.0 oder neuer.',
          'Plattformen: nur iPhone und Mac — kein iPad, kein Android, kein Windows, kein Linux.',
          'Modell: ein festes Modell mit 3 Milliarden Parametern, quantisiert auf 2-Bit-Präzision — keine austauschbare Modellbibliothek.',
          'Datenschutz: 100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine gesammelt.',
          'Entwickler: [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), ein unabhängiger Entwickler, kein Unternehmen.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt, obwohl die App jung ist.',
          'Bewertung: zu wenige Bewertungen im App Store zum Zeitpunkt dieses Tests für eine Sternedurchschnittsanzeige.',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'Was AI on Device ist',
        content: [
          '**AI on Device ist eine native Apple-App, die ein einzelnes eingebettetes Sprachmodell direkt auf einem iPhone oder Mac ausführt, ohne serverseitige Komponente und ohne Internetverbindung für die Inferenz.** Sie ist im [Apple App Store](' +
          APP_STORE_URL +
          ') unter der App-Store-ID 6753206463 gelistet, entwickelt von [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — einem unabhängigen Entwickler, nicht einem benannten Unternehmen oder Studio.',
          'Die App-Beschreibung selbst gibt an, ein Modell mit "3 Milliarden Parametern, vollständig quantisiert auf 2-Bit-Präzision" auszuführen, und behauptet 100 % Offline-Betrieb ohne von der App gesammelte Daten. Sie bewirbt außerdem nutzerfreundliche Prompt-Vorlagen und eine speziell für Apple-Hardware gebaute Integration statt eines allgemeinen plattformübergreifenden Wrappers.',
          'Dieser Test bewertet die eigenen App-Store-Angaben des Entwicklers — die 2-Bit-Quantisierungszahl, die Aussage zur Nichterhebung von Daten, die Apple-Intelligence-Voraussetzung — im Vergleich zu dem, was der öffentliche App-Store-Eintrag selbst offenlegt, statt die Beschreibung unhinterfragt zu übernehmen. PromptQuorum hat die Ausgabequalität des Modells nicht unabhängig gegen andere On-Device-Modelle getestet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Bevor Sie 4,99 $ zahlen, ist der wichtigste Schritt, zu bestätigen, dass Ihr Gerät tatsächlich Apple Intelligence unterstützt — sonst läuft die App nicht.**',
        ],
        numberedItems: [
          {
            title: 'Zuerst Apple-Intelligence-Kompatibilität prüfen',
            whyItMatters: 'Prüfen Sie Ihr iPhone oder Mac gegen Apples eigene Apple-Intelligence-Gerätekompatibilitätsliste und bestätigen Sie, dass es iOS 26.0 oder macOS 26.0 oder neuer ausführen kann. Tun Sie dies vor dem Kauf — ein Kauf für 4,99 $ auf einem nicht unterstützten Gerät ist Geld für eine App, die ihre Kernfunktion nicht starten kann.',
          },
          {
            title: 'Auf iOS 26.0 / macOS 26.0 oder neuer aktualisieren',
            whyItMatters: 'Selbst ein kompatibles Gerät benötigt das OS-Update. Die Mindestvoraussetzung der App ist iOS 26.0 für iPhone bzw. macOS 26.0 für Mac, laut aktuellem App-Store-Eintrag.',
          },
          {
            title: 'App kaufen und herunterladen',
            whyItMatters: 'Laden Sie [AI on Device aus dem Apple App Store](' + APP_STORE_URL + ') für eine einmalige Zahlung von 4,99 $ herunter. Es gibt keine kostenlose Testphase, daher ist die Kompatibilitätsprüfung in Schritt 1 der einzige echte Weg, einen unbrauchbaren Kauf zu vermeiden.',
          },
          {
            title: 'Die eingebauten Prompt-Vorlagen nutzen',
            whyItMatters: 'Die App bringt vorlagenbasierte Prompt-Erstellung mit, gedacht für Nutzer, die Prompts nicht von Grund auf selbst schreiben möchten, statt nur ein leeres Chatfeld.',
          },
          {
            title: 'Vollständig offline chatten',
            whyItMatters: 'Nach der Installation läuft das eingebettete 3-Milliarden-Parameter-Modell mit 2-Bit-Quantisierung ohne Internetverbindung. Es gibt keinen separaten Modell-Download-Schritt und keine Modellbibliothek zum Durchsuchen — das eine mitgelieferte Modell ist das, was läuft.',
          },
        ],
        note: 'Die genaue Gerätekompatibilität für Apple Intelligence ändert sich, wenn Apple seine Liste unterstützter Geräte aktualisiert — prüfen Sie Ihr konkretes iPhone- oder Mac-Modell gegen Apples aktuelle Liste, bevor Sie kaufen.',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'Die Apple-Intelligence-Voraussetzung',
        content: [
          '**AI on Device funktioniert nur auf Apple-Intelligence-kompatiblen Geräten und erfordert iOS 26.0 oder macOS 26.0 oder neuer — das ist die wichtigste einzelne Tatsache für Leser, die entscheiden möchten, ob die App überhaupt nutzbar ist.** Der App-Store-Eintrag formuliert dies in Großbuchstaben als harte Voraussetzung, nicht als Empfehlung: Die App läuft nicht in einem abgespeckten oder reinen CPU-Modus auf nicht unterstützter Hardware — sie funktioniert einfach nicht.',
          'Diese Voraussetzung schließt einen erheblichen Anteil der noch aktiv genutzten iPhones aus, da Apple-Intelligence-Kompatibilität auf einen bestimmten Bereich neuerer iPhone- und Mac-Modelle beschränkt ist. Anders als Apps, die ein schlankes Modell auf jedem iOS-Gerät mit ausreichend RAM ausführen (zum Beispiel [PocketPal AI](/de/power-local-llm/pocketpal-ai-review), das jede vom Nutzer bereitgestellte GGUF-Datei ausführt), ist das eine eingebettete Modell von AI on Device an die Apple-Intelligence-Plattformvoraussetzung gebunden statt an eine bestimmte RAM- oder Speicheruntergrenze, die ein Leser selbst prüfen könnte.',
          'Praktische Konsequenz: Ein Leser sollte sein konkretes Gerät gegen Apples aktuelle Apple-Intelligence-Kompatibilitätsliste prüfen, bevor er bezahlt, da der Kaufpreis von 4,99 $ nicht erstattungsfähig ist, wenn die App auf nicht unterstützter Hardware nicht startet.',
        ],
      },
      theModel: {
        id: 'the-model',
        title: 'Das Modell: 3B, 2-Bit-quantisiert',
        itemHeadings: true,
        content: [
          '**AI on Device bündelt ein festes Modell — 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision — statt eine Bibliothek austauschbarer Modelle anzubieten.** Das ist ein deutlich anderer Ansatz als bei den meisten in diesem Cluster besprochenen Konkurrenten, die typischerweise das Herunterladen und Wechseln zwischen mehreren GGUF-, MLX- oder kuratierten Modellen erlauben.',
        ],
        columns: ['Attribut', 'Angabe im App-Store-Eintrag', 'Warum es wichtig ist'],
        rows: [
          {
            'Attribut': 'Parameterzahl',
            'Angabe im App-Store-Eintrag': '3 Milliarden Parameter',
            'Warum es wichtig ist': 'Ein kleineres Modell als viele desktop-taugliche lokale LLMs, gezielt auf mobile Hardwarebeschränkungen zugeschnitten.',
          },
          {
            'Attribut': 'Quantisierung',
            'Angabe im App-Store-Eintrag': 'Vollständig auf 2-Bit-Präzision quantisiert',
            'Warum es wichtig ist': '2-Bit ist eine aggressive Komprimierungsstufe — niedriger als die verbreitetere 4-Bit-Quantisierung (Q4), die von den meisten mobilen Lokal-KI-Apps genutzt wird — was etwas Ausgabequalität gegen einen kleineren Speicherbedarf eintauscht.',
          },
          {
            'Attribut': 'Modellauswahl',
            'Angabe im App-Store-Eintrag': 'Ein festes, mitgeliefertes Modell; der Eintrag beschreibt keinen Modellbrowser oder eine austauschbare Modellbibliothek',
            'Warum es wichtig ist': 'Wer mehrere Modellgrößen oder -familien für unterschiedliche Aufgaben ausprobieren möchte, findet diese Flexibilität hier nicht — siehe stattdessen [Private LLM](/de/power-local-llm/private-llm-review) (140+ kuratierte Modelle) oder [Noema](/de/power-local-llm/noema-review) (fünf ladbare Formate).',
          },
        ],
        note: 'PromptQuorum hat die Ausgabequalität dieses Modells nicht unabhängig gegen andere On-Device-2-Bit- oder 4-Bit-Modelle getestet; dieser Abschnitt gibt die eigenen Angaben des Entwicklers wieder, nicht einen unabhängigen Genauigkeitstest.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preisgestaltung',
        content: [
          '**AI on Device kostet laut aktuellem App-Store-Eintrag 4,99 $ als einmaligen Kauf, ohne Abonnement und ohne nutzungsbasierte Gebühren.**',
          'Der App-Store-Eintrag formuliert dies ausdrücklich als "keine Gebühren nach Nutzung, keine Nutzungskontingente" — ein pauschaler Einmalpreis statt eines nutzungsabhängigen oder Abonnementmodells. Das ist eine unkomplizierte Preisstruktur im Vergleich zu Apps, die eine kostenlose Stufe mit einem kostenpflichtigen Abonnement für Premiummodelle oder -funktionen kombinieren.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz',
        content: [
          '**Der Entwickler gibt an, dass AI on Device keinerlei Daten von der App sammelt und dass die gesamte Inferenz 100 % offline auf dem Gerät läuft.**',
        ],
        items: [
          '**Keine Datenerhebung, laut eigener Angabe des Entwicklers.** Die App-Store-Beschreibung gibt an, dass der Entwickler keine Daten von der App sammelt.',
          '**100 % Offline-Inferenz.** Die Kernfunktion der App — das Ausführen des eingebetteten 3-Milliarden-Parameter-Modells — benötigt nach der Installation keine Internetverbindung.',
          '**Keine unabhängige Prüfung.** Dieser Test stützt sich auf die eigenen App-Store-Angaben des Entwicklers, nicht auf eine unabhängige Quellcode-Prüfung oder Netzwerkverkehrsanalyse.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            'Vorteil': 'Einmalige Zahlung von 4,99 $',
            'Was das in der Praxis bedeutet': 'Kein Abonnement zu verwalten oder zu kündigen, keine Nutzungsabrechnung, keine Kontingente.',
            'Einschränkung / Vorbehalt': 'Die 4,99 $ sind nicht erstattungsfähig, wenn das Gerät des Lesers die Apple-Intelligence-Voraussetzung nicht erfüllt.',
          },
          {
            'Vorteil': 'Vollständig Offline-Inferenz',
            'Was das in der Praxis bedeutet': 'Das eingebettete Modell läuft nach der Installation ohne Internetverbindung.',
            'Einschränkung / Vorbehalt': 'Dieser Test stützt sich auf die eigene Angabe des Entwicklers zur Nichterhebung von Daten, nicht auf eine unabhängige Prüfung.',
          },
          {
            'Vorteil': 'Kleines, effizientes 2-Bit-Modell',
            'Was das in der Praxis bedeutet': 'Ein Modell mit 3 Milliarden Parametern und 2-Bit-Quantisierung hat einen kleineren Speicherbedarf als größere oder weniger komprimierte Modelle.',
            'Einschränkung / Vorbehalt': 'Aggressive 2-Bit-Quantisierung kostet typischerweise mehr Ausgabequalität als die 4-Bit-Quantisierung, die die meisten konkurrierenden mobilen Apps nutzen; PromptQuorum hat diesen Kompromiss für diese konkrete App nicht unabhängig getestet.',
          },
          {
            'Vorteil': 'Einfache, vorlagenbasierte Prompt-Erstellung',
            'Was das in der Praxis bedeutet': 'Eingebaute Vorlagen helfen Lesern, die Prompts nicht von Grund auf schreiben möchten.',
            'Einschränkung / Vorbehalt': 'Keine Modellbibliothek oder Formatflexibilität — nur ein festes Modell, anders als bei [Private LLM](/de/power-local-llm/private-llm-review) oder [Noema](/de/power-local-llm/noema-review).',
          },
          {
            'Vorteil': 'N/A',
            'Was das in der Praxis bedeutet': 'N/A',
            'Einschränkung / Vorbehalt': 'Harte Apple-Intelligence-Voraussetzung (iOS 26.0 / macOS 26.0+) schließt die meisten bestehenden iPhones von der Nutzung der App aus.',
          },
          {
            'Vorteil': 'N/A',
            'Was das in der Praxis bedeutet': 'N/A',
            'Einschränkung / Vorbehalt': 'Zu wenige Bewertungen im App Store zum Zeitpunkt dieses Tests für eine Sternedurchschnittsanzeige, zuletzt aktualisiert am 13. Oktober 2025 — fast ein Jahr vor diesem Test, obwohl die App jung ist.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Modellflexibilität', 'Hauptunterschied'],
        rows: [
          {
            'App': 'AI on Device',
            'Plattformen': 'iPhone/Mac, nur Apple-Intelligence-kompatibel',
            'Preis': '4,99 $ einmalig',
            'Modellflexibilität': 'Ein festes Modell: 3B, 2-Bit-quantisiert',
            'Hauptunterschied': 'Harte Apple-Intelligence-Hardwarevoraussetzung; noch zu wenige Bewertungen für einen Sternedurchschnitt',
          },
          {
            'App': '[Private LLM](/de/power-local-llm/private-llm-review)',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Preis': '4,99 $ einmalig',
            'Modellflexibilität': '140+ kuratierte Modelle; OmniQuant-/GPTQ-Quantisierung',
            'Hauptunterschied': 'Keine Apple-Intelligence-Voraussetzung; drei Jahre öffentliche Veröffentlichungshistorie',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone/iPad, teilweise Android',
            'Preis': 'Kostenlos, Open Source',
            'Modellflexibilität': 'Jede GGUF-Datei, die der Nutzer z. B. von Hugging Face bezieht',
            'Hauptunterschied': 'Kostenlos und breit kompatibel, im Gegensatz zu einer kostenpflichtigen App, die an die neueste Apple-Hardware gebunden ist',
          },
          {
            'App': '[Noema](/de/power-local-llm/noema-review)',
            'Plattformen': 'iPhone/iPad/Mac/Vision Pro (nur Apple)',
            'Preis': 'Kostenlos',
            'Modellflexibilität': 'Fünf Formate: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Hauptunterschied': 'Kostenlos mit austauschbarer Modellbibliothek, im Gegensatz zu einem festen kostenpflichtigen Modell',
          },
          {
            'App': '[Enclave AI](/de/power-local-llm/enclave-ai-review)',
            'Plattformen': 'Siehe aktuelle Auflistung',
            'Preis': 'Siehe aktuelle Auflistung',
            'Modellflexibilität': 'Siehe vollständigen Test für aktuelle Modellunterstützung',
            'Hauptunterschied': 'Siehe den vollständigen Enclave-AI-Test für einen detaillierten Vergleich',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben für Drittanbieter-Apps ändern sich häufig — prüfen Sie vor einer Entscheidung die aktuellen Angaben im jeweiligen App-Eintrag.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer AI on Device nutzen sollte',
        items: [
          '**Leser, die bereits ein Apple-Intelligence-kompatibles iPhone oder Mac mit iOS 26.0 oder macOS 26.0 oder neuer besitzen.** Ohne diese Hardware läuft die App gar nicht — Kompatibilität zuerst prüfen.',
          '**Leser, die bereit sind, 4,99 $ im Voraus für eine unbewiesene App mit geringer Bewertungszahl eines Einzelentwicklers zu zahlen.** Mit zu wenigen Bewertungen für einen Sternedurchschnitt und einem fast ein Jahr alten letzten Update ist das Territorium für Early Adopter, kein Kauf mit belegter Erfolgsbilanz.',
          '**Leser, die ein einzelnes, einfaches mitgeliefertes Modell statt einer Auswahl bevorzugen.** Wenn das feste 3B-2-Bit-Modell zur Aufgabe passt, entfällt der Entscheidungsaufwand der Modellwahl.',
          '**Leser, die eine pauschale Einmalzahlung einem Abonnement vorziehen.** Laut App-Store-Eintrag keine Nutzungskontingente oder wiederkehrenden Gebühren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer AI on Device nicht nutzen sollte',
        items: [
          '**Leser, deren iPhone oder Mac Apple Intelligence nicht unterstützt.** Die App startet ihre Kernfunktion auf nicht unterstützter Hardware nicht — Kompatibilität vor dem Kauf für 4,99 $ prüfen. Die meisten bestehenden iPhones fallen in diese Kategorie.',
          '**Leser, die mehrere Modelloptionen möchten.** AI on Device bündelt ein festes Modell; [Private LLM](/de/power-local-llm/private-llm-review) bietet 140+ kuratierte Modelle und [Noema](/de/power-local-llm/noema-review) unterstützt fünf Modellformate.',
          '**Leser, denen eine belegte Erfolgsbilanz wichtig ist.** Mit zu wenigen Bewertungen für einen Sternedurchschnitt und einem letzten Update von fast einem Jahr vor diesem Test sollten Leser, die viel Wert auf Social Proof legen, stattdessen mit [Private LLM](/de/power-local-llm/private-llm-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) beginnen.',
          '**Leser, die eine kostenlose Option möchten.** [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) und [Noema](/de/power-local-llm/noema-review) sind beide kostenlos mit breiterer oder flexiblerer Modellunterstützung.',
          '**iPad-, Android-, Windows- oder Linux-Nutzer.** AI on Device ist laut App-Store-Eintrag nur für iPhone und Mac.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was kostet AI on Device?',
            a: 'AI on Device ist ein [einmaliger Kauf für 4,99 $](' + APP_STORE_URL + '), verifiziert für diesen Test am 2026-09-12, ohne Abonnement, ohne nutzungsbasierte Gebühren und ohne Kontingente, laut App-Store-Eintrag. App-Store-Preise können sich im Laufe der Zeit ändern — prüfen Sie den aktuellen Preis vor dem Kauf.',
          },
          {
            q: 'Funktioniert AI on Device auf meinem iPhone?',
            a: 'Nur wenn Ihr iPhone Apple-Intelligence-kompatibel ist und iOS 26.0 oder neuer ausführt. Das ist eine harte Voraussetzung, keine Empfehlung — der App-Store-Eintrag gibt an, dass die App nur auf Apple-Intelligence-kompatiblen Geräten funktioniert. Prüfen Sie Apples aktuelle Apple-Intelligence-Geräteliste vor dem Kauf.',
          },
          {
            q: 'Welches Modell nutzt AI on Device?',
            a: 'Ein einzelnes mitgeliefertes Modell mit 3 Milliarden Parametern, vollständig quantisiert auf 2-Bit-Präzision, laut App-Store-Beschreibung. Anders als bei Apps mit austauschbarer Modellbibliothek ist dies das einzige Modell, das die App ausführt — es gibt keinen Modellbrowser oder Download-Schritt für alternative Modelle.',
          },
          {
            q: 'Ist AI on Device für Android oder iPad verfügbar?',
            a: 'Nein. Der App-Store-Eintrag gibt an, dass die App nur iPhone und Mac unterstützt. iPad-, Android-, Windows- oder Linux-Unterstützung wird nicht aufgeführt.',
          },
          {
            q: 'Wer entwickelt AI on Device?',
            a: 'AI on Device wird von [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) entwickelt, einem unabhängigen Entwickler statt einem benannten Unternehmen oder Studio, laut App-Store-Entwicklereintrag.',
          },
          {
            q: 'Funktioniert AI on Device vollständig offline?',
            a: 'Ja. Der Entwickler gibt an, dass die App laut App-Store-Beschreibung 100 % offline läuft und keine Daten sammelt. Dieser Test stützt sich auf die eigene Angabe des Entwicklers, nicht auf eine unabhängige Netzwerkverkehrsprüfung.',
          },
          {
            q: 'Wie zuverlässig ist die App-Store-Bewertung von AI on Device?',
            a: 'Zum Zeitpunkt dieses Tests zeigt der App-Store-Eintrag zu wenige Bewertungen, um überhaupt einen Sternedurchschnitt anzuzeigen — ein stärkerer Vorbehalt als ein niedriger Sternedurchschnitt mit vielen Bewertungen. Behandeln Sie die App als unbewiesen, statt aus Social Proof auf Qualität zu schließen, und prüfen Sie die aktuelle Bewertungszahl im App Store, bevor Sie sich darauf verlassen.',
          },
          {
            q: 'Wie oft wird AI on Device aktualisiert?',
            a: 'Der App-Store-Eintrag zeigt Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — fast ein Jahr vor Veröffentlichung dieses Tests, obwohl die App relativ jung ist. Das ist eine langsamere Update-Taktung als bei mehreren aktiv gepflegten Konkurrenten in diesem Cluster und sollte zusammen mit der geringen Bewertungszahl gewichtet werden.',
          },
          {
            q: 'Wie schneidet AI on Device im Vergleich zu Private LLM ab?',
            a: 'AI on Device kostet denselben Einmalpreis von 4,99 $ wie [Private LLM](/de/power-local-llm/private-llm-review), bündelt aber nur ein festes 3B-2-Bit-Modell, erfordert ein Apple-Intelligence-kompatibles Gerät und hat zu wenige Bewertungen für einen Sternedurchschnitt. Private LLM bietet eine kuratierte Bibliothek von 140+ Modellen, hat keine Apple-Intelligence-Voraussetzung und eine dreijährige öffentliche Veröffentlichungshistorie. Wählen Sie Private LLM für eine breitere Modellbibliothek und eine längere Erfolgsbilanz; wählen Sie AI on Device nur, wenn Sie speziell dessen mitgeliefertes Modell möchten und bereits kompatible Apple-Intelligence-Hardware besitzen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'AI on Device ist eine unkomplizierte, ehrlich bepreiste App — einmalig 4,99 $, kein Abonnement, keine Kontingente —, die ein festes 3-Milliarden-Parameter-Modell mit 2-Bit-Quantisierung vollständig offline ausführt. Diese Einfachheit ist zugleich die größte Einschränkung: Es gibt keine Modellbibliothek zur Auswahl, und die App ist durch eine harte Apple-Intelligence-Hardwarevoraussetzung (iOS 26.0 / macOS 26.0 oder neuer) gesperrt, die die meisten bestehenden iPhones von vornherein ausschließt. Die ehrlichen Vorbehalte enden dort nicht: Zum Zeitpunkt dieses Tests zeigt der App Store zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — fast ein Jahr vor diesem Test, obwohl die App jung ist. Diese Kombination — ein einzelner unabhängiger Entwickler, keine sichtbare Erfolgsbilanz und eine veraltete Update-Historie — bedeutet, dass dies kein Kauf auf Basis von Reputation sein sollte. Leser, die bereits Apple-Intelligence-kompatible Hardware besitzen und bereit sind, Early Adopter einer unbewiesenen App zu sein, können sie für 4,99 $ vertretbar ausprobieren. Alle anderen, insbesondere Leser, die eine breitere Modellbibliothek oder eine längere Erfolgsbilanz wünschen, sollten stattdessen mit [Private LLM](/de/power-local-llm/private-llm-review), [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Noema](/de/power-local-llm/noema-review) beginnen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AI on Device im App Store](' + APP_STORE_URL + ') — Preis, Plattformkompatibilität, Apple-Intelligence-Voraussetzung, Modellangaben, Bewertung, Version und Aktualisierungsdatum.',
          '[Eduardo Dominguez Menendez im App Store](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — Entwicklerkonto-Eintrag.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Themen',
        items: [
          '[Private LLM im Test](/de/power-local-llm/private-llm-review) — eine kostenpflichtige, kuratierte Alternative ohne Apple-Intelligence-Voraussetzung und mit längerer Veröffentlichungshistorie.',
          '[PocketPal AI im Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene, breit kompatible Alternative.',
          '[Noema im Test](/de/power-local-llm/noema-review) — eine kostenlose Alternative mit fünf Formaten und austauschbarer Modellbibliothek.',
          '[Enclave AI im Test](/de/power-local-llm/enclave-ai-review) — eine weitere On-Device-KI-App zum Vergleich.',
          '[Das vollständige Local-LLM-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-fr.webp',
    title: 'AI on Device en test (2026) : une app à 4,99 $ réservée à Apple Intelligence',
    seoTitle: 'AI on Device : test 2026 de l\'IA hors ligne Apple Intelligence',
    intro:
      'AI on Device est une application pour iPhone et Mac du développeur indépendant Eduardo Dominguez Menendez, disponible pour un achat unique de 4,99 $, référencée sur l\'[Apple App Store](' +
      APP_STORE_URL +
      ') sous l\'identifiant 6753206463. Elle exécute un modèle de langage de 3 milliards de paramètres, quantifié en précision 2 bits, entièrement hors ligne, sans qu\'aucune donnée ne quitte l\'appareil. L\'application impose une condition stricte qui exclut la plupart des iPhone existants : elle ne fonctionne que sur les appareils compatibles avec Apple Intelligence, nécessitant iOS 26.0 ou macOS 26.0 ou version ultérieure. Au moment de la rédaction, la version était 1.00.01, mise à jour pour la dernière fois le 13 octobre 2025 — près d\'un an avant ce test, malgré une application encore jeune — et l\'App Store affichait trop peu d\'avis pour calculer une note moyenne. Ce test traite ces deux faits comme des réserves substantielles, pas comme des détails mineurs : une application à peine mise à jour, d\'un développeur indépendant unique et sans historique visible, doit gagner la confiance du lecteur sur des faits vérifiables, pas sur sa réputation.',
    metaDescription:
      'AI on Device en test : app à 4,99 $ (achat unique) pour iPhone/Mac exécutant un modèle 3B en 2 bits hors ligne. Nécessite un appareil compatible Apple Intelligence (iOS/macOS 26+). Regard honnête sur le nombre d\'avis et l\'historique des mises à jour.',
    twitterDescription:
      'AI on Device en test : une app à 4,99 $ (achat unique) pour iPhone/Mac exécutant un modèle 3B quantifié en 2 bits entièrement hors ligne — mais uniquement sur du matériel compatible Apple Intelligence, avec trop peu d\'avis pour une note moyenne.',
    audience:
      'Propriétaires d\'iPhone et de Mac compatibles Apple Intelligence évaluant une application payante d\'IA hors ligne d\'un développeur indépendant face à des alternatives plus établies ou gratuites comme Private LLM, PocketPal AI et Noema — couvre l\'exigence matérielle, la tarification, le modèle unique et la réserve liée au faible nombre d\'avis.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone (compatible Apple Intelligence)', 'Mac (compatible Apple Intelligence, macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device est une application du développeur indépendant Eduardo Dominguez Menendez, disponible pour un achat unique de 4,99 $, qui exécute un modèle de langage de 3 milliards de paramètres, quantifié en précision 2 bits, entièrement hors ligne sur iPhone et Mac.** Elle ne fonctionne que sur les appareils compatibles avec Apple Intelligence, nécessitant iOS 26.0 ou macOS 26.0 ou version ultérieure — une condition qui exclut la plupart des iPhone actuellement utilisés. Au moment de la rédaction, l\'application était en version 1.00.01, mise à jour pour la dernière fois le 13 octobre 2025, et l\'[App Store](' +
      APP_STORE_URL +
      ') affichait trop peu d\'avis pour une note moyenne. Les lecteurs qui souhaitent un historique public plus long ou une option gratuite devraient aussi comparer avec [Private LLM](/fr/power-local-llm/private-llm-review), [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Noema](/fr/power-local-llm/noema-review).',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que AI on Device', anchor: 'what-is-ai-on-device' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'L\'exigence Apple Intelligence', anchor: 'apple-intelligence-requirement' },
      { label: 'Le modèle : 3B, quantifié en 2 bits', anchor: 'the-model' },
      { label: 'Tarification', anchor: 'pricing' },
      { label: 'Confidentialité', anchor: 'privacy' },
      { label: 'Compromis : avantages vs limites', anchor: 'tradeoffs' },
      { label: 'AI on Device vs alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser AI on Device', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser AI on Device', anchor: 'who-should-not-use' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device est une application iPhone/Mac à 4,99 $ (achat unique) du développeur indépendant Eduardo Dominguez Menendez, qui exécute un modèle fixe de 3 milliards de paramètres quantifié en 2 bits entièrement hors ligne, mais uniquement sur les appareils compatibles Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure).',
          },
          {
            type: 'plain-terms',
            text: 'Cette application fait une seule chose : elle exécute un modèle d\'IA intégré sur votre iPhone ou Mac sans connexion internet, pour un paiement unique de 4,99 $ au lieu d\'un abonnement mensuel. Le piège est qu\'il faut un appareil récent qui prend déjà en charge les fonctionnalités "Apple Intelligence" — un iPhone plus ancien qui ne les prend pas en charge ne peut absolument pas exécuter cette application, quelle que soit sa mémoire ou sa RAM.',
          },
        ],
        items: [
          'Prix : [achat unique de 4,99 $](' + APP_STORE_URL + ') sur l\'App Store d\'Apple ; pas d\'abonnement, pas de frais à l\'usage, pas de quota.',
          'Exigence matérielle : ne fonctionne que sur les appareils compatibles Apple Intelligence — iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Plateformes : iPhone et Mac uniquement — pas d\'iPad, pas d\'Android, pas de Windows, pas de Linux.',
          'Modèle : un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits — pas de bibliothèque de modèles interchangeables.',
          'Confidentialité : inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Développeur : [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), un développeur indépendant, pas une entreprise.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction, malgré une application jeune.',
          'Note : trop peu d\'avis sur l\'App Store au moment de ce test pour afficher une note moyenne.',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'Qu\'est-ce que AI on Device',
        content: [
          '**AI on Device est une application native Apple qui exécute un unique modèle de langage intégré directement sur un iPhone ou un Mac, sans composant serveur et sans connexion internet nécessaire pour l\'inférence.** Elle est référencée sur l\'[Apple App Store](' +
          APP_STORE_URL +
          ') sous l\'identifiant 6753206463, développée par [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — un développeur indépendant, pas une entreprise ou un studio nommé.',
          'La description de l\'application elle-même indique qu\'elle exécute un modèle « de 3 milliards de paramètres, entièrement quantifié en précision 2 bits », et affirme un fonctionnement 100 % hors ligne sans collecte de données par l\'application. Elle met aussi en avant des modèles de prompts conviviaux et une intégration conçue spécifiquement pour le matériel Apple, plutôt qu\'un simple wrapper multiplateforme générique.',
          'Ce test évalue les affirmations de l\'App Store faites par le développeur lui-même — le chiffre de quantification en 2 bits, l\'affirmation de non-collecte de données, l\'exigence Apple Intelligence — par rapport à ce que révèle la fiche publique de l\'App Store elle-même, plutôt que de prendre la description pour argent comptant. PromptQuorum n\'a pas testé indépendamment la qualité de sortie du modèle par rapport à d\'autres modèles embarqués.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**Avant de payer 4,99 $, l\'étape la plus importante est de confirmer que votre appareil prend réellement en charge Apple Intelligence — sinon l\'application ne fonctionnera pas.**',
        ],
        numberedItems: [
          {
            title: 'Vérifier d\'abord la compatibilité Apple Intelligence',
            whyItMatters: 'Vérifiez votre iPhone ou Mac par rapport à la liste officielle de compatibilité Apple Intelligence d\'Apple et confirmez qu\'il peut exécuter iOS 26.0 ou macOS 26.0 ou version ultérieure. Faites-le avant l\'achat — un achat de 4,99 $ sur un appareil non pris en charge est de l\'argent dépensé pour une application qui ne peut pas lancer sa fonctionnalité principale.',
          },
          {
            title: 'Mettre à jour vers iOS 26.0 / macOS 26.0 ou version ultérieure',
            whyItMatters: 'Même un appareil compatible a besoin de la mise à jour du système installée. L\'exigence minimale de l\'application est iOS 26.0 pour iPhone ou macOS 26.0 pour Mac, selon la fiche App Store actuelle.',
          },
          {
            title: 'Acheter et télécharger l\'application',
            whyItMatters: 'Obtenez [AI on Device sur l\'Apple App Store](' + APP_STORE_URL + ') pour un paiement unique de 4,99 $. Aucune période d\'essai gratuite n\'est répertoriée, donc la vérification de compatibilité de l\'étape 1 est le seul moyen réel d\'éviter un achat inutilisable.',
          },
          {
            title: 'Utiliser les modèles de prompts intégrés',
            whyItMatters: 'L\'application intègre une création de prompts basée sur des modèles, destinée aux utilisateurs qui ne veulent pas rédiger de prompts à partir de zéro, plutôt qu\'une simple zone de chat vide.',
          },
          {
            title: 'Discuter entièrement hors ligne',
            whyItMatters: 'Une fois installé, le modèle intégré de 3 milliards de paramètres quantifié en 2 bits fonctionne sans connexion internet. Il n\'y a pas d\'étape séparée de téléchargement de modèle ni de bibliothèque de modèles à parcourir — le seul modèle fourni est celui qui s\'exécute.',
          },
        ],
        note: 'La compatibilité exacte des appareils pour Apple Intelligence évolue à mesure qu\'Apple met à jour sa liste d\'appareils pris en charge — vérifiez votre modèle précis d\'iPhone ou de Mac par rapport à la liste actuelle d\'Apple avant d\'acheter.',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'L\'exigence Apple Intelligence',
        content: [
          '**AI on Device ne fonctionne que sur les appareils compatibles Apple Intelligence, nécessitant iOS 26.0 ou macOS 26.0 ou version ultérieure — c\'est le fait le plus important pour un lecteur qui décide si l\'application est utilisable du tout.** La fiche App Store l\'indique en majuscules comme une exigence stricte, pas une recommandation : l\'application ne fonctionne pas en mode dégradé ou CPU uniquement sur du matériel non pris en charge, elle ne fonctionne tout simplement pas.',
          'Cette exigence exclut une part significative des iPhone encore utilisés quotidiennement, car la compatibilité Apple Intelligence est limitée à une plage spécifique de modèles iPhone et Mac récents. Contrairement aux applications qui exécutent un modèle léger sur n\'importe quel appareil iOS avec suffisamment de RAM (par exemple [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), qui exécute n\'importe quel fichier GGUF fourni par l\'utilisateur), le modèle unique intégré d\'AI on Device est lié à l\'exigence de plateforme Apple Intelligence plutôt qu\'à un seuil précis de RAM ou de stockage qu\'un lecteur pourrait vérifier lui-même.',
          'Conséquence pratique : un lecteur devrait vérifier son appareil précis par rapport à la liste actuelle de compatibilité Apple Intelligence avant de payer, car le prix d\'achat de 4,99 $ n\'est pas récupérable si l\'application ne se lance pas sur du matériel non pris en charge.',
        ],
      },
      theModel: {
        id: 'the-model',
        title: 'Le modèle : 3B, quantifié en 2 bits',
        itemHeadings: true,
        content: [
          '**AI on Device intègre un modèle fixe — 3 milliards de paramètres, quantifié en précision 2 bits — plutôt que de proposer une bibliothèque de modèles interchangeables.** C\'est une approche nettement différente de la plupart des concurrents évoqués dans ce cluster, qui permettent généralement de télécharger et de basculer entre plusieurs modèles GGUF, MLX ou sélectionnés.',
        ],
        columns: ['Attribut', 'Indication de la fiche App Store', 'Pourquoi c\'est important'],
        rows: [
          {
            'Attribut': 'Nombre de paramètres',
            'Indication de la fiche App Store': '3 milliards de paramètres',
            'Pourquoi c\'est important': 'Un modèle plus petit que de nombreux LLM locaux de niveau bureau, dimensionné spécifiquement pour les contraintes matérielles mobiles.',
          },
          {
            'Attribut': 'Quantification',
            'Indication de la fiche App Store': 'Entièrement quantifié en précision 2 bits',
            'Pourquoi c\'est important': 'Le 2 bits est un niveau de compression agressif — inférieur à la quantification 4 bits (Q4) plus courante utilisée par la plupart des apps mobiles d\'IA locale — ce qui échange un peu de qualité de sortie contre une empreinte mémoire plus petite.',
          },
          {
            'Attribut': 'Choix de modèle',
            'Indication de la fiche App Store': 'Un modèle unique et fixe ; la fiche ne décrit pas de navigateur de modèles ni de bibliothèque interchangeable',
            'Pourquoi c\'est important': 'Un lecteur qui souhaite essayer plusieurs tailles ou familles de modèles pour différentes tâches ne trouvera pas cette flexibilité ici — voir plutôt [Private LLM](/fr/power-local-llm/private-llm-review) (140+ modèles sélectionnés) ou [Noema](/fr/power-local-llm/noema-review) (cinq formats chargeables).',
          },
        ],
        note: 'PromptQuorum n\'a pas testé indépendamment la qualité de sortie de ce modèle par rapport à d\'autres modèles embarqués en 2 ou 4 bits ; cette section reflète les spécifications propres du développeur, pas un test d\'exactitude indépendant.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarification',
        content: [
          '**AI on Device coûte 4,99 $ en achat unique, sans abonnement ni frais à l\'usage, selon la fiche App Store actuelle.**',
          'La fiche App Store le formule explicitement comme « aucun frais à l\'usage, aucun quota d\'utilisation » — un prix unique et forfaitaire plutôt qu\'un modèle mesuré ou par abonnement. C\'est une structure tarifaire simple comparée aux applications qui combinent un niveau gratuit avec un abonnement payant pour des modèles ou fonctionnalités premium.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité',
        content: [
          '**Le développeur affirme qu\'AI on Device ne collecte aucune donnée depuis l\'application, et que toute l\'inférence s\'exécute à 100 % hors ligne, sur l\'appareil.**',
        ],
        items: [
          '**Aucune collecte de données, selon l\'affirmation propre du développeur.** La description App Store indique que le développeur ne collecte aucune donnée depuis l\'application.',
          '**Inférence 100 % hors ligne.** La fonctionnalité principale de l\'application — exécuter le modèle intégré de 3 milliards de paramètres — ne nécessite pas de connexion internet une fois installée.',
          '**Aucun audit indépendant.** Ce test s\'appuie sur les affirmations propres du développeur sur l\'App Store, pas sur un audit indépendant du code source ou une analyse du trafic réseau.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Paiement unique de 4,99 $',
            'Ce que cela signifie en usage réel': 'Aucun abonnement à gérer ou à résilier, aucune facturation à l\'usage, aucun quota.',
            'Limite / réserve': 'Les 4,99 $ ne sont pas récupérables si l\'appareil du lecteur ne remplit pas l\'exigence Apple Intelligence.',
          },
          {
            'Avantage': 'Inférence entièrement hors ligne',
            'Ce que cela signifie en usage réel': 'Le modèle intégré fonctionne sans connexion internet une fois l\'application installée.',
            'Limite / réserve': 'Ce test s\'appuie sur l\'affirmation propre du développeur de non-collecte de données, pas sur un audit indépendant.',
          },
          {
            'Avantage': 'Modèle 2 bits petit et efficace',
            'Ce que cela signifie en usage réel': 'Un modèle de 3 milliards de paramètres quantifié en 2 bits a une empreinte mémoire plus petite que des modèles plus grands ou moins compressés.',
            'Limite / réserve': 'Une quantification 2 bits agressive coûte généralement plus de qualité de sortie que la quantification 4 bits utilisée par la plupart des applications mobiles concurrentes ; PromptQuorum n\'a pas testé indépendamment ce compromis pour cette application spécifique.',
          },
          {
            'Avantage': 'Création de prompts simple, basée sur des modèles',
            'Ce que cela signifie en usage réel': 'Des modèles intégrés aident un lecteur qui ne souhaite pas rédiger de prompts à partir de zéro.',
            'Limite / réserve': 'Aucune bibliothèque de modèles ni flexibilité de format — un seul modèle fixe, contrairement à [Private LLM](/fr/power-local-llm/private-llm-review) ou [Noema](/fr/power-local-llm/noema-review).',
          },
          {
            'Avantage': 'N/A',
            'Ce que cela signifie en usage réel': 'N/A',
            'Limite / réserve': 'Exigence matérielle stricte Apple Intelligence (iOS 26.0 / macOS 26.0+) qui exclut la plupart des iPhone existants de toute utilisation de l\'application.',
          },
          {
            'Avantage': 'N/A',
            'Ce que cela signifie en usage réel': 'N/A',
            'Limite / réserve': 'Trop peu d\'avis sur l\'App Store au moment de ce test pour afficher une note moyenne, dernière mise à jour le 13 octobre 2025 — presque un an avant ce test, malgré une application jeune.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device vs alternatives',
        columns: ['App', 'Plateformes', 'Prix', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'App': 'AI on Device',
            'Plateformes': 'iPhone/Mac, compatible Apple Intelligence uniquement',
            'Prix': '4,99 $ à l\'achat unique',
            'Flexibilité des modèles': 'Un modèle fixe : 3B, quantifié en 2 bits',
            'Différence clé': 'Exigence matérielle stricte Apple Intelligence ; trop peu d\'avis pour une note moyenne à ce jour',
          },
          {
            'App': '[Private LLM](/fr/power-local-llm/private-llm-review)',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Prix': '4,99 $ à l\'achat unique',
            'Flexibilité des modèles': '140+ modèles sélectionnés ; quantification OmniQuant/GPTQ',
            'Différence clé': 'Aucune exigence Apple Intelligence ; trois ans d\'historique public',
          },
          {
            'App': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone/iPad, avec un support Android partiel',
            'Prix': 'Gratuit, open source',
            'Flexibilité des modèles': 'N\'importe quel fichier GGUF fourni par l\'utilisateur, depuis Hugging Face ou ailleurs',
            'Différence clé': 'Gratuit et largement compatible, contre une application payante liée au matériel Apple le plus récent',
          },
          {
            'App': '[Noema](/fr/power-local-llm/noema-review)',
            'Plateformes': 'iPhone/iPad/Mac/Vision Pro (Apple uniquement)',
            'Prix': 'Gratuit',
            'Flexibilité des modèles': 'Cinq formats : GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Différence clé': 'Gratuit avec une bibliothèque de modèles interchangeables, contre un modèle unique payant',
          },
          {
            'App': '[Enclave AI](/fr/power-local-llm/enclave-ai-review)',
            'Plateformes': 'Voir la fiche actuelle',
            'Prix': 'Voir la fiche actuelle',
            'Flexibilité des modèles': 'Voir le test complet pour la prise en charge actuelle des modèles',
            'Différence clé': 'Voir le test complet d\'Enclave AI pour une comparaison détaillée',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment — vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser AI on Device',
        items: [
          '**Les lecteurs qui possèdent déjà un iPhone ou un Mac compatible Apple Intelligence exécutant iOS 26.0 ou macOS 26.0 ou version ultérieure.** Sans ce matériel, l\'application ne fonctionne pas du tout — vérifiez d\'abord la compatibilité.',
          '**Les lecteurs prêts à payer 4,99 $ d\'avance pour une application non éprouvée, avec peu d\'avis, d\'un développeur solo.** Avec trop peu d\'avis pour une note moyenne et une dernière mise à jour vieille de près d\'un an, c\'est un territoire d\'adopteurs précoces, pas un achat basé sur un historique établi.',
          '**Les lecteurs qui préfèrent un modèle unique et simple plutôt qu\'une bibliothèque à choisir.** Si le modèle fixe 3B en 2 bits convient à la tâche, l\'application évite la charge de décision du choix de modèle.',
          '**Les lecteurs qui préfèrent un paiement unique forfaitaire à un abonnement.** Aucun quota d\'utilisation ni frais récurrents, selon la fiche App Store.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser AI on Device',
        items: [
          '**Les lecteurs dont l\'iPhone ou le Mac ne prend pas en charge Apple Intelligence.** L\'application ne lancera pas sa fonctionnalité principale sur du matériel non pris en charge — vérifiez la compatibilité avant de payer 4,99 $. La plupart des iPhone existants entrent dans cette catégorie.',
          '**Les lecteurs qui souhaitent plusieurs choix de modèles.** AI on Device intègre un modèle fixe ; [Private LLM](/fr/power-local-llm/private-llm-review) propose 140+ modèles sélectionnés et [Noema](/fr/power-local-llm/noema-review) prend en charge cinq formats de modèles.',
          '**Les lecteurs qui privilégient un historique établi.** Avec trop peu d\'avis pour une note moyenne et une dernière mise à jour datant de presque un an avant ce test, les lecteurs qui accordent une grande importance à la preuve sociale devraient plutôt commencer par [Private LLM](/fr/power-local-llm/private-llm-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
          '**Les lecteurs qui souhaitent une option gratuite.** [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) et [Noema](/fr/power-local-llm/noema-review) sont toutes deux gratuites avec une prise en charge de modèles plus large ou plus flexible.',
          '**Les utilisateurs d\'iPad, Android, Windows ou Linux.** AI on Device est réservée à iPhone et Mac, selon la fiche App Store.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûte AI on Device ?',
            a: 'AI on Device est un [achat unique de 4,99 $](' + APP_STORE_URL + '), vérifié pour ce test le 2026-09-12, sans abonnement, sans frais à l\'usage et sans quota, selon la fiche App Store. Les prix de l\'App Store peuvent changer au fil du temps — vérifiez le prix actuel avant d\'acheter.',
          },
          {
            q: 'AI on Device fonctionne-t-elle sur mon iPhone ?',
            a: 'Seulement si votre iPhone est compatible Apple Intelligence et exécute iOS 26.0 ou version ultérieure. C\'est une exigence stricte, pas une recommandation — la fiche App Store indique que l\'application ne fonctionne que sur les appareils compatibles Apple Intelligence. Vérifiez la liste actuelle de compatibilité Apple Intelligence d\'Apple avant d\'acheter.',
          },
          {
            q: 'Quel modèle utilise AI on Device ?',
            a: 'Un unique modèle intégré de 3 milliards de paramètres, entièrement quantifié en précision 2 bits, selon la description App Store. Contrairement aux applications avec une bibliothèque de modèles interchangeables, c\'est le seul modèle que l\'application exécute — il n\'y a pas de navigateur de modèles ni d\'étape de téléchargement pour des modèles alternatifs.',
          },
          {
            q: 'AI on Device est-elle disponible sur Android ou iPad ?',
            a: 'Non. La fiche App Store indique que l\'application prend en charge iPhone et Mac uniquement. Elle ne mentionne pas de support iPad, Android, Windows ou Linux.',
          },
          {
            q: 'Qui développe AI on Device ?',
            a: 'AI on Device est développée par [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), un développeur indépendant plutôt qu\'une entreprise ou un studio nommé, selon la fiche développeur de l\'App Store.',
          },
          {
            q: 'AI on Device fonctionne-t-elle entièrement hors ligne ?',
            a: 'Oui. Le développeur affirme que l\'application fonctionne à 100 % hors ligne sans collecte de données, selon la description App Store. Ce test s\'appuie sur l\'affirmation propre du développeur, pas sur un audit indépendant du trafic réseau.',
          },
          {
            q: 'Quelle est la fiabilité de la note App Store d\'AI on Device ?',
            a: 'Au moment de ce test, la fiche App Store affiche trop peu d\'avis pour même afficher une note moyenne — une réserve plus forte qu\'une note moyenne basse avec de nombreux avis. Considérez l\'application comme non éprouvée plutôt que de présumer sa qualité à partir de la preuve sociale, et revérifiez le nombre d\'avis actuel sur l\'App Store avant de vous y fier.',
          },
          {
            q: 'À quelle fréquence AI on Device est-elle mise à jour ?',
            a: 'La fiche App Store affiche la version 1.00.01, mise à jour pour la dernière fois le 13 octobre 2025 — près d\'un an avant la publication de ce test, malgré une application relativement jeune. C\'est une cadence de mise à jour plus lente que plusieurs concurrents activement maintenus dans ce cluster, et cela mérite d\'être pesé avec le faible nombre d\'avis.',
          },
          {
            q: 'Comment AI on Device se compare-t-elle à Private LLM ?',
            a: 'AI on Device coûte le même prix unique de 4,99 $ que [Private LLM](/fr/power-local-llm/private-llm-review) mais n\'intègre qu\'un seul modèle fixe 3B en 2 bits, nécessite un appareil compatible Apple Intelligence, et a trop peu d\'avis pour une note moyenne. Private LLM propose une bibliothèque sélectionnée de 140+ modèles, n\'a aucune exigence Apple Intelligence, et possède trois ans d\'historique public. Choisissez Private LLM pour une bibliothèque de modèles plus large et un historique plus long ; choisissez AI on Device seulement si vous voulez spécifiquement son modèle intégré et possédez déjà du matériel Apple Intelligence compatible.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AI on Device est une application simple et honnêtement tarifée — 4,99 $ une fois, sans abonnement, sans quota — qui exécute un modèle fixe de 3 milliards de paramètres quantifié en 2 bits entièrement hors ligne. Cette simplicité est aussi sa plus grande limite : il n\'y a pas de bibliothèque de modèles à choisir, et l\'application est verrouillée derrière une exigence matérielle stricte Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) qui exclut d\'office la plupart des iPhone existants. Les réserves honnêtes ne s\'arrêtent pas là : au moment de ce test, l\'App Store affiche trop peu d\'avis pour une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — près d\'un an avant ce test, malgré une application jeune. Cette combinaison — un développeur indépendant solo, aucun historique visible, et un historique de mises à jour vieillissant — signifie que ce n\'est pas un achat à faire sur la réputation. Les lecteurs qui possèdent déjà du matériel compatible Apple Intelligence et sont à l\'aise d\'être des adopteurs précoces d\'une application non éprouvée peuvent raisonnablement l\'essayer pour 4,99 $. Tous les autres, en particulier les lecteurs qui souhaitent une bibliothèque de modèles plus large ou un historique plus long, devraient plutôt commencer par [Private LLM](/fr/power-local-llm/private-llm-review), [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Noema](/fr/power-local-llm/noema-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AI on Device sur l\'App Store](' + APP_STORE_URL + ') — prix, compatibilité de plateforme, exigence Apple Intelligence, spécification du modèle, note, version et date de mise à jour.',
          '[Eduardo Dominguez Menendez sur l\'App Store](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — fiche du compte développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de Private LLM](/fr/power-local-llm/private-llm-review) — une alternative payante et sélectionnée, sans exigence Apple Intelligence et avec un historique de publication plus long.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une alternative gratuite, open source et largement compatible.',
          '[Test de Noema](/fr/power-local-llm/noema-review) — une alternative gratuite à cinq formats avec une bibliothèque de modèles interchangeables.',
          '[Test d\'Enclave AI](/fr/power-local-llm/enclave-ai-review) — une autre application d\'IA embarquée pour comparaison.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils LLM locaux sur toutes les plateformes.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-es.webp',
    title: 'AI on Device: reseña (2026) de una app de 4,99 $ solo para Apple Intelligence',
    seoTitle: 'AI on Device: reseña 2026 de IA offline con Apple Intelligence',
    intro:
      'AI on Device es una aplicación para iPhone y Mac del desarrollador independiente Eduardo Dominguez Menendez, disponible por una compra única de $4.99, listada en la [App Store de Apple](' +
      APP_STORE_URL +
      ') con el ID 6753206463. Ejecuta un modelo de lenguaje de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, completamente sin conexión, sin que ningún dato salga del dispositivo. La app tiene un requisito estricto que excluye a la mayoría de los iPhone existentes: solo funciona en dispositivos compatibles con Apple Intelligence, que requieren iOS 26.0 o macOS 26.0 o posterior. Al momento de escribir esto, la versión era 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año antes de esta reseña, a pesar de tratarse de una app joven — y la App Store mostraba muy pocas valoraciones para calcular un promedio de estrellas. Esta reseña trata ambos hechos como reservas materiales, no como notas al pie: una app apenas actualizada, de un único desarrollador independiente, sin historial visible, necesita ganarse la confianza del lector con hechos verificables, no con reputación.',
    metaDescription:
      'AI on Device, reseña: app de $4.99 (pago único) para iPhone/Mac con un modelo 3B en 2 bits sin conexión. Requiere un dispositivo compatible con Apple Intelligence (iOS/macOS 26+). Mirada honesta al número de valoraciones y al historial de actualizaciones.',
    twitterDescription:
      'AI on Device, reseña: una app de $4.99 (pago único) para iPhone/Mac que ejecuta un modelo 3B cuantizado a 2 bits completamente sin conexión — pero solo en hardware compatible con Apple Intelligence, y con muy pocas valoraciones para mostrar un promedio.',
    audience:
      'Propietarios de iPhone y Mac compatibles con Apple Intelligence que evalúan una app de pago de IA offline de un desarrollador independiente frente a alternativas más establecidas o gratuitas como Private LLM, PocketPal AI y Noema — cubre el requisito de hardware, el precio, el modelo fijo y la reserva por el bajo número de valoraciones.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone (compatible con Apple Intelligence)', 'Mac (compatible con Apple Intelligence, macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device es una app del desarrollador independiente Eduardo Dominguez Menendez, disponible por una compra única de $4.99, que ejecuta un modelo de lenguaje de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, completamente sin conexión en iPhone y Mac.** Solo funciona en dispositivos compatibles con Apple Intelligence, que requieren iOS 26.0 o macOS 26.0 o posterior — un requisito que excluye a la mayoría de los iPhone en uso actualmente. Al momento de escribir esto, la app estaba en la versión 1.00.01, actualizada por última vez el 13 de octubre de 2025, y la [App Store](' +
      APP_STORE_URL +
      ') mostraba muy pocas valoraciones para un promedio de estrellas. Los lectores que quieran un historial público más largo o una opción gratuita también deberían comparar con [Private LLM](/es/power-local-llm/private-llm-review), [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Noema](/es/power-local-llm/noema-review).',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es AI on Device', anchor: 'what-is-ai-on-device' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'El requisito de Apple Intelligence', anchor: 'apple-intelligence-requirement' },
      { label: 'El modelo: 3B, cuantizado a 2 bits', anchor: 'the-model' },
      { label: 'Precio', anchor: 'pricing' },
      { label: 'Privacidad', anchor: 'privacy' },
      { label: 'Ventajas vs. limitaciones', anchor: 'tradeoffs' },
      { label: 'AI on Device frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar AI on Device', anchor: 'who-should-use' },
      { label: 'Quién no debería usar AI on Device', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device es una app de iPhone/Mac de $4.99 (pago único) del desarrollador independiente Eduardo Dominguez Menendez que ejecuta un modelo fijo de 3.000 millones de parámetros cuantizado a 2 bits completamente sin conexión, pero solo en dispositivos compatibles con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior).',
          },
          {
            type: 'plain-terms',
            text: 'Esta app hace una sola cosa: ejecuta un modelo de IA integrado en tu iPhone o Mac sin necesidad de conexión a internet, por un pago único de $4.99 en lugar de una suscripción mensual. El truco es que necesita un dispositivo más reciente que ya sea compatible con las funciones "Apple Intelligence" propias de Apple — un iPhone más antiguo sin ese soporte no puede ejecutar esta app en absoluto, sin importar cuánto almacenamiento o RAM tenga.',
          },
        ],
        items: [
          'Precio: [compra única de $4.99](' + APP_STORE_URL + ') en la App Store de Apple; sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requisito de hardware: solo funciona en dispositivos compatibles con Apple Intelligence — iOS 26.0 o macOS 26.0 o posterior.',
          'Plataformas: solo iPhone y Mac — sin iPad, sin Android, sin Windows, sin Linux.',
          'Modelo: un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits — no una biblioteca de modelos intercambiables.',
          'Privacidad: inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Desarrollador: [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), un desarrollador independiente, no una empresa.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto, a pesar de ser una app joven.',
          'Valoración: muy pocas valoraciones en la App Store al momento de esta reseña para mostrar un promedio de estrellas.',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'Qué es AI on Device',
        content: [
          '**AI on Device es una app nativa de Apple que ejecuta un único modelo de lenguaje integrado directamente en un iPhone o Mac, sin componente de servidor y sin necesidad de conexión a internet para la inferencia.** Está listada en la [App Store de Apple](' +
          APP_STORE_URL +
          ') con el ID 6753206463, desarrollada por [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — un desarrollador independiente, no una empresa o estudio con nombre propio.',
          'La propia descripción de la app indica que ejecuta un modelo "de 3.000 millones de parámetros, completamente cuantizado a precisión de 2 bits", y afirma un funcionamiento 100% sin conexión sin recopilación de datos por parte de la app. También promociona plantillas de prompts fáciles de usar e integración construida específicamente para hardware Apple, en lugar de un envoltorio multiplataforma genérico.',
          'Esta reseña evalúa las propias afirmaciones del desarrollador en la App Store — la cifra de cuantización de 2 bits, la declaración de no recopilación de datos, el requisito de Apple Intelligence — frente a lo que la propia ficha pública de la App Store revela, en lugar de aceptar la descripción sin cuestionarla. PromptQuorum no ha comparado de forma independiente la calidad de salida del modelo con otros modelos en el dispositivo.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Antes de pagar $4.99, el paso más importante es confirmar que tu dispositivo realmente admite Apple Intelligence — de lo contrario la app no funcionará.**',
        ],
        numberedItems: [
          {
            title: 'Confirma primero la compatibilidad con Apple Intelligence',
            whyItMatters: 'Verifica tu iPhone o Mac contra la lista oficial de compatibilidad de Apple Intelligence de Apple y confirma que puede ejecutar iOS 26.0 o macOS 26.0 o posterior. Hazlo antes de comprar — una compra de $4.99 en un dispositivo no compatible es dinero gastado en una app que no puede lanzar su función principal.',
          },
          {
            title: 'Actualiza a iOS 26.0 / macOS 26.0 o posterior',
            whyItMatters: 'Incluso un dispositivo compatible necesita la actualización del sistema instalada. El requisito mínimo de la app es iOS 26.0 para iPhone o macOS 26.0 para Mac, según la ficha actual de la App Store.',
          },
          {
            title: 'Compra y descarga la app',
            whyItMatters: 'Obtén [AI on Device desde la App Store de Apple](' + APP_STORE_URL + ') por un pago único de $4.99. No hay periodo de prueba gratuito listado, así que la verificación de compatibilidad del paso 1 es la única forma real de evitar una compra inutilizable.',
          },
          {
            title: 'Usa las plantillas de prompts integradas',
            whyItMatters: 'La app incluye creación de prompts basada en plantillas, pensada para usuarios que no quieren escribir prompts desde cero, en lugar de solo un cuadro de chat vacío.',
          },
          {
            title: 'Chatea completamente sin conexión',
            whyItMatters: 'Una vez instalada, el modelo integrado de 3.000 millones de parámetros cuantizado a 2 bits funciona sin conexión a internet. No hay un paso separado de descarga de modelo ni una biblioteca de modelos para explorar — el único modelo incluido es el que se ejecuta.',
          },
        ],
        note: 'La compatibilidad exacta de dispositivos para Apple Intelligence cambia a medida que Apple actualiza su lista de dispositivos compatibles — verifica tu modelo específico de iPhone o Mac contra la lista actual de Apple antes de comprar.',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'El requisito de Apple Intelligence',
        content: [
          '**AI on Device solo funciona en dispositivos compatibles con Apple Intelligence, que requieren iOS 26.0 o macOS 26.0 o posterior — este es el hecho más importante para un lector que decide si la app es siquiera utilizable.** La ficha de la App Store lo indica en mayúsculas como un requisito estricto, no una recomendación: la app no funciona en un modo degradado o solo de CPU en hardware no compatible, simplemente no funciona.',
          'Este requisito excluye a una parte significativa de los iPhone que todavía están en uso activo diario, ya que la compatibilidad con Apple Intelligence se limita a un rango específico de modelos más recientes de iPhone y Mac. A diferencia de las apps que ejecutan un modelo ligero en cualquier dispositivo iOS con suficiente RAM (por ejemplo, [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), que ejecuta cualquier archivo GGUF que el usuario proporcione), el único modelo integrado de AI on Device está atado al requisito de plataforma de Apple Intelligence en lugar de a un umbral específico de RAM o almacenamiento que un lector pudiera verificar por su cuenta.',
          'Implicación práctica: un lector debería verificar su dispositivo específico contra la lista actual de compatibilidad de Apple Intelligence antes de pagar, ya que el precio de compra de $4.99 no es recuperable si la app no se puede iniciar en hardware no compatible.',
        ],
      },
      theModel: {
        id: 'the-model',
        title: 'El modelo: 3B, cuantizado a 2 bits',
        itemHeadings: true,
        content: [
          '**AI on Device incluye un modelo fijo — 3.000 millones de parámetros, cuantizado a precisión de 2 bits — en lugar de ofrecer una biblioteca de modelos intercambiables.** Este es un diseño notablemente diferente al de la mayoría de los competidores reseñados en este grupo, que normalmente permiten descargar y cambiar entre varios modelos GGUF, MLX o seleccionados.',
        ],
        columns: ['Atributo', 'Lo que indica la ficha de la App Store', 'Por qué importa'],
        rows: [
          {
            'Atributo': 'Número de parámetros',
            'Lo que indica la ficha de la App Store': '3.000 millones de parámetros',
            'Por qué importa': 'Un modelo más pequeño que muchos LLM locales de nivel de escritorio, dimensionado específicamente para las limitaciones del hardware móvil.',
          },
          {
            'Atributo': 'Cuantización',
            'Lo que indica la ficha de la App Store': 'Completamente cuantizado a precisión de 2 bits',
            'Por qué importa': '2 bits es un nivel de compresión agresivo — inferior a la cuantización de 4 bits (Q4), más común, que usan la mayoría de las apps móviles de IA local — lo que sacrifica algo de calidad de salida por una huella de memoria más pequeña.',
          },
          {
            'Atributo': 'Elección de modelo',
            'Lo que indica la ficha de la App Store': 'Un único modelo fijo e integrado; la ficha no describe un explorador de modelos ni una biblioteca intercambiable',
            'Por qué importa': 'Un lector que quiera probar varios tamaños o familias de modelos para distintas tareas no encontrará esa flexibilidad aquí — ver en su lugar [Private LLM](/es/power-local-llm/private-llm-review) (140+ modelos seleccionados) o [Noema](/es/power-local-llm/noema-review) (cinco formatos cargables).',
          },
        ],
        note: 'PromptQuorum no ha comparado de forma independiente la calidad de salida de este modelo con otros modelos en el dispositivo de 2 o 4 bits; esta sección refleja las especificaciones propias del desarrollador, no una prueba de precisión independiente.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precio',
        content: [
          '**AI on Device cuesta $4.99 como pago único, sin suscripción ni tarifas por uso, según la ficha actual de la App Store.**',
          'La ficha de la App Store lo enmarca explícitamente como "sin tarifas por uso, sin cuotas de uso" — un precio único y fijo en lugar de un modelo medido o de suscripción. Esta es una estructura de precios sencilla en comparación con apps que combinan un nivel gratuito con una suscripción de pago para modelos o funciones premium.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad',
        content: [
          '**El desarrollador afirma que AI on Device no recopila ningún dato de la app, y que toda la inferencia se ejecuta 100% sin conexión, en el dispositivo.**',
        ],
        items: [
          '**Sin recopilación de datos, según la propia afirmación del desarrollador.** La descripción de la App Store indica que el desarrollador no recopila ningún dato de la app.',
          '**Inferencia 100% sin conexión.** La función principal de la app — ejecutar el modelo integrado de 3.000 millones de parámetros — no requiere conexión a internet una vez instalada.',
          '**Sin auditoría independiente.** Esta reseña se basa en las propias afirmaciones del desarrollador en la App Store, no en una auditoría independiente del código fuente o un análisis del tráfico de red.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas vs. limitaciones',
        columns: ['Ventaja', 'Qué significa en uso real', 'Limitación / reserva'],
        rows: [
          {
            'Ventaja': 'Pago único de $4.99',
            'Qué significa en uso real': 'Sin suscripción que gestionar o cancelar, sin facturación por uso, sin cuotas.',
            'Limitación / reserva': 'Los $4.99 no son recuperables si el dispositivo del lector no cumple el requisito de Apple Intelligence.',
          },
          {
            'Ventaja': 'Inferencia completamente sin conexión',
            'Qué significa en uso real': 'El modelo integrado funciona sin conexión a internet una vez instalada la app.',
            'Limitación / reserva': 'Esta reseña se basa en la propia afirmación del desarrollador de no recopilación de datos, no en una auditoría independiente.',
          },
          {
            'Ventaja': 'Modelo pequeño y eficiente en 2 bits',
            'Qué significa en uso real': 'Un modelo de 3.000 millones de parámetros cuantizado a 2 bits tiene una huella de memoria más pequeña que modelos más grandes o menos comprimidos.',
            'Limitación / reserva': 'La cuantización agresiva de 2 bits suele costar más calidad de salida que la cuantización de 4 bits que usan la mayoría de las apps móviles competidoras; PromptQuorum no ha comparado de forma independiente este equilibrio para esta app específica.',
          },
          {
            'Ventaja': 'Creación de prompts simple, basada en plantillas',
            'Qué significa en uso real': 'Plantillas integradas ayudan a un lector que no quiere escribir prompts desde cero.',
            'Limitación / reserva': 'Sin biblioteca de modelos ni flexibilidad de formato — solo un modelo fijo, a diferencia de [Private LLM](/es/power-local-llm/private-llm-review) o [Noema](/es/power-local-llm/noema-review).',
          },
          {
            'Ventaja': 'N/D',
            'Qué significa en uso real': 'N/D',
            'Limitación / reserva': 'Requisito estricto de Apple Intelligence (iOS 26.0 / macOS 26.0+) que excluye a la mayoría de los iPhone existentes de poder usar la app en absoluto.',
          },
          {
            'Ventaja': 'N/D',
            'Qué significa en uso real': 'N/D',
            'Limitación / reserva': 'Muy pocas valoraciones en la App Store al momento de esta reseña para mostrar un promedio de estrellas, y última actualización el 13 de octubre de 2025 — casi un año antes de esta reseña, a pesar de ser una app joven.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'AI on Device',
            'Plataformas': 'iPhone/Mac, solo compatible con Apple Intelligence',
            'Precio': '$4.99 pago único',
            'Flexibilidad de modelos': 'Un modelo fijo: 3B, cuantizado a 2 bits',
            'Diferencia clave': 'Requisito estricto de hardware Apple Intelligence; aún muy pocas valoraciones para un promedio de estrellas',
          },
          {
            'App': '[Private LLM](/es/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Precio': '$4.99 pago único',
            'Flexibilidad de modelos': '140+ modelos seleccionados; cuantización OmniQuant/GPTQ',
            'Diferencia clave': 'Sin requisito de Apple Intelligence; tres años de historial público de versiones',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, con algo de soporte para Android',
            'Precio': 'Gratis, código abierto',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF que el usuario obtenga de Hugging Face u otro sitio',
            'Diferencia clave': 'Gratis y ampliamente compatible, frente a una app de pago atada al hardware Apple más reciente',
          },
          {
            'App': '[Noema](/es/power-local-llm/noema-review)',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (solo Apple)',
            'Precio': 'Gratis',
            'Flexibilidad de modelos': 'Cinco formatos: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Diferencia clave': 'Gratis con una biblioteca de modelos intercambiables, frente a un único modelo fijo de pago',
          },
          {
            'App': '[Enclave AI](/es/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Ver la ficha actual',
            'Precio': 'Ver la ficha actual',
            'Flexibilidad de modelos': 'Ver la reseña completa para el soporte de modelos actual',
            'Diferencia clave': 'Ver la reseña completa de Enclave AI para una comparación detallada',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifica las especificaciones actuales en la ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar AI on Device',
        items: [
          '**Lectores que ya poseen un iPhone o Mac compatible con Apple Intelligence con iOS 26.0 o macOS 26.0 o posterior.** Sin ese hardware, la app no funciona en absoluto — verifica la compatibilidad primero.',
          '**Lectores dispuestos a pagar $4.99 por adelantado por una app no probada, con pocas valoraciones, de un desarrollador solo.** Con muy pocas valoraciones para un promedio de estrellas y una última actualización de casi un año, este es territorio de adoptantes tempranos, no una compra basada en un historial comprobado.',
          '**Lectores que prefieren un único modelo simple integrado en lugar de una biblioteca para elegir.** Si el modelo fijo 3B en 2 bits se ajusta a la tarea, la app evita la carga de decisión de elegir un modelo.',
          '**Lectores que prefieren un pago único fijo frente a una suscripción.** Sin cuotas de uso ni tarifas recurrentes, según la ficha de la App Store.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar AI on Device',
        items: [
          '**Lectores cuyo iPhone o Mac no admite Apple Intelligence.** La app no lanzará su función principal en hardware no compatible — verifica la compatibilidad antes de pagar $4.99. La mayoría de los iPhone existentes caen en esta categoría.',
          '**Lectores que quieren varias opciones de modelo.** AI on Device incluye un modelo fijo; [Private LLM](/es/power-local-llm/private-llm-review) ofrece 140+ modelos seleccionados y [Noema](/es/power-local-llm/noema-review) admite cinco formatos de modelo.',
          '**Lectores que priorizan un historial establecido.** Con muy pocas valoraciones para un promedio de estrellas y una última actualización de casi un año antes de esta reseña, los lectores que valoran mucho la prueba social deberían empezar con [Private LLM](/es/power-local-llm/private-llm-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) en su lugar.',
          '**Lectores que quieren una opción gratuita.** [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) y [Noema](/es/power-local-llm/noema-review) son ambas gratuitas con soporte de modelos más amplio o flexible.',
          '**Usuarios de iPad, Android, Windows o Linux.** AI on Device es solo para iPhone y Mac, según la ficha de la App Store.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuesta AI on Device?',
            a: 'AI on Device es una [compra única de $4.99](' + APP_STORE_URL + '), verificada para esta reseña el 2026-09-12, sin suscripción, sin tarifas por uso y sin cuotas, según la ficha de la App Store. Los precios de la App Store pueden cambiar con el tiempo — confirma el precio actual antes de comprar.',
          },
          {
            q: '¿Funciona AI on Device en mi iPhone?',
            a: 'Solo si tu iPhone es compatible con Apple Intelligence y ejecuta iOS 26.0 o posterior. Este es un requisito estricto, no una recomendación — la ficha de la App Store indica que la app solo funciona en dispositivos compatibles con Apple Intelligence. Verifica la lista actual de compatibilidad de Apple Intelligence de Apple antes de comprar.',
          },
          {
            q: '¿Qué modelo usa AI on Device?',
            a: 'Un único modelo integrado de 3.000 millones de parámetros, completamente cuantizado a precisión de 2 bits, según la descripción de la App Store. A diferencia de las apps con una biblioteca de modelos intercambiables, este es el único modelo que ejecuta la app — no hay explorador de modelos ni un paso de descarga para modelos alternativos.',
          },
          {
            q: '¿AI on Device está disponible en Android o iPad?',
            a: 'No. La ficha de la App Store indica que la app admite solo iPhone y Mac. No menciona soporte para iPad, Android, Windows o Linux.',
          },
          {
            q: '¿Quién desarrolla AI on Device?',
            a: 'AI on Device está desarrollada por [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), un desarrollador independiente en lugar de una empresa o estudio con nombre propio, según la ficha de desarrollador de la App Store.',
          },
          {
            q: '¿AI on Device funciona completamente sin conexión?',
            a: 'Sí. El desarrollador afirma que la app funciona 100% sin conexión sin recopilación de datos, según la descripción de la App Store. Esta reseña se basa en la propia afirmación del desarrollador, no en una auditoría independiente del tráfico de red.',
          },
          {
            q: '¿Qué tan confiable es la valoración de AI on Device en la App Store?',
            a: 'Al momento de esta reseña, la ficha de la App Store muestra muy pocas valoraciones para siquiera mostrar un promedio de estrellas — una reserva más fuerte que un promedio bajo con muchas reseñas. Trata la app como no probada en lugar de asumir calidad a partir de la prueba social, y vuelve a verificar el número actual de valoraciones en la App Store antes de confiar en él.',
          },
          {
            q: '¿Con qué frecuencia se actualiza AI on Device?',
            a: 'La ficha de la App Store muestra la versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año antes de la publicación de esta reseña, a pesar de que la app es relativamente joven. Este es un ritmo de actualización más lento que varios competidores activamente mantenidos en este grupo, y merece considerarse junto con el bajo número de valoraciones.',
          },
          {
            q: '¿Cómo se compara AI on Device con Private LLM?',
            a: 'AI on Device cuesta el mismo precio único de $4.99 que [Private LLM](/es/power-local-llm/private-llm-review) pero incluye solo un modelo fijo 3B en 2 bits, requiere un dispositivo compatible con Apple Intelligence, y tiene muy pocas valoraciones para un promedio de estrellas. Private LLM ofrece una biblioteca seleccionada de 140+ modelos, no tiene requisito de Apple Intelligence, y tiene tres años de historial público de versiones. Elige Private LLM para una biblioteca de modelos más amplia y un historial más largo; elige AI on Device solo si quieres específicamente su modelo integrado y ya posees hardware compatible con Apple Intelligence.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'AI on Device es una app sencilla y honestamente tarificada — $4.99 una sola vez, sin suscripción, sin cuotas — que ejecuta un modelo fijo de 3.000 millones de parámetros cuantizado a 2 bits completamente sin conexión. Esa simplicidad es también su mayor limitación: no hay biblioteca de modelos entre la cual elegir, y la app está bloqueada tras un requisito estricto de hardware Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior) que excluye a la mayoría de los iPhone existentes de plano. Las reservas honestas no terminan ahí: al momento de esta reseña, la App Store muestra muy pocas valoraciones para un promedio de estrellas, y la última actualización fue el 13 de octubre de 2025 — casi un año antes de esta reseña, a pesar de que la app es joven. Esa combinación — un desarrollador independiente solo, sin historial visible, y un historial de actualizaciones desactualizado — significa que esta no es una compra que se deba hacer basándose en reputación. Los lectores que ya poseen hardware compatible con Apple Intelligence y se sienten cómodos siendo adoptantes tempranos de una app no probada pueden probarla razonablemente por $4.99. Todos los demás, y especialmente los lectores que quieran una biblioteca de modelos más amplia o un historial más largo, deberían empezar con [Private LLM](/es/power-local-llm/private-llm-review), [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Noema](/es/power-local-llm/noema-review) en su lugar.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[AI on Device en la App Store](' + APP_STORE_URL + ') — precio, compatibilidad de plataforma, requisito de Apple Intelligence, especificación del modelo, valoración, versión y fecha de actualización.',
          '[Eduardo Dominguez Menendez en la App Store](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — ficha de la cuenta de desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — una alternativa de pago con biblioteca seleccionada, sin requisito de Apple Intelligence y con un historial de versiones más largo.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una alternativa gratuita, de código abierto y ampliamente compatible.',
          '[Reseña de Noema](/es/power-local-llm/noema-review) — una alternativa gratuita de cinco formatos con biblioteca de modelos intercambiables.',
          '[Reseña de Enclave AI](/es/power-local-llm/enclave-ai-review) — otra app de IA en el dispositivo para comparar.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas LLM locales en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-pt.webp',
    title: 'AI on Device: análise (2026) de um app de $4,99 só para Apple Intelligence',
    seoTitle: 'AI on Device: análise 2026 da IA offline com Apple Intelligence',
    intro:
      'AI on Device é um aplicativo para iPhone e Mac do desenvolvedor independente Eduardo Dominguez Menendez, disponível por uma compra única de $4,99, listado na [App Store da Apple](' +
      APP_STORE_URL +
      ') com o ID 6753206463. Ele executa um modelo de linguagem de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, totalmente offline, sem que nenhum dado saia do dispositivo. O app tem uma exigência rígida que exclui a maioria dos iPhones existentes: só funciona em dispositivos compatíveis com o Apple Intelligence, exigindo iOS 26.0 ou macOS 26.0 ou posterior. No momento da redação, a versão era 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano antes desta análise, apesar de ser um app jovem — e a App Store mostrava avaliações insuficientes para calcular uma média de estrelas. Esta análise trata ambos os fatos como ressalvas relevantes, não notas de rodapé: um app pouco atualizado, de um único desenvolvedor independente, sem histórico visível, precisa conquistar a confiança do leitor com fatos verificáveis, não com reputação.',
    metaDescription:
      'AI on Device, análise: app de $4,99 (compra única) para iPhone/Mac com um modelo 3B em 2 bits offline. Requer um dispositivo compatível com Apple Intelligence (iOS/macOS 26+). Olhar honesto sobre o número de avaliações e o histórico de atualizações.',
    twitterDescription:
      'AI on Device, análise: um app de $4,99 (compra única) para iPhone/Mac que executa um modelo 3B quantizado em 2 bits totalmente offline — mas só em hardware compatível com Apple Intelligence, com avaliações insuficientes para uma média.',
    audience:
      'Proprietários de iPhone e Mac compatíveis com Apple Intelligence avaliando um app pago de IA offline de um desenvolvedor independente frente a alternativas mais estabelecidas ou gratuitas como Private LLM, PocketPal AI e Noema — cobre a exigência de hardware, o preço, o modelo fixo e a ressalva do baixo número de avaliações.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone (compatível com Apple Intelligence)', 'Mac (compatível com Apple Intelligence, macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device é um app do desenvolvedor independente Eduardo Dominguez Menendez, disponível por uma compra única de $4,99, que executa um modelo de linguagem de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, totalmente offline em iPhone e Mac.** Ele só funciona em dispositivos compatíveis com Apple Intelligence, exigindo iOS 26.0 ou macOS 26.0 ou posterior — uma exigência que exclui a maioria dos iPhones em uso hoje. No momento da redação, o app estava na versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025, e a [App Store](' +
      APP_STORE_URL +
      ') mostrava avaliações insuficientes para uma média de estrelas. Leitores que queiram um histórico público mais longo ou uma opção gratuita também devem comparar com [Private LLM](/pt/power-local-llm/private-llm-review), [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou [Noema](/pt/power-local-llm/noema-review).',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o AI on Device', anchor: 'what-is-ai-on-device' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'A exigência do Apple Intelligence', anchor: 'apple-intelligence-requirement' },
      { label: 'O modelo: 3B, quantizado em 2 bits', anchor: 'the-model' },
      { label: 'Preço', anchor: 'pricing' },
      { label: 'Privacidade', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'AI on Device vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o AI on Device', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o AI on Device', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device é um app de iPhone/Mac de $4,99 (compra única) do desenvolvedor independente Eduardo Dominguez Menendez que executa um modelo fixo de 3 bilhões de parâmetros quantizado em 2 bits totalmente offline, mas somente em dispositivos compatíveis com Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior).',
          },
          {
            type: 'plain-terms',
            text: 'Este app faz uma única coisa: executa um modelo de IA embutido no seu iPhone ou Mac sem necessidade de conexão à internet, por um pagamento único de $4,99 em vez de uma assinatura mensal. A pegadinha é que ele precisa de um dispositivo mais novo que já suporte os recursos "Apple Intelligence" da própria Apple — um iPhone mais antigo sem esse suporte simplesmente não consegue executar este app, não importa quanto armazenamento ou RAM tenha.',
          },
        ],
        items: [
          'Preço: [compra única de $4,99](' + APP_STORE_URL + ') na App Store da Apple; sem assinatura, sem taxas por uso, sem cotas.',
          'Exigência de hardware: só funciona em dispositivos compatíveis com Apple Intelligence — iOS 26.0 ou macOS 26.0 ou posterior.',
          'Plataformas: apenas iPhone e Mac — sem iPad, sem Android, sem Windows, sem Linux.',
          'Modelo: um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits — não uma biblioteca de modelos intercambiáveis.',
          'Privacidade: inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Desenvolvedor: [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), um desenvolvedor independente, não uma empresa.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação, apesar de ser um app jovem.',
          'Avaliação: avaliações insuficientes na App Store no momento desta análise para exibir uma média de estrelas.',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'O que é o AI on Device',
        content: [
          '**AI on Device é um app nativo da Apple que executa um único modelo de linguagem embutido diretamente em um iPhone ou Mac, sem componente de servidor e sem necessidade de conexão à internet para a inferência.** Ele está listado na [App Store da Apple](' +
          APP_STORE_URL +
          ') com o ID 6753206463, desenvolvido por [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — um desenvolvedor independente, não uma empresa ou estúdio com nome próprio.',
          'A própria descrição do app afirma que ele executa um modelo "de 3 bilhões de parâmetros, totalmente quantizado em precisão de 2 bits", e afirma operação 100% offline sem coleta de dados pelo app. Também anuncia templates de prompts fáceis de usar e integração construída especificamente para hardware Apple, em vez de um wrapper multiplataforma genérico.',
          'Esta análise avalia as próprias afirmações do desenvolvedor na App Store — o número de quantização em 2 bits, a declaração de não coleta de dados, a exigência do Apple Intelligence — em comparação com o que a própria ficha pública da App Store revela, em vez de aceitar a descrição sem questionar. A PromptQuorum não testou de forma independente a qualidade de saída do modelo em comparação com outros modelos no dispositivo.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**Antes de pagar $4,99, o passo mais importante é confirmar que seu dispositivo realmente suporta o Apple Intelligence — caso contrário, o app não funcionará.**',
        ],
        numberedItems: [
          {
            title: 'Confirme primeiro a compatibilidade com o Apple Intelligence',
            whyItMatters: 'Verifique seu iPhone ou Mac na lista oficial de compatibilidade com o Apple Intelligence da Apple e confirme que ele pode executar iOS 26.0 ou macOS 26.0 ou posterior. Faça isso antes de comprar — uma compra de $4,99 em um dispositivo não compatível é dinheiro gasto em um app que não consegue iniciar seu recurso principal.',
          },
          {
            title: 'Atualize para iOS 26.0 / macOS 26.0 ou posterior',
            whyItMatters: 'Mesmo um dispositivo compatível precisa ter a atualização do sistema instalada. A exigência mínima do app é iOS 26.0 para iPhone ou macOS 26.0 para Mac, segundo a ficha atual da App Store.',
          },
          {
            title: 'Compre e baixe o app',
            whyItMatters: 'Obtenha o [AI on Device na App Store da Apple](' + APP_STORE_URL + ') por um pagamento único de $4,99. Não há período de teste gratuito listado, então a verificação de compatibilidade do passo 1 é a única forma real de evitar uma compra inutilizável.',
          },
          {
            title: 'Use os templates de prompts integrados',
            whyItMatters: 'O app vem com criação de prompts baseada em templates, voltada para usuários que não querem escrever prompts do zero, em vez de apenas uma caixa de chat vazia.',
          },
          {
            title: 'Converse totalmente offline',
            whyItMatters: 'Depois de instalado, o modelo embutido de 3 bilhões de parâmetros quantizado em 2 bits funciona sem conexão à internet. Não há uma etapa separada de download de modelo nem uma biblioteca de modelos para explorar — o único modelo incluído é o que roda.',
          },
        ],
        note: 'A compatibilidade exata de dispositivos para o Apple Intelligence muda conforme a Apple atualiza sua lista de dispositivos suportados — verifique seu modelo específico de iPhone ou Mac na lista atual da Apple antes de comprar.',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'A exigência do Apple Intelligence',
        content: [
          '**AI on Device só funciona em dispositivos compatíveis com o Apple Intelligence, exigindo iOS 26.0 ou macOS 26.0 ou posterior — este é o fato mais importante para um leitor decidir se o app é sequer utilizável.** A ficha da App Store afirma isso em letras maiúsculas como uma exigência rígida, não uma recomendação: o app não roda em modo degradado ou apenas de CPU em hardware não suportado — simplesmente não funciona.',
          'Essa exigência exclui uma parcela significativa dos iPhones ainda em uso diário ativo, já que a compatibilidade com o Apple Intelligence se limita a uma faixa específica de modelos mais novos de iPhone e Mac. Diferentemente de apps que executam um modelo leve em qualquer dispositivo iOS com RAM suficiente (por exemplo, o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), que executa qualquer arquivo GGUF fornecido pelo usuário), o único modelo embutido do AI on Device está atrelado à exigência de plataforma do Apple Intelligence, e não a um piso específico de RAM ou armazenamento que um leitor pudesse verificar por conta própria.',
          'Implicação prática: um leitor deve verificar seu dispositivo específico na lista atual de compatibilidade do Apple Intelligence antes de pagar, já que o preço de compra de $4,99 não é recuperável se o app não conseguir ser executado em hardware não suportado.',
        ],
      },
      theModel: {
        id: 'the-model',
        title: 'O modelo: 3B, quantizado em 2 bits',
        itemHeadings: true,
        content: [
          '**AI on Device inclui um modelo fixo — 3 bilhões de parâmetros, quantizado em precisão de 2 bits — em vez de oferecer uma biblioteca de modelos intercambiáveis.** Este é um design significativamente diferente da maioria dos concorrentes analisados neste grupo, que normalmente permitem baixar e alternar entre vários modelos GGUF, MLX ou selecionados.',
        ],
        columns: ['Atributo', 'O que a ficha da App Store informa', 'Por que isso importa'],
        rows: [
          {
            'Atributo': 'Número de parâmetros',
            'O que a ficha da App Store informa': '3 bilhões de parâmetros',
            'Por que isso importa': 'Um modelo menor do que muitos LLMs locais de nível desktop, dimensionado especificamente para as limitações de hardware móvel.',
          },
          {
            'Atributo': 'Quantização',
            'O que a ficha da App Store informa': 'Totalmente quantizado em precisão de 2 bits',
            'Por que isso importa': '2 bits é um nível de compressão agressivo — inferior à quantização de 4 bits (Q4), mais comum, usada pela maioria dos apps móveis de IA local — o que troca um pouco de qualidade de saída por uma pegada de memória menor.',
          },
          {
            'Atributo': 'Escolha de modelo',
            'O que a ficha da App Store informa': 'Um único modelo fixo e embutido; a ficha não descreve um navegador de modelos ou biblioteca intercambiável',
            'Por que isso importa': 'Um leitor que queira experimentar vários tamanhos ou famílias de modelos para diferentes tarefas não encontrará essa flexibilidade aqui — veja em vez disso o [Private LLM](/pt/power-local-llm/private-llm-review) (140+ modelos selecionados) ou o [Noema](/pt/power-local-llm/noema-review) (cinco formatos carregáveis).',
          },
        ],
        note: 'A PromptQuorum não testou de forma independente a qualidade de saída deste modelo em comparação com outros modelos no dispositivo de 2 ou 4 bits; esta seção reflete as especificações informadas pelo próprio desenvolvedor, não um teste de precisão independente.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preço',
        content: [
          '**AI on Device custa $4,99 como compra única, sem assinatura e sem taxas por uso, segundo a ficha atual da App Store.**',
          'A ficha da App Store formula isso explicitamente como "sem taxas por uso, sem cotas de uso" — um preço único e fixo em vez de um modelo medido ou por assinatura. Essa é uma estrutura de preços simples em comparação com apps que combinam um nível gratuito com uma assinatura paga para modelos ou recursos premium.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade',
        content: [
          '**O desenvolvedor afirma que o AI on Device não coleta nenhum dado do app, e que toda a inferência roda 100% offline, no dispositivo.**',
        ],
        items: [
          '**Nenhuma coleta de dados, segundo a própria afirmação do desenvolvedor.** A descrição da App Store informa que o desenvolvedor não coleta nenhum dado do app.',
          '**Inferência 100% offline.** O recurso principal do app — executar o modelo embutido de 3 bilhões de parâmetros — não requer conexão à internet após a instalação.',
          '**Nenhuma auditoria independente.** Esta análise se baseia nas próprias afirmações do desenvolvedor na App Store, não em uma auditoria independente do código-fonte ou análise de tráfego de rede.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Pagamento único de $4,99',
            'O que significa no uso real': 'Sem assinatura para gerenciar ou cancelar, sem cobrança por uso, sem cotas.',
            'Limitação / ressalva': 'Os $4,99 não são recuperáveis se o dispositivo do leitor não atender à exigência do Apple Intelligence.',
          },
          {
            'Benefício': 'Inferência totalmente offline',
            'O que significa no uso real': 'O modelo embutido funciona sem conexão à internet após a instalação do app.',
            'Limitação / ressalva': 'Esta análise se baseia na própria afirmação do desenvolvedor de não coleta de dados, não em uma auditoria independente.',
          },
          {
            'Benefício': 'Modelo pequeno e eficiente em 2 bits',
            'O que significa no uso real': 'Um modelo de 3 bilhões de parâmetros quantizado em 2 bits tem uma pegada de memória menor do que modelos maiores ou menos comprimidos.',
            'Limitação / ressalva': 'A quantização agressiva em 2 bits costuma custar mais qualidade de saída do que a quantização em 4 bits usada pela maioria dos apps móveis concorrentes; a PromptQuorum não testou de forma independente essa relação de custo-benefício para este app específico.',
          },
          {
            'Benefício': 'Criação de prompts simples, baseada em templates',
            'O que significa no uso real': 'Templates integrados ajudam um leitor que não quer escrever prompts do zero.',
            'Limitação / ressalva': 'Nenhuma biblioteca de modelos ou flexibilidade de formato — apenas um modelo fixo, diferente do [Private LLM](/pt/power-local-llm/private-llm-review) ou do [Noema](/pt/power-local-llm/noema-review).',
          },
          {
            'Benefício': 'N/D',
            'O que significa no uso real': 'N/D',
            'Limitação / ressalva': 'Exigência rígida do Apple Intelligence (iOS 26.0 / macOS 26.0+) que exclui a maioria dos iPhones existentes de conseguir usar o app.',
          },
          {
            'Benefício': 'N/D',
            'O que significa no uso real': 'N/D',
            'Limitação / ressalva': 'Avaliações insuficientes na App Store no momento desta análise para exibir uma média de estrelas, e última atualização em 13 de outubro de 2025 — quase um ano antes desta análise, apesar de ser um app jovem.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device vs. alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Flexibilidade de modelos', 'Diferença principal'],
        rows: [
          {
            'App': 'AI on Device',
            'Plataformas': 'iPhone/Mac, apenas compatível com Apple Intelligence',
            'Preço': '$4,99 compra única',
            'Flexibilidade de modelos': 'Um modelo fixo: 3B, quantizado em 2 bits',
            'Diferença principal': 'Exigência rígida de hardware Apple Intelligence; ainda poucas avaliações para uma média de estrelas',
          },
          {
            'App': '[Private LLM](/pt/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Preço': '$4,99 compra única',
            'Flexibilidade de modelos': '140+ modelos selecionados; quantização OmniQuant/GPTQ',
            'Diferença principal': 'Sem exigência de Apple Intelligence; três anos de histórico público de versões',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, com algum suporte a Android',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF que o usuário obtenha do Hugging Face ou de outro lugar',
            'Diferença principal': 'Gratuito e amplamente compatível, versus um app pago atrelado ao hardware Apple mais recente',
          },
          {
            'App': '[Noema](/pt/power-local-llm/noema-review)',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (somente Apple)',
            'Preço': 'Gratuito',
            'Flexibilidade de modelos': 'Cinco formatos: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            'Diferença principal': 'Gratuito com biblioteca de modelos intercambiáveis, versus um único modelo fixo pago',
          },
          {
            'App': '[Enclave AI](/pt/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Ver ficha atual',
            'Preço': 'Ver ficha atual',
            'Flexibilidade de modelos': 'Ver análise completa para o suporte de modelos atual',
            'Diferença principal': 'Ver a análise completa do Enclave AI para uma comparação detalhada',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique as especificações atuais na ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o AI on Device',
        items: [
          '**Leitores que já possuem um iPhone ou Mac compatível com Apple Intelligence rodando iOS 26.0 ou macOS 26.0 ou posterior.** Sem esse hardware, o app simplesmente não funciona — verifique a compatibilidade primeiro.',
          '**Leitores dispostos a pagar $4,99 adiantado por um app não comprovado, com poucas avaliações, de um desenvolvedor solo.** Com avaliações insuficientes para uma média de estrelas e uma última atualização de quase um ano, este é território de early adopters, não uma compra baseada em histórico comprovado.',
          '**Leitores que preferem um único modelo simples embutido em vez de uma biblioteca para escolher.** Se o modelo fixo 3B em 2 bits atender à tarefa, o app evita a carga de decisão de escolher um modelo.',
          '**Leitores que preferem um pagamento único fixo a uma assinatura.** Sem cotas de uso ou taxas recorrentes, segundo a ficha da App Store.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o AI on Device',
        items: [
          '**Leitores cujo iPhone ou Mac não suporta Apple Intelligence.** O app não iniciará seu recurso principal em hardware não suportado — verifique a compatibilidade antes de pagar $4,99. A maioria dos iPhones existentes se encaixa nessa categoria.',
          '**Leitores que querem várias opções de modelo.** AI on Device inclui um modelo fixo; [Private LLM](/pt/power-local-llm/private-llm-review) oferece 140+ modelos selecionados e [Noema](/pt/power-local-llm/noema-review) suporta cinco formatos de modelo.',
          '**Leitores que priorizam um histórico estabelecido.** Com avaliações insuficientes para uma média de estrelas e uma última atualização de quase um ano antes desta análise, leitores que valorizam muito a prova social devem começar com [Private LLM](/pt/power-local-llm/private-llm-review) ou [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) em vez disso.',
          '**Leitores que querem uma opção gratuita.** [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) e [Noema](/pt/power-local-llm/noema-review) são ambos gratuitos, com suporte de modelos mais amplo ou flexível.',
          '**Usuários de iPad, Android, Windows ou Linux.** AI on Device é somente para iPhone e Mac, segundo a ficha da App Store.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custa o AI on Device?',
            a: 'AI on Device é uma [compra única de $4,99](' + APP_STORE_URL + '), verificada para esta análise em 2026-09-12, sem assinatura, sem taxas por uso e sem cotas, segundo a ficha da App Store. Os preços da App Store podem mudar ao longo do tempo — confirme o preço atual antes de comprar.',
          },
          {
            q: 'O AI on Device funciona no meu iPhone?',
            a: 'Somente se o seu iPhone for compatível com Apple Intelligence e estiver rodando iOS 26.0 ou posterior. Esta é uma exigência rígida, não uma recomendação — a ficha da App Store afirma que o app só funciona em dispositivos compatíveis com Apple Intelligence. Verifique a lista atual de compatibilidade do Apple Intelligence da Apple antes de comprar.',
          },
          {
            q: 'Qual modelo o AI on Device usa?',
            a: 'Um único modelo embutido com 3 bilhões de parâmetros, totalmente quantizado em precisão de 2 bits, segundo a descrição da App Store. Diferentemente de apps com biblioteca de modelos intercambiável, este é o único modelo que o app executa — não há navegador de modelos nem etapa de download para modelos alternativos.',
          },
          {
            q: 'O AI on Device está disponível para Android ou iPad?',
            a: 'Não. A ficha da App Store afirma que o app suporta apenas iPhone e Mac. Não há menção de suporte a iPad, Android, Windows ou Linux.',
          },
          {
            q: 'Quem desenvolve o AI on Device?',
            a: 'AI on Device é desenvolvido por [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), um desenvolvedor independente em vez de uma empresa ou estúdio com nome próprio, segundo a ficha de desenvolvedor da App Store.',
          },
          {
            q: 'O AI on Device funciona totalmente offline?',
            a: 'Sim. O desenvolvedor afirma que o app roda 100% offline sem coleta de dados, segundo a descrição da App Store. Esta análise se baseia na própria afirmação do desenvolvedor, não em uma auditoria independente de tráfego de rede.',
          },
          {
            q: 'Quão confiável é a avaliação do AI on Device na App Store?',
            a: 'No momento desta análise, a ficha da App Store mostra avaliações insuficientes para sequer exibir uma média de estrelas — uma ressalva mais forte do que uma média baixa com muitas avaliações. Trate o app como não comprovado em vez de presumir qualidade a partir da prova social, e reverifique o número atual de avaliações na App Store antes de confiar nele.',
          },
          {
            q: 'Com que frequência o AI on Device é atualizado?',
            a: 'A ficha da App Store mostra a versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano antes da publicação desta análise, apesar de o app ser relativamente jovem. Esse é um ritmo de atualização mais lento do que vários concorrentes ativamente mantidos neste grupo, e vale a pena pesar isso junto com o baixo número de avaliações.',
          },
          {
            q: 'Como o AI on Device se compara ao Private LLM?',
            a: 'AI on Device custa o mesmo preço único de $4,99 que o [Private LLM](/pt/power-local-llm/private-llm-review), mas inclui apenas um modelo fixo 3B em 2 bits, exige um dispositivo compatível com Apple Intelligence, e tem avaliações insuficientes para uma média de estrelas. Private LLM oferece uma biblioteca selecionada de 140+ modelos, não tem exigência de Apple Intelligence, e tem três anos de histórico público de versões. Escolha o Private LLM para uma biblioteca de modelos mais ampla e um histórico mais longo; escolha o AI on Device apenas se quiser especificamente seu modelo embutido e já possuir hardware compatível com Apple Intelligence.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'AI on Device é um app simples e com preço honesto — $4,99 uma vez, sem assinatura, sem cotas — que executa um modelo fixo de 3 bilhões de parâmetros quantizado em 2 bits totalmente offline. Essa simplicidade também é sua maior limitação: não há biblioteca de modelos para escolher, e o app é bloqueado por uma exigência rígida de hardware Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) que exclui de imediato a maioria dos iPhones existentes. As ressalvas honestas não param por aí: no momento desta análise, a App Store mostra avaliações insuficientes para uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — quase um ano antes desta análise, apesar de o app ser jovem. Essa combinação — um desenvolvedor independente solo, nenhum histórico visível, e um histórico de atualizações desatualizado — significa que esta não é uma compra a ser feita com base em reputação. Leitores que já possuem hardware compatível com Apple Intelligence e se sentem confortáveis sendo early adopters de um app não comprovado podem razoavelmente experimentá-lo por $4,99. Todos os demais, e especialmente leitores que queiram uma biblioteca de modelos mais ampla ou um histórico mais longo, devem começar com [Private LLM](/pt/power-local-llm/private-llm-review), [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou [Noema](/pt/power-local-llm/noema-review) em vez disso.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[AI on Device na App Store](' + APP_STORE_URL + ') — preço, compatibilidade de plataforma, exigência do Apple Intelligence, especificação do modelo, avaliação, versão e data de atualização.',
          '[Eduardo Dominguez Menendez na App Store](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — ficha da conta de desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — uma alternativa paga com biblioteca selecionada, sem exigência de Apple Intelligence e com um histórico de versões mais longo.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita, de código aberto e amplamente compatível.',
          '[Análise do Noema](/pt/power-local-llm/noema-review) — uma alternativa gratuita de cinco formatos com biblioteca de modelos intercambiáveis.',
          '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review) — outro app de IA no dispositivo para comparação.',
          '[O diretório completo de software LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas LLM locais em todas as plataformas.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-ja.webp',
    title: 'AI on Deviceレビュー(2026):Apple Intelligence専用の4.99ドルアプリ',
    seoTitle: 'AI on Deviceレビュー2026:Apple Intelligence対応オフラインAI',
    intro:
      'AI on Deviceは、独立系開発者Eduardo Dominguez Menendez氏によるiPhone・Mac向けアプリで、4.99ドルの一括払いで購入でき、[Apple App Store](' +
      APP_STORE_URL +
      ')にApp Store ID 6753206463として掲載されています。30億パラメータの言語モデルを2ビット精度に完全量子化して実行し、完全にオフラインで動作し、データが端末外に出ることはありません。このアプリには、既存のほとんどのiPhoneを除外する厳格な要件があります。Apple Intelligence対応デバイスでのみ動作し、iOS 26.0またはmacOS 26.0以降が必要です。執筆時点でのバージョンは1.00.01で、最終更新は2025年10月13日 — 若いアプリにもかかわらず、本レビューのほぼ1年前でした — そしてApp Storeでは星評価の平均を表示するには評価件数が少なすぎました。本レビューはこの2つの事実を注釈ではなく重要な留保事項として扱います。ほとんど更新されず、実績のない単独の独立系開発者によるアプリは、評判ではなく検証可能な事実によって読者の信頼を得る必要があります。',
    metaDescription:
      'AI on Deviceレビュー:iPhone/Mac向け4.99ドル(一括払い)アプリ、オフラインで動作する3B・2ビットモデルを搭載。Apple Intelligence対応デバイス(iOS/macOS 26+)が必須。評価件数と更新履歴を正直に検証。',
    twitterDescription:
      'AI on Deviceレビュー:iPhone/Mac向けの4.99ドル(一括払い)アプリで、2ビット量子化された3Bモデルを完全にオフラインで実行 — ただしApple Intelligence対応ハードウェアが必須で、星評価の平均を出すには評価件数が少なすぎます。',
    audience:
      'Apple Intelligence対応のiPhone・Macを所有し、Private LLM、PocketPal AI、Noemaなどのより確立された・無料の代替アプリと比較して、単独開発者による有料オフラインAIアプリを検討しているユーザー — ハードウェア要件、価格、固定モデル、低評価件数の留保事項を扱う。',
    readTime: '9分',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone(Apple Intelligence対応)', 'Mac(Apple Intelligence対応、macOS 26+)'],
    leadAnswerBlock:
      '**AI on Deviceは、独立系開発者Eduardo Dominguez Menendez氏による、4.99ドルの一括払いで購入できるアプリで、30億パラメータの言語モデルを2ビット精度に量子化し、iPhoneとMac上で完全にオフラインで実行します。** Apple Intelligence対応デバイスでのみ動作し、iOS 26.0またはmacOS 26.0以降が必要です — この要件により、現在使用されているほとんどのiPhoneが除外されます。執筆時点で、アプリはバージョン1.00.01、最終更新は2025年10月13日で、[App Store](' +
      APP_STORE_URL +
      ')では星評価の平均を出すには評価件数が少なすぎました。より長い公開実績や無料オプションを求める読者は、[Private LLM](/ja/power-local-llm/private-llm-review)、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、[Noema](/ja/power-local-llm/noema-review)とも比較すべきです。',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'AI on Deviceとは', anchor: 'what-is-ai-on-device' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: 'Apple Intelligence要件', anchor: 'apple-intelligence-requirement' },
      { label: 'モデル:3B、2ビット量子化', anchor: 'the-model' },
      { label: '価格', anchor: 'pricing' },
      { label: 'プライバシー', anchor: 'privacy' },
      { label: 'トレードオフ:利点と制限', anchor: 'tradeoffs' },
      { label: 'AI on Device vs. 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'AI on Deviceを使うべき人', anchor: 'who-should-use' },
      { label: 'AI on Deviceを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Deviceは、独立系開発者Eduardo Dominguez Menendez氏による4.99ドル(一括払い)のiPhone/Macアプリで、固定の30億パラメータ・2ビット量子化モデルを完全にオフラインで実行しますが、Apple Intelligence対応デバイス(iOS 26.0/macOS 26.0以降)でのみ動作します。',
          },
          {
            type: 'plain-terms',
            text: 'このアプリは一つのことだけを行います。月額サブスクリプションではなく4.99ドルの一括払いで、インターネット接続なしにiPhoneまたはMac上で組み込みのAIモデルを実行します。落とし穴は、Apple自身の「Apple Intelligence」機能に既に対応した比較的新しい端末が必要なことです — Apple Intelligenceに対応していない古いiPhoneでは、ストレージやRAMがどれだけあってもこのアプリはまったく動作しません。',
          },
        ],
        items: [
          '価格:[App Storeで4.99ドルの一括払い](' + APP_STORE_URL + ');サブスクリプション、従量課金、利用枠なし。',
          'ハードウェア要件:Apple Intelligence対応デバイスでのみ動作 — iOS 26.0またはmacOS 26.0以降。',
          'プラットフォーム:iPhoneとMacのみ — iPad、Android、Windows、Linuxなし。',
          'モデル:固定の30億パラメータモデルを1つ、2ビット精度に量子化 — 交換可能なモデルライブラリではない。',
          'プライバシー:100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          '開発者:[Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661)氏、企業ではなく独立系開発者。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 若いアプリにもかかわらず、執筆時点でほぼ1年経過。',
          '評価:本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'AI on Deviceとは',
        content: [
          '**AI on Deviceは、単一の組み込み言語モデルをiPhoneまたはMac上で直接実行するネイティブApple製アプリで、サーバー側コンポーネントは不要であり、推論にインターネット接続は必要ありません。** [Apple App Store](' +
          APP_STORE_URL +
          ')にApp Store ID 6753206463として掲載されており、開発者は[Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661)氏 — 企業や名の知れたスタジオではなく独立系開発者です。',
          'アプリ自身の説明によると、「30億パラメータ、完全に2ビット精度に量子化された」モデルを実行し、100%オフライン動作とアプリによるデータ非収集を主張しています。また、ユーザーフレンドリーなプロンプトテンプレートと、汎用のクロスプラットフォームラッパーではなくApple向けハードウェアに特化して構築された統合を宣伝しています。',
          '本レビューは、開発者自身によるApp Storeでの主張 — 2ビット量子化の数値、データ非収集の主張、Apple Intelligence要件 — を、説明を鵜呑みにするのではなく、公開されているApp Storeの掲載情報自体が開示している内容と照らし合わせて評価しています。PromptQuorumは、このモデルの出力品質を他のオンデバイスモデルと比較して独自にベンチマークしていません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**4.99ドルを支払う前に、最も重要なステップは、お使いの端末が実際にApple Intelligenceに対応しているかを確認することです — さもなければアプリは動作しません。**',
        ],
        numberedItems: [
          {
            title: 'まずApple Intelligence対応を確認する',
            whyItMatters: 'お使いのiPhoneまたはMacをAppleの公式Apple Intelligence対応端末リストと照らし合わせ、iOS 26.0またはmacOS 26.0以降を実行できることを確認してください。購入前にこれを行ってください — 非対応端末での4.99ドルの購入は、中核機能を起動できないアプリへの出費になります。',
          },
          {
            title: 'iOS 26.0/macOS 26.0以降にアップデートする',
            whyItMatters: '対応端末であってもOSアップデートのインストールが必要です。現行のApp Store掲載情報によると、アプリの最低要件はiPhoneがiOS 26.0、Macがmacos 26.0です。',
          },
          {
            title: 'アプリを購入してダウンロードする',
            whyItMatters: '[Apple App StoreからAI on Deviceを入手](' + APP_STORE_URL + ')し、4.99ドルの一括払いで購入します。無料トライアル期間は掲載されていないため、ステップ1の互換性確認が使えない購入を避ける唯一の実質的な方法です。',
          },
          {
            title: '組み込みのプロンプトテンプレートを使う',
            whyItMatters: 'アプリには、プロンプトをゼロから書きたくないユーザー向けに、単なる空のチャット欄ではなくテンプレートベースのプロンプト作成機能が付属しています。',
          },
          {
            title: '完全にオフラインでチャットする',
            whyItMatters: 'インストール後、組み込みの30億パラメータ・2ビット量子化モデルはインターネット接続なしで動作します。別途モデルをダウンロードするステップや閲覧できるモデルライブラリはなく、同梱された1つのモデルが実行されるだけです。',
          },
        ],
        note: 'Apple IntelligenceのApp Store対応端末リストが更新されるにつれ、正確な端末互換性は変わります — 購入前に、お使いの具体的なiPhoneまたはMacのモデルをAppleの最新リストと照らし合わせて確認してください。',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'Apple Intelligence要件',
        content: [
          '**AI on DeviceはApple Intelligence対応デバイスでのみ動作し、iOS 26.0またはmacOS 26.0以降が必要です — これは、このアプリがそもそも利用可能かどうかを判断する読者にとって最も重要な単一の事実です。** App Storeの掲載情報は、これを推奨事項ではなく大文字で厳格な要件として述べています。非対応ハードウェアでアプリが機能低下モードやCPUのみのモードで動作するわけではなく、単純に動作しません。',
          'この要件は、Apple Intelligence対応が特定範囲の新しいiPhone・Macモデルに限定されているため、現在も日常的に使用されているかなりの割合のiPhoneを除外します。ユーザーが提供する任意のGGUFファイルを実行する[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)のように、十分なRAMを持つ任意のiOS端末で軽量モデルを実行するアプリとは異なり、AI on Deviceの単一の組み込みモデルは、読者自身が確認できる特定のRAMやストレージの下限ではなく、Apple Intelligenceのプラットフォーム要件に結びついています。',
          '実際的な意味合い:非対応ハードウェアでアプリが起動しない場合、4.99ドルの購入代金は回収不能なため、読者は支払い前に自分の具体的な端末を現行のApple Intelligence対応リストと照らし合わせて確認すべきです。',
        ],
      },
      theModel: {
        id: 'the-model',
        title: 'モデル:3B、2ビット量子化',
        itemHeadings: true,
        content: [
          '**AI on Deviceは、交換可能なモデルライブラリを提供するのではなく、固定のモデル — 30億パラメータ、2ビット精度に量子化 — を1つ同梱しています。** これは、通常複数のGGUF、MLX、または厳選されたモデルをダウンロードして切り替えられる、このクラスターでレビューされたほとんどの競合アプリとは大きく異なる設計です。',
        ],
        columns: ['属性', 'App Storeの掲載情報', '重要な理由'],
        rows: [
          {
            '属性': 'パラメータ数',
            'App Storeの掲載情報': '30億パラメータ',
            '重要な理由': 'モバイルハードウェアの制約に特化してサイズ調整された、多くのデスクトップ級ローカルLLMより小型のモデル。',
          },
          {
            '属性': '量子化',
            'App Storeの掲載情報': '2ビット精度に完全量子化',
            '重要な理由': '2ビットは積極的な圧縮レベルです — ほとんどのモバイルローカルAIアプリが使用する、より一般的な4ビット(Q4)量子化よりも低く、メモリフットプリントの縮小と引き換えに出力品質をある程度犠牲にします。',
          },
          {
            '属性': 'モデル選択',
            'App Storeの掲載情報': '固定・同梱の単一モデル。掲載情報にはモデルブラウザや交換可能なモデルライブラリの記載はない',
            '重要な理由': '異なるタスクのために複数のモデルサイズやファミリーを試したい読者は、ここではその柔軟性を見つけられません — 代わりに[Private LLM](/ja/power-local-llm/private-llm-review)(140以上の厳選モデル)や[Noema](/ja/power-local-llm/noema-review)(5つの読み込み可能な形式)を参照してください。',
          },
        ],
        note: 'PromptQuorumは、このモデルの出力品質を他のオンデバイス2ビットまたは4ビットモデルと比較して独自にベンチマークしていません。本セクションは開発者自身が述べた仕様を反映したものであり、独立した精度テストではありません。',
      },
      pricing: {
        id: 'pricing',
        title: '価格',
        content: [
          '**AI on Deviceは、現行のApp Store掲載情報によると、サブスクリプションや従量課金なしの一括払いで4.99ドルです。**',
          'App Storeの掲載情報では、これを明示的に「従量課金なし、利用枠なし」と表現しています — 従量制やサブスクリプションモデルではなく、定額の一回払いです。これは、プレミアムモデルや機能のために無料枠と有料サブスクリプションを組み合わせるアプリと比較して、シンプルな価格体系です。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー',
        content: [
          '**開発者は、AI on Deviceがアプリからいかなるデータも収集せず、すべての推論が端末上で100%オフラインで実行されると述べています。**',
        ],
        items: [
          '**データ収集なし(開発者自身の主張による)。** App Storeの説明では、開発者がアプリからいかなるデータも収集しないと述べています。',
          '**100%オフライン推論。** アプリの中核機能である、組み込みの30億パラメータモデルの実行は、インストール後にインターネット接続を必要としません。',
          '**独立監査はなし。** 本レビューは、独立したソースコード監査やネットワークトラフィック分析ではなく、開発者自身のApp Storeでの主張に依拠しています。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制限',
        columns: ['利点', '実際の使用における意味', '制限・留保事項'],
        rows: [
          {
            '利点': '4.99ドルの一括払い',
            '実際の使用における意味': '管理・解約すべきサブスクリプションなし、従量課金なし、利用枠なし。',
            '制限・留保事項': '読者の端末がApple Intelligence要件を満たさない場合、4.99ドルは回収不能。',
          },
          {
            '利点': '完全オフライン推論',
            '実際の使用における意味': 'アプリインストール後、組み込みモデルはインターネット接続なしで動作。',
            '制限・留保事項': '本レビューは、独立監査ではなく開発者自身のデータ非収集の主張に依拠している。',
          },
          {
            '利点': '小型で効率的な2ビットモデル',
            '実際の使用における意味': '30億パラメータ・2ビット量子化モデルは、より大きい、または圧縮率の低いモデルよりメモリフットプリントが小さい。',
            '制限・留保事項': '積極的な2ビット量子化は、ほとんどの競合モバイルアプリが使用する4ビット量子化より出力品質を犠牲にする傾向がある。PromptQuorumはこのアプリ固有のこのトレードオフを独自にベンチマークしていない。',
          },
          {
            '利点': 'シンプルなテンプレート駆動のプロンプト作成',
            '実際の使用における意味': '組み込みテンプレートが、プロンプトをゼロから書きたくない読者を助ける。',
            '制限・留保事項': 'モデルライブラリや形式の柔軟性なし — [Private LLM](/ja/power-local-llm/private-llm-review)や[Noema](/ja/power-local-llm/noema-review)とは異なり固定モデルのみ。',
          },
          {
            '利点': 'なし',
            '実際の使用における意味': 'なし',
            '制限・留保事項': '厳格なApple Intelligence要件(iOS 26.0/macOS 26.0+)により、既存のほとんどのiPhoneがアプリをまったく実行できない。',
          },
          {
            '利点': 'なし',
            '実際の使用における意味': 'なし',
            '制限・留保事項': '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されず、最終更新は2025年10月13日 — 若いアプリにもかかわらず本レビューのほぼ1年前。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device vs. 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'AI on Device',
            'プラットフォーム': 'iPhone/Mac、Apple Intelligence対応のみ',
            '価格': '4.99ドル(一括払い)',
            'モデルの柔軟性': '固定モデル1つ:3B、2ビット量子化',
            '主な違い': '厳格なApple Intelligenceハードウェア要件。星評価平均を出すにはまだ評価件数が少なすぎる',
          },
          {
            'アプリ': '[Private LLM](/ja/power-local-llm/private-llm-review)',
            'プラットフォーム': 'iPhone/iPad/Mac(Appleのみ)',
            '価格': '4.99ドル(一括払い)',
            'モデルの柔軟性': '140以上の厳選モデル。OmniQuant/GPTQ量子化',
            '主な違い': 'Apple Intelligence要件なし。3年間の公開リリース実績',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iPhone/iPad、一部Android対応',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': 'Hugging Faceなどからユーザーが入手する任意のGGUFファイル',
            '主な違い': '無料で広く互換性あり。最新Appleハードウェアに縛られた有料アプリとの対比',
          },
          {
            'アプリ': '[Noema](/ja/power-local-llm/noema-review)',
            'プラットフォーム': 'iPhone/iPad/Mac/Vision Pro(Appleのみ)',
            '価格': '無料',
            'モデルの柔軟性': '5形式:GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models',
            '主な違い': '交換可能なモデルライブラリを備え無料。固定の有料モデル1つとの対比',
          },
          {
            'アプリ': '[Enclave AI](/ja/power-local-llm/enclave-ai-review)',
            'プラットフォーム': '現行の掲載情報を参照',
            '価格': '現行の掲載情報を参照',
            'モデルの柔軟性': '現行のモデル対応状況は完全なレビューを参照',
            '主な違い': '詳細な比較はEnclave AIの完全なレビューを参照',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変わります — 決定前に各アプリ自体の掲載情報で現在の仕様を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AI on Deviceを使うべき人',
        items: [
          '**すでにiOS 26.0またはmacOS 26.0以降を実行するApple Intelligence対応のiPhoneまたはMacを所有している読者。** このハードウェアがなければアプリはまったく動作しません — まず互換性を確認してください。',
          '**単独開発者による未実証・低評価件数のアプリに4.99ドルを前払いすることに抵抗がない読者。** 星評価平均を出すには評価件数が少なすぎ、最終更新がほぼ1年前であることから、これは実績に基づく購入ではなく、アーリーアダプター向けの領域です。',
          '**選択肢のあるライブラリよりも単一のシンプルな組み込みモデルを好む読者。** 固定の3B・2ビットモデルがタスクに合えば、モデル選択という意思決定の負担を回避できます。',
          '**サブスクリプションよりも定額の一括払いを好む読者。** App Storeの掲載情報によると、利用枠や継続課金はありません。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AI on Deviceを使うべきでない人',
        items: [
          '**iPhoneまたはMacがApple Intelligenceに対応していない読者。** 非対応ハードウェアではアプリの中核機能が起動しません — 4.99ドルを支払う前に互換性を確認してください。既存のほとんどのiPhoneがこのカテゴリーに該当します。',
          '**複数のモデル選択肢を求める読者。** AI on Deviceは固定モデルを1つ同梱。[Private LLM](/ja/power-local-llm/private-llm-review)は140以上の厳選モデルを、[Noema](/ja/power-local-llm/noema-review)は5つのモデル形式に対応しています。',
          '**確立された実績を優先する読者。** 星評価平均を出すには評価件数が少なすぎ、最終更新が本レビューのほぼ1年前であることから、社会的証明を重視する読者は代わりに[Private LLM](/ja/power-local-llm/private-llm-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)から始めるべきです。',
          '**無料オプションを求める読者。** [PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と[Noema](/ja/power-local-llm/noema-review)はどちらも無料で、より広範または柔軟なモデル対応があります。',
          '**iPad、Android、Windows、Linuxユーザー。** App Storeの掲載情報によると、AI on DeviceはiPhoneとMac専用です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AI on Deviceの価格はいくらですか?',
            a: 'AI on Deviceは、App Storeの掲載情報によると、[4.99ドルの一括払い](' + APP_STORE_URL + ')で、本レビューのために2026-09-12に確認、サブスクリプションなし、従量課金なし、利用枠なしです。App Storeの価格は時間とともに変わる可能性があります — 購入前に現在の価格を確認してください。',
          },
          {
            q: 'AI on Deviceは私のiPhoneで動作しますか?',
            a: 'お使いのiPhoneがApple Intelligenceに対応し、iOS 26.0以降を実行している場合に限ります。これは推奨事項ではなく厳格な要件です — App Storeの掲載情報は、アプリがApple Intelligence対応デバイスでのみ動作すると述べています。購入前にAppleの現行Apple Intelligence対応端末リストを確認してください。',
          },
          {
            q: 'AI on Deviceはどのモデルを使用しますか?',
            a: 'App Storeの説明によると、30億パラメータで完全に2ビット精度に量子化された単一の組み込みモデルです。交換可能なモデルライブラリを持つアプリとは異なり、これがアプリが実行する唯一のモデルです — 代替モデルのためのモデルブラウザやダウンロードステップはありません。',
          },
          {
            q: 'AI on DeviceはAndroidやiPadで利用できますか?',
            a: 'いいえ。App Storeの掲載情報では、アプリがiPhoneとMacのみをサポートすると述べています。iPad、Android、Windows、Linuxの対応は記載されていません。',
          },
          {
            q: 'AI on Deviceの開発者は誰ですか?',
            a: 'AI on Deviceは、App Storeの開発者掲載情報によると、企業や名の知れたスタジオではなく独立系開発者である[Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661)氏によって開発されています。',
          },
          {
            q: 'AI on Deviceは完全にオフラインで動作しますか?',
            a: 'はい。App Storeの説明によると、開発者はアプリが100%オフラインで動作し、データを収集しないと述べています。本レビューは、独立したネットワークトラフィック監査ではなく、開発者自身の主張に依拠しています。',
          },
          {
            q: 'AI on DeviceのApp Store評価はどれほど信頼できますか?',
            a: '本レビュー時点で、App Storeの掲載情報は星評価平均をそもそも表示するには評価件数が少なすぎることを示しています — これは多くのレビューを伴う低い星評価平均よりも強い留保事項です。社会的証明から品質を推測するのではなく、アプリを未実証として扱い、依拠する前にApp Storeの現在の評価件数を再確認してください。',
          },
          {
            q: 'AI on Deviceはどのくらいの頻度で更新されますか?',
            a: 'App Storeの掲載情報はバージョン1.00.01を示しており、最終更新は2025年10月13日 — アプリが比較的若いにもかかわらず、本レビューの公開のほぼ1年前です。これは、このクラスターの積極的にメンテナンスされている複数の競合よりも遅い更新ペースであり、低評価件数と併せて検討する価値があります。',
          },
          {
            q: 'AI on DeviceはPrivate LLMとどう比較されますか?',
            a: 'AI on Deviceは[Private LLM](/ja/power-local-llm/private-llm-review)と同じ4.99ドルの一括価格ですが、固定の3B・2ビットモデルを1つのみ同梱し、Apple Intelligence対応デバイスが必須で、星評価平均を出すには評価件数が少なすぎます。Private LLMは140以上の厳選モデルライブラリを提供し、Apple Intelligence要件がなく、3年間の公開リリース実績があります。より幅広いモデルライブラリと長い実績を求めるならPrivate LLMを、特にその組み込みモデルを求め、すでにApple Intelligence対応ハードウェアを所有している場合のみAI on Deviceを選んでください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'AI on Deviceは、シンプルで正直な価格設定のアプリです — 一度きり4.99ドル、サブスクリプションなし、利用枠なし — 固定の30億パラメータ・2ビット量子化モデルを完全にオフラインで実行します。このシンプルさは同時に最大の制限でもあります。選べるモデルライブラリはなく、アプリは既存のほとんどのiPhoneを最初から除外する厳格なApple Intelligenceハードウェア要件(iOS 26.0/macOS 26.0以降)の背後にロックされています。正直な留保事項はそれだけにとどまりません。本レビュー時点で、App Storeは星評価平均を出すには評価件数が少なすぎることを示しており、最終更新は2025年10月13日 — 若いアプリにもかかわらず、本レビューのほぼ1年前でした。この組み合わせ — 単独の独立系開発者、目に見える実績なし、古びた更新履歴 — は、これが評判に基づいて行う購入ではないことを意味します。すでにApple Intelligence対応ハードウェアを所有し、未実証のアプリのアーリーアダプターであることに抵抗がない読者は、4.99ドルで妥当に試すことができます。それ以外のすべての人、特により幅広いモデルライブラリや長い実績を求める読者は、代わりに[Private LLM](/ja/power-local-llm/private-llm-review)、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、[Noema](/ja/power-local-llm/noema-review)から始めるべきです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのAI on Device](' + APP_STORE_URL + ') — 価格、プラットフォーム互換性、Apple Intelligence要件、モデル仕様、評価、バージョン、更新日。',
          '[App StoreのEduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — 開発者アカウントの掲載情報。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — Apple Intelligence要件がなく、より長いリリース実績を持つ有料の厳選ライブラリ代替アプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料でオープンソース、広く互換性のある代替アプリ。',
          '[Noemaレビュー](/ja/power-local-llm/noema-review) — 交換可能なモデルライブラリを備えた無料の5形式対応代替アプリ。',
          '[Enclave AIレビュー](/ja/power-local-llm/enclave-ai-review) — 比較のためのもう一つのオンデバイスAIアプリ。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — 全プラットフォームにわたるローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-zh.webp',
    title: 'AI on Device 评测(2026):一款仅限 Apple Intelligence 的 4.99 美元应用',
    seoTitle: 'AI on Device 评测 2026:Apple Intelligence 离线 AI',
    intro:
      'AI on Device 是独立开发者 Eduardo Dominguez Menendez 推出的一款 iPhone 和 Mac 应用,一次性支付 4.99 美元即可购买,在 [Apple App Store](' +
      APP_STORE_URL +
      ') 上以 App Store ID 6753206463 上架。它运行一个 30 亿参数的语言模型,量化为 2 位精度,完全离线运行,没有任何数据离开设备。这款应用有一个严格的硬性要求,排除了大多数现有的 iPhone:它仅在支持 Apple Intelligence 的设备上运行,需要 iOS 26.0 或 macOS 26.0 及以上版本。截至撰写本文时,版本为 1.00.01,最后一次更新是在 2025 年 10 月 13 日 — 距本评测发布近一年,尽管这是一款年轻的应用 — 而 App Store 显示评价数量太少,无法计算出星级平均分。本评测将这两个事实视为重要的保留意见,而非脚注:一款几乎未更新、来自单一独立开发者、没有可见记录的应用,需要凭借可验证的事实赢得读者信任,而不是靠声誉。',
    metaDescription:
      'AI on Device 评测:iPhone/Mac 上一次性支付 4.99 美元的应用,离线运行 3B、2 位模型。需要支持 Apple Intelligence 的设备(iOS/macOS 26+)。对评价数量和更新历史的诚实审视。',
    twitterDescription:
      'AI on Device 评测:一款 4.99 美元(一次性购买)的 iPhone/Mac 应用,完全离线运行 2 位量化的 3B 模型 — 但仅限支持 Apple Intelligence 的硬件,且评价数量太少无法显示平均分。',
    audience:
      '拥有支持 Apple Intelligence 的 iPhone 和 Mac 的用户,正在将这款独立开发者的付费离线 AI 应用与 Private LLM、PocketPal AI 和 Noema 等更成熟或免费的替代方案进行比较 — 涵盖硬件要求、定价、固定模型以及评价数量过少的保留意见。',
    readTime: '9 分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone(支持 Apple Intelligence)', 'Mac(支持 Apple Intelligence,macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device 是独立开发者 Eduardo Dominguez Menendez 推出的应用,一次性支付 4.99 美元,在 iPhone 和 Mac 上完全离线运行一个 30 亿参数、量化为 2 位精度的语言模型。** 它仅在支持 Apple Intelligence 的设备上运行,需要 iOS 26.0 或 macOS 26.0 及以上版本 — 这一要求排除了当前使用中的大多数 iPhone。截至撰写本文时,该应用版本为 1.00.01,最后一次更新是在 2025 年 10 月 13 日,[App Store](' +
      APP_STORE_URL +
      ') 显示评价数量太少,无法给出星级平均分。希望获得更长公开记录或免费选项的读者,也应比较 [Private LLM](/zh/power-local-llm/private-llm-review)、[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Noema](/zh/power-local-llm/noema-review)。',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'AI on Device 是什么', anchor: 'what-is-ai-on-device' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: 'Apple Intelligence 要求', anchor: 'apple-intelligence-requirement' },
      { label: '模型:3B,2 位量化', anchor: 'the-model' },
      { label: '定价', anchor: 'pricing' },
      { label: '隐私', anchor: 'privacy' },
      { label: '权衡:优点与局限', anchor: 'tradeoffs' },
      { label: 'AI on Device 与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁应该使用 AI on Device', anchor: 'who-should-use' },
      { label: '谁不应该使用 AI on Device', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device 是独立开发者 Eduardo Dominguez Menendez 推出的一款 4.99 美元(一次性购买)的 iPhone/Mac 应用,完全离线运行一个固定的 30 亿参数、2 位量化模型,但仅限于支持 Apple Intelligence 的设备(iOS 26.0 / macOS 26.0 或更高版本)。',
          },
          {
            type: 'plain-terms',
            text: '这款应用只做一件事:它在你的 iPhone 或 Mac 上运行一个内置 AI 模型,无需互联网连接,只需一次性支付 4.99 美元,而不是每月订阅。问题在于,它需要一台已经支持 Apple 自家 "Apple Intelligence" 功能的较新设备 — 不支持 Apple Intelligence 的旧款 iPhone 根本无法运行这款应用,无论它有多少存储空间或内存。',
          },
        ],
        items: [
          '价格:在 Apple App Store 上[一次性支付 4.99 美元](' + APP_STORE_URL + ');无订阅、无按使用付费、无配额。',
          '硬件要求:仅在支持 Apple Intelligence 的设备上运行 — iOS 26.0 或 macOS 26.0 或更高版本。',
          '平台:仅限 iPhone 和 Mac — 没有 iPad、Android、Windows 或 Linux 版本。',
          '模型:一个固定的 30 亿参数模型,量化为 2 位精度 — 不是可切换的模型库。',
          '隐私:100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '开发者:[Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661),一位独立开发者,而非公司。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 尽管是一款年轻的应用,但撰写本文时已近一年。',
          '评分:截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'AI on Device 是什么',
        content: [
          '**AI on Device 是一款原生 Apple 应用,直接在 iPhone 或 Mac 上运行单一的内置语言模型,无需服务器端组件,推理也无需互联网连接。** 它在 [Apple App Store](' +
          APP_STORE_URL +
          ') 上以 App Store ID 6753206463 上架,由 [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) 开发 — 一位独立开发者,而非知名公司或工作室。',
          '应用自身的描述指出,它运行一个"30 亿参数、完全量化为 2 位精度"的模型,并声称 100% 离线运行,应用不收集任何数据。它还宣传了用户友好的提示词模板,以及专为 Apple 硬件构建的集成,而不是通用的跨平台封装。',
          '本评测评估了开发者自己在 App Store 上的主张 — 2 位量化的数字、不收集数据的声明、Apple Intelligence 要求 — 并将其与 App Store 公开列表本身披露的内容进行对照,而不是照单全收该描述。PromptQuorum 尚未独立对该模型的输出质量与其他设备端模型进行基准测试。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**在支付 4.99 美元之前,最重要的一步是确认你的设备确实支持 Apple Intelligence — 否则应用将无法运行。**',
        ],
        numberedItems: [
          {
            title: '首先确认 Apple Intelligence 兼容性',
            whyItMatters: '对照 Apple 官方的 Apple Intelligence 设备兼容性列表检查你的 iPhone 或 Mac,并确认它能运行 iOS 26.0 或 macOS 26.0 或更高版本。请在购买前完成此步骤 — 在不受支持的设备上花费 4.99 美元,等于为一款无法启动其核心功能的应用买单。',
          },
          {
            title: '更新到 iOS 26.0 / macOS 26.0 或更高版本',
            whyItMatters: '即使是兼容的设备,也需要安装系统更新。根据当前的 App Store 列表,应用的最低要求是 iPhone 上的 iOS 26.0 或 Mac 上的 macOS 26.0。',
          },
          {
            title: '购买并下载应用',
            whyItMatters: '从 [Apple App Store 获取 AI on Device](' + APP_STORE_URL + '),一次性支付 4.99 美元。列表中没有免费试用期,因此第 1 步的兼容性检查是避免无法使用的购买的唯一实际方法。',
          },
          {
            title: '使用内置的提示词模板',
            whyItMatters: '应用内置了基于模板的提示词创建功能,面向不想从零开始编写提示词的用户,而不仅仅是一个空白聊天框。',
          },
          {
            title: '完全离线聊天',
            whyItMatters: '安装后,内置的 30 亿参数、2 位量化模型无需互联网连接即可运行。没有单独的模型下载步骤,也没有可浏览的模型库 — 唯一捆绑的模型就是运行的那个。',
          },
        ],
        note: 'Apple Intelligence 的具体设备兼容性会随着 Apple 更新其支持设备列表而变化 — 购买前请对照 Apple 当前的列表检查你的具体 iPhone 或 Mac 型号。',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'Apple Intelligence 要求',
        content: [
          '**AI on Device 仅在支持 Apple Intelligence 的设备上运行,需要 iOS 26.0 或 macOS 26.0 或更高版本 — 这是读者判断该应用是否可用的最重要的单一事实。** App Store 列表以大写字母将其表述为一项硬性要求,而非建议:该应用不会在不受支持的硬件上以降级模式或仅 CPU 模式运行,它根本无法运行。',
          '由于 Apple Intelligence 兼容性仅限于特定范围的较新 iPhone 和 Mac 型号,这一要求排除了目前仍在日常使用中的相当一部分 iPhone。与在任何内存足够的 iOS 设备上运行轻量级模型的应用不同(例如 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review),它可以运行用户提供的任何 GGUF 文件),AI on Device 唯一的内置模型被绑定在 Apple Intelligence 平台要求上,而不是绑定在读者可以自行检查的特定内存或存储门槛上。',
          '实际影响:读者在付款前应对照 Apple 当前的 Apple Intelligence 兼容性列表检查自己的具体设备,因为如果应用在不受支持的硬件上无法启动,4.99 美元的购买费用是无法追回的。',
        ],
      },
      theModel: {
        id: 'the-model',
        title: '模型:3B,2 位量化',
        itemHeadings: true,
        content: [
          '**AI on Device 捆绑了一个固定模型 — 30 亿参数,量化为 2 位精度 — 而不是提供可切换的模型库。** 这与本分组中评测的大多数竞品明显不同,后者通常允许下载并在多个 GGUF、MLX 或精选模型之间切换。',
        ],
        columns: ['属性', 'App Store 列表所述', '重要原因'],
        rows: [
          {
            '属性': '参数量',
            'App Store 列表所述': '30 亿参数',
            '重要原因': '比许多桌面级本地 LLM 更小的模型,专门针对移动硬件限制而设计。',
          },
          {
            '属性': '量化',
            'App Store 列表所述': '完全量化为 2 位精度',
            '重要原因': '2 位是一种激进的压缩级别 — 低于大多数移动本地 AI 应用使用的更常见的 4 位(Q4)量化 — 这以更小的内存占用为代价换取了一定的输出质量。',
          },
          {
            '属性': '模型选择',
            'App Store 列表所述': '一个固定的内置模型;列表未描述模型浏览器或可切换的模型库',
            '重要原因': '想要为不同任务尝试多种模型大小或系列的读者在这里找不到这种灵活性 — 请改为参考 [Private LLM](/zh/power-local-llm/private-llm-review)(140+ 精选模型)或 [Noema](/zh/power-local-llm/noema-review)(五种可加载格式)。',
          },
        ],
        note: 'PromptQuorum 尚未独立对该模型的输出质量与其他设备端 2 位或 4 位模型进行基准测试;本节反映的是开发者自身声明的规格,而非独立的准确性测试。',
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**根据当前的 App Store 列表,AI on Device 一次性支付 4.99 美元,无订阅,也无按使用付费。**',
          'App Store 列表明确将其表述为"无按使用付费,无使用配额" — 一个固定的一次性价格,而不是计量或订阅模式。与那些将免费层级与高级模型或功能的付费订阅结合在一起的应用相比,这是一种直截了当的定价结构。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私',
        content: [
          '**开发者声明 AI on Device 不会从应用中收集任何数据,所有推理均在设备上 100% 离线运行。**',
        ],
        items: [
          '**不收集数据,据开发者自己的声明。** App Store 描述指出,开发者不会从应用中收集任何数据。',
          '**100% 离线推理。** 应用的核心功能 — 运行内置的 30 亿参数模型 — 安装后无需互联网连接。',
          '**没有独立审计。** 本评测依据开发者自己在 App Store 上的声明,而非独立的源代码审计或网络流量分析。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中意味着什么', '局限 / 保留意见'],
        rows: [
          {
            '优点': '一次性支付 4.99 美元',
            '实际使用中意味着什么': '无需管理或取消订阅,无按使用计费,无配额。',
            '局限 / 保留意见': '如果读者的设备不满足 Apple Intelligence 要求,这 4.99 美元将无法追回。',
          },
          {
            '优点': '完全离线推理',
            '实际使用中意味着什么': '应用安装后,内置模型无需互联网连接即可运行。',
            '局限 / 保留意见': '本评测依据开发者自己不收集数据的声明,而非独立审计。',
          },
          {
            '优点': '小巧高效的 2 位模型',
            '实际使用中意味着什么': '一个 30 亿参数、2 位量化的模型比更大或压缩程度更低的模型占用更小的内存。',
            '局限 / 保留意见': '激进的 2 位量化通常比大多数竞品移动应用使用的 4 位量化更牺牲输出质量;PromptQuorum 尚未针对这款特定应用独立评测这一权衡。',
          },
          {
            '优点': '简单的模板驱动提示词创建',
            '实际使用中意味着什么': '内置模板帮助不想从零开始编写提示词的读者。',
            '局限 / 保留意见': '没有模型库或格式灵活性 — 与 [Private LLM](/zh/power-local-llm/private-llm-review) 或 [Noema](/zh/power-local-llm/noema-review) 不同,只有一个固定模型。',
          },
          {
            '优点': '无',
            '实际使用中意味着什么': '无',
            '局限 / 保留意见': '严格的 Apple Intelligence 硬件要求(iOS 26.0 / macOS 26.0+)使大多数现有 iPhone 完全无法使用该应用。',
          },
          {
            '优点': '无',
            '实际使用中意味着什么': '无',
            '局限 / 保留意见': '截至本评测,App Store 评价数量太少,无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 尽管是一款年轻的应用,但距本评测已近一年。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device 与替代方案对比',
        columns: ['应用', '平台', '价格', '模型灵活性', '主要区别'],
        rows: [
          {
            '应用': 'AI on Device',
            '平台': 'iPhone/Mac,仅支持 Apple Intelligence',
            '价格': '4.99 美元一次性购买',
            '模型灵活性': '一个固定模型:3B,2 位量化',
            '主要区别': '严格的 Apple Intelligence 硬件要求;评价数量目前仍太少无法给出星级平均分',
          },
          {
            '应用': '[Private LLM](/zh/power-local-llm/private-llm-review)',
            '平台': 'iPhone/iPad/Mac(仅限 Apple)',
            '价格': '4.99 美元一次性购买',
            '模型灵活性': '140+ 精选模型;OmniQuant/GPTQ 量化',
            '主要区别': '无 Apple Intelligence 要求;三年的公开发布记录',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone/iPad,部分支持 Android',
            '价格': '免费,开源',
            '模型灵活性': '用户从 Hugging Face 或其他来源获取的任何 GGUF 文件',
            '主要区别': '免费且兼容性广泛,与绑定最新 Apple 硬件的付费应用形成对比',
          },
          {
            '应用': '[Noema](/zh/power-local-llm/noema-review)',
            '平台': 'iPhone/iPad/Mac/Vision Pro(仅限 Apple)',
            '价格': '免费',
            '模型灵活性': '五种格式:GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Models',
            '主要区别': '免费且拥有可切换的模型库,与单一固定付费模型形成对比',
          },
          {
            '应用': '[Enclave AI](/zh/power-local-llm/enclave-ai-review)',
            '平台': '参见当前列表',
            '价格': '参见当前列表',
            '模型灵活性': '当前模型支持情况参见完整评测',
            '主要区别': '详细比较请参见 Enclave AI 完整评测',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化 — 决定前请在各应用自己的列表上核实当前的具体信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁应该使用 AI on Device',
        items: [
          '**已经拥有支持 Apple Intelligence、运行 iOS 26.0 或 macOS 26.0 或更高版本的 iPhone 或 Mac 的读者。** 没有这种硬件,该应用完全无法运行 — 请先核实兼容性。',
          '**愿意为来自单人开发者、未经验证、评价很少的应用预先支付 4.99 美元的读者。** 评价数量太少无法给出星级平均分,且最后一次更新已近一年,这属于早期采用者的领域,而非基于成熟记录的购买。',
          '**更喜欢单一简单的内置模型而非可供选择的模型库的读者。** 如果固定的 3B、2 位模型适合任务需求,该应用可以避免选择模型带来的决策负担。',
          '**更喜欢固定一次性付款而非订阅的读者。** 根据 App Store 列表,没有使用配额或经常性费用。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不应该使用 AI on Device',
        items: [
          '**iPhone 或 Mac 不支持 Apple Intelligence 的读者。** 该应用在不受支持的硬件上无法启动其核心功能 — 支付 4.99 美元之前请检查兼容性。大多数现有 iPhone 都属于这一类别。',
          '**想要多种模型选择的读者。** AI on Device 只捆绑一个固定模型;[Private LLM](/zh/power-local-llm/private-llm-review) 提供 140+ 精选模型,[Noema](/zh/power-local-llm/noema-review) 支持五种模型格式。',
          '**看重成熟记录的读者。** 由于评价数量太少无法给出星级平均分,且最后一次更新距本评测已近一年,非常看重社会证明的读者应改为从 [Private LLM](/zh/power-local-llm/private-llm-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 开始。',
          '**想要免费选项的读者。** [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 和 [Noema](/zh/power-local-llm/noema-review) 都是免费的,且模型支持更广泛或更灵活。',
          '**iPad、Android、Windows 或 Linux 用户。** 根据 App Store 列表,AI on Device 仅限 iPhone 和 Mac。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AI on Device 多少钱?',
            a: '根据 App Store 列表,AI on Device 是[一次性支付 4.99 美元](' + APP_STORE_URL + '),本评测于 2026-09-12 核实,无订阅、无按使用付费、无配额。App Store 定价可能随时间变化 — 购买前请确认当前价格。',
          },
          {
            q: 'AI on Device 能在我的 iPhone 上运行吗?',
            a: '只有当你的 iPhone 支持 Apple Intelligence 并运行 iOS 26.0 或更高版本时才可以。这是一项硬性要求,而非建议 — App Store 列表指出该应用仅在支持 Apple Intelligence 的设备上运行。购买前请查看 Apple 当前的 Apple Intelligence 设备列表。',
          },
          {
            q: 'AI on Device 使用什么模型?',
            a: '根据 App Store 描述,是一个单一的内置模型,拥有 30 亿参数,完全量化为 2 位精度。与拥有可切换模型库的应用不同,这是该应用运行的唯一模型 — 没有模型浏览器,也没有下载替代模型的步骤。',
          },
          {
            q: 'AI on Device 支持 Android 或 iPad 吗?',
            a: '不支持。App Store 列表指出该应用仅支持 iPhone 和 Mac。未列出对 iPad、Android、Windows 或 Linux 的支持。',
          },
          {
            q: '谁开发了 AI on Device?',
            a: '根据 App Store 开发者列表,AI on Device 由 [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) 开发,他是一位独立开发者,而非知名公司或工作室。',
          },
          {
            q: 'AI on Device 是否完全离线运行?',
            a: '是的。根据 App Store 描述,开发者声明该应用 100% 离线运行,不收集数据。本评测依据开发者自己的声明,而非独立的网络流量审计。',
          },
          {
            q: 'AI on Device 的 App Store 评分可靠吗?',
            a: '截至本评测,App Store 列表显示评价数量太少,甚至无法显示星级平均分 — 这比评价众多但平均分较低更值得保留。请将该应用视为尚未验证,而不是从社会证明中推断质量,并在依赖之前在 App Store 上重新核实当前的评价数量。',
          },
          {
            q: 'AI on Device 多久更新一次?',
            a: 'App Store 列表显示版本为 1.00.01,最后一次更新是在 2025 年 10 月 13 日 — 尽管该应用相对年轻,但距本评测发布已近一年。这比本分组中多个积极维护的竞品更新频率更慢,应结合较低的评价数量一并权衡。',
          },
          {
            q: 'AI on Device 与 Private LLM 相比如何?',
            a: 'AI on Device 与 [Private LLM](/zh/power-local-llm/private-llm-review) 的一次性价格相同,均为 4.99 美元,但只捆绑一个固定的 3B、2 位模型,需要支持 Apple Intelligence 的设备,且评价数量太少无法给出星级平均分。Private LLM 提供 140+ 精选模型库,没有 Apple Intelligence 要求,并拥有三年的公开发布记录。若想要更广泛的模型库和更长的记录,请选择 Private LLM;只有在特别想要其内置模型且已经拥有兼容 Apple Intelligence 的硬件时,才选择 AI on Device。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'AI on Device 是一款简单、定价诚实的应用 — 一次性支付 4.99 美元,无订阅,无配额 — 完全离线运行一个固定的 30 亿参数、2 位量化模型。这种简单性同时也是它最大的局限:没有可供选择的模型库,而且该应用被锁定在严格的 Apple Intelligence 硬件要求(iOS 26.0 / macOS 26.0 或更高版本)之后,这一要求直接排除了大多数现有 iPhone。诚实的保留意见不止于此:截至本评测,App Store 显示评价数量太少,无法给出星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 尽管是一款年轻的应用,但距本评测已近一年。这种组合 — 单一的独立开发者、没有可见的记录、陈旧的更新历史 — 意味着这不是一笔应该基于声誉做出的购买。已经拥有兼容 Apple Intelligence 硬件、并且愿意作为一款未经验证应用的早期采用者的读者,可以合理地花 4.99 美元尝试一下。其他所有人,尤其是想要更广泛模型库或更长记录的读者,应改为从 [Private LLM](/zh/power-local-llm/private-llm-review)、[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Noema](/zh/power-local-llm/noema-review) 开始。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 AI on Device](' + APP_STORE_URL + ') — 价格、平台兼容性、Apple Intelligence 要求、模型规格、评分、版本和更新日期。',
          '[App Store 上的 Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — 开发者账户列表。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Private LLM 评测](/zh/power-local-llm/private-llm-review) — 一款付费、精选库替代方案,无 Apple Intelligence 要求,且发布记录更长。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款免费、开源、广泛兼容的替代方案。',
          '[Noema 评测](/zh/power-local-llm/noema-review) — 一款免费的五格式替代方案,拥有可切换的模型库。',
          '[Enclave AI 评测](/zh/power-local-llm/enclave-ai-review) — 另一款可供比较的设备端 AI 应用。',
          '[完整的本地 LLM 软件目录](/zh/power-local-llm/local-llm-software-directory) — 涵盖所有平台的本地 LLM 工具更广泛目录。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-ar.webp',
    title: 'مراجعة AI on Device (2026): تطبيق بـ4.99 دولار مخصص لـApple Intelligence فقط',
    seoTitle: 'مراجعة AI on Device 2026: ذكاء اصطناعي دون اتصال مع Apple Intelligence',
    intro:
      'AI on Device هو تطبيق لأجهزة iPhone وMac من المطوّر المستقل Eduardo Dominguez Menendez، متاح بشراء لمرة واحدة بقيمة 4.99 دولار، ومدرج في [متجر تطبيقات Apple](' +
      APP_STORE_URL +
      ') برقم معرف 6753206463. يشغّل نموذج لغة بـ3 مليارات معامل، مكمّم بدقة 2 بت، ويعمل دون اتصال بالإنترنت بالكامل، دون أن تغادر أي بيانات الجهاز. يفرض التطبيق شرطًا صارمًا يستبعد معظم أجهزة iPhone الحالية: فهو يعمل فقط على الأجهزة المتوافقة مع Apple Intelligence، ويتطلب iOS 26.0 أو macOS 26.0 أو أحدث. وقت كتابة هذه المراجعة، كان الإصدار 1.00.01، وآخر تحديث كان في 13 أكتوبر 2025 — أي قبل عام تقريبًا من هذه المراجعة، رغم أن التطبيق حديث نسبيًا — وأظهر متجر التطبيقات عدد تقييمات قليل جدًا لحساب متوسط تقييم بالنجوم. تتعامل هذه المراجعة مع هاتين الحقيقتين كتحفظات جوهرية، لا كملاحظات هامشية: فتطبيق نادرًا ما يُحدَّث، من مطوّر مستقل واحد، وبلا سجل مرئي، يحتاج إلى كسب ثقة القارئ عبر حقائق يمكن التحقق منها، لا عبر السمعة.',
    metaDescription:
      'مراجعة AI on Device: تطبيق بـ4.99 دولار (شراء لمرة واحدة) لأجهزة iPhone/Mac يشغّل نموذج 3B بدقة 2 بت دون اتصال. يتطلب جهازًا متوافقًا مع Apple Intelligence (iOS/macOS 26+). نظرة صادقة على عدد التقييمات وسجل التحديثات.',
    twitterDescription:
      'مراجعة AI on Device: تطبيق بـ4.99 دولار (شراء لمرة واحدة) لأجهزة iPhone/Mac يشغّل نموذج 3B مكمّم بدقة 2 بت دون اتصال بالكامل — لكن فقط على أجهزة متوافقة مع Apple Intelligence، وبعدد تقييمات قليل جدًا لعرض متوسط.',
    audience:
      'مالكو أجهزة iPhone وMac المتوافقة مع Apple Intelligence الذين يقيّمون تطبيق ذكاء اصطناعي مدفوع دون اتصال من مطوّر مستقل مقابل بدائل أكثر رسوخًا أو مجانية مثل Private LLM وPocketPal AI وNoema — يغطي شرط الأجهزة، والتسعير، والنموذج الثابت، وتحفظ عدد التقييمات المنخفض.',
    readTime: '9 دقائق قراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone (متوافق مع Apple Intelligence)', 'Mac (متوافق مع Apple Intelligence، macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device هو تطبيق من المطوّر المستقل Eduardo Dominguez Menendez، متاح بشراء لمرة واحدة بقيمة 4.99 دولار، يشغّل نموذج لغة بـ3 مليارات معامل، مكمّم بدقة 2 بت، دون اتصال بالإنترنت بالكامل على iPhone وMac.** يعمل فقط على الأجهزة المتوافقة مع Apple Intelligence، ويتطلب iOS 26.0 أو macOS 26.0 أو أحدث — وهو شرط يستبعد معظم أجهزة iPhone المستخدمة حاليًا. وقت كتابة هذه المراجعة، كان التطبيق في الإصدار 1.00.01، وآخر تحديث كان في 13 أكتوبر 2025، وأظهر [متجر التطبيقات](' +
      APP_STORE_URL +
      ') عدد تقييمات قليل جدًا لمتوسط تقييم بالنجوم. القراء الذين يريدون سجلًا عامًا أطول أو خيارًا مجانيًا يجب أن يقارنوا أيضًا مع [Private LLM](/ar/power-local-llm/private-llm-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Noema](/ar/power-local-llm/noema-review).',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو AI on Device', anchor: 'what-is-ai-on-device' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'شرط Apple Intelligence', anchor: 'apple-intelligence-requirement' },
      { label: 'النموذج: 3B، مكمّم بدقة 2 بت', anchor: 'the-model' },
      { label: 'التسعير', anchor: 'pricing' },
      { label: 'الخصوصية', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'AI on Device مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم AI on Device', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم AI on Device', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device هو تطبيق iPhone/Mac بسعر 4.99 دولار (شراء لمرة واحدة) من المطوّر المستقل Eduardo Dominguez Menendez يشغّل نموذجًا ثابتًا بـ3 مليارات معامل مكمّمًا بدقة 2 بت دون اتصال بالكامل، لكن فقط على الأجهزة المتوافقة مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث).',
          },
          {
            type: 'plain-terms',
            text: 'يقوم هذا التطبيق بشيء واحد فقط: يشغّل نموذج ذكاء اصطناعي مدمجًا على جهاز iPhone أو Mac دون الحاجة إلى اتصال بالإنترنت، مقابل دفعة واحدة قدرها 4.99 دولار بدلًا من اشتراك شهري. المشكلة هي أنه يحتاج إلى جهاز أحدث يدعم بالفعل ميزات "Apple Intelligence" الخاصة بشركة Apple — فجهاز iPhone أقدم لا يدعم Apple Intelligence لا يمكنه تشغيل هذا التطبيق على الإطلاق، بغض النظر عن مقدار التخزين أو الذاكرة العشوائية المتوفرة لديه.',
          },
        ],
        items: [
          'السعر: [شراء لمرة واحدة بقيمة 4.99 دولار](' + APP_STORE_URL + ') على متجر تطبيقات Apple؛ بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'شرط الأجهزة: يعمل فقط على الأجهزة المتوافقة مع Apple Intelligence — iOS 26.0 أو macOS 26.0 أو أحدث.',
          'المنصات: iPhone وMac فقط — بلا iPad، بلا Android، بلا Windows، بلا Linux.',
          'النموذج: نموذج ثابت واحد بـ3 مليارات معامل، مكمّم بدقة 2 بت — وليس مكتبة نماذج قابلة للتبديل.',
          'الخصوصية: استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'المطوّر: [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661)، مطوّر مستقل وليس شركة.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة، رغم أن التطبيق حديث.',
          'التقييم: تقييمات قليلة جدًا على متجر التطبيقات وقت هذه المراجعة لعرض متوسط تقييم بالنجوم.',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'ما هو AI on Device',
        content: [
          '**AI on Device هو تطبيق Apple أصلي يشغّل نموذج لغة مدمجًا واحدًا مباشرة على جهاز iPhone أو Mac، دون مكوّن خادم ودون الحاجة إلى اتصال بالإنترنت للاستدلال.** وهو مدرج على [متجر تطبيقات Apple](' +
          APP_STORE_URL +
          ') برقم معرف 6753206463، ومن تطوير [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — مطوّر مستقل، وليس شركة أو استوديو معروف الاسم.',
          'يذكر وصف التطبيق نفسه أنه يشغّل نموذجًا "بـ3 مليارات معامل، مكمّمًا بالكامل بدقة 2 بت"، ويدّعي تشغيلًا بنسبة 100% دون اتصال ودون جمع أي بيانات من التطبيق. كما يروّج لقوالب صياغة أوامر سهلة الاستخدام وتكامل مصمم خصيصًا لأجهزة Apple، بدلًا من غلاف عام متعدد المنصات.',
          'تُقيّم هذه المراجعة ادعاءات المطوّر نفسه على متجر التطبيقات — رقم التكميم بـ2 بت، وتصريح عدم جمع البيانات، وشرط Apple Intelligence — في مقابل ما تكشفه قائمة متجر التطبيقات العامة نفسها، بدلًا من قبول الوصف كما هو. لم تُجرِ PromptQuorum اختبارًا مستقلًا لجودة مخرجات هذا النموذج مقارنة بنماذج أخرى تعمل على الجهاز.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**قبل دفع 4.99 دولار، أهم خطوة هي التأكد من أن جهازك يدعم فعليًا Apple Intelligence — وإلا فلن يعمل التطبيق.**',
        ],
        numberedItems: [
          {
            title: 'تحقق أولًا من التوافق مع Apple Intelligence',
            whyItMatters: 'تحقق من جهاز iPhone أو Mac لديك مقابل قائمة توافق Apple Intelligence الرسمية من Apple، وتأكد من أنه يمكنه تشغيل iOS 26.0 أو macOS 26.0 أو أحدث. افعل ذلك قبل الشراء — فشراء بقيمة 4.99 دولار على جهاز غير مدعوم هو مال يُنفق على تطبيق لا يمكنه تشغيل ميزته الأساسية.',
          },
          {
            title: 'حدّث إلى iOS 26.0 / macOS 26.0 أو أحدث',
            whyItMatters: 'حتى الجهاز المتوافق يحتاج إلى تثبيت تحديث النظام. الحد الأدنى لمتطلبات التطبيق هو iOS 26.0 لجهاز iPhone أو macOS 26.0 لجهاز Mac، وفقًا لقائمة متجر التطبيقات الحالية.',
          },
          {
            title: 'اشترِ التطبيق وحمّله',
            whyItMatters: 'احصل على [AI on Device من متجر تطبيقات Apple](' + APP_STORE_URL + ') مقابل دفعة واحدة قدرها 4.99 دولار. لا توجد فترة تجريبية مجانية مدرجة، لذا فإن التحقق من التوافق في الخطوة 1 هو الطريقة الحقيقية الوحيدة لتجنب شراء غير قابل للاستخدام.',
          },
          {
            title: 'استخدم قوالب صياغة الأوامر المدمجة',
            whyItMatters: 'يأتي التطبيق مزودًا بإنشاء أوامر قائم على القوالب موجّه للمستخدمين الذين لا يريدون كتابة الأوامر من الصفر، بدلًا من مربع محادثة فارغ فقط.',
          },
          {
            title: 'تحدّث دون اتصال بالكامل',
            whyItMatters: 'بعد التثبيت، يعمل النموذج المدمج بـ3 مليارات معامل المكمّم بدقة 2 بت دون اتصال بالإنترنت. لا توجد خطوة منفصلة لتنزيل نموذج ولا مكتبة نماذج لتصفحها — النموذج الوحيد المرفق هو الذي يعمل.',
          },
        ],
        note: 'يتغير التوافق الدقيق للأجهزة مع Apple Intelligence مع تحديث Apple لقائمة الأجهزة المدعومة — تحقق من طراز iPhone أو Mac المحدد لديك مقابل قائمة Apple الحالية قبل الشراء.',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'شرط Apple Intelligence',
        content: [
          '**يعمل AI on Device فقط على الأجهزة المتوافقة مع Apple Intelligence، ويتطلب iOS 26.0 أو macOS 26.0 أو أحدث — وهذه هي أهم حقيقة منفردة لقارئ يقرر ما إذا كان التطبيق قابلًا للاستخدام أصلًا.** تنص قائمة متجر التطبيقات على ذلك بأحرف كبيرة كشرط صارم، وليس توصية: لا يعمل التطبيق في وضع مخفض أو وضع معالج فقط على الأجهزة غير المدعومة، بل ببساطة لا يعمل.',
          'يستبعد هذا الشرط جزءًا كبيرًا من أجهزة iPhone التي لا تزال قيد الاستخدام اليومي النشط، لأن التوافق مع Apple Intelligence يقتصر على نطاق محدد من طرازات iPhone وMac الأحدث. وعلى عكس التطبيقات التي تشغّل نموذجًا خفيفًا على أي جهاز iOS بذاكرة عشوائية كافية (مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، الذي يشغّل أي ملف GGUF يوفره المستخدم)، فإن النموذج المدمج الوحيد في AI on Device مرتبط بشرط منصة Apple Intelligence بدلًا من حد أدنى محدد للذاكرة أو التخزين يمكن للقارئ التحقق منه بنفسه.',
          'التبعات العملية: يجب على القارئ التحقق من جهازه المحدد مقابل قائمة توافق Apple Intelligence الحالية قبل الدفع، لأن سعر الشراء البالغ 4.99 دولار غير قابل للاسترداد إذا تعذّر تشغيل التطبيق على أجهزة غير مدعومة.',
        ],
      },
      theModel: {
        id: 'the-model',
        title: 'النموذج: 3B، مكمّم بدقة 2 بت',
        itemHeadings: true,
        content: [
          '**يضم AI on Device نموذجًا ثابتًا واحدًا — 3 مليارات معامل، مكمّم بدقة 2 بت — بدلًا من تقديم مكتبة نماذج قابلة للتبديل.** هذا تصميم مختلف بشكل ملحوظ عن معظم المنافسين الذين تمت مراجعتهم في هذه المجموعة، والذين يسمحون عادةً بتنزيل والتبديل بين عدة نماذج GGUF أو MLX أو مختارة.',
        ],
        columns: ['السمة', 'ما تذكره قائمة متجر التطبيقات', 'لماذا هذا مهم'],
        rows: [
          {
            'السمة': 'عدد المعاملات',
            'ما تذكره قائمة متجر التطبيقات': '3 مليارات معامل',
            'لماذا هذا مهم': 'نموذج أصغر من العديد من نماذج اللغة المحلية بمستوى سطح المكتب، مصمم خصيصًا ليتناسب مع قيود أجهزة الهاتف المحمول.',
          },
          {
            'السمة': 'التكميم',
            'ما تذكره قائمة متجر التطبيقات': 'مكمّم بالكامل بدقة 2 بت',
            'لماذا هذا مهم': 'دقة 2 بت هي مستوى ضغط قوي — أقل من تكميم 4 بت (Q4) الأكثر شيوعًا الذي تستخدمه معظم تطبيقات الذكاء الاصطناعي المحلية على الهاتف — مما يقايض بعض جودة المخرجات مقابل بصمة ذاكرة أصغر.',
          },
          {
            'السمة': 'اختيار النموذج',
            'ما تذكره قائمة متجر التطبيقات': 'نموذج واحد ثابت ومدمج؛ لا تصف القائمة متصفح نماذج أو مكتبة قابلة للتبديل',
            'لماذا هذا مهم': 'القارئ الذي يريد تجربة أحجام أو عائلات نماذج متعددة لمهام مختلفة لن يجد هذه المرونة هنا — انظر بدلًا من ذلك [Private LLM](/ar/power-local-llm/private-llm-review) (140+ نموذجًا مختارًا) أو [Noema](/ar/power-local-llm/noema-review) (خمس صيغ قابلة للتحميل).',
          },
        ],
        note: 'لم تُجرِ PromptQuorum اختبارًا مستقلًا لجودة مخرجات هذا النموذج مقارنة بنماذج أخرى تعمل على الجهاز بدقة 2 بت أو 4 بت؛ يعكس هذا القسم المواصفات التي ذكرها المطوّر نفسه، وليس اختبار دقة مستقلًا.',
      },
      pricing: {
        id: 'pricing',
        title: 'التسعير',
        content: [
          '**يكلّف AI on Device 4.99 دولار كشراء لمرة واحدة، دون اشتراك ودون رسوم استخدام، وفقًا لقائمة متجر التطبيقات الحالية.**',
          'تصوغ قائمة متجر التطبيقات هذا صراحةً بأنه "بلا رسوم حسب الاستخدام، بلا حصص استخدام" — سعر ثابت لمرة واحدة بدلًا من نموذج قياس أو اشتراك. هذا هيكل تسعير مباشر مقارنة بالتطبيقات التي تجمع بين مستوى مجاني واشتراك مدفوع للنماذج أو الميزات المتميزة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية',
        content: [
          '**يذكر المطوّر أن AI on Device لا يجمع أي بيانات من التطبيق، وأن جميع الاستدلالات تعمل بنسبة 100% دون اتصال، على الجهاز.**',
        ],
        items: [
          '**لا جمع بيانات، وفقًا لتصريح المطوّر نفسه.** يذكر وصف متجر التطبيقات أن المطوّر لا يجمع أي بيانات من التطبيق.',
          '**استدلال 100% دون اتصال.** الميزة الأساسية للتطبيق — تشغيل النموذج المدمج بـ3 مليارات معامل — لا تتطلب اتصالًا بالإنترنت بعد التثبيت.',
          '**لا تدقيق مستقل.** تعتمد هذه المراجعة على ادعاءات المطوّر نفسه على متجر التطبيقات، وليس على تدقيق مستقل للشيفرة المصدرية أو تحليل حركة الشبكة.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'دفعة واحدة بقيمة 4.99 دولار',
            'ماذا تعني في الاستخدام الفعلي': 'بلا اشتراك يجب إدارته أو إلغاؤه، بلا فوترة حسب الاستخدام، بلا حصص.',
            'القيد / التحفظ': 'مبلغ 4.99 دولار غير قابل للاسترداد إذا لم يستوفِ جهاز القارئ شرط Apple Intelligence.',
          },
          {
            'الميزة': 'استدلال دون اتصال بالكامل',
            'ماذا تعني في الاستخدام الفعلي': 'يعمل النموذج المدمج دون اتصال بالإنترنت بعد تثبيت التطبيق.',
            'القيد / التحفظ': 'تعتمد هذه المراجعة على تصريح المطوّر نفسه بعدم جمع البيانات، وليس على تدقيق مستقل.',
          },
          {
            'الميزة': 'نموذج صغير وفعّال بدقة 2 بت',
            'ماذا تعني في الاستخدام الفعلي': 'نموذج بـ3 مليارات معامل مكمّم بدقة 2 بت له بصمة ذاكرة أصغر من نماذج أكبر أو أقل ضغطًا.',
            'القيد / التحفظ': 'عادةً ما يكلّف التكميم القوي بدقة 2 بت جودة مخرجات أكثر من تكميم 4 بت الذي تستخدمه معظم التطبيقات المنافسة على الهاتف؛ لم تختبر PromptQuorum هذه المفاضلة بشكل مستقل لهذا التطبيق تحديدًا.',
          },
          {
            'الميزة': 'إنشاء أوامر بسيط قائم على القوالب',
            'ماذا تعني في الاستخدام الفعلي': 'تساعد القوالب المدمجة القارئ الذي لا يريد كتابة الأوامر من الصفر.',
            'القيد / التحفظ': 'لا مكتبة نماذج ولا مرونة في الصيغ — نموذج ثابت واحد فقط، على عكس [Private LLM](/ar/power-local-llm/private-llm-review) أو [Noema](/ar/power-local-llm/noema-review).',
          },
          {
            'الميزة': 'لا يوجد',
            'ماذا تعني في الاستخدام الفعلي': 'لا يوجد',
            'القيد / التحفظ': 'شرط Apple Intelligence الصارم (iOS 26.0 / macOS 26.0+) يستبعد معظم أجهزة iPhone الحالية من استخدام التطبيق على الإطلاق.',
          },
          {
            'الميزة': 'لا يوجد',
            'ماذا تعني في الاستخدام الفعلي': 'لا يوجد',
            'القيد / التحفظ': 'تقييمات قليلة جدًا على متجر التطبيقات وقت هذه المراجعة لعرض متوسط تقييم بالنجوم، وآخر تحديث كان في 13 أكتوبر 2025 — قرابة عام واحد قبل هذه المراجعة، رغم أن التطبيق حديث.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'مرونة النموذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'AI on Device',
            'المنصات': 'iPhone/Mac، متوافق مع Apple Intelligence فقط',
            'السعر': '4.99 دولار لمرة واحدة',
            'مرونة النموذج': 'نموذج ثابت واحد: 3B، مكمّم بدقة 2 بت',
            'الفرق الرئيسي': 'شرط أجهزة Apple Intelligence صارم؛ ما زالت التقييمات قليلة جدًا لمتوسط تقييم بالنجوم',
          },
          {
            'التطبيق': '[Private LLM](/ar/power-local-llm/private-llm-review)',
            'المنصات': 'iPhone/iPad/Mac (Apple فقط)',
            'السعر': '4.99 دولار لمرة واحدة',
            'مرونة النموذج': '140+ نموذجًا مختارًا؛ تكميم OmniQuant/GPTQ',
            'الفرق الرئيسي': 'لا شرط Apple Intelligence؛ ثلاث سنوات من السجل العام للإصدارات',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iPhone/iPad، مع بعض دعم Android',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النموذج': 'أي ملف GGUF يحصل عليه المستخدم من Hugging Face أو مكان آخر',
            'الفرق الرئيسي': 'مجاني ومتوافق على نطاق واسع، مقابل تطبيق مدفوع مرتبط بأحدث أجهزة Apple',
          },
          {
            'التطبيق': '[Noema](/ar/power-local-llm/noema-review)',
            'المنصات': 'iPhone/iPad/Mac/Vision Pro (Apple فقط)',
            'السعر': 'مجاني',
            'مرونة النموذج': 'خمس صيغ: GGUF وMLX وExecuTorch وCore ML ونماذج Apple Foundation',
            'الفرق الرئيسي': 'مجاني مع مكتبة نماذج قابلة للتبديل، مقابل نموذج ثابت واحد مدفوع',
          },
          {
            'التطبيق': '[Enclave AI](/ar/power-local-llm/enclave-ai-review)',
            'المنصات': 'انظر القائمة الحالية',
            'السعر': 'انظر القائمة الحالية',
            'مرونة النموذج': 'انظر المراجعة الكاملة لدعم النماذج الحالي',
            'الفرق الرئيسي': 'انظر مراجعة Enclave AI الكاملة لمقارنة تفصيلية',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات لتطبيقات الجهات الخارجية بشكل متكرر — تحقق من المواصفات الحالية على قائمة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم AI on Device',
        items: [
          '**القراء الذين يمتلكون بالفعل جهاز iPhone أو Mac متوافقًا مع Apple Intelligence ويعمل بنظام iOS 26.0 أو macOS 26.0 أو أحدث.** دون هذه الأجهزة، لن يعمل التطبيق على الإطلاق — تحقق من التوافق أولًا.',
          '**القراء المستعدون لدفع 4.99 دولار مقدمًا مقابل تطبيق غير مُثبت وقليل التقييمات من مطوّر منفرد.** مع عدد تقييمات قليل جدًا لمتوسط تقييم بالنجوم وآخر تحديث يعود لقرابة عام، هذا مجال المتبنين الأوائل، وليس شراءً قائمًا على سجل مثبت.',
          '**القراء الذين يفضلون نموذجًا واحدًا بسيطًا مدمجًا بدلًا من مكتبة للاختيار منها.** إذا كان النموذج الثابت 3B بدقة 2 بت مناسبًا للمهمة، يتجنب التطبيق عبء اتخاذ القرار في اختيار نموذج.',
          '**القراء الذين يفضلون دفعة واحدة ثابتة على اشتراك.** بلا حصص استخدام أو رسوم متكررة، وفقًا لقائمة متجر التطبيقات.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم AI on Device',
        items: [
          '**القراء الذين لا يدعم جهاز iPhone أو Mac لديهم Apple Intelligence.** لن يشغّل التطبيق ميزته الأساسية على أجهزة غير مدعومة — تحقق من التوافق قبل دفع 4.99 دولار. تندرج معظم أجهزة iPhone الحالية ضمن هذه الفئة.',
          '**القراء الذين يريدون خيارات نماذج متعددة.** يضم AI on Device نموذجًا ثابتًا واحدًا؛ يقدّم [Private LLM](/ar/power-local-llm/private-llm-review) أكثر من 140 نموذجًا مختارًا ويدعم [Noema](/ar/power-local-llm/noema-review) خمس صيغ نماذج.',
          '**القراء الذين يعطون الأولوية لسجل راسخ.** مع عدد تقييمات قليل جدًا لمتوسط تقييم بالنجوم وآخر تحديث قبل قرابة عام من هذه المراجعة، يجب على القراء الذين يقدّرون الدليل الاجتماعي كثيرًا أن يبدأوا بـ[Private LLM](/ar/power-local-llm/private-llm-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) بدلًا من ذلك.',
          '**القراء الذين يريدون خيارًا مجانيًا.** [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[Noema](/ar/power-local-llm/noema-review) كلاهما مجاني بدعم نماذج أوسع أو أكثر مرونة.',
          '**مستخدمو iPad أو Android أو Windows أو Linux.** AI on Device مخصص لأجهزة iPhone وMac فقط، وفقًا لقائمة متجر التطبيقات.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم يكلّف AI on Device؟',
            a: 'AI on Device هو [شراء لمرة واحدة بقيمة 4.99 دولار](' + APP_STORE_URL + ')، تم التحقق منه لهذه المراجعة في 2026-09-12، بلا اشتراك وبلا رسوم استخدام وبلا حصص، وفقًا لقائمة متجر التطبيقات. قد تتغير أسعار متجر التطبيقات بمرور الوقت — تأكد من السعر الحالي قبل الشراء.',
          },
          {
            q: 'هل يعمل AI on Device على جهاز iPhone الخاص بي؟',
            a: 'فقط إذا كان جهاز iPhone لديك متوافقًا مع Apple Intelligence ويعمل بنظام iOS 26.0 أو أحدث. هذا شرط صارم، وليس توصية — تذكر قائمة متجر التطبيقات أن التطبيق يعمل فقط على الأجهزة المتوافقة مع Apple Intelligence. تحقق من قائمة أجهزة Apple Intelligence الحالية من Apple قبل الشراء.',
          },
          {
            q: 'ما النموذج الذي يستخدمه AI on Device؟',
            a: 'نموذج مدمج واحد بـ3 مليارات معامل، مكمّم بالكامل بدقة 2 بت، وفقًا لوصف متجر التطبيقات. على عكس التطبيقات التي تحتوي على مكتبة نماذج قابلة للتبديل، هذا هو النموذج الوحيد الذي يشغّله التطبيق — لا يوجد متصفح نماذج ولا خطوة تنزيل لنماذج بديلة.',
          },
          {
            q: 'هل AI on Device متوفر على Android أو iPad؟',
            a: 'لا. تذكر قائمة متجر التطبيقات أن التطبيق يدعم iPhone وMac فقط. لا تُدرج القائمة دعمًا لـiPad أو Android أو Windows أو Linux.',
          },
          {
            q: 'من يطوّر AI on Device؟',
            a: 'يطوّر AI on Device [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661)، وهو مطوّر مستقل وليس شركة أو استوديو معروف الاسم، وفقًا لقائمة المطوّر في متجر التطبيقات.',
          },
          {
            q: 'هل يعمل AI on Device دون اتصال بالكامل؟',
            a: 'نعم. يذكر المطوّر أن التطبيق يعمل بنسبة 100% دون اتصال دون جمع بيانات، وفقًا لوصف متجر التطبيقات. تعتمد هذه المراجعة على تصريح المطوّر نفسه، وليس على تدقيق مستقل لحركة الشبكة.',
          },
          {
            q: 'ما مدى موثوقية تقييم AI on Device على متجر التطبيقات؟',
            a: 'حتى وقت هذه المراجعة، تُظهر قائمة متجر التطبيقات عددًا قليلًا جدًا من التقييمات بحيث لا يمكن حتى عرض متوسط تقييم بالنجوم — وهذا تحفظ أقوى من متوسط منخفض مع عدد كبير من المراجعات. تعامل مع التطبيق باعتباره غير مُثبت بدلًا من افتراض الجودة من الدليل الاجتماعي، وأعد التحقق من عدد التقييمات الحالي على متجر التطبيقات قبل الاعتماد عليه.',
          },
          {
            q: 'كم مرة يُحدَّث AI on Device؟',
            a: 'تُظهر قائمة متجر التطبيقات الإصدار 1.00.01، مع آخر تحديث في 13 أكتوبر 2025 — قرابة عام قبل نشر هذه المراجعة، رغم أن التطبيق حديث نسبيًا. هذه وتيرة تحديث أبطأ من عدة منافسين يتم صيانتهم بنشاط في هذه المجموعة، وتستحق الأخذ في الاعتبار جنبًا إلى جنب مع عدد التقييمات المنخفض.',
          },
          {
            q: 'كيف يقارن AI on Device بـPrivate LLM؟',
            a: 'يكلّف AI on Device نفس السعر لمرة واحدة البالغ 4.99 دولار مثل [Private LLM](/ar/power-local-llm/private-llm-review)، لكنه يضم نموذجًا ثابتًا واحدًا فقط 3B بدقة 2 بت، ويتطلب جهازًا متوافقًا مع Apple Intelligence، ولديه عدد تقييمات قليل جدًا لمتوسط تقييم بالنجوم. يقدّم Private LLM مكتبة مختارة من أكثر من 140 نموذجًا، ولا يشترط Apple Intelligence، ولديه سجل عام للإصدارات يمتد لثلاث سنوات. اختر Private LLM لمكتبة نماذج أوسع وسجل أطول؛ اختر AI on Device فقط إذا كنت تريد تحديدًا نموذجه المدمج وتمتلك بالفعل أجهزة متوافقة مع Apple Intelligence.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'AI on Device تطبيق بسيط وصادق في التسعير — 4.99 دولار مرة واحدة، بلا اشتراك، بلا حصص — يشغّل نموذجًا ثابتًا بـ3 مليارات معامل مكمّمًا بدقة 2 بت دون اتصال بالكامل. هذه البساطة هي أيضًا أكبر قيد له: لا توجد مكتبة نماذج للاختيار منها، والتطبيق محصور خلف شرط أجهزة Apple Intelligence الصارم (iOS 26.0 / macOS 26.0 أو أحدث) الذي يستبعد معظم أجهزة iPhone الحالية تمامًا. لا تتوقف التحفظات الصادقة عند هذا الحد: حتى وقت هذه المراجعة، يُظهر متجر التطبيقات عددًا قليلًا جدًا من التقييمات لمتوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — قرابة عام قبل هذه المراجعة، رغم أن التطبيق حديث. هذا المزيج — مطوّر مستقل منفرد، ولا سجل مرئي، وسجل تحديثات قديم — يعني أن هذا ليس شراءً يجب اتخاذه بناءً على السمعة. القراء الذين يمتلكون بالفعل أجهزة متوافقة مع Apple Intelligence ولا مانع لديهم من كونهم متبنين أوائل لتطبيق غير مُثبت يمكنهم تجربته بشكل معقول مقابل 4.99 دولار. أما البقية، وخاصة القراء الذين يريدون مكتبة نماذج أوسع أو سجلًا أطول، فيجب أن يبدأوا بدلًا من ذلك بـ[Private LLM](/ar/power-local-llm/private-llm-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Noema](/ar/power-local-llm/noema-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[AI on Device على متجر التطبيقات](' + APP_STORE_URL + ') — السعر، توافق المنصات، شرط Apple Intelligence، مواصفات النموذج، التقييم، الإصدار، وتاريخ التحديث.',
          '[Eduardo Dominguez Menendez على متجر التطبيقات](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — قائمة حساب المطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — بديل مدفوع بمكتبة مختارة، بلا شرط Apple Intelligence وبسجل إصدارات أطول.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر ومتوافق على نطاق واسع.',
          '[مراجعة Noema](/ar/power-local-llm/noema-review) — بديل مجاني بخمس صيغ ومكتبة نماذج قابلة للتبديل.',
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — تطبيق ذكاء اصطناعي آخر يعمل على الجهاز للمقارنة.',
          '[الدليل الكامل لبرامج نماذج اللغة المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات نماذج اللغة المحلية عبر جميع المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ai-on-device-review-hero-ko.webp',
    title: 'AI on Device 리뷰 (2026): Apple Intelligence 전용 4.99달러 앱',
    seoTitle: 'AI on Device 리뷰 2026: Apple Intelligence 오프라인 AI',
    intro:
      'AI on Device는 독립 개발자 Eduardo Dominguez Menendez가 만든 iPhone 및 Mac용 앱으로, 4.99달러 일회성 구매로 이용할 수 있으며 [Apple App Store](' +
      APP_STORE_URL +
      ')에 App Store ID 6753206463으로 등록되어 있습니다. 30억 매개변수 언어 모델을 2비트 정밀도로 양자화하여 완전히 오프라인으로 실행하며, 어떤 데이터도 기기 밖으로 나가지 않습니다. 이 앱에는 기존 대부분의 iPhone을 제외시키는 엄격한 요구 사항이 있습니다. Apple Intelligence와 호환되는 기기에서만 작동하며 iOS 26.0 또는 macOS 26.0 이상이 필요합니다. 작성 시점 기준 버전은 1.00.01이었고, 마지막 업데이트는 2025년 10월 13일 — 신생 앱임에도 불구하고 이 리뷰보다 거의 1년 전이었으며 — App Store에는 별점 평균을 계산하기에 평가 수가 너무 적었습니다. 이 리뷰는 이 두 가지 사실을 각주가 아니라 중요한 유보 사항으로 다룹니다. 거의 업데이트되지 않고, 실적이 없는 단독 독립 개발자의 앱은 평판이 아니라 검증 가능한 사실로 독자의 신뢰를 얻어야 합니다.',
    metaDescription:
      'AI on Device 리뷰: iPhone/Mac용 4.99달러(일회성 구매) 앱으로 오프라인에서 3B, 2비트 모델을 실행합니다. Apple Intelligence 호환 기기(iOS/macOS 26+) 필요. 평가 수와 업데이트 이력에 대한 솔직한 검토.',
    twitterDescription:
      'AI on Device 리뷰: iPhone/Mac용 4.99달러(일회성 구매) 앱으로 2비트 양자화된 3B 모델을 완전히 오프라인으로 실행 — 단, Apple Intelligence 호환 하드웨어에서만 가능하며 별점 평균을 표시하기에는 평가 수가 너무 적습니다.',
    audience:
      'Apple Intelligence 호환 iPhone과 Mac을 보유한 독자가 Private LLM, PocketPal AI, Noema 같은 더 확립되었거나 무료인 대안과 비교하여 독립 개발자의 유료 오프라인 AI 앱을 평가 — 하드웨어 요구 사항, 가격, 고정 모델, 낮은 평가 수에 대한 유보 사항을 다룹니다.',
    readTime: '9분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'AI on Device review',
    targetKeywords: [
      'ai on device review',
      'ai on device app iphone',
      'ai on device apple intelligence',
      'ai on device eduardo dominguez',
      'offline ai app apple intelligence requirement',
      'ai on device vs private llm',
      '3b 2-bit model iphone app',
      'best paid offline ai app for iphone',
    ],
    current_models_mentioned: ['AI on Device 3B (2-bit)'],
    current_hardware_mentioned: ['iPhone(Apple Intelligence 호환)', 'Mac(Apple Intelligence 호환, macOS 26+)'],
    leadAnswerBlock:
      '**AI on Device는 독립 개발자 Eduardo Dominguez Menendez가 만든 앱으로, 4.99달러 일회성 구매로 30억 매개변수 언어 모델을 2비트 정밀도로 양자화하여 iPhone과 Mac에서 완전히 오프라인으로 실행합니다.** Apple Intelligence와 호환되는 기기에서만 작동하며 iOS 26.0 또는 macOS 26.0 이상이 필요합니다 — 이 요구 사항은 현재 사용 중인 대부분의 iPhone을 제외시킵니다. 작성 시점 기준 앱은 버전 1.00.01이었고, 마지막 업데이트는 2025년 10월 13일이었으며, [App Store](' +
      APP_STORE_URL +
      ')에는 별점 평균을 낼 만큼 충분한 평가가 없었습니다. 더 긴 공개 실적이나 무료 옵션을 원하는 독자는 [Private LLM](/ko/power-local-llm/private-llm-review), [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review), [Noema](/ko/power-local-llm/noema-review)도 비교해봐야 합니다.',
    quickAnswerTop: {
      en: {
        question: 'Is AI on Device worth $4.99 for offline AI on iPhone?',
        answer:
          'Only if your iPhone or Mac is already compatible with Apple Intelligence (iOS 26.0 / macOS 26.0 or later) — the app will not run at all otherwise. It bundles one fixed 3-billion-parameter model, quantized to 2-bit precision, for a one-time $4.99 payment with no subscription or usage quotas. As of this review it had too few ratings for a star average to show, and its last update was October 13, 2025, so treat it as an unproven, low-adoption app from a single developer rather than an established product.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store — no subscription, no usage-based fees, no quotas.',
          'Requires a device compatible with Apple Intelligence: iOS 26.0 or macOS 26.0 or later.',
          'Runs one fixed model: 3 billion parameters, quantized to 2-bit precision.',
          '100% offline inference; the developer states no data leaves the device or is collected.',
          'Version 1.00.01, last updated October 13, 2025 — nearly a year old at time of writing.',
          'Too few ratings on the App Store for a star average to display as of this review.',
        ],
        updatedDate: '2026-09-12',
      },
      ko: {
        question: 'AI on Device는 iPhone에서 오프라인 AI를 위해 4.99달러의 가치가 있나요?',
        answer:
          'iPhone이나 Mac이 이미 Apple Intelligence와 호환되는 경우(iOS 26.0 / macOS 26.0 이상)에만 그렇습니다 — 그렇지 않으면 앱이 아예 실행되지 않습니다. 구독이나 사용량 할당량 없이 4.99달러 일회성 결제로 30억 매개변수, 2비트 양자화된 고정 모델 하나를 제공합니다. 이 리뷰 시점에 별점 평균을 표시하기에는 평가 수가 너무 적었고, 마지막 업데이트는 2025년 10월 13일이었습니다 — 젊은 앱임에도 거의 1년 전이므로, 검증된 제품이 아니라 독립 개발자의 미입증되고 채택률이 낮은 앱으로 취급해야 합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매 — 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          'Apple Intelligence 호환 기기 필요: iOS 26.0 또는 macOS 26.0 이상.',
          '고정 모델 하나 실행: 30억 매개변수, 2비트 양자화.',
          '100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 작성 시점 기준 거의 1년 전.',
          '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
      de: {
        question: 'Lohnt sich AI on Device für 4,99 $ für Offline-KI auf dem iPhone?',
        answer:
          'Nur wenn Ihr iPhone oder Mac bereits Apple-Intelligence-kompatibel ist (iOS 26.0 / macOS 26.0 oder neuer) — andernfalls startet die App gar nicht. Sie bündelt ein festes 3-Milliarden-Parameter-Modell, quantisiert auf 2-Bit-Präzision, für eine einmalige Zahlung von 4,99 $ ohne Abonnement oder Nutzungskontingente. Zum Zeitpunkt dieses Tests gab es zu wenige Bewertungen für eine Sternedurchschnittsanzeige, und das letzte Update war am 13. Oktober 2025 — behandeln Sie es daher als unbewiesene, wenig verbreitete App eines einzelnen Entwicklers und nicht als etabliertes Produkt.',
        bullets: [
          'Einmaliger Kauf für 4,99 $ im Apple App Store — kein Abonnement, keine nutzungsbasierten Gebühren, keine Kontingente.',
          'Erfordert ein Apple-Intelligence-kompatibles Gerät: iOS 26.0 oder macOS 26.0 oder neuer.',
          'Führt ein festes Modell aus: 3 Milliarden Parameter, quantisiert auf 2-Bit-Präzision.',
          '100 % Offline-Inferenz; laut Entwickler verlassen keine Daten das Gerät und werden keine Daten gesammelt.',
          'Version 1.00.01, zuletzt aktualisiert am 13. Oktober 2025 — zum Zeitpunkt der Erstellung fast ein Jahr alt.',
          'Zu wenige Bewertungen im App Store für eine Sternedurchschnittsanzeige zum Zeitpunkt dieses Tests.',
        ],
        updatedDate: '2026-09-12',
      },
      fr: {
        question: 'AI on Device vaut-elle 4,99 $ pour une IA hors ligne sur iPhone ?',
        answer:
          'Seulement si votre iPhone ou Mac est déjà compatible avec Apple Intelligence (iOS 26.0 / macOS 26.0 ou version ultérieure) — sinon l\'application ne se lance pas du tout. Elle intègre un modèle fixe de 3 milliards de paramètres, quantifié en précision 2 bits, pour un paiement unique de 4,99 $ sans abonnement ni quota d\'utilisation. Au moment de ce test, il y avait trop peu d\'avis pour afficher une note moyenne, et la dernière mise à jour datait du 13 octobre 2025 — considérez-la donc comme une application non éprouvée et peu adoptée d\'un développeur indépendant, pas comme un produit établi.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple — sans abonnement, sans frais à l\'usage, sans quota.',
          'Nécessite un appareil compatible avec Apple Intelligence : iOS 26.0 ou macOS 26.0 ou version ultérieure.',
          'Exécute un modèle fixe : 3 milliards de paramètres, quantifié en précision 2 bits.',
          'Inférence 100 % hors ligne ; le développeur affirme qu\'aucune donnée ne quitte l\'appareil ni n\'est collectée.',
          'Version 1.00.01, dernière mise à jour le 13 octobre 2025 — presque un an au moment de la rédaction.',
          'Trop peu d\'avis sur l\'App Store pour afficher une note moyenne au moment de ce test.',
        ],
        updatedDate: '2026-09-12',
      },
      es: {
        question: '¿Vale la pena AI on Device por $4.99 para IA sin conexión en iPhone?',
        answer:
          'Solo si tu iPhone o Mac ya es compatible con Apple Intelligence (iOS 26.0 / macOS 26.0 o posterior); de lo contrario, la app no se ejecuta en absoluto. Incluye un modelo fijo de 3.000 millones de parámetros, cuantizado a precisión de 2 bits, por un pago único de $4.99 sin suscripción ni cuotas de uso. Al momento de esta reseña había muy pocas valoraciones para mostrar un promedio, y su última actualización fue el 13 de octubre de 2025 — trátala como una app no probada y de baja adopción de un desarrollador independiente, no como un producto establecido.',
        bullets: [
          'Compra única de $4.99 en la App Store de Apple — sin suscripción, sin tarifas por uso, sin cuotas.',
          'Requiere un dispositivo compatible con Apple Intelligence: iOS 26.0 o macOS 26.0 o posterior.',
          'Ejecuta un modelo fijo: 3.000 millones de parámetros, cuantizado a precisión de 2 bits.',
          'Inferencia 100% sin conexión; el desarrollador afirma que ningún dato sale del dispositivo ni se recopila.',
          'Versión 1.00.01, actualizada por última vez el 13 de octubre de 2025 — casi un año al momento de escribir esto.',
          'Muy pocas valoraciones en la App Store para mostrar un promedio de estrellas al momento de esta reseña.',
        ],
        updatedDate: '2026-09-12',
      },
      pt: {
        question: 'O AI on Device vale os $4,99 para IA offline no iPhone?',
        answer:
          'Somente se o seu iPhone ou Mac já for compatível com o Apple Intelligence (iOS 26.0 / macOS 26.0 ou posterior) — caso contrário, o aplicativo simplesmente não é executado. Ele inclui um modelo fixo de 3 bilhões de parâmetros, quantizado em precisão de 2 bits, por um pagamento único de $4,99, sem assinatura ou cotas de uso. No momento desta análise havia avaliações insuficientes para exibir uma média de estrelas, e a última atualização foi em 13 de outubro de 2025 — trate-o como um aplicativo não comprovado e de baixa adoção de um desenvolvedor independente, não como um produto estabelecido.',
        bullets: [
          'Compra única de $4,99 na App Store da Apple — sem assinatura, sem taxas por uso, sem cotas.',
          'Requer um dispositivo compatível com Apple Intelligence: iOS 26.0 ou macOS 26.0 ou posterior.',
          'Executa um modelo fixo: 3 bilhões de parâmetros, quantizado em precisão de 2 bits.',
          'Inferência 100% offline; o desenvolvedor afirma que nenhum dado sai do dispositivo ou é coletado.',
          'Versão 1.00.01, atualizada pela última vez em 13 de outubro de 2025 — quase um ano no momento da redação.',
          'Avaliações insuficientes na App Store para exibir uma média de estrelas no momento desta análise.',
        ],
        updatedDate: '2026-09-12',
      },
      ja: {
        question: 'AI on Deviceは4.99ドルの価値があるオフラインiPhone用AIアプリですか?',
        answer:
          'お使いのiPhoneまたはMacがすでにApple Intelligence対応(iOS 26.0/macOS 26.0以降)である場合に限ります — それ以外ではアプリはまったく起動しません。サブスクリプションや従量課金なしの4.99ドル一括払いで、30億パラメータ・2ビット量子化の固定モデルを1つ搭載しています。本レビュー時点では評価件数が少なすぎて星評価が表示されておらず、最終更新は2025年10月13日でした — 若いアプリにもかかわらずほぼ1年前のため、実績あるプロダクトではなく、単独開発者による未実証・低普及のアプリとして扱うべきです。',
        bullets: [
          'Apple App Storeで4.99ドルの一括払い — サブスクリプション、従量課金、利用枠なし。',
          'Apple Intelligence対応デバイスが必須: iOS 26.0またはmacOS 26.0以降。',
          '固定モデルを1つ実行: 30億パラメータ、2ビット量子化。',
          '100%オフライン推論。開発者はデータが端末外に出ない、収集されないと述べている。',
          'バージョン1.00.01、最終更新は2025年10月13日 — 執筆時点でほぼ1年経過。',
          '本レビュー時点でApp Storeの評価件数が少なすぎて星評価平均が表示されない。',
        ],
        updatedDate: '2026-09-12',
      },
      zh: {
        question: 'AI on Device 值 4.99 美元来在 iPhone 上使用离线 AI 吗?',
        answer:
          '只有当你的 iPhone 或 Mac 已经支持 Apple Intelligence(iOS 26.0 / macOS 26.0 或更高版本)时才值得 — 否则应用根本无法运行。它捆绑了一个固定的 30 亿参数模型,量化为 2 位精度,一次性支付 4.99 美元,没有订阅或使用配额。截至本评测,评价数量太少无法显示星级平均分,最后一次更新是在 2025 年 10 月 13 日 — 因此应将其视为一位独立开发者尚未被验证、采用率较低的应用,而非成熟产品。',
        bullets: [
          '在 Apple App Store 一次性支付 4.99 美元 — 无订阅、无按使用付费、无配额。',
          '需要支持 Apple Intelligence 的设备: iOS 26.0 或 macOS 26.0 或更高版本。',
          '运行一个固定模型: 30 亿参数,量化为 2 位精度。',
          '100% 离线推理;开发者声明没有数据离开设备或被收集。',
          '版本 1.00.01,最后更新于 2025 年 10 月 13 日 — 撰写本文时已近一年。',
          '截至本评测,App Store 评价数量太少,无法显示星级平均分。',
        ],
        updatedDate: '2026-09-12',
      },
      ar: {
        question: 'هل يستحق تطبيق AI on Device 4.99 دولارًا للذكاء الاصطناعي دون اتصال على iPhone؟',
        answer:
          'فقط إذا كان جهاز iPhone أو Mac لديك متوافقًا بالفعل مع Apple Intelligence (iOS 26.0 / macOS 26.0 أو أحدث) — وإلا فلن يعمل التطبيق على الإطلاق. يتضمن نموذجًا واحدًا ثابتًا بـ3 مليارات معامل، مكمّمًا بدقة 2 بت، مقابل دفعة واحدة قدرها 4.99 دولار دون اشتراك أو حصص استخدام. حتى وقت كتابة هذه المراجعة، كانت التقييمات قليلة جدًا لعرض متوسط تقييم بالنجوم، وكان آخر تحديث في 13 أكتوبر 2025 — لذا عامله كتطبيق غير مُثبت وقليل الانتشار من مطوّر مستقل وليس منتجًا راسخًا.',
        bullets: [
          'شراء لمرة واحدة بقيمة 4.99 دولار على متجر تطبيقات Apple — بلا اشتراك، بلا رسوم استخدام، بلا حصص.',
          'يتطلب جهازًا متوافقًا مع Apple Intelligence: iOS 26.0 أو macOS 26.0 أو أحدث.',
          'يشغّل نموذجًا ثابتًا واحدًا: 3 مليارات معامل، مكمّم بدقة 2 بت.',
          'استدلال 100% دون اتصال؛ يذكر المطوّر أن لا بيانات تغادر الجهاز أو يتم جمعها.',
          'الإصدار 1.00.01، آخر تحديث في 13 أكتوبر 2025 — قرابة عام واحد وقت كتابة هذه المراجعة.',
          'تقييمات قليلة جدًا على متجر التطبيقات لعرض متوسط تقييم بالنجوم وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'AI on Device란', anchor: 'what-is-ai-on-device' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: 'Apple Intelligence 요구 사항', anchor: 'apple-intelligence-requirement' },
      { label: '모델: 3B, 2비트 양자화', anchor: 'the-model' },
      { label: '가격', anchor: 'pricing' },
      { label: '개인정보 보호', anchor: 'privacy' },
      { label: '장단점: 이점 대 제한 사항', anchor: 'tradeoffs' },
      { label: 'AI on Device 대 대안', anchor: 'vs-alternatives' },
      { label: 'AI on Device를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'AI on Device를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '평결', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'AI on Device는 독립 개발자 Eduardo Dominguez Menendez가 만든 4.99달러(일회성 구매) iPhone/Mac 앱으로, 고정된 30억 매개변수, 2비트 양자화 모델을 완전히 오프라인으로 실행하지만 Apple Intelligence 호환 기기(iOS 26.0 / macOS 26.0 이상)에서만 작동합니다.',
          },
          {
            type: 'plain-terms',
            text: '이 앱은 단 한 가지만 합니다. 매월 구독료 대신 4.99달러 일회성 결제로, 인터넷 연결 없이 iPhone이나 Mac에서 내장 AI 모델을 실행합니다. 문제는 Apple 자체의 "Apple Intelligence" 기능을 이미 지원하는 최신 기기가 필요하다는 점입니다 — Apple Intelligence를 지원하지 않는 구형 iPhone은 저장 공간이나 RAM이 얼마나 있든 이 앱을 전혀 실행할 수 없습니다.',
          },
        ],
        items: [
          '가격: Apple App Store에서 [4.99달러 일회성 구매](' + APP_STORE_URL + '); 구독 없음, 사용량 기반 요금 없음, 할당량 없음.',
          '하드웨어 요구 사항: Apple Intelligence 호환 기기에서만 작동 — iOS 26.0 또는 macOS 26.0 이상.',
          '플랫폼: iPhone과 Mac만 — iPad, Android, Windows, Linux는 없음.',
          '모델: 고정된 30억 매개변수 모델 하나, 2비트 정밀도로 양자화됨 — 교체 가능한 모델 라이브러리가 아님.',
          '개인정보 보호: 100% 오프라인 추론; 개발자는 데이터가 기기 밖으로 나가지 않으며 수집되지 않는다고 밝힘.',
          '개발자: [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661), 회사가 아닌 독립 개발자.',
          '버전 1.00.01, 마지막 업데이트는 2025년 10월 13일 — 신생 앱임에도 작성 시점 기준 거의 1년 경과.',
          '평가: 이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않음.',
        ],
      },
      whatIsAiOnDevice: {
        id: 'what-is-ai-on-device',
        title: 'AI on Device란',
        content: [
          '**AI on Device는 서버 구성 요소 없이, 추론에 인터넷 연결이 필요 없이 iPhone이나 Mac에서 직접 단일 내장 언어 모델을 실행하는 네이티브 Apple 앱입니다.** [Apple App Store](' +
          APP_STORE_URL +
          ')에 App Store ID 6753206463으로 등록되어 있으며, 개발자는 [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661)로, 이름 있는 회사나 스튜디오가 아닌 독립 개발자입니다.',
          '앱 자체 설명에 따르면 "30억 매개변수, 완전히 2비트 정밀도로 양자화된" 모델을 실행하며, 앱에서 수집되는 데이터가 없는 100% 오프라인 작동을 주장합니다. 또한 범용 크로스플랫폼 래퍼가 아니라 Apple 하드웨어를 위해 특별히 구축된 사용자 친화적인 프롬프트 템플릿과 통합을 홍보합니다.',
          '이 리뷰는 개발자 자신의 App Store 주장 — 2비트 양자화 수치, 데이터 미수집 진술, Apple Intelligence 요구 사항 — 을 설명을 그대로 받아들이는 대신 공개된 App Store 목록 자체가 공개하는 내용과 비교하여 평가합니다. PromptQuorum은 이 모델의 출력 품질을 다른 온디바이스 모델과 독립적으로 벤치마크하지 않았습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**4.99달러를 지불하기 전에 가장 중요한 단계는 기기가 실제로 Apple Intelligence를 지원하는지 확인하는 것입니다 — 그렇지 않으면 앱이 작동하지 않습니다.**',
        ],
        numberedItems: [
          {
            title: '먼저 Apple Intelligence 호환성 확인',
            whyItMatters: 'iPhone이나 Mac을 Apple의 공식 Apple Intelligence 호환 기기 목록과 대조하여 iOS 26.0 또는 macOS 26.0 이상을 실행할 수 있는지 확인하세요. 구매 전에 이 작업을 하세요 — 지원되지 않는 기기에서 4.99달러를 구매하는 것은 핵심 기능을 실행할 수 없는 앱에 돈을 쓰는 것입니다.',
          },
          {
            title: 'iOS 26.0 / macOS 26.0 이상으로 업데이트',
            whyItMatters: '호환 기기라 하더라도 OS 업데이트가 설치되어 있어야 합니다. 현재 App Store 목록에 따르면 앱의 최소 요구 사항은 iPhone의 경우 iOS 26.0, Mac의 경우 macOS 26.0입니다.',
          },
          {
            title: '앱 구매 및 다운로드',
            whyItMatters: '[Apple App Store에서 AI on Device를 받으세요](' + APP_STORE_URL + '), 4.99달러 일회성 결제로 이용 가능합니다. 무료 체험 기간이 없으므로, 1단계의 호환성 확인이 사용할 수 없는 구매를 피하는 유일한 실질적 방법입니다.',
          },
          {
            title: '내장된 프롬프트 템플릿 사용',
            whyItMatters: '이 앱에는 처음부터 프롬프트를 작성하고 싶지 않은 사용자를 위해 단순한 빈 채팅창이 아니라 템플릿 기반 프롬프트 생성 기능이 내장되어 있습니다.',
          },
          {
            title: '완전히 오프라인으로 채팅',
            whyItMatters: '설치 후, 내장된 30억 매개변수, 2비트 양자화 모델은 인터넷 연결 없이 작동합니다. 별도의 모델 다운로드 단계나 탐색할 모델 라이브러리는 없습니다 — 번들로 제공되는 단 하나의 모델이 실행되는 모델입니다.',
          },
        ],
        note: 'Apple Intelligence의 정확한 기기 호환성은 Apple이 지원 기기 목록을 업데이트함에 따라 변경됩니다 — 구매 전에 Apple의 최신 목록과 대조하여 구체적인 iPhone 또는 Mac 모델을 확인하세요.',
      },
      appleIntelligenceRequirement: {
        id: 'apple-intelligence-requirement',
        title: 'Apple Intelligence 요구 사항',
        content: [
          '**AI on Device는 Apple Intelligence 호환 기기에서만 작동하며 iOS 26.0 또는 macOS 26.0 이상이 필요합니다 — 이는 앱이 애초에 사용 가능한지 여부를 결정하는 독자에게 가장 중요한 단 하나의 사실입니다.** App Store 목록은 이를 권장 사항이 아니라 대문자로 된 엄격한 요구 사항으로 명시합니다. 지원되지 않는 하드웨어에서 앱이 저하된 모드나 CPU 전용 모드로 실행되는 것이 아니라 단순히 작동하지 않습니다.',
          '이 요구 사항은 Apple Intelligence 호환성이 특정 범위의 최신 iPhone 및 Mac 모델로 제한되기 때문에 현재도 활발히 사용 중인 상당수의 iPhone을 제외시킵니다. 사용자가 제공하는 모든 GGUF 파일을 실행하는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)처럼 충분한 RAM을 갖춘 모든 iOS 기기에서 경량 모델을 실행하는 앱과 달리, AI on Device의 단일 내장 모델은 독자가 직접 확인할 수 있는 특정 RAM이나 저장 공간 하한선이 아니라 Apple Intelligence 플랫폼 요구 사항에 묶여 있습니다.',
          '실질적 의미: 지원되지 않는 하드웨어에서 앱이 실행되지 않으면 4.99달러의 구매 가격은 회수할 수 없으므로, 독자는 지불하기 전에 자신의 구체적인 기기를 현재 Apple Intelligence 호환성 목록과 대조하여 확인해야 합니다.',
        ],
      },
      theModel: {
        id: 'the-model',
        title: '모델: 3B, 2비트 양자화',
        itemHeadings: true,
        content: [
          '**AI on Device는 교체 가능한 모델 라이브러리를 제공하는 대신 고정된 모델 하나 — 30억 매개변수, 2비트 정밀도로 양자화됨 — 을 번들로 제공합니다.** 이는 일반적으로 여러 GGUF, MLX, 또는 엄선된 모델을 다운로드하고 전환할 수 있는, 이 클러스터에서 리뷰된 대부분의 경쟁 앱과 크게 다른 설계입니다.',
        ],
        columns: ['속성', 'App Store 목록의 명시 내용', '중요한 이유'],
        rows: [
          {
            '속성': '매개변수 수',
            'App Store 목록의 명시 내용': '30억 매개변수',
            '중요한 이유': '많은 데스크톱급 로컬 LLM보다 작은 모델로, 모바일 하드웨어 제약에 맞게 특별히 조정됨.',
          },
          {
            '속성': '양자화',
            'App Store 목록의 명시 내용': '2비트 정밀도로 완전히 양자화됨',
            '중요한 이유': '2비트는 공격적인 압축 수준입니다 — 대부분의 모바일 로컬 AI 앱이 사용하는 더 일반적인 4비트(Q4) 양자화보다 낮으며, 이는 더 작은 메모리 사용량을 위해 출력 품질을 다소 희생합니다.',
          },
          {
            '속성': '모델 선택',
            'App Store 목록의 명시 내용': '고정된 단일 번들 모델; 목록에는 모델 브라우저나 교체 가능한 라이브러리에 대한 설명이 없음',
            '중요한 이유': '다양한 작업을 위해 여러 모델 크기나 계열을 시도하고 싶은 독자는 여기서 그런 유연성을 찾을 수 없습니다 — 대신 [Private LLM](/ko/power-local-llm/private-llm-review)(140개 이상의 엄선된 모델)이나 [Noema](/ko/power-local-llm/noema-review)(로드 가능한 5가지 형식)를 참조하세요.',
          },
        ],
        note: 'PromptQuorum은 이 모델의 출력 품질을 다른 온디바이스 2비트 또는 4비트 모델과 독립적으로 벤치마크하지 않았습니다. 이 섹션은 개발자 자신이 명시한 사양을 반영한 것이며 독립적인 정확도 테스트가 아닙니다.',
      },
      pricing: {
        id: 'pricing',
        title: '가격',
        content: [
          '**AI on Device는 현재 App Store 목록에 따르면 구독이나 사용량 기반 요금 없이 일회성 구매로 4.99달러입니다.**',
          'App Store 목록은 이를 "사용량에 따른 요금 없음, 사용 할당량 없음"으로 명시적으로 표현합니다 — 계량제나 구독 모델이 아니라 고정된 일회성 가격입니다. 이는 프리미엄 모델이나 기능을 위해 무료 등급과 유료 구독을 결합하는 앱에 비해 간단한 가격 구조입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호',
        content: [
          '**개발자는 AI on Device가 앱에서 어떤 데이터도 수집하지 않으며, 모든 추론이 기기에서 100% 오프라인으로 실행된다고 밝힙니다.**',
        ],
        items: [
          '**데이터 수집 없음, 개발자 자신의 주장에 따름.** App Store 설명에는 개발자가 앱에서 어떤 데이터도 수집하지 않는다고 명시되어 있습니다.',
          '**100% 오프라인 추론.** 앱의 핵심 기능인 내장된 30억 매개변수 모델 실행은 설치 후 인터넷 연결이 필요하지 않습니다.',
          '**독립적인 감사 없음.** 이 리뷰는 독립적인 소스 코드 감사나 네트워크 트래픽 분석이 아니라 개발자 자신의 App Store 주장에 의존합니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점 대 제한 사항',
        columns: ['이점', '실제 사용에서 의미하는 것', '제한 사항 / 유보'],
        rows: [
          {
            '이점': '4.99달러 일회성 결제',
            '실제 사용에서 의미하는 것': '관리하거나 취소할 구독이 없고, 사용량별 청구가 없으며, 할당량이 없음.',
            '제한 사항 / 유보': '독자의 기기가 Apple Intelligence 요구 사항을 충족하지 않으면 4.99달러는 회수할 수 없음.',
          },
          {
            '이점': '완전한 오프라인 추론',
            '실제 사용에서 의미하는 것': '앱 설치 후 내장 모델은 인터넷 연결 없이 작동함.',
            '제한 사항 / 유보': '이 리뷰는 독립적인 감사가 아니라 데이터 미수집에 대한 개발자 자신의 주장에 의존함.',
          },
          {
            '이점': '작고 효율적인 2비트 모델',
            '실제 사용에서 의미하는 것': '30억 매개변수, 2비트 양자화 모델은 더 크거나 덜 압축된 모델보다 메모리 사용량이 적음.',
            '제한 사항 / 유보': '공격적인 2비트 양자화는 일반적으로 대부분의 경쟁 모바일 앱이 사용하는 4비트 양자화보다 출력 품질을 더 희생함; PromptQuorum은 이 특정 앱에 대해 이 트레이드오프를 독립적으로 벤치마크하지 않음.',
          },
          {
            '이점': '간단한 템플릿 기반 프롬프트 생성',
            '실제 사용에서 의미하는 것': '내장 템플릿이 처음부터 프롬프트를 작성하고 싶지 않은 독자를 도움.',
            '제한 사항 / 유보': '모델 라이브러리나 형식 유연성 없음 — [Private LLM](/ko/power-local-llm/private-llm-review)이나 [Noema](/ko/power-local-llm/noema-review)와 달리 고정 모델 하나만 있음.',
          },
          {
            '이점': '해당 없음',
            '실제 사용에서 의미하는 것': '해당 없음',
            '제한 사항 / 유보': '엄격한 Apple Intelligence 요구 사항(iOS 26.0 / macOS 26.0+)으로 기존 대부분의 iPhone이 앱을 전혀 사용할 수 없음.',
          },
          {
            '이점': '해당 없음',
            '실제 사용에서 의미하는 것': '해당 없음',
            '제한 사항 / 유보': '이 리뷰 시점 기준 App Store에서 평가 수가 너무 적어 별점 평균이 표시되지 않으며, 마지막 업데이트는 2025년 10월 13일 — 신생 앱임에도 이 리뷰보다 거의 1년 전.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AI on Device 대 대안',
        columns: ['앱', '플랫폼', '가격', '모델 유연성', '핵심 차이'],
        rows: [
          {
            '앱': 'AI on Device',
            '플랫폼': 'iPhone/Mac, Apple Intelligence 호환 전용',
            '가격': '4.99달러 일회성',
            '모델 유연성': '고정 모델 하나: 3B, 2비트 양자화',
            '핵심 차이': '엄격한 Apple Intelligence 하드웨어 요구 사항; 별점 평균을 내기에는 아직 평가 수가 너무 적음',
          },
          {
            '앱': '[Private LLM](/ko/power-local-llm/private-llm-review)',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '가격': '4.99달러 일회성',
            '모델 유연성': '140개 이상의 엄선된 모델; OmniQuant/GPTQ 양자화',
            '핵심 차이': 'Apple Intelligence 요구 사항 없음; 3년간의 공개 출시 이력',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iPhone/iPad, 일부 Android 지원',
            '가격': '무료, 오픈소스',
            '모델 유연성': 'Hugging Face 등에서 사용자가 확보한 모든 GGUF 파일',
            '핵심 차이': '무료이고 광범위하게 호환됨, 최신 Apple 하드웨어에 묶인 유료 앱과 대조적',
          },
          {
            '앱': '[Noema](/ko/power-local-llm/noema-review)',
            '플랫폼': 'iPhone/iPad/Mac/Vision Pro(Apple 전용)',
            '가격': '무료',
            '모델 유연성': '5가지 형식: GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models',
            '핵심 차이': '교체 가능한 모델 라이브러리를 갖춘 무료 앱, 고정된 유료 모델 하나와 대조적',
          },
          {
            '앱': '[Enclave AI](/ko/power-local-llm/enclave-ai-review)',
            '플랫폼': '현재 목록 참조',
            '가격': '현재 목록 참조',
            '모델 유연성': '현재 모델 지원은 전체 리뷰 참조',
            '핵심 차이': '상세 비교는 Enclave AI 전체 리뷰 참조',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 정보는 자주 변경됩니다 — 결정하기 전에 각 앱 자체 목록에서 현재 사양을 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AI on Device를 사용해야 하는 사람',
        items: [
          '**이미 iOS 26.0 또는 macOS 26.0 이상을 실행하는 Apple Intelligence 호환 iPhone이나 Mac을 소유한 독자.** 이 하드웨어가 없으면 앱이 전혀 작동하지 않습니다 — 먼저 호환성을 확인하세요.',
          '**1인 개발자의 미입증되고 평가가 적은 앱에 4.99달러를 선불로 지불할 의향이 있는 독자.** 별점 평균을 내기에는 평가 수가 너무 적고 마지막 업데이트가 거의 1년 전이므로, 이는 검증된 실적에 기반한 구매가 아니라 얼리 어답터의 영역입니다.',
          '**선택할 라이브러리보다 단일하고 간단한 내장 모델을 선호하는 독자.** 고정된 3B, 2비트 모델이 작업에 맞으면 앱은 모델 선택에 따른 의사 결정 부담을 피할 수 있습니다.',
          '**구독보다 고정된 일회성 결제를 선호하는 독자.** App Store 목록에 따르면 사용 할당량이나 반복 요금이 없습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AI on Device를 사용하지 말아야 하는 사람',
        items: [
          '**iPhone이나 Mac이 Apple Intelligence를 지원하지 않는 독자.** 지원되지 않는 하드웨어에서는 앱이 핵심 기능을 실행하지 않습니다 — 4.99달러를 지불하기 전에 호환성을 확인하세요. 기존 대부분의 iPhone이 이 범주에 속합니다.',
          '**여러 모델 선택지를 원하는 독자.** AI on Device는 고정 모델 하나를 번들로 제공합니다; [Private LLM](/ko/power-local-llm/private-llm-review)은 140개 이상의 엄선된 모델을, [Noema](/ko/power-local-llm/noema-review)는 5가지 모델 형식을 지원합니다.',
          '**확립된 실적을 중시하는 독자.** 별점 평균을 내기에는 평가 수가 너무 적고 마지막 업데이트가 이 리뷰보다 거의 1년 전이므로, 사회적 증거를 중요하게 여기는 독자는 대신 [Private LLM](/ko/power-local-llm/private-llm-review)이나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)로 시작해야 합니다.',
          '**무료 옵션을 원하는 독자.** [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 [Noema](/ko/power-local-llm/noema-review)는 둘 다 무료이며 더 광범위하거나 유연한 모델 지원을 제공합니다.',
          '**iPad, Android, Windows, Linux 사용자.** App Store 목록에 따르면 AI on Device는 iPhone과 Mac 전용입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AI on Device는 얼마인가요?',
            a: 'App Store 목록에 따르면 AI on Device는 [4.99달러 일회성 구매](' + APP_STORE_URL + ')이며, 이 리뷰를 위해 2026-09-12에 확인되었고, 구독, 사용량 기반 요금, 할당량이 없습니다. App Store 가격은 시간이 지나면서 변경될 수 있습니다 — 구매 전에 현재 가격을 확인하세요.',
          },
          {
            q: 'AI on Device가 제 iPhone에서 작동하나요?',
            a: 'iPhone이 Apple Intelligence와 호환되고 iOS 26.0 이상을 실행하는 경우에만 가능합니다. 이는 권장 사항이 아니라 엄격한 요구 사항입니다 — App Store 목록은 앱이 Apple Intelligence 호환 기기에서만 작동한다고 명시합니다. 구매 전에 Apple의 현재 Apple Intelligence 기기 목록을 확인하세요.',
          },
          {
            q: 'AI on Device는 어떤 모델을 사용하나요?',
            a: 'App Store 설명에 따르면 30억 매개변수를 가진, 2비트 정밀도로 완전히 양자화된 단일 내장 모델입니다. 교체 가능한 모델 라이브러리를 갖춘 앱과 달리, 이것이 앱이 실행하는 유일한 모델입니다 — 대체 모델을 위한 모델 브라우저나 다운로드 단계는 없습니다.',
          },
          {
            q: 'AI on Device는 Android나 iPad에서 이용할 수 있나요?',
            a: '아니요. App Store 목록에는 앱이 iPhone과 Mac만 지원한다고 명시되어 있습니다. iPad, Android, Windows, Linux 지원은 나열되어 있지 않습니다.',
          },
          {
            q: 'AI on Device는 누가 개발하나요?',
            a: 'App Store 개발자 목록에 따르면 AI on Device는 이름 있는 회사나 스튜디오가 아닌 독립 개발자인 [Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661)가 개발합니다.',
          },
          {
            q: 'AI on Device는 완전히 오프라인으로 작동하나요?',
            a: '네. App Store 설명에 따르면 개발자는 앱이 데이터 수집 없이 100% 오프라인으로 작동한다고 밝힙니다. 이 리뷰는 독립적인 네트워크 트래픽 감사가 아니라 개발자 자신의 주장에 의존합니다.',
          },
          {
            q: 'AI on Device의 App Store 평가는 얼마나 신뢰할 수 있나요?',
            a: '이 리뷰 시점 기준, App Store 목록은 별점 평균을 표시하기에도 평가 수가 너무 적음을 보여줍니다 — 이는 많은 리뷰가 있는 낮은 별점 평균보다 더 강한 유보 사항입니다. 사회적 증거로부터 품질을 추정하기보다 앱을 미입증된 것으로 취급하고, 의존하기 전에 App Store에서 현재 평가 수를 다시 확인하세요.',
          },
          {
            q: 'AI on Device는 얼마나 자주 업데이트되나요?',
            a: 'App Store 목록은 버전 1.00.01을 보여주며, 마지막 업데이트는 2025년 10월 13일 — 앱이 비교적 신생임에도 이 리뷰 게시보다 거의 1년 전입니다. 이는 이 클러스터 내 여러 적극적으로 유지 관리되는 경쟁사보다 느린 업데이트 속도이며, 낮은 평가 수와 함께 고려할 가치가 있습니다.',
          },
          {
            q: 'AI on Device는 Private LLM과 비교하면 어떤가요?',
            a: 'AI on Device는 [Private LLM](/ko/power-local-llm/private-llm-review)과 동일한 4.99달러 일회성 가격이지만, 고정된 3B, 2비트 모델 하나만 번들로 제공하고, Apple Intelligence 호환 기기가 필요하며, 별점 평균을 내기에는 평가 수가 너무 적습니다. Private LLM은 140개 이상의 엄선된 모델 라이브러리를 제공하고, Apple Intelligence 요구 사항이 없으며, 3년간의 공개 출시 이력이 있습니다. 더 광범위한 모델 라이브러리와 더 긴 실적을 원한다면 Private LLM을 선택하고, 특별히 내장 모델을 원하고 이미 호환되는 Apple Intelligence 하드웨어를 보유한 경우에만 AI on Device를 선택하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '평결',
        content:
          'AI on Device는 4.99달러 일회성 결제, 구독 없음, 할당량 없음이라는 간단하고 정직하게 가격이 책정된 앱으로, 고정된 30억 매개변수, 2비트 양자화 모델을 완전히 오프라인으로 실행합니다. 이 단순함은 동시에 가장 큰 제한이기도 합니다. 선택할 수 있는 모델 라이브러리가 없으며, 앱은 기존 대부분의 iPhone을 처음부터 제외시키는 엄격한 Apple Intelligence 하드웨어 요구 사항(iOS 26.0 / macOS 26.0 이상) 뒤에 잠겨 있습니다. 솔직한 유보 사항은 여기서 끝나지 않습니다. 이 리뷰 시점 기준, App Store는 별점 평균을 내기에 평가 수가 너무 적음을 보여주며, 마지막 업데이트는 2025년 10월 13일 — 신생 앱임에도 이 리뷰보다 거의 1년 전이었습니다. 이 조합 — 1인 독립 개발자, 눈에 보이는 실적 없음, 오래된 업데이트 이력 — 은 이것이 평판에 근거해 내려야 할 구매가 아님을 의미합니다. 이미 Apple Intelligence 호환 하드웨어를 보유하고 있고 미입증된 앱의 얼리 어답터가 되는 것에 거리낌이 없는 독자는 4.99달러에 합리적으로 시도해볼 수 있습니다. 그 외 모든 사람, 특히 더 광범위한 모델 라이브러리나 더 긴 실적을 원하는 독자는 대신 [Private LLM](/ko/power-local-llm/private-llm-review), [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review), [Noema](/ko/power-local-llm/noema-review)로 시작해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 AI on Device](' + APP_STORE_URL + ') — 가격, 플랫폼 호환성, Apple Intelligence 요구 사항, 모델 사양, 평가, 버전, 업데이트 날짜.',
          '[App Store의 Eduardo Dominguez Menendez](https://apps.apple.com/us/developer/eduardo-dominguez-menendez/id1697629661) — 개발자 계정 목록.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — Apple Intelligence 요구 사항이 없고 더 긴 출시 이력을 가진 유료 엄선 라이브러리 대안.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료, 오픈소스, 광범위하게 호환되는 대안.',
          '[Noema 리뷰](/ko/power-local-llm/noema-review) — 교체 가능한 모델 라이브러리를 갖춘 무료 5형식 대안.',
          '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review) — 비교를 위한 또 다른 온디바이스 AI 앱.',
          '[전체 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 모든 플랫폼에 걸친 더 광범위한 로컬 LLM 도구 디렉터리.',
        ],
      },
    },
  },
}
