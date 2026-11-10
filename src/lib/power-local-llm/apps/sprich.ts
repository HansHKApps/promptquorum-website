// Local AI App Directory — Sprich: German-made macOS dictation app (Apple Silicon) with on-device speech recognition (layer: desktop dictation app, speech-to-text)
// Added 2026-11-09. Facts verified 2026-11-09 against sprich.ai (home incl. its schema.org markup and pricing section, /download, /changelog, /about, /imprint,
// /privacy-policy (Stand 22 Oktober 2026), /vs/superwhisper). No GitHub repo or source link on any page read; licence is not stated -> treated as closed source, not asserted.
// Latest release v2.2.4 dated 2026-10-22 on /changelog and /download (.dmg, 18.2 MB, "macOS 15+", "Apple-Chip (M1 oder neuer)", "Auf Intel-Macs läuft Sprich nicht").
// So the 3-month stale warning is OFF (18 days since the last update).
// Local claim (home, privacy policy): macOS app processes audio on the Mac; home names Parakeet for transcription + a fine-tuned post-processing model, the privacy policy
// names "u. a. Whisper für Spracherkennung" plus a fine-tuned language model — the two pages are not reconciled; the review states both and asserts neither.
// Not local: the privacy policy also describes a Windows application ("Sprich Cloud") that streams dictation audio to the maker's server (Canary 1B v2, hosted in Finland, EU) —
// while the home page offers only a Windows waitlist; free-tier users' weekly/total word counts are sent to the server and tied to the account; models are downloaded via Cloudflare R2.
// Languages: product is "Optimiert für Deutsch" (dialects, Fachsprache, Denglisch); its own /vs/superwhisper page says "primär für Deutsch und Englisch optimiert";
// the free plan lists "Alle Apps · alle Sprachen". The home page's schema.org markup carried a language count that the maker could not confirm on 2026-11-10; it is deliberately not reproduced anywhere on the site (owner request).
// Maker (2026-11-10): Parakeet understands about 25 European languages; dictation is optimized for German; the app UI is German only by choice.
// Prices (EUR, home #preise): Free 0 € (2,000 words/week, 1 file, 3 meetings, 5 dictionary entries); Pro 8 €/month or 6 €/month billed yearly; Lifetime 150 € once ("Alle Updates der lokalen App").
// Maker: Victor Vollmann, Agricolastraße 55b, 80686 München (Impressum); about page: founded 2025 by three friends (Vollmann, Jakob Spetkamp, Leo Wiedemann). Not checked: network traffic, accuracy, speed.
// No hands-on testing by PromptQuorum.
// 2026-11-10 maker update (Jakob, co-founder): Parakeet + fine-tuned post-processing model on the Mac, Whisper not used (policy entry outdated); Windows = cloud beta for Mac+Windows (Helsinki, RAM only, no storage/training), local app sends no audio;
// Parakeet ~25 European languages (the 57-language site-markup figure is removed everywhere); dictation optimized for German; UI German only. `founder` set (maker note); `founderReviewedDate` set 2026-11-10 (owner decision: Jakob approved the text indirectly).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sprich',
  name: 'Sprich',
  categories: ['dictation', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker's home page + privacy policy: the macOS app transcribes on the Mac; account sign-in, free-tier word counts, model downloads and optional statistics use the network (see header)
  platforms: ['mac'], // macOS 15+ on Apple Silicon only (/download: Intel Macs not supported); Windows/iOS/Android are waitlist-only on the home page
  worksWith: [],
  engine: 'builtin', // ships its own on-device models: Parakeet + a fine-tuned post-processing model (maker, 2026-11-10; Whisper is not used, the policy entry is outdated); downloaded inside the app
  license: 'Proprietary (closed source)', // no source repo or licence statement found; the site does not say "closed source" in words
  price: 'freemium', // Free 0 € (2,000 words/week) · Pro 8 €/month (6 € billed yearly) · Lifetime 150 € once
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // /download: Apple Silicon (M1 or newer) + macOS 15 or newer; no RAM figure stated
  stars: null, // no public repository found
  addedDate: '2026-11-09',
  status: 'listed',
  uses: ['audio'],
  url: 'sprich.ai',
  storeLinks: {
    web: 'https://www.sprich.ai',
  },
  installEffort: 'installer',
  installEvidence: 'sprich.ai/download checked 2026-11-09: "Version 2.2.4 · Apple Silicon · 18.2 MB · macOS 15+", ".dmg öffnen → Sprich in Programme ziehen → loslegen"; no terminal step; Intel Macs not supported',
  tagline: {
    en: 'German-made Mac dictation app that, per its maker, transcribes on your Apple Silicon Mac and types into any app; free tier, German-first, site in German only',
    de: 'Diktier-App aus Deutschland für den Mac, die laut Hersteller auf Ihrem Apple-Silicon-Mac transkribiert und in jede App schreibt; Gratis-Tarif, auf Deutsch ausgerichtet, Website nur auf Deutsch',
    fr: 'Application de dictée allemande pour Mac qui, selon son éditeur, transcrit sur votre Mac Apple Silicon et écrit dans n’importe quelle application ; offre gratuite, pensée d’abord pour l’allemand, site uniquement en allemand',
    ja: 'ドイツ製のMac用音声入力アプリ。開発元によればApple SiliconのMac上で文字起こしし、任意のアプリに入力します。無料プランあり、ドイツ語優先、サイトはドイツ語のみ',
    zh: '德国制造的 Mac 听写应用，据开发者称在你的 Apple Silicon Mac 上转写并输入到任意应用；有免费套餐，以德语为先，网站仅有德语版',
    es: 'App de dictado alemana para Mac que, según su desarrollador, transcribe en tu Mac con Apple Silicon y escribe en cualquier aplicación; plan gratuito, orientada primero al alemán, web solo en alemán',
    pt: 'App de ditado alemão para Mac que, segundo o desenvolvedor, transcreve no seu Mac com Apple Silicon e escreve em qualquer aplicativo; plano gratuito, voltado primeiro ao alemão, site só em alemão',
    ar: 'تطبيق إملاء ألماني الصنع لأجهزة Mac يُجري التحويل بحسب مطوّره على جهاز Mac بمعالج Apple Silicon ويكتب في أي تطبيق؛ خطة مجانية، يركّز أولًا على الألمانية، والموقع بالألمانية فقط',
    ko: '독일에서 만든 Mac용 받아쓰기 앱으로, 개발사에 따르면 Apple Silicon Mac에서 변환하여 어떤 앱에든 입력합니다. 무료 요금제, 독일어 우선, 웹사이트는 독일어만 제공',
  },
  // Comparison attributes. languages = 25: the maker (Jakob, 2026-11-10) states Parakeet understands about 25 European languages (selectable for file transcription); the earlier "57 languages" site-markup figure was removed on 2026-11-10 at the owner's request;
  // speakerLabels = meeting mode "erkennt nach dem Ende die einzelnen Sprecher" (changelog v2.2.0); a missing key = not stated, never false.
  compare: { languages: 25, speakerLabels: true },
  reviewSlug: 'sprich-review',
  pqReview: {
    date: '2026-11-10',
    version: '2.2.4',
    versionSourceUrl: 'https://www.sprich.ai/changelog',
  },
  verdict: 'Best for German-speaking Mac users on Apple Silicon who want push-to-talk dictation into any app, a free tier and a one-off Lifetime option, and who accept a German-only interface and a closed-source app; limited by macOS 15 on Apple Silicon only (Windows is a cloud beta), about 25 European languages and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-10',
  lastUpstreamUpdate: '2026-10-22', // sprich.ai/changelog: v2.2.4 dated 2026-10-22 is still the newest entry; re-read 2026-11-10 (19 days, stale warning OFF)
  lastUpstreamUpdateSource: 'https://www.sprich.ai/changelog',
  founderReviewedDate: '2026-11-10', // Owner decision 2026-11-10: Jakob (co-founder) approved the review indirectly; drives the Founder-reviewed banner + star. Single review, so no founderReviewDates.
  founder: {
    who: {
      en: 'Jakob, co-founder',
      de: 'Jakob, Mitgründer',
      es: 'Jakob, cofundador',
      fr: 'Jakob, cofondateur',
      ja: 'Jakob氏、共同創業者',
      pt: 'Jakob, cofundador',
      ar: 'Jakob، أحد المؤسسين',
      zh: 'Jakob,联合创始人',
      ko: 'Jakob, 공동 창업자',
    },
    providedDate: '2026-11-10',
    why: {
      en: 'We built Sprich because dictating in German on the Mac was either poor or sent everything to a US cloud.',
      de: 'Wir haben Sprich gebaut, weil Diktieren auf Deutsch am Mac entweder schlecht war oder alles in eine US-Cloud geschickt hat.',
      es: 'Creamos Sprich porque dictar en alemán en el Mac era o malo o enviaba todo a una nube de EE. UU.',
      fr: 'Nous avons créé Sprich parce que la dictée en allemand sur Mac était soit mauvaise, soit envoyait tout vers un cloud américain.',
      ja: '私たちがSprichを作ったのは、Macでのドイツ語の音声入力が、精度が低いか、すべてを米国のクラウドに送るかのどちらかだったからです。',
      pt: 'Criamos o Sprich porque ditar em alemão no Mac era ruim ou mandava tudo para uma nuvem dos EUA.',
      ar: 'بنينا Sprich لأن الإملاء بالألمانية على Mac كان إما رديئًا أو يرسل كل شيء إلى سحابة أمريكية.',
      zh: '我们开发 Sprich，是因为在 Mac 上用德语听写，要么效果差，要么把一切都发到美国的云端。',
      ko: '저희는 Mac에서 독일어로 받아쓰기를 하면 품질이 나쁘거나 모든 것이 미국 클라우드로 전송되었기 때문에 Sprich를 만들었습니다.',
    },
    fullQuote: {
      en: [
        'We built Sprich because dictating in German on the Mac was either poor or sent everything to a US cloud. Doctors, lawyers and authors in particular are not allowed to, or do not want to, do that. That is why Sprich runs entirely locally and is trained for German, including technical terms and Denglisch. Next come Windows and the cloud version for everyone who does not have an Apple Silicon Mac.',
      ],
      de: [
        'Wir haben Sprich gebaut, weil Diktieren auf Deutsch am Mac entweder schlecht war oder alles in eine US-Cloud geschickt hat. Gerade Ärzte, Anwälte und Autoren dürfen oder wollen das nicht. Deshalb läuft Sprich komplett lokal und ist auf Deutsch trainiert, inklusive Fachbegriffen und Denglisch. Als Nächstes kommen Windows und die Cloud-Version für alle, die keinen Apple-Silicon-Mac haben.',
      ],
      es: [
        'Creamos Sprich porque dictar en alemán en el Mac era o malo o enviaba todo a una nube de EE. UU. Sobre todo médicos, abogados y autores no pueden o no quieren hacerlo. Por eso Sprich funciona completamente en local y está entrenado para el alemán, incluidos los términos técnicos y el Denglisch. Lo siguiente son Windows y la versión en la nube para quienes no tienen un Mac con Apple Silicon.',
      ],
      fr: [
        'Nous avons créé Sprich parce que la dictée en allemand sur Mac était soit mauvaise, soit envoyait tout vers un cloud américain. Les médecins, les avocats et les auteurs, en particulier, n\'ont pas le droit de le faire ou ne le veulent pas. C\'est pourquoi Sprich fonctionne entièrement en local et est entraîné pour l\'allemand, y compris les termes techniques et le « Denglisch » (mélange d\'allemand et d\'anglais). Viennent ensuite Windows et la version cloud pour tous ceux qui n\'ont pas de Mac Apple Silicon.',
      ],
      ja: [
        '私たちがSprichを作ったのは、Macでのドイツ語の音声入力が、精度が低いか、すべてを米国のクラウドに送るかのどちらかだったからです。特に医師、弁護士、作家は、それが許されないか、望まないのです。だからSprichは完全にローカルで動作し、専門用語やドイツ語と英語の混在（Denglisch）も含めてドイツ語向けに学習されています。次はWindows版と、Apple SiliconのMacを持たない方のためのクラウド版です。',
      ],
      pt: [
        'Criamos o Sprich porque ditar em alemão no Mac era ruim ou mandava tudo para uma nuvem dos EUA. Médicos, advogados e autores, em especial, não podem ou não querem fazer isso. Por isso o Sprich roda totalmente local e é treinado para o alemão, incluindo termos técnicos e Denglisch. Os próximos passos são o Windows e a versão em nuvem para quem não tem um Mac com Apple Silicon.',
      ],
      ar: [
        'بنينا Sprich لأن الإملاء بالألمانية على Mac كان إما رديئًا أو يرسل كل شيء إلى سحابة أمريكية. والأطباء والمحامون والمؤلفون خصوصًا لا يُسمح لهم بذلك أو لا يريدونه. لذلك يعمل Sprich محليًا بالكامل ومدرَّب على الألمانية، بما في ذلك المصطلحات المتخصصة والمزج بين الألمانية والإنجليزية (Denglisch). والخطوة التالية هي Windows والنسخة السحابية لكل من لا يملك جهاز Mac بمعالج Apple Silicon.',
      ],
      zh: [
        '我们开发 Sprich，是因为在 Mac 上用德语听写，要么效果差，要么把一切都发到美国的云端。尤其是医生、律师和作家，往往不被允许或不愿这样做。所以 Sprich 完全在本地运行，并针对德语训练，包括专业术语和德英混用（Denglisch）。接下来是 Windows 版，以及面向没有 Apple Silicon Mac 的用户的云端版本。',
      ],
      ko: [
        '저희는 Mac에서 독일어로 받아쓰기를 하면 품질이 나쁘거나 모든 것이 미국 클라우드로 전송되었기 때문에 Sprich를 만들었습니다. 특히 의사, 변호사, 작가는 그렇게 하는 것이 허용되지 않거나 원하지 않습니다. 그래서 Sprich는 완전히 로컬에서 동작하며 전문 용어와 독일어-영어 혼용(Denglisch)까지 포함해 독일어로 학습되어 있습니다. 다음으로는 Windows와, Apple Silicon Mac이 없는 분들을 위한 클라우드 버전이 나옵니다.',
      ],
    },
  },
}
