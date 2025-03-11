
/*selectOption({ label: 'India' });" this is the function for drop down"
scrollIntoViewIfNeeded();// if the view is not visible 

//Approach 1

import { test,expect } from "@playwright/test";
test('dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //multiple ways to select option from the dropdown 
    await page.locator('#country').selectOption({label:'India'});
    await page.waitForTimeout(10000);
            //Label: This should match the visible text of the option, e.g., France.

// Value: This should match the value attribute of the option, e.g., france.   
});

Approach 2
/*import { test, expect } from "@playwright/test";

test('dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate the dropdown
  const dropdown = page.locator('#country');

  // Scroll to the dropdown to make it visible
  await dropdown.scrollIntoViewIfNeeded();

  // Select the option with visible text 'India'
  await dropdown.selectOption({ value: 'india' });

  await page.waitForTimeout(10000);

  // Label: This should match the visible text of the option, e.g., France.
  // Value: This should match the value attribute of the option, e.g., france.
});*/


/*import { test, expect } from "@playwright/test";

test('dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate the dropdown
  const dropdown = page.locator('#country');

  // Scroll to the dropdown to make it visible
  await dropdown.scrollIntoViewIfNeeded();

  // Select the option with visible text 'India'
  await dropdown.selectOption({ index: 8 });

  await page.waitForTimeout(5000);
});

// approch 2 

//await page selectOption('#country','India');//by text */

//assertion to apply for this 

//check the number of options in dropdown - Appraoch 1 


/*import { test, expect } from "@playwright/test";

test('dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

const options= await page.locator('#country option')

 // Get the number of options
 const optionsCount = await options.count();
 console.log('Number of options:', optionsCount);

// Print the text content of each option
for (let i = 0; i < optionsCount; i++) {
  const optionText = await options.nth(i).textContent();
  console.log(`Option ${i + 1}:`, optionText);

  //await expect(options).toHaveCount(10);

await page.waitForTimeout(5000);

});*/
// checking the number of options in the dropdown approach 1 
/*import { test, expect } from "@playwright/test";

test('dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  /*const options = await page.locator('#country option');*/

  // Get the number of options
  /*const optionsCount = await options.count();
  console.log('Number of options:', optionsCount);

  // Print the text content of each option
  for (let i = 0; i < optionsCount; i++) {
    const optionText = await options.nth(i).textContent(); // i am trying to learn what is the out put of the " const options = await page.locator('#country option');"
    console.log(`Option ${i + 1}:`, optionText);
  }

  await page.waitForTimeout(5000);
});*/

//check the number of options in the list =Approach 2
// Next approch // $$ will return element in the form of an array 
/*const options = await page.$$('#Country option') 

// console.log("Number of options:", options.length)
// applying assertions 
await expect(options.length).toBe(10);

await page.waitForTimeout(5000);

});*/

// 
/*import { test, expect } from "@playwright/test";

test('dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Wait for the dropdown to be visible
  await page.waitForSelector('#country');
  
  // Get the dropdown options
  const options = await page.$$('#country option');

  // Apply assertions
  await expect(options.length).toBe(10);
});*/

3 // check the presence of value in the dropdown - appraoch // for example to check whether the india is present in the  options 

import { test, expect } from "@playwright/test";

test('dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

const content = await page.locator ('#country').textContent()
await expect(content. includes('xyz')).toBeTruthy();

});


