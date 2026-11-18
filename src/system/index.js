const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const { launchPermited } = require('./init.js');

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, '../bridge.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.loadFile('../renderer/index.html');

  ipcMain.on('window-minimize', () => mainWindow.minimize());
  ipcMain.on('window-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });
  ipcMain.on('window-close', () => mainWindow.close());

  mainWindow.webContents.on('did-finish-load', () => {
    if (launchPermited()) {
      setTimeout(() => {
          mainWindow.webContents.send('launch-permited', true);
      }, 1000);
    }
  });

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
