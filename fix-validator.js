#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const validatorPath = path.join(__dirname, '.next/types/validator.ts')

if (fs.existsSync(validatorPath)) {
  let content = fs.readFileSync(validatorPath, 'utf8')

  // Fix the incorrect paths - remove "src/" that Next.js incorrectly added
  content = content.replace(/import\("\.\.\/\.\.\/src\/app\//g, 'import("../../app/')
  content = content.replace(/\/\/ Validate \.\.\/\.\.\/src\/app\//g, '// Validate ../../app/')

  fs.writeFileSync(validatorPath, content, 'utf8')
  console.log('✓ Fixed validator paths')
} else {
  console.log('validator.ts not yet generated, skipping fix')
}
