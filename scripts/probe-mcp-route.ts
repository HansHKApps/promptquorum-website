// Run: bun scripts/probe-mcp-route.ts
// End-to-end smoke test of the MCP route handler without a dev server: calls
// the exported POST() with real JSON-RPC requests (initialize, tools/list,
// prompts/list, prompts/get, tools/call). Network is not used; Redis is
// unconfigured locally, so counters and rate limiting fail open and profile
// storage reports "unavailable".
import { POST } from '../src/app/api/mcp/route'

let failures = 0
const check = (cond: unknown, msg: string) => {
  if (!cond) {
    failures++
    console.error('FAIL', msg)
  }
}

async function rpc(method: string, params: unknown, id = 1) {
  const res = await POST(
    new Request('http://localhost/api/mcp', {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json, text/event-stream' },
      body: JSON.stringify({ jsonrpc: '2.0', id, method, params }),
    }),
  )
  const text = await res.text()
  const data = text.match(/data: (.*)/)?.[1] ?? text
  return JSON.parse(data)
}

const init = await rpc('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'probe', version: '0' } })
check(init.result?.capabilities?.prompts, 'initialize: prompts capability missing')

const tools = await rpc('tools/list', {})
const names: string[] = tools.result.tools.map((t: { name: string }) => t.name)
console.log('tools:', names.length, names.join(','))
for (const n of ['start', 'set_consent', 'forget_me', 'my_profile', 'set_language']) check(names.includes(n), `tools/list missing ${n}`)
for (const n of ['recommend_models', 'list_local_models']) check(names.includes(n), `tools/list missing ${n}`)
check(names.length === 26, `expected 26 tools, got ${names.length}`)
const byName = Object.fromEntries(tools.result.tools.map((t: { name: string }) => [t.name, t]))
check(byName.forget_me.annotations?.destructiveHint === true, 'forget_me not destructive-annotated')
check(byName.start.annotations?.readOnlyHint === true, 'start not read-only-annotated')
check(byName.search_apps.annotations === undefined, 'existing tools must be untouched')

const prompts = await rpc('prompts/list', {})
const promptNames: string[] = prompts.result.prompts.map((p: { name: string }) => p.name)
console.log('prompts:', promptNames.join(','))
check(promptNames.includes('start') && promptNames.length === 5, 'prompts/list should have start + 4 existing')
const pg = await rpc('prompts/get', { name: 'start', arguments: {} })
console.log('prompt start ->', pg.result.messages[0].content.text)
check(/`start` tool/.test(pg.result.messages[0].content.text), 'prompt start text')

const start = await rpc('tools/call', { name: 'start', arguments: {} })
console.log('\n--- start (no profile storage configured) ---')
for (const c of start.result.content) console.log(`[audience=${c.annotations?.audience}]`, c.text, '\n')
check(!start.result.isError, 'start should not be an error')
check(start.result.content[0].text.includes('local-AI apps') || start.result.content[0].text.includes('Welcome'), 'start text')

const accept = await rpc('tools/call', { name: 'set_consent', arguments: { choice: 'accept' } })
check(!/pq-[a-z2-7]{5}/.test(accept.result.content[0].text), 'accept without storage must not issue a code')

const badLang = await rpc('tools/call', { name: 'set_language', arguments: { lang: 'xx' } })
check(badLang.error || badLang.result?.isError, 'set_language must reject unsupported codes')

// Model catalog tools through the real route (zod validation + wrapper + JSON serialisation).
const recCall = await rpc('tools/call', { name: 'recommend_models', arguments: { os: 'mac', ramGb: 24, useCase: 'code', app: 'open-webui' } })
check(recCall.result && !recCall.result.isError, `recommend_models call failed: ${JSON.stringify(recCall).slice(0, 200)}`)
const rec = recCall.result ? JSON.parse(recCall.result.content[0].text) : null
console.log('\n--- recommend_models (24 GB Mac, code, open-webui) ---')
for (const r of rec?.recommendations ?? []) console.log(`${r.name} ${r.quantization} ${r.downloadGib} GiB -> ${r.fit.verdict} (needs ${r.fit.needsGib} of ${r.fit.usableGib} GiB) ${r.ollamaPull}`)
check(rec?.status === 'ok' && rec.hardware.usableForModelGib === 16, 'route: 24 GB Mac must have 16 GiB usable')
check(rec?.app?.status === 'ollama', 'route: open-webui should be an Ollama client')
const badRec = await rpc('tools/call', { name: 'recommend_models', arguments: { os: 'mac', ramGb: 24, useCase: 'banana' } })
check(badRec.error || badRec.result?.isError, 'recommend_models must reject an unknown useCase')
const noMem = await rpc('tools/call', { name: 'recommend_models', arguments: {} })
check(noMem.result && JSON.parse(noMem.result.content[0].text).status === 'needs-hardware', 'route: no memory -> asks for it')
const listCall = await rpc('tools/call', { name: 'list_local_models', arguments: { capability: 'vision', maxDownloadGib: 10 } })
const listed = listCall.result ? JSON.parse(listCall.result.content[0].text) : null
check(listed?.models?.length > 0 && listed.models.every((m: { capabilities: string[]; downloadGib: number }) => m.capabilities.includes('vision') && m.downloadGib <= 10), 'route: list_local_models filters')
const badApp = await rpc('tools/call', { name: 'recommend_models', arguments: { os: 'mac', ramGb: 24, app: 'no-such-app' } })
check(badApp.result?.isError === true, 'route: unknown app must be an isError result with did-you-mean')

const existing = await rpc('tools/call', { name: 'list_clusters', arguments: {} })
check(existing.result && !existing.result.isError, 'existing tool broke')

if (failures) {
  console.error(`${failures} failure(s)`)
  process.exit(1)
}
console.log('probe-mcp-route: ok')
