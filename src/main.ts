import Game, { GAME_STATUS } from './modules/Game'

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
	const game = new Game(
		{ width: WINDOW_SIZE.WIDTH, height: WINDOW_SIZE.HEIGHT },
		//
		ctx,
	)
	game.start()
	gameWindow.onclick = () => {
		game.status === GAME_STATUS.PAUSED ? game.start() : game.pause()
	}
}
