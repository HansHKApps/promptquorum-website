#!/usr/bin/env node
/**
 * sweep.mjs — PromptQuorum competitor sweep. One file. Zero dependencies. Node 18+.
 *
 *   node sweep.mjs                      all 9 locales, ~15 min
 *   node sweep.mjs --locales ja,ko      subset
 *   node sweep.mjs --report             re-render from cache, no network
 *
 * Writes:  sweep-cache.json  (resumable — kill it and rerun, it continues)
 *          sweep-report.md   (the answer)
 *
 * TWO THINGS THAT WILL BIAS YOUR READING:
 *  1. The "extracted" queries came from PromptQuorum's own pages, and those pages
 *     name superseded models (Llama 3.2, Llama 4 Scout). Nobody searches those in
 *     July 2026. Ranking #1 for a query nobody types is not a moat. That is why
 *     every locale also runs a "generic" control set. Compare the two.
 *  2. /ar/ was reported as Arabic title + ENGLISH body. If true, uniformity is
 *     508 x 8 plus a shell. Verify before trusting any ar row.
 *
 * DuckDuckGo is not Google. Use this for WHO EXISTS. Use GSC (by country) for
 * WHAT YOU RANK — it is first-party, free, and already yours.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { gunzipSync } from 'node:zlib';

const SELF = 'promptquorum.com';
const CACHE = 'sweep-cache.json';
const REPORT = 'sweep-report.md';
const UA_BROWSER = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const UA_BOT = 'Mozilla/5.0 (compatible; PQ-CompetitorAudit/1.0)';

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(`--${n}`); return i === -1 ? d : argv[i + 1]; };
const REPORT_ONLY = argv.includes('--report');

/* ═══════════════════════════ QUERIES ═══════════════════════════ */

const Q = {
  de: { ddg: 'de-de',
    extracted: ['beste lokale LLMs 2026', 'Ollama installieren', 'lokales LLM VRAM-Anforderungen', 'Llama 3.2 lokal ausführen', 'GPU für lokale LLMs unter 500 Dollar'],
    generic: ['lokales LLM', 'LLM lokal betreiben', 'bestes lokales Sprachmodell', 'Ollama Anleitung', 'lokale KI DSGVO'] },
  ja: { ddg: 'jp-jp',
    extracted: ['ローカルLLM 2026年 おすすめ', 'Ollama インストール', 'ローカルLLM VRAM 要件', 'Llama 4 Scout ローカル実行', 'DeepSeek ローカル比較 Qwen'],
    generic: ['ローカルLLM', 'ローカルLLM 始め方', 'LLM ローカル 動かす', 'Ollama 使い方', 'ローカルLLM 必要スペック'] },
  ko: { ddg: 'kr-kr', note: 'Naver leads Korea. Google/DDG understate or overstate — this cannot tell you which.',
    extracted: ['최고의 로컬 LLM 2026', 'Ollama 설치', '로컬 LLM VRAM 요구사항', 'Llama 4 Scout 로컬 실행', 'DeepSeek vs Qwen 로컬 비교'],
    generic: ['로컬 LLM', '로컬 LLM 실행', '올라마 사용법', '로컬 LLM 추천', '로컬 LLM 하드웨어'] },
  fr: { ddg: 'fr-fr',
    extracted: ['meilleur LLM local 2026', 'Ollama installer', 'LLM local VRAM besoins', 'Llama 4 Scout exécution locale', 'GPU meilleur rapport qualité-prix'],
    generic: ['LLM local', 'installer un LLM en local', 'meilleur modèle de langage local', 'Ollama tutoriel', 'IA locale confidentialité'] },
  es: { ddg: 'es-es',
    extracted: ['mejor LLM local 2026', 'Ollama instalar', 'LLM local requisitos VRAM', 'Llama 4 Scout ejecución local', 'GPU mejor relación costo-rendimiento'],
    generic: ['LLM local', 'ejecutar LLM en local', 'mejor modelo de lenguaje local', 'Ollama tutorial español', 'IA local privacidad'] },
  pt: { ddg: 'br-pt',
    extracted: ['melhor LLM local 2026', 'Ollama instalar', 'LLM local requisitos VRAM', 'Llama 4 Scout execução local', 'GPU melhor custo-benefício'],
    generic: ['LLM local', 'rodar LLM localmente', 'melhor modelo de linguagem local', 'Ollama tutorial português', 'IA local privacidade'] },
  zh: { ddg: 'cn-zh', note: 'Baidu is the mainland engine and is not implemented here.',
    extracted: ['最佳本地LLM 2026', 'Ollama 安装', '本地LLM VRAM 需求', 'Llama 4 Scout 本地运行', 'DeepSeek vs Qwen 本地对比'],
    generic: ['本地大模型', '本地部署大模型', 'Ollama 教程', '本地大模型 显存', '本地大模型 推荐'] },
  ar: { ddg: 'xa-ar', note: 'FLAG: /ar/ reported as Arabic title + English body. Verify before trusting any ar row.',
    extracted: [],
    generic: ['تشغيل نماذج اللغة محليا', 'أفضل نموذج ذكاء اصطناعي محلي', 'Ollama شرح', 'الذكاء الاصطناعي المحلي الخصوصية'] },
  en: { ddg: 'us-en', note: 'Control. insiderllm ~286 real articles vs PQ ~193.',
    extracted: [],
    generic: ['local LLM', 'run LLM locally', 'best local LLM', 'Ollama tutorial', 'local LLM VRAM requirements', 'local LLM smart home'] },
};

