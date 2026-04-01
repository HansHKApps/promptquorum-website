#!/usr/bin/env node

/**
 * SEO/GEO Validation Script
 * Run after every build to catch language rendering bugs
 *
 * Checks:
 * 1. All client components rendering multilingual content accept initialLang
 * 2. Server pages pass initialLang to client components
 * 3. <html lang> attribute is dynamic (not hardcoded to 'en')
 * 4. All internal links have ?lang= params
 * 5. hreflang alternates exist on all multilingual pages
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const srcDir = path.join(rootDir, 'src')

const LANGUAGES = ['en', 'de', 'fr', 'ja', 'zh']
const MULTILINGUAL_PAGES = [
  'page.tsx',           // Home
  'blog/page.tsx',      // Blog index
  'blog/[slug]/page.tsx', // Blog posts
  'faq/page.tsx',       // FAQ
  'features/page.tsx',  // Features
  'compare/page.tsx',   // Compare
  'how-it-works/page.tsx', // How it works
  'prompt-engineering/page.tsx', // PE hub
  'prompt-engineering/[slug]/page.tsx', // PE articles
  'frameworks/page.tsx', // Frameworks
  'frameworks/[slug]/page.tsx', // Framework detail
]

const MULTILINGUAL_COMPONENTS = [
  'LandingPageServer',
  'FAQPageClient',
  'FeaturesPageClient',
  'ComparePageClient',
  'HowItWorksPageClient',
  'BlogIndexClient',
  'BlogPostClient',
  'PromptEngineeringHub',
  'PromptEngineeringPostClient',
]

let failureCount = 0

function fail(msg) {
  console.error(`❌ ${msg}`)
  failureCount++
}

function pass(msg) {
  console.log(`✅ ${msg}`)
}

function warn(msg) {
  console.warn(`⚠️  ${msg}`)
}

// Check 1: Verify <html lang> is dynamic, not hardcoded
function checkHtmlLangAttribute() {
  const layoutPath = path.join(srcDir, 'app', 'layout.tsx')
  const content = fs.readFileSync(layoutPath, 'utf-8')

  if (content.includes('lang="en"')) {
    fail(`layout.tsx: <html lang="en"> is hardcoded — must be dynamic`)
  } else if (content.includes('lang={') || content.includes('lang={selectedLang}')) {
    pass(`layout.tsx: <html lang> is dynamic`)
  } else {
    warn(`layout.tsx: Could not verify <html lang> is dynamic`)
  }

  // Check that layout reads headers
  if (content.includes('headers()')) {
    pass(`layout.tsx: Reads headers from middleware`)
  } else {
    fail(`layout.tsx: Does not read x-selected-lang header from middleware`)
  }
}

// Check 2: Verify middleware exists and extracts lang
function checkMiddleware() {
  const middlewarePath = path.join(srcDir, 'middleware.ts')
  if (!fs.existsSync(middlewarePath)) {
    fail(`middleware.ts: Does not exist`)
    return
  }

  const content = fs.readFileSync(middlewarePath, 'utf-8')

  if (content.includes('?lang=') && content.includes('x-selected-lang')) {
    pass(`middleware.ts: Extracts lang param and sets header`)
  } else {
    fail(`middleware.ts: Does not properly extract lang or set header`)
  }
}

// Check 3: Verify client components accept initialLang
function checkClientComponentProps() {
  const componentDir = path.join(srcDir, 'components')

  for (const component of MULTILINGUAL_COMPONENTS) {
    const componentPath = path.join(componentDir, `${component}.tsx`)

    if (!fs.existsSync(componentPath)) {
      warn(`${component}.tsx: Not found (may not exist yet)`)
      continue
    }

    const content = fs.readFileSync(componentPath, 'utf-8')

    if (content.includes('initialLang')) {
      pass(`${component}.tsx: Accepts initialLang prop`)
    } else {
      fail(`${component}.tsx: Does not accept initialLang prop`)
    }

    if (content.includes('useLang(initialLang)') || content.includes('useLang(initialLang)')) {
      pass(`${component}.tsx: Passes initialLang to useLang()`)
    } else if (content.includes('useLang()')) {
      fail(`${component}.tsx: Calls useLang() without initialLang`)
    }
  }
}

// Check 4: Verify server pages read searchParams and pass initialLang
function checkServerPages() {
  const appDir = path.join(srcDir, 'app')

  for (const pagePath of MULTILINGUAL_PAGES) {
    const fullPath = path.join(appDir, pagePath)

    if (!fs.existsSync(fullPath)) {
      warn(`${pagePath}: Does not exist`)
      continue
    }

    const content = fs.readFileSync(fullPath, 'utf-8')

    // Check for searchParams in function signature
    if (content.includes('searchParams')) {
      pass(`${pagePath}: Accepts searchParams`)
    } else {
      fail(`${pagePath}: Does not accept searchParams`)
    }

    // Check for async function
    if (content.includes('async function') || content.includes('export default async')) {
      pass(`${pagePath}: Is async`)
    } else if (!pagePath.includes('[slug]')) {
      warn(`${pagePath}: May not be async (could be static)`)
    }

    // Check for lang extraction logic
    if (content.includes('?lang') || content.includes('.lang as string')) {
      pass(`${pagePath}: Extracts lang from searchParams`)
    } else if (!pagePath.includes('metadata')) {
      fail(`${pagePath}: Does not extract lang from searchParams`)
    }

    // Check for initialLang prop passing
    if (content.includes('initialLang={')) {
      pass(`${pagePath}: Passes initialLang to client component`)
    } else if (pagePath !== 'page.tsx' && !pagePath.includes('[slug]')) {
      fail(`${pagePath}: Does not pass initialLang to client component`)
    }
  }
}

// Check 5: Verify hreflang alternates
function checkHrefLangAlternates() {
  const appDir = path.join(srcDir, 'app')
  const hreflanFiles = [
    'page.tsx',
    'blog/page.tsx',
    'blog/[slug]/page.tsx',
    'faq/page.tsx',
    'features/page.tsx',
    'compare/page.tsx',
    'how-it-works/page.tsx',
    'prompt-engineering/page.tsx',
    'frameworks/page.tsx',
  ]

  for (const file of hreflanFiles) {
    const fullPath = path.join(appDir, file)

    if (!fs.existsSync(fullPath)) {
      warn(`${file}: Does not exist`)
      continue
    }

    const content = fs.readFileSync(fullPath, 'utf-8')

    if (content.includes('generateAlternates') || content.includes('x-default')) {
      pass(`${file}: Has hreflang alternates`)
    } else {
      fail(`${file}: Missing hreflang alternates (no x-default)`)
    }

    if (content.includes("'x-default'")) {
      pass(`${file}: Includes x-default alternate`)
    } else if (content.includes('alternates')) {
      warn(`${file}: Has alternates but may be missing x-default`)
    }
  }
}

// Check 6: Verify internal links have ?lang= params in translated content
function checkInternalLinks() {
  const contentPath = path.join(srcDir, 'lib', 'prompt-engineering', 'content.ts')

  if (!fs.existsSync(contentPath)) {
    warn(`content.ts: Does not exist`)
    return
  }

  const content = fs.readFileSync(contentPath, 'utf-8')

  // Look for links in non-English blocks
  const deBlock = content.match(/de:\s*\{[\s\S]*?\n\s*\},/)?.[0] || ''
  const frBlock = content.match(/fr:\s*\{[\s\S]*?\n\s*\},/)?.[0] || ''

  // Check for /prompt-engineering/ links WITHOUT ?lang= in DE block
  const deLinksWithoutLang = (deBlock.match(/\[([^\]]+)\]\(\/prompt-engineering\/[^?]+\)/g) || []).length
  if (deLinksWithoutLang > 0) {
    fail(`content.ts: Found ${deLinksWithoutLang} internal links in DE block without ?lang=de`)
  } else {
    pass(`content.ts: DE block links have ?lang= params`)
  }

  // Similar check for FR
  const frLinksWithoutLang = (frBlock.match(/\[([^\]]+)\]\(\/prompt-engineering\/[^?]+\)/g) || []).length
  if (frLinksWithoutLang > 0) {
    fail(`content.ts: Found ${frLinksWithoutLang} internal links in FR block without ?lang=fr`)
  } else {
    pass(`content.ts: FR block links have ?lang= params`)
  }
}

// Check 7: Verify Translation spec is up to date
function checkTranslationSpec() {
  const specPath = path.join(rootDir, 'docs', 'TRANSLATION_SPEC.md')

  if (!fs.existsSync(specPath)) {
    fail(`TRANSLATION_SPEC.md: Does not exist`)
    return
  }

  const content = fs.readFileSync(specPath, 'utf-8')

  if (content.includes('initialLang') && content.includes('Server-to-Client')) {
    pass(`TRANSLATION_SPEC.md: Documents initialLang requirement`)
  } else {
    fail(`TRANSLATION_SPEC.md: Does not document initialLang handoff pattern`)
  }
}

// Check 8: Verify CLAUDE.md documents the pattern
function checkClaudeMd() {
  const claudePath = path.join(rootDir, 'CLAUDE.md')

  if (!fs.existsSync(claudePath)) {
    warn(`CLAUDE.md: Does not exist`)
    return
  }

  const content = fs.readFileSync(claudePath, 'utf-8')

  if (content.includes('initialLang') && content.includes('Server-to-Client')) {
    pass(`CLAUDE.md: Documents initialLang pattern`)
  } else {
    fail(`CLAUDE.md: Does not document initialLang pattern`)
  }
}

// Main
console.log('\n🔍 Running SEO/GEO Validation...\n')

checkHtmlLangAttribute()
console.log()
checkMiddleware()
console.log()
checkClientComponentProps()
console.log()
checkServerPages()
console.log()
checkHrefLangAlternates()
console.log()
checkInternalLinks()
console.log()
checkTranslationSpec()
console.log()
checkClaudeMd()

console.log(`\n${failureCount === 0 ? '✅' : '❌'} Validation complete: ${failureCount} issues found\n`)

process.exit(failureCount > 0 ? 1 : 0)
