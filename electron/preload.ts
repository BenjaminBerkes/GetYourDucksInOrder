// Preload (Isolated World)
import { contextBridge, ipcRenderer } from 'electron';
//use contextBridge to expose priviledged node/electron APIs to renderer
contextBridge.exposeInMainWorld('versions', {
  //use exposeInMainWorld to expose the api throught the apikey to the renderer
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('tester', {
  VariableTest: "Preload Variable Test Working",
  FunctionTest: () => { return "Preload Function Test Working" }
})
//every time you use contextBridge you are making a global object that can be used
contextBridge.exposeInMainWorld('TitleBarFunction', {
  close: () => ipcRenderer.invoke("CloseButton"),
  maximize: () => ipcRenderer.invoke("MaximizeButton"),
  minimize: () => ipcRenderer.invoke("MinimizeButton")
  //wrap ipcRend... in helper function otherwise exposing the whole module is a vulnerability
})