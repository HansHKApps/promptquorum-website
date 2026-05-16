#!/usr/bin/env node

/**
 * JA Language Migration Test Suite
 * Verifies that Japanese URL migration from ?lang=ja to /ja/ is working correctly
 */

import fetch from 'node-fetch'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
const TIMEOUT = 5000

console.log(`\n🧪 JA Language Migration Test Suite`)
console.log(`📍 Testing against: ${BASE_URL}\n`)

const tests = {
  passed: 0,
  failed: 0,
  errors: [],
}

async function testRedirect(oldUrl, newUrl, description) {
  try {
    const fullOldUrl = `${BASE_URL}${oldUrl}`
    const response = await fetch(fullOldUrl, {
      redirect: 'manual',
      timeout: TIMEOUT,
    })

    if (response.status === 301 || response.status === 302) {
      const location = response.headers.get('location')
      const expectedLocation = newUrl.startsWith('http') ? newUrl : `${BASE_URL}${newUrl}`

      if (location === expectedLocation) {
        console.log(`✅ [A] Redirect ${oldUrl} → ${newUrl}`)
        tests.passed++
        return true
      } else {
        console.log(`❌ [A] Redirect ${oldUrl}: expected ${expectedLocation}, got ${location}`)
        tests.failed++
        tests.errors.push(`Redirect mismatch: ${oldUrl}`)
        return false
      }
    } else {
      console.log(`❌ [A] Redirect ${oldUrl}: expected 301/302, got ${response.status}`)
      tests.failed++
      tests.errors.push(`No redirect at ${oldUrl}`)
      return false
    }
  } catch (e) {
    console.log(`❌ [A] Redirect ${oldUrl}: ${e.message}`)
    tests.failed++
    tests.errors.push(`Error testing ${oldUrl}: ${e.message}`)
    return false
  }
}

async function testJAPageAccessible(url, description) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      timeout: TIMEOUT,
    })

    if (response.status === 200) {
      const text = await response.text()
      // Check for Japanese characters as proof of content
      const hasJapanese = /[぀-ゟ゠-ヿ一-鿿]/.test(text)

      if (hasJapanese) {
        console.log(`✅ [B] New URL ${url}: 200 OK with Japanese content`)
        tests.passed++
        return true
      } else {
        console.log(`⚠️  [B] New URL ${url}: 200 OK but no Japanese detected (may be nav)`)
        tests.passed++
        return true
      }
    } else {
      console.log(`❌ [B] New URL ${url}: expected 200, got ${response.status}`)
      tests.failed++
      tests.errors.push(`${url} returned ${response.status}`)
      return false
    }
  } catch (e) {
    console.log(`❌ [B] New URL ${url}: ${e.message}`)
    tests.failed++
    tests.errors.push(`Error accessing ${url}: ${e.message}`)
    return false
  }
}

async function testCanonicalTag(url, expectedCanonical) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      timeout: TIMEOUT,
    })
    const text = await response.text()

    // Look for canonical link
    const canonicalMatch = text.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)
    const canonical = canonicalMatch?.[1]

    if (canonical === expectedCanonical) {
      console.log(`✅ [C] Canonical on ${url}: correct`)
      tests.passed++
      return true
    } else {
      console.log(`❌ [C] Canonical on ${url}: expected ${expectedCanonical}, got ${canonical}`)
      tests.failed++
      tests.errors.push(`Canonical mismatch on ${url}`)
      return false
    }
  } catch (e) {
    console.log(`❌ [C] Canonical check ${url}: ${e.message}`)
    tests.failed++
    tests.errors.push(`Error checking canonical on ${url}: ${e.message}`)
    return false
  }
}

async function testHreflangTags(url, expectedLangs) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      timeout: TIMEOUT,
    })
    const text = await response.text()

    // Look for all hreflang tags
    const hreflangs = {}
    const hrefRegex = /<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"/g
    let match
    while ((match = hrefRegex.exec(text)) !== null) {
      hreflangs[match[1]] = match[2]
    }

    // Check if we have entries for all expected langs
    const missingLangs = expectedLangs.filter(lang => !hreflangs[lang])

    if (missingLangs.length === 0) {
      console.log(`✅ [D] Hreflang on ${url}: found all expected languages`)
      tests.passed++
      return true
    } else {
      console.log(`❌ [D] Hreflang on ${url}: missing ${missingLangs.join(', ')}`)
      tests.failed++
      tests.errors.push(`Missing hreflang for ${missingLangs.join(', ')} on ${url}`)
      return false
    }
  } catch (e) {
    console.log(`❌ [D] Hreflang check ${url}: ${e.message}`)
    tests.failed++
    tests.errors.push(`Error checking hreflang on ${url}: ${e.message}`)
    return false
  }
}

