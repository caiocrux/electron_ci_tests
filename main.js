const { ipcMain} = require('electron') 
const { app } = require('electron');
const { BrowserWindow } = require('electron')

app.on('ready',() => {
	console.log(" ## Start application");
	let mainWindow = new BrowserWindow({
		width: 600,
		height: 350
	});
	//mainWindow.loadURL('https://www.google.com');
	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
	app.quit();
});

let aboutWindow = null;

ipcMain.on('open-window-about', () => {
	if(aboutWindow == null) {
		aboutWindow = new BrowserWindow({
			width:200,
			height: 200,
			alwaysOnTop: true,
			frame: false
		});
		aboutWindow.on('closed', () => {
			aboutWindow = null;
		});
	}
	aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
});

ipcMain.on ('close-window-about', () => {
	console.log("### closed window");
	aboutWindow.close();
});

ipcMain.on('timer-stop',(event, name, timecount) => {
    console.log(`O curso ${name} foi estudado por ${timecount}`);
});
