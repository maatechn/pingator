const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const { launchPermited } = require('./init.js');
const Store = require('./storage.js');

const filePath = path.join(app.getPath('userData'), 'data.json');
console.log('FILE PATH: ' + filePath);

function createWindow() {

  const mainWindow = new BrowserWindow({
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

  ipcMain.handle('save-json', async (event, data) => {
    console.log('DATA: ' + data);
    const store = new Store(filePath);
    return store.save(data);
  });

  ipcMain.handle('load-json', async () => {
    const store = new Store(filePath);
    return store.load();
  });

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
