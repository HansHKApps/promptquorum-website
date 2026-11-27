// Local AI App Directory — Weesper Neon Flow: offline push-to-talk dictation for Mac and Windows (layer: desktop dictation app, speech-to-text)
// Added 2026-11-06. Facts verified 2026-11-06 against weesperneonflow.ai (home incl. #pricing and FAQ, /en/download, /en/changelog, /en/about,
// /en/terms, /en/privacy last updated 2026-07-23) and the GitHub Releases API of TheBlueHouse75/weesper-neon-flow-release
// (latest tag direct-v1.8.12, published 2026-10-28T10:35:40Z; assets: macOS universal .dmg, Windows x64 .msi, update manifests).
// Latest version 1.8.12 released 2026-10-28 (changelog + Releases agree). 9 days old on 2026-11-06, so the 3-month stale warning is OFF.
// Prices (EUR, home page): 15-day free trial with all features; Monthly 5 EUR; Annual 45 EUR; Lifetime 99 EUR one-time; 7-day money-back guarantee.
// Local claim (home, FAQ, privacy, terms): speech recognition runs on the device with Whisper (whisper.cpp); audio, transcripts and dictated text are
// not sent to the maker's servers. The network is used for downloads of the app and speech models, licence activation/checks (Cloudflare worker, Stripe billing),
// update metadata (GitHub) and optional PostHog/Sentry diagnostics. Source code and licence: closed (the linked GitHub repo only hosts release installers).
// Conflicts on the maker's own pages, kept out of the tile: About says "No internet connection is required" (FAQ/download say downloads and licence checks need one);
// free tier after the trial is "1,500 words per week" (FAQ) vs "60-second clips" (changelog 1.6.0); "50+" (home) vs "55+" languages (download, changelog 1.0.0).
// Not independently checked: network traffic, the app binary, accuracy, speed. No hands-on testing by PromptQuorum.

