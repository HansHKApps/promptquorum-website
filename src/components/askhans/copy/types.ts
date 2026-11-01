// Ask Hans — the shape of one language's UI texts. One file per site language next to this one
// (de.ts is the source; the other eight are translations of it). DRAFT legal texts (consent*) need Hans's approval.

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
    commentPlaceholder: string
    send: string
    thanks: string
    error: string
  }

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: string
  consentParagraphs: string[]
  consentPrivacyLink: string
  /** path of the privacy page in this language, e.g. /de/privacy (English: /privacy) */
  consentPrivacyHref: string
  consentYes: string
  consentNo: string
  consentQuestionLabel: string

  /** side panel with the topic picture + links, and the strip of earlier conversations */
  panel: {
    relatedHeading: string
    relatedEarlier: string
    panelHide: string
    panelShow: string
    historyHeading: string
    historyHide: string
    historyShow: (n: number) => string
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
