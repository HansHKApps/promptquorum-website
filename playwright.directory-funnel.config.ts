// Playwright config for the review-page directory funnel (popup) tests.
// Targets an already-running server; `npm run dev` is broken, so start one with
//   npx next dev --webpack --port 3433     (or `npx next start --port 3433` after a build)
// then: PQ_BASE_URL=http://localhost:3433 npx playwright test -c playwright.directory-funnel.config.ts

import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  testMatch: /(directory-(popup|deeplink)|review-funnel-page)\.spec\.ts/,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: 'list',
  timeout: 90_000,
  use: {
    baseURL: process.env.PQ_BASE_URL ?? 'http://localhost:3433',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
})
