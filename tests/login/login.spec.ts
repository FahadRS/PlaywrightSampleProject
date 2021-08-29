import { Driver } from "../../Driver";
import { test } from "../../test";

     
test.describe('two tests', () => {

    test('should login', async  ({ page }) => {

        await Driver.goto("https://redaction.beta.vidizmo.com");
        await Driver.fill("#EmailAddress","reaction@sharklasers.com");
        await Driver.fill("#Passworddd","Admin@123");     
        //await Driver.click('#Signin');
        await Driver.waitForSelector('[data-e2e-userprofileid="579661"]');
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
    
    
    