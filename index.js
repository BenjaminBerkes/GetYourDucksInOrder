const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        resizable: false
    })

    win.loadFile('index.html')
    win.removeMenu()
}

app.whenReady().then(() => {
    createWindow()
})