// Local AI App Directory — Whispy: private audio-file transcription for Mac and Windows (layer: desktop transcription app, speech-to-text)
// Added 2026-11-20. Facts verified 2026-11-20 against usewhispy.com (the pages render with JavaScript, so home, pricing, download flow, privacy policy
// "Last updated: June 8, 2026" and the benchmarks page were read from the site's bundled app code) and the GitHub Releases API of fzsheik/whispy-releases
// (latest tag v0.1.11, published 2026-11-17T10:03:52Z; assets: Whispy_0.1.11_aarch64.dmg, Whispy_0.1.11_x64-setup.exe, Whispy_0.1.11_x64_en-US.msi, update manifests).
// Latest version 0.1.11 released 2026-11-17 (Releases and the site's download links agree). 3 days old on 2026-11-20, so the 3-month stale warning is OFF.
// Prices (USD, pricing page): Free core app (desktop + browser, library, notes, TXT/SRT export; no Pro trial); Pro $12/month, $8/month billed yearly ($96/yr), $79 lifetime.
// Pro: batch processing, speaker detection + editing, auto-export, transcription from a YouTube/social link. Free browser version runs Whisper Tiny/Base/Small in the tab.
// Local claim (maker note 2026-11-20, home, privacy policy): "no cloud mode at all", audio/transcripts/notes stay on the device. Network use per the policy: Supabase auth (email, Pro account),
// Polar payments, PostHog cookieless analytics, Sentry error tracking; model + app downloads. Source code: closed (the GitHub repo only hosts release installers).
// Models named on the benchmarks page: Whisper Large v3 Turbo, Parakeet Ultra (25 European languages), Qwen3-ASR 1.7B (zh/ja/ko and more). Speaker detection: pyannote (privacy policy) vs NVIDIA Nemotron-3 (what's-new notice).
// Not independently checked: network traffic, the app binary, accuracy, speed, the maker's 12,000-hours claim and benchmark scores. No hands-on testing by PromptQuorum.
// HQ country: NOT set. The privacy policy and terms name no company, address or authority, and the maker did not state one (owner decision pending).
// Founder note: Fawaz Sheik (maker), 2026-11-20, first comment. founderReviewedDate deliberately NOT set (comment only, no approval of the finished review).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'whispy',
  name: 'Whispy',
  categories: ['speech-to-text'],
  interfaces: ['desktop', 'web'],
  locality: 'local', // maker + privacy policy: transcription runs on the Mac/Windows PC (or in the browser tab), audio is not uploaded; the network is used for downloads, the Pro account, payments, analytics and error tracking
  platforms: ['mac', 'win', 'web'], // download flow: Apple Silicon Mac (macOS 11+) and Windows 10/11 x64; free in-browser version; no Intel Mac, Linux, iOS or Android
  worksWith: ['Whisper', 'Parakeet', 'Qwen3-ASR'],
  engine: 'builtin', // ships its own local speech models, downloaded at setup (about 2 GB of free disk space)
  license: 'Proprietary (closed source)', // the linked GitHub repo only hosts release installers; no source licence stated
  price: 'freemium', // free core app; Pro $12/month, $8/month billed yearly or $79 once; no Pro trial
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; installer asks for about 2 GB of disk space for the model
  stars: null, // no public source repository
  addedDate: '2026-11-20',
  status: 'listed',
  uses: ['audio'],
  url: 'usewhispy.com',
  storeLinks: {
    web: 'https://usewhispy.com',
    github: 'https://github.com/fzsheik/whispy-releases',
  },
  installEffort: 'installer',
  installOn: ['mac', 'win'],
  installEvidence: 'Download flow + GitHub Releases v0.1.11 (2026-11-17) checked 2026-11-20: Whispy_0.1.11_aarch64.dmg (about 72 MB, Apple Silicon, macOS 11+), Whispy_0.1.11_x64-setup.exe (about 100 MB) and Whispy_0.1.11_x64_en-US.msi, standard installers, no terminal step; speech model downloads during setup',
  tagline: {
    en: 'Private audio-file transcription for Mac and Windows that runs local speech models on your computer, with optional speaker labels and TXT or SRT export',
    de: 'Private Transkription von Audiodateien für Mac und Windows, die lokale Sprachmodelle auf Ihrem Computer ausführt, mit optionaler Sprecherzuordnung und TXT- oder SRT-Export',
    fr: 'Transcription privée de fichiers audio pour Mac et Windows, qui exécute des modèles vocaux locaux sur votre ordinateur, avec identification des locuteurs en option et export TXT ou SRT',
    ja: 'お使いのコンピューター上でローカル音声認識モデルを動かす、Mac・Windows向けのプライベートな音声ファイル文字起こしアプリ。任意で話者ラベルとTXT・SRT書き出しに対応',
    zh: '适用于Mac和Windows的私密音频文件转录应用，在你的电脑上运行本地语音模型，可选说话人标签，支持导出TXT或SRT',
    es: 'Transcripción privada de archivos de audio para Mac y Windows que ejecuta modelos de voz locales en tu ordenador, con etiquetas de hablante opcionales y exportación a TXT o SRT',
    pt: 'Transcrição privada de arquivos de áudio para Mac e Windows que executa modelos de fala locais no seu computador, com rótulos de falante opcionais e exportação em TXT ou SRT',
    ar: 'تفريغ صوتي خاص للملفات لأجهزة Mac وWindows يشغّل نماذج كلام محلية على حاسوبك، مع تمييز اختياري للمتحدثين وتصدير بصيغتي TXT وSRT',
    ko: '컴퓨터에서 로컬 음성 모델을 실행하는 Mac·Windows용 비공개 오디오 파일 전사 앱으로, 선택형 화자 구분과 TXT·SRT 내보내기를 지원합니다',
  },
  // Comparison attributes from the maker's pages on 2026-11-20 (pricing page: speaker detection is a Pro feature); languages, realtime, cpuUsable and apiServer not stated = left out, never false.
  compare: { speakerLabels: true },
  reviewSlug: 'whispy-review',
  pqReview: {
    date: '2026-11-20',
    version: '0.1.11',
    versionSourceUrl: 'https://github.com/fzsheik/whispy-releases/releases/latest',
  },
  verdict: 'Best for Mac (Apple Silicon) and Windows users who transcribe interviews, lectures and meetings and want, per the maker, the work done on their own computer, with a free core app and an optional Pro plan ($12 a month, $8 a month billed yearly, or $79 once) for speaker labels and batch processing; limited by a young 0.1.x version, closed source, no Intel Mac, Linux or mobile app, and privacy and accuracy claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-20',
  lastUpstreamUpdate: '2026-11-17', // GitHub Releases v0.1.11 published 2026-11-17; read 2026-11-20
  lastUpstreamUpdateSource: 'https://github.com/fzsheik/whispy-releases/releases/latest',
  founder: {
    who: {
      en: 'Fawaz Sheik, maker of Whispy',
      de: 'Fawaz Sheik, Entwickler von Whispy',
      fr: 'Fawaz Sheik, créateur de Whispy',
      ja: 'Fawaz Sheik氏、Whispy開発者',
      zh: 'Fawaz Sheik，Whispy开发者',
      es: 'Fawaz Sheik, creador de Whispy',
      pt: 'Fawaz Sheik, criador do Whispy',
      ar: 'Fawaz Sheik، مطوّر Whispy',
      ko: 'Fawaz Sheik, Whispy 개발자',
    },
    providedDate: '2026-11-20',
    why: {
      en: 'Whispy has no cloud mode at all: your audio never leaves your computer, and the transcription runs on your own Mac or Windows PC, so interviews, lectures, meetings and calls need not be uploaded anywhere.',
      de: 'Whispy hat überhaupt keinen Cloud-Modus: Ihr Audio verlässt Ihren Computer nie, und die Transkription läuft auf Ihrem eigenen Mac oder Windows-PC, sodass Interviews, Vorlesungen, Besprechungen und Anrufe nirgends hochgeladen werden müssen.',
      fr: 'Whispy n\'a aucun mode cloud : votre audio ne quitte jamais votre ordinateur, et la transcription s\'exécute sur votre propre Mac ou PC Windows, si bien que les entretiens, cours, réunions et appels n\'ont pas besoin d\'être téléversés.',
      ja: 'Whispyにはクラウドモードが一切ありません。音声がコンピューターの外に出ることはなく、文字起こしはお使いのMacまたはWindows PC上で実行されるため、インタビュー、講義、会議、通話をどこにもアップロードする必要がありません。',
      zh: 'Whispy完全没有云端模式：你的音频不会离开你的电脑，转录就在你自己的Mac或Windows电脑上运行，所以访谈、讲座、会议和通话都无需上传到任何地方。',
      es: 'Whispy no tiene ningún modo en la nube: tu audio nunca sale de tu ordenador y la transcripción se ejecuta en tu propio Mac o PC con Windows, así que las entrevistas, clases, reuniones y llamadas no tienen que subirse a ningún sitio.',
      pt: 'O Whispy não tem nenhum modo na nuvem: o seu áudio nunca sai do seu computador e a transcrição roda no seu próprio Mac ou PC com Windows, então entrevistas, aulas, reuniões e chamadas não precisam ser enviadas a lugar nenhum.',
      ar: 'لا يملك Whispy وضعًا سحابيًا إطلاقًا: صوتك لا يغادر حاسوبك، ويجري التفريغ على جهاز Mac أو Windows الخاص بك، فلا حاجة إلى رفع المقابلات والمحاضرات والاجتماعات والمكالمات إلى أي مكان.',
      ko: 'Whispy에는 클라우드 모드가 전혀 없습니다. 오디오는 컴퓨터 밖으로 나가지 않고 전사는 사용자의 Mac 또는 Windows PC에서 실행되므로, 인터뷰, 강의, 회의, 통화를 어디에도 업로드할 필요가 없습니다.',
    },
    best: {
      en: 'Accurate text in your language, with who said what: pick from several local models for speed or accuracy, add speaker labels to long multi-speaker recordings, upload a recording from your phone, and export to TXT or SRT.',
      de: 'Genauer Text in Ihrer Sprache, mit Angabe, wer was gesagt hat: unter mehreren lokalen Modellen nach Tempo oder Genauigkeit wählen, bei langen Aufnahmen mit mehreren Sprechern Sprecherzuordnungen hinzufügen, eine Aufnahme vom Handy hochladen und als TXT oder SRT exportieren.',
      fr: 'Un texte précis dans votre langue, avec l\'indication de qui a dit quoi : choisir parmi plusieurs modèles locaux selon la vitesse ou la précision, ajouter des étiquettes de locuteurs aux longs enregistrements à plusieurs voix, envoyer un enregistrement depuis votre téléphone et exporter en TXT ou SRT.',
      ja: '誰が何を話したかも含めて、お使いの言語で正確なテキストが得られます。速さや精度に応じて複数のローカルモデルから選べ、長い複数話者の録音に話者ラベルを付け、スマートフォンから録音をアップロードし、TXTやSRTに書き出せます。',
      zh: '用你的语言得到准确的文字，并且知道谁说了什么：可从多个本地模型中按速度或准确度选择，给长时间的多人录音添加说话人标签，从手机上传录音，并导出为TXT或SRT。',
      es: 'Texto preciso en tu idioma, con quién dijo qué: elige entre varios modelos locales según velocidad o precisión, añade etiquetas de hablante a grabaciones largas con varias voces, sube una grabación desde tu móvil y exporta a TXT o SRT.',
      pt: 'Texto preciso no seu idioma, com quem disse o quê: escolha entre vários modelos locais por velocidade ou precisão, adicione rótulos de falante a gravações longas com várias vozes, envie uma gravação do celular e exporte em TXT ou SRT.',
      ar: 'نص دقيق بلغتك مع معرفة من قال ماذا: اختر من بين عدة نماذج محلية للسرعة أو الدقة، وأضف تمييزًا للمتحدثين في التسجيلات الطويلة متعددة المتحدثين، وارفع تسجيلًا من هاتفك، وصدّر بصيغة TXT أو SRT.',
      ko: '사용자의 언어로 정확한 텍스트를, 누가 무엇을 말했는지와 함께: 속도나 정확도에 맞춰 여러 로컬 모델 중에서 고르고, 화자가 여럿인 긴 녹음에 화자 구분을 더하고, 휴대폰의 녹음을 올리고, TXT 또는 SRT로 내보낼 수 있습니다.',
    },
    fullQuote: {
      en: [
        'I believe people should get the power of AI without being forced to give up their data. We live in an age where your history and personal data are arguably more valuable than you are, and I understand that this data is what trains models. We shouldn\'t be forced to make that compromise when safe, private, local options exist.',
        'That\'s why I built Whispy. The recordings people most need transcribed, like interviews, lectures, meetings and calls, are often the ones they shouldn\'t upload anywhere, and most tools ask you to trade privacy for accuracy. Whispy has no cloud mode at all. Your audio never leaves your computer, and the transcription runs on your own Mac or Windows PC. The main advantage is accurate text in your language, with who said what. You can pick from several local models depending on how fast or how accurate you want it, add speaker labels to long multi-speaker recordings, upload a recording from your phone, and export to TXT or SRT. People have already transcribed more than 12,000 hours of audio with it.',
        'My goal for Whispy is to build the most accurate private transcription you can get in your own language, then grow from recordings to live meetings and notes, all while staying on your device.',
      ],
      de: [
        'Ich glaube, dass Menschen die Leistungsfähigkeit von KI nutzen können sollten, ohne ihre Daten preisgeben zu müssen. Wir leben in einer Zeit, in der Ihr Verlauf und Ihre persönlichen Daten wohl wertvoller sind als Sie selbst, und mir ist klar, dass genau diese Daten Modelle trainieren. Wir sollten nicht gezwungen sein, diesen Kompromiss einzugehen, wenn es sichere, private, lokale Alternativen gibt.',
        'Deshalb habe ich Whispy gebaut. Die Aufnahmen, die Menschen am dringendsten transkribieren müssen, wie Interviews, Vorlesungen, Besprechungen und Anrufe, sind oft diejenigen, die sie nirgends hochladen sollten, und die meisten Werkzeuge verlangen, Privatsphäre gegen Genauigkeit einzutauschen. Whispy hat überhaupt keinen Cloud-Modus. Ihr Audio verlässt Ihren Computer nie, und die Transkription läuft auf Ihrem eigenen Mac oder Windows-PC. Der wichtigste Vorteil ist ein genauer Text in Ihrer Sprache, mit Angabe, wer was gesagt hat. Sie können unter mehreren lokalen Modellen wählen, je nachdem, wie schnell oder wie genau es sein soll, bei langen Aufnahmen mit mehreren Sprechern Sprecherzuordnungen hinzufügen, eine Aufnahme von Ihrem Handy hochladen und als TXT oder SRT exportieren. Menschen haben damit bereits mehr als 12.000 Stunden Audio transkribiert.',
        'Mein Ziel für Whispy ist die genaueste private Transkription, die Sie in Ihrer eigenen Sprache bekommen können, und von Aufnahmen aus weiterzuwachsen zu Live-Besprechungen und Notizen, immer auf Ihrem Gerät.',
      ],
      fr: [
        'Je crois que les gens devraient pouvoir profiter de la puissance de l\'IA sans être forcés d\'abandonner leurs données. Nous vivons à une époque où votre historique et vos données personnelles valent sans doute plus que vous, et je comprends que ces données servent à entraîner les modèles. Nous ne devrions pas être forcés d\'accepter ce compromis alors que des solutions sûres, privées et locales existent.',
        'C\'est pour cela que j\'ai créé Whispy. Les enregistrements que l\'on a le plus besoin de transcrire, comme les entretiens, les cours, les réunions et les appels, sont souvent ceux qu\'on ne devrait téléverser nulle part, et la plupart des outils demandent d\'échanger la confidentialité contre la précision. Whispy n\'a aucun mode cloud. Votre audio ne quitte jamais votre ordinateur, et la transcription s\'exécute sur votre propre Mac ou PC Windows. Le principal avantage est un texte précis dans votre langue, avec l\'indication de qui a dit quoi. Vous pouvez choisir parmi plusieurs modèles locaux selon la vitesse ou la précision voulues, ajouter des étiquettes de locuteurs aux longs enregistrements à plusieurs voix, envoyer un enregistrement depuis votre téléphone et exporter en TXT ou SRT. Des utilisateurs ont déjà transcrit plus de 12 000 heures d\'audio avec l\'application.',
        'Mon objectif pour Whispy est de proposer la transcription privée la plus précise possible dans votre propre langue, puis de passer des enregistrements aux réunions en direct et aux notes, toujours sur votre appareil.',
      ],
      ja: [
        '私は、人々が自分のデータを手放すことを強いられずに、AIの力を使えるべきだと考えています。今は、あなたの履歴や個人データが、おそらくあなた自身よりも価値を持つ時代です。そのデータがモデルの学習に使われることも理解しています。安全でプライベートなローカルの選択肢があるのに、そのような妥協を強いられるべきではありません。',
        'だからWhispyを作りました。インタビュー、講義、会議、通話など、人々が最も文字起こしを必要とする録音は、どこにもアップロードすべきでないものであることが多く、ほとんどのツールはプライバシーと引き換えに精度を求めてきます。Whispyにはクラウドモードが一切ありません。音声がコンピューターの外に出ることはなく、文字起こしはお使いのMacまたはWindows PC上で実行されます。最大の強みは、誰が何を話したかも含めて、お使いの言語で正確なテキストが得られることです。速さや精度の希望に応じて複数のローカルモデルから選べ、長い複数話者の録音に話者ラベルを付け、スマートフォンから録音をアップロードし、TXTやSRTに書き出せます。すでに1万2,000時間を超える音声がWhispyで文字起こしされています。',
        'Whispyの目標は、お使いの言語で得られる最も正確なプライベート文字起こしを作り、録音からライブの会議やノートへと広げることです。そのすべてを、お使いのデバイス上のまま実現します。',
      ],
      zh: [
        '我相信，人们应该能在不被迫交出数据的前提下享受AI的力量。我们生活在这样一个时代：你的历史记录和个人数据可以说比你本人更有价值，而我也明白，这些数据正是用来训练模型的。既然存在安全、私密的本地方案，我们就不该被迫做出这种妥协。',
        '这就是我做Whispy的原因。人们最需要转录的录音，比如访谈、讲座、会议和通话，往往正是不该上传到任何地方的那些，而大多数工具却要你用隐私去换准确度。Whispy完全没有云端模式。你的音频不会离开你的电脑，转录就在你自己的Mac或Windows电脑上运行。主要优势是用你的语言得到准确的文字，并且知道谁说了什么。你可以根据想要的速度或准确度，从多个本地模型中选择，给长时间的多人录音添加说话人标签，从手机上传录音，并导出为TXT或SRT。已经有人用它转录了超过12,000小时的音频。',
        '我对Whispy的目标，是做出你能用自己的语言得到的最准确的私密转录，然后从录音扩展到实时会议和笔记，同时始终留在你的设备上。',
      ],
      es: [
        'Creo que las personas deberían disfrutar del poder de la IA sin verse obligadas a renunciar a sus datos. Vivimos en una época en la que tu historial y tus datos personales valen, posiblemente, más que tú, y entiendo que esos datos son lo que entrena los modelos. No deberíamos vernos obligados a aceptar ese compromiso cuando existen opciones seguras, privadas y locales.',
        'Por eso creé Whispy. Las grabaciones que más necesitan transcribir las personas, como entrevistas, clases, reuniones y llamadas, suelen ser las que no deberían subir a ningún sitio, y la mayoría de las herramientas te piden que cambies privacidad por precisión. Whispy no tiene ningún modo en la nube. Tu audio nunca sale de tu ordenador y la transcripción se ejecuta en tu propio Mac o PC con Windows. La principal ventaja es un texto preciso en tu idioma, con quién dijo qué. Puedes elegir entre varios modelos locales según lo rápido o preciso que lo quieras, añadir etiquetas de hablante a grabaciones largas con varias voces, subir una grabación desde tu móvil y exportar a TXT o SRT. Con él ya se han transcrito más de 12 000 horas de audio.',
        'Mi objetivo con Whispy es crear la transcripción privada más precisa que puedas conseguir en tu propio idioma y luego pasar de las grabaciones a las reuniones en directo y las notas, siempre sin salir de tu dispositivo.',
      ],
      pt: [
        'Acredito que as pessoas devem ter o poder da IA sem serem obrigadas a abrir mão dos seus dados. Vivemos numa era em que o seu histórico e os seus dados pessoais valem, possivelmente, mais do que você, e entendo que esses dados são o que treina os modelos. Não deveríamos ser obrigados a fazer esse sacrifício quando existem opções seguras, privadas e locais.',
        'Foi por isso que criei o Whispy. As gravações que as pessoas mais precisam transcrever, como entrevistas, aulas, reuniões e chamadas, costumam ser as que não deveriam enviar a lugar nenhum, e a maioria das ferramentas pede que você troque privacidade por precisão. O Whispy não tem nenhum modo na nuvem. O seu áudio nunca sai do seu computador, e a transcrição roda no seu próprio Mac ou PC com Windows. A principal vantagem é um texto preciso no seu idioma, com quem disse o quê. Você pode escolher entre vários modelos locais conforme queira mais rapidez ou mais precisão, adicionar rótulos de falante a gravações longas com várias vozes, enviar uma gravação do celular e exportar em TXT ou SRT. As pessoas já transcreveram mais de 12.000 horas de áudio com ele.',
        'Meu objetivo com o Whispy é criar a transcrição privada mais precisa que você pode ter no seu próprio idioma e depois evoluir das gravações para reuniões ao vivo e anotações, sempre sem sair do seu dispositivo.',
      ],
      ar: [
        'أؤمن بأن من حق الناس أن يحصلوا على قوة الذكاء الاصطناعي دون أن يُجبروا على التخلي عن بياناتهم. نعيش في عصر قد تكون فيه سجلاتك وبياناتك الشخصية أغلى من قيمتك أنت، وأفهم أن هذه البيانات هي ما يدرّب النماذج. لا ينبغي أن نُجبر على هذا التنازل ما دامت توجد خيارات آمنة وخاصة ومحلية.',
        'لهذا بنيت Whispy. التسجيلات التي يحتاج الناس إلى تفريغها أكثر، كالمقابلات والمحاضرات والاجتماعات والمكالمات، هي غالبًا تلك التي لا ينبغي رفعها إلى أي مكان، ومعظم الأدوات تطلب منك أن تبادل الخصوصية بالدقة. لا يملك Whispy وضعًا سحابيًا إطلاقًا. صوتك لا يغادر حاسوبك أبدًا، ويجري التفريغ على جهاز Mac أو Windows الخاص بك. الميزة الرئيسية هي نص دقيق بلغتك، مع معرفة من قال ماذا. يمكنك الاختيار من بين عدة نماذج محلية بحسب مقدار السرعة أو الدقة الذي تريده، وإضافة تمييز للمتحدثين في التسجيلات الطويلة متعددة المتحدثين، ورفع تسجيل من هاتفك، والتصدير بصيغة TXT أو SRT. وقد فرّغ الناس بالفعل أكثر من 12,000 ساعة من الصوت بواسطته.',
        'هدفي لـ Whispy أن أبني أدق تفريغ خاص يمكنك الحصول عليه بلغتك، ثم أنتقل من التسجيلات إلى الاجتماعات المباشرة والملاحظات، وكل ذلك مع بقائه على جهازك.',
      ],
      ko: [
        '저는 사람들이 데이터를 포기하도록 강요받지 않고도 AI의 힘을 누려야 한다고 믿습니다. 우리는 여러분의 기록과 개인 데이터가 어쩌면 여러분 자신보다 더 값진 시대에 살고 있고, 이 데이터가 모델을 학습시킨다는 것도 이해합니다. 안전하고 비공개이며 로컬로 쓸 수 있는 선택지가 있는데도 그런 타협을 강요받아서는 안 됩니다.',
        '그래서 Whispy를 만들었습니다. 인터뷰, 강의, 회의, 통화처럼 사람들이 가장 전사하고 싶은 녹음은 어디에도 업로드해서는 안 되는 경우가 많은데, 대부분의 도구는 정확도를 위해 개인정보를 내놓으라고 요구합니다. Whispy에는 클라우드 모드가 전혀 없습니다. 오디오는 컴퓨터 밖으로 나가지 않으며, 전사는 사용자의 Mac 또는 Windows PC에서 실행됩니다. 가장 큰 장점은 사용자의 언어로 정확한 텍스트를, 누가 무엇을 말했는지와 함께 얻는 것입니다. 원하는 속도나 정확도에 따라 여러 로컬 모델 중에서 고르고, 화자가 여럿인 긴 녹음에 화자 구분을 더하고, 휴대폰의 녹음을 올리고, TXT 또는 SRT로 내보낼 수 있습니다. 이미 사람들이 이 앱으로 12,000시간이 넘는 오디오를 전사했습니다.',
        'Whispy의 목표는 사용자의 언어로 얻을 수 있는 가장 정확한 비공개 전사를 만들고, 녹음에서 실시간 회의와 메모로 넓혀 가되 그 모든 것을 사용자의 기기 안에 두는 것입니다.',
      ],
    },
    pullQuote: {
      en: 'I believe people should get the power of AI without being forced to give up their data.',
      de: 'Ich glaube, dass Menschen die Leistungsfähigkeit von KI nutzen können sollten, ohne ihre Daten preisgeben zu müssen.',
      fr: 'Je crois que les gens devraient pouvoir profiter de la puissance de l\'IA sans être forcés d\'abandonner leurs données.',
      ja: '私は、人々が自分のデータを手放すことを強いられずに、AIの力を使えるべきだと考えています。',
      zh: '我相信，人们应该能在不被迫交出数据的前提下享受AI的力量。',
      es: 'Creo que las personas deberían disfrutar del poder de la IA sin verse obligadas a renunciar a sus datos.',
      pt: 'Acredito que as pessoas devem ter o poder da IA sem serem obrigadas a abrir mão dos seus dados.',
      ar: 'أؤمن بأن من حق الناس أن يحصلوا على قوة الذكاء الاصطناعي دون أن يُجبروا على التخلي عن بياناتهم.',
      ko: '저는 사람들이 데이터를 포기하도록 강요받지 않고도 AI의 힘을 누려야 한다고 믿습니다.',
    },
  },
}
