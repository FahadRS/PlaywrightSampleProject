import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  reporter: [ ['junit'] , [ 'list' ]  ],
 timeout : 60000,
 globalSetup : require.resolve('./global-setup'),
 globalTeardown : require.resolve('./global-teardown'),
 workers : 1,
 projects : [
   {
     name : "accountSignUp",
     testDir : "./tests/signup",
     
   },
   {
    name : "login",
    testDir : "./tests/login",
  }
 ], 
  use: {
    // Browser options
    browserName : "chromium",
    acceptDownloads : true,
    headless: false,
    
    //launchOptions : {
    // executablePath :  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    //},
    // Context options
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    
    
    // Artifacts    
    //screenshot: 'on',
    //video: 'on',
    //trace : "on",
    
    
  },
};
export default config;
