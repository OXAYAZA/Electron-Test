const { app, BrowserWindow } = require( 'electron' );

app.whenReady().then( function () {
	// Создаем окно браузера.
	// https://www.electronjs.org/docs/api/browser-window
	let win = new BrowserWindow({
		//fullscreen: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// Загружаем index.html
	win.loadFile( 'index.html' );

	// Убираем строку меню
	//win.removeMenu();

	// Открываем инсрументы разработчика в отдельном окне
	//win.webContents.openDevTools({ mode: 'detach' });
});
