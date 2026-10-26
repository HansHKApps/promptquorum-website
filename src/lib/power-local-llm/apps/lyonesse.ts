// Local AI App Directory — Lyonesse: AI Transcript & Chat (layer: stt + document chat, iPhone / iPad / Mac)
// Added 2026-10-26 on the owner's request (same developer as Castmates). Verified 2026-10-26 against: the App Store listing and iTunes lookup
// (id6754086711: seller Josip Markovic / copyright "Markovic Software, obrt za usluge", v2.0.7 released 2026-10-23, first listed 2025-10-31,
// iOS/iPadOS/macOS/visionOS 26.0+, watchOS 11.0+, 68.9 MB, free with in-app purchases), lyonesse.app (features, pricing, comparison table),
// lyonesse.app/privacy.html (last updated 2026-10-09), lyonesse.app/terms.html (last updated 2025-10-28) and the maker's two measurement posts
// (blog/meeting-notes-upload-measured.html, blog/parakeet-moss-apple-speech-benchmark.html — vendor self-tests, not independent).
// Per-storefront in-app prices read from the App Store pages 2026-10-26 (Monthly / Annual / Unlimited lifetime): US $7.99 / $29.99 / $59.99,
// DE/ES/FR 8,99 / 34,99 / 69,99 EUR, JP JPY 1,300 / 5,000 / 10,000, KR KRW 12,000 / 49,000 / 99,000, BR R$ 49,90 / 199,90 / 399,90.
// Storefront titles differ: "Lyonesse: KI Transkript & Chat" (DE), "Lyonesse: AI文字起こし・チャット" (JP), "Lyonesse: AI 받아쓰기, 노트, 챗" (KR),
// "Lyonesse: Transcrição, Chat IA" (BR), "Lyonesse: Transcribir, Chat IA" (ES), "Lyonesse: Transcrire & Chat IA" (FR). Renamed from "Inscribe" in v2.0.1.
// No source repository, so licence is closed source and `engine` builtin. Conflicts stated in the review, not resolved: the privacy policy says iCloud sync
// is on by default while the App Store text says it is off by default; the terms (2025-10-28) say the app requires Apple Intelligence-capable hardware
// while the site offers a downloadable local model.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lyonesse',
  name: 'Lyonesse',
  categories: ['speech-to-text', 'document-pdf-chat'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local', // developer: transcription, summaries and Q&A run on the device; policy lists anonymized analytics and crash reports, and iCloud sync of text (see review)
  platforms: ['ios', 'ipados', 'mac', 'watchos'], // universal app: iPhone, iPad, Mac (macOS 26.0+, Apple silicon recommended), plus an Apple Watch recorder (watchOS 11.0+); visionOS listed by the App Store
  worksWith: ['Apple Intelligence', 'Apple Speech', 'NVIDIA Parakeet', 'iCloud', 'Apple Reminders'],
  engine: 'builtin', // Apple Speech or NVIDIA Parakeet for transcription; Apple Intelligence or a downloadable local model for summaries and chat (maker, v2.0.0 notes: model chosen to suit the device)
  license: 'Closed source',
  price: 'freemium', // free download with one recording; Monthly $7.99, Annual $29.99, Unlimited (lifetime) $59.99 on the US store, 2026-10-26
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM figure stated; on-device AI works best on iPhone 15 Pro or later, M-series iPad, Apple-silicon Mac (maker's site)
  stars: null, // no public repository
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['audio', 'docs', 'phone'],
  url: 'lyonesse.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711',
    web: 'https://lyonesse.app',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6754086711 (free, iOS/iPadOS/macOS 26.0+, 68.9 MB, speech and AI models download once on first use per the maker), read 2026-10-26; no terminal step',
  tagline: {
    en: 'Offline transcription, meeting notes and document chat for iPhone, iPad and Mac, with no account and a lifetime-purchase option',
    de: 'Offline-Transkription, Meeting-Notizen und Dokument-Chat für iPhone, iPad und Mac, ohne Konto und mit Einmalkauf-Option',
    fr: 'Transcription hors ligne, notes de réunion et chat de documents pour iPhone, iPad et Mac, sans compte et avec achat à vie',
    ja: 'iPhone・iPad・Mac向けのオフライン文字起こし、会議メモ、ドキュメントチャット。アカウント不要で買い切りも選べる',
    zh: '适用于 iPhone、iPad 和 Mac 的离线转录、会议笔记与文档对话应用，无需账号，可选终身买断',
    es: 'Transcripción sin conexión, notas de reuniones y chat de documentos para iPhone, iPad y Mac, sin cuenta y con compra vitalicia',
    pt: 'Transcrição offline, notas de reuniões e chat com documentos para iPhone, iPad e Mac, sem conta e com compra vitalícia',
    ar: 'تفريغ صوتي ومحاضر اجتماعات ودردشة مع المستندات دون إنترنت لأجهزة iPhone وiPad وMac، دون حساب مع خيار الشراء الدائم',
    ko: 'iPhone·iPad·Mac용 오프라인 받아쓰기, 회의 노트, 문서 채팅 앱으로 계정이 필요 없고 평생 구매 옵션을 제공합니다',
  },
  reviewSlug: 'lyonesse-review',
  // Comparison attributes (speech-to-text segment): 15 transcription languages, live transcription and speaker labels are stated on the maker's site
  // and App Store text. cpuUsable (Apple-silicon/Neural Engine app) and apiServer are not stated, so they stay unset (never false).
  compare: { languages: 15, realtime: true, speakerLabels: true },
  pqReview: {
    date: '2026-10-26',
    version: '2.0.7',
    versionSourceUrl: 'https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711',
  },
  verdict: 'Best for iPhone and Mac owners with recent Apple hardware who want account-free transcription, meeting notes and document chat with a lifetime-purchase option; limited by closed source, an iOS/macOS 26 minimum, a one-person developer, privacy and benchmark claims that rest on the maker\'s own statements and conflicting sync-default wording.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-23', // App Store version 2.0.7, currentVersionReleaseDate 2026-10-23T20:17:04Z via the iTunes lookup, read 2026-10-26
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711',
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
      en: 'I built Lyonesse because I wanted meeting notes without a bot joining the call and without my audio going to someone\'s server.',
      de: 'Ich habe Lyonesse gebaut, weil ich Meeting-Notizen wollte, ohne dass ein Bot dem Gespräch beitritt und ohne dass mein Audio auf dem Server von irgendjemandem landet.',
      es: 'Creé Lyonesse porque quería notas de reuniones sin que un bot se uniera a la llamada y sin que mi audio fuera al servidor de otra persona.',
      fr: 'J’ai créé Lyonesse parce que je voulais des notes de réunion sans qu’un bot rejoigne l’appel et sans que mon audio parte sur le serveur de quelqu’un d’autre.',
      ja: '通話にボットが参加せず、自分の音声が誰かのサーバーに送られない会議メモが欲しくて、Lyonesseを作りました。',
      pt: 'Criei o Lyonesse porque queria notas de reunião sem um bot entrando na chamada e sem o meu áudio indo para o servidor de alguém.',
      ar: 'بنيت Lyonesse لأنني أردت محاضر اجتماعات دون أن ينضم بوت إلى المكالمة ودون أن يذهب صوتي إلى خادم أحد.',
      zh: '我开发 Lyonesse，是因为我想要不需要机器人加入通话、音频也不会传到别人服务器上的会议笔记。',
      ko: '저는 통화에 봇이 들어오지 않고 제 오디오가 남의 서버로 가지 않는 회의 노트를 원해서 Lyonesse를 만들었습니다.',
    },
    fullQuote: {
      en: [
        'I built Lyonesse because I wanted meeting notes without a bot joining the call and without my audio going to someone\'s server. Everything runs on the device: Apple\'s speech model or Parakeet for transcription, Apple Intelligence or a small open model for summaries. When I measured it, a 10-minute meeting sent 0.02 MB from Lyonesse against 115.7 MB from Notion\'s meeting notes. Next up are the things users asked for: subfolders, a default note format per folder and one-off AI instructions on a note.',
      ],
      de: [
        'Ich habe Lyonesse gebaut, weil ich Meeting-Notizen wollte, ohne dass ein Bot dem Gespräch beitritt und ohne dass mein Audio auf dem Server von irgendjemandem landet. Alles läuft auf dem Gerät: Apples Sprachmodell oder Parakeet für die Transkription, Apple Intelligence oder ein kleines offenes Modell für die Zusammenfassungen. Als ich es gemessen habe, sendete ein 10-minütiges Meeting 0,02 MB von Lyonesse, gegenüber 115,7 MB bei den Meeting-Notizen von Notion. Als Nächstes folgen die Dinge, die sich Nutzer gewünscht haben: Unterordner, ein Standard-Notizformat pro Ordner und einmalige KI-Anweisungen zu einer Notiz.',
      ],
      es: [
        'Creé Lyonesse porque quería notas de reuniones sin que un bot se uniera a la llamada y sin que mi audio fuera al servidor de otra persona. Todo se ejecuta en el dispositivo: el modelo de voz de Apple o Parakeet para la transcripción, Apple Intelligence o un modelo abierto pequeño para los resúmenes. Cuando lo medí, una reunión de 10 minutos envió 0.02 MB desde Lyonesse frente a 115.7 MB de las notas de reuniones de Notion. Lo próximo son las cosas que pidieron los usuarios: subcarpetas, un formato de nota predeterminado por carpeta e instrucciones de IA puntuales en una nota.',
      ],
      fr: [
        'J’ai créé Lyonesse parce que je voulais des notes de réunion sans qu’un bot rejoigne l’appel et sans que mon audio parte sur le serveur de quelqu’un d’autre. Tout s’exécute sur l’appareil : le modèle vocal d’Apple ou Parakeet pour la transcription, Apple Intelligence ou un petit modèle ouvert pour les résumés. Lors de ma mesure, une réunion de 10 minutes a envoyé 0.02 MB depuis Lyonesse contre 115.7 MB depuis les notes de réunion de Notion. La suite porte sur ce que les utilisateurs ont demandé : des sous-dossiers, un format de note par défaut pour chaque dossier et des instructions IA ponctuelles sur une note.',
      ],
      ja: [
        '通話にボットが参加せず、自分の音声が誰かのサーバーに送られない会議メモが欲しくて、Lyonesseを作りました。すべて端末上で動きます。文字起こしはAppleの音声モデルかParakeet、要約はApple Intelligenceか小さなオープンモデルです。計測したところ、10分間の会議でLyonesseが送信したのは0.02 MB、Notionの議事録機能は115.7 MBでした。次は、ユーザーから要望の多かったサブフォルダ、フォルダごとのデフォルトのメモ形式、メモに対する一回限りのAI指示に取り組みます。',
      ],
      pt: [
        'Criei o Lyonesse porque queria notas de reunião sem um bot entrando na chamada e sem o meu áudio indo para o servidor de alguém. Tudo roda no aparelho: o modelo de fala da Apple ou o Parakeet para a transcrição, a Apple Intelligence ou um modelo aberto pequeno para os resumos. Quando medi, uma reunião de 10 minutos enviou 0.02 MB pelo Lyonesse, contra 115.7 MB pelas notas de reunião do Notion. Os próximos passos são o que os usuários pediram: subpastas, um formato de nota padrão por pasta e instruções de IA pontuais em uma nota.',
      ],
      ar: [
        'بنيت Lyonesse لأنني أردت محاضر اجتماعات دون أن ينضم بوت إلى المكالمة ودون أن يذهب صوتي إلى خادم أحد. كل شيء يعمل على الجهاز: نموذج الكلام من Apple أو Parakeet للتفريغ الصوتي، وApple Intelligence أو نموذج مفتوح صغير للملخصات. وعندما قِستُه، أرسل اجتماع مدته 10 دقائق 0.02 MB من Lyonesse مقابل 115.7 MB من ملاحظات الاجتماعات في Notion. والخطوة التالية هي ما طلبه المستخدمون: مجلدات فرعية، وصيغة ملاحظة افتراضية لكل مجلد، وتعليمات ذكاء اصطناعي لمرة واحدة على ملاحظة.',
      ],
      zh: [
        '我开发 Lyonesse，是因为我想要不需要机器人加入通话、音频也不会传到别人服务器上的会议笔记。一切都在设备上运行：转录用 Apple 的语音模型或 Parakeet，摘要用 Apple Intelligence 或一个小型开放模型。我测量过：一场 10 分钟的会议，Lyonesse 发送了 0.02 MB，而 Notion 的会议笔记发送了 115.7 MB。接下来要做的是用户提出的需求：子文件夹、每个文件夹的默认笔记格式，以及针对单条笔记的一次性 AI 指令。',
      ],
      ko: [
        '저는 통화에 봇이 들어오지 않고 제 오디오가 남의 서버로 가지 않는 회의 노트를 원해서 Lyonesse를 만들었습니다. 모든 작업은 기기에서 실행됩니다. 받아쓰기에는 Apple의 음성 모델 또는 Parakeet을, 요약에는 Apple Intelligence 또는 작은 오픈 모델을 사용합니다. 측정해 보니 10분짜리 회의에서 Lyonesse는 0.02 MB를 전송한 반면 Notion의 회의 노트는 115.7 MB를 전송했습니다. 다음 계획은 사용자 여러분이 요청하신 하위 폴더, 폴더별 기본 노트 형식, 노트별 일회성 AI 지시입니다.',
      ],
    },
  },
}
