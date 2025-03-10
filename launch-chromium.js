const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  console.log('Chromium is launched!');
  await browser.close();
})();
