import { Browser, BrowserContextOptions, errors, Page, ViewportSize } from "@playwright/test";
import { EventType } from "./models/test-context";
import config from "./playwright.config";

export class  Driver {

  static pages : Page[] = [];
  static browser : Browser;
  static viewPort : ViewportSize;
  static contextOptions : BrowserContextOptions;

  /* active page which is currently present on the screen */
  static activePageIndex : number = 0;

  static async swithToNewBrowser(){  

    if (this.pages.length <= 1){      

        // get the view port from the configuration to use
        let viewPort = config.use.viewport as ViewportSize;      
        const userContext = await Driver.browser.newContext({ viewport : viewPort });
        let page = await userContext.newPage();
        this.pages.push(page);
    }

    this.activePageIndex = 1;
  }

  static switchToDefaultBrowser(){  
    Driver.activePageIndex = 0;
  }

  static async exitNewBrowser(){  
    await this.getPage().close();
    Driver.activePageIndex = 0;
    this.pages.pop();
  }

  static async goto(url : string) {     
    await Driver.getPage().goto(url);
  }

  static async click(selector : string) {      
    await Driver.getPage().click(selector);
  }

  static async waitForSelector(selector : string) {      
    await Driver.getPage().waitForSelector(selector);
  }

  static async fill(selector : string, value : string) {      
    await Driver.getPage().fill(selector, value);
  }

  static async check(selector : string) {      
    await Driver.getPage().check(selector);
  }

  static async waitForPresence(selector : string) {      
    await Driver.getPage().isVisible(selector);
  }

  static async waitForPresenceAny(selectors : string[]) { 
    let promises = [];
    for (let selector of selectors){
      promises.push(this.waitForVisibility(selector));
    }
    await Promise.race(promises);
  }

  static async waitForVisibility(selector : string) {      
    await Driver.getPage().isVisible(selector);
  }

  static async getTextContent(selector : string) : Promise<string> {
    return await this.getPage().textContent(selector);
  }

  static async isChecked(selector : string) : Promise<boolean> {
    return await this.getPage().isChecked(selector);
  }

  static getPage() : Page {
      return this.pages[this.activePageIndex];
  }
  
  static async sleep(sleepForSeconds : number) : Promise<void> {
    await this.getPage().waitForTimeout(sleepForSeconds * 1000);
  }

  static async setContent(htmlContent : string) : Promise<void> {
    await this.getPage().setContent(htmlContent);
  }
 
  static async downloadFile(fileUrl : string) : Promise<string> {
    await Driver.swithToNewBrowser();
    await Driver.setContent(`<a href="${fileUrl}">download</a>`);
    const [ download ] = await Promise.all([
      this.getPage().waitForEvent('download'),
       Driver.click('a')
    ]);

   return await download.path();
  }
}