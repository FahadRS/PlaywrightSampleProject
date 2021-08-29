import { Driver } from "../Driver";


export class  NavigationService {

    public static async launchUrl(url : string) { 
        await Driver.goto(url);        
    }
    
    public static async launchSignURL(){
        await this.launchUrl("http://public.beta.us.vidizmo.com/account-signup/AFFY6DXQGJ7LLL5DCPKQEY3NPE");
    }
}