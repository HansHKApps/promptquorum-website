// Local AI App Directory — Castmates: AI Characters (layer: mobile / iOS)
// Added 2026-10-19 on request. Verified on 2026-10-19 against: the App Store listing and iTunes lookup record
// (id6785844694: seller Josip Markovic, v1.1.7 released 2026-10-19, first release 2026-07-06, iOS 17.0+, free with
// in-app purchases) and the product site get-castmates.com (pricing, on-device claim). No public source repository, so licence is recorded as closed source and `engine` as builtin.
// Maker comment from Josip Markovic 2026-10-19: model, device requirement and languages confirmed (see `founder` below).
// The App Store privacy label reads "Data Not Linked to You" (developer-corrected); the policy says anonymous usage
// events go to Mixpanel and RevenueCat tracks subscription status (no message content). Developer self-report, not independently verified.
// Age rating 18+ (character roleplay incl. romance genre).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'castmates',
  name: 'Castmates: AI Characters',
  categories: ['roleplay-companions'],
  interfaces: ['mobile'],
  locality: 'local', // developer states the AI runs on the iPhone after a one-time model download (~1.9 GB); works offline in airplane mode
  platforms: ['ios'], // iPhone and iPad, iOS/iPadOS 17.0+; the product site says iPhone only; no Android plans mentioned
  worksWith: null,
  engine: 'builtin', // bundles its own on-device model: Impish Llama 3B (Llama 3 based, Q4_K_M, ~1.9 GB) on llama.cpp, 4,096-token context (developer, 2026-10-19)
  license: 'Closed source',
  price: 'freemium', // free download; free tier 30 messages/day and one custom character; Pro $6.99/month, $29.99/year, $44.99 lifetime (US store, 2026-10-19)
  hardware: { ramGb: 6, vramGb: null, cpuOnly: null, variesByModel: false }, // developer (2026-10-19): needs an iPhone with 6 GB RAM or more; phones with 4 GB or less get an explanation instead of the download
  stars: null,
  addedDate: '2026-10-19',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'get-castmates.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/castmates-ai-characters/id6785844694',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6785844694 (free, iOS/iPadOS 17.0+, 35.6 MB plus a ~1.9 GB in-app model download), read 2026-10-19',
  tagline: {
    en: 'Offline iPhone character chat with 32 ready-made characters, custom characters and no account',
    de: 'Offline-Charakter-Chat für das iPhone mit 32 fertigen Charakteren, eigenen Charakteren und ohne Konto',
    fr: 'Chat de personnages hors ligne pour iPhone avec 32 personnages prêts à l’emploi, personnages personnalisés et sans compte',
    ja: 'iPhone向けのオフライン・キャラクターチャット。32体の用意済みキャラクターとカスタムキャラクターに対応、アカウント不要',
    zh: 'iPhone 离线角色聊天应用，内置 32 个角色，支持自定义角色，无需账号',
    es: 'Chat de personajes sin conexión para iPhone con 32 personajes incluidos, personajes propios y sin cuenta',
    pt: 'Chat de personagens offline para iPhone com 32 personagens prontos, personagens próprios e sem conta',
    ar: 'دردشة شخصيات دون إنترنت لـ iPhone مع 32 شخصية جاهزة وشخصيات مخصصة ودون حساب',
    ko: 'iPhone용 오프라인 캐릭터 채팅 앱. 기본 캐릭터 32종과 커스텀 캐릭터를 제공하며 계정이 필요 없음',
  },
  // Comparison attributes: the roleplay segment only defines lorebooks / groupChats; neither is stated on the listing or site, so `compare` stays unset (not stated, never false).
  reviewSlug: 'castmates-review',
  pqReview: {
    date: '2026-10-19',
    version: '1.1.7',
    versionSourceUrl: 'https://apps.apple.com/us/app/castmates-ai-characters/id6785844694',
  },
  verdict: 'Best for adults who want free, account-less offline character roleplay on iPhone; limited by being closed source and only three months old, English only, a small 3B model and a 6 GB RAM iPhone requirement.',
  lastVerifiedDate: '2026-10-19',
  lastUpstreamUpdate: '2026-10-19', // App Store version 1.1.7, currentVersionReleaseDate via iTunes lookup 2026-10-19
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/castmates-ai-characters/id6785844694',
  founderReviewedDate: '2026-10-19', // Josip Markovic supplied his own comment 2026-10-19; drives the amber Founder-reviewed banner + star on tile, drawer and review
  founder: {
    who: {
      en: 'Josip Markovic, developer',
      de: 'Josip Markovic, Entwickler',
      fr: 'Josip Markovic, développeur',
      ja: 'Josip Markovic氏、開発者',
      zh: 'Josip Markovic，开发者',
      es: 'Josip Markovic, desarrollador',
      pt: 'Josip Markovic, desenvolvedor',
      ar: 'Josip Markovic، مطوّر',
      ko: 'Josip Markovic, 개발자',
    },
    why: {
      en: 'I built Castmates because every character app I tried wanted an account and sent every message to a server. A 3B model on a phone sounded too small for real stories, so most of the work went into making it hold a scene:',
      de: 'Ich habe Castmates gebaut, weil jede Charakter-App, die ich ausprobiert habe, ein Konto wollte und jede Nachricht an einen Server schickte. Ein 3B-Modell auf einem Telefon klang zu klein für echte Geschichten, deshalb ging der Großteil der Arbeit darauf, es eine Szene halten zu lassen:',
      fr: 'J\'ai créé Castmates parce que chaque appli de personnages que j\'ai essayée exigeait un compte et envoyait chaque message à un serveur. Un modèle de 3B sur un téléphone semblait trop petit pour de vraies histoires ; l\'essentiel du travail a donc consisté à lui faire tenir une scène :',
      ja: '私がCastmatesを作ったのは、これまで試したキャラクターアプリがどれもアカウントを求め、すべてのメッセージをサーバーに送っていたからです。スマートフォン上の3Bモデルでは本格的な物語には小さすぎるように思えたため、作業の大半は、場面を保たせることに費やしました。',
      zh: '我做 Castmates，是因为我试过的每一款角色应用都要求注册账号，并把每条消息发送到服务器。手机上的 3B 模型听起来对真正的故事来说太小了，所以大部分工作都花在让它撑住一个场景上：',
      es: 'Creé Castmates porque todas las apps de personajes que probé querían una cuenta y enviaban cada mensaje a un servidor. Un modelo de 3B en un teléfono parecía demasiado pequeño para historias de verdad, así que la mayor parte del trabajo consistió en lograr que mantuviera una escena:',
      pt: 'Criei o Castmates porque todo app de personagens que experimentei exigia uma conta e enviava cada mensagem a um servidor. Um modelo de 3B em um celular parecia pequeno demais para histórias de verdade, então a maior parte do trabalho foi fazê-lo sustentar uma cena:',
      ar: 'بنيت Castmates لأن كل تطبيق شخصيات جربته كان يطلب حسابًا ويرسل كل رسالة إلى خادم. بدا لي نموذج بحجم 3B على الهاتف أصغر من أن يروي قصصًا حقيقية، لذلك ذهب معظم العمل إلى جعله يحافظ على المشهد:',
      ko: '제가 Castmates를 만든 이유는, 써 본 캐릭터 앱이 하나같이 계정을 요구하고 모든 메시지를 서버로 보냈기 때문입니다. 휴대폰에서 돌아가는 3B 모델은 제대로 된 이야기를 하기에 너무 작아 보였기에, 작업의 대부분은 모델이 장면을 유지하게 만드는 데 들어갔습니다.',
    },
    best: {
      en: 'session summaries so characters remember you, guards that catch the model breaking character, and a lot of eval runs on a Mac before anything ships.',
      de: 'Sitzungszusammenfassungen, damit sich Charaktere an Sie erinnern, Schutzmechanismen, die erkennen, wenn das Modell aus der Rolle fällt, und viele Eval-Läufe auf einem Mac, bevor etwas erscheint.',
      fr: 'des résumés de session pour que les personnages se souviennent de vous, des garde-fous qui repèrent quand le modèle sort de son rôle, et de nombreuses séries d\'évaluation sur un Mac avant toute publication.',
      ja: 'キャラクターが自分のことを覚えているためのセッション要約、モデルがキャラクターを崩したときに検知するガード、そして公開前にMacで重ねた多数の評価実行です。',
      zh: '让角色记住你的会话摘要、发现模型出戏时的防护机制，以及在任何版本发布前在 Mac 上进行的大量评测运行。',
      es: 'resúmenes de sesión para que los personajes te recuerden, protecciones que detectan cuando el modelo rompe el personaje y muchas pruebas de evaluación en un Mac antes de publicar nada.',
      pt: 'resumos de sessão para que os personagens se lembrem de você, proteções que detectam quando o modelo sai do personagem e muitas rodadas de avaliação em um Mac antes de qualquer lançamento.',
      ar: 'ملخصات للجلسات كي تتذكرك الشخصيات، وضوابط تلتقط اللحظة التي يخرج فيها النموذج عن الشخصية، وكثير من جولات التقييم على جهاز Mac قبل إطلاق أي شيء.',
      ko: '캐릭터가 나를 기억하도록 하는 세션 요약, 모델이 캐릭터에서 벗어나는 것을 잡아내는 가드, 그리고 출시 전에 Mac에서 돌린 많은 평가 실행입니다.',
    },
    pullQuote: {
      en: 'I built Castmates because every character app I tried wanted an account and sent every message to a server.',
      de: 'Ich habe Castmates gebaut, weil jede Charakter-App, die ich ausprobiert habe, ein Konto wollte und jede Nachricht an einen Server schickte.',
      fr: 'J\'ai créé Castmates parce que chaque appli de personnages que j\'ai essayée exigeait un compte et envoyait chaque message à un serveur.',
      ja: '私がCastmatesを作ったのは、これまで試したキャラクターアプリがどれもアカウントを求め、すべてのメッセージをサーバーに送っていたからです。',
      zh: '我做 Castmates，是因为我试过的每一款角色应用都要求注册账号，并把每条消息发送到服务器。',
      es: 'Creé Castmates porque todas las apps de personajes que probé querían una cuenta y enviaban cada mensaje a un servidor.',
      pt: 'Criei o Castmates porque todo app de personagens que experimentei exigia uma conta e enviava cada mensagem a um servidor.',
      ar: 'بنيت Castmates لأن كل تطبيق شخصيات جربته كان يطلب حسابًا ويرسل كل رسالة إلى خادم.',
      ko: '제가 Castmates를 만든 이유는, 써 본 캐릭터 앱이 하나같이 계정을 요구하고 모든 메시지를 서버로 보냈기 때문입니다.',
    },
    providedDate: '2026-10-19',
    // Maker comment (lightly trimmed), same text as the "From the Maker" section in castmates-review.ts.
    fullQuote: {
      en: [
        'I built Castmates because every character app I tried wanted an account and sent every message to a server. A 3B model on a phone sounded too small for real stories, so most of the work went into making it hold a scene: session summaries so characters remember you, guards that catch the model breaking character, and a lot of eval runs on a Mac before anything ships. Next up is a faster first download and seasonal characters, starting with three Halloween ones.',
      ],
      de: [
        'Ich habe Castmates gebaut, weil jede Charakter-App, die ich ausprobiert habe, ein Konto wollte und jede Nachricht an einen Server schickte. Ein 3B-Modell auf einem Telefon klang zu klein für echte Geschichten, deshalb ging der Großteil der Arbeit darauf, es eine Szene halten zu lassen: Sitzungszusammenfassungen, damit sich Charaktere an Sie erinnern, Schutzmechanismen, die erkennen, wenn das Modell aus der Rolle fällt, und viele Eval-Läufe auf einem Mac, bevor etwas erscheint. Als Nächstes kommen ein schnellerer erster Download und saisonale Charaktere, beginnend mit drei Halloween-Charakteren.',
      ],
      fr: [
        'J\'ai créé Castmates parce que chaque appli de personnages que j\'ai essayée exigeait un compte et envoyait chaque message à un serveur. Un modèle de 3B sur un téléphone semblait trop petit pour de vraies histoires ; l\'essentiel du travail a donc consisté à lui faire tenir une scène : des résumés de session pour que les personnages se souviennent de vous, des garde-fous qui repèrent quand le modèle sort de son rôle, et de nombreuses séries d\'évaluation sur un Mac avant toute publication. Prochaines étapes : un premier téléchargement plus rapide et des personnages saisonniers, en commençant par trois personnages d\'Halloween.',
      ],
      ja: [
        '私がCastmatesを作ったのは、これまで試したキャラクターアプリがどれもアカウントを求め、すべてのメッセージをサーバーに送っていたからです。スマートフォン上の3Bモデルでは本格的な物語には小さすぎるように思えたため、作業の大半は、場面を保たせることに費やしました。キャラクターが自分のことを覚えているためのセッション要約、モデルがキャラクターを崩したときに検知するガード、そして公開前にMacで重ねた多数の評価実行です。次は、初回ダウンロードの高速化と季節限定キャラクターで、最初はハロウィンの3キャラクターを予定しています。',
      ],
      zh: [
        '我做 Castmates，是因为我试过的每一款角色应用都要求注册账号，并把每条消息发送到服务器。手机上的 3B 模型听起来对真正的故事来说太小了，所以大部分工作都花在让它撑住一个场景上：让角色记住你的会话摘要、发现模型出戏时的防护机制，以及在任何版本发布前在 Mac 上进行的大量评测运行。接下来是更快的首次下载和季节性角色，先从三个万圣节角色开始。',
      ],
      es: [
        'Creé Castmates porque todas las apps de personajes que probé querían una cuenta y enviaban cada mensaje a un servidor. Un modelo de 3B en un teléfono parecía demasiado pequeño para historias de verdad, así que la mayor parte del trabajo consistió en lograr que mantuviera una escena: resúmenes de sesión para que los personajes te recuerden, protecciones que detectan cuando el modelo rompe el personaje y muchas pruebas de evaluación en un Mac antes de publicar nada. Lo siguiente son una primera descarga más rápida y personajes de temporada, empezando por tres de Halloween.',
      ],
      pt: [
        'Criei o Castmates porque todo app de personagens que experimentei exigia uma conta e enviava cada mensagem a um servidor. Um modelo de 3B em um celular parecia pequeno demais para histórias de verdade, então a maior parte do trabalho foi fazê-lo sustentar uma cena: resumos de sessão para que os personagens se lembrem de você, proteções que detectam quando o modelo sai do personagem e muitas rodadas de avaliação em um Mac antes de qualquer lançamento. Os próximos passos são um primeiro download mais rápido e personagens sazonais, começando por três de Halloween.',
      ],
      ar: [
        'بنيت Castmates لأن كل تطبيق شخصيات جربته كان يطلب حسابًا ويرسل كل رسالة إلى خادم. بدا لي نموذج بحجم 3B على الهاتف أصغر من أن يروي قصصًا حقيقية، لذلك ذهب معظم العمل إلى جعله يحافظ على المشهد: ملخصات للجلسات كي تتذكرك الشخصيات، وضوابط تلتقط اللحظة التي يخرج فيها النموذج عن الشخصية، وكثير من جولات التقييم على جهاز Mac قبل إطلاق أي شيء. الخطوة التالية هي تنزيل أول أسرع وشخصيات موسمية، بدءًا بثلاث شخصيات لعيد الهالوين.',
      ],
      ko: [
        '제가 Castmates를 만든 이유는, 써 본 캐릭터 앱이 하나같이 계정을 요구하고 모든 메시지를 서버로 보냈기 때문입니다. 휴대폰에서 돌아가는 3B 모델은 제대로 된 이야기를 하기에 너무 작아 보였기에, 작업의 대부분은 모델이 장면을 유지하게 만드는 데 들어갔습니다. 캐릭터가 나를 기억하도록 하는 세션 요약, 모델이 캐릭터에서 벗어나는 것을 잡아내는 가드, 그리고 출시 전에 Mac에서 돌린 많은 평가 실행입니다. 다음은 더 빠른 첫 다운로드와 시즌 한정 캐릭터이며, 먼저 할로윈 캐릭터 세 개를 선보입니다.',
      ],
    },
  },
}
