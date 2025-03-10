/*Iam gonna test a demo web app called demoblaze.com 
i am gonna checj few things in the app 
1) Title of the page is store or not(Title is just abouve the url)
2) Url is correctly open or not 
as soon as we create new file  we need to import required modules in our program */
/*in this step we are addding a module called @playwright/test and getiimg two packages 
getting two packages called test , and expect .. test =its for e=running test, expecet is for valoidation)*/

    const {test,expect } = require ('@playwright/test');

    //To start writing our test we need to create a test block //
    // we need to pass two parameters for the test , first one is test name and one anonymous function //
    //whenever we use anonmymous function will use fixte which provided in plawright 
    // in playwright whenever we automate one ppliaction pages will be represted with a fixture that is page ..so the page fixture is used in the anonymous function
    // fixture means which contains so many functions and command that why we use page  

    test ('Home page',async ({page})=>{

       await  page.goto ('https://demoblaze.com/index.html');// ope]ning the url using page.gto, async is using because java script is a 
                                                               // aynchronous programing language , it menas no steps is depends on other and each step will  execute parallay 
                                                               //but in utomation  each steps should execute after the previous steps .. to make to happen we use the keyword async
                                                               // so this async keyword will make the function return a promise and
                                                               // await keyword make the function wait for the promise 
                                                               //it ,eans once the page loaded page.goto command works 
                                                               // we are doing two tests here.. first i need to check the title of the webpage 
                                                               // and then i need to check the url of the web page 
        const pageTitle = await page.title();                        // this method will return the title of the page and  can store this i  the variale                       
        console.log('page title is :', pageTitle );
        await expect (page).toHaveTitle('STORE'); 
        
        const pageURL= page.url();// we have to validate the captured title, so we use the expect function 
        console.log('page url is:', pageURL);
        await expect(page).toHaveURL('https://demoblaze.com/index.html');
                                                                             //this is exactly the validation point 
        await page.close();                                                   // closing the page 
                                                                              // How to create and run the test case 

                                                                            /*npx playwright test // t run the entire test 
                                                                            npx playwright test testame // to run the specific test 
                                                                            npx playwright show -report // to show the etire report
                                                                            npx playwright test testname --project= chromium // to run the test in the specific browser 
                                                                            npx palywright test testname --project =chromium --headed// to run the test in headed mode ,it means it will open the web page and the run the test*/ 

   
        



    })


