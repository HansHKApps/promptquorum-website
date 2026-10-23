// Playwright config for the first-screen test (tests/above-the-fold.spec.ts).
// Targets an already-running server; `npm run dev` is broken, so use a production build:
//   npm run build && npx next start --port 3000
//   npm run test:above-fold
// Against production: PQ_BASE_URL=https://www.promptquorum.com npm run test:above-fold
// The spec sets its own viewports (1024x768 and 375x812); this config only supplies the browser.

import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  testMatch: /above-the-fold\.spec\.ts/,
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  retries: 0,
  reporter: 'list',
  timeout: 60_000,
  use: {
    baseURL: process.env.PQ_BASE_URL ?? 'http://localhost:3000',
    ...devices['Desktop Chrome'],
    launchOptions: process.env.PQ_CHROMIUM_PATH ? { executablePath: process.env.PQ_CHROMIUM_PATH } : {},
  },
})
