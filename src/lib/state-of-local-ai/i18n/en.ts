import { ISSUES } from '../issues'
import type { SolaStrings } from './types'

export const en: SolaStrings = {
  home: 'Home',
  about: 'About',
  series: 'The State of Local AI',
  reportLabel: 'Report 01',

  hubTitleSuffix: 'PromptQuorum',
  hubDescription:
    'A quarterly report on the state of local AI: sourced figures, hands-on tests, labelled assumptions and a claim register. Next issue: January 2027.',
  hubIntro1:
    'The State of Local AI is a quarterly report on where local AI stands today. It is written from the author’s experience building PromptQuorum and testing local-AI apps.',
  hubIntro2: 'Facts are labelled, sources are numbered, and assumptions name who makes them and what they rest on.',
  nextIssue: 'Next issue:',
  latestReport: 'Latest report',
  readReport: 'Read the report',
  evidenceFile: 'Evidence file',
  archive: 'Archive',
  pressContact: 'Press contact',

  by: 'By',
  dataCutOff: 'Data cut-off',
  version: 'Version',
  keyFindings: 'Key findings',
  fullEvidenceTitle: 'Full evidence and addenda',
  fullEvidenceSub:
    'Every method note, calculation, assumption box, table, the claim register and all numbered sources. Opens right here, no download needed.',
  evidenceEnglishNote: '',
  scrollableTable: 'Scrollable table',
  citeThisReport: 'Cite this report',
  aboutThisReport: 'About this report',
  founderLine: 'is the founder of PromptQuorum, based in Frankfurt, with more than 30 years of consulting and general management experience.',
  methodPre: 'The method, labels, assumptions and sources are in the ',
  methodLink1: 'full evidence section',
  methodMid: ' above, which also exists as a ',
  methodLink2: 'separate page',
  methodPost: '.',
  pressContactLabel: 'Press contact:',
  evidenceAndDownloads: 'Evidence and downloads',
  evidenceFileSeparate: 'Evidence file as a separate page',
  claimRegister: 'Claim register (claims.csv)',
  sources: 'Sources',
  backTo: 'Back to',
  correctionsAndUpdates: 'Corrections and updates',
  translatedNote: '',

  issues: Object.fromEntries(
    ISSUES.map((i) => [
      i.slug,
      {
        title: i.title,
        subtitle: i.subtitle,
        summary: i.summary,
        seoTitle: i.seoTitle,
        metaDescription: i.metaDescription,
        keyFindings: i.keyFindings.map((k) => k.text),
        disclosure: i.disclosure,
        correction: i.corrections[0].text,
      },
    ]),
  ),
}
