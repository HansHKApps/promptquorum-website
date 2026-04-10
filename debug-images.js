const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Log all network requests for SVG files
  page.on('response', response => {
    if (response.url().includes('.svg')) {
      console.log(`${response.status()} - ${response.url()}`);
    }
  });
  
  console.log('🔍 Checking SVG file requests...\n');
  
  await page.goto('https://www.promptquorum.com/prompt-engineering/geopolitics-and-ai?lang=ja', {
    waitUntil: 'networkidle',
    timeout: 30000
  });
  
  // Wait a moment for images to load
  await page.waitForTimeout(2000);
  
  // Check if figure elements exist
  const figures = await page.locator('figure').all();
  console.log(`\n📊 Found ${figures.length} <figure> elements\n`);
  
  if (figures.length > 0) {
    console.log('Figure contents:');
    for (let i = 0; i < figures.length; i++) {
      const fig = figures[i];
      const html = await fig.innerHTML();
      console.log(`\n[Figure ${i+1}]`);
      console.log(html.substring(0, 200));
    }
  }
  
  // Check content structure
  const article = await page.locator('article').first();
  const articleHTML = await article.innerHTML();
  
  // Count image references
  const imageCount = (articleHTML.match(/\/images\//g) || []).length;
  console.log(`\n🔎 References to /images/ in article HTML: ${imageCount}`);
  
  // Look for specific image paths in the HTML
  const jaImageRefs = (articleHTML.match(/ai-.*-ja\.svg/g) || []);
  console.log(`🎌 Japanese image paths found in HTML: ${jaImageRefs.length}`);
  if (jaImageRefs.length > 0) {
    jaImageRefs.forEach(ref => console.log(`   • ${ref}`));
  }
  
  await browser.close();
})();
