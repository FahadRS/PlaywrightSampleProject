import { Driver } from "../Driver";

/* Used for the common Methods */
export class  CommonPO {

  public static successToast = ".toast-success";
  public static failureToast = ".toast-failure";  
    
  public static async waitForToast() : Promise<void> {      
    await Driver.waitForPresenceAny([this.successToast, this.failureToast]);
  }
}