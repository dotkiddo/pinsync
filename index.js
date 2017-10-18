const electron = require('electron')
const path = require('path')
const url = require('url')

// Module to control application life
const app = electron.app

//Module to create native browser window
const BrowserWindow = electron.BrowserWindow

//Keep a global reference of the window object. If you don't, the window will be closed automatically when the JavaScript object is garbage collected
let mainWindow

function createWindow() {
  //create the browser window
  mainWindow = new BrowserWindow({width: 800, height: 600})
  //and load the index.html of the app
  mainWindow.loadURL(url.format({protocol: 'file', slashes: true, pathname: path.join(__dirname,'index.html')}))
  //open the devtools
  mainWindow.webContents.openDevTools()
  //emitted when the window is closed
  mainWindow.on('closed', function() {
    //dereference the window object. usually you would store windows in an array if your app supports multi windows. this is the time when you should delete the corresponding element.
    mainWindow = null
  })
}

//this method will be called when electron has finished initialization and is ready to create browser windows. some APIs can only be used after this event occurs.
app.on('ready', createWindow)

//quit when all windows are closed.
app.on('window-all-closed', function() {
  //on OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd+Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  //on OS X it is common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// in this file you can include the rest of your app's specific main process code. you can also put them in separate files and require them here
