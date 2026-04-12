#!/usr/bin/env node

/**
 * Validation script for presentation HTML files
 * Checks for common issues that would break the presentations in-browser
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PRESENTATIONS_DIR = path.join(__dirname, '../public/presentations');
const ERRORS = [];
const WARNINGS = [];

function validatePresentationFile(filePath) {
  const fileName = path.basename(filePath);

  if (!filePath.endsWith('-static.html')) {
    return; // Skip non-static presentations
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check 1: Extract and validate JavaScript syntax
  const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
  if (scriptMatch) {
    const jsContent = scriptMatch[1];
    const tempFile = path.join(__dirname, '.temp-js-check.js');

    try {
      fs.writeFileSync(tempFile, jsContent);
      execSync(`node --check "${tempFile}"`, { stdio: 'pipe' });
    } catch (err) {
      ERRORS.push(`${fileName}: JavaScript syntax error - ${err.message.split('\n')[0]}`);
    } finally {
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  } else {
    ERRORS.push(`${fileName}: No <script> tag found`);
    return;
  }

  // Check 2: Verify CONTENT object exists and has all 5 languages
  const contentMatch = content.match(/const CONTENT = {([\s\S]*?)};/);
  if (!contentMatch) {
    ERRORS.push(`${fileName}: CONTENT object not found`);
    return;
  }

  const requiredLanguages = ['en', 'de', 'fr', 'ja', 'zh'];
  const contentStr = contentMatch[1];

  requiredLanguages.forEach(lang => {
    if (!contentStr.includes(`${lang}: {`)) {
      ERRORS.push(`${fileName}: Missing language block: "${lang}"`);
    }
  });

  // Check 3: Verify renderSlide function exists
  if (!content.includes('function renderSlide(slide)')) {
    ERRORS.push(`${fileName}: renderSlide function not found`);
  }

  // Check 4: Verify critical slide types are handled (title, list, table required)
  const criticalSlideTypes = ['title', 'list'];
  const renderMatch = content.match(/function renderSlide\(slide\) {([\s\S]*?)return `<div class="slide/);

  if (renderMatch) {
    const renderBody = renderMatch[1];
    criticalSlideTypes.forEach(type => {
      if (!renderBody.includes(`case '${type}':`)) {
        ERRORS.push(`${fileName}: Critical slide type "${type}" not handled in renderSlide`);
      }
    });
  }

  // Check 5: Verify header and controls HTML exist
  if (!content.includes('id="header-title"')) {
    ERRORS.push(`${fileName}: Missing header-title element`);
  }

  if (!content.includes('id="slides-container"')) {
    ERRORS.push(`${fileName}: Missing slides-container element`);
  }

  if (!content.includes('id="prevBtn"') || !content.includes('id="nextBtn"')) {
    ERRORS.push(`${fileName}: Missing navigation buttons`);
  }

  // Check 6: Verify at least some slides exist per language
  requiredLanguages.forEach(lang => {
    // Extract just the slides array for this language
    const langMatch = content.match(new RegExp(`${lang}: {[\\s\\S]*?slides: \\[([\\s\\S]*?)\\]\\s*}[,}]`));
    if (langMatch) {
      const slidesContent = langMatch[1];
      // Count opening braces for slide objects - very basic check
      const slideCount = (slidesContent.match(/type:/g) || []).length;
      if (slideCount < 2) {
        ERRORS.push(`${fileName}: Language "${lang}" has fewer than 2 slides - presentation may not work`);
      }
    }
  });

  // Check 8: Verify CSS @page rules exist
  if (!content.includes('@page {')) {
    WARNINGS.push(`${fileName}: Missing @page CSS rule (needed for print)`);
  }

  // Check 9: Verify print event handlers
  if (!content.includes('beforeprint') || !content.includes('afterprint')) {
    WARNINGS.push(`${fileName}: Missing print event handlers (print-to-PDF may not work)`);
  }
}

function main() {
  if (!fs.existsSync(PRESENTATIONS_DIR)) {
    console.log('✓ No presentations directory found - skipping validation');
    process.exit(0);
  }

  const files = fs.readdirSync(PRESENTATIONS_DIR)
    .filter(f => f.endsWith('.html'))
    .map(f => path.join(PRESENTATIONS_DIR, f));

  console.log(`\n📋 Validating ${files.length} presentation files...\n`);

  files.forEach(validatePresentationFile);

  if (ERRORS.length > 0) {
    console.error(`\n❌ ERRORS (${ERRORS.length}):\n`);
    ERRORS.forEach(e => console.error(`   ${e}`));
  }

  if (WARNINGS.length > 0) {
    console.warn(`\n⚠️  WARNINGS (${WARNINGS.length}):\n`);
    WARNINGS.forEach(w => console.warn(`   ${w}`));
  }

  if (ERRORS.length === 0 && WARNINGS.length === 0) {
    console.log('✅ All presentation files are valid!\n');
  }

  if (ERRORS.length > 0) {
    process.exit(1);
  }

  process.exit(0);
}

main();