const SEEDS = ['promptquorum.com', 'insiderllm.com', 'llmhardware.io', 'llmconfigurator.com', 'hardwarepedia.com', 'llmlokal.de', 'tech-insider.org', 'techsy.io', 'developerakademie.com', 'skill-sprinters.de', 'dev.classmethod.jp'];

const PLATFORM = /^(reddit|youtube|github|x|twitter|facebook|linkedin|medium|qiita|zenn|note|velog|tistory|zhihu|csdn|juejin|stackoverflow|huggingface|ollama|amazon|google|wikipedia|hatena)\.|\.(hatena|naver)\./i;

const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot', 'Bytespider', 'Applebot-Extended'];
const LOCALE_RE = /^\/(en|de|fr|ja|zh|es|pt|ar|ko|it|nl|sv|fi|pl|ru|tr|id|vi|zh-cn|zh-tw|pt-br|en-au|en-ca|en-ie|en-gb)(\/|$)/i;

/* ═══════════════════════════ HTTP ═══════════════════════════ */

const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, '').toLowerCase(); } catch { return null; } };

async function get(url, ua = UA_BOT, binary = false) {
  const res = await fetch(url, { headers: { 'user-agent': ua }, signal: AbortSignal.timeout(20000), redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  if (!binary) return res.text();
  const buf = Buffer.from(await res.arrayBuffer());
  return (buf[0] === 0x1f && buf[1] === 0x8b) ? gunzipSync(buf).toString('utf8') : buf.toString('utf8');
}

async function ddg(query, region) {
  const html = await get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}&kl=${region}`, UA_BROWSER);
  const out = [];
  for (const m of html.matchAll(/<a[^>]+class="result__a"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    let href = m[1].replace(/&amp;/g, '&');
    const u = href.match(/[?&]uddg=([^&]+)/);
    if (u) href = decodeURIComponent(u[1]);
    if (!/^https?:\/\//.test(href)) continue;
    const h = host(href);
    if (!h) continue;
    out.push({ pos: out.length + 1, host: h, url: href, title: m[2].replace(/<[^>]+>/g, '').trim() });
    if (out.length >= 20) break;
  }
  if (!out.length) throw new Error(/anomaly|captcha/i.test(html) ? 'DDG_BLOCKED' : 'DDG_NO_RESULTS');
  return out;
}

/* ═══════════════════════════ SIZING ═══════════════════════════ */

async function robots(domain) {
  const out = { exists: false, sitemaps: [], bots: {}, signal: null };
  let txt;
  try { txt = await get(`https://${domain}/robots.txt`); }
  catch { for (const b of AI_BOTS) out.bots[b] = '?'; return out; }
  out.exists = true;
  const cs = txt.match(/Content-Signal:\s*(.+)/i); if (cs) out.signal = cs[1].trim();
  for (const m of txt.matchAll(/^\s*Sitemap:\s*(\S+)/gim)) out.sitemaps.push(m[1].trim());

  const groups = []; let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim(); if (!line) continue;
    const ua = line.match(/^User-agent:\s*(.+)$/i);
    if (ua) { if (!cur || cur.rules.length) { cur = { agents: [], rules: [] }; groups.push(cur); } cur.agents.push(ua[1].trim().toLowerCase()); continue; }
    const r = line.match(/^(Disallow|Allow):\s*(.*)$/i);
    if (r && cur) cur.rules.push({ t: r[1].toLowerCase(), p: r[2].trim() });
  }
  for (const b of AI_BOTS) {
    const g = groups.find((x) => x.agents.includes(b.toLowerCase()));
    if (g) out.bots[b] = g.rules.some((r) => r.t === 'disallow' && r.p === '/') ? 'BLOCK' : 'allow';
    else {
      const star = groups.find((x) => x.agents.includes('*'));
      out.bots[b] = !star ? '—' : (star.rules.some((r) => r.t === 'disallow' && r.p === '/') ? 'BLOCK*' : 'allow*');
    }
  }
  return out;
}

