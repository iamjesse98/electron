const { app, BrowserWindow } = require('electron') // electron is global
const url = require('url')  // to locate index.html

function boot() {
	win = new BrowserWindow()
	win.loadURL(url.format({
		pathname: 'index.html',
		slashes: true
	}))
}

app.on('ready', boot)