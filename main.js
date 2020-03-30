const { ipcMain } = require('electron') 
const { app } = require('electron');
const { BrowserWindow } = require('electron')

app.on('ready',() => {
	console.log("Start application");
	let mainWindow = new BrowserWindow({
		width: 1280,
		height: 720
	});
	//mainWindow.loadURL('https://www.google.com');
	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
	app.quit();
});


ipcMain.on('open-window-about', () => {
	let aboutWindow = new BrowserWindow({
		width:300,
		height: 200
	});
	
	aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
});
