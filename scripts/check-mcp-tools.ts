// Run: npx tsx scripts/check-mcp-tools.ts
// Regression checks for the MCP tool functions (src/lib/mcp/*). Pure functions,
// no network. Fails (exit 1) on shape regressions, unresolved slugs, fabricated
// verdicts, or stack-table drift from the article.
import { localAiApps } from '../src/lib/power-local-llm/apps-barrel'
import { STACK_RECIPES } from '../src/lib/power-local-llm/stacks'
import { powerLLMContent } from '../src/lib/power-local-llm/articles-barrel'
import {
  findBestApps,
  checkHardwareCompatibility,
  estimateVramTool,
  recommendStack,
  findLocalAlternative,
  getAppAlternatives,
  getHandsOnTestFindings,
} from '../src/lib/mcp/directory-tools'
import { compareApps, explainLicense, getLatest, findRelatedContent, searchApps, AppNotFoundError } from '../src/lib/mcp/tools'
import { estimateVram, fitModel, kvCacheGib } from '../src/lib/vram'
import { recommendModels, listLocalModels } from '../src/lib/mcp/model-tools'
import { localLlmCatalog } from '../src/lib/local-llm-catalog'
import { readFileSync } from 'node:fs'
import { MCP_TOOL_NAMES } from '../src/lib/mcp/usage'
import { NEW_TOOL_COPY, TOOL_ASK } from '../src/components/tools/mcp-docs-i18n'

let failures = 0
const fail = (msg: string) => { failures++; console.error('FAIL', msg) }
const check = (cond: unknown, msg: string) => { if (!cond) fail(msg) }
const throwsNotFound = (fn: () => unknown) => { try { fn() } catch (e) { return e instanceof AppNotFoundError ? (e as Error).message : null } return null }

const slugs = new Set(localAiApps.map((a) => a.slug))

// 1. stacks: slugs resolve and rows match the article's EN table
for (const r of STACK_RECIPES) for (const s of r.appSlugs) check(slugs.has(s), `stack ${r.id}: unknown slug ${s}`)
const section = (powerLLMContent as Record<string, Record<string, { sections: Record<string, { rows?: Record<string, string>[] }> }>>)['local-llm-software-directory-2026']?.en?.sections?.stacks
check(section?.rows, 'directory article stacks section not found')
for (const row of section?.rows ?? []) {
  const rec = STACK_RECIPES.find((r) => r.goal === row['Goal'])
  if (!rec) { fail(`article stack row "${row['Goal']}" missing from stacks.ts`); continue }
  check(rec.stack === row['Stack'], `stack ${rec.id}: Stack text drifted from article`)
  check(rec.hardwareFloorText === row['Hardware floor'], `stack ${rec.id}: hardware floor text drifted from article`)
}
check((section?.rows?.length ?? 0) === STACK_RECIPES.length, 'stacks.ts row count differs from article')

// 2. vram math matches calculator expectations (13B Q4 4K batch 1 => 6.5 + 1.5 + 0 + 1 = 9, x1.25 = 11.25)
const est = estimateVram({ modelBillions: 13, quantBits: 4, contextGb: 1.5, batchGb: 0 })
check(est.totalGb === 9 && est.recommendedGb === 11.25, `vram math changed: ${JSON.stringify(est)}`)
const v = estimateVramTool({ modelBillions: 70, quantization: 'q4', contextLength: '8K', availableGb: 24 })
check(v.fit?.status === 'exceeds', '70B Q4 should exceed 24 GB')
check(typeof v.fit?.suggestion === 'string' || v.fit?.suggestion === undefined, 'suggestion type')
check(throwsNotFound(() => estimateVramTool({ modelBillions: 7, quantization: 'Q9' })) !== null, 'bad quantization should error')

// 3. find_best_apps
const best = findBestApps({ goal: 'chat with my PDFs', os: 'mac', ramGb: 24, experience: 'beginner' })
check(best.results.length > 0, 'find_best_apps returned nothing for PDF chat on a 24 GB Mac')
check(best.results.every((r) => r.hardwareFit !== 'too-demanding'), 'find_best_apps returned a too-demanding app')
check(best.results.every((r) => r.tradeoffs.length > 0), 'missing tradeoffs')
check(best.missingInfo.length === 0 || best.missingInfo.every((m) => typeof m === 'string'), 'missingInfo shape')
check(findBestApps({ goal: 'chat' }).missingInfo.length >= 2, 'missingInfo should list os and hardware')
check(best.interpretedGoal.useCase === 'docs', `"chat with my PDFs" should infer docs, got ${best.interpretedGoal.useCase}`)

