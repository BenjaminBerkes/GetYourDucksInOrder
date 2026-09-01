const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720
        //resizable: false

    })

    win.loadFile('index.html')
    //win.removeMenu()
    win.webContents.insertCSS('html, body { overflow: hidden; }')

}

app.whenReady().then(() => {
    createWindow()
})