async function testSitemap() {
  try {
    const response = await fetch(`${BASE_URL}/sitemap.xml`, {
      timeout: TIMEOUT,
    })
    const text = await response.text()

    // Check for /ja/ URLs in sitemap
    const hasJAUrls = /<loc>https:\/\/www\.promptquorum\.com\/ja\//.test(text)
    // Check that old ?lang=ja URLs are not in sitemap
    const hasOldLangJA = /<loc>https:\/\/www\.promptquorum\.com\/[^"]*\?lang=ja/.test(text)

    if (hasJAUrls && !hasOldLangJA) {
      console.log(`✅ [E] Sitemap: has /ja/ URLs, no ?lang=ja URLs`)
      tests.passed++
      return true
    } else if (!hasJAUrls) {
      console.log(`❌ [E] Sitemap: missing /ja/ URLs`)
      tests.failed++
      tests.errors.push(`Sitemap missing /ja/ URLs`)
      return false
    } else if (hasOldLangJA) {
      console.log(`⚠️  [E] Sitemap: found old ?lang=ja URLs`)
      tests.failed++
      tests.errors.push(`Sitemap contains old ?lang=ja URLs`)
      return false
    }
  } catch (e) {
    console.log(`❌ [E] Sitemap check: ${e.message}`)
    tests.failed++
    tests.errors.push(`Error checking sitemap: ${e.message}`)
    return false
  }
}

async function testENPageUnbroken(url, description) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      timeout: TIMEOUT,
    })

    if (response.status === 200) {
      console.log(`✅ [F] EN page ${url}: 200 OK`)
      tests.passed++
      return true
    } else {
      console.log(`❌ [F] EN page ${url}: expected 200, got ${response.status}`)
      tests.failed++
      tests.errors.push(`EN page ${url} returned ${response.status}`)
      return false
    }
  } catch (e) {
    console.log(`❌ [F] EN page ${url}: ${e.message}`)
    tests.failed++
    tests.errors.push(`Error accessing EN page ${url}: ${e.message}`)
    return false
  }
}

async function runTests() {
  console.log('📝 Test A: Redirect Verification')
  console.log('━'.repeat(50))
  await testRedirect('/?lang=ja', '/ja', 'home redirect')
  await testRedirect('/blog?lang=ja', '/ja/blog', 'blog hub redirect')
  await testRedirect('/compare?lang=ja', '/ja/compare', 'compare redirect')
  await testRedirect('/faq?lang=ja', '/ja/faq', 'faq redirect')
  await testRedirect('/features?lang=ja', '/ja/features', 'features redirect')
  console.log()

  console.log('📝 Test B: New URL Accessibility')
  console.log('━'.repeat(50))
  await testJAPageAccessible('/ja', 'JA home')
  await testJAPageAccessible('/ja/blog', 'JA blog hub')
  await testJAPageAccessible('/ja/compare', 'JA compare')
  await testJAPageAccessible('/ja/faq', 'JA FAQ')
  console.log()

  console.log('📝 Test C: Canonical Tag Verification')
  console.log('━'.repeat(50))
  await testCanonicalTag('/ja', 'https://www.promptquorum.com/ja')
  await testCanonicalTag('/ja/blog', 'https://www.promptquorum.com/ja/blog')
  console.log()

  console.log('📝 Test D: Hreflang Verification')
  console.log('━'.repeat(50))
  await testHreflangTags('/ja', ['en', 'ja', 'de', 'fr', 'zh', 'x-default'])
  await testHreflangTags('/ja/blog', ['en', 'ja', 'de', 'fr', 'zh', 'x-default'])
  console.log()

  console.log('📝 Test E: Sitemap Verification')
  console.log('━'.repeat(50))
  await testSitemap()
  console.log()

  console.log('📝 Test F: EN Pages Unbroken')
  console.log('━'.repeat(50))
  await testENPageUnbroken('/', 'EN home')
  await testENPageUnbroken('/blog', 'EN blog')
  await testENPageUnbroken('/compare', 'EN compare')
  await testENPageUnbroken('/faq', 'EN FAQ')
  console.log()

  // Print summary
  console.log('📊 Test Results')
  console.log('━'.repeat(50))
  console.log(`✅ Passed: ${tests.passed}`)
  console.log(`❌ Failed: ${tests.failed}`)

  if (tests.errors.length > 0) {
    console.log(`\n⚠️  Errors:`)
    tests.errors.forEach(err => console.log(`  - ${err}`))
  }

  if (tests.failed === 0) {
    console.log(`\n🎉 All tests passed!`)
    process.exit(0)
  } else {
    console.log(`\n❌ Some tests failed. Review above for details.`)
    process.exit(1)
  }
}

runTests().catch(e => {
  console.error('💥 Test suite error:', e)
  process.exit(1)
})
