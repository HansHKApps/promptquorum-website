const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('🔍 Final check: https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai?lang=en\n');
  
  try {
    await page.goto('https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai?lang=en', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
    // Count figures
    const figures = await page.locator('figure').all();
    console.log(`✅ Found ${figures.length} <figure> elements (expecting 5)\n`);
    
    // Check for SVG images
    const svgImages = await page.locator('img[src*=".svg"]').all();
    console.log(`✅ SVG images found: ${svgImages.length}\n`);
    
    // List image sources
    const imageSrcs = [];
    for (const img of svgImages) {
      const src = await img.getAttribute('src');
      if (src.includes('/images/ai-') || src.includes('/images/regional-') || src.includes('/images/compliance-')) {
        imageSrcs.push(src);
      }
    }
    
    if (imageSrcs.length > 0) {
      console.log('📋 Article images found:\n');
      imageSrcs.forEach(src => console.log(`   • ${src}`));
    }
    
    // Check captions
    const captions = await page.locator('figcaption').all();
    console.log(`\n✅ Figcaptions found: ${captions.length}`);
    
    if (captions.length > 0) {
      console.log('\n📝 Sample captions:\n');
      for (let i = 0; i < Math.min(2, captions.length); i++) {
        const text = await captions[i].textContent();
        console.log(`   • ${text.substring(0, 90)}...`);
      }
    }
    
    // Overall status
    if (figures.length >= 5 && imageSrcs.length >= 5) {
      console.log('\n✅ SUCCESS: All 5 images rendering with captions!');
    } else {
      console.log(`\n⚠️  Partial: ${figures.length} figures, ${imageSrcs.length} article images`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
  
  await browser.close();
})();
