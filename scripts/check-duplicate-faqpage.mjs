#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '..', 'src')

// Scan all TypeScript files for FAQPage schema generation
function scanForDuplicateFAQPage() {
  const issues = []

  function walkDir(dir) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        if (!file.startsWith('.')) {
          walkDir(fullPath)
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf-8')
        const faqpageMatches = (content.match(/'@type': 'FAQPage'/g) || []).length

        if (faqpageMatches > 1) {
          issues.push({
            file: fullPath.replace(srcDir, ''),
            count: faqpageMatches,
            content: extractFAQPageSections(content),
          })
        }
      }
    }
  }

  walkDir(srcDir)
  return issues
}

function extractFAQPageSections(content) {
  const sections = []
  const regex = /@type['"]:\s*['"]FAQPage['"][\s\S]*?(?=@type|$)/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const snippet = match[0].substring(0, 200)
    sections.push(snippet)
  }
  return sections
}

// Check for quickAnswerTop + faq dual usage
function checkQuickAnswerTopAndFAQ() {
  const issues = []

  function walkDir(dir) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        if (!file.startsWith('.')) {
          walkDir(fullPath)
        }
      } else if (file.endsWith('.ts') && (file.includes('article') || file.includes('content'))) {
        const content = fs.readFileSync(fullPath, 'utf-8')
        const hasQuickAnswerTop = content.includes('quickAnswerTop')
        const hasFAQSection = content.includes("faqs: [") || content.includes('faqs:')

        if (hasQuickAnswerTop && hasFAQSection) {
          issues.push({
            file: fullPath.replace(srcDir, ''),
            hasQuickAnswerTop,
            hasFAQSection,
          })
        }
      }
    }
  }

  walkDir(srcDir)
  return issues
}

console.log('🔍 Scanning for duplicate FAQPage schema generation...\n')

const duplicates = scanForDuplicateFAQPage()
if (duplicates.length > 0) {
  console.log(`❌ Found ${duplicates.length} files with MULTIPLE FAQPage blocks:\n`)
  duplicates.forEach((issue) => {
    console.log(`📄 ${issue.file}`)
    console.log(`   Count: ${issue.count} FAQPage blocks`)
    console.log()
  })
} else {
  console.log('✅ No files with multiple FAQPage blocks\n')
}

console.log('🔍 Checking for quickAnswerTop + faq dual usage...\n')

const dualUsage = checkQuickAnswerTopAndFAQ()
if (dualUsage.length > 0) {
  console.log(`⚠️  Found ${dualUsage.length} articles with both quickAnswerTop AND faq sections:\n`)
  dualUsage.forEach((issue) => {
    console.log(`📄 ${issue.file}`)
    console.log(`   quickAnswerTop: ${issue.hasQuickAnswerTop}`)
    console.log(`   faq section: ${issue.hasFAQSection}`)
    console.log()
  })
  console.log(
    '\n💡 INSIGHT: These articles have dual FAQ sources, which could lead to duplicate FAQPage')
    console.log('    when both are rendered. Check page-helpers or article page files.\n'
  )
} else {
  console.log('✅ No articles with both quickAnswerTop and faq\n')
}
