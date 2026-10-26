// Local AI App Directory — Pajdo: Health & Fitness Buddy (layer: mobile / iOS, on-device health companion)
// Added 2026-10-26 after the developer (Josip Markovic, also the maker of Castmates and Lyonesse) replied to outreach: "you can add both".
// Verified 2026-10-26 against: the App Store listing and iTunes lookup record (id6811650058: seller JOSIP MARKOVIC, copyright
// "Markovic Software", v1.3.3 released 2026-10-25, first release 2026-10-13, iOS/iPadOS 26.0+, free with in-app purchases),
// the product site get-pajdo.app (features, plans, AI and privacy claims, 17 languages), its press page (Markovic Software, Croatia) and
// its privacy policy (updated 2026-10-25: operator Markovic Software, obrt za usluge; Mixpanel with consent, EU storage; RevenueCat for purchase status).
// The AI that answers questions is stated to be Apple Intelligence on the device; the site names no other model. No public source repository, so
// licence is recorded as closed source and `engine` as builtin (the model is Apple's system model, not shipped by the app).
// 2026-10-26: Josip Markovic reviewed the finished review by email and supplied a maker note, so `founder` + `founderReviewedDate` are set.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pajdo',
  name: 'Pajdo: Health & Fitness Buddy',
  categories: ['health-wellness'], // own niche: no other app in the directory reads health data, so it is not filed under personal assistants,
  interfaces: ['mobile'],
  locality: 'local', // developer states health data, the math and the question answering stay on the iPhone (Apple Intelligence); no account, no cloud AI service
  platforms: ['ios', 'ipados', 'watchos'], // iPhone and iPad (iOS/iPadOS 26.0+) plus an Apple Watch app; no Android or desktop version mentioned
  worksWith: ['Apple Intelligence', 'Apple Health'],
  engine: 'builtin', // answers come from Apple's on-device Apple Intelligence model; without it the app falls back to prewritten replies (website)
  license: 'Closed source',
  price: 'freemium', // free tier (all eight moods, 5 questions/week); Pro monthly $7.99, yearly $39.99, lifetime $69.99 (US store, 2026-10-26)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // needs a device that supports Apple Intelligence for AI answers; no RAM figure stated
  stars: null,
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'get-pajdo.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058',
    web: 'https://get-pajdo.app',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6811650058 (free, iOS/iPadOS 26.0+, 91.8 MB, plus Apple Watch app), read 2026-10-26',
  tagline: {
    en: 'Apple Health companion for iPhone and Apple Watch that answers questions about your sleep and heart data with Apple Intelligence on the device',
    de: 'Apple-Health-Begleiter für iPhone und Apple Watch, der Fragen zu Schlaf- und Herzdaten mit Apple Intelligence direkt auf dem Gerät beantwortet',
    fr: 'Compagnon Apple Santé pour iPhone et Apple Watch qui répond aux questions sur le sommeil et le cœur avec Apple Intelligence, sur l’appareil',
    ja: 'iPhoneとApple Watch向けのApple Healthコンパニオン。睡眠や心拍のデータに関する質問に、端末上のApple Intelligenceで答える',
    zh: '适用于 iPhone 和 Apple Watch 的 Apple 健康助手，使用设备上的 Apple Intelligence 回答有关睡眠和心脏数据的问题',
    es: 'Compañero de Apple Salud para iPhone y Apple Watch que responde preguntas sobre tu sueño y tu corazón con Apple Intelligence en el dispositivo',
    pt: 'Companheiro do Apple Saúde para iPhone e Apple Watch que responde a perguntas sobre sono e coração com a Apple Intelligence no aparelho',
    ar: 'رفيق لتطبيق Apple Health على iPhone وApple Watch يجيب عن أسئلة النوم والقلب باستخدام Apple Intelligence على الجهاز',
    ko: 'iPhone과 Apple Watch용 Apple 건강 도우미. 기기 내 Apple Intelligence로 수면·심장 데이터에 관한 질문에 답합니다',
  },
  // No `compare` block: Other & Niche has no comparison segment (nothing to compare it with). On-device answers (Apple Intelligence) are stated in the review.
  reviewSlug: 'pajdo-review',
  pqReview: {
    date: '2026-10-26',
    version: '1.3.3',
    versionSourceUrl: 'https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058',
  },
  verdict: 'Best for iPhone and Apple Watch owners who want Apple Health data explained in plain language with the questions answered on the device; limited by being closed source and only two weeks old, needing iOS 26, and by AI answers that depend on Apple Intelligence support.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-25', // App Store version 1.3.3, currentVersionReleaseDate 2026-10-25T21:29:00Z via iTunes lookup, read 2026-10-26
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058',
  founderReviewedDate: '2026-10-26', // Josip Markovic (developer) reviewed the finished review draft and supplied corrections plus a maker note by email on 2026-10-26; drives the Founder-reviewed banner + star
  founder: {
    who: {
      en: 'Josip Markovic, developer',
      de: 'Josip Markovic, Entwickler',
      es: 'Josip Markovic, desarrollador',
      fr: 'Josip Markovic, développeur',
      ja: 'Josip Markovic氏、開発者',
      pt: 'Josip Markovic, desenvolvedor',
      ar: 'Josip Markovic، مطوّر التطبيق',
      zh: 'Josip Markovic,开发者',
      ko: 'Josip Markovic, 개발자',
    },
    providedDate: '2026-10-26',
    why: {
      en: 'I wanted my Apple Watch data explained like a friend would, without sending my health data anywhere.',
      de: 'Ich wollte meine Apple-Watch-Daten so erklärt bekommen, wie ein Freund es tun würde, ohne meine Gesundheitsdaten irgendwohin zu schicken.',
      es: 'Quería que mis datos del Apple Watch me los explicaran como lo haría un amigo, sin enviar mis datos de salud a ninguna parte.',
      fr: 'Je voulais que mes données Apple Watch soient expliquées comme le ferait un ami, sans envoyer mes données de santé où que ce soit.',
      ja: 'Apple Watchのデータを、健康データをどこにも送ることなく、友人のように説明してほしかったのです。',
      pt: 'Eu queria meus dados do Apple Watch explicados como um amigo explicaria, sem enviar meus dados de saúde para lugar nenhum.',
      ar: 'أردت أن تُشرح لي بيانات Apple Watch كما يشرحها صديق، دون إرسال بياناتي الصحية إلى أي مكان.',
      zh: '我希望我的 Apple Watch 数据能像朋友那样给我讲清楚，同时不把我的健康数据发到任何地方。',
      ko: '저는 건강 데이터를 어디에도 보내지 않으면서 Apple Watch 데이터를 친구가 설명해 주듯 풀어 주기를 원했습니다.',
    },
    fullQuote: {
      en: [
        'I wanted my Apple Watch data explained like a friend would, without sending my health data anywhere. So the numbers are done by plain code, Apple\'s on-device model only puts them into words, and Pajdo\'s face shows how you\'re doing at a glance. It\'s a wellness buddy, not a medical app, and it never diagnoses. Next up is more coaching for runners and for sleep, based on what people actually ask it.',
      ],
      de: [
        'Ich wollte meine Apple-Watch-Daten so erklärt bekommen, wie ein Freund es tun würde, ohne meine Gesundheitsdaten irgendwohin zu schicken. Deshalb werden die Zahlen von einfachem Code berechnet, Apples Modell auf dem Gerät formuliert sie nur in Worte, und Pajdos Gesicht zeigt auf einen Blick, wie es Ihnen geht. Es ist ein Wellness-Begleiter, keine medizinische App, und es stellt nie Diagnosen. Als Nächstes folgt mehr Coaching für Läufer und für den Schlaf, basierend darauf, was die Leute tatsächlich fragen.',
      ],
      es: [
        'Quería que mis datos del Apple Watch me los explicaran como lo haría un amigo, sin enviar mis datos de salud a ninguna parte. Por eso las cifras las calcula código simple, el modelo de Apple en el dispositivo solo las pone en palabras, y la carita de Pajdo muestra de un vistazo cómo estás. Es un compañero de bienestar, no una app médica, y nunca diagnostica. Lo siguiente es más coaching para corredores y para el sueño, según lo que la gente le pregunte de verdad.',
      ],
      fr: [
        'Je voulais que mes données Apple Watch soient expliquées comme le ferait un ami, sans envoyer mes données de santé où que ce soit. Les chiffres sont donc calculés par du code simple, le modèle d’Apple sur l’appareil ne fait que les mettre en mots, et le visage de Pajdo montre d’un coup d’œil comment vous allez. C’est un compagnon de bien-être, pas une application médicale, et il ne pose jamais de diagnostic. La suite, ce sera davantage de coaching pour les coureurs et pour le sommeil, à partir de ce que les gens lui demandent réellement.',
      ],
      ja: [
        'Apple Watchのデータを、健康データをどこにも送ることなく、友人のように説明してほしかったのです。そのため、数値はふつうのコードで計算し、Appleの端末上のモデルはそれを言葉にするだけで、Pajdoの顔でひと目で今の調子がわかります。これはウェルネスの相棒であって医療アプリではなく、診断は決してしません。次は、ユーザーが実際に尋ねる内容をもとに、ランナーや睡眠向けのコーチングを増やしていきます。',
      ],
      pt: [
        'Eu queria meus dados do Apple Watch explicados como um amigo explicaria, sem enviar meus dados de saúde para lugar nenhum. Por isso, os números são calculados por código simples, o modelo da Apple no aparelho só os transforma em palavras, e o rosto do Pajdo mostra como você está num relance. É um companheiro de bem-estar, não um app médico, e nunca faz diagnósticos. Os próximos passos são mais orientação para corredores e para o sono, com base no que as pessoas realmente perguntam.',
      ],
      ar: [
        'أردت أن تُشرح لي بيانات Apple Watch كما يشرحها صديق، دون إرسال بياناتي الصحية إلى أي مكان. لذلك تُجرى الأرقام بشيفرة عادية، ولا يقوم نموذج Apple على الجهاز إلا بصياغتها في كلمات، ويُظهر وجه Pajdo حالتك في لمحة. إنه رفيق للعافية لا تطبيق طبي، ولا يشخّص أبدًا. والخطوة التالية مزيد من التدريب للعدّائين وللنوم، بحسب ما يسأل عنه الناس فعلًا.',
      ],
      zh: [
        '我希望我的 Apple Watch 数据能像朋友那样给我讲清楚，同时不把我的健康数据发到任何地方。所以数字由普通代码计算，Apple 的设备端模型只负责把它们说成话，Pajdo 的表情则让你一眼看出自己的状态。它是一个健康陪伴应用，不是医疗应用，也从不做诊断。接下来会根据用户实际提出的问题，为跑者和睡眠增加更多指导。',
      ],
      ko: [
        '저는 건강 데이터를 어디에도 보내지 않으면서 Apple Watch 데이터를 친구가 설명해 주듯 풀어 주기를 원했습니다. 그래서 수치는 일반 코드로 계산하고, Apple의 온디바이스 모델은 그것을 말로 풀어 줄 뿐이며, Pajdo의 얼굴은 지금 상태가 어떤지 한눈에 보여 줍니다. 이 앱은 의료 앱이 아니라 웰니스 도우미이며 진단하지 않습니다. 다음 계획은 사용자 여러분이 실제로 묻는 내용을 바탕으로 러너와 수면을 위한 코칭을 늘리는 것입니다.',
      ],
    },
  },
}