async function sizeDomain(domain) {
  const res = { domain, total: null, per_locale: {}, clusters: {}, locales: 0, uniformity: null, error: null };
  const rb = await robots(domain).catch(() => ({ sitemaps: [], bots: {} }));
  res.robots = rb.bots; res.signal = rb.signal;
  res.llms_txt = await get(`https://${domain}/llms.txt`).then((t) => !/<html/i.test(t)).catch(() => false);

  const seen = new Set(); let urls = [];
  const walk = async (url, d) => {
    if (d > 3 || seen.size >= 60 || seen.has(url)) return false;
    seen.add(url);
    let xml; try { xml = await get(url, UA_BOT, true); } catch { return false; }
    if (!/<(urlset|sitemapindex)/i.test(xml)) return false;
    const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1]);
    if (/<sitemapindex/i.test(xml)) { for (const c of locs) { await walk(c, d + 1); await sleep(120); } }
    else urls.push(...locs);
    return true;
  };
  for (const c of [...rb.sitemaps, `https://${domain}/sitemap.xml`, `https://${domain}/sitemap_index.xml`, `https://${domain}/wp-sitemap.xml`]) {
    if (await walk(c, 0) && urls.length) break;
  }
  if (!urls.length) { res.error = 'NO_SITEMAP'; return res; }

  urls = [...new Set(urls)];
  res.total = urls.length;
  for (const u of urls) {
    let p; try { p = new URL(u).pathname; } catch { continue; }
    const m = p.match(LOCALE_RE);
    const loc = m ? m[1].toLowerCase() : '_root';
    res.per_locale[loc] = (res.per_locale[loc] || 0) + 1;
    const seg = p.split('/').filter(Boolean);
    const cl = m ? seg[1] : seg[0];
    if (cl) res.clusters[cl] = (res.clusters[cl] || 0) + 1;
  }
  const c = Object.entries(res.per_locale).filter(([k]) => k !== '_root').map(([, v]) => v);
  res.locales = c.length;
  if (c.length > 1) res.uniformity = Math.round((Math.min(...c) / Math.max(...c)) * 100);
  return res;
}

/* ═══════════════════════════ RUN ═══════════════════════════ */

const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE)) : { rows: [], domains: {} };
const flush = () => writeFileSync(CACHE, JSON.stringify(cache, null, 2));
const locales = (opt('locales', Object.keys(Q).join(',')) || '').split(',').filter(Boolean);

