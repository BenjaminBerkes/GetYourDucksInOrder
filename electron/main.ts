import { app, BrowserWindow, ipcMain } from 'electron';
//use BrowserWindow to modify and create the windows
//use app object to control the application lifecycle through events like 'ready', 'quit', and 'window-all-closed'
import { join, dirname } from 'node:path';
//use join to combine paths together into a single string
//use dirname to return the directory name of a file
import { fileURLToPath } from 'node:url';
//use fileURLToPath to turn a URL into a file path
const __filename = fileURLToPath(import.meta.url);
//use import.meta.url to get the url of the current file
const __dirname = dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      //sandbox: false,
      //nodeIntegration: true,
      contextIsolation: true,
      preload: join(__dirname, 'preload.mjs')
    },
    //minimizable: false,
    //maximizable: false,
    //closable: false,
    frame: false,
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
  })

  win.title = "Get Your Ducks In Order"

  win.setIcon('./public/Duck.png');
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(join(__dirname, '../dist/index.html'))
  }
  //win.removeMenu()
  //win.webContents.openDevTools()

  ipcMain.handle('CloseButton', () => { win.close() })
  ipcMain.handle('MaximizeButton', () => {
    if (win.isNormal()) { win.maximize() }
    else { win.unmaximize() }
  })
  ipcMain.handle('MinimizeButton', () => { win.minimize() })
  //use ipcMain.handle to catch a "message" that comes from the renderer/preload
  //the function for invoking is "defined" in preload then in renderer it
  //is called through a button
  //the console log is also using the main process not the browser console

}

app.whenReady().then(() => {
  createWindow()
})

