/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    APP_ROOT: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }
}

// Used in Renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: import('electron').IpcRenderer
  versions: {
    node: () => process.versions.node
    chrome: () => process.versions.chrome
    electron: () => process.versions.electron
  }
  tester: {
    VariableTest: string
    FunctionTest: () => string
  }
}

declare const versions: Window['versions']
declare const tester: Windows['tester']
//To avoid red squigglys in renderer.ts
//Declare the api's that are exposed in preload.ts above