// 4. check_hardware_compatibility
const withModel = checkHardwareCompatibility({ slug: 'ollama', os: 'mac', ramGb: 16, modelBillions: 70, quantization: 'Q4' })
check(withModel.overall === 'too-demanding', '70B on 16 GB must be too-demanding')
check(withModel.model?.basis === 'estimate', 'model verdict must be labelled estimate')
const unknown = checkHardwareCompatibility({ slug: 'ollama' })
check(unknown.overall === 'unknown', 'no hardware given must be unknown, never fits')
const bad = throwsNotFound(() => checkHardwareCompatibility({ slug: 'ollamma' }))
check(!!bad && bad.includes('ollama'), `did-you-mean missing: ${bad}`)

// 5. recommend_stack
const stack = recommendStack({ goal: 'document chat', ramGb: 16 })
check(stack.stacks[0]?.id === 'document-chat', `document chat stack not first: ${stack.stacks[0]?.id}`)
check(recommendStack({ goal: 'multi-user team server', ramGb: 8 }).stacks.every((s) => s.id !== 'multi-user'), 'team stack must be excluded at 8 GB')

// 6. find_local_alternative
const alt = findLocalAlternative({ cloudApp: 'Midjourney' })
check(alt.matched === true && 'alternatives' in alt && (alt.alternatives?.length ?? 0) > 0, 'Midjourney should map to local alternatives')
const miss = findLocalAlternative({ cloudApp: 'Totally Unknown Cloud Product' })
check(miss.matched === false && 'supportedCloudApps' in miss, 'unknown cloud app should be an honest miss')

// 7. compare_apps
const cmp = compareApps({ slugs: ['ollama', 'lm-studio', 'jan'] })
check(cmp.apps.length === 3 && cmp.summary.length > 20, 'compare shape')
check(Object.values(cmp.matrix).every((row) => Object.keys(row).length === 3), 'matrix row per app')
check(throwsNotFound(() => compareApps({ slugs: ['ollama', 'a', 'b', 'c', 'd', 'e'] })) !== null, 'compare >5 should error')

// 8. explain_license
const lic = explainLicense({ licenseString: 'AGPL-3.0', useCase: 'host-as-service' })
check(lic.families.length > 0 && lic.families[0].useCaseNote?.includes('source'), 'AGPL host-as-service note')
check(lic.caveats.some((c) => c.includes('not legal advice')), 'license caveat missing')

// 9. search_apps new filters
const easy = searchApps({ installEffort: 'installer', limit: 5 })
check('results' in easy && easy.results.every((r) => r.installEffort === 'installer'), 'installEffort filter')
const recent = searchApps({ sortBy: 'recent', limit: 5 })
check('results' in recent && recent.results.length > 0, 'sortBy recent')

// 10. get_app_alternatives / hands-on / latest / related
const alts = getAppAlternatives({ slug: 'comfyui', limit: 3 })
check(alts.alternatives.every((a) => a.slug !== 'comfyui'), 'alternatives must exclude self')
const list = getHandsOnTestFindings({})
check('tested' in list && Array.isArray(list.tested) && list.tested.length >= 3, 'hands-on list')
const untested = getHandsOnTestFindings({ slug: 'ollama' })
check('tested' in untested && untested.tested === false, 'untested app must say untested')
const tested = getHandsOnTestFindings({ slug: 'bobe' })
check('tested' in tested && tested.tested === true && 'findings' in tested && (tested.findings?.length ?? 0) > 0, 'bobe findings')
const latest = getLatest({ type: 'all', limit: 5 })
check(latest.items.length > 0 && latest.items.every((i) => i.url.startsWith('https://')), 'latest items need urls')
check(latest.items.every((i, n, arr) => n === 0 || arr[n - 1].date >= i.date), 'latest must be sorted newest first')
const rel = findRelatedContent({ app: 'open-webui' })
check('app' in rel && rel.app?.slug === 'open-webui', 'related content app')

