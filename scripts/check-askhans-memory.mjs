#!/usr/bin/env node
// Guards the Ask Hans / MCP functions against loading the article corpus again (cold-start OOM, 2026-11-08).
// Run AFTER a production build (npm run build): npm run check:askhans-memory
//
// For each route it follows the chunks the built route loads at startup and fails when
//   (a) the total exceeds BUDGET_MB, or (b) a single chunk exceeds CHUNK_MB (= an article barrel came back).
// With --load it also requires the route and measures real memory after loading it in plain Node.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SERVER = path.join(ROOT, '.next/server')
const ROUTES = ['api/ask', 'api/ask/solution', 'api/mcp']
const BUDGET_MB = 40
const CHUNK_MB = 15
const LOAD_RSS_MB = 500
const mb = (n) => n / 1048576
let failed = false

for (const r of ROUTES) {
  const file = path.join(SERVER, 'app', r, 'route.js')
  if (!fs.existsSync(file)) { console.error(`FAIL ${r}: ${path.relative(ROOT, file)} not found (run npm run build first)`); failed = true; continue }
  const chunks = [...fs.readFileSync(file, 'utf8').matchAll(/R\.c\("([^"]+)"\)/g)].map((m) => m[1])
  const sizes = chunks.map((c) => ({ c, size: fs.statSync(path.join(ROOT, '.next', c)).size }))
  const total = sizes.reduce((n, s) => n + s.size, 0)
  const biggest = sizes.sort((a, b) => b.size - a.size)[0]
  const bad = total > BUDGET_MB * 1048576 || (biggest && biggest.size > CHUNK_MB * 1048576)
  console.log(`${bad ? 'FAIL' : 'ok  '} ${r}: ${chunks.length} chunks, ${mb(total).toFixed(1)} MB total (budget ${BUDGET_MB}), largest ${biggest ? `${mb(biggest.size).toFixed(1)} MB ${biggest.c}` : '-'}`)
  if (bad) failed = true
}

if (process.argv.includes('--load')) {
  const { createRequire } = await import('node:module')
  const require = createRequire(import.meta.url)
  const t0 = Date.now()
  try { require(path.join(SERVER, 'app/api/ask/route.js')) } catch (e) { console.log('load note:', String(e.message).slice(0, 100)) }
  const rss = mb(process.memoryUsage().rss)
  console.log(`${rss > LOAD_RSS_MB ? 'FAIL' : 'ok  '} api/ask loaded: ${rss.toFixed(0)} MB RSS in ${Date.now() - t0} ms (limit ${LOAD_RSS_MB} MB)`)
  if (rss > LOAD_RSS_MB) failed = true
}
process.exit(failed ? 1 : 0)
