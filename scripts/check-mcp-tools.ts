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
import { estimateVram } from '../src/lib/vram'

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

if (failures) { console.error(`${failures} check(s) failed`); process.exit(1) }
console.log('MCP tool checks passed')
