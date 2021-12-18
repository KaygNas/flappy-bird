import Game from './modules/Game'

const WINDOW_SIZE = {
	WIDTH: 800,
	HEIGHT: 400,
}

window.onload = () => {
	const gameWindow = document.querySelector('#gameWindow') as HTMLCanvasElement
	gameWindow.width = WINDOW_SIZE.WIDTH
	gameWindow.height = WINDOW_SIZE.HEIGHT
	const ctx = gameWindow.getContext('2d')
	if (!ctx) return
	new Game(
		{ width: WINDOW_SIZE.WIDTH, height: WINDOW_SIZE.HEIGHT },
		//
		ctx,
	).start()
}
