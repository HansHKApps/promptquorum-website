import { test, expect } from '@playwright/test';

test('Check deployment and multilingual blog', async ({ page }) => {
  console.log('🔍 Checking homepage...');
  const homeResponse = await page.goto('https://promptquorum.com/', { waitUntil: 'networkidle' });
  console.log(`   Status: ${homeResponse.status()}`);
  expect(homeResponse.status()).toBe(200);

  console.log('\n🔍 Checking blog post (English)...');
  const blogResponse = await page.goto('https://promptquorum.com/blog/prompt-frameworks', { waitUntil: 'networkidle' });
  console.log(`   Status: ${blogResponse.status()}`);
  expect(blogResponse.status()).toBe(200);

  const blogTitle = await page.locator('h1').first().textContent();
  console.log(`   Title: ${blogTitle}`);
  expect(blogTitle).toContain('Frameworks');

  console.log('\n🔍 Checking French translation...');
  await page.goto('https://promptquorum.com/blog/prompt-frameworks?lang=fr', { waitUntil: 'networkidle' });
  const frenchTitle = await page.locator('h1').first().textContent();
  console.log(`   French title: ${frenchTitle}`);
  expect(frenchTitle).toContain('frameworks');

  console.log('\n✅ All checks passed!');
});
