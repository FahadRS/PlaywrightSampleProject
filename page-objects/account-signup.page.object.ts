import { Driver } from "../Driver";

export class  AccountSignUpPage {

  public static txtDomainField = '[data-e2e-input="domainField"]';
  public static txtOrganizationField = '[data-e2e-input="organizationName"]';
  public static txtTenantNameField = '[data-e2e-input="tenantName"]';
  public static txtFirstNameField = '[data-e2e-input="firstName"]';
  public static txtLastNameField = '[data-e2e-input="lastName"]';
  public static txtEmailAddress = '[data-e2e-input="emailAddress"]';
  public static txtPasswordField = '[data-e2e-input="password"]';
  public static txtConfirmPasswordField = '[data-e2e-input="confirmPassword"]';
  public static checkConfirm = '[data-e2e-input="isServiceTermsAccepted"]';
  public static btnSignUp = '[data-e2e-btn="accountSignupCreateAccount"]';
  public static lblDomainField = '[data-e2e-span="portalBaseDomain"]';
  public static chkIsSSLEnabled = '[data-e2e-input="isSSLEnabled"]';

  public static async typeDomain(domain: string) : Promise<void> {      
    await Driver.fill(this.txtDomainField,domain);
  }

  public static async typeOrgnaizationName(orgnaizationName : string) : Promise<void> {      
     await Driver.fill(this.txtOrganizationField,orgnaizationName);
  }

  public static async typeTenantName(tenantName : string) : Promise<void> {      
   await Driver.fill(this.txtTenantNameField,tenantName);
  }

  public static async typeFirstName(firstName : string) : Promise<void> {      
     await Driver.fill(this.txtFirstNameField,firstName);
  }

  public static async typeLastName(lastName: string) : Promise<void> {      
     await Driver.fill(this.txtLastNameField,lastName);
  }

  public static async typeEmailAddress(emailAddress : string) : Promise<void> {      
     await Driver.fill(this.txtEmailAddress,emailAddress);
  }

  public static async typePassword(password : string) : Promise<void> {      
     await Driver.fill(this.txtPasswordField,password);
  }

  public static async typeConfirmPassword(confirmPassword : string) : Promise<void> {      
     await Driver.fill(this.txtConfirmPasswordField,confirmPassword);
  }

  public static async checkConfirmation() : Promise<void> {      
    await Driver.check(this.checkConfirm);
  }
    
  public static async clickSignUpButton() : Promise<void> {      
    await Driver.click(this.btnSignUp);
  }

  public static async getDomain() : Promise<string> {      
   return Driver.getTextContent(this.lblDomainField);
  }

  public static async getIsSSLEnabled() : Promise<boolean> {      
   return Driver.isChecked(this.chkIsSSLEnabled);
  }    
}

