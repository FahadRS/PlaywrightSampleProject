// example.spec.ts
import { test, expect } from '@playwright/test';


test.describe('two tests', () => {


test('testing', async ({ page, context, browser , launchOptions }) => {


  await context.tracing.start({ screenshots: true, snapshots: true });

  // Go to https://testaccount.enterprisetube.com/
  await page.goto('https://testaccount.enterprisetube.com/');

  await page.click('text=Sign In')

  await page.pause();

  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', 'fahad@sharklasers.com');

  // Press Tab
  await page.press('[placeholder="Email"]', 'Tab');

  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', 'Admin@123');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://testaccount.enterprisetube.com/home' }*/),
    page.press('[placeholder="Password"]', 'Enter')
  ]);

  await page.goto("https://testaccount.enterprisetube.com/media-manager/add-media/playlist/create");

  await page.waitForNavigation();

  await page.dragAndDrop('.ibox > .ibox-content > .item > [data-e2e-link="selectMashup81625"] > .overlay', 'mashup-drop > aside > .basket > .basket_list > .p-lg' );

//  await page.click('mashup-drop > aside > .basket > .basket_list > .p-lg')

await page.waitForTimeout(10000);

  // // Click [aria-label="Use the Enter key to use the Menu pane"]
  // await page.click('[aria-label="Use the Enter key to use the Menu pane"]');

  // // Click text=Control Panel
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'https://testaccount.enterprisetube.com/control-panel/security-policy' }*/),
  //   page.click('text=Control Panel')
  // ]);

  // // Click text=Workflows
  // await page.click('text=Workflows');
  // expect(page.url()).toBe('https://testaccount.enterprisetube.com/control-panel/workflow-queue?pageIndex=0');

  // // Click text=Workflow Queue From Date To Date Title Workflows Select Workflow State Select St >> span >> :nth-match(i, 2)
  // await page.click('text=Workflow Queue From Date To Date Title Workflows Select Workflow State Select St >> span >> :nth-match(i, 2)');

  // // Click input[role="combobox"]
  // await page.click('input[role="combobox"]');

  // // Click text=Add Content Checksum
  // await page.click('text=Add Content Checksum');

  // // Click main[role="main"] form div:has-text("Apply")
  // await page.click('main[role="main"] form div:has-text("Apply")');

  // // Click text=Apply
  // await page.click('text=Apply');
  // expect(page.url()).toBe('https://testaccount.enterprisetube.com/control-panel/workflow-queue?pageIndex=0');

  // // Click [aria-label="Use the Enter key to use the profile pane"]
  // await page.click('[aria-label="Use the Enter key to use the profile pane"]');

  // // Click text=Sign Out
  // await page.click('text=Sign Out');
  // expect(page.url()).toBe('https://testaccount.enterprisetube.com/home');

  // await context.tracing.stop({ path: 'trace.zip' });


});


test('test', async ({ page, context, browser , launchOptions }) => {

  
    // Go to http://testcase.beta.vidizmo.com/
    await page.goto('http://testcase.beta.vidizmo.com/');
  
  
    // Click text=Sign In
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://testcase.beta.vidizmo.com/login?returnUrl=%2Fhome' }*/),
      page.click('text=Sign In')
    ]);
  
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
  
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', 'testcase@sharklasers.com');
  
    // Press Tab
    await page.press('[placeholder="Email"]', 'Tab');
  
    // Fill [placeholder="Password"]
    await page.fill('[placeholder="Password"]', 'Admin@123');
  
    // Press Enter
    await page.press('[placeholder="Password"]', 'Enter');
  
    await page.waitForSelector('text=Fahad Rehman');


  
    // Click [aria-label="Use the Enter key to use the Menu pane"]
    // await page.click('[aria-label="Use the Enter key to use the Menu pane"]');
  
    // // Click [aria-label="Use the Enter key to use the Menu pane"] i
    // await page.click('[aria-label="Use the Enter key to use the Menu pane"] i');
  
    // // Click text=Media Manager
    // await Promise.all([cl
    //   page.waitForNavigation(/*{ url: 'http://testcase.beta.vidizmo.com/media-manager/published/thumb-view' }*/),
    //   page.click('text=Media Manager')
    // ]);
  
    // Go to http://testcase.beta.vidizmo.com/media-manager/published/thumb-view?orderBy=UpdatedDate&sortType=DESC&pageSize=24&pageIndex=1
    //await page.goto('http://testcase.beta.vidizmo.com/media-manager/published/thumb-view?orderBy=UpdatedDate&sortType=DESC&pageSize=24&pageIndex=1');

    await page.goto('http://testcase.beta.vidizmo.com/play/video/172160/EncryptionVideoTestCases');
  
    // Click img[alt="Encryption Video Test Cases"]
    // await Promise.all([
    //   page.waitForNavigation({ url: 'http://testcase.beta.vidizmo.com/play/video/172160/EncryptionVideoTestCases' }),
    //   page.click('img[alt="Encryption Video Test Cases"]')
    // ]);
  
    // Click button:has-text("Create New Annotation")
    await page.click('button:has-text("Create New Annotation")');

  //  await page.pause();
  //  debugger

//     await page.mouse.move(1,100);

       let canvas = await page.$("canvas");
       let boundingBox = canvas.boundingBox();
       let x =  (await boundingBox).x;
       let y =  (await boundingBox).y;

  
//     // Click canvas
     await page.click('canvas', { position : { x : 0,  y: 0 , } });

     await page.mouse.down();
     await page.mouse.move(300, 300);
     await page.mouse.up();

   // await page.waitForTimeout(100000);

    console.log("here");
  
    // Click textarea
    // await page.click('textarea', {});
  
    // Fill textarea
    await page.fill('textarea', 'fahad anoonations');
  
    // Click button:has-text("Create")
    await page.click('button:has-text("Create")');

    // Click text=Interactivity successfully added
    await page.click('text=Interactivity successfully added');
  
    // Click text=Fahad Rehman
    await page.click('text=Fahad Rehman');
  


  await browser.close();
})

});



