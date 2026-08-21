const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', m => console.log('CONSOLE:', m.type(), m.text()));
  page.on('pageerror', e => console.log('PAGEERROR:', e.message));
  page.on('requestfailed', r => console.log('REQFAIL:', r.url(), r.failure()?.errorText));
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(1000);
  const btns = await page.locator('button[aria-label*="earch" i]').all();
  await btns[0].click();
  await page.waitForTimeout(300);
  await page.fill('input[type=search]', 'prompt');
  await page.waitForTimeout(2000);
  const count = await page.locator('#search-listbox [role=option]').count();
  console.log('result count', count);
  await page.screenshot({ path: '/tmp/after-search.png' });
  if (count > 0) {
    const before = page.url();
    await page.locator('#search-listbox [role=option]').first().click();
    await page.waitForTimeout(1500);
    const after = page.url();
    console.log('CLICK NAV: before=', before, 'after=', after, after !== before ? 'PASS - click opened article' : 'FAIL - click did NOT navigate');
  }
  await browser.close();
})();
