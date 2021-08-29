import { TestContext } from "../models/test-context";
import { FileService } from "./file.service";

export class ContextService {

    public static context : TestContext = new TestContext();

    public static set tenantSubDomain(tenantDomain : string){
        this.context.tenantSubDomain = tenantDomain;
    }    
    public static get tenantSubDomain() : string {
        return this.context.tenantSubDomain;
    }

    public static set userEmailAddress(userEmailAddress : string){
        this.context.userEmailAddress = userEmailAddress;
    }    
    public static get userEmailAddress() : string {
        return this.context.userEmailAddress;
    }

    public static set userPassword(userPassword : string){
        this.context.userPassword = userPassword;
    }    
    public static get userPassword() : string {
        return this.context.userPassword;
    }

    public static async loadContext() {
        
        let context = await FileService.readJson("./context.json");
        if (context != null){
            this.context = context;
        }
    }

    public static async saveContext(){
        await FileService.writeJson("./context.json", this.context);
    }
}