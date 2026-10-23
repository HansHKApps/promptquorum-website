// Local AI App Directory — Obscurify (categories: general-chat-clients; layers: web + mobile)
// Added 2026-10-23 at the owner's request. Maker feedback received 2026-10-23 (Obscurify.ai media relations + founder Tony Davis):
// name is "Obscurify.ai" (plain "Obscurify" is an unrelated Spotify stats app); service launched Nov 2023 as CryptoTalks, renamed July 2025,
// listed on Monerica since March 2024 (maker's statements, not independently verified); GitHub repos are new only because the clients were published 2026-10-21.
// Verified on 2026-10-23 against: the official website obscurify.ai (home, /about, /pricing, /privacy, /blog, /tutorials),
// the GitHub organisation github.com/Obscurify-ai (web_client: GPL-3.0, created 2026-10-21, last push 2026-10-21, 0 stars, no
// releases; obscurify-android: GPL-3.0, created 2026-10-21, releases v0.4.0 and v0.4.1 on 2026-10-21 with asset obscurify-0.4.1.apk).
// Product facts as the site states them: anonymous AI chat ("your VPN for AI") with 200+ models behind one account number (no email,
// phone or password); plans Guest (free, up to 30 messages an hour, one open model), Pay As You Go ($0/mo, prepaid balance),
// Casual ($20/mo, $15 usage included), Pro ($45/mo, $35 usage included, OpenAI-compatible API, uncensored models); payments by
// blind vouchers (Monero, Bitcoin, Lightning via the operator's own BTCPay server, or card via Stripe); optional local mode that
// runs GGUF models in the browser (llama.cpp compiled to WebAssembly, BrowserAgentKit, Apache-2.0); Tor hidden service.
// Privacy policy last updated 2026-10-22: chat prompts and replies are not saved on the servers, IP address and user agent kept 30 days,
// providers OpenRouter (zero-data-retention routes) and NanoGPT. The operator entity, address and jurisdiction are not stated anywhere
// on the site. The model catalog page (/model_cards) renders client-side and was not readable, so no local model list is stated.
// There is no App Store or Google Play listing; the Android app is a sideloaded APK from GitHub Releases. Prices are USD only.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'obscurify',
  name: 'Obscurify.ai',
  categories: ['general-chat-clients'],
  interfaces: ['web', 'mobile'],
  locality: 'hybrid', // default is cloud models via the operator's servers; optional local mode runs GGUF models in the browser
  platforms: ['web', 'android'], // website (any browser, plus a Tor hidden service); Android APK from GitHub Releases
  worksWith: ['OpenRouter', 'NanoGPT', 'llama.cpp'], // privacy policy names the two providers; local mode uses llama.cpp compiled to WebAssembly
  engine: 'builtin', // cloud routing is the operator's own; local mode ships its own in-browser engine
  license: 'GPL-3.0 (clients); server not published', // web client and Android app are GPL-3.0; no server repository found
  price: 'freemium', // free guest chat; Pay As You Go prepaid balance; Casual $20/mo; Pro $45/mo
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // only local mode uses the device; depends on the model loaded
  stars: 0, // github.com/Obscurify-ai/web_client, read 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['chat'],
  url: 'obscurify.ai',
  storeLinks: {
    github: 'https://github.com/Obscurify-ai',
    web: 'https://obscurify.ai',
  },
  installEffort: 'hosted',
  installOn: ['web'],
  installEvidence:
    'obscurify.ai opens in the browser with guest chat and no sign-up (home and /pricing, read 2026-10-23); the Android app is a separate APK (obscurify-0.4.1.apk on GitHub Releases) that has to be sideloaded — no Google Play listing was found.',
  tagline: {
    en: 'Anonymous AI chat in the browser and on Android: 200+ cloud models behind a random account number, paid with unlinkable vouchers, plus an optional mode that runs GGUF models locally',
    de: 'Anonymer KI-Chat im Browser und auf Android: über 200 Cloud-Modelle hinter einer zufälligen Kontonummer, bezahlt mit nicht verknüpfbaren Gutscheinen, dazu ein optionaler Modus für lokale GGUF-Modelle',
    fr: 'Chat IA anonyme dans le navigateur et sur Android : plus de 200 modèles cloud derrière un numéro de compte aléatoire, payés par bons non traçables, avec un mode optionnel exécutant des modèles GGUF en local',
    ja: 'ブラウザとAndroidで使える匿名AIチャット。ランダムなアカウント番号の裏で200以上のクラウドモデルを利用でき、追跡できないバウチャーで支払い。GGUFモデルをローカル実行する任意モードも搭載',
    zh: '浏览器和 Android 上的匿名 AI 聊天：随机账号背后提供 200 多个云端模型，用无法关联的代金券付款，另有可选的本地 GGUF 模型模式',
    es: 'Chat de IA anónimo en el navegador y en Android: más de 200 modelos en la nube tras un número de cuenta aleatorio, pagados con vales no vinculables, y un modo opcional que ejecuta modelos GGUF en local',
    pt: 'Chat de IA anônimo no navegador e no Android: mais de 200 modelos na nuvem atrás de um número de conta aleatório, pagos com vouchers não vinculáveis, mais um modo opcional que roda modelos GGUF localmente',
    ar: 'دردشة ذكاء اصطناعي مجهولة الهوية في المتصفح وعلى Android: أكثر من 200 نموذج سحابي خلف رقم حساب عشوائي، ويُدفع ثمنها بقسائم لا يمكن ربطها بالدافع، مع وضع اختياري لتشغيل نماذج GGUF محليًا',
    ko: '브라우저와 Android에서 쓰는 익명 AI 채팅: 무작위 계정 번호 뒤에서 200개 이상의 클라우드 모델을 제공하고 연결할 수 없는 바우처로 결제하며, GGUF 모델을 로컬로 실행하는 선택 모드도 지원',
  },
  // Each value taken from the Android README (image attachments) on 2026-10-23; a missing key = not stated, never false.
  compare: { visionInput: true },
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-21', // GitHub Releases: obscurify-android v0.4.1 published 2026-10-21 (web_client last push the same day), read 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/Obscurify-ai/obscurify-android/releases/tag/v0.4.1',
  founderReviewedDate: '2026-10-23', // maker's media relations team reviewed the finished review, corrected name + history, said the rest matches what they publish; drives the Founder-reviewed banner + star
  reviewSlug: 'obscurify-review',
  pqReview: {
    date: '2026-10-23',
    version: '0.4.1', // Android app version; the website and web client carry no version number
    versionSourceUrl: 'https://github.com/Obscurify-ai/obscurify-android/releases/tag/v0.4.1',
  },
  verdict:
    'Best for people who want to use cloud AI models without an email, phone number or identity and can accept a service whose operator is not named and whose "no logs" claim still includes 30-day IP retention; limited by paid plans for frontier and uncensored models, a recently published public codebase, and an Android app that has to be sideloaded',
  founder: {
    who: {
      en: 'Tony Davis, founder of Obscurify.ai',
      de: 'Tony Davis, Gründer von Obscurify.ai',
      fr: 'Tony Davis, fondateur d\'Obscurify.ai',
      ja: 'Tony Davis氏、Obscurify.ai創業者',
      zh: 'Tony Davis,Obscurify.ai 创始人',
      es: 'Tony Davis, fundador de Obscurify.ai',
      pt: 'Tony Davis, fundador da Obscurify.ai',
      ar: 'Tony Davis، مؤسس Obscurify.ai',
      ko: 'Tony Davis, Obscurify.ai 창립자',
    },
    providedDate: '2026-10-23',
    why: {
      en: 'Most AI chat services know exactly who you are: your email, your phone number, your card, and every question you have asked. Obscurify.ai started in 2023 as a way to pay for AI with Monero, and grew into a rule we design everything around: we would rather not have data than promise to protect it.',
      de: 'Die meisten KI-Chatdienste wissen genau, wer Sie sind: Ihre E-Mail-Adresse, Ihre Telefonnummer, Ihre Karte und jede Frage, die Sie gestellt haben. Obscurify.ai ist 2023 als Möglichkeit entstanden, KI mit Monero zu bezahlen, und daraus wurde eine Regel, an der wir alles ausrichten: Wir haben lieber keine Daten, als zu versprechen, sie zu schützen.',
      fr: 'La plupart des services de chat IA savent exactement qui vous êtes : votre e-mail, votre numéro de téléphone, votre carte et chaque question que vous avez posée. Obscurify.ai est né en 2023 comme un moyen de payer l\'IA avec Monero, puis est devenu une règle autour de laquelle nous concevons tout : nous préférons ne pas avoir de données plutôt que de promettre de les protéger.',
      ja: 'ほとんどのAIチャットサービスは、あなたが誰なのかを正確に把握しています。メールアドレス、電話番号、カード、そしてこれまでにした質問のすべてです。Obscurify.aiは2023年に、Moneroを使ってAIの料金を支払う手段として始まり、やがてすべての設計の軸となるルールへと育ちました。データを守ると約束するより、そもそもデータを持たないほうがよい、というルールです。',
      zh: '大多数 AI 聊天服务清楚地知道你是谁:你的邮箱、手机号、银行卡,以及你问过的每一个问题。Obscurify.ai 于 2023 年起步,最初只是一种用 Monero 支付 AI 费用的方式,后来成为我们设计一切所遵循的原则:与其承诺保护数据,我们宁愿不持有数据。',
      es: 'La mayoría de los servicios de chat con IA saben exactamente quién eres: tu correo electrónico, tu número de teléfono, tu tarjeta y cada pregunta que has hecho. Obscurify.ai nació en 2023 como una forma de pagar la IA con Monero y se convirtió en una regla en torno a la cual diseñamos todo: preferimos no tener datos a prometer protegerlos.',
      pt: 'A maioria dos serviços de chat com IA sabe exatamente quem você é: seu e-mail, seu número de telefone, seu cartão e cada pergunta que você já fez. A Obscurify.ai começou em 2023 como uma forma de pagar por IA com Monero e virou uma regra em torno da qual projetamos tudo: preferimos não ter dados a prometer protegê-los.',
      ar: 'تعرف معظم خدمات الدردشة بالذكاء الاصطناعي من أنت بالضبط: بريدك الإلكتروني، ورقم هاتفك، وبطاقتك، وكل سؤال طرحته. بدأت Obscurify.ai عام 2023 كوسيلة للدفع مقابل الذكاء الاصطناعي بعملة Monero، ثم أصبحت قاعدة نصمّم كل شيء حولها: نفضّل ألا نملك البيانات على أن نَعِد بحمايتها.',
      ko: '대부분의 AI 채팅 서비스는 여러분이 누구인지 정확히 압니다. 이메일, 전화번호, 카드, 그리고 지금까지 한 모든 질문까지 알고 있습니다. Obscurify.ai는 2023년에 Monero로 AI 요금을 결제하는 방법으로 시작했고, 이제는 모든 것을 설계하는 기준이 되는 원칙으로 자랐습니다. 데이터를 보호하겠다고 약속하느니 차라리 데이터를 갖지 않겠다는 것입니다.',
    },
    pullQuote: {
      en: '“Obscurify.ai started in 2023 as a way to pay for AI with Monero, and grew into a rule we design everything around: we would rather not have data than promise to protect it.”',
      de: '„Obscurify.ai ist 2023 als Möglichkeit entstanden, KI mit Monero zu bezahlen, und daraus wurde eine Regel, an der wir alles ausrichten: Wir haben lieber keine Daten, als zu versprechen, sie zu schützen.“',
      fr: '« Obscurify.ai est né en 2023 comme un moyen de payer l\'IA avec Monero, puis est devenu une règle autour de laquelle nous concevons tout : nous préférons ne pas avoir de données plutôt que de promettre de les protéger. »',
      ja: '「Obscurify.aiは2023年に、Moneroを使ってAIの料金を支払う手段として始まり、やがてすべての設計の軸となるルールへと育ちました。データを守ると約束するより、そもそもデータを持たないほうがよい、というルールです。」',
      zh: '“Obscurify.ai 于 2023 年起步,最初只是一种用 Monero 支付 AI 费用的方式,后来成为我们设计一切所遵循的原则:与其承诺保护数据,我们宁愿不持有数据。”',
      es: '“Obscurify.ai nació en 2023 como una forma de pagar la IA con Monero y se convirtió en una regla en torno a la cual diseñamos todo: preferimos no tener datos a prometer protegerlos.”',
      pt: '“A Obscurify.ai começou em 2023 como uma forma de pagar por IA com Monero e virou uma regra em torno da qual projetamos tudo: preferimos não ter dados a prometer protegê-los.”',
      ar: '«بدأت Obscurify.ai عام 2023 كوسيلة للدفع مقابل الذكاء الاصطناعي بعملة Monero، ثم أصبحت قاعدة نصمّم كل شيء حولها: نفضّل ألا نملك البيانات على أن نَعِد بحمايتها.»',
      ko: '"Obscurify.ai는 2023년에 Monero로 AI 요금을 결제하는 방법으로 시작했고, 이제는 모든 것을 설계하는 기준이 되는 원칙으로 자랐습니다. 데이터를 보호하겠다고 약속하느니 차라리 데이터를 갖지 않겠다는 것입니다."',
    },
    fullQuote: {
      en: ['“Most AI chat services know exactly who you are: your email, your phone number, your card, and every question you have asked. Obscurify.ai started in 2023 as a way to pay for AI with Monero, and grew into a rule we design everything around: we would rather not have data than promise to protect it. That is why accounts are just a random number, chats are not stored on our servers, and payments go through blind-signed vouchers, so we cannot link a payment to an account. Next we want to move more of the work onto the user\'s device: faster and larger local models, more open-source code, and ways for users to verify our claims rather than trust them.”'],
      de: ['„Die meisten KI-Chatdienste wissen genau, wer Sie sind: Ihre E-Mail-Adresse, Ihre Telefonnummer, Ihre Karte und jede Frage, die Sie gestellt haben. Obscurify.ai ist 2023 als Möglichkeit entstanden, KI mit Monero zu bezahlen, und daraus wurde eine Regel, an der wir alles ausrichten: Wir haben lieber keine Daten, als zu versprechen, sie zu schützen. Deshalb sind Konten nur eine Zufallszahl, Chats werden nicht auf unseren Servern gespeichert und Zahlungen laufen über blind signierte Gutscheine, sodass wir keine Zahlung einem Konto zuordnen können. Als Nächstes wollen wir mehr Arbeit auf das Gerät der Nutzer verlagern: schnellere und größere lokale Modelle, mehr Open-Source-Code und Wege, wie Nutzer unsere Aussagen überprüfen können, statt uns zu vertrauen.“'],
      fr: ['« La plupart des services de chat IA savent exactement qui vous êtes : votre e-mail, votre numéro de téléphone, votre carte et chaque question que vous avez posée. Obscurify.ai est né en 2023 comme un moyen de payer l\'IA avec Monero, puis est devenu une règle autour de laquelle nous concevons tout : nous préférons ne pas avoir de données plutôt que de promettre de les protéger. C\'est pourquoi les comptes ne sont qu\'un numéro aléatoire, les conversations ne sont pas stockées sur nos serveurs et les paiements passent par des bons signés à l\'aveugle, de sorte que nous ne pouvons pas relier un paiement à un compte. Ensuite, nous voulons déplacer davantage de travail vers l\'appareil de l\'utilisateur : des modèles locaux plus rapides et plus grands, davantage de code open source et des moyens pour que les utilisateurs vérifient nos affirmations plutôt que de nous croire sur parole. »'],
      ja: ['「ほとんどのAIチャットサービスは、あなたが誰なのかを正確に把握しています。メールアドレス、電話番号、カード、そしてこれまでにした質問のすべてです。Obscurify.aiは2023年に、Moneroを使ってAIの料金を支払う手段として始まり、やがてすべての設計の軸となるルールへと育ちました。データを守ると約束するより、そもそもデータを持たないほうがよい、というルールです。そのため、アカウントはランダムな番号にすぎず、チャットは当社のサーバーに保存されず、支払いはブラインド署名されたバウチャーを通じて行われるので、支払いとアカウントを結び付けることができません。次の目標は、より多くの処理をユーザーのデバイス側に移すことです。より高速で大規模なローカルモデル、より多くのオープンソースコード、そして利用者が私たちの主張を信じるのではなく自分で検証できる手段を目指します。」'],
      zh: ['“大多数 AI 聊天服务清楚地知道你是谁:你的邮箱、手机号、银行卡,以及你问过的每一个问题。Obscurify.ai 于 2023 年起步,最初只是一种用 Monero 支付 AI 费用的方式,后来成为我们设计一切所遵循的原则:与其承诺保护数据,我们宁愿不持有数据。因此,账号只是一个随机数字,聊天内容不存储在我们的服务器上,付款通过盲签名代金券进行,所以我们无法把某笔付款与某个账号关联起来。接下来,我们希望把更多工作转移到用户的设备上:更快、更大的本地模型,更多开源代码,以及让用户自行验证而不是单纯相信我们说法的方式。”'],
      es: ['“La mayoría de los servicios de chat con IA saben exactamente quién eres: tu correo electrónico, tu número de teléfono, tu tarjeta y cada pregunta que has hecho. Obscurify.ai nació en 2023 como una forma de pagar la IA con Monero y se convirtió en una regla en torno a la cual diseñamos todo: preferimos no tener datos a prometer protegerlos. Por eso las cuentas son solo un número aleatorio, los chats no se almacenan en nuestros servidores y los pagos pasan por vales firmados a ciegas, de modo que no podemos vincular un pago a una cuenta. A continuación queremos trasladar más trabajo al dispositivo del usuario: modelos locales más rápidos y más grandes, más código abierto y formas de que los usuarios verifiquen nuestras afirmaciones en lugar de confiar en ellas.”'],
      pt: ['“A maioria dos serviços de chat com IA sabe exatamente quem você é: seu e-mail, seu número de telefone, seu cartão e cada pergunta que você já fez. A Obscurify.ai começou em 2023 como uma forma de pagar por IA com Monero e virou uma regra em torno da qual projetamos tudo: preferimos não ter dados a prometer protegê-los. Por isso as contas são apenas um número aleatório, os chats não ficam armazenados em nossos servidores e os pagamentos passam por vouchers com assinatura cega, de modo que não conseguimos vincular um pagamento a uma conta. O próximo passo é levar mais trabalho para o dispositivo do usuário: modelos locais mais rápidos e maiores, mais código aberto e formas de os usuários verificarem nossas afirmações em vez de confiar nelas.”'],
      ar: ['«تعرف معظم خدمات الدردشة بالذكاء الاصطناعي من أنت بالضبط: بريدك الإلكتروني، ورقم هاتفك، وبطاقتك، وكل سؤال طرحته. بدأت Obscurify.ai عام 2023 كوسيلة للدفع مقابل الذكاء الاصطناعي بعملة Monero، ثم أصبحت قاعدة نصمّم كل شيء حولها: نفضّل ألا نملك البيانات على أن نَعِد بحمايتها. ولهذا فإن الحسابات مجرد رقم عشوائي، ولا تُخزَّن المحادثات على خوادمنا، وتمر المدفوعات عبر قسائم موقّعة بتوقيع أعمى، فلا نستطيع ربط أي دفعة بأي حساب. وفي المرحلة التالية نريد نقل مزيد من العمل إلى جهاز المستخدم: نماذج محلية أسرع وأكبر، ومزيدًا من الشيفرة مفتوحة المصدر، ووسائل تتيح للمستخدمين التحقق من ادعاءاتنا بدل الاكتفاء بالثقة بها.»'],
      ko: ['"대부분의 AI 채팅 서비스는 여러분이 누구인지 정확히 압니다. 이메일, 전화번호, 카드, 그리고 지금까지 한 모든 질문까지 알고 있습니다. Obscurify.ai는 2023년에 Monero로 AI 요금을 결제하는 방법으로 시작했고, 이제는 모든 것을 설계하는 기준이 되는 원칙으로 자랐습니다. 데이터를 보호하겠다고 약속하느니 차라리 데이터를 갖지 않겠다는 것입니다. 그래서 계정은 무작위 번호일 뿐이고, 채팅은 저희 서버에 저장되지 않으며, 결제는 블라인드 서명 바우처를 통해 이루어지므로 결제를 계정과 연결할 수 없습니다. 다음 목표는 더 많은 작업을 사용자의 기기로 옮기는 것입니다. 더 빠르고 큰 로컬 모델, 더 많은 오픈소스 코드, 그리고 사용자가 저희 주장을 믿는 대신 직접 검증할 수 있는 방법을 만들겠습니다."'],
    },
  },
}
