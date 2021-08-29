
let outputFileName = "results.xml";
if (process.argv && process.argv.length > 0){
  let project = process.argv.find(a=> a.startsWith("--project"));
  if (project){
    outputFileName = "reports/" + project.split("=").pop() + ".xml"; 
  }  
 }  
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  reporter: [["line"], ['junit', { outputFile : outputFileName}]  ,],
 timeout : 30000,
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
    // actionTimeout : 5000,
    // navigationTimeout : 10000,
    
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
