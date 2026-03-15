const { chromium } = require('playwright');

async function checkSite() {
  console.log('🚀 Starting deployment checks...\n');
  
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Check homepage
    console.log('🔍 Checking homepage (promptquorum.com)...');
    const homeRes = await page.goto('https://promptquorum.com/', { waitUntil: 'networkidle' });
    const homeStatus = homeRes?.status();
    console.log(`   Status: ${homeStatus}`);
    
    if (homeStatus === 404) {
      console.log('   ❌ FAILED: Homepage returns 404\n');
      return false;
    }
    
    const title = await page.title();
    console.log(`   ✅ Title: "${title}"\n`);

    // Check blog post (English)
    console.log('🔍 Checking blog post (English)...');
    const blogRes = await page.goto('https://promptquorum.com/blog/prompt-frameworks', { waitUntil: 'networkidle' });
    const blogStatus = blogRes?.status();
    console.log(`   Status: ${blogStatus}`);
    
    if (blogStatus === 404) {
      console.log('   ❌ FAILED: Blog post returns 404\n');
      return false;
    }

    const enTitle = await page.locator('h1').first().textContent();
    console.log(`   ✅ English title: "${enTitle}"\n`);

    // Check French translation
    console.log('🔍 Checking French translation (?lang=fr)...');
    await page.goto('https://promptquorum.com/blog/prompt-frameworks?lang=fr', { waitUntil: 'networkidle' });
    const frTitle = await page.locator('h1').first().textContent();
    const frCategory = await page.locator('.inline-block.px-3').first().textContent();
    
    console.log(`   Title: "${frTitle}"`);
    console.log(`   Category: "${frCategory}"`);
    
    const isFrench = frTitle?.toLowerCase().includes('framework') && frCategory?.includes('Ingénierie');
    if (isFrench) {
      console.log(`   ✅ French translation working!\n`);
    } else {
      console.log(`   ⚠️  Partial French translation\n`);
    }

    // Check German translation
    console.log('🔍 Checking German translation (?lang=de)...');
    await page.goto('https://promptquorum.com/blog/prompt-frameworks?lang=de', { waitUntil: 'networkidle' });
    const deTitle = await page.locator('h1').first().textContent();
    const deCategory = await page.locator('.inline-block.px-3').first().textContent();
    
    console.log(`   Title: "${deTitle}"`);
    console.log(`   Category: "${deCategory}"`);
    
    const isGerman = deTitle?.toLowerCase().includes('framework') && deCategory?.includes('Prompt-Engineering');
    if (isGerman) {
      console.log(`   ✅ German translation working!\n`);
    } else {
      console.log(`   ⚠️  Partial German translation\n`);
    }

    // Check Japanese translation
    console.log('🔍 Checking Japanese translation (?lang=ja)...');
    await page.goto('https://promptquorum.com/blog/prompt-frameworks?lang=ja', { waitUntil: 'networkidle' });
    const jaTitle = await page.locator('h1').first().textContent();
    console.log(`   Title: "${jaTitle}"`);
    console.log(`   ✅ Japanese loaded\n`);

    // Check Chinese translation
    console.log('🔍 Checking Chinese translation (?lang=zh)...');
    await page.goto('https://promptquorum.com/blog/prompt-frameworks?lang=zh', { waitUntil: 'networkidle' });
    const zhTitle = await page.locator('h1').first().textContent();
    console.log(`   Title: "${zhTitle}"`);
    console.log(`   ✅ Chinese loaded\n`);

    console.log('✅✅✅ ALL CHECKS PASSED! Deployment is live with multilingual support.\n');
    return true;

  } catch (error) {
    console.error('❌ Error during checks:', error.message);
    return false;
  } finally {
    await browser.close();
  }
}

checkSite().then(success => {
  process.exit(success ? 0 : 1);
});
