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

  issues: Record<string, SolaIssueText>
}