if (!REPORT_ONLY) {
  console.log(`\n▸ SERP — ${locales.length} locales, DuckDuckGo\n`);
  const done = new Set(cache.rows.map((r) => `${r.locale}|${r.set}|${r.query}`));
  for (const loc of locales) {
    const cfg = Q[loc]; if (!cfg) { console.log(`  ? unknown locale ${loc}`); continue; }
    for (const set of ['extracted', 'generic']) {
      for (const query of cfg[set]) {
        if (done.has(`${loc}|${set}|${query}`)) { console.log(`  · ${loc}/${set} ${query.slice(0, 40)} (cached)`); continue; }
        let results = null, error = null;
        try { results = await ddg(query, cfg.ddg); } catch (e) { error = e.message; }
        const me = results?.find((r) => r.host === SELF || r.host.endsWith(`.${SELF}`));
        cache.rows.push({ locale: loc, set, query, error, n: results?.length ?? 0, pq: me?.pos ?? null, results: results ?? [] });
        flush();
        console.log(`  ${loc}/${set.padEnd(9)} ${query.slice(0, 40).padEnd(42)} ${error ? `ERROR ${error}` : `${results.length} hits · PQ ${me ? '#' + me.pos : '—'}`}`);
        await sleep(2000 + Math.random() * 1500);
      }
    }
  }

  const freq = new Map();
  for (const r of cache.rows) for (const x of r.results ?? []) {
    if (!freq.has(x.host)) freq.set(x.host, { hits: 0, locales: new Set(), best: 99 });
    const f = freq.get(x.host); f.hits++; f.locales.add(r.locale); f.best = Math.min(f.best, x.pos);
  }
  cache.platforms = [...freq].filter(([h]) => PLATFORM.test(h)).map(([h, f]) => ({ host: h, hits: f.hits, best: f.best, locales: [...f.locales] }));
  const targets = [...new Set([...SEEDS, ...[...freq].filter(([h, f]) => !PLATFORM.test(h) && f.hits >= 2).map(([h]) => h)])];

  console.log(`\n▸ SIZE — ${targets.length} domains (${cache.platforms.length} platforms recorded, not sized)\n`);
  for (const d of targets) {
    if (cache.domains[d]) { console.log(`  · ${d} (cached)`); continue; }
    process.stdout.write(`  ${d.padEnd(30)}`);
    const p = await sizeDomain(d).catch((e) => ({ domain: d, error: e.message }));
    const f = freq.get(d);
    p.hits = f?.hits ?? 0; p.seen_in = f ? [...f.locales] : []; p.best_pos = f?.best ?? null;
    cache.domains[d] = p; flush();
    console.log(p.error ? p.error : `${String(p.total).padStart(6)} urls · ${p.locales} loc${p.uniformity !== null ? ` · unif ${p.uniformity}%` : ''} · llms ${p.llms_txt ? 'Y' : 'N'}`);
  }
}

/* ═══════════════════════════ REPORT ═══════════════════════════ */

const L = []; const w = (s = '') => L.push(s);
const D = cache.domains; const pq = D[SELF] ?? {};

w(`# Competitor sweep — measured\n`);
w(`${new Date().toISOString()} · engine: DuckDuckGo · **blank = not collected, never inferred**\n`);

