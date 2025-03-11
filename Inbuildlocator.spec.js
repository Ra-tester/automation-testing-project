/* Page.getByRole() to locate the explicit and implicit accesibility attributes
page.getByText() to locate by text content 
page.getBylabel() to locate a form control by associated label's text 
page.getByplaceholder() to locate an input by palceholder 
page.getByAltText() to locate an element, usually image, by itz text alternative
page.getByTitle() to locate an element by it's title attribute 
page.getByTestId() to locate an element based on it's data testid attribute*/


const {test,expect} = require('@playwright/test')
test ('multiplelwebements', async({page})=> {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

const logo = await page.getByAltText('company-branding')
await expect(logo).toBeVisible();

})*/

const {test,expect} = require('@playwright/test')
test ('placeholder', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('username').fill("Admin")
    await page.getByPlaceholder('password').fill("admin123")
    await page.getByRole('button',{ type: 'submit'}).click()


})*/

//getbytext 

