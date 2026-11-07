// Local AI App Directory — Sablate: offline subtitle generation, translation and burn-in for Windows and macOS (layer: desktop subtitle tool, speech-to-text)
// Added 2026-11-06. Facts verified 2026-11-06 against sablate.com (home, /pricing, /features, /download, /docs, /changelog, /about, /contact,
// /legal/privacy and /legal/terms, both dated "October 2026"; /de and /de/pricing show the same USD prices).
// Latest version 1.0.2 released 2026-10-19 (changelog, tagged "Latest"; v1.0.1 2026-10-01, v1.0.0 2026-09-01). 18 days old on 2026-11-06, so the 3-month stale warning is OFF.
// No GitHub repository, no store listing and no public release feed exist, so the website changelog is the primary source of the release date.
// Prices (USD, home/pricing; the German pages show the same USD amounts, no EUR/JPY/BRL/KRW strings; VAT is not mentioned): Free forever (videos up to 10 minutes,
// 3 transcription jobs a month, Fast and Balanced models, 1 translation layer with Argos, credit line / corner mark on exports); Pro $29 once or $5.99 a month;
// 30-day refund on the one-time licence only; a licence is active on one device at a time; volume packs up to ten licences.
// Local claim (home, docs, privacy policy): transcription runs on the computer with faster-whisper (Whisper tiers Fast = tiny 78 MB, Balanced = small 486 MB,
// Accurate = large-v3-turbo 1.62 GB, Best = large-v3 3.09 GB, downloaded on first use), offline translation with Argos (one language pack per pair), burn-in with
// ffmpeg and libass; audio and video are never uploaded. Cloud engines (OpenAI and ElevenLabs transcription, DeepL, OpenAI and Claude translation) are Pro-only,
// need the user's own API key and are off by default. Not network-silent: docs list an update check every few hours, a licence check about once a day on Pro,
// anonymous usage statistics (PostHog, EU) and the optional feature-suggestion form; no opt-out for the statistics was found on any page.
// Closed source (terms forbid reverse engineering). Maker (developer message 2026-11-07, not on any page read, not independently verified): FuumiSoft, a small independent studio in Turkey; developer Furkan Bağcı; also makes File Arbor and Vidray.
// Conflicts on the maker's own pages, kept out of the tile: docs header "Updated September 14, 2026" predates the v1.0.1/v1.0.2 features it describes; "TikTok" named as a preset
// in features/changelog but not in the list of 13; features page does not mark .ass and soft-subtitled .mkv as Pro while pricing/docs do; model sizes 75 MB-2.9 GB (download) vs 78 MB-3.09 GB (docs): same files, decimal vs binary units (developer, 2026-11-07).
// Founder round 2026-11-07: Furkan Bağcı found nothing technically wrong, added the maker details and a note (fromTheMaker in the review); first review, badge set because he reviewed the finished text.
// Not independently checked: network traffic, the installers (signing/notarisation), accuracy, speed claims. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sablate',
  name: 'Sablate',
  categories: ['subtitles-dubbing', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker: Whisper (faster-whisper), Argos translation and ffmpeg/libass rendering run on the computer, media is never uploaded; cloud engines are Pro-only, opt-in with the user's own API key; update check, Pro licence check and anonymous usage statistics still use the network
  platforms: ['win', 'mac'], // download page: Windows 10 64-bit or later (.exe), macOS 12 or later (separate Apple Silicon and Intel .dmg builds); no Linux, iOS or Android
  worksWith: ['Whisper', 'faster-whisper', 'Argos Translate', 'FFmpeg', 'libass'],
  engine: 'builtin', // ships its own local engine ("sidecar"); Whisper models download on first use
  license: 'Proprietary (closed source)', // terms prohibit reverse engineering; no repository
  price: 'freemium', // Free forever with limits; Pro $29 once or $5.99/month
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // download page: NVIDIA GPU accelerates automatically, otherwise runs on CPU (macOS runs on the CPU); about 1.3 GB disk on Windows; no RAM figure stated
  stars: null, // no public source repository
  addedDate: '2026-11-06',
  status: 'listed',
  uses: ['audio'],
  url: 'sablate.com',
  storeLinks: {
    web: 'https://sablate.com',
  },
  installEffort: 'installer',
  installEvidence: 'Download page checked 2026-11-06: Windows 10+ .exe (about 320 MB, 1.3 GB installed) and macOS 12+ .dmg builds for Apple Silicon and Intel via sablate.com/api/download, no terminal step; Whisper models (about 75 MB to 2.9 GB) download inside the app on first use. Signing and notarisation claims not verified',
  tagline: {
    en: 'Subtitle tool for Windows and Mac that, per its maker, transcribes video with Whisper on your computer, translates it, and burns styled captions into the video',
    de: 'Untertitelwerkzeug für Windows und Mac, das laut Hersteller Videos mit Whisper auf Ihrem Rechner transkribiert, übersetzt und gestaltete Untertitel ins Video einbrennt',
    fr: 'Outil de sous-titrage pour Windows et Mac qui, selon son éditeur, transcrit la vidéo avec Whisper sur votre ordinateur, la traduit et incruste des sous-titres stylisés dans l’image',
    ja: 'WindowsとMac向けの字幕ツール。開発元によると、Whisperをお使いのPC上で動画を文字起こしし、翻訳して、スタイル付き字幕を映像に焼き込みます',
    zh: '适用于 Windows 和 Mac 的字幕工具，据开发者称，在你的电脑上用 Whisper 转写视频、翻译，并把带样式的字幕烧录进视频',
    es: 'Herramienta de subtítulos para Windows y Mac que, según su fabricante, transcribe el vídeo con Whisper en tu ordenador, lo traduce e incrusta subtítulos con estilo en el vídeo',
    pt: 'Ferramenta de legendas para Windows e Mac que, segundo o fabricante, transcreve o vídeo com o Whisper no seu computador, traduz e grava legendas estilizadas no próprio vídeo',
    ar: 'أداة ترجمة نصية لأجهزة Windows وMac تفرّغ الفيديو صوتيًا، بحسب مطوّره، باستخدام Whisper على حاسوبك وتترجمه وتدمج الترجمات المنسّقة داخل الفيديو',
    ko: '개발사에 따르면 Windows와 Mac에서 Whisper를 내 컴퓨터로 실행해 영상을 받아쓰고 번역한 뒤 스타일이 적용된 자막을 영상에 입히는 자막 도구',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-06 (home/features: "100 source languages, detected automatically";
  // home and docs list speaker diarization under what Sablate does not do; download page: runs on CPU when there is no NVIDIA GPU).
  // Real-time transcription and a local API server are not mentioned anywhere: left unset, never false.
  compare: { languages: 100, speakerLabels: false, cpuUsable: true },
  reviewSlug: 'sablate-review',
  pqReview: {
    date: '2026-11-06',
    version: '1.0.2',
    versionSourceUrl: 'https://sablate.com/changelog',
  },
  verdict: 'Best for Windows and Mac users who want to turn a video on their own computer into translated, burned-in captions without uploading it, and who accept a closed-source, freemium app (free for videos up to 10 minutes, Pro $29 once or $5.99 a month); limited by no Linux or mobile version, no speaker labels, an anonymous usage-statistics call with no opt-out described, a maker (FuumiSoft, Turkey) that only a message from the developer names and the website does not yet, and claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-06',
  lastUpstreamUpdate: '2026-10-19', // sablate.com/changelog v1.0.2 "October 19, 2026", read 2026-11-06
  lastUpstreamUpdateSource: 'https://sablate.com/changelog',
  founderReviewedDate: '2026-11-07', // Furkan Bağcı (developer, FuumiSoft) read the finished review on 2026-11-07, said he found nothing technically wrong and added maker details + a founder note; drives the Founder-reviewed banner + star
  founder: {
    who: {
      en: 'Furkan Bağcı, developer at FuumiSoft',
      de: 'Furkan Bağcı, Entwickler bei FuumiSoft',
      es: 'Furkan Bağcı, desarrollador en FuumiSoft',
      fr: 'Furkan Bağcı, développeur chez FuumiSoft',
      ja: 'Furkan Bağcı氏、FuumiSoft開発者',
      zh: 'Furkan Bağcı，FuumiSoft 开发者',
      pt: 'Furkan Bağcı, desenvolvedor na FuumiSoft',
      ar: 'Furkan Bağcı، مطوّر لدى FuumiSoft',
      ko: 'Furkan Bağcı, FuumiSoft 개발자',
    },
    providedDate: '2026-11-07',
    why: {
      en: 'Sablate exists to do the whole subtitle job on the computer where the footage already is: Whisper transcription, translation, editing and burn-in in one window, with no upload and no per-minute fee.',
      de: 'Sablate gibt es, um die ganze Untertitelarbeit auf dem Computer zu erledigen, auf dem das Material bereits liegt: Whisper-Transkription, Übersetzung, Bearbeitung und Einbrennen in einem Fenster, ohne Upload und ohne Gebühr pro Minute.',
      es: 'Sablate existe para hacer todo el trabajo de subtitulado en el ordenador donde ya está el material: transcripción con Whisper, traducción, edición e incrustación en una sola ventana, sin subir nada y sin cuota por minuto.',
      fr: 'Sablate existe pour faire tout le travail de sous-titrage sur l\'ordinateur où se trouvent déjà les images : transcription Whisper, traduction, édition et incrustation dans une seule fenêtre, sans envoi de fichiers et sans frais à la minute.',
      ja: 'Sablateは、素材がすでにあるコンピューター上で字幕作業のすべてを完結させるために作りました。Whisperによる文字起こし、翻訳、編集、焼き込みをひとつのウィンドウで行え、アップロードも分単位の料金も不要です。アプリはクローズドソースなので、「プライベート」を信じてほしいとお願いする代わりに、ドキュメントでアプリが行う外部通信をすべて一覧にしています（アップデート確認、Proライセンス確認、匿名の利用統計、任意のフィードバックフォーム）。プライバシーポリシーには統計の内容が正確に記載されています。クラウドエンジンは自分のキーを持ち込む人のためだけにあり、選ぶたびにアプリがその旨を表示します。',
      zh: 'Sablate的初衷，是在素材所在的电脑上完成全部字幕工作：Whisper转写、翻译、编辑和烧录都在一个窗口里完成，无需上传，也没有按分钟计费。这款应用是闭源的，所以我们没有让大家单凭信任去相信“隐私”，而是在文档中列出它发出的每一次对外请求（更新检查、Pro许可检查、匿名使用统计和可选的反馈表单），并在隐私政策中准确列出统计数据包含的内容。云端引擎只提供给自带密钥的用户，每次选用时应用都会明确提示。',
      pt: 'O Sablate existe para fazer todo o trabalho de legendas no computador onde o material já está: transcrição com Whisper, tradução, edição e gravação no vídeo em uma única janela, sem upload e sem cobrança por minuto.',
      ar: 'وُجد Sablate لإنجاز عمل الترجمة النصية كله على الحاسوب الذي توجد عليه اللقطات أصلًا: نسخ صوتي عبر Whisper وترجمة وتحرير ودمج في نافذة واحدة، دون رفع ودون رسوم عن كل دقيقة.',
      ko: 'Sablate는 영상 소스가 이미 있는 컴퓨터에서 자막 작업 전체를 끝내기 위해 만들었습니다.',
    },
    fullQuote: {
      en: [
        'Sablate exists to do the whole subtitle job on the computer where the footage already is: Whisper transcription, translation, editing and burn-in in one window, with no upload and no per-minute fee. The app is closed source, so rather than ask people to take \'private\' on trust, the documentation lists every outbound call it makes (the update check, the Pro license check, anonymous usage statistics and the optional feedback form), and the privacy policy lists exactly what the statistics contain. Cloud engines are only there for people who bring their own key, and the app says so each time one is picked.',
      ],
      de: [
        'Sablate gibt es, um die ganze Untertitelarbeit auf dem Computer zu erledigen, auf dem das Material bereits liegt: Whisper-Transkription, Übersetzung, Bearbeitung und Einbrennen in einem Fenster, ohne Upload und ohne Gebühr pro Minute. Die App ist Closed Source. Statt die Leute bitten zu müssen, „privat“ einfach zu glauben, listet die Dokumentation jeden ausgehenden Aufruf auf (die Update-Prüfung, die Pro-Lizenzprüfung, anonyme Nutzungsstatistik und das optionale Feedback-Formular), und die Datenschutzerklärung nennt genau, was die Statistik enthält. Cloud-Engines gibt es nur für Menschen, die einen eigenen Schlüssel mitbringen, und die App weist jedes Mal darauf hin, wenn eine ausgewählt wird.',
      ],
      es: [
        'Sablate existe para hacer todo el trabajo de subtitulado en el ordenador donde ya está el material: transcripción con Whisper, traducción, edición e incrustación en una sola ventana, sin subir nada y sin cuota por minuto. La app es de código cerrado, así que, en lugar de pedir que se crea en «privado» por fe, la documentación enumera todas las llamadas salientes que hace (la comprobación de actualizaciones, la comprobación de la licencia Pro, las estadísticas de uso anónimas y el formulario opcional de comentarios), y la política de privacidad detalla exactamente qué contienen las estadísticas. Los motores en la nube solo están para quien aporta su propia clave, y la app lo avisa cada vez que se elige uno.',
      ],
      fr: [
        'Sablate existe pour faire tout le travail de sous-titrage sur l\'ordinateur où se trouvent déjà les images : transcription Whisper, traduction, édition et incrustation dans une seule fenêtre, sans envoi de fichiers et sans frais à la minute. L\'application est à code fermé ; plutôt que de demander aux gens de croire « privé » sur parole, la documentation liste chaque appel sortant qu\'elle effectue (la vérification des mises à jour, la vérification de la licence Pro, les statistiques d\'usage anonymes et le formulaire de retour facultatif), et la politique de confidentialité indique exactement ce que contiennent les statistiques. Les moteurs cloud ne sont là que pour ceux qui apportent leur propre clé, et l\'application le signale à chaque fois qu\'on en choisit un.',
      ],
      ja: [
        'Sablateは、素材がすでにあるコンピューター上で字幕作業のすべてを完結させるために作りました。Whisperによる文字起こし、翻訳、編集、焼き込みをひとつのウィンドウで行え、アップロードも分単位の料金も不要です。アプリはクローズドソースなので、「プライベート」を信じてほしいとお願いする代わりに、ドキュメントでアプリが行う外部通信をすべて一覧にしています（アップデート確認、Proライセンス確認、匿名の利用統計、任意のフィードバックフォーム）。プライバシーポリシーには統計の内容が正確に記載されています。クラウドエンジンは自分のキーを持ち込む人のためだけにあり、選ぶたびにアプリがその旨を表示します。',
      ],
      zh: [
        'Sablate的初衷，是在素材所在的电脑上完成全部字幕工作：Whisper转写、翻译、编辑和烧录都在一个窗口里完成，无需上传，也没有按分钟计费。这款应用是闭源的，所以我们没有让大家单凭信任去相信“隐私”，而是在文档中列出它发出的每一次对外请求（更新检查、Pro许可检查、匿名使用统计和可选的反馈表单），并在隐私政策中准确列出统计数据包含的内容。云端引擎只提供给自带密钥的用户，每次选用时应用都会明确提示。',
      ],
      pt: [
        'O Sablate existe para fazer todo o trabalho de legendas no computador onde o material já está: transcrição com Whisper, tradução, edição e gravação no vídeo em uma única janela, sem upload e sem cobrança por minuto. O app é de código fechado; por isso, em vez de pedir que as pessoas acreditem em “privado” por confiança, a documentação lista todas as chamadas de saída que ele faz (a verificação de atualização, a verificação da licença Pro, as estatísticas de uso anônimas e o formulário opcional de feedback), e a política de privacidade lista exatamente o que as estatísticas contêm. Os mecanismos na nuvem existem só para quem traz a própria chave, e o app avisa isso toda vez que um é escolhido.',
      ],
      ar: [
        'وُجد Sablate لإنجاز عمل الترجمة النصية كله على الحاسوب الذي توجد عليه اللقطات أصلًا: نسخ صوتي عبر Whisper وترجمة وتحرير ودمج في نافذة واحدة، دون رفع ودون رسوم عن كل دقيقة. التطبيق مغلق المصدر، ولذلك بدلًا من أن نطلب من الناس تصديق كلمة «خاص» بدافع الثقة، تسرد الوثائق كل اتصال صادر يجريه (فحص التحديثات، وفحص ترخيص Pro، وإحصاءات الاستخدام المجهولة، ونموذج الملاحظات الاختياري)، وتبيّن سياسة الخصوصية بدقة ما تتضمنه الإحصاءات. ولا توجد محركات السحابة إلا لمن يحضر مفتاحه الخاص، ويذكر التطبيق ذلك في كل مرة يُختار فيها أحدها.',
      ],
      ko: [
        'Sablate는 영상 소스가 이미 있는 컴퓨터에서 자막 작업 전체를 끝내기 위해 만들었습니다. Whisper 전사, 번역, 편집, 번인을 한 창에서 처리하며 업로드도, 분당 요금도 없습니다. 앱은 비공개 소스이므로 \'비공개\'를 믿어 달라고 부탁하는 대신, 문서에 앱이 보내는 모든 외부 호출(업데이트 확인, Pro 라이선스 확인, 익명 사용 통계, 선택 사항인 피드백 양식)을 나열했고, 개인정보 처리방침에는 통계에 무엇이 들어 있는지 정확히 적었습니다. 클라우드 엔진은 자신의 키를 가져오는 사용자를 위한 것일 뿐이며, 하나를 고를 때마다 앱이 그 사실을 알려 줍니다.',
      ],
    },
  },
}
