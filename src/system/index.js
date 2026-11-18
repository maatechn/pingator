const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const windowWidth = 800;
const windowHeight = 600;

let mainWindow;
let preloadWindow;

function createWindows() {

  preloadWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false
  });
  preloadWindow.loadFile('../renderer/preloader.html');

  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    frame: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.loadFile('../renderer/index.html');

  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      if (preloadWindow && !preloadWindow.isDestroyed()) {
        preloadWindow.close();
      }
      mainWindow.show();
    }, 600);
  });

  ipcMain.on('window-minimize', () => mainWindow.minimize());
  ipcMain.on('window-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });
  ipcMain.on('window-close', () => mainWindow.close());

}

app.whenReady().then(createWindows);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
