#!/usr/bin/env node
// Test for the automatic stale-app maintenance banner (src/lib/power-local-llm/stale-apps.ts; owner rule 2026-10-16/28):
// an article that substantially covers an app with no upstream update in 3+ months must render the
// warning in all 9 locales; an app's own review and the directory hub must not get the generic banner.
import { createJiti } from 'jiti'
const root = process.cwd()
const jiti = createJiti(root + '/x.js', { alias: { '@': root + '/src' }, interopDefault: true })
const { getStaleBanner } = await jiti.import(root + '/src/lib/power-local-llm/stale-apps')
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
let fail = 0
const check = (ok, name) => { if (!ok) { fail++; console.error('FAIL ' + name) } else console.log('PASS ' + name) }
for (const lang of LANGS) {
  const b = getStaleBanner('power-local-llm', 'local-ai-app-non-technical-users', lang)
  check(!!b && b.label.length > 0 && b.body.includes('GPT4All') && !b.body.includes('{apps}'), `non-technical-users banner (${lang})`)
}
check(getStaleBanner('local-llms', 'best-local-llms-for-coding', 'en')?.body.includes('Continue.dev') === true, 'local-llms cluster banner (Continue.dev)')
check(getStaleBanner('power-local-llm', 'gpt4all-review', 'en') === undefined, "app's own review gets no generic banner")
check(getStaleBanner('power-local-llm', 'local-llm-software-directory-2026', 'en') === undefined, 'directory hub gets no generic banner')
process.exit(fail ? 1 : 0)
