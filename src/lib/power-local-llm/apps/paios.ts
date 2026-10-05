// Local AI App Directory — PAIOS (layer: mobile / Android)
// Added 2026-10-02 from the Android app queue. Facts verified directly against
// github.com/Puzzaks/PAIOS (README, CHANGELOG, ROADMAP, releases, GitHub API) and the
// Google Play listing (page.puzzak.paios) — not TODO placeholders.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'paios',
  name: 'PAIOS',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android'],
  worksWith: null,
  engine: 'builtin', // no model files of its own: inference runs on-device through Google's AICore system service (Gemini Nano), so no cloud or external backend is involved
  license: 'Unlicense', // per GitHub API (spdx_id: Unlicense) — a public-domain-style dedication
  price: 'free', // Play listing shows no in-app purchases or ads; the project roadmap lists monetization only as a future, unchecked item
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // per README: "requires a supported device with Google AI Core (e.g., Pixel 9/10 series)" — a device-support list, not a numeric RAM/VRAM floor, and no CPU-only statement is published — verified 2026-10-02; developer confirms 2026-10-05 these are examples and more phones work
  stars: 168, // GitHub Puzzaks/PAIOS star count, verified via the GitHub API 2026-10-02
  addedDate: '2026-10-02',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'puzzak.page',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=page.puzzak.paios',
    github: 'https://github.com/Puzzaks/PAIOS',
    web: 'https://puzzak.page',
  },
  tagline: {
    en: 'Free, open-source Android chat client for Gemini Nano, running fully on-device',
    de: 'Kostenloser, quelloffener Android-Chat-Client für Gemini Nano, der vollständig auf dem Gerät läuft',
    fr: 'Client de chat Android gratuit et open source pour Gemini Nano, 100 % sur l’appareil',
    ja: 'Gemini Nanoをデバイス上だけで動かす、無料のオープンソースAndroidチャットクライアント',
    zh: '免费开源的Android聊天客户端，完全在设备端运行Gemini Nano',
    es: 'Cliente de chat Android gratuito y de código abierto para Gemini Nano, 100 % en el dispositivo',
    pt: 'Cliente de chat Android gratuito e de código aberto para o Gemini Nano, 100% no dispositivo',
    ar: 'عميل دردشة مجاني ومفتوح المصدر لنظام Android لتشغيل Gemini Nano بالكامل على الجهاز',
    ko: 'Gemini Nano를 기기 안에서만 실행하는 무료 오픈소스 Android 채팅 클라이언트',
  },
  reviewSlug: 'paios-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-02', // 1.1.8 = latest GitHub release at that date, published 2026-04-21
    version: '1.1.8',
    versionSourceUrl: 'https://github.com/Puzzaks/PAIOS/releases',
  },
  // Comparison attributes: each value verified against the project's official README/ROADMAP on 2026-10-02; a missing key = not stated there, never false.
  // Only Gemini Nano via AICore is supported (no model import, no in-app model catalogue) and the interface is text-only, so those keys stay unset.
  compare: { offline: true },
  lastVerifiedDate: '2026-10-02',
  founderReviewedDate: '2026-10-05', // developer Puzzak read the review and supplied corrections 2026-10-05
  founder: {
    who: {
      en: 'Puzzak, developer',
      de: 'Puzzak, Entwickler',
      fr: 'Puzzak, développeur',
      ja: 'Puzzak氏、開発者',
      zh: 'Puzzak，开发者',
      es: 'Puzzak, desarrollador',
      pt: 'Puzzak, desenvolvedor',
      ar: 'Puzzak، مطوّر',
      ko: 'Puzzak, 개발자',
    },
    socials: { github: 'https://github.com/Puzzaks', website: 'https://puzzak.page' },
        why: {
      en: 'PAIOS is a pet project: a chat client for Gemini Nano that runs on the phone through Google AI Core. It first launched as "Gemini Nano" and gathered over 5,000 native installs in two days before Google removed the listing for impersonation.',
      de: 'PAIOS ist ein Hobbyprojekt: ein Chat-Client für Gemini Nano, der über Google AI Core auf dem Smartphone läuft. Es erschien zuerst als „Gemini Nano“ und sammelte in zwei Tagen über 5.000 native Installationen, bevor Google den Eintrag wegen Identitätsanmaßung entfernte.',
      fr: 'PAIOS est un projet personnel : un client de chat pour Gemini Nano qui s\'exécute sur le téléphone via Google AI Core. Il a d\'abord été lancé sous le nom « Gemini Nano » et a réuni plus de 5 000 installations natives en deux jours avant que Google ne retire la fiche pour usurpation d\'identité.',
      ja: 'PAIOSは趣味のプロジェクトで、Google AI Core経由でスマートフォン上で動作するGemini Nano用のチャットクライアントです。最初は「Gemini Nano」という名前で公開され、2日間で5,000件を超えるネイティブインストールを集めましたが、その後なりすましを理由にGoogleが掲載を削除しました。',
      zh: 'PAIOS是一个业余项目：一款通过Google AI Core在手机上运行的Gemini Nano聊天客户端。它最初以“Gemini Nano”的名称上架，两天内获得了5,000多次原生安装，随后Google以冒名为由将其下架。',
      es: 'PAIOS es un proyecto personal: un cliente de chat para Gemini Nano que se ejecuta en el teléfono mediante Google AI Core. Se lanzó primero como "Gemini Nano" y reunió más de 5.000 instalaciones nativas en dos días antes de que Google retirara la ficha por suplantación.',
      pt: 'O PAIOS é um projeto pessoal: um cliente de chat para o Gemini Nano que roda no celular por meio do Google AI Core. Foi lançado primeiro como "Gemini Nano" e reuniu mais de 5.000 instalações nativas em dois dias, até o Google remover a ficha por falsidade de identidade.',
      ar: 'PAIOS مشروع هواية: عميل دردشة لنموذج Gemini Nano يعمل على الهاتف عبر Google AI Core. صدر أول مرة باسم «Gemini Nano» وجمع أكثر من 5000 تثبيت أصلي في يومين قبل أن تزيل جوجل الصفحة بسبب انتحال الهوية.',
      ko: 'PAIOS는 개인 프로젝트로, Google AI Core를 통해 휴대전화에서 실행되는 Gemini Nano용 채팅 클라이언트입니다. 처음에는 "Gemini Nano"라는 이름으로 출시되어 이틀 만에 5,000회 넘는 네이티브 설치를 기록했으나, 구글이 사칭을 이유로 목록을 삭제했습니다.',
    },
    best: {
      en: 'Free, open-source, fully on-device chat with Gemini Nano. The app is not locked to a list of phones, so it can work on any phone where Google enables Gemini Nano.',
      de: 'Kostenloser, quelloffener Chat mit Gemini Nano, vollständig auf dem Gerät. Die App ist nicht an eine Geräteliste gebunden und kann daher auf jedem Smartphone funktionieren, auf dem Google Gemini Nano aktiviert.',
      fr: 'Chat gratuit, open source et entièrement sur l\'appareil avec Gemini Nano. L\'application n\'est pas verrouillée sur une liste de téléphones : elle peut donc fonctionner sur tout téléphone où Google active Gemini Nano.',
      ja: '無料でオープンソース、完全にオンデバイスで動作するGemini Nanoとのチャット。アプリは特定の機種の一覧に固定されていないため、GoogleがGemini Nanoを有効にしているスマートフォンであれば動作する可能性があります。',
      zh: '免费、开源、完全在设备端与Gemini Nano聊天。应用没有锁定手机名单，因此在任何Google启用了Gemini Nano的手机上都可能正常工作。',
      es: 'Chat gratuito, de código abierto y totalmente en el dispositivo con Gemini Nano. La app no está limitada a una lista de teléfonos, así que puede funcionar en cualquier teléfono donde Google active Gemini Nano.',
      pt: 'Chat gratuito, de código aberto e totalmente no dispositivo com o Gemini Nano. O aplicativo não é restrito a uma lista de celulares, então pode funcionar em qualquer celular em que o Google ative o Gemini Nano.',
      ar: 'دردشة مجانية ومفتوحة المصدر وكاملة على الجهاز مع Gemini Nano. التطبيق غير مقيّد بقائمة هواتف، لذا قد يعمل على أي هاتف تفعّل عليه جوجل Gemini Nano.',
      ko: 'Gemini Nano와 완전히 기기 내에서 대화하는 무료 오픈소스 채팅 앱. 앱이 특정 휴대전화 목록에 묶여 있지 않아, 구글이 Gemini Nano를 활성화하는 모든 휴대전화에서 작동할 수 있습니다.',
    },
    limits: {
      en: 'Gemini Nano only (no other model soon), no image input yet, needs the Google Play Store, and the developer has limited time to maintain it.',
      de: 'Nur Gemini Nano (in absehbarer Zeit kein anderes Modell), noch keine Bildeingabe, benötigt den Google Play Store, und der Entwickler hat nur begrenzt Zeit für die Pflege.',
      fr: 'Gemini Nano uniquement (aucun autre modèle de sitôt), pas encore d\'entrée d\'image, nécessite le Google Play Store, et le développeur a peu de temps pour la maintenance.',
      ja: 'Gemini Nanoのみ(当面ほかのモデルの予定なし)、画像入力は未対応、Google Playストアが必要、そして開発者がメンテナンスに割ける時間は限られています。',
      zh: '仅支持Gemini Nano（短期内不会有其他模型），暂无图像输入，需要Google Play商店，且开发者维护时间有限。',
      es: 'Solo Gemini Nano (sin otro modelo pronto), aún sin entrada de imagen, requiere Google Play Store y el desarrollador tiene poco tiempo para mantenerla.',
      pt: 'Somente o Gemini Nano (nenhum outro modelo tão cedo), ainda sem entrada de imagem, exige a Google Play Store, e o desenvolvedor tem pouco tempo para a manutenção.',
      ar: 'Gemini Nano فقط (ولا نموذج آخر قريبًا)، ولا إدخال صور بعد، ويتطلب متجر Google Play، ووقت المطوّر لصيانته محدود.',
      ko: 'Gemini Nano만 지원(당분간 다른 모델 없음), 아직 이미지 입력 없음, 구글 플레이 스토어 필요, 개발자의 유지 관리 시간이 제한적임.',
    },
    providedDate: '2026-10-05',
    // Condensed from the developer's reply to the review; same text as the
    // "From the Maker" section in src/lib/power-local-llm/articles/paios-review.ts.
    fullQuote: {
      en: [
        "PAIOS is my pet project. It was first released on the Play Store as 'Gemini Nano', lived for two days, gathered over 5,000 native installs and was removed by Google for impersonation, hence the package name change.",
        'Only Gemini Nano is supported, and there will be no other model anytime soon. There is no multimodality yet: the model can accept images, but I have not implemented that.',
        'The README is not the final source of truth about devices. Which phones support Gemini Nano is up to Google, and sometimes I do not even know. Because of that, the app is not locked to certain phones: I cannot change a supported list as often as Google does. The Pixel 9 and 10 are just examples, and more phones do support it.',
        'The app needs the Play Store to function. You can install it from GitHub, but AI Core requires the Play Store, and there are new rules regarding developer verification.',
        'Your notes about the repo being semi-abandoned are mostly true. I do not have enough time to maintain it, and the roadmap lists a lot that I would love to improve or implement.',
        'An earlier version of the app was featured in a HowToMen episode.',
      ],
      de: [
        'PAIOS ist mein Hobbyprojekt. Es erschien zuerst als ‚Gemini Nano‘ im Play Store, war zwei Tage online, sammelte über 5.000 native Installationen und wurde von Google wegen Identitätsanmaßung entfernt, daher die Änderung des Paketnamens.',
        'Unterstützt wird nur Gemini Nano, und in absehbarer Zeit wird es kein anderes Modell geben. Multimodalität gibt es noch nicht: Das Modell kann Bilder verarbeiten, aber ich habe das nicht umgesetzt.',
        'Die README ist nicht die endgültige Quelle für Geräte. Welche Smartphones Gemini Nano unterstützen, entscheidet Google, und manchmal weiß ich es selbst nicht. Deshalb ist die App nicht an bestimmte Smartphones gebunden: Ich kann eine Liste unterstützter Geräte nicht so oft ändern wie Google. Pixel 9 und 10 sind nur Beispiele, und mehr Smartphones unterstützen es tatsächlich.',
        'Die App braucht den Play Store, um zu funktionieren. Sie können sie über GitHub installieren, aber AI Core setzt den Play Store voraus, und es gibt neue Regeln zur Entwicklerverifizierung.',
        'Ihre Anmerkungen, das Repository sei halb verwaist, stimmen größtenteils. Ich habe nicht genug Zeit, es zu pflegen, und die Roadmap enthält viel, das ich gern verbessern oder umsetzen würde.',
        'Eine frühere Version der App wurde in einer HowToMen-Folge vorgestellt.',
      ],
      fr: [
        'PAIOS est mon projet personnel. Elle a d\'abord été publiée sur le Play Store sous le nom \'Gemini Nano\', est restée en ligne deux jours, a réuni plus de 5 000 installations natives, puis a été retirée par Google pour usurpation d\'identité, d\'où le changement de nom de paquet.',
        'Seul Gemini Nano est pris en charge, et il n\'y aura aucun autre modèle de sitôt. Il n\'y a pas encore de multimodalité : le modèle peut accepter des images, mais je ne l\'ai pas implémenté.',
        'Le README n\'est pas la source de vérité définitive sur les appareils. Quels téléphones prennent en charge Gemini Nano dépend de Google, et parfois je ne le sais même pas. À cause de cela, l\'application n\'est pas verrouillée sur certains téléphones : je ne peux pas modifier une liste d\'appareils pris en charge aussi souvent que Google le fait. Les Pixel 9 et 10 ne sont que des exemples, et d\'autres téléphones la prennent bien en charge.',
        'L\'application a besoin du Play Store pour fonctionner. Vous pouvez l\'installer depuis GitHub, mais AI Core exige le Play Store, et il y a de nouvelles règles concernant la vérification des développeurs.',
        'Vos remarques sur le dépôt à moitié abandonné sont pour l\'essentiel exactes. Je n\'ai pas assez de temps pour le maintenir, et la feuille de route liste beaucoup de choses que j\'aimerais améliorer ou implémenter.',
        'Une version antérieure de l\'application a été présentée dans un épisode de HowToMen.',
      ],
      ja: [
        'PAIOSは私の趣味のプロジェクトです。最初は「Gemini Nano」という名前でPlayストアに公開され、2日間存続して5,000件を超えるネイティブインストールを集めましたが、なりすましを理由にGoogleに削除されました。それがパッケージ名を変更した理由です。',
        '対応しているのはGemini Nanoだけで、当面ほかのモデルが加わる予定はありません。マルチモーダルにもまだ対応していません。モデルは画像を受け付けられますが、私はそれを実装していません。',
        'READMEは、対応端末に関する最終的な情報源ではありません。どのスマートフォンがGemini Nanoに対応するかはGoogle次第で、私自身も分からないことがあります。そのため、アプリは特定の機種に固定していません。対応機種の一覧を、Googleと同じ頻度で私が更新することはできないからです。Pixel 9と10は単なる例であり、対応している機種はほかにもあります。',
        'このアプリが動作するにはPlayストアが必要です。GitHubからインストールすることもできますが、AI CoreがPlayストアを必要とし、開発者認証に関する新しい規則もあります。',
        'リポジトリがほぼ放置されているというご指摘は、おおむねそのとおりです。メンテナンスに十分な時間がなく、ロードマップには、私が改善または実装したい項目がたくさん並んでいます。',
        'アプリの以前のバージョンは、HowToMenのエピソードで紹介されました。',
      ],
      zh: [
        'PAIOS是我的业余项目。它最初以“Gemini Nano”的名称在Play商店上架，存活了两天，获得了5,000多次原生安装，随后被Google以冒名为由下架，因此才更改了包名。',
        '只支持Gemini Nano，短期内也不会有其他模型。目前还没有多模态功能：模型可以接受图像，但我还没有实现。',
        'README并不是设备支持情况的最终依据。哪些手机支持Gemini Nano由Google决定，有时我自己也不清楚。正因如此，应用没有锁定特定手机：我无法像Google那样频繁地更改支持名单。Pixel 9和10只是示例，实际支持的手机更多。',
        '应用需要Play商店才能运行。您可以从GitHub安装，但AI Core需要Play商店，而且还有关于开发者验证的新规定。',
        '您关于该仓库近乎废弃的说法大体属实。我没有足够的时间来维护它，路线图中列出了很多我很想改进或实现的内容。',
        '该应用的早期版本曾在一期HowToMen节目中亮相。',
      ],
      es: [
        'PAIOS es mi proyecto personal. Se lanzó primero en Play Store como \'Gemini Nano\', duró dos días, reunió más de 5.000 instalaciones nativas y Google lo retiró por suplantación, de ahí el cambio de nombre del paquete.',
        'Solo es compatible Gemini Nano, y no habrá otro modelo en un futuro próximo. Todavía no hay multimodalidad: el modelo puede aceptar imágenes, pero no lo he implementado.',
        'El README no es la fuente definitiva sobre los dispositivos. Qué teléfonos son compatibles con Gemini Nano depende de Google, y a veces ni yo lo sé. Por eso la app no está limitada a ciertos teléfonos: no puedo cambiar una lista de dispositivos compatibles con la frecuencia con que lo hace Google. Los Pixel 9 y 10 son solo ejemplos, y más teléfonos sí son compatibles.',
        'La app necesita Play Store para funcionar. Se puede instalar desde GitHub, pero AI Core requiere Play Store, y hay nuevas normas sobre la verificación de desarrolladores.',
        'Sus notas sobre que el repositorio está semiabandonado son en su mayoría ciertas. No tengo tiempo suficiente para mantenerlo, y la hoja de ruta enumera muchas cosas que me encantaría mejorar o implementar.',
        'Una versión anterior de la app apareció en un episodio de HowToMen.',
      ],
      pt: [
        'PAIOS é meu projeto pessoal. Ele foi lançado primeiro na Play Store como \'Gemini Nano\', durou dois dias, reuniu mais de 5.000 instalações nativas e foi removido pelo Google por falsidade de identidade, daí a mudança do nome do pacote.',
        'Só o Gemini Nano é suportado, e não haverá outro modelo tão cedo. Ainda não há multimodalidade: o modelo pode aceitar imagens, mas eu não implementei isso.',
        'O README não é a fonte final da verdade sobre aparelhos. Quais celulares suportam o Gemini Nano depende do Google, e às vezes eu mesmo não sei. Por isso o aplicativo não é restrito a certos celulares: não consigo alterar uma lista de aparelhos suportados com a frequência com que o Google o faz. O Pixel 9 e o Pixel 10 são apenas exemplos, e mais celulares têm suporte.',
        'O aplicativo precisa da Play Store para funcionar. Dá para instalá-lo pelo GitHub, mas o AI Core exige a Play Store, e há novas regras sobre verificação de desenvolvedores.',
        'Suas observações sobre o repositório estar semiabandonado são em grande parte verdadeiras. Não tenho tempo suficiente para mantê-lo, e o roadmap lista muita coisa que eu adoraria melhorar ou implementar.',
        'Uma versão anterior do aplicativo foi apresentada em um episódio do HowToMen.',
      ],
      ar: [
        'PAIOS مشروع هواية خاص بي. صدر أول مرة على متجر Play باسم “Gemini Nano”، وبقي يومين، وجمع أكثر من 5000 تثبيت أصلي، ثم أزالته جوجل بسبب انتحال الهوية، ومن هنا تغيير اسم الحزمة.',
        'يُدعم Gemini Nano فقط، ولن يكون هناك نموذج آخر في وقت قريب. لا يوجد دعم للوسائط المتعددة بعد: يستطيع النموذج قبول الصور، لكنني لم أنفّذ ذلك.',
        'ملف README ليس المصدر النهائي للحقيقة بشأن الأجهزة. تحديد الهواتف التي تدعم Gemini Nano بيد جوجل، وأحيانًا لا أعرف ذلك أنا نفسي. ولهذا السبب لا يقتصر التطبيق على هواتف معينة: لا أستطيع تعديل قائمة مدعومة بالسرعة التي تغيّرها بها جوجل. إن Pixel 9 وPixel 10 مجرد أمثلة، وهناك هواتف أكثر تدعمه فعلًا.',
        'يحتاج التطبيق إلى متجر Play ليعمل. يمكنك تثبيته من GitHub، لكن AI Core يتطلب متجر Play، وهناك قواعد جديدة تتعلق بالتحقق من المطورين.',
        'ملاحظاتك بأن المستودع شبه مهجور صحيحة في معظمها. ليس لدي وقت كافٍ لصيانته، وتضم خارطة الطريق الكثير مما أود تحسينه أو تنفيذه.',
        'ظهرت نسخة سابقة من التطبيق في حلقة من HowToMen.',
      ],
      ko: [
        'PAIOS는 제 개인 프로젝트입니다. 처음에는 플레이 스토어에 \'Gemini Nano\'라는 이름으로 출시되어 이틀 동안 존재했고, 5,000회 넘는 네이티브 설치를 기록했지만 구글이 사칭을 이유로 삭제했습니다. 그래서 패키지 이름이 바뀌었습니다.',
        'Gemini Nano만 지원하며, 당분간 다른 모델은 없을 것입니다. 아직 멀티모달은 지원하지 않습니다. 모델은 이미지를 받을 수 있지만 제가 그 기능을 구현하지 않았습니다.',
        'README가 기기에 관한 최종적인 정보원은 아닙니다. 어떤 휴대전화가 Gemini Nano를 지원하는지는 구글에 달려 있고, 저도 모를 때가 있습니다. 그래서 앱은 특정 휴대전화에 묶여 있지 않습니다. 구글만큼 자주 지원 목록을 바꿀 수는 없기 때문입니다. 픽셀 9과 10은 예시일 뿐이며, 더 많은 휴대전화가 실제로 지원합니다.',
        '앱이 작동하려면 플레이 스토어가 필요합니다. GitHub에서 설치할 수는 있지만 AI Core가 플레이 스토어를 요구하며, 개발자 인증에 관한 새로운 규정도 있습니다.',
        '저장소가 반쯤 방치되어 있다는 지적은 대부분 사실입니다. 유지 관리할 시간이 충분하지 않고, 로드맵에는 개선하거나 구현하고 싶은 항목이 많이 나열되어 있습니다.',
        '이 앱의 이전 버전은 HowToMen 에피소드에 소개된 적이 있습니다.',
      ],
    },
  },
  changelog: [
    {
      date: '2026-10-05',
      note: 'Developer review: clarified that only Gemini Nano is supported, image input is not implemented, device support is decided by Google (not locked to the Pixel 9/10), and the Play Store is required.',
      source: 'founder',
    },
  ],
}
