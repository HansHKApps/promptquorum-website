// scripts/check-arabic.mjs
// Read-only diagnostic for the Arabic position drop. Fetches live /ar/ pages,
// checks canonical / hreflang / indexability / RTL / caching, with EN as control.
// No repo writes. Node 18+ (global fetch).

const SITE = 'https://www.promptquorum.com';

// Sample of /ar/ pages to check (Arabic local-llms cluster). Adjust if these slugs differ.
const SLUGS = [
  'local-llms/best-arabic-local-llms-2026',
  'local-llms/best-saudi-arabic-local-llms-allam-2026',
  'local-llms/saudi-pdpl-data-sovereignty-local-ai-2026',
  'local-llms/uae-pdpl-data-sovereignty-local-ai-2026',
  'local-llms/what-are-local-llms',
  'local-llms/run-qwen-locally-guide-2026',
];

const reHtmlLang = /<html[^>]*\blang=["']([^"']+)["']/i;
const reHtmlDir  = /<html[^>]*\bdir=["']([^"']+)["']/i;
const reCanonical= /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i;
const reRobots   = /<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i;
const reTitle    = /<title[^>]*>([^<]*)<\/title>/i;
function hreflangs(html) {
  const out = [];
  const re = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi;
  let m; while ((m = re.exec(html))) out.push([m[1], m[2]]);
  return out;
}
const hasArabic = (s) => /[؀-ۿ]/.test(s || ''); // any Arabic-script char

async function head2(url) {
  // fetch twice to test edge cache (1st may be MISS, 2nd should be HIT)
  let c1 = '', c2 = '', cc = '', status = 0;
  try {
    const r1 = await fetch(url, { redirect: 'manual' });
    status = r1.status; c1 = r1.headers.get('x-vercel-cache') || '';
    const r2 = await fetch(url, { redirect: 'manual' });
    c2 = r2.headers.get('x-vercel-cache') || '';
    cc = r2.headers.get('cache-control') || '';
  } catch (e) { status = -1; }
  return { status, c1, c2, cc };
}

async function inspect(url) {
  const h = await head2(url);
  let html = '';
  try { html = await (await fetch(url, { redirect: 'manual' })).text(); } catch {}
  const canonical = (html.match(reCanonical) || [])[1] || '(none)';
  const lang = (html.match(reHtmlLang) || [])[1] || '(none)';
  const dir = (html.match(reHtmlDir) || [])[1] || '(none)';
  const robots = (html.match(reRobots) || [])[1] || '(none)';
  const title = (html.match(reTitle) || [])[1] || '';
  const hl = hreflangs(html);
  return { url, ...h, canonical, lang, dir, robots, title, hl, arabicTitle: hasArabic(title) };
}

(async () => {
  console.log('\n=== ARABIC POSITION-DROP DIAGNOSTIC (read-only) ===\n');
  let canonicalLeaks = 0, noindexAr = 0, rtlBroken = 0, cacheBad = 0, enFallback = 0, hreflangBad = 0;

  for (const slug of SLUGS) {
    const arURL = `${SITE}/ar/${slug}`;
    const enURL = `${SITE}/${slug}`;
    const ar = await inspect(arURL);
    const en = await inspect(enURL); // control

    // --- evaluate the Arabic page ---
    const canonOK = ar.canonical.includes('/ar/'); // must self-reference the /ar/ URL
    const canonLeaksEN = ar.canonical !== '(none)' && !ar.canonical.includes('/ar/');
    const isNoindex = /noindex/i.test(ar.robots);
    const rtlOK = ar.dir.toLowerCase() === 'rtl';
    const langOK = ar.lang.toLowerCase().startsWith('ar');
    const cacheOK = ar.c2 === 'HIT' && !/no-store|private/i.test(ar.cc);
    const arContentOK = ar.arabicTitle; // title should contain Arabic script, not EN fallback
    const hlSelf = ar.hl.some(([lng, href]) => lng.toLowerCase().startsWith('ar') && href.includes('/ar/'));

    if (canonLeaksEN) canonicalLeaks++;
    if (isNoindex) noindexAr++;
    if (!rtlOK) rtlBroken++;
    if (!cacheOK) cacheBad++;
    if (!arContentOK) enFallback++;
    if (!hlSelf) hreflangBad++;

    console.log(`--- ${arURL}`);
    console.log(`  HTTP ${ar.status} | cache ${ar.c1}->${ar.c2} | cache-control: ${ar.cc}`);
    console.log(`  html lang="${ar.lang}" dir="${ar.dir}"  ${langOK&&rtlOK?'OK':'<-- CHECK'}`);
    console.log(`  canonical: ${ar.canonical}`);
    console.log(`     ${canonLeaksEN ? '*** LEAKS TO NON-AR URL — TOP SUSPECT ***' : (canonOK ? 'self-references /ar/ OK' : 'no canonical')}`);
    console.log(`  robots: ${ar.robots} ${isNoindex ? '*** NOINDEX — page being dropped ***' : 'OK'}`);
    console.log(`  hreflang ar->self: ${hlSelf ? 'present OK' : '*** MISSING/incorrect ***'} (total ${ar.hl.length} hreflang tags)`);
    console.log(`  title: "${ar.title.slice(0,60)}" ${arContentOK ? '(Arabic OK)' : '*** looks like EN FALLBACK ***'}`);
    console.log(`  EN control: HTTP ${en.status} | cache ${en.c2} | canonical ${en.canonical.includes('/ar/')?'(WRONG)':'(en, expected)'}`);
    console.log('');
  }

  console.log('=== VERDICT ===');
  const flags = [];
  if (canonicalLeaks) flags.push(`${canonicalLeaks} page(s) CANONICAL LEAK to non-AR URL  <-- almost certainly the cause`);
  if (noindexAr)      flags.push(`${noindexAr} page(s) NOINDEX on /ar/`);
  if (hreflangBad)    flags.push(`${hreflangBad} page(s) missing self-referencing ar hreflang`);
  if (enFallback)     flags.push(`${enFallback} page(s) rendering EN-fallback title (Arabic content not shown)`);
  if (rtlBroken)      flags.push(`${rtlBroken} page(s) missing dir="rtl"`);
  if (cacheBad)       flags.push(`${cacheBad} page(s) not cached (no HIT / no-store) on /ar/`);
  if (flags.length === 0) {
    console.log('All /ar/ checks PASS. Canonical self-references /ar/, indexable, RTL intact, cached,');
    console.log('Arabic content rendering, hreflang correct. => The position drop is most likely');
    console.log('COLD-START NOISE for a young locale, not a regression. No action needed; recheck in 28-day data.');
  } else {
    console.log('REGRESSION SIGNALS found (fix top-down):');
    flags.forEach(f => console.log('  - ' + f));
    console.log('\nThe canonical leak, if present, is the highest-priority fix: it tells Google to rank EN');
    console.log('instead of the Arabic page. Everything else compounds but canonical is the ranking-killer.');
  }
})();
