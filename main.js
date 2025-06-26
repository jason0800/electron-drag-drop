const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const fs = require('node:fs')
const https = require('node:https')
const { log } = require('node:console')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

const iconPath = path.join(__dirname, 'banana.png')

// Create a new file to copy - you can also copy existing files.
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# File to test drag and drop')

const handleDrag = (event, fileName)  => {

  event.sender.startDrag({
    file: path.join(__dirname, fileName),
    icon: iconPath
  })
}

app.whenReady().then(() => {
  createWindow()
  ipcMain.on('dragIt', handleDrag)
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})