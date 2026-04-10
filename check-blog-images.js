const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('🔍 Checking: https://www.promptquorum.com/blog/geopolitics-and-ai?lang=ja\n');
  
  try {
    await page.goto('https://www.promptquorum.com/blog/geopolitics-and-ai?lang=ja', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
    // Find all img tags
    const svgImages = await page.locator('img[src*=".svg"]').all();
    console.log(`🖼️  SVG images found: ${svgImages.length}`);
    
    if (svgImages.length > 1) {
      console.log('\n📋 Image paths:\n');
      for (const img of svgImages) {
        const src = await img.getAttribute('src');
        if (src.includes('/images/')) {
          console.log(`   • ${src}`);
        }
      }
    }
    
    // Check for figcaptions (SEO captions)
    const captions = await page.locator('figcaption').all();
    console.log(`\n📝 Image captions found: ${captions.length}`);
    
    if (captions.length > 0) {
      console.log('\n✅ Sample captions:\n');
      for (let i = 0; i < Math.min(3, captions.length); i++) {
        const text = await captions[i].textContent();
        console.log(`   • ${text.substring(0, 80)}...`);
      }
    }
    
    // Check page title
    const title = await page.title();
    console.log(`\n✅ Page title: ${title}`);
    
    // Check h1
    const h1 = await page.locator('h1').first();
    const h1Text = await h1.textContent();
    console.log(`✅ Article title: ${h1Text}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
  
  await browser.close();
})();
