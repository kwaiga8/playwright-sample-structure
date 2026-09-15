import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test-scenarios',
  testMatch: '**/*.e2e.ts',
  fullyParallel: true, // Run tests in parallel

  reporter: [['html'], ['list'], ['junit', { outputFile: 'results.xml' }]],

  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry', // Best debugging feature: captures trace on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
