// Ask Hans — the shape of one language's UI texts. One file per site language next to this one
// (de.ts is the source; the other eight are translations of it). Legal texts (consent*) are final as of 2026-11-06; bump the consent text version on any change.

export type AskLang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

export interface AskWelcomeCard {
  /** lucide icon name (code-side identifier, never translated) */
  icon: string
  title: string
  question: string
}

export interface AskCategoryCopy {
  label: string
  /** keyed by link id from categories.json (code-side identifier, never translated) */
  links: Record<string, { title: string; description: string }>
}

export interface AskCopy {
  /** text direction of the chat window */
  dir: 'ltr' | 'rtl'
  name: string
  tagline: string
  /** top line of the window: tool is in development, feedback welcome */
  devNotice: string
  /** aria-label of the e-mail link in the top line */
  contactLabel: string
  close: string
  maximize: string
  restore: string
  newChat: string
  newChatLabel: string
  logoLabel: string
  logoTitle: string

  welcomeAria: string
  welcomeTitle: string
  welcomeBody: string
  welcomeCards: AskWelcomeCard[]

  previousChat: (n: number) => string
  continueChat: string

  inputLabel: string
  inputPlaceholder: string
  send: string
  charCount: (n: number, max: number) => string
  aiNotice: string
  withdraw: string
  thinking: string
  searching: string
  panelTools: string

  errors: {
    unavailable: string
    failed: string
    rephrase: string
    rate: string
    limit: (n: number) => string
    refused: string
    disabled: string
    tooLong: (max: number) => string
  }
  retry: string
  followupsLabel: string

  panelLabelPrefix: string
  panelLinksHeading: string

  feedback: {
    prompt: string
    /** accessible name of one star button, n = 1..5 */
    star: (n: number) => string
    thanks: string
    error: string
    /** pop-up after a 1–3 star rating: invites feedback by email */
    followup: {
      title: string
      body: string
      /** label of the opt-in checkbox: add the last question and answer to the email */
      include: string
      note: string
      write: string
      skip: string
      copied: string
      /** labels of the prefilled email; subject contains {n} for the rating */
      mail: { subject: string; intro: string; rating: string; language: string; page: string; question: string; answer: string }
    }
  }

  // Final consent text as of 2026-11-06 (see docs/askhans-privacy-draft.de.md). On any change bump ASK_HANS_CONSENT_TEXT_VERSION.
  consentTitle: string
  consentParagraphs: string[]
  consentPrivacyLink: string
  /** path of the privacy page in this language, e.g. /de/privacy (English: /privacy) */
  consentPrivacyHref: string
  /** opt-in checkbox: keep conversations on this device for 7 days */
  consentSaveLabel: string
  /** hint shown when ticked / not ticked */
  consentSaveOn: string
  consentSaveOff: string
  consentYes: string
  consentNo: string
  consentQuestionLabel: string

  /** "?" info panel: what Ask Hans is, what it can and cannot do ({messages} / {chars} are replaced by the limits) */
  info: {
    label: string
    title: string
    intro: string
    canTitle: string
    can: string[]
    cannotTitle: string
    cannot: string[]
    privacy: string
    close: string
  }

  /** copy button on answers and tables */
  copyUi: {
    copy: string
    copied: string
    copyAnswer: string
  }

  /** side panel with the topic picture + links, and the strip of earlier conversations */
  panel: {
    relatedHeading: string
    relatedEarlier: string
    panelHide: string
    panelShow: string
    historyHeading: string
    historyHide: string
    historyShow: (n: number) => string
    historyClear: string
  }

  /** header search box that hands the question to Ask Hans */
  search: {
    /** small pill, e.g. "New · Beta" */
    badge: string
    headline: string
    /** factual one-liner about what the box does (no superlatives, no "first/unique" claims) */
    pitch: string
    /** three sample questions; a click sends one to Ask Hans */
    examples: [string, string, string]
    placeholder: string
    ariaLabel: string
    modalAriaLabel: string
    hint: string
    close: string
  }

  /** per marketing-category texts, keyed by category key from categories.json */
  categories: Record<string, AskCategoryCopy>
}
