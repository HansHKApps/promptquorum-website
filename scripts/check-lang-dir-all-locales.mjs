// scripts/check-lang-dir-all-locales.mjs
// Read-only: verify <html lang> and dir are correct on every locale. No writes.
// Node 18+ (global fetch).

const SITE = 'https://www.promptquorum.com';

// One representative article slug per locale path. EN has no prefix.
// Pick a slug that exists in ALL locales (a Wave-shared local-llms article is safest).
const SLUG = 'local-llms/what-are-local-llms';

const LOCALES = [
  { code: 'en', path: '',     expectLang: 'en', expectDir: 'ltr' },
  { code: 'de', path: '/de',  expectLang: 'de', expectDir: 'ltr' },
  { code: 'fr', path: '/fr',  expectLang: 'fr', expectDir: 'ltr' },
  { code: 'ja', path: '/ja',  expectLang: 'ja', expectDir: 'ltr' },
  { code: 'zh', path: '/zh',  expectLang: 'zh', expectDir: 'ltr' },
  { code: 'es', path: '/es',  expectLang: 'es', expectDir: 'ltr' },
  { code: 'pt', path: '/pt',  expectLang: 'pt', expectDir: 'ltr' },
  { code: 'ko', path: '/ko',  expectLang: 'ko', expectDir: 'ltr' },
  { code: 'ar', path: '/ar',  expectLang: 'ar', expectDir: 'rtl' },
];

const reLang = /<html[^>]*\blang=["']([^"']+)["']/i;
const reDir  = /<html[^>]*\bdir=["']([^"']+)["']/i;

async function check(loc) {
  const url = `${SITE}${loc.path}/${SLUG}`;
  let html = '', status = 0;
  try {
    const r = await fetch(url, { redirect: 'manual' });
    status = r.status;
    html = await r.text();
  } catch { status = -1; }
  const lang = (html.match(reLang) || [])[1] || '(none)';
  const dir  = (html.match(reDir)  || [])[1] || '(none)';
  const langOK = lang.toLowerCase().startsWith(loc.expectLang);
  const dirOK  = dir.toLowerCase() === loc.expectDir;
  return { ...loc, url, status, lang, dir, langOK, dirOK, ok: langOK && dirOK };
}

(async () => {
  console.log('\n=== <html lang>/dir CHECK — all 9 locales (read-only) ===');
  console.log(`slug: /${SLUG}\n`);
  const rows = [];
  for (const loc of LOCALES) rows.push(await check(loc));

  console.log('loc | HTTP | lang= (want)      | dir= (want)    | verdict');
  console.log('-'.repeat(70));
  for (const r of rows) {
    const langCol = `${r.lang} (${r.expectLang})`.padEnd(17);
    const dirCol  = `${r.dir} (${r.expectDir})`.padEnd(14);
    const v = r.ok ? 'OK' : `WRONG${!r.langOK ? ' lang' : ''}${!r.dirOK ? ' dir' : ''}`;
    console.log(`${r.code.padEnd(3)} | ${String(r.status).padEnd(4)} | ${langCol} | ${dirCol} | ${v}`);
  }

  const bad = rows.filter(r => !r.ok && r.status === 200);
  const nonEnBad = bad.filter(r => r.code !== 'en');
  console.log('\n=== VERDICT ===');
  if (bad.length === 0) {
    console.log('All locales emit correct lang/dir. Nothing to fix.');
  } else {
    console.log(`${bad.length} locale(s) WRONG: ${bad.map(r => r.code).join(', ')}`);
    if (nonEnBad.length === LOCALES.length - 1) {
      console.log('=> ALL non-EN locales affected. Confirms a ROOT-LAYOUT / [locale]-segment defect,');
      console.log('   not Arabic-specific. One central fix corrects every locale at once.');
    } else if (nonEnBad.length > 1) {
      console.log('=> Multiple (not all) locales affected — check whether the wrong ones share a code path.');
    } else {
      console.log('=> Isolated to Arabic — narrower fix than a root-layout defect.');
    }
    const dirOnly = bad.filter(r => r.langOK && !r.dirOK);
    if (dirOnly.length) console.log(`   Note: ${dirOnly.map(r=>r.code).join(', ')} have correct lang but wrong dir.`);
  }
})();
