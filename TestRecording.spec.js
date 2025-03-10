/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.locator('#loginusername').fill('Raichel');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Ensure the page is fully loaded
  await page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });

  // Wait for the login username input field to be visible and interactable
  const usernameField = page.locator('#loginusername');
  await usernameField.waitFor({ state: 'visible' });  // Ensure it is visible

  // Fill in the username
  await usernameField.fill('Raichel');

  // Wait for the password field to be visible and interactable
  const passwordField = page.locator('#loginpassword');
  await passwordField.waitFor({ state: 'visible' });  // Ensure it is visible

  // Fill in the password
  await passwordField.fill('test@123');

  // Wait for the login button and click it
  await page.getByRole('button', { name: 'Log in' }).click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Ensure the page is fully loaded
  await page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });

  // Wait for the login username input field to be attached to the DOM and visible
  const usernameField = page.locator('#loginusername');
  await usernameField.waitFor({ state: 'visible', timeout: 60000 });  // Increase timeout to 60 seconds

  // Fill in the username
  await usernameField.fill('Raichel');

  // Wait for the password field to be visible and interactable
  const passwordField = page.locator('#loginpassword');
  await passwordField.waitFor({ state: 'visible', timeout: 60000 });  // Increase timeout to 60 seconds

  // Fill in the password
  await passwordField.fill('test@123');

  // Wait for the login button and click it
  await page.getByRole('button', { name: 'Log in' }).click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Raichel');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });

  // Wait for the username field to be visible and interactable
  const usernameField = page.locator('#loginusername');
  await usernameField.waitFor({ state: 'visible', timeout: 60000 });  // Wait for up to 60 seconds

  // Scroll the element into view if needed
  await usernameField.scrollIntoViewIfNeeded();

  // Click the username field and perform actions
  await usernameField.click();
  await usernameField.press('CapsLock');
  await usernameField.fill('Raichel');

  // Wait for the password field to be visible and interactable
  const passwordField = page.locator('#loginpassword');
  await passwordField.waitFor({ state: 'visible', timeout: 60000 });

  // Fill in the password field
  await passwordField.fill('test@123');

  // Wait for the login button to be visible and click it
  const loginButton = page.getByRole('button', { name: 'Log in' });
  await loginButton.waitFor({ state: 'visible', timeout: 60000 });
  await loginButton.click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });

  // Wait for the username field to be visible and interactable (increased timeout)
  const usernameField = page.locator('#loginusername');
  await usernameField.waitFor({ state: 'visible', timeout: 90000 });  // Wait for up to 90 seconds

  // Scroll the element into view if needed
  await usernameField.scrollIntoViewIfNeeded();

  // Click and fill username
  await usernameField.click();
  await usernameField.fill('Raichel');

  // Wait for the password field to be visible and interactable
  const passwordField = page.locator('#loginpassword');
  await passwordField.waitFor({ state: 'visible', timeout: 90000 });

  // Fill in the password field
  await passwordField.fill('test@123');

  // Wait for the login button to be visible and click it
  const loginButton = page.getByRole('button', { name: 'Log in' });
  await loginButton.waitFor({ state: 'visible', timeout: 90000 });
  await loginButton.click();
});*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  console.log('Navigating to the page...');
  await page.goto('https://www.demoblaze.com/');
  
  // Check for overlay and dismiss if any
  const overlay = page.locator('.modal-backdrop'); // Adjust this based on the overlay class if needed
  if (await overlay.isVisible()) {
    console.log('Closing overlay...');
    await overlay.click(); // Dismiss the overlay
  }

  // Wait for the username field to be visible and ready
  console.log('Waiting for username field...');
  await page.waitForSelector('#loginusername', { state: 'visible', timeout: 90000 });

  // Scroll the element into view and fill the username
  const usernameField = page.locator('#loginusername');
  await usernameField.scrollIntoViewIfNeeded();
  console.log('Filling in username...');
  await usernameField.fill('Raichel');

  // Wait for the password field to be visible and fill the password
  console.log('Waiting for password field...');
  const passwordField = page.locator('#loginpassword');
  await passwordField.waitFor({ state: 'visible', timeout: 90000 });
  console.log('Filling in password...');
  await passwordField.fill('test@123');

  // Wait for the login button and click it
  console.log('Clicking the login button...');
  const loginButton = page.getByRole('button', { name: 'Log in' });
  await loginButton.waitFor({ state: 'visible', timeout: 90000 });
  await loginButton.click();
});

