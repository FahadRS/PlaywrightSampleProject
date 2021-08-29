import { Driver } from "../../Driver";
import { WorkflowService } from "../../page-objects/workflow.service";
import { test } from "../../test";

     
test.describe('two tests', () => {

    test('should login', async  ({ page }) => {

        await Driver.goto("https://redaction.beta.vidizmo.com");
      
      
        
       await Driver.fill("#Password","Admin@123");     
        //await Driver.click('#Signin');
        for ( let i=0; i< 2; i++ ){
            try{
                console.log("main called called");
                await Driver.waitForSelector('[data-e2e-userprofileid="579661"]');
            }
            catch(error){
                console.log("exception called");

            }
           // performance
        }

        await WorkflowService.returnPromise();

        
        await Driver.fill("#EmailAddress","reaction@sharklasers.com");
        await page.context().storageState({ path: 'state.json' });
        // await Driver.swithToNewBrowser();
        // await Driver.goto("https://playwright.dev");
        // await Driver.goto("https://playwright.dev");
        // await Driver.switchToDefaultBrowser();
        // await Driver.goto("https://playwright.dev");
        // await Driver.swithToNewBrowser();
        // await Driver.goto("https://playwright.dev");
        // await Driver.goto("https://https://google.com");
        // await Driver.exitNewBrowser();
        //await Driver.goto("https://playwright.dev");    
    });

    // test('twoww', async  ({ page }) => {
    //     await Driver.goto("https://playwright.dev");
    //     await Driver.goto("https://lexcorp.enterprisetube.com");    
    // });

    //  test('login', async  ({ storageState }) => {

    //  });

})
    
    
    