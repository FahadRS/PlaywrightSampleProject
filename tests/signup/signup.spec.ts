import { Driver } from "../../Driver";
import { AccountSignUpService } from "../../services/account.signup.service";
import { ContextService } from "../../services/context.service";
import { FileService } from "../../services/file.service";
import { test } from "../../test";
//import { test } from "../../test";



//test.describe('two tests', () => {

  if (FileService.fileExistsSync("state.json")){
    test.use({ storageState: 'state.json' });
 }

  


    test('should upload file', async  ({ page }) => {

    
      
      await Driver.goto("https:/redaction.beta.vidizmo.com");
      
      if (!await FileService.fileExists("./test.mp4")){
        let downloadPath = await Driver.downloadFile("https://docs.google.com/uc?export=download&id=12m6Mfja-xiam6aOiXxEqLO-xzwrejnSS");
        await FileService.copyFile(downloadPath, "./test.mp4")
        await Driver.exitNewBrowser();
      }
      else{
        console.log("file already exists");
      }

   
      
      await Driver.goto("https://redaction.beta.vidizmo.com/media-manager/add-media/upload-video");
   //   await Driver.click('[data-e2e-link="uploadCtrl"]');



      const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('[data-e2e-link="uploadCtrl"]')
      ]);
    
  //    console.log("set files");
      await fileChooser.setFiles('./test.mp4');

      console.log("sleeping");
      await Driver.sleep(5);

       //await AccountSignUpService.signup();   
   //  console.log(ContextService.userEmailAddress);
    });
//})
    
    
    