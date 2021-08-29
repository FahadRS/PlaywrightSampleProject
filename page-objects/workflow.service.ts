import { Driver } from "../Driver";
import { test } from "../test";

export class  WorkflowService {


    public static async increaseTimeOut(){
         await Driver.setTimeout(40);
         await Driver.sleep(10);
         await Driver.resetTimeOut();
         
    }
 
}

