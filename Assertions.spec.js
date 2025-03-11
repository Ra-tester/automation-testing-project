const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    'DNT': '1', // Do Not Track request header
    'Upgrade-Insecure-Requests': '1'
  });

  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

  await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

  // Wait for the email input to be visible
  await page.waitForSelector('input#Email', { state: 'visible' });

  // Find the email input element using a CSS selector
  const inputvalue = page.locator('input#Email');

  // Fill in the email input element
  await inputvalue.fill('test@demo.com');
  
  // Check if the input element has the expected value
  await expect(inputvalue).toHaveValue('test@demo.com');
}, { timeout: 120000 }); // Increase timeout to 120 seconds*/

import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

  // Wait for the email input to be visible
  await page.waitForSelector('#FirstName', { state: 'visible' });

  // Find the email input element using a CSS selector
  const inputvalue = page.locator('#FirstName');

  // Fill in the email input element
  await inputvalue.fill('Raichel');
  
  // Check if the input element has the expected value
  await expect(inputvalue).toHaveValue('Raichel');
}, { timeout: 120000 }); // Increase timeout to 120 seconds*/


import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

  // Wait for the first name input field to be visible
  await page.waitForSelector('#FirstName', { state: 'visible' });

  // Find the first name input element
  const firstNameInput = page.locator('#FirstName');

  // Fill in the first name input field
  await firstNameInput.fill('Raichel');
  
  // Check if the input field has the expected value
  await expect(firstNameInput).toHaveValue('Raichel');
},{ timeout: 120000 }); // Increase timeout to 120 seconds*/

import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

  // Find the first name input element
  const firstNameInput = page.locator('#FirstName');

  // Wait for the first name input field to be visible (this is implicitly handled by locators)
  await firstNameInput.waitFor({ state: 'visible' });

  // Fill in the first name input field
  await firstNameInput.fill('Raichel');
  
  // Check if the input field has the expected value
  await expect(firstNameInput).toHaveValue('Raichel');
},{ timeout: 120000 }); // Optional: you can adjust this timeout as needed*/

mport { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  // Navigate to the registration page and wait for the network to be idle
  await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

  // Wait for the first name input field to be visible (with increased timeout)
  await page.waitForSelector('#FirstName', { state: 'visible', timeout: 120000 });

  // Find the first name input element
  const firstNameInput = page.locator('#FirstName');

  // Fill in the first name input field
  await firstNameInput.fill('Raichel');
  
  // Check if the input field has the expected value
  await expect(firstNameInput).toHaveValue('Raichel');
},{ timeout: 120000 }); // Optional: you can adjust this timeout as needed*/

