const {app, BrowserWindow} = require('electron');

const window_width = 800;
const window_height = 600;
const window_title = "Simple Template";

const base_index = 'loader.html';

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: window_width,
    height: window_height,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile(base_index);
  mainWindow.setTitle(window_title);

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {if (process.platform !== 'darwin') app.quit()});

app.on('activate', () => { if (mainWindow === null) createWindow() });

// Put the rest of your code here.