// 11. model catalog: fit engine math (hand-computed numbers, independent of catalog contents)
const GIB = 2 ** 30
// 10 layers x 2 kv heads x (128+128) x 1024 tokens x 2 bytes = 10,485,760 B
const synthKv = { groups: [{ layers: 10, kvHeads: 2, keyLength: 128, valueLength: 128, windowTokens: null }] }
check(kvCacheGib(synthKv, 1024) === 10_485_760 / GIB, `kv math: ${kvCacheGib(synthKv, 1024)}`)
const windowed = { groups: [{ layers: 10, kvHeads: 2, keyLength: 128, valueLength: 128, windowTokens: 512 }] }
check(kvCacheGib(windowed, 4096) === kvCacheGib(windowed, 512), 'sliding window must cap KV growth')
check(kvCacheGib(windowed, 256) < kvCacheGib(windowed, 512), 'KV must still grow below the window')
const synthFit = fitModel({ sizeBytes: 8 * GIB, kv: synthKv, contextTokens: 1024, contextMax: 131072, usableGib: 16 })
check(synthFit.verdict === 'fits' && synthFit.weightsGib === 8 && synthFit.totalGib === 9.01, `synthetic fit: ${JSON.stringify(synthFit)}`)
check(fitModel({ sizeBytes: 15.5 * GIB, kv: synthKv, contextTokens: 1024, usableGib: 16 }).verdict === 'too-large', '15.5 GiB + 1 GiB runtime must not fit 16 GiB')
check(fitModel({ sizeBytes: 14.5 * GIB, kv: synthKv, contextTokens: 1024, usableGib: 16 }).verdict === 'tight', 'under 1 GiB headroom is tight')
check(fitModel({ sizeBytes: 1 * GIB, kv: null, noContextCost: true, contextTokens: 131072, usableGib: 4 }).kvGib === 0, 'embedding models carry no context cost')
const maxCtx = fitModel({ sizeBytes: 8 * GIB, kv: synthKv, contextTokens: 1024, contextMax: 10_000_000, usableGib: 16 }).maxContextTokens
check(maxCtx !== null && kvCacheGib(synthKv, maxCtx) <= 7 && kvCacheGib(synthKv, maxCtx + 1) > 7, `maxContextTokens must be the exact boundary: ${maxCtx}`)

// 12. model catalog data + tools
const hwOk = { os: 'mac' as const, ramGb: 24 }
const rec = recommendModels({ ...hwOk })
check(rec.status === 'ok' && 'recommendations' in rec, 'recommend_models on a 24 GB Mac returned nothing')
if (rec.status === 'ok' && 'recommendations' in rec) {
  // The 8 GB macOS reserve is deducted exactly once: 24 total -> 16 usable (not 24, not 8).
  check(rec.hardware.usableForModelGib === 16, `24 GB Mac must have 16 GiB usable, got ${rec.hardware.usableForModelGib}`)
  check(rec.hardware.macOsReserveGb === 8, 'mac reserve must be reported')
  check(rec.recommendations.every((r) => r.fit.needsGib <= r.fit.usableGib), 'a recommended model needs more than the usable memory')
  check(rec.recommendations.every((r) => r.ollamaPull.startsWith('ollama pull ')), 'ollama pull command missing')
  check(rec.recommendations.every((r) => !r.capabilities.includes('embedding')), 'embedding models must not be recommended unprompted')
  const order = rec.recommendations.map((r) => r.fit.verdict)
  check(order.every((v, i) => i === 0 || !(order[i - 1] === 'tight' && v === 'fits')), 'fits must come before tight')
  check(rec.caveats.some((c) => c.includes('not speed')), 'memory-not-speed caveat missing')
}
const noHw = recommendModels({})
check(noHw.status === 'needs-hardware', 'missing memory must ask, never guess')
const tiny = recommendModels({ os: 'mac', ramGb: 8 })
check(tiny.status === 'none-fit' && 'onlyJustTooLarge' in tiny && (tiny.onlyJustTooLarge?.length ?? 0) > 0, '8 GB Mac (0 usable) must report none-fit with next-size options')
const gpu = recommendModels({ os: 'win', vramGb: 24 })
check(gpu.status === 'ok' && 'hardware' in gpu && gpu.hardware.usableForModelGib === 23, 'discrete GPU: 24 GB VRAM minus 1 GB reserve')
const vis = recommendModels({ os: 'mac', ramGb: 32, needs: ['vision'] })
check(vis.status === 'ok' && 'recommendations' in vis && vis.recommendations.every((r) => r.capabilities.includes('vision')), 'needs:vision filter')
const code = recommendModels({ os: 'mac', ramGb: 32, useCase: 'code' })
check(code.status === 'ok' && 'recommendations' in code && code.recommendations.every((r) => r.bestFor.includes('code')), 'useCase:code filter')
const emb = recommendModels({ os: 'mac', ramGb: 16, needs: ['embedding'] })
check(emb.status === 'ok' && 'recommendations' in emb && emb.recommendations.every((r) => r.capabilities.includes('embedding')), 'needs:embedding returns embedding models')
const withApp = recommendModels({ os: 'mac', ramGb: 24, app: 'open-webui' })
check('app' in withApp && withApp.app?.status === 'ollama', 'open-webui should link to Ollama')
const ownRt = recommendModels({ os: 'mac', ramGb: 24, app: 'lm-studio' })
check('app' in ownRt && ownRt.app?.status === 'own-runtime', 'lm-studio ships its own runtime')
check(throwsNotFound(() => recommendModels({ os: 'mac', ramGb: 24, app: 'no-such-app' })) !== null, 'unknown app must error with did-you-mean')
const catalogList = listLocalModels({ maxDownloadGib: 10 })
check(catalogList.models.length > 0 && catalogList.models.every((m) => m.downloadGib <= 10), 'maxDownloadGib filter')
check(catalogList.models.every((m, i, a) => i === 0 || a[i - 1].downloadGib <= m.downloadGib), 'list_local_models sorted by size')
check(listLocalModels({ tier: 'tiny' }).models.every((m) => m.tier === 'tiny'), 'tier filter')
check(listLocalModels({}).catalog.variants === localLlmCatalog.models.length, 'catalog count')
const hw = checkHardwareCompatibility({ slug: 'ollama', os: 'mac', ramGb: 24 })
check(hw.suggestedModels !== null && hw.suggestedModels.models.length > 0 && hw.suggestedModels.models.every((m) => m.needsGib <= 16), 'check_hardware_compatibility must suggest models that fit 16 GiB usable')
check(checkHardwareCompatibility({ slug: 'ollama' }).suggestedModels === null, 'no hardware given -> no model suggestions')
const stackWithModels = recommendStack({ goal: 'coding assistant', os: 'mac', ramGb: 32 })
check(stackWithModels.suggestedModels !== null && stackWithModels.suggestedModels.models.length > 0, 'recommend_stack must carry suggested models when memory is known')
check(recommendStack({ goal: 'coding assistant' }).suggestedModels === null, 'recommend_stack without memory must not guess models')

// 13. docs page parity: a registered tool must be listed on /mcp-stats (the TOOLS display array in
// McpStatsContent.tsx is a plain list, so tsc cannot catch an omission) and carry copy in all 9 locales.
const statsSource = readFileSync(new URL('../src/components/tools/McpStatsContent.tsx', import.meta.url), 'utf8')
const toolsArray = statsSource.match(/const TOOLS: McpToolName\[\] = \[([\s\S]*?)\n\]/)?.[1] ?? ''
const LEGACY_DOC_TOOLS = new Set(['search_promptquorum', 'get_article', 'list_clusters', 'get_app_details', 'list_categories', 'search_apps', 'compare_apps', 'explain_license'])
const LOCALES = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const
check(toolsArray.length > 0, 'could not find the TOOLS array in McpStatsContent.tsx')
for (const name of MCP_TOOL_NAMES) {
  check(toolsArray.includes(`'${name}'`), `/mcp-stats does not list registered tool ${name} (add it to TOOLS in McpStatsContent.tsx)`)
  check(name in TOOL_ASK, `${name}: no example question in TOOL_ASK`)
  for (const l of LOCALES) check((TOOL_ASK[name]?.[l] ?? '').trim().length > 0, `${name}: empty TOOL_ASK[${l}]`)
  if (!LEGACY_DOC_TOOLS.has(name)) {
    const copy = NEW_TOOL_COPY[name]
    check(!!copy, `${name}: no NEW_TOOL_COPY entry (title/desc for the docs page)`)
    for (const l of LOCALES) {
      check((copy?.title[l] ?? '').trim().length > 0, `${name}: empty NEW_TOOL_COPY title [${l}]`)
      check((copy?.desc[l] ?? '').trim().length > 0, `${name}: empty NEW_TOOL_COPY desc [${l}]`)
    }
  }
}

if (failures) { console.error(`${failures} check(s) failed`); process.exit(1) }
console.log('MCP tool checks passed')
