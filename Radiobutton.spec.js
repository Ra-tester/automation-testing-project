import { test, expect } from '@playwright/test';

test('radiobutton',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//input[@id='male']").check();// checking the male radio button 

    // now we are applying  aseertions to see whether the radio button is checked or not 

    await expect(page.locator("//input[@id='male']")).toBeChecked();

    //approach 2
    //await expect(page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    //handling female radio button : Female Radiobutton supposed to be disabled 

    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();
    // By adding await, you ensured that the isChecked() method resolves to a boolean value before the assertion. This correctly checks whether the female radio button is unchecked.

});


