#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const presentationsDir = path.join(__dirname, '..', 'public', 'presentations');

const mobileCSS = `
    @media (max-width: 640px) {
      .slide { padding: 20px 16px; }
      .slide h1 { font-size: clamp(20px, 5.5vw, 28px); }
      .slide h2 { font-size: clamp(16px, 4.5vw, 22px); }
      .slide p { font-size: 14px; margin-bottom: 10px; }
      .slide ul { font-size: 1em; margin: 10px 0; }
      .slide ul li { margin-bottom: 8px; }
      .slide table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; font-size: 0.85em; }
      .slide table th, .slide table td { padding: 6px 8px; white-space: nowrap; }
      .header { padding: 10px 12px; }
      .header-left span { font-size: 12px; max-width: 110px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .header-links { gap: 8px; font-size: 11px; }
      .subtitle { font-size: 14px; }
      .logo { height: 24px; margin-bottom: 12px; }
      .controls { padding: 10px 12px; }
      .controls button { padding: 6px 12px; font-size: 12px; }
    }`;

async function fixPresentations() {
  try {
    const files = fs.readdirSync(presentationsDir).filter(f => f.endsWith('-static.html'));

    let patched = 0;
    let skipped = 0;

    files.forEach(file => {
      const filePath = path.join(presentationsDir, file);
      let content = fs.readFileSync(filePath, 'utf-8');

      // Check if already patched
      if (content.includes('@media (max-width: 640px)')) {
        skipped++;
        return;
      }

      // Insert mobile CSS before @media print, or before </style> if no print media
      const printIndex = content.indexOf('@media print {');
      const styleIndex = content.indexOf('</style>');

      let insertIndex;
      if (printIndex !== -1) {
        insertIndex = printIndex;
      } else if (styleIndex !== -1) {
        insertIndex = styleIndex;
      } else {
        console.warn(`⚠️  Skipped ${file} — no @media print or </style> found`);
        return;
      }

      const newContent = content.slice(0, insertIndex) + mobileCSS + '\n\n    ' + content.slice(insertIndex);
      fs.writeFileSync(filePath, newContent, 'utf-8');

      patched++;
      console.log(`✓ ${file}`);
    });

    console.log(`\n✅ Patched: ${patched}, Skipped (already patched): ${skipped}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

fixPresentations();
