// Run: npx tsx scripts/check-alternatives.ts (tsx is not a repo dependency; alternatively compile with tsc --ignoreConfig and run the output with node).
import { localAiApps } from '../src/lib/power-local-llm/apps-barrel'
import { ALL_CLOUD_APPS, isLoggableQuery, matchCloudApp } from '../src/lib/power-local-llm/alternatives/match'

let failures = 0
const fail = (msg: string) => { failures++; console.error('FAIL', msg) }

if (new Set(ALL_CLOUD_APPS.map((a) => a.id)).size !== ALL_CLOUD_APPS.length) fail('duplicate cloud app id')

// 1. every mapped slug exists in the directory
const slugs = new Set(localAiApps.map((a) => a.slug))
for (const app of ALL_CLOUD_APPS) {
  const seen = new Set<string>()
  for (const m of app.localMatches) {
    if (!slugs.has(m.slug)) fail(`${app.id}: unknown slug ${m.slug}`)
    if (seen.has(m.slug)) fail(`${app.id}: duplicate slug ${m.slug}`)
    seen.add(m.slug)
    if (m.tier === 'closest' && m.confidence === 'assumption') fail(`${app.id}: ${m.slug} is 'closest' on an assumption`)
  }
}

// 2. matcher behaviour
const cases: Array<[string, string]> = [
  ['Midjourney', 'midjourney'],
  ['midjourney alternative', 'midjourney'],
  ['open source alternative to Midjourney', 'midjourney'],
  ['Mid journey', 'midjourney'],
  ['midjourny', 'midjourney'],
  ['Adobe Firefly', 'adobe-firefly'],
  ['firefly ai', 'adobe-firefly'],
  ['DALL-E 3', 'chatgpt-images'],
  ['gpt image', 'chatgpt-images'],
  ['Leonardo.ai', 'leonardo-ai'],
  ['Ideogram', 'ideogram'],
  ['Recraft', 'recraft'],
  ['nano banana', 'nano-banana'],
  ['ElevenLabs', 'elevenlabs'],
  ['eleven labs alternative', 'elevenlabs'],
  ['11labs', 'elevenlabs'],
  ['openai tts', 'openai-tts'],
  ['whisper api', 'openai-whisper-api'],
  ['otter.ai', 'otter-ai'],
  ['Murf', 'murf-ai'],
  ['speechify', 'speechify'],
  ['Descript', 'descript'],
  ['amazon polly', 'amazon-polly'],
  ['elevenlabz', 'elevenlabs'],
]
for (const [q, id] of cases) {
  const r = matchCloudApp(q)
  if (r.kind !== 'hit' || r.app.id !== id) fail(`"${q}" expected ${id}, got ${JSON.stringify(r.kind === 'hit' ? r.app.id : r)}`)
}
for (const q of ['chatgpt', 'Canva', 'Notion AI', 'gemini', 'openai', 'whisper', 'suno']) {
  if (matchCloudApp(q).kind !== 'miss') fail(`"${q}" should be a miss (pilot is image-only; plain chat apps are out of scope)`)
}
if (matchCloudApp('').kind !== 'invalid') fail('empty query should be invalid')

// 3. privacy guard
for (const q of ['me@example.com', 'https://example.com', 'call 49123456789', 'x']) {
  if (isLoggableQuery(q)) fail(`"${q}" must not be loggable`)
}

if (failures > 0) { console.error(`${failures} check(s) failed`); process.exit(1) }
console.log('alternatives checks passed')
