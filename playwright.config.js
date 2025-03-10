
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000, // Increase global timeout to 60 seconds
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  workers: 4, // Run tests using 4 workers in parallel
  // Other configurations...
});