w(`## 1. PromptQuorum position by locale\n`);
w(`\`extracted\` = queries from PQ's own pages (contaminated by PQ's stale model names).`);
w(`\`generic\` = head terms. **If PQ ranks on extracted but not generic, it ranks for its own wording, not the market.**\n`);
w(`| Locale | Set | Query | PQ | Hits | Error |`);
w(`|---|---|---|---|---|---|`);
for (const r of cache.rows) w(`| ${r.locale} | ${r.set} | ${r.query} | ${r.pq ? `**#${r.pq}**` : '—'} | ${r.n} | ${r.error ?? ''} |`);

const by = {};
for (const r of cache.rows) { const b = (by[r.locale] ??= { e: [0, 0], g: [0, 0], best: null });
  const k = r.set === 'generic' ? 'g' : 'e'; b[k][1]++; if (r.pq) { b[k][0]++; b.best = b.best === null ? r.pq : Math.min(b.best, r.pq); } }
w(`\n| Locale | extracted hit | **generic hit** | Best pos |`);
w(`|---|---|---|---|`);
for (const [l, b] of Object.entries(by)) w(`| **${l}** | ${b.e[0]}/${b.e[1]} | **${b.g[0]}/${b.g[1]}** | ${b.best ? '#' + b.best : '—'} |`);

w(`\n## 2. Every domain found, sized\n`);
w(`The field the browser audit called "NONE identified" — because it never looked.\n`);
w(`| Domain | URLs | Locales | Unif | llms | Hits | Best | Seen in |`);
w(`|---|---|---|---|---|---|---|---|`);
for (const p of Object.values(D).sort((a, b) => (b.total ?? -1) - (a.total ?? -1))) {
  const m = p.domain === SELF ? '**' : '';
  w(`| ${m}${p.domain}${m} | ${p.total ?? p.error ?? '—'} | ${p.locales ?? '—'} | ${p.uniformity ?? '—'} | ${p.llms_txt ? 'Y' : 'N'} | ${p.hits ?? 0} | ${p.best_pos ?? '—'} | ${(p.seen_in ?? []).join(' ') || '—'} |`);
}

w(`\n## 3. Corpus per locale — the moat\n`);
w(`| Locale | PQ | Largest competitor | Ratio |`);
w(`|---|---|---|---|`);
for (const lang of ['de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko', 'en']) {
  const mine = pq.per_locale?.[lang] ?? (lang === 'en' ? pq.per_locale?._root : null);
  let best = null;
  for (const p of Object.values(D)) {
    if (p.domain === SELF || !p.total) continue;
    const n = p.locales > 0 ? p.per_locale?.[lang] : (lang === 'en' ? p.total : null);
    if (n && (!best || n > best.n)) best = { d: p.domain, n };
  }
  w(`| **${lang}** | ${mine ?? '—'} | ${best ? `${best.d} (${best.n})` : '_none found_'} | ${mine && best ? (mine / best.n).toFixed(1) + '×' : '—'} |`);
}

w(`\n## 4. Platforms — competitors without a domain\n`);
w(`Not sized: a Qiita sitemap is not a competitor's page count. Presence and rank are the signal.\n`);
if (!cache.platforms?.length) w(`_none recorded_`);
else { w(`| Platform | Hits | Best | Locales |`); w(`|---|---|---|---|`);
  for (const p of (cache.platforms ?? []).sort((a, b) => b.hits - a.hits)) w(`| ${p.host} | ${p.hits} | #${p.best} | ${p.locales.join(' ')} |`); }

w(`\n## 5. AI crawler policy\n`);
w(`| Domain | ${AI_BOTS.join(' | ')} | Signal |`);
w(`|---|${AI_BOTS.map(() => '---').join('|')}|---|`);
for (const p of Object.values(D)) { if (!p.robots) continue;
  w(`| ${p.domain} | ${AI_BOTS.map((b) => p.robots[b] ?? '—').join(' | ')} | ${p.signal ?? '—'} |`); }

w(`\n## 6. Before you quote any of this\n`);
w(`- **DuckDuckGo is not Google.** Positions show who exists, not what you rank. GSC by country is authoritative and already yours.`);
w(`- **Extracted queries carry PQ's staleness.** \`Llama 3.2 lokal ausführen\` is a query almost nobody types in July 2026. Read the generic column.`);
w(`- **Platforms aren't sized.** "No standalone competitor" ≠ "no competitor". Qiita/Zhihu/Naver hold the CJK content.`);
w(`- **\`ar\` may not be a locale** — Arabic title, English body was reported. Verify.`);
w(`- **Naver and Baidu are not implemented.** Korea and mainland China are under-measured.`);
w(`- **URLs ≠ articles.** insiderllm's 854 is ~286 real; 535 are tag pages. Read \`clusters\` in ${CACHE}.`);
w(`- **Errors are missing data, not zero.**`);

writeFileSync(REPORT, L.join('\n') + '\n');
console.log(`\n▸ ${REPORT}  (cache: ${CACHE} — rerun resumes)\n`);
