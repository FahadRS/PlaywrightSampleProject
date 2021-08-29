// hello.ts
import { test as base  } from '@playwright/test';
import { Driver } from './Driver';
import { TestContext } from './models/test-context';
import { ContextService } from './services/context.service';
import { FileService } from './services/file.service';


let test = base.extend({
  page: async ({page, browser, viewport, contextOptions} , use) => {
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

