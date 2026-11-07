#!/usr/bin/env node
// Writes src/generated/promo-facts.json: the few live facts promo slots show (directory tool count, MCP server URL).
// Read at build time from the same sources as the rest of the site, never hardcoded, and kept out of the client
// bundle (the apps barrel is far too big to import into a client component). Runs in `prebuild`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'src/generated/promo-facts.json')
const jiti = createJiti(import.meta.url, { tsconfigPaths: true })

const { TOTAL_TOOL_COUNT } = await jiti.import(path.join(ROOT, 'src/lib/power-local-llm/apps-barrel.ts'))
const { MCP_SERVER_URL } = await jiti.import(path.join(ROOT, 'src/lib/mcp/clients.ts'))
if (!Number.isInteger(TOTAL_TOOL_COUNT) || TOTAL_TOOL_COUNT < 1 || !/^https:\/\//.test(MCP_SERVER_URL)) {
  console.error('generate-promo-facts: unexpected values', { TOTAL_TOOL_COUNT, MCP_SERVER_URL })
  process.exit(1)
}
fs.writeFileSync(OUT, JSON.stringify({ directoryToolCount: TOTAL_TOOL_COUNT, mcpServerUrl: MCP_SERVER_URL }, null, 2) + '\n')
console.log(`generate-promo-facts: ${TOTAL_TOOL_COUNT} tools -> ${path.relative(ROOT, OUT)}`)
