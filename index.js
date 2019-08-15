// const electron = require("electron");
const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });

  app.on("ready", createWindow);
  app.on("activate", () => {
    if (win === null) createWindow();
  });
}
