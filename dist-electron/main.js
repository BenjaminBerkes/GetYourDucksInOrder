import { app, BrowserWindow, ipcMain } from "electron";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = dirname(__filename$1);
const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      //sandbox: false,
      //nodeIntegration: true,
      contextIsolation: true,
      preload: join(__dirname$1, "preload.mjs")
    },
    //minimizable: false,
    //maximizable: false,
    //closable: false,
    frame: false,
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true
  });
  win.title = "Get Your Ducks In Order";
  win.setIcon("./public/Duck.png");
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(join(__dirname$1, "../dist/index.html"));
  }
  ipcMain.handle("CloseButton", () => {
    win.close();
  });
  ipcMain.handle("MaximizeButton", () => {
    if (win.isNormal()) {
      win.maximize();
    } else {
      win.unmaximize();
    }
  });
  ipcMain.handle("MinimizeButton", () => {
    win.minimize();
  });
};
app.whenReady().then(() => {
  createWindow();
});
