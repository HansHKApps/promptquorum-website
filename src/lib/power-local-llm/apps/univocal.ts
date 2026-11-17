// Local AI App Directory — Univocal: Mac app that reads text aloud and dictates, both on-device (layer: desktop app, text-to-speech + speech-to-text)
// Added 2026-11-13. Facts verified 2026-11-13 against univocalapp.com (home, /download -> Univocal-0.3.33.dmg, /downloading, /purchase, /changelog,
// /privacy, /alternatives, /guides/read-aloud-mac). The maker's pages were read as text; the disk image itself was not opened or inspected.
// Latest version 0.3.33, dated 2026-11-11 on the changelog (2 days old on 2026-11-13), so the 3-month stale warning is OFF.
// Local claim (home, privacy): "Nothing leaves the Mac", no account, no analytics, no crash reporting; dictation works offline after the first-run download.
// The first launch downloads about 1.2 GB (speech engine packages from pypi.org, models from huggingface.co, a standalone Python from github.com if the Mac has none);
// some read-aloud languages (Korean, German) fetch about 400 MB more. Licence checks go to Lemon Squeezy, the app checks univocalapp.com/updates/appcast.xml about once a day (Sparkle),
// issue reports are sent only when the user presses Send Report. On macOS 26, live typing also uses Apple's on-device SpeechAnalyzer for a draft.
// Models: only Kokoro (read-aloud voices) and Apple's SpeechAnalyzer/Apple voices are named. The dictation recogniser is NOT named (no Whisper or Parakeet mention).
// Prices (USD, /purchase): one-time $39, one licence covers up to 3 Macs, 14-day free trial (no card, no account), 30-day refund; launch code UVLAUNCH $19 and Black Friday code BF2026 $15, both until 30 November 2026.
// Platforms: Apple silicon Mac, macOS 14 or later; no Intel, Windows, iPhone or Android build (the site only offers a notify list). Open source: NOT stated, no repository found.
// Maker: "Univocal, a product of NarNar Labs LLC"; country, founder name and address not stated. Code signing / notarization not stated.
// Not checked: network traffic, accuracy, speed, voice quality, the DMG contents. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'univocal',
  name: 'Univocal',
  categories: ['text-to-speech', 'dictation', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker: both directions run on the Mac and nothing is sent anywhere; the network is used for first-run model downloads, licence checks, daily update checks and optional issue reports
  platforms: ['mac'], // Apple silicon only, macOS 14+; no Intel, Windows, iOS or Android build (home page: notify form only)
  worksWith: ['Kokoro', 'Obsidian'], // Kokoro voices (privacy page); Univocal Connect + Obsidian plugin (changelog 0.3.29); Chrome/Edge/Brave/Vivaldi/Arc read-aloud extension (privacy)
  engine: 'builtin', // runs its own local speech engine on 127.0.0.1:8787 (privacy page); the dictation model is not named by the maker
  license: 'Proprietary (no source repository found)', // no open-source statement or repo on any page read
  price: 'paid', // one-time $39 (launch/Black Friday codes until 2026-11-30), 14-day trial; no subscription
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // Apple silicon + macOS 14 required; no RAM figure stated; ~1.2 GB first-run download
  stars: null, // no public source repository
  addedDate: '2026-11-13',
  status: 'listed',
  uses: ['audio'],
  url: 'univocalapp.com',
  storeLinks: {
    web: 'https://univocalapp.com',
  },
  installEffort: 'installer',
  installEvidence: 'univocalapp.com/download served Univocal-0.3.33.dmg (disk image, about 6.3 MB) and /downloading names the same file, checked 2026-11-13; updates install from inside the app; models (~1.2 GB) download on first launch; DMG contents and signing not inspected',
  tagline: {
    en: 'Mac app that reads selected text aloud and types what you dictate, both on your own Apple silicon Mac, as a one-time purchase with no subscription',
    de: 'Mac-App, die markierten Text vorliest und Diktiertes tippt, beides auf Ihrem eigenen Apple-Silicon-Mac, als Einmalkauf ohne Abo',
    fr: 'Application Mac qui lit à voix haute le texte sélectionné et saisit ce que vous dictez, le tout sur votre Mac Apple silicon, en achat unique sans abonnement',
    ja: '選択したテキストの読み上げと音声入力の両方をお使いのApple siliconのMac上で行うMacアプリ。サブスクなしの買い切り',
    zh: '在你自己的 Apple 芯片 Mac 上朗读选中文字并输入听写内容的 Mac 应用，一次性购买，无需订阅',
    es: 'App para Mac que lee en voz alta el texto seleccionado y escribe lo que dictas, todo en tu propio Mac con Apple silicon, con pago único y sin suscripción',
    pt: 'App para Mac que lê em voz alta o texto selecionado e digita o que você dita, tudo no seu próprio Mac com Apple silicon, em compra única e sem assinatura',
    ar: 'تطبيق لنظام Mac يقرأ النص المحدد بصوت عالٍ ويكتب ما تمليه، كلاهما على جهاز Mac بمعالج Apple silicon الخاص بك، بشراء لمرة واحدة ودون اشتراك',
    ko: '선택한 텍스트를 소리 내어 읽어 주고 받아쓰기한 내용을 입력하는 Mac 앱으로, 둘 다 내 Apple silicon Mac에서 처리하며 구독 없이 한 번 결제합니다',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-13 (home: "32 Languages … read aloud and dictate in any of them"; changelog 0.3.17 "Dictation types as you speak"); a missing key = not stated, never false.
  compare: { languages: 32, realtime: true },
  reviewSlug: 'univocal-review',
  pqReview: {
    date: '2026-11-13',
    version: '0.3.33',
    versionSourceUrl: 'https://univocalapp.com/changelog/',
  },
  verdict: 'Best for Apple silicon Mac users who want one app for both reading text aloud and dictating, with speech processing that stays on their own Mac, and who accept a paid, closed-source app (one-time $39 after a 14-day trial); limited by no Intel, Windows or mobile version, an unnamed dictation model, a roughly 1.2 GB first-run download, and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-13',
  lastUpstreamUpdate: '2026-11-11', // maker changelog: version 0.3.33 dated 2026-11-11; read 2026-11-13
  lastUpstreamUpdateSource: 'https://univocalapp.com/changelog/',
  // 2026-11-16: the maker supplied a comment (no name given). A plain comment is NOT a review of the finished text, so founderReviewedDate stays UNSET (owner rule 2026-10-20).
  founder: {
    who: {
      en: 'The maker of Univocal',
      de: 'Der Entwickler von Univocal',
      fr: 'Le développeur d\'Univocal',
      ja: 'Univocalの開発者',
      zh: 'Univocal 开发者',
      es: 'El desarrollador de Univocal',
      pt: 'O desenvolvedor do Univocal',
      ar: 'مطوّر Univocal',
      ko: 'Univocal 개발자',
    },
    providedDate: '2026-11-16',
    why: {
      en: 'I often mix English and Korean in the same sentence. I built Univocal because I wanted to dictate the way I speak, then listen back to what I\'d written.',
      de: 'Ich mische oft Englisch und Koreanisch im selben Satz. Ich habe Univocal gebaut, weil ich so diktieren wollte, wie ich spreche, und mir dann anhören wollte, was ich geschrieben habe.',
      fr: 'Je mélange souvent l\'anglais et le coréen dans la même phrase. J\'ai créé Univocal parce que je voulais dicter comme je parle, puis réécouter ce que j\'avais écrit.',
      ja: '私は同じ文の中で英語と韓国語を混ぜることがよくあります。話すとおりに音声入力し、書いた内容を聞き返したくて、Univocalを作りました。',
      zh: '我经常在同一句话里混用英语和韩语。我做 Univocal，是因为我想按自己说话的方式听写，然后再听一遍自己写下的内容。',
      es: 'A menudo mezclo inglés y coreano en la misma frase. Creé Univocal porque quería dictar como hablo y luego escuchar lo que había escrito.',
      pt: 'Eu costumo misturar inglês e coreano na mesma frase. Criei o Univocal porque queria ditar do jeito que falo e depois ouvir o que escrevi.',
      ar: 'كثيرًا ما أخلط بين الإنجليزية والكورية في الجملة الواحدة. صنعت Univocal لأنني أردت أن أُملي بالطريقة التي أتحدث بها، ثم أستمع إلى ما كتبته.',
      ko: '저는 같은 문장 안에서 영어와 한국어를 자주 섞어 씁니다. 말하는 대로 받아쓰고, 쓴 내용을 다시 들어 보고 싶어서 Univocal을 만들었습니다.',
    },
    fullQuote: {
      en: [
        'I often mix English and Korean in the same sentence. I built Univocal because I wanted to dictate the way I speak, then listen back to what I\'d written.',
        'I\'d been paying separate subscriptions for dictation and reading. With Univocal, I wanted both in one Mac app. You can dictate where your cursor is and switch languages mid-sentence. Selected or copied text goes into a consistent reading panel that highlights each word as it\'s spoken. Speech processing stays on the Mac and works offline after the initial setup.',
        'One thing in development is a Safari extension for sending pages to Univocal to read. It hasn\'t been released yet.',
      ],
      de: [
        'Ich mische oft Englisch und Koreanisch im selben Satz. Ich habe Univocal gebaut, weil ich so diktieren wollte, wie ich spreche, und mir dann anhören wollte, was ich geschrieben habe.',
        'Ich hatte getrennte Abos fürs Diktieren und fürs Vorlesen bezahlt. Mit Univocal wollte ich beides in einer Mac-App haben. Man diktiert dorthin, wo der Cursor steht, und kann mitten im Satz die Sprache wechseln. Markierter oder kopierter Text landet in einem einheitlichen Lesefenster, das jedes Wort beim Vorlesen hervorhebt. Die Sprachverarbeitung bleibt auf dem Mac und funktioniert nach der Ersteinrichtung offline.',
        'In Entwicklung ist eine Safari-Erweiterung, mit der man Seiten zum Vorlesen an Univocal schicken kann. Sie ist noch nicht veröffentlicht.',
      ],
      fr: [
        'Je mélange souvent l\'anglais et le coréen dans la même phrase. J\'ai créé Univocal parce que je voulais dicter comme je parle, puis réécouter ce que j\'avais écrit.',
        'Je payais des abonnements séparés pour la dictée et pour la lecture. Avec Univocal, je voulais les deux dans une seule application Mac. On dicte là où se trouve le curseur et l\'on peut changer de langue au milieu d\'une phrase. Le texte sélectionné ou copié arrive dans un panneau de lecture homogène qui surligne chaque mot au moment où il est prononcé. Le traitement de la voix reste sur le Mac et fonctionne hors ligne après la configuration initiale.',
        'Une extension Safari est en cours de développement : elle permettra d\'envoyer des pages à Univocal pour les faire lire. Elle n\'est pas encore sortie.',
      ],
      ja: [
        '私は同じ文の中で英語と韓国語を混ぜることがよくあります。話すとおりに音声入力し、書いた内容を聞き返したくて、Univocalを作りました。',
        '音声入力と読み上げで、別々のサブスクリプションを払っていました。Univocalでは、その両方を1つのMacアプリにしたいと考えました。カーソルのある場所に音声入力でき、文の途中でも言語を切り替えられます。選択またはコピーしたテキストは、統一された読み上げパネルに入り、読まれている単語がひとつずつハイライトされます。音声処理はMac上で行われ、最初のセットアップ後はオフラインで動作します。',
        '開発中のものとして、ページをUnivocalに送って読み上げさせるSafari拡張機能があります。まだ公開されていません。',
      ],
      zh: [
        '我经常在同一句话里混用英语和韩语。我做 Univocal，是因为我想按自己说话的方式听写，然后再听一遍自己写下的内容。',
        '我之前分别为听写和朗读付费订阅。有了 Univocal，我希望把两者放进同一个 Mac 应用里。你可以在光标所在位置听写，并在句子中途切换语言。选中或复制的文字会进入统一的朗读面板，朗读时逐词高亮。语音处理留在 Mac 上，初始设置完成后可离线使用。',
        '正在开发的还有一个 Safari 扩展，用来把网页发送到 Univocal 朗读。它尚未发布。',
      ],
      es: [
        'A menudo mezclo inglés y coreano en la misma frase. Creé Univocal porque quería dictar como hablo y luego escuchar lo que había escrito.',
        'Pagaba suscripciones distintas por el dictado y por la lectura. Con Univocal quería tener ambas cosas en una sola app para Mac. Puedes dictar donde esté el cursor y cambiar de idioma a mitad de frase. El texto seleccionado o copiado pasa a un panel de lectura uniforme que resalta cada palabra mientras se pronuncia. El procesamiento de voz se queda en el Mac y funciona sin conexión después de la configuración inicial.',
        'Una de las cosas en desarrollo es una extensión de Safari para enviar páginas a Univocal y que las lea. Todavía no se ha publicado.',
      ],
      pt: [
        'Eu costumo misturar inglês e coreano na mesma frase. Criei o Univocal porque queria ditar do jeito que falo e depois ouvir o que escrevi.',
        'Eu pagava assinaturas separadas para ditado e para leitura em voz alta. Com o Univocal, quis os dois em um só app para Mac. Você dita onde o cursor estiver e pode trocar de idioma no meio da frase. O texto selecionado ou copiado vai para um painel de leitura uniforme que destaca cada palavra enquanto ela é falada. O processamento de voz fica no Mac e funciona offline depois da configuração inicial.',
        'Uma coisa em desenvolvimento é uma extensão do Safari para enviar páginas ao Univocal para leitura. Ela ainda não foi lançada.',
      ],
      ar: [
        'كثيرًا ما أخلط بين الإنجليزية والكورية في الجملة الواحدة. صنعت Univocal لأنني أردت أن أُملي بالطريقة التي أتحدث بها، ثم أستمع إلى ما كتبته.',
        'كنت أدفع اشتراكات منفصلة للإملاء وللقراءة بصوت عالٍ. وفي Univocal أردت الاثنين في تطبيق واحد لنظام Mac. يمكنك الإملاء حيث يوجد المؤشر وتبديل اللغة في منتصف الجملة. ينتقل النص المحدد أو المنسوخ إلى لوحة قراءة موحّدة تُبرز كل كلمة أثناء نطقها. تبقى معالجة الكلام على جهاز Mac وتعمل دون اتصال بعد الإعداد الأولي.',
        'من الأشياء قيد التطوير إضافة لمتصفح Safari لإرسال الصفحات إلى Univocal كي يقرأها. لم تصدر بعد.',
      ],
      ko: [
        '저는 같은 문장 안에서 영어와 한국어를 자주 섞어 씁니다. 말하는 대로 받아쓰고, 쓴 내용을 다시 들어 보고 싶어서 Univocal을 만들었습니다.',
        '받아쓰기와 읽어 주기에 각각 구독료를 내고 있었습니다. Univocal에서는 둘을 하나의 Mac 앱에 담고 싶었습니다. 커서가 있는 곳에 받아쓰기를 할 수 있고, 문장 중간에도 언어를 바꿀 수 있습니다. 선택하거나 복사한 텍스트는 일관된 읽기 패널로 들어가, 읽는 단어를 하나씩 강조해 줍니다. 음성 처리는 Mac 안에서 이루어지며 처음 설정을 마친 뒤에는 오프라인으로 작동합니다.',
        '개발 중인 것으로는 페이지를 Univocal로 보내 읽게 하는 Safari 확장 프로그램이 있습니다. 아직 출시되지 않았습니다.',
      ],
    },
  },
}
