// global-teardown.ts

import { ContextService } from "./services/context.service";
import { FileService } from "./services/file.service";

async function globalTeardown() {

  console.log("global tear down")
  let contextFile  ="./context.json";

  //let contextObj = JSON.parse(process.env.context);
  //await FileService.writeJson(contextFile,contextObj);
}
export default globalTeardown;