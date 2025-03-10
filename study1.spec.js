const {test, expect} = require ('@playwright/test');

test('study1', async({page})=>{

    await page.goto('https://demoblaze.com/index.html');
    
    const pagetitle = await page.title();
    console.log('page tite is :', pagetitle);
    await expect (page).toHaveTitle('STORE');
    
    const pageURL = await page.url();
    console.log('page url is:', pageURL);
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    
    await page.close();

})