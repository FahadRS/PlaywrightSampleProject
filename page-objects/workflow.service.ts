import { Driver } from "../Driver";
import { test } from "../test";

export class  WorkflowService {

    public static async returnPromise() : Promise<void> {
        new Promise((resolve, reject) => {
            return reject("no time present");
        })
    }

    public static async increaseTimeOut() : Promise<void> {
         await Driver.setTimeout(40);
         await Driver.sleep(10);
         await Driver.resetTimeOut();
         
    }
 
}

