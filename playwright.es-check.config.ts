import { defineConfig, devices } from '@playwright/test'
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:3010' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
})
