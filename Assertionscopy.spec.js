/*it is used to perform validation in the webpage
await expect(page).toHaveURL()          :   Page has a URL
await expect(page).toHaveTitle()        :	Page has a title
await expect(locator).toBeVisible()     :	Element is visible
await expect(locator).toBeDisabled()    :	Element is disabled
await expect(locator).toBeChecked()     :	Checkbox is checked
await expect(locator).toHaveAttribute() :	Element has a DOM attribute
await expect(locator).toHaveText()      :   Element matches text
await expect(locator).toHaveValue()     :   Input has a value
await expect(locator).to HaveCount()    :   List of element has given length*/

    const {test,expect} = require ('@playwright/test')
    test ( 'Assertions', async ({page})=>{

        await page.goto('https://demo.nopcommerce.com/register') // click on the login button- by property 

    verify  Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register') ;

     Verify the page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //await expect(locator).toBeVisible()     :	Element is visible-- Trying to locate a logo element (just checking weather the elemet is visible or not)

    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible() 

element is enabled or disabled ( if the element is enabled only we can perorm set of actions )
// await expect(locator).toBeEnabled()    :	Element is Enabled

    const searchbox = await page.locator('.search-box.store-search-box');
    await expect(searchbox).toBeEnabled()

    // await expect(locator).toBeChecked()     :	Checkbox is checked
    
    // this is for radio button 
    const maleRadiobutton  = await page.locator('#gender-male');
    await maleRadiobutton.click() // to select radio button 
    await expect(maleRadiobutton).toBeChecked()

    // this is for check box 

    const newletterCheckbox = await page.locator('#Newsletter')
    await expect(newletterCheckbox).toBeChecked()

    //await expect(locator).toHaveAttribute() :	Element has a DOM attribute

    //There are different kinds of attribute for web elements 
    //id, class, type, value, name , href,src,alt,disbaled, checked ,

    const Registerattribute = await page.locator('#register-button')

    await expect(Registerattribute).toHaveAttribute('type','submit')

    //await expect(locator).toHaveText()      :   Element matches text
    
    const texttitle = await page.locator('.page-title h1')
    await expect(texttitle).toHaveText('Register')

    //await expect(locator).toContainText()	//Element contains text// in this we can pass the partial value of the ext 
    const Partialtext  = await page.locator('.page-title h1')
    await expect(Partialtext).toContainText('Reg')

    expect(locator).toHaveValue(value) :input has value 

     const inputvalue= page.locator('#Email')
     await inputvalue.fill('test@demo.com')
     await expect(inputvalue).toHaveValue('test@demo.com')


    const inputvalue = page.locator('//*[@id="Email"]');
    await inputvalue.waitFor({ state: 'visible' }); // Wait for the element to be visible
    await inputvalue.fill('test@demo.com');
    await expect(inputvalue).toHaveValue('test@demo.com');
    }, { timeout: 60000 }); // Increase timeout to 60 seconds


    const { test, expect } = require('@playwright/test');

    test('Assertions', async ({ page }) => {
      // Navigate to the registration page
      await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });
    
      // Wait for a few seconds to ensure the page loads completely
      await page.waitForTimeout(5000);
    
      // Find the email input element
      const inputvalue = page.locator('//*[@id="Email"]'); // Using a simple XPath locator
    
      // Fill in the email input element
      await inputvalue.fill('test@demo.com');
    
      // Check if the input element has the expected value
      await expect(inputvalue).toHaveValue('test@demo.com');
    }, { timeout: 120000 }); // Increase the timeout to 120 seconds*/

    const { test, expect } = require('@playwright/test');

    test('Assertions', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000); // Add a delay to ensure the page is fully loaded

  // Log page content for debugging
  const content = await page.content();
  console.log(content);

  // Use a simplified locator and wait for the element
  const inputvalue = page.locator('//*[@id="Email"]');
  await page.waitForSelector('//*[@id="Email"]', { state: 'visible' }); // Wait for selector to be visible
  
  await inputvalue.fill('test@demo.com');
  await expect(inputvalue).toHaveValue('test@demo.com');
}, { timeout: 120000 }); // Increase timeout to 120 seconds
