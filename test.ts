// hello.ts
import { test as base, TestFixture, TestInfo  } from '@playwright/test';
import { Driver } from './Driver';
import { ContextService } from './services/context.service';


let test = base.extend<{},TestInfo>({
  page: async ({page, browser, viewport, contextOptions} , use, testInfo) => {

    Driver.testInfo = testInfo;
    Driver.pages = [page];
    Driver.browser = browser;
    Driver.viewPort = viewport;
    Driver.contextOptions = contextOptions;

    // load the data from environment in the context serivce to be used in the
    await ContextService.loadContext();
        
    await use(page);

  }, 
  /*storageState: async ({}, use) => {
     const cookie = {};
     await use({ cookies: [cookie] });
  },*/
});

export { test };