import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  try {
    console.log('Navigating to the registration page...');
    await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

    console.log('Waiting for the first name input field to be visible...');
    await page.waitForSelector('#FirstName', { state: 'visible', timeout: 180000 });

    const firstNameInput = page.locator('#FirstName');
    console.log('Filling in the first name input field...');
    await firstNameInput.fill('Raichel');
    
    console.log('Checking if the input field has the expected value...');
    await expect(firstNameInput).toHaveValue('Raichel');
    
    console.log('Test passed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}, { timeout: 180000 });*/

import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  try {
    await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

    // Check if another element exists
    console.log('Checking for the Register button...');
    const registerButton = await page.$('button[type="submit"]');
    if (!registerButton) {
      throw new Error('The Register button does not exist in the DOM.');
    }

    // Log to confirm the element is found
    console.log('The Register button was found. Verifying first name input next...');

    // Wait for the first name input field to be visible
    await page.waitForSelector('#FirstName', { state: 'visible', timeout: 180000 });

    const firstNameInput = page.locator('#FirstName');
    console.log('Filling in the first name input field...');
    await firstNameInput.fill('Raichel');
    
    console.log('Checking if the input field has the expected value...');
    await expect(firstNameInput).toHaveValue('Raichel');
    
    console.log('Test passed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}, { timeout: 180000 });*/
import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  try {
    await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

    // Check for another element (Register button)
    console.log('Checking for the Register button...');
    const registerButton = await page.$('button[type="submit"]');
    if (!registerButton) {
      throw new Error('The Register button does not exist in the DOM.');
    }

    console.log('The Register button was found. Verifying first name input next...');

    // Try using a different selector for the first name input field
    console.log('Waiting for the first name input field to be visible...');
    await page.waitForSelector('input[name="FirstName"]', { state: 'visible', timeout: 180000 });

    const firstNameInput = page.locator('input[name="FirstName"]');
    console.log('Filling in the first name input field...');
    await firstNameInput.fill('Raichel');
    
    console.log('Checking if the input field has the expected value...');
    await expect(firstNameInput).toHaveValue('Raichel');
    
    console.log('Test passed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}, { timeout: 180000 });*/

import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  try {
    await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

    console.log('Checking for the Register button...');
    const registerButton = await page.$('button[type="submit"]');
    if (!registerButton) {
      throw new Error('The Register button does not exist in the DOM.');
    }

    console.log('The Register button was found. Verifying first name input next...');
    
    // Adding delay to account for dynamic content
    await page.waitForTimeout(5000); // Wait for 5 seconds

    // Check if the first name input field exists and is visible
    const isVisible = await page.evaluate(() => {
      const input = document.querySelector('#FirstName');
      return input !== null && input.offsetParent !== null;
    });

    if (!isVisible) {
      throw new Error('The first name input field is not visible in the DOM.');
    }

    console.log('Waiting for the first name input field to be visible...');
    await page.waitForSelector('#FirstName', { state: 'visible', timeout: 180000 });

    const firstNameInput = page.locator('#FirstName');
    console.log('Filling in the first name input field...');
    await firstNameInput.fill('Raichel');
    
    console.log('Checking if the input field has the expected value...');
    await expect(firstNameInput).toHaveValue('Raichel');
    
    console.log('Test passed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}, { timeout: 180000 });*/
import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  try {
    await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });
    // Adding delay to account for dynamic content
    await page.waitForTimeout(5000); // Wait for 5 seconds
    // Check if the first name input field exists and is visible
    const isVisible = await page.evaluate(() => {
      const input = document.querySelector('#FirstName');
      return input !== null && input.offsetParent !== null;
    });

    if (!isVisible) {
      throw new Error('The first name input field is not visible in the DOM.');
    }

    console.log('Waiting for the first name input field to be visible...');
    await page.waitForSelector('#FirstName', { state: 'visible', timeout: 180000 });

    const firstNameInput = page.locator('#FirstName');
    console.log('Filling in the first name input field...');
    await firstNameInput.fill('Raichel');
    
    console.log('Checking if the input field has the expected value...');
    await expect(firstNameInput).toHaveValue('Raichel');
    
    console.log('Test passed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}, { timeout: 180000 });



/*End-to-End Workflow:
Setup Playwright Test:

First, you write a test script using Playwright. This script tells Playwright what actions to perform on the webpage.

Start the Test:

When you run the test script, Playwright starts a browser instance and creates a new page (tab) where it will perform the actions.

Navigate to the Webpage:

The script includes a command to navigate to a specific URL. Playwright opens the page and waits until it is fully loaded.

await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });

This command tells Playwright to go to the specified URL and wait until the network is idle (meaning no more network requests are happening).

Add a Delay:

The script includes a delay to make sure all dynamic content on the page has had enough time to load.

javascript
await page.waitForTimeout(5000); // Wait for 5 seconds
Check for Element's Existence and Visibility:

The script runs a command to check if a specific element (like the #FirstName input field) exists and is visible on the page.

javascript
const isVisible = await page.evaluate(() => {
  const input = document.querySelector('#FirstName');
  return input !== null && input.offsetParent !== null;
});
This part runs JavaScript code directly in the browser's context to find the element and check its visibility.

Throw Error if Element is Not Found:

If the element is not found or is hidden, the script throws an error and stops the test.

javascript
if (!isVisible) {
  throw new Error('The first name input field is not visible in the DOM.');
}
Wait for Element to be Visible:

The script waits for the element to become visible on the page before proceeding.

javascript
await page.waitForSelector('#FirstName', { state: 'visible', timeout: 180000 });
Interact with the Element:

Once the element is confirmed to be visible, the script interacts with it. In this case, it fills the input field with a value.

javascript
const firstNameInput = page.locator('#FirstName');
await firstNameInput.fill('Raichel');
Verify the Element's Value:

After filling the input field, the script checks if the input field has the expected value.

javascript
await expect(firstNameInput).toHaveValue('Raichel');
Log Success or Failure:

If all steps are successful, the script logs a success message. If any step fails, it catches the error and logs a failure message.

javascript
console.log('Test passed successfully!');
} catch (error) {
console.error('Test failed:', error);
}
Simplified Summary:
Write the Test: Define what actions to perform.

Start the Test: Playwright opens a browser and a new tab.

Navigate to Webpage: Go to the specified URL.

Wait for Page Load: Ensure the page is fully loaded.

Check Element: Verify if the element exists and is visible.

Wait for Element: Wait until the element is visible.

Interact with Element: Perform actions like filling an input field.

Verify Actions: Check if the actions had the expected results.

Log Results: Log success or catch and log errors.





    

                                                
