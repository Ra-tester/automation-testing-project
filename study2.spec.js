
const{test,expect} = require('@playwright/test');

test('study2', async ({page})=>{

await page.goto('https://demoblaze.com/index.html');

const pagetitle= await page.title();
console.log( 'page title is :', pagetitle);
await expect(page).toHaveTitle('STORE');

const pageurl= await page.url();
console.log( 'page url is :', pageurl );
await expect (page).toHaveURL('https://demoblaze.com/index.html');

await page.close();

})

