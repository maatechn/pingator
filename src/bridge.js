const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('windowControls', {
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close')
});

contextBridge.exposeInMainWorld('api', {
  onPush: (callback) => {
    ipcRenderer.on('launch-permited', (event, result) => callback(result));
  },
  saveJson: (data) => ipcRenderer.invoke('save-json', data),
  loadJson: () => ipcRenderer.invoke('load-json')
});
