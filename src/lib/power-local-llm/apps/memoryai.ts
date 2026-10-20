// Local AI App Directory — MemoryAI: Offline Private AI (layer: mobile)
// Added 2026-10-19 after the developer (Alessandro Facchini, Facchinits) wrote to hello@promptquorum.com on 2026-10-18
// asking to be included next to the PocketPal / Off Grid / Private Mind / AI Edge Gallery reviews. Facts below were
// re-verified from primary sources on 2026-10-19, not taken from the email: the App Store listing id6758719586
// (iTunes lookup: v1.0.52, released 2026-10-18, iOS 16.4+, free, 198.7 MB, EN/FR/DE/IT/PT/ES, first release 2026-03-30,
// storefront names DE "MemoryAI: Private Offline-KI" and BR "MemoryAI: a IA que lembra"), the Google Play listing
// (com.ts.memoryai — 1K+ downloads, updated 2026-10-18, Data safety "No data shared with third parties", may collect
// "App info and performance" and "Device or other IDs", page data lists build 1.0.54), the privacy policy at
// alessandrofacchini.github.io/memoryai-privacy/ (last updated 2026-06-30) and github.com/alessandrofacchini/memoryai-feedback
// (issue tracker + README only — NO source code, so the licence is recorded as closed source).
// 2026-10-19 (later): the developer reviewed the draft and corrected it: no in-app purchases (the policy's purchases paragraph was out of date and the policy
// was updated 2026-10-19), LiteRT also runs Qwen 2.5 1.5B / DeepSeek R1 Distill 1.5B / Phi-4 Mini, Android 9+, Android build 1.0.54 since 2026-10-18, iPhone 1.0.52.
// Network use per the updated policy: TelemetryDeck usage events and Sentry crash reports (no chat content, per the developer); OneSignal push and, on Android
// only, Google Analytics for Firebase after the in-app "Privacy & Notifications" prompt is accepted.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'memoryai',
  name: 'MemoryAI',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['mobile'],
  locality: 'local', // chat, documents, voice and memories run on-device; model downloads (Hugging Face), optional backup, analytics and crash reports use the network
  platforms: ['ios', 'android'], // App Store listing also shows Apple-silicon Mac ("not verified for macOS") and visionOS; no native desktop build
  worksWith: ['Hugging Face', 'llama.cpp', 'LiteRT'], // GGUF import from Hugging Face; two engines per the listings: llama.cpp and Google's MediaPipe/LiteRT
  engine: 'builtin',
  license: 'Closed source', // no source repository; github.com/alessandrofacchini/memoryai-feedback holds issues and a README only
  price: 'free', // free on both stores; listings and the developer say no ads, subscriptions or in-app purchases
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // both listings: "works on devices with 4 GB+ RAM"; models are 0.3–4 GB downloads
  stars: null,
  addedDate: '2026-10-19',
  status: 'listed',
  uses: ['phone', 'chat', 'docs', 'audio'],
  url: 'alessandrofacchini.github.io/memoryai', // product page (EN/IT) announced by the developer 2026-10-20; privacy policy stays at /memoryai-privacy/
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.ts.memoryai',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6758719586 (free, iOS 16.4+, 198.7 MB) and Google Play listing com.ts.memoryai (free, 1K+ downloads), read 2026-10-19',
  tagline: {
    en: 'Free offline AI chat for iPhone and Android with document Q&A, editable Agent Memory, hands-free voice and a PIN-locked Kid Mode',
    de: 'Kostenloser Offline-KI-Chat für iPhone und Android mit Dokumentenfragen, editierbarem Agent Memory, Freisprech-Sprachmodus und PIN-geschütztem Kindermodus',
    fr: "Chat IA gratuit et hors ligne pour iPhone et Android, avec questions sur vos documents, mémoire d'agent modifiable, mode vocal mains libres et mode enfant protégé par PIN",
    ja: 'iPhoneとAndroid向けの無料オフラインAIチャット。文書Q&A、編集可能なエージェントメモリ、ハンズフリー音声、PIN付きキッズモードに対応',
    zh: '面向iPhone和Android的免费离线AI聊天应用，支持文档问答、可编辑的智能体记忆、免提语音和PIN锁定的儿童模式',
    es: 'Chat de IA gratuito y offline para iPhone y Android, con preguntas sobre documentos, memoria de agente editable, voz manos libres y modo infantil con PIN',
    pt: 'Chat de IA gratuito e offline para iPhone e Android, com perguntas sobre documentos, memória de agente editável, voz mãos livres e modo infantil com PIN',
    ar: 'دردشة ذكاء اصطناعي مجانية تعمل دون اتصال لـ iPhone وAndroid، مع أسئلة عن المستندات وذاكرة وكيل قابلة للتعديل ووضع صوتي حر اليدين ووضع أطفال برمز PIN',
    ko: 'iPhone과 Android용 무료 오프라인 AI 채팅. 문서 질의응답, 편집 가능한 에이전트 메모리, 핸즈프리 음성, PIN 잠금 키즈 모드 지원',
  },
  // Comparison attributes, each read from the App Store/Play descriptions on 2026-10-19; a missing key = not stated, never false.
  // voice = on-device voice input plus text-to-speech and a hands-free continuous mode; visionInput = "Image Understanding"
  // with Vision AI models; importModels = custom GGUF import from Hugging Face.
  compare: { offline: true, importModels: true, modelDownloads: true, visionInput: true, voice: true },
  lastVerifiedDate: '2026-10-19',
  lastUpstreamUpdate: '2026-10-18', // App Store currentVersionReleaseDate 2026-10-18 (v1.0.52); Google Play "Updated on Oct 18, 2026"
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586',
  founderReviewedDate: '2026-10-19', // Alessandro Facchini reviewed the draft and supplied technical corrections plus a maker note 2026-10-19; drives the amber Founder-reviewed banner + star
  founder: {
    who: {
      en: 'Alessandro Facchini, developer',
      de: 'Alessandro Facchini, Entwickler',
      fr: 'Alessandro Facchini, développeur',
      ja: 'Alessandro Facchini氏、開発者',
      zh: 'Alessandro Facchini,开发者',
      es: 'Alessandro Facchini, desarrollador',
      pt: 'Alessandro Facchini, desenvolvedor',
      ar: 'Alessandro Facchini، مطوّر التطبيق',
      ko: 'Alessandro Facchini, 개발자',
    },
    providedDate: '2026-10-19',
    why: {
      en: 'I built MemoryAI for people who want an AI assistant without handing their words to a server. Once a model is downloaded, it answers with no internet connection, and the conversation stays on the phone.',
      de: 'Ich habe MemoryAI für Menschen gebaut, die einen KI-Assistenten wollen, ohne ihre Worte einem Server zu überlassen. Sobald ein Modell heruntergeladen ist, antwortet es ohne Internetverbindung, und das Gespräch bleibt auf dem Telefon.',
      fr: 'J\'ai créé MemoryAI pour les personnes qui veulent un assistant IA sans confier leurs mots à un serveur. Une fois un modèle téléchargé, il répond sans connexion internet, et la conversation reste sur le téléphone.',
      ja: '私がMemoryAIを作ったのは、自分の言葉をサーバーに渡さずにAIアシスタントを使いたい人のためです。モデルをダウンロードすれば、インターネット接続なしで応答し、会話は端末の中にとどまります。',
      zh: '我做 MemoryAI,是为了那些想要 AI 助手、却不想把自己的话交给服务器的人。模型下载完成后,它无需联网即可回答,对话也留在手机上。',
      es: 'Creé MemoryAI para quienes quieren un asistente de IA sin entregar sus palabras a un servidor. Una vez descargado un modelo, responde sin conexión a internet y la conversación se queda en el teléfono.',
      pt: 'Criei o MemoryAI para quem quer um assistente de IA sem entregar suas palavras a um servidor. Depois que um modelo é baixado, ele responde sem conexão com a internet, e a conversa fica no celular.',
      ar: 'بنيتُ MemoryAI لمن يريدون مساعداً بالذكاء الاصطناعي دون تسليم كلماتهم إلى خادم. فبعد تنزيل النموذج يجيب دون اتصال بالإنترنت، وتبقى المحادثة على الهاتف.',
      ko: '저는 자신의 말을 서버에 넘기지 않고 AI 어시스턴트를 쓰고 싶은 사람들을 위해 MemoryAI를 만들었습니다. 모델을 내려받고 나면 인터넷 연결 없이 답하며, 대화는 휴대폰에 남습니다.',
    },
    pullQuote: {
      en: 'Two ideas shape it. The first is a memory you can see: the app can remember what you tell it, in your own words, and you can open that memory, correct it or delete it at any time. The second is family use: Kid Mode locks the model and the settings behind a parent PIN and keeps replies age-appropriate.',
      de: 'Zwei Ideen prägen die App. Die erste ist ein Gedächtnis, das man sehen kann: Die App kann sich merken, was Sie ihr sagen, in Ihren eigenen Worten, und Sie können dieses Gedächtnis jederzeit öffnen, korrigieren oder löschen. Die zweite ist die Nutzung in der Familie: Der Kindermodus sperrt Modell und Einstellungen hinter einer Eltern-PIN und hält die Antworten altersgerecht.',
      fr: 'Deux idées la façonnent. La première est une mémoire que l\'on peut voir : l\'application peut retenir ce que vous lui dites, avec vos propres mots, et vous pouvez ouvrir cette mémoire, la corriger ou la supprimer à tout moment. La seconde est l\'usage en famille : le Kid Mode verrouille le modèle et les réglages derrière un code PIN parental et garde des réponses adaptées à l\'âge.',
      ja: 'このアプリには2つの考え方があります。1つ目は、目に見えるメモリです。アプリは、あなたが伝えたことをあなた自身の言葉で記憶でき、そのメモリはいつでも開いて、修正したり削除したりできます。2つ目は家族での利用です。キッズモードは、モデルと設定を保護者用PINの内側にロックし、年齢にふさわしい返答を保ちます。',
      zh: '它由两个理念塑造。第一是看得见的记忆:应用可以用你自己的话记住你告诉它的内容,你可以随时打开这份记忆,修改或删除它。第二是家庭使用:儿童模式把模型和设置锁在家长 PIN 之后,并让回复适合孩子的年龄。',
      es: 'Dos ideas le dan forma. La primera es una memoria que puedes ver: la app puede recordar lo que le cuentas, con tus propias palabras, y puedes abrir esa memoria, corregirla o borrarla en cualquier momento. La segunda es el uso en familia: el Kid Mode bloquea el modelo y los ajustes tras un PIN de madre o padre y mantiene las respuestas adecuadas a la edad.',
      pt: 'Duas ideias o moldam. A primeira é uma memória que você pode ver: o app pode lembrar o que você conta, com as suas próprias palavras, e você pode abrir essa memória, corrigi-la ou apagá-la a qualquer momento. A segunda é o uso em família: o Modo Criança trava o modelo e as configurações atrás de um PIN dos responsáveis e mantém as respostas adequadas à idade.',
      ar: 'تشكّله فكرتان. الأولى ذاكرة يمكنك رؤيتها: يستطيع التطبيق أن يتذكر ما تخبره به، بكلماتك أنت، ويمكنك فتح هذه الذاكرة وتصحيحها أو حذفها في أي وقت. والثانية الاستخدام العائلي: يقفل وضع الأطفال النموذج والإعدادات خلف رمز PIN للوالدين ويُبقي الردود مناسبة للعمر.',
      ko: '이 앱을 이루는 아이디어는 두 가지입니다. 첫째는 눈으로 볼 수 있는 메모리입니다. 앱은 여러분이 말한 내용을 여러분 자신의 표현으로 기억할 수 있고, 그 메모리를 언제든 열어 고치거나 삭제할 수 있습니다. 둘째는 가족 사용입니다. 키즈 모드는 모델과 설정을 부모 PIN 뒤에 잠그고 답변을 나이에 맞게 유지합니다.',
    },
    fullQuote: {
      en: [
        'I built MemoryAI for people who want an AI assistant without handing their words to a server. Once a model is downloaded, it answers with no internet connection, and the conversation stays on the phone.',
        'Two ideas shape it. The first is a memory you can see: the app can remember what you tell it, in your own words, and you can open that memory, correct it or delete it at any time. The second is family use: Kid Mode locks the model and the settings behind a parent PIN and keeps replies age-appropriate.',
        'It is free, with no account and no ads, and it speaks six languages. I build it in Italy with a small team, and two testers try new builds on real Android phones and iPhones. Next on the list: tools the model can use on the phone, now in testing, and on iPhone the faster first answer that Android users already have.',
      ],
      de: [
        'Ich habe MemoryAI für Menschen gebaut, die einen KI-Assistenten wollen, ohne ihre Worte einem Server zu überlassen. Sobald ein Modell heruntergeladen ist, antwortet es ohne Internetverbindung, und das Gespräch bleibt auf dem Telefon.',
        'Zwei Ideen prägen die App. Die erste ist ein Gedächtnis, das man sehen kann: Die App kann sich merken, was Sie ihr sagen, in Ihren eigenen Worten, und Sie können dieses Gedächtnis jederzeit öffnen, korrigieren oder löschen. Die zweite ist die Nutzung in der Familie: Der Kindermodus sperrt Modell und Einstellungen hinter einer Eltern-PIN und hält die Antworten altersgerecht.',
        'Sie ist kostenlos, ohne Konto und ohne Werbung, und sie spricht sechs Sprachen. Ich entwickle sie in Italien mit einem kleinen Team, und zwei Tester probieren neue Versionen auf echten Android-Telefonen und iPhones aus. Als Nächstes stehen Werkzeuge an, die das Modell auf dem Telefon nutzen kann (derzeit in der Testphase), und auf dem iPhone die schnellere erste Antwort, die Android-Nutzer bereits haben.',
      ],
      fr: [
        'J\'ai créé MemoryAI pour les personnes qui veulent un assistant IA sans confier leurs mots à un serveur. Une fois un modèle téléchargé, il répond sans connexion internet, et la conversation reste sur le téléphone.',
        'Deux idées la façonnent. La première est une mémoire que l\'on peut voir : l\'application peut retenir ce que vous lui dites, avec vos propres mots, et vous pouvez ouvrir cette mémoire, la corriger ou la supprimer à tout moment. La seconde est l\'usage en famille : le Kid Mode verrouille le modèle et les réglages derrière un code PIN parental et garde des réponses adaptées à l\'âge.',
        'Elle est gratuite, sans compte et sans publicité, et elle parle six langues. Je la développe en Italie avec une petite équipe, et deux testeurs essaient les nouvelles versions sur de vrais téléphones Android et iPhone. Prochaines étapes : des outils que le modèle peut utiliser sur le téléphone, actuellement en test, et sur iPhone la première réponse plus rapide dont bénéficient déjà les utilisateurs Android.',
      ],
      ja: [
        '私がMemoryAIを作ったのは、自分の言葉をサーバーに渡さずにAIアシスタントを使いたい人のためです。モデルをダウンロードすれば、インターネット接続なしで応答し、会話は端末の中にとどまります。',
        'このアプリには2つの考え方があります。1つ目は、目に見えるメモリです。アプリは、あなたが伝えたことをあなた自身の言葉で記憶でき、そのメモリはいつでも開いて、修正したり削除したりできます。2つ目は家族での利用です。キッズモードは、モデルと設定を保護者用PINの内側にロックし、年齢にふさわしい返答を保ちます。',
        '無料で、アカウントも広告もなく、6言語に対応しています。私はイタリアで小さなチームとともに開発しており、2人のテスターが実際のAndroid端末とiPhoneで新しいビルドを試しています。次の予定は、端末上でモデルが使えるツール(現在テスト中)と、iPhoneでの、Androidではすでに実現している、より速い最初の応答です。',
      ],
      zh: [
        '我做 MemoryAI,是为了那些想要 AI 助手、却不想把自己的话交给服务器的人。模型下载完成后,它无需联网即可回答,对话也留在手机上。',
        '它由两个理念塑造。第一是看得见的记忆:应用可以用你自己的话记住你告诉它的内容,你可以随时打开这份记忆,修改或删除它。第二是家庭使用:儿童模式把模型和设置锁在家长 PIN 之后,并让回复适合孩子的年龄。',
        '它免费,无需账号,没有广告,支持六种语言。我在意大利与一个小团队一起开发它,两位测试人员会在真实的 Android 手机和 iPhone 上试用新版本。接下来的计划:让模型在手机上使用的工具(目前在测试中),以及在 iPhone 上实现 Android 用户已经拥有的更快的首次回答。',
      ],
      es: [
        'Creé MemoryAI para quienes quieren un asistente de IA sin entregar sus palabras a un servidor. Una vez descargado un modelo, responde sin conexión a internet y la conversación se queda en el teléfono.',
        'Dos ideas le dan forma. La primera es una memoria que puedes ver: la app puede recordar lo que le cuentas, con tus propias palabras, y puedes abrir esa memoria, corregirla o borrarla en cualquier momento. La segunda es el uso en familia: el Kid Mode bloquea el modelo y los ajustes tras un PIN de madre o padre y mantiene las respuestas adecuadas a la edad.',
        'Es gratuita, sin cuenta ni anuncios, y habla seis idiomas. La desarrollo en Italia con un equipo pequeño, y dos testers prueban las versiones nuevas en teléfonos Android y iPhone reales. Lo siguiente en la lista: herramientas que el modelo pueda usar en el teléfono, ahora en pruebas, y en iPhone la primera respuesta más rápida que ya tienen los usuarios de Android.',
      ],
      pt: [
        'Criei o MemoryAI para quem quer um assistente de IA sem entregar suas palavras a um servidor. Depois que um modelo é baixado, ele responde sem conexão com a internet, e a conversa fica no celular.',
        'Duas ideias o moldam. A primeira é uma memória que você pode ver: o app pode lembrar o que você conta, com as suas próprias palavras, e você pode abrir essa memória, corrigi-la ou apagá-la a qualquer momento. A segunda é o uso em família: o Modo Criança trava o modelo e as configurações atrás de um PIN dos responsáveis e mantém as respostas adequadas à idade.',
        'É gratuito, sem conta e sem anúncios, e fala seis idiomas. Eu o desenvolvo na Itália com uma equipe pequena, e dois testadores experimentam as novas versões em celulares Android e iPhones reais. O que vem a seguir: ferramentas que o modelo pode usar no celular, agora em teste, e, no iPhone, a primeira resposta mais rápida que os usuários de Android já têm.',
      ],
      ar: [
        'بنيتُ MemoryAI لمن يريدون مساعداً بالذكاء الاصطناعي دون تسليم كلماتهم إلى خادم. فبعد تنزيل النموذج يجيب دون اتصال بالإنترنت، وتبقى المحادثة على الهاتف.',
        'تشكّله فكرتان. الأولى ذاكرة يمكنك رؤيتها: يستطيع التطبيق أن يتذكر ما تخبره به، بكلماتك أنت، ويمكنك فتح هذه الذاكرة وتصحيحها أو حذفها في أي وقت. والثانية الاستخدام العائلي: يقفل وضع الأطفال النموذج والإعدادات خلف رمز PIN للوالدين ويُبقي الردود مناسبة للعمر.',
        'التطبيق مجاني، بلا حساب ولا إعلانات، ويدعم ست لغات. أطوّره في إيطاليا مع فريق صغير، ويجرّب مختبِران الإصدارات الجديدة على هواتف أندرويد وiPhone حقيقية. وما يلي في القائمة: أدوات يستطيع النموذج استخدامها على الهاتف وهي قيد الاختبار الآن، وعلى iPhone الإجابة الأولى الأسرع التي يحصل عليها مستخدمو أندرويد بالفعل.',
      ],
      ko: [
        '저는 자신의 말을 서버에 넘기지 않고 AI 어시스턴트를 쓰고 싶은 사람들을 위해 MemoryAI를 만들었습니다. 모델을 내려받고 나면 인터넷 연결 없이 답하며, 대화는 휴대폰에 남습니다.',
        '이 앱을 이루는 아이디어는 두 가지입니다. 첫째는 눈으로 볼 수 있는 메모리입니다. 앱은 여러분이 말한 내용을 여러분 자신의 표현으로 기억할 수 있고, 그 메모리를 언제든 열어 고치거나 삭제할 수 있습니다. 둘째는 가족 사용입니다. 키즈 모드는 모델과 설정을 부모 PIN 뒤에 잠그고 답변을 나이에 맞게 유지합니다.',
        '무료이며 계정과 광고가 없고 6개 언어를 지원합니다. 저는 이탈리아에서 작은 팀과 함께 개발하고 있으며, 테스터 두 명이 실제 Android 폰과 iPhone에서 새 빌드를 시험합니다. 다음 계획은 모델이 휴대폰에서 쓸 수 있는 도구(현재 테스트 중)와, Android 사용자가 이미 누리는 더 빠른 첫 답변을 iPhone에도 제공하는 것입니다.',
      ],
    },
  },
  reviewSlug: 'memoryai-review',
  pqReview: {
    date: '2026-10-19',
    version: '1.0.52',
    versionSourceUrl: 'https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586',
  },
  verdict: 'Best for iPhone and Android users who want a free, account-less offline chat app with document Q&A, an editable on-device memory, hands-free voice and a PIN-locked Kid Mode; limited by being closed source and young (first release 30 March 2026, 1K+ Play downloads), by small 0.3–4 GB models, and by analytics and crash reports that still leave the phone (without chat content, per the developer).',
}