// 2026-11-27: the maker read the review ("looks right to me"), sent two fixes (free plan: 60 s per dictation AND 1,500 words/week; internet: only download, activation,
// occasional licence checks) and a founder comment. Both fixes verified on /en/pricing and /en/about. This supersedes the "conflicts" note above. The mail carried no
// personal name, so the maker is not named. Latest release now 1.8.16 (GitHub direct-v1.8.16, 2026-11-24). HQ: France (legal notice + privacy policy).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'weesper-neon-flow',
  name: 'Weesper Neon Flow',
  categories: ['dictation', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker: Whisper runs on the Mac or Windows PC, audio and dictated text never leave the computer; the network is used for downloads, licence checks, billing, updates and optional diagnostics
  platforms: ['mac', 'win'], // download page: macOS 13+ (.dmg) and Windows 10 build 19041+ / Windows 11 (.msi); no Linux, iOS or Android
  worksWith: ['Whisper', 'whisper.cpp'],
  engine: 'builtin', // ships its own whisper.cpp runtime with downloadable speech profiles (Minimal ~75 MB, Small 512 MB default, Medium 1.5 GB, Large 3.2 GB)
  license: 'Proprietary (closed source)', // the linked GitHub repo only hosts release installers; no source licence stated
  price: 'paid', // 15-day free trial, then 5 EUR/month, 45 EUR/year or 99 EUR once; free plan after the trial: 60 s per dictation and 1,500 words a week
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // download page minimum: 4 GB RAM (8 GB+ recommended), x64 with AVX2 on Windows; Apple Silicon or Intel with AVX2 on Mac; Small model needs about 600 MB disk
  stars: null, // no public source repository
  addedDate: '2026-11-06',
  status: 'listed',
  uses: ['audio'],
  url: 'weesperneonflow.ai',
  storeLinks: {
    web: 'https://weesperneonflow.ai',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases direct-v1.8.16 (2026-11-24) checked 2026-11-27: Weesper-Neon-Flow-1.8.16-macOS-universal.dmg and Weesper-Neon-Flow-1.8.16-Windows-x64.msi, standard installers, no terminal step; speech models download inside the app',
  tagline: {
    en: 'Offline push-to-talk dictation for Mac and Windows that runs Whisper on your computer and types the cleaned-up text into any app',
    de: 'Offline-Diktat per Tastenkürzel für Mac und Windows, das Whisper auf Ihrem Rechner ausführt und den bereinigten Text in jede App einfügt',
    fr: 'Dictée hors ligne par raccourci pour Mac et Windows, qui exécute Whisper sur votre ordinateur et insère le texte nettoyé dans n’importe quelle application',
    ja: 'MacとWindows向けのオフライン音声入力。Whisperをお使いのPC上で実行し、整えたテキストを任意のアプリに入力するショートカット式ツール',
    zh: '适用于 Mac 和 Windows 的离线按键听写工具，在你的电脑上运行 Whisper，并把整理后的文字输入到任意应用',
    es: 'Dictado sin conexión con atajo para Mac y Windows que ejecuta Whisper en tu ordenador e inserta el texto limpio en cualquier aplicación',
    pt: 'Ditado offline por atalho para Mac e Windows que executa o Whisper no seu computador e insere o texto limpo em qualquer aplicativo',
    ar: 'إملاء صوتي دون اتصال لأجهزة Mac وWindows يشغّل Whisper على حاسوبك ويُدخل النص المنقّح في أي تطبيق باختصار لوحة المفاتيح',
    ko: 'Mac과 Windows에서 Whisper를 내 컴퓨터로 실행해 정리된 텍스트를 어떤 앱에든 입력하는 오프라인 단축키 받아쓰기 도구',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-06 (home: "50+ languages"; changelog 1.7.5 Meeting mode with speaker diarization); a missing key = not stated, never false.
  compare: { languages: 50, speakerLabels: true },
  reviewSlug: 'weesper-neon-flow-review',
  pqReview: {
    date: '2026-11-27',
    version: '1.8.16',
    versionSourceUrl: 'https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases/latest',
  },
  founder: {
    who: {
      en: 'The maker of Weesper Neon Flow',
      de: 'Der Entwickler von Weesper Neon Flow',
      fr: 'Le développeur de Weesper Neon Flow',
      ja: 'Weesper Neon Flow開発者',
      zh: 'Weesper Neon Flow开发者',
      es: 'El desarrollador de Weesper Neon Flow',
      pt: 'O desenvolvedor do Weesper Neon Flow',
      ar: 'مطوّر Weesper Neon Flow',
      ko: 'Weesper Neon Flow 개발자',
    },
    providedDate: '2026-11-27',
    why: {
      en: 'I started Weesper Neon Flow because I dictate a lot and didn’t want my voice going to a cloud service. Recognition runs with Whisper on your own Mac or PC.',
      de: 'Ich habe Weesper Neon Flow begonnen, weil ich viel diktiere und nicht wollte, dass meine Stimme an einen Cloud-Dienst geht. Die Erkennung läuft mit Whisper auf Ihrem eigenen Mac oder PC.',
      fr: 'J’ai lancé Weesper Neon Flow parce que je dicte beaucoup et que je ne voulais pas que ma voix parte vers un service cloud. La reconnaissance s’exécute avec Whisper sur votre propre Mac ou PC.',
      ja: '私は音声入力をよく使いますが、自分の声がクラウドサービスに送られるのは避けたいと考え、Weesper Neon Flowを始めました。音声認識は、お使いのMacやPC上のWhisperで実行されます。',
      zh: '我开始做Weesper Neon Flow，是因为我经常听写，不想让自己的声音传到云服务上。语音识别通过Whisper在你自己的Mac或电脑上运行。',
      es: 'Empecé Weesper Neon Flow porque dicto mucho y no quería que mi voz acabara en un servicio en la nube. El reconocimiento se ejecuta con Whisper en tu propio Mac o PC.',
      pt: 'Comecei o Weesper Neon Flow porque dito muito e não queria que minha voz fosse para um serviço na nuvem. O reconhecimento roda com o Whisper no seu próprio Mac ou PC.',
      ar: 'بدأتُ Weesper Neon Flow لأنني أُملي كثيرًا ولم أرد أن يذهب صوتي إلى خدمة سحابية. ويجري التعرف على الكلام بنموذج Whisper على جهاز Mac أو الحاسوب الخاص بك.',
      ko: '저는 받아쓰기를 많이 하는데 제 목소리가 클라우드 서비스로 가는 것을 원하지 않아 Weesper Neon Flow를 시작했습니다. 음성 인식은 사용자의 Mac이나 PC에서 Whisper로 실행됩니다.',
    },
    best: {
      en: 'The 15-day trial has every feature, so you can judge speed and accuracy on your own machine before paying.',
      de: 'Die 15-tägige Testversion enthält alle Funktionen, sodass Sie Geschwindigkeit und Genauigkeit auf Ihrem eigenen Rechner beurteilen können, bevor Sie bezahlen.',
      fr: 'L’essai de 15 jours comprend toutes les fonctions : vous pouvez donc juger la vitesse et la précision sur votre propre machine avant de payer.',
      ja: '15日間の体験版ではすべての機能が使えるので、支払う前に、ご自身のマシンで速度と精度を確かめられます。',
      zh: '15天试用版包含全部功能，因此你可以在付费之前，在自己的机器上判断速度和准确度。',
      es: 'La prueba de 15 días incluye todas las funciones, así que puedes valorar la velocidad y la precisión en tu propio equipo antes de pagar.',
      pt: 'O teste de 15 dias tem todos os recursos, então você pode avaliar a velocidade e a precisão na sua própria máquina antes de pagar.',
      ar: 'وتتضمن التجربة الممتدة 15 يومًا كل الميزات، فيمكنك الحكم على السرعة والدقة على جهازك قبل أن تدفع.',
      ko: '15일 체험판에는 모든 기능이 들어 있어, 결제하기 전에 자신의 컴퓨터에서 속도와 정확도를 판단할 수 있습니다.',
    },
    fullQuote: {
      en: [
        'I started Weesper Neon Flow because I dictate a lot and didn’t want my voice going to a cloud service. Recognition runs with Whisper on your own Mac or PC. The 15-day trial has every feature, so you can judge speed and accuracy on your own machine before paying.',
      ],
      de: [
        'Ich habe Weesper Neon Flow begonnen, weil ich viel diktiere und nicht wollte, dass meine Stimme an einen Cloud-Dienst geht. Die Erkennung läuft mit Whisper auf Ihrem eigenen Mac oder PC. Die 15-tägige Testversion enthält alle Funktionen, sodass Sie Geschwindigkeit und Genauigkeit auf Ihrem eigenen Rechner beurteilen können, bevor Sie bezahlen.',
      ],
      fr: [
        'J’ai lancé Weesper Neon Flow parce que je dicte beaucoup et que je ne voulais pas que ma voix parte vers un service cloud. La reconnaissance s’exécute avec Whisper sur votre propre Mac ou PC. L’essai de 15 jours comprend toutes les fonctions : vous pouvez donc juger la vitesse et la précision sur votre propre machine avant de payer.',
      ],
      ja: [
        '私は音声入力をよく使いますが、自分の声がクラウドサービスに送られるのは避けたいと考え、Weesper Neon Flowを始めました。音声認識は、お使いのMacやPC上のWhisperで実行されます。15日間の体験版ではすべての機能が使えるので、支払う前に、ご自身のマシンで速度と精度を確かめられます。',
      ],
      zh: [
        '我开始做Weesper Neon Flow，是因为我经常听写，不想让自己的声音传到云服务上。语音识别通过Whisper在你自己的Mac或电脑上运行。15天试用版包含全部功能，因此你可以在付费之前，在自己的机器上判断速度和准确度。',
      ],
      es: [
        'Empecé Weesper Neon Flow porque dicto mucho y no quería que mi voz acabara en un servicio en la nube. El reconocimiento se ejecuta con Whisper en tu propio Mac o PC. La prueba de 15 días incluye todas las funciones, así que puedes valorar la velocidad y la precisión en tu propio equipo antes de pagar.',
      ],
      pt: [
        'Comecei o Weesper Neon Flow porque dito muito e não queria que minha voz fosse para um serviço na nuvem. O reconhecimento roda com o Whisper no seu próprio Mac ou PC. O teste de 15 dias tem todos os recursos, então você pode avaliar a velocidade e a precisão na sua própria máquina antes de pagar.',
      ],
      ar: [
        'بدأتُ Weesper Neon Flow لأنني أُملي كثيرًا ولم أرد أن يذهب صوتي إلى خدمة سحابية. ويجري التعرف على الكلام بنموذج Whisper على جهاز Mac أو الحاسوب الخاص بك. وتتضمن التجربة الممتدة 15 يومًا كل الميزات، فيمكنك الحكم على السرعة والدقة على جهازك قبل أن تدفع.',
      ],
      ko: [
        '저는 받아쓰기를 많이 하는데 제 목소리가 클라우드 서비스로 가는 것을 원하지 않아 Weesper Neon Flow를 시작했습니다. 음성 인식은 사용자의 Mac이나 PC에서 Whisper로 실행됩니다. 15일 체험판에는 모든 기능이 들어 있어, 결제하기 전에 자신의 컴퓨터에서 속도와 정확도를 판단할 수 있습니다.',
      ],
    },
  },
  founderReviewedDate: '2026-11-27', // the maker read the finished review and wrote that it looks right, with two small fixes (both integrated)
  hqCountry: 'FR', // THE BLUE HOUSE (SASU), registered office in Paris
  hqCountrySource: 'https://weesperneonflow.ai/en/legal/',
  verdict: 'Best for Mac and Windows users who want push-to-talk dictation that keeps speech recognition on their own computer and who accept a paid, closed-source app (15-day trial, then 5 EUR a month, 45 EUR a year or 99 EUR once); limited by no Linux or mobile version, a free plan after the trial capped at 60 seconds per dictation and 1,500 words a week, and privacy claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-27',
  lastUpstreamUpdate: '2026-11-24', // GitHub Releases direct-v1.8.16 published 2026-11-24, matching the website changelog; read 2026-11-27
  lastUpstreamUpdateSource: 'https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases/latest',
}
