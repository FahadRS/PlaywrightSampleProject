// global-setup.ts
import { FileService } from "./services/file.service";

async function globalSetup() {
  let contextFile  ="./context.json";
  let contextFileExists = await FileService.fileExists(contextFile);
  let jsonContext :  string = "{}";
  if (contextFileExists){
    let jsonObject = JSON.stringify(await FileService.readJson(contextFile)); 
    jsonContext = jsonObject;
  } 

  process.env.context = jsonContext;
}
export default globalSetup;