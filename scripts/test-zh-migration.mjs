#!/usr/bin/env node

import fetch from 'node-fetch'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

const tests = {
  redirects: [
    { path: '/blog/prompt-frameworks?lang=zh', expectedCode: 301, expectedLocation: '/zh/blog/prompt-frameworks' },
    { path: '/compare?lang=zh', expectedCode: 301, expectedLocation: '/zh/compare' },
    { path: '/local-llms/what-are-local-llms?lang=zh', expectedCode: 301, expectedLocation: '/zh/local-llms/what-are-local-llms' },
    { path: '/prompt-engineering/what-is-prompt-engineering?lang=zh', expectedCode: 301, expectedLocation: '/zh/prompt-engineering/what-is-prompt-engineering' },
    { path: '/?lang=zh', expectedCode: 301, expectedLocation: '/zh' },
  ],
  
  accessibility: [
    '/zh',
    '/zh/blog',
    '/zh/blog/prompt-frameworks',
    '/zh/compare',
    '/zh/features',
  ],
  
  canonicals: [
    { path: '/zh', expectedCanonical: 'https://www.promptquorum.com/zh' },
    { path: '/zh/blog', expectedCanonical: 'https://www.promptquorum.com/zh/blog' },
  ],
  
  hreflangs: [
    '/zh',
    '/zh/blog',
    '/zh/compare',
    '/zh/features',
  ],
  
  enPages: [
    '/',
    '/blog',
    '/compare',
    '/features',
  ],
}

async function testRedirects() {
  console.log('\n🔄 TEST A: Redirects (?lang=zh → /zh/)')
  let passed = 0
  for (const test of tests.redirects) {
    const url = BASE_URL + test.path
    const response = await fetch(url, { redirect: 'manual' })
    const location = response.headers.get('location')
    const success = response.status === test.expectedCode && location === test.expectedLocation
    console.log(`  ${success ? '✓' : '✗'} ${test.path}`)
    if (!success) console.log(`     Expected ${test.expectedCode} → ${test.expectedLocation}, got ${response.status}${location ? ` → ${location}` : ''}`)
    if (success) passed++
  }
  console.log(`  Result: ${passed}/${tests.redirects.length} PASSED`)
  return passed === tests.redirects.length
}

async function testAccessibility() {
  console.log('\n✓ TEST B: Accessibility (/zh/ pages return 200)')
  let passed = 0
  for (const path of tests.accessibility) {
    const url = BASE_URL + path
    const response = await fetch(url)
    const success = response.status === 200
    console.log(`  ${success ? '✓' : '✗'} ${path}`)
    if (!success) console.log(`     Expected 200, got ${response.status}`)
    if (success) passed++
  }
  console.log(`  Result: ${passed}/${tests.accessibility.length} PASSED`)
  return passed === tests.accessibility.length
}

async function testCanonicals() {
  console.log('\n🔗 TEST C: Canonical tags')
  let passed = 0
  for (const test of tests.canonicals) {
    const url = BASE_URL + test.path
    const response = await fetch(url)
    const html = await response.text()
    const match = html.match(/<link rel="canonical" href="([^"]+)"/)
    const canonical = match ? match[1] : null
    const success = canonical === test.expectedCanonical
    console.log(`  ${success ? '✓' : '✗'} ${test.path}`)
    if (!success) console.log(`     Expected ${test.expectedCanonical}, got ${canonical}`)
    if (success) passed++
  }
  console.log(`  Result: ${passed}/${tests.canonicals.length} PASSED`)
  return passed === tests.canonicals.length
}

async function testHreflangs() {
  console.log('\n🌍 TEST D: Hreflang tags (JA + ZH path-prefix)')
  let passed = 0
  for (const path of tests.hreflangs) {
    const url = BASE_URL + path
    const response = await fetch(url)
    const html = await response.text()
    
    // Count hreflang links and verify ZH path-prefix is present
    const hreflangs = html.match(/<link rel="alternate" hrefLang="([^"]+)"[^>]*href="([^"]+)"/g) || []
    const zhMatch = hreflangs.find(h => h.includes('hrefLang="zh"'))
    const success = zhMatch && zhMatch.includes('/zh')
    
    console.log(`  ${success ? '✓' : '✗'} ${path}`)
    if (!success) console.log(`     ZH hreflang not found or incorrect path-prefix`)
    if (success) passed++
  }
  console.log(`  Result: ${passed}/${tests.hreflangs.length} PASSED`)
  return passed === tests.hreflangs.length
}

async function testSitemap() {
  console.log('\n🗺️  TEST E: Sitemap')
  const response = await fetch(BASE_URL + '/sitemap.xml')
  const xml = await response.text()
  const hasManyZhUrls = (xml.match(/<loc>.*\/zh\//g) || []).length > 10
  const noQueryLangZh = !xml.includes('?lang=zh')
  const success = hasManyZhUrls && noQueryLangZh
  console.log(`  ${success ? '✓' : '✗'} Sitemap includes /zh/ paths, no ?lang=zh`)
  if (!success) {
    console.log(`     /zh/ count: ${(xml.match(/<loc>.*\/zh\//g) || []).length}`)
    console.log(`     No ?lang=zh: ${noQueryLangZh}`)
  }
  console.log(`  Result: ${success ? '1/1' : '0/1'} PASSED`)
  return success
}

async function testEnPages() {
  console.log('\n🇬🇧 TEST F: English pages unbroken')
  let passed = 0
  for (const path of tests.enPages) {
    const url = BASE_URL + path
    const response = await fetch(url)
    const success = response.status === 200
    console.log(`  ${success ? '✓' : '✗'} ${path}`)
    if (!success) console.log(`     Expected 200, got ${response.status}`)
    if (success) passed++
  }
  console.log(`  Result: ${passed}/${tests.enPages.length} PASSED`)
  return passed === tests.enPages.length
}

async function main() {
  console.log('🧪 ZH Migration Test Suite')
  console.log(`Base URL: ${BASE_URL}`)
  console.log('=' .repeat(50))
  
  const results = []
  results.push(await testRedirects())
  results.push(await testAccessibility())
  results.push(await testCanonicals())
  results.push(await testHreflangs())
  results.push(await testSitemap())
  results.push(await testEnPages())
  
  console.log('\n' + '='.repeat(50))
  console.log(`📊 SUMMARY: ${results.filter(r => r).length}/${results.length} test groups PASSED`)
  
  process.exit(results.every(r => r) ? 0 : 1)
}

main().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
