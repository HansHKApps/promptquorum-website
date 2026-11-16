// Tests for scripts/adblock-report.mjs (known Wilson values, aggregation, CSV input).
import { wilson, parseRows, summarise } from './adblock-report.mjs'
let failed = 0
const ok = (c, m) => { if (!c) { failed++; console.error('FAIL', m) } else console.log('ok  ', m) }
const near = (a, b, e = 0.05) => Math.abs(a - b) < e
const w = wilson(20, 100)
ok(near(w.pct, 20) && near(w.lo, 13.3, 0.1) && near(w.hi, 28.9, 0.1), `wilson(20/100) = 13.3-28.9 (${w.lo.toFixed(1)}-${w.hi.toFixed(1)})`)
ok(wilson(0, 0).pct === null, 'n=0 gives n/a')
ok(near(wilson(0, 50).lo, 0) && wilson(0, 50).hi > 0, 'k=0 keeps a positive upper bound')
const rows = parseRows('date,device,blocked,count\n2026-11-20,touch,true,10\n2026-11-20,touch,false,90\n2026-11-20,pointer,true,40\n2026-11-20,pointer,false,60')
const s = summarise(rows), g = (d, v) => s.find((r) => r.date === d && r.device === v)
ok(g('2026-11-20', 'touch').pct === 10 && g('2026-11-20', 'pointer').pct === 40, 'per device percentages')
ok(g('2026-11-20', 'all').pct === 25 && g('2026-11-20', 'all').total === 200, 'blocked / all events across devices')
ok(g('total', 'all').total === 200, 'total row')
ok(parseRows('[{"date":"d","device":"touch","blocked":"true","count":3}]').length === 1, 'JSON input')
if (failed) process.exit(1)
console.log('adblock report tests: OK')
