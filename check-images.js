const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('🔍 Checking: https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai?lang=ja\n');
  
  try {
    await page.goto('https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai?lang=ja', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
    // Find all img tags
    const images = await page.locator('img[src*="/images/"]').all();
    console.log(`📸 Found ${images.length} images with /images/ path\n`);
    
    // Check for SVG images specifically
    const svgImages = await page.locator('img[src*=".svg"]').all();
    console.log(`🖼️  SVG images found: ${svgImages.length}`);
    
    if (svgImages.length > 0) {
      console.log('\n📋 Image paths:\n');
      for (const img of svgImages) {
        const src = await img.getAttribute('src');
        const alt = await img.getAttribute('alt');
        console.log(`   • ${src}`);
      }
    }
    
    // Check for figcaptions (SEO captions)
    const captions = await page.locator('figcaption').all();
    console.log(`\n📝 Image captions found: ${captions.length}`);
    
    if (captions.length > 0) {
      console.log('\n📋 Captions:\n');
      for (const cap of captions) {
        const text = await cap.textContent();
        console.log(`   • ${text.substring(0, 80)}...`);
      }
    }
    
    // Check page title to confirm language
    const title = await page.title();
    console.log(`\n✅ Page title: ${title}`);
    
    // Check for h1 to see article title
    const h1 = await page.locator('h1').first();
    const h1Text = await h1.textContent();
    console.log(`✅ Article title: ${h1Text}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
  
  await browser.close();
})();
