// Preload (Isolated World)
import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('tester', {
  VariableTest: "Preload Variable Test Working",
  FunctionTest: () => { return "Preload Function Test Working" }
})
