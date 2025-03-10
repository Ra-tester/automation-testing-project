import { test, expect } from '@playwright/test';
test('handleinputbox',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //input box -Name
    await expect(page.locator("//input[@id='name']")).toBeVisible();
    await expect(page.locator("//input[@id='name']")).toBeEmpty();
    await expect(page.locator("//input[@id='name']")).toBeEditable();
    await expect(page.locator("//input[@id='name']")).toBeEnabled();
    
    await page.locator("//input[@id='name']").fill("Raichel")
    await page.waitForTimeout(5000);//pausing code 

})