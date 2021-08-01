import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  reporter: [ ['junit', { outputFile: 'results.xml' }] ],
 workers : 2,
 testDir : "./tests",
 
  use: {
    // Browser options
    headless: false,
    
    
    launchOptions : {
     executablePath :  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
     
     
    },
    // Context options
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    
    // Artifacts
    
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
    
    
  },
};
export default config;
