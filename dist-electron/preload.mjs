"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("versions", {
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
