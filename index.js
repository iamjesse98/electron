const { app, BrowserWindow } = require('electron') // electron is global
const url = require('url')  // to locate index.html

let win = null

function boot() {
	win = new BrowserWindow({
		width: 1000,
		height: 500,
		resizable: false,
		transparent: true
		//frame: false
	})
	win.loadURL(`file://${__dirname}/index.html`)

	win2 = new BrowserWindow({
		width: 500,
		height: 250,
		resizable: false,
		parent: win
		//frame: false
	})
	win2.loadURL(`https://www.google.com`)
	win2.on('close', _=> console.log('win2 was closed'))
}

app.on('ready', boot)