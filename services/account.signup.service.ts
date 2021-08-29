import { Driver } from "../Driver";
import { AccountSignUpPage } from "../page-objects/account-signup.page.object";
import { CommonPO } from "../page-objects/common.page.object";
import { ContextService } from "./context.service";
import { FileService } from "./file.service";
import { HelperService } from "./helper.service";
import { NavigationService } from "./navigation.service";

export class  AccountSignUpService {

    public static async signup() : Promise<void> {
        
         let tenantSubDomain  = HelperService.randDomString().toLowerCase();
         let tenantOrganization = HelperService.randDomString();
         let firstName = HelperService.randDomString();
         let lastName = HelperService.randDomString();
         let email = HelperService.randDomString() + "@sharklasers.com";
         let password = HelperService.randDomString();

         await NavigationService.launchSignURL();         
         await AccountSignUpPage.typeDomain(tenantSubDomain);
         await AccountSignUpPage.typeTenantName(tenantOrganization);
         await AccountSignUpPage.typeOrgnaizationName(tenantOrganization);
         await AccountSignUpPage.typeFirstName(firstName);
         await AccountSignUpPage.typeLastName(lastName);
         await AccountSignUpPage.typeEmailAddress(email);
         await AccountSignUpPage.typePassword(password);
         await AccountSignUpPage.typeConfirmPassword(password);
         await AccountSignUpPage.checkConfirmation();
         let isSSLEnabled = await AccountSignUpPage.getIsSSLEnabled();
         let domain = await AccountSignUpPage.getDomain();
         await Driver.sleep(20);
         await AccountSignUpPage.clickSignUpButton();
         await CommonPO.waitForToast();

         let fullDomain : string = "";
         if (isSSLEnabled){
             fullDomain = "https://";
         }
         else{
             fullDomain = "http://";
         }

         fullDomain  += tenantSubDomain +  domain;
         ContextService.tenantSubDomain = fullDomain;
         ContextService.userEmailAddress = email;
         ContextService.userPassword = password;
         
         await ContextService.saveContext();
         
    }    
}