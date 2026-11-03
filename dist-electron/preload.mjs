"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("versions", {
  //use exposeInMainWorld to expose the api throught the apikey to the renderer
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});
electron.contextBridge.exposeInMainWorld("tester", {
  VariableTest: "Preload Variable Test Working",
  FunctionTest: () => {
    return "Preload Function Test Working";
  }
});
electron.contextBridge.exposeInMainWorld("TitleBarFunction", {
  close: () => electron.ipcRenderer.invoke("CloseButton"),
  maximize: () => electron.ipcRenderer.invoke("MaximizeButton"),
  minimize: () => electron.ipcRenderer.invoke("MinimizeButton")
  //wrap ipcRend... in helper function otherwise exposing the whole module is a vulnerability
});
