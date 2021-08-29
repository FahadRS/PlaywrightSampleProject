import  { readJSON, pathExists, writeJSON, copyFile, pathExistsSync, rename } from 'fs-extra';
import { Driver } from '../Driver';

export class FileService {

    public static async fileExists(filePath : string) : Promise<boolean> {
       return  await pathExists(filePath);     
    }

    public static fileExistsSync(filePath : string) {
        return  pathExistsSync(filePath);     
     }

    public static async readJson(filePath : string) : Promise<any> {
        let fileExists = await this.fileExists(filePath);
        if (fileExists){
            return await readJSON(filePath);             
        }
        else{
            return null;
        }
    }
    
    public static async writeJson(filePath : string, jsonObject : any) : Promise<void> {
        await writeJSON(filePath, jsonObject);     
    }

    public static async copyFile(filePath : string, destination : string) : Promise<void> {
        await copyFile(filePath, destination);     
    }

    public static async renameFile(oldPath : string, newPath : string) : Promise<void> {
        await rename(oldPath, newPath);     
    }
}