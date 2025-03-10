

const {test,expect} = require ('@playwright/test');
test ( 'locaters', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html'); // click on the login button- by property 
                                                                //await page.locator('id= login2').click();// this will perform the click action on that element 

    await page.click('#login2');//approach 2 . we can use any of these

                                                                    //provide username -css

                                                                    // await page.locater('#loginusername').fill("Raichel");
                                                                    // await page.fill('#loginusername','Raichel');
       await page.fill('#loginusername','Raichel');

       //provide password 

       await page.fill('#loginpassword','test@123');

       //click on login button 

       await page.click("//button[normalize-space()='Log in']")

       //verifying logout link presence 

       const logoutlink = await page.locator("//a[normalize-space()='Log out']");

       await expect (logoutlink).toBeVisible();

       await page.close();



})
