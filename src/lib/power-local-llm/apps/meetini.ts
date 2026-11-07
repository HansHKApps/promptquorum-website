// Local AI App Directory — Meetini: meeting and interview assistant for Apple Silicon Macs (layer: desktop meeting notetaker, speech-to-text, interview prep)
// Added 2026-11-07 after the maker's outreach email (info@meetini.net, same day). Facts verified 2026-11-07 against meetini.net (home, /pricing, /privacy
// effective 2026-10-21, /terms effective 2026-10-12, /app/downloads logged-out shell). Pages were read through an extraction step: re-check wording before quoting.
// Maker (email, not on any page read): Moonveil AI Inc.; founder Zhiyuan Zhang. Privacy notice names Moonveil AI Inc., 2018 Sand Hill Rd Unit A, Menlo Park, CA 94025.
// Public launch planned 2026-11-09 per the maker's email; no launch date, version number or release date appears on any page read, so `pqReview.version`
// and `lastUpstreamUpdate` stay unset on purpose (unset = unknown, never "no updates"; no stale warning).
// Download: /app/downloads shows "Meetini for Mac. Apple silicon, macOS 14.2 or later. Download DMG. Sign in to download the current release". No binary was downloaded
// by PromptQuorum, so `installEffort` stays unset (honest-signal rule). No Windows, Linux, mobile or web version listed. No GitHub repository, store listing or free trial found.
// CONFLICT kept visible, not resolved: the maker's email says live captions and speech-to-text run locally and only the Career features (keywords, answers, follow-up)
// use cloud AI; the privacy notice (s.2, s.4) says live meeting audio from the microphone and optionally system audio is sent through Meetini's server to OpenAI for live
// processing, and names no on-device speech-to-text. Locality is therefore `hybrid` with the policy wording quoted in the review, never the "runs locally" claim.
// Other facts: transcripts and notes sync to the account by default (Cloudflare D1, deleted text recoverable up to 30 days); speaker recognition for saved people runs on device;
// account self-deletion not available yet (email request); processors: OpenAI, Cloudflare, Clerk, Stripe, PostHog (limited usage events), Vercel (website).
// Prices (USD, /pricing): Notes $20/month or $15/month billed quarterly ($45 per 3 months); Career $95/month or $80/month billed quarterly ($240 per 3 months) with 600 AI minutes a month;
// packs 300 min for $50 and 700 min for $100; the pricing page says PayPal. The terms describe a different modular scheme (Notes base incl. 300 meeting minutes, Career add-on $75,
// Interviewer add-on $50, Stripe) and legacy plans; the conflict is stated in the review. No free trial found. Email figures ($20/$45, $95/$240) match the pricing page.
// Not independently checked: audio path, accuracy, latency, language support (not stated on any page read), the installer. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'meetini',
  name: 'Meetini',
  categories: ['meeting-notes', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'hybrid', // maker email: live captions and transcription run locally, Career features use cloud AI; privacy notice 2026-10-21: live meeting audio goes through Meetini's server to OpenAI, notes and transcripts sync to a Cloudflare database by default
  platforms: ['mac'], // /app/downloads: Apple silicon, macOS 14.2 or later; no Windows, Linux, mobile or web version listed
  worksWith: ['Zoom', 'Google Meet', 'Microsoft Teams', 'OpenAI'], // pricing page: "Works with Zoom, Meet, Teams and in person"; OpenAI per privacy notice s.4
  engine: 'builtin', // no connection to a user-run local model server is described; AI features use the maker's OpenAI-backed service
  license: 'Proprietary (closed source)', // maker's email: "proprietary software"; no repository found
  price: 'paid', // Notes $20/month, Career $95/month (pricing page, USD); no free plan or trial found
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: false }, // Apple silicon required; no RAM figure stated
  stars: null, // no public source repository
  addedDate: '2026-11-07',
  status: 'listed',
  uses: ['audio', 'docs'],
  url: 'meetini.net',
  storeLinks: {
    web: 'https://meetini.net',
  },
  tagline: {
    en: 'Paid meeting and interview assistant for Apple Silicon Macs that captures live captions and notes without a bot in the call; its privacy notice says live audio goes to OpenAI',
    de: 'Kostenpflichtiger Meeting- und Interview-Assistent für Macs mit Apple Silicon, der Live-Untertitel und Notizen ohne Bot im Call erstellt; laut Datenschutzerklärung geht Live-Audio an OpenAI',
    fr: 'Assistant payant de réunions et d’entretiens pour Mac Apple Silicon qui produit sous-titres en direct et notes sans bot dans l’appel ; sa politique de confidentialité indique que l’audio en direct part chez OpenAI',
    ja: 'Apple Silicon搭載Mac向けの有料の会議・面接アシスタント。ボット不参加でライブ字幕とメモを作成しますが、プライバシー通知ではライブ音声がOpenAIに送られるとされています',
    zh: '面向 Apple Silicon Mac 的付费会议与面试助手，无需机器人加入通话即可生成实时字幕和笔记；其隐私声明称实时音频会发送给 OpenAI',
    es: 'Asistente de pago para reuniones y entrevistas en Mac con Apple Silicon que genera subtítulos en directo y notas sin bot en la llamada; su aviso de privacidad indica que el audio en directo se envía a OpenAI',
    pt: 'Assistente pago de reuniões e entrevistas para Macs com Apple Silicon que gera legendas ao vivo e notas sem bot na chamada; o aviso de privacidade diz que o áudio ao vivo é enviado à OpenAI',
    ar: 'مساعد مدفوع للاجتماعات والمقابلات لأجهزة Mac بمعالج Apple Silicon ينتج تسميات توضيحية مباشرة وملاحظات دون روبوت في المكالمة، ويذكر إشعار الخصوصية أن الصوت المباشر يُرسل إلى OpenAI',
    ko: 'Apple Silicon Mac용 유료 회의·면접 어시스턴트로, 통화에 봇 없이 실시간 자막과 노트를 만들며 개인정보 처리 안내문에는 실시간 오디오가 OpenAI로 전송된다고 되어 있습니다',
  },
  // Comparison attributes: only what the maker's own pages state (pricing page: "Unlimited live captions and transcripts"). Languages, CPU-only use and a local API
  // server are not mentioned on any page read: left unset, never false. Speaker recognition for saved people is in the privacy notice but not described as labels in the
  // transcript, so `speakerLabels` stays unset too.
  compare: { realtime: true },
  reviewSlug: 'meetini-review',
  verdict: 'Best for Mac users on Apple Silicon who want live captions, meeting notes and interview practice from one paid app and accept that, per the maker\'s own privacy notice, live audio is processed by OpenAI and notes sync to the maker\'s cloud by default; limited by no Windows or Linux version, a public launch only planned for 9 November 2026, no published version number, pricing and terms pages that differ, and no way yet to delete an account without emailing the maker.',
  lastVerifiedDate: '2026-11-07',
}
