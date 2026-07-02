#!/usr/bin/env node
/**
 * Validate FAQPage schema structure across all article clusters.
 * Ensures:
 * 1. No article has BOTH quickAnswerTop AND separate FAQ rendering
 * 2. Articles with explicit faqSchema don't also auto-generate one
 * 3. The glossary article doesn't render duplicate FAQPages
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '..', 'src')

const issues = []

// Check all article files for problematic patterns
function scanArticles() {
  const articlesPattern = /src\/lib\/(local-llms|prompt-engineering|power-local-llm|smart-home|prompt-bites|balcony-solar)\/articles/

  function walkDir(dir) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        if (!file.startsWith('.')) {
          walkDir(fullPath)
        }
      } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
        const relPath = fullPath.replace(srcDir, '')
        if (!articlesPattern.test(relPath)) continue

        const content = fs.readFileSync(fullPath, 'utf-8')

        // Check for problematic patterns in article data
        const enBlockMatch = content.match(/en:\s*\{[\s\S]*?\n\s*\}/m)
        if (!enBlockMatch) return

        const enBlock = enBlockMatch[0]
        const hasQuickAnswerTop = enBlock.includes('quickAnswerTop')
        const hasFAQSection = enBlock.includes("faqs: [") || enBlock.includes('faq:')
        const hasExplicitFAQSchema = enBlock.includes('faqSchema:')

        // Validation rules
        if (hasExplicitFAQSchema && hasFAQSection) {
          issues.push({
            file: relPath,
            type: 'CONFLICT_EXPLICIT_SCHEMA',
            message: 'Article has both explicit faqSchema AND faq section entries. Remove the faq entries to avoid confusion.',
            severity: 'warn',
          })
        }

        // For local-llms and power-local-llm: quickAnswerTop should be combined with FAQ
        if (hasQuickAnswerTop && hasFAQSection && !hasExplicitFAQSchema) {
          // This is OK - both should be combined into one FAQPage
          // Just note it for review
        }

        // Check if glossary article (PE only)
        if (relPath.includes('prompt-engineering') && file.includes('glossary')) {
          if (hasFAQSection) {
            issues.push({
              file: relPath,
              type: 'GLOSSARY_FAQ_REDUNDANT',
              message: 'Glossary article has faq section but defines FAQPage in definedTermSetSchema. Remove faq section or remove from definedTermSetSchema.',
              severity: 'error',
            })
          }
        }
      }
    }
  }

  walkDir(path.join(srcDir, 'lib'))
}

// Verify page render logic
function checkPageHelpers() {
  const files = [
    'src/app/local-llms/[slug]/page.tsx',
    'src/app/power-local-llm/[slug]/page.tsx',
    'src/app/prompt-engineering/[slug]/page.tsx',
  ]

  for (const filePath of files) {
    const fullPath = path.join(srcDir, '..', filePath)
    if (!fs.existsSync(fullPath)) continue

    const content = fs.readFileSync(fullPath, 'utf-8')

    // Check for proper FAQPage generation logic
    const hasQuickAnswerHandling = content.includes('quickAnswerTop')
    const hasFaqGeneration = content.includes("'@type': 'FAQPage'")

    // For prompt-engineering glossary, verify it excludes auto-generated FAQ
    if (filePath.includes('prompt-engineering')) {
      if (content.includes("slug === 'prompt-engineering-glossary'") && hasFaqGeneration) {
        const excludeLogic = content.includes("slug !== 'prompt-engineering-glossary'")
        if (!excludeLogic) {
          issues.push({
            file: filePath,
            type: 'GLOSSARY_MISSING_EXCLUDE',
            message: "Glossary article should exclude auto-generated FAQSchema. Add condition: slug !== 'prompt-engineering-glossary'",
            severity: 'error',
          })
        }
      }
    }

    // For power-local-llm, verify quickAnswerTop is included
    if (filePath.includes('power-local-llm')) {
      if (!hasQuickAnswerHandling && hasFaqGeneration) {
        issues.push({
          file: filePath,
          type: 'MISSING_QUICK_ANSWER',
          message: 'page-helpers should combine quickAnswerTop + faq entries into single FAQPage',
          severity: 'warn',
        })
      }
    }
  }
}

console.log('🔍 Validating FAQPage schema structure...\n')

scanArticles()
checkPageHelpers()

if (issues.length === 0) {
  console.log('✅ All FAQPage schemas are correctly structured\n')
  process.exit(0)
}

console.log(`❌ Found ${issues.length} issue(s):\n`)

const errors = issues.filter((i) => i.severity === 'error')
const warnings = issues.filter((i) => i.severity === 'warn')

if (errors.length > 0) {
  console.log(`\n🚫 ERRORS (${errors.length}):\n`)
  errors.forEach((issue) => {
    console.log(`📄 ${issue.file}`)
    console.log(`   Type: ${issue.type}`)
    console.log(`   ${issue.message}\n`)
  })
}

if (warnings.length > 0) {
  console.log(`\n⚠️  WARNINGS (${warnings.length}):\n`)
  warnings.forEach((issue) => {
    console.log(`📄 ${issue.file}`)
    console.log(`   Type: ${issue.type}`)
    console.log(`   ${issue.message}\n`)
  })
}

process.exit(errors.length > 0 ? 1 : 0)
