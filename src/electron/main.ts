import {app,BrowserWindow} from "electron";
import path from 'path';
import {isDev} from "./util.js";

type test  = string;

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    if (isDev())
    {
        //allows for hot reloading
        //dont need to rebuild frontend and restart electron app when working on frontend code
        //only need to restart when working on electron code
        mainWindow.loadURL("http://localhost:5123");
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }

})