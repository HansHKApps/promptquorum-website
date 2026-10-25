// UI strings and issue-level text for The State of Local AI, one block per language.
// TypeScript is the schema-fidelity check: a block missing a field, or inventing one, fails tsc.
// Never translated: source IDs (S1, S22), URLs, "PromptQuorum", "Hans Kuepper", product names.

export interface SolaIssueText {
  title: string
  subtitle: string
  summary: string
  seoTitle: string
  metaDescription: string
  /** One entry per key finding, same order as ISSUES[].keyFindings (source IDs are taken from there). */
  keyFindings: string[]
  disclosure: string
  /** Text of the single correction entry ("Version 1.0: first publication."). */
  correction: string
  /** Press kit, same order as ISSUES[].press.stats; source IDs are taken from there. */
  pressStats: { figure: string; text: string; source: string }[]
  pressQuotes: string[]
  pressAuthor: string
  pressMethod: string
}

export interface SolaSymbolText {
  name: string
  alt: string
}

export interface SolaPersonaText extends SolaSymbolText {
  who: string
  care: string
}

/** Strings for the press kit, reuse box, symbol kit and download links (added after the first release). */
export interface SolaExtras {
  // Hero
  downloadReport: string
  downloadAppendix: string
  quickFree: string
  quickHowToLink: string
  quickPress: string
  quickSymbols: string
  quickCite: string

  // Shared
  copied: string
  copyUrl: string
  copyHtml: string

  // Press kit
  pressTitle: string
  pressSub: string
  keyFigures: string
  sourcePrefix: string
  quotesToCopy: string
  authorAndMethod: string
  linkFree: string
  linkCite: string
  linkReportPdf: string
  linkAppendixPdf: string
  linkClaimsCsv: string
  linkSourcesCsv: string
  linkFullEvidence: string

  // Reuse box
  reuseTitle: string
  /** Rendered as: {reuseA}<licence link>{reuseB}<b>{reuseBold}</b>{reuseC} */
  reuseA: string
  reuseB: string
  reuseBold: string
  reuseC: string
  /** Contains {date} for the data cut-off date. */
  reuseNote: string
  reuseLinkLabel: string
  reuseHtmlLabel: string
  /** Rendered as: {reuseContactA}<email>{reuseContactB} */
  reuseContactA: string
  reuseContactB: string

  // Downloads list
  listReuse: string
  listSymbols: string
  listReportPdf: string
  listAppendixPdf: string

  // Symbol kit
  symbolsTitle: string
  /** Rendered as: {symbolsA}<licence link>{symbolsB} */
  symbolsA: string
  symbolsB: string
  whichReader: string
  basicSet: string
  copySvg: string
  download: string
  downloadAll: string
  manifestLink: string
  linkHardware: string
  linkApps: string
  linkLocalVsFrontier: string
  linkTrade: string
  linkOutlook: string
  linkPressKit: string
  linkClaimRegister: string
  linkSources: string
  personas: {
    home: SolaPersonaText
    developer: SolaPersonaText
    enterprise: SolaPersonaText
    journalist: SolaPersonaText
  }
  symbols: {
    chicken: SolaSymbolText
    egg: SolaSymbolText
    pair: SolaSymbolText
    fewChickens: SolaSymbolText
    fewEggs: SolaSymbolText
  }
}

export interface SolaStrings {
  home: string
  about: string
  /** Series name, e.g. "The State of Local AI". */
  series: string
  /** Kicker label, e.g. "Report 01". Quarter ("Q4 2026") is not translated. */
  reportLabel: string

  // Hub page
  hubTitleSuffix: string
  hubDescription: string
  hubIntro1: string
  hubIntro2: string
  /** Followed by the localized month and year of the next issue. */
  nextIssue: string
  latestReport: string
  readReport: string
  evidenceFile: string
  archive: string
  pressContact: string

  // Issue page
  /** "By" + author link + rest, rendered as: {by} <Hans Kuepper link>, PromptQuorum · {date} · {cutOff} {date} · {version} {n}. */
  by: string
  dataCutOff: string
  version: string
  keyFindings: string
  fullEvidenceTitle: string
  fullEvidenceSub: string
  /** Shown above the inline evidence section: the evidence file is English-only. */
  evidenceEnglishNote: string
  scrollableTable: string
  citeThisReport: string
  aboutThisReport: string
  founderLine: string
  /** Rendered as: {methodPre}<a>{methodLink1}</a>{methodMid}<a>{methodLink2}</a>{methodPost} */
  methodPre: string
  methodLink1: string
  methodMid: string
  methodLink2: string
  methodPost: string
  pressContactLabel: string
  evidenceAndDownloads: string
  evidenceFileSeparate: string
  claimRegister: string
  sources: string
  /** Rendered as: {backTo} <series name> */
  backTo: string
  correctionsAndUpdates: string
  /** Shown at the top of translated issue pages: the report was translated, the evidence file is English. */
  translatedNote: string

  extras: SolaExtras

  issues: Record<string, SolaIssueText>
}
