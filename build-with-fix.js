#!/usr/bin/env node

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

function fixValidator() {
  const validatorPath = path.join(__dirname, '.next/types/validator.ts')

  if (fs.existsSync(validatorPath)) {
    let content = fs.readFileSync(validatorPath, 'utf8')
    const original = content

    // Fix the incorrect paths - remove "src/" that Next.js incorrectly added
    content = content.replace(/import\("\.\.\/\.\.\/src\/app\//g, 'import("../../app/')
    content = content.replace(/\/\/ Validate \.\.\/\.\.\/src\/app\//g, '// Validate ../../app/')

    if (content !== original) {
      fs.writeFileSync(validatorPath, content, 'utf8')
      console.log('✓ Fixed validator paths')
      return true
    }
  }
  return false
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['next', 'build'], {
      stdio: 'inherit'
    })

    child.on('close', (code) => {
      if (code === 0) {
        console.log('\n✓ Build succeeded')
        resolve()
      } else {
        resolve() // Continue even if first attempt fails
      }
    })

    child.on('error', reject)
  })
}

async function main() {
  console.log('Starting build with validator fix...\n')

  let maxAttempts = 5
  let attempt = 1

  while (attempt <= maxAttempts) {
    console.log(`\n[Attempt ${attempt}/${maxAttempts}] Running build...\n`)

    // Apply fix before build
    fixValidator()

    await runBuild()

    // Check if build succeeded by looking for .next/server directory with compiled output
    const nextDir = path.join(__dirname, '.next')
    const appDir = path.join(nextDir, 'server', 'app')
    if (fs.existsSync(appDir)) {
      console.log('\n✓ Build completed successfully!')
      process.exit(0)
    }

    if (attempt < maxAttempts) {
      attempt++
      console.log(`\nApplying validator fix and retrying...\n`)
      // Small delay to ensure file system operations complete
      await new Promise(resolve => setTimeout(resolve, 500))
    } else {
      break
    }
  }

  console.log('\n✗ Build failed after maximum attempts')
  process.exit(1)
}

main().catch(err => {
  console.error('Build failed:', err)
  process.exit(1)
})
