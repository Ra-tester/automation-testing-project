
import { test, expect } from "playwright/test";

test('Checkboxes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator("//input[@id='sunday']").check();// performing checking action 
await expect(await page.locator("//input[@id='sunday']")).toBeChecked();// applying assertions to check whether the box is checked or not
//appraoch 2 
//await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();

// applying a negative assertions

await expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();


//multiple check boxes 
const checkboxmultiple =[ "//input[@id='monday']",
                          "//input[@id='saturday']",
                          "//input[@id='thursday']"
];
for(const locator of checkboxmultiple)
{
    await page.locator(locator).check();

}
await page.waitForTimeout(5000);
//uncheck the multiple checkboxes which are alsredy selected 
for(const locator of checkboxmultiple)
    {
        if(await page. locator(locator).isChecked())
        await page.locator(locator).uncheck();
    
    }
                       
await page.waitForTimeout(5000);//pausing the code for sometime to see whats happening 

});