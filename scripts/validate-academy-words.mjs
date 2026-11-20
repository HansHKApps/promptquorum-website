#!/usr/bin/env node
// Academy terminology gate (docs/academy/SPEC.md section 18): the product must not claim an official, accredited or
// academic qualification. Forbidden terms per language are listed below; a string that carries a NEGATION ("not an
// accredited qualification") is the mandatory disclaimer and is allowed. Scans the Academy copy files, the verification
// page and the PDF code. Exit 1 on any hit. Run: node scripts/validate-academy-words.mjs

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const FORBIDDEN = {
  en: /\b(diploma|degree|accredited|accreditation|certified|certification|university|official|officially|qualification|graduate|graduated)\b/i,
  de: /(diplom|akkreditier|zertifiz|zertifikat|universit[aä]t|hochschule|offiziell|qualifikation|absolvent|abschlusszeugnis)/i,
  fr: /(dipl[oô]m|accr[ée]dit|certifi|certificat|universit|officiel|qualification|dipl[oô]m[ée])/i,
  es: /(diploma|acreditad|certificad|certificaci|universidad|oficial|titulaci|graduad)/i,
  pt: /(diploma|credenciad|certificad|certifica[cç]|universidade|oficial|qualifica[cç]|formad[oa])/i,
  ja: /(卒業|学位|認定|認証|公式|大学|資格|ディプロマ)/,
  zh: /(文凭|学位|认证|认可|证书|官方|大学|资格|毕业)/,
  ar: /(شهادة|دبلوم|معتمد|اعتماد|جامعة|رسمي|مؤهل|تخرّج|تخرج)/,
  ko: /(졸업|학위|인증|공식|대학|자격|디플로마)/,
}
// Allowed when the same string says "not" / "no" in the language (the mandatory negative disclaimer).
const NEGATION = {
  en: /\b(not|no|never|nor|without)\b/i,
  de: /\b(kein|keine|keiner|keinen|nicht|nie|ohne)\b/i,
  fr: /\b(ne|n’|n'|pas|non|aucun|sans|jamais)\b/i,
  es: /\b(no|ni|sin|nunca)\b/i,
  pt: /\b(não|nao|nem|sem|nunca)\b/i,
  ja: /(ない|ません|ではなく|ではありません|ず)/,
  zh: /(不|无|非|没有|并非)/,
  ar: /(ليس|لا |غير|دون|بدون)/,
  ko: /(아닙니다|않|없|비)/,
}
const ROOT = new URL('..', import.meta.url).pathname
const files = []
const copyDir = join(ROOT, 'src/components/academy/copy')
for (const f of readdirSync(copyDir)) if (f.endsWith('.ts')) files.push([join(copyDir, f), f.replace('.ts', '')])
for (const f of ['src/components/academy/certificate-pdf.ts', 'src/components/academy/documentation-pdf.ts', 'src/components/academy/VerifyPage.tsx']) files.push([join(ROOT, f), 'en'])
// The Terms page (src/lib/terms/content.ts) is checked by hand with the other legal papers (docs/academy/NOT-DONE.md).

const hits = []
for (const [file, hint] of files) {
  const lines = readFileSync(file, 'utf8').split('\n')
  // extra.ts holds all nine languages: the language of a string is the nearest preceding `const xx: AcademyExtraCopy`.
  let cur = hint
  lines.forEach((line, i) => {
    const m = /^const (\w\w): AcademyExtraCopy/.exec(line)
    if (m) cur = m[1]
    const mm = /^\s*(en|de|fr|es|pt|ja|zh|ar|ko):\s*['"{`\[]/.exec(line)
    if (hint === 'all' && mm) cur = mm[1]
    if (!/['"`]/.test(line) || /^\s*\/\//.test(line)) return
    const langs = hint === 'all' && !mm ? Object.keys(FORBIDDEN) : [cur === 'all' ? 'en' : cur]
    // Property names (downloadCertificate:) are code identifiers, not user-facing text.
    const text = line.replace(/^\s*[A-Za-z_]\w*:\s*/, '')
    for (const l of langs) {
      const re = FORBIDDEN[l]
      const hit = re?.exec(text)
      if (hit && !NEGATION[l].test(line)) hits.push(`${file.replace(ROOT, '')}:${i + 1} [${l}] "${hit[0]}"  ${line.trim().slice(0, 110)}`)
    }
  })
}
if (hits.length) {
  console.error(`validate-academy-words: ${hits.length} forbidden term(s) (SPEC 18):\n${hits.join('\n')}`)
  process.exit(1)
}
console.log('validate-academy-words: OK (no forbidden terms outside negative disclaimers)')
