const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electron', {
  dragIt: (fileName) => ipcRenderer.send('dragIt', fileName)
})