import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = path.dirname(__filename$1);
const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      //sandbox: false,
      //nodeIntegration: true,
      //contextIsolation: true,
      preload: path.join(__dirname$1, "preload.mjs")
    },
    width: 1280,
    height: 720
    //resizable: false,
  });
  win.setIcon("./public/Duck.png");
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname$1, "../dist/index.html"));
  }
  win.webContents.insertCSS("html, body { overflow: hidden; }");
  win.webContents.openDevTools();
};
app.whenReady().then(() => {
  createWindow();